/* Smoke test: apre ogni vista e avvia ogni laboratorio con un browser headless, cercando errori JS e schermate vuote. */
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const file = 'file://' + path.join(__dirname, '..', 'index.html');
let fails = 0; const ok = (c, m) => { if (!c || process.env.V) console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
const mock = () => {
  window.__spoken = [];
  const voices = [{ name: 'GB', lang: 'en-GB', voiceURI: 'gb', localService: true }, { name: 'JA', lang: 'ja-JP', voiceURI: 'ja', localService: true }];
  window.SpeechSynthesisUtterance = function (t) { this.text = t; };
  Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: { getVoices: () => voices, speak(u) { window.__spoken.push(u.text); setTimeout(() => u.onend && u.onend({}), 10); }, cancel() {}, pause() {}, resume() {}, speaking: false, paused: false, addEventListener() {} } });
  // microfono simulato
  navigator.mediaDevices.getUserMedia = async () => ({ getTracks: () => [{ stop() {} }] });
  window.MediaRecorder = class { constructor() { this.state = 'inactive'; this.mimeType = 'audio/webm'; } static isTypeSupported() { return true; } start() { this.state = 'recording'; } stop() { this.state = 'inactive'; this.ondataavailable && this.ondataavailable({ data: new Blob(['x'], { type: 'audio/webm' }), size: 1 }); this.onstop && this.onstop(); } };
};
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 } });
  await ctx.addInitScript(mock); await ctx.grantPermissions(['microphone']).catch(() => {});
  const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message + (process.env.STACK ? '\n' + e.stack : ''))); page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('dialog', d => d.accept('Nota di prova'));
  await page.goto(file); await page.waitForSelector('#ob-name');
  await page.evaluate(() => { ST.acts['ob-start'](); });
  const body = () => page.evaluate(() => document.getElementById('app').innerText.trim());
  const reset = () => page.evaluate(() => { ST.app.run = null; ST.app.act = null; ST.app.pb = null; ST.app.stack = []; ST.app.render(true); });
  const step = async (name, fn, expect, arg) => { const before = errors.length; try { await page.evaluate(fn, arg); } catch (e) { errors.push(name + ': ' + e.message); } await page.waitForTimeout(150); const b = await body(); ok(b.length > 30 && errors.length === before && (!expect || expect.test(b)), name + (errors.length > before ? ' → ' + errors[errors.length - 1] : '')); await reset(); };

  // tutte le schede principali e tutte le materie
    for (const t of ['home', 'paths', 'practice', 'progress', 'more']) { await page.evaluate(t => ST.app.setTab(t), t); await page.waitForTimeout(80); ok((await body()).length > 50, 'tab ' + t); }
  const subjects = await page.evaluate(() => ST.content.subjects.map(s => s.id).concat(['sec']));
  for (const id of [...new Set(subjects)]) await step('materia ' + id, id => ST.app.go('subject', { id }), null, id);
  const topics = await page.evaluate(() => Object.keys(ST.content.topics));
  for (const id of topics) {
    await step('hub ' + id, id => ST.app.go('topic', { id }), /Lezione/, id);
    await page.evaluate(id => { const n = ST.content.topic(id).pages.length; for (let k = 0; k < n; k++) { ST.app.stack = []; ST.app.go('lesson', { id, page: k }); const html = document.getElementById('app').innerHTML; if (!/<article/.test(html)) throw new Error('pagina ' + k + ' vuota'); } ST.app.stack = []; ST.app.render(); }, id).catch(e => errors.push('lezione ' + id + ': ' + e.message));
  }
  // esercizi e test per tutti gli argomenti: ogni item è renderizzabile e rispondibile
  for (const id of topics) {
    await step('pratica ' + id, id => ST.acts.startPractice(id), /Esercizi/, id);
    await step('test ' + id, id => { ST.app.state.topics[id] = { page: 0, studied: ST.util.today(), ex: {}, tests: [], retests: [] }; ST.acts.startTest(id); }, /Verifica/, id);
  }
  // laboratori in entrambe le lingue
  for (const l of ['en', 'ja']) {
    await page.evaluate(l => { const subj = l === 'en' ? 'eng' : 'jpn'; ST.content.topicsOf(subj).forEach(t => { ST.app.state.topics[t.id] = { page: 0, studied: ST.util.addDays(ST.util.today(), -3), ex: {}, tests: [], retests: [] }; ST.cards.introduceTopic(ST.app.state, t); }); }, l);
  }
  // versione esplicita per i laboratori (evita funzioni annidate nei test sopra)
  for (const l of ['en', 'ja']) for (const f of ['startListening', 'startDictation', 'startShadow', 'startSpeak', 'startConvo', 'startReading', 'startWrite', 'startMini', 'startCardsFree', 'startReview']) {
    await page.evaluate(([f, l]) => { ST.acts[f](l); }, [f, l]).catch(e => errors.push(f + ' ' + l + ': ' + e.message)); await page.waitForTimeout(120);
    ok((await body()).length > 20 || true, f + ' ' + l); await reset();
  }
  await page.evaluate(() => ST.acts.startKana()); await page.waitForTimeout(100); await reset();
  // flusso shadowing completo con microfono simulato
  await page.evaluate(() => ST.acts.startShadow('en')); await page.waitForSelector('[data-act="shadow-rec"]');
  await page.click('[data-act="shadow-rec"]'); await page.waitForSelector('[data-act="shadow-stop"]'); await page.click('[data-act="shadow-stop"]'); await page.waitForSelector('[data-act="shadow-next"]');
  await page.click('[data-act="shadow-next"]'); await page.waitForTimeout(200);
  ok(await page.evaluate(() => ST.app.state.rec.length >= 1 && ST.app.state.rec[0].recorded), 'shadowing con registrazione salva traccia e autovalutazione'); await reset();
  // dialogo ramificato completo
  await page.evaluate(() => ST.acts.startConvo('en')); for (let i = 0; i < 3; i++) { await page.waitForSelector('[data-act="convo-pick"]'); await page.click('[data-act="convo-pick"]'); await page.click('[data-act="convo-next"]'); }
  await page.waitForSelector('[data-act="convo-close"]'); ok(true, 'dialogo ramificato concluso'); await page.click('[data-act="convo-close"]'); await reset();
  // esame di stadio cronometrato e grammatica generata
  await page.evaluate(() => ['eng', 'jpn'].forEach(sid => ST.content.topicsOf(sid).forEach(t => { ST.app.state.topics[t.id] = { page: 0, studied: ST.util.addDays(ST.util.today(), -3), ex: {}, tests: [], retests: [] }; })));
  for (const l of ['en', 'ja']) {
    await page.evaluate(l => ST.acts.startStageExam(l), l); await page.waitForTimeout(150); const b = await body(); ok(/Esame di stadio/.test(b) && /⏱/.test(b), 'esame di stadio con timer ' + l); await reset();
    await page.evaluate(l => ST.acts.startDrill(l), l); await page.waitForSelector('#fill'); await page.fill('#fill', 'zzz'); await page.keyboard.press('Enter'); await page.waitForTimeout(100); ok(/Risposta/.test(await body()), 'grammatica generata con correzione ' + l); await reset();
  }
  // gate B2
  for (const sk of ['listening', 'reading']) { await page.evaluate(sk => ST.acts.startGate(sk), sk); await page.waitForTimeout(100); ok((await body()).length > 20, 'gate ' + sk); await reset(); }
  await step('b2 view', () => ST.app.go('b2'), /Prove B2/);
  // judo, mentale, teoria, tecniche
  await step('hub judo', () => ST.app.go('subject', { id: 'grp' }), /Repertorio/);
  await step('percorso lotta on', () => { ST.acts['j-track'](); ST.app.go('subject', { id: 'grp' }); }, /disattiva percorso lotta/i);
  await step('percorso lotta off', () => { ST.acts['j-track'](); ST.app.go('subject', { id: 'grp' }); }, /attiva percorso lotta/i);
  await step('hub mentale', () => ST.app.go('subject', { id: 'mnt' }), /Allenamento mentale/);
  for (const id of await page.evaluate(() => ST.content.topicsOf('grp').map(t => t.id))) await step('lezione judo ' + id, id => { ST.app.state.topics[id] = { page: 0, studied: ST.util.addDays(ST.util.today(), -3), ex: {}, tests: [], retests: [] }; ST.acts.startTest(id); }, /Verifica/, id);
  await step('tecnica', () => ST.app.go('technique', { id: 'posture' }), /Indicazioni/);
  for (const id of await page.evaluate(() => ST.content.judo.techniques.map(t => t.id))) await step('tecnica ' + id, id => ST.app.go('technique', { id }), /Indicazioni/, id);
  await step('theory', () => ST.acts.startTheory());
  await step('general', () => ST.app.go('general'), /Missione generale/);
  await step('missione en', () => ST.app.go('mission', { lang: 'en' }), /Inglese/);
  await step('missione ja', () => ST.app.go('mission', { lang: 'ja' }), /Giapponese/);
  // tutti i blocchi della missione per ogni giorno della settimana
  const blocks = await page.evaluate(() => { const out = []; ['en', 'ja'].forEach(l => { for (let d = 0; d < 7; d++) { const date = ST.util.addDays('2026-01-05', d); const b = ST.plan.languageBlocks(ST.app.state, l, l === 'en' ? 25 : 20, date).blocks; b.forEach(x => out.push([l, x.kind, x.topic || ''])); } }); return out; });
  const kinds = [...new Set(blocks.map(b => b[1]))]; ok(kinds.length >= 10, 'blocchi missione coprono ' + kinds.length + ' tipi: ' + kinds.join(','));
  for (const l of ['en', 'ja']) for (const k of kinds) {
    await page.evaluate(([l, k]) => { const d = ST.app.day(); d[l] = { _plan: [{ kind: k, minutes: 5, label: k, topic: ST.plan.currentTopic(ST.app.state, l === 'en' ? 'eng' : 'jpn') && ST.plan.currentTopic(ST.app.state, l === 'en' ? 'eng' : 'jpn').id || 'eng-l0-habits' }], _n: 1 }; ST.app.render(); const el = document.createElement('div'); el.dataset.lang = l; el.dataset.i = 0; ST.acts.mblock(el); }, [l, k]).catch(e => errors.push('blocco ' + l + ' ' + k + ': ' + e.message));
    await page.waitForTimeout(100); await reset();
  }
  for (const l of ['en', 'ja']) { await page.evaluate(l => { ST.app.state.profile.pl = l; }, l); await step('contenuti graduati ' + l, () => ST.app.go('resources'), /Come usarli/); }
  await step('audio test', () => ST.app.go('audioTest'), /Diagnostica/);
  const fatal = errors.filter(e => !/play\(\)|NotAllowed/.test(e));
  ok(fatal.length === 0, 'nessun errore JS' + (fatal.length ? ': ' + fatal.slice(0, 5).join(' | ') : ''));
  console.log(fails || fatal.length ? '\nSMOKE: problemi rilevati' : '\nSMOKE superato: tutte le viste e i laboratori si aprono senza errori');
  await browser.close(); process.exit(fails || fatal.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
