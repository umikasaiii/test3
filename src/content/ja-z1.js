/* Giapponese — ampliamento z1: saluti, lettura di parole, particelle, verbi, aggettivi, forma ない, particelle finali, connettivi, aspetto て-, ripasso N4-N3. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, order, listen, card } = C;
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });
  const T = (o) => C.addTopic(Object.assign({ subject: 'jpn', stage: 'J0', minutes: 20, prereq: ['jpn-j0-sounds'] }, o));
  const ins = (right, wrong, i) => { const o = wrong.slice(); o.splice(i, 0, right); return o; };
  const mv = (q, right, wrong, i, why) => mc(q, ins(right, wrong, i), i, why);
  const lv = (say, q, right, wrong, i, why) => listen(say, 'ja', q, ins(right, wrong, i), i, why);
  const lq = (q, right, wrong, i) => ({ q, o: ins(right, wrong, i), a: i, kind: 'explicit' });

  /* ---------------------------------------------------------------- J0 */
  T({ id: 'jpn-j0-greetings-politeness', stage: 'J0', prereq: ['jpn-j0-sounds'], title: 'Saluti e formule di cortesia', summary: 'Le formule fisse della giornata: saluti, ringraziamenti, scuse, uscire e rientrare, mangiare.',
    objectives: ['Usare i saluti giusti nelle diverse ore del giorno', 'Ringraziare, scusarsi e rifiutare con garbo', 'Riconoscere le formule fisse (いただきます, ただいま…) e quando si pronunciano'],
    pages: [
      { h: 'Obiettivo', b: 'In giapponese molte situazioni quotidiane hanno una **formula fissa**: non si traducono parola per parola, si dicono e basta. Chi le usa al momento giusto fa subito una buona impressione. In questa lezione impari le formule più frequenti e capisci **quando** si dicono.' },
      { h: 'I saluti del giorno', b: '- {{ja|おはようございます。}} buongiorno (la mattina). Tra amici: {{ja|おはよう。}}\n- {{ja|こんにちは。}} buongiorno / buon pomeriggio (dal tardo mattino fino al tramonto)\n- {{ja|こんばんは。}} buonasera\n- {{ja|おやすみなさい。}} buonanotte: si dice **prima di dormire** o quando si lascia qualcuno che va a letto, mai come saluto d’incontro\n- {{ja|さようなら。}} arrivederci, con senso di separazione più lunga\n- {{ja|じゃあ、また。}} / {{ja|またね。}} a presto, ci vediamo\n\n**Attenzione**: in こんにちは e こんばんは l’ultimo は si scrive は ma si legge **wa**.' },
      { h: 'Grazie, prego, scusa', b: '- {{ja|ありがとうございます。}} grazie (cortese); {{ja|ありがとう。}} (informale); {{ja|どうも。}} (grazie / salve, molto breve)\n- {{ja|どういたしまして。}} prego\n- {{ja|すみません。}} mi scusi / permesso / grazie per il disturbo\n- {{ja|ごめんなさい。}} scusa (più personale); {{ja|ごめん。}} (tra amici)\n- {{ja|しつれいします。}} permesso / con permesso (entrando o uscendo da una stanza formale)\n- {{ja|いいえ、けっこうです。}} no, grazie (rifiuto cortese)\n- {{ja|[大丈夫|だいじょうぶ]です。}} va bene / non importa\n- {{ja|おねがいします。}} per favore, mi raccomando\n\n**すみません** è il jolly: chiama il cameriere, chiede scusa e può anche significare «grazie, che disturbo».' },
      { h: 'Formule fisse della vita quotidiana', b: '- {{ja|いただきます。}} si dice **prima di mangiare** (grato per il cibo)\n- {{ja|ごちそうさまでした。}} si dice **dopo** aver mangiato\n- {{ja|いってきます。}} esco (e torno) → risposta: {{ja|いってらっしゃい。}} buona giornata\n- {{ja|ただいま。}} sono tornato → risposta: {{ja|おかえりなさい。}} bentornato\n- {{ja|おつかれさまです。}} formula di lavoro: «buon lavoro / grazie dell’impegno»\n- {{ja|おさきに しつれいします。}} esco prima di voi (dall’ufficio)\n- {{ja|おめでとうございます。}} congratulazioni\n- {{ja|おだいじに。}} si riguardi (a chi è malato)' },
      { h: 'Presentarsi', b: '- {{ja|はじめまして。}} piacere di conoscerla (prima volta)\n- {{ja|わたしは マルコです。イタリアから きました。}}\n- {{ja|どうぞ よろしく おねがいします。}} spero di avere una buona relazione con lei\n- {{ja|おげんきですか。}} come sta? → {{ja|はい、げんきです。}}\n- {{ja|おひさしぶりです。}} è da tanto che non ci vediamo\n\nLa chiusura **どうぞ よろしく おねがいします** è quasi obbligatoria in ogni presentazione.' },
      { h: 'Esempio guidato', b: 'Mattina in ufficio:\n- {{ja|おはようございます。}}\n- {{ja|おはようございます。きょうも あついですね。}}\n- {{ja|そうですね。あ、あたらしい [人|ひと]ですか。}}\n- {{ja|はい、はじめまして。マルコです。どうぞ よろしく おねがいします。}}\n\nSera: {{ja|おさきに しつれいします。}} → {{ja|おつかれさまでした。}}\n\nControllo: salutare **sempre** prima, presentarsi, chiudere con よろしく. Nota che tra colleghi la risposta all’uscita è おつかれさまでした, non さようなら.' },
      { h: 'Errori comuni', b: '- Dire さようなら ai familiari o ai colleghi che escono ogni giorno: suona come un addio. Meglio {{ja|いってらっしゃい。}} o {{ja|おつかれさまでした。}}\n- Dire おやすみなさい di sera all’arrivo: è solo per andare a dormire.\n- Dire ごちそうさま **prima** di mangiare: prima si dice いただきます.\n- Leggere こんにちは come *konnichiha*: è **konnichiwa**.\n- Usare ありがとう (informale) con il capo: serve ありがとうございます.\n- Rispondere a ただいま con さようなら: la risposta è おかえりなさい.' },
      { h: 'Riepilogo', b: '- Mattina おはようございます; giorno こんにちは; sera こんばんは; notte おやすみなさい.\n- Grazie: ありがとうございます → どういたしまして.\n- Scusa: すみません / ごめんなさい.\n- Pasti: いただきます (prima) / ごちそうさまでした (dopo).\n- Casa: いってきます ↔ いってらっしゃい; ただいま ↔ おかえりなさい.\n- Presentazione: はじめまして … どうぞ よろしく おねがいします.' }
    ],
    exercises: [
      mv('Che cosa si dice prima di mangiare?', 'いただきます', ['ごちそうさまでした', 'ただいま', 'いってきます'], 2),
      mv('Esci di casa. Che cosa dici?', 'いってきます', ['ただいま', 'おかえりなさい', 'おやすみなさい'], 1),
      mv('Qualcuno dice ありがとう. Che cosa rispondi?', 'どういたしまして', ['はじめまして', 'いただきます', 'おげんきですか'], 3),
      mv('Dici ただいま. La famiglia risponde:', 'おかえりなさい', ['いってらっしゃい', 'さようなら', 'こんばんは'], 2),
      lv('おやすみなさい。', 'Quando si dice questa frase?', 'Prima di andare a dormire', ['Al mattino presto', 'Prima di mangiare', 'Entrando in ufficio'], 0),
      lv('はじめまして。どうぞ よろしく おねがいします。', 'In quale situazione siamo?', 'Una presentazione', ['Un addio', 'Una scusa', 'Un ordine al ristorante'], 3),
      order('Metti in ordine: «Piacere, spero di andare d’accordo»', ['はじめまして', 'どうぞ', 'よろしく', 'おねがいします'], 'Prima はじめまして, poi la chiusura.'),
      fillJ('Completa: ごちそう___でした。', ['さま'], 'ごちそうさまでした.')
    ],
    test: [
      mv('Il collega esce prima dall’ufficio. Che cosa dici?', 'おつかれさまでした', ['ただいま', 'いただきます', 'はじめまして'], 1),
      mv('Quale formula si usa per scusarsi tra amici?', 'ごめん', ['どういたしまして', 'おかえり', 'いただきます'], 3),
      mv('Come si legge こんにちは?', 'konnichiwa', ['konnichiha', 'konichiwa', 'kontiniha'], 0),
      mv('Rifiuti con garbo un’offerta. Che cosa dici?', 'いいえ、けっこうです', ['はじめまして', 'おやすみなさい', 'いってきます'], 2)
    ],
    cards: [card('c1', 'buongiorno (mattina)', 'おはようございます', '', 'おはようございます'), card('c2', 'buongiorno / buon pomeriggio', 'こんにちは', '', 'こんにちは'), card('c3', 'buonasera', 'こんばんは', '', 'こんばんは'), card('c4', 'buonanotte', 'おやすみなさい', '', 'おやすみなさい'),
      card('c5', 'grazie (cortese)', 'ありがとうございます', '', 'ありがとうございます'), card('c6', 'prego', 'どういたしまして', '', 'どういたしまして'), card('c7', 'mi scusi / grazie del disturbo', 'すみません', '', 'すみません'), card('c8', 'prima di mangiare', 'いただきます', '', 'いただきます'),
      card('c9', 'dopo aver mangiato', 'ごちそうさまでした', '', 'ごちそうさまでした'), card('c10', 'bentornato', 'おかえりなさい', '', 'おかえりなさい'), card('c11', 'piacere di conoscerla', 'はじめまして', '', 'はじめまして')],
    listening: [{ id: 'l1', lang: 'ja', title: 'La mattina', text: 'おはようございます。はじめまして。マルコです。どうぞ よろしく おねがいします。きょうは あついですね。そうですね。おさきに しつれいします。おつかれさまでした。',
      qs: [lq('Che cosa fa Marco all’inizio?', 'Si presenta', ['Si scusa', 'Ordina il pranzo', 'Chiede la strada'], 0), lq('Di che cosa parlano?', 'Del caldo', ['Della pioggia', 'Del cibo', 'Di un viaggio'], 2), lq('Che cosa dice chi esce prima?', 'Il saluto di uscita dall’ufficio', ['Buonanotte', 'Grazie per il cibo', 'Sono tornato'], 1)] }],
    dictation: [{ text: 'おはようございます', lang: 'ja' }, { text: 'ごちそうさまでした', lang: 'ja' }, { text: 'ただいま おかえりなさい', lang: 'ja' }],
    shadowing: [{ text: 'はじめまして。どうぞ よろしく おねがいします。', lang: 'ja', tip: 'よろしく: yo・ro・shi・ku, ritmo regolare.' }, { text: 'いってきます。いってらっしゃい。', lang: 'ja', tip: 'Le っ sono brevi pause.' }, { text: 'ありがとうございます。どういたしまして。', lang: 'ja', tip: 'ございます: go・za・i・ma・su (u finale quasi muta).' }],
    speaking: [{ prompt: 'Presentati a un nuovo collega in modo cortese.', model: 'はじめまして。マルコです。イタリアから きました。どうぞ よろしく おねがいします。' }, { prompt: 'Saluta in famiglia uscendo e rientrando.', model: 'いってきます。… ただいま。' }] });

  T({ id: 'jpn-j0-hiragana-words-reading', stage: 'J0', prereq: ['jpn-j0-sounds'], title: 'Leggere parole in hiragana: dakuten, yōon, っ e vocali lunghe', summary: 'Leggere parole vere con ゛ ゜, sillabe contratte (きゃ, しゅ, ちょ), っ piccola e vocali lunghe.',
    objectives: ['Leggere correttamente parole con dakuten e handakuten', 'Distinguere sillabe contratte (yōon) e っ da sillabe normali', 'Riconoscere coppie minime con vocale lunga o breve'],
    pages: [
      { h: 'Obiettivo', b: 'Conoscere i 46 hiragana non basta: le parole vere contengono **segni aggiuntivi** e **sillabe speciali** che cambiano il suono e il significato. Qui ti alleni su parole reali, con la lettura in romaji per controllare.' },
      { h: 'Dakuten e handakuten', b: 'Con **゛** (dakuten) il suono si sonorizza: か→が, さ→ざ, た→だ, は→ば. Con **゜** (handakuten) は→ぱ.\n- {{ja|がっこう}} (gakkō) scuola · {{ja|ともだち}} (tomodachi) amico · {{ja|でんしゃ}} (densha) treno\n- {{ja|ぶどう}} (budō) uva · {{ja|ぱん}} (pan) pane · {{ja|えんぴつ}} (enpitsu) matita\n\n**Casi particolari**: じ e ぢ si leggono entrambi *ji*, ず e づ entrambi *zu*; nell’uso normale si scrive じ e ず (eccezioni: {{ja|はなぢ}} sangue dal naso, {{ja|こづつみ}} pacco postale).' },
      { h: 'Sillabe contratte (yōon)', b: 'Una consonante in **i** + や・ゆ・よ **piccolo** forma **una sola sillaba**:\n- きゃ kya, しゅ shu, ちょ cho, にゃ nya, ひゃ hya, みょ myo, りょ ryo, ぎゃ gya, じゅ ju, びょ byo, ぴゃ pya\n\nParole: {{ja|しゅくだい}} (shukudai) compito · {{ja|りょこう}} (ryokō) viaggio · {{ja|びょういん}} (byōin) ospedale · {{ja|ぎゅうにゅう}} (gyūnyū) latte · {{ja|おちゃ}} (ocha) tè · {{ja|ひゃく}} (hyaku) cento\n\n**Attenzione**: confronta {{ja|びょういん}} (ospedale) e {{ja|びよういん}} (parrucchiere): il ゃ・ゅ・ょ è piccolo = sillaba unica.' },
      { h: 'La っ piccola', b: 'La っ raddoppia la consonante che segue (pausa breve):\n- {{ja|きっぷ}} (kippu) biglietto · {{ja|ざっし}} (zasshi) rivista · {{ja|ちょっと}} (chotto) un po’ · {{ja|にっき}} (nikki) diario · {{ja|ひっこし}} (hikkoshi) trasloco\n\nSi trova solo davanti a k, s, t, p (e sh, ch, ts). Confronta {{ja|きて}} (kite, «vieni») e {{ja|きって}} (kitte, «francobollo»).' },
      { h: 'Vocali lunghe', b: 'Una vocale lunga dura **due more**:\n- **aa**: あ+あ {{ja|おかあさん}} (okāsan) mamma · **ii**: い+い {{ja|おにいさん}} (onīsan) fratello maggiore · **uu**: う+う {{ja|くうき}} (kūki) aria\n- **ee**: え+い o え+え {{ja|せんせい}} (sensei), {{ja|ええ}} (ē) sì\n- **oo**: お+う o お+お {{ja|ありがとう}}, {{ja|おおきい}} (ōkii) grande, {{ja|とうきょう}} (Tōkyō)\n\nCoppie minime: {{ja|おばさん}} (zia) ≠ {{ja|おばあさん}} (nonna); {{ja|おじさん}} (zio) ≠ {{ja|おじいさん}} (nonno); {{ja|ゆき}} (neve) ≠ {{ja|ゆうき}} (coraggio); {{ja|ここ}} (qui) ≠ {{ja|こうこう}} (liceo).' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|きのう ともだちと りょこうに いきました。えきで きっぷを かいました。}}\n\n→ kinō tomodachi to ryokō ni ikimashita. eki de kippu o kaimashita. («Ieri sono andato in viaggio con un amico. Alla stazione ho comprato il biglietto.»)\n\nControllo: きのう (kinō, vocale lunga), りょこう (yōon + lunga), きっぷ (っ), かいました (ai).' },
      { h: 'Errori comuni', b: '- Leggere ょ come sillaba a sé: *bi-yo-in* invece di **byō-in**.\n- Ignorare la っ: *kipu* invece di **kippu**.\n- Accorciare la vocale lunga: *obasan* per «nonna» → **obāsan**.\n- Scrivere ゃ ゅ ょ in formato grande: {{ja|びよういん}} cambia significato rispetto a {{ja|びょういん}}.\n- Leggere は come *ha* quando è particella: si legge **wa**.\n- Pensare che ぢ・づ siano comuni: si usano raramente.' },
      { h: 'Riepilogo', b: '- ゛ e ゜ cambiano la consonante (か→が, は→ば→ぱ).\n- Sillabe contratte = consonante + や・ゆ・よ piccolo: una sillaba sola.\n- っ = consonante raddoppiata (きっぷ).\n- Vocale lunga = due more (おかあさん, せんせい, とうきょう).\n- Le coppie minime cambiano significato: びょういん / びよういん; おばさん / おばあさん.' }
    ],
    exercises: [
      mv('Come si legge しゅくだい?', 'shukudai', ['shikudai', 'shukkudai', 'shūkudai'], 1),
      mv('Come si scrive «kippu» (biglietto)?', 'きっぷ', ['きぷ', 'きふう', 'きうぷ'], 0),
      mv('«Ospedale» in hiragana:', 'びょういん', ['びよういん', 'びょいん', 'ひょういん'], 2),
      mv('«Nonna» si dice:', 'おばあさん', ['おばさん', 'おじさん', 'おじいさん'], 3),
      mv('Che cosa significa ぎゅうにゅう?', 'latte', ['carne', 'succo', 'pesce'], 1),
      lv('ざっしを かいました。', 'Che cosa ha comprato?', 'Una rivista', ['Un biglietto', 'Un dizionario', 'Una matita'], 2),
      order('Metti in ordine: «Oggi i compiti sono tanti»', ['きょうは', 'しゅくだいが', 'おおいです'], 'Tema + soggetto + predicato.'),
      fillJ('Completa: きっ___ を にまい ください。', ['ぷ'], 'きっぷ.')
    ],
    test: [
      mv('Quale parola significa «treno»?', 'でんしゃ', ['でんわ', 'でんき', 'じてんしゃ'], 0),
      mv('Che cosa significa こうこう?', 'liceo', ['qui', 'scuola elementare', 'università'], 2),
      mv('Quale parola contiene una sillaba contratta (yōon)?', 'りょこう', ['きっぷ', 'おかあさん', 'ほんや'], 1),
      mv('Quale parola indica il «parrucchiere»?', 'びよういん', ['びょういん', 'びよいん', 'ひよういん'], 3)
    ],
    cards: [card('c1', 'scuola', 'がっこう', '', 'がっこう'), card('c2', 'treno', 'でんしゃ', '', 'でんしゃ'), card('c3', 'compito', 'しゅくだい', '', 'しゅくだい'), card('c4', 'viaggio', 'りょこう', '', 'りょこう'),
      card('c5', 'ospedale', 'びょういん', '', 'びょういん'), card('c6', 'parrucchiere', 'びよういん', '', 'びよういん'), card('c7', 'latte', 'ぎゅうにゅう', '', 'ぎゅうにゅう'), card('c8', 'biglietto', 'きっぷ', '', 'きっぷ'), card('c9', 'rivista', 'ざっし', '', 'ざっし'), card('c10', 'nonna', 'おばあさん', '', 'おばあさん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Il viaggio', text: 'きのう ともだちと りょこうに いきました。えきで きっぷと ざっしを かいました。でんしゃの なかで ぎゅうにゅうを のみました。',
      qs: [lq('Con chi è andato in viaggio?', 'Con un amico', ['Con la nonna', 'Da solo', 'Con il professore'], 1), lq('Che cosa ha comprato alla stazione?', 'Un biglietto e una rivista', ['Latte e pane', 'Un dizionario', 'Un biglietto e una matita'], 0), lq('Che cosa ha bevuto sul treno?', 'Latte', ['Tè', 'Acqua', 'Succo'], 2)] }],
    dictation: [{ text: 'きっぷを にまい ください', lang: 'ja' }, { text: 'びょういんは どこですか', lang: 'ja' }, { text: 'しゅくだいが おおいです', lang: 'ja' }],
    shadowing: [{ text: 'ちょっと まって ください。', lang: 'ja', tip: 'ちょっと: cho・t・to con pausa sulla っ.' }, { text: 'おかあさんと りょこうに いきます。', lang: 'ja', tip: 'おかあさん: o・kā・san, a lunga.' }, { text: 'ぎゅうにゅうを のみました。', lang: 'ja', tip: 'ぎゅう: gyū, una sillaba lunga.' }],
    speaking: [{ prompt: 'Leggi ad alta voce e spiega: «Ho comprato un biglietto e una rivista».', model: 'きっぷと ざっしを かいました。' }, { prompt: 'Chiedi dove si trova l’ospedale.', model: 'すみません、びょういんは どこですか。' }],
    reading: [{ id: 'r1', title: 'Un biglietto', text: 'きょうは がっこうが やすみです。おばあさんと でんしゃで りょこうに いきます。きっぷは にまい です。しゅくだいは あした します。',
      qs: [{ q: 'Che cosa ha oggi?', o: ['Scuola chiusa', 'Un esame', 'Una visita in ospedale', 'Un lavoro'], a: 0 }, { q: 'Con chi va in viaggio?', o: ['Con la nonna', 'Con la zia', 'Con un amico', 'Con il maestro'], a: 0 }, { q: 'Quando fa i compiti?', o: ['Domani', 'Oggi', 'Ieri', 'Stasera'], a: 0 }] }] });

  /* ---------------------------------------------------------------- J1 */
  T({ id: 'jpn-j1-particles-wa-ga-wo-ni-de', stage: 'J1', prereq: ['jpn-j1-masu'], title: 'Le particelle は, が, を, に, で', summary: 'Quando usare le cinque particelle più importanti e come non confondere に e で.',
    objectives: ['Distinguere は (tema) e が (soggetto)', 'Usare を per l’oggetto e に per tempo, meta ed esistenza', 'Scegliere tra に e で per i luoghi e usare で per mezzo e luogo d’azione'],
    pages: [
      { h: 'Obiettivo', b: 'Le **particelle** si mettono dopo la parola e ne indicano la funzione nella frase. Sono il punto che fa sbagliare di più. Qui chiarisco le cinque più usate: は, が, を, に, で.' },
      { h: 'は e が', b: '- **は** (si legge *wa*) segna il **tema**, ciò di cui si parla: {{ja|わたしは [学生|がくせい]です。}}\n- **が** segna il **soggetto**, spesso l’informazione nuova o la risposta a «chi?»:\n  - {{ja|だれが [来|き]ましたか。}} → {{ja|[田中|たなか]さんが [来|き]ました。}}\n  - {{ja|あそこに [猫|ねこ]が います。}} (c’è un gatto)\n- **が** con {{ja|[好|す]き}}, {{ja|きらい}}, {{ja|わかる}}, {{ja|あります/います}}, {{ja|[上手|じょうず]}}: {{ja|わたしは コーヒーが [好|す]きです。}}\n\nIn breve: は = «quanto a…», が = «proprio X (e non altri)».' },
      { h: 'を e に', b: '**を** (si legge *o*) segna l’oggetto diretto: {{ja|パンを [食|た]べます。}} / {{ja|[音楽|おんがく]を [聞|き]きます。}}\n\n**に** ha molti usi:\n- **tempo preciso**: {{ja|[七時|しちじ]に [起|お]きます。}} / {{ja|[日曜日|にちようび]に [行|い]きます。}}\n- **meta**: {{ja|[東京|とうきょう]に [行|い]きます。}} (anche へ)\n- **luogo di esistenza**: {{ja|[机|つくえ]の [上|うえ]に [本|ほん]が あります。}}\n- **destinatario**: {{ja|[友達|ともだち]に [手紙|てがみ]を [書|か]きます。}}\n- **incontro / meta d’azione**: {{ja|[先生|せんせい]に [会|あ]います。}}' },
      { h: 'で', b: '**で** indica:\n- **luogo dell’azione**: {{ja|[図書館|としょかん]で [勉強|べんきょう]します。}} / {{ja|レストランで [食|た]べます。}}\n- **mezzo**: {{ja|[電車|でんしゃ]で [行|い]きます。}} / {{ja|ペンで [書|か]きます。}} / {{ja|[日本語|にほんご]で [話|はな]します。}}\n- **totale / limite**: {{ja|[全部|ぜんぶ]で [千円|せんえん]です。}}\n- **luogo di un evento**: {{ja|[公園|こうえん]で コンサートが あります。}}\n\nLegame con altre particelle: と (con): {{ja|[友達|ともだち]と [行|い]きます。}}; の (di): {{ja|[私|わたし]の [本|ほん]}}; も (anche): {{ja|[私|わたし]も [行|い]きます。}}' },
      { h: 'に oppure で?', b: 'La regola sicura:\n- Verbi di **esistenza** e **movimento verso** → に: {{ja|ここに います。}} / {{ja|[学校|がっこう]に [行|い]きます。}}\n- Verbi di **azione** nel luogo → で: {{ja|[学校|がっこう]で [勉強|べんきょう]します。}}\n\nConfronto:\n- {{ja|[家|いえ]に います。}} (sono a casa) / {{ja|[家|いえ]で [寝|ね]ます。}} (dormo a casa)\n- {{ja|[駅|えき]に [着|つ]きます。}} (arrivo in stazione) / {{ja|[駅|えき]で [友達|ともだち]に [会|あ]います。}} (incontro un amico alla stazione)\n\nPer l’evento (feste, concerti) con あります si usa **で**.' },
      { h: 'Esempio guidato', b: 'Racconta: *Domenica incontro un amico alla stazione e andiamo in biblioteca in treno. Studio e poi leggo un libro.*\n\n→ {{ja|[日曜日|にちようび]に [駅|えき]で [友達|ともだち]に [会|あ]います。[電車|でんしゃ]で [図書館|としょかん]に [行|い]きます。[勉強|べんきょう]して、[本|ほん]を [読|よ]みます。}}\n\nControllo: 日曜日**に** (tempo), 駅**で** (azione), 友達**に** (persona incontrata), 電車**で** (mezzo), 図書館**に** (meta), 本**を** (oggetto).' },
      { h: 'Errori comuni', b: '- *がっこうに べんきょうします* → {{ja|がっこうで べんきょうします。}}\n- *パンが たべます* (neutro) → {{ja|パンを たべます。}}\n- *しちじで おきます* → {{ja|しちじに おきます。}}\n- *バスに いきます* → {{ja|バスで いきます。}}\n- *コーヒーを すきです* → {{ja|コーヒーが すきです。}}\n- Mettere に dopo **きのう, けさ, きょう, あした** (tempo relativo): non serve: {{ja|あした いきます。}}' },
      { h: 'Riepilogo', b: '- は: tema (wa); が: soggetto/novità, con すき, わかる, ある.\n- を: oggetto (o).\n- に: tempo preciso, meta, esistenza, destinatario.\n- で: luogo d’azione, mezzo, lingua, totale.\n- Tempo relativo (きょう, あした) senza に.' }
    ],
    exercises: [
      fillJ('Completa: わたし___ がくせいです。', ['は'], 'Tema: は (letto wa).'),
      mv('«Mangio al ristorante»: レストラン___ たべます。', 'で', ['に', 'を', 'が'], 1, 'Luogo dell’azione = で.'),
      mv('«Domani vado a Kyoto»: あした きょうと___ いきます。', 'に', ['で', 'を', 'が'], 0, 'Meta = に (o へ).'),
      mv('«Chi ha rotto il bicchiere?» だれ___ こわしましたか。', 'が', ['は', 'を', 'に'], 2, 'Parola interrogativa come soggetto: が.'),
      mv('«C’è un gatto in giardino»: にわ___ ねこが います。', 'に', ['で', 'を', 'は'], 3, 'Esistenza = に.'),
      lv('えきで ともだちに あいました。', 'Dove ha incontrato l’amico?', 'Alla stazione', ['A casa', 'In biblioteca', 'Al ristorante'], 0),
      order('Metti in ordine: «Scrivo una lettera con la penna»', ['ペンで', 'てがみを', 'かきます'], 'Mezzo + で, oggetto + を.'),
      fillJ('Completa: しちじ___ おきます。', ['に'], 'Tempo preciso: に.')
    ],
    test: [
      mv('«Vado in autobus»: バス___ いきます。', 'で', ['に', 'を', 'が'], 2),
      mv('Quale frase è corretta?', 'としょかんで ほんを よみます。', ['としょかんに ほんを よみます。', 'としょかんを ほんで よみます。', 'としょかんが ほんに よみます。'], 0),
      mv('Perché si dice わたしは コーヒーが すきです?', 'L’oggetto di すき prende が', ['Il が segna sempre il tema', 'すき è un verbo e vuole を', 'Dopo ogni aggettivo serve が'], 1),
      mv('Quale frase NON richiede に dopo l’espressione di tempo?', 'あした おきます', ['にちようびに おきます', 'しちじに おきます', 'さんじに ねます'], 3)
    ],
    cards: [card('c1', 'particella del tema', 'は', '', 'は'), card('c2', 'particella del soggetto', 'が', '', 'が'), card('c3', 'particella dell’oggetto', 'を', '', 'を'), card('c4', 'particella di meta/tempo/esistenza', 'に', '', 'に'),
      card('c5', 'particella di luogo d’azione/mezzo', 'で', '', 'で'), card('c6', 'con (compagnia)', 'と', '', 'と'), card('c7', 'anche', 'も', '', 'も'), card('c8', 'biblioteca', '[図書館|としょかん]', '', 'としょかん'), card('c9', 'stazione', '[駅|えき]', '', 'えき')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Domenica', text: 'にちようびに えきで ともだちに あいます。でんしゃで としょかんに いきます。べんきょうして、ほんを よみます。',
      qs: [lq('Dove incontra l’amico?', 'Alla stazione', ['In biblioteca', 'A casa', 'Al ristorante'], 1), lq('Come va in biblioteca?', 'In treno', ['In autobus', 'A piedi', 'In bicicletta'], 0), lq('Che cosa fa in biblioteca?', 'Studia e legge', ['Mangia', 'Dorme', 'Gioca'], 2)] }],
    dictation: [{ text: 'としょかんで べんきょうします', lang: 'ja' }, { text: 'でんしゃで がっこうに いきます', lang: 'ja' }, { text: 'わたしは コーヒーが すきです', lang: 'ja' }],
    shadowing: [{ text: 'わたしは がくせいです。', lang: 'ja', tip: 'は si legge wa.' }, { text: 'ペンで てがみを かきます。', lang: 'ja', tip: 'を si legge o.' }, { text: 'えきで ともだちに あいます。', lang: 'ja', tip: 'Una pausa leggera dopo で.' }],
    speaking: [{ prompt: 'Di’ dove studi e come ci vai.', model: 'としょかんで べんきょうします。でんしゃで いきます。' }, { prompt: 'Racconta che cosa fai domenica alle dieci.', model: 'にちようびの じゅうじに ともだちに あいます。' }] });

  T({ id: 'jpn-j1-verbs-groups-conjugation', stage: 'J1', prereq: ['jpn-j1-masu'], title: 'I gruppi di verbi: ます, ない e た', summary: 'Verbi in -u, in -ru e irregolari; forme ます, ない e passato semplice.',
    objectives: ['Riconoscere i tre gruppi di verbi', 'Formare ます, ない e た per ciascun gruppo', 'Memorizzare le eccezioni più frequenti (かえる, はいる, いく)'],
    pages: [
      { h: 'Obiettivo', b: 'I verbi giapponesi si dividono in **tre gruppi** e ognuno si coniuga con una regola diversa. Imparare a riconoscere il gruppo è il passo che apre tutte le forme future (て, passivo, potenziale…). Qui trattiamo le forme **ます**, **ない** e **た**.' },
      { h: 'I tre gruppi', b: '- **Gruppo 1** (verbi in *-u*, 五段): finiscono in una sillaba che non è る preceduta da i/e: {{ja|[書|か]く}}, {{ja|[飲|の]む}}, {{ja|[話|はな]す}}, {{ja|[待|ま]つ}}, {{ja|[遊|あそ]ぶ}}, {{ja|[買|か]う}}, {{ja|[行|い]く}}, {{ja|[取|と]る}}\n- **Gruppo 2** (verbi in *-ru*, 一段): finiscono in **いる** o **える**: {{ja|[食|た]べる}}, {{ja|[見|み]る}}, {{ja|[起|お]きる}}, {{ja|[寝|ね]る}}, {{ja|[開|あ]ける}}\n- **Gruppo 3** (irregolari): {{ja|する}} (fare) e {{ja|[来|く]る}} (venire)\n\n**Eccezioni**: alcuni verbi finiscono in いる/える ma sono del gruppo 1: {{ja|[帰|かえ]る}} (tornare), {{ja|[入|はい]る}} (entrare), {{ja|[走|はし]る}} (correre), {{ja|[知|し]る}} (sapere), {{ja|[切|き]る}} (tagliare), {{ja|[要|い]る}} (servire).' },
      { h: 'Forma ます', b: '- **Gruppo 1**: u → **i** + ます: {{ja|[書|か]く}} → {{ja|[書|か]きます}}, {{ja|[飲|の]む}} → {{ja|[飲|の]みます}}, {{ja|[話|はな]す}} → {{ja|[話|はな]します}}, {{ja|[待|ま]つ}} → {{ja|[待|ま]ちます}}, {{ja|[遊|あそ]ぶ}} → {{ja|[遊|あそ]びます}}, {{ja|[買|か]う}} → {{ja|[買|か]います}}\n- **Gruppo 2**: toglie る + ます: {{ja|[食|た]べる}} → {{ja|[食|た]べます}}\n- **Gruppo 3**: {{ja|する}} → {{ja|します}}; {{ja|[来|く]る}} → {{ja|[来|き]ます}}' },
      { h: 'Forma ない (negativo semplice)', b: '- **Gruppo 1**: u → **a** + ない: {{ja|[書|か]く}} → {{ja|[書|か]かない}}, {{ja|[飲|の]む}} → {{ja|[飲|の]まない}}, {{ja|[話|はな]す}} → {{ja|[話|はな]さない}}, {{ja|[待|ま]つ}} → {{ja|[待|ま]たない}}, {{ja|[遊|あそ]ぶ}} → {{ja|[遊|あそ]ばない}}; i verbi in **う** → **わない**: {{ja|[買|か]う}} → {{ja|[買|か]わない}}\n- **Gruppo 2**: toglie る + ない: {{ja|[食|た]べる}} → {{ja|[食|た]べない}}\n- **Gruppo 3**: {{ja|しない}}, {{ja|[来|こ]ない}}\n- Eccezione: {{ja|ある}} → {{ja|ない}} (non *あらない*)\n\nIl negativo cortese resta **ません**: {{ja|[書|か]きません}}.' },
      { h: 'Forma た (passato semplice)', b: 'Gruppo 1, ultima sillaba:\n- **く** → **いた**: {{ja|[書|か]いた}} ; **ぐ** → **いだ**: {{ja|[泳|およ]いだ}}\n- **む・ぶ・ぬ** → **んだ**: {{ja|[飲|の]んだ}}, {{ja|[遊|あそ]んだ}}\n- **う・つ・る** → **った**: {{ja|[買|か]った}}, {{ja|[待|ま]った}}, {{ja|[取|と]った}}\n- **す** → **した**: {{ja|[話|はな]した}}\n- Eccezione: {{ja|[行|い]く}} → {{ja|[行|い]った}} (non *いいた*)\n\nGruppo 2: togli る + **た**: {{ja|[食|た]べた}}. Gruppo 3: {{ja|した}}, {{ja|[来|き]た}}.\nLa forma て segue lo stesso schema (た→て, だ→で): {{ja|[書|か]いて}}, {{ja|[飲|の]んで}}.' },
      { h: 'Esempio guidato', b: 'Trasforma: *bere, mangiare, comprare, andare, fare* in ます / ない / た.\n\n- {{ja|[飲|の]む}} → {{ja|[飲|の]みます}} / {{ja|[飲|の]まない}} / {{ja|[飲|の]んだ}}\n- {{ja|[食|た]べる}} → {{ja|[食|た]べます}} / {{ja|[食|た]べない}} / {{ja|[食|た]べた}}\n- {{ja|[買|か]う}} → {{ja|[買|か]います}} / {{ja|[買|か]わない}} / {{ja|[買|か]った}}\n- {{ja|[行|い]く}} → {{ja|[行|い]きます}} / {{ja|[行|い]かない}} / {{ja|[行|い]った}}\n- {{ja|する}} → {{ja|します}} / {{ja|しない}} / {{ja|した}}' },
      { h: 'Errori comuni', b: '- *かうない* → {{ja|かわない。}} (う → わ)\n- *いくた* → {{ja|いった。}}\n- *はなすた* → {{ja|はなした。}}\n- *たべらない* → {{ja|たべない。}} (non aggiungere ら)\n- *かえる* trattato come gruppo 2 (*かえない*, *かえた*) → {{ja|かえります}}, {{ja|かえらない}}, {{ja|かえった}}\n- *くない* per 来ない: si dice {{ja|こない。}}' },
      { h: 'Riepilogo', b: '- G1: -u; G2: -iru/-eru; G3: する, くる; eccezioni: かえる, はいる, はしる, しる, きる.\n- ます: G1 i-ます, G2 radice+ます, G3 します/きます.\n- ない: G1 a-ない (う→わない), G2 radice+ない, しない/こない.\n- た: く→いた, ぐ→いだ, む/ぶ/ぬ→んだ, う/つ/る→った, す→した; いく→いった.' }
    ],
    exercises: [
      mv('A quale gruppo appartiene たべる?', 'Gruppo 2 (verbi in -ru)', ['Gruppo 1 (verbi in -u)', 'Gruppo 3 (irregolari)', 'Nessun gruppo'], 1),
      mv('A quale gruppo appartiene かえる (tornare)?', 'Gruppo 1 (eccezione)', ['Gruppo 2', 'Gruppo 3', 'Nessuno'], 0),
      mv('Forma ます di のむ:', 'のみます', ['のむます', 'のまます', 'のんます'], 2),
      mv('Negativo semplice di かう:', 'かわない', ['かうない', 'かあない', 'かない'], 3),
      mv('Passato semplice di かく:', 'かいた', ['かきた', 'かくた', 'かった'], 1),
      mv('Passato semplice di いく:', 'いった', ['いいた', 'いきた', 'いんだ'], 2),
      lv('きのう えいがを みました。', 'Che cosa ha fatto ieri?', 'Ha visto un film', ['Ha letto un libro', 'Ha mangiato', 'Ha dormito'], 0),
      fillJ('Completa: のむ → のま___ (negativo semplice)', ['ない'], 'のまない.')
    ],
    test: [
      mv('Negativo semplice di くる:', 'こない', ['きない', 'くない', 'こらない'], 0),
      mv('Passato semplice di はなす:', 'はなした', ['はなすた', 'はなった', 'はないた'], 3),
      mv('Quale verbo è del gruppo 1?', 'はいる', ['みる', 'おきる', 'たべる'], 2),
      mv('Passato semplice di あそぶ:', 'あそんだ', ['あそぶた', 'あそった', 'あそいだ'], 1)
    ],
    cards: [card('c1', 'mangiare', '[食|た]べる', '', 'たべる'), card('c2', 'bere', '[飲|の]む', '', 'のむ'), card('c3', 'comprare', '[買|か]う', '', 'かう'), card('c4', 'andare', '[行|い]く', '', 'いく'),
      card('c5', 'tornare', '[帰|かえ]る', '', 'かえる'), card('c6', 'entrare', '[入|はい]る', '', 'はいる'), card('c7', 'vedere', '[見|み]る', '', 'みる'), card('c8', 'fare', 'する', '', 'する'), card('c9', 'venire', '[来|く]る', '', 'くる'), card('c10', 'parlare', '[話|はな]す', '', 'はなす')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Ieri', text: 'きのう ともだちと はなしました。それから えいがを みました。こうえんで あそびました。ごはんは たべませんでした。うちに かえりました。',
      qs: [lq('Che cosa ha fatto con l’amico?', 'Ha parlato e visto un film', ['Ha mangiato', 'Ha dormito', 'Ha studiato'], 1), lq('Dove ha giocato?', 'Al parco', ['A casa', 'A scuola', 'In biblioteca'], 0), lq('Che cosa non ha fatto?', 'Non ha mangiato', ['Non è tornato', 'Non ha visto il film', 'Non ha parlato'], 2)] }],
    dictation: [{ text: 'きのう ほんを かいました', lang: 'ja' }, { text: 'ともだちと あそびました', lang: 'ja' }, { text: 'さかなは たべません', lang: 'ja' }],
    shadowing: [{ text: 'おさけを のみませんでした。', lang: 'ja', tip: 'ませんでした: ma・sen・de・shi・ta.' }, { text: 'えいがを みなかった。', lang: 'ja', tip: 'Forma semplice: tono diretto.' }, { text: 'うちに かえった。', lang: 'ja', tip: 'かえった: kae・t・ta.' }],
    speaking: [{ prompt: 'Racconta tre cose che hai fatto ieri (forma cortese passata).', model: 'きのう ほんを よみました。ともだちと はなしました。ごはんを たべました。' }, { prompt: 'Dì due cose che non fai mai.', model: 'さけを のみません。たばこを すいません。' }] });

  /* ---------------------------------------------------------------- J2 */
  T({ id: 'jpn-j2-na-i-adjective-advanced', stage: 'J2', prereq: ['jpn-j2-adjectives-forms'], title: 'Aggettivi avanzati: ～く, ～さ, ～そう, ～すぎる', summary: 'Avverbi, nominalizzazione, apparenza e eccesso con aggettivi い e な.',
    objectives: ['Formare avverbi, nomi astratti (～さ) e apparenza (～そう)', 'Esprimere eccesso con ～すぎる', 'Usare ～く/～に なる e l’aggettivo come pronome (の)'],
    pages: [
      { h: 'Obiettivo', b: 'Oltre al presente e al passato, gli aggettivi producono **molte forme derivate**: avverbi, nomi, apparenza, eccesso. Sono pattern brevi e molto frequenti nella conversazione e nei testi di livello N4.' },
      { h: 'Avverbi e cambiamento', b: '- Aggettivo い: **い → く**: {{ja|[速|はや]い}} → {{ja|[速|はや]く}} (velocemente), {{ja|[早|はや]く}} (presto), {{ja|おいしく}} (in modo gustoso)\n- Aggettivo な: **な → に**: {{ja|しずかに}} (in silenzio), {{ja|きれいに}} (in modo pulito)\n- Eccezione: {{ja|いい}} → {{ja|よく}}\n\n**Cambiamento**: く/に + なる: {{ja|[暑|あつ]く なりました。}} (è diventato caldo) / {{ja|へやが しずかに なりました。}} (la stanza è diventata silenziosa).\nPer «rendere»: く/に + する: {{ja|[音|おと]を [小|ちい]さく して ください。}}' },
      { h: 'Nomi con ～さ', b: 'Togli い (o な) e aggiungi **さ** per ottenere un nome astratto:\n- {{ja|[高|たか]い}} → {{ja|[高|たか]さ}} (altezza), {{ja|[大|おお]きい}} → {{ja|[大|おお]きさ}} (grandezza), {{ja|[重|おも]い}} → {{ja|[重|おも]さ}} (peso), {{ja|[深|ふか]い}} → {{ja|[深|ふか]さ}}\n- な: {{ja|しずか}} → {{ja|しずかさ}}, {{ja|[大切|たいせつ]}} → {{ja|[大切|たいせつ]さ}}\n\n{{ja|この [山|やま]の [高|たか]さは [三千|さんぜん]メートルです。}}' },
      { h: 'Apparenza: ～そうだ', b: 'Dice l’**impressione visiva**, «sembra…»: radice (senza い/な) + そう.\n- {{ja|おいしそう}} (sembra buono), {{ja|[高|たか]そう}} (sembra caro), {{ja|[楽|たの]しそう}} (sembra divertente), {{ja|しずかそう}} (sembra tranquillo)\n- Eccezioni: {{ja|いい}} → {{ja|よさそう}}, {{ja|ない}} → {{ja|なさそう}}\n\n{{ja|この ケーキは おいしそうですね。}} Davanti a un nome: {{ja|おいしそうな ケーキ}}. Per l’**informazione riportata** (sento dire) si usa la forma semplice + そうだ (vedi altre lezioni): {{ja|おいしいそうです}} ≠ {{ja|おいしそうです}}.' },
      { h: 'Eccesso: ～すぎる', b: 'Radice + すぎる = troppo:\n- {{ja|[高|たか]すぎます}} (è troppo caro), {{ja|[広|ひろ]すぎる}} (troppo ampio), {{ja|しずかすぎます}} (troppo silenzioso)\n- Con i verbi: {{ja|[食|た]べすぎました。}} (ho mangiato troppo), {{ja|[飲|の]みすぎました。}}\n\nÈ spesso un lamento: {{ja|この [靴|くつ]は [小|ちい]さすぎます。}} (queste scarpe sono troppo piccole). Con なる: {{ja|[暑|あつ]すぎて [眠|ねむ]れません。}} (fa troppo caldo per dormire).' },
      { h: 'Esempio guidato', b: 'Racconta: *Il ristorante sembra buono, ma è troppo caro. La stanza è diventata silenziosa.*\n\n→ {{ja|あの レストランは おいしそうですが、[高|たか]すぎます。へやが しずかに なりました。}}\n\nControllo: おいしそう (apparenza), たかすぎます (eccesso), しずかに なりました (cambio).\n\nBonus: aggettivo + **の** come pronome: {{ja|[赤|あか]いのを ください。}} (prendo quello rosso); per な: {{ja|きれいなのを ください。}}' },
      { h: 'Errori comuni', b: '- *しずかく* → {{ja|しずかに。}}\n- *いいそう* per «sembra buono» → {{ja|よさそう。}}\n- *たかいすぎる* → {{ja|たかすぎる。}} (togli い)\n- *あついに なりました* → {{ja|あつく なりました。}}\n- *おおきいさ* → {{ja|おおきさ。}}\n- Confondere ～そう (aspetto, radice + そう) con ～そうだ riportato (forma semplice + そうだ): hanno significato e formazione diversi.' },
      { h: 'Riepilogo', b: '- い → く, な → に: avverbi; く/に + なる/する.\n- ～さ: nome astratto (たかさ).\n- ～そう: sembra (おいしそう; よさそう, なさそう).\n- ～すぎる: troppo (たかすぎる, たべすぎる).\n- Aggettivo + の: «quello che è…».' }
    ],
    exercises: [
      mv('Avverbio di はやい:', 'はやく', ['はやに', 'はやいく', 'はやくに'], 0),
      mv('Avverbio di しずか:', 'しずかに', ['しずかく', 'しずかで', 'しずかの'], 3),
      mv('«È diventato caldo»:', 'あつく なりました', ['あつに なりました', 'あついに なりました', 'あつく しました'], 1),
      mv('«Sembra buono (cibo)»:', 'おいしそうです', ['おいしいそうです', 'おいしくそうです', 'おいしさそうです'], 2),
      mv('«È troppo caro»:', 'たかすぎます', ['たかいすぎます', 'たかくすぎます', 'たかさすぎます'], 0),
      lv('このへやは ひろすぎます。', 'Che cosa dice?', 'La stanza è troppo grande', ['La stanza è pulita', 'La stanza è piccola', 'La stanza è fredda'], 3),
      order('Metti in ordine: «La stanza è diventata silenziosa»', ['へやが', 'しずかに', 'なりました'], 'な → に + なる.'),
      fillJ('Completa: おんがくの おとが ちいさ___ なりました。', ['く'], 'ちいさく なりました.')
    ],
    test: [
      mv('«Si è fatto buio»:', 'くらく なりました', ['くらいに なりました', 'くらく なるでした', 'くらくに なりました'], 1),
      mv('«È troppo silenzioso»:', 'しずかすぎます', ['しずかいすぎます', 'しずかなすぎます', 'しずかにすぎます'], 0),
      mv('Come si forma ～そう (aspetto) da un aggettivo い?', 'Si toglie い e si aggiunge そう', ['Forma semplice + そう', 'Si aggiunge の + そう', 'い → く + そう'], 2),
      mv('Nome astratto da «たかい»:', 'たかさ', ['たかいさ', 'たかく', 'たかの'], 3)
    ],
    cards: [card('c1', 'velocemente', '[速|はや]く', '', 'はやく'), card('c2', 'in silenzio', 'しずかに', '', 'しずかに'), card('c3', 'sembra buono', 'おいしそう', '', 'おいしそう'), card('c4', 'sembra divertente', '[楽|たの]しそう', '', 'たのしそう'),
      card('c5', 'troppo', '～すぎる', '', 'すぎる'), card('c6', 'altezza', '[高|たか]さ', '', 'たかさ'), card('c7', 'peso', '[重|おも]さ', '', 'おもさ'), card('c8', 'diventare', 'なる', '', 'なる'), card('c9', 'importante', '[大切|たいせつ]', '', 'たいせつ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Il ristorante', text: 'あの レストランは おいしそうですが、たかすぎます。この みせは やすくて おいしそうです。へやも しずかに なりました。',
      qs: [lq('Com’è il primo ristorante?', 'Sembra buono ma è troppo caro', ['È economico', 'È brutto', 'È troppo piccolo'], 1), lq('Com’è questo negozio?', 'Economico e sembra buono', ['Caro', 'Rumoroso', 'Chiuso'], 0), lq('Che cosa è cambiato?', 'La stanza è silenziosa', ['Il prezzo', 'Il cibo', 'Il tempo'], 2)] }],
    dictation: [{ text: 'このケーキは おいしそうです', lang: 'ja' }, { text: 'このへやは ひろすぎます', lang: 'ja' }, { text: 'へやが しずかに なりました', lang: 'ja' }],
    shadowing: [{ text: 'おいしそうですね。', lang: 'ja', tip: 'そう: so·u, o lunga.' }, { text: 'ちょっと たかすぎます。', lang: 'ja', tip: 'Pausa su っ.' }, { text: 'もっと しずかに して ください。', lang: 'ja', tip: 'して: shi・te.' }],
    speaking: [{ prompt: 'Commenta un dolce che vedi in vetrina.', model: 'おいしそうですね。でも ちょっと たかすぎます。' }, { prompt: 'Di’ che il tempo è diventato freddo.', model: 'さむく なりましたね。' }] });

  T({ id: 'jpn-j2-nai-form-uses', stage: 'J2', prereq: ['jpn-j2-plain-opinion'], title: 'La forma ない: ないで, なくて, なくてもいい', summary: 'Negativo semplice e suoi usi: senza fare, non fare, non è necessario.',
    objectives: ['Formare ない e usarlo come aggettivo', 'Usare ないで (senza / non fare) e なくても いい (non serve)', 'Distinguere ない ほうが いい, なくて e なければ ならない'],
    pages: [
      { h: 'Obiettivo', b: 'La forma **ない** non serve solo a negare: combinata con altri elementi dice «senza», «non fare», «non è necessario». Il suo comportamento è quello di un aggettivo in い, perciò si coniuga come tale.' },
      { h: 'Come funziona ない', b: 'Formazione (vedi i gruppi): {{ja|[飲|の]まない}}, {{ja|[食|た]べない}}, {{ja|しない}}, {{ja|[来|こ]ない}}, {{ja|ない}} (da ある).\n\nSi coniuga come un aggettivo in い:\n- passato: {{ja|[飲|の]まなかった}}\n- て-form: {{ja|[飲|の]まなくて}}\n- cortese: {{ja|[飲|の]まないです}} oppure {{ja|[飲|の]みません}}\n\n{{ja|[昨日|きのう]は [朝|あさ]ごはんを [食|た]べなかった。}} (ieri non ho fatto colazione)' },
      { h: 'ないで: senza, non fare', b: '**Senza fare X**: {{ja|[朝|あさ]ごはんを [食|た]べないで [学校|がっこう]に [行|い]きました。}} (sono andato a scuola senza fare colazione)\n\n**ないでください** = per favore **non** fare:\n- {{ja|ここで [写真|しゃしん]を [撮|と]らないで ください。}}\n- {{ja|[心配|しんぱい]しないで ください。}}\n- {{ja|[遅|おそ]く ならないで ください。}}\n\n**Attenzione**: non si dice *なくて ください*; la forma giusta per la richiesta negativa è **ないで**.' },
      { h: 'なくても いい: non è necessario', b: 'Formazione: ない → **なくても いい**:\n- {{ja|あした [来|こ]なくても いいです。}} (domani non c’è bisogno che tu venga)\n- {{ja|[急|いそ]がなくても いいです。}} (non serve avere fretta)\n- {{ja|[全部|ぜんぶ] [食|た]べなくても いいです。}}\n\nÈ l’opposto di {{ja|～なければ ならない}} (devo) / {{ja|～なくては いけない}}: {{ja|[毎日|まいにち] [勉強|べんきょう]しなければ なりません。}}' },
      { h: 'ない ほうが いい e なくて', b: '- **ないほうが いい** = è meglio non: {{ja|[食|た]べすぎない ほうが いいです。}} / {{ja|[無理|むり]を しない ほうが いいです。}} (non sforzarti)\n- **なくて** = motivo negativo: {{ja|[返事|へんじ]を しなくて すみません。}} (scusa se non ho risposto) / {{ja|[分|わ]からなくて [困|こま]りました。}} (non capendo, ero nei guai)\n\nQuindi: *non dovresti* → ないほうが いい; *non serve* → なくても いい; *non devi (divieto)* → てはいけない.' },
      { h: 'Esempio guidato', b: 'Racconta: *Sono uscito senza ombrello. Oggi non devo andare in ufficio. Non fare tardi, per favore.*\n\n→ {{ja|[傘|かさ]を [持|も]たないで [出|で]かけました。[今日|きょう]は [会社|かいしゃ]に [行|い]かなくても いいです。[遅|おそ]く ならないで ください。}}\n\nControllo: 持たないで (senza), 行かなくても いい (non serve), ならないで ください (richiesta negativa).' },
      { h: 'Errori comuni', b: '- *あらない* → {{ja|ない。}}\n- *たべなくてください* → {{ja|たべないでください。}}\n- *いかないでいいです* per «non serve» è comprensibile, ma la forma standard è {{ja|いかなくても いいです。}}\n- Confondere *なくてもいい* con *なければならない* (obbligo).\n- *しなかった で* al posto di «senza fare» → {{ja|しないで。}}' },
      { h: 'Riepilogo', b: '- ない si coniuga come un aggettivo in い: なかった, なくて.\n- ないで = senza fare; ないでください = non fare.\n- なくても いい = non è necessario.\n- ない ほうが いい = è meglio non.\n- なければ ならない = devo.' }
    ],
    exercises: [
      mv('Negativo semplice di のむ:', 'のまない', ['のみない', 'のむない', 'のめない'], 0),
      mv('Negativo semplice di ある:', 'ない', ['あらない', 'あらず', 'あない'], 2),
      mv('«Per favore non fotografate»:', 'ここで しゃしんを とらないで ください。', ['ここで しゃしんを とらなくて ください。', 'ここで しゃしんを とらないです ください。', 'ここで しゃしんを とるない ください。'], 1),
      mv('«Domani non devi venire»:', 'あした こなくても いいです。', ['あした こないでも いいです。', 'あした きなくても いいです。', 'あした こなければ いいです。'], 3),
      mv('«Sono uscito senza mangiare»:', 'たべないで でかけました。', ['たべなくて でかけました。', 'たべるないで でかけました。', 'たべません でかけました。'], 0),
      fillJ('Completa: おきなく___ いいです。(non serve alzarsi)', ['ても'], 'なくても いい.'),
      lv('ここで たばこを すわないで ください。', 'Che cosa significa?', 'Non fumate qui', ['Fumate pure', 'Fumo qui', 'Dove si fuma?'], 2),
      order('Metti in ordine: «Per favore, non fare tardi»', ['おそく', 'ならないで', 'ください'], 'おそく + ならないで + ください.')
    ],
    test: [
      mv('Negativo semplice di かく:', 'かかない', ['かきない', 'かくない', 'かけない'], 1),
      mv('Passato di たべない:', 'たべなかった', ['たべなくだった', 'たべないでした', 'たべなかたい'], 0),
      mv('«Non dovresti mangiare troppo»:', 'たべすぎない ほうが いいです。', ['たべすぎなくても いいです。', 'たべすぎないで いいです。', 'たべすぎなければ ほうが いいです。'], 3),
      mv('Quale forma significa «non è necessario»?', 'ない + ても いい → なくても いい', ['ないで ください', 'なければ ならない', 'ないほうが いい'], 2)
    ],
    cards: [card('c1', 'non fare (per favore)', '～ないで ください', '', 'ないで ください'), card('c2', 'non è necessario', '～なくても いい', '', 'なくても いい'), card('c3', 'è meglio non', '～ない ほうが いい', '', 'ない ほうが いい'), card('c4', 'devo', '～なければ ならない', '', 'なければ ならない'),
      card('c5', 'preoccuparsi', '[心配|しんぱい]する', '', 'しんぱいする'), card('c6', 'avere fretta', '[急|いそ]ぐ', '', 'いそぐ'), card('c7', 'fotografare', '[写真|しゃしん]を [撮|と]る', '', 'しゃしんを とる'), card('c8', 'ombrello', '[傘|かさ]', '', 'かさ'), card('c9', 'sforzo eccessivo', '[無理|むり]', '', 'むり')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Un consiglio', text: 'あしたは やすみですから、はやく おきなくても いいです。でも あさごはんを たべないで でかけないで ください。むりを しないほうが いいですよ。',
      qs: [lq('Perché non serve alzarsi presto?', 'Domani è un giorno libero', ['Domani piove', 'Ha mal di testa', 'È già tardi'], 1), lq('Che cosa non si deve fare?', 'Uscire senza fare colazione', ['Dormire', 'Mangiare', 'Studiare'], 0), lq('Che consiglio finale riceve?', 'Non sforzarsi', ['Mangiare di più', 'Studiare', 'Uscire presto'], 2)] }],
    dictation: [{ text: 'ここで しゃしんを とらないで ください', lang: 'ja' }, { text: 'あした こなくても いいです', lang: 'ja' }, { text: 'むりを しないほうが いいです', lang: 'ja' }],
    shadowing: [{ text: 'しんぱいしないで ください。', lang: 'ja', tip: 'しんぱい: shim・pa・i.' }, { text: 'いそがなくても いいです。', lang: 'ja', tip: 'なくても: na・ku・te・mo.' }, { text: 'たべすぎない ほうが いいです。', lang: 'ja', tip: 'ほうが: hō ga.' }],
    speaking: [{ prompt: 'Rassicura un amico: non serve che porti niente.', model: 'なにも もってこなくても いいですよ。' }, { prompt: 'Chiedi gentilmente di non fare rumore.', model: 'すみません、さわがないで ください。' }] });

  /* ---------------------------------------------------------------- J3 */
  T({ id: 'jpn-j3-sentence-final-particles', stage: 'J3', prereq: ['jpn-j3-past-experience'], title: 'Particelle finali: ね, よ, か, かな, でしょう', summary: 'Chiedere conferma, informare, domandare, chiedersi e supporre con le particelle di fine frase.',
    objectives: ['Distinguere ね (accordo) da よ (informazione nuova)', 'Usare か e かな per domande e dubbi', 'Usare でしょう con intonazione ascendente o discendente'],
    pages: [
      { h: 'Obiettivo', b: 'Le **particelle finali** non cambiano il senso letterale ma dicono **che cosa vuoi ottenere** dall’interlocutore. Sono la chiave per suonare naturale: senza di esse la frase è corretta ma fredda.' },
      { h: 'ね: cercare accordo', b: '**ね** chiede conferma o crea complicità: «vero?», «non è così?».\n- {{ja|いい [天気|てんき]ですね。}} (bel tempo, vero?)\n- {{ja|この ラーメンは おいしいですね。}}\n- {{ja|[明日|あした]は [休|やす]みですね。}} (domani è libero, giusto?)\n\nCon intonazione ascendente è una vera domanda di conferma; con intonazione discendente è un commento condiviso. Risposta tipica: {{ja|そうですね。}} / {{ja|ええ、そうですね。}}' },
      { h: 'よ: dare un’informazione nuova', b: '**よ** segnala che l’altro **non lo sa**, o che vuoi insistere:\n- {{ja|[電車|でんしゃ]は もう [出|で]ましたよ。}} (guarda che il treno è già partito)\n- {{ja|この [道|みち]は [危|あぶ]ないですよ。}} (attento, è pericoloso)\n- {{ja|あの [店|みせ]は おいしいですよ。}} (ti assicuro che è buono)\n\n**Attenzione**: con un superiore può sembrare presuntuoso; attenua con ですよ o con un tono dolce. **よね** unisce i due: {{ja|おいしいですよね。}} (è buono, vero? lo sai?).' },
      { h: 'か e かな', b: '- **か** a fine frase = domanda cortese: {{ja|[行|い]きますか。}}\n- **か** anche in forme come {{ja|[何|なに]か}} (qualcosa), {{ja|だれか}} (qualcuno), {{ja|どこか}} (da qualche parte)\n- **かな** (informale) = «mi chiedo se…», in parte per sé: {{ja|[明日|あした]は [晴|は]れるかな。}} (chissà se domani farà bel tempo)\n- {{ja|だれか [来|き]たかな。}} (chissà se è venuto qualcuno)\n\nL’equivalente cortese di かな è {{ja|～でしょうか}}: {{ja|[明日|あした]は [晴|は]れるでしょうか。}}; femminile e un po’ datato: {{ja|～かしら}}.' },
      { h: 'でしょう', b: '**でしょう** (informale **だろう / でしょ**) ha due usi legati all’intonazione:\n- **Discendente ↘** = «probabilmente»: {{ja|[明日|あした]は [雨|あめ]でしょう。}} / {{ja|[彼|かれ]は もう [着|つ]いたでしょう。}}\n- **Ascendente ↗** = «vero?», chiede conferma: {{ja|[難|むずか]しいでしょう?}} (è difficile, vero?) / {{ja|おいしいでしょう?}}\n\nIn previsioni e notizie si usa sempre il primo senso: {{ja|[夜|よる]は [雪|ゆき]に なるでしょう。}}' },
      { h: 'Esempio guidato', b: 'Dialogo:\n- {{ja|[今日|きょう]は [寒|さむ]いですね。}}\n- {{ja|そうですね。[明日|あした]は [雪|ゆき]でしょうか。}}\n- {{ja|[天気予報|てんきよほう]に よると、[雪|ゆき]でしょう。}}\n- {{ja|あ、[傘|かさ]を [忘|わす]れましたよ。}}\n- {{ja|ありがとう! [助|たす]かりました。}}\n\nControllo: ね (accordo), でしょうか (supposizione cortese), でしょう (probabile), よ (informazione nuova).' },
      { h: 'Errori comuni', b: '- Usare よ per **chiedere** conferma: *あしたは やすみですよ?* → {{ja|やすみですね?}}\n- Usare *ですかね* con i superiori: troppo familiare.\n- Usare かな con un superiore: preferisci {{ja|でしょうか。}}\n- Non distinguere l’intonazione di でしょう: «probabilmente» (↘) o «vero?» (↗) cambia il senso.\n- Mettere ね e よ in ogni frase: suona infantile.' },
      { h: 'Riepilogo', b: '- ね: accordo, conferma.\n- よ: informazione nuova, avvertimento.\n- よね: informazione + conferma.\n- か: domanda cortese; かな: dubbio informale; でしょうか: dubbio cortese.\n- でしょう ↘ probabilmente; ↗ vero?' }
    ],
    exercises: [
      mv('Cerchi accordo: «Che bel tempo, vero?»', 'いい てんきですね。', ['いい てんきですよ。', 'いい てんきですか。', 'いい てんきですが。'], 1),
      mv('Avverti qualcuno: «Guarda che il treno è partito!»', 'でんしゃは もう でましたよ。', ['でんしゃは もう でましたね。', 'でんしゃは もう でましたか。', 'でんしゃは もう でましたでしょう。'], 0),
      mv('Quale particella esprime un dubbio personale, informale?', 'かな', ['ね', 'よ', 'を'], 3),
      mv('«Domani probabilmente piove»:', 'あしたは あめでしょう。', ['あしたは あめですよ。', 'あしたは あめでしたね。', 'あしたは あめがな。'], 2),
      mv('Come si dice «chissà se è vero» tra amici?', 'ほんとうかな。', ['ほんとうですよ。', 'ほんとうでしょうか、ね。', 'ほんとうです。'], 1),
      lv('あしたは あめでしょう。', 'Che cosa dice?', 'Domani probabilmente piove', ['Ieri è piovuto', 'Piove adesso', 'Domani è sicuro'], 0),
      order('Metti in ordine: «Domani verrà di sicuro»', ['あした', 'きっと', 'くるでしょう'], 'きっと + でしょう.'),
      fillJ('Completa: このラーメン、おいしいです___。(sei d’accordo?)', ['ね'], 'Cerca consenso: ね.')
    ],
    test: [
      mv('Quale versione cortese corrisponde a かな?', 'でしょうか', ['でしょ', 'だよね', 'じゃない'], 2),
      mv('でしょう con intonazione ascendente (↗) significa…', 'vero? (chiede conferma)', ['probabilmente', 'sicuramente no', 'per favore'], 0),
      mv('Che cosa aggiunge よ?', 'Un’informazione che l’altro non conosce', ['Un accordo scontato', 'Una domanda', 'Un tono molto formale'], 3),
      mv('Quale frase è più adatta a parlare con il capo?', 'あしたは あめでしょうか。', ['あしたは あめかな。', 'あしたは あめだよ。', 'あしたは あめだろう。'], 1)
    ],
    cards: [card('c1', 'vero? (accordo)', 'ね', '', 'ね'), card('c2', 'informazione nuova', 'よ', '', 'よ'), card('c3', 'domanda', 'か', '', 'か'), card('c4', 'chissà…', 'かな', '', 'かな'),
      card('c5', 'probabilmente', 'でしょう', '', 'でしょう'), card('c6', 'chissà (cortese)', 'でしょうか', '', 'でしょうか'), card('c7', 'previsioni del tempo', '[天気予報|てんきよほう]', '', 'てんきよほう'), card('c8', 'pericoloso', '[危|あぶ]ない', '', 'あぶない'), card('c9', 'sicuramente', 'きっと', '', 'きっと')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Il tempo', text: 'きょうは さむいですね。そうですね。あしたは ゆきでしょうか。てんきよほうに よると、ゆきでしょう。あ、かさを わすれましたよ。ありがとう。',
      qs: [lq('Com’è il tempo oggi?', 'Freddo', ['Caldo', 'Piovoso', 'Soleggiato'], 1), lq('Che previsione fanno per domani?', 'Probabilmente neve', ['Sole', 'Pioggia', 'Vento forte'], 0), lq('Che cosa ha dimenticato?', 'L’ombrello', ['Il libro', 'Il portafoglio', 'Le chiavi'], 2)] }],
    dictation: [{ text: 'いい てんきですね', lang: 'ja' }, { text: 'でんしゃは もう でましたよ', lang: 'ja' }, { text: 'あしたは あめでしょう', lang: 'ja' }],
    shadowing: [{ text: 'いい てんきですね。', lang: 'ja', tip: 'Intonazione ascendente su ね.' }, { text: 'あぶないですよ。', lang: 'ja', tip: 'Tono deciso su よ.' }, { text: 'あしたは はれるかな。', lang: 'ja', tip: 'かな: ka・na, tono pensieroso.' }],
    speaking: [{ prompt: 'Commenta con un collega il caldo e chiedi se anche a lui sembra.', model: 'きょうは あついですね。' }, { prompt: 'Avverti un amico di un pericolo.', model: 'ここは あぶないですよ。' }] });

  T({ id: 'jpn-j3-connectors-reasoning', stage: 'J3', prereq: ['jpn-j3-reasons-contrast'], title: 'Connettivi: だから, それで, しかし, ところが, つまり', summary: 'Organizzare il discorso: conseguenza, contrasto, sorpresa e riformulazione.',
    objectives: ['Distinguere だから e それで (conseguenza)', 'Scegliere tra しかし, でも e ところが per il contrasto', 'Usare つまり per riformulare'],
    pages: [
      { h: 'Obiettivo', b: 'I **connettivi** collegano una frase alla precedente e ne mostrano il rapporto: causa, contrasto, riformulazione. Usarli bene fa passare da frasi isolate a un discorso coeso. Attenzione: parole simili hanno **sfumature** e **registri** diversi.' },
      { h: 'Conseguenza: だから e それで', b: '- **だから** = «perciò / quindi»: la prima frase è il motivo, la seconda è **conclusione o decisione** (può anche contenere un invito):\n  - {{ja|[雨|あめ]が [降|ふ]って います。だから、[家|いえ]に いましょう。}}\n  - cortese: {{ja|ですから}}\n- **それで** = «e così»: **conseguenza naturale**, di solito dopo un racconto; la seconda frase **non** può essere un ordine o un invito:\n  - {{ja|[電車|でんしゃ]が [遅|おく]れました。それで、[会議|かいぎ]に [遅|おく]れました。}}\n  - Come domanda: {{ja|それで?}} («e allora?»)\n\n**Altri**: {{ja|そして}} (e poi), {{ja|それから}} (dopo di che), {{ja|それに}} (inoltre).' },
      { h: 'Contrasto: しかし, でも, ところが', b: '- **しかし** = «tuttavia»: formale, scritto: {{ja|この [店|みせ]は [安|やす]いです。しかし、[味|あじ]は よくありません。}}\n- **でも** = «ma»: colloquiale, universale: {{ja|[行|い]きたいです。でも、[時間|じかん]が ありません。}}\n- **ところが** = «eppure / ma invece»: l’esito è **opposto alle attese**, di solito con un fatto passato: {{ja|[彼|かれ]は きっと [来|く]ると [思|おも]いました。ところが、[来|こ]ませんでした。}}\n\nDopo ところが non si mette un’opinione o un ordine, solo un fatto inatteso.' },
      { h: 'Riformulazione: つまり', b: '**つまり** = «cioè, in altre parole»: riassume o chiarisce.\n- {{ja|[彼|かれ]は [母|はは]の [兄|あに]の [子|こ]です。つまり、いとこです。}}\n- {{ja|[来週|らいしゅう]から [休|やす]みです。つまり、[一週間|いっしゅうかん] [来|こ]なくても いいです。}}\n\nSinonimi: {{ja|[言|い]い [換|か]えれば}} (detto in altro modo), {{ja|[要|よう]するに}} (in sintesi). Non si usa per introdurre una causa: non confonderlo con だから.' },
      { h: 'Esempio guidato', b: 'Racconta: *Ho studiato molto, quindi dovrei passare. Eppure non sono passato. Cioè dovrò rifare l’esame.*\n\n→ {{ja|たくさん [勉強|べんきょう]しました。だから、[合格|ごうかく]すると [思|おも]いました。ところが、[合格|ごうかく]しませんでした。つまり、もう [一度|いちど] [試験|しけん]を [受|う]けなければ なりません。}}\n\nControllo: だから (motivo → aspettativa), ところが (esito inatteso), つまり (conclusione riformulata).' },
      { h: 'Errori comuni', b: '- *それで、いきましょう* (invito) → {{ja|だから、いきましょう。}}\n- *しかし* nel parlato informale tra amici: suona rigido; usa {{ja|でも。}}\n- *ところが* con un giudizio personale (*ところが、わたしは すきです*) → {{ja|でも / しかし。}}\n- Usare つまり per introdurre un motivo: {{ja|だから}} o {{ja|なぜなら}}.\n- Mettere un connettivo all’inizio di una frase **senza** virgola/pausa nella lettura.\n- Confondere {{ja|それで}} e {{ja|それに}} (inoltre).' },
      { h: 'Riepilogo', b: '- だから / ですから: perciò (anche con inviti).\n- それで: conseguenza naturale (niente inviti).\n- しかし (formale) / でも (colloquiale): ma.\n- ところが: esito opposto alle attese (fatto).\n- つまり: cioè, in altre parole.\n- そして, それから, それに: aggiungere.' }
    ],
    exercises: [
      mv('あめが ふっています。___、うちに いましょう。', 'だから', ['それで', 'ところが', 'つまり'], 1, 'Invito dopo un motivo: だから.'),
      mv('あしたは はれると いいました。___、あめでした。', 'ところが', ['だから', 'つまり', 'それで'], 2, 'Esito opposto alle attese.'),
      mv('かれは ははの あにの こどもです。___、いとこです。', 'つまり', ['それで', 'ところが', 'しかし'], 3),
      mv('Quale connettivo è più adatto a un testo scritto formale («tuttavia»)?', 'しかし', ['でも', 'だから', 'それで'], 0),
      mv('Quale connettivo aggiunge un’informazione («inoltre»)?', 'それに', ['ところが', 'つまり', 'しかし'], 1),
      lv('たくさん べんきょうしました。ところが、ごうかくしませんでした。', 'Che cosa è successo?', 'Ha studiato molto ma non è passato', ['Ha studiato poco ed è passato', 'Non ha studiato', 'È passato senza studiare'], 2),
      order('Metti in ordine: «Vorrei andare, ma non ho tempo»', ['いきたいです', 'でも', 'じかんが', 'ありません'], 'Due frasi unite da でも.'),
      fillJ('Completa: ですから、はやく ねま___。(perciò, andiamo a dormire presto)', ['しょう'], 'ねましょう.')
    ],
    test: [
      mv('Quale connettivo introduce una riformulazione («cioè»)?', 'つまり', ['ところが', 'だから', 'しかし'], 0),
      mv('Dopo それで NON si può mettere…', 'un invito (～ましょう)', ['un fatto passato', 'una conseguenza', 'una domanda'], 3),
      mv('Che cosa significa ですから?', 'perciò (cortese)', ['tuttavia', 'cioè', 'inoltre'], 1),
      mv('Quale connettivo esprime sorpresa per l’esito opposto?', 'ところが', ['それに', 'つまり', 'そして'], 2)
    ],
    cards: [card('c1', 'perciò', 'だから', '', 'だから'), card('c2', 'e così', 'それで', '', 'それで'), card('c3', 'tuttavia', 'しかし', '', 'しかし'), card('c4', 'ma (colloquiale)', 'でも', '', 'でも'),
      card('c5', 'eppure', 'ところが', '', 'ところが'), card('c6', 'cioè', 'つまり', '', 'つまり'), card('c7', 'inoltre', 'それに', '', 'それに'), card('c8', 'e poi', 'それから', '', 'それから'), card('c9', 'in sintesi', '[要|よう]するに', '', 'ようするに')],
    listening: [{ id: 'l1', lang: 'ja', title: 'L’esame', text: 'たくさん べんきょうしました。だから、ごうかくすると おもいました。ところが、ごうかくしませんでした。つまり、もういちど うけなければ なりません。',
      qs: [lq('Perché pensava di passare?', 'Aveva studiato molto', ['Era fortunato', 'L’esame era facile', 'Un amico gli aveva detto di sì'], 1), lq('Che cosa è successo?', 'Non è passato', ['È passato', 'Ha rinunciato', 'L’esame è stato annullato'], 0), lq('Che cosa deve fare ora?', 'Rifare l’esame', ['Cambiare scuola', 'Aspettare', 'Studiare meno'], 2)] }],
    dictation: [{ text: 'あめですから うちに いましょう', lang: 'ja' }, { text: 'ところが あめでした', lang: 'ja' }, { text: 'つまり いとこです', lang: 'ja' }],
    shadowing: [{ text: 'だから、うちに いましょう。', lang: 'ja', tip: 'Pausa breve dopo だから.' }, { text: 'ところが、こませんでした。', lang: 'ja', tip: 'ところが: to・ko・ro・ga, tono di sorpresa.' }, { text: 'つまり、いとこです。', lang: 'ja', tip: 'つまり: tsu・ma・ri.' }],
    speaking: [{ prompt: 'Spiega con due frasi collegate da だから perché resti a casa.', model: 'あめが ふっています。だから、うちに います。' }, { prompt: 'Racconta un esito inatteso con ところが.', model: 'ともだちは くると いいました。ところが、きませんでした。' }] });

  /* ---------------------------------------------------------------- J4 */
  T({ id: 'jpn-j4-te-iru-aspect-variations', stage: 'J4', prereq: ['jpn-j2-te-uses'], title: 'Aspetto con て: ている, てある, ておく, てしまう, てみる', summary: 'Azione in corso, stato risultante, preparazione, rimpianto e tentativo.',
    objectives: ['Distinguere i tre valori di ている (corso, stato, abitudine)', 'Usare てある per lo stato prodotto di proposito e ておく per la preparazione', 'Usare てしまう e てみる con le forme colloquiali'],
    pages: [
      { h: 'Obiettivo', b: 'La forma **て** si combina con alcuni verbi ausiliari che aggiungono **aspetto**: in corso, stato, preparazione, rimpianto, prova. Sono molto frequenti e si usano continuamente nel parlato.' },
      { h: 'ている: tre valori', b: '1. **Azione in corso**: {{ja|いま [勉強|べんきょう]して います。}} (sto studiando)\n2. **Stato risultante** (con verbi di cambiamento): {{ja|[結婚|けっこん]して います。}} (sono sposato) / {{ja|ドアが [開|あ]いて います。}} (la porta è aperta) / {{ja|[知|し]って います。}} (so) / {{ja|[住|す]んで います。}} (abito)\n3. **Abitudine**: {{ja|[毎日|まいにち] [走|はし]って います。}} / {{ja|[銀行|ぎんこう]で [働|はたら]いて います。}}\n\nLo stesso verbo cambia senso: {{ja|[着|き]て います}} = sto indossando (stato), {{ja|[食|た]べて います}} = sto mangiando. Forma colloquiale: **てる**: {{ja|[食|た]べてる。}}' },
      { h: 'てある: stato prodotto di proposito', b: 'Verbo **transitivo** + てある = lo stato prodotto da qualcuno e rimasto; l’oggetto prende **が**:\n- {{ja|[窓|まど]が [開|あ]けて あります。}} (la finestra è stata aperta, qualcuno l’ha fatto per un motivo)\n- {{ja|[壁|かべ]に [絵|え]が [掛|か]けて あります。}} (c’è un quadro appeso)\n- {{ja|[予約|よやく]して あります。}} (ho prenotato)\n\nConfronta con ている + verbo intransitivo: {{ja|[窓|まど]が [開|あ]いて います。}} (la finestra è aperta, senza dire chi). **あけてある** ≈ qualcuno l’ha lasciata aperta apposta.' },
      { h: 'ておく: preparare, lasciare', b: '**ておく** = «fare in anticipo» o «lasciare così»:\n- {{ja|[旅行|りょこう]の [前|まえ]に ホテルを [予約|よやく]して おきます。}} (prima del viaggio prenoto l’albergo)\n- {{ja|[窓|まど]を [開|あ]けて おきます。}} (lascio la finestra aperta)\n- {{ja|[宿題|しゅくだい]を して おいて ください。}} (fai i compiti per tempo)\n\nColloquiale: {{ja|～とく}}: {{ja|[見|み]といて。}} (guardalo per me, già che ci sei).' },
      { h: 'てしまう: completare, rimpiangere', b: '**てしまう** ha due sensi:\n1. **completamento**: {{ja|[宿題|しゅくだい]を [全部|ぜんぶ] して しまいました。}} (ho finito tutti i compiti)\n2. **rammarico o errore**: {{ja|[財布|さいふ]を [落|お]として しまいました。}} (mi è caduto il portafoglio, che guaio) / {{ja|[電車|でんしゃ]を [間違|まちが]えて しまいました。}}\n\nColloquiale: **ちゃう / じゃう**: {{ja|[食|た]べちゃった。}} (ho finito di mangiare / l’ho mangiato per sbaglio), {{ja|[飲|の]んじゃった。}}\n\nÈ spesso un modo per scusarsi e dire che è successo senza volerlo.' },
      { h: 'てみる: provare', b: '**てみる** = «provare a fare» per vedere com’è:\n- {{ja|この ケーキを [食|た]べて みて ください。}} (prova questa torta)\n- {{ja|[日本|にほん]に [行|い]って みたいです。}} (vorrei provare ad andare in Giappone)\n- {{ja|[電話|でんわ]して みます。}} (provo a telefonare)\n\nDice **tentativo** e curiosità, non successo: è quindi più morbido di «fare».' },
      { h: 'Esempio guidato', b: 'Racconta: *Ho prenotato l’albergo. La finestra è lasciata aperta. Ho perso il biglietto, che guaio. Vorrei provare l’onsen.*\n\n→ {{ja|ホテルを [予約|よやく]して あります。[窓|まど]は [開|あ]けて あります。[切符|きっぷ]を [無|な]くして しまいました。[温泉|おんせん]に [入|はい]って みたいです。}}\n\nControllo: 予約してあります (stato), 無くしてしまいました (rimpianto), 入ってみたい (voglia di provare).' },
      { h: 'Errori comuni', b: '- *まどを あけています* per «la finestra è aperta» → {{ja|まどが あいています。}} (intransitivo)\n- *まどが あけてあります* usa **が**, non を.\n- *けっこんしている* confuso con «mi sposo»: significa «sono sposato»; «mi sposo» è {{ja|けっこんします。}}\n- Il negativo di {{ja|しっています}} è {{ja|しりません}} (non *しっていません*).\n- Usare てしまう per cose positive senza intenzione: perde il senso di rimpianto.\n- Confondere ておく con «lasciare»: è anche «preparare».' },
      { h: 'Riepilogo', b: '- ている: in corso / stato / abitudine (てる).\n- てある: stato prodotto di proposito (が + transitivo).\n- ておく: prepararsi / lasciare così (とく).\n- てしまう: completare / rammarico (ちゃう, じゃう).\n- てみる: provare.' }
    ],
    exercises: [
      mv('«Sono sposato» si dice:', 'けっこんして います', ['けっこんします', 'けっこんして みます', 'けっこんして おきます'], 2),
      mv('«La finestra è stata aperta (qualcuno l’ha lasciata così)»:', 'まどが あけて あります', ['まどが あいて います', 'まどを あけて います', 'まどが あいて しまいました'], 0),
      mv('«Prenoto l’albergo in anticipo»:', 'ホテルを よやくして おきます', ['ホテルを よやくして みます', 'ホテルを よやくして しまいます', 'ホテルが よやくして あります'], 1),
      mv('«Mi è caduto il portafoglio, che guaio»:', 'さいふを おとして しまいました', ['さいふを おとして みました', 'さいふを おとして おきました', 'さいふを おとして あります'], 3),
      mv('«Prova questa torta»:', 'このケーキを たべて みて ください', ['このケーキを たべて しまって ください', 'このケーキを たべて あって ください', 'このケーキを たべて います'], 2),
      lv('たべちゃった。', 'Che forma è?', 'Forma colloquiale di たべてしまった', ['Forma di たべてみる', 'Forma di たべておく', 'Forma passiva'], 1),
      order('Metti in ordine: «Ho finito tutti i compiti»', ['しゅくだいを', 'ぜんぶ', 'して', 'しまいました'], 'して + しまいました.'),
      fillJ('Completa: かべに えが かけて ___ ます。(c’è un quadro appeso)', ['あり'], 'かけてあります.')
    ],
    test: [
      mv('Quale forma usa が con il verbo transitivo?', 'てある', ['ている', 'ておく', 'てみる'], 0),
      mv('«Vorrei provare a mangiare il sushi»:', 'すしを たべて みたいです', ['すしを たべて おきたいです', 'すしを たべて しまいたいです', 'すしを たべて あります'], 3),
      mv('Quale coppia è corretta? «La porta è aperta (stato)»', 'ドアが あいて います', ['ドアを あいて います', 'ドアが あけて います', 'ドアを あけて あります'], 2),
      mv('てしまう in forma colloquiale diventa:', 'ちゃう / じゃう', ['とく', 'てる', 'ちゃる'], 1)
    ],
    cards: [card('c1', 'sposarsi / essere sposato', '[結婚|けっこん]する', '', 'けっこんする'), card('c2', 'prenotare', '[予約|よやく]する', '', 'よやくする'), card('c3', 'aprire (trans.)', '[開|あ]ける', '', 'あける'), card('c4', 'aprirsi (intrans.)', '[開|あ]く', '', 'あく'),
      card('c5', 'far cadere', '[落|お]とす', '', 'おとす'), card('c6', 'perdere (oggetto)', '[無|な]くす', '', 'なくす'), card('c7', 'provare a fare', '～てみる', '', 'てみる'), card('c8', 'preparare / lasciare', '～ておく', '', 'ておく'), card('c9', 'sorgente termale', '[温泉|おんせん]', '', 'おんせん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Prima del viaggio', text: 'ホテルは もう よやくして あります。まどは あけて あります。きっぷを なくして しまいました。おんせんに はいって みたいです。',
      qs: [lq('Che cosa è già stato fatto?', 'L’albergo è prenotato', ['Il biglietto è comprato', 'La valigia è pronta', 'Il lavoro è finito'], 2), lq('Che cosa ha perso?', 'Il biglietto', ['Il portafoglio', 'L’ombrello', 'Il telefono'], 0), lq('Che cosa vuole provare?', 'L’onsen', ['Il sushi', 'Il treno', 'La montagna'], 1)] }],
    dictation: [{ text: 'ホテルを よやくして おきます', lang: 'ja' }, { text: 'さいふを おとして しまいました', lang: 'ja' }, { text: 'この おかしを たべて みて ください', lang: 'ja' }],
    shadowing: [{ text: 'まどが あけて あります。', lang: 'ja', tip: 'あけて: a・ke・te.' }, { text: 'たべて みて ください。', lang: 'ja', tip: 'みて: mi・te.' }, { text: 'わすれて しまいました。', lang: 'ja', tip: 'しまいました: shi・ma・i・ma・shi・ta.' }],
    speaking: [{ prompt: 'Di’ che hai prenotato un albergo e che hai perso il biglietto.', model: 'ホテルを よやくして あります。でも、きっぷを なくして しまいました。' }, { prompt: 'Invita un amico a provare un piatto.', model: 'これを たべて みて ください。おいしいですよ。' }] });

  /* ---------------------------------------------------------------- J5 */
  T({ id: 'jpn-j5-grammar-review-n4-n3', stage: 'J5', prereq: ['jpn-j4-conditionals-potential'], title: 'Ripasso N4-N3 con esercizi di correzione', summary: 'Ripasso cumulativo di particelle, forme verbali, condizionali, passivo e causativo, con esercizi di individuazione degli errori.',
    objectives: ['Ripassare le forme verbali principali (ない, た, potenziale, passivo, causativo)', 'Scegliere il condizionale e il connettivo adatti', 'Individuare e correggere gli errori più tipici di livello N4-N3'],
    pages: [
      { h: 'Obiettivo', b: 'Questa lezione riunisce i punti grammaticali di N4 e N3 in un ripasso a tappe. Ogni sezione contiene la regola essenziale e **frasi da correggere**: individuare l’errore è il modo più rapido per fissare la regola.' },
      { h: 'Particelle e ordine della frase', b: '- は tema; が soggetto/novità; を oggetto; に tempo/meta/esistenza/destinatario; で luogo d’azione/mezzo.\n- {{ja|[図書館|としょかん]で [勉強|べんきょう]します。}} ✓ / *としょかんに べんきょうします* ✗\n- {{ja|[友達|ともだち]に [会|あ]います。}} ✓ (persona incontrata = に)\n- {{ja|コーヒーが [好|す]きです。}} ✓ / *コーヒーを すきです* ✗\n- {{ja|[雨|あめ]が [降|ふ]って います。}} ✓ (fenomeno naturale con が)' },
      { h: 'Forme del verbo', b: '- **ない**: G1 a-ない (かわない), G2 radice+ない (たべない), する→しない, くる→こない.\n- **た**: かいた, およいだ, のんだ, かった, はなした; いった; たべた; した; きた.\n- **Potenziale**: G1 → e-row + る ({{ja|[書|か]ける}}, {{ja|[飲|の]める}}); G2 → られる ({{ja|[食|た]べられる}}); する → {{ja|できる}}; くる → {{ja|[来|こ]られる}}.\n- **Passivo**: {{ja|[書|か]かれる}}, {{ja|[食|た]べられる}}, {{ja|される}}, {{ja|[来|こ]られる}}.\n- **Causativo**: {{ja|[書|か]かせる}}, {{ja|[食|た]べさせる}}, {{ja|させる}}, {{ja|[来|こ]させる}}.\n\nRegola: nel potenziale il complemento può prendere が: {{ja|[日本語|にほんご]が [話|はな]せます。}}' },
      { h: 'Condizionali e cause', b: '- **と**: conseguenza naturale, non seguita da richiesta: {{ja|[春|はる]に なると、[桜|さくら]が [咲|さ]きます。}}\n- **ば**: condizione generale: {{ja|[安|やす]ければ、[買|か]います。}}\n- **たら**: dopo che / se (anche con richieste): {{ja|[終|お]わったら、[電話|でんわ]して ください。}}\n- **なら**: se è così: {{ja|[行|い]くなら、[私|わたし]も [行|い]きます。}}\n- **ので** causa oggettiva: {{ja|[雨|あめ]なので、[行|い]きません。}}; **から** causa soggettiva: {{ja|[寒|さむ]いから、[窓|まど]を [閉|し]めて ください。}}\n- **のに** contrasto: {{ja|[勉強|べんきょう]した のに、[落|お]ちました。}}' },
      { h: 'Cambiamento, decisione, scopo', b: '- **ように なる** (cambiamento di capacità/abitudine): {{ja|[日本語|にほんご]が [話|はな]せるように なりました。}}\n- **ことに なる** (viene deciso da altri): {{ja|[来月|らいげつ] [引|ひ]っ[越|こ]す ことに なりました。}}\n- **ことに する** (decido io): {{ja|[毎朝|まいあさ] [走|はし]る ことに しました。}}\n- **ために** (scopo volitivo): {{ja|[日本語|にほんご]を [勉強|べんきょう]する ために、[日本|にほん]に [来|き]ました。}}\n- **ように** (scopo non volitivo/capacità): {{ja|[話|はな]せる ように、[毎日|まいにち] [練習|れんしゅう]します。}}\n- **つもり** (intenzione): {{ja|[来年|らいねん] [行|い]く つもりです。}}' },
      { h: 'Dare, ricevere e riportare', b: '- あげる (da me/altri verso fuori), もらう (ricevere), くれる (verso di me): {{ja|[母|はは]は [私|わたし]に セーターを くれました。}}\n- **Riportato**: forma semplice + {{ja|そうです}}: {{ja|[明日|あした]は [雪|ゆき]が [降|ふ]る そうです。}}\n- **Apparenza**: radice + そう: {{ja|おいしそうです。}}\n- **Inferenza** (da indizi): {{ja|ようです / みたいです}}; **voce o fonte**: {{ja|らしい}}.\n- Registro: {{ja|[先生|せんせい]が くださいました}} (onorifico) / {{ja|[先生|せんせい]に いただきました}} (umile).' },
      { h: 'Drill: trova l’errore', b: 'Correggi (✗ → ✓):\n1. ✗ {{ja|きのう としょかんに べんきょうしました。}} → ✓ {{ja|としょかんで}}\n2. ✗ {{ja|たべるないで ください。}} → ✓ {{ja|たべないで ください。}}\n3. ✗ {{ja|ひまだと、あそびに きて ください。}} → ✓ {{ja|ひまなら / ひまだったら}} (と non ammette richieste)\n4. ✗ {{ja|わたしは どろぼうに さいふを とりました。}} → ✓ {{ja|とられました。}}\n5. ✗ {{ja|にほんごが はなせるに なりました。}} → ✓ {{ja|はなせるように}}\n6. ✗ {{ja|きのうは さむいでした。}} → ✓ {{ja|さむかったです。}}\n7. ✗ {{ja|きのう ほんを かうた。}} → ✓ {{ja|かった。}}\n8. ✗ {{ja|ともだちは わたしに ほんを あげました。}} → ✓ {{ja|くれました。}}' },
      { h: 'Strategia e riepilogo', b: 'Quando correggi una frase, controlla in ordine: **1** particelle, **2** forma del verbo, **3** coniugazione dell’aggettivo, **4** connettivo/condizionale, **5** registro (cortese o semplice).\n\n- G1 / G2 / G3: forme ます, ない, た.\n- Potenziale, passivo, causativo: regole per gruppo.\n- と / ば / たら / なら; ので / から / のに.\n- ように なる, ことに なる/する, ために / ように.\n- あげる / もらう / くれる; そうだ, ようだ, らしい.' }
    ],
    exercises: [
      mv('Quale frase contiene un errore?', 'きのう としょかんに べんきょうしました。', ['わたしは ともだちに ほんを もらいました。', 'このへやは しずかじゃ ありませんでした。', 'あした いかなくても いいです。'], 0),
      mv('Quale frase contiene un errore?', 'ひまだと、あそびに きて ください。', ['はるに なると、さくらが さきます。', 'やすければ、かいます。', 'おわったら、でんわします。'], 0),
      mv('Quale frase contiene un errore?', 'たべるないで ください。', ['ここで たばこを すわないで ください。', 'ここで しゃしんを とらないで ください。', 'しんぱいしないで ください。'], 3),
      mv('Quale frase contiene un errore?', 'わたしは どろぼうに さいふを とりました。', ['せんせいに しかられました。', 'ははは わたしに やさいを たべさせました。', 'ともだちに ほめられました。'], 2),
      mv('Quale frase contiene un errore?', 'にほんごが はなせるに なりました。', ['にほんごが はなせるように なりました。', 'まいあさ はしる ことに しました。', 'らいげつ ひっこす ことに なりました。'], 1),
      lv('にほんごが はなせるように なりました。', 'Che cosa dice?', 'Ora riesce a parlare giapponese', ['Non parla più giapponese', 'Vuole studiare giapponese', 'Parla giapponese a casa'], 2),
      order('Metti in ordine: «Se finisci, telefona per favore»', ['おわったら', 'でんわして', 'ください'], 'たら + richiesta.'),
      fillJ('Completa: きのうは さむ___ です。(passato cortese di さむい)', ['かった'], 'さむかったです.')
    ],
    test: [
      mv('«Mia madre mi ha dato un maglione»:', 'ははは わたしに セーターを くれました。', ['ははは わたしに セーターを あげました。', 'ははが わたしを セーターに もらいました。', 'ははに わたしは セーターを くれました。'], 3),
      mv('Quale forma del potenziale è corretta?', 'たべられる', ['たべれない', 'たべるれる', 'たべさせる'], 1),
      mv('«Ho studiato, eppure sono stato bocciato»:', 'べんきょうした のに、おちました。', ['べんきょうした と、おちました。', 'べんきょうした ように、おちました。', 'べんきょうした なら、おちました。'], 0),
      mv('Quale frase usa correttamente ために (scopo volitivo)?', 'にほんごを べんきょうする ために、にほんに きました。', ['にほんごが はなせる ために、まいにち れんしゅうします。', 'にほんごを はなす ために が なります。', 'にほんご ために べんきょうします。'], 0)
    ],
    cards: [card('c1', 'potenziale (G2)', '[食|た]べられる', '', 'たべられる'), card('c2', 'passivo (G1)', '[書|か]かれる', '', 'かかれる'), card('c3', 'causativo (G2)', '[食|た]べさせる', '', 'たべさせる'), card('c4', 'se / dopo che', '～たら', '', 'たら'),
      card('c5', 'perché (oggettivo)', 'ので', '', 'ので'), card('c6', 'nonostante', 'のに', '', 'のに'), card('c7', 'è stato deciso che', '～ことに なる', '', 'ことになる'), card('c8', 'decido di', '～ことに する', '', 'ことにする'), card('c9', 'ladro', 'どろぼう', '', 'どろぼう'), card('c10', 'pare che (riportato)', '～そうだ', '', 'そうだ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Un anno in Giappone', text: 'わたしは らいげつ ひっこす ことに なりました。にほんごが はなせるように なりましたから、にほんで しごとを したいです。まいあさ はしる ことに しました。',
      qs: [lq('Che cosa è stato deciso?', 'Che si trasferirà il mese prossimo', ['Che cambierà lavoro', 'Che andrà in Italia', 'Che si sposerà'], 1), lq('Perché vuole lavorare in Giappone?', 'Riesce a parlare giapponese', ['Gli piace il cibo', 'Ha amici lì', 'Lo stipendio è alto'], 0), lq('Che decisione personale ha preso?', 'Correre ogni mattina', ['Studiare di notte', 'Mangiare meno', 'Dormire di più'], 2)] }],
    dictation: [{ text: 'にほんごが はなせるように なりました', lang: 'ja' }, { text: 'らいげつ ひっこす ことに なりました', lang: 'ja' }, { text: 'おわったら でんわして ください', lang: 'ja' }],
    shadowing: [{ text: 'べんきょうした のに、おちました。', lang: 'ja', tip: 'のに con tono di delusione.' }, { text: 'まいあさ はしる ことに しました。', lang: 'ja', tip: 'ことに: ko・to・ni, ritmo regolare.' }, { text: 'どろぼうに さいふを とられました。', lang: 'ja', tip: 'とられました: to・ra・re・ma・shi・ta.' }],
    speaking: [{ prompt: 'Racconta una decisione recente con ことにした.', model: 'まいにち にほんごを べんきょうする ことに しました。' }, { prompt: 'Racconta un cambiamento di capacità con ように なった.', model: 'にほんごで でんわが できるように なりました。' }],
    reading: [{ id: 'r1', title: 'Un messaggio a un amico', text: '[来月|らいげつ]から [東京|とうきょう]で [働|はたら]く ことに なりました。[日本語|にほんご]が [話|はな]せるように なりましたが、まだ [漢字|かんじ]は [難|むずか]しいです。[毎日|まいにち] [勉強|べんきょう]する ことに して います。',
      qs: [{ q: 'Che cosa è cambiato dal mese prossimo?', o: ['Lavorerà a Tokyo', 'Studierà a Osaka', 'Tornerà in Italia', 'Smetterà di lavorare'], a: 0 }, { q: 'Che cosa riesce a fare?', o: ['Parlare giapponese', 'Scrivere tutti i kanji', 'Guidare', 'Cantare'], a: 0 }, { q: 'Che cosa ha deciso?', o: ['Studiare ogni giorno', 'Smettere con i kanji', 'Cambiare città', 'Partire presto'], a: 0 }] }] });
})(window.ST = window.ST || {});
