/* Controlla i file dello strato lingua (pilota): node tools/check-layer.js [en|ja] */
const ST = require('../tests/load.js')(); const L = ST.layer, U = ST.util;
const PILOT = ['moto-citta-e-traffico', 'moto-urb-percezione-smidsy', 'moto-urb-angoli-ciechi', 'moto-urb-incroci-precedenze', 'moto-urb-spazio-arresto', 'moto-urb-fondi-rotaie-bagnato', 'moto-urb-utenti-vulnerabili', 'moto-urb-filtraggio', 'moto-urb-manovre-parcheggio', 'moto-urb-visibilita-notte-pioggia', 'moto-urb-scenari-scooter-passeggero'];
const KAN = /[一-鿿]/, only = process.argv[2], errs = []; const err = (id, m) => errs.push(id + ': ' + m);
['en', 'ja'].filter(l => !only || l === only).forEach(lang => PILOT.forEach(id => {
  const d = L.get(lang, id); if (!d) return err(lang + ' ' + id, 'manca');
  if (!d.title || !d.title.t || !d.title.it) err(lang + ' ' + id, 'titolo');
  if (!Array.isArray(d.sum) || d.sum.length < 6 || d.sum.length > 7) err(lang + ' ' + id, 'servono 6–7 frasi (ci sono ' + (d.sum || []).length + ')');
  if (!Array.isArray(d.gloss) || d.gloss.length < 8 || d.gloss.length > 12) err(lang + ' ' + id, 'servono 8–12 voci di glossario');
  const gl = new Map((d.gloss || []).map(g => [g.w, g])); const used = new Set();
  (d.gloss || []).forEach(g => { if (!g.w || !g.it) err(lang + ' ' + id, 'voce di glossario incompleta'); if (lang === 'ja' && (!g.r || /[^ぁ-ゖァ-ヺー]/.test(g.r))) err(lang + ' ' + id, 'lettura non in kana per ' + g.w); if (lang === 'ja' && g.w && !KAN.test(g.w) && !/[ァ-ヺ]/.test(g.w) && g.w.length < 2) err(lang + ' ' + id, 'voce troppo corta ' + g.w); });
  (d.sum || []).forEach((s, i) => {
    if (!s.t || !s.it) return err(lang + ' ' + id, 'frase ' + i + ' incompleta');
    L.segments(s.t).filter(x => x.g).forEach(x => { used.add(x.plain); if (!gl.has(x.plain)) err(lang + ' ' + id, 'termine ⟦' + x.plain + '⟧ non è nel glossario'); });
    if (lang === 'ja') {
      const stripped = s.t.replace(/⟦|⟧/g, '').replace(/\[[^|\]]+\|[^\]]+\]/g, '');
      if (KAN.test(stripped)) err(lang + ' ' + id, 'kanji senza furigana in «' + s.t + '»');
      if (/\[|\]|\|/.test(stripped)) err(lang + ' ' + id, 'ruby malformato in «' + s.t + '»');
      s.t.replace(/\[([^|\]]+)\|([^\]]+)\]/g, (_, b, r) => { if (!KAN.test(b) || /[^ぁ-ゖァ-ヺー]/.test(r)) err(lang + ' ' + id, 'ruby errato [' + b + '|' + r + ']'); });
      if (/[^\x20-\x7e]/.test(L.romajiOf(s.t).replace(/[。、？！]/g, ''))) err(lang + ' ' + id, 'romaji con caratteri non latini per «' + s.t + '»');
      if (s.t.length > 60) err(lang + ' ' + id, 'frase troppo lunga: «' + s.t + '»');
    } else if (/[぀-ヿ一-鿿]/.test(s.t)) err(lang + ' ' + id, 'caratteri giapponesi nel testo inglese');
  });
  if (used.size < 6) err(lang + ' ' + id, 'almeno 6 termini del glossario devono comparire nelle frasi (' + used.size + ')');
}));
// pagine tradotte (prova CIA): stesse pagine dell'italiano, marcatori nel glossario, kanji con furigana
const CIA = 'cyb-triade-cia-e-minacce', it = ST.content.topics[CIA];
['en', 'ja'].filter(l => !only || l === only).forEach(lang => {
  const d = L.get(lang, CIA), id = lang + ' ' + CIA; if (!d) return err(id, 'manca');
  if (!d.pages || d.pages.length !== it.pages.length) return err(id, 'servono ' + it.pages.length + ' pagine');
  const gl = new Set(d.gloss.map(g => g.w.toLowerCase()));
  d.pages.forEach((p, i) => {
    if (!p.h || !p.b) err(id, 'pagina ' + i + ' vuota');
    (p.b.match(/⟦[^⟧]+⟧/g) || []).forEach(m => { const plain = U.plainText(m.slice(1, -1)); if (!gl.has(plain.toLowerCase())) err(id, 'p' + i + ': termine ⟦' + plain + '⟧ non è nel glossario'); });
    if (lang === 'ja') { [p.h, p.b].forEach(t => { const st = t.replace(/\[[^|\]]+\|[^\]]+\]/g, '').replace(/⟦|⟧/g, ''); if (KAN.test(st)) err(id, 'p' + i + ': kanji senza furigana: ' + (st.match(/.{0,6}[一-鿿]+.{0,6}/) || [''])[0]); if (/[\[\]|]/.test(st)) err(id, 'p' + i + ': ruby malformato'); }); }
    else if (/[぀-ヿ一-鿿]/.test(p.h + p.b)) err(id, 'p' + i + ': caratteri giapponesi nel testo inglese');
    // stessa struttura dell'italiano: stesso numero di elenchi e di esempi
    const cnt = (t, re) => (t.match(re) || []).length;
    if (cnt(p.b, /^- /gm) !== cnt(it.pages[i].b, /^- /gm) || cnt(p.b, /^> /gm) !== cnt(it.pages[i].b, /^> /gm)) err(id, 'p' + i + ': struttura diversa dall’italiano (elenchi/esempi)');
  });
  // riepilogo, obiettivi, esercizi e verifica: stesso numero, stesse opzioni, stesso tipo dell'italiano
  if (!d.summary || !d.objectives || d.objectives.length !== it.objectives.length) err(id, 'riepilogo/obiettivi mancanti');
  [['ex', it.exercises], ['test', it.test]].forEach(([k, src]) => {
    const tr = d[k]; if (!tr || tr.length !== src.length) return err(id, k + ': servono ' + src.length + ' voci');
    tr.forEach((x, i) => { const o = src[i], tag = id + ' ' + k + i;
      if (!x.q || !x.why) err(tag, 'q/why mancanti');
      if (o.t === 'mc') { if (!x.o || x.o.length !== o.o.length || new Set(x.o).size !== x.o.length) err(tag, 'opzioni diverse dall’italiano (' + (x.o || []).length + ' vs ' + o.o.length + ')'); }
      if (o.t === 'fill') { if (!x.a || !x.a.length) err(tag, 'risposte mancanti'); }
      if (o.t === 'order') { if (!x.words || x.words.length !== o.words.length) err(tag, 'parole dell’ordinamento: servono ' + o.words.length); }
      if (lang === 'ja') [x.q, x.why].concat(x.o || [], x.words || []).forEach(t => { const st = String(t).replace(/\[[^|\]]+\|[^\]]+\]/g, ''); if (KAN.test(st)) err(tag, 'kanji senza furigana: ' + (st.match(/.{0,5}[\u4e00-\u9fff]+.{0,5}/) || [''])[0]); });
      else if (/[\u3040-\u30ff\u4e00-\u9fff]/.test(x.q + (x.o || []).join(''))) err(tag, 'caratteri giapponesi nel testo inglese');
    });
  });
  d.gloss.forEach(g => { if (lang === 'ja' && (!g.r || /[^ぁ-ゖァ-ヺー]/.test(g.r))) err(id, 'lettura non in kana per ' + g.w); });
});
if (errs.length) { console.log(errs.slice(0, 60).join('\n')); console.log('\n' + errs.length + ' problemi'); process.exit(1); }
console.log('Strato lingua valido');
