/* vNext M7c — Formula 1 Strategy Lab. Modello di gara SINTETICO e dichiarato (non dati reali, non una simulazione ufficiale): tempo sul giro =
   base + effetto carburante + differenza di mescola + degrado (lineare + «crollo» oltre un'età) ± condizioni. Tutte le ipotesi sono mostrate
   all'utente; il laboratorio distingue dati reali (nessuno), storici (nessuno) e sintetici (tutti). L'ottimo di ogni scenario è calcolato
   per forza bruta sul modello stesso e serve a giudicare il processo; non dice che cosa farebbe un team vero. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const F = M.f1lab = { scenarios: [] };
  F.add = s => { F.scenarios.push(s); return s; };
  F.byId = id => F.scenarios.find(s => s.id === id);
  F.DISCLAIMER = 'Modello didattico con dati SINTETICI e ipotesi dichiarate: nessun dato reale o storico. Serve a ragionare sulla strategia, non a prevedere una gara vera.';
  F.TYRES = { S: { name: 'Morbida', off: -0.7, d1: 0.10, cliff: 12, d2: 0.03 }, M: { name: 'Media', off: 0, d1: 0.05, cliff: 25, d2: 0.02 }, H: { name: 'Dura', off: 0.5, d1: 0.03, cliff: 38, d2: 0.015 }, I: { name: 'Intermedia', off: 4.5, d1: 0.04, cliff: 30, d2: 0.02, wet: true, rain: 0 }, W: { name: 'Pioggia', off: 7, d1: 0.03, cliff: 40, d2: 0.01, wet: true, rain: 1 } };
  /* tempo del giro: age = giri già fatti con la gomma; lap da 1. In pioggia la pista costa +6 s a tutti e le gomme asciutte altri +12 s; la gomma da bagnato sull'asciutto perde in pace (campo off). Con Safety Car il tempo è fisso (base × 1,38). */
  F.lapTime = (sc, tyre, age, lap, cond) => {
    cond = cond || {}; const t = F.TYRES[tyre]; if (cond.sc) return sc.base * 1.38;
    let v = sc.base + sc.fuel * (sc.laps - lap) + t.off * (cond.rain && t.wet ? 0 : 1) + (t.d1 * (sc.degMul || 1)) * age + t.d2 * Math.pow(Math.max(0, age - t.cliff), 2);
    if (cond.rain) v += 6 + (t.wet ? t.rain : 12);
    return v;
  };
  const isSC = (sc, lap) => (sc.sc || []).some(e => lap >= e.lap && lap < e.lap + e.len);
  const isRain = (sc, lap) => sc.rain != null && lap >= sc.rain;
  /* piano: [{lap, tyre}] con start = tyre iniziale e lista di soste {lap, tyre} (sosta al termine del giro `lap`) */
  F.simulate = (sc, plan) => {
    let t = 0, tyre = plan.start, age = 0; const laps = [], stops = (plan.stops || []).slice().sort((a, b) => a.lap - b.lap);
    for (let lap = 1; lap <= sc.laps; lap++) {
      const c = { sc: isSC(sc, lap), rain: isRain(sc, lap) }; let lt = F.lapTime(sc, tyre, age, lap, c); age += c.sc ? 0.5 : 1;
      const st = stops.find(s => s.lap === lap); if (st && lap < sc.laps) { const loss = sc.pit * (isSC(sc, lap + 1) || c.sc ? sc.scPit : 1); lt += loss; tyre = st.tyre; age = 0; }
      t += lt; laps.push({ lap, tyre, time: lt, sc: c.sc, rain: c.rain });
    }
    return { total: t, laps };
  };
  F.legal = (sc, plan) => { const used = new Set([plan.start].concat((plan.stops || []).map(x => x.tyre))), wet = [...used].some(x => F.TYRES[x].wet), dry = [...used].filter(x => !F.TYRES[x].wet); return wet || dry.length >= 2; };
  F.best = sc => {
    const comps = (sc.allowed || ['S', 'M', 'H']), pit = [], res = { total: Infinity, plan: null }; const L = sc.laps;
    const upd = plan => { if (!F.legal(sc, plan)) return; const r = F.simulate(sc, plan).total; if (r < res.total) { res.total = r; res.plan = plan; } };
    comps.forEach(a => { upd({ start: a, stops: [] }); for (let p = 6; p <= L - 6; p++) comps.forEach(b => upd({ start: a, stops: [{ lap: p, tyre: b }] })); });
    if (sc.twoStop !== false) comps.forEach(a => comps.forEach(b => comps.forEach(c => { for (let p = 6; p <= L - 14; p += 2) for (let q = p + 8; q <= L - 6; q += 2) upd({ start: a, stops: [{ lap: p, tyre: b }, { lap: q, tyre: c }] }); })));
    return res;
  };
  F.score = (sc, plan) => { const mine = F.simulate(sc, plan).total, best = F.best(sc), ok = F.legal(sc, plan); return { mine, best: best.total, plan: best.plan, gap: mine - best.total, legal: ok, eff: best.total / mine }; };
  /* decisione alla Safety Car: restare fuori o fermarsi, con gomma e età correnti */
  F.scDecision = (sc, st, choice) => { const base = { start: st.tyre, age0: st.age }; const cur = F.tyreFromState(sc, st, choice); return cur; };
  F.tyreFromState = (sc, st, choice) => { // simula da lap = st.lap+1 fino alla fine, con eventuale sosta immediata
    let t = 0, tyre = st.tyre, age = st.age; for (let lap = st.lap + 1; lap <= sc.laps; lap++) { const c = { sc: isSC(sc, lap), rain: isRain(sc, lap) }; let lt = F.lapTime(sc, tyre, age, lap, c); age += c.sc ? 0.5 : 1; if (lap === st.lap + 1 && choice !== 'stay') { lt += sc.pit * sc.scPit; tyre = choice; age = 0; } t += lt; } return t;
  };
  F.scBest = (sc, st) => { const opts = ['stay'].concat(Object.keys(F.TYRES).filter(k => (sc.allowed || ['S', 'M', 'H']).includes(k))), r = opts.map(o => ({ o, t: F.tyreFromState(sc, st, o) })).sort((a, b) => a.t - b.t); return r; };
  /* duello: tu parti `gap` secondi dietro il rivale, che ferma al giro fisso rivalPit; tu scegli il tuo giro di sosta (stesse gomme M→H) */
  F.duel = (sc, myPit) => { const mk = p => ({ start: sc.duelStart || 'M', stops: [{ lap: p, tyre: sc.duelNext || 'H' }] }), me = F.simulate(sc, mk(myPit)).total + sc.gap, rv = F.simulate(sc, mk(sc.rivalPit)).total; return { margin: rv - me, me, rv }; };
  F.duelBest = sc => { let best = null; for (let p = 5; p <= sc.laps - 5; p++) { const r = F.duel(sc, p); if (!best || r.margin > best.margin) best = Object.assign({ pit: p }, r); } return best; };
  F.validate = s => { const er = []; if (!s.id || !s.title || !s.intro || !(s.laps > 10) || !(s.base > 60) || !(s.pit > 10) || !s.explain) er.push('campi'); if (s.kind === 'sc' && !(s.state && s.sc && s.sc.length)) er.push('scenario SC senza stato/eventi'); if (s.kind === 'plan' && F.best(s).total === Infinity) er.push('nessun piano legale'); if (s.kind === 'duel' && !(s.gap >= 0 && s.rivalPit > 5)) er.push('duello senza gap/giro del rivale'); return { ok: !er.length, errors: er }; };
  M.registerLab({ id: 'f1lab', title: 'Formula 1 Strategy Lab', view: 'sma-f1', desc: 'Strategie di sosta, mescole, degrado, Safety Car, pioggia e undercut su un modello sintetico dichiarato.', ready: true });
  const g = {}; const stat = () => ((M.S(A.state).tech = M.S(A.state).tech || {}).f1 = (M.S(A.state).tech.f1 || {}));
  V['sma-f1'] = () => '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🏎 Formula 1 Strategy Lab</h1><div class="list">' + F.scenarios.map(s => '<button class="item" data-act="smaF1Open" data-id="' + E(s.id) + '"><span class="tx"><b>' + E(s.title) + '</b><span>' + E(s.level) + ' · ' + s.laps + ' giri · ' + ({ sc: 'decisione alla Safety Car', duel: 'undercut/overcut', plan: 'piano di gara' })[s.kind] + (stat()[s.id] ? ' · miglior risultato ' + Math.round(100 * stat()[s.id].bestEff) + '%' : '') + '</span></span></button>').join('') + '</div>';
  const spark = laps => { const mn = Math.min.apply(null, laps.map(l => l.time)), mx = Math.max.apply(null, laps.map(l => l.time)), W = 300, H = 60; return '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:420px;background:#0d1226;border-radius:8px" role="img" aria-label="Tempi sul giro sintetici"><polyline fill="none" stroke="#7aa2ff" stroke-width="1.5" points="' + laps.map((l, i) => (i * W / (laps.length - 1)).toFixed(1) + ',' + (H - 4 - (l.time - mn) / Math.max(1e-9, mx - mn) * (H - 8)).toFixed(1)).join(' ') + '"/></svg>'; };
  V['sma-f1-play'] = p => {
    const s = F.byId(p.id), x = g[s.id] || (g[s.id] = s.kind === 'plan' ? { start: 'M', stops: [], res: null } : s.kind === 'duel' ? { pit: Math.round(s.laps / 2), res: null } : { choice: null, res: null });
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>' + E(s.title) + '</h1><div class="card"><p>' + E(s.intro) + '</p><p class="small mute">Ipotesi: tempo base ' + s.base + ' s · carburante ' + s.fuel + ' s/giro · sosta ' + s.pit + ' s' + (s.sc && s.sc.length ? ' · Safety Car ai giri ' + s.sc.map(e => e.lap + '–' + (e.lap + e.len - 1)).join(', ') + ' (sosta ×' + s.scPit + ')' : '') + (s.rain != null ? ' · pioggia dal giro ' + s.rain : '') + '</p><p class="small mute">' + Object.keys(F.TYRES).filter(k => (s.allowed || ['S', 'M', 'H']).includes(k)).map(k => F.TYRES[k].name + ' (' + (F.TYRES[k].off >= 0 ? '+' : '') + F.TYRES[k].off + ' s, degrado ' + F.TYRES[k].d1 + ' s/giro, crollo dopo ' + F.TYRES[k].cliff + ' giri)').join(' · ') + '</p></div>';
    if (s.kind === 'plan') {
      const comps = s.allowed || ['S', 'M', 'H'];
      h += '<div class="card"><h3>Il tuo piano</h3><p class="small">Gomma di partenza: ' + comps.map(k => '<button class="btn sm' + (x.start === k ? '' : ' ghost') + '" data-act="smaF1Start" data-id="' + s.id + '" data-k="' + k + '">' + F.TYRES[k].name + '</button>').join(' ') + '</p>' + x.stops.map((st, i) => '<p class="small">Sosta ' + (i + 1) + ': giro <input type="number" class="sma-f1-lap" data-i="' + i + '" value="' + st.lap + '" min="2" max="' + (s.laps - 2) + '" style="width:64px"> gomma <select class="sma-f1-tyre" data-i="' + i + '">' + comps.map(k => '<option value="' + k + '"' + (st.tyre === k ? ' selected' : '') + '>' + F.TYRES[k].name + '</option>').join('') + '</select> <button class="btn sm ghost" data-act="smaF1Del" data-id="' + s.id + '" data-i="' + i + '">✕</button></p>').join('') +
        '<button class="btn alt sm" data-act="smaF1Add" data-id="' + s.id + '">+ Aggiungi sosta</button> <button class="btn" data-act="smaF1Run" data-id="' + s.id + '">Simula</button></div>';
      if (x.res) { const r = x.res; h += '<div class="card ' + (r.sc.legal ? 'glow' : '') + '"><h3>' + (r.sc.legal ? 'Tempo totale ' + (r.sim.total / 60).toFixed(2) + ' min' : 'Piano non valido per il regolamento modellato (servono almeno due mescole asciutte diverse)') + '</h3>' + (r.sc.legal ? '<p class="small">Ottimo del modello: ' + (r.sc.best / 60).toFixed(2) + ' min (' + (r.sc.gap >= 0 ? '+' : '') + r.sc.gap.toFixed(1) + ' s per te, efficienza ' + Math.round(100 * r.sc.eff) + '%). Piano ottimo: partenza ' + F.TYRES[r.sc.plan.start].name + (r.sc.plan.stops.length ? ', soste ' + r.sc.plan.stops.map(t => 'giro ' + t.lap + ' ' + F.TYRES[t.tyre].name).join(', ') : ', nessuna sosta') + '.</p>' : '') + spark(r.sim.laps) + '<p class="small mute">Telemetria sintetica: tempi sul giro (alto = più lento).</p><p class="small">' + E(s.explain) + '</p></div>'; }
    } else if (s.kind === 'duel') {
      h += '<div class="card"><h3>La tua sosta</h3><p class="small">Parti ' + s.gap + ' s dietro il rivale, che ferma al giro <b>' + s.rivalPit + '</b> (' + F.TYRES[s.duelStart || 'M'].name + ' → ' + F.TYRES[s.duelNext || 'H'].name + ', come te). In quale giro ti fermi? <input id="sma-duel-lap" type="number" value="' + x.pit + '" min="5" max="' + (s.laps - 5) + '" style="width:70px"> <button class="btn" data-act="smaF1Duel" data-id="' + s.id + '">Simula</button></p></div>';
      if (x.res) { const r = x.res; h += '<div class="card glow"><h3>' + (r.me.margin > 0 ? 'Finisci davanti di ' + r.me.margin.toFixed(1) + ' s' : 'Finisci dietro di ' + (-r.me.margin).toFixed(1) + ' s') + '</h3><p class="small">' + (x.pit < s.rivalPit ? 'Sosta anticipata (undercut)' : x.pit > s.rivalPit ? 'Sosta ritardata (overcut)' : 'Sosta nello stesso giro') + '. La migliore del modello: giro ' + r.best.pit + ' (margine ' + r.best.margin.toFixed(1) + ' s).</p><p class="small">' + E(s.explain) + '</p></div>'; }
    } else {
      const st = s.state; h += '<div class="card"><h3>Situazione</h3><p class="small">Giro ' + st.lap + ' di ' + s.laps + ': Safety Car in pista. Gomma attuale: <b>' + F.TYRES[st.tyre].name + '</b>, età ' + st.age + ' giri.' + (st.note ? ' ' + E(st.note) : '') + '</p><div class="list"><button class="item" data-act="smaF1Sc" data-id="' + s.id + '" data-k="stay"><span class="tx"><b>Resto in pista</b></span></button>' + (s.allowed || ['S', 'M', 'H']).map(k => '<button class="item" data-act="smaF1Sc" data-id="' + s.id + '" data-k="' + k + '"><span class="tx"><b>Mi fermo e monto la ' + F.TYRES[k].name.toLowerCase() + '</b></span></button>').join('') + '</div></div>';
      if (x.res) { const r = x.res; h += '<div class="card glow"><h3>' + (r.rank === 0 ? 'La scelta migliore del modello' : 'La scelta classifica ' + (r.rank + 1) + 'ª su ' + r.table.length) + '</h3><p class="small">' + r.table.map(o => (o.o === 'stay' ? 'Restare' : 'Fermarsi (' + F.TYRES[o.o].name + ')') + ': ' + o.t.toFixed(1) + ' s').join('<br>') + '</p><p class="small">' + E(s.explain) + '</p></div>'; }
    }
    return h;
  };
  ST.after['sma-f1-play'] = el => { const s = F.byId(A.view().p.id), x = s && g[s.id]; if (!x || !x.stops) return; el.querySelectorAll('.sma-f1-lap').forEach(i => i.addEventListener('input', () => { x.stops[+i.dataset.i].lap = +i.value; })); el.querySelectorAll('.sma-f1-tyre').forEach(i => i.addEventListener('change', () => { x.stops[+i.dataset.i].tyre = i.value; })); };
  X.smaF1Open = el => { delete g[el.dataset.id]; A.go('sma-f1-play', { id: el.dataset.id }); };
  X.smaF1Start = el => { g[el.dataset.id].start = el.dataset.k; A.render(); };
  X.smaF1Add = el => { const s = F.byId(el.dataset.id); const al = (s.allowed || ['S', 'M', 'H']).filter(k => !F.TYRES[k].wet); g[s.id].stops.push({ lap: Math.round(s.laps / 2), tyre: al.find(k => k !== g[s.id].start) || al[0] }); A.render(); };
  X.smaF1Del = el => { g[el.dataset.id].stops.splice(+el.dataset.i, 1); A.render(); };
  X.smaF1Run = el => { const s = F.byId(el.dataset.id), x = g[s.id], plan = { start: x.start, stops: x.stops.map(t => ({ lap: +t.lap, tyre: t.tyre })) }; x.res = { sim: F.simulate(s, plan), sc: F.score(s, plan) }; if (x.res.sc.legal) { const S = stat(), e = (S[s.id] = S[s.id] || { tries: 0, bestEff: 0 }); e.tries++; e.bestEff = Math.max(e.bestEff, x.res.sc.eff); ST.act.record(A.state, 'f1lab', { item: s.id + ':plan', ok: x.res.sc.eff >= 0.99, score: x.res.sc.eff }); M.record(A.state, 'planning', 'f1:' + s.id, 'auto', x.res.sc.eff >= 0.99, {}); try { A.xp(x.res.sc.eff >= 0.99 ? 3 : 1, 'sma:f1:' + s.id); } catch (e2) { /* ignora */ } A.save(); } A.render(); };
  X.smaF1Duel = el => { const s = F.byId(el.dataset.id), x = g[s.id], v = parseInt((document.getElementById('sma-duel-lap') || {}).value, 10); if (!(v >= 5 && v <= s.laps - 5)) { A.toast('Giro non valido'); return; } x.pit = v; x.res = { me: F.duel(s, v), best: F.duelBest(s) }; const S = stat(), e = (S[s.id] = S[s.id] || { tries: 0, bestEff: 0 }); e.tries++; const ok = x.res.me.margin >= x.res.best.margin - 0.5; e.bestEff = Math.max(e.bestEff, ok ? 1 : 0.5); ST.act.record(A.state, 'f1lab', { item: s.id + ':duel', ok }); M.record(A.state, 'planning', 'f1:' + s.id, 'auto', ok, {}); A.save(); A.render(); };
  X.smaF1Sc = el => { const s = F.byId(el.dataset.id), x = g[s.id], tb = F.scBest(s, s.state), i = tb.findIndex(o => o.o === el.dataset.k); x.res = { table: tb, rank: i }; const S = stat(), e = (S[s.id] = S[s.id] || { tries: 0, bestEff: 0 }); e.tries++; e.bestEff = Math.max(e.bestEff, tb[0].t / tb[i].t); ST.act.record(A.state, 'f1lab', { item: s.id + ':sc', ok: i === 0, score: tb[0].t / tb[i].t }); M.record(A.state, 'decision', 'f1:' + s.id, 'auto', i === 0, {}); A.save(); A.render(); };
})(window.ST = window.ST || {});
