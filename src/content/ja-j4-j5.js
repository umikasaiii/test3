/* Giapponese — stage J4 (condizioni e potenziale) e J5 (lingua parlata e lettura). */
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
    id: 'jpn-j4-conditionals-potential', subject: 'jpn', stage: 'J4', title: 'Potenziale e condizionali', minutes: 20, prereq: ['jpn-j3-reasons-contrast'],
    summary: 'Forma potenziale; ～たら, ～と, ～ば, ～なら; ～そうです (apparenza).',
    objectives: ['Formare e usare la forma potenziale', 'Distinguere たら, と, ば, なら', 'Descrivere ciò che «sembra» con ～そう'],
    pages: [
      { h: 'Obiettivo', b: 'Questo argomento aggiunge due capacità: **dire ciò che puoi fare** (potenziale) e **fare ipotesi** (condizionali). I quattro condizionali giapponesi non sono sinonimi: scegli in base alla situazione.' },
      { h: 'Forma potenziale', b: '- **Gruppo 2**: radice + **られる**. {{ja|[食|た]べる}} → {{ja|[食|た]べられる}}; {{ja|[見|み]る}} → {{ja|[見|み]られる}}.\n- **Gruppo 1**: -u → **-eru**. {{ja|[書|か]く}} → {{ja|[書|か]ける}}; {{ja|[飲|の]む}} → {{ja|[飲|の]める}}; {{ja|[話|はな]す}} → {{ja|[話|はな]せる}}; {{ja|[行|い]く}} → {{ja|[行|い]ける}}; {{ja|[買|か]う}} → {{ja|[買|か]える}}.\n- **Gruppo 3**: {{ja|する}} → {{ja|できる}}; {{ja|[来|く]る}} → {{ja|[来|こ]られる}}.\n\nCon il potenziale l’oggetto prende spesso **が**: {{ja|[日本語|にほんご]が [話|はな]せます。}}\n\nDifferenza con ことが できる: il potenziale è più naturale nel parlato; ことが できる è più formale.' },
      { h: 'Quattro condizionali', b: '- **～たら** (forma た + ら): condizione generale, anche con richieste e intenzioni. {{ja|[雨|あめ]が [降|ふ]ったら、[行|い]きません。}} / {{ja|[着|つ]いたら、[電話|でんわ]して ください。}}\n- **～と** (dizionario + と): risultato naturale o abitudine; NON con richieste o volontà nella frase principale. {{ja|[春|はる]に なると、[暖|あたた]かく なります。}}\n- **～ば** (forma ば): condizione necessaria; spesso consiglio generale. {{ja|[急|いそ]げば、[間|ま]に [合|あ]います。}} / {{ja|[安|やす]ければ、[買|か]います。}} (い-agg. → ければ)\n- **～なら**: «se è così / se parli di…»; usa il contesto già dato. {{ja|[日本|にほん]へ [行|い]くなら、[京都|きょうと]が いいですよ。}}\n\nRegola pratica: nel dubbio, **たら** funziona quasi sempre.' },
      { h: 'そう: apparenza', b: '**Verbo (radice) / aggettivo (senza い) + そうです** = «sembra che».\n- {{ja|[雨|あめ]が [降|ふ]りそうです。}} — sembra che stia per piovere.\n- {{ja|この ケーキは おいしそうです。}} — sembra delizioso.\n- eccezioni: {{ja|いい}} → {{ja|よさそう}}, {{ja|ない}} → {{ja|なさそう}}.\n\nAttenzione: **～そうです** dopo la forma semplice completa (es. 降るそうです) significa «dicono che» (informazione riportata): è un’altra struttura.' },
      { h: 'Esempio guidato', b: 'Fai un piano condizionale: *Se domani non piove, andiamo al mare. Se ci sbrighiamo, arriviamo in tempo. Se ti piace il pesce, ti consiglio questo locale.*\n\n- {{ja|[明日|あした] [雨|あめ]が [降|ふ]らなかったら、[海|うみ]へ [行|い]きましょう。}} (たら: piano)\n- {{ja|[急|いそ]げば、[間|ま]に [合|あ]います。}} (ば: condizione necessaria)\n- {{ja|[魚|さかな]が [好|す]きなら、この [店|みせ]が いいですよ。}} (なら: in base a ciò che l’altro dice)\n\nControllo: la frase con たら può contenere un invito (しましょう); la frase con と non potrebbe.' },
      { h: 'Errori comuni', b: '- *のめれる* → {{ja|のめる}} (nessun られる sul gruppo 1).\n- *たべれる* nel parlato informale: è diffuso ma non ancora standard formale; usa {{ja|たべられる}}.\n- Usare **と** con una richiesta: *Tokyo e ittara, denwa shite kudasai* con と è scorretto → usa たら.\n- *すれば* con nomi: usa なら/であれば.\n- *おいしいそう* → {{ja|おいしそう}}.' },
      { h: 'Riepilogo', b: '- Potenziale: られる (G2), -eru (G1), できる / こられる (G3).\n- たら (generale), と (risultato naturale), ば (condizione necessaria), なら (se è così).\n- そうです = sembra; i / ない speciali: よさそう, なさそう.' }
    ],
    exercises: [
      mc('Forma potenziale di 書く:', ['かける', 'かかれる', 'かきれる', 'かくられる'], 0),
      mc('Forma potenziale di 食べる:', ['たべられる', 'たべる', 'たべえる', 'たべれす'], 0),
      fillJ('Potenziale di する: ___', ['できる'], 'する → できる.'),
      mc('«Quando arrivi, chiamami»:', ['ついたら、でんわして ください。', 'つくと、でんわして ください。', 'つけば、でんわして ください。', 'ついて、でんわ します。'], 0),
      mc('«In primavera fa caldo» (risultato naturale):', ['はるに なると、あたたかく なります。', 'はるに なったら、あたたかく なります です。', 'はるに ならば。', 'はるなら あたたかい。'], 0),
      listen('いそげば まに あいます。', 'ja', 'Che cosa significa?', ['Se ti sbrighi, ce la fai', 'Abbiamo perso il treno', 'Sbrigati ora', 'Non ce la farai'], 0),
      mc('Che cosa significa «おいしそう»?', ['Sembra buono', 'È buono', 'Dicono che sia buono', 'Non è buono'], 0)
    ],
    test: [
      mc('Forma potenziale di 話す:', ['はなせる', 'はなされる', 'はなしれる', 'はなすられる'], 0),
      mc('Quale condizionale non può portare una richiesta nella frase principale?', ['たら', 'と', 'ば', 'なら'], 1),
      mc('«Se vai in Giappone, ti consiglio Kyoto»:', ['にほんへ いくなら、きょうとが いいですよ。', 'にほんへ いったら きょうとへ いきます', 'にほんへ いけば きょうとです', 'にほんへ いくと きょうとが いい'], 0),
      fillJ('«Sembra che stia per piovere»: あめが ふり___ です', ['そう'], 'ふりそうです.')
    ],
    cards: [
      card('c1', 'potere (fare)', '～ことが できる', '', 'ことができる'), card('c2', 'caldo (clima)', '[暖|あたた]かい', '', 'あたたかい'), card('c3', 'sbrigarsi', '[急|いそ]ぐ', '', 'いそぐ'), card('c4', 'riuscire in tempo', '[間|ま]に[合|あ]う', '', 'まにあう'),
      card('c5', 'arrivare', '[着|つ]く', '', 'つく'), card('c6', 'consigliare', 'おすすめ', '', 'おすすめ'), card('c7', 'mare', '[海|うみ]', '', 'うみ'), card('c8', 'sembra', '～そう', '', 'そう')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Consigli per il fine settimana', text: 'あしたの てんきが よかったら、うみへ いきましょう。あめが ふったら、えいがを みに いきます。いそげば ひるまでに つきますよ。さかなが すきなら、あの みせが おすすめです。',
      qs: [{ q: 'Che cosa fanno se domani il tempo è bello?', o: ['Vanno al mare', 'Vanno al cinema', 'Restano a casa', 'Vanno in montagna'], a: 0, kind: 'explicit' }, { q: 'Che cosa fanno se piove?', o: ['Vanno al cinema', 'Vanno al mare', 'Studiano', 'Cucinano'], a: 0, kind: 'explicit' }, { q: 'Che cosa consiglia il parlante a chi ama il pesce?', o: ['Un certo ristorante', 'Un negozio di pesce', 'Una gita in barca', 'Niente'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'あめが ふったら いきません', lang: 'ja' }, { text: 'にほんごが はなせます', lang: 'ja' }, { text: 'いそげば まに あいます', lang: 'ja' }],
    shadowing: [{ text: 'あめが ふったら、うちに いましょう。', lang: 'ja', tip: 'Intonazione sospesa dopo たら.' }, { text: 'さかなが すきなら、あの みせが おすすめです。', lang: 'ja', tip: 'なら: leggermente alzato.' }, { text: 'にほんごが すこし はなせます。', lang: 'ja', tip: 'はなせます: ha-na-se-ma-su.' }],
    speaking: [{ prompt: 'Fai tre piani condizionali per il weekend (tempo, tempo libero, imprevisti).', model: 'てんきが よかったら、こうえんへ いきます。あめが ふったら、うちで えいがを みます。ともだちが きたら、いっしょに ごはんを たべます。' }, { prompt: 'Di’ che cosa sai fare in giapponese (potenziale).', model: 'にほんごで じこしょうかいが できます。ひらがなと カタカナが よめます。かんたんな てがみが かけます。' }]
  });

  addTopic({
    id: 'jpn-j4-giving-polite', subject: 'jpn', stage: 'J4', title: 'Dare e ricevere; cortesia e keigo di base', minutes: 20, prereq: ['jpn-j4-conditionals-potential'],
    summary: 'あげる/くれる/もらう, ～てあげる/くれる/もらう, richieste cortesi e formule di servizio.',
    objectives: ['Scegliere tra あげる, くれる, もらう secondo la direzione', 'Fare richieste e rifiuti più cortesi', 'Riconoscere le formule di keigo più frequenti'],
    pages: [
      { h: 'Obiettivo', b: 'In giapponese **la direzione** del favore o del dono conta: chi dà, chi riceve, e se il ricevente è «dentro» (io, la mia famiglia) o «fuori». Imparerai a esprimerlo e a rendere le tue richieste più rispettose.' },
      { h: 'あげる, くれる, もらう', b: '- **あげる**: io (o il mio gruppo) do a un altro. {{ja|わたしは [友達|ともだち]に プレゼントを あげました。}}\n- **くれる**: qualcun altro dà a me (o al mio gruppo). {{ja|[友達|ともだち]は わたしに プレゼントを くれました。}}\n- **もらう**: io ricevo da qualcuno. {{ja|わたしは [友達|ともだち]に プレゼントを もらいました。}}\n\nSchema: A は B に X を あげる; B は A に X を くれる; A は B に (から) X を もらう.\n\nPiù formale: **さしあげる** (dare a un superiore), **くださる** (un superiore dà a me), **いただく** (ricevere da un superiore).' },
      { h: 'Favori: ～て あげる / くれる / もらう', b: 'Con la forma て indichi un **favore**:\n- {{ja|[手伝|てつだ]って あげます。}} — ti do una mano (a un pari o inferiore, suona un po’ paternalistico se detto a un superiore).\n- {{ja|[友達|ともだち]が [手伝|てつだ]って くれました。}} — il mio amico mi ha aiutato.\n- {{ja|[先生|せんせい]に [教|おし]えて もらいました。}} — il professore mi ha spiegato (e io sono grato).\n\nNota: **～てもらいます** può sembrare più umile di **～てくれます** ed è comune nelle richieste: {{ja|[手伝|てつだ]って もらえますか。}}' },
      { h: 'Richieste cortesi', b: 'Scala di cortesia (crescente):\n1. {{ja|[待|ま]って。}} (casual)\n2. {{ja|[待|ま]って ください。}}\n3. {{ja|[待|ま]って くれませんか。}} / {{ja|[待|ま]って もらえませんか。}}\n4. {{ja|[待|ま]って いただけませんか。}} (molto cortese)\n5. {{ja|お[待|ま]ち ください。}} / {{ja|お[待|ま]ち いただけますか。}} (servizio / keigo)\n\nRifiuto con garbo: {{ja|すみません、ちょっと…}} (lascia la frase in sospeso), {{ja|あいにく ～}} (purtroppo).' },
      { h: 'Formule di servizio', b: '- {{ja|いらっしゃいませ。}} — benvenuto (negozi)\n- {{ja|かしこまりました。}} — certamente\n- {{ja|[少々|しょうしょう]お[待|ま]ち ください。}} — un momento, per favore\n- {{ja|[申|もう]します}} — mi chiamo (umile): {{ja|[田中|たなか]と [申|もう]します。}}\n- {{ja|いただきます}} — ricevo (letteralmente: umilmente accetto)\n- {{ja|ございます}} — forma cortese di あります (おはようございます)\n- {{ja|[召|め]し[上|あ]がって ください。}} — la prego di mangiare (onorifico)\n\nNon è necessario usare keigo attivamente subito: **riconoscerlo** ti permette di capire commessi, annunci ed email formali.' },
      { h: 'Esempio guidato', b: 'Scrivi una breve email di richiesta: *Gentile signor Tanaka, può per favore controllare il documento?*\n\n- {{ja|[田中|たなか]さん、[書類|しょるい]を [確認|かくにん]して いただけませんか。}}\n- {{ja|よろしく お[願|ねが]いします。}}\n\nControllo: per qualcuno di rango superiore, usa いただけませんか (non くれませんか). Alla fine una formula di cortesia.' },
      { h: 'Errori comuni', b: '- *わたしは ともだちに くれました* → {{ja|ともだちは わたしに くれました。}} (くれる: l’altro dà a me).\n- *せんせいに てつだって あげます* a un superiore: suona presuntuoso; meglio {{ja|おてつだい します。}}\n- Usare **もらう** con に/から indifferentemente: dopo もらう va bene **に** o **から**.\n- Confondere *お[待|ま]ち ください* (formale) con *まってください* (neutro).\n- Chiedere un favore con ～てください a chi è molto più alto di rango.' },
      { h: 'Riepilogo', b: '- あげる = io → altri; くれる = altri → me; もらう = io ricevo.\n- ～てあげる / くれる / もらう = favori.\n- Richieste: ください < くれませんか < いただけませんか.\n- Riconoscere: いらっしゃいませ, かしこまりました, 申します, ございます.' }
    ],
    exercises: [
      mc('«Il mio amico mi ha regalato un libro»:', ['ともだちは わたしに ほんを くれました。', 'わたしは ともだちに ほんを くれました。', 'ともだちは わたしに ほんを あげました。', 'わたしは ともだちが ほんを もらいます。'], 0),
      mc('«Ho ricevuto un libro dal mio amico»:', ['ともだちに ほんを もらいました。', 'ともだちに ほんを くれました。', 'ともだちを ほんに もらいました。', 'ともだちで ほんを あげました。'], 0),
      mc('Quale richiesta è la più cortese?', ['まって', 'まって ください', 'まって いただけませんか', 'まてよ'], 2),
      fillJ('Completa: すみません、ちょっと お___ ください。(aspetti)', ['まち'], 'お待ちください.'),
      listen('いらっしゃいませ。', 'ja', 'Dove la senti più probabilmente?', ['In un negozio', 'A casa', 'In classe', 'Al telefono con un amico'], 0),
      mc('Che cosa significa «かしこまりました»?', ['Certamente / ho capito (cortese)', 'Mi scusi', 'Aspetti', 'Grazie'], 0),
      order('Metti in ordine: «Mi chiamo Tanaka»', ['たなかと', 'もうします'], '申します: umile.')
    ],
    test: [
      mc('Quale verbo si usa quando l’altro dà a ME?', ['あげる', 'くれる', 'もらう', 'さしあげる'], 1),
      mc('«Il professore mi ha spiegato (io ringrazio)»:', ['せんせいに おしえて もらいました。', 'せんせいに おしえて あげました。', 'せんせいは おしえて あげます。', 'せんせいを おしえました。'], 0),
      mc('Che cosa significa «しょうしょう おまち ください»?', ['Un momento, per favore', 'Venga domani', 'Mi dispiace', 'Benvenuto'], 0),
      mc('Quando si usa いただく?', ['Per ricevere da un superiore', 'Per dare a un amico', 'Per rifiutare', 'Per salutare'], 0)
    ],
    cards: [
      card('c1', 'dare (io→altri)', 'あげる', '', 'あげる'), card('c2', 'dare (altri→me)', 'くれる', '', 'くれる'), card('c3', 'ricevere', 'もらう', '', 'もらう'), card('c4', 'regalo', 'プレゼント', '', 'プレゼント'),
      card('c5', 'aiutare', '[手伝|てつだ]う', '', 'てつだう'), card('c6', 'insegnare', '[教|おし]える', '', 'おしえる'), card('c7', 'benvenuto', 'いらっしゃいませ', '', 'いらっしゃいませ'), card('c8', 'certamente', 'かしこまりました', '', 'かしこまりました')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'In un negozio', text: 'いらっしゃいませ。なにか おさがしですか。この くつを みせて いただけませんか。かしこまりました。しょうしょう おまち ください。ありがとうございます。いただきます。',
      qs: [{ q: 'Che cosa chiede il cliente?', o: ['Di vedere delle scarpe', 'Di pagare', 'Di ritirare un ordine', 'Di cambiare un prodotto'], a: 0, kind: 'explicit' }, { q: 'Come risponde il commesso?', o: ['Certamente, un momento', 'Non possibile', 'Domani', 'Non lo so'], a: 0, kind: 'explicit' }, { q: 'Che livello di cortesia usa il cliente?', o: ['Molto cortese', 'Casual', 'Informale', 'Scortese'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'ともだちが てつだって くれました', lang: 'ja' }, { text: 'みせて いただけませんか', lang: 'ja' }, { text: 'しょうしょう おまち ください', lang: 'ja' }],
    shadowing: [{ text: 'この くつを みせて いただけませんか。', lang: 'ja', tip: 'Tono cortese, ritmo calmo.' }, { text: 'かしこまりました。しょうしょう おまち ください。', lang: 'ja', tip: 'Registro di servizio: chiaro e discendente.' }, { text: 'ともだちが てつだって くれました。', lang: 'ja', tip: 'て・つ・だ・っ・て: attenzione a っ.' }],
    speaking: [{ prompt: 'Chiedi con molta cortesia a un commesso di mostrarti un prodotto.', model: 'すみません、これを みせて いただけませんか。' }, { prompt: 'Di’ chi ti ha aiutato di recente e come.', model: 'ともだちが にほんごを おしえて くれました。せんせいに しゅくだいを みて もらいました。' }]
  });

  addTopic({
    id: 'jpn-j5-casual', subject: 'jpn', stage: 'J5', title: 'Lingua parlata e conversazione tra amici', minutes: 20, prereq: ['jpn-j4-giving-polite'],
    summary: 'Forma semplice nel parlato, contrazioni, particelle finali, riempitivi, registro.',
    objectives: ['Capire e usare il parlato informale con prudenza', 'Riconoscere contrazioni e particelle finali', 'Gestire il passaggio tra registro cortese e informale'],
    pages: [
      { h: 'Obiettivo', b: 'Con amici, in famiglia e nei video giapponesi senti la **forma semplice** e molte contrazioni. Questa lezione ti aiuta a **capire** il parlato reale e a scegliere con attenzione quando usarlo.' },
      { h: 'Forma semplice nel parlato', b: 'Le frasi finiscono in forma semplice:\n- {{ja|[食|た]べる？}} — Mangi? (domanda con intonazione ascendente, senza か)\n- {{ja|うん、[食|た]べる。}} / {{ja|ううん、[食|た]べない。}}\n- Nomi e な-agg.: {{ja|だ}} spesso omesso o sostituito: {{ja|[学生|がくせい]だよ。}}\n\nDomande e risposte tipiche: {{ja|ほんと？}} (davvero?), {{ja|そうなんだ。}} (ah, capisco), {{ja|へえ。}} (wow).\n\n**Attenzione al registro**: con persone più anziane, sconosciuti, clienti usa ます. L’informale a sproposito è maleducato.' },
      { h: 'Contrazioni', b: '- ～ている → **～てる**: {{ja|[何|なに]して るの？}}\n- ～てしまう → **～ちゃう / ～ちゃった**: {{ja|[忘|わす]れちゃった。}}\n- ～ては → **～ちゃ**: {{ja|[食|た]べちゃ だめ。}} (non si deve mangiare)\n- ～ておく → ～とく; ～ている (stato) → ～てる.\n- **～んだ / ～の**: spiegazione: {{ja|どうしたの？}} / {{ja|[疲|つか]れてるんだ。}}\n- ～と言った → **～って**: {{ja|[行|い]くって [言|い]った。}}\n\nNella scrittura formale non vanno usate.' },
      { h: 'Particelle finali e riempitivi', b: '- **ね**: ricerca di conferma/empatia. {{ja|いい [天気|てんき]ですね。}}\n- **よ**: informazione nuova per l’altro. {{ja|おいしいよ。}}\n- **よね**: «vero?» (verifica). {{ja|[明日|あした]だよね。}}\n- **かな**: «mi chiedo». {{ja|[来|く]るかな。}}\n- **な / ぞ / ぜ**: maschili e marcate, da riconoscere ma non da imitare.\n\n**Riempitivi**: {{ja|えっと}}, {{ja|あの}}, {{ja|まあ}}, {{ja|なんか}}. Servono per pensare senza interrompere il discorso.\n\n**Slang**: {{ja|じゃん}} (giusto?, Kanto), {{ja|ヤバい}} (incredibile/terribile), {{ja|マジで}} (davvero). Evitali nelle situazioni formali.' },
      { h: 'Esempio guidato', b: 'Dialogo tra amici:\n\n- A: {{ja|あした ひま？}}\n- B: {{ja|うん、ひまだよ。どうして？}}\n- A: {{ja|いっしょに えいが みに いかない？}}\n- B: {{ja|いいね！なに みるの？}}\n\nRendilo cortese:\n- A: {{ja|[明日|あした]、[暇|ひま]ですか。}}\n- B: {{ja|はい、[暇|ひま]です。どうしてですか。}}\n- A: {{ja|いっしょに [映画|えいが]を [見|み]に [行|い]きませんか。}}\n\nControllo: individua cosa cambia (か, です, ます) e che cosa si perde (tono amichevole).' },
      { h: 'Errori comuni', b: '- Usare la forma semplice con il capo o con chi non conosci.\n- Dire *ありがとう* a un cliente invece di *ありがとうございます*.\n- Usare *なんか* e *マジ* in contesti professionali.\n- Imitare il parlato maschile/femminile marcato senza capirne le sfumature.\n- Credere che la forma semplice sia «più facile» da capire: ha ritmo veloce e molte riduzioni.' },
      { h: 'Riepilogo', b: '- Forma semplice per amici; ます per rispetto.\n- Contrazioni: てる, ちゃう, ちゃ, んだ, って.\n- Particelle finali: ね, よ, よね, かな.\n- Riconosci lo slang, usa con prudenza.' }
    ],
    exercises: [
      mc('Qual è la forma contratta di ～ている?', ['～てる', '～ちゃう', '～とく', '～って'], 0),
      mc('«ちゃった» di solito indica…', ['Azione compiuta (spesso con dispiacere)', 'Futuro', 'Divieto', 'Richiesta'], 0),
      mc('«ね» a fine frase serve a…', ['Cercare conferma o empatia', 'Dare un ordine', 'Negare', 'Citare'], 0),
      listen('えっ、ほんと？ へえ、そうなんだ。', 'ja', 'Qual è la reazione?', ['Sorpresa e interesse', 'Rabbia', 'Dispiacere', 'Indifferenza'], 0),
      mc('Con il tuo capo, quale forma usi?', ['ありがとう', 'ありがとうございます', 'サンキュー', 'どうも'], 1),
      mc('Che cosa significa «忘れちゃった»?', ['Mi sono dimenticato!', 'Non dimenticare', 'Dimenticherò', 'Ricordo'], 0),
      listen('あした ひま？ うん、ひまだよ。', 'ja', 'Di che registro è la conversazione?', ['Informale tra amici', 'Formale di lavoro', 'Servizio clienti', 'Annuncio ufficiale'], 0)
    ],
    test: [
      mc('Quale frase è informale?', ['のんでる？', 'のんで います か', 'のみます か', 'おのみに なりますか'], 0),
      mc('Quando NON va usato lo slang マジで?', ['Con amici', 'In una riunione formale', 'Su una chat con amici', 'Parlando da solo'], 1),
      mc('«よね» serve a…', ['Verificare qualcosa di cui sei quasi sicuro', 'Negare', 'Ordinare', 'Chiedere perché'], 0),
      fillJ('«Cosa stai facendo?» (informale): なにして ___ の？', ['る'], 'している → してる.')
    ],
    cards: [
      card('c1', 'davvero?', 'ほんと', '', 'ほんと'), card('c2', 'ah, capisco', 'そうなんだ', '', 'そうなんだ'), card('c3', 'uhm… (riempitivo)', 'えっと', '', 'えっと'), card('c4', 'tempo libero', '[暇|ひま]', '', 'ひま'),
      card('c5', 'stanco', '[疲|つか]れた', '', 'つかれた'), card('c6', 'dimenticare', '[忘|わす]れる', '', 'わすれる'), card('c7', 'incredibile / terribile', 'ヤバい', '', 'やばい'), card('c8', 'amico', '[友達|ともだち]', '', 'ともだち')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Tra amici', text: 'もしもし、いま なにして るの？ えっと、えいがを みてる。あした ひま？ うん、ひまだよ。じゃあ、いっしょに ごはん たべない？ いいね！ なに たべたい？ うーん、ラーメンかな。',
      qs: [{ q: 'Che cosa sta facendo la persona al telefono?', o: ['Guardando un film', 'Cucinando', 'Dormendo', 'Studiando'], a: 0, kind: 'explicit' }, { q: 'Che cosa propongono?', o: ['Mangiare insieme', 'Andare al cinema', 'Studiare insieme', 'Andare in viaggio'], a: 0, kind: 'explicit' }, { q: 'Che cosa suggerisce alla fine?', o: ['Il ramen', 'Il sushi', 'La pizza', 'Il curry'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'いま なにして るの', lang: 'ja' }, { text: 'あした ひま', lang: 'ja' }, { text: 'わすれちゃった', lang: 'ja' }],
    shadowing: [{ text: 'いま なにして るの？', lang: 'ja', tip: 'Intonazione ascendente senza か.' }, { text: 'うん、ひまだよ。どうして？', lang: 'ja', tip: 'Ritmo naturale e rilassato.' }, { text: 'いいね！ いっしょに ごはん たべない？', lang: 'ja', tip: 'Tono invitante, ない? ascendente.' }],
    speaking: [{ prompt: 'Invita un amico a mangiare insieme usando la forma informale.', model: 'あした ひま？ いっしょに ごはん たべない？ なに たべたい？' }, { prompt: 'Reagisci a una notizia sorprendente (3 frasi informali).', model: 'えっ、ほんと？ へえ、そうなんだ。すごいね！' }]
  });

  addTopic({
    id: 'jpn-j5-reading', subject: 'jpn', stage: 'J5', title: 'Leggere e scrivere testi funzionali', minutes: 20, prereq: ['jpn-j4-giving-polite'],
    summary: 'Kanji in contesto, cartelli, messaggi e brevi testi; strategie di lettura e scrittura.',
    objectives: ['Leggere cartelli e avvisi di uso quotidiano', 'Capire il senso generale di un messaggio breve', 'Scrivere un messaggio funzionale in 4–5 frasi'],
    pages: [
      { h: 'Obiettivo', b: 'Leggere giapponese quotidiano non richiede migliaia di kanji: richiede **riconoscere un nucleo di kanji ad alta frequenza** nel loro contesto e usare le **strategie** giuste. La scrittura funzionale (messaggi, moduli) è utile ma meno prioritaria del parlato.' },
      { h: 'Kanji ad alta frequenza', b: 'Gruppi da imparare **in parole**, non da soli:\n- numeri e denaro: {{ja|[一|いち]}} {{ja|[二|に]}} {{ja|[三|さん]}} {{ja|[十|じゅう]}} {{ja|[百|ひゃく]}} {{ja|[千|せん]}} {{ja|[万|まん]}} {{ja|[円|えん]}}\n- tempo: {{ja|[日|ひ]}} {{ja|[月|つき]}} {{ja|[火|ひ]}} {{ja|[水|みず]}} {{ja|[木|き]}} {{ja|[金|きん]}} {{ja|[土|つち]}} {{ja|[時|じ]}} {{ja|[分|ふん]}} {{ja|[今|いま]}} {{ja|[午前|ごぜん]}} {{ja|[午後|ごご]}}\n- luoghi: {{ja|[駅|えき]}} {{ja|[店|みせ]}} {{ja|[学校|がっこう]}} {{ja|[会社|かいしゃ]}} {{ja|[出口|でぐち]}} {{ja|[入口|いりぐち]}}\n- persone e verbi: {{ja|[人|ひと]}} {{ja|[食|た]}} {{ja|[飲|の]}} {{ja|[見|み]}} {{ja|[行|い]}} {{ja|[来|く]}} {{ja|[買|か]}} {{ja|[休|やす]}}\n\nUn kanji ha spesso due letture: **on** (in composti: 学校 がっこう) e **kun** (da solo, con okurigana: 食べる たべる).' },
      { h: 'Cartelli e avvisi', b: '- {{ja|[営業中|えいぎょうちゅう]}} — aperto\n- {{ja|[準備中|じゅんびちゅう]}} — in preparazione (chiuso)\n- {{ja|[禁煙|きんえん]}} — vietato fumare\n- {{ja|[無料|むりょう]}} — gratuito\n- {{ja|[定休日|ていきゅうび]}} — giorno di chiusura\n- {{ja|[非常口|ひじょうぐち]}} — uscita di emergenza\n- {{ja|[立入禁止|たちいりきんし]}} — ingresso vietato\n\nTrucco: i composti con 禁 (divieto), 無 (senza), 中 (in corso), 口 (apertura/uscita) sono frequenti.' },
      { h: 'Strategie di lettura', b: '1. **Scorri** il testo per numeri, orari, luoghi: spesso bastano a capire.\n2. **Ignora** i kanji sconosciuti e cerca le **particelle** in hiragana: indicano il ruolo delle parole.\n3. **Indovina** dal contesto e dai kanji noti: 電話 (denwa) = elettricità + parola.\n4. Rileggi con attenzione solo ciò che serve.\n5. Per allenarti usa i furigana, poi **spegnili** e riprova.\n\nNon tradurre parola per parola: cerca il messaggio.' },
      { h: 'Scrittura funzionale', b: 'Un messaggio utile tipo ha: saluto, scopo, dettagli (quando/dove), richiesta, chiusura.\n\n> {{ja|[田中|たなか]さん、[来週|らいしゅう]の [会議|かいぎ]に ついて [連絡|れんらく]します。[月曜日|げつようび]の [午後|ごご]二[時|じ]から おねがいします。[場所|ばしょ]は [会議室|かいぎしつ]です。よろしく おねがいします。}}\n\nControlla: tempo + luogo + richiesta + formula finale. Scrivi frasi brevi con ます e kanji che conosci; in caso di dubbio scrivi in hiragana.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[午前|ごぜん]十[時|じ]から [午後|ごご]五[時|じ]まで [営業中|えいぎょうちゅう]。[月曜日|げつようび]は [定休日|ていきゅうび]です。}}\n\n- 午前十時 = 10 del mattino; 午後五時 = 5 del pomeriggio; から/まで = da/a.\n- 営業中 = aperto.\n- 月曜日 = lunedì; 定休日 = giorno di chiusura.\n\nTraduzione: «Aperto dalle 10 alle 17. Il lunedì è chiuso.»\n\nControllo: se hai capito da numeri e parole chiave senza tradurre ogni kanji, stai usando la strategia giusta.' },
      { h: 'Errori comuni', b: '- Cercare di leggere ogni kanji: perdi il senso generale.\n- Studiare kanji isolati senza parole: non si ricordano.\n- Confondere letture on e kun: impara le parole intere.\n- Scrivere kanji non sicuri: in dubbio, hiragana.\n- Trascurare i numeri e gli orari: sono la parte più informativa degli avvisi.' },
      { h: 'Riepilogo', b: '- Kanji: impara parole e contesto.\n- Cartelli frequenti: 営業中, 準備中, 禁煙, 無料, 定休日, 非常口.\n- Strategia: scorri, ignora, indovina, rileggi.\n- Scrivi messaggi brevi con ます; in dubbio, hiragana.' }
    ],
    exercises: [
      mc('Che cosa significa 営業中?', ['Aperto (in servizio)', 'Chiuso', 'Gratuito', 'Vietato'], 0),
      mc('Che cosa significa 禁煙?', ['Vietato fumare', 'Fumare permesso', 'Uscita', 'Ingresso'], 0),
      mc('Che cosa indica 無料?', ['Gratuito', 'A pagamento', 'Scontato', 'Chiuso'], 0),
      mc('Come si legge 午後?', ['ごご', 'ごぜん', 'ごがつ', 'ひる'], 0),
      fillJ('Come si legge 駅 (stazione)?', ['えき', 'eki'], 'えき.'),
      mc('Qual è la strategia migliore con un testo pieno di kanji sconosciuti?', ['Tradurre ogni parola', 'Cercare numeri, luoghi e particelle per capire il senso', 'Fermarsi subito', 'Memorizzare tutto'], 1),
      mc('Che cosa significa 定休日?', ['Giorno di chiusura', 'Giorno di apertura', 'Prezzo ridotto', 'Orario continuato'], 0)
    ],
    test: [
      mc('Come si legge 出口?', ['でぐち', 'いりぐち', 'ひじょうぐち', 'でくち'], 0),
      mc('Che cosa significa 準備中?', ['In preparazione (non aperto)', 'Aperto', 'Chiuso per sempre', 'Gratuito'], 0),
      mc('«月曜日» significa…', ['lunedì', 'martedì', 'domenica', 'mese'], 0),
      mc('Che cosa significa «五時から»?', ['Dalle 5', 'Fino alle 5', 'Alle 5 precise', 'Cinque ore'], 0)
    ],
    cards: [
      card('c1', 'aperto (in servizio)', '[営業中|えいぎょうちゅう]', '', 'えいぎょうちゅう'), card('c2', 'vietato fumare', '[禁煙|きんえん]', '', 'きんえん'), card('c3', 'gratuito', '[無料|むりょう]', '', 'むりょう'), card('c4', 'uscita', '[出口|でぐち]', '', 'でぐち'),
      card('c5', 'ingresso', '[入口|いりぐち]', '', 'いりぐち'), card('c6', 'stazione', '[駅|えき]', '', 'えき'), card('c7', 'pomeriggio', '[午後|ごご]', '', 'ごご'), card('c8', 'lunedì', '[月曜日|げつようび]', '', 'げつようび')
    ],
    listening: [{ id: 'l1', lang: 'ja', title: 'Orari del negozio', text: 'このみせは ごぜん じゅうじから ごご ごじまで えいぎょうちゅうです。げつようびは ていきゅうびです。むりょうの コーヒーが あります。きんえんです。',
      qs: [{ q: 'A che ora apre?', o: ['Alle 10', 'Alle 9', 'Alle 11', 'Alle 12'], a: 0, kind: 'explicit' }, { q: 'Quale giorno è chiuso?', o: ['Lunedì', 'Domenica', 'Sabato', 'Venerdì'], a: 0, kind: 'explicit' }, { q: 'Che cosa è gratuito?', o: ['Il caffè', 'Il pranzo', 'Il pane', 'Il tè'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ごぜん じゅうじから えいぎょうちゅう', lang: 'ja' }, { text: 'げつようびは ていきゅうびです', lang: 'ja' }, { text: 'ここは きんえんです', lang: 'ja' }],
    shadowing: [{ text: 'ごぜん じゅうじから ごご ごじまで えいぎょうちゅうです。', lang: 'ja', tip: 'Numeri e orari: chiari e regolari.' }, { text: 'げつようびは ていきゅうびです。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'むりょうの コーヒーが あります。', lang: 'ja', tip: 'む・りょ・う: 3 more.' }],
    speaking: [{ prompt: 'Leggi e riassumi ad alta voce gli orari di un negozio immaginario.', model: 'ごぜん じゅうじから ごご ごじまで えいぎょうちゅうです。げつようびは ていきゅうびです。' }, { prompt: 'Spiega a un amico che cosa significano tre cartelli giapponesi.', model: 'きんえんは たばこを すっては いけません。むりょうは おかねが いりません。ひじょうぐちは ひなんする ところです。' }],
    reading: [
      { id: 'r1', title: 'Avviso nel negozio', text: '[本日|ほんじつ]は [午後|ごご]三[時|じ]で [営業|えいぎょう]を [終|お]わります。[明日|あした]は [定休日|ていきゅうび]です。[次|つぎ]の [営業日|えいぎょうび]は [木曜日|もくようび]です。ご[来店|らいてん]を お[待|ま]ちして おります。',
        qs: [{ q: 'A che ora chiude oggi?', o: ['Alle 15', 'Alle 17', 'Alle 13', 'Alle 12'], a: 0 }, { q: 'Domani il negozio…', o: ['È chiuso', 'È aperto', 'Chiude alle 3', 'Apre alle 3'], a: 0 }, { q: 'Quando riapre?', o: ['Giovedì', 'Mercoledì', 'Venerdì', 'Lunedì'], a: 0 }] },
      { id: 'r2', title: 'Messaggio a un amico', text: '[田中|たなか]さん、[来週|らいしゅう]の [土曜日|どようび]に [駅|えき]の [前|まえ]で [会|あ]いませんか。[午後|ごご]二[時|じ]は どうですか。[映画|えいが]を [見|み]てから、[晩|ばん]ごはんを [食|た]べたいです。[返事|へんじ]を [待|ま]って います。',
        qs: [{ q: 'Dove si propone di incontrarsi?', o: ['Davanti alla stazione', 'Al cinema', 'A casa', 'In ufficio'], a: 0 }, { q: 'Quando?', o: ['Sabato prossimo alle 14', 'Domenica alle 14', 'Sabato alle 12', 'Lunedì'], a: 0 }, { q: 'Che cosa vogliono fare dopo il film?', o: ['Cenare', 'Fare shopping', 'Studiare', 'Tornare a casa'], a: 0 }] }
    ]
  });
})(window.ST = window.ST || {});
