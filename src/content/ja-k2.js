/* Giapponese — kanji nel contesto: persone, sentimenti, corpo e salute, casa e cibo (48 nuovi kanji). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, order, listen, card } = C;
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });
  const T = (o) => C.addTopic(Object.assign({ subject: 'jpn', stage: 'J2', minutes: 20 }, o));

  T({ id: 'jpn-j2-kanji-b1', stage: 'J2', prereq: ['jpn-j2-kanji-2b'], title: 'Kanji b1: persone e famiglia', summary: '12 kanji N4/N3: 君 僕 皆 他 妻 孫 祖 婦 老 主 仲 姓.',
    objectives: ['Leggere 12 kanji legati a persone, famiglia e relazioni', 'Capire parole composte come 夫婦, 祖父, 仲間', 'Leggere un breve testo su una famiglia'],
    pages: [
      { h: 'Obiettivo', b: 'Questi kanji ti servono per parlare **delle persone**: come ci si chiama tra amici (君, 僕), i parenti (妻, 孫, 祖) e le relazioni (仲, 主, 他). Li incontri nei dialoghi, nelle presentazioni e nelle lettere.' },
      { h: 'Io, tu e gli altri', b: '- **君** (くん; きみ): tu (confidenziale), suffisso -kun: {{ja|[山田君|やまだくん]}} il signor Yamada (confidenziale), {{ja|[君|きみ]}} tu\n- **僕** (ぼく): io (maschile, informale): {{ja|[僕|ぼく]}} io (maschile), {{ja|[僕|ぼく]たち}} noi (maschile)\n- **皆** (かい; みな): tutti: {{ja|[皆|みな]さん}} tutti voi (cortese), {{ja|[皆|みな]で}} tutti insieme\n- **他** (た; ほか): altro, altri: {{ja|[他|ほか]}} altro, {{ja|[他人|たにん]}} altra persona, estraneo\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Famiglia', b: '- **妻** (さい; つま): moglie: {{ja|[妻|つま]}} mia moglie, {{ja|[夫妻|ふさい]}} marito e moglie\n- **孫** (そん; まご): nipote (di nonni): {{ja|[孫|まご]}} nipote, {{ja|[子孫|しそん]}} discendenti\n- **祖** (そ): antenato, nonno/a (nei composti): {{ja|[祖父|そふ]}} nonno, {{ja|[祖母|そぼ]}} nonna\n- **婦** (ふ): donna sposata: {{ja|[夫婦|ふうふ]}} coniugi, {{ja|[主婦|しゅふ]}} casalinga\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Età, ruoli e relazioni', b: '- **老** (ろう; お(いる)): invecchiare, anziano: {{ja|[老人|ろうじん]}} anziano, {{ja|[老|お]いる}} invecchiare\n- **主** (しゅ; おも, ぬし): principale, padrone: {{ja|[主人|しゅじん]}} marito / padrone di casa, {{ja|[主|おも]に}} principalmente\n- **仲** (ちゅう; なか): rapporto tra persone: {{ja|[仲間|なかま]}} compagno, collega, {{ja|[仲良|なかよ]し}} buoni amici\n- **姓** (せい): cognome: {{ja|[姓名|せいめい]}} nome e cognome, {{ja|[姓|せい]}} cognome\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Strategie per ricordare', b: '- **君** e **僕** sono informali: 君 si usa verso un coetaneo o un inferiore, 僕 lo usano gli uomini di sé stessi.\n- **夫婦** = marito + donna sposata; **主婦** = padrona di casa + donna sposata: ricorda 婦 come «donna di casa» (女 a sinistra).\n- **祖父/祖母** hanno la stessa base 祖: poi 父 (padre) o 母 (madre).\n- **仲** = 亻(persona) + 中 (mezzo): «il mezzo tra le persone», cioè il rapporto.\n- Impara le parole intere, non il singolo kanji.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[祖父|そふ]と [祖母|そぼ]は [孫|まご]と [仲良|なかよ]しです。[皆|みな]さん、[主人|しゅじん]と [妻|つま]を [紹介|しょうかい]します。}}\n\n→ *I nonni vanno molto d’accordo con il nipote. Signori, vi presento mio marito e mia moglie.*' },
      { h: 'Errori comuni', b: '- Confondere 君 (くん, きみ) con 若/者: 君 ha 口 sotto 尹.\n- Leggere 他 come *ひと*: significa «altro» (ほか, た).\n- Usare 僕 con un superiore: è informale.\n- Scambiare 妻 (つま, moglie propria) con 奥さん (la moglie di un altro).\n- Confondere 仲 con 件 o 伸: 仲 ha 中 a destra.\n- Leggere 皆 sempre *かい*: da solo è みな.' },
      { h: 'Riepilogo', b: '- 君 きみ/くん, 僕 ぼく, 皆 みな, 他 ほか/た.\n- 妻 つま, 孫 まご, 祖父 そふ, 祖母 そぼ, 夫婦 ふうふ.\n- 老人 ろうじん, 主人 しゅじん, 仲間 なかま, 姓 せい.' }
    ],
    exercises: [
      mc('Come si legge 山田君?', ['ぼく', 'やまだくん', 'みなさん', 'ほか'], 1),
      mc('Come si legge 僕?', ['ぼく', 'ほか', 'つま', 'まご'], 0),
      mc('Come si legge 皆さん?', ['まご', 'そふ', 'ふうふ', 'みなさん'], 3),
      mc('Che cosa significa 他?', ['donna sposata', 'invecchiare, anziano', 'altro, altri', 'principale, padrone'], 2),
      mc('Come si legge 妻?', ['しゅじん', 'つま', 'なかま', 'せいめい'], 1),
      mc('Che cosa significa 孫?', ['nipote (di nonni)', 'cognome', 'tu (confidenziale), suffisso -kun', 'io (maschile, informale)'], 0),
      listen('そふと そぼは まごと なかよしです。', 'ja', 'Che cosa dice?', ['I nonni vanno d’accordo con il nipote', 'Il marito e la moglie litigano', 'I nipoti sono lontani', 'Gli amici sono tutti qui'], 0),
      order('Metti in ordine: «Mia moglie e mio nipote vanno d’accordo»', ['つまと', 'まごは', 'なかが', 'いいです'], 'Soggetto + は + なかが いいです.'),
      fillJ('Come si legge 祖父?', ['そふ'], 'そふ.')
    ],
    test: [
      mc('Come si legge 夫婦?', ['ほか', 'つま', 'まご', 'ふうふ'], 3),
      mc('Come si legge 老人?', ['まご', 'そふ', 'ろうじん', 'ふうふ'], 2),
      mc('Che cosa significa 主?', ['donna sposata', 'principale, padrone', 'invecchiare, anziano', 'rapporto tra persone'], 1),
      mc('Come si legge 仲間?', ['なかま', 'しゅじん', 'せいめい', 'やまだくん'], 0),
      mc('«Tutti insieme» si scrive:', ['[皆|みな]で', '[他|ほか]で', '[君|きみ]で', '[老|お]で'], 0, '皆 = tutti.'),
      mc('Come si legge 姓名?', ['やまだくん', 'ぼく', 'せいめい', 'みなさん'], 2)
    ],
    cards: [card('c1', 'il signor Yamada (confidenziale)', '[山田君|やまだくん]', '', 'やまだくん'), card('c2', 'io (maschile)', '[僕|ぼく]', '', 'ぼく'), card('c3', 'tutti voi (cortese)', '[皆|みな]さん', '', 'みなさん'), card('c4', 'altro', '[他|ほか]', '', 'ほか'), card('c5', 'mia moglie', '[妻|つま]', '', 'つま'), card('c6', 'nipote', '[孫|まご]', '', 'まご'), card('c7', 'nonno', '[祖父|そふ]', '', 'そふ'), card('c8', 'coniugi', '[夫婦|ふうふ]', '', 'ふうふ'), card('c9', 'anziano', '[老人|ろうじん]', '', 'ろうじん'), card('c10', 'marito / padrone di casa', '[主人|しゅじん]', '', 'しゅじん'), card('c11', 'compagno, collega', '[仲間|なかま]', '', 'なかま'), card('c12', 'nome e cognome', '[姓名|せいめい]', '', 'せいめい')],
    listening: [{ id: 'l1', lang: 'ja', title: 'La mia famiglia', text: 'わたしの かぞくを しょうかいします。そふと そぼは ふうふで、まごの わたしと なかよしです。ちちは しゅふの ははを たすけます。みなさん、よろしく おねがいします。',
      qs: [{ q: 'Chi sono i nonni per chi parla?', o: ['Gli amici', 'I genitori', 'Il nonno e la nonna', 'I vicini'], a: 2, kind: 'explicit' }, { q: 'Con chi vanno d’accordo?', o: ['Con il nipote', 'Con il vicino', 'Con il capo', 'Con i colleghi'], a: 0, kind: 'explicit' }, { q: 'Che lavoro fa la madre?', o: ['Impiegata', 'Casalinga', 'Medico', 'Insegnante'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'そふと そぼが います', lang: 'ja' }, { text: 'みなさん こんにちは', lang: 'ja' }, { text: 'なかまと あそびます', lang: 'ja' }],
    shadowing: [{ text: 'そふと そぼが います。', lang: 'ja', tip: 'そふ: so・fu / そぼ: so・bo.' }, { text: 'みなさん、こんにちは。', lang: 'ja', tip: 'みなさん: mi・na・sa・n.' }, { text: 'ぼくは なかまと あそびます。', lang: 'ja', tip: 'なかま: na・ka・ma.' }],
    speaking: [{ prompt: 'Presenta due membri della tua famiglia.', model: 'わたしの そふと そぼは ふうふです。ふたりは まごと なかよしです。' }, { prompt: 'Presenta te stesso e i tuoi amici a un gruppo.', model: 'みなさん、はじめまして。ぼくは ロッシです。なかまを しょうかいします。' }],
    reading: [{ id: 'r1', title: 'La famiglia di Yamada', text: '[山田君|やまだくん]の [家族|かぞく]を [紹介|しょうかい]します。[祖父|そふ]と [祖母|そぼ]は [夫婦|ふうふ]で、[孫|まご]の [山田君|やまだくん]と [仲良|なかよ]しです。[妻|つま]の [他|ほか]に、[主人|しゅじん]の [仲間|なかま]も よく [来|き]ます。[皆|みな]さんは [元気|げんき]です。',
      qs: [{ q: 'Chi sono Yamada-kun e i nonni?', o: ['Nipote e nonni', 'Fratelli', 'Colleghi', 'Vicini'], a: 0 }, { q: 'Come sono i rapporti?', o: ['Cattivi', 'Buoni', 'Freddi', 'Lontani'], a: 1 }, { q: 'Chi viene spesso a casa oltre alla moglie?', o: ['I compagni del marito', 'I vicini', 'I medici', 'I clienti'], a: 0 }] }] });

  T({ id: 'jpn-j3-kanji-b2', stage: 'J3', prereq: ['jpn-j3-kanji-3b'], title: 'Kanji b2: sentimenti e comunicazione', summary: '12 kanji N4/N3: 愛 喜 幸 祝 怒 悲 怖 嫌 驚 記 届 謝.',
    objectives: ['Leggere 12 kanji di sentimenti e comunicazione', 'Descrivere emozioni con aggettivi e verbi', 'Leggere un breve messaggio di scuse e di auguri'],
    pages: [
      { h: 'Obiettivo', b: 'Con questi kanji esprimi **come ti senti** (gioia, rabbia, paura) e **comunichi** con gli altri (annotare, consegnare, scusarsi, festeggiare). Compaiono in messaggi, diari e biglietti.' },
      { h: 'Gioia e felicità', b: '- **愛** (あい): amore: {{ja|[愛|あい]}} amore, {{ja|[愛情|あいじょう]}} affetto\n- **喜** (き; よろこ(ぶ)): gioire: {{ja|[喜|よろこ]ぶ}} rallegrarsi, {{ja|[大喜|おおよろこ]び}} grande gioia\n- **幸** (こう; しあわ(せ)): felicità: {{ja|[幸|しあわ]せ}} felice, {{ja|[不幸|ふこう]}} infelicità\n- **祝** (しゅく; いわ(う)): festeggiare: {{ja|[祝|いわ]う}} festeggiare, {{ja|[お祝|おいわ]い}} festeggiamento, regalo\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Emozioni negative', b: '- **怒** (ど; おこ(る)): arrabbiarsi: {{ja|[怒|おこ]る}} arrabbiarsi, {{ja|[怒|いか]り}} rabbia\n- **悲** (ひ; かな(しい)): triste: {{ja|[悲|かな]しい}} triste, {{ja|[悲|かな]しみ}} tristezza\n- **怖** (ふ; こわ(い)): che fa paura: {{ja|[怖|こわ]い}} spaventoso, {{ja|[恐怖|きょうふ]}} paura, terrore\n- **嫌** (けん; きら(い), いや): detestare: {{ja|[嫌|きら]い}} che non piace, {{ja|[嫌|いや]}} sgradevole, no\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Sorpresa e comunicazione', b: '- **驚** (きょう; おどろ(く)): stupirsi: {{ja|[驚|おどろ]く}} stupirsi, {{ja|[驚|おどろ]き}} sorpresa\n- **記** (き): annotare: {{ja|[日記|にっき]}} diario, {{ja|[記入|きにゅう]}} compilare\n- **届** (とど(く)): arrivare, consegnare: {{ja|[届|とど]く}} arrivare a destinazione, {{ja|[届|とど]ける}} consegnare\n- **謝** (しゃ; あやま(る)): scusarsi, ringraziare: {{ja|[謝|あやま]る}} scusarsi, {{ja|[感謝|かんしゃ]}} gratitudine\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Strategie per ricordare', b: '- Molti kanji di emozione hanno **心** o **忄** (cuore): 怒, 悲, 怖, 愛. Se vedi il cuore, pensa a un sentimento.\n- Gli aggettivi in **い** hanno la parte kana alla fine: 悲**しい**, 怖**い**; i verbi anche: 喜**ぶ**, 驚**く**, 怒**る**.\n- **幸せ** si scrive 幸 + せ; non scrivere *幸わせ*.\n- **記** e **謝** hanno 言 (parola): sono azioni di comunicazione.\n- Abbina i contrari: 喜ぶ ↔ 悲しい, 好き ↔ 嫌い, 幸せ ↔ 不幸.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[誕生日|たんじょうび]を [祝|いわ]って もらって、[大喜|おおよろこ]びでした。でも [手紙|てがみ]が [届|とど]かなくて、[少|すこ]し [悲|かな]しいです。}}\n\n→ *Mi hanno festeggiato il compleanno e ho gioito molto. Ma la lettera non è arrivata e sono un po’ triste.*' },
      { h: 'Errori comuni', b: '- *幸わせ* → {{ja|しあわせ}} è 幸せ.\n- Leggere 嫌 *けんい* invece di きらい/いや.\n- Confondere 怒 (おこる) e 恕: fai attenzione a 心 sotto.\n- Usare 怖い per «bello»: 怖い significa «che fa paura».\n- Dimenticare che 届く è intransitivo e 届ける è transitivo.\n- Scambiare 謝る (scusarsi) con 誤る (sbagliare).' },
      { h: 'Riepilogo', b: '- 愛 あい, 喜ぶ よろこぶ, 幸せ しあわせ, 祝う いわう.\n- 怒る おこる, 悲しい かなしい, 怖い こわい, 嫌い きらい.\n- 驚く おどろく, 日記 にっき, 届く とどく, 謝る あやまる.' }
    ],
    exercises: [
      mc('Come si legge 愛?', ['よろこぶ', 'あい', 'しあわせ', 'いわう'], 1),
      mc('Come si legge 喜ぶ?', ['よろこぶ', 'いわう', 'おこる', 'かなしい'], 0),
      mc('Come si legge 幸せ?', ['かなしい', 'こわい', 'きらい', 'しあわせ'], 3),
      mc('Che cosa significa 祝?', ['detestare', 'stupirsi', 'festeggiare', 'annotare'], 2),
      mc('Come si legge 怒る?', ['にっき', 'おこる', 'とどく', 'あやまる'], 1),
      mc('Che cosa significa 悲?', ['triste', 'scusarsi, ringraziare', 'amore', 'gioire'], 0),
      listen('ともだちに あやまりました。', 'ja', 'Che cosa dice?', ['Si è scusato con un amico', 'Ha scritto a un amico', 'Ha litigato con un amico', 'Ha festeggiato un amico'], 0),
      order('Metti in ordine: «Ho scritto nel diario»', ['にっきに', 'かきました'], 'Luogo/mezzo + に + verbo.'),
      fillJ('Come si legge 怖い?', ['こわい'], 'こわい.')
    ],
    test: [
      mc('Come si legge 嫌い?', ['いわう', 'おこる', 'かなしい', 'きらい'], 3),
      mc('Come si legge 驚く?', ['かなしい', 'こわい', 'おどろく', 'きらい'], 2),
      mc('Che cosa significa 記?', ['detestare', 'annotare', 'stupirsi', 'arrivare, consegnare'], 1),
      mc('Come si legge 届く?', ['とどく', 'にっき', 'あやまる', 'あい'], 0),
      mc('«Sono felice» si scrive:', ['[幸|しあわ]せです', '[怒|おこ]ります', '[悲|かな]しいです', '[嫌|きら]いです'], 0, '幸せ = felice.'),
      mc('Come si legge 謝る?', ['あい', 'よろこぶ', 'あやまる', 'しあわせ'], 2)
    ],
    cards: [card('c1', 'amore', '[愛|あい]', '', 'あい'), card('c2', 'rallegrarsi', '[喜|よろこ]ぶ', '', 'よろこぶ'), card('c3', 'felice', '[幸|しあわ]せ', '', 'しあわせ'), card('c4', 'festeggiare', '[祝|いわ]う', '', 'いわう'), card('c5', 'arrabbiarsi', '[怒|おこ]る', '', 'おこる'), card('c6', 'triste', '[悲|かな]しい', '', 'かなしい'), card('c7', 'spaventoso', '[怖|こわ]い', '', 'こわい'), card('c8', 'che non piace', '[嫌|きら]い', '', 'きらい'), card('c9', 'stupirsi', '[驚|おどろ]く', '', 'おどろく'), card('c10', 'diario', '[日記|にっき]', '', 'にっき'), card('c11', 'arrivare a destinazione', '[届|とど]く', '', 'とどく'), card('c12', 'scusarsi', '[謝|あやま]る', '', 'あやまる')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Una giornata strana', text: 'きょうは ともだちの たんじょうびを いわいました。ともだちは おおよろこびでした。でも わたしの てがみが とどかなくて、かなしいです。あしたは あやまります。',
      qs: [{ q: 'Che cosa hanno festeggiato?', o: ['Un matrimonio', 'Un compleanno', 'Un esame', 'Un viaggio'], a: 1, kind: 'explicit' }, { q: 'Come stava l’amico?', o: ['Arrabbiato', 'Molto contento', 'Spaventato', 'Annoiato'], a: 1, kind: 'explicit' }, { q: 'Perché è triste chi parla?', o: ['La lettera non è arrivata', 'Ha perso un amico', 'Ha mal di testa', 'Piove'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'おおよろこびです', lang: 'ja' }, { text: 'てがみが とどきます', lang: 'ja' }, { text: 'ともだちに あやまります', lang: 'ja' }],
    shadowing: [{ text: 'おおよろこびです。', lang: 'ja', tip: 'よろこび: yo・ro・ko・bi.' }, { text: 'てがみが とどきます。', lang: 'ja', tip: 'とどきます: to・do・ki・ma・su.' }, { text: 'ともだちに あやまります。', lang: 'ja', tip: 'あやまる: a・ya・ma・ru.' }],
    speaking: [{ prompt: 'Di’ come ti senti oggi e perché.', model: 'きょうは しあわせです。ともだちが いわって くれました。' }, { prompt: 'Scusati con un amico per un ritardo.', model: 'おくれて ごめんなさい。あやまります。かなしい おもいを させました。' }],
    reading: [{ id: 'r1', title: 'Il diario di Mia', text: '[日記|にっき]を [書|か]きます。[今日|きょう]は [友達|ともだち]の [誕生日|たんじょうび]を [祝|いわ]いました。[友達|ともだち]は [大喜|おおよろこ]びで、[私|わたし]も [幸|しあわ]せでした。でも、[母|はは]に [送|おく]った [手紙|てがみ]が [届|とど]かなくて、[少|すこ]し [悲|かな]しいです。',
      qs: [{ q: 'Che cosa ha festeggiato?', o: ['Il compleanno di un’amica', 'Il Natale', 'Le nozze', 'Una laurea'], a: 0 }, { q: 'Come si sente all’inizio?', o: ['Felice', 'Arrabbiata', 'Spaventata', 'Stanca'], a: 0 }, { q: 'Perché è un po’ triste?', o: ['La lettera alla madre non è arrivata', 'Ha perso il diario', 'Ha litigato con un’amica', 'Non ha mangiato'], a: 0 }] }] });

  T({ id: 'jpn-j4-kanji-b3', stage: 'J4', prereq: ['jpn-j4-kanji-4b'], title: 'Kanji b3: corpo e salute', summary: '12 kanji N3: 腕 指 肩 髪 胸 腹 背 腰 眠 健 康 治.',
    objectives: ['Leggere 12 kanji N3 di corpo e salute', 'Descrivere dolori e stanchezza', 'Leggere un testo su salute e sonno'],
    pages: [
      { h: 'Obiettivo', b: 'Dopo 頭, 顔 e 足 completi il vocabolario del corpo con **braccia, dita, spalle, capelli, petto, pancia, schiena e fianchi**, più i kanji di **salute e guarigione**. Sono fondamentali dal medico e in palestra.' },
      { h: 'Arti e testa', b: '- **腕** (わん; うで): braccio: {{ja|[腕|うで]}} braccio, {{ja|[腕時計|うでどけい]}} orologio da polso\n- **指** (し; ゆび, さ(す)): dito, indicare: {{ja|[指|ゆび]}} dito, {{ja|[指|さ]す}} indicare\n- **肩** (けん; かた): spalla: {{ja|[肩|かた]}} spalla, {{ja|[肩|かた]こり}} rigidità alle spalle\n- **髪** (はつ; かみ): capelli: {{ja|[髪|かみ]}} capelli, {{ja|[髪|かみ]の[毛|け]}} capelli (peli del capo)\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Tronco', b: '- **胸** (きょう; むね): petto: {{ja|[胸|むね]}} petto, {{ja|[胸|むね]が[痛|いた]い}} avere dolore al petto\n- **腹** (ふく; はら): pancia: {{ja|[腹|はら]}} pancia, {{ja|お[腹|なか]}} pancia, stomaco\n- **背** (はい; せ, せい): schiena, statura: {{ja|[背中|せなか]}} schiena, {{ja|[背|せ]が[高|たか]い}} alto di statura\n- **腰** (よう; こし): fianchi, parte bassa della schiena: {{ja|[腰|こし]}} fianchi, schiena bassa, {{ja|[腰|こし]が[痛|いた]い}} avere mal di schiena\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Sonno e salute', b: '- **眠** (みん; ねむ(い), ねむ(る)): sonno, dormire: {{ja|[眠|ねむ]い}} assonnato, {{ja|[眠|ねむ]る}} dormire\n- **健** (けん; すこ(やか)): sano, robusto: {{ja|[健全|けんぜん]}} sano, sano di mente, {{ja|[健|すこ]やか}} sano, in buona salute\n- **康** (こう): tranquillo, sano: {{ja|[健康|けんこう]}} salute, {{ja|[健康的|けんこうてき]}} salutare\n- **治** (じ, ち; なお(る), なお(す)): guarire: {{ja|[治|なお]る}} guarire, {{ja|[治|なお]す}} curare, riparare\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Strategie per ricordare', b: '- Quasi tutte le parti del corpo hanno **月** (carne, 肉月) a sinistra: 腕, 腰, 胸, 腹, 背, 肩 (sotto).\n- **健康** si scrive sempre in coppia: 健 (forte) + 康 (tranquillo).\n- **治る** (guarire da sé) e **直る** (essere riparato) si leggono uguale: なおる.\n- **お腹** si legge おなか, non *おはら*: è una lettura speciale.\n- Frase tipo: parte del corpo + が + 痛い.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[最近|さいきん]、[肩|かた]と [腰|こし]が [痛|いた]くて、よく [眠|ねむ]れません。[健康|けんこう]の ために、[毎日|まいにち] [歩|ある]きます。[早|はや]く [治|なお]るといいです。}}\n\n→ *Ultimamente mi fanno male spalle e schiena e non riesco a dormire bene. Per la salute cammino ogni giorno. Spero di guarire presto.*' },
      { h: 'Errori comuni', b: '- Leggere 腹 *おなか* senza お: la forma comune è お腹.\n- Confondere 背 (せ) con 北 (きた): 背 ha 月 sotto 北.\n- 治る e 直る: il primo è per malattie e ferite.\n- Dimenticare 月 a sinistra: 胸 non è *匈*.\n- Leggere 指 solo *ゆび*: come verbo è 指す (さす).\n- 眠い è «assonnato», 眠る «dormire».' },
      { h: 'Riepilogo', b: '- 腕 うで, 指 ゆび, 肩 かた, 髪 かみ.\n- 胸 むね, お腹 おなか, 背中 せなか, 腰 こし.\n- 眠い ねむい, 健康 けんこう, 治る なおる.' }
    ],
    exercises: [
      mc('Come si legge 腕?', ['ゆび', 'うで', 'かた', 'かみ'], 1),
      mc('Come si legge 指?', ['ゆび', 'かみ', 'むね', 'はら'], 0),
      mc('Come si legge 肩?', ['はら', 'せなか', 'こし', 'かた'], 3),
      mc('Che cosa significa 髪?', ['fianchi, parte bassa della schiena', 'sonno, dormire', 'capelli', 'sano, robusto'], 2),
      mc('Come si legge 胸?', ['けんぜん', 'むね', 'けんこう', 'なおる'], 1),
      mc('Che cosa significa 腹?', ['pancia', 'guarire', 'braccio', 'dito, indicare'], 0),
      listen('かたが こって います。', 'ja', 'Che cosa dice?', ['Ha le spalle rigide', 'Ha mal di pancia', 'Ha sonno', 'Ha freddo'], 0),
      order('Metti in ordine: «Ho mal di schiena»', ['こしが', 'いたいです'], 'Parte del corpo + が + いたいです.'),
      fillJ('Come si legge 背中?', ['せなか'], 'せなか.')
    ],
    test: [
      mc('Come si legge 腰?', ['かみ', 'むね', 'はら', 'こし'], 3),
      mc('Come si legge 眠い?', ['はら', 'せなか', 'ねむい', 'こし'], 2),
      mc('Che cosa significa 健?', ['fianchi, parte bassa della schiena', 'sano, robusto', 'sonno, dormire', 'tranquillo, sano'], 1),
      mc('Come si legge 健康?', ['けんこう', 'けんぜん', 'なおる', 'うで'], 0),
      mc('«Guarire» si dice:', ['[治|なお]る', '[眠|ねむ]る', '[指|さ]す', '[怖|こわ]い'], 0, '治る = guarire.'),
      mc('Come si legge 治る?', ['うで', 'ゆび', 'なおる', 'かた'], 2)
    ],
    cards: [card('c1', 'braccio', '[腕|うで]', '', 'うで'), card('c2', 'dito', '[指|ゆび]', '', 'ゆび'), card('c3', 'spalla', '[肩|かた]', '', 'かた'), card('c4', 'capelli', '[髪|かみ]', '', 'かみ'), card('c5', 'petto', '[胸|むね]', '', 'むね'), card('c6', 'pancia', '[腹|はら]', '', 'はら'), card('c7', 'schiena', '[背中|せなか]', '', 'せなか'), card('c8', 'fianchi, schiena bassa', '[腰|こし]', '', 'こし'), card('c9', 'assonnato', '[眠|ねむ]い', '', 'ねむい'), card('c10', 'sano, sano di mente', '[健全|けんぜん]', '', 'けんぜん'), card('c11', 'salute', '[健康|けんこう]', '', 'けんこう'), card('c12', 'guarire', '[治|なお]る', '', 'なおる')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Dal fisioterapista', text: 'さいきん かたと こしが いたくて、よく ねむれません。むねも すこし へんです。せなかを のばして、まいにち あるいて ください。けんこうの ために がんばります。',
      qs: [{ q: 'Dove ha dolore?', o: ['Spalle e schiena', 'Braccia', 'Dita', 'Pancia'], a: 0, kind: 'explicit' }, { q: 'Che problema ha di notte?', o: ['Non dorme bene', 'Dorme troppo', 'Ha incubi', 'Ha fame'], a: 0, kind: 'explicit' }, { q: 'Che consiglio riceve?', o: ['Camminare ogni giorno', 'Correre', 'Stare a letto', 'Non lavorare'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'かたが いたいです', lang: 'ja' }, { text: 'よく ねむれません', lang: 'ja' }, { text: 'けんこうに いいです', lang: 'ja' }],
    shadowing: [{ text: 'かたが いたいです。', lang: 'ja', tip: 'かた: ka・ta.' }, { text: 'よく ねむれません。', lang: 'ja', tip: 'ねむれません: ne・mu・re・ma・se・n.' }, { text: 'けんこうに いいです。', lang: 'ja', tip: 'けんこう: ke・n・ko・o.' }],
    speaking: [{ prompt: 'Di’ al medico dove hai dolore.', model: 'かたと こしが いたいです。よく ねむれません。' }, { prompt: 'Dai un consiglio a un amico stanco.', model: 'けんこうの ために、はやく ねて ください。なおるまで やすんで ください。' }],
    reading: [{ id: 'r1', title: 'Salute e sonno', text: '[最近|さいきん]、[肩|かた]と [腰|こし]が [痛|いた]くて、よく [眠|ねむ]れません。[健康|けんこう]の ために、[毎日|まいにち] [歩|ある]きます。[背中|せなか]も [伸|の]ばします。[早|はや]く [治|なお]るといいです。',
      qs: [{ q: 'Dove ha dolore?', o: ['Spalle e schiena', 'Testa', 'Piedi', 'Orecchie'], a: 0 }, { q: 'Che cosa non riesce a fare bene?', o: ['Dormire', 'Mangiare', 'Camminare', 'Leggere'], a: 0 }, { q: 'Che cosa fa ogni giorno?', o: ['Cammina', 'Nuota', 'Dorme di giorno', 'Beve caffè'], a: 0 }] }] });

  T({ id: 'jpn-j5-kanji-b4', stage: 'J5', prereq: ['jpn-j5-kanji-5b'], title: 'Kanji b4: casa e cibo', summary: '12 kanji N4/N3: 牛 塩 甘 辛 焼 冷 皿 窓 庭 掃 除 階.',
    objectives: ['Leggere 12 kanji di casa, pulizie e cucina', 'Descrivere i sapori e le preparazioni', 'Leggere un testo sulla vita domestica'],
    pages: [
      { h: 'Obiettivo', b: 'Questi kanji ti servono **in cucina e in casa**: sapori (甘い, 辛い), cotture (焼く), utensili (皿), e le parti della casa (窓, 庭, 階) con le pulizie (掃除). Li trovi su menù, ricette e annunci di affitto.' },
      { h: 'Ingredienti e sapori', b: '- **牛** (ぎゅう; うし): mucca, manzo: {{ja|[牛|うし]}} mucca, {{ja|[牛肉|ぎゅうにく]}} carne di manzo\n- **塩** (えん; しお): sale: {{ja|[塩|しお]}} sale, {{ja|[塩辛|しおから]い}} salato\n- **甘** (かん; あま(い)): dolce: {{ja|[甘|あま]い}} dolce, {{ja|[甘口|あまくち]}} gusto dolce\n- **辛** (しん; から(い), つら(い)): piccante, salato: {{ja|[辛|から]い}} piccante, {{ja|[辛口|からくち]}} gusto secco, piccante\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Cottura e tavola', b: '- **焼** (しょう; や(く)): cuocere, arrostire: {{ja|[焼|や]く}} arrostire, {{ja|[焼肉|やきにく]}} carne alla griglia\n- **冷** (れい; つめ(たい), ひ(える)): freddo: {{ja|[冷|つめ]たい}} freddo (al tatto), {{ja|[冷蔵庫|れいぞうこ]}} frigorifero\n- **皿** (さら): piatto: {{ja|[皿|さら]}} piatto, {{ja|[小皿|こざら]}} piattino\n- **窓** (そう; まど): finestra: {{ja|[窓|まど]}} finestra, {{ja|[窓口|まどぐち]}} sportello\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Giardino e pulizie', b: '- **庭** (てい; にわ): giardino: {{ja|[庭|にわ]}} giardino, {{ja|[家庭|かてい]}} famiglia, focolare\n- **掃** (そう; は(く)): spazzare: {{ja|[掃|は]く}} spazzare, {{ja|[掃除|そうじ]}} pulizie\n- **除** (じょ; のぞ(く)): togliere: {{ja|[除|のぞ]く}} togliere, escludere, {{ja|[除外|じょがい]}} esclusione\n- **階** (かい): piano (di un edificio): {{ja|[二階|にかい]}} primo piano (secondo livello), {{ja|[階段|かいだん]}} scala\n\nLeggi ad alta voce ogni parola e copri la lettura per controllare.' },
      { h: 'Strategie per ricordare', b: '- **掃除** è una parola fissa: 掃 (spazzare) + 除 (togliere). Si legge そうじ.\n- **甘い** e **辛い** sono contrari di sapore; 辛い può anche significare «duro, penoso» (つらい).\n- **焼く** si usa per cuocere alla griglia, al forno o in padella: 焼き魚, 焼肉.\n- **冷たい** è per cose tangibili; per il tempo si usa 寒い.\n- **二階** è il piano superiore al pianoterra in Giappone: pianoterra = 一階.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[庭|にわ]の [窓|まど]を [開|あ]けて、[二階|にかい]を [掃除|そうじ]します。[晩|ばん]ごはんは [牛肉|ぎゅうにく]を [焼|や]いて、[塩|しお]を かけます。[冷|つめ]たい [皿|さら]に のせます。}}\n\n→ *Apro la finestra sul giardino e pulisco il primo piano. Per cena arrostisco il manzo e lo condisco con sale. Lo servo su un piatto freddo.*' },
      { h: 'Errori comuni', b: '- Leggere 辛い sempre *つらい*: nel sapore è からい.\n- Confondere 塩 (sale) con 監: 塩 ha 土 a sinistra.\n- Scambiare 冷たい (cose) con 寒い (tempo).\n- Leggere 階 *かん* invece di かい.\n- Confondere 掃 con 帰: 掃 ha 扌 (mano).\n- Dimenticare che 二階 in Italia sarebbe «primo piano».' },
      { h: 'Riepilogo', b: '- 牛 うし/ぎゅう, 塩 しお, 甘い あまい, 辛い からい.\n- 焼く やく, 冷たい つめたい, 皿 さら.\n- 窓 まど, 庭 にわ, 掃除 そうじ, 階 かい.' }
    ],
    exercises: [
      mc('Come si legge 牛?', ['しお', 'うし', 'あまい', 'からい'], 1),
      mc('Come si legge 塩?', ['しお', 'からい', 'やく', 'つめたい'], 0),
      mc('Come si legge 甘い?', ['つめたい', 'さら', 'まど', 'あまい'], 3),
      mc('Che cosa significa 辛?', ['finestra', 'giardino', 'piccante, salato', 'spazzare'], 2),
      mc('Come si legge 焼く?', ['はく', 'やく', 'のぞく', 'にかい'], 1),
      mc('Che cosa significa 冷?', ['freddo', 'piano (di un edificio)', 'mucca, manzo', 'sale'], 0),
      listen('おさらを あらいます。', 'ja', 'Che cosa dice?', ['Lava i piatti', 'Cucina la carne', 'Pulisce la finestra', 'Apre il frigo'], 0),
      order('Metti in ordine: «Pulisco la finestra»', ['まどを', 'そうじします'], 'Oggetto + を + そうじします.'),
      fillJ('Come si legge 皿?', ['さら'], 'さら.')
    ],
    test: [
      mc('Come si legge 窓?', ['からい', 'やく', 'つめたい', 'まど'], 3),
      mc('Come si legge 庭?', ['つめたい', 'さら', 'にわ', 'まど'], 2),
      mc('Che cosa significa 掃?', ['finestra', 'spazzare', 'giardino', 'togliere'], 1),
      mc('Come si legge 除く?', ['のぞく', 'はく', 'にかい', 'うし'], 0),
      mc('«Piccante» si dice:', ['[辛|から]い', '[甘|あま]い', '[冷|つめ]たい', '[塩|しお]'], 0, '辛い = piccante.'),
      mc('Come si legge 二階?', ['うし', 'しお', 'にかい', 'あまい'], 2)
    ],
    cards: [card('c1', 'mucca', '[牛|うし]', '', 'うし'), card('c2', 'sale', '[塩|しお]', '', 'しお'), card('c3', 'dolce', '[甘|あま]い', '', 'あまい'), card('c4', 'piccante', '[辛|から]い', '', 'からい'), card('c5', 'arrostire', '[焼|や]く', '', 'やく'), card('c6', 'freddo (al tatto)', '[冷|つめ]たい', '', 'つめたい'), card('c7', 'piatto', '[皿|さら]', '', 'さら'), card('c8', 'finestra', '[窓|まど]', '', 'まど'), card('c9', 'giardino', '[庭|にわ]', '', 'にわ'), card('c10', 'spazzare', '[掃|は]く', '', 'はく'), card('c11', 'togliere, escludere', '[除|のぞ]く', '', 'のぞく'), card('c12', 'primo piano (secondo livello)', '[二階|にかい]', '', 'にかい')],
    listening: [{ id: 'l1', lang: 'ja', title: 'La cena di domenica', text: 'にちようびは にかいを そうじして、まどを あけます。ばんごはんは ぎゅうにくを やいて、しおを かけます。つめたい おさらに のせて、あまい デザートも たべます。',
      qs: [{ q: 'Che cosa pulisce?', o: ['Il primo piano', 'Il giardino', 'Il bagno', 'La strada'], a: 0, kind: 'explicit' }, { q: 'Che cosa cucina per cena?', o: ['Pesce', 'Carne di manzo', 'Pollo', 'Riso'], a: 1, kind: 'explicit' }, { q: 'Che dolce mangia?', o: ['Un dolce', 'Un frutto', 'Un gelato', 'Niente'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'まどを あけます', lang: 'ja' }, { text: 'おさらを あらいます', lang: 'ja' }, { text: 'にかいを そうじします', lang: 'ja' }],
    shadowing: [{ text: 'まどを あけます。', lang: 'ja', tip: 'まど: ma・do.' }, { text: 'おさらを あらいます。', lang: 'ja', tip: 'おさら: o・sa・ra.' }, { text: 'にかいを そうじします。', lang: 'ja', tip: 'そうじ: so・o・ji.' }],
    speaking: [{ prompt: 'Descrivi cosa fai per pulire la casa.', model: 'まどを あけて、にかいを そうじします。にわも きれいに します。' }, { prompt: 'Descrivi il sapore di un piatto.', model: 'これは あまくて、すこし からいです。しおも ちょうど いいです。' }],
    reading: [{ id: 'r1', title: 'Una domenica a casa', text: '[日曜日|にちようび]は [二階|にかい]を [掃除|そうじ]して、[窓|まど]を [開|あ]けます。[庭|にわ]の [花|はな]を [見|み]ながら、[牛肉|ぎゅうにく]を [焼|や]いて、[塩|しお]を かけます。[冷|つめ]たい [皿|さら]に のせて、[甘|あま]い [物|もの]も [食|た]べます。',
      qs: [{ q: 'Dove pulisce?', o: ['Al primo piano', 'In garage', 'In giardino', 'Al ristorante'], a: 0 }, { q: 'Che cosa guarda?', o: ['I fiori del giardino', 'La tv', 'Il mare', 'Un film'], a: 0 }, { q: 'Su che piatto serve?', o: ['Freddo', 'Caldo', 'Rotto', 'Piccolo'], a: 0 }] }] });
})(window.ST = window.ST || {});
