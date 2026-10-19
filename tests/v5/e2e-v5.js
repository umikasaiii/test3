/* E2E v1.3 in Chromium (360×740): livelli richiudibili, hub dell'argomento, pratica consigliata, completamento automatico/manuale,
   persistenza, backup/importazione, tre missioni invariate, riquadri rimossi, avvisi di sicurezza, prestazioni.
   Prima: node tools/build.js */
const path = require('path');
let chromium; try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const file = 'file://' + path.join(__dirname, '..', '..', 'index.html');
let fails = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) fails++; };
const SUBJECTS = ['eng', 'jpn', 'grp', 'cyb', 'moto', 'sport', 'f1', 'str', 'mnt', 'sec', 'sma'];
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 } });
  const page = await ctx.newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/ERR_FILE_NOT_FOUND/.test(m.text())) errors.push(m.text()); });
  page.on('dialog', d => d.accept());
  const txt = () => page.evaluate(() => document.getElementById('app').innerText);
  const go = async (name, p) => { await page.evaluate(([n, q]) => { ST.app.stack = []; ST.app.go(n, q || {}); }, [name, p]); await page.waitForTimeout(120); };
  await page.goto(file); await page.waitForSelector('#ob-name'); await page.evaluate(() => ST.acts['ob-start']()); await page.waitForTimeout(300);

  // 1. Home: tre missioni e piano da 60 minuti; nessuna pratica da suggerire all'inizio
  let home = await txt();
  ok(/Le tue 3 missioni/.test(home) && /piano 60 minuti/.test(home), 'Home: le tre missioni e il piano da 60 minuti');
  ok(!/Pratica consigliata/.test(home), 'Home: nessuna pratica consigliata finché non c’è nulla di pertinente');
  const plan0 = await page.evaluate(() => JSON.stringify(ST.plan.minutes(ST.app.state)));

  // 2. Tutte le materie: livelli richiudibili, un solo livello aperto, nessun riquadro informativo, nessun overflow
  for (const sid of SUBJECTS) {
    await go('subject', { id: sid });
    const r = await page.evaluate(() => {
      const d = [...document.querySelectorAll('#app details.lv')], bad = [...document.querySelectorAll('#app .warn')].filter(e => /livell|CEFR|JLPT|stage|cintura/i.test(e.textContent));
      return { n: d.length, open: d.filter(x => x.open).length, bad: bad.length, ov: document.documentElement.scrollWidth > innerWidth, bar: d.every(x => x.querySelector('.prog')), sum: d.every(x => x.querySelector('summary').getBoundingClientRect().height >= 44) };
    });
    ok(r.n >= 4 && r.open === 1 && r.bad === 0 && !r.ov && r.bar && r.sum, sid + ': ' + r.n + ' livelli richiudibili, 1 aperto, nessun riquadro sui livelli, nessun overflow, tocco ≥44px');
  }
  // gli stessi dati aprono e chiudono davvero
  await go('subject', { id: 'cyb' });
  const t1 = await page.evaluate(() => { const d = [...document.querySelectorAll('#app details.lv')]; const c = d.find(x => !x.open); c.querySelector('summary').click(); return { k: c.dataset.k2, open: c.open }; });
  await page.waitForTimeout(150);
  ok(t1.open === true, 'tocco sull’intestazione: il livello ' + t1.k + ' si apre');
  ok(await page.evaluate(k => ST.app.state.settings.lv.cyb[k] === true, t1.k), 'la scelta è memorizzata');
  await go('topic', { id: 'cyb-triade-cia-e-minacce' }); await page.evaluate(() => ST.app.back()); await page.waitForTimeout(150);
  await go('subject', { id: 'cyb' });
  ok(await page.evaluate(k => document.querySelector('details.lv[data-k2="' + k + '"]').open, t1.k), 'tornando alla materia il livello resta aperto');
  await page.evaluate(k => { const d = document.querySelector('details.lv[data-k2="' + k + '"]'); d.querySelector('summary').click(); }, t1.k); await page.waitForTimeout(150);
  ok(await page.evaluate(k => !(ST.app.state.settings.lv && ST.app.state.settings.lv.cyb && k in ST.app.state.settings.lv.cyb), t1.k), 'richiudendolo si torna al comportamento predefinito');

  // 3. Hub dell'argomento: categorie, nessuna sezione vuota, prossimo passo
  await go('topic', { id: 'cyb-dns-dhcp-arp' });
  let tp = await txt();
  ok(/Lezioni/.test(tp) && /Esercizi/.test(tp) && /Laboratori/.test(tp) && /Verifiche/.test(tp) && !/Simulazioni/.test(tp) && /Prossimo passo consigliato: la lezione/.test(tp), 'argomento: Lezioni, Esercizi, Laboratori, Verifiche; nessuna sezione Simulazioni inventata');
  ok(/Disponibile dopo la lezione/.test(tp), 'prima della lezione la pratica non è proposta (e non blocca nulla)');
  ok(await page.evaluate(() => { const s = document.querySelectorAll('#app details.tsec'); return s.length === 4 && [...s].every(x => x.querySelector('summary').getBoundingClientRect().height >= 44); }), 'sezioni richiudibili con area di tocco adeguata');
  await go('topic', { id: 'str-scacchi-regole-e-valore-dei-pezzi' });
  ok(!/Laboratori|Simulazioni/.test(await txt()), 'un argomento senza pratica pertinente non mostra laboratori');

  // 4. Lezione completata → pratica consigliata → avvio → completamento automatico → stato conservato
  await page.evaluate(() => { const U = ST.util, P = ST.progress, t = ST.content.topic('cyb-dns-dhcp-arp'); (t.prereq || []).forEach(p => { const q = P.topicRec(ST.app.state, p); q.studied = U.addDays(U.today(), -40); ST.content.topic(p).exercises.slice(0, 5).forEach((e, i) => { q.ex[i] = { n: 1, ok: true }; }); }); });
  await go('lesson', { id: 'cyb-dns-dhcp-arp', page: 99 });
  const lastPage = await txt();
  ok(/Pratica consigliata per consolidare questa lezione/.test(lastPage) && /Cybersecurity Practical Lab/.test(lastPage) && /~20 min/.test(lastPage) && /difficoltà Media/.test(lastPage) && /Da iniziare/.test(lastPage), 'fine lezione: nome, competenza, durata, difficoltà, stato');
  ok(await page.evaluate(() => !!document.querySelector('.practice-cta [data-act="actGo"]') && !!document.querySelector('.practice-cta [data-act="actSnooze"]')), 'pulsanti «Inizia» e «Più tardi»');
  await page.click('.practice-cta [data-act="actGo"]'); await page.waitForTimeout(250);
  ok(await page.evaluate(() => ST.app.view().name === 'sma-cyber' && ST.act.status(ST.app.state, 'cyberlab') === 'doing'), 'il laboratorio si apre e risulta «In corso»');
  // risolvi un esercizio del laboratorio con i comandi della soluzione dichiarata
  const solved = await page.evaluate(async () => {
    const Y = ST.sma.cyberlab, ch = Y.challenges.find(c => c.solution && c.solution.length);
    await new Promise(r => setTimeout(r, 50));
    document.querySelector('[data-act="smaCybOpen"][data-id="' + ch.id + '"]') && document.querySelector('[data-act="smaCybOpen"][data-id="' + ch.id + '"]').click();
    await new Promise(r => setTimeout(r, 120));
    for (const c of ch.solution) { document.getElementById('sma-cmd').value = c; document.querySelector('[data-act="smaCybRun"]').click(); await new Promise(r => setTimeout(r, 60)); }
    return ch.id;
  });
  const rec = await page.evaluate(() => ST.app.state.act.rec.cyberlab);
  ok(rec && rec.att === 1 && rec.done && rec.items[solved] && rec.items[solved].ok === true, 'esercizio risolto → completamento automatico registrato (' + solved + ')');
  ok(await page.evaluate(() => ST.act.status(ST.app.state, 'cyberlab') === 'done'), 'stato «Completata»');
  await go('topic', { id: 'cyb-dns-dhcp-arp' }); tp = await txt();
  ok(/Completata il \d{4}|completata il \d{4}/.test(tp) && /1 tentativo/.test(tp), 'l’hub dell’argomento mostra data e tentativi');
  ok(await page.evaluate(() => /Ripeti/.test(document.getElementById('app').innerText)), 'completata: si può ripetere volontariamente');

  // 5. Persistenza dopo il riavvio
  await page.evaluate(async () => { ST.app.save(); await ST.storage.flush(); }); await page.reload(); await page.waitForSelector('#app'); await page.waitForTimeout(500);
  ok(await page.evaluate(() => ST.app.state.act && ST.app.state.act.rec.cyberlab && ST.app.state.act.rec.cyberlab.done), 'dopo il riavvio lo stato delle attività è conservato');

  // 6. Pratica consigliata in Home (max 2), rinvio e avvio
  await page.evaluate(() => {
    const U = ST.util, P = ST.progress, s = ST.app.state;
    ['str-matrici-di-payoff-e-nash', 'spo-periodizzazione', 'cyb-log-e-siem'].forEach(id => { const t = ST.content.topic(id); (t.prereq || []).forEach(p => { const q = P.topicRec(s, p); q.studied = U.addDays(U.today(), -40); ST.content.topic(p).exercises.slice(0, 5).forEach((e, i) => { q.ex[i] = { n: 1, ok: true }; }); }); P.topicRec(s, id).studied = U.addDays(U.today(), -1); });
    ST.app.save(); ST.app.setTab('home');
  }); await page.waitForTimeout(200);
  home = await txt();
  const nItems = await page.evaluate(() => document.querySelectorAll('#home-practice .item').length);
  ok(/Pratica consigliata/.test(home) && nItems >= 1 && nItems <= 2, 'Home: «Pratica consigliata» con al massimo due proposte (' + nItems + ')');
  ok(await page.evaluate(() => [...document.querySelectorAll('#home-practice .item')].every(i => /~\d+ min/.test(i.innerText) && i.querySelector('[data-act="actGo"]') && i.querySelector('[data-act="actSnooze"]') && i.querySelector('.tag') && /Collegata|Pertinente|Nel profilo|sotto il criterio/.test(i.innerText))), 'ogni proposta: materia, nome, competenza, durata, motivazione, stato, avvia/rimanda');
  ok(await page.evaluate(() => { const g = [...document.querySelectorAll('#app .card h2')].map(h => h.textContent); return g.indexOf('Pratica consigliata') > g.findIndex(x => /missioni/.test(x)); }), 'la sezione compare sotto le tre missioni');
  const firstId = await page.evaluate(() => document.querySelector('#home-practice [data-act="actSnooze"]').dataset.id);
  await page.click('#home-practice [data-act="actSnooze"]'); await page.waitForTimeout(200);
  ok(await page.evaluate(id => !document.querySelector('#home-practice [data-act="actGo"][data-id="' + id + '"]') && ST.act.snoozed(ST.app.state, id), firstId), '«Più tardi»: la proposta sparisce e viene ricordata');
  ok(await page.evaluate(() => JSON.stringify(ST.plan.minutes(ST.app.state)) !== '' && ST.plan.minutes(ST.app.state).total === 60), 'le tre missioni restano da 60 minuti');
  // missioni giornaliere ancora generate
  await go('mission', { lang: 'en' }); const ms = await txt(); ok(ms.length > 200 && !/undefined|NaN/.test(ms), 'la missione di inglese si genera e si apre');
  ok(await page.evaluate(plan0 => JSON.stringify(ST.plan.minutes(ST.app.state)) === plan0, plan0), 'il piano (minuti per materia, fase, mese) è identico a prima di ogni attività');
  // ripassi in scadenza: restano visibili nella Home e hanno la precedenza nella missione di lingua (regola esistente)
  await page.evaluate(() => { const s = ST.app.state; ST.cards.introduceTopic(s, ST.content.topic('eng-l0-habits')); Object.values(s.cards).forEach(c => { c.due = ST.util.addDays(ST.util.today(), -1); }); ST.app.save(); ST.app.setTab('home'); }); await page.waitForTimeout(200);
  ok(/Ripassi in scadenza: \d+/.test(await txt()), 'Home: i ripassi in scadenza compaiono');
  ok(await page.evaluate(() => ST.plan.languageBlocks(ST.app.state, 'en', 25).blocks[0].kind === 'review'), 'il ripasso in scadenza ha la precedenza nella missione di inglese');

  // 7. Conferma manuale esplicita (attività senza condizione verificabile)
  await go('topic', { id: 'jpn-j7-dialoghi' }); await page.evaluate(() => { const U = ST.util, P = ST.progress, t = ST.content.topic('jpn-j7-dialoghi'); (t.prereq || []).forEach(p => { P.topicRec(ST.app.state, p).studied = U.addDays(U.today(), -40); ST.content.topic(p).exercises.slice(0, 5).forEach((e, i) => { P.topicRec(ST.app.state, p).ex[i] = { n: 1, ok: true }; }); }); P.topicRec(ST.app.state, t.id).studied = U.today(); ST.app.render(); });
  await page.waitForTimeout(150);
  const man = await page.evaluate(() => { const b = document.querySelector('[data-act="actConfirm"][data-id="listening"]'); return !!b && /conferma manuale/.test(b.textContent); });
  ok(man, 'attività non verificabile: pulsante «Segna come completata (conferma manuale)»');
  await page.click('[data-act="actConfirm"][data-id="listening"]'); await page.waitForTimeout(150);
  ok(await page.evaluate(() => { const r = ST.app.state.act.rec.listening; return r && r.manual === true && r.done && ST.act.status(ST.app.state, 'listening') === 'done'; }), 'registrata come completamento manuale');

  // 8. Completamento di un'attività automatica nell'interfaccia: Adaptive Opponent
  await go('sma-opponent', {}); await page.click('[data-act="smaOppOpen"][data-t="cons"]'); await page.waitForTimeout(120);
  for (let i = 0; i < 10; i++) { await page.click('[data-act="smaOppMove"][data-m="C"]'); await page.waitForTimeout(30); }
  const op = await page.evaluate(() => ST.app.state.act.rec.opponent);
  ok(op && op.att === 1 && op.done && typeof op.best === 'number' && op.items.cons, 'simulazione conclusa → tentativi, punteggio, migliore, data');

  // 9. Strategic Mastery: «Continua» e livelli
  await go('subject', { id: 'sma' }); const sm = await txt();
  ok(/Continua Strategic Mastery/.test(sm) && /Sedute negli ultimi 7 giorni/.test(sm) && !/psicometrica/.test(sm), 'Strategic Mastery: «Continua», frequenza consigliata, nessun riquadro sui livelli');
  ok(await page.evaluate(() => document.querySelectorAll('#app details.lv').length === 6), 'sei livelli L0–L5 richiudibili');
  await page.click('#sma-continue [data-act="smaCont"]'); await page.waitForTimeout(250);
  ok(await page.evaluate(() => ['lesson', 'topic', 'practiceTopic', 'sma-cyber', 'testTopic'].includes(ST.app.view().name) || /sma/.test(ST.app.view().name)), 'il pulsante porta al prossimo passo (' + (await page.evaluate(() => ST.app.view().name)) + ')');

  // 10. Backup, esportazione e importazione
  const exp = await page.evaluate(async () => { ST.app.save(); await ST.storage.flush(); const o = await ST.storage.exportAll(false); return JSON.parse(JSON.stringify({ act: o.state.act, schema: o.schema })); });
  ok(exp.act && exp.act.rec.cyberlab && exp.act.rec.opponent && exp.act.rec.listening.manual === true, 'l’esportazione include lo stato delle attività');
  const imp = await page.evaluate(async (e) => {
    const o = await ST.storage.exportAll(false); const fresh = ST.storage.defaults(); fresh.onboarded = true; ST.app.state = fresh; ST.app.save(); await ST.storage.flush();
    ST.app.state = await ST.storage.importAll(JSON.parse(JSON.stringify(o))); ST.app.save(); await ST.storage.flush();
    return { cy: ST.act.status(ST.app.state, 'cyberlab'), op: ST.act.status(ST.app.state, 'opponent'), li: ST.app.state.act.rec.listening.manual, sn: Object.keys(ST.app.state.act.snooze).length };
  }, exp);
  ok(imp.cy === 'done' && imp.op && imp.li === true && imp.sn >= 1, 'l’importazione ripristina stati, conferme manuali e rinvii');
  // vecchio backup senza «act»
  const legacy = await page.evaluate(async () => { const o = JSON.parse(JSON.stringify(await ST.storage.exportAll(false))); delete o.state.act; const st = await ST.storage.importAll(o); return { ok: !!st.act && Object.keys(st.act.rec).length === 0, topics: Object.keys(st.topics).length > 0 }; });
  ok(legacy.ok && legacy.topics, 'un backup delle versioni precedenti (senza «act») si importa senza perdere i progressi');

  // 11. Sicurezza e riquadri
  await go('technique', { id: await page.evaluate(() => ST.content.judo.techniques.find(t => t.instructor).id) });
  ok(/verificato da un istruttore/.test(await txt()), 'avviso di sicurezza judo conservato (gesti da verificare con un istruttore)');
  await go('sma-cyber', {}); ok(/Ambiente simulato e isolato/.test(await txt()), 'avviso del Cyber Lab (solo ambienti simulati/autorizzati) conservato');
  await go('sma-combat', {}); ok(/sicurezza|partner|istruttore/i.test(await txt()), 'avviso di sicurezza del Combat Lab conservato');
  for (const [v, rx] of [['b2', /Prove B2/], ['subject:eng', /Inglese/]]) {
    const [name, id] = v.split(':'); await go(name, id ? { id } : {}); const w = await page.evaluate(() => [...document.querySelectorAll('#app .warn')].map(e => e.textContent).join(' | '));
    ok(rx.test(await txt()) && !/indicatori in-app|non assegna|CEFR/.test(w), v + ': nessun riquadro giallo sui livelli/certificazioni');
  }
  // le regole non cambiano: completare tutte le lezioni non assegna il B2
  ok(await page.evaluate(() => { const s = ST.storage.defaults(); ST.content.topicsOf('eng').forEach(t => { s.topics[t.id] = { page: 0, studied: ST.util.today(), ex: {}, tests: [], retests: [] }; }); return ST.plan.minutes(s).b2 === false; }), 'tutte le lezioni di inglese lette: il B2 NON viene dichiarato');

  // 12. Prestazioni (CPU 4× più lenta) e compatibilità mobile
  const cdp = await ctx.newCDPSession(page); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  const perf = await page.evaluate(() => { const out = {}; ['sec', 'eng', 'jpn', 'sma'].forEach(id => { const t = performance.now(); ST.views.subject({ id }); out[id] = Math.round(performance.now() - t); }); const t2 = performance.now(); ST.views.topic({ id: 'cyb-dns-dhcp-arp' }); out.topic = Math.round(performance.now() - t2); const t3 = performance.now(); ST.homePractice(); out.home = Math.round(performance.now() - t3); return out; });
  console.log('    (ms con CPU 4×) ' + JSON.stringify(perf));
  ok(Object.values(perf).every(v => v < 600), 'render di materia/argomento/Home sotto 600 ms con CPU 4× più lenta');
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 });
  await go('subject', { id: 'sec' }); ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'nessun overflow orizzontale a 360 px');
  ok(errors.length === 0, 'nessun errore JS' + (errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''));
  await browser.close();
  console.log(fails ? '\nE2E v1.3: ' + fails + ' controlli falliti' : '\nE2E v1.3 superato'); process.exit(fails ? 1 : 0);
})();
