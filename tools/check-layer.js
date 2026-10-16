/* Controlla i file dello strato lingua (pilota): node tools/check-layer.js [en|ja] */
const ST = require('../tests/load.js')(); const L = ST.layer, U = ST.util;
/* uso: node tools/check-layer.js [en|ja] [materia]  — controlla tutti i riepiloghi registrati; con la materia segnala gli argomenti mancanti */
const subj = process.argv[3], only0 = process.argv[2];
const topicsOf = su => Object.values(ST.content.topics).filter(t => t.subject === su && !t.pill).map(t => t.id);
const PILOT = subj ? topicsOf(subj) : Array.from(new Set(Object.keys(L.data.en).concat(Object.keys(L.data.ja))));
const KAN = /[一-鿿]/, only = process.argv[2], errs = []; const err = (id, m) => errs.push(id + ': ' + m);
['en', 'ja'].filter(l => !only || l === only).forEach(lang => PILOT.forEach(id => {
  const d = L.get(lang, id); if (!d) return err(lang + ' ' + id, 'manca');
  if (!d.title || !d.title.t || !d.title.it) err(lang + ' ' + id, 'titolo');
  if (!Array.isArray(d.sum) || d.sum.length < 6 || d.sum.length > 7) err(lang + ' ' + id, 'servono 6–7 frasi (ci sono ' + (d.sum || []).length + ')');
  if (!Array.isArray(d.gloss) || d.gloss.length < 8 || d.gloss.length > 20) err(lang + ' ' + id, 'servono 8–20 voci di glossario');
  const gl = new Map((d.gloss || []).map(g => [g.w.toLowerCase(), g])); const used = new Set();
  (d.gloss || []).forEach(g => { if (!g.w || !g.it) err(lang + ' ' + id, 'voce di glossario incompleta'); if (lang === 'ja' && (!g.r || /[^ぁ-ゖァ-ヺー]/.test(g.r))) err(lang + ' ' + id, 'lettura non in kana per ' + g.w); if (lang === 'ja' && g.w && !KAN.test(g.w) && !/[ァ-ヺ]/.test(g.w) && g.w.length < 2) err(lang + ' ' + id, 'voce troppo corta ' + g.w); });
  (d.sum || []).forEach((s, i) => {
    if (!s.t || !s.it) return err(lang + ' ' + id, 'frase ' + i + ' incompleta');
    L.segments(s.t).filter(x => x.g).forEach(x => { used.add(x.plain); if (!gl.has(x.plain.toLowerCase())) err(lang + ' ' + id, 'termine ⟦' + x.plain + '⟧ non è nel glossario'); });
    if (lang === 'ja') {
      const stripped = s.t.replace(/⟦|⟧/g, '').replace(/\[[^|\]]+\|[^\]]+\]/g, '');
      if (KAN.test(stripped)) err(lang + ' ' + id, 'kanji senza furigana in «' + s.t + '»');
      if (/\[|\]|\|/.test(stripped)) err(lang + ' ' + id, 'ruby malformato in «' + s.t + '»');
      s.t.replace(/\[([^|\]]+)\|([^\]]+)\]/g, (_, b, r) => { if (!KAN.test(b) || /[^ぁ-ゖァ-ヺー]/.test(r)) err(lang + ' ' + id, 'ruby errato [' + b + '|' + r + ']'); });
      if (/[^\x20-\x7e]/.test(L.romajiOf(s.t).replace(/[。、？！]/g, ''))) err(lang + ' ' + id, 'romaji con caratteri non latini per «' + s.t + '»');
      if (U.plainText(s.t.replace(/⟦|⟧/g, '')).length > 42) err(lang + ' ' + id, 'frase troppo lunga: «' + s.t + '»');
    } else if (/[぀-ヿ一-鿿]/.test(s.t)) err(lang + ' ' + id, 'caratteri giapponesi nel testo inglese');
  });
  if (used.size < 6) err(lang + ' ' + id, 'almeno 6 termini del glossario devono comparire nelle frasi (' + used.size + ')');
}));
if (errs.length) { console.log(errs.slice(0, 60).join('\n')); console.log('\n' + errs.length + ' problemi'); process.exit(1); }
console.log('Strato lingua valido');
