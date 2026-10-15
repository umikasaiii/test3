/* SkillTree — Cultura e abilità generali: laboratori di calcolo e hub della materia. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, R = ST.runner, F = ST.cul, C = ST.content;
  const rec = s => (it, ok, i, r) => { F.record(s, it.mtype, ok, r && r.ms, it.timed, it.lv); A.xp(ok ? (r && r.late ? 2 : 3) : 0, 'cul:' + it.mtype); };
  const summary = (s, res) => { const by = {}; res.forEach(x => { const t = x.item.mtype; by[t] = by[t] || [0, 0]; by[t][1]++; if (x.ok) by[t][0]++; }); return '<p class="mute small">' + Object.keys(by).map(t => E(F.LABEL[t]) + ' ' + by[t][0] + '/' + by[t][1] + ' · livello ' + F.level(s, t)).join('<br>') + '</p>'; };
  X.startCul = () => { const s = A.state; A.ctx = 'general'; R.start({ title: 'Laboratorio di cultura e abilità · 5 min', kind: 'practice', items: F.session(s), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('sec'); A.save(); return summary(s, res); } }); };
  X.startCulType = el => { const s = A.state, t = el.dataset.t; A.ctx = 'general'; R.start({ title: F.LABEL[t], kind: 'free', items: Array.from({ length: 8 }, () => F.make(t, F.pickLevel(s, t))), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('sec'); A.save(); return summary(s, res); } }); };
  ST.culHub = () => {
    const s = A.state, P = ST.progress, lessons = C.topicsOf('sec').filter(t => !t.pill), read = lessons.filter(t => P.atLeast(P.topicStatus(s, t.id), 'studied')).length;
    return '<div class="card glow"><h3>Laboratori di calcolo · numeri della vita quotidiana</h3><p class="small mute">Fusi orari, scale, cronologia, finanza personale, unità, statistica, fisica, chimica, astronomia, cucina, casa, musica, meccanica e primo soccorso. Le risposte sono calcolate dal programma.</p>' +
      '<button class="btn block" data-act="startCul">▶ Laboratorio da 5 minuti</button><table class="t" style="margin-top:8px">' +
      Object.keys(F.GROUPS).map(g => '<tr><td colspan="4"><b>' + E(g) + '</b></td></tr>' + F.GROUPS[g].map(t => { const m = (s.cul || {})[t], acc = F.accuracy(s, t); return '<tr><td>' + E(F.LABEL[t]) + '</td><td>Lv ' + F.level(s, t) + '</td><td class="mute">' + (m && m.n ? Math.round(100 * (acc || 0)) + '%' : '—') + '</td><td><button class="btn alt sm" data-act="startCulType" data-t="' + t + '">▶</button></td></tr>'; }).join('')).join('') + '</table></div>' +
      ST.simHub('sec') +
      '<div class="card"><h3>Aree</h3><p class="mute small">' + C.secondary.map(E).join(' · ') + '</p><p class="small">Lezioni lette: <b>' + read + ' / ' + lessons.length + '</b>. Le lezioni di primo soccorso, cucina, casa e motori non sostituiscono corsi certificati né professionisti.</p></div>';
  };
})(window.ST = window.ST || {});
