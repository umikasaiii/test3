/* vNext M8 — collegamenti con i laboratori già presenti nell'app (nessuna duplicazione di punteggi o contenuti):
   Cognitive Performance Lab e Strategic Decision Making Lab restano quelli esistenti in «Laboratori facoltativi»; qui si avviano direttamente. */
(function (ST) {
  'use strict';
  const M = ST.sma;
  if (ST.views.optlab && ST.acts.optStart) {
    M.registerLab({ id: 'cog', title: 'Cognitive Performance Lab (esistente)', act: 'optStart', data: { k: 'cog' }, desc: 'Allenamento mentale adattivo già presente nell’app: i risultati restano nell’area «Mentale», non vengono duplicati qui. Il miglioramento nel compito allenato non equivale a un transfer.', ready: true });
    M.registerLab({ id: 'decision', title: 'Strategic Decision Making Lab (esistente)', act: 'optStart', data: { k: 'decision' }, desc: 'Valore atteso, alberi, teoria dei giochi e ottimizzazione già presenti nell’app; punteggi e progressi restano quelli di «Strategia».', ready: true });
  }
})(window.ST = window.ST || {});
