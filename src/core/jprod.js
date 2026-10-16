/* SkillTree — produzione attiva di giapponese: tradurre, trasformare forme, ricostruire dialoghi, scegliere la frase adatta.
   Le risposte scritte sono confrontate con le versioni accettate (kana o romaji senza spazi): una frase corretta ma diversa
   può essere rifiutata, quindi la soluzione mostrata è un modello, non l'unica possibile. Nessuna valutazione orale. */
(function (ST) {
  'use strict';
  const U = ST.util, JP = ST.jprod = {};
  JP.TYPES = ['jptrans', 'jptransform', 'jpdialog', 'jpdesc'];
  JP.LABEL = { jptrans: 'Giapponese · tradurre (scrittura)', jptransform: 'Giapponese · trasformare le forme', jpdialog: 'Giapponese · ricostruire un dialogo', jpdesc: 'Giapponese · la frase per la situazione' };
  JP.PRODUCTION = { jptrans: true, jptransform: true, jpdialog: true, jpdesc: false };
  // [italiano, [versioni accettate in kana]]
  const wa = x => ['わたしは' + x, x]; // soggetto esplicito o omesso
  JP.TRANS = [
    ['Sono studente.', wa('がくせいです')], ['Mangio il pane.', wa('パンをたべます')], ['Bevo il tè.', wa('おちゃをのみます')],
    ['Vado a scuola.', wa('がっこうへいきます').concat(wa('がっこうにいきます'))], ['Non mangio la carne.', wa('にくをたべません')],
    ['Ieri ho studiato.', wa('きのうべんきょうしました').concat(['きのうわたしはべんきょうしました'])], ['Leggo un libro in biblioteca.', wa('としょかんでほんをよみます')],
    ['Per favore, mi dia dell’acqua.', ['おみずをください', 'みずをください']], ['Questo è un libro.', ['これはほんです']], ['Che ora è?', ['いまなんじですか', 'なんじですか']],
    ['Domani vado a Tokyo.', wa('あしたとうきょうへいきます').concat(wa('あしたとうきょうにいきます'))], ['Non sono insegnante.', wa('せんせいではありません').concat(wa('せんせいじゃありません'))],
    ['Guardo la TV con mia madre.', wa('ははとテレビをみます')], ['Posso entrare?', ['はいってもいいですか']]
  ];
  // [forma data, richiesta, risposte accettate, regola]
  JP.FORMS = [
    ['たべます', 'forma negativa cortese', ['たべません'], 'ます → ません'], ['たべます', 'passato cortese', ['たべました'], 'ます → ました'], ['たべます', 'passato negativo cortese', ['たべませんでした'], 'ます → ませんでした'],
    ['たべます', 'forma て', ['たべて'], 'verbi in る (gruppo 2): ます → て'], ['たべます', 'forma negativa informale (ない)', ['たべない'], 'gruppo 2: radice + ない'],
    ['のみます', 'forma て', ['のんで'], 'む → んで'], ['のみます', 'forma negativa cortese', ['のみません'], 'ます → ません'], ['のみます', 'forma del dizionario', ['のむ'], 'み → む'],
    ['いきます', 'forma て', ['いって'], 'く → って (eccezione di いく)'], ['いきます', 'passato cortese', ['いきました'], 'ます → ました'], ['いきます', 'forma negativa informale (ない)', ['いかない'], 'gruppo 1: き → か + ない'],
    ['みます', 'forma て', ['みて'], 'gruppo 2: ます → て'], ['みます', 'passato negativo cortese', ['みませんでした'], 'ます → ませんでした'],
    ['おおきいです', 'forma negativa', ['おおきくないです'], 'い → くない'], ['おおきいです', 'passato', ['おおきかったです'], 'い → かった'],
    ['たかいです', 'passato', ['たかかったです'], 'い → かった'], ['たかいです', 'forma negativa', ['たかくないです'], 'い → くない'],
    ['がくせいです', 'forma negativa', ['がくせいではありません', 'がくせいじゃありません'], 'です → ではありません'], ['がくせいです', 'passato', ['がくせいでした'], 'です → でした'],
    ['べんきょうします', 'forma て', ['べんきょうして'], 'します → して'], ['べんきょうします', 'forma negativa cortese', ['べんきょうしません'], 'ます → ません'],
    ['きます', 'forma て', ['きて'], 'くる: きて (irregolare)'], ['きます', 'forma negativa cortese', ['きません'], 'ます → ません'], ['します', 'forma て', ['して'], 'する: して (irregolare)']
  ];
  JP.DIALOGS = [
    ['Presentarsi', ['はじめまして。たなかです。', 'はじめまして。スミスです。よろしくおねがいします。', 'こちらこそ、よろしくおねがいします。']],
    ['Al ristorante', ['いらっしゃいませ。なんめいさまですか。', 'ふたりです。', 'こちらへどうぞ。']],
    ['Al konbini', ['ふくろはいりますか。', 'いいえ、だいじょうぶです。', 'ありがとうございました。']],
    ['Chiedere l’ora', ['すみません、いまなんじですか。', 'さんじです。', 'ありがとうございます。']],
    ['Ordinare', ['ごちゅうもんは？', 'ラーメンをひとつおねがいします。', 'かしこまりました。']],
    ['Chiedere la stazione', ['すみません、えきはどこですか。', 'まっすぐいって、みぎです。', 'ありがとうございます。']]
  ];
  // [situazione, frase adatta, 3 frasi non adatte]
  JP.DESC = [
    ['Sei in un ristorante e vuoi un tè.', 'おちゃをおねがいします。', ['おちゃはきらいです。', 'おちゃをのみました。', 'おちゃですか。']],
    ['Ti sei perso e cerchi la stazione.', 'すみません、えきはどこですか。', ['えきはおおきいです。', 'えきにいきました。', 'ここはえきです。']],
    ['Vuoi sapere il prezzo di un oggetto.', 'これはいくらですか。', ['これはほんです。', 'これをください。', 'これはきれいです。']],
    ['Non hai capito e vuoi che ripetano.', 'もういちどおねがいします。', ['わかりました。', 'ありがとうございます。', 'さようなら。']],
    ['Ti presenti: sei italiano.', 'わたしはイタリアじんです。', ['あなたはイタリアじんですか。', 'わたしはイタリアへいきます。', 'イタリアはおおきいです。']],
    ['Paghi alla cassa con la carta.', 'カードでおねがいします。', ['カードをたべます。', 'カードはどこですか。', 'カードはおいしいです。']],
    ['In hotel chiedi a che ora è il check-out.', 'チェックアウトはなんじですか。', ['チェックアウトはいくらですか。', 'チェックアウトをのみます。', 'チェックアウトはきれいです。']],
    ['Chiedi se puoi sederti.', 'すわってもいいですか。', ['すわりません。', 'すわりました。', 'すわってください。']]
  ];
  const strip = s => s.replace(/[。、？?！!\s]/g, '');
  const gen = {};
  gen.jptrans = rng => { const x = U.pick(JP.TRANS, rng); return { t: 'fill', ja: true, mtype: 'jptrans', q: 'Scrivi in giapponese (kana o romaji senza spazi): «' + x[0] + '»', a: x[1].concat(x[1].map(v => v + '。')), why: 'Modello: ' + x[1][0] + '。 Altre formulazioni corrette potrebbero esistere; confronta con il modello.', timed: 90 }; };
  gen.jptransform = rng => { const x = U.pick(JP.FORMS, rng); return { t: 'fill', ja: true, mtype: 'jptransform', q: 'Da «' + x[0] + '» scrivi la ' + x[1] + ' (kana o romaji senza spazi).', a: x[2], why: x[2][0] + ' — regola: ' + x[3], timed: 45 }; };
  gen.jpdialog = rng => { const d = U.pick(JP.DIALOGS, rng); return { t: 'order', mtype: 'jpdialog', q: 'Rimetti in ordine le battute del dialogo «' + d[0] + '».', words: d[1].slice(), why: d[1].join(' / ') }; };
  gen.jpdesc = rng => { const x = U.pick(JP.DESC, rng), o = U.shuffle([x[1]].concat(x[2]), rng); return { t: 'mc', mtype: 'jpdesc', q: 'Situazione: ' + x[0] + ' Quale frase è la più adatta?', o, a: o.indexOf(x[1]), why: x[1] + ' — le altre dicono altro (domanda sbagliata, azione diversa o significato non adatto).' }; };
  JP.make = (type, rng) => gen[type](rng || U.rand);
  JP.session = (n, rng) => { const out = []; for (let i = 0; i < (n || 10); i++) out.push(JP.make(JP.TYPES[i % JP.TYPES.length], rng)); return out; };
  JP.strip = strip;
  JP.record = (s, type, ok) => { const m = ((s.jprod = s.jprod || {})[type] = s.jprod[type] || { n: 0, ok: 0 }); m.n++; if (ok) m.ok++; };
})(window.ST = window.ST || {});
