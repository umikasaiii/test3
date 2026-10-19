/* vNext M3 — Multi-Move Strategy Simulator: NON duplicato. L'app contiene già ST.sim (42 scenari a turni con risorse, vincoli, imprevisti,
   conseguenze dipendenti dalle scelte precedenti e giudizio del processo con rimpianto rispetto alla politica ottimale expectimax).
   Il pacchetto lo espone nell'Academy e dichiara il conteggio reale. */
(function (ST) {
  'use strict';
  const M = ST.sma;
  if (ST.sim && ST.views.sim) M.registerLab({ id: 'multimove', title: 'Multi-Move Strategy Simulator', view: 'sma-sims', desc: ST.sim.templates.length + ' scenari a più turni (già presenti nell’app): le scelte modificano lo stato, con imprevisti e giudizio del processo.', ready: true });
})(window.ST = window.ST || {});
