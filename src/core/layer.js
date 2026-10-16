/* SkillTree — strato lingua (English/Japanese Across SkillTree): riassunti e glossari delle lezioni in inglese e giapponese semplice,
   con scelta della modalità e dell'ambito. Registro: ST.layer.add(lang, topicId, { title:{t,it}, sum:[{t,it}], gloss:[{w,r?,it}] }).
   Nei testi i termini del glossario sono racchiusi tra ⟦ ⟧ (nel giapponese possono contenere ruby [漢字|かな]). */
(function (ST) {
  'use strict';
  const U = ST.util, L = ST.layer = { data: { en: {}, ja: {} } };
  L.MODES = { A: 'Italiano con termini chiave', B: 'Bilingue', C: 'Solo lingua, con supporto a richiesta' };
  L.add = (lang, id, obj) => { L.data[lang][id] = obj; };
  L.get = (lang, id) => (L.data[lang] || {})[id] || null;
  L.has = id => !!(L.data.en[id] || L.data.ja[id]);
  /* --- romaji (Hepburn semplificato; vocali lunghe come scritte nei kana) --- */
  const H = { あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o', か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko', さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so', た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to', な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no', は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho', ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo', や: 'ya', ゆ: 'yu', よ: 'yo', ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro', わ: 'wa', を: 'o', ん: 'n', が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go', ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo', だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do', ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo', ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po', ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o', ゔ: 'vu' };
  const D = { きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo', しゃ: 'sha', しゅ: 'shu', しょ: 'sho', ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho', にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo', ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo', みゃ: 'mya', みゅ: 'myu', みょ: 'myo', りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo', ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo', じゃ: 'ja', じゅ: 'ju', じょ: 'jo', びゃ: 'bya', びゅ: 'byu', びょ: 'byo', ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo', ふぁ: 'fa', ふぃ: 'fi', ふぇ: 'fe', ふぉ: 'fo', てぃ: 'ti', でぃ: 'di', うぃ: 'wi', うぇ: 'we', うぉ: 'wo', しぇ: 'she', じぇ: 'je', ちぇ: 'che' };
  const k2h = s => s.replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
  /* kana → romaji. Le particelle は/へ/を dentro un testo continuo vanno trattate con particle(), vedi sotto. */
  L.romaji = (kana, opt) => {
    const s = k2h(String(kana)), out = []; let i = 0, geminate = false;
    while (i < s.length) {
      const c = s[i], two = s.slice(i, i + 2);
      if (c === 'っ') { geminate = true; i++; continue; }
      if (c === 'ー') { const last = out[out.length - 1] || ''; out.push(last.slice(-1)); i++; continue; }
      let r;
      if (D[two]) { r = D[two]; i += 2; } else if (H[c] !== undefined) { r = H[c]; i++; } else { r = c; i++; }
      if (geminate) { r = (r[0] === 'c' && r[1] === 'h' ? 't' : r[0]) + r; geminate = false; }
      out.push(r);
    }
    return out.join('');
  };
  /* testo con ruby → romaji: parole separate da spazi, particelle isolate (は→wa, へ→e, を→o). Separazione approssimativa, solo di supporto. */
  const PART = ['から', 'まで', 'より', 'では', 'には', 'へは', 'とは', 'は', 'が', 'を', 'に', 'で', 'と', 'の', 'も', 'へ', 'や', 'か'];
  const partRo = p => p === 'は' ? 'wa' : p === 'へ' ? 'e' : p === 'を' ? 'o' : p === 'では' ? 'dewa' : p === 'には' ? 'niwa' : p === 'へは' ? 'ewa' : p === 'とは' ? 'towa' : L.romaji(p);
  L.romajiOf = markup => {
    const src = String(markup).replace(/⟦|⟧/g, ''), toks = []; let i = 0, afterWord = false;
    const hira = /^[ぁ-ゖ]+/, kata = /^[ァ-ヺー]+/;
    while (i < src.length) {
      const rest = src.slice(i), m = /^\[([^|\]]+)\|([^\]]+)\]/.exec(rest);
      if (m) { i += m[0].length; let w = L.romaji(m[2]); const run = hira.exec(src.slice(i)); if (run) { let r = run[0]; const part = PART.find(p => r === p) || ['から', 'まで', 'より', 'では', 'には'].find(p => r.indexOf(p) === 0); if (part && r === part) { toks.push(w, partRo(part)); i += r.length; } else if (part) { toks.push(w, partRo(part)); i += part.length; } else { toks.push(w + L.romaji(r)); i += r.length; } } else toks.push(w); afterWord = true; continue; }
      const k = kata.exec(rest);
      if (k) { i += k[0].length; toks.push(L.romaji(k[0])); afterWord = true; const run = hira.exec(src.slice(i)); if (run) { const r = run[0], part = ['から', 'まで', 'より', 'では', 'には'].find(p => r.indexOf(p) === 0) || PART.find(p => r.indexOf(p) === 0); if (part) { toks.push(partRo(part)); i += part.length; } } continue; }
      const h = hira.exec(rest);
      if (h) { toks.push(L.romaji(h[0]).replace(/^wo/, 'o')); i += h[0].length; continue; }
      const c = rest[0]; toks.push(c === '。' ? '.' : c === '、' ? ',' : c === '？' ? '?' : c === '！' ? '!' : c); i++;
    }
    return toks.join(' ').replace(/ ([.,?!])/g, '$1').replace(/\s+/g, ' ').trim();
  };
  /* spezza «testo ⟦termine⟧ testo» in segmenti */
  L.segments = text => String(text).split(/(⟦[^⟧]+⟧)/).filter(x => x !== '').map(x => x[0] === '⟦' ? { g: true, raw: x.slice(1, -1), plain: U.plainText(x.slice(1, -1)) } : { g: false, raw: x });
  /* ricerca per tap/selezione: glossario della lezione, poi vocabolario noto; restituisce voci {w, r, ro, it} */
  L.lookup = (lang, topicId, query) => {
    const q = U.plainText(String(query)).trim(); if (!q) return [];
    const lay = L.get(lang, topicId), out = [], seen = new Set();
    const push = e => { if (!seen.has(e.w)) { seen.add(e.w); out.push(e); } };
    ((lay && lay.gloss) || []).forEach(g => { if (q === g.w || q.indexOf(g.w) >= 0 || (g.w.indexOf(q) >= 0 && q.length >= 2)) push({ w: g.w, r: g.r || '', ro: g.r ? L.romaji(g.r) : '', it: g.it, src: 'lezione' }); });
    if (lang === 'ja' && ST.kanji) ST.kanji.index().words.forEach(x => { if (out.length < 6 && (q === x.w || (q.length >= 2 && q.indexOf(x.w) >= 0 && x.w.length >= 2))) push({ w: x.w, r: x.r, ro: L.romaji(x.r), it: x.f, src: 'vocabolario' }); });
    if (lang === 'en') Object.values(ST.content.topics).filter(t => t.subject === 'eng').forEach(t => (t.cards || []).forEach(c => { const b = String(c.b).toLowerCase(); if (out.length < 6 && (q.toLowerCase() === b || (b.length >= 4 && q.toLowerCase().indexOf(b) >= 0))) push({ w: c.b, r: '', ro: '', it: c.f, src: 'vocabolario' }); }));
    return out.slice(0, 6);
  };
  /* risoluzione: lezione → materia → tutte; livello e lingua attivi per un argomento */
  L.resolve = (settings, topic) => {
    const o = (settings && settings.lang) || {}, tryLv = (lv, key) => { const x = (o[lv] || {})[key]; return x ? { lang: x.lang, mode: x.mode, level: lv } : null; };
    return tryLv('lesson', topic.id) || tryLv('subject', topic.subject) || (o.all ? { lang: o.all.lang, mode: o.all.mode, level: 'all' } : null) || { lang: 'it', mode: 'A', level: 'default' };
  };
  /* un ambito più ampio sostituisce le scelte più strette (altrimenti un «torna all'italiano» di una lezione resterebbe per sempre) */
  L.set = (settings, level, key, lang, mode, subjectOf) => {
    const o = (settings.lang = settings.lang || { lesson: {}, subject: {}, all: null, last: { lang: 'en', mode: 'A' } });
    o.lesson = o.lesson || {}; o.subject = o.subject || {};
    if (level === 'all') { o.all = { lang, mode }; o.lesson = {}; o.subject = {}; }
    else if (level === 'subject') { o.subject[key] = { lang, mode }; Object.keys(o.lesson).forEach(id => { if (subjectOf && subjectOf(id) === key) delete o.lesson[id]; }); }
    else o.lesson[key] = { lang, mode };
    if (lang !== 'it') o.last = { lang, mode };
    return o;
  };
})(window.ST = window.ST || {});
