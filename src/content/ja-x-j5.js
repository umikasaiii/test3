/* Giapponese — ampliamento stage J5 (lingua parlata e lettura). */
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
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J5', minutes: 20, prereq: ['jpn-j4-giving-polite'] }, o));

  T({ id: 'jpn-j5-keigo', title: 'Keigo: onorifico e umile in pratica', summary: 'Verbi onorifici e umili più frequenti, e come costruirli.',
    objectives: ['Distinguere sonkeigo (onorifico) e kenjōgo (umile)', 'Usare i verbi speciali più comuni', 'Costruire お～になる / お～する'],
    pages: [
      { h: 'Obiettivo', b: 'Il **keigo** (linguaggio di rispetto) si usa con clienti, superiori e in contesti formali. Ha due direzioni: **innalzare l’altro** (sonkeigo) e **abbassare sé stessi** (kenjōgo). Qui impari i verbi speciali più frequenti.' },
      { h: 'Sonkeigo: onorifico', b: 'Verbi speciali per le azioni **dell’altro**:\n- {{ja|いる}} / {{ja|[行|い]く}} / {{ja|[来|く]る}} → {{ja|いらっしゃる}}\n- {{ja|[言|い]う}} → {{ja|おっしゃる}}\n- {{ja|[食|た]べる}} / {{ja|[飲|の]む}} → {{ja|[召|め]し[上|あ]がる}}\n- {{ja|[見|み]る}} → {{ja|ごらんになる}}\n- {{ja|する}} → {{ja|なさる}}\n- {{ja|[知|し]っている}} → {{ja|ごぞんじだ}}\n- {{ja|くれる}} → {{ja|くださる}}\n\n> {{ja|[先生|せんせい]は [何|なに]を [召|め]し[上|あ]がりますか。}}' },
      { h: 'Kenjōgo: umile', b: 'Verbi per le azioni **proprie** quando rivolte a un superiore:\n- {{ja|いる}} → {{ja|おる}}; {{ja|[行|い]く}}/{{ja|[来|く]る}} → {{ja|まいる / [伺|うかが]う}}\n- {{ja|[言|い]う}} → {{ja|[申|もう]す / [申|もう]し[上|あ]げる}}\n- {{ja|[食|た]べる}} / {{ja|[飲|の]む}} → {{ja|いただく}}\n- {{ja|[見|み]る}} → {{ja|[拝見|はいけん]する}}\n- {{ja|する}} → {{ja|いたす}}\n- {{ja|[知|し]っている}} → {{ja|ぞんじて おる}}\n- {{ja|もらう}} → {{ja|いただく}}; {{ja|あげる}} → {{ja|さしあげる}}\n\n> {{ja|[明日|あした] [伺|うかが]います。}} / {{ja|ロッシと [申|もう]します。}}' },
      { h: 'Costruzioni regolari', b: '- **Sonkeigo**: **お + radice + になる**: {{ja|[先生|せんせい]は もう お[帰|かえ]りに なりました。}} / **～れる / ～られる** (forma passiva): {{ja|[先生|せんせい]が [来|こ]られました。}}\n- **Kenjōgo**: **お + radice + する/いたす**: {{ja|[荷物|にもつ]を お[持|も]ちします。}} / {{ja|ご[案内|あんない]いたします。}}\n- Richieste: **お + radice + ください**: {{ja|[少々|しょうしょう]お[待|ま]ちください。}}\n\nPrefissi: **お** (parole giapponesi) / **ご** (parole sino-giapponesi): {{ja|お[名前|なまえ]}}, {{ja|ご[住所|じゅうしょ]}}.' },
      { h: 'Servizio e formule', b: '- {{ja|いらっしゃいませ。}} (benvenuto)\n- {{ja|[何名様|なんめいさま]ですか。}} (quante persone?)\n- {{ja|かしこまりました。}} (certamente)\n- {{ja|[少々|しょうしょう]お[待|ま]ちください。}}\n- {{ja|[恐|おそ]れ[入|い]ります。}} (mi scuso / grazie)\n- {{ja|[申|もう]し[訳|わけ]ございません。}}\n- {{ja|ございます}} = あります (cortese): {{ja|[こちらに ございます。}}' },
      { h: 'Esempio guidato', b: 'Al cliente: *Che cosa desidera? Aspetti un momento, per favore. Le mostro il menu.*\n\n→ {{ja|[何|なに]を [召|め]し[上|あ]がりますか。[少々|しょうしょう]お[待|ま]ちください。メニューを お[見|み]せします。}}\n\nA un superiore (umile): {{ja|[明日|あした]、[資料|しりょう]を お[持|も]ちします。}}' },
      { h: 'Errori comuni', b: '- Usare il sonkeigo per sé stessi: *私が いらっしゃいます* (sbagliato).\n- Usare l’umile per l’altro.\n- Doppio keigo: *おっしゃられる* (eccessivo).\n- *ご* con parole giapponesi e *お* con parole sino-giapponesi, ma con eccezioni.\n- Usare keigo con amici e familiari.' },
      { h: 'Riepilogo', b: '- Sonkeigo = l’altro; kenjōgo = io.\n- Verbi: いらっしゃる, おっしゃる, 召し上がる; 申す, いただく, 伺う.\n- お～になる / お～する.\n- Servizio: かしこまりました, ございます.' }
    ],
    exercises: [
      mc('Onorifico di «dire» (l’altro):', ['おっしゃる', 'もうす', 'いう', 'いわれる'], 0),
      mc('Umile di «dire» (io):', ['もうす', 'おっしゃる', 'いらっしゃる', 'めしあがる'], 0),
      mc('Onorifico di «mangiare»:', ['めしあがる', 'いただく', 'たべる', 'いたす'], 0),
      mc('Umile di «ricevere / mangiare»:', ['いただく', 'めしあがる', 'くださる', 'なさる'], 0),
      mc('«Un momento, per favore»:', ['しょうしょう おまちください。', 'ちょっと まって。', 'まてよ。', 'まった。'], 0),
      listen('なにを めしあがりますか。', 'ja', 'Che cosa chiede?', ['Che cosa desidera mangiare', 'Che ora è', 'Dov’è la stazione', 'Come si chiama'], 0),
      fillJ('Completa: ロッシと ___ ます。(umile: dire)', ['もうし'], 'もうします.')
    ],
    test: [
      mc('«いらっしゃる» significa (onorifico)…', ['essere / andare / venire', 'dire', 'mangiare', 'vedere'], 0),
      mc('«拝見する» è…', ['umile di vedere', 'onorifico di vedere', 'onorifico di dire', 'umile di essere'], 0),
      mc('«お待ちください»', ['Attenda, per favore', 'Non aspetti', 'Mi aspetti', 'Aspettavo'], 0),
      mc('Con un cliente si usa…', ['sonkeigo per le sue azioni', 'solo forma semplice', 'solo kenjōgo', 'nessun keigo'], 0)
    ],
    cards: [card('c1', 'essere/andare (onor.)', 'いらっしゃる', '', 'いらっしゃる'), card('c2', 'dire (onor.)', 'おっしゃる', '', 'おっしゃる'), card('c3', 'mangiare (onor.)', '[召|め]し[上|あ]がる', '', 'めしあがる'), card('c4', 'dire (umile)', '[申|もう]す', '', 'もうす'),
      card('c5', 'ricevere/mangiare (umile)', 'いただく', '', 'いただく'), card('c6', 'vedere (umile)', '[拝見|はいけん]する', '', 'はいけんする'), card('c7', 'andare (umile)', '[伺|うかが]う', '', 'うかがう'), card('c8', 'certamente', 'かしこまりました', '', 'かしこまりました')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Al ristorante (servizio)', text: 'いらっしゃいませ。なんめいさまですか。ふたりです。かしこまりました。こちらへ どうぞ。なにを めしあがりますか。てんぷらを いただきます。しょうしょう おまちください。おまたせいたしました。',
      qs: [{ q: 'Quante persone sono?', o: ['Due', 'Tre', 'Una', 'Quattro'], a: 0, kind: 'explicit' }, { q: 'Che cosa ordinano?', o: ['Tempura', 'Sushi', 'Ramen', 'Curry'], a: 0, kind: 'explicit' }, { q: 'Che registro usa il personale?', o: ['Molto formale (keigo)', 'Informale', 'Gergale', 'Amichevole'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'しょうしょう おまちください', lang: 'ja' }, { text: 'なにを めしあがりますか', lang: 'ja' }, { text: 'あした うかがいます', lang: 'ja' }],
    shadowing: [{ text: 'しょうしょう おまちください。', lang: 'ja', tip: 'Tono di servizio: chiaro.' }, { text: 'なにを めしあがりますか。', lang: 'ja', tip: 'Cortese: ascendente leggero.' }, { text: 'あした うかがいます。', lang: 'ja', tip: 'Umile: tono morbido.' }],
    speaking: [{ prompt: 'Accogli un cliente e chiedi che cosa desidera usando il keigo.', model: 'いらっしゃいませ。なにを めしあがりますか。しょうしょう おまちください。' }, { prompt: 'Presentati e dì che andrai a trovare un cliente domani (umile).', model: 'ロッシと もうします。あした おきゃくさまの ところへ うかがいます。' }] });

  T({ id: 'jpn-j5-conversation-strategies', title: 'Strategie di conversazione: aizuchi, riformulazione, cambio argomento', summary: 'Come mostrare ascolto, riparare l’incomprensione e gestire il turno.',
    objectives: ['Usare gli aizuchi in modo naturale', 'Chiedere ripetizioni e riformulare', 'Cambiare argomento e chiudere con garbo'],
    pages: [
      { h: 'Obiettivo', b: 'Una conversazione giapponese si regge sugli **aizuchi** (cenni di ascolto) e su formule per **riparare** l’incomprensione. Se non li usi, il tuo interlocutore penserà che non stai ascoltando.' },
      { h: 'Aizuchi', b: 'Mostrano che segui:\n- {{ja|はい / ええ / うん}} (sì, ti seguo)\n- {{ja|そうですか / そうなんですか}} (davvero? / capisco)\n- {{ja|なるほど}} (ah, capisco)\n- {{ja|へえ / ほんとうですか}} (sorpresa)\n- {{ja|そうですね}} (concordo)\n\nUsali ogni 2–3 frasi: il silenzio è percepito come disinteresse.' },
      { h: 'Chiedere ripetizione e chiarire', b: '- {{ja|もう [一度|いちど] [言|い]って ください。}} / {{ja|もう [少|すこ]し ゆっくり [話|はな]して ください。}}\n- {{ja|すみません、よく わかりませんでした。}}\n- {{ja|[～|～]は どういう [意味|いみ]ですか。}} (che cosa significa?)\n- {{ja|[～|～]と いうのは [～|～]ですか。}} (vuol dire…?)\n- {{ja|もう [少|すこ]し [簡単|かんたん]に [言|い]って いただけますか。}}' },
      { h: 'Riformulare e parafrasare', b: 'Se non conosci una parola:\n- {{ja|[～|～]と いう [意味|いみ]で…}} (nel senso di…)\n- {{ja|つまり、…}} (cioè, in altre parole)\n- {{ja|[例|たと]えば、…}} (per esempio)\n- {{ja|えーと、なんと [言|い]えば いいかな…}} (come dire…)\n\nEvita il silenzio: usa **えーと / あのう** per riempire.' },
      { h: 'Cambiare argomento e chiudere', b: '- {{ja|ところで、…}} (a proposito)\n- {{ja|[話|はなし]は [変|か]わりますが、…}} (cambiando discorso)\n- {{ja|そろそろ [失礼|しつれい]します。}} (è ora che vada)\n- {{ja|[今日|きょう]は ありがとうございました。}}\n- {{ja|また [連絡|れんらく]しますね。}}\n\nIl rifiuto di continuare è spesso indiretto.' },
      { h: 'Esempio guidato', b: 'Scena: stai parlando con un collega e non hai capito.\n\n- A: {{ja|[来週|らいしゅう]の [会議|かいぎ]は [延期|えんき]に なりました。}}\n- B: {{ja|えっ、[延期|えんき]…ですか。すみません、[延期|えんき]と いうのは どういう [意味|いみ]ですか。}}\n- A: {{ja|つまり、[別|べつ]の [日|ひ]に なる、と いう [意味|いみ]です。}}\n- B: {{ja|なるほど、わかりました。}}' },
      { h: 'Errori comuni', b: '- Restare in silenzio senza aizuchi.\n- Dire *わかりません* invece di **すみません、よく わかりませんでした**.\n- Usare *ええと* troppo.\n- Cambiare argomento bruscamente senza *ところで*.\n- Non chiudere con una formula di ringraziamento.' },
      { h: 'Riepilogo', b: '- Aizuchi: はい, そうですか, なるほど, へえ.\n- Riparazione: もう一度, どういう意味ですか.\n- Parafrasi: つまり, たとえば.\n- Transizioni: ところで, そろそろ.' }
    ],
    exercises: [
      mc('«Ah, capisco» si dice…', ['なるほど', 'いいえ', 'だめ', 'ほんとう'], 0),
      mc('Per chiedere di ripetere:', ['もう いちど いって ください。', 'いや です。', 'わかった。', 'さようなら。'], 0),
      mc('«Che cosa significa?»', ['どういう いみですか。', 'いくらですか。', 'どこですか。', 'だれですか。'], 0),
      mc('«Cioè, in altre parole»:', ['つまり', 'ところで', 'また', 'でも'], 0),
      mc('«A proposito» si dice…', ['ところで', 'つまり', 'たとえば', 'それから'], 0),
      listen('なるほど、わかりました。', 'ja', 'Che cosa esprime?', ['Comprensione', 'Rifiuto', 'Sorpresa', 'Rabbia'], 0),
      fillJ('Completa: もう すこし ゆっくり ___ ください。(parli)', ['はなして'], 'はなして ください.')
    ],
    test: [
      mc('Gli aizuchi servono a…', ['mostrare che si ascolta', 'interrompere', 'cambiare argomento', 'rifiutare'], 0),
      mc('«そろそろ しつれいします» significa…', ['è ora che vada', 'arrivo', 'dimentico', 'rifiuto'], 0),
      listen('すみません、よく わかりませんでした。', 'ja', 'Che cosa fa il parlante?', ['Chiede di chiarire', 'Rifiuta', 'Ringrazia', 'Saluta'], 0),
      mc('«たとえば» introduce…', ['un esempio', 'una domanda', 'una chiusura', 'un rifiuto'], 0)
    ],
    cards: [card('c1', 'ah, capisco', 'なるほど', '', 'なるほど'), card('c2', 'davvero?', 'そうですか', '', 'そうですか'), card('c3', 'cioè', 'つまり', '', 'つまり'), card('c4', 'per esempio', '[例|たと]えば', '', 'たとえば'),
      card('c5', 'a proposito', 'ところで', '', 'ところで'), card('c6', 'significato', '[意味|いみ]', '', 'いみ'), card('c7', 'rinvio', '[延期|えんき]', '', 'えんき'), card('c8', 'semplice', '[簡単|かんたん]', '', 'かんたん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Una conversazione', text: 'らいしゅうの かいぎは えんきに なりました。えっ、えんき…ですか。えんきと いうのは どういう いみですか。つまり、べつの ひに なると いう いみです。なるほど、わかりました。ところで、きょうの ひるごはんは どうしますか。',
      qs: [{ q: 'Che cosa è successo alla riunione?', o: ['È stata rinviata', 'È stata anticipata', 'È stata annullata', 'È confermata'], a: 0, kind: 'explicit' }, { q: 'Che cosa chiede il secondo parlante?', o: ['Il significato di «rinvio»', 'Il giorno', 'Il luogo', 'Il prezzo'], a: 0, kind: 'explicit' }, { q: 'Come cambia argomento?', o: ['Con «ところで»', 'Con «つまり»', 'Con «たとえば»', 'Con «でも»'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'もう いちど いって ください', lang: 'ja' }, { text: 'どういう いみですか', lang: 'ja' }, { text: 'ところで きょうの ひるごはんは どうしますか', lang: 'ja' }],
    shadowing: [{ text: 'なるほど、わかりました。', lang: 'ja', tip: 'Aizuchi: tono breve e naturale.' }, { text: 'すみません、よく わかりませんでした。', lang: 'ja', tip: 'Tono dispiaciuto.' }, { text: 'ところで、きょうの ひるごはんは どうしますか。', lang: 'ja', tip: 'Cambio argomento: tono leggero.' }],
    speaking: [{ prompt: 'Simula una conversazione in cui non capisci una parola, chiedi il significato e cambi argomento.', model: 'えんきと いうのは どういう いみですか。なるほど、わかりました。ところで、きょうの ひるごはんは どうしますか。' }, { prompt: 'Rispondi con almeno quattro aizuchi a un amico che racconta qualcosa.', model: 'ええ。そうですか。へえ、ほんとうですか。なるほど。それは たいへんでしたね。' }] });

  T({ id: 'jpn-j5-writing-emails', title: 'Scrivere email e messaggi in giapponese', summary: 'Struttura, formule fisse e registro per email formali e informali.',
    objectives: ['Strutturare un’email formale', 'Usare le formule di apertura e chiusura', 'Scrivere un messaggio informale a un amico'],
    pages: [
      { h: 'Obiettivo', b: 'Le email giapponesi hanno una **struttura fissa** e formule codificate. Impararle ti permette di scrivere in modo professionale anche con poco lessico.' },
      { h: 'Struttura di un’email formale', b: '1. **Oggetto** (件名): breve e chiaro: {{ja|[会議|かいぎ]の [日程|にってい]に ついて}}.\n2. **Destinatario**: {{ja|[鈴木|すずき]さま}} / {{ja|[株式会社|かぶしきがいしゃ]さくら [営業部|えいぎょうぶ] [鈴木|すずき][様|さま]}}\n3. **Apertura**: {{ja|いつも おせわに なって おります。}} / {{ja|はじめて メールを さしあげます。}}\n4. **Presentazione**: {{ja|ロッシと [申|もう]します。}}\n5. **Scopo e dettagli.**\n6. **Chiusura**: {{ja|よろしく おねがいいたします。}}\n7. **Firma** con nome e contatti.' },
      { h: 'Formule utili', b: '- Richiesta: {{ja|ご[確認|かくにん]の ほど、よろしく おねがいいたします。}}\n- Scuse: {{ja|[返信|へんしん]が [遅|おく]れて [申|もう]し[訳|わけ]ございません。}}\n- Allegati: {{ja|[資料|しりょう]を [添付|てんぷ]いたします。}}\n- Ringraziamento: {{ja|ご[連絡|れんらく]、ありがとうございます。}}\n- Chiusura breve: {{ja|[引|ひ]き[続|つづ]き、よろしく おねがいいたします。}}' },
      { h: 'Messaggio informale', b: 'Tra amici:\n- Apertura: {{ja|こんにちは！ [元気|げんき]？}} / nessuna formula.\n- Tono: forma semplice, だ・である non obbligatori.\n- Emoji e abbreviazioni sono comuni.\n- Chiusura: {{ja|じゃあ、また ね！}} / {{ja|[返事|へんじ]、[待|ま]って る よ。}}\n\nUsa il registro con persone alla pari; con il capo/cliente: cortese.' },
      { h: 'Esempio guidato', b: '**件名**: 会議の日程について\n\n鈴木さま\n\nいつも おせわに なっております。ロッシです。\n\nらいしゅうの かいぎの にってい に ついて ごれんらくします。かようびの ごご さんじは いかがでしょうか。\n\nごかくにんの ほど、よろしく おねがいいたします。\n\nロッシ' },
      { h: 'Errori comuni', b: '- Aprire senza **おせわになっております**.\n- Usare forma semplice con i clienti.\n- Dimenticare la firma.\n- Oggetto troppo lungo o vago.\n- Mettere la richiesta all’inizio senza saluti.' },
      { h: 'Riepilogo', b: '- Struttura: oggetto, destinatario, apertura, presentazione, scopo, chiusura, firma.\n- Formule fisse: お世話になっております, よろしくお願いいたします.\n- Registro formale vs informale.\n- Allegati: 添付いたします.' }
    ],
    exercises: [
      mc('Come si apre una email formale?', ['いつも おせわに なっております。', 'やあ！', 'ねえ、ちょっと。', 'さようなら。'], 0),
      mc('Come si chiude?', ['よろしく おねがいいたします。', 'じゃあね。', 'おやすみ。', 'ばいばい。'], 0),
      mc('«件名» significa…', ['oggetto', 'firma', 'allegato', 'saluto'], 0),
      mc('«Allego i documenti»:', ['しりょうを てんぷいたします。', 'しりょうを たべます。', 'しりょうが あります。', 'しりょうを かきます。'], 0),
      mc('Il nome del destinatario in una email formale:', ['すずきさま', 'すずきくん', 'すずきちゃん', 'すずきだ'], 0),
      listen('へんしんが おくれて もうしわけございません。', 'ja', 'Che cosa dice?', ['Mi scuso per il ritardo nella risposta', 'Grazie per la risposta', 'Rispondo subito', 'Non rispondo'], 0),
      fillJ('Completa: いつも ___ に なっております。', ['おせわ'], 'おせわになっております.')
    ],
    test: [
      mc('«ご確認の ほど» significa…', ['la prego di verificare', 'ho verificato', 'non verifico', 'ho dimenticato'], 0),
      mc('Con un amico si usa…', ['registro informale', 'keigo pesante', 'solo kenjōgo', 'nessuna cortesia'], 0),
      listen('ごれんらく ありがとうございます。', 'ja', 'Che cosa esprime?', ['Ringraziamento per il contatto', 'Scuse', 'Rifiuto', 'Richiesta'], 0),
      mc('Che cosa non può mancare?', ['La firma', 'Un’emoji', 'Un indirizzo postale', 'Un disegno'], 0)
    ],
    cards: [card('c1', 'oggetto', '[件名|けんめい]', '', 'けんめい'), card('c2', 'sempre grazie', 'おせわに なっております', '', 'おせわになっております'), card('c3', 'allegare', '[添付|てんぷ]する', '', 'てんぷする'), card('c4', 'risposta', '[返信|へんしん]', '', 'へんしん'),
      card('c5', 'programma', '[日程|にってい]', '', 'にってい'), card('c6', 'ufficio vendite', '[営業部|えいぎょうぶ]', '', 'えいぎょうぶ'), card('c7', 'la prego di verificare', 'ごかくにんの ほど', '', 'ごかくにんのほど'), card('c8', 'grazie per il contatto', 'ごれんらく ありがとうございます', '', 'ごれんらくありがとうございます')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Dettare un’email', text: 'けんめい、かいぎの にってい について。すずきさま。いつも おせわに なっております。ロッシと もうします。らいしゅうの かようびの ごご さんじは いかがでしょうか。ごかくにんの ほど、よろしく おねがいいたします。',
      qs: [{ q: 'Qual è l’oggetto?', o: ['Il programma della riunione', 'Una vacanza', 'Un pagamento', 'Un reclamo'], a: 0, kind: 'explicit' }, { q: 'Che cosa propone?', o: ['Martedì alle 3 della prossima settimana', 'Lunedì alle 5', 'Venerdì alle 3', 'Oggi'], a: 0, kind: 'explicit' }, { q: 'Che registro usa?', o: ['Formale', 'Informale', 'Gergale', 'Amichevole'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'いつも おせわに なっております', lang: 'ja' }, { text: 'よろしく おねがいいたします', lang: 'ja' }, { text: 'しりょうを てんぷいたします', lang: 'ja' }],
    shadowing: [{ text: 'いつも おせわに なっております。', lang: 'ja', tip: 'Formula fissa: ritmo regolare.' }, { text: 'ごかくにんの ほど、よろしく おねがいいたします。', lang: 'ja', tip: 'Tono formale.' }, { text: 'しりょうを てんぷいたします。', lang: 'ja', tip: 'てんぷ: te・n・pu.' }],
    speaking: [{ prompt: 'Detta ad alta voce un’email breve per fissare una riunione.', model: 'すずきさま。いつも おせわに なっております。ロッシと もうします。らいしゅうの かようびの ごご さんじは いかがでしょうか。よろしく おねがいいたします。' }, { prompt: 'Scrivi a voce un messaggio informale a un amico per proporre di vedervi.', model: 'こんにちは！ げんき？ こんどの どようび、あえる？ へんじ まって るよ。' }] });

  T({ id: 'jpn-j5-news-reading', title: 'Leggere notizie semplici (stile NHK Easy)', summary: 'Struttura delle notizie, lessico frequente e strategie di comprensione.',
    objectives: ['Leggere una breve notizia in giapponese semplificato', 'Riconoscere le formule tipiche delle notizie', 'Capire fatto, luogo, tempo e fonte'],
    pages: [
      { h: 'Obiettivo', b: 'Leggere notizie è uno dei modi migliori per consolidare kanji e grammatica. Le notizie semplificate (stile **NHK News Web Easy**) usano frasi brevi e furigana: sono il passo successivo ai testi del corso.' },
      { h: 'Struttura di una notizia', b: '1. **Titolo**: sintetico, spesso un nome + verbo.\n2. **Fatto principale**: chi, che cosa, dove, quando.\n3. **Dettagli** e **cause**.\n4. **Fonte**: ～と いう (si dice), ～に よると.\n\nEsempio: *東京で 雪が 降りました。* (Titolo/fatto).' },
      { h: 'Formule tipiche', b: '- {{ja|～が [分|わ]かりました。}} (si è scoperto che…)\n- {{ja|～と [発表|はっぴょう]しました。}} (hanno annunciato)\n- {{ja|～そうです / ～と いう こと です。}} (si dice che)\n- {{ja|～に よると、…}}\n- {{ja|[～|～]ので、[～|～]}} (cause)\n- {{ja|[～|～]ことに なりました。}} (è stato deciso)\n- {{ja|[～|～]する [予定|よてい]です。}}' },
      { h: 'Lessico frequente', b: '- {{ja|[政府|せいふ]}} governo, {{ja|[市|し]}} comune, {{ja|[会社|かいしゃ]}} azienda, {{ja|[警察|けいさつ]}} polizia\n- {{ja|[事故|じこ]}} incidente, {{ja|[地震|じしん]}} terremoto, {{ja|[台風|たいふう]}} tifone, {{ja|[火事|かじ]}} incendio\n- {{ja|[増|ふ]える}} aumentare, {{ja|[減|へ]る}} diminuire, {{ja|[発表|はっぴょう]}} annuncio, {{ja|[調査|ちょうさ]}} indagine\n- {{ja|[今年|ことし]}}, {{ja|[先月|せんげつ]}}, {{ja|[来月|らいげつ]}}' },
      { h: 'Strategie di lettura', b: '1. Leggi il **titolo** e immagina la notizia.\n2. Cerca **chi/dove/quando** nelle prime frasi.\n3. Non fermarti su ogni parola: segui il senso.\n4. Alla fine, **riassumi in una frase**.\n5. Rileggi con attenzione solo ciò che non hai capito.\n\nObiettivo: capire il 70–80% senza dizionario.' },
      { h: 'Esempio guidato', b: 'Notizia: {{ja|[東京|とうきょう]で [昨日|きのう]、[雪|ゆき]が [降|ふ]りました。[電車|でんしゃ]が [遅|おく]れて、[多|おお]くの [人|ひと]が [困|こま]りました。[今日|きょう]も [雪|ゆき]が [降|ふ]る [予定|よてい]です。}}\n\n→ *Ieri a Tokyo ha nevicato. I treni hanno fatto ritardo e molte persone hanno avuto problemi. Oggi è prevista altra neve.*\n\nRiassunto: neve a Tokyo, treni in ritardo, altra neve oggi.' },
      { h: 'Errori comuni', b: '- Cercare di capire tutto: perdi il senso.\n- Confondere 増える e 減る.\n- Ignorare **と発表しました** e **によると** (la fonte).\n- Non guardare i furigana quando servono.\n- Leggere senza riassumere.' },
      { h: 'Riepilogo', b: '- Struttura: titolo, fatto, dettagli, fonte.\n- Formule: が分かりました, と発表しました, によると.\n- Lessico: 事故, 地震, 増える, 減る.\n- Riassumi in una frase.' }
    ],
    exercises: [
      mc('«と発表しました» significa…', ['hanno annunciato', 'hanno perso', 'hanno chiesto', 'hanno rifiutato'], 0),
      mc('«増える» significa…', ['aumentare', 'diminuire', 'cadere', 'partire'], 0),
      mc('«によると» introduce…', ['la fonte', 'una domanda', 'un ordine', 'un esempio'], 0),
      mc('«地震» significa…', ['terremoto', 'tifone', 'incendio', 'incidente'], 0),
      mc('Qual è la strategia migliore?', ['Capire il senso generale e riassumere', 'Tradurre ogni parola', 'Leggere solo il titolo', 'Saltare tutto'], 0),
      listen('とうきょうで ゆきが ふりました。でんしゃが おくれました。', 'ja', 'Che cosa è successo?', ['Ha nevicato e i treni hanno fatto ritardo', 'Ha piovuto', 'Un incendio', 'Un terremoto'], 0),
      fillJ('Completa: ニュースに ___ と、あした あめだ そうです。', ['よる'], 'によると.')
    ],
    test: [
      mc('«事故» significa…', ['incidente', 'incendio', 'governo', 'polizia'], 0),
      mc('«減る» significa…', ['diminuire', 'aumentare', 'crescere', 'salire'], 0),
      listen('せいふは あたらしい ほうりつを はっぴょうしました。', 'ja', 'Che cosa è successo?', ['Il governo ha annunciato una nuova legge', 'Ha piovuto', 'Un incidente', 'Un tifone'], 0),
      mc('Il titolo di una notizia è…', ['sintetico', 'molto lungo', 'sempre una domanda', 'privo di nomi'], 0)
    ],
    cards: [card('c1', 'governo', '[政府|せいふ]', '', 'せいふ'), card('c2', 'incidente', '[事故|じこ]', '', 'じこ'), card('c3', 'terremoto', '[地震|じしん]', '', 'じしん'), card('c4', 'tifone', '[台風|たいふう]', '', 'たいふう'),
      card('c5', 'aumentare', '[増|ふ]える', '', 'ふえる'), card('c6', 'diminuire', '[減|へ]る', '', 'へる'), card('c7', 'annuncio', '[発表|はっぴょう]', '', 'はっぴょう'), card('c8', 'indagine', '[調査|ちょうさ]', '', 'ちょうさ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Notizie', text: 'きのう、とうきょうで ゆきが ふりました。でんしゃが おくれて、おおくの ひとが こまりました。せいふは あたらしい ほうりつを はっぴょうしました。ちょうさに よると、ことしは じこが へりました。',
      qs: [{ q: 'Che cosa è successo a Tokyo?', o: ['Ha nevicato', 'Ha piovuto', 'C’è stato un terremoto', 'C’è stato un incendio'], a: 0, kind: 'explicit' }, { q: 'Che cosa ha annunciato il governo?', o: ['Una nuova legge', 'Nuove tasse', 'Un nuovo ministro', 'Un nuovo treno'], a: 0, kind: 'explicit' }, { q: 'Che cosa dice l’indagine?', o: ['Gli incidenti sono diminuiti', 'Gli incidenti sono aumentati', 'Non ci sono dati', 'Nulla'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ニュースに よると あめが ふる そうです', lang: 'ja' }, { text: 'せいふは はっぴょうしました', lang: 'ja' }, { text: 'じこが へりました', lang: 'ja' }],
    shadowing: [{ text: 'とうきょうで ゆきが ふりました。', lang: 'ja', tip: 'Tono da notiziario: regolare.' }, { text: 'せいふは あたらしい ほうりつを はっぴょうしました。', lang: 'ja', tip: 'Frase lunga: pausa dopo は.' }, { text: 'ちょうさに よると、じこが へりました。', lang: 'ja', tip: 'Fonte e fatto separati.' }],
    speaking: [{ prompt: 'Riassumi una notizia in una frase.', model: 'とうきょうで ゆきが ふって、でんしゃが おくれました。きょうも ゆきが ふる よていです。' }, { prompt: 'Dì come cercheresti di capire un articolo difficile.', model: 'まず タイトルを よみます。つぎに だれが いつ どこで なにを したか さがします。さいごに ひとことで まとめます。' }],
    reading: [{ id: 'r1', title: 'Neve a Tokyo', text: '[東京|とうきょう]で [昨日|きのう]、[雪|ゆき]が [降|ふ]りました。[電車|でんしゃ]が [遅|おく]れて、[多|おお]くの [人|ひと]が [困|こま]りました。[今日|きょう]も [雪|ゆき]が [降|ふ]る [予定|よてい]です。',
      qs: [{ q: 'Che cosa è successo ieri a Tokyo?', o: ['Ha nevicato', 'Ha piovuto', 'Terremoto', 'Incendio'], a: 0 }, { q: 'Che cosa è successo ai treni?', o: ['Hanno fatto ritardo', 'Sono stati cancellati', 'Sono stati più veloci', 'Nulla'], a: 0 }, { q: 'Che cosa è previsto oggi?', o: ['Altra neve', 'Sole', 'Pioggia', 'Vento'], a: 0 }] }] });

  T({ id: 'jpn-j5-kanji-5', title: 'Kanji 5: società, economia e vita moderna', summary: '50 kanji di livello N4–N3 per notizie e testi di attualità.',
    objectives: ['Riconoscere 50 kanji di società, economia e vita moderna', 'Leggere i composti più comuni', 'Capire titoli e brevi articoli'],
    pages: [
      { h: 'Obiettivo', b: 'Con questo set puoi leggere **titoli, cartelli e brevi notizie** su economia, società e tecnologia. Sono i kanji che più spesso bloccano la lettura a livello intermedio.' },
      { h: 'Società e persone', b: '- {{ja|[社会|しゃかい]}} società, {{ja|[国民|こくみん]}} cittadini, {{ja|[政府|せいふ]}} governo, {{ja|[市民|しみん]}} cittadino\n- {{ja|[生活|せいかつ]}} vita quotidiana, {{ja|[家族|かぞく]}} famiglia, {{ja|[子供|こども]}} bambino, {{ja|[若者|わかもの]}} giovane\n- {{ja|[経済|けいざい]}} economia, {{ja|[会社員|かいしゃいん]}} impiegato, {{ja|[給料|きゅうりょう]}} stipendio' },
      { h: 'Economia e numeri', b: '- {{ja|[売|う]る}} vendere, {{ja|[買|か]う}} comprare, {{ja|[値段|ねだん]}} prezzo, {{ja|[税金|ぜいきん]}} tasse\n- {{ja|[増|ふ]える}} aumentare, {{ja|[減|へ]る}} diminuire, {{ja|[高|たか]い}} alto, {{ja|[低|ひく]い}} basso\n- {{ja|[約|やく]}} circa, {{ja|[全|ぜん]}} tutto, {{ja|[半分|はんぶん]}} metà, {{ja|[割合|わりあい]}} proporzione' },
      { h: 'Tecnologia e vita moderna', b: '- {{ja|[電話|でんわ]}} telefono, {{ja|[電気|でんき]}} elettricità, {{ja|[機械|きかい]}} macchina, {{ja|[技術|ぎじゅつ]}} tecnologia\n- {{ja|[情報|じょうほう]}} informazioni, {{ja|[発見|はっけん]}} scoperta, {{ja|[開発|かいはつ]}} sviluppo\n- {{ja|[運転|うんてん]}} guida, {{ja|[交通|こうつう]}} traffico, {{ja|[空港|くうこう]}} aeroporto, {{ja|[旅行|りょこう]}} viaggio' },
      { h: 'Strategie', b: '1. Riconosci i **componenti**: 会 (incontro) + 社 (società) = 会社.\n2. Impara i **pattern**: ～的 (aggettivo), ～化 (rendere), ～者 (persona), ～業 (settore).\n3. Leggi titoli di giornali semplici ogni giorno.\n4. Aggiungi ogni parola nuova alle carte.\n5. Usa il contesto per le letture on/kun.' },
      { h: 'Esempio guidato', b: 'Titolo: {{ja|[日本|にほん]の [経済|けいざい]、[約|やく]3[%|パーセント]の [成長|せいちょう]}}\n\n→ *L’economia giapponese cresce di circa il 3%.*\n\nRiconosci: 経済 (economia), 約 (circa), 成長 (crescita).' },
      { h: 'Errori comuni', b: '- Confondere 経 e 軽.\n- Leggere 生活 come *せいかつ* e non *しょうかつ*.\n- Dimenticare che 高 si legge たかい/こう.\n- Non usare i furigana quando servono.\n- Imparare i kanji in liste senza parole.' },
      { h: 'Riepilogo', b: '- 50 kanji: società, economia, tecnologia.\n- Pattern: ～的, ～化, ～者, ～業.\n- Titoli e articoli brevi.\n- Carte e lettura quotidiana.' }
    ],
    exercises: [
      mc('Come si legge 経済?', ['けいざい', 'けいさい', 'きょうざい', 'へいざい'], 0),
      mc('Come si legge 社会?', ['しゃかい', 'しゃえ', 'しゃあい', 'そうかい'], 0),
      mc('Come si legge 税金?', ['ぜいきん', 'さいきん', 'ぜきん', 'ぜいかね'], 0),
      mc('Come si legge 情報?', ['じょうほう', 'じょほう', 'しょうほう', 'じょうぼう'], 0),
      fillJ('Come si legge 約?', ['やく', 'yaku'], 'やく (circa).'),
      mc('«給料» significa…', ['stipendio', 'prezzo', 'tassa', 'orario'], 0),
      mc('Come si legge 空港?', ['くうこう', 'そらみなと', 'くうがん', 'そうこう'], 0)
    ],
    test: [
      mc('Come si legge 技術?', ['ぎじゅつ', 'ぎじゅ', 'わざじゅつ', 'ぎしゅつ'], 0),
      mc('«交通» significa…', ['traffico', 'viaggio', 'incidente', 'stazione'], 0),
      mc('Come si legge 生活?', ['せいかつ', 'しょうかつ', 'いきかつ', 'うまれかつ'], 0),
      mc('Il suffisso 者 indica…', ['persona', 'luogo', 'oggetto', 'tempo'], 0)
    ],
    cards: [card('c1', 'economia', '[経済|けいざい]', '', 'けいざい'), card('c2', 'società', '[社会|しゃかい]', '', 'しゃかい'), card('c3', 'tasse', '[税金|ぜいきん]', '', 'ぜいきん'), card('c4', 'informazioni', '[情報|じょうほう]', '', 'じょうほう'),
      card('c5', 'stipendio', '[給料|きゅうりょう]', '', 'きゅうりょう'), card('c6', 'tecnologia', '[技術|ぎじゅつ]', '', 'ぎじゅつ'), card('c7', 'aeroporto', '[空港|くうこう]', '', 'くうこう'), card('c8', 'circa', '[約|やく]', '', 'やく')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Economia', text: 'にほんの けいざいは やく さんパーセント せいちょうしました。ぜいきんが ふえて、きゅうりょうも すこし ふえました。ぎじゅつの かいはつが すすんで、くうこうも あたらしく なりました。',
      qs: [{ q: 'Di quanto è cresciuta l’economia?', o: ['Circa il 3%', 'Circa il 10%', 'Circa l’1%', 'Circa il 30%'], a: 0, kind: 'explicit' }, { q: 'Che cosa è aumentato?', o: ['Le tasse e lo stipendio', 'I prezzi soltanto', 'La disoccupazione', 'Il traffico'], a: 0, kind: 'explicit' }, { q: 'Che cosa è nuovo?', o: ['L’aeroporto', 'La stazione', 'Il ponte', 'La scuola'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'にほんの けいざいが せいちょうしました', lang: 'ja' }, { text: 'ぜいきんが ふえました', lang: 'ja' }, { text: 'ぎじゅつの かいはつが すすんで います', lang: 'ja' }],
    shadowing: [{ text: 'にほんの けいざいが せいちょうしました。', lang: 'ja', tip: 'Tono da notiziario.' }, { text: 'ぜいきんが ふえました。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'ぎじゅつの かいはつが すすんで います。', lang: 'ja', tip: 'ぎじゅつ: gi・ju・tsu.' }],
    speaking: [{ prompt: 'Riassumi in due frasi una notizia economica immaginaria.', model: 'にほんの けいざいは さんパーセント せいちょうしました。きゅうりょうも すこし ふえました。' }, { prompt: 'Spiega a un amico che cosa significa 税金 e 給料.', model: 'ぜいきんは くにに はらう おかねです。きゅうりょうは かいしゃから もらう おかねです。' }],
    reading: [{ id: 'r1', title: 'Economia', text: '[日本|にほん]の [経済|けいざい]は [約|やく]3パーセント [成長|せいちょう]しました。[税金|ぜいきん]が [増|ふ]えて、[給料|きゅうりょう]も [少|すこ]し [増|ふ]えました。[技術|ぎじゅつ]の [開発|かいはつ]が [進|すす]んで、[空港|くうこう]も [新|あたら]しく なりました。',
      qs: [{ q: 'Di quanto è cresciuta l’economia?', o: ['Circa il 3%', 'Il 10%', 'L’1%', 'Il 30%'], a: 0 }, { q: 'Che cosa è aumentato?', o: ['Tasse e stipendio', 'Solo i prezzi', 'La disoccupazione', 'Il traffico'], a: 0 }, { q: 'Che cosa è nuovo?', o: ['L’aeroporto', 'La stazione', 'La scuola', 'Il porto'], a: 0 }] }] });
})(window.ST = window.ST || {});
