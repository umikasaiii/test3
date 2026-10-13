/* Giapponese — stage J0 (suoni e sopravvivenza) e J1 (verbi in forma cortese).
   Notazione: [漢字|かんじ] = kanji con lettura (ruby). Nelle attività di ascolto/dettato ogni kanji ha la lettura. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, order, listen, card } = C;
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });

  C.addTopic({
    id: 'jpn-j0-sounds', subject: 'jpn', stage: 'J0', title: 'Suoni e ritmo: more, vocali lunghe, っ e ん', minutes: 20, prereq: [],
    summary: 'Come funziona il ritmo del giapponese e perché la durata dei suoni cambia il significato.',
    objectives: ['Contare le more di una parola', 'Distinguere vocali brevi/lunghe e consonanti singole/doppie', 'Usare i saluti di base con pronuncia corretta'],
    pages: [
      { h: 'Obiettivo', b: 'Se conosci hiragana e katakana puoi leggere, ma per **capire e farti capire** serve il ritmo giusto. Il giapponese non conta sillabe: conta **more**, unità di durata quasi uguale.\n\nImparerai a sentire e produrre la differenza tra *oba-san* e *obaa-san* (zia / nonna) e altre coppie che cambiano il significato.' },
      { h: 'La mora', b: 'Ogni kana vale **una mora**, con due eccezioni utili:\n- i kana piccoli ゃ ゅ ょ si fondono con quello prima: きゃ = **una** mora;\n- ん, っ e la barra ー (e la seconda vocale lunga) valgono **una mora ciascuno**.\n\n> {{ja|ビール}} = bi-i-ru = **3 more** · {{ja|ビル}} = bi-ru = **2 more**\n> {{ja|きって}} = ki-t-te = **3 more** · {{ja|きて}} = ki-te = **2 more**\n> {{ja|とうきょう}} = to-u-kyo-u = **4 more**\n\nIl ritmo è regolare: ogni mora dura circa lo stesso tempo, come i battiti di un metronomo.' },
      { h: 'Vocali lunghe, っ, ん', b: '**Vocali lunghe**: una vocale ripetuta dura due more. Cambia il significato:\n- {{ja|おばさん}} (zia/signora) vs {{ja|おばあさん}} (nonna)\n- {{ja|おじさん}} (zio) vs {{ja|おじいさん}} (nonno)\n- {{ja|ゆき}} (neve) vs {{ja|ゆうき}} (coraggio)\n\n**っ (sokuon)**: una piccola pausa prima della consonante: {{ja|きて}} (vieni) vs {{ja|きって}} (francobollo); {{ja|かた}} vs {{ja|かった}} (ha comprato / ha vinto).\n\n**ん**: nasale che dura una mora intera; il suono si adatta a ciò che segue (n/m/ng). {{ja|ほん}}, {{ja|さんぽ}}, {{ja|にほんご}}.' },
      { h: 'Vocali, consonanti, accento', b: '**Vocali**: cinque, pure e stabili (a i u e o): niente dittonghi all’italiana.\n\n**Consonanti**: la **r** giapponese è una battuta rapida della lingua (simile alla d di «ladro» o della t americana in *water*). **ふ** è un suono soffiato, tra f e h. **つ** = tsu.\n\n**Vocali sorde**: in {{ja|です}} e {{ja|ます}} la u finale quasi scompare («des», «mas»).\n\n**Pitch accent**: il giapponese usa differenze di **altezza** (alto/basso), non di intensità. Esempio (Tokyo): {{ja|あめ}} «pioggia» (alto-basso) e {{ja|あめ}} «caramella» (basso-alto). Varia secondo il dialetto: impara ascoltando e ripetendo (shadowing).' },
      { h: 'Saluti essenziali', b: '- {{ja|おはようございます}} — buongiorno (mattina)\n- {{ja|こんにちは}} — salve / buongiorno (giorno)\n- {{ja|こんばんは}} — buonasera\n- {{ja|ありがとうございます}} — grazie\n- {{ja|すみません}} — scusi / mi scusi (anche per attirare l’attenzione)\n- {{ja|いただきます}} — prima di mangiare\n- {{ja|ごちそうさまでした}} — dopo aver mangiato\n- {{ja|おやすみなさい}} — buonanotte\n\nNota: こんにちは si scrive con **は** ma si legge **wa**; è un residuo di una frase più lunga.' },
      { h: 'Esempio guidato', b: 'Conta le more: {{ja|がっこう}} (scuola).\n\nが – っ – こ – う → **4 more**: ga · Q · ko · u.\n\nProva ad ascoltarla e a ripeterla battendo il ritmo con la mano: *ga – Q – ko – u*. La pausa di っ deve essere vuota ma contata.\n\nControllo: se pronunci «gakko» senza pausa e «koo» senza lunghezza, ti capiranno comunque spesso, ma coppie come *oba-san / obaa-san* diventano ambigue.' },
      { h: 'Errori comuni', b: '- Dimenticare la lunghezza: *obasan* per *obaasan*.\n- Pronunciare っ come consonante lunga debole: va sentita come pausa.\n- Mettere un accento d’intensità come in italiano: il giapponese è piatto in intensità.\n- Leggere **は** come *ha* nella particella: è *wa* (lo vedrai nella prossima lezione).\n- Pronunciare ん sempre come «n»: davanti a p/b/m è «m».' },
      { h: 'Riepilogo', b: '- Il giapponese conta **more**: ogni kana = 1 (きゃ = 1).\n- Vocali lunghe, っ e ん contano come more e cambiano il significato.\n- です/ます: u quasi muta; r = battuta rapida.\n- L’accento è di altezza, non di intensità: allenalo con lo shadowing.' }
    ],
    exercises: [
      mc('Quante more ha {{ja|とうきょう}}?', ['2', '3', '4', '5'], 2, 'と・う・きょ・う = 4 more.'),
      mc('Quante more ha ビール?', ['2', '3', '4', '1'], 1, 'bi-i-ru = 3.'),
      listen('おばあさん', 'ja', 'Che cosa hai sentito?', ['nonna (おばあさん)', 'zia (おばさん)', 'zio (おじさん)', 'nonno (おじいさん)'], 0, 'おばあ: vocale lunga.'),
      listen('きって', 'ja', 'Che cosa hai sentito?', ['きて (vieni)', 'きって (francobollo)', 'きた', 'きっと'], 1, 'La pausa della っ fa la differenza.'),
      fillJ('Scrivi in kana: «buonanotte» (è una frase di 5 more + なさい)', ['おやすみなさい'], 'おやすみなさい.'),
      mc('Come si pronuncia は in こんにちは?', ['ha', 'wa', 'fa', 'e'], 1),
      mc('Quale elemento NON conta come mora a sé?', ['ん', 'っ', 'ー', 'ゃ in きゃ'], 3, 'I kana piccoli ゃゅょ si fondono con il precedente.')
    ],
    test: [
      mc('Quale coppia cambia significato per la durata della vocale?', ['おじさん / おじいさん', 'さくら / さくら', 'ねこ / ねこ', 'いぬ / いぬ'], 0),
      listen('ゆうき', 'ja', 'Quale parola hai sentito?', ['ゆき (neve)', 'ゆうき (coraggio)', 'ゆきき', 'ゆっき'], 1, 'Vocale lunga.'),
      mc('Quante more ha がっこう?', ['2', '3', '4', '5'], 2),
      mc('Che tipo di accento ha il giapponese?', ['Di intensità', 'Di altezza (pitch)', 'Nessuno', 'Di durata soltanto'], 1)
    ],
    cards: [
      card('c1', 'buongiorno (mattina)', '{{ja|おはようございます}}', '', 'おはようございます'), card('c2', 'salve', 'こんにちは', '', 'こんにちは'), card('c3', 'grazie', 'ありがとうございます', '', 'ありがとうございます'), card('c4', 'scusi', 'すみません', '', 'すみません'),
      card('c5', 'nonna / signora anziana', 'おばあさん', '', 'おばあさん'), card('c6', 'scuola', 'がっこう', '', 'がっこう'), card('c7', 'francobollo', 'きって', '', 'きって'), card('c8', 'buonanotte', 'おやすみなさい', '', 'おやすみなさい')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Saluti durante la giornata', text: 'おはようございます。きょうは いい てんきですね。あとで いっしょに ひるごはんを たべませんか。いただきます。ごちそうさまでした。',
      qs: [{ q: 'Che momento della giornata è all’inizio?', o: ['La mattina', 'La sera', 'La notte', 'Il pomeriggio'], a: 0, kind: 'explicit' }, { q: 'Che cosa propone il parlante?', o: ['Di fare una passeggiata', 'Di pranzare insieme', 'Di cenare fuori', 'Di studiare'], a: 1, kind: 'explicit' }, { q: 'Quali formule si usano prima e dopo il pasto?', o: ['いただきます / ごちそうさまでした', 'こんにちは / さようなら', 'すみません / ありがとう', 'おはよう / おやすみ'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'おはようございます', lang: 'ja' }, { text: 'ありがとうございます', lang: 'ja' }, { text: 'ごちそうさまでした', lang: 'ja' }],
    shadowing: [{ text: 'おはようございます。きょうは いい てんきですね。', lang: 'ja', tip: 'Ritmo regolare: una mora = un battito. です quasi «des».' }, { text: 'いただきます。', lang: 'ja', tip: 'いただきます: i-ta-da-ki-ma-su = 6 more.' }, { text: 'すみません、ちょっと いいですか。', lang: 'ja', tip: 'っ = pausa breve e vuota.' }],
    speaking: [{ prompt: 'Saluta in tre momenti della giornata (mattina, pomeriggio, sera) e di’ «grazie» una volta.', model: 'おはようございます。こんにちは。こんばんは。ありがとうございます。' }, { prompt: 'Prima di mangiare e dopo aver mangiato, che cosa dici?', model: 'いただきます。ごちそうさまでした。' }]
  });

  C.addTopic({
    id: 'jpn-j0-desu', subject: 'jpn', stage: 'J0', title: 'Presentarsi: A は B です', minutes: 20, prereq: ['jpn-j0-sounds'],
    summary: 'です, は, の, も, か; presentazione, nazionalità, professione, numeri.',
    objectives: ['Presentarsi in modo educato', 'Fare e capire domande semplici con か', 'Usare は, の e も correttamente'],
    pages: [
      { h: 'Obiettivo', b: 'In pochi minuti potrai dire chi sei, da dove vieni e che cosa fai, e fare le stesse domande. La struttura di base è **A は B です** = «A è B».' },
      { h: 'La frase base', b: '**[A] は [B] です**\n\n> {{ja|わたしは [学生|がくせい]です。}} — Sono uno studente / una studentessa.\n> {{ja|[田中|たなか]さんは [先生|せんせい]です。}} — Il signor Tanaka è un insegnante.\n\n- **は** (particella, si legge **wa**) segnala l’**argomento** della frase.\n- **です** è la forma cortese di «essere»: chiude la frase.\n- In giapponese il soggetto si omette spesso quando è chiaro: {{ja|[学生|がくせい]です。}}\n\n**Negazione**: {{ja|[学生|がくせい]じゃ ありません。}} (non sono studente).' },
      { h: 'Domande, も, の', b: '**Domanda**: aggiungi **か** alla fine, senza punto interrogativo obbligatorio. {{ja|[学生|がくせい]ですか。}}\n\n**も** = «anche»: sostituisce は. {{ja|わたしも [学生|がくせい]です。}}\n\n**の** collega due nomi (possesso, appartenenza, descrizione): {{ja|イタリアの [学生|がくせい]}} (studente d’Italia); {{ja|わたしの [名前|なまえ]}} (il mio nome).\n\n**Domande utili**:\n- {{ja|お[名前|なまえ]は なんですか。}} — Come ti chiami?\n- {{ja|おいくつですか。}} — Quanti anni hai?\n- {{ja|どこの [国|くに]の [人|ひと]ですか。}} — Di che paese sei?' },
      { h: 'Parole di sopravvivenza', b: '**Persone**: {{ja|わたし}} (io), {{ja|あなた}} (tu: usalo poco, meglio il nome), {{ja|[友達|ともだち]}} (amico), {{ja|[先生|せんせい]}}, {{ja|[学生|がくせい]}}, {{ja|[会社員|かいしゃいん]}} (impiegato).\n**Paesi**: {{ja|イタリア}}, {{ja|にほん}}, {{ja|アメリカ}}, {{ja|イギリス}}.\n**Numeri 1–10**: {{ja|いち}}, {{ja|に}}, {{ja|さん}}, {{ja|よん}}/{{ja|し}}, {{ja|ご}}, {{ja|ろく}}, {{ja|なな}}/{{ja|しち}}, {{ja|はち}}, {{ja|きゅう}}, {{ja|じゅう}}.\n\n**Suffisso さん**: si aggiunge ai nomi altrui (mai al proprio): {{ja|[田中|たなか]さん}}.' },
      { h: 'Esempio guidato', b: 'Presentati: *Mi chiamo Marco, sono italiano, sono impiegato.*\n\n1. Nome: {{ja|わたしは マルコです。}}\n2. Origine: {{ja|イタリアの [人|ひと]です。}}\n3. Lavoro: {{ja|[会社員|かいしゃいん]です。}}\n4. Chiusura: {{ja|よろしく おねがいします。}}\n\nOra rendila una conversazione: {{ja|A：はじめまして。マルコです。B：[田中|たなか]です。よろしく おねがいします。}}\n\nControllo: ogni frase finisce con です; la presentazione usa わたしは una volta sola e poi omette il soggetto.' },
      { h: 'Errori comuni', b: '- Leggere **は** come *ha*: è *wa* come particella.\n- Dimenticare che per presentarsi si dice solo il nome: {{ja|マルコです。}} basta, senza さん.\n- Usare さん per se stessi: {{ja|わたしは マルコさんです}} è sbagliato.\n- Mettere il punto interrogativo e dimenticare か: la domanda usa か.\n- Usare あなた troppo spesso: suona diretto.' },
      { h: 'Riepilogo', b: '- A は B です = A è B. Negativo: じゃ ありません.\n- か per domandare, も per «anche», の per collegare nomi.\n- さん solo per gli altri.\n- Presentazione tipica: はじめまして → nome → origine → lavoro → よろしく おねがいします.' }
    ],
    exercises: [
      mc('Come si legge la particella は?', ['ha', 'wa', 'e', 'o'], 1),
      mc('Come si dice «Sono studente» ?', ['わたしは がくせい です。', 'わたしを がくせい です。', 'わたしの がくせい です。', 'わたしが がくせい に です。'], 0),
      mc('Quale particella significa «anche»?', ['は', 'も', 'の', 'か'], 1),
      fillJ('Completa: わたし___ イタリアの ひとです。(particella dell’argomento)', ['は', 'wa', 'ha'], 'は (wa).'),
      order('Metti in ordine: «Il signor Tanaka è insegnante»', ['たなかさん', 'は', 'せんせい', 'です'], 'A は B です.'),
      listen('おなまえは なんですか。', 'ja', 'Che cosa ti ha chiesto?', ['Come ti chiami?', 'Quanti anni hai?', 'Dove abiti?', 'Che lavoro fai?'], 0),
      mc('Quale numero è «さん»?', ['2', '3', '4', '5'], 1)
    ],
    test: [
      mc('Come si fa una domanda con です?', ['Aggiungendo か', 'Aggiungendo の', 'Aggiungendo も', 'Cambiando は in が'], 0),
      mc('Che cosa significa «わたしも がくせいです»?', ['Anch’io sono studente', 'Non sono studente', 'Sei studente?', 'Sono il suo studente'], 0),
      mc('Quale uso di さん è corretto?', ['わたしは マルコさんです。', 'たなかさんは せんせいです。', 'わたしさんは がくせいです。', 'せんせいさんが ここです。'], 1),
      listen('わたしは にほんじんじゃ ありません。', 'ja', 'Che cosa significa?', ['Sono giapponese', 'Non sono giapponese', 'Sei giapponese?', 'Anch’io sono giapponese'], 1, 'じゃ ありません = negazione cortese.')
    ],
    cards: [
      card('c1', 'io', 'わたし', '', 'わたし'), card('c2', 'studente', '[学生|がくせい]', '', 'がくせい'), card('c3', 'insegnante', '[先生|せんせい]', '', 'せんせい'), card('c4', 'impiegato', '[会社員|かいしゃいん]', '', 'かいしゃいん'),
      card('c5', 'nome', '[名前|なまえ]', '', 'なまえ'), card('c6', 'paese', '[国|くに]', '', 'くに'), card('c7', 'persona', '[人|ひと]', '', 'ひと'), card('c8', 'piacere (di conoscerti)', 'はじめまして', '', 'はじめまして')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Presentazione', text: 'はじめまして。わたしは マルコです。イタリアの ひとです。かいしゃいんです。にほんごを べんきょうして います。よろしく おねがいします。',
      qs: [{ q: 'Come si chiama il parlante?', o: ['Tanaka', 'Marco', 'Mario', 'Taro'], a: 1, kind: 'explicit' }, { q: 'Che lavoro fa?', o: ['Studente', 'Insegnante', 'Impiegato', 'Medico'], a: 2, kind: 'explicit' }, { q: 'Che cosa sta facendo oltre al lavoro?', o: ['Studia giapponese', 'Studia inglese', 'Viaggia', 'Cucina'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'わたしは がくせいです', lang: 'ja' }, { text: 'おなまえは なんですか', lang: 'ja' }, { text: 'よろしく おねがいします', lang: 'ja' }],
    shadowing: [{ text: 'はじめまして。わたしは マルコです。', lang: 'ja', tip: 'Ritmo regolare, です quasi «des».' }, { text: 'イタリアの ひとです。', lang: 'ja', tip: 'の è breve e chiaro.' }, { text: 'よろしく おねがいします。', lang: 'ja', tip: 'Intonazione cortese, leggermente discendente.' }],
    speaking: [{ prompt: 'Presentati in 4 frasi: nome, origine, lavoro, formula finale.', model: 'はじめまして。わたしは マルコです。イタリアの ひとです。かいしゃいんです。よろしく おねがいします。' }, { prompt: 'Chiedi a qualcuno il nome e da dove viene.', model: 'おなまえは なんですか。どこの くにの ひとですか。' }]
  });

  C.addTopic({
    id: 'jpn-j1-masu', subject: 'jpn', stage: 'J1', title: 'Verbi in forma cortese: ます e particelle', minutes: 20, prereq: ['jpn-j0-desu'],
    summary: 'ます, ません, ました; を, に, で, へ; tempo e routine.',
    objectives: ['Coniugare i verbi nella forma cortese (presente/passato, affermativa/negativa)', 'Usare を, に, で, へ nei contesti base', 'Parlare della routine quotidiana'],
    pages: [
      { h: 'Obiettivo', b: 'Con i verbi in forma **ます** puoi parlare di ciò che fai ogni giorno. Il verbo va sempre **alla fine** della frase, e le particelle indicano il ruolo di ogni parola.' },
      { h: 'La forma ます', b: 'Quattro forme cortesi (presente / passato):\n- affermativa: {{ja|[食|た]べます}} (mangio / mangerò) · {{ja|[食|た]べました}} (ho mangiato)\n- negativa: {{ja|[食|た]べません}} (non mangio) · {{ja|[食|た]べませんでした}} (non ho mangiato)\n\nNel giapponese non esiste un tempo futuro distinto: **presente = abitudine e futuro**. {{ja|あした [行|い]きます。}} = domani vado.\n\nVerbi utili: {{ja|[食|た]べます}}, {{ja|[飲|の]みます}}, {{ja|[行|い]きます}}, {{ja|[来|き]ます}}, {{ja|[見|み]ます}}, {{ja|[聞|き]きます}}, {{ja|[読|よ]みます}}, {{ja|[書|か]きます}}, {{ja|[勉強|べんきょう]します}}, {{ja|[起|お]きます}}, {{ja|[寝|ね]ます}}.' },
      { h: 'Particelle: を, に, で, へ', b: '- **を** (si legge o): oggetto diretto. {{ja|[水|みず]を [飲|の]みます。}}\n- **に**: punto di arrivo, tempo preciso, destinatario. {{ja|[七時|しちじ]に [起|お]きます。}} / {{ja|[学校|がっこう]に [行|い]きます。}}\n- **で**: luogo dell’azione o mezzo. {{ja|[図書館|としょかん]で [勉強|べんきょう]します。}} / {{ja|[電車|でんしゃ]で [行|い]きます。}}\n- **へ** (si legge e): direzione, come に per i movimenti. {{ja|[日本|にほん]へ [行|い]きます。}}\n\nLa differenza fra **に** e **で**: に = dove arrivi o quando; で = dove fai l’azione.' },
      { h: 'Tempo e routine', b: '**Ora + に**: {{ja|[七時|しちじ]に}} (alle 7), {{ja|[八時半|はちじはん]に}} (alle 8:30).\n**Giorni**: {{ja|[毎日|まいにち]}} (ogni giorno), {{ja|[今日|きょう]}}, {{ja|[明日|あした]}}, {{ja|[昨日|きのう]}}. Con まいにち, きょう, あした NON si usa に.\n**Frequenza**: {{ja|よく}} (spesso), {{ja|ときどき}}, {{ja|あまり ～ません}} (non molto), {{ja|ぜんぜん ～ません}} (mai).\n\nOrdine tipico: **tempo → luogo → oggetto → verbo**.\n> {{ja|わたしは [毎朝|まいあさ] [七時|しちじ]に [起|お]きます。}}' },
      { h: 'Esempio guidato', b: 'Racconta: *Ogni mattina bevo un caffè a casa e vado in ufficio in treno.*\n\n1. Tempo: {{ja|[毎朝|まいあさ]}}\n2. Luogo + oggetto + verbo: {{ja|うちで コーヒーを [飲|の]みます。}}\n3. Mezzo e meta: {{ja|[電車|でんしゃ]で [会社|かいしゃ]へ [行|い]きます。}}\n\nFrase completa: {{ja|[毎朝|まいあさ] うちで コーヒーを [飲|の]みます。[電車|でんしゃ]で [会社|かいしゃ]へ [行|い]きます。}}\n\nControllo: i verbi sono in fondo; で indica sia il luogo («a casa») sia il mezzo («in treno»).' },
      { h: 'Errori comuni', b: '- *コーヒー**が** のみます* (oggetto con が): di norma を.\n- *うちに コーヒーを のみます* (luogo dell’azione con に): usa で.\n- *まいにちに* : dopo まいにち non si mette に.\n- Mettere il verbo a metà frase: va **alla fine**.\n- Dimenticare le negazioni cortesi: ません (non ない) nel parlato cortese.' },
      { h: 'Riepilogo', b: '- ます / ません / ました / ませんでした.\n- を oggetto; に arrivo/ora; で luogo azione/mezzo; へ direzione.\n- Ordine: tempo → luogo → oggetto → verbo.\n- Presente = abitudine e futuro.' }
    ],
    exercises: [
      mc('«Non bevo caffè» in forma cortese:', ['コーヒーを のみます', 'コーヒーを のみません', 'コーヒーを のみました', 'コーヒーが のみません です'], 1),
      fillJ('Completa: パン___ たべます。 (oggetto)', ['を', 'o', 'wo'], 'を segna l’oggetto.'),
      mc('Che particella si usa per il luogo dell’azione?', ['に', 'で', 'を', 'へ'], 1),
      order('Metti in ordine: «Alle sette mi alzo»', ['しちじ', 'に', 'おきます'], 'Ora + に + verbo.'),
      listen('まいにち でんしゃで かいしゃへ いきます。', 'ja', 'Che cosa fa ogni giorno?', ['Va in ufficio in treno', 'Torna a casa in bus', 'Va a scuola a piedi', 'Mangia in ufficio'], 0),
      mc('Qual è la forma passata negativa di «食べます»?', ['たべません', 'たべました', 'たべませんでした', 'たべます でした'], 2),
      mc('Quale frase è corretta?', ['としょかんに べんきょうします。', 'としょかんで べんきょうします。', 'としょかんを べんきょうします。', 'としょかんが べんきょうします。'], 1)
    ],
    test: [
      mc('Quale particella segue un orario preciso?', ['を', 'で', 'に', 'は'], 2),
      mc('«Domani vado in Giappone»:', ['あした にほんへ いきます。', 'きのう にほんへ いきます。', 'あした にほんを います。', 'あした にほんで いきます。'], 0),
      fillJ('Scrivi la forma cortese passata di «のむ»: のみ___', ['ました'], 'Passato: ました.'),
      mc('Che cosa significa «ぜんぜん のみません»?', ['Non bevo mai', 'Bevo sempre', 'Bevo poco', 'Ho bevuto'], 0)
    ],
    cards: [
      card('c1', 'mangiare', '[食|た]べます', '', 'たべます'), card('c2', 'bere', '[飲|の]みます', '', 'のみます'), card('c3', 'andare', '[行|い]きます', '', 'いきます'), card('c4', 'guardare/vedere', '[見|み]ます', '', 'みます'),
      card('c5', 'studiare', '[勉強|べんきょう]します', '', 'べんきょうします'), card('c6', 'alzarsi', '[起|お]きます', '', 'おきます'), card('c7', 'ogni giorno', '[毎日|まいにち]', '', 'まいにち'), card('c8', 'treno', '[電車|でんしゃ]', '', 'でんしゃ')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'La giornata di Mari', text: 'まりさんは まいあさ しちじに おきます。パンを たべて、コーヒーを のみます。でんしゃで がっこうへ いきます。ひるごはんは ともだちと たべます。ばんごはんの あとで にほんごを べんきょうします。',
      qs: [{ q: 'A che ora si alza Mari?', o: ['Alle 6', 'Alle 7', 'Alle 8', 'Alle 9'], a: 1, kind: 'explicit' }, { q: 'Come va a scuola?', o: ['In bus', 'In treno', 'A piedi', 'In bici'], a: 1, kind: 'explicit' }, { q: 'Quando studia giapponese?', o: ['Prima di colazione', 'Dopo cena', 'A pranzo', 'Alla mattina'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'まいあさ しちじに おきます', lang: 'ja' }, { text: 'でんしゃで がっこうへ いきます', lang: 'ja' }, { text: 'コーヒーを のみません', lang: 'ja' }],
    shadowing: [{ text: 'まいあさ しちじに おきます。', lang: 'ja', tip: 'Una mora per kana: ま・い・あ・さ.' }, { text: 'でんしゃで かいしゃへ いきます。', lang: 'ja', tip: 'へ si legge e.' }, { text: 'ばんごはんの あとで にほんごを べんきょうします。', lang: 'ja', tip: 'Frase lunga: spezzala in gruppi di senso.' }],
    speaking: [{ prompt: 'Racconta la tua routine del mattino in 4 frasi.', model: 'まいあさ ろくじに おきます。コーヒーを のみます。でんしゃで かいしゃへ いきます。きゅうじに しごとを はじめます。' }, { prompt: 'Di’ che cosa NON fai di solito la sera.', model: 'ばんは テレビを あまり みません。ぜんぜん コーヒーを のみません。' }]
  });

  C.addTopic({
    id: 'jpn-j1-places-wants', subject: 'jpn', stage: 'J1', title: 'Luoghi, esistenza, aggettivi e desideri', minutes: 20, prereq: ['jpn-j1-masu'],
    summary: 'あります/います, い e な aggettivi, ～が すき, ～が ほしい, ～たいです.',
    objectives: ['Dire dove si trovano cose e persone', 'Descrivere con aggettivi in い e な', 'Esprimere preferenze e desideri'],
    pages: [
      { h: 'Obiettivo', b: 'Ora impari a dire **che cosa c’è e dove**, a **descrivere** e a **esprimere ciò che vuoi**. Sono le strutture più usate quando viaggi, fai la spesa o ordini al ristorante.' },
      { h: 'あります / います', b: '- **あります**: esistono cose inanimate (e piante).\n- **います**: persone e animali.\n\n> {{ja|つくえの うえに [本|ほん]が あります。}} — Sul tavolo c’è un libro.\n> {{ja|[公園|こうえん]に [犬|いぬ]が います。}} — Nel parco c’è un cane.\n\nLuogo + **に** + cosa + **が** + あります/います.\n\nPosizioni: {{ja|うえ}} (sopra), {{ja|した}} (sotto), {{ja|まえ}} (davanti), {{ja|うしろ}} (dietro), {{ja|なか}} (dentro), {{ja|となり}} (accanto), {{ja|ちかく}} (vicino).\n\nDomande: {{ja|[駅|えき]は どこですか。}} — Dov’è la stazione? / {{ja|[駅|えき]は [公園|こうえん]の [隣|となり]です。}}' },
      { h: 'Aggettivi in い e in な', b: 'Due famiglie:\n- **い-aggettivi** finiscono in い: {{ja|[大|おお]きい}}, {{ja|[小|ちい]さい}}, {{ja|おいしい}}, {{ja|[高|たか]い}}. Negazione: ～くないです. {{ja|おいしくないです。}}\n- **な-aggettivi** richiedono な davanti a un nome: {{ja|きれいな [部屋|へや]}}, {{ja|[静|しず]かな [町|まち]}}. Negazione: ～じゃ ありません.\n\nPredicato: {{ja|この [店|みせ]は おいしいです。}} / {{ja|この [町|まち]は [静|しず]かです。}}\n\nEccezione frequente: {{ja|いい}} (buono) → negativo {{ja|よくないです}}.' },
      { h: 'Preferenze e desideri', b: '- **～が すきです / きらいです**: piacere / non piacere. {{ja|わたしは [音楽|おんがく]が すきです。}}\n- **～が ほしいです**: voglio (un oggetto). {{ja|あたらしい [靴|くつ]が ほしいです。}}\n- **～たいです**: voglio fare. Radice del verbo (senza ます) + たい. {{ja|[日本|にほん]へ [行|い]きたいです。}} / {{ja|[水|みず]を [飲|の]みたいです。}}\n\nAttenzione: la forma たい riguarda **il parlante**; per altri si usa ～たがっています (più avanti).\n\nNella negazione: {{ja|[行|い]きたくないです。}} (non voglio andare).' },
      { h: 'Esempio guidato', b: 'Descrivi la tua stanza: *Nella mia stanza c’è un grande letto e una scrivania. Sulla scrivania c’è un libro. Vorrei una lampada nuova.*\n\n- {{ja|わたしの [部屋|へや]に [大|おお]きい ベッドと つくえが あります。}}\n- {{ja|つくえの うえに [本|ほん]が あります。}}\n- {{ja|あたらしい ランプが ほしいです。}}\n\nControllo: う/に/が corretti? **に** per il luogo di esistenza, **が** per l’oggetto che c’è.' },
      { h: 'Errori comuni', b: '- *いぬが あります* → {{ja|いぬが います。}} (animati: います).\n- *きれいい* → {{ja|きれいな}} (な-aggettivo, non い).\n- *おいしいじゃありません* → {{ja|おいしくないです。}}\n- *たべますたいです* → {{ja|たべたいです。}} (radice + たい, non ます).\n- Usare **を** con すき: si dice {{ja|おんがくが すきです。}}' },
      { h: 'Riepilogo', b: '- あります (cose) / います (esseri viventi).\n- い-agg.: ～くない; な-agg.: な + nome, じゃ ありません.\n- すき/きらい/ほしい richiedono が.\n- Verbo(radice) + たい = voglio fare.' }
    ],
    exercises: [
      mc('«C’è un gatto nel giardino»:', ['にわに ねこが あります。', 'にわに ねこが います。', 'にわで ねこが います。', 'にわに ねこを います。'], 1),
      mc('Qual è il negativo di おいしい?', ['おいしくないです', 'おいしじゃ ありません', 'おいしくありません です', 'おいしいない です'], 0),
      fillJ('Completa con la particella del luogo di esistenza: こうえん___ いぬが います。', ['に', 'ni'], 'Luogo di esistenza: に.'),
      mc('«Voglio bere acqua»:', ['みずを のみたいです。', 'みずを のみますたいです。', 'みずが のむたいです。', 'みずを のませんです。'], 0),
      order('Metti in ordine: «Sul tavolo c’è un libro»', ['つくえの', 'うえに', 'ほんが', 'あります'], 'Luogo + に + cosa + が + あります.'),
      listen('わたしの へやに おおきい ベッドが あります。', 'ja', 'Che cosa c’è nella stanza?', ['Un grande letto', 'Un piccolo tavolo', 'Una lampada', 'Un cane'], 0),
      mc('Quale è un な-aggettivo?', ['きれい', 'おおきい', 'あたらしい', 'たかい'], 0)
    ],
    test: [
      mc('Per le persone si usa…', ['あります', 'います', 'です', 'ます'], 1),
      mc('«Non voglio andare»:', ['いきたくないです', 'いきません たいです', 'いきたいない', 'いかたくです'], 0),
      fillJ('Scrivi il negativo di しずかです: しずかじゃ ___', ['ありません'], 'じゃ ありません.'),
      mc('«Mi piace la musica»:', ['おんがくが すきです。', 'おんがくを すきです。', 'おんがくに すきです。', 'おんがくで すきです。'], 0)
    ],
    cards: [
      card('c1', 'c’è (cosa)', 'あります', '', 'あります'), card('c2', 'c’è (essere vivente)', 'います', '', 'います'), card('c3', 'grande', '[大|おお]きい', '', 'おおきい'), card('c4', 'piccolo', '[小|ちい]さい', '', 'ちいさい'),
      card('c5', 'delizioso', 'おいしい', '', 'おいしい'), card('c6', 'bello/pulito', 'きれい', '', 'きれい'), card('c7', 'tranquillo', '[静|しず]か', '', 'しずか'), card('c8', 'sopra', 'うえ', '', 'うえ')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al ristorante', text: 'すみません、メニューを おねがいします。わたしは すしが すきですが、きょうは ラーメンが たべたいです。みずも ください。あの みせは ちいさいですが、とても おいしいです。',
      qs: [{ q: 'Che cosa vuole mangiare oggi?', o: ['Sushi', 'Ramen', 'Pasta', 'Riso'], a: 1, kind: 'explicit' }, { q: 'Che cosa gli piace in generale?', o: ['Il ramen', 'Il sushi', 'La pasta', 'Il pane'], a: 1, kind: 'explicit' }, { q: 'Come è il locale?', o: ['Grande e brutto', 'Piccolo ma buono', 'Grande e buono', 'Chiuso'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'つくえの うえに ほんが あります', lang: 'ja' }, { text: 'ラーメンが たべたいです', lang: 'ja' }, { text: 'この みせは ちいさいですが おいしいです', lang: 'ja' }],
    shadowing: [{ text: 'すみません、メニューを おねがいします。', lang: 'ja', tip: 'すみません: す・み・ま・せ・ん = 5 more.' }, { text: 'ラーメンが たべたいです。', lang: 'ja', tip: 'ラーメン: ラ・ー・メ・ン = 4 more.' }, { text: 'あの みせは とても おいしいです。', lang: 'ja', tip: 'Altezza discendente su おいしい.' }],
    speaking: [{ prompt: 'Descrivi la tua stanza con tre frasi usando あります/います.', model: 'わたしの へやに ベッドと つくえが あります。つくえの うえに ほんが あります。へやの そとに ねこが います。' }, { prompt: 'Al ristorante: ordina qualcosa e chiedi dell’acqua.', model: 'すみません。ラーメンを おねがいします。みずも ください。' }]
  });
})(window.ST = window.ST || {});
