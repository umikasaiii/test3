/* SkillTree — laboratori facoltativi da 15/20/30/45 minuti: non fanno parte del piano obbligatorio. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts;
  const MINS = [15, 20, 30, 45];
  const mods = () => [ST.sport, ST.f1, ST.moto, ST.cul, ST.strategy].filter(Boolean);
  const owner = t => mods().find(m => m.TYPES && m.TYPES.indexOf(t) >= 0);
  /* categorie realmente eseguibili; le altre sono dichiarate non ancora disponibili */
  const CATS = {
    cog: { t: '🧠 Cognitive Performance', d: 'Sessioni di allenamento mentale adattivo (dominio del giorno più un jolly).', build: (s, n) => { let it = []; for (let i = 0; i < n; i++) it = it.concat(ST.mental.session(s, U.today(), U.rand)); return it; } },
    sport: { t: '🏃 Sport Science', d: 'Laboratori di calcolo di scienze dello sport (carichi, energia, nutrizione, prestazione).', build: (s, n) => { let it = []; for (let i = 0; i < n; i++) it = it.concat(ST.sport.session(s)); return it; } },
    decision: { t: '♟ Strategic Decision Making', d: 'Laboratori di strategia e decisione (teoria dei giochi, valore atteso, ottimizzazione).', build: (s, n) => { let it = []; for (let i = 0; i < n; i++) it = it.concat(ST.strategy.session(s)); return it; } },
    transfer: { t: '🧭 Real-Life Transfer', d: 'Problemi nuovi senza indicazione della materia, con rivelazione del principio.', build: (s, n) => transferItems(s, Math.min(16, Math.round(n * 2))) },
    cross: { t: '🔀 Cross-Disciplinary', d: 'Mix di laboratori di sport, strategia, F1, moto e cultura più problemi di transfer.', build: (s, n) => { let it = []; const src = [ST.sport, ST.strategy, ST.f1, ST.moto, ST.cul]; for (let i = 0; i < n; i++) it = it.concat(src[i % src.length].session(s).slice(0, 9)); return it.concat(transferItems(s, 3)); } }
  };
  const NA = ['English Conversation', 'Japanese Immersion', 'Anime Listening', 'Combat Tactical Recognition'];
  const transferItems = (s, n) => U.shuffle(Object.keys(ST.kg.PRINCIPLES)).concat(U.shuffle(Object.keys(ST.kg.PRINCIPLES))).slice(0, n).map(pr => Object.assign({}, ST.kg.problem(pr, ((s.skills || {})['tr:' + pr] || { hist: [] }).hist.length)));
  const record = s => (it, ok, i, r) => {
    try {
      if (it.principle) { ST.transfer.record(s, 'tr:' + it.principle, 'novel', ok, { ms: r && r.ms }); return; }
      const o = owner(it.mtype), ms = r && r.ms;
      if (o && o.record) o.record(s, it.mtype, ok, ms, it.timed, it.lv);
      else if (ST.mental.TYPES.indexOf(it.mtype) >= 0) ST.mental.record(s, it.mtype, ok ? 1 : 0, ms, it.timed, it.lv);
      A.xp(ok ? (r && r.late ? 1 : 2) : 0, 'optlab:' + it.mtype);
    } catch (e) { /* un errore di registrazione non deve bloccare l'esercizio */ }
  };
  ST.views.optlab = () => {
    const m = A.optMin || 15;
    return '<div class="card glow"><h2 style="margin:0">Laboratori facoltativi</h2><p class="small mute">Non fanno parte delle 3 missioni quotidiane e non penalizzano chi completa solo il piano principale. Durata indicativa: il tempo reale dipende dalle tue risposte.</p>' +
      '<div class="row" style="gap:6px;flex-wrap:wrap">' + MINS.map(x => '<button class="btn' + (x === m ? '' : ' ghost') + '" data-act="optMin" data-m="' + x + '">' + x + ' min</button>').join('') + '</div></div>' +
      '<div class="card">' + Object.keys(CATS).map(k => '<button class="item" data-act="optStart" data-k="' + k + '"><span class="tx"><b>' + CATS[k].t + '</b><span>' + E(CATS[k].d) + '</span></span><span class="tag">' + m + '′</span></button>').join('') +
      '<button class="item" data-act="go" data-view="transfer" data-p=\'{"t":"rwd"}\'><span class="tx"><b>🎯 Decisioni nel mondo reale</b><span>Scenari interattivi (non a tempo).</span></span></button></div>' +
      '<div class="card"><h3>Non ancora disponibili</h3><p class="small mute">' + NA.map(E).join(' · ') + ': nessuna attività reale è stata ancora implementata, quindi non compaiono qui come laboratori eseguibili.</p></div>';
  };
  X.optMin = el => { A.optMin = +el.dataset.m; A.render(); };
  X.optStart = el => {
    const s = A.state, k = el.dataset.k, c = CATS[k], m = A.optMin || 15, n = Math.round(m / 5);
    const items = c.build(s, n); A.ctx = 'general';
    const aid = ({ cog: 'cog', decision: 'decision', sport: 'sportcalc' })[k];
    ST.runner.start({ title: c.t + ' · ' + m + ' min', kind: 'free', items, ctx: 'general', onAnswer: record(s),
      onFinish: res => { if (aid && res && res.length) { const acc = res.filter(x => x.ok).length / res.length; ST.act.record(s, aid, { ok: acc >= 0.6, score: acc }); A.save(); } return ''; } });
  };
})(window.ST = window.ST || {});
