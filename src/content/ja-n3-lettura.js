/* Giapponese — stage J7: lettura e ascolto verso N3 (8 argomenti). */
(function (ST) {
  'use strict';
  const C = ST.content, { order, card } = C;
  let rot = 0;
  const rotate = (o) => { const n = o.length, k = (rot++ * 3 + 1) % n, rest = o.slice(1); rest.splice(k, 0, o[0]); return [rest, k]; };
  const mc = (q, o, why) => { const [r, k] = rotate(o); return C.mc(q, r, k, why); };
  const lis = (say, q, o, why) => { const [r, k] = rotate(o); return C.listen(say, 'ja', q, r, k, why); };
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });
  const qs = (arr) => arr.map(x => { const [r, k] = rotate(x.o); return { q: x.q, o: r, a: k, kind: x.kind || 'explicit' }; });
  const R = (o) => {
    C.addTopic({ subject: 'jpn', stage: 'J7', minutes: 25, id: o.id, title: o.title, summary: o.summary, prereq: [o.prereq], objectives: o.obj, pages: o.pages, exercises: o.ex, test: o.test, cards: o.cards,
      listening: [{ id: 'l1', lang: 'ja', title: o.lis.title, text: o.lis.text, qs: qs(o.lis.qs) }],
      dictation: o.dict.map(text => ({ text, lang: 'ja' })), shadowing: o.shad.map(x => ({ text: x[0], lang: 'ja', tip: x[1] })), speaking: o.speak.map(x => ({ prompt: x[0], model: x[1] })),
      reading: [{ id: 'r1', title: o.read.title, text: o.read.text, qs: qs(o.read.qs) }] });
  };

  R({ id: 'jpn-j7-vita-quotidiana', prereq: 'jpn-j6-gram-fukugoudoushi', title: 'Vita quotidiana: diario e programmi del fine settimana',
    summary: 'Leggere un diario e capire sequenze, cause e stati d’animo non detti.',
    obj: ['Seguire la sequenza di un diario', 'Capire cause e stati d’animo impliciti', 'Ascoltare un dialogo sui programmi del fine settimana'],
    pages: [
      { h: 'Obiettivo', b: 'I testi di vita quotidiana (diari, messaggi, racconti brevi) usano **frasi collegate** da て, から, ので, たら. Qui impari a seguire **cosa accade prima e dopo**, a cogliere **il motivo** e a capire **come si sente** chi scrive anche quando non lo dice.' },
      { h: 'Struttura del diario', b: 'Un diario giapponese ha di solito: **data / tempo → fatti in ordine → impressione finale**.\n- Tempo: {{ja|[今日|きょう]は [日曜日|にちようび]でしたが…}}\n- Sequenza: {{ja|[掃除|そうじ]して、[洗濯|せんたく]もしました。}}\n- Commento: {{ja|[少|すこ]し [気|き]が [重|おも]いです。}}\n\nL’ultima frase di solito contiene il **sentimento chiave**.' },
      { h: 'Vocabolario utile', b: '- {{ja|[過|す]ごす}} trascorrere; {{ja|[午前中|ごぜんちゅう]}} durante la mattina; {{ja|[掃除|そうじ]}} pulizie; {{ja|[洗濯|せんたく]}} bucato\n- {{ja|[借|か]りる}} prendere in prestito; {{ja|[読|よ]み[終|お]わる}} finire di leggere\n- {{ja|[気|き]が [重|おも]い}} sentirsi giù, preoccupato; {{ja|[楽|たの]しみ}} attesa piacevole\n- Connettivi: {{ja|それから}}, {{ja|その[後|あと]}}, {{ja|[結局|けっきょく]}}, {{ja|でも}}' },
      { h: 'Strategia di lettura', b: '1. Leggi il **titolo e la data**.\n2. Sottolinea i **verbi finali**: sono i fatti.\n3. Segna i **connettivi**: から/ので (causa), が/けど (contrasto), て (sequenza).\n4. Chiediti: chi? quando? perché?\n5. Rileggi l’ultima frase per capire il tono.' },
      { h: 'Comprensione implicita', b: 'Quello che non è detto, si deduce da **segnali**:\n- {{ja|[明日|あした]からまた [仕事|しごと]だ と [思|おも]うと…}} → chi scrive non è entusiasta del lunedì.\n- {{ja|[友達|ともだち]に [借|か]りた [本|ほん]}} → ha un amico che legge, e si fida.\n- {{ja|[雨|あめ]が [降|ふ]って いたので [家|いえ]で…}} → ha cambiato piano per il tempo.\n\nIn N3 chiedono spesso «Come si sente?» o «Perché?» senza che la risposta sia scritta.' },
      { h: 'Ascolto: programmi del weekend', b: 'Nei dialoghi cerca: **giorno**, **luogo**, **con chi**, **cosa farà**. Prestare attenzione a forme come {{ja|～つもりです}}, {{ja|～ことに しました}}, {{ja|～かもしれません}}.\n\nRiascolta una seconda volta per i dettagli (orari, motivi del rifiuto).' },
      { h: 'Esempio guidato', b: 'Frase: {{ja|[雨|あめ]が [降|ふ]って いたので、[家|いえ]で [過|す]ごしました。}}\n- Fatto: ha trascorso la giornata a casa.\n- Motivo: pioveva.\n- Implicito: non aveva piani all’aperto o li ha cancellati.\n\nFrase: {{ja|[読|よ]み[始|はじ]めましたが、[面白|おもしろ]くて [夜|よる]までに [読|よ]み[終|お]わりました。}}\n- Fatto: ha letto tutto il libro.\n- Implicito: il libro era appassionante.' },
      { h: 'Errori e riepilogo', b: '- Confondere l’ordine: て collega azioni in sequenza, non in contrasto.\n- Prendere un connettivo di contrasto (が) per una sequenza.\n- Ignorare l’ultima frase.\n- Tradurre parola per parola invece di cercare il senso.\n\nRiepilogo: data → fatti → impressione; cerca causa e tono; deduci l’implicito dai segnali.' }
    ],
    ex: [
      mc('«[午前中|ごぜんちゅう]» significa…', ['durante la mattina', 'a mezzogiorno', 'la sera', 'ogni giorno']),
      mc('「あめが ふって いたので、いえで すごしました。」 Perché è rimasto a casa?', ['Perché pioveva', 'Perché era stanco', 'Perché aveva ospiti', 'Perché era domenica']),
      mc('「きが おもい」 vuol dire…', ['sentirsi giù o preoccupato', 'essere pesante', 'avere fame', 'essere felice']),
      fillJ('Completa: ともだちに かり___ ほんを よみました。(il libro preso in prestito)', ['た'], 'かりた + nome.'),
      fillJ('Completa: ほんを よみ___ ました。(ho finito)', ['おわり'], '[読|よ]み[終|お]わる.'),
      fillJ('Completa: あめが ふって いた___、いえで すごしました。', ['ので'], 'Causa: ので.'),
      order('Metti in ordine: «Ho pulito la stanza e fatto il bucato»', ['へやを', 'そうじして', 'せんたくも', 'しました'], 'て-form per la sequenza.'),
      order('Metti in ordine: «Da domani si lavora di nuovo»', ['あしたから', 'また', 'しごとです'], 'Frase breve.'),
      lis('ひるごはんの あとで ほんを よみはじめました。', 'Quando ha iniziato a leggere?', ['Dopo pranzo', 'Prima di colazione', 'Di notte', 'Domattina']),
      mc('Nel diario, dove di solito si trova il sentimento chiave?', ['nell’ultima frase', 'nel titolo', 'nella data', 'nel primo verbo']),
      mc('「ほんが おもしろくて よるまでに よみおわった」 Che cosa si deduce?', ['Il libro era coinvolgente', 'Il libro era noioso', 'Ha letto di fretta', 'Ha dimenticato il libro'])
    ],
    test: [
      mc('«[洗濯|せんたく]» significa…', ['bucato', 'pulizie', 'cucina', 'spesa']),
      mc('Nel testo «[読|よ]み[始|はじ]めましたが、[面白|おもしろ]くて…» il が esprime…', ['la frase seguente è diversa dalle aspettative: era interessante', 'un forte contrasto negativo', 'una domanda', 'un ordine']),
      mc('「あしたから また しごとだと おもうと、すこし きが おもいです」', ['Non ha voglia di tornare al lavoro', 'Aspetta con ansia il lavoro', 'Ha finito il lavoro', 'Cambierà lavoro']),
      mc('«その[後|あと]» significa…', ['dopo di ciò', 'prima di ciò', 'invece', 'durante']),
      mc('Quale connettivo introduce una causa?', ['ので', 'それから', 'でも', 'しかし']),
      fillJ('Completa: ひるごはんの ___、ほんを よみました。(dopo)', ['あと', '後'], 'N の あと.'),
      lis('あした きょうとへ いく つもりです。', 'Che cosa farà?', ['Andrà a Kyoto', 'Resterà a casa', 'Tornerà dal viaggio', 'Chiamerà un amico'])
    ],
    cards: [card('c1', 'trascorrere (tempo)', '[過|す]ごす', '', 'すごす'), card('c2', 'durante la mattina', '[午前中|ごぜんちゅう]', '', 'ごぜんちゅう'), card('c3', 'pulizie', '[掃除|そうじ]', '', 'そうじ'), card('c4', 'bucato', '[洗濯|せんたく]', '', 'せんたく'), card('c5', 'prendere in prestito', '[借|か]りる', '', 'かりる'), card('c6', 'sentirsi giù', '[気|き]が[重|おも]い', '', 'きがおもい'), card('c7', 'alla fine, infine', '[結局|けっきょく]', '', 'けっきょく'), card('c8', 'dopo di ciò', 'その[後|あと]', '', 'そのあと')],
    lis: { title: 'Programmi del weekend', text: 'こんしゅうの にちようびは どうしますか。あめが ふるかもしれないので、うちで すごす つもりです。たなかさんは。ともだちと えいがを みに いく ことに しました。それは いいですね。わたしも いきたいですが、しゅくだいが たくさん あります。',
      qs: [{ q: 'Che cosa farà il parlante domenica?', o: ['Resterà a casa', 'Andrà al cinema', 'Andrà a Kyoto', 'Lavorerà'] }, { q: 'Cosa ha deciso Tanaka?', o: ['Di andare al cinema con un amico', 'Di restare a casa', 'Di studiare', 'Di fare spese'] }, { q: 'Perché il parlante non può andare al cinema?', o: ['Ha molti compiti', 'Non ha soldi', 'Non gli piace il cinema', 'Ha un impegno di lavoro'], kind: 'implicit' }] },
    dict: ['へやを そうじして せんたくも しました', 'あしたから また しごとです', 'ほんを よみおわりました'],
    shad: [['いえで すごしました。', 'Ritmo calmo.'], ['ほんを よみおわりました。', 'Pausa breve prima di よみ.'], ['すこし きが おもいです。', 'Tono basso.']],
    speak: [['Racconta in due frasi come hai passato la domenica.', 'にちようびは いえで すごしました。へやを そうじして、ほんを よみました。'], ['Di’ come ti senti all’idea di tornare al lavoro.', 'あしたから また しごとだと おもうと、すこし きが おもいです。']],
    read: { title: 'Una domenica di pioggia', text: '[今日|きょう]は[日曜日|にちようび]でしたが、[朝|あさ]から[雨|あめ]が[降|ふ]っていたので、[家|いえ]で[過|す]ごしました。[午前中|ごぜんちゅう]は[部屋|へや]を[掃除|そうじ]して、[洗濯|せんたく]もしました。[夕方|ゆうがた]には[雨|あめ]が[止|や]みましたが、[外|そと]に[出|で]る[気|き]にはなれませんでした。[昼|ひる]ごはんの[後|あと]、[友達|ともだち]に[借|か]りた[本|ほん]を[読|よ]み[始|はじ]めましたが、[面白|おもしろ]くて[夜|よる]までに[読|よ]み[終|お]わりました。[明日|あした]からまた[仕事|しごと]だと[思|おも]うと、[少|すこ]し[気|き]が[重|おも]いです。',
      qs: [{ q: 'Perché è rimasto a casa?', o: ['Pioveva fin dal mattino', 'Era malato', 'Doveva lavorare', 'Aveva ospiti'] }, { q: 'Che cosa ha fatto la mattina?', o: ['Pulizie e bucato', 'Ha letto un libro', 'Ha fatto spese', 'Ha guardato la TV'] }, { q: 'Come si sente alla fine?', o: ['Un po’ preoccupato per il lavoro', 'Entusiasta', 'Arrabbiato', 'Molto stanco'], kind: 'implicit' }, { q: 'Che cosa dice del libro?', o: ['Era così interessante che l’ha finito in giornata', 'Era troppo lungo', 'Non gli è piaciuto', 'Lo ha restituito subito'], kind: 'implicit' }] } });

  R({ id: 'jpn-j7-lavoro', prereq: 'jpn-j7-vita-quotidiana', title: 'Lavoro: avvisi interni e telefonate',
    summary: 'Capire date, luoghi, compiti e richieste in un avviso di lavoro e in una telefonata.',
    obj: ['Estrarre data, luogo e compiti da un avviso', 'Riconoscere richieste e scadenze', 'Capire una telefonata tra colleghi'],
    pages: [
      { h: 'Obiettivo', b: 'Gli avvisi di lavoro (お[知|し]らせ) sono brevi, formali e molto strutturati. Imparando il loro schema trovi subito **chi, quando, dove, cosa fare e fino a quando**.' },
      { h: 'Struttura di un avviso', b: '1. Oggetto: {{ja|～について}}\n2. Informazione principale: data, luogo.\n3. Richiesta: {{ja|～してください / ～をお[願|ねが]いします}}\n4. Eccezioni: {{ja|～[場合|ばあい]は…}}\n5. Contatto e scadenza: {{ja|～までに}}\n\nEsempio: {{ja|[来週|らいしゅう]の [会議|かいぎ]に ついて お[知|し]らせします。}}' },
      { h: 'Vocabolario utile', b: '- {{ja|[日時|にちじ]}} data e ora; {{ja|[場所|ばしょ]}} luogo; {{ja|[会議室|かいぎしつ]}} sala riunioni\n- {{ja|[資料|しりょう]}} materiali; {{ja|[事前|じぜん]に}} in anticipo; {{ja|[前日|ぜんじつ]}} giorno prima\n- {{ja|[都合|つごう]が [悪|わる]い}} non essere disponibile; {{ja|[連絡|れんらく]}} contatto\n- {{ja|[目|め]を [通|とお]す}} dare un’occhiata; {{ja|[提出|ていしゅつ]}} consegna' },
      { h: 'Strategia di lettura', b: '- Cerca i numeri (orari, date): sono il cuore dell’avviso.\n- Cerca **までに** (entro) e **から** (da).\n- Trova le richieste: forma て ください e お～ください.\n- Leggi la frase con **[場合|ばあい]は**: è l’eccezione.\n- Controlla chi è il destinatario: {{ja|[皆様|みなさま]}} o {{ja|[担当者|たんとうしゃ]}}.' },
      { h: 'Comprensione implicita', b: '- {{ja|[事前|じぜん]に [目|め]を [通|とお]して おいて ください}} → ci si aspetta che tutti arrivino preparati.\n- {{ja|[都合|つごう]が [悪|わる]い [場合|ばあい]は [連絡|れんらく]して ください}} → la presenza è prevista; l’assenza va giustificata.\n- {{ja|[前日|ぜんじつ]までに}} → i documenti non arriveranno a ridosso della riunione.' },
      { h: 'Ascolto: telefonata tra colleghi', b: 'Nelle telefonate cerca le formule: {{ja|いつも お[世話|せわ]に なって おります}} (apertura), {{ja|[少々|しょうしょう] お[待|ま]ち ください}}, {{ja|[伝言|でんごん]}} (messaggio), {{ja|[折|お]り[返|かえ]し [電話|でんわ]}} (richiamata).\n\nNota nome, ora e richiesta.' },
      { h: 'Esempio guidato', b: 'Frase: {{ja|[資料|しりょう]は [前日|ぜんじつ]までに メールで [送|おく]ります。}}\n- Fatto: i materiali arrivano via e-mail.\n- Scadenza: il giorno prima.\n- Azione richiesta (implicita): leggerli prima.\n\nFrase: {{ja|[都合|つごう]が [悪|わる]い [場合|ばあい]は [金曜日|きんようび]までに [連絡|れんらく]して ください。}}\n- Scadenza assenza: venerdì.' },
      { h: 'Errori e riepilogo', b: '- Confondere までに (entro) con まで (fino a).\n- Non notare [場合|ばあい]は e perdere l’eccezione.\n- Dimenticare chi deve agire.\n- Dare per scontato che «ご[確認|かくにん]ください» sia opzionale: è una richiesta.\n\nRiepilogo: oggetto → informazione → richiesta → eccezione → contatto.' }
    ],
    ex: [
      mc('«[日時|にちじ]» significa…', ['data e ora', 'luogo', 'materiali', 'telefono']),
      mc('「ぜんじつまでに」 vuol dire…', ['entro il giorno prima', 'fino al giorno prima', 'dopo il giorno prima', 'ogni giorno']),
      mc('「めを とおして おいて ください」 chiede di…', ['dare una lettura in anticipo', 'buttare i documenti', 'spedire il file', 'chiamare l’autore']),
      fillJ('Completa: つごうが わるい___は、れんらくして ください。', ['ばあい', '場合'], '[場合|ばあい]は.'),
      fillJ('Completa: しりょうは ぜんじつ___ おくります。(entro)', ['までに'], 'までに = entro.'),
      fillJ('Completa: らいしゅうの かいぎ___ ついて おしらせします。', ['に'], 'N について.'),
      order('Metti in ordine: «La riunione è alle due di martedì»', ['かいぎは', 'かようびの', 'ごご', 'にじからです'], 'Giorno + ora.'),
      order('Metti in ordine: «Se non è possibile, avvisate entro venerdì»', ['むりな', 'ばあいは', 'きんようびまでに', 'れんらくして', 'ください'], '[場合|ばあい]は + までに.'),
      lis('かいぎは かようびの ごご にじからです。', 'Quando è la riunione?', ['Martedì alle 14', 'Mercoledì alle 14', 'Martedì alle 12', 'Giovedì alle 10']),
      mc('Che cosa significa «[伝言|でんごん]»?', ['messaggio da riferire', 'riunione', 'ufficio', 'orario']),
      mc('Dopo «[場合|ばあい]は» di solito c’è…', ['un’eccezione o un’istruzione', 'una data', 'un nome', 'un saluto'])
    ],
    test: [
      mc('«[事前|じぜん]に» significa…', ['in anticipo', 'dopo', 'durante', 'spesso']),
      mc('«[提出|ていしゅつ]» significa…', ['consegna', 'lettura', 'rinvio', 'ricezione']),
      mc('Chi riceve una e-mail con «ご[確認|かくにん]ください»?', ['Il destinatario deve controllare', 'Il mittente deve controllare', 'Nessuno', 'Solo il capo']),
      mc('「いつも おせわに なって おります」 è…', ['una formula di apertura formale', 'un congedo', 'una scusa', 'una domanda']),
      mc('«[都合|つごう]が[悪|わる]い» significa…', ['non essere disponibile', 'avere tempo', 'stare male', 'essere in ritardo']),
      fillJ('Completa: しょうしょう お___ ください。(attendere)', ['まち', '待ち'], 'お待ちください.'),
      lis('たなかは ただいま せきを はずして おります。', 'Che cosa dice la persona?', ['Tanaka non è al suo posto ora', 'Tanaka è malato', 'Tanaka ha lasciato la ditta', 'Tanaka è in riunione domani'])
    ],
    cards: [card('c1', 'data e ora', '[日時|にちじ]', '', 'にちじ'), card('c2', 'sala riunioni', '[会議室|かいぎしつ]', '', 'かいぎしつ'), card('c3', 'materiali', '[資料|しりょう]', '', 'しりょう'), card('c4', 'in anticipo', '[事前|じぜん]に', '', 'じぜんに'), card('c5', 'non essere disponibile', '[都合|つごう]が[悪|わる]い', '', 'つごうがわるい'), card('c6', 'dare un’occhiata', '[目|め]を[通|とお]す', '', 'めをとおす'), card('c7', 'consegna', '[提出|ていしゅつ]', '', 'ていしゅつ'), card('c8', 'messaggio', '[伝言|でんごん]', '', 'でんごん')],
    lis: { title: 'Telefonata in ufficio', text: 'もしもし、さとうです。いつも おせわに なって おります。たなかさんは いらっしゃいますか。たなかは ただいま かいぎに でて おります。もうしわけ ございません。では、らいしゅうの かいぎの しりょうを ぜんじつまでに おくって ください、と おつたえ ください。かしこまりました。',
      qs: [{ q: 'Chi è assente?', o: ['Tanaka, in riunione', 'Sato, in viaggio', 'Il capo, malato', 'Nessuno'] }, { q: 'Che cosa viene chiesto di riferire?', o: ['Inviare i materiali entro il giorno prima', 'Spostare la riunione', 'Richiamare più tardi', 'Cancellare tutto'] }, { q: 'Che tono hanno le persone?', o: ['Formale e cortese', 'Amichevole', 'Arrabbiato', 'Scherzoso'], kind: 'implicit' }] },
    dict: ['かいぎの しりょうを おくって ください', 'らいしゅうの かいぎに ついて', 'つごうが わるい ばあいは れんらくして ください'],
    shad: [['いつも おせわに なって おります。', 'Formula: ritmo calmo.'], ['しょうしょう おまち ください。', 'Tono di servizio.'], ['ぜんじつまでに おくります。', 'までに: ma-de-ni.']],
    speak: [['Spiega che il collega è in riunione e chiedi di lasciare un messaggio.', 'ただいま かいぎに でて おります。でんごんを おうかがいします。'], ['Chiedi di inviare i materiali entro il giorno prima.', 'しりょうは ぜんじつまでに おくって ください。']],
    read: { title: 'Avviso: riunione della prossima settimana', text: '[来週|らいしゅう]の[会議|かいぎ]について、お[知|し]らせします。[日時|にちじ]は[火曜日|かようび]の[午後|ごご][二|に][時|じ]から、[場所|ばしょ]は[三階|さんがい]の[会議室|かいぎしつ]です。[資料|しりょう]は[前日|ぜんじつ]までにメールで[送|おく]りますので、[事前|じぜん]に[目|め]を[通|とお]しておいてください。[都合|つごう]が[悪|わる]い[場合|ばあい]は、[今週|こんしゅう]の[金曜日|きんようび]までに[私|わたし]に[連絡|れんらく]してください。お[忙|いそが]しいと[思|おも]いますが、[皆様|みなさま]のご[参加|さんか]をお[願|ねが]いします。',
      qs: [{ q: 'Quando è la riunione?', o: ['Martedì alle 14', 'Mercoledì alle 14', 'Martedì alle 10', 'Venerdì alle 14'] }, { q: 'Dove si tiene?', o: ['In una sala al terzo piano', 'Al secondo piano', 'In una sala all’esterno', 'Online'] }, { q: 'Che cosa devono fare i partecipanti prima della riunione?', o: ['Leggere i materiali', 'Preparare un discorso', 'Prenotare la sala', 'Pagare una quota'], kind: 'implicit' }, { q: 'Chi non può partecipare deve…', o: ['Avvisare entro venerdì', 'Non dire nulla', 'Venire comunque', 'Chiamare il giorno stesso'] }] } });

  R({ id: 'jpn-j7-viaggi', prereq: 'jpn-j7-lavoro', title: 'Viaggi: itinerari, treni e hotel',
    summary: 'Capire programmi di viaggio, orari e avvisi di hotel e stazione.',
    obj: ['Seguire un itinerario giorno per giorno', 'Capire piani alternativi e condizioni', 'Ascoltare annunci di stazione e hotel'],
    pages: [
      { h: 'Obiettivo', b: 'In viaggio incontri **itinerari scritti**, **annunci** e **messaggi** dell’hotel. Qui impari lessico e strutture per capire **che cosa fai quando, dove e con quali alternative**.' },
      { h: 'Struttura di un itinerario', b: '- Durata: {{ja|[二泊三日|にはくみっか]}} (due notti, tre giorni)\n- Giorni: {{ja|[一日目|いちにちめ]}}, {{ja|[二日目|ふつかめ]}}, {{ja|[三日目|みっかめ]}}\n- Mezzo: {{ja|～で [行|い]く}}\n- Attività: {{ja|[見学|けんがく]}}, {{ja|[散歩|さんぽ]}}, {{ja|[買|か]い[物|もの]}}\n- Condizione: {{ja|[天気|てんき]が [悪|わる]い [場合|ばあい]は…}}' },
      { h: 'Vocabolario utile', b: '- {{ja|[新幹線|しんかんせん]}}, {{ja|[乗|の]り[換|か]え}} (cambio treno), {{ja|[出発|しゅっぱつ]}}, {{ja|[到着|とうちゃく]}}\n- {{ja|[予定|よてい]}} programma; {{ja|[夕方|ゆうがた]}} tardo pomeriggio\n- {{ja|[見学|けんがく]}} visita; {{ja|[お寺|おてら]}} tempio\n- Hotel: {{ja|チェックイン}}, {{ja|[朝食|ちょうしょく]}}, {{ja|[荷物|にもつ]を [預|あず]ける}}' },
      { h: 'Strategia di lettura', b: '1. Conta i giorni e segna ogni giorno.\n2. Per ogni giorno cerca **mezzo → luogo → azione**.\n3. Nota i connettivi di tempo: {{ja|～てから}}, {{ja|～[後|あと]で}}.\n4. Individua le condizioni: {{ja|[場合|ばあい]は…}} e {{ja|～かもしれません}}.\n5. Controlla cosa è certo ([予定|よてい]です) e cosa è possibile (かもしれません).' },
      { h: 'Comprensione implicita', b: '- {{ja|[天気|てんき]が [悪|わる]い [場合|ばあい]は…[変|か]える かもしれません}} → il programma non è rigido.\n- {{ja|[夕方|ゆうがた]の[新幹線|しんかんせん]}} → rientrano di sera, non c’è pernottamento il terzo giorno.\n- {{ja|[買|か]い[物|もの]を して から}} → l’ultima attività è lo shopping.' },
      { h: 'Ascolto: annunci', b: 'Annunci tipici: {{ja|まもなく ～に まいります}} (arriva a breve), {{ja|～[番線|ばんせん]}} (binario), {{ja|[黄色|きいろ]い [線|せん]の [内側|うちがわ]に お[下|さ]がり ください}}.\n\nFocus: **numero del binario**, **destinazione**, **ritardi** ({{ja|おくれて おります}}).' },
      { h: 'Esempio guidato', b: 'Frase: {{ja|[二日目|ふつかめ]は [朝|あさ]から [電車|でんしゃ]で [奈良|なら]へ [行|い]きます。}}\n- Quando: secondo giorno.\n- Come: treno.\n- Dove: Nara.\n\nFrase: {{ja|[天気|てんき]が [悪|わる]い [場合|ばあい]は、[予定|よてい]を [変|か]えるかもしれません。}}\n- Condizione: brutto tempo.\n- Conseguenza: possibile cambio di programma.' },
      { h: 'Errori e riepilogo', b: '- Confondere [二泊三日|にはくみっか] con tre notti.\n- Scambiare [二日目|ふつかめ] (secondo giorno) con due giorni.\n- Ignorare かもしれません e trattare tutto come certo.\n- Non notare quale giorno è collegato a quale luogo.\n\nRiepilogo: giorni → mezzi → luoghi → attività → condizioni.' }
    ],
    ex: [
      mc('«[二泊三日|にはくみっか]» significa…', ['due notti, tre giorni', 'tre notti, due giorni', 'due giorni', 'tre notti']),
      mc('«[夕方|ゆうがた]» è…', ['il tardo pomeriggio', 'la mattina', 'la notte', 'il mezzogiorno']),
      mc('«まもなく ～に まいります» significa…', ['sta per arrivare a…', 'è partito', 'è in ritardo', 'non fermerà']),
      fillJ('Completa: ふつかめは ___ の さんぽを します。(parco)', ['こうえん'], '公園.'),
      fillJ('Completa: かいものを し___ から かえります。', ['て'], 'て から.'),
      fillJ('Completa: てんきが わるい ばあいは よてい___ かえる かもしれません。', ['を'], 'を かえる.'),
      order('Metti in ordine: «Il primo giorno vado a Kyoto in Shinkansen»', ['いちにちめは', 'しんかんせんで', 'きょうとへ', 'いきます'], 'Mezzo + で.'),
      order('Metti in ordine: «Torno con il Shinkansen della sera»', ['ゆうがたの', 'しんかんせんで', 'かえります'], 'Mezzo + で.'),
      lis('まもなく ごばんせんに でんしゃが まいります。', 'Che cosa viene annunciato?', ['Il treno arriva al binario 5 a breve', 'Il treno è partito', 'Il treno è in ritardo di 5 minuti', 'Il binario è chiuso']),
      mc('Che cosa indica «かもしれません»?', ['una possibilità', 'un dovere', 'un divieto', 'un fatto certo']),
      mc('Quale elemento è certo in un itinerario?', ['～[予定|よてい]です', '～かもしれません', '～でしょう', '～ようです'])
    ],
    test: [
      mc('«[出発|しゅっぱつ]» significa…', ['partenza', 'arrivo', 'cambio', 'attesa']),
      mc('«[到着|とうちゃく]» significa…', ['arrivo', 'partenza', 'cambio', 'attesa']),
      mc('«[三日目|みっかめ]» è…', ['il terzo giorno', 'tre giorni', 'tre volte', 'il giorno tre']),
      mc('«[荷物|にもつ]を[預|あず]ける» significa…', ['lasciare i bagagli in deposito', 'ritirare i bagagli', 'perdere i bagagli', 'aprire i bagagli']),
      mc('「ゆうがたの しんかんせん」 → Che cosa si deduce?', ['Rientrano di sera', 'Partono la mattina', 'Restano una notte', 'Non rientrano']),
      fillJ('Completa: ___ の じかんは ごじです。(arrivo)', ['とうちゃく', '到着'], '[到着|とうちゃく].'),
      lis('チェックインは さんじからです。にもつは さきに あずかります。', 'Che cosa viene offerto?', ['Deposito bagagli prima del check-in', 'Camera subito', 'Colazione gratuita', 'Taxi'])
    ],
    cards: [card('c1', 'due notti, tre giorni', '[二泊三日|にはくみっか]', '', 'にはくみっか'), card('c2', 'treno ad alta velocità', '[新幹線|しんかんせん]', '', 'しんかんせん'), card('c3', 'cambio treno', '[乗|の]り[換|か]え', '', 'のりかえ'), card('c4', 'partenza', '[出発|しゅっぱつ]', '', 'しゅっぱつ'), card('c5', 'arrivo', '[到着|とうちゃく]', '', 'とうちゃく'), card('c6', 'tardo pomeriggio', '[夕方|ゆうがた]', '', 'ゆうがた'), card('c7', 'visita', '[見学|けんがく]', '', 'けんがく'), card('c8', 'deposito (lasciare)', '[預|あず]ける', '', 'あずける')],
    lis: { title: 'Annuncio in stazione', text: 'ごあんない いたします。きょうとゆきの しんかんせんは、ごばんせんから はっしゃいたします。ゆきの ために、ごふんほど おくれて おります。おのりかえの おきゃくさまは、じゅうごばんせんへ おすすみ ください。きいろい せんの うちがわに おさがり ください。',
      qs: [{ q: 'Da quale binario parte il treno per Kyoto?', o: ['Binario 5', 'Binario 15', 'Binario 1', 'Binario 10'] }, { q: 'Perché c’è ritardo?', o: ['A causa della neve', 'A causa di un guasto', 'Per un incidente', 'Per sciopero'] }, { q: 'Chi deve andare al binario 15?', o: ['Chi deve cambiare treno', 'Chi va a Osaka', 'Chi ha un biglietto cumulativo', 'Tutti'], kind: 'implicit' }] },
    dict: ['しんかんせんで きょうとへ いきます', 'ゆうがたの しんかんせんで かえります', 'ごばんせんから はっしゃします'],
    shad: [['まもなく でんしゃが まいります。', 'Tono di annuncio, calmo.'], ['おのりかえの おきゃくさま。', 'Pausa dopo おのりかえの.'], ['ごばんせんから はっしゃします。', 'ごばんせん: go-ban-sen.']],
    speak: [['Descrivi il tuo itinerario del primo giorno a Kyoto.', 'いちにちめは しんかんせんで きょうとへ いって、おてらを けんがくします。'], ['Chiedi a che ora è il check-in.', 'チェックインは なんじからですか。']],
    read: { title: 'Un viaggio a Kyoto', text: '[京都|きょうと]への[旅行|りょこう]は[二泊三日|にはくみっか]の[予定|よてい]です。[一日目|いちにちめ]は[新幹線|しんかんせん]で[京都|きょうと]へ[行|い]き、お[寺|てら]を[見学|けんがく]します。[二日目|ふつかめ]は[朝|あさ]から[電車|でんしゃ]で[奈良|なら]へ[行|い]って、[公園|こうえん]を[散歩|さんぽ]する[予定|よてい]です。[三日目|みっかめ]は[買|か]い[物|もの]をしてから、[夕方|ゆうがた]の[新幹線|しんかんせん]で[帰|かえ]ります。[天気|てんき]が[悪|わる]い[場合|ばあい]は、[二日目|ふつかめ]の[予定|よてい]を[変|か]えるかもしれません。',
      qs: [{ q: 'Quante notti dura il viaggio?', o: ['Due', 'Tre', 'Una', 'Quattro'] }, { q: 'Dove andrà il secondo giorno?', o: ['A Nara', 'A Osaka', 'A Tokyo', 'A Kobe'] }, { q: 'Che cosa farà l’ultimo giorno prima di partire?', o: ['Farà acquisti', 'Visiterà un tempio', 'Camminerà nel parco', 'Dormirà'], kind: 'implicit' }, { q: 'Che cosa succede se il tempo è brutto?', o: ['Il programma del secondo giorno potrebbe cambiare', 'Il viaggio è annullato', 'Restano in hotel tutto il tempo', 'Tornano il primo giorno'] }] } });

  R({ id: 'jpn-j7-notizie', prereq: 'jpn-j7-viaggi', title: 'Notizie semplici: fatti, numeri e conseguenze',
    summary: 'Leggere e ascoltare notizie brevi: chi, cosa, quando, dove, quanto e cosa succederà.',
    obj: ['Estrarre i fatti principali di una notizia', 'Distinguere fatti, cifre e previsioni', 'Ascoltare un breve notiziario'],
    pages: [
      { h: 'Obiettivo', b: 'Le notizie semplici (come i testi di NHK Easy, ma più lunghi) seguono sempre lo stesso ordine: **fatto → dettagli → conseguenze → previsione**. Imparando lo schema capisci anche articoli con parole nuove.' },
      { h: 'Struttura di una notizia', b: '1. **Quando e dove**: {{ja|[昨日|きのう]、[北海道|ほっかいどう]で…}}\n2. **Che cosa è successo**: {{ja|[大|おお]きな [雪|ゆき]が [降|ふ]りました。}}\n3. **Dati**: {{ja|[約|やく][一万人|いちまんにん]が [困|こま]りました。}}\n4. **Misure**: {{ja|[市|し]は [学校|がっこう]を [休|やす]みに しました。}}\n5. **Previsione**: {{ja|[明日|あした]も [雪|ゆき]が [続|つづ]く [見込|みこ]みです。}}' },
      { h: 'Vocabolario utile', b: '- {{ja|[交通|こうつう]}} traffico; {{ja|[飛行機|ひこうき]}} aereo; {{ja|[止|と]まる}} fermarsi\n- {{ja|[約|やく]}} circa; {{ja|[人|ひと]}} persone; {{ja|[困|こま]る}} avere problemi\n- {{ja|[市民|しみん]}} cittadini; {{ja|[注意|ちゅうい]}} attenzione\n- {{ja|[見込|みこ]み}} previsione; {{ja|[続|つづ]く}} continuare\n- Espressioni: {{ja|～によると}} (secondo), {{ja|～そうです}} (si dice)' },
      { h: 'Strategia di lettura', b: '- Prima riga: trova **chi/dove/quando**.\n- Cerca i **numeri** ([約|やく], 〜人, 〜%): sono i dati.\n- Distingui **fatto** (です・ました) da **previsione** ([見込|みこ]み, [予定|よてい]).\n- Cerca le fonti: {{ja|～に よると}}.\n- Se un termine è difficile, usa il contesto: spesso si ripete.' },
      { h: 'Comprensione implicita', b: '- {{ja|[電車|でんしゃ]や [飛行機|ひこうき]が [止|と]まり}} → molte persone non hanno potuto spostarsi.\n- {{ja|[外|そと]に[出|で]ないように[注意|ちゅうい]しています}} → la situazione è pericolosa.\n- {{ja|[明日|あした]も [雪|ゆき]が [続|つづ]く [見込|みこ]み}} → i problemi potrebbero continuare.' },
      { h: 'Ascolto: notiziario', b: 'Nel notiziario ascolta le **parole chiave**: luogo, evento, numero. Le frasi sono brevi e il tono è piano.\n\nFormule: {{ja|ニュースを お[伝|つた]え します}}, {{ja|～と [発表|はっぴょう]しました}}, {{ja|～と [見|み]られて います}} (si ritiene).' },
      { h: 'Esempio guidato', b: 'Frase: {{ja|[市|し]は [市民|しみん]に [注意|ちゅうい]して います。}}\n- Chi: la città.\n- Che cosa: avverte i cittadini.\n- Implicito: c’è un pericolo.\n\nFrase: {{ja|[約|やく][一万人|いちまんにん]の [人|ひと]が [困|こま]りました。}}\n- Dato: circa 10.000 persone.\n- Conseguenza: disagio.' },
      { h: 'Errori e riepilogo', b: '- Prendere una previsione per un fatto.\n- Ignorare [約|やく] (circa) e dare il numero come esatto.\n- Non distinguere ～そうです (si dice) da ～そうです (sembra).\n- Fermarsi a una parola nuova e perdere il senso.\n\nRiepilogo: fatto → dati → misure → previsione; cerca fonte e numero.' }
    ],
    ex: [
      mc('«[約|やく]» significa…', ['circa', 'tutto', 'poco', 'esattamente']),
      mc('«[見込|みこ]み» indica…', ['previsione', 'fatto passato', 'ordine', 'domanda']),
      mc('«[市民|しみん]» significa…', ['cittadini', 'sindaco', 'turisti', 'studenti']),
      fillJ('Completa: ニュース___ よると、あめが ふる そうです。', ['に'], 'N に よると.'),
      fillJ('Completa: やく いちまんにんが こま___ ました。', ['り'], '困りました.'),
      fillJ('Completa: あしたも ゆきが つづく みこみ___ す。', ['で'], 'みこみです.'),
      order('Metti in ordine: «Ieri in Hokkaido è caduta molta neve»', ['きのう', 'ほっかいどうで', 'おおきな', 'ゆきが', 'ふりました'], 'Tempo + luogo + fatto.'),
      order('Metti in ordine: «La città ha chiuso le scuole»', ['しは', 'がっこうを', 'やすみに', 'しました'], 'N を N に する.'),
      lis('あしたも ゆきが つづく みこみです。', 'Che cosa è previsto?', ['Altra neve domani', 'Sole domani', 'Pioggia', 'Vento forte']),
      mc('Quale parte della notizia è una previsione?', ['あしたも ゆきが つづく みこみです。', 'きのう ゆきが ふりました。', 'でんしゃが とまりました。', 'しは がっこうを やすみに しました。']),
      mc('«によると» introduce…', ['la fonte dell’informazione', 'una domanda', 'un desiderio', 'un ordine'])
    ],
    test: [
      mc('«[交通|こうつう]» significa…', ['traffico', 'aeroporto', 'incidente', 'viaggio']),
      mc('«[止|と]まる» significa…', ['fermarsi', 'partire', 'arrivare', 'cadere']),
      mc('«[注意|ちゅうい]» significa…', ['attenzione', 'dimenticanza', 'ritardo', 'rumore']),
      mc('「やくいちまんにん」 vuol dire…', ['circa diecimila persone', 'esattamente diecimila', 'meno di diecimila', 'circa mille']),
      mc('In una notizia, «[見込|みこ]み» di solito si trova…', ['alla fine, come previsione', 'all’inizio, come data', 'in mezzo, come domanda', 'mai']),
      fillJ('Completa: しみんに ちゅうい___ います。(avvertire)', ['して'], '[注意|ちゅうい]して います.'),
      lis('ゆきの ために ひこうきが とまりました。', 'Che cosa è successo?', ['Gli aerei si sono fermati per la neve', 'Gli aerei sono partiti presto', 'La neve è finita', 'L’aeroporto ha aperto'])
    ],
    cards: [card('c1', 'traffico', '[交通|こうつう]', '', 'こうつう'), card('c2', 'aereo', '[飛行機|ひこうき]', '', 'ひこうき'), card('c3', 'fermarsi', '[止|と]まる', '', 'とまる'), card('c4', 'cittadini', '[市民|しみん]', '', 'しみん'), card('c5', 'attenzione', '[注意|ちゅうい]', '', 'ちゅうい'), card('c6', 'previsione', '[見込|みこ]み', '', 'みこみ'), card('c7', 'avere problemi', '[困|こま]る', '', 'こまる'), card('c8', 'annunciare', '[発表|はっぴょう]する', '', 'はっぴょうする')],
    lis: { title: 'Notiziario', text: 'ニュースを おつたえ します。ほっかいどうで おおきな ゆきが ふりました。でんしゃや ひこうきが とまり、やく いちまんにんが こまりました。しは がっこうを やすみに して、しみんに ちゅういして います。あしたも ゆきが つづく みこみです。',
      qs: [{ q: 'Dove ha nevicato?', o: ['In Hokkaido', 'A Tokyo', 'A Kyoto', 'A Osaka'] }, { q: 'Quante persone hanno avuto problemi?', o: ['Circa diecimila', 'Circa mille', 'Circa cento', 'Circa centomila'] }, { q: 'Che cosa si prevede domani?', o: ['Altra neve', 'Sole', 'Pioggia', 'Vento'], kind: 'implicit' }] },
    dict: ['ほっかいどうで ゆきが ふりました', 'でんしゃが とまりました', 'しは しみんに ちゅういして います'],
    shad: [['ニュースを おつたえ します。', 'Tono da notiziario.'], ['やく いちまんにんが こまりました。', 'いちまんにん: i-chi-ma-n-ni-n.'], ['あしたも ゆきが つづく みこみです。', 'Frase finale: discendente.']],
    speak: [['Riassumi una notizia di neve in una frase.', 'ほっかいどうで おおきな ゆきが ふって、でんしゃが とまりました。'], ['Di’ quale è la previsione per domani.', 'あしたも ゆきが つづく みこみです。']],
    read: { title: 'Neve in Hokkaido', text: '[昨日|きのう]、[北海道|ほっかいどう]で[大|おお]きな[雪|ゆき]が[降|ふ]りました。[電車|でんしゃ]や[飛行機|ひこうき]が[止|と]まり、[約|やく][一万人|いちまんにん]の[人|ひと]が[困|こま]りました。[空港|くうこう]では[多|おお]くの[便|びん]が[欠航|けっこう]になり、[駅|えき]には[電車|でんしゃ]を[待|ま]つ[人|ひと]があふれました。[気温|きおん]も[下|さ]がり、[道路|どうろ]が[凍|こお]るおそれがあります。[市|し]は[学校|がっこう]を[休|やす]みにして、[市民|しみん]に[注意|ちゅうい]しています。[明日|あした]も[雪|ゆき]が[続|つづ]く[見込|みこ]みです。',
      qs: [{ q: 'Che cosa è successo ai mezzi di trasporto?', o: ['Si sono fermati', 'Sono stati gratuiti', 'Hanno fatto più corse', 'Sono stati cambiati'] }, { q: 'Che cosa ha deciso la città per le scuole?', o: ['Di chiuderle', 'Di aprirle', 'Di spostarle', 'Nulla'] }, { q: 'Perché la città invita i cittadini alla prudenza?', o: ['Per la neve e i possibili disagi', 'Per un terremoto', 'Per una festa', 'Per le elezioni'], kind: 'implicit' }, { q: 'Come sarà il giorno dopo?', o: ['Altra neve', 'Più caldo', 'Sereno', 'Piogge forti'], kind: 'implicit' }] } });

  R({ id: 'jpn-j7-email', prereq: 'jpn-j7-notizie', title: 'E-mail e messaggi: ringraziare, invitare, scusarsi',
    summary: 'Capire e rispondere a e-mail amichevoli e semiformali con intenzioni implicite.',
    obj: ['Riconoscere struttura e registro di un’e-mail', 'Capire inviti e rifiuti indiretti', 'Ascoltare un messaggio vocale'],
    pages: [
      { h: 'Obiettivo', b: 'Le e-mail giapponesi hanno **saluto, motivo, richiesta/invito e chiusura**. Anche tra amici o colleghi di una certa confidenza si usa un linguaggio cortese. Capire il **registro** aiuta a capire ciò che non è detto.' },
      { h: 'Struttura di una e-mail', b: '1. Destinatario: {{ja|[田中|たなか]さん}}\n2. Saluto: {{ja|お[元気|げんき]ですか。}}\n3. Ringraziamento / motivo: {{ja|～ありがとうございました。}}\n4. Invito o richiesta: {{ja|～したいのですが、ご[都合|つごう]は いかがでしょうか。}}\n5. Chiusura: {{ja|ご[連絡|れんらく]を お[待|ま]ちして います。}}' },
      { h: 'Vocabolario utile', b: '- {{ja|[手伝|てつだ]う}} aiutare; {{ja|[引|ひ]っ[越|こ]し}} trasloco; {{ja|[無事|ぶじ]に}} senza problemi\n- {{ja|お[礼|れい]}} ringraziamento; {{ja|[夕食|ゆうしょく]}} cena; {{ja|[今度|こんど]}} la prossima volta\n- {{ja|ご[都合|つごう]}} disponibilità; {{ja|[無理|むり]}} impossibile; {{ja|[別|べつ]の [日|ひ]}} un altro giorno\n- {{ja|ごちそうする}} offrire un pasto' },
      { h: 'Strategia di lettura', b: '- Chi scrive a chi? (rapporto)\n- Qual è lo **scopo** (ringraziare, invitare, scusarsi)?\n- Qual è la **richiesta concreta**?\n- C’è una **scadenza** o una proposta alternativa?\n- Come si chiude? (tono)' },
      { h: 'Comprensione implicita', b: '- {{ja|[無理|むり]でしたら、[別|べつ]の [日|ひ]でも [大丈夫|だいじょうぶ]です}} → chi scrive lascia libertà all’altro, è gentile.\n- {{ja|お[忙|いそが]しい ところ}} → ringrazia per il tempo dedicato.\n- {{ja|おかげで}} → riconosce il merito dell’altro.\n\nNei messaggi cortesi il rifiuto è spesso **indiretto**: «[今回|こんかい]は[難|むずか]しいです».' },
      { h: 'Ascolto: messaggio vocale', b: 'Nei messaggi in segreteria ascolta: **nome**, **motivo**, **richiesta**, **numero** o **ora** per richiamare. Frasi tipiche: {{ja|また [電話|でんわ]します}}, {{ja|[折|お]り[返|かえ]し お[電話|でんわ] いただけますか}}.' },
      { h: 'Esempio guidato', b: 'Frase: {{ja|お[礼|れい]に、[今度|こんど]の [土曜日|どようび]、[夕食|ゆうしょく]を ごちそうしたいのですが…}}\n- Scopo: ringraziare con una cena.\n- Tempo: sabato prossimo.\n- Richiesta implicita: «sei libero?»\n\nFrase: {{ja|[無理|むり]でしたら、[別|べつ]の [日|ひ]でも [大丈夫|だいじょうぶ]です。}}\n- Gentilezza: lascia aperta un’altra data.' },
      { h: 'Errori e riepilogo', b: '- Prendere «お[礼|れい]に» come un pagamento: è un gesto di gratitudine.\n- Leggere «ご[都合|つごう]はいかがでしょうか» come una domanda sul lavoro: è «sei disponibile?».\n- Non notare le opzioni alternative.\n- Rispondere troppo direttamente.\n\nRiepilogo: saluto → motivo → invito → alternative → chiusura.' }
    ],
    ex: [
      mc('«[引|ひ]っ[越|こ]し» significa…', ['trasloco', 'viaggio', 'vacanza', 'compleanno']),
      mc('«ご[都合|つごう]はいかがでしょうか» chiede…', ['se l’altro è disponibile', 'dove sei', 'quanto costa', 'chi è']),
      mc('«お[礼|れい]に» significa…', ['per ringraziare', 'per vendetta', 'per caso', 'per fretta']),
      fillJ('Completa: あなたの おかげ___ ひっこしが おわりました。', ['で'], 'おかげで.'),
      fillJ('Completa: むりでしたら、べつの ひ___ だいじょうぶです。', ['でも'], 'N でも.'),
      fillJ('Completa: ごれんらくを おまち___ います。', ['して'], 'お待ちしています.'),
      order('Metti in ordine: «La cena la offro io, sabato»', ['どようび', 'ゆうしょくを', 'ごちそうしたい', 'のですが'], 'V-たいのですが.'),
      order('Metti in ordine: «Il trasloco è finito senza problemi»', ['ひっこしが', 'ぶじに', 'おわりました'], 'ぶじに.'),
      lis('こんどの どようび、ゆうしょくを ごちそうしたいのですが。', 'Che cosa propone?', ['Una cena sabato', 'Una gita', 'Un caffè domani', 'Una telefonata']),
      mc('「むりでしたら、べつの ひでも だいじょうぶです」 mostra…', ['gentilezza e flessibilità', 'rabbia', 'fretta', 'indifferenza']),
      mc('Qual è la chiusura tipica di una e-mail cortese?', ['ごれんらくを おまちして います。', 'じゃあね。', 'さっさと して。', 'まあ いいか。'])
    ],
    test: [
      mc('«[夕食|ゆうしょく]» significa…', ['cena', 'pranzo', 'colazione', 'spuntino']),
      mc('«[無事|ぶじ]に» significa…', ['senza problemi', 'con difficoltà', 'presto', 'tardi']),
      mc('«[今度|こんど]» significa…', ['la prossima volta', 'ieri', 'mai', 'sempre']),
      mc('Che cosa vuol dire «お[忙|いそが]しいところ»?', ['«mentre è occupato (grazie per il tempo)»', '«lei non è occupato»', '«torni più tardi»', '«mi dispiace»']),
      mc('Quale è un rifiuto indiretto?', ['こんかいは ちょっと むずかしいです。', 'いきません。', 'いやです。', 'だめです。']),
      fillJ('Completa: こんどの どようび___ ごつごうは いかがですか。', ['の'], 'N の ご[都合|つごう].'),
      lis('おりかえし おでんわ いただけますか。', 'Che cosa viene chiesto?', ['Di richiamare', 'Di aspettare', 'Di mandare una e-mail', 'Di venire a trovare'])
    ],
    cards: [card('c1', 'trasloco', '[引|ひ]っ[越|こ]し', '', 'ひっこし'), card('c2', 'senza problemi', '[無事|ぶじ]に', '', 'ぶじに'), card('c3', 'ringraziamento', 'お[礼|れい]', '', 'おれい'), card('c4', 'cena', '[夕食|ゆうしょく]', '', 'ゆうしょく'), card('c5', 'disponibilità', 'ご[都合|つごう]', '', 'ごつごう'), card('c6', 'la prossima volta', '[今度|こんど]', '', 'こんど'), card('c7', 'offrire un pasto', 'ごちそうする', '', 'ごちそうする'), card('c8', 'impossibile', '[無理|むり]', '', 'むり')],
    lis: { title: 'Messaggio in segreteria', text: 'もしもし、たなかです。せんしゅうは てつだって いただいて、ありがとうございました。おかげで ひっこしが ぶじに おわりました。おれいに、こんどの どようび、ゆうしょくを ごちそうしたいのですが、ごつごうは いかがですか。おりかえし おでんわ いただけますか。',
      qs: [{ q: 'Perché Tanaka chiama?', o: ['Per ringraziare e invitare a cena', 'Per chiedere aiuto', 'Per disdire', 'Per vendere qualcosa'] }, { q: 'Quando propone la cena?', o: ['Sabato prossimo', 'Domani', 'Lunedì', 'Domenica scorsa'] }, { q: 'Che cosa si aspetta?', o: ['Che l’altro richiami', 'Che l’altro scriva una lettera', 'Che l’altro vada da lui', 'Nulla'], kind: 'implicit' }] },
    dict: ['てつだって いただいて ありがとうございました', 'こんどの どようび ゆうしょくを ごちそうします', 'ごれんらくを おまちして います'],
    shad: [['ありがとうございました。', 'Chiaro e cordiale.'], ['ごちそうしたいのですが。', 'Lascia la frase in sospeso.'], ['おでんわ いただけますか。', 'Intonazione ascendente.']],
    speak: [['Ringrazia un amico che ti ha aiutato con il trasloco.', 'せんしゅうは てつだって いただいて、ありがとうございました。'], ['Proponi una cena per sabato.', 'こんどの どようび、ゆうしょくを ごいっしょに いかがですか。']],
    read: { title: 'Un’e-mail di ringraziamento', text: '[田中|たなか]さん、お[元気|げんき]ですか。[先週|せんしゅう]はお[忙|いそが]しいところ、[手伝|てつだ]っていただいて、ありがとうございました。おかげで[引|ひ]っ[越|こ]しが[無事|ぶじ]に[終|お]わりました。お[礼|れい]に、[今度|こんど]の[土曜日|どようび]、[夕食|ゆうしょく]をごちそうしたいのですが、ご[都合|つごう]はいかがでしょうか。[無理|むり]でしたら、[別|べつ]の[日|ひ]でも[大丈夫|だいじょうぶ]です。ご[連絡|れんらく]をお[待|ま]ちしています。',
      qs: [{ q: 'Perché scrive?', o: ['Per ringraziare e invitare a cena', 'Per annullare una cena', 'Per chiedere denaro', 'Per cercare casa'] }, { q: 'Che cosa è finito senza problemi?', o: ['Il trasloco', 'Il lavoro', 'Il viaggio', 'L’esame'] }, { q: 'Che cosa si può dedurre sull’atteggiamento di chi scrive?', o: ['È riconoscente e gentile', 'È arrabbiato', 'Ha fretta', 'È indifferente'], kind: 'implicit' }, { q: 'Se il sabato non va bene…', o: ['Si può scegliere un altro giorno', 'La cena è annullata', 'Si paga comunque', 'Si va il giorno stesso'] }] } });

  R({ id: 'jpn-j7-annunci', prereq: 'jpn-j7-email', title: 'Annunci e avvisi pubblici: negozi, stazioni, condomini',
    summary: 'Leggere e ascoltare avvisi di chiusura, cambi di orario e regole con formule di cortesia.',
    obj: ['Capire avvisi di chiusura e cambi di servizio', 'Riconoscere la formula «scusate il disagio»', 'Ascoltare annunci nei negozi e in stazione'],
    pages: [
      { h: 'Obiettivo', b: 'Negozi, stazioni e condomini comunicano con **avvisi brevi e molto formali**. Hanno una struttura rigida: **motivo → cambiamento → periodo → alternativa → scusa**. Capirli ti evita sorprese pratiche.' },
      { h: 'Struttura di un avviso', b: '1. Motivo: {{ja|[改装|かいそう]の ため}}\n2. Cambiamento: {{ja|[食品|しょくひん]コーナーは お[休|やす]み します。}}\n3. Periodo: {{ja|[来月|らいげつ][一日|ついたち]から[十日|とおか]まで}}\n4. Alternativa: {{ja|[地下|ちか][一階|いっかい]で [販売|はんばい]いたします。}}\n5. Scusa: {{ja|ご[不便|ふべん]を おかけ しますが、ご[理解|りかい]を お[願|ねが]い いたします。}}' },
      { h: 'Vocabolario utile', b: '- {{ja|[改装|かいそう]}} lavori di ristrutturazione; {{ja|[食品|しょくひん]}} alimenti; {{ja|[売|う]り[場|ば]}} reparto\n- {{ja|[販売|はんばい]}} vendita; {{ja|[地下|ちか]}} piano interrato; {{ja|[営業|えいぎょう]}} apertura al pubblico\n- {{ja|[不便|ふべん]}} disagio; {{ja|[理解|りかい]}} comprensione\n- {{ja|[皆様|みなさま]}} tutti (gentile); {{ja|お[待|ま]ち して おります}}' },
      { h: 'Strategia di lettura', b: '- Trova il **periodo** (da… a…) e il **cambiamento**.\n- Controlla **chi** è colpito (i clienti? i residenti?).\n- Cerca l’**alternativa**: dove andare nel frattempo.\n- Ricorda che 「お[休|やす]みします」 = «saremo chiusi».\n- Le ultime frasi sono quasi sempre una scusa formale.' },
      { h: 'Comprensione implicita', b: '- {{ja|その [間|あいだ]、[食品|しょくひん]は [地下|ちか][一階|いっかい]で…}} → il servizio non si interrompe del tutto.\n- {{ja|[十一日|じゅういちにち]から [新|あたら]しい [売|う]り[場|ば]}} → i lavori finiscono il 10.\n- {{ja|ご[理解|りかい]を お[願|ねが]い}} → ci si aspetta che i clienti accettino il disagio.' },
      { h: 'Ascolto: annunci vocali', b: 'In un negozio o in un treno ascolta: **orario di chiusura** ({{ja|[閉店|へいてん]}}), **ritardi**, **oggetti smarriti** ({{ja|お[忘|わす]れ[物|もの]}}).\n\nEsempio: {{ja|まもなく [閉店|へいてん]の [時間|じかん]です。}}' },
      { h: 'Esempio guidato', b: 'Frase: {{ja|[来月|らいげつ][一日|ついたち]から[十日|とおか]まで、[一階|いっかい]の [食品|しょくひん]コーナーは お[休|やす]み します。}}\n- Periodo: 1–10 del mese prossimo.\n- Cosa: reparto alimentare chiuso.\n\nFrase: {{ja|その [間|あいだ]、[食品|しょくひん]は [地下|ちか][一階|いっかい]で [販売|はんばい]いたします。}}\n- Alternativa: seminterrato.' },
      { h: 'Errori e riepilogo', b: '- Scambiare お[休|やす]み (chiusura) per «riposo del personale» e non per chiusura al pubblico.\n- Non leggere [日付|ひづけ] (1–10) e capire che dura tutto il mese.\n- Dimenticare l’alternativa.\n- Prendere le scuse per una cancellazione.\n\nRiepilogo: motivo → cambiamento → periodo → alternativa → scusa.' }
    ],
    ex: [
      mc('«[改装|かいそう]» significa…', ['lavori di ristrutturazione', 'apertura', 'sconto', 'inventario']),
      mc('«お[休|やす]みします» in un avviso di negozio significa…', ['il reparto è chiuso', 'il personale è in ferie ma il negozio è aperto', 'il reparto raddoppia', 'il reparto è in vendita']),
      mc('«ご[不便|ふべん]をおかけします» è…', ['una scusa formale', 'una minaccia', 'una promozione', 'un saluto']),
      fillJ('Completa: かいそうの ___、おやすみします。(motivo)', ['ため'], 'N の ため.'),
      fillJ('Completa: らいげつ ついたちから とおか___ おやすみです。', ['まで'], 'から…まで.'),
      fillJ('Completa: しょくひんは ちか いっかいで はんばい___ ます。(umile)', ['いたし'], 'いたします.'),
      order('Metti in ordine: «Il reparto alimentare è chiuso»', ['しょくひん', 'コーナーは', 'おやすみ', 'します'], 'Avviso breve.'),
      order('Metti in ordine: «Vi chiediamo comprensione»', ['ごりかいを', 'おねがい', 'いたします'], 'Formula fissa.'),
      lis('まもなく へいてんの じかんです。おわすれものに ごちゅうい ください。', 'Che cosa si annuncia?', ['Il negozio sta per chiudere', 'Il negozio aprirà', 'Una promozione', 'Un guasto']),
      mc('Che cosa significa «[地下|ちか]»?', ['piano interrato', 'primo piano', 'tetto', 'ingresso']),
      mc('Che cosa si può dedurre da «[十一日|じゅういちにち]から[新|あたら]しい[売|う]り[場|ば]»?', ['I lavori finiscono il 10', 'I lavori iniziano l’11', 'Il reparto chiude per sempre', 'Il negozio chiude l’11'])
    ],
    test: [
      mc('«[営業|えいぎょう]» significa…', ['attività, apertura al pubblico', 'chiusura', 'vendita', 'sconto']),
      mc('«[閉店|へいてん]» significa…', ['chiusura del negozio', 'apertura', 'saldi', 'inventario']),
      mc('«[皆様|みなさま]» è…', ['tutti (forma gentile)', 'il direttore', 'il cliente singolo', 'i colleghi']),
      mc('In un avviso, «その[間|あいだ]» si riferisce a…', ['al periodo di chiusura', 'a ieri', 'alla storia', 'al futuro lontano']),
      mc('Che cosa chiede «ご[理解|りかい]をお[願|ねが]いいたします»?', ['di accettare il disagio', 'di pagare', 'di tornare domani', 'di firmare']),
      fillJ('Completa: おわすれ___ に ごちゅうい ください。', ['もの', '物'], 'お忘れ物.'),
      lis('ごりかいを おねがい いたします。', 'Che cosa viene chiesto?', ['Comprensione per il disagio', 'Un pagamento', 'Una firma', 'Di aspettare'])
    ],
    cards: [card('c1', 'ristrutturazione', '[改装|かいそう]', '', 'かいそう'), card('c2', 'alimenti', '[食品|しょくひん]', '', 'しょくひん'), card('c3', 'vendita', '[販売|はんばい]', '', 'はんばい'), card('c4', 'piano interrato', '[地下|ちか]', '', 'ちか'), card('c5', 'disagio', '[不便|ふべん]', '', 'ふべん'), card('c6', 'comprensione', '[理解|りかい]', '', 'りかい'), card('c7', 'chiusura del negozio', '[閉店|へいてん]', '', 'へいてん'), card('c8', 'oggetto dimenticato', 'お[忘|わす]れ[物|もの]', '', 'おわすれもの')],
    lis: { title: 'Annuncio nel grande magazzino', text: 'ほんじつは ごらいてん いただき、ありがとうございます。まもなく へいてんの じかんです。おわすれものの ないよう、ごちゅうい ください。らいげつ ついたちから とおかまで、かいそうの ため、いっかいの しょくひんコーナーは おやすみ します。その あいだ、ちかいっかいで はんばい いたします。',
      qs: [{ q: 'Che cosa si annuncia all’inizio?', o: ['Il negozio sta per chiudere', 'Una promozione', 'Un oggetto smarrito', 'Un guasto'] }, { q: 'Quale reparto chiude per lavori?', o: ['Il reparto alimentare', 'L’abbigliamento', 'I giocattoli', 'L’elettronica'] }, { q: 'Dove si venderanno gli alimenti nel frattempo?', o: ['Al seminterrato', 'Al terzo piano', 'Fuori dal negozio', 'Online'], kind: 'implicit' }] },
    dict: ['ごりかいを おねがい いたします', 'まもなく へいてんの じかんです', 'かいそうの ため おやすみします'],
    shad: [['ごらいてん ありがとうございます。', 'Tono di servizio.'], ['まもなく へいてんです。', 'へいてん: he-i-te-n.'], ['ごりかいを おねがい いたします。', 'Chiusura cortese.']],
    speak: [['Leggi un avviso: il reparto è chiuso per lavori.', 'かいそうの ため、しょくひんコーナーは おやすみします。'], ['Chiedi comprensione ai clienti.', 'ごふべんを おかけしますが、ごりかいを おねがい いたします。']],
    read: { title: 'Avviso del grande magazzino', text: '[お客様|きゃくさま]へのお[知|し]らせ。[来月|らいげつ][一日|ついたち]から[十日|とおか]まで、[改装|かいそう]のため[一階|いっかい]の[食品|しょくひん]コーナーはお[休|やす]みします。その[間|あいだ]、[食品|しょくひん]は[地下|ちか][一階|いっかい]で[販売|はんばい]いたします。ご[不便|ふべん]をおかけしますが、ご[理解|りかい]をお[願|ねが]いいたします。[営業時間|えいぎょうじかん]は[変|か]わりません。[十一日|じゅういちにち]からは[新|あたら]しい[売|う]り[場|ば]で、[皆様|みなさま]をお[待|ま]ちしております。',
      qs: [{ q: 'Per quanto tempo il reparto alimentare è chiuso?', o: ['Dal 1 al 10 del mese prossimo', 'Per un mese intero', 'Dal 10 al 20', 'Una sola giornata'] }, { q: 'Dove si possono comprare gli alimenti nel frattempo?', o: ['Al seminterrato', 'Al secondo piano', 'Online', 'Da nessuna parte'] }, { q: 'Che cosa succede l’11?', o: ['Si apre il nuovo reparto', 'Il negozio chiude', 'Iniziano i lavori', 'Ci sono saldi'], kind: 'implicit' }, { q: 'Che tono ha l’avviso?', o: ['Formale e di scusa', 'Scherzoso', 'Autoritario', 'Pubblicitario'], kind: 'implicit' }] } });

  R({ id: 'jpn-j7-dialoghi', prereq: 'jpn-j7-annunci', title: 'Dialoghi naturali: inviti, rifiuti e preoccupazioni',
    summary: 'Capire dialoghi con espressioni di cortesia, rifiuti indiretti e sentimenti non detti.',
    obj: ['Seguire un dialogo con più battute', 'Riconoscere rifiuti e offerte indirette', 'Dedurre sentimenti dal tono'],
    pages: [
      { h: 'Obiettivo', b: 'Nei dialoghi i giapponesi **non dicono tutto**: usano formule, pause e frasi lasciate a metà. Qui impari a leggere e ascoltare i segnali di **accettazione, rifiuto e preoccupazione**.' },
      { h: 'Struttura di un dialogo', b: '1. Apertura: {{ja|[最近|さいきん]、[忙|いそが]しそうですね。}}\n2. Spiegazione: {{ja|～んです。}}\n3. Offerta: {{ja|～ましょうか。}}\n4. Risposta: accettazione o rifiuto indiretto\n5. Chiusura: {{ja|また [今度|こんど]。}}' },
      { h: 'Vocabolario utile', b: '- {{ja|[出張|しゅっちょう]}} viaggio di lavoro; {{ja|[準備|じゅんび]}} preparazione; {{ja|[残|のこ]る}} restare\n- {{ja|[大変|たいへん]}} faticoso; {{ja|[自分|じぶん]で}} da solo\n- {{ja|[覚|おぼ]える}} imparare a memoria; {{ja|おごる}} offrire\n- {{ja|[遠慮|えんりょ]}} riserbo; {{ja|[助|たす]かる}} essere di aiuto' },
      { h: 'Strategia di lettura e ascolto', b: '- Chi parla? Che rapporto c’è (colleghi, amici)?\n- Segui lo **schema domanda → risposta**.\n- Ascolta le **ultime parole** di ogni battuta: spesso contengono あいづち (そうですか, なるほど).\n- Attenzione a {{ja|でも}}, {{ja|ちょっと}} e a frasi sospese: indicano rifiuto.' },
      { h: 'Comprensione implicita', b: '- {{ja|[何|なに]か [手伝|てつだ]いましょうか}} → offerta di aiuto.\n- {{ja|ありがとうございます。でも、[自分|じぶん]で やらないと…}} → rifiuta garbatamente.\n- {{ja|[今度|こんど]、ご[飯|はん]でも おごらせてください}} → vuole ricambiare la gentilezza.\n- {{ja|それは [大変|たいへん]ですね}} → empatia, non solo un commento.' },
      { h: 'Ascolto: dialoghi quotidiani', b: 'Nei dialoghi cerca: **chi propone**, **chi risponde**, **che cosa accetta**. Tieni a mente le forme: {{ja|～と いいですね}}, {{ja|～かもしれません}}, {{ja|～つもりです}}.' },
      { h: 'Esempio guidato', b: 'A: {{ja|[何|なに]か [手伝|てつだ]いましょうか。}}\nB: {{ja|ありがとうございます。でも、[自分|じぶん]で やらないと [覚|おぼ]えられないので。}}\n\n→ B ringrazia, ma **rifiuta** perché vuole imparare da solo; non è scortese.' },
      { h: 'Errori e riepilogo', b: '- Prendere «でも» come una discussione.\n- Pensare che «[大丈夫|だいじょうぶ]です» sia sempre sì: può essere un rifiuto.\n- Perdere i sentimenti nascosti: stanchezza, imbarazzo.\n- Dimenticare chi parla.\n\nRiepilogo: apertura → spiegazione → offerta → risposta indiretta → chiusura.' }
    ],
    ex: [
      mc('«[出張|しゅっちょう]» significa…', ['viaggio di lavoro', 'vacanza', 'trasloco', 'esame']),
      mc('«[大丈夫|だいじょうぶ]です» come risposta a un’offerta può significare…', ['grazie, non serve', 'sì, per favore sempre', 'no, mai', 'non capisco']),
      mc('«おごる» significa…', ['offrire un pasto o una consumazione', 'chiedere denaro', 'rubare', 'cucinare']),
      fillJ('Completa: らいげつの しゅっちょうの じゅんび___ いそがしいです。', ['で'], 'で = causa/contesto.'),
      fillJ('Completa: なにか てつだい___か。', ['ましょう'], 'V-ましょうか.'),
      fillJ('Completa: こんど、ごはんでも おごら___ ください。(lascia che offra io)', ['せて'], 'おごらせて ください: おごる + させて ください.'),
      order('Metti in ordine: «Se non lo faccio io, non riesco a impararlo»', ['じぶんで', 'やらないと', 'おぼえられない', 'ので'], 'ないと…ので.'),
      order('Metti in ordine: «Resto fino a tardi ogni giorno»', ['まいにち', 'おそくまで', 'のこって', 'います'], 'て います.'),
      lis('なにか てつだいましょうか。ありがとうございます。でも、だいじょうぶです。', 'Che cosa risponde la seconda persona?', ['Ringrazia e rifiuta gentilmente', 'Accetta con piacere', 'Si arrabbia', 'Chiede più aiuto']),
      mc('「それは たいへんですね」 esprime…', ['empatia', 'critica', 'noia', 'sorpresa negativa']),
      mc('Un rifiuto indiretto contiene spesso…', ['でも / ちょっと', 'もちろん', 'ぜひ', 'いつでも'])
    ],
    test: [
      mc('«[準備|じゅんび]» significa…', ['preparazione', 'partenza', 'fine', 'attesa']),
      mc('«[遠慮|えんりょ]» significa…', ['riserbo, moderazione', 'entusiasmo', 'rifiuto netto', 'domanda']),
      mc('«[助|たす]かる» significa…', ['essere di aiuto, salvarsi', 'perdere', 'arrabbiarsi', 'dimenticare']),
      mc('Quando qualcuno dice «[今度|こんど]、ぜひ»…', ['propone un incontro futuro', 'rifiuta definitivamente', 'ordina', 'chiede scusa']),
      mc('Quale battuta fa capire che il parlante è stanco?', ['まいにち おそくまで のこって います。', 'きょうは はやく かえります。', 'やすみは たのしかった。', 'あしたは あそびます。']),
      fillJ('Completa: ありがとうございます。___ だいじょうぶです。', ['でも'], 'でも = ma.'),
      lis('このごろ いそがしそうですね。ええ、しゅっちょうの じゅんびで たいへんです。', 'Perché è occupato?', ['Per la preparazione di una trasferta', 'Per un trasloco', 'Per un esame', 'Per un matrimonio'])
    ],
    cards: [card('c1', 'viaggio di lavoro', '[出張|しゅっちょう]', '', 'しゅっちょう'), card('c2', 'preparazione', '[準備|じゅんび]', '', 'じゅんび'), card('c3', 'restare', '[残|のこ]る', '', 'のこる'), card('c4', 'faticoso', '[大変|たいへん]', '', 'たいへん'), card('c5', 'da solo', '[自分|じぶん]で', '', 'じぶんで'), card('c6', 'imparare a memoria', '[覚|おぼ]える', '', 'おぼえる'), card('c7', 'riserbo', '[遠慮|えんりょ]', '', 'えんりょ'), card('c8', 'essere d’aiuto', '[助|たす]かる', '', 'たすかる')],
    lis: { title: 'Due colleghi', text: 'このごろ いそがしそうですね。ええ、らいげつの しゅっちょうの じゅんびで、まいにち おそくまで のこって いるんです。それは たいへんですね。なにか てつだいましょうか。ありがとうございます。でも、じぶんで やらないと おぼえられないので、だいじょうぶです。こんど、ごはんでも おごらせて ください。',
      qs: [{ q: 'Perché B resta fino a tardi?', o: ['Prepara una trasferta', 'Ha un esame', 'Si prepara a traslocare', 'Fa la spesa'] }, { q: 'Che cosa propone A?', o: ['Di aiutare', 'Di andare a cena', 'Di fare una pausa', 'Di cambiare lavoro'] }, { q: 'B accetta l’aiuto?', o: ['No, preferisce fare da solo', 'Sì, con entusiasmo', 'Sì, ma domani', 'Non risponde'], kind: 'implicit' }] },
    dict: ['なにか てつだいましょうか', 'じぶんで やらないと おぼえられない', 'こんど ごはんでも おごらせて ください'],
    shad: [['それは たいへんですね。', 'Empatia: intonazione dolce.'], ['なにか てつだいましょうか。', 'Intonazione ascendente.'], ['ありがとうございます。でも…', 'Pausa dopo でも.']],
    speak: [['Offri aiuto a un collega affaticato.', 'たいへんですね。なにか てつだいましょうか。'], ['Rifiuta gentilmente l’aiuto e proponi di offrire il pranzo.', 'ありがとうございます。でも、だいじょうぶです。こんど、ごはんでも おごらせて ください。']],
    read: { title: 'Due colleghi', text: 'A「[最近|さいきん]、[忙|いそが]しそうですね。」B「ええ、[来月|らいげつ]の[出張|しゅっちょう]の[準備|じゅんび]で、[毎日|まいにち][遅|おそ]くまで[残|のこ]っているんです。」A「それは[大変|たいへん]ですね。[何|なに]か[手伝|てつだ]いましょうか。」B「ありがとうございます。でも、[自分|じぶん]でやらないと[覚|おぼ]えられないので、[大丈夫|だいじょうぶ]です。[今度|こんど]、ご[飯|はん]でもおごらせてください。」',
      qs: [{ q: 'Che cosa prepara B?', o: ['Un viaggio di lavoro', 'Un trasloco', 'Un esame', 'Una festa'] }, { q: 'Che cosa offre A?', o: ['Aiuto', 'Denaro', 'Un regalo', 'Un passaggio'] }, { q: 'Perché B rifiuta?', o: ['Vuole imparare facendo da solo', 'Non si fida di A', 'Non ha tempo', 'È arrabbiato'], kind: 'implicit' }, { q: 'Che cosa propone B alla fine?', o: ['Di offrire un pasto un’altra volta', 'Di uscire stasera', 'Di cambiare ufficio', 'Di lavorare insieme'], kind: 'implicit' }] } });

  R({ id: 'jpn-j7-strategie-lettura', prereq: 'jpn-j7-dialoghi', title: 'Strategie di lettura: testo breve di opinione',
    summary: 'Leggere un breve testo di opinione, trovare tesi, esempi e conclusione e dedurre l’implicito.',
    obj: ['Trovare tesi, motivi e conclusione', 'Usare i connettivi per seguire il ragionamento', 'Rispondere a domande implicite'],
    pages: [
      { h: 'Obiettivo', b: 'Un testo di opinione ha **tesi → esempio → obiezione → conclusione personale**. Con i connettivi ([確|たし]かに, しかし, だから) puoi seguirlo anche con parole sconosciute. È una tecnica chiave per il N3.' },
      { h: 'Struttura del testo', b: '1. Tesi: {{ja|～と [言|い]われて います。}}\n2. Concessione: {{ja|[確|たし]かに、～。}}\n3. Obiezione: {{ja|しかし、～ のではないでしょうか。}}\n4. Esperienza personale: {{ja|[私|わたし]は～ ことに して います。}}' },
      { h: 'Connettivi chiave', b: '- {{ja|[確|たし]かに}} è vero che… (concessione)\n- {{ja|しかし / でも}} però\n- {{ja|だから / そのため}} perciò\n- {{ja|たとえば}} per esempio\n- {{ja|つまり}} cioè\n- {{ja|[一方|いっぽう]}} d’altra parte\n\nI connettivi ti dicono «dove va» il ragionamento.' },
      { h: 'Strategia di lettura', b: '1. Leggi il titolo (se c’è).\n2. Trova la **tesi** nella prima frase.\n3. Segna il **しかし**: l’idea dell’autore è dopo.\n4. Trova la **conclusione** (spesso con ことにしている / と[思|おも]う).\n5. Rispondi a «cosa pensa l’autore?».' },
      { h: 'Comprensione implicita', b: '- {{ja|～のではないでしょうか}} → l’autore esprime un dubbio, un’opinione cauta.\n- {{ja|[毎晩|まいばん] [三十分|さんじゅっぷん]だけ [本|ほん]を [読|よ]む ことに して います}} → vuole mantenere la lettura, ma in modo realistico.\n- {{ja|[確|たし]かに…しかし…}} → l’autore riconosce un fatto, ma non è d’accordo.' },
      { h: 'Ascolto: brevi opinioni', b: 'Ascoltando una breve opinione, ascolta **prima il fatto** poi la **parola di contrasto** (しかし), poi la **conclusione**. Prendi nota della parola in posizione finale.' },
      { h: 'Esempio guidato', b: 'Frase: {{ja|[確|たし]かに、スマホで ニュースを [読|よ]む [人|ひと]は [増|ふ]えました。しかし…}}\n- Concessione: è vero che aumentano.\n- Dopo しかし arriva l’idea vera: c’è un lato negativo.' },
      { h: 'Errori e riepilogo', b: '- Prendere la concessione ([確|たし]かに) per l’opinione dell’autore.\n- Ignorare しかし.\n- Pensare che una domanda retorica richieda risposta.\n- Perdere la conclusione.\n\nRiepilogo: tesi → [確|たし]かに → しかし → opinione personale.' }
    ],
    ex: [
      mc('«[確|たし]かに» introduce…', ['una concessione', 'una domanda', 'una conclusione', 'un ordine']),
      mc('Dopo «しかし» di solito trovi…', ['l’opinione dell’autore', 'la data', 'un saluto', 'un titolo']),
      mc('«つまり» significa…', ['cioè', 'ma', 'forse', 'dopo']),
      fillJ('Completa: ___、スマホで ニュースを よむ ひとは ふえました。(è vero che)', ['たしかに', '確かに'], '[確|たし]かに.'),
      fillJ('Completa: ___、ながい はなしを よむ ちからが よわく なる。(ma)', ['しかし'], 'しかし = però.'),
      fillJ('Completa: まいばん さんじゅっぷん だけ よむ ___ に して います。', ['こと'], 'ことにしている.'),
      order('Metti in ordine: «Si dice che chi legge libri sia diminuito»', ['ほんを', 'よむ', 'ひとが', 'へって いると', 'いわれて います'], 'と いわれて いる.'),
      order('Metti in ordine: «Non è forse così?»', ['そうでは', 'ない', 'でしょうか'], 'Domanda retorica.'),
      lis('たしかに、ふえました。しかし、よわく なるのでは ないでしょうか。', 'Qual è l’opinione dell’autore?', ['C’è un lato negativo', 'Tutto va bene', 'Non si sa', 'È una buona notizia']),
      mc('「～のでは ないでしょうか」 esprime…', ['un’opinione cauta', 'un ordine', 'una domanda reale', 'un divieto']),
      mc('Dove di solito si trova la conclusione?', ['alla fine', 'nel titolo', 'nella data', 'nel primo verbo'])
    ],
    test: [
      mc('«[集中|しゅうちゅう]» significa…', ['concentrazione', 'distrazione', 'riposo', 'lettura']),
      mc('«[文章|ぶんしょう]» significa…', ['testo scritto', 'parola', 'libro', 'immagine']),
      mc('«[一方|いっぽう]» introduce…', ['un altro lato della questione', 'una causa', 'un ordine', 'una scusa']),
      mc('Se un testo dice «[確|たし]かに A。しかし B。» l’autore sostiene…', ['B', 'A', 'né A né B', 'sia A sia B']),
      mc('Quale è una domanda retorica?', ['よわく なるのでは ないでしょうか。', 'いま なんじですか。', 'どこに いますか。', 'だれですか。']),
      fillJ('Completa: たとえ___、まいばん よむ ひとが います。(per esempio)', ['ば'], 'たとえば.'),
      lis('まいばん ねる まえに さんじゅっぷんだけ ほんを よみます。', 'Quanto legge ogni sera?', ['Trenta minuti', 'Un’ora', 'Dieci minuti', 'Due ore'])
    ],
    cards: [card('c1', 'è vero che…', '[確|たし]かに', '', 'たしかに'), card('c2', 'però', 'しかし', '', 'しかし'), card('c3', 'perciò', 'そのため', '', 'そのため'), card('c4', 'cioè', 'つまり', '', 'つまり'), card('c5', 'd’altra parte', '[一方|いっぽう]', '', 'いっぽう'), card('c6', 'testo scritto', '[文章|ぶんしょう]', '', 'ぶんしょう'), card('c7', 'concentrazione', '[集中|しゅうちゅう]', '', 'しゅうちゅう'), card('c8', 'ridursi', '[減|へ]る', '', 'へる')],
    lis: { title: 'Una breve opinione', text: 'さいきん、ほんを よむ ひとが へって いると いわれて います。たしかに、スマホで ニュースを よむ ひとは ふえました。しかし、みじかい ぶんしょうばかり よんで いると、ながい はなしを よむ ちからが よわく なるのでは ないでしょうか。わたしは まいばん ねる まえに さんじゅっぷんだけ ほんを よむ ことに して います。',
      qs: [{ q: 'Che cosa è diminuito?', o: ['Chi legge libri', 'Chi usa lo smartphone', 'Chi legge giornali', 'Chi scrive'] }, { q: 'Che cosa teme l’autore?', o: ['Una minore capacità di leggere testi lunghi', 'Che i libri costino troppo', 'Che manchino librerie', 'Che i giornali chiudano'] }, { q: 'Che cosa fa l’autore ogni sera?', o: ['Legge un libro per trenta minuti', 'Guarda notizie', 'Scrive un diario', 'Studia'], kind: 'implicit' }] },
    dict: ['ほんを よむ ひとが へって います', 'たしかに ふえました しかし', 'まいばん ほんを よみます'],
    shad: [['たしかに、ふえました。', 'Pausa dopo たしかに.'], ['しかし、よわく なるのでは ないでしょうか。', 'Intonazione discendente-ascendente.'], ['まいばん ほんを よむ ことに して います。', 'Fine frase ferma.']],
    speak: [['Esprimi una tua opinione su smartphone e lettura in due frasi.', 'たしかに、スマホは べんりです。しかし、ほんを よむ じかんも たいせつだと おもいます。'], ['Di’ che cosa fai la sera per rilassarti.', 'まいばん ねる まえに すこし ほんを よむ ことに して います。']],
    read: { title: 'Leggere ancora?', text: '[最近|さいきん]、[本|ほん]を[読|よ]む[人|ひと]が[減|へ]っていると[言|い]われています。[確|たし]かに、スマートフォンでニュースを[読|よ]む[人|ひと]は[増|ふ]えました。しかし、[短|みじか]い[文章|ぶんしょう]ばかり[読|よ]んでいると、[長|なが]い[話|はなし]を[集中|しゅうちゅう]して[読|よ]む[力|ちから]が[弱|よわ]くなるのではないでしょうか。[私|わたし]は[毎晩|まいばん]、[寝|ね]る[前|まえ]に[三十分|さんじゅっぷん]だけ[本|ほん]を[読|よ]むことにしています。',
      qs: [{ q: 'Che cosa è aumentato?', o: ['Chi legge notizie con lo smartphone', 'Chi legge libri', 'Chi scrive libri', 'Le librerie'] }, { q: 'Qual è la preoccupazione dell’autore?', o: ['Si perde la capacità di concentrarsi su testi lunghi', 'Gli smartphone costano troppo', 'Mancano le notizie', 'Si legge troppo'], kind: 'implicit' }, { q: 'Come reagisce l’autore?', o: ['Legge un libro per trenta minuti ogni sera', 'Smette di leggere notizie', 'Compra uno smartphone', 'Non fa nulla'], kind: 'implicit' }, { q: 'Che cosa significa «[確|たし]かに»?', o: ['È vero che…', 'Forse', 'Ma', 'Per esempio'] }] } });
})(window.ST = window.ST || {});
