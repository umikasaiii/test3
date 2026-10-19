/* vNext M3 — Deduction Lab: casi investigativi/diagnostici con indizi progressivi, ipotesi concorrenti, costo delle verifiche,
   aggiornamento bayesiano e feedback sul PROCESSO (non solo sull'esito). Modello didattico: ogni indizio ha, per ogni ipotesi, la
   plausibilità di osservarlo (lik ∈ [0,1], scelta dall'autore e dichiarata); il posteriore è prior × Π lik normalizzato.
   Ogni caso è validato da un risolutore (D.validate): la soluzione deve essere coerente con i dati. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const D = M.deduction = { cases: [], OPEN: 'sospendi' };
  D.add = c => { D.cases.push(c); return c; };
  D.byId = id => D.cases.find(c => c.id === id);

  /* ---- motore (funzioni pure) ---- */
  D.prior = c => { const o = {}; const n = c.hyps.length; c.hyps.forEach(h => { o[h.id] = c.prior && c.prior[h.id] != null ? c.prior[h.id] : 1 / n; }); return o; };
  D.posterior = (c, ids) => {
    const p = D.prior(c);
    (ids || []).forEach(id => { const k = c.clues.find(x => x.id === id); if (k) c.hyps.forEach(h => { p[h.id] *= k.lik[h.id]; }); });
    const z = c.hyps.reduce((a, h) => a + p[h.id], 0) || 1;
    c.hyps.forEach(h => { p[h.id] /= z; });
    return p;
  };
  const top = p => Object.keys(p).sort((a, b) => p[b] - p[a])[0];
  /* costo minimo (forza bruta sui sottoinsiemi) per portare la verità ad almeno `th` di probabilità */
  D.minCost = (c, th) => {
    const n = c.clues.length; let best = null;
    for (let m = 0; m < (1 << n); m++) {
      const ids = [], cost = c.clues.reduce((a, k, i) => (m >> i & 1) ? (ids.push(k.id), a + k.cost) : a, 0);
      if (best != null && cost >= best) continue;
      if (D.posterior(c, ids)[c.truth] >= th) best = cost;
    }
    return best;
  };
  D.validate = c => {
    const er = []; const hs = (c.hyps || []).map(h => h.id), ks = (c.clues || []).map(k => k.id);
    if (!c.id || !c.title || !c.intro) er.push('campi obbligatori mancanti');
    if (hs.length < 3 || hs.length > 6) er.push('servono 3–6 ipotesi');
    if (new Set(hs).size !== hs.length || new Set(ks).size !== ks.length) er.push('id duplicati');
    if (!c.open && hs.indexOf(c.truth) < 0) er.push('verità non fra le ipotesi');
    if ((c.clues || []).length < 5 || (c.clues || []).length > 12) er.push('servono 5–12 indizi');
    (c.clues || []).forEach(k => { if (!k.text || !(k.cost >= 0)) er.push('indizio ' + k.id + ': testo/costo'); hs.forEach(h => { const v = k.lik && k.lik[h]; if (!(v >= 0 && v <= 1)) er.push('indizio ' + k.id + ': lik mancante per ' + h); }); });
    if (!(c.budget > 0)) er.push('budget mancante');
    if (er.length) return { ok: false, errors: er };
    const all = ks, full = D.posterior(c, all), init = (c.start || []).slice();
    init.forEach(id => { if (ks.indexOf(id) < 0) er.push('indizio iniziale sconosciuto ' + id); });
    if (c.open) { if (full[top(full)] >= 0.75) er.push('caso aperto: con tutti gli indizi un\'ipotesi supera già il 75%'); }
    else {
      if (top(full) !== c.truth) er.push('con tutti gli indizi la verità non è l\'ipotesi più probabile');
      if (full[c.truth] < 0.8) er.push('con tutti gli indizi la verità resta sotto l\'80% (' + full[c.truth].toFixed(2) + ')');
      const mc = D.minCost(c, 0.8); if (mc == null) er.push('la verità non raggiunge l\'80% con nessun sottoinsieme'); else if (mc > c.budget) er.push('il costo minimo (' + mc + ') supera il budget (' + c.budget + ')');
      // un indizio fuorviante a sfavore della verità rende il caso più istruttivo: segnalato come info, non errore
    }
    const tot = c.clues.reduce((a, k) => a + k.cost, 0); if (tot <= c.budget) er.push('il budget copre tutti gli indizi: nessuna scelta da fare');
    return { ok: !er.length, errors: er, full, minCost: c.open ? null : D.minCost(c, 0.8), total: tot };
  };

  /* stato di una partita: indizi iniziali gratuiti, richieste a costo, conclusione */
  D.start = c => ({ id: c.id, revealed: (c.start || []).slice(), spent: 0, order: [], hints: 0 });
  D.canReveal = (c, st, id) => { const k = c.clues.find(x => x.id === id); return !!k && st.revealed.indexOf(id) < 0 && st.spent + k.cost <= c.budget; };
  D.reveal = (c, st, id) => { if (!D.canReveal(c, st, id)) return false; st.revealed.push(id); st.order.push(id); st.spent += c.clues.find(x => x.id === id).cost; return true; };
  const brier = (p, truth) => Object.keys(p).reduce((a, h) => a + Math.pow(p[h] - (h === truth ? 1 : 0), 2), 0);
  /* feedback finale: confronta conclusione e confidenza con il posteriore ottenuto dalle prove effettivamente raccolte */
  D.finish = (c, st, ans) => {
    const post = D.posterior(c, st.revealed), pick = ans.pick, conf = pick === D.OPEN ? null : U.clamp(+ans.conf || 60, 0, 100);
    const leader = top(post), pLead = post[leader];
    const support = pick !== D.OPEN && pick === leader;
    const outcome = c.open ? pick === D.OPEN : pick === c.truth;
    const flags = [];
    if (pick !== D.OPEN) {
      if (conf >= 80 && post[pick] < conf / 100 - 0.25) flags.push({ k: 'over', t: 'Eccesso di sicurezza: con le prove raccolte l\'ipotesi scelta vale circa ' + Math.round(post[pick] * 100) + '%, non ' + conf + '%.' });
      if (conf <= 60 && post[pick] >= conf / 100 + 0.25) flags.push({ k: 'under', t: 'Prudenza eccessiva: le prove sostenevano l\'ipotesi scelta (circa ' + Math.round(post[pick] * 100) + '%) più di quanto dichiarato.' });
      const against = st.revealed.filter(id => { const k = c.clues.find(x => x.id === id); return k && k.lik[pick] <= 0.15 && c.hyps.some(h => h.id !== pick && k.lik[h.id] > 0.5); });
      if (against.length) flags.push({ k: 'ignored', t: 'Contraddizione ignorata: ' + against.map(id => '«' + c.clues.find(x => x.id === id).text + '»').join('; ') + ' è difficile da spiegare con l\'ipotesi scelta.' });
      const misused = (ans.support || []).filter(id => { const k = c.clues.find(x => x.id === id); if (!k) return false; const others = c.hyps.filter(h => h.id !== pick).map(h => k.lik[h.id]); return k.lik[pick] <= Math.max.apply(null, others); });
      if (misused.length) flags.push({ k: 'misused', t: 'Prove che non discriminano: ' + misused.map(id => '«' + c.clues.find(x => x.id === id).text + '»').join('; ') + ' non rendono più probabile l\'ipotesi scelta rispetto ad almeno un\'altra.' });
    }
    if (c.open && pick !== D.OPEN && pLead < 0.75) flags.push({ k: 'open', t: 'Le prove disponibili non bastano: nessuna ipotesi supera il 75% (la migliore è ' + Math.round(pLead * 100) + '%). Conveniva sospendere il giudizio e indicare quale prova cercare.' });
    if (!c.open && pick === D.OPEN) flags.push({ k: 'timid', t: 'Si poteva concludere: con le prove disponibili in questo caso una conclusione solida era possibile.' });
    const mc = c.open ? null : D.minCost(c, 0.8), eff = mc == null || !st.spent ? null : Math.min(1, mc / st.spent);
    if (eff != null && eff < 0.5) flags.push({ k: 'cost', t: 'Verifiche costose: bastavano circa ' + mc + ' punti di verifica, ne hai spesi ' + st.spent + '.' });
    const goodProcess = pick === D.OPEN ? c.open : (support && !flags.some(f => f.k === 'over' || f.k === 'ignored' || f.k === 'misused'));
    let label;
    if (goodProcess && outcome) label = 'Buona decisione, esito favorevole';
    else if (goodProcess && !outcome) label = 'Buona decisione con esito sfavorevole (incertezza inevitabile)';
    else if (!goodProcess && outcome) label = 'Esito favorevole, ma ragionamento da correggere';
    else label = pick === D.OPEN ? 'Informazione mancante o prudenza eccessiva' : 'Errore di ragionamento';
    const p0 = pick === D.OPEN ? null : (() => { const q = {}; c.hyps.forEach(h => { q[h.id] = h.id === pick ? conf / 100 : (1 - conf / 100) / (c.hyps.length - 1); }); return q; })();
    return { outcome, goodProcess, label, post, leader, pLead, flags, spent: st.spent, minCost: mc, eff, brier: p0 && !c.open ? brier(p0, c.truth) : null, bayesBrier: c.open ? null : brier(post, c.truth), conf };
  };

  /* ---- salvataggio dei risultati ---- */
  D.save = (s, c, st, ans, r) => {
    const S = M.S(s), e = (S.cases[c.id] = S.cases[c.id] || { tries: 0, hist: [] });
    e.tries++; e.hist.push({ d: U.today(), ok: r.outcome, good: r.goodProcess, conf: r.conf, spent: st.spent }); if (e.hist.length > 20) e.hist.shift();
    M.record(s, 'deduction', c.id, 'auto', r.outcome, { conf: r.conf });
    M.record(s, 'decision', 'ded:' + c.id, 'auto', r.goodProcess, {});
    if (r.conf != null) M.record(s, 'calibration', 'ded:' + c.id, 'auto', Math.abs(r.conf / 100 - r.post[ans.pick]) <= 0.3, { conf: r.conf });
    try { A.xp(r.outcome ? 3 : 1, 'sma:ded:' + c.id + ':' + e.tries); } catch (err) { /* il punteggio non deve bloccare il salvataggio */ }
  };

  /* ---- interfaccia ---- */
  const games = {}; // partite in corso (non persistite: si salvano solo i risultati)
  M.registerLab({ id: 'deduction', title: 'Deduction Lab', view: 'sma-deduction', desc: 'Casi con indizi progressivi, ipotesi concorrenti e costo delle verifiche; feedback sul ragionamento.', ready: true });
  V['sma-deduction'] = () => {
    const S = M.S(A.state);
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🔎 Deduction Lab</h1>' +
      '<p class="small mute">Ogni caso ha ipotesi concorrenti e un budget di verifica limitato: scegli quali indizi richiedere, poi concludi con una confidenza. Il giudizio riguarda il processo (uso delle prove, calibrazione, costo), non solo l’esito. Le plausibilità degli indizi sono stime didattiche dell’autore, dichiarate in ogni caso.</p>' +
      '<div class="list">' + D.cases.map(c => { const e = S.cases[c.id], last = e && e.hist[e.hist.length - 1]; return '<button class="item" data-act="smaDedOpen" data-id="' + E(c.id) + '"><span class="tx"><b>' + E(c.title) + '</b><span>' + E(c.level) + ' · ' + c.hyps.length + ' ipotesi · budget ' + c.budget + (c.open ? ' · prove possibilmente insufficienti' : '') + '</span></span>' + (last ? '<span class="tag ' + (last.good ? 'good' : '') + '">' + (e.tries) + ' tentativi</span>' : '') + '</button>'; }).join('') + '</div>';
  };
  const game = id => games[id] || (games[id] = { st: D.start(D.byId(id)), pick: null, conf: 70, support: [], res: null });
  V['sma-deduction-case'] = p => {
    const c = D.byId(p.id), g = game(p.id), st = g.st, left = c.budget - st.spent;
    if (g.res) return resultHtml(c, g);
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(c.title) + '</h1><p>' + E(c.intro) + '</p>';
    h += '<div class="card"><h3>Ipotesi</h3>' + c.hyps.map(x => '<p class="small" style="margin:4px 0"><b>' + E(x.id.toUpperCase()) + '</b> · ' + E(x.text) + '</p>').join('') + '</div>';
    h += '<div class="card"><h3>Indizi raccolti</h3>' + (st.revealed.length ? '<ol class="small">' + st.revealed.map(id => '<li>' + E(c.clues.find(k => k.id === id).text) + '</li>').join('') + '</ol>' : '<p class="small mute">Nessuno ancora.</p>') + '</div>';
    h += '<div class="card"><h3>Richiedi una verifica</h3><p class="small mute">Budget residuo: <b>' + left + '</b> / ' + c.budget + '</p><div class="list">' + c.clues.filter(k => st.revealed.indexOf(k.id) < 0).map(k => '<button class="item" data-act="smaDedReveal" data-id="' + E(c.id) + '" data-k="' + E(k.id) + '"' + (k.cost > left ? ' disabled' : '') + '><span class="tx"><b>' + E(k.ask || k.text.slice(0, 60)) + '</b><span>costo ' + k.cost + '</span></span></button>').join('') + '</div></div>';
    h += '<div class="card"><h3>Concludi</h3><div class="list">' + c.hyps.map(x => '<button class="item' + (g.pick === x.id ? ' done' : '') + '" data-act="smaDedPick" data-id="' + E(c.id) + '" data-h="' + E(x.id) + '"><span class="tx"><b>' + E(x.id.toUpperCase()) + ' · ' + E(x.text) + '</b></span></button>').join('') +
      '<button class="item' + (g.pick === D.OPEN ? ' done' : '') + '" data-act="smaDedPick" data-id="' + E(c.id) + '" data-h="' + D.OPEN + '"><span class="tx"><b>Sospendo il giudizio</b><span>Le prove non bastano per una conclusione solida</span></span></button></div>';
    if (g.pick && g.pick !== D.OPEN) {
      h += '<p class="small" style="margin-top:10px">Quanto sei sicuro? ' + [50, 60, 70, 80, 90, 99].map(v => '<button class="btn sm' + (g.conf === v ? '' : ' ghost') + '" data-act="smaDedConf" data-id="' + E(c.id) + '" data-v="' + v + '">' + v + '%</button>').join(' ') + '</p>' +
        '<p class="small">Quali indizi sostengono la tua conclusione?</p>' + st.revealed.map(id => { const k = c.clues.find(x => x.id === id); return '<label class="small" style="display:block;margin:4px 0"><input type="checkbox" data-act="smaDedSup" data-id="' + E(c.id) + '" data-k="' + E(id) + '"' + (g.support.indexOf(id) >= 0 ? ' checked' : '') + '> ' + E(k.text) + '</label>'; }).join('');
    }
    h += (g.pick ? '<button class="btn" style="margin-top:10px" data-act="smaDedFinish" data-id="' + E(c.id) + '">Concludi e valuta</button>' : '') + '</div>';
    return h;
  };
  const resultHtml = (c, g) => {
    const r = g.res, post = r.post;
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>Esito: ' + E(c.title) + '</h1><div class="card glow"><h2 style="margin:0">' + E(r.label) + '</h2>' +
      '<p>' + (c.open ? 'Caso con prove possibilmente insufficienti.' : 'Soluzione: <b>' + E(c.truth.toUpperCase()) + ' · ' + E(c.hyps.find(x => x.id === c.truth).text) + '</b>') + '</p></div>';
    h += '<div class="card"><h3>Che cosa dicevano le prove che hai raccolto</h3>' + c.hyps.map(x => '<div class="sma-dim"><span>' + E(x.id.toUpperCase()) + '</span><span class="sma-bar"><i style="width:' + Math.round(post[x.id] * 100) + '%"></i></span><small>' + Math.round(post[x.id] * 100) + '%</small></div>').join('') + '<p class="small mute">Calcolo bayesiano con le plausibilità dichiarate dall’autore (modello didattico).</p></div>';
    h += '<div class="card"><h3>Feedback sul processo</h3>' + (r.flags.length ? '<ul class="small">' + r.flags.map(f => '<li>' + E(f.t) + '</li>').join('') + '</ul>' : '<p class="small">Nessun errore di processo rilevato.</p>') +
      '<p class="small mute">Verifiche spese: ' + r.spent + (r.minCost != null ? ' · minimo sufficiente: ' + r.minCost : '') + (r.brier != null ? ' · Brier tuo ' + r.brier.toFixed(2) + ' vs prove ' + r.bayesBrier.toFixed(2) : '') + '</p></div>';
    h += '<div class="card"><h3>Spiegazione</h3><p class="small">' + E(c.explain) + '</p></div><div class="row"><button class="btn" data-act="smaDedAgain" data-id="' + E(c.id) + '">Rigioca il caso</button></div>';
    return h;
  };
  X.smaDedOpen = el => { A.go('sma-deduction-case', { id: el.dataset.id }); };
  X.smaDedReveal = el => { const c = D.byId(el.dataset.id), g = game(c.id); D.reveal(c, g.st, el.dataset.k); A.render(); };
  X.smaDedPick = el => { const g = game(el.dataset.id); g.pick = el.dataset.h; A.render(); };
  X.smaDedConf = el => { game(el.dataset.id).conf = +el.dataset.v; A.render(); };
  X.smaDedSup = el => { const g = game(el.dataset.id), i = g.support.indexOf(el.dataset.k); if (i >= 0) g.support.splice(i, 1); else g.support.push(el.dataset.k); };
  X.smaDedFinish = el => {
    const c = D.byId(el.dataset.id), g = game(c.id); if (!g.pick) return;
    const ans = { pick: g.pick, conf: g.conf, support: g.support }; g.res = D.finish(c, g.st, ans); D.save(A.state, c, g.st, ans, g.res); A.save(); A.render();
  };
  X.smaDedAgain = el => { delete games[el.dataset.id]; A.render(); };
})(window.ST = window.ST || {});
