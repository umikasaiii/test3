/* Prestazioni vNext in Chromium con profilo «telefono» (viewport 360×740, CPU rallentata 4×). NON sostituisce una prova su un dispositivo reale.
   Misura: avvio con e senza pacchetto, operazioni più pesanti (ottimo F1 per forza bruta, avversari, risolutore dei casi), memoria JS. */
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const root = path.join(__dirname, '..', '..'); let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
const boot = async (browser, file) => {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }), page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  const t0 = Date.now(); await page.goto('file://' + file); await page.waitForSelector('#ob-name'); const t = Date.now() - t0;
  await page.evaluate(() => ST.acts['ob-start']()); await page.waitForTimeout(300); return { page, t, ctx };
};
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const base = await boot(browser, path.join(root, 'index.html')), vn = await boot(browser, path.join(root, 'dist-vnext', 'index.vnext.html'));
  console.log('Avvio (CPU 4×): solo app ' + base.t + ' ms · app + vNext ' + vn.t + ' ms · differenza ' + (vn.t - base.t) + ' ms');
  ok(vn.t - base.t < 2500, 'il pacchetto vNext aggiunge meno di 2,5 s all’avvio con CPU rallentata 4× (misure ripetute: ~0,9–2,1 s)');
  const m = await vn.page.evaluate(() => {
    const T = (f) => { const t = performance.now(); f(); return Math.round(performance.now() - t); }, M = ST.sma, out = {};
    out.f1Best = T(() => { M.f1lab.scenarios.filter(s => s.kind === 'plan').forEach(s => M.f1lab.best(s)); });
    out.f1Duel = T(() => M.f1lab.duelBest(M.f1lab.byId('f1-undercut')));
    out.opponent = T(() => { M.opponent.TYPE_IDS.forEach(t => M.opponent.best(t)); });
    out.solver = T(() => M.deduction.cases.forEach(c => M.deduction.validate(c)));
    out.cyber = T(() => M.cyberlab.challenges.forEach(c => M.cyberlab.validate(c)));
    out.heap = performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : null; return out;
  });
  console.log('Operazioni (CPU 4×, ms):', JSON.stringify(m));
  ok(m.f1Best < 4000, 'ottimo F1 per forza bruta su tutti i piani: ' + m.f1Best + ' ms (< 4 s, e gira solo su richiesta)');
  ok(m.opponent < 2000 && m.solver < 1500 && m.cyber < 1500, 'avversari, risolutore e validazione cyber entro limiti ragionevoli');
  if (m.heap != null) ok(m.heap < 400, 'memoria JS dopo l’avvio: ' + m.heap + ' MB');
  // il click sull'interfaccia non deve bloccare più di ~1 s anche con CPU rallentata
  await vn.page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-f1-play', { id: 'f1-piano-asciutto' }); }); await vn.page.waitForTimeout(150);
  await vn.page.click('[data-act="smaF1Add"]'); const t0 = Date.now(); await vn.page.click('[data-act="smaF1Run"]'); await vn.page.waitForSelector('svg[aria-label^="Tempi"]'); const sim = Date.now() - t0;
  ok(sim < 5000, 'simulazione di un piano F1 con calcolo dell’ottimo: ' + sim + ' ms (CPU 4×)');
  await browser.close(); console.log(fails ? 'PERFORMANCE: ' + fails + ' controlli falliti' : 'Prestazioni vNext entro le soglie (profilo emulato, non un dispositivo reale)'); process.exit(fails ? 1 : 0);
})();
