/* Giapponese — ampliamento stage J4 (condizioni e potenziale). */
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
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J4', minutes: 20, prereq: ['jpn-j3-reasons-contrast'] }, o));

  T({ id: 'jpn-j4-passive', title: 'La forma passiva: ～れる / ～られる', summary: 'Passivo diretto, passivo di disagio, passivo con le cose.',
    objectives: ['Formare il passivo dei tre gruppi di verbi', 'Distinguere passivo diretto e indiretto (di disagio)', 'Indicare l’agente con に / によって'],
    pages: [
      { h: 'Obiettivo', b: 'Il passivo giapponese ha un uso più ampio dell’italiano: serve a dire che **si subisce un’azione**, anche in modo indiretto (disagio). Imparare la forma e le sfumature è essenziale per leggere e capire il parlato.' },
      { h: 'Come si forma', b: '- **Gruppo 2**: radice + **られる**: {{ja|[食|た]べる}} → {{ja|[食|た]べられる}}, {{ja|[見|み]る}} → {{ja|[見|み]られる}}\n- **Gruppo 1**: u → **a + れる**: {{ja|[書|か]く}} → {{ja|[書|か]かれる}}, {{ja|[読|よ]む}} → {{ja|[読|よ]まれる}}, {{ja|[言|い]う}} → {{ja|[言|い]われる}}\n- **Gruppo 3**: {{ja|する}} → {{ja|される}}, {{ja|[来|く]る}} → {{ja|[来|こ]られる}}\n\nIl verbo passivo si coniuga come un verbo del gruppo 2 (*たべられます*, *たべられました*).' },
      { h: 'Passivo diretto', b: '**A は B に + passivo** = A è … da B:\n- {{ja|わたしは [先生|せんせい]に ほめられました。}} (sono stato lodato dall’insegnante)\n- {{ja|この [本|ほん]は [多|おお]くの [人|ひと]に [読|よ]まれて います。}} (molte persone leggono questo libro)\n\nCon cose: {{ja|この [橋|はし]は 1990[年|ねん]に [作|つく]られました。}} (costruito nel 1990)\nAgente non umano/creativo: **によって**: {{ja|この [絵|え]は [有名|ゆうめい]な [画家|がか]に よって [描|か]かれました。}}' },
      { h: 'Passivo di disagio', b: 'Il giapponese usa il passivo anche per eventi che **disturbano il soggetto** (anche senza oggetto diretto):\n- {{ja|[雨|あめ]に [降|ふ]られました。}} (mi è piovuto addosso)\n- {{ja|[友達|ともだち]に [来|こ]られて [困|こま]りました。}} (mi è arrivato un amico e ho avuto un problema)\n- {{ja|[電車|でんしゃ]で [足|あし]を [踏|ふ]まれました。}} (mi hanno pestato il piede)\n\nQuesto uso non ha un equivalente diretto in italiano.' },
      { h: 'Esempio guidato', b: 'Racconta: *In treno mi hanno pestato il piede; poi sono stato rimproverato dal capo per il ritardo.*\n\n→ {{ja|[電車|でんしゃ]で [足|あし]を [踏|ふ]まれました。それから [遅刻|ちこく]して [上司|じょうし]に [叱|しか]られました。}}\n\nControllo: forme passive 踏まれる, 叱られる; agente con に.' },
      { h: 'Errori comuni', b: '- *ほめるられる* → {{ja|ほめられる。}} (る cade)\n- *かくられる* → {{ja|かかれる。}} (gruppo 1)\n- Usare il passivo dove l’italiano userebbe l’attivo senza disagio.\n- Dimenticare に per l’agente.\n- *こられる* può essere anche potenziale: il contesto decide.' },
      { h: 'Riepilogo', b: '- G2: ～られる; G1: ～a + れる; G3: される / こられる.\n- Passivo diretto: A は B に ～られる.\n- Passivo di disagio: 雨に降られた.\n- によって per autore di opere.' }
    ],
    exercises: [
      mc('Passivo di ほめる:', ['ほめられる', 'ほめれる', 'ほめさせる', 'ほめされる'], 0),
      mc('Passivo di 書く:', ['かかれる', 'かけられる', 'かきられる', 'かかせる'], 0),
      mc('Passivo di する:', ['される', 'しられる', 'すれる', 'させる'], 0),
      mc('«Sono stato lodato dall’insegnante»:', ['せんせいに ほめられました。', 'せんせいを ほめられました。', 'せんせいが ほめられました。', 'せんせいで ほめます。'], 0),
      mc('«Mi è piovuto addosso»:', ['あめに ふられました。', 'あめが ふりました。', 'あめを ふられました。', 'あめで ふらせました。'], 0),
      listen('このはしは せんきゅうひゃくきゅうじゅうねんに つくられました。', 'ja', 'Che cosa dice?', ['Il ponte è stato costruito nel 1990', 'Il ponte sarà costruito', 'Il ponte è crollato', 'Il ponte è vecchio'], 0),
      fillJ('Completa: せんせいに ほめ___ ました。(passivo)', ['られ'], 'ほめられました.')
    ],
    test: [
      mc('Passivo di 食べる:', ['たべられる', 'たべれる', 'たべさせる', 'たべる'], 0),
      mc('Passivo di 言う:', ['いわれる', 'いえる', 'いいられる', 'いわせる'], 0),
      mc('Quale particella indica l’agente?', ['に', 'を', 'は', 'も'], 0),
      mc('«Passivo di disagio» è…', ['subire un evento che ci disturba', 'compiere un’azione', 'una richiesta', 'una domanda'], 0)
    ],
    cards: [card('c1', 'essere lodato', 'ほめられる', '', 'ほめられる'), card('c2', 'essere rimproverato', '[叱|しか]られる', '', 'しかられる'), card('c3', 'essere pestato', '[踏|ふ]まれる', '', 'ふまれる'), card('c4', 'essere costruito', '[作|つく]られる', '', 'つくられる'),
      card('c5', 'essere letto', '[読|よ]まれる', '', 'よまれる'), card('c6', 'essere detto', '[言|い]われる', '', 'いわれる'), card('c7', 'ritardo', '[遅刻|ちこく]', '', 'ちこく'), card('c8', 'capo', '[上司|じょうし]', '', 'じょうし')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Una brutta giornata', text: 'きょうは さんざんでした。あめに ふられて、でんしゃで あしを ふまれて、ちこくして じょうしに しかられました。でも ゆうがた ともだちに ほめられて、すこし げんきに なりました。',
      qs: [{ q: 'Che cosa gli è successo in treno?', o: ['Gli hanno pestato il piede', 'Ha perso il portafoglio', 'Ha dormito', 'Ha incontrato un amico'], a: 0, kind: 'explicit' }, { q: 'Perché è stato rimproverato?', o: ['Per il ritardo', 'Per un errore', 'Per un’assenza', 'Per una telefonata'], a: 0, kind: 'explicit' }, { q: 'Che cosa lo ha rallegrato?', o: ['Essere lodato da un amico', 'Un regalo', 'Il cibo', 'Il sole'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'せんせいに ほめられました', lang: 'ja' }, { text: 'あめに ふられました', lang: 'ja' }, { text: 'この ほんは おおくの ひとに よまれて います', lang: 'ja' }],
    shadowing: [{ text: 'せんせいに ほめられました。', lang: 'ja', tip: 'ほめられ: ほ・め・ら・れ.' }, { text: 'あめに ふられました。', lang: 'ja', tip: 'Tono lamentoso.' }, { text: 'じょうしに しかられました。', lang: 'ja', tip: 'Ritmo regolare.' }],
    speaking: [{ prompt: 'Racconta una giornata in cui ti sono successe cose spiacevoli usando il passivo.', model: 'きょうは あめに ふられました。でんしゃで あしを ふまれました。じょうしに しかられました。' }, { prompt: 'Dì una cosa per cui sei stato lodato.', model: 'せんせいに にほんごが じょうずだと ほめられました。' }] });

  T({ id: 'jpn-j4-causative', title: 'La forma causativa: ～せる / ～させる', summary: 'Far fare / lasciar fare; causativo-passivo.',
    objectives: ['Formare il causativo dei tre gruppi', 'Usare を e に con il causativo', 'Capire il causativo-passivo'],
    pages: [
      { h: 'Obiettivo', b: 'Il **causativo** esprime che qualcuno **fa fare** o **lascia fare** qualcosa a un altro. È molto usato in famiglia, al lavoro e a scuola. Il **causativo-passivo** significa «essere costretto a fare».' },
      { h: 'Come si forma', b: '- **Gruppo 2**: radice + **させる**: {{ja|[食|た]べる}} → {{ja|[食|た]べさせる}}\n- **Gruppo 1**: u → **a + せる**: {{ja|[書|か]く}} → {{ja|[書|か]かせる}}, {{ja|[行|い]く}} → {{ja|[行|い]かせる}}, {{ja|[待|ま]つ}} → {{ja|[待|ま]たせる}}\n- **Gruppo 3**: {{ja|する}} → {{ja|させる}}, {{ja|[来|く]る}} → {{ja|[来|こ]させる}}\n\nIl risultato si coniuga come un verbo del gruppo 2.' },
      { h: 'Particelle: を e に', b: '- Verbo **intransitivo** → chi agisce con **を**: {{ja|[子供|こども]を [泣|な]かせました。}} (ho fatto piangere il bambino)\n- Verbo **transitivo** → chi agisce con **に**, l’oggetto con **を**: {{ja|[母|はは]は [子供|こども]に [野菜|やさい]を [食|た]べさせます。}} (la madre fa mangiare le verdure al bambino)\n\nSfumature: **imposizione** o **permesso** secondo il contesto: {{ja|[好|す]きに [選|えら]ばせて ください。}} (lasciatemi scegliere).' },
      { h: 'Richieste con ～させてください', b: '**～させて ください** = lasciami fare:\n- {{ja|[私|わたし]に [説明|せつめい]させて ください。}}\n- {{ja|[今日|きょう]は [早|はや]く [帰|かえ]らせて いただけませんか。}} (mi lascia tornare presto?)\n\nÈ una richiesta umile molto comune al lavoro.' },
      { h: 'Causativo-passivo', b: '**～させられる** = essere costretto a:\n- {{ja|[子供|こども]の [頃|ころ]、[母|はは]に [野菜|やさい]を [食|た]べさせられました。}}\n- {{ja|[上司|じょうし]に [残業|ざんぎょう]させられました。}}\n\nForma: causativo + passivo; gruppo 1 spesso abbreviato: *かかされる* → *かかせられる*.' },
      { h: 'Esempio guidato', b: 'Racconta: *Da piccolo mia madre mi faceva mangiare le verdure. Oggi al lavoro il capo mi ha fatto fare gli straordinari. Mi lascia partire presto?*\n\n→ {{ja|[子供|こども]の [頃|ころ]、[母|はは]に [野菜|やさい]を [食|た]べさせられました。[今日|きょう]は [上司|じょうし]に [残業|ざんぎょう]させられました。[早|はや]く [帰|かえ]らせて いただけませんか。}}' },
      { h: 'Errori comuni', b: '- *たべるせる* → {{ja|たべさせる。}}\n- Confondere を/に: transitivo → に.\n- *いかせられる* vs *いかされる* (variante gruppo 1).\n- Usare il causativo con i superiori senza ～ていただけませんか.\n- Non distinguere permesso e imposizione.' },
      { h: 'Riepilogo', b: '- G2: ～させる; G1: ～a + せる; G3: させる / こさせる.\n- Intransitivo → を; transitivo → に.\n- ～させてください: chiedere il permesso.\n- ～させられる: essere costretti.' }
    ],
    exercises: [
      mc('Causativo di 食べる:', ['たべさせる', 'たべられる', 'たべせる', 'たべらせる'], 0),
      mc('Causativo di 書く:', ['かかせる', 'かきせる', 'かけさせる', 'かかされる'], 0),
      mc('Causativo di する:', ['させる', 'せせる', 'しさせる', 'されさせる'], 0),
      mc('«Fa mangiare le verdure al bambino»:', ['こどもに やさいを たべさせます。', 'こどもを やさいに たべさせます。', 'こどもが やさいを たべます。', 'こどもで やさいを。'], 0),
      mc('«Mi lasci tornare presto?»', ['はやく かえらせて いただけませんか。', 'はやく かえしてください。', 'はやく かえります。', 'はやく かえった。'], 0),
      listen('ははに やさいを たべさせられました。', 'ja', 'Che cosa significa?', ['Mia madre mi ha costretto a mangiare le verdure', 'Mia madre mangia verdura', 'Ho cucinato per mia madre', 'Mi piace la verdura'], 0),
      fillJ('Completa: ～させ___ ください。(lasciami)', ['て'], 'させて ください.')
    ],
    test: [
      mc('«させられる» significa…', ['essere costretto a fare', 'fare qualcosa per sé', 'lasciare fare', 'dimenticare'], 0),
      mc('Causativo di 行く:', ['いかせる', 'いきせる', 'いけさせる', 'いかされる'], 0),
      mc('«私に 説明させて ください»', ['Mi lasci spiegare', 'Spiego per te', 'Spiegatemi', 'Non spiego'], 0),
      mc('Con un verbo transitivo, chi esegue l’azione prende…', ['に', 'を', 'は', 'が'], 0)
    ],
    cards: [card('c1', 'far mangiare', '[食|た]べさせる', '', 'たべさせる'), card('c2', 'far piangere', '[泣|な]かせる', '', 'なかせる'), card('c3', 'lasciami fare', '～させてください', '', 'させてください'), card('c4', 'essere costretto a mangiare', '[食|た]べさせられる', '', 'たべさせられる'),
      card('c5', 'straordinari', '[残業|ざんぎょう]', '', 'ざんぎょう'), card('c6', 'verdura', 'やさい', '', 'やさい'), card('c7', 'spiegare', '[説明|せつめい]する', '', 'せつめいする'), card('c8', 'da bambino', '[子供|こども]の[頃|ころ]', '', 'こどものころ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al lavoro', text: 'こどもの ころ、ははに やさいを たべさせられました。きょうは じょうしに ざんぎょうさせられました。すみません、あしたは はやく かえらせて いただけませんか。わたしに せつめいさせて ください。',
      qs: [{ q: 'Che cosa gli faceva fare la madre?', o: ['Mangiare le verdure', 'Studiare', 'Lavarsi', 'Pulire'], a: 0, kind: 'explicit' }, { q: 'Che cosa gli ha fatto fare il capo oggi?', o: ['Gli straordinari', 'Una presentazione', 'Un viaggio', 'Una pausa'], a: 0, kind: 'explicit' }, { q: 'Che cosa chiede per domani?', o: ['Di tornare presto', 'Di restare', 'Di partire', 'Un giorno di ferie'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'こどもに やさいを たべさせます', lang: 'ja' }, { text: 'はやく かえらせて ください', lang: 'ja' }, { text: 'わたしに せつめいさせて ください', lang: 'ja' }],
    shadowing: [{ text: 'こどもに やさいを たべさせます。', lang: 'ja', tip: 'さ・せ・ま・す.' }, { text: 'はやく かえらせて いただけませんか。', lang: 'ja', tip: 'Richiesta umile: tono morbido.' }, { text: 'ざんぎょうさせられました。', lang: 'ja', tip: 'Costrizione: tono stanco.' }],
    speaking: [{ prompt: 'Chiedi al capo di poter fare qualcosa (andare via presto, spiegare) con ～させてください.', model: 'すみません、きょうは はやく かえらせて いただけませんか。この けんは わたしに せつめいさせて ください。' }, { prompt: 'Racconta una cosa che ti hanno costretto a fare da piccolo.', model: 'こどもの ころ、ははに ピアノを ならわせられました。まいにち れんしゅうさせられました。' }] });

  T({ id: 'jpn-j4-volitional', title: 'Forma volitiva e intenzione: ～よう, ～ようと思う, ～ようにする', summary: 'Esprimere intenzioni, tentativi e abitudini con la forma よう.',
    objectives: ['Formare la forma volitiva (～よう/～おう)', 'Usare ～ようと思う / ～ようとする', 'Usare ～ようにする / ～ようになる'],
    pages: [
      { h: 'Obiettivo', b: 'La **forma volitiva** (*facciamo!*, *voglio fare*) e le espressioni con **よう** permettono di parlare di intenzioni, tentativi e cambiamenti di abitudine in modo naturale.' },
      { h: 'Forma volitiva', b: '- **Gruppo 2**: radice + **よう**: {{ja|[食|た]べよう}}, {{ja|[見|み]よう}}\n- **Gruppo 1**: u → **o + う**: {{ja|[行|い]こう}}, {{ja|[飲|の]もう}}, {{ja|[書|か]こう}}, {{ja|[話|はな]そう}}\n- **Gruppo 3**: {{ja|しよう}}, {{ja|[来|こ]よう}}\n\nInformale: *andiamo!*; cortese: ～ましょう.' },
      { h: '～ようと思う', b: '**volitiva + と思います/思っています** = penso di (decisione presa ora / in corso):\n- {{ja|[来年|らいねん]、[日本|にほん]へ [行|い]こうと [思|おも]います。}}\n- {{ja|[毎日|まいにち] [運動|うんどう]しようと [思|おも]って います。}}\n\nDifferenza con つもり: ようと思う è più morbido, decisione ancora non definitiva.' },
      { h: '～ようとする / ～ようにする / ～ようになる', b: '- **～ようとする** = cercare di / essere sul punto di: {{ja|ドアを [開|あ]けようと しました。}} / {{ja|[電車|でんしゃ]が [出|で]ようと して いる。}}\n- **～ようにする** = cercare di (abitudine): {{ja|[毎日|まいにち] [野菜|やさい]を [食|た]べるように して います。}}\n- **～ようになる** = arrivare a poter/fare (cambiamento): {{ja|[日本語|にほんご]が [話|はな]せるように なりました。}}\n- **～ように** = affinché: {{ja|[忘|わす]れないように、メモします。}}' },
      { h: 'Esempio guidato', b: 'Racconta: *Ho deciso di imparare il giapponese. Cerco di studiare ogni giorno. Finalmente riesco a parlare un po’.*\n\n→ {{ja|[日本語|にほんご]を [勉強|べんきょう]しようと [思|おも]いました。[毎日|まいにち] [勉強|べんきょう]するように して います。すこし [話|はな]せるように なりました。}}\n\nControllo: ようと思う (intenzione), ようにする (abitudine), ようになる (cambiamento).' },
      { h: 'Errori comuni', b: '- *たべるよう* → {{ja|たべよう。}} (G2).\n- Confondere *ようにする* (impegno) e *ことにする* (decisione).\n- Usare ようと思う per terze persone senza *ている*.\n- *いこう* per «andiamo»: informale.\n- Dimenticare **ように** dopo forma potenziale per «arrivare a».' },
      { h: 'Riepilogo', b: '- G2: よう; G1: ～o + う; G3: しよう / こよう.\n- ようと思う: intenzione.\n- ようにする: abitudine; ようになる: cambiamento.\n- ように: affinché.' }
    ],
    exercises: [
      mc('Forma volitiva di 食べる:', ['たべよう', 'たべおう', 'たべる', 'たべさせよう'], 0),
      mc('Forma volitiva di 行く:', ['いこう', 'いくよう', 'いきよう', 'いかよう'], 0),
      mc('«Penso di andare in Giappone»:', ['にほんへ いこうと おもいます。', 'にほんへ いくように おもいます。', 'にほんへ いきたい を。', 'にほんへ いっている。'], 0),
      mc('«Riesco a parlare giapponese ora» (cambiamento):', ['にほんごが はなせるように なりました。', 'にほんごが はなそうと しました。', 'にほんごを はなすことにしました。', 'にほんごが はなしている。'], 0),
      mc('«Prendo appunti per non dimenticare»:', ['わすれないように メモします。', 'わすれようと メモします。', 'わすれて メモします。', 'わすれると メモします。'], 0),
      listen('まいにち やさいを たべるように しています。', 'ja', 'Che cosa dice?', ['Cerca di mangiare verdura ogni giorno', 'Non mangia verdura', 'Mangia solo verdura', 'Ha smesso'], 0),
      fillJ('Completa: まいにち うんどうしよう___ おもっています。', ['と'], 'ようと おもう.')
    ],
    test: [
      mc('Forma volitiva di する:', ['しよう', 'すよう', 'せよう', 'しるよう'], 0),
      mc('«ようになる» indica…', ['un cambiamento', 'un obbligo', 'una proibizione', 'un desiderio'], 0),
      mc('«ドアを あけようと しました» significa…', ['Ho cercato di aprire la porta', 'Ho aperto la porta', 'Non ho aperto', 'Apro la porta'], 0),
      mc('Differenza: ようにする indica…', ['uno sforzo abituale', 'una decisione una tantum', 'un divieto', 'un permesso'], 0)
    ],
    cards: [card('c1', 'mangiamo / mangerò', '[食|た]べよう', '', 'たべよう'), card('c2', 'andiamo', '[行|い]こう', '', 'いこう'), card('c3', 'penso di…', '～ようと[思|おも]う', '', 'ようとおもう'), card('c4', 'cercare di (abitudine)', '～ようにする', '', 'ようにする'),
      card('c5', 'arrivare a (cambiamento)', '～ようになる', '', 'ようになる'), card('c6', 'affinché', '～ように', '', 'ように'), card('c7', 'appunto', 'メモ', '', 'めも'), card('c8', 'abitudine', '[習慣|しゅうかん]', '', 'しゅうかん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Buoni propositi', text: 'らいねん にほんへ いこうと おもっています。まいにち にほんごを べんきょうするように しています。さいきん すこし はなせるように なりました。わすれないように、まいにち メモします。',
      qs: [{ q: 'Che cosa pensa di fare l’anno prossimo?', o: ['Andare in Giappone', 'Cambiare lavoro', 'Studiare inglese', 'Sposarsi'], a: 0, kind: 'explicit' }, { q: 'Che cosa è cambiato recentemente?', o: ['Riesce a parlare un po’', 'Ha smesso di studiare', 'Ha un nuovo lavoro', 'Ha perso i libri'], a: 0, kind: 'explicit' }, { q: 'Perché prende appunti?', o: ['Per non dimenticare', 'Per il lavoro', 'Per un esame', 'Per scrivere un diario'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'にほんへ いこうと おもっています', lang: 'ja' }, { text: 'まいにち べんきょうするように しています', lang: 'ja' }, { text: 'はなせるように なりました', lang: 'ja' }],
    shadowing: [{ text: 'にほんへ いこうと おもっています。', lang: 'ja', tip: 'いこう: i・ko・o.' }, { text: 'べんきょうするように しています。', lang: 'ja', tip: 'ように: yo・o・ni.' }, { text: 'はなせるように なりました。', lang: 'ja', tip: 'Soddisfazione: tono positivo.' }],
    speaking: [{ prompt: 'Dì tre propositi per il prossimo anno usando ようと思う, ようにする, ようになる.', model: 'らいねん にほんへ いこうと おもいます。まいにち にほんごを べんきょうするように します。はなせるように なりたいです。' }, { prompt: 'Racconta una cosa che ora riesci a fare e prima non riuscivi.', model: 'まえは かんじが よめませんでしたが、いまは よめるように なりました。' }] });

  T({ id: 'jpn-j4-kanji-4', title: 'Kanji 4: lavoro, comunicazione e idee', summary: '50 kanji di lavoro, comunicazione e pensiero astratto.',
    objectives: ['Riconoscere 50 kanji del lavoro e della comunicazione', 'Leggere parole composte comuni', 'Capire testi lavorativi semplici'],
    pages: [
      { h: 'Obiettivo', b: 'Con questi kanji comincia la lettura di **testi più astratti**: lavoro, comunicazione, pensiero. Sono molto frequenti in notizie, email e documenti.' },
      { h: 'Lavoro', b: '- {{ja|[会社|かいしゃ]}} azienda, {{ja|[社員|しゃいん]}} dipendente, {{ja|[仕事|しごと]}} lavoro, {{ja|[事|こと]}} cosa/fatto, {{ja|[用事|ようじ]}} impegno\n- {{ja|[部|ぶ]}} reparto, {{ja|[課|か]}} ufficio, {{ja|[長|ちょう]}} capo: {{ja|[社長|しゃちょう]}}, {{ja|[部長|ぶちょう]}}\n- {{ja|[会議|かいぎ]}} riunione, {{ja|[報告|ほうこく]}} rapporto, {{ja|[相談|そうだん]}} consulto, {{ja|[予定|よてい]}} programma' },
      { h: 'Comunicazione', b: '- {{ja|[言|い]う}} dire, {{ja|[話|はな]す}} parlare, {{ja|[聞|き]く}} ascoltare/chiedere, {{ja|[答|こた]える}} rispondere, {{ja|[質問|しつもん]}} domanda\n- {{ja|[説明|せつめい]}} spiegazione, {{ja|[意見|いけん]}} opinione, {{ja|[発表|はっぴょう]}} presentazione, {{ja|[連絡|れんらく]}} contatto\n- {{ja|[手紙|てがみ]}} lettera, {{ja|[送|おく]る}} inviare, {{ja|[返事|へんじ]}} risposta' },
      { h: 'Pensiero e conoscenza', b: '- {{ja|[思|おも]う}} pensare, {{ja|[考|かんが]える}} riflettere, {{ja|[知|し]る}} sapere, {{ja|[教|おし]える}} insegnare, {{ja|[習|なら]う}} imparare\n- {{ja|[理由|りゆう]}} motivo, {{ja|[問題|もんだい]}} problema, {{ja|[研究|けんきゅう]}} ricerca, {{ja|[勉強|べんきょう]}} studio\n- {{ja|[多|おお]い}} molto, {{ja|[少|すく]ない}} poco, {{ja|[新|あたら]しい}} nuovo, {{ja|[同|おな]じ}} uguale' },
      { h: 'Strategie', b: '1. Leggi i composti come **unità** (問題, 報告).\n2. I composti hanno spesso lettura **on**; i verbi **kun** con okurigana.\n3. Riconosci i pattern: ～する (nome+する), ～的, ～者.\n4. Quando un kanji è sconosciuto, deduci dai componenti.\n5. Rivedi con le carte e con testi brevi.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[部長|ぶちょう]は [会議|かいぎ]で [意見|いけん]を [発表|はっぴょう]しました。[問題|もんだい]の [理由|りゆう]に ついて [説明|せつめい]して、[質問|しつもん]に [答|こた]えました。}}\n\n→ *Il responsabile ha presentato la sua opinione in riunione. Ha spiegato il motivo del problema e ha risposto alle domande.*' },
      { h: 'Errori comuni', b: '- Confondere 社 e 会.\n- Leggere 長 come *ながい* nei composti (ちょう).\n- Confondere 聞 (ascoltare/chiedere) con 問 (domanda).\n- Non distinguere 教 e 習.\n- Ignorare le okurigana.' },
      { h: 'Riepilogo', b: '- 50 kanji: lavoro, comunicazione, idee.\n- Composti con letture on.\n- Pattern: ～する, ～者, ～的.\n- Pratica con testi brevi e carte.' }
    ],
    exercises: [
      mc('Come si legge 会議?', ['かいぎ', 'えぎ', 'かいき', 'あいぎ'], 0),
      mc('Come si legge 質問?', ['しつもん', 'じつもん', 'しつぶん', 'ぎもん'], 0),
      mc('Come si legge 意見?', ['いけん', 'いみ', 'いげん', 'おもいみ'], 0),
      mc('Come si legge 問題?', ['もんだい', 'といだい', 'もんたい', 'とえだい'], 0),
      fillJ('Come si legge 説明?', ['せつめい', 'setsumei'], 'せつめい.'),
      mc('Che cosa significa 社長?', ['presidente d’azienda', 'dipendente', 'cliente', 'collega'], 0),
      mc('Come si legge 理由?', ['りゆう', 'ことわけ', 'りよう', 'りゅうゆう'], 0)
    ],
    test: [
      mc('Come si legge 報告?', ['ほうこく', 'ほこく', 'ほうごく', 'おくこく'], 0),
      mc('Come si legge 研究?', ['けんきゅう', 'けんきゅ', 'げんきゅう', 'けんぐう'], 0),
      mc('Come si legge 発表?', ['はっぴょう', 'ほっぴょう', 'はつひょう', 'はっぴょ'], 0),
      mc('«教える» e «習う» significano…', ['insegnare e imparare', 'imparare e insegnare', 'chiedere e rispondere', 'leggere e scrivere'], 0)
    ],
    cards: [card('c1', 'riunione', '[会議|かいぎ]', '', 'かいぎ'), card('c2', 'domanda', '[質問|しつもん]', '', 'しつもん'), card('c3', 'opinione', '[意見|いけん]', '', 'いけん'), card('c4', 'problema', '[問題|もんだい]', '', 'もんだい'),
      card('c5', 'spiegazione', '[説明|せつめい]', '', 'せつめい'), card('c6', 'rapporto', '[報告|ほうこく]', '', 'ほうこく'), card('c7', 'ricerca', '[研究|けんきゅう]', '', 'けんきゅう'), card('c8', 'motivo', '[理由|りゆう]', '', 'りゆう')],
    listening: [{ id: 'l1', lang: 'ja', title: 'La riunione', text: 'ぶちょうは かいぎで いけんを はっぴょうしました。もんだいの りゆうに ついて せつめいして、しつもんに こたえました。ほうこくは あしたまでに おくります。',
      qs: [{ q: 'Dove ha presentato la sua opinione?', o: ['In riunione', 'In ufficio privato', 'Al telefono', 'In mensa'], a: 0, kind: 'explicit' }, { q: 'Che cosa ha spiegato?', o: ['Il motivo del problema', 'Il budget', 'Il programma', 'Il viaggio'], a: 0, kind: 'explicit' }, { q: 'Entro quando si invia il rapporto?', o: ['Entro domani', 'Entro oggi', 'Entro venerdì', 'Entro stasera'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'かいぎで いけんを はっぴょうしました', lang: 'ja' }, { text: 'しつもんに こたえました', lang: 'ja' }, { text: 'ほうこくは あしたまでに おくります', lang: 'ja' }],
    shadowing: [{ text: 'かいぎで いけんを はっぴょうしました。', lang: 'ja', tip: 'はっぴょう: はっ・ぴょ・う.' }, { text: 'しつもんに こたえました。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'ほうこくは あしたまでに おくります。', lang: 'ja', tip: 'までに: scadenza.' }],
    speaking: [{ prompt: 'Spiega a un collega che cosa hai detto in riunione.', model: 'かいぎで いけんを はっぴょうしました。もんだいの りゆうを せつめいしました。しつもんにも こたえました。' }, { prompt: 'Chiedi a qualcuno una spiegazione su un problema.', model: 'すみません、この もんだいの りゆうを せつめいして いただけませんか。' }],
    reading: [{ id: 'r1', title: 'Rapporto breve', text: '[部長|ぶちょう]は [会議|かいぎ]で [意見|いけん]を [発表|はっぴょう]しました。[問題|もんだい]の [理由|りゆう]に ついて [説明|せつめい]して、[質問|しつもん]に [答|こた]えました。[報告|ほうこく]は [明日|あした]までに [送|おく]ります。',
      qs: [{ q: 'Chi ha presentato?', o: ['Il responsabile', 'Il dipendente', 'Il cliente', 'Il presidente'], a: 0 }, { q: 'Che cosa ha spiegato?', o: ['Il motivo del problema', 'Il budget', 'La vendita', 'Il programma'], a: 0 }, { q: 'Quando si invia il rapporto?', o: ['Entro domani', 'Oggi', 'Venerdì', 'La prossima settimana'], a: 0 }] }] });

  T({ id: 'jpn-j4-work-japanese', title: 'Giapponese al lavoro: saluti, rapporti e riunioni', summary: 'Formule d’ufficio, hō-ren-sō e frasi per riunioni.',
    objectives: ['Usare le formule di saluto in ufficio', 'Fare un rapporto breve (報告・連絡・相談)', 'Partecipare a una riunione con frasi cortesi'],
    pages: [
      { h: 'Obiettivo', b: 'Il giapponese d’ufficio ha formule di saluto e comunicazione molto codificate. Conoscerle ti permette di **inserirti** in un contesto lavorativo con cortesia.' },
      { h: 'Saluti d’ufficio', b: '- {{ja|おはようございます。}} / {{ja|おつかれさまです。}} (saluto tra colleghi durante il giorno)\n- {{ja|おさきに [失礼|しつれい]します。}} — vado via prima di voi\n- {{ja|[行|い]って まいります。}} / {{ja|ただいま [戻|もど]りました。}} (esco / sono tornato)\n- {{ja|よろしく おねがいします。}} (formula multiuso: affido a te)\n- {{ja|おせわに なって います。}} (grazie per il supporto continuo, nelle email e al telefono)' },
      { h: 'Hō-ren-sō', b: '**報告・連絡・相談** (rapporto, comunicazione, consultazione) sono i pilastri della comunicazione d’ufficio:\n- **報告** (ほうこく): {{ja|[報告|ほうこく]します。[先月|せんげつ]の [売上|うりあげ]は [十|じゅう]パーセント [増|ふ]えました。}}\n- **連絡** (れんらく): {{ja|[会議|かいぎ]の [時間|じかん]が [変|か]わりましたので、[ご連絡|ごれんらく]します。}}\n- **相談** (そうだん): {{ja|[少|すこ]し [相談|そうだん]したいことが あるのですが…}}' },
      { h: 'Frasi per le riunioni', b: '- {{ja|[資料|しりょう]を ごらんください。}} (guardi i documenti)\n- {{ja|[私|わたし]の [意見|いけん]を [申|もう]し[上|あ]げます。}}\n- {{ja|それに ついて [質問|しつもん]が あります。}}\n- {{ja|[賛成|さんせい]です。}} / {{ja|[反対|はんたい]です。}} / {{ja|[少|すこ]し [違|ちが]う [意見|いけん]です。}}\n- {{ja|[確認|かくにん]させて いただきます。}} (verifico)\n- {{ja|[検討|けんとう]して みます。}} (lo valuterò)' },
      { h: 'Rifiuti e richieste indirette', b: 'Nel contesto lavorativo si evita il «no» diretto:\n- {{ja|[難|むずか]しい かも しれません。}}\n- {{ja|[検討|けんとう]させて いただきます。}} (spesso = non è fattibile)\n- {{ja|[申|もう]し[訳|わけ]ありませんが…}}\n\nRichieste: {{ja|ご[確認|かくにん]を おねがいできますか。}} / {{ja|[資料|しりょう]を [送|おく]って いただけますか。}}' },
      { h: 'Esempio guidato', b: 'Rapporto al capo: *Capo, le riferisco: il cliente ha accettato il preventivo. Vorrei consultarla sulla data di consegna.*\n\n→ {{ja|[部長|ぶちょう]、[報告|ほうこく]します。[お客様|おきゃくさま]が [見積|みつ]もりを [承諾|しょうだく]しました。[納期|のうき]に ついて [相談|そうだん]したいのですが、よろしいでしょうか。}}' },
      { h: 'Errori comuni', b: '- Usare *ありがとう* con il capo: usa **ありがとうございます**.\n- Dire *わかった* invece di **わかりました**.\n- Non salutare con **おつかれさまです**.\n- Dire *いいえ* in modo diretto.\n- Non consultarsi in anticipo (mancato 相談).' },
      { h: 'Riepilogo', b: '- Saluti: おつかれさまです, おさきに失礼します.\n- 報告・連絡・相談.\n- Riunioni: 資料, 賛成/反対, 確認, 検討.\n- Rifiuti indiretti.' }
    ],
    exercises: [
      mc('Come si saluta un collega durante il giorno?', ['おつかれさまです。', 'こんばんは。', 'おやすみ。', 'さようなら。'], 0),
      mc('«Vado via prima di voi»:', ['おさきに しつれいします。', 'ただいま。', 'いただきます。', 'おはよう。'], 0),
      mc('Che cosa significa 報告?', ['rapporto', 'consultazione', 'riunione', 'saluto'], 0),
      mc('«Lo valuterò» spesso significa…', ['probabilmente no', 'sì sicuramente', 'domani', 'non capisco'], 0),
      listen('かくにんさせて いただきます。', 'ja', 'Che cosa dice?', ['Verifico io', 'Non lo faccio', 'Rifiuto', 'Chiamo il capo'], 0),
      mc('«Sono d’accordo»:', ['さんせいです。', 'はんたいです。', 'ちがいます。', 'しりません。'], 0),
      fillJ('Completa: ほうこく・れんらく・___ (hō-ren-sō)', ['そうだん'], 'そうだん.')
    ],
    test: [
      mc('「よろしく おねがいします」 è…', ['una formula multiuso di cortesia', 'un saluto notturno', 'una domanda', 'un rifiuto'], 0),
      mc('Come si dice «grazie» al capo?', ['ありがとうございます', 'ありがとう', 'どうも', 'サンキュー'], 0),
      listen('おつかれさまです。', 'ja', 'Quando si usa?', ['Tra colleghi durante il lavoro', 'A cena', 'Prima di dormire', 'In treno'], 0),
      mc('Per non dire «no» direttamente:', ['むずかしいかも しれません', 'いやです', 'できません ぜったい', 'だめ'], 0)
    ],
    cards: [card('c1', 'grazie per la fatica', 'おつかれさまです', '', 'おつかれさまです'), card('c2', 'vado via prima', 'おさきに[失礼|しつれい]します', '', 'おさきにしつれいします'), card('c3', 'rapporto', '[報告|ほうこく]', '', 'ほうこく'), card('c4', 'consultazione', '[相談|そうだん]', '', 'そうだん'),
      card('c5', 'verifica', '[確認|かくにん]', '', 'かくにん'), card('c6', 'valutare', '[検討|けんとう]', '', 'けんとう'), card('c7', 'documenti', '[資料|しりょう]', '', 'しりょう'), card('c8', 'cliente', 'お[客様|きゃくさま]', '', 'おきゃくさま')],
    listening: [{ id: 'l1', lang: 'ja', title: 'In ufficio', text: 'おはようございます。おつかれさまです。ぶちょう、ほうこくします。おきゃくさまが みつもりを しょうだくしました。のうきに ついて そうだん したいのですが、よろしいでしょうか。かくにんさせて いただきます。おさきに しつれいします。',
      qs: [{ q: 'Che cosa riferisce?', o: ['Il cliente ha accettato il preventivo', 'Il cliente ha rifiutato', 'È in ritardo', 'Ha un problema'], a: 0, kind: 'explicit' }, { q: 'Su che cosa vuole consultarsi?', o: ['La data di consegna', 'Il prezzo', 'Le ferie', 'Il personale'], a: 0, kind: 'explicit' }, { q: 'Che cosa dice alla fine?', o: ['Vado via prima', 'Resto', 'Arrivo domani', 'Torno subito'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'おつかれさまです', lang: 'ja' }, { text: 'ほうこくします', lang: 'ja' }, { text: 'かくにんさせて いただきます', lang: 'ja' }],
    shadowing: [{ text: 'おつかれさまです。', lang: 'ja', tip: 'Saluto d’ufficio: tono leggero.' }, { text: 'ぶちょう、ほうこくします。', lang: 'ja', tip: 'Tono professionale.' }, { text: 'おさきに しつれいします。', lang: 'ja', tip: 'Chiusura cortese.' }],
    speaking: [{ prompt: 'Fai un breve rapporto al tuo capo.', model: 'ぶちょう、ほうこくします。おきゃくさまが みつもりを しょうだくしました。のうきに ついて そうだん したいのですが、よろしいでしょうか。' }, { prompt: 'Rispondi a una proposta in modo indiretto senza dire «no».', model: 'ありがとうございます。すこし かくにんさせて いただきます。むずかしいかも しれません。' }] });
})(window.ST = window.ST || {});
