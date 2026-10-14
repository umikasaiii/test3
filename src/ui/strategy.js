/* SkillTree — laboratori di strategia (sessione da 5′, per tipo) e priorità della teoria sulla strategia. */
(function (ST) {
  'use strict';
  const U = ST.util, C = ST.content, A = ST.app, E = U.esc, X = ST.acts, R = ST.runner, SG = ST.strategy;

  /* Scacchiera da FEN (il lato che muove è in basso). */
  ST.boardHtml = fen => {
    const p = ST.chess.parse(fen), flip = p.turn === 'b'; let h = '<div class="board" role="img" aria-label="Scacchiera, tocca a ' + (flip ? 'Nero' : 'Bianco') + '">';
    for (let r = 0; r < 8; r++) for (let f = 0; f < 8; f++) {
      const rank = flip ? r : 7 - r, file = flip ? 7 - f : f, c = p.b[rank * 8 + file], light = (rank + file) % 2 === 1;
      h += '<div class="sq' + (light ? ' l' : '') + '">' + (c !== '.' ? '<span class="' + (c === c.toUpperCase() ? 'w' : 'k') + '">' + ST.chess.PIECE[c] + '</span>' : '') + (f === 0 ? '<i>' + (rank + 1) + '</i>' : '') + (r === 7 ? '<i style="left:auto;right:2px">' + 'abcdefgh'[file] + '</i>' : '') + '</div>';
    }
    return h + '</div>';
  };

  const rec = s => (it, ok, i, r) => { SG.record(s, it.mtype, ok, r && r.ms, it.timed, it.lv); A.xp(ok ? (r && r.late ? 2 : 3) : 0, 'str:' + it.mtype); };
  const summary = (s, res) => { const by = {}; res.forEach(x => { const t = x.item.mtype; by[t] = by[t] || [0, 0]; by[t][1]++; if (x.ok) by[t][0]++; }); return '<p class="mute small">' + Object.keys(by).map(t => E(SG.LABEL[t]) + ' ' + by[t][0] + '/' + by[t][1] + ' · livello ' + SG.level(s, t)).join('<br>') + '</p>'; };
  X.startStrategy = () => { const s = A.state; A.ctx = 'general'; R.start({ title: 'Laboratorio di strategia · 5 min', kind: 'practice', items: SG.session(s), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('str'); A.save(); return summary(s, res); } }); };
  X.startStrategyType = el => { const s = A.state, t = el.dataset.t; A.ctx = 'general'; R.start({ title: SG.LABEL[t], kind: 'free', items: Array.from({ length: 8 }, () => SG.make(t, SG.pickLevel(s, t))), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('str'); A.save(); return summary(s, res); } }); };
  X['st-focus'] = () => { const p = A.state.profile; p.theoryFocus = p.theoryFocus === 'str' ? null : 'str'; A.save(); A.render(); A.toast(p.theoryFocus === 'str' ? 'Priorità alla strategia: 4 giorni su 7' : 'Rotazione equilibrata delle materie'); };

  ST.strategyHub = () => {
    const s = A.state, P = ST.progress, focus = s.profile.theoryFocus === 'str', lessons = C.topicsOf('str').filter(t => !t.pill), read = lessons.filter(t => P.atLeast(P.topicStatus(s, t.id), 'studied')).length, np = SG.puzzles().length;
    return '<div class="card glow"><h3>Laboratori di strategia · generati e verificati</h3><p class="small mute">Equilibri di Nash, valore atteso, minimax e alpha-beta, numeri di Grundy, zaino, intervalli, cammini minimi, probabilità' + (np ? ' e ' + np + ' problemi di scacchi controllati dal motore' : '') + '. Le risposte sono calcolate dal programma, non copiate.</p>' +
      '<button class="btn block" data-act="startStrategy">▶ Laboratorio da 5 minuti</button><table class="t" style="margin-top:8px">' + SG.TYPES.map(t => { const m = (s.strategy || {})[t], acc = SG.accuracy(s, t); return '<tr><td>' + E(SG.LABEL[t]) + '</td><td>Lv ' + SG.level(s, t) + '</td><td class="mute">' + (m && m.n ? Math.round(100 * (acc || 0)) + '%' : '—') + '</td><td><button class="btn alt sm" data-act="startStrategyType" data-t="' + t + '">▶</button></td></tr>'; }).join('') + '</table></div>' +
      '<div class="card"><h3>Tempo dedicato</h3><p class="small">Lezioni lette: <b>' + read + ' / ' + lessons.length + '</b>. La teoria ha 1 slot al giorno a rotazione fra le materie (la priorità sostituisce quella della cybersecurity).</p><button class="btn alt" data-act="st-focus">' + (focus ? 'Torna alla rotazione equilibrata' : 'Dai priorità alla strategia (4 giorni su 7)') + '</button></div>';
  };
})(window.ST = window.ST || {});
