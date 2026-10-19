/* E2E vNext: apre index.vnext.html (index + pacchetto) in Chromium e verifica tessera in home, hub dell'Academy e assenza di errori JS.
   Prima: node tools/build-vnext.js --combined */
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const file = 'file://' + path.join(__dirname, '..', '..', 'dist-vnext', 'index.vnext.html');
let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const page = await (await browser.newContext({ viewport: { width: 360, height: 740 } })).newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/ERR_FILE_NOT_FOUND/.test(m.text())) errors.push(m.text()); }); // manifest/icon non esistono in dist-vnext/
  await page.goto(file); await page.waitForSelector('#ob-name'); await page.evaluate(() => ST.acts['ob-start']()); await page.waitForTimeout(300);
  ok(await page.evaluate(() => !!document.querySelector('[data-sma-tile]')), 'la home mostra la tessera Strategic Mastery Academy');
  await page.click('[data-sma-tile]'); await page.waitForTimeout(250);
  const txt = await page.evaluate(() => document.getElementById('app').innerText);
  ok(/Strategic Mastery Academy/.test(txt) && /Detective Intelligence/.test(txt) && /Leadership & Decisions/.test(txt), 'il hub mostra i quattro percorsi');
  ok(/Non ancora implementato/.test(txt), 'i laboratori non implementati sono dichiarati tali');
  ok(/L5/.test(txt) && /non è una valutazione psicometrica/.test(txt), 'livelli e avvertenza sul profilo');
  ok(await page.evaluate(() => { const r = document.querySelector('.sma-hub').getBoundingClientRect(); return r.width <= innerWidth; }), 'nessun overflow orizzontale a 360px');
  // regressione: le viste esistenti continuano ad aprirsi
  for (const v of [['subject', { id: 'str' }], ['subject', { id: 'mnt' }], ['optlab', {}], ['transfer', {}]]) {
    await page.evaluate(([n, p]) => { ST.app.stack = []; ST.app.go(n, p); }, v); await page.waitForTimeout(120);
    ok(await page.evaluate(() => document.getElementById('app').innerText.length > 80), 'vista esistente ' + v[0] + ' ' + (v[1].id || '') + ' funziona');
  }
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors[0] : ''));
  await browser.close(); console.log(fails ? 'FALLITO (' + fails + ')' : 'E2E vNext superato'); process.exit(fails ? 1 : 0);
})();
