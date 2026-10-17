(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);
  A('cul-sistema-solare', {
    title: { t: '[太陽系|たいようけい]', it: 'Il sistema solare' },
    sum: [
      { t: '⟦[太陽系|たいようけい]⟧は、[太陽|たいよう]とその[周|まわ]りを[回|まわ]る[天体|てんたい]の[集|あつ]まりです。', it: 'Il sistema solare è l’insieme del Sole e dei corpi che gli orbitano attorno.' },
      { t: '[惑星|わくせい]は[八|やっ]つあります。', it: 'I pianeti sono otto.' },
      { t: '⟦[太陽|たいよう]⟧は、⟦[核融合|かくゆうごう]⟧でエネルギーを[出|だ]す[星|ほし]です。', it: 'Il Sole è una stella che produce energia con la fusione nucleare.' },
      { t: '⟦[天文単位|てんもんたんい]⟧は、[地球|ちきゅう]と[太陽|たいよう]の[平均|へいきん]の[距離|きょり]です。', it: 'L’unità astronomica è la distanza media tra la Terra e il Sole.' },
      { t: '[光|ひかり]は、[太陽|たいよう]から[地球|ちきゅう]まで[約|やく][八分|はっぷん]かかります。', it: 'La luce impiega circa otto minuti dal Sole alla Terra.' },
      { t: '⟦[月|つき]の[満|み]ち[欠|か]け⟧は、[太陽|たいよう]と[地球|ちきゅう]と[月|つき]の[位置|いち]で[決|き]まります。', it: 'Le fasi lunari dipendono dalla posizione di Sole, Terra e Luna.' },
      { t: '⟦[季節|きせつ]⟧は、[地球|ちきゅう]の[軸|じく]の[傾|かたむ]きで[生|う]まれます。', it: 'Le stagioni nascono dall’inclinazione dell’asse terrestre.' }
    ],
    gloss: [
      { w: '太陽系', r: 'たいようけい', it: 'sistema solare' },
      { w: '太陽', r: 'たいよう', it: 'Sole' },
      { w: '核融合', r: 'かくゆうごう', it: 'fusione nucleare' },
      { w: '天文単位', r: 'てんもんたんい', it: 'unità astronomica' },
      { w: '月の満ち欠け', r: 'つきのみちかけ', it: 'fasi lunari' },
      { w: '季節', r: 'きせつ', it: 'stagione' },
      { w: '惑星', r: 'わくせい', it: 'pianeta' },
      { w: '小惑星', r: 'しょうわくせい', it: 'asteroide' },
      { w: '彗星', r: 'すいせい', it: 'cometa' }
    ]
  });

  A('cul-stelle-galassie-cosmologia', {
    title: { t: '[星|ほし]と[銀河|ぎんが]と[宇宙|うちゅう]', it: 'Stelle, galassie e cosmologia' },
    sum: [
      { t: '⟦[光年|こうねん]⟧は、[光|ひかり]が[一年|いちねん]で[進|すす]む[距離|きょり]です。', it: 'L’anno luce è la distanza percorsa dalla luce in un anno.' },
      { t: '⟦[恒星|こうせい]⟧は、[核融合|かくゆうごう]が[起|お]こるプラズマの[球|たま]です。', it: 'Una stella è una sfera di plasma in cui avviene la fusione nucleare.' },
      { t: '[星|ほし]の[一生|いっしょう]は、⟦[質量|しつりょう]⟧によって[決|き]まります。', it: 'La vita di una stella dipende dalla sua massa.' },
      { t: '⟦ブラックホール⟧は、[光|ひかり]さえ[逃|に]げられない[場所|ばしょ]です。', it: 'Un buco nero è una regione da cui nemmeno la luce può sfuggire.' },
      { t: '⟦[銀河|ぎんが]⟧は、[星|ほし]やガスが[集|あつ]まった[大|おお]きな[集団|しゅうだん]です。', it: 'Una galassia è un grande insieme di stelle e gas.' },
      { t: '⟦[宇宙|うちゅう]の[膨張|ぼうちょう]⟧で、[遠|とお]い[銀河|ぎんが]ほど[速|はや]く[離|はな]れます。', it: 'Con l’espansione dell’universo, le galassie più lontane si allontanano più in fretta.' },
      { t: '⟦ビッグバン⟧は、[熱|あつ]く[密度|みつど]の[高|たか]い[宇宙|うちゅう]が[広|ひろ]がってきたというモデルです。', it: 'Il Big Bang è il modello di un universo caldo e denso che si è espanso.' }
    ],
    gloss: [
      { w: '光年', r: 'こうねん', it: 'anno luce' },
      { w: '恒星', r: 'こうせい', it: 'stella' },
      { w: '質量', r: 'しつりょう', it: 'massa' },
      { w: 'ブラックホール', r: 'ぶらっくほーる', it: 'buco nero' },
      { w: '銀河', r: 'ぎんが', it: 'galassia' },
      { w: '宇宙の膨張', r: 'うちゅうのぼうちょう', it: 'espansione dell’universo' },
      { w: 'ビッグバン', r: 'びっぐばん', it: 'Big Bang' },
      { w: '星雲', r: 'せいうん', it: 'nebulosa' },
      { w: '赤方偏移', r: 'せきほうへんい', it: 'redshift' },
      { w: '天の川', r: 'あまのがわ', it: 'Via Lattea' }
    ]
  });

  A('cul-scienze-della-terra', {
    title: { t: '[地球科学|ちきゅうかがく]', it: 'Scienze della Terra' },
    sum: [
      { t: '[地球|ちきゅう]の[内部|ないぶ]は、⟦[地殻|ちかく]⟧、マントル、⟦[核|かく]⟧の[層|そう]でできています。', it: 'L’interno della Terra è fatto di strati: crosta, mantello e nucleo.' },
      { t: '⟦プレートテクトニクス⟧では、[表面|ひょうめん]がプレートに[分|わ]かれ、ゆっくり[動|うご]きます。', it: 'Nella tettonica a placche la superficie è divisa in placche che si muovono lentamente.' },
      { t: 'プレートの[境|さかい]では、[激|はげ]しい[現象|げんしょう]が[多|おお]く[起|お]こります。', it: 'Ai margini delle placche avvengono molti dei fenomeni più intensi.' },
      { t: '⟦[地震|じしん]⟧は、⟦[断層|だんそう]⟧にたまったエネルギーが[急|きゅう]に[出|で]て[起|お]こります。', it: 'Un terremoto nasce quando l’energia accumulata lungo una faglia si libera all’improvviso.' },
      { t: '⟦[火山|かざん]⟧から、マグマやガスや[灰|はい]が[出|で]ます。', it: 'Dal vulcano escono magma, gas e ceneri.' },
      { t: '⟦[岩石|がんせき]⟧は、⟦[火成岩|かせいがん]⟧、⟦[堆積岩|たいせきがん]⟧、⟦[変成岩|へんせいがん]⟧の[三|みっ]つに[分|わ]けられます。', it: 'Le rocce si dividono in tre famiglie: ignee, sedimentarie e metamorfiche.' },
      { t: '⟦[温室効果|おんしつこうか]⟧は、[大気|たいき]が[地球|ちきゅう]を[暖|あたた]かく[保|たも]つはたらきです。', it: 'L’effetto serra è l’azione con cui l’atmosfera tiene calda la Terra.' }
    ],
    gloss: [
      { w: '地殻', r: 'ちかく', it: 'crosta' },
      { w: '核', r: 'かく', it: 'nucleo' },
      { w: 'プレートテクトニクス', r: 'ぷれーとてくとにくす', it: 'tettonica a placche' },
      { w: '地震', r: 'じしん', it: 'terremoto' },
      { w: '断層', r: 'だんそう', it: 'faglia' },
      { w: '火山', r: 'かざん', it: 'vulcano' },
      { w: '岩石', r: 'がんせき', it: 'roccia' },
      { w: '火成岩', r: 'かせいがん', it: 'roccia ignea' },
      { w: '堆積岩', r: 'たいせきがん', it: 'roccia sedimentaria' },
      { w: '変成岩', r: 'へんせいがん', it: 'roccia metamorfica' },
      { w: '温室効果', r: 'おんしつこうか', it: 'effetto serra' }
    ]
  });

  A('cul-filosofia-antica', {
    title: { t: '[古代|こだい]の[哲学|てつがく]', it: 'Filosofia antica' },
    sum: [
      { t: '⟦[哲学|てつがく]⟧は、[知恵|ちえ]を[愛|あい]することを[意味|いみ]します。', it: 'La filosofia significa amore per la sapienza.' },
      { t: '[神話|しんわ]だけに[頼|たよ]らず、[理由|りゆう]を[考|かんが]えることから[始|はじ]まりました。', it: 'Nacque dal cercare spiegazioni razionali, senza affidarsi solo al mito.' },
      { t: 'ソクラテスより[前|まえ]の[哲学者|てつがくしゃ]は、⟦アルケー⟧、つまり[万物|ばんぶつ]の[根源|こんげん]を[探|さが]しました。', it: 'I filosofi prima di Socrate cercarono l’archè, cioè il principio originario di tutto.' },
      { t: '⟦ソクラテス⟧は、[人々|ひとびと]に[質問|しつもん]して、[本当|ほんとう]に[知|し]っているかを[確|たし]かめました。', it: 'Socrate interrogava la gente per verificare se sapesse davvero.' },
      { t: '⟦プラトン⟧は、[永遠|えいえん]の⟦イデア⟧の[世界|せかい]があると[考|かんが]えました。', it: 'Platone pensava che esistesse un mondo eterno delle idee.' },
      { t: '⟦アリストテレス⟧は、[論理|ろんり]で⟦[三段論法|さんだんろんぽう]⟧を[扱|あつか]いました。', it: 'Aristotele trattò il sillogismo nella sua logica.' },
      { t: '⟦ヘレニズム⟧[時代|じだい]の[哲学|てつがく]は、[心|こころ]の[平静|へいせい]を[求|もと]めました。', it: 'La filosofia dell’età ellenistica cercava la serenità dell’animo.' }
    ],
    gloss: [
      { w: '哲学', r: 'てつがく', it: 'filosofia' },
      { w: '神話', r: 'しんわ', it: 'mito' },
      { w: 'アルケー', r: 'あるけー', it: 'archè, principio originario' },
      { w: 'ソクラテス', r: 'そくらてす', it: 'Socrate' },
      { w: 'プラトン', r: 'ぷらとん', it: 'Platone' },
      { w: 'イデア', r: 'いであ', it: 'idea (essenza eterna)' },
      { w: 'アリストテレス', r: 'ありすとてれす', it: 'Aristotele' },
      { w: '三段論法', r: 'さんだんろんぽう', it: 'sillogismo' },
      { w: 'ヘレニズム', r: 'へれにずむ', it: 'ellenismo' },
      { w: 'エピクロス派', r: 'えぴくろすは', it: 'epicureismo' },
      { w: 'ストア派', r: 'すとあは', it: 'stoicismo' }
    ]
  });

  A('cul-filosofia-medievale-moderna', {
    title: { t: '[中世|ちゅうせい]から[近代|きんだい]の[哲学|てつがく]', it: 'Filosofia medievale e moderna' },
    sum: [
      { t: '[中世|ちゅうせい]の[哲学|てつがく]は、⟦[信仰|しんこう]⟧と⟦[理性|りせい]⟧の[関係|かんけい]を[問|と]いました。', it: 'La filosofia medievale si interrogò sul rapporto tra fede e ragione.' },
      { t: '⟦アウグスティヌス⟧は、プラトンの[考|かんが]えをキリスト[教|きょう]に[結|むす]びつけました。', it: 'Agostino collegò il pensiero di Platone al cristianesimo.' },
      { t: '⟦トマス・アクィナス⟧は、アリストテレスをキリスト[教|きょう]の[神学|しんがく]に[取|と]り[入|い]れました。', it: 'Tommaso d’Aquino assimilò Aristotele nella teologia cristiana.' },
      { t: 'トマスは、[信仰|しんこう]と[理性|りせい]は[矛盾|むじゅん]しないと[考|かんが]えました。', it: 'Tommaso riteneva che fede e ragione non si contraddicano.' },
      { t: '⟦デカルト⟧は、すべてを[疑|うたが]い、「[我思|われおも]う、ゆえに[我|われ]あり」に[達|たっ]しました。', it: 'Cartesio dubitò di tutto e giunse a «penso, dunque sono».' },
      { t: '⟦[合理論|ごうりろん]⟧は[理性|りせい]を、⟦[経験論|けいけんろん]⟧は[経験|けいけん]を[重|おも]んじました。', it: 'Il razionalismo diede peso alla ragione, l’empirismo all’esperienza.' },
      { t: '⟦ヒューム⟧は、[未来|みらい]を[信|しん]じるのは[習慣|しゅうかん]だと[考|かんが]えました。', it: 'Hume pensava che crediamo nel futuro per abitudine.' }
    ],
    gloss: [
      { w: '信仰', r: 'しんこう', it: 'fede' },
      { w: '理性', r: 'りせい', it: 'ragione' },
      { w: 'アウグスティヌス', r: 'あうぐすてぃぬす', it: 'Agostino' },
      { w: 'トマス・アクィナス', r: 'とますあくぃなす', it: 'Tommaso d’Aquino' },
      { w: 'デカルト', r: 'でかると', it: 'Cartesio' },
      { w: '合理論', r: 'ごうりろん', it: 'razionalismo' },
      { w: '経験論', r: 'けいけんろん', it: 'empirismo' },
      { w: 'ヒューム', r: 'ひゅーむ', it: 'Hume' },
      { w: '神学', r: 'しんがく', it: 'teologia' },
      { w: '習慣', r: 'しゅうかん', it: 'abitudine' }
    ]
  });

  A('cul-illuminismo-kant', {
    title: { t: '[啓蒙思想|けいもうしそう]とカント', it: 'Illuminismo e Kant' },
    sum: [
      { t: '⟦[啓蒙思想|けいもうしそう]⟧は、[十八世紀|じゅうはちせいき]のヨーロッパの[思想|しそう]です。', it: 'L’Illuminismo è il movimento di pensiero europeo del Settecento.' },
      { t: '[理性|りせい]と[進歩|しんぽ]を[信|しん]じ、⟦[寛容|かんよう]⟧を[大切|たいせつ]にしました。', it: 'Aveva fiducia nella ragione e nel progresso e dava valore alla tolleranza.' },
      { t: '⟦モンテスキュー⟧は、⟦[三権分立|さんけんぶんりつ]⟧を[唱|とな]えました。', it: 'Montesquieu teorizzò la separazione dei poteri.' },
      { t: '⟦カント⟧は、[啓蒙|けいもう]を「⟦[未成年状態|みせいねんじょうたい]⟧から[出|で]ること」と[言|い]いました。', it: 'Kant definì l’Illuminismo come l’uscita dallo stato di minorità.' },
      { t: 'カントは、[認識|にんしき]には[経験|けいけん]と⟦ア・プリオリ⟧な[形式|けいしき]が[必要|ひつよう]だと[考|かんが]えました。', it: 'Kant riteneva che la conoscenza richieda sia l’esperienza sia forme a priori.' },
      { t: '⟦[定言命法|ていげんめいほう]⟧は、[無条件|むじょうけん]に[従|したが]う[道徳|どうとく]の[命令|めいれい]です。', it: 'L’imperativo categorico è un comando morale che vale senza condizioni.' },
      { t: 'カントによれば、[人間|にんげん]を[手段|しゅだん]だけにしてはいけません。', it: 'Secondo Kant, non si deve trattare l’umanità solo come mezzo.' }
    ],
    gloss: [
      { w: '啓蒙思想', r: 'けいもうしそう', it: 'Illuminismo' },
      { w: '寛容', r: 'かんよう', it: 'tolleranza' },
      { w: 'モンテスキュー', r: 'もんてすきゅー', it: 'Montesquieu' },
      { w: '三権分立', r: 'さんけんぶんりつ', it: 'separazione dei poteri' },
      { w: 'カント', r: 'かんと', it: 'Kant' },
      { w: '未成年状態', r: 'みせいねんじょうたい', it: 'stato di minorità' },
      { w: 'ア・プリオリ', r: 'あぷりおり', it: 'a priori' },
      { w: '定言命法', r: 'ていげんめいほう', it: 'imperativo categorico' },
      { w: '理性', r: 'りせい', it: 'ragione' },
      { w: '進歩', r: 'しんぽ', it: 'progresso' }
    ]
  });

  A('cul-filosofia-ottocento', {
    title: { t: '[十九世紀|じゅうきゅうせいき]の[哲学|てつがく]', it: 'Filosofia dell’Ottocento' },
    sum: [
      { t: '[十九世紀|じゅうきゅうせいき]の[哲学|てつがく]は、[革命|かくめい]と[産業|さんぎょう]と[科学|かがく]の[変化|へんか]に[向|む]き[合|あ]いました。', it: 'La filosofia dell’Ottocento si confrontò con rivoluzioni, industria e scienze.' },
      { t: '⟦ヘーゲル⟧は、[歴史|れきし]の[中|なか]で⟦[精神|せいしん]⟧が[自分|じぶん]を[知|し]っていくと[考|かんが]えました。', it: 'Hegel pensava che lo Spirito prenda coscienza di sé nella storia.' },
      { t: '⟦ショーペンハウアー⟧は、[世界|せかい]の[本質|ほんしつ]を[盲目|もうもく]の[意志|いし]と[見|み]ました。', it: 'Schopenhauer vedeva l’essenza del mondo in una volontà cieca.' },
      { t: '⟦キルケゴール⟧は、[個人|こじん]と[現実|げんじつ]の[選択|せんたく]を[大切|たいせつ]にしました。', it: 'Kierkegaard difese il singolo e le sue scelte reali.' },
      { t: '⟦マルクス⟧は、[経済|けいざい]の[仕組|しく]みが[社会|しゃかい]を[条件|じょうけん]づけると[考|かんが]えました。', it: 'Marx pensava che la struttura economica condizioni la società.' },
      { t: '⟦[実証主義|じっしょうしゅぎ]⟧は、[科学|かがく]を[唯一|ゆいいつ]の[有効|ゆうこう]な[知識|ちしき]と[見|み]ます。', it: 'Il positivismo vede nella scienza l’unico sapere valido.' },
      { t: '⟦ニーチェ⟧は、[価値|かち]は[人間|にんげん]が[作|つく]ったもので、[試|ため]されるべきだと[考|かんが]えました。', it: 'Nietzsche riteneva che i valori siano costruzioni umane da mettere alla prova.' }
    ],
    gloss: [
      { w: 'ヘーゲル', r: 'へーげる', it: 'Hegel' },
      { w: '精神', r: 'せいしん', it: 'Spirito' },
      { w: 'ショーペンハウアー', r: 'しょーぺんはうあー', it: 'Schopenhauer' },
      { w: 'キルケゴール', r: 'きるけごーる', it: 'Kierkegaard' },
      { w: 'マルクス', r: 'まるくす', it: 'Marx' },
      { w: '実証主義', r: 'じっしょうしゅぎ', it: 'positivismo' },
      { w: 'ニーチェ', r: 'にーちぇ', it: 'Nietzsche' },
      { w: '意志', r: 'いし', it: 'volontà' },
      { w: '疎外', r: 'そがい', it: 'alienazione' },
      { w: '価値', r: 'かち', it: 'valore' }
    ]
  });

  A('cul-filosofia-novecento', {
    title: { t: '[二十世紀|にじっせいき]の[哲学|てつがく]', it: 'Filosofia del Novecento' },
    sum: [
      { t: '[二十世紀|にじっせいき]の[哲学|てつがく]は、いくつもの[流|なが]れに[分|わ]かれました。', it: 'La filosofia del Novecento si divise in più correnti.' },
      { t: '⟦[現象学|げんしょうがく]⟧は、[経験|けいけん]が[意識|いしき]にどう[現|あらわ]れるかを[記述|きじゅつ]します。', it: 'La fenomenologia descrive come l’esperienza si presenta alla coscienza.' },
      { t: '⟦[実存主義|じつぞんしゅぎ]⟧は、[個人|こじん]の[自由|じゆう]と[責任|せきにん]を[中心|ちゅうしん]に[置|お]きます。', it: 'L’esistenzialismo pone al centro la libertà e la responsabilità del singolo.' },
      { t: '⟦サルトル⟧は、「[実存|じつぞん]は[本質|ほんしつ]に[先立|さきだ]つ」と[言|い]いました。', it: 'Sartre disse che l’esistenza precede l’essenza.' },
      { t: '⟦[分析哲学|ぶんせきてつがく]⟧は、[言語|げんご]を[論理|ろんり]で[分析|ぶんせき]して[問題|もんだい]を[明|あき]らかにします。', it: 'La filosofia analitica chiarisce i problemi analizzando il linguaggio con la logica.' },
      { t: 'ポパーは、⟦[反証可能性|はんしょうかのうせい]⟧のある[理論|りろん]を[科学的|かがくてき]と[見|み]ました。', it: 'Popper considerava scientifica una teoria falsificabile.' },
      { t: 'アーレントは、⟦[全体主義|ぜんたいしゅぎ]⟧という[新|あたら]しい[支配|しはい]の[形|かたち]を[分析|ぶんせき]しました。', it: 'Arendt analizzò il totalitarismo come forma di governo inedita.' }
    ],
    gloss: [
      { w: '現象学', r: 'げんしょうがく', it: 'fenomenologia' },
      { w: '実存主義', r: 'じつぞんしゅぎ', it: 'esistenzialismo' },
      { w: 'サルトル', r: 'さるとる', it: 'Sartre' },
      { w: '分析哲学', r: 'ぶんせきてつがく', it: 'filosofia analitica' },
      { w: '反証可能性', r: 'はんしょうかのうせい', it: 'falsificabilità' },
      { w: '全体主義', r: 'ぜんたいしゅぎ', it: 'totalitarismo' },
      { w: 'ポパー', r: 'ぽぱー', it: 'Popper' },
      { w: 'アーレント', r: 'あーれんと', it: 'Arendt' },
      { w: '意識', r: 'いしき', it: 'coscienza' },
      { w: '言語', r: 'げんご', it: 'linguaggio' }
    ]
  });

  A('cul-logica-ed-etica', {
    title: { t: '[論理|ろんり]と[倫理|りんり]', it: 'Logica ed etica' },
    sum: [
      { t: '⟦[論証|ろんしょう]⟧は、[前提|ぜんてい]で[結論|けつろん]を[支|ささ]えるものです。', it: 'Un argomento sostiene una conclusione mediante delle premesse.' },
      { t: '⟦[妥当性|だとうせい]⟧は[形|かたち]の[正|ただ]しさで、⟦[健全性|けんぜんせい]⟧は[前提|ぜんてい]も[真|しん]であることです。', it: 'La validità riguarda la forma; la solidità richiede anche premesse vere.' },
      { t: '⟦[誤謬|ごびゅう]⟧は、[説得力|せっとくりょく]があるように[見|み]える[推論|すいろん]の[誤|あやま]りです。', it: 'Una fallacia è un errore di ragionamento che sembra persuasivo.' },
      { t: '⟦[人身攻撃|じんしんこうげき]⟧は、[主張|しゅちょう]ではなく[人|ひと]を[攻撃|こうげき]する[誤謬|ごびゅう]です。', it: 'L’ad hominem è la fallacia di attaccare la persona invece dell’argomento.' },
      { t: '⟦[功利主義|こうりしゅぎ]⟧は、[最大|さいだい]の[幸福|こうふく]を[生|う]む[行為|こうい]を[正|ただ]しいと[見|み]ます。', it: 'L’utilitarismo ritiene giusta l’azione che produce la maggiore felicità.' },
      { t: '⟦[義務論|ぎむろん]⟧は、[結果|けっか]だけでなく[義務|ぎむ]と[権利|けんり]を[重|おも]んじます。', it: 'La deontologia dà peso non solo alle conseguenze, ma anche a doveri e diritti.' },
      { t: '⟦[徳倫理学|とくりんりがく]⟧は、[人|ひと]の[性格|せいかく]と[徳|とく]に[注目|ちゅうもく]します。', it: 'L’etica delle virtù guarda al carattere e alle virtù della persona.' }
    ],
    gloss: [
      { w: '論証', r: 'ろんしょう', it: 'argomento' },
      { w: '前提', r: 'ぜんてい', it: 'premessa' },
      { w: '結論', r: 'けつろん', it: 'conclusione' },
      { w: '妥当性', r: 'だとうせい', it: 'validità' },
      { w: '健全性', r: 'けんぜんせい', it: 'solidità' },
      { w: '誤謬', r: 'ごびゅう', it: 'fallacia' },
      { w: '人身攻撃', r: 'じんしんこうげき', it: 'ad hominem' },
      { w: '功利主義', r: 'こうりしゅぎ', it: 'utilitarismo' },
      { w: '義務論', r: 'ぎむろん', it: 'deontologia' },
      { w: '徳倫理学', r: 'とくりんりがく', it: 'etica delle virtù' }
    ]
  });

  A('cul-letteratura-origini-classica', {
    title: { t: '[古代|こだい]の[叙事詩|じょじし]と[演劇|えんげき]', it: 'Letteratura delle origini e classica' },
    sum: [
      { t: '[西洋|せいよう]の⟦[文学|ぶんがく]⟧は、[古代|こだい]ギリシャの⟦[叙事詩|じょじし]⟧から[始|はじ]まりました。', it: 'La letteratura occidentale nasce con i poemi epici dell’antica Grecia.' },
      { t: '⟦ホメロス⟧の[名|な]で、『イリアス』と『オデュッセイア』が[伝|つた]わっています。', it: 'Sotto il nome di Omero ci sono giunti l’Iliade e l’Odissea.' },
      { t: '『イリアス』は、アキレウスの[怒|いか]りを[語|かた]ります。', it: 'L’Iliade racconta l’ira di Achille.' },
      { t: '『オデュッセイア』は、[英雄|えいゆう]が[耐|た]えて[故郷|こきょう]へ[帰|かえ]る[話|はなし]です。', it: 'L’Odissea è la storia di un eroe che resiste e ritorna a casa.' },
      { t: '⟦ウェルギリウス⟧の『アエネイス』は、トロイアの[英雄|えいゆう]アエネアスの[旅|たび]を[描|えが]きます。', it: 'L’Eneide di Virgilio narra il viaggio dell’eroe troiano Enea.' },
      { t: '⟦[悲劇|ひげき]⟧は、アテネでディオニュソスの[祭|まつ]りの[中|なか]から[生|う]まれました。', it: 'La tragedia nacque ad Atene all’interno delle feste di Dioniso.' },
      { t: '⟦[喜劇|きげき]⟧では、アリストパネスが[政治|せいじ]や[社会|しゃかい]を[風刺|ふうし]しました。', it: 'Nella commedia, Aristofane fece satira della politica e della società.' }
    ],
    gloss: [
      { w: '文学', r: 'ぶんがく', it: 'letteratura' },
      { w: '叙事詩', r: 'じょじし', it: 'poema epico' },
      { w: 'ホメロス', r: 'ほめろす', it: 'Omero' },
      { w: 'イリアス', r: 'いりあす', it: 'Iliade' },
      { w: 'オデュッセイア', r: 'おでゅっせいあ', it: 'Odissea' },
      { w: 'ウェルギリウス', r: 'うぇるぎりうす', it: 'Virgilio' },
      { w: 'アエネイス', r: 'あえねいす', it: 'Eneide' },
      { w: '悲劇', r: 'ひげき', it: 'tragedia' },
      { w: '喜劇', r: 'きげき', it: 'commedia' },
      { w: 'アリストパネス', r: 'ありすとぱねす', it: 'Aristofane' }
    ]
  });

  A('cul-dante-petrarca-boccaccio', {
    title: { t: 'ダンテとペトラルカとボッカチオ', it: 'Dante, Petrarca, Boccaccio' },
    sum: [
      { t: 'ダンテとペトラルカとボッカチオは、[十四世紀|じゅうよんせいき]の[代表的|だいひょうてき]な[作家|さっか]です。', it: 'Dante, Petrarca e Boccaccio sono gli autori più rappresentativi del Trecento.' },
      { t: '⟦ダンテ⟧の『⟦[神曲|しんきょく]⟧』は、[死後|しご]の[世界|せかい]を[旅|たび]する[詩|し]です。', it: 'La Commedia di Dante è un poema sul viaggio nell’aldilà.' },
      { t: '『[神曲|しんきょく]』は、⟦[地獄|じごく]⟧、[煉獄|れんごく]、[天国|てんごく]の[三|みっ]つの[部|ぶ]でできています。', it: 'La Commedia è composta da tre parti: Inferno, Purgatorio e Paradiso.' },
      { t: 'ダンテを[導|みちび]くのは、[初|はじ]めはウェルギリウス、のちにベアトリーチェです。', it: 'A guidare Dante sono prima Virgilio e poi Beatrice.' },
      { t: 'ペトラルカは、[古典|こてん]を[研究|けんきゅう]した[最初|さいしょ]の[大|おお]きな⟦[人文主義者|じんぶんしゅぎしゃ]⟧です。', it: 'Petrarca fu il primo grande umanista, studioso dei classici.' },
      { t: 'ペトラルカは、[俗語|ぞくご]で『⟦カンツォニエーレ⟧』を[書|か]きました。', it: 'Petrarca scrisse in volgare il Canzoniere.' },
      { t: 'ボッカチオの『⟦デカメロン⟧』は、ペストを[避|さ]けた[若者|わかもの]たちが[百|ひゃく]の[話|はなし]を[語|かた]る[作品|さくひん]です。', it: 'Il Decameron di Boccaccio è un’opera in cui giovani sfuggiti alla peste raccontano cento novelle.' }
    ],
    gloss: [
      { w: 'ダンテ', r: 'だんて', it: 'Dante' },
      { w: '神曲', r: 'しんきょく', it: 'Divina Commedia' },
      { w: '地獄', r: 'じごく', it: 'Inferno' },
      { w: '煉獄', r: 'れんごく', it: 'Purgatorio' },
      { w: '天国', r: 'てんごく', it: 'Paradiso' },
      { w: 'ペトラルカ', r: 'ぺとらるか', it: 'Petrarca' },
      { w: '人文主義者', r: 'じんぶんしゅぎしゃ', it: 'umanista' },
      { w: 'カンツォニエーレ', r: 'かんつぉにえーれ', it: 'Canzoniere' },
      { w: 'ボッカチオ', r: 'ぼっかちお', it: 'Boccaccio' },
      { w: 'デカメロン', r: 'でかめろん', it: 'Decameron' },
      { w: '俗語', r: 'ぞくご', it: 'volgare' }
    ]
  });

  A('cul-rinascimento-barocco', {
    title: { t: 'ルネサンスとバロックの[文学|ぶんがく]', it: 'Rinascimento e Barocco' },
    sum: [
      { t: '⟦[人文主義|じんぶんしゅぎ]⟧は、[古典|こてん]を[見直|みなお]し、[人間|にんげん]を[中心|ちゅうしん]に[置|お]きました。', it: 'L’Umanesimo riscoprì i classici e rimise l’uomo al centro.' },
      { t: '⟦アリオスト⟧の『[狂|くる]えるオルランド』は、[愛|あい]のために[狂|くる]ったオルランドの[物語|ものがたり]です。', it: 'L’Orlando furioso di Ariosto racconta di Orlando, reso folle dall’amore.' },
      { t: '⟦マキャヴェッリ⟧の『⟦[君主論|くんしゅろん]⟧』は、[君主国|くんしゅこく]の[獲得|かくとく]と[維持|いじ]を[論|ろん]じます。', it: 'Il Principe di Machiavelli tratta di come conquistare e conservare i principati.' },
      { t: '⟦[反宗教改革|はんしゅうきょうかいかく]⟧の[時代|じだい]に、タッソは『[解放|かいほう]されたエルサレム』を[書|か]きました。', it: 'Al tempo della Controriforma, Tasso scrisse la Gerusalemme liberata.' },
      { t: '⟦バロック⟧は、[驚|おどろ]きと[大胆|だいたん]な[比喩|ひゆ]を[好|この]みました。', it: 'Il Barocco amava la meraviglia e la metafora ardita.' },
      { t: '⟦ガリレオ⟧は、[自然|しぜん]の[本|ほん]は[数学|すうがく]の[言葉|ことば]で[書|か]かれていると[述|の]べました。', it: 'Galileo affermò che il libro della natura è scritto in linguaggio matematico.' },
      { t: 'セルバンテスの『ドン・キホーテ』は、[騎士物語|きしものがたり]のパロディーです。', it: 'Il Don Chisciotte di Cervantes è una parodia dei romanzi cavallereschi.' }
    ],
    gloss: [
      { w: '人文主義', r: 'じんぶんしゅぎ', it: 'Umanesimo' },
      { w: 'アリオスト', r: 'ありおすと', it: 'Ariosto' },
      { w: 'マキャヴェッリ', r: 'まきゃゔぇっり', it: 'Machiavelli' },
      { w: '君主論', r: 'くんしゅろん', it: 'Il Principe' },
      { w: '反宗教改革', r: 'はんしゅうきょうかいかく', it: 'Controriforma' },
      { w: 'タッソ', r: 'たっそ', it: 'Tasso' },
      { w: 'バロック', r: 'ばろっく', it: 'Barocco' },
      { w: 'ガリレオ', r: 'がりれお', it: 'Galileo' },
      { w: 'シェイクスピア', r: 'しぇいくすぴあ', it: 'Shakespeare' },
      { w: 'セルバンテス', r: 'せるばんてす', it: 'Cervantes' }
    ]
  });

  A('cul-ottocento-letterario', {
    title: { t: '[十九世紀|じゅうきゅうせいき]の[文学|ぶんがく]', it: 'Ottocento letterario' },
    sum: [
      { t: '⟦[新古典主義|しんこてんしゅぎ]⟧は[調和|ちょうわ]を、⟦ロマン[主義|しゅぎ]⟧は[感情|かんじょう]と[個人|こじん]を[重|おも]んじました。', it: 'Il Neoclassicismo valorizzava l’armonia, il Romanticismo il sentimento e l’individuo.' },
      { t: '⟦フォスコロ⟧は、[死者|ししゃ]の[記憶|きおく]を[詩|し]にしました。', it: 'Foscolo fece della memoria dei morti materia di poesia.' },
      { t: '⟦マンゾーニ⟧の『いいなづけ』は、[歴史小説|れきししょうせつ]です。', it: 'I promessi sposi di Manzoni è un romanzo storico.' },
      { t: '⟦レオパルディ⟧は、『[無限|むげん]』などの[詩|し]を[書|か]きました。', it: 'Leopardi scrisse poesie come L’infinito.' },
      { t: '⟦ヴェルガ⟧は、⟦ヴェリズモ⟧の[作家|さっか]で、シチリアの[漁師|りょうし]の[家族|かぞく]を[描|えが]きました。', it: 'Verga, scrittore del verismo, narrò una famiglia di pescatori siciliani.' },
      { t: '⟦[小説|しょうせつ]⟧が、[中産階級|ちゅうさんかいきゅう]に[読|よ]まれる[中心|ちゅうしん]のジャンルになりました。', it: 'Il romanzo divenne il genere centrale, letto dalla borghesia.' },
      { t: '⟦フローベール⟧は、『ボヴァリー[夫人|ふじん]』を[客観的|きゃっかんてき]な[文体|ぶんたい]で[書|か]きました。', it: 'Flaubert scrisse Madame Bovary con uno stile oggettivo.' }
    ],
    gloss: [
      { w: '新古典主義', r: 'しんこてんしゅぎ', it: 'Neoclassicismo' },
      { w: 'ロマン主義', r: 'ろまんしゅぎ', it: 'Romanticismo' },
      { w: 'フォスコロ', r: 'ふぉすころ', it: 'Foscolo' },
      { w: 'マンゾーニ', r: 'まんぞーに', it: 'Manzoni' },
      { w: 'レオパルディ', r: 'れおぱるでぃ', it: 'Leopardi' },
      { w: 'ヴェルガ', r: 'ゔぇるが', it: 'Verga' },
      { w: 'ヴェリズモ', r: 'ゔぇりずも', it: 'verismo' },
      { w: '小説', r: 'しょうせつ', it: 'romanzo' },
      { w: 'フローベール', r: 'ふろーべーる', it: 'Flaubert' },
      { w: '歴史小説', r: 'れきししょうせつ', it: 'romanzo storico' }
    ]
  });

  A('cul-novecento-letterario', {
    title: { t: '[二十世紀|にじっせいき]の[文学|ぶんがく]', it: 'Novecento letterario' },
    sum: [
      { t: '[二十世紀|にじっせいき]の[文学|ぶんがく]は、[確|たし]かなものが[揺|ゆ]らぐ[中|なか]で[生|う]まれました。', it: 'La letteratura del Novecento nacque mentre le certezze vacillavano.' },
      { t: '⟦スヴェーヴォ⟧の『ゼーノの[意識|いしき]』は、[記憶|きおく]の[形|かたち]で[語|かた]られます。', it: 'La coscienza di Zeno di Svevo è narrata in forma di memorie.' },
      { t: '⟦ピランデッロ⟧は、[人|ひと]はそれぞれ[仮面|かめん]をつけていると[考|かんが]えました。', it: 'Pirandello pensava che ognuno indossi una maschera.' },
      { t: '⟦ウンガレッティ⟧は、とても[短|みじか]い[詩|し]を[書|か]きました。', it: 'Ungaretti scrisse poesie brevissime.' },
      { t: '⟦モンターレ⟧は、「[生|い]きることの[苦|くる]しみ」を[詩|し]に[詠|よ]みました。', it: 'Montale mise in versi il «male di vivere».' },
      { t: '⟦カルヴィーノ⟧は、『[見|み]えない[都市|とし]』などを[書|か]きました。', it: 'Calvino scrisse opere come Le città invisibili.' },
      { t: '⟦カフカ⟧の『[変身|へんしん]』は、[人|ひと]が[虫|むし]になる[話|はなし]です。', it: 'La metamorfosi di Kafka racconta di un uomo trasformato in insetto.' }
    ],
    gloss: [
      { w: 'スヴェーヴォ', r: 'すゔぇーゔぉ', it: 'Svevo' },
      { w: 'ピランデッロ', r: 'ぴらんでっろ', it: 'Pirandello' },
      { w: 'ウンガレッティ', r: 'うんがれってぃ', it: 'Ungaretti' },
      { w: 'モンターレ', r: 'もんたーれ', it: 'Montale' },
      { w: 'カルヴィーノ', r: 'かるゔぃーの', it: 'Calvino' },
      { w: 'カフカ', r: 'かふか', it: 'Kafka' },
      { w: '変身', r: 'へんしん', it: 'metamorfosi' },
      { w: '自由詩', r: 'じゆうし', it: 'verso libero' },
      { w: '仮面', r: 'かめん', it: 'maschera' },
      { w: '記憶', r: 'きおく', it: 'memoria' }
    ]
  });

  A('cul-guardare-arte-antica', {
    title: { t: '[作品|さくひん]の[見方|みかた]と[古代|こだい]の[美術|びじゅつ]', it: 'Guardare un’opera e l’arte antica' },
    sum: [
      { t: '[作品|さくひん]を[見|み]るときは、[説明|せつめい]を[読|よ]む[前|まえ]に[長|なが]く[見|み]ます。', it: 'Davanti a un’opera si guarda a lungo prima di leggere la didascalia.' },
      { t: '[見方|みかた]は、[記述|きじゅつ]、[分析|ぶんせき]、[文脈|ぶんみゃく]、[解釈|かいしゃく]の[四|よっ]つの[段階|だんかい]です。', it: 'Il metodo ha quattro passi: descrivere, analizzare, contestualizzare, interpretare.' },
      { t: '⟦エジプト⟧の[美術|びじゅつ]は、[宗教|しゅうきょう]とファラオの[力|ちから]に[結|むす]びついていました。', it: 'L’arte egizia era legata alla religione e al potere del faraone.' },
      { t: 'エジプトの[像|ぞう]は、⟦[正面性|しょうめんせい]⟧と[決|き]まった[比例|ひれい]が[特徴|とくちょう]です。', it: 'Le figure egizie si riconoscono dalla frontalità e dalle proporzioni fisse.' },
      { t: '⟦ギリシャ⟧の[美術|びじゅつ]は、[理想|りそう]の[美|び]と[調和|ちょうわ]を[求|もと]めました。', it: 'L’arte greca cercava la bellezza ideale e l’armonia.' },
      { t: 'ギリシャ[美術|びじゅつ]には、⟦アルカイック⟧、クラシック、ヘレニズムの[時期|じき]があります。', it: 'L’arte greca ha una fase arcaica, una classica e una ellenistica.' },
      { t: '⟦ローマ⟧の[美術|びじゅつ]は、[写実的|しゃじつてき]な⟦[肖像|しょうぞう]⟧と[歴史|れきし]の[浮|う]き[彫|ぼ]りが[特徴|とくちょう]です。', it: 'L’arte romana è nota per il ritratto realistico e il rilievo storico.' }
    ],
    gloss: [
      { w: 'エジプト', r: 'えじぷと', it: 'Egitto' },
      { w: '正面性', r: 'しょうめんせい', it: 'frontalità' },
      { w: 'ギリシャ', r: 'ぎりしゃ', it: 'Grecia' },
      { w: 'アルカイック', r: 'あるかいっく', it: 'arcaico' },
      { w: 'クラシック', r: 'くらしっく', it: 'classico' },
      { w: 'ヘレニズム', r: 'へれにずむ', it: 'ellenistico' },
      { w: 'ローマ', r: 'ろーま', it: 'Roma' },
      { w: '肖像', r: 'しょうぞう', it: 'ritratto' },
      { w: '記述', r: 'きじゅつ', it: 'descrizione' },
      { w: '分析', r: 'ぶんせき', it: 'analisi' },
      { w: '文脈', r: 'ぶんみゃく', it: 'contesto' },
      { w: '解釈', r: 'かいしゃく', it: 'interpretazione' }
    ]
  });

  A('cul-arte-medievale', {
    title: { t: '[中世|ちゅうせい]の[美術|びじゅつ]', it: 'Arte medievale' },
    sum: [
      { t: '⟦[中世|ちゅうせい]の[美術|びじゅつ]⟧は、[信仰|しんこう]に[仕|つか]える[芸術|げいじゅつ]でした。', it: 'L’arte medievale era al servizio della fede.' },
      { t: '⟦[初期|しょき]キリスト[教|きょう]⟧の[教会|きょうかい]は、ローマの⟦バシリカ⟧から[生|う]まれました。', it: 'Le chiese paleocristiane derivano dalla basilica romana.' },
      { t: '⟦ビザンティン⟧[美術|びじゅつ]は、[東|ひがし]ローマ[帝国|ていこく]で[生|う]まれました。', it: 'L’arte bizantina nacque nell’impero romano d’Oriente.' },
      { t: 'ビザンティンの[教会|きょうかい]は、[中央|ちゅうおう]のドームと[中心|ちゅうしん]のある[形|かたち]が[特徴|とくちょう]です。', it: 'Le chiese bizantine si distinguono per la pianta centrale e la cupola.' },
      { t: '⟦ロマネスク⟧の[教会|きょうかい]は、[壁|かべ]が[厚|あつ]く、[丸|まる]いアーチを[使|つか]います。', it: 'Le chiese romaniche hanno muri spessi e usano l’arco tondo.' },
      { t: '⟦ゴシック⟧は、とがったアーチと⟦フライング・バットレス⟧が[特徴|とくちょう]です。', it: 'Il gotico è caratterizzato da archi a punta e archi rampanti.' },
      { t: 'ゴシックの[教会|きょうかい]では、[柱|はしら]とアーチの[骨組|ほねぐ]みが[重|おも]さを[受|う]け、[光|ひかり]を[多|おお]く[取|と]り[入|い]れます。', it: 'Nel gotico lo scheletro di pilastri e archi regge il peso e lascia entrare molta luce.' }
    ],
    gloss: [
      { w: '中世の美術', r: 'ちゅうせいのびじゅつ', it: 'arte medievale' },
      { w: '初期キリスト教', r: 'しょきキリストきょう', it: 'paleocristiano' },
      { w: 'バシリカ', r: 'ばしりか', it: 'basilica' },
      { w: 'ビザンティン', r: 'びざんてぃん', it: 'bizantino' },
      { w: 'ロマネスク', r: 'ろまねすく', it: 'romanico' },
      { w: 'ゴシック', r: 'ごしっく', it: 'gotico' },
      { w: 'フライング・バットレス', r: 'ふらいんぐばっとれす', it: 'arco rampante' },
      { w: 'アーチ', r: 'あーち', it: 'arco' },
      { w: 'ドーム', r: 'どーむ', it: 'cupola' },
      { w: 'ステンドグラス', r: 'すてんどぐらす', it: 'vetrata' }
    ]
  });

  A('cul-rinascimento', {
    title: { t: 'ルネサンスの[美術|びじゅつ]', it: 'Il Rinascimento' },
    sum: [
      { t: '⟦ルネサンス⟧は、[十五世紀|じゅうごせいき]のフィレンツェで[始|はじ]まり、[古代|こだい]を[手本|てほん]にしました。', it: 'Il Rinascimento iniziò a Firenze nel Quattrocento, prendendo a modello l’antichità.' },
      { t: '⟦[線遠近法|せんえんきんほう]⟧は、[平|たい]らな[面|めん]に[空間|くうかん]を[表|あらわ]す[方法|ほうほう]です。', it: 'La prospettiva lineare è un metodo per rappresentare lo spazio su una superficie piana.' },
      { t: '[平行線|へいこうせん]は、⟦[消失点|しょうしつてん]⟧に[集|あつ]まります。', it: 'Le rette parallele convergono nel punto di fuga.' },
      { t: '⟦ブルネレスキ⟧は、サンタ・マリア・デル・フィオーレのドームを[造|つく]りました。', it: 'Brunelleschi costruì la cupola di Santa Maria del Fiore.' },
      { t: 'レオナルド・ダ・ヴィンチは、[光|ひかり]と[影|かげ]をなだらかにつなぐ⟦スフマート⟧を[使|つか]いました。', it: 'Leonardo usò lo sfumato, che unisce dolcemente luce e ombra.' },
      { t: '⟦ミケランジェロ⟧は、システィーナ[礼拝堂|れいはいどう]の[天井|てんじょう]に[壁画|へきが]を[描|えが]きました。', it: 'Michelangelo dipinse gli affreschi della volta della Cappella Sistina.' },
      { t: '⟦ラファエロ⟧は、[調和|ちょうわ]と[優美|ゆうび]で[知|し]られる[画家|がか]です。', it: 'Raffaello è il pittore noto per l’armonia e la grazia.' }
    ],
    gloss: [
      { w: 'ルネサンス', r: 'るねさんす', it: 'Rinascimento' },
      { w: '線遠近法', r: 'せんえんきんほう', it: 'prospettiva lineare' },
      { w: '消失点', r: 'しょうしつてん', it: 'punto di fuga' },
      { w: 'ブルネレスキ', r: 'ぶるねれすき', it: 'Brunelleschi' },
      { w: 'レオナルド・ダ・ヴィンチ', r: 'れおなるどだゔぃんち', it: 'Leonardo da Vinci' },
      { w: 'スフマート', r: 'すふまーと', it: 'sfumato' },
      { w: 'ミケランジェロ', r: 'みけらんじぇろ', it: 'Michelangelo' },
      { w: 'ラファエロ', r: 'らふぁえろ', it: 'Raffaello' },
      { w: '平行線', r: 'へいこうせん', it: 'rette parallele' },
      { w: '壁画', r: 'へきが', it: 'affresco, pittura murale' }
    ]
  });

  A('cul-barocco-settecento', {
    title: { t: 'バロックと[十八世紀|じゅうはっせいき]の[美術|びじゅつ]', it: 'Barocco e Settecento' },
    sum: [
      { t: '⟦バロック⟧は、[十七世紀|じゅうななせいき]に[栄|さか]えた、[動|うご]きと[劇的|げきてき]な[効果|こうか]の[美術|びじゅつ]です。', it: 'Il Barocco è l’arte del Seicento, fatta di movimento ed effetti teatrali.' },
      { t: '[教会|きょうかい]は、[美術|びじゅつ]で[信者|しんじゃ]の[心|こころ]を[動|うご]かそうとしました。', it: 'La Chiesa usò l’arte per persuadere e coinvolgere i fedeli.' },
      { t: '⟦カラヴァッジョ⟧は、[暗|くら]い[背景|はいけい]に[強|つよ]い[光|ひかり]を[当|あ]てる⟦テネブリズム⟧で[知|し]られます。', it: 'Caravaggio è noto per il tenebrismo: fondi scuri e un fascio di luce.' },
      { t: '⟦ベルニーニ⟧は、[劇|げき]の[場面|ばめん]のような[彫刻|ちょうこく]を[作|つく]りました。', it: 'Bernini creò sculture simili a scene teatrali.' },
      { t: '⟦ロココ⟧は、[軽|かる]やかで[優雅|ゆうが]な、パステルカラーの[様式|ようしき]です。', it: 'Il Rococò è uno stile leggero ed elegante, dai colori pastello.' },
      { t: '⟦[新古典主義|しんこてんしゅぎ]⟧は、ロココへの[反動|はんどう]として[生|う]まれました。', it: 'Il Neoclassicismo nacque come reazione al Rococò.' },
      { t: '⟦ダヴィッド⟧とカノーヴァが、[秩序|ちつじょ]と[明快|めいかい]さを[重|おも]んじる[新古典主義|しんこてんしゅぎ]の[代表|だいひょう]です。', it: 'David e Canova sono i rappresentanti del Neoclassicismo, che dà valore a ordine e chiarezza.' }
    ],
    gloss: [
      { w: 'バロック', r: 'ばろっく', it: 'Barocco' },
      { w: 'カラヴァッジョ', r: 'からゔぁっじょ', it: 'Caravaggio' },
      { w: 'テネブリズム', r: 'てねぶりずむ', it: 'tenebrismo' },
      { w: 'ベルニーニ', r: 'べるにーに', it: 'Bernini' },
      { w: 'ロココ', r: 'ろここ', it: 'Rococò' },
      { w: '新古典主義', r: 'しんこてんしゅぎ', it: 'Neoclassicismo' },
      { w: 'ダヴィッド', r: 'だゔぃっど', it: 'David (pittore)' },
      { w: 'カノーヴァ', r: 'かのーゔぁ', it: 'Canova' },
      { w: 'ボッロミーニ', r: 'ぼっろみーに', it: 'Borromini' },
      { w: '彫刻', r: 'ちょうこく', it: 'scultura' }
    ]
  });

  A('cul-ottocento', {
    title: { t: '[十九世紀|じゅうきゅうせいき]の[美術|びじゅつ]', it: 'L’Ottocento: dal Romanticismo al Post-impressionismo' },
    sum: [
      { t: '[十九世紀|じゅうきゅうせいき]は、[革命|かくめい]と[工業化|こうぎょうか]の[時代|じだい]で、[美術|びじゅつ]も[変|か]わりました。', it: 'L’Ottocento fu un secolo di rivoluzioni e industrializzazione, e cambiò anche l’arte.' },
      { t: '⟦[写真|しゃしん]⟧は、[絵|え]から[記録|きろく]の[役目|やくめ]を[解放|かいほう]しました。', it: 'La fotografia liberò la pittura dal compito di documentare.' },
      { t: '⟦ロマン[主義|しゅぎ]⟧は、[感情|かんじょう]と[想像力|そうぞうりょく]を[高|たか]く[評価|ひょうか]しました。', it: 'Il Romanticismo esaltò il sentimento e l’immaginazione.' },
      { t: '⟦[写実主義|しゃじつしゅぎ]⟧は、[労働者|ろうどうしゃ]など、ありのままの[現実|げんじつ]を[描|えが]きました。', it: 'Il Realismo dipinse la realtà com’è, come i lavoratori.' },
      { t: '⟦[印象派|いんしょうは]⟧は、[屋外|おくがい]で[瞬間|しゅんかん]の[光|ひかり]を[描|えが]きました。', it: 'Gli impressionisti dipingevano all’aperto la luce dell’istante.' },
      { t: '⟦モネ⟧の『[印象|いんしょう]・[日|ひ]の[出|で]』が、[名前|なまえ]の[由来|ゆらい]です。', it: 'Il nome deriva da Impressione, levar del sole di Monet.' },
      { t: '⟦[後期印象派|こうきいんしょうは]⟧は、[印象|いんしょう]を[超|こ]えて、[構造|こうぞう]や[象徴|しょうちょう]を[求|もと]めました。', it: 'I post-impressionisti andarono oltre l’impressione, cercando struttura e simbolo.' }
    ],
    gloss: [
      { w: '写真', r: 'しゃしん', it: 'fotografia' },
      { w: 'ロマン主義', r: 'ろまんしゅぎ', it: 'Romanticismo' },
      { w: '写実主義', r: 'しゃじつしゅぎ', it: 'Realismo' },
      { w: '印象派', r: 'いんしょうは', it: 'Impressionismo' },
      { w: 'モネ', r: 'もね', it: 'Monet' },
      { w: '後期印象派', r: 'こうきいんしょうは', it: 'Post-impressionismo' },
      { w: 'セザンヌ', r: 'せざんぬ', it: 'Cézanne' },
      { w: 'ゴッホ', r: 'ごっほ', it: 'Van Gogh' },
      { w: '屋外', r: 'おくがい', it: 'all’aperto' },
      { w: '象徴', r: 'しょうちょう', it: 'simbolo' }
    ]
  });

  A('cul-novecento-contemporanea', {
    title: { t: '[前衛|ぜんえい]と[現代美術|げんだいびじゅつ]', it: 'Avanguardie e arte contemporanea' },
    sum: [
      { t: '⟦[前衛|ぜんえい]⟧は、[二十世紀|にじっせいき]の[初|はじ]めに[伝統的|でんとうてき]な[表現|ひょうげん]を[離|はな]れた[運動|うんどう]です。', it: 'Le avanguardie sono movimenti dell’inizio del Novecento che ruppero con la rappresentazione tradizionale.' },
      { t: '⟦キュビスム⟧は、[物|もの]を[複数|ふくすう]の[視点|してん]から[同時|どうじ]に[描|えが]きます。', it: 'Il Cubismo rappresenta un oggetto da più punti di vista contemporaneamente.' },
      { t: 'ピカソとブラックが、キュビスムを[始|はじ]めました。', it: 'Picasso e Braque diedero inizio al Cubismo.' },
      { t: '⟦[未来派|みらいは]⟧は、イタリアの[運動|うんどう]で、[速度|そくど]と[機械|きかい]を[称賛|しょうさん]しました。', it: 'Il Futurismo, movimento italiano, esaltò la velocità e le macchine.' },
      { t: '⟦[抽象主義|ちゅうしょうしゅぎ]⟧は、[線|せん]と[形|かたち]と[色|いろ]だけで[表|あらわ]します。', it: 'L’Astrattismo si esprime solo con linee, forme e colori.' },
      { t: '⟦ダダ⟧は、[戦争|せんそう]への[抗議|こうぎ]として[生|う]まれました。', it: 'Dada nacque come protesta contro la guerra.' },
      { t: 'デュシャンは、[日用品|にちようひん]を[作品|さくひん]にする⟦レディメイド⟧を[考|かんが]えました。', it: 'Duchamp ideò il ready-made, che fa di un oggetto comune un’opera.' }
    ],
    gloss: [
      { w: '前衛', r: 'ぜんえい', it: 'avanguardia' },
      { w: 'キュビスム', r: 'きゅびすむ', it: 'Cubismo' },
      { w: 'ピカソ', r: 'ぴかそ', it: 'Picasso' },
      { w: '未来派', r: 'みらいは', it: 'Futurismo' },
      { w: '抽象主義', r: 'ちゅうしょうしゅぎ', it: 'Astrattismo' },
      { w: 'ダダ', r: 'だだ', it: 'Dada' },
      { w: 'デュシャン', r: 'でゅしゃん', it: 'Duchamp' },
      { w: 'レディメイド', r: 'れでぃめいど', it: 'ready-made' },
      { w: 'シュルレアリスム', r: 'しゅるれありすむ', it: 'Surrealismo' },
      { w: 'ポップ・アート', r: 'ぽっぷあーと', it: 'Pop Art' }
    ]
  });

  A('cul-architettura', {
    title: { t: '[建築|けんちく]の[基本|きほん]', it: 'Architettura: elementi, stili e piante' },
    sum: [
      { t: '⟦[建築|けんちく]⟧は、[暮|く]らし、[祈|いの]り、[働|はたら]くための[空間|くうかん]を[作|つく]る[芸術|げいじゅつ]です。', it: 'L’architettura è l’arte di costruire spazi per vivere, pregare e lavorare.' },
      { t: '[良|よ]い[建物|たてもの]には、[強|つよ]さ、[役|やく]に[立|た]つこと、[美|うつく]しさが[必要|ひつよう]です。', it: 'Un buon edificio richiede solidità, utilità e bellezza.' },
      { t: '⟦アーチ⟧は、[石|いし]を[半円|はんえん]に[並|なら]べ、[圧縮|あっしゅく]で[支|ささ]えます。', it: 'L’arco dispone le pietre a semicerchio e si regge per compressione.' },
      { t: 'ギリシャでは、[柱|はしら]と⟦アーキトレーブ⟧を[組|く]み[合|あ]わせます。', it: 'In Grecia si combinano colonne e architrave.' },
      { t: '⟦ドリス[式|しき]⟧、⟦イオニア[式|しき]⟧、コリント[式|しき]が、ギリシャの[三|みっ]つの[柱|はしら]の[様式|ようしき]です。', it: 'Dorico, ionico e corinzio sono i tre ordini greci.' },
      { t: '⟦[平面図|へいめんず]⟧は、[建物|たてもの]を[上|うえ]から[見|み]た、[水平|すいへい]の[断面|だんめん]です。', it: 'La pianta è una sezione orizzontale dell’edificio vista dall’alto.' },
      { t: '⟦[縮尺|しゅくしゃく]⟧を[使|つか]うと、[図|ず]から[実際|じっさい]の[大|おお]きさが[計算|けいさん]できます。', it: 'Con la scala si calcolano dal disegno le dimensioni reali.' }
    ],
    gloss: [
      { w: '建築', r: 'けんちく', it: 'architettura' },
      { w: 'アーチ', r: 'あーち', it: 'arco' },
      { w: 'アーキトレーブ', r: 'あーきとれーぶ', it: 'architrave' },
      { w: 'ドリス式', r: 'どりすしき', it: 'ordine dorico' },
      { w: 'イオニア式', r: 'いおにあしき', it: 'ordine ionico' },
      { w: 'コリント式', r: 'こりんとしき', it: 'ordine corinzio' },
      { w: '平面図', r: 'へいめんず', it: 'pianta' },
      { w: '縮尺', r: 'しゅくしゃく', it: 'scala' },
      { w: '柱', r: 'はしら', it: 'colonna, pilastro' },
      { w: 'ドーム', r: 'どーむ', it: 'cupola' }
    ]
  });

  A('cul-musica-fondamenti', {
    title: { t: '[音楽|おんがく]の[基本|きほん]', it: 'Musica: i fondamenti' },
    sum: [
      { t: '[音|おと]は、[高|たか]さ、[長|なが]さ、[強|つよ]さ、⟦[音色|ねいろ]⟧の[四|よっ]つで[表|あらわ]せます。', it: 'Un suono si descrive con quattro qualità: altezza, durata, intensità e timbro.' },
      { t: '⟦[周波数|しゅうはすう]⟧が[高|たか]いほど、[音|おと]は[高|たか]くなります。', it: 'Più alta è la frequenza, più acuto è il suono.' },
      { t: '⟦オクターブ⟧は、[周波数|しゅうはすう]が[二倍|にばい]になる[距離|きょり]です。', it: 'L’ottava è la distanza in cui la frequenza raddoppia.' },
      { t: '⟦[半音|はんおん]⟧は、[西洋音楽|せいようおんがく]で[一番|いちばん][小|ちい]さい[距離|きょり]です。', it: 'Il semitono è la distanza minima nella musica occidentale.' },
      { t: '⟦[音階|おんかい]⟧は、[音|おと]を[順番|じゅんばん]に[並|なら]べたもので、[長音階|ちょうおんかい]と[短音階|たんおんかい]があります。', it: 'La scala è una successione ordinata di note; ci sono la scala maggiore e la minore.' },
      { t: '⟦テンポ⟧は、[一分間|いっぷんかん]の[拍|はく]の[数|かず]で[表|あらわ]します。', it: 'Il tempo si misura con il numero di battiti al minuto.' },
      { t: '⟦[三和音|さんわおん]⟧は、[三|みっ]つの[音|おと]を[重|かさ]ねた[和音|わおん]の[基本|きほん]です。', it: 'La triade è l’accordo di base, formato da tre note sovrapposte.' }
    ],
    gloss: [
      { w: '音色', r: 'ねいろ', it: 'timbro' },
      { w: '周波数', r: 'しゅうはすう', it: 'frequenza' },
      { w: 'オクターブ', r: 'おくたーぶ', it: 'ottava' },
      { w: '半音', r: 'はんおん', it: 'semitono' },
      { w: '音階', r: 'おんかい', it: 'scala' },
      { w: '長音階', r: 'ちょうおんかい', it: 'scala maggiore' },
      { w: '短音階', r: 'たんおんかい', it: 'scala minore' },
      { w: 'テンポ', r: 'てんぽ', it: 'tempo, velocità' },
      { w: '三和音', r: 'さんわおん', it: 'triade' },
      { w: '五線譜', r: 'ごせんふ', it: 'pentagramma' }
    ]
  });

  A('cul-storia-musica', {
    title: { t: '[西洋音楽|せいようおんがく]の[歴史|れきし]', it: 'Storia della musica colta' },
    sum: [
      { t: '[書|か]かれた[西洋音楽|せいようおんがく]は、[中世|ちゅうせい]の[教会|きょうかい]の[歌|うた]から[始|はじ]まりました。', it: 'La musica occidentale scritta comincia nel Medioevo con il canto della Chiesa.' },
      { t: '⟦グレゴリオ[聖歌|せいか]⟧は、[伴奏|ばんそう]のない[単旋律|たんせんりつ]の[歌|うた]です。', it: 'Il canto gregoriano è un canto monodico, senza accompagnamento.' },
      { t: 'ルネサンスでは、[複数|ふくすう]の[声|こえ]が[重|かさ]なる⟦ポリフォニー⟧が[栄|さか]えました。', it: 'Nel Rinascimento fiorì la polifonia, con più voci sovrapposte.' },
      { t: '⟦バロック⟧[音楽|おんがく]では、⟦[通奏低音|つうそうていおん]⟧が[和声|わせい]を[支|ささ]えました。', it: 'Nella musica barocca il basso continuo sosteneva l’armonia.' },
      { t: 'バロックの[時代|じだい]に、オペラや[協奏曲|きょうそうきょく]が[生|う]まれました。', it: 'In epoca barocca nacquero l’opera e il concerto.' },
      { t: '⟦ウィーン[古典派|こてんは]⟧は、[明快|めいかい]さと[均整|きんせい]と[形式|けいしき]を[求|もと]めました。', it: 'Il Classicismo viennese cercava chiarezza, equilibrio e forma.' },
      { t: '⟦ロマン[派|は]⟧は、[感情|かんじょう]と[個人|こじん]を[重|おも]んじました。', it: 'Il Romanticismo diede peso al sentimento e all’individuo.' }
    ],
    gloss: [
      { w: 'グレゴリオ聖歌', r: 'ぐれごりおせいか', it: 'canto gregoriano' },
      { w: 'ポリフォニー', r: 'ぽりふぉにー', it: 'polifonia' },
      { w: 'バロック', r: 'ばろっく', it: 'Barocco' },
      { w: '通奏低音', r: 'つうそうていおん', it: 'basso continuo' },
      { w: '協奏曲', r: 'きょうそうきょく', it: 'concerto' },
      { w: 'ウィーン古典派', r: 'うぃーんこてんは', it: 'Classicismo viennese' },
      { w: 'ロマン派', r: 'ろまんは', it: 'Romanticismo' },
      { w: '交響曲', r: 'こうきょうきょく', it: 'sinfonia' },
      { w: 'ソナタ', r: 'そなた', it: 'sonata' },
      { w: 'オペラ', r: 'おぺら', it: 'opera' }
    ]
  });

  A('cul-musica-popolare', {
    title: { t: 'ポピュラー[音楽|おんがく]と[録音|ろくおん]', it: 'Musica popolare, registrazione, cinema e orecchio' },
    sum: [
      { t: '⟦ブルース⟧は、アフリカ[系|けい]アメリカ[人|じん]の[伝統|でんとう]から[生|う]まれました。', it: 'Il blues nacque dalle tradizioni afroamericane.' },
      { t: 'ブルースは、[十二小節|じゅうにしょうせつ]の[形|かたち]が[特徴|とくちょう]です。', it: 'Il blues si riconosce per la struttura di dodici battute.' },
      { t: '⟦ジャズ⟧は、ニューオーリンズで[生|う]まれました。', it: 'Il jazz nacque a New Orleans.' },
      { t: 'ジャズでは、⟦[即興|そっきょう]⟧が[大切|たいせつ]です。', it: 'Nel jazz l’improvvisazione è importante.' },
      { t: '⟦ロックンロール⟧は、アメリカでブルースなどから[生|う]まれました。', it: 'Il rock and roll nacque negli Stati Uniti dal blues e da altri stili.' },
      { t: '⟦ポップ⟧は、[多|おお]くの[人|ひと]に[向|む]けた[音楽|おんがく]です。', it: 'Il pop è musica pensata per un pubblico ampio.' },
      { t: '⟦[電子音楽|でんしおんがく]⟧は、[回路|かいろ]やコンピューターで[音|おと]を[作|つく]ります。', it: 'La musica elettronica produce suoni con circuiti e computer.' }
    ],
    gloss: [
      { w: 'ブルース', r: 'ぶるーす', it: 'blues' },
      { w: 'ジャズ', r: 'じゃず', it: 'jazz' },
      { w: '即興', r: 'そっきょう', it: 'improvvisazione' },
      { w: 'ロックンロール', r: 'ろっくんろーる', it: 'rock and roll' },
      { w: 'ポップ', r: 'ぽっぷ', it: 'pop' },
      { w: '電子音楽', r: 'でんしおんがく', it: 'musica elettronica' },
      { w: 'シンセサイザー', r: 'しんせさいざー', it: 'sintetizzatore' },
      { w: 'ソウル', r: 'そうる', it: 'soul' },
      { w: 'ファンク', r: 'ふぁんく', it: 'funk' },
      { w: 'ヒップホップ', r: 'ひっぷほっぷ', it: 'hip hop' }
    ]
  });

  A('cul-primo-soccorso-principi', {
    title: { t: '[応急手当|おうきゅうてあて]の[原則|げんそく]', it: 'Primo soccorso: i principi' },
    sum: [
      { t: '⟦[応急手当|おうきゅうてあて]⟧は、[専門|せんもん]の[救助|きゅうじょ]が[来|く]るまでの[助|たす]けです。', it: 'Il primo soccorso è l’aiuto dato in attesa dei soccorsi professionali.' },
      { t: '[応急手当|おうきゅうてあて]は、[治療|ちりょう]の[代|か]わりではありません。', it: 'Il primo soccorso non è una cura e non sostituisce il medico.' },
      { t: 'まず、[自分|じぶん]と[現場|げんば]の⟦[安全|あんぜん]⟧を[確保|かくほ]します。', it: 'Per prima cosa si mettono in sicurezza se stessi e la scena.' },
      { t: '[次|つぎ]に、⟦[意識|いしき]⟧と⟦[呼吸|こきゅう]⟧を[見|み]ます。', it: 'Poi si valutano coscienza e respiro.' },
      { t: '⟦[百十二番|ひゃくじゅうにばん]⟧は、[緊急|きんきゅう]の[統一|とういつ][番号|ばんごう]です。', it: 'Il 112 è il numero unico di emergenza.' },
      { t: '⟦[通報|つうほう]⟧では、[場所|ばしょ]と[何|なに]があったかを[伝|つた]えます。', it: 'Nella chiamata si indicano il luogo e che cosa è successo.' },
      { t: 'この[授業|じゅぎょう]は[基本|きほん]の[紹介|しょうかい]で、[認定|にんてい]の[講習|こうしゅう]の[代|か]わりにはなりません。', it: 'Questa lezione presenta le basi e non sostituisce un corso certificato.' }
    ],
    gloss: [
      { w: '応急手当', r: 'おうきゅうてあて', it: 'primo soccorso' },
      { w: '安全', r: 'あんぜん', it: 'sicurezza' },
      { w: '意識', r: 'いしき', it: 'coscienza' },
      { w: '呼吸', r: 'こきゅう', it: 'respiro' },
      { w: '百十二番', r: 'ひゃくじゅうにばん', it: 'il 112' },
      { w: '通報', r: 'つうほう', it: 'chiamata di emergenza' },
      { w: '現場', r: 'げんば', it: 'scena, luogo dell’evento' },
      { w: '講習', r: 'こうしゅう', it: 'corso' },
      { w: '救助', r: 'きゅうじょ', it: 'soccorso' },
      { w: '緊急', r: 'きんきゅう', it: 'emergenza' }
    ]
  });

  A('cul-rianimazione-cardiopolmonare-dae', {
    title: { t: '[心肺蘇生|しんぱいそせい]とエーイーディー', it: 'Rianimazione cardiopolmonare e defibrillatore (DAE)' },
    sum: [
      { t: '⟦[心停止|しんていし]⟧は、[心臓|しんぞう]が[急|きゅう]に[働|はたら]かなくなり、[血液|けつえき]が[流|なが]れなくなる[状態|じょうたい]です。', it: 'L’arresto cardiaco è l’improvvisa interruzione dell’attività del cuore, con il sangue che smette di circolare.' },
      { t: '⟦[生存|せいぞん]の[連鎖|れんさ]⟧は、[命|いのち]を[救|すく]う[行動|こうどう]のつながりです。', it: 'La catena della sopravvivenza è la sequenza di azioni che salvano la vita.' },
      { t: '[手順|てじゅん]は「[認識|にんしき]、[通報|つうほう]、[圧迫|あっぱく]、⟦[除細動|じょさいどう]⟧」です。', it: 'La sequenza è: riconosco, chiamo, comprimo, defibrillo.' },
      { t: '⟦[胸骨圧迫|きょうこつあっぱく]⟧は、[胸|むね]の[中央|ちゅうおう]を[決|き]まった[速|はや]さと[深|ふか]さで[押|お]します。', it: 'Le compressioni toraciche si fanno al centro del torace con una frequenza e una profondità stabilite.' },
      { t: '[講習|こうしゅう]を[受|う]けた[人|ひと]は、[圧迫|あっぱく][三十回|さんじゅっかい]と⟦[人工呼吸|じんこうこきゅう]⟧[二回|にかい]を[繰|く]り[返|かえ]します。', it: 'Chi ha seguito un corso alterna trenta compressioni e due insufflazioni.' },
      { t: '⟦エーイーディー⟧は、[心臓|しんぞう]のリズムを[調|しら]べる[持|も]ち[運|はこ]べる[機械|きかい]です。', it: 'Il DAE è un apparecchio portatile che analizza il ritmo del cuore.' },
      { t: 'エーイーディーは[音声|おんせい]の[指示|しじ]で[使|つか]えますが、[認定|にんてい]の[講習|こうしゅう]は[欠|か]かせません。', it: 'Il DAE si usa seguendo le istruzioni vocali, ma il corso certificato resta indispensabile.' }
    ],
    gloss: [
      { w: '心停止', r: 'しんていし', it: 'arresto cardiaco' },
      { w: '生存の連鎖', r: 'せいぞんのれんさ', it: 'catena della sopravvivenza' },
      { w: '除細動', r: 'じょさいどう', it: 'defibrillazione' },
      { w: '胸骨圧迫', r: 'きょうこつあっぱく', it: 'compressioni toraciche' },
      { w: '人工呼吸', r: 'じんこうこきゅう', it: 'respirazione artificiale (insufflazioni)' },
      { w: 'エーイーディー', r: 'えーいーでぃー', it: 'DAE (defibrillatore)' },
      { w: '心臓', r: 'しんぞう', it: 'cuore' },
      { w: '血液', r: 'けつえき', it: 'sangue' },
      { w: '講習', r: 'こうしゅう', it: 'corso' },
      { w: '通報', r: 'つうほう', it: 'chiamata di emergenza' }
    ]
  });

  A('cul-ostruzione-ferite-ustioni', {
    title: { t: '[窒息|ちっそく]・けが・[火傷|やけど]', it: 'Ostruzione, ferite, emorragie e ustioni' },
    sum: [
      { t: '⟦[窒息|ちっそく]⟧は、[異物|いぶつ]で[息|いき]の[通|とお]り[道|みち]がふさがる[緊急事態|きんきゅうじたい]です。', it: 'Il soffocamento è un’emergenza in cui un corpo estraneo ostruisce le vie aeree.' },
      { t: '[軽|かる]い[場合|ばあい]は、[強|つよ]く[咳|せき]をして[出|だ]すのが[一番|いちばん]です。', it: 'Nei casi lievi la cosa migliore è tossire con forza.' },
      { t: '[重|おも]い[場合|ばあい]は、[背中|せなか]を[叩|たた]く[方法|ほうほう]と⟦ハイムリック[法|ほう]⟧を[使|つか]います。', it: 'Nei casi gravi si usano i colpi dorsali e la manovra di Heimlich.' },
      { t: '⟦[出血|しゅっけつ]⟧は、[清潔|せいけつ]な[布|ぬの]で⟦[直接圧迫|ちょくせつあっぱく]⟧して[止|と]めます。', it: 'Un’emorragia si ferma con la pressione diretta di un panno pulito.' },
      { t: '⟦[鼻血|はなぢ]⟧は、[座|すわ]って[頭|あたま]を[少|すこ]し[前|まえ]に[傾|かたむ]けます。', it: 'In caso di sangue dal naso ci si siede con la testa leggermente inclinata in avanti.' },
      { t: '⟦[火傷|やけど]⟧は、すぐに[流水|りゅうすい]で[冷|ひ]やします。', it: 'Una scottatura va raffreddata subito con acqua corrente.' },
      { t: '⟦[傷|きず]⟧が[軽|かる]ければ、[流水|りゅうすい]で[洗|あら]って[清潔|せいけつ]に[覆|おお]います。', it: 'Se la ferita è lieve, si lava con acqua corrente e si copre in modo pulito.' }
    ],
    gloss: [
      { w: '窒息', r: 'ちっそく', it: 'soffocamento' },
      { w: 'ハイムリック法', r: 'はいむりっくほう', it: 'manovra di Heimlich' },
      { w: '出血', r: 'しゅっけつ', it: 'emorragia' },
      { w: '直接圧迫', r: 'ちょくせつあっぱく', it: 'pressione diretta' },
      { w: '鼻血', r: 'はなぢ', it: 'sangue dal naso' },
      { w: '火傷', r: 'やけど', it: 'ustione' },
      { w: '傷', r: 'きず', it: 'ferita' },
      { w: '流水', r: 'りゅうすい', it: 'acqua corrente' },
      { w: '気道', r: 'きどう', it: 'vie aeree' },
      { w: '異物', r: 'いぶつ', it: 'corpo estraneo' }
    ]
  });

  A('cul-traumi-caldo-freddo-allergie', {
    title: { t: '[外傷|がいしょう]・[暑|あつ]さ[寒|さむ]さ・アレルギー', it: 'Traumi, caldo e freddo, avvelenamenti e allergie gravi' },
    sum: [
      { t: '⟦[捻挫|ねんざ]⟧や⟦[打撲|だぼく]⟧の[軽|かる]い[場合|ばあい]は、[安静|あんせい]にして[布|ぬの]で[包|つつ]んだ[氷|こおり]で[冷|ひ]やします。', it: 'Per distorsioni e contusioni lievi si tiene a riposo e si applica ghiaccio avvolto in un panno.' },
      { t: '⟦[脊椎|せきつい]⟧の[損傷|そんしょう]が[疑|うたが]われるときは、[動|うご]かさずに[百十二番|ひゃくじゅうにばん]へ[連絡|れんらく]します。', it: 'Se si sospetta una lesione alla colonna, non si muove la persona e si chiama il 112.' },
      { t: '⟦[熱中症|ねっちゅうしょう]⟧は、[体|からだ]が[熱|ねつ]を[逃|に]がせなくなる[危険|きけん]な[状態|じょうたい]です。', it: 'Il colpo di calore è una condizione grave in cui il corpo non riesce più a smaltire il calore.' },
      { t: '[熱中症|ねっちゅうしょう]が[疑|うたが]われるときは、[百十二番|ひゃくじゅうにばん]に[通報|つうほう]します。', it: 'Se si sospetta un colpo di calore, si chiama il 112.' },
      { t: '⟦[低体温症|ていたいおんしょう]⟧は、[体温|たいおん]が[下|さ]がりすぎる[状態|じょうたい]です。', it: 'L’ipotermia è un abbassamento eccessivo della temperatura del corpo.' },
      { t: '⟦[中毒|ちゅうどく]⟧は、[飲|の]み[込|こ]み、[吸|す]い[込|こ]み、[接触|せっしょく]などで[起|お]こります。', it: 'L’avvelenamento può avvenire per ingestione, inalazione o contatto.' },
      { t: '⟦アナフィラキシー⟧は、[重|おも]いアレルギー[反応|はんのう]で、すぐに[百十二番|ひゃくじゅうにばん]へ[連絡|れんらく]します。', it: 'L’anafilassi è una grave reazione allergica: si chiama subito il 112.' }
    ],
    gloss: [
      { w: '捻挫', r: 'ねんざ', it: 'distorsione' },
      { w: '打撲', r: 'だぼく', it: 'contusione' },
      { w: '骨折', r: 'こっせつ', it: 'frattura' },
      { w: '脊椎', r: 'せきつい', it: 'colonna vertebrale' },
      { w: '熱中症', r: 'ねっちゅうしょう', it: 'colpo di calore' },
      { w: '低体温症', r: 'ていたいおんしょう', it: 'ipotermia' },
      { w: '中毒', r: 'ちゅうどく', it: 'avvelenamento' },
      { w: 'アナフィラキシー', r: 'あなふぃらきしー', it: 'anafilassi' },
      { w: '百十二番', r: 'ひゃくじゅうにばん', it: 'il 112' },
      { w: '体温', r: 'たいおん', it: 'temperatura corporea' }
    ]
  });

  A('cul-riconoscere-un-malore', {
    title: { t: '[体調|たいちょう]の[急変|きゅうへん]に[気|き]づく', it: 'Riconoscere un malore' },
    sum: [
      { t: '[診断|しんだん]ではなく⟦[兆候|ちょうこう]⟧を[見|み]て、[百十二番|ひゃくじゅうにばん]に[連絡|れんらく]するか[決|き]めます。', it: 'Non si fa diagnosi: si guardano i segnali per decidere se chiamare il 112.' },
      { t: '⟦[心筋梗塞|しんきんこうそく]⟧は、[心臓|しんぞう]に[血液|けつえき]を[送|おく]る[血管|けっかん]がふさがって[起|お]こります。', it: 'L’infarto avviene quando si ostruisce un vaso che irrora il cuore.' },
      { t: '[胸|むね]の[中央|ちゅうおう]の[痛|いた]みや[圧迫感|あっぱくかん]は、[典型的|てんけいてき]な[兆候|ちょうこう]です。', it: 'Il dolore o l’oppressione al centro del torace è un segnale tipico.' },
      { t: '⟦[脳卒中|のうそっちゅう]⟧は、[脳|のう]の[血|ち]の[流|なが]れが[止|と]まるか、[脳出血|のうしゅっけつ]が[起|お]こることです。', it: 'L’ictus è l’interruzione del flusso di sangue nel cervello oppure un’emorragia cerebrale.' },
      { t: '⟦ファスト⟧では、[顔|かお]、[腕|うで]、[言葉|ことば]を[調|しら]べ、[異常|いじょう]があればすぐ[通報|つうほう]します。', it: 'Con la regola FAST si controllano viso, braccio e parola e, se c’è un’anomalia, si chiama subito.' },
      { t: '⟦[失神|しっしん]⟧は、[脳|のう]への[血流|けつりゅう]が[減|へ]って[短|みじか]い[間|あいだ][意識|いしき]を[失|うしな]うことです。', it: 'Lo svenimento è una breve perdita di coscienza dovuta a un ridotto afflusso di sangue al cervello.' },
      { t: '⟦[痙攣|けいれん]⟧は、[脳|のう]の[異常|いじょう]な[放電|ほうでん]で[体|からだ]が[勝手|かって]に[動|うご]くことです。', it: 'La convulsione è un movimento incontrollato del corpo causato da una scarica anomala del cervello.' }
    ],
    gloss: [
      { w: '兆候', r: 'ちょうこう', it: 'segnale, segno' },
      { w: '心筋梗塞', r: 'しんきんこうそく', it: 'infarto' },
      { w: '脳卒中', r: 'のうそっちゅう', it: 'ictus' },
      { w: 'ファスト', r: 'ふぁすと', it: 'regola FAST' },
      { w: '失神', r: 'しっしん', it: 'svenimento' },
      { w: '痙攣', r: 'けいれん', it: 'convulsione' },
      { w: '意識', r: 'いしき', it: 'coscienza' },
      { w: '低血糖', r: 'ていけっとう', it: 'ipoglicemia' },
      { w: '喘息', r: 'ぜんそく', it: 'asma' },
      { w: '百十二番', r: 'ひゃくじゅうにばん', it: 'il 112' }
    ]
  });

  A('cul-nutrizione-di-base', {
    title: { t: '[栄養|えいよう]の[基本|きほん]と[表示|ひょうじ]の[読|よ]み[方|かた]', it: 'Nutrizione di base e lettura delle etichette' },
    sum: [
      { t: '⟦[栄養素|えいようそ]⟧は、[体|からだ]がエネルギーや[構成|こうせい]や[調節|ちょうせつ]に[使|つか]う[物質|ぶっしつ]です。', it: 'I nutrienti sono le sostanze che il corpo usa per energia, costruzione e regolazione.' },
      { t: '⟦[三大栄養素|さんだいえいようそ]⟧は、[炭水化物|たんすいかぶつ]、タンパク[質|しつ]、[脂質|ししつ]です。', it: 'I macronutrienti sono carboidrati, proteine e grassi.' },
      { t: '⟦[炭水化物|たんすいかぶつ]⟧は、エネルギーの[主|おも]な[源|みなもと]です。', it: 'I carboidrati sono la principale fonte di energia.' },
      { t: '⟦[食物繊維|しょくもつせんい]⟧は、[腸|ちょう]や[満腹感|まんぷくかん]に[役立|やくだ]ちます。', it: 'Le fibre sono utili per l’intestino e la sazietà.' },
      { t: '⟦[地中海式|ちちゅうかいしき]⟧の[食事|しょくじ]は、[野菜|やさい]、[果物|くだもの]、[穀物|こくもつ]、オリーブ[油|ゆ]が[中心|ちゅうしん]です。', it: 'La dieta mediterranea ruota attorno a verdura, frutta, cereali e olio d’oliva.' },
      { t: '⟦[栄養成分表示|えいようせいぶんひょうじ]⟧は、[百|ひゃく]グラムあたりの[数値|すうち]で[比|くら]べます。', it: 'Le etichette nutrizionali si confrontano usando i valori per cento grammi.' },
      { t: '[一食分|いっしょくぶん]の[数値|すうち]は、[量|りょう]に[合|あ]わせて[計算|けいさん]します。', it: 'I valori di una porzione si calcolano in base alla quantità.' }
    ],
    gloss: [
      { w: '栄養素', r: 'えいようそ', it: 'nutriente' },
      { w: '三大栄養素', r: 'さんだいえいようそ', it: 'macronutrienti' },
      { w: '炭水化物', r: 'たんすいかぶつ', it: 'carboidrati' },
      { w: 'タンパク質', r: 'たんぱくしつ', it: 'proteine' },
      { w: '脂質', r: 'ししつ', it: 'grassi' },
      { w: '食物繊維', r: 'しょくもつせんい', it: 'fibre' },
      { w: '地中海式', r: 'ちちゅうかいしき', it: 'mediterraneo' },
      { w: '栄養成分表示', r: 'えいようせいぶんひょうじ', it: 'etichetta nutrizionale' },
      { w: '一食分', r: 'いっしょくぶん', it: 'una porzione' },
      { w: '数値', r: 'すうち', it: 'valore numerico' }
    ]
  });

  A('cul-sonno-movimento-abitudini', {
    title: { t: '[睡眠|すいみん]と[運動|うんどう]と[習慣|しゅうかん]', it: 'Sonno, movimento e abitudini' },
    sum: [
      { t: '[食事|しょくじ]や[運動|うんどう]や[睡眠|すいみん]は、[一緒|いっしょ]に[健康|けんこう]に[影響|えいきょう]します。', it: 'Alimentazione, movimento e sonno agiscono insieme sulla salute.' },
      { t: 'この[授業|じゅぎょう]は[一般的|いっぱんてき]な⟦[目安|めやす]⟧で、[個人|こじん]への[処方|しょほう]ではありません。', it: 'La lezione dà ordini di grandezza generali e non è una prescrizione individuale.' },
      { t: '⟦[世界保健機関|せかいほけんきかん]⟧は、[身体活動|しんたいかつどう]の[目安|めやす]を[示|しめ]しています。', it: 'L’Organizzazione Mondiale della Sanità indica dei valori di riferimento per l’attività fisica.' },
      { t: '⟦[座|すわ]りすぎ⟧は、[運動|うんどう]をしていても[起|お]こります。', it: 'La sedentarietà può esserci anche se si fa sport.' },
      { t: '⟦[睡眠|すいみん]⟧は、[記憶|きおく]やホルモンや[気分|きぶん]を[整|ととの]えます。', it: 'Il sonno consolida la memoria e regola ormoni e umore.' },
      { t: '⟦[睡眠衛生|すいみんえいせい]⟧は、[良|よ]い[睡眠|すいみん]を[助|たす]ける[習慣|しゅうかん]の[集|あつ]まりです。', it: 'L’igiene del sonno è l’insieme delle abitudini che favoriscono un buon sonno.' },
      { t: '[小|ちい]さく[始|はじ]めると、⟦[習慣|しゅうかん]⟧は[続|つづ]けやすくなります。', it: 'Partendo in piccolo, un’abitudine è più facile da mantenere.' }
    ],
    gloss: [
      { w: '世界保健機関', r: 'せかいほけんきかん', it: 'Organizzazione Mondiale della Sanità' },
      { w: '目安', r: 'めやす', it: 'valore di riferimento' },
      { w: '座りすぎ', r: 'すわりすぎ', it: 'sedentarietà' },
      { w: '睡眠', r: 'すいみん', it: 'sonno' },
      { w: '睡眠衛生', r: 'すいみんえいせい', it: 'igiene del sonno' },
      { w: '習慣', r: 'しゅうかん', it: 'abitudine' },
      { w: '運動', r: 'うんどう', it: 'movimento, esercizio' },
      { w: '健康', r: 'けんこう', it: 'salute' },
      { w: '身体活動', r: 'しんたいかつどう', it: 'attività fisica' },
      { w: '処方', r: 'しょほう', it: 'prescrizione' }
    ]
  });

  A('cul-come-funziona-internet', {
    title: { t: 'インターネットの[仕組|しく]み', it: 'Come funziona Internet' },
    sum: [
      { t: '⟦インターネット⟧は、ネットワークのネットワークです。', it: 'Internet è una rete di reti.' },
      { t: 'データは、[小|ちい]さな⟦パケット⟧に[分|わ]かれて[届|とど]きます。', it: 'I dati viaggiano divisi in piccoli pacchetti.' },
      { t: '⟦アイピーアドレス⟧は、ネットワーク[上|じょう]の[機器|きき]の[住所|じゅうしょ]です。', it: 'L’indirizzo IP è l’indirizzo di un dispositivo in rete.' },
      { t: '⟦ディーエヌエス⟧は、[名前|なまえ]をアイピーアドレスに[変|か]える[電話帳|でんわちょう]のようなものです。', it: 'Il DNS è come una rubrica che traduce i nomi in indirizzi IP.' },
      { t: '⟦ブラウザ⟧はページを[要求|ようきゅう]して[表示|ひょうじ]し、⟦サーバー⟧はそれを[保管|ほかん]して[返|かえ]します。', it: 'Il browser richiede e mostra la pagina; il server la conserva e risponde.' },
      { t: '⟦エイチティーティーピーエス⟧は、[通信|つうしん]を[暗号化|あんごうか]して、[改|かい]ざんも[防|ふせ]ぎます。', it: 'HTTPS cifra la comunicazione e impedisce anche che i dati vengano alterati.' },
      { t: 'ただし、エイチティーティーピーエスはサイトが[誠実|せいじつ]だとは[保証|ほしょう]しません。', it: 'Tuttavia HTTPS non garantisce che il sito sia onesto.' }
    ],
    gloss: [
      { w: 'インターネット', r: 'いんたーねっと', it: 'Internet' },
      { w: 'パケット', r: 'ぱけっと', it: 'pacchetto' },
      { w: 'アイピーアドレス', r: 'あいぴーあどれす', it: 'indirizzo IP' },
      { w: 'ディーエヌエス', r: 'でぃーえぬえす', it: 'DNS' },
      { w: 'ブラウザ', r: 'ぶらうざ', it: 'browser' },
      { w: 'サーバー', r: 'さーばー', it: 'server' },
      { w: 'エイチティーティーピーエス', r: 'えいちてぃーてぃーぴーえす', it: 'HTTPS' },
      { w: '暗号化', r: 'あんごうか', it: 'cifratura' },
      { w: 'クラウド', r: 'くらうど', it: 'cloud' },
      { w: 'ルーター', r: 'るーたー', it: 'router' }
    ]
  });

  A('cul-sicurezza-online-difesa', {
    title: { t: 'ネットの[安全|あんぜん]を[守|まも]る[基本|きほん]', it: 'Sicurezza online: difesa di base' },
    sum: [
      { t: '[安全|あんぜん]とは[恐|おそ]れることではなく、[起|お]こりやすい[危険|きけん]を[減|へ]らすことです。', it: 'Sicurezza non significa paura, ma ridurre i rischi più probabili.' },
      { t: '⟦パスワード⟧は、[長|なが]く、サービスごとに[別|べつ]で、[予測|よそく]しにくいものが[強|つよ]いです。', it: 'Una password robusta è lunga, diversa per ogni servizio e poco prevedibile.' },
      { t: '⟦パスワード[管理|かんり]ツール⟧は、すべてのパスワードを[暗号化|あんごうか]して[保管|ほかん]します。', it: 'Il gestore di password conserva tutte le password in forma cifrata.' },
      { t: '⟦[二要素認証|にようそにんしょう]⟧は、パスワードのほかに[別|べつ]の[確認|かくにん]を[求|もと]めます。', it: 'L’autenticazione a due fattori richiede, oltre alla password, un’altra verifica.' },
      { t: '⟦アップデート⟧は、[知|し]られた[弱点|じゃくてん]を[直|なお]します。', it: 'Gli aggiornamenti correggono le vulnerabilità note.' },
      { t: '⟦バックアップ⟧は、[三|みっ]つ[作|つく]り、[二|ふた]つの[媒体|ばいたい]に[分|わ]け、[一|ひと]つを[外|そと]に[置|お]きます。', it: 'Il backup segue la regola 3-2-1: tre copie, su due supporti, una conservata fuori sede.' },
      { t: '[公共|こうきょう]の⟦ワイファイ⟧では、[他人|たにん]に[通信|つうしん]を[見|み]られる[恐|おそ]れがあります。', it: 'Su un Wi-Fi pubblico altri possono osservare la comunicazione.' }
    ],
    gloss: [
      { w: 'パスワード', r: 'ぱすわーど', it: 'password' },
      { w: 'パスワード管理ツール', r: 'ぱすわーどかんりつーる', it: 'gestore di password' },
      { w: '二要素認証', r: 'にようそにんしょう', it: 'autenticazione a due fattori' },
      { w: 'アップデート', r: 'あっぷでーと', it: 'aggiornamento' },
      { w: 'バックアップ', r: 'ばっくあっぷ', it: 'backup' },
      { w: 'ワイファイ', r: 'わいふぁい', it: 'Wi-Fi' },
      { w: '暗号化', r: 'あんごうか', it: 'cifratura' },
      { w: '弱点', r: 'じゃくてん', it: 'vulnerabilità' },
      { w: 'ランサムウェア', r: 'らんさむうぇあ', it: 'ransomware' },
      { w: '媒体', r: 'ばいたい', it: 'supporto' }
    ]
  });

  A('cul-truffe-e-phishing', {
    title: { t: '[詐欺|さぎ]とフィッシング', it: 'Truffe e phishing' },
    sum: [
      { t: '⟦ソーシャルエンジニアリング⟧は、[心理|しんり]を[利用|りよう]して[人|ひと]をだます[手口|てぐち]です。', it: 'L’ingegneria sociale è l’insieme di tecniche di inganno che sfruttano la psicologia.' },
      { t: '[急|いそ]がせる、[怖|こわ]がらせる、⟦[権威|けんい]⟧を[装|よそお]う、[欲|よく]を[刺激|しげき]するのが、よくある[手段|しゅだん]です。', it: 'Mettere fretta, spaventare, fingere autorità e stuzzicare l’avidità sono leve comuni.' },
      { t: '⟦フィッシング⟧は、[信頼|しんらい]できる[相手|あいて]を[装|よそお]った[偽|にせ]の[連絡|れんらく]で、[情報|じょうほう]を[盗|ぬす]むものです。', it: 'Il phishing usa falsi messaggi che fingono di venire da un ente fidato per ottenere dati.' },
      { t: '⟦スミッシング⟧は、エスエムエスで[送|おく]られる[偽|にせ]の[連絡|れんらく]です。', it: 'Lo smishing è un falso messaggio inviato via SMS.' },
      { t: '⟦ビッシング⟧は、[電話|でんわ]で[行|おこな]うフィッシングです。', it: 'Il vishing è il phishing fatto per telefono.' },
      { t: '[手順|てじゅん]は「[止|と]まる、[考|かんが]える、[確認|かくにん]する、[決|き]める」の[四|よっ]つです。', it: 'La procedura ha quattro mosse: fermarsi, pensare, verificare, decidere.' },
      { t: '⟦[被害|ひがい]⟧にあったら、すぐ[銀行|ぎんこう]に[連絡|れんらく]し、[警察|けいさつ]に[届|とど]け[出|で]ます。', it: 'Se si subisce una truffa, si chiama subito la banca e si denuncia alla polizia.' }
    ],
    gloss: [
      { w: 'ソーシャルエンジニアリング', r: 'そーしゃるえんじにありんぐ', it: 'ingegneria sociale' },
      { w: '権威', r: 'けんい', it: 'autorità' },
      { w: 'フィッシング', r: 'ふぃっしんぐ', it: 'phishing' },
      { w: 'スミッシング', r: 'すみっしんぐ', it: 'smishing' },
      { w: 'ビッシング', r: 'びっしんぐ', it: 'vishing' },
      { w: '被害', r: 'ひがい', it: 'danno, essere vittima' },
      { w: '手口', r: 'てぐち', it: 'tecnica, modo di agire' },
      { w: '詐欺', r: 'さぎ', it: 'truffa' },
      { w: '銀行', r: 'ぎんこう', it: 'banca' },
      { w: '警察', r: 'けいさつ', it: 'polizia' }
    ]
  });

  A('cul-privacy-e-dati-personali', {
    title: { t: 'プライバシーと[個人情報|こじんじょうほう]', it: 'Privacy e dati personali' },
    sum: [
      { t: '⟦[個人情報|こじんじょうほう]⟧は、[特定|とくてい]できる[人|ひと]に[関|かん]する[情報|じょうほう]です。', it: 'I dati personali sono le informazioni che riguardano una persona identificabile.' },
      { t: '[健康|けんこう]や[宗教|しゅうきょう]などの[情報|じょうほう]は、[特|とく]に[強|つよ]く[保護|ほご]されます。', it: 'Dati come la salute o la religione ricevono una protezione rafforzata.' },
      { t: '⟦ジーディーピーアール⟧は、[個人情報|こじんじょうほう]を[守|まも]るヨーロッパの[規則|きそく]です。', it: 'Il GDPR è la normativa europea per la protezione dei dati personali.' },
      { t: '[本人|ほんにん]には、[閲覧|えつらん]、[訂正|ていせい]、[削除|さくじょ]などの⟦[権利|けんり]⟧があります。', it: 'L’interessato ha diritti come accesso, rettifica e cancellazione.' },
      { t: '⟦デジタルフットプリント⟧は、ネット[上|じょう]に[残|のこ]した[痕跡|こんせき]の[全体|ぜんたい]です。', it: 'L’impronta digitale è l’insieme delle tracce lasciate online.' },
      { t: 'アプリの⟦[権限|けんげん]⟧は、[必要|ひつよう]な[最小限|さいしょうげん]にするのが[原則|げんそく]です。', it: 'I permessi delle app seguono la regola del minimo necessario.' },
      { t: '⟦[未成年|みせいねん]⟧は、ネットで[危険|きけん]に[遭|あ]いやすい[利用者|りようしゃ]です。', it: 'I minori sono utenti più esposti ai rischi online.' }
    ],
    gloss: [
      { w: '個人情報', r: 'こじんじょうほう', it: 'dati personali' },
      { w: 'ジーディーピーアール', r: 'じーでぃーぴーあーる', it: 'GDPR' },
      { w: '権利', r: 'けんり', it: 'diritto' },
      { w: 'デジタルフットプリント', r: 'でじたるふっとぷりんと', it: 'impronta digitale (tracce online)' },
      { w: '権限', r: 'けんげん', it: 'permesso' },
      { w: '未成年', r: 'みせいねん', it: 'minore' },
      { w: '本人', r: 'ほんにん', it: 'interessato' },
      { w: '削除', r: 'さくじょ', it: 'cancellazione' },
      { w: 'クッキー', r: 'くっきー', it: 'cookie' },
      { w: '保護', r: 'ほご', it: 'protezione' }
    ]
  });

  A('cul-ia-fake-news-fonti', {
    title: { t: '[人工知能|じんこうちのう]とフェイクニュース', it: 'Intelligenza artificiale, fake news e verifica delle fonti' },
    sum: [
      { t: '⟦[人工知能|じんこうちのう]⟧は、[画像|がぞう]の[認識|にんしき]や[翻訳|ほんやく]など、[人間|にんげん]らしい[作業|さぎょう]をする[技術|ぎじゅつ]です。', it: 'L’intelligenza artificiale è un insieme di tecniche per compiti tipicamente umani, come riconoscere immagini o tradurre.' },
      { t: '⟦[言語|げんご]モデル⟧は、[次|つぎ]に[来|く]る[言葉|ことば]を[確率|かくりつ]で[予測|よそく]して[文章|ぶんしょう]を[作|つく]ります。', it: 'Un modello linguistico produce testo prevedendo con probabilità la parola successiva.' },
      { t: '⟦ハルシネーション⟧は、[自信|じしん]を[持|も]って[示|しめ]される[誤|あやま]った[内容|ないよう]です。', it: 'Un’allucinazione è un contenuto falso presentato con sicurezza.' },
      { t: '⟦ディープフェイク⟧は、[顔|かお]や[声|こえ]を[人工的|じんこうてき]に[作|つく]った[偽|にせ]の[内容|ないよう]です。', it: 'Il deepfake è un falso contenuto con volti o voci creati artificialmente.' },
      { t: 'ニュースを[確認|かくにん]するには、まず[止|と]まり、⟦[情報源|じょうほうげん]⟧と[日付|ひづけ]を[調|しら]べます。', it: 'Per verificare una notizia ci si ferma, poi si controllano la fonte e la data.' },
      { t: '⟦ラテラル・リーディング⟧は、ほかのタブで、そのサイトについて[調|しら]べる[方法|ほうほう]です。', it: 'La lettura laterale consiste nel cercare in altre schede che cosa si dice di quel sito.' },
      { t: '[健康|けんこう]や[安全|あんぜん]の[判断|はんだん]は、[人工知能|じんこうちのう]に[任|まか]せてはいけません。', it: 'Le decisioni su salute e sicurezza non vanno affidate all’intelligenza artificiale.' }
    ],
    gloss: [
      { w: '人工知能', r: 'じんこうちのう', it: 'intelligenza artificiale' },
      { w: '機械学習', r: 'きかいがくしゅう', it: 'apprendimento automatico' },
      { w: '言語モデル', r: 'げんごもでる', it: 'modello linguistico' },
      { w: 'ハルシネーション', r: 'はるしねーしょん', it: 'allucinazione' },
      { w: 'ディープフェイク', r: 'でぃーぷふぇいく', it: 'deepfake' },
      { w: '情報源', r: 'じょうほうげん', it: 'fonte' },
      { w: 'ラテラル・リーディング', r: 'らてらるりーでぃんぐ', it: 'lettura laterale' },
      { w: 'フェイクニュース', r: 'ふぇいくにゅーす', it: 'fake news' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '予測', r: 'よそく', it: 'previsione' }
    ]
  });

  A('cul-cucina-igiene-sicurezza', {
    title: { t: '[台所|だいどころ]の[衛生|えいせい]と[安全|あんぜん]', it: 'Cucina: igiene, sicurezza e attrezzatura' },
    sum: [
      { t: '⟦[食中毒|しょくちゅうどく]⟧は、[見|み]た[目|め]や[匂|にお]いでは[分|わ]かりません。', it: 'L’intossicazione alimentare non si riconosce dall’aspetto o dall’odore.' },
      { t: '⟦[細菌|さいきん]⟧は、[条件|じょうけん]が[良|よ]いと[速|はや]く[増|ふ]えます。', it: 'I batteri si moltiplicano in fretta quando le condizioni sono favorevoli.' },
      { t: '⟦[冷凍|れいとう]⟧は[細菌|さいきん]の[増殖|ぞうしょく]を[止|と]めますが、[殺菌|さっきん]はしません。', it: 'Il congelamento ferma la moltiplicazione dei batteri ma non li elimina.' },
      { t: '⟦[交差汚染|こうさおせん]⟧は、[生|なま]の[食品|しょくひん]から[食|た]べる[前|まえ]の[食品|しょくひん]へ[細菌|さいきん]が[移|うつ]ることです。', it: 'La contaminazione crociata è il passaggio di batteri da un alimento crudo a uno già pronto.' },
      { t: '⟦[手洗い|てあらい]⟧では、[石|せっ]けんで[二十秒|にじゅうびょう][以上|いじょう]こすって[洗|あら]います。', it: 'Lavando le mani si strofina con il sapone per almeno venti secondi.' },
      { t: '⟦[賞味期限|しょうみきげん]⟧は[品質|ひんしつ]の[目安|めやす]で、⟦[消費期限|しょうひきげん]⟧は[安全|あんぜん]の[期限|きげん]です。', it: 'Il termine minimo di conservazione riguarda la qualità; la data di scadenza riguarda la sicurezza.' },
      { t: '[包丁|ほうちょう]は、よく[切|き]れるほうが[力|ちから]が[要|い]らず[安全|あんぜん]です。', it: 'Un coltello ben affilato richiede meno forza ed è più sicuro.' }
    ],
    gloss: [
      { w: '食中毒', r: 'しょくちゅうどく', it: 'intossicazione alimentare' },
      { w: '細菌', r: 'さいきん', it: 'batteri' },
      { w: '冷凍', r: 'れいとう', it: 'congelamento' },
      { w: '交差汚染', r: 'こうさおせん', it: 'contaminazione crociata' },
      { w: '手洗い', r: 'てあらい', it: 'lavaggio delle mani' },
      { w: '賞味期限', r: 'しょうみきげん', it: 'termine minimo di conservazione' },
      { w: '消費期限', r: 'しょうひきげん', it: 'data di scadenza' },
      { w: '包丁', r: 'ほうちょう', it: 'coltello da cucina' },
      { w: '冷蔵庫', r: 'れいぞうこ', it: 'frigorifero' },
      { w: '衛生', r: 'えいせい', it: 'igiene' }
    ]
  });

  A('cul-tecniche-base-cottura', {
    title: { t: '[切|き]り[方|かた]と[調理|ちょうり]の[基本|きほん]', it: 'Tecniche di base: tagli e cotture' },
    sum: [
      { t: '[調理|ちょうり]とは、[熱|ねつ]を[伝|つた]えて[食材|しょくざい]の[構造|こうぞう]を[変|か]えることです。', it: 'Cuocere significa trasferire calore e cambiare la struttura del cibo.' },
      { t: '[熱|ねつ]は、⟦[伝導|でんどう]⟧、⟦[対流|たいりゅう]⟧、⟦[放射|ほうしゃ]⟧の[三|みっ]つの[方法|ほうほう]で[伝|つた]わります。', it: 'Il calore si trasmette in tre modi: conduzione, convezione e irraggiamento.' },
      { t: '[均一|きんいつ]に[火|ひ]を[通|とお]すには、[同|おな]じ[大|おお]きさに[切|き]ります。', it: 'Per una cottura uniforme si tagliano i pezzi della stessa dimensione.' },
      { t: '⟦メイラード[反応|はんのう]⟧は、[表面|ひょうめん]を[茶色|ちゃいろ]にして[香|かお]りを[生|う]みます。', it: 'La reazione di Maillard colora la superficie di bruno e produce aromi.' },
      { t: '[表面|ひょうめん]が[乾|かわ]いていないと、[水|みず]が[熱|ねつ]を[奪|うば]って[焼|や]き[色|いろ]がつきません。', it: 'Se la superficie non è asciutta, l’acqua sottrae calore e non si forma la rosolatura.' },
      { t: '⟦ソフリット⟧は、[玉|たま]ねぎと[人参|にんじん]とセロリを[弱火|よわび]で[炒|いた]めた[土台|どだい]です。', it: 'Il soffritto è una base di cipolla, carota e sedano cotti a fuoco dolce.' },
      { t: '⟦[煮込|にこ]み⟧は、[焼|や]き[色|いろ]をつけた[肉|にく]を[少|すこ]しの[液体|えきたい]で[長|なが]く[煮|に]ます。', it: 'La brasatura cuoce a lungo, con poco liquido, un pezzo di carne prima rosolato.' }
    ],
    gloss: [
      { w: '調理', r: 'ちょうり', it: 'cottura, preparazione' },
      { w: '伝導', r: 'でんどう', it: 'conduzione' },
      { w: '対流', r: 'たいりゅう', it: 'convezione' },
      { w: '放射', r: 'ほうしゃ', it: 'irraggiamento' },
      { w: 'メイラード反応', r: 'めいらーどはんのう', it: 'reazione di Maillard' },
      { w: 'ソフリット', r: 'そふりっと', it: 'soffritto' },
      { w: '煮込み', r: 'にこみ', it: 'brasatura, cottura lenta' },
      { w: '食材', r: 'しょくざい', it: 'ingrediente' },
      { w: '弱火', r: 'よわび', it: 'fuoco dolce' },
      { w: 'コラーゲン', r: 'こらーげん', it: 'collagene' }
    ]
  });

  A('cul-pasta-riso-cereali-legumi', {
    title: { t: 'パスタ・[米|こめ]・[穀物|こくもつ]・[豆|まめ]', it: 'Pasta, riso, cereali e legumi' },
    sum: [
      { t: 'パスタや[米|こめ]には、⟦デンプン⟧が[多|おお]く[含|ふく]まれます。', it: 'Pasta e riso sono ricchi di amido.' },
      { t: '⟦[糊化|こか]⟧は、デンプンが[熱|あつ]い[水|みず]を[吸|す]って[膨|ふく]らむ[変化|へんか]です。', it: 'La gelatinizzazione è il cambiamento in cui l’amido assorbe acqua calda e si gonfia.' },
      { t: '⟦パスタ⟧は、たっぷりの[湯|ゆ]でゆでます。', it: 'La pasta si cuoce in molta acqua.' },
      { t: '⟦[塩|しお]⟧は、[湯|ゆ]が[沸|わ]いてから[入|い]れます。', it: 'Il sale si aggiunge quando l’acqua bolle.' },
      { t: '[米|こめ]は、[水|みず]を[吸|す]わせて[炊|た]く[方法|ほうほう]と、ゆでて[湯|ゆ]を[切|き]る[方法|ほうほう]があります。', it: 'Il riso si può cuocere per assorbimento oppure lessare e scolare.' },
      { t: '⟦[乾燥豆|かんそうまめ]⟧は、[水|みず]につけてから[煮|に]ます。', it: 'I legumi secchi si mettono in ammollo prima di cuocerli.' },
      { t: '⟦[穀物|こくもつ]⟧は[種類|しゅるい]によって[時間|じかん]が[違|ちが]うので、[袋|ふくろ]の[表示|ひょうじ]を[確|たし]かめます。', it: 'I tempi dei cereali variano a seconda del tipo, quindi si legge la confezione.' }
    ],
    gloss: [
      { w: 'デンプン', r: 'でんぷん', it: 'amido' },
      { w: '糊化', r: 'こか', it: 'gelatinizzazione' },
      { w: 'パスタ', r: 'ぱすた', it: 'pasta' },
      { w: '塩', r: 'しお', it: 'sale' },
      { w: '乾燥豆', r: 'かんそうまめ', it: 'legumi secchi' },
      { w: '穀物', r: 'こくもつ', it: 'cereali' },
      { w: '米', r: 'こめ', it: 'riso' },
      { w: 'リゾット', r: 'りぞっと', it: 'risotto' },
      { w: 'ピラフ', r: 'ぴらふ', it: 'pilaf' },
      { w: '湯', r: 'ゆ', it: 'acqua calda, acqua di cottura' }
    ]
  });

  A('cul-carne-pesce-uova', {
    title: { t: '[肉|にく]・[魚|さかな]・[卵|たまご]の[調理|ちょうり]と[安全|あんぜん]', it: 'Carne, pesce e uova: cotture e sicurezza' },
    sum: [
      { t: '[肉|にく]、[魚|さかな]、[卵|たまご]は、タンパク[質|しつ]と[水分|すいぶん]が[多|おお]く、[細菌|さいきん]が[増|ふ]えやすい[食品|しょくひん]です。', it: 'Carne, pesce e uova sono ricchi di proteine e acqua, e i batteri vi prosperano.' },
      { t: '⟦[鶏肉|とりにく]⟧と⟦[卵|たまご]⟧には、サルモネラ[菌|きん]やカンピロバクターの[危険|きけん]があります。', it: 'Pollame e uova comportano il rischio di Salmonella e Campylobacter.' },
      { t: '⟦[挽肉|ひきにく]⟧は、[表面|ひょうめん]の[細菌|さいきん]が[中|なか]に[混|ま]ざるので、[生|なま]では[食|た]べないのが[基本|きほん]です。', it: 'Nella carne macinata i batteri di superficie si mescolano all’interno, perciò di norma non si mangia cruda.' },
      { t: '⟦[温度計|おんどけい]⟧を[使|つか]い、[一番|いちばん][厚|あつ]い[所|ところ]の[温度|おんど]を[測|はか]ります。', it: 'Con il termometro si misura la temperatura nel punto più spesso.' },
      { t: '[肉|にく]は[焼|や]いたあと、[少|すこ]し[休|やす]ませてから[切|き]ります。', it: 'La carne cotta si lascia riposare un poco prima di tagliarla.' },
      { t: '⟦[魚|さかな]⟧の⟦[鮮度|せんど]⟧は、[目|め]やえらや[匂|にお]いで[見|み]ます。', it: 'La freschezza del pesce si giudica da occhi, branchie e odore.' },
      { t: '[肉|にく]は[焼|や]くと[水分|すいぶん]が[減|へ]るので、⟦[歩留|ぶど]まり⟧を[考|かんが]えて[買|か]う[量|りょう]を[計算|けいさん]します。', it: 'La carne perde acqua cuocendo, quindi la quantità da comprare si calcola in base alla resa.' }
    ],
    gloss: [
      { w: '鶏肉', r: 'とりにく', it: 'pollame, carne di pollo' },
      { w: '卵', r: 'たまご', it: 'uovo' },
      { w: '挽肉', r: 'ひきにく', it: 'carne macinata' },
      { w: '温度計', r: 'おんどけい', it: 'termometro' },
      { w: '魚', r: 'さかな', it: 'pesce' },
      { w: '鮮度', r: 'せんど', it: 'freschezza' },
      { w: '歩留まり', r: 'ぶどまり', it: 'resa' },
      { w: 'サルモネラ菌', r: 'さるもねらきん', it: 'Salmonella' },
      { w: '細菌', r: 'さいきん', it: 'batteri' },
      { w: '肉', r: 'にく', it: 'carne' }
    ]
  });

  A('cul-verdure-zuppe-salse', {
    title: { t: '[野菜|やさい]・スープ・ソース', it: 'Verdure, zuppe, salse e condimenti' },
    sum: [
      { t: '[野菜|やさい]は[食物繊維|しょくもつせんい]やビタミンを[含|ふく]み、[丁寧|ていねい]に[洗|あら]う[必要|ひつよう]があります。', it: 'Le verdure forniscono fibre e vitamine e vanno lavate con cura.' },
      { t: '⟦ブランチング⟧は、[塩|しお]を[入|い]れた[湯|ゆ]に[短時間|たんじかん]つけて[色|いろ]を[保|たも]つ[方法|ほうほう]です。', it: 'Lo sbollentare consiste nel tenere le verdure poco tempo in acqua salata per fissarne il colore.' },
      { t: '⟦[蒸|む]し[調理|ちょうり]⟧は、[水|みず]に[溶|と]けるビタミンの[損失|そんしつ]が[少|すく]ない[方法|ほうほう]です。', it: 'La cottura al vapore perde meno vitamine solubili in acqua.' },
      { t: '⟦ブイヨン⟧は、[料理|りょうり]の[土台|どだい]になる[香|かお]りのある[液体|えきたい]です。', it: 'Il brodo è il liquido aromatico alla base dei piatti.' },
      { t: '⟦[乳化|にゅうか]⟧は、[油|あぶら]と[水|みず]のように[混|ま]ざりにくい[液体|えきたい]を[安定|あんてい]して[混|ま]ぜることです。', it: 'L’emulsione è un miscuglio stabile di liquidi che di solito non si mescolano, come olio e acqua.' },
      { t: '⟦ベシャメルソース⟧は、バターと[小麦粉|こむぎこ]を[牛乳|ぎゅうにゅう]でのばして[作|つく]ります。', it: 'La besciamella si prepara stemperando burro e farina con il latte.' },
      { t: '[料理|りょうり]は、[甘味|あまみ]、[塩味|しおあじ]、[酸味|さんみ]、[苦味|にがみ]、⟦うま[味|み]⟧で[釣|つ]り[合|あ]いを[取|と]ります。', it: 'Un piatto bilancia dolce, salato, acido, amaro e umami.' }
    ],
    gloss: [
      { w: 'ブランチング', r: 'ぶらんちんぐ', it: 'sbollentatura' },
      { w: '蒸し調理', r: 'むしちょうり', it: 'cottura al vapore' },
      { w: 'ブイヨン', r: 'ぶいよん', it: 'brodo' },
      { w: '乳化', r: 'にゅうか', it: 'emulsione' },
      { w: 'ベシャメルソース', r: 'べしゃめるそーす', it: 'besciamella' },
      { w: 'うま味', r: 'うまみ', it: 'umami' },
      { w: '野菜', r: 'やさい', it: 'verdura' },
      { w: '食物繊維', r: 'しょくもつせんい', it: 'fibre' },
      { w: '酸味', r: 'さんみ', it: 'sapore acido' },
      { w: '塩味', r: 'しおあじ', it: 'sapore salato' }
    ]
  });

  A('cul-impasti-lievitazione', {
    title: { t: '[生地|きじ]と[発酵|はっこう]', it: 'Impasti e lievitazione: pane e pizza' },
    sum: [
      { t: '[基本|きほん]の[生地|きじ]は、[小麦粉|こむぎこ]、[水|みず]、[塩|しお]、[酵母|こうぼ]の[四|よっ]つでできます。', it: 'Un impasto base ha quattro ingredienti: farina, acqua, sale e lievito.' },
      { t: '⟦グルテン⟧は、ガスを[保|たも]つ[弾力|だんりょく]のある[網目|あみめ]です。', it: 'Il glutine è una rete elastica che trattiene i gas.' },
      { t: '⟦[加水率|かすいりつ]⟧は、[小麦粉|こむぎこ]に[対|たい]する[水|みず]の[重|おも]さの[割合|わりあい]です。', it: 'L’idratazione è il rapporto tra il peso dell’acqua e quello della farina.' },
      { t: '⟦[酵母|こうぼ]⟧の[量|りょう]は、[発酵|はっこう]の[時間|じかん]が[長|なが]いほど[少|すく]なくなります。', it: 'La quantità di lievito diminuisce quanto più è lungo il tempo di lievitazione.' },
      { t: 'パンは、[計量|けいりょう]して[混|ま]ぜ、[休|やす]ませ、⟦[発酵|はっこう]⟧させてから[焼|や]きます。', it: 'Il pane si prepara pesando, mescolando, lasciando riposare e fermentare, poi cuocendo.' },
      { t: '⟦ピザ⟧は、[生地|きじ]を[分|わ]けて[丸|まる]めてから[発酵|はっこう]させます。', it: 'Per la pizza si divide l’impasto in panetti e poi lo si lascia lievitare.' },
      { t: 'レシピは、すべての[材料|ざいりょう]に[同|おな]じ⟦[係数|けいすう]⟧をかけて[増|ふ]やします。', it: 'Per scalare una ricetta si moltiplicano tutti gli ingredienti per lo stesso fattore.' }
    ],
    gloss: [
      { w: 'グルテン', r: 'ぐるてん', it: 'glutine' },
      { w: '加水率', r: 'かすいりつ', it: 'idratazione' },
      { w: '酵母', r: 'こうぼ', it: 'lievito' },
      { w: '発酵', r: 'はっこう', it: 'lievitazione, fermentazione' },
      { w: 'ピザ', r: 'ぴざ', it: 'pizza' },
      { w: '係数', r: 'けいすう', it: 'fattore' },
      { w: '生地', r: 'きじ', it: 'impasto' },
      { w: '小麦粉', r: 'こむぎこ', it: 'farina di frumento' },
      { w: '塩', r: 'しお', it: 'sale' },
      { w: '材料', r: 'ざいりょう', it: 'ingrediente' }
    ]
  });

  A('cul-dolci-dispensa-spesa', {
    title: { t: 'お[菓子|かし]・[食品庫|しょくひんこ]・[買|か]い[物|もの]', it: 'Dolci, dispensa, spesa e spreco' },
    sum: [
      { t: '[菓子|かし]づくりでは、[分量|ぶんりょう]の[割合|わりあい]が[特|とく]に[大切|たいせつ]です。', it: 'Nella pasticceria le proporzioni sono particolarmente importanti.' },
      { t: '[小麦粉|こむぎこ]と[卵|たまご]は[構造|こうぞう]を、バターは[柔|やわ]らかさを[作|つく]ります。', it: 'Farina e uova danno struttura, il burro dà morbidezza.' },
      { t: '⟦[砂糖|さとう]⟧は、[甘|あま]さのほかに[水分|すいぶん]や[焼|や]き[色|いろ]、[保存|ほぞん]にも[役立|やくだ]ちます。', it: 'Lo zucchero serve non solo alla dolcezza, ma anche a umidità, doratura e conservazione.' },
      { t: '⟦ジャム⟧は、[砂糖|さとう]の[量|りょう]と[酸|さん]のおかげで[保存|ほぞん]できます。', it: 'La marmellata si conserva grazie alla quantità di zucchero e all’acidità.' },
      { t: '⟦パントリー⟧は、[涼|すず]しく[乾燥|かんそう]した[暗|くら]い[場所|ばしょ]が[向|む]いています。', it: 'La dispensa è adatta a un luogo fresco, asciutto e buio.' },
      { t: '⟦[先入|さきい]れ[先出|さきだ]し⟧は、[古|ふる]いものを[手前|てまえ]に[置|お]く[方法|ほうほう]です。', it: 'Il «primo entrato, primo uscito» consiste nel mettere davanti i prodotti più vecchi.' },
      { t: '⟦[食品|しょくひん]ロス⟧を[減|へ]らすには、[冷蔵庫|れいぞうこ]を[確認|かくにん]して⟦[献立|こんだて]⟧を[立|た]てます。', it: 'Per ridurre lo spreco alimentare si controlla il frigorifero e si pianifica il menù.' }
    ],
    gloss: [
      { w: '砂糖', r: 'さとう', it: 'zucchero' },
      { w: 'ジャム', r: 'じゃむ', it: 'marmellata' },
      { w: 'パントリー', r: 'ぱんとりー', it: 'dispensa' },
      { w: '先入れ先出し', r: 'さきいれさきだし', it: 'primo entrato, primo uscito (FIFO)' },
      { w: '食品ロス', r: 'しょくひんろす', it: 'spreco alimentare' },
      { w: '献立', r: 'こんだて', it: 'menù' },
      { w: '菓子', r: 'かし', it: 'dolci' },
      { w: '保存', r: 'ほぞん', it: 'conservazione' },
      { w: '分量', r: 'ぶんりょう', it: 'quantità, dose' },
      { w: '冷蔵庫', r: 'れいぞうこ', it: 'frigorifero' }
    ]
  });

  A('cul-casa-pulizia-manutenzione', {
    title: { t: '[家|いえ]の[掃除|そうじ]と[手入|てい]れ', it: 'Casa: pulizia, manutenzione, umidità e bollette' },
    sum: [
      { t: '⟦[掃除|そうじ]⟧は、[適切|てきせつ]な[製品|せいひん]を[正|ただ]しい[方法|ほうほう]で[使|つか]うことです。', it: 'Pulire significa usare il prodotto giusto nel modo giusto.' },
      { t: '⟦[消毒|しょうどく]⟧は、[掃除|そうじ]をした[後|あと]に[微生物|びせいぶつ]を[減|へ]らすことです。', it: 'Disinfettare significa ridurre i microrganismi dopo aver pulito.' },
      { t: '⟦[洗剤|せんざい]⟧は、[種類|しゅるい]の[違|ちが]うものを[混|ま]ぜてはいけません。', it: 'I detergenti di tipo diverso non vanno mescolati.' },
      { t: '⟦[漂白剤|ひょうはくざい]⟧をアンモニアや[酸|さん]と[混|ま]ぜると、[有毒|ゆうどく]なガスが[出|で]ます。', it: 'Mescolando la candeggina con ammoniaca o acidi si sviluppano gas tossici.' },
      { t: '⟦カビ⟧は、[湿気|しっけ]が[多|おお]く[換気|かんき]の[悪|わる]い[所|ところ]で[育|そだ]ちます。', it: 'La muffa cresce dove c’è molta umidità e poca ventilazione.' },
      { t: '⟦[結露|けつろ]⟧は、[冷|つめ]たい[壁|かべ]で[暖|あたた]かい[空気|くうき]が[水|みず]になる[現象|げんしょう]です。', it: 'La condensa si forma quando l’aria calda diventa acqua su una parete fredda.' },
      { t: '[電力量|でんりょくりょう]は、[電力|でんりょく]と[時間|じかん]をかけて⟦キロワット[時|じ]⟧で[表|あらわ]します。', it: 'L’energia elettrica si misura in kilowattora, moltiplicando potenza e tempo.' }
    ],
    gloss: [
      { w: '掃除', r: 'そうじ', it: 'pulizia' },
      { w: '消毒', r: 'しょうどく', it: 'disinfezione' },
      { w: '洗剤', r: 'せんざい', it: 'detergente' },
      { w: '漂白剤', r: 'ひょうはくざい', it: 'candeggina' },
      { w: 'カビ', r: 'かび', it: 'muffa' },
      { w: '結露', r: 'けつろ', it: 'condensa' },
      { w: 'キロワット時', r: 'きろわっとじ', it: 'kilowattora' },
      { w: '換気', r: 'かんき', it: 'aerazione' },
      { w: '湿気', r: 'しっけ', it: 'umidità' },
      { w: '有毒', r: 'ゆうどく', it: 'tossico' }
    ]
  });

  A('cul-fai-da-te-misure-trapano', {
    title: { t: '[日曜大工|にちようだいく]の[道具|どうぐ]と[測|はか]り[方|かた]', it: 'Fai da te: attrezzi, misure, trapano e mensole' },
    sum: [
      { t: '[作業|さぎょう]の[前|まえ]に、[何|なに]が[危険|きけん]かを[考|かんが]えます。', it: 'Prima di lavorare ci si chiede che cosa può essere pericoloso.' },
      { t: '⟦[保護眼鏡|ほごめがね]⟧は、[穴|あな]をあけるときや[切|き]るときにいつも[着|つ]けます。', it: 'Gli occhiali di protezione si portano sempre quando si fora o si taglia.' },
      { t: '⟦[水準器|すいじゅんき]⟧で、[水平|すいへい]かどうかを[確|たし]かめます。', it: 'Con la livella si controlla che una superficie sia orizzontale.' },
      { t: '⟦ドリル⟧は、よく[使|つか]う[道具|どうぐ]ですが、[間違|まちが]えると[危険|きけん]です。', it: 'Il trapano è molto usato, ma è pericoloso se usato male.' },
      { t: '[壁|かべ]に[合|あ]った⟦アンカー⟧とネジを[選|えら]びます。', it: 'Si scelgono tasselli e viti adatti al muro.' },
      { t: '[壁|かべ]の[中|なか]に[電線|でんせん]や[水道管|すいどうかん]があるので、[穴|あな]をあける[前|まえ]に⟦[検知器|けんちき]⟧で[調|しら]べます。', it: 'Nel muro possono esserci cavi e tubi, quindi prima di forare si usa un rilevatore.' },
      { t: '⟦[面積|めんせき]⟧を[計算|けいさん]し、[材料|ざいりょう]は[余裕|よゆう]を[見|み]て[用意|ようい]します。', it: 'Si calcola l’area e i materiali si preparano con un margine.' }
    ],
    gloss: [
      { w: '保護眼鏡', r: 'ほごめがね', it: 'occhiali di protezione' },
      { w: '水準器', r: 'すいじゅんき', it: 'livella' },
      { w: 'ドリル', r: 'どりる', it: 'trapano' },
      { w: 'アンカー', r: 'あんかー', it: 'tassello' },
      { w: '検知器', r: 'けんちき', it: 'rilevatore di cavi e tubi' },
      { w: '面積', r: 'めんせき', it: 'area' },
      { w: 'ネジ', r: 'ねじ', it: 'vite' },
      { w: '電線', r: 'でんせん', it: 'cavo elettrico' },
      { w: '水道管', r: 'すいどうかん', it: 'tubo dell’acqua' },
      { w: '材料', r: 'ざいりょう', it: 'materiale' }
    ]
  });

  A('cul-riparazioni-idrauliche-pareti', {
    title: { t: '[水回|みずまわ]りと[壁|かべ]の[修理|しゅうり]', it: 'Piccole riparazioni: acqua, sifone e pareti' },
    sum: [
      { t: '[水道|すいどう]の[作業|さぎょう]は、[水|みず]を[止|と]める[場所|ばしょ]を[知|し]ることから[始|はじ]まります。', it: 'Ogni lavoro idraulico comincia dal sapere dove si chiude l’acqua.' },
      { t: '⟦[止水栓|しすいせん]⟧は、[洗面台|せんめんだい]やトイレの[下|した]にあり、その[場所|ばしょ]の[水|みず]を[止|と]めます。', it: 'Il rubinetto di arresto è sotto lavandino e WC e ferma l’acqua in quel punto.' },
      { t: '⟦[蛇口|じゃぐち]⟧の[水漏|みずも]れは、⟦パッキン⟧の[傷|いた]みなどが[原因|げんいん]です。', it: 'Le perdite del rubinetto dipendono spesso da una guarnizione consumata.' },
      { t: '[壁|かべ]の[中|なか]の[配管|はいかん]やガスの[臭|にお]いは、⟦[専門家|せんもんか]⟧に[任|まか]せます。', it: 'Per i tubi nel muro o l’odore di gas ci si affida a un professionista.' },
      { t: '⟦トラップ⟧は、[水|みず]を[溜|た]めて[下水|げすい]の[臭|にお]いを[防|ふせ]ぎます。', it: 'Il sifone trattiene un po’ d’acqua e blocca i cattivi odori delle fognature.' },
      { t: '⟦[下地|したじ]⟧の[準備|じゅんび]が、[塗装|とそう]の[仕上|しあ]がりを[左右|さゆう]します。', it: 'La preparazione del fondo condiziona il risultato della verniciatura.' },
      { t: '⟦[塗料|とりょう]⟧の[量|りょう]は、[面積|めんせき]を[一|ひと]リットルで[塗|ぬ]れる[面積|めんせき]で[割|わ]り、[回数|かいすう]をかけて[求|もと]めます。', it: 'La quantità di vernice si ricava dividendo l’area per quella coperta da un litro e moltiplicando per le mani.' }
    ],
    gloss: [
      { w: '止水栓', r: 'しすいせん', it: 'rubinetto di arresto' },
      { w: '蛇口', r: 'じゃぐち', it: 'rubinetto' },
      { w: 'パッキン', r: 'ぱっきん', it: 'guarnizione' },
      { w: '専門家', r: 'せんもんか', it: 'professionista' },
      { w: 'トラップ', r: 'とらっぷ', it: 'sifone' },
      { w: '下地', r: 'したじ', it: 'fondo, preparazione della parete' },
      { w: '塗料', r: 'とりょう', it: 'vernice' },
      { w: '水漏れ', r: 'みずもれ', it: 'perdita d’acqua' },
      { w: '塗装', r: 'とそう', it: 'verniciatura' },
      { w: '配管', r: 'はいかん', it: 'tubazione' }
    ]
  });

  A('cul-elettricita-domestica-sicura', {
    title: { t: '[家庭|かてい]の[電気|でんき]と[安全|あんぜん]', it: 'Elettricità domestica in sicurezza' },
    sum: [
      { t: '[家庭|かてい]の[電気|でんき]は、[命|いのち]を[奪|うば]うことがあります。', it: 'L’elettricità domestica può uccidere.' },
      { t: 'この[授業|じゅぎょう]は、[配線|はいせん]の[工事|こうじ]を[教|おし]えるものではありません。', it: 'Questa lezione non insegna a lavorare sull’impianto elettrico.' },
      { t: '[配線|はいせん]の[工事|こうじ]は、[資格|しかく]のある⟦[電気工事士|でんきこうじし]⟧が[行|おこな]います。', it: 'I lavori sull’impianto li fa un elettricista abilitato.' },
      { t: '⟦[電力|でんりょく]⟧を⟦[電圧|でんあつ]⟧で[割|わ]ると、⟦[電流|でんりゅう]⟧が[求|もと]まります。', it: 'Dividendo la potenza per la tensione si ottiene la corrente.' },
      { t: '⟦[配線用遮断器|はいせんようしゃだんき]⟧は、[過負荷|かふか]やショートからケーブルを[守|まも]ります。', it: 'Il magnetotermico protegge i cavi da sovraccarico e cortocircuito.' },
      { t: '⟦[漏電遮断器|ろうでんしゃだんき]⟧は、[電気|でんき]が[漏|も]れたときに[回路|かいろ]を[切|き]ります。', it: 'Il differenziale interrompe il circuito quando c’è una dispersione di corrente.' },
      { t: '⟦テーブルタップ⟧には[電力|でんりょく]の[限度|げんど]があり、[合計|ごうけい]が[超|こ]えてはいけません。', it: 'La ciabatta ha un limite di potenza che la somma dei carichi non deve superare.' }
    ],
    gloss: [
      { w: '電気工事士', r: 'でんきこうじし', it: 'elettricista abilitato' },
      { w: '電力', r: 'でんりょく', it: 'potenza elettrica' },
      { w: '電圧', r: 'でんあつ', it: 'tensione' },
      { w: '電流', r: 'でんりゅう', it: 'corrente' },
      { w: '配線用遮断器', r: 'はいせんようしゃだんき', it: 'interruttore magnetotermico' },
      { w: '漏電遮断器', r: 'ろうでんしゃだんき', it: 'interruttore differenziale' },
      { w: 'テーブルタップ', r: 'てーぶるたっぷ', it: 'ciabatta' },
      { w: '過負荷', r: 'かふか', it: 'sovraccarico' },
      { w: '配線', r: 'はいせん', it: 'cablaggio, impianto' },
      { w: '回路', r: 'かいろ', it: 'circuito' }
    ]
  });

  A('cul-come-funziona-un-motore', {
    title: { t: 'エンジンの[仕組|しく]み', it: 'Come funziona un motore' },
    sum: [
      { t: '⟦エンジン⟧は、[燃料|ねんりょう]の[化学|かがく]エネルギーを[機械|きかい]エネルギーに[変|か]えます。', it: 'Il motore trasforma l’energia chimica del carburante in energia meccanica.' },
      { t: '[燃料|ねんりょう]がシリンダーの[中|なか]で[燃|も]え、ガスが⟦ピストン⟧を[押|お]します。', it: 'Il carburante brucia nel cilindro e i gas spingono il pistone.' },
      { t: '⟦[四行程|よんこうてい]⟧は、[吸入|きゅうにゅう]、[圧縮|あっしゅく]、[燃焼|ねんしょう]、[排気|はいき]の[順|じゅん]です。', it: 'I quattro tempi sono, in ordine, aspirazione, compressione, combustione e scarico.' },
      { t: '[燃焼|ねんしょう]の[行程|こうてい]だけが[仕事|しごと]を[生|う]みます。', it: 'Solo il tempo della combustione produce lavoro.' },
      { t: '⟦ガソリン⟧エンジンはプラグの[火花|ひばな]で、⟦ディーゼル⟧は[圧縮|あっしゅく]の[熱|ねつ]で[点火|てんか]します。', it: 'Il motore a benzina si accende con la scintilla della candela, il diesel con il calore della compressione.' },
      { t: '⟦ハイブリッド⟧は、エンジンと[電気|でんき]モーターを[組|く]み[合|あ]わせた[車|くるま]です。', it: 'Un veicolo ibrido combina motore termico e motore elettrico.' },
      { t: '⟦[電気自動車|でんきじどうしゃ]⟧は、モーターとバッテリーだけで[走|はし]ります。', it: 'Un veicolo elettrico funziona solo con motore elettrico e batteria.' }
    ],
    gloss: [
      { w: 'エンジン', r: 'えんじん', it: 'motore' },
      { w: 'ピストン', r: 'ぴすとん', it: 'pistone' },
      { w: '四行程', r: 'よんこうてい', it: 'quattro tempi' },
      { w: 'ガソリン', r: 'がそりん', it: 'benzina' },
      { w: 'ディーゼル', r: 'でぃーぜる', it: 'diesel' },
      { w: 'ハイブリッド', r: 'はいぶりっど', it: 'ibrido' },
      { w: '電気自動車', r: 'でんきじどうしゃ', it: 'veicolo elettrico' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: '圧縮', r: 'あっしゅく', it: 'compressione' },
      { w: '燃焼', r: 'ねんしょう', it: 'combustione' }
    ]
  });

  A('cul-manutenzione-base-auto', {
    title: { t: '[車|くるま]の[基本|きほん]の[手入|てい]れ', it: 'Manutenzione base dell’auto' },
    sum: [
      { t: '[簡単|かんたん]な⟦[点検|てんけん]⟧を[続|つづ]けると、[故障|こしょう]や[危険|きけん]を[防|ふせ]げます。', it: 'Controlli semplici e regolari prevengono guasti e situazioni pericolose.' },
      { t: '⟦エンジンオイル⟧は、[潤滑|じゅんかつ]と[冷却|れいきゃく]をします。', it: 'L’olio motore lubrifica e raffredda.' },
      { t: '[油量|ゆりょう]は、[棒|ぼう]で[見|み]て、[下限|かげん]と[上限|じょうげん]の[間|あいだ]にあるかを[確|たし]かめます。', it: 'Il livello dell’olio si legge con l’asta e deve stare tra il minimo e il massimo.' },
      { t: '⟦タイヤ⟧は、⟦[空気圧|くうきあつ]⟧と[溝|みぞ]の[減|へ]り[具合|ぐあい]を[点検|てんけん]します。', it: 'Dei pneumatici si controllano la pressione e l’usura del battistrada.' },
      { t: '⟦[警告灯|けいこくとう]⟧は、[色|いろ]で[緊急度|きんきゅうど]を[示|しめ]します。', it: 'Le spie del cruscotto indicano l’urgenza con il colore.' },
      { t: '[赤|あか]は[重大|じゅうだい]な⟦[故障|こしょう]⟧を[表|あらわ]し、[安全|あんぜん]に[止|と]まってエンジンを[切|き]ります。', it: 'Il rosso indica un guasto grave: ci si ferma in sicurezza e si spegne il motore.' },
      { t: '[車|くるま]の[下|した]での[作業|さぎょう]など、[自分|じぶん]でしてはいけない[作業|さぎょう]があります。', it: 'Ci sono lavori, come quelli sotto l’auto, che non vanno fatti da soli.' }
    ],
    gloss: [
      { w: '点検', r: 'てんけん', it: 'controllo' },
      { w: 'エンジンオイル', r: 'えんじんおいる', it: 'olio motore' },
      { w: 'タイヤ', r: 'たいや', it: 'pneumatico' },
      { w: '空気圧', r: 'くうきあつ', it: 'pressione dell’aria' },
      { w: '警告灯', r: 'けいこくとう', it: 'spia del cruscotto' },
      { w: '故障', r: 'こしょう', it: 'guasto' },
      { w: 'バッテリー', r: 'ばってりー', it: 'batteria' },
      { w: '潤滑', r: 'じゅんかつ', it: 'lubrificazione' },
      { w: '冷却', r: 'れいきゃく', it: 'raffreddamento' },
      { w: '溝', r: 'みぞ', it: 'battistrada (scanalatura)' }
    ]
  });

  A('cul-guida-sicura', {
    title: { t: '[安全運転|あんぜんうんてん]', it: 'Guida sicura' },
    sum: [
      { t: '[安全|あんぜん]な[運転|うんてん]は、「[見|み]えている[空|あ]いた[距離|きょり]で[止|と]まれるか」から[始|はじ]まります。', it: 'La guida sicura parte dal chiedersi se ci si può fermare entro lo spazio libero che si vede.' },
      { t: '⟦[停止距離|ていしきょり]⟧は、⟦[空走距離|くうそうきょり]⟧と⟦[制動距離|せいどうきょり]⟧の[合計|ごうけい]です。', it: 'Lo spazio di arresto è la somma dello spazio di reazione e di quello di frenata.' },
      { t: '[空走距離|くうそうきょり]は、[危険|きけん]に[気|き]づいてブレーキを[踏|ふ]むまでに[進|すす]む[距離|きょり]です。', it: 'Lo spazio di reazione è il tratto percorso prima di mettere il piede sul freno.' },
      { t: '[制動距離|せいどうきょり]は、[速度|そくど]の[二乗|にじょう]に[比例|ひれい]して[長|なが]くなります。', it: 'Lo spazio di frenata cresce in proporzione al quadrato della velocità.' },
      { t: '[路面|ろめん]が[濡|ぬ]れたり[雪|ゆき]があったりすると、⟦[摩擦|まさつ]⟧が[小|ちい]さくなり、[止|と]まりにくくなります。', it: 'Con fondo bagnato o neve l’aderenza diminuisce e fermarsi è più difficile.' },
      { t: '⟦[車間距離|しゃかんきょり]⟧は、[前|まえ]の[車|くるま]が[急|きゅう]に[止|と]まっても[止|と]まれる[間隔|かんかく]です。', it: 'La distanza di sicurezza è lo spazio che permette di fermarsi se il veicolo davanti frena all’improvviso.' },
      { t: '⟦[疲労|ひろう]⟧や[脇見|わきみ]があると、[反応|はんのう]が[遅|おく]れます。', it: 'Con stanchezza o distrazione la reazione rallenta.' }
    ],
    gloss: [
      { w: '停止距離', r: 'ていしきょり', it: 'spazio di arresto' },
      { w: '空走距離', r: 'くうそうきょり', it: 'spazio di reazione' },
      { w: '制動距離', r: 'せいどうきょり', it: 'spazio di frenata' },
      { w: '摩擦', r: 'まさつ', it: 'attrito, aderenza' },
      { w: '車間距離', r: 'しゃかんきょり', it: 'distanza di sicurezza' },
      { w: '疲労', r: 'ひろう', it: 'stanchezza' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '反応', r: 'はんのう', it: 'reazione' },
      { w: '二乗', r: 'にじょう', it: 'quadrato (potenza seconda)' }
    ]
  });

  A('cul-la-bicicletta', {
    title: { t: '[自転車|じてんしゃ]', it: 'La bicicletta' },
    sum: [
      { t: '[自転車|じてんしゃ]の[部品|ぶひん]の[名前|なまえ]を[知|し]ると、[問題|もんだい]を[説明|せつめい]しやすくなります。', it: 'Conoscere i nomi delle parti aiuta a descrivere un problema.' },
      { t: '⟦ギア[比|ひ]⟧は、[前|まえ]の[歯数|しすう]を[後|うし]ろの[歯数|しすう]で[割|わ]ったものです。', it: 'Il rapporto di trasmissione è il numero di denti davanti diviso per quelli dietro.' },
      { t: '[速度|そくど]は、⟦ケイデンス⟧、ギア[比|ひ]、[車輪|しゃりん]の⟦[円周|えんしゅう]⟧をかけて[求|もと]めます。', it: 'La velocità si ricava moltiplicando cadenza, rapporto e circonferenza della ruota.' },
      { t: '[出発|しゅっぱつ]の[前|まえ]に、[空気|くうき]、ブレーキ、チェーンを[確|たし]かめます。', it: 'Prima di partire si controllano aria, freni e catena.' },
      { t: '⟦チェーン⟧には[潤滑油|じゅんかつゆ]をさしますが、ブレーキには[付|つ]けてはいけません。', it: 'La catena si lubrifica, ma il lubrificante non va messo sui freni.' },
      { t: 'パンクしたときは、タイヤの[中|なか]の⟦チューブ⟧を[交換|こうかん]します。', it: 'In caso di foratura si sostituisce la camera d’aria dentro il pneumatico.' },
      { t: '[道路|どうろ]では⟦[視認性|しにんせい]⟧を[高|たか]め、[曲|ま]がる[前|まえ]に[後|うし]ろを[見|み]ます。', it: 'In strada si cura la visibilità e si guarda dietro prima di svoltare.' }
    ],
    gloss: [
      { w: 'ギア比', r: 'ぎあひ', it: 'rapporto di trasmissione' },
      { w: 'ケイデンス', r: 'けいでんす', it: 'cadenza di pedalata' },
      { w: '円周', r: 'えんしゅう', it: 'circonferenza' },
      { w: 'チェーン', r: 'ちぇーん', it: 'catena' },
      { w: 'チューブ', r: 'ちゅーぶ', it: 'camera d’aria' },
      { w: '視認性', r: 'しにんせい', it: 'visibilità' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: 'パンク', r: 'ぱんく', it: 'foratura' },
      { w: '部品', r: 'ぶひん', it: 'parte, componente' },
      { w: '速度', r: 'そくど', it: 'velocità' }
    ]
  });

  A('cul-orientamento-e-mappe', {
    title: { t: '[地図|ちず]とコンパス', it: 'Orientamento e mappe in escursione' },
    sum: [
      { t: '⟦[地図|ちず]⟧は、ジーピーエスがあっても[大切|たいせつ]な[道具|どうぐ]です。', it: 'La carta è uno strumento importante anche se si ha un GPS.' },
      { t: '⟦[縮尺|しゅくしゃく]⟧は、[地図|ちず]の[長|なが]さを[実際|じっさい]の[長|なが]さに[直|なお]すための[比|ひ]です。', it: 'La scala è il rapporto che serve a convertire le lunghezze della carta in lunghezze reali.' },
      { t: '⟦[等高線|とうこうせん]⟧は、[同|おな]じ[高|たか]さの[点|てん]を[結|むす]んだ[線|せん]です。', it: 'Una curva di livello unisce i punti alla stessa quota.' },
      { t: '[等高線|とうこうせん]が[詰|つ]まっていると[急|きゅう]な[斜面|しゃめん]で、[間隔|かんかく]が[広|ひろ]いと[緩|ゆる]やかです。', it: 'Curve vicine indicano un pendio ripido, curve distanziate un pendio dolce.' },
      { t: '⟦コンパス⟧の⟦[方位角|ほういかく]⟧は、[北|きた]から[時計回|とけいまわ]りに[測|はか]った[角度|かくど]です。', it: 'L’azimut è l’angolo misurato in senso orario a partire dal nord.' },
      { t: '⟦ネイスミスの[法則|ほうそく]⟧は、[距離|きょり]と[登|のぼ]りの[高|たか]さから[歩|ある]く[時間|じかん]を[見積|みつ]もります。', it: 'La regola di Naismith stima il tempo di cammino da distanza e dislivello in salita.' },
      { t: '[計画|けいかく]では[引|ひ]き[返|かえ]す[時刻|じこく]を[決|き]め、ジーピーエスだけに[頼|たよ]りません。', it: 'Nella pianificazione si fissa l’orario limite di inversione e non ci si affida solo al GPS.' }
    ],
    gloss: [
      { w: '地図', r: 'ちず', it: 'carta, mappa' },
      { w: '縮尺', r: 'しゅくしゃく', it: 'scala' },
      { w: '等高線', r: 'とうこうせん', it: 'curva di livello' },
      { w: 'コンパス', r: 'こんぱす', it: 'bussola' },
      { w: '方位角', r: 'ほういかく', it: 'azimut' },
      { w: 'ネイスミスの法則', r: 'ねいすみすのほうそく', it: 'regola di Naismith' },
      { w: 'ジーピーエス', r: 'じーぴーえす', it: 'GPS' },
      { w: '斜面', r: 'しゃめん', it: 'pendio' },
      { w: '距離', r: 'きょり', it: 'distanza' },
      { w: '角度', r: 'かくど', it: 'angolo' }
    ]
  });

  A('cul-meteo-e-sicurezza-in-montagna', {
    title: { t: '[山|やま]の[天気|てんき]と[安全|あんぜん]', it: 'Meteo e sicurezza in montagna' },
    sum: [
      { t: '[山|やま]では、[天気|てんき]が[谷|たに]よりも[速|はや]く[変|か]わります。', it: 'In montagna il tempo cambia più in fretta che a valle.' },
      { t: '⟦[雷雨|らいう]⟧は、[夏|なつ]の[午後|ごご]に[多|おお]い[危険|きけん]の[一|ひと]つです。', it: 'I temporali sono uno dei rischi tipici dei pomeriggi estivi.' },
      { t: '[縦|たて]に[伸|の]びる[雲|くも]は⟦[積乱雲|せきらんうん]⟧になり、[雷雨|らいう]をもたらすことがあります。', it: 'Le nuvole che crescono in verticale possono diventare cumulonembi e portare temporali.' },
      { t: '[気温|きおん]は、⟦[標高|ひょうこう]⟧が[上|あ]がるにつれて[下|さ]がります。', it: 'La temperatura scende all’aumentare della quota.' },
      { t: '⟦[低体温症|ていたいおんしょう]⟧は、[濡|ぬ]れて[風|かぜ]があると、それほど[寒|さむ]くなくても[起|お]こります。', it: 'L’ipotermia può comparire anche senza un gran freddo, se si è bagnati e c’è vento.' },
      { t: '⟦[重|かさ]ね[着|ぎ]⟧では、[薄|うす]い[服|ふく]を[重|かさ]ねて[調節|ちょうせつ]します。', it: 'Con l’abbigliamento a strati si sovrappongono capi sottili e si regola secondo lo sforzo.' },
      { t: '[引|ひ]き[返|かえ]す[基準|きじゅん]は[出発|しゅっぱつ]の[前|まえ]に[決|き]め、[緊急|きんきゅう]の[時|とき]は⟦[百十二番|ひゃくじゅうにばん]⟧に[連絡|れんらく]します。', it: 'I criteri per tornare indietro si decidono prima di partire; in emergenza si chiama il 112.' }
    ],
    gloss: [
      { w: '雷雨', r: 'らいう', it: 'temporale' },
      { w: '積乱雲', r: 'せきらんうん', it: 'cumulonembo' },
      { w: '標高', r: 'ひょうこう', it: 'quota' },
      { w: '低体温症', r: 'ていたいおんしょう', it: 'ipotermia' },
      { w: '重ね着', r: 'かさねぎ', it: 'abbigliamento a strati' },
      { w: '百十二番', r: 'ひゃくじゅうにばん', it: 'il 112' },
      { w: '気温', r: 'きおん', it: 'temperatura dell’aria' },
      { w: '天気', r: 'てんき', it: 'tempo meteorologico' },
      { w: '救助', r: 'きゅうじょ', it: 'soccorso' },
      { w: '基準', r: 'きじゅん', it: 'criterio' }
    ]
  });

  A('cul-campeggio-e-vita-allaperto', {
    title: { t: 'キャンプと[野外|やがい]の[暮|く]らし', it: 'Campeggio e vita all’aperto' },
    sum: [
      { t: '⟦キャンプ⟧の[前|まえ]に、その[場所|ばしょ]が[許可|きょか]されているかを[調|しら]べます。', it: 'Prima di accamparsi si verifica che il luogo lo consenta.' },
      { t: '[平|たい]らで[乾|かわ]いた[水|みず]はけの[良|よ]い[場所|ばしょ]を[選|えら]びます。', it: 'Si sceglie un punto piano, asciutto e ben drenato.' },
      { t: '⟦テント⟧は、⟦ペグ⟧で[地面|じめん]に[固定|こてい]します。', it: 'La tenda si fissa al terreno con i picchetti.' },
      { t: '⟦バーナー⟧は、[外|そと]の[平|たい]らな[場所|ばしょ]で[使|つか]い、[放置|ほうち]してはいけません。', it: 'Il fornello si usa all’aperto su una superficie piana e non va lasciato incustodito.' },
      { t: 'テントの[中|なか]で[調理|ちょうり]や[暖房|だんぼう]をすると、⟦[一酸化炭素|いっさんかたんそ]⟧の[危険|きけん]があります。', it: 'Cucinare o scaldarsi nella tenda comporta il rischio del monossido di carbonio.' },
      { t: '[川|かわ]や[湖|みずうみ]の[水|みず]は、⟦[煮沸|しゃふつ]⟧などで[処理|しょり]してから[飲|の]みます。', it: 'L’acqua di fiumi e laghi si beve dopo averla trattata, per esempio facendola bollire.' },
      { t: '⟦[痕跡|こんせき]を[残|のこ]さない⟧[原則|げんそく]では、ごみを[持|も]ち[帰|かえ]ります。', it: 'Secondo il principio di non lasciare traccia, i rifiuti si riportano via.' }
    ],
    gloss: [
      { w: 'キャンプ', r: 'きゃんぷ', it: 'campeggio' },
      { w: 'テント', r: 'てんと', it: 'tenda' },
      { w: 'ペグ', r: 'ぺぐ', it: 'picchetto' },
      { w: 'バーナー', r: 'ばーなー', it: 'fornello' },
      { w: '一酸化炭素', r: 'いっさんかたんそ', it: 'monossido di carbonio' },
      { w: '煮沸', r: 'しゃふつ', it: 'bollitura' },
      { w: '痕跡を残さない', r: 'こんせきをのこさない', it: 'non lasciare traccia' },
      { w: '許可', r: 'きょか', it: 'permesso' },
      { w: '放置', r: 'ほうち', it: 'lasciare incustodito' },
      { w: '原則', r: 'げんそく', it: 'principio' }
    ]
  });

  A('cul-nodi-e-cordame', {
    title: { t: '[結|むす]び[方|かた]とロープ', it: 'Nodi e cordame' },
    sum: [
      { t: '⟦ロープ⟧は、[繊維|せんい]の[種類|しゅるい]によって[強|つよ]さや[伸|の]びが[違|ちが]います。', it: 'Le corde differiscono per resistenza ed elasticità a seconda delle fibre.' },
      { t: '⟦[止|と]め[結|むす]び⟧は、ロープの[端|はし]に[玉|たま]を[作|つく]って[抜|ぬ]けを[防|ふせ]ぎます。', it: 'Il nodo di arresto forma un ingrossamento all’estremità per impedire che la corda si sfili.' },
      { t: '⟦[八|はち]の[字|じ][結|むす]び⟧も、[抜|ぬ]けを[防|ふせ]ぐ[結|むす]び[方|かた]です。', it: 'Anche il nodo a otto serve a impedire che la corda si sfili.' },
      { t: '⟦[本結|ほんむす]び⟧は、[同|おな]じ[太|ふと]さと[素材|そざい]の[二本|にほん]のロープをつなぎます。', it: 'Il nodo piano unisce due corde dello stesso diametro e materiale.' },
      { t: '⟦もやい[結|むす]び⟧は、[端|はし]に[滑|すべ]らない[輪|わ]を[作|つく]ります。', it: 'La gassa d’amante forma all’estremità un occhio che non scorre.' },
      { t: '⟦[巻|ま]き[結|むす]び⟧は、[棒|ぼう]やパイプにロープをすばやく[固定|こてい]します。', it: 'Il nodo parlato fissa rapidamente la corda a un palo o a un tubo.' },
      { t: 'ロープの⟦[強度|きょうど]⟧は、[結|むす]び[目|め]の[部分|ぶぶん]で[下|さ]がります。', it: 'La resistenza della corda diminuisce in corrispondenza del nodo.' }
    ],
    gloss: [
      { w: 'ロープ', r: 'ろーぷ', it: 'corda, cima' },
      { w: '止め結び', r: 'とめむすび', it: 'nodo semplice (di arresto)' },
      { w: '八の字結び', r: 'はちのじむすび', it: 'nodo savoia (a otto)' },
      { w: '本結び', r: 'ほんむすび', it: 'nodo piano' },
      { w: 'もやい結び', r: 'もやいむすび', it: 'gassa d’amante' },
      { w: '巻き結び', r: 'まきむすび', it: 'nodo parlato' },
      { w: '強度', r: 'きょうど', it: 'resistenza' },
      { w: '結び目', r: 'むすびめ', it: 'nodo (punto annodato)' },
      { w: '繊維', r: 'せんい', it: 'fibra' },
      { w: '素材', r: 'そざい', it: 'materiale' }
    ]
  });

  A('cul-cucito-e-riparazioni', {
    title: { t: '[裁縫|さいほう]と[修理|しゅうり]', it: 'Cucito e riparazioni tessili' },
    sum: [
      { t: '⟦[裁縫|さいほう]⟧には、[針|はり]、[糸|いと]、はさみなどの[道具|どうぐ]が[必要|ひつよう]です。', it: 'Per cucire servono strumenti come aghi, filo e forbici.' },
      { t: '[針|はり]は[番号|ばんごう]が[大|おお]きいほど[細|ほそ]く、[布|ぬの]に[合|あ]わせて[選|えら]びます。', it: 'Più alto è il numero dell’ago, più è sottile; lo si sceglie in base al tessuto.' },
      { t: '⟦[玉結|たまむす]び⟧は、[糸|いと]の[端|はし]に[作|つく]る[結|むす]び[目|め]です。', it: 'Il nodo sul filo è quello che si fa all’estremità del filo.' },
      { t: '⟦[返|かえ]し[縫|ぬ]い⟧は、[一針|ひとはり]ごとに[戻|もど]る[丈夫|じょうぶ]な[縫|ぬ]い[方|かた]です。', it: 'Il punto indietro è una cucitura solida in cui ogni punto torna indietro.' },
      { t: '⟦ボタン⟧は、[布|ぬの]との[間|あいだ]に[隙間|すきま]を[残|のこ]して[縫|ぬ]い[付|つ]けます。', it: 'Il bottone si cuce lasciando uno spazio tra esso e il tessuto.' },
      { t: '⟦まつり[縫|ぬ]い⟧は、[裾|すそ]の[縫|ぬ]い[目|め]を[目立|めだ]たなくします。', it: 'Il punto scorto rende poco visibile la cucitura dell’orlo.' },
      { t: '⟦シミ[抜|ぬ]き⟧では、[擦|こす]らずに[外側|そとがわ]から[中|なか]へ[軽|かる]くたたきます。', it: 'Per smacchiare non si strofina, ma si tampona dall’esterno verso il centro.' }
    ],
    gloss: [
      { w: '裁縫', r: 'さいほう', it: 'cucito' },
      { w: '玉結び', r: 'たまむすび', it: 'nodo sul filo' },
      { w: '返し縫い', r: 'かえしぬい', it: 'punto indietro' },
      { w: 'ボタン', r: 'ぼたん', it: 'bottone' },
      { w: 'まつり縫い', r: 'まつりぬい', it: 'punto scorto' },
      { w: 'シミ抜き', r: 'しみぬき', it: 'smacchiatura' },
      { w: '針', r: 'はり', it: 'ago' },
      { w: '糸', r: 'いと', it: 'filo' },
      { w: '布', r: 'ぬの', it: 'tessuto' },
      { w: '裾', r: 'すそ', it: 'orlo' }
    ]
  });

  A('cul-giardinaggio-e-orto', {
    title: { t: '[庭|にわ]と[菜園|さいえん]', it: 'Giardinaggio e orto' },
    sum: [
      { t: '⟦[土壌|どじょう]⟧は、[柔|やわ]らかく[水|みず]はけが[良|よ]く、[有機物|ゆうきぶつ]が[豊富|ほうふ]だと[適|てき]しています。', it: 'Un buon terreno è soffice, ben drenato e ricco di sostanza organica.' },
      { t: '⟦[堆肥|たいひ]⟧は、[砂|すな]の[多|おお]い[土|つち]や[粘土|ねんど]の[多|おお]い[土|つち]を[改良|かいりょう]します。', it: 'Il compost migliora i terreni sabbiosi e quelli argillosi.' },
      { t: 'トマトなどの[実|み]を[食|た]べる[野菜|やさい]は、⟦[日当|ひあ]たり⟧を[好|この]みます。', it: 'Gli ortaggi da frutto, come il pomodoro, amano il sole diretto.' },
      { t: '[植|う]える⟦[間隔|かんかく]⟧が[狭|せま]いと、[光|ひかり]や[栄養|えいよう]を[奪|うば]い[合|あ]います。', it: 'Se le distanze tra le piante sono troppo strette, queste competono per luce e nutrienti.' },
      { t: '⟦[種|たね]まき⟧は、[地域|ちいき]と[季節|きせつ]の[目安|めやす]の[暦|こよみ]に[沿|そ]って[行|おこな]います。', it: 'La semina segue un calendario orientativo per zona e stagione.' },
      { t: '[堆肥|たいひ]は、[台所|だいどころ]の[野菜|やさい]くずや[枯|か]れ[葉|は]を[微生物|びせいぶつ]が[分解|ぶんかい]して[作|つく]ります。', it: 'Il compost si ottiene quando i microrganismi decompongono scarti vegetali di cucina e foglie secche.' },
      { t: '⟦[害虫|がいちゅう]⟧は、まず[予防|よぼう]と[観察|かんさつ]で[防|ふせ]ぎます。', it: 'I parassiti si affrontano anzitutto con prevenzione e osservazione.' }
    ],
    gloss: [
      { w: '土壌', r: 'どじょう', it: 'suolo' },
      { w: '堆肥', r: 'たいひ', it: 'compost' },
      { w: '日当たり', r: 'ひあたり', it: 'esposizione al sole' },
      { w: '間隔', r: 'かんかく', it: 'distanza, intervallo' },
      { w: '種まき', r: 'たねまき', it: 'semina' },
      { w: '害虫', r: 'がいちゅう', it: 'parassita' },
      { w: '有機物', r: 'ゆうきぶつ', it: 'sostanza organica' },
      { w: '微生物', r: 'びせいぶつ', it: 'microrganismo' },
      { w: '野菜', r: 'やさい', it: 'ortaggio, verdura' },
      { w: '予防', r: 'よぼう', it: 'prevenzione' }
    ]
  });

  A('cul-imparare-una-abilita-manuale', {
    title: { t: '[手作業|てさぎょう]の[技能|ぎのう]を[学|まな]ぶ', it: 'Imparare una nuova abilità manuale' },
    sum: [
      { t: '⟦[技能|ぎのう]⟧は、[視覚|しかく]、[触覚|しょっかく]、[注意|ちゅうい]で[調整|ちょうせい]する[動作|どうさ]の[組|く]み[合|あ]わせです。', it: 'Un’abilità è un insieme di gesti coordinati da vista, tatto e attenzione.' },
      { t: '[学|まな]びには、[認知|にんち]、[連合|れんごう]、[自動|じどう]の[三|みっ]つの[段階|だんかい]があります。', it: 'L’apprendimento ha tre fasi: cognitiva, associativa e autonoma.' },
      { t: '⟦デリバレート・プラクティス⟧は、[具体的|ぐたいてき]な[目標|もくひょう]と[集中|しゅうちゅう]と[即時|そくじ]の[助言|じょげん]で[行|おこな]います。', it: 'La pratica deliberata richiede un obiettivo specifico, piena attenzione e feedback immediato.' },
      { t: '[大|おお]きな[作業|さぎょう]は、[小|ちい]さな⟦[部分技能|ぶぶんぎのう]⟧に[分|わ]けて[練習|れんしゅう]します。', it: 'Un compito complesso si divide in sotto-abilità da esercitare.' },
      { t: '⟦フィードバック⟧は、[先生|せんせい]、お[手本|てほん]、[録画|ろくが]、[測定|そくてい]などから[得|え]られます。', it: 'Il feedback può venire da un maestro, da un modello, da registrazioni o da misure.' },
      { t: '[失敗|しっぱい]は[情報|じょうほう]ですが、[危険|きけん]な[作業|さぎょう]は⟦[監督|かんとく]⟧のもとで[行|おこな]います。', it: 'Gli errori sono informazione, ma i lavori rischiosi si svolgono sotto supervisione.' },
      { t: '⟦[練習日誌|れんしゅうにっし]⟧には、[目標|もくひょう]、[結果|けっか]、[失敗|しっぱい]の[原因|げんいん]を[書|か]きます。', it: 'Nel diario degli esercizi si annotano obiettivo, risultato e causa degli errori.' }
    ],
    gloss: [
      { w: '技能', r: 'ぎのう', it: 'abilità' },
      { w: 'デリバレート・プラクティス', r: 'でりばれーとぷらくてぃす', it: 'pratica deliberata' },
      { w: '部分技能', r: 'ぶぶんぎのう', it: 'sotto-abilità' },
      { w: 'フィードバック', r: 'ふぃーどばっく', it: 'feedback' },
      { w: '監督', r: 'かんとく', it: 'supervisione' },
      { w: '練習日誌', r: 'れんしゅうにっし', it: 'diario degli esercizi' },
      { w: '失敗', r: 'しっぱい', it: 'errore, fallimento' },
      { w: '目標', r: 'もくひょう', it: 'obiettivo' },
      { w: '段階', r: 'だんかい', it: 'fase, livello' },
      { w: '集中', r: 'しゅうちゅう', it: 'concentrazione' }
    ]
  });
})(window.ST = window.ST || {});
