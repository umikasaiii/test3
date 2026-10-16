/* SkillTree — Kanji Intelligence: laboratori derivati dalle carte lessicali di giapponese + componenti e letture on/kun curati.
   Riconoscimento (lettura, significato, kanji in comune, componenti, on/kun) e produzione (scrittura del vocabolo) sono tenuti separati. */
(function (ST) {
  'use strict';
  const U = ST.util, KJ = ST.kanji = {};
  const KAN = /[一-鿿]/g;
  KJ.TYPES = ['kjread', 'kjmean', 'kjcommon', 'kjradical', 'kjonkun', 'kjwrite'];
  KJ.LABEL = { kjread: 'Kanji · lettura del vocabolo', kjmean: 'Kanji · significato', kjcommon: 'Kanji · il carattere in comune', kjradical: 'Kanji · componenti (radicali)', kjonkun: 'Kanji · letture on e kun', kjwrite: 'Kanji · scrivere il vocabolo (produzione)' };
  KJ.PRODUCTION = { kjwrite: true };
  const plain = b => String(b).replace(/\[([^|\]]+)\|[^\]]+\]/g, '$1');
  let cache = null;
  /* indice: parole con kanji, dalle carte di tutti gli argomenti di giapponese */
  KJ.index = () => {
    if (cache) return cache;
    const words = [], seen = new Set();
    Object.values(ST.content.topics).filter(t => t.subject === 'jpn').forEach(t => (t.cards || []).forEach(c => {
      const w = plain(c.b); if (!KAN.test(w) || !c.r || seen.has(w)) { KAN.lastIndex = 0; return; } KAN.lastIndex = 0; seen.add(w);
      words.push({ w, r: c.r, f: c.f, topic: t.id });
    }));
    const chars = {}; words.forEach(x => (x.w.match(KAN) || []).forEach(ch => (chars[ch] = chars[ch] || []).push(x)));
    return (cache = { words, chars });
  };
  /* Componenti: ogni kanji elencato contiene il componente del suo gruppo e NESSUNO degli altri componenti del gruppo-elenco (verificato a mano). */
  KJ.RAD = { '氵': ['acqua', '海池泳洗酒河'], '木': ['albero', '林森村校机桜橋'], '言': ['parola, dire', '話語読説記計'], '亻': ['persona', '何作使住他仕'], '扌': ['mano', '持打押投指'], '辶': ['movimento, strada', '道送近遠通'], '艹': ['erba, piante', '花草英'], '糸': ['filo', '紙線終細給'], '金': ['metallo', '銀鉄'], '食': ['cibo, mangiare', '飲飯館'] };
  /* Letture principali (non esaustive) di kanji comuni */
  KJ.ONKUN = { '日': [['ニチ', 'ジツ'], ['ひ', 'か']], '月': [['ゲツ', 'ガツ'], ['つき']], '水': [['スイ'], ['みず']], '火': [['カ'], ['ひ']], '木': [['モク', 'ボク'], ['き']], '金': [['キン'], ['かね']], '土': [['ド', 'ト'], ['つち']], '山': [['サン'], ['やま']], '川': [['セン'], ['かわ']], '人': [['ジン', 'ニン'], ['ひと']], '大': [['ダイ', 'タイ'], ['おお']], '小': [['ショウ'], ['ちい', 'こ']], '学': [['ガク'], ['まな']], '国': [['コク'], ['くに']], '車': [['シャ'], ['くるま']], '食': [['ショク'], ['た', 'く']], '見': [['ケン'], ['み']], '来': [['ライ'], ['く', 'き']], '手': [['シュ'], ['て']], '目': [['モク'], ['め']], '口': [['コウ', 'ク'], ['くち']], '先': [['セン'], ['さき']], '本': [['ホン'], ['もと']] };
  const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  const pickW = (rng, st) => { const ix = KJ.index(); const studied = st && ST.cards && Object.keys(st.cards).filter(id => st.cards[id].kind === 'vocab' && st.cards[id].lang === 'ja').map(id => { const c = st.cards[id], t = ST.content.topic(c.topic), cd = t && (t.cards || []).find(x => x.id === c.cid); return cd && plain(cd.b); }).filter(Boolean);
    const pool = studied && studied.length >= 12 ? ix.words.filter(x => studied.includes(x.w)) : ix.words; return U.pick(pool.length >= 8 ? pool : ix.words, rng); };
  const mk = (type, q, correct, wrongs, why, extra) => { const o = U.shuffle([correct].concat(wrongs), U.rand); return Object.assign({ t: 'mc', mtype: type, q, o, a: o.indexOf(correct), why }, extra || {}); };
  const gen = {};
  gen.kjread = (lv, rng, st) => { const x = pickW(rng, st), ix = KJ.index(); const w = U.sample(ix.words.filter(y => y.r !== x.r && Math.abs(y.r.length - x.r.length) <= 1), 3, rng).map(y => y.r); return mk('kjread', 'Come si legge «' + x.w + '»?', x.r, w, x.w + ' = ' + x.r + ' (' + x.f + ')', { say: { lang: 'ja', text: x.r } }); };
  gen.kjmean = (lv, rng, st) => { const x = pickW(rng, st), ix = KJ.index(); const w = U.sample(ix.words.filter(y => y.f !== x.f), 3, rng).map(y => y.f); return mk('kjmean', 'Che cosa significa «' + x.w + '» (' + x.r + ')?', x.f, w, x.w + ' = ' + x.f); };
  gen.kjcommon = (lv, rng, st) => {
    const ix = KJ.index(), cands = Object.keys(ix.chars).filter(ch => ix.chars[ch].length >= 2); if (!cands.length) return gen.kjread(lv, rng, st);
    const ch = U.pick(cands, rng), two = U.sample(ix.chars[ch], 2, rng), setA = new Set(two[0].w.match(KAN)), setB = new Set(two[1].w.match(KAN));
    const common = Array.from(setA).filter(c => setB.has(c)); if (common.length !== 1) return gen.kjread(lv, rng, st); // risposta unica
    const others = Object.keys(ix.chars).filter(c => !setA.has(c) && !setB.has(c)); const w = U.sample(others, 3, rng);
    return mk('kjcommon', 'Quale carattere compare sia in «' + two[0].w + '» (' + two[0].f + ') sia in «' + two[1].w + '» (' + two[1].f + ')?', common[0], w, 'Il carattere in comune è ' + common[0] + ': ' + two[0].w + ' = ' + two[0].r + ', ' + two[1].w + ' = ' + two[1].r + '.');
  };
  gen.kjradical = (lv, rng) => {
    const ix = KJ.index(), keys = Object.keys(KJ.RAD), k = U.pick(keys, rng), own = KJ.RAD[k][1].split(''), inApp = own.filter(c => ix.chars[c]), a = U.pick(inApp.length ? inApp : own, rng);
    const others = [].concat.apply([], keys.filter(x => x !== k).map(x => KJ.RAD[x][1].split(''))), w = U.sample(others, 3, rng);
    return mk('kjradical', 'Quale di questi kanji contiene il componente «' + k + '» (' + KJ.RAD[k][0] + ')?', a, w, a + ' contiene ' + k + '; il componente suggerisce il campo di significato (' + KJ.RAD[k][0] + '), non lo determina sempre.');
  };
  gen.kjonkun = (lv, rng) => {
    const ks = Object.keys(KJ.ONKUN), k = U.pick(ks, rng), [on, kun] = KJ.ONKUN[k], r = rng(), O = ['On’yomi (lettura di origine cinese)', 'Kun’yomi (lettura giapponese nativa)', 'Non è una lettura di questo kanji'];
    let reading, ans;
    if (r < 0.4) { reading = U.pick(on, rng); ans = O[0]; } else if (r < 0.8) { reading = U.pick(kun, rng); ans = O[1]; }
    else { const other = U.pick(ks.filter(x => x !== k), rng), all = KJ.ONKUN[other][0].concat(KJ.ONKUN[other][1]).filter(x => ![].concat(on, kun).includes(x)); reading = U.pick(all, rng); ans = O[2]; }
    return { t: 'mc', mtype: 'kjonkun', q: 'Per il kanji «' + k + '»: la lettura «' + reading + '» è…', o: O.slice(), a: O.indexOf(ans), why: k + ': on = ' + on.join(', ') + '; kun = ' + kun.join(', ') + ' (letture principali, non esaustive). Il katakana segna convenzionalmente le on, l’hiragana le kun.' };
  };
  gen.kjwrite = (lv, rng, st) => { const ix = KJ.index(), pool = ix.words.filter(x => (x.w.match(KAN) || []).length <= 3 && x.w.length <= 4); const x = pickW(rng, st); const y = (x.w.length <= 4 && (x.w.match(KAN) || []).length <= 3) ? x : U.pick(pool, rng);
    return { t: 'fill', mtype: 'kjwrite', q: 'Scrivi in kanji (e okurigana): «' + y.f + '» (lettura ' + y.r + ')', a: [y.w], why: y.w + ' = ' + y.r, jaReading: false, timed: 60 }; };
  KJ.make = (type, lv, rng, st) => gen[type](lv || 1, rng || U.rand, st);
  KJ.session = (st, n, rng) => { rng = rng || U.rand; const out = []; for (let i = 0; i < (n || 10); i++) out.push(KJ.make(KJ.TYPES[i % KJ.TYPES.length], 1, rng, st)); return out; };
  KJ.record = (st, type, ok) => { const m = ((st.kanji = st.kanji || {})[type] = st.kanji[type] || { n: 0, ok: 0 }); m.n++; if (ok) m.ok++; };
})(window.ST = window.ST || {});
