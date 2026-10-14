/* SkillTree — esercizi grammaticali generati (nessuna IA: tabelle di forme + regole).
   Ogni domanda ha una diagnosi specifica dell'errore, calcolata confrontando la risposta con le altre forme dello stesso verbo/aggettivo. */
(function (ST) {
  'use strict';
  const U = ST.util, D = ST.drills = {};

  /* ---- Giapponese: verbi (dizionario, kanji opzionale, gruppo) ---- */
  // [kanji, dizionario(kana), gruppo] gruppo: 1 = godan (u), 2 = ichidan (ru), 3 = irregolare
  D.JV = [
    ['食べる', 'たべる', 2], ['見る', 'みる', 2], ['起きる', 'おきる', 2], ['寝る', 'ねる', 2], ['出る', 'でる', 2], ['着る', 'きる', 2], ['開ける', 'あける', 2], ['教える', 'おしえる', 2], ['覚える', 'おぼえる', 2],
    ['飲む', 'のむ', 1], ['書く', 'かく', 1], ['行く', 'いく', 1], ['話す', 'はなす', 1], ['待つ', 'まつ', 1], ['買う', 'かう', 1], ['読む', 'よむ', 1], ['聞く', 'きく', 1], ['泳ぐ', 'およぐ', 1],
    ['遊ぶ', 'あそぶ', 1], ['死ぬ', 'しぬ', 1], ['帰る', 'かえる', 1], ['作る', 'つくる', 1], ['会う', 'あう', 1], ['走る', 'はしる', 1], ['使う', 'つかう', 1], ['持つ', 'もつ', 1], ['立つ', 'たつ', 1],
    ['する', 'する', 3], ['来る', 'くる', 3]
  ];
  const GODAN = { う: ['い', 'わ', 'って', 'った'], つ: ['ち', 'た', 'って', 'った'], る: ['り', 'ら', 'って', 'った'], む: ['み', 'ま', 'んで', 'んだ'], ぶ: ['び', 'ば', 'んで', 'んだ'], ぬ: ['に', 'な', 'んで', 'んだ'],
    く: ['き', 'か', 'いて', 'いた'], ぐ: ['ぎ', 'が', 'いで', 'いだ'], す: ['し', 'さ', 'して', 'した'] };
  /* Coniuga: restituisce {masu, te, nai, ta}. */
  D.conj = (dict, group) => {
    if (group === 3) return dict === 'する' ? { masu: 'します', te: 'して', nai: 'しない', ta: 'した' } : { masu: 'きます', te: 'きて', nai: 'こない', ta: 'きた' };
    const stem = dict.slice(0, -1), end = dict.slice(-1);
    if (group === 2) return { masu: stem + 'ます', te: stem + 'て', nai: stem + 'ない', ta: stem + 'た' };
    const g = GODAN[end];
    let te = stem + g[2], ta = stem + g[3];
    if (dict === 'いく') { te = 'いって'; ta = 'いった'; }
    return { masu: stem + g[0] + 'ます', te, nai: stem + g[1] + 'ない', ta };
  };
  const JF = { masu: 'forma ます (cortese)', te: 'forma て', nai: 'forma negativa ない', ta: 'forma passata た' };
  const TE_RULE = { う: 'う・つ・る → って', つ: 'う・つ・る → って', る: 'う・つ・る → って', む: 'む・ぶ・ぬ → んで', ぶ: 'む・ぶ・ぬ → んで', ぬ: 'む・ぶ・ぬ → んで', く: 'く → いて (行く è l’eccezione: いって)', ぐ: 'ぐ → いで', す: 'す → して' };
  const jaItem = (v, form, rng) => {
    const [kj, dict, g] = v, all = D.conj(dict, g), ans = all[form];
    const okuri = (kj.match(/[^\u4e00-\u9fff]*$/) || [''])[0].length, disp = kj === dict ? dict : '[' + kj.slice(0, kj.length - okuri) + '|' + dict.slice(0, dict.length - okuri) + ']' + kj.slice(kj.length - okuri);
    const kana = ST.kana.toHiragana;
    const why = (g === 1 ? 'Verbo godan (u): ' + (form === 'te' || form === 'ta' ? TE_RULE[dict.slice(-1)] : 'la vocale finale cambia (' + dict.slice(-1) + ' → ' + (form === 'masu' ? GODAN[dict.slice(-1)][0] : GODAN[dict.slice(-1)][1]) + ')') : g === 2 ? 'Verbo ichidan: si toglie る e si aggiunge la terminazione.' : 'Verbo irregolare: si memorizza.') + ' → ' + ans;
    return { t: 'fill', ja: true, q: 'Scrivi la ' + JF[form] + ' di ' + disp + ' (' + dict + ')', a: [ans], why,
      diag: val => {
        const k = kana(String(val).trim());
        for (const f of Object.keys(all)) if (f !== form && all[f] === k) return 'Hai scritto la ' + JF[f] + ': qui serve la ' + JF[form] + '.';
        if (g === 1 && (form === 'te' || form === 'ta') && /(て|た)$/.test(k) && k !== ans) return 'Regola godan: ' + TE_RULE[dict.slice(-1)] + (dict === 'いく' ? '' : '.');
        if (g === 1 && k === dict.slice(0, -1) + (form === 'te' ? 'て' : form === 'ta' ? 'た' : form === 'nai' ? 'ない' : 'ます')) return 'Hai trattato il verbo come ichidan (togliere る): è un verbo godan.';
        return '';
      } };
  };

  /* ---- Inglese: verbi irregolari e gradi dell'aggettivo ---- */
  D.EV = [['go', 'went', 'gone'], ['see', 'saw', 'seen'], ['take', 'took', 'taken'], ['give', 'gave', 'given'], ['eat', 'ate', 'eaten'], ['write', 'wrote', 'written'], ['drive', 'drove', 'driven'], ['speak', 'spoke', 'spoken'],
    ['break', 'broke', 'broken'], ['choose', 'chose', 'chosen'], ['forget', 'forgot', 'forgotten'], ['begin', 'began', 'begun'], ['drink', 'drank', 'drunk'], ['swim', 'swam', 'swum'], ['sing', 'sang', 'sung'], ['run', 'ran', 'run'],
    ['come', 'came', 'come'], ['become', 'became', 'become'], ['buy', 'bought', 'bought'], ['bring', 'brought', 'brought'], ['think', 'thought', 'thought'], ['teach', 'taught', 'taught'], ['catch', 'caught', 'caught'], ['build', 'built', 'built'],
    ['send', 'sent', 'sent'], ['spend', 'spent', 'spent'], ['leave', 'left', 'left'], ['meet', 'met', 'met'], ['sell', 'sold', 'sold'], ['tell', 'told', 'told'], ['find', 'found', 'found'], ['keep', 'kept', 'kept'], ['sleep', 'slept', 'slept'],
    ['feel', 'felt', 'felt'], ['know', 'knew', 'known'], ['grow', 'grew', 'grown'], ['throw', 'threw', 'thrown'], ['fly', 'flew', 'flown'], ['wear', 'wore', 'worn'], ['steal', 'stole', 'stolen'], ['fall', 'fell', 'fallen'], ['win', 'won', 'won'],
    ['lose', 'lost', 'lost'], ['pay', 'paid', 'paid'], ['say', 'said', 'said'], ['hear', 'heard', 'heard'], ['stand', 'stood', 'stood'], ['understand', 'understood', 'understood']];
  D.EA = [['big', 'bigger', 'biggest'], ['happy', 'happier', 'happiest'], ['good', 'better', 'best'], ['bad', 'worse', 'worst'], ['cheap', 'cheaper', 'cheapest'], ['easy', 'easier', 'easiest'], ['hot', 'hotter', 'hottest'],
    ['expensive', 'more expensive', 'most expensive'], ['interesting', 'more interesting', 'most interesting'], ['dangerous', 'more dangerous', 'most dangerous'], ['early', 'earlier', 'earliest'], ['far', 'further', 'furthest'], ['funny', 'funnier', 'funniest'], ['thin', 'thinner', 'thinnest']];
  const enVerb = (v, kind) => {
    const [b, p, pp] = v, ans = kind === 'past' ? p : pp;
    return { t: 'fill', q: kind === 'past' ? 'Past simple di «' + b + '» (yesterday I ___)' : 'Past participle di «' + b + '» (I have ___)', a: [ans], why: b + ' → ' + p + ' → ' + pp,
      diag: val => {
        const x = String(val).trim().toLowerCase();
        if (kind === 'past' && x === pp && p !== pp) return 'Quella è la forma del participio (' + pp + '): per il passato semplice serve «' + p + '».';
        if (kind === 'pp' && x === p && p !== pp) return 'Quella è la forma del passato semplice (' + p + '): dopo «have» serve il participio «' + pp + '».';
        if (x === b + 'ed' || x === b + 'd' || x === b.replace(/y$/, 'i') + 'ed') return '«' + b + '» è irregolare: non prende -ed.';
        if (x === b) return 'Hai scritto la forma base: serve la forma ' + (kind === 'past' ? 'del passato' : 'del participio') + '.';
        return '';
      } };
  };
  const enAdj = (v, kind) => {
    const [b, c, s] = v, ans = kind === 'comp' ? c : s;
    return { t: 'fill', q: (kind === 'comp' ? 'Comparativo' : 'Superlativo') + ' di «' + b + '» (' + (kind === 'comp' ? 'This is ___ than that' : 'This is the ___ of all') + ')', a: [ans], why: b + ' → ' + c + ' → ' + s,
      diag: val => {
        const x = String(val).trim().toLowerCase();
        if (kind === 'comp' && x === s) return 'Quello è il superlativo: qui serve il comparativo «' + c + '».';
        if (kind === 'sup' && x === c) return 'Quello è il comparativo: il superlativo è «' + s + '».';
        if (/^(more|most) /.test(ans) && /(er|est)$/.test(x)) return 'Aggettivo lungo: si usa more/most, non -er/-est.';
        if (!/^(more|most) /.test(ans) && /^(more|most) /.test(x)) return 'Aggettivo breve o irregolare: si usa -er/-est (o una forma irregolare).';
        if (x === b + 'er' || x === b + 'est') return 'Attenzione all’ortografia o all’irregolarità (' + ans + ').';
        return '';
      } };
  };

  /* Genera n domande miste e senza ripetizioni. */
  D.generate = (lang, n, rng) => {
    const r = rng || U.rand, out = [];
    if (lang === 'ja') {
      const forms = ['masu', 'te', 'nai', 'ta'];
      U.sample(D.JV, Math.min(n, D.JV.length), r).forEach(v => out.push(jaItem(v, U.pick(forms, r), r)));
    } else {
      const vs = U.sample(D.EV, Math.max(1, Math.ceil(n * 0.7)), r).map(v => enVerb(v, r() < 0.5 ? 'past' : 'pp'));
      const as = U.sample(D.EA, Math.max(1, n - vs.length), r).map(v => enAdj(v, r() < 0.5 ? 'comp' : 'sup'));
      out.push(...vs, ...as);
    }
    return U.shuffle(out, r).slice(0, n);
  };
})(window.ST = window.ST || {});
