/* E2E allenamento mentale: reattività e n-back completati davvero (tocchi simulati da un bot). */
const path = require('path'); let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const page = await (await b.newContext({ viewport: { width: 360, height: 740 } })).newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('file://' + path.join(__dirname, '..', 'index.html')); await page.waitForSelector('#ob-name'); await page.evaluate(() => ST.acts['ob-start']());
  // react: tocca ogni stimolo verde appena appare
  await page.evaluate(() => { ST.mental.make = (function (orig) { return (t, lv, r) => { const it = orig(t, lv, r); if (t === 'react') { it.trials.forEach(x => { x.delay = 300; x.go = true; }); it.trials = it.trials.slice(0, 3); } return it; }; })(ST.mental.make); ST.acts.startMentalType({ dataset: { t: 'react' } }); });
  let tapped = 0; const t0 = Date.now();
  while (Date.now() - t0 < 20000) {
    const st = await page.evaluate(() => { const b = document.getElementById('rbox'); return b ? [b.style.background, b.textContent] : null; });
    if (!st) break;
    if (/31, 157, 85|1f9d55/.test(st[0]) && st[1] === '●') { await page.click('[data-act="run-react"]'); tapped++; await page.waitForTimeout(900); } else await page.waitForTimeout(30);
  }
  await page.waitForTimeout(800);
  const res = await page.evaluate(() => ({ phase: ST.app.run && ST.app.run.phase, i: ST.app.run && ST.app.run.i, last: ST.app.run && ST.app.run.res.slice(-1)[0] && { ok: ST.app.run.res.slice(-1)[0].ok, score: ST.app.run.res.slice(-1)[0].score, val: ST.app.run.res.slice(-1)[0].val } }));
  ok(tapped === 3 && res.last && res.last.ok && res.last.score === 1, 'reattività: 3 stimoli toccati in tempo → blocco superato'); ok(!errs.length, 'reattività: nessun errore JS');
  // n-back: tocca sempre al bersaglio
  await page.evaluate(() => { ST.app.run = null; ST.app.go('home'); ST.mental.make = (function (orig) { return (t, lv, r) => { const it = orig(t, lv, r); if (t === 'nback') { it.ms = 250; } return it; }; })(ST.mental.make); ST.acts.startMentalType({ dataset: { t: 'nback' } }); });
  const t1 = Date.now(); let n = 0;
  while (Date.now() - t1 < 25000) {
    const ph = await page.evaluate(() => { const r = ST.app.run; return r && { phase: r.phase, i: r.nb && r.nb.i, tg: r.cur && r.cur.targets, res: r.res.length }; });
    if (!ph || ph.res >= 1) break;
    if (ph.tg && ph.i >= 0 && ph.tg[ph.i]) { await page.evaluate(() => ST.acts['run-nb']()); n++; await page.waitForTimeout(300); } else await page.waitForTimeout(40);
  }
  const r2 = await page.evaluate(() => { const r = ST.app.run; return r && r.res[0] && { ok: r.res[0].ok, score: r.res[0].score, val: r.res[0].val }; });
  ok(r2 && r2.ok && r2.score === 1, 'n-back: tocchi solo sui bersagli → punteggio pieno'); ok(!errs.length, 'n-back: nessun errore JS');
  await b.close(); if (fails) { console.log(fails + ' controlli falliti'); process.exit(1); } console.log('Controlli E2E dell’allenamento mentale superati');
})();
