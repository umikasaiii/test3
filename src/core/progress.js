/* SkillTree — XP, livello generale e stato di padronanza.
   Quattro piani distinti, mai fusi in un solo numero:
   1. XP / partecipazione   2. completamento (lezione, esercizi)
   3. conoscenza verificata (test dilazionato)   4. mantenimento (ritest a distanza).
   La competenza pratica (lingua parlata, judo con partner) NON è derivabile da XP né da quiz. */
(function (ST) {
  'use strict';
  const U = ST.util;
  const P = ST.progress = {};

  P.MAX_LEVEL = 100;
  // XP cumulativi per raggiungere il livello n (n=1 → 0). Livello 100 ≈ 107k XP.
  P.xpForLevel = n => n <= 1 ? 0 : Math.round(55 * Math.pow(n - 1, 1.65));
  P.levelInfo = xp => {
    let lv = 1;
    while (lv < P.MAX_LEVEL && xp >= P.xpForLevel(lv + 1)) lv++;
    const base = P.xpForLevel(lv), next = lv >= P.MAX_LEVEL ? base : P.xpForLevel(lv + 1);
    return { level: lv, xp, into: xp - base, span: next - base, remaining: Math.max(0, next - xp), pct: lv >= P.MAX_LEVEL ? 100 : Math.round(100 * (xp - base) / (next - base)) };
  };

  P.DAILY_XP_CAP = 450;
  /* Assegna XP con tetto giornaliero e rendimenti decrescenti sulla stessa attività. */
  P.award = (state, amount, key) => {
    const day = U.today();
    state.xpLog = state.xpLog || {};
    const used = state.xpLog[day] || 0;
    const seen = (state.xpKeys = state.xpKeys || {});
    const k = day + '|' + (key || '');
    const n = seen[k] = (seen[k] || 0) + 1;
    let gain = Math.round(amount / Math.pow(1.6, n - 1));
    gain = Math.max(0, Math.min(gain, P.DAILY_XP_CAP - used));
    state.xp = (state.xp || 0) + gain;
    state.xpLog[day] = used + gain;
    return gain;
  };

  /* Stato di un argomento. Ordine crescente di garanzia:
     new < studied < practiced < verified < retained */
  P.STATUS = ['new', 'studied', 'practiced', 'verified', 'retained'];
  P.statusLabel = { new: 'Da iniziare', studied: 'Lezione letta', practiced: 'Esercitato', verified: 'Verificato', retained: 'Mantenuto' };

  P.topicRec = (state, id) => (state.topics[id] = state.topics[id] || { page: 0, studied: null, ex: {}, tests: [], retests: [] });

  P.PASS = 0.8;
  P.topicStatus = (state, id) => {
    const t = state.topics[id];
    if (!t || !t.studied) return 'new';
    // Verifica valida solo se svolta almeno 1 giorno dopo la lezione (no "studio e test nella stessa seduta").
    const valid = (t.tests || []).filter(x => x.score >= P.PASS && U.diffDays(t.studied, x.date) >= 1);
    if (valid.length) {
      const firstOk = valid[0].date;
      const re = (t.retests || []).some(x => x.score >= P.PASS && U.diffDays(firstOk, x.date) >= 14);
      return re ? 'retained' : 'verified';
    }
    const correct = Object.values(t.ex || {}).filter(e => e.ok).length;
    const def = ST.content && ST.content.topic(id), total = def ? def.exercises.length : 5;
    return correct >= Math.min(5, total) ? 'practiced' : 'studied';
  };
  /* Ritest dovuto: argomento verificato da ≥14 giorni senza ritest superato. */
  P.retestDue = (state, subjectId, date) => {
    date = date || U.today();
    return (ST.content.order[subjectId] || []).filter(id => {
      const t = state.topics[id];
      if (!t || P.topicStatus(state, id) !== 'verified') return false;
      const first = (t.tests || []).find(x => x.score >= P.PASS && U.diffDays(t.studied, x.date) >= 1);
      return first && U.diffDays(first.date, date) >= 14;
    });
  };
  P.atLeast = (s, min) => P.STATUS.indexOf(s) >= P.STATUS.indexOf(min);
})(window.ST = window.ST || {});
