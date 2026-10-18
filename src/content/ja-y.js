/* Giapponese — ampliamento: contatori, aggettivi, tempo, acquisti, dare/ricevere, condizionali, scopo, nuovi kanji, registro. */
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
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J0', minutes: 20, prereq: ['jpn-j0-numbers-time'] }, o));

  /* ---------------------------------------------------------------- J0 */
  T({ id: 'jpn-j0-counters', stage: 'J0', title: 'I contatori: つ, 人, 個, 枚, 本, 冊', summary: 'Contare persone, oggetti piccoli, cose piatte, oggetti lunghi e libri.',
    objectives: ['Usare la serie ひとつ・ふたつ… per oggetti generici', 'Scegliere il contatore giusto: 人, 個, 枚, 本, 冊', 'Riconoscere i suoni irregolari (いっぽん, さんぼん, ろっぽん…)'],
    pages: [
      { h: 'Obiettivo', b: 'In giapponese non si dice «due mele» con il solo numero: dopo il numero si aggiunge un **contatore** che dipende dalla forma o dal tipo di cosa contata. Imparare i cinque contatori più frequenti ti permette di ordinare al ristorante, comprare biglietti e parlare della famiglia.' },
      { h: 'La serie つ (da 1 a 10)', b: 'Per oggetti generici, senza contatore specifico, esiste una serie nativa:\n- {{ja|ひとつ}} 1, {{ja|ふたつ}} 2, {{ja|みっつ}} 3, {{ja|よっつ}} 4, {{ja|いつつ}} 5\n- {{ja|むっつ}} 6, {{ja|ななつ}} 7, {{ja|やっつ}} 8, {{ja|ここのつ}} 9, {{ja|とお}} 10\n\nDa 11 in poi si usano i numeri normali: {{ja|じゅういち}}.\n\nEsempio: {{ja|りんごを みっつ ください。}} (tre mele, per favore). **Posizione**: il numero con il contatore sta di solito **dopo l’oggetto e la particella を**, senza altra particella.' },
      { h: 'Persone: 人', b: '**人** si legge **にん**, ma i primi due sono irregolari:\n- {{ja|[一人|ひとり]}} 1, {{ja|[二人|ふたり]}} 2\n- {{ja|[三人|さんにん]}}, {{ja|[四人|よにん]}} (non *しにん*), {{ja|[五人|ごにん]}}, {{ja|[六人|ろくにん]}}, {{ja|[七人|ななにん]}}, {{ja|[八人|はちにん]}}, {{ja|[九人|きゅうにん]}}, {{ja|[十人|じゅうにん]}}\n\n{{ja|[兄弟|きょうだい]は [三人|さんにん] います。}} (ho tre fratelli). Per le persone si usa il verbo **います**, non あります.' },
      { h: 'Cose: 個, 枚, 本, 冊', b: '- **個** (こ): oggetti piccoli e tondeggianti, frutta, uova, dolci: {{ja|[卵|たまご]を [六個|ろっこ] [買|か]いました。}} Suoni: いっこ, にこ, さんこ, よんこ, ごこ, **ろっこ**, ななこ, **はっこ**, きゅうこ, **じゅっこ**.\n- **枚** (まい): cose sottili e piatte: carta, biglietti, magliette, piatti: {{ja|[切符|きっぷ]を [二枚|にまい] ください。}} Nessuna irregolarità.\n- **本** (ほん): cose lunghe e sottili: penne, bottiglie, alberi, ombrelli, anche i film/lezioni: {{ja|いっぽん, にほん, さんぼん, よんほん, ごほん, ろっぽん, ななほん, はっぽん, きゅうほん, じゅっぽん}}.\n- **冊** (さつ): libri, quaderni, riviste: {{ja|[本|ほん]を [三冊|さんさつ] [読|よ]みました。}} Irregolari: いっさつ, はっさつ, じゅっさつ.' },
      { h: 'Esempio guidato', b: 'Ordina: *Due birre (bottiglie), tre persone, per favore; e due biglietti.*\n\n→ {{ja|[三人|さんにん]です。ビールを [二本|にほん] ください。それから [切符|きっぷ]を [二枚|にまい] おねがいします。}}\n\nControllo: 三人 (さんにん) con persone; 二本 (にほん) per bottiglie; 二枚 (にまい) per biglietti. Se non conosci il contatore, la serie つ ti salva: {{ja|ふたつ ください。}}' },
      { h: 'Errori comuni', b: '- *ひとにん* → {{ja|ひとり。}} e *ふたにん* → {{ja|ふたり。}}\n- *しにん* per 4 persone → {{ja|よにん。}}\n- *いちほん* → {{ja|いっぽん;}} *ろくほん* → {{ja|ろっぽん。}}\n- Usare 本 per i libri: i libri sono **冊**; 本 è lungo e sottile.\n- Mettere に o が dopo il numero («りんごを みっつ**を**»): non serve nessuna particella.\n- Usare つ oltre dieci: da 11 in avanti si usa il numero + contatore.' },
      { h: 'Riepilogo', b: '- Serie つ: ひとつ… とお (1–10), oggetti generici.\n- 人: ひとり, ふたり, さんにん, よにん…\n- 個 piccoli; 枚 piatti; 本 lunghi; 冊 libri.\n- Irregolari: いっぽん, さんぼん, ろっぽん, はっぽん, じゅっぽん; いっさつ, はっさつ.\n- Ordine: oggetto + を + quantità + verbo.' }
    ],
    exercises: [
      mc('«Due (oggetti generici)» si dice:', ['ふたつ', 'ふたり', 'にひき', 'ふたにん'], 0),
      mc('«Tre bottiglie di birra»: ビールを ___ ください。', ['さんぼん', 'さんほん', 'みっつぼん', 'さんまい'], 0),
      mc('Quale contatore si usa per i biglietti?', ['まい', 'ほん', 'さつ', 'こ'], 0),
      mc('«Quattro persone»:', ['よにん', 'しにん', 'よんにん', 'よっつ'], 0),
      mc('«Sei uova»:', ['たまごを ろっこ', 'たまごを ろくこ', 'たまごを むっこ', 'たまごを ろっぽん'], 0),
      listen('ほんを さんさつ よみました。', 'ja', 'Che cosa dice?', ['Ha letto tre libri', 'Ha comprato tre penne', 'Ha tre fratelli', 'Ha tre biglietti'], 0),
      order('Metti in ordine: «Due biglietti, per favore»', ['きっぷを', 'にまい', 'ください'], 'Oggetto + を + quantità + ください.'),
      fillJ('Completa: ともだちは ふ___ います。(due persone)', ['たり'], 'ふたり.')
    ],
    test: [
      mc('«Una persona» si dice…', ['ひとり', 'いちにん', 'ひとつ', 'いっこ'], 0),
      mc('Contatore per ombrelli e penne:', ['ほん', 'さつ', 'まい', 'にん'], 0),
      mc('«Un libro»:', ['いっさつ', 'いちさつ', 'ひとさつ', 'いっぽん'], 0),
      mc('Quale frase è corretta?', ['りんごを みっつ かいました。', 'りんごを みっつを かいました。', 'りんごに みっつ かいました。', 'みっつ りんごが を かいました。'], 0)
    ],
    cards: [card('c1', 'due persone', '[二人|ふたり]', '', 'ふたり'), card('c2', 'tre persone', '[三人|さんにん]', '', 'さんにん'), card('c3', 'quattro persone', '[四人|よにん]', '', 'よにん'), card('c4', 'una bottiglia / cosa lunga', '[一本|いっぽん]', '', 'いっぽん'),
      card('c5', 'sei bottiglie', '[六本|ろっぽん]', '', 'ろっぽん'), card('c6', 'due fogli / biglietti', '[二枚|にまい]', '', 'にまい'), card('c7', 'tre libri', '[三冊|さんさつ]', '', 'さんさつ'), card('c8', 'sei pezzi (piccoli)', '[六個|ろっこ]', '', 'ろっこ'), card('c9', 'otto (oggetti generici)', 'やっつ', '', 'やっつ'), card('c10', 'dieci (oggetti generici)', 'とお', '', 'とお')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al ristorante', text: 'みっつ ください。さんにんです。ビールを ふたつと、ジュースを ひとつ おねがいします。それから たまごを よっつ ください。',
      qs: [{ q: 'Quante persone sono?', o: ['Tre', 'Due', 'Quattro', 'Cinque'], a: 0, kind: 'explicit' }, { q: 'Quante birre ordina?', o: ['Una', 'Tre', 'Due', 'Quattro'], a: 2, kind: 'explicit' }, { q: 'Quante uova chiede?', o: ['Due', 'Quattro', 'Tre', 'Sei'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'りんごを みっつ ください', lang: 'ja' }, { text: 'きっぷを にまい おねがいします', lang: 'ja' }, { text: 'ともだちが ふたり います', lang: 'ja' }],
    shadowing: [{ text: 'りんごを みっつ ください。', lang: 'ja', tip: 'みっつ: pausa breve sulla っ.' }, { text: 'ビールを にほん おねがいします。', lang: 'ja', tip: 'にほん: ni・hon.' }, { text: 'ほんを さんさつ よみました。', lang: 'ja', tip: 'さんさつ: san・sa・tsu.' }],
    speaking: [{ prompt: 'Ordina da bere e da mangiare per tre persone usando i contatori.', model: 'さんにんです。ビールを みっつ ください。ピザを にまい おねがいします。' }, { prompt: 'Dì quanti fratelli e quanti libri hai.', model: 'きょうだいは ふたり います。ほんは にじゅっさつ あります。' }] });

  /* ---------------------------------------------------------------- J1 */
  T({ id: 'jpn-j1-adjectives-basics', stage: 'J1', prereq: ['jpn-j0-desu'], title: 'Aggettivi い e な: presente e passato', summary: 'Come descrivere cose e persone: forme affermative e negative, presente e passato.',
    objectives: ['Distinguere aggettivi in い e in な', 'Formare presente, passato e negativo in forma cortese', 'Usare gli aggettivi davanti ai nomi'],
    pages: [
      { h: 'Obiettivo', b: 'Gli aggettivi giapponesi **si coniugano**: cambiano forma per indicare passato e negazione. Esistono due famiglie, **aggettivi in い** e **aggettivi in な**. Con questa lezione sai descrivere cose, luoghi e persone in modo cortese.' },
      { h: 'Aggettivi in い', b: 'Terminano in **い** e il い è parte della forma:\n- {{ja|[大|おお]きい}} grande, {{ja|[小|ちい]さい}} piccolo, {{ja|[新|あたら]しい}} nuovo, {{ja|[古|ふる]い}} vecchio, {{ja|[高|たか]い}} alto/caro, {{ja|[安|やす]い}} economico, {{ja|おいしい}} buono\n\nForme cortesi:\n- Presente: {{ja|[高|たか]いです。}}\n- Negativo: {{ja|[高|たか]くないです。}} (oppure {{ja|[高|たか]く ありません。}})\n- Passato: {{ja|[高|たか]かったです。}}\n- Passato neg.: {{ja|[高|たか]くなかったです。}}\n\nSi toglie い e si aggiunge く・かった. Eccezione: {{ja|いい}} (buono) → {{ja|よくないです}}, {{ja|よかったです}}.' },
      { h: 'Aggettivi in な', b: 'Sono aggettivi-nome: {{ja|きれい}} bello/pulito, {{ja|しずか}} tranquillo, {{ja|ゆうめい}} famoso, {{ja|げんき}} in forma, {{ja|[好|す]き}} piace. Si comportano come nomi:\n- Presente: {{ja|しずかです。}}\n- Negativo: {{ja|しずかじゃ ありません。}}\n- Passato: {{ja|しずかでした。}}\n- Passato neg.: {{ja|しずかじゃ ありませんでした。}}\n\n**Attenzione**: {{ja|きれい}} e {{ja|きらい}} terminano in い ma sono aggettivi な.' },
      { h: 'Davanti a un nome', b: '- い: la forma resta uguale: {{ja|[新|あたら]しい [本|ほん]}} (un libro nuovo).\n- な: compare **な**: {{ja|しずかな [町|まち]}}, {{ja|きれいな [部屋|へや]}}.\n\nCon です: {{ja|この [本|ほん]は [新|あたら]しいです。}} / {{ja|この [町|まち]は しずかです。}}\n\nPer unire due aggettivi: {{ja|この [部屋|へや]は [広|ひろ]くて きれいです。}} (い → く + て), {{ja|しずかで きれいです。}} (な → で).' },
      { h: 'Esempio guidato', b: 'Descrivi: *Ieri l’albergo era vecchio ma tranquillo. Il ristorante non era economico, ma era buono.*\n\n→ {{ja|きのうの ホテルは [古|ふる]かったですが、しずかでした。レストランは [安|やす]くなかったですが、おいしかったです。}}\n\nControllo: 古かった (い passato), しずかでした (な passato), 安くなかった (い neg. passato), おいしかった.' },
      { h: 'Errori comuni', b: '- *たかいじゃ ありません* → {{ja|たかくないです。}} (gli い non usano じゃ)\n- *しずかくないです* → {{ja|しずかじゃ ありません。}}\n- *いいかった* → {{ja|よかった。}}\n- *しずか** い** [町|まち]* → {{ja|しずかな まち。}} (serve な)\n- *きれいくない* → {{ja|きれいじゃ ありません。}}\n- Dimenticare che です resta anche dopo il passato: {{ja|たかかったです。}}' },
      { h: 'Riepilogo', b: '- い: ～いです / ～くないです / ～かったです / ～くなかったです.\n- な: ～です / ～じゃありません / ～でした / ～じゃありませんでした.\n- Davanti ai nomi: い invariato, な + な.\n- Eccezioni: いい → よく・よかった; きれい è な.' }
    ],
    exercises: [
      mc('Passato di «たかいです»:', ['たかかったです', 'たかいでした', 'たかくでした', 'たかかです'], 0),
      mc('Negativo di «おいしいです»:', ['おいしくないです', 'おいしいじゃ ありません', 'おいしくじゃないです', 'おいしじゃないです'], 0),
      mc('Passato di «しずかです»:', ['しずかでした', 'しずかかったです', 'しずかだったです', 'しずかくでした'], 0),
      mc('«Una città tranquilla»:', ['しずかな まち', 'しずかい まち', 'しずか まち の', 'しずかで まち'], 0),
      mc('Passato di «いいです»:', ['よかったです', 'いかったです', 'いいでした', 'よいでした'], 0),
      listen('きのうは さむくなかったです。', 'ja', 'Che cosa dice?', ['Ieri non faceva freddo', 'Ieri faceva freddo', 'Oggi fa freddo', 'Ieri era caldo'], 0),
      fillJ('Completa: この へやは きれい___ ありません。', ['じゃ', 'では'], 'Negativo degli aggettivi な.'),
      fillJ('Completa: ホテルは ふるかっ___ です。(passato)', ['た'], 'ふるかった.')
    ],
    test: [
      mc('Quale è un aggettivo な?', ['きれい', 'あたらしい', 'おおきい', 'おいしい'], 0),
      mc('«Non era economico»:', ['やすくなかったです', 'やすじゃ ありませんでした', 'やすいじゃなかった', 'やすくないでした'], 0),
      mc('Davanti a un nome, «ゆうめい» diventa…', ['ゆうめいな', 'ゆうめいい', 'ゆうめいの', 'ゆうめい'], 0),
      mc('Quale frase è corretta?', ['この へやは ひろくて きれいです。', 'この へやは ひろいで きれいです。', 'この へやは ひろくで きれいです。', 'この へやは ひろい きれいです。'], 0)
    ],
    cards: [card('c1', 'grande', '[大|おお]きい', '', 'おおきい'), card('c2', 'piccolo', '[小|ちい]さい', '', 'ちいさい'), card('c3', 'nuovo', '[新|あたら]しい', '', 'あたらしい'), card('c4', 'vecchio (cose)', '[古|ふる]い', '', 'ふるい'),
      card('c5', 'caro / alto', '[高|たか]い', '', 'たかい'), card('c6', 'economico', '[安|やす]い', '', 'やすい'), card('c7', 'bello, pulito', 'きれい', '', 'きれい'), card('c8', 'tranquillo', 'しずか', '', 'しずか'), card('c9', 'famoso', 'ゆうめい', '', 'ゆうめい'), card('c10', 'in forma, sano', '[元気|げんき]', '', 'げんき')],
    listening: [{ id: 'l1', lang: 'ja', title: 'L’albergo', text: 'きのうの ホテルは ふるかったですが、しずかで きれいでした。ごはんは やすくなかったですが、とても おいしかったです。へやは ひろくなかったです。',
      qs: [{ q: 'Com’era l’albergo?', o: ['Vecchio ma tranquillo e pulito', 'Nuovo e rumoroso', 'Economico e sporco', 'Grande e caro'], a: 0, kind: 'explicit' }, { q: 'Com’era il cibo?', o: ['Economico e cattivo', 'Non economico ma molto buono', 'Economico e buono', 'Cattivo'], a: 1, kind: 'explicit' }, { q: 'Com’era la camera?', o: ['Molto grande', 'Fredda', 'Non grande', 'Nuova'], a: 2, kind: 'explicit' }] }],
    dictation: [{ text: 'きのうの ホテルは しずかでした', lang: 'ja' }, { text: 'この レストランは やすくないです', lang: 'ja' }, { text: 'ごはんは おいしかったです', lang: 'ja' }],
    shadowing: [{ text: 'ホテルは ふるかったです。', lang: 'ja', tip: 'ふるかった: fu・ru・kat・ta.' }, { text: 'この まちは しずかです。', lang: 'ja', tip: 'しずか: shi・zu・ka.' }, { text: 'やすくなかったですが、おいしかったです。', lang: 'ja', tip: 'Tieni la っ breve.' }],
    speaking: [{ prompt: 'Descrivi la tua città con due aggettivi い e due な.', model: 'わたしの まちは ちいさいです。ふるいです。しずかです。きれいです。' }, { prompt: 'Racconta un ristorante di ieri (era buono? economico?).', model: 'きのうの レストランは おいしかったです。でも やすくなかったです。' }] });

  T({ id: 'jpn-j1-weather-seasons', stage: 'J1', prereq: ['jpn-j0-desu'], title: 'Tempo atmosferico e stagioni', summary: 'Parlare del tempo, della temperatura e delle quattro stagioni.',
    objectives: ['Descrivere il tempo con 天気, 雨, 雪, 風', 'Usare aggettivi di temperatura', 'Parlare delle stagioni e delle preferenze'],
    pages: [
      { h: 'Obiettivo', b: 'Parlare del tempo è il modo più comune di cominciare una conversazione in Giappone. Qui imparerai il lessico del tempo, la temperatura e le quattro stagioni, con le strutture che già conosci.' },
      { h: 'Il tempo', b: '- {{ja|[天気|てんき]}} tempo, {{ja|[晴|は]れ}} sereno, {{ja|[曇|くも]り}} nuvoloso, {{ja|[雨|あめ]}} pioggia, {{ja|[雪|ゆき]}} neve, {{ja|[風|かぜ]}} vento\n- {{ja|[今日|きょう]は いい [天気|てんき]ですね。}} (che bel tempo oggi, vero?)\n- {{ja|[今日|きょう]は [晴|は]れです。}} / {{ja|[明日|あした]は [雨|あめ]でしょう。}} (domani probabilmente pioverà)\n- {{ja|[雨|あめ]が [降|ふ]って います。}} (sta piovendo), {{ja|[雪|ゆき]が [降|ふ]ります。}} (nevica), {{ja|[風|かぜ]が [強|つよ]いです。}} (il vento è forte)\n\nCon un evento atmosferico si usa **が**: {{ja|[雨|あめ]が [降|ふ]ります。}}' },
      { h: 'Temperatura e sensazioni', b: '- {{ja|[暑|あつ]い}} caldo (tempo), {{ja|[寒|さむ]い}} freddo, {{ja|[涼|すず]しい}} fresco, {{ja|[暖|あたた]かい}} mite\n- {{ja|[今日|きょう]は [暑|あつ]いですね。}} / {{ja|[昨日|きのう]は [寒|さむ]かったです。}}\n- Temperatura: {{ja|[気温|きおん]は [二十度|にじゅうど]です。}} (20 gradi)\n- Previsioni: {{ja|[天気予報|てんきよほう]に よると、[明日|あした]は [雪|ゆき]です。}}\n\nPer il caldo/freddo di oggetti e bevande si usano あつい (caldo) e つめたい (freddo): {{ja|つめたい [水|みず]}}.' },
      { h: 'Le quattro stagioni', b: '- {{ja|[春|はる]}} primavera, {{ja|[夏|なつ]}} estate, {{ja|[秋|あき]}} autunno, {{ja|[冬|ふゆ]}} inverno; insieme: {{ja|[四季|しき]}}\n- {{ja|[日本|にほん]の [春|はる]は [暖|あたた]かいです。}} {{ja|[桜|さくら]が さきます。}}\n- {{ja|[夏|なつ]は [暑|あつ]くて、[湿気|しっけ]が [多|おお]いです。}}\n- {{ja|[秋|あき]は [涼|すず]しいです。}} {{ja|[紅葉|もみじ]が きれいです。}}\n- {{ja|[冬|ふゆ]は [寒|さむ]いです。[北|きた]では [雪|ゆき]が たくさん [降|ふ]ります。}}\n\nIn Giappone c’è anche la stagione delle piogge: {{ja|[梅雨|つゆ]}} (giugno–luglio) e i tifoni ({{ja|[台風|たいふう]}}) in autunno.' },
      { h: 'Esempio guidato', b: 'Racconta: *Ieri faceva freddo e nevicava. Oggi c’è il sole ma il vento è forte. Mi piace l’autunno, perché è fresco.*\n\n→ {{ja|[昨日|きのう]は [寒|さむ]くて、[雪|ゆき]が [降|ふ]りました。[今日|きょう]は [晴|は]れですが、[風|かぜ]が [強|つよ]いです。[秋|あき]が [好|す]きです。[涼|すず]しいですから。}}\n\nControllo: 寒くて (い → くて), 降りました (passato), 好きです con が.' },
      { h: 'Errori comuni', b: '- *あめを ふります* → {{ja|あめが ふります。}}\n- *あついです* per il tempo (暑い) vs. *あつい* per il cibo (熱い): stessa pronuncia, kanji diverso.\n- *さむいでした* → {{ja|さむかったです。}}\n- *はれいです* → {{ja|はれです。}} (nome, non aggettivo)\n- Confondere {{ja|[雨|あめ]}} con {{ja|[飴|あめ]}} (caramella): accento e contesto diversi.\n- Dimenticare ね per cercare consenso sul tempo.' },
      { h: 'Riepilogo', b: '- Tempo: 晴れ, 曇り, 雨, 雪, 風.\n- Temperatura: 暑い, 寒い, 涼しい, 暖かい.\n- Stagioni: 春, 夏, 秋, 冬.\n- Fenomeno + が + 降ります / 吹きます.\n- Frase per iniziare: 今日は いい天気ですね。' }
    ],
    exercises: [
      mc('«Domani pioverà (probabilmente)»:', ['あしたは あめでしょう。', 'あしたは あめを ふります。', 'あしたは あめいです。', 'あしたは あめが でした。'], 0),
      mc('«Sta nevicando»:', ['ゆきが ふっています。', 'ゆきを ふっています。', 'ゆきに ふります。', 'ゆきは ふるでした。'], 0),
      mc('Passato di «さむいです»:', ['さむかったです', 'さむいでした', 'さむでした', 'さむくでした'], 0),
      mc('Quale stagione è «あき»?', ['Autunno', 'Primavera', 'Inverno', 'Estate'], 0),
      mc('Quale è fresco, gradevole?', ['すずしい', 'あつい', 'つよい', 'おおい'], 0),
      listen('きょうは はれですが、かぜが つよいです。', 'ja', 'Che cosa dice?', ['C’è il sole ma il vento è forte', 'Piove e c’è vento', 'È nuvoloso e freddo', 'Nevica forte'], 0),
      order('Metti in ordine: «Oggi fa caldo, vero?»', ['きょうは', 'あついですね'], 'Tema + は + aggettivo + ですね.'),
      fillJ('Completa: ゆき___ ふっています。', ['が'], 'I fenomeni atmosferici prendono が.')
    ],
    test: [
      mc('«Estate» in giapponese:', ['なつ', 'はる', 'ふゆ', 'あき'], 0),
      mc('«てんきよほう» è…', ['le previsioni del tempo', 'la temperatura', 'una stagione', 'un tifone'], 0),
      mc('Come si dice «Ieri faceva caldo»?', ['きのうは あつかったです。', 'きのうは あついでした。', 'きのうは あつくです。', 'きのうは あつです。'], 0),
      mc('Quale frase è corretta?', ['かぜが つよいです。', 'かぜを つよいです。', 'かぜは つよいが です。', 'かぜに つよいです。'], 0)
    ],
    cards: [card('c1', 'tempo', '[天気|てんき]', '', 'てんき'), card('c2', 'pioggia', '[雨|あめ]', '', 'あめ'), card('c3', 'neve', '[雪|ゆき]', '', 'ゆき'), card('c4', 'vento', '[風|かぜ]', '', 'かぜ'), card('c5', 'caldo (tempo)', '[暑|あつ]い', '', 'あつい'), card('c6', 'freddo', '[寒|さむ]い', '', 'さむい'),
      card('c7', 'fresco', '[涼|すず]しい', '', 'すずしい'), card('c8', 'primavera', '[春|はる]', '', 'はる'), card('c9', 'estate', '[夏|なつ]', '', 'なつ'), card('c10', 'autunno', '[秋|あき]', '', 'あき'), card('c11', 'inverno', '[冬|ふゆ]', '', 'ふゆ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Il tempo', text: 'きのうは さむくて、ゆきが ふりました。きょうは はれですが、かぜが つよいです。あしたは くもりでしょう。わたしは あきが すきです。すずしいですから。',
      qs: [{ q: 'Che cosa è successo ieri?', o: ['Ha nevicato e faceva freddo', 'Faceva caldo', 'Ha piovuto', 'C’era il sole'], a: 0, kind: 'explicit' }, { q: 'Com’è il tempo oggi?', o: ['Nuvoloso', 'Piove', 'Sole, ma con vento forte', 'Nevica'], a: 2, kind: 'explicit' }, { q: 'Perché gli piace l’autunno?', o: ['Perché è caldo', 'Perché è fresco', 'Perché nevica', 'Perché c’è vento'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'きょうは いい てんきですね', lang: 'ja' }, { text: 'あめが ふっています', lang: 'ja' }, { text: 'あきは すずしいです', lang: 'ja' }],
    shadowing: [{ text: 'きょうは いい てんきですね。', lang: 'ja', tip: 'Intonazione ascendente su ね.' }, { text: 'ゆきが ふっています。', lang: 'ja', tip: 'ふって: fut・te.' }, { text: 'かぜが つよいです。', lang: 'ja', tip: 'つよい: tsu・yo・i.' }],
    speaking: [{ prompt: 'Saluta un collega commentando il tempo di oggi.', model: 'おはようございます。きょうは いい てんきですね。でも ちょっと さむいですね。' }, { prompt: 'Di’ quale stagione preferisci e perché.', model: 'わたしは はるが すきです。あたたかくて、さくらが きれいですから。' }] });

  T({ id: 'jpn-j1-shopping-money', stage: 'J1', prereq: ['jpn-j0-numbers-time'], title: 'Fare acquisti: prezzi e denaro', summary: 'Chiedere il prezzo, contare yen e comprare nei negozi.',
    objectives: ['Leggere e dire i prezzi in yen (centinaia, migliaia, decine di migliaia)', 'Chiedere e contrattare con くださいとはありますか', 'Pagare con contanti o carta'],
    pages: [
      { h: 'Obiettivo', b: 'Al negozio servono poche formule: chiedere il prezzo, dire cosa vuoi e pagare. La parte più difficile è leggere i **numeri grandi** con i loro cambi di suono. In pochi minuti saprai muoverti in qualsiasi negozio giapponese.' },
      { h: 'Chiedere il prezzo', b: '- {{ja|これは いくらですか。}} (quanto costa questo?)\n- {{ja|ぜんぶで いくらですか。}} (in tutto quanto fa?)\n- {{ja|[千円|せんえん]です。}} / {{ja|[全部|ぜんぶ]で [三千円|さんぜんえん]です。}}\n\nLa valuta è l’**yen**: {{ja|[円|えん]}}. Si legge dopo il numero: {{ja|[五百円|ごひゃくえん]}}.' },
      { h: 'Numeri grandi e suoni irregolari', b: '- 100 {{ja|ひゃく}}; **300 さんびゃく**, **600 ろっぴゃく**, **800 はっぴゃく**\n- 1000 {{ja|せん}} (non *いちせん*, ma 2000 にせん); **3000 さんぜん**, **8000 はっせん**\n- 10 000 {{ja|いちまん}}: **un** si dice sempre: {{ja|[一万円|いちまんえん]}}; 30 000 さんまんえん\n\nEsempi: {{ja|[三百五十円|さんびゃくごじゅうえん]}} (350), {{ja|[千二百円|せんにひゃくえん]}} (1200), {{ja|[八千円|はっせんえん]}} (8000), {{ja|[一万五千円|いちまんごせんえん]}} (15 000).' },
      { h: 'Frasi nel negozio', b: '- {{ja|これを ください。}} (prendo questo)\n- {{ja|もっと [安|やす]い のは ありませんか。}} (non ha niente di più economico?)\n- {{ja|ちょっと [高|たか]いですね。}} (è un po’ caro)\n- {{ja|[大|おお]きい サイズは ありますか。}} (ha una taglia più grande?)\n- {{ja|[白|しろ]い シャツは ありますか。}} (ha una camicia bianca?)\n- {{ja|カードで [払|はら]います。}} / {{ja|[現金|げんきん]で [払|はら]います。}}\n- {{ja|おつりです。}} (il resto) / {{ja|レシートを ください。}} / {{ja|ふくろは いりません。}} (non mi serve la busta)\n\nIl commesso dice: {{ja|いらっしゃいませ。}} (benvenuto) / {{ja|ありがとうございました。}}.' },
      { h: 'Esempio guidato', b: 'Dialogo:\n- Cliente: {{ja|すみません、この [白|しろ]い シャツは いくらですか。}}\n- Commesso: {{ja|[三千八百円|さんぜんはっぴゃくえん]です。}}\n- Cliente: {{ja|ちょっと [高|たか]いですね。もっと [安|やす]いのは ありませんか。}}\n- Commesso: {{ja|こちらは [二千円|にせんえん]です。}}\n- Cliente: {{ja|じゃあ、これを ください。カードで [払|はら]います。}}\n\nControllo: 3800 = さんぜんはっぴゃくえん; 2000 = にせんえん.' },
      { h: 'Errori comuni', b: '- *さんひゃく* → {{ja|さんびゃく。}} (300); *ろくひゃく* → {{ja|ろっぴゃく。}}\n- *いちせん* è accettabile ma di norma si dice solo {{ja|せん}}; **いちまん** invece è obbligatorio.\n- *さんせん* → {{ja|さんぜん。}}\n- Dire il prezzo prima di えん: {{ja|ごひゃくえん}}, non *えんごひゃく*.\n- Usare これは ください (serve **を**): {{ja|これを ください。}}\n- Offrire la mancia: in Giappone non è usanza.' },
      { h: 'Riepilogo', b: '- いくらですか: quanto costa?\n- 300 さんびゃく, 600 ろっぴゃく, 800 はっぴゃく; 3000 さんぜん, 8000 はっせん; 10 000 いちまん.\n- これを ください; ～は ありませんか.\n- カードで / 現金で 払います.\n- おつり, レシート, ふくろ.' }
    ],
    exercises: [
      mc('«300 yen» si dice:', ['さんびゃくえん', 'さんひゃくえん', 'みっひゃくえん', 'さんぴゃくえん'], 0),
      mc('«8000 yen»:', ['はっせんえん', 'はちせんえん', 'はっぜんえん', 'はちぜんえん'], 0),
      mc('«10 000 yen»:', ['いちまんえん', 'まんえん', 'じゅうせんえん', 'ひゃくせんえん'], 0),
      mc('«Quanto costa tutto insieme?»', ['ぜんぶで いくらですか。', 'これは なんですか。', 'いつ ですか。', 'いくつ ありますか。'], 0),
      mc('«Prendo questo»:', ['これを ください。', 'これは ください。', 'これが ください。', 'これで ください。'], 0),
      listen('ぜんぶで ろっぴゃくごじゅうえんです。', 'ja', 'Quanto costa?', ['650 yen', '560 yen', '600 yen', '6500 yen'], 0),
      order('Metti in ordine: «Pago con la carta»', ['カードで', 'はらいます'], 'Mezzo + で + verbo.'),
      fillJ('Completa: ちょっと たかいですね。もっと やす___ のは ありませんか。', ['い'], 'やすい のは.')
    ],
    test: [
      mc('«600» si legge…', ['ろっぴゃく', 'ろくひゃく', 'ろっひゃく', 'むっぴゃく'], 0),
      mc('«3000»:', ['さんぜん', 'さんせん', 'みっせん', 'さんぜんえん'], 0),
      mc('Che cosa significa «おつり»?', ['il resto', 'lo scontrino', 'la busta', 'il prezzo'], 0),
      mc('Come si dice «non mi serve la busta»?', ['ふくろは いりません。', 'ふくろを ください。', 'ふくろは あります。', 'ふくろが たかいです。'], 0)
    ],
    cards: [card('c1', 'yen', '[円|えん]', '', 'えん'), card('c2', 'quanto costa?', 'いくら', '', 'いくら'), card('c3', 'in tutto', '[全部|ぜんぶ]で', '', 'ぜんぶで'), card('c4', 'caro', '[高|たか]い', '', 'たかい'), card('c5', 'economico', '[安|やす]い', '', 'やすい'),
      card('c6', 'il resto', 'おつり', '', 'おつり'), card('c7', 'scontrino', 'レシート', '', 'れしーと'), card('c8', 'contanti', '[現金|げんきん]', '', 'げんきん'), card('c9', 'pagare', '[払|はら]います', '', 'はらいます'), card('c10', 'busta (del negozio)', 'ふくろ', '', 'ふくろ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al negozio', text: 'すみません、この しろい シャツは いくらですか。さんぜんはっぴゃくえんです。ちょっと たかいですね。もっと やすいのは ありませんか。こちらは にせんえんです。じゃあ、これを ください。カードで はらいます。',
      qs: [{ q: 'Quanto costa la camicia bianca?', o: ['2800 yen', '3800 yen', '3000 yen', '8300 yen'], a: 1, kind: 'explicit' }, { q: 'Perché cerca un’altra camicia?', o: ['È troppo grande', 'È sporca', 'È un po’ cara', 'È bianca'], a: 2, kind: 'explicit' }, { q: 'Come paga?', o: ['Con la carta', 'In contanti', 'Con un buono', 'Non paga'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'これは いくらですか', lang: 'ja' }, { text: 'ぜんぶで ごせんえんです', lang: 'ja' }, { text: 'カードで はらいます', lang: 'ja' }],
    shadowing: [{ text: 'これは いくらですか。', lang: 'ja', tip: 'Intonazione ascendente su か.' }, { text: 'さんびゃくえん ください。', lang: 'ja', tip: 'さんびゃく: san・bya・ku.' }, { text: 'もっと やすいのは ありませんか。', lang: 'ja', tip: 'の è una pausa leggera.' }],
    speaking: [{ prompt: 'Chiedi il prezzo di una maglietta e chiedi un’alternativa più economica.', model: 'すみません、この Tシャツは いくらですか。ちょっと たかいですね。もっと やすいのは ありませんか。' }, { prompt: 'Compra due oggetti e paga con la carta.', model: 'これを ふたつ ください。ぜんぶで いくらですか。カードで はらいます。' }] });

  /* ---------------------------------------------------------------- J2 */
  T({ id: 'jpn-j2-giving-receiving', stage: 'J2', prereq: ['jpn-j1-places-wants'], title: 'Dare e ricevere: あげる, もらう, くれる', summary: 'I tre verbi del dare e del ricevere, con direzione e livello di cortesia.',
    objectives: ['Scegliere あげる, もらう o くれる secondo chi dà a chi', 'Usare le particelle に e から', 'Estendere la struttura con ～てあげる/もらう/くれる'],
    pages: [
      { h: 'Obiettivo', b: 'In giapponese il verbo «dare» cambia secondo **chi dà a chi**. Esistono tre verbi principali. Capire la loro direzione è fondamentale per parlare di regali, aiuti e favori.' },
      { h: 'Le tre direzioni', b: '- **あげる**: io o un altro dà a un altro (verso fuori dal mio gruppo): {{ja|[私|わたし]は [友達|ともだち]に [花|はな]を あげました。}}\n- **もらう**: ricevere (il ricevente è il soggetto): {{ja|[私|わたし]は [友達|ともだち]に [本|ほん]を もらいました。}}\n- **くれる**: un altro dà **a me** (o alla mia famiglia): {{ja|[友達|ともだち]は [私|わたし]に [本|ほん]を くれました。}}\n\nIl «mio gruppo» comprende io, la mia famiglia e chi sento vicino: per loro si usa **くれる**, non あげる.' },
      { h: 'Particelle', b: '- あげる: **A は B に N を あげる**: {{ja|[母|はは]に プレゼントを あげました。}}\n- もらう: **A は B に / から N を もらう**: {{ja|[先生|せんせい]に [辞書|じしょ]を もらいました。}} / {{ja|[会社|かいしゃ]から [電話|でんわ]を もらいました。}} (**から** quando chi dà è un’organizzazione)\n- くれる: **A は (私に) N を くれる**: {{ja|[母|はは]は [私|わたし]に セーターを くれました。}} Spesso 私に si omette.\n\nUn altro è sempre il soggetto con くれる: {{ja|[先生|せんせい]は [妹|いもうと]に ペンを くれました。}} (sorella = mia famiglia).' },
      { h: 'Livello di cortesia', b: '- あげる → **さしあげる** (umile, per superiori): {{ja|[先生|せんせい]に [お土産|おみやげ]を さしあげました。}}\n- もらう → **いただく** (umile): {{ja|[先生|せんせい]に [本|ほん]を いただきました。}}\n- くれる → **くださる** (onorifico): {{ja|[先生|せんせい]が [本|ほん]を くださいました。}}\n\nPer amici e colleghi basta あげる/もらう/くれる; con superiori preferisci いただく e くださる.' },
      { h: 'Con i verbi: ～てあげる/もらう/くれる', b: 'Con la forma て si parla di **favori**:\n- {{ja|[友達|ともだち]に [日本語|にほんご]を [教|おし]えて あげました。}} (ho insegnato giapponese a un amico)\n- {{ja|[友達|ともだち]に [日本語|にほんご]を [教|おし]えて もらいました。}} (ho ricevuto un favore: l’amico mi ha insegnato)\n- {{ja|[友達|ともだち]は [私|わたし]に [日本語|にほんご]を [教|おし]えて くれました。}}\n\nCon ～てあげる nei confronti di superiori può suonare presuntuoso: meglio evitarlo.' },
      { h: 'Esempio guidato', b: 'Racconta: *Ho regalato un libro a un amico. Mia madre mi ha dato un maglione. Ho ricevuto un biglietto dal professore.*\n\n→ {{ja|[友達|ともだち]に [本|ほん]を あげました。[母|はは]は [私|わたし]に セーターを くれました。[先生|せんせい]に [切符|きっぷ]を もらいました。}}\n\nControllo: あげる (io → amico), くれる (madre → me), もらう (io ricevo dal prof.).' },
      { h: 'Errori comuni', b: '- *ともだちは わたしに あげました* → {{ja|くれました。}} (verso di me: くれる)\n- *わたしは ははに くれました* → {{ja|あげました。}}\n- *せんせいに あげました* senza riguardo: meglio さしあげました.\n- *ともだちに もらいました* è corretto; non usare *を* per la persona.\n- Dimenticare che per le istituzioni si usa **から**.\n- Confondere i soggetti: con もらう il soggetto è il ricevente.' },
      { h: 'Riepilogo', b: '- あげる: dare (verso l’esterno); もらう: ricevere; くれる: dare a me / al mio gruppo.\n- あげる: に; もらう: に / から; くれる: soggetto = chi dà.\n- Umili: さしあげる, いただく; onorifico: くださる.\n- ～てあげる/もらう/くれる per i favori.' }
    ],
    exercises: [
      mc('«Un amico mi ha dato un libro»:', ['ともだちは ほんを くれました。', 'ともだちは ほんを あげました。', 'ともだちに ほんを くれました。', 'ともだちを ほんが もらいました。'], 0),
      mc('«Ho regalato dei fiori a mia madre»:', ['ははに はなを あげました。', 'ははは はなを くれました。', 'ははに はなを くれました。', 'ははを はなに あげました。'], 0),
      mc('Quale verbo è umile per «ricevere»?', ['いただく', 'くださる', 'さしあげる', 'くれる'], 0),
      mc('«Ho ricevuto un regalo dal professore»:', ['せんせいに プレゼントを もらいました。', 'せんせいは プレゼントを もらいました。', 'せんせいに プレゼントを あげました。', 'せんせいを プレゼントが もらいました。'], 0),
      mc('Con una società che invia qualcosa si dice:', ['かいしゃから', 'かいしゃを', 'かいしゃへ を', 'かいしゃの'], 0),
      listen('ははは わたしに セーターを くれました。', 'ja', 'Che cosa dice?', ['Mia madre mi ha dato un maglione', 'Ho dato un maglione a mia madre', 'Ho comprato un maglione', 'Mia madre ha un maglione'], 0),
      order('Metti in ordine: «Ho dato un regalo a un amico»', ['ともだちに', 'プレゼントを', 'あげました'], 'B に N を あげる.'),
      fillJ('Completa: ともだちは わたしに おかしを くれ___ 。(passato)', ['ました'], 'くれました.')
    ],
    test: [
      mc('Se qualcuno dà qualcosa a te, dici…', ['くれる', 'あげる', 'もらう (soggetto = chi dà)', 'さしあげる'], 0),
      mc('«Ho ricevuto» si dice…', ['もらいました', 'あげました', 'くれました', 'くださいました'], 0),
      mc('«Ho insegnato giapponese a un amico (favore)»:', ['にほんごを おしえて あげました。', 'にほんごを おしえて もらいました。', 'にほんごを おしえて くれました。', 'にほんごが おしえて あげた。'], 0),
      mc('Per un superiore che ti dà qualcosa si usa…', ['くださる', 'くれる', 'あげる', 'さしあげる'], 0)
    ],
    cards: [card('c1', 'dare (a un altro)', 'あげる', '', 'あげる'), card('c2', 'ricevere', 'もらう', '', 'もらう'), card('c3', 'dare a me', 'くれる', '', 'くれる'), card('c4', 'dare (umile)', 'さしあげる', '', 'さしあげる'),
      card('c5', 'ricevere (umile)', 'いただく', '', 'いただく'), card('c6', 'dare a me (onorifico)', 'くださる', '', 'くださる'), card('c7', 'regalo', 'プレゼント', '', 'ぷれぜんと'), card('c8', 'souvenir', 'お[土産|みやげ]', '', 'おみやげ'), card('c9', 'dizionario', '[辞書|じしょ]', '', 'じしょ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'I regali', text: 'わたしは ともだちに ほんを あげました。ははは わたしに セーターを くれました。せんせいに きっぷを もらいました。ともだちは わたしに にほんごを おしえて くれました。',
      qs: [{ q: 'Che cosa ha regalato all’amico?', o: ['Un maglione', 'Un biglietto', 'Un libro', 'Un dizionario'], a: 2, kind: 'explicit' }, { q: 'Che cosa gli ha dato la madre?', o: ['Un maglione', 'Un libro', 'Un biglietto', 'Dei soldi'], a: 0, kind: 'explicit' }, { q: 'Da chi ha ricevuto un biglietto?', o: ['Dall’amico', 'Dall’insegnante', 'Dalla madre', 'Dal capo'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'ともだちに ほんを あげました', lang: 'ja' }, { text: 'ははは わたしに セーターを くれました', lang: 'ja' }, { text: 'せんせいに きっぷを もらいました', lang: 'ja' }],
    shadowing: [{ text: 'ともだちに ほんを あげました。', lang: 'ja', tip: 'あげ: a・ge.' }, { text: 'ははは わたしに くれました。', lang: 'ja', tip: 'Tono riconoscente.' }, { text: 'せんせいに もらいました。', lang: 'ja', tip: 'もらい: mo・ra・i.' }],
    speaking: [{ prompt: 'Di’ che cosa hai regalato e che cosa hai ricevuto per il compleanno.', model: 'ともだちに ほんを あげました。ははは わたしに セーターを くれました。ちちに とけいを もらいました。' }, { prompt: 'Ringrazia un amico che ti ha aiutato (favore).', model: 'ともだちは わたしに にほんごを おしえて くれました。ほんとうに ありがとう。' }] });

  T({ id: 'jpn-j2-kanji-2b', stage: 'J2', prereq: ['jpn-j1-kanji-1'], title: 'Kanji 2b: natura e famiglia', summary: '12 kanji N5 nuovi: 山 川 田 男 女 子 父 母 兄 弟 姉 妹.',
    objectives: ['Riconoscere e leggere 12 nuovi kanji N5', 'Leggere i termini di parentela e i nomi di persona', 'Distinguere le letture kun e on'],
    pages: [
      { h: 'Obiettivo', b: 'Dopo i primi kanji (日, 月, 人, 大…) questi dodici ti servono subito: **natura** ({{ja|[山|やま]}}, {{ja|[川|かわ]}}, {{ja|[田|た]}}), **persone** ({{ja|[男|おとこ]}}, {{ja|[女|おんな]}}, {{ja|[子|こ]}}) e **famiglia** ({{ja|[父|ちち]}}, {{ja|[母|はは]}}, {{ja|[兄|あに]}}, {{ja|[弟|おとうと]}}, {{ja|[姉|あね]}}, {{ja|[妹|いもうと]}}). Li trovi nei cognomi, nella segnaletica e nelle presentazioni.' },
      { h: 'Natura e cognomi', b: '- **山** (やま; さん): montagna: {{ja|[富士山|ふじさん]}} monte Fuji, {{ja|[山|やま]}} da solo, cognome {{ja|[山田|やまだ]}}\n- **川** (かわ; せん): fiume: {{ja|[川|かわ]}}, {{ja|[小川|おがわ]}} ruscello\n- **田** (た; でん): risaia: {{ja|[田中|たなか]}}, {{ja|[山田|やまだ]}}, {{ja|[田|た]んぼ}}\n\nMolti cognomi giapponesi derivano da elementi del paesaggio: {{ja|[山田|やまだ]さん}}, {{ja|[川口|かわぐち]さん}}, {{ja|[田中|たなか]さん}}.' },
      { h: 'Persone', b: '- **男** (おとこ; だん): uomo: {{ja|[男|おとこ]の [子|こ]}} (ragazzo), {{ja|[男性|だんせい]}}\n- **女** (おんな; じょ): donna: {{ja|[女|おんな]の [子|こ]}} (ragazza), {{ja|[女性|じょせい]}}\n- **子** (こ; し): bambino: {{ja|[子供|こども]}}, {{ja|[女子|じょし]}}, {{ja|[男子|だんし]}}\n\nSui bagni: **男** (maschi) e **女** (donne) sono i primi kanji da riconoscere in Giappone!' },
      { h: 'Famiglia: la mia e quella degli altri', b: 'Per **la mia famiglia** (parlando con altri):\n- {{ja|[父|ちち]}} padre, {{ja|[母|はは]}} madre, {{ja|[兄|あに]}} fratello maggiore, {{ja|[姉|あね]}} sorella maggiore, {{ja|[弟|おとうと]}} fratello minore, {{ja|[妹|いもうと]}} sorella minore\n\nPer **la famiglia degli altri** (o quando ci si rivolge a loro) si aggiunge お e さん:\n- {{ja|お[父|とう]さん}}, {{ja|お[母|かあ]さん}}, {{ja|お[兄|にい]さん}}, {{ja|お[姉|ねえ]さん}}\n\nTermini collettivi: {{ja|[兄弟|きょうだい]}} (fratelli), {{ja|[姉妹|しまい]}} (sorelle).' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[山田|やまだ]さんには [兄|あに]が ひとり、[妹|いもうと]が ひとり います。[父|ちち]と [母|はは]は [田|た]んぼの [近|ちか]くに [住|す]んで います。}}\n\n→ *Yamada ha un fratello maggiore e una sorella minore. Padre e madre vivono vicino alle risaie.*\n\nControllo: 山田 (やまだ), 兄 (あに), 妹 (いもうと), 父 (ちち), 母 (はは), 田んぼ (たんぼ).' },
      { h: 'Errori comuni', b: '- Leggere 父 come *おとうさん* quando parli della **tua** famiglia: usa ちち.\n- *おにいさん* per il tuo fratello maggiore parlando con altri: usa あに.\n- Confondere 川 (tre linee) con 山 (tre picchi): 山 ha il centro più alto.\n- Confondere 兄 e 弟: il fratello maggiore (兄) ha la bocca sopra le gambe; 弟 ha il tratto di crescita.\n- 子 non va confuso con 字 (carattere), 学.\n- Leggere 田中 *たなか*: la 中 è «naka», non «chuu».' },
      { h: 'Riepilogo', b: '- Natura: 山 やま, 川 かわ, 田 た.\n- Persone: 男 おとこ, 女 おんな, 子 こ.\n- Famiglia propria: 父 ちち, 母 はは, 兄 あに, 姉 あね, 弟 おとうと, 妹 いもうと.\n- Famiglia altrui: おとうさん, おかあさん, おにいさん, おねえさん.\n- Composti: 兄弟 きょうだい, 姉妹 しまい.' }
    ],
    exercises: [
      mc('Come si legge 山?', ['やま', 'かわ', 'た', 'こ'], 0),
      mc('Come si legge 兄?', ['あに', 'おとうと', 'あね', 'いもうと'], 0),
      mc('Che cosa significa 妹?', ['sorella minore', 'sorella maggiore', 'fratello minore', 'madre'], 0),
      mc('Come si legge 田中さん?', ['たなかさん', 'たちゅうさん', 'でんなかさん', 'たじゅうさん'], 0),
      mc('Come si legge 母?', ['はは', 'ちち', 'あね', 'こ'], 0),
      mc('Il kanji per «donna» è…', ['女', '男', '子', '父'], 0),
      fillJ('Come si legge 弟?', ['おとうと'], 'おとうと.'),
      fillJ('Come si legge 川?', ['かわ', 'kawa'], 'かわ.')
    ],
    test: [
      mc('Come si legge 姉?', ['あね', 'いもうと', 'あに', 'はは'], 0),
      mc('Come si legge 子供?', ['こども', 'しども', 'ことも', 'こうども'], 0),
      mc('«Mio padre» (parlando con altri) si dice…', ['ちち', 'おとうさん', 'おちち', 'ととさん'], 0),
      mc('Che cosa significa 男の子?', ['ragazzo', 'uomo adulto', 'padre', 'fratello'], 0)
    ],
    cards: [card('c1', 'montagna', '[山|やま]', '', 'やま'), card('c2', 'fiume', '[川|かわ]', '', 'かわ'), card('c3', 'risaia', '[田|た]', '', 'た'), card('c4', 'uomo', '[男|おとこ]', '', 'おとこ'), card('c5', 'donna', '[女|おんな]', '', 'おんな'), card('c6', 'bambino', '[子|こ]', '', 'こ'),
      card('c7', 'mio padre', '[父|ちち]', '', 'ちち'), card('c8', 'mia madre', '[母|はは]', '', 'はは'), card('c9', 'fratello maggiore', '[兄|あに]', '', 'あに'), card('c10', 'fratello minore', '[弟|おとうと]', '', 'おとうと'), card('c11', 'sorella maggiore', '[姉|あね]', '', 'あね'), card('c12', 'sorella minore', '[妹|いもうと]', '', 'いもうと')],
    listening: [{ id: 'l1', lang: 'ja', title: 'La famiglia di Yamada', text: 'やまださんには あにが ひとり、いもうとが ひとり います。ちちと ははは たんぼの ちかくに すんでいます。あねは かわの ちかくで はたらいています。',
      qs: [{ q: 'Quanti fratelli maggiori ha Yamada?', o: ['Due', 'Nessuno', 'Uno', 'Tre'], a: 2, kind: 'explicit' }, { q: 'Dove vivono i genitori?', o: ['In montagna', 'Vicino alle risaie', 'In città', 'Vicino al mare'], a: 1, kind: 'explicit' }, { q: 'Dove lavora la sorella maggiore?', o: ['Vicino a un fiume', 'In montagna', 'In una risaia', 'In ufficio'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ちちと ははは げんきです', lang: 'ja' }, { text: 'いもうとが ひとり います', lang: 'ja' }, { text: 'たなかさんの あには かいしゃいんです', lang: 'ja' }],
    shadowing: [{ text: 'ちちと ははは げんきです。', lang: 'ja', tip: 'ちち: chi・chi.' }, { text: 'いもうとが ひとり います。', lang: 'ja', tip: 'いもうと: i・mo・o・to.' }, { text: 'おとうとは がくせいです。', lang: 'ja', tip: 'おとうと: o・to・o・to.' }],
    speaking: [{ prompt: 'Presenta la tua famiglia (padre, madre, fratelli).', model: 'ちちと ははと あねが ひとり います。おとうとは いません。' }, { prompt: 'Chiedi a un amico della sua famiglia usando お～さん.', model: 'おとうさんと おかあさんは おげんきですか。おにいさんは いますか。' }],
    reading: [{ id: 'r1', title: 'La famiglia di Yamada', text: '[山田|やまだ]さんには [兄|あに]が ひとり、[妹|いもうと]が ひとり います。[父|ちち]と [母|はは]は [田|た]んぼの [近|ちか]くに [住|す]んで います。[姉|あね]は [川|かわ]の [近|ちか]くで [働|はたら]いて います。',
      qs: [{ q: 'Quante sorelle minori ha Yamada?', o: ['Una', 'Due', 'Nessuna', 'Tre'], a: 0 }, { q: 'Dove vivono il padre e la madre?', o: ['Vicino a un fiume', 'Vicino alle risaie', 'In montagna', 'In città'], a: 1 }, { q: 'Chi lavora vicino al fiume?', o: ['Il fratello maggiore', 'La madre', 'La sorella maggiore', 'Il padre'], a: 2 }] }] });

  /* ---------------------------------------------------------------- J3 */
  T({ id: 'jpn-j3-conditionals-basic', stage: 'J3', prereq: ['jpn-j2-te-form'], title: 'Condizionali di base: と, ば, たら, なら', summary: 'Le quattro forme per «se / quando» e come scegliere quella giusta.',
    objectives: ['Formare と, ば, たら, なら', 'Capire la differenza d’uso tra le quattro forme', 'Evitare gli errori tipici (と con richiesta o volontà)'],
    pages: [
      { h: 'Obiettivo', b: 'Il giapponese ha **quattro** modi per dire «se / quando»: と, ば, たら, なら. Hanno sfumature diverse. Tra le quattro, **たら** è la più versatile: se hai dubbi, usa quella. Qui impari come si formano e quando preferirne un’altra.' },
      { h: 'と: conseguenza naturale', b: 'Verbo/aggettivo in forma piana + **と**: risultato **automatico**, leggi di natura, abitudini, istruzioni:\n- {{ja|[春|はる]に なると、[桜|さくら]が さきます。}} (quando arriva la primavera sbocciano i ciliegi)\n- {{ja|この ボタンを [押|お]すと、[ドア|どあ]が [開|あ]きます。}} (se premi il pulsante, la porta si apre)\n- {{ja|まっすぐ [行|い]くと、[駅|えき]が あります。}}\n\n**Limite**: dopo と non si possono usare richieste, inviti, volontà o permessi: *あした ひまだと、あそびましょう* è scorretto.' },
      { h: 'ば: condizione ipotetica', b: '**Formazione**: gruppo 1 u → **e + ば**: {{ja|[行|い]けば}}, {{ja|[読|よ]めば}}; gruppo 2: **れば**: {{ja|[食|た]べれば}}; する → {{ja|すれば}}, くる → {{ja|くれば}}; aggettivi い: **～ければ**: {{ja|[安|やす]ければ}}; な/nomi: **～なら(ば)**.\n- {{ja|[安|やす]ければ、[買|か]います。}} (se è economico, lo compro)\n- {{ja|[急|いそ]げば、[間|ま]に[合|あ]います。}} (se ti sbrighi ce la fai)\n- {{ja|よく [勉強|べんきょう]すれば、[合格|ごうかく]できます。}}\n\nIl ば sottolinea la **condizione necessaria**.' },
      { h: 'たら: la più versatile', b: '**Formazione**: forma passata piana + **ら**: {{ja|[食|た]べたら}}, {{ja|[行|い]ったら}}, {{ja|[高|たか]かったら}}, {{ja|[雨|あめ]だったら}}.\n- {{ja|[雨|あめ]が [降|ふ]ったら、[行|い]きません。}} (se piove non vado)\n- {{ja|[家|いえ]に [帰|かえ]ったら、[電話|でんわ]して ください。}} (quando torni a casa telefona) → qui たら = «quando» **con azione futura**\n- {{ja|[時間|じかん]が あったら、[手伝|てつだ]って ください。}}\n\nPuò essere seguita da richieste, inviti, volontà.' },
      { h: 'なら: «se è così / se hai detto…»', b: '**Nome / forma piana + なら**: si usa quando si **riprende** ciò che l’altro ha detto:\n- {{ja|[京都|きょうと]へ [行|い]くなら、[春|はる]が いいですよ。}} (se vai a Kyoto, meglio in primavera)\n- {{ja|[日本語|にほんご]を [勉強|べんきょう]したいなら、この [本|ほん]が いいです。}}\n- {{ja|[安|やす]いのが いいなら、あちらの [店|みせ]へ [行|い]って ください。}}\n\nIl な si può usare anche con 現在・未来. Dopo なら può comparire un consiglio.' },
      { h: 'Errori comuni', b: '- *あした あめが ふると、いきません* (と con volontà) → {{ja|ふったら、いきません。}}\n- *かえるば* → {{ja|かえれば。}}\n- *たかいたら* → {{ja|たかかったら。}}\n- *ひまなたら* → {{ja|ひまだったら。}}\n- Confondere たら (condizione) con ～たあとで (dopo aver fatto).\n- Usare と per un consiglio: serve なら / たら.' },
      { h: 'Riepilogo', b: '- と: risultato automatico; non per richieste o volontà.\n- ば: condizione ipotetica (u→eば, ければ, なら).\n- たら: forma passata + ら, la più versatile.\n- なら: riprende un tema, per consigli.\n- Se dubiti, usa たら.' }
    ],
    exercises: [
      mc('«Se piove, non vado»:', ['あめが ふったら、いきません。', 'あめが ふれば いきませんでした。', 'あめを ふると いく。', 'あめが ふるなら ました。'], 0),
      mc('Forma ば di 行く:', ['いけば', 'いくば', 'いければ', 'いったば'], 0),
      mc('Forma ば di 安い:', ['やすければ', 'やすいば', 'やすくば', 'やすいなら'], 0),
      mc('«Se vai a Kyoto…» (consiglio):', ['きょうとへ いくなら、はるが いいですよ。', 'きょうとへ いくと、はるが いいですよ。', 'きょうとへ いけば いいから。', 'きょうとへ いったと。'], 0),
      mc('Quando NON si può usare と?', ['Quando segue una richiesta', 'Per leggi di natura', 'Per istruzioni di macchinari', 'Per abitudini'], 0),
      listen('えきに ついたら、でんわして ください。', 'ja', 'Che cosa dice?', ['Quando arrivi alla stazione, telefona', 'Se non vieni, avvisami', 'Arrivo alla stazione', 'Telefono dalla stazione'], 0),
      fillJ('Completa: やすけ___ かいます。', ['れば'], 'ければ.'),
      fillJ('Completa: ひまだっ___ てつだってください。', ['たら'], 'だったら.')
    ],
    test: [
      mc('Quale è la forma たら di 食べる?', ['たべたら', 'たべれば', 'たべると', 'たべるなら'], 0),
      mc('«Premi il pulsante e la porta si apre»:', ['ボタンを おすと、ドアが あきます。', 'ボタンを おせば ドアを。', 'ボタンを おしたいと', 'ボタンを おすたら'], 0),
      mc('Quale frase è corretta?', ['あした ひまだったら、あそびましょう。', 'あした ひまだと、あそびましょう。', 'あした ひまなたら あそぶ。', 'あした ひまだば あそびましょう。'], 0),
      mc('«ば» + aggettivo i:', ['～ければ', '～いば', '～くば', '～かったば'], 0)
    ],
    cards: [card('c1', 'quando / se (risultato)', '～と', '', 'と'), card('c2', 'se (ipotesi)', '～ば', '', 'ば'), card('c3', 'se / quando', '～たら', '', 'たら'), card('c4', 'se (tema)', '～なら', '', 'なら'), card('c5', 'sbocciare', 'さく', '', 'さく'), card('c6', 'premere', '[押|お]す', '', 'おす'),
      card('c7', 'sbrigarsi', '[急|いそ]ぐ', '', 'いそぐ'), card('c8', 'ce la fai in tempo', '[間|ま]に[合|あ]う', '', 'まにあう'), card('c9', 'superare l’esame', '[合格|ごうかく]する', '', 'ごうかくする')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Consigli di viaggio', text: 'きょうとへ いくなら、はるが いいですよ。さくらが さきますから。えきに ついたら、でんわして ください。あめが ふったら、でんしゃで いきましょう。やすければ、かいます。',
      qs: [{ q: 'Quando conviene andare a Kyoto?', o: ['In inverno', 'In primavera', 'In estate', 'In autunno'], a: 1, kind: 'explicit' }, { q: 'Che cosa deve fare quando arriva alla stazione?', o: ['Telefonare', 'Comprare un biglietto', 'Aspettare', 'Mangiare'], a: 0, kind: 'explicit' }, { q: 'Come ci vanno se piove?', o: ['A piedi', 'In bicicletta', 'In treno', 'In autobus'], a: 2, kind: 'explicit' }] }],
    dictation: [{ text: 'あめが ふったら いきません', lang: 'ja' }, { text: 'やすければ かいます', lang: 'ja' }, { text: 'きょうとへ いくなら はるが いいです', lang: 'ja' }],
    shadowing: [{ text: 'あめが ふったら いきません。', lang: 'ja', tip: 'ふったら: fut・ta・ra.' }, { text: 'やすければ かいます。', lang: 'ja', tip: 'やすければ: ya・su・ke・re・ba.' }, { text: 'いそげば まにあいます。', lang: 'ja', tip: 'Tono rassicurante.' }],
    speaking: [{ prompt: 'Di’ che cosa fai se piove e che cosa fai se hai tempo libero.', model: 'あめが ふったら、いえに います。じかんが あったら、えいがを みに いきます。' }, { prompt: 'Dai un consiglio a un amico che vuole andare in Giappone usando なら.', model: 'にほんへ いくなら、はるが いいですよ。さくらが きれいですから。' }] });

  T({ id: 'jpn-j3-purpose-ni-tame-youni', stage: 'J3', prereq: ['jpn-j2-intentions'], title: 'Esprimere lo scopo: に, ために, ように', summary: 'Tre modi per dire «per» + scopo, con le differenze d’uso.',
    objectives: ['Usare ～に行く / ～に来る per lo scopo di un movimento', 'Usare ～ために con volontà e ～ように con non-volontà', 'Distinguere scopo e causa'],
    pages: [
      { h: 'Obiettivo', b: 'Per dire «vado **per** comprare…», «studio **per** passare l’esame», «parlo piano **perché** capiate» il giapponese usa tre strutture. La scelta dipende da **chi agisce** e dal **tipo di verbo**.' },
      { h: '～に 行く / 来る / 帰る', b: 'Scopo di uno spostamento: **radice in ます + に** + verbo di moto:\n- {{ja|[買|か]い[物|もの]に [行|い]きます。}} (vado a fare spesa) — con nomi d’azione si può omettere する: {{ja|[散歩|さんぽ]に [行|い]きます。}}\n- {{ja|[映画|えいが]を [見|み]に [行|い]きます。}} (vado a vedere un film)\n- {{ja|[友達|ともだち]に [会|あ]いに [来|き]ました。}}\n- {{ja|[日本|にほん]へ [日本語|にほんご]を [勉強|べんきょう]しに [来|き]ました。}}\n\nIl verbo dopo に è **sempre di movimento** (行く, 来る, 帰る, 出かける).' },
      { h: '～ために: scopo volontario', b: '**Verbo (forma del dizionario) + ために** / **nome + の + ために**: lo stesso soggetto compie l’azione volontaria:\n- {{ja|[日本語|にほんご]を [話|はな]すために、[毎日|まいにち] [勉強|べんきょう]して います。}}\n- {{ja|[家族|かぞく]の ために、[働|はたら]いて います。}} (lavoro per la famiglia)\n- {{ja|[試験|しけん]に [合格|ごうかく]する ために、がんばります。}}\n\nIl verbo prima di ために deve essere **volontario** (non potenziale, non negativo di stato).' },
      { h: '～ように: scopo non controllabile', b: '**Dizionario/negativo/potenziale + ように**: lo scopo non è un’azione volontaria, oppure il soggetto è **diverso**:\n- {{ja|[忘|わす]れないように、メモします。}} (prendo appunti per non dimenticare)\n- {{ja|[日本語|にほんご]が [話|はな]せるように、[勉強|べんきょう]して います。}} (studio per riuscire a parlare giapponese)\n- {{ja|[後|うし]ろの [人|ひと]にも [聞|き]こえるように、[大|おお]きい [声|こえ]で [話|はな]します。}}\n\nRegola pratica: **ために = io faccio per ottenere**; **ように = affinché succeda / affinché tu possa**.' },
      { h: 'Esempio guidato', b: 'Racconta: *Sono venuto in Giappone per studiare. Studio ogni giorno per parlare bene. Prendo appunti per non dimenticare.*\n\n→ {{ja|[日本語|にほんご]を [勉強|べんきょう]しに [来|き]ました。じょうずに [話|はな]せるように、[毎日|まいにち] [勉強|べんきょう]して います。[忘|わす]れないように、メモします。}}\n\nControllo: 勉強しに (movimento), 話せるように (potenziale), 忘れないように (negativo).' },
      { h: 'Errori comuni', b: '- *かいものを いきます* → {{ja|かいものに いきます。}}\n- *たべに ために* → non si combinano.\n- *わすれないために* → {{ja|わすれないように。}}\n- *はなせるために* → {{ja|はなせるように。}}\n- Confondere scopo e causa: *ために* può significare anche causa con nomi (**じこの ため、おくれました**).\n- Usare に dopo un verbo che non è di movimento: *たべに します.*' },
      { h: 'Riepilogo', b: '- Vます + に + 行く/来る: scopo del movimento.\n- Dizionario + ために; 名詞 + の + ために: azione volontaria.\n- ように: non controllabile / negativo / potenziale / soggetto diverso.\n- ために ≠ ように.' }
    ],
    exercises: [
      mc('«Vado a fare spesa»:', ['かいものに いきます。', 'かいものを いきます。', 'かいものは いくために。', 'かいものと いきます。'], 0),
      mc('«Studio per superare l’esame»:', ['しけんに ごうかくする ために べんきょうします。', 'しけんに ごうかくするように を。', 'しけんを ごうかくしに ために。', 'しけんで ごうかくしたら。'], 0),
      mc('«Prendo appunti per non dimenticare»:', ['わすれないように メモします。', 'わすれないために メモします。', 'わすれるために メモします。', 'わすれなくに メモします。'], 0),
      mc('«Lavoro per la famiglia»:', ['かぞくの ために はたらきます。', 'かぞくに ように はたらきます。', 'かぞくを ために はたらきます。', 'かぞくで はたらいに。'], 0),
      mc('Dopo ～に (scopo) deve esserci un verbo…', ['di movimento', 'di stato', 'al passato', 'al negativo'], 0),
      listen('にほんごを べんきょうしに きました。', 'ja', 'Che cosa dice?', ['Sono venuto per studiare giapponese', 'Studio giapponese a casa', 'Parlo giapponese ogni giorno', 'Sono stato in Giappone'], 0),
      fillJ('Completa: えいがを み___ いきます。(radice + scopo)', ['に'], 'みに.'),
      fillJ('Completa: ひとにも きこえる___ おおきい こえで はなします。', ['ように'], 'Soggetto diverso: ように.')
    ],
    test: [
      mc('Quale è corretta?', ['ともだちに あいに きました。', 'ともだちを あいに きました。', 'ともだちに あうために に きました。', 'ともだちが あいに ために。'], 0),
      mc('«Studio per riuscire a parlare» usa…', ['ように', 'ために', 'たら', 'のに'], 0),
      mc('«Per la salute» (nome):', ['けんこうの ために', 'けんこうの ように', 'けんこうに ために', 'けんこうと ため'], 0),
      mc('Quale non è mai possibile?', ['わすれないために', 'わすれないように', 'べんきょうしに', 'かぞくの ために'], 0)
    ],
    cards: [card('c1', 'fare spesa', '[買|か]い[物|もの]', '', 'かいもの'), card('c2', 'passeggiata', '[散歩|さんぽ]', '', 'さんぽ'), card('c3', 'film', '[映画|えいが]', '', 'えいが'), card('c4', 'per (scopo volontario)', '～ために', '', 'ために'), card('c5', 'affinché', '～ように', '', 'ように'),
      card('c6', 'dimenticare', '[忘|わす]れる', '', 'わすれる'), card('c7', 'esame', '[試験|しけん]', '', 'しけん'), card('c8', 'sforzarsi', 'がんばる', '', 'がんばる'), card('c9', 'sentirsi (si sente)', '[聞|き]こえる', '', 'きこえる'), card('c10', 'voce', '[声|こえ]', '', 'こえ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Perché sono qui', text: 'にほんごを べんきょうしに きました。じょうずに はなせるように、まいにち べんきょうして います。わすれないように、メモします。かぞくの ために、しごとも がんばります。',
      qs: [{ q: 'Perché è venuto in Giappone?', o: ['Per lavorare', 'Per studiare giapponese', 'Per turismo', 'Per vedere amici'], a: 1, kind: 'explicit' }, { q: 'Perché prende appunti?', o: ['Per non dimenticare', 'Per l’esame', 'Per il lavoro', 'Per scrivere un diario'], a: 0, kind: 'explicit' }, { q: 'Per chi si impegna nel lavoro?', o: ['Per il capo', 'Per i colleghi', 'Per la famiglia', 'Per sé stesso'], a: 2, kind: 'explicit' }] }],
    dictation: [{ text: 'かいものに いきます', lang: 'ja' }, { text: 'わすれないように メモします', lang: 'ja' }, { text: 'かぞくの ために はたらきます', lang: 'ja' }],
    shadowing: [{ text: 'かいものに いきます。', lang: 'ja', tip: 'かいもの: ka・i・mo・no.' }, { text: 'わすれないように メモします。', lang: 'ja', tip: 'ように: yo・o・ni.' }, { text: 'かぞくの ために がんばります。', lang: 'ja', tip: 'ために: ta・me・ni.' }],
    speaking: [{ prompt: 'Spiega perché sei venuto a studiare/lavorare (scopo del movimento).', model: 'にほんごを べんきょうしに きました。にほんの ぶんかを しりたいです。' }, { prompt: 'Spiega che cosa fai per non dimenticare o per migliorare.', model: 'わすれないように メモします。じょうずに なるために まいにち れんしゅうします。' }] });

  T({ id: 'jpn-j3-kanji-3b', stage: 'J3', prereq: ['jpn-j2-kanji-2'], title: 'Kanji 3b: corpo e salute', summary: '12 kanji N4: 病 院 医 薬 体 頭 顔 足 耳 心 力 動.',
    objectives: ['Leggere 12 kanji N4 legati a corpo e salute', 'Descrivere sintomi semplici', 'Leggere avvisi e cartelli di ospedale e farmacia'],
    pages: [
      { h: 'Obiettivo', b: 'Questi kanji ti servono quando **non stai bene**: in ospedale, in farmacia, dal medico. Impari anche parole del corpo molto usate nella vita quotidiana.' },
      { h: 'Ospedale e salute', b: '- **病** (びょう; やまい): malattia: {{ja|[病気|びょうき]}} malattia, {{ja|[病院|びょういん]}} ospedale\n- **院** (いん): istituto: {{ja|[病院|びょういん]}}, {{ja|[医院|いいん]}} ambulatorio\n- **医** (い): medicina: {{ja|[医学|いがく]}}, {{ja|お[医者|いしゃ]さん}} medico\n- **薬** (くすり; やく): farmaco: {{ja|[薬|くすり]を [飲|の]みます。}}\n\nFrasi: {{ja|[病気|びょうき]に なりました。}} (mi sono ammalato) / {{ja|[病院|びょういん]へ [行|い]きます。}}' },
      { h: 'Parti del corpo', b: '- **体** (からだ; たい): corpo: {{ja|[体|からだ]が [大|おお]きい}}, {{ja|[体力|たいりょく]}} forza fisica\n- **頭** (あたま; とう): testa: {{ja|[頭|あたま]が [痛|いた]いです。}}\n- **顔** (かお; がん): viso: {{ja|[顔|かお]を [洗|あら]います。}}\n- **足** (あし; そく): piede/gamba: {{ja|[足|あし]が [痛|いた]いです。}}\n- **耳** (みみ; じ): orecchio: {{ja|[耳|みみ]が [聞|き]こえません。}}\n\nAttenzione: {{ja|[足|あし]}} indica sia piede sia gamba, a seconda del contesto.' },
      { h: 'Mente e movimento', b: '- **心** (こころ; しん): cuore/mente: {{ja|[心|こころ]が [広|ひろ]い}} (di larghe vedute), {{ja|[心配|しんぱい]}} preoccupazione\n- **力** (ちから; りょく): forza: {{ja|[力|ちから]が あります。}}, {{ja|[体力|たいりょく]}}\n- **動** (うごく; どう): muoversi: {{ja|[動|うご]きます。}} {{ja|[動|うご]かないで ください。}}\n\nPer dire come ti senti: {{ja|[体|からだ]の [調子|ちょうし]が [悪|わる]いです。}} (non sto bene) / {{ja|[元気|げんき]です。}}' },
      { h: 'Dal medico: frasi utili', b: '- {{ja|[頭|あたま]が [痛|いた]いです。}} (ho mal di testa)\n- {{ja|[足|あし]が [痛|いた]いので、[病院|びょういん]へ [行|い]きます。}}\n- {{ja|[薬|くすり]を [飲|の]んで、[休|やす]んで ください。}} (prenda il medicinale e riposi)\n- {{ja|お[医者|いしゃ]さんに [見|み]て もらいました。}} (mi ha visitato il medico)\n- {{ja|[心配|しんぱい]しないで ください。}} (non si preoccupi)\n\nLa pronuncia di 薬局 (やっきょく, farmacia) la studierai con kanji più avanti.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[頭|あたま]と [足|あし]が [痛|いた]いので、[病院|びょういん]へ [行|い]きました。お[医者|いしゃ]さんは「[心配|しんぱい]しないで ください」と [言|い]いました。[薬|くすり]を [飲|の]んで、[体|からだ]を [休|やす]めます。}}\n\n→ *Mi facevano male testa e gamba, così sono andato in ospedale. Il medico ha detto «non si preoccupi». Prenderò le medicine e mi riposerò.*' },
      { h: 'Errori comuni', b: '- Confondere 体 (からだ) con 休 (やすむ): 体 ha 本 a destra, 休 ha 木.\n- Leggere 薬 come *やく* quando è くすり (solo nei composti: 薬局).\n- *あたま* e *かお*: non confondere 頭 con 顔 (顔 ha 彦 a sinistra).\n- Dimenticare **が** con いたい: {{ja|あたまが いたい。}}\n- 動 con 働 (はたらく) sono diversi: il secondo ha 亻.\n- Pronunciare 病院 *びょいん* senza しゃ: è びょういん.' },
      { h: 'Riepilogo', b: '- 病院 びょういん, 病気 びょうき, 医学 いがく, 薬 くすり.\n- 体 からだ, 頭 あたま, 顔 かお, 足 あし, 耳 みみ.\n- 心 こころ, 力 ちから, 動 うごく.\n- Frasi: 頭が痛いです / 薬を飲みます / 心配しないでください.' }
    ],
    exercises: [
      mc('Come si legge 病院?', ['びょういん', 'びょうえん', 'へいいん', 'やまいいん'], 0),
      mc('Come si legge 薬?', ['くすり', 'のみもの', 'やく', 'くつり'], 0),
      mc('Che cosa significa 頭?', ['testa', 'faccia', 'piede', 'orecchio'], 0),
      mc('Come si legge 体?', ['からだ', 'たいり', 'みぎ', 'あたま'], 0),
      mc('Come si legge 顔?', ['かお', 'あたま', 'みみ', 'かん'], 0),
      mc('Come si legge 心配?', ['しんぱい', 'こころくばり', 'しんはい', 'ごころはい'], 0),
      fillJ('Come si legge 足?', ['あし'], 'あし.'),
      fillJ('Come si legge 力?', ['ちから'], 'ちから.')
    ],
    test: [
      mc('Come si legge 病気?', ['びょうき', 'びょうげ', 'やまいき', 'へいき'], 0),
      mc('Come si legge 耳?', ['みみ', 'あし', 'かお', 'はな'], 0),
      mc('Che cosa significa 動く?', ['muoversi', 'dormire', 'parlare', 'scrivere'], 0),
      mc('«Ho mal di testa»:', ['あたまが いたいです', 'あたまを いたいです', 'あしが あたまです', 'あたまに いたいです'], 0)
    ],
    cards: [card('c1', 'malattia', '[病気|びょうき]', '', 'びょうき'), card('c2', 'ospedale', '[病院|びょういん]', '', 'びょういん'), card('c3', 'medicina (scienza)', '[医学|いがく]', '', 'いがく'), card('c4', 'farmaco', '[薬|くすり]', '', 'くすり'), card('c5', 'corpo', '[体|からだ]', '', 'からだ'),
      card('c6', 'testa', '[頭|あたま]', '', 'あたま'), card('c7', 'viso', '[顔|かお]', '', 'かお'), card('c8', 'piede / gamba', '[足|あし]', '', 'あし'), card('c9', 'orecchio', '[耳|みみ]', '', 'みみ'), card('c10', 'cuore, mente', '[心|こころ]', '', 'こころ'), card('c11', 'forza', '[力|ちから]', '', 'ちから'), card('c12', 'muoversi', '[動|うご]く', '', 'うごく')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Dal medico', text: 'あたまと あしが いたいので、びょういんへ いきました。おいしゃさんは「しんぱいしないで ください」と いいました。くすりを のんで、からだを やすめます。',
      qs: [{ q: 'Dove gli fa male?', o: ['Alla testa e al piede', 'Al viso', 'Agli orecchi', 'Alla schiena'], a: 0, kind: 'explicit' }, { q: 'Che cosa gli ha detto il medico?', o: ['Di non preoccuparsi', 'Di tornare domani', 'Di non mangiare', 'Di dormire poco'], a: 0, kind: 'explicit' }, { q: 'Che cosa farà?', o: ['Andrà in montagna', 'Prenderà la medicina e si riposerà', 'Tornerà al lavoro', 'Farà una passeggiata'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'あたまが いたいです', lang: 'ja' }, { text: 'びょういんへ いきます', lang: 'ja' }, { text: 'くすりを のんで ください', lang: 'ja' }],
    shadowing: [{ text: 'あたまが いたいです。', lang: 'ja', tip: 'いたい: i・ta・i.' }, { text: 'びょういんへ いきます。', lang: 'ja', tip: 'びょういん: byo・o・i・n.' }, { text: 'くすりを のんで ください。', lang: 'ja', tip: 'のんで: non・de.' }],
    speaking: [{ prompt: 'Spiega a un medico dove ti fa male.', model: 'あたまと あしが いたいです。からだが ちょっと だるいです。' }, { prompt: 'Rassicura un amico che sta male.', model: 'しんぱいしないで ください。くすりを のんで、ゆっくり やすんで ください。' }],
    reading: [{ id: 'r1', title: 'In ospedale', text: '[頭|あたま]と [足|あし]が [痛|いた]いので、[病院|びょういん]へ [行|い]きました。お[医者|いしゃ]さんは「[心配|しんぱい]しないで ください」と [言|い]いました。[薬|くすり]を [飲|の]んで、[体|からだ]を [休|やす]めます。',
      qs: [{ q: 'Dove sente dolore?', o: ['Testa e gamba', 'Viso', 'Orecchie', 'Cuore'], a: 0 }, { q: 'Dove è andato?', o: ['In farmacia', 'In ospedale', 'A casa', 'In ufficio'], a: 1 }, { q: 'Che cosa farà dopo?', o: ['Andrà al lavoro', 'Correrà', 'Prenderà la medicina e riposerà', 'Viaggerà'], a: 2 }] }] });

  /* ---------------------------------------------------------------- J4 */
  T({ id: 'jpn-j4-kanji-4b', stage: 'J4', prereq: ['jpn-j3-kanji-3'], title: 'Kanji 4b: decisioni, piani e relazioni', summary: '12 kanji N3: 決 必 要 注 計 画 準 備 結 果 関 係.',
    objectives: ['Leggere 12 kanji N3 di uso astratto', 'Capire parole composte di piani e decisioni', 'Leggere un breve testo di lavoro'],
    pages: [
      { h: 'Obiettivo', b: 'Sono kanji che ritrovi in **piani, riunioni, notizie**. Insieme formano parole molto usate: 決める, 必要, 注意, 計画, 準備, 結果, 関係. Imparandoli come composti vedrai subito i pattern.' },
      { h: 'Decidere e bisogno', b: '- **決** (き.める; けつ): decidere: {{ja|[決|き]める}}, {{ja|[決|き]まる}} (essere deciso), {{ja|[決定|けってい]}} decisione\n- **必** (かならず; ひつ): necessariamente: {{ja|[必|かなら]ず [来|き]て ください。}} (venga senza fallo)\n- **要** (い.る; よう): servire/necessario: {{ja|[必要|ひつよう]}} necessario, {{ja|ふくろは [要|い]りません。}}\n\nFrasi: {{ja|[会議|かいぎ]の [日|ひ]が [決|き]まりました。}} / {{ja|ビザが [必要|ひつよう]です。}}' },
      { h: 'Piani e preparativi', b: '- **計** (けい; はか.る): calcolare/piano: {{ja|[計画|けいかく]}} piano, {{ja|[時計|とけい]}} orologio\n- **画** (が; かく): disegno/progetto: {{ja|[計画|けいかく]}}, {{ja|[画家|がか]}} pittore\n- **準** (じゅん): preparare, standard: {{ja|[準備|じゅんび]}} preparativi\n- **備** (び; そな.える): predisporre: {{ja|[準備|じゅんび]}}, {{ja|[備|そな]える}}\n\nFrasi: {{ja|[旅行|りょこう]の [計画|けいかく]を [立|た]てます。}} / {{ja|[会議|かいぎ]の [準備|じゅんび]を しました。}}' },
      { h: 'Attenzione, risultato, relazione', b: '- **注** (ちゅう; そそ.ぐ): versare/attenzione: {{ja|[注意|ちゅうい]}} attenzione, {{ja|[注意|ちゅうい]して ください。}}\n- **結** (けつ; むす.ぶ): legare/concludere: {{ja|[結果|けっか]}} risultato, {{ja|[結|むす]ぶ}}\n- **果** (か; は.たす): frutto/risultato: {{ja|[結果|けっか]}}, {{ja|[果物|くだもの]}} frutta\n- **関** (かん; せき): connessione: {{ja|[関係|かんけい]}} relazione, {{ja|[関心|かんしん]}} interesse\n- **係** (けい; かかり): addetto, relazione: {{ja|[関係|かんけい]}}, {{ja|[係|かかり]の [人|ひと]}} l’addetto\n\nFrasi: {{ja|[結果|けっか]は あした [発表|はっぴょう]します。}} / {{ja|その [問題|もんだい]と [関係|かんけい]が あります。}}' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[新|あたら]しい [計画|けいかく]の [準備|じゅんび]が [必要|ひつよう]です。[結果|けっか]が [決|き]まったら、[関係|かんけい]の [人|ひと]に [連絡|れんらく]して ください。[注意|ちゅうい]して [進|すす]めましょう。}}\n\n→ *Servono i preparativi per il nuovo piano. Quando il risultato è deciso, contatta le persone interessate. Procediamo con attenzione.*' },
      { h: 'Errori comuni', b: '- Confondere 決 con 快 (dal tratto sinistro simile).\n- Leggere 要 sempre *よう*: con il verbo è **いる** (要る), ma 必要 è ひつよう.\n- Confondere 計 e 話: 計 ha 十 a destra.\n- *結果* si legge けっか, non *けつか*.\n- 係 e 関: 関係 è una sola parola, letta かんけい.\n- 備 (び) ha il radicale 亻 a sinistra: non confonderlo con 係 (che ha lo stesso radicale ma altro significato).' },
      { h: 'Riepilogo', b: '- 決める, 決まる, 決定; 必ず, 必要, 要る.\n- 計画, 準備.\n- 注意, 結果, 関係.\n- Letture on frequenti nei composti; kun nei verbi.' }
    ],
    exercises: [
      mc('Come si legge 決める?', ['きめる', 'けめる', 'さめる', 'けつめる'], 0),
      mc('Come si legge 必要?', ['ひつよう', 'かならよう', 'ひっよう', 'ひつい'], 0),
      mc('Come si legge 計画?', ['けいかく', 'けいが', 'けがく', 'けいがく'], 0),
      mc('Come si legge 準備?', ['じゅんび', 'じんび', 'じゅんぴ', 'しゅんび'], 0),
      mc('Come si legge 結果?', ['けっか', 'けつか', 'むすび', 'けっが'], 0),
      mc('Che cosa significa 関係?', ['relazione', 'risultato', 'attenzione', 'preparativi'], 0),
      fillJ('Come si legge 注意?', ['ちゅうい'], 'ちゅうい.'),
      fillJ('Come si legge 必ず?', ['かならず'], 'かならず.')
    ],
    test: [
      mc('Come si legge 決定?', ['けってい', 'けつてい', 'けっじょう', 'きまる'], 0),
      mc('Che cosa significa 準備?', ['preparativi', 'attenzione', 'decisione', 'relazione'], 0),
      mc('Come si legge 関心?', ['かんしん', 'せきこころ', 'かんじん', 'かんこころ'], 0),
      mc('«必要» è l’opposto di…', ['不要', '決定', '注意', '結果'], 0)
    ],
    cards: [card('c1', 'decidere', '[決|き]める', '', 'きめる'), card('c2', 'essere deciso', '[決|き]まる', '', 'きまる'), card('c3', 'decisione', '[決定|けってい]', '', 'けってい'), card('c4', 'necessariamente', '[必|かなら]ず', '', 'かならず'), card('c5', 'necessario', '[必要|ひつよう]', '', 'ひつよう'), card('c6', 'piano', '[計画|けいかく]', '', 'けいかく'),
      card('c7', 'preparativi', '[準備|じゅんび]', '', 'じゅんび'), card('c8', 'attenzione', '[注意|ちゅうい]', '', 'ちゅうい'), card('c9', 'risultato', '[結果|けっか]', '', 'けっか'), card('c10', 'relazione', '[関係|かんけい]', '', 'かんけい'), card('c11', 'interesse', '[関心|かんしん]', '', 'かんしん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Il nuovo progetto', text: 'あたらしい けいかくの じゅんびが ひつようです。けっかが きまったら、かんけいの ひとに れんらくして ください。ちゅういして すすめましょう。',
      qs: [{ q: 'Che cosa è necessario?', o: ['I preparativi del piano', 'Un viaggio', 'Una riunione', 'Un nuovo capo'], a: 0, kind: 'explicit' }, { q: 'Quando bisogna contattare le persone interessate?', o: ['Quando il risultato è deciso', 'Subito', 'Domani', 'Mai'], a: 0, kind: 'explicit' }, { q: 'Come si deve procedere?', o: ['Di fretta', 'Con attenzione', 'Da soli', 'Senza piano'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'けいかくの じゅんびを します', lang: 'ja' }, { text: 'けっかが きまりました', lang: 'ja' }, { text: 'ちゅういして ください', lang: 'ja' }],
    shadowing: [{ text: 'けいかくの じゅんびを します。', lang: 'ja', tip: 'じゅんび: jun・bi.' }, { text: 'けっかが きまりました。', lang: 'ja', tip: 'けっか: ket・ka.' }, { text: 'ちゅういして ください。', lang: 'ja', tip: 'ちゅうい: chuu・i.' }],
    speaking: [{ prompt: 'Racconta i preparativi per una riunione o un viaggio.', model: 'りょこうの けいかくを たてました。じゅんびも しました。' }, { prompt: 'Chiedi a un collega di comunicarti il risultato.', model: 'けっかが きまったら、れんらくして ください。' }],
    reading: [{ id: 'r1', title: 'Il piano', text: '[新|あたら]しい [計画|けいかく]の [準備|じゅんび]が [必要|ひつよう]です。[結果|けっか]が [決|き]まったら、[関係|かんけい]の [人|ひと]に [連絡|れんらく]して ください。[注意|ちゅうい]して [進|すす]めましょう。',
      qs: [{ q: 'Che cosa si deve preparare?', o: ['Il piano', 'Un pranzo', 'Una gita', 'Un esame'], a: 0 }, { q: 'Chi si deve contattare?', o: ['I colleghi di un altro paese', 'Le persone interessate', 'I clienti', 'La famiglia'], a: 1 }, { q: 'Con quale atteggiamento si procede?', o: ['Con fretta', 'Senza preoccupazioni', 'Con attenzione', 'In silenzio'], a: 2 }] }] });

  T({ id: 'jpn-j4-formal-vs-casual-speech', stage: 'J4', prereq: ['jpn-j3-reasons-contrast'], title: 'Registro formale e informale: です・ます, だ, である', summary: 'Scegliere il livello di formalità in base a persona, situazione e scritto o parlato.',
    objectives: ['Distinguere forma cortese (敬体) e forma piana (常体)', 'Scegliere il registro giusto per interlocutore e contesto', 'Capire il registro scritto である'],
    pages: [
      { h: 'Obiettivo', b: 'In giapponese il livello di formalità non è un dettaglio: **cambia la forma del verbo e della frase**. Imparerai i tre registri principali (cortese, piano, scritto), come passare dall’uno all’altro, e quando serve ciascuno.' },
      { h: 'Cortese e piano', b: '- **Cortese** (敬体, ～ます・です): con superiori, sconosciuti, clienti: {{ja|[食|た]べます。[高|たか]いです。[学生|がくせい]です。}}\n- **Piano** (常体, forma del dizionario): con amici, famiglia, pensieri, discorsi indiretti: {{ja|[食|た]べる。[高|たか]い。[学生|がくせい]だ。}}\n\nTabella:\n- Presente: たべます / たべる\n- Neg.: たべません / たべない\n- Passato: たべました / たべた\n- Passato neg.: たべませんでした / たべなかった\n- Nome: です / だ (colloquiale: omesso nelle domande)\n- Aggettivi な: しずかです / しずかだ' },
      { h: 'Parlato informale', b: 'Nel parlato tra amici si usano forme **piane** e contrazioni:\n- {{ja|[何|なに]を [食|た]べる？}} (che cosa mangi?) — la domanda con ↗ senza か\n- {{ja|[行|い]かない？}} (non vai?), {{ja|[行|い]くよ。}}, {{ja|いいね。}}\n- ～ている → ～てる: {{ja|[何|なに]を して るの？}}\n- ～ては → ～ちゃ, ～てしまう → ～ちゃう: {{ja|[忘|わす]れちゃった。}}\n- ありがとうございます → {{ja|ありがとう。}} / すみません → {{ja|ごめん。}}\n\nParticelle finali: よ (informazione), ね (conferma), な (maschile), わ (femminile, un po’ antiquato), の (spiegazione).' },
      { h: 'Scritto: である', b: 'Nel registro scritto formale (saggi, articoli, relazioni) si usa spesso **だ・である** (常体):\n- {{ja|この [問題|もんだい]は [重要|じゅうよう]である。}} (questo problema è importante)\n- {{ja|[結果|けっか]は [次|つぎ]の とおりである。}}\n- Negativo: {{ja|ではない。}}\n\nLettere, email e lettere ufficiali usano **です・ます**: un testo senza だ・である ma cortese. Non mescolare i due stili nella stessa frase.' },
      { h: 'Come scegliere', b: '1. **Chi è l’interlocutore?** Superiore → cortese; amico → piano; sconosciuto → cortese.\n2. **Che situazione?** Riunione, cliente, telefono → cortese. Conversazione tra amici → piano.\n3. **Parlato o scritto?** Parlato: です・ます / piano; scritto formale: である.\n4. **Rapporto che evolve**: parte sempre dalla forma cortese, passa al piano solo quando l’altro lo propone ({{ja|[敬語|けいご]をやめましょう}}).\n\nMischiare è normale in alcuni casi: {{ja|[先輩|せんぱい]と [話|はな]す とき}}, si può usare です con particelle informali: {{ja|いいですね。}}' },
      { h: 'Esempio guidato', b: 'Stesso contenuto in tre registri: *Ieri ho studiato, ma era difficile.*\n- Cortese: {{ja|[昨日|きのう]、[勉強|べんきょう]しましたが、[難|むずか]しかったです。}}\n- Piano parlato: {{ja|[昨日|きのう]、[勉強|べんきょう]したけど、[難|むずか]しかった。}}\n- Scritto: {{ja|[昨日|きのう]、[勉強|べんきょう]したが、[難|むずか]しかった。}}\n\nControllo: が (scritto), けど (colloquiale), ですが (cortese).' },
      { h: 'Errori comuni', b: '- Usare la forma piana con il capo o il professore.\n- Usare です・ます in una conversazione tra amici stretti può suonare freddo.\n- *たべません* → piano: *たべない* (non *たべまい*).\n- *しずかだです* → {{ja|しずかです。}} (non mischiare だ + です).\n- Usare である nel parlato: suona rigido, da discorso.\n- Dimenticare che le domande piane hanno spesso ↗: {{ja|いく？}}' },
      { h: 'Riepilogo', b: '- Cortese: ～ます, ～です; piano: dizionario, ～ない, ～た, ～だ.\n- Scritto formale: だ・である, ではない.\n- Parlato informale: ～てる, ～ちゃう, ～よ, ごめん.\n- Scelta in base a interlocutore, situazione e scritto/parlato.' }
    ],
    exercises: [
      mc('Forma piana di «たべません»:', ['たべない', 'たべなかった', 'たべません', 'たべなく'], 0),
      mc('Forma piana di «がくせいでした»:', ['がくせいだった', 'がくせいでした', 'がくせいじゃない', 'がくせいだ'], 0),
      mc('Registro più adatto con il capo:', ['です・ます', 'だ・である', 'forma piana colloquiale', 'solo particelle'], 0),
      mc('«である» si usa soprattutto…', ['nello scritto formale', 'tra amici', 'al telefono con il capo', 'nelle domande'], 0),
      mc('«Scusa» informale:', ['ごめん', 'すみません', 'もうしわけございません', 'しつれいします'], 0),
      listen('きのう べんきょうしたけど、むずかしかった。', 'ja', 'Che registro usa?', ['Piano, informale', 'Molto cortese', 'Scritto formale', 'Onorifico'], 0),
      fillJ('Completa: がくせい___ 。(piano)', ['だ'], 'Piano di です: だ.'),
      fillJ('Completa: わすれ___ った。(contrazione di ～てしまった)', ['ちゃ'], 'ちゃった.')
    ],
    test: [
      mc('Forma piana di «いきます»:', ['いく', 'いきない', 'いった', 'いこう'], 0),
      mc('Registro delle email di lavoro:', ['です・ます', 'である', 'colloquiale con ～ちゃう', 'dialetto'], 0),
      mc('«たべてる» è la contrazione di…', ['たべている', 'たべてしまう', 'たべては', 'たべてみる'], 0),
      mc('Quale frase è scorretta?', ['しずかだです。', 'しずかです。', 'しずかだ。', 'しずかでした。'], 0)
    ],
    cards: [card('c1', 'forma cortese', '[敬体|けいたい]', '', 'けいたい'), card('c2', 'forma piana', '[常体|じょうたい]', '', 'じょうたい'), card('c3', 'è (piano)', 'だ', '', 'だ'), card('c4', 'è (scritto)', 'である', '', 'である'), card('c5', 'scusa (informale)', 'ごめん', '', 'ごめん'),
      card('c6', 'grazie (informale)', 'ありがとう', '', 'ありがとう'), card('c7', 'sto facendo', '～てる', '', 'てる'), card('c8', 'ho dimenticato (colloquiale)', '[忘|わす]れちゃった', '', 'わすれちゃった'), card('c9', 'importante', '[重要|じゅうよう]', '', 'じゅうよう'), card('c10', 'senior', '[先輩|せんぱい]', '', 'せんぱい')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Tra amici', text: 'きのう べんきょうしたけど、むずかしかった。なにを してるの。いっしょに いかない。ごめん、わすれちゃった。ありがとう。',
      qs: [{ q: 'Com’era lo studio di ieri?', o: ['Facile', 'Difficile', 'Noioso', 'Breve'], a: 1, kind: 'explicit' }, { q: 'Che cosa dice per scusarsi?', o: ['ごめん', 'ありがとう', 'いただきます', 'しつれいします'], a: 0, kind: 'explicit' }, { q: 'Che cosa ha dimenticato?', o: ['Di studiare', 'Qualcosa (non specificato)', 'Il portafoglio', 'Un biglietto'], a: 1, kind: 'inference' }] }],
    dictation: [{ text: 'なにを たべる', lang: 'ja' }, { text: 'わすれちゃった', lang: 'ja' }, { text: 'この もんだいは じゅうようである', lang: 'ja' }],
    shadowing: [{ text: 'なにを たべる。', lang: 'ja', tip: 'Intonazione ascendente.' }, { text: 'わすれちゃった。', lang: 'ja', tip: 'ちゃ: cha, veloce.' }, { text: 'ごめん、ありがとう。', lang: 'ja', tip: 'Tono amichevole.' }],
    speaking: [{ prompt: 'Racconta la tua giornata prima in forma cortese, poi in forma piana.', model: 'きょうは がっこうに いきました。→ きょうは がっこうに いった。' }, { prompt: 'Chiedi a un amico, con registro piano, se vuole venire con te.', model: 'あした いっしょに いかない。えいがを みに いくよ。' }] });

  /* ---------------------------------------------------------------- J5 */
  T({ id: 'jpn-j5-kanji-5b', stage: 'J5', prereq: ['jpn-j4-kanji-4'], title: 'Kanji 5b: cronaca, inchieste e sicurezza', summary: '12 kanji N3 per le notizie: 調 査 選 挙 首 相 件 故 災 害 警 察.',
    objectives: ['Leggere 12 kanji N3 tipici delle notizie', 'Capire titoli e brevi articoli di cronaca', 'Riconoscere i composti di uso comune'],
    pages: [
      { h: 'Obiettivo', b: 'Questi kanji compaiono in quasi ogni telegiornale e quotidiano: **inchieste, elezioni, incidenti, calamità, polizia**. Impararli come composti ti permette di leggere i titoli senza dizionario.' },
      { h: 'Indagini e elezioni', b: '- **調** (ちょう; しら.べる): esaminare: {{ja|[調査|ちょうさ]}} inchiesta, {{ja|[調|しら]べる}} cercare, verificare\n- **査** (さ): esaminare: {{ja|[調査|ちょうさ]}}, {{ja|[検査|けんさ]}} esame, controllo\n- **選** (せん; えら.ぶ): scegliere: {{ja|[選|えら]ぶ}}, {{ja|[選挙|せんきょ]}} elezioni\n- **挙** (きょ; あ.げる): sollevare, elencare: {{ja|[選挙|せんきょ]}}\n- **首** (しゅ; くび): collo/capo: {{ja|[首相|しゅしょう]}} primo ministro\n- **相** (そう; しょう): aspetto/ministro: {{ja|[首相|しゅしょう]}}, {{ja|[相談|そうだん]}} consulto\n\nFrasi: {{ja|[選挙|せんきょ]は [日曜日|にちようび]に あります。}} / {{ja|[首相|しゅしょう]は [会見|かいけん]を [開|ひら]きました。}}' },
      { h: 'Incidenti e calamità', b: '- **件** (けん): caso, affare: {{ja|[事件|じけん]}} fatto di cronaca, conta i casi: {{ja|[三件|さんけん]}}\n- **故** (こ; ゆえ): incidente, ragione: {{ja|[事故|じこ]}} incidente\n- **災** (さい; わざわ.い): calamità: {{ja|[災害|さいがい]}} disastro naturale\n- **害** (がい): danno: {{ja|[被害|ひがい]}}, {{ja|[災害|さいがい]}}\n\nFrasi: {{ja|[昨日|きのう]、[大|おお]きい [事故|じこ]が ありました。}} / {{ja|[台風|たいふう]で [災害|さいがい]が [起|お]きました。}}' },
      { h: 'La polizia', b: '- **警** (けい): avvertire/polizia: {{ja|[警察|けいさつ]}}\n- **察** (さつ): dedurre: {{ja|[警察|けいさつ]}}, {{ja|[警察官|けいさつかん]}} agente di polizia\n\nFrasi: {{ja|[警察|けいさつ]は [事件|じけん]を [調|しら]べて います。}} (la polizia sta indagando sul caso). {{ja|[警察|けいさつ]に [連絡|れんらく]して ください。}} (chiamate la polizia).\n\nNei titoli ricorrono: {{ja|[事故|じこ]を [調査|ちょうさ]}}, {{ja|[選挙|せんきょ]の [結果|けっか]}}, {{ja|[災害|さいがい]に [備|そな]える}}.' },
      { h: 'Strategie di lettura', b: '1. Impara i **composti** (調査, 選挙, 災害) come blocchi.\n2. Nei titoli giapponesi i verbi sono spesso omessi: 首相、会見.\n3. **件** serve anche da contatore: 三件 = tre casi.\n4. Riconosci i radicali: 言 (parole) in 調; 手 in 挙; 艹 in 警.\n5. Leggi ad alta voce, collegando lettura on e significato.\n6. Quando incontri una parola nuova, riconosci i kanji noti e deduci il resto.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[警察|けいさつ]は [昨日|きのう]の [事故|じこ]を [調査|ちょうさ]して います。[災害|さいがい]の [被害|ひがい]は [三件|さんけん]でした。[首相|しゅしょう]は [選挙|せんきょ]の [結果|けっか]を [発表|はっぴょう]しました。}}\n\n→ *La polizia sta indagando sull’incidente di ieri. I danni del disastro sono stati tre casi. Il primo ministro ha annunciato il risultato delle elezioni.*' },
      { h: 'Errori comuni', b: '- Leggere 相 sempre *そう*: in 首相 è **しゅしょう**.\n- Confondere 件 (けん) con 作 (さく/つくる).\n- Confondere 選 (えらぶ) con 遠 (とおい): attenzione ai radicali.\n- *じけん* e *じこ*: 事件 = caso, 事故 = incidente.\n- Leggere 調 sempre *ちょう*: nel verbo è **しらべる**.\n- Dimenticare che 災害 non è *さいかい*: è さいがい.' },
      { h: 'Riepilogo', b: '- 調査, 調べる; 選ぶ, 選挙; 首相.\n- 事件, 事故, 災害, 被害.\n- 警察, 警察官.\n- Pratica con titoli e brevi articoli.' }
    ],
    exercises: [
      mc('Come si legge 調査?', ['ちょうさ', 'しらさ', 'ちょさ', 'ちょうしゃ'], 0),
      mc('Come si legge 選挙?', ['せんきょ', 'えらぶあ', 'せんきゅ', 'せんあ'], 0),
      mc('Come si legge 首相?', ['しゅしょう', 'くびそう', 'しゅそう', 'しゅうしょう'], 0),
      mc('Che cosa significa 事故?', ['incidente', 'caso di cronaca', 'elezioni', 'polizia'], 0),
      mc('Come si legge 災害?', ['さいがい', 'さいかい', 'わざがい', 'ざいがい'], 0),
      mc('Che cosa significa 警察?', ['polizia', 'tribunale', 'governo', 'ospedale'], 0),
      fillJ('Come si legge 事件?', ['じけん'], 'じけん.'),
      fillJ('Come si legge 調べる?', ['しらべる'], 'しらべる.')
    ],
    test: [
      mc('Come si legge 警察官?', ['けいさつかん', 'けいさつかく', 'けさつかん', 'けいざつかん'], 0),
      mc('Come si legge 選ぶ?', ['えらぶ', 'せんぶ', 'おくぶ', 'えらう'], 0),
      mc('«三件» si legge…', ['さんけん', 'さんげん', 'みっけん', 'さんかん'], 0),
      mc('Che cosa significa 被害?', ['danno', 'incidente', 'elezione', 'ricerca'], 0)
    ],
    cards: [card('c1', 'inchiesta', '[調査|ちょうさ]', '', 'ちょうさ'), card('c2', 'indagare', '[調|しら]べる', '', 'しらべる'), card('c3', 'scegliere', '[選|えら]ぶ', '', 'えらぶ'), card('c4', 'elezioni', '[選挙|せんきょ]', '', 'せんきょ'), card('c5', 'primo ministro', '[首相|しゅしょう]', '', 'しゅしょう'), card('c6', 'caso, fatto', '[事件|じけん]', '', 'じけん'),
      card('c7', 'incidente', '[事故|じこ]', '', 'じこ'), card('c8', 'disastro', '[災害|さいがい]', '', 'さいがい'), card('c9', 'danno', '[被害|ひがい]', '', 'ひがい'), card('c10', 'polizia', '[警察|けいさつ]', '', 'けいさつ'), card('c11', 'agente di polizia', '[警察官|けいさつかん]', '', 'けいさつかん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Notiziario', text: 'けいさつは きのうの じこを ちょうさして います。さいがいの ひがいは さんけんでした。しゅしょうは せんきょの けっかを はっぴょうしました。',
      qs: [{ q: 'Che cosa sta indagando la polizia?', o: ['L’incidente di ieri', 'Le elezioni', 'Un furto', 'Un tifone'], a: 0, kind: 'explicit' }, { q: 'Quanti casi di danno?', o: ['Due', 'Cinque', 'Tre', 'Uno'], a: 2, kind: 'explicit' }, { q: 'Che cosa ha annunciato il primo ministro?', o: ['Il risultato delle elezioni', 'Una nuova legge', 'Un viaggio', 'Una dimissione'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'けいさつが じこを ちょうさして います', lang: 'ja' }, { text: 'せんきょの けっかを はっぴょうしました', lang: 'ja' }, { text: 'さいがいの ひがいは さんけんでした', lang: 'ja' }],
    shadowing: [{ text: 'けいさつが ちょうさして います。', lang: 'ja', tip: 'ちょうさ: cho・o・sa.' }, { text: 'せんきょの けっかを はっぴょうしました。', lang: 'ja', tip: 'せんきょ: sen・kyo.' }, { text: 'さいがいの ひがいが ありました。', lang: 'ja', tip: 'さいがい: sa・i・ga・i.' }],
    speaking: [{ prompt: 'Riassumi una notizia di cronaca (incidente, indagine).', model: 'きのう おおきい じこが ありました。けいさつが ちょうさして います。' }, { prompt: 'Parla di un evento politico o di elezioni.', model: 'しゅしょうは せんきょの けっかを はっぴょうしました。' }],
    reading: [{ id: 'r1', title: 'Notizie del giorno', text: '[警察|けいさつ]は [昨日|きのう]の [事故|じこ]を [調査|ちょうさ]して います。[災害|さいがい]の [被害|ひがい]は [三件|さんけん]でした。[首相|しゅしょう]は [選挙|せんきょ]の [結果|けっか]を [発表|はっぴょう]しました。',
      qs: [{ q: 'Chi indaga sull’incidente?', o: ['Il governo', 'La polizia', 'Un giornale', 'Un’azienda'], a: 1 }, { q: 'Quanti casi di danno?', o: ['Tre', 'Due', 'Cinque', 'Uno'], a: 0 }, { q: 'Che cosa ha annunciato il primo ministro?', o: ['L’inizio di una guerra', 'Un disastro', 'Il risultato delle elezioni', 'Un nuovo ministro'], a: 2 }] }] });
})(window.ST = window.ST || {});
