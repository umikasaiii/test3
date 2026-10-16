/* Test del riepilogo di fine lezione (inglese/giapponese), della traduzione al tocco e degli approfondimenti esterni. */
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const file = 'file://' + path.join(__dirname, '..', 'index.html');
let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 } }); const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(file); await page.waitForSelector('#ob-name'); await page.evaluate(() => ST.acts['ob-start']());
  const body = () => page.evaluate(() => document.getElementById('app').innerText);
  const CIA = 'cyb-triade-cia-e-minacce', MOTO = 'moto-urb-percezione-smidsy', OTHER = 'cyb-reti-e-protocolli';
  const goLesson = (id, p) => page.evaluate(([id, p]) => { ST.app.stack = []; ST.app.go('lesson', { id, page: p }); }, [id, p]);
  await goLesson(CIA, 0); await page.waitForTimeout(150);
  ok(!(await page.evaluate(() => !!document.getElementById('summary-card'))), 'nelle pagine intermedie il riepilogo non compare');
  ok(!(await page.evaluate(() => !!document.getElementById('lang-fab'))), 'nessuna icona di lingua fissa');
  await goLesson(CIA, 6); await page.waitForTimeout(200);
  ok(await page.evaluate(() => !!document.getElementById('summary-card')), 'a fine lezione compare il riepilogo');
  let bb = await body(); ok(/Riepilogo · Summary/.test(bb) && /confidentiality/i.test(bb), 'riepilogo in inglese (default)');
  ok(await page.evaluate(() => document.querySelectorAll('#summary-card .gl').length >= 4), 'i termini sono toccabili');
  await page.click('#summary-card .gl'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /riservatezza/i.test((document.getElementById('gl-pop') || { innerText: '' }).innerText)), 'il tocco mostra la traduzione dal glossario');
  await page.evaluate(() => { const p = document.getElementById('gl-pop'); p && p.remove(); });
  await page.click('#summary-card [data-act="sumLang"][data-l="ja"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => !!document.querySelector('#summary-card ruby')), 'riepilogo in giapponese con furigana');
  ok(await page.evaluate(() => /kimitsusei|kimitsu/.test(document.getElementById('summary-card').innerHTML.toLowerCase()) || /romaji/.test(document.getElementById('summary-card').innerText)), 'romaji disponibile');
  await page.evaluate(() => { const el = document.querySelector('#summary-card .gl'); const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); });
  await page.waitForTimeout(900); ok(await page.evaluate(() => !!document.getElementById('gl-pop')), 'la selezione di testo apre la traduzione');
  await goLesson(MOTO, 7); await page.waitForTimeout(200); ok(await page.evaluate(() => !!document.getElementById('summary-card')), 'anche le lezioni della pilota Moto mostrano il riepilogo');
  // interfaccia italiana ovunque
  await goLesson(CIA, 2); await page.waitForTimeout(150); bb = await body(); ok(/Pagina 3 di 7/.test(bb) && /Avanti →/.test(bb), 'la lezione resta tutta in italiano');
  await page.evaluate(id => { ST.app.stack = []; ST.app.go('topic', { id }); }, CIA); await page.waitForTimeout(150); bb = await body(); ok(/Esercizi applicativi/.test(bb) && !/Applied exercises/.test(bb), 'la pagina dell’argomento è in italiano');
  // approfondimento esterno
  await goLesson(CIA, 6); await page.waitForTimeout(200);
  ok(await page.evaluate(() => /Approfondisci fuori dalla piattaforma/.test(document.getElementById('app').innerText)), 'c’è la scheda «Approfondisci fuori dalla piattaforma»');
  await page.evaluate(() => { document.querySelectorAll('details').forEach(d => { if (/Approfondisci fuori/.test(d.innerText)) d.open = true; }); }); await page.waitForTimeout(100);
  ok(await page.evaluate(() => /Cerca/.test(document.getElementById('app').innerText) && /riepilogo/i.test(document.getElementById('app').innerText)), 'la scheda propone cosa cercare');
  await page.evaluate(() => { document.getElementById('ext-min').value = '25'; document.getElementById('ext-note').value = 'Lettura sulla triade CIA'; ST.acts.extAdd({ dataset: { id: 'cyb-triade-cia-e-minacce' } }); }); await page.waitForTimeout(200);
  const saved = await page.evaluate(async () => { await ST.storage.flush(); const s = await ST.storage.load(); return { n: s.ext.length, min: s.ext[0].min, ev: !!s.skills['ext:cyb-triade-cia-e-minacce'] }; });
  ok(saved.n === 1 && saved.min === 25 && saved.ev, 'l’attività esterna è salvata e crea un’evidenza ' + JSON.stringify(saved));
  await page.evaluate(() => { ST.app.state.ext[0].d = '2020-01-01'; ST.app.stack = []; ST.app.go('transfer', { t: 'ext' }); }); await page.waitForTimeout(200);
  ok(/Da ripassare/.test(await body()) && /Lettura sulla triade CIA/.test(await body()), 'dopo 7 giorni compare il controllo');
  await page.evaluate(() => ST.acts.extReview({ dataset: { id: ST.app.state.ext[0].id, v: 'good' } })); await page.waitForTimeout(150);
  ok(await page.evaluate(() => ST.app.state.ext[0].rev === 'good' && ST.transfer.dims(ST.app.state, 'ext:cyb-triade-cia-e-minacce').delayed.ok === 1), 'il controllo registra un’evidenza a distanza');
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors[0] : ''));
  await browser.close(); console.log(fails ? 'LINGUA: problemi rilevati' : 'Test del riepilogo e degli approfondimenti superati'); process.exit(fails ? 1 : 0);
})();
