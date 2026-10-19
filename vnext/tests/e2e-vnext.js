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
  ok((txt.match(/disponibile/g) || []).length === 9 && !/Non ancora implementato/.test(txt), 'nove laboratori disponibili e nessuno finto');
  ok(/L5/.test(txt) && /non è una valutazione psicometrica/.test(txt), 'livelli e avvertenza sul profilo');
  ok(await page.evaluate(() => { const r = document.querySelector('.sma-hub').getBoundingClientRect(); return r.width <= innerWidth; }), 'nessun overflow orizzontale a 360px');
  // Deduction Lab: partita completa nell'interfaccia
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-deduction', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Deduction Lab/.test(document.getElementById('app').innerText) && document.querySelectorAll('[data-act="smaDedOpen"]').length >= 4), 'il laboratorio elenca almeno 4 casi');
  await page.click('[data-act="smaDedOpen"][data-id="ded-sito-lento"]'); await page.waitForTimeout(150);
  await page.click('[data-act="smaDedReveal"][data-k="k2"]'); await page.waitForTimeout(100);
  await page.click('[data-act="smaDedReveal"][data-k="k3"]'); await page.waitForTimeout(100);
  ok(await page.evaluate(() => /Budget residuo: 3/.test(document.getElementById('app').innerText)), 'la richiesta di indizi consuma il budget');
  await page.click('[data-act="smaDedPick"][data-h="img"]'); await page.waitForTimeout(100);
  await page.click('[data-act="smaDedConf"][data-v="80"]'); await page.waitForTimeout(100);
  await page.click('[data-act="smaDedFinish"]'); await page.waitForTimeout(200);
  const res = await page.evaluate(() => document.getElementById('app').innerText);
  ok(/Buona decisione/.test(res) && /Feedback sul processo/.test(res) && /Soluzione/.test(res), 'esito con feedback sul processo e soluzione');
  ok(await page.evaluate(() => { const c = ST.app.state.sma.cases['ded-sito-lento']; return c && c.tries === 1 && ST.sma.profile(ST.app.state).deduction.n === 1; }), 'risultato salvato nello stato e nel profilo');
  // Adaptive Opponent: dieci round nell'interfaccia
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-opponent', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => document.querySelectorAll('[data-act="smaOppOpen"]').length === 5), 'cinque avversari elencati senza rivelarne il tipo');
  await page.click('[data-act="smaOppOpen"][data-t="cons"]'); await page.waitForTimeout(150);
  for (let i = 0; i < 10; i++) { await page.click('[data-act="smaOppMove"][data-m="C"]'); await page.waitForTimeout(40); }
  const og = await page.evaluate(() => document.getElementById('app').innerText);
  ok(/Conservativo/.test(og) && /il massimo possibile/.test(og) && /30/.test(og), 'a fine partita compaiono regola, punteggio e massimo possibile');
  ok(await page.evaluate(() => { const e = ST.app.state.sma.sims['opp:cons']; return e && e.tries === 1; }), 'risultato salvato');
  // Forecasting: intervallo all'80%
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-forecast', {}); }); await page.waitForTimeout(150);
  await page.fill('#sma-lo', '1700'); await page.fill('#sma-hi', '1800'); await page.click('[data-act="smaFcAns"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Dentro|Fuori/.test(document.getElementById('app').innerText) && ST.app.state.sma.forecast.length === 1), 'un intervallo viene valutato e salvato');
  // Crisis e Communication: scenario completo
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-crisis', {}); }); await page.waitForTimeout(150);
  await page.click('[data-act="smaProcOpen"][data-id="proc-progetto-ritardo"]'); await page.waitForTimeout(150);
  for (let i = 0; i < 4; i++) { await page.click('[data-act="smaProcChoose"][data-o="0"]'); await page.waitForTimeout(80); }
  const pr = await page.evaluate(() => document.getElementById('app').innerText);
  ok(/Processo/.test(pr) && /Le tue decisioni/.test(pr) && /Lezione/.test(pr), 'crisi: esito con processo, decisioni e lezione');
  ok(await page.evaluate(() => { const e = ST.app.state.sma.sims['proc:proc-progetto-ritardo']; return e && e.tries === 1 && e.bestProc === 1; }), 'crisi: risultato salvato');
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-comm', {}); }); await page.waitForTimeout(120);
  ok(await page.evaluate(() => document.querySelectorAll('[data-act="smaProcOpen"]').length === 2), 'comunicazione: due scenari elencati');
  // STRATEGOS: missione completa
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-strategos', {}); }); await page.waitForTimeout(150);
  await page.click('[data-act="smaMisStart"][data-m="mis-tempo-settimana"][data-mode="guided"]'); await page.waitForTimeout(150);
  for (let n = 1; n <= 7; n++) await page.fill('#sma-st-' + n, 'passo ' + n + ' scritto con abbastanza dettaglio');
  await page.fill('#sma-p', '65'); await page.fill('#sma-chk', '2026-12-31'); await page.fill('#sma-planb', 'taglio il terzo impegno');
  await page.click('[data-act="smaMisDecide"]'); await page.waitForTimeout(200);
  ok(await page.evaluate(() => ST.app.state.journal.length === 1 && ST.app.state.sma.missions[0].status === 'decided'), 'la decisione entra nel diario esistente');
  await page.click('input[name="sma-res"][value="ok"]'); await page.fill('#sma-obs', 'Ho completato due priorità su tre'); await page.selectOption('#sma-cls', 'self');
  await page.click('[data-act="smaMisObserve"]'); await page.waitForTimeout(200);
  ok(await page.evaluate(() => ST.app.state.sma.missions[0].obs.cls === 'self'), 'esito registrato come autodichiarato, non come verificato');
  await page.fill('#sma-learn', 'Ho imparato a lasciare margine'); await page.click('[data-act="smaMisRetro"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => ST.app.state.sma.missions[0].status === 'closed' && /L1/.test(ST.sma.strategos.level(ST.app.state).level === 1 ? 'L1' : 'x')), 'missione chiusa; livello di transfer L1 (una sola evidenza non dichiarata reale)');
  // Listening Lab: file locali (WAV sintetico + SRT)
  const wav = (() => { const sr = 8000, n = sr * 10, b = Buffer.alloc(44 + n * 2); b.write('RIFF', 0); b.writeUInt32LE(36 + n * 2, 4); b.write('WAVEfmt ', 8); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(sr, 24); b.writeUInt32LE(sr * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 2, 40); for (let i = 0; i < n; i++) b.writeInt16LE(Math.round(8000 * Math.sin(2 * Math.PI * 440 * i / sr)), 44 + i * 2); return b; })();
  const srt = '1\n00:00:01,000 --> 00:00:03,000\n学校でコーヒーを飲みます\n\n2\n00:00:04,000 --> 00:00:06,000\n会社でテストをします\n\n3\n00:00:07,000 --> 00:00:09,000\n病院でレポートを書きます\n\n4\n00:00:09,500 --> 00:00:09,900\n図書館でジュース\n';
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-listen', {}); }); await page.waitForTimeout(150);
  await page.setInputFiles('#sma-f-media', { name: 'prova.wav', mimeType: 'audio/wav', buffer: wav });
  await page.setInputFiles('#sma-f-sub', { name: 'prova.srt', mimeType: 'text/plain', buffer: Buffer.from(srt, 'utf8') });
  await page.click('[data-act="smaLiLoad"]'); await page.waitForTimeout(700);
  ok(await page.evaluate(() => ST.sma.listen.cur.segs.length >= 3 && !!document.querySelector('#sma-media audio')), 'file e sottotitoli caricati: segmenti e lettore presenti');
  await page.click('[data-act="smaLiMode"][data-v="ja"]'); await page.waitForTimeout(100);
  ok(await page.evaluate(() => /コーヒー/.test(document.getElementById('sma-cue').innerText)), 'modalità con sottotitoli giapponesi mostra la battuta');
  await page.click('[data-act="smaLiSpeed"][data-v="0.5"]'); await page.waitForTimeout(100);
  ok(await page.evaluate(() => document.querySelector('#sma-media audio').playbackRate === 0.5), 'la velocità di riproduzione è regolabile (0,5×)');
  await page.click('[data-act="smaLiSpeed"][data-v="1.25"]'); await page.waitForTimeout(100);
  await page.click('[data-act="smaLiPlay"]'); await page.waitForTimeout(2600);
  const pl = await page.evaluate(() => { const a = document.querySelector('#sma-media audio'); return { t: a.currentTime, paused: a.paused, done: ST.sma.listen.cur.done }; });
  ok(pl.paused && pl.done === 1 && pl.t >= 2.9 && pl.t <= 3.3, 'il segmento si ferma alla fine della battuta (t=' + pl.t.toFixed(2) + ')');
  await page.click('[data-act="smaLiSaveW"]'); await page.waitForTimeout(100);
  ok(await page.evaluate(() => Object.keys(ST.sma.listen.S(ST.app.state).saved).length === 1), 'una parola può essere salvata per il ripasso');
  await page.click('[data-act="smaLiCloze"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => document.querySelectorAll('[data-act="smaLiAns"]').length === 4), 'domanda di comprensione generata dai sottotitoli');
  // Combat Tactical Recognition
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-combat', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /istruttore qualificato/.test(document.getElementById('app').innerText) && document.querySelectorAll('[data-act="smaCmbOpen"]').length === 8), 'situazioni elencate con avviso di sicurezza');
  await page.click('[data-act="smaCmbOpen"][data-id="cmb-l2-kuzushi"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => !!document.querySelector('svg[aria-label^="Schema"] marker')), 'lo schema dall\'alto è disegnato');
  for (let i = 0; i < 3; i++) { await page.click('[data-act="smaCmbPick"][data-o="0"]'); await page.waitForTimeout(80); await page.click('[data-act="smaCmbNext"]'); await page.waitForTimeout(80); }
  ok(await page.evaluate(() => /Risultato: 100%/.test(document.getElementById('app').innerText) && ST.app.state.sma.combat.theory['cmb-l2-kuzushi'].tries === 1 && ST.app.state.sma.combat.motor.length === 0), 'risultato teorico salvato senza alcun progresso motorio');
  // regressione: le viste esistenti continuano ad aprirsi
  for (const v of [['subject', { id: 'str' }], ['subject', { id: 'mnt' }], ['optlab', {}], ['transfer', {}]]) {
    await page.evaluate(([n, p]) => { ST.app.stack = []; ST.app.go(n, p); }, v); await page.waitForTimeout(120);
    ok(await page.evaluate(() => document.getElementById('app').innerText.length > 80), 'vista esistente ' + v[0] + ' ' + (v[1].id || '') + ' funziona');
  }
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors[0] : ''));
  await browser.close(); console.log(fails ? 'FALLITO (' + fails + ')' : 'E2E vNext superato'); process.exit(fails ? 1 : 0);
})();
