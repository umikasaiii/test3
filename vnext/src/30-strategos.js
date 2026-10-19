/* vNext M4 — Real-Life Transfer Engine: protocollo STRATEGOS a 7 passi, missioni di vita reale, diario decisionale (riusa state.journal),
   verifiche differite a 7/30/90 giorni e classi di evidenza DISTINTE. L'app non verifica mai da sola un'abilità reale:
   simulato ≠ autodichiarato ≠ documentato ≠ verifica esterna. Il livello di transfer è derivato dalle evidenze, non dall'autovalutazione. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, T = ST.transfer, E = U.esc, X = ST.acts, V = ST.views;
  const S = M.strategos = { missions: [] };
  S.PROTOCOL = [
    { n: 1, t: 'Obiettivo', q: 'Che cosa vuoi ottenere, entro quando e come saprai di averlo ottenuto?' },
    { n: 2, t: 'Informazioni e incertezze', q: 'Che cosa sai (fatti), che cosa supponi e che cosa ti manca? Che cosa potrebbe cambiare il quadro?' },
    { n: 3, t: 'Attori, incentivi, vincoli', q: 'Chi è coinvolto, che cosa vuole ciascuno e quali limiti (tempo, soldi, energie, regole) hai?' },
    { n: 4, t: 'Alternative', q: 'Almeno tre alternative davvero diverse, compresa «non fare nulla».' },
    { n: 5, t: 'Conseguenze', q: 'Per ogni alternativa: che cosa succede a breve termine e dopo? Che cosa potrebbe andare storto (2° e 3° ordine)?' },
    { n: 6, t: 'Piano adattivo', q: 'Piano A, un piano B e il segnale che ti farà cambiare. Quanto stimi (in %) di riuscire?' },
    { n: 7, t: 'Verifica e aggiornamento', q: 'Quando controlli l’esito? Che cosa osserverai? Che cosa cambieresti se non funziona?' }
  ];
  S.MODELS = { ev: 'Valore atteso e probabilità', tree: 'Albero decisionale', bayes: 'Aggiornare le convinzioni con le prove', inc: 'Incentivi e teoria dei giochi', cons: 'Vincoli e colli di bottiglia', plan: 'Piani A, B e C', order: 'Conseguenze di secondo e terzo ordine', prio: 'Priorità: urgente vs importante', pre: 'Pre-mortem: immagina che sia fallito' };
  S.AREAS = { tempo: 'Gestione del tempo', studio: 'Pianificazione dello studio', progetti: 'Progetti personali', soldi: 'Decisioni economiche quotidiane', persone: 'Collaborazione e comunicazione', imprevisti: 'Gestione degli imprevisti', info: 'Valutazione delle informazioni', abitudini: 'Ottimizzazione delle abitudini', lungo: 'Decisioni a medio e lungo termine' };
  S.CLASSES = { sim: 'Esercizio simulato', self: 'Applicazione autodichiarata', doc: 'Risultato documentato', ext: 'Verifica esterna' };
  S.MODES = { guided: 'Guidata (modello e suggerimenti)', limited: 'Pochi suggerimenti', auto: 'Autonoma (scegli tu il modello)' };
  S.add = m => { S.missions.push(m); return m; };
  S.byId = id => S.missions.find(m => m.id === id);
  S.validate = m => { const er = []; if (!m.id || !m.title || !S.AREAS[m.area] || !m.context || !m.goal || !S.MODELS[m.model] || !m.metric) er.push('campi mancanti/non validi'); if (!Array.isArray(m.hints) || m.hints.length !== 7 || m.hints.some(h => !h)) er.push('servono 7 suggerimenti (uno per passo)'); if (![0, 1, 2, 3, 4, 5].includes(m.level)) er.push('livello'); return { ok: !er.length, errors: er }; };

  const L = s => M.S(s).missions;
  S.find = (s, iid) => L(s).find(x => x.iid === iid);
  S.start = (s, mid, mode) => {
    if (!S.byId(mid) || !S.MODES[mode]) throw new Error('missione/modalità sconosciuta');
    const inst = { iid: Date.now().toString(36) + L(s).length, mid, mode, started: U.today(), steps: {}, hints: 0, guess: null, p: null, planB: '', status: 'active', journal: null, obs: null, retro: null, checks: {} };
    L(s).push(inst); return inst;
  };
  S.saveStep = (inst, n, text) => { inst.steps[n] = String(text || '').trim(); return inst; };
  S.complete = inst => S.PROTOCOL.every(p => (inst.steps[p.n] || '').length >= 8);
  S.guessOk = inst => !inst.guess ? null : inst.guess === S.byId(inst.mid).model;
  /* decisione: riusa il diario esistente (stessa struttura di T.jAdd), nessuna duplicazione */
  S.decide = (s, inst, o) => {
    if (inst.status !== 'active') return { ok: false, err: 'già decisa' };
    if (!S.complete(inst)) return { ok: false, err: 'completa tutti e 7 i passi' };
    const p = +o.p; if (!(p >= 1 && p <= 99)) return { ok: false, err: 'stima di successo fra 1 e 99%' };
    if (!o.planB || o.planB.trim().length < 8) return { ok: false, err: 'scrivi un piano B' };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(o.check || '')) return { ok: false, err: 'indica la data di verifica (AAAA-MM-GG)' };
    const m = S.byId(inst.mid), e = T.jAdd(s, { sit: m.context, goal: inst.steps[1], opts: inst.steps[4], hyp: inst.steps[2] + ' | ' + inst.steps[3], p, choice: o.choice || inst.steps[6], why: inst.steps[5], check: o.check });
    inst.p = p; inst.planB = o.planB.trim(); inst.status = 'decided'; inst.decided = U.today(); inst.journal = e.id; inst.check = o.check; return { ok: true, entry: e };
  };
  /* esito osservato: la classe di evidenza richiede un minimo di dettagli, mai verificata automaticamente */
  S.observe = (s, inst, o) => {
    if (inst.status !== 'decided') return { ok: false, err: 'registra prima la decisione' };
    if (!['ok', 'partial', 'fail'].includes(o.result)) return { ok: false, err: 'esito non valido' };
    if (!S.CLASSES[o.cls]) return { ok: false, err: 'classe di evidenza non valida' };
    if (!o.observed || o.observed.trim().length < 10) return { ok: false, err: 'descrivi che cosa hai osservato' };
    if (o.cls === 'doc' && (!o.proof || o.proof.trim().length < 30)) return { ok: false, err: 'per «documentato» indica date, fatti o numeri (almeno 30 caratteri)' };
    if (o.cls === 'ext' && (!o.source || o.source.trim().length < 3)) return { ok: false, err: 'per «verifica esterna» indica chi o che cosa l’ha verificato' };
    const ok = o.result === 'ok';
    inst.obs = { d: U.today(), result: o.result, observed: o.observed.trim(), cls: o.cls, proof: (o.proof || '').trim(), source: (o.source || '').trim() }; inst.status = 'observed';
    const kind = o.cls === 'ext' ? 'external' : o.cls === 'sim' ? 'guided' : 'auto', help = inst.mode !== 'auto';
    M.record(s, 'application', inst.mid, kind, ok, { help, conf: inst.p });
    M.record(s, 'decision', 'mis:' + inst.mid, kind, o.result !== 'fail', { help });
    return { ok: true };
  };
  S.retrospect = (s, inst, o) => {
    if (inst.status !== 'observed') return { ok: false, err: 'registra prima l’esito' };
    if (!o.learned || o.learned.trim().length < 10) return { ok: false, err: 'scrivi che cosa hai imparato' };
    inst.retro = { learned: o.learned.trim(), principle: (o.principle || '').trim(), d: U.today() }; inst.status = 'closed';
    T.jClose(s, inst.journal, inst.obs.observed, inst.retro.learned); return { ok: true };
  };
  /* verifiche differite: solo per missioni con esito osservato; contano da quella data */
  const dayN = d => Math.round(Date.parse(d + 'T00:00:00Z') / 864e5);
  S.due = (s, today) => { today = today || U.today(); const out = []; L(s).filter(i => i.obs).forEach(i => T.CHECKS.forEach(c => { if (!i.checks[c] && dayN(today) - dayN(i.obs.d) >= c) out.push({ iid: i.iid, mid: i.mid, check: c }); })); return out; };
  S.check = (s, inst, c, result, note) => { if (!T.CHECKS.includes(c) || inst.checks[c] || !inst.obs) return { ok: false }; inst.checks[c] = { d: U.today(), result, note: String(note || '').trim() }; M.record(s, 'application', inst.mid, 'delayed', result === 'ok', { check: c }); return { ok: true }; };
  S.brier = s => { const o = L(s).filter(i => i.obs && i.p != null); if (!o.length) return null; return { n: o.length, brier: +(o.reduce((a, i) => a + Math.pow(i.p / 100 - (i.obs.result === 'ok' ? 1 : i.obs.result === 'partial' ? 0.5 : 0), 2), 0) / o.length).toFixed(3) }; };
  S.stats = s => {
    const all = L(s), obs = all.filter(i => i.obs), by = {}; Object.keys(S.CLASSES).forEach(k => { by[k] = 0; }); obs.forEach(i => { by[i.obs.cls]++; });
    const real = obs.filter(i => i.obs.cls === 'doc' || i.obs.cls === 'ext'), areas = new Set(real.map(i => S.byId(i.mid).area)), delayedOk = all.reduce((a, i) => a + Object.values(i.checks).filter(c => c.result === 'ok').length, 0);
    return { started: all.length, observed: obs.length, by, real: real.length, areas: areas.size, delayedOk, auto: obs.filter(i => i.mode === 'auto' && S.guessOk(i)).length, brier: S.brier(s) };
  };
  /* livello di transfer derivato SOLO dalle evidenze (mai dall'autovalutazione) */
  S.level = s => {
    const st = S.stats(s); let lv = 0, next = 'Completa una missione guidata (L1).';
    if (st.observed >= 1) { lv = 1; next = 'Completa 2 missioni con pochi suggerimenti o in autonomia (L2).'; }
    if (L(s).filter(i => i.obs && i.mode !== 'guided').length >= 2) { lv = 2; next = 'Individua il modello giusto da solo in 2 missioni autonome (L3).'; }
    if (st.auto >= 2) { lv = 3; next = 'Ottieni 3 risultati documentati o verificati esternamente (L4).'; }
    if (st.real >= 3) { lv = 4; next = 'Ottieni 6 risultati documentati/esterni in almeno 3 aree, con 2 verifiche differite riuscite (L5).'; }
    if (st.real >= 6 && st.areas >= 3 && st.delayedOk >= 2) { lv = 5; next = 'Mantieni l’applicazione nel tempo: L5 non è una prova di competenza universale.'; }
    return { level: lv, next, st };
  };
  M.registerLab({ id: 'strategos', title: 'STRATEGOS · missioni reali e diario decisionale', view: 'sma-strategos', desc: 'Protocollo a 7 passi su situazioni vere, con esito osservato, retrospettiva e verifiche a 7/30/90 giorni.', ready: true });

  /* ---- interfaccia ---- */
  const ta = (id, v, ph) => '<textarea id="' + id + '" rows="3" style="width:100%" placeholder="' + E(ph || '') + '">' + E(v || '') + '</textarea>';
  V['sma-strategos'] = () => {
    const s = A.state, lv = S.level(s), st = lv.st, active = L(s).filter(i => i.status !== 'closed'), due = S.due(s);
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🛰 STRATEGOS</h1><p class="small mute">Applica il metodo a situazioni vere e registra che cosa succede. Distinguiamo sempre: <b>simulato</b>, <b>autodichiarato</b>, <b>documentato</b> (con fatti e date) e <b>verifica esterna</b>. L’app non conferma da sola nessuna abilità reale.</p>';
    h += '<div class="card glow"><h2 style="margin:0">Livello di transfer: L' + lv.level + '</h2><p class="small">' + st.started + ' avviate · ' + st.observed + ' con esito · documentate/esterne ' + st.real + ' (' + st.areas + ' aree) · verifiche differite riuscite ' + st.delayedOk + (st.brier ? ' · Brier previsioni ' + st.brier.brier + ' su ' + st.brier.n : '') + '</p><p class="small mute">Prossimo passo: ' + E(lv.next) + '</p></div>';
    if (due.length) h += '<div class="card"><h3>Verifiche differite in scadenza</h3><div class="list">' + due.map(d => '<button class="item" data-act="smaMisOpen" data-i="' + E(d.iid) + '"><span class="tx"><b>' + E(S.byId(d.mid).title) + '</b><span>Verifica a ' + d.check + ' giorni</span></span></button>').join('') + '</div></div>';
    if (active.length) h += '<div class="card"><h3>In corso</h3><div class="list">' + active.map(i => '<button class="item" data-act="smaMisOpen" data-i="' + E(i.iid) + '"><span class="tx"><b>' + E(S.byId(i.mid).title) + '</b><span>' + ({ active: 'da completare', decided: 'decisa: attende l’esito', observed: 'esito registrato: manca la retrospettiva' })[i.status] + '</span></span></button>').join('') + '</div></div>';
    h += '<div class="card"><h3>Il protocollo</h3><ol class="small">' + S.PROTOCOL.map(p => '<li><b>' + E(p.t) + '</b> — ' + E(p.q) + '</li>').join('') + '</ol></div>';
    h += '<div class="card"><h3>Missioni disponibili (' + S.missions.length + ')</h3><div class="list">' + S.missions.map(m => '<div class="item"><span class="tx"><b>' + E(m.title) + '</b><span>' + E(S.AREAS[m.area]) + ' · L' + m.level + ' · ' + E(m.goal) + '</span></span><span class="row" style="gap:4px">' + Object.keys(S.MODES).map(k => '<button class="btn sm ghost" data-act="smaMisStart" data-m="' + E(m.id) + '" data-mode="' + k + '">' + ({ guided: 'Guidata', limited: 'Pochi hint', auto: 'Autonoma' })[k] + '</button>').join('') + '</span></div>').join('') + '</div></div>';
    return h;
  };
  V['sma-mission'] = p => {
    const s = A.state, inst = S.find(s, p.i); if (!inst) return '<p>Missione non trovata.</p>'; const m = S.byId(inst.mid);
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(m.title) + '</h1><p class="small mute">' + E(S.AREAS[m.area]) + ' · modalità: ' + E(S.MODES[inst.mode]) + '</p><div class="card"><p>' + E(m.context) + '</p><p class="small"><b>Obiettivo suggerito:</b> ' + E(m.goal) + '<br><b>Che cosa osservare per l’esito:</b> ' + E(m.metric) + '</p>';
    if (inst.mode === 'guided') h += '<p class="small good">Modello suggerito: ' + E(S.MODELS[m.model]) + '</p>';
    else if (inst.mode === 'auto' && inst.status === 'active') h += '<p class="small">Quale modello applicheresti? ' + Object.keys(S.MODELS).map(k => '<button class="btn sm' + (inst.guess === k ? '' : ' ghost') + '" data-act="smaMisGuess" data-i="' + E(inst.iid) + '" data-k="' + k + '">' + E(S.MODELS[k]) + '</button>').join(' ') + '</p>' + (inst.guess ? '<p class="small mute">Scelta registrata. ' + (S.guessOk(inst) ? 'È il modello previsto per questa missione.' : 'Il modello previsto era un altro: ' + E(S.MODELS[m.model]) + '. Puoi comunque proseguire.') + '</p>' : '');
    h += '</div>';
    if (inst.status === 'active') {
      h += '<div class="card"><h3>I sette passi</h3>' + S.PROTOCOL.map(p => '<p class="small" style="margin:10px 0 2px"><b>' + p.n + '. ' + E(p.t) + '</b><br><span class="mute">' + E(p.q) + '</span>' + (inst.mode === 'guided' ? '<br><span class="good">Suggerimento: ' + E(m.hints[p.n - 1]) + '</span>' : inst.mode === 'limited' ? ' <button class="btn sm ghost" data-act="smaMisHint" data-i="' + E(inst.iid) + '" data-n="' + p.n + '">Mostra suggerimento</button><span id="sma-hint-' + p.n + '" class="good"></span>' : '') + '</p>' + ta('sma-st-' + p.n, inst.steps[p.n])).join('') + '<button class="btn alt" data-act="smaMisSave" data-i="' + E(inst.iid) + '">Salva i passi</button></div>' +
        '<div class="card"><h3>Decisione</h3><p class="small">Stima di riuscita (%) <input id="sma-p" type="number" min="1" max="99" value="' + (inst.p || '') + '" style="width:80px"> · Verifica il <input id="sma-chk" type="date" value="' + E(inst.check || '') + '"></p>' + ta('sma-planb', inst.planB, 'Piano B e segnale per cambiare') + '<button class="btn" data-act="smaMisDecide" data-i="' + E(inst.iid) + '">Registra la decisione (entra nel Diario)</button></div>';
    } else {
      h += '<div class="card"><h3>La tua decisione</h3><p class="small">Stima di riuscita: <b>' + inst.p + '%</b> · Piano B: ' + E(inst.planB) + '</p></div>';
      if (inst.status === 'decided') h += '<div class="card"><h3>Esito osservato</h3><div class="row" style="gap:6px">' + [['ok', 'Riuscita'], ['partial', 'Parziale'], ['fail', 'Non riuscita']].map(r => '<label class="small"><input type="radio" name="sma-res" value="' + r[0] + '"> ' + r[1] + '</label>').join(' ') + '</div>' + ta('sma-obs', '', 'Che cosa è successo, concretamente?') +
        '<p class="small">Classe di evidenza: <select id="sma-cls">' + Object.keys(S.CLASSES).map(k => '<option value="' + k + '">' + E(S.CLASSES[k]) + '</option>').join('') + '</select></p>' + ta('sma-proof', '', 'Per «documentato»: date, fatti, numeri') + '<input id="sma-src" placeholder="Per «verifica esterna»: chi/che cosa l’ha verificato" style="width:100%"><button class="btn" style="margin-top:8px" data-act="smaMisObserve" data-i="' + E(inst.iid) + '">Registra l’esito</button></div>';
      if (inst.obs) h += '<div class="card"><h3>Esito</h3><p class="small">' + ({ ok: 'Riuscita', partial: 'Parziale', fail: 'Non riuscita' })[inst.obs.result] + ' · <span class="tag">' + E(S.CLASSES[inst.obs.cls]) + '</span><br>' + E(inst.obs.observed) + '</p></div>';
      if (inst.status === 'observed') h += '<div class="card"><h3>Retrospettiva</h3>' + ta('sma-learn', '', 'Che cosa hai imparato? Che cosa cambieresti?') + '<input id="sma-prin" placeholder="Principio appreso (una frase)" style="width:100%"><button class="btn" style="margin-top:8px" data-act="smaMisRetro" data-i="' + E(inst.iid) + '">Chiudi la missione</button></div>';
      const dueHere = S.due(s).filter(d => d.iid === inst.iid);
      if (dueHere.length) h += '<div class="card"><h3>Verifica differita</h3>' + dueHere.map(d => '<p class="small">A ' + d.check + ' giorni: il risultato regge ancora? <button class="btn sm" data-act="smaMisCheck" data-i="' + E(inst.iid) + '" data-c="' + d.check + '" data-r="ok">Sì</button> <button class="btn sm ghost" data-act="smaMisCheck" data-i="' + E(inst.iid) + '" data-c="' + d.check + '" data-r="fail">No</button></p>').join('') + '</div>';
      if (inst.retro) h += '<div class="card"><h3>Che cosa hai imparato</h3><p class="small">' + E(inst.retro.learned) + (inst.retro.principle ? '<br><b>Principio:</b> ' + E(inst.retro.principle) : '') + '</p></div>';
    }
    return h;
  };
  const val = id => (document.getElementById(id) || {}).value || '';
  const saveSteps = inst => S.PROTOCOL.forEach(p => { const el = document.getElementById('sma-st-' + p.n); if (el) S.saveStep(inst, p.n, el.value); });
  const act = (fn) => el => { const inst = S.find(A.state, el.dataset.i); if (inst) fn(inst, el); };
  X.smaMisStart = el => { const inst = S.start(A.state, el.dataset.m, el.dataset.mode); A.save(); A.go('sma-mission', { i: inst.iid }); };
  X.smaMisOpen = el => { A.go('sma-mission', { i: el.dataset.i }); };
  X.smaMisGuess = act((inst, el) => { inst.guess = el.dataset.k; A.save(); A.render(); });
  X.smaMisHint = act((inst, el) => { const m = S.byId(inst.mid), n = +el.dataset.n, sp = document.getElementById('sma-hint-' + n); if (sp && !sp.textContent) { sp.textContent = ' ' + m.hints[n - 1]; inst.hints++; A.save(); } });
  X.smaMisSave = act(inst => { saveSteps(inst); A.save(); A.toast('Passi salvati'); });
  X.smaMisDecide = act(inst => { saveSteps(inst); const r = S.decide(A.state, inst, { p: val('sma-p'), check: val('sma-chk'), planB: val('sma-planb') }); if (!r.ok) { A.toast(r.err); A.save(); return; } A.save(); A.render(); });
  X.smaMisObserve = act(inst => { const res = (document.querySelector('input[name="sma-res"]:checked') || {}).value; const r = S.observe(A.state, inst, { result: res, observed: val('sma-obs'), cls: val('sma-cls'), proof: val('sma-proof'), source: val('sma-src') }); if (!r.ok) { A.toast(r.err); return; } A.save(); A.render(); });
  X.smaMisRetro = act(inst => { const r = S.retrospect(A.state, inst, { learned: val('sma-learn'), principle: val('sma-prin') }); if (!r.ok) { A.toast(r.err); return; } A.save(); A.render(); });
  X.smaMisCheck = act((inst, el) => { S.check(A.state, inst, +el.dataset.c, el.dataset.r, ''); A.save(); A.render(); });
})(window.ST = window.ST || {});
