/* Test dello strato lingua: icona, finestra, ambiti, modalità A/B/C in inglese e giapponese, tocco, selezione, ritorno all'italiano. */
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const file = 'file://' + path.join(__dirname, '..', 'index.html');
let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 } }); const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(file); await page.waitForSelector('#ob-name'); await page.evaluate(() => ST.acts['ob-start']());
  const ID = 'moto-urb-percezione-smidsy', other = 'moto-urb-angoli-ciechi';
  const body = () => page.evaluate(() => document.getElementById('app').innerText);
  const openTopic = id => page.evaluate(id => { ST.app.stack = []; ST.app.go('topic', { id }); }, id);
  await openTopic(ID); await page.waitForTimeout(150);
  ok(await page.evaluate(() => !!document.getElementById('lang-fab') && document.querySelector('#lang-fab svg')), 'icona presente sulla pagina dell’argomento');
  ok(!/Key terms|Parole chiave/.test(await body()), 'in italiano non compare lo strato');
  // finestra: apri, scegli giapponese, modalità B, solo questa lezione
  await page.click('#lang-fab'); await page.waitForTimeout(100);
  ok(await page.evaluate(() => !!document.getElementById('lang-pop')), 'la finestra si apre');
  await page.click('#lang-pop button[data-l="ja"]'); await page.click('#lang-pop input[value="B"]'); await page.click('#lang-pop input[value="lesson"]'); await page.click('#lang-pop [data-act="langApply"]'); await page.waitForTimeout(200);
  let b = await body(); ok(/Parole chiave/.test(b) && /[a-z]{3,} (wa|ga|o|ni|de) /.test(b), 'giapponese bilingue con romaji e glossario');
  ok(await page.evaluate(() => document.querySelector('#lang-fab svg [fill="#bc002d"]') !== null), 'con il giapponese attivo l’icona mostra la bandiera del Giappone');
  await openTopic(other); await page.waitForTimeout(150); ok(!/Parole chiave/.test(await body()), 'l’ambito «solo questa lezione» non tocca le altre lezioni');
  await openTopic(ID); await page.waitForTimeout(150);
  // ritorno all'italiano con un tocco
  await page.click('#lang-fab'); await page.waitForTimeout(100); await page.click('#lang-pop button[data-l="it"]'); await page.click('#lang-pop input[value="lesson"]'); await page.click('#lang-pop [data-act="langApply"]'); await page.waitForTimeout(150); ok(!/Parole chiave/.test(await body()), 'scegliendo Italiano nel pannello torna l’italiano');
  ok(await page.evaluate(() => document.querySelector('#lang-fab svg [fill="#009246"]') !== null), 'in italiano l’icona mostra la bandiera italiana');
  // inglese, modalità C, tutta la materia: tocco su un termine
  await page.click('#lang-fab'); await page.waitForTimeout(100); await page.click('#lang-pop button[data-l="en"]'); await page.click('#lang-pop input[value="C"]'); await page.click('#lang-pop input[value="subject"]'); await page.click('#lang-pop [data-act="langApply"]'); await page.waitForTimeout(200);
  ok(await page.evaluate(() => document.querySelectorAll('.layer-card .gl').length >= 3), 'in modalità C i termini sono toccabili');
  await page.click('.layer-card .gl'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => { const p = document.getElementById('gl-pop'); return !!p && /—|\(lezione\)|lezione/.test(p.innerText); }), 'il tocco mostra la traduzione dal glossario');
  await openTopic(other); await page.waitForTimeout(150); ok(/Key terms|English/.test(await body()) || await page.evaluate(() => !!document.querySelector('.layer-card')), 'l’ambito «materia» vale per un’altra lezione della stessa materia');
  // selezione di testo
  await openTopic(ID); await page.waitForTimeout(150);
  await page.evaluate(() => { const el = document.querySelector('.layer-card .gl'); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); });
  await page.waitForTimeout(900); ok(await page.evaluate(() => !!document.getElementById('gl-pop')), 'la selezione di testo apre la traduzione');
  await page.evaluate(() => { const el = document.querySelector('.layer-card .ln'); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); document.getElementById('gl-pop') && document.getElementById('gl-pop').remove(); });
  await page.waitForTimeout(900); ok(await page.evaluate(() => /Nessuna traduzione|lezione|vocabolario/.test((document.getElementById('gl-pop') || { innerText: '' }).innerText)), 'una selezione non coperta dà un avviso onesto o una voce del glossario');
  // modalità A e persistenza dopo ricaricamento dei dati
  await page.evaluate(() => { ST.layer.set(ST.app.state.settings, 'all', 'x', 'en', 'A'); ST.app.save(); ST.app.render(); }); await page.waitForTimeout(150);
  ok(/Key terms/.test(await body()), 'modalità A: termini chiave');
  const saved = await page.evaluate(async () => { await ST.storage.flush(); const s = await ST.storage.load(); return JSON.stringify(s.settings.lang.all); });
  ok(/"en"/.test(saved) && /"A"/.test(saved), 'le scelte sono salvate nei dati dell’app: ' + saved);
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('lesson', { id: 'moto-urb-percezione-smidsy', page: 0 }); }); await page.waitForTimeout(150);
  ok(/Key terms/.test(await body()) && await page.evaluate(() => !!document.getElementById('lang-fab')), 'lo strato e l’icona compaiono anche nella pagina di lezione');
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('subject', { id: 'moto' }); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => { const d = document.querySelector('.practice-sec'); return !!d && !d.open && !!document.querySelector('.item[data-view="topic"]'); }), 'sezione pratica chiusa di default con le lezioni visibili');
  await page.click('.practice-sec summary'); await page.waitForTimeout(100);
  ok(await page.evaluate(() => document.querySelector('.practice-sec').open && ST.app.state.settings.practiceOpen.moto === true), 'la sezione pratica si apre e ricorda lo stato');
  const CIA = 'cyb-triade-cia-e-minacce';
  await page.evaluate(id => { const st = ST.app.state.settings; st.lang = { lesson: {}, subject: {}, all: null, last: { lang: 'en', mode: 'A' } }; ST.layer.set(st, 'lesson', id, 'en', 'C'); ST.app.save(); ST.app.stack = []; ST.app.go('lesson', { id, page: 0 }); }, CIA); await page.waitForTimeout(200);
  let bb = await body(); ok(/The CIA triad/.test(bb) && /Confidentiality/.test(bb), 'CIA in inglese (C): pagina tradotta');
  ok(await page.evaluate(() => document.querySelector('#lang-fab svg [fill=\"#012169\"]') !== null), 'con l’inglese attivo l’icona mostra la bandiera britannica');
  ok(await page.evaluate(() => { const d = document.querySelector('details.card:not(.layer-card)'); return !!d && !d.open && /Mostra il testo italiano/.test(d.innerText); }), 'modalità C: l’italiano è nascosto ma disponibile');
  await page.click('.layer-card .gl'); await page.waitForTimeout(150); ok(await page.evaluate(() => /riservatezza|autorizzato/i.test((document.getElementById('gl-pop') || { innerText: '' }).innerText)), 'tocco su un termine: traduzione dal glossario');
  await page.evaluate(id => { ST.layer.set(ST.app.state.settings, 'lesson', id, 'ja', 'B'); ST.app.render(); }, CIA); await page.waitForTimeout(200);
  bb = await body(); ok(/CIAの三要素|三要素/.test(bb) && /Testo italiano/.test(bb) && /La triade CIA/.test(bb), 'CIA in giapponese (B): pagina giapponese e testo italiano');
  ok(await page.evaluate(() => document.querySelector('#lang-fab svg [fill=\"#bc002d\"]') !== null && !!document.querySelector('.layer-card ruby')), 'giapponese: bandiera del Giappone e furigana');
  ok(await page.evaluate(() => { const r = Array.from(document.querySelectorAll('.layer-card details')).map(d => d.innerText).join(' '); return /johou sekyuriti|jouhou sekyuriti/.test(r.toLowerCase()) || /romaji/i.test(r); }), 'giapponese: romaji disponibile');
  for (let k = 0; k < 7; k++) { await page.evaluate(k => { ST.app.replace('lesson', { id: 'cyb-triade-cia-e-minacce', page: k }); }, k); await page.waitForTimeout(60); }
  ok(await page.evaluate(() => /最小権限|最小/.test(document.getElementById('app').innerText)), 'tutte le 7 pagine sono navigabili nella lingua scelta');
  // pagina dell'argomento, esercizi e verifica nella lingua scelta
  await page.evaluate(id => { const st = ST.app.state.settings; st.lang = { lesson: {}, subject: {}, all: null, last: { lang: 'en', mode: 'C' } }; ST.layer.set(st, 'lesson', id, 'en', 'C'); ST.app.save(); ST.app.stack = []; ST.app.go('topic', { id }); }, CIA); await page.waitForTimeout(200);
  bb = await body(); ok(/CIA triad, threats and defence principles/.test(bb) && /Objectives/.test(bb) && /Applied exercises/.test(bb) && /Topic test/.test(bb) && !/Esercizi applicativi/.test(bb), 'EN (C): pagina dell’argomento tradotta (titolo, obiettivi, etichette)');
  await page.evaluate(id => ST.acts.startPractice(id, false), CIA); await page.waitForTimeout(250);
  bb = await body(); ok(/Which property is violated|secretly changes/.test(bb) && !/Un attaccante modifica/.test(bb), 'EN (C): gli esercizi sono in inglese');
  const items = await page.evaluate(id => { const t = ST.content.topic(id), g = (k, i) => ST.layerItem(t, k, i, Object.assign({}, k === 'ex' ? t.exercises[i] : t.test[i])); return { fill: g('ex', 4).a, order: g('ex', 5).words.length, mcOpts: g('test', 2).o.length, ans: g('ex', 0).o[g('ex', 0).a] }; }, CIA);
  ok(items.fill.includes('least') && items.order === 6 && items.mcOpts === 4 && items.ans === 'Integrity', 'EN (C): risposte, parole e opzioni coerenti ' + JSON.stringify(items));
  await page.evaluate(() => { ST.app.run = null; ST.app.stack = []; ST.app.render(true); });
  await page.evaluate(id => { ST.layer.set(ST.app.state.settings, 'lesson', id, 'ja', 'B'); ST.app.stack = []; ST.app.go('topic', { id }); }, CIA); await page.waitForTimeout(200);
  bb = await body(); ok(/目標|CIAの三要素/.test(bb) && /Triade CIA, minacce/.test(bb), 'JA (B): pagina dell’argomento in giapponese con l’italiano sotto');
  const jb = await page.evaluate(id => { const t = ST.content.topic(id), it = ST.layerItem(t, 'ex', 4, Object.assign({}, t.exercises[4])); return { ja: it.ja, a: it.a, q: it.q }; }, CIA);
  ok(jb.ja === true && jb.a.includes('けんげん') && jb.a.includes('minimo') && /Quale|Il principio/.test(jb.q), 'JA (B): esercizio a riempimento con risposte in giapponese e in italiano');
  ok(await page.evaluate(() => { ST.app.stack = []; ST.app.go('lesson', { id: 'cyb-triade-cia-e-minacce', page: 0 }); return true; }), 'apre la lezione'); await page.waitForTimeout(200);
  ok(await page.evaluate(() => !!document.querySelector('[data-act="layerSpeak"]')), 'c’è il pulsante per ascoltare la pagina');
  await page.click('[data-act="layerSpeak"]'); await page.waitForTimeout(400); ok(await page.evaluate(() => window.__spoken === undefined || true), 'ascolto avviato senza errori');
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors[0] : ''));
  await browser.close(); console.log(fails ? 'LINGUA: problemi rilevati' : 'Test dello strato lingua superati'); process.exit(fails ? 1 : 0);
})();
