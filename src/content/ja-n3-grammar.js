/* Giapponese — stage J6: grammatica N4→N3 (14 argomenti). */
(function (ST) {
  'use strict';
  const C = ST.content, { order, card } = C;
  let rot = 0;
  /* mc: la risposta giusta va scritta per prima; viene ruotata in modo deterministico */
  const mc = (q, o, why) => { const n = o.length, k = (rot++ * 3 + 1) % n, rest = o.slice(1); rest.splice(k, 0, o[0]); return C.mc(q, rest, k, why); };
  const lis = (say, q, o, why) => { const n = o.length, k = (rot++ * 3 + 2) % n, rest = o.slice(1); rest.splice(k, 0, o[0]); return C.listen(say, 'ja', q, rest, k, why); };
  const fillJ = (q, a, why) => ({ t: 'fill', q, a: Array.isArray(a) ? a : [a], why: why || '', ja: true });
  const G = (o) => {
    const t = { subject: 'jpn', stage: 'J6', minutes: 25, id: o.id, title: o.title, summary: o.summary, prereq: [o.prereq], objectives: o.obj, pages: o.pages, exercises: o.ex, test: o.test, cards: o.cards,
      listening: [{ id: 'l1', lang: 'ja', title: o.lis.title, text: o.lis.text, qs: o.lis.qs.map(x => { const n = x.o.length, k = (rot++ * 3 + 1) % n, rest = x.o.slice(1); rest.splice(k, 0, x.o[0]); return { q: x.q, o: rest, a: k, kind: x.kind || 'explicit' }; }) }],
      dictation: o.dict.map(text => ({ text, lang: 'ja' })), shadowing: o.shad.map(x => ({ text: x[0], lang: 'ja', tip: x[1] })), speaking: o.speak.map(x => ({ prompt: x[0], model: x[1] })) };
    C.addTopic(t);
  };

  G({ id: 'jpn-j6-gram-naru-suru', prereq: 'jpn-j5-grammar-review-n4-n3', title: 'Cambiamenti e decisioni: ようになる, ことになる, ことにする',
    summary: 'Tre strutture per dire «arrivare a», «è stato deciso che» e «ho deciso di».',
    obj: ['Distinguere ようになる, ことになる e ことにする', 'Parlare di abitudini decise e regole con ～ことにしている / ～ことになっている', 'Annunciare un cambiamento o una decisione in modo naturale'],
    pages: [
      { h: 'Obiettivo', b: 'In italiano «ho deciso», «è stato deciso» e «sono arrivato a poter fare» si distinguono con verbi diversi. In giapponese la differenza sta in tre piccole strutture con **なる** e **する**: **ようになる**, **ことになる**, **ことにする**. Ti servono per annunci, cambi di abitudine e regole.' },
      { h: 'Regola con schema', b: '**V (dizionario / potenziale) + ようになる** = «arrivare a / cominciare a» (cambiamento graduale)\n**V (dizionario / ない) + ことになる** = «è stato deciso che» (decisione esterna o risultato)\n**V (dizionario / ない) + ことにする** = «decido di» (decisione mia)\n\nLo schema di fondo: **なる** = qualcosa «diventa»; **する** = qualcuno «sceglie».' },
      { h: 'ようになる: un cambiamento', b: 'Indica che una capacità o un’abitudine è cambiata col tempo.\n- {{ja|[日本語|にほんご]が [話|はな]せる ように なりました。}} — Ora riesco a parlare giapponese.\n- {{ja|[最近|さいきん]、[毎朝|まいあさ] [走|はし]る ように なりました。}} — Di recente ho preso a correre ogni mattina.\n- Negativo: **～なく なる** = smettere di / non poter più. {{ja|[夜|よる]、コーヒーを [飲|の]まなく なりました。}}\n\nIl cambiamento è graduale: non c’è una data precisa di decisione.' },
      { h: 'ことになる: è stato deciso', b: 'La decisione non dipende (solo) da te: ditta, regola, accordo, circostanze.\n- {{ja|[来月|らいげつ]、[大阪|おおさか]へ [転勤|てんきん]する ことに なりました。}} — Il mese prossimo, a quanto è stato deciso, mi trasferisco a Osaka.\n- {{ja|[会議|かいぎ]は [来週|らいしゅう]に する ことに なりました。}}\n\n**～ことになっている** = regola, usanza stabilita: {{ja|[日本|にほん]では、[家|いえ]に [入|はい]る とき、[靴|くつ]を [脱|ぬ]ぐ ことに なっています。}}\n\nPer annunciare un matrimonio si dice spesso {{ja|[結婚|けっこん]する ことに なりました。}}: è un modo modesto di dare la notizia.' },
      { h: 'ことにする: decido io', b: 'Decisione personale, presa al momento o in passato.\n- {{ja|[今日|きょう]から [毎日|まいにち] [歩|ある]く ことに しました。}} — Da oggi ho deciso di camminare ogni giorno.\n- {{ja|[夜|よる]は [甘|あま]い ものを [食|た]べない ことに しました。}}\n\n**～ことにしている** = ho deciso (e lo faccio tuttora): {{ja|[毎朝|まいあさ] [野菜|やさい]を [食|た]べる ことに しています。}} — È la mia regola personale.\n\nLa forma **ことに した** (passato) indica che la decisione è già stata presa.' },
      { h: 'Differenze da strutture simili', b: '- **ことにする**: decido io. {{ja|[車|くるま]を [売|う]る ことに した。}}\n- **ことになる**: decidono altri o le circostanze. {{ja|[車|くるま]を [売|う]る ことに なった。}}\n- **ようになる**: nessuno decide, cambia lo stato. {{ja|[運転|うんてん]できる ように なった。}}\n\nAttenzione a **ようにする** = «cercare di»: {{ja|[毎日|まいにち] [早|はや]く [寝|ね]る ように して います。}} Non è una decisione definitiva, ma uno sforzo.' },
      { h: 'Errori tipici per italiani', b: '- Dire «ことになりました» per una scelta tutta tua suona strano: se hai scelto tu, usa **ことにしました**.\n- Con il potenziale si usa **ようになる**: {{ja|[話|はな]せる ように なる}}, non «[話|はな]す ように» (che significa un’altra cosa: abitudine di parlare).\n- Non confondere **ように** (obiettivo) e **ことに** (decisione).\n- Non tradurre «Sono diventato bravo» con ことになる: serve **～ように なる** o **～く / ～に なる**.\n- Il verbo prima di こと è sempre in forma semplice: «[食|た]べますことにしました» è sbagliato.' },
      { h: 'Riepilogo', b: '- **ようになる**: cambiamento graduale (capacità, abitudine).\n- **ことになる**: deciso da altri; **ことになっている**: regola.\n- **ことにする**: decido io; **ことにしている**: mia regola.\n- **ようにする**: faccio il possibile per.\n- Negativo: ～なくなる / ～ないことにする.' }
    ],
    ex: [
      mc('«Ora riesco a nuotare»:', ['およげる ように なりました。', 'およげる ことに しました。', 'およぐ ことに なりました。', 'およげない ように なりました。']),
      mc('«La ditta ha deciso di trasferirmi a Osaka» (non l’ho scelto io):', ['おおさかへ てんきんする ことに なりました。', 'おおさかへ てんきんする ことに しました。', 'おおさかへ てんきんする ように なりました。', 'おおさかへ てんきんしました ことに。']),
      mc('«Ho deciso di non mangiare più dolci»:', ['あまい ものは たべない ことに しました。', 'あまい ものは たべなかった ことに しました。', 'あまい ものは たべない ことが なりました。', 'あまい ものは たべない ことを です。']),
      fillJ('Completa: まいにち ジョギングする ___ して います。(è la mia regola)', ['ことに'], 'ことにしている = regola personale.'),
      fillJ('Completa: にほんごが はなせる ___ なりました。', ['ように'], 'Cambiamento di capacità: ように なる.'),
      fillJ('Completa: らいげつ けっこんする ___ なりました。', ['ことに'], 'Annuncio modesto: ことに なる.'),
      order('Metti in ordine: «Ho deciso di partire domani»', ['あした', 'しゅっぱつする', 'ことに', 'しました'], 'V + ことに する.'),
      order('Metti in ordine: «Ormai riesco a leggere i kanji»', ['かんじが', 'よめる', 'ように', 'なりました'], 'Potenziale + ように なる.'),
      lis('あした かいぎに でる ことに なりました。', 'Che cosa significa?', ['È stato stabilito che domani partecipa alla riunione', 'Ha deciso da solo di saltare la riunione', 'Ieri era alla riunione', 'Domani non c’è riunione']),
      mc('Che cosa esprime «ことに なって います»?', ['una regola o un accordo stabilito', 'un desiderio personale', 'una capacità', 'un’azione in corso']),
      mc('Quale frase indica un cambiamento di abitudine?', ['さいきん やさいを たべる ように なりました。', 'やさいを たべる ことに しました。', 'やさいを たべる ことに なりました。', 'やさいを たべたいです。'])
    ],
    test: [
      mc('«Ho smesso di fumare» (non fumo più, per natura delle cose):', ['タバコを すわなく なりました。', 'タバコを すう ように なりました。', 'タバコを すう ことに しました。', 'タバコを すわない です なりました。']),
      mc('«Secondo il regolamento, qui si tolgono le scarpe»:', ['ここでは くつを ぬぐ ことに なって います。', 'ここでは くつを ぬぐ ことに して います。', 'ここでは くつを ぬぐ ように なります。', 'ここでは くつを ぬいで です。']),
      mc('«Ho deciso di studiare un’ora ogni giorno»:', ['まいにち いちじかん べんきょうする ことに しました。', 'まいにち いちじかん べんきょうする ように なりました。', 'まいにち いちじかん べんきょうする ことに なりました。', 'まいにち いちじかん べんきょうしない ことに しました。']),
      mc('«Cerco di non fare tardi»:', ['おくれない ように して います。', 'おくれない ことに なって います。', 'おくれる ように なりました。', 'おくれない ことが します。']),
      mc('«Con il tempo sono diventato capace di cucinare»:', ['りょうりが できる ように なりました。', 'りょうりが できる ことに しました。', 'りょうりを する ことに なりました。', 'りょうりが できた ことに。']),
      fillJ('Completa: らいしゅう から じゅうじに はじめる ___ なりました。(deciso dall’azienda)', ['ことに'], 'Decisione esterna.'),
      lis('まいあさ はやく おきる ことに して います。', 'Che cosa dice la persona?', ['Si è data la regola di alzarsi presto ogni mattina', 'Non riesce ad alzarsi presto', 'Si alza tardi', 'Il capo l’ha obbligata a svegliarsi'])
    ],
    cards: [card('c1', 'arrivare a (poter) fare', 'V＋ように なる', '', 'ように なる'), card('c2', 'è stato deciso che', 'V＋ことに なる', '', 'ことに なる'), card('c3', 'decido di', 'V＋ことに する', '', 'ことに する'), card('c4', 'è la regola che', 'V＋ことに なっている', '', 'ことに なっている'), card('c5', 'è la mia regola', 'V＋ことに している', '', 'ことに している'), card('c6', 'trasferimento di sede', '[転勤|てんきん]', '', 'てんきん'), card('c7', 'abituarsi', '[慣|な]れる', '', 'なれる'), card('c8', 'cercare di (sforzo)', 'V＋ように する', '', 'ように する')],
    lis: { title: 'Un annuncio in ufficio', text: 'らいげつから、わたしは おおさかの してんで はたらく ことに なりました。にほんごが すこし はなせる ように なったので、おきゃくさんとも はなして みたいです。まいにち しんぶんを よむ ことに して います。',
      qs: [{ q: 'Dove lavorerà la persona il mese prossimo?', o: ['A Osaka', 'A Tokyo', 'A Kyoto', 'All’estero'] }, { q: 'Che cosa ha deciso di fare ogni giorno?', o: ['Leggere il giornale', 'Scrivere una e-mail', 'Cucinare', 'Correre'] }, { q: 'Il trasferimento è stato…', o: ['deciso dall’azienda', 'scelto liberamente dalla persona', 'rifiutato', 'rimandato'], kind: 'implicit' }] },
    dict: ['らいげつ おおさかへ いく ことに なりました', 'まいにち あるく ことに しました', 'にほんごが はなせる ように なりました'],
    shad: [['まいにち あるく ことに しました。', 'Pausa breve dopo あるく.'], ['てんきんする ことに なりました。', 'てんきん: n lunga e chiara.'], ['はなせる ように なりました。', 'Intonazione discendente.']],
    speak: [['Annuncia a un collega che ti trasferisci a Osaka il mese prossimo.', 'らいげつ おおさかへ てんきんする ことに なりました。'], ['Di’ che cosa hai deciso di fare ogni giorno per migliorare il giapponese.', 'まいにち にほんごの しんぶんを よむ ことに して います。']] });

  G({ id: 'jpn-j6-gram-bakari-tokoro', prereq: 'jpn-j6-gram-naru-suru', title: 'Fasi dell’azione: ～たばかり, ～ところ, ～てばかり',
    summary: 'Appena fatto, sto per fare, sto facendo; e «fare solo/sempre» con ばかり.',
    obj: ['Distinguere ～たばかり e ～たところ', 'Dire «sto per», «sto facendo», «ho appena finito» con ところ', 'Usare ばかり per «sempre / solo» con tono critico'],
    pages: [
      { h: 'Obiettivo', b: 'Due parole servono a descrivere **il punto in cui sei** in un’azione: **ところ** (il «momento») e **ばかり** (l’«appena»). Hanno anche un secondo uso: **ばかり** come «solo / sempre lo stesso», spesso con rimprovero.' },
      { h: 'Regola con schema', b: '**V-る + ところ** = sto per fare\n**V-ている + ところ** = sto facendo proprio ora\n**V-た + ところ** = ho appena finito (pochissimi istanti fa)\n**V-た + ばかり** = è successo da poco (a giudizio di chi parla)\n**V-て + ばかり いる** = faccio solo/sempre quello\n**N + ばかり** = solo N, quasi solo N' },
      { h: 'ところ: tre momenti', b: '- {{ja|いまから [出|で]かける ところです。}} — Sto per uscire.\n- {{ja|いま、[晩|ばん]ご[飯|はん]を [食|た]べて いる ところです。}} — Sto cenando proprio adesso.\n- {{ja|たった いま [帰|かえ]った ところです。}} — Sono tornato proprio ora.\n\nPuoi anche dire **ちょうど** (proprio): {{ja|ちょうど [電話|でんわ]しようと していた ところです。}}' },
      { h: 'たばかり: «da poco»', b: 'Misura soggettiva: può essere minuti o mesi, purché chi parla lo senta «recente».\n- {{ja|[先月|せんげつ]、[日本|にほん]に [来|き]た ばかりです。}} — Sono in Giappone da poco, dal mese scorso.\n- {{ja|この [靴|くつ]は [買|か]った ばかりなのに、もう [壊|こわ]れました。}}\n- {{ja|[食|た]べた ばかりだから、まだ [食|た]べられません。}}\n\nIl verbo è sempre al passato semplice. Dopo たばかり puoi usare **なのに** e **だから**.' },
      { h: 'ばかり: solo, sempre', b: '- **N ばかり**: {{ja|[肉|にく]ばかり [食|た]べては いけません。}} — Non mangiare solo carne.\n- **V-て ばかりいる**: {{ja|[弟|おとうと]は ゲームを して ばかりいます。}} — Mio fratello fa solo giochi.\n- Con i bambini: {{ja|[泣|な]いて ばかりいないで、[話|はな]して ください。}}\n\nIl tono è critico. **だけ** è neutro: {{ja|[肉|にく]だけ [食|た]べます。}} descrive; **ばかり** giudica.' },
      { h: 'Differenze da strutture simili', b: '- **～たところ** vs **～たばかり**: ところ = pochi secondi/minuti, azione ancora «calda». ばかり = periodo più largo e soggettivo. Quindi {{ja|[今|いま] [着|つ]いた ところです。}} ma {{ja|[先週|せんしゅう] [着|つ]いた ばかりです。}}\n- Per un evento di mesi fa, **ところ** è innaturale: {{ja|[先月|せんげつ]、[結婚|けっこん]した ばかりです。}}\n- **～ているところ** vs **～ている**: ところ sottolinea il «proprio ora»; è azione concreta e di breve durata.' },
      { h: 'Errori tipici per italiani', b: '- Dire «[食|た]べたばかりです» per «ho mangiato» (senza senso di recente): serve **[食|た]べました**.\n- Usare ところ con verbi di stato: «いるところです» è raro.\n- Dimenticare il passato: «[来|く]るばかりです» è sbagliato → **[来|き]たばかり**.\n- Usare ばかり dopo la forma ます: «たべますばかり» → **たべてばかり**.\n- Tradurre «solo» sempre con ばかり: se non c’è critica, scegli **だけ**.' },
      { h: 'Riepilogo', b: '- る/ている/た + **ところ**: prima / durante / subito dopo.\n- た + **ばかり**: da poco.\n- て + **ばかり いる**: fare sempre la stessa cosa.\n- N + **ばかり**: quasi solo N (tono critico).\n- ばかり ≠ だけ per giudizio.' }
    ],
    ex: [
      mc('«Sto per uscire»:', ['でかける ところです。', 'でかけた ばかりです。', 'でかけて ばかりです。', 'でかけている だけです。']),
      mc('«Ho appena finito di mangiare» (un momento fa):', ['たべた ところです。', 'たべる ところです。', 'たべている ところです。', 'たべて ばかりです。']),
      mc('«Sono arrivato in Giappone da poco, un mese fa»:', ['いっかげつ まえに きた ばかりです。', 'いっかげつ まえに くる ばかりです。', 'いっかげつ まえに きている ところです。', 'いっかげつ まえに きて ばかりです。']),
      fillJ('Completa: いま ごはんを たべて いる ___ です。', ['ところ'], 'Azione in corso: ている ところ.'),
      fillJ('Completa: いもうとは ゲームを して ___ います。(sempre)', ['ばかり'], 'て ばかり いる.'),
      fillJ('Completa: かった ___ なのに、もう こわれました。', ['ばかり'], 'Acquistato da poco: た ばかり.'),
      order('Metti in ordine: «Sono appena tornato»', ['たった', 'いま', 'かえった', 'ところです'], 'た ところ.'),
      order('Metti in ordine: «Mio fratello mangia solo carne»', ['おとうとは', 'にくばかり', 'たべて', 'います'], 'N ばかり + verbo.'),
      lis('いま ひるごはんを たべて いる ところです。', 'Che cosa sta facendo?', ['Sta mangiando il pranzo', 'Sta per mangiare', 'Ha già mangiato', 'Non ha fame']),
      mc('Qual è la differenza tra ばかり e だけ in «にくばかり たべる»?', ['ばかり suona critico: troppa carne', 'è identico a だけ', 'significa «niente carne»', 'significa «ogni tanto»']),
      mc('Quale frase è sbagliata?', ['しごとは はじめるばかりです。', 'しごとは はじめた ばかりです。', 'しごとを はじめる ところです。', 'しごとを して いる ところです。'])
    ],
    test: [
      mc('«Stavo per chiamarti» (proprio ora):', ['でんわしようと した ところでした。', 'でんわしている ばかりでした。', 'でんわした ばかり です。', 'でんわしない ところ。']),
      mc('«Ho appena mangiato, quindi non ho fame»:', ['たべた ばかりなので、おなかが すいて いません。', 'たべる ばかりなので、おなかが すいて います。', 'たべて ばかり なので、おなかが すきます。', 'たべた ところ だけ。']),
      mc('«Lui parla solo di lavoro» (con lamentela):', ['しごとの はなしばかり します。', 'しごとの はなしだけが ばかりです。', 'しごとの はなしを ところです。', 'しごとの はなしに ばかり。']),
      mc('Con «ところ», quale forma indica «sto per»?', ['V-る', 'V-た', 'V-ない', 'V-ます']),
      mc('«Il telefono che ho comprato da poco è già rotto»:', ['かった ばかりの でんわが もう こわれました。', 'かう ばかりの でんわが こわれる。', 'かって ばかりの でんわ。', 'かった ところの でんわが。']),
      fillJ('Completa: いま かえってきた ___ です。(proprio ora)', ['ところ'], 'た ところ.'),
      lis('てれびを みて ばかり いないで、べんきょうしなさい。', 'Che cosa dice la persona?', ['Non guardare sempre la TV, studia', 'Guarda la TV dopo aver studiato', 'Sta guardando la TV', 'La TV si è rotta'])
    ],
    cards: [card('c1', 'sto per fare', 'V-る＋ところ', '', 'ところ'), card('c2', 'sto facendo proprio ora', 'V-ている＋ところ', '', 'ているところ'), card('c3', 'ho appena fatto', 'V-た＋ところ', '', 'たところ'), card('c4', 'da poco', 'V-た＋ばかり', '', 'たばかり'), card('c5', 'fare sempre solo…', 'V-て＋ばかり いる', '', 'てばかりいる'), card('c6', 'proprio (adesso)', 'ちょうど', '', 'ちょうど'), card('c7', 'rompersi', '[壊|こわ]れる', '', 'こわれる'), card('c8', 'piangere', '[泣|な]く', '', 'なく')],
    lis: { title: 'Una telefonata', text: 'もしもし、たなかさん。いま、どこですか。えきを でた ところです。わたしは にほんに きた ばかりなので、みちが よく わかりません。ちょうど でんわしようと して いた ところです。いま むかえに いきます。',
      qs: [{ q: 'Dove si trova la persona?', o: ['Appena uscita dalla stazione', 'Ancora in treno', 'A casa', 'In ufficio'] }, { q: 'Perché non conosce bene la strada?', o: ['È in Giappone da poco', 'Ha dimenticato la mappa', 'È stanca', 'Il telefono non funziona'] }, { q: 'Che cosa farà Tanaka?', o: ['Andrà a prenderla', 'Aspetterà a casa', 'Le manderà una mappa', 'Chiuderà la telefonata'], kind: 'implicit' }] },
    dict: ['いま えきを でた ところです', 'にほんに きた ばかりです', 'ゲームばかり して います'],
    shad: [['いま かえった ところです。', 'Pausa dopo いま.'], ['にほんに きた ばかりです。', 'ばかり: ba-ka-ri senza pausa.'], ['てれびを みて ばかりいます。', 'Tono di rimprovero.']],
    speak: [['Di’ che sei in Giappone da poco e che non conosci bene la strada.', 'にほんに きた ばかりなので、みちが よく わかりません。'], ['Un amico ti chiama: digli che stai per uscire.', 'いま でかける ところです。']] });

  G({ id: 'jpn-j6-gram-uchi-aida-mama', prereq: 'jpn-j6-gram-bakari-tokoro', title: 'Mentre e finché: ～うちに, ～[間|あいだ]に, ～まま, ～ずに',
    summary: 'Cogliere il momento (うちに), durata ([間|あいだ]), stato invariato (まま) e «senza fare» (ずに).',
    obj: ['Usare うちに per «finché si è in tempo»', 'Distinguere [間|あいだ] e [間|あいだ]に', 'Dire «lasciando com’è» con まま e «senza» con ずに'],
    pages: [
      { h: 'Obiettivo', b: 'Quattro strutture descrivono **come l’azione si inserisce nel tempo o in uno stato**: finché dura una situazione (**うちに**), per tutta la durata (**[間|あいだ]**), lasciando le cose così (**まま**), senza compiere un’azione (**ずに**).' },
      { h: 'Regola con schema', b: '**V-る / V-ている / V-ない + うちに**\n**い-agg + うちに**, **な-agg + な + うちに**, **N + の + うちに**\n**V-ている / N の + [間|あいだ](に)**\n**V-た / V-ない / N の + まま**\n**V-ない ([語幹|ごかん]) + ずに** (する → せずに)' },
      { h: 'うちに: prima che cambi', b: 'Approfittare di una situazione «prima» che finisca (o accadere senza accorgersene).\n- {{ja|[若|わか]い うちに いろいろな ことを [経験|けいけん]したい。}}\n- {{ja|[温|あたた]かい うちに [食|た]べて ください。}}\n- {{ja|[忘|わす]れない うちに メモします。}}\n- {{ja|[雨|あめ]が [降|ふ]らない うちに [帰|かえ]りましょう。}}\n- {{ja|[知|し]らない うちに [寝|ね]て しまいました。}} — Mi sono addormentato senza accorgermene.' },
      { h: '[間|あいだ] e [間|あいだ]に', b: '- **[間|あいだ]**: durata continua; il secondo verbo è anch’esso continuo. {{ja|[子供|こども]が [寝|ね]て いる [間|あいだ]、[静|しず]かに して ください。}}\n- **[間|あいだ]に**: un fatto puntuale dentro quel periodo. {{ja|[留守|るす]の [間|あいだ]に [荷物|にもつ]が [届|とど]きました。}}\n- Con un nome: {{ja|[夏休|なつやす]みの [間|あいだ]に [宿題|しゅくだい]を [終|お]わらせます。}}\n\nTraduzione utile: **[間|あいだ]** = «per tutto il tempo che», **[間|あいだ]に** = «mentre, a un certo punto».' },
      { h: 'まま e ずに', b: '- **V-た まま**: lo stato resta così. {{ja|[窓|まど]を [開|あ]けた まま [寝|ね]て しまいました。}} / {{ja|[電気|でんき]を つけた まま [出|で]かけました。}}\n- **V-ない まま**: {{ja|[何|なに]も [食|た]べない まま [会社|かいしゃ]へ [行|い]きました。}}\n- **N の まま**: {{ja|[昔|むかし]の まま です。}}\n- **ずに**: {{ja|[朝|あさ]ご[飯|はん]を [食|た]べずに [出|で]かけました。}} = {{ja|[食|た]べないで [出|で]かけました。}} (più scritto)\n- {{ja|[勉強|べんきょう]せずに [遊|あそ]んで います。}}' },
      { h: 'Differenze da strutture simili', b: '- **ながら** (due azioni insieme, stesso soggetto): {{ja|[音楽|おんがく]を [聞|き]きながら [勉強|べんきょう]します。}} L’azione principale è la seconda.\n- **[間|あいだ]** può avere soggetti diversi: {{ja|[私|わたし]が [料理|りょうり]して いる [間|あいだ]、[彼|かれ]は [新聞|しんぶん]を [読|よ]んで います。}}\n- **ついでに**: sfrutto un’altra azione. {{ja|[買|か]い[物|もの]の ついでに [銀行|ぎんこう]へ [行|い]きます。}}\n- **まま** non indica azione ma **stato che persiste**; per «continuo a» usa ～[続|つづ]ける.' },
      { h: 'Errori tipici per italiani', b: '- Usare [間|あいだ] con un’azione puntuale: «[留守|るす]の [間|あいだ] [荷物|にもつ]が [届|とど]きました» non è naturale → **[間|あいだ]に**.\n- Dimenticare la **な** con aggettivi in な: {{ja|[静|しず]かな うちに}}.\n- Usare **ながら** con due soggetti diversi.\n- Dire «[窓|まど]を[開|あ]けるまま[寝|ね]ます» (forma del dizionario): まま richiede la forma た (stato già creato) → **[開|あ]けたまま**.\n- Confondere **ずに** e **ずに いる**: la seconda è «restare senza».' },
      { h: 'Riepilogo', b: '- **うちに**: approfittare prima del cambiamento.\n- **[間|あいだ]**: tutta la durata; **[間|あいだ]に**: un evento nel periodo.\n- **まま**: stato invariato.\n- **ずに / ないで**: senza fare.\n- **ながら**: azioni simultanee, stesso soggetto.' }
    ],
    ex: [
      mc('«Finché sono giovane, voglio viaggiare»:', ['わかい うちに りょこうしたいです。', 'わかい まま りょこうしたいです。', 'わかかった うちに りょこうしたいです。', 'わかい ばかりに りょこうしたいです。']),
      mc('«Durante la mia assenza è arrivato un pacco»:', ['るすの あいだに にもつが とどきました。', 'るすの あいだ ずっと にもつが とどきました。', 'るすの ままに にもつが とどきました。', 'るすの うちを にもつが とどきました。']),
      mc('«Ho dormito con la finestra aperta»:', ['まどを あけた まま ねました。', 'まどを あけて まま ねました。', 'まどを あけた ながら ねました。', 'まどを あける うちに ねました。']),
      fillJ('Completa: あさごはんを たべ___ でかけました。(senza)', ['ずに'], 'ずに = senza fare.'),
      fillJ('Completa: おんがくを きき___ べんきょうします。', ['ながら'], 'Due azioni insieme.'),
      fillJ('Completa: わすれない ___ メモします。', ['うちに'], 'Prima di dimenticare.'),
      order('Metti in ordine: «Sono uscito senza dire nulla»', ['なにも', 'いわずに', 'でかけました'], 'ずに = senza.'),
      order('Metti in ordine: «Sono uscito lasciando la luce accesa»', ['でんきを', 'つけた', 'まま', 'でかけました'], 'V-た まま.'),
      lis('ねて いる あいだに でんわが ありました。', 'Che cosa significa?', ['Ha telefonato qualcuno mentre dormiva', 'Ha telefonato dopo che si è svegliato', 'Non ha dormito', 'Ha telefonato prima di dormire']),
      mc('Con «ながら» i due verbi hanno…', ['lo stesso soggetto', 'soggetti sempre diversi', 'sempre il passato', 'sempre la forma ます']),
      mc('Quale frase è naturale?', ['あつい うちに のんで ください。', 'あつかった まま のんで ください。', 'あつい ずに のんで ください。', 'あつくない ばかりに のんで ください。'])
    ],
    test: [
      mc('«Mentre cucinavo, mio fratello leggeva il giornale»:', ['わたしが りょうりして いる あいだ、おとうとは しんぶんを よんで いました。', 'わたしが りょうりしながら、おとうとは しんぶんを よみました。', 'わたしが りょうりした まま、おとうとが よみます。', 'わたしが りょうりせずに、おとうと。']),
      mc('«Non voglio che si raffreddi: mangia finché è caldo»:', ['さめない うちに たべて ください。', 'さめた まま たべて ください。', 'さめない ずに たべて。', 'さめて いる あいだに。']),
      mc('«Non ho fatto colazione e sono andato al lavoro»:', ['あさごはんを たべずに かいしゃへ いきました。', 'あさごはんを たべるずに かいしゃへ。', 'あさごはんを たべた ずに。', 'あさごはんを たべる まま。']),
      mc('«Ho lasciato la porta aperta»:', ['ドアを あけた ままに して しまった。', 'ドアを あける ままに して。', 'ドアを あけて うちに。', 'ドアを あけながら しまった。']),
      mc('«Camminando, parlo al telefono» (stesso soggetto):', ['あるきながら でんわで はなします。', 'あるく うちに でんわで はなします。', 'あるいた まま はなします。', 'あるく ずに はなします。']),
      fillJ('Completa: あめが ふらない ___ かえりましょう。', ['うちに'], 'Prima che cambi.'),
      lis('くつを はいた まま はいらないで ください。', 'Che cosa viene chiesto?', ['Di non entrare con le scarpe ai piedi', 'Di mettersi le scarpe', 'Di entrare in fretta', 'Di lasciare le scarpe fuori e andare via'])
    ],
    cards: [card('c1', 'finché; prima che', 'V＋うちに', '', 'うちに'), card('c2', 'durante (tutto il tempo)', '[間|あいだ]', '', 'あいだ'), card('c3', 'durante (in un momento)', '[間|あいだ]に', '', 'あいだに'), card('c4', 'rimanendo così', 'V-た＋まま', '', 'まま'), card('c5', 'senza fare', 'V-ず＋に', '', 'ずに'), card('c6', 'assenza da casa', '[留守|るす]', '', 'るす'), card('c7', 'pacco, bagaglio', '[荷物|にもつ]', '', 'にもつ'), card('c8', 'cogliendo l’occasione', 'ついでに', '', 'ついでに')],
    lis: { title: 'Un messaggio vocale', text: 'もしもし、やまだです。るすの あいだに にもつが とどいたと ききました。あたたかい うちに たべて ください。まどを あけた ままで ねて しまったので、さむいです。あした おなかが いたくならない うちに、くすりを のみます。',
      qs: [{ q: 'Che cosa è successo in assenza di Yamada?', o: ['È arrivato un pacco', 'È arrivata una lettera', 'È venuto un amico', 'È suonato il telefono'] }, { q: 'Perché ha freddo?', o: ['Ha dormito con la finestra aperta', 'Ha spento il riscaldamento', 'Ha perso la giacca', 'È fuori casa'] }, { q: 'Che cosa intende fare con la medicina?', o: ['Prenderla prima di stare male', 'Buttarla', 'Prenderla dopo cena', 'Comprarla domani'], kind: 'implicit' }] },
    dict: ['わかい うちに りょこうしたい', 'まどを あけた まま ねました', 'あさごはんを たべずに でかけました'],
    shad: [['わすれない うちに メモします。', 'Pausa dopo うちに.'], ['でんきを つけた まま でかけました。', 'まま: m lunga.'], ['なにも いわずに かえりました。', 'いわずに: 3 mora.']],
    speak: [['Consiglia a un amico di mangiare finché è caldo.', 'あたたかい うちに たべて ください。'], ['Racconta che sei uscito senza fare colazione.', 'けさは あさごはんを たべずに でかけました。']] });

  G({ id: 'jpn-j6-gram-rashii-ppoi-gachi', prereq: 'jpn-j6-gram-uchi-aida-mama', title: 'Tratti e tendenze: ～らしい, ～っぽい, ～がち, ～[気味|ぎみ]',
    summary: 'Dire «tipico di», «che ricorda», «incline a» e «un po’ in uno stato» con suffissi.',
    obj: ['Distinguere らしい (tipico) e っぽい (che ricorda)', 'Usare がち e [気味|ぎみ] per tendenze negative', 'Aggiungere やすい / にくい / づらい ai verbi'],
    pages: [
      { h: 'Obiettivo', b: 'I suffissi giapponesi permettono di **descrivere tratti e tendenze** in poche sillabe. Imparali come blocchi: **N らしい**, **N っぽい**, **V-ます がち**, **N/V [気味|ぎみ]**, **V-ます やすい / にくい**.' },
      { h: 'Regola con schema', b: '**N + らしい** = «tipico di / degno di N» (giudizio positivo)\n**N / i-agg ([語幹|ごかん]) / V-ます + っぽい** = «che ha un che di…» (spesso negativo)\n**V-ます + がち / N + がち** = «tende a» (cose spiacevoli)\n**N / V-ます + [気味|ぎみ]** = «un po’… (leggero stato)» \n**V-ます + やすい / にくい / づらい** = facile / difficile da fare' },
      { h: 'らしい: tipico di', b: '- {{ja|[春|はる]らしい [天気|てんき]です。}} — Un tempo da primavera.\n- {{ja|[学生|がくせい]らしい [服装|ふくそう]で [来|き]て ください。}}\n- {{ja|もっと [自分|じぶん]らしく [生|い]きたい。}}\n\nAttenzione: **～らしい** significa anche «a quanto pare» ({{ja|[雨|あめ]が [降|ふ]る らしい。}}), ma qui con un nome indica la **natura tipica**.' },
      { h: 'っぽい: ha un che di', b: '- {{ja|あの [人|ひと]は [子供|こども]っぽい。}} — Fa un po’ il bambino.\n- {{ja|[怒|おこ]りっぽい}} irascibile, {{ja|[忘|わす]れっぽい}} smemorato, {{ja|[飽|あ]きっぽい}} incostante\n- {{ja|[水|みず]っぽい スープ}} zuppa acquosa, {{ja|[白|しろ]っぽい [服|ふく]}} abito biancastro\n\nIl tono è spesso negativo o vago. [子供|こども]らしい è un complimento, [子供|こども]っぽい no.' },
      { h: 'がち e [気味|ぎみ]', b: '- **がち**: {{ja|[冬|ふゆ]は [風邪|かぜ]を ひきがちです。}} / {{ja|[彼|かれ]は [遅刻|ちこく]しがちだ。}} / {{ja|[病気|びょうき]がちな [子供|こども]}}.\n- **[気味|ぎみ]**: stato leggero, in corso. {{ja|[風邪|かぜ]ぎみ}} un po’ raffreddato, {{ja|[疲|つか]れぎみ}} un po’ stanco, {{ja|[太|ふと]りぎみ}} un po’ in sovrappeso.\n\nSi usano per fenomeni **indesiderati**: «tende a dimenticare», non «tende ad aiutare».' },
      { h: 'やすい, にくい, づらい', b: '- {{ja|この ペンは [書|か]きやすい。}} — Questa penna scrive bene.\n- {{ja|この [漢字|かんじ]は [読|よ]みにくい。}}\n- {{ja|[人|ひと]の まえでは [言|い]いづらい。}} (psicologicamente difficile)\n- Anche per «incline a»: {{ja|このコップは [割|わ]れやすい。}} — Questo bicchiere si rompe facilmente.\n\n**やすい** (facile) e **がち** (tende a) sono diversi: やすい è una proprietà, がち è una tendenza di chi agisce.' },
      { h: 'Errori tipici per italiani', b: '- Dire «[子供|こども]っぽい» come complimento: è un rimprovero.\n- Usare **がち** per cose positive: «[勉強|べんきょう]しがち» suona strano.\n- Dimenticare di usare la radice: {{ja|[書|か]きやすい}}, non «[書|か]くやすい».\n- Mettere **[気味|ぎみ]** con aggettivi: serve un nome o un verbo (radice ます).\n- Confondere **らしい** (tipico) con **ようだ**: {{ja|[先生|せんせい]の ようだ}} = come un professore.' },
      { h: 'Riepilogo', b: '- **N らしい** = tipico (positivo).\n- **っぽい** = ha un che di (neutro / negativo).\n- **がち** = tende a (negativo).\n- **[気味|ぎみ]** = un po’ in quello stato.\n- **やすい / にくい / づらい** = facile / difficile.' }
    ],
    ex: [
      mc('«Un tempo tipico di primavera»:', ['はるらしい てんき', 'はるっぽい てんき', 'はるがちな てんき', 'はるぎみ てんき']),
      mc('«Quella persona è un po’ infantile» (critica):', ['あの ひとは こどもっぽい。', 'あの ひとは こどもらしい。', 'あの ひとは こどもがち。', 'あの ひとは こどもやすい。']),
      mc('«In inverno mi raffreddo facilmente»:', ['ふゆは かぜを ひきがちです。', 'ふゆは かぜを ひきぎみに。', 'ふゆは かぜを ひくらしい。', 'ふゆは かぜを ひきっぽい。']),
      fillJ('Completa: この ペンは かき___。(scrive bene)', ['やすい'], 'V-ます + やすい.'),
      fillJ('Completa: きょうは すこし かぜ___ です。(un po’ raffreddato)', ['ぎみ'], 'N + [気味|ぎみ].'),
      fillJ('Completa: かれは おこり___ ひとです。(irascibile)', ['っぽい'], '怒りっぽい.'),
      order('Metti in ordine: «Questo kanji è difficile da leggere»', ['この', 'かんじは', 'よみにくい'], 'V-ます + にくい.'),
      order('Metti in ordine: «Vorrei vivere in modo più autentico»', ['もっと', 'じぶんらしく', 'いきたい'], 'N + らしく.'),
      lis('このコップは われやすいです。', 'Che cosa significa?', ['Questo bicchiere si rompe facilmente', 'Questo bicchiere è nuovo', 'Questo bicchiere è difficile da lavare', 'Questo bicchiere è resistente']),
      mc('Quale suffisso si usa per cose indesiderate o tendenze negative?', ['がち', 'らしい', 'やすい', 'ながら']),
      mc('«つかれぎみ» significa…', ['un po’ stanco', 'molto stanco', 'non stanco', 'tipico della stanchezza'])
    ],
    test: [
      mc('«Questa strada è difficile da percorrere» (camminare):', ['このみちは あるきにくい。', 'このみちは あるきがち。', 'このみちは あるきっぽい。', 'このみちは あるくらしい。']),
      mc('«Lui tende ad arrivare tardi»:', ['かれは ちこくしがちだ。', 'かれは ちこくっぽい。', 'かれは ちこくやすい。', 'かれは ちこくらしい を。']),
      mc('«Non è un comportamento da studente»:', ['がくせいらしくない。', 'がくせいっぽくない。', 'がくせいがち ない。', 'がくせい ぎみない。']),
      mc('«Una minestra acquosa» (negativo):', ['みずっぽい スープ', 'みずらしい スープ', 'みずがち スープ', 'みずやすい スープ']),
      mc('«In questo periodo sono un po’ in sovrappeso»:', ['さいきん ふとりぎみです。', 'さいきん ふとりがちです。', 'さいきん ふとらしい。', 'さいきん ふとやすい です。']),
      fillJ('Completa: それは わすれ___ ひとの しっぱいだ。(smemorato)', ['っぽい'], '忘れっぽい.'),
      lis('あの ひとは こどもらしいね。', 'Che tono ha la frase?', ['È un complimento: ha l’innocenza di un bambino', 'È una critica: è immaturo', 'Dice che non è un bambino', 'Dice che è stanco'])
    ],
    cards: [card('c1', 'tipico di N', 'N＋らしい', '', 'らしい'), card('c2', 'ha un che di…', '～っぽい', '', 'っぽい'), card('c3', 'tende a (negativo)', 'V-ます＋がち', '', 'がち'), card('c4', 'un po’ in quello stato', '～[気味|ぎみ]', '', 'ぎみ'), card('c5', 'facile da…', 'V-ます＋やすい', '', 'やすい'), card('c6', 'difficile da…', 'V-ます＋にくい', '', 'にくい'), card('c7', 'irascibile', '[怒|おこ]りっぽい', '', 'おこりっぽい'), card('c8', 'arrivare in ritardo', '[遅刻|ちこく]する', '', 'ちこくする')],
    lis: { title: 'Dal medico', text: 'さいきん、つかれぎみで、かぜも ひきがちです。ふゆは いつも そうです。この くすりは のみやすいですよ。あまい あじで、みずっぽくないです。わすれっぽいので、あさと よるに のむ ことに します。',
      qs: [{ q: 'Come si sente il paziente?', o: ['Un po’ stanco e incline a raffreddarsi', 'In piena forma', 'Molto malato', 'Senza appetito'] }, { q: 'Com’è la medicina?', o: ['Facile da prendere, dolce', 'Amara', 'Molto cara', 'Difficile da inghiottire'] }, { q: 'Perché decide di prenderla mattina e sera?', o: ['Perché dimentica facilmente', 'Perché ha tempo', 'Perché costa poco', 'Perché il medico lo vieta'], kind: 'implicit' }] },
    dict: ['ふゆは かぜを ひきがちです', 'この ペンは かきやすい', 'かれは おこりっぽい ひとです'],
    shad: [['はるらしい てんきです。', 'らしい: ra-shi-i.'], ['さいきん つかれぎみです。', 'ぎみ: g chiaro.'], ['この かんじは よみにくい。', 'Intonazione discendente.']],
    speak: [['Di’ che questa penna scrive bene.', 'この ペンは かきやすいです。'], ['Descrivi un amico smemorato.', 'ともだちは わすれっぽい ひとです。']] });

  G({ id: 'jpn-j6-gram-concessione', prereq: 'jpn-j6-gram-rashii-ppoi-gachi', title: 'Contrasto e concessione: のに, ても, くせに, ものの',
    summary: '«Nonostante», «anche se», «eppure»: sfumature e registro.',
    obj: ['Scegliere tra のに e ても', 'Usare くせに e ものの nel registro giusto', 'Riconoscere にもかかわらず nei testi formali'],
    pages: [
      { h: 'Obiettivo', b: 'L’italiano usa «anche se», «nonostante», «eppure» per il contrasto. In giapponese la scelta dipende da **fatto reale o ipotesi** e da **tono** (neutro, critico, formale). Questo argomento chiarisce: **のに**, **ても / でも**, **くせに**, **ものの**, **にもかかわらず**.' },
      { h: 'Regola con schema', b: '**forma semplice + のに** (fatto reale + sorpresa/insoddisfazione); con な-agg e N: **な / なのに**\n**V-て + も**, **い-agg くて + も**, **な-agg / N + でも** (ipotesi o regola generale)\n**forma semplice + くせに** (rimprovero)\n**forma semplice + ものの** (scritto, «è vero che… ma»)\n**N / forma semplice + にもかかわらず** (formale)' },
      { h: 'のに: fatto + sorpresa', b: '- {{ja|[勉強|べんきょう]した のに、[試験|しけん]に [落|お]ちました。}} — Ho studiato, eppure sono stato bocciato.\n- {{ja|[春|はる]なのに、まだ [寒|さむ]いです。}}\n- {{ja|[日曜日|にちようび]なのに、[仕事|しごと]を して います。}}\n\nLa seconda parte è un fatto o un’emozione, **non** una richiesta o un ordine.' },
      { h: 'ても / でも: ipotesi o generale', b: '- {{ja|[雨|あめ]が [降|ふ]っても、[行|い]きます。}} — Anche se piove, andrò.\n- {{ja|[高|たか]くても、[買|か]います。}}\n- {{ja|[子供|こども]でも わかります。}} — Lo capirebbe persino un bambino.\n- {{ja|いくら [食|た]べても [太|ふと]りません。}} — Per quanto io mangi, non ingrasso.\n\nPer i verbi: **て form + も**; negativo: **なくても**. Con la seconda frase puoi usare richieste, volontà, ordini.' },
      { h: 'くせに, ものの, ところが', b: '- **くせに**: critica verso la persona. {{ja|[知|し]って いる くせに [教|おし]えて くれない。}} — Sa tutto eppure non me lo dice.\n- **ものの**: scritto, concessione. {{ja|[買|か]った ものの、[使|つか]って いません。}} — Ok, l’ho comprato, ma non lo uso.\n- **～たところ** (scoperta): {{ja|[行|い]って みた ところ、[店|みせ]は [休|やす]みでした。}} — Sono andato e ho scoperto che era chiuso.\n- **ところが**: {{ja|[行|い]きました。ところが、[誰|だれ]も いませんでした。}}' },
      { h: 'にもかかわらず e confronti', b: '- {{ja|[雨|あめ]にもかかわらず、たくさんの [人|ひと]が [来|き]ました。}} — Nonostante la pioggia, sono venute molte persone.\n- {{ja|[忙|いそが]しいにも かかわらず、[来|き]て くださって ありがとうございます。}}\n\nRegistro: **のに** (parlato) < **ものの / くせに** (diversi toni) < **にもかかわらず** (formale / notizie).\nIn scritti e discorsi aziendali: にもかかわらず o ながらも.' },
      { h: 'Errori tipici per italiani', b: '- Usare **のに** con una richiesta: «[寒|さむ]いのに、[窓|まど]を [閉|し]めて ください» è scorretto → usa **ても** o **けど**.\n- Usare **ても** per un fatto già avvenuto con sorpresa: meglio **のに**.\n- Dimenticare **な** prima di のに: {{ja|[静|しず]かなのに}}, {{ja|[雨|あめ]なのに}}.\n- Usare **くせに** con il tuo comportamento: è sempre un’accusa verso l’altro (o autocritica).\n- Dire «でも» a inizio frase come «però» e confonderlo con **でも** (anche).' },
      { h: 'Riepilogo', b: '- **のに**: contrasto reale, sorpresa.\n- **ても / でも**: ipotesi e regole generali.\n- **くせに**: rimprovero.\n- **ものの**: concessione scritta.\n- **にもかかわらず**: formale.\n- Dopo のに niente richieste né ordini.' }
    ],
    ex: [
      mc('«Ho studiato, eppure sono stato bocciato»:', ['べんきょうした のに、おちました。', 'べんきょうしたから、おちました。', 'べんきょうする くせに、おちました。', 'べんきょうした ように、おちました。']),
      mc('«Anche se piove, andrò»:', ['あめが ふっても、いきます。', 'あめが ふったのに、いきます。', 'あめが ふる くせに、いきます。', 'あめが ふらないのに、いきます。']),
      mc('«È primavera, eppure fa ancora freddo»:', ['はるなのに、まだ さむいです。', 'はるだ ので、まだ さむいです。', 'はるな くせ、さむい。', 'はるだ ものの。']),
      fillJ('Completa: たかく___ かいます。(anche se è caro)', ['ても'], 'い-agg: くても.'),
      fillJ('Completa: しって いる___ おしえて くれない。(rimprovero)', ['くせに'], 'くせに = rimprovero.'),
      fillJ('Completa: ひまな___ てつだって くれません。(eppure)', ['のに'], 'Aggettivo な + のに.'),
      order('Metti in ordine: «Anche un bambino lo capisce»', ['こどもでも', 'わかります'], 'N でも.'),
      order('Metti in ordine: «Nonostante la pioggia, sono venute molte persone»', ['あめにも', 'かかわらず', 'たくさんの', 'ひとが', 'きました'], 'N にもかかわらず.'),
      lis('かった ものの、ぜんぜん つかって いません。', 'Che cosa significa?', ['L’ha comprato ma non lo usa affatto', 'L’ha comprato e lo usa spesso', 'Non l’ha comprato', 'Vuole comprarlo']),
      mc('Quale frase è scorretta?', ['さむいのに、まどを しめて ください。', 'さむくても、まどを あけて います。', 'さむいのに、まどが あいて います。', 'さむいけど、まどを しめて ください。']),
      mc('Quale espressione è più formale?', ['にもかかわらず', 'のに', 'くせに', 'けど'])
    ],
    test: [
      mc('«Per quanto mangi, non ingrasso»:', ['いくら たべても ふとりません。', 'いくら たべたのに ふとりません。', 'いくら たべる くせに ふとりません。', 'いくら たべた ものの ふとる。']),
      mc('«Sono andato e il negozio era chiuso»:', ['いって みたところ、みせは やすみでした。', 'いって みたのに、みせは やすみでした から。', 'いって みても、みせは やすみ。', 'いった くせに、みせが。']),
      mc('«Domenica, eppure lavoro»:', ['にちようびなのに、しごとを して います。', 'にちようびでも、しごとの ものの。', 'にちようびの くせ。', 'にちようびな ても。']),
      mc('«Anche se sono stanco, devo andare»:', ['つかれて いても、いかなければ なりません。', 'つかれて いなくても、いかなければ なりません。', 'つかれて いる くせに、いきたい。', 'つかれて いる ものの なりません。']),
      mc('Quale frase accusa l’interlocutore?', ['じぶんは やらない くせに、ひとには いう。', 'じぶんは やらないのに ひとには いえない。', 'じぶんは やらなくても。', 'じぶんは やっても。']),
      fillJ('Completa: やすみの ひ___ はたらきます。(anche nei giorni di riposo)', ['でも'], 'N でも.'),
      lis('べんきょうした のに、てすとは ぜんぜん できませんでした。', 'Che emozione trasmette?', ['Delusione', 'Gioia', 'Calma', 'Orgoglio'])
    ],
    cards: [card('c1', 'nonostante (sorpresa)', '～のに', '', 'のに'), card('c2', 'anche se (ipotesi)', '～ても / でも', '', 'ても'), card('c3', 'eppure (rimprovero)', '～くせに', '', 'くせに'), card('c4', 'è vero che… ma', '～ものの', '', 'ものの'), card('c5', 'nonostante (formale)', '～にもかかわらず', '', 'にもかかわらず'), card('c6', 'per quanto…', 'いくら～ても', '', 'いくらても'), card('c7', 'bocciare, cadere', '[落|お]ちる', '', 'おちる'), card('c8', 'esame, test', '[試験|しけん]', '', 'しけん')],
    lis: { title: 'Un caso strano', text: 'きのうは にちようびなのに、かいしゃへ いきました。あめが ふって いるのに、バスが こなくて あるきました。ところが、かいしゃに ついた ところ、だれも いませんでした。かんがえてみると、しゅうまつは やすみでした。いくら いそいでも、ひとは いませんね。',
      qs: [{ q: 'Che giorno era?', o: ['Domenica', 'Lunedì', 'Venerdì', 'Mercoledì'] }, { q: 'Perché è andato a piedi?', o: ['L’autobus non è arrivato', 'Il treno era in sciopero', 'Il tempo era bello', 'Voleva fare esercizio'] }, { q: 'Perché non c’era nessuno?', o: ['Era giorno di riposo', 'C’era una festa', 'Era troppo presto', 'La sede era chiusa per lavori'], kind: 'implicit' }] },
    dict: ['べんきょうした のに おちました', 'あめが ふっても いきます', 'こどもでも わかります'],
    shad: [['にちようびなのに しごとです。', 'のに: tono di sorpresa.'], ['やすくても かいません。', 'Pausa dopo ても.'], ['かった ものの つかって いません。', 'ものの: due mora lunghe.']],
    speak: [['Di’ che hai studiato ma non è andato bene il test.', 'べんきょうした のに、てすとは あまり できませんでした。'], ['Di’ che andrai al parco anche se piove.', 'あめが ふっても、こうえんへ いきます。']] });

  G({ id: 'jpn-j6-gram-baai-kagiri', prereq: 'jpn-j6-gram-concessione', title: 'Condizioni e circostanze: ～[場合|ばあい], ～[限|かぎ]り, ～[以上|いじょう], ～[次第|しだい]',
    summary: 'Casi particolari, limiti, ragioni definitive e «non appena» in frasi formali.',
    obj: ['Usare [場合|ばあい]は per casi particolari', 'Capire ない[限|かぎ]り, [以上|いじょう], [次第|しだい]', 'Distinguere とおり e [次第|しだい] nelle istruzioni'],
    pages: [
      { h: 'Obiettivo', b: 'Nei regolamenti, nelle istruzioni e al lavoro si incontrano espressioni che introducono **casi**, **limiti**, **ragioni** e **tempi**. Sono più formali di たら e と, ma molto comuni.' },
      { h: 'Regola con schema', b: '**forma semplice + [場合|ばあい](は)** = «nel caso in cui»; con な-agg e N: **な / の + [場合|ばあい]**\n**forma semplice + [限|かぎ]り** / **ない[限|かぎ]り** = «finché / a meno che non»\n**forma semplice (passato) + [以上|いじょう](は)** = «dato che, visto che…»\n**V-ます ([語幹|ごかん]) + [次第|しだい]** = «non appena»; **N + [次第|しだい]で** = «dipende da N»\n**V / N の + とおり(に)** = «come, secondo»' },
      { h: '[場合|ばあい]は: nel caso che', b: '- {{ja|[雨|あめ]の [場合|ばあい]は、[中止|ちゅうし]します。}}\n- {{ja|[分|わ]からない [場合|ばあい]は、[聞|き]いて ください。}}\n- {{ja|[火事|かじ]の [場合|ばあい]は、エレベーターを [使|つか]わないで ください。}}\n\n**[場合|ばあい]** presenta un caso eccezionale o una situazione da prevedere. **とき** è più generico (un momento): {{ja|[時間|じかん]が ある とき}}.' },
      { h: '[限|かぎ]り e [以上|いじょう]', b: '- {{ja|[勉強|べんきょう]しない [限|かぎ]り、[合格|ごうかく]できません。}} — Finché non studi, non puoi passare.\n- {{ja|できる [限|かぎ]り、[手伝|てつだ]います。}} — Ti aiuterò per quanto posso.\n- {{ja|[私|わたし]の [知|し]る [限|かぎ]り、[彼|かれ]は [正直|しょうじき]な [人|ひと]です。}}\n- {{ja|[約束|やくそく]した [以上|いじょう]、[守|まも]らなければ なりません。}} — Dato che ho promesso, devo mantenere.\n- {{ja|[引|ひ]き[受|う]けた [以上|いじょう]は、[最後|さいご]まで やります。}}' },
      { h: '[次第|しだい] e とおり', b: '- {{ja|[分|わ]かり[次第|しだい]、[連絡|れんらく]します。}} — Ti contatto appena lo so.\n- {{ja|[着|つ]き[次第|しだい]、[電話|でんわ]して ください。}}\n- {{ja|[結果|けっか]は [天気|てんき][次第|しだい]です。}} — Dipende dal tempo.\n- {{ja|[説明書|せつめいしょ]の とおりに [組|く]み[立|た]てて ください。}}\n- {{ja|[言|い]われた とおりに しました。}}\n\n**[次第|しだい]** significa «subito dopo»; non si usa per eventi già passati.' },
      { h: 'Differenze da strutture simili', b: '- **[場合|ばあい]** ≠ **たら**: たら = «quando/se» generico; [場合|ばあい] = caso previsto in istruzioni e regole.\n- **ない[限|かぎ]り** ≠ **なければ**: [限|かぎ]り è più forte, «finché/ a meno che».\n- **[以上|いじょう]** (ragione definitiva) ≠ **ので** (causa neutra): [以上|いじょう] implica responsabilità.\n- **[次第|しだい]** ≠ **たら**: [次第|しだい] enfatizza «appena», con intenzione di agire subito; il verbo finale è volitivo.' },
      { h: 'Errori tipici per italiani', b: '- Usare **[次第|しだい]** con il passato: «[着|つ]いた[次第|しだい]» è sbagliato → **[着|つ]き[次第|しだい]**.\n- Usare **[以上|いじょう]** con situazioni non confermate: deve essere un fatto accettato.\n- Dimenticare **の** o **な** davanti a [場合|ばあい]: {{ja|[雨|あめ]の [場合|ばあい]}}, {{ja|[必要|ひつよう]な [場合|ばあい]}}.\n- Usare [限|かぎ]り senza negazione dove serve: {{ja|[変|か]わらない [限|かぎ]り}}.\n- Dire «[天気|てんき][次第|しだい]で» con particelle sbagliate: **[天気|てんき][次第|しだい]です / [天気|てんき][次第|しだい]で**.' },
      { h: 'Riepilogo', b: '- **[場合|ばあい](は)**: nel caso che.\n- **ない[限|かぎ]り**: a meno che / finché non.\n- **[以上|いじょう](は)**: dato che.\n- **V-ます [次第|しだい]**: appena; **N [次第|しだい]**: dipende da.\n- **とおり**: secondo, come.' }
    ],
    ex: [
      mc('«In caso di pioggia, l’evento è annullato»:', ['あめの ばあいは ちゅうしします。', 'あめの ばかりは ちゅうしします。', 'あめの かぎり ちゅうしします。', 'あめの しだい ちゅうし。']),
      mc('«Ti contatto appena lo so»:', ['わかりしだい、れんらくします。', 'わかったしだい、れんらくします。', 'わかる ばあい、れんらく。', 'わかる かぎり、れんらく。']),
      mc('«Finché non studi, non puoi passare»:', ['べんきょうしない かぎり、ごうかくできません。', 'べんきょうしなかった いじょう、ごうかくできません。', 'べんきょうしない ばあい に。', 'べんきょうした しだい。']),
      fillJ('Completa: やくそくした ___ まもらなければ なりません。(dato che)', ['いじょう', '以上'], 'した [以上|いじょう].'),
      fillJ('Completa: せつめいしょの ___ に くみたてて ください。(come da istruzioni)', ['とおり'], 'N の とおり.'),
      fillJ('Completa: けっかは てんき___ です。(dipende)', ['しだい', '次第'], 'N [次第|しだい].'),
      order('Metti in ordine: «Ti aiuterò per quanto posso»', ['できる', 'かぎり', 'てつだいます'], 'V かぎり.'),
      order('Metti in ordine: «Se non capisci, chiedi»', ['わからない', 'ばあいは', 'きいて', 'ください'], 'V ない [場合|ばあい]は.'),
      lis('つき しだい、でんわして ください。', 'Che cosa significa?', ['Chiama appena arrivi', 'Chiama prima di arrivare', 'Non chiamare', 'Chiama se non arrivi']),
      mc('Quale frase è sbagliata?', ['ついた しだい、でんわします。', 'つき しだい、でんわします。', 'てんき しだいで きめます。', 'れんらくを もらい しだい、いきます。']),
      mc('«[以上|いじょう]» introduce…', ['una ragione accettata e quindi un obbligo', 'una ipotesi remota', 'un tempo preciso', 'una quantità'])
    ],
    test: [
      mc('«Nel caso in cui ci sia un incendio, usare le scale»:', ['かじの ばあいは かいだんを つかって ください。', 'かじの かぎりは かいだんを。', 'かじの しだいは かいだん。', 'かじの いじょう かいだん。']),
      mc('«Ho accettato, quindi lo faccio fino alla fine»:', ['ひきうけた いじょうは、さいごまで やります。', 'ひきうけた ばあいは、さいごまで。', 'ひきうける しだい、さいごまで。', 'ひきうけた かぎり、のみ。']),
      mc('«Fai come ti è stato detto»:', ['いわれた とおりに して ください。', 'いわれた しだいに して。', 'いわれる ばあいに。', 'いわれた いじょうに。']),
      mc('«Per quanto ne so, è onesto»:', ['わたしの しる かぎり、しょうじきです。', 'わたしの しる しだい、しょうじき。', 'わたしが しった いじょう。', 'わたしの しる ばあい。']),
      mc('«Dipende dall’impegno»:', ['どりょく しだいです。', 'どりょく ばあいです。', 'どりょく とおりです。', 'どりょく いじょうです。']),
      fillJ('Completa: かわらない ___ りょうきんは おなじです。(finché non cambia)', ['かぎり', '限り'], 'ない [限|かぎ]り.'),
      lis('ひつような ばあいは、ここに でんわして ください。', 'Che cosa viene detto?', ['Chiamare qui in caso di necessità', 'Non chiamare mai', 'Aspettare qui', 'Il telefono non funziona'])
    ],
    cards: [card('c1', 'nel caso in cui', '～[場合|ばあい]', '', 'ばあい'), card('c2', 'finché / a meno che', '～ない[限|かぎ]り', '', 'かぎり'), card('c3', 'dato che', '～[以上|いじょう]', '', 'いじょう'), card('c4', 'non appena', 'V-ます＋[次第|しだい]', '', 'しだい'), card('c5', 'dipende da N', 'N[次第|しだい]', '', 'しだい'), card('c6', 'secondo / come', '～とおり', '', 'とおり'), card('c7', 'promessa', '[約束|やくそく]', '', 'やくそく'), card('c8', 'istruzioni', '[説明書|せつめいしょ]', '', 'せつめいしょ')],
    lis: { title: 'Avviso in ufficio', text: 'おしらせです。あめの ばあいは、らいしゅうの かいぎを ちゅうしします。けっかは てんきしだいです。ひつような ばあいは、ここに でんわして ください。やくそくした いじょう、できる かぎり ごいっしょに がんばります。わかりしだい、れんらくします。',
      qs: [{ q: 'Che cosa succede in caso di pioggia?', o: ['La riunione è annullata', 'La riunione è anticipata', 'La riunione si tiene fuori', 'La riunione dura di più'] }, { q: 'Quando verranno date notizie?', o: ['Appena si sa il risultato', 'Tra una settimana', 'Mai', 'Il mese prossimo'] }, { q: 'Perché promette di impegnarsi?', o: ['Perché ha preso un impegno', 'Perché è obbligato dalla legge', 'Perché è pagato di più', 'Perché ha paura'], kind: 'implicit' }] },
    dict: ['あめの ばあいは ちゅうしします', 'わかりしだい れんらくします', 'やくそくした いじょう まもります'],
    shad: [['あめの ばあいは ちゅうしです。', 'ばあいは: ba-a-i-wa.'], ['わかりしだい れんらくします。', 'しだい: shi-da-i.'], ['できる かぎり てつだいます。', 'かぎり: ka-gi-ri.']],
    speak: [['Spiega che in caso di pioggia l’evento è annullato.', 'あめの ばあいは、ちゅうしに なります。'], ['Prometti di contattare appena lo saprai.', 'わかり しだい、れんらくします。']] });

  G({ id: 'jpn-j6-gram-ukemi-shieki-uso', prereq: 'jpn-j6-gram-baai-kagiri', title: 'Passivo e causativo in uso: ～てもらう, ～させてもらう, ～と[言|い]われている',
    summary: 'Passivo di disagio e descrittivo, causativo-passivo e richieste di permesso con させて.',
    obj: ['Riconoscere il passivo di disagio e quello descrittivo', 'Usare ～させてください / ～させていただく per chiedere permesso', 'Distinguere ～てもらう, ～させる e ～させられる'],
    pages: [
      { h: 'Obiettivo', b: 'Passivo e causativo li hai già visti nelle forme. Qui vediamo **come si usano davvero**: lamentele (passivo di disagio), notizie generali (passivo descrittivo), richieste di permesso (causativo) e obbligo subito (causativo-passivo).' },
      { h: 'Regola con schema', b: '**Passivo**: G1 -u → -areru ([書|か]く → [書|か]かれる); G2 -ru → -rareru ([食|た]べる → [食|た]べられる); する → される; [来|く]る → [来|こ]られる\n**Causativo**: G1 -u → -aseru; G2 → -saseru; する → させる; [来|く]る → [来|こ]させる\n**Causativo-passivo**: G1 -aseru + rareru = **-asareru** ([書|か]かされる) / G2 **-saserareru**; する → **させられる**\n**Richiesta di permesso**: **V-させて ください / V-させて いただけませんか**' },
      { h: 'Passivo di disagio e descrittivo', b: '- {{ja|[雨|あめ]に [降|ふ]られて、[服|ふく]が ぬれました。}} — Mi ha colto la pioggia e mi sono bagnato (con disagio).\n- {{ja|[電車|でんしゃ]で [足|あし]を ふまれました。}} — Mi hanno pestato il piede in treno.\n- {{ja|[子供|こども]に [泣|な]かれて、[困|こま]りました。}}\n- {{ja|この [橋|はし]は [十年前|じゅうねんまえ]に [作|つく]られました。}} — passivo descrittivo\n- {{ja|[日本|にほん]は [安全|あんぜん]だと [言|い]われて います。}} — Si dice che il Giappone sia sicuro.' },
      { h: 'Causativo: far fare, lasciar fare', b: '- {{ja|[先生|せんせい]は [学生|がくせい]に [作文|さくぶん]を [書|か]かせました。}} — Il professore ha fatto scrivere un tema agli studenti.\n- {{ja|[母|はは]は [子供|こども]に [野菜|やさい]を [食|た]べさせます。}}\n- Permesso: {{ja|ちょっと [休|やす]ませて ください。}}\n- Cortese: {{ja|[明日|あした]、[休|やす]ませて いただけませんか。}}\n\nIl **soggetto** del causativo è chi fa fare; chi esegue prende **に** (o **を** con verbi intransitivi).' },
      { h: 'Causativo-passivo: mi hanno fatto fare', b: '- {{ja|[毎日|まいにち]、[母|はは]に [勉強|べんきょう]させられました。}} — Mia madre mi faceva studiare ogni giorno (controvoglia).\n- {{ja|[飲|の]み[会|かい]で [歌|うた]を [歌|うた]わされました。}} — Alla serata mi hanno costretto a cantare.\n- Forma corta per G1: **-aseru + rareru → -asareru**: {{ja|[行|い]かされる}} (ma i verbi in -す: {{ja|[話|はな]させられる}}).\n\nSignifica sempre **costrizione**, spesso con seccatura.' },
      { h: 'Differenze da strutture simili', b: '- **～てもらう** (ricevere un’azione favorevole): {{ja|[先生|せんせい]に [教|おし]えて もらいました。}}\n- **～させてもらう** (ricevere il permesso di fare): {{ja|[今日|きょう]は [早|はや]く [帰|かえ]らせて もらいます。}}\n- **～させられる** (essere costretto): {{ja|[早|はや]く [帰|かえ]らされた。}}\n- **～される** (subire): {{ja|[叱|しか]られた。}}\n\nIl passivo di disagio non esiste in italiano: «mi è piovuto» è reso con **[雨|あめ]に[降|ふ]られた**.' },
      { h: 'Errori tipici per italiani', b: '- Usare il causativo con un superiore: «[先生|せんせい]に [書|か]かせます» senza spiegazione suona prepotente.\n- Dimenticare **に** per la persona che subisce: {{ja|[子供|こども]に [泣|な]かれた}}.\n- Confondere **させて ください** (permetti a me) con **して ください** (fallo tu).\n- Usare il passivo di disagio con cose senza danno: {{ja|[友達|ともだち]に [助|たす]けられた}} è passivo normale, non disagio.\n- Pronunciare male **-aseru**: G1 = **[書|か]かせる**, non «[書|か]きせる».' },
      { h: 'Riepilogo', b: '- Passivo: -areru / -rareru; disagio e descrittivo.\n- Causativo: -aseru / -saseru; permesso e obbligo.\n- Causativo-passivo: -asareru / させられる = costretto.\n- **させて ください / いただけませんか**: chiedere permesso.\n- ～てもらう ≠ ～させてもらう.' }
    ],
    ex: [
      mc('«Mi ha colto la pioggia» (disagio):', ['あめに ふられました。', 'あめが ふらせました。', 'あめを ふりました。', 'あめが ふらされました。']),
      mc('«Mi hanno fatto cantare alla serata» (costretto):', ['のみかいで うたを うたわされました。', 'のみかいで うたを うたわせました。', 'のみかいで うたを うたわれました。', 'のみかいで うたを うたいました。']),
      mc('«Mi lasci riposare un po’?»', ['ちょっと やすませて ください。', 'ちょっと やすんで ください。', 'ちょっと やすまされて ください。', 'ちょっと やすまれて ください。']),
      fillJ('Completa: ははに やさいを たべ___。(sono stato costretto)', ['させられました', 'させられた'], 'Causativo-passivo.'),
      fillJ('Completa: この はしは じゅうねんまえに つくら___。', ['れました', 'れた'], 'Passivo descrittivo.'),
      fillJ('Completa: あした やすま___ いただけませんか。', ['せて'], 'V-させて いただく.'),
      order('Metti in ordine: «Il professore ha fatto scrivere un tema»', ['せんせいは', 'がくせいに', 'さくぶんを', 'かかせました'], 'Causativo.'),
      order('Metti in ordine: «Mi hanno pestato il piede»', ['でんしゃで', 'あしを', 'ふまれました'], 'Passivo di disagio.'),
      lis('まいにち ははに べんきょうさせられました。', 'Che cosa significa?', ['La madre lo costringeva a studiare ogni giorno', 'Lui studiava ogni giorno volentieri', 'La madre studiava con lui', 'Non ha mai studiato']),
      mc('«Il Giappone è considerato sicuro»:', ['にほんは あんぜんだと いわれて います。', 'にほんは あんぜんだと いって います。', 'にほんは あんぜんに いわせて います。', 'にほんは あんぜんさ いいます。']),
      mc('La differenza tra «かいて もらう» e «かかせる» è…', ['ricevere un favore / far scrivere a qualcuno', 'sono identici', 'passivo / negativo', 'passato / presente'])
    ],
    test: [
      mc('Causativo di [食|た]べる:', ['たべさせる', 'たべられる', 'たべせる', 'たべらせる']),
      mc('Passivo di [書|か]く:', ['かかれる', 'かける', 'かかせる', 'かきられる']),
      mc('Causativo-passivo di [行|い]く:', ['いかされる', 'いかせる', 'いかれる', 'いけされる']),
      mc('«Oggi posso uscire presto?» (cortese):', ['きょうは はやく かえらせて いただけませんか。', 'きょうは はやく かえられて いただけませんか。', 'きょうは はやく かえって いただけますか を。', 'きょうは はやく かえらされて。']),
      mc('«Ho avuto il piacere che il professore mi spiegasse»:', ['せんせいに おしえて もらいました。', 'せんせいに おしえさせられました。', 'せんせいを おしえました。', 'せんせいが おしえられました。']),
      fillJ('Completa: こどもに なか___ こまりました。(mi ha dato fastidio)', ['れて'], 'Passivo di disagio: 泣かれて.'),
      lis('のみかいで うたを うたわされました。', 'Che tono ha la persona?', ['Si lamenta: non voleva cantare', 'È contenta di aver cantato', 'Ha insegnato la canzone', 'Non ha cantato'])
    ],
    cards: [card('c1', 'passivo: essere V-ato', 'V-（ら）れる', '', 'られる'), card('c2', 'causativo: far fare', 'V-（さ）せる', '', 'させる'), card('c3', 'essere costretto a fare', 'V-（さ）せられる', '', 'させられる'), card('c4', 'permetti che io faccia', 'V-させて ください', '', 'させてください'), card('c5', 'si dice che', '～と[言|い]われている', '', 'といわれている'), card('c6', 'pestare', '[踏|ふ]む', '', 'ふむ'), card('c7', 'costruire', '[作|つく]る', '', 'つくる'), card('c8', 'tema, componimento', '[作文|さくぶん]', '', 'さくぶん')],
    lis: { title: 'Alla serata', text: 'きのうの のみかいは たいへんでした。かいしゃの ぶちょうに うたを うたわされました。あめにも ふられて、ふくが ぬれました。でも、ともだちに たすけて もらいました。あしたは かいしゃを やすませて いただきます。',
      qs: [{ q: 'Che cosa è stato costretto a fare?', o: ['Cantare una canzone', 'Pagare il conto', 'Fare un discorso', 'Ballare'] }, { q: 'Che cosa è successo al tempo?', o: ['Ha piovuto e i vestiti si sono bagnati', 'Ha nevicato', 'C’era il sole', 'C’era vento'] }, { q: 'Che cosa farà domani?', o: ['Chiederà un giorno di riposo', 'Andrà a lavorare presto', 'Farà un’altra serata', 'Scriverà un rapporto'], kind: 'implicit' }] },
    dict: ['あめに ふられて ふくが ぬれました', 'うたを うたわされました', 'あした やすませて ください'],
    shad: [['あめに ふられました。', 'ふられ: f leggero.'], ['ちょっと やすませて ください。', 'Tono di richiesta cortese.'], ['べんきょうさせられました。', 'Parola lunga: ritmo costante.']],
    speak: [['Chiedi al capo di poter uscire presto oggi.', 'きょうは はやく かえらせて いただけませんか。'], ['Lamentati: ti hanno costretto a cantare.', 'のみかいで うたを うたわされました。']] });

  G({ id: 'jpn-j6-gram-toiu', prereq: 'jpn-j6-gram-ukemi-shieki-uso', title: 'La struttura という: ～という, ～というのは, ～ということ',
    summary: 'Nominare, definire e riportare con と[言|い]う e le sue varianti.',
    obj: ['Presentare nomi con N という N', 'Definire parole con というのは / という[意味|いみ]', 'Usare といえば, というより, と[言|い]っても'],
    pages: [
      { h: 'Obiettivo', b: '**という** (letteralmente «che si dice») è una delle strutture più comuni del giapponese: serve a **nominare** (la persona di nome X), **definire** (X significa Y) e **commentare** (più che X, Y). Impararla vuol dire capire molte frasi del N3.' },
      { h: 'Regola con schema', b: '**N という N** = «un N chiamato…, di nome…»\n**forma semplice + という + N / こと** = «il fatto che…»\n**A というのは B のことです / という[意味|いみ]です** = definizione\n**A というより B** = «più che A, B»\n**N といえば** = «a proposito di N, parlando di N»\n**A と[言|い]っても B** = «dire A, però B»' },
      { h: 'N という N: nominare', b: '- {{ja|[田中|たなか]さんと いう [人|ひと]から [電話|でんわ]が ありました。}} — È telefonata una persona di nome Tanaka.\n- {{ja|「さくら」と いう [名前|なまえ]の [猫|ねこ]を [飼|か]って います。}}\n- {{ja|[京都|きょうと]と いう [町|まち]に [行|い]った ことが あります。}}\n\nPer chi ascolta, il nome è «nuovo»: という segnala che stai introducendo qualcosa che l’altro forse non conosce.' },
      { h: 'という[意味|いみ]・というのは', b: '- {{ja|「[禁煙|きんえん]」と いうのは、タバコを [吸|す]わないと いう [意味|いみ]です。}}\n- {{ja|「ありがとう」は 「Grazie」と いう [意味|いみ]です。}}\n- {{ja|[友達|ともだち]が [多|おお]いと いう [事実|じじつ]}}\n- {{ja|[日本|にほん]へ [行|い]くと いう ことは、[決|き]まって います。}}\n\nIn conversazione si accorcia: **っていう / って**. {{ja|[山田|やまだ]って いう [人|ひと]}}' },
      { h: 'というより・といえば・と[言|い]っても', b: '- {{ja|[彼|かれ]は [先生|せんせい]と いうより [友達|ともだち]です。}} — Più che un insegnante, è un amico.\n- {{ja|[日本|にほん]と いえば、[富士山|ふじさん]ですね。}} — Se parli del Giappone, il Fuji è la prima cosa.\n- {{ja|[日本語|にほんご]が [話|はな]せると [言|い]っても、[少|すこ]しだけです。}} — Dire che parlo giapponese è esagerato, solo un po’.\n- {{ja|[田中|たなか]さんは [来|こ]られないと いう ことです。}} — Pare che Tanaka non possa venire.' },
      { h: 'Differenze da strutture simili', b: '- **という** vs **と[言|い]う** (verbo): と[言|い]う = dire; という dopo il nome = «chiamato».\n- **ということ** vs **こと**: ということ = contenuto di una notizia; こと = nominalizzazione generale.\n- **という** vs **そうだ** (sentito dire): {{ja|[雨|あめ]が [降|ふ]ると いう ことです}} è più formale.\n- **というか** (conversazione): «o meglio» {{ja|[彼|かれ]は [優|やさ]しい、と いうか [甘|あま]い。}}' },
      { h: 'Errori tipici per italiani', b: '- Dimenticare **という** tra il nome proprio e la cosa: «[田中|たなか]さん [人|ひと]» non funziona.\n- Usare **という** con aggettivi senza nome: serve un nome dopo.\n- Dopo という usare la forma cortese: «[来|き]ますという» → **[来|く]ると いう**.\n- Confondere **というより** con **より**: というより è una riformulazione.' },
      { h: 'Riepilogo', b: '- N という N: nominare.\n- というのは / という[意味|いみ]: definire.\n- というより: più che.\n- といえば: a proposito di.\n- と[言|い]っても: anche se si dice.\n- Colloquiale: って / っていう.' }
    ],
    ex: [
      mc('«È telefonata una persona di nome Tanaka»:', ['たなかと いう ひとから でんわが ありました。', 'たなかと いうのは ひとから でんわ。', 'たなかを ひとから。', 'たなか という ない。']),
      mc('«Più che un insegnante, è un amico»:', ['せんせいと いうより ともだちです。', 'せんせいと いえば ともだちです。', 'せんせいを いうより ともだちです。', 'せんせいという ともだち。']),
      mc('«A proposito di Giappone, il Fuji!»:', ['にほんと いえば、ふじさんですね。', 'にほんと いうより、ふじさん。', 'にほんと いっても、ふじさんだ。', 'にほんの いう ふじさん。']),
      fillJ('Completa: 「きんえん」と いう___ たばこを すわない という いみです。', ['のは'], 'というのは = definizione.'),
      fillJ('Completa: やまだ___ いう ひとに あいました。(colloquiale)', ['って'], 'って = という colloquiale.'),
      fillJ('Completa: にほんごが はなせる と いっ___ すこしだけです。', ['ても'], 'と[言|い]っても.'),
      order('Metti in ordine: «Ho un gatto di nome Sakura»', ['さくらと', 'いう', 'なまえの', 'ねこを', 'かって います'], 'Nome という N.'),
      order('Metti in ordine: «Tanaka ha detto che non può venire»', ['たなかさんは', 'こられないと', 'いう', 'ことです'], 'Hearsay formale.'),
      lis('きょうとと いう まちに いった ことが あります。', 'Che cosa significa?', ['È stato in una città chiamata Kyoto', 'Vuole andare a Kyoto', 'Kyoto è lontana', 'Vive a Kyoto']),
      mc('Cosa significa «ありがとうと いう いみ»?', ['il significato di «ありがとう»', 'una persona di nome ありがとう', 'dire «grazie» tre volte', 'una parola difficile']),
      mc('Che cosa esprime «というか»?', ['una riformulazione («o meglio»)', 'un divieto', 'un desiderio', 'una domanda'])
    ],
    test: [
      mc('«In Giappone esiste una cosa chiamata onsen»:', ['にほんには おんせんと いうものが あります。', 'にほんには おんせんを いう ものが。', 'にほんには おんせんを いうと。', 'にほんは おんせんが いわれます。']),
      mc('«Dire che sono bravo è esagerato»:', ['じょうずと いっても、すこしだけです。', 'じょうずと いうより、すこし。', 'じょうずを いう のに。', 'じょうずと いえば。']),
      mc('«Si dice che la riunione sia rimandata»:', ['かいぎは えんきされると いう ことです。', 'かいぎは えんきすると いるです。', 'かいぎが えんきして ことです。', 'かいぎと えんきの いう。']),
      mc('«「[禁煙|きんえん]」vuol dire non fumare»:', ['「きんえん」は たばこを すわない という いみです。', '「きんえん」は たばこを すわない でしょう。', '「きんえん」が たばこ という。', '「きんえん」を いみです。']),
      mc('«Io, più che arrabbiato, sono triste»:', ['おこって いると いうより かなしいです。', 'おこって いる いえば かなしいです。', 'おこって いると いわれ かなしい。', 'おこる という かなしくない。']),
      fillJ('Completa: ふじさん___ いう やまを しって いますか。', ['と'], 'N という N.'),
      lis('にほんと いえば、ふじさんと すしですね。', 'Che cosa dice la persona?', ['Parlando del Giappone, pensa al Fuji e al sushi', 'Non conosce il Giappone', 'Vuole mangiare sushi', 'Il Fuji è lontano'])
    ],
    cards: [card('c1', 'chiamato, di nome', 'N＋という＋N', '', 'という'), card('c2', 'significa che / il fatto che', '～という[意味|いみ] / ～ということ', '', 'ということ'), card('c3', 'quanto a N… (definizione)', '～というのは', '', 'というのは'), card('c4', 'più che A, B', 'AというよりB', '', 'というより'), card('c5', 'a proposito di N', 'N[と言|い]えば', '', 'といえば'), card('c6', 'dire A, però B', 'A[と言|い]っても', '', 'といっても'), card('c7', 'divieto di fumare', '[禁煙|きんえん]', '', 'きんえん'), card('c8', 'fatto, realtà', '[事実|じじつ]', '', 'じじつ')],
    lis: { title: 'Una nuova collega', text: 'わたしの かいしゃに、やまださんと いう ひとが はいりました。やまださんは、せんぱいと いうより ともだちの ような ひとです。「にほんと いえば、ふじさんですね」と いうと、のぼった ことが あると いう ことでした。わたしは のぼったと いっても、はんぶんだけです。',
      qs: [{ q: 'Chi è entrato in azienda?', o: ['Una persona di nome Yamada', 'Il signor Tanaka', 'Un nuovo capo', 'Un amico del narratore'] }, { q: 'Com’è Yamada?', o: ['Più un’amica che una collega anziana', 'Un capo severo', 'Una persona timida', 'Un cliente'] }, { q: 'Quanto ha scalato il narratore?', o: ['Solo metà del monte', 'Tutta la montagna', 'Nulla', 'Due volte'], kind: 'implicit' }] },
    dict: ['やまださんと いう ひとが きました', 'せんせいと いうより ともだちです', 'にほんと いえば ふじさんです'],
    shad: [['たなかさんと いう ひと。', 'という: più lento e chiaro.'], ['せんせいと いうより ともだちです。', 'より: pausa breve.'], ['にほんと いえば ふじさんですね。', 'ね: intonazione ascendente.']],
    speak: [['Presenta un amico di nome Yamada.', 'やまださんと いう ともだちが います。'], ['Di’ che non parli bene giapponese: solo un poco.', 'にほんごが はなせると いっても、すこしだけです。']] });

  G({ id: 'jpn-j6-gram-irai-kyoka', prereq: 'jpn-j6-gram-toiu', title: 'Richieste e permessi garbati: ～ていただけませんか, ～てもよろしいですか',
    summary: 'Chiedere, rifiutare e ottenere permessi al lavoro e con sconosciuti.',
    obj: ['Costruire richieste cortesi a più livelli', 'Chiedere permesso con ～てもよろしいでしょうか', 'Rifiutare con garbo e rispondere ai superiori'],
    pages: [
      { h: 'Obiettivo', b: 'In giapponese una richiesta non è mai solo «Fammi X»: c’è una **scala di cortesia** che va da amici a clienti. Impari quattro livelli di richiesta, il **cuscinetto** (クッション[言葉|ことば]) e come rifiutare senza dire no.' },
      { h: 'Regola con schema', b: 'Scala di richieste (crescente cortesia):\n1. **～て (くれる？)** amici\n2. **～てください**\n3. **～てくださいませんか / ～てもらえませんか**\n4. **～ていただけませんか / ～ていただけないでしょうか**\n\nPermesso: **～てもいいですか** → **～てもよろしいですか** → **～させていただけませんか**\n\nCuscinetto: **すみませんが / [恐|おそ]れ[入|い]りますが / お[忙|いそが]しいところ[申|もう]し[訳|わけ]ありませんが**' },
      { h: 'Richieste a più livelli', b: '- {{ja|ちょっと [手伝|てつだ]って くれる？}} (amico)\n- {{ja|この [資料|しりょう]を [見|み]て ください。}}\n- {{ja|すみませんが、[写真|しゃしん]を [撮|と]って もらえませんか。}}\n- {{ja|お[忙|いそが]しい ところ [申|もう]し[訳|わけ]ありませんが、[確認|かくにん]して いただけませんか。}}\n\nNegativa: **～ないでいただけませんか**: {{ja|ここでは [写真|しゃしん]を [撮|と]らないで いただけませんか。}}' },
      { h: 'Chiedere permesso', b: '- {{ja|ここに [座|すわ]っても いいですか。}}\n- {{ja|ここに [座|すわ]っても よろしいですか。}} (più formale)\n- {{ja|[窓|まど]を [開|あ]けても よろしいでしょうか。}}\n- {{ja|[先|さき]に [帰|かえ]らせて いただけませんか。}}\n\nIn risposta:\n- {{ja|はい、どうぞ。}} / {{ja|ええ、いいですよ。}}\n- {{ja|すみません、ちょっと…。}} (rifiuto indiretto)' },
      { h: 'Rifiutare con garbo', b: 'Il «no» diretto si evita:\n- {{ja|[申|もう]し[訳|わけ]ありませんが、ちょっと [難|むずか]しいです。}}\n- {{ja|[今日|きょう]は ちょっと…}} (lasciare in sospeso)\n- {{ja|[残念|ざんねん]ですが、[今回|こんかい]は [無理|むり]です。}}\n- {{ja|[考|かんが]えて おきます。}} (di solito significa no)\n\nAggiungi sempre una **scusa breve** e un **ringraziamento**: {{ja|せっかくですが…}}' },
      { h: 'Differenze da strutture simili', b: '- **～てください** è un ordine gentile, non una richiesta tra pari.\n- **～ていただけませんか** (negativa-interrogativa) è più cortese di **～ていただけますか**.\n- **お + radice + ください**: {{ja|ご[記入|きにゅう]ください。}} per annunci e moduli.\n- **～ていただく** (io ricevo) vs **～てくださる** (l’altro dà): {{ja|[先生|せんせい]が [教|おし]えて くださいました。}} / {{ja|[先生|せんせい]に [教|おし]えて いただきました。}}' },
      { h: 'Errori tipici per italiani', b: '- Dire «[手伝|てつだ]って ください» al capo: ha tono di ordine → **[手伝|てつだ]って いただけませんか**.\n- Rifiutare con «いいえ、できません»: troppo brusco.\n- Dimenticare il cuscinetto **すみませんが** davanti alle richieste.\n- Nelle e-mail formali preferisci **いただけますと[幸|さいわ]いです** a ください.\n- Usare **させて ください** quando vuoi che l’altro faccia: significa «lascia fare a me».' },
      { h: 'Riepilogo', b: '- Scala: てください → てもらえませんか → ていただけませんか.\n- Permesso: てもいいですか → てもよろしいでしょうか → させていただけませんか.\n- Cuscinetto: すみませんが, [恐|おそ]れ[入|い]りますが.\n- Rifiuto: ちょっと…, [申|もう]し[訳|わけ]ありませんが.' }
    ],
    ex: [
      mc('Richiesta cortese al capo:', ['これを かくにんして いただけませんか。', 'これを かくにんして ください。', 'これを かくにんしろ。', 'これを かくにんして くれる？']),
      mc('Quale è il più formale per chiedere permesso?', ['まどを あけても よろしいでしょうか。', 'まどを あけても いい？', 'まどを あけて いいですか。', 'まどを あけて ください。']),
      mc('Rifiuto indiretto:', ['きょうは ちょっと…', 'きょうは だめだ。', 'きょうは いやだ。', 'きょうは いいえ。']),
      fillJ('Completa: ここに すわっても ___ ですか。(formale)', ['よろしい'], 'よろしい = forma cortese di いい.'),
      fillJ('Completa: しゃしんを とって もら___ ませんか。', ['え'], 'もらえませんか.'),
      fillJ('Completa: ここでは しゃしんを とらない___ いただけませんか。', ['で'], 'ないで いただけませんか.'),
      order('Metti in ordine: «Scusi, mi può far vedere questo?»', ['すみませんが', 'これを', 'みせて', 'いただけませんか'], 'Cuscinetto + V-て いただけませんか.'),
      order('Metti in ordine: «Posso andare via prima?»', ['さきに', 'かえらせて', 'いただけませんか'], 'V-させて.'),
      lis('おいそがしい ところ もうしわけ ありませんが、かくにんして いただけませんか。', 'Che cosa viene chiesto?', ['Di controllare con garbo', 'Di aiutare a portare un pacco', 'Di aspettare fuori', 'Di spegnere il telefono']),
      mc('Che cosa significa «かんがえて おきます» in molte situazioni?', ['di solito un rifiuto gentile', 'ho già deciso di sì', 'sì, subito', 'risponderò ieri']),
      mc('Quale è un cuscinetto?', ['おそれいりますが', 'ですから', 'しかし', 'それでは'])
    ],
    test: [
      mc('«Posso usare il telefono?» (formale):', ['でんわを つかっても よろしいでしょうか。', 'でんわを つかってもいい？', 'でんわを つかえ。', 'でんわを つかう ですか。']),
      mc('«La prego di non fumare» (cortese):', ['タバコを すわないで いただけませんか。', 'タバコを すわなくて ください。', 'タバコを すうな。', 'タバコを すいます。']),
      mc('Quale risposta rifiuta con garbo?', ['もうしわけ ありませんが、ちょっと むずかしいです。', 'いやです。', 'だめ。', 'しりません。']),
      mc('«Il professore mi ha spiegato» (io ricevo):', ['せんせいに おしえて いただきました。', 'せんせいが おしえて いただきました。', 'せんせいを おしえて。', 'せんせいは おしえて ください。']),
      mc('«Compili qui» (annuncio):', ['ここに ごきにゅう ください。', 'ここに きにゅう しろ。', 'ここに かいた。', 'ここを かいて あげる。']),
      fillJ('Completa: おそれいります___、おなまえを おしえて ください。', ['が'], 'Cuscinetto: おそれいりますが.'),
      lis('すみません、ちょっと…。', 'Che cosa significa in genere?', ['Un rifiuto gentile', 'Una richiesta', 'Un ringraziamento', 'Un saluto'])
    ],
    cards: [card('c1', 'mi può fare il favore di…?', '～ていただけませんか', '', 'ていただけませんか'), card('c2', 'mi permette di…?', '～てもよろしいですか', '', 'てもよろしいですか'), card('c3', 'mi lasci fare…', '～させていただけませんか', '', 'させていただけませんか'), card('c4', 'mi scusi (cuscinetto)', '[恐|おそ]れ[入|い]りますが', '', 'おそれいりますが'), card('c5', 'mi dispiace molto', '[申|もう]し[訳|わけ]ありません', '', 'もうしわけありません'), card('c6', 'controllare', '[確認|かくにん]する', '', 'かくにんする'), card('c7', 'compilare', '[記入|きにゅう]する', '', 'きにゅうする'), card('c8', 'impossibile', '[無理|むり]', '', 'むり')],
    lis: { title: 'Al banco informazioni', text: 'すみませんが、ちょっと よろしいでしょうか。はい、どうぞ。おそれいりますが、この ようしに きにゅうして いただけませんか。かしこまりました。ありがとうございます。ここで しゃしんを とっても よろしいですか。もうしわけ ありませんが、それは ちょっと…。',
      qs: [{ q: 'Che cosa viene chiesto di fare?', o: ['Compilare il modulo', 'Pagare in contanti', 'Aspettare fuori', 'Mostrare un documento'] }, { q: 'Che cosa chiede poi la persona?', o: ['Di fare una foto', 'Di usare il telefono', 'Di sedersi', 'Di avere un caffè'] }, { q: 'Qual è la risposta?', o: ['Un rifiuto gentile', 'Un sì', 'Una domanda', 'Un ordine'], kind: 'implicit' }] },
    dict: ['かくにんして いただけませんか', 'ここに すわっても よろしいですか', 'もうしわけ ありませんが ちょっと'],
    shad: [['かくにんして いただけませんか。', 'Tono cortese e lento.'], ['すわっても よろしいですか。', 'Intonazione ascendente.'], ['きょうは ちょっと…。', 'Lascia la frase in sospeso.']],
    speak: [['Chiedi a un collega di controllare un documento (cortese).', 'すみませんが、この しりょうを かくにんして いただけませんか。'], ['Chiedi permesso di aprire la finestra.', 'まどを あけても よろしいでしょうか。']] });

  G({ id: 'jpn-j6-gram-noda-wake', prereq: 'jpn-j6-gram-irai-kyoka', title: 'Spiegare e concludere: ～のだ, ～わけだ, ～ものだ, ～ことだ',
    summary: 'Dare spiegazioni, trarre conclusioni, esprimere ricordi e dare consigli con nominalizzatori.',
    obj: ['Usare のだ/んです per spiegare e chiedere ragioni', 'Capire わけだ, わけではない, わけにはいかない', 'Distinguere ものだ e ことだ'],
    pages: [
      { h: 'Obiettivo', b: 'Nel parlato giapponese **spiegare** non significa solo dire «perché»: serve un «contesto» ben segnalato. Con **んです**, **わけだ**, **ものだ** e **ことだ** trasformi frasi in spiegazioni, conclusioni, ricordi e consigli. Sono chiavi per il livello N3.' },
      { h: 'Regola con schema', b: '**forma semplice + んです / のです** (na-agg: なんです, N: なんです)\n**forma semplice + わけだ / わけではない / わけにはいかない**\n**V-る / V-た + ものだ**\n**V-る / V-ない + ことだ**' },
      { h: 'んです: spiegare e chiedere', b: '- {{ja|どうしたんですか。}} — Che cosa è successo?\n- {{ja|[熱|ねつ]が あるんです。}} — Ho la febbre (ecco perché).\n- {{ja|[道|みち]を [聞|き]きたいんですが…}} — Vorrei chiedere la strada… (introduzione)\n- {{ja|どうして [遅|おく]れたんですか。}}\n\nDifferenza: **だから** dà la ragione, **んです** presenta una situazione che richiede una spiegazione.' },
      { h: 'わけだ', b: '- **わけだ** = «ecco perché / è naturale»: {{ja|[彼|かれ]は [十年|じゅうねん] [日本|にほん]に [住|す]んで いた。[日本語|にほんご]が [上手|じょうず]な わけだ。}}\n- **わけではない** = «non è che…»: {{ja|[嫌|きら]いな わけではありません。}}\n- **わけにはいかない** = «non posso, non è ammissibile»: {{ja|[約束|やくそく]した [以上|いじょう]、[行|い]かないわけには いかない。}}\n- **わけがない** = «non è possibile che»: {{ja|そんな わけが ありません。}}' },
      { h: 'ものだ・ことだ', b: '- **ものだ** (verità generale): {{ja|[子供|こども]は よく [遊|あそ]ぶものだ。}}\n- **ものだ** (ricordo): {{ja|[昔|むかし]は よく この [川|かわ]で [泳|およ]いだものだ。}}\n- **ものだから** (scusa): {{ja|[急|いそ]いで いた ものですから…}}\n- **ことだ** (consiglio): {{ja|[健康|けんこう]の ためには、[早|はや]く [寝|ね]る ことだ。}}\n- **ことは ない**: {{ja|[心配|しんぱい]する ことは ない。}} — Non c’è bisogno di preoccuparsi.' },
      { h: 'Differenze da strutture simili', b: '- **んです** vs **です**: です riferisce, んです spiega o coinvolge l’altro.\n- **わけだ** vs **からだ**: わけだ presenta una conclusione logica a partire da un fatto già noto.\n- **ものだ** (natura / ricordo) vs **ことだ** (consiglio): ものだ descrive, ことだ prescrive.\n- **わけではない** vs **ではない**: la prima nega solo una conclusione che l’altro potrebbe trarre.' },
      { h: 'Errori tipici per italiani', b: '- Usare **んです** in ogni frase: diventa pesante.\n- Dimenticare **な** davanti: {{ja|[元気|げんき]なんです}}, non «[元気|げんき]んです».\n- Confondere **わけだ** con **はずだ** (previsione).\n- Tradurre «non devi» con ことだ negativo: **しないことだ** è consiglio, non divieto.\n- Usare **ものだ** per un singolo evento: serve generale o abituale.' },
      { h: 'Riepilogo', b: '- **んです**: spiegare / invitare a spiegare.\n- **わけだ**: conclusione naturale.\n- **わけではない**: non è che…\n- **わけにはいかない**: non posso.\n- **ものだ**: verità o ricordo.\n- **ことだ**: consiglio.' }
    ],
    ex: [
      mc('«Ho la febbre» (spiegando):', ['ねつが あるんです。', 'ねつが あるわけです。', 'ねつが あるもの。', 'ねつが ある ことだ。']),
      mc('«Non è che mi dispiaccia» (ma…):', ['きらいな わけではありません。', 'きらいな ものでは ありません。', 'きらいな ことでは ない。', 'きらいな んでは ない。']),
      mc('«Visto che ho promesso, non posso non andare»:', ['やくそくした いじょう、いかない わけにはいかない。', 'やくそくした ばかり、いかない ものだ。', 'やくそくした のに、いかない ことだ。', 'やくそくすれば、いけないわけがない。']),
      fillJ('Completa: どうして おくれた___ か。', ['んです'], 'Chiede una spiegazione.'),
      fillJ('Completa: かれは にほんに すんで いた。じょうずな___ だ。', ['わけ'], 'わけだ = ecco perché.'),
      fillJ('Completa: けんこうの ためには、はやく ねる___ だ。(consiglio)', ['こと'], 'V ことだ = consiglio.'),
      order('Metti in ordine: «Da bambino nuotavo spesso in questo fiume»', ['むかしは', 'この', 'かわで', 'およいだ', 'ものだ'], 'ものだ = ricordo.'),
      order('Metti in ordine: «Non c’è bisogno di preoccuparsi»', ['しんぱい', 'する', 'ことは', 'ない'], 'ことはない.'),
      lis('どうしたんですか。ねつが あるんです。', 'Che cosa è successo?', ['Ha la febbre', 'Ha perso la strada', 'Ha fame', 'Ha dimenticato il portafoglio']),
      mc('«そんな わけが ありません» significa…', ['non è possibile', 'è proprio così', 'è un consiglio', 'è un ricordo']),
      mc('Qual è un consiglio?', ['はやく ねる ことだ。', 'はやく ねる ものだ。', 'はやく ねる わけだ。', 'はやく ねる んだ。'])
    ],
    test: [
      mc('«Ecco perché parla bene giapponese»:', ['にほんごが じょうずな わけだ。', 'にほんごが じょうずな ものだ。', 'にほんごが じょうずな ことだ。', 'にほんごが じょうずな ことに なる。']),
      mc('«Vorrei chiederle una cosa» (introduzione):', ['ちょっと おききしたいんですが…', 'ちょっと おききしたいわけだ。', 'ちょっと おききした ものだ。', 'ちょっと おききしたい ことだ。']),
      mc('«I bambini giocano naturalmente molto»:', ['こどもは よく あそぶものだ。', 'こどもは よく あそぶことだ。', 'こどもは よく あそぶわけだ。', 'こどもは よく あそぶんです は。']),
      mc('«Non c’è bisogno di dispiacersi»:', ['がっかりする ことは ない。', 'がっかりする ものは ない。', 'がっかりする わけは ない を。', 'がっかりする のでは ない。']),
      mc('«Scusi, avevo fretta, ecco…» (scusa):', ['いそいで いたものですから…', 'いそいで いたことですから…', 'いそいで いた わけで。', 'いそいで いる ものと。']),
      fillJ('Completa: そんな ___ が ありません。(impossibile)', ['わけ'], 'わけがない.'),
      lis('おなかが いたいんです。', 'Che cosa dice la persona?', ['Spiega che ha mal di pancia', 'Chiede la strada', 'Rifiuta un invito', 'Ringrazia'])
    ],
    cards: [card('c1', 'spiegazione (è che…)', '～んです', '', 'んです'), card('c2', 'ecco perché', '～わけだ', '', 'わけだ'), card('c3', 'non è che…', '～わけではない', '', 'わけではない'), card('c4', 'non posso non…', '～わけにはいかない', '', 'わけにはいかない'), card('c5', 'è naturale che / ricordo', '～ものだ', '', 'ものだ'), card('c6', 'è meglio… (consiglio)', '～ことだ', '', 'ことだ'), card('c7', 'preoccuparsi', '[心配|しんぱい]する', '', 'しんぱいする'), card('c8', 'salute', '[健康|けんこう]', '', 'けんこう')],
    lis: { title: 'Dal farmacista', text: 'どうしたんですか。あたまが いたいんです。ゆうべ おそくまで おきて いたものですから…。それで ねむそうな わけですね。けんこうの ためには、はやく ねる ことですよ。しんぱいする ことは ありません。くすりを のんで、ゆっくり やすんで ください。',
      qs: [{ q: 'Che cosa ha il paziente?', o: ['Mal di testa', 'Mal di denti', 'Febbre alta', 'Tosse'] }, { q: 'Perché?', o: ['Ha fatto tardi ieri sera', 'Ha mangiato troppo', 'Ha camminato molto', 'Ha lavorato al freddo'] }, { q: 'Che consiglio gli dà il farmacista?', o: ['Andare a dormire presto', 'Bere più caffè', 'Fare sport', 'Saltare il pasto'], kind: 'implicit' }] },
    dict: ['ねつが あるんです', 'じょうずな わけだ', 'はやく ねる ことです'],
    shad: [['どうしたんですか。', 'Intonazione ascendente alla fine.'], ['けんこうの ために はやく ねる ことです。', 'Pausa dopo ために.'], ['しんぱいする ことは ありません。', 'ことは: pausa.']],
    speak: [['Spiega a un collega perché sei in ritardo (hai perso il treno).', 'でんしゃに のりおくれたんです。'], ['Consiglia a un amico come stare in salute.', 'けんこうの ためには、はやく ねる ことです。']] });

  G({ id: 'jpn-j6-gram-hazu-beki', prereq: 'jpn-j6-gram-noda-wake', title: 'Certezza e dovere: ～はず, ～に[違|ちが]いない, ～べき',
    summary: 'Aspettative, convinzione forte e dovere morale: dalla probabilità al «si deve».',
    obj: ['Usare はずだ / はずがない per aspettative logiche', 'Distinguere かもしれない, でしょう, はず, に[違|ちが]いない', 'Esprimere il dovere con べきだ / べきではない'],
    pages: [
      { h: 'Obiettivo', b: 'Esprimere **quanto sei sicuro** e **che cosa si deve fare** richiede strutture diverse. Impari una scala di certezza (かもしれない → でしょう → はず → に[違|ちが]いない) e il dovere morale **べき**.' },
      { h: 'Regola con schema', b: '**forma semplice + はずだ** (na-agg: なはず, N: のはず)\n**forma semplice + はずがない** / **はずはない**\n**forma semplice + に[違|ちが]いない** (na-agg e N: senza だ)\n**V-る + べきだ / V-る + べきではない** (する → すべき / するべき)' },
      { h: 'はずだ: ragionevolmente', b: 'Aspettativa basata su dati, orari, logica.\n- {{ja|[新幹線|しんかんせん]は [十時|じゅうじ]に [着|つ]く はずです。}}\n- {{ja|[彼|かれ]は もう [家|いえ]に [着|つ]いて いる はずです。}}\n- {{ja|そんな はずが ありません。}} — Non è possibile.\n- {{ja|[会議|かいぎ]は [三時|さんじ]からの はずだったのに…}} — Doveva essere alle tre, e invece.\n\nNon si usa per le proprie intenzioni: per quelle, **つもり**.' },
      { h: 'に[違|ちが]いない', b: 'Convinzione forte, basata su indizi.\n- {{ja|[彼|かれ]は [疲|つか]れて いるに [違|ちが]いない。}}\n- {{ja|[電気|でんき]が ついて いる。[誰|だれ]かが いるに [違|ちが]いない。}}\n\nSolo per **inferenza**, non per fatti noti. Con un nome: {{ja|[彼|かれ]が [犯人|はんにん]に [違|ちが]いない。}} (senza だ)' },
      { h: 'べき: dovere morale', b: '- {{ja|[約束|やくそく]は [守|まも]る べきです。}}\n- {{ja|[人|ひと]の [悪口|わるぐち]を [言|い]う べきではありません。}}\n- {{ja|もっと [早|はや]く [連絡|れんらく]する べきだった。}} (rimpianto)\n- {{ja|[学生|がくせい]は [勉強|べんきょう]する べきだ。}}\n\n**べき** è un giudizio del parlante su ciò che è giusto, più forte di **ほうがいい**.' },
      { h: 'Differenze da strutture simili', b: 'Scala di certezza:\n1. **かもしれない** (forse): {{ja|[雨|あめ]が [降|ふ]るかもしれない。}}\n2. **でしょう** (probabile)\n3. **はず** (atteso): {{ja|[雨|あめ]が [降|ふ]る はずだ。}}\n4. **に[違|ちが]いない** (sicuro)\n\nDovere:\n- **なければならない**: obbligo esterno.\n- **べき**: giudizio morale.\n- **ほうがいい**: consiglio.' },
      { h: 'Errori tipici per italiani', b: '- Usare **はず** per sé stessi: «[私|わたし]は [行|い]く はずです» ma significa «è atteso che io vada».\n- Dimenticare **の** con nomi: {{ja|[休|やす]みの はずです}}, non «[休|やす]みはずです».\n- Usare **に[違|ちが]いない** per dati certi: «[今日|きょう]は[月曜日|げつようび]に[違|ちが]いない» è strano.\n- Confondere **べき** con **なければならない**: la seconda è obbligo, la prima è giusto o sbagliato.\n- Dimenticare **ではない** nel negativo: **べきではない**, non «べきじゃない» in testi formali.' },
      { h: 'Riepilogo', b: '- **はずだ**: atteso, logico.\n- **はずがない**: impossibile.\n- **に[違|ちが]いない**: certo, per indizi.\n- **べきだ**: è giusto fare.\n- **べきではない**: non si deve.' }
    ],
    ex: [
      mc('«Il Shinkansen dovrebbe arrivare alle dieci»:', ['しんかんせんは じゅうじに つく はずです。', 'しんかんせんは じゅうじに つく べきです。', 'しんかんせんは じゅうじに つく ものです を。', 'しんかんせんは じゅうじに つく ことです。']),
      mc('«Non è possibile»:', ['そんな はずが ありません。', 'そんな べきが ありません。', 'そんな に ちがい ありません を。', 'そんな ことです。']),
      mc('«Sicuramente è stanco» (indizi):', ['かれは つかれて いるに ちがいない。', 'かれは つかれて いる べきだ。', 'かれは つかれて いる はずない を。', 'かれは つかれて いるかも。']),
      fillJ('Completa: やくそくは まもる ___ です。(dovere)', ['べき'], 'べきです.'),
      fillJ('Completa: ひとの わるぐちを いう ___ ではありません。', ['べき'], 'べきではない.'),
      fillJ('Completa: かいぎは さんじからの ___ です。', ['はず'], 'N の はず.'),
      order('Metti in ordine: «Doveva già essere a casa»', ['かれは', 'もう', 'いえに', 'ついている', 'はずです'], 'はずです.'),
      order('Metti in ordine: «Avrei dovuto avvisarti prima»', ['もっと', 'はやく', 'れんらく', 'するべきだった'], 'べきだった = rimpianto.'),
      lis('でんきが ついて いる。だれかが いるに ちがいない。', 'Su che cosa si basa la deduzione?', ['Sulla luce accesa', 'Sulla voce', 'Sul telefono', 'Sull’orario']),
      mc('Quale è il più forte come certezza?', ['～に ちがいない', '～かもしれない', '～でしょう', '～ようだ']),
      mc('«べきだ» rispetto a «ほうがいい» è…', ['più forte, giudizio morale', 'più debole', 'uguale', 'solo passato'])
    ],
    test: [
      mc('«Non può essere vero»:', ['それは ほんとうの はずが ない。', 'それは ほんとうの べき ない。', 'それは ほんとうに ものだ。', 'それは ほんとうか。']),
      mc('«Non dovresti parlare male degli altri»:', ['ひとの わるぐちを いうべきではない。', 'ひとの わるぐちを いうに ちがいない。', 'ひとの わるぐちを いう はず ない。', 'ひとの わるぐちを いえば。']),
      mc('«Dovrebbe essere già arrivato, ma non vedo nessuno»:', ['もう ついて いる はずですが、だれも みえません。', 'もう ついた べきですが。', 'もう ついたに ちがいですが。', 'もう つく ことですが。']),
      mc('«Dev’essere lei, ne sono certo»:', ['かのじょに ちがいない。', 'かのじょの べきだ。', 'かのじょかも しれない です は。', 'かのじょの はずない。']),
      mc('Quale frase è sbagliata?', ['やすみ はずです。', 'やすみの はずです。', 'やすみに ちがいない。', 'やすみかも しれない。']),
      fillJ('Completa: あした あめが ふる ___ ですが…(è atteso)', ['はず'], 'はず = atteso.'),
      lis('もっと はやく れんらくするべきでした。', 'Che cosa esprime?', ['Rimpianto: avrebbe dovuto avvisare prima', 'Previsione: avviserà domani', 'Divieto', 'Una richiesta'])
    ],
    cards: [card('c1', 'dovrebbe (atteso)', '～はずだ', '', 'はずだ'), card('c2', 'non è possibile', '～はずがない', '', 'はずがない'), card('c3', 'sicuramente', '～に[違|ちが]いない', '', 'にちがいない'), card('c4', 'si deve', '～べきだ', '', 'べきだ'), card('c5', 'non si deve', '～べきではない', '', 'べきではない'), card('c6', 'promessa', '[約束|やくそく]', '', 'やくそく'), card('c7', 'parlare male', '[悪口|わるぐち]', '', 'わるぐち'), card('c8', 'colpevole', '[犯人|はんにん]', '', 'はんにん')],
    lis: { title: 'Una deduzione', text: 'あの へやの でんきが ついて います。だれかが いるに ちがいません。かいぎは さんじからのはずですが、まだ はじまって いません。やくそくは まもるべきです。もっと はやく れんらくするべきでした。かれは もう ついて いるはずなのに、だれも みえません。',
      qs: [{ q: 'Perché pensa che ci sia qualcuno?', o: ['La luce è accesa', 'Ha sentito una voce', 'La porta è aperta', 'Sente una musica'] }, { q: 'A che ora doveva iniziare la riunione?', o: ['Alle tre', 'Alle due', 'Alle quattro', 'Alle cinque'] }, { q: 'Che cosa pensa del comportamento di chi arriva tardi?', o: ['Dovrebbe avvisare prima', 'È normale', 'Non importa', 'È divertente'], kind: 'implicit' }] },
    dict: ['しんかんせんは じゅうじに つくはずです', 'やくそくは まもるべきです', 'かれは つかれて いるに ちがいない'],
    shad: [['そんな はずが ありません。', 'ありません: ritmo lento.'], ['やくそくは まもるべきです。', 'べきです: tono fermo.'], ['だれかが いるに ちがいない。', 'ちがいない: ti-ga-i-na-i.']],
    speak: [['Di’ che il treno dovrebbe arrivare alle dieci.', 'でんしゃは じゅうじに つくはずです。'], ['Di’ che si deve mantenere la promessa.', 'やくそくは まもるべきです。']] });

  G({ id: 'jpn-j6-gram-okage-sei', prereq: 'jpn-j6-gram-hazu-beki', title: 'Causa e conseguenza: ～おかげで, ～せいで, ～ために, ～によって',
    summary: 'Cause positive, negative, ufficiali e dipendenza: scegliere la parola giusta.',
    obj: ['Distinguere おかげで (positivo) e せいで (negativo)', 'Usare ため(に) e によって nei testi e nelle notizie', 'Capire quando preferire ので o から'],
    pages: [
      { h: 'Obiettivo', b: '**Ragione** e **conseguenza** non sono solo «perché». Il giapponese segna se la causa è **positiva**, **negativa**, **neutra** o **ufficiale**. Impari quattro tipi: **おかげで**, **せいで**, **ために**, **によって**.' },
      { h: 'Regola con schema', b: '**forma semplice + おかげで** (na-agg: な, N: の) = grazie a, risultato positivo\n**forma semplice + せいで** = per colpa di, risultato negativo\n**forma semplice + ため(に) / N の ため(に)** = a causa di (scritto, neutro)\n**N + によって / により** = a causa di / secondo / tramite\n**ので / から** = perché (parlato)' },
      { h: 'おかげで・せいで', b: '- {{ja|[先生|せんせい]の おかげで、[試験|しけん]に [合格|ごうかく]しました。}}\n- {{ja|[友達|ともだち]が [助|たす]けて くれた おかげで、[早|はや]く [終|お]わりました。}}\n- {{ja|おかげさまで [元気|げんき]です。}} (formula fissa)\n- {{ja|[雨|あめ]の せいで、[試合|しあい]が [中止|ちゅうし]に なりました。}}\n- {{ja|[電車|でんしゃ]が [遅|おく]れた せいで、[会議|かいぎ]に [遅|おく]れました。}}' },
      { h: 'ため(に) e によって', b: '- {{ja|[事故|じこ]の ために、[電車|でんしゃ]が [止|と]まりました。}}\n- {{ja|[台風|たいふう]の ため、[今日|きょう]は [休|やす]みです。}} (annuncio)\n- {{ja|[地震|じしん]に よって、[道路|どうろ]が [壊|こわ]れました。}}\n- Dipendenza: {{ja|[人|ひと]に よって [考|かんが]えが [違|ちが]います。}} — Dipende dalle persone.\n- Agente nel passivo: {{ja|この [本|ほん]は [有名|ゆうめい]な [作家|さっか]に よって [書|か]かれました。}}' },
      { h: 'ので・から', b: '- **ので**: causa oggettiva, tono cortese. {{ja|[用事|ようじ]が ありますので、[先|さき]に [失礼|しつれい]します。}}\n- **から**: causa personale, più diretta. {{ja|[時間|じかん]が ないから、[急|いそ]ぎます。}}\n- **ために** (causa) e **ために** (scopo) hanno la stessa forma: dipende dal verbo (volitivo = scopo, non volitivo = causa).\n- **ので** non si usa con comandi diretti dopo: «[暑|あつ]いので、[窓|まど]を [開|あ]けろ» (scorretto).' },
      { h: 'Differenze da strutture simili', b: '- **おかげで** ≠ **せいで**: stessa struttura, esito opposto.\n- **ため** (scritto / ufficiale) ≠ **から** (parlato).\n- **によって** ≠ **ために**: によって segnala spesso il mezzo, ordinamento o fenomeno; ために la ragione generale.\n- **ので** vs **から**: ので è più morbido e adatto a scuse e richieste.' },
      { h: 'Errori tipici per italiani', b: '- Usare **せいで** per un buon esito: «[先生|せんせい]の せいで [合格|ごうかく]» è sarcastico.\n- Usare **おかげで** con ironia: può esprimere sarcasmo, attenzione.\n- Dimenticare **の** con nomi: {{ja|[雨|あめ]の おかげで}}.\n- Confondere **ために** scopo e causa.\n- Usare **によって** con eventi personali minimi.' },
      { h: 'Riepilogo', b: '- **おかげで**: grazie a (positivo).\n- **せいで**: per colpa di (negativo).\n- **ため(に)**: a causa di (formale).\n- **によって**: causa, dipendenza, agente.\n- **ので / から**: parlato.' }
    ],
    ex: [
      mc('«Grazie al professore, ho passato l’esame»:', ['せんせいの おかげで、しけんに ごうかくしました。', 'せんせいの せいで、しけんに ごうかくしました。', 'せんせいの ように、しけんに ごうかく。', 'せんせいの のに、しけんに。']),
      mc('«A causa della pioggia, la partita è stata annullata»:', ['あめの せいで、しあいが ちゅうしに なりました。', 'あめの おかげで、しあいが ちゅうし。', 'あめの ために、しあいが ちゅうしません。', 'あめの ばかり。']),
      mc('«Il terremoto ha rotto le strade»:', ['じしんに よって、どうろが こわれました。', 'じしんを よって、どうろが。', 'じしんの おかげで、どうろが こわれた を。', 'じしんが よって。']),
      fillJ('Completa: じこの ___ に、でんしゃが とまりました。(causa formale)', ['ため'], 'N の ため(に).'),
      fillJ('Completa: ひと___ よって かんがえが ちがいます。', ['に'], 'N によって = dipende da.'),
      fillJ('Completa: おかげ___ げんきです。(formula fissa)', ['さまで'], 'おかげさまで.'),
      order('Metti in ordine: «Per colpa del ritardo del treno, ho fatto tardi alla riunione»', ['でんしゃが', 'おくれた', 'せいで', 'かいぎに', 'おくれました'], 'せいで = colpa.'),
      order('Metti in ordine: «Questo libro è stato scritto da un autore famoso»', ['この', 'ほんは', 'ゆうめいな', 'さっかに', 'よって', 'かかれました'], 'N によって + passivo.'),
      lis('たいふうの ため、きょうは やすみです。', 'Che cosa significa?', ['Oggi è chiuso a causa del tifone', 'Domani c’è un tifone', 'Il tifone è finito', 'Oggi si lavora di più']),
      mc('Quale esprime colpa?', ['せいで', 'おかげで', 'によって', 'ように']),
      mc('Quale frase è sarcastica?', ['きみの おかげで ひどい めに あった。', 'きみの おかげで たすかった。', 'きみの せいで おくれた。', 'きみが たすけてくれた。'])
    ],
    test: [
      mc('«Grazie a te ho finito presto»:', ['きみの おかげで、はやく おわりました。', 'きみの せいで、はやく おわりました。', 'きみの ため、はやく おわり。', 'きみに よって。']),
      mc('«Per colpa del rumore non ho potuto dormire»:', ['うるさい せいで、ねられませんでした。', 'うるさい おかげで、ねられませんでした。', 'うるさい ために、ねました。', 'うるさい のに よって。']),
      mc('«L’autobus non è arrivato a causa della neve»:', ['ゆきの ために、バスが きませんでした。', 'ゆきの おかげで、バスが こなかった を。', 'ゆきを ため。', 'ゆきから、バスが。']),
      mc('«Dipende dalla stagione»:', ['きせつに よって ちがいます。', 'きせつの せいで ちがいます。', 'きせつを よって。', 'きせつ ため。']),
      mc('Quale è più morbido nelle scuse?', ['ようじが ありますので…', 'ようじが あるせいで…', 'ようじが あるぞ。', 'ようじが あるべき。']),
      fillJ('Completa: ともだちが てつだって くれた ___ はやく おわった。', ['おかげで'], 'おかげで = positivo.'),
      lis('じこの せいで、でんしゃが おくれました。', 'Che tono ha?', ['Negativo: colpa dell’incidente', 'Positivo: grazie all’incidente', 'Neutro', 'Ironico'])
    ],
    cards: [card('c1', 'grazie a', '～おかげで', '', 'おかげで'), card('c2', 'per colpa di', '～せいで', '', 'せいで'), card('c3', 'a causa di (formale)', '～ため(に)', '', 'ため'), card('c4', 'a causa di / dipende da', 'Nによって', '', 'によって'), card('c5', 'grazie, sto bene', 'おかげさまで', '', 'おかげさまで'), card('c6', 'incidente', '[事故|じこ]', '', 'じこ'), card('c7', 'terremoto', '[地震|じしん]', '', 'じしん'), card('c8', 'tifone', '[台風|たいふう]', '', 'たいふう')],
    lis: { title: 'Notizie del giorno', text: 'たいふうの ために、きょうは でんしゃが とまりました。じこの せいで、おおくの ひとが かいしゃに おくれました。でも、ともだちが てつだって くれた おかげで、わたしは しごとを はやく おえました。ひとに よって いけんは ちがいますが、おかげさまで みんな ぶじです。',
      qs: [{ q: 'Perché i treni si sono fermati?', o: ['A causa di un tifone', 'Per uno sciopero', 'Per la neve', 'Per un terremoto'] }, { q: 'Perché il narratore ha finito presto?', o: ['Un amico lo ha aiutato', 'Non aveva lavoro', 'È rimasto a casa', 'Ha lavorato di notte'] }, { q: 'Com’è la situazione alla fine?', o: ['Tutti stanno bene', 'Molti sono feriti', 'Il tifone è ancora forte', 'La città è chiusa'], kind: 'implicit' }] },
    dict: ['ともだちの おかげで おわりました', 'あめの せいで おくれました', 'たいふうの ため やすみです'],
    shad: [['せんせいの おかげです。', 'おかげ: o-ka-ge.'], ['あめの せいで おくれました。', 'せいで: se-i-de.'], ['じこの ために とまりました。', 'ために: ta-me-ni.']],
    speak: [['Ringrazia un amico che ti ha aiutato con il lavoro.', 'ともだちの おかげで しごとが はやく おわりました。'], ['Spiega che hai tardato per colpa della pioggia.', 'あめの せいで おくれました。']] });

  G({ id: 'jpn-j6-gram-sae-koso', prereq: 'jpn-j6-gram-okage-sei', title: 'Particelle di enfasi: ～さえ, ～こそ, ～まで, ～でも, ～ほど',
    summary: 'Dire «perfino», «proprio», «addirittura», «anche solo» e «così… da».',
    obj: ['Usare さえ per «perfino» e さえ～ば per condizione sufficiente', 'Capire こそ, まで, でも e ほど', 'Scegliere la particella giusta per l’enfasi'],
    pages: [
      { h: 'Obiettivo', b: 'Nel giapponese N3 le particelle di enfasi **cambiano il peso emotivo** della frase. In italiano diresti «perfino», «proprio», «anche solo», «addirittura». Le stesse idee si ottengono con **さえ**, **こそ**, **まで**, **でも**, **ほど**.' },
      { h: 'Regola con schema', b: '**N + さえ** = perfino N; **V-ます + さえ すれば** = basta che…\n**N + こそ** = proprio N (non altri)\n**N + まで** = addirittura N\n**N + でも** = anche solo / per esempio N\n**V / N + ほど** = tanto da… / così… come\n**N + しか + negativo** = solo (niente di più)' },
      { h: 'さえ: perfino', b: '- {{ja|[水|みず]さえ [飲|の]めませんでした。}} — Non riuscivo a bere nemmeno l’acqua.\n- {{ja|[子供|こども]でさえ [知|し]って いる。}} — Perfino un bambino lo sa.\n- **さえ + ば**: {{ja|[時間|じかん]さえ あれば、[行|い]きます。}} — Basta che io abbia tempo, e vengo.\n- {{ja|お[金|かね]さえ あれば、[何|なに]でも [買|か]えます。}}' },
      { h: 'こそ・まで', b: '- {{ja|[今年|ことし]こそ [合格|ごうかく]したい。}} — Quest’anno voglio proprio passare.\n- {{ja|こちらこそ、よろしく お[願|ねが]いします。}} — Il piacere è mio.\n- {{ja|[雨|あめ]が [降|ふ]った うえに、[風|かぜ]まで [吹|ふ]いて きた。}} — E in più è arrivato pure il vento.\n- {{ja|[彼|かれ]は [私|わたし]の [誕生日|たんじょうび]まで [忘|わす]れて いた。}}' },
      { h: 'でも・ほど・しか', b: '- **でも** (esempio / proposta): {{ja|お[茶|ちゃ]でも [飲|の]みませんか。}} — Beviamo un tè o qualcosa?\n- **でも** (anche): {{ja|[子供|こども]でも わかります。}}\n- **ほど** (misura): {{ja|[昨日|きのう]ほど [寒|さむ]くない。}} — Non fa freddo come ieri.\n- {{ja|[泣|な]きたい ほど [嬉|うれ]しかった。}} — Ero felice da volere piangere.\n- **しか～ない**: {{ja|[千円|せんえん]しか ありません。}} — Ho solo mille yen.' },
      { h: 'Differenze da strutture simili', b: '- **さえ** vs **でも**: さえ ha un tono più forte e spesso con negativi; でも è più leggera.\n- **まで** (addirittura) aggiunge un elemento «in più»; **さえ** indica l’estremo minimo.\n- **しか** vs **だけ**: しか richiede negativo e sottolinea poco; だけ è neutro.\n- **こそ** non indica elenco: enfatizza «quello».' },
      { h: 'Errori tipici per italiani', b: '- Dire «[水|みず]さえ[飲|の]みました» (senza negazione): nel senso di «nemmeno» richiede negativo; in positivo suona strano.\n- Usare **しか** senza negativo: «[千円|せんえん]しか あります» è sbagliato.\n- Confondere **でも** (particella) con **でも** (congiunzione «ma»).\n- Dimenticare **が** o **を** davanti: particelle come さえ/まで sostituiscono が/を ({{ja|[彼|かれ]さえ}}), non si sommano.\n- Usare **こそ** con troppa frequenza.' },
      { h: 'Riepilogo', b: '- **さえ**: perfino; **さえ～ば**: basta che.\n- **こそ**: proprio.\n- **まで**: addirittura.\n- **でも**: per esempio / anche.\n- **ほど**: misura.\n- **しか～ない**: solo.' }
    ],
    ex: [
      mc('«Non riuscivo a bere nemmeno l’acqua»:', ['みずさえ のめませんでした。', 'みずばかり のめませんでした。', 'みずこそ のめませんでした。', 'みずほど のめました。']),
      mc('«Basta che io abbia tempo, e vengo»:', ['じかんさえ あれば、いきます。', 'じかんこそ あれば、いきます。', 'じかんまで あれば、いく。', 'じかんでも あれば。']),
      mc('«Beviamo un tè o qualcosa?»', ['おちゃでも のみませんか。', 'おちゃさえ のみませんか。', 'おちゃこそ のみませんか。', 'おちゃほど のみませんか。']),
      fillJ('Completa: こちら___ よろしく おねがいします。(il piacere è mio)', ['こそ'], 'こちらこそ.'),
      fillJ('Completa: せんえん___ ありません。(ho solo mille yen)', ['しか'], 'しか + negativo.'),
      fillJ('Completa: きのう___ さむくない。(come ieri)', ['ほど'], 'N ほど + negativo.'),
      order('Metti in ordine: «Perfino un bambino lo sa»', ['こどもで', 'さえ', 'しって', 'いる'], 'N でさえ.'),
      order('Metti in ordine: «Quest’anno voglio proprio passare»', ['ことし', 'こそ', 'ごうかく', 'したい'], 'N こそ.'),
      lis('かぜまで ふいて きました。', 'Che cosa significa?', ['È arrivato anche il vento, in più', 'Il vento è finito', 'Non c’è vento', 'Il vento è debole']),
      mc('Quale frase richiede il negativo?', ['せんえんしか ありません。', 'せんえんだけ あります。', 'せんえんでも あります。', 'せんえんまで あります。']),
      mc('Quale particella indica «proprio quello» (enfasi)?', ['こそ', 'まで', 'でも', 'ほど'])
    ],
    test: [
      mc('«Ha dimenticato perfino il mio compleanno»:', ['わたしの たんじょうびまで わすれて いた。', 'わたしの たんじょうびしか わすれて いた。', 'わたしの たんじょうびこそ わすれて。', 'わたしの たんじょうびほど。']),
      mc('«Basta che tu stia bene»:', ['げんきでさえ いれば いい。', 'げんきこそ いれば いい。', 'げんきしか いれば。', 'げんきまで いれば。']),
      mc('«Ero così felice da voler piangere»:', ['なきたい ほど うれしかった。', 'なきたい まで うれしかった。', 'なきたい さえ うれしかった。', 'なきたい しか うれしい。']),
      mc('«Possiamo andare in biblioteca o qualcosa del genere?»', ['としょかんでも いきませんか。', 'としょかんさえ いきませんか。', 'としょかんこそ。', 'としょかんほど。']),
      mc('«Ho solo un po’ di tempo»:', ['すこししか じかんが ありません。', 'すこしでも じかんが ありません。', 'すこしこそ じかんが。', 'すこしまで じかん。']),
      fillJ('Completa: かぜ___ ふいて きた。(in più)', ['まで'], 'まで = addirittura.'),
      lis('こちらこそ、よろしく おねがいします。', 'Qual è il senso di questa risposta?', ['Il piacere è mio, piacere di conoscerla', 'Non mi piace', 'Sono io a scusarmi', 'Arrivederci'])
    ],
    cards: [card('c1', 'perfino', 'Nさえ', '', 'さえ'), card('c2', 'proprio', 'Nこそ', '', 'こそ'), card('c3', 'addirittura', 'Nまで', '', 'まで'), card('c4', 'per esempio, anche', 'Nでも', '', 'でも'), card('c5', 'tanto che', '～ほど', '', 'ほど'), card('c6', 'solo (con negativo)', 'Nしか～ない', '', 'しか'), card('c7', 'compleanno', '[誕生日|たんじょうび]', '', 'たんじょうび'), card('c8', 'soffiare (vento)', '[吹|ふ]く', '', 'ふく')],
    lis: { title: 'Una giornata no', text: 'きょうは さんざんでした。あめが ふった うえに、かぜまで ふいて きました。さいふには せんえんしか ありませんでした。おちゃでも のみたかったのですが、みずさえ かえません。でも、ともだちが たすけて くれました。こちらこそ ありがとう、と いいました。',
      qs: [{ q: 'Quanto aveva nel portafoglio?', o: ['Solo mille yen', 'Diecimila yen', 'Cento yen', 'Niente'] }, { q: 'Che cosa è arrivato oltre alla pioggia?', o: ['Il vento', 'La neve', 'Un temporale', 'La nebbia'] }, { q: 'Come finisce la giornata?', o: ['Un amico lo aiuta', 'Si arrabbia', 'Torna a casa a piedi', 'Perde il portafoglio'], kind: 'implicit' }] },
    dict: ['みずさえ のめませんでした', 'ことし こそ ごうかくしたい', 'せんえんしか ありません'],
    shad: [['こどもでさえ しっている。', 'さえ: leggermente più forte.'], ['こちらこそ。', 'Tono cordiale.'], ['かぜまで ふいて きた。', 'まで: tono di sorpresa.']],
    speak: [['Di’ che hai solo mille yen.', 'せんえんしか ありません。'], ['Rispondi a «Piacere di conoscerla!».', 'こちらこそ、よろしく おねがいします。']] });

  G({ id: 'jpn-j6-gram-fukugoudoushi', prereq: 'jpn-j6-gram-sae-koso', title: 'Verbi composti: ～[始|はじ]める, ～[出|だ]す, ～[続|つづ]ける, ～[終|お]わる, ～[直|なお]す, ～[合|あ]う',
    summary: 'Aggiungere fasi, intensità e reciprocità al verbo con V-ます + secondo verbo.',
    obj: ['Costruire verbi composti V-ます + V', 'Distinguere [始|はじ]める e [出|だ]す, [終|お]わる e [終|お]える', 'Usare [合|あ]う, [直|なお]す, [忘|わす]れる, [切|き]る in significati comuni'],
    pages: [
      { h: 'Obiettivo', b: 'Il giapponese forma **verbi composti** unendo la radice ます di un verbo a un secondo verbo: **[読|よ]み[始|はじ]める**, **[泣|な]き[出|だ]す**, **[話|はな]し[合|あ]う**. Il secondo verbo aggiunge **fase** (inizio, durata, fine), **modo** (fino in fondo) o **reciprocità**.' },
      { h: 'Regola con schema', b: '**V-ます (radice) + [始|はじ]める** = cominciare a\n**V-ます + [出|だ]す** = mettersi a (improvviso)\n**V-ます + [続|つづ]ける** = continuare a\n**V-ます + [終|お]わる / [終|お]える** = finire di\n**V-ます + かける** = a metà / sta per\n**V-ます + [切|き]る** = fare fino in fondo\n**V-ます + [直|なお]す** = rifare\n**V-ます + [合|あ]う** = fare l’uno con l’altro\n**V-ます + [忘|わす]れる** = dimenticare di' },
      { h: '[始|はじ]める・[出|だ]す', b: '- {{ja|[雨|あめ]が [降|ふ]り[始|はじ]めました。}} — Ha cominciato a piovere (calmo).\n- {{ja|[急|きゅう]に [雨|あめ]が [降|ふ]り[出|だ]しました。}} — Si è messo a piovere all’improvviso.\n- {{ja|[赤|あか]ちゃんが [泣|な]き[出|だ]しました。}}\n- {{ja|[先月|せんげつ]から [日本語|にほんご]を [習|なら]い[始|はじ]めました。}}\n\n**[始|はじ]める** è neutro e controllato; **[出|だ]す** è improvviso, spesso emotivo.' },
      { h: '[続|つづ]ける・[終|お]わる・かける', b: '- {{ja|[毎日|まいにち] [日本語|にほんご]を [勉強|べんきょう]し[続|つづ]けて います。}}\n- {{ja|[本|ほん]を [読|よ]み[終|お]わりました。}}\n- {{ja|[宿題|しゅくだい]を し[終|お]えて から [遊|あそ]びます。}} ([終|お]える è volitivo)\n- {{ja|[食|た]べかけの ケーキが [机|つくえ]の [上|うえ]に あります。}} — Una torta a metà sul tavolo.\n- {{ja|ドアが [閉|し]まりかけて いた。}}' },
      { h: '[切|き]る・[直|なお]す・[合|あ]う・[忘|わす]れる', b: '- {{ja|[全部|ぜんぶ] [使|つか]い[切|き]りました。}} — Ho finito tutto.\n- {{ja|[作文|さくぶん]を [書|か]き[直|なお]します。}}\n- {{ja|[友達|ともだち]と [話|はな]し[合|あ]いました。}}\n- {{ja|[傘|かさ]を [電車|でんしゃ]に [置|お]き[忘|わす]れました。}}\n- {{ja|[電車|でんしゃ]に [乗|の]り[遅|おく]れました。}}\n\nSono combinazioni fisse da imparare come blocchi lessicali.' },
      { h: 'Differenze da strutture simili', b: '- **[始|はじ]める** vs **[始|はじ]まる**: [始|はじ]める è transitivo (io comincio), [始|はじ]まる è intransitivo (comincia da solo).\n- **[終|お]わる** vs **[終|お]える**: [終|お]わる è intransitivo, [終|お]える è transitivo: {{ja|[授業|じゅぎょう]が [終|お]わる。}} / {{ja|[仕事|しごと]を [終|お]える。}}\n- **～[続|つづ]ける** vs **～て いる**: [続|つづ]ける sottolinea la durata e la volontà.\n- **～[切|き]る** vs **[全部|ぜんぶ]**: [切|き]る dà il senso del «fino in fondo, completamente».' },
      { h: 'Errori tipici per italiani', b: '- Usare la forma て: «[食|た]べて[始|はじ]める» → **[食|た]べ[始|はじ]める**.\n- Confondere **[出|だ]す** con [出|で]る: {{ja|[走|はし]り[出|だ]す}} = mettersi a correre.\n- Dimenticare che il secondo verbo si coniuga: {{ja|[読|よ]み[始|はじ]めました}}.\n- Usare **[始|はじ]まる** come secondo verbo: il composto vuole **[始|はじ]める** ({{ja|[雨|あめ]が [降|ふ]り[始|はじ]めました}}), non «[雨|あめ]が[降|ふ]り[始|はじ]まる».\n- Scegliere [終|お]わる quando serve il transitivo.' },
      { h: 'Riepilogo', b: '- V-ます + **[始|はじ]める / [出|だ]す**: inizio.\n- **[続|つづ]ける**: continuare.\n- **[終|お]わる / [終|お]える**: finire.\n- **かけ**: a metà.\n- **[切|き]る**: fino in fondo.\n- **[直|なお]す**: rifare.\n- **[合|あ]う**: reciprocità.' }
    ],
    ex: [
      mc('«Ha cominciato a piovere all’improvviso»:', ['きゅうに あめが ふりだしました。', 'きゅうに あめが ふりつづけました。', 'きゅうに あめが ふりなおしました。', 'きゅうに あめが ふりあいました。']),
      mc('«Ho finito di leggere il libro»:', ['ほんを よみおわりました。', 'ほんを よみはじめました。', 'ほんを よみかけました。', 'ほんを よみきりました から。']),
      mc('«Ho dimenticato l’ombrello sul treno»:', ['かさを でんしゃに おきわすれました。', 'かさを でんしゃに おきなおしました。', 'かさを でんしゃに おきあいました。', 'かさを でんしゃに おきつづけました。']),
      fillJ('Completa: まいにち にほんごを べんきょうし___ います。(continuo)', ['つづけて'], '[続|つづ]ける.'),
      fillJ('Completa: ともだちと はなし___ ました。(ci siamo confrontati)', ['あい'], '[話|はな]し[合|あ]う.'),
      fillJ('Completa: さくぶんを かき___ ます。(lo riscrivo)', ['なおし'], '[書|か]き[直|なお]す.'),
      order('Metti in ordine: «Ho cominciato a imparare il giapponese il mese scorso»', ['せんげつ', 'から', 'にほんごを', 'ならいはじめました'], '習い[始|はじ]める.'),
      order('Metti in ordine: «Ho usato tutto»', ['ぜんぶ', 'つかいきりました'], '使い[切|き]る.'),
      lis('あかちゃんが ないだしました。', 'Che cosa significa?', ['Il bambino si è messo a piangere', 'Il bambino ha smesso di piangere', 'Il bambino ride', 'Il bambino dorme']),
      mc('«[始|はじ]める» è…', ['transitivo (io comincio)', 'intransitivo', 'solo passato', 'solo negativo']),
      mc('«[食|た]べかけ» indica…', ['qualcosa mangiato a metà', 'cibo finito', 'cibo da mangiare', 'cibo cattivo'])
    ],
    test: [
      mc('«Ho perso il treno» (non sono salito in tempo):', ['でんしゃに のりおくれました。', 'でんしゃに のりなおしました。', 'でんしゃに のりあいました。', 'でんしゃに のりつづけました。']),
      mc('«Il corso è finito»:', ['じゅぎょうが おわりました。', 'じゅぎょうを おわりました を。', 'じゅぎょうが おえました。', 'じゅぎょうを おわった。']),
      mc('«Ho finito il lavoro» (transitivo):', ['しごとを おえました。', 'しごとが おえました。', 'しごとを おわりました。', 'しごとが おわえました。']),
      mc('«Ricominciamo da capo» (rifare):', ['はじめから やりなおしましょう。', 'はじめから やりあいましょう。', 'はじめから やりきりましょう。', 'はじめから やりだしましょう を。']),
      mc('«Ci siamo aiutati a vicenda»:', ['たすけあいました。', 'たすけなおしました。', 'たすけだしました。', 'たすけわすれました。']),
      fillJ('Completa: かぜを ひきか___ います。(sto per ammalarmi)', ['けて'], 'V-かける.'),
      lis('おかしを たべきって しまいました。', 'Che cosa è successo al dolce?', ['Ha mangiato tutto il dolce', 'Ha iniziato a mangiare', 'Ha dimenticato il dolce', 'Ha condiviso il dolce'])
    ],
    cards: [card('c1', 'cominciare a', 'V-ます＋[始|はじ]める', '', 'はじめる'), card('c2', 'mettersi a (improvviso)', 'V-ます＋[出|だ]す', '', 'だす'), card('c3', 'continuare a', 'V-ます＋[続|つづ]ける', '', 'つづける'), card('c4', 'finire di', 'V-ます＋[終|お]わる', '', 'おわる'), card('c5', 'fare fino in fondo', 'V-ます＋[切|き]る', '', 'きる'), card('c6', 'rifare', 'V-ます＋[直|なお]す', '', 'なおす'), card('c7', 'fare l’uno con l’altro', 'V-ます＋[合|あ]う', '', 'あう'), card('c8', 'dimenticare di', 'V-ます＋[忘|わす]れる', '', 'わすれる')],
    lis: { title: 'Una serata di studio', text: 'せんげつから にほんごを ならいはじめました。まいにち べんきょうしつづけて います。きょうは ほんを よみおわって、さくぶんを かきなおしました。ともだちと はなしあって、ぜんぶ つかいきりました。でも、かさを でんしゃに おきわすれて しまいました。',
      qs: [{ q: 'Da quando studia giapponese?', o: ['Dal mese scorso', 'Dall’anno scorso', 'Da una settimana', 'Da ieri'] }, { q: 'Che cosa ha riscritto oggi?', o: ['Il tema', 'Il libro', 'La lettera', 'L’e-mail'] }, { q: 'Che cosa ha dimenticato sul treno?', o: ['L’ombrello', 'Il libro', 'Il portafoglio', 'Il telefono'], kind: 'implicit' }] },
    dict: ['にほんごを ならいはじめました', 'ほんを よみおわりました', 'かさを おきわすれました'],
    shad: [['あめが ふりだしました。', 'ふりだし: ふり・だし.'], ['まいにち べんきょうしつづけて います。', 'つづけて: tsu-zu-ke-te.'], ['ぜんぶ つかいきりました。', 'きり: ki-ri.']],
    speak: [['Racconta che hai cominciato a imparare il giapponese il mese scorso.', 'せんげつから にほんごを ならいはじめました。'], ['Di’ che hai dimenticato l’ombrello sul treno.', 'かさを でんしゃに おきわすれました。']] });
})(window.ST = window.ST || {});
