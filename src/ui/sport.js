/* SkillTree — scienze dello sport: laboratori di calcolo e hub della materia. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, R = ST.runner, SP = ST.sport, C = ST.content;
  const rec = s => (it, ok, i, r) => { SP.record(s, it.mtype, ok, r && r.ms, it.timed, it.lv); A.xp(ok ? (r && r.late ? 2 : 3) : 0, 'sport:' + it.mtype); };
  const summary = (s, res) => { const by = {}; res.forEach(x => { const t = x.item.mtype; by[t] = by[t] || [0, 0]; by[t][1]++; if (x.ok) by[t][0]++; }); return '<p class="mute small">' + Object.keys(by).map(t => E(SP.LABEL[t]) + ' ' + by[t][0] + '/' + by[t][1] + ' · livello ' + SP.level(s, t)).join('<br>') + '</p>'; };
  X.startSport = () => { const s = A.state; A.ctx = 'general'; R.start({ title: 'Laboratorio di scienze dello sport · 5 min', kind: 'practice', items: SP.session(s), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('sport'); A.save(); return summary(s, res); } }); };
  X.startSportType = el => { const s = A.state, t = el.dataset.t; A.ctx = 'general'; R.start({ title: SP.LABEL[t], kind: 'free', items: Array.from({ length: 8 }, () => SP.make(t, SP.pickLevel(s, t))), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('sport'); A.save(); return summary(s, res); } }); };

  ST.sportHub = () => {
    const s = A.state, P = ST.progress, lessons = C.topicsOf('sport').filter(t => !t.pill), read = lessons.filter(t => P.atLeast(P.topicStatus(s, t.id), 'studied')).length;
    return '<div class="card glow"><h3>Laboratori di calcolo · carichi, energia, nutrizione</h3><p class="small mute">Formule standard dichiarate in ogni esercizio (Epley, Karvonen, Mifflin-St Jeor, RPE di sessione…). Le risposte sono calcolate dal programma. Sono stime didattiche, non prescrizioni mediche o personalizzate.</p>' +
      '<button class="btn block" data-act="startSport">▶ Laboratorio da 5 minuti</button><table class="t" style="margin-top:8px">' +
      Object.keys(SP.GROUPS).map(g => '<tr><td colspan="4"><b>' + E(g) + '</b></td></tr>' + SP.GROUPS[g].map(t => { const m = (s.sport || {})[t], acc = SP.accuracy(s, t); return '<tr><td>' + E(SP.LABEL[t]) + '</td><td>Lv ' + SP.level(s, t) + '</td><td class="mute">' + (m && m.n ? Math.round(100 * (acc || 0)) + '%' : '—') + '</td><td><button class="btn alt sm" data-act="startSportType" data-t="' + t + '">▶</button></td></tr>'; }).join('')).join('') + '</table></div>' +
      ST.simHub('sport') +
      '<div class="card"><h3>Tempo dedicato</h3><p class="small">Lezioni lette: <b>' + read + ' / ' + lessons.length + '</b>. Le lezioni non sono consulenza medica né un programma personalizzato.</p></div>';
  };
})(window.ST = window.ST || {});
