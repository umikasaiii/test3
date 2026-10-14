#!/usr/bin/env node
/* Validazione strutturale dei contenuti: id, prerequisiti, risposte, ruby, copertura. Esce con codice 1 se ci sono errori. */
const load = require('../tests/load.js');
const ST = load();
const C = ST.content;
const errs = [], warns = [];
const E = m => errs.push(m), W = m => warns.push(m);
const HAN = /[㐀-鿿]/;
const bareKanji = s => HAN.test(String(s).replace(/\[([^\]|]+)\|([^\]]+)\]/g, ''));
const seen = new Set();
const checkItem = (it, where, lang) => {
  if (!it.t) return E(where + ': tipo mancante');
  if (it.t === 'mc') {
    if (!Array.isArray(it.o) || it.o.length < 2) E(where + ': opzioni insufficienti');
    else {
      if (!(it.a >= 0 && it.a < it.o.length)) E(where + ': indice risposta fuori range');
      if (new Set(it.o).size !== it.o.length) E(where + ': opzioni duplicate (' + it.q + ')');
    }
    if (!it.q) E(where + ': testo domanda mancante');
  } else if (it.t === 'fill') { if (!it.a || !it.a.length) E(where + ': risposte mancanti'); if (!it.q) E(where + ': q mancante'); }
  else if (it.t === 'order') { if (!it.words || it.words.length < 2) E(where + ': parole insufficienti'); }
  else E(where + ': tipo sconosciuto ' + it.t);
  if (it.say && !it.say.text) E(where + ': say senza testo');
};
const topics = Object.values(C.topics);
topics.forEach(t => {
  const w = t.id;
  if (seen.has(w)) E('id duplicato ' + w); seen.add(w);
  if (!C.subject(t.subject)) E(w + ': materia sconosciuta');
  const subj = C.subject(t.subject);
  if (subj && !subj.stages.some(s => s.id === t.stage)) E(w + ': stage ' + t.stage + ' inesistente');
  (t.prereq || []).forEach(p => { if (!C.topics[p]) E(w + ': prerequisito mancante ' + p); });
  const minPages = t.pill ? 3 : t.subject === 'grp' ? 3 : 6;
  if (!t.pages || t.pages.length < minPages) E(w + ': poche pagine (' + (t.pages || []).length + ')');
  (t.pages || []).forEach((p, i) => { if (!p.h || !p.b) E(w + ': pagina ' + i + ' vuota'); const m = String(p.b).match(/\{\{([^|}]+)\|/g) || []; m.forEach(x => { const l = x.slice(2, -1); if (!['en-GB', 'en-US', 'en-AU', 'ja'].includes(l)) E(w + ': lingua audio sconosciuta ' + l); }); });
  const lang = t.subject === 'eng' ? 'en' : t.subject === 'jpn' ? 'ja' : null;
  const minEx = t.pill ? 3 : 6, minTest = t.pill ? 2 : 4;
  if (!t.exercises || t.exercises.length < minEx) E(w + ': pochi esercizi');
  if (!t.test || t.test.length < minTest) E(w + ': poche domande di verifica');
  (t.exercises || []).forEach((x, i) => checkItem(x, w + ' ex' + i, lang));
  (t.test || []).forEach((x, i) => checkItem(x, w + ' test' + i, lang));
  // la verifica non deve duplicare gli esercizi
  const exq = new Set((t.exercises || []).map(x => x.q)); (t.test || []).forEach((x, i) => { if (exq.has(x.q)) W(w + ': test' + i + ' ripete un esercizio'); });
  if (lang) {
    if (!t.cards || t.cards.length < 6) E(w + ': poche carte lessicali');
    (t.cards || []).forEach(c => { if (!c.id || !c.f || !c.b) E(w + ': carta incompleta'); if (lang === 'ja' && !c.r) E(w + ': carta giapponese senza lettura ' + c.id); });
    const cid = (t.cards || []).map(c => c.id); if (new Set(cid).size !== cid.length) E(w + ': id carta duplicati');
    if (!t.listening || !t.listening.length) E(w + ': nessun ascolto');
    (t.listening || []).forEach(l => { if (!l.text || !l.qs || l.qs.length < 3) E(w + ': ascolto con poche domande'); (l.qs || []).forEach((q, i) => checkItem(Object.assign({ t: 'mc' }, q), w + ' lis' + i, lang)); if (lang === 'ja' && bareKanji(l.text)) E(w + ': kanji senza ruby nell’ascolto'); });
    (t.dictation || []).forEach(d => { if (lang === 'ja' && bareKanji(d.text)) E(w + ': kanji senza ruby nel dettato: ' + d.text); });
    if ((t.dictation || []).length < 3) E(w + ': dettato < 3');
    (t.shadowing || []).forEach(d => { if (lang === 'ja' && bareKanji(d.text)) E(w + ': kanji senza ruby nello shadowing'); });
    if ((t.shadowing || []).length < 3) E(w + ': shadowing < 3');
    (t.speaking || []).forEach(d => { if (!d.prompt || !d.model) E(w + ': speaking incompleto'); });
    if ((t.speaking || []).length < 2) E(w + ': speaking < 2');
    (t.reading || []).forEach(r => { r.qs.forEach((q, i) => checkItem(Object.assign({ t: 'mc' }, q), w + ' read' + i, lang)); });
  }
});
// pool B2
['listening', 'reading'].forEach(k => (C.gate[k] || []).forEach(p => { if (!p.qs || p.qs.length < 4) E('gate ' + p.id + ': poche domande'); (p.qs || []).forEach((q, i) => checkItem(Object.assign({ t: 'mc' }, q), 'gate ' + p.id + ' q' + i)); }));
if (C.gate.listening.length < 6) W('pool ascolto B2 con meno di 6 prove: il gate in-app non è raggiungibile');
if (C.gate.reading.length < 6) W('pool lettura B2 con meno di 6 prove (' + C.gate.reading.length + '): il gate lettura in-app non è raggiungibile finché non si aggiungono prove');
// dialoghi
C.dialogues.forEach(d => { Object.entries(d.nodes).forEach(([k, n]) => n.c.forEach(c => { if (c.next !== 'end' && !d.nodes[c.next]) E('dialogo ' + d.id + ': nodo ' + c.next + ' mancante'); })); });
['en', 'ja'].forEach(l => { const n = C.dialogues.filter(d => d.lang === l).length; if (n < 8) E('dialoghi ' + l + ' < 8'); });
C.dialogues.forEach(d => { const ok = d.lang === 'en' ? ['B1', 'B1+', 'B2'] : ['J1', 'J2', 'J3', 'J4', 'J5']; if (!ok.includes(d.level)) E('dialogo ' + d.id + ': livello ' + d.level); Object.values(d.nodes).forEach(n => { if (n.c.length < 3 || !n.c.some(c => c.q === 2)) E('dialogo ' + d.id + ': nodo senza scelta migliore'); }); });
['en', 'ja'].forEach(l => { if (C.resources.items.filter(x => x.lang === l).length < 12) E('risorse ' + l + ' < 12'); });
// judo
const J = C.judo.techniques; const jid = new Set(J.map(t => t.id));
if (jid.size !== J.length) E('judo: id duplicati');
C.judo.combos.forEach(c => c.ids.forEach(i => { if (!jid.has(i)) E('combo con tecnica sconosciuta ' + i); }));
J.forEach(t => { if (!t.cues || t.cues.length < 3) E('judo ' + t.id + ': poche indicazioni'); if (!t.errors || !t.errors.length) E('judo ' + t.id + ': errori mancanti'); if (!t.variants || t.variants.length < 3) E('judo ' + t.id + ': varianti < 3'); });
if (J.length < 12) E('repertorio judo troppo piccolo: ' + J.length);
J.forEach(t => { if (!C.topics['jud-' + t.id]) E('judo: manca la lezione approfondita jud-' + t.id); if (!t.gi) W('judo: tecnica senza campo gi: ' + t.id); });
['ogoshi-full','osoto-full','seoi-full','ouchi-full','kouchi-full','taiotoshi-full','harai-goshi-full','uchimata-full','kosoto-full','koshi-guruma-full'].forEach(id => { const t = J.find(x => x.id === id); if (!t || t.gi !== 'no-gi') E('judo: proiezione non no-gi: ' + id); });
// riepilogo
const by = {}; topics.forEach(t => { const b = by[t.subject] = by[t.subject] || { n: 0, w: 0, ex: 0, test: 0, cards: 0, lis: 0 }; b.n++; b.w += JSON.stringify(t.pages).split(/\s+/).length; b.ex += t.exercises.length; b.test += t.test.length; b.cards += (t.cards || []).length; b.lis += (t.listening || []).length; });
console.log('Argomenti:', topics.length);
Object.entries(by).forEach(([k, v]) => console.log(' ', k.padEnd(6), JSON.stringify(v)));
// banche cybersecurity (code review, STRIDE, ATT&CK, scenari)
const CB = C.cyberBank || { code: [], stride: [], attack: [], scenarios: [] };
['code', 'stride', 'attack'].forEach(k => { const ids = new Set(); CB[k].forEach(x => { if (ids.has(x.id)) E('cyberBank ' + k + ': id duplicato ' + x.id); ids.add(x.id); if (!x.q || !Array.isArray(x.o) || x.o.length !== 4 || new Set(x.o).size !== 4 || !(x.a >= 0 && x.a < 4) || !x.why) E('cyberBank ' + k + ' ' + x.id + ': voce incompleta'); if (!(x.level >= 1 && x.level <= 5)) E('cyberBank ' + k + ' ' + x.id + ': livello'); }); });
CB.scenarios.forEach(sc => { if (!sc.title || !sc.intro || !sc.steps || sc.steps.length < 5) E('scenario ' + sc.id + ': incompleto'); (sc.steps || []).forEach((st, i) => { if (!st.q || !st.o || st.o.length !== 4 || new Set(st.o).size !== 4 || !(st.a >= 0 && st.a < 4) || !st.why) E('scenario ' + sc.id + ' passo ' + (i + 1) + ': incompleto'); }); });
if (CB.code.length < 40 || CB.stride.length < 20 || CB.attack.length < 20 || CB.scenarios.length < 8) E('cyberBank sotto le soglie minime');
console.log('Cyber: code', CB.code.length, 'stride', CB.stride.length, 'attack', CB.attack.length, 'scenari', CB.scenarios.length);
console.log('Gate B2: ascolto', C.gate.listening.length, 'lettura', C.gate.reading.length, '· Dialoghi', C.dialogues.length, '· Lettura pratica EN', C.readingPractice.en.length);
warns.forEach(w => console.log('ATTENZIONE', w));
errs.forEach(e => console.log('ERRORE', e));
console.log(errs.length ? errs.length + ' errori' : 'Contenuti validi');
process.exit(errs.length ? 1 : 0);
