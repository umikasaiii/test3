(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);

  A('spo-sistemi-energetici', {
    title: { t: 'エネルギーの[三|みっ]つの[仕組|しく]み', it: 'I sistemi energetici' },
    sum: [
      { t: '⟦エーティーピー⟧は、[筋肉|きんにく]が[使|つか]うお[金|かね]です。', it: 'L’ATP è la «moneta» che il muscolo usa.' },
      { t: 'エーティーピーの[蓄|たくわ]えは[少|すく]なく、[数秒|すうびょう]しかもちません。', it: 'Le scorte di ATP sono scarse e durano solo pochi secondi.' },
      { t: '⟦ホスホクレアチン⟧の[系|けい]は、[酸素|さんそ]がいらず、[力|ちから]が[一番|いちばん][大|おお]きいです。', it: 'Il sistema della fosfocreatina non richiede ossigeno e ha la potenza più alta, ma una capacità molto piccola.' },
      { t: '⟦[解糖|かいとう]⟧は、[糖|とう]から⟦[乳酸|にゅうさん]⟧ができて[続|つづ]きます。', it: 'La glicolisi parte dagli zuccheri e prosegue grazie alla formazione di lattato.' },
      { t: '⟦ミトコンドリア⟧で、[酸素|さんそ]を[使|つか]って[糖|とう]と[脂肪|しぼう]を[燃|も]やします。', it: 'Nei mitocondri si bruciano zuccheri e grassi usando ossigeno.' },
      { t: '[弱|よわ]い[運動|うんどう]では⟦[脂肪|しぼう]⟧、[強|つよ]い[運動|うんどう]では⟦[炭水化物|たんすいかぶつ]⟧を[多|おお]く[使|つか]います。', it: 'Con sforzi leggeri si usano più grassi, con sforzi intensi più carboidrati.' },
      { t: '⟦イーポック⟧は、[運動|うんどう]のあとも[酸素|さんそ]の[消費|しょうひ]が[高|たか]いことです。', it: 'L’EPOC è il consumo di ossigeno che resta elevato anche dopo lo sforzo.' }
    ],
    gloss: [
      { w: 'エーティーピー', r: 'えーてぃーぴー', it: 'ATP, moneta energetica del muscolo' },
      { w: 'ホスホクレアチン', r: 'ほすほくれあちん', it: 'fosfocreatina' },
      { w: '解糖', r: 'かいとう', it: 'glicolisi' },
      { w: '乳酸', r: 'にゅうさん', it: 'lattato' },
      { w: 'ミトコンドリア', r: 'みとこんどりあ', it: 'mitocondrio' },
      { w: '脂肪', r: 'しぼう', it: 'grasso' },
      { w: '炭水化物', r: 'たんすいかぶつ', it: 'carboidrati' },
      { w: 'イーポック', r: 'いーぽっく', it: 'EPOC (consumo di ossigeno dopo l’esercizio)' },
      { w: '酸素', r: 'さんそ', it: 'ossigeno' },
      { w: '筋肉', r: 'きんにく', it: 'muscolo' }
    ]
  });

  A('spo-muscolo-scheletrico', {
    title: { t: '[筋肉|きんにく]の[仕組|しく]み', it: 'Il muscolo scheletrico' },
    sum: [
      { t: '⟦[筋線維|きんせんい]⟧には、[遅|おそ]いタイプと[速|はや]いタイプがあります。', it: 'Le fibre muscolari sono di tipo lento e di tipo veloce.' },
      { t: '[遅|おそ]い[線維|せんい]は[疲|つか]れにくく、[速|はや]い[線維|せんい]は[疲|つか]れやすいです。', it: 'Le fibre lente si affaticano poco, quelle veloci si affaticano facilmente.' },
      { t: '⟦[運動単位|うんどうたんい]⟧の[線維|せんい]は、[同|おな]じタイプで[一緒|いっしょ]に[縮|ちぢ]みます。', it: 'Le fibre di un’unità motoria sono dello stesso tipo e si contraggono insieme.' },
      { t: '⟦ヘンネマンの[原理|げんり]⟧では、[小|ちい]さい[単位|たんい]から[先|さき]に[使|つか]います。', it: 'Secondo il principio di Henneman si usano prima le unità piccole.' },
      { t: '[速|はや]い[線維|せんい]を[使|つか]うには、[重|おも]い[負荷|ふか]か[最大|さいだい]の[速|はや]さの[意図|いと]が[必要|ひつよう]です。', it: 'Per attivare le fibre veloci servono carichi alti o l’intento di velocità massima.' },
      { t: '[収縮|しゅうしゅく]には⟦[短縮性|たんしゅくせい]⟧と⟦[伸張性|しんちょうせい]⟧と⟦[等尺性|とうしゃくせい]⟧があります。', it: 'Le contrazioni sono concentrica, eccentrica e isometrica.' },
      { t: '⟦パワー⟧は、[真|ま]ん[中|なか]くらいの[負荷|ふか]で[一番|いちばん][大|おお]きくなります。', it: 'La potenza è massima con un carico intermedio.' }
    ],
    gloss: [
      { w: '筋線維', r: 'きんせんい', it: 'fibra muscolare' },
      { w: '運動単位', r: 'うんどうたんい', it: 'unità motoria' },
      { w: 'ヘンネマンの原理', r: 'へんねまんのげんり', it: 'principio di Henneman (della dimensione)' },
      { w: '短縮性', r: 'たんしゅくせい', it: 'concentrica' },
      { w: '伸張性', r: 'しんちょうせい', it: 'eccentrica' },
      { w: '等尺性', r: 'とうしゃくせい', it: 'isometrica' },
      { w: 'パワー', r: 'ぱわー', it: 'potenza' },
      { w: '収縮', r: 'しゅうしゅく', it: 'contrazione' },
      { w: '負荷', r: 'ふか', it: 'carico' }
    ]
  });

  A('spo-sistema-nervoso-coordinazione', {
    title: { t: '[神経|しんけい]と[動|うご]きの[調整|ちょうせい]', it: 'Sistema nervoso e coordinazione' },
    sum: [
      { t: '[動|うご]きの[命令|めいれい]は、[脳|のう]から⟦[脊髄|せきずい]⟧へ[伝|つた]わります。', it: 'Il comando del movimento va dal cervello al midollo spinale.' },
      { t: '⟦[発火頻度|はっかひんど]⟧が[高|たか]いと、[筋肉|きんにく]の[力|ちから]は[強|つよ]くなります。', it: 'Se la frequenza di scarica è alta, la forza del muscolo aumenta.' },
      { t: '[力|ちから]のトレーニングで、[運動単位|うんどうたんい]を[十分|じゅうぶん]に[使|つか]えることがあります。', it: 'Con l’allenamento di forza si possono attivare le unità motorie in modo più completo.' },
      { t: '⟦アールエフディー⟧は、[力|ちから]を[出|だ]す[速|はや]さです。', it: 'La RFD è la rapidità con cui si produce forza.' },
      { t: '⟦[筋紡錘|きんぼうすい]⟧は、[筋肉|きんにく]の[長|なが]さを[感|かん]じます。', it: 'Il fuso neuromuscolare rileva la lunghezza del muscolo.' },
      { t: '⟦[運動学習|うんどうがくしゅう]⟧には、[三|みっ]つの[段階|だんかい]があります。', it: 'L’apprendimento motorio ha tre fasi.' },
      { t: '⟦[特異性|とくいせい]⟧のため、[練習|れんしゅう]した[動|うご]きが[一番|いちばん]よくなります。', it: 'Per la specificità migliora soprattutto il gesto che si è allenato.' }
    ],
    gloss: [
      { w: '脊髄', r: 'せきずい', it: 'midollo spinale' },
      { w: '発火頻度', r: 'はっかひんど', it: 'frequenza di scarica (rate coding)' },
      { w: 'アールエフディー', r: 'あーるえふでぃー', it: 'RFD, rapidità di produzione di forza' },
      { w: '筋紡錘', r: 'きんぼうすい', it: 'fuso neuromuscolare' },
      { w: '運動学習', r: 'うんどうがくしゅう', it: 'apprendimento motorio' },
      { w: '特異性', r: 'とくいせい', it: 'specificità' },
      { w: '運動単位', r: 'うんどうたんい', it: 'unità motoria' },
      { w: '神経', r: 'しんけい', it: 'nervo, sistema nervoso' },
      { w: '段階', r: 'だんかい', it: 'fase, stadio' }
    ]
  });

  A('spo-cardio-respiratorio', {
    title: { t: '[心臓|しんぞう]と[呼吸|こきゅう]', it: 'Sistema cardio-respiratorio' },
    sum: [
      { t: '[酸素|さんそ]は、[肺|はい]から[筋肉|きんにく]まで[運|はこ]ばれます。', it: 'L’ossigeno viene trasportato dai polmoni fino ai muscoli.' },
      { t: '⟦[心拍出量|しんはくしゅつりょう]⟧は、[心拍数|しんぱくすう]と[一回|いっかい]の[量|りょう]の[積|せき]です。', it: 'La gittata cardiaca è il prodotto di frequenza cardiaca e gittata sistolica.' },
      { t: '⟦フィックの[式|しき]⟧では、[心拍出量|しんはくしゅつりょう]に[酸素|さんそ]の[差|さ]をかけます。', it: 'Nell’equazione di Fick si moltiplica la gittata cardiaca per la differenza di ossigeno.' },
      { t: '⟦ブイオーツーマックス⟧は、[最大|さいだい]の[酸素|さんそ]の[消費量|しょうひりょう]です。', it: 'Il VO2max è il massimo consumo di ossigeno.' },
      { t: '⟦[最大心拍数|さいだいしんぱくすう]⟧は[式|しき]で[見積|みつ]もりますが、[誤差|ごさ]があります。', it: 'La frequenza cardiaca massima si stima con formule, ma c’è un errore.' },
      { t: '[運動|うんどう]の[強|つよ]さには、[二|ふた]つの⟦[閾値|いきち]⟧があります。', it: 'Per l’intensità dello sforzo ci sono due soglie.' },
      { t: '[長|なが]く[練習|れんしゅう]すると、[安静時|あんせいじ]の⟦[心拍数|しんぱくすう]⟧が[下|さ]がります。', it: 'Con un allenamento prolungato la frequenza cardiaca a riposo diminuisce.' }
    ],
    gloss: [
      { w: '心拍出量', r: 'しんはくしゅつりょう', it: 'gittata cardiaca' },
      { w: 'フィックの式', r: 'ふぃっくのしき', it: 'equazione di Fick' },
      { w: 'ブイオーツーマックス', r: 'ぶいおーつーまっくす', it: 'VO2max' },
      { w: '最大心拍数', r: 'さいだいしんぱくすう', it: 'frequenza cardiaca massima' },
      { w: '閾値', r: 'いきち', it: 'soglia' },
      { w: '心拍数', r: 'しんぱくすう', it: 'frequenza cardiaca' },
      { w: '酸素', r: 'さんそ', it: 'ossigeno' },
      { w: '肺', r: 'はい', it: 'polmone' },
      { w: '誤差', r: 'ごさ', it: 'errore' }
    ]
  });

  A('spo-adattamento-allenamento', {
    title: { t: '[練習|れんしゅう]への[適応|てきおう]', it: 'Adattamento all’allenamento' },
    sum: [
      { t: '[練習|れんしゅう]のあと[回復|かいふく]すると、からだは⟦[適応|てきおう]⟧します。', it: 'Dopo l’allenamento, con il recupero, il corpo si adatta.' },
      { t: '⟦[漸進的過負荷|ぜんしんてきかふか]⟧では、[刺激|しげき]を[少|すこ]しずつ[増|ふ]やします。', it: 'Con il sovraccarico progressivo lo stimolo aumenta poco alla volta.' },
      { t: '⟦[特異性|とくいせい]⟧とは、からだが[求|もと]められた[動|うご]きに[合|あ]うことです。', it: 'La specificità è l’adattarsi del corpo alle richieste imposte.' },
      { t: '⟦[超回復|ちょうかいふく]⟧は[便利|べんり]ですが、[単純|たんじゅん]すぎる[考|かんが]え[方|かた]です。', it: 'La supercompensazione è utile, ma è un’idea troppo semplice.' },
      { t: '[同|おな]じ[計画|けいかく]でも、[結果|けっか]は⟦[個人差|こじんさ]⟧が[大|おお]きいです。', it: 'Anche con lo stesso programma i risultati differiscono molto da persona a persona.' },
      { t: '[変化|へんか]が⟦[測定誤差|そくていごさ]⟧より[小|ちい]さければ、[判断|はんだん]できません。', it: 'Se il cambiamento è minore dell’errore di misura, non si può concludere nulla.' },
      { t: '⟦ディトレーニング⟧で、[適応|てきおう]は[失|うしな]われます。', it: 'Con il detraining gli adattamenti si perdono.' }
    ],
    gloss: [
      { w: '適応', r: 'てきおう', it: 'adattamento' },
      { w: '漸進的過負荷', r: 'ぜんしんてきかふか', it: 'sovraccarico progressivo' },
      { w: '特異性', r: 'とくいせい', it: 'specificità' },
      { w: '超回復', r: 'ちょうかいふく', it: 'supercompensazione' },
      { w: '個人差', r: 'こじんさ', it: 'differenza individuale' },
      { w: '測定誤差', r: 'そくていごさ', it: 'errore di misura' },
      { w: 'ディトレーニング', r: 'でぃとれーにんぐ', it: 'detraining (perdita degli adattamenti)' },
      { w: '刺激', r: 'しげき', it: 'stimolo' },
      { w: '回復', r: 'かいふく', it: 'recupero' }
    ]
  });

  A('spo-recupero-fatica', {
    title: { t: '[回復|かいふく]と[疲労|ひろう]', it: 'Recupero e fatica' },
    sum: [
      { t: '[適応|てきおう]は、⟦[回復|かいふく]⟧のあいだに[起|お]こります。', it: 'L’adattamento avviene durante il recupero.' },
      { t: '⟦[睡眠|すいみん]⟧は、[一番|いちばん]しっかりした[回復|かいふく]の[方法|ほうほう]です。', it: 'Il sonno è il metodo di recupero con più evidenza.' },
      { t: '⟦[疲労|ひろう]⟧は、[力|ちから]を[出|だ]す[能力|のうりょく]が[下|さ]がることです。', it: 'La fatica è il calo della capacità di produrre forza.' },
      { t: '⟦[末梢性|まっしょうせい]⟧は[筋肉|きんにく]、⟦[中枢性|ちゅうすうせい]⟧は[神経|しんけい]の[疲労|ひろう]です。', it: 'La fatica periferica è del muscolo, quella centrale è del sistema nervoso.' },
      { t: '⟦ドムス⟧は[遅|おそ]れて[出|で]る[筋肉痛|きんにくつう]で、[乳酸|にゅうさん]のせいではありません。', it: 'I DOMS sono il dolore muscolare tardivo e non dipendono dall’acido lattico.' },
      { t: '⟦オーバーリーチング⟧は、[重|おも]い[練習|れんしゅう]で[成績|せいせき]が[少|すこ]し[下|さ]がることです。', it: 'L’overreaching è un lieve calo di prestazione dopo un carico pesante.' },
      { t: '⟦[炭水化物|たんすいかぶつ]⟧をとることも[回復|かいふく]に[大切|たいせつ]です。', it: 'Anche assumere carboidrati è importante per il recupero.' }
    ],
    gloss: [
      { w: '回復', r: 'かいふく', it: 'recupero' },
      { w: '睡眠', r: 'すいみん', it: 'sonno' },
      { w: '疲労', r: 'ひろう', it: 'fatica' },
      { w: '末梢性', r: 'まっしょうせい', it: 'periferico' },
      { w: '中枢性', r: 'ちゅうすうせい', it: 'centrale' },
      { w: 'ドムス', r: 'どむす', it: 'DOMS, dolore muscolare a insorgenza ritardata' },
      { w: 'オーバーリーチング', r: 'おーばーりーちんぐ', it: 'overreaching' },
      { w: '炭水化物', r: 'たんすいかぶつ', it: 'carboidrati' },
      { w: '筋肉痛', r: 'きんにくつう', it: 'dolore muscolare' }
    ]
  });

  A('spo-metodo-scientifico-sport', {
    title: { t: 'スポーツの[科学的|かがくてき]な[考|かんが]え[方|かた]', it: 'Il metodo scientifico nello sport' },
    sum: [
      { t: '⟦[科学的方法|かがくてきほうほう]⟧は、[間違|まちが]いを[減|へ]らす[方法|ほうほう]です。', it: 'Il metodo scientifico serve a ridurre gli errori.' },
      { t: '⟦[無作為化比較試験|むさくいかひかくしけん]⟧は、[証拠|しょうこ]が[強|つよ]い[研究|けんきゅう]です。', it: 'Il trial randomizzato controllato è uno studio con evidenza forte.' },
      { t: '⟦[効果量|こうかりょう]⟧は、[差|さ]の[大|おお]きさを[表|あらわ]します。', it: 'La dimensione dell’effetto esprime quanto è grande una differenza.' },
      { t: '[標本|ひょうほん]の[平均|へいきん]には⟦[標準誤差|ひょうじゅんごさ]⟧があります。', it: 'La media di un campione ha un errore standard.' },
      { t: '⟦バイアス⟧は、[結果|けっか]を[偏|かたよ]らせる[歪|ゆが]みです。', it: 'Il bias è una distorsione che sposta i risultati.' },
      { t: '⟦[相関|そうかん]⟧があっても、[原因|げんいん]とは[限|かぎ]りません。', it: 'Anche se c’è correlazione, non è detto che ci sia una causa.' },
      { t: '[半分|はんぶん]に[減|へ]ると[聞|き]いたら、⟦[絶対|ぜったい]リスク⟧も[見|み]ます。', it: 'Se senti «si dimezza il rischio», guarda anche il rischio assoluto.' }
    ],
    gloss: [
      { w: '科学的方法', r: 'かがくてきほうほう', it: 'metodo scientifico' },
      { w: '無作為化比較試験', r: 'むさくいかひかくしけん', it: 'trial randomizzato controllato' },
      { w: '効果量', r: 'こうかりょう', it: 'dimensione dell’effetto' },
      { w: '標準誤差', r: 'ひょうじゅんごさ', it: 'errore standard' },
      { w: 'バイアス', r: 'ばいあす', it: 'bias, distorsione' },
      { w: '相関', r: 'そうかん', it: 'correlazione' },
      { w: '絶対リスク', r: 'ぜったいりすく', it: 'rischio assoluto' },
      { w: '原因', r: 'げんいん', it: 'causa' },
      { w: '研究', r: 'けんきゅう', it: 'studio, ricerca' }
    ]
  });

  A('spo-principi-costruzione-forza', {
    title: { t: '[筋力|きんりょく]づくりの[原則|げんそく]', it: 'Principi di costruzione della forza' },
    sum: [
      { t: '[筋力|きんりょく]の[計画|けいかく]は、⟦[強度|きょうど]⟧、⟦ボリューム⟧、⟦[頻度|ひんど]⟧などで[作|つく]ります。', it: 'Un programma di forza si costruisce con intensità, volume, frequenza e altre variabili.' },
      { t: '⟦ワンアールエム⟧は、[一回|いっかい]だけ[上|あ]げられる[最大|さいだい]の[重|おも]さです。', it: 'La 1RM è il carico massimo sollevabile una sola volta.' },
      { t: '⟦エプリー⟧と⟦ブリツキー⟧の[式|しき]で、ワンアールエムを[見積|みつ]もれます。', it: 'Con le formule di Epley e Brzycki si può stimare la 1RM.' },
      { t: '[式|しき]の[値|あたい]は[近似|きんじ]で、[正確|せいかく]ではありません。', it: 'Il valore delle formule è un’approssimazione, non è esatto.' },
      { t: '[週|しゅう]のボリュームは、[結果|けっか]と[関係|かんけい]が[深|ふか]いです。', it: 'Il volume settimanale è molto legato ai risultati.' },
      { t: '⟦ダブルプログレッション⟧は、[回数|かいすう]を[増|ふ]やして、[次|つぎ]に[重|おも]さを[上|あ]げます。', it: 'Nella doppia progressione prima si aumentano le ripetizioni, poi il carico.' },
      { t: '[重|おも]い[種目|しゅもく]は、[長|なが]い⟦[休憩|きゅうけい]⟧が[必要|ひつよう]です。', it: 'Gli esercizi pesanti richiedono un riposo lungo.' }
    ],
    gloss: [
      { w: '強度', r: 'きょうど', it: 'intensità' },
      { w: 'ボリューム', r: 'ぼりゅーむ', it: 'volume' },
      { w: '頻度', r: 'ひんど', it: 'frequenza' },
      { w: 'ワンアールエム', r: 'わんあーるえむ', it: '1RM, massimale di una ripetizione' },
      { w: 'エプリー', r: 'えぷりー', it: 'Epley (formula)' },
      { w: 'ブリツキー', r: 'ぶりつきー', it: 'Brzycki (formula)' },
      { w: 'ダブルプログレッション', r: 'だぶるぷろぐれっしょん', it: 'doppia progressione' },
      { w: '休憩', r: 'きゅうけい', it: 'riposo, pausa' },
      { w: '筋力', r: 'きんりょく', it: 'forza muscolare' }
    ]
  });

  A('spo-ipertrofia-muscolare', {
    title: { t: '[筋肥大|きんひだい]', it: 'Ipertrofia: volume, vicinanza al cedimento e frequenza' },
    sum: [
      { t: '⟦[筋肥大|きんひだい]⟧は、[筋肉|きんにく]が[大|おお]きくなることです。', it: 'L’ipertrofia è l’aumento di dimensione del muscolo.' },
      { t: '[一番|いちばん]の[刺激|しげき]は、⟦[機械的張力|きかいてきちょうりょく]⟧です。', it: 'Lo stimolo principale è la tensione meccanica.' },
      { t: '[軽|かる]い[負荷|ふか]でも[重|おも]い[負荷|ふか]でも、[限界|げんかい]の[近|ちか]くまでやれば[筋肥大|きんひだい]します。', it: 'Con carichi leggeri o pesanti, portando le serie vicino al cedimento, si ha ipertrofia.' },
      { t: '[週|しゅう]の⟦セット[数|すう]⟧が[多|おお]いと[効果|こうか]は[上|あ]がりますが、[伸|の]びは[小|ちい]さくなります。', it: 'Più serie settimanali di solito aiutano, ma con rendimenti decrescenti.' },
      { t: '⟦[限界|げんかい]⟧まで[追|お]わなくても、[筋肥大|きんひだい]します。', it: 'Si cresce anche senza spingersi fino al cedimento.' },
      { t: '[量|りょう]が[同|おな]じなら、⟦[頻度|ひんど]⟧が[違|ちが]っても[結果|けっか]は[似|に]ています。', it: 'A parità di volume, anche con frequenze diverse i risultati sono simili.' },
      { t: '[体重|たいじゅう]に[合|あ]わせて、⟦タンパク[質|しつ]⟧も[大切|たいせつ]です。', it: 'Anche le proteine contano, in proporzione al peso corporeo.' }
    ],
    gloss: [
      { w: '筋肥大', r: 'きんひだい', it: 'ipertrofia muscolare' },
      { w: '機械的張力', r: 'きかいてきちょうりょく', it: 'tensione meccanica' },
      { w: 'セット数', r: 'せっとすう', it: 'numero di serie' },
      { w: '限界', r: 'げんかい', it: 'limite, cedimento' },
      { w: '頻度', r: 'ひんど', it: 'frequenza' },
      { w: 'タンパク質', r: 'たんぱくしつ', it: 'proteine' },
      { w: '刺激', r: 'しげき', it: 'stimolo' },
      { w: '負荷', r: 'ふか', it: 'carico' },
      { w: '筋肉', r: 'きんにく', it: 'muscolo' }
    ]
  });

  A('spo-tecnica-biomeccanica-fondamentali', {
    title: { t: '[技術|ぎじゅつ]と[体|からだ]の[力学|りきがく]', it: 'Tecnica e biomeccanica dei fondamentali' },
    sum: [
      { t: '⟦モーメント⟧は、[力|ちから]に[腕|うで]の[長|なが]さをかけたものです。', it: 'Il momento è la forza moltiplicata per il braccio.' },
      { t: 'バーベルが[体|からだ]に[近|ちか]いと、[関節|かんせつ]の⟦モーメント⟧は[小|ちい]さくなります。', it: 'Se il bilanciere è vicino al corpo, il momento sulle articolazioni è minore.' },
      { t: '⟦バーベル⟧は、[足|あし]の[中央|ちゅうおう]の[上|うえ]に[保|たも]ちます。', it: 'Il bilanciere resta sopra il centro del piede.' },
      { t: '⟦スクワット⟧は、[股関節|こかんせつ]と[膝|ひざ]を[一緒|いっしょ]に[曲|ま]げます。', it: 'Nello squat anca e ginocchio si flettono insieme.' },
      { t: '⟦ベンチプレス⟧では、[前腕|ぜんわん]をほぼ[垂直|すいちょく]にします。', it: 'Nella panca l’avambraccio resta quasi verticale.' },
      { t: '[重|おも]いときは、⟦スポッター⟧や[安全|あんぜん]な[支|ささ]えを[使|つか]います。', it: 'Con carichi vicini al limite si usano uno spotter o supporti di sicurezza.' },
      { t: '⟦[踵|かかと]⟧が[浮|う]いたり、⟦[膝|ひざ]⟧が[内側|うちがわ]に[入|はい]ったりするのは、よくあるミスです。', it: 'I talloni che si staccano e le ginocchia che cadono verso l’interno sono errori comuni.' }
    ],
    gloss: [
      { w: 'モーメント', r: 'もーめんと', it: 'momento (forza × braccio)' },
      { w: 'バーベル', r: 'ばーべる', it: 'bilanciere' },
      { w: 'スクワット', r: 'すくわっと', it: 'squat' },
      { w: 'ベンチプレス', r: 'べんちぷれす', it: 'panca piana' },
      { w: 'スポッター', r: 'すぽったー', it: 'spotter' },
      { w: '踵', r: 'かかと', it: 'tallone' },
      { w: '膝', r: 'ひざ', it: 'ginocchio' },
      { w: '関節', r: 'かんせつ', it: 'articolazione' },
      { w: '前腕', r: 'ぜんわん', it: 'avambraccio' }
    ]
  });

  A('spo-forza-massimale-neurale', {
    title: { t: '[最大筋力|さいだいきんりょく]と[神経|しんけい]', it: 'Forza massimale, adattamenti neurali e programmazione' },
    sum: [
      { t: '⟦[最大筋力|さいだいきんりょく]⟧は、[神経|しんけい]と[筋肉|きんにく]の[構造|こうぞう]で[決|き]まります。', it: 'La forza massimale dipende dal sistema nervoso e dalla struttura del muscolo.' },
      { t: '⟦[神経適応|しんけいてきおう]⟧は、[脳|のう]が[筋肉|きんにく]をよく[使|つか]えるようになることです。', it: 'L’adattamento neurale è il cervello che impara ad attivare meglio il muscolo.' },
      { t: '[重|おも]い[負荷|ふか]を[少|すく]ない[回数|かいすう]で[行|おこな]い、[長|なが]く[休|やす]みます。', it: 'Si usano carichi pesanti con poche ripetizioni e riposi lunghi.' },
      { t: '⟦[特異性|とくいせい]⟧のため、[練習|れんしゅう]した[動|うご]きが[一番|いちばん]よくなります。', it: 'Per la specificità migliora soprattutto il gesto allenato.' },
      { t: '[初心者|しょしんしゃ]は⟦リニア⟧で、[毎回|まいかい][少|すこ]しずつ[重|おも]くします。', it: 'Il principiante usa il programma lineare e aumenta un po’ il carico a ogni seduta.' },
      { t: '⟦ディーユーピー⟧は、[同|おな]じ[週|しゅう]に[強度|きょうど]と[回数|かいすう]を[変|か]えます。', it: 'Il DUP varia intensità e ripetizioni nella stessa settimana.' },
      { t: '⟦ディロード⟧で、[量|りょう]を[減|へ]らして[疲|つか]れをとります。', it: 'Con lo scarico si riduce il volume per smaltire la fatica.' }
    ],
    gloss: [
      { w: '最大筋力', r: 'さいだいきんりょく', it: 'forza massimale' },
      { w: '神経適応', r: 'しんけいてきおう', it: 'adattamento neurale' },
      { w: '特異性', r: 'とくいせい', it: 'specificità' },
      { w: 'リニア', r: 'りにあ', it: 'lineare (programma)' },
      { w: 'ディーユーピー', r: 'でぃーゆーぴー', it: 'DUP, periodizzazione ondulata giornaliera' },
      { w: 'ディロード', r: 'でぃろーど', it: 'scarico (deload)' },
      { w: '強度', r: 'きょうど', it: 'intensità' },
      { w: '回数', r: 'かいすう', it: 'numero di ripetizioni' },
      { w: '初心者', r: 'しょしんしゃ', it: 'principiante' }
    ]
  });

  A('spo-potenza-e-rfd', {
    title: { t: 'パワーと[力|ちから]の[立|た]ち[上|あ]がり', it: 'Potenza e rate of force development' },
    sum: [
      { t: '⟦パワー⟧は、[力|ちから]に[速|はや]さをかけたものです。', it: 'La potenza è la forza moltiplicata per la velocità.' },
      { t: '⟦[速度|そくど]⟧は、[力|ちから]が[大|おお]きいほど[小|ちい]さくなります。', it: 'La velocità diminuisce quanto più grande è la forza.' },
      { t: '⟦アールエフディー⟧は、[力|ちから]が[増|ふ]える[速|はや]さです。', it: 'La RFD è la velocità con cui cresce la forza.' },
      { t: '[接地|せっち]は[短|みじか]く、[最大|さいだい]の[力|ちから]に[届|とど]きません。', it: 'I contatti sono brevi e non si raggiunge la forza massima.' },
      { t: '⟦バリスティック⟧[種目|しゅもく]は、[最後|さいご]まで[重|おも]りを[加速|かそく]します。', it: 'Gli esercizi balistici accelerano il carico fino alla fine.' },
      { t: '⟦コンプレックス⟧は、[重|おも]い[種目|しゅもく]のあとに[速|はや]い[種目|しゅもく]をします。', it: 'Nel complesso a un esercizio pesante segue uno esplosivo.' },
      { t: '⟦[滞空時間|たいくうじかん]⟧から、[跳|と]んだ[高|たか]さが[分|わ]かります。', it: 'Dal tempo di volo si ricava l’altezza del salto.' }
    ],
    gloss: [
      { w: 'パワー', r: 'ぱわー', it: 'potenza' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: 'アールエフディー', r: 'あーるえふでぃー', it: 'RFD, rapidità di produzione di forza' },
      { w: 'バリスティック', r: 'ばりすてぃっく', it: 'balistico' },
      { w: 'コンプレックス', r: 'こんぷれっくす', it: 'complesso (allenamento a contrasto)' },
      { w: '滞空時間', r: 'たいくうじかん', it: 'tempo di volo' },
      { w: '種目', r: 'しゅもく', it: 'esercizio' },
      { w: '接地', r: 'せっち', it: 'contatto con il suolo' },
      { w: '加速', r: 'かそく', it: 'accelerare' }
    ]
  });

  A('spo-pliometria', {
    title: { t: 'プライオメトリクス', it: 'Pliometria: ciclo stiramento-accorciamento e volume sicuro' },
    sum: [
      { t: '⟦[伸張短縮|しんちょうたんしゅく]サイクル⟧は、[三|みっ]つの[段階|だんかい]でできています。', it: 'Il ciclo stiramento-accorciamento è fatto di tre fasi.' },
      { t: '[三|みっ]つは、[伸張|しんちょう]、⟦[切|き]り[返|かえ]し⟧、[短縮|たんしゅく]です。', it: 'Sono la fase eccentrica, la transizione (ammortizzazione) e la fase concentrica.' },
      { t: '⟦プライオメトリクス⟧で、[跳躍|ちょうやく]や[走|はし]る[速|はや]さが[良|よ]くなります。', it: 'Con la pliometria migliorano il salto e la velocità di corsa.' },
      { t: '⟦[接地回数|せっちかいすう]⟧は、[練習|れんしゅう]の[量|りょう]の[目安|めやす]です。', it: 'Il numero di contatti è la misura del volume dell’allenamento.' },
      { t: '[着地|ちゃくち]の[練習|れんしゅう]から、[安全|あんぜん]に⟦[段階|だんかい]⟧を[上|あ]げます。', it: 'Si parte dall’atterraggio e si sale di livello in sicurezza.' },
      { t: '[強度|きょうど]の[高|たか]い[日|ひ]のあとは、[長|なが]い⟦[回復|かいふく]⟧が[必要|ひつよう]です。', it: 'Dopo sedute ad alta intensità serve un recupero lungo.' },
      { t: '⟦[着地|ちゃくち]⟧で[膝|ひざ]を[曲|ま]げると、[衝撃|しょうげき]が[小|ちい]さくなります。', it: 'Flettendo le ginocchia nell’atterraggio, l’impatto è minore.' }
    ],
    gloss: [
      { w: '伸張短縮サイクル', r: 'しんちょうたんしゅくさいくる', it: 'ciclo stiramento-accorciamento' },
      { w: '切り返し', r: 'きりかえし', it: 'transizione (ammortizzazione)' },
      { w: 'プライオメトリクス', r: 'ぷらいおめとりくす', it: 'pliometria' },
      { w: '接地回数', r: 'せっちかいすう', it: 'numero di contatti' },
      { w: '段階', r: 'だんかい', it: 'fase, livello' },
      { w: '回復', r: 'かいふく', it: 'recupero' },
      { w: '着地', r: 'ちゃくち', it: 'atterraggio' },
      { w: '衝撃', r: 'しょうげき', it: 'impatto' },
      { w: '跳躍', r: 'ちょうやく', it: 'salto' }
    ]
  });

  A('spo-velocita-agilita-cambi-direzione', {
    title: { t: '[速|はや]さと[方向転換|ほうこうてんかん]', it: 'Velocità, agilità e cambi di direzione' },
    sum: [
      { t: '⟦[速度|そくど]⟧は、[歩幅|ほはば]と⟦ピッチ⟧の[積|せき]です。', it: 'La velocità è il prodotto di lunghezza e frequenza del passo.' },
      { t: '⟦スプリント⟧には、スタートや[加速|かそく]などの[局面|きょくめん]があります。', it: 'Lo sprint ha varie fasi, come la partenza e l’accelerazione.' },
      { t: '⟦[加速|かそく]⟧では、[体|からだ]を[前|まえ]に[傾|かたむ]けて[強|つよ]く[押|お]します。', it: 'Nell’accelerazione si inclina il tronco in avanti e si spinge forte.' },
      { t: '⟦[最高速度|さいこうそくど]⟧では、[接地|せっち]を[短|みじか]くします。', it: 'Alla velocità massima il contatto a terra è breve.' },
      { t: '⟦[方向転換|ほうこうてんかん]⟧は、[予定|よてい]した[動|うご]きです。', it: 'Il cambio di direzione è un movimento pianificato.' },
      { t: '⟦アジリティ⟧は、[刺激|しげき]に[反応|はんのう]して[方向|ほうこう]を[変|か]えることです。', it: 'L’agilità è cambiare direzione in risposta a uno stimolo.' },
      { t: 'ほぼ[最大|さいだい]の[力|ちから]で、⟦[休憩|きゅうけい]⟧を[長|なが]くとります。', it: 'Si lavora quasi al massimo, con riposi lunghi.' }
    ],
    gloss: [
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: 'ピッチ', r: 'ぴっち', it: 'frequenza dei passi' },
      { w: 'スプリント', r: 'すぷりんと', it: 'sprint' },
      { w: '加速', r: 'かそく', it: 'accelerazione' },
      { w: '最高速度', r: 'さいこうそくど', it: 'velocità massima' },
      { w: '方向転換', r: 'ほうこうてんかん', it: 'cambio di direzione' },
      { w: 'アジリティ', r: 'あじりてぃ', it: 'agilità (reattiva)' },
      { w: '休憩', r: 'きゅうけい', it: 'riposo' },
      { w: '歩幅', r: 'ほはば', it: 'lunghezza del passo' }
    ]
  });

  A('spo-mobilita-prevenzione-infortuni', {
    title: { t: '[可動性|かどうせい]と[怪我|けが]の[予防|よぼう]', it: 'Mobilità e prevenzione degli infortuni' },
    sum: [
      { t: '⟦[可動性|かどうせい]⟧は、[関節|かんせつ]を[動|うご]かせる[範囲|はんい]です。', it: 'La mobilità è l’ampiezza con cui si può muovere un’articolazione.' },
      { t: '⟦ランプ⟧のウォームアップは、[四|よっ]つの[段階|だんかい]があります。', it: 'Il riscaldamento RAMP ha quattro fasi.' },
      { t: '[長|なが]い⟦[静的|せいてき]ストレッチ⟧は、[直後|ちょくご]に[力|ちから]を[少|すこ]し[下|さ]げます。', it: 'Uno stretching statico lungo riduce un po’ la forza subito dopo.' },
      { t: '⟦[筋力|きんりょく]トレーニング⟧は、[怪我|けが]を[減|へ]らします。', it: 'L’allenamento della forza riduce gli infortuni.' },
      { t: '⟦ノルディックハムストリング⟧は、[太|ふと]ももの[裏|うら]の[怪我|けが]を[減|へ]らします。', it: 'Il Nordic hamstring riduce gli infortuni alla parte posteriore della coscia.' },
      { t: '⟦[復帰|ふっき]⟧は、[負荷|ふか]を[少|すこ]しずつ[増|ふ]やします。', it: 'Nel rientro si aumenta il carico poco alla volta.' },
      { t: '[痛|いた]みが[強|つよ]くなったら、[止|と]めて⟦[専門家|せんもんか]⟧に[相談|そうだん]します。', it: 'Se il dolore aumenta, ci si ferma e si consulta un professionista.' }
    ],
    gloss: [
      { w: '可動性', r: 'かどうせい', it: 'mobilità' },
      { w: 'ランプ', r: 'らんぷ', it: 'RAMP (riscaldamento in quattro fasi)' },
      { w: '静的ストレッチ', r: 'せいてきすとれっち', it: 'stretching statico' },
      { w: '筋力トレーニング', r: 'きんりょくとれーにんぐ', it: 'allenamento della forza' },
      { w: 'ノルディックハムストリング', r: 'のるでぃっくはむすとりんぐ', it: 'Nordic hamstring (esercizio)' },
      { w: '復帰', r: 'ふっき', it: 'rientro' },
      { w: '専門家', r: 'せんもんか', it: 'professionista, esperto' },
      { w: '怪我', r: 'けが', it: 'infortunio' },
      { w: '関節', r: 'かんせつ', it: 'articolazione' }
    ]
  });

  A('spo-allenamento-aerobico', {
    title: { t: '[有酸素|ゆうさんそ]トレーニング', it: 'Allenamento aerobico: zone, volume e test' },
    sum: [
      { t: '⟦[持久力|じきゅうりょく]⟧は、ブイオーツーマックスと[閾値|いきち]と[経済性|けいざいせい]で[決|き]まります。', it: 'La resistenza dipende da VO2max, soglia ed economia.' },
      { t: '[強度|きょうど]は⟦[心拍数|しんぱくすう]⟧で[表|あらわ]せますが、[式|しき]は[目安|めやす]です。', it: 'L’intensità si può esprimere con la frequenza cardiaca, ma le formule sono indicative.' },
      { t: '⟦カルボーネン⟧[法|ほう]では、[心拍予備|しんぱくよび]を[使|つか]います。', it: 'Il metodo di Karvonen usa la frequenza cardiaca di riserva.' },
      { t: '⟦ゾーン⟧は[強度|きょうど]の[区分|くぶん]で、[三|みっ]つや[五|いつ]つに[分|わ]けます。', it: 'Le zone sono fasce di intensità, divise in tre o in cinque.' },
      { t: '⟦[二極化|にきょくか]⟧では、[楽|らく]な[練習|れんしゅう]と[強|つよ]い[練習|れんしゅう]が[多|おお]いです。', it: 'Nella distribuzione polarizzata prevalgono l’allenamento facile e quello intenso.' },
      { t: '⟦ボリューム⟧は、[少|すこ]しずつ[増|ふ]やします。', it: 'Il volume si aumenta gradualmente.' },
      { t: '⟦クーパーテスト⟧は、[十二分間|じゅうにふんかん]の[距離|きょり]でブイオーツーマックスを[見積|みつ]もります。', it: 'Il test di Cooper stima il VO2max dalla distanza percorsa in dodici minuti.' }
    ],
    gloss: [
      { w: '持久力', r: 'じきゅうりょく', it: 'resistenza' },
      { w: '心拍数', r: 'しんぱくすう', it: 'frequenza cardiaca' },
      { w: 'カルボーネン', r: 'かるぼーねん', it: 'Karvonen (metodo)' },
      { w: 'ゾーン', r: 'ぞーん', it: 'zona di intensità' },
      { w: '二極化', r: 'にきょくか', it: 'polarizzazione (distribuzione polarizzata)' },
      { w: 'ボリューム', r: 'ぼりゅーむ', it: 'volume' },
      { w: 'クーパーテスト', r: 'くーぱーてすと', it: 'test di Cooper' },
      { w: '閾値', r: 'いきち', it: 'soglia' },
      { w: '経済性', r: 'けいざいせい', it: 'economia (di movimento)' },
      { w: '強度', r: 'きょうど', it: 'intensità' }
    ]
  });

  A('spo-soglie-vo2max-economia', {
    title: { t: '[閾値|いきち]と[経済性|けいざいせい]', it: 'Soglie, VO2max, economia e previsione dei tempi' },
    sum: [
      { t: '[持久|じきゅう]の[成績|せいせき]は、[三|みっ]つの[要素|ようそ]で[決|き]まります。', it: 'La prestazione di resistenza dipende da tre fattori.' },
      { t: '⟦ブイオーツーマックス⟧は、[有酸素|ゆうさんそ]の[上限|じょうげん]を[決|き]めます。', it: 'Il VO2max fissa il tetto del metabolismo aerobico.' },
      { t: '⟦[閾値|いきち]⟧は、[長|なが]く[続|つづ]けられる[強|つよ]さの[目安|めやす]です。', it: 'La soglia indica l’intensità che si può sostenere a lungo.' },
      { t: '⟦[経済性|けいざいせい]⟧は、[同|おな]じ[速|はや]さで[使|つか]うエネルギーの[少|すく]なさです。', it: 'L’economia è quanto poca energia si spende alla stessa velocità.' },
      { t: '⟦ペース⟧は[一|いっ]キロの[時間|じかん]、⟦[速度|そくど]⟧は[一時間|いちじかん]の[距離|きょり]です。', it: 'Il ritmo è il tempo per un chilometro, la velocità è la distanza in un’ora.' },
      { t: '⟦リーゲルの[式|しき]⟧で、ほかの[距離|きょり]のタイムを[予想|よそう]します。', it: 'Con la formula di Riegel si prevede il tempo su un’altra distanza.' },
      { t: 'リーゲルの[式|しき]は、[距離|きょり]が[長|なが]いほどペースが[落|お]ちると[考|かんが]えます。', it: 'La formula di Riegel assume che più la distanza è lunga, più il ritmo rallenta.' }
    ],
    gloss: [
      { w: 'ブイオーツーマックス', r: 'ぶいおーつーまっくす', it: 'VO2max' },
      { w: '閾値', r: 'いきち', it: 'soglia' },
      { w: '経済性', r: 'けいざいせい', it: 'economia (di corsa)' },
      { w: 'ペース', r: 'ぺーす', it: 'ritmo (min/km)' },
      { w: '速度', r: 'そくど', it: 'velocità (km/h)' },
      { w: 'リーゲルの式', r: 'りーげるのしき', it: 'formula di Riegel' },
      { w: '距離', r: 'きょり', it: 'distanza' },
      { w: '予想', r: 'よそう', it: 'previsione' },
      { w: '要素', r: 'ようそ', it: 'fattore, elemento' }
    ]
  });

  A('spo-hiit-intervalli-sit', {
    title: { t: 'ヒットとインターバル', it: 'HIIT, intervalli e SIT' },
    sum: [
      { t: '⟦ヒット⟧は、[強|つよ]い[運動|うんどう]と[休|やす]みをくり[返|かえ]します。', it: 'L’HIIT alterna sforzi intensi e recuperi.' },
      { t: '⟦エスアイティー⟧は、スプリントのインターバルです。', it: 'Il SIT è un allenamento a intervalli di sprint.' },
      { t: '[運動|うんどう]の[長|なが]さ、[強度|きょうど]、⟦[休憩|きゅうけい]⟧の[長|なが]さを[決|き]めます。', it: 'Si decidono la durata dello sforzo, l’intensità e la durata del recupero.' },
      { t: '[数週間|すうしゅうかん]で⟦ブイオーツーマックス⟧が[上|あ]がり、[個人差|こじんさ]もあります。', it: 'In poche settimane il VO2max sale, ma ci sono differenze individuali.' },
      { t: '⟦[頻度|ひんど]⟧は[週|しゅう]に[一回|いっかい]か[二回|にかい]で、[強|つよ]い[日|ひ]の[間|あいだ]を[空|あ]けます。', it: 'La frequenza è di una o due volte a settimana, con intervalli fra le sedute intense.' },
      { t: '[初心者|しょしんしゃ]は、[心臓|しんぞう]の⟦リスク⟧に[注意|ちゅうい]します。', it: 'I principianti devono fare attenzione ai rischi per il cuore.' },
      { t: '⟦[段階的|だんかいてき]⟧に[量|りょう]を[増|ふ]やして、[進|すす]めます。', it: 'Si procede aumentando il volume per gradi.' }
    ],
    gloss: [
      { w: 'ヒット', r: 'ひっと', it: 'HIIT, allenamento a intervalli ad alta intensità' },
      { w: 'エスアイティー', r: 'えすあいてぃー', it: 'SIT, sprint interval training' },
      { w: '休憩', r: 'きゅうけい', it: 'recupero, pausa' },
      { w: 'ブイオーツーマックス', r: 'ぶいおーつーまっくす', it: 'VO2max' },
      { w: '頻度', r: 'ひんど', it: 'frequenza' },
      { w: 'リスク', r: 'りすく', it: 'rischio' },
      { w: '段階的', r: 'だんかいてき', it: 'graduale' },
      { w: 'インターバル', r: 'いんたーばる', it: 'intervallo' },
      { w: '個人差', r: 'こじんさ', it: 'differenza individuale' }
    ]
  });

  A('spo-periodizzazione', {
    title: { t: '[練習|れんしゅう]の[計画|けいかく]の[立|た]て[方|かた]', it: 'Periodizzazione: lineare, a blocchi, ondulata' },
    sum: [
      { t: '⟦ピリオダイゼーション⟧は、[練習|れんしゅう]を[計画的|けいかくてき]に[変|か]えることです。', it: 'Periodizzare significa variare l’allenamento in modo pianificato.' },
      { t: '⟦マクロサイクル⟧は[長|なが]い[期間|きかん]、⟦メゾサイクル⟧は[数週間|すうしゅうかん]です。', it: 'Il macrociclo è un periodo lungo, il mesociclo dura alcune settimane.' },
      { t: '⟦ミクロサイクル⟧は[一週間|いっしゅうかん]です。', it: 'Il microciclo è la settimana.' },
      { t: '⟦[直線型|ちょくせんがた]⟧では、[量|りょう]を[減|へ]らして[強度|きょうど]を[上|あ]げます。', it: 'Nel modello lineare si riduce il volume e si aumenta l’intensità.' },
      { t: '⟦ブロック[型|がた]⟧は、[少|すく]ない[目標|もくひょう]に[集中|しゅうちゅう]します。', it: 'Il modello a blocchi si concentra su pochi obiettivi.' },
      { t: '⟦[波状型|はじょうがた]⟧は、[毎回|まいかい]や[毎週|まいしゅう]、[強度|きょうど]と[量|りょう]を[変|か]えます。', it: 'Il modello ondulato varia intensità e volume a ogni seduta o settimana.' },
      { t: '[型|かた]の[差|さ]は[小|ちい]さく、[計画|けいかく]は[状況|じょうきょう]で[直|なお]します。', it: 'Le differenze fra i modelli sono piccole e il piano si corregge in base alla situazione.' }
    ],
    gloss: [
      { w: 'ピリオダイゼーション', r: 'ぴりおだいぜーしょん', it: 'periodizzazione' },
      { w: 'マクロサイクル', r: 'まくろさいくる', it: 'macrociclo' },
      { w: 'メゾサイクル', r: 'めぞさいくる', it: 'mesociclo' },
      { w: 'ミクロサイクル', r: 'みくろさいくる', it: 'microciclo' },
      { w: '直線型', r: 'ちょくせんがた', it: 'modello lineare' },
      { w: 'ブロック型', r: 'ぶろっくがた', it: 'modello a blocchi' },
      { w: '波状型', r: 'はじょうがた', it: 'modello ondulato' },
      { w: '強度', r: 'きょうど', it: 'intensità' },
      { w: '目標', r: 'もくひょう', it: 'obiettivo' }
    ]
  });

  A('spo-tapering-e-picco-di-forma', {
    title: { t: '[試合|しあい]の[前|まえ]の[調整|ちょうせい]', it: 'Tapering e picco di forma' },
    sum: [
      { t: '⟦テーパリング⟧は、[試合|しあい]の[前|まえ]に[練習|れんしゅう]を[少|すこ]しずつ[減|へ]らすことです。', it: 'Il tapering è ridurre gradualmente l’allenamento prima della gara.' },
      { t: '⟦フィットネス⟧はゆっくり[落|お]ち、⟦[疲労|ひろう]⟧は[早|はや]く[消|き]えます。', it: 'La forma cala lentamente, mentre la fatica scompare in fretta.' },
      { t: '⟦ボリューム⟧を[減|へ]らして、[強度|きょうど]と[頻度|ひんど]は[保|たも]ちます。', it: 'Si riduce il volume e si mantengono intensità e frequenza.' },
      { t: '⟦バニスターのモデル⟧は、フィットネスと[疲労|ひろう]の[差|さ]で[成績|せいせき]を[表|あらわ]します。', it: 'Il modello di Banister esprime la prestazione come differenza tra forma e fatica.' },
      { t: '⟦[期間|きかん]⟧は[一週間|いっしゅうかん]から[三週間|さんしゅうかん]で[十分|じゅうぶん]です。', it: 'Il periodo di una-tre settimane è sufficiente.' },
      { t: '[一年|いちねん]に[一|ひと]つから[三|みっ]つの⟦ピーク⟧を[選|えら]びます。', it: 'In un anno si scelgono da uno a tre picchi.' },
      { t: '[長|なが]すぎると、⟦ディトレーニング⟧の[危険|きけん]があります。', it: 'Se è troppo lungo c’è il rischio di detraining.' }
    ],
    gloss: [
      { w: 'テーパリング', r: 'てーぱりんぐ', it: 'tapering (scarico pre-gara)' },
      { w: 'フィットネス', r: 'ふぃっとねす', it: 'forma fisica' },
      { w: '疲労', r: 'ひろう', it: 'fatica' },
      { w: 'ボリューム', r: 'ぼりゅーむ', it: 'volume' },
      { w: 'バニスターのモデル', r: 'ばにすたーのもでる', it: 'modello fitness-fatica di Banister' },
      { w: '期間', r: 'きかん', it: 'periodo' },
      { w: 'ピーク', r: 'ぴーく', it: 'picco' },
      { w: 'ディトレーニング', r: 'でぃとれーにんぐ', it: 'detraining' },
      { w: '頻度', r: 'ひんど', it: 'frequenza' }
    ]
  });

  A('spo-monitoraggio-del-carico', {
    title: { t: '[負荷|ふか]のモニタリング', it: 'Monitoraggio del carico: sRPE, ACWR, HRV' },
    sum: [
      { t: '⟦モニタリング⟧で、[計画|けいかく]した[負荷|ふか]と[実際|じっさい]の[負荷|ふか]を[比|くら]べます。', it: 'Con il monitoraggio si confronta il carico pianificato con quello reale.' },
      { t: '⟦エスアールピーイー⟧は、きつさの[点|てん]に[時間|じかん]をかけた[値|あたい]です。', it: 'L’sRPE è il punteggio di sforzo moltiplicato per la durata.' },
      { t: '⟦[単調|たんちょう]さ⟧は、[毎日|まいにち]の[負荷|ふか]がどれだけ[似|に]ているかです。', it: 'La monotonia indica quanto sono simili i carichi dei vari giorni.' },
      { t: '⟦エーシーダブリューアール⟧は、[最近|さいきん]の[負荷|ふか]と[普段|ふだん]の[負荷|ふか]を[比|くら]べます。', it: 'L’ACWR confronta il carico recente con quello abituale.' },
      { t: 'エーシーダブリューアールには[議論|ぎろん]があり、[固定|こてい]の[基準|きじゅん]は[使|つか]いません。', it: 'L’ACWR è controverso e non si usano soglie rigide.' },
      { t: '⟦エイチアールブイ⟧は、[心拍|しんぱく]の[間隔|かんかく]の[変動|へんどう]です。', it: 'L’HRV è la variabilità dell’intervallo tra i battiti.' },
      { t: '[数値|すうち]は[慎重|しんちょう]に、⟦[傾向|けいこう]⟧として[見|み]ます。', it: 'I valori si leggono con prudenza, come tendenze.' }
    ],
    gloss: [
      { w: 'モニタリング', r: 'もにたりんぐ', it: 'monitoraggio' },
      { w: 'エスアールピーイー', r: 'えすあーるぴーいー', it: 'sRPE, sforzo percepito della seduta' },
      { w: '単調さ', r: 'たんちょうさ', it: 'monotonia' },
      { w: 'エーシーダブリューアール', r: 'えーしーだぶりゅーあーる', it: 'ACWR, rapporto carico acuto/cronico' },
      { w: 'エイチアールブイ', r: 'えいちあーるぶい', it: 'HRV, variabilità della frequenza cardiaca' },
      { w: '傾向', r: 'けいこう', it: 'tendenza' },
      { w: '負荷', r: 'ふか', it: 'carico' },
      { w: '基準', r: 'きじゅん', it: 'criterio, soglia' },
      { w: '心拍', r: 'しんぱく', it: 'battito cardiaco' }
    ]
  });

  A('spo-sport-di-squadra', {
    title: { t: 'チームスポーツの[準備|じゅんび]', it: 'Preparazione per sport di squadra e intermittenti' },
    sum: [
      { t: '⟦チームスポーツ⟧は⟦[断続的|だんぞくてき]⟧で、[強|つよ]い[動|うご]きと[休|やす]みが[交互|こうご]に[来|き]ます。', it: 'Gli sport di squadra sono intermittenti: sforzi intensi e pause si alternano.' },
      { t: '⟦[有酸素能力|ゆうさんそのうりょく]⟧が、[動|うご]きの[間|あいだ]の[回復|かいふく]を[助|たす]けます。', it: 'La capacità aerobica aiuta a recuperare tra le azioni.' },
      { t: '⟦ヨーヨーテスト⟧は、[速|はや]くなる[往復走|おうふくそう]で[持久力|じきゅうりょく]を[測|はか]ります。', it: 'Lo Yo-Yo test misura la resistenza con navette sempre più veloci.' },
      { t: '⟦アールエスエー⟧は、スプリントをくり[返|かえ]す[能力|のうりょく]です。', it: 'La RSA è la capacità di ripetere gli sprint.' },
      { t: '⟦プレシーズン⟧は、[土台|どだい]をつくる[時期|じき]です。', it: 'La pre-stagione è il periodo in cui si costruisce la base.' },
      { t: '⟦インシーズン⟧は、[筋力|きんりょく]を[保|たも]ち、[疲労|ひろう]を[管理|かんり]します。', it: 'In stagione si mantiene la forza e si gestisce la fatica.' },
      { t: '⟦エムディー⟧は[試合日|しあいび]で、[週|しゅう]の[練習|れんしゅう]の[基準|きじゅん]です。', it: 'MD è il giorno della partita e fa da riferimento per la settimana.' }
    ],
    gloss: [
      { w: 'チームスポーツ', r: 'ちーむすぽーつ', it: 'sport di squadra' },
      { w: '断続的', r: 'だんぞくてき', it: 'intermittente' },
      { w: '有酸素能力', r: 'ゆうさんそのうりょく', it: 'capacità aerobica' },
      { w: 'ヨーヨーテスト', r: 'よーよーてすと', it: 'Yo-Yo test' },
      { w: 'アールエスエー', r: 'あーるえすえー', it: 'RSA, capacità di sprint ripetuti' },
      { w: 'プレシーズン', r: 'ぷれしーずん', it: 'pre-stagione' },
      { w: 'インシーズン', r: 'いんしーずん', it: 'in-stagione' },
      { w: 'エムディー', r: 'えむでぃー', it: 'MD (giorno della partita)' },
      { w: '疲労', r: 'ひろう', it: 'fatica' }
    ]
  });

  A('spo-sport-di-combattimento', {
    title: { t: '[格闘技|かくとうぎ]の[準備|じゅんび]', it: 'Preparazione per sport di combattimento e di lotta' },
    sum: [
      { t: '⟦[格闘技|かくとうぎ]⟧は、[爆発的|ばくはつてき]な[動|うご]きと[休|やす]みの[繰|く]り[返|かえ]しです。', it: 'Gli sport di combattimento alternano azioni esplosive e pause.' },
      { t: '[三|みっ]つの⟦エネルギー[系|けい]⟧をすべて[使|つか]います。', it: 'Si usano tutti e tre i sistemi energetici.' },
      { t: '⟦[無酸素|むさんそ]パワー⟧と[有酸素|ゆうさんそ]の[土台|どだい]が[必要|ひつよう]です。', it: 'Servono potenza anaerobica e una base aerobica.' },
      { t: '[筋力|きんりょく]とパワーに[加|くわ]え、⟦[握力|あくりょく]⟧も[大切|たいせつ]です。', it: 'Oltre a forza e potenza è importante anche la presa.' },
      { t: '⟦エスジェイエフティー⟧は、[柔道|じゅうどう]の[専用|せんよう]テストです。', it: 'L’SJFT è un test specifico per il judo.' },
      { t: '[極端|きょくたん]な⟦[減量|げんりょう]⟧は[危険|きけん]です。', it: 'Perdere peso in modo estremo è pericoloso.' },
      { t: 'まず⟦[医師|いし]⟧や[栄養士|えいようし]に[相談|そうだん]します。', it: 'Prima ci si rivolge a un medico o a un nutrizionista.' }
    ],
    gloss: [
      { w: '格闘技', r: 'かくとうぎ', it: 'sport di combattimento' },
      { w: 'エネルギー系', r: 'えねるぎーけい', it: 'sistema energetico' },
      { w: '無酸素パワー', r: 'むさんそぱわー', it: 'potenza anaerobica' },
      { w: '握力', r: 'あくりょく', it: 'forza di presa' },
      { w: 'エスジェイエフティー', r: 'えすじぇいえふてぃー', it: 'SJFT (Special Judo Fitness Test)' },
      { w: '減量', r: 'げんりょう', it: 'calo di peso' },
      { w: '医師', r: 'いし', it: 'medico' },
      { w: '柔道', r: 'じゅうどう', it: 'judo' },
      { w: '栄養士', r: 'えいようし', it: 'nutrizionista, dietista' }
    ]
  });

  A('spo-resistenza-potenza-racchetta', {
    title: { t: '[持久|じきゅう]・パワー・ラケット[競技|きょうぎ]', it: 'Sport di resistenza, di potenza e a racchetta' },
    sum: [
      { t: '⟦[持久|じきゅう]スポーツ⟧は、ボリュームと[閾値|いきち]が[大切|たいせつ]です。', it: 'Negli sport di resistenza contano il volume e la soglia.' },
      { t: 'サイクリングでは、⟦エフティーピー⟧で[強度|きょうど]を[決|き]めます。', it: 'Nel ciclismo l’intensità si stabilisce con l’FTP.' },
      { t: '⟦シーエスエス⟧は、[二|ふた]つのタイムから[泳|およ]ぐ[速|はや]さを[見積|みつ]もります。', it: 'La CSS stima la velocità di nuoto da due prove.' },
      { t: '[力|ちから]の[競技|きょうぎ]では、[量|りょう]より⟦[質|しつ]⟧が[大切|たいせつ]です。', it: 'Negli sport di forza la qualità conta più del volume.' },
      { t: '[一年|いちねん]の[組|く]み[方|かた]は、[持久|じきゅう]とパワー[系|けい]で[違|ちが]います。', it: 'L’impostazione dell’anno è diversa tra sport di resistenza e di potenza.' },
      { t: '⟦ラケット[競技|きょうぎ]⟧は、[短|みじか]い[動|うご]きと[休|やす]みの[繰|く]り[返|かえ]しです。', it: 'Gli sport a racchetta alternano azioni brevi e pause.' },
      { t: '[計画|けいかく]の[前|まえ]に、⟦チェックリスト⟧で[確認|かくにん]します。', it: 'Prima di fare un piano si controlla con una lista di controllo.' }
    ],
    gloss: [
      { w: '持久スポーツ', r: 'じきゅうすぽーつ', it: 'sport di resistenza' },
      { w: 'エフティーピー', r: 'えふてぃーぴー', it: 'FTP, potenza di soglia funzionale' },
      { w: 'シーエスエス', r: 'しーえすえす', it: 'CSS, velocità critica di nuoto' },
      { w: '質', r: 'しつ', it: 'qualità' },
      { w: 'ラケット競技', r: 'らけっときょうぎ', it: 'sport a racchetta' },
      { w: 'チェックリスト', r: 'ちぇっくりすと', it: 'lista di controllo' },
      { w: '閾値', r: 'いきち', it: 'soglia' },
      { w: '強度', r: 'きょうど', it: 'intensità' },
      { w: '競技', r: 'きょうぎ', it: 'sport, gara' }
    ]
  });

  A('spo-energia-e-bilancio-energetico', {
    title: { t: 'エネルギーの[収支|しゅうし]', it: 'Energia e bilancio energetico' },
    sum: [
      { t: '⟦エネルギー[収支|しゅうし]⟧は、[食|た]べた[量|りょう]と[使|つか]った[量|りょう]の[差|さ]です。', it: 'Il bilancio energetico è la differenza tra ciò che si assume e ciò che si spende.' },
      { t: '⟦[基礎代謝|きそたいしゃ]⟧は、[休|やす]んでいるときに[使|つか]うエネルギーです。', it: 'Il metabolismo basale è l’energia spesa a riposo.' },
      { t: '⟦ミフリンの[式|しき]⟧で、[基礎代謝|きそたいしゃ]を[見積|みつ]もれます。', it: 'Con la formula di Mifflin si può stimare il metabolismo basale.' },
      { t: '[基礎代謝|きそたいしゃ]に[活動係数|かつどうけいすう]をかけて、⟦[総消費|そうしょうひ]エネルギー⟧を[出|だ]します。', it: 'Moltiplicando il metabolismo basale per un fattore di attività si ottiene il dispendio totale.' },
      { t: '⟦メッツ⟧は、[安静|あんせい]にくらべた[運動|うんどう]の[強|つよ]さです。', it: 'I MET indicano l’intensità di un’attività rispetto al riposo.' },
      { t: '[脂肪|しぼう][一|いっ]キロにつき[七千七百|ななせんななひゃく]キロカロリーという[規則|きそく]は、⟦[近似|きんじ]⟧です。', it: 'La regola dei 7700 kcal per kg di grasso è solo un’approssimazione.' },
      { t: '[食事|しょくじ]を[減|へ]らすと、⟦[代謝適応|たいしゃてきおう]⟧で[消費|しょうひ]が[下|さ]がります。', it: 'Se si mangia meno, per l’adattamento metabolico il dispendio scende.' }
    ],
    gloss: [
      { w: 'エネルギー収支', r: 'えねるぎーしゅうし', it: 'bilancio energetico' },
      { w: '基礎代謝', r: 'きそたいしゃ', it: 'metabolismo basale' },
      { w: 'ミフリンの式', r: 'みふりんのしき', it: 'equazione di Mifflin-St Jeor' },
      { w: '総消費エネルギー', r: 'そうしょうひえねるぎー', it: 'dispendio energetico totale (TDEE)' },
      { w: 'メッツ', r: 'めっつ', it: 'MET, equivalente metabolico' },
      { w: '近似', r: 'きんじ', it: 'approssimazione' },
      { w: '代謝適応', r: 'たいしゃてきおう', it: 'adattamento metabolico' },
      { w: '脂肪', r: 'しぼう', it: 'grasso' },
      { w: '規則', r: 'きそく', it: 'regola' }
    ]
  });

  A('spo-macronutrienti', {
    title: { t: '[三大栄養素|さんだいえいようそ]', it: 'Macronutrienti: proteine, carboidrati, grassi' },
    sum: [
      { t: '⟦[三大栄養素|さんだいえいようそ]⟧は、[炭水化物|たんすいかぶつ]とタンパク[質|しつ]と[脂質|ししつ]です。', it: 'I macronutrienti sono carboidrati, proteine e grassi.' },
      { t: '⟦タンパク[質|しつ]⟧は、アミノ[酸|さん]がつながったものです。', it: 'Le proteine sono catene di amminoacidi.' },
      { t: '[食事|しょくじ]からとる⟦[必須|ひっす]アミノ[酸|さん]⟧が[九|ここの]つあります。', it: 'Gli amminoacidi essenziali, da assumere con la dieta, sono nove.' },
      { t: '⟦[炭水化物|たんすいかぶつ]⟧は、[脳|のう]と[筋肉|きんにく]の[主|おも]なエネルギーです。', it: 'I carboidrati sono la principale fonte di energia di cervello e muscoli.' },
      { t: '⟦[食物繊維|しょくもつせんい]⟧は、[健康|けんこう]のために[大切|たいせつ]です。', it: 'Le fibre sono importanti per la salute.' },
      { t: '⟦[血糖負荷|けっとうふか]⟧は、[量|りょう]も[考|かんが]えた[指標|しひょう]です。', it: 'Il carico glicemico è un indice che tiene conto anche della quantità.' },
      { t: '⟦[飽和脂肪|ほうわしぼう]⟧は、[取|と]りすぎないようにします。', it: 'Si evita di assumere troppi grassi saturi.' }
    ],
    gloss: [
      { w: '三大栄養素', r: 'さんだいえいようそ', it: 'macronutrienti' },
      { w: 'タンパク質', r: 'たんぱくしつ', it: 'proteine' },
      { w: '必須アミノ酸', r: 'ひっすあみのさん', it: 'amminoacidi essenziali' },
      { w: '炭水化物', r: 'たんすいかぶつ', it: 'carboidrati' },
      { w: '食物繊維', r: 'しょくもつせんい', it: 'fibre alimentari' },
      { w: '血糖負荷', r: 'けっとうふか', it: 'carico glicemico' },
      { w: '飽和脂肪', r: 'ほうわしぼう', it: 'grassi saturi' },
      { w: '脂質', r: 'ししつ', it: 'grassi, lipidi' },
      { w: '指標', r: 'しひょう', it: 'indice, indicatore' }
    ]
  });

  A('spo-micronutrienti-e-fibre', {
    title: { t: 'ビタミンとミネラル', it: 'Micronutrienti: carenze, fonti ed eccessi' },
    sum: [
      { t: '⟦ビタミン⟧と⟦ミネラル⟧は、[少|すこ]しの[量|りょう]でも[欠|か]かせません。', it: 'Vitamine e minerali sono indispensabili anche in piccole quantità.' },
      { t: '⟦[鉄|てつ]⟧は、ヘモグロビンと[酸素|さんそ]の[運搬|うんぱん]に[必要|ひつよう]です。', it: 'Il ferro serve per l’emoglobina e per il trasporto dell’ossigeno.' },
      { t: '⟦カルシウム⟧は、[骨|ほね]と[歯|は]のために[必要|ひつよう]です。', it: 'Il calcio serve per le ossa e i denti.' },
      { t: '⟦ビタミンビー[十二|じゅうに]⟧は、[動物性|どうぶつせい]の[食品|しょくひん]にだけあります。', it: 'La vitamina B12 si trova solo negli alimenti di origine animale.' },
      { t: '⟦ビーガン⟧は、サプリメントなどで[補|おぎな]います。', it: 'I vegani la integrano, per esempio con un integratore.' },
      { t: '⟦ナトリウム⟧は、おもに[塩|しお]からとります。', it: 'Il sodio viene soprattutto dal sale.' },
      { t: '⟦サプリメント⟧は、[必要|ひつよう]なときだけ、[専門家|せんもんか]に[相談|そうだん]して[使|つか]います。', it: 'L’integratore si usa solo quando serve, dopo aver consultato un professionista.' }
    ],
    gloss: [
      { w: 'ビタミン', r: 'びたみん', it: 'vitamina' },
      { w: 'ミネラル', r: 'みねらる', it: 'minerale' },
      { w: '鉄', r: 'てつ', it: 'ferro' },
      { w: 'カルシウム', r: 'かるしうむ', it: 'calcio' },
      { w: 'ビタミンビー十二', r: 'びたみんびーじゅうに', it: 'vitamina B12' },
      { w: 'ビーガン', r: 'びーがん', it: 'vegano' },
      { w: 'ナトリウム', r: 'なとりうむ', it: 'sodio' },
      { w: 'サプリメント', r: 'さぷりめんと', it: 'integratore' },
      { w: '専門家', r: 'せんもんか', it: 'professionista, esperto' }
    ]
  });

  A('spo-pattern-alimentari-e-salute', {
    title: { t: '[食事|しょくじ]のパターンと[健康|けんこう]', it: 'Pattern alimentari e salute' },
    sum: [
      { t: '⟦[食事|しょくじ]パターン⟧では、[食事|しょくじ]の[全体|ぜんたい]を[見|み]ます。', it: 'Con il pattern alimentare si guarda alla dieta nel suo insieme.' },
      { t: '⟦[地中海食|ちちゅうかいしょく]⟧は、[野菜|やさい]、[豆|まめ]、[魚|さかな]、オリーブオイルが[多|おお]いです。', it: 'La dieta mediterranea è ricca di verdura, legumi, pesce e olio d’oliva.' },
      { t: '⟦ダッシュ⟧[食|しょく]は、[血圧|けつあつ]を[下|さ]げるための[食事|しょくじ]です。', it: 'La dieta DASH serve ad abbassare la pressione.' },
      { t: '⟦[菜食|さいしょく]⟧は、よく[計画|けいかく]すれば[健康|けんこう]に[合|あ]います。', it: 'Una dieta vegetariana, se ben pianificata, è compatibile con la salute.' },
      { t: '⟦[超加工食品|ちょうかこうしょくひん]⟧は、[家庭|かてい]にない[材料|ざいりょう]や[添加物|てんかぶつ]を[含|ふく]みます。', it: 'Gli alimenti ultra-processati contengono ingredienti e additivi che non si usano in casa.' },
      { t: '⟦アルコール⟧は、[体|からだ]の[多|おお]くの[臓器|ぞうき]に[毒|どく]になります。', it: 'L’alcol è tossico per molti organi del corpo.' },
      { t: '⟦[観察研究|かんさつけんきゅう]⟧だけでは、[原因|げんいん]は[分|わ]かりません。', it: 'Con i soli studi osservazionali non si può stabilire la causa.' }
    ],
    gloss: [
      { w: '食事パターン', r: 'しょくじぱたーん', it: 'pattern alimentare' },
      { w: '地中海食', r: 'ちちゅうかいしょく', it: 'dieta mediterranea' },
      { w: 'ダッシュ', r: 'だっしゅ', it: 'DASH (dieta contro l’ipertensione)' },
      { w: '菜食', r: 'さいしょく', it: 'dieta vegetariana' },
      { w: '超加工食品', r: 'ちょうかこうしょくひん', it: 'alimenti ultra-processati' },
      { w: 'アルコール', r: 'あるこーる', it: 'alcol' },
      { w: '観察研究', r: 'かんさつけんきゅう', it: 'studio osservazionale' },
      { w: '血圧', r: 'けつあつ', it: 'pressione sanguigna' },
      { w: '原因', r: 'げんいん', it: 'causa' }
    ]
  });

  A('spo-idratazione-etichette-e-miti', {
    title: { t: '[水分|すいぶん]・ラベル・[迷信|めいしん]', it: 'Idratazione, etichette e miti' },
    sum: [
      { t: '[大人|おとな]の[体|からだ]の[半分|はんぶん]ほどは⟦[水分|すいぶん]⟧です。', it: 'Circa la metà del corpo di un adulto è acqua.' },
      { t: '[健康|けんこう]な[人|ひと]は、⟦[喉|のど]の[渇|かわ]き⟧に[従|したが]って[飲|の]みます。', it: 'Una persona sana beve seguendo la sete.' },
      { t: '⟦[尿|にょう]の[色|いろ]⟧は、[水分|すいぶん]の[目安|めやす]になります。', it: 'Il colore dell’urina è un indicatore dell’idratazione.' },
      { t: '⟦[電解質|でんかいしつ]⟧は、[普通|ふつう]の[食事|しょくじ]で[足|た]ります。', it: 'Con una dieta normale gli elettroliti bastano.' },
      { t: '⟦カフェイン⟧には、[安全|あんぜん]な[上限|じょうげん]があります。', it: 'La caffeina ha un limite di sicurezza.' },
      { t: '⟦[栄養成分表示|えいようせいぶんひょうじ]⟧は、[百|ひゃく]グラムあたりで[比|くら]べます。', it: 'La tabella nutrizionale si confronta per 100 g.' },
      { t: '⟦デトックス⟧の[製品|せいひん]が[効|き]く[証拠|しょうこ]はありません。', it: 'Non ci sono prove che i prodotti detox funzionino.' }
    ],
    gloss: [
      { w: '水分', r: 'すいぶん', it: 'acqua, liquidi' },
      { w: '喉の渇き', r: 'のどのかわき', it: 'sete' },
      { w: '尿の色', r: 'にょうのいろ', it: 'colore dell’urina' },
      { w: '電解質', r: 'でんかいしつ', it: 'elettroliti' },
      { w: 'カフェイン', r: 'かふぇいん', it: 'caffeina' },
      { w: '栄養成分表示', r: 'えいようせいぶんひょうじ', it: 'tabella nutrizionale' },
      { w: 'デトックス', r: 'でとっくす', it: 'detox' },
      { w: '証拠', r: 'しょうこ', it: 'prova, evidenza' },
      { w: '上限', r: 'じょうげん', it: 'limite massimo' }
    ]
  });

  A('spo-nutrizione-per-la-performance', {
    title: { t: 'スポーツの[栄養|えいよう]', it: 'Nutrizione per la performance' },
    sum: [
      { t: '⟦[炭水化物|たんすいかぶつ]⟧の[量|りょう]は、[練習|れんしゅう]の[強|つよ]さと[長|なが]さで[変|か]わります。', it: 'La quantità di carboidrati cambia con l’intensità e la durata dell’allenamento.' },
      { t: '[長|なが]い[運動|うんどう]では、[途中|とちゅう]でも⟦[炭水化物|たんすいかぶつ]⟧をとります。', it: 'Negli sforzi lunghi si assumono carboidrati anche durante l’attività.' },
      { t: '⟦カーボローディング⟧は、⟦グリコーゲン⟧を[満|み]たすための[方法|ほうほう]です。', it: 'Il carico di carboidrati serve a riempire le scorte di glicogeno.' },
      { t: '⟦[試合前|しあいまえ]の[食事|しょくじ]⟧は、[脂肪|しぼう]と[食物繊維|しょくもつせんい]を[少|すく]なくします。', it: 'Nel pasto prima della gara si riducono grassi e fibre.' },
      { t: '⟦タンパク[質|しつ]⟧は、[一日|いちにち]の[中|なか]で[分|わ]けてとります。', it: 'Le proteine si distribuiscono nell’arco della giornata.' },
      { t: '[練習|れんしゅう]のあとは、[回復|かいふく]のために[食|た]べます。', it: 'Dopo l’allenamento si mangia per recuperare.' },
      { t: '[全体|ぜんたい]の⟦エネルギー⟧が[足|た]りないと、[目安|めやす]は[役|やく]に[立|た]ちません。', it: 'Se l’energia totale è insufficiente, gli intervalli indicati non servono.' }
    ],
    gloss: [
      { w: '炭水化物', r: 'たんすいかぶつ', it: 'carboidrati' },
      { w: 'カーボローディング', r: 'かーぼろーでぃんぐ', it: 'carico di carboidrati' },
      { w: 'グリコーゲン', r: 'ぐりこーげん', it: 'glicogeno' },
      { w: '試合前の食事', r: 'しあいまえのしょくじ', it: 'pasto pre-gara' },
      { w: 'タンパク質', r: 'たんぱくしつ', it: 'proteine' },
      { w: 'エネルギー', r: 'えねるぎー', it: 'energia' },
      { w: '回復', r: 'かいふく', it: 'recupero' },
      { w: '食物繊維', r: 'しょくもつせんい', it: 'fibre alimentari' },
      { w: '脂肪', r: 'しぼう', it: 'grasso' }
    ]
  });

  A('spo-idratazione-e-termoregolazione', {
    title: { t: '[水分|すいぶん]と[体温|たいおん]の[調整|ちょうせい]', it: 'Idratazione e termoregolazione nello sport' },
    sum: [
      { t: '[運動|うんどう]のエネルギーの[多|おお]くは、⟦[熱|ねつ]⟧になります。', it: 'Gran parte dell’energia dello sforzo diventa calore.' },
      { t: '⟦[汗|あせ]⟧が[蒸発|じょうはつ]して、[体|からだ]の[熱|ねつ]を[逃|に]がします。', it: 'Il sudore evapora e smaltisce il calore del corpo.' },
      { t: '[運動|うんどう]の[前後|ぜんご]に[体重|たいじゅう]を[測|はか]ると、⟦[発汗量|はっかんりょう]⟧が[分|わ]かります。', it: 'Pesandosi prima e dopo lo sforzo si ricava la quantità di sudore.' },
      { t: '[飲|の]む[量|りょう]が[汗|あせ]より[少|すく]ないと、⟦[脱水|だっすい]⟧になります。', it: 'Se si beve meno di quanto si suda, si va incontro a un deficit di liquidi.' },
      { t: '[汗|あせ]には⟦ナトリウム⟧が[含|ふく]まれます。', it: 'Il sudore contiene sodio.' },
      { t: '[汗|あせ]より[多|おお]く[飲|の]むと、⟦[低|てい]ナトリウム[血症|けっしょう]⟧になることがあります。', it: 'Bevendo più di quanto si suda si può arrivare all’iponatriemia.' },
      { t: '⟦[暑熱順化|しょねつじゅんか]⟧には、[十日|とおか]から[二週間|にしゅうかん]ほどかかります。', it: 'L’acclimatazione al caldo richiede da circa dieci giorni a due settimane.' }
    ],
    gloss: [
      { w: '熱', r: 'ねつ', it: 'calore' },
      { w: '汗', r: 'あせ', it: 'sudore' },
      { w: '発汗量', r: 'はっかんりょう', it: 'quantità di sudore' },
      { w: '脱水', r: 'だっすい', it: 'disidratazione, deficit di liquidi' },
      { w: 'ナトリウム', r: 'なとりうむ', it: 'sodio' },
      { w: '低ナトリウム血症', r: 'ていなとりうむけっしょう', it: 'iponatriemia' },
      { w: '暑熱順化', r: 'しょねつじゅんか', it: 'acclimatazione al caldo' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '蒸発', r: 'じょうはつ', it: 'evaporazione' }
    ]
  });

  A('spo-integratori-e-doping', {
    title: { t: 'サプリメントとドーピング', it: 'Integratori con evidenza e doping' },
    sum: [
      { t: '⟦サプリメント⟧は、[効果|こうか]の[証拠|しょうこ]の[強|つよ]さで[分|わ]けます。', it: 'Gli integratori si classificano in base alla forza dell’evidenza.' },
      { t: '⟦クレアチン⟧は、[短|みじか]い[強|つよ]い[運動|うんどう]に[証拠|しょうこ]が[一番|いちばん][多|おお]いです。', it: 'La creatina ha più evidenza per gli sforzi brevi e intensi.' },
      { t: '⟦カフェイン⟧は、きつさを[感|かん]じにくくします。', it: 'La caffeina fa percepire meno lo sforzo.' },
      { t: '⟦[硝酸塩|しょうさんえん]⟧の[効果|こうか]は、[小|ちい]さくて[人|ひと]によって[違|ちが]います。', it: 'L’effetto dei nitrati è piccolo e varia da persona a persona.' },
      { t: '⟦[重曹|じゅうそう]⟧の[効果|こうか]も[小|ちい]さく、[胃腸|いちょう]の[不調|ふちょう]が[出|で]ることがあります。', it: 'Anche l’effetto del bicarbonato è piccolo e può causare disturbi gastrointestinali.' },
      { t: '⟦[汚染|おせん]⟧された[製品|せいひん]があり、[選手|せんしゅ]に⟦[責任|せきにん]⟧があります。', it: 'Esistono prodotti contaminati e la responsabilità è dell’atleta.' },
      { t: '⟦ドーピング⟧は[健康|けんこう]に[危険|きけん]で、⟦ワダ⟧の[規則|きそく]で[禁止|きんし]されています。', it: 'Il doping è pericoloso per la salute ed è vietato dalle regole della WADA.' }
    ],
    gloss: [
      { w: 'サプリメント', r: 'さぷりめんと', it: 'integratore' },
      { w: 'クレアチン', r: 'くれあちん', it: 'creatina' },
      { w: 'カフェイン', r: 'かふぇいん', it: 'caffeina' },
      { w: '硝酸塩', r: 'しょうさんえん', it: 'nitrati' },
      { w: '重曹', r: 'じゅうそう', it: 'bicarbonato di sodio' },
      { w: '汚染', r: 'おせん', it: 'contaminazione' },
      { w: '責任', r: 'せきにん', it: 'responsabilità' },
      { w: 'ドーピング', r: 'どーぴんぐ', it: 'doping' },
      { w: 'ワダ', r: 'わだ', it: 'WADA, agenzia mondiale antidoping' },
      { w: '証拠', r: 'しょうこ', it: 'prova, evidenza' }
    ]
  });

  A('spo-peso-e-composizione-corporea', {
    title: { t: '[体重|たいじゅう]と[体組成|たいそせい]', it: 'Peso, composizione corporea e salute dello sportivo' },
    sum: [
      { t: '⟦[体重|たいじゅう]⟧だけでなく、⟦[体組成|たいそせい]⟧も[見|み]ます。', it: 'Non si guarda solo il peso, ma anche la composizione corporea.' },
      { t: '⟦ビーエムアイ⟧は、[筋肉|きんにく]が[多|おお]い[人|ひと]には[向|む]きません。', it: 'Il BMI non è adatto a chi ha molta massa muscolare.' },
      { t: '[体重|たいじゅう]の[変化|へんか]は、[毎週|まいしゅう]ゆっくりにします。', it: 'La variazione di peso deve essere lenta, settimana dopo settimana.' },
      { t: '⟦タンパク[質|しつ]⟧と⟦[筋力|きんりょく]トレーニング⟧で、[筋肉|きんにく]を[守|まも]ります。', it: 'Con proteine e allenamento di forza si protegge il muscolo.' },
      { t: '⟦[利用可能|りようかのう]エネルギー⟧が[低|ひく]いと、[健康|けんこう]に[悪|わる]い[影響|えいきょう]があります。', it: 'Se la disponibilità energetica è bassa, ci sono effetti negativi sulla salute.' },
      { t: '⟦[摂食障害|せっしょくしょうがい]⟧の[疑|うたが]いは、[専門家|せんもんか]に[相談|そうだん]します。', it: 'In caso di sospetto disturbo alimentare ci si rivolge a un professionista.' },
      { t: '[極端|きょくたん]な⟦[減量|げんりょう]⟧は[危険|きけん]です。', it: 'Perdere peso in modo estremo è pericoloso.' }
    ],
    gloss: [
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '体組成', r: 'たいそせい', it: 'composizione corporea' },
      { w: 'ビーエムアイ', r: 'びーえむあい', it: 'BMI, indice di massa corporea' },
      { w: 'タンパク質', r: 'たんぱくしつ', it: 'proteine' },
      { w: '筋力トレーニング', r: 'きんりょくとれーにんぐ', it: 'allenamento della forza' },
      { w: '利用可能エネルギー', r: 'りようかのうえねるぎー', it: 'disponibilità energetica' },
      { w: '摂食障害', r: 'せっしょくしょうがい', it: 'disturbo alimentare' },
      { w: '減量', r: 'げんりょう', it: 'calo di peso' },
      { w: '専門家', r: 'せんもんか', it: 'professionista' }
    ]
  });

  A('spo-adv-bioenergetica-lattato', {
    title: { t: '[乳酸|にゅうさん]とエネルギーの[仕組|しく]み', it: 'Bioenergetica avanzata e lattato' },
    sum: [
      { t: '⟦[乳酸|にゅうさん]⟧は[老廃物|ろうはいぶつ]ではなく、⟦[燃料|ねんりょう]⟧です。', it: 'Il lattato non è un rifiuto, è un combustibile.' },
      { t: '⟦[乳酸|にゅうさん]シャトル⟧で、[乳酸|にゅうさん]は[組織|そしき]の[間|あいだ]を[移動|いどう]します。', it: 'Con la navetta del lattato, il lattato si sposta fra i tessuti.' },
      { t: '[血中|けっちゅう]の[乳酸|にゅうさん]は、[出現|しゅつげん]と[消失|しょうしつ]の[差|さ]で[決|き]まります。', it: 'Il lattato nel sangue dipende dalla differenza tra comparsa e scomparsa.' },
      { t: '[酸性化|さんせいか]と[疲労|ひろう]の[関係|かんけい]には、[議論|ぎろん]があります。', it: 'Il rapporto tra acidosi e fatica è oggetto di discussione.' },
      { t: '⟦エムエルエスエス⟧は、[乳酸|にゅうさん]が[安定|あんてい]する[最大|さいだい]の[強度|きょうど]です。', it: 'L’MLSS è la massima intensità alla quale il lattato resta stabile.' },
      { t: '⟦クロスオーバー⟧は、[糖|とう]が[脂肪|しぼう]より[多|おお]くなる[強度|きょうど]です。', it: 'Il crossover è l’intensità oltre cui i carboidrati superano i grassi.' },
      { t: '[測定|そくてい]の[方法|ほうほう]しだいで、⟦[閾値|いきち]⟧は[変|か]わります。', it: 'La soglia cambia a seconda del metodo di misura.' }
    ],
    gloss: [
      { w: '乳酸', r: 'にゅうさん', it: 'lattato' },
      { w: '燃料', r: 'ねんりょう', it: 'combustibile' },
      { w: '乳酸シャトル', r: 'にゅうさんしゃとる', it: 'navetta del lattato' },
      { w: 'エムエルエスエス', r: 'えむえるえすえす', it: 'MLSS, massimo stato stazionario del lattato' },
      { w: 'クロスオーバー', r: 'くろすおーばー', it: 'crossover dei substrati' },
      { w: '閾値', r: 'いきち', it: 'soglia' },
      { w: '脂肪', r: 'しぼう', it: 'grasso' },
      { w: '強度', r: 'きょうど', it: 'intensità' },
      { w: '疲労', r: 'ひろう', it: 'fatica' }
    ]
  });

  A('spo-adv-potenza-critica', {
    title: { t: 'クリティカルパワー', it: 'Potenza critica e W′' },
    sum: [
      { t: '⟦クリティカルパワー⟧は、[長|なが]く[続|つづ]けられる[強度|きょうど]の[境目|さかいめ]です。', it: 'La potenza critica è il confine dell’intensità che si può sostenere a lungo.' },
      { t: '⟦ダブリュープライム⟧は、それを[超|こ]えて[使|つか]える[限|かぎ]りある[量|りょう]です。', it: 'W′ è la quantità limitata di lavoro che si può usare al di sopra di essa.' },
      { t: '[限界|げんかい]まで[続|つづ]けた[二|ふた]つの[試験|しけん]から、[二|ふた]つの[値|あたい]を[出|だ]します。', it: 'Da due prove portate a esaurimento si ricavano i due valori.' },
      { t: '[三回|さんかい][以上|いじょう]の[試験|しけん]なら、⟦[回帰|かいき]⟧で[誤差|ごさ]を[減|へ]らせます。', it: 'Con tre o più prove, la regressione riduce l’errore.' },
      { t: '[走|はし]るときや[泳|およ]ぐときは、⟦クリティカルスピード⟧を[使|つか]います。', it: 'Nella corsa e nel nuoto si usa la velocità critica.' },
      { t: '[強度|きょうど]は[四|よっ]つの⟦ドメイン⟧に[分|わ]けられます。', it: 'L’intensità si divide in quattro domini.' },
      { t: 'ダブリュープライムは、[使|つか]うと[減|へ]り、[休|やす]むと⟦[回復|かいふく]⟧します。', it: 'W′ si riduce quando lo si usa e si ricostituisce a riposo.' }
    ],
    gloss: [
      { w: 'クリティカルパワー', r: 'くりてぃかるぱわー', it: 'potenza critica (CP)' },
      { w: 'ダブリュープライム', r: 'だぶりゅーぷらいむ', it: 'W′, riserva di lavoro oltre la CP' },
      { w: '回帰', r: 'かいき', it: 'regressione' },
      { w: 'クリティカルスピード', r: 'くりてぃかるすぴーど', it: 'velocità critica' },
      { w: 'ドメイン', r: 'どめいん', it: 'dominio di intensità' },
      { w: '回復', r: 'かいふく', it: 'ricostituzione, recupero' },
      { w: '強度', r: 'きょうど', it: 'intensità' },
      { w: '試験', r: 'しけん', it: 'prova, test' },
      { w: '誤差', r: 'ごさ', it: 'errore' }
    ]
  });

  A('spo-adv-cinetica-vo2-economia', {
    title: { t: 'ブイオーツーの[変化|へんか]と[経済性|けいざいせい]', it: 'Cinetica del VO2 e costo energetico' },
    sum: [
      { t: '⟦ブイオーツー⟧は、[負荷|ふか]が[上|あ]がっても、すぐには[上|あ]がりません。', it: 'Il VO2 non sale subito quando il carico aumenta.' },
      { t: '⟦[時定数|じていすう]⟧が[小|ちい]さいほど、[早|はや]く[落|お]ち[着|つ]きます。', it: 'Più la costante di tempo è piccola, prima si stabilizza.' },
      { t: '⟦[酸素借|さんそしゃく]⟧は、[遅|おく]れた[分|ぶん]の[酸素|さんそ]の[不足|ふそく]です。', it: 'Il deficit di ossigeno è la mancanza di ossigeno dovuta al ritardo.' },
      { t: '[強|つよ]い[運動|うんどう]では、⟦スロー[成分|せいぶん]⟧でゆっくり[上|あ]がり[続|つづ]けます。', it: 'Negli sforzi intensi la componente lenta continua a salire piano.' },
      { t: '⟦フィックの[式|しき]⟧で、[中枢|ちゅうすう]と[末梢|まっしょう]の[要因|よういん]を[分|わ]けて[考|かんが]えます。', it: 'Con l’equazione di Fick si distinguono i fattori centrali e periferici.' },
      { t: '⟦ランニングエコノミー⟧は、[同|おな]じ[速|はや]さで[使|つか]うエネルギーです。', it: 'L’economia di corsa è l’energia spesa alla stessa velocità.' },
      { t: '⟦ブイオーツーマックス⟧が[同|おな]じなら、コストが[低|ひく]い[人|ひと]が[速|はや]いです。', it: 'A parità di VO2max, chi ha un costo minore è più veloce.' }
    ],
    gloss: [
      { w: 'ブイオーツー', r: 'ぶいおーつー', it: 'VO2, consumo di ossigeno' },
      { w: '時定数', r: 'じていすう', it: 'costante di tempo (tau)' },
      { w: '酸素借', r: 'さんそしゃく', it: 'deficit di ossigeno' },
      { w: 'スロー成分', r: 'すろーせいぶん', it: 'componente lenta' },
      { w: 'フィックの式', r: 'ふぃっくのしき', it: 'equazione di Fick' },
      { w: 'ランニングエコノミー', r: 'らんにんぐえこのみー', it: 'economia di corsa' },
      { w: 'ブイオーツーマックス', r: 'ぶいおーつーまっくす', it: 'VO2max' },
      { w: '中枢', r: 'ちゅうすう', it: 'centrale' },
      { w: '末梢', r: 'まっしょう', it: 'periferico' }
    ]
  });

  A('spo-adv-segnali-molecolari', {
    title: { t: '[適応|てきおう]のシグナル', it: 'Segnali molecolari dell’adattamento' },
    sum: [
      { t: 'トレーニングの[刺激|しげき]は、[細胞|さいぼう]の⟦シグナル⟧になります。', it: 'Lo stimolo dell’allenamento diventa un segnale per le cellule.' },
      { t: '⟦エムトールシーワン⟧は、タンパク[質|しつ]の[合成|ごうせい]を[調節|ちょうせつ]します。', it: 'mTORC1 regola la sintesi delle proteine.' },
      { t: '⟦エーエムピーケー⟧は、[細胞|さいぼう]のエネルギーの[不足|ふそく]を[感|かん]じます。', it: 'L’AMPK rileva il calo di energia della cellula.' },
      { t: '⟦ピージーシーワンアルファ⟧は、ミトコンドリアを[増|ふ]やします。', it: 'PGC-1α favorisce la formazione di nuovi mitocondri.' },
      { t: '[筋肉|きんにく]のタンパク[質|しつ]は、⟦[合成|ごうせい]⟧と[分解|ぶんかい]の[差|さ]で[決|き]まります。', it: 'Le proteine del muscolo dipendono dalla differenza tra sintesi e degradazione.' },
      { t: '⟦サテライト[細胞|さいぼう]⟧は、[筋線維|きんせんい]に[新|あたら]しい[核|かく]を[与|あた]えます。', it: 'Le cellule satelliti forniscono nuovi nuclei alla fibra muscolare.' },
      { t: '⟦[干渉効果|かんしょうこうか]⟧は、[力|ちから]と[持久|じきゅう]を[一緒|いっしょ]にすると[適応|てきおう]が[減|へ]ることです。', it: 'L’effetto interferenza è la riduzione degli adattamenti quando forza e resistenza si allenano insieme.' }
    ],
    gloss: [
      { w: 'シグナル', r: 'しぐなる', it: 'segnale' },
      { w: 'エムトールシーワン', r: 'えむとーるしーわん', it: 'mTORC1' },
      { w: 'エーエムピーケー', r: 'えーえむぴーけー', it: 'AMPK, sensore energetico' },
      { w: 'ピージーシーワンアルファ', r: 'ぴーじーしーわんあるふぁ', it: 'PGC-1α' },
      { w: '合成', r: 'ごうせい', it: 'sintesi' },
      { w: 'サテライト細胞', r: 'さてらいとさいぼう', it: 'cellule satelliti' },
      { w: '干渉効果', r: 'かんしょうこうか', it: 'effetto interferenza' },
      { w: '細胞', r: 'さいぼう', it: 'cellula' },
      { w: 'ミトコンドリア', r: 'みとこんどりあ', it: 'mitocondrio' }
    ]
  });

  A('spo-adv-neuromuscolare-tendine', {
    title: { t: '[神経|しんけい]・[筋肉|きんにく]・[腱|けん]', it: 'Neuromuscolare avanzato e tendine' },
    sum: [
      { t: '⟦[運動単位|うんどうたんい]⟧には、[遅|おそ]いものと[速|はや]いものがあります。', it: 'Le unità motorie possono essere lente o veloci.' },
      { t: '[力|ちから]は、[動員|どういん]と⟦[発火頻度|はっかひんど]⟧で[調節|ちょうせつ]されます。', it: 'La forza è regolata dal reclutamento e dalla frequenza di scarica.' },
      { t: '⟦[中枢性疲労|ちゅうすうせいひろう]⟧は、[自分|じぶん]の[意思|いし]で[筋肉|きんにく]を[使|つか]える[程度|ていど]が[下|さ]がることです。', it: 'La fatica centrale è il calo di quanto si riesce ad attivare volontariamente il muscolo.' },
      { t: '⟦ヒルのモデル⟧は、[力|ちから]と[速|はや]さの[関係|かんけい]を[表|あらわ]します。', it: 'Il modello di Hill descrive il rapporto fra forza e velocità.' },
      { t: '⟦[腱|けん]⟧は、バネのように[弾性|だんせい]エネルギーを[蓄|たくわ]えます。', it: 'Il tendine accumula energia elastica come una molla.' },
      { t: '⟦スティフネス⟧は、[腱|けん]や[脚|あし]の[硬|かた]さです。', it: 'La stiffness è la rigidità del tendine o della gamba.' },
      { t: '⟦[固有受容感覚|こゆうじゅようかんかく]⟧は、[体|からだ]の[位置|いち]や[動|うご]きの[感覚|かんかく]です。', it: 'La propriocezione è il senso della posizione e del movimento del corpo.' }
    ],
    gloss: [
      { w: '運動単位', r: 'うんどうたんい', it: 'unità motoria' },
      { w: '発火頻度', r: 'はっかひんど', it: 'frequenza di scarica' },
      { w: '中枢性疲労', r: 'ちゅうすうせいひろう', it: 'fatica centrale' },
      { w: 'ヒルのモデル', r: 'ひるのもでる', it: 'modello di Hill' },
      { w: '腱', r: 'けん', it: 'tendine' },
      { w: 'スティフネス', r: 'すてぃふねす', it: 'stiffness, rigidità' },
      { w: '固有受容感覚', r: 'こゆうじゅようかんかく', it: 'propriocezione' },
      { w: '弾性', r: 'だんせい', it: 'elasticità' },
      { w: '動員', r: 'どういん', it: 'reclutamento' }
    ]
  });

  A('spo-adv-ambienti-estremi', {
    title: { t: '[高地|こうち]・[暑|あつ]さ・[寒|さむ]さ', it: 'Altitudine, caldo e freddo' },
    sum: [
      { t: '[高地|こうち]では、[酸素|さんそ]の[割合|わりあい]は[同|おな]じですが、⟦[気圧|きあつ]⟧が[下|さ]がります。', it: 'In quota la percentuale di ossigeno resta la stessa, ma la pressione barometrica cala.' },
      { t: '[気圧|きあつ]が[下|さ]がると、[酸素|さんそ]の⟦[分圧|ぶんあつ]⟧も[下|さ]がります。', it: 'Quando la pressione cala, scende anche la pressione parziale dell’ossigeno.' },
      { t: '[高地|こうち]に[何日|なんにち]もいると、⟦[順化|じゅんか]⟧が[起|お]こります。', it: 'Restando in quota per giorni avviene l’acclimatazione.' },
      { t: '[高地|こうち]に[住|す]み、[低地|ていち]で[練習|れんしゅう]する⟦エルエイチティーエル⟧があります。', it: 'Esiste il metodo «vivere in alto, allenarsi in basso» (LHTL).' },
      { t: '⟦イーピーオー⟧は、[赤血球|せっけっきゅう]を[増|ふ]やすホルモンです。', it: 'L’EPO è un ormone che fa aumentare i globuli rossi.' },
      { t: '[体温|たいおん]は、⟦[熱収支|ねつしゅうし]⟧で[考|かんが]えます。', it: 'La temperatura corporea si ragiona con il bilancio termico.' },
      { t: '⟦[暑熱順化|しょねつじゅんか]⟧には、[十日|とおか]から[二週間|にしゅうかん]ほどかかります。', it: 'L’acclimatazione al caldo richiede da circa dieci giorni a due settimane.' }
    ],
    gloss: [
      { w: '気圧', r: 'きあつ', it: 'pressione barometrica' },
      { w: '分圧', r: 'ぶんあつ', it: 'pressione parziale' },
      { w: '順化', r: 'じゅんか', it: 'acclimatazione' },
      { w: 'エルエイチティーエル', r: 'えるえいちてぃーえる', it: 'LHTL (live high, train low)' },
      { w: 'イーピーオー', r: 'いーぴーおー', it: 'EPO, eritropoietina' },
      { w: '熱収支', r: 'ねつしゅうし', it: 'bilancio termico' },
      { w: '暑熱順化', r: 'しょねつじゅんか', it: 'acclimatazione al caldo' },
      { w: '高地', r: 'こうち', it: 'alta quota' },
      { w: '赤血球', r: 'せっけっきゅう', it: 'globulo rosso' }
    ]
  });

  A('spo-adv-differenze-individuali', {
    title: { t: '[個人差|こじんさ]と[遺伝|いでん]', it: 'Differenze individuali e genetica' },
    sum: [
      { t: '[成績|せいせき]は、たくさんの⟦[遺伝子|いでんし]⟧と[環境|かんきょう]で[決|き]まります。', it: 'La prestazione dipende da moltissimi geni e dall’ambiente.' },
      { t: '⟦エーシーティーエヌスリー⟧は、[速|はや]い[線維|せんい]にあるタンパク[質|しつ]の[遺伝子|いでんし]です。', it: 'ACTN3 è il gene di una proteina presente nelle fibre veloci.' },
      { t: '[才能|さいのう]を[調|しら]べる⟦[遺伝子検査|いでんしけんさ]⟧は、[役|やく]に[立|た]ちません。', it: 'I test genetici per valutare il talento non servono.' },
      { t: '[変化|へんか]の[差|さ]には、⟦[測定誤差|そくていごさ]⟧も[含|ふく]まれます。', it: 'Nelle differenze di risposta c’è anche l’errore di misura.' },
      { t: '⟦ヘリテージ[研究|けんきゅう]⟧では、[同|おな]じ[練習|れんしゅう]でも[伸|の]びが[人|ひと]によって[違|ちが]いました。', it: 'Nello studio HERITAGE, con lo stesso allenamento i miglioramenti variavano da persona a persona.' },
      { t: '⟦[性差|せいさ]⟧は、[体|からだ]のつくりやホルモンから[生|う]まれます。', it: 'Le differenze fra i sessi nascono da struttura corporea e ormoni.' },
      { t: '⟦[加齢|かれい]⟧とともに、[有酸素能力|ゆうさんそのうりょく]や[筋力|きんりょく]が[変|か]わります。', it: 'Con l’età cambiano la capacità aerobica e la forza.' }
    ],
    gloss: [
      { w: '遺伝子', r: 'いでんし', it: 'gene' },
      { w: 'エーシーティーエヌスリー', r: 'えーしーてぃーえぬすりー', it: 'ACTN3 (gene)' },
      { w: '遺伝子検査', r: 'いでんしけんさ', it: 'test genetico' },
      { w: '測定誤差', r: 'そくていごさ', it: 'errore di misura' },
      { w: 'ヘリテージ研究', r: 'へりてーじけんきゅう', it: 'studio HERITAGE' },
      { w: '性差', r: 'せいさ', it: 'differenza fra i sessi' },
      { w: '加齢', r: 'かれい', it: 'invecchiamento' },
      { w: '環境', r: 'かんきょう', it: 'ambiente' },
      { w: '才能', r: 'さいのう', it: 'talento' }
    ]
  });

  A('spo-adv-vbt', {
    title: { t: '[速度|そくど]で[決|き]める[練習|れんしゅう]', it: 'Allenamento basato sulla velocità (VBT)' },
    sum: [
      { t: '⟦ブイビーティー⟧は、バーの[速度|そくど]を[測|はか]って[負荷|ふか]を[決|き]めます。', it: 'Il VBT misura la velocità del bilanciere per stabilire il carico.' },
      { t: '[負荷|ふか]が[重|おも]いほど、⟦[平均速度|へいきんそくど]⟧はほぼ[直線|ちょくせん]的に[下|さ]がります。', it: 'Più il carico è pesante, più la velocità media cala in modo quasi lineare.' },
      { t: '⟦エムブイティー⟧は、ワンアールエムのときの[最小|さいしょう]の[速度|そくど]です。', it: 'La MVT è la velocità minima alla 1RM.' },
      { t: '⟦オートレギュレーション⟧で、[毎日|まいにち]の[調子|ちょうし]に[合|あ]わせて[重|おも]さを[変|か]えます。', it: 'Con l’autoregolazione si adatta il carico alla condizione del giorno.' },
      { t: '⟦[速度低下|そくどていか]⟧を[見|み]て、セットを[止|と]めます。', it: 'Si ferma la serie guardando la perdita di velocità.' },
      { t: '⟦アールピーイー⟧は[主観|しゅかん]ですが、[道具|どうぐ]がいりません。', it: 'L’RPE è soggettivo, ma non richiede strumenti.' },
      { t: '[機器|きき]によって⟦[精度|せいど]⟧が[違|ちが]い、[限界|げんかい]もあります。', it: 'La precisione varia a seconda del dispositivo e ci sono dei limiti.' }
    ],
    gloss: [
      { w: 'ブイビーティー', r: 'ぶいびーてぃー', it: 'VBT, allenamento basato sulla velocità' },
      { w: '平均速度', r: 'へいきんそくど', it: 'velocità media' },
      { w: 'エムブイティー', r: 'えむぶいてぃー', it: 'MVT, velocità minima di soglia' },
      { w: 'オートレギュレーション', r: 'おーとれぎゅれーしょん', it: 'autoregolazione' },
      { w: '速度低下', r: 'そくどていか', it: 'perdita di velocità' },
      { w: 'アールピーイー', r: 'あーるぴーいー', it: 'RPE, sforzo percepito' },
      { w: '精度', r: 'せいど', it: 'precisione' },
      { w: '負荷', r: 'ふか', it: 'carico' },
      { w: 'ワンアールエム', r: 'わんあーるえむ', it: '1RM' }
    ]
  });

  A('spo-adv-profilo-fv', {
    title: { t: '[力|ちから]と[速|はや]さのプロフィール', it: 'Profilo forza-velocità' },
    sum: [
      { t: '⟦エフブイプロフィール⟧は、[力|ちから]と[速|はや]さの[関係|かんけい]を[直線|ちょくせん]で[表|あらわ]します。', it: 'Il profilo F-V esprime con una retta il rapporto fra forza e velocità.' },
      { t: '⟦エフゼロ⟧は[理論上|りろんじょう]の[最大|さいだい]の[力|ちから]、⟦ブイゼロ⟧は[理論上|りろんじょう]の[最大|さいだい]の[速度|そくど]です。', it: 'F0 è la forza massima teorica e V0 la velocità massima teorica.' },
      { t: '⟦ピーマックス⟧は、[最大|さいだい]のパワーです。', it: 'Pmax è la potenza massima.' },
      { t: '⟦エスエフブイ⟧は、[直線|ちょくせん]の[傾|かたむ]きで、バランスを[表|あらわ]します。', it: 'Sfv è la pendenza della retta e indica l’equilibrio fra forza e velocità.' },
      { t: '⟦サモジーノ[法|ほう]⟧は、[跳躍|ちょうやく]の[簡単|かんたん]なデータからプロフィールを[出|だ]します。', it: 'Il metodo di Samozino ricava il profilo da semplici dati del salto.' },
      { t: 'スプリントでは、[地面|じめん]に[加|くわ]える⟦[水平|すいへい]⟧の[力|ちから]が[大切|たいせつ]です。', it: 'Nello sprint conta la forza orizzontale applicata al suolo.' },
      { t: 'エフゼロとブイゼロは⟦[外挿|がいそう]⟧なので、ノイズが[大|おお]きくなります。', it: 'F0 e V0 sono estrapolazioni, quindi il rumore aumenta.' }
    ],
    gloss: [
      { w: 'エフブイプロフィール', r: 'えふぶいぷろふぃーる', it: 'profilo forza-velocità' },
      { w: 'エフゼロ', r: 'えふぜろ', it: 'F0, forza massima teorica' },
      { w: 'ブイゼロ', r: 'ぶいぜろ', it: 'V0, velocità massima teorica' },
      { w: 'ピーマックス', r: 'ぴーまっくす', it: 'Pmax, potenza massima' },
      { w: 'エスエフブイ', r: 'えすえふぶい', it: 'Sfv, pendenza del profilo F-V' },
      { w: 'サモジーノ法', r: 'さもじーのほう', it: 'metodo di Samozino' },
      { w: '水平', r: 'すいへい', it: 'orizzontale' },
      { w: '外挿', r: 'がいそう', it: 'estrapolazione' },
      { w: '跳躍', r: 'ちょうやく', it: 'salto' }
    ]
  });

  A('spo-adv-programmazione', {
    title: { t: '[筋力|きんりょく]の[計画|けいかく]の[立|た]て[方|かた]', it: 'Programmazione avanzata della forza' },
    sum: [
      { t: '[計画|けいかく]のモデルは、[量|りょう]と⟦[強度|きょうど]⟧と[休|やす]みを[配分|はいぶん]する[規則|きそく]です。', it: 'Un modello di programmazione è una regola per distribuire volume, intensità e recupero.' },
      { t: '⟦ブロック[型|がた]⟧は、[蓄積|ちくせき]、[転換|てんかん]、[実現|じつげん]の[順|じゅん]に[進|すす]みます。', it: 'Il modello a blocchi procede da accumulo a trasformazione e realizzazione.' },
      { t: '⟦ディーユーピー⟧は、[一週間|いっしゅうかん]の[中|なか]で[重|おも]さと[回数|かいすう]を[変|か]えます。', it: 'Il DUP varia carico e ripetizioni nell’arco della settimana.' },
      { t: '⟦コンジュゲート[法|ほう]⟧は、[同|おな]じ[週|しゅう]に[複数|ふくすう]の[方法|ほうほう]を[組|く]み[合|あ]わせます。', it: 'Il metodo coniugato combina più metodi nella stessa settimana.' },
      { t: '⟦ピーエーピーイー⟧の[証拠|しょうこ]は、[慎重|しんちょう]に[見|み]ます。', it: 'Le prove sulla PAPE vanno valutate con prudenza.' },
      { t: 'レベル、⟦[競技|きょうぎ]⟧、[予定|よてい]に[合|あ]わせて、モデルを[選|えら]びます。', it: 'Il modello si sceglie in base a livello, sport e calendario.' },
      { t: '[計画|けいかく]が[欲張|よくば]りすぎると、⟦[継続|けいぞく]⟧できません。', it: 'Se il programma è troppo ambizioso, non si riesce a portarlo avanti.' }
    ],
    gloss: [
      { w: '強度', r: 'きょうど', it: 'intensità' },
      { w: 'ブロック型', r: 'ぶろっくがた', it: 'periodizzazione a blocchi' },
      { w: 'ディーユーピー', r: 'でぃーゆーぴー', it: 'DUP, periodizzazione ondulata giornaliera' },
      { w: 'コンジュゲート法', r: 'こんじゅげーとほう', it: 'metodo coniugato' },
      { w: 'ピーエーピーイー', r: 'ぴーえーぴーいー', it: 'PAPE, potenziamento post-attivazione' },
      { w: '競技', r: 'きょうぎ', it: 'sport' },
      { w: '継続', r: 'けいぞく', it: 'continuità, aderenza' },
      { w: '証拠', r: 'しょうこ', it: 'prova, evidenza' },
      { w: '予定', r: 'よてい', it: 'calendario, programma' }
    ]
  });

  A('spo-adv-tendine-rigidita', {
    title: { t: '[腱|けん]と[硬|かた]さ', it: 'Tendine e rigidità' },
    sum: [
      { t: '⟦[腱|けん]⟧は、バネのように[弾性|だんせい]エネルギーを[蓄|たくわ]えて[返|かえ]します。', it: 'Il tendine accumula e restituisce energia elastica come una molla.' },
      { t: '⟦[腱|けん]⟧は、[筋肉|きんにく]よりゆっくり[適応|てきおう]します。', it: 'Il tendine si adatta più lentamente del muscolo.' },
      { t: '⟦アイソメトリック⟧や[重|おも]くゆっくりした[運動|うんどう]で、[腱|けん]を[鍛|きた]えます。', it: 'Il tendine si allena con esercizi isometrici e lenti con carichi pesanti.' },
      { t: '⟦スティフネス⟧は、[高|たか]すぎても[低|ひく]すぎてもよくありません。', it: 'La stiffness non deve essere né troppo alta né troppo bassa.' },
      { t: '⟦エスエスシー⟧には、[接地|せっち]が[短|みじか]い[型|かた]と[長|なが]い[型|かた]があります。', it: 'Lo SSC può essere breve o lungo, a seconda del tempo di contatto.' },
      { t: '⟦プライオメトリクス⟧は、[衝撃|しょうげき]の[低|ひく]いものから[高|たか]いものへ[進|すす]めます。', it: 'Si procede dalla pliometria a basso impatto a quella ad alto impatto.' },
      { t: '⟦[腱障害|けんしょうがい]⟧は、[使|つか]いすぎで[痛|いた]みが[出|で]る[状態|じょうたい]です。', it: 'La tendinopatia è un dolore da sovraccarico.' }
    ],
    gloss: [
      { w: '腱', r: 'けん', it: 'tendine' },
      { w: 'アイソメトリック', r: 'あいそめとりっく', it: 'isometrico' },
      { w: 'スティフネス', r: 'すてぃふねす', it: 'stiffness, rigidità' },
      { w: 'エスエスシー', r: 'えすえすしー', it: 'SSC, ciclo stiramento-accorciamento' },
      { w: 'プライオメトリクス', r: 'ぷらいおめとりくす', it: 'pliometria' },
      { w: '腱障害', r: 'けんしょうがい', it: 'tendinopatia' },
      { w: '弾性', r: 'だんせい', it: 'elasticità' },
      { w: '衝撃', r: 'しょうげき', it: 'impatto' },
      { w: '適応', r: 'てきおう', it: 'adattamento' }
    ]
  });

  A('spo-adv-eccentrico-accomodante', {
    title: { t: '[伸張性|しんちょうせい]・バンド・ビーエフアール', it: 'Eccentrico, carichi accomodanti e BFR' },
    sum: [
      { t: '⟦[伸張性収縮|しんちょうせいしゅうしゅく]⟧では、[筋肉|きんにく]は[伸|の]びながら[力|ちから]を[出|だ]します。', it: 'Nella contrazione eccentrica il muscolo sviluppa forza mentre si allunga.' },
      { t: '[伸張性|しんちょうせい]の[最大|さいだい]の[力|ちから]は、[短縮性|たんしゅくせい]より[大|おお]きいです。', it: 'La forza massima eccentrica è maggiore di quella concentrica.' },
      { t: '⟦[超最大|ちょうさいだい]⟧の[負荷|ふか]は、[上級者|じょうきゅうしゃ]向けで、[安全|あんぜん]に[注意|ちゅうい]します。', it: 'Il carico supramassimale è per atleti avanzati e richiede attenzione alla sicurezza.' },
      { t: '⟦フライホイール⟧は、[押|お]す[力|ちから]に[比例|ひれい]した[抵抗|ていこう]を[出|だ]します。', it: 'Il flywheel offre una resistenza proporzionale alla forza con cui si spinge.' },
      { t: '⟦チェーン⟧やバンドは、[動|うご]きの[後半|こうはん]で[抵抗|ていこう]を[増|ふ]やします。', it: 'Catene e bande aumentano la resistenza nella seconda parte del movimento.' },
      { t: '⟦ビーエフアール⟧は、[腕|うで]や[脚|あし]の[血流|けつりゅう]を[一部|いちぶ][制限|せいげん]します。', it: 'Il BFR limita in parte il flusso di sangue di braccia o gambe.' },
      { t: '[安全|あんぜん]のために、⟦[禁忌|きんき]⟧を[確|たし]かめます。', it: 'Per sicurezza si controllano le controindicazioni.' }
    ],
    gloss: [
      { w: '伸張性収縮', r: 'しんちょうせいしゅうしゅく', it: 'contrazione eccentrica' },
      { w: '超最大', r: 'ちょうさいだい', it: 'supramassimale' },
      { w: 'フライホイール', r: 'ふらいほいーる', it: 'flywheel, volano a inerzia' },
      { w: 'チェーン', r: 'ちぇーん', it: 'catene' },
      { w: 'ビーエフアール', r: 'びーえふあーる', it: 'BFR, restrizione del flusso sanguigno' },
      { w: '禁忌', r: 'きんき', it: 'controindicazione' },
      { w: '負荷', r: 'ふか', it: 'carico' },
      { w: '抵抗', r: 'ていこう', it: 'resistenza' },
      { w: '血流', r: 'けつりゅう', it: 'flusso sanguigno' }
    ]
  });

})(window.ST = window.ST || {});
