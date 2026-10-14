/* SkillTree — laboratori di cybersecurity (sessione da 5′, per tipo, scenari di incidente) e priorità della teoria. */
(function (ST) {
  'use strict';
  const U = ST.util, C = ST.content, A = ST.app, E = U.esc, V = ST.views, X = ST.acts, R = ST.runner, CY = ST.cyber;

  const rec = s => (it, ok, i, r) => { CY.record(s, it.mtype, ok, r && r.ms, it.timed, it.lv); A.xp(ok ? (r && r.late ? 2 : 3) : 0, 'cyber:' + it.mtype); };
  const summary = (s, res) => { const by = {}; res.forEach(x => { const t = x.item.mtype; by[t] = by[t] || [0, 0]; by[t][1]++; if (x.ok) by[t][0]++; }); return '<p class="mute small">' + Object.keys(by).map(t => E(CY.LABEL[t]) + ' ' + by[t][0] + '/' + by[t][1] + ' · livello ' + CY.level(s, t)).join('<br>') + '</p>'; };
  X.startCyber = () => {
    const s = A.state; A.ctx = 'general';
    R.start({ title: 'Laboratorio cyber · 5 min', kind: 'practice', items: CY.session(s, U.today()), ctx: 'general', onAnswer: rec(s),
      onFinish: res => { s.cyberLog = (s.cyberLog || []).concat({ d: U.today(), n: res.length, ok: res.filter(x => x.ok).length }).slice(-60); A.subjectTouch('cyb'); A.save(); return summary(s, res); } });
  };
  X.startCyberType = el => {
    const s = A.state, t = el.dataset.t; A.ctx = 'general';
    R.start({ title: CY.LABEL[t], kind: 'free', items: Array.from({ length: 8 }, () => CY.make(t, CY.pickLevel(s, t))), ctx: 'general', onAnswer: rec(s),
      onFinish: res => { A.subjectTouch('cyb'); A.save(); return summary(s, res); } });
  };
  X.startScenario = el => {
    const s = A.state, sc = ((C.cyberBank || {}).scenarios || []).find(x => x.id === el.dataset.id); if (!sc) return; A.ctx = 'general';
    const items = sc.steps.map((st, i) => ({ t: 'mc', q: (i === 0 ? sc.intro + ' — ' : '') + st.q, o: st.o.slice(), a: st.a, why: st.why || '', srcLabel: 'Scenario · ' + sc.title + ' · passo ' + (i + 1) + '/' + sc.steps.length, mtype: 'scenario' }));
    R.start({ title: 'Scenario: ' + sc.title, kind: 'free', items, ctx: 'general', onAnswer: (it, ok) => A.xp(ok ? 4 : 0, 'cyber:scenario'),
      onFinish: res => { const sc2 = res.filter(x => x.ok).length / res.length; s.cyberDone = s.cyberDone || {}; s.cyberDone[sc.id] = { d: U.today(), score: sc2 }; A.subjectTouch('cyb'); A.save(); return '<p>' + Math.round(sc2 * 100) + '% delle decisioni in linea con le buone pratiche di risposta agli incidenti.</p><p class="mute small">Le risposte «migliori» seguono il ciclo contenere → preservare le prove → comunicare → recuperare → imparare.</p>'; } });
  };
  X['cy-focus'] = () => { const p = A.state.profile; p.theoryFocus = p.theoryFocus === 'cyb' ? null : 'cyb'; A.save(); A.render(); A.toast(p.theoryFocus === 'cyb' ? 'Priorità alla cybersecurity: 4 giorni su 7' : 'Rotazione equilibrata delle materie'); };

  ST.cyberHub = () => {
    const s = A.state, bank = C.cyberBank || {}, scen = bank.scenarios || [], done = s.cyberDone || {}, focus = s.profile.theoryFocus === 'cyb';
    const lessons = C.topicsOf('cyb').filter(t => !t.pill && !t.id.startsWith('cyb-scenario')), P = ST.progress, read = lessons.filter(t => P.atLeast(P.topicStatus(s, t.id), 'studied')).length;
    return '<div class="card glow"><h3>Laboratori cyber · generati e verificati</h3><p class="small mute">Esercizi con risposta calcolata dal programma: sottoreti, permessi Linux, basi e codifiche, cifrari classici, entropia, CVSS 3.1, log, ACL, RSA didattico, porte, code review, STRIDE e ATT&CK. Tutto difensivo ed educativo: indirizzi solo di documentazione, nessun exploit.</p>' +
      '<button class="btn block" data-act="startCyber">▶ Laboratorio da 5 minuti</button>' +
      '<table class="t" style="margin-top:8px">' + CY.TYPES.map(t => { const m = (s.cyber || {})[t], acc = CY.accuracy(s, t); return '<tr><td>' + E(CY.LABEL[t]) + '</td><td>Lv ' + CY.level(s, t) + '</td><td class="mute">' + (m && m.n ? Math.round(100 * (acc || 0)) + '%' : '—') + '</td><td><button class="btn alt sm" data-act="startCyberType" data-t="' + t + '">▶</button></td></tr>'; }).join('') + '</table></div>' +
      (scen.length ? '<h2>Scenari di incidente (' + Object.keys(done).length + ' / ' + scen.length + ')</h2><p class="mute small">Decisioni a passi, come in un’esercitazione da tavolo.</p><div class="list">' + scen.map(x => '<button class="item" data-act="startScenario" data-id="' + E(x.id) + '"><span class="ic">🚨</span><span class="tx"><b>' + E(x.title) + '</b><span>livello ' + x.level + ' · ' + x.steps.length + ' passi' + (done[x.id] ? ' · ultimo ' + Math.round(done[x.id].score * 100) + '%' : '') + '</span></span></button>').join('') + '</div>' : '') +
      '<div class="card"><h3>Tempo dedicato</h3><p class="small">Lezioni lette: <b>' + read + ' / ' + lessons.length + '</b>. Nella missione generale la teoria ha 1 slot al giorno a rotazione fra le materie.</p><button class="btn alt" data-act="cy-focus">' + (focus ? 'Torna alla rotazione equilibrata' : 'Dai priorità alla cybersecurity (4 giorni su 7)') + '</button></div>';
  };
})(window.ST = window.ST || {});
