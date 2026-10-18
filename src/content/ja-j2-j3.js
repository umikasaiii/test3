/* Giapponese — stage J2 (forma て e forma semplice) e J3 (esperienze e ragioni). */
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

  addTopic({
    id: 'jpn-j2-te-form', subject: 'jpn', stage: 'J2', title: 'La forma て: richieste e azioni in corso', minutes: 20, prereq: ['jpn-j1-places-wants'],
    summary: 'Coniugare la forma て; ～てください, ～ています, ～てもいいです, ～てはいけません.',
    objectives: ['Formare la forma て dei tre gruppi di verbi', 'Fare richieste, chiedere e dare permesso, vietare', 'Descrivere azioni in corso e stati'],
    pages: [
      { h: 'Obiettivo', b: 'La **forma て** è la «chiave» della grammatica giapponese: permette richieste, azioni in corso, permessi, sequenze di azioni. Impararla bene vale molte ore di studio successivo.' },
      { h: 'I gruppi di verbi', b: '- **Gruppo 1** (u-verbi): la forma ます ha …i prima di ます (のみます, かきます).\n- **Gruppo 2** (ru-verbi): …e/…i + ます con radice in e/i (たべます, みます, おきます).\n- **Gruppo 3** irregolari: します, きます.\n\nLa forma dizionario aiuta: i verbi del gruppo 2 finiscono in **-eru** o **-iru** (con eccezioni, ad es. かえる «tornare» è gruppo 1).' },
      { h: 'Come si forma', b: '**Gruppo 2**: togli る, aggiungi て. {{ja|[食|た]べる}} → {{ja|[食|た]べて}}.\n**Gruppo 3**: {{ja|する}} → {{ja|して}}, {{ja|[来|く]る}} → {{ja|[来|き]て}}.\n**Gruppo 1** (dipende dall’ultima kana):\n- う・つ・る → **って**: {{ja|[買|か]う}} → {{ja|[買|か]って}}, {{ja|[待|ま]つ}} → {{ja|[待|ま]って}}, {{ja|[帰|かえ]る}} → {{ja|[帰|かえ]って}}\n- む・ぶ・ぬ → **んで**: {{ja|[飲|の]む}} → {{ja|[飲|の]んで}}, {{ja|[遊|あそ]ぶ}} → {{ja|[遊|あそ]んで}}\n- く → **いて**: {{ja|[書|か]く}} → {{ja|[書|か]いて}} (eccezione: {{ja|[行|い]く}} → {{ja|[行|い]って}})\n- ぐ → **いで**: {{ja|[泳|およ]ぐ}} → {{ja|[泳|およ]いで}}\n- す → **して**: {{ja|[話|はな]す}} → {{ja|[話|はな]して}}' },
      { h: 'Usi principali', b: '- **～てください**: richiesta cortese. {{ja|ちょっと [待|ま]って ください。}}\n- **～ています**: azione in corso o stato risultante. {{ja|[今|いま] [勉強|べんきょう]して います。}} / {{ja|[東京|とうきょう]に [住|す]んで います。}} (vivo a Tokyo)\n- **～てもいいですか**: posso…? {{ja|ここで [写真|しゃしん]を [撮|と]っても いいですか。}}\n- **～てはいけません**: è vietato. {{ja|ここで [食|た]べては いけません。}}\n- **～て、～**: sequenza di azioni. {{ja|[起|お]きて、[顔|かお]を [洗|あら]って、[朝|あさ]ごはんを [食|た]べます。}}' },
      { h: 'Esempio guidato', b: 'Chiedi a un commesso: *Mi può mostrare questa borsa, per favore? Posso provarla?*\n\n- {{ja|この かばんを [見|み]せて ください。}} (見せる → 見せて)\n- {{ja|[試|ため]して も いいですか。}} (試す → 試して; て + も いいですか)\n\nRisposta tipica: {{ja|はい、どうぞ。}} / {{ja|すみません、ちょっと…}} (rifiuto indiretto).\n\nControllo: conta le more della richiesta e leggila ad alta voce senza pause nella forma て.' },
      { h: 'Errori comuni', b: '- *いくて* → {{ja|いって}} (eccezione di いく).\n- *のむて* → {{ja|のんで}} (む → んで).\n- Dire solo *みせて* in situazioni formali: aggiungi ください.\n- Confondere ～ています (in corso / stato) e ます (abitudine): {{ja|けっこんしています}} = sono sposato (stato).\n- Usare ～ていけません: la forma è ～てはいけません.' },
      { h: 'Riepilogo', b: '- Gruppo 2: る → て; Gruppo 3: して / きて; Gruppo 1: って / んで / いて / いで / して.\n- ください = richiesta; ています = in corso / stato; てもいい = permesso; てはいけない = divieto.\n- Eccezione: いく → いって.' }
    ],
    exercises: [
      mc('Qual è la forma て di 飲む?', ['のんで', 'のみて', 'のうて', 'のって'], 0),
      mc('Qual è la forma て di 食べる?', ['たべて', 'たべって', 'たべんで', 'たべいて'], 0),
      fillJ('Forma て di かく (scrivere): かい___', ['て'], 'く → いて.'),
      mc('«Aspetti un momento, per favore»:', ['ちょっと まって ください。', 'ちょっと まちて ください。', 'ちょっと まった ください。', 'ちょっと まつ ください。'], 0),
      order('Metti in ordine: «Posso fare una foto qui?»', ['ここで', 'しゃしんを', 'とっても', 'いいですか'], 'て + も いいですか.'),
      listen('ここで たべては いけません。', 'ja', 'Che cosa significa?', ['Qui è vietato mangiare', 'Qui puoi mangiare', 'Mangiamo qui?', 'Qui non c’è cibo'], 0),
      mc('Che cosa significa «とうきょうに すんで います»?', ['Abito a Tokyo', 'Andrò a Tokyo', 'Ho abitato a Tokyo', 'Voglio abitare a Tokyo'], 0)
    ],
    test: [
      mc('Qual è la forma て di 行く?', ['いきて', 'いって', 'いいて', 'いんで'], 1),
      mc('Qual è la forma て di する?', ['しって', 'して', 'すて', 'しいて'], 1),
      mc('«Posso entrare?»', ['はいっても いいですか', 'はいっては いけません', 'はいって ください', 'はいって います'], 0),
      listen('いま べんきょうして います。', 'ja', 'Che cosa sta facendo?', ['Studia adesso', 'Studierà domani', 'Ha studiato ieri', 'Non vuole studiare'], 0)
    ],
    cards: [
      card('c1', 'aspettare', '[待|ま]つ', '', 'まつ'), card('c2', 'comprare', '[買|か]う', '', 'かう'), card('c3', 'scrivere', '[書|か]く', '', 'かく'), card('c4', 'parlare', '[話|はな]す', '', 'はなす'),
      card('c5', 'mostrare', '[見|み]せる', '', 'みせる'), card('c6', 'abitare', '[住|す]む', '', 'すむ'), card('c7', 'fare una foto', '[写真|しゃしん]を[撮|と]る', '', 'しゃしんをとる'), card('c8', 'per favore (richiesta)', '～て ください', '', 'てください')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al negozio', text: 'すみません、この かばんを みせて ください。ありがとうございます。ちょっと もって みても いいですか。はい、どうぞ。うーん、すこし おもいですね。もっと かるい かばんは ありますか。',
      qs: [{ q: 'Che cosa chiede il cliente all’inizio?', o: ['Di mostrargli la borsa', 'Di pagare', 'Di consegnare a casa', 'Di cambiare la taglia'], a: 0, kind: 'explicit' }, { q: 'Perché cerca un’altra borsa?', o: ['È troppo cara', 'È un po’ pesante', 'È troppo piccola', 'Il colore non gli piace'], a: 1, kind: 'explicit' }, { q: 'Che cosa chiede alla fine?', o: ['Una borsa più leggera', 'Una borsa più grande', 'Uno sconto', 'Un’altra taglia'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ちょっと まって ください', lang: 'ja' }, { text: 'ここで しゃしんを とっても いいですか', lang: 'ja' }, { text: 'いま べんきょうして います', lang: 'ja' }],
    shadowing: [{ text: 'この かばんを みせて ください。', lang: 'ja', tip: 'Richiesta cortese: tono discendente e gentile.' }, { text: 'ここで しゃしんを とっても いいですか。', lang: 'ja', tip: 'Domanda: intonazione ascendente su か.' }, { text: 'とうきょうに すんで います。', lang: 'ja', tip: 'すんで います: collega le more senza pause.' }],
    speaking: [{ prompt: 'In un negozio: chiedi di vedere un prodotto e se puoi provarlo.', model: 'すみません、この くつを みせて ください。はいても いいですか。' }, { prompt: 'Di’ dove abiti e che cosa stai studiando adesso.', model: 'ローマに すんで います。いま にほんごを べんきょうして います。' }]
  });

  addTopic({
    id: 'jpn-j2-plain-opinion', subject: 'jpn', stage: 'J2', title: 'Forma semplice, opinioni e consigli', minutes: 20, prereq: ['jpn-j2-te-form'],
    summary: 'Forma dizionario e ない; ～と思います, ～と言いました; ～ことができます; ～ほうがいいです.',
    objectives: ['Usare la forma semplice (dizionario e ない)', 'Esprimere opinioni e riportare parole', 'Dire ciò che si può fare e dare consigli'],
    pages: [
      { h: 'Obiettivo', b: 'Finora hai usato quasi solo la forma cortese. Per esprimere opinioni, riportare ciò che si è detto e capire la lingua parlata serve la **forma semplice (futsūkei)**.' },
      { h: 'Forma dizionario e ない', b: '**Dizionario** (forma base): {{ja|[食|た]べる}}, {{ja|[飲|の]む}}, {{ja|[行|い]く}}, {{ja|する}}, {{ja|[来|く]る}}.\n**Negativa (ない)**:\n- Gruppo 2: togli る + ない → {{ja|[食|た]べない}}\n- Gruppo 1: -u → -a + ない → {{ja|[飲|の]まない}}, {{ja|[書|か]かない}} (う → わ: {{ja|[買|か]わない}})\n- Gruppo 3: {{ja|しない}}, {{ja|[来|こ]ない}}\n\nAggettivi e nomi: い-agg.: {{ja|[高|たか]い}} / {{ja|[高|たか]くない}}; な-agg. e nomi: {{ja|[学生|がくせい]だ}} / {{ja|[学生|がくせい]じゃ ない}}.\n\nLa forma semplice si usa tra amici, nei pensieri e dentro frasi subordinate (come con と).' },
      { h: 'Opinioni e citazioni', b: '- **～と思います**: «penso che». {{ja|あした [雨|あめ]が [降|ふ]ると [思|おも]います。}}\n- **～と言いました**: «ha detto che». {{ja|[田中|たなか]さんは [来|こ]ないと [言|い]いました。}}\n\nDentro と si usa la forma **semplice**; con nomi e な-aggettivi si usa **だ**: {{ja|[彼|かれ]は [先生|せんせい]だと [思|おも]います。}}\n\nPer attenuare: {{ja|～と [思|おも]います}} è già una forma morbida; per affermare con più sicurezza si usa {{ja|～です}}.\n\nNegativa: {{ja|[行|い]かないと [思|おも]います。}} (penso che non andrà).' },
      { h: 'Abilità e consigli', b: '- **～ことが できます**: sapere/potere fare (verbo dizionario). {{ja|わたしは [日本語|にほんご]を [話|はな]す ことが できます。}}\n- **～た ほうが いいです**: è meglio fare. {{ja|[早|はや]く [寝|ね]た ほうが いいです。}}\n- **～ない ほうが いいです**: è meglio non fare. {{ja|[夜|よる]、コーヒーを [飲|の]まない ほうが いいです。}}\n- **～ないで ください**: per favore non… {{ja|ここで [写真|しゃしん]を [撮|と]らないで ください。}}' },
      { h: 'Esempio guidato', b: 'Dai un’opinione e un consiglio: *Penso che il giapponese sia difficile, ma divertente. È meglio studiare ogni giorno.*\n\n- {{ja|[日本語|にほんご]は [難|むずか]しいと [思|おも]いますが、おもしろいです。}}\n- {{ja|[毎日|まいにち] [勉強|べんきょう]した ほうが いいです。}}\n\nControllo: nella parte con と la frase precedente è in forma semplice (むずかしい); la frase cortese resta fuori.' },
      { h: 'Errori comuni', b: '- *がくせいですと おもいます* → {{ja|がくせいだと おもいます。}} (dentro と: だ).\n- *のむない* → {{ja|のまない}}.\n- *たべなかった ほうが* quando vuoi dire «meglio non mangiare» → {{ja|たべない ほうが いいです。}}\n- *はなすことできます* → {{ja|はなす ことが できます。}} (が).\n- Usare la forma semplice con qualcuno da rispettare: nelle conversazioni cortesi si usa ます a fine frase.' },
      { h: 'Riepilogo', b: '- Dizionario e ない per i verbi; だ / じゃ ない per nomi e な-agg.\n- と思います / と言いました richiedono la forma semplice.\n- ことができます = abilità; ほうがいい = consiglio; ないでください = divieto cortese.' }
    ],
    exercises: [
      mc('Qual è la forma ない di 飲む?', ['のまない', 'のみない', 'のむない', 'のめない'], 0),
      mc('Qual è la forma ない di 食べる?', ['たべない', 'たべらない', 'たべません', 'たべなく'], 0),
      fillJ('Completa: あした あめが ふる___ おもいます。', ['と'], 'と + おもいます.'),
      mc('«Penso che sia uno studente» (dopo と):', ['がくせいだと おもいます。', 'がくせいですと おもいます。', 'がくせいます おもいます。', 'がくせいを おもいます。'], 0),
      mc('«Sono in grado di parlare giapponese»:', ['にほんごを はなす ことが できます。', 'にほんごを はなします ことが できます。', 'にほんごが はなす できます。', 'にほんごを はなせる ことが。'], 0),
      listen('よるは コーヒーを のまない ほうが いいです。', 'ja', 'Che cosa consiglia?', ['Di non bere caffè la sera', 'Di bere caffè la sera', 'Di dormire presto', 'Di non dormire'], 0),
      mc('Qual è la forma ない di する?', ['しない', 'せない', 'すない', 'しません'], 0)
    ],
    test: [
      mc('«Ha detto che non verrà»:', ['こないと いいました。', 'きません と いいました。', 'こない いいました。', 'こなくて いいました。'], 0),
      mc('Qual è la forma ない di 買う?', ['かわない', 'かうない', 'かあない', 'かない'], 0),
      fillJ('«È meglio studiare» → べんきょうした ___ いいです。', ['ほうが'], 'た + ほうが いいです.'),
      mc('Che cosa significa «ここで たばこを すわないで ください»?', ['Per favore non fumare qui', 'Puoi fumare qui', 'Voglio fumare qui', 'Hai fumato qui'], 0)
    ],
    cards: [
      card('c1', 'pensare', '[思|おも]う', '', 'おもう'), card('c2', 'dire', '[言|い]う', '', 'いう'), card('c3', 'pioggia', '[雨|あめ]', '', 'あめ'), card('c4', 'difficile', '[難|むずか]しい', '', 'むずかしい'),
      card('c5', 'interessante', 'おもしろい', '', 'おもしろい'), card('c6', 'presto', '[早|はや]く', '', 'はやく'), card('c7', 'poter fare', 'ことが できる', '', 'ことができる'), card('c8', 'meglio', 'ほうが いい', '', 'ほうがいい')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Consigli di un amico', text: 'きのう ともだちに にほんごの べんきょうに ついて はなしました。かれは まいにち すこしずつ べんきょうした ほうが いいと いいました。わたしも そう おもいます。ながい じかんを べんきょうするより、まいにち じゅっぷん したほうが いいです。',
      qs: [{ q: 'Che cosa consiglia l’amico?', o: ['Studiare un po’ ogni giorno', 'Studiare solo nel weekend', 'Studiare tutta la notte', 'Smettere di studiare'], a: 0, kind: 'explicit' }, { q: 'Il parlante è d’accordo?', o: ['Sì', 'No', 'Non si sa', 'Solo in parte'], a: 0, kind: 'explicit' }, { q: 'Quanto studia ogni giorno, secondo il parlante?', o: ['Dieci minuti', 'Un’ora', 'Due ore', 'Cinque minuti'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'あした あめが ふると おもいます', lang: 'ja' }, { text: 'ここで しゃしんを とらないで ください', lang: 'ja' }, { text: 'まいにち べんきょうした ほうが いいです', lang: 'ja' }],
    shadowing: [{ text: 'あした あめが ふると おもいます。', lang: 'ja', tip: 'と leggero, おもいます chiaro.' }, { text: 'まいにち べんきょうした ほうが いいです。', lang: 'ja', tip: 'Ritmo costante, senza pause nel mezzo.' }, { text: 'にほんごを はなす ことが できます。', lang: 'ja', tip: 'こ・と・が: tre more distinte.' }],
    speaking: [{ prompt: 'Dai la tua opinione sul giapponese e dai un consiglio a un amico che lo studia.', model: 'にほんごは むずかしいと おもいますが、おもしろいです。まいにち すこしずつ べんきょうした ほうが いいです。' }, { prompt: 'Di’ che cosa sai fare in giapponese.', model: 'じこしょうかいを する ことが できます。レストランで ちゅうもんする ことも できます。' }]
  });

  addTopic({
    id: 'jpn-j3-past-experience', subject: 'jpn', stage: 'J3', title: 'Passato semplice ed esperienze', minutes: 20, prereq: ['jpn-j2-plain-opinion'],
    summary: 'Forma た; ～たことがあります; ～たり～たりします; ～てから, ～まえに, ～あとで.',
    objectives: ['Formare la forma た (passato semplice)', 'Parlare di esperienze passate', 'Ordinare azioni nel tempo'],
    pages: [
      { h: 'Obiettivo', b: 'Il passato semplice (forma た) ti permette di raccontare ciò che hai fatto e di parlare di **esperienze di vita**. Si forma quasi come la forma て, con la stessa regola.' },
      { h: 'Forma た', b: 'Sostituisci **て/で** della forma て con **た/だ**.\n\n- {{ja|[食|た]べる}} → {{ja|[食|た]べた}} / {{ja|[飲|の]む}} → {{ja|[飲|の]んだ}} / {{ja|[書|か]く}} → {{ja|[書|か]いた}} / {{ja|[行|い]く}} → {{ja|[行|い]った}}\n- Gruppo 3: {{ja|した}}, {{ja|[来|き]た}}\n\nNegativo passato: {{ja|[食|た]べなかった}} (い-agg.: {{ja|おいしくなかった}}; nomi: {{ja|[学生|がくせい]じゃ なかった}}).\n\nI nomi e i な-agg. al passato: {{ja|[学生|がくせい]だった}}, {{ja|[静|しず]かだった}}.\n\nNella lingua cortese: ～ました (già studiato). La forma た si usa in forma semplice o dentro frasi subordinate.' },
      { h: 'Esperienze e liste di azioni', b: '- **～た ことが あります**: ho già fatto (esperienza). {{ja|[日本|にほん]へ [行|い]った ことが あります。}}\n  Negativo: {{ja|[行|い]った ことが ありません。}}\n- **～たり ～たり します**: tra le altre cose, a volte… e a volte… {{ja|[休|やす]みの [日|ひ]は [本|ほん]を [読|よ]んだり、[映画|えいが]を [見|み]たり します。}}\n\nNota: ことが あります con la forma **た** (esperienza); con la forma **dizionario** significa «a volte capita di» ({{ja|[飲|の]む ことが あります}}).' },
      { h: 'Prima, dopo, poi', b: '- **～てから**: dopo aver fatto. {{ja|[宿題|しゅくだい]を してから [寝|ね]ます。}}\n- **～まえに** (dizionario): prima di. {{ja|[寝|ね]る まえに [歯|は]を [磨|みが]きます。}}\n- **～あとで** (た): dopo. {{ja|[食|た]べた あとで [散歩|さんぽ]します。}}\n- **～ながら**: mentre (due azioni simultanee, stesso soggetto). {{ja|[音楽|おんがく]を [聞|き]きながら [勉強|べんきょう]します。}}\n\nIl **tempo** del verbo finale determina il tempo della frase.' },
      { h: 'Esempio guidato', b: 'Racconta un’esperienza: *Sono stato in Giappone due volte. Ho mangiato il sushi e ho visitato Kyoto. Non sono mai salito sul Fuji.*\n\n- {{ja|[日本|にほん]へ [二回|にかい] [行|い]った ことが あります。}}\n- {{ja|すしを [食|た]べたり、[京都|きょうと]を [見学|けんがく]したり しました。}}\n- {{ja|[富士山|ふじさん]に [登|のぼ]った ことが ありません。}}\n\nControllo: con ことが あります il verbo precede in forma た; il tempo finale è あります (presente) perché l’esperienza è ancora vera.' },
      { h: 'Errori comuni', b: '- *いくた ことが* → {{ja|いった ことが あります。}} (て→た dopo いく: いった).\n- *たべるた* → {{ja|たべた}}.\n- *のんだこと ありません* senza が: aggiungi が.\n- Usare ～たり una volta sola: va ripetuto ({{ja|～たり～たり します}}).\n- *ねるあとで* → {{ja|ねたあとで}} (た, non dizionario); *ねたまえに* → {{ja|ねるまえに}}.' },
      { h: 'Riepilogo', b: '- た = passato semplice; ない → なかった.\n- ～たことがあります = esperienza.\n- ～たり～たりします = elenco di azioni.\n- てから / まえに (dizionario) / あとで (た) / ながら per l’ordine nel tempo.' }
    ],
    exercises: [
      mc('Forma た di 飲む:', ['のんだ', 'のみた', 'のんた', 'のった'], 0),
      mc('Forma た di 行く:', ['いいた', 'いった', 'いきた', 'いんだ'], 1),
      fillJ('Completa: にほんへ いった こと___ あります。', ['が'], 'ことが あります.'),
      mc('«Non ho mai mangiato il sushi»:', ['すしを たべた ことが ありません。', 'すしを たべた ことが あります。', 'すしを たべる ことが ありません。', 'すしを たべません ことが。'], 0),
      order('Metti in ordine: «Prima di dormire mi lavo i denti»', ['ねる', 'まえに', 'はを', 'みがきます'], 'Dizionario + まえに.'),
      listen('にほんへ いった ことが あります。', 'ja', 'Che cosa significa?', ['Sono stato in Giappone', 'Andrò in Giappone', 'Voglio andare in Giappone', 'Non sono mai stato in Giappone'], 0),
      mc('Quale frase è corretta?', ['たべた あとで さんぽします。', 'たべる あとで さんぽします。', 'たべた まえに さんぽします。', 'たべて あとで ねます た。'], 0)
    ],
    test: [
      mc('Forma た di 見る:', ['みた', 'みった', 'みんだ', 'みいた'], 0),
      mc('«Qualche volta guardo un film, qualche volta leggo»:', ['えいがを みたり、ほんを よんだり します。', 'えいがを みるり、ほんを よむり します。', 'えいがが みて、ほんが よんで。', 'えいがを みたら、ほんを よんだら。'], 0),
      fillJ('«Dopo aver mangiato»: たべた ___ で', ['あと'], 'あとで.'),
      listen('ねる まえに はを みがきます。', 'ja', 'Quando si lava i denti?', ['Prima di dormire', 'Dopo aver dormito', 'Dopo colazione', 'A pranzo'], 0)
    ],
    cards: [
      card('c1', 'esperienza', '[経験|けいけん]', '', 'けいけん'), card('c2', 'compito', '[宿題|しゅくだい]', '', 'しゅくだい'), card('c3', 'film', '[映画|えいが]', '', 'えいが'), card('c4', 'passeggiata', '[散歩|さんぽ]', '', 'さんぽ'),
      card('c5', 'prima di', '～まえに', '', 'まえに'), card('c6', 'dopo', '～あとで', '', 'あとで'), card('c7', 'denti', '[歯|は]', '', 'は'), card('c8', 'viaggio', '[旅行|りょこう]', '', 'りょこう')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Un viaggio in Giappone', text: 'わたしは にほんへ にかい いった ことが あります。さいしょは とうきょうで すしを たべたり、ふるい おてらを みたり しました。にかいめは きょうとへ いきました。ふじさんには まだ のぼった ことが ありません。',
      qs: [{ q: 'Quante volte è stato in Giappone?', o: ['Una', 'Due', 'Tre', 'Mai'], a: 1, kind: 'explicit' }, { q: 'Che cosa ha fatto la prima volta?', o: ['Mangiato sushi e visto un tempio', 'Scalato il Fuji', 'Lavorato', 'Studiato'], a: 0, kind: 'explicit' }, { q: 'Che cosa non ha ancora fatto?', o: ['Scalato il Fuji', 'Visitato Kyoto', 'Mangiato sushi', 'Visto un tempio'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'にほんへ いった ことが あります', lang: 'ja' }, { text: 'ねる まえに はを みがきます', lang: 'ja' }, { text: 'たべた あとで さんぽします', lang: 'ja' }],
    shadowing: [{ text: 'にほんへ いった ことが あります。', lang: 'ja', tip: 'こと が あり ま す: ritmo regolare.' }, { text: 'すしを たべたり、おてらを みたり しました。', lang: 'ja', tip: 'Ripetizione ritmica di ～たり.' }, { text: 'ふじさんに のぼった ことが ありません。', lang: 'ja', tip: 'Negazione: ありません chiaro.' }],
    speaking: [{ prompt: 'Racconta un viaggio che hai fatto: dove, che cosa hai fatto (～たり～たり).', model: 'きょねん ローマへ いきました。ピザを たべたり、こうえんを さんぽしたり しました。' }, { prompt: 'Di’ una cosa che non hai mai fatto ma vorresti fare.', model: 'ふじさんに のぼった ことが ありませんが、のぼりたいです。' }]
  });

  addTopic({
    id: 'jpn-j3-reasons-contrast', subject: 'jpn', stage: 'J3', title: 'Ragioni, contrasto e probabilità', minutes: 20, prereq: ['jpn-j3-past-experience'],
    summary: 'から, ので, けど/が, のに, ～かもしれません, ～でしょう.',
    objectives: ['Spiegare motivi con から e ので', 'Esprimere contrasto', 'Dire cosa è probabile o possibile'],
    pages: [
      { h: 'Obiettivo', b: 'Per conversare serve spiegare **perché** e dire **ma**. Qui impari le congiunzioni più frequenti e come esprimere un grado di probabilità.' },
      { h: 'Causa: から e ので', b: '- **～から**: «perché», motivo soggettivo; la frase causale precede la conseguenza. {{ja|[雨|あめ]が [降|ふ]って いるから、[行|い]きません。}}\n- **～ので**: più oggettivo e gentile; richiede la forma semplice (nomi e な-agg. con **な**): {{ja|[雨|あめ]が [降|ふ]って いるので、[行|い]きません。}} / {{ja|[静|しず]かなので、[好|す]きです。}}\n\nRisposta a un perché: {{ja|どうして ですか。}} → {{ja|～からです。}} {{ja|[忙|いそが]しいからです。}}\n\nIn conversazione cortese ので suona più riguardoso di から nelle scuse e nei rifiuti.' },
      { h: 'Contrasto', b: '- **が / けど**: «ma». {{ja|[日本語|にほんご]は [難|むずか]しいですが、おもしろいです。}} けど è più colloquiale.\n- **のに**: «nonostante», con tono di sorpresa o disappunto. {{ja|[勉強|べんきょう]したのに、[試験|しけん]に [落|お]ちました。}}\n\nAttenzione: **が** come «ma» (congiunzione) è diversa da **が** soggetto.\n\nAltre congiunzioni: {{ja|でも}} (ma, all’inizio della frase), {{ja|それで}} (perciò), {{ja|だから}} (perciò).' },
      { h: 'Probabilità', b: '- **～かもしれません**: «potrebbe essere». {{ja|[明日|あした]は [雨|あめ]が [降|ふ]るかも しれません。}}\n- **～でしょう**: «probabilmente / vero?». {{ja|[明日|あした]は [晴|は]れでしょう。}}\n- **～と [思|おも]います**: «penso che».\n\nScala di certezza: {{ja|～です}} (certo) > {{ja|～でしょう}} (probabile) > {{ja|～かも しれません}} (possibile).' },
      { h: 'Esempio guidato', b: 'Rifiuta un invito con garbo: *Mi dispiace, domani ho il lavoro, perciò non posso. Forse sabato è possibile.*\n\n- {{ja|すみません、[明日|あした]は [仕事|しごと]が あるので、[行|い]けません。}}\n- {{ja|[土曜日|どようび]なら [大丈夫|だいじょうぶ]かも しれません。}}\n\nControllo: ので + forma semplice (ある), poi la conseguenza; かも しれません attenua la proposta.' },
      { h: 'Errori comuni', b: '- *しずかなから* → {{ja|しずかだから / しずかなので。}}\n- *あめだので* → {{ja|あめなので / あめだから。}}\n- Mettere la conseguenza prima della causa con から senza cambiare ordine: la causa va prima (a meno che si risponda a どうして).\n- Usare **が** soggetto al posto di **が** contrastivo.\n- *かもしれませんでした* per il futuro: non esiste così; usa かもしれません.' },
      { h: 'Riepilogo', b: '- から / ので = perché; ので + semplice (な per nomi/な-agg.).\n- が / けど = ma; のに = nonostante (sorpresa).\n- かもしれません (possibile), でしょう (probabile).' }
    ],
    exercises: [
      mc('«Non vado perché piove» (più gentile):', ['あめが ふっているので いきません。', 'あめが ふってますから いきたい。', 'あめで いかないので です。', 'あめが ふる いきません。'], 0),
      mc('Quale particella si usa dopo un な-agg. con ので?', ['な', 'の', 'だ', 'に'], 0),
      mc('«Ho studiato, eppure non ho capito» (sorpresa):', ['べんきょうしたのに、わかりませんでした。', 'べんきょうしたから、わかりませんでした。', 'べんきょうしたので、わかりませんでした。', 'べんきょうしたら、わかりませんでした。'], 0),
      fillJ('Completa: どうして ですか。— いそがしい___ です。', ['から'], 'Risposta a どうして: から.'),
      mc('Quale è più certo?', ['あしたは はれでしょう', 'あしたは はれかも しれません', 'あしたは はれです', 'Tutte uguali'], 2),
      listen('あしたは あめが ふるかも しれません。', 'ja', 'Che cosa significa?', ['Domani forse pioverà', 'Domani pioverà di sicuro', 'Ieri è piovuto', 'Non pioverà'], 0),
      mc('Che cosa significa «でも»?', ['ma', 'perciò', 'e', 'anche'], 0)
    ],
    test: [
      mc('Per riferirsi al motivo con garbo si preferisce…', ['ので', 'のに', 'でも', 'たり'], 0),
      mc('«Penso che sia sano»:', ['けんこうだと おもいます。', 'けんこうですと おもいます。', 'けんこうな おもいます。', 'けんこうが おもいます。'], 0),
      fillJ('Completa: あしたは てんきが いい___ しれません。(forse)', ['かも'], 'かも しれません.'),
      mc('Quale frase esprime sorpresa/delusione?', ['べんきょうしたのに、わかりません。', 'べんきょうしたので、わかります。', 'べんきょうしたから、わかります。', 'べんきょうして わかります。'], 0)
    ],
    cards: [
      card('c1', 'perché', 'どうして', '', 'どうして'), card('c2', 'perciò', 'だから', '', 'だから'), card('c3', 'però', 'でも', '', 'でも'), card('c4', 'forse', 'かもしれません', '', 'かもしれません'),
      card('c5', 'occupato', '[忙|いそが]しい', '', 'いそがしい'), card('c6', 'esame', '[試験|しけん]', '', 'しけん'), card('c7', 'lavoro', '[仕事|しごと]', '', 'しごと'), card('c8', 'sereno', '[晴|は]れ', '', 'はれ')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Un invito rifiutato', text: 'すみません、あしたの パーティーには いけません。あしたは しごとが あるので、おそく なるかもしれません。でも、どようびなら だいじょうぶだと おもいます。どようびに あいませんか。',
      qs: [{ q: 'Perché non può andare alla festa?', o: ['Ha lavoro', 'È malato', 'Non gli piace', 'È fuori città'], a: 0, kind: 'explicit' }, { q: 'Che cosa propone?', o: ['Vedersi sabato', 'Vedersi domenica', 'Vedersi domani', 'Annullare'], a: 0, kind: 'explicit' }, { q: 'Il parlante è sicuro di sabato?', o: ['Quasi, ma non del tutto', 'Sì, assolutamente', 'No, per niente', 'Non parla di sabato'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'あしたは しごとが あるので いけません', lang: 'ja' }, { text: 'べんきょうしたのに わかりません', lang: 'ja' }, { text: 'あしたは あめが ふるかも しれません', lang: 'ja' }],
    shadowing: [{ text: 'あしたは しごとが あるので、いけません。', lang: 'ja', tip: 'Pausa breve dopo ので, tono dispiaciuto.' }, { text: 'にほんごは むずかしいですが、おもしろいです。', lang: 'ja', tip: 'が = ma: intonazione sospesa.' }, { text: 'どようびなら だいじょうぶかも しれません。', lang: 'ja', tip: 'Tono incerto su かも しれません.' }],
    speaking: [{ prompt: 'Rifiuta un invito con garbo spiegando il motivo e proponendo un altro giorno.', model: 'すみません、あしたは いそがしいので いけません。でも、どようびなら だいじょうぶかも しれません。' }, { prompt: 'Di’ un motivo per cui ti piace studiare giapponese.', model: 'おもしろいから、にほんごが すきです。' }]
  });
})(window.ST = window.ST || {});
