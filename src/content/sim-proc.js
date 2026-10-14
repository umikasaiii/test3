/* SkillTree — scenari di strategia GENERATI (procedurali): ogni partita è diversa. Qui: allocazione contro un avversario (Blotto),
   gestione del rischio (Kelly) e negoziazione. Gli altri scenari a carte stanno in sim-*.js. Tutto inventato e didattico. */
(function (ST) {
  'use strict';
  const U = ST.util, SIM = ST.sim, ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  const pct = x => Math.round(x * 100) + '%';

  /* ---- 1) Allocazione di forze su tre fronti contro un avversario prevedibile (Colonel Blotto semplificato) ---- */
  const ALLOCS = [[6, 2, 2], [2, 6, 2], [2, 2, 6], [4, 4, 2], [4, 2, 4], [2, 4, 4], [3, 3, 4], [4, 3, 3], [3, 4, 3]];
  const points = (me, op) => me.reduce((s, x, k) => s + (x > op[k] ? 1 : x < op[k] ? -1 : 0), 0);
  SIM.register({ id: 'blotto', title: 'Tre fronti: dove concentrare le forze', icon: '🛡️', intro: 'Hai 10 unità da distribuire su tre fronti (A, B, C) in ogni round. Un fronte si vince con più unità dell’avversario (+1), si perde con meno (−1), pareggio 0. L’avversario ha abitudini: ti vengono riportate come probabilità. Massimizza i punti totali.',
    vars: { punti: { label: 'Punti', start: 0, min: -30, max: 30 } }, weights: { punti: 10 }, turns: 5, utilText: '10 per ogni punto netto',
    build: (lv, rng) => Array.from({ length: 5 }, (_, r) => {
      const k = lv <= 3 ? 2 : lv <= 6 ? 3 : 4, ops = U.sample(ALLOCS, k, rng); let w = ops.map(() => rng() + 0.3 + (lv <= 3 ? rng() * 2 : 0)); const sw = w.reduce((a, b) => a + b, 0); w = w.map(x => Math.round(100 * x / sw) / 100); w[0] = Math.round((1 - w.slice(1).reduce((a, b) => a + b, 0)) * 100) / 100;
      const mine = U.sample(ALLOCS, 3, rng);
      return { id: 'blotto-' + r, text: 'Round ' + (r + 1) + '. Abitudini dell’avversario: ' + ops.map((o, i) => '[' + o.join('-') + '] ' + pct(w[i])).join(', ') + '. Come distribuisci le tue 10 unità (A-B-C)?',
        choices: mine.map(m => ({ label: m.join('-') + ' (A-B-C)', principle: 'Valore atteso contro una strategia nota: confronta ogni distribuzione con le abitudini dell’avversario', hint: 'Calcola il punteggio atteso: Σ p × (fronti vinti − persi)', out: ops.map((o, i) => ({ p: w[i], fx: { punti: points(m, o) }, text: 'L’avversario ha giocato ' + o.join('-') + ': ' + (points(m, o) > 0 ? 'vinci ' : points(m, o) < 0 ? 'perdi ' : 'pareggi ') + Math.abs(points(m, o)) + ' punti' })) })) };
    }) });

  /* ---- 2) Gestione del rischio: quanto puntare quando hai un vantaggio (criterio di Kelly) ---- */
  SIM.register({ id: 'rischio', title: 'Quanto rischiare: puntate con vantaggio', icon: '🎲', intro: 'Hai un capitale di partenza e una serie di occasioni con probabilità e quota note (gioco didattico, non consulenza finanziaria). Puoi saltare o puntare una frazione del capitale. Il punteggio premia la crescita composta (logaritmo del capitale): perdere tutto è catastrofico.',
    vars: { capitale: { label: 'Capitale', start: 100, min: 0, max: 100000, unit: '€' } }, weights: {}, turns: 5, utilText: '50 × ln(capitale finale)', utility: v => 50 * Math.log(Math.max(1, v.capitale)),
    build: (lv, rng) => Array.from({ length: 5 }, (_, r) => {
      const good = rng() < 0.75 || lv <= 2, b = U.pick([1, 1, 2, 3], rng), pkelly = good ? U.clamp((1 + 0.25 + rng() * 0.15) / (b + 1) , 0.3, 0.9) : U.clamp(1 / (b + 1) - 0.07, 0.1, 0.9), p = Math.round(pkelly * 100) / 100;
      const fracs = [0, 0.1, 0.25, 0.5]; const f = x => (v) => ({ capitale: Math.round(v.capitale * x * b * 100) / 100 }), l = x => (v) => ({ capitale: -Math.round(v.capitale * x * 100) / 100 });
      return { id: 'risk-' + r, text: 'Occasione ' + (r + 1) + ': vinci con probabilità ' + pct(p) + ' e incassi ' + b + ' volte la puntata (se perdi, perdi la puntata). Quanto del capitale punti?',
        choices: fracs.map(x => ({ label: x === 0 ? 'Salta' : 'Punta il ' + pct(x) + ' del capitale', principle: 'Il valore atteso positivo non basta: la dimensione della puntata decide se il capitale cresce o va in rovina', out: x === 0 ? [{ p: 1, fx: {}, text: 'Non rischi nulla' }] : [{ p, fx: f(x), text: 'Vinci: capitale +' + pct(x * b) }, { p: Math.round((1 - p) * 100) / 100, fx: l(x), text: 'Perdi: capitale −' + pct(x) }] })) };
    }) });

  /* ---- 3) Negoziazione: quanto chiedere quando non conosci il limite dell'altro ---- */
  SIM.register({ id: 'negoziazione', title: 'Negoziare quattro punti di un accordo', icon: '🤝', intro: 'Devi negoziare quattro punti (stipendio, ferie, bonus, ruolo). Per ognuno scegli quanto chiedere: chiedere di più rende di più se accettano, ma aumenta il rischio di rottura (e danneggia il rapporto). Il tuo obiettivo è il valore totale, tenendo conto del rapporto con l’altra parte.',
    vars: { valore: { label: 'Valore ottenuto', start: 0, min: 0, max: 400 }, rapporto: { label: 'Rapporto', start: 50, min: 0, max: 100 } }, weights: { valore: 1, rapporto: 0.6 }, turns: 4, utilText: 'valore + 0,6 × rapporto',
    build: (lv, rng) => ['Stipendio', 'Ferie', 'Bonus', 'Ruolo'].map((nm, r) => {
      const base = 60 + ri(rng, 0, 20), lim = base + ri(rng, 10, 30 + lv * 2), asks = [base, Math.round((base + lim) / 2), lim, Math.round(lim * 1.2)];
      const accept = a => a <= lim ? U.clamp(1 - (a - base) / (lim - base + 8) * 0.35, 0.55, 0.98) : U.clamp(0.5 - (a - lim) / 30, 0.12, 0.5);
      return { id: 'neg-' + r, text: nm + ': la controparte parte da ' + base + ' e si stima che il suo limite sia intorno a ' + lim + ' (con incertezza). Quanto chiedi?',
        choices: asks.map((a, i) => ({ label: 'Chiedi ' + a + (i === 0 ? ' (prudente)' : i === 3 ? ' (molto ambizioso)' : ''), principle: 'La richiesta ottimale bilancia il guadagno se accettano e la probabilità di rottura (valore atteso e relazione)', out: [{ p: Math.round(accept(a) * 100) / 100, fx: { valore: a, rapporto: i >= 3 ? -5 : 2 }, text: 'Accordo a ' + a }, { p: Math.round((1 - accept(a)) * 100) / 100, fx: { valore: Math.round(base * 0.9), rapporto: i >= 2 ? -12 : -6 }, text: 'La trattativa si rompe: ripieghi su ' + Math.round(base * 0.9) }] })) };
    }) });
})(window.ST = window.ST || {});
