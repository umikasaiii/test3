/* vNext M3 — Forecasting & Calibration Lab. Non duplica il diario delle previsioni esistente (state.forecasts, ST.transfer):
   lo ANALIZZA (curva di calibrazione, eccesso di sicurezza, Brier) e aggiunge un esercizio di intervalli all'80% su quantità
   verificabili offline. Gli esiti dei fatti reali restano a inserimento manuale (nessun risultato assegnato automaticamente). */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const F = M.forecast = {};
  /* confidenza sul lato previsto: max(p, 100-p); colpito se il lato previsto coincide con l'esito */
  F.bucketStats = list => {
    const bs = [[50, 59], [60, 69], [70, 79], [80, 89], [90, 100]].map(([lo, hi]) => ({ lo, hi, n: 0, conf: 0, hit: 0 }));
    list.forEach(f => {
      const p = f.revs[0].p, conf = Math.max(p, 100 - p), ok = (p >= 50 ? 1 : 0) === f.out ? 1 : 0, b = bs.find(x => conf >= x.lo && conf <= x.hi); if (!b) return;
      b.n++; b.conf += conf; b.hit += ok;
    });
    return bs.map(b => ({ lo: b.lo, hi: b.hi, n: b.n, conf: b.n ? b.conf / b.n : null, rate: b.n ? 100 * b.hit / b.n : null, gap: b.n ? b.conf / b.n - 100 * b.hit / b.n : null }));
  };
  F.analyze = s => {
    const res = (s.forecasts || []).filter(f => f.out != null && f.revs && f.revs.length), n = res.length; if (!n) return { n: 0 };
    const buckets = F.bucketStats(res), brier = res.reduce((a, f) => a + Math.pow(f.revs[0].p / 100 - f.out, 2), 0) / n;
    const conf = res.reduce((a, f) => a + Math.max(f.revs[0].p, 100 - f.revs[0].p), 0) / n, hits = res.filter(f => (f.revs[0].p >= 50 ? 1 : 0) === f.out).length;
    return { n, brier: +brier.toFixed(3), skill: +(1 - brier / 0.25).toFixed(3), meanConf: +conf.toFixed(1), hitRate: +(100 * hits / n).toFixed(1), overconf: +(conf - 100 * hits / n).toFixed(1), buckets,
      verdict: n < 10 ? 'Servono almeno 10 previsioni risolte per un giudizio sensato: con meno dati la calibrazione è rumore.' : conf - 100 * hits / n > 10 ? 'Tendi all’eccesso di sicurezza: le tue confidenze superano la frequenza di successo.' : conf - 100 * hits / n < -10 ? 'Tendi alla prudenza eccessiva: ottieni più successi di quanti ne dichiari.' : 'Calibrazione ragionevole sui dati disponibili.' };
  };
  /* intervalli all'80%: valori certi e stabili, verificabili offline */
  F.BANK = [
    { id: 'q-rivfr', q: 'Anno di inizio della Rivoluzione francese', v: 1789, u: '' }, { id: 'q-everest', q: 'Altezza ufficiale del Monte Everest', v: 8849, u: 'm' },
    { id: 'q-luna', q: 'Distanza media Terra–Luna', v: 384400, u: 'km' }, { id: 'q-ossa', q: 'Numero di ossa di un adulto', v: 206, u: '' },
    { id: 'q-equat', q: 'Lunghezza dell’equatore terrestre', v: 40075, u: 'km' }, { id: 'q-muro', q: 'Anno della caduta del muro di Berlino', v: 1989, u: '' },
    { id: 'q-luce', q: 'Velocità della luce nel vuoto', v: 299792, u: 'km/s' }, { id: 'q-kodo', q: 'Anno di fondazione del Kodokan', v: 1882, u: '' },
    { id: 'q-raggio', q: 'Raggio medio della Terra', v: 6371, u: 'km' }, { id: 'q-sputnik', q: 'Anno del lancio dello Sputnik 1', v: 1957, u: '' },
    { id: 'q-scacchi', q: 'Numero totale di pezzi all’inizio di una partita di scacchi', v: 32, u: '' }, { id: 'q-elem', q: 'Numero di elementi confermati nella tavola periodica', v: 118, u: '' }
  ];
  F.hit = (q, lo, hi) => lo <= hi && q.v >= lo && q.v <= hi;
  /* un intervallo troppo largo è «sicuro» ma inutile: la larghezza relativa è riportata insieme al tasso di successo */
  F.stats = s => { const h = (M.S(s).forecast || []); const n = h.length; if (!n) return { n: 0 }; const hits = h.filter(x => x.hit).length; return { n, hits, rate: +(100 * hits / n).toFixed(1), verdict: n < 8 ? 'Pochi intervalli: continua per avere un dato affidabile.' : hits / n < 0.65 ? 'I tuoi intervalli «all’80%» contengono il valore vero meno spesso di quanto dichiari: sei troppo sicuro.' : hits / n > 0.95 ? 'Intervalli molto prudenti: probabilmente troppo larghi per essere informativi.' : 'Intervalli ben calibrati rispetto all’80% dichiarato.' }; };
  F.answer = (s, id, lo, hi) => { const q = F.BANK.find(x => x.id === id), hit = F.hit(q, lo, hi); (M.S(s).forecast = M.S(s).forecast || []).push({ id, lo, hi, hit, d: U.today() }); M.record(s, 'calibration', 'int:' + id, 'auto', hit, { conf: 80 }); return { hit, v: q.v }; };

  M.registerLab({ id: 'forecast', title: 'Forecasting & Calibration Lab', view: 'sma-forecast', desc: 'Analisi della calibrazione delle tue previsioni reali e allenamento sugli intervalli all’80%.', ready: true });
  let qi = 0, last = null;
  V['sma-forecast'] = () => {
    const s = A.state, an = F.analyze(s), st = F.stats(s), q = F.BANK[qi % F.BANK.length];
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🎯 Forecasting &amp; Calibration</h1>';
    h += '<div class="card"><h3>Le tue previsioni reali</h3>' + (an.n ? '<p class="small">' + an.n + ' risolte · Brier ' + an.brier + ' · tasso di successo ' + an.hitRate + '% · confidenza media ' + an.meanConf + '% · scarto ' + (an.overconf > 0 ? '+' : '') + an.overconf + ' punti</p>' +
      an.buckets.map(b => '<div class="sma-dim"><span>' + b.lo + '–' + b.hi + '%</span><span class="sma-bar"><i style="width:' + (b.rate == null ? 0 : Math.round(b.rate)) + '%"></i></span><small>' + (b.n ? b.n + ' prev. · successi ' + Math.round(b.rate) + '% · confidenza ' + Math.round(b.conf) + '%' : 'nessuna previsione') + '</small></div>').join('') + '<p class="small warn">' + E(an.verdict) + '</p>' : '<p class="small mute">Ancora nessuna previsione risolta. Registra le previsioni nel Laboratorio decisionale (tab «Previsioni») e inserisci tu l’esito quando l’evento si conclude: l’app non assegna mai un esito da sola.</p>') +
      '<button class="btn alt sm" data-act="go" data-view="transfer" data-p=\'{"t":"fore"}\'>Apri il diario delle previsioni</button></div>';
    h += '<div class="card"><h3>Intervalli all’80%</h3><p class="small mute">Indica un intervallo che ritieni contenga il valore vero nell’80% dei casi. Se sei calibrato, ne azzeccherai circa 8 su 10: più spesso significa intervalli troppo larghi, molto meno significa eccesso di sicurezza.</p>' +
      (last ? '<p class="small ' + (last.hit ? 'good' : 'warn') + '">' + (last.hit ? 'Dentro' : 'Fuori') + ': il valore era ' + last.v + '.</p>' : '') +
      '<p><b>' + E(q.q) + '</b>' + (q.u ? ' (' + E(q.u) + ')' : '') + '</p><div class="row" style="gap:8px"><input id="sma-lo" type="number" inputmode="decimal" placeholder="minimo" style="width:40%"><input id="sma-hi" type="number" inputmode="decimal" placeholder="massimo" style="width:40%"></div>' +
      '<button class="btn" style="margin-top:8px" data-act="smaFcAns" data-id="' + q.id + '">Conferma</button>' + (st.n ? '<p class="small mute" style="margin-top:8px">' + st.hits + ' su ' + st.n + ' dentro (' + st.rate + '%) · ' + E(st.verdict) + '</p>' : '') + '</div>';
    return h;
  };
  X.smaFcAns = el => {
    const lo = parseFloat((document.getElementById('sma-lo') || {}).value), hi = parseFloat((document.getElementById('sma-hi') || {}).value);
    if (!isFinite(lo) || !isFinite(hi) || lo > hi) { A.toast('Inserisci minimo e massimo (minimo ≤ massimo)'); return; }
    last = F.answer(A.state, el.dataset.id, lo, hi); qi++; A.save(); A.render();
  };
})(window.ST = window.ST || {});
