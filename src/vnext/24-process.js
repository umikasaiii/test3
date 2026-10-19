/* vNext M3 — Crisis Management Lab e Strategic Communication Lab: scenari ramificati valutati sul PROCESSO decisionale.
   Ogni opzione ha un punteggio di processo (0–3) assegnato dall'autore con motivazione, separato dall'esito (variabili di stato, con
   eventi a probabilità). Così si distinguono buona decisione/esito sfavorevole e cattiva decisione/esito favorevole. Manipolazione,
   minacce e coercizione hanno sempre processo 0 e sono segnalate (flag 'manip'). Il validatore controlla la coerenza del grafo. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const P = M.process = { scenarios: [] };
  P.add = sc => { P.scenarios.push(sc); return sc; };
  P.byId = id => P.scenarios.find(s => s.id === id);

  P.validate = sc => {
    const er = [], ns = sc.nodes || {}, ids = Object.keys(ns);
    if (!sc.id || !sc.title || !sc.intro || !['crisis', 'comm'].includes(sc.kind)) er.push('campi obbligatori/kind');
    if (!ns[sc.start]) er.push('nodo iniziale mancante');
    Object.keys(sc.vars || {}).forEach(k => { const d = sc.vars[k]; if (!(d.min < d.max) || d.start < d.min || d.start > d.max) er.push('variabile ' + k + ' fuori scala'); });
    const wk = Object.keys(sc.weights || {}); if (!wk.length || wk.some(k => !sc.vars[k])) er.push('pesi dell’esito mancanti o su variabili inesistenti');
    ids.forEach(id => {
      const n = ns[id]; if (!n.text || !Array.isArray(n.opts) || n.opts.length < 2) { er.push('nodo ' + id + ': testo/opzioni'); return; }
      if (!n.opts.some(o => o.proc >= 2)) er.push('nodo ' + id + ': nessuna opzione con processo ≥ 2');
      if (new Set(n.opts.map(o => o.proc)).size < 2) er.push('nodo ' + id + ': le opzioni non si distinguono per processo');
      n.opts.forEach((o, i) => {
        if (!o.label || !o.why || !Number.isInteger(o.proc) || o.proc < 0 || o.proc > 3) er.push('nodo ' + id + ' opz. ' + i + ': label/why/proc');
        if (o.flag === 'manip' && o.proc !== 0) er.push('nodo ' + id + ' opz. ' + i + ': la manipolazione deve avere processo 0');
        if (o.next != null && !ns[o.next]) er.push('nodo ' + id + ' opz. ' + i + ': next inesistente ' + o.next);
        Object.keys(o.fx || {}).concat(Object.keys((o.risk || {}).fx || {})).forEach(k => { if (!sc.vars[k]) er.push('nodo ' + id + ': variabile sconosciuta ' + k); });
        if (o.risk && !(o.risk.p > 0 && o.risk.p < 1 && o.risk.text)) er.push('nodo ' + id + ' opz. ' + i + ': rischio mal formato');
      });
    });
    if (!er.length) { // raggiungibilità e assenza di cicli
      const seen = new Set(), stack = new Set(); let cyc = false;
      const dfs = id => { if (stack.has(id)) { cyc = true; return; } if (seen.has(id)) return; seen.add(id); stack.add(id); ns[id].opts.forEach(o => { if (o.next != null) dfs(o.next); }); stack.delete(id); };
      dfs(sc.start); if (cyc) er.push('il grafo contiene un ciclo'); const un = ids.filter(i => !seen.has(i)); if (un.length) er.push('nodi irraggiungibili: ' + un.join(', '));
    }
    return { ok: !er.length, errors: er };
  };
  const bestProc = n => Math.max.apply(null, n.opts.map(o => o.proc));
  P.start = sc => { const v = {}; Object.keys(sc.vars).forEach(k => { v[k] = sc.vars[k].start; }); return { node: sc.start, vars: v, path: [], proc: 0, procMax: 0 }; };
  P.done = st => st.node == null;
  P.choose = (sc, st, oi, rng) => {
    const n = sc.nodes[st.node], o = n.opts[oi]; rng = rng || U.rand; const ev = [];
    const ap = fx => Object.keys(fx || {}).forEach(k => { const d = sc.vars[k]; st.vars[k] = U.clamp(st.vars[k] + fx[k], d.min, d.max); });
    ap(o.fx); let risk = null; if (o.risk && rng() < o.risk.p) { ap(o.risk.fx); risk = o.risk.text; }
    st.path.push({ node: st.node, opt: oi, risk }); st.proc += o.proc; st.procMax += bestProc(n); st.node = o.next == null ? null : o.next;
    return { risk, opt: o };
  };
  P.utility = (sc, vars) => { let u = 0, w = 0; Object.keys(sc.weights).forEach(k => { const d = sc.vars[k], x = (vars[k] - d.min) / (d.max - d.min); u += Math.abs(sc.weights[k]) * (sc.weights[k] < 0 ? 1 - x : x); w += Math.abs(sc.weights[k]); }); return u / w; };
  P.result = (sc, st) => {
    const pp = st.procMax ? st.proc / st.procMax : 0, out = P.utility(sc, st.vars), manip = st.path.some(p => sc.nodes[p.node].opts[p.opt].flag === 'manip');
    let label;
    if (manip) label = 'Approccio manipolatorio o coercitivo: non è premiato anche se l’esito è buono';
    else if (pp >= 0.75 && out >= 0.6) label = 'Buona decisione, esito favorevole';
    else if (pp >= 0.75) label = 'Buon processo, esito sfavorevole (rischio o incertezza inevitabile)';
    else if (out >= 0.6) label = 'Esito favorevole, ma processo debole: attenzione alla fortuna';
    else label = 'Processo da migliorare';
    return { process: pp, outcome: out, label, manip, good: !manip && pp >= 0.75, steps: st.path.map(p => { const n = sc.nodes[p.node], o = n.opts[p.opt], best = n.opts.reduce((a, x) => x.proc > a.proc ? x : a, n.opts[0]); return { text: n.text, chosen: o, best: best.proc > o.proc ? best : null, risk: p.risk }; }) };
  };

  const KIND = { crisis: { lab: 'crisis', view: 'sma-crisis', title: 'Crisis Management Lab', dim: 'decision', desc: 'Scenari di crisi (ritardi, budget, priorità, informazioni contraddittorie) valutati sul processo.' }, comm: { lab: 'comm', view: 'sma-comm', title: 'Strategic Communication Lab', dim: 'leadership', desc: 'Negoziazione, ascolto e gestione dei disaccordi: manipolazione e coercizione non sono mai premiate.' } };
  Object.keys(KIND).forEach(k => {
    M.registerLab({ id: KIND[k].lab, title: KIND[k].title, view: KIND[k].view, desc: KIND[k].desc, ready: true });
    V[KIND[k].view] = () => '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(KIND[k].title) + '</h1><p class="small mute">' + E(KIND[k].desc) + ' Il giudizio separa la qualità del processo dall’esito, che può dipendere dal caso. I punteggi di processo sono scelte didattiche dell’autore, motivate a fine scenario.</p><div class="list">' +
      P.scenarios.filter(s => s.kind === k).map(s => { const e = M.S(A.state).sims['proc:' + s.id]; return '<button class="item" data-act="smaProcOpen" data-id="' + E(s.id) + '"><span class="tx"><b>' + E(s.title) + '</b><span>' + E(s.level) + (e ? ' · ' + e.tries + ' partite · miglior processo ' + Math.round(100 * e.bestProc) + '%' : '') + '</span></span></button>'; }).join('') + '</div>';
  });
  const games = {};
  const bar = (sc, st) => Object.keys(sc.vars).map(k => { const d = sc.vars[k], pc = Math.round(100 * (st.vars[k] - d.min) / (d.max - d.min)); return '<div class="sma-dim"><span>' + E(d.label) + '</span><span class="sma-bar"><i style="width:' + pc + '%"></i></span><small>' + Math.round(st.vars[k]) + (d.unit ? ' ' + E(d.unit) : '') + '</small></div>'; }).join('');
  V['sma-proc-play'] = p => {
    const sc = P.byId(p.id), st = games[p.id] || (games[p.id] = P.start(sc)), kind = KIND[sc.kind];
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(sc.title) + '</h1>';
    if (P.done(st)) {
      const r = P.result(sc, st);
      h += '<div class="card glow"><h2 style="margin:0">' + E(r.label) + '</h2><p class="small">Processo <b>' + Math.round(100 * r.process) + '%</b> · esito <b>' + Math.round(100 * r.outcome) + '%</b></p></div><div class="card"><h3>Stato finale</h3>' + bar(sc, st) + '</div><div class="card"><h3>Le tue decisioni</h3>' +
        r.steps.map(s => '<p class="small"><b>' + E(s.text) + '</b><br>Hai scelto: «' + E(s.chosen.label) + '» (processo ' + s.chosen.proc + '/3). ' + E(s.chosen.why) + (s.risk ? '<br><span class="warn">Imprevisto: ' + E(s.risk) + '</span>' : '') + (s.best ? '<br><span class="mute">Alternativa più solida: «' + E(s.best.label) + '» — ' + E(s.best.why) + '</span>' : '') + '</p>').join('') + '</div><div class="card"><h3>Lezione</h3><p class="small">' + E(sc.explain) + '</p></div><div class="row"><button class="btn" data-act="smaProcAgain" data-id="' + E(sc.id) + '">Rigioca</button></div>';
      return h;
    }
    const n = sc.nodes[st.node];
    h += (st.path.length ? '' : '<p>' + E(sc.intro) + '</p>') + '<div class="card"><h3>Situazione</h3>' + bar(sc, st) + '</div><div class="card"><p>' + E(n.text) + '</p><div class="list">' + n.opts.map((o, i) => '<button class="item" data-act="smaProcChoose" data-id="' + E(sc.id) + '" data-o="' + i + '"><span class="tx"><b>' + E(o.label) + '</b></span></button>').join('') + '</div></div>';
    return h;
  };
  X.smaProcOpen = el => { delete games[el.dataset.id]; A.go('sma-proc-play', { id: el.dataset.id }); };
  X.smaProcChoose = el => {
    const sc = P.byId(el.dataset.id), st = games[sc.id]; P.choose(sc, st, +el.dataset.o);
    if (P.done(st)) {
      const r = P.result(sc, st), s = A.state, S = M.S(s), e = (S.sims['proc:' + sc.id] = S.sims['proc:' + sc.id] || { tries: 0, bestProc: 0, bestOut: 0 });
      e.tries++; e.bestProc = Math.max(e.bestProc, r.process); e.bestOut = Math.max(e.bestOut, r.outcome);
      M.record(s, KIND[sc.kind].dim, 'proc:' + sc.id, 'auto', r.good, {}); if (sc.kind === 'crisis') M.record(s, 'adaptability', 'proc:' + sc.id, 'auto', r.process >= 0.6, {});
      try { A.xp(r.good ? 3 : 1, 'sma:proc:' + sc.id + ':' + e.tries); } catch (err) { /* ignora */ } A.save();
    }
    A.render();
  };
  X.smaProcAgain = el => { delete games[el.dataset.id]; A.render(); };
})(window.ST = window.ST || {});
