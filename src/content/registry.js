/* SkillTree — registro dei contenuti: Materia → Stage → Argomento → Attività. */
(function (ST) {
  'use strict';
  const C = ST.content = { subjects: [], topics: {}, order: {}, pills: [] };

  C.STAGES = ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'];
  C.defineSubject = s => { C.subjects.push(s); C.order[s.id] = C.order[s.id] || []; return s; };
  C.addTopic = t => {
    if (C.topics[t.id]) throw new Error('Argomento duplicato: ' + t.id);
    C.topics[t.id] = t;
    (C.order[t.subject] = C.order[t.subject] || []).push(t.id);
    return t;
  };
  C.subject = id => C.subjects.find(s => s.id === id);
  C.topic = id => C.topics[id];
  C.topicsOf = id => (C.order[id] || []).map(x => C.topics[x]).sort((a, b) => ST.content.STAGES.indexOf(a.stage) - ST.content.STAGES.indexOf(b.stage) || C.order[id].indexOf(a.id) - C.order[id].indexOf(b.id));
  C.stagesOf = id => {
    const s = C.subject(id);
    return s.stages.map(st => Object.assign({}, st, { topics: C.topicsOf(id).filter(t => t.stage === st.id).map(t => t.id) }));
  };
  // Dopo la registrazione di tutti gli argomenti, popola l'elenco topic per stage.
  C.finalize = () => C.subjects.forEach(s => { s.stages.forEach(st => { st.topics = C.topicsOf(s.id).filter(t => t.stage === st.id).map(t => t.id); }); });

  /* DSL per scrivere esercizi in modo compatto. */
  C.mc = (q, o, a, why) => ({ t: 'mc', q, o, a, why: why || '' });
  C.fill = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '' });
  C.order = (q, words, why) => ({ t: 'order', q, words, why: why || '' });
  C.listen = (say, lang, q, o, a, why) => ({ t: 'mc', q, o, a, why: why || '', say: { text: say, lang }, hideText: true });
  C.card = (id, f, b, ex, r) => ({ id, f, b, ex: ex || '', r: r || '' });
})(window.ST = window.ST || {});
