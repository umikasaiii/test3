/* Test end-to-end in Chromium headless (viewport smartphone). Richiede Playwright (installato globalmente nell'ambiente).
   NON sostituisce la prova su un dispositivo Android reale: la sintesi vocale e il microfono sono simulati. */
const path = require('path'), fs = require('fs');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const file = 'file://' + path.join(__dirname, '..', 'index.html');
const shots = process.env.SHOTS || path.join(require('os').tmpdir(), 'st-shots');
fs.mkdirSync(shots, { recursive: true });
let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };

const mock = () => {
  const spoken = []; window.__spoken = spoken;
  const voices = [{ name: 'Mock GB', lang: 'en-GB', voiceURI: 'gb', localService: true }, { name: 'Mock US', lang: 'en-US', voiceURI: 'us', localService: true }, { name: 'Mock JA', lang: 'ja-JP', voiceURI: 'ja', localService: true }];
  window.SpeechSynthesisUtterance = function (t) { this.text = t; };
  Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { getVoices: () => voices, speak(u) { spoken.push({ t: u.text, lang: u.lang, v: u.voice && u.voice.name }); setTimeout(() => u.onend && u.onend({}), 30); }, cancel() {}, pause() {}, resume() {}, speaking: false, paused: false, addEventListener() {} } });
};

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 800 }, acceptDownloads: true, hasTouch: true });
  await ctx.addInitScript(mock);
  const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  const click = sel => page.locator(sel).first().click();
  const text = () => page.evaluate(() => document.body.innerText);
  const shot = n => page.screenshot({ path: path.join(shots, n + '.png') });
  const st = () => page.evaluate(() => JSON.parse(JSON.stringify(ST.app.state)));

  console.log('Avvio e onboarding');
  await page.goto(file); await page.waitForSelector('#ob-name');
  ok(/SkillTree/.test(await text()), 'schermata di onboarding');
  await page.fill('#ob-name', 'Tester'); await shot('01-onboarding');
  await click('[data-act="ob-start"]'); await page.waitForSelector('.hero');
  let t = await text();
  ok(/Lv 1/.test(t) && /XP/.test(t), 'barra superiore con livello e XP');
  ok(/Inglese · 25 min/.test(t) && /Giapponese · 20 min/.test(t) && /Generale · 15 min/.test(t), 'tre missioni 25/20/15 (mesi 1–8)');
  ok(/Prossimo livello: \d+ XP/.test(t), 'XP mancanti al prossimo livello');
  await shot('02-home');

  console.log('Lezione a pagine (inglese)');
  await click('[data-view="mission"][data-p*="en"]'); await page.waitForSelector('.item[data-act="mblock"]');
  await shot('03-mission-en');
  const blocks = await page.locator('.item[data-act="mblock"]').count(); ok(blocks >= 2, 'missione inglese con blocchi (' + blocks + ')');
  await page.evaluate(() => ST.app.go('lesson', { id: 'eng-l0-habits', page: 0 })); await page.waitForSelector('.reader');
  ok(/Pagina 1 di 7/.test(await text()), 'lezione con indicatore «Pagina 1 di 7»');
  await click('[data-act="lpage"][data-k="1"]:not([disabled])'); await page.waitForSelector('.reader');
  ok(/Pagina 2 di 7/.test(await text()), 'avanti di una pagina');
  await click('[data-act="ltoc"]'); ok(/Indice/.test(await text()), 'indice navigabile'); await shot('04-lesson');
  await page.reload(); await page.waitForSelector('.hero'); await page.waitForTimeout(400);
  let s = await st(); ok(s.topics['eng-l0-habits'] && s.topics['eng-l0-habits'].page === 1, 'pagina corrente salvata e ripresa dopo il ricaricamento (IndexedDB su file://)');
  ok(s.onboarded && s.profile.name === 'Tester', 'profilo persistito');

  console.log('Fine lezione → studied, carte e XP');
  await page.evaluate(() => { ST.app.go('lesson', { id: 'eng-l0-habits', page: 6 }); });
  await page.waitForSelector('.reader'); await page.waitForTimeout(200);
  s = await st(); ok(!!s.topics['eng-l0-habits'].studied, 'lezione segnata come letta all’ultima pagina');
  ok(Object.keys(s.cards).length >= 8, 'lessico aggiunto al ripasso dilazionato (' + Object.keys(s.cards).length + ' carte)');
  ok(s.xp > 0, 'XP assegnati (' + s.xp + ')');

  console.log('Esercizi e feedback');
  await page.evaluate(() => ST.acts.startPractice('eng-l0-habits')); await page.waitForSelector('#fb, .opt, #fill, .chips');
  let n = 0;
  for (let i = 0; i < 12; i++) {
    const done = await page.evaluate(() => !!(ST.app.run && ST.app.run.phase === 'done'));
    if (done) break;
    const kind = await page.evaluate(() => ST.app.run.cur.t);
    if (kind === 'mc') await page.evaluate(() => { const r = ST.app.run; document.querySelectorAll('.opt')[r.cur.a2].click(); });
    else if (kind === 'fill') { await page.fill('#fill', await page.evaluate(() => ST.app.run.cur.a[0])); await click('[data-act="run-fill"]'); }
    else if (kind === 'order') { await page.evaluate(() => { const r = ST.app.run; r.cur.words.forEach((w, k) => { const idx = r.cur.tok.findIndex(x => x.i === k); document.querySelectorAll('[data-act="run-tok"]')[idx].click(); }); }); await click('[data-act="run-order"]'); }
    await page.waitForSelector('[data-act="run-next"]'); n++;
    if (i === 0) { ok(/Corretto/.test(await text()), 'feedback «Corretto» dopo risposta esatta'); await shot('05-exercise-feedback'); }
    await click('[data-act="run-next"]'); await page.waitForTimeout(60);
  }
  ok(/\d+ \/ \d+/.test(await text()), 'schermata di riepilogo (' + n + ' esercizi)');
  await click('[data-act="run-close"]'); await page.waitForTimeout(200);
  s = await st(); ok(s.topics['eng-l0-habits'].ex[0] && s.topics['eng-l0-habits'].ex[0].ok, 'esiti per esercizio salvati');
  ok(['practiced', 'studied'].includes(await page.evaluate(() => ST.progress.topicStatus(ST.app.state, 'eng-l0-habits'))), 'stato argomento coerente (non «verificato» lo stesso giorno)');

  console.log('Verifica lo stesso giorno non conta');
  await page.evaluate(() => ST.acts.startTest('eng-l0-habits'));
  await page.waitForSelector('.opt');
  for (let i = 0; i < 6; i++) {
    if (await page.evaluate(() => ST.app.run.phase === 'done')) break;
    await page.evaluate(() => { const r = ST.app.run; if (r.cur.t === 'mc') document.querySelectorAll('.opt')[r.cur.a2].click(); else { document.querySelector('#fill').value = r.cur.a[0]; ST.acts['run-fill'](); } });
    await page.waitForSelector('[data-act="run-next"]'); await click('[data-act="run-next"]'); await page.waitForTimeout(50);
  }
  t = await text(); ok(/non conta come verifica/.test(t), 'avviso: test nello stesso giorno della lezione non è una verifica'); ok(await page.evaluate(() => ST.progress.topicStatus(ST.app.state, 'eng-l0-habits')) !== 'verified', 'stato NON verified');
  await click('[data-act="run-close"]');

  console.log('Audio (TTS simulata): ascolto senza testo');
  await page.evaluate(() => { ST.app.setTab('home'); });
  await page.evaluate(() => ST.acts.startListening('en')); await page.waitForSelector('#lp');
  ok(await page.locator('#lg').isDisabled(), '«Rispondi» disabilitato prima del primo ascolto');
  await click('#lp'); await page.waitForTimeout(1200);
  const sp = await page.evaluate(() => window.__spoken); ok(sp.length >= 3, 'brano riprodotto a frasi (' + sp.length + ' frasi), voce: ' + (sp[0] && sp[0].v));
  ok(!/The speaker|Hi Sam/.test(await text()), 'trascrizione NON mostrata durante l’ascolto');
  await click('#lg'); await page.waitForSelector('.opt');
  for (let i = 0; i < 3; i++) { await page.evaluate(() => document.querySelectorAll('.opt')[ST.app.run.cur.a2].click()); await page.waitForSelector('[data-act="run-next"]'); await click('[data-act="run-next"]'); await page.waitForTimeout(40); }
  ok(/Trascrizione/.test(await text()), 'trascrizione mostrata solo dopo le risposte'); await shot('06-listening-done'); await click('[data-act="run-close"]');

  console.log('Dettato');
  await page.evaluate(() => ST.acts.startDictation('en')); await page.waitForSelector('#fill');
  const ref = await page.evaluate(() => ST.app.run.cur.text); await page.fill('#fill', ref); await click('[data-act="run-fill"]'); await page.waitForSelector('[data-act="run-next"]');
  ok(/Precisione: 100%/.test(await text()), 'dettato corretto = 100%');
  await page.evaluate(() => { ST.app.run = null; ST.app.stack = []; ST.app.render(); });

  console.log('Giapponese: kana, risposta in romaji, ruby');
  await page.evaluate(() => ST.acts.startKana()); await page.waitForSelector('.opt');
  ok(/posizionamento/.test(await text()), 'test di posizionamento al primo avvio del Kana Trainer');
  await page.evaluate(() => document.querySelectorAll('.opt')[ST.app.run.cur.a2].click()); await page.waitForSelector('[data-act="run-next"]');
  await page.evaluate(() => { ST.app.run = null; ST.app.stack = []; ST.app.render(); });
  await page.evaluate(() => { const t = ST.content.topic('jpn-j0-desu'); const r = ST.progress.topicRec(ST.app.state, t.id); r.studied = ST.util.today(); ST.cards.introduceTopic(ST.app.state, t); ST.app.go('lesson', { id: t.id, page: 1 }); });
  await page.waitForSelector('ruby'); ok((await page.locator('ruby').count()) > 0, 'kanji con furigana (ruby) nelle lezioni di giapponese'); await shot('07-ja-lesson');
  await click('[data-act="furi"]'); ok(await page.evaluate(() => document.getElementById('app').className.includes('nofur')), 'furigana nascondibili');
  await page.evaluate(() => { ST.app.stack = []; ST.app.render(); });
  await page.evaluate(() => { const s = ST.app.state; Object.keys(s.cards).forEach(k => { s.cards[k].due = ST.util.addDays(ST.util.today(), -1); s.cards[k].mode = 'recall'; }); });
  await page.evaluate(() => ST.acts.startReview('ja')); await page.waitForSelector('#fill');
  ok(await page.evaluate(() => ST.app.run.cur.jaReading === true), 'ripasso giapponese in modalità richiamo attivo (digitazione)');
  const reading = await page.evaluate(() => ST.app.run.cur.a[0]);
  const romaji = await page.evaluate(r => r, reading);
  await page.fill('#fill', await page.evaluate(r => { const m = { あ: 'a' }; return r; }, reading)); await click('[data-act="run-fill"]'); await page.waitForSelector('[data-act="run-next"]');
  ok(/Corretto/.test(await text()), 'risposta in kana accettata'); await page.evaluate(() => { ST.app.run = null; ST.app.stack = []; ST.app.render(); });

  console.log('Judo: sessione 5 minuti');
  await page.evaluate(() => { const s = ST.app.state; s.startDate = ST.util.addDays(ST.util.today(), -1); ST.app.day().judoPlan = null; ST.app.render(); });
  const wd = await page.evaluate(() => ST.util.weekday());
  await page.evaluate(() => ST.app.go('judoSession')); await page.waitForTimeout(100);
  t = await text();
  if (wd === 6) { ok(/riposo fisico/.test(t), 'domenica: riposo fisico, solo teoria'); }
  else {
    ok(/Prima di iniziare/.test(t), 'avviso di sicurezza prima della sessione');
    await click('#jsafe'); await click('[data-act="jstart"]'); await page.waitForSelector('#jleft');
    ok(/Fase 1\/4/.test(await text()), 'timer a 4 fasi'); await shot('08-judo-session');
    for (let i = 0; i < 4; i++) { await page.evaluate(() => ST.acts.jskip()); await page.waitForTimeout(30); }
    await page.waitForSelector('[data-act="jsave"]'); ok(/Qualità tecnica/.test(await text()), 'autovalutazione qualità/difficoltà/errori');
    await page.evaluate(() => { document.querySelector('[data-act="jrate"][data-k="q"][data-v="4"]').click(); });
    while (await page.locator('[data-act="jsave"]').count()) { await click('[data-act="jsave"]'); await page.waitForTimeout(80); if (await page.locator('#jleft').count()) { for (let i = 0; i < 4; i++) { await page.evaluate(() => ST.acts.jskip()); await page.waitForTimeout(30); } } }
    s = await st(); const ids = Object.keys(s.motor); ok(ids.length >= 1 && s.motor[ids[0]].log.length === 1, 'sessione registrata (tecniche: ' + ids.join(',') + ')'); ok(!!s.motor[ids[0]].card.due, 'prossima data di ripasso calcolata: ' + s.motor[ids[0]].card.due);
    ok(!s.motor[ids[0]].instructor, 'nessuna verifica istruttore attribuita automaticamente');
  }

  console.log('Mentale');
  await page.evaluate(() => { ST.app.stack = []; ST.app.render(); });
  await page.evaluate(() => ST.acts.startMental()); await page.waitForSelector('.card');
  const kinds = []; for (let i = 0; i < 8; i++) { kinds.push(await page.evaluate(() => ST.app.run.cur.t)); await page.evaluate(() => { const r = ST.app.run, it = r.cur; ST.runner.answer(i => i, true); }); await page.evaluate(() => ST.acts['run-next']()); }
  ok(kinds.length === 8 && new Set(kinds).size >= 2, 'sessione mentale con esercizi variati: ' + [...new Set(kinds)].join(','));
  await page.evaluate(() => { ST.app.run = null; ST.app.stack = []; ST.app.render(); });

  console.log('Schermate principali e backup');
  for (const [tab, label] of [['paths', 'Percorsi'], ['practice', 'Pratica'], ['progress', 'Progresso'], ['more', 'Altro']]) { await click('[data-tab="' + tab + '"]'); await page.waitForTimeout(80); ok((await text()).includes(label), 'tab ' + label); await shot('10-' + tab); }
  await click('[data-tab="progress"]'); t = await text(); ok(/quattro piani|Verificati|Mantenuti/.test(t), 'progresso con piani distinti'); ok(/B2 NON verificato/.test(t), 'B2 dichiarato non verificato');
  const exp = await page.evaluate(async () => JSON.stringify(await ST.storage.exportAll(false)));
  const obj = JSON.parse(exp); ok(obj.app === 'skilltree' && obj.state.topics['eng-l0-habits'], 'backup esportato contiene lo stato');
  await page.evaluate(async () => { ST.app.state = ST.storage.defaults(); await ST.storage.flush(); });
  await page.evaluate(async o => { ST.app.state = await ST.storage.importAll(JSON.parse(o)); ST.app.render(); }, exp);
  s = await st(); ok(s.profile.name === 'Tester' && s.topics['eng-l0-habits'].studied, 'ripristino del backup (persistenza fra sessioni)');
  const bad = await page.evaluate(() => ST.storage.validate({ app: 'x' })); ok(!!bad, 'backup non valido rifiutato');

  console.log('Diagnostica audio');
  await page.evaluate(() => ST.app.go('audioTest')); await page.waitForTimeout(600);
  t = await text(); ok(/Voce en-GB/.test(t) && /Mock GB/.test(t), 'diagnostica elenca le voci disponibili'); await shot('11-audio-test');

  console.log('Temi e layout mobile');
  for (const th of ['ocean', 'sunset', 'light', 'neon']) await page.evaluate(t => { ST.app.state.profile.theme = t; ST.app.theme(); }, th);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2); ok(!overflow, 'nessuno scroll orizzontale a 390 px');

  ok(errors.length === 0, 'nessun errore JavaScript' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await browser.close();
  console.log(fails ? '\n' + fails + ' controlli falliti' : '\nTutti i controlli E2E superati (browser headless, TTS/microfono simulati)');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('E2E errore:', e); process.exit(2); });
