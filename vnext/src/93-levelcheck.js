/* vNext M2 — verifica per livello (L0–L5): raccoglie le domande di verifica dei moduli del livello in un esame unico, con soglia del 70%.
   Misura CONOSCENZA TEORICA E COMPRENSIONE: non l'applicazione reale (per quella ci sono STRATEGOS, i laboratori e le verifiche differite). */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, C = ST.content, E = U.esc, X = ST.acts;
  const Lc = M.levelCheck = { THRESHOLD: 0.7, MAX: 20 };
  Lc.items = (lv, rng) => {
    const all = []; C.topicsOf('sma').filter(t => t.stage === lv).forEach(t => (t.test || []).forEach(q => all.push(Object.assign({}, q, { srcLabel: t.title }))));
    return all.length <= Lc.MAX ? all : U.shuffle(all.slice(), rng || U.rand).slice(0, Lc.MAX);
  };
  Lc.S = s => (M.S(s).levelChecks = M.S(s).levelChecks || {});
  Lc.record = (s, lv, results) => {
    const n = results.length, ok = results.filter(r => r.ok).length, pct = n ? ok / n : 0, e = (Lc.S(s)[lv] = Lc.S(s)[lv] || { tries: 0, best: 0, hist: [] });
    e.tries++; e.best = Math.max(e.best, pct); e.pass = e.best >= Lc.THRESHOLD; e.hist.push({ d: U.today(), pct: +pct.toFixed(3), n }); if (e.hist.length > 10) e.hist.shift(); return { pct, ok, n, pass: pct >= Lc.THRESHOLD };
  };
  Lc.badge = (s, lv) => { const e = Lc.S(s)[lv]; return e ? ' <span class="tag ' + (e.pass ? 'good' : '') + '">' + Math.round(100 * e.best) + '% · ' + e.tries + (e.tries === 1 ? ' tentativo' : ' tentativi') + '</span>' : ''; };
  X.smaLvCheck = el => {
    const lv = el.dataset.l, items = Lc.items(lv); if (!items.length) { A.toast('Nessuna domanda di verifica per questo livello'); return; }
    ST.runner.start({ title: 'Verifica ' + lv + ' · Strategic Mastery', kind: 'free', items, ctx: 'general',
      onFinish: res => { const r = Lc.record(A.state, lv, res); A.save(); return '<div class="card ' + (r.pass ? 'glow' : '') + '"><h3>' + (r.pass ? 'Verifica superata' : 'Verifica non ancora superata') + ': ' + Math.round(100 * r.pct) + '%</h3><p class="small">Soglia ' + Math.round(100 * Lc.THRESHOLD) + '%. Misura conoscenza e comprensione dei moduli del livello, non la capacità di applicarli nella vita reale.</p></div>'; } });
  };
})(window.ST = window.ST || {});
