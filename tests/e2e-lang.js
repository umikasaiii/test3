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
  ok(await page.evaluate(() => document.querySelector('#lang-fab svg [fill="#009246"]') !== null), 'l’icona mostra la bandiera italiana per tornare indietro');
  await openTopic(other); await page.waitForTimeout(150); ok(!/Parole chiave/.test(await body()), 'l’ambito «solo questa lezione» non tocca le altre lezioni');
  await openTopic(ID); await page.waitForTimeout(150);
  // ritorno all'italiano con un tocco
  await page.click('#lang-fab'); await page.waitForTimeout(150); ok(!/Parole chiave/.test(await body()), 'un tocco sulla bandiera italiana riporta l’italiano');
  ok(await page.evaluate(() => document.querySelector('#lang-fab svg [fill="#009246"]') === null), 'l’icona torna alla bandiera della lingua');
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
  await page.waitForTimeout(900); ok(await page.evaluate(() => /Nessuna traduzione|—/.test((document.getElementById('gl-pop') || { innerText: '' }).innerText)), 'una selezione non coperta dà un avviso onesto o una voce del glossario');
  // modalità A e persistenza dopo ricaricamento dei dati
  await page.evaluate(() => { ST.layer.set(ST.app.state.settings, 'all', 'x', 'en', 'A'); ST.app.save(); ST.app.render(); }); await page.waitForTimeout(150);
  ok(/Key terms/.test(await body()), 'modalità A: termini chiave');
  const saved = await page.evaluate(async () => { await ST.storage.flush(); const s = await ST.storage.load(); return JSON.stringify(s.settings.lang.all); });
  ok(/"en"/.test(saved) && /"A"/.test(saved), 'le scelte sono salvate nei dati dell’app: ' + saved);
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('lesson', { id: 'moto-urb-percezione-smidsy', page: 0 }); }); await page.waitForTimeout(150);
  ok(/Key terms/.test(await body()) && await page.evaluate(() => !!document.getElementById('lang-fab')), 'lo strato e l’icona compaiono anche nella pagina di lezione');
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors[0] : ''));
  await browser.close(); console.log(fails ? 'LINGUA: problemi rilevati' : 'Test dello strato lingua superati'); process.exit(fails ? 1 : 0);
})();
