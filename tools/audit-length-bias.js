/* Quanto spesso la risposta corretta è l'unica opzione più lunga (indizio che rende le domande indovinabili).
   Uso: node tools/audit-length-bias.js [--topics prefisso] — per prefisso di argomento e per la banca cyberBank;
   con --topics stampa per argomento (id, file di origine non incluso) quante domande hanno la giusta come unica più lunga. */
const ST = require('../tests/load.js')();
const len = s => String(s).length, by = {}, per = {}, ai = process.argv.indexOf('--topics'), tp = ai > 0 ? process.argv[ai + 1] : null;
const add = (k, q, tid) => {
  if (!q || !Array.isArray(q.o) || typeof q.a !== 'number' || q.o.length < 3) return;
  const L = q.o.map(len), max = Math.max.apply(null, L), b = by[k] = by[k] || { n: 0, l: 0 };
  b.n++; const isL = L[q.a] === max && L.filter(x => x === max).length === 1; if (isL) b.l++;
  if (tid) { const p = per[tid] = per[tid] || { n: 0, l: 0 }; p.n++; if (isL) p.l++; }
};
Object.values(ST.content.topics).forEach(t => (t.exercises || []).concat(t.test || []).forEach(q => add(t.id.split('-')[0], q, t.id)));
const cb = ST.content.cyberBank || {};
['code', 'stride', 'attack'].forEach(k => (cb[k] || []).forEach(q => add('banca:' + k, q)));
(cb.scenarios || []).forEach(s => (s.steps || []).forEach(q => add('banca:scenari', q)));
if (tp) { Object.keys(per).filter(i => i.startsWith(tp)).sort().forEach(i => console.log(i, per[i].l + '/' + per[i].n)); process.exit(0); }
Object.keys(by).sort().forEach(k => console.log(k.padEnd(16), (by[k].l + '/' + by[k].n).padEnd(9), (100 * by[k].l / by[k].n).toFixed(0) + '%'));
