/* vNext M6 — Combat Tactical Recognition Lab (judo/lotta): riconoscimento tattico a TAVOLINO. Schemi dall'alto generati dai dati
   (posizione, orientamento, direzione dello squilibrio), pause decisionali con più risposte plausibili valutate per qualità (non una sola
   «giusta» quando dipende da distanza, presa o equilibrio), spiegazione biomeccanica e conseguenze. È COMPETENZA TEORICO-TATTICA: non
   dimostra competenza motoria. Questa si registra a parte e solo come dichiarata o confermata da un istruttore. Nessuna istruzione operativa:
   le tecniche con partner, cadute o proiezioni vanno praticate in un ambiente idoneo e sotto supervisione qualificata. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const K = M.combat = { situations: [] };
  K.SAFETY = 'Questo laboratorio allena il riconoscimento e la scelta (teoria tattica). Non sostituisce la pratica: proiezioni, cadute e lavoro con partner si imparano su un tatami, con un istruttore qualificato.';
  K.DIRS = { f: 0, fr: 45, r: 90, br: 135, b: 180, bl: 225, l: 270, fl: 315 }; // gradi rispetto alla direzione in cui guarda uke
  K.DIR_NAME = { f: 'avanti', fr: 'avanti a destra', r: 'a destra', br: 'indietro a destra', b: 'indietro', bl: 'indietro a sinistra', l: 'a sinistra', fl: 'avanti a sinistra' };
  K.add = s => { K.situations.push(s); return s; };
  K.byId = id => K.situations.find(x => x.id === id);
  K.validate = s => {
    const er = []; if (!s.id || !s.title || !['L0', 'L1', 'L2', 'L3', 'L4', 'L5'].includes(s.level) || !Array.isArray(s.steps) || !s.steps.length) return { ok: false, errors: ['campi obbligatori'] };
    s.steps.forEach((st, i) => {
      const w = 'passo ' + (i + 1) + ': ';
      if (!st.prompt || !st.bio) er.push(w + 'testo/spiegazione'); if (!st.fig || !st.fig.tori || !st.fig.uke) er.push(w + 'figure mancanti');
      if (st.fig && st.fig.kuzushi && K.DIRS[st.fig.kuzushi] == null) er.push(w + 'direzione sconosciuta ' + st.fig.kuzushi);
      const o = st.opts || []; if (o.length < 3 || o.length > 5) er.push(w + 'servono 3–5 opzioni');
      o.forEach((x, j) => { if (!x.label || !x.why || !Number.isInteger(x.q) || x.q < 0 || x.q > 3) er.push(w + 'opzione ' + (j + 1) + ': label/why/q'); });
      if (!o.some(x => x.q === 3)) er.push(w + 'manca un’opzione di qualità 3'); if (!o.some(x => x.q <= 1)) er.push(w + 'manca un’opzione debole');
      if (o.filter(x => x.q >= 2).length >= 2 && !st.depends) er.push(w + 'più risposte plausibili: spiega da che cosa dipende (campo depends)');
      if (new Set(o.map(x => x.label)).size !== o.length) er.push(w + 'opzioni duplicate');
    });
    return { ok: !er.length, errors: er };
  };
  /* schema dall'alto (SVG): tatami 100×70; ogni figura = cerchio + triangolo di orientamento (0° = verso l'alto) */
  const tri = (x, y, a, r) => { const p = (d, k) => { const t = (a + d) * Math.PI / 180; return (x + Math.sin(t) * k).toFixed(1) + ',' + (y - Math.cos(t) * k).toFixed(1); }; return p(0, r + 5) + ' ' + p(140, r + 1) + ' ' + p(-140, r + 1); };
  K.svg = fig => {
    const t = fig.tori, u = fig.uke, col = { tori: '#5aa9ff', uke: '#b48cff' };
    let g = '<svg viewBox="0 0 100 70" role="img" aria-label="Schema dall’alto della situazione" style="width:100%;max-width:420px;background:#0d1226;border:1px solid #2a3560;border-radius:10px">' +
      '<rect x="4" y="4" width="92" height="62" fill="none" stroke="#2a3560" stroke-dasharray="3 3"/>';
    if (fig.grips) fig.grips.forEach(gr => { g += '<line x1="' + t.x + '" y1="' + t.y + '" x2="' + u.x + '" y2="' + u.y + '" stroke="#ffd166" stroke-width="' + (gr.w || 1) + '" opacity=".75"/>'; });
    [['tori', t], ['uke', u]].forEach(([n, f]) => { g += '<polygon points="' + tri(f.x, f.y, f.a, 4.2) + '" fill="' + col[n] + '" opacity=".7"/><circle cx="' + f.x + '" cy="' + f.y + '" r="4.2" fill="' + col[n] + '"/><text x="' + f.x + '" y="' + (f.y + 1.4) + '" text-anchor="middle" font-size="4" fill="#0d1226" font-weight="700">' + (n === 'tori' ? 'T' : 'U') + '</text>'; });
    if (fig.kuzushi) { const a = (u.a + K.DIRS[fig.kuzushi]) * Math.PI / 180, x2 = u.x + Math.sin(a) * 15, y2 = u.y - Math.cos(a) * 15; g += '<line x1="' + u.x + '" y1="' + u.y + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="#ff6b81" stroke-width="1.6" marker-end="url(#ah)"/>'; }
    return g + '<defs><marker id="ah" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#ff6b81"/></marker></defs></svg>';
  };
  K.legend = 'T = tori (tu, blu), U = uke (l’avversario, viola); il triangolo indica dove guarda; la freccia rossa mostra verso dove è diretto il peso di uke; la linea gialla indica la presa.';
  K.S = s => { const x = M.S(s).combat = M.S(s).combat || { theory: {}, motor: [] }; x.theory = x.theory || {}; x.motor = x.motor || []; return x; };
  /* valutazione di un passo: qualità della scelta (0–3) e livello di accordo con la scelta migliore, senza dichiarare «unica risposta» quando dipende */
  K.judge = (step, oi) => { const o = step.opts[oi], best = Math.max.apply(null, step.opts.map(x => x.q)); return { q: o.q, best, ok: o.q >= 2, top: o.q === best, why: o.why, bio: step.bio, depends: step.depends || '' }; };
  K.record = (s, sit, answers) => {
    const x = K.S(s), q = answers.reduce((a, r) => a + r.q, 0), max = answers.length * 3, e = (x.theory[sit.id] = x.theory[sit.id] || { tries: 0, best: 0 });
    e.tries++; e.best = Math.max(e.best, q / max); e.last = q / max;
    M.record(s, 'planning', 'cmb:' + sit.id, 'auto', q / max >= 0.67, {}); return e;
  };
  /* competenza motoria: registro separato; mai ricavata dal teorico; la conferma richiede il nome di un istruttore/club */
  K.motorAdd = (s, o) => {
    const what = String(o.what || '').trim(); if (what.length < 5) return { ok: false, err: 'descrivi che cosa hai praticato' };
    if (!['self', 'coach'].includes(o.cls)) return { ok: false, err: 'indica se è autodichiarato o confermato da un istruttore' };
    if (o.cls === 'coach' && String(o.coach || '').trim().length < 3) return { ok: false, err: 'per la conferma indica istruttore o club' };
    K.S(s).motor.push({ d: U.today(), what, cls: o.cls, coach: String(o.coach || '').trim(), min: +o.min || 0 }); return { ok: true };
  };
  K.stats = s => { const x = K.S(s), ids = Object.keys(x.theory), d = ids.filter(i => x.theory[i].best >= 0.67).length; return { theoryDone: ids.length, theoryGood: d, motorSelf: x.motor.filter(m => m.cls === 'self').length, motorCoach: x.motor.filter(m => m.cls === 'coach').length }; };

  M.registerLab({ id: 'combat', title: 'Combat Tactical Recognition Lab', view: 'sma-combat', desc: 'Riconoscimento tattico di judo/lotta con schemi, pause decisionali e spiegazione biomeccanica. Teoria tattica, non competenza motoria.', ready: true });
  const games = {};
  V['sma-combat'] = () => {
    const s = A.state, st = K.stats(s), x = K.S(s);
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🥋 Combat Tactical Recognition</h1><p class="warn small">' + E(K.SAFETY) + '</p>' +
      '<div class="card"><h3>Due competenze separate</h3><p class="small"><b>Teorico-tattica</b> (questo laboratorio): ' + st.theoryGood + ' situazioni con buon risultato su ' + st.theoryDone + ' tentate.<br><b>Motoria verificata sul tatami</b>: ' + st.motorCoach + ' confermate da un istruttore, ' + st.motorSelf + ' autodichiarate. Il progresso teorico non aumenta mai quello motorio.</p></div>' +
      '<div class="card"><h3>Situazioni</h3><div class="list">' + K.situations.map(c => { const e = x.theory[c.id]; return '<button class="item" data-act="smaCmbOpen" data-id="' + E(c.id) + '"><span class="tx"><b>' + E(c.title) + '</b><span>' + c.level + ' · ' + c.steps.length + (c.steps.length > 1 ? ' decisioni' : ' decisione') + (e ? ' · miglior risultato ' + Math.round(100 * e.best) + '%' : '') + '</span></span></button>'; }).join('') + '</div></div>' +
      '<div class="card"><h3>Registro motorio (a parte)</h3><input id="sma-cm-what" placeholder="Che cosa hai praticato sul tatami (es. uchi-komi, ukemi)" style="width:100%"><p class="small"><select id="sma-cm-cls"><option value="self">Autodichiarato</option><option value="coach">Confermato da un istruttore</option></select> <input id="sma-cm-coach" placeholder="Istruttore o club (se confermato)"> <input id="sma-cm-min" type="number" placeholder="minuti" style="width:80px"></p><button class="btn alt" data-act="smaCmbMotor">Registra</button></div>';
  };
  V['sma-combat-play'] = p => {
    const c = K.byId(p.id), g = games[c.id] || (games[c.id] = { i: 0, ans: [], shown: null });
    if (g.i >= c.steps.length) {
      const q = g.ans.reduce((a, r) => a + r.q, 0), max = g.ans.length * 3;
      return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(c.title) + '</h1><div class="card glow"><h2 style="margin:0">Risultato: ' + Math.round(100 * q / max) + '%</h2><p class="small">Qualità media delle scelte. È un giudizio teorico: una scelta ottima sulla carta può non funzionare dal vivo, e viceversa.</p></div><div class="row"><button class="btn" data-act="smaCmbAgain" data-id="' + E(c.id) + '">Rigioca</button></div>';
    }
    const st = c.steps[g.i], sh = g.shown;
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(c.title) + '</h1><p class="small mute">Decisione ' + (g.i + 1) + ' di ' + c.steps.length + '</p><div class="card">' + K.svg(st.fig) + '<p class="small mute">' + E(K.legend) + '</p><p>' + E(st.prompt) + '</p>';
    if (!sh) h += '<div class="list">' + st.opts.map((o, i) => '<button class="item" data-act="smaCmbPick" data-id="' + E(c.id) + '" data-o="' + i + '"><span class="tx"><b>' + E(o.label) + '</b></span></button>').join('') + '</div></div>';
    else h += '</div><div class="card glow"><h3>' + ['Scelta debole', 'Scelta rischiosa', 'Scelta plausibile', 'Scelta molto solida'][sh.q] + '</h3><p class="small"><b>Hai scelto:</b> ' + E(st.opts[sh.oi].label) + '<br>' + E(sh.why) + '</p>' + (st.opts.some(o => o.q > sh.q) ? '<p class="small mute"><b>Più solida:</b> ' + E(st.opts.reduce((a, o) => o.q > a.q ? o : a, st.opts[0]).label) + '</p>' : '') + '<p class="small"><b>Biomeccanica:</b> ' + E(sh.bio) + '</p>' + (sh.depends ? '<p class="small warn"><b>Dipende da:</b> ' + E(sh.depends) + '</p>' : '') + '<button class="btn" data-act="smaCmbNext" data-id="' + E(c.id) + '">Continua</button></div>';
    return h;
  };
  X.smaCmbOpen = el => { delete games[el.dataset.id]; A.go('sma-combat-play', { id: el.dataset.id }); };
  X.smaCmbPick = el => { const c = K.byId(el.dataset.id), g = games[c.id], oi = +el.dataset.o, j = K.judge(c.steps[g.i], oi); g.shown = Object.assign({ oi }, j); g.ans.push({ q: j.q }); A.render(); };
  X.smaCmbNext = el => { const c = K.byId(el.dataset.id), g = games[c.id]; g.i++; g.shown = null; if (g.i >= c.steps.length) { K.record(A.state, c, g.ans); try { A.xp(2, 'sma:cmb:' + c.id); } catch (e) { /* ignora */ } A.save(); } A.render(); };
  X.smaCmbAgain = el => { delete games[el.dataset.id]; A.render(); };
  X.smaCmbMotor = () => { const v = id => (document.getElementById(id) || {}).value || ''; const r = K.motorAdd(A.state, { what: v('sma-cm-what'), cls: v('sma-cm-cls'), coach: v('sma-cm-coach'), min: v('sma-cm-min') }); if (!r.ok) { A.toast(r.err); return; } A.save(); A.toast('Registrato'); A.render(); };
})(window.ST = window.ST || {});
