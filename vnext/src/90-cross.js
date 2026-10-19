/* vNext M8 — Cross-Disciplinary Lab: missioni che combinano davvero più competenze. Ogni missione richiede il completamento di PARTI
   appartenenti ad almeno due laboratori/materie diversi (verificato dai risultati salvati, non dalla sola apertura) e una sintesi scritta
   che collega i principi. Resta un esercizio SIMULATO: non conta come applicazione reale (per quella c'è STRATEGOS). */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const Xd = M.cross = { missions: [] };
  const tech = (s, k) => ((M.S(s).tech || {})[k] || {});
  /* come si verifica il completamento di una parte, per laboratorio */
  Xd.CHECK = {
    cyberlab: (s, r) => !!(tech(s, 'cyber')[r] && tech(s, 'cyber')[r].solved),
    proglab: (s, r) => !!(tech(s, 'prog')[r] && tech(s, 'prog')[r].solved),
    sportlab: (s, r) => !!(tech(s, 'sport')[r] && tech(s, 'sport')[r].good),
    f1lab: (s, r) => !!(tech(s, 'f1')[r] && tech(s, 'f1')[r].bestEff >= 0.95),
    deduction: (s, r) => { const c = M.S(s).cases[r]; return !!(c && c.hist.some(h => h.ok)); },
    proc: (s, r) => { const e = M.S(s).sims['proc:' + r]; return !!(e && e.bestProc >= 0.75); },
    opponent: (s, r) => { const e = M.S(s).sims['opp:' + r]; return !!(e && e.bestEff >= 0.75); },
    combat: (s, r) => { const e = ((M.S(s).combat || {}).theory || {})[r]; return !!(e && e.best >= 0.67); },
    convo: (s, r) => { const e = ((M.S(s).convo || {}).runs || {})[r]; return !!(e && e.best >= 0.6); },
    forecast: (s, r) => (M.S(s).forecast || []).length >= (+r || 6)
  };
  const exists = {
    cyberlab: r => !!M.cyberlab.byId(r), proglab: r => !!M.proglab.byId(r), sportlab: r => M.sportlab.STUDIES.some(x => x.id === r), f1lab: r => !!M.f1lab.byId(r), deduction: r => !!M.deduction.byId(r),
    proc: r => !!M.process.byId(r), opponent: r => !!M.opponent.TYPES[r], combat: r => !!M.combat.byId(r), convo: r => !!M.convo.byId(r), forecast: r => +r > 0
  };
  const VIEW = { cyberlab: ['sma-cyber-play', 'id'], proglab: ['sma-prog-play', 'id'], sportlab: ['sma-sport-study', 'id'], f1lab: ['sma-f1-play', 'id'], deduction: ['sma-deduction-case', 'id'], proc: ['sma-proc-play', 'id'], opponent: ['sma-opponent-game', 't'], combat: ['sma-combat-play', 'id'], convo: ['sma-conv-play', 'id'], forecast: ['sma-forecast', null] };
  Xd.add = m => { Xd.missions.push(m); return m; };
  Xd.validate = m => {
    const er = []; if (!m.id || !m.title || !m.intro || !m.synthesis || !(m.pillars || []).length) er.push('campi'); const labs = new Set((m.parts || []).map(p => p.lab));
    if ((m.parts || []).length < 2 || labs.size < 2) er.push('servono almeno 2 parti di laboratori diversi');
    (m.parts || []).forEach(p => { if (!Xd.CHECK[p.lab] || !exists[p.lab]) er.push('laboratorio sconosciuto ' + p.lab); else if (!exists[p.lab](p.ref)) er.push('riferimento inesistente ' + p.lab + ':' + p.ref); if (!p.label) er.push('parte senza etichetta'); });
    (m.pillars || []).forEach(x => { if (!M.PILLARS[x] && !['cyb', 'sport', 'f1', 'mnt', 'eng', 'jpn', 'judo', 'prog'].includes(x)) er.push('area sconosciuta ' + x); });
    return { ok: !er.length, errors: er };
  };
  Xd.progress = (s, m) => { const parts = m.parts.map(p => ({ p, done: !!Xd.CHECK[p.lab](s, p.ref) })), syn = (M.S(s).cross = M.S(s).cross || {})[m.id]; return { parts, doneN: parts.filter(x => x.done).length, total: parts.length, synthesis: syn && syn.text, complete: parts.every(x => x.done) && !!(syn && syn.text) }; };
  Xd.synthesize = (s, m, text) => { text = String(text || '').trim(); const pr = Xd.progress(s, m); if (pr.doneN < pr.total) return { ok: false, err: 'completa prima tutte le parti' }; if (text.length < 60) return { ok: false, err: 'scrivi almeno 60 caratteri: quale principio collega le parti?' }; (M.S(s).cross = M.S(s).cross || {})[m.id] = { text, d: U.today() }; M.record(s, 'application', 'x:' + m.id, 'guided', true, { help: false }); return { ok: true }; };
  M.registerLab({ id: 'cross', title: 'Cross-Disciplinary Lab', view: 'sma-cross', desc: 'Missioni che richiedono più laboratori e materie insieme, con una sintesi finale scritta. Esercizio simulato.', ready: true });
  V['sma-cross'] = () => {
    const s = A.state; return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🔀 Cross-Disciplinary Lab</h1><p class="small mute">Ogni missione si completa solo se i risultati salvati nei laboratori coinvolti sono sufficienti: aprirli non basta. Poi scrivi una sintesi che collega i principi. È un esercizio simulato: per l’applicazione reale usa STRATEGOS.</p><div class="list">' +
      Xd.missions.map(m => { const p = Xd.progress(s, m); return '<button class="item" data-act="smaXdOpen" data-id="' + E(m.id) + '"><span class="tx"><b>' + E(m.title) + '</b><span>' + E(m.areas || '') + ' · ' + p.doneN + '/' + p.total + ' parti' + (p.complete ? ' · completata' : '') + '</span></span>' + (p.complete ? '<span class="tag good">fatta</span>' : '') + '</button>'; }).join('') + '</div>';
  };
  V['sma-cross-play'] = p => {
    const m = Xd.missions.find(x => x.id === p.id), s = A.state, pr = Xd.progress(s, m);
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(m.title) + '</h1><div class="card"><p>' + E(m.intro) + '</p></div><div class="card"><h3>Parti</h3><div class="list">' + pr.parts.map(x => { const v = VIEW[x.p.lab]; return '<button class="item" data-act="smaXdGo" data-lab="' + x.p.lab + '" data-ref="' + E(x.p.ref) + '"><span class="tx"><b>' + E(x.p.label) + '</b><span>' + E(x.p.need || '') + '</span></span><span class="tag ' + (x.done ? 'good' : '') + '">' + (x.done ? 'fatto' : 'da fare') + '</span></button>'; }).join('') + '</div></div>' +
      '<div class="card"><h3>Sintesi</h3><p class="small">' + E(m.synthesis) + '</p>' + (pr.synthesis ? '<p class="small"><b>La tua sintesi:</b> ' + E(pr.synthesis) + '</p>' : '<textarea id="sma-xd-text" rows="4" style="width:100%" ' + (pr.doneN < pr.total ? 'disabled placeholder="Completa prima tutte le parti"' : '') + '></textarea><button class="btn" data-act="smaXdSyn" data-id="' + E(m.id) + '"' + (pr.doneN < pr.total ? ' disabled' : '') + '>Salva la sintesi</button>') + '</div>';
  };
  X.smaXdOpen = el => { A.go('sma-cross-play', { id: el.dataset.id }); };
  X.smaXdGo = el => { const lab = el.dataset.lab, v = VIEW[lab], p = v[1] ? { [v[1]]: el.dataset.ref } : {}; if (lab === 'cyberlab' || lab === 'proglab' || lab === 'f1lab' || lab === 'proc' || lab === 'combat' || lab === 'convo' || lab === 'deduction' || lab === 'sportlab') { const open = { cyberlab: 'smaCybOpen', proglab: 'smaProgOpen', f1lab: 'smaF1Open', proc: 'smaProcOpen', combat: 'smaCmbOpen', convo: 'smaCvOpen', deduction: 'smaDedOpen', sportlab: 'smaSpStudy' }[lab]; el.dataset.id = el.dataset.ref; ST.acts[open](el); return; } if (lab === 'opponent') { el.dataset.t = el.dataset.ref; ST.acts.smaOppOpen(el); return; } A.go(v[0], p); };
  X.smaXdSyn = el => { const m = Xd.missions.find(x => x.id === el.dataset.id), r = Xd.synthesize(A.state, m, (document.getElementById('sma-xd-text') || {}).value); if (!r.ok) { A.toast(r.err); return; } A.save(); A.render(); };

  const P = (lab, ref, label, need) => ({ lab, ref, label, need });
  Xd.add({ id: 'xd-strategia-cyber', title: 'Incidente sul sito: strategia + cybersecurity', areas: 'Strategia · Cybersecurity', pillars: ['det', 'cyb'], intro: 'Un sito di prova mostra segnali di attacco. Devi analizzare i log con il terminale, decidere sotto informazioni contraddittorie e ragionare sui costi delle verifiche.',
    parts: [P('cyberlab', 'cyb-sqli-log', 'Conta i tentativi di SQL injection nei log', 'Risolvi l’esercizio nel terminale'), P('proc', 'proc-allarme-contraddittorio', 'Gestisci un allarme contraddittorio', 'Processo almeno 75%'), P('deduction', 'ded-sito-lento', 'Diagnostica la lentezza del sito', 'Conclusione corretta almeno una volta')], synthesis: 'Quale principio comune hai usato nelle tre parti (per esempio: scegliere la verifica che separa meglio le ipotesi)? Dove l’analisi dei dati e la decisione si sono influenzate a vicenda?' });
  Xd.add({ id: 'xd-strategia-prog', title: 'Algoritmi e strategia: ricerca e adattamento', areas: 'Strategia · Programmazione', pillars: ['pln', 'prog'], intro: 'Scrivi due algoritmi (ricerca e percorso) e poi usa lo stesso modo di pensare, esplorare per distanze crescenti, per leggere un avversario che reagisce.',
    parts: [P('proglab', 'prog-bsearch', 'Implementa la ricerca binaria', 'Tutti i test'), P('proglab', 'prog-bfs', 'Percorso più breve nella griglia', 'Tutti i test'), P('opponent', 'cons', 'Leggi un avversario con una regola', 'Almeno il 75% del massimo')], synthesis: 'Che cosa hanno in comune un algoritmo di ricerca e il tentativo di capire la regola di un avversario? Quale ruolo hanno avuto i casi limite e le ipotesi?' });
  Xd.add({ id: 'xd-strategia-f1', title: 'Muretto box: strategia + Formula 1', areas: 'Strategia · Formula 1', pillars: ['pln', 'f1'], intro: 'Applica la teoria dei giochi e il valore atteso a due decisioni di gara: l’undercut contro un rivale e la sosta con la Safety Car.',
    parts: [P('f1lab', 'f1-undercut', 'Undercut contro un rivale', 'Efficienza almeno 95% del modello'), P('f1lab', 'f1-safety-car', 'Sosta con la Safety Car', 'Scelta migliore del modello'), P('opponent', 'opp', 'Prevedi le mosse di un avversario opportunista', 'Almeno il 75% del massimo')], synthesis: 'Perché la scelta ottima dipende dalle ipotesi del modello e dalla reazione dell’avversario? Che cosa cambierebbe in una gara vera, dove non conosci i parametri?' });
  Xd.add({ id: 'xd-strategia-sport', title: 'Evidenze e allenamento: decisione + scienze dello sport', areas: 'Strategia · Scienze dello sport', pillars: ['det', 'sport'], intro: 'Leggi con senso critico due studi sintetici e poi decidi con prove ambigue: sospendere il giudizio può essere la scelta migliore.',
    parts: [P('sportlab', 'st-1', 'Studio 1: campione piccolo e misura indiretta', 'Lettura critica solida'), P('sportlab', 'st-2', 'Studio 2: correlazione e causalità', 'Lettura critica solida'), P('deduction', 'ded-vendite-calo', 'Caso con prove insufficienti', 'Conclusione corretta almeno una volta')], synthesis: 'Che cosa hanno in comune la lettura di uno studio e la diagnosi con prove incomplete? Quando conviene sospendere il giudizio e quale prova cercheresti?' });
  Xd.add({ id: 'xd-previsione-f1', title: 'Probabilità e gara: Formula 1 + decision science', areas: 'Formula 1 · Previsione', pillars: ['f1', 'det'], intro: 'Allena la calibrazione con intervalli all’80% e poi applicala a un piano di gara con pioggia prevista.',
    parts: [P('forecast', '6', 'Rispondi ad almeno 6 intervalli all’80%', 'Sei risposte salvate'), P('f1lab', 'f1-pioggia', 'Piano con pioggia prevista', 'Efficienza almeno 95% del modello')], synthesis: 'In che modo l’incertezza della previsione (di una quantità o del meteo) dovrebbe cambiare il tuo piano? Che cosa fa un piano robusto rispetto a uno ottimale solo sulla carta?' });
  Xd.add({ id: 'xd-judo-bio', title: 'Judo e biomeccanica: leggere l’equilibrio', areas: 'Judo · Strategia', pillars: ['pln', 'judo'], intro: 'Riconosci la direzione dello squilibrio e usa la regolarità di una reazione, poi confrontala con un avversario simulato che reagisce in modo prevedibile.',
    parts: [P('combat', 'cmb-l2-kuzushi', 'Direzioni dello squilibrio', 'Almeno il 67%'), P('combat', 'cmb-l4-lettura', 'Sfruttare una reazione prevedibile', 'Almeno il 67%'), P('opponent', 'ada', 'Leggi un avversario adattivo', 'Almeno il 75% del massimo')], synthesis: 'Che cosa lega la lettura di uno squilibrio fisico e la lettura della regola di un avversario? Teoria o pratica: che cosa ti manca per applicarlo sul tatami?' });
})(window.ST = window.ST || {});
