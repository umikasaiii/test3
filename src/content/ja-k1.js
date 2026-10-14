/* Giapponese — kanji nel contesto (serie A): natura, luoghi, viaggi e trasporti, tempo e acquisti. 48 nuovi kanji. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, order, listen, card } = C;
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });
  const T = (o) => C.addTopic(Object.assign({ subject: 'jpn', stage: 'J0', minutes: 20, prereq: ['jpn-j0-numbers-time'] }, o));

  /* ---------------------------------------------------------------- J2 */
  T({ id: 'jpn-j2-kanji-a1', stage: 'J2', prereq: ['jpn-j2-kanji-2b'], title: 'Kanji A1: natura e paesaggio', summary: '12 kanji N4: 森 林 湖 島 池 石 星 光 雲 虫 竹 谷.',
    objectives: ['Leggere 12 kanji legati a natura e paesaggio', 'Riconoscere le parole composte più comuni (森林, 電池, 観光…)', 'Capire una breve descrizione di una gita nella natura'],
    pages: [
      { h: 'Obiettivo', b: 'In questa lezione impari 12 nuovi kanji che descrivono **la natura**: boschi, laghi, isole, stelle e nuvole. Li incontri su cartelli di parchi, mappe di escursione e nei racconti di viaggio. Ogni kanji è presentato con la lettura **kun** (giapponese, di solito da solo) e **on** (cinese, di solito nei composti).' },
      { h: 'Terra e acqua', b: '- **森** (もり; シン): bosco: {{ja|[森|もり]の [中|なか]を [歩|ある]きました。}} / {{ja|[森林|しんりん]}} foresta\n- **林** (はやし; リン): boschetto: {{ja|[林|はやし]の [道|みち]}} / {{ja|[竹林|ちくりん]}} bosco di bambù\n- **湖** (みずうみ; コ): lago: {{ja|[湖|みずうみ]は とても [静|しず]かです。}}\n- **島** (しま; トウ): isola: {{ja|[島|しま]へ [行|い]きます。}} / {{ja|[半島|はんとう]}} penisola\n- **池** (いけ; チ): stagno: {{ja|[池|いけ]に [魚|さかな]が います。}} / {{ja|[電池|でんち]}} batteria\n- **石** (いし; セキ): pietra, sasso: {{ja|[石|いし]を [拾|ひろ]いました。}}\n\nNota: 森 è fatto da tre 木 (alberi), 林 da due. Più alberi = più fitto!' },
      { h: 'Cielo e piccoli elementi', b: '- **星** (ほし; セイ): stella: {{ja|[夜|よる]、[星|ほし]が きれいです。}} / {{ja|[星空|ほしぞら]}} cielo stellato\n- **光** (ひかり, ひかる; コウ): luce: {{ja|[月|つき]の [光|ひかり]}} / {{ja|[観光|かんこう]}} turismo\n- **雲** (くも; ウン): nuvola: {{ja|[空|そら]に [白|しろ]い [雲|くも]が あります。}} / {{ja|[雨雲|あまぐも]}} nuvola di pioggia\n- **虫** (むし; チュウ): insetto: {{ja|[夏|なつ]は [虫|むし]が [多|おお]いです。}} / {{ja|[虫歯|むしば]}} carie\n- **竹** (たけ; チク): bambù: {{ja|[竹|たけ]で [作|つく]った [箸|はし]}}\n- **谷** (たに; コク): valle, gola: {{ja|[深|ふか]い [谷|たに]}} / {{ja|[谷間|たにま]}} fondovalle' },
      { h: 'Strategie di lettura', b: '- **Radicali**: 森 e 林 hanno 木; 湖, 池 hanno 氵 (acqua); 石 è una pietra; 虫 è un insetto; 雲 ha 雨 in alto (pioggia).\n- **Kun da soli, on nei composti**: 森 = もり, ma 森林 = しんりん; 池 = いけ, ma 電池 = でんち; 光 = ひかり, ma 観光 = かんこう.\n- **Dorsale visiva**: 雲 (くも, nuvola) assomiglia a 雨 (あめ, pioggia) per la parte alta; la nuvola porta la pioggia.\n- **Rendaku**: 雨 + 雲 diventa あまぐも (く → ぐ).' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[昨日|きのう]、[森|もり]の [中|なか]の [湖|みずうみ]へ [行|い]きました。[池|いけ]の そばの [石|いし]に [座|すわ]って、[星|ほし]を [見|み]ました。[雲|くも]が なかったので、[光|ひかり]が きれいでした。}}\n\n→ *Ieri sono andato a un lago nel bosco. Seduto su una pietra vicino allo stagno, ho guardato le stelle. Non c’erano nuvole, perciò la luce era bellissima.*' },
      { h: 'Errori comuni', b: '- Confondere 森 (もり, bosco) con 林 (はやし, boschetto): 3 alberi contro 2.\n- Leggere 島 come *しま* anche in 半島: nel composto è はんとう (lettura on).\n- Scambiare 池 (いけ) con 地 (ち, terra): 池 ha 氵, 地 ha 土.\n- 虫 e 中: 虫 ha un trattino in basso a destra, 中 no; letture diverse (むし / なか).\n- Pronunciare 星 *ほち*: è ほし.\n- Dimenticare la lettura rendaku: あまぐも, non *あめくも*.' },
      { h: 'Riepilogo', b: '- 森 もり, 林 はやし, 湖 みずうみ, 島 しま, 池 いけ, 石 いし.\n- 星 ほし, 光 ひかり, 雲 くも, 虫 むし, 竹 たけ, 谷 たに.\n- Composti: 森林 しんりん, 電池 でんち, 観光 かんこう, 半島 はんとう, 竹林 ちくりん.\n- Frasi: 星が きれいです / 雲が あります / 湖へ 行きます.' }
    ],
    exercises: [
      mc('Come si legge 湖?', ['みずうみ', 'うみ', 'いけ', 'こうみ'], 0),
      mc('Che cosa significa 森?', ['stagno', 'bosco', 'valle', 'isola'], 1),
      mc('Come si legge 電池?', ['でんいけ', 'でんち', 'でんし', 'でんせき'], 1),
      mc('Come si legge 星?', ['ひかり', 'くも', 'ほし', 'いし'], 2),
      mc('Quale kanji significa «nuvola»?', ['谷', '雲', '虫', '竹'], 1),
      listen('そらに しろい くもが あります。', 'ja', 'Che cosa dice?', ['Ci sono nuvole bianche nel cielo', 'Ci sono stelle nel cielo', 'Piove molto', 'C’è un lago bianco'], 0),
      order('Metti in ordine: «La sera le stelle sono belle»', ['よる、', 'ほしが', 'きれいです'], 'Tempo + soggetto が + aggettivo.'),
      fillJ('Come si legge 島?', ['しま'], 'しま.'),
      fillJ('Come si legge 光?', ['ひかり'], 'ひかり.')
    ],
    test: [
      mc('Come si legge 森林?', ['しんりん', 'もりばやし', 'しんばやし', 'もりりん'], 0),
      mc('Che cosa significa 虫?', ['pietra', 'bambù', 'insetto', 'luce'], 2),
      mc('Come si legge 池?', ['ち', 'いし', 'いけ', 'しま'], 2),
      mc('Che cosa significa 谷?', ['valle', 'lago', 'nuvola', 'stella'], 0),
      mc('Come si legge 石?', ['せき', 'いし', 'いけ', 'ほし'], 1)
    ],
    cards: [card('c1', 'bosco', '[森|もり]', '', 'もり'), card('c2', 'foresta', '[森林|しんりん]', '', 'しんりん'), card('c3', 'boschetto', '[林|はやし]', '', 'はやし'), card('c4', 'lago', '[湖|みずうみ]', '', 'みずうみ'), card('c5', 'isola', '[島|しま]', '', 'しま'), card('c6', 'stagno', '[池|いけ]', '', 'いけ'),
      card('c7', 'batteria (pila)', '[電池|でんち]', '', 'でんち'), card('c8', 'sasso, pietra', '[石|いし]', '', 'いし'), card('c9', 'stella', '[星|ほし]', '', 'ほし'), card('c10', 'luce', '[光|ひかり]', '', 'ひかり'), card('c11', 'nuvola', '[雲|くも]', '', 'くも'), card('c12', 'insetto', '[虫|むし]', '', 'むし'), card('c13', 'bambù', '[竹|たけ]', '', 'たけ'), card('c14', 'valle', '[谷|たに]', '', 'たに')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Una gita nel bosco', text: 'きのう ともだちと もりへ いきました。もりの なかに おおきい いけが ありました。いけの そばの いしに すわって、ほしを みました。くもが なかったので、ほしが とても きれいでした。',
      qs: [{ q: 'Dove sono andati?', o: ['Al mare', 'In un bosco', 'In montagna', 'In città'], a: 1, kind: 'explicit' }, { q: 'Che cosa c’era nel bosco?', o: ['Un fiume', 'Una cascata', 'Un grande stagno', 'Un tempio'], a: 2, kind: 'explicit' }, { q: 'Perché le stelle erano belle?', o: ['Non c’erano nuvole', 'Era giorno', 'Pioveva', 'C’era la luna piena'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'もりの なかを あるきました', lang: 'ja' }, { text: 'そらに くもが あります', lang: 'ja' }, { text: 'よる、ほしが きれいです', lang: 'ja' }],
    shadowing: [{ text: 'みずうみは とても しずかです。', lang: 'ja', tip: 'みずうみ: mi・zu・u・mi.' }, { text: 'いけに さかなが います。', lang: 'ja', tip: 'いけ: i・ke.' }, { text: 'ほしが きれいですね。', lang: 'ja', tip: 'ほし: ho・shi.' }],
    speaking: [{ prompt: 'Descrivi un posto nella natura che ti piace (bosco, lago, montagna).', model: 'ちかくに おおきい もりと みずうみが あります。なつは とても きれいです。' }, { prompt: 'Racconta che cosa si vede nel cielo di notte.', model: 'よるは ほしが たくさん みえます。くもが ない ひは とくに きれいです。' }],
    reading: [{ id: 'r1', title: 'Una gita al lago', text: '[昨日|きのう]、[友達|ともだち]と [森|もり]の [中|なか]の [湖|みずうみ]へ [行|い]きました。[池|いけ]の そばの [石|いし]に [座|すわ]って、[星|ほし]を [見|み]ました。[雲|くも]が なかったので、[光|ひかり]が きれいでした。',
      qs: [{ q: 'Dove sono andati?', o: ['A un lago nel bosco', 'In una grotta', 'Su un’isola', 'In un tempio'], a: 0 }, { q: 'Dove si sono seduti?', o: ['Su una panchina', 'Sull’erba', 'Su una pietra vicino allo stagno', 'In barca'], a: 2 }, { q: 'Che cosa hanno guardato?', o: ['Le stelle', 'Le nuvole', 'Gli insetti', 'Il tramonto'], a: 0 }] }] });

  /* ---------------------------------------------------------------- J3 */
  T({ id: 'jpn-j3-kanji-a2', stage: 'J3', prereq: ['jpn-j3-kanji-3b'], title: 'Kanji A2: luoghi e città', summary: '12 kanji N4/N3: 村 県 区 寺 神 城 庭 階 角 坂 街 湯.',
    objectives: ['Leggere 12 kanji di luoghi, edifici e suddivisioni amministrative', 'Orientarsi leggendo indirizzi, mappe e cartelli', 'Descrivere dove si trova un posto'],
    pages: [
      { h: 'Obiettivo', b: 'Questi 12 kanji compaiono su **indirizzi, mappe e cartelli**: villaggio, prefettura, quartiere, tempio, castello, piani di un edificio. Sono fondamentali per muoversi in una città giapponese.' },
      { h: 'Divisioni e luoghi', b: '- **村** (むら; ソン): villaggio: {{ja|[小|ちい]さい [村|むら]に [住|す]んで います。}}\n- **県** (ケン): prefettura: {{ja|[千葉県|ちばけん]}}, {{ja|[県庁|けんちょう]}} sede della prefettura\n- **区** (ク): quartiere, distretto: {{ja|[新宿区|しんじゅくく]}}, {{ja|[区役所|くやくしょ]}} municipio di quartiere\n- **街** (まち; ガイ): strada commerciale, quartiere: {{ja|[商店街|しょうてんがい]}}, {{ja|[街|まち]を [歩|ある]きます。}}\n\nIndirizzo tipico: {{ja|[東京都|とうきょうと][新宿区|しんじゅくく]}}.' },
      { h: 'Templi, castelli e giardini', b: '- **寺** (てら; ジ): tempio buddhista: {{ja|[古|ふる]い [寺|てら]}}, {{ja|[清水寺|きよみずでら]}}\n- **神** (かみ; シン, ジン): dio, divinità: {{ja|[神社|じんじゃ]}} santuario shintoista, {{ja|[神様|かみさま]}}\n- **城** (しろ; ジョウ): castello: {{ja|[大阪城|おおさかじょう]}}, {{ja|[白|しろ]い [城|しろ]}}\n- **庭** (にわ; テイ): giardino, cortile: {{ja|[庭|にわ]に [花|はな]が あります。}}, {{ja|[庭園|ていえん]}}\n\nSuggerimento: 寺 = tempio buddhista (てら), 神社 = santuario shintoista (じんじゃ).' },
      { h: 'Piani, angoli e salite', b: '- **階** (カイ): piano di un edificio: {{ja|[一階|いっかい]}}, {{ja|[二階|にかい]}}, {{ja|[三階|さんがい]}}\n- **角** (かど; カク): angolo, cantone: {{ja|[次|つぎ]の [角|かど]を [右|みぎ]へ [曲|ま]がって ください。}}\n- **坂** (さか; ハン): salita, pendio: {{ja|[長|なが]い [坂|さか]を [上|のぼ]ります。}}\n- **湯** (ゆ; トウ): acqua calda: {{ja|お[湯|ゆ]}}, {{ja|[銭湯|せんとう]}} bagno pubblico\n\nIrregolare: 階 = **さんがい** (non *さんかい*) e **はっかい** per 8; 3 piani si dice さんがい.' },
      { h: 'Dare indicazioni', b: '- {{ja|あの [角|かど]を [左|ひだり]に [曲|ま]がって ください。}} (giri a sinistra a quell’angolo)\n- {{ja|[駅|えき]の [前|まえ]に [大|おお]きい [神社|じんじゃ]が あります。}}\n- {{ja|[郵便局|ゆうびんきょく]は [二階|にかい]です。}} (l’ufficio postale è al primo piano, cioè il secondo)\n- {{ja|この [坂|さか]の [上|うえ]に [寺|てら]が あります。}}\n- {{ja|[区役所|くやくしょ]は [何階|なんがい]ですか。}} (a che piano è il municipio?)' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[私|わたし]の [村|むら]は [山|やま]の [中|なか]に あります。[坂|さか]を [上|のぼ]ると、[古|ふる]い [寺|てら]と [神社|じんじゃ]が あります。[庭|にわ]は とても きれいで、[街|まち]の [人|ひと]は [銭湯|せんとう]へ [行|い]きます。}}\n\n→ *Il mio villaggio è in montagna. Salendo la salita ci sono un vecchio tempio e un santuario. Il giardino è molto bello, e la gente del paese va al bagno pubblico.*' },
      { h: 'Errori comuni', b: '- *さんかい* per il terzo piano: è **さんがい**.\n- Confondere 寺 (てら, tempio) con 時 (じ, ora) e 持 (も-つ): 寺 è senza radicale a sinistra.\n- Scambiare 県 (ケン) con 区 (ク): 県 è più complesso, 区 più semplice.\n- 神 (かみ) e 社 (しゃ): 神社 si legge じんじゃ, **non** *しんしゃ*.\n- Leggere 角 come *かく* da solo: da solo è **かど**.\n- Dimenticare che in giapponese il «piano terra» è 一階 (1°).' },
      { h: 'Riepilogo', b: '- 村 むら, 県 けん, 区 く, 街 まち, 寺 てら, 神 かみ.\n- 城 しろ, 庭 にわ, 階 かい (さんがい), 角 かど, 坂 さか, 湯 ゆ.\n- Composti: 神社 じんじゃ, 商店街 しょうてんがい, 銭湯 せんとう, 区役所 くやくしょ.\n- Frasi: 次の角を右へ / 二階です / 坂の上に寺があります.' }
    ],
    exercises: [
      mc('Come si legge 神社?', ['しんしゃ', 'じんじゃ', 'かみしゃ', 'じんしゃ'], 1),
      mc('Come si legge 三階?', ['さんかい', 'みっかい', 'さんがい', 'さんかん'], 2),
      mc('Che cosa significa 坂?', ['salita', 'angolo', 'giardino', 'castello'], 0),
      mc('Come si legge 角 (da solo)?', ['かく', 'かど', 'つの', 'すみ'], 1),
      mc('Che cosa significa 県?', ['quartiere', 'villaggio', 'tempio', 'prefettura'], 3),
      listen('つぎの かどを みぎへ まがって ください。', 'ja', 'Che cosa dice?', ['Giri a sinistra al semaforo', 'Giri a destra al prossimo angolo', 'Vada sempre dritto', 'Salga al terzo piano'], 1),
      order('Metti in ordine: «A che piano è il municipio?»', ['くやくしょは', 'なんがい', 'ですか'], 'Luogo は + なんがい + ですか.'),
      fillJ('Come si legge 庭?', ['にわ'], 'にわ.'),
      fillJ('Come si legge 湯?', ['ゆ'], 'ゆ.')
    ],
    test: [
      mc('Come si legge 村?', ['むら', 'まち', 'むれ', 'そん'], 0),
      mc('Come si legge 商店街?', ['しょうてんがい', 'しょうてんまち', 'しょうみせがい', 'あきなうてんがい'], 0),
      mc('Come si legge 城?', ['しろ', 'じょ', 'いし', 'くに'], 0),
      mc('Che cosa significa 寺?', ['santuario', 'tempio buddhista', 'giardino', 'bagno pubblico'], 1),
      mc('«Il terzo piano»:', ['さんかい', 'さんがい', 'みっつかい', 'さんぎょう'], 1)
    ],
    cards: [card('c1', 'villaggio', '[村|むら]', '', 'むら'), card('c2', 'prefettura', '[県|けん]', '', 'けん'), card('c3', 'quartiere', '[区|く]', '', 'く'), card('c4', 'tempio buddhista', '[寺|てら]', '', 'てら'), card('c5', 'santuario shintoista', '[神社|じんじゃ]', '', 'じんじゃ'), card('c6', 'castello', '[城|しろ]', '', 'しろ'),
      card('c7', 'giardino', '[庭|にわ]', '', 'にわ'), card('c8', 'secondo piano', '[二階|にかい]', '', 'にかい'), card('c9', 'terzo piano', '[三階|さんがい]', '', 'さんがい'), card('c10', 'angolo', '[角|かど]', '', 'かど'), card('c11', 'salita', '[坂|さか]', '', 'さか'), card('c12', 'strada commerciale', '[商店街|しょうてんがい]', '', 'しょうてんがい'), card('c13', 'acqua calda', 'お[湯|ゆ]', '', 'おゆ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Come arrivare', text: 'すみません、じんじゃは どこですか。あの さかを のぼって、つぎの かどを みぎへ まがって ください。おおきい おてらの となりです。にかいに ちいさい にわが あります。',
      qs: [{ q: 'Che cosa deve salire?', o: ['Una scala', 'Una salita', 'Un ponte', 'Una collina senza strada'], a: 1, kind: 'explicit' }, { q: 'Dove deve girare?', o: ['A sinistra al prossimo angolo', 'A destra al prossimo angolo', 'Subito a destra', 'Dopo il ponte'], a: 1, kind: 'explicit' }, { q: 'Che cosa c’è vicino al santuario?', o: ['Un castello', 'Un grande tempio', 'Un bagno pubblico', 'Un parco giochi'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'じんじゃは さかの うえです', lang: 'ja' }, { text: 'つぎの かどを ひだりへ まがります', lang: 'ja' }, { text: 'にかいに にわが あります', lang: 'ja' }],
    shadowing: [{ text: 'じんじゃは どこですか。', lang: 'ja', tip: 'じんじゃ: jin・ja.' }, { text: 'つぎの かどを みぎへ まがって ください。', lang: 'ja', tip: 'かど: ka・do.' }, { text: 'ながい さかを のぼります。', lang: 'ja', tip: 'さか: sa・ka.' }],
    speaking: [{ prompt: 'Spiega a un turista come arrivare a un tempio o santuario vicino.', model: 'この さかを のぼって、つぎの かどを みぎへ まがって ください。じんじゃが あります。' }, { prompt: 'Descrivi il posto dove vivi (villaggio o città) e dove si trova.', model: 'ちいさい まちに すんで います。えきの ちかくに おおきい にわが あります。' }],
    reading: [{ id: 'r1', title: 'Il mio villaggio', text: '[私|わたし]の [村|むら]は [山|やま]の [中|なか]に あります。[坂|さか]を [上|のぼ]ると、[古|ふる]い [寺|てら]と [神社|じんじゃ]が あります。[庭|にわ]は とても きれいで、[街|まち]の [人|ひと]は [銭湯|せんとう]へ [行|い]きます。',
      qs: [{ q: 'Dove si trova il villaggio?', o: ['Al mare', 'In montagna', 'In città', 'Su un’isola'], a: 1 }, { q: 'Che cosa c’è in cima alla salita?', o: ['Un castello', 'Un ospedale', 'Un vecchio tempio e un santuario', 'Un giardino pubblico'], a: 2 }, { q: 'Dove va la gente del paese?', o: ['Al bagno pubblico', 'Al castello', 'In prefettura', 'Al mercato'], a: 0 }] }] });

  /* ---------------------------------------------------------------- J4 */
  T({ id: 'jpn-j4-kanji-a3', stage: 'J4', prereq: ['jpn-j4-kanji-4b'], title: 'Kanji A3: viaggi e trasporti', summary: '12 kanji N4/N3: 飛 船 線 路 観 券 泊 到 特 際 迎 停.',
    objectives: ['Leggere 12 kanji di viaggio e trasporto', 'Capire biglietti, orari e annunci di stazione e aeroporto', 'Prenotare e descrivere un viaggio in modo semplice'],
    pages: [
      { h: 'Obiettivo', b: 'Questi 12 kanji sono la base per **viaggiare**: aereo, nave, treno, biglietti, soggiorno. Li vedrai su biglietti, tabelloni, cartelli di stazione e siti di prenotazione.' },
      { h: 'Mezzi e percorsi', b: '- **飛** (と-ぶ; ヒ): volare: {{ja|[飛行機|ひこうき]}} aereo, {{ja|[鳥|とり]が [飛|と]びます。}}\n- **船** (ふね; セン): nave, barca: {{ja|[船|ふね]で [島|しま]へ [行|い]きます。}}, {{ja|[船便|ふなびん]}} spedizione via mare\n- **線** (セン): linea, binario: {{ja|[新幹線|しんかんせん]}}, {{ja|[山手線|やまのてせん]}}\n- **路** (ロ): strada, percorso: {{ja|[道路|どうろ]}}, {{ja|[線路|せんろ]}} binari, {{ja|[路線図|ろせんず]}} mappa delle linee\n\nSu 線 e 路: 線 = linea (treno, metro); 路 = percorso fisico (strada, binario).' },
      { h: 'Biglietti e soggiorno', b: '- **観** (カン): osservare: {{ja|[観光|かんこう]}} turismo, {{ja|[観光客|かんこうきゃく]}} turista\n- **券** (ケン): biglietto, ticket: {{ja|[乗車券|じょうしゃけん]}} biglietto di viaggio, {{ja|[特急券|とっきゅうけん]}}\n- **泊** (と-まる; ハク): pernottare: {{ja|[一泊|いっぱく]}}, {{ja|[二泊|にはく]}}, {{ja|[三泊|さんぱく]}}, {{ja|ホテルに [泊|と]まります。}}\n- **特** (トク): speciale: {{ja|[特急|とっきゅう]}} espresso limitato, {{ja|[特別|とくべつ]}}\n\nContatore 泊: いっぱく, にはく, さんぱく, よんはく, ごはく.' },
      { h: 'Arrivi, accoglienza e fermate', b: '- **到** (トウ): arrivare: {{ja|[到着|とうちゃく]}} arrivo\n- **際** (サイ): occasione, limite: {{ja|[国際|こくさい]}} internazionale, {{ja|[国際線|こくさいせん]}} voli internazionali\n- **迎** (むか-える; ゲイ): accogliere: {{ja|[迎|むか]えに [行|い]きます。}} vado a prendere\n- **停** (テイ): fermarsi: {{ja|バス[停|てい]}} fermata dell’autobus, {{ja|[停車|ていしゃ]}} sosta del treno\n\nParola chiave: **到着** (arrivo) e **出発** (partenza) compaiono sui tabelloni.' },
      { h: 'Frasi utili in viaggio', b: '- {{ja|[国際線|こくさいせん]の [飛行機|ひこうき]に [乗|の]ります。}}\n- {{ja|[特急券|とっきゅうけん]を [二枚|にまい] ください。}}\n- {{ja|ホテルに [二泊|にはく] します。}} (mi fermo due notti)\n- {{ja|[空港|くうこう]まで [迎|むか]えに [行|い]きます。}}\n- {{ja|この バス[停|てい]に [停|と]まりますか。}} (si ferma a questa fermata?)\n- {{ja|[船|ふね]は [午後|ごご]三時に [到着|とうちゃく]します。}}' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[国際線|こくさいせん]の [飛行機|ひこうき]で [東京|とうきょう]へ [行|い]きました。[空港|くうこう]に [到着|とうちゃく]すると、[友達|ともだち]が [迎|むか]えに [来|き]ていました。[特急|とっきゅう]で [京都|きょうと]へ [行|い]って、[二泊|にはく]して [観光|かんこう]しました。}}\n\n→ *Sono andato a Tokyo con un volo internazionale. All’arrivo all’aeroporto un amico era venuto ad accogliermi. Con il treno espresso sono andato a Kyoto, dove ho pernottato due notti facendo il turista.*' },
      { h: 'Errori comuni', b: '- *いちはく* per una notte: è **いっぱく**; *さんはく* → **さんぱく**.\n- Confondere 線 (セン) e 船 (セン): stessa lettura on, ma 線 ha 糸 (filo), 船 ha 舟 (barca).\n- 券 e 巻: 券 si trova su ogni biglietto, 巻 significa «avvolgere».\n- Leggere 停 come *とめ* nel composto バス停: è **てい** (バスてい).\n- 迎 con 近 (ちか-い, vicino): hanno radicale diverso (卬 contro 斤).\n- Usare 飛 per i treni: 飛ぶ solo per aerei e uccelli, i treni 乗る / 走る.' },
      { h: 'Riepilogo', b: '- 飛 とぶ, 船 ふね, 線 せん, 路 ろ, 観 かん, 券 けん.\n- 泊 はく/とまる, 特 とく, 到 とう, 際 さい, 迎 むかえる, 停 てい.\n- Composti: 飛行機 ひこうき, 新幹線 しんかんせん, 観光 かんこう, 到着 とうちゃく, 国際 こくさい.\n- Frasi: 二泊します / 迎えに行きます / 特急券を二枚.' }
    ],
    exercises: [
      mc('Come si legge 飛行機?', ['ひこうき', 'とびこうき', 'ひぎょうき', 'ふねこうき'], 0),
      mc('Come si legge 二泊?', ['にはく', 'にぱく', 'ふたはく', 'にとまり'], 0),
      mc('Che cosa significa 券?', ['linea', 'nave', 'biglietto', 'strada'], 2),
      mc('Come si legge 到着?', ['いたつく', 'とうちゃく', 'とうじゃく', 'とうき'], 1),
      mc('Come si legge 国際?', ['こくせい', 'こくさい', 'くにさい', 'こくぎわ'], 1),
      mc('Che cosa significa 迎える?', ['partire', 'accogliere', 'fermarsi', 'volare'], 1),
      listen('くうこうまで ともだちを むかえに いきます。', 'ja', 'Che cosa dice?', ['Va a prendere un amico all’aeroporto', 'Prende l’aereo con un amico', 'Parte in nave con un amico', 'Accompagna un amico in stazione'], 0),
      order('Metti in ordine: «Mi fermo due notti in albergo»', ['ホテルに', 'にはく', 'します'], 'Luogo に + numero di notti + します.'),
      fillJ('Come si legge 観光?', ['かんこう'], 'かんこう.'),
      fillJ('Come si legge 船?', ['ふね'], 'ふね.')
    ],
    test: [
      mc('Come si legge 新幹線?', ['しんかんせん', 'しんかんぜん', 'しんかんすじ', 'あたらしかんせん'], 0),
      mc('Come si legge 特急?', ['とっきゅう', 'とくきゅう', 'とうきゅう', 'ことしきゅう'], 0),
      mc('Che cosa significa 停?', ['arrivare', 'fermarsi', 'volare', 'pernottare'], 1),
      mc('Come si legge 三泊?', ['さんはく', 'みっぱく', 'さんぱく', 'さんとまり'], 2),
      mc('Come si legge 乗車券?', ['じょうしゃけん', 'のりしゃけん', 'じょうしゃかん', 'じょうしゃぎょう'], 0)
    ],
    cards: [card('c1', 'aereo', '[飛行機|ひこうき]', '', 'ひこうき'), card('c2', 'nave', '[船|ふね]', '', 'ふね'), card('c3', 'treno ad alta velocità', '[新幹線|しんかんせん]', '', 'しんかんせん'), card('c4', 'binari', '[線路|せんろ]', '', 'せんろ'), card('c5', 'turismo', '[観光|かんこう]', '', 'かんこう'), card('c6', 'biglietto di viaggio', '[乗車券|じょうしゃけん]', '', 'じょうしゃけん'),
      card('c7', 'una notte (di soggiorno)', '[一泊|いっぱく]', '', 'いっぱく'), card('c8', 'due notti', '[二泊|にはく]', '', 'にはく'), card('c9', 'treno espresso limitato', '[特急|とっきゅう]', '', 'とっきゅう'), card('c10', 'arrivo', '[到着|とうちゃく]', '', 'とうちゃく'), card('c11', 'internazionale', '[国際|こくさい]', '', 'こくさい'), card('c12', 'andare a prendere', '[迎|むか]えに[行|い]く', '', 'むかえにいく'), card('c13', 'fermata dell’autobus', 'バス[停|てい]', '', 'バスてい')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Un viaggio a Kyoto', text: 'こくさいせんの ひこうきで とうきょうへ いきました。くうこうに とうちゃくすると、ともだちが むかえに きて いました。とっきゅうで きょうとへ いって、にはく して かんこうしました。',
      qs: [{ q: 'Con quale mezzo è andato a Tokyo?', o: ['In nave', 'Con un volo internazionale', 'In treno', 'In autobus'], a: 1, kind: 'explicit' }, { q: 'Chi lo ha aspettato?', o: ['Un amico', 'Un collega', 'La famiglia', 'Nessuno'], a: 0, kind: 'explicit' }, { q: 'Quante notti ha passato a Kyoto?', o: ['Una', 'Tre', 'Quattro', 'Due'], a: 3, kind: 'explicit' }] }],
    dictation: [{ text: 'ひこうきで いきます', lang: 'ja' }, { text: 'ホテルに にはく します', lang: 'ja' }, { text: 'くうこうに とうちゃくしました', lang: 'ja' }],
    shadowing: [{ text: 'とっきゅうけんを にまい ください。', lang: 'ja', tip: 'とっきゅう: tok・kyuu.' }, { text: 'ホテルに にはく します。', lang: 'ja', tip: 'にはく: ni・ha・ku.' }, { text: 'くうこうまで むかえに いきます。', lang: 'ja', tip: 'むかえ: mu・ka・e.' }],
    speaking: [{ prompt: 'Racconta un viaggio recente (mezzo, durata, dove ti sei fermato).', model: 'ひこうきで きょうとへ いきました。ホテルに にはく して、かんこうしました。' }, { prompt: 'Chiedi come arrivare a una città con il treno più veloce.', model: 'しんかんせんで いきますか。とっきゅうけんは いくらですか。' }],
    reading: [{ id: 'r1', title: 'Un viaggio in Giappone', text: '[国際線|こくさいせん]の [飛行機|ひこうき]で [東京|とうきょう]へ [行|い]きました。[空港|くうこう]に [到着|とうちゃく]すると、[友達|ともだち]が [迎|むか]えに [来|き]ていました。[特急|とっきゅう]で [京都|きょうと]へ [行|い]って、[二泊|にはく]して [観光|かんこう]しました。',
      qs: [{ q: 'Con che cosa è andato a Tokyo?', o: ['Con un volo internazionale', 'In nave', 'Con lo shinkansen', 'In autobus'], a: 0 }, { q: 'Che cosa ha fatto l’amico all’arrivo?', o: ['L’ha salutato per telefono', 'È venuto a prenderlo', 'L’ha aspettato in albergo', 'Gli ha portato i bagagli'], a: 1 }, { q: 'Quanto si è fermato a Kyoto?', o: ['Una notte', 'Due notti', 'Tre notti', 'Una settimana'], a: 1 }] }] });

  /* ---------------------------------------------------------------- J5 */
  T({ id: 'jpn-j5-kanji-a4', stage: 'J5', prereq: ['jpn-j5-kanji-5b'], title: 'Kanji A4: tempo atmosferico e acquisti', summary: '12 kanji N3: 陽 氷 最 夕 品 袋 札 服 洋 量 包 貸.',
    objectives: ['Leggere 12 kanji di meteo e acquisti', 'Capire le previsioni e i cartellini dei negozi', 'Fare acquisti e chiedere prestiti con espressioni semplici'],
    pages: [
      { h: 'Obiettivo', b: 'Questi 12 kanji ti servono per **leggere le previsioni del tempo** e per **fare acquisti**: cartellini, scontrini, confezioni. Alcuni, come 最 e 洋, compaiono in moltissime parole composte.' },
      { h: 'Tempo e momenti della giornata', b: '- **陽** (ヨウ): sole, lato soleggiato: {{ja|[太陽|たいよう]}} il sole\n- **氷** (こおり; ヒョウ): ghiaccio: {{ja|[氷|こおり]を [入|い]れて ください。}}, {{ja|[氷水|こおりみず]}} acqua ghiacciata\n- **最** (もっと-も; サイ): il più, estremo: {{ja|[最高気温|さいこうきおん]}} temperatura massima, {{ja|[最低|さいてい]}} minimo, {{ja|[最近|さいきん]}} di recente\n- **夕** (ゆう; セキ): sera: {{ja|[夕方|ゆうがた]}} tardo pomeriggio, {{ja|[夕立|ゆうだち]}} acquazzone serale, {{ja|[夕焼|ゆうや]け}} tramonto rosso\n\nPrevisione: {{ja|[夕方|ゆうがた]から [雨|あめ]です。[最高気温|さいこうきおん]は 二十度です。}}' },
      { h: 'Merci e abbigliamento', b: '- **品** (しな; ヒン): articolo, merce: {{ja|[商品|しょうひん]}} prodotto, {{ja|[品物|しなもの]}} merce\n- **袋** (ふくろ; タイ): sacchetto, busta: {{ja|[袋|ふくろ]を ください。}}, {{ja|[手袋|てぶくろ]}} guanti\n- **札** (ふだ; サツ): banconota, cartellino: {{ja|お[札|さつ]}} banconota, {{ja|[千円札|せんえんさつ]}}\n- **服** (フク): vestito: {{ja|[洋服|ようふく]}} abiti occidentali, {{ja|[服|ふく]を [買|か]います。}}\n- **洋** (ヨウ): occidentale, oceano: {{ja|[洋食|ようしょく]}} cucina occidentale, {{ja|[洋服|ようふく]}}' },
      { h: 'Quantità e servizi', b: '- **量** (りょう; はか-る): quantità: {{ja|[量|りょう]が [多|おお]いです。}}, {{ja|[大量|たいりょう]}} grande quantità\n- **包** (つつ-む; ホウ): avvolgere: {{ja|[包|つつ]んで ください。}}, {{ja|[包装|ほうそう]}} confezione, {{ja|[小包|こづつみ]}} pacco\n- **貸** (か-す; タイ): prestare, noleggiare: {{ja|[傘|かさ]を [貸|か]して ください。}}\n\nSuggerimento: 買う (comprare) vs 貸す (prestare) vs 借りる (prendere in prestito): 貸 ha 貝 (conchiglia = denaro) e 代, come 買.' },
      { h: 'Al negozio e al tempo', b: '- {{ja|この [商品|しょうひん]を [包|つつ]んで ください。}} (me lo incarti, per favore)\n- {{ja|[袋|ふくろ]は いりません。}} (non mi serve il sacchetto)\n- {{ja|[千円札|せんえんさつ]で お[願|ねが]いします。}}\n- {{ja|[洋服|ようふく]は [二階|にかい]です。}}\n- {{ja|[太陽|たいよう]が [出|で]て います。}}\n- {{ja|[氷|こおり]が [溶|と]けました。}} (il ghiaccio si è sciolto)\n- {{ja|[最近|さいきん]、[夕立|ゆうだち]が [多|おお]いです。}}' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[今日|きょう]の [最高気温|さいこうきおん]は 三十度です。[夕方|ゆうがた]に [夕立|ゆうだち]が あるので、[洋服|ようふく]を [買|か]ってから [傘|かさ]を [貸|か]して もらいました。[店|みせ]で [商品|しょうひん]を [包|つつ]んで もらい、[袋|ふくろ]も [一枚|いちまい] ください。}}\n\n→ *Oggi la massima è 30 gradi. Poiché ci sarà un acquazzone in serata, dopo aver comprato dei vestiti mi sono fatto prestare un ombrello. In negozio mi hanno incartato i prodotti e ho chiesto anche un sacchetto.*' },
      { h: 'Errori comuni', b: '- Confondere 買 (か-う, comprare) con 貸 (か-す, prestare): stessa pronuncia iniziale, ma 貸 ha 代 sopra.\n- Leggere 夕 come *ゆ*: da solo è **ゆう** (夕方), non *ゆ*.\n- Scambiare 氷 (こおり) con 水 (みず): 氷 ha un puntino in più.\n- Usare 洋 per «lavare»: 洗 (あら-う) è un altro kanji.\n- *さいこうきおん* senza lunga: è さい**こう**きおん.\n- Dimenticare che 品 si legge しな da solo, ひん nei composti: 商品 しょうひん, ma 品物 しなもの.' },
      { h: 'Riepilogo', b: '- 陽 よう, 氷 こおり, 最 さい, 夕 ゆう, 品 しな/ひん, 袋 ふくろ.\n- 札 さつ, 服 ふく, 洋 よう, 量 りょう, 包 つつむ, 貸 かす.\n- Composti: 太陽 たいよう, 最高気温 さいこうきおん, 夕方 ゆうがた, 商品 しょうひん, 洋服 ようふく.\n- Frasi: 袋はいりません / 包んでください / 傘を貸してください.' }
    ],
    exercises: [
      mc('Come si legge 夕方?', ['ゆうがた', 'ゆがた', 'せきほう', 'よるがた'], 0),
      mc('Come si legge 洋服?', ['ようふく', 'よふく', 'ようぶく', 'ほうふく'], 0),
      mc('Che cosa significa 貸す?', ['comprare', 'prestare', 'avvolgere', 'pagare'], 1),
      mc('Come si legge 商品?', ['しょうしな', 'しょうぴん', 'しょうひん', 'あきなひん'], 2),
      mc('Che cosa significa 氷?', ['acqua', 'neve', 'nuvola', 'ghiaccio'], 3),
      mc('Come si legge 最近?', ['さいちか', 'さいきん', 'もっときん', 'さいこん'], 1),
      listen('ふくろは いりません。つつんで ください。', 'ja', 'Che cosa dice?', ['Non vuole il sacchetto ma l’incarto', 'Vuole due sacchetti', 'Vuole pagare in contanti', 'Vuole cambiare il prodotto'], 0),
      order('Metti in ordine: «Mi presti un ombrello, per favore»', ['かさを', 'かして', 'ください'], 'Oggetto を + かして + ください.'),
      fillJ('Come si legge 袋?', ['ふくろ'], 'ふくろ.'),
      fillJ('Come si legge 量?', ['りょう'], 'りょう.')
    ],
    test: [
      mc('Come si legge 太陽?', ['たいよう', 'ふとよう', 'たいやん', 'おおひ'], 0),
      mc('Come si legge 最高気温?', ['さいこうきおん', 'さいこうきうん', 'もっともたかいきおん', 'さいたかきおん'], 0),
      mc('Che cosa significa 札?', ['sacchetto', 'prodotto', 'banconota', 'vestito'], 2),
      mc('Come si legge 小包?', ['こづつみ', 'しょうほう', 'ちいさほう', 'こぼう'], 0),
      mc('Che cosa significa 包む?', ['prestare', 'incartare', 'pesare', 'comprare'], 1)
    ],
    cards: [card('c1', 'il sole', '[太陽|たいよう]', '', 'たいよう'), card('c2', 'ghiaccio', '[氷|こおり]', '', 'こおり'), card('c3', 'temperatura massima', '[最高気温|さいこうきおん]', '', 'さいこうきおん'), card('c4', 'di recente', '[最近|さいきん]', '', 'さいきん'), card('c5', 'tardo pomeriggio', '[夕方|ゆうがた]', '', 'ゆうがた'), card('c6', 'prodotto', '[商品|しょうひん]', '', 'しょうひん'),
      card('c7', 'sacchetto', '[袋|ふくろ]', '', 'ふくろ'), card('c8', 'banconota', 'お[札|さつ]', '', 'おさつ'), card('c9', 'abiti occidentali', '[洋服|ようふく]', '', 'ようふく'), card('c10', 'quantità', '[量|りょう]', '', 'りょう'), card('c11', 'incartare', '[包|つつ]む', '', 'つつむ'), card('c12', 'pacco postale', '[小包|こづつみ]', '', 'こづつみ'), card('c13', 'prestare', '[貸|か]す', '', 'かす')],
    listening: [{ id: 'l1', lang: 'ja', title: 'In negozio', text: 'きょうの さいこうきおんは さんじゅうどです。ゆうがたに ゆうだちが あるので、ようふくを かって、かさを かして もらいました。みせで しょうひんを つつんで もらい、ふくろも ください。',
      qs: [{ q: 'Quando ci sarà l’acquazzone?', o: ['Di mattina', 'A mezzogiorno', 'Nel tardo pomeriggio', 'Di notte'], a: 2, kind: 'explicit' }, { q: 'Che cosa si è fatto prestare?', o: ['Un ombrello', 'Una giacca', 'Una borsa', 'Dei soldi'], a: 0, kind: 'explicit' }, { q: 'Che cosa chiede in negozio?', o: ['Di consegnare a casa', 'Di incartare e un sacchetto', 'Lo scontrino', 'Di cambiare taglia'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'ふくろは いりません', lang: 'ja' }, { text: 'かさを かして ください', lang: 'ja' }, { text: 'ゆうがたから あめです', lang: 'ja' }],
    shadowing: [{ text: 'ゆうがたから ゆうだちです。', lang: 'ja', tip: 'ゆうだち: yu・u・da・chi.' }, { text: 'つつんで ください。', lang: 'ja', tip: 'つつんで: tsu・tsun・de.' }, { text: 'かさを かして ください。', lang: 'ja', tip: 'かして: ka・shi・te.' }],
    speaking: [{ prompt: 'Chiedi in negozio di incartare un regalo e di avere un sacchetto.', model: 'これを つつんで ください。ふくろも おねがいします。' }, { prompt: 'Descrivi il tempo di oggi e quando cambierà.', model: 'きょうは あつくて、さいこうきおんは さんじゅうどです。ゆうがたから ゆうだちです。' }],
    reading: [{ id: 'r1', title: 'Una giornata di shopping', text: '[今日|きょう]の [最高気温|さいこうきおん]は 三十度です。[夕方|ゆうがた]に [夕立|ゆうだち]が あるので、[洋服|ようふく]を [買|か]ってから [傘|かさ]を [貸|か]して もらいました。[店|みせ]で [商品|しょうひん]を [包|つつ]んで もらい、[袋|ふくろ]も [一枚|いちまい] ください。',
      qs: [{ q: 'Quanti gradi è la massima?', o: ['Venti', 'Trenta', 'Quaranta', 'Dieci'], a: 1 }, { q: 'Che cosa ha comprato?', o: ['Delle scarpe', 'Dei vestiti', 'Un ombrello', 'Del cibo'], a: 1 }, { q: 'Che cosa ha chiesto oltre all’incarto?', o: ['Uno scontrino', 'Una scatola', 'Un sacchetto', 'Un biglietto'], a: 2 }] }] });
})(window.ST = window.ST || {});
