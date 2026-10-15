/* SkillTree — Moto e guida sportiva: laboratori di calcolo e hub della materia. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, R = ST.runner, F = ST.moto, C = ST.content;
  const rec = s => (it, ok, i, r) => { F.record(s, it.mtype, ok, r && r.ms, it.timed, it.lv); A.xp(ok ? (r && r.late ? 2 : 3) : 0, 'moto:' + it.mtype); };
  const summary = (s, res) => { const by = {}; res.forEach(x => { const t = x.item.mtype; by[t] = by[t] || [0, 0]; by[t][1]++; if (x.ok) by[t][0]++; }); return '<p class="mute small">' + Object.keys(by).map(t => E(F.LABEL[t]) + ' ' + by[t][0] + '/' + by[t][1] + ' · livello ' + F.level(s, t)).join('<br>') + '</p>'; };
  X.startMoto = () => { const s = A.state; A.ctx = 'general'; R.start({ title: 'Laboratorio moto e guida sportiva · 5 min', kind: 'practice', items: F.session(s), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('moto'); A.save(); return summary(s, res); } }); };
  X.startMotoType = el => { const s = A.state, t = el.dataset.t; A.ctx = 'general'; R.start({ title: F.LABEL[t], kind: 'free', items: Array.from({ length: 8 }, () => F.make(t, F.pickLevel(s, t))), ctx: 'general', onAnswer: rec(s), onFinish: res => { A.subjectTouch('moto'); A.save(); return summary(s, res); } }); };
  ST.motoHub = () => {
    const s = A.state, P = ST.progress, lessons = C.topicsOf('moto').filter(t => !t.pill), read = lessons.filter(t => P.atLeast(P.topicStatus(s, t.id), 'studied')).length;
    return '<div class="card glow"><h3>Laboratori di calcolo · fisica e meccanica della moto</h3><p class="small mute">Angolo di piega, frenata, trasferimenti di carico, rapporti, motore, coppia e potenza, pneumatici, sospensioni, tempi di pista, giroscopio ed energia. Le risposte sono calcolate dal programma con formule dichiarate.</p>' +
      '<button class="btn block" data-act="startMoto">▶ Laboratorio da 5 minuti</button><table class="t" style="margin-top:8px">' +
      Object.keys(F.GROUPS).map(g => '<tr><td colspan="4"><b>' + E(g) + '</b></td></tr>' + F.GROUPS[g].map(t => { const m = (s.moto || {})[t], acc = F.accuracy(s, t); return '<tr><td>' + E(F.LABEL[t]) + '</td><td>Lv ' + F.level(s, t) + '</td><td class="mute">' + (m && m.n ? Math.round(100 * (acc || 0)) + '%' : '—') + '</td><td><button class="btn alt sm" data-act="startMotoType" data-t="' + t + '">▶</button></td></tr>'; }).join('')).join('') + '</table></div>' +
      ST.simHub('moto') +
      '<div class="card"><h3>Sicurezza prima di tutto</h3><p class="small">Le tecniche di guida sportiva si esercitano solo in pista, con istruttori e regole del circuito: mai su strada. Le lezioni di meccanica non sostituiscono un’officina qualificata. Lezioni lette: <b>' + read + ' / ' + lessons.length + '</b>.</p></div>';
  };
})(window.ST = window.ST || {});
