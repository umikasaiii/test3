/* SkillTree — ripetizione dilazionata adattiva.
   Un solo motore per carte teoriche, kana, errori linguistici e tecniche motorie.
   Ladder iniziale richiesta: 1, 3, 7, 14, 30 giorni; poi 60 e 120 come tetto di mantenimento.
   Nessun elemento esce mai dal sistema: l'intervallo massimo è finito. */
(function (ST) {
  'use strict';
  const U = ST.util;
  const SRS = ST.srs = {};

  SRS.LADDER = [1, 3, 7, 14, 30, 60, 120];
  SRS.MAX_INTERVAL = 120;

  // Voti: 0 = non ricordato / eseguito male, 1 = difficile, 2 = bene, 3 = facile.
  SRS.newCard = (extra) => Object.assign({
    step: 0, ease: 2.3, reps: 0, lapses: 0, streak: 0,
    due: U.today(), last: null, interval: 0, state: 'new', mode: 'recognition'
  }, extra || {});

  SRS.stateOf = c => {
    if (!c || c.reps === 0) return 'new';
    if (c.step >= 5 && c.streak >= 3) return 'consolidated';
    if (c.step >= 3) return 'consolidating';
    return 'learning';
  };

  /* Applica una valutazione. Restituisce una nuova carta (non muta l'originale). */
  SRS.review = (card, grade, today) => {
    today = today || U.today();
    const c = Object.assign({}, card);
    c.reps = (c.reps || 0) + 1;
    c.last = today;
    const L = SRS.LADDER;
    if (grade <= 0) {
      c.lapses = (c.lapses || 0) + 1;
      c.streak = 0;
      c.step = Math.max(0, (c.step || 0) - 2);   // un errore riporta indietro di due gradini
      c.ease = Math.max(1.3, c.ease - 0.2);
      c.interval = 1;                            // il giorno dopo: l'errore torna prima
    } else {
      const before = c.step || 0;
      if (grade === 1) c.ease = Math.max(1.3, c.ease - 0.1);
      if (grade >= 2) c.streak = (c.streak || 0) + 1;
      if (grade === 3) c.ease = Math.min(2.8, c.ease + 0.1);
      let adv = grade === 2 ? 1 : grade === 3 ? (c.streak >= 2 ? 2 : 1) : 0;   // salto solo dopo risposte buone ripetute
      c.step = Math.min(L.length - 1, before + adv);
      const earned = L[Math.min(L.length - 1, before + (adv === 2 ? 1 : 0))];   // intervallo guadagnato dal gradino di partenza
      const target = grade === 1 ? Math.max(1, Math.round(earned * 0.6)) : earned;
      c.interval = U.clamp(Math.round(target * U.clamp(c.ease / 2.3, 0.7, 1.2)), 1, SRS.MAX_INTERVAL);
    }
    c.due = U.addDays(today, c.interval);
    c.state = SRS.stateOf(c);
    // Richiamo attivo (digitare/produrre) dai 7 giorni in poi: prevenire il completamento passivo.
    c.mode = c.step >= 2 ? 'recall' : 'recognition';
    return c;
  };

  SRS.isDue = (c, today) => !c || c.reps === 0 ? false : c.due <= (today || U.today());
  SRS.overdueDays = (c, today) => c && c.due ? Math.max(0, U.diffDays(c.due, today || U.today())) : 0;

  /* Elementi dovuti, ordinati: più in ritardo e più fragili per primi. */
  SRS.dueList = (cards, today, filter) => {
    today = today || U.today();
    return Object.keys(cards).filter(id => (!filter || filter(id, cards[id])) && SRS.isDue(cards[id], today))
      .map(id => ({ id, card: cards[id], late: SRS.overdueDays(cards[id], today) }))
      .sort((a, b) => (b.late + (b.card.lapses || 0) * 0.5) - (a.late + (a.card.lapses || 0) * 0.5));
  };

  /* Conversione da autovalutazione 1–5 (qualità) e difficoltà percepita 1–5 a voto SRS. */
  SRS.gradeFromSelf = (quality, difficulty) => {
    let g = quality <= 2 ? 0 : quality === 3 ? 1 : quality === 4 ? 2 : 3;
    if (g >= 2 && difficulty >= 5) g -= 1;   // buona esecuzione ma percepita come molto faticosa
    return g;
  };
})(window.ST = window.ST || {});
