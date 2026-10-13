/* SkillTree — Kana Trainer: riconoscimento rapido di hiragana e katakana.
   Gli errori vengono riproposti più spesso (peso adattivo). Tempo massimo consigliato: 3′ al giorno. */
(function (ST) {
  'use strict';
  const U = ST.util;
  const K = ST.kana = {};

  const ROWS = {
    base: [
      ['あいうえお', 'a i u e o'], ['かきくけこ', 'ka ki ku ke ko'], ['さしすせそ', 'sa shi su se so'],
      ['たちつてと', 'ta chi tsu te to'], ['なにぬねの', 'na ni nu ne no'], ['はひふへほ', 'ha hi fu he ho'],
      ['まみむめも', 'ma mi mu me mo'], ['やゆよ', 'ya yu yo'], ['らりるれろ', 'ra ri ru re ro'], ['わを', 'wa wo'], ['ん', 'n']
    ],
    dakuten: [
      ['がぎぐげご', 'ga gi gu ge go'], ['ざじずぜぞ', 'za ji zu ze zo'], ['だぢづでど', 'da ji zu de do'],
      ['ばびぶべぼ', 'ba bi bu be bo'], ['ぱぴぷぺぽ', 'pa pi pu pe po']
    ],
    yoon: [
      ['きゃきゅきょ', 'kya kyu kyo'], ['しゃしゅしょ', 'sha shu sho'], ['ちゃちゅちょ', 'cha chu cho'], ['にゃにゅにょ', 'nya nyu nyo'],
      ['ひゃひゅひょ', 'hya hyu hyo'], ['みゃみゅみょ', 'mya myu myo'], ['りゃりゅりょ', 'rya ryu ryo'], ['ぎゃぎゅぎょ', 'gya gyu gyo'],
      ['じゃじゅじょ', 'ja ju jo'], ['びゃびゅびょ', 'bya byu byo'], ['ぴゃぴゅぴょ', 'pya pyu pyo']
    ]
  };
  const toKata = s => Array.from(s).map(c => String.fromCharCode(c.charCodeAt(0) + 0x60)).join('');

  K.items = [];
  Object.keys(ROWS).forEach(group => ROWS[group].forEach(([chars, romaji]) => {
    const rs = romaji.split(' ');
    const cs = group === 'yoon' ? chars.match(/.[ゃゅょ]/g) : Array.from(chars);
    cs.forEach((c, i) => {
      K.items.push({ id: 'h:' + c, ch: c, ro: rs[i], script: 'hiragana', group });
      K.items.push({ id: 'k:' + toKata(c), ch: toKata(c), ro: rs[i], script: 'katakana', group });
    });
  }));
  K.byId = Object.fromEntries(K.items.map(i => [i.id, i]));

  /* Romaji → hiragana (per accettare risposte digitate su tastiera latina). */
  const R2H = {};
  K.items.filter(i => i.script === 'hiragana').forEach(i => { R2H[i.ro] = i.ch; });
  Object.assign(R2H, { si: 'し', ti: 'ち', tu: 'つ', hu: 'ふ', zi: 'じ', di: 'ぢ', du: 'づ', sya: 'しゃ', syu: 'しゅ', syo: 'しょ', tya: 'ちゃ', tyu: 'ちゅ', tyo: 'ちょ', zya: 'じゃ', zyu: 'じゅ', zyo: 'じょ', jya: 'じゃ', jyu: 'じゅ', jyo: 'じょ', ja: 'じゃ', ju: 'じゅ', jo: 'じょ', wo: 'を', "n'": 'ん', 'xtu': 'っ', 'ltu': 'っ' });
  K.toHiragana = input => {
    let s = String(input).toLowerCase().normalize('NFKC').trim();
    s = Array.from(s).map(c => { const cp = c.charCodeAt(0); return cp >= 0x30A1 && cp <= 0x30F6 ? String.fromCharCode(cp - 0x60) : c; }).join('');
    let out = '', i = 0;
    while (i < s.length) {
      const c = s[i];
      if (/[^a-z']/.test(c)) { out += c === 'ー' ? 'ー' : c; i++; continue; }
      if (c === 'n' && s[i + 1] === 'n') { out += 'ん'; i += /[aiueoy]/.test(s[i + 2] || '') ? 1 : 2; continue; }   // «nn»: ん (konnichi → こんにち)
      if (c === 'n' && (i + 1 === s.length || !/[aiueoy]/.test(s[i + 1]))) { out += 'ん'; i += (s[i + 1] === "'" ? 2 : 1); continue; }
      if (c === s[i + 1] && /[kstpcgzdbhfjmr]/.test(c)) { out += 'っ'; i++; continue; }
      let hit = false;
      for (const len of [3, 2, 1]) {
        const part = s.substr(i, len);
        if (R2H[part]) { out += R2H[part]; i += len; hit = true; break; }
      }
      if (!hit) { out += c; i++; }
    }
    // vocale lunga scritta "ou"/"oo" resta com'è: il confronto avviene sulla lettura kana.
    return out;
  };
  // Confronto tollerante: l'utente può rispondere in kana, katakana o romaji.
  K.sameReading = (answer, reading) => {
    const a = K.toHiragana(U.speechText(answer)).replace(/\s/g, '');
    const r = K.toHiragana(U.speechText(reading)).replace(/\s/g, '');
    return a === r || a.replace(/[ー]/g, '') === r.replace(/[ー]/g, '');
  };

  /* Stato per carattere: {n: prove, ok: corrette, streak, last, w: peso} */
  const rec = (state, id) => (state.kana.items[id] = state.kana.items[id] || { n: 0, ok: 0, streak: 0, last: null, w: 3 });
  K.accuracy = (state, group) => {
    const r = K.items.filter(i => !group || i.group === group).map(i => state.kana.items[i.id]).filter(Boolean);
    const n = r.reduce((a, x) => a + x.n, 0), ok = r.reduce((a, x) => a + x.ok, 0);
    return n ? ok / n : 0;
  };
  K.record = (state, id, correct) => {
    const r = rec(state, id);
    r.n++; r.last = U.today();
    if (correct) { r.ok++; r.streak++; r.w = Math.max(0.4, r.w * (r.streak >= 3 ? 0.6 : 0.8)); }
    else { r.streak = 0; r.w = Math.min(12, r.w * 2); }
  };
  /* Estrae n elementi con probabilità proporzionale al peso (errori più frequenti). */
  K.pickSet = (state, n, groups, rng) => {
    rng = rng || U.rand;
    const pool = K.items.filter(i => groups.includes(i.group));
    const picked = [];
    const left = pool.slice();
    while (picked.length < n && left.length) {
      const ws = left.map(i => (state.kana.items[i.id] ? state.kana.items[i.id].w : 3));
      const tot = ws.reduce((a, b) => a + b, 0);
      let x = rng() * tot, idx = 0;
      while (idx < ws.length - 1 && x > ws[idx]) { x -= ws[idx]; idx++; }
      picked.push(left.splice(idx, 1)[0]);
    }
    return picked;
  };
  K.question = (state, item, rng) => {
    rng = rng || U.rand;
    const same = K.items.filter(i => i.script === item.script && i.id !== item.id);
    const near = U.sample(same, 3, rng);
    const opts = U.shuffle([item].concat(near), rng);
    return { item, options: opts.map(o => o.ro), answer: opts.findIndex(o => o.id === item.id) };
  };
  /* Serve il trainer? Sì finché non c'è un test di posizionamento, poi solo se l'accuratezza cala. */
  K.needsTraining = state => {
    if (!state.kana.placed) return true;
    const acc = K.accuracy(state, 'base');
    const last = state.kana.lastSession;
    if (acc < 0.92) return !last || U.diffDays(last, U.today()) >= 1;
    return !last || U.diffDays(last, U.today()) >= 7;
  };
})(window.ST = window.ST || {});
