/* Audit di profondità e struttura delle lezioni (deterministico): parole, pagine, esempi, esercizi, domande di verifica, diversità delle opzioni.
   Uso: node tools/audit-depth.js [materia] — stampa le statistiche per materia e gli argomenti sotto soglia. */
const ST = require('../tests/load.js')(); const only = process.argv[2];
const w = s => String(s || '').split(/\s+/).filter(Boolean).length;
const rows = Object.values(ST.content.topics).filter(t => !t.pill && (!only || t.subject === only)).map(t => {
  const words = t.pages.reduce((a, p) => a + w(p.h) + w(p.b), 0), ex = t.pages.reduce((a, p) => a + (String(p.b).match(/^> /gm) || []).length, 0), lists = t.pages.reduce((a, p) => a + (String(p.b).match(/^- /gm) || []).length, 0);
  const types = new Set((t.exercises || []).map(e => e.t)), tq = (t.test || []).length;
  const flags = []; if (words < 700) flags.push('testo breve (' + words + ' parole)'); if (t.pages.length < 6) flags.push('poche pagine (' + t.pages.length + ')'); if (ex < 2) flags.push('pochi esempi (' + ex + ')'); if ((t.exercises || []).length < 8) flags.push('pochi esercizi (' + (t.exercises || []).length + ')'); if (tq < 5) flags.push('verifica breve (' + tq + ')'); if (types.size < 2) flags.push('un solo tipo di esercizio');
  const dupOpt = (t.exercises || []).concat(t.test || []).filter(e => e.o && new Set(e.o.map(x => String(x).toLowerCase())).size < e.o.length).length; if (dupOpt) flags.push(dupOpt + ' quesiti con opzioni duplicate');
  const firstOpt = (t.exercises || []).concat(t.test || []).filter(e => e.t === 'mc'); const ans = firstOpt.map(e => e.a); // posizione della risposta corretta nei dati (prima del mescolamento)
  return { id: t.id, subject: t.subject, stage: t.stage, words, pages: t.pages.length, ex, lists, nEx: (t.exercises || []).length, tq, flags, a0: ans.filter(x => x === 0).length / Math.max(1, ans.length) };
});
const by = {}; rows.forEach(r => { const b = by[r.subject] = by[r.subject] || { n: 0, words: 0, flagged: 0, a0: 0 }; b.n++; b.words += r.words; if (r.flags.length) b.flagged++; b.a0 += r.a0; });
console.log('materia  argomenti  parole/argomento  con segnalazioni  risposta corretta in 1ª posizione (dato grezzo)');
Object.keys(by).forEach(k => { const b = by[k]; console.log(k.padEnd(7), String(b.n).padStart(5), String(Math.round(b.words / b.n)).padStart(14), String(b.flagged).padStart(14), (100 * b.a0 / b.n).toFixed(0) + '%'); });
if (only) rows.filter(r => r.flags.length).forEach(r => console.log(r.id + ': ' + r.flags.join('; ')));
