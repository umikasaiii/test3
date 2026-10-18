/* Quanto spesso la risposta corretta è l'unica opzione più lunga (indizio che rende le domande indovinabili).
   Uso: node tools/audit-length-bias.js — per prefisso di argomento e per la banca cyberBank. */
const ST = require('../tests/load.js')();
const len = s => String(s).length, by = {};
const add = (k, q) => {
  if (!q || !Array.isArray(q.o) || typeof q.a !== 'number' || q.o.length < 3) return;
  const L = q.o.map(len), max = Math.max.apply(null, L), b = by[k] = by[k] || { n: 0, l: 0 };
  b.n++; if (L[q.a] === max && L.filter(x => x === max).length === 1) b.l++;
};
Object.values(ST.content.topics).forEach(t => (t.exercises || []).concat(t.test || []).forEach(q => add(t.id.split('-')[0], q)));
const cb = ST.content.cyberBank || {};
['code', 'stride', 'attack'].forEach(k => (cb[k] || []).forEach(q => add('banca:' + k, q)));
(cb.scenarios || []).forEach(s => (s.steps || []).forEach(q => add('banca:scenari', q)));
Object.keys(by).sort().forEach(k => console.log(k.padEnd(16), (by[k].l + '/' + by[k].n).padEnd(9), (100 * by[k].l / by[k].n).toFixed(0) + '%'));
