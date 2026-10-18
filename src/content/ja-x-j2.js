/* Giapponese — ampliamento stage J2 (forma て e forma semplice). */
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
  const T = (o) => addTopic(Object.assign({ subject: 'jpn', stage: 'J2', minutes: 20, prereq: ['jpn-j1-places-wants'] }, o));

  T({ id: 'jpn-j2-te-uses', title: 'Altri usi della forma て: てから, ながら, てみる, ておく', summary: 'Sequenze, azioni simultanee, tentativo e preparazione.',
    objectives: ['Collegare azioni con ～てから e ～ながら', 'Dire «provare a» con ～てみる', 'Dire «fare in anticipo» con ～ておく'],
    pages: [
      { h: 'Obiettivo', b: 'La forma て permette molte funzioni oltre alle richieste. Qui impari a **ordinare azioni nel tempo**, farle **in contemporanea**, **provare** qualcosa e **prepararsi** in anticipo.' },
      { h: '～てから: dopo aver…', b: '**forma て + から** = dopo aver fatto:\n- {{ja|[宿題|しゅくだい]を してから [寝|ね]ます。}}\n- {{ja|[手|て]を [洗|あら]ってから [食|た]べます。}}\n\nLa frase con てから precede cronologicamente quella finale. Per «prima di»: {{ja|[寝|ね]る[前|まえ]に}} (già visto).' },
      { h: '～ながら: mentre', b: '**radice + ながら** = mentre (stesso soggetto, due azioni):\n- {{ja|[音楽|おんがく]を [聞|き]きながら [勉強|べんきょう]します。}}\n- {{ja|[歩|ある]きながら [話|はな]します。}}\n\nL’azione principale è l’ultima: {{ja|テレビを [見|み]ながら [食事|しょくじ]を します。}} (si mangia guardando la TV).' },
      { h: '～てみる e ～ておく', b: '- **～てみる** = provare a fare (per vedere come è): {{ja|[日本語|にほんご]で [話|はな]して みます。}} / {{ja|この [料理|りょうり]を [食|た]べて みて ください。}}\n- **～ておく** = fare in anticipo / lasciare così: {{ja|[旅行|りょこう]の まえに [切符|きっぷ]を [買|か]って おきます。}} / {{ja|ドアを [開|あ]けて おいて ください。}}\n\nEntrambi sono ausiliari: la forma て del verbo principale + みる/おく.' },
      { h: 'Esempio guidato', b: 'Racconta: *Prima di partire ho prenotato l’hotel. Dopo aver mangiato ho provato ad usare il giapponese con il cameriere, mentre parlavo ascoltavo bene.*\n\n→ {{ja|[出発|しゅっぱつ]する[前|まえ]に ホテルを [予約|よやく]して おきました。[食事|しょくじ]を してから、[店員|てんいん]さんと [日本語|にほんご]で [話|はな]して みました。}}\n\nControllo: ておく (preparazione), てから (sequenza), てみる (tentativo).' },
      { h: 'Errori comuni', b: '- *たべてから* con soggetti diversi: non è corretto.\n- *ながら* con due soggetti diversi: non si usa.\n- *てみます* come «guardare»: significa «provare».\n- *ておく* senza て: *かっておく*, non *かっおく*.\n- Dimenticare i particelle: *を* con il verbo principale.' },
      { h: 'Riepilogo', b: '- てから: dopo aver…; ながら: mentre.\n- てみる: provare; ておく: preparare.\n- Si formano dalla forma て.\n- Stesso soggetto con ながら.' }
    ],
    exercises: [
      mc('«Dopo aver fatto i compiti vado a dormire»:', ['しゅくだいを してから ねます。', 'しゅくだいを しながら ねます。', 'しゅくだいを して みます。', 'しゅくだいを しておく ねます。'], 0),
      mc('«Studio ascoltando musica»:', ['おんがくを ききながら べんきょうします。', 'おんがくを ききてから べんきょうします。', 'おんがくを きいておいて。', 'おんがくを きいて みて。'], 0),
      mc('«Provo a parlare in giapponese»:', ['にほんごで はなして みます。', 'にほんごで はなしておきます。', 'にほんごで はなしながら。', 'にほんごで はなしてから。'], 0),
      mc('«Compro il biglietto in anticipo»:', ['きっぷを かっておきます。', 'きっぷを かってみます。', 'きっぷを かいながら。', 'きっぷを かいに。'], 0),
      listen('てを あらってから たべます。', 'ja', 'Che cosa fa prima di mangiare?', ['Si lava le mani', 'Cucina', 'Guarda la TV', 'Beve'], 0),
      fillJ('Completa: あるき___ はなします。', ['ながら'], 'ながら.'),
      mc('ながら richiede…', ['lo stesso soggetto', 'soggetti diversi', 'solo verbi di movimento', 'sempre un nome'], 0)
    ],
    test: [
      mc('«てみる» significa…', ['provare a fare', 'fare in anticipo', 'finire', 'dimenticare'], 0),
      mc('«ておく» significa…', ['fare in anticipo / lasciare così', 'provare', 'mentre', 'dopo'], 0),
      listen('おんがくを ききながら しゅくだいを します。', 'ja', 'Che cosa fa?', ['Ascolta musica mentre fa i compiti', 'Ascolta musica dopo i compiti', 'Canta', 'Studia in silenzio'], 0),
      mc('«Prima di dormire» è…', ['ねる まえに', 'ねてから', 'ねながら', 'ねておく'], 0)
    ],
    cards: [card('c1', 'dopo aver fatto', '～てから', '', 'てから'), card('c2', 'mentre', '～ながら', '', 'ながら'), card('c3', 'provare a', '～てみる', '', 'てみる'), card('c4', 'fare in anticipo', '～ておく', '', 'ておく'),
      card('c5', 'prenotare', '[予約|よやく]する', '', 'よやくする'), card('c6', 'biglietto', '[切符|きっぷ]', '', 'きっぷ'), card('c7', 'piatto/cucina', '[料理|りょうり]', '', 'りょうり'), card('c8', 'compiti', '[宿題|しゅくだい]', '', 'しゅくだい')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Preparare un viaggio', text: 'りょこうの まえに ホテルを よやくして おきました。きっぷも かっておきました。ひこうきの なかで おんがくを ききながら ほんを よみます。ついてから まず ホテルに にもつを おいてから、レストランで にほんの りょうりを たべて みます。',
      qs: [{ q: 'Che cosa ha fatto in anticipo?', o: ['Prenotato hotel e comprato biglietti', 'Fatto la valigia', 'Studiato', 'Cambiato soldi'], a: 0, kind: 'explicit' }, { q: 'Che cosa fa in aereo?', o: ['Ascolta musica e legge', 'Dorme', 'Mangia', 'Gioca'], a: 0, kind: 'explicit' }, { q: 'Che cosa farà all’arrivo?', o: ['Lasciare i bagagli e provare la cucina giapponese', 'Dormire', 'Andare in stazione', 'Telefonare'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'てを あらってから たべます', lang: 'ja' }, { text: 'おんがくを ききながら べんきょうします', lang: 'ja' }, { text: 'きっぷを かっておきます', lang: 'ja' }],
    shadowing: [{ text: 'てを あらってから たべます。', lang: 'ja', tip: 'てから: pausa breve dopo から.' }, { text: 'おんがくを ききながら べんきょうします。', lang: 'ja', tip: 'ながら: tono leggero.' }, { text: 'にほんごで はなして みます。', lang: 'ja', tip: 'てみます: legato.' }],
    speaking: [{ prompt: 'Racconta come ti prepari prima di un viaggio (ておく) e che cosa vuoi provare (てみる).', model: 'りょこうの まえに ホテルを よやくして おきます。にほんで すしを たべて みたいです。' }, { prompt: 'Dì che cosa fai mentre fai un’altra cosa.', model: 'おんがくを ききながら あるきます。ごはんを たべながら ニュースを みます。' }] });

  T({ id: 'jpn-j2-adjectives-forms', title: 'Aggettivi: passato, forma て, avverbi e cambiamento', summary: 'い e な aggettivi al passato; collegare con て; avverbi ～く/～に; ～くなる/～になる.',
    objectives: ['Coniugare gli aggettivi al passato', 'Collegare aggettivi con て', 'Usare ～く/～に come avverbi e ～くなる/～になる per il cambiamento'],
    pages: [
      { h: 'Obiettivo', b: 'Gli aggettivi giapponesi si coniugano come i verbi (passato, negativo, て). Conoscere le forme permette di **descrivere il passato**, **collegare qualità** e **parlare di cambiamenti**.' },
      { h: 'Passato degli aggettivi', b: '**い-aggettivi**: い → **かった** (affermativo), **くなかった** (negativo).\n- {{ja|[高|たか]い}} → {{ja|[高|たか]かった}} / {{ja|[高|たか]くなかった}}\n- Cortese: {{ja|[高|たか]かったです}} / {{ja|[高|たか]くなかったです}}\n- Eccezione: {{ja|いい}} → {{ja|よかった}}.\n\n**な-aggettivi e nomi**: **だった** / **じゃ なかった**; cortese **でした** / **じゃ ありませんでした**.\n- {{ja|[静|しず]かでした}}, {{ja|[雨|あめ]でした}}' },
      { h: 'Forma て degli aggettivi', b: 'Per collegare più qualità:\n- **い-aggettivi**: い → **くて**: {{ja|[安|やす]くて おいしいです。}}\n- **な-aggettivi e nomi**: **で**: {{ja|[静|しず]かで きれいです。}} / {{ja|[学生|がくせい]で [二十歳|はたち]です。}}\n\n> {{ja|この [店|みせ]は [安|やす]くて おいしくて、[有名|ゆうめい]です。}}' },
      { h: 'Avverbi: く e に', b: 'Un aggettivo diventa avverbio così:\n- **い → く**: {{ja|[早|はや]く [起|お]きます。}} (mi alzo presto), {{ja|[安|やす]く [買|か]いました。}}\n- **な → に**: {{ja|[静|しず]かに [話|はな]して ください。}}, {{ja|きれいに [書|か]きます。}}\n\nEccezione: {{ja|いい}} → {{ja|よく}}.' },
      { h: 'Cambiamento: くなる / になる', b: '**～くなる** (い-agg.) / **～になる** (な-agg. e nomi) = diventare:\n- {{ja|[寒|さむ]く なりました。}} (è diventato freddo)\n- {{ja|[元気|げんき]に なりました。}} (sono guarito)\n- {{ja|[先生|せんせい]に なりたいです。}} (voglio diventare insegnante)\n\n**～くする / ～にする** = rendere: {{ja|[静|しず]かに して ください。}}' },
      { h: 'Esempio guidato', b: 'Racconta una vacanza: *L’hotel era economico e pulito, il cibo era buono. Faceva freddo, ma il paesaggio era bellissimo. Poi si è fatto caldo.*\n\n→ {{ja|ホテルは [安|やす]くて きれいでした。[料理|りょうり]は おいしかったです。[寒|さむ]かったですが、けしきは きれいでした。それから [暑|あつ]く なりました。}}\n\nControllo: passato degli aggettivi (かった/でした), て per collegare, くなる per il cambiamento.' },
      { h: 'Errori comuni', b: '- *いいかった* → {{ja|よかった。}}\n- *しずかかった* → {{ja|しずかでした。}}\n- *たかいで* → {{ja|たかくて。}}\n- *はやい おきます* → {{ja|はやく おきます。}}\n- *きれく* → {{ja|きれいに。}} (な-aggettivo)\n- *さむになる* → {{ja|さむくなる。}}' },
      { h: 'Riepilogo', b: '- い: かった/くなかった; な/nome: だった/でした.\n- Forma て: くて / で.\n- Avverbi: く / に.\n- くなる / になる: diventare; いい → よく/よかった.' }
    ],
    exercises: [
      mc('Passato di 高い (cortese):', ['たかかったです', 'たかいでした', 'たかくでした', 'たかだったです'], 0),
      mc('«Era tranquillo» (しずか):', ['しずかでした', 'しずかかったです', 'しずくでした', 'しずかいでした'], 0),
      mc('«Economico e buono» (collegato):', ['やすくて おいしいです', 'やすいで おいしいです', 'やすで おいしいです', 'やすくで おいしいです'], 0),
      mc('«Mi alzo presto»:', ['はやく おきます', 'はやい おきます', 'はやに おきます', 'はやで おきます'], 0),
      mc('«È diventato freddo»:', ['さむく なりました', 'さむに なりました', 'さむいに なりました', 'さむかったに なりました'], 0),
      fillJ('Completa: きょうは ___ かったです。(buono: いい)', ['よ'], 'いい → よかった.'),
      listen('きのうは てんきが よかったです。', 'ja', 'Com’era il tempo ieri?', ['Bello', 'Brutto', 'Freddo', 'Piovoso'], 0)
    ],
    test: [
      mc('Passato negativo di おいしい:', ['おいしくなかった', 'おいしいじゃなかった', 'おいしくなかっただ', 'おいしかったない'], 0),
      mc('«静かに話してください» significa…', ['Parli piano, per favore', 'Parli forte', 'Parli subito', 'Non parli'], 0),
      mc('«先生になりたい»', ['Voglio diventare insegnante', 'Sono insegnante', 'Ero insegnante', 'Non sono insegnante'], 0),
      mc('Forma て di しずか:', ['しずかで', 'しずかくて', 'しずかに', 'しずかて'], 0)
    ],
    cards: [card('c1', 'era buono', 'おいしかった', '', 'おいしかった'), card('c2', 'era bello', 'よかった', '', 'よかった'), card('c3', 'diventare freddo', '[寒|さむ]く なる', '', 'さむくなる'), card('c4', 'presto', '[早|はや]く', '', 'はやく'),
      card('c5', 'tranquillamente', '[静|しず]かに', '', 'しずかに'), card('c6', 'paesaggio', 'けしき', '', 'けしき'), card('c7', 'famoso', '[有名|ゆうめい]', '', 'ゆうめい'), card('c8', 'caldo (clima)', '[暑|あつ]い', '', 'あつい')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Vacanza', text: 'りょこうは とても よかったです。ホテルは やすくて きれいでした。りょうりは おいしかったです。さむかったですが、けしきは きれいでした。それから あつく なりました。みんな げんきに なりました。',
      qs: [{ q: 'Com’era l’hotel?', o: ['Economico e pulito', 'Costoso e rumoroso', 'Grande e vecchio', 'Piccolo e freddo'], a: 0, kind: 'explicit' }, { q: 'Com’era il tempo all’inizio?', o: ['Freddo', 'Caldo', 'Piovoso', 'Nuvoloso'], a: 0, kind: 'explicit' }, { q: 'Che cosa è successo dopo?', o: ['È diventato caldo', 'È diventato freddo', 'Ha piovuto', 'Ha nevicato'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ホテルは やすくて きれいでした', lang: 'ja' }, { text: 'さむく なりました', lang: 'ja' }, { text: 'はやく おきます', lang: 'ja' }],
    shadowing: [{ text: 'ホテルは やすくて きれいでした。', lang: 'ja', tip: 'て: breve pausa.' }, { text: 'さむく なりました。', lang: 'ja', tip: 'なりました: legato.' }, { text: 'しずかに はなして ください。', lang: 'ja', tip: 'Cortese: tono morbido.' }],
    speaking: [{ prompt: 'Descrivi un viaggio passato con 4 aggettivi al passato.', model: 'りょこうは たのしかったです。ホテルは きれいでした。りょうりは おいしかったです。てんきは よくなかったです。' }, { prompt: 'Racconta come è cambiato qualcosa (tempo, città, tu).', model: 'ことしは さむく なりました。わたしは にほんごが じょうずに なりました。' }] });

  T({ id: 'jpn-j2-intentions', title: 'Intenzioni e programmi: つもり, よてい, ことにする', summary: 'Esprimere ciò che intendi fare e ciò che è programmato.',
    objectives: ['Dire le intenzioni con ～つもりです', 'Parlare di programmi con ～よていです', 'Usare ～ことに します per decisioni personali'],
    pages: [
      { h: 'Obiettivo', b: 'Parlare dei propri piani è una funzione fondamentale. Il giapponese distingue **intenzione personale** (つもり), **programma stabilito** (予定) e **decisione presa** (ことにする).' },
      { h: '～つもりです', b: '**Forma dizionario + つもりです** = ho intenzione di…\n- {{ja|[来年|らいねん]、[日本|にほん]へ [行|い]く つもりです。}}\n\nNegativo: **ない形 + つもりです** (non ho intenzione di) o **つもりは ありません**:\n- {{ja|[肉|にく]は [食|た]べない つもりです。}}\n\nÈ l’intenzione del parlante, non un programma ufficiale.' },
      { h: '～よていです', b: '**Forma dizionario / nome の + よていです** = è previsto che…\n- {{ja|[明日|あした] [会議|かいぎ]を する [予定|よてい]です。}}\n- {{ja|[来月|らいげつ]の [出張|しゅっちょう]の [予定|よてい]は ありません。}}\n\nIndica **piani organizzati** (orari, eventi).' },
      { h: '～ことにします e ～ことになる', b: '- **～ことにします** = decido di (decisione mia): {{ja|[毎日|まいにち] [運動|うんどう]する ことに しました。}}\n- **～ことになりました** = è stato deciso (da altri/circostanze): {{ja|[来月|らいげつ]、[大阪|おおさか]に [引|ひ]っ[越|こ]す ことに なりました。}}\n\nDifferenza: ことにする = decisione soggettiva; ことになる = decisione oggettiva/esterna.' },
      { h: 'Esempio guidato', b: 'Racconta: *L’anno prossimo ho intenzione di studiare in Giappone. È previsto che parta ad aprile. Ho deciso di imparare un po’ di kanji ogni giorno. Mi è stato detto che andrò a Osaka.*\n\n→ {{ja|[来年|らいねん]、[日本|にほん]で [勉強|べんきょう]する つもりです。[四月|しがつ]に [出発|しゅっぱつ]する [予定|よてい]です。[毎日|まいにち] [漢字|かんじ]を [勉強|べんきょう]する ことに しました。[大阪|おおさか]に [行|い]く ことに なりました。}}' },
      { h: 'Errori comuni', b: '- *つもりです* per programmi ufficiali: usa よてい.\n- *行くつもりでした* ha il senso di «avevo intenzione ma non l’ho fatto».\n- Confondere *ことにする* e *ことになる*.\n- Dimenticare **ない** nel negativo: *行かない つもりです*.\n- Usare つもり per la terza persona senza un contesto adatto.' },
      { h: 'Riepilogo', b: '- つもり: intenzione; よてい: programma; ことにする/ことになる: decisione propria/esterna.\n- Dizionario + つもり/よてい.\n- Negativo: ない形 + つもり.\n- Passato: つもりでした = intenzione non realizzata.' }
    ],
    exercises: [
      mc('«Ho intenzione di andare in Giappone»:', ['にほんへ いく つもりです。', 'にほんへ いった つもりです。', 'にほんへ いきます よていです。', 'にほんへ いこうです。'], 0),
      mc('«È previsto che domani ci sia una riunione»:', ['あした かいぎを する よていです。', 'あした かいぎを した つもりです。', 'あした かいぎを しました。', 'あした かいぎが つもりです。'], 0),
      mc('«Ho deciso di studiare ogni giorno»:', ['まいにち べんきょうする ことに しました。', 'まいにち べんきょうする ことに なりました。', 'まいにち べんきょうする よていでした。', 'まいにち べんきょうした つもり。'], 0),
      mc('«È stato deciso che mi trasferirò a Osaka»:', ['おおさかに ひっこす ことに なりました。', 'おおさかに ひっこす つもりです。', 'おおさかに ひっこす ことにします。', 'おおさかに ひっこさない よていです。'], 0),
      listen('らいねん にほんへ いく つもりです。', 'ja', 'Che cosa intende fare?', ['Andare in Giappone l’anno prossimo', 'Andare quest’anno', 'Non andare', 'Studiare'], 0),
      fillJ('Completa: にくは たべない ___ です。', ['つもり'], 'つもりです.'),
      mc('つもりでした significa…', ['avevo intenzione (ma non l’ho fatto)', 'ho deciso', 'è previsto', 'devo'], 0)
    ],
    test: [
      mc('Quale esprime un programma ufficiale?', ['よてい', 'つもり', 'たい', 'ましょう'], 0),
      mc('«ことにしました» indica…', ['una decisione propria', 'una decisione esterna', 'un obbligo', 'un desiderio'], 0),
      listen('こんどの しゅうまつ ともだちと あう よていです。', 'ja', 'Che cosa è previsto?', ['Incontrare un amico nel weekend', 'Andare in viaggio', 'Studiare', 'Lavorare'], 0),
      mc('Negativo di つもり:', ['いかない つもりです', 'いくない つもりです', 'いけない つもりです', 'いきません つもりです'], 0)
    ],
    cards: [card('c1', 'intenzione', 'つもり', '', 'つもり'), card('c2', 'programma/piano', '[予定|よてい]', '', 'よてい'), card('c3', 'decidere (io)', '～ことにする', '', 'ことにする'), card('c4', 'essere deciso (esterno)', '～ことになる', '', 'ことになる'),
      card('c5', 'trasferirsi', '[引|ひ]っ[越|こ]す', '', 'ひっこす'), card('c6', 'viaggio di lavoro', '[出張|しゅっちょう]', '', 'しゅっちょう'), card('c7', 'riunione', '[会議|かいぎ]', '', 'かいぎ'), card('c8', 'esercizio fisico', '[運動|うんどう]', '', 'うんどう')],
    listening: [{ id: 'l1', lang: 'ja', title: 'I miei piani', text: 'らいねん にほんで べんきょうする つもりです。しがつに しゅっぱつする よていです。まいにち かんじを べんきょうする ことに しました。かいしゃの しゅっちょうは ありません。らいげつ おおさかに いく ことに なりました。',
      qs: [{ q: 'Che cosa intende fare l’anno prossimo?', o: ['Studiare in Giappone', 'Lavorare in Italia', 'Viaggiare in Cina', 'Insegnare'], a: 0, kind: 'explicit' }, { q: 'Quando è previsto che parta?', o: ['In aprile', 'In agosto', 'In gennaio', 'In dicembre'], a: 0, kind: 'explicit' }, { q: 'Che cosa ha deciso di fare ogni giorno?', o: ['Studiare i kanji', 'Allenarsi', 'Cucinare', 'Leggere notizie'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'らいねん にほんへ いく つもりです', lang: 'ja' }, { text: 'あした かいぎを する よていです', lang: 'ja' }, { text: 'まいにち うんどうする ことに しました', lang: 'ja' }],
    shadowing: [{ text: 'らいねん にほんへ いく つもりです。', lang: 'ja', tip: 'つもり: つ・も・り.' }, { text: 'あした かいぎを する よていです。', lang: 'ja', tip: 'Ritmo regolare.' }, { text: 'ことに しました。', lang: 'ja', tip: 'Tono deciso.' }],
    speaking: [{ prompt: 'Racconta i tuoi piani per l’anno prossimo usando つもり, よてい e ことにする.', model: 'らいねん にほんへ いく つもりです。しがつに しゅっぱつする よていです。まいにち にほんごを べんきょうする ことに しました。' }, { prompt: 'Dì qualcosa che non hai intenzione di fare.', model: 'あしたは うちで やすむ つもりです。しごとは しない つもりです。' }] });

  T({ id: 'jpn-j2-kanji-2', title: 'Kanji 2: verbi e aggettivi quotidiani', summary: '45 kanji di uso quotidiano per verbi, aggettivi e luoghi.',
    objectives: ['Riconoscere 45 kanji di verbi e aggettivi frequenti', 'Leggere le parole con okurigana', 'Distinguere kanji simili'],
    pages: [
      { h: 'Obiettivo', b: 'Dopo numeri e giorni, i kanji più utili sono quelli dei **verbi e aggettivi quotidiani**. Imparerai a riconoscerli con le loro **okurigana** (kana che seguono) per capire la forma della parola.' },
      { h: 'Verbi di base', b: '- {{ja|[食|た]べる}} mangiare, {{ja|[飲|の]む}} bere, {{ja|[見|み]る}} guardare, {{ja|[聞|き]く}} ascoltare, {{ja|[読|よ]む}} leggere\n- {{ja|[書|か]く}} scrivere, {{ja|[話|はな]す}} parlare, {{ja|[言|い]う}} dire, {{ja|[買|か]う}} comprare, {{ja|[行|い]く}} andare\n- {{ja|[来|く]る}} venire, {{ja|[帰|かえ]る}} tornare, {{ja|[出|で]る}} uscire, {{ja|[入|はい]る}} entrare, {{ja|[会|あ]う}} incontrare, {{ja|[休|やす]む}} riposare\n\nLe **okurigana** (る, む, く…) mostrano la forma e l’inizio della coniugazione.' },
      { h: 'Aggettivi di base', b: '- {{ja|[大|おお]きい}} grande / {{ja|[小|ちい]さい}} piccolo\n- {{ja|[高|たか]い}} alto/costoso / {{ja|[安|やす]い}} economico\n- {{ja|[新|あたら]しい}} nuovo / {{ja|[古|ふる]い}} vecchio\n- {{ja|[長|なが]い}} lungo / {{ja|[早|はや]い}} presto / {{ja|[多|おお]い}} molti / {{ja|[少|すく]ない}} pochi\n- {{ja|[好|す]き}} piace / {{ja|[元気|げんき]}} in forma / {{ja|[有名|ゆうめい]}} famoso' },
      { h: 'Luoghi e cose', b: '- {{ja|[学校|がっこう]}} scuola, {{ja|[会社|かいしゃ]}} azienda, {{ja|[店|みせ]}} negozio, {{ja|[家|いえ]}} casa\n- {{ja|[電車|でんしゃ]}} treno (elettricità + veicolo), {{ja|[車|くるま]}} auto, {{ja|[駅|えき]}} stazione\n- {{ja|[友達|ともだち]}} amico, {{ja|[名前|なまえ]}} nome, {{ja|[今|いま]}} ora, {{ja|[何|なに]}} che cosa' },
      { h: 'Kanji simili', b: 'Attenzione alle coppie:\n- {{ja|[大|だい]}} (grande) / {{ja|[太|ふと]}} (spesso) / {{ja|[犬|いぬ]}} (cane)\n- {{ja|[人|ひと]}} (persona) / {{ja|[入|い]}} (entrare)\n- {{ja|[日|ひ]}} (sole) / {{ja|[目|め]}} (occhio) / {{ja|[白|しろ]}} (bianco)\n- {{ja|[木|き]}} (albero) / {{ja|[本|ほん]}} (libro)\n\nTrucco: scrivi sempre la parola intera e il suo significato.' },
      { h: 'Esempio guidato', b: 'Leggi: {{ja|[友達|ともだち]と [新|あたら]しい [店|みせ]で [食|た]べました。[安|やす]くて おいしかったです。}}\n\n→ *Ho mangiato con un amico in un negozio nuovo. Era economico e buono.*\n\nControllo: riconosco 友達, 新しい, 店, 食べる, 安い?' },
      { h: 'Errori comuni', b: '- Dimenticare le okurigana: 食 da solo non è «mangiare».\n- Leggere 来 sempre come *く*: き/こ/らい.\n- Confondere 大 e 犬.\n- Scrivere kanji non sicuri: usa hiragana.\n- Pensare che ogni kanji abbia una sola lettura.' },
      { h: 'Riepilogo', b: '- 45 kanji di verbi, aggettivi, luoghi.\n- Okurigana mostrano la forma.\n- Kanji simili: 大/太/犬, 人/入.\n- Impara parole intere.' }
    ],
    exercises: [
      mc('Come si legge 食べる?', ['たべる', 'のむる', 'みる', 'きく'], 0),
      mc('Come si legge 新しい?', ['あたらしい', 'しんしい', 'ふるい', 'あたしい'], 0),
      mc('Che cosa significa 安い?', ['economico', 'alto', 'nuovo', 'vecchio'], 0),
      mc('Come si legge 友達?', ['ともだち', 'ゆうたつ', 'ともたち', 'ゆうだち'], 0),
      mc('Come si legge 読む?', ['よむ', 'かく', 'のむ', 'みる'], 0),
      fillJ('Come si legge 会社?', ['かいしゃ', 'kaisha'], 'かいしゃ.'),
      mc('Qual è il kanji di «cane»?', ['犬', '大', '太', '天'], 0)
    ],
    test: [
      mc('Come si legge 帰る?', ['かえる', 'いえる', 'きる', 'もどる'], 0),
      mc('«高い» può significare…', ['alto o costoso', 'solo alto', 'solo economico', 'piccolo'], 0),
      mc('Come si legge 休む?', ['やすむ', 'いこう', 'きゅうむ', 'あそむ'], 0),
      mc('Come si legge 名前?', ['なまえ', 'めいぜん', 'なぜん', 'なまし'], 0)
    ],
    cards: [card('c1', 'mangiare', '[食|た]べる', '', 'たべる'), card('c2', 'leggere', '[読|よ]む', '', 'よむ'), card('c3', 'scrivere', '[書|か]く', '', 'かく'), card('c4', 'tornare', '[帰|かえ]る', '', 'かえる'),
      card('c5', 'nuovo', '[新|あたら]しい', '', 'あたらしい'), card('c6', 'economico', '[安|やす]い', '', 'やすい'), card('c7', 'amico', '[友達|ともだち]', '', 'ともだち'), card('c8', 'nome', '[名前|なまえ]', '', 'なまえ')],
    listening: [{ id: 'l1', lang: 'ja', title: 'Una giornata', text: 'あさ ごはんを たべて、かいしゃへ いきます。ともだちと あたらしい みせで ひるごはんを たべました。やすくて おいしかったです。うちに かえって ほんを よみます。おやすみなさい。',
      qs: [{ q: 'Con chi pranza?', o: ['Con un amico', 'Da solo', 'Con la famiglia', 'Con un collega'], a: 0, kind: 'explicit' }, { q: 'Com’era il locale?', o: ['Economico e buono', 'Costoso e cattivo', 'Vecchio', 'Rumoroso'], a: 0, kind: 'explicit' }, { q: 'Che cosa fa a casa?', o: ['Legge un libro', 'Guarda la TV', 'Cucina', 'Dorme subito'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'ともだちと たべました', lang: 'ja' }, { text: 'あたらしい みせは やすいです', lang: 'ja' }, { text: 'うちに かえって ほんを よみます', lang: 'ja' }],
    shadowing: [{ text: 'ともだちと あたらしい みせで たべました。', lang: 'ja', tip: 'あたらしい: a・ta・ra・shi・i.' }, { text: 'やすくて おいしかったです。', lang: 'ja', tip: 'て: pausa breve.' }, { text: 'うちに かえって ほんを よみます。', lang: 'ja', tip: 'Sequenza con て.' }],
    speaking: [{ prompt: 'Racconta in tre frasi che cosa hai fatto oggi usando verbi del lessico.', model: 'あさ ごはんを たべました。ともだちに あいました。うちで ほんを よみました。' }, { prompt: 'Descrivi un negozio con almeno tre aggettivi.', model: 'あたらしくて きれいな みせです。やすくて おいしいです。ゆうめいです。' }],
    reading: [{ id: 'r1', title: 'Un messaggio', text: '[今日|きょう]は [友達|ともだち]と [新|あたら]しい [店|みせ]で [食|た]べました。[安|やす]くて おいしかったです。[会社|かいしゃ]に [帰|かえ]って、[本|ほん]を [読|よ]みます。',
      qs: [{ q: 'Dove ha mangiato?', o: ['In un negozio nuovo', 'A casa', 'In ufficio', 'In stazione'], a: 0 }, { q: 'Com’era il cibo?', o: ['Economico e buono', 'Caro', 'Cattivo', 'Freddo'], a: 0 }, { q: 'Che cosa farà dopo?', o: ['Leggerà un libro', 'Guarderà un film', 'Dormirà', 'Cucinerà'], a: 0 }] }] });

  T({ id: 'jpn-j2-travel-situations', title: 'Situazioni di viaggio: hotel, biglietti, problemi', summary: 'Frasi pratiche per hotel, stazione, ristorante e aiuto.',
    objectives: ['Fare check-in, prenotare e chiedere informazioni in hotel', 'Comprare un biglietto e capire annunci semplici', 'Chiedere aiuto e spiegare un problema'],
    pages: [
      { h: 'Obiettivo', b: 'Questa lezione raccoglie le **frasi pratiche** per un viaggio in Giappone: hotel, stazione, ristorante, problemi. Sono formule fisse da memorizzare e adattare.' },
      { h: 'In hotel', b: '- {{ja|[予約|よやく]を して います。ロッシです。}} — Ho una prenotazione a nome Rossi.\n- {{ja|チェックインを おねがいします。}} / {{ja|チェックアウトは [何時|なんじ]ですか。}}\n- {{ja|[朝食|ちょうしょく]は [何時|なんじ]からですか。}} — Colazione dalle che ora?\n- {{ja|[部屋|へや]の [鍵|かぎ]を おねがいします。}}\n- {{ja|Wi-Fiは ありますか。}} / {{ja|[荷物|にもつ]を [預|あず]かって もらえますか。}}' },
      { h: 'Alla stazione e sui mezzi', b: '- {{ja|[京都|きょうと]まで [一枚|いちまい] ください。}} — Un biglietto per Kyoto.\n- {{ja|[片道|かたみち]ですか、[往復|おうふく]ですか。}} — Andata o andata e ritorno?\n- {{ja|この [電車|でんしゃ]は [大阪|おおさか]に [行|い]きますか。}}\n- {{ja|[次|つぎ]の [駅|えき]は なんですか。}}\n- {{ja|[乗|の]り[換|か]えは どこですか。}} — Dove si cambia?' },
      { h: 'Problemi e aiuto', b: '- {{ja|すみません、[助|たす]けて ください。}} (aiuto)\n- {{ja|[財布|さいふ]を [無|な]くしました。}} (ho perso il portafoglio)\n- {{ja|[道|みち]に [迷|まよ]いました。}} (mi sono perso)\n- {{ja|[気分|きぶん]が [悪|わる]いです。}} (non mi sento bene)\n- {{ja|[病院|びょういん]は どこですか。}} / {{ja|[警察|けいさつ]を [呼|よ]んで ください。}}\n- {{ja|もう [一度|いちど] [言|い]って ください。}} (ripeta, per favore)' },
      { h: 'Frasi di cortesia utili', b: '- {{ja|すみません。}} (attirare l’attenzione / scusi)\n- {{ja|おねがいします。}} (per favore, richiesta)\n- {{ja|[英語|えいご]は [話|はな]せますか。}} (parla inglese?)\n- {{ja|[日本語|にほんご]は すこし [話|はな]せます。}}\n- {{ja|ゆっくり [話|はな]して ください。}} (parli lentamente)\n- {{ja|わかりません。}} / {{ja|わかりました。}}' },
      { h: 'Esempio guidato', b: 'Scena: arrivi in hotel in ritardo e hai perso il portafoglio.\n\n→ {{ja|すみません、[予約|よやく]を して います。ロッシです。[遅|おそ]く なって すみません。[財布|さいふ]を [無|な]くしました。[警察|けいさつ]は どこですか。}}\n\nRisposta tipica: {{ja|だいじょうぶですか。[警察|けいさつ]は [駅|えき]の [前|まえ]に あります。}}' },
      { h: 'Errori comuni', b: '- *わたしは ロッシです よやく* → {{ja|よやくを しています。ロッシです。}}\n- Dire solo *ハロー*: meglio {{ja|こんにちは / すみません}}.\n- *えいごが わかりますか* invece di {{ja|えいごは はなせますか}}.\n- Non dire *おねがいします* con le richieste.\n- Parlare troppo velocemente: usa *ゆっくり*.' },
      { h: 'Riepilogo', b: '- Hotel: 予約, チェックイン/アウト, 朝食.\n- Stazione: 片道/往復, 乗り換え.\n- Aiuto: 助けてください, 無くしました, 迷いました.\n- Cortesia: すみません, おねがいします, ゆっくり.' }
    ],
    exercises: [
      mc('«Ho una prenotazione»:', ['よやくを しています。', 'よやくを たべます。', 'よやくが いきます。', 'よやくで います。'], 0),
      mc('«Andata e ritorno» si dice…', ['おうふく', 'かたみち', 'いっぱく', 'のりかえ'], 0),
      mc('«Ho perso il portafoglio»:', ['さいふを なくしました。', 'さいふを かいました。', 'さいふが あります。', 'さいふを たべました。'], 0),
      listen('チェックアウトは なんじですか。', 'ja', 'Che cosa chiede?', ['L’ora del check-out', 'Il prezzo', 'Dov’è il bagno', 'La colazione'], 0),
      mc('«Parli lentamente, per favore»:', ['ゆっくり はなして ください。', 'ゆっくり たべて ください。', 'ゆっくり ねて ください。', 'ゆっくり いって。'], 0),
      mc('«Dove si cambia treno?»', ['のりかえは どこですか。', 'えきは どこですか。', 'いくらですか。', 'なんじですか。'], 0),
      fillJ('Completa: すみません、___ ください。(aiutare: たすける)', ['たすけて'], 'たすけて ください.')
    ],
    test: [
      mc('«Colazione» in hotel:', ['ちょうしょく', 'ゆうしょく', 'ひるごはん', 'のみもの'], 0),
      mc('«Mi sono perso»:', ['みちに まよいました。', 'みちを たべました。', 'みちが すきです。', 'みちで ねました。'], 0),
      listen('えいごは はなせますか。', 'ja', 'Che cosa chiede?', ['Se parli inglese', 'Se parli giapponese', 'Dov’è la stazione', 'Quanto costa'], 0),
      mc('«Un biglietto per Kyoto»:', ['きょうとまで いちまい ください。', 'きょうとへ いちにん。', 'きょうとが いちまい。', 'きょうとで いちまい を。'], 0)
    ],
    cards: [card('c1', 'prenotazione', '[予約|よやく]', '', 'よやく'), card('c2', 'andata', '[片道|かたみち]', '', 'かたみち'), card('c3', 'andata e ritorno', '[往復|おうふく]', '', 'おうふく'), card('c4', 'cambiare (treno)', '[乗|の]り[換|か]え', '', 'のりかえ'),
      card('c5', 'portafoglio', '[財布|さいふ]', '', 'さいふ'), card('c6', 'perdere', '[無|な]くす', '', 'なくす'), card('c7', 'polizia', '[警察|けいさつ]', '', 'けいさつ'), card('c8', 'ospedale', '[病院|びょういん]', '', 'びょういん')],
    listening: [{ id: 'l1', lang: 'ja', title: 'All’hotel', text: 'こんばんは。よやくを して います。ロッシです。おくれて すみません。ちょうしょくは なんじからですか。ななじからです。チェックアウトは なんじですか。じゅうじまでです。わかりました。ありがとうございます。',
      qs: [{ q: 'A nome di chi è la prenotazione?', o: ['Rossi', 'Tanaka', 'Marco', 'Suzuki'], a: 0, kind: 'explicit' }, { q: 'A che ora inizia la colazione?', o: ['Alle 7', 'Alle 8', 'Alle 10', 'Alle 6'], a: 0, kind: 'explicit' }, { q: 'Fino a che ora è il check-out?', o: ['Le 10', 'Le 12', 'Le 7', 'Le 9'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'よやくを して います', lang: 'ja' }, { text: 'さいふを なくしました', lang: 'ja' }, { text: 'ゆっくり はなして ください', lang: 'ja' }],
    shadowing: [{ text: 'すみません、よやくを して います。', lang: 'ja', tip: 'Tono cortese.' }, { text: 'チェックアウトは なんじですか。', lang: 'ja', tip: 'Domanda: か ascendente.' }, { text: 'ゆっくり はなして ください。', lang: 'ja', tip: 'Richiesta gentile.' }],
    speaking: [{ prompt: 'Fai il check-in in hotel e chiedi la colazione.', model: 'すみません、よやくを して います。ロッシです。ちょうしょくは なんじからですか。' }, { prompt: 'Spiega che hai perso qualcosa e chiedi aiuto.', model: 'すみません、さいふを なくしました。けいさつは どこですか。たすけて ください。' }] });
})(window.ST = window.ST || {});
