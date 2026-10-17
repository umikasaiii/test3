(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);
  A('cul-preistoria-e-prime-civilta', {
    title: { t: '[先史|せんし]と[最初|さいしょ]の[文明|ぶんめい]', it: 'Preistoria e prime civiltà' },
    sum: [
      { t: '⟦[先史時代|せんしじだい]⟧は、[文字|もじ]より[前|まえ]の[時代|じだい]です。', it: 'La preistoria è il tempo che precede la scrittura.' },
      { t: '⟦[旧石器時代|きゅうせっきじだい]⟧の[人々|ひとびと]は、[狩|か]りや[採集|さいしゅう]で[暮|く]らしました。', it: 'Nel Paleolitico la gente viveva di caccia e raccolta.' },
      { t: '⟦[新石器革命|しんせっきかくめい]⟧で、[農業|のうぎょう]が[始|はじ]まりました。', it: 'Con la rivoluzione neolitica nacque l’agricoltura.' },
      { t: '⟦[余剰|よじょう]⟧の[食料|しょくりょう]で、[町|まち]と[権力|けんりょく]が[生|う]まれました。', it: 'Le eccedenze di cibo fecero nascere città e potere organizzato.' },
      { t: '⟦メソポタミア⟧の[町|まち]ウルクで、⟦[楔形文字|くさびがたもじ]⟧が[生|う]まれました。', it: 'A Uruk, in Mesopotamia, nacque la scrittura cuneiforme.' },
      { t: 'エジプトは、⟦ナイル[川|がわ]⟧のおかげで[栄|さか]えました。', it: 'L’Egitto prosperò grazie al Nilo.' },
      { t: 'インダスと[中国|ちゅうごく]にも、⟦[大河|たいが]⟧の[文明|ぶんめい]がありました。', it: 'Anche l’Indo e la Cina ebbero civiltà fluviali.' }
    ],
    gloss: [
      { w: '先史時代', r: 'せんしじだい', it: 'preistoria' },
      { w: '旧石器時代', r: 'きゅうせっきじだい', it: 'Paleolitico' },
      { w: '新石器革命', r: 'しんせっきかくめい', it: 'rivoluzione neolitica' },
      { w: '余剰', r: 'よじょう', it: 'eccedenza' },
      { w: 'メソポタミア', r: 'めそぽたみあ', it: 'Mesopotamia' },
      { w: '楔形文字', r: 'くさびがたもじ', it: 'scrittura cuneiforme' },
      { w: 'ナイル川', r: 'ないるがわ', it: 'il Nilo' },
      { w: '大河', r: 'たいが', it: 'grande fiume' },
      { w: 'ウルク', r: 'うるく', it: 'Uruk' },
      { w: '文明', r: 'ぶんめい', it: 'civiltà' }
    ]
  });

  A('cul-grecia-polis-e-ellenismo', {
    title: { t: '[古代|こだい]ギリシャの[都市|とし]', it: 'Grecia: polis ed ellenismo' },
    sum: [
      { t: '⟦ポリス⟧は、[独立|どくりつ]した[都市国家|とししこっか]です。', it: 'La polis è una città-stato indipendente.' },
      { t: '⟦スパルタ⟧は[軍事|ぐんじ]の[国|くに]で、⟦アテネ⟧は⟦[民主政|みんしゅせい]⟧を[育|そだ]てました。', it: 'Sparta fu uno Stato militare, Atene sviluppò la democrazia.' },
      { t: 'ギリシャは⟦ペルシア[戦争|せんそう]⟧で、[独立|どくりつ]を[守|まも]りました。', it: 'La Grecia difese la propria indipendenza nelle guerre persiane.' },
      { t: '⟦ペリクレス⟧の[時代|じだい]、アテネは[栄|さか]え、⟦パルテノン[神殿|しんでん]⟧が[建|た]ちました。', it: 'Ai tempi di Pericle Atene prosperò e fu costruito il Partenone.' },
      { t: '⟦ペロポネソス[戦争|せんそう]⟧のあと、ギリシャは[弱|よわ]くなりました。', it: 'Dopo la guerra del Peloponneso la Grecia si indebolì.' },
      { t: '⟦アレクサンドロス⟧は、ペルシアを[征服|せいふく]しました。', it: 'Alessandro conquistò la Persia.' },
      { t: '⟦ヘレニズム[時代|じだい]⟧には、ギリシャとオリエントの[文化|ぶんか]が[混|ま]ざりました。', it: 'Nell’età ellenistica si mescolarono la cultura greca e quella orientale.' }
    ],
    gloss: [
      { w: 'ポリス', r: 'ぽりす', it: 'polis, città-stato' },
      { w: 'スパルタ', r: 'すぱるた', it: 'Sparta' },
      { w: 'アテネ', r: 'あてね', it: 'Atene' },
      { w: '民主政', r: 'みんしゅせい', it: 'democrazia (regime)' },
      { w: 'ペルシア戦争', r: 'ぺるしあせんそう', it: 'guerre persiane' },
      { w: 'ペリクレス', r: 'ぺりくれす', it: 'Pericle' },
      { w: 'パルテノン神殿', r: 'ぱるてのんしんでん', it: 'Partenone' },
      { w: 'ペロポネソス戦争', r: 'ぺろぽねそすせんそう', it: 'guerra del Peloponneso' },
      { w: 'アレクサンドロス', r: 'あれくさんどろす', it: 'Alessandro Magno' },
      { w: 'ヘレニズム時代', r: 'へれにずむじだい', it: 'età ellenistica' }
    ]
  });

  A('cul-roma-monarchia-e-repubblica', {
    title: { t: 'ローマの[王政|おうせい]と[共和政|きょうわせい]', it: 'Roma: monarchia e repubblica' },
    sum: [
      { t: '[伝承|でんしょう]では、[紀元前|きげんぜん][五百九年|ごひゃくきゅうねん]に[王|おう]が[追|お]われました。', it: 'Secondo la tradizione, nel 509 a.C. il re fu cacciato.' },
      { t: '[王|おう]のあと、ローマは⟦[共和政|きょうわせい]⟧の[国|くに]になりました。', it: 'Dopo i re, Roma divenne una repubblica.' },
      { t: '⟦[執政官|しっせいかん]⟧は[二人|ふたり]で、⟦[元老院|げんろういん]⟧が[政治|せいじ]を[導|みちび]きました。', it: 'I consoli erano due e il senato guidava la politica.' },
      { t: '⟦[平民|へいみん]⟧は、⟦[護民官|ごみんかん]⟧を[得|え]て[権利|けんり]を[広|ひろ]げました。', it: 'I plebei ottennero i tribuni e ampliarono i propri diritti.' },
      { t: '⟦ポエニ[戦争|せんそう]⟧で、ローマはカルタゴに[勝|か]ちました。', it: 'Nelle guerre puniche Roma vinse contro Cartagine.' },
      { t: '⟦グラックス[兄弟|きょうだい]⟧は、[土地|とち]の[改革|かいかく]を[試|こころ]みました。', it: 'I Gracchi tentarono una riforma agraria.' },
      { t: '⟦カエサル⟧の[死後|しご]、[内乱|ないらん]が[続|つづ]きました。', it: 'Dopo la morte di Cesare le guerre civili continuarono.' }
    ],
    gloss: [
      { w: '共和政', r: 'きょうわせい', it: 'repubblica (regime)' },
      { w: '執政官', r: 'しっせいかん', it: 'console' },
      { w: '元老院', r: 'げんろういん', it: 'senato' },
      { w: '平民', r: 'へいみん', it: 'plebei' },
      { w: '護民官', r: 'ごみんかん', it: 'tribuno della plebe' },
      { w: 'ポエニ戦争', r: 'ぽえにせんそう', it: 'guerre puniche' },
      { w: 'カルタゴ', r: 'かるたご', it: 'Cartagine' },
      { w: 'ハンニバル', r: 'はんにばる', it: 'Annibale' },
      { w: 'グラックス兄弟', r: 'ぐらっくすきょうだい', it: 'i Gracchi' },
      { w: 'カエサル', r: 'かえさる', it: 'Cesare' }
    ]
  });

  A('cul-roma-impero-e-caduta', {
    title: { t: 'ローマ[帝国|ていこく]のおわり', it: 'Roma: impero e caduta' },
    sum: [
      { t: '⟦アウグストゥス⟧が、⟦[元首政|げんしゅせい]⟧を[始|はじ]めました。', it: 'Augusto diede inizio al principato.' },
      { t: '⟦ローマの[平和|へいわ]⟧の[間|あいだ]、[帝国|ていこく]の[中|なか]は[比較的|ひかくてき][平和|へいわ]でした。', it: 'Durante la pax romana l’impero fu relativamente pacifico al suo interno.' },
      { t: '⟦トラヤヌス⟧の[時代|じだい]に、[帝国|ていこく]は[最大|さいだい]になりました。', it: 'Sotto Traiano l’impero raggiunse la massima estensione.' },
      { t: '⟦カラカラ⟧は、[自由|じゆう]な[人|ひと]みなに⟦[市民権|しみんけん]⟧を[与|あた]えました。', it: 'Caracalla estese la cittadinanza a tutti gli uomini liberi.' },
      { t: '⟦[軍人皇帝時代|ぐんじんこうていじだい]⟧は、[不安定|ふあんてい]でした。', it: 'L’età dell’anarchia militare fu instabile.' },
      { t: '⟦コンスタンティヌス⟧の⟦ミラノ[勅令|ちょくれい]⟧で、キリスト[教|きょう]が[認|みと]められました。', it: 'Con l’Editto di Milano di Costantino il cristianesimo fu tollerato.' },
      { t: '[西暦|せいれき][四百七十六年|しひゃくななじゅうろくねん]、⟦オドアケル⟧が[西|にし]の[皇帝|こうてい]を[退位|たいい]させました。', it: 'Nel 476 Odoacre depose l’imperatore d’Occidente.' }
    ],
    gloss: [
      { w: 'アウグストゥス', r: 'あうぐすとぅす', it: 'Augusto' },
      { w: '元首政', r: 'げんしゅせい', it: 'principato' },
      { w: 'ローマの平和', r: 'ろーまのへいわ', it: 'pax romana' },
      { w: 'トラヤヌス', r: 'とらやぬす', it: 'Traiano' },
      { w: 'カラカラ', r: 'からから', it: 'Caracalla' },
      { w: '市民権', r: 'しみんけん', it: 'cittadinanza' },
      { w: '軍人皇帝時代', r: 'ぐんじんこうていじだい', it: 'anarchia militare' },
      { w: 'コンスタンティヌス', r: 'こんすたんてぃぬす', it: 'Costantino' },
      { w: 'ミラノ勅令', r: 'みらのちょくれい', it: 'Editto di Milano' },
      { w: 'オドアケル', r: 'おどあける', it: 'Odoacre' }
    ]
  });

  A('cul-alto-medioevo', {
    title: { t: '[中世|ちゅうせい]の[前半|ぜんはん]', it: 'Alto Medioevo' },
    sum: [
      { t: '⟦ゲルマン[人|じん]⟧が、ローマの[土地|とち]に[王国|おうこく]を[作|つく]りました。', it: 'I popoli germanici fondarono regni sui territori romani.' },
      { t: '⟦ユスティニアヌス⟧は、ビザンツ[帝国|ていこく]でローマ[法|ほう]をまとめました。', it: 'Giustiniano raccolse il diritto romano nell’impero bizantino.' },
      { t: '⟦ムハンマド⟧が、⟦イスラム[教|きょう]⟧を[説|と]きました。', it: 'Maometto predicò l’islam.' },
      { t: 'イスラムの[勢力|せいりょく]は、[短|みじか]い[間|あいだ]に[広|ひろ]がりました。', it: 'La potenza islamica si estese in poco tempo.' },
      { t: '⟦カール[大帝|たいてい]⟧は、[西暦|せいれき][八百年|はっぴゃくねん]に[皇帝|こうてい]になりました。', it: 'Carlo Magno divenne imperatore nell’800.' },
      { t: '⟦[封建制|ほうけんせい]⟧では、[主君|しゅくん]が⟦[家臣|かしん]⟧に⟦[封土|ほうど]⟧を[与|あた]えました。', it: 'Nel feudalesimo il signore dava un feudo al vassallo.' },
      { t: '⟦[修道院|しゅうどういん]⟧では、[祈|いの]りと[労働|ろうどう]を[行|おこな]い、[写本|しゃほん]も[作|つく]りました。', it: 'Nei monasteri si pregava e si lavorava, e si copiavano manoscritti.' }
    ],
    gloss: [
      { w: 'ゲルマン人', r: 'げるまんじん', it: 'popoli germanici' },
      { w: 'ユスティニアヌス', r: 'ゆすてぃにあぬす', it: 'Giustiniano' },
      { w: 'ビザンツ帝国', r: 'びざんつていこく', it: 'impero bizantino' },
      { w: 'ムハンマド', r: 'むはんまど', it: 'Maometto' },
      { w: 'イスラム教', r: 'いすらむきょう', it: 'islam' },
      { w: 'カール大帝', r: 'かーるたいてい', it: 'Carlo Magno' },
      { w: '封建制', r: 'ほうけんせい', it: 'feudalesimo' },
      { w: '家臣', r: 'かしん', it: 'vassallo' },
      { w: '封土', r: 'ほうど', it: 'feudo' },
      { w: '修道院', r: 'しゅうどういん', it: 'monastero' }
    ]
  });

  A('cul-basso-medioevo', {
    title: { t: '[中世|ちゅうせい]の[後半|こうはん]', it: 'Basso Medioevo' },
    sum: [
      { t: '[西暦|せいれき][千年|せんねん]のあと、⟦[商業|しょうぎょう]⟧と[都市|とし]が[栄|さか]えました。', it: 'Dopo il Mille commercio e città prosperarono.' },
      { t: '⟦[大学|だいがく]⟧が、ボローニャなどに[生|う]まれました。', it: 'Nacquero le università, per esempio a Bologna.' },
      { t: 'イタリアの[都市|とし]は、⟦コムーネ⟧として[自治|じち]を[行|おこな]いました。', it: 'Le città italiane si governarono da sole come comuni.' },
      { t: '⟦[叙任権闘争|じょにんけんとうそう]⟧で、[皇帝|こうてい]は⟦カノッサ⟧で[悔|く]い[改|あらた]めました。', it: 'Nella lotta per le investiture l’imperatore fece penitenza a Canossa.' },
      { t: '⟦[十字軍|じゅうじぐん]⟧は、エルサレムなどの[聖地|せいち]を[目指|めざ]しました。', it: 'Le crociate puntavano ai luoghi santi come Gerusalemme.' },
      { t: '⟦[黒死病|こくしびょう]⟧で、[人口|じんこう]の[約|やく][三分|さんぶん]の[一|いち]が[亡|な]くなったと[言|い]われます。', it: 'Si stima che la peste nera abbia ucciso circa un terzo della popolazione.' },
      { t: '⟦[百年戦争|ひゃくねんせんそう]⟧は、イギリスとフランスの[戦|たたか]いでした。', it: 'La guerra dei Cent’anni oppose Inghilterra e Francia.' }
    ],
    gloss: [
      { w: '商業', r: 'しょうぎょう', it: 'commercio' },
      { w: '大学', r: 'だいがく', it: 'università' },
      { w: 'コムーネ', r: 'こむーね', it: 'comune' },
      { w: '叙任権闘争', r: 'じょにんけんとうそう', it: 'lotta per le investiture' },
      { w: 'カノッサ', r: 'かのっさ', it: 'Canossa' },
      { w: '十字軍', r: 'じゅうじぐん', it: 'crociate' },
      { w: '聖地', r: 'せいち', it: 'luogo santo' },
      { w: '黒死病', r: 'こくしびょう', it: 'peste nera' },
      { w: '百年戦争', r: 'ひゃくねんせんそう', it: 'guerra dei Cent’anni' },
      { w: '教皇', r: 'きょうこう', it: 'papa' }
    ]
  });

  A('cul-umanesimo-scoperte-riforma', {
    title: { t: 'ルネサンスと[大航海|だいこうかい]と[宗教改革|しゅうきょうかいかく]', it: 'Umanesimo, scoperte, Riforma' },
    sum: [
      { t: '⟦[人文主義|じんぶんしゅぎ]⟧は、[古典|こてん]を[学|まな]び[人間|にんげん]を[重|おも]んじました。', it: 'L’umanesimo studiò i classici e mise l’uomo al centro.' },
      { t: '⟦ルネサンス⟧は、フィレンツェから[広|ひろ]がりました。', it: 'Il Rinascimento si diffuse a partire da Firenze.' },
      { t: '⟦グーテンベルク⟧の⟦[活版印刷|かっぱんいんさつ]⟧が、[本|ほん]を[増|ふ]やしました。', it: 'La stampa a caratteri mobili di Gutenberg moltiplicò i libri.' },
      { t: '⟦コロンブス⟧は、[西|にし]へ[航海|こうかい]し、カリブ[海|かい]の[島|しま]に[着|つ]きました。', it: 'Colombo navigò verso ovest e giunse su un’isola dei Caraibi.' },
      { t: '⟦コルテス⟧は、アステカ[帝国|ていこく]を[滅|ほろ]ぼしました。', it: 'Cortés distrusse l’impero azteco.' },
      { t: '⟦[宗教改革|しゅうきょうかいかく]⟧で、⟦ルター⟧は⟦[免罪符|めんざいふ]⟧を[批判|ひはん]しました。', it: 'Nella Riforma Lutero criticò le indulgenze.' },
      { t: '⟦トリエント[公会議|こうかいぎ]⟧で、カトリックは[改革|かいかく]を[進|すす]めました。', it: 'Con il Concilio di Trento la Chiesa cattolica portò avanti una riforma.' }
    ],
    gloss: [
      { w: '人文主義', r: 'じんぶんしゅぎ', it: 'umanesimo' },
      { w: 'ルネサンス', r: 'るねさんす', it: 'Rinascimento' },
      { w: 'グーテンベルク', r: 'ぐーてんべるく', it: 'Gutenberg' },
      { w: '活版印刷', r: 'かっぱんいんさつ', it: 'stampa a caratteri mobili' },
      { w: 'コロンブス', r: 'ころんぶす', it: 'Colombo' },
      { w: 'コルテス', r: 'こるてす', it: 'Cortés' },
      { w: '宗教改革', r: 'しゅうきょうかいかく', it: 'Riforma protestante' },
      { w: 'ルター', r: 'るたー', it: 'Lutero' },
      { w: '免罪符', r: 'めんざいふ', it: 'indulgenze' },
      { w: 'トリエント公会議', r: 'とりえんとこうかいぎ', it: 'Concilio di Trento' }
    ]
  });

  A('cul-stato-moderno-e-settecento', {
    title: { t: '[近代国家|きんだいこっか]と[十八世紀|じゅうはっせいき]', it: 'Stato moderno e Settecento' },
    sum: [
      { t: '⟦[絶対王政|ぜったいおうせい]⟧では、[王|おう]が[権力|けんりょく]を[集|あつ]めました。', it: 'Nell’assolutismo il re concentrava il potere.' },
      { t: '⟦ルイ[十四世|じゅうよんせい]⟧は、ベルサイユから[国|くに]を[治|おさ]めました。', it: 'Luigi XIV governò il regno da Versailles.' },
      { t: '⟦[名誉革命|めいよかくめい]⟧のあと、[議会|ぎかい]が[王|おう]の[権力|けんりょく]を[制限|せいげん]しました。', it: 'Dopo la Gloriosa rivoluzione il Parlamento limitò il potere del re.' },
      { t: '⟦[科学革命|かがくかくめい]⟧で、⟦ニュートン⟧は[万有引力|ばんゆういんりょく]を[示|しめ]しました。', it: 'Nella rivoluzione scientifica Newton formulò la gravitazione universale.' },
      { t: '⟦[啓蒙思想|けいもうしそう]⟧は、[理性|りせい]で[社会|しゃかい]を[良|よ]くしようとしました。', it: 'L’Illuminismo voleva migliorare la società con la ragione.' },
      { t: '⟦モンテスキュー⟧は、⟦[三権分立|さんけんぶんりつ]⟧を[説|と]きました。', it: 'Montesquieu sostenne la separazione dei poteri.' },
      { t: '⟦[産業革命|さんぎょうかくめい]⟧は、イギリスで⟦[蒸気機関|じょうききかん]⟧と[工場|こうじょう]から[始|はじ]まりました。', it: 'La rivoluzione industriale iniziò in Gran Bretagna con la macchina a vapore e la fabbrica.' }
    ],
    gloss: [
      { w: '絶対王政', r: 'ぜったいおうせい', it: 'assolutismo' },
      { w: 'ルイ十四世', r: 'るいじゅうよんせい', it: 'Luigi XIV' },
      { w: '名誉革命', r: 'めいよかくめい', it: 'Gloriosa rivoluzione' },
      { w: '科学革命', r: 'かがくかくめい', it: 'rivoluzione scientifica' },
      { w: 'ニュートン', r: 'にゅーとん', it: 'Newton' },
      { w: '啓蒙思想', r: 'けいもうしそう', it: 'Illuminismo' },
      { w: 'モンテスキュー', r: 'もんてすきゅー', it: 'Montesquieu' },
      { w: '三権分立', r: 'さんけんぶんりつ', it: 'separazione dei poteri' },
      { w: '産業革命', r: 'さんぎょうかくめい', it: 'rivoluzione industriale' },
      { w: '蒸気機関', r: 'じょうききかん', it: 'macchina a vapore' }
    ]
  });

  A('cul-rivoluzioni-atlantiche-e-napoleone', {
    title: { t: '[大西洋|たいせいよう]の[革命|かくめい]とナポレオン', it: 'Rivoluzioni atlantiche e Napoleone' },
    sum: [
      { t: 'アメリカの[植民地|しょくみんち]が、⟦[独立宣言|どくりつせんげん]⟧を[出|だ]しました。', it: 'Le colonie americane emanarono la Dichiarazione d’indipendenza.' },
      { t: '⟦フランス[革命|かくめい]⟧で、[民衆|みんしゅう]が⟦バスティーユ[牢獄|ろうごく]⟧を[襲|おそ]いました。', it: 'Nella Rivoluzione francese il popolo assaltò la Bastiglia.' },
      { t: '⟦[人権宣言|じんけんせんげん]⟧は、[自由|じゆう]と[平等|びょうどう]を[宣言|せんげん]しました。', it: 'La Dichiarazione dei diritti proclamò libertà e uguaglianza.' },
      { t: '⟦ロベスピエール⟧らの⟦[恐怖政治|きょうふせいじ]⟧で、[多|おお]くの[人|ひと]が[処刑|しょけい]されました。', it: 'Con il Terrore di Robespierre e dei suoi molti furono giustiziati.' },
      { t: '⟦ナポレオン⟧は、[皇帝|こうてい]になって⟦ナポレオン[法典|ほうてん]⟧を[作|つく]りました。', it: 'Napoleone divenne imperatore e fece il Codice civile.' },
      { t: '⟦ナポレオン⟧は⟦ワーテルロー⟧で[敗|やぶ]れ、セントヘレナ[島|とう]に[送|おく]られました。', it: 'Napoleone fu sconfitto a Waterloo e mandato a Sant’Elena.' },
      { t: '⟦ウィーン[会議|かいぎ]⟧は、[正統|せいとう]な[王|おう]を[復活|ふっかつ]させようとしました。', it: 'Il Congresso di Vienna cercò di restaurare i sovrani legittimi.' }
    ],
    gloss: [
      { w: '独立宣言', r: 'どくりつせんげん', it: 'Dichiarazione d’indipendenza' },
      { w: 'フランス革命', r: 'ふらんすかくめい', it: 'Rivoluzione francese' },
      { w: 'バスティーユ牢獄', r: 'ばすてぃーゆろうごく', it: 'Bastiglia' },
      { w: '人権宣言', r: 'じんけんせんげん', it: 'Dichiarazione dei diritti dell’uomo' },
      { w: 'ロベスピエール', r: 'ろべすぴえーる', it: 'Robespierre' },
      { w: '恐怖政治', r: 'きょうふせいじ', it: 'Terrore' },
      { w: 'ナポレオン', r: 'なぽれおん', it: 'Napoleone' },
      { w: 'ナポレオン法典', r: 'なぽれおんほうてん', it: 'Codice napoleonico' },
      { w: 'ワーテルロー', r: 'わーてるろー', it: 'Waterloo' },
      { w: 'ウィーン会議', r: 'うぃーんかいぎ', it: 'Congresso di Vienna' }
    ]
  });

  A('cul-ottocento-risorgimento-imperialismo', {
    title: { t: 'リソルジメントと[帝国主義|ていこくしゅぎ]', it: 'Ottocento: Risorgimento e imperialismo' },
    sum: [
      { t: '⟦リソルジメント⟧は、イタリア[統一|とういつ]への[動|うご]きです。', it: 'Il Risorgimento è il processo verso l’unità d’Italia.' },
      { t: '⟦マッツィーニ⟧は、[共和国|きょうわこく]としての[統一|とういつ]を[目指|めざ]しました。', it: 'Mazzini mirava a un’unità in forma di repubblica.' },
      { t: '⟦カブール⟧は、サルデーニャ[王国|おうこく]を[近代化|きんだいか]しました。', it: 'Cavour modernizzò il Regno di Sardegna.' },
      { t: '⟦ガリバルディ⟧は、[千人|せんにん]の[志願兵|しがんへい]とシチリアに[向|む]かいました。', it: 'Garibaldi partì per la Sicilia con mille volontari.' },
      { t: '[千八百六十一年|せんはっぴゃくろくじゅういちねん]、⟦イタリア[王国|おうこく]⟧ができました。', it: 'Nel 1861 nacque il Regno d’Italia.' },
      { t: '⟦ローマ[問題|もんだい]⟧で、[教皇|きょうこう]は[国|くに]と[対立|たいりつ]しました。', it: 'Con la questione romana il papa entrò in contrasto con lo Stato.' },
      { t: '⟦ベルリン[会議|かいぎ]⟧のあと、⟦[帝国主義|ていこくしゅぎ]⟧の[国|くに]がアフリカを[分|わ]けました。', it: 'Dopo la Conferenza di Berlino le potenze imperialiste si spartirono l’Africa.' }
    ],
    gloss: [
      { w: 'リソルジメント', r: 'りそるじめんと', it: 'Risorgimento' },
      { w: 'マッツィーニ', r: 'まっつぃーに', it: 'Mazzini' },
      { w: 'カブール', r: 'かぶーる', it: 'Cavour' },
      { w: 'ガリバルディ', r: 'がりばるでぃ', it: 'Garibaldi' },
      { w: 'イタリア王国', r: 'いたりあおうこく', it: 'Regno d’Italia' },
      { w: 'ローマ問題', r: 'ろーまもんだい', it: 'questione romana' },
      { w: 'ベルリン会議', r: 'べるりんかいぎ', it: 'Conferenza di Berlino' },
      { w: '帝国主義', r: 'ていこくしゅぎ', it: 'imperialismo' },
      { w: '社会問題', r: 'しゃかいもんだい', it: 'questione sociale' },
      { w: 'ビスマルク', r: 'びすまるく', it: 'Bismarck' }
    ]
  });

  A('cul-novecento-guerre-e-totalitarismi', {
    title: { t: '[二十世紀|にじっせいき]の[戦争|せんそう]と[独裁|どくさい]', it: 'Novecento: guerre e totalitarismi' },
    sum: [
      { t: '⟦[第一次世界大戦|だいいちじせかいたいせん]⟧は、サラエボの[事件|じけん]から[始|はじ]まりました。', it: 'La prima guerra mondiale iniziò dopo l’attentato di Sarajevo.' },
      { t: '⟦[塹壕戦|ざんごうせん]⟧で、[多|おお]くの[兵士|へいし]が[亡|な]くなりました。', it: 'Nella guerra di trincea morirono molti soldati.' },
      { t: '⟦ロシア[革命|かくめい]⟧で、⟦レーニン⟧の[党|とう]が[権力|けんりょく]を[取|と]りました。', it: 'Con la rivoluzione russa il partito di Lenin prese il potere.' },
      { t: '⟦ムッソリーニ⟧は、⟦ローマ[進軍|しんぐん]⟧のあと[首相|しゅしょう]になりました。', it: 'Mussolini divenne capo del governo dopo la marcia su Roma.' },
      { t: '⟦[世界恐慌|せかいきょうこう]⟧のあと、⟦ヒトラー⟧が[首相|しゅしょう]になりました。', it: 'Dopo la Grande Depressione Hitler divenne cancelliere.' },
      { t: 'ドイツのポーランド[侵攻|しんこう]で、⟦[第二次世界大戦|だいにじせかいたいせん]⟧が[始|はじ]まりました。', it: 'Con l’invasione tedesca della Polonia iniziò la seconda guerra mondiale.' },
      { t: 'ナチスの⟦ホロコースト⟧では、[約|やく][六百万人|ろっぴゃくまんにん]のユダヤ[人|じん]が[殺|ころ]されました。', it: 'Nella Shoah nazista furono uccisi circa sei milioni di ebrei.' }
    ],
    gloss: [
      { w: '第一次世界大戦', r: 'だいいちじせかいたいせん', it: 'prima guerra mondiale' },
      { w: '塹壕戦', r: 'ざんごうせん', it: 'guerra di trincea' },
      { w: 'ロシア革命', r: 'ろしあかくめい', it: 'rivoluzione russa' },
      { w: 'レーニン', r: 'れーにん', it: 'Lenin' },
      { w: 'ムッソリーニ', r: 'むっそりーに', it: 'Mussolini' },
      { w: 'ローマ進軍', r: 'ろーましんぐん', it: 'marcia su Roma' },
      { w: '世界恐慌', r: 'せかいきょうこう', it: 'Grande Depressione' },
      { w: 'ヒトラー', r: 'ひとらー', it: 'Hitler' },
      { w: '第二次世界大戦', r: 'だいにじせかいたいせん', it: 'seconda guerra mondiale' },
      { w: 'ホロコースト', r: 'ほろこーすと', it: 'Shoah' }
    ]
  });

  A('cul-dal-dopoguerra-a-oggi', {
    title: { t: '[戦後|せんご]から[今|いま]まで', it: 'Dal dopoguerra a oggi' },
    sum: [
      { t: '⟦[冷戦|れいせん]⟧は、アメリカとソ[連|れん]の[対立|たいりつ]でした。', it: 'La guerra fredda fu il confronto tra Stati Uniti e URSS.' },
      { t: '⟦ベルリンの[壁|かべ]⟧が[崩|くず]れ、[冷戦|れいせん]は[終|お]わりました。', it: 'Il Muro di Berlino cadde e la guerra fredda finì.' },
      { t: '⟦[脱植民地化|だつしょくみんちか]⟧で、アジアやアフリカの[国々|くにぐに]が[独立|どくりつ]しました。', it: 'Con la decolonizzazione i paesi di Asia e Africa divennero indipendenti.' },
      { t: '⟦イスラエル⟧の[建国|けんこく]は、[人々|ひとびと]によって[意味|いみ]が[違|ちが]います。', it: 'La nascita di Israele ha significati diversi a seconda dei popoli.' },
      { t: '⟦[国民投票|こくみんとうひょう]⟧で、イタリアは⟦[共和国|きょうわこく]⟧になりました。', it: 'Con un referendum l’Italia divenne una repubblica.' },
      { t: '⟦イタリア[憲法|けんぽう]⟧は、[千九百四十八年|せんきゅうひゃくよんじゅうはちねん]に[施行|しこう]されました。', it: 'La Costituzione italiana entrò in vigore nel 1948.' },
      { t: '⟦[欧州連合|おうしゅうれんごう]⟧は、⟦マーストリヒト[条約|じょうやく]⟧で[生|う]まれました。', it: 'L’Unione europea nacque con il Trattato di Maastricht.' }
    ],
    gloss: [
      { w: '冷戦', r: 'れいせん', it: 'guerra fredda' },
      { w: 'ベルリンの壁', r: 'べるりんのかべ', it: 'Muro di Berlino' },
      { w: '脱植民地化', r: 'だつしょくみんちか', it: 'decolonizzazione' },
      { w: 'イスラエル', r: 'いすらえる', it: 'Israele' },
      { w: 'パレスチナ', r: 'ぱれすちな', it: 'Palestina' },
      { w: '国民投票', r: 'こくみんとうひょう', it: 'referendum' },
      { w: '共和国', r: 'きょうわこく', it: 'repubblica' },
      { w: 'イタリア憲法', r: 'いたりあけんぽう', it: 'Costituzione italiana' },
      { w: '欧州連合', r: 'おうしゅうれんごう', it: 'Unione europea' },
      { w: 'マーストリヒト条約', r: 'ましゅとりひとじょうやく', it: 'Trattato di Maastricht' }
    ]
  });

  A('cul-geografia-fisica', {
    title: { t: '[自然地理|しぜんちり]', it: 'Geografia fisica' },
    sum: [
      { t: '[地球|ちきゅう]の[約|やく][七十一|ななじゅういち]パーセントは、[水|みず]で[覆|おお]われています。', it: 'Circa il 71% della Terra è coperto d’acqua.' },
      { t: '⟦[山地|さんち]⟧、⟦[丘陵|きゅうりょう]⟧、⟦[平野|へいや]⟧、⟦[高原|こうげん]⟧が、[主|おも]な[地形|ちけい]です。', it: 'Montagne, colline, pianure e altopiani sono le forme principali del rilievo.' },
      { t: '[地球|ちきゅう]の[表面|ひょうめん]は⟦プレート⟧に[分|わ]かれ、ゆっくり[動|うご]いています。', it: 'La superficie terrestre è divisa in placche che si muovono lentamente.' },
      { t: '⟦[地震|じしん]⟧と⟦[火山|かざん]⟧は、プレートの[境|さかい]に[多|おお]いです。', it: 'Terremoti e vulcani sono frequenti ai bordi delle placche.' },
      { t: '[川|かわ]は⟦[流域|りゅういき]⟧の[水|みず]を[集|あつ]めて、[海|うみ]や[湖|みずうみ]に[注|そそ]ぎます。', it: 'Il fiume raccoglie l’acqua del bacino e sfocia in un mare o in un lago.' },
      { t: '⟦[太平洋|たいへいよう]⟧は、いちばん[広|ひろ]い[海|うみ]です。', it: 'Il Pacifico è l’oceano più vasto.' },
      { t: '⟦マリアナ[海溝|かいこう]⟧は、[知|し]られている[中|なか]でいちばん[深|ふか]い[場所|ばしょ]です。', it: 'La fossa delle Marianne è il punto più profondo conosciuto.' }
    ],
    gloss: [
      { w: '山地', r: 'さんち', it: 'montagne, area montuosa' },
      { w: '丘陵', r: 'きゅうりょう', it: 'colline' },
      { w: '平野', r: 'へいや', it: 'pianura' },
      { w: '高原', r: 'こうげん', it: 'altopiano' },
      { w: 'プレート', r: 'ぷれーと', it: 'placca tettonica' },
      { w: '地震', r: 'じしん', it: 'terremoto' },
      { w: '火山', r: 'かざん', it: 'vulcano' },
      { w: '流域', r: 'りゅういき', it: 'bacino idrografico' },
      { w: '太平洋', r: 'たいへいよう', it: 'Oceano Pacifico' },
      { w: 'マリアナ海溝', r: 'まりあなかいこう', it: 'fossa delle Marianne' }
    ]
  });

  A('cul-clima-e-biomi', {
    title: { t: '[気候|きこう]とバイオーム', it: 'Clima e biomi' },
    sum: [
      { t: '⟦[気候|きこう]⟧は、[長|なが]い[期間|きかん]の[天気|てんき]の[平均|へいきん]です。', it: 'Il clima è la media del tempo atmosferico su un lungo periodo.' },
      { t: '[気候|きこう]は、⟦[緯度|いど]⟧や⟦[標高|ひょうこう]⟧、[海|うみ]との[距離|きょり]で[決|き]まります。', it: 'Il clima dipende da latitudine, altitudine e distanza dal mare.' },
      { t: '[地球|ちきゅう]は⟦[熱帯|ねったい]⟧、⟦[温帯|おんたい]⟧、⟦[寒帯|かんたい]⟧に[分|わ]けられます。', it: 'La Terra si divide in zona torrida, temperata e fredda.' },
      { t: '⟦バイオーム⟧は、[気候|きこう]と[植物|しょくぶつ]で[決|き]まる[大|おお]きな[環境|かんきょう]です。', it: 'Un bioma è un grande ambiente definito da clima e vegetazione.' },
      { t: '⟦メキシコ[湾流|わんりゅう]⟧は[熱|ねつ]を[運|はこ]び、ヨーロッパの[冬|ふゆ]を[穏|おだ]やかにします。', it: 'La Corrente del Golfo porta calore e rende miti gli inverni europei.' },
      { t: '⟦[温室効果|おんしつこうか]⟧ガスが[増|ふ]え、⟦[地球温暖化|ちきゅうおんだんか]⟧が[進|すす]んでいます。', it: 'I gas serra aumentano e il riscaldamento globale avanza.' },
      { t: '⟦[緩和|かんわ]⟧と⟦[適応|てきおう]⟧の[二|ふた]つの[対策|たいさく]があります。', it: 'Le risposte sono due: mitigazione e adattamento.' }
    ],
    gloss: [
      { w: '気候', r: 'きこう', it: 'clima' },
      { w: '緯度', r: 'いど', it: 'latitudine' },
      { w: '標高', r: 'ひょうこう', it: 'altitudine' },
      { w: '熱帯', r: 'ねったい', it: 'zona torrida, tropicale' },
      { w: '温帯', r: 'おんたい', it: 'zona temperata' },
      { w: '寒帯', r: 'かんたい', it: 'zona fredda' },
      { w: 'バイオーム', r: 'ばいおーむ', it: 'bioma' },
      { w: 'メキシコ湾流', r: 'めきしこわんりゅう', it: 'Corrente del Golfo' },
      { w: '温室効果', r: 'おんしつこうか', it: 'effetto serra' },
      { w: '地球温暖化', r: 'ちきゅうおんだんか', it: 'riscaldamento globale' },
      { w: '緩和', r: 'かんわ', it: 'mitigazione' },
      { w: '適応', r: 'てきおう', it: 'adattamento' }
    ]
  });

  A('cul-popolazione-citta-migrazioni', {
    title: { t: '[人口|じんこう]と[都市|とし]と[移民|いみん]', it: 'Popolazione, città, migrazioni' },
    sum: [
      { t: '[世界|せかい]の⟦[人口|じんこう]⟧は、[八十億人|はちじゅうおくにん]を[超|こ]えました。', it: 'La popolazione mondiale ha superato gli 8 miliardi.' },
      { t: '⟦[人口密度|じんこうみつど]⟧は、[面積|めんせき]あたりの[人数|にんずう]です。', it: 'La densità di popolazione è il numero di persone per unità di superficie.' },
      { t: '⟦[出生率|しゅっしょうりつ]⟧と⟦[死亡率|しぼうりつ]⟧、[移動|いどう]で、[人口|じんこう]は[変|か]わります。', it: 'La popolazione cambia con natalità, mortalità e spostamenti.' },
      { t: '⟦[人口|じんこう]ピラミッド⟧は、[年齢|ねんれい]ごとの[人数|にんずう]を[示|しめ]します。', it: 'La piramide delle età mostra quante persone ci sono per ogni età.' },
      { t: '⟦[人口転換|じんこうてんかん]⟧では、[死亡率|しぼうりつ]が[先|さき]に[下|さ]がり、[次|つぎ]に[出生率|しゅっしょうりつ]が[下|さ]がります。', it: 'Nella transizione demografica cala prima la mortalità, poi la natalità.' },
      { t: '⟦[都市化|としか]⟧で、[半分|はんぶん]より[多|おお]くの[人|ひと]が[都市|とし]に[住|す]んでいます。', it: 'Con l’urbanizzazione più della metà delle persone vive in città.' },
      { t: '⟦[難民|なんみん]⟧は、[戦争|せんそう]などから[逃|のが]れ、[国際法|こくさいほう]に[守|まも]られます。', it: 'I rifugiati fuggono da guerre e simili e sono tutelati dal diritto internazionale.' }
    ],
    gloss: [
      { w: '人口', r: 'じんこう', it: 'popolazione' },
      { w: '人口密度', r: 'じんこうみつど', it: 'densità di popolazione' },
      { w: '出生率', r: 'しゅっしょうりつ', it: 'tasso di natalità' },
      { w: '死亡率', r: 'しぼうりつ', it: 'tasso di mortalità' },
      { w: '人口ピラミッド', r: 'じんこうぴらみっど', it: 'piramide delle età' },
      { w: '人口転換', r: 'じんこうてんかん', it: 'transizione demografica' },
      { w: '都市化', r: 'としか', it: 'urbanizzazione' },
      { w: '難民', r: 'なんみん', it: 'rifugiato' },
      { w: '移民', r: 'いみん', it: 'migrante' },
      { w: '高齢化', r: 'こうれいか', it: 'invecchiamento' }
    ]
  });

  A('cul-continenti-e-regioni', {
    title: { t: '[大陸|たいりく]と[地域|ちいき]', it: 'Continenti e regioni' },
    sum: [
      { t: '⟦[大陸|たいりく]⟧の[区分|くぶん]は、[取|と]り[決|き]めです。', it: 'La divisione in continenti è una convenzione.' },
      { t: '⟦アジア⟧は、[面積|めんせき]も[人口|じんこう]も[最大|さいだい]です。', it: 'L’Asia è la più grande per superficie e per popolazione.' },
      { t: 'ヒマラヤの⟦エベレスト⟧は、[世界|せかい]でいちばん[高|たか]い[山|やま]です。', it: 'L’Everest, nell’Himalaya, è la montagna più alta del mondo.' },
      { t: '⟦アフリカ⟧には、⟦サハラ[砂漠|さばく]⟧と⟦ナイル[川|がわ]⟧があります。', it: 'In Africa ci sono il Sahara e il Nilo.' },
      { t: '[南|みなみ]アメリカには、⟦アンデス[山脈|さんみゃく]⟧と⟦アマゾン⟧があります。', it: 'In America del Sud ci sono le Ande e l’Amazzonia.' },
      { t: '⟦ヨーロッパ⟧は、[小|ちい]さい[大陸|たいりく]で、[人口密度|じんこうみつど]が[高|たか]いです。', it: 'L’Europa è un piccolo continente con alta densità di popolazione.' },
      { t: '⟦[南極大陸|なんきょくたいりく]⟧は[氷|こおり]に[覆|おお]われ、[定住|ていじゅう]する[人|ひと]はいません。', it: 'L’Antartide è coperta di ghiaccio e non ha abitanti stabili.' }
    ],
    gloss: [
      { w: '大陸', r: 'たいりく', it: 'continente' },
      { w: 'アジア', r: 'あじあ', it: 'Asia' },
      { w: 'エベレスト', r: 'えべれすと', it: 'Everest' },
      { w: 'アフリカ', r: 'あふりか', it: 'Africa' },
      { w: 'サハラ砂漠', r: 'さはらさばく', it: 'Sahara' },
      { w: 'ナイル川', r: 'ないるがわ', it: 'Nilo' },
      { w: 'アンデス山脈', r: 'あんですさんみゃく', it: 'Ande' },
      { w: 'アマゾン', r: 'あまぞん', it: 'Amazzonia' },
      { w: 'ヨーロッパ', r: 'よーろっぱ', it: 'Europa' },
      { w: '南極大陸', r: 'なんきょくたいりく', it: 'Antartide' }
    ]
  });

  A('cul-italia-geografia', {
    title: { t: 'イタリアの[地理|ちり]', it: 'Geografia dell’Italia' },
    sum: [
      { t: 'イタリアは、[地中海|ちちゅうかい]の[中央|ちゅうおう]にある⟦[半島|はんとう]⟧の[国|くに]です。', it: 'L’Italia occupa una penisola al centro del Mediterraneo.' },
      { t: '⟦アルプス⟧は[北|きた]にあり、⟦アペニン[山脈|さんみゃく]⟧は[半島|はんとう]を[縦|たて]に[走|はし]ります。', it: 'Le Alpi sono a nord e gli Appennini percorrono la penisola nel senso della lunghezza.' },
      { t: '⟦ポー[平野|へいや]⟧には、ポー[川|がわ]が[流|なが]れています。', it: 'Nella Pianura Padana scorre il Po.' },
      { t: '⟦エトナ[山|さん]⟧と⟦ベスビオ[山|さん]⟧は、[火山|かざん]です。', it: 'L’Etna e il Vesuvio sono vulcani.' },
      { t: 'イタリアには、[二十|にじゅう]の⟦[州|しゅう]⟧があります。', it: 'L’Italia ha venti regioni.' },
      { t: '[北部|ほくぶ]と[南部|なんぶ]のあいだには、⟦[経済格差|けいざいかくさ]⟧があります。', it: 'Fra Nord e Sud esiste un divario economico.' },
      { t: '⟦[世界遺産|せかいいさん]⟧が[多|おお]く、⟦[観光|かんこう]⟧は[大|おお]きな[産業|さんぎょう]です。', it: 'Ci sono molti siti UNESCO e il turismo è un settore importante.' }
    ],
    gloss: [
      { w: '半島', r: 'はんとう', it: 'penisola' },
      { w: 'アルプス', r: 'あるぷす', it: 'Alpi' },
      { w: 'アペニン山脈', r: 'あぺにんさんみゃく', it: 'Appennini' },
      { w: 'ポー平野', r: 'ぽーへいや', it: 'Pianura Padana' },
      { w: 'ポー川', r: 'ぽーがわ', it: 'il Po' },
      { w: 'エトナ山', r: 'えとなさん', it: 'Etna' },
      { w: 'ベスビオ山', r: 'べすびおさん', it: 'Vesuvio' },
      { w: '州', r: 'しゅう', it: 'regione' },
      { w: '経済格差', r: 'けいざいかくさ', it: 'divario economico' },
      { w: '世界遺産', r: 'せかいいさん', it: 'patrimonio mondiale' },
      { w: '観光', r: 'かんこう', it: 'turismo' }
    ]
  });

  A('cul-europa-e-unione-europea', {
    title: { t: 'ヨーロッパと[欧州連合|おうしゅうれんごう]', it: 'Europa e Unione europea' },
    sum: [
      { t: '[戦争|せんそう]のあと、[経済|けいざい]を[結|むす]ぶ⟦ヨーロッパ[統合|とうごう]⟧が[始|はじ]まりました。', it: 'Dopo la guerra iniziò l’integrazione europea, che univa le economie.' },
      { t: '⟦ローマ[条約|じょうやく]⟧で、[共同市場|きょうどうしじょう]ができました。', it: 'Con i Trattati di Roma nacque il mercato comune.' },
      { t: '⟦マーストリヒト[条約|じょうやく]⟧で、⟦[欧州連合|おうしゅうれんごう]⟧が[生|う]まれました。', it: 'Con il Trattato di Maastricht nacque l’Unione europea.' },
      { t: '⟦[欧州議会|おうしゅうぎかい]⟧の[議員|ぎいん]は、[市民|しみん]が[直接|ちょくせつ][選|えら]びます。', it: 'I membri del Parlamento europeo sono eletti direttamente dai cittadini.' },
      { t: '⟦[欧州委員会|おうしゅういいんかい]⟧は、[法案|ほうあん]を[提案|ていあん]します。', it: 'La Commissione europea propone le leggi.' },
      { t: '⟦[単一市場|たんいつしじょう]⟧では、[人|ひと]や[物|もの]が[自由|じゆう]に[動|うご]きます。', it: 'Nel mercato unico persone e merci circolano liberamente.' },
      { t: '⟦ユーロ⟧は[共通|きょうつう]の[通貨|つうか]で、⟦シェンゲン[圏|けん]⟧の[中|なか]では、ふだん[国境検査|こっきょうけんさ]がありません。', it: 'L’euro è la moneta comune e nell’area Schengen di norma non ci sono controlli alle frontiere.' }
    ],
    gloss: [
      { w: 'ヨーロッパ統合', r: 'よーろっぱとうごう', it: 'integrazione europea' },
      { w: 'ローマ条約', r: 'ろーまじょうやく', it: 'Trattati di Roma' },
      { w: 'マーストリヒト条約', r: 'まーすとりひとじょうやく', it: 'Trattato di Maastricht' },
      { w: '欧州連合', r: 'おうしゅうれんごう', it: 'Unione europea' },
      { w: '欧州議会', r: 'おうしゅうぎかい', it: 'Parlamento europeo' },
      { w: '欧州委員会', r: 'おうしゅういいんかい', it: 'Commissione europea' },
      { w: '単一市場', r: 'たんいつしじょう', it: 'mercato unico' },
      { w: 'ユーロ', r: 'ゆーろ', it: 'euro' },
      { w: 'シェンゲン圏', r: 'しぇんげんけん', it: 'area Schengen' },
      { w: '加盟国', r: 'かめいこく', it: 'Stato membro' }
    ]
  });

  A('cul-geopolitica-organizzazioni', {
    title: { t: '[国際関係|こくさいかんけい]と[国際組織|こくさいそしき]', it: 'Geopolitica e organizzazioni' },
    sum: [
      { t: '⟦[国家|こっか]⟧は、[国民|こくみん]と[領土|りょうど]と⟦[主権|しゅけん]⟧を[持|も]ちます。', it: 'Uno Stato ha popolo, territorio e sovranità.' },
      { t: '⟦[国際連合|こくさいれんごう]⟧は、[平和|へいわ]を[守|まも]るために[作|つく]られました。', it: 'L’ONU è stata creata per mantenere la pace.' },
      { t: '⟦[安全保障理事会|あんぜんほしょうりじかい]⟧には、⟦[拒否権|きょひけん]⟧を[持|も]つ⟦[常任理事国|じょうにんりじこく]⟧がいます。', it: 'Nel Consiglio di sicurezza ci sono membri permanenti con diritto di veto.' },
      { t: '⟦[世界人権宣言|せかいじんけんせんげん]⟧は、[千九百四十八年|せんきゅうひゃくよんじゅうはちねん]に[採択|さいたく]されました。', it: 'La Dichiarazione universale dei diritti umani fu approvata nel 1948.' },
      { t: '⟦[北大西洋条約機構|きたたいせいようじょうやくきこう]⟧は、[集団防衛|しゅうだんぼうえい]の[同盟|どうめい]です。', it: 'La NATO è un’alleanza di difesa collettiva.' },
      { t: '⟦[主要国首脳会議|しゅようこくしゅのうかいぎ]⟧は、[条約|じょうやく]のない[非公式|ひこうしき]な[会合|かいごう]です。', it: 'Il G7 è un incontro informale, senza un trattato.' },
      { t: '⟦ホルムズ[海峡|かいきょう]⟧を、[世界|せかい]の[石油|せきゆ]の[約|やく][五分|ごぶん]の[一|いち]が[通|とお]ります。', it: 'Dallo stretto di Hormuz passa circa un quinto del petrolio mondiale.' }
    ],
    gloss: [
      { w: '国家', r: 'こっか', it: 'Stato' },
      { w: '主権', r: 'しゅけん', it: 'sovranità' },
      { w: '国際連合', r: 'こくさいれんごう', it: 'ONU' },
      { w: '安全保障理事会', r: 'あんぜんほしょうりじかい', it: 'Consiglio di sicurezza' },
      { w: '拒否権', r: 'きょひけん', it: 'diritto di veto' },
      { w: '常任理事国', r: 'じょうにんりじこく', it: 'membro permanente' },
      { w: '世界人権宣言', r: 'せかいじんけんせんげん', it: 'Dichiarazione universale dei diritti umani' },
      { w: '北大西洋条約機構', r: 'きたたいせいようじょうやくきこう', it: 'NATO' },
      { w: '主要国首脳会議', r: 'しゅようこくしゅのうかいぎ', it: 'G7 (vertice)' },
      { w: 'ホルムズ海峡', r: 'ほるむずかいきょう', it: 'stretto di Hormuz' }
    ]
  });

  A('cul-cartografia-coordinate', {
    title: { t: '[地図|ちず]と[座標|ざひょう]', it: 'Cartografia e coordinate' },
    sum: [
      { t: '⟦[緯度|いど]⟧と⟦[経度|けいど]⟧で、[地球|ちきゅう]の[位置|いち]を[表|あらわ]します。', it: 'Latitudine e longitudine indicano una posizione sulla Terra.' },
      { t: '⟦[赤道|せきどう]⟧は[緯度|いど]の[基準|きじゅん]で、⟦[本初子午線|ほんしょしごせん]⟧は[経度|けいど]の[基準|きじゅん]です。', it: 'L’equatore è il riferimento per la latitudine, il meridiano zero per la longitudine.' },
      { t: '⟦[投影法|とうえいほう]⟧は、[丸|まる]い[地球|ちきゅう]を[平面|へいめん]に[表|あらわ]す[方法|ほうほう]です。', it: 'La proiezione è un metodo per rappresentare la Terra sferica su un piano.' },
      { t: '⟦メルカトル[図法|ずほう]⟧は[航海|こうかい]に[便利|べんり]ですが、[極|きょく]の[近|ちか]くが[大|おお]きく[見|み]えます。', it: 'La proiezione di Mercatore è utile per navigare ma ingrandisce le zone vicine ai poli.' },
      { t: '⟦[縮尺|しゅくしゃく]⟧は、[地図|ちず]の[距離|きょり]と[実際|じっさい]の[距離|きょり]の[比|ひ]です。', it: 'La scala è il rapporto fra la distanza sulla carta e quella reale.' },
      { t: '⟦[等高線|とうこうせん]⟧が[密|みつ]だと、[斜面|しゃめん]は[急|きゅう]です。', it: 'Se le curve di livello sono ravvicinate, il pendio è ripido.' },
      { t: '[経度|けいど][十五度|じゅうごど]ごとに、⟦[時差|じさ]⟧は[一時間|いちじかん]です。', it: 'Ogni 15 gradi di longitudine la differenza oraria è di un’ora.' }
    ],
    gloss: [
      { w: '緯度', r: 'いど', it: 'latitudine' },
      { w: '経度', r: 'けいど', it: 'longitudine' },
      { w: '赤道', r: 'せきどう', it: 'equatore' },
      { w: '本初子午線', r: 'ほんしょしごせん', it: 'meridiano di Greenwich' },
      { w: '投影法', r: 'とうえいほう', it: 'proiezione cartografica' },
      { w: 'メルカトル図法', r: 'めるかとるずほう', it: 'proiezione di Mercatore' },
      { w: '縮尺', r: 'しゅくしゃく', it: 'scala' },
      { w: '等高線', r: 'とうこうせん', it: 'curve di livello' },
      { w: '時差', r: 'じさ', it: 'differenza oraria' },
      { w: '世界協定時', r: 'せかいきょうていじ', it: 'UTC' }
    ]
  });

  A('cul-orientarsi-e-viaggiare', {
    title: { t: '[道|みち]を[知|し]ることと[旅|たび]の[準備|じゅんび]', it: 'Orientarsi e viaggiare' },
    sum: [
      { t: '⟦[方位|ほうい]⟧は、[北|きた]、[東|ひがし]、[南|みなみ]、[西|にし]の[四|よっ]つです。', it: 'I punti cardinali sono quattro: nord, est, sud, ovest.' },
      { t: '⟦[方位磁針|ほういじしん]⟧の[針|はり]は、⟦[磁北|じほく]⟧を[向|む]きます。', it: 'L’ago della bussola punta verso il nord magnetico.' },
      { t: '⟦[北極星|ほっきょくせい]⟧は、[北|きた]の[方角|ほうがく]を[示|しめ]します。', it: 'La Stella Polare indica la direzione del nord.' },
      { t: '⟦[方位角|ほういかく]⟧は、[北|きた]から[時計回|とけいまわ]りに[測|はか]る[角度|かくど]です。', it: 'L’azimut è l’angolo misurato dal nord in senso orario.' },
      { t: '⟦[磁気偏角|じきへんかく]⟧は、[磁北|じほく]と⟦[真北|まきた]⟧の[差|さ]です。', it: 'La declinazione magnetica è la differenza fra nord magnetico e nord geografico.' },
      { t: '⟦[地形図|ちけいず]⟧と[方位磁針|ほういじしん]で、[現在地|げんざいち]を[確|たし]かめます。', it: 'Con la carta topografica e la bussola si verifica la propria posizione.' },
      { t: '⟦ネイスミスの[法則|ほうそく]⟧は、[歩|ある]く[時間|じかん]の[目安|めやす]です。', it: 'La regola di Naismith è una stima del tempo di cammino.' }
    ],
    gloss: [
      { w: '方位', r: 'ほうい', it: 'punto cardinale' },
      { w: '方位磁針', r: 'ほういじしん', it: 'bussola' },
      { w: '磁北', r: 'じほく', it: 'nord magnetico' },
      { w: '北極星', r: 'ほっきょくせい', it: 'Stella Polare' },
      { w: '方位角', r: 'ほういかく', it: 'azimut' },
      { w: '磁気偏角', r: 'じきへんかく', it: 'declinazione magnetica' },
      { w: '真北', r: 'まきた', it: 'nord geografico' },
      { w: '地形図', r: 'ちけいず', it: 'carta topografica' },
      { w: 'ネイスミスの法則', r: 'ねいすみすのほうそく', it: 'regola di Naismith' },
      { w: '現在地', r: 'げんざいち', it: 'posizione attuale' }
    ]
  });

  A('cul-come-funziona-leconomia', {
    title: { t: '[経済|けいざい]のしくみ', it: 'Come funziona l’economia' },
    sum: [
      { t: '⟦[希少性|きしょうせい]⟧とは、[資源|しげん]が[限|かぎ]られていることです。', it: 'La scarsità è il fatto che le risorse sono limitate.' },
      { t: '⟦[需要|じゅよう]⟧と⟦[供給|きょうきゅう]⟧が[出会|であ]う[場|ば]が、⟦[市場|しじょう]⟧です。', it: 'Il mercato è il luogo in cui si incontrano domanda e offerta.' },
      { t: '⟦[均衡価格|きんこうかかく]⟧は、[需要|じゅよう]と[供給|きょうきゅう]が[等|ひと]しくなる[価格|かかく]です。', it: 'Il prezzo di equilibrio è quello in cui domanda e offerta coincidono.' },
      { t: '⟦インフレ⟧は、[物価|ぶっか]が[全体|ぜんたい]に[上|あ]がり[続|つづ]けることです。', it: 'L’inflazione è l’aumento generale e continuo dei prezzi.' },
      { t: '⟦[国内総生産|こくないそうせいさん]⟧は、[国|くに]が[作|つく]った[財|ざい]とサービスの[価値|かち]です。', it: 'Il PIL è il valore dei beni e dei servizi prodotti da un Paese.' },
      { t: '⟦[失業率|しつぎょうりつ]⟧は、[労働力|ろうどうりょく]のうち[職|しょく]を[探|さが]す[人|ひと]の[割合|わりあい]です。', it: 'Il tasso di disoccupazione è la quota di forza lavoro che cerca un impiego.' },
      { t: '⟦[中央銀行|ちゅうおうぎんこう]⟧は、⟦[政策金利|せいさくきんり]⟧で[物価|ぶっか]の[安定|あんてい]を[目指|めざ]します。', it: 'La banca centrale punta alla stabilità dei prezzi con il tasso di riferimento.' }
    ],
    gloss: [
      { w: '希少性', r: 'きしょうせい', it: 'scarsità' },
      { w: '需要', r: 'じゅよう', it: 'domanda' },
      { w: '供給', r: 'きょうきゅう', it: 'offerta' },
      { w: '市場', r: 'しじょう', it: 'mercato' },
      { w: '均衡価格', r: 'きんこうかかく', it: 'prezzo di equilibrio' },
      { w: 'インフレ', r: 'いんふれ', it: 'inflazione' },
      { w: '国内総生産', r: 'こくないそうせいさん', it: 'PIL' },
      { w: '失業率', r: 'しつぎょうりつ', it: 'tasso di disoccupazione' },
      { w: '中央銀行', r: 'ちゅうおうぎんこう', it: 'banca centrale' },
      { w: '政策金利', r: 'せいさくきんり', it: 'tasso di riferimento' }
    ]
  });

  A('cul-lavoro-busta-paga-e-tasse', {
    title: { t: '[仕事|しごと]と[給与明細|きゅうよめいさい]と[税金|ぜいきん]', it: 'Lavoro, busta paga e tasse' },
    sum: [
      { t: '[契約|けいやく]の⟦[額面|がくめん]⟧と、[口座|こうざ]に[入|はい]る⟦[手取|てど]り⟧は[違|ちが]います。', it: 'La cifra lorda del contratto e quella netta sul conto sono diverse.' },
      { t: '⟦[社会保険料|しゃかいほけんりょう]⟧は、[将来|しょうらい]の[年金|ねんきん]などに[使|つか]われます。', it: 'I contributi servono a finanziare la futura pensione e altre tutele.' },
      { t: '⟦[所得税|しょとくぜい]⟧は⟦[累進課税|るいしんかぜい]⟧で、[所得|しょとく]が[高|たか]いほど[税率|ぜいりつ]が[上|あ]がります。', it: 'L’imposta sul reddito è progressiva: più alto il reddito, più alta l’aliquota.' },
      { t: '⟦[限界税率|げんかいぜいりつ]⟧は[最後|さいご]の[一|いち]ユーロ、⟦[平均税率|へいきんぜいりつ]⟧は[全体|ぜんたい]にかかる[税率|ぜいりつ]です。', it: 'L’aliquota marginale riguarda l’ultimo euro, quella media il totale.' },
      { t: '[基準|きじゅん]を[越|こ]えても、[越|こ]えた[部分|ぶぶん]だけに[高|たか]い[税率|ぜいりつ]がかかります。', it: 'Superata una soglia, l’aliquota più alta si applica solo alla parte eccedente.' },
      { t: '⟦[退職手当|たいしょくてあて]⟧は、[働|はたら]いた[期間|きかん]に[応|おう]じて[積|つ]み[立|た]てられます。', it: 'Il TFR si accumula in base al periodo lavorato.' },
      { t: 'この[課|か]の[数字|すうじ]は[目安|めやす]で、[税務相談|ぜいむそうだん]ではありません。', it: 'I numeri di questa lezione sono indicativi e non sono consulenza fiscale.' }
    ],
    gloss: [
      { w: '額面', r: 'がくめん', it: 'importo lordo' },
      { w: '手取り', r: 'てどり', it: 'importo netto' },
      { w: '給与明細', r: 'きゅうよめいさい', it: 'busta paga' },
      { w: '社会保険料', r: 'しゃかいほけんりょう', it: 'contributi previdenziali' },
      { w: '所得税', r: 'しょとくぜい', it: 'imposta sul reddito' },
      { w: '累進課税', r: 'るいしんかぜい', it: 'tassazione progressiva' },
      { w: '税率', r: 'ぜいりつ', it: 'aliquota' },
      { w: '限界税率', r: 'げんかいぜいりつ', it: 'aliquota marginale' },
      { w: '平均税率', r: 'へいきんぜいりつ', it: 'aliquota media' },
      { w: '退職手当', r: 'たいしょくてあて', it: 'trattamento di fine rapporto' }
    ]
  });

  A('cul-risparmio-e-interesse-composto', {
    title: { t: '[貯蓄|ちょちく]と[複利|ふくり]', it: 'Risparmio e interesse composto' },
    sum: [
      { t: '⟦[貯蓄|ちょちく]⟧は、[収入|しゅうにゅう]の[一部|いちぶ]を[後|あと]のために[取|と]っておくことです。', it: 'Risparmiare significa mettere da parte una quota del reddito per dopo.' },
      { t: '⟦[緊急資金|きんきゅうしきん]⟧は、[生活費|せいかつひ]の[三|さん]から[六|ろっ]か[月|げつ][分|ぶん]が[目安|めやす]です。', it: 'Il fondo d’emergenza vale indicativamente da tre a sei mesi di spese.' },
      { t: '⟦[利息|りそく]⟧は、[お金|かね]を[貸|か]した[人|ひと]への[報酬|ほうしゅう]です。', it: 'L’interesse è il compenso per chi presta denaro.' },
      { t: '⟦[単利|たんり]⟧は、いつも[元本|がんぽん]だけに[利息|りそく]がつきます。', it: 'Con l’interesse semplice gli interessi si calcolano sempre sul solo capitale iniziale.' },
      { t: '⟦[複利|ふくり]⟧は、[利息|りそく]にも[利息|りそく]がつきます。', it: 'Con l’interesse composto anche gli interessi producono interessi.' },
      { t: '⟦[七十二|ななじゅうに]の[法則|ほうそく]⟧は、[元本|がんぽん]が[倍|ばい]になる[年数|ねんすう]の[目安|めやす]です。', it: 'La regola del 72 stima in quanti anni il capitale raddoppia.' },
      { t: '⟦インフレ⟧より[利息|りそく]が[低|ひく]いと、⟦[購買力|こうばいりょく]⟧が[減|へ]ります。', it: 'Se l’interesse è inferiore all’inflazione, il potere d’acquisto diminuisce.' }
    ],
    gloss: [
      { w: '貯蓄', r: 'ちょちく', it: 'risparmio' },
      { w: '緊急資金', r: 'きんきゅうしきん', it: 'fondo d’emergenza' },
      { w: '利息', r: 'りそく', it: 'interesse' },
      { w: '元本', r: 'がんぽん', it: 'capitale iniziale' },
      { w: '単利', r: 'たんり', it: 'interesse semplice' },
      { w: '複利', r: 'ふくり', it: 'interesse composto' },
      { w: '七十二の法則', r: 'ななじゅうにのほうそく', it: 'regola del 72' },
      { w: 'インフレ', r: 'いんふれ', it: 'inflazione' },
      { w: '購買力', r: 'こうばいりょく', it: 'potere d’acquisto' },
      { w: '収入', r: 'しゅうにゅう', it: 'reddito, entrata' }
    ]
  });

  A('cul-investire-senza-illusioni', {
    title: { t: '[夢|ゆめ]を[見|み]ない[投資|とうし]', it: 'Investire senza illusioni' },
    sum: [
      { t: '⟦リスク⟧のない[高|たか]い⟦リターン⟧は、ありません。', it: 'Non esiste un rendimento alto senza rischio.' },
      { t: '⟦[株式|かぶしき]⟧は[会社|かいしゃ]の[持|も]ち[分|ぶん]で、⟦[配当|はいとう]⟧が[出|で]ることもあります。', it: 'Un’azione è una quota di un’impresa e a volte paga dividendi.' },
      { t: '⟦[債券|さいけん]⟧は、[国|くに]や[会社|かいしゃ]に[お金|かね]を[貸|か]すことです。', it: 'Un’obbligazione è un prestito a uno Stato o a un’impresa.' },
      { t: '⟦[投資信託|とうししんたく]⟧は、[多|おお]くの[人|ひと]の[資金|しきん]をまとめて[運用|うんよう]します。', it: 'Un fondo di investimento gestisce insieme il denaro di molte persone.' },
      { t: '⟦[手数料|てすうりょう]⟧は[毎年|まいとし]かかり、[長|なが]い[間|あいだ]に[大|おお]きな[差|さ]になります。', it: 'I costi si pagano ogni anno e nel lungo periodo fanno una grande differenza.' },
      { t: '⟦[分散投資|ぶんさんとうし]⟧は、[一|ひと]つの[会社|かいしゃ]の[危険|きけん]を[減|へ]らします。', it: 'La diversificazione riduce il rischio legato a una singola impresa.' },
      { t: '⟦ポンジスキーム⟧は、[新|あたら]しい[出資者|しゅっししゃ]の[お金|かね]で[払|はら]う[詐欺|さぎ]です。', it: 'Lo schema Ponzi è una truffa che paga con i soldi dei nuovi investitori.' }
    ],
    gloss: [
      { w: 'リスク', r: 'りすく', it: 'rischio' },
      { w: 'リターン', r: 'りたーん', it: 'rendimento' },
      { w: '株式', r: 'かぶしき', it: 'azione' },
      { w: '配当', r: 'はいとう', it: 'dividendo' },
      { w: '債券', r: 'さいけん', it: 'obbligazione' },
      { w: '投資信託', r: 'とうししんたく', it: 'fondo di investimento' },
      { w: 'ETF', r: 'いーてぃーえふ', it: 'ETF, fondo indicizzato quotato' },
      { w: '手数料', r: 'てすうりょう', it: 'commissione, costi' },
      { w: '分散投資', r: 'ぶんさんとうし', it: 'diversificazione' },
      { w: 'ポンジスキーム', r: 'ぽんじすきーむ', it: 'schema Ponzi' }
    ]
  });

  A('cul-debiti-prestiti-e-mutui', {
    title: { t: '[借金|しゃっきん]とローンと[住宅|じゅうたく]ローン', it: 'Debiti, prestiti e mutui' },
    sum: [
      { t: '⟦[借金|しゃっきん]⟧は、お[金|かね]を[先|さき]に[借|か]りて、あとで[利息|りそく]をつけて[返|かえ]すことです。', it: 'Indebitarsi significa avere denaro ora e restituirlo dopo con un interesse.' },
      { t: '[月々|つきづき]の⟦[返済|へんさい]⟧は、[手取|てど]りの[三分|さんぶん]の[一|いち]までが[目安|めやす]です。', it: 'Le rate mensili non dovrebbero superare indicativamente un terzo del netto.' },
      { t: '[借|か]り[入|い]れを[比|くら]べるときは、⟦[実質年率|じっしつねんりつ]⟧を[見|み]ます。', it: 'Per confrontare i finanziamenti si guarda il TAEG.' },
      { t: '⟦[元利均等返済|がんりきんとうへんさい]⟧では、[毎月|まいつき]の[返済額|へんさいがく]が[同|おな]じです。', it: 'Con l’ammortamento a rata costante l’importo mensile è sempre lo stesso.' },
      { t: '⟦[住宅|じゅうたく]ローン⟧は、⟦[抵当権|ていとうけん]⟧のついた[長期|ちょうき]の[借金|しゃっきん]です。', it: 'Il mutuo casa è un debito a lungo termine garantito da ipoteca.' },
      { t: '⟦リボ[払|ばら]い⟧は[金利|きんり]が[高|たか]いので、[注意|ちゅうい]が[必要|ひつよう]です。', it: 'La carta revolving ha tassi alti, perciò serve attenzione.' },
      { t: '⟦[上限金利|じょうげんきんり]⟧を[超|こ]える[貸|か]し[付|つ]けは、[犯罪|はんざい]です。', it: 'I prestiti oltre il tasso soglia sono un reato.' }
    ],
    gloss: [
      { w: '借金', r: 'しゃっきん', it: 'debito' },
      { w: '利息', r: 'りそく', it: 'interesse' },
      { w: '返済', r: 'へんさい', it: 'rimborso, rata' },
      { w: '実質年率', r: 'じっしつねんりつ', it: 'TAEG' },
      { w: '元利均等返済', r: 'がんりきんとうへんさい', it: 'ammortamento a rata costante' },
      { w: '住宅ローン', r: 'じゅうたくろーん', it: 'mutuo casa' },
      { w: '抵当権', r: 'ていとうけん', it: 'ipoteca' },
      { w: 'リボ払い', r: 'りぼばらい', it: 'pagamento revolving' },
      { w: '金利', r: 'きんり', it: 'tasso di interesse' },
      { w: '上限金利', r: 'じょうげんきんり', it: 'tasso soglia (usura)' }
    ]
  });

  A('cul-assicurazioni-previdenza-pensioni', {
    title: { t: '[保険|ほけん]と[年金|ねんきん]', it: 'Assicurazioni, previdenza, pensioni' },
    sum: [
      { t: '⟦[保険|ほけん]⟧は、⟦[保険料|ほけんりょう]⟧を[払|はら]い、[事故|じこ]のときに⟦[保険金|ほけんきん]⟧を[受|う]け[取|と]る[契約|けいやく]です。', it: 'L’assicurazione è un contratto: si paga un premio e in caso di sinistro si riceve un indennizzo.' },
      { t: '[多|おお]くの[人|ひと]が[少|すこ]しずつ[払|はら]い、[被害|ひがい]にあった[人|ひと]を[助|たす]けます。', it: 'Molte persone pagano poco e aiutano chi subisce il danno.' },
      { t: '⟦[免責額|めんせきがく]⟧より[小|ちい]さい[損害|そんがい]は、[支払|しはら]われません。', it: 'I danni inferiori alla franchigia non vengono rimborsati.' },
      { t: 'イタリアでは、[自動車|じどうしゃ]の⟦[賠償責任保険|ばいしょうせきにんほけん]⟧が[義務|ぎむ]です。', it: 'In Italia l’assicurazione di responsabilità civile dell’auto è obbligatoria.' },
      { t: '⟦[公的年金|こうてきねんきん]⟧は⟦[賦課方式|ふかほうしき]⟧で、[今|いま]の[掛金|かけきん]が[今|いま]の[年金|ねんきん]になります。', it: 'La pensione pubblica è a ripartizione: i contributi di oggi finanziano le pensioni di oggi.' },
      { t: '[現在|げんざい]は、[働|はたら]いた[間|あいだ]に[払|はら]った⟦[掛金|かけきん]⟧で[年金|ねんきん]が[決|き]まります。', it: 'Oggi la pensione dipende dai contributi versati durante la vita lavorativa.' },
      { t: '[公的年金|こうてきねんきん]のほかに、⟦[私的年金|してきねんきん]⟧で[備|そな]えることもできます。', it: 'Oltre alla pensione pubblica ci si può preparare con una previdenza complementare.' }
    ],
    gloss: [
      { w: '保険', r: 'ほけん', it: 'assicurazione' },
      { w: '保険料', r: 'ほけんりょう', it: 'premio' },
      { w: '保険金', r: 'ほけんきん', it: 'indennizzo' },
      { w: '免責額', r: 'めんせきがく', it: 'franchigia' },
      { w: '賠償責任保険', r: 'ばいしょうせきにんほけん', it: 'assicurazione di responsabilità civile' },
      { w: '公的年金', r: 'こうてきねんきん', it: 'pensione pubblica' },
      { w: '賦課方式', r: 'ふかほうしき', it: 'sistema a ripartizione' },
      { w: '掛金', r: 'かけきん', it: 'contributi versati' },
      { w: '私的年金', r: 'してきねんきん', it: 'previdenza complementare' },
      { w: '年金', r: 'ねんきん', it: 'pensione' }
    ]
  });

  A('cul-budget-e-consumo-consapevole', {
    title: { t: '[予算|よさん]と[賢|かしこ]い[消費|しょうひ]', it: 'Budget e consumo consapevole' },
    sum: [
      { t: '⟦[予算|よさん]⟧は、[収入|しゅうにゅう]と[支出|ししゅつ]の[計画|けいかく]です。', it: 'Il budget è un piano di entrate e uscite.' },
      { t: '⟦[固定費|こていひ]⟧は[毎月|まいつき]ほぼ[同|おな]じで、⟦[変動費|へんどうひ]⟧は[変|か]わります。', it: 'Le spese fisse sono quasi uguali ogni mese, quelle variabili cambiano.' },
      { t: '⟦[五十三十二十の法則|ごじゅうさんじゅうにじゅうのほうそく]⟧は、[手取|てど]りを[三|みっ]つに[分|わ]けます。', it: 'La regola 50/30/20 divide il netto in tre parti.' },
      { t: '⟦[機会費用|きかいひよう]⟧は、[選|えら]ばなかった[最良|さいりょう]の[選択肢|せんたくし]の[価値|かち]です。', it: 'Il costo opportunità è il valore della migliore alternativa a cui si rinuncia.' },
      { t: '⟦[単価|たんか]⟧で[比|くら]べると、[量|りょう]の[違|ちが]う[商品|しょうひん]も[比較|ひかく]できます。', it: 'Con il prezzo unitario si confrontano anche prodotti di quantità diversa.' },
      { t: '⟦アンカリング⟧は、[高|たか]い[元|もと]の[値段|ねだん]で[安|やす]く[見|み]える[心理|しんり]です。', it: 'L’ancoraggio è l’effetto per cui un prezzo di partenza alto fa sembrare conveniente quello scontato.' },
      { t: '⟦[二十四時間|にじゅうよじかん]ルール⟧は、[予定|よてい]にない[買|か]い[物|もの]の[前|まえ]に[一日|いちにち][待|ま]つことです。', it: 'La regola delle 24 ore consiste nell’aspettare un giorno prima di un acquisto non previsto.' }
    ],
    gloss: [
      { w: '予算', r: 'よさん', it: 'budget' },
      { w: '収入', r: 'しゅうにゅう', it: 'entrate' },
      { w: '支出', r: 'ししゅつ', it: 'uscite' },
      { w: '固定費', r: 'こていひ', it: 'spese fisse' },
      { w: '変動費', r: 'へんどうひ', it: 'spese variabili' },
      { w: '五十三十二十の法則', r: 'ごじゅうさんじゅうにじゅうのほうそく', it: 'regola 50/30/20' },
      { w: '機会費用', r: 'きかいひよう', it: 'costo opportunità' },
      { w: '単価', r: 'たんか', it: 'prezzo unitario' },
      { w: 'アンカリング', r: 'あんかりんぐ', it: 'ancoraggio' },
      { w: '二十四時間ルール', r: 'にじゅうよじかんるーる', it: 'regola delle 24 ore' }
    ]
  });

  A('cul-la-costituzione-italiana', {
    title: { t: 'イタリア[憲法|けんぽう]', it: 'La Costituzione italiana' },
    sum: [
      { t: '⟦[憲法|けんぽう]⟧は、[国|くに]の[基本|きほん]となる[法|ほう]です。', it: 'La Costituzione è la legge fondamentale di uno Stato.' },
      { t: '⟦[硬性憲法|こうせいけんぽう]⟧なので、[改正|かいせい]には[特別|とくべつ]な[手続|てつづ]きが[必要|ひつよう]です。', it: 'Essendo rigida, per modificarla serve una procedura speciale.' },
      { t: '[第一条|だいいちじょう]は、⟦[主権|しゅけん]⟧が[国民|こくみん]にある⟦[民主共和国|みんしゅきょうわこく]⟧と[定|さだ]めます。', it: 'L’art. 1 definisce una repubblica democratica in cui la sovranità appartiene al popolo.' },
      { t: '[第三条|だいさんじょう]は、すべての[市民|しみん]が⟦[法|ほう]の[下|もと]の[平等|びょうどう]⟧を[持|も]つと[定|さだ]めます。', it: 'L’art. 3 stabilisce che tutti i cittadini sono eguali davanti alla legge.' },
      { t: '⟦[実質的平等|じっしつてきびょうどう]⟧は、[現実|げんじつ]の[格差|かくさ]を[減|へ]らす[考|かんが]えです。', it: 'L’uguaglianza sostanziale è l’idea di ridurre le disuguaglianze reali.' },
      { t: '[第十一条|だいじゅういちじょう]で、イタリアは⟦[侵略戦争|しんりゃくせんそう]⟧を[認|みと]めません。', it: 'Con l’art. 11 l’Italia ripudia la guerra di offesa.' },
      { t: '⟦[憲法裁判所|けんぽうさいばんしょ]⟧は、[法律|ほうりつ]が[憲法|けんぽう]に[合|あ]うか[判断|はんだん]します。', it: 'La Corte costituzionale giudica se una legge è conforme alla Costituzione.' }
    ],
    gloss: [
      { w: '憲法', r: 'けんぽう', it: 'Costituzione' },
      { w: '硬性憲法', r: 'こうせいけんぽう', it: 'Costituzione rigida' },
      { w: '主権', r: 'しゅけん', it: 'sovranità' },
      { w: '民主共和国', r: 'みんしゅきょうわこく', it: 'repubblica democratica' },
      { w: '法の下の平等', r: 'ほうのもとのびょうどう', it: 'uguaglianza davanti alla legge' },
      { w: '実質的平等', r: 'じっしつてきびょうどう', it: 'uguaglianza sostanziale' },
      { w: '侵略戦争', r: 'しんりゃくせんそう', it: 'guerra di offesa' },
      { w: '憲法裁判所', r: 'けんぽうさいばんしょ', it: 'Corte costituzionale' },
      { w: '基本的人権', r: 'きほんてきじんけん', it: 'diritti fondamentali' },
      { w: '国民', r: 'こくみん', it: 'popolo, cittadini' }
    ]
  });

  A('cul-istituzioni-italiane-e-europee', {
    title: { t: 'イタリアとヨーロッパの[機関|きかん]', it: 'Istituzioni italiane ed europee' },
    sum: [
      { t: '⟦[三権分立|さんけんぶんりつ]⟧は、[権力|けんりょく]を[立法|りっぽう]、[行政|ぎょうせい]、[司法|しほう]に[分|わ]けます。', it: 'La separazione dei poteri divide il potere in legislativo, esecutivo e giudiziario.' },
      { t: '⟦[議会|ぎかい]⟧は[二|ふた]つの[院|いん]から[成|な]り、[法律|ほうりつ]を[作|つく]ります。', it: 'Il Parlamento è composto da due Camere e fa le leggi.' },
      { t: '⟦[政府|せいふ]⟧は、[議会|ぎかい]の⟦[信任|しんにん]⟧が[必要|ひつよう]です。', it: 'Il Governo ha bisogno della fiducia del Parlamento.' },
      { t: '⟦[共和国大統領|きょうわこくだいとうりょう]⟧は、[首相|しゅしょう]を[任命|にんめい]し、[国|くに]の[統一|とういつ]を[代表|だいひょう]します。', it: 'Il Presidente della Repubblica nomina il capo del governo e rappresenta l’unità nazionale.' },
      { t: '⟦[憲法裁判所|けんぽうさいばんしょ]⟧は、[法律|ほうりつ]が[憲法|けんぽう]に[合|あ]うかを[調|しら]べます。', it: 'La Corte costituzionale verifica se le leggi rispettano la Costituzione.' },
      { t: '⟦[州|しゅう]⟧と⟦[市町村|しちょうそん]⟧が、[身近|みぢか]な[行政|ぎょうせい]を[担|にな]います。', it: 'Regioni e comuni si occupano dell’amministrazione più vicina ai cittadini.' },
      { t: '⟦[欧州連合|おうしゅうれんごう]⟧の⟦[規則|きそく]⟧は、すべての[加盟国|かめいこく]でそのまま[適用|てきよう]されます。', it: 'I regolamenti dell’UE si applicano direttamente in tutti gli Stati membri.' }
    ],
    gloss: [
      { w: '三権分立', r: 'さんけんぶんりつ', it: 'separazione dei poteri' },
      { w: '議会', r: 'ぎかい', it: 'Parlamento' },
      { w: '政府', r: 'せいふ', it: 'Governo' },
      { w: '信任', r: 'しんにん', it: 'fiducia' },
      { w: '共和国大統領', r: 'きょうわこくだいとうりょう', it: 'Presidente della Repubblica' },
      { w: '首相', r: 'しゅしょう', it: 'Presidente del Consiglio' },
      { w: '憲法裁判所', r: 'けんぽうさいばんしょ', it: 'Corte costituzionale' },
      { w: '州', r: 'しゅう', it: 'regione' },
      { w: '市町村', r: 'しちょうそん', it: 'comune' },
      { w: '欧州連合', r: 'おうしゅうれんごう', it: 'Unione europea' },
      { w: '規則', r: 'きそく', it: 'regolamento' }
    ]
  });

  A('cul-diritti-e-vita-quotidiana', {
    title: { t: '[権利|けんり]と[毎日|まいにち]の[暮|く]らし', it: 'Diritti e vita quotidiana' },
    sum: [
      { t: '⟦[契約|けいやく]⟧は[合意|ごうい]でできるので、[署名|しょめい]の[前|まえ]によく[読|よ]みます。', it: 'Il contratto nasce dall’accordo, perciò si legge bene prima di firmare.' },
      { t: '⟦[賃貸契約|ちんたいけいやく]⟧は[登録|とうろく]が[必要|ひつよう]で、⟦[敷金|しききん]⟧にも[上限|じょうげん]があります。', it: 'Il contratto di affitto va registrato e anche il deposito cauzionale ha un limite.' },
      { t: '⟦[労働契約|ろうどうけいやく]⟧の[通常|つうじょう]の[上限|じょうげん]は、[週|しゅう][四十時間|よんじゅうじかん]です。', it: 'Nel contratto di lavoro il limite ordinario è di quaranta ore settimanali.' },
      { t: '⟦[消費者|しょうひしゃ]⟧は、[通信販売|つうしんはんばい]で[十四日|じゅうよっか][以内|いない]なら⟦[撤回権|てっかいけん]⟧を[使|つか]えます。', it: 'Il consumatore può esercitare il diritto di recesso entro quattordici giorni negli acquisti a distanza.' },
      { t: '⟦[一般|いっぱん]データ[保護規則|ほごきそく]⟧は、⟦[個人情報|こじんじょうほう]⟧を[守|まも]ります。', it: 'Il GDPR protegge i dati personali.' },
      { t: '[他人|たにん]に[損害|そんがい]を[与|あた]えると、⟦[損害賠償|そんがいばいしょう]⟧の[責任|せきにん]があります。', it: 'Chi causa un danno ad altri è responsabile del risarcimento.' },
      { t: '⟦[公証人|こうしょうにん]⟧は、[不動産|ふどうさん]の[売買|ばいばい]に[必要|ひつよう]です。', it: 'Il notaio è necessario per la compravendita di un immobile.' }
    ],
    gloss: [
      { w: '契約', r: 'けいやく', it: 'contratto' },
      { w: '賃貸契約', r: 'ちんたいけいやく', it: 'contratto di locazione' },
      { w: '敷金', r: 'しききん', it: 'deposito cauzionale' },
      { w: '労働契約', r: 'ろうどうけいやく', it: 'contratto di lavoro' },
      { w: '消費者', r: 'しょうひしゃ', it: 'consumatore' },
      { w: '撤回権', r: 'てっかいけん', it: 'diritto di recesso' },
      { w: '一般データ保護規則', r: 'いっぱんでーたほごきそく', it: 'GDPR' },
      { w: '個人情報', r: 'こじんじょうほう', it: 'dati personali' },
      { w: '損害賠償', r: 'そんがいばいしょう', it: 'risarcimento del danno' },
      { w: '公証人', r: 'こうしょうにん', it: 'notaio' }
    ]
  });

  A('cul-psicologia-scienza', {
    title: { t: '[科学|かがく]としての[心理学|しんりがく]', it: 'La psicologia come scienza' },
    sum: [
      { t: '⟦[心理学|しんりがく]⟧は、⟦[行動|こうどう]⟧と[心|こころ]の[働|はたら]きを[研究|けんきゅう]します。', it: 'La psicologia studia il comportamento e i processi mentali.' },
      { t: '[科学的|かがくてき]な[心理学|しんりがく]は、[確|たし]かめられる⟦[仮説|かせつ]⟧を[立|た]てます。', it: 'La psicologia scientifica formula ipotesi controllabili.' },
      { t: '⟦[相関|そうかん]⟧があっても、[原因|げんいん]とは[限|かぎ]りません。', it: 'Una correlazione non prova necessariamente una causa.' },
      { t: '⟦[実験|じっけん]⟧では、[参加者|さんかしゃ]を[無作為|むさくい]に[分|わ]けます。', it: 'Nell’esperimento i partecipanti sono assegnati ai gruppi a caso.' },
      { t: '⟦[精神分析|せいしんぶんせき]⟧や⟦[行動主義|こうどうしゅぎ]⟧のあと、⟦[認知心理学|にんちしんりがく]⟧が[生|う]まれました。', it: 'Dopo la psicoanalisi e il comportamentismo nacque la psicologia cognitiva.' },
      { t: '[再現|さいげん]できない[研究|けんきゅう]が[多|おお]く、⟦[再現性|さいげんせい]⟧が[問題|もんだい]になりました。', it: 'Molti studi non si replicavano e la replicabilità è diventata un problema.' },
      { t: 'ひとつの[研究|けんきゅう]だけを[信|しん]じず、[複数|ふくすう]の[結果|けっか]を[確|たし]かめます。', it: 'Non ci si fida di un solo studio: si confrontano più risultati.' }
    ],
    gloss: [
      { w: '心理学', r: 'しんりがく', it: 'psicologia' },
      { w: '行動', r: 'こうどう', it: 'comportamento' },
      { w: '仮説', r: 'かせつ', it: 'ipotesi' },
      { w: '相関', r: 'そうかん', it: 'correlazione' },
      { w: '実験', r: 'じっけん', it: 'esperimento' },
      { w: '無作為化', r: 'むさくいか', it: 'randomizzazione' },
      { w: '精神分析', r: 'せいしんぶんせき', it: 'psicoanalisi' },
      { w: '行動主義', r: 'こうどうしゅぎ', it: 'comportamentismo' },
      { w: '認知心理学', r: 'にんちしんりがく', it: 'psicologia cognitiva' },
      { w: '再現性', r: 'さいげんせい', it: 'replicabilità' }
    ]
  });

  A('cul-memoria-apprendimento', {
    title: { t: '[記憶|きおく]と[学習|がくしゅう]', it: 'Memoria e apprendimento' },
    sum: [
      { t: '⟦ワーキングメモリ⟧は、[容量|ようりょう]が[小|ちい]さい[短期|たんき]の[記憶|きおく]です。', it: 'La memoria di lavoro è una memoria a breve termine di capacità ridotta.' },
      { t: '⟦[長期記憶|ちょうききおく]⟧の[容量|ようりょう]は、ほぼ[無限|むげん]です。', it: 'La capacità della memoria a lungo termine è quasi illimitata.' },
      { t: '⟦エピソード[記憶|きおく]⟧は[出来事|できごと]、⟦[意味記憶|いみきおく]⟧は[知識|ちしき]の[記憶|きおく]です。', it: 'La memoria episodica riguarda gli eventi, quella semantica le conoscenze.' },
      { t: '⟦[忘却曲線|ぼうきゃくきょくせん]⟧では、[最初|さいしょ]に[多|おお]く[忘|わす]れ、あとはゆっくり[忘|わす]れます。', it: 'Nella curva dell’oblio si dimentica molto all’inizio e poi sempre più lentamente.' },
      { t: '⟦[分散学習|ぶんさんがくしゅう]⟧は、[間隔|かんかく]をあけて[復習|ふくしゅう]する[方法|ほうほう]です。', it: 'L’apprendimento distribuito consiste nel ripassare a intervalli.' },
      { t: '⟦[想起練習|そうきれんしゅう]⟧は、[読|よ]み[返|かえ]すより[思|おも]い[出|だ]す[練習|れんしゅう]のほうが[効果的|こうかてき]です。', it: 'Il richiamo attivo, cioè provare a ricordare, è più efficace della rilettura.' },
      { t: '⟦[記憶|きおく]⟧は[録画|ろくが]ではなく、[思|おも]い[出|だ]すたびに[作|つく]り[直|なお]されます。', it: 'La memoria non è una registrazione: viene ricostruita ogni volta che si ricorda.' }
    ],
    gloss: [
      { w: 'ワーキングメモリ', r: 'わーきんぐめもり', it: 'memoria di lavoro' },
      { w: '長期記憶', r: 'ちょうききおく', it: 'memoria a lungo termine' },
      { w: 'エピソード記憶', r: 'えぴそーどきおく', it: 'memoria episodica' },
      { w: '意味記憶', r: 'いみきおく', it: 'memoria semantica' },
      { w: '手続き記憶', r: 'てつづききおく', it: 'memoria procedurale' },
      { w: '忘却曲線', r: 'ぼうきゃくきょくせん', it: 'curva dell’oblio' },
      { w: '分散学習', r: 'ぶんさんがくしゅう', it: 'ripetizione distribuita' },
      { w: '想起練習', r: 'そうきれんしゅう', it: 'richiamo attivo' },
      { w: '記憶', r: 'きおく', it: 'memoria, ricordo' },
      { w: 'エビングハウス', r: 'えびんぐはうす', it: 'Ebbinghaus' }
    ]
  });

  A('cul-emozioni-motivazione', {
    title: { t: '[感情|かんじょう]と[動機|どうき]づけ', it: 'Emozioni e motivazione' },
    sum: [
      { t: '⟦[感情|かんじょう]⟧は、[体|からだ]や[行動|こうどう]や[評価|ひょうか]をともなう[短|みじか]い[反応|はんのう]です。', it: 'L’emozione è una risposta breve che coinvolge corpo, comportamento e valutazione.' },
      { t: '⟦[認知的評価理論|にんちてきひょうかりろん]⟧は、[状況|じょうきょう]の[解釈|かいしゃく]で[感情|かんじょう]が[変|か]わると[考|かんが]えます。', it: 'La teoria della valutazione cognitiva sostiene che l’emozione cambia con l’interpretazione della situazione.' },
      { t: '⟦[基本感情|きほんかんじょう]⟧の[普遍性|ふへんせい]は、[今|いま]も[議論|ぎろん]されています。', it: 'L’universalità delle emozioni di base è ancora oggi discussa.' },
      { t: '⟦[自己決定理論|じこけっていりろん]⟧は、[自律性|じりつせい]、[有能感|ゆうのうかん]、[関係性|かんけいせい]を[重|おも]んじます。', it: 'La teoria dell’autodeterminazione dà peso ad autonomia, competenza e relazione.' },
      { t: '⟦[内発的|ないはつてき][動機|どうき]づけ⟧は、[活動|かつどう]そのものが[楽|たの]しいから[続|つづ]ける[気持|きも]ちです。', it: 'La motivazione intrinseca è la spinta a continuare perché l’attività in sé è piacevole.' },
      { t: '⟦[過正当化効果|かせいとうかこうか]⟧では、[報酬|ほうしゅう]が[興味|きょうみ]を[弱|よわ]めることがあります。', it: 'Con l’effetto di sovragiustificazione il premio può indebolire l’interesse.' },
      { t: '⟦[習慣|しゅうかん]⟧は、[合図|あいず]、[行動|こうどう]、[報酬|ほうしゅう]の[流|なが]れでできます。', it: 'L’abitudine si forma con il ciclo segnale, routine, ricompensa.' }
    ],
    gloss: [
      { w: '感情', r: 'かんじょう', it: 'emozione' },
      { w: '認知的評価理論', r: 'にんちてきひょうかりろん', it: 'teoria della valutazione cognitiva' },
      { w: '基本感情', r: 'きほんかんじょう', it: 'emozioni di base' },
      { w: 'エクマン', r: 'えくまん', it: 'Ekman' },
      { w: '自己決定理論', r: 'じこけっていりろん', it: 'teoria dell’autodeterminazione' },
      { w: '内発的動機づけ', r: 'ないはつてきどうきづけ', it: 'motivazione intrinseca' },
      { w: '外発的動機づけ', r: 'がいはつてきどうきづけ', it: 'motivazione estrinseca' },
      { w: '過正当化効果', r: 'かせいとうかこうか', it: 'effetto di sovragiustificazione' },
      { w: '習慣', r: 'しゅうかん', it: 'abitudine' },
      { w: '動機づけ', r: 'どうきづけ', it: 'motivazione' }
    ]
  });

  A('cul-bias-decisioni', {
    title: { t: '[判断|はんだん]の[落|お]とし[穴|あな]', it: 'Bias e decisioni' },
    sum: [
      { t: '⟦ヒューリスティック⟧は[素早|すばや]い[経験則|けいけんそく]で、⟦[認知|にんち]バイアス⟧を[生|う]むことがあります。', it: 'Le euristiche sono regole rapide e a volte producono bias cognitivi.' },
      { t: '⟦アンカリング⟧では、[最初|さいしょ]に[見|み]た[数字|すうじ]が[見積|みつ]もりに[影響|えいきょう]します。', it: 'Nell’ancoraggio il primo numero visto influenza la stima.' },
      { t: '⟦[利用可能性|りようかのうせい]ヒューリスティック⟧では、[思|おも]い[出|だ]しやすい[出来事|できごと]を[多|おお]いと[感|かん]じます。', it: 'Con l’euristica della disponibilità si giudica frequente ciò che viene in mente facilmente.' },
      { t: '⟦[確証|かくしょう]バイアス⟧は、[自分|じぶん]の[考|かんが]えに[合|あ]う[情報|じょうほう]ばかり[集|あつ]める[傾向|けいこう]です。', it: 'Il bias di conferma è la tendenza a cercare solo le informazioni che confermano le proprie idee.' },
      { t: '⟦フレーミング[効果|こうか]⟧では、[同|おな]じ[情報|じょうほう]でも[示|しめ]し[方|かた]で[選択|せんたく]が[変|か]わります。', it: 'Con il framing la scelta cambia in base a come si presenta la stessa informazione.' },
      { t: '⟦[損失回避|そんしつかいひ]⟧は、[損|そん]を[得|とく]より[大|おお]きく[感|かん]じる[傾向|けいこう]です。', it: 'L’avversione alle perdite è la tendenza a sentire una perdita più di un guadagno.' },
      { t: '⟦サンクコスト⟧に[引|ひ]かれず、[今後|こんご]だけを[比|くら]べて[決|き]めます。', it: 'Senza farsi tirare dal costo irrecuperabile, si decide confrontando solo ciò che verrà.' }
    ],
    gloss: [
      { w: 'ヒューリスティック', r: 'ひゅーりすてぃっく', it: 'euristica' },
      { w: '認知バイアス', r: 'にんちばいあす', it: 'bias cognitivo' },
      { w: 'アンカリング', r: 'あんかりんぐ', it: 'ancoraggio' },
      { w: '利用可能性ヒューリスティック', r: 'りようかのうせいひゅーりすてぃっく', it: 'euristica della disponibilità' },
      { w: '確証バイアス', r: 'かくしょうばいあす', it: 'bias di conferma' },
      { w: 'フレーミング効果', r: 'ふれーみんぐこうか', it: 'effetto framing' },
      { w: '損失回避', r: 'そんしつかいひ', it: 'avversione alle perdite' },
      { w: 'サンクコスト', r: 'さんくこすと', it: 'costo irrecuperabile' },
      { w: '傾向', r: 'けいこう', it: 'tendenza' },
      { w: 'カーネマン', r: 'かーねまん', it: 'Kahneman' }
    ]
  });

  A('cul-psicologia-sociale', {
    title: { t: '[社会心理学|しゃかいしんりがく]', it: 'Psicologia sociale' },
    sum: [
      { t: '⟦[社会心理学|しゃかいしんりがく]⟧は、[他人|たにん]の[影響|えいきょう]を[研究|けんきゅう]します。', it: 'La psicologia sociale studia l’influenza degli altri.' },
      { t: '⟦アッシュ⟧の[実験|じっけん]では、[多数派|たすうは]に⟦[同調|どうちょう]⟧する[人|ひと]がいました。', it: 'Nell’esperimento di Asch alcuni si conformavano alla maggioranza.' },
      { t: '⟦ミルグラム⟧の[実験|じっけん]は、⟦[服従|ふくじゅう]⟧を[調|しら]べました。', it: 'L’esperimento di Milgram indagava l’obbedienza.' },
      { t: '⟦[倫理|りんり]⟧の[面|めん]から、[今|いま]は[同|おな]じ[実験|じっけん]はできません。', it: 'Per ragioni etiche oggi lo stesso esperimento non si può fare.' },
      { t: '⟦[傍観者効果|ぼうかんしゃこうか]⟧では、[人|ひと]が[多|おお]いと[責任|せきにん]が[分散|ぶんさん]します。', it: 'Nell’effetto spettatore, con molte persone la responsabilità si diffonde.' },
      { t: '⟦ステレオタイプ⟧と⟦[偏見|へんけん]⟧と⟦[差別|さべつ]⟧は、[別|べつ]のものです。', it: 'Stereotipo, pregiudizio e discriminazione sono cose diverse.' },
      { t: '⟦[接触仮説|せっしょくかせつ]⟧は、[条件|じょうけん]がよければ[交流|こうりゅう]が[偏見|へんけん]を[減|へ]らすと[考|かんが]えます。', it: 'L’ipotesi del contatto sostiene che, a buone condizioni, il contatto riduce il pregiudizio.' }
    ],
    gloss: [
      { w: '社会心理学', r: 'しゃかいしんりがく', it: 'psicologia sociale' },
      { w: 'アッシュ', r: 'あっしゅ', it: 'Asch' },
      { w: '同調', r: 'どうちょう', it: 'conformismo' },
      { w: 'ミルグラム', r: 'みるぐらむ', it: 'Milgram' },
      { w: '服従', r: 'ふくじゅう', it: 'obbedienza' },
      { w: '倫理', r: 'りんり', it: 'etica' },
      { w: '傍観者効果', r: 'ぼうかんしゃこうか', it: 'effetto spettatore' },
      { w: 'ステレオタイプ', r: 'すてれおたいぷ', it: 'stereotipo' },
      { w: '偏見', r: 'へんけん', it: 'pregiudizio' },
      { w: '差別', r: 'さべつ', it: 'discriminazione' },
      { w: '接触仮説', r: 'せっしょくかせつ', it: 'ipotesi del contatto' }
    ]
  });

  A('cul-sviluppo-personalita', {
    title: { t: '[発達|はったつ]と[性格|せいかく]', it: 'Sviluppo e personalità' },
    sum: [
      { t: '⟦[発達心理学|はったつしんりがく]⟧は、[誕生|たんじょう]から[老年|ろうねん]までの[変化|へんか]を[研究|けんきゅう]します。', it: 'La psicologia dello sviluppo studia i cambiamenti dalla nascita alla vecchiaia.' },
      { t: '⟦ピアジェ⟧は、[思考|しこう]の⟦[発達段階|はったつだんかい]⟧を[四|よっ]つに[分|わ]けました。', it: 'Piaget distinse quattro stadi dello sviluppo del pensiero.' },
      { t: '⟦[愛着|あいちゃく]⟧を[持|も]つ[養育者|よういくしゃ]は、[子|こ]どもの⟦[安全基地|あんぜんきち]⟧になります。', it: 'La figura di attaccamento diventa per il bambino una base sicura.' },
      { t: '⟦エリクソン⟧は、[青年期|せいねんき]の[課題|かだい]を⟦アイデンティティ⟧の[確立|かくりつ]と[考|かんが]えました。', it: 'Erikson vide nel compito dell’adolescenza la costruzione dell’identità.' },
      { t: '⟦ビッグファイブ⟧は、[性格|せいかく]を[五|いつ]つの[次元|じげん]で[表|あらわ]します。', it: 'I Big Five descrivono la personalità in cinque dimensioni.' },
      { t: '⟦バーナム[効果|こうか]⟧は、[誰|だれ]にでも[当|あ]てはまる[説明|せつめい]を[自分|じぶん]だけのものと[感|かん]じる[現象|げんしょう]です。', it: 'L’effetto Barnum è sentire come personale una descrizione valida per chiunque.' },
      { t: 'この[課|か]を[読|よ]んで、[自分|じぶん]や[他人|たにん]を⟦[診断|しんだん]⟧してはいけません。', it: 'Leggendo questa lezione non si deve diagnosticare né sé stessi né gli altri.' }
    ],
    gloss: [
      { w: '発達心理学', r: 'はったつしんりがく', it: 'psicologia dello sviluppo' },
      { w: 'ピアジェ', r: 'ぴあじぇ', it: 'Piaget' },
      { w: '発達段階', r: 'はったつだんかい', it: 'stadio dello sviluppo' },
      { w: '愛着', r: 'あいちゃく', it: 'attaccamento' },
      { w: '安全基地', r: 'あんぜんきち', it: 'base sicura' },
      { w: 'エリクソン', r: 'えりくそん', it: 'Erikson' },
      { w: 'アイデンティティ', r: 'あいでんてぃてぃ', it: 'identità' },
      { w: 'ビッグファイブ', r: 'びっぐふぁいぶ', it: 'Big Five' },
      { w: 'バーナム効果', r: 'ばーなむこうか', it: 'effetto Barnum' },
      { w: '診断', r: 'しんだん', it: 'diagnosi' }
    ]
  });

  A('cul-stress-sonno-benessere', {
    title: { t: 'ストレスと[睡眠|すいみん]', it: 'Stress, sonno, benessere' },
    sum: [
      { t: '⟦ストレス⟧は、[負担|ふたん]に[対|たい]する[体|からだ]と[心|こころ]の[反応|はんのう]です。', it: 'Lo stress è la risposta del corpo e della mente a una richiesta gravosa.' },
      { t: '[同|おな]じ[出来事|できごと]でも、⟦[評価|ひょうか]⟧によってストレスは[変|か]わります。', it: 'Anche per lo stesso evento, lo stress cambia in base alla valutazione.' },
      { t: '⟦[闘争逃走反応|とうそうとうそうはんのう]⟧は、[急|きゅう]な[危険|きけん]に[備|そな]える[体|からだ]の[反応|はんのう]です。', it: 'La risposta lotta o fuga prepara il corpo a un pericolo improvviso.' },
      { t: '⟦[慢性|まんせい]ストレス⟧は、[休|やす]めないまま[長|なが]く[続|つづ]く[負担|ふたん]です。', it: 'Lo stress cronico è un carico che dura a lungo senza recupero.' },
      { t: '⟦レム[睡眠|すいみん]⟧と⟦ノンレム[睡眠|すいみん]⟧は、[約|やく][九十分|きゅうじゅっぷん]の[周期|しゅうき]で[交代|こうたい]します。', it: 'Il sonno REM e il NREM si alternano in cicli di circa 90 minuti.' },
      { t: '⟦[睡眠不足|すいみんぶそく]⟧は、[注意|ちゅうい]や[記憶|きおく]を[悪|わる]くします。', it: 'La privazione di sonno peggiora attenzione e memoria.' },
      { t: '[苦|くる]しさが[二週間|にしゅうかん]ほど[続|つづ]くときは、⟦[専門家|せんもんか]⟧に[相談|そうだん]します。', it: 'Se il malessere dura circa due settimane, ci si rivolge a un professionista.' }
    ],
    gloss: [
      { w: 'ストレス', r: 'すとれす', it: 'stress' },
      { w: '評価', r: 'ひょうか', it: 'valutazione' },
      { w: '闘争逃走反応', r: 'とうそうとうそうはんのう', it: 'risposta lotta o fuga' },
      { w: '慢性ストレス', r: 'まんせいすとれす', it: 'stress cronico' },
      { w: 'レム睡眠', r: 'れむすいみん', it: 'sonno REM' },
      { w: 'ノンレム睡眠', r: 'のんれむすいみん', it: 'sonno NREM' },
      { w: '睡眠不足', r: 'すいみんぶそく', it: 'privazione di sonno' },
      { w: '専門家', r: 'せんもんか', it: 'professionista' },
      { w: 'カフェイン', r: 'かふぇいん', it: 'caffeina' },
      { w: '周期', r: 'しゅうき', it: 'ciclo' }
    ]
  });

  A('cul-comunicazione-scrittura', {
    title: { t: '[伝|つた]える[力|ちから]と[書|か]く[力|ちから]', it: 'Comunicazione e scrittura' },
    sum: [
      { t: '⟦コミュニケーション⟧は、[伝|つた]えるだけではありません。', it: 'Comunicare non è solo trasmettere.' },
      { t: '⟦ロジャーズ⟧が[広|ひろ]めた⟦[傾聴|けいちょう]⟧は、[理解|りかい]するために[聞|き]く[姿勢|しせい]です。', it: 'L’ascolto attivo, reso noto da Rogers, è ascoltare per capire.' },
      { t: '⟦フィードバック⟧は、[人|ひと]ではなく[行動|こうどう]について[具体的|ぐたいてき]に[伝|つた]えます。', it: 'Il feedback riguarda il comportamento, non la persona, ed è specifico.' },
      { t: '⟦[非暴力|ひぼうりょく]コミュニケーション⟧は、[観察|かんさつ]、[感情|かんじょう]、ニーズ、[依頼|いらい]の[順|じゅん]に[話|はな]します。', it: 'La comunicazione non violenta procede da osservazione, sentimento, bisogno, richiesta.' },
      { t: '⟦[逆三角形|ぎゃくさんかっけい]⟧の[構成|こうせい]では、[大切|たいせつ]な[情報|じょうほう]を[先|さき]に[書|か]きます。', it: 'Nella piramide rovesciata le informazioni importanti vengono per prime.' },
      { t: 'メールの⟦[件名|けんめい]⟧は[具体的|ぐたいてき]にし、[依頼|いらい]は[最初|さいしょ]に[書|か]きます。', it: 'L’oggetto dell’email è specifico e la richiesta si scrive all’inizio.' },
      { t: '⟦[推敲|すいこう]⟧では、[削|けず]って[簡単|かんたん]にして、[声|こえ]に[出|だ]して[読|よ]みます。', it: 'Nella revisione si taglia, si semplifica e si rilegge ad alta voce.' }
    ],
    gloss: [
      { w: 'コミュニケーション', r: 'こみゅにけーしょん', it: 'comunicazione' },
      { w: 'ロジャーズ', r: 'ろじゃーず', it: 'Rogers' },
      { w: '傾聴', r: 'けいちょう', it: 'ascolto attivo' },
      { w: 'フィードバック', r: 'ふぃーどばっく', it: 'feedback' },
      { w: '非暴力コミュニケーション', r: 'ひぼうりょくこみゅにけーしょん', it: 'comunicazione non violenta' },
      { w: '観察', r: 'かんさつ', it: 'osservazione' },
      { w: '依頼', r: 'いらい', it: 'richiesta' },
      { w: '逆三角形', r: 'ぎゃくさんかっけい', it: 'piramide rovesciata' },
      { w: '件名', r: 'けんめい', it: 'oggetto (email)' },
      { w: '推敲', r: 'すいこう', it: 'revisione' }
    ]
  });

  A('cul-argomentare-parlare', {
    title: { t: '[論理|ろんり]と[話|はな]し[方|かた]', it: 'Argomentare e parlare' },
    sum: [
      { t: '⟦[論証|ろんしょう]⟧は、⟦[前提|ぜんてい]⟧から⟦[結論|けつろん]⟧を[導|みちび]く[理由|りゆう]の[組|く]み[合|あ]わせです。', it: 'Un argomento è un insieme di ragioni che portano da premesse a una conclusione.' },
      { t: '⟦[妥当|だとう]⟧な[論証|ろんしょう]でも、[前提|ぜんてい]が[偽|にせ]なら⟦[健全|けんぜん]⟧ではありません。', it: 'Un argomento valido non è solido se le premesse sono false.' },
      { t: '⟦[証拠|しょうこ]⟧は、[関連|かんれん]があるか、[十分|じゅうぶん]か、[信頼|しんらい]できるかを[見|み]ます。', it: 'Delle prove si guarda se sono pertinenti, sufficienti e affidabili.' },
      { t: '⟦[反論|はんろん]⟧を[予想|よそう]し、[相手|あいて]の[最良|さいりょう]の[形|かたち]に[答|こた]えます。', it: 'Si prevedono le obiezioni e si risponde alla loro versione migliore.' },
      { t: '⟦[人身攻撃|じんしんこうげき]⟧は、[人|ひと]を[攻撃|こうげき]して[主張|しゅちょう]を[避|さ]ける⟦[誤謬|ごびゅう]⟧です。', it: 'L’ad hominem è una fallacia che attacca la persona evitando l’argomento.' },
      { t: '[導入|どうにゅう]、⟦[本論|ほんろん]⟧、[結論|けつろん]の[順|じゅん]に[話|はな]すと、[聞|き]き[手|て]が[追|お]いやすいです。', it: 'Parlando in ordine di apertura, corpo e chiusura, il pubblico segue più facilmente.' },
      { t: '[話|はな]す[前|まえ]の[緊張|きんちょう]は[自然|しぜん]な[反応|はんのう]で、[練習|れんしゅう]が[助|たす]けになります。', it: 'L’ansia prima di parlare è una reazione naturale e la pratica aiuta.' }
    ],
    gloss: [
      { w: '論証', r: 'ろんしょう', it: 'argomento, argomentazione' },
      { w: '前提', r: 'ぜんてい', it: 'premessa' },
      { w: '結論', r: 'けつろん', it: 'conclusione' },
      { w: '妥当', r: 'だとう', it: 'valido' },
      { w: '健全', r: 'けんぜん', it: 'solido (sound)' },
      { w: '証拠', r: 'しょうこ', it: 'prova' },
      { w: '反論', r: 'はんろん', it: 'obiezione, confutazione' },
      { w: '人身攻撃', r: 'じんしんこうげき', it: 'argomento ad hominem' },
      { w: '誤謬', r: 'ごびゅう', it: 'fallacia' },
      { w: '本論', r: 'ほんろん', it: 'corpo del discorso' }
    ]
  });

  A('cul-numeri-percentuali-proporzioni', {
    title: { t: '[数|かず]と[割合|わりあい]と[比|ひ]', it: 'Numeri, percentuali, proporzioni' },
    sum: [
      { t: '⟦[分数|ぶんすう]⟧、⟦[小数|しょうすう]⟧、⟦パーセント⟧は、[同|おな]じ[数|かず]の[書|か]き[方|かた]です。', it: 'Frazione, decimale e percentuale sono modi di scrivere lo stesso numero.' },
      { t: '[二十五|にじゅうご]パーセントの⟦[割引|わりびき]⟧は、[七十五|ななじゅうご]パーセントを[払|はら]うことです。', it: 'Uno sconto del 25% significa pagare il 75%.' },
      { t: '⟦[変化率|へんかりつ]⟧は、いつも[元|もと]の[値|あたい]を[基準|きじゅん]に[計算|けいさん]します。', it: 'La variazione percentuale si calcola sempre rispetto al valore di partenza.' },
      { t: '[同|おな]じ[割合|わりあい]の[増加|ぞうか]と[減少|げんしょう]は、[打|う]ち[消|け]し[合|あ]いません。', it: 'Un aumento e una diminuzione della stessa percentuale non si annullano.' },
      { t: '⟦[付加価値税|ふかかちぜい]⟧を[除|のぞ]くには、[引|ひ]くのではなく[割|わ]ります。', it: 'Per togliere l’IVA si divide, non si sottrae.' },
      { t: '⟦[比例|ひれい]⟧は[一方|いっぽう]が[二倍|にばい]なら[他方|たほう]も[二倍|にばい]、⟦[反比例|はんぴれい]⟧は[半分|はんぶん]になります。', it: 'Nella proporzionalità diretta se una grandezza raddoppia raddoppia anche l’altra, in quella inversa si dimezza.' },
      { t: '⟦[科学的記数法|かがくてききすうほう]⟧は、とても[大|おお]きな[数|かず]や[小|ちい]さな[数|かず]を[十|じゅう]の[累乗|るいじょう]で[書|か]きます。', it: 'La notazione scientifica scrive numeri molto grandi o piccoli con potenze di dieci.' }
    ],
    gloss: [
      { w: '分数', r: 'ぶんすう', it: 'frazione' },
      { w: '小数', r: 'しょうすう', it: 'numero decimale' },
      { w: 'パーセント', r: 'ぱーせんと', it: 'percentuale' },
      { w: '割引', r: 'わりびき', it: 'sconto' },
      { w: '変化率', r: 'へんかりつ', it: 'variazione percentuale' },
      { w: '付加価値税', r: 'ふかかちぜい', it: 'IVA' },
      { w: '比例', r: 'ひれい', it: 'proporzionalità diretta' },
      { w: '反比例', r: 'はんぴれい', it: 'proporzionalità inversa' },
      { w: '科学的記数法', r: 'かがくてききすうほう', it: 'notazione scientifica' },
      { w: '累乗', r: 'るいじょう', it: 'potenza' }
    ]
  });

  A('cul-algebra-e-funzioni', {
    title: { t: '[代数|だいすう]と[関数|かんすう]', it: 'Algebra e funzioni' },
    sum: [
      { t: '⟦[方程式|ほうていしき]⟧は、⟦[未知数|みちすう]⟧を[含|ふく]む[等式|とうしき]です。', it: 'Un’equazione è un’uguaglianza che contiene un’incognita.' },
      { t: '⟦[両辺|りょうへん]⟧に[同|おな]じ[計算|けいさん]をして、[解|と]きます。', it: 'Si risolve facendo la stessa operazione su entrambi i membri.' },
      { t: '⟦[連立方程式|れんりつほうていしき]⟧は、[二|ふた]つの[式|しき]を[同時|どうじ]に[満|み]たす[値|あたい]を[探|さが]します。', it: 'Un sistema cerca i valori che soddisfano due equazioni insieme.' },
      { t: '⟦[一次関数|いちじかんすう]⟧のグラフは[直線|ちょくせん]で、⟦[傾|かたむ]き⟧と⟦[切片|せっぺん]⟧で[決|き]まります。', it: 'Il grafico di una funzione lineare è una retta, determinata da pendenza e intercetta.' },
      { t: '[二次関数|にじかんすう]のグラフは、⟦[放物線|ほうぶつせん]⟧です。', it: 'Il grafico di una funzione quadratica è una parabola.' },
      { t: '⟦[判別式|はんべつしき]⟧で、[二次方程式|にじほうていしき]の[解|かい]の[数|かず]が[分|わ]かります。', it: 'Il discriminante indica quante soluzioni ha un’equazione di secondo grado.' },
      { t: '⟦[指数関数|しすうかんすう]⟧の[増加|ぞうか]は、はじめゆっくりで[後|あと]から[急|きゅう]になります。', it: 'La crescita esponenziale parte lenta e poi accelera.' }
    ],
    gloss: [
      { w: '方程式', r: 'ほうていしき', it: 'equazione' },
      { w: '未知数', r: 'みちすう', it: 'incognita' },
      { w: '両辺', r: 'りょうへん', it: 'entrambi i membri' },
      { w: '連立方程式', r: 'れんりつほうていしき', it: 'sistema di equazioni' },
      { w: '一次関数', r: 'いちじかんすう', it: 'funzione lineare' },
      { w: '傾き', r: 'かたむき', it: 'pendenza' },
      { w: '切片', r: 'せっぺん', it: 'intercetta' },
      { w: '放物線', r: 'ほうぶつせん', it: 'parabola' },
      { w: '判別式', r: 'はんべつしき', it: 'discriminante' },
      { w: '指数関数', r: 'しすうかんすう', it: 'funzione esponenziale' }
    ]
  });

  A('cul-geometria-e-trigonometria', {
    title: { t: '[図形|ずけい]と[三角比|さんかくひ]', it: 'Geometria e trigonometria' },
    sum: [
      { t: '⟦[周囲|しゅうい]⟧は[外側|そとがわ]の[長|なが]さ、⟦[面積|めんせき]⟧は[広|ひろ]さです。', it: 'Il perimetro è la lunghezza del contorno, l’area è l’estensione della superficie.' },
      { t: '⟦[体積|たいせき]⟧は、[占|し]める[空間|くうかん]の[大|おお]きさです。', it: 'Il volume è la dimensione dello spazio occupato.' },
      { t: '⟦ピタゴラスの[定理|ていり]⟧は、[直角三角形|ちょっかくさんかくけい]の[辺|へん]の[関係|かんけい]を[表|あらわ]します。', it: 'Il teorema di Pitagora descrive la relazione fra i lati di un triangolo rettangolo.' },
      { t: '⟦[相似|そうじ]⟧な[図形|ずけい]で[長|なが]さが[二倍|にばい]なら、[面積|めんせき]は[四倍|よんばい]です。', it: 'In figure simili, se le lunghezze raddoppiano l’area diventa quattro volte più grande.' },
      { t: '[三角形|さんかくけい]の⟦[内角|ないかく]⟧の[和|わ]は、いつも[百八十度|ひゃくはちじゅうど]です。', it: 'La somma degli angoli interni di un triangolo è sempre 180 gradi.' },
      { t: '⟦サイン⟧、⟦コサイン⟧、⟦タンジェント⟧は、[直角三角形|ちょっかくさんかくけい]の[辺|へん]の[比|ひ]です。', it: 'Seno, coseno e tangente sono rapporti tra i lati di un triangolo rettangolo.' },
      { t: '⟦[概算|がいさん]⟧と⟦[単位|たんい]⟧の[確認|かくにん]で、[間違|まちが]いを[防|ふせ]ぎます。', it: 'Con una stima approssimata e il controllo delle unità si evitano errori.' }
    ],
    gloss: [
      { w: '周囲', r: 'しゅうい', it: 'perimetro' },
      { w: '面積', r: 'めんせき', it: 'area' },
      { w: '体積', r: 'たいせき', it: 'volume' },
      { w: 'ピタゴラスの定理', r: 'ぴたごらすのていり', it: 'teorema di Pitagora' },
      { w: '相似', r: 'そうじ', it: 'similitudine' },
      { w: '内角', r: 'ないかく', it: 'angolo interno' },
      { w: 'サイン', r: 'さいん', it: 'seno' },
      { w: 'コサイン', r: 'こさいん', it: 'coseno' },
      { w: 'タンジェント', r: 'たんじぇんと', it: 'tangente' },
      { w: '概算', r: 'がいさん', it: 'stima approssimata' },
      { w: '単位', r: 'たんい', it: 'unità di misura' }
    ]
  });

  A('cul-probabilita', {
    title: { t: '[確率|かくりつ]', it: 'Probabilità' },
    sum: [
      { t: '⟦[確率|かくりつ]⟧は、[起|お]こりうる[場合|ばあい]のうち[望|のぞ]む[場合|ばあい]の[割合|わりあい]です。', it: 'La probabilità è la quota di casi favorevoli sui casi possibili.' },
      { t: '⟦[余事象|よじしょう]⟧の[確率|かくりつ]は、[一|いち]から[元|もと]の[確率|かくりつ]を[引|ひ]いた[値|あたい]です。', it: 'La probabilità dell’evento complementare è uno meno la probabilità dell’evento.' },
      { t: '⟦[独立|どくりつ]⟧な[事象|じしょう]の[確率|かくりつ]は、[掛|か]け[合|あ]わせます。', it: 'Le probabilità di eventi indipendenti si moltiplicano.' },
      { t: '⟦[組|く]み[合|あ]わせ⟧は、[順番|じゅんばん]を[区別|くべつ]しない[選|えら]び[方|かた]です。', it: 'Le combinazioni sono modi di scegliere senza distinguere l’ordine.' },
      { t: '⟦[期待値|きたいち]⟧は、[確率|かくりつ]で[重|おも]みをつけた[平均|へいきん]です。', it: 'Il valore atteso è la media pesata con le probabilità.' },
      { t: '⟦[条件付|じょうけんつ]き[確率|かくりつ]⟧と⟦ベイズの[定理|ていり]⟧は、[検査|けんさ]の[陽性|ようせい]の[意味|いみ]を[教|おし]えます。', it: 'La probabilità condizionata e il teorema di Bayes mostrano che cosa significa un test positivo.' },
      { t: '⟦ギャンブラーの[誤謬|ごびゅう]⟧は、[過去|かこ]の[結果|けっか]が[次|つぎ]に[影響|えいきょう]すると[思|おも]い[込|こ]むことです。', it: 'La fallacia del giocatore è credere che i risultati passati influenzino il prossimo.' }
    ],
    gloss: [
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '余事象', r: 'よじしょう', it: 'evento complementare' },
      { w: '独立', r: 'どくりつ', it: 'indipendente' },
      { w: '組み合わせ', r: 'くみあわせ', it: 'combinazione' },
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '条件付き確率', r: 'じょうけんつきかくりつ', it: 'probabilità condizionata' },
      { w: 'ベイズの定理', r: 'べいずのていり', it: 'teorema di Bayes' },
      { w: 'ギャンブラーの誤謬', r: 'ぎゃんぶらーのごびゅう', it: 'fallacia del giocatore' },
      { w: '大数の法則', r: 'たいすうのほうそく', it: 'legge dei grandi numeri' },
      { w: '順列', r: 'じゅんれつ', it: 'permutazione, disposizione' }
    ]
  });

  A('cul-statistica-e-dati', {
    title: { t: '[統計|とうけい]とデータ', it: 'Statistica e dati' },
    sum: [
      { t: '⟦[平均値|へいきんち]⟧、⟦[中央値|ちゅうおうち]⟧、⟦[最頻値|さいひんち]⟧は、データを[一|ひと]つの[数|かず]で[表|あらわ]します。', it: 'Media, mediana e moda riassumono i dati con un solo numero.' },
      { t: '⟦[外|はず]れ[値|ち]⟧があると、[平均値|へいきんち]は[大|おお]きくずれます。', it: 'Se ci sono valori anomali, la media si sposta molto.' },
      { t: '⟦[標準偏差|ひょうじゅんへんさ]⟧は、データの[散|ち]らばりを[表|あらわ]します。', it: 'La deviazione standard indica la dispersione dei dati.' },
      { t: '⟦[正規分布|せいきぶんぷ]⟧では、[平均|へいきん]の[近|ちか]くにデータが[集|あつ]まります。', it: 'Nella distribuzione normale i dati si concentrano vicino alla media.' },
      { t: '⟦[標本|ひょうほん]⟧は、[無作為|むさくい]に[選|えら]ばないと[偏|かたよ]ります。', it: 'Il campione, se non è scelto a caso, risulta distorto.' },
      { t: '⟦[相関|そうかん]⟧があっても、⟦[因果関係|いんがかんけい]⟧があるとは[限|かぎ]りません。', it: 'Una correlazione non implica necessariamente un rapporto di causa.' },
      { t: '⟦シンプソンのパラドックス⟧では、[全体|ぜんたい]と[各|かく]グループで[傾向|けいこう]が[逆|ぎゃく]になります。', it: 'Nel paradosso di Simpson la tendenza del totale è opposta a quella dei singoli gruppi.' }
    ],
    gloss: [
      { w: '平均値', r: 'へいきんち', it: 'media' },
      { w: '中央値', r: 'ちゅうおうち', it: 'mediana' },
      { w: '最頻値', r: 'さいひんち', it: 'moda' },
      { w: '外れ値', r: 'はずれち', it: 'valore anomalo (outlier)' },
      { w: '標準偏差', r: 'ひょうじゅんへんさ', it: 'deviazione standard' },
      { w: '正規分布', r: 'せいきぶんぷ', it: 'distribuzione normale' },
      { w: '標本', r: 'ひょうほん', it: 'campione' },
      { w: '相関', r: 'そうかん', it: 'correlazione' },
      { w: '因果関係', r: 'いんがかんけい', it: 'rapporto causale' },
      { w: 'シンプソンのパラドックス', r: 'しんぷそんのぱらどっくす', it: 'paradosso di Simpson' }
    ]
  });

  A('cul-moto-forze-newton', {
    title: { t: '[運動|うんどう]と[力|ちから]とニュートン', it: 'Moto, forze, Newton' },
    sum: [
      { t: '⟦[平均速度|へいきんそくど]⟧は、[移動|いどう]した[距離|きょり]を[時間|じかん]で[割|わ]った[値|あたい]です。', it: 'La velocità media è lo spazio percorso diviso il tempo impiegato.' },
      { t: '⟦[加速度|かそくど]⟧は、[単位時間|たんいじかん]あたりの[速度|そくど]の[変化|へんか]です。', it: 'L’accelerazione è la variazione di velocità nell’unità di tempo.' },
      { t: '⟦[自由落下|じゆうらっか]⟧では、[空気|くうき]の[抵抗|ていこう]がなければ、[重|おも]さに[関係|かんけい]なく[同|おな]じ[加速度|かそくど]で[落|お]ちます。', it: 'Nella caduta libera, senza resistenza dell’aria, tutti i corpi cadono con la stessa accelerazione.' },
      { t: '⟦[慣性|かんせい]の[法則|ほうそく]⟧は、[力|ちから]がなければ[動|うご]きは[変|か]わないという[法則|ほうそく]です。', it: 'La legge d’inerzia dice che senza forza il moto non cambia.' },
      { t: '⟦[運動方程式|うんどうほうていしき]⟧は、[力|ちから]が[質量|しつりょう]と[加速度|かそくど]の[積|せき]だと[表|あらわ]します。', it: 'L’equazione del moto dice che la forza è il prodotto di massa e accelerazione.' },
      { t: '⟦[作用反作用の法則|さようはんさようのほうそく]⟧では、[二|ふた]つの[力|ちから]は[別|べつ]の[物体|ぶったい]に[働|はたら]きます。', it: 'Nella legge di azione e reazione le due forze agiscono su corpi diversi.' },
      { t: '⟦[摩擦力|まさつりょく]⟧は、[接|せっ]する[面|めん]の[動|うご]きを[妨|さまた]げる[力|ちから]です。', it: 'L’attrito è una forza che ostacola il movimento tra due superfici a contatto.' }
    ],
    gloss: [
      { w: '平均速度', r: 'へいきんそくど', it: 'velocità media' },
      { w: '等速直線運動', r: 'とうそくちょくせんうんどう', it: 'moto rettilineo uniforme' },
      { w: '加速度', r: 'かそくど', it: 'accelerazione' },
      { w: '自由落下', r: 'じゆうらっか', it: 'caduta libera' },
      { w: '慣性の法則', r: 'かんせいのほうそく', it: 'legge d’inerzia' },
      { w: '運動方程式', r: 'うんどうほうていしき', it: 'equazione del moto (F = ma)' },
      { w: '作用反作用の法則', r: 'さようはんさようのほうそく', it: 'legge di azione e reazione' },
      { w: '摩擦力', r: 'まさつりょく', it: 'forza d’attrito' },
      { w: '質量', r: 'しつりょう', it: 'massa' },
      { w: '重力', r: 'じゅうりょく', it: 'forza di gravità' }
    ]
  });

  A('cul-energia-lavoro-potenza', {
    title: { t: 'エネルギーと[仕事|しごと]と[仕事率|しごとりつ]', it: 'Energia, lavoro, potenza' },
    sum: [
      { t: '⟦[仕事|しごと]⟧は、[力|ちから]と、[力|ちから]の[向|む]きへの[移動距離|いどうきょり]の[積|せき]です。', it: 'Il lavoro è il prodotto della forza per lo spostamento nella direzione della forza.' },
      { t: '⟦エネルギー⟧は、[仕事|しごと]をする[能力|のうりょく]です。', it: 'L’energia è la capacità di compiere lavoro.' },
      { t: '⟦[運動|うんどう]エネルギー⟧は、[速|はや]さの[二乗|にじょう]に[比例|ひれい]します。', it: 'L’energia cinetica è proporzionale al quadrato della velocità.' },
      { t: '⟦[位置|いち]エネルギー⟧は、[高|たか]さで[決|き]まります。', it: 'L’energia potenziale dipende dall’altezza.' },
      { t: '⟦エネルギー[保存|ほぞん]の[法則|ほうそく]⟧は、[全体|ぜんたい]の[量|りょう]が[変|か]わらないことです。', it: 'La conservazione dell’energia dice che la quantità totale non cambia.' },
      { t: '⟦[仕事率|しごとりつ]⟧は、[単位時間|たんいじかん]あたりの[仕事|しごと]で、⟦ワット⟧で[表|あらわ]します。', it: 'La potenza è il lavoro per unità di tempo e si misura in watt.' },
      { t: '⟦キロワット[時|じ]⟧は、[電気代|でんきだい]で[使|つか]うエネルギーの[単位|たんい]です。', it: 'Il chilowattora è l’unità di energia usata in bolletta.' }
    ],
    gloss: [
      { w: '仕事', r: 'しごと', it: 'lavoro (in fisica)' },
      { w: 'エネルギー', r: 'えねるぎー', it: 'energia' },
      { w: '運動エネルギー', r: 'うんどうえねるぎー', it: 'energia cinetica' },
      { w: '位置エネルギー', r: 'いちえねるぎー', it: 'energia potenziale' },
      { w: 'エネルギー保存の法則', r: 'えねるぎーほぞんのほうそく', it: 'conservazione dell’energia' },
      { w: '仕事率', r: 'しごとりつ', it: 'potenza' },
      { w: 'ワット', r: 'わっと', it: 'watt' },
      { w: 'キロワット時', r: 'きろわっとじ', it: 'chilowattora' },
      { w: 'ジュール', r: 'じゅーる', it: 'joule' },
      { w: '効率', r: 'こうりつ', it: 'rendimento' }
    ]
  });

  A('cul-elettricita-e-circuiti', {
    title: { t: '[電気|でんき]と[回路|かいろ]', it: 'Elettricità e circuiti' },
    sum: [
      { t: '⟦[電流|でんりゅう]⟧は[電荷|でんか]の[流|なが]れ、⟦[電圧|でんあつ]⟧はそれを[押|お]す[力|ちから]です。', it: 'La corrente è un flusso di cariche, la tensione è la spinta che le muove.' },
      { t: '⟦オームの[法則|ほうそく]⟧は、[電圧|でんあつ]が[電流|でんりゅう]と[抵抗|ていこう]の[積|せき]だと[表|あらわ]します。', it: 'La legge di Ohm dice che la tensione è il prodotto di corrente e resistenza.' },
      { t: '⟦[電力|でんりょく]⟧は、[電圧|でんあつ]と[電流|でんりゅう]の[積|せき]です。', it: 'La potenza elettrica è il prodotto di tensione e corrente.' },
      { t: '⟦[直列|ちょくれつ]⟧では、[電流|でんりゅう]は[同|おな]じで、[抵抗|ていこう]は[足|た]し[算|ざん]になります。', it: 'In serie la corrente è la stessa e le resistenze si sommano.' },
      { t: '⟦[並列|へいれつ]⟧では、[電圧|でんあつ]が[同|おな]じで、[電流|でんりゅう]が[足|た]されます。', it: 'In parallelo la tensione è la stessa e le correnti si sommano.' },
      { t: '⟦[過負荷|かふか]⟧は、[電線|でんせん]が[熱|あつ]くなる[危険|きけん]があります。', it: 'Il sovraccarico può far surriscaldare i cavi.' },
      { t: '⟦[漏電遮断器|ろうでんしゃだんき]⟧は、[漏電|ろうでん]を[感知|かんち]して[電気|でんき]を[止|と]めます。', it: 'L’interruttore differenziale rileva la dispersione e toglie la corrente.' }
    ],
    gloss: [
      { w: '電流', r: 'でんりゅう', it: 'corrente elettrica' },
      { w: '電圧', r: 'でんあつ', it: 'tensione' },
      { w: '抵抗', r: 'ていこう', it: 'resistenza' },
      { w: 'オームの法則', r: 'おーむのほうそく', it: 'legge di Ohm' },
      { w: '電力', r: 'でんりょく', it: 'potenza elettrica' },
      { w: '直列', r: 'ちょくれつ', it: 'in serie' },
      { w: '並列', r: 'へいれつ', it: 'in parallelo' },
      { w: '過負荷', r: 'かふか', it: 'sovraccarico' },
      { w: '漏電遮断器', r: 'ろうでんしゃだんき', it: 'interruttore differenziale' },
      { w: '接地', r: 'せっち', it: 'messa a terra' }
    ]
  });

  A('cul-onde-luce-suono', {
    title: { t: '[波|なみ]と[光|ひかり]と[音|おと]', it: 'Onde, luce, suono' },
    sum: [
      { t: '⟦[波|なみ]⟧は、[物質|ぶっしつ]を[運|はこ]ばずにエネルギーを[運|はこ]びます。', it: 'Un’onda trasporta energia senza trasportare materia.' },
      { t: '⟦[周波数|しゅうはすう]⟧は[一秒|いちびょう]あたりの[振動|しんどう]の[数|かず]、⟦[波長|はちょう]⟧は[山|やま]と[山|やま]の[距離|きょり]です。', it: 'La frequenza è il numero di oscillazioni al secondo, la lunghezza d’onda è la distanza fra due creste.' },
      { t: '⟦[音|おと]⟧は、[真空|しんくう]では[伝|つた]わりません。', it: 'Il suono non si propaga nel vuoto.' },
      { t: '⟦デシベル⟧は、[音|おと]の[強|つよ]さを[対数|たいすう]で[表|あらわ]す[単位|たんい]です。', it: 'Il decibel è un’unità che esprime l’intensità del suono su scala logaritmica.' },
      { t: '[光|ひかり]は⟦[電磁波|でんじは]⟧で、[真空|しんくう]でも[進|すす]みます。', it: 'La luce è un’onda elettromagnetica e viaggia anche nel vuoto.' },
      { t: '⟦[屈折|くっせつ]⟧は、[光|ひかり]が[別|べつ]の[物質|ぶっしつ]に[入|はい]るとき[向|む]きが[変|か]わる[現象|げんしょう]です。', it: 'La rifrazione è il cambio di direzione della luce quando passa in un altro mezzo.' },
      { t: '⟦ドップラー[効果|こうか]⟧は、[音源|おんげん]が[近|ちか]づくと[音|おと]が[高|たか]く[聞|き]こえることです。', it: 'L’effetto Doppler è il suono più acuto quando la sorgente si avvicina.' }
    ],
    gloss: [
      { w: '波', r: 'なみ', it: 'onda' },
      { w: '周波数', r: 'しゅうはすう', it: 'frequenza' },
      { w: '波長', r: 'はちょう', it: 'lunghezza d’onda' },
      { w: '音', r: 'おと', it: 'suono' },
      { w: 'デシベル', r: 'でしべる', it: 'decibel' },
      { w: '電磁波', r: 'でんじは', it: 'onda elettromagnetica' },
      { w: '屈折', r: 'くっせつ', it: 'rifrazione' },
      { w: 'ドップラー効果', r: 'どっぷらーこうか', it: 'effetto Doppler' },
      { w: '反射', r: 'はんしゃ', it: 'riflessione' },
      { w: '干渉', r: 'かんしょう', it: 'interferenza' }
    ]
  });

  A('cul-calore-e-termodinamica', {
    title: { t: '[熱|ねつ]と[熱力学|ねつりきがく]', it: 'Calore e termodinamica' },
    sum: [
      { t: '⟦[温度|おんど]⟧は[粒子|りゅうし]の[動|うご]きの[激|はげ]しさ、⟦[熱|ねつ]⟧は[移動|いどう]するエネルギーです。', it: 'La temperatura misura l’agitazione delle particelle, il calore è energia che si trasferisce.' },
      { t: '⟦[絶対零度|ぜったいれいど]⟧は、ケルビンの[最低|さいてい]の[温度|おんど]です。', it: 'Lo zero assoluto è la temperatura più bassa della scala Kelvin.' },
      { t: '[水|みず]は⟦[比熱|ひねつ]⟧が[大|おお]きいので、[海|うみ]が[気候|きこう]を[穏|おだ]やかにします。', it: 'L’acqua ha un calore specifico alto, perciò il mare rende il clima mite.' },
      { t: '⟦[潜熱|せんねつ]⟧は[状態|じょうたい]が[変|か]わる[間|あいだ]の[熱|ねつ]で、[温度|おんど]は[一定|いってい]です。', it: 'Il calore latente è quello dei cambiamenti di stato, durante i quali la temperatura resta costante.' },
      { t: '⟦[伝導|でんどう]⟧、⟦[対流|たいりゅう]⟧、⟦[放射|ほうしゃ]⟧は、[熱|ねつ]が[伝|つた]わる[三|みっ]つの[方法|ほうほう]です。', it: 'Conduzione, convezione e irraggiamento sono i tre modi in cui si trasmette il calore.' },
      { t: '⟦[熱力学第一法則|ねつりきがくだいいちほうそく]⟧は、エネルギーの[保存|ほぞん]を[表|あらわ]します。', it: 'Il primo principio della termodinamica esprime la conservazione dell’energia.' },
      { t: '⟦エントロピー⟧は、[孤立系|こりつけい]では[決|けっ]して[減|へ]りません。', it: 'In un sistema isolato l’entropia non diminuisce mai.' }
    ],
    gloss: [
      { w: '温度', r: 'おんど', it: 'temperatura' },
      { w: '熱', r: 'ねつ', it: 'calore' },
      { w: '絶対零度', r: 'ぜったいれいど', it: 'zero assoluto' },
      { w: '比熱', r: 'ひねつ', it: 'calore specifico' },
      { w: '潜熱', r: 'せんねつ', it: 'calore latente' },
      { w: '伝導', r: 'でんどう', it: 'conduzione' },
      { w: '対流', r: 'たいりゅう', it: 'convezione' },
      { w: '放射', r: 'ほうしゃ', it: 'irraggiamento' },
      { w: '熱力学第一法則', r: 'ねつりきがくだいいちほうそく', it: 'primo principio della termodinamica' },
      { w: 'エントロピー', r: 'えんとろぴー', it: 'entropia' }
    ]
  });

  A('cul-atomi-e-tavola-periodica', {
    title: { t: '[原子|げんし]と[周期表|しゅうきひょう]', it: 'Atomi e tavola periodica' },
    sum: [
      { t: '⟦[原子|げんし]⟧の[中心|ちゅうしん]には⟦[原子核|げんしかく]⟧があり、まわりに⟦[電子|でんし]⟧があります。', it: 'Al centro dell’atomo c’è il nucleo e attorno ci sono gli elettroni.' },
      { t: '⟦[陽子|ようし]⟧と⟦[中性子|ちゅうせいし]⟧が、[原子核|げんしかく]を[作|つく]ります。', it: 'Protoni e neutroni formano il nucleo.' },
      { t: '⟦[原子番号|げんしばんごう]⟧は、[陽子|ようし]の[数|かず]で[元素|げんそ]を[決|き]めます。', it: 'Il numero atomico, cioè il numero di protoni, definisce l’elemento.' },
      { t: '⟦[同位体|どういたい]⟧は、[陽子|ようし]の[数|かず]が[同|おな]じで[中性子|ちゅうせいし]の[数|かず]が[違|ちが]う[原子|げんし]です。', it: 'Gli isotopi sono atomi con lo stesso numero di protoni e diverso numero di neutroni.' },
      { t: '⟦[周期表|しゅうきひょう]⟧は、⟦メンデレーエフ⟧が[性質|せいしつ]の[繰|く]り[返|かえ]しに[気|き]づいて[作|つく]りました。', it: 'La tavola periodica nacque da Mendeleev, che notò il ripetersi delle proprietà.' },
      { t: '⟦イオン⟧は、[電子|でんし]を[失|うしな]ったり[得|え]たりした[原子|げんし]です。', it: 'Uno ione è un atomo che ha perso o acquistato elettroni.' },
      { t: '⟦[半減期|はんげんき]⟧は、[放射性|ほうしゃせい]の[原子核|げんしかく]が[半分|はんぶん]になる[時間|じかん]です。', it: 'L’emivita è il tempo in cui i nuclei radioattivi si dimezzano.' }
    ],
    gloss: [
      { w: '原子', r: 'げんし', it: 'atomo' },
      { w: '原子核', r: 'げんしかく', it: 'nucleo' },
      { w: '電子', r: 'でんし', it: 'elettrone' },
      { w: '陽子', r: 'ようし', it: 'protone' },
      { w: '中性子', r: 'ちゅうせいし', it: 'neutrone' },
      { w: '原子番号', r: 'げんしばんごう', it: 'numero atomico' },
      { w: '同位体', r: 'どういたい', it: 'isotopo' },
      { w: '周期表', r: 'しゅうきひょう', it: 'tavola periodica' },
      { w: 'メンデレーエフ', r: 'めんでれーえふ', it: 'Mendeleev' },
      { w: 'イオン', r: 'いおん', it: 'ione' },
      { w: '半減期', r: 'はんげんき', it: 'emivita' }
    ]
  });

  A('cul-legami-molecole-moli', {
    title: { t: '[結合|けつごう]と[分子|ぶんし]とモル', it: 'Legami, molecole, moli' },
    sum: [
      { t: '⟦[化学結合|かがくけつごう]⟧は、[原子|げんし]がより[安定|あんてい]になるためにできます。', it: 'Il legame chimico si forma perché gli atomi diventino più stabili.' },
      { t: '⟦イオン[結合|けつごう]⟧は[電子|でんし]を[渡|わた]し、⟦[共有結合|きょうゆうけつごう]⟧は[電子|でんし]を[共有|きょうゆう]します。', it: 'Il legame ionico trasferisce elettroni, quello covalente li condivide.' },
      { t: '⟦[金属結合|きんぞくけつごう]⟧では、[自由|じゆう]な[電子|でんし]が[金属|きんぞく]を[結|むす]びつけます。', it: 'Nel legame metallico gli elettroni liberi tengono unito il metallo.' },
      { t: '⟦[電気陰性度|でんきいんせいど]⟧は、[電子|でんし]を[引|ひ]きつける[強|つよ]さです。', it: 'L’elettronegatività è la forza con cui un atomo attira gli elettroni.' },
      { t: '⟦[水素結合|すいそけつごう]⟧のため、[水|みず]は[沸点|ふってん]が[高|たか]くなります。', it: 'A causa dei legami a idrogeno l’acqua ha un punto di ebollizione alto.' },
      { t: '⟦モル⟧は、⟦アボガドロ[数|すう]⟧の[粒子|りゅうし]を[含|ふく]む[物質量|ぶっしつりょう]の[単位|たんい]です。', it: 'La mole è l’unità di quantità di sostanza che contiene il numero di Avogadro di particelle.' },
      { t: '⟦モル[濃度|のうど]⟧は、[溶液|ようえき][一|いち]リットルに[溶|と]けた[溶質|ようしつ]の[物質量|ぶっしつりょう]です。', it: 'La molarità è la quantità di soluto sciolta in un litro di soluzione.' }
    ],
    gloss: [
      { w: '化学結合', r: 'かがくけつごう', it: 'legame chimico' },
      { w: 'イオン結合', r: 'いおんけつごう', it: 'legame ionico' },
      { w: '共有結合', r: 'きょうゆうけつごう', it: 'legame covalente' },
      { w: '金属結合', r: 'きんぞくけつごう', it: 'legame metallico' },
      { w: '電気陰性度', r: 'でんきいんせいど', it: 'elettronegatività' },
      { w: '水素結合', r: 'すいそけつごう', it: 'legame a idrogeno' },
      { w: 'モル', r: 'もる', it: 'mole' },
      { w: 'アボガドロ数', r: 'あぼがどろすう', it: 'numero di Avogadro' },
      { w: '物質量', r: 'ぶっしつりょう', it: 'quantità di sostanza' },
      { w: 'モル濃度', r: 'もるのうど', it: 'molarità' }
    ]
  });

  A('cul-reazioni-acidi-basi-ph', {
    title: { t: '[化学反応|かがくはんのう]と[酸|さん]と[塩基|えんき]', it: 'Reazioni, acidi, basi, pH' },
    sum: [
      { t: '⟦[化学反応|かがくはんのう]⟧では、⟦[反応物|はんのうぶつ]⟧が⟦[生成物|せいせいぶつ]⟧に[変|か]わります。', it: 'In una reazione chimica i reagenti si trasformano nei prodotti.' },
      { t: '⟦[質量保存|しつりょうほぞん]の[法則|ほうそく]⟧により、[反応|はんのう]の[前後|ぜんご]で[原子|げんし]の[数|かず]は[同|おな]じです。', it: 'Per la conservazione della massa, il numero di atomi è lo stesso prima e dopo la reazione.' },
      { t: '⟦[酸化還元反応|さんかかんげんはんのう]⟧では、[電子|でんし]が[移動|いどう]します。', it: 'Nelle reazioni redox si trasferiscono elettroni.' },
      { t: '⟦[酸|さん]⟧は[水素|すいそ]イオンを[渡|わた]し、⟦[塩基|えんき]⟧は[受|う]け[取|と]ります。', it: 'Un acido cede ioni idrogeno e una base li accetta.' },
      { t: '⟦pH⟧は[酸性|さんせい]の[強|つよ]さを[表|あらわ]し、[七|なな]が[中性|ちゅうせい]です。', it: 'Il pH esprime la forza dell’acidità e 7 è neutro.' },
      { t: '⟦[中和|ちゅうわ]⟧では、[酸|さん]と[塩基|えんき]が[反応|はんのう]して[塩|しお]と[水|みず]ができます。', it: 'Nella neutralizzazione acido e base reagiscono e formano sale e acqua.' },
      { t: '⟦[触媒|しょくばい]⟧は、[自分|じぶん]は[減|へ]らずに[反応|はんのう]を[速|はや]くします。', it: 'Il catalizzatore accelera la reazione senza consumarsi.' }
    ],
    gloss: [
      { w: '化学反応', r: 'かがくはんのう', it: 'reazione chimica' },
      { w: '反応物', r: 'はんのうぶつ', it: 'reagenti' },
      { w: '生成物', r: 'せいせいぶつ', it: 'prodotti' },
      { w: '質量保存の法則', r: 'しつりょうほぞんのほうそく', it: 'conservazione della massa' },
      { w: '酸化還元反応', r: 'さんかかんげんはんのう', it: 'reazione redox' },
      { w: '酸', r: 'さん', it: 'acido' },
      { w: '塩基', r: 'えんき', it: 'base' },
      { w: 'pH', r: 'ぴーえいち', it: 'pH' },
      { w: '中和', r: 'ちゅうわ', it: 'neutralizzazione' },
      { w: '触媒', r: 'しょくばい', it: 'catalizzatore' }
    ]
  });

  A('cul-chimica-quotidiana', {
    title: { t: '[身|み]の[回|まわ]りの[化学|かがく]', it: 'Chimica quotidiana' },
    sum: [
      { t: '⟦[石|せっ]けん⟧の[分子|ぶんし]は、⟦[親水性|しんすいせい]⟧の[頭|あたま]と⟦[疎水性|そすいせい]⟧の[尾|お]を[持|も]ちます。', it: 'La molecola del sapone ha una testa idrofila e una coda idrofoba.' },
      { t: '⟦ミセル⟧が[油汚|あぶらよご]れを[包|つつ]み、[水|みず]で[流|なが]せます。', it: 'Le micelle racchiudono lo sporco unto e lo si risciacqua con l’acqua.' },
      { t: '⟦ポリマー⟧は、[小|ちい]さな⟦モノマー⟧が[長|なが]くつながった[分子|ぶんし]です。', it: 'Un polimero è una molecola in cui tanti piccoli monomeri sono legati a catena.' },
      { t: '⟦マイクロプラスチック⟧は、[海|うみ]や[土|つち]に[広|ひろ]がる[小|ちい]さな[破片|はへん]です。', it: 'Le microplastiche sono piccoli frammenti diffusi nei mari e nel suolo.' },
      { t: '⟦[燃焼|ねんしょう]⟧は[熱|ねつ]を[出|だ]す[反応|はんのう]で、[酸素|さんそ]が[足|た]りないと⟦[一酸化炭素|いっさんかたんそ]⟧が[出|で]ます。', it: 'La combustione libera calore e, se manca ossigeno, produce monossido di carbonio.' },
      { t: '⟦[腐食|ふしょく]⟧の[例|れい]は、[鉄|てつ]の⟦さび⟧です。', it: 'Un esempio di corrosione è la ruggine del ferro.' },
      { t: '⟦[電池|でんち]⟧は、[酸化還元反応|さんかかんげんはんのう]で[化学|かがく]エネルギーを[電気|でんき]に[変|か]えます。', it: 'La pila trasforma energia chimica in elettrica con una reazione redox.' }
    ],
    gloss: [
      { w: '石けん', r: 'せっけん', it: 'sapone' },
      { w: '親水性', r: 'しんすいせい', it: 'idrofilo' },
      { w: '疎水性', r: 'そすいせい', it: 'idrofobo' },
      { w: 'ミセル', r: 'みせる', it: 'micella' },
      { w: 'ポリマー', r: 'ぽりまー', it: 'polimero' },
      { w: 'モノマー', r: 'ものまー', it: 'monomero' },
      { w: 'マイクロプラスチック', r: 'まいくろぷらすちっく', it: 'microplastiche' },
      { w: '燃焼', r: 'ねんしょう', it: 'combustione' },
      { w: '一酸化炭素', r: 'いっさんかたんそ', it: 'monossido di carbonio' },
      { w: '腐食', r: 'ふしょく', it: 'corrosione' },
      { w: 'さび', r: 'さび', it: 'ruggine' },
      { w: '電池', r: 'でんち', it: 'pila, batteria' }
    ]
  });

  A('cul-cellula-e-vita', {
    title: { t: '[細胞|さいぼう]と[生命|せいめい]', it: 'Cellula e vita' },
    sum: [
      { t: '⟦[細胞説|さいぼうせつ]⟧は、すべての[生物|せいぶつ]が[細胞|さいぼう]でできていると[考|かんが]えます。', it: 'La teoria cellulare sostiene che tutti gli organismi sono fatti di cellule.' },
      { t: '⟦[原核生物|げんかくせいぶつ]⟧には[核|かく]がなく、⟦[真核生物|しんかくせいぶつ]⟧には[核|かく]があります。', it: 'I procarioti non hanno nucleo, gli eucarioti sì.' },
      { t: '⟦ミトコンドリア⟧は、[細胞呼吸|さいぼうこきゅう]でエネルギーを[作|つく]ります。', it: 'I mitocondri producono energia con la respirazione cellulare.' },
      { t: '⟦[細胞膜|さいぼうまく]⟧は、[入|はい]るものを[選|えら]ぶ[半透膜|はんとうまく]です。', it: 'La membrana plasmatica è una membrana semipermeabile che seleziona ciò che entra.' },
      { t: '⟦DNA⟧は、⟦[二重|にじゅう]らせん⟧の[形|かたち]をした[遺伝情報|いでんじょうほう]の[分子|ぶんし]です。', it: 'Il DNA è la molecola dell’informazione ereditaria a forma di doppia elica.' },
      { t: '⟦[転写|てんしゃ]⟧のあと、⟦[翻訳|ほんやく]⟧で⟦タンパク[質|しつ]⟧が[作|つく]られます。', it: 'Dopo la trascrizione, con la traduzione si costruiscono le proteine.' },
      { t: '⟦[光合成|こうごうせい]⟧は、[光|ひかり]のエネルギーでブドウ[糖|とう]と[酸素|さんそ]を[作|つく]ります。', it: 'La fotosintesi usa l’energia della luce per produrre glucosio e ossigeno.' }
    ],
    gloss: [
      { w: '細胞説', r: 'さいぼうせつ', it: 'teoria cellulare' },
      { w: '原核生物', r: 'げんかくせいぶつ', it: 'procarioti' },
      { w: '真核生物', r: 'しんかくせいぶつ', it: 'eucarioti' },
      { w: 'ミトコンドリア', r: 'みとこんどりあ', it: 'mitocondrio' },
      { w: '細胞膜', r: 'さいぼうまく', it: 'membrana plasmatica' },
      { w: 'DNA', r: 'でぃーえぬえー', it: 'DNA' },
      { w: '二重らせん', r: 'にじゅうらせん', it: 'doppia elica' },
      { w: '転写', r: 'てんしゃ', it: 'trascrizione' },
      { w: '翻訳', r: 'ほんやく', it: 'traduzione' },
      { w: 'タンパク質', r: 'たんぱくしつ', it: 'proteina' },
      { w: '光合成', r: 'こうごうせい', it: 'fotosintesi' }
    ]
  });

  A('cul-genetica-ed-evoluzione', {
    title: { t: '[遺伝|いでん]と[進化|しんか]', it: 'Genetica ed evoluzione' },
    sum: [
      { t: '⟦メンデル⟧は、エンドウで[遺伝|いでん]の[法則|ほうそく]を[見|み]つけました。', it: 'Mendel scoprì le leggi dell’ereditarietà con i piselli.' },
      { t: '⟦[優性|ゆうせい]⟧の[形質|けいしつ]は、⟦[劣性|れっせい]⟧の[形質|けいしつ]より[表|あらわ]れます。', it: 'Il carattere dominante si manifesta rispetto a quello recessivo.' },
      { t: '⟦[遺伝子型|いでんしがた]⟧は[遺伝子|いでんし]の[組|く]み[合|あ]わせ、⟦[表現型|ひょうげんがた]⟧は[見|み]える[特徴|とくちょう]です。', it: 'Il genotipo è la coppia di alleli, il fenotipo è il carattere osservabile.' },
      { t: '⟦パネットの[方形|ほうけい]⟧で、[子|こ]の[遺伝子型|いでんしがた]の[割合|わりあい]を[求|もと]めます。', it: 'Con il quadrato di Punnett si calcola la proporzione dei genotipi dei figli.' },
      { t: '⟦ダーウィン⟧と⟦ウォレス⟧が、⟦[自然選択|しぜんせんたく]⟧を[提案|ていあん]しました。', it: 'Darwin e Wallace proposero la selezione naturale.' },
      { t: '[自然選択|しぜんせんたく]に[目的|もくてき]はありません。', it: 'La selezione naturale non ha uno scopo.' },
      { t: '⟦[化石|かせき]⟧や[遺伝子|いでんし]の[比較|ひかく]が、⟦[進化|しんか]⟧の[証拠|しょうこ]になります。', it: 'Fossili e confronto dei geni sono prove dell’evoluzione.' }
    ],
    gloss: [
      { w: 'メンデル', r: 'めんでる', it: 'Mendel' },
      { w: '優性', r: 'ゆうせい', it: 'dominante' },
      { w: '劣性', r: 'れっせい', it: 'recessivo' },
      { w: '遺伝子型', r: 'いでんしがた', it: 'genotipo' },
      { w: '表現型', r: 'ひょうげんがた', it: 'fenotipo' },
      { w: 'パネットの方形', r: 'ぱねっとのほうけい', it: 'quadrato di Punnett' },
      { w: 'ダーウィン', r: 'だーうぃん', it: 'Darwin' },
      { w: 'ウォレス', r: 'うぉれす', it: 'Wallace' },
      { w: '自然選択', r: 'しぜんせんたく', it: 'selezione naturale' },
      { w: '化石', r: 'かせき', it: 'fossile' },
      { w: '進化', r: 'しんか', it: 'evoluzione' }
    ]
  });

  A('cul-corpo-umano', {
    title: { t: '[人体|じんたい]のしくみ', it: 'Il corpo umano' },
    sum: [
      { t: '⟦[恒常性|こうじょうせい]⟧は、[体内|たいない]の[環境|かんきょう]を[安定|あんてい]に[保|たも]つ[働|はたら]きです。', it: 'L’omeostasi è la capacità di mantenere stabile l’ambiente interno.' },
      { t: '⟦[心臓|しんぞう]⟧は、[血液|けつえき]を[全身|ぜんしん]に[送|おく]るポンプです。', it: 'Il cuore è la pompa che spinge il sangue in tutto il corpo.' },
      { t: '⟦[肺胞|はいほう]⟧で、[酸素|さんそ]が[血液|けつえき]に[入|はい]り、[二酸化炭素|にさんかたんそ]が[出|で]ます。', it: 'Negli alveoli l’ossigeno entra nel sangue e l’anidride carbonica esce.' },
      { t: '⟦[小腸|しょうちょう]⟧は、[栄養|えいよう]を[吸収|きゅうしゅう]する[場所|ばしょ]です。', it: 'L’intestino tenue è il luogo dove si assorbono i nutrienti.' },
      { t: '⟦ニューロン⟧は、⟦シナプス⟧を[通|とお]して[信号|しんごう]を[伝|つた]えます。', it: 'I neuroni trasmettono il segnale attraverso le sinapsi.' },
      { t: '⟦ホルモン⟧は、[血液|けつえき]で[運|はこ]ばれる[化学的|かがくてき]な[信号|しんごう]です。', it: 'Gli ormoni sono segnali chimici trasportati dal sangue.' },
      { t: '⟦[免疫|めんえき]⟧は[病原体|びょうげんたい]から[体|からだ]を[守|まも]り、⟦ワクチン⟧はその[記憶|きおく]を[利用|りよう]します。', it: 'L’immunità difende dai patogeni e i vaccini ne sfruttano la memoria.' }
    ],
    gloss: [
      { w: '恒常性', r: 'こうじょうせい', it: 'omeostasi' },
      { w: '心臓', r: 'しんぞう', it: 'cuore' },
      { w: '血液', r: 'けつえき', it: 'sangue' },
      { w: '肺胞', r: 'はいほう', it: 'alveoli polmonari' },
      { w: '小腸', r: 'しょうちょう', it: 'intestino tenue' },
      { w: 'ニューロン', r: 'にゅーろん', it: 'neurone' },
      { w: 'シナプス', r: 'しなぷす', it: 'sinapsi' },
      { w: 'ホルモン', r: 'ほるもん', it: 'ormone' },
      { w: '免疫', r: 'めんえき', it: 'immunità' },
      { w: 'ワクチン', r: 'わくちん', it: 'vaccino' }
    ]
  });

  A('cul-ecologia-e-ambiente', {
    title: { t: '[生態学|せいたいがく]と[環境|かんきょう]', it: 'Ecologia e ambiente' },
    sum: [
      { t: '⟦[生態系|せいたいけい]⟧は、[生物|せいぶつ]の[集|あつ]まりと[環境|かんきょう]のまとまりです。', it: 'L’ecosistema è l’insieme di una comunità di organismi e del loro ambiente.' },
      { t: '⟦[生産者|せいさんしゃ]⟧、⟦[消費者|しょうひしゃ]⟧、⟦[分解者|ぶんかいしゃ]⟧が[役割|やくわり]を[分|わ]けます。', it: 'Produttori, consumatori e decompositori si dividono i ruoli.' },
      { t: '⟦[食物連鎖|しょくもつれんさ]⟧では、エネルギーの[約|やく][十|じゅう]パーセントだけが[次|つぎ]へ[移|うつ]ります。', it: 'Nella catena alimentare passa al livello successivo solo circa il 10% dell’energia.' },
      { t: '⟦[環境収容力|かんきょうしゅうようりょく]⟧は、[環境|かんきょう]が[支|ささ]えられる[最大|さいだい]の[数|かず]です。', it: 'La capacità portante è il numero massimo che l’ambiente può sostenere.' },
      { t: '⟦[生物多様性|せいぶつたようせい]⟧への[最大|さいだい]の[脅威|きょうい]は、⟦[生息地|せいそくち]⟧の[破壊|はかい]です。', it: 'La minaccia maggiore per la biodiversità è la distruzione dell’habitat.' },
      { t: '⟦[炭素循環|たんそじゅんかん]⟧では、[光合成|こうごうせい]が[二酸化炭素|にさんかたんそ]を[吸収|きゅうしゅう]します。', it: 'Nel ciclo del carbonio la fotosintesi assorbe anidride carbonica.' },
      { t: '⟦[温室効果|おんしつこうか]⟧ガスが[増|ふ]え、⟦[地球温暖化|ちきゅうおんだんか]⟧が[進|すす]んでいます。', it: 'I gas serra aumentano e il riscaldamento globale avanza.' }
    ],
    gloss: [
      { w: '生態系', r: 'せいたいけい', it: 'ecosistema' },
      { w: '生産者', r: 'せいさんしゃ', it: 'produttori' },
      { w: '消費者', r: 'しょうひしゃ', it: 'consumatori' },
      { w: '分解者', r: 'ぶんかいしゃ', it: 'decompositori' },
      { w: '食物連鎖', r: 'しょくもつれんさ', it: 'catena alimentare' },
      { w: '環境収容力', r: 'かんきょうしゅうようりょく', it: 'capacità portante' },
      { w: '生物多様性', r: 'せいぶつたようせい', it: 'biodiversità' },
      { w: '生息地', r: 'せいそくち', it: 'habitat' },
      { w: '炭素循環', r: 'たんそじゅんかん', it: 'ciclo del carbonio' },
      { w: '温室効果', r: 'おんしつこうか', it: 'effetto serra' },
      { w: '地球温暖化', r: 'ちきゅうおんだんか', it: 'riscaldamento globale' }
    ]
  });

})(window.ST = window.ST || {});
