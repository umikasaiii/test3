/* SkillTree — simulatore di strategia e pianificazione: scenari a turni con risorse, vincoli e imprevisti.
   Ogni scenario è un albero «decisione → esito probabilistico»: il motore calcola per ogni scelta il VALORE ATTESO
   della politica ottimale (expectimax) e confronta le scelte dell'utente, così il giudizio riguarda il PROCESSO
   decisionale (rimpianto per decisione) e non solo l'esito fortunato o sfortunato. Gli scenari sono inventati. */
(function (ST) {
  'use strict';
  const U = ST.util, SIM = ST.sim = {};
  SIM.templates = [];                 // registrati dai file di contenuto: SIM.templates.push({...})
  SIM.register = t => { SIM.templates.push(t); return t; };
  const clampVar = (def, v) => U.clamp(v, def.min != null ? def.min : -1e9, def.max != null ? def.max : 1e9);

  /* ---- istanza di scenario ---- */
  /* tpl: { id, title, icon, intro, vars:{k:{label,start,min,max,unit,tight?}}, weights:{k:w}, penalties:[{k,lt|gt,pen,msg}], cards:[{id,lv?,text,choices:[{label,principle?,hint?,out:[{p,fx,text}]}]}], turns:n, build?(level,rng) } */
  SIM.make = (tplId, level, rng) => {
    rng = rng || U.rand; const tpl = SIM.templates.find(t => t.id === tplId); if (!tpl) throw new Error('scenario sconosciuto ' + tplId);
    const lv = U.clamp(Math.round(level), 1, 10);
    const cards = tpl.build ? tpl.build(lv, rng) : U.sample(tpl.cards.filter(c => (c.lv || 1) <= lv), Math.min(tpl.turns || 5, tpl.cards.filter(c => (c.lv || 1) <= lv).length), rng);
    const vars = {}; Object.keys(tpl.vars).forEach(k => { const d = tpl.vars[k]; vars[k] = d.tight ? Math.round(d.start * (1.15 - 0.06 * lv)) : d.start; });
    return { tpl: tpl.id, title: tpl.title, icon: tpl.icon, intro: tpl.intro, defs: tpl.vars, weights: tpl.weights || {}, utilFn: tpl.utility, utilText: tpl.utilText || '', penalties: tpl.penalties || [], cards, vars0: vars, level: lv };
  };
  SIM.utility = (inst, vars) => { if (inst.utilFn) return inst.utilFn(vars); let u = 0; Object.keys(inst.weights).forEach(k => { u += inst.weights[k] * vars[k]; }); inst.penalties.forEach(p => { if ((p.lt != null && vars[p.k] < p.lt) || (p.gt != null && vars[p.k] > p.gt)) u -= p.pen; }); return u; };
  const applyFx = (inst, vars, fx) => { if (typeof fx === 'function') fx = fx(vars); const v = Object.assign({}, vars); Object.keys(fx || {}).forEach(k => { v[k] = clampVar(inst.defs[k], v[k] + fx[k]); }); return v; };
  SIM.start = inst => ({ i: 0, vars: Object.assign({}, inst.vars0), log: [] });
  SIM.done = (inst, st) => st.i >= inst.cards.length;
  SIM.card = (inst, st) => inst.cards[st.i];
  /* applica la scelta ci: pesca un esito (o usa quello indicato per i test) */
  SIM.apply = (inst, st, ci, rng, forceOut) => {
    const card = inst.cards[st.i], ch = card.choices[ci]; rng = rng || U.rand; let x = rng(), oi = 0;
    if (forceOut != null) oi = forceOut; else { let acc = 0; for (let k = 0; k < ch.out.length; k++) { acc += ch.out[k].p; if (x < acc || k === ch.out.length - 1) { oi = k; break; } } }
    const out = ch.out[oi], vars = applyFx(inst, st.vars, out.fx);
    return { i: st.i + 1, vars, log: st.log.concat({ card: card.id, choice: ci, out: oi, before: st.vars, after: vars, text: out.text || '' }), outcome: out };
  };
  /* valore atteso della politica ottimale da (i, vars) in poi */
  const key = (i, vars) => i + '|' + Object.keys(vars).map(k => Math.round(vars[k] * 1000)).join(',');
  SIM.value = (inst, i, vars) => { if (i >= inst.cards.length) return SIM.utility(inst, vars); const m = inst._mv || (inst._mv = new Map()), kk = key(i, vars); if (m.has(kk)) return m.get(kk); let best = -Infinity; inst.cards[i].choices.forEach(ch => { const ev = ch.out.reduce((s, o) => s + o.p * SIM.value(inst, i + 1, applyFx(inst, vars, o.fx)), 0); if (ev > best) best = ev; }); m.set(kk, best); return best; };
  SIM.choiceValues = (inst, i, vars) => inst.cards[i].choices.map(ch => ch.out.reduce((s, o) => s + o.p * SIM.value(inst, i + 1, applyFx(inst, vars, o.fx)), 0));
  /* scala per normalizzare il rimpianto: differenza fra politica migliore e peggiore (expectimin) dall'inizio */
  SIM.worst = (inst, i, vars) => { if (i >= inst.cards.length) return SIM.utility(inst, vars); const m = inst._mw || (inst._mw = new Map()), kk = key(i, vars); if (m.has(kk)) return m.get(kk); let w = Infinity; inst.cards[i].choices.forEach(ch => { const ev = ch.out.reduce((s, o) => s + o.p * SIM.worst(inst, i + 1, applyFx(inst, vars, o.fx)), 0); if (ev < w) w = ev; }); m.set(kk, w); return w; };
  /* debrief: per ogni decisione, valori attesi delle scelte e rimpianto di quella fatta */
  SIM.debrief = (inst, st) => {
    const rows = []; let regret = 0;
    st.log.forEach((l, k) => { const vals = SIM.choiceValues(inst, k, l.before), best = Math.max(...vals), r = best - vals[l.choice]; regret += r; rows.push({ card: inst.cards[k], chosen: l.choice, best: vals.indexOf(best), vals, regret: r, out: l.out, text: l.text }); });
    const top = SIM.value(inst, 0, inst.vars0), bottom = SIM.worst(inst, 0, inst.vars0), range = Math.max(1e-9, top - bottom), final = SIM.utility(inst, st.vars);
    return { rows, regret, quality: U.clamp(1 - regret / range, 0, 1), final, top, bottom, range, luck: final - (top - regret) };
  };
  SIM.autoplay = (inst, policy, rng) => { let st = SIM.start(inst); while (!SIM.done(inst, st)) { const vals = SIM.choiceValues(inst, st.i, st.vars); let ci = policy === 'best' ? vals.indexOf(Math.max(...vals)) : policy === 'worst' ? vals.indexOf(Math.min(...vals)) : Math.floor((rng || U.rand)() * vals.length); st = SIM.apply(inst, st, ci, rng); } return st; };
  SIM.fmtVar = (inst, k, v) => { const d = inst.defs[k]; return Math.round(v * 10) / 10 + (d.unit ? ' ' + d.unit : ''); };
})(window.ST = window.ST || {});
