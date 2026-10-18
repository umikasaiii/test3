/* Giapponese — ampliamento stage J3 (esperienze e ragioni). */
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
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J3', minutes: 20, prereq: ['jpn-j2-plain-opinion'] }, o));

  T({ id: 'jpn-j3-noun-modification', title: 'Frasi che descrivono un nome (relative)', summary: 'Forma semplice + nome: la libreria che ho comprato ieri.',
    objectives: ['Modificare un nome con una frase in forma semplice', 'Usare が al posto di は dentro la relativa', 'Capire frasi con più modificatori'],
    pages: [
      { h: 'Obiettivo', b: 'Il giapponese non ha pronomi relativi (*che, il quale*): una frase intera in **forma semplice** si mette **prima del nome** e lo descrive. È una struttura essenziale per capire testi e parlato dal livello J3 in poi.' },
      { h: 'Verbo + nome', b: '**Frase in forma semplice + nome**:\n- {{ja|[昨日|きのう] [買|か]った [本|ほん]}} — il libro che ho comprato ieri\n- {{ja|[日本語|にほんご]を [勉強|べんきょう]している [人|ひと]}} — la persona che studia giapponese\n- {{ja|[明日|あした] [来|く]る [友達|ともだち]}} — l’amico che verrà domani\n\nIl verbo è in forma semplice (dizionario, た, ている, ない). Il tempo dell’azione dipende dal verbo.' },
      { h: 'Aggettivi e nomi + nome', b: '- い-aggettivi: {{ja|[高|たか]い [車|くるま]}} / {{ja|[新|あたら]しい [店|みせ]}}\n- な-aggettivi: **な** + nome: {{ja|[静|しず]かな [町|まち]}} / {{ja|きれいな [部屋|へや]}}\n- Nome + **の** + nome: {{ja|[学生|がくせい]の [友達|ともだち]}}\n- Passato e negativo: {{ja|[安|やす]くなかった [店|みせ]}}, {{ja|[静|しず]かだった [町|まち]}}' },
      { h: 'Il soggetto dentro la relativa', b: 'Il soggetto della frase subordinata si marca con **が** (o **の**), non **は**:\n- {{ja|わたしが [作|つく]った [料理|りょうり]}} — il piatto che ho cucinato\n- {{ja|[母|はは]が [好|す]きな [歌|うた]}} — la canzone che piace a mia madre\n\nPer un oggetto tematizzato: {{ja|この [料理|りょうり]は わたしが [作|つく]りました。}} (la relativa può essere trasformata in frase principale).' },
      { h: 'Esempio guidato', b: 'Descrivi: *Il film che ho visto ieri era noioso, ma la ragazza che parlava con me era simpatica.*\n\n→ {{ja|[昨日|きのう] [見|み]た [映画|えいが]は つまらなかったですが、わたしと [話|はな]していた [女|おんな]の [人|ひと]は [親切|しんせつ]でした。}}\n\nControllo: la parte descrittiva precede sempre il nome; tempo ok; が/の per il soggetto interno.' },
      { h: 'Errori comuni', b: '- *かった きのう ほん* → {{ja|きのう かった ほん。}}\n- *わたしは かった ほん* → {{ja|わたしが かった ほん。}}\n- *しずかい まち* → {{ja|しずかな まち。}}\n- *みます ひと* → {{ja|みる ひと}} (forma semplice, non ます).\n- Dimenticare che la relativa può essere lunga: leggi fino al nome.' },
      { h: 'Riepilogo', b: '- Forma semplice + nome = «nome che…».\n- Aggettivi: い/な + nome.\n- Soggetto interno: が/の.\n- Non usare ます dentro la relativa.' }
    ],
    exercises: [
      mc('«Il libro che ho comprato ieri»:', ['きのう かった ほん', 'きのう かいました ほん', 'ほん きのう かった', 'きのう かう ほん'], 0),
      mc('«La persona che studia giapponese»:', ['にほんごを べんきょうしている ひと', 'にほんごを べんきょうします ひと', 'ひと にほんごを べんきょう', 'にほんごの べんきょうする ひとが'], 0),
      mc('«Il piatto che ho cucinato io»:', ['わたしが つくった りょうり', 'わたしは つくった りょうり', 'わたしを つくった りょうり', 'つくりました わたしの りょうり'], 0),
      mc('«Una città tranquilla»:', ['しずかな まち', 'しずかい まち', 'しずかの まち', 'しずか まち'], 0),
      listen('きのう みた えいがは おもしろかったです。', 'ja', 'Che cosa dice?', ['Il film visto ieri era interessante', 'Vedrà un film', 'Il film era noioso', 'Non ha visto il film'], 0),
      fillJ('Completa: ははが すき___ うた (な-agg)', ['な'], 'すきな うた.'),
      mc('Nella relativa, il soggetto si marca con…', ['が', 'は', 'を', 'に'], 0)
    ],
    test: [
      mc('Dentro la relativa il verbo è…', ['in forma semplice', 'in forma ます', 'in forma て', 'in forma ませんでした'], 0),
      mc('«La ragazza che parlava con me»:', ['わたしと はなしていた おんなの ひと', 'わたしを はなして おんなの', 'おんなの ひと わたしと', 'わたしと はなします おんなの ひと'], 0),
      listen('あした くる ともだちは いしゃです。', 'ja', 'Chi è medico?', ['L’amico che verrà domani', 'L’amico di ieri', 'Il padre', 'Un collega'], 0),
      mc('«Una casa costosa»:', ['たかい いえ', 'たかな いえ', 'たかく いえ', 'たかの いえ'], 0)
    ],
    cards: [card('c1', 'film', '[映画|えいが]', '', 'えいが'), card('c2', 'noioso', 'つまらない', '', 'つまらない'), card('c3', 'gentile', '[親切|しんせつ]', '', 'しんせつ'), card('c4', 'cucinare/fare', '[作|つく]る', '', 'つくる'),
      card('c5', 'canzone', '[歌|うた]', '', 'うた'), card('c6', 'donna/persona di sesso femminile', '[女|おんな]の[人|ひと]', '', 'おんなのひと'), card('c7', 'piatto/cucina', '[料理|りょうり]', '', 'りょうり'), card('c8', 'ieri', '[昨日|きのう]', '', 'きのう')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Descrivere persone e cose', text: 'きのう みた えいがは つまらなかったですが、となりに すわっていた ひとは しんせつでした。わたしが つくった りょうりを たべた ともだちは おいしいと いいました。あした くる ともだちは いしゃです。',
      qs: [{ q: 'Com’era il film visto ieri?', o: ['Noioso', 'Bellissimo', 'Triste', 'Divertente'], a: 0, kind: 'explicit' }, { q: 'Com’era la persona seduta accanto?', o: ['Gentile', 'Scortese', 'Rumorosa', 'Straniera'], a: 0, kind: 'explicit' }, { q: 'Chi è medico?', o: ['L’amico che viene domani', 'L’amico di ieri', 'Il parlante', 'Nessuno'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'きのう かった ほんです', lang: 'ja' }, { text: 'わたしが つくった りょうりです', lang: 'ja' }, { text: 'にほんごを べんきょうしている ひとです', lang: 'ja' }],
    shadowing: [{ text: 'きのう かった ほんは おもしろいです。', lang: 'ja', tip: 'Una sola unità: il nome è alla fine.' }, { text: 'わたしが つくった りょうりです。', lang: 'ja', tip: 'が: leggero.' }, { text: 'にほんごを べんきょうしている ひとです。', lang: 'ja', tip: 'Frase lunga: respira dopo を.' }],
    speaking: [{ prompt: 'Descrivi una persona e una cosa con una frase relativa ciascuna.', model: 'きのう あった ひとは せんせいです。わたしが かった ほんは おもしろいです。' }, { prompt: 'Racconta di un film o libro con tre frasi relative.', model: 'せんしゅう みた えいがは おもしろかったです。わたしが すきな おんなの ひとが でて いました。' }] });

  T({ id: 'jpn-j3-obligation-permission', title: 'Obbligo, permesso, divieto e consiglio', summary: '～なければならない, ～てもいい, ～てはいけない, ～なくてもいい, ～たほうがいい.',
    objectives: ['Esprimere obbligo e non necessità', 'Chiedere e dare permesso, vietare', 'Dare consigli e avvertimenti'],
    pages: [
      { h: 'Obiettivo', b: 'Le regole sociali e personali si esprimono con strutture ricorrenti: **devo**, **non devo**, **posso**, **non c’è bisogno**, **è meglio**. Sono molto frequenti in contesti di lavoro, viaggio e vita quotidiana.' },
      { h: 'Obbligo e non necessità', b: '- **～なければなりません / ～なければいけません** = devo (ない + ければ + なりません): {{ja|[薬|くすり]を [飲|の]まなければ なりません。}}\n- Colloquiale: **～なきゃ / ～ないと**: {{ja|[行|い]かなきゃ。}}\n- **～なくてもいいです** = non è necessario: {{ja|[明日|あした]は [来|こ]なくても いいです。}}\n\nAttenzione: *non devo (divieto)* si dice **～てはいけません**, non *なければ*.' },
      { h: 'Permesso e divieto', b: '- **～てもいいです** = si può: {{ja|ここで [写真|しゃしん]を [撮|と]っても いいですか。}} — はい、いいですよ。\n- **～てはいけません** = è vietato: {{ja|ここで [食|た]べては いけません。}}\n- **～ないでください** = per favore non…: {{ja|[走|はし]らないで ください。}}\n\nRifiuto cortese del permesso: {{ja|すみません、ちょっと…}} / {{ja|[申|もう]し[訳|わけ]ありません、[禁止|きんし]されて います。}}' },
      { h: 'Consigli', b: '- **～たほうがいいです** = è meglio fare: {{ja|[早|はや]く [寝|ね]た ほうが いいです。}}\n- **～ないほうがいいです** = è meglio non fare: {{ja|[夜|よる] [食|た]べすぎない ほうが いいです。}}\n- **～ほうがいい** può avere un tono forte: con superiori usa **～たらどうですか** / **～てみてはいかがですか**.\n\nConsiglio gentile: {{ja|[病院|びょういん]に [行|い]って みては どうですか。}}' },
      { h: 'Esempio guidato', b: 'Spiega le regole di un ufficio: *Qui non si può fumare. Si può bere il caffè. Dovete arrivare alle 9. Non serve portare il pranzo.*\n\n→ {{ja|ここで [煙草|たばこ]を [吸|す]っては いけません。コーヒーを [飲|の]んでも いいです。[九時|くじ]までに [来|こ]なければ なりません。お[弁当|べんとう]は [持|も]って [来|こ]なくても いいです。}}\n\nControllo: てはいけません (divieto), てもいい (permesso), なければなりません (obbligo), なくてもいい (non necessario).' },
      { h: 'Errori comuni', b: '- *なければいけます* → {{ja|なければいけません / ならない。}}\n- Confondere *なくてもいい* (non serve) con *てはいけない* (vietato).\n- *たべたほうがいいない* → {{ja|たべないほうがいい。}}\n- Usare *ほうがいい* con il capo: troppo diretto.\n- Dimenticare di cambiare la forma ない: *いかなければ*.' },
      { h: 'Riepilogo', b: '- なければならない: devo; なくてもいい: non serve.\n- てもいい: posso; てはいけない: vietato.\n- たほうがいい / ないほうがいい: consiglio.\n- Cortesia con i superiori.' }
    ],
    exercises: [
      mc('«Devo prendere la medicina»:', ['くすりを のまなければ なりません。', 'くすりを のんでも いいです。', 'くすりを のまなくても いいです。', 'くすりを のんでは いけません。'], 0),
      mc('«Non è necessario venire domani»:', ['あしたは こなくても いいです。', 'あしたは こなければ なりません。', 'あしたは きては いけません。', 'あしたは きても いいです。'], 0),
      mc('«Qui è vietato mangiare»:', ['ここで たべては いけません。', 'ここで たべても いいです。', 'ここで たべなければ。', 'ここで たべなくてもいい。'], 0),
      mc('«Posso fare una foto?»', ['しゃしんを とっても いいですか。', 'しゃしんを とっては いけませんか。', 'しゃしんを とらなければ。', 'しゃしんが とって。'], 0),
      listen('はやく ねた ほうが いいです。', 'ja', 'Che cosa consiglia?', ['Di dormire presto', 'Di non dormire', 'Di svegliarsi', 'Di lavorare'], 0),
      fillJ('Completa: いか___ ければ なりません。', ['な'], 'いかなければ.'),
      mc('「ないで ください」significa…', ['per favore non…', 'devo…', 'si può…', 'è meglio…'], 0)
    ],
    test: [
      mc('«てもいいですか» si usa per…', ['chiedere permesso', 'vietare', 'consigliare', 'ordinare'], 0),
      mc('«夜 たべすぎない ほうが いいです» significa…', ['È meglio non mangiare troppo la sera', 'Devi mangiare troppo', 'Puoi mangiare', 'È vietato'], 0),
      listen('ここで たばこを すっては いけません。', 'ja', 'Che cosa significa?', ['È vietato fumare qui', 'Si può fumare', 'Si deve fumare', 'Non fumare è consigliato'], 0),
      mc('Come si forma なければならない?', ['ない + ければ + ならない', 'ます + なければ', 'て + ならない', 'dizionario + ならない'], 0)
    ],
    cards: [card('c1', 'devo', '～なければならない', '', 'なければならない'), card('c2', 'non è necessario', '～なくてもいい', '', 'なくてもいい'), card('c3', 'si può', '～てもいい', '', 'てもいい'), card('c4', 'è vietato', '～てはいけない', '', 'てはいけない'),
      card('c5', 'è meglio', '～たほうがいい', '', 'たほうがいい'), card('c6', 'medicina', '[薬|くすり]', '', 'くすり'), card('c7', 'sigaretta', '[煙草|たばこ]', '', 'たばこ'), card('c8', 'divieto', '[禁止|きんし]', '', 'きんし')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Le regole dell’ufficio', text: 'ここで たばこを すっては いけません。コーヒーを のんでも いいです。くじまでに こなければ なりません。おべんとうは もって こなくても いいです。かぜの ときは はやく かえった ほうが いいです。',
      qs: [{ q: 'Che cosa è vietato?', o: ['Fumare', 'Bere caffè', 'Arrivare tardi', 'Mangiare'], a: 0, kind: 'explicit' }, { q: 'Entro che ora si deve arrivare?', o: ['Entro le 9', 'Entro le 8', 'Entro le 10', 'Alle 5'], a: 0, kind: 'explicit' }, { q: 'Che cosa si consiglia con il raffreddore?', o: ['Tornare presto a casa', 'Restare', 'Lavorare di più', 'Mangiare molto'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ここで たべては いけません', lang: 'ja' }, { text: 'くすりを のまなければ なりません', lang: 'ja' }, { text: 'あしたは こなくても いいです', lang: 'ja' }],
    shadowing: [{ text: 'ここで たべては いけません。', lang: 'ja', tip: 'Tono fermo ma cortese.' }, { text: 'くすりを のまなければ なりません。', lang: 'ja', tip: 'なければ: legato.' }, { text: 'はやく ねた ほうが いいです。', lang: 'ja', tip: 'ほう: leggero.' }],
    speaking: [{ prompt: 'Spiega tre regole di un luogo che conosci (palestra, ufficio, scuola).', model: 'ここで はしっては いけません。くつを ぬがなければ なりません。しゃしんを とっても いいです。' }, { prompt: 'Dai un consiglio a un amico che non sta bene.', model: 'はやく ねた ほうが いいです。くすりを のんで、あしたは やすんだ ほうが いいです。' }] });

  T({ id: 'jpn-j3-hearsay-inference', title: 'Riportare e dedurre: そうだ, らしい, ようだ, みたい', summary: 'Dire «a quanto pare», «sembra che» in base alla fonte o ai sensi.',
    objectives: ['Distinguere そうだ (sentito dire) e そう (aspetto)', 'Usare らしい, ようだ, みたい per le deduzioni', 'Attribuire correttamente la fonte'],
    pages: [
      { h: 'Obiettivo', b: 'In giapponese è importante indicare **da dove viene un’informazione**: l’hai sentita dire, l’hai dedotta, o la vedi. Ci sono diversi marcatori per questo.' },
      { h: 'そうだ: sentito dire', b: '**Forma semplice + そうです** = ho sentito che…:\n- {{ja|あした [雨|あめ]が [降|ふ]る そうです。}}\n- {{ja|[田中|たなか]さんは [来|こ]ない そうです。}}\n- {{ja|この [店|みせ]は おいしい そうです。}}\n\nFonte: {{ja|ニュースに よると、…そうです。}} (secondo le notizie…)' },
      { h: 'Aspetto: そうだ (radice)', b: '**Radice / aggettivo senza い + そうです** = sembra (dall’aspetto):\n- {{ja|[雨|あめ]が [降|ふ]りそうです。}} (sta per piovere)\n- {{ja|おいしそうです。}} (sembra buono)\n\nAttenzione: **forma semplice + そう** = sentito dire; **radice + そう** = aspetto.' },
      { h: 'ようだ e みたいだ', b: '**ようです** (formale) / **みたいです** (colloquiale) = sembra che (deduzione dai sensi):\n- {{ja|[誰|だれ]か [来|き]た ようです。}}\n- {{ja|[風邪|かぜ]を ひいた みたいです。}}\n\nNomi: **の ようです / みたいです**: {{ja|[夢|ゆめ]の ようです。}} (è come un sogno)\n\nParagone: {{ja|[子供|こども]みたいに [笑|わら]います。}}' },
      { h: 'らしい', b: '**らしい** = a quanto pare / è tipico di:\n- Informazione indiretta: {{ja|[彼|かれ]は [来週|らいしゅう] [結婚|けっこん]する らしいです。}}\n- Tipicità: {{ja|[男|おとこ]らしい}} (virile), {{ja|[子供|こども]らしい}} (infantile)\n\nDifferenza: そうだ = ho sentito dire; らしい = deduzione basata su indizi indiretti; ようだ = impressione diretta.' },
      { h: 'Esempio guidato', b: 'Situazione: senti dire che l’esame è difficile; vedi la tua amica pallida.\n\n- {{ja|[試験|しけん]は [難|むずか]しい そうです。}} (sentito dire)\n- {{ja|[友達|ともだち]は [元気|げんき]が ない ようです。}} (impressione)\n- {{ja|[風邪|かぜ]らしいです。}} (a quanto pare)\n\nControllo: ho scelto il marcatore in base alla fonte?' },
      { h: 'Errori comuni', b: '- *あめがふりそうだ* (aspetto) vs *あめがふるそうだ* (sentito dire).\n- *おいしいそう* → {{ja|おいしそう。}}\n- *いいそう* → {{ja|よさそう。}}\n- Usare みたい in contesti formali: usa ようです.\n- Confondere らしい (deduzione) con そう.' },
      { h: 'Riepilogo', b: '- forma semplice + そう: sentito dire; radice + そう: aspetto.\n- ようだ / みたい: impressione.\n- らしい: a quanto pare.\n- Indica sempre la fonte.' }
    ],
    exercises: [
      mc('«Ho sentito che domani pioverà»:', ['あした あめが ふる そうです。', 'あした あめが ふりそうです。', 'あした あめが ふるようです。', 'あした あめが ふります らしい。'], 0),
      mc('«Sta per piovere» (aspetto):', ['あめが ふりそうです。', 'あめが ふる そうです。', 'あめが ふった らしい。', 'あめが ふる みたい です。'], 0),
      mc('«Sembra delizioso»:', ['おいしそうです。', 'おいしい そうです。', 'おいしいようです です。', 'おいしかった らしい。'], 0),
      mc('«A quanto pare si sposa la prossima settimana»:', ['らいしゅう けっこんする らしいです。', 'らいしゅう けっこんしそうです。', 'らいしゅう けっこんします ようだ。', 'らいしゅう けっこんしてください。'], 0),
      listen('だれか きた ようです。', 'ja', 'Che cosa pensa il parlante?', ['Che qualcuno sia arrivato', 'Che nessuno sia arrivato', 'Che venga qualcuno domani', 'Che sia partito'], 0),
      fillJ('Completa: かぜを ひいた ___ です。(colloquiale: sembra)', ['みたい'], 'みたい.'),
      mc('「よさそう」 è la forma aspetto di…', ['いい', 'わるい', 'おいしい', 'たかい'], 0)
    ],
    test: [
      mc('そうです dopo una forma semplice significa…', ['sentito dire', 'aspetto', 'obbligo', 'desiderio'], 0),
      mc('«Sembra un sogno» si dice…', ['ゆめの ようです', 'ゆめ そうです', 'ゆめ らしくです', 'ゆめを みたい'], 0),
      listen('ニュースに よると、あした ゆきが ふる そうです。', 'ja', 'Qual è la fonte?', ['Le notizie', 'Un amico', 'Il parlante', 'Un libro'], 0),
      mc('らしい indica…', ['a quanto pare', 'devo', 'voglio', 'possiamo'], 0)
    ],
    cards: [card('c1', 'ho sentito che', '～そうです', '', 'そうです'), card('c2', 'sembra (aspetto)', '～そう', '', 'そう'), card('c3', 'sembra (impressione)', '～ようです', '', 'ようです'), card('c4', 'a quanto pare', '～らしい', '', 'らしい'),
      card('c5', 'secondo', '～に よると', '', 'によると'), card('c6', 'raffreddore', '[風邪|かぜ]', '', 'かぜ'), card('c7', 'sogno', '[夢|ゆめ]', '', 'ゆめ'), card('c8', 'esame', '[試験|しけん]', '', 'しけん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Voci e impressioni', text: 'ニュースに よると、あした ゆきが ふる そうです。そとは さむそうです。だれか きた ようです。ともだちは かぜを ひいた みたいです。かれは らいしゅう けっこんする らしいです。',
      qs: [{ q: 'Che cosa dice il notiziario?', o: ['Domani nevicherà', 'Domani farà caldo', 'Domani pioverà', 'Domani sarà sereno'], a: 0, kind: 'explicit' }, { q: 'Che cosa pare del tempo fuori?', o: ['Freddo', 'Caldo', 'Umido', 'Ventoso'], a: 0, kind: 'explicit' }, { q: 'Che cosa si dice del suo amico?', o: ['Si sposa la prossima settimana', 'È malato da una settimana', 'Parte', 'Ha cambiato lavoro'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'あした ゆきが ふる そうです', lang: 'ja' }, { text: 'だれか きた ようです', lang: 'ja' }, { text: 'かぜを ひいた みたいです', lang: 'ja' }],
    shadowing: [{ text: 'あした ゆきが ふる そうです。', lang: 'ja', tip: 'そうです: breve e piatto.' }, { text: 'だれか きた ようです。', lang: 'ja', tip: 'ようです: tono incerto.' }, { text: 'かれは けっこんする らしいです。', lang: 'ja', tip: 'らしい: leggero.' }],
    speaking: [{ prompt: 'Riporta tre informazioni sentite dire e due impressioni personali.', model: 'ニュースに よると、あしたは あめが ふる そうです。ともだちは けっこんする らしいです。この みせは おいしそうです。だれか いる ようです。' }, { prompt: 'Spiega perché pensi che un amico sia stanco o malato.', model: 'かおいろが わるいようです。かぜを ひいた みたいです。はやく ねた ほうが いいと おもいます。' }] });

  T({ id: 'jpn-j3-kanji-3', title: 'Kanji 3: tempo, natura e cibo', summary: '45 kanji di tempo, natura, colori e cibo.',
    objectives: ['Riconoscere 45 kanji su tempo, natura, colori e cibo', 'Leggere parole comuni con questi kanji', 'Capire cartelli e menu semplici'],
    pages: [
      { h: 'Obiettivo', b: 'Questa lezione amplia i kanji verso **tempo, natura, colori e cibo**: parole che trovi in menu, previsioni del tempo e cartelli.' },
      { h: 'Tempo', b: '- {{ja|[朝|あさ]}} mattina, {{ja|[昼|ひる]}} giorno/pranzo, {{ja|[夜|よる]}} notte, {{ja|[今朝|けさ]}} stamattina, {{ja|[今晩|こんばん]}} stasera\n- {{ja|[週|しゅう]}} settimana: {{ja|[毎週|まいしゅう]}}, {{ja|[来週|らいしゅう]}}; {{ja|[月|つき]}} mese; {{ja|[年|とし]}} anno\n- Stagioni: {{ja|[春|はる]}} primavera, {{ja|[夏|なつ]}} estate, {{ja|[秋|あき]}} autunno, {{ja|[冬|ふゆ]}} inverno' },
      { h: 'Natura e meteo', b: '- {{ja|[天気|てんき]}} tempo, {{ja|[雨|あめ]}} pioggia, {{ja|[雪|ゆき]}} neve, {{ja|[風|かぜ]}} vento, {{ja|[空|そら]}} cielo\n- {{ja|[山|やま]}} montagna, {{ja|[川|かわ]}} fiume, {{ja|[海|うみ]}} mare, {{ja|[花|はな]}} fiore, {{ja|[木|き]}} albero\n- Animali: {{ja|[犬|いぬ]}} cane, {{ja|[猫|ねこ]}} gatto, {{ja|[魚|さかな]}} pesce, {{ja|[鳥|とり]}} uccello' },
      { h: 'Colori', b: '- {{ja|[赤|あか]い}} rosso, {{ja|[青|あお]い}} blu/verde, {{ja|[白|しろ]い}} bianco, {{ja|[黒|くろ]い}} nero\n- {{ja|[色|いろ]}} colore: {{ja|[何色|なにいろ]}} che colore?\n- {{ja|[黄色|きいろ]}} giallo, {{ja|[緑|みどり]}} verde (nome)' },
      { h: 'Cibo e luoghi', b: '- {{ja|[肉|にく]}} carne, {{ja|[魚|さかな]}} pesce, {{ja|[米|こめ]}} riso (crudo), {{ja|[茶|ちゃ]}} tè, {{ja|[酒|さけ]}} sakè, {{ja|[飯|めし]}} pasto\n- {{ja|[店|みせ]}} negozio, {{ja|[屋|や]}} -negozio (本屋 libreria), {{ja|[町|まち]}} città, {{ja|[道|みち]}} strada\n\nEsempi: {{ja|[本屋|ほんや]}}, {{ja|[肉屋|にくや]}}, {{ja|[魚屋|さかなや]}}, {{ja|[緑茶|りょくちゃ]}}.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[今朝|けさ]は [雨|あめ]でしたが、[夜|よる]は [晴|は]れて [空|そら]が [青|あお]く なりました。[来週|らいしゅう]は [春|はる]の [山|やま]に [行|い]きます。}}\n\n→ *Stamattina pioveva ma la sera si è schiarito e il cielo è diventato azzurro. La settimana prossima andrò in montagna in primavera.*' },
      { h: 'Errori comuni', b: '- Confondere 青 e 緑.\n- Leggere 町 come *まち* e *ちょう* nei nomi propri.\n- Confondere 木 e 本.\n- Dimenticare la lettura on/kun di 風 (かぜ/ふう).\n- Non usare hiragana quando incerti.' },
      { h: 'Riepilogo', b: '- 45 kanji: tempo, natura, colori, cibo.\n- Parole: 今朝, 来週, 本屋, 緑茶.\n- Impara le parole, non i kanji isolati.\n- Usa gli esercizi di lettura.' }
    ],
    exercises: [
      mc('Come si legge 朝?', ['あさ', 'よる', 'ひる', 'ゆう'], 0),
      mc('Come si legge 雨?', ['あめ', 'ゆき', 'かぜ', 'そら'], 0),
      mc('Come si legge 本屋?', ['ほんや', 'もとや', 'ほんおく', 'ほんえん'], 0),
      mc('Che cosa significa 青い?', ['blu', 'rosso', 'bianco', 'nero'], 0),
      mc('Come si legge 来週?', ['らいしゅう', 'こしゅう', 'くるしゅう', 'らいかい'], 0),
      fillJ('Come si legge 山?', ['やま', 'yama'], 'やま.'),
      mc('Come si legge 魚?', ['さかな', 'とり', 'ねこ', 'いぬ'], 0)
    ],
    test: [
      mc('Qual è il kanji di «mare»?', ['海', '川', '山', '空'], 0),
      mc('Come si legge 春?', ['はる', 'なつ', 'あき', 'ふゆ'], 0),
      mc('Come si legge 赤い?', ['あかい', 'あおい', 'しろい', 'くろい'], 0),
      mc('«夜» significa…', ['notte', 'mattina', 'giorno', 'sera tardi'], 0)
    ],
    cards: [card('c1', 'mattina', '[朝|あさ]', '', 'あさ'), card('c2', 'notte', '[夜|よる]', '', 'よる'), card('c3', 'pioggia', '[雨|あめ]', '', 'あめ'), card('c4', 'neve', '[雪|ゆき]', '', 'ゆき'),
      card('c5', 'montagna', '[山|やま]', '', 'やま'), card('c6', 'mare', '[海|うみ]', '', 'うみ'), card('c7', 'libreria', '[本屋|ほんや]', '', 'ほんや'), card('c8', 'primavera', '[春|はる]', '', 'はる')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Previsioni', text: 'けさは あめでしたが、よるは はれて そらが あおく なりました。らいしゅうは はるの やまに いきます。ほんやで ちずを かいます。ゆきは もう ありません。',
      qs: [{ q: 'Com’era il tempo stamattina?', o: ['Pioggia', 'Sole', 'Neve', 'Vento'], a: 0, kind: 'explicit' }, { q: 'Dove andrà la settimana prossima?', o: ['In montagna', 'Al mare', 'In città', 'In campagna'], a: 0, kind: 'explicit' }, { q: 'Che cosa compra in libreria?', o: ['Una mappa', 'Un libro', 'Una rivista', 'Una penna'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'けさは あめでした', lang: 'ja' }, { text: 'そらが あおく なりました', lang: 'ja' }, { text: 'らいしゅうは やまに いきます', lang: 'ja' }],
    shadowing: [{ text: 'けさは あめでしたが、よるは はれました。', lang: 'ja', tip: 'が: contrasto.' }, { text: 'そらが あおく なりました。', lang: 'ja', tip: 'Cambiamento: なりました.' }, { text: 'らいしゅうは やまに いきます。', lang: 'ja', tip: 'Ritmo regolare.' }],
    speaking: [{ prompt: 'Descrivi il tempo di oggi e quello di domani con parole del lessico.', model: 'きょうは はれです。そらが あおいです。あしたは あめが ふる そうです。' }, { prompt: 'Spiega che cosa compri in una libreria e in una macelleria.', model: 'ほんやで ちずを かいます。にくやで にくを かいます。' }],
    reading: [{ id: 'r1', title: 'Meteo', text: '[今朝|けさ]は [雨|あめ]でしたが、[夜|よる]は [晴|は]れて [空|そら]が [青|あお]く なりました。[来週|らいしゅう]は [春|はる]の [山|やま]に [行|い]きます。[本屋|ほんや]で [地図|ちず]を [買|か]います。',
      qs: [{ q: 'Com’era il tempo stamattina?', o: ['Pioggia', 'Sole', 'Neve', 'Nuvoloso'], a: 0 }, { q: 'Dove va la settimana prossima?', o: ['In montagna', 'Al mare', 'In città', 'In stazione'], a: 0 }, { q: 'Dove compra una mappa?', o: ['In libreria', 'In supermercato', 'In stazione', 'Online'], a: 0 }] }] });

  T({ id: 'jpn-j3-phone-appointments', title: 'Telefonate e appuntamenti', summary: 'Rispondere al telefono, prendere e spostare appuntamenti, lasciare messaggi.',
    objectives: ['Rispondere e fare una telefonata in modo cortese', 'Prendere, spostare e annullare un appuntamento', 'Lasciare e capire un messaggio'],
    pages: [
      { h: 'Obiettivo', b: 'Le telefonate in giapponese seguono formule precise. Conoscerle ti permette di **rispondere**, **chiedere di una persona**, **fissare** e **cambiare** un appuntamento con garbo.' },
      { h: 'Aprire e chiedere di qualcuno', b: '- {{ja|もしもし、[田中|たなか]です。}} (informale/diretto)\n- Azienda: {{ja|はい、さくら[商事|しょうじ]です。}}\n- Chiedere: {{ja|[鈴木|すずき]さんを おねがいします。}} / {{ja|[鈴木|すずき]さんは いらっしゃいますか。}}\n- Presentarsi: {{ja|ロッシと [申|もう]します。}} (umile)\n- Risposta: {{ja|[少々|しょうしょう]お[待|ま]ちください。}} / {{ja|ただいま [席|せき]を [外|はず]して おります。}} (non è al posto)' },
      { h: 'Prendere un appuntamento', b: '- {{ja|[来週|らいしゅう]の [会議|かいぎ]に ついて [相談|そうだん]したいんですが…}}\n- {{ja|いつが [都合|つごう]が いいですか。}} — Quando le va bene?\n- {{ja|[火曜日|かようび]の [午後|ごご]は どうでしょうか。}}\n- {{ja|[火曜日|かようび]の [三時|さんじ]で [大丈夫|だいじょうぶ]です。}}\n\nCortesia: **～でしょうか** attenua; **ご都合** è onorifico.' },
      { h: 'Spostare o annullare', b: '- {{ja|[申|もう]し[訳|わけ]ありませんが、[予定|よてい]を [変更|へんこう]して いただけませんか。}}\n- {{ja|[急|きゅう]に [用事|ようじ]が できて しまいました。}}\n- {{ja|[来週|らいしゅう]に [延|の]ばして もらえませんか。}}\n- {{ja|キャンセルさせて いただきます。}}\n\nSempre: scusarsi, spiegare brevemente, proporre un’alternativa.' },
      { h: 'Lasciare un messaggio', b: '- {{ja|[伝言|でんごん]を おねがいできますか。}}\n- {{ja|[電話|でんわ]が あった ことを [伝|つた]えて ください。}}\n- {{ja|また [後|あと]で [電話|でんわ]します。}}\n- {{ja|[折|お]り[返|かえ]し [電話|でんわ]を いただけますか。}} (può richiamarmi?)\n- Chiusura: {{ja|[失礼|しつれい]します。}}' },
      { h: 'Esempio guidato', b: 'Telefonata: *«Buongiorno, sono Rossi. Vorrei parlare con il signor Suzuki per fissare una riunione.»*\n\n→ {{ja|おはようございます。ロッシと [申|もう]します。[鈴木|すずき]さんを おねがいします。[会議|かいぎ]に ついて [相談|そうだん]したいんです。}}\n\nRisposta: {{ja|[少々|しょうしょう]お[待|ま]ちください。}}' },
      { h: 'Errori comuni', b: '- Usare もしもし in contesti d’affari: usa **はい、〇〇です**.\n- Non dire il proprio nome con **と もうします**.\n- Dire *いません* per «non c’è»: preferisci **席を外しております**.\n- Non chiudere con **失礼します**.\n- Parlare troppo in fretta.' },
      { h: 'Riepilogo', b: '- Aprire: はい、〇〇です; chiedere: ～さんを おねがいします.\n- Appuntamento: ご都合, ～でしょうか.\n- Cambiare/annullare con scuse.\n- Messaggio e chiusura: 失礼します.' }
    ],
    exercises: [
      mc('«Vorrei parlare con il signor Suzuki»:', ['すずきさんを おねがいします。', 'すずきさんは いませんか。', 'すずきさんが だれですか。', 'すずきさんを いきます。'], 0),
      mc('«Mi chiamo Rossi» (formale al telefono):', ['ロッシと もうします。', 'ロッシです よ。', 'ロッシが います。', 'ロッシを おねがい。'], 0),
      mc('«Un momento, per favore»:', ['しょうしょう おまちください。', 'いまは いません。', 'ごめん。', 'もうすぐ。'], 0),
      mc('«Quando le va bene?»', ['いつが つごうが いいですか。', 'どこが いいですか。', 'だれが いいですか。', 'なにが つごうですか。'], 0),
      listen('ただいま せきを はずして おります。', 'ja', 'Che cosa significa?', ['Al momento non è al posto', 'È in ferie', 'È a casa', 'Ha cambiato lavoro'], 0),
      mc('Per chiudere la telefonata:', ['しつれいします。', 'さようなら ね。', 'じゃあね。', 'おやすみ。'], 0),
      mc('«Può richiamarmi?»', ['おりかえし でんわを いただけますか。', 'でんわを かけます。', 'でんわを きります。', 'でんわを とって。'], 0)
    ],
    test: [
      mc('«つごう» significa…', ['convenienza / disponibilità', 'prezzo', 'luogo', 'nome'], 0),
      mc('Perché si dice «席を外しております»?', ['Per dire che la persona non è al posto', 'Per chiedere scusa', 'Per salutare', 'Per chiudere'], 0),
      listen('らいしゅうに のばして もらえませんか。', 'ja', 'Che cosa chiede?', ['Di spostare alla settimana prossima', 'Di anticipare', 'Di cancellare per sempre', 'Di confermare'], 0),
      mc('«Annullare» in giapponese educato:', ['キャンセルさせていただきます', 'やめる だ', 'こない よ', 'ぜんぜん だめ'], 0)
    ],
    cards: [card('c1', 'pronto (tel.)', 'もしもし', '', 'もしもし'), card('c2', 'un momento', '[少々|しょうしょう]', '', 'しょうしょう'), card('c3', 'disponibilità', '[都合|つごう]', '', 'つごう'), card('c4', 'messaggio', '[伝言|でんごん]', '', 'でんごん'),
      card('c5', 'cambiare (data)', '[変更|へんこう]', '', 'へんこう'), card('c6', 'posticipare', '[延|の]ばす', '', 'のばす'), card('c7', 'richiamare', '[折|お]り[返|かえ]し[電話|でんわ]', '', 'おりかえしでんわ'), card('c8', 'permesso (chiudere)', '[失礼|しつれい]します', '', 'しつれいします')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Una telefonata', text: 'はい、さくらしょうじです。おはようございます。ロッシと もうします。すずきさんを おねがいします。しょうしょう おまちください。すずきは ただいま せきを はずして おります。でんごんを おねがいできますか。かようびの ごご さんじは いかがでしょうか。しつれいします。',
      qs: [{ q: 'Con chi vuole parlare?', o: ['Con il signor Suzuki', 'Con Tanaka', 'Con il capo', 'Con il receptionist'], a: 0, kind: 'explicit' }, { q: 'Perché non può parlare?', o: ['Non è al posto', 'È in ferie', 'È malato', 'Ha riattaccato'], a: 0, kind: 'explicit' }, { q: 'Che cosa propone?', o: ['Martedì alle 3', 'Lunedì alle 5', 'Mercoledì alle 3', 'Venerdì'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ロッシと もうします', lang: 'ja' }, { text: 'すずきさんを おねがいします', lang: 'ja' }, { text: 'しつれいします', lang: 'ja' }],
    shadowing: [{ text: 'ロッシと もうします。', lang: 'ja', tip: 'Tono cortese e chiaro.' }, { text: 'すずきさんを おねがいします。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'かようびの ごご さんじは いかがでしょうか。', lang: 'ja', tip: 'でしょうか: ascendente leggero.' }],
    speaking: [{ prompt: 'Simula una telefonata: chiedi di una persona, proponi un appuntamento.', model: 'おはようございます。ロッシと もうします。すずきさんを おねがいします。らいしゅうの かようびの ごご さんじは いかがでしょうか。' }, { prompt: 'Chiedi di spostare un appuntamento.', model: 'もうしわけありませんが、よていを へんこうして いただけませんか。らいしゅうに のばして もらえませんか。' }] });
})(window.ST = window.ST || {});
