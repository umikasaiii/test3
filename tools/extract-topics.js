/* Estrae una versione compatta degli argomenti di una materia (titolo, obiettivi, titoli di pagina, prima frase, termini in grassetto)
   per scrivere i riepiloghi senza rileggere ogni lezione: node tools/extract-topics.js <materia> > out.json */
const ST = require('../tests/load.js')(); const subj = process.argv[2];
const first = b => String(b).replace(/\*\*/g, '').replace(/^[->]\s*/gm, '').split(/\n+/).filter(Boolean)[0].split(/(?<=[.!?])\s/).slice(0, 2).join(' ').slice(0, 260);
const out = Object.values(ST.content.topics).filter(t => t.subject === subj && !t.pill).map(t => ({ id: t.id, title: t.title, summary: t.summary, objectives: t.objectives || [],
  pages: t.pages.map(p => ({ h: p.h, k: first(p.b) })), terms: [...new Set(t.pages.flatMap(p => (p.b.match(/\*\*[^*]{3,40}\*\*/g) || []).map(m => m.slice(2, -2).replace(/[:.;,]+$/, '').trim())))].slice(0, 14) }));
console.log(JSON.stringify(out, null, 1));
