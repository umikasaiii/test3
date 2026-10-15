/* SkillTree — valutazione multidimensionale, diario delle decisioni e previsioni (Brier solo su esiti risolti). */
(function (ST) {
  'use strict';
  const U = ST.util, T = ST.transfer = {};
  T.KINDS = { recall: 'Richiamo senza aiuti', guided: 'Applicazione guidata', auto: 'Applicazione autonoma', novel: 'Problema nuovo', delayed: 'Ritenzione a distanza', external: 'Uso reale (evidenza esterna)' };
  T.CHECKS = [7, 30, 90];
  const dayN = d => Math.round(Date.parse(d + 'T00:00:00Z') / 864e5);
  const sk = (s, id) => ((s.skills = s.skills || {})[id] = s.skills[id] || { first: U.today(), hist: [], checked: {} });
  /* registra un'evidenza: nessuna "padronanza" automatica, solo dati grezzi */
  T.record = (s, id, kind, ok, o) => {
    o = o || {}; const k = sk(s, id);
    k.hist.push({ d: U.today(), k: kind, ok: !!ok, conf: o.conf == null ? null : o.conf, ms: o.ms || null, help: !!o.help, lv: o.lv || null });
    if (k.hist.length > 80) k.hist.shift();
    if (kind === 'delayed' && o.check) k.checked[o.check] = U.today();
    return k;
  };
  /* indicatori separati, mai un punteggio unico */
  T.dims = (s, id) => {
    const k = (s.skills || {})[id], out = {}; Object.keys(T.KINDS).forEach(x => out[x] = { n: 0, ok: 0 });
    if (!k) return out;
    k.hist.forEach(h => { const o = out[h.k]; if (o) { o.n++; if (h.ok) o.ok++; } });
    const nh = k.hist.filter(h => !h.help), wh = k.hist.filter(h => h.help);
    out.noHelp = { n: nh.length, ok: nh.filter(h => h.ok).length }; out.help = { n: wh.length, ok: wh.filter(h => h.ok).length };
    return out;
  };
  T.pct = o => o && o.n ? Math.round(100 * o.ok / o.n) + '% (' + o.n + ')' : '—';
  /* verifiche a 7/30/90 giorni dalla prima esposizione, solo se non ancora fatte */
  T.due = (s, today) => {
    today = today || U.today(); const out = [];
    Object.keys(s.skills || {}).forEach(id => { const k = s.skills[id]; T.CHECKS.forEach(c => { if (!k.checked[c] && dayN(today) - dayN(k.first) >= c) out.push({ id, check: c }); }); });
    return out;
  };
  /* diario delle decisioni */
  T.jAdd = (s, r) => { const j = (s.journal = s.journal || []); const e = { id: Date.now().toString(36) + j.length, made: U.today(), sit: r.sit || '', goal: r.goal || '', opts: r.opts || '', hyp: r.hyp || '', p: r.p == null ? null : r.p, choice: r.choice || '', why: r.why || '', check: r.check || '', outcome: '', lesson: '', closed: null }; j.push(e); return e; };
  T.jClose = (s, id, outcome, lesson) => { const e = (s.journal || []).find(x => x.id === id); if (!e) return null; e.outcome = outcome; e.lesson = lesson; e.closed = U.today(); return e; };
  T.jDue = (s, today) => (s.journal || []).filter(e => !e.closed && e.check && e.check <= (today || U.today()));
  T.exportJournal = s => JSON.stringify({ app: 'skilltree', kind: 'journal+forecasts', exported: U.today(), journal: s.journal || [], forecasts: s.forecasts || [] }, null, 1);
  /* previsioni: il Brier si calcola solo sugli eventi risolti */
  T.fAdd = (s, q, p, evid, due) => { const f = (s.forecasts = s.forecasts || []); const e = { id: Date.now().toString(36) + f.length, q, made: U.today(), due: due || '', evid: evid || '', revs: [{ d: U.today(), p }], out: null, closed: null }; f.push(e); return e; };
  T.fUpdate = (s, id, p) => { const e = (s.forecasts || []).find(x => x.id === id); if (e && e.out == null) e.revs.push({ d: U.today(), p }); return e; };
  T.fResolve = (s, id, happened) => { const e = (s.forecasts || []).find(x => x.id === id); if (e && e.out == null) { e.out = happened ? 1 : 0; e.closed = U.today(); } return e; };
  T.brier = s => {
    const r = (s.forecasts || []).filter(f => f.out != null); if (!r.length) return null;
    const first = r.reduce((a, f) => a + Math.pow(f.revs[0].p / 100 - f.out, 2), 0) / r.length;
    const last = r.reduce((a, f) => a + Math.pow(f.revs[f.revs.length - 1].p / 100 - f.out, 2), 0) / r.length;
    return { n: r.length, first: +first.toFixed(3), last: +last.toFixed(3), open: (s.forecasts || []).length - r.length };
  };
})(window.ST = window.ST || {});
