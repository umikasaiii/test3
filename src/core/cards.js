/* SkillTree — carte di ripasso (lessico, frasi, errori) integrate con lo scheduler SRS.
   Una carta nasce quando l'argomento viene studiato oppure quando un esercizio viene sbagliato. */
(function (ST) {
  'use strict';
  const U = ST.util, S = ST.srs;
  const C = ST.cards = {};

  const langOf = subj => subj === 'eng' ? 'en' : subj === 'jpn' ? 'ja' : null;

  /* Crea le carte lessicali di un argomento (prima apparizione: dovute il giorno dopo). */
  C.introduceTopic = (state, topic) => {
    const lang = langOf(topic.subject);
    (topic.cards || []).forEach(cd => {
      const id = 'v:' + topic.id + ':' + cd.id;
      if (!state.cards[id]) state.cards[id] = S.newCard({ kind: 'vocab', lang, topic: topic.id, cid: cd.id, due: U.addDays(U.today(), 1), reps: 1, last: U.today(), interval: 1, step: 1, state: 'learning' });
    });
  };
  /* Un esercizio sbagliato torna domani (poi secondo ladder). Un esercizio giusto non crea carte. */
  C.registerError = (state, topic, exIdx) => {
    const id = 'x:' + topic.id + ':' + exIdx;
    const prev = state.cards[id];
    const card = prev ? S.review(prev, 0) : S.newCard({ kind: 'error', lang: langOf(topic.subject), topic: topic.id, ex: exIdx, reps: 1, lapses: 1, last: U.today(), interval: 1, due: U.addDays(U.today(), 1), step: 0, state: 'learning' });
    state.cards[id] = card;
  };
  C.dueCount = (state, lang, date) => S.dueList(state.cards, date || U.today(), (id, c) => !lang || c.lang === lang).length;
  C.dueIds = (state, lang, date) => S.dueList(state.cards, date || U.today(), (id, c) => !lang || c.lang === lang).map(x => x.id);

  /* Costruisce l'esercizio da mostrare per una carta. Recognition → scelta; recall → risposta digitata. */
  C.question = (state, id, rng) => {
    rng = rng || U.rand;
    const c = state.cards[id];
    if (!c) return null;
    const topic = ST.content.topic(c.topic);
    if (!topic) return null;
    if (c.kind === 'error') {
      const ex = topic.exercises[c.ex];
      return ex ? Object.assign({ cardId: id, srcLabel: 'Errore da ripassare · ' + topic.title }, ex) : null;
    }
    const cd = (topic.cards || []).find(x => x.id === c.cid);
    if (!cd) return null;
    const pool = (topic.cards || []).filter(x => x.id !== cd.id);
    const isJa = c.lang === 'ja';
    if (c.mode === 'recall') {
      return { cardId: id, t: 'fill', srcLabel: 'Richiamo attivo · ' + topic.title, q: 'Scrivi in ' + (isJa ? 'giapponese (kana o romaji)' : 'inglese') + ': «' + cd.f + '»', a: [isJa ? (cd.r || U.speechText(cd.b)) : cd.b], jaReading: isJa, say: null, why: (isJa ? U.plainText(cd.b) + ' (' + (cd.r || '') + ')' : cd.b) + (cd.ex ? ' — ' + cd.ex : '') };
    }
    const distract = U.sample(pool, Math.min(3, pool.length), rng).map(x => x.f);
    const opts = U.shuffle([cd.f].concat(distract), rng);
    return { cardId: id, t: 'mc', srcLabel: 'Riconoscimento · ' + topic.title, q: 'Che cosa significa «' + (isJa ? cd.b : cd.b) + '»?', say: { lang: isJa ? 'ja' : 'en-GB', text: U.speechText(cd.b) }, o: opts, a: opts.indexOf(cd.f), why: cd.ex || '' };
  };
  /* Registra il risultato di una carta con il motore SRS. */
  C.grade = (state, id, correct, fast) => {
    const c = state.cards[id];
    if (!c) return;
    state.cards[id] = S.review(c, correct ? (fast ? 3 : 2) : 0);
    state.reviewLog = state.reviewLog || [];
    state.reviewLog.push({ d: U.today(), id, ok: !!correct });
    if (state.reviewLog.length > 4000) state.reviewLog.splice(0, state.reviewLog.length - 4000);
  };
})(window.ST = window.ST || {});
