/* Test di persistenza e backup: salva dati nuovi, ricarica la pagina, esporta/importa, importa un backup vecchio (schema 2). */
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const file = 'file://' + path.join(__dirname, '..', 'index.html');
let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 } }); const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(file); await page.waitForSelector('#ob-name'); await page.evaluate(() => ST.acts['ob-start']());
  await page.evaluate(async () => { const s = ST.app.state; ST.transfer.jAdd(s, { sit: 'prova', choice: 'x', check: '2030-01-01' }); const f = ST.transfer.fAdd(s, 'evento', 70); ST.transfer.fResolve(s, f.id, true); ST.transfer.record(s, 'tr:ev', 'novel', true, {}); ST.tt.done(s, 'ev', 1); ST.kanji.record(s, 'kjread', true); ST.jprod.record(s, 'jptrans', true); await ST.storage.save(s); await ST.storage.flush(); });
  await page.reload(); await page.waitForTimeout(500);
  const after = await page.evaluate(async () => { await ST.app.ready; const s = await ST.storage.load(); return { j: s.journal.length, f: s.forecasts.length, brier: ST.transfer.brier(s), sk: !!s.skills['tr:ev'], tt: !!(s.tt.ev && s.tt.ev.theory), kj: s.kanji.kjread.n, jp: s.jprod.jptrans.n }; });
  ok(after.j === 1 && after.f === 1 && after.sk && after.tt && after.kj === 1 && after.jp === 1, 'i dati nuovi sopravvivono al ricaricamento ' + JSON.stringify(after));
  ok(after.brier && after.brier.n === 1 && Math.abs(after.brier.first - 0.09) < 1e-9, 'Brier ricalcolato dopo il ricaricamento');
  const rt = await page.evaluate(async () => { const out = await ST.storage.exportAll(false); const json = JSON.parse(JSON.stringify(out)); const st = await ST.storage.importAll(json); return { schema: json.schema, j: st.journal.length, tt: !!st.tt.ev, f: st.forecasts.length }; });
  ok(rt.schema === 3 && rt.j === 1 && rt.tt && rt.f === 1, 'esporta → importa mantiene i dati ' + JSON.stringify(rt));
  const old = await page.evaluate(async () => { const st = await ST.storage.importAll({ app: 'skilltree', schema: 2, state: { schema: 2, xp: 77, profile: { name: 'Vecchio' } } }); return { xp: st.xp, name: st.profile.name, schema: st.schema, hasJ: Array.isArray(st.journal), hasS: !!st.skills, tt: !!st.tt, kanji: !!st.kanji }; });
  ok(old.xp === 77 && old.name === 'Vecchio' && old.schema === 3 && old.hasJ && old.hasS && old.tt && old.kanji, 'backup vecchio (schema 2) migrato senza perdere i dati ' + JSON.stringify(old));
  const bad = await page.evaluate(async () => { try { await ST.storage.importAll({ app: 'skilltree', schema: 99, state: {} }); return 'accettato'; } catch (e) { return e.message; } });
  ok(/più recente/.test(bad), 'un backup più recente viene rifiutato: ' + bad);
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors[0] : ''));
  await browser.close();
  console.log(fails ? 'BACKUP: problemi rilevati' : 'Test di persistenza e backup superati'); process.exit(fails ? 1 : 0);
})();
