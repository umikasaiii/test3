/* Giapponese — ampliamento stage J1 (verbi in forma cortese). */
(function (ST) {
  'use strict';
  const C = ST.content, { order, card } = C;
  // Posizione della risposta corretta variata in modo deterministico (solo quando la chiave è scritta per prima; opzioni tipo «Tutte/Nessuna» restano ferme).
  let rot = 0;
  const rotOpt = (o, a) => { const n = o.length; if (a !== 0 || n < 3 || o.some(x => /^(Tutt|Entramb|Nessun|Non si sa)/.test(String(x)))) return [o, a]; const k = (rot++ * 3 + 1) % n, rest = o.slice(1); rest.splice(k, 0, o[0]); return [rest, k]; };
  const mc = (q, o, a, why) => { const r = rotOpt(o, a); return C.mc(q, r[0], r[1], why); };
  const listen = (say, lang, q, o, a, why) => { const r = rotOpt(o, a); return C.listen(say, lang, q, r[0], r[1], why); };
  const addTopic = (t) => { [].concat(t.listening || [], t.reading || []).forEach(g => (g.qs || []).forEach(x => { const r = rotOpt(x.o, x.a); x.o = r[0]; x.a = r[1]; })); return C.addTopic(t); };
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J1', minutes: 20, prereq: ['jpn-j0-desu'] }, o));

  T({ id: 'jpn-j1-invitations', title: 'Inviti e proposte: ～ませんか, ～ましょう, ～に いきます', summary: 'Invitare, accettare, rifiutare con garbo e dire lo scopo di un movimento.',
    objectives: ['Invitare con ～ませんか e proporre con ～ましょう', 'Accettare o rifiutare con garbo', 'Dire lo scopo con ～に いきます'],
    pages: [
      { h: 'Obiettivo', b: 'Invitare qualcuno e accettare o rifiutare con garbo è un’abilità sociale fondamentale: in giapponese un rifiuto troppo diretto è scortese. Imparerai le forme e le formule indirette.' },
      { h: '～ませんか e ～ましょう', b: '- **～ませんか** = «Non vorresti…?» (invito cortese): {{ja|いっしょに えいがを みませんか。}}\n- **～ましょう** = «Facciamo…» (proposta o risposta): {{ja|[行|い]きましょう。}}\n\nSi formano dalla radice del verbo in forma ます: {{ja|[食|た]べます}} → {{ja|[食|た]べませんか}} / {{ja|[食|た]べましょう}}.\n\nDomande per accordarsi: {{ja|いつ?}} (quando), {{ja|どこで?}} (dove), {{ja|なんじに?}} (a che ora).' },
      { h: 'Accettare e rifiutare', b: '**Accettare**: {{ja|いいですね。}} / {{ja|ぜひ。}} / {{ja|ええ、[行|い]きましょう。}} / {{ja|[楽|たの]しみです。}}\n\n**Rifiutare con garbo** (formula indiretta):\n- {{ja|すみません、ちょっと…}} (frase lasciata sospesa)\n- {{ja|[残念|ざんねん]ですが、[今度|こんど]は ちょっと…}}\n- {{ja|その[日|ひ]は [用事|ようじ]が あるので…}}\n\nSegue spesso: {{ja|また こんど おねがいします。}}' },
      { h: 'Lo scopo: ～に いきます', b: '**Verbo (radice) + に + いきます/きます/かえります**:\n- {{ja|[ご飯|はん]を [食|た]べに [行|い]きます。}}\n- {{ja|[映画|えいが]を [見|み]に [行|い]きませんか。}}\n\n**Nome (azione) + に**: {{ja|[買|か]い[物|もの]に [行|い]きます。}} / {{ja|[散歩|さんぽ]に [行|い]きます。}}\n\nIl luogo di destinazione viene prima: {{ja|[駅|えき]へ [友達|ともだち]に [会|あ]いに [行|い]きます。}}' },
      { h: 'Esempio guidato', b: 'Invita un amico: *«Sabato prossimo vuoi andare al cinema con me?»*\n\n→ {{ja|[来週|らいしゅう]の どようび、いっしょに [映画|えいが]を [見|み]に [行|い]きませんか。}}\n\nRisposta positiva: {{ja|いいですね。なんじに [会|あ]いましょうか。}}\nRisposta negativa: {{ja|すみません、その[日|ひ]は ちょっと…。}}\n\nControllo: invito con ませんか, risposta con いいですね / ちょっと…' },
      { h: 'Errori comuni', b: '- Rifiutare con *いやです* / *いきません*: troppo diretto.\n- *えいがを みに いきますか* per invitare → {{ja|みに いきませんか。}}\n- *たべるに いきます* → {{ja|たべに いきます。}} (radice, non dizionario)\n- Confondere ましょう (proposta) con ましょうか (offerta/«facciamo?»).\n- Dimenticare いっしょに per l’invito.' },
      { h: 'Riepilogo', b: '- ～ませんか = invito; ～ましょう = proposta/accettazione.\n- Rifiuto indiretto: すみません、ちょっと…\n- ～に いきます: radice del verbo o nome d’azione.\n- Accordarsi su quando/dove/a che ora.' }
    ],
    exercises: [
      mc('Come si invita «Vuoi mangiare con me?»', ['いっしょに たべませんか。', 'いっしょに たべましたか。', 'いっしょに たべます。', 'いっしょに たべないでください。'], 0),
      mc('Risposta cortese a una proposta che accetti:', ['いいですね。', 'いやです。', 'しりません。', 'だめです。'], 0),
      mc('Rifiuto indiretto:', ['すみません、ちょっと…', 'いやです。', 'いきません。', 'ぜったい だめ。'], 0),
      mc('«Vado a vedere un film»:', ['えいがを みに いきます。', 'えいがを みるに いきます。', 'えいがを みました いきます。', 'えいがに みます。'], 0),
      listen('いっしょに ごはんを たべませんか。', 'ja', 'Che cosa propone?', ['Mangiare insieme', 'Studiare insieme', 'Andare in viaggio', 'Guardare un film'], 0),
      fillJ('Completa: かいものに ___ ましょう。(andare)', ['いき'], 'いきましょう.'),
      mc('Che cosa significa 「ぜひ」?', ['Volentieri / certamente', 'No grazie', 'Forse', 'Più tardi'], 0)
    ],
    test: [
      mc('Come si forma ～ましょう?', ['radice + ましょう', 'forma dizionario + ましょう', 'forma て + ましょう', 'forma ない + ましょう'], 0),
      mc('«来週の どようびに あいましょう» significa…', ['Vediamoci sabato prossimo', 'Ci siamo visti sabato', 'Non vediamoci', 'Che giorno è?'], 0),
      listen('すみません、その ひは ちょっと…。', 'ja', 'Che cosa fa il parlante?', ['Rifiuta con garbo', 'Accetta', 'Chiede l’ora', 'Ringrazia'], 0),
      mc('«Vado a comprare»:', ['かいものに いきます。', 'かいものを いきます。', 'かうに いきます。', 'かいものが いきます。'], 0)
    ],
    cards: [card('c1', 'invitare / non vuoi…?', '～ませんか', '', 'ませんか'), card('c2', 'facciamo…', '～ましょう', '', 'ましょう'), card('c3', 'volentieri', 'ぜひ', '', 'ぜひ'), card('c4', 'peccato', '[残念|ざんねん]', '', 'ざんねん'),
      card('c5', 'impegno', '[用事|ようじ]', '', 'ようじ'), card('c6', 'shopping', '[買|か]い[物|もの]', '', 'かいもの'), card('c7', 'la prossima volta', '[今度|こんど]', '', 'こんど'), card('c8', 'insieme', 'いっしょに', '', 'いっしょに')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Un invito', text: 'らいしゅうの どようび、いっしょに えいがを みに いきませんか。いいですね。なんじに あいましょうか。ごご ごじに えきの まえで あいましょう。すみません、ごじは ちょっと…。じゃあ、ろくじは どうですか。ろくじなら だいじょうぶです。',
      qs: [{ q: 'Che cosa propone la prima persona?', o: ['Andare al cinema', 'Andare a mangiare', 'Fare shopping', 'Studiare'], a: 0, kind: 'explicit' }, { q: 'Perché non va bene alle 5?', o: ['Il secondo parlante ha un problema con quell’ora', 'Il cinema è chiuso', 'Piove', 'Non vuole andare'], a: 0, kind: 'implicit' }, { q: 'A che ora si accordano?', o: ['Alle 6', 'Alle 5', 'Alle 7', 'Alle 8'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'いっしょに えいがを みませんか', lang: 'ja' }, { text: 'いいですね。いきましょう', lang: 'ja' }, { text: 'すみません、ちょっと', lang: 'ja' }],
    shadowing: [{ text: 'いっしょに えいがを みに いきませんか。', lang: 'ja', tip: 'Intonazione ascendente su か.' }, { text: 'いいですね。いきましょう。', lang: 'ja', tip: 'Tono caloroso.' }, { text: 'すみません、その ひは ちょっと…。', lang: 'ja', tip: 'Tono dispiaciuto, frase sospesa.' }],
    speaking: [{ prompt: 'Invita un amico a fare qualcosa nel weekend e accordati su ora e luogo.', model: 'こんどの どようび、いっしょに ごはんを たべに いきませんか。なんじに あいましょうか。ごご ろくじに えきで あいましょう。' }, { prompt: 'Rifiuta con garbo un invito e proponi un’altra volta.', model: 'すみません、その ひは ちょっと…。また こんど おねがいします。' }] });

  T({ id: 'jpn-j1-comparison', title: 'Confronti e preferenze: より, ほうが, いちばん', summary: 'Confrontare due elementi e dire il superlativo.',
    objectives: ['Confrontare con AはBより', 'Chiedere e rispondere con どちら e ～のほうが', 'Usare いちばん per il superlativo'],
    pages: [
      { h: 'Obiettivo', b: 'Confrontare cose, luoghi e persone è una funzione comunissima (acquisti, viaggi, preferenze). In giapponese si usa **より** («rispetto a») e **ほうが**.' },
      { h: 'AはBより', b: '**A は B より + aggettivo**: A è più… di B.\n- {{ja|このくるまは あのくるまより [高|たか]いです。}}\n- {{ja|[東京|とうきょう]は [京都|きょうと]より [大|おお]きいです。}}\n\nNegativo: {{ja|[京都|きょうと]は [東京|とうきょう]ほど [大|おお]きくないです。}} (non… quanto…)' },
      { h: 'どちら e ～のほうが', b: '**Domanda tra due**: {{ja|AとBと どちらが [好|す]きですか。}}\n**Risposta**: {{ja|Aのほうが [好|す]きです。}}\n\n> {{ja|[犬|いぬ]と [猫|ねこ]と どちらが [好|す]きですか。}} — {{ja|[猫|ねこ]のほうが [好|す]きです。}}\n\nSi può usare anche: {{ja|[猫|ねこ]のほうが [犬|いぬ]より [好|す]きです。}}\n\nPer le azioni: {{ja|[電車|でんしゃ]のほうが [速|はや]いです。}}' },
      { h: 'いちばん (superlativo)', b: '**いちばん + aggettivo** = il più…:\n- {{ja|[日本|にほん]で どこが いちばん [好|す]きですか。}}\n- {{ja|[一番|いちばん] [高|たか]い やまは [富士山|ふじさん]です。}}\n\nDomanda con ambito: **～の なかで** {{ja|[果物|くだもの]の なかで なにが いちばん [好|す]きですか。}}\n\nCon più di due elementi si usa いちばん; con due, ほうが.' },
      { h: 'Esempio guidato', b: 'Confronta due ristoranti: *Il ristorante A è più economico del B, ma B è più buono. Il più buono della città è C.*\n\n→ {{ja|Aは Bより [安|やす]いですが、Bのほうが おいしいです。[町|まち]で いちばん おいしいのは Cです。}}\n\nControllo: より dopo il termine di paragone; ほうが per il preferito; いちばん per il superlativo.' },
      { h: 'Errori comuni', b: '- *AはBよりのほうが* → {{ja|AはBより…}} oppure {{ja|Aのほうが…}}.\n- *どちらが もっと* → {{ja|どちらが}} basta.\n- *いちばん* con due elementi: usa ほうが.\n- Dimenticare は dopo il soggetto: {{ja|Aは Bより…}}.\n- *たかい* (alto/costoso): il contesto decide.' },
      { h: 'Riepilogo', b: '- AはBより adj: più di.\n- AとBと どちらが…? — Aのほうが…\n- いちばん + adj, ～の なかで.\n- ほど…ない per «non tanto quanto».' }
    ],
    exercises: [
      mc('«Tokyo è più grande di Kyoto»:', ['とうきょうは きょうとより おおきいです。', 'とうきょうは きょうとが おおきいです。', 'とうきょうが きょうとの おおきいです。', 'とうきょうは きょうとを おおきいです。'], 0),
      mc('«Quale ti piace di più, cani o gatti?»', ['いぬと ねこと どちらが すきですか。', 'いぬと ねこと なにが すきですか。', 'いぬと ねこが どこですか。', 'いぬと ねこは いくらですか。'], 0),
      mc('Risposta: «Mi piacciono di più i gatti»', ['ねこのほうが すきです。', 'ねこが いちばんです より。', 'ねこより すきです。', 'ねこを ほうが。'], 0),
      mc('«Il più alto»:', ['いちばん たかい', 'もっと たかい', 'とても たかい', 'より たかい'], 0),
      listen('でんしゃの ほうが バスより はやいです。', 'ja', 'Qual è più veloce?', ['Il treno', 'Il bus', 'Entrambi', 'Nessuno'], 0),
      fillJ('Completa: くだものの なかで なにが ___ すきですか。(più)', ['いちばん'], 'いちばん.'),
      mc('Con due elementi si usa…', ['どちらが / ほうが', 'いちばん', 'より solo', 'ほど'], 0)
    ],
    test: [
      mc('«Aは Bより» significa…', ['A è più… di B', 'B è più… di A', 'A e B sono uguali', 'A senza B'], 0),
      mc('Quale frase è un superlativo?', ['にほんで いちばん たかい やまは ふじさんです。', 'ふじさんは たかいです。', 'ふじさんより たかいです。', 'ふじさんが すきです。'], 0),
      listen('ひこうきの ほうが でんしゃより たかいです。', 'ja', 'Che cosa dice?', ['L’aereo costa più del treno', 'Il treno costa più dell’aereo', 'Sono uguali', 'L’aereo è lento'], 0),
      mc('«Non tanto quanto» si esprime con…', ['ほど…ない', 'より', 'いちばん', 'どちら'], 0)
    ],
    cards: [card('c1', 'più di', 'より', '', 'より'), card('c2', 'quale (tra due)', 'どちら', '', 'どちら'), card('c3', 'il più', 'いちばん', '', 'いちばん'), card('c4', 'veloce', '[速|はや]い', '', 'はやい'),
      card('c5', 'costoso/alto', '[高|たか]い', '', 'たかい'), card('c6', 'economico', '[安|やす]い', '', 'やすい'), card('c7', 'frutta', '[果物|くだもの]', '', 'くだもの'), card('c8', 'tra (ambito)', '～の なかで', '', 'のなかで')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Scegliere un ristorante', text: 'ラーメンと すしと どちらが すきですか。ラーメンのほうが すきです。でも すしは ラーメンより たかいです。この まちで いちばん おいしい みせは どこですか。えきの ちかくの みせです。あそこは ラーメンより すしの ほうが おいしいです。',
      qs: [{ q: 'Che cosa preferisce il parlante?', o: ['Il ramen', 'Il sushi', 'Entrambi', 'Nessuno'], a: 0, kind: 'explicit' }, { q: 'Che cosa costa di più?', o: ['Il sushi', 'Il ramen', 'Sono uguali', 'Non si sa'], a: 0, kind: 'explicit' }, { q: 'Dov’è il ristorante migliore?', o: ['Vicino alla stazione', 'In centro', 'In periferia', 'Non si sa'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ねこの ほうが すきです', lang: 'ja' }, { text: 'でんしゃは バスより はやいです', lang: 'ja' }, { text: 'いちばん おいしい みせです', lang: 'ja' }],
    shadowing: [{ text: 'ラーメンと すしと どちらが すきですか。', lang: 'ja', tip: 'Domanda lunga: spezza in tre parti.' }, { text: 'でんしゃの ほうが はやいです。', lang: 'ja', tip: 'ほう: stress leggero.' }, { text: 'この まちで いちばん たかい たてものです。', lang: 'ja', tip: 'いちばん: i・ち・ば・ん.' }],
    speaking: [{ prompt: 'Confronta due città o due mezzi di trasporto in tre frasi.', model: 'でんしゃは バスより はやいです。でも バスの ほうが やすいです。じてんしゃが いちばん けんこうに いいです。' }, { prompt: 'Chiedi e rispondi su una preferenza.', model: 'コーヒーと おちゃと どちらが すきですか。おちゃの ほうが すきです。' }] });

  T({ id: 'jpn-j1-kanji-1', title: 'Primi kanji: numeri, giorni, persone, direzioni', summary: '40 kanji di base imparati in parole, con letture on e kun.',
    objectives: ['Riconoscere 40 kanji di base in contesto', 'Leggere le parole più comuni che li contengono', 'Capire la differenza tra lettura on e kun'],
    pages: [
      { h: 'Obiettivo', b: 'I kanji non si imparano isolati ma **nelle parole**. Questa prima lezione ti dà i 40 kanji più utili per leggere cartelli, orari e date: numeri, giorni, persone, direzioni.' },
      { h: 'Numeri', b: '- {{ja|[一|いち]}} {{ja|[二|に]}} {{ja|[三|さん]}} {{ja|[四|よん]}} {{ja|[五|ご]}} {{ja|[六|ろく]}} {{ja|[七|なな]}} {{ja|[八|はち]}} {{ja|[九|きゅう]}} {{ja|[十|じゅう]}} {{ja|[百|ひゃく]}} {{ja|[千|せん]}} {{ja|[万|まん]}}\n- Parole: {{ja|[三人|さんにん]}} (tre persone), {{ja|[五百円|ごひゃくえん]}} (500 yen), {{ja|[一万円|いちまんえん]}} (10.000 yen)\n- 円 = {{ja|[円|えん]}} (yen)' },
      { h: 'Giorni e tempo', b: '- {{ja|[日|にち]}} (giorno/sole): {{ja|[日本|にほん]}}, {{ja|[今日|きょう]}}, {{ja|[毎日|まいにち]}}\n- {{ja|[月|げつ]}} (luna/mese): {{ja|[月曜日|げつようび]}}, {{ja|[一月|いちがつ]}}\n- {{ja|[火|か]}} fuoco, {{ja|[水|すい]}} acqua, {{ja|[木|もく]}} albero, {{ja|[金|きん]}} oro, {{ja|[土|ど]}} terra: **{{ja|[火曜日|かようび]}}, {{ja|[水曜日|すいようび]}}, {{ja|[木曜日|もくようび]}}, {{ja|[金曜日|きんようび]}}, {{ja|[土曜日|どようび]}}**\n- {{ja|[年|ねん]}} anno: {{ja|[今年|ことし]}}, {{ja|[来年|らいねん]}}; {{ja|[時|じ]}} ora; {{ja|[分|ふん]}} minuto; {{ja|[半|はん]}} metà' },
      { h: 'Persone e luoghi', b: '- {{ja|[人|ひと]}} persona: {{ja|[日本人|にほんじん]}}, {{ja|[外国人|がいこくじん]}}\n- {{ja|[大|おお]}} grande: {{ja|[大学|だいがく]}} università; {{ja|[小|ちい]}} piccolo: {{ja|[小学校|しょうがっこう]}}\n- {{ja|[学|がく]}} studio, {{ja|[生|せい]}} vita/nascita: {{ja|[学生|がくせい]}}, {{ja|[先生|せんせい]}}\n- {{ja|[口|くち]}} bocca/apertura: {{ja|[出口|でぐち]}}, {{ja|[入口|いりぐち]}}\n- {{ja|[駅|えき]}} stazione, {{ja|[国|くに]}} paese, {{ja|[本|ほん]}} libro/origine' },
      { h: 'Direzioni e posizioni', b: '- {{ja|[上|うえ]}} sopra, {{ja|[下|した]}} sotto, {{ja|[中|なか]}} dentro/centro, {{ja|[右|みぎ]}} destra, {{ja|[左|ひだり]}} sinistra\n- {{ja|[前|まえ]}} davanti/prima, {{ja|[後|うしろ]}} dietro/dopo\n- {{ja|[東|ひがし]}} est, {{ja|[西|にし]}} ovest, {{ja|[南|みなみ]}} sud, {{ja|[北|きた]}} nord: {{ja|[東京|とうきょう]}}, {{ja|[北海道|ほっかいどう]}}' },
      { h: 'Lettura on e kun', b: 'Ogni kanji ha spesso due letture:\n- **on** (di origine cinese): nei **composti** di più kanji: {{ja|[学校|がっこう]}}, {{ja|[先生|せんせい]}}.\n- **kun** (giapponese): da solo, spesso con **okurigana**: {{ja|[食|た]べる}}, {{ja|[大|おお]きい}}.\n\nStrategia: impara **parole intere** con la lettura, non liste di kanji. Rileggi con le carte.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[今日|きょう]は [月曜日|げつようび]です。[午前|ごぜん]九[時|じ]に [大学|だいがく]の [入口|いりぐち]で [先生|せんせい]に [会|あ]います。}}\n\n→ *Oggi è lunedì. Alle 9 del mattino incontro l’insegnante all’ingresso dell’università.*\n\nControllo: ho riconosciuto 今日, 月曜日, 午前, 九時, 大学, 入口, 先生?' },
      { h: 'Errori comuni', b: '- Confondere 日 e 月.\n- Leggere 水 come *みず* in 水曜日 (si legge すい).\n- Confondere 大 e 太, 人 e 入.\n- Imparare solo il significato senza la lettura.\n- Non usare furigana all’inizio: fanno parte dell’apprendimento.' },
      { h: 'Riepilogo', b: '- 40 kanji: numeri, giorni, persone, direzioni.\n- Letture on (composti) e kun (da solo).\n- Impara parole, non kanji isolati.\n- Rivedi con le carte e con i testi del livello J5.' }
    ],
    exercises: [
      mc('Come si legge 月曜日?', ['げつようび', 'かようび', 'すいようび', 'どようび'], 0),
      mc('Come si legge 出口?', ['でぐち', 'いりぐち', 'でくち', 'しゅっこう'], 0),
      mc('Che cosa significa 右?', ['destra', 'sinistra', 'sopra', 'sotto'], 0),
      mc('Come si legge 学生?', ['がくせい', 'せんせい', 'がっこう', 'にほんじん'], 0),
      mc('Come si legge 三人?', ['さんにん', 'みひと', 'さんひと', 'さんじん'], 0),
      fillJ('Come si legge 日本 (Giappone)?', ['にほん', 'nihon', 'nippon'], 'にほん.'),
      mc('Come si legge 大きい?', ['おおきい', 'だいきい', 'たいきい', 'おきい'], 0)
    ],
    test: [
      mc('Quale kanji significa «nord»?', ['北', '南', '東', '西'], 0),
      mc('Come si legge 今日?', ['きょう', 'こんにち', 'いまひ', 'こんじつ'], 0),
      mc('Come si legge 一万円?', ['いちまんえん', 'いちばんえん', 'ひとまんえん', 'いっせんえん'], 0),
      mc('Come si legge 先生?', ['せんせい', 'さきせい', 'せんしょう', 'さきなま'], 0)
    ],
    cards: [card('c1', 'giorno/sole', '[日|にち]', '', 'にち'), card('c2', 'Giappone', '[日本|にほん]', '', 'にほん'), card('c3', 'persona', '[人|ひと]', '', 'ひと'), card('c4', 'università', '[大学|だいがく]', '', 'だいがく'),
      card('c5', 'uscita', '[出口|でぐち]', '', 'でぐち'), card('c6', 'ingresso', '[入口|いりぐち]', '', 'いりぐち'), card('c7', 'destra', '[右|みぎ]', '', 'みぎ'), card('c8', 'oggi', '[今日|きょう]', '', 'きょう')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Orari', text: 'きょうは げつようびです。ごぜん くじに だいがくの いりぐちで せんせいに あいます。ごご ごじに えきの でぐちで ともだちと あいます。にほんじんの ともだちは さんにん います。',
      qs: [{ q: 'Che giorno è oggi?', o: ['Lunedì', 'Martedì', 'Domenica', 'Sabato'], a: 0, kind: 'explicit' }, { q: 'Dove incontra l’insegnante?', o: ['All’ingresso dell’università', 'Alla stazione', 'A casa', 'In biblioteca'], a: 0, kind: 'explicit' }, { q: 'Quanti amici giapponesi ha?', o: ['Tre', 'Due', 'Quattro', 'Cinque'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'きょうは げつようびです', lang: 'ja' }, { text: 'だいがくの いりぐちで あいます', lang: 'ja' }, { text: 'にほんじんの ともだちが さんにん います', lang: 'ja' }],
    shadowing: [{ text: 'きょうは げつようびです。', lang: 'ja', tip: 'げ・つ・よ・う・び: 5 more.' }, { text: 'だいがくの いりぐちで あいましょう。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'にほんじんの ともだちが います。', lang: 'ja', tip: 'にほんじん: に・ほ・ん・じ・ん.' }],
    speaking: [{ prompt: 'Dì che giorno è, che ora e dove ti trovi usando parole con kanji che conosci.', model: 'きょうは げつようびです。ごご ごじです。えきの でぐちに います。' }, { prompt: 'Presenta un amico giapponese con quanti anni ha, dove studia e di dove è.', model: 'ともだちは にほんじんです。だいがくの がくせいです。にじゅうさいです。' }],
    reading: [{ id: 'r1', title: 'Un biglietto', text: '[今日|きょう]は [月曜日|げつようび]です。[午前|ごぜん]九[時|じ]に [大学|だいがく]の [入口|いりぐち]で [先生|せんせい]に [会|あ]います。[午後|ごご]五[時|じ]に [駅|えき]の [出口|でぐち]で [友達|ともだち]三[人|にん]と [会|あ]います。',
      qs: [{ q: 'Alle 9 del mattino…', o: ['incontra l’insegnante', 'incontra amici', 'studia', 'va a casa'], a: 0 }, { q: 'Quanti amici incontra alle 5?', o: ['Tre', 'Due', 'Cinque', 'Uno'], a: 0 }, { q: 'Dove incontra gli amici?', o: ['All’uscita della stazione', 'All’ingresso dell’università', 'A casa', 'Al bar'], a: 0 }] }] });

  T({ id: 'jpn-j1-time-routine', title: 'Tempo e durata: から, まで, ごろ, ぐらい', summary: 'Dire da quando a quando, orari approssimativi e durata di un’azione.',
    objectives: ['Usare ～から ～まで per intervalli di tempo e luogo', 'Distinguere ごろ (momento) e ぐらい (durata)', 'Chiedere e dire quanto tempo ci vuole'],
    pages: [
      { h: 'Obiettivo', b: 'Spesso bisogna dire **da quando a quando**, **a che ora circa** e **quanto dura** qualcosa. Qui impari le particelle e i contatori che permettono di farlo.' },
      { h: 'から e まで', b: '- **～から** = da; **～まで** = fino a (tempo e luogo).\n- {{ja|[九時|くじ]から [五時|ごじ]まで [働|はたら]きます。}}\n- {{ja|[東京|とうきょう]から [京都|きょうと]まで [二時間|にじかん]です。}}\n\nDomande: {{ja|なんじから なんじまで ですか。}}\n\n**から** significa anche «perché» (già visto).' },
      { h: 'ごろ e ぐらい', b: '- **ごろ** dopo un **momento**: {{ja|[七時|しちじ]ごろ [起|お]きます。}} (verso le 7)\n- **ぐらい / くらい** dopo una **quantità o durata**: {{ja|[二時間|にじかん]ぐらい [勉強|べんきょう]します。}} (circa due ore)\n\nRegola: ごろ = quando; ぐらい = quanto.' },
      { h: 'La durata: ～じかん, ～ふん, ～にち', b: '- {{ja|いちじかん}} (1 ora), {{ja|にじかん}}, {{ja|さんじかん}}, {{ja|よじかん}}, {{ja|ごじかん}}…\n- {{ja|いっぷん}}, {{ja|にふん}}… (minuti)\n- {{ja|いちにち}}, {{ja|ふつか}}… (giorni), {{ja|いっしゅうかん}} (settimana), {{ja|いっかげつ}} (mese), {{ja|いちねん}} (anno)\n\nDomanda: {{ja|どのぐらい かかりますか。}} — {{ja|[三十分|さんじゅっぷん]ぐらい かかります。}}' },
      { h: 'Frequenza', b: '**Periodo + に + numero + かい**: {{ja|[一週間|いっしゅうかん]に [二回|にかい] [泳|およ]ぎます。}} (due volte a settimana). Domanda: {{ja|[週|しゅう]に なんかい ですか。}}\n\nAltri: {{ja|まいにち}}, {{ja|まいしゅう}}, {{ja|まいつき}}, {{ja|ときどき}}.' },
      { h: 'Esempio guidato', b: 'Descrivi la tua giornata: *Mi alzo verso le 7. Lavoro dalle 9 alle 5. Ci vogliono 40 minuti circa per arrivare in ufficio. Mi alleno due volte a settimana.*\n\n→ {{ja|[七時|しちじ]ごろ [起|お]きます。[九時|くじ]から [五時|ごじ]まで [働|はたら]きます。[会社|かいしゃ]まで [四十分|よんじゅっぷん]ぐらい かかります。[週|しゅう]に [二回|にかい] トレーニングします。}}' },
      { h: 'Errori comuni', b: '- *しちじぐらい* (circa le 7) → {{ja|しちじごろ。}}\n- *にじかんごろ* (circa 2 ore) → {{ja|にじかんぐらい。}}\n- *まで* con un verbo di punto di arrivo si confonde con に.\n- Dimenticare **かかります** per tempo/costo.\n- *よんじかん* (4 ore) → {{ja|よじかん。}}' },
      { h: 'Riepilogo', b: '- から/まで: da/fino a.\n- ごろ (momento) vs ぐらい (durata).\n- どのぐらい かかりますか。\n- しゅうに にかい: frequenza.' }
    ],
    exercises: [
      mc('«Mi alzo verso le 7»:', ['しちじごろ おきます。', 'しちじぐらい おきます。', 'しちじまで おきます。', 'しちじを おきます。'], 0),
      mc('«Studio circa due ore»:', ['にじかんぐらい べんきょうします。', 'にじごろ べんきょうします。', 'にじを べんきょうします。', 'にじから べんきょうします。'], 0),
      mc('«Lavoro dalle 9 alle 5»:', ['くじから ごじまで はたらきます。', 'くじまで ごじから はたらきます。', 'くじで ごじに はたらきます。', 'くじは ごじを はたらきます。'], 0),
      listen('ここから えきまで じゅうごふんぐらい かかります。', 'ja', 'Quanto ci vuole?', ['Circa 15 minuti', 'Circa 50 minuti', 'Circa 5 minuti', 'Circa 1 ora'], 0),
      fillJ('Completa: しゅうに にかい ___ ます。(nuotare: およぐ)', ['およぎ'], 'およぎます: およぐ → およぎ + ます.'),
      mc('Come si dice «4 ore»?', ['よじかん', 'よんじかん', 'しじかん', 'よじ'], 0),
      mc('どのぐらい かかりますか chiede…', ['quanto tempo ci vuole', 'dov’è', 'chi è', 'che cos’è'], 0)
    ],
    test: [
      mc('ごろ si usa dopo…', ['un momento', 'una durata', 'un luogo', 'un prezzo'], 0),
      mc('«Due volte a settimana»:', ['しゅうに にかい', 'しゅうが にかい', 'しゅうを にかい', 'しゅうで にかい'], 0),
      listen('くじから ごじまで はたらきます。', 'ja', 'Quanto lavora?', ['Dalle 9 alle 5', 'Dalle 5 alle 9', 'Fino alle 9', 'Dalle 9 alle 7'], 0),
      mc('«Una settimana» si dice…', ['いっしゅうかん', 'いちしゅう', 'ひとしゅうかん', 'いっしゅう'], 0)
    ],
    cards: [card('c1', 'da', '～から', '', 'から'), card('c2', 'fino a', '～まで', '', 'まで'), card('c3', 'verso (ora)', '～ごろ', '', 'ごろ'), card('c4', 'circa (durata)', '～ぐらい', '', 'ぐらい'),
      card('c5', 'ci vuole', 'かかります', '', 'かかります'), card('c6', 'un’ora', 'いちじかん', '', 'いちじかん'), card('c7', 'una settimana', 'いっしゅうかん', '', 'いっしゅうかん'), card('c8', 'ogni settimana', 'まいしゅう', '', 'まいしゅう')],
    listening: [{ id: 'l1', lang: 'ja', title: 'La mia giornata', text: 'ななじごろ おきます。くじから ごじまで かいしゃで はたらきます。かいしゃまで でんしゃで よんじゅっぷんぐらい かかります。しゅうに にかい、ジムで トレーニングします。まいにち にじかんぐらい にほんごを べんきょうします。',
      qs: [{ q: 'A che ora si alza?', o: ['Verso le 7', 'Alle 9', 'Alle 5', 'Alle 6'], a: 0, kind: 'explicit' }, { q: 'Quanto ci mette ad arrivare al lavoro?', o: ['Circa 40 minuti', 'Circa 4 ore', 'Circa 15 minuti', 'Circa un’ora'], a: 0, kind: 'explicit' }, { q: 'Quanto studia giapponese ogni giorno?', o: ['Circa 2 ore', 'Circa 20 minuti', 'Circa 5 ore', 'Mai'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'しちじごろ おきます', lang: 'ja' }, { text: 'くじから ごじまで はたらきます', lang: 'ja' }, { text: 'えきまで じゅうごふんぐらい かかります', lang: 'ja' }],
    shadowing: [{ text: 'しちじごろ おきます。', lang: 'ja', tip: 'ごろ: breve, senza stress.' }, { text: 'くじから ごじまで はたらきます。', lang: 'ja', tip: 'Ritmo: から e まで leggeri.' }, { text: 'どのぐらい かかりますか。', lang: 'ja', tip: 'Domanda: ascendente su か.' }],
    speaking: [{ prompt: 'Descrivi la tua giornata con orari, durata e frequenza.', model: 'ろくじごろ おきます。くじから ごじまで はたらきます。うちから かいしゃまで さんじゅっぷんぐらい かかります。しゅうに いっかい およぎます。' }, { prompt: 'Chiedi a qualcuno quanto ci vuole per un tragitto.', model: 'すみません、ここから えきまで どのぐらい かかりますか。' }] });

  T({ id: 'jpn-j1-directions', title: 'Indicazioni stradali e mezzi di trasporto', summary: 'Chiedere e capire la strada; scegliere i mezzi; tempi e costi.',
    objectives: ['Chiedere e capire indicazioni stradali', 'Usare で per i mezzi di trasporto', 'Descrivere un percorso con a destra, a sinistra, dritto'],
    pages: [
      { h: 'Obiettivo', b: 'Orientarsi in Giappone richiede di **capire indicazioni** rapide e di chiedere aiuto. In questa lezione impari il lessico e le frasi per muoverti in una città.' },
      { h: 'Parole di orientamento', b: '- {{ja|まっすぐ}} (dritto), {{ja|[右|みぎ]}} (destra), {{ja|[左|ひだり]}} (sinistra), {{ja|[曲|ま]がります}} (svoltare), {{ja|[渡|わた]ります}} (attraversare)\n- {{ja|こうさてん}} (incrocio), {{ja|しんごう}} (semaforo), {{ja|かど}} (angolo), {{ja|はし}} (ponte), {{ja|みち}} (strada)\n- {{ja|[前|まえ]}} (davanti), {{ja|[後|うしろ]}} (dietro), {{ja|[隣|となり]}} (accanto), {{ja|[向|む]かい}} (di fronte), {{ja|[近|ちか]く}} (vicino)' },
      { h: 'Chiedere la strada', b: '- {{ja|すみません、[駅|えき]は どこですか。}}\n- {{ja|[駅|えき]へ [行|い]きたいんですが…}} (vorrei andare alla stazione…)\n- {{ja|ここから [駅|えき]まで どう [行|い]きますか。}}\n- {{ja|[近|ちか]いですか。}} / {{ja|[遠|とお]いですか。}}\n\nRisposte tipiche: {{ja|まっすぐ [行|い]って、[二番目|にばんめ]の かどを [右|みぎ]に [曲|ま]がって ください。}}' },
      { h: 'Mezzi di trasporto', b: '**で** + mezzo: {{ja|[電車|でんしゃ]で}}, {{ja|バスで}}, {{ja|タクシーで}}, {{ja|[地下鉄|ちかてつ]で}}, {{ja|[自転車|じてんしゃ]で}}; a piedi: **{{ja|[歩|ある]いて}}**.\n\nDomanda: {{ja|どうやって [行|い]きますか。}} / {{ja|なんで [行|い]きますか。}}\n\nTempo e costo: {{ja|[電車|でんしゃ]で [三十分|さんじゅっぷん]ぐらい かかります。}} / {{ja|[千円|せんえん]ぐらい かかります。}}' },
      { h: 'Descrivere un percorso', b: 'Sequenza con **て**: {{ja|まっすぐ [行|い]って、[右|みぎ]に [曲|ま]がって、[橋|はし]を [渡|わた]ります。}}\n\nPunti di riferimento: {{ja|[銀行|ぎんこう]の [隣|となり]に あります。}} / {{ja|[駅|えき]の [向|む]かいです。}}\n\nSi usa anche **～に あります** per l’ubicazione e **～が みえます** (si vede).' },
      { h: 'Esempio guidato', b: 'Chiedi la strada: *Scusi, vorrei andare al museo. Come si arriva a piedi? Quanto ci vuole?*\n\n→ {{ja|すみません、[博物館|はくぶつかん]へ [行|い]きたいんですが、[歩|ある]いて どう [行|い]きますか。どのぐらい かかりますか。}}\n\nRisposta: {{ja|まっすぐ [行|い]って、[二番目|にばんめ]の かどを [右|みぎ]に [曲|ま]がります。[十分|じゅっぷん]ぐらいです。}}' },
      { h: 'Errori comuni', b: '- *でんしゃに いきます* (mezzo) → {{ja|でんしゃで いきます。}}\n- *あるいてで* → {{ja|あるいて}} (senza で).\n- *みぎで まがる* → {{ja|みぎに まがる。}}\n- Confondere **かかります** con **います/あります**.\n- Dire solo *えき?* invece di una domanda completa e cortese.' },
      { h: 'Riepilogo', b: '- まっすぐ, 右, 左, 曲がる, 渡る.\n- 駅は どこですか; どう 行きますか.\n- で + mezzo; 歩いて.\n- かかります per tempo e costo.' }
    ],
    exercises: [
      mc('«Svolti a destra»:', ['みぎに まがって ください。', 'みぎで まがって ください。', 'みぎを まがって ください。', 'みぎは まがって ください。'], 0),
      mc('«Vado in treno»:', ['でんしゃで いきます。', 'でんしゃに いきます。', 'でんしゃを いきます。', 'でんしゃが いきます。'], 0),
      mc('«A piedi»:', ['あるいて', 'あるいてで', 'あるきで', 'あるくを'], 0),
      listen('まっすぐ いって、ひだりに まがって ください。', 'ja', 'Che cosa devo fare?', ['Andare dritto e svoltare a sinistra', 'Andare a destra', 'Tornare indietro', 'Fermarmi'], 0),
      mc('«Quanto tempo ci vuole?»', ['どのぐらい かかりますか。', 'いくらですか。', 'なんじですか。', 'どこですか。'], 0),
      mc('«Il museo è accanto alla banca»:', ['はくぶつかんは ぎんこうの となりです。', 'はくぶつかんは ぎんこうの まえを。', 'はくぶつかんが ぎんこうに です。', 'はくぶつかんの ぎんこうは です。'], 0),
      fillJ('Completa: バス___ いきます。(mezzo)', ['で', 'de'], 'で indica il mezzo.')
    ],
    test: [
      mc('«こうさてん» significa…', ['incrocio', 'ponte', 'semaforo', 'strada'], 0),
      mc('«Come si arriva alla stazione?»', ['えきへ どう いきますか。', 'えきは だれですか。', 'えきは いくつですか。', 'えきが なんですか。'], 0),
      listen('でんしゃで さんじゅっぷんぐらい かかります。', 'ja', 'Quanto ci vuole?', ['Circa 30 minuti in treno', 'Circa 30 minuti a piedi', 'Circa 3 ore', 'Circa 3 minuti'], 0),
      mc('«Attraversare il ponte»:', ['はしを わたる', 'はしに わたる', 'はしで わたる', 'はしが わたる'], 0)
    ],
    cards: [card('c1', 'dritto', 'まっすぐ', '', 'まっすぐ'), card('c2', 'svoltare', '[曲|ま]がる', '', 'まがる'), card('c3', 'incrocio', 'こうさてん', '', 'こうさてん'), card('c4', 'semaforo', 'しんごう', '', 'しんごう'),
      card('c5', 'accanto', '[隣|となり]', '', 'となり'), card('c6', 'di fronte', '[向|む]かい', '', 'むかい'), card('c7', 'a piedi', '[歩|ある]いて', '', 'あるいて'), card('c8', 'metropolitana', '[地下鉄|ちかてつ]', '', 'ちかてつ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Come arrivare al museo', text: 'すみません、はくぶつかんへ いきたいんですが、どう いきますか。まっすぐ いって、にばんめの かどを みぎに まがって ください。そして はしを わたります。ぎんこうの となりです。あるいて じゅっぷんぐらいです。ありがとうございます。',
      qs: [{ q: 'Dove deve svoltare?', o: ['A destra alla seconda svolta', 'A sinistra alla prima svolta', 'Dritto sempre', 'Alla stazione'], a: 0, kind: 'explicit' }, { q: 'Che cosa deve attraversare?', o: ['Un ponte', 'Un incrocio', 'Un parco', 'Una galleria'], a: 0, kind: 'explicit' }, { q: 'Quanto ci mette a piedi?', o: ['Circa 10 minuti', 'Circa 1 ora', 'Circa 2 minuti', 'Circa 30 minuti'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'まっすぐ いって みぎに まがって ください', lang: 'ja' }, { text: 'えきは ぎんこうの となりです', lang: 'ja' }, { text: 'あるいて じゅっぷんぐらいです', lang: 'ja' }],
    shadowing: [{ text: 'まっすぐ いって、みぎに まがって ください。', lang: 'ja', tip: 'Sequenza con て: pausa breve.' }, { text: 'えきは ぎんこうの となりです。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'あるいて じゅっぷんぐらいです。', lang: 'ja', tip: 'じゅっぷん: じゅ・っ・ぷ・ん.' }],
    speaking: [{ prompt: 'Chiedi la strada per la stazione e come arrivarci.', model: 'すみません、えきへ いきたいんですが、どう いきますか。どのぐらい かかりますか。' }, { prompt: 'Spiega a un turista come arrivare dal luogo in cui ti trovi al bar più vicino.', model: 'まっすぐ いって、ひだりに まがって ください。かふぇは ぎんこうの となりです。あるいて さんぷんぐらいです。' }] });
})(window.ST = window.ST || {});
