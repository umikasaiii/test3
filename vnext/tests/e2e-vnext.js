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
  ok(await page.evaluate(() => document.querySelectorAll('#app .item .tag.good').length === ST.sma.labs.length && (document.getElementById('app').innerText.match(/Non ancora implementato/g) || []).length === ST.sma.pendingLabs.filter(p => !ST.sma.labState(p.id)).length), 'ogni laboratorio disponibile è registrato e ogni mancante è dichiarato «in arrivo»');
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
  // Cybersecurity Practical Lab: terminale simulato
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-cyber', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Ambiente simulato e isolato/.test(document.getElementById('app').innerText) && document.querySelectorAll('[data-act="smaCybOpen"]').length === 10), 'dieci esercizi con avviso di ambiente simulato');
  await page.click('[data-act="smaCybOpen"][data-id="cyb-perms-key"]'); await page.waitForTimeout(150);
  await page.fill('#sma-cmd', 'ls -l /home/user/.ssh'); await page.press('#sma-cmd', 'Enter'); await page.waitForTimeout(120);
  ok(await page.evaluate(() => /-rw-r--r--/.test(document.getElementById('sma-term').innerText)), 'un comando inviato con Invio produce output nel terminale');
  await page.fill('#sma-cmd', 'chmod 600 /home/user/.ssh/id_rsa'); await page.click('[data-act="smaCybRun"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Obiettivo raggiunto/.test(document.getElementById('sma-term').innerText) && ST.app.state.sma.tech.cyber['cyb-perms-key'].solved), 'obiettivo raggiunto e risultato salvato');
  // Programming & AI Lab: esecuzione isolata in un Worker
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-prog', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Python non è disponibile/.test(document.getElementById('app').innerText) && document.querySelectorAll('[data-act="smaProgOpen"]').length === 12), 'dodici esercizi; Python dichiarato non disponibile');
  await page.click('[data-act="smaProgOpen"][data-id="prog-sum-even"]'); await page.waitForTimeout(150);
  await page.click('[data-act="smaProgRun"]'); await page.waitForTimeout(600);
  ok(await page.evaluate(() => /Alcuni test non passano/.test(document.getElementById('app').innerText)), 'il codice iniziale non supera i test');
  await page.fill('#sma-code', 'function sumEven(arr){ let s=0; for(const x of arr) if(x%2===0) s+=x; console.log("ok"); return s }'); await page.click('[data-act="smaProgRun"]'); await page.waitForTimeout(700);
  ok(await page.evaluate(() => /Tutti i test superati/.test(document.getElementById('app').innerText) && ST.app.state.sma.tech.prog['prog-sum-even'].solved), 'la soluzione corretta supera tutti i test (anche i nascosti) ed è salvata');
  await page.fill('#sma-code', 'function sumEven(arr){ while(true){} }'); await page.click('[data-act="smaProgRun"]'); await page.waitForTimeout(3500);
  ok(await page.evaluate(() => /Tempo scaduto/.test(document.getElementById('app').innerText)), 'un ciclo infinito viene interrotto dal timeout senza bloccare la pagina');
  await page.fill('#sma-code', 'function sumEven(arr){ return typeof document + "|" + typeof fetch + "|" + typeof window }'); await page.click('[data-act="smaProgRun"]'); await page.waitForTimeout(700);
  ok(await page.evaluate(() => /undefined\|undefined\|undefined/.test(document.getElementById('app').innerText.replace(/"/g, '')) || /ottenuto "undefined\|undefined\|undefined"/.test(document.getElementById('app').innerText)), 'nel Worker non ci sono né DOM né rete');
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-ai', {}); }); await page.waitForTimeout(120);
  ok(await page.evaluate(() => /XOR[^\n]*non può imparare/.test(document.getElementById('app').innerText)), 'esperimento di AI: il perceptron non impara XOR');
  // Formula 1 Strategy Lab
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-f1', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /SINTETICI/.test(document.getElementById('app').innerText) && document.querySelectorAll('[data-act="smaF1Open"]').length === 5), 'cinque scenari con modello dichiarato sintetico');
  await page.click('[data-act="smaF1Open"][data-id="f1-piano-asciutto"]'); await page.waitForTimeout(150);
  await page.click('[data-act="smaF1Add"]'); await page.waitForTimeout(100); await page.click('[data-act="smaF1Run"]'); await page.waitForTimeout(400);
  ok(await page.evaluate(() => /Tempo totale/.test(document.getElementById('app').innerText) && /Ottimo del modello/.test(document.getElementById('app').innerText) && !!document.querySelector('svg[aria-label^="Tempi"]')), 'piano simulato: tempo, ottimo del modello e telemetria sintetica');
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-f1-play', { id: 'f1-safety-car' }); }); await page.waitForTimeout(150);
  await page.click('[data-act="smaF1Sc"][data-k="stay"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /classifica 4ª su 4/.test(document.getElementById('app').innerText)), 'Safety Car: restare in pista è l’ultima scelta del modello');
  // Sport Science Advanced Lab
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-sport', {}); }); await page.waitForTimeout(150);
  await page.fill('#sma-sp-sets', '30'); await page.selectOption('#sma-sp-prog', 'none'); await page.click('[data-act="smaSpRun"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Mesociclo generato/.test(document.getElementById('app').innerText) && /Nessun modello di progressione/.test(document.getElementById('app').innerText) && /non è una prescrizione/.test(document.getElementById('app').innerText)), 'programma analizzato con segnalazioni motivate e avviso');
  await page.click('[data-act="smaSpStudy"][data-id="st-3"]'); await page.waitForTimeout(150);
  await page.evaluate(() => { const st = ST.sma.sportlab.STUDIES[2]; document.querySelectorAll('input[data-act="smaSpPick"]').forEach(i => { if (st.limits.indexOf(i.dataset.o) >= 0) i.click(); }); }); await page.click('[data-act="smaSpJudge"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Lettura critica solida/.test(document.getElementById('app').innerText) && ST.app.state.sma.tech.sport['st-3'].good), 'lettura critica di uno studio valutata e salvata');
  // Cross-Disciplinary Lab e collegamenti
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-cross', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => document.querySelectorAll('[data-act="smaXdOpen"]').length >= 6), 'missioni interdisciplinari elencate');
  await page.click('[data-act="smaXdOpen"][data-id="xd-strategia-cyber"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => document.querySelectorAll('.tag').length >= 3 && /da fare/.test(document.getElementById('app').innerText) && !!document.querySelector('#sma-xd-text[disabled]')), 'le parti risultano «da fare» e la sintesi è bloccata finché non sono complete');
  await page.click('[data-act="smaXdGo"][data-lab="cyberlab"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Cybersecurity Practical Lab|Conta i tentativi|SQL injection/.test(document.getElementById('app').innerText) && !!document.getElementById('sma-cmd')), 'la parte apre il laboratorio giusto');
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('subject', { id: 'sma' }); }); await page.waitForTimeout(150);
  await page.click('[data-act="optStart"][data-k="cog"]'); await page.waitForTimeout(250);
  ok(await page.evaluate(() => document.getElementById('app').innerText.length > 40), 'il Cognitive Performance Lab esistente si avvia dall’Academy');
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-audio', {}); }); await page.waitForTimeout(150);
  await page.click('[data-act="smaAuDiag"]'); await page.waitForTimeout(1800);
  ok(await page.evaluate(() => /Sintesi vocale:/.test(document.getElementById('app').innerText) && /Registrazione/.test(document.getElementById('app').innerText) && /non misura la pronuncia/.test(document.getElementById('app').innerText)), 'diagnostica audio reale e dichiarazione sul feedback di pronuncia');
  // Moduli didattici e verifica del livello
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('subject', { id: 'sma' }); }); await page.waitForTimeout(200);
  ok(await page.evaluate(() => /24 moduli|6 moduli/.test(document.getElementById('app').innerText) && document.querySelectorAll('[data-act="smaLvCheck"]').length === 6), 'sei livelli con verifica; ogni pilastro mostra i suoi moduli');
  await page.click('[data-act="smaLvCheck"][data-l="L0"]'); await page.waitForTimeout(250);
  ok(await page.evaluate(() => /Verifica L0/.test(document.getElementById('app').innerText)), 'la verifica del livello parte nel runner esistente');
  // English Conversation Lab
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-conv-en', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Controlli automatici limitati/.test(document.getElementById('app').innerText) && document.querySelectorAll('[data-act="smaCvOpen"]').length === 8), 'otto scenari e dichiarazione dei limiti dei controlli');
  await page.click('[data-act="smaCvOpen"][data-id="cv-en-a2-cafe"]'); await page.waitForTimeout(150);
  await page.click('[data-act="smaCvPick"][data-o="0"]'); await page.waitForTimeout(100); await page.click('[data-act="smaCvNext"]'); await page.waitForTimeout(100);
  await page.click('[data-act="smaCvPick"][data-o="0"]'); await page.waitForTimeout(100); await page.click('[data-act="smaCvNext"]'); await page.waitForTimeout(100);
  await page.fill('#sma-cv-text', 'I am agree, I want a cake since three years'); await page.click('[data-act="smaCvProduce"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => /Risposta modello/.test(document.getElementById('app').innerText) && /I agree|Mancava/.test(document.getElementById('app').innerText) && Object.keys(ST.app.state.sma.convo.errs).length >= 1), 'la produzione sbagliata mostra errori e risposta modello e salva gli errori per il ripasso');
  // Japanese Immersion Lab
  await page.evaluate(() => { ST.app.stack = []; ST.app.go('sma-conv-ja', {}); }); await page.waitForTimeout(150);
  ok(await page.evaluate(() => document.querySelectorAll('[data-act="smaCvOpen"]').length === 8), 'otto scenari di giapponese');
  await page.click('[data-act="smaCvOpen"][data-id="cv-ja-konbini"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => !/\[[^\]]*\|[^\]]*\]/.test(document.getElementById('app').innerText) && !!document.querySelector('#app ruby')), 'il testo giapponese mostra il furigana senza markup grezzo');
  ok(await page.evaluate(() => { const t = ST.sma.convo.byId('cv-ja-konbini'); return Object.values(t.nodes).some(n => n.task && n.task.kind === 'produce') && Object.values(t.nodes).some(n => n.task && n.task.kind === 'order'); }), 'riconoscimento, produzione e costruzione sono compiti distinti');
  // Un modulo didattico si apre e si legge con le viste esistenti (argomento, lezione a pagine, esercizi)
  const modId = await page.evaluate(() => ST.content.topicsOf('sma')[0].id);
  await page.evaluate(id => { ST.app.stack = []; ST.app.go('topic', { id }); }, modId); await page.waitForTimeout(200);
  ok(await page.evaluate(() => document.getElementById('app').innerText.length > 150), 'la scheda di un modulo si apre');
  await page.evaluate(id => { ST.app.stack = []; ST.app.go('lesson', { id, page: 0 }); }, modId); await page.waitForTimeout(200);
  ok(await page.evaluate(() => document.getElementById('app').innerText.length > 400), 'la lezione a pagine mostra il testo del modulo');
  // Salvataggio, esportazione e importazione dello stato vNext
  const snap = await page.evaluate(() => { const s = ST.app.state.sma; return { keys: Object.keys(s).sort().join(','), cases: Object.keys(s.cases).length, sims: Object.keys(s.sims).length, missions: s.missions.length, tech: Object.keys(s.tech || {}).join(',') }; });
  await page.evaluate(() => ST.app.save()); await page.waitForTimeout(500);
  const backup = await page.evaluate(async () => JSON.stringify(await ST.storage.exportAll(false)));
  ok(backup.indexOf('"sma"') > 0 && JSON.parse(backup).state.sma.cases && Object.keys(JSON.parse(backup).state.sma.cases).length === snap.cases, 'l’esportazione include lo stato vNext');
  await page.reload(); await page.waitForTimeout(1200);
  ok(await page.evaluate(s => { const x = ST.app.state.sma; return !!x && Object.keys(x.cases).length === s.cases && x.missions.length === s.missions && Object.keys(x.tech || {}).join(',') === s.tech; }, snap), 'dopo il ricaricamento i progressi vNext sono ancora lì');
  const ctx2 = await browser.newContext({ viewport: { width: 360, height: 740 } }), p2 = await ctx2.newPage(); await p2.goto(file); await p2.waitForSelector('#ob-name');
  await p2.evaluate(async b => { ST.app.state = await ST.storage.importAll(JSON.parse(b)); ST.app.save(); }, backup); await p2.waitForTimeout(400); await p2.reload(); await p2.waitForTimeout(1200);
  ok(await p2.evaluate(s => { const x = ST.app.state.sma; return !!x && Object.keys(x.cases).length === s.cases && Object.keys(x.sims).length === s.sims; }, snap), 'l’importazione in un altro profilo ripristina lo stato vNext');
  await ctx2.close();
  // regressione: le viste esistenti continuano ad aprirsi
  for (const v of [['subject', { id: 'str' }], ['subject', { id: 'mnt' }], ['optlab', {}], ['transfer', {}]]) {
    await page.evaluate(([n, p]) => { ST.app.stack = []; ST.app.go(n, p); }, v); await page.waitForTimeout(120);
    ok(await page.evaluate(() => document.getElementById('app').innerText.length > 80), 'vista esistente ' + v[0] + ' ' + (v[1].id || '') + ' funziona');
  }
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors[0] : ''));
  await browser.close(); console.log(fails ? 'FALLITO (' + fails + ')' : 'E2E vNext superato'); process.exit(fails ? 1 : 0);
})();
