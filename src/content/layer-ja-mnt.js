(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);
  A('mnt-memoria-come-funziona', {
    title: { t: '[記憶|きおく]のしくみ', it: 'Come funziona la memoria' },
    sum: [
      { t: '⟦[記憶|きおく]⟧は、[符号化|ふごうか]、[保存|ほぞん]、[想起|そうき]の[三|みっ]つの[段階|だんかい]で[働|はたら]きます。', it: 'La memoria funziona in tre fasi: codifica, immagazzinamento e recupero.' },
      { t: '⟦[符号化|ふごうか]⟧は、[意味|いみ]を[深|ふか]く[考|かんが]えるほど[強|つよ]くなります。', it: 'La codifica è più solida quanto più si elabora il significato.' },
      { t: '⟦[忘却曲線|ぼうきゃくきょくせん]⟧は、[最初|さいしょ]に[早|はや]く[忘|わす]れ、あとはゆっくりです。', it: 'Nella curva dell’oblio si dimentica in fretta all’inizio, poi più lentamente.' },
      { t: '⟦[分散学習|ぶんさんがくしゅう]⟧は、[何回|なんかい]かに[分|わ]けて⟦[復習|ふくしゅう]⟧する[方法|ほうほう]です。', it: 'Lo studio distanziato consiste nel ripassare in più sessioni separate.' },
      { t: '⟦[想起練習|そうきれんしゅう]⟧は、[読|よ]み[返|かえ]すより[記憶|きおく]を[強|つよ]くします。', it: 'Il richiamo attivo rafforza la memoria più della rilettura.' },
      { t: '[読|よ]み[返|かえ]すだけだと、⟦[流暢性|りゅうちょうせい]の[錯覚|さっかく]⟧が[起|お]きます。', it: 'Rileggere soltanto crea l’illusione di fluidità: sembra di sapere.' },
      { t: '[読|よ]んで、[閉|と]じて[思|おも]い[出|だ]し、[確|たし]かめて、[間隔|かんかく]をあけて[見直|みなお]します。', it: 'Si legge, si chiude e si richiama, si controlla e si rivede a intervalli.' }
    ],
    gloss: [
      { w: '記憶', r: 'きおく', it: 'memoria' },
      { w: '符号化', r: 'ふごうか', it: 'codifica' },
      { w: '保存', r: 'ほぞん', it: 'immagazzinamento' },
      { w: '想起', r: 'そうき', it: 'recupero (del ricordo)' },
      { w: '忘却曲線', r: 'ぼうきゃくきょくせん', it: 'curva dell’oblio' },
      { w: '分散学習', r: 'ぶんさんがくしゅう', it: 'studio distanziato' },
      { w: '復習', r: 'ふくしゅう', it: 'ripasso' },
      { w: '想起練習', r: 'そうきれんしゅう', it: 'richiamo attivo' },
      { w: '流暢性の錯覚', r: 'りゅうちょうせいのさっかく', it: 'illusione di fluidità' },
      { w: '間隔', r: 'かんかく', it: 'intervallo' }
    ]
  });

  A('mnt-chunking-e-numeri', {
    title: { t: 'チャンクと[数字|すうじ]の[記憶|きおく]', it: 'Chunking e numeri' },
    sum: [
      { t: '⟦[作業記憶|さぎょうきおく]⟧は、[少|すく]ないまとまりを[短|みじか]い[間|あいだ]だけ[保|たも]ちます。', it: 'La memoria di lavoro tiene pochi blocchi per poco tempo.' },
      { t: '⟦チャンク⟧は、[意味|いみ]のある[一|ひと]つにまとめたものです。', it: 'Un chunk è un’unità con significato formata da più elementi.' },
      { t: '[十二|じゅうに]の[数字|すうじ]も、[三|みっ]つの[有名|ゆうめい]な[年|とし]にまとめれば[三|みっ]つです。', it: 'Dodici cifre, raggruppate in tre date note, sono tre blocchi.' },
      { t: '⟦メジャーシステム⟧は、[数字|すうじ]を⟦[子音|しいん]⟧の[音|おと]にかえる[方法|ほうほう]です。', it: 'Il sistema fonetico trasforma le cifre in suoni consonantici.' },
      { t: '⟦[母音|ぼいん]⟧は[自由|じゆう]に[足|た]して、[言葉|ことば]をつくります。', it: 'Le vocali si aggiungono liberamente per formare parole.' },
      { t: 'その[言葉|ことば]を、[具体的|ぐたいてき]な⟦イメージ⟧にして[思|おも]い[浮|う]かべます。', it: 'Si trasforma la parola in un’immagine concreta e la si visualizza.' },
      { t: '[使|つか]いこなすには、[数時間|すうじかん]の[練習|れんしゅう]が[必要|ひつよう]です。', it: 'Per usarlo bene servono alcune ore di pratica.' }
    ],
    gloss: [
      { w: '作業記憶', r: 'さぎょうきおく', it: 'memoria di lavoro' },
      { w: 'チャンク', r: 'ちゃんく', it: 'blocco, unità con significato' },
      { w: 'メジャーシステム', r: 'めじゃーしすてむ', it: 'sistema fonetico (major system)' },
      { w: '子音', r: 'しいん', it: 'consonante' },
      { w: '母音', r: 'ぼいん', it: 'vocale' },
      { w: 'イメージ', r: 'いめーじ', it: 'immagine' },
      { w: '数字', r: 'すうじ', it: 'cifra' },
      { w: '練習', r: 'れんしゅう', it: 'pratica' },
      { w: '具体的', r: 'ぐたいてき', it: 'concreto' },
      { w: '言葉', r: 'ことば', it: 'parola' }
    ]
  });

  A('mnt-palazzo-della-memoria', {
    title: { t: '[記憶|きおく]の[宮殿|きゅうでん]', it: 'Il palazzo della memoria' },
    sum: [
      { t: '⟦[場所法|ばしょほう]⟧は、[古代|こだい]から[知|し]られた[方法|ほうほう]です。', it: 'Il metodo dei loci è conosciuto fin dall’antichità.' },
      { t: 'よく[知|し]っている[場所|ばしょ]で、⟦[順番|じゅんばん]⟧の[決|き]まった⟦[道順|みちじゅん]⟧を[選|えら]びます。', it: 'Si sceglie, in un luogo ben conosciuto, un percorso con ordine fisso.' },
      { t: '[道順|みちじゅん]には、[違|ちが]いのはっきりした⟦[地点|ちてん]⟧を[十|じゅっ]か[所|しょ]ほど[置|お]きます。', it: 'Lungo il percorso si pongono una decina di punti ben distinti.' },
      { t: '[覚|おぼ]えるものを、[変|へん]で[大|おお]げさな⟦[鮮明|せんめい]なイメージ⟧にして[置|お]きます。', it: 'Ciò che si vuole ricordare diventa un’immagine nitida, strana ed esagerata.' },
      { t: '[思|おも]い[出|だ]すときは、[最初|さいしょ]の[地点|ちてん]から[順|じゅん]に[歩|ある]いて[見|み]ます。', it: 'Per richiamare, si cammina in ordine partendo dal primo punto.' },
      { t: '[数時間後|すうじかんご]と[次|つぎ]の[日|ひ]にも⟦[復習|ふくしゅう]⟧します。', it: 'Si ripassa dopo alcune ore e anche il giorno dopo.' },
      { t: 'ただし、そのリストに[効果|こうか]があるだけで、[記憶|きおく]ぜんたいをきたえるとは[言|い]えません。', it: 'Ma funziona per quel tipo di lista: non si può dire che alleni la memoria in generale.' }
    ],
    gloss: [
      { w: '場所法', r: 'ばしょほう', it: 'metodo dei loci' },
      { w: '順番', r: 'じゅんばん', it: 'ordine, sequenza' },
      { w: '道順', r: 'みちじゅん', it: 'percorso' },
      { w: '地点', r: 'ちてん', it: 'punto, locus' },
      { w: '鮮明なイメージ', r: 'せんめいないめーじ', it: 'immagine nitida' },
      { w: '復習', r: 'ふくしゅう', it: 'ripasso' },
      { w: '古代', r: 'こだい', it: 'antichità' },
      { w: '記憶', r: 'きおく', it: 'memoria' },
      { w: '効果', r: 'こうか', it: 'effetto' },
      { w: '場所', r: 'ばしょ', it: 'luogo' }
    ]
  });

  A('mnt-nomi-e-liste', {
    title: { t: '[名前|なまえ]とリストの[覚|おぼ]え[方|かた]', it: 'Nomi e liste' },
    sum: [
      { t: '[名前|なまえ]は⟦[恣意的|しいてき]⟧なラベルで、[顔|かお]との[結|むす]びつきが[弱|よわ]いです。', it: 'Un nome è un’etichetta arbitraria, con un legame debole con il volto.' },
      { t: 'まず[名前|なまえ]を[注意|ちゅうい]して[聞|き]き、すぐに[口|くち]に[出|だ]します。', it: 'Prima si ascolta il nome con attenzione e lo si ripete subito.' },
      { t: '[名前|なまえ]を[具体的|ぐたいてき]な⟦イメージ⟧にして、[顔|かお]の[特徴|とくちょう]と[結|むす]びます。', it: 'Si trasforma il nome in un’immagine concreta e la si collega a un tratto del volto.' },
      { t: '⟦[連鎖法|れんさほう]⟧は、リストの[物|もの]を[次|つぎ]の[物|もの]と[場面|ばめん]でつなぎます。', it: 'Nel metodo dei collegamenti ogni elemento è legato al successivo da una scena.' },
      { t: '⟦ストーリー[法|ほう]⟧は、リストを[順番|じゅんばん]どおりの[話|はなし]にします。', it: 'Nel metodo della storia la lista diventa un racconto nello stesso ordine.' },
      { t: '⟦ペグシステム⟧は、[数字|すうじ]ごとに[決|き]まった[絵|え]に[物|もの]をかけます。', it: 'Il sistema dei pioli appende gli elementi a immagini fisse, una per numero.' },
      { t: '[長|なが]いリストには、⟦[場所法|ばしょほう]⟧が[向|む]いています。', it: 'Per le liste lunghe è più adatto il palazzo della memoria.' }
    ],
    gloss: [
      { w: '恣意的', r: 'しいてき', it: 'arbitrario' },
      { w: 'イメージ', r: 'いめーじ', it: 'immagine' },
      { w: '連鎖法', r: 'れんさほう', it: 'metodo dei collegamenti (catena)' },
      { w: 'ストーリー法', r: 'すとーりーほう', it: 'metodo della storia' },
      { w: 'ペグシステム', r: 'ぺぐしすてむ', it: 'sistema dei pioli' },
      { w: '場所法', r: 'ばしょほう', it: 'metodo dei loci' },
      { w: '名前', r: 'なまえ', it: 'nome' },
      { w: '顔', r: 'かお', it: 'volto' },
      { w: '特徴', r: 'とくちょう', it: 'tratto, caratteristica' },
      { w: '順番', r: 'じゅんばん', it: 'ordine' }
    ]
  });

  A('mnt-concentrazione-e-attenzione', {
    title: { t: '[集中|しゅうちゅう]と[注意|ちゅうい]', it: 'Concentrazione e attenzione' },
    sum: [
      { t: '⟦[注意|ちゅうい]⟧は、[処理|しょり]する[情報|じょうほう]を[選|えら]ぶはたらきです。', it: 'L’attenzione è ciò che seleziona le informazioni da elaborare.' },
      { t: '[注意|ちゅうい]を[向|む]けないことは、よく⟦[符号化|ふごうか]⟧されません。', it: 'Ciò a cui non si presta attenzione non viene codificato bene.' },
      { t: '[見|み]えているのに[気|き]づかないことがあり、⟦[不注意盲視|ふちゅういもうし]⟧と[言|い]います。', it: 'A volte non si nota ciò che si ha davanti: è la cecità attentiva.' },
      { t: '⟦[認知負荷|にんちふか]⟧のうち、[余計|よけい]な[負荷|ふか]を[減|へ]らします。', it: 'Del carico cognitivo si riduce la parte inutile, il carico estraneo.' },
      { t: '⟦マルチタスク⟧は、[切|き]りかえの⟦コスト⟧がかかります。', it: 'Il multitasking ha un costo di commutazione.' },
      { t: '⟦[中断|ちゅうだん]⟧のあとは、[元|もと]の[状態|じょうたい]にもどるのに[時間|じかん]がかかります。', it: 'Dopo un’interruzione serve tempo per tornare al punto di prima.' },
      { t: '[勉強|べんきょう]は[短|みじか]い[時間|じかん]に[分|わ]けて、[間|あいだ]に⟦[休憩|きゅうけい]⟧を[入|い]れます。', it: 'Si studia a blocchi brevi, con pause nel mezzo.' }
    ],
    gloss: [
      { w: '注意', r: 'ちゅうい', it: 'attenzione' },
      { w: '符号化', r: 'ふごうか', it: 'codifica' },
      { w: '不注意盲視', r: 'ふちゅういもうし', it: 'cecità attentiva' },
      { w: '認知負荷', r: 'にんちふか', it: 'carico cognitivo' },
      { w: 'マルチタスク', r: 'まるちたすく', it: 'multitasking' },
      { w: 'コスト', r: 'こすと', it: 'costo' },
      { w: '中断', r: 'ちゅうだん', it: 'interruzione' },
      { w: '休憩', r: 'きゅうけい', it: 'pausa' },
      { w: '作業記憶', r: 'さぎょうきおく', it: 'memoria di lavoro' },
      { w: '集中', r: 'しゅうちゅう', it: 'concentrazione' }
    ]
  });

  A('mnt-sonno-esercizio-e-limiti', {
    title: { t: '[睡眠|すいみん]・[運動|うんどう]・[限界|げんかい]', it: 'Sonno, esercizio e limiti' },
    sum: [
      { t: '⟦[睡眠|すいみん]⟧のあいだに、[脳|のう]は[記憶|きおく]を⟦[定着|ていちゃく]⟧させます。', it: 'Durante il sonno il cervello consolida i ricordi.' },
      { t: '[勉強|べんきょう]のあと、[眠|ねむ]った[人|ひと]のほうが[平均|へいきん]してよく[覚|おぼ]えています。', it: 'Dopo lo studio, chi ha dormito in media ricorda meglio.' },
      { t: '⟦[運動|うんどう]⟧は[注意|ちゅうい]を[少|すこ]しよくするかもしれませんが、[効果|こうか]は[小|ちい]さいです。', it: 'L’esercizio fisico forse migliora un poco l’attenzione, ma l’effetto è modesto.' },
      { t: '⟦ストレス⟧が[強|つよ]いと、[注意|ちゅうい]と[思|おも]い[出|だ]す[力|ちから]が[下|さ]がりやすいです。', it: 'Con stress intenso, attenzione e richiamo tendono a peggiorare.' },
      { t: '⟦ブレイントレーニング⟧は、[同|おな]じ[課題|かだい]には[効果|こうか]があります。', it: 'L’allenamento cerebrale funziona sul compito che si allena.' },
      { t: '[別|べつ]の[力|ちから]や[生活|せいかつ]への⟦[転移|てんい]⟧は、[証拠|しょうこ]が[弱|よわ]いです。', it: 'Il trasferimento ad altre abilità o alla vita quotidiana ha prove deboli.' },
      { t: 'このアプリで[身|み]につくのは⟦[戦略|せんりゃく]⟧で、[知能|ちのう]ぜんたいを[上|あ]げるとは[約束|やくそく]できません。', it: 'Con l’app si imparano strategie; non si può promettere di alzare l’intelligenza in generale.' }
    ],
    gloss: [
      { w: '睡眠', r: 'すいみん', it: 'sonno' },
      { w: '定着', r: 'ていちゃく', it: 'consolidamento' },
      { w: '運動', r: 'うんどう', it: 'esercizio fisico' },
      { w: 'ストレス', r: 'すとれす', it: 'stress' },
      { w: 'ブレイントレーニング', r: 'ぶれいんとれーにんぐ', it: 'allenamento cerebrale' },
      { w: '転移', r: 'てんい', it: 'trasferimento' },
      { w: '戦略', r: 'せんりゃく', it: 'strategia' },
      { w: '知能', r: 'ちのう', it: 'intelligenza' },
      { w: '証拠', r: 'しょうこ', it: 'prova, evidenza' },
      { w: '限界', r: 'げんかい', it: 'limite' }
    ]
  });

  A('mnt-calcolo-trucchi-1', {
    title: { t: '[暗算|あんざん]のコツ その[一|いち]', it: 'Calcolo a mente: trucchi 1' },
    sum: [
      { t: '[数|かず]を⟦[分解|ぶんかい]⟧して、[左|ひだり]から[順|じゅん]に[足|た]します。', it: 'Si scompongono i numeri e si somma da sinistra a destra.' },
      { t: '[切|き]りのよい[数|かず]に[丸|まる]めて、あとで[差|さ]を⟦[補正|ほせい]⟧します。', it: 'Si arrotonda a un numero tondo e poi si corregge la differenza.' },
      { t: '[五倍|ごばい]は、⟦[十倍|じゅうばい]⟧の[半分|はんぶん]です。', it: 'Moltiplicare per cinque è metà del moltiplicare per dieci.' },
      { t: '[九倍|きゅうばい]は、[十倍|じゅうばい]から[元|もと]の[数|かず]を[引|ひ]きます。', it: 'Per nove si moltiplica per dieci e si toglie il numero stesso.' },
      { t: '[百|ひゃく]や[千|せん]から[引|ひ]くときは、⟦[補数|ほすう]⟧が[便利|べんり]です。', it: 'Per sottrarre da cento o mille sono utili i complementi.' },
      { t: '[五|ご]で[終|お]わる[数|かず]の⟦[二乗|にじょう]⟧は、[前|まえ]の[部分|ぶぶん]に[次|つぎ]の[数|かず]をかけて[二十五|にじゅうご]をつけます。', it: 'Il quadrato di un numero che finisce per 5: parte iniziale per il successivo, poi 25 in coda.' },
      { t: '[和|わ]と[差|さ]の[積|せき]は、⟦[二乗|にじょう]の[差|さ]⟧になります。', it: 'Il prodotto di somma e differenza è una differenza di quadrati.' }
    ],
    gloss: [
      { w: '分解', r: 'ぶんかい', it: 'scomposizione' },
      { w: '補正', r: 'ほせい', it: 'compensazione, correzione' },
      { w: '十倍', r: 'じゅうばい', it: 'dieci volte' },
      { w: '補数', r: 'ほすう', it: 'complemento' },
      { w: '二乗', r: 'にじょう', it: 'quadrato (elevazione al quadrato)' },
      { w: '二乗の差', r: 'にじょうのさ', it: 'differenza di quadrati' },
      { w: '暗算', r: 'あんざん', it: 'calcolo a mente' },
      { w: '和', r: 'わ', it: 'somma' },
      { w: '差', r: 'さ', it: 'differenza' },
      { w: '積', r: 'せき', it: 'prodotto' }
    ]
  });

  A('mnt-calcolo-trucchi-2', {
    title: { t: '[暗算|あんざん]のコツ その[二|に]', it: 'Calcolo a mente: trucchi 2' },
    sum: [
      { t: '⟦パーセント⟧は、[百|ひゃく]に[対|たい]する[割合|わりあい]です。', it: 'La percentuale è un rapporto su cento.' },
      { t: '[十|じゅう]パーセントは[十|じゅう]で[割|わ]り、[一|いち]パーセントは[百|ひゃく]で[割|わ]ります。', it: 'Il dieci per cento si ottiene dividendo per dieci, l’uno per cento dividendo per cento.' },
      { t: 'ほかのパーセントは、[十|じゅう]と[一|いち]の⟦[組|く]み[合|あ]わせ⟧で[作|つく]ります。', it: 'Le altre percentuali si costruiscono combinando il dieci e l’uno per cento.' },
      { t: '[増|ふ]えたあと[同|おな]じ[割合|わりあい]で[減|へ]らしても、⟦[基準|きじゅん]⟧が[変|か]わるので[元|もと]に[戻|もど]りません。', it: 'Dopo un aumento, una riduzione della stessa percentuale non riporta al valore iniziale perché la base cambia.' },
      { t: '⟦[分数|ぶんすう]⟧と[小数|しょうすう]の[基本|きほん]の[対応|たいおう]は、[覚|おぼ]えておくと[便利|べんり]です。', it: 'Conviene ricordare le corrispondenze di base tra frazioni e decimali.' },
      { t: '[各|かく]けたの[和|わ]が[三|さん]の⟦[倍数|ばいすう]⟧なら、[三|さん]で[割|わ]れます。', it: 'Se la somma delle cifre è multipla di tre, il numero è divisibile per tre.' },
      { t: '⟦[九去法|きゅうきょほう]⟧で[検算|けんざん]できますが、すべての[間違|まちが]いは[見|み]つかりません。', it: 'La prova del nove permette di verificare, ma non scopre tutti gli errori.' }
    ],
    gloss: [
      { w: 'パーセント', r: 'ぱーせんと', it: 'percentuale' },
      { w: '割合', r: 'わりあい', it: 'rapporto, proporzione' },
      { w: '組み合わせ', r: 'くみあわせ', it: 'combinazione' },
      { w: '基準', r: 'きじゅん', it: 'base di riferimento' },
      { w: '分数', r: 'ぶんすう', it: 'frazione' },
      { w: '小数', r: 'しょうすう', it: 'decimale' },
      { w: '倍数', r: 'ばいすう', it: 'multiplo' },
      { w: '九去法', r: 'きゅうきょほう', it: 'prova del nove' },
      { w: '検算', r: 'けんざん', it: 'verifica del calcolo' },
      { w: '暗算', r: 'あんざん', it: 'calcolo a mente' }
    ]
  });

  A('mnt-stima-fermi', {
    title: { t: '[概算|がいさん]とフェルミ[推定|すいてい]', it: 'Stima e problemi di Fermi' },
    sum: [
      { t: '⟦[概算|がいさん]⟧は、[速|はや]く、[十分|じゅうぶん]よい[答|こた]えを[出|だ]すことです。', it: 'La stima consiste nel dare in fretta una risposta abbastanza buona.' },
      { t: '[丸|まる]めるときは、[一|ひと]つを[上|うえ]に、[一|ひと]つを[下|した]にして⟦[誤差|ごさ]⟧を[打|う]ち[消|け]します。', it: 'Arrotondando uno per eccesso e uno per difetto, gli errori si compensano.' },
      { t: '⟦[桁|けた]⟧、つまり[十|じゅう]の[累乗|るいじょう]で、[数|かず]の[大|おお]きさをつかみます。', it: 'Con l’ordine di grandezza, cioè la potenza di dieci, si afferra la taglia di un numero.' },
      { t: '⟦フェルミ[推定|すいてい]⟧は、[難|むずか]しい[問|と]いを[簡単|かんたん]な[概算|がいさん]に[分|わ]けます。', it: 'Un problema di Fermi scompone una domanda difficile in stime semplici.' },
      { t: '[各|かく]ステップで、[切|き]りのよい[数|かず]を[使|つか]い、⟦[仮定|かてい]⟧をはっきり[書|か]きます。', it: 'A ogni passo si usano numeri tondi e si dichiara chiaramente l’ipotesi.' },
      { t: 'たとえば[心臓|しんぞう]は、[八十|はちじゅう][年|ねん]で[約|やく][三十億|さんじゅうおく][回|かい][動|うご]きます。', it: 'Per esempio, in ottant’anni il cuore batte circa tre miliardi di volte.' },
      { t: '[最後|さいご]に、[単位|たんい]と⟦[妥当性|だとうせい]⟧を[確|たし]かめます。', it: 'Alla fine si controllano le unità di misura e la plausibilità.' }
    ],
    gloss: [
      { w: '概算', r: 'がいさん', it: 'stima approssimativa' },
      { w: '誤差', r: 'ごさ', it: 'errore' },
      { w: '桁', r: 'けた', it: 'ordine di grandezza (cifra)' },
      { w: 'フェルミ推定', r: 'ふぇるみすいてい', it: 'problema di Fermi' },
      { w: '仮定', r: 'かてい', it: 'ipotesi' },
      { w: '妥当性', r: 'だとうせい', it: 'plausibilità' },
      { w: '単位', r: 'たんい', it: 'unità di misura' },
      { w: '累乗', r: 'るいじょう', it: 'potenza' },
      { w: '心臓', r: 'しんぞう', it: 'cuore' },
      { w: '丸める', r: 'まるめる', it: 'arrotondare' }
    ]
  });

  A('mnt-logica-sillogismi', {
    title: { t: '[三段論法|さんだんろんぽう]', it: 'Logica e sillogismi' },
    sum: [
      { t: '⟦[三段論法|さんだんろんぽう]⟧は、[二|ふた]つの⟦[前提|ぜんてい]⟧から⟦[結論|けつろん]⟧を[出|だ]します。', it: 'Il sillogismo trae una conclusione da due premesse.' },
      { t: '[前提|ぜんてい]には、[橋|はし]になる⟦[媒名辞|ばいめいじ]⟧があります。', it: 'Nelle premesse c’è il termine medio, che fa da ponte.' },
      { t: '⟦[妥当|だとう]⟧とは、[前提|ぜんてい]が[正|ただ]しければ[結論|けつろん]も[必|かなら]ず[正|ただ]しい[形|かたち]のことです。', it: 'Valido significa che, se le premesse sono vere, la conclusione lo è per forza.' },
      { t: '[論理|ろんり]では、いくつかは[少|すく]なくとも[一|ひと]つという[意味|いみ]です。', it: 'In logica «alcuni» significa «almeno uno».' },
      { t: 'すべての[犬|いぬ]は[哺乳類|ほにゅうるい]という[文|ぶん]を[逆|ぎゃく]にすると[誤|あやま]りです。', it: 'Invertire «tutti i cani sono mammiferi» dà una frase falsa.' },
      { t: '⟦ベン[図|ず]⟧をかいて、⟦[反例|はんれい]⟧があるか[調|しら]べます。', it: 'Si disegna il diagramma di Venn e si cerca un controesempio.' },
      { t: '⟦[信念|しんねん]バイアス⟧は、[結論|けつろん]がもっともらしいと[正|ただ]しいと[思|おも]う[傾向|けいこう]です。', it: 'Il pregiudizio di credenza porta a ritenere corretta una conclusione solo perché plausibile.' }
    ],
    gloss: [
      { w: '三段論法', r: 'さんだんろんぽう', it: 'sillogismo' },
      { w: '前提', r: 'ぜんてい', it: 'premessa' },
      { w: '結論', r: 'けつろん', it: 'conclusione' },
      { w: '媒名辞', r: 'ばいめいじ', it: 'termine medio' },
      { w: '妥当', r: 'だとう', it: 'valido' },
      { w: 'ベン図', r: 'べんず', it: 'diagramma di Venn' },
      { w: '反例', r: 'はんれい', it: 'controesempio' },
      { w: '信念バイアス', r: 'しんねんばいあす', it: 'pregiudizio di credenza' },
      { w: '論理', r: 'ろんり', it: 'logica' },
      { w: '哺乳類', r: 'ほにゅうるい', it: 'mammiferi' }
    ]
  });

  A('mnt-ragionamento-condizionale', {
    title: { t: '[条件|じょうけん]の[推論|すいろん]', it: 'Ragionamento condizionale' },
    sum: [
      { t: '⟦[条件文|じょうけんぶん]⟧は、[前件|ぜんけん]が[真|しん]で[後件|こうけん]が[偽|ぎ]のときだけ[偽|ぎ]です。', it: 'Un condizionale è falso solo se l’antecedente è vero e il conseguente è falso.' },
      { t: '⟦[前件肯定|ぜんけんこうてい]⟧は、[前件|ぜんけん]が[真|しん]なら[後件|こうけん]も[真|しん]と[言|い]えます。', it: 'Il modus ponens: se l’antecedente è vero, lo è anche il conseguente.' },
      { t: '⟦[後件否定|こうけんひってい]⟧は、[後件|こうけん]が[偽|ぎ]なら[前件|ぜんけん]も[偽|ぎ]と[言|い]えます。', it: 'Il modus tollens: se il conseguente è falso, lo è anche l’antecedente.' },
      { t: '⟦[対偶|たいぐう]⟧は、もとの[文|ぶん]といつも[同|おな]じ[意味|いみ]です。', it: 'La contrapposta ha sempre lo stesso significato della frase originale.' },
      { t: '⟦[逆|ぎゃく]⟧と⟦[裏|うら]⟧は、もとの[文|ぶん]と[同|おな]じではありません。', it: 'La conversa e l’inversa non sono equivalenti alla frase originale.' },
      { t: '[前件|ぜんけん]は⟦[十分条件|じゅうぶんじょうけん]⟧、[後件|こうけん]は⟦[必要条件|ひつようじょうけん]⟧です。', it: 'L’antecedente è condizione sufficiente, il conseguente è condizione necessaria.' },
      { t: 'ウェイソンの[課題|かだい]では、[当|あ]てはまる[例|れい]より、[規則|きそく]を[破|やぶ]る[例|れい]を[探|さが]します。', it: 'Nel compito di Wason si cercano i casi che potrebbero violare la regola, non quelli che la confermano.' }
    ],
    gloss: [
      { w: '条件文', r: 'じょうけんぶん', it: 'enunciato condizionale' },
      { w: '前件', r: 'ぜんけん', it: 'antecedente' },
      { w: '後件', r: 'こうけん', it: 'conseguente' },
      { w: '前件肯定', r: 'ぜんけんこうてい', it: 'modus ponens' },
      { w: '後件否定', r: 'こうけんひてい', it: 'modus tollens' },
      { w: '対偶', r: 'たいぐう', it: 'contrapposta' },
      { w: '逆', r: 'ぎゃく', it: 'conversa' },
      { w: '裏', r: 'うら', it: 'inversa' },
      { w: '十分条件', r: 'じゅうぶんじょうけん', it: 'condizione sufficiente' },
      { w: '必要条件', r: 'ひつようじょうけん', it: 'condizione necessaria' }
    ]
  });

  A('mnt-bias-cognitivi-e-probabilita', {
    title: { t: '[認知|にんち]バイアスと[確率|かくりつ]', it: 'Bias cognitivi e probabilità' },
    sum: [
      { t: '⟦[基準率|きじゅんりつ]⟧が[低|ひく]いと、[陽性|ようせい]でも[病気|びょうき]とは[限|かぎ]りません。', it: 'Se il tasso base è basso, essere positivi non significa essere malati.' },
      { t: '⟦[自然頻度|しぜんひんど]⟧で、[千|せん][人|にん]の[例|れい]にして[考|かんが]えます。', it: 'Con le frequenze naturali si ragiona su un esempio di mille persone.' },
      { t: '⟦[連言錯誤|れんげんさくご]⟧では、[細|こま]かい[話|はなし]のほうが[起|お]こりやすいと[思|おも]います。', it: 'Nella fallacia della congiunzione si crede più probabile la storia più ricca di dettagli.' },
      { t: '⟦ギャンブラーの[誤謬|ごびゅう]⟧は、[表|おもて]が[続|つづ]くと[次|つぎ]は[裏|うら]だと[思|おも]うことです。', it: 'L’errore del giocatore è pensare che dopo molte teste debba uscire croce.' },
      { t: 'コインに[記憶|きおく]はなく、[毎回|まいかい]の[確率|かくりつ]は[同|おな]じです。', it: 'La moneta non ha memoria: la probabilità di ogni lancio è la stessa.' },
      { t: '⟦[確証|かくしょう]バイアス⟧は、[自分|じぶん]の[考|かんが]えを[支|ささ]える[情報|じょうほう]だけを[探|さが]すことです。', it: 'Il pregiudizio di conferma è cercare solo le informazioni che sostengono la propria idea.' },
      { t: '[答|こた]えがすぐ[出|で]たら、[文|ぶん]に[入|い]れて⟦[検証|けんしょう]⟧します。', it: 'Se la risposta arriva subito, la si sostituisce nel testo e la si verifica.' }
    ],
    gloss: [
      { w: '基準率', r: 'きじゅんりつ', it: 'tasso base' },
      { w: '自然頻度', r: 'しぜんひんど', it: 'frequenze naturali' },
      { w: '連言錯誤', r: 'れんげんさくご', it: 'fallacia della congiunzione' },
      { w: 'ギャンブラーの誤謬', r: 'ぎゃんぶらーのごびゅう', it: 'errore del giocatore' },
      { w: '確証バイアス', r: 'かくしょうばいあす', it: 'pregiudizio di conferma' },
      { w: '検証', r: 'けんしょう', it: 'verifica' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '陽性', r: 'ようせい', it: 'positivo (test)' },
      { w: '病気', r: 'びょうき', it: 'malattia' },
      { w: '記憶', r: 'きおく', it: 'memoria' }
    ]
  });

  A('mnt-strategia-giochi-nim-minimax', {
    title: { t: 'ニムとミニマックス', it: 'Strategia: Nim e minimax' },
    sum: [
      { t: '⟦[完全情報|かんぜんじょうほう]⟧のゲームでは、[局面|きょくめん]は[勝|か]ちか[負|ま]けのどちらかです。', it: 'Nei giochi a informazione perfetta ogni posizione è o vincente o perdente.' },
      { t: '[終|お]わりから[逆|ぎゃく]に[考|かんが]えるのが⟦[後退帰納法|こうたいきのうほう]⟧です。', it: 'Ragionare all’indietro dalla fine è l’induzione retrograda.' },
      { t: '[取|と]れる[最大|さいだい]の[数|かず]に[一|いち]を[足|た]した[数|かず]の⟦[倍数|ばいすう]⟧が[負|ま]けの[局面|きょくめん]です。', it: 'Nel gioco di sottrazione le posizioni perdenti sono i multipli del massimo prendibile più uno.' },
      { t: '⟦ニム⟧は、[山|やま]の[数|かず]の⟦[排他的論理和|はいたてきろんりわ]⟧で[勝敗|しょうはい]が[決|き]まります。', it: 'Nel Nim l’esito dipende dallo XOR dei numeri delle pile.' },
      { t: 'その[値|あたい]がゼロなら、[動|うご]く[人|ひと]は[負|ま]けの[局面|きょくめん]です。', it: 'Se quel valore è zero, chi deve muovere è in posizione perdente.' },
      { t: '⟦ミニマックス⟧は、[相手|あいて]が[最善|さいぜん]を[選|えら]ぶと[考|かんが]えて[自分|じぶん]の[手|て]を[決|き]めます。', it: 'Il minimax sceglie la propria mossa supponendo che l’avversario risponda al meglio.' },
      { t: '[二|ふた]つの[脅威|きょうい]を[同時|どうじ]に[作|つく]る⟦フォーク⟧が[強|つよ]い[手|て]です。', it: 'Nel tris, una forchetta che crea due minacce insieme è una mossa forte.' }
    ],
    gloss: [
      { w: '完全情報', r: 'かんぜんじょうほう', it: 'informazione perfetta' },
      { w: '後退帰納法', r: 'こうたいきのうほう', it: 'induzione retrograda' },
      { w: '倍数', r: 'ばいすう', it: 'multiplo' },
      { w: 'ニム', r: 'にむ', it: 'Nim' },
      { w: '排他的論理和', r: 'はいたてきろんりわ', it: 'XOR (somma binaria senza riporti)' },
      { w: 'ミニマックス', r: 'みにまっくす', it: 'minimax' },
      { w: 'フォーク', r: 'ふぉーく', it: 'forchetta (due minacce)' },
      { w: '局面', r: 'きょくめん', it: 'posizione (di gioco)' },
      { w: '脅威', r: 'きょうい', it: 'minaccia' },
      { w: '勝敗', r: 'しょうはい', it: 'esito, vittoria o sconfitta' }
    ]
  });

  A('mnt-previsione-e-calibrazione', {
    title: { t: '[予測|よそく]とキャリブレーション', it: 'Previsione e calibrazione' },
    sum: [
      { t: '[九十|きゅうじゅう]パーセントの[予測|よそく]が[十|じゅっ][回|かい]に[九|きゅう][回|かい][当|あ]たれば、⟦キャリブレーション⟧が[良|よ]いです。', it: 'Se le previsioni al novanta per cento si avverano nove volte su dieci, la calibrazione è buona.' },
      { t: '[一|ひと]つの[予測|よそく]だけでは[判断|はんだん]できず、[多|おお]くの[予測|よそく]が[必要|ひつよう]です。', it: 'Una sola previsione non basta per giudicare: ne servono molte.' },
      { t: '⟦ブライアスコア⟧は、[誤差|ごさ]を[二乗|にじょう]で[測|はか]り、[低|ひく]いほどよいです。', it: 'Il punteggio di Brier misura l’errore con un quadrato: più è basso, meglio è.' },
      { t: '⟦[過信|かしん]⟧とは、[九十|きゅうじゅう]パーセントと[言|い]って[当|あ]たる[割合|わりあい]がもっと[低|ひく]いことです。', it: 'L’eccesso di fiducia è dire novanta per cento e avere ragione molto meno spesso.' },
      { t: 'まず[同|おな]じ[種類|しゅるい]の[出来事|できごと]の⟦[基準率|きじゅんりつ]⟧から[始|はじ]めます。', it: 'Si parte dal tasso di base degli eventi dello stesso tipo.' },
      { t: '[証拠|しょうこ]が[出|で]たら、⟦オッズ⟧に⟦[尤度比|ゆうどひ]⟧をかけて[更新|こうしん]します。', it: 'Quando arriva una prova, si aggiornano gli odds moltiplicandoli per il rapporto di verosimiglianza.' },
      { t: '[予測|よそく]を⟦[記録|きろく]⟧すると、[自分|じぶん]の[本当|ほんとう]の[実力|じつりょく]が[分|わ]かります。', it: 'Registrando le previsioni si vede il proprio vero livello.' }
    ],
    gloss: [
      { w: 'キャリブレーション', r: 'きゃりぶれーしょん', it: 'calibrazione' },
      { w: 'ブライアスコア', r: 'ぶらいあすこあ', it: 'punteggio di Brier' },
      { w: '過信', r: 'かしん', it: 'eccesso di fiducia' },
      { w: '基準率', r: 'きじゅんりつ', it: 'tasso di base' },
      { w: 'オッズ', r: 'おっず', it: 'odds (quote)' },
      { w: '尤度比', r: 'ゆうどひ', it: 'rapporto di verosimiglianza' },
      { w: '記録', r: 'きろく', it: 'registro' },
      { w: '予測', r: 'よそく', it: 'previsione' },
      { w: '証拠', r: 'しょうこ', it: 'prova' },
      { w: '二乗', r: 'にじょう', it: 'quadrato' }
    ]
  });

  A('mnt-enigmi-strategie-di-soluzione', {
    title: { t: '[謎解|なぞと]きの[戦略|せんりゃく]', it: 'Enigmi e strategie di soluzione' },
    sum: [
      { t: '⟦[騎士|きし]⟧はいつも[本当|ほんとう]を[言|い]い、⟦[嘘|うそ]つき⟧はいつも[嘘|うそ]を[言|い]います。', it: 'I cavalieri dicono sempre il vero, i furfanti mentono sempre.' },
      { t: '[種類|しゅるい]を⟦[仮定|かてい]⟧して、⟦[矛盾|むじゅん]⟧が[出|で]たらその[場合|ばあい]を[捨|す]てます。', it: 'Si ipotizza il tipo e, se emerge una contraddizione, si scarta quel caso.' },
      { t: '[最後|さいご]に、[全部|ぜんぶ]の[発言|はつげん]を[見直|みなお]して[確|たし]かめます。', it: 'Alla fine si ricontrollano tutte le affermazioni.' },
      { t: '⟦[覆面算|ふくめんざん]⟧では、[文字|もじ]ごとに[違|ちが]う[数字|すうじ]を[当|あ]てます。', it: 'Nella crittoaritmetica a ogni lettera si assegna una cifra diversa.' },
      { t: '[一番|いちばん]ひだりと[一|いち]の[位|くらい]の[列|れつ]から[始|はじ]めます。', it: 'Si parte dalla colonna più a sinistra e da quella delle unità.' },
      { t: '⟦[数独|すうどく]⟧では、[候補|こうほ]が[一|ひと]つだけのマスから[埋|う]めます。', it: 'Nel sudoku si riempiono prima le caselle con un solo candidato.' },
      { t: '⟦[数列|すうれつ]⟧は、まず[差|さ]、[次|つぎ]に[比|ひ]を[調|しら]べます。', it: 'Per una sequenza numerica si esaminano prima le differenze, poi i rapporti.' }
    ],
    gloss: [
      { w: '騎士', r: 'きし', it: 'cavaliere (dice sempre il vero)' },
      { w: '嘘つき', r: 'うそつき', it: 'furfante (mente sempre)' },
      { w: '仮定', r: 'かてい', it: 'ipotesi' },
      { w: '矛盾', r: 'むじゅん', it: 'contraddizione' },
      { w: '覆面算', r: 'ふくめんざん', it: 'crittoaritmetica' },
      { w: '数独', r: 'すうどく', it: 'sudoku' },
      { w: '数列', r: 'すうれつ', it: 'sequenza numerica' },
      { w: '候補', r: 'こうほ', it: 'candidato' },
      { w: '列', r: 'れつ', it: 'colonna' },
      { w: '発言', r: 'はつげん', it: 'affermazione' }
    ]
  });

  A('mnt-allenare-bene-evidenze', {
    title: { t: '[上手|じょうず]に[鍛|きた]える[根拠|こんきょ]', it: 'Allenarsi bene: le evidenze' },
    sum: [
      { t: 'この[内容|ないよう]は[研究|けんきゅう]の⟦[要約|ようやく]⟧なので、[元|もと]の[論文|ろんぶん]も[読|よ]みましょう。', it: 'Questa lezione è un riassunto di studi: conviene leggere anche gli articoli originali.' },
      { t: '⟦[近転移|きんてんい]⟧はよくありますが、⟦[遠転移|えんてんい]⟧はまれで[議論|ぎろん]があります。', it: 'Il trasferimento vicino è comune; quello lontano è raro e controverso.' },
      { t: '⟦[八十五|はちじゅうご]パーセントの[規則|きそく]⟧は、[特定|とくてい]の[条件|じょうけん]での[結果|けっか]で、[万能|ばんのう]ではありません。', it: 'La regola dell’85% è un risultato in condizioni specifiche, non valido per tutto.' },
      { t: '⟦インターリーブ⟧は[種類|しゅるい]を[混|ま]ぜる[練習|れんしゅう]で、[証拠|しょうこ]の[多|おお]くは[一|ひと]つの[研究|けんきゅう]グループです。', it: 'La pratica intercalata mescola i tipi di problema; le prove vengono in gran parte da un solo gruppo di ricerca.' },
      { t: '⟦エヌバック⟧の[訓練|くんれん]は、その[課題|かだい]に[効果|こうか]がありますが、[知能|ちのう]への[効果|こうか]は[弱|よわ]いです。', it: 'L’allenamento n-back migliora quel compito, ma l’effetto sull’intelligenza è debole.' },
      { t: '⟦アクティブ[研究|けんきゅう]⟧は[高齢者|こうれいしゃ]が[対象|たいしょう]で、[予防|よぼう]の[保証|ほしょう]ではありません。', it: 'Lo studio ACTIVE riguarda gli anziani e non è una garanzia di prevenzione.' },
      { t: 'アプリで[身|み]につく⟦[戦略|せんりゃく]⟧は[似|に]た[問題|もんだい]に[役立|やくだ]ち、[知能|ちのう]ぜんたいの[向上|こうじょう]は[期待|きたい]できません。', it: 'Le strategie apprese nell’app servono per problemi simili; non ci si deve aspettare un aumento generale dell’intelligenza.' }
    ],
    gloss: [
      { w: '要約', r: 'ようやく', it: 'riassunto' },
      { w: '近転移', r: 'きんてんい', it: 'trasferimento vicino' },
      { w: '遠転移', r: 'えんてんい', it: 'trasferimento lontano' },
      { w: '八十五パーセントの規則', r: 'はちじゅうごぱーせんとのきそく', it: 'regola dell’85%' },
      { w: 'インターリーブ', r: 'いんたーりーぶ', it: 'pratica intercalata' },
      { w: 'エヌバック', r: 'えぬばっく', it: 'compito n-back' },
      { w: 'アクティブ研究', r: 'あくてぃぶけんきゅう', it: 'studio ACTIVE' },
      { w: '戦略', r: 'せんりゃく', it: 'strategia' },
      { w: '知能', r: 'ちのう', it: 'intelligenza' },
      { w: '高齢者', r: 'こうれいしゃ', it: 'anziani' }
    ]
  });
})(window.ST = window.ST || {});
