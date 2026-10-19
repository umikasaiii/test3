/* SkillTree — simulatore di strategia: partite a turni con risorse e imprevisti, debrief per qualità delle decisioni. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, V = ST.views, X = ST.acts, SIM = ST.sim;
  const rec = (s, id) => { s.sim = s.sim || {}; return (s.sim[id] = s.sim[id] || { level: 1, n: 0, best: 0 }); };

  X.startSim = el => {
    const s = A.state, id = el && el.dataset && el.dataset.id, tpl = SIM.templates.find(t => t.id === id) || U.pick(SIM.templates), r = rec(s, tpl.id);
    const inst = SIM.make(tpl.id, r.level); A.ctx = 'general';
    A.act = { kind: 'sim', inst, st: SIM.start(inst), last: null, debrief: null };
    A.go('sim');
  };
  X.startSimRandom = el => { const sj = el && el.dataset && el.dataset.subj || 'str'; X.startSim({ dataset: { id: U.pick(SIM.templates.filter(t => (t.subject || 'str') === sj)).id } }); };
  X['sim-pick'] = el => {
    const a = A.act; if (!a || a.kind !== 'sim' || a.debrief) return; const before = a.st;
    a.st = SIM.apply(a.inst, a.st, +el.dataset.i); a.last = { text: a.st.outcome.text, delta: Object.keys(a.inst.defs).map(k => [k, a.st.vars[k] - before.vars[k]]).filter(x => Math.abs(x[1]) > 1e-9), label: a.inst.cards[before.i].choices[+el.dataset.i].label };
    if (SIM.done(a.inst, a.st)) {
      const d = a.debrief = SIM.debrief(a.inst, a.st), s = A.state, r = rec(s, a.inst.tpl);
      r.n++; r.best = Math.max(r.best, Math.round(d.quality * 100)); r.last = Math.round(d.quality * 100);
      if (d.quality >= 0.85 && r.level < 10) r.level++; else if (d.quality < 0.55 && r.level > 1) r.level--;
      s.simLog = (s.simLog || []).concat({ d: U.today(), tpl: a.inst.tpl, lv: a.inst.level, q: Math.round(d.quality * 100), final: Math.round(d.final) }).slice(-60);
      { const okq = d.quality >= 0.7, tid = a.inst.tpl; ST.act.record(s, 'sim:' + tid, { item: tid, ok: okq, score: d.quality }); ST.act.record(s, 'multimove', { item: tid, ok: okq, score: d.quality }); }
      A.xp(Math.round(d.quality * 20), 'sim'); A.subjectTouch((SIM.templates.find(t => t.id === a.inst.tpl) || {}).subject || 'str'); A.save();
    }
    A.render();
  };
  X['sim-close'] = () => { const a = A.act; A.act = null; if (a && a.debrief) A.blockComplete('practice'); A.back(); };

  const bar = (inst, k, v) => { const d = inst.defs[k], span = (d.max != null && d.min != null && d.max - d.min <= 1000) ? (d.max - d.min) : 0, pc = span ? Math.round(100 * (v - d.min) / span) : null; return '<div class="row" style="margin:3px 0"><span class="small" style="min-width:120px">' + E(d.label) + '</span><b>' + E(SIM.fmtVar(inst, k, v)) + '</b>' + (pc != null ? '<div class="prog" style="flex:1;margin-left:8px"><i style="width:' + U.clamp(pc, 0, 100) + '%"></i></div>' : '') + '</div>'; };
  V.sim = () => {
    const a = A.act; if (!a || a.kind !== 'sim') return '<p>Nessuna simulazione attiva.</p>';
    const inst = a.inst, st = a.st;
    let h = '<div class="row"><button class="btn alt sm" data-act="sim-close">' + (a.debrief ? 'Chiudi' : '✕ Esci') + '</button><span class="sp"></span><span class="mute small">Livello ' + inst.level + '</span></div><h1>' + inst.icon + ' ' + E(inst.title) + '</h1>';
    if (a.debrief) {
      const d = a.debrief, q = Math.round(d.quality * 100);
      h += '<div class="card glow center"><div class="big">' + q + '%</div><p class="mute">qualità delle decisioni (rimpianto atteso totale: ' + d.regret.toFixed(1) + ')</p><p class="small">Punteggio finale <b>' + Math.round(d.final) + '</b> · politica ottimale in media ' + Math.round(d.top) + ' · peggiore ' + Math.round(d.bottom) + '</p></div>' +
        '<div class="card"><h3>Stato finale</h3>' + Object.keys(inst.defs).map(k => bar(inst, k, st.vars[k])).join('') + '</div>' +
        '<h2>Le tue decisioni</h2>' + d.rows.map((r, i) => { const lvl = r.regret / d.range, tag = lvl < 0.005 ? '<span class="tag good">ottima</span>' : lvl < 0.04 ? '<span class="tag acc">accettabile</span>' : '<span class="tag">da rivedere</span>', best = r.card.choices[r.best], mine = r.card.choices[r.chosen];
          return '<div class="card"><div class="mute small">Decisione ' + (i + 1) + ' ' + tag + '</div><p class="small">' + E(r.card.text) + '</p><p><b>Hai scelto:</b> ' + E(mine.label) + '<br><span class="mute small">Esito: ' + E(r.text) + '</span></p>' + (r.chosen !== r.best ? '<p><b>Migliore (valore atteso):</b> ' + E(best.label) + '</p><p class="mute small">Idea chiave: ' + E(best.principle || '—') + ' · differenza attesa ' + r.regret.toFixed(1) + '</p>' : '<p class="mute small">Idea chiave: ' + E(mine.principle || '—') + '</p>') + '</div>'; }).join('') +
        '<p class="mute small">Giudica le decisioni dal processo, non solo dall’esito: una buona scelta può andare male per sfortuna (e viceversa). Qui il «migliore» è la scelta con il valore atteso più alto, calcolato su tutti i seguiti possibili. Lo scenario è inventato e semplificato.</p>' +
        '<div class="row"><button class="btn" data-act="startSim" data-id="' + E(inst.tpl) + '">↻ Nuova partita (stesso scenario, eventi diversi)</button><button class="btn alt" data-act="sim-close">Chiudi</button></div>';
      return h;
    }
    const card = SIM.card(inst, st);
    h += (st.i === 0 ? '<div class="card"><p>' + E(inst.intro) + '</p><p class="mute small">Punteggio: ' + E(inst.utilText || 'somma pesata delle variabili') + '</p></div>' : '') +
      '<div class="card"><h3>Situazione</h3>' + Object.keys(inst.defs).map(k => bar(inst, k, st.vars[k])).join('') + '</div>';
    if (a.last) h += '<div class="card"><div class="mute small">Hai scelto: ' + E(a.last.label) + '</div><p>' + E(a.last.text) + '</p><p class="small">' + a.last.delta.map(x => E(inst.defs[x[0]].label) + ' ' + (x[1] > 0 ? '+' : '') + Math.round(x[1] * 10) / 10).join(' · ') + '</p></div>';
    h += '<div class="card"><div class="mute small">Decisione ' + (st.i + 1) + ' / ' + inst.cards.length + '</div><p><b>' + E(card.text) + '</b></p>' + card.choices.map((ch, i) => '<button class="opt" data-act="sim-pick" data-i="' + i + '">' + E(ch.label) + (ch.hint ? '<br><span class="mute small">' + E(ch.hint) + '</span>' : '') + '</button>').join('') + '</div>';
    return h;
  };

  ST.simHub = (subj) => {
    subj = subj || 'str'; const s = A.state, log = (s.simLog || []).filter(x => ((SIM.templates.find(t => t.id === x.tpl) || {}).subject || 'str') === subj).slice(-8);
    return '<h2>Simulazioni: applica le decisioni in scenari inventati</h2><p class="mute small">Partite a turni con risorse e imprevisti. Dopo l’ultima decisione vedi quanto le tue scelte si avvicinano a quelle a valore atteso massimo (qualità delle decisioni). La difficoltà si adatta a te.</p><div class="list">' +
      SIM.templates.filter(t => (t.subject || 'str') === subj).map(t => { const r = (s.sim || {})[t.id]; return '<button class="item" data-act="startSim" data-id="' + E(t.id) + '"><span class="ic">' + t.icon + '</span><span class="tx"><b>' + E(t.title) + '</b><span>livello ' + (r ? r.level : 1) + (r && r.n ? ' · ' + r.n + ' partite · miglior qualità ' + r.best + '%' : ' · mai giocata') + '</span></span></button>'; }).join('') + '</div>' +
      '<button class="btn alt" data-act="startSimRandom" data-subj="' + subj + '" style="margin-top:8px">🎲 Scenario a sorpresa</button>' + (log.length ? '<p class="small mute">Ultime partite: ' + log.map(x => x.q + '%').join(' · ') + '</p>' : '');
  };
})(window.ST = window.ST || {});
