(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);

  A('f1-che-cose-la-f1', {
    title: { t: 'エフワンとは[何|なに]か', it: 'Che cos’è la Formula 1' },
    sum: [
      { t: '⟦エフワン⟧は、⟦モノポスト⟧の[世界|せかい][選手権|せんしゅけん]です。', it: 'La F1 è un campionato mondiale di monoposto, auto con un solo posto.' },
      { t: '⟦フォーミュラ⟧は、[皆|みな]が[守|まも]る[規則|きそく]です。', it: 'La «formula» è un insieme di regole che tutti devono rispettare.' },
      { t: '⟦エフアイエー⟧が[規則|きそく]を[作|つく]ります。', it: 'La FIA scrive le regole.' },
      { t: '⟦プロモーター⟧は、レースを[売|う]る[会社|かいしゃ]です。', it: 'Il promotore è la società che organizza e vende lo spettacolo.' },
      { t: 'エフツーとエフスリーは、[若|わか]い[人|ひと]の[練習|れんしゅう]の[場|ば]です。', it: 'La F2 e la F3 sono categorie di formazione per i giovani.' },
      { t: '[点|てん]が[一番|いちばん][多|おお]いドライバーが⟦チャンピオン⟧です。', it: 'Il pilota con più punti è il campione.' },
      { t: '⟦チーム⟧の[点|てん]は、[二人|ふたり]の[合計|ごうけい]です。', it: 'I punti della squadra sono la somma di quelli dei suoi due piloti.' }
    ],
    gloss: [
      { w: 'エフワン', r: 'えふわん', it: 'Formula 1 (F1)' },
      { w: 'モノポスト', r: 'ものぽすと', it: 'monoposto' },
      { w: 'フォーミュラ', r: 'ふぉーみゅら', it: 'formula (insieme di regole)' },
      { w: 'エフアイエー', r: 'えふあいえー', it: 'FIA' },
      { w: 'プロモーター', r: 'ぷろもーたー', it: 'promotore commerciale' },
      { w: 'チャンピオン', r: 'ちゃんぴおん', it: 'campione' },
      { w: 'チーム', r: 'ちーむ', it: 'squadra' },
      { w: '規則', r: 'きそく', it: 'regola, regolamento' },
      { w: '会社', r: 'かいしゃ', it: 'società, azienda' },
      { w: '合計', r: 'ごうけい', it: 'somma, totale' }
    ]
  });

  A('f1-il-weekend-di-gara', {
    title: { t: 'レースの[週末|しゅうまつ]', it: 'Il weekend di gara' },
    sum: [
      { t: '⟦ウィークエンド⟧は、[金曜日|きんようび]から[日曜日|にちようび]までです。', it: 'Il weekend va dal venerdì alla domenica.' },
      { t: '⟦[練習走行|れんしゅうそうこう]⟧で、[車|くるま]の⟦[調整|ちょうせい]⟧をします。', it: 'Nelle prove libere si mette a punto l’auto.' },
      { t: '⟦[予選|よせん]⟧で、スタートの⟦[順番|じゅんばん]⟧を[決|き]めます。', it: 'Le qualifiche decidono l’ordine di partenza.' },
      { t: '[予選|よせん]は[三|みっ]つに[分|わ]かれ、[遅|おそ]い[車|くるま]が[落|お]ちます。', it: 'Le qualifiche hanno tre parti e le auto più lente vengono eliminate.' },
      { t: '⟦[決勝|けっしょう]⟧は、[日曜日|にちようび]にあります。', it: 'La gara si disputa la domenica.' },
      { t: '[決勝|けっしょう]は、[二|に][時間|じかん]までです。', it: 'La gara dura al massimo due ore.' },
      { t: '⟦スプリント⟧は、[土曜日|どようび]の[短|みじか]いレースです。', it: 'La sprint è una gara breve del sabato.' }
    ],
    gloss: [
      { w: 'ウィークエンド', r: 'うぃーくえんど', it: 'weekend' },
      { w: '練習走行', r: 'れんしゅうそうこう', it: 'prove libere' },
      { w: '調整', r: 'ちょうせい', it: 'messa a punto' },
      { w: '予選', r: 'よせん', it: 'qualifiche' },
      { w: '順番', r: 'じゅんばん', it: 'ordine' },
      { w: '決勝', r: 'けっしょう', it: 'gara (finale)' },
      { w: 'スプリント', r: 'すぷりんと', it: 'gara sprint' },
      { w: '金曜日', r: 'きんようび', it: 'venerdì' },
      { w: '土曜日', r: 'どようび', it: 'sabato' },
      { w: '日曜日', r: 'にちようび', it: 'domenica' }
    ]
  });

  A('f1-squadre-piloti-ruoli', {
    title: { t: 'チームと[人|ひと]の[役|やく][割|わり]', it: 'Squadre, piloti e ruoli' },
    sum: [
      { t: '⟦チーム⟧には、ドライバーと⟦[整備士|せいびし]⟧がいます。', it: 'La squadra ha i piloti e i meccanici.' },
      { t: '⟦チームプリンシパル⟧は、チームの⟦[責任者|せきにんしゃ]⟧です。', it: 'Il team principal è il responsabile della squadra.' },
      { t: '⟦レースエンジニア⟧は、ドライバーと[話|はな]します。', it: 'L’ingegnere di pista parla con il pilota.' },
      { t: '[整備士|せいびし]は、[週末|しゅうまつ]ずっと[車|くるま]を[見|み]ます。', it: 'I meccanici seguono l’auto per tutto il weekend.' },
      { t: '⟦ピットストップ⟧では、[約|やく][二十人|にじゅうにん]が[働|はたら]きます。', it: 'Al pit stop lavorano circa venti persone.' },
      { t: '[同|おな]じチームの[二人|ふたり]は、⟦ライバル⟧でもあります。', it: 'I due piloti della stessa squadra sono anche rivali.' },
      { t: '⟦リザーブドライバー⟧は、[代|か]わりに[走|はし]る[人|ひと]です。', it: 'Il pilota di riserva è chi guida al posto di un titolare.' }
    ],
    gloss: [
      { w: 'チーム', r: 'ちーむ', it: 'squadra' },
      { w: '整備士', r: 'せいびし', it: 'meccanico' },
      { w: 'チームプリンシパル', r: 'ちーむぷりんしぱる', it: 'team principal' },
      { w: '責任者', r: 'せきにんしゃ', it: 'responsabile' },
      { w: 'レースエンジニア', r: 'れーすえんじにあ', it: 'ingegnere di pista' },
      { w: 'ピットストップ', r: 'ぴっとすとっぷ', it: 'sosta ai box' },
      { w: 'ライバル', r: 'らいばる', it: 'rivale' },
      { w: 'リザーブドライバー', r: 'りざーぶどらいばー', it: 'pilota di riserva' },
      { w: 'ドライバー', r: 'どらいばー', it: 'pilota' },
      { w: '役割', r: 'やくわり', it: 'ruolo' }
    ]
  });

  A('f1-sistema-di-punti', {
    title: { t: '[点|てん]のしくみ', it: 'Il sistema di punti' },
    sum: [
      { t: '⟦ポイント⟧は、⟦[順位|じゅんい]⟧で[決|き]まります。', it: 'I punti dipendono dal piazzamento.' },
      { t: '⟦[優勝|ゆうしょう]⟧すると、[二十五|にじゅうご]ポイントです。', it: 'Chi vince prende venticinque punti.' },
      { t: '[十位|じゅうい]までが、ポイントをもらいます。', it: 'Vanno a punti i primi dieci.' },
      { t: '⟦スプリント⟧では、[八位|はちい]までです。', it: 'Nella sprint vanno a punti i primi otto.' },
      { t: '[二千二十五年|にせんにじゅうごねん]から、⟦ファステストラップ⟧に[点|てん]はありません。', it: 'Dal 2025 il giro veloce non dà più punti.' },
      { t: '⟦[同点|どうてん]⟧なら、[優勝|ゆうしょう]の[数|かず]を[見|み]ます。', it: 'A parità di punti si guarda il numero di vittorie.' },
      { t: 'チームの[点|てん]は、[二人|ふたり]の⟦[合計|ごうけい]⟧です。', it: 'I punti della squadra sono la somma dei due piloti.' }
    ],
    gloss: [
      { w: 'ポイント', r: 'ぽいんと', it: 'punto, punti' },
      { w: '順位', r: 'じゅんい', it: 'piazzamento, posizione' },
      { w: '優勝', r: 'ゆうしょう', it: 'vittoria' },
      { w: 'スプリント', r: 'すぷりんと', it: 'gara sprint' },
      { w: 'ファステストラップ', r: 'ふぁすてすとらっぷ', it: 'giro veloce' },
      { w: '同点', r: 'どうてん', it: 'parità di punti' },
      { w: '合計', r: 'ごうけい', it: 'somma, totale' },
      { w: '点', r: 'てん', it: 'punto' },
      { w: 'チーム', r: 'ちーむ', it: 'squadra' },
      { w: '数', r: 'かず', it: 'numero' }
    ]
  });

  A('f1-bandiere-e-segnali', {
    title: { t: '[旗|はた]と[合図|あいず]', it: 'Le bandiere e i segnali' },
    sum: [
      { t: '⟦[旗|はた]⟧で、[危険|きけん]や[大切|たいせつ]なことを[知|し]らせます。', it: 'Con le bandiere si segnalano pericoli e informazioni importanti.' },
      { t: '⟦イエローフラッグ⟧の[時|とき]は、[追|お]い[越|こ]しをしません。', it: 'Con la bandiera gialla non si sorpassa.' },
      { t: '⟦レッドフラッグ⟧は、[走行|そうこう]の[中止|ちゅうし]です。', it: 'La bandiera rossa significa sessione fermata.' },
      { t: '⟦ブルーフラッグ⟧は、[道|みち]をゆずる[合図|あいず]です。', it: 'La bandiera blu invita a lasciar passare.' },
      { t: '⟦チェッカーフラッグ⟧は、レースの[終|お]わりです。', it: 'La bandiera a scacchi segna la fine della gara.' },
      { t: '⟦ブラックフラッグ⟧は、⟦[失格|しっかく]⟧の[合図|あいず]です。', it: 'La bandiera nera significa squalifica.' },
      { t: '⟦セーフティカー⟧が[出|で]ると、[皆|みな][列|れつ]で[走|はし]ります。', it: 'Con la safety car tutti procedono in fila.' }
    ],
    gloss: [
      { w: '旗', r: 'はた', it: 'bandiera' },
      { w: '危険', r: 'きけん', it: 'pericolo' },
      { w: '合図', r: 'あいず', it: 'segnale' },
      { w: 'イエローフラッグ', r: 'いえろーふらっぐ', it: 'bandiera gialla' },
      { w: 'レッドフラッグ', r: 'れっどふらっぐ', it: 'bandiera rossa' },
      { w: 'ブルーフラッグ', r: 'ぶるーふらっぐ', it: 'bandiera blu' },
      { w: 'チェッカーフラッグ', r: 'ちぇっかーふらっぐ', it: 'bandiera a scacchi' },
      { w: 'ブラックフラッグ', r: 'ぶらっくふらっぐ', it: 'bandiera nera' },
      { w: '失格', r: 'しっかく', it: 'squalifica' },
      { w: 'セーフティカー', r: 'せーふてぃかー', it: 'safety car' }
    ]
  });

  A('f1-il-circuito', {
    title: { t: 'サーキット', it: 'Il circuito' },
    sum: [
      { t: '⟦サーキット⟧は、[何度|なんど]も[回|まわ]る[道|みち]です。', it: 'Il circuito è un percorso chiuso che si percorre più volte.' },
      { t: '⟦コーナー⟧には、いろいろな[形|かたち]があります。', it: 'Le curve hanno forme diverse.' },
      { t: '⟦ストレート⟧では、[速度|そくど]が[一番|いちばん][出|で]ます。', it: 'È sui rettilinei che si raggiunge la velocità massima.' },
      { t: 'コーナーの[前|まえ]で、⟦ブレーキ⟧を[強|つよ]くかけます。', it: 'Prima della curva si frena forte.' },
      { t: '[一周|いっしゅう]は、[三|みっ]つの⟦セクター⟧に[分|わ]かれます。', it: 'Un giro è diviso in tre settori.' },
      { t: '⟦ディーアールエス⟧は、[追|お]い[越|こ]しを[助|たす]けます。', it: 'Il DRS aiuta i sorpassi.' },
      { t: '⟦[市街地|しがいち]⟧のコースは、[壁|かべ]が[近|ちか]いです。', it: 'Nei circuiti cittadini i muri sono vicini alla pista.' }
    ],
    gloss: [
      { w: 'サーキット', r: 'さーきっと', it: 'circuito' },
      { w: 'コーナー', r: 'こーなー', it: 'curva' },
      { w: 'ストレート', r: 'すとれーと', it: 'rettilineo' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: 'セクター', r: 'せくたー', it: 'settore' },
      { w: 'ディーアールエス', r: 'でぃーあーるえす', it: 'DRS' },
      { w: '市街地', r: 'しがいち', it: 'centro urbano (circuito cittadino)' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '壁', r: 'かべ', it: 'muro' },
      { w: '追い越し', r: 'おいこし', it: 'sorpasso' }
    ]
  });

  A('f1-la-monoposto-in-sintesi', {
    title: { t: 'エフワンの[車|くるま]', it: 'La monoposto in sintesi' },
    sum: [
      { t: 'エフワンの[車|くるま]は、[速|はや]く[走|はし]るための[車|くるま]です。', it: 'Una F1 è fatta per andare veloce sul giro.' },
      { t: '⟦モノポスト⟧は、[席|せき]が[一|ひと]つの[車|くるま]です。', it: 'La monoposto è un’auto con un solo posto.' },
      { t: '⟦パワーユニット⟧は、エンジンと[電気|でんき]の[力|ちから]です。', it: 'La power unit unisce motore e parte elettrica.' },
      { t: '[車|くるま]は[軽|かる]くて、とても[力|ちから]が[強|つよ]いです。', it: 'L’auto è leggera e molto potente.' },
      { t: '⟦ダウンフォース⟧が、[車|くるま]を[地面|じめん]に[押|お]します。', it: 'Il carico aerodinamico spinge l’auto contro l’asfalto.' },
      { t: '⟦タイヤ⟧だけが、[路面|ろめん]にふれます。', it: 'Solo le gomme toccano la strada.' },
      { t: '⟦モノコック⟧は、⟦ドライバー⟧を[守|まも]ります。', it: 'La monoscocca protegge il pilota.' }
    ],
    gloss: [
      { w: 'モノポスト', r: 'ものぽすと', it: 'monoposto' },
      { w: 'パワーユニット', r: 'ぱわーゆにっと', it: 'power unit (motore ibrido)' },
      { w: 'ダウンフォース', r: 'だうんふぉーす', it: 'carico aerodinamico' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma, pneumatico' },
      { w: 'モノコック', r: 'ものこっく', it: 'monoscocca' },
      { w: 'ドライバー', r: 'どらいばー', it: 'pilota' },
      { w: '地面', r: 'じめん', it: 'suolo' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '電気', r: 'でんき', it: 'elettricità' },
      { w: '席', r: 'せき', it: 'posto, sedile' }
    ]
  });

  A('f1-guardare-una-gara', {
    title: { t: 'レースの[見|み]かた', it: 'Come guardare e capire una gara' },
    sum: [
      { t: '⟦タイミングタワー⟧は、⟦[順位|じゅんい]⟧を[見|み]せる[表|ひょう]です。', it: 'La torre dei tempi mostra la classifica.' },
      { t: '⟦ギャップ⟧は、トップとの[差|さ]です。', it: 'Il gap è il distacco dal primo.' },
      { t: '⟦インターバル⟧は、[前|まえ]の[車|くるま]との[差|さ]です。', it: 'L’intervallo è il distacco dall’auto davanti.' },
      { t: '⟦[紫|むらさき]⟧は、[全員|ぜんいん]で[一番|いちばん][速|はや]いタイムです。', it: 'Il viola indica il tempo più veloce di tutti.' },
      { t: '[画面|がめん]の⟦タイヤ⟧で、[種類|しゅるい]が[分|わ]かります。', it: 'Dal simbolo della gomma si capisce il tipo montato.' },
      { t: '⟦ピット⟧に[入|はい]ると、[約|やく][二十秒|にじゅうびょう][遅|おく]れます。', it: 'Entrare ai box fa perdere circa venti secondi.' },
      { t: '⟦ペナルティ⟧は、[順位|じゅんい]を[変|か]えます。', it: 'Le penalità cambiano l’ordine d’arrivo.' }
    ],
    gloss: [
      { w: 'タイミングタワー', r: 'たいみんぐたわー', it: 'torre dei tempi' },
      { w: '順位', r: 'じゅんい', it: 'classifica, posizione' },
      { w: 'ギャップ', r: 'ぎゃっぷ', it: 'distacco dal leader' },
      { w: 'インターバル', r: 'いんたーばる', it: 'distacco dall’auto davanti' },
      { w: '紫', r: 'むらさき', it: 'viola' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: 'ピット', r: 'ぴっと', it: 'box, corsia dei box' },
      { w: 'ペナルティ', r: 'ぺなるてぃ', it: 'penalità' },
      { w: '画面', r: 'がめん', it: 'schermo' },
      { w: '差', r: 'さ', it: 'differenza, distacco' }
    ]
  });

  A('f1-glossario-e-numeri', {
    title: { t: '[言葉|ことば]の[整理|せいり]', it: 'Glossario e numeri di riferimento' },
    sum: [
      { t: '⟦ポールポジション⟧は、[一番|いちばん][前|まえ]のスタート[位置|いち]です。', it: 'La pole position è il primo posto in griglia.' },
      { t: '⟦パルクフェルメ⟧では、[車|くるま]を[自由|じゆう]に[変|か]えられません。', it: 'Nel parco chiuso non si può modificare liberamente l’auto.' },
      { t: '⟦スティント⟧は、ピットとピットの[間|あいだ]です。', it: 'Lo stint è il tratto tra due soste ai box.' },
      { t: '⟦アンダーカット⟧は、[先|さき]にピットに[入|はい]る[作戦|さくせん]です。', it: 'L’undercut consiste nel fermarsi prima ai box.' },
      { t: '⟦オーバーカット⟧は、[後|あと]でピットに[入|はい]る[作戦|さくせん]です。', it: 'L’overcut consiste nel fermarsi dopo ai box.' },
      { t: '⟦デグラデーション⟧は、タイヤの[性能|せいのう]の[低下|ていか]です。', it: 'Il degrado è il calo di prestazione delle gomme.' },
      { t: '⟦ディーエヌエフ⟧は、[完走|かんそう]できなかった[意味|いみ]です。', it: 'DNF significa che il pilota non ha finito la gara.' }
    ],
    gloss: [
      { w: 'ポールポジション', r: 'ぽーるぽじしょん', it: 'pole position' },
      { w: 'パルクフェルメ', r: 'ぱるくふぇるめ', it: 'parco chiuso' },
      { w: 'スティント', r: 'すてぃんと', it: 'stint' },
      { w: 'アンダーカット', r: 'あんだーかっと', it: 'undercut' },
      { w: 'オーバーカット', r: 'おーばーかっと', it: 'overcut' },
      { w: 'デグラデーション', r: 'でぐらでーしょん', it: 'degrado' },
      { w: 'ディーエヌエフ', r: 'でぃーえぬえふ', it: 'DNF (ritirato)' },
      { w: '作戦', r: 'さくせん', it: 'tattica, strategia' },
      { w: '完走', r: 'かんそう', it: 'finire la gara' },
      { w: '性能', r: 'せいのう', it: 'prestazione' }
    ]
  });

  A('f1-formato-del-weekend', {
    title: { t: '[週末|しゅうまつ]の[形式|けいしき]', it: 'Il formato del weekend: qualifiche, sprint e griglia' },
    sum: [
      { t: '⟦[予選|よせん]⟧は、[三|みっ]つの[部|ぶ]に[分|わ]かれます。', it: 'Le qualifiche sono divise in tre parti.' },
      { t: '[最初|さいしょ]の[二|ふた]つで、[五台|ごだい]ずつ[落|お]ちます。', it: 'Nelle prime due parti vengono eliminate cinque auto ciascuna.' },
      { t: '⟦グリッド⟧は、[二列|にれつ]にずらして[並|なら]びます。', it: 'La griglia è su due colonne sfalsate.' },
      { t: '⟦スプリント[予選|よせん]⟧は、[短|みじか]い[時間|じかん]で[行|おこな]います。', it: 'La qualifica sprint ha tempi più brevi.' },
      { t: '⟦スプリント⟧は、[約|やく][百|ひゃく]キロの[短|みじか]いレースです。', it: 'La sprint è una gara breve di circa cento chilometri.' },
      { t: 'スプリントでは、[八人|はちにん]が[点|てん]をもらいます。', it: 'Nella sprint vanno a punti otto piloti.' },
      { t: '⟦グリッドペナルティ⟧は、⟦[順位|じゅんい]⟧を[後|うし]ろに[下|さ]げます。', it: 'La penalità di griglia fa arretrare di posizione.' }
    ],
    gloss: [
      { w: '予選', r: 'よせん', it: 'qualifiche' },
      { w: 'グリッド', r: 'ぐりっど', it: 'griglia di partenza' },
      { w: 'スプリント予選', r: 'すぷりんとよせん', it: 'qualifica sprint' },
      { w: 'スプリント', r: 'すぷりんと', it: 'gara sprint' },
      { w: 'グリッドペナルティ', r: 'ぐりっどぺなるてぃ', it: 'penalità di griglia' },
      { w: '順位', r: 'じゅんい', it: 'posizione' },
      { w: 'ポールポジション', r: 'ぽーるぽじしょん', it: 'pole position' },
      { w: '週末', r: 'しゅうまつ', it: 'weekend' },
      { w: '形式', r: 'けいしき', it: 'formato' }
    ]
  });

  A('f1-la-gara-distanza-punti', {
    title: { t: 'レースの[距離|きょり]と[点|てん]', it: 'La gara: partenza, distanza, tempo massimo e punti' },
    sum: [
      { t: '⟦フォーメーションラップ⟧のあとで、レースが[始|はじ]まります。', it: 'La gara inizia dopo il giro di formazione.' },
      { t: '[五|いつ]つの[赤|あか]いライトが[消|き]えると、⟦スタート⟧です。', it: 'Quando si spengono le cinque luci rosse, è la partenza.' },
      { t: '[三百五|さんびゃくご]キロを[超|こ]える[最少|さいしょう]の⟦[周回|しゅうかい]⟧で[走|はし]ります。', it: 'Si corre il numero minimo di giri che supera i 305 km.' },
      { t: '⟦[制限時間|せいげんじかん]⟧は、[二|に][時間|じかん]です。', it: 'Il tempo massimo è di due ore.' },
      { t: '⟦[赤旗|あかはた]⟧の[時|とき]は、[合計|ごうけい][三|さん][時間|じかん]までです。', it: 'Con la bandiera rossa il totale arriva a tre ore.' },
      { t: '⟦コンストラクターズ⟧は、[二台|にだい]の[点|てん]を[足|た]します。', it: 'Per i costruttori si sommano i punti delle due auto.' },
      { t: '[距離|きょり]の[七十五|しちじゅうご]パーセントを[超|こ]えると、[全部|ぜんぶ]の[点|てん]が[出|で]ます。', it: 'Oltre il 75% della distanza si assegnano punti pieni.' }
    ],
    gloss: [
      { w: 'フォーメーションラップ', r: 'ふぉーめーしょんらっぷ', it: 'giro di formazione' },
      { w: 'スタート', r: 'すたーと', it: 'partenza' },
      { w: '周回', r: 'しゅうかい', it: 'giro (numero di giri)' },
      { w: '制限時間', r: 'せいげんじかん', it: 'tempo massimo' },
      { w: 'コンストラクターズ', r: 'こんすとらくたーず', it: 'costruttori' },
      { w: '距離', r: 'きょり', it: 'distanza' },
      { w: '赤旗', r: 'あかはた', it: 'bandiera rossa' },
      { w: '合計', r: 'ごうけい', it: 'totale' },
      { w: '点', r: 'てん', it: 'punto' },
      { w: '全部', r: 'ぜんぶ', it: 'tutto, pieno' }
    ]
  });

  A('f1-safety-car-vsc-bandiera-rossa', {
    title: { t: 'セーフティカーと[赤旗|あかはた]', it: 'Safety car, VSC e bandiera rossa' },
    sum: [
      { t: '[事故|じこ]があると、レースの[速|はや]さを[落|お]とします。', it: 'In caso di incidente si rallenta la corsa.' },
      { t: '⟦セーフティカー⟧の[後|うし]ろに、[全員|ぜんいん]が[並|なら]びます。', it: 'Tutti si mettono in fila dietro la safety car.' },
      { t: 'ほとんどの[場合|ばあい]、[追|お]い[越|こ]しは⟦[禁止|きんし]⟧です。', it: 'Nella maggior parte dei casi i sorpassi sono vietati.' },
      { t: '⟦ピット⟧で[止|と]まる[損|そん]が、[少|すく]なくなります。', it: 'Fermarsi ai box fa perdere meno tempo.' },
      { t: '⟦バーチャルセーフティカー⟧では、[全員|ぜんいん]がゆっくり[走|はし]ります。', it: 'Con la virtual safety car tutti vanno piano.' },
      { t: 'その[間|あいだ]、[前|まえ]の[車|くるま]との⟦[差|さ]⟧は[変|か]わりません。', it: 'In quel periodo i distacchi non cambiano.' },
      { t: '⟦レッドフラッグ⟧は、レースを[止|と]めます。', it: 'La bandiera rossa ferma la gara.' }
    ],
    gloss: [
      { w: 'セーフティカー', r: 'せーふてぃかー', it: 'safety car' },
      { w: 'バーチャルセーフティカー', r: 'ばーちゃるせーふてぃかー', it: 'virtual safety car (VSC)' },
      { w: 'レッドフラッグ', r: 'れっどふらっぐ', it: 'bandiera rossa' },
      { w: 'ピット', r: 'ぴっと', it: 'box' },
      { w: '禁止', r: 'きんし', it: 'divieto' },
      { w: '差', r: 'さ', it: 'distacco' },
      { w: '事故', r: 'じこ', it: 'incidente' },
      { w: '全員', r: 'ぜんいん', it: 'tutti' },
      { w: '追い越し', r: 'おいこし', it: 'sorpasso' }
    ]
  });

  A('f1-penalita-e-commissari', {
    title: { t: '[罰|ばつ]と[審判団|しんぱんだん]', it: 'Penalità, commissari e punti patente' },
    sum: [
      { t: '⟦[審判団|しんぱんだん]⟧が、[罰|ばつ]を[決|き]めます。', it: 'I commissari decidono le penalità.' },
      { t: '⟦タイムペナルティ⟧は、[五秒|ごびょう]か[十秒|じゅうびょう]です。', it: 'La penalità di tempo è di cinque o dieci secondi.' },
      { t: '⟦ドライブスルー⟧は、ピットを[止|と]まらずに[通|とお]ります。', it: 'Nel drive-through si percorre la corsia box senza fermarsi.' },
      { t: '⟦ストップアンドゴー⟧は、[決|き]まった[時間|じかん]だけ[止|と]まります。', it: 'Nello stop and go ci si ferma per un tempo stabilito.' },
      { t: '[罰|ばつ]で、[順位|じゅんい]が[変|か]わることがあります。', it: 'Una penalità può cambiare l’ordine d’arrivo.' },
      { t: '⟦スーパーライセンス⟧に、⟦[違反|いはん]⟧の[点|てん]が[付|つ]きます。', it: 'Le infrazioni aggiungono punti alla super licenza.' },
      { t: '[十二|じゅうに]か[月|げつ]で[十二|じゅうに][点|てん]たまると、[一|ひと]レース[休|やす]みます。', it: 'Con dodici punti in dodici mesi si salta una gara.' }
    ],
    gloss: [
      { w: '審判団', r: 'しんぱんだん', it: 'commissari sportivi' },
      { w: 'タイムペナルティ', r: 'たいむぺなるてぃ', it: 'penalità di tempo' },
      { w: 'ドライブスルー', r: 'どらいぶするー', it: 'drive-through' },
      { w: 'ストップアンドゴー', r: 'すとっぷあんどごー', it: 'stop and go' },
      { w: 'スーパーライセンス', r: 'すーぱーらいせんす', it: 'super licenza' },
      { w: '違反', r: 'いはん', it: 'infrazione' },
      { w: '罰', r: 'ばつ', it: 'penalità, sanzione' },
      { w: '順位', r: 'じゅんい', it: 'posizione' },
      { w: '点', r: 'てん', it: 'punto' }
    ]
  });

  A('f1-gomme-e-carburante', {
    title: { t: 'タイヤと[燃料|ねんりょう]', it: 'Gomme e carburante nel regolamento' },
    sum: [
      { t: '⟦ピレリ⟧が、すべての⟦タイヤ⟧を[作|つく]ります。', it: 'La Pirelli fornisce tutte le gomme.' },
      { t: '[週末|しゅうまつ]ごとに、[三|みっ]つの⟦コンパウンド⟧を[選|えら]びます。', it: 'Per ogni weekend si scelgono tre mescole.' },
      { t: '⟦ソフト⟧は、グリップが[強|つよ]くて[長持|ながも]ちしません。', it: 'La soft ha più aderenza, ma dura poco.' },
      { t: '[乾|かわ]いた[路面|ろめん]では、[二|ふた]つ[以上|いじょう]の[種類|しゅるい]を[使|つか]います。', it: 'Sull’asciutto si usano almeno due tipi di mescola.' },
      { t: '[雨|あめ]には、⟦インターミディエイト⟧と⟦フルウェット⟧があります。', it: 'Per la pioggia ci sono le intermedie e le full wet.' },
      { t: '⟦[給油|きゅうゆ]⟧は、[禁止|きんし]されています。', it: 'Il rifornimento è vietato.' },
      { t: '⟦[燃料|ねんりょう]⟧は、[百十|ひゃくじゅう]キロまでです。', it: 'Il carburante arriva a un massimo di centodieci chilogrammi.' }
    ],
    gloss: [
      { w: 'ピレリ', r: 'ぴれり', it: 'Pirelli' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: 'コンパウンド', r: 'こんぱうんど', it: 'mescola' },
      { w: 'ソフト', r: 'そふと', it: 'morbida' },
      { w: 'インターミディエイト', r: 'いんたーみでぃえいと', it: 'intermedia' },
      { w: 'フルウェット', r: 'ふるうぇっと', it: 'gomma da bagnato estremo' },
      { w: '給油', r: 'きゅうゆ', it: 'rifornimento' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '雨', r: 'あめ', it: 'pioggia' }
    ]
  });

  A('f1-regolamento-tecnico-principale', {
    title: { t: '[技術規則|ぎじゅつきそく]', it: 'Il regolamento tecnico principale' },
    sum: [
      { t: '⟦[技術規則|ぎじゅつきそく]⟧は、[車|くるま]の[作|つく]り[方|かた]を[決|き]めます。', it: 'Il regolamento tecnico stabilisce come costruire l’auto.' },
      { t: '[安全|あんぜん]と[公平|こうへい]のために、[寸法|すんぽう]や[重|おも]さも[決|き]めます。', it: 'Per sicurezza ed equità fissa anche dimensioni e peso.' },
      { t: '⟦フロア⟧の[下|した]の⟦プランク⟧が[減|へ]りすぎると、[失格|しっかく]です。', it: 'Se il pattino sotto il fondo si consuma troppo, c’è la squalifica.' },
      { t: '⟦ディーアールエス⟧は、[後|うし]ろのウイングを[開|ひら]きます。', it: 'Il DRS apre l’ala posteriore.' },
      { t: '⟦パワーユニット⟧は、ブイシックスのハイブリッドです。', it: 'La power unit è un V6 ibrido.' },
      { t: '[部品|ぶひん]の[一部|いちぶ]は、⟦[凍結|とうけつ]⟧されています。', it: 'Una parte dei componenti è congelata.' },
      { t: '⟦パルクフェルメ⟧では、[車|くるま]を[自由|じゆう]に[変|か]えられません。', it: 'Nel parco chiuso non si può modificare liberamente l’auto.' }
    ],
    gloss: [
      { w: '技術規則', r: 'ぎじゅつきそく', it: 'regolamento tecnico' },
      { w: 'フロア', r: 'ふろあ', it: 'fondo della vettura' },
      { w: 'プランク', r: 'ぷらんく', it: 'pattino (plank)' },
      { w: 'ディーアールエス', r: 'でぃーあーるえす', it: 'DRS' },
      { w: 'パワーユニット', r: 'ぱわーゆにっと', it: 'power unit' },
      { w: '凍結', r: 'とうけつ', it: 'congelamento (omologazione)' },
      { w: 'パルクフェルメ', r: 'ぱるくふぇるめ', it: 'parco chiuso' },
      { w: '失格', r: 'しっかく', it: 'squalifica' },
      { w: '部品', r: 'ぶひん', it: 'componente' },
      { w: '寸法', r: 'すんぽう', it: 'dimensioni' }
    ]
  });

  A('f1-budget-cap', {
    title: { t: 'バジェットキャップ', it: 'Budget cap e regole finanziarie' },
    sum: [
      { t: '⟦バジェットキャップ⟧は、お[金|かね]の⟦[上限|じょうげん]⟧です。', it: 'Il budget cap è un tetto di spesa.' },
      { t: 'お[金持|かねも]ちのチームの[有利|ゆうり]を[減|へ]らします。', it: 'Riduce il vantaggio delle squadre più ricche.' },
      { t: '[車|くるま]の[性能|せいのう]に[関係|かんけい]する[費用|ひよう]が、⟦[対象|たいしょう]⟧です。', it: 'Rientrano nel tetto i costi legati alla prestazione dell’auto.' },
      { t: 'ドライバーの[給料|きゅうりょう]は、[対象|たいしょう]に[入|はい]りません。', it: 'Gli stipendi dei piloti non rientrano nel tetto.' },
      { t: '[上限|じょうげん]を[超|こ]えると、⟦[罰金|ばっきん]⟧などがあります。', it: 'Chi supera il tetto riceve sanzioni, come le multe.' },
      { t: '⟦エーティーアール⟧は、⟦[風洞|ふうどう]⟧の[使用|しよう]を[制限|せいげん]します。', it: 'L’ATR limita l’uso della galleria del vento.' },
      { t: '[成績|せいせき]が[悪|わる]いチームは、[風洞|ふうどう]を[多|おお]く[使|つか]えます。', it: 'Le squadre che vanno peggio possono usare di più la galleria del vento.' }
    ],
    gloss: [
      { w: 'バジェットキャップ', r: 'ばじぇっときゃっぷ', it: 'budget cap' },
      { w: '上限', r: 'じょうげん', it: 'limite massimo' },
      { w: '対象', r: 'たいしょう', it: 'oggetto, ambito' },
      { w: '罰金', r: 'ばっきん', it: 'multa' },
      { w: 'エーティーアール', r: 'えーてぃーあーる', it: 'ATR (limiti alle prove aerodinamiche)' },
      { w: '風洞', r: 'ふうどう', it: 'galleria del vento' },
      { w: '費用', r: 'ひよう', it: 'costo' },
      { w: '性能', r: 'せいのう', it: 'prestazione' },
      { w: '給料', r: 'きゅうりょう', it: 'stipendio' },
      { w: '成績', r: 'せいせき', it: 'risultati' }
    ]
  });

  A('f1-governance-fia-fom', {
    title: { t: 'エフアイエーとエフオーエム', it: 'Governance: FIA, FOM e come cambiano le regole' },
    sum: [
      { t: '⟦エフアイエー⟧は、⟦[規則|きそく]⟧を[作|つく]って[守|まも]らせます。', it: 'La FIA scrive le regole e le fa rispettare.' },
      { t: '⟦エフオーエム⟧は、[商業|しょうぎょう]の[部分|ぶぶん]を[担当|たんとう]します。', it: 'La FOM si occupa della parte commerciale.' },
      { t: 'テレビの[権利|けんり]を[売|う]るのも、その[仕事|しごと]です。', it: 'Vendere i diritti televisivi fa parte del suo lavoro.' },
      { t: '⟦コンコルド[協定|きょうてい]⟧は、エフアイエーとチームなどの[契約|けいやく]です。', it: 'Il Concorde Agreement è un contratto tra FIA, squadre e altri.' },
      { t: 'その[契約|けいやく]は、[収入|しゅうにゅう]の[分|わ]け[方|かた]も[決|き]めます。', it: 'Quel contratto stabilisce anche come dividere i ricavi.' },
      { t: '⟦スーパーライセンス⟧がないと、エフワンで[走|はし]れません。', it: 'Senza super licenza non si può correre in F1.' },
      { t: '[規則|きそく]を[変|か]える[時|とき]は、⟦[委員会|いいんかい]⟧で[話|はな]し[合|あ]います。', it: 'Per cambiare le regole se ne discute in commissione.' }
    ],
    gloss: [
      { w: 'エフアイエー', r: 'えふあいえー', it: 'FIA' },
      { w: 'エフオーエム', r: 'えふおーえむ', it: 'FOM (promotore)' },
      { w: '規則', r: 'きそく', it: 'regola' },
      { w: 'コンコルド協定', r: 'こんこるどきょうてい', it: 'Concorde Agreement' },
      { w: 'スーパーライセンス', r: 'すーぱーらいせんす', it: 'super licenza' },
      { w: '委員会', r: 'いいんかい', it: 'commissione' },
      { w: '契約', r: 'けいやく', it: 'contratto' },
      { w: '収入', r: 'しゅうにゅう', it: 'ricavi, entrate' },
      { w: '商業', r: 'しょうぎょう', it: 'parte commerciale' },
      { w: '権利', r: 'けんり', it: 'diritto' }
    ]
  });

  A('f1-telaio-e-monoscocca', {
    title: { t: 'シャシーとモノコック', it: 'Telaio e monoscocca' },
    sum: [
      { t: '⟦シャシー⟧は、[部品|ぶひん]を[支|ささ]えて、ドライバーを[守|まも]ります。', it: 'Il telaio sostiene i componenti e protegge il pilota.' },
      { t: '⟦カーボンファイバー⟧は、[軽|かる]くて[強|つよ]い[材料|ざいりょう]です。', it: 'La fibra di carbonio è un materiale leggero e resistente.' },
      { t: '⟦モノコック⟧は、カーボンファイバーを[重|かさ]ねて[作|つく]ります。', it: 'La monoscocca si costruisce sovrapponendo strati di fibra di carbonio.' },
      { t: '⟦ハニカム⟧は、[軽|かる]いのに[硬|かた]い[芯|しん]です。', it: 'Il nido d’ape è un nucleo leggero ma rigido.' },
      { t: '⟦ハロ⟧は、ドライバーの[頭|あたま]を[守|まも]ります。', it: 'L’halo protegge la testa del pilota.' },
      { t: '⟦[衝突試験|しょうとつしけん]⟧で、[安全|あんぜん]を[確|たし]かめます。', it: 'Con i crash test si verifica la sicurezza.' },
      { t: '[最低|さいてい]の[重|おも]さが[決|き]まっていて、⟦バラスト⟧で[合|あ]わせます。', it: 'Il peso minimo è fissato e si regola con la zavorra.' }
    ],
    gloss: [
      { w: 'シャシー', r: 'しゃしー', it: 'telaio' },
      { w: 'カーボンファイバー', r: 'かーぼんふぁいばー', it: 'fibra di carbonio' },
      { w: 'モノコック', r: 'ものこっく', it: 'monoscocca' },
      { w: 'ハニカム', r: 'はにかむ', it: 'nido d’ape' },
      { w: 'ハロ', r: 'はろ', it: 'halo' },
      { w: '衝突試験', r: 'しょうとつしけん', it: 'crash test' },
      { w: 'バラスト', r: 'ばらすと', it: 'zavorra' },
      { w: 'ドライバー', r: 'どらいばー', it: 'pilota' },
      { w: '材料', r: 'ざいりょう', it: 'materiale' },
      { w: '部品', r: 'ぶひん', it: 'componente' }
    ]
  });

  A('f1-power-unit-ibrida', {
    title: { t: 'ハイブリッドのパワーユニット', it: 'La power unit ibrida' },
    sum: [
      { t: '⟦パワーユニット⟧は、ハイブリッドのエンジンです。', it: 'La power unit è un motore ibrido.' },
      { t: '⟦ブイシックス⟧のエンジンに、⟦ターボ⟧がついています。', it: 'Il motore è un V6 dotato di turbo.' },
      { t: '⟦エムジーユーケー⟧は、ブレーキの[時|とき]に[電気|でんき]を[作|つく]ります。', it: 'L’MGU-K produce elettricità durante la frenata.' },
      { t: 'エムジーユーエイチは、ターボから[電気|でんき]を[作|つく]ります。', it: 'L’MGU-H produce elettricità a partire dal turbo.' },
      { t: '⟦バッテリー⟧は、[電気|でんき]をためます。', it: 'La batteria accumula l’elettricità.' },
      { t: 'エムジーユーケーの[力|ちから]は、[最大|さいだい][百二十|ひゃくにじゅう]⟦キロワット⟧です。', it: 'La potenza massima dell’MGU-K è di centoventi kilowatt.' },
      { t: '[全部|ぜんぶ]で、[約|やく][千|せん]⟦[馬力|ばりき]⟧になります。', it: 'In totale si arriva a circa mille cavalli.' }
    ],
    gloss: [
      { w: 'パワーユニット', r: 'ぱわーゆにっと', it: 'power unit' },
      { w: 'ブイシックス', r: 'ぶいしっくす', it: 'V6' },
      { w: 'ターボ', r: 'たーぼ', it: 'turbo' },
      { w: 'エムジーユーケー', r: 'えむじーゆーけー', it: 'MGU-K' },
      { w: 'エムジーユーエイチ', r: 'えむじーゆーえいち', it: 'MGU-H' },
      { w: 'バッテリー', r: 'ばってりー', it: 'batteria' },
      { w: 'キロワット', r: 'きろわっと', it: 'kilowatt' },
      { w: '馬力', r: 'ばりき', it: 'cavalli (potenza)' },
      { w: '電気', r: 'でんき', it: 'elettricità' },
      { w: '最大', r: 'さいだい', it: 'massimo' }
    ]
  });

  A('f1-ers-e-gestione-energia', {
    title: { t: 'イーアールエスと[電気|でんき]の[管理|かんり]', it: 'ERS e gestione dell’energia' },
    sum: [
      { t: '⟦イーアールエス⟧は、[電気|でんき]を[回収|かいしゅう]して[使|つか]う[仕組|しく]みです。', it: 'L’ERS è il sistema che recupera e riusa l’energia elettrica.' },
      { t: 'ブレーキの[時|とき]、⟦エムジーユーケー⟧が[電気|でんき]を[作|つく]ります。', it: 'In frenata l’MGU-K produce elettricità.' },
      { t: '[一周|いっしゅう]に⟦[回収|かいしゅう]⟧できる[量|りょう]には、[限|かぎ]りがあります。', it: 'La quantità recuperabile in un giro ha un limite.' },
      { t: '⟦デプロイ⟧は、[電気|でんき]を[使|つか]って[加速|かそく]することです。', it: 'Il deploy è usare l’elettricità per accelerare.' },
      { t: '[一周|いっしゅう]で、[最大|さいだい][四|よん]⟦メガジュール⟧まで[使|つか]えます。', it: 'In un giro si possono usare al massimo quattro megajoule.' },
      { t: '[入|い]れる[電気|でんき]が[少|すく]ないと、⟦バッテリー⟧は[減|へ]ります。', it: 'Se l’energia in ingresso è poca, la batteria si scarica.' },
      { t: 'ドライバーは、ハンドルで[使|つか]い[方|かた]を[変|か]えます。', it: 'Il pilota cambia modalità d’uso dal volante.' }
    ],
    gloss: [
      { w: 'イーアールエス', r: 'いーあーるえす', it: 'ERS (recupero energia)' },
      { w: 'エムジーユーケー', r: 'えむじーゆーけー', it: 'MGU-K' },
      { w: '回収', r: 'かいしゅう', it: 'recupero' },
      { w: 'デプロイ', r: 'でぷろい', it: 'deploy (uso dell’energia)' },
      { w: 'メガジュール', r: 'めがじゅーる', it: 'megajoule' },
      { w: 'バッテリー', r: 'ばってりー', it: 'batteria' },
      { w: '電気', r: 'でんき', it: 'elettricità' },
      { w: '加速', r: 'かそく', it: 'accelerazione' },
      { w: '一周', r: 'いっしゅう', it: 'un giro' }
    ]
  });

  A('f1-trasmissione-e-cambio', {
    title: { t: 'ギアボックス', it: 'Trasmissione e cambio' },
    sum: [
      { t: '[後|うし]ろの⟦[車輪|しゃりん]⟧が、[車|くるま]を[進|すす]めます。', it: 'Sono le ruote posteriori a spingere l’auto.' },
      { t: '⟦ギアボックス⟧は、エンジンの[回転|かいてん]を[合|あ]わせます。', it: 'Il cambio adatta il regime del motore.' },
      { t: '⟦ギア⟧は、[前進|ぜんしん]に[八|はち][段|だん]あります。', it: 'Le marce in avanti sono otto.' },
      { t: '⟦クラッチ⟧は、おもにスタートで[使|つか]います。', it: 'La frizione si usa soprattutto alla partenza.' },
      { t: 'ギアチェンジは、ハンドルの⟦パドル⟧で[行|おこな]います。', it: 'Si cambia marcia con le palette del volante.' },
      { t: '⟦ディファレンシャル⟧は、[左右|さゆう]の[車輪|しゃりん]の[速|はや]さを[変|か]えます。', it: 'Il differenziale permette alle ruote di girare a velocità diverse.' },
      { t: '[同|おな]じギアボックスを、[何|なん]レースか[使|つか]います。', it: 'Lo stesso cambio si usa per diverse gare.' }
    ],
    gloss: [
      { w: 'ギアボックス', r: 'ぎあぼっくす', it: 'cambio (scatola)' },
      { w: 'ギア', r: 'ぎあ', it: 'marcia' },
      { w: 'クラッチ', r: 'くらっち', it: 'frizione' },
      { w: 'パドル', r: 'ぱどる', it: 'paletta' },
      { w: 'ディファレンシャル', r: 'でぃふぁれんしゃる', it: 'differenziale' },
      { w: '車輪', r: 'しゃりん', it: 'ruota' },
      { w: '回転', r: 'かいてん', it: 'giri, rotazione' },
      { w: 'ギアチェンジ', r: 'ぎあちぇんじ', it: 'cambiata' },
      { w: '前進', r: 'ぜんしん', it: 'avanzamento' }
    ]
  });

  A('f1-freni', {
    title: { t: 'ブレーキ', it: 'I freni' },
    sum: [
      { t: '⟦ブレーキ⟧は、[加速|かそく]より[強|つよ]く[効|き]きます。', it: 'La frenata è più forte dell’accelerazione.' },
      { t: 'ブレーキは、⟦カーボン⟧で[作|つく]られています。', it: 'I freni sono fatti di carbonio.' },
      { t: '⟦ディスク⟧と⟦パッド⟧は、[高|たか]い[温度|おんど]に[耐|た]えます。', it: 'Dischi e pastiglie resistono a temperature altissime.' },
      { t: '⟦キャリパー⟧が、パッドをディスクに[押|お]しつけます。', it: 'La pinza preme le pastiglie sul disco.' },
      { t: '⟦ブレーキバイワイヤ⟧は、[後|うし]ろの[電子|でんし]ブレーキです。', it: 'Il brake-by-wire è il freno elettronico posteriore.' },
      { t: '[速度|そくど]が[二倍|にばい]なら、[止|と]まる[距離|きょり]は[四倍|よんばい]です。', it: 'Se la velocità raddoppia, lo spazio di frenata quadruplica.' },
      { t: '⟦ブレーキバイアス⟧は、[前後|ぜんご]の[配分|はいぶん]を[決|き]めます。', it: 'Il bilanciamento della frenata decide la ripartizione avanti e dietro.' }
    ],
    gloss: [
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: 'カーボン', r: 'かーぼん', it: 'carbonio' },
      { w: 'ディスク', r: 'でぃすく', it: 'disco' },
      { w: 'パッド', r: 'ぱっど', it: 'pastiglia' },
      { w: 'キャリパー', r: 'きゃりぱー', it: 'pinza' },
      { w: 'ブレーキバイワイヤ', r: 'ぶれーきばいわいや', it: 'brake-by-wire' },
      { w: 'ブレーキバイアス', r: 'ぶれーきばいあす', it: 'ripartizione della frenata' },
      { w: '温度', r: 'おんど', it: 'temperatura' },
      { w: '距離', r: 'きょり', it: 'distanza' },
      { w: '配分', r: 'はいぶん', it: 'ripartizione' }
    ]
  });

  A('f1-sospensioni-e-sterzo', {
    title: { t: 'サスペンションとステアリング', it: 'Sospensioni e sterzo' },
    sum: [
      { t: '⟦サスペンション⟧は、[車輪|しゃりん]とシャシーをつなぎます。', it: 'Le sospensioni collegano le ruote al telaio.' },
      { t: 'タイヤを、できるだけ[路面|ろめん]につけておきます。', it: 'Tengono la gomma a contatto con l’asfalto il più possibile.' },
      { t: '⟦プッシュロッド⟧は[押|お]し、⟦プルロッド⟧は[引|ひ]きます。', it: 'Il push-rod spinge, il pull-rod tira.' },
      { t: '⟦スプリング⟧は、[力|ちから]をためます。', it: 'La molla accumula energia.' },
      { t: '⟦ダンパー⟧は、スプリングの[動|うご]きをおさえます。', it: 'L’ammortizzatore smorza il movimento della molla.' },
      { t: '⟦アンチロールバー⟧は、[曲|ま]がる[時|とき]の[傾|かたむ]きをおさえます。', it: 'La barra antirollio limita l’inclinazione in curva.' },
      { t: '⟦ステアリング⟧は、ラックアンドピニオンです。', it: 'Lo sterzo è a cremagliera.' }
    ],
    gloss: [
      { w: 'サスペンション', r: 'さすぺんしょん', it: 'sospensioni' },
      { w: 'プッシュロッド', r: 'ぷっしゅろっど', it: 'push-rod' },
      { w: 'プルロッド', r: 'ぷるろっど', it: 'pull-rod' },
      { w: 'スプリング', r: 'すぷりんぐ', it: 'molla' },
      { w: 'ダンパー', r: 'だんぱー', it: 'ammortizzatore' },
      { w: 'アンチロールバー', r: 'あんちろーるばー', it: 'barra antirollio' },
      { w: 'ステアリング', r: 'すてありんぐ', it: 'sterzo' },
      { w: '車輪', r: 'しゃりん', it: 'ruota' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' }
    ]
  });

  A('f1-raffreddamento-e-affidabilita', {
    title: { t: '[冷却|れいきゃく]と[信頼性|しんらいせい]', it: 'Raffreddamento e affidabilità' },
    sum: [
      { t: '[燃料|ねんりょう]の[半分|はんぶん]は、⟦[熱|ねつ]⟧になります。', it: 'Metà dell’energia del carburante diventa calore.' },
      { t: '⟦ラジエーター⟧は、サイドポッドにあります。', it: 'I radiatori si trovano nelle fiancate.' },
      { t: '⟦インタークーラー⟧は、ターボの[空気|くうき]を[冷|ひ]やします。', it: 'L’intercooler raffredda l’aria del turbo.' },
      { t: '⟦オイル⟧も、[冷|ひ]やしながら[使|つか]います。', it: 'Anche l’olio si usa tenendolo freddo.' },
      { t: 'パーツには、[使|つか]える[数|かず]の[制限|せいげん]があります。', it: 'Per i componenti c’è un limite al numero utilizzabile.' },
      { t: '⟦テレメトリー⟧が、[部品|ぶひん]の[状態|じょうたい]をピットへ[送|おく]ります。', it: 'La telemetria invia ai box lo stato dei componenti.' },
      { t: '⟦[信頼性|しんらいせい]⟧が[低|ひく]いと、[部品|ぶひん]ひとつで[車|くるま]が[止|と]まります。', it: 'Se l’affidabilità è bassa, basta un componente per fermare l’auto.' }
    ],
    gloss: [
      { w: '熱', r: 'ねつ', it: 'calore' },
      { w: 'ラジエーター', r: 'らじえーたー', it: 'radiatore' },
      { w: 'インタークーラー', r: 'いんたーくーらー', it: 'intercooler' },
      { w: 'オイル', r: 'おいる', it: 'olio' },
      { w: 'テレメトリー', r: 'てれめとりー', it: 'telemetria' },
      { w: '信頼性', r: 'しんらいせい', it: 'affidabilità' },
      { w: '冷却', r: 'れいきゃく', it: 'raffreddamento' },
      { w: '部品', r: 'ぶひん', it: 'componente' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: '空気', r: 'くうき', it: 'aria' }
    ]
  });

  A('f1-sicurezza-e-sostenibilita', {
    title: { t: '[安全|あんぜん]と[環境|かんきょう]', it: 'Sicurezza e sostenibilità' },
    sum: [
      { t: '[安全|あんぜん]は、いくつもの[層|そう]でできています。', it: 'La sicurezza è fatta di più strati.' },
      { t: '[車|くるま]には、⟦ハロ⟧と⟦モノコック⟧があります。', it: 'L’auto ha l’halo e la monoscocca.' },
      { t: '⟦ハンス⟧は、ドライバーの[首|くび]を[守|まも]ります。', it: 'L’HANS protegge il collo del pilota.' },
      { t: '[六点式|ろくてんしき]の⟦シートベルト⟧が、ドライバーを[固定|こてい]します。', it: 'Una cintura a sei punti tiene fermo il pilota.' },
      { t: '⟦ヘルメット⟧と[耐火|たいか]スーツも[使|つか]います。', it: 'Si usano anche il casco e la tuta ignifuga.' },
      { t: '[車|くるま]には、⟦[消火器|しょうかき]⟧もあります。', it: 'L’auto ha anche un estintore.' },
      { t: '[燃料|ねんりょう]は、[二千二十二年|にせんにじゅうにねん]から⟦イーテン⟧です。', it: 'Dal 2022 il carburante è l’E10.' }
    ],
    gloss: [
      { w: 'ハロ', r: 'はろ', it: 'halo' },
      { w: 'モノコック', r: 'ものこっく', it: 'monoscocca' },
      { w: 'ハンス', r: 'はんす', it: 'HANS (protezione del collo)' },
      { w: 'シートベルト', r: 'しーとべると', it: 'cintura di sicurezza' },
      { w: 'ヘルメット', r: 'へるめっと', it: 'casco' },
      { w: '消火器', r: 'しょうかき', it: 'estintore' },
      { w: 'イーテン', r: 'いーてん', it: 'E10 (benzina con 10% di etanolo)' },
      { w: '安全', r: 'あんぜん', it: 'sicurezza' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: '環境', r: 'かんきょう', it: 'ambiente' }
    ]
  });

  A('f1-forze-aerodinamiche', {
    title: { t: '[空気|くうき]の[力|ちから]', it: 'Forze aerodinamiche: carico e resistenza' },
    sum: [
      { t: '⟦ダウンフォース⟧は、[車|くるま]を[下|した]に[押|お]す[力|ちから]です。', it: 'Il carico aerodinamico è la forza che spinge l’auto verso il basso.' },
      { t: '⟦ドラッグ⟧は、[車|くるま]を[遅|おそ]くする[力|ちから]です。', it: 'La resistenza è la forza che rallenta l’auto.' },
      { t: '[翼|つばさ]を[逆|さか]さまにして、[下向|したむ]きの[力|ちから]を[作|つく]ります。', it: 'Si capovolge l’ala per ottenere una forza verso il basso.' },
      { t: '[力|ちから]は、⟦[速度|そくど]⟧の[二乗|にじょう]で[大|おお]きくなります。', it: 'La forza cresce con il quadrato della velocità.' },
      { t: 'ダウンフォースが[増|ふ]えると、⟦グリップ⟧も[増|ふ]えます。', it: 'Con più carico aumenta anche l’aderenza.' },
      { t: '⟦[抵抗|ていこう]⟧が[大|おお]きいと、[多|おお]くのパワーが[必要|ひつよう]です。', it: 'Con molta resistenza serve molta potenza.' },
      { t: '[空気|くうき]の⟦[密度|みつど]⟧が[低|ひく]いと、[力|ちから]は[小|ちい]さくなります。', it: 'Se la densità dell’aria è bassa, la forza diminuisce.' }
    ],
    gloss: [
      { w: 'ダウンフォース', r: 'だうんふぉーす', it: 'carico aerodinamico' },
      { w: 'ドラッグ', r: 'どらっぐ', it: 'resistenza aerodinamica' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '抵抗', r: 'ていこう', it: 'resistenza' },
      { w: '密度', r: 'みつど', it: 'densità' },
      { w: '空気', r: 'くうき', it: 'aria' },
      { w: '翼', r: 'つばさ', it: 'ala' },
      { w: '二乗', r: 'にじょう', it: 'quadrato (al quadrato)' }
    ]
  });

  A('f1-ali-anteriore-posteriore', {
    title: { t: '[前|まえ]と[後|うし]ろのウイング', it: 'Ali anteriore e posteriore' },
    sum: [
      { t: '⟦フロントウイング⟧は、[空気|くうき]の[流|なが]れを[整|ととの]えます。', it: 'L’ala anteriore prepara il flusso dell’aria.' },
      { t: '⟦リアウイング⟧は、[後|うし]ろに[下向|したむ]きの[力|ちから]を[作|つく]ります。', it: 'L’ala posteriore crea carico sul retrotreno.' },
      { t: '⟦[角度|かくど]⟧を[大|おお]きくすると、[下向|したむ]きの[力|ちから]が[増|ふ]えます。', it: 'Aumentando l’angolo cresce il carico.' },
      { t: '⟦フラップ⟧を[何枚|なんまい]も[使|つか]います。', it: 'Si usano più flap.' },
      { t: '⟦エンドプレート⟧は、[横|よこ]へ[逃|に]げる[空気|くうき]をおさえます。', it: 'Le paratie laterali limitano l’aria che sfugge di lato.' },
      { t: '[角度|かくど]が[大|おお]きすぎると、⟦ストール⟧します。', it: 'Con un angolo troppo grande l’ala va in stallo.' },
      { t: '[下向|したむ]きの[力|ちから]を[増|ま]すと、[最高速度|さいこうそくど]は[下|さ]がります。', it: 'Aumentando il carico, la velocità massima scende.' }
    ],
    gloss: [
      { w: 'フロントウイング', r: 'ふろんとういんぐ', it: 'ala anteriore' },
      { w: 'リアウイング', r: 'りあういんぐ', it: 'ala posteriore' },
      { w: '角度', r: 'かくど', it: 'angolo' },
      { w: 'フラップ', r: 'ふらっぷ', it: 'flap' },
      { w: 'エンドプレート', r: 'えんどぷれーと', it: 'paratia laterale' },
      { w: 'ストール', r: 'すとーる', it: 'stallo' },
      { w: '空気', r: 'くうき', it: 'aria' },
      { w: '流れ', r: 'ながれ', it: 'flusso' },
      { w: '最高速度', r: 'さいこうそくど', it: 'velocità massima' }
    ]
  });

  A('f1-effetto-suolo-e-fondo', {
    title: { t: '[地面効果|じめんこうか]とフロア', it: 'Effetto suolo e fondo' },
    sum: [
      { t: '⟦グラウンドエフェクト⟧は、[車|くるま]の[下|した]で[生|う]まれる⟦ダウンフォース⟧です。', it: 'L’effetto suolo è il carico generato sotto l’auto.' },
      { t: '⟦ベンチュリトンネル⟧では、[空気|くうき]が[速|はや]くなります。', it: 'Nel tunnel Venturi l’aria accelera.' },
      { t: '[速|はや]い[所|ところ]は、⟦[圧力|あつりょく]⟧が[低|ひく]くなります。', it: 'Dove l’aria è veloce, la pressione è più bassa.' },
      { t: 'トンネルの[出口|でぐち]は、[広|ひろ]がっています。', it: 'L’uscita del tunnel si allarga (diffusore).' },
      { t: '⟦ポーポイジング⟧は、[車|くるま]が[上下|じょうげ]にゆれる[現象|げんしょう]です。', it: 'Il porpoising è un’oscillazione verticale dell’auto.' },
      { t: 'そのゆれは、ドライバーの[背中|せなか]にも[負担|ふたん]です。', it: 'Quelle oscillazioni affaticano anche la schiena del pilota.' },
      { t: '⟦プランク⟧が、[車|くるま]の[低|ひく]さの[限界|げんかい]です。', it: 'Il pattino è il limite fisico all’altezza dell’auto.' }
    ],
    gloss: [
      { w: 'グラウンドエフェクト', r: 'ぐらうんどえふぇくと', it: 'effetto suolo' },
      { w: 'ベンチュリトンネル', r: 'べんちゅりとんねる', it: 'tunnel Venturi' },
      { w: '圧力', r: 'あつりょく', it: 'pressione' },
      { w: '出口', r: 'でぐち', it: 'uscita' },
      { w: 'ポーポイジング', r: 'ぽーぽいじんぐ', it: 'porpoising' },
      { w: 'プランク', r: 'ぷらんく', it: 'pattino (plank)' },
      { w: 'ダウンフォース', r: 'だうんふぉーす', it: 'carico aerodinamico' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '限界', r: 'げんかい', it: 'limite' }
    ]
  });

  A('f1-drs-e-scia', {
    title: { t: 'ディーアールエスと[前|まえ]の[車|くるま]の[後|うし]ろ', it: 'DRS, scia e aria sporca' },
    sum: [
      { t: '⟦スリップストリーム⟧では、[前|まえ]の[車|くるま]の[後|うし]ろで⟦[抵抗|ていこう]⟧が[減|へ]ります。', it: 'Nella scia, dietro l’auto che precede, la resistenza si riduce.' },
      { t: '⟦ダーティエア⟧では、ダウンフォースが[減|へ]ります。', it: 'Nell’aria sporca il carico diminuisce.' },
      { t: 'そのため、[追|お]い[越|こ]しは[難|むずか]しいです。', it: 'Per questo il sorpasso è difficile.' },
      { t: '⟦ディーアールエス⟧は、[後|うし]ろのウイングを[少|すこ]し[開|ひら]きます。', it: 'Il DRS apre un poco l’ala posteriore.' },
      { t: '[抵抗|ていこう]が[減|へ]って、⟦[速度|そくど]⟧が[上|あ]がります。', it: 'La resistenza scende e la velocità aumenta.' },
      { t: '[前|まえ]の[車|くるま]との⟦[差|さ]⟧が[一秒|いちびょう][以内|いない]で、[使|つか]えます。', it: 'Si può usare se il distacco dall’auto davanti è entro un secondo.' },
      { t: '[同|おな]じ[速|はや]さの[車|くるま]が[続|つづ]くと、⟦ディーアールエストレイン⟧になります。', it: 'Se molte auto hanno lo stesso passo, si forma un treno DRS.' }
    ],
    gloss: [
      { w: 'スリップストリーム', r: 'すりっぷすとりーむ', it: 'scia' },
      { w: '抵抗', r: 'ていこう', it: 'resistenza' },
      { w: 'ダーティエア', r: 'だーてぃえあ', it: 'aria sporca' },
      { w: 'ディーアールエス', r: 'でぃーあーるえす', it: 'DRS' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '差', r: 'さ', it: 'distacco' },
      { w: 'ディーアールエストレイン', r: 'でぃーあーるえすとれいん', it: 'treno DRS' },
      { w: 'ダウンフォース', r: 'だうんふぉーす', it: 'carico aerodinamico' },
      { w: '追い越し', r: 'おいこし', it: 'sorpasso' }
    ]
  });

  A('f1-raffreddamento-e-carrozzeria', {
    title: { t: '[冷却|れいきゃく]とボディ', it: 'Raffreddamento, flussi e carrozzeria' },
    sum: [
      { t: '[熱|ねつ]を[逃|に]がすために、[空気|くうき]が[必要|ひつよう]です。', it: 'Per smaltire il calore serve aria.' },
      { t: '[空気|くうき]を[多|おお]く[入|い]れると、⟦[抵抗|ていこう]⟧も[増|ふ]えます。', it: 'Più aria entra, più aumenta la resistenza.' },
      { t: '⟦サイドポッド⟧には、⟦ラジエーター⟧が[入|はい]っています。', it: 'Le fiancate contengono i radiatori.' },
      { t: 'サイドポッドは、[空気|くうき]を[後|うし]ろへ[導|みちび]きます。', it: 'Le fiancate guidano l’aria verso il retro.' },
      { t: '⟦ブレーキダクト⟧が、ブレーキに[風|かぜ]を[当|あ]てます。', it: 'I condotti dei freni portano aria ai freni.' },
      { t: '⟦バージボード⟧は、[二千二十二年|にせんにじゅうにねん]に[廃止|はいし]されました。', it: 'I bargeboard sono stati eliminati nel 2022.' },
      { t: '⟦ボルテックス⟧は、[空気|くうき]の[渦|うず]で[流|なが]れを[守|まも]ります。', it: 'I vortici sono mulinelli d’aria che proteggono il flusso.' }
    ],
    gloss: [
      { w: '抵抗', r: 'ていこう', it: 'resistenza' },
      { w: 'サイドポッド', r: 'さいどぽっど', it: 'fiancata' },
      { w: 'ラジエーター', r: 'らじえーたー', it: 'radiatore' },
      { w: 'ブレーキダクト', r: 'ぶれーきだくと', it: 'condotto dei freni' },
      { w: 'バージボード', r: 'ばーじぼーど', it: 'bargeboard' },
      { w: 'ボルテックス', r: 'ぼるてっくす', it: 'vortice' },
      { w: '熱', r: 'ねつ', it: 'calore' },
      { w: '空気', r: 'くうき', it: 'aria' },
      { w: '渦', r: 'うず', it: 'vortice, mulinello' }
    ]
  });

  A('f1-sviluppo-aerodinamico', {
    title: { t: '[空力|くうりき]の[開発|かいはつ]', it: 'Sviluppo aerodinamico e correlazione' },
    sum: [
      { t: '⟦シーエフディー⟧は、コンピューターで[空気|くうき]を[計算|けいさん]します。', it: 'La CFD calcola il flusso d’aria al computer.' },
      { t: '⟦[風洞|ふうどう]⟧では、[小|ちい]さな[模型|もけい]で[試|ため]します。', it: 'In galleria del vento si prova un modello in scala.' },
      { t: '⟦ローリングロード⟧は、[地面|じめん]の[動|うご]きを[再現|さいげん]します。', it: 'Il tappeto mobile riproduce il movimento del suolo.' },
      { t: '[最後|さいご]に、サーキットで[本物|ほんもの]の[車|くるま]を[測|はか]ります。', it: 'Infine si misura l’auto vera in pista.' },
      { t: '⟦[相関|そうかん]⟧は、[予測|よそく]と[結果|けっか]の[一致|いっち]です。', it: 'La correlazione è l’accordo tra previsione e risultato.' },
      { t: '⟦エーティーアール⟧が、[試験|しけん]の[時間|じかん]を[制限|せいげん]します。', it: 'L’ATR limita il tempo di prova.' },
      { t: '⟦[改良|かいりょう]⟧の[効果|こうか]は、[一周|いっしゅう]で[少|すこ]しだけです。', it: 'L’effetto di un aggiornamento è piccolo su un giro.' }
    ],
    gloss: [
      { w: 'シーエフディー', r: 'しーえふでぃー', it: 'CFD (simulazione dei fluidi)' },
      { w: '風洞', r: 'ふうどう', it: 'galleria del vento' },
      { w: 'ローリングロード', r: 'ろーりんぐろーど', it: 'tappeto mobile' },
      { w: '相関', r: 'そうかん', it: 'correlazione' },
      { w: 'エーティーアール', r: 'えーてぃーあーる', it: 'ATR (limiti alle prove aerodinamiche)' },
      { w: '改良', r: 'かいりょう', it: 'aggiornamento, miglioria' },
      { w: '模型', r: 'もけい', it: 'modello' },
      { w: '予測', r: 'よそく', it: 'previsione' },
      { w: '結果', r: 'けっか', it: 'risultato' }
    ]
  });

  A('f1-pneumatici-struttura-mescole', {
    title: { t: 'タイヤの[構造|こうぞう]と[種類|しゅるい]', it: 'Pneumatici: struttura, mescole, marcature' },
    sum: [
      { t: '⟦タイヤ⟧だけが、[路面|ろめん]にふれます。', it: 'Solo le gomme toccano la strada.' },
      { t: '⟦トレッド⟧は、[路面|ろめん]にふれる[層|そう]です。', it: 'Il battistrada è lo strato che tocca l’asfalto.' },
      { t: '⟦コンパウンド⟧は、[硬|かた]いものから[柔|やわ]らかいものまであります。', it: 'Le mescole vanno dalle più dure alle più morbide.' },
      { t: '[硬|かた]いタイヤは[長持|ながも]ちしますが、⟦グリップ⟧が[弱|よわ]いです。', it: 'La gomma dura dura di più, ma ha meno aderenza.' },
      { t: '⟦インターミディエイト⟧は[緑|みどり]、⟦フルウェット⟧は[青|あお]です。', it: 'L’intermedia è verde, la full wet è blu.' },
      { t: '⟦スリック⟧は、[溝|みぞ]のない[乾|かわ]いた[路面|ろめん][用|よう]です。', it: 'La slick, senza scolpitura, è per l’asciutto.' },
      { t: 'タイヤは、⟦タイヤウォーマー⟧で[温|あたた]めます。', it: 'Le gomme si scaldano con le coperte termiche.' }
    ],
    gloss: [
      { w: 'タイヤ', r: 'たいや', it: 'gomma, pneumatico' },
      { w: 'トレッド', r: 'とれっど', it: 'battistrada' },
      { w: 'コンパウンド', r: 'こんぱうんど', it: 'mescola' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: 'インターミディエイト', r: 'いんたーみでぃえいと', it: 'intermedia' },
      { w: 'フルウェット', r: 'ふるうぇっと', it: 'full wet (pioggia forte)' },
      { w: 'スリック', r: 'すりっく', it: 'slick (gomma liscia)' },
      { w: 'タイヤウォーマー', r: 'たいやうぉーまー', it: 'coperte termiche' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '溝', r: 'みぞ', it: 'scanalatura' }
    ]
  });

  A('f1-aderenza-e-finestra-termica', {
    title: { t: 'グリップと[温度|おんど]', it: 'Aderenza, finestra termica e degrado' },
    sum: [
      { t: '⟦グリップ⟧には、[重|おも]さと[空気|くうき]の[力|ちから]が[関係|かんけい]します。', it: 'L’aderenza dipende dal peso e dalla forza dell’aria.' },
      { t: 'タイヤには、⟦[温度範囲|おんどはんい]⟧があります。', it: 'La gomma ha una finestra termica.' },
      { t: '⟦グレイニング⟧は、[冷|つめ]たすぎる[時|とき]に[起|お]きます。', it: 'Il graining si verifica quando la gomma è troppo fredda.' },
      { t: '⟦ブリスター⟧は、[熱|あつ]すぎる[時|とき]に[起|お]きます。', it: 'Il blistering si verifica quando la gomma è troppo calda.' },
      { t: '⟦[摩耗|まもう]⟧は、ゴムが[減|へ]ることです。', it: 'L’usura è la perdita di materiale della gomma.' },
      { t: '⟦デグラデーション⟧は、[性能|せいのう]が[落|お]ちることです。', it: 'Il degrado è il calo di prestazione.' },
      { t: '[燃料|ねんりょう]が[減|へ]ると、[車|くるま]は[軽|かる]くなります。', it: 'Quando il carburante cala, l’auto diventa più leggera.' }
    ],
    gloss: [
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '温度範囲', r: 'おんどはんい', it: 'finestra termica' },
      { w: 'グレイニング', r: 'ぐれいにんぐ', it: 'graining' },
      { w: 'ブリスター', r: 'ぶりすたー', it: 'blistering' },
      { w: '摩耗', r: 'まもう', it: 'usura' },
      { w: 'デグラデーション', r: 'でぐらでーしょん', it: 'degrado' },
      { w: '温度', r: 'おんど', it: 'temperatura' },
      { w: '性能', r: 'せいのう', it: 'prestazione' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' }
    ]
  });

  A('f1-dinamica-del-veicolo', {
    title: { t: '[車|くるま]の[動|うご]きと[荷重|かじゅう]', it: 'Dinamica del veicolo: curva e trasferimenti di carico' },
    sum: [
      { t: '[曲|ま]がるには、タイヤの⟦グリップ⟧が[必要|ひつよう]です。', it: 'Per curvare serve l’aderenza della gomma.' },
      { t: '⟦ダウンフォース⟧が[増|ふ]えると、[曲|ま]がる[速度|そくど]も[上|あ]がります。', it: 'Con più carico aumenta anche la velocità in curva.' },
      { t: '[曲|ま]がる[時|とき]は、⟦[荷重移動|かじゅういどう]⟧が[起|お]きます。', it: 'In curva avviene un trasferimento di carico.' },
      { t: 'ブレーキでは、[荷重|かじゅう]が[前|まえ]に[移|うつ]ります。', it: 'In frenata il carico si sposta in avanti.' },
      { t: '⟦アンダーステア⟧は、[前|まえ]のタイヤが[先|さき]にすべります。', it: 'Nel sottosterzo scivola per prima la gomma anteriore.' },
      { t: '⟦オーバーステア⟧は、[後|うし]ろのタイヤが[先|さき]にすべります。', it: 'Nel sovrasterzo scivola per prima la gomma posteriore.' },
      { t: '⟦スリップアングル⟧は、タイヤの[向|む]きと[動|うご]く[向|む]きの[角度|かくど]です。', it: 'L’angolo di deriva è l’angolo tra la direzione della gomma e quella del moto.' }
    ],
    gloss: [
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: 'ダウンフォース', r: 'だうんふぉーす', it: 'carico aerodinamico' },
      { w: '荷重移動', r: 'かじゅういどう', it: 'trasferimento di carico' },
      { w: 'アンダーステア', r: 'あんだーすてあ', it: 'sottosterzo' },
      { w: 'オーバーステア', r: 'おーばーすてあ', it: 'sovrasterzo' },
      { w: 'スリップアングル', r: 'すりっぷあんぐる', it: 'angolo di deriva' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '荷重', r: 'かじゅう', it: 'carico' },
      { w: '角度', r: 'かくど', it: 'angolo' }
    ]
  });

  A('f1-assetto-e-tarature', {
    title: { t: 'セットアップ', it: 'Assetto e tarature per pista' },
    sum: [
      { t: '⟦セットアップ⟧は、[車|くるま]をコースに[合|あ]わせる[調整|ちょうせい]です。', it: 'L’assetto è la regolazione che adatta l’auto alla pista.' },
      { t: '⟦[車高|しゃこう]⟧が[低|ひく]いほど、フロアの[力|ちから]が[増|ふ]えます。', it: 'Più l’auto è bassa, più aumenta la forza del fondo.' },
      { t: '⟦レーキ⟧は、[車|くるま]の[前後|ぜんご]の[傾|かたむ]きです。', it: 'Il rake è l’inclinazione tra anteriore e posteriore.' },
      { t: 'スプリングと⟦アンチロールバー⟧で、[硬|かた]さを[変|か]えます。', it: 'Con molle e barre antirollio si cambia la rigidezza.' },
      { t: '⟦ブレーキバイアス⟧は、ドライバーがハンドルで[変|か]えます。', it: 'Il pilota cambia la ripartizione dei freni dal volante.' },
      { t: 'モンツァでは、ウイングの[角度|かくど]を[小|ちい]さくします。', it: 'A Monza si riduce l’angolo delle ali.' },
      { t: '⟦[練習走行|れんしゅうそうこう]⟧で[試|ため]して、[少|すこ]しずつ[変|か]えます。', it: 'Si prova nelle prove libere e si cambia a poco a poco.' }
    ],
    gloss: [
      { w: 'セットアップ', r: 'せっとあっぷ', it: 'assetto' },
      { w: '車高', r: 'しゃこう', it: 'altezza da terra' },
      { w: 'レーキ', r: 'れーき', it: 'rake (inclinazione)' },
      { w: 'アンチロールバー', r: 'あんちろーるばー', it: 'barra antirollio' },
      { w: 'ブレーキバイアス', r: 'ぶれーきばいあす', it: 'ripartizione della frenata' },
      { w: '練習走行', r: 'れんしゅうそうこう', it: 'prove libere' },
      { w: 'スプリング', r: 'すぷりんぐ', it: 'molla' },
      { w: '調整', r: 'ちょうせい', it: 'regolazione' },
      { w: '角度', r: 'かくど', it: 'angolo' }
    ]
  });

  A('f1-bagnato-e-condizioni-variabili', {
    title: { t: '[雨|あめ]のレース', it: 'Bagnato e condizioni variabili' },
    sum: [
      { t: '[雨|あめ]では、タイヤの⟦グリップ⟧が[大|おお]きく[減|へ]ります。', it: 'Con la pioggia l’aderenza delle gomme cala molto.' },
      { t: '⟦インターミディエイト⟧は、[水|みず]が[少|すく]ない[路面|ろめん][用|よう]です。', it: 'L’intermedia serve quando c’è poca acqua.' },
      { t: '⟦フルウェット⟧は、[強|つよ]い[雨|あめ][用|よう]です。', it: 'La full wet serve con la pioggia forte.' },
      { t: '⟦アクアプレーニング⟧は、タイヤが[水|みず]の[上|うえ]に[乗|の]る[現象|げんしょう]です。', it: 'L’aquaplaning è quando la gomma galleggia sull’acqua.' },
      { t: '[路面|ろめん]が[乾|かわ]くと、スリックが[速|はや]くなります。', it: 'Quando la pista si asciuga, le slick diventano più veloci.' },
      { t: '⟦クロスオーバー⟧は、スリックが[速|はや]くなる[時点|じてん]です。', it: 'Il crossover è il momento in cui le slick diventano più veloci.' },
      { t: '[水|みず]が[多|おお]いと、⟦セーフティカー⟧の[後|うし]ろで[始|はじ]まります。', it: 'Se c’è troppa acqua, si parte dietro la safety car.' }
    ],
    gloss: [
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: 'インターミディエイト', r: 'いんたーみでぃえいと', it: 'intermedia' },
      { w: 'フルウェット', r: 'ふるうぇっと', it: 'full wet' },
      { w: 'アクアプレーニング', r: 'あくあぷれーにんぐ', it: 'aquaplaning' },
      { w: 'クロスオーバー', r: 'くろすおーばー', it: 'crossover (cambio da intermedie a slick)' },
      { w: 'セーフティカー', r: 'せーふてぃかー', it: 'safety car' },
      { w: 'スリック', r: 'すりっく', it: 'slick' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '雨', r: 'あめ', it: 'pioggia' },
      { w: '水', r: 'みず', it: 'acqua' }
    ]
  });

  A('f1-simulazione-del-giro', {
    title: { t: 'ラップのシミュレーション', it: 'Simulazione del giro e limite della prestazione' },
    sum: [
      { t: '⟦ラップタイム⟧は、[小|ちい]さな[区間|くかん]の[時間|じかん]の[合計|ごうけい]です。', it: 'Il tempo sul giro è la somma dei tempi dei piccoli tratti.' },
      { t: '⟦シミュレーション⟧では、[速度|そくど]の⟦[限界|げんかい]⟧を[計算|けいさん]します。', it: 'Nella simulazione si calcola il limite di velocità.' },
      { t: '[直線|ちょくせん]の[限界|げんかい]は⟦パワー⟧で、[曲|ま]がる[所|ところ]は⟦グリップ⟧です。', it: 'Sul rettilineo il limite è la potenza, in curva è l’aderenza.' },
      { t: '⟦ゴーストラップ⟧は、[二|ふた]つの[周回|しゅうかい]を[比|くら]べる[方法|ほうほう]です。', it: 'Il ghost lap è un modo per confrontare due giri.' },
      { t: '[重|おも]さが[増|ふ]えると、ラップタイムは[遅|おそ]くなります。', it: 'Se la massa aumenta, il tempo sul giro peggiora.' },
      { t: 'このモデルは、タイヤの[変化|へんか]などを[無視|むし]します。', it: 'Questo modello ignora, ad esempio, l’evoluzione delle gomme.' },
      { t: 'どのドライバーも、[全|すべ]ての[場所|ばしょ]で[限界|げんかい]に[届|とど]きません。', it: 'Nessun pilota raggiunge il limite in ogni punto.' }
    ],
    gloss: [
      { w: 'ラップタイム', r: 'らっぷたいむ', it: 'tempo sul giro' },
      { w: 'シミュレーション', r: 'しみゅれーしょん', it: 'simulazione' },
      { w: '限界', r: 'げんかい', it: 'limite' },
      { w: 'パワー', r: 'ぱわー', it: 'potenza' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: 'ゴーストラップ', r: 'ごーすとらっぷ', it: 'ghost lap (giro fantasma)' },
      { w: 'モデル', r: 'もでる', it: 'modello' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '合計', r: 'ごうけい', it: 'somma' },
      { w: '周回', r: 'しゅうかい', it: 'giro' }
    ]
  });

  A('f1-tempo-sul-giro', {
    title: { t: 'ラップタイムを[作|つく]るもの', it: 'Il tempo sul giro come somma di fattori' },
    sum: [
      { t: '⟦ラップタイム⟧には、[三|みっ]つの[要素|ようそ]があります。', it: 'Il tempo sul giro dipende da tre fattori.' },
      { t: '⟦[燃料|ねんりょう]⟧が[重|おも]いと、ラップが[遅|おそ]くなります。', it: 'Con più carburante a bordo i giri sono più lenti.' },
      { t: '⟦[給油|きゅうゆ]⟧は、[二千十年|にせんじゅうねん]から[禁止|きんし]です。', it: 'Il rifornimento è vietato dal 2010.' },
      { t: '⟦デグラデーション⟧で、[周回|しゅうかい]ごとに[遅|おそ]くなります。', it: 'A causa del degrado, a ogni giro si va più piano.' },
      { t: 'ほかの[車|くるま]に[近|ちか]いと、⟦ダーティエア⟧で[遅|おそ]くなります。', it: 'Vicino a un’altra auto, l’aria sporca rallenta.' },
      { t: '[燃料|ねんりょう]の[分|ぶん]を[引|ひ]くと、タイヤの[変化|へんか]が[見|み]えます。', it: 'Togliendo l’effetto del carburante si vede l’evoluzione delle gomme.' },
      { t: 'この⟦モデル⟧は、[簡単|かんたん]に[考|かんが]えるための[道具|どうぐ]です。', it: 'Questo modello è uno strumento per ragionare in modo semplice.' }
    ],
    gloss: [
      { w: 'ラップタイム', r: 'らっぷたいむ', it: 'tempo sul giro' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: '給油', r: 'きゅうゆ', it: 'rifornimento' },
      { w: 'デグラデーション', r: 'でぐらでーしょん', it: 'degrado' },
      { w: 'ダーティエア', r: 'だーてぃえあ', it: 'aria sporca' },
      { w: 'モデル', r: 'もでる', it: 'modello' },
      { w: '要素', r: 'ようそ', it: 'fattore, elemento' },
      { w: '周回', r: 'しゅうかい', it: 'giro' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' }
    ]
  });

  A('f1-pit-stop-e-strategie', {
    title: { t: 'ピットストップの[作戦|さくせん]', it: 'Pit stop: perdita di tempo e confronto tra strategie' },
    sum: [
      { t: '⟦ピットロス⟧は、ピットに[入|はい]って[失|うしな]う[時間|じかん]です。', it: 'La perdita ai box è il tempo che si perde entrando in corsia box.' },
      { t: '[多|おお]くのサーキットで、[二十|にじゅう]から[二十五秒|にじゅうごびょう]です。', it: 'In molti circuiti va da venti a venticinque secondi.' },
      { t: '⟦ピットウィンドウ⟧は、ピットに[入|はい]ってよい[範囲|はんい]です。', it: 'La finestra di sosta è l’intervallo in cui conviene fermarsi.' },
      { t: '⟦スティント⟧が[長|なが]いと、ピットの[損|そん]は[一周|いっしゅう]ごとに[小|ちい]さくなります。', it: 'Più lungo è lo stint, minore è la perdita ai box per ogni giro.' },
      { t: 'しかし、⟦タイヤ⟧は[古|ふる]くなって[遅|おそ]くなります。', it: 'Però la gomma invecchia e diventa più lenta.' },
      { t: '⟦トラフィック⟧に[入|はい]ると、さらに[時間|じかん]を[失|うしな]います。', it: 'Se si rientra nel traffico, si perde ancora più tempo.' },
      { t: '⟦ストラテジー⟧は、[計算|けいさん]で[比|くら]べます。', it: 'Le strategie si confrontano con il calcolo.' }
    ],
    gloss: [
      { w: 'ピットロス', r: 'ぴっとろす', it: 'perdita ai box' },
      { w: 'ピットウィンドウ', r: 'ぴっとういんどう', it: 'finestra di sosta' },
      { w: 'スティント', r: 'すてぃんと', it: 'stint' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: 'トラフィック', r: 'とらふぃっく', it: 'traffico' },
      { w: 'ストラテジー', r: 'すとらてじー', it: 'strategia' },
      { w: '作戦', r: 'さくせん', it: 'tattica' },
      { w: '損', r: 'そん', it: 'perdita, svantaggio' },
      { w: '計算', r: 'けいさん', it: 'calcolo' }
    ]
  });

  A('f1-undercut-e-overcut', {
    title: { t: 'アンダーカットとオーバーカット', it: 'Undercut e overcut' },
    sum: [
      { t: '⟦アンダーカット⟧は、[先|さき]にピットに[入|はい]る[作戦|さくせん]です。', it: 'L’undercut consiste nel fermarsi prima ai box.' },
      { t: '[新|あたら]しいタイヤで、[速|はや]く[走|はし]ります。', it: 'Con gomme nuove si va più veloci.' },
      { t: '⟦オーバーカット⟧は、[後|あと]でピットに[入|はい]る[作戦|さくせん]です。', it: 'L’overcut consiste nel fermarsi dopo ai box.' },
      { t: '[得|え]る[時間|じかん]が[前|まえ]の[車|くるま]との⟦[差|さ]⟧より[大|おお]きいと、[成功|せいこう]です。', it: 'Se il tempo guadagnato supera il distacco dall’auto davanti, riesce.' },
      { t: 'タイヤの⟦デグラデーション⟧が[大|おお]きいほど、[効|き]きます。', it: 'Più il degrado delle gomme è alto, più funziona.' },
      { t: '⟦トラフィック⟧に[出|で]ると、[効果|こうか]は[消|き]えます。', it: 'Se si esce nel traffico, il vantaggio sparisce.' },
      { t: '⟦ライバル⟧は、[先|さき]にピットに[入|はい]って[防|ふせ]ぎます。', it: 'Il rivale può difendersi fermandosi per primo.' }
    ],
    gloss: [
      { w: 'アンダーカット', r: 'あんだーかっと', it: 'undercut' },
      { w: 'オーバーカット', r: 'おーばーかっと', it: 'overcut' },
      { w: '差', r: 'さ', it: 'distacco' },
      { w: 'デグラデーション', r: 'でぐらでーしょん', it: 'degrado' },
      { w: 'トラフィック', r: 'とらふぃっく', it: 'traffico' },
      { w: 'ライバル', r: 'らいばる', it: 'rivale' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: '作戦', r: 'さくせん', it: 'tattica' },
      { w: '成功', r: 'せいこう', it: 'successo' }
    ]
  });

  A('f1-strategia-gomme', {
    title: { t: 'タイヤの[作戦|さくせん]', it: 'Strategia gomme: mescole, stint e cliff' },
    sum: [
      { t: '⟦ソフト⟧は[速|はや]いですが、すり[減|へ]るのも[早|はや]いです。', it: 'La soft è veloce, ma si consuma presto.' },
      { t: '⟦ハード⟧は[遅|おそ]いですが、[長持|ながも]ちします。', it: 'La hard è più lenta, ma dura di più.' },
      { t: '⟦ミディアム⟧は、その[中間|ちゅうかん]です。', it: 'La media sta a metà tra le due.' },
      { t: '⟦クリフ⟧は、[性能|せいのう]が[急|きゅう]に[落|お]ちる[点|てん]です。', it: 'Il cliff è il punto in cui la prestazione crolla all’improvviso.' },
      { t: '[乾|かわ]いたレースでは、[二|ふた]つ[以上|いじょう]の[種類|しゅるい]を[使|つか]います。', it: 'In una gara asciutta si usano almeno due tipi di mescola.' },
      { t: '⟦スティント⟧の[長|なが]さは、[計算|けいさん]で[決|き]めます。', it: 'La lunghezza dello stint si decide con il calcolo.' },
      { t: '⟦タイヤマネジメント⟧は、タイヤを[長持|ながも]ちさせる[運転|うんてん]です。', it: 'La gestione gomme è una guida che le fa durare.' }
    ],
    gloss: [
      { w: 'ソフト', r: 'そふと', it: 'morbida' },
      { w: 'ハード', r: 'はーど', it: 'dura' },
      { w: 'ミディアム', r: 'みでぃあむ', it: 'media' },
      { w: 'クリフ', r: 'くりふ', it: 'cliff (crollo di prestazione)' },
      { w: 'スティント', r: 'すてぃんと', it: 'stint' },
      { w: 'タイヤマネジメント', r: 'たいやまねじめんと', it: 'gestione delle gomme' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: '性能', r: 'せいのう', it: 'prestazione' },
      { w: '種類', r: 'しゅるい', it: 'tipo' },
      { w: '計算', r: 'けいさん', it: 'calcolo' }
    ]
  });

  A('f1-safety-car-e-vsc', {
    title: { t: 'セーフティカーでピットへ？', it: 'Safety car e VSC: box o resta fuori' },
    sum: [
      { t: '⟦セーフティカー⟧では、[全員|ぜんいん]が[遅|おそ]く[走|はし]ります。', it: 'Con la safety car tutti vanno piano.' },
      { t: '⟦バーチャルセーフティカー⟧は、[目標|もくひょう]の[時間|じかん]を[守|まも]って[走|はし]ります。', it: 'Con la VSC si rispetta un tempo obiettivo.' },
      { t: 'みんなが[遅|おそ]いので、ピットの⟦[損|そん]⟧が[小|ちい]さくなります。', it: 'Poiché tutti sono lenti, la perdita ai box è minore.' },
      { t: '⟦ピットロス⟧は、[約|やく][半分|はんぶん]になります。', it: 'La perdita ai box si riduce a circa la metà.' },
      { t: '[早|はや]く[入|はい]りすぎると、[良|よ]い⟦タイヤ⟧を[捨|す]てます。', it: 'Fermarsi troppo presto significa buttare una gomma ancora buona.' },
      { t: '⟦ダブルスタック⟧は、[二台目|にだいめ]が[待|ま]つ[状況|じょうきょう]です。', it: 'Il double stack è la situazione in cui la seconda auto deve aspettare.' },
      { t: '[先頭|せんとう]の[車|くるま]は、[入|はい]るか[残|のこ]るかを[数秒|すうびょう]で[決|き]めます。', it: 'La macchina in testa decide in pochi secondi se rientrare o restare fuori.' }
    ],
    gloss: [
      { w: 'セーフティカー', r: 'せーふてぃかー', it: 'safety car' },
      { w: 'バーチャルセーフティカー', r: 'ばーちゃるせーふてぃかー', it: 'virtual safety car (VSC)' },
      { w: 'ピットロス', r: 'ぴっとろす', it: 'perdita ai box' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: 'ダブルスタック', r: 'だぶるすたっく', it: 'double stack (due auto ai box insieme)' },
      { w: '全員', r: 'ぜんいん', it: 'tutti' },
      { w: '目標', r: 'もくひょう', it: 'obiettivo' },
      { w: '損', r: 'そん', it: 'perdita' },
      { w: '先頭', r: 'せんとう', it: 'testa (primo)' }
    ]
  });

  A('f1-incertezza-e-decisioni', {
    title: { t: '[不確実|ふかくじつ]な[中|なか]での[決定|けってい]', it: 'Incertezza, simulazione e teoria dei giochi' },
    sum: [
      { t: '⟦[期待値|きたいち]⟧は、⟦[確率|かくりつ]⟧をかけた[平均|へいきん]です。', it: 'Il valore atteso è la media pesata con le probabilità.' },
      { t: '⟦[分散|ぶんさん]⟧は、[結果|けっか]のばらつきです。', it: 'La varianza misura la dispersione dei risultati.' },
      { t: '[期待値|きたいち]が[良|よ]くても、[危険|きけん]は[大|おお]きいことがあります。', it: 'Anche con un buon valore atteso il rischio può essere alto.' },
      { t: '⟦モンテカルロ⟧は、[何度|なんど]もレースを[計算|けいさん]します。', it: 'Il Monte Carlo simula la gara molte volte.' },
      { t: '[毎周|まいしゅう]の[確率|かくりつ]が[小|ちい]さくても、[全体|ぜんたい]では[高|たか]くなります。', it: 'Anche se la probabilità per giro è piccola, su tutta la gara diventa alta.' },
      { t: '⟦ゲーム[理論|りろん]⟧では、ライバルの[選択|せんたく]も[考|かんが]えます。', it: 'Nella teoria dei giochi si considera anche la scelta del rivale.' },
      { t: '⟦ライバル⟧と[同|おな]じ[動|うご]きをすると、ばらつきが[小|ちい]さくなります。', it: 'Copiare la mossa del rivale riduce la variabilità.' }
    ],
    gloss: [
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '分散', r: 'ぶんさん', it: 'varianza' },
      { w: 'モンテカルロ', r: 'もんてかるろ', it: 'Monte Carlo' },
      { w: 'ゲーム理論', r: 'げーむりろん', it: 'teoria dei giochi' },
      { w: 'ライバル', r: 'らいばる', it: 'rivale' },
      { w: '危険', r: 'きけん', it: 'rischio' },
      { w: '結果', r: 'けっか', it: 'risultato' },
      { w: '選択', r: 'せんたく', it: 'scelta' }
    ]
  });

  A('f1-gestione-dal-muretto', {
    title: { t: 'ピットウォールのしごと', it: 'Gestione della gara dal muretto' },
    sum: [
      { t: '⟦ピットウォール⟧は、チームがレースを[見|み]る[場所|ばしょ]です。', it: 'Il muretto è il posto da cui la squadra segue la gara.' },
      { t: '⟦ストラテジスト⟧が、レースの[作戦|さくせん]を[考|かんが]えます。', it: 'Lo stratega pensa alla strategia di gara.' },
      { t: '⟦レースエンジニア⟧は、ドライバーと[無線|むせん]で[話|はな]します。', it: 'L’ingegnere di pista parla con il pilota via radio.' },
      { t: '⟦リフトアンドコースト⟧は、[燃料|ねんりょう]を[節約|せつやく]する[走|はし]り[方|かた]です。', it: 'Il lift and coast è un modo di guidare per risparmiare carburante.' },
      { t: '[速|はや]く[走|はし]るか、[節約|せつやく]するかを[決|き]めます。', it: 'Si decide se spingere o gestire.' },
      { t: '⟦チームオーダー⟧は、[順位|じゅんい]についての[指示|しじ]です。', it: 'Gli ordini di squadra sono istruzioni sulle posizioni.' },
      { t: '[壊|こわ]れる[危険|きけん]と[速|はや]さを、⟦[期待値|きたいち]⟧で[比|くら]べます。', it: 'Il rischio di guasto e la velocità si confrontano con il valore atteso.' }
    ],
    gloss: [
      { w: 'ピットウォール', r: 'ぴっとうぉーる', it: 'muretto box' },
      { w: 'ストラテジスト', r: 'すとらてじすと', it: 'stratega' },
      { w: 'レースエンジニア', r: 'れーすえんじにあ', it: 'ingegnere di pista' },
      { w: 'リフトアンドコースト', r: 'りふとあんどこーすと', it: 'lift and coast' },
      { w: 'チームオーダー', r: 'ちーむおーだー', it: 'ordini di squadra' },
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '作戦', r: 'さくせん', it: 'strategia' },
      { w: '無線', r: 'むせん', it: 'radio' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: '節約', r: 'せつやく', it: 'risparmio' }
    ]
  });

  A('f1-telemetria', {
    title: { t: 'テレメトリー', it: 'La telemetria: sensori, canali e grafici' },
    sum: [
      { t: '⟦テレメトリー⟧は、[遠|とお]くから[測|はか]るしくみです。', it: 'La telemetria è un sistema di misura a distanza.' },
      { t: '[車|くるま]は、たくさんの⟦センサー⟧で[測|はか]ります。', it: 'L’auto misura con moltissimi sensori.' },
      { t: '⟦チャンネル⟧は、[時間|じかん]で[記録|きろく]した[量|りょう]です。', it: 'Un canale è una grandezza registrata nel tempo.' },
      { t: '⟦サンプリング[周波数|しゅうはすう]⟧が[高|たか]いほど、[細|こま]かく[分|わ]かります。', it: 'Più alta è la frequenza di campionamento, più i dettagli si vedono.' },
      { t: 'グラフは、[距離|きょり]を[横|よこ]の[軸|じく]にすると[比|くら]べやすいです。', it: 'Mettendo la distanza sull’asse orizzontale, i grafici sono più facili da confrontare.' },
      { t: '⟦ジーフォース⟧は、[曲|ま]がる[時|とき]の[横|よこ]の[力|ちから]です。', it: 'Le forze G laterali sono la forza laterale in curva.' },
      { t: '⟦データ⟧は、[少|すこ]し[遅|おく]れて[届|とど]きます。', it: 'I dati arrivano con un po’ di ritardo.' }
    ],
    gloss: [
      { w: 'テレメトリー', r: 'てれめとりー', it: 'telemetria' },
      { w: 'センサー', r: 'せんさー', it: 'sensore' },
      { w: 'チャンネル', r: 'ちゃんねる', it: 'canale' },
      { w: 'サンプリング周波数', r: 'さんぷりんぐしゅうはすう', it: 'frequenza di campionamento' },
      { w: 'ジーフォース', r: 'じーふぉーす', it: 'forza G' },
      { w: 'データ', r: 'でーた', it: 'dati' },
      { w: '距離', r: 'きょり', it: 'distanza' },
      { w: '記録', r: 'きろく', it: 'registrazione' },
      { w: '軸', r: 'じく', it: 'asse' }
    ]
  });

  A('f1-schermate-dei-tempi', {
    title: { t: 'タイミングスクリーンの[読|よ]み[方|かた]', it: 'Le schermate dei tempi: leggere il ritmo gara' },
    sum: [
      { t: '⟦タイミングスクリーン⟧には、[順位|じゅんい]やタイムが[出|で]ます。', it: 'Sulla schermata dei tempi compaiono posizioni e tempi.' },
      { t: '⟦ギャップ⟧は、リーダーとの[差|さ]です。', it: 'Il gap è il distacco dal leader.' },
      { t: '⟦インターバル⟧は、[前|まえ]の[車|くるま]との[差|さ]です。', it: 'L’intervallo è il distacco dall’auto davanti.' },
      { t: '[一周|いっしゅう]は、[三|みっ]つの⟦セクター⟧に[分|わ]かれます。', it: 'Un giro è diviso in tre settori.' },
      { t: '⟦[紫|むらさき]⟧は、[全員|ぜんいん]の[中|なか]で[一番|いちばん][速|はや]い[色|いろ]です。', it: 'Il viola è il colore del tempo più veloce di tutti.' },
      { t: '⟦ペース⟧は、[普通|ふつう]の[状態|じょうたい]で[保|たも]てる[平均|へいきん]のタイムです。', it: 'Il ritmo gara è il tempo medio mantenibile in condizioni normali.' },
      { t: '[一周|いっしゅう]だけの[速|はや]さは、ペースではありません。', it: 'La velocità di un solo giro non è il ritmo gara.' }
    ],
    gloss: [
      { w: 'タイミングスクリーン', r: 'たいみんぐすくりーん', it: 'schermata dei tempi' },
      { w: 'ギャップ', r: 'ぎゃっぷ', it: 'distacco dal leader' },
      { w: 'インターバル', r: 'いんたーばる', it: 'distacco dall’auto davanti' },
      { w: 'セクター', r: 'せくたー', it: 'settore' },
      { w: '紫', r: 'むらさき', it: 'viola' },
      { w: 'ペース', r: 'ぺーす', it: 'ritmo' },
      { w: '順位', r: 'じゅんい', it: 'posizione' },
      { w: '差', r: 'さ', it: 'distacco' },
      { w: '平均', r: 'へいきん', it: 'media' }
    ]
  });

  A('f1-confronto-tra-piloti', {
    title: { t: 'ドライバーを[比|くら]べる', it: 'Confronto tra piloti: delta, frenate e traiettorie' },
    sum: [
      { t: '⟦デルタ⟧は、[二|ふた]つの[周回|しゅうかい]の[時間|じかん]の[差|さ]です。', it: 'Il delta è la differenza di tempo tra due giri.' },
      { t: '[周回|しゅうかい]を[短|みじか]い[区間|くかん]に[分|わ]けて、[計算|けいさん]します。', it: 'Si divide il giro in brevi tratti e si calcola.' },
      { t: '⟦オーバーレイ⟧は、[二|ふた]つの[曲線|きょくせん]を[重|かさ]ねたグラフです。', it: 'L’overlay è un grafico con due curve sovrapposte.' },
      { t: '[止|と]まれるなら、⟦ブレーキングポイント⟧は[遅|おそ]いほど[得|とく]です。', it: 'Se si riesce a fermarsi, più tardi è il punto di frenata, meglio è.' },
      { t: '⟦トレイルブレーキング⟧は、[曲|ま]がりながらブレーキを[少|すこ]しずつ[離|はな]します。', it: 'Il trail braking è rilasciare il freno poco a poco mentre si curva.' },
      { t: 'カーブの[最低速度|さいていそくど]と[出口|でぐち]の[速度|そくど]も[大切|たいせつ]です。', it: 'Contano anche la velocità minima in curva e quella in uscita.' },
      { t: '[公平|こうへい]に[比|くら]べるには、⟦[燃料|ねんりょう]⟧と⟦タイヤ⟧を[確|たし]かめます。', it: 'Per un confronto equo si controllano carburante e gomme.' }
    ],
    gloss: [
      { w: 'デルタ', r: 'でるた', it: 'delta (differenza di tempo)' },
      { w: 'オーバーレイ', r: 'おーばーれい', it: 'traccia sovrapposta' },
      { w: 'ブレーキングポイント', r: 'ぶれーきんぐぽいんと', it: 'punto di frenata' },
      { w: 'トレイルブレーキング', r: 'とれいるぶれーきんぐ', it: 'trail braking' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: '周回', r: 'しゅうかい', it: 'giro' },
      { w: '区間', r: 'くかん', it: 'tratto' },
      { w: '曲線', r: 'きょくせん', it: 'curva (linea)' }
    ]
  });

  A('f1-simulazione-giro-e-gara', {
    title: { t: 'ラップとレースのシミュレーション', it: 'Simulazione del giro e della gara' },
    sum: [
      { t: '⟦シミュレーション⟧で、いろいろな[場合|ばあい]を[試|ため]します。', it: 'Con la simulazione si provano i «e se…».' },
      { t: '[周回|しゅうかい]とレースの[二|ふた]つのレベルがあります。', it: 'Ci sono due livelli: il giro e la gara.' },
      { t: 'カーブの⟦[速度|そくど]⟧は、[横|よこ]の[加速度|かそくど]の[限界|げんかい]から[分|わ]かります。', it: 'La velocità in curva si ricava dal limite di accelerazione laterale.' },
      { t: 'レースは、[周回|しゅうかい]ごとの[時間|じかん]を[足|た]して[作|つく]ります。', it: 'La gara si costruisce sommando i tempi di ogni giro.' },
      { t: '⟦[回帰分析|かいきぶんせき]⟧で、⟦デグラデーション⟧を[見積|みつ]もります。', it: 'Con la regressione si stima il degrado.' },
      { t: '⟦[燃料|ねんりょう]⟧で[軽|かる]くなる[分|ぶん]を、[直|なお]して[考|かんが]えます。', it: 'Si corregge per il peso che si perde con il carburante.' },
      { t: 'モデルは、[本当|ほんとう]のデータと[比|くら]べて⟦[検証|けんしょう]⟧します。', it: 'Il modello si valida confrontandolo con i dati reali.' }
    ],
    gloss: [
      { w: 'シミュレーション', r: 'しみゅれーしょん', it: 'simulazione' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '回帰分析', r: 'かいきぶんせき', it: 'regressione' },
      { w: 'デグラデーション', r: 'でぐらでーしょん', it: 'degrado' },
      { w: '燃料', r: 'ねんりょう', it: 'carburante' },
      { w: '検証', r: 'けんしょう', it: 'validazione, verifica' },
      { w: '周回', r: 'しゅうかい', it: 'giro' },
      { w: '限界', r: 'げんかい', it: 'limite' },
      { w: '加速度', r: 'かそくど', it: 'accelerazione' }
    ]
  });

  A('f1-affidabilita-e-prestazioni', {
    title: { t: '[信頼性|しんらいせい]と[性能|せいのう]', it: 'Affidabilità e dati di performance' },
    sum: [
      { t: '⟦[信頼性|しんらいせい]⟧は、[最後|さいご]まで[動|うご]く⟦[確率|かくりつ]⟧です。', it: 'L’affidabilità è la probabilità di funzionare fino alla fine.' },
      { t: 'リタイアすると、[点|てん]はありません。', it: 'Se ci si ritira, non ci sono punti.' },
      { t: '⟦[故障率|こしょうりつ]⟧は、[故障|こしょう]の[数|かず]を[回数|かいすう]で[割|わ]ります。', it: 'Il tasso di guasto è il numero di guasti diviso per le prove.' },
      { t: '⟦[直列|ちょくれつ]システム⟧では、ひとつ[壊|こわ]れると[全部|ぜんぶ][止|と]まります。', it: 'In un sistema in serie, se un componente si rompe si ferma tutto.' },
      { t: '[全体|ぜんたい]の[信頼性|しんらいせい]は、[部品|ぶひん]の[値|あたい]を[掛|か]けて[出|だ]します。', it: 'L’affidabilità totale si ottiene moltiplicando i valori dei componenti.' },
      { t: '⟦エフエムイーエー⟧は、[危険|きけん]の[順番|じゅんばん]を[決|き]める[方法|ほうほう]です。', it: 'La FMEA è un metodo per ordinare i rischi per priorità.' },
      { t: '[速|はや]さと[壊|こわ]れる[危険|きけん]を、⟦[期待値|きたいち]⟧で[比|くら]べます。', it: 'Si confrontano velocità e rischio di guasto con il valore atteso.' }
    ],
    gloss: [
      { w: '信頼性', r: 'しんらいせい', it: 'affidabilità' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '故障率', r: 'こしょうりつ', it: 'tasso di guasto' },
      { w: '直列システム', r: 'ちょくれつしすてむ', it: 'sistema in serie' },
      { w: 'エフエムイーエー', r: 'えふえむいーえー', it: 'FMEA (analisi dei modi di guasto)' },
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '故障', r: 'こしょう', it: 'guasto' },
      { w: '部品', r: 'ぶひん', it: 'componente' },
      { w: '危険', r: 'きけん', it: 'rischio' }
    ]
  });

  A('f1-analisi-post-gara', {
    title: { t: 'レースの[後|あと]の[分析|ぶんせき]', it: 'Analisi post-gara: processo contro risultato' },
    sum: [
      { t: '⟦デブリーフ⟧は、レースの[後|あと]の[振|ふ]り[返|かえ]りです。', it: 'Il debrief è la riflessione dopo la gara.' },
      { t: '[何|なに]が[起|お]きたか、⟦データ⟧で[調|しら]べます。', it: 'Si indaga con i dati su cosa è successo.' },
      { t: '⟦[決定|けってい]⟧の[質|しつ]は、その[時|とき]の[情報|じょうほう]で[判断|はんだん]します。', it: 'La qualità di una decisione si giudica sulle informazioni di allora.' },
      { t: '⟦[結果|けっか]⟧だけで[判断|はんだん]するのは、[間違|まちが]いです。', it: 'Giudicare solo dal risultato è un errore.' },
      { t: '⟦[中央値|ちゅうおうち]⟧は、[外|はず]れた[値|あたい]に[強|つよ]いです。', it: 'La mediana resiste ai valori anomali.' },
      { t: '⟦[標準誤差|ひょうじゅんごさ]⟧で、[差|さ]が[本当|ほんとう]か[調|しら]べます。', it: 'Con l’errore standard si verifica se la differenza è reale.' },
      { t: '[仮定|かてい]の[計算|けいさん]は、[便利|べんり]ですが[危|あぶ]ないです。', it: 'Il calcolo dei «se…» è utile, ma pericoloso.' }
    ],
    gloss: [
      { w: 'デブリーフ', r: 'でぶりーふ', it: 'debrief, analisi post-gara' },
      { w: 'データ', r: 'でーた', it: 'dati' },
      { w: '決定', r: 'けってい', it: 'decisione' },
      { w: '結果', r: 'けっか', it: 'risultato' },
      { w: '中央値', r: 'ちゅうおうち', it: 'mediana' },
      { w: '標準誤差', r: 'ひょうじゅんごさ', it: 'errore standard' },
      { w: '情報', r: 'じょうほう', it: 'informazione' },
      { w: '判断', r: 'はんだん', it: 'giudizio' },
      { w: '分析', r: 'ぶんせき', it: 'analisi' }
    ]
  });

  A('f1-origini-e-primo-mondiale', {
    title: { t: 'はじまりと[最初|さいしょ]の[世界選手権|せかいせんしゅけん]', it: 'Le origini: dai Gran Premi al mondiale 1950' },
    sum: [
      { t: '⟦グランプリ⟧は、[千九百六年|せんきゅうひゃくろくねん]に[始|はじ]まりました。', it: 'Il Gran Premio in senso moderno nasce nel 1906.' },
      { t: '⟦フォーミュラ⟧は、[車|くるま]の[技術|ぎじゅつ]の[制限|せいげん]です。', it: 'Una formula è un insieme di limiti tecnici per le auto.' },
      { t: '⟦[世界選手権|せかいせんしゅけん]⟧は、[千九百五十年|せんきゅうひゃくごじゅうねん]に[始|はじ]まりました。', it: 'Il campionato mondiale inizia nel 1950.' },
      { t: '[最初|さいしょ]のレースは、⟦シルバーストン⟧でした。', it: 'La prima gara si è corsa a Silverstone.' },
      { t: '[勝|か]ったのは、アルファロメオのファリーナです。', it: 'Ha vinto Farina su Alfa Romeo.' },
      { t: '[千九百五十年|せんきゅうひゃくごじゅうねん]は、[上位|じょうい][五人|ごにん]だけが⟦[点|てん]⟧をもらいました。', it: 'Nel 1950 solo i primi cinque ricevevano punti.' },
      { t: 'ファンジオは、[千九百五十一年|せんきゅうひゃくごじゅういちねん]に[初|はじ]めて⟦チャンピオン⟧になりました。', it: 'Fangio è diventato campione per la prima volta nel 1951.' }
    ],
    gloss: [
      { w: 'グランプリ', r: 'ぐらんぷり', it: 'Gran Premio' },
      { w: 'フォーミュラ', r: 'ふぉーみゅら', it: 'formula (limiti tecnici)' },
      { w: '世界選手権', r: 'せかいせんしゅけん', it: 'campionato del mondo' },
      { w: 'シルバーストン', r: 'しるばーすとん', it: 'Silverstone' },
      { w: '点', r: 'てん', it: 'punto' },
      { w: 'チャンピオン', r: 'ちゃんぴおん', it: 'campione' },
      { w: '技術', r: 'ぎじゅつ', it: 'tecnica' },
      { w: '制限', r: 'せいげん', it: 'limite' },
      { w: '上位', r: 'じょうい', it: 'primi posti' }
    ]
  });

  A('f1-anni-cinquanta-sessanta', {
    title: { t: '[五十|ごじゅう]・[六十|ろくじゅう][年代|ねんだい]', it: 'Anni ’50–’60: Fangio, Moss, Clark e il motore posteriore' },
    sum: [
      { t: 'ファンジオは、[五回|ごかい]⟦チャンピオン⟧になりました。', it: 'Fangio è stato campione cinque volte.' },
      { t: '⟦モス⟧は、[一度|いちど]もチャンピオンになれませんでした。', it: 'Moss non è mai diventato campione.' },
      { t: '[千九百五十八年|せんきゅうひゃくごじゅうはちねん]は、[一点|いってん]の[差|さ]で[決|き]まりました。', it: 'Il titolo del 1958 fu deciso da un solo punto.' },
      { t: '⟦クーパー⟧が、⟦リアエンジン⟧にしました。', it: 'La Cooper adottò il motore posteriore.' },
      { t: 'ロータスは、はじめての⟦モノコック⟧を[作|つく]りました。', it: 'La Lotus costruì la prima monoscocca.' },
      { t: '⟦クラーク⟧は、ロータスで[二回|にかい]チャンピオンになりました。', it: 'Clark è stato campione due volte con la Lotus.' },
      { t: '[当時|とうじ]は、⟦[安全|あんぜん]⟧がほとんどありませんでした。', it: 'A quel tempo la sicurezza era quasi inesistente.' }
    ],
    gloss: [
      { w: 'チャンピオン', r: 'ちゃんぴおん', it: 'campione' },
      { w: 'モス', r: 'もす', it: 'Moss' },
      { w: 'クーパー', r: 'くーぱー', it: 'Cooper' },
      { w: 'リアエンジン', r: 'りあえんじん', it: 'motore posteriore' },
      { w: 'モノコック', r: 'ものこっく', it: 'monoscocca' },
      { w: 'クラーク', r: 'くらーく', it: 'Clark' },
      { w: '安全', r: 'あんぜん', it: 'sicurezza' },
      { w: 'ロータス', r: 'ろーたす', it: 'Lotus' },
      { w: '当時', r: 'とうじ', it: 'a quel tempo' }
    ]
  });

  A('f1-anni-settanta-ottanta', {
    title: { t: '[七十|ななじゅう]・[八十|はちじゅう][年代|ねんだい]', it: 'Anni ’70–’80: Lauda, Hunt, effetto suolo, turbo, Senna e Prost' },
    sum: [
      { t: '⟦コスワース⟧のエンジンで、[小|ちい]さなチームも[戦|たたか]えました。', it: 'Con il motore Cosworth anche i piccoli team potevano competere.' },
      { t: '[千九百七十六年|せんきゅうひゃくななじゅうろくねん]は、ラウダとハントの[戦|たたか]いでした。', it: 'Il 1976 fu la sfida tra Lauda e Hunt.' },
      { t: '⟦ラウダ⟧は、[大|おお]けがの[後|あと]に[戻|もど]りました。', it: 'Lauda è tornato dopo un grave incidente.' },
      { t: 'ハントが、[一点|いってん]の[差|さ]でチャンピオンになりました。', it: 'Hunt ha vinto per un solo punto.' },
      { t: '⟦グラウンドエフェクト⟧は、ロータスが[始|はじ]めました。', it: 'L’effetto suolo è stato introdotto dalla Lotus.' },
      { t: '⟦ターボ⟧は、ルノーが[最初|さいしょ]に[使|つか]いました。', it: 'Il turbo è stato usato per primo dalla Renault.' },
      { t: '⟦セナ⟧と⟦プロスト⟧は、マクラーレンの[仲間|なかま]でした。', it: 'Senna e Prost erano compagni alla McLaren.' }
    ],
    gloss: [
      { w: 'コスワース', r: 'こすわーす', it: 'Cosworth' },
      { w: 'ラウダ', r: 'らうだ', it: 'Lauda' },
      { w: 'グラウンドエフェクト', r: 'ぐらうんどえふぇくと', it: 'effetto suolo' },
      { w: 'ターボ', r: 'たーぼ', it: 'turbo' },
      { w: 'セナ', r: 'せな', it: 'Senna' },
      { w: 'プロスト', r: 'ぷろすと', it: 'Prost' },
      { w: 'ハント', r: 'はんと', it: 'Hunt' },
      { w: 'マクラーレン', r: 'まくらーれん', it: 'McLaren' },
      { w: '仲間', r: 'なかま', it: 'compagno' }
    ]
  });

  A('f1-anni-novanta-duemila', {
    title: { t: '[九十|きゅうじゅう][年代|ねんだい]から[二千年代|にせんねんだい]', it: 'Anni ’90–2000: elettronica, Schumacher e Ferrari' },
    sum: [
      { t: '⟦エレクトロニクス⟧が、[車|くるま]を[変|か]えました。', it: 'L’elettronica ha cambiato le auto.' },
      { t: '⟦アクティブサスペンション⟧は、[高|たか]さを[自動|じどう]で[調整|ちょうせい]します。', it: 'La sospensione attiva regola l’altezza in automatico.' },
      { t: '[千九百九十四年|せんきゅうひゃくきゅうじゅうよねん]に、[電子|でんし][制御|せいぎょ]の[助|たす]けは⟦[禁止|きんし]⟧されました。', it: 'Nel 1994 gli aiuti elettronici furono vietati.' },
      { t: '⟦[給油|きゅうゆ]⟧は、[千九百九十四年|せんきゅうひゃくきゅうじゅうよねん]から[二千九年|にせんきゅうねん]までできました。', it: 'Il rifornimento fu consentito dal 1994 al 2009.' },
      { t: '⟦シューマッハ⟧は、フェラーリで[勝|か]ち[続|つづ]けました。', it: 'Schumacher ha continuato a vincere con la Ferrari.' },
      { t: '[二千二年|にせんにねん]は、[十七|じゅうなな]レース[中|ちゅう][十一|じゅういち]レースで[優勝|ゆうしょう]しました。', it: 'Nel 2002 ha vinto undici gare su diciassette.' },
      { t: '⟦アロンソ⟧は、[二千五年|にせんごねん]と[二千六年|にせんろくねん]にチャンピオンでした。', it: 'Alonso è stato campione nel 2005 e nel 2006.' }
    ],
    gloss: [
      { w: 'エレクトロニクス', r: 'えれくとろにくす', it: 'elettronica' },
      { w: 'アクティブサスペンション', r: 'あくてぃぶさすぺんしょん', it: 'sospensione attiva' },
      { w: '禁止', r: 'きんし', it: 'divieto' },
      { w: '給油', r: 'きゅうゆ', it: 'rifornimento' },
      { w: 'シューマッハ', r: 'しゅーまっは', it: 'Schumacher' },
      { w: 'アロンソ', r: 'あろんそ', it: 'Alonso' },
      { w: 'フェラーリ', r: 'ふぇらーり', it: 'Ferrari' },
      { w: '優勝', r: 'ゆうしょう', it: 'vittoria' },
      { w: '調整', r: 'ちょうせい', it: 'regolazione' }
    ]
  });

  A('f1-era-ibrida-e-nuovi-regolamenti', {
    title: { t: 'ハイブリッドの[時代|じだい]と[新|あたら]しい[規則|きそく]', it: 'L’era ibrida e i nuovi regolamenti (2014–oggi)' },
    sum: [
      { t: '[二千十四年|にせんじゅうよねん]に、ハイブリッドの⟦パワーユニット⟧が[始|はじ]まりました。', it: 'Nel 2014 è iniziata l’era della power unit ibrida.' },
      { t: '⟦ブイシックス⟧のターボと、[電気|でんき]の[力|ちから]を[組|く]み[合|あ]わせます。', it: 'Unisce un V6 turbo e una parte elettrica.' },
      { t: '⟦メルセデス⟧は、[八年|はちねん][続|つづ]けてチームのタイトルを[取|と]りました。', it: 'La Mercedes ha vinto il titolo costruttori otto anni di fila.' },
      { t: '[二千二十一年|にせんにじゅういちねん]に、⟦バジェットキャップ⟧が[始|はじ]まりました。', it: 'Nel 2021 è iniziato il budget cap.' },
      { t: '[二千二十二年|にせんにじゅうにねん]は、⟦グラウンドエフェクト⟧の[車|くるま]になりました。', it: 'Nel 2022 le auto sono tornate all’effetto suolo.' },
      { t: '⟦ホイール⟧は、[十三|じゅうさん]インチから[十八|じゅうはち]インチになりました。', it: 'Le ruote sono passate da tredici a diciotto pollici.' },
      { t: '[二千二十六年|にせんにじゅうろくねん]に、[新|あたら]しい[規則|きそく]が[始|はじ]まります。', it: 'Nel 2026 inizia un nuovo regolamento.' }
    ],
    gloss: [
      { w: 'パワーユニット', r: 'ぱわーゆにっと', it: 'power unit' },
      { w: 'ブイシックス', r: 'ぶいしっくす', it: 'V6' },
      { w: 'メルセデス', r: 'めるせです', it: 'Mercedes' },
      { w: 'バジェットキャップ', r: 'ばじぇっときゃっぷ', it: 'budget cap' },
      { w: 'グラウンドエフェクト', r: 'ぐらうんどえふぇくと', it: 'effetto suolo' },
      { w: 'ホイール', r: 'ほいーる', it: 'ruota, cerchio' },
      { w: 'ハイブリッド', r: 'はいぶりっど', it: 'ibrido' },
      { w: '規則', r: 'きそく', it: 'regolamento' },
      { w: '電気', r: 'でんき', it: 'elettricità' }
    ]
  });

  A('f1-sicurezza-e-momenti-decisivi', {
    title: { t: '[安全|あんぜん]と[大切|たいせつ]な[出来事|できごと]', it: 'Sicurezza e momenti decisivi' },
    sum: [
      { t: '⟦[安全|あんぜん]⟧は、[事故|じこ]から[学|まな]んで[進|すす]みました。', it: 'La sicurezza è progredita imparando dagli incidenti.' },
      { t: '⟦スチュワート⟧は、[安全|あんぜん]のために[戦|たたか]いました。', it: 'Stewart si è battuto per la sicurezza.' },
      { t: '⟦モノコック⟧は、[安全|あんぜん]の[道具|どうぐ]にもなりました。', it: 'La monoscocca è diventata anche uno strumento di sicurezza.' },
      { t: '⟦クラッシュテスト⟧が、[義務|ぎむ]になりました。', it: 'I crash test sono diventati obbligatori.' },
      { t: '[千九百九十四年|せんきゅうひゃくきゅうじゅうよねん]の⟦イモラ⟧は、[大|おお]きな[転機|てんき]でした。', it: 'Imola 1994 è stata una grande svolta.' },
      { t: '⟦ハンス⟧は、ドライバーの[首|くび]を[守|まも]ります。', it: 'L’HANS protegge il collo del pilota.' },
      { t: '⟦バーチャルセーフティカー⟧は、ビアンキの[事故|じこ]の[後|あと]に[生|う]まれました。', it: 'La virtual safety car è nata dopo l’incidente di Bianchi.' }
    ],
    gloss: [
      { w: '安全', r: 'あんぜん', it: 'sicurezza' },
      { w: 'スチュワート', r: 'すちゅわーと', it: 'Stewart' },
      { w: 'モノコック', r: 'ものこっく', it: 'monoscocca' },
      { w: 'クラッシュテスト', r: 'くらっしゅてすと', it: 'crash test' },
      { w: 'イモラ', r: 'いもら', it: 'Imola' },
      { w: 'ハンス', r: 'はんす', it: 'HANS' },
      { w: 'バーチャルセーフティカー', r: 'ばーちゃるせーふてぃかー', it: 'virtual safety car' },
      { w: '事故', r: 'じこ', it: 'incidente' },
      { w: '義務', r: 'ぎむ', it: 'obbligo' }
    ]
  });

  A('f1-come-e-fatta-una-squadra', {
    title: { t: 'チームのしくみ', it: 'Come è fatta una squadra di Formula 1' },
    sum: [
      { t: '⟦ファクトリー⟧で、[車|くるま]を[作|つく]ります。', it: 'L’auto si costruisce in fabbrica.' },
      { t: '⟦エアロダイナミクス⟧の[部門|ぶもん]は、[空気|くうき]の[流|なが]れを[調|しら]べます。', it: 'Il reparto aerodinamico studia il flusso dell’aria.' },
      { t: '⟦シーエフディー⟧と[風洞|ふうどう]を[使|つか]います。', it: 'Si usano la CFD e la galleria del vento.' },
      { t: '⟦[設計|せっけい]⟧の[部門|ぶもん]は、[部品|ぶひん]を[図面|ずめん]にします。', it: 'Il reparto di progettazione trasforma i componenti in disegni.' },
      { t: '⟦[製造|せいぞう]⟧の[部門|ぶもん]は、[部品|ぶひん]を[実際|じっさい]に[作|つく]ります。', it: 'Il reparto di produzione realizza i componenti.' },
      { t: '⟦チームプリンシパル⟧は、チームを[率|ひき]います。', it: 'Il team principal guida la squadra.' },
      { t: 'ピットストップでは、[約|やく][二十人|にじゅうにん]が[働|はたら]きます。', it: 'Al pit stop lavorano circa venti persone.' }
    ],
    gloss: [
      { w: 'ファクトリー', r: 'ふぁくとりー', it: 'fabbrica, sede' },
      { w: 'エアロダイナミクス', r: 'えあろだいなみくす', it: 'aerodinamica' },
      { w: 'シーエフディー', r: 'しーえふでぃー', it: 'CFD' },
      { w: '設計', r: 'せっけい', it: 'progettazione' },
      { w: '製造', r: 'せいぞう', it: 'produzione' },
      { w: 'チームプリンシパル', r: 'ちーむぷりんしぱる', it: 'team principal' },
      { w: '風洞', r: 'ふうどう', it: 'galleria del vento' },
      { w: '部品', r: 'ぶひん', it: 'componente' },
      { w: '部門', r: 'ぶもん', it: 'reparto' }
    ]
  });

  A('f1-economia-e-budget-cap', {
    title: { t: 'エフワンのお[金|かね]', it: 'L’economia della Formula 1' },
    sum: [
      { t: 'お[金|かね]の[数字|すうじ]は、[正確|せいかく]に[分|わ]からないことが[多|おお]いです。', it: 'Le cifre economiche spesso non si conoscono con precisione.' },
      { t: '⟦[放送権|ほうそうけん]⟧は、[大|おお]きな[収入|しゅうにゅう]です。', it: 'I diritti televisivi sono una grande fonte di ricavi.' },
      { t: '⟦スポンサー⟧は、[広告|こうこく]のためにお[金|かね]を[払|はら]います。', it: 'Gli sponsor pagano per farsi pubblicità.' },
      { t: '⟦リバティメディア⟧は、[二千十七年|にせんじゅうななねん]に[権利|けんり]を[買|か]いました。', it: 'Liberty Media ha acquistato i diritti nel 2017.' },
      { t: '⟦[賞金|しょうきん]⟧の[一部|いちぶ]は、チームに[分|わ]けられます。', it: 'Una parte dei premi viene distribuita alle squadre.' },
      { t: '⟦バジェットキャップ⟧は、[二千二十一年|にせんにじゅういちねん]に[始|はじ]まりました。', it: 'Il budget cap è partito nel 2021.' },
      { t: 'ドライバーの[給料|きゅうりょう]は、⟦[上限|じょうげん]⟧に[入|はい]りません。', it: 'Gli stipendi dei piloti non rientrano nel tetto.' }
    ],
    gloss: [
      { w: '放送権', r: 'ほうそうけん', it: 'diritti televisivi' },
      { w: 'スポンサー', r: 'すぽんさー', it: 'sponsor' },
      { w: 'リバティメディア', r: 'りばてぃめでぃあ', it: 'Liberty Media' },
      { w: '賞金', r: 'しょうきん', it: 'premi in denaro' },
      { w: 'バジェットキャップ', r: 'ばじぇっときゃっぷ', it: 'budget cap' },
      { w: '上限', r: 'じょうげん', it: 'limite massimo' },
      { w: '収入', r: 'しゅうにゅう', it: 'ricavi' },
      { w: '権利', r: 'けんり', it: 'diritto' },
      { w: '給料', r: 'きゅうりょう', it: 'stipendio' }
    ]
  });

  A('f1-fia-promotore-costruttori', {
    title: { t: '[誰|だれ]が[決|き]めるのか', it: 'FIA, promotore e costruttori: chi decide' },
    sum: [
      { t: 'エフワンは、[三|みっ]つの[立場|たちば]で[動|うご]きます。', it: 'La F1 funziona grazie a tre attori.' },
      { t: '⟦エフアイエー⟧は、⟦[規則|きそく]⟧を[作|つく]ります。', it: 'La FIA scrive le regole.' },
      { t: '⟦プロモーター⟧は、[放送権|ほうそうけん]を[売|う]ります。', it: 'Il promotore vende i diritti televisivi.' },
      { t: '⟦コンストラクター⟧は、[車|くるま]を[作|つく]るチームです。', it: 'Il costruttore è la squadra che costruisce l’auto.' },
      { t: '⟦エフワンコミッション⟧で、[規則|きそく]について[話|はな]し[合|あ]います。', it: 'Delle regole si discute nella Commissione F1.' },
      { t: '⟦コンコルド[協定|きょうてい]⟧は、[三者|さんしゃ]の[契約|けいやく]です。', it: 'Il Concorde Agreement è il contratto tra i tre attori.' },
      { t: '[新|あたら]しいチームは、[参加費|さんかひ]を[払|はら]います。', it: 'Le nuove squadre pagano una tassa d’ingresso.' }
    ],
    gloss: [
      { w: 'エフアイエー', r: 'えふあいえー', it: 'FIA' },
      { w: '規則', r: 'きそく', it: 'regola' },
      { w: 'プロモーター', r: 'ぷろもーたー', it: 'promotore' },
      { w: 'コンストラクター', r: 'こんすとらくたー', it: 'costruttore' },
      { w: 'エフワンコミッション', r: 'えふわんこみっしょん', it: 'Commissione F1' },
      { w: 'コンコルド協定', r: 'こんこるどきょうてい', it: 'Concorde Agreement' },
      { w: '放送権', r: 'ほうそうけん', it: 'diritti televisivi' },
      { w: '契約', r: 'けいやく', it: 'contratto' },
      { w: '参加費', r: 'さんかひ', it: 'tassa di partecipazione' }
    ]
  });

  A('f1-la-strada-verso-la-formula-1', {
    title: { t: 'エフワンへの[道|みち]', it: 'La strada verso la Formula 1' },
    sum: [
      { t: '⟦カート⟧から[始|はじ]める[人|ひと]が[多|おお]いです。', it: 'Molti iniziano dal kart.' },
      { t: 'カートのあと、エフフォー、エフスリー、⟦エフツー⟧へ[進|すす]みます。', it: 'Dopo il kart si passa a F4, F3 e F2.' },
      { t: 'エフワンには、⟦スーパーライセンス⟧が[必要|ひつよう]です。', it: 'Per correre in F1 serve la super licenza.' },
      { t: '[十八歳|じゅうはっさい][以上|いじょう]でなければなりません。', it: 'Bisogna avere almeno diciotto anni.' },
      { t: '[三年|さんねん]で[四十|よんじゅう]の⟦ポイント⟧が[必要|ひつよう]です。', it: 'Servono quaranta punti in tre anni.' },
      { t: '⟦アカデミー⟧は、[若|わか]い[人|ひと]を[育|そだ]てます。', it: 'Le accademie formano i giovani.' },
      { t: 'この[道|みち]は、⟦[費用|ひよう]⟧も[大|おお]きいです。', it: 'Questo percorso ha anche costi elevati.' }
    ],
    gloss: [
      { w: 'カート', r: 'かーと', it: 'kart' },
      { w: 'エフツー', r: 'えふつー', it: 'Formula 2' },
      { w: 'スーパーライセンス', r: 'すーぱーらいせんす', it: 'super licenza' },
      { w: 'ポイント', r: 'ぽいんと', it: 'punti' },
      { w: 'アカデミー', r: 'あかでみー', it: 'accademia (programma giovani)' },
      { w: '費用', r: 'ひよう', it: 'costo' },
      { w: '道', r: 'みち', it: 'strada, percorso' },
      { w: '若い人', r: 'わかいひと', it: 'giovane' }
    ]
  });

  A('f1-carriere-dietro-le-quinte', {
    title: { t: 'エフワンの[仕事|しごと]', it: 'Carriere dietro le quinte' },
    sum: [
      { t: 'エフワンの[仕事|しごと]は、ドライバーだけではありません。', it: 'Il lavoro in F1 non è solo fare il pilota.' },
      { t: '⟦エンジニア⟧には、[空力|くうりき]や[機械|きかい]などの[分野|ぶんや]があります。', it: 'Gli ingegneri lavorano in aree come aerodinamica e meccanica.' },
      { t: '⟦データ⟧の⟦[分析|ぶんせき]⟧も、[大切|たいせつ]な[仕事|しごと]です。', it: 'Anche l’analisi dei dati è un lavoro importante.' },
      { t: '⟦ロジスティクス⟧は、[世界中|せかいじゅう]に[荷物|にもつ]を[運|はこ]びます。', it: 'La logistica porta il materiale in tutto il mondo.' },
      { t: '⟦メカニック⟧は、[技術|ぎじゅつ]を[勉強|べんきょう]します。', it: 'I meccanici studiano la tecnica.' },
      { t: '⟦フォーミュラスチューデント⟧では、[学生|がくせい]が[車|くるま]を[作|つく]ります。', it: 'In Formula Student gli studenti costruiscono un’auto.' },
      { t: '[実際|じっさい]に[作|つく]った[物|もの]は、[成績|せいせき]より[大切|たいせつ]です。', it: 'Ciò che hai costruito davvero conta più di un voto.' }
    ],
    gloss: [
      { w: 'エンジニア', r: 'えんじにあ', it: 'ingegnere' },
      { w: 'データ', r: 'でーた', it: 'dati' },
      { w: '分析', r: 'ぶんせき', it: 'analisi' },
      { w: 'ロジスティクス', r: 'ろじすてぃくす', it: 'logistica' },
      { w: 'メカニック', r: 'めかにっく', it: 'meccanico' },
      { w: 'フォーミュラスチューデント', r: 'ふぉーみゅらすちゅーでんと', it: 'Formula Student' },
      { w: '仕事', r: 'しごと', it: 'lavoro' },
      { w: '学生', r: 'がくせい', it: 'studente' },
      { w: '成績', r: 'せいせき', it: 'voto' }
    ]
  });

  A('f1-come-sistema', {
    title: { t: 'エフワンというシステム', it: 'La F1 come sistema: tecnologia, ambiente, pubblico' },
    sum: [
      { t: 'エフワンは、[街|まち]の[車|くるま]の⟦[実験室|じっけんしつ]⟧とも[言|い]われます。', it: 'La F1 è detta anche il «laboratorio» delle auto di tutti i giorni.' },
      { t: 'それは、[半分|はんぶん]だけ[本当|ほんとう]です。', it: 'Ma è vero solo in parte.' },
      { t: '⟦カーボンファイバー⟧や⟦ハイブリッド⟧は、[市販車|しはんしゃ]にも[来|き]ました。', it: 'Fibra di carbonio e sistemi ibridi sono arrivati anche sulle auto di serie.' },
      { t: '⟦ドキュメンタリー⟧が、[新|あたら]しいファンを[増|ふ]やしました。', it: 'Il documentario ha portato nuovi tifosi.' },
      { t: '⟦[二酸化炭素|にさんかたんそ]⟧は、おもに[荷物|にもつ]の[輸送|ゆそう]から[出|で]ます。', it: 'La CO2 deriva soprattutto dal trasporto delle merci.' },
      { t: '[二千二十六年|にせんにじゅうろくねん]から、⟦サステナブル[燃料|ねんりょう]⟧になる[予定|よてい]です。', it: 'Dal 2026 si prevedono carburanti sostenibili.' },
      { t: '[情報|じょうほう]は、[出|で]どころと[日付|ひづけ]を[確|たし]かめます。', it: 'Delle informazioni si controllano la fonte e la data.' }
    ],
    gloss: [
      { w: '実験室', r: 'じっけんしつ', it: 'laboratorio' },
      { w: 'カーボンファイバー', r: 'かーぼんふぁいばー', it: 'fibra di carbonio' },
      { w: 'ハイブリッド', r: 'はいぶりっど', it: 'ibrido' },
      { w: 'ドキュメンタリー', r: 'どきゅめんたりー', it: 'documentario' },
      { w: '二酸化炭素', r: 'にさんかたんそ', it: 'anidride carbonica (CO2)' },
      { w: 'サステナブル燃料', r: 'さすてなぶるねんりょう', it: 'carburante sostenibile' },
      { w: '市販車', r: 'しはんしゃ', it: 'auto di serie' },
      { w: '輸送', r: 'ゆそう', it: 'trasporto' },
      { w: '情報', r: 'じょうほう', it: 'informazione' }
    ]
  });

  A('f1-adv-termodinamica-power-unit', {
    title: { t: 'パワーユニットの[熱力学|ねつりきがく]', it: 'Termodinamica della power unit' },
    sum: [
      { t: '⟦[熱力学|ねつりきがく]⟧は、[燃料|ねんりょう]の[力|ちから]を[仕事|しごと]にする[理論|りろん]です。', it: 'La termodinamica studia come l’energia del carburante diventa lavoro.' },
      { t: '⟦オットーサイクル⟧は、エンジンの[理想|りそう]のモデルです。', it: 'Il ciclo Otto è il modello ideale del motore.' },
      { t: '⟦[圧縮比|あっしゅくひ]⟧が[高|たか]いほど、[理想|りそう]の⟦[効率|こうりつ]⟧は[高|たか]くなります。', it: 'Più alto è il rapporto di compressione, più alto è il rendimento ideale.' },
      { t: '⟦ディーゼル⟧は、[同|おな]じ[圧縮比|あっしゅくひ]ではオットーより[低|ひく]いです。', it: 'A parità di rapporto di compressione, il Diesel ha rendimento ideale più basso dell’Otto.' },
      { t: '[実際|じっさい]のエンジンには、⟦[損失|そんしつ]⟧があります。', it: 'Il motore reale ha delle perdite.' },
      { t: '[出力|しゅつりょく]は、[燃料|ねんりょう]の[量|りょう]と⟦[発熱量|はつねつりょう]⟧と[効率|こうりつ]で[決|き]まります。', it: 'La potenza dipende dalla quantità di carburante, dal potere calorifico e dal rendimento.' },
      { t: '⟦[希薄燃焼|きはくねんしょう]⟧には、[速|はや]く[安定|あんてい]して[燃|も]やす[工夫|くふう]が[必要|ひつよう]です。', it: 'La combustione magra richiede accorgimenti per bruciare in modo rapido e stabile.' }
    ],
    gloss: [
      { w: '熱力学', r: 'ねつりきがく', it: 'termodinamica' },
      { w: 'オットーサイクル', r: 'おっとーさいくる', it: 'ciclo Otto' },
      { w: '圧縮比', r: 'あっしゅくひ', it: 'rapporto di compressione' },
      { w: '効率', r: 'こうりつ', it: 'rendimento' },
      { w: 'ディーゼル', r: 'でぃーぜる', it: 'Diesel' },
      { w: '損失', r: 'そんしつ', it: 'perdita' },
      { w: '発熱量', r: 'はつねつりょう', it: 'potere calorifico' },
      { w: '希薄燃焼', r: 'きはくねんしょう', it: 'combustione magra' },
      { w: '出力', r: 'しゅつりょく', it: 'potenza' }
    ]
  });

  A('f1-adv-power-unit-2026', {
    title: { t: '[二千二十六年|にせんにじゅうろくねん]のパワーユニット', it: 'Power unit dal 2026: bilancio energetico' },
    sum: [
      { t: '[二千二十六年|にせんにじゅうろくねん]から、⟦[規則|きそく]⟧が[変|か]わります。', it: 'Dal 2026 il regolamento cambia.' },
      { t: '⟦エムジーユーケー⟧は、[今|いま]よりずっと[強力|きょうりょく]になります。', it: 'L’MGU-K diventa molto più potente di oggi.' },
      { t: '⟦エムジーユーエイチ⟧は、なくなります。', it: 'L’MGU-H viene abolita.' },
      { t: '⟦[電気|でんき]⟧の[割合|わりあい]は、[半分|はんぶん]に[近|ちか]づきます。', it: 'La quota elettrica si avvicina alla metà.' },
      { t: '⟦サステナブル[燃料|ねんりょう]⟧が[必要|ひつよう]になります。', it: 'Serve un carburante sostenibile.' },
      { t: '⟦クリッピング⟧では、[速度|そくど]が[高|たか]いと[電気|でんき]の[力|ちから]が[減|へ]ることがあります。', it: 'Con il clipping, ad alta velocità la potenza elettrica può diminuire.' },
      { t: '[数字|すうじ]は、[必|かなら]ず[最新|さいしん]の[規則|きそく]で[確|たし]かめます。', it: 'Le cifre vanno sempre verificate sul regolamento più recente.' }
    ],
    gloss: [
      { w: '規則', r: 'きそく', it: 'regolamento' },
      { w: 'エムジーユーケー', r: 'えむじーゆーけー', it: 'MGU-K' },
      { w: 'エムジーユーエイチ', r: 'えむじーゆーえいち', it: 'MGU-H' },
      { w: '電気', r: 'でんき', it: 'elettricità' },
      { w: 'サステナブル燃料', r: 'さすてなぶるねんりょう', it: 'carburante sostenibile' },
      { w: 'クリッピング', r: 'くりっぴんぐ', it: 'clipping (calo di potenza elettrica)' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '割合', r: 'わりあい', it: 'quota, proporzione' },
      { w: '数字', r: 'すうじ', it: 'cifra' }
    ]
  });

  A('f1-adv-gestione-energia-ottimale', {
    title: { t: '[電気|でんき]の[最適|さいてき]な[使|つか]い[方|かた]', it: 'Gestione ottimale dell’energia (ERS)' },
    sum: [
      { t: '⟦バッテリー⟧のエネルギーは、[限|かぎ]られています。', it: 'L’energia della batteria è limitata.' },
      { t: 'どこで[使|つか]うか、どこで[充電|じゅうでん]するかが[問題|もんだい]です。', it: 'Il problema è dove spenderla e dove ricaricarla.' },
      { t: '⟦[限界価値|げんかいかち]⟧が[同|おな]じになる[所|ところ]が、[最適|さいてき]です。', it: 'L’ottimo è dove il valore marginale è lo stesso.' },
      { t: '⟦[動的計画法|どうてきけいかくほう]⟧は、[最適|さいてき]な[使|つか]い[方|かた]を[探|さが]す[方法|ほうほう]です。', it: 'La programmazione dinamica è un metodo per trovare l’uso ottimale.' },
      { t: 'ブレーキの[時|とき]の⟦[回収|かいしゅう]⟧は、[損|そん]が[小|ちい]さいです。', it: 'Recuperare in frenata costa poco.' },
      { t: '⟦リフトアンドコースト⟧は、[燃料|ねんりょう]を[節約|せつやく]しますが、[時間|じかん]を[失|うしな]います。', it: 'Il lift and coast risparmia carburante, ma fa perdere tempo.' },
      { t: '⟦モデル⟧は、[簡単|かんたん]にしすぎているところがあります。', it: 'Il modello ha parti troppo semplificate.' }
    ],
    gloss: [
      { w: 'バッテリー', r: 'ばってりー', it: 'batteria' },
      { w: '限界価値', r: 'げんかいかち', it: 'valore marginale' },
      { w: '動的計画法', r: 'どうてきけいかくほう', it: 'programmazione dinamica' },
      { w: '回収', r: 'かいしゅう', it: 'recupero' },
      { w: 'リフトアンドコースト', r: 'りふとあんどこーすと', it: 'lift and coast' },
      { w: 'モデル', r: 'もでる', it: 'modello' },
      { w: '最適', r: 'さいてき', it: 'ottimale' },
      { w: '充電', r: 'じゅうでん', it: 'ricarica' },
      { w: '節約', r: 'せつやく', it: 'risparmio' }
    ]
  });

  A('f1-adv-aerodinamica-avanzata', {
    title: { t: '[空力|くうりき]の[詳|くわ]しい[話|はなし]', it: 'Aerodinamica avanzata: CFD, vortici, stallo' },
    sum: [
      { t: '⟦シーエフディー⟧は、[空気|くうき]を[細|こま]かい[区画|くかく]に[分|わ]けて[計算|けいさん]します。', it: 'La CFD divide l’aria in piccole celle e calcola.' },
      { t: '⟦[乱流|らんりゅう]⟧には、いくつかのモデルがあります。', it: 'Per la turbolenza esistono diversi modelli.' },
      { t: '⟦レイノルズ[数|すう]⟧は、[乱流|らんりゅう]を[決|き]める[数|かず]です。', it: 'Il numero di Reynolds è il valore che regola la turbolenza.' },
      { t: '⟦[圧力係数|あつりょくけいすう]⟧は、[圧力|あつりょく]を[比|くら]べる[数|かず]です。', it: 'Il coefficiente di pressione serve a confrontare le pressioni.' },
      { t: '⟦ボルテックス⟧は、[空気|くうき]の[渦|うず]です。', it: 'Il vortice è un mulinello d’aria.' },
      { t: '⟦ストール⟧では、[流|なが]れが[表面|ひょうめん]からはがれます。', it: 'Nello stallo il flusso si stacca dalla superficie.' },
      { t: '[二千二十六年|にせんにじゅうろくねん]は、⟦アクティブエアロ⟧になる[予定|よてい]です。', it: 'Nel 2026 è prevista un’aerodinamica attiva.' }
    ],
    gloss: [
      { w: 'シーエフディー', r: 'しーえふでぃー', it: 'CFD' },
      { w: '乱流', r: 'らんりゅう', it: 'turbolenza' },
      { w: 'レイノルズ数', r: 'れいのるずすう', it: 'numero di Reynolds' },
      { w: '圧力係数', r: 'あつりょくけいすう', it: 'coefficiente di pressione' },
      { w: 'ボルテックス', r: 'ぼるてっくす', it: 'vortice' },
      { w: 'ストール', r: 'すとーる', it: 'stallo' },
      { w: 'アクティブエアロ', r: 'あくてぃぶえあろ', it: 'aerodinamica attiva' },
      { w: '圧力', r: 'あつりょく', it: 'pressione' },
      { w: '渦', r: 'うず', it: 'vortice, mulinello' }
    ]
  });

  A('f1-adv-modelli-pneumatico', {
    title: { t: 'タイヤのモデル', it: 'Modelli di pneumatico: Magic Formula e termica' },
    sum: [
      { t: '⟦タイヤ⟧は、[少|すこ]しすべることで[力|ちから]を[出|だ]します。', it: 'La gomma genera forza scivolando un poco.' },
      { t: '⟦スリップアングル⟧は、[横|よこ]の[力|ちから]に[関係|かんけい]します。', it: 'L’angolo di deriva è legato alla forza laterale.' },
      { t: '⟦マジックフォーミュラ⟧は、[力|ちから]の[曲線|きょくせん]を[表|あらわ]す[式|しき]です。', it: 'La Magic Formula è una formula che descrive la curva della forza.' },
      { t: '[力|ちから]は、あるところで[最大|さいだい]になります。', it: 'La forza raggiunge un massimo a un certo punto.' },
      { t: '⟦[荷重|かじゅう]⟧が[二倍|にばい]でも、[力|ちから]は[二倍|にばい]になりません。', it: 'Se il carico raddoppia, la forza non raddoppia.' },
      { t: '⟦[摩擦楕円|まさつだえん]⟧では、[前後|ぜんご]の[力|ちから]を[使|つか]うと[横|よこ]の[力|ちから]が[減|へ]ります。', it: 'Con l’ellisse di aderenza, usare forza longitudinale riduce quella laterale.' },
      { t: '⟦[温度|おんど]⟧にも、ちょうどよい[範囲|はんい]があります。', it: 'Anche la temperatura ha un intervallo ottimale.' }
    ],
    gloss: [
      { w: 'タイヤ', r: 'たいや', it: 'gomma' },
      { w: 'スリップアングル', r: 'すりっぷあんぐる', it: 'angolo di deriva' },
      { w: 'マジックフォーミュラ', r: 'まじっくふぉーみゅら', it: 'Magic Formula (Pacejka)' },
      { w: '荷重', r: 'かじゅう', it: 'carico verticale' },
      { w: '摩擦楕円', r: 'まさつだえん', it: 'ellisse di aderenza' },
      { w: '温度', r: 'おんど', it: 'temperatura' },
      { w: '曲線', r: 'きょくせん', it: 'curva (grafico)' },
      { w: '範囲', r: 'はんい', it: 'intervallo' },
      { w: '最大', r: 'さいだい', it: 'massimo' }
    ]
  });

  A('f1-adv-dinamica-veicolo', {
    title: { t: '[車|くるま]の[動|うご]きの[詳|くわ]しい[話|はなし]', it: 'Dinamica del veicolo avanzata' },
    sum: [
      { t: '⟦バイシクルモデル⟧は、[車|くるま]を[二|ふた]つの[車輪|しゃりん]で[表|あらわ]します。', it: 'Il modello a bicicletta rappresenta l’auto con due ruote.' },
      { t: '⟦アンダーステア[勾配|こうばい]⟧が[正|せい]なら、アンダーステアです。', it: 'Se il gradiente di sottosterzo è positivo, c’è sottosterzo.' },
      { t: '[勾配|こうばい]が[負|ふ]なら、オーバーステアです。', it: 'Se il gradiente è negativo, c’è sovrasterzo.' },
      { t: '⟦[臨界速度|りんかいそくど]⟧を[超|こ]えると、[不安定|ふあんてい]になります。', it: 'Oltre la velocità critica l’auto diventa instabile.' },
      { t: '⟦[荷重移動|かじゅういどう]⟧は、[重心|じゅうしん]の[高|たか]さに[関係|かんけい]します。', it: 'Il trasferimento di carico dipende dall’altezza del baricentro.' },
      { t: '[荷重移動|かじゅういどう]が[大|おお]きい[軸|じく]は、⟦グリップ⟧が[減|へ]ります。', it: 'L’asse con più trasferimento di carico perde aderenza.' },
      { t: '[速|はや]いカーブでは、⟦[非線形|ひせんけい]⟧のモデルが[必要|ひつよう]です。', it: 'Nelle curve veloci serve un modello non lineare.' }
    ],
    gloss: [
      { w: 'バイシクルモデル', r: 'ばいしくるもでる', it: 'modello a bicicletta' },
      { w: 'アンダーステア勾配', r: 'あんだーすてあこうばい', it: 'gradiente di sottosterzo' },
      { w: '臨界速度', r: 'りんかいそくど', it: 'velocità critica' },
      { w: '荷重移動', r: 'かじゅういどう', it: 'trasferimento di carico' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '非線形', r: 'ひせんけい', it: 'non lineare' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '車輪', r: 'しゃりん', it: 'ruota' },
      { w: '不安定', r: 'ふあんてい', it: 'instabile' }
    ]
  });

  A('f1-adv-tempo-sul-giro', {
    title: { t: 'ラップタイムの[最適化|さいてきか]', it: 'Simulazione e ottimizzazione del tempo sul giro' },
    sum: [
      { t: '[最短|さいたん]の⟦ラップタイム⟧を[探|さが]す[問題|もんだい]です。', it: 'Il problema è trovare il tempo sul giro più breve.' },
      { t: '[遅|おそ]い[所|ところ]ほど、[時間|じかん]に[大|おお]きく[効|き]きます。', it: 'Le zone lente pesano di più sul tempo.' },
      { t: '⟦[摩擦円|まさつえん]⟧では、[横|よこ]の[力|ちから]が[大|おお]きいと[加速|かそく]の[余裕|よゆう]が[減|へ]ります。', it: 'Nel cerchio di aderenza, con molta forza laterale resta meno margine per accelerare.' },
      { t: '⟦キューエスエス[法|ほう]⟧は、[速度|そくど]を[前後|ぜんご]の[二回|にかい]で[計算|けいさん]します。', it: 'Il metodo QSS calcola la velocità con due passate, avanti e indietro.' },
      { t: '⟦ライン⟧を[大|おお]きく[取|と]ると、[平均|へいきん]の[速度|そくど]が[上|あ]がります。', it: 'Una traiettoria larga permette una velocità media più alta.' },
      { t: '⟦[最適制御|さいてきせいぎょ]⟧は、[車|くるま]の[動|うご]きを[全部|ぜんぶ][考|かんが]えます。', it: 'Il controllo ottimo tiene conto di tutta la dinamica dell’auto.' },
      { t: '⟦シミュレーション⟧は、[比較|ひかく]に[向|む]いています。', it: 'La simulazione è adatta ai confronti.' }
    ],
    gloss: [
      { w: 'ラップタイム', r: 'らっぷたいむ', it: 'tempo sul giro' },
      { w: '摩擦円', r: 'まさつえん', it: 'cerchio di aderenza' },
      { w: 'キューエスエス法', r: 'きゅーえすえすほう', it: 'metodo QSS (quasi-stazionario)' },
      { w: 'ライン', r: 'らいん', it: 'traiettoria' },
      { w: '最適制御', r: 'さいてきせいぎょ', it: 'controllo ottimo' },
      { w: 'シミュレーション', r: 'しみゅれーしょん', it: 'simulazione' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '比較', r: 'ひかく', it: 'confronto' },
      { w: '余裕', r: 'よゆう', it: 'margine' }
    ]
  });

  A('f1-adv-affidabilita-e-dati', {
    title: { t: '[信頼性|しんらいせい]とデータ', it: 'Affidabilità, rischio e analisi dei dati' },
    sum: [
      { t: '⟦[信頼性|しんらいせい]⟧は、[工学|こうがく]の[問題|もんだい]です。', it: 'L’affidabilità è un problema di ingegneria.' },
      { t: '⟦ワイブル[分布|ぶんぷ]⟧は、[部品|ぶひん]の⟦[寿命|じゅみょう]⟧の[標準|ひょうじゅん]モデルです。', it: 'La distribuzione di Weibull è il modello standard della vita dei componenti.' },
      { t: '[形|かたち]を[表|あらわ]す[値|あたい]で、[危険|きけん]が[増|ふ]えるかが[分|わ]かります。', it: 'Il parametro di forma indica se il rischio aumenta.' },
      { t: '⟦エムティービーエフ⟧は、[保証|ほしょう]された[寿命|じゅみょう]ではありません。', it: 'L’MTBF non è una vita garantita.' },
      { t: '[使|つか]った[部品|ぶひん]は、[新品|しんぴん]とは[違|ちが]います。', it: 'Un componente usato non è come uno nuovo.' },
      { t: '⟦マルコフ[連鎖|れんさ]⟧は、[状態|じょうたい]の[変|か]わり[方|かた]を[表|あらわ]します。', it: 'La catena di Markov descrive come cambia lo stato.' },
      { t: '⟦テレメトリー⟧のデータは、[誤差|ごさ]の[範囲|はんい]を[付|つ]けて[見|み]ます。', it: 'I dati di telemetria si leggono con un margine di errore.' }
    ],
    gloss: [
      { w: '信頼性', r: 'しんらいせい', it: 'affidabilità' },
      { w: 'ワイブル分布', r: 'わいぶるぶんぷ', it: 'distribuzione di Weibull' },
      { w: '寿命', r: 'じゅみょう', it: 'vita (di un componente)' },
      { w: 'エムティービーエフ', r: 'えむてぃーびーえふ', it: 'MTBF (tempo medio fra guasti)' },
      { w: 'マルコフ連鎖', r: 'まるこふれんさ', it: 'catena di Markov' },
      { w: 'テレメトリー', r: 'てれめとりー', it: 'telemetria' },
      { w: '部品', r: 'ぶひん', it: 'componente' },
      { w: '誤差', r: 'ごさ', it: 'errore' },
      { w: '状態', r: 'じょうたい', it: 'stato' }
    ]
  });

})(window.ST = window.ST || {});
