(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);

  A('jud-posture', {
    title: { t: '[自然体|しぜんたい]と[自護体|じごたい]の[姿勢|しせい]', it: 'Postura: shizentai e jigotai' },
    sum: [
      { t: '⟦[姿勢|しせい]⟧から、すべての[動|うご]きが[始|はじ]まります。', it: 'Ogni gesto del judo parte dalla postura.' },
      { t: '⟦[自然体|しぜんたい]⟧は、[自然|しぜん]で[動|うご]きやすい[姿勢|しせい]です。', it: 'Lo shizentai è la postura naturale e mobile.' },
      { t: '⟦[自護体|じごたい]⟧は、[低|ひく]くて[広|ひろ]い[守|まも]りの[姿勢|しせい]です。', it: 'Il jigotai è la postura difensiva, più bassa e più larga.' },
      { t: '⟦[重心|じゅうしん]⟧が[足|あし]の[間|あいだ]の[中|なか]にあると、[安定|あんてい]します。', it: 'Il corpo è stabile quando il baricentro cade dentro l’area tra i piedi.' },
      { t: '⟦[体重|たいじゅう]⟧は、[足|あし]の[中心|ちゅうしん]に[置|お]きます。', it: 'Il peso va messo al centro del piede.' },
      { t: 'ひざはやわらかく、⟦[背中|せなか]⟧は[長|なが]く、[目|め]は[前|まえ]を[見|み]ます。', it: 'Ginocchia morbide, schiena lunga, sguardo avanti.' },
      { t: '[横|よこ]から⟦[動画|どうが]⟧を[撮|と]って、[自分|じぶん]で[確|たし]かめます。', it: 'Ti riprendi di lato con un video e controlli da solo.' }
    ],
    gloss: [
      { w: '姿勢', r: 'しせい', it: 'postura' },
      { w: '自然体', r: 'しぜんたい', it: 'shizentai, postura naturale' },
      { w: '自護体', r: 'じごたい', it: 'jigotai, postura difensiva' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '動画', r: 'どうが', it: 'video' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '安定', r: 'あんてい', it: 'stabilità' }
    ]
  });

  A('jud-ayumi-tsugi', {
    title: { t: '[歩|あゆ]み[足|あし]と[継|つ]ぎ[足|あし]', it: 'Spostamenti: ayumi-ashi e tsugi-ashi' },
    sum: [
      { t: '[技|わざ]の[前|まえ]に、⟦[姿勢|しせい]⟧を[保|たも]って[動|うご]く[必要|ひつよう]があります。', it: 'Prima di ogni tecnica serve saper muoversi mantenendo la postura.' },
      { t: '⟦[歩|あゆ]み[足|あし]⟧は、[足|あし]を[交互|こうご]に[出|だ]す[歩|ある]き[方|かた]です。', it: 'L’ayumi-ashi è il passo normale, con i piedi che si alternano.' },
      { t: '⟦[継|つ]ぎ[足|あし]⟧は、[前|まえ]の[足|あし]が[進|すす]み、[後|うし]ろの[足|あし]が[追|お]います。', it: 'Nel tsugi-ashi il piede davanti avanza e quello dietro lo segue.' },
      { t: '[継|つ]ぎ[足|あし]では、[後|うし]ろの[足|あし]は[前|まえ]の[足|あし]を[越|こ]えません。', it: 'Nel tsugi-ashi il piede dietro non supera quello davanti.' },
      { t: '[歩|あゆ]み[足|あし]では、[足|あし]が⟦[交差|こうさ]⟧しません。', it: 'Nell’ayumi-ashi i piedi non si incrociano.' },
      { t: '⟦[頭|あたま]⟧は、いつも[同|おな]じ[高|たか]さに[保|たも]ちます。', it: 'La testa resta sempre alla stessa altezza.' },
      { t: '[走|はし]ったり[跳|と]んだりせず、⟦[床|ゆか]⟧の[近|ちか]くを[滑|すべ]ります。', it: 'Non si corre né si salta: si scivola vicino al pavimento.' }
    ],
    gloss: [
      { w: '歩み足', r: 'あゆみあし', it: 'ayumi-ashi, passi alternati' },
      { w: '継ぎ足', r: 'つぎあし', it: 'tsugi-ashi, il piede dietro segue' },
      { w: '姿勢', r: 'しせい', it: 'postura' },
      { w: '交差', r: 'こうさ', it: 'incrocio' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '床', r: 'ゆか', it: 'pavimento' },
      { w: '技', r: 'わざ', it: 'tecnica' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '前', r: 'まえ', it: 'davanti, avanti' }
    ]
  });

  A('jud-tai-sabaki', {
    title: { t: '[体捌|たいさば]き', it: 'Tai sabaki: rotazioni del corpo' },
    sum: [
      { t: '⟦[体捌|たいさば]き⟧は、[体|からだ]の[向|む]きを[変|か]える[動|うご]きです。', it: 'Il tai sabaki è il movimento che cambia l’orientamento del corpo.' },
      { t: '⟦[前回|まえまわ]り⟧と⟦[後|うし]ろ[回|まわ]り⟧が、[基本|きほん]の[回転|かいてん]です。', it: 'Mae-mawari e ushiro-mawari sono le rotazioni fondamentali.' },
      { t: '[回|まわ]るのは、[九十度|きゅうじゅうど]と[百八十度|ひゃくはちじゅうど]です。', it: 'Si ruota di novanta e di centottanta gradi.' },
      { t: '[体|からだ]は、[垂直|すいちょく]な⟦[軸|じく]⟧のまわりで[回|まわ]ります。', it: 'Il corpo ruota attorno a un asse verticale.' },
      { t: '⟦[軸足|じくあし]⟧は、[足|あし]の[先|さき]で[支|ささ]え、ひざをやわらかくします。', it: 'Il piede perno poggia sulla punta, con il ginocchio morbido.' },
      { t: '⟦[腰|こし]⟧と⟦[肩|かた]⟧は、[一緒|いっしょ]に[回|まわ]します。', it: 'Bacino e spalle girano insieme.' },
      { t: '[最後|さいご]は、バランスのよい[姿勢|しせい]で[止|と]まります。', it: 'Alla fine ti fermi in una postura equilibrata.' }
    ],
    gloss: [
      { w: '体捌き', r: 'たいさばき', it: 'tai sabaki, gestione del corpo' },
      { w: '前回り', r: 'まえまわり', it: 'mae-mawari, rotazione in avanti' },
      { w: '後ろ回り', r: 'うしろまわり', it: 'ushiro-mawari, rotazione indietro' },
      { w: '軸', r: 'じく', it: 'asse' },
      { w: '軸足', r: 'じくあし', it: 'piede perno' },
      { w: '腰', r: 'こし', it: 'bacino, anca' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '回転', r: 'かいてん', it: 'rotazione' },
      { w: '姿勢', r: 'しせい', it: 'postura' }
    ]
  });

  A('jud-kuzushi', {
    title: { t: '[崩|くず]し', it: 'Kuzushi: le otto direzioni dell’equilibrio' },
    sum: [
      { t: '⟦[崩|くず]し⟧は、[技|わざ]の[前|まえ]に[体|からだ]の[安定|あんてい]をくずすことです。', it: 'Il kuzushi è lo squilibrio che precede la tecnica.' },
      { t: '[技|わざ]は、⟦[土台|どだい]⟧を[失|うしな]った[体|からだ]に[効|き]きます。', it: 'La tecnica funziona su un corpo che ha perso la propria base.' },
      { t: 'この[練習|れんしゅう]は[一人|ひとり]で、[自分|じぶん]の⟦[限界|げんかい]⟧を[知|し]ります。', it: 'In questo esercizio, da solo, conosci il tuo limite.' },
      { t: '⟦[八方|はっぽう]⟧は、[前後左右|ぜんごさゆう]と[四|よっ]つの[斜|なな]めです。', it: 'Le otto direzioni sono avanti, indietro, destra, sinistra e le quattro diagonali.' },
      { t: '⟦[重心|じゅうしん]⟧が[足|あし]の[外|そと]へ[出|で]ると、[一歩|いっぽ]が[必要|ひつよう]です。', it: 'Se il baricentro esce dalla base, serve un passo.' },
      { t: '[足|あし]を[離|はな]さずに、ゆっくり[体重|たいじゅう]を[動|うご]かします。', it: 'Sposti lentamente il peso, senza staccare i piedi.' },
      { t: '[人|ひと]への[崩|くず]しは、⟦[指導者|しどうしゃ]⟧とだけします。', it: 'Il kuzushi su un’altra persona si fa solo con un istruttore.' }
    ],
    gloss: [
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '土台', r: 'どだい', it: 'base' },
      { w: '限界', r: 'げんかい', it: 'limite' },
      { w: '八方', r: 'はっぽう', it: 'le otto direzioni' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '技', r: 'わざ', it: 'tecnica' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '安定', r: 'あんてい', it: 'stabilità' }
    ]
  });

  A('jud-kumikata', {
    title: { t: 'ノーギの[組|く]み[方|かた]', it: 'Kumi-kata no-gi: polso, bicipite, collo e underhook' },
    sum: [
      { t: '⟦[組|く]み[方|かた]⟧は、[相手|あいて]を[持|も]つ[方法|ほうほう]です。', it: 'Il kumi-kata è il modo di prendere.' },
      { t: 'ノーギでは、⟦[道着|どうぎ]⟧の[襟|えり]や[袖|そで]がありません。', it: 'Nel no-gi mancano bavero e manica del judogi.' },
      { t: '⟦リストコントロール⟧は[手首|てくび]、⟦バイセップタイ⟧は[上腕|じょうわん]の[組|く]み[方|かた]です。', it: 'Il wrist control è la presa al polso, il bicep tie quella al bicipite.' },
      { t: '⟦カラータイ⟧は[首|くび]の[後|うし]ろ、⟦アンダーフック⟧は[脇|わき]の[下|した]です。', it: 'Il collar tie è sulla nuca, l’underhook sotto l’ascella.' },
      { t: '[組|く]み[方|かた]は、[強|つよ]くつかむことではなく、[体|からだ]の[構造|こうぞう]です。', it: 'La presa non è una morsa ma una struttura del corpo.' },
      { t: 'ねらいは、[相手|あいて]を⟦[崩|くず]す⟧ことです。', it: 'Lo scopo è creare squilibrio nell’avversario.' },
      { t: '[練習|れんしゅう]は[一人|ひとり]で、[空中|くうちゅう]で[真似|まね]だけします。', it: 'Ti alleni da solo, simulando le prese nell’aria.' }
    ],
    gloss: [
      { w: '組み方', r: 'くみかた', it: 'kumi-kata, modo di prendere' },
      { w: '道着', r: 'どうぎ', it: 'judogi' },
      { w: 'リストコントロール', r: 'りすとこんとろーる', it: 'presa al polso' },
      { w: 'バイセップタイ', r: 'ばいせっぷたい', it: 'presa al bicipite' },
      { w: 'カラータイ', r: 'からーたい', it: 'mano sulla nuca' },
      { w: 'アンダーフック', r: 'あんだーふっく', it: 'braccio sotto l’ascella' },
      { w: '崩す', r: 'くずす', it: 'squilibrare' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '空中', r: 'くうちゅう', it: 'in aria' }
    ]
  });
  A('jud-ogoshi-entry', {
    title: { t: '[大腰|おおごし]の[入|い]り[方|かた]', it: 'O-goshi no-gi: entrata a vuoto' },
    sum: [
      { t: '⟦[大腰|おおごし]⟧は、⟦[腰|こし]⟧で[投|な]げる[技|わざ]です。', it: 'L’o-goshi è una proiezione d’anca.' },
      { t: 'ここでは⟦[作|つく]り⟧だけを、ゆっくり[練習|れんしゅう]します。', it: 'Qui studi solo l’entrata (tsukuri), lentamente.' },
      { t: '[相手|あいて]なしで、[投|な]げません。', it: 'Senza partner e senza proiettare.' },
      { t: '[想像|そうぞう]の[相手|あいて]の⟦[重心|じゅうしん]⟧の[下|した]に、[腰|こし]を[入|い]れます。', it: 'Porti il bacino sotto il baricentro dell’avversario immaginario.' },
      { t: 'ひざを[曲|ま]げ、⟦[背筋|せすじ]⟧を[伸|の]ばし、[体重|たいじゅう]は[真|ま]ん[中|なか]です。', it: 'Ginocchia flesse, schiena eretta, peso al centro.' },
      { t: '[組|く]み、[進|すす]み、[回|まわ]り、[出|で]る[四|よっ]つの[動|うご]きです。', it: 'Sono quattro movimenti: presa, passo, rotazione e uscita.' },
      { t: '[形|かたち]の[確認|かくにん]は、⟦[指導者|しどうしゃ]⟧にお[願|ねが]いします。', it: 'La verifica della forma si chiede a un istruttore.' }
    ],
    gloss: [
      { w: '大腰', r: 'おおごし', it: 'o-goshi, proiezione d’anca' },
      { w: '腰', r: 'こし', it: 'bacino, anca' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '背筋', r: 'せすじ', it: 'schiena (linea della schiena)' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '技', r: 'わざ', it: 'tecnica' }
    ]
  });

  A('jud-osoto-entry', {
    title: { t: '[大外刈|おおそとがり]の[入|い]り[方|かた]', it: 'O-soto-gari no-gi: avanzata e posizionamento' },
    sum: [
      { t: '⟦[大外刈|おおそとがり]⟧は、[足|あし]を[刈|か]る⟦[技|わざ]⟧です。', it: 'L’o-soto-gari è una tecnica di spazzata.' },
      { t: '[前|まえ]に[出|で]ることと、⟦[軸足|じくあし]⟧の[位置|いち]だけを[練習|れんしゅう]します。', it: 'Alleni solo l’avanzata e la posizione del piede d’appoggio.' },
      { t: '[刈|か]る[動|うご]きは、しません。', it: 'La spazzata non si esegue.' },
      { t: '⟦[軸足|じくあし]⟧は、[想像|そうぞう]の[相手|あいて]の[横|よこ]に[置|お]きます。', it: 'Il piede d’appoggio va a fianco dell’avversario immaginario.' },
      { t: '[首|くび]の[後|うし]ろの[手|て]と⟦[手首|てくび]⟧で、⟦[上体|じょうたい]⟧と[腕|うで]をコントロールします。', it: 'La mano sulla nuca e il polso controllano il tronco e il braccio.' },
      { t: 'ひざはやわらかく、[上体|じょうたい]は[起|お]こしたままです。', it: 'Il ginocchio è morbido e il busto resta eretto.' },
      { t: '⟦[指導者|しどうしゃ]⟧に[形|かたち]を[見|み]てもらうと、いいです。', it: 'È bene far vedere la forma a un istruttore.' }
    ],
    gloss: [
      { w: '大外刈', r: 'おおそとがり', it: 'o-soto-gari, grande spazzata esterna' },
      { w: '技', r: 'わざ', it: 'tecnica' },
      { w: '軸足', r: 'じくあし', it: 'piede d’appoggio, piede perno' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '上体', r: 'じょうたい', it: 'busto, tronco' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '首', r: 'くび', it: 'collo, nuca' },
      { w: '腕', r: 'うで', it: 'braccio' }
    ]
  });

  A('jud-seoi-entry', {
    title: { t: '[背負投|せおいなげ]の[入|い]り[方|かた]', it: 'Seoi-nage no-gi: rotazione e ingresso a vuoto' },
    sum: [
      { t: '⟦[背負投|せおいなげ]⟧は、⟦[肩|かた]⟧で[投|な]げる[技|わざ]です。', it: 'Il seoi-nage è una proiezione di spalla.' },
      { t: 'ここでは[回|まわ]ることと[入|はい]ることだけを、[一人|ひとり]でします。', it: 'Qui studi solo la rotazione e l’ingresso, da solo.' },
      { t: '[組|く]み[方|かた]は、[手首|てくび]と⟦アンダーフック⟧です。', it: 'La presa è al polso e con l’underhook.' },
      { t: '[腰|こし]を[相手|あいて]の⟦[重心|じゅうしん]⟧の[下|した]に[入|い]れ、[前|まえ]の[足|あし]で[回|まわ]ります。', it: 'Porti il bacino sotto il baricentro e ruoti sul piede avanzato.' },
      { t: '⟦[上体|じょうたい]⟧は[起|お]こしたまま、[前|まえ]に[倒|たお]しません。', it: 'Il busto resta eretto e non si flette in avanti.' },
      { t: '[投|な]げの[終|お]わりまではせず、[途中|とちゅう]で[止|と]まります。', it: 'Non arrivi alla fine della proiezione: ti fermi a metà.' },
      { t: '[相手|あいて]との[練習|れんしゅう]は、⟦[指導者|しどうしゃ]⟧がいるときだけです。', it: 'Con un partner ci si allena solo in presenza di un istruttore.' }
    ],
    gloss: [
      { w: '背負投', r: 'せおいなげ', it: 'seoi-nage, proiezione di spalla' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: 'アンダーフック', r: 'あんだーふっく', it: 'braccio sotto l’ascella' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '上体', r: 'じょうたい', it: 'busto, tronco' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '腰', r: 'こし', it: 'bacino, anca' }
    ]
  });

  A('jud-deashi-timing', {
    title: { t: '[出足払|であしばらい]のタイミング', it: 'De-ashi-barai: il tempismo del passo' },
    sum: [
      { t: '⟦[出足払|であしばらい]⟧は、[進|すす]む⟦[足|あし]⟧を[払|はら]う⟦[技|わざ]⟧です。', it: 'Il de-ashi-barai è una spazzata al piede che avanza.' },
      { t: 'ここでは、[歩|あゆ]みの⟦タイミング⟧だけを[練習|れんしゅう]します。', it: 'Qui alleni solo il tempismo del passo.' },
      { t: '[払|はら]う[動|うご]きは、しません。', it: 'La spazzata non si esegue.' },
      { t: '[大切|たいせつ]なのは、⟦[力|ちから]⟧ではなくタイミングです。', it: 'Conta il tempismo, non la forza.' },
      { t: '[一定|いってい]の⟦リズム⟧で[足|あし]を[動|うご]かし、[一|いち]、[二|に]、[三|さん]と[数|かぞ]えます。', it: 'Muovi i piedi a ritmo regolare e conti uno, due, tre.' },
      { t: '[三|みっ]つ[目|め]で、[動|うご]きを[止|と]めます。', it: 'Al terzo tempo fermi il gesto.' },
      { t: '[支|ささ]える[足|あし]は、やわらかいままです。', it: 'La gamba d’appoggio resta morbida.' }
    ],
    gloss: [
      { w: '出足払', r: 'であしばらい', it: 'de-ashi-barai, spazzata al piede che avanza' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '技', r: 'わざ', it: 'tecnica' },
      { w: 'タイミング', r: 'たいみんぐ', it: 'tempismo' },
      { w: '力', r: 'ちから', it: 'forza' },
      { w: 'リズム', r: 'りずむ', it: 'ritmo' },
      { w: '歩み', r: 'あゆみ', it: 'passo' },
      { w: '動き', r: 'うごき', it: 'movimento' }
    ]
  });

  A('jud-uchikomi-rhythm', {
    title: { t: '[打込|うちこみ]のリズム', it: 'Uchikomi a vuoto: ritmo di entrata e uscita' },
    sum: [
      { t: '⟦[打込|うちこみ]⟧は、[入|い]り[方|かた]を[繰|く]り[返|かえ]して[覚|おぼ]える[練習|れんしゅう]です。', it: 'L’uchikomi è la ripetizione di un’entrata per fissare il movimento.' },
      { t: 'ここでは、[習|なら]った[入|い]り[方|かた]を[一人|ひとり]で[繰|く]り[返|かえ]します。', it: 'Qui ripeti da solo un’entrata già appresa.' },
      { t: '[戦|たたか]いのまねではなく、[投|な]げも[完成|かんせい]させません。', it: 'Non simula un combattimento e non completa alcuna proiezione.' },
      { t: '⟦[反復|はんぷく]⟧は、⟦[質|しつ]⟧がよいと[動|うご]きが[身|み]につきます。', it: 'Con ripetizioni di buona qualità il movimento si fissa.' },
      { t: '[質|しつ]が[落|お]ちたら、[間違|まちが]いを[覚|おぼ]えてしまいます。', it: 'Se la qualità cala, fissi l’errore.' },
      { t: '[一|ひと]セットは[五回|ごかい]で、⟦リズム⟧を[一定|いってい]にします。', it: 'Una serie è di cinque ripetizioni, con ritmo regolare.' },
      { t: '⟦[呼吸|こきゅう]⟧を[止|と]めず、⟦[姿勢|しせい]⟧が[悪|わる]くなったら[止|と]まります。', it: 'Non trattieni il respiro e, se la postura peggiora, ti fermi.' }
    ],
    gloss: [
      { w: '打込', r: 'うちこみ', it: 'uchikomi, ripetizione dell’entrata' },
      { w: '反復', r: 'はんぷく', it: 'ripetizione' },
      { w: '質', r: 'しつ', it: 'qualità' },
      { w: 'リズム', r: 'りずむ', it: 'ritmo' },
      { w: '呼吸', r: 'こきゅう', it: 'respiro' },
      { w: '姿勢', r: 'しせい', it: 'postura' },
      { w: 'セット', r: 'せっと', it: 'serie' },
      { w: '間違い', r: 'まちがい', it: 'errore' }
    ]
  });

  A('jud-shrimp', {
    title: { t: 'エビの[動|うご]き', it: 'Ne-waza: lo spostamento dell’anca (shrimp)' },
    sum: [
      { t: '⟦エビ⟧は、[床|ゆか]の[上|うえ]で⟦[腰|こし]⟧を[動|うご]かす[方法|ほうほう]です。', it: 'Lo shrimp è uno spostamento dell’anca a terra.' },
      { t: '⟦[寝技|ねわざ]⟧で、⟦スペース⟧をつくるために[使|つか]います。', it: 'Serve a creare spazio nel ne-waza.' },
      { t: '[一人|ひとり]で、パートナーもスパーリングもなしで[練習|れんしゅう]します。', it: 'Lo alleni da solo, senza partner e senza sparring.' },
      { t: '[足|あし]で[押|お]し、[腰|こし]を[回|まわ]し、ひざを[引|ひ]きます。', it: 'Spingi con il piede, ruoti sull’anca e ritrai le ginocchia.' },
      { t: '[動|うご]きは[腰|こし]と[足|あし]から[生|う]まれ、[首|くび]や[頭|あたま]からではありません。', it: 'Il movimento nasce dall’anca e dal piede, non dal collo o dalla testa.' },
      { t: '⟦[首|くび]⟧の[力|ちから]をぬいて、ゆっくり[動|うご]きます。', it: 'Rilassi il collo e ti muovi lentamente.' },
      { t: '[固|かた]い[床|ゆか]ではなく、⟦マット⟧の[上|うえ]だけで[行|おこな]います。', it: 'Lo fai solo sul tappeto, mai su un pavimento duro.' }
    ],
    gloss: [
      { w: 'エビ', r: 'えび', it: 'shrimp, gambero' },
      { w: '腰', r: 'こし', it: 'anca, bacino' },
      { w: '寝技', r: 'ねわざ', it: 'ne-waza, lavoro a terra' },
      { w: 'スペース', r: 'すぺーす', it: 'spazio' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: '床', r: 'ゆか', it: 'pavimento' },
      { w: 'ひざ', r: 'ひざ', it: 'ginocchio' }
    ]
  });

  A('jud-standup', {
    title: { t: 'テクニカルスタンドアップ', it: 'Rialzarsi in sicurezza: technical stand-up' },
    sum: [
      { t: '⟦テクニカルスタンドアップ⟧は、[座|すわ]った[状態|じょうたい]から[安全|あんぜん]に[立|た]ち[上|あ]がる[方法|ほうほう]です。', it: 'Il technical stand-up è un modo controllato di rialzarsi da seduto.' },
      { t: '[一人|ひとり]で、⟦マット⟧の[上|うえ]でゆっくり[行|おこな]います。', it: 'Lo fai da solo, sul tappeto, lentamente.' },
      { t: '[座|すわ]った[形|かたち]から[始|はじ]めるので、[倒|たお]れません。', it: 'Parti già seduto, quindi non cadi.' },
      { t: '⟦[背中|せなか]⟧は[自然|しぜん]なまま、[片手|かたて]は[後|うし]ろに[置|お]きます。', it: 'La schiena resta neutra e una mano sta dietro.' },
      { t: '⟦[腰|こし]⟧を[上|あ]げ、[足|あし]を[後|うし]ろへ[一歩|いっぽ][引|ひ]きます。', it: 'Sollevi il bacino e porti il piede un passo indietro.' },
      { t: '⟦[手|て]⟧は[体|からだ]の[前|まえ]に[置|お]き、[首|くび]を[支|ささ]えません。', it: 'Le mani restano davanti al corpo e non sorreggono il collo.' },
      { t: '[最後|さいご]は⟦[自護体|じごたい]⟧、そして⟦[自然体|しぜんたい]⟧で[止|と]まります。', it: 'Alla fine ti fermi in jigotai e poi in shizentai.' }
    ],
    gloss: [
      { w: 'テクニカルスタンドアップ', r: 'てくにかるすたんどあっぷ', it: 'technical stand-up, rialzo tecnico' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '手', r: 'て', it: 'mano' },
      { w: '自護体', r: 'じごたい', it: 'jigotai, postura difensiva' },
      { w: '自然体', r: 'しぜんたい', it: 'shizentai, postura naturale' },
      { w: '首', r: 'くび', it: 'collo' }
    ]
  });
  A('jud-ushiro-ukemi-lying', {
    title: { t: '[寝|ね]た[姿勢|しせい]の[後|うし]ろ[受身|うけみ]', it: 'Ushiro ukemi 1: caduta indietro da sdraiato' },
    sum: [
      { t: '⟦[受身|うけみ]⟧は、[低|ひく]い[姿勢|しせい]から[高|たか]い[姿勢|しせい]へ[順|じゅん]に[覚|おぼ]えます。', it: 'Le cadute (ukemi) si imparano dalla posizione più bassa a quella più alta.' },
      { t: 'あごを[胸|むね]につけ、[帯|おび]を[見|み]ます。', it: 'Mento sul petto, sguardo alla cintura.' },
      { t: '⟦[腕|うで]⟧は、[三十度|さんじゅうど]から[四十五度|よんじゅうごど]に[開|ひら]いて[打|う]ちます。', it: 'Il braccio batte aperto da trenta a quarantacinque gradi.' },
      { t: '⟦[息|いき]⟧は、[打|う]つときに[吐|は]きます。', it: 'Il respiro si espira nel momento della battuta.' },
      { t: '⟦[頭|あたま]⟧は、[畳|たたみ]につけません。', it: 'La testa non tocca il tappeto.' },
      { t: '[厚|あつ]い⟦[畳|たたみ]⟧の[上|うえ]だけで[行|おこな]います。', it: 'Ti alleni solo su un tatami spesso.' },
      { t: '⟦[首|くび]⟧や[背中|せなか]が[痛|いた]いときは、すぐやめます。', it: 'Se senti dolore al collo o alla schiena, ti fermi subito.' }
    ],
    gloss: [
      { w: '受身', r: 'うけみ', it: 'ukemi, caduta' },
      { w: '後ろ受身', r: 'うしろうけみ', it: 'ushiro ukemi, caduta indietro' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '息', r: 'いき', it: 'respiro' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '畳', r: 'たたみ', it: 'tatami' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: '胸', r: 'むね', it: 'petto' },
      { w: '帯', r: 'おび', it: 'cintura' },
      { w: 'あご', r: 'あご', it: 'mento' }
    ]
  });

  A('jud-yoko-ukemi-lying', {
    title: { t: '[寝|ね]た[姿勢|しせい]の[横|よこ][受身|うけみ]', it: 'Yoko ukemi 1: caduta laterale da sdraiato' },
    sum: [
      { t: '⟦[横|よこ][受身|うけみ]⟧は、[柔道|じゅうどう]でいちばんよく[使|つか]います。', it: 'Lo yoko ukemi è la caduta più usata nel judo.' },
      { t: '[横|よこ]になり、あごを[胸|むね]につけます。', it: 'Ti stendi sul fianco e porti il mento sul petto.' },
      { t: '[下|した]の⟦[腕|うで]⟧で[打|う]ち、[上|うえ]の[腕|うで]は[胸|むね]を[横切|よこぎ]ります。', it: 'Batti con il braccio basso e il braccio alto incrocia il petto.' },
      { t: '[腕|うで]は、[三十度|さんじゅうど]から[四十五度|よんじゅうごど]に[開|ひら]きます。', it: 'Il braccio si apre da trenta a quarantacinque gradi.' },
      { t: '⟦[足|あし]⟧は[軽|かる]く[開|ひら]き、⟦[交差|こうさ]⟧させず、くっつけません。', it: 'Le gambe sono leggermente divaricate, né incrociate né unite.' },
      { t: '⟦[息|いき]⟧は、[打|う]つときに[吐|は]きます。', it: 'Espiri nel momento della battuta.' },
      { t: '[前|まえ]の⟦[段階|だんかい]⟧が[安定|あんてい]してから、ここに[進|すす]みます。', it: 'Passi a questo gradino solo quando il precedente è consolidato.' }
    ],
    gloss: [
      { w: '横受身', r: 'よこうけみ', it: 'yoko ukemi, caduta laterale' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '交差', r: 'こうさ', it: 'incrocio' },
      { w: '息', r: 'いき', it: 'respiro' },
      { w: '段階', r: 'だんかい', it: 'gradino, livello' },
      { w: '柔道', r: 'じゅうどう', it: 'judo' },
      { w: '胸', r: 'むね', it: 'petto' },
      { w: 'あご', r: 'あご', it: 'mento' }
    ]
  });

  A('jud-ushiro-ukemi-seated', {
    title: { t: '[座|すわ]った[姿勢|しせい]の[後|うし]ろ[受身|うけみ]', it: 'Ushiro ukemi 2: caduta indietro da seduto' },
    sum: [
      { t: '[初|はじ]めて、[座|すわ]った[形|かたち]から[寝|ね]た[形|かたち]へ[動|うご]きます。', it: 'Per la prima volta ti muovi, dal seduto allo sdraiato.' },
      { t: '⟦[背中|せなか]⟧を[丸|まる]くして、[頭|あたま]ではなく[背中|せなか]で[転|ころ]がります。', it: 'Arrotondi la schiena e rotoli sulla schiena, non sulla testa.' },
      { t: 'あごは、[動|うご]きの[間|あいだ]ずっと[胸|むね]につけます。', it: 'Il mento resta sul petto per tutto il movimento.' },
      { t: '⟦[腕|うで]⟧は[前|まえ]に[出|だ]し、[当|あ]たる[瞬間|しゅんかん]に⟦[畳|たたみ]⟧を[打|う]ちます。', it: 'Le braccia stanno davanti e battono nel momento del contatto.' },
      { t: '⟦[頭|あたま]⟧は、[畳|たたみ]につけません。', it: 'La testa non tocca il tappeto.' },
      { t: '[勢|いきお]いで[起|お]き[上|あ]がり、⟦[首|くび]⟧に[無理|むり]をさせません。', it: 'Con lo slancio torni seduto, senza forzare il collo.' },
      { t: '⟦[息|いき]⟧は、[打|う]つときに[吐|は]きます。', it: 'Espiri nel momento della battuta.' }
    ],
    gloss: [
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: '息', r: 'いき', it: 'respiro' },
      { w: '畳', r: 'たたみ', it: 'tatami' },
      { w: '瞬間', r: 'しゅんかん', it: 'istante' },
      { w: '後ろ受身', r: 'うしろうけみ', it: 'ushiro ukemi, caduta indietro' },
      { w: '動き', r: 'うごき', it: 'movimento' }
    ]
  });

  A('jud-mae-ukemi-kneeling', {
    title: { t: 'ひざをついた[姿勢|しせい]の[前|まえ][受身|うけみ]', it: 'Mae ukemi 1: rotolamento in avanti da in ginocchio' },
    sum: [
      { t: '⟦[前|まえ][受身|うけみ]⟧は、[前|まえ]へ[倒|たお]れる[力|ちから]を[回転|かいてん]に[変|か]えます。', it: 'Il mae ukemi trasforma una caduta in avanti in un rotolamento.' },
      { t: 'ひざをついた[姿勢|しせい]の、[一番|いちばん][低|ひく]い[形|かたち]から[始|はじ]めます。', it: 'Parti dalla posizione più bassa, in ginocchio.' },
      { t: '⟦[斜|なな]め⟧の[線|せん]に[沿|そ]って、[腕|うで]と[肩|かた]の[上|うえ]を[転|ころ]がります。', it: 'Rotoli lungo una linea diagonale, sopra braccio e spalla.' },
      { t: '⟦[背骨|せぼね]⟧の[上|うえ]や[頭|あたま]の[上|うえ]は、[転|ころ]がりません。', it: 'Non rotoli sopra la colonna né sopra la testa.' },
      { t: '⟦[頭|あたま]⟧は[反対|はんたい]の⟦[腰|こし]⟧の[方|ほう]を[向|む]き、あごを[胸|むね]につけます。', it: 'La testa guarda l’anca opposta e il mento va sul petto.' },
      { t: '[反対|はんたい]の[腕|うで]を[四十五度|よんじゅうごど]に[開|ひら]き、[腰|こし]に[着|つ]くとき[打|う]ちます。', it: 'Il braccio opposto batte a quarantacinque gradi arrivando sull’anca.' },
      { t: 'この[段階|だんかい]は、⟦[指導者|しどうしゃ]⟧に[確認|かくにん]してもらいます。', it: 'Questo gradino va verificato con un istruttore.' }
    ],
    gloss: [
      { w: '前受身', r: 'まえうけみ', it: 'mae ukemi, rotolamento in avanti' },
      { w: '斜め', r: 'ななめ', it: 'diagonale' },
      { w: '背骨', r: 'せぼね', it: 'colonna vertebrale' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '腰', r: 'こし', it: 'anca, bacino' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '回転', r: 'かいてん', it: 'rotazione' }
    ]
  });

  A('jud-yoko-ukemi-low', {
    title: { t: 'しゃがんだ[姿勢|しせい]の[横|よこ][受身|うけみ]', it: 'Yoko ukemi 2: caduta laterale da accovacciato' },
    sum: [
      { t: '⟦[横|よこ][受身|うけみ]⟧を、しゃがんだ[姿勢|しせい]から[行|おこな]います。', it: 'Esegui lo yoko ukemi partendo da accovacciato.' },
      { t: '[高|たか]くなったので、[動|うご]きが[少|すこ]し[増|ふ]えます。', it: 'Salendo di altezza, il movimento aumenta un poco.' },
      { t: '⟦[体重|たいじゅう]⟧を、[片方|かたほう]の⟦[腰|こし]⟧に[移|うつ]します。', it: 'Sposti il peso su un’anca.' },
      { t: 'あごは、いつも[胸|むね]につけます。', it: 'Il mento sta sempre sul petto.' },
      { t: '[下|した]の⟦[腕|うで]⟧は、[当|あ]たる[瞬間|しゅんかん]に[三十度|さんじゅうど]から[四十五度|よんじゅうごど]で[打|う]ちます。', it: 'Il braccio basso batte al contatto da trenta a quarantacinque gradi.' },
      { t: '⟦[足|あし]⟧は[軽|かる]く[開|ひら]き、やわらかくします。', it: 'Le gambe sono divaricate e morbide.' },
      { t: '[始|はじ]めの[姿勢|しせい]が[高|たか]すぎたら、[前|まえ]の⟦[段階|だんかい]⟧に[戻|もど]ります。', it: 'Se la partenza è troppo alta, torni al gradino precedente.' }
    ],
    gloss: [
      { w: '横受身', r: 'よこうけみ', it: 'yoko ukemi, caduta laterale' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '腰', r: 'こし', it: 'anca, bacino' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '段階', r: 'だんかい', it: 'gradino, livello' },
      { w: '姿勢', r: 'しせい', it: 'postura' },
      { w: '瞬間', r: 'しゅんかん', it: 'istante' }
    ]
  });

  A('jud-ushiro-ukemi-squat', {
    title: { t: 'しゃがんだ[姿勢|しせい]の[後|うし]ろ[受身|うけみ]', it: 'Ushiro ukemi 3: caduta indietro da accovacciato' },
    sum: [
      { t: '⟦[後|うし]ろ[受身|うけみ]⟧を、しゃがんだ[姿勢|しせい]から[行|おこな]います。', it: 'Esegui l’ushiro ukemi partendo da accovacciato.' },
      { t: '[座|すわ]った[形|かたち]の[後|うし]ろ[受身|うけみ]が、[安定|あんてい]してからです。', it: 'Prima l’ushiro ukemi da seduto deve essere consolidato.' },
      { t: '[危|あぶ]ないのは、⟦[頭|あたま]⟧が[畳|たたみ]に[当|あ]たることと、[腰|こし]を[打|う]つことです。', it: 'I rischi sono che la testa tocchi e che il bacino sbatta.' },
      { t: 'ひざを[胸|むね]に[近|ちか]づけ、[丸|まる]めた⟦[背中|せなか]⟧で[転|ころ]がります。', it: 'Avvicini le ginocchia al petto e rotoli sulla schiena arrotondata.' },
      { t: '⟦[足|あし]⟧は[上|あ]げて[曲|ま]げ、かかとは[畳|たたみ]を[打|う]ちません。', it: 'Le gambe sono sollevate e flesse, i talloni non battono.' },
      { t: '⟦[腕|うで]⟧は[当|あ]たる[瞬間|しゅんかん]に[打|う]ち、⟦[息|いき]⟧を[吐|は]きます。', it: 'Il braccio batte al contatto e tu espiri.' },
      { t: 'あごは、いつも[胸|むね]につけます。', it: 'Il mento sta sempre sul petto.' }
    ],
    gloss: [
      { w: '後ろ受身', r: 'うしろうけみ', it: 'ushiro ukemi, caduta indietro' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '息', r: 'いき', it: 'respiro' },
      { w: '畳', r: 'たたみ', it: 'tatami' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '胸', r: 'むね', it: 'petto' }
    ]
  });

  A('jud-ushiro-ukemi-standing', {
    title: { t: '[立|た]った[姿勢|しせい]の[後|うし]ろ[受身|うけみ]', it: 'Ushiro ukemi 4: caduta indietro da in piedi' },
    sum: [
      { t: '⟦[後|うし]ろ[受身|うけみ]⟧の[一番|いちばん][高|たか]い[段階|だんかい]で、⟦[危険|きけん]⟧も[増|ふ]えます。', it: 'È il gradino più alto dell’ushiro ukemi, con più rischio.' },
      { t: '[前|まえ]の[段階|だんかい]が[確|たし]かで、[厚|あつ]い⟦[畳|たたみ]⟧が[必要|ひつよう]です。', it: 'Servono il gradino precedente solido e un tatami spesso.' },
      { t: '[立|た]って、ひざをやわらかくし、あごを[胸|むね]につけます。', it: 'Parti in piedi, ginocchia morbide, mento sul petto.' },
      { t: '[素早|すばや]くしゃがみ、そのまま[後|うし]ろへ[倒|たお]れます。', it: 'Scendi rapidamente in accovacciata e poi cadi all’indietro.' },
      { t: '⟦[背中|せなか]⟧を[丸|まる]くして、⟦[腰|こし]⟧を[打|う]たないようにします。', it: 'Arrotondi la schiena perché il bacino non sbatta.' },
      { t: '⟦[腕|うで]⟧は[三十度|さんじゅうど]から[四十五度|よんじゅうごど]で[打|う]ち、[息|いき]を[吐|は]きます。', it: 'Il braccio batte da trenta a quarantacinque gradi e tu espiri.' },
      { t: '[間違|まちが]えたら、[前|まえ]の[段階|だんかい]に[戻|もど]ります。', it: 'Dopo un errore torni al gradino precedente.' }
    ],
    gloss: [
      { w: '後ろ受身', r: 'うしろうけみ', it: 'ushiro ukemi, caduta indietro' },
      { w: '危険', r: 'きけん', it: 'rischio, pericolo' },
      { w: '畳', r: 'たたみ', it: 'tatami' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '息', r: 'いき', it: 'respiro' },
      { w: '段階', r: 'だんかい', it: 'gradino, livello' }
    ]
  });

  A('jud-yoko-ukemi-standing', {
    title: { t: '[立|た]った[姿勢|しせい]の[横|よこ][受身|うけみ]', it: 'Yoko ukemi 3: caduta laterale da in piedi' },
    sum: [
      { t: '⟦[横|よこ][受身|うけみ]⟧の[一番|いちばん][高|たか]い[段階|だんかい]です。', it: 'È la caduta laterale dall’altezza maggiore.' },
      { t: '[低|ひく]い[段階|だんかい]で[覚|おぼ]えた[形|かたち]を、そのまま[使|つか]います。', it: 'Usi la stessa forma imparata nei gradini più bassi.' },
      { t: '⟦[体重|たいじゅう]⟧を[片側|かたがわ]に[移|うつ]し、⟦[腰|こし]⟧から[倒|たお]れます。', it: 'Sposti il peso su un lato e scendi con l’anca.' },
      { t: '⟦[頭|あたま]⟧は、[畳|たたみ]に[絶対|ぜったい]に[着|つ]けません。', it: 'La testa non tocca mai il tappeto.' },
      { t: '[下|した]の⟦[腕|うで]⟧を[三十度|さんじゅうど]から[四十五度|よんじゅうごど]に[開|ひら]いて[打|う]ちます。', it: 'Il braccio basso batte aperto da trenta a quarantacinque gradi.' },
      { t: '⟦[足|あし]⟧は[軽|かる]く[開|ひら]き、やわらかくします。', it: 'Le gambe sono leggermente divaricate e morbide.' },
      { t: 'この[段階|だんかい]は、⟦[指導者|しどうしゃ]⟧に[確認|かくにん]してもらいます。', it: 'Questo gradino va verificato con un istruttore.' }
    ],
    gloss: [
      { w: '横受身', r: 'よこうけみ', it: 'yoko ukemi, caduta laterale' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '腰', r: 'こし', it: 'anca, bacino' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '畳', r: 'たたみ', it: 'tatami' }
    ]
  });

  A('jud-mae-ukemi-squat', {
    title: { t: 'しゃがんだ[姿勢|しせい]の[前|まえ][受身|うけみ]', it: 'Mae ukemi 2: rotolamento in avanti da accovacciato' },
    sum: [
      { t: '⟦[前|まえ][受身|うけみ]⟧を、しゃがんだ[姿勢|しせい]から[行|おこな]います。', it: 'Esegui il mae ukemi partendo da accovacciato.' },
      { t: 'ひざをついた[姿勢|しせい]より、[高|たか]くなります。', it: 'La posizione è più alta rispetto a quella in ginocchio.' },
      { t: 'すでに[覚|おぼ]えた⟦[斜|なな]め⟧の[線|せん]で[転|ころ]がります。', it: 'Rotoli sulla linea diagonale già appresa.' },
      { t: '⟦[腕|うで]⟧を[丸|まる]くして[肩|かた]の[近|ちか]くにつけ、[頭|あたま]は[腰|こし]の[方|ほう]を[向|む]きます。', it: 'Il braccio forma un arco vicino alla spalla e la testa guarda l’anca.' },
      { t: '⟦[頭|あたま]⟧を、[肩|かた]の[下|した]に[入|い]れません。', it: 'La testa non entra sotto la spalla.' },
      { t: '⟦[背骨|せぼね]⟧の[上|うえ]ではなく、[腕|うで]と[肩|かた]の[上|うえ]を[転|ころ]がります。', it: 'Non rotoli sulla colonna ma sopra braccio e spalla.' },
      { t: '⟦[危険|きけん]⟧があるので、[指導者|しどうしゃ]に[確認|かくにん]してもらいます。', it: 'Per il rischio presente, la forma va verificata con un istruttore.' }
    ],
    gloss: [
      { w: '前受身', r: 'まえうけみ', it: 'mae ukemi, rotolamento in avanti' },
      { w: '斜め', r: 'ななめ', it: 'diagonale' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '背骨', r: 'せぼね', it: 'colonna vertebrale' },
      { w: '危険', r: 'きけん', it: 'rischio' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '腰', r: 'こし', it: 'anca, bacino' }
    ]
  });

  A('jud-mae-ukemi-standing', {
    title: { t: '[立|た]った[姿勢|しせい]の[前|まえ][受身|うけみ]', it: 'Mae ukemi 3: rotolamento in avanti da in piedi' },
    sum: [
      { t: '⟦[前|まえ][受身|うけみ]⟧の[一番|いちばん][高|たか]い[段階|だんかい]で、[立|た]った[姿勢|しせい]から[行|おこな]います。', it: 'È il gradino più alto del mae ukemi, da in piedi.' },
      { t: 'しゃがんだ[形|かたち]が[安定|あんてい]してから、⟦[畳|たたみ]⟧の[上|うえ]だけで[始|はじ]めます。', it: 'Inizi solo quando la forma da accovacciato è consolidata, e solo su tatami.' },
      { t: '[一歩|いっぽ][前|まえ]に[出|で]て、[片方|かたほう]の⟦[腕|うで]⟧を[丸|まる]くします。', it: 'Fai un passo avanti e formi un arco con un braccio.' },
      { t: 'あごを[胸|むね]につけ、[反対|はんたい]の⟦[腰|こし]⟧を[見|み]ます。', it: 'Il mento va sul petto e lo sguardo all’anca opposta.' },
      { t: '⟦[斜|なな]め⟧に、[腕|うで]と[肩|かた]の[上|うえ]を[転|ころ]がります。', it: 'Rotoli in diagonale sopra braccio e spalla.' },
      { t: '[足|あし]は[畳|たたみ]を[打|う]たず、[軽|かる]く[着|つ]きます。', it: 'Le gambe non battono: atterri in modo leggero.' },
      { t: 'この[段階|だんかい]は、⟦[指導者|しどうしゃ]⟧に[確認|かくにん]してもらいます。', it: 'Questo gradino va verificato con un istruttore.' }
    ],
    gloss: [
      { w: '前受身', r: 'まえうけみ', it: 'mae ukemi, rotolamento in avanti' },
      { w: '畳', r: 'たたみ', it: 'tatami' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '腰', r: 'こし', it: 'anca, bacino' },
      { w: '斜め', r: 'ななめ', it: 'diagonale' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '足', r: 'あし', it: 'piede, gamba' }
    ]
  });
  A('jud-ogoshi-full', {
    title: { t: '[大腰|おおごし]の[全体|ぜんたい]の[動|うご]き', it: 'O-goshi no-gi: il gesto completo a vuoto' },
    sum: [
      { t: '⟦[大腰|おおごし]⟧は、⟦[腰技|こしわざ]⟧の[基本|きほん]の[技|わざ]です。', it: 'L’o-goshi è una delle tecniche d’anca fondamentali.' },
      { t: '[一人|ひとり]で、[相手|あいて]なしで、[投|な]げずに[練習|れんしゅう]します。', it: 'Ti alleni da solo, senza partner e senza proiettare.' },
      { t: '⟦[崩|くず]し⟧、⟦[作|つく]り⟧、⟦[掛|か]け⟧の[三|みっ]つの[段階|だんかい]があります。', it: 'Ci sono tre fasi: kuzushi, tsukuri e kake.' },
      { t: '[腰|こし]は、[相手|あいて]の[重心|じゅうしん]の[下|した]で[支点|してん]になります。', it: 'Il bacino fa da fulcro sotto il baricentro dell’avversario.' },
      { t: '[組|く]み[方|かた]は、[手首|てくび]の⟦[引|ひ]き[手|て]⟧とアンダーフックです。', it: 'La presa è l’hikite al polso e l’underhook.' },
      { t: '[最後|さいご]は[投|な]げずに、[必|かなら]ず[立|た]ったまま[止|と]まります。', it: 'Alla fine non proietti e ti fermi sempre in piedi.' },
      { t: '[形|かたち]は[指導者|しどうしゃ]に[見|み]てもらうと、いいです。', it: 'È bene far vedere la forma a un istruttore.' }
    ],
    gloss: [
      { w: '大腰', r: 'おおごし', it: 'o-goshi, grande anca' },
      { w: '腰技', r: 'こしわざ', it: 'koshi-waza, tecniche d’anca' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '引き手', r: 'ひきて', it: 'hikite, mano che tira' },
      { w: '腰', r: 'こし', it: 'bacino, anca' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' }
    ]
  });

  A('jud-osoto-full', {
    title: { t: '[大外刈|おおそとがり]の[全体|ぜんたい]の[動|うご]き', it: 'O-soto-gari no-gi: la spazzata esterna a vuoto' },
    sum: [
      { t: '⟦[大外刈|おおそとがり]⟧は、[最初|さいしょ]に[習|なら]う⟦[足技|あしわざ]⟧の[一つ|ひとつ]です。', it: 'L’o-soto-gari è una delle prime tecniche di gamba che si studiano.' },
      { t: '[空中|くうちゅう]で[行|おこな]い、[誰|だれ]も[投|な]げず、[自分|じぶん]も[倒|たお]れません。', it: 'Lo esegui nell’aria: nessuno è proiettato e tu non cadi.' },
      { t: '⟦[崩|くず]し⟧は、[相手|あいて]の⟦[体重|たいじゅう]⟧を[後|うし]ろのかかとに[乗|の]せます。', it: 'Il kuzushi porta il peso dell’avversario sul suo tallone.' },
      { t: '⟦[作|つく]り⟧は、[相手|あいて]の[足|あし]の[横|よこ]に[足|あし]を[置|お]くことです。', it: 'Il tsukuri è mettere il piede a fianco del piede dell’avversario.' },
      { t: '⟦[掛|か]け⟧は、[片足|かたあし]を[低|ひく]く[後|うし]ろへ[払|はら]う[動|うご]きです。', it: 'Il kake è la spazzata bassa all’indietro di una gamba.' },
      { t: '⟦[上体|じょうたい]⟧は[前|まえ]に[進|すす]み、[足|あし]は[後|うし]ろへ[行|い]きます。', it: 'Il busto va avanti mentre la gamba va indietro.' },
      { t: '[物|もの]や[人|ひと]に[当|あ]てず、[最後|さいご]は[立|た]って[止|と]まります。', it: 'Non colpisci oggetti o persone e finisci in piedi.' }
    ],
    gloss: [
      { w: '大外刈', r: 'おおそとがり', it: 'o-soto-gari, grande spazzata esterna' },
      { w: '足技', r: 'あしわざ', it: 'ashi-waza, tecniche di gamba' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '上体', r: 'じょうたい', it: 'busto, tronco' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: 'かかと', r: 'かかと', it: 'tallone' }
    ]
  });

  A('jud-seoi-full', {
    title: { t: '[背負投|せおいなげ]の[全体|ぜんたい]の[動|うご]き', it: 'Seoi-nage no-gi: la proiezione sulla schiena a vuoto' },
    sum: [
      { t: '⟦[背負投|せおいなげ]⟧は、⟦[手技|てわざ]⟧の[一つ|ひとつ]です。', it: 'Il seoi-nage è una tecnica di braccia e mani.' },
      { t: '[相手|あいて]を[前|まえ]に[引|ひ]き、[背中|せなか]と[肩|かた]に[乗|の]せる[技|わざ]です。', it: 'Porti l’avversario in avanti e lo carichi su schiena e spalle.' },
      { t: 'ここでは[一人|ひとり]で、[空中|くうちゅう]で[行|おこな]います。', it: 'Qui lo esegui da solo, nell’aria.' },
      { t: '⟦[崩|くず]し⟧は、[手首|てくび]で[相手|あいて]を[前|まえ]のつま[先|さき]に[乗|の]せます。', it: 'Il kuzushi porta l’avversario sulle punte, con la mano al polso.' },
      { t: '⟦[作|つく]り⟧では、⟦[軸足|じくあし]⟧で[回|まわ]り、⟦[肩|かた]⟧を[脇|わき]の[下|した]に[入|い]れます。', it: 'Nel tsukuri ruoti sul piede perno e metti la spalla sotto l’ascella.' },
      { t: '⟦[掛|か]け⟧では、[足|あし]を[伸|の]ばし、[肩|かた]を[回|まわ]します。', it: 'Nel kake estendi le gambe e ruoti le spalle.' },
      { t: '⟦[上体|じょうたい]⟧の[傾|かたむ]きは、[最大|さいだい]で[二十度|にじゅうど]ぐらいです。', it: 'L’inclinazione del busto è al massimo di circa venti gradi.' }
    ],
    gloss: [
      { w: '背負投', r: 'せおいなげ', it: 'seoi-nage, proiezione sulla schiena' },
      { w: '手技', r: 'てわざ', it: 'te-waza, tecniche di mano' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '軸足', r: 'じくあし', it: 'piede perno' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '上体', r: 'じょうたい', it: 'busto, tronco' },
      { w: '手首', r: 'てくび', it: 'polso' }
    ]
  });

  A('jud-ouchi-full', {
    title: { t: '[大内刈|おおうちがり]の[全体|ぜんたい]の[動|うご]き', it: 'O-uchi-gari no-gi: la spazzata interna a vuoto' },
    sum: [
      { t: '⟦[大内刈|おおうちがり]⟧は、⟦[足技|あしわざ]⟧で、[足|あし]の⟦[内側|うちがわ]⟧を[払|はら]います。', it: 'L’o-uchi-gari è una tecnica di gamba che spazza all’interno delle gambe.' },
      { t: '[大外刈|おおそとがり]は[外|そと]から、[大内刈|おおうちがり]は[内|うち]から[刈|か]ります。', it: 'L’o-soto-gari falcia dall’esterno, l’o-uchi-gari dall’interno.' },
      { t: '[空中|くうちゅう]で[低|ひく]く[行|おこな]い、[誰|だれ]も[投|な]げません。', it: 'La esegui nell’aria, in basso, senza proiettare nessuno.' },
      { t: '⟦[崩|くず]し⟧は、[相手|あいて]を[後|うし]ろと[横|よこ]に[少|すこ]し[動|うご]かします。', it: 'Il kuzushi porta l’avversario indietro e un poco di lato.' },
      { t: '⟦[作|つく]り⟧は、[足|あし]を[相手|あいて]の[両足|りょうあし]の[間|あいだ]に[置|お]きます。', it: 'Il tsukuri mette il piede tra le gambe dell’avversario.' },
      { t: '⟦[掛|か]け⟧は、[足先|あしさき]を[曲|ま]げて[内側|うちがわ]へ[低|ひく]く[払|はら]います。', it: 'Il kake spazza in basso all’interno, con il piede flesso.' },
      { t: '[最後|さいご]は[立|た]ったまま、バランスを[保|たも]ちます。', it: 'Alla fine resti in piedi, in equilibrio.' }
    ],
    gloss: [
      { w: '大内刈', r: 'おおうちがり', it: 'o-uchi-gari, grande spazzata interna' },
      { w: '足技', r: 'あしわざ', it: 'ashi-waza, tecniche di gamba' },
      { w: '内側', r: 'うちがわ', it: 'interno, lato interno' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '大外刈', r: 'おおそとがり', it: 'o-soto-gari, grande spazzata esterna' },
      { w: '足先', r: 'あしさき', it: 'punta del piede' }
    ]
  });

  A('jud-kouchi-full', {
    title: { t: '[小内刈|こうちがり]の[全体|ぜんたい]の[動|うご]き', it: 'Ko-uchi-gari no-gi: la piccola spazzata interna a vuoto' },
    sum: [
      { t: '⟦[小内刈|こうちがり]⟧は、[小|ちい]さな⟦[足技|あしわざ]⟧です。', it: 'Il ko-uchi-gari è una piccola tecnica di gamba.' },
      { t: '[動|うご]きは[短|みじか]く、[床|ゆか]に[近|ちか]いです。', it: 'Il gesto è breve e vicino al terreno.' },
      { t: '[力|ちから]ではなく、[相手|あいて]のかかとに[小|ちい]さく[足|あし]を[当|あ]てる[技|わざ]です。', it: 'Non è una tecnica di forza ma un piccolo gesto del piede sul tallone.' },
      { t: '⟦[崩|くず]し⟧で、[相手|あいて]の[体重|たいじゅう]を⟦かかと⟧に[乗|の]せます。', it: 'Con il kuzushi porti il peso dell’avversario sul tallone.' },
      { t: '⟦[作|つく]り⟧は、[小|ちい]さな[一歩|いっぽ]で⟦[軸足|じくあし]⟧を[近|ちか]くに[置|お]きます。', it: 'Il tsukuri è un piccolo passo con il piede d’appoggio vicino.' },
      { t: '⟦[掛|か]け⟧は、[足|あし]を[床|ゆか]の[近|ちか]くで[短|みじか]く[動|うご]かします。', it: 'Il kake muove il piede brevemente, vicino al pavimento.' },
      { t: '[空中|くうちゅう]だけで[行|おこな]い、[最後|さいご]は[立|た]ちます。', it: 'Lo fai solo nell’aria e finisci in piedi.' }
    ],
    gloss: [
      { w: '小内刈', r: 'こうちがり', it: 'ko-uchi-gari, piccola spazzata interna' },
      { w: '足技', r: 'あしわざ', it: 'ashi-waza, tecniche di gamba' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '軸足', r: 'じくあし', it: 'piede d’appoggio' },
      { w: 'かかと', r: 'かかと', it: 'tallone' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' }
    ]
  });

  A('jud-taiotoshi-full', {
    title: { t: '[体落|たいおとし]の[全体|ぜんたい]の[動|うご]き', it: 'Tai-otoshi no-gi: il blocco della gamba, a vuoto' },
    sum: [
      { t: '⟦[体落|たいおとし]⟧は、[体|からだ]を[落|お]とすという[意味|いみ]の⟦[手技|てわざ]⟧です。', it: 'Il tai-otoshi significa «caduta del corpo» ed è una tecnica di mano.' },
      { t: '⟦[腕|うで]⟧と[体|からだ]の⟦[回転|かいてん]⟧が[中心|ちゅうしん]で、[腰|こし]ではありません。', it: 'Il lavoro principale lo fanno le braccia e la rotazione, non l’anca.' },
      { t: '[相手|あいて]を、[伸|の]ばした[足|あし]の[上|うえ]に[通|とお]します。', it: 'L’avversario passa sopra una gamba tesa.' },
      { t: '⟦[崩|くず]し⟧は、[相手|あいて]を[前|まえ]と[横|よこ]に[引|ひ]きます。', it: 'Il kuzushi porta l’avversario in avanti e di lato.' },
      { t: '⟦[作|つく]り⟧は、[二歩|にほ]と[回転|かいてん]で[良|よ]い[位置|いち]に[入|はい]ります。', it: 'Il tsukuri ti porta nella posizione giusta con due passi e una rotazione.' },
      { t: '⟦[掛|か]け⟧は、[片足|かたあし]を[相手|あいて]の[足|あし]の[前|まえ]に[伸|の]ばして[止|と]めます。', it: 'Il kake tende una gamba davanti al suo piede come blocco.' },
      { t: '[最後|さいご]は[自分|じぶん]も[倒|たお]れず、[立|た]って[止|と]まります。', it: 'Alla fine non cadi e ti fermi in piedi.' }
    ],
    gloss: [
      { w: '体落', r: 'たいおとし', it: 'tai-otoshi, caduta del corpo' },
      { w: '手技', r: 'てわざ', it: 'te-waza, tecniche di mano' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '回転', r: 'かいてん', it: 'rotazione' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '腰', r: 'こし', it: 'anca, bacino' }
    ]
  });

  A('jud-harai-goshi-full', {
    title: { t: '[払腰|はらいごし]のゆっくりした[動|うご]き', it: 'Harai-goshi no-gi: equilibrio e tempo lento' },
    sum: [
      { t: '⟦[払腰|はらいごし]⟧は、⟦[腰技|こしわざ]⟧の[一つ|ひとつ]で、[足|あし]で[払|はら]います。', it: 'L’harai-goshi è una tecnica d’anca in cui una gamba spazza.' },
      { t: '[片足|かたあし]で[立|た]つ⟦[瞬間|しゅんかん]⟧があるので、[上級|じょうきゅう]の[技|わざ]です。', it: 'È una tecnica avanzata perché per un istante stai su una gamba sola.' },
      { t: 'だから、ゆっくり[確|たし]かめながら[練習|れんしゅう]します。', it: 'Per questo ti alleni lentamente e con controllo.' },
      { t: '⟦[崩|くず]し⟧は、[相手|あいて]をつま[先|さき]の[方|ほう]へ[前|まえ]に[引|ひ]きます。', it: 'Il kuzushi porta l’avversario in avanti, verso le punte dei piedi.' },
      { t: '⟦[軸足|じくあし]⟧が[大切|たいせつ]で、ひざはやわらかく、[足|あし]の[先|さき]で[回|まわ]ります。', it: 'Il piede d’appoggio conta: ginocchio morbido, pivot sull’avampiede.' },
      { t: '[足|あし]を[後|うし]ろへ[払|はら]いますが、[腰|こし]より[高|たか]くしません。', it: 'La gamba spazza all’indietro ma non sale oltre l’altezza dell’anca.' },
      { t: '[最後|さいご]は[足|あし]を[前|まえ]に[戻|もど]し、⟦[自然体|しぜんたい]⟧で[止|と]まります。', it: 'Alla fine riporti il piede davanti e ti fermi in shizentai.' }
    ],
    gloss: [
      { w: '払腰', r: 'はらいごし', it: 'harai-goshi, spazzata d’anca' },
      { w: '腰技', r: 'こしわざ', it: 'koshi-waza, tecniche d’anca' },
      { w: '瞬間', r: 'しゅんかん', it: 'istante' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '軸足', r: 'じくあし', it: 'piede d’appoggio' },
      { w: '自然体', r: 'しぜんたい', it: 'shizentai, postura naturale' },
      { w: '腰', r: 'こし', it: 'anca, bacino' },
      { w: '上級', r: 'じょうきゅう', it: 'avanzato' }
    ]
  });

  A('jud-uchimata-full', {
    title: { t: '[内股|うちまた]の[軸|じく]と[足|あし]の[操作|そうさ]', it: 'Uchi-mata no-gi: asse e controllo della gamba' },
    sum: [
      { t: '⟦[内股|うちまた]⟧は、[足|あし]を[相手|あいて]の⟦[腿|もも]⟧の⟦[内側|うちがわ]⟧に[入|い]れる[技|わざ]です。', it: 'L’uchi-mata inserisce la gamba all’interno della coscia dell’avversario.' },
      { t: '[片足|かたあし]で[立|た]つので、[上級|じょうきゅう]の[技|わざ]です。', it: 'Si sta su una gamba sola, quindi è una tecnica avanzata.' },
      { t: '[一人|ひとり]で、ゆっくり[練習|れんしゅう]します。', it: 'Ti alleni da solo, lentamente.' },
      { t: '⟦[崩|くず]し⟧は、[相手|あいて]を[前|まえ]と[少|すこ]し[横|よこ]へ[引|ひ]きます。', it: 'Il kuzushi porta l’avversario in avanti e un poco di lato.' },
      { t: '[大切|たいせつ]なのは⟦[軸|じく]⟧で、[頭|あたま]と[肩|かた]と[腰|こし]を[軸足|じくあし]の[上|うえ]に[並|なら]べます。', it: 'Conta l’asse: testa, spalle e anca sono allineate sopra il piede d’appoggio.' },
      { t: '[足|あし]は[内側|うちがわ]から[後|うし]ろへ[上|あ]げますが、[腰|こし]より[高|たか]くしません。', it: 'La gamba sale all’interno e all’indietro, ma non oltre l’altezza del bacino.' },
      { t: '⟦[払腰|はらいごし]⟧は[後|うし]ろへ[払|はら]い、[内股|うちまた]は[内側|うちがわ]へ[上|あ]げます。', it: 'L’harai-goshi spazza all’indietro, l’uchi-mata sale all’interno.' }
    ],
    gloss: [
      { w: '内股', r: 'うちまた', it: 'uchi-mata, all’interno della coscia' },
      { w: '腿', r: 'もも', it: 'coscia' },
      { w: '内側', r: 'うちがわ', it: 'interno' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '軸', r: 'じく', it: 'asse' },
      { w: '払腰', r: 'はらいごし', it: 'harai-goshi, spazzata d’anca' },
      { w: '軸足', r: 'じくあし', it: 'piede d’appoggio' },
      { w: '腰', r: 'こし', it: 'anca, bacino' }
    ]
  });

  A('jud-kosoto-full', {
    title: { t: '[小外刈|こそとがり]と[小外掛|こそとがけ]', it: 'Ko-soto-gari e ko-soto-gake no-gi: spazzata e gancio' },
    sum: [
      { t: '⟦[小外刈|こそとがり]⟧は、[小|ちい]さく[外側|そとがわ]から[払|はら]う⟦[足技|あしわざ]⟧です。', it: 'Il ko-soto-gari è una piccola spazzata esterna, una tecnica di gamba.' },
      { t: '⟦[小外掛|こそとがけ]⟧は、[外側|そとがわ]から[小|ちい]さく[掛|か]ける[足技|あしわざ]です。', it: 'Il ko-soto-gake è un piccolo gancio esterno.' },
      { t: 'どちらも、かかとの[外側|そとがわ]に[足|あし]で[働|はたら]きかけます。', it: 'In entrambe il piede agisce sul lato esterno del tallone.' },
      { t: '⟦[刈|か]り⟧は[払|はら]って[通|とお]り[過|す]ぎ、⟦[掛|か]け⟧は[引|ひ]っかけて[止|と]まります。', it: 'Il gari spazza e passa oltre, il gake aggancia e resta un istante.' },
      { t: '⟦[崩|くず]し⟧は、[相手|あいて]を[後|うし]ろのかかとに[乗|の]せます。', it: 'Il kuzushi porta l’avversario sul tallone, all’indietro.' },
      { t: '[足|あし]は[床|ゆか]から[数|すう]センチの[低|ひく]さで、ひざを[超|こ]えません。', it: 'Il piede resta a pochi centimetri da terra e non supera il ginocchio.' },
      { t: '[最後|さいご]は[立|た]ったまま、[空中|くうちゅう]だけで[行|おこな]います。', it: 'Alla fine resti in piedi e lo fai solo nell’aria.' }
    ],
    gloss: [
      { w: '小外刈', r: 'こそとがり', it: 'ko-soto-gari, piccola spazzata esterna' },
      { w: '小外掛', r: 'こそとがけ', it: 'ko-soto-gake, piccolo gancio esterno' },
      { w: '足技', r: 'あしわざ', it: 'ashi-waza, tecniche di gamba' },
      { w: '刈り', r: 'かり', it: 'gari, spazzare' },
      { w: '掛け', r: 'かけ', it: 'gake, agganciare' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: 'かかと', r: 'かかと', it: 'tallone' },
      { w: '外側', r: 'そとがわ', it: 'esterno' }
    ]
  });

  A('jud-koshi-guruma-full', {
    title: { t: '[腰車|こしぐるま]', it: 'Koshi-guruma no-gi: la ruota sull’anca' },
    sum: [
      { t: '⟦[腰車|こしぐるま]⟧は、⟦[腰技|こしわざ]⟧の[一つ|ひとつ]で、[腰|こし]の[車|くるま]という[意味|いみ]です。', it: 'Il koshi-guruma è una tecnica d’anca e significa «ruota dell’anca».' },
      { t: '[相手|あいて]を[腰|こし]に[乗|の]せ、[車|くるま]のように[回|まわ]します。', it: 'Carichi l’avversario sull’anca e lo fai ruotare come una ruota.' },
      { t: 'ノーギでは、[腕|うで]で[相手|あいて]の[首|くび]を⟦ネックラップ⟧します。', it: 'Nel no-gi il braccio avvolge il collo dell’avversario (neck wrap).' },
      { t: 'ここでは[空中|くうちゅう]だけで、まねをします。', it: 'Qui lo simuli solo nell’aria.' },
      { t: '⟦[崩|くず]し⟧は、[手首|てくび]で[相手|あいて]をつま[先|さき]の[方|ほう]へ[引|ひ]きます。', it: 'Il kuzushi porta l’avversario sulle punte con la mano al polso.' },
      { t: '[腰|こし]は[相手|あいて]の⟦[重心|じゅうしん]⟧の[下|した]で、[後|うし]ろへ[押|お]しません。', it: 'Il bacino sta sotto il suo baricentro e non si spinge indietro.' },
      { t: '⟦[大腰|おおごし]⟧は[腰|こし]の[周|まわ]りを、[腰車|こしぐるま]は[首|くび]の[後|うし]ろを[巻|ま]きます。', it: 'L’o-goshi avvolge la vita, il koshi-guruma avvolge dietro il collo.' }
    ],
    gloss: [
      { w: '腰車', r: 'こしぐるま', it: 'koshi-guruma, ruota dell’anca' },
      { w: '腰技', r: 'こしわざ', it: 'koshi-waza, tecniche d’anca' },
      { w: 'ネックラップ', r: 'ねっくらっぷ', it: 'neck wrap, braccio attorno al collo' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '大腰', r: 'おおごし', it: 'o-goshi, grande anca' },
      { w: '腰', r: 'こし', it: 'anca, bacino' },
      { w: '首', r: 'くび', it: 'collo' }
    ]
  });

  A('jud-morote-seoi-full', {
    title: { t: '[諸手背負投|もろてせおいなげ]', it: 'Morote-seoi-nage con judogi: la presa a due mani' },
    sum: [
      { t: '⟦[諸手背負投|もろてせおいなげ]⟧は、[両手|りょうて]で[持|も]つ⟦[背負投|せおいなげ]⟧です。', it: 'Il morote-seoi-nage è un seoi-nage con presa a due mani.' },
      { t: 'このコースでは、⟦[道着|どうぎ]⟧を[使|つか]う[唯一|ゆいいつ]の[技|わざ]です。', it: 'In questo percorso è l’unica tecnica che usa il judogi.' },
      { t: '⟦[崩|くず]し⟧は、[両手|りょうて]で⟦[襟|えり]⟧を[持|も]って[前|まえ]へ[引|ひ]きます。', it: 'Il kuzushi porta l’avversario in avanti con le due mani sul bavero.' },
      { t: '⟦[肘|ひじ]⟧は、[相手|あいて]の[脇|わき]の[下|した]に[入|い]れ、[広|ひろ]げません。', it: 'I gomiti stanno sotto le sue ascelle, stretti.' },
      { t: '⟦[肩|かた]⟧を[相手|あいて]の[脇|わき]の[下|した]に[入|い]れ、ひざを[曲|ま]げます。', it: 'Le spalle vanno sotto le sue ascelle e le ginocchia sono flesse.' },
      { t: '[足|あし]を[伸|の]ばして[肩|かた]を[回|まわ]し、[上体|じょうたい]は[二十度|にじゅうど]ぐらいまで[傾|かたむ]けます。', it: 'Estendi le gambe, ruoti le spalle e inclini il busto fino a circa venti gradi.' },
      { t: '[足|あし]は、[相手|あいて]の⟦[軸|じく]⟧の[近|ちか]くに[置|お]きます。', it: 'I piedi stanno vicini all’asse dell’avversario.' }
    ],
    gloss: [
      { w: '諸手背負投', r: 'もろてせおいなげ', it: 'morote-seoi-nage, seoi-nage a due mani' },
      { w: '背負投', r: 'せおいなげ', it: 'seoi-nage' },
      { w: '道着', r: 'どうぎ', it: 'judogi' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '襟', r: 'えり', it: 'bavero' },
      { w: '肘', r: 'ひじ', it: 'gomito' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '軸', r: 'じく', it: 'asse' }
    ]
  });
  A('jud-band-uchikomi', {
    title: { t: 'ゴムバンドを[使|つか]った[打込|うちこみ]', it: 'Uchikomi con elastico: ripetizioni senza proiezione' },
    sum: [
      { t: '⟦[打込|うちこみ]⟧は、[入|い]り[方|かた]を[繰|く]り[返|かえ]す[練習|れんしゅう]です。', it: 'L’uchikomi è l’esercizio di ripetere l’entrata.' },
      { t: '⟦ゴムバンド⟧を[相手|あいて]の[代|か]わりにして、[一人|ひとり]でします。', it: 'Lo fai da solo, con un elastico al posto del partner.' },
      { t: '⟦[作|つく]り⟧から⟦[掛|か]け⟧の[手前|てまえ]まで[行|おこな]い、[投|な]げは[完成|かんせい]させません。', it: 'Vai dal tsukuri fino al kake, senza completare la proiezione.' },
      { t: '[丈夫|じょうぶ]な⟦[固定点|こていてん]⟧に、ゴムバンドを[付|つ]けます。', it: 'L’elastico si fissa a un ancoraggio solido.' },
      { t: '[顔|かお]は、ゴムバンドが[引|ひ]く[線|せん]から[離|はな]します。', it: 'Il viso resta lontano dalla linea di tiro dell’elastico.' },
      { t: '[一|ひと]セットは[五回|ごかい]から[八回|はちかい]で、⟦[質|しつ]⟧を[大切|たいせつ]にします。', it: 'Una serie è di cinque-otto ripetizioni e conta la qualità.' },
      { t: '[道具|どうぐ]と[形|かたち]は、⟦[指導者|しどうしゃ]⟧に[見|み]てもらうと、いいです。', it: 'Attrezzatura e forma è bene farle vedere a un istruttore.' }
    ],
    gloss: [
      { w: '打込', r: 'うちこみ', it: 'uchikomi, ripetizione dell’entrata' },
      { w: 'ゴムバンド', r: 'ごむばんど', it: 'elastico' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '固定点', r: 'こていてん', it: 'ancoraggio' },
      { w: '質', r: 'しつ', it: 'qualità' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '道具', r: 'どうぐ', it: 'attrezzatura' }
    ]
  });

  A('jud-plum-clinch', {
    title: { t: 'プラムクリンチ', it: 'Clinch plum: postura e controllo della testa (a vuoto)' },
    sum: [
      { t: '⟦ムエタイ⟧の[組|く]み[合|あ]いを、⟦クリンチ⟧と[呼|よ]びます。', it: 'Nel muay thai il corpo a corpo si chiama clinch.' },
      { t: '⟦プラムクリンチ⟧は、[両手|りょうて]を[首|くび]の[後|うし]ろに[回|まわ]す[形|かたち]です。', it: 'Il plum clinch chiude le due mani dietro la nuca.' },
      { t: '⟦[肘|ひじ]⟧は、[胸|むね]の[前|まえ]で[近|ちか]づけます。', it: 'I gomiti si stringono davanti al petto.' },
      { t: '[足|あし]は[肩幅|かたはば]で、ひざはやわらかく、[体重|たいじゅう]は[真|ま]ん[中|なか]です。', it: 'Piedi alla larghezza delle spalle, ginocchia morbide, peso al centro.' },
      { t: '[力|ちから]は[腕|うで]だけでなく、⟦[背筋|せすじ]⟧と[腰|こし]から[出|で]ます。', it: 'La forza viene da schiena e bacino, non solo dalle braccia.' },
      { t: '[一人|ひとり]で[空中|くうちゅう]だけを[練習|れんしゅう]し、[何|なに]にも[当|あ]てません。', it: 'Ti alleni da solo nell’aria, senza colpire nulla.' },
      { t: '⟦サンドバッグ⟧や[相手|あいて]は、⟦[指導者|しどうしゃ]⟧がいるときだけです。', it: 'Sacco e partner solo in presenza di un istruttore.' }
    ],
    gloss: [
      { w: 'ムエタイ', r: 'むえたい', it: 'muay thai' },
      { w: 'クリンチ', r: 'くりんち', it: 'clinch, corpo a corpo' },
      { w: 'プラムクリンチ', r: 'ぷらむくりんち', it: 'plum clinch' },
      { w: '肘', r: 'ひじ', it: 'gomito' },
      { w: '背筋', r: 'せすじ', it: 'schiena' },
      { w: 'サンドバッグ', r: 'さんどばっぐ', it: 'sacco' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '首', r: 'くび', it: 'collo, nuca' }
    ]
  });

  A('jud-khao-trong', {
    title: { t: 'カオトロン、まっすぐな[膝蹴|ひざげ]り', it: 'Khao trong: ginocchiata diretta in clinch (a vuoto)' },
    sum: [
      { t: '⟦カオトロン⟧は、まっすぐ[上|あ]げる⟦[膝蹴|ひざげ]り⟧です。', it: 'Il khao trong è la ginocchiata diretta, che sale in linea retta.' },
      { t: 'ひざは[腰|こし]に[押|お]されて、[前|まえ]から[上|うえ]へ[進|すす]みます。', it: 'Il ginocchio è spinto dal bacino, in avanti e verso l’alto.' },
      { t: '[力|ちから]は[足|あし]だけでなく、⟦[腰|こし]⟧から[出|で]ます。', it: 'La forza non viene dalla sola gamba ma dal bacino.' },
      { t: '[足先|あしさき]は[下|した]に[伸|の]ばし、[上体|じょうたい]は[少|すこ]し[後|うし]ろに[傾|かたむ]けます。', it: 'La punta del piede è giù e il busto si inclina un poco indietro.' },
      { t: '⟦[軸足|じくあし]⟧のひざは、やわらかくします。', it: 'Il ginocchio d’appoggio resta morbido.' },
      { t: '[空中|くうちゅう]で[行|おこな]い、[高|たか]さは[腰|こし]から⟦[肋骨|ろっこつ]⟧までです。', it: 'Lo esegui nell’aria, a quota vita o costole.' },
      { t: '⟦サンドバッグ⟧や[相手|あいて]は、⟦[指導者|しどうしゃ]⟧がいるときだけです。', it: 'Sacco e partner solo in presenza di un istruttore.' }
    ],
    gloss: [
      { w: 'カオトロン', r: 'かおとろん', it: 'khao trong, ginocchiata diretta' },
      { w: '膝蹴り', r: 'ひざげり', it: 'ginocchiata' },
      { w: '腰', r: 'こし', it: 'bacino, vita' },
      { w: '軸足', r: 'じくあし', it: 'piede d’appoggio' },
      { w: '肋骨', r: 'ろっこつ', it: 'costole' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: 'サンドバッグ', r: 'さんどばっぐ', it: 'sacco' },
      { w: '上体', r: 'じょうたい', it: 'busto' }
    ]
  });

  A('jud-khao-khong', {
    title: { t: 'カオコン、[斜|なな]めの[膝蹴|ひざげ]り', it: 'Khao khong: ginocchiata curva in clinch (a vuoto)' },
    sum: [
      { t: '⟦カオコン⟧は、[斜|なな]めに[上|あ]げる⟦[膝蹴|ひざげ]り⟧です。', it: 'Il khao khong è la ginocchiata curva, che sale in diagonale.' },
      { t: 'カオトロンはまっすぐ、カオコンは⟦[斜|なな]め⟧に[進|すす]みます。', it: 'Il khao trong va dritto, il khao khong in diagonale.' },
      { t: '⟦[腰|こし]⟧を[回|まわ]して、ひざを[斜|なな]めに[上|あ]げます。', it: 'Ruoti il bacino e sollevi il ginocchio in diagonale.' },
      { t: '⟦[回転|かいてん]⟧は[背中|せなか]ではなく、[腰|こし]と[軸足|じくあし]から[始|はじ]まります。', it: 'La rotazione parte da bacino e piede d’appoggio, non dalla schiena.' },
      { t: '⟦[軸足|じくあし]⟧のひざはやわらかく、[足先|あしさき]は[下|した]に[伸|の]ばします。', it: 'Il ginocchio d’appoggio è morbido e la punta del piede è giù.' },
      { t: '[高|たか]さは⟦[肋骨|ろっこつ]⟧までで、[空中|くうちゅう]だけで[行|おこな]います。', it: 'Arrivi fino alle costole e solo nell’aria.' },
      { t: 'サンドバッグや[相手|あいて]は、⟦[指導者|しどうしゃ]⟧がいるときだけです。', it: 'Sacco e partner solo in presenza di un istruttore.' }
    ],
    gloss: [
      { w: 'カオコン', r: 'かおこん', it: 'khao khong, ginocchiata curva' },
      { w: '膝蹴り', r: 'ひざげり', it: 'ginocchiata' },
      { w: '斜め', r: 'ななめ', it: 'diagonale' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '回転', r: 'かいてん', it: 'rotazione' },
      { w: '軸足', r: 'じくあし', it: 'piede d’appoggio' },
      { w: '肋骨', r: 'ろっこつ', it: 'costole' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' }
    ]
  });

  A('jud-khao-noi', {
    title: { t: 'カオノイ、[短|みじか]い[膝蹴|ひざげ]り', it: 'Khao noi: ginocchiata corta in clinch ravvicinato (a vuoto)' },
    sum: [
      { t: '⟦カオノイ⟧は、[短|みじか]くて[速|はや]い⟦[膝蹴|ひざげ]り⟧です。', it: 'Il khao noi è la ginocchiata corta e rapida.' },
      { t: '[想像|そうぞう]の[相手|あいて]が[近|ちか]いので、[動|うご]きは[小|ちい]さくなります。', it: 'L’avversario immaginario è vicino, quindi i movimenti sono piccoli.' },
      { t: '[連続|れんぞく]で[行|おこな]い、[力|ちから]より⟦リズム⟧が[大切|たいせつ]です。', it: 'Si fa in serie e conta più il ritmo della forza.' },
      { t: '[一|ひと]セットは[六回|ろっかい]で、[終|お]わったら[休|やす]みます。', it: 'Una serie è di sei colpi, poi si fa una pausa.' },
      { t: '⟦[息|いき]⟧は、ひざを[上|あ]げるたびに[吐|は]きます。', it: 'Espiri a ogni ginocchiata.' },
      { t: '[高|たか]さは⟦[腰|こし]⟧までで、⟦[上体|じょうたい]⟧はまっすぐです。', it: 'Arrivi fino alla vita e il busto resta dritto.' },
      { t: 'サンドバッグや[相手|あいて]は、⟦[指導者|しどうしゃ]⟧がいるときだけです。', it: 'Sacco e partner solo in presenza di un istruttore.' }
    ],
    gloss: [
      { w: 'カオノイ', r: 'かおのい', it: 'khao noi, ginocchiata corta' },
      { w: '膝蹴り', r: 'ひざげり', it: 'ginocchiata' },
      { w: 'リズム', r: 'りずむ', it: 'ritmo' },
      { w: '息', r: 'いき', it: 'respiro' },
      { w: '腰', r: 'こし', it: 'vita, bacino' },
      { w: '上体', r: 'じょうたい', it: 'busto' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: 'サンドバッグ', r: 'さんどばっぐ', it: 'sacco' }
    ]
  });
  A('jud-wrestle-stance', {
    title: { t: 'レスリングのスタンス', it: 'Stance da lotta (no-gi) e spostamenti' },
    sum: [
      { t: '⟦スタンス⟧は、すべての[練習|れんしゅう]の[出発点|しゅっぱつてん]です。', it: 'La stance è la base di ogni altra lezione.' },
      { t: 'ここでは[一人|ひとり]で、ノーギで[練習|れんしゅう]します。', it: 'Qui lavori da solo e senza judogi.' },
      { t: '⟦[重心|じゅうしん]⟧を[低|ひく]く、[足|あし]の[間|あいだ]の[中|なか]に[保|たも]ちます。', it: 'Il baricentro resta basso e dentro la base d’appoggio.' },
      { t: 'ひざを[曲|ま]げ、⟦[体重|たいじゅう]⟧はかかとでなく[足|あし]の[前|まえ]に[置|お]きます。', it: 'Ginocchia flesse e peso sull’avampiede, non sui talloni.' },
      { t: '[手|て]は[胸|むね]の[前|まえ]で[開|ひら]き、⟦[肘|ひじ]⟧は[体|からだ]の[近|ちか]くに[置|お]きます。', it: 'Le mani sono aperte davanti al petto e i gomiti vicini al tronco.' },
      { t: '⟦シャッフル⟧は、[進|すす]む[方|ほう]の[足|あし]から[動|うご]かし、⟦[交差|こうさ]⟧させません。', it: 'Nello shuffle parte il piede della direzione, senza incroci.' },
      { t: '[痛|いた]みがあれば、スタンスを[少|すこ]し[高|たか]くします。', it: 'Se senti dolore, alzi un poco la stance.' }
    ],
    gloss: [
      { w: 'スタンス', r: 'すたんす', it: 'stance, posizione di partenza' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '肘', r: 'ひじ', it: 'gomito' },
      { w: 'シャッフル', r: 'しゃっふる', it: 'shuffle, passo strisciato' },
      { w: '交差', r: 'こうさ', it: 'incrocio' },
      { w: 'ノーギ', r: 'のーぎ', it: 'no-gi, senza judogi' },
      { w: '出発点', r: 'しゅっぱつてん', it: 'punto di partenza' }
    ]
  });

  A('jud-level-change', {
    title: { t: 'レベルチェンジ', it: 'Cambio di livello (level change)' },
    sum: [
      { t: '⟦レベルチェンジ⟧は、⟦スタンス⟧から⟦[腰|こし]⟧を[下|さ]げる[動|うご]きです。', it: 'Il level change è l’abbassamento del bacino partendo dalla stance.' },
      { t: 'これは、すべての[入|はい]り[方|かた]の[前|まえ]にする[動|うご]きです。', it: 'È il movimento che precede ogni ingresso.' },
      { t: '[腰|こし]を[下|さ]げ、[体|からだ]を[折|お]り[曲|ま]げません。', it: 'Si abbassa il bacino senza piegarsi in vita.' },
      { t: '⟦[背中|せなか]⟧は[自然|しぜん]なまま、⟦[頭|あたま]⟧は[高|たか]く[保|たも]ちます。', it: 'La schiena resta neutra e la testa alta.' },
      { t: '[立|た]つときは、[足|あし]で⟦[床|ゆか]⟧を[押|お]し、ひざから[先|さき]に[伸|の]ばします。', it: 'Per risalire spingi il pavimento con le gambe, prima le ginocchia.' },
      { t: '[下|さ]がるのに[三秒|さんびょう]、[上|あ]がるのに[二秒|にびょう]ぐらいかけます。', it: 'Scendi in circa tre secondi e risali in circa due.' },
      { t: '[痛|いた]みがあれば、[深|ふか]さを[浅|あさ]くします。', it: 'Se senti dolore, riduci la profondità.' }
    ],
    gloss: [
      { w: 'レベルチェンジ', r: 'れべるちぇんじ', it: 'level change, cambio di livello' },
      { w: 'スタンス', r: 'すたんす', it: 'stance, posizione di partenza' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '床', r: 'ゆか', it: 'pavimento' },
      { w: '入り方', r: 'はいりかた', it: 'modo di entrare' },
      { w: '動き', r: 'うごき', it: 'movimento' }
    ]
  });

  A('jud-penetration-step', {
    title: { t: 'ペネトレーションステップ', it: 'Passo di penetrazione (a vuoto)' },
    sum: [
      { t: '⟦ペネトレーションステップ⟧は、⟦レベルチェンジ⟧の[後|あと]の[長|なが]い[一歩|いっぽ]です。', it: 'Il penetration step è il passo lungo dopo il level change.' },
      { t: 'ここでは[空中|くうちゅう]で、ゆっくり[行|おこな]います。', it: 'Qui lo fai nell’aria, lentamente.' },
      { t: '[前|まえ]の[足|あし]が[進|すす]んでも、⟦[腰|こし]⟧は[低|ひく]く、⟦[上体|じょうたい]⟧は[起|お]こしたままです。', it: 'Il piede davanti avanza, ma il bacino resta basso e il busto eretto.' },
      { t: '[後|うし]ろのひざは、⟦マット⟧の[近|ちか]くまで[下|さ]げますが、[強|つよ]く[当|あ]てません。', it: 'Il ginocchio dietro scende vicino al tappeto senza batterci.' },
      { t: '[一番|いちばん][低|ひく]いところで[止|と]まり、[前|まえ]の[足|あし]で[押|お]して[戻|もど]ります。', it: 'Ti fermi nel punto più basso e torni spingendo con il piede davanti.' },
      { t: '[足|あし]と[腰|こし]の[動|うご]きを[合|あ]わせる[練習|れんしゅう]です。', it: 'È un esercizio per coordinare gambe e bacino.' },
      { t: 'これは[入|はい]り[方|かた]なので、⟦[指導者|しどうしゃ]⟧に[見|み]てもらうと、いいです。', it: 'È un’entrata, quindi è bene farla vedere a un istruttore.' }
    ],
    gloss: [
      { w: 'ペネトレーションステップ', r: 'ぺねとれーしょんすてっぷ', it: 'penetration step, passo di penetrazione' },
      { w: 'レベルチェンジ', r: 'れべるちぇんじ', it: 'level change, cambio di livello' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '上体', r: 'じょうたい', it: 'busto' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '一歩', r: 'いっぽ', it: 'un passo' },
      { w: '空中', r: 'くうちゅう', it: 'in aria' }
    ]
  });

  A('jud-hand-fighting', {
    title: { t: 'ハンドファイト', it: 'Hand fighting a vuoto' },
    sum: [
      { t: '⟦ハンドファイト⟧は、[手|て]と[腕|うで]で[相手|あいて]の⟦[手首|てくび]⟧や⟦[肘|ひじ]⟧をコントロールする[動|うご]きです。', it: 'L’hand fighting è il lavoro di mani e braccia per controllare polsi e gomiti.' },
      { t: 'ここでは[一人|ひとり]で、[想像|そうぞう]の[相手|あいて]に[向|む]かって[行|おこな]います。', it: 'Qui lo fai da solo, davanti a un avversario immaginario.' },
      { t: 'ノーギなので、[服|ふく]をつかみません。', it: 'È no-gi, quindi non si afferra il tessuto.' },
      { t: '[手|て]の[動|うご]きは[短|みじか]く、[手|て]のひらで[押|お]し、[指|ゆび]を[閉|と]じ、[手首|てくび]を[回|まわ]します。', it: 'I gesti sono brevi: il palmo spinge, le dita chiudono, il polso ruota.' },
      { t: '[胴体|どうたい]の[線|せん]の[内側|うちがわ]で[動|うご]かし、[肘|ひじ]は[体|からだ]の[近|ちか]くに[置|お]きます。', it: 'Lavori dentro la linea del tronco, con i gomiti vicini al corpo.' },
      { t: '⟦[腰|こし]⟧は[低|ひく]く、⟦[肩|かた]⟧は[力|ちから]を[抜|ぬ]いたままです。', it: 'Il bacino resta basso e le spalle rilassate.' },
      { t: '[右|みぎ]と[左|ひだり]を[交互|こうご]に、⟦リズム⟧よく[行|おこな]います。', it: 'Alterni destra e sinistra con ritmo regolare.' }
    ],
    gloss: [
      { w: 'ハンドファイト', r: 'はんどふぁいと', it: 'hand fighting, lotta delle mani' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '肘', r: 'ひじ', it: 'gomito' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: 'リズム', r: 'りずむ', it: 'ritmo' },
      { w: '胴体', r: 'どうたい', it: 'tronco' },
      { w: 'ノーギ', r: 'のーぎ', it: 'no-gi, senza judogi' }
    ]
  });

  A('jud-pummel-shadow', {
    title: { t: 'パメリングの[練習|れんしゅう]', it: 'Pummeling a vuoto (underhook e overhook)' },
    sum: [
      { t: '⟦パメリング⟧は、⟦アンダーフック⟧と⟦オーバーフック⟧を[入|い]れ[替|か]える[動|うご]きです。', it: 'Il pummeling alterna underhook e overhook.' },
      { t: 'アンダーフックは[脇|わき]の[下|した]、オーバーフックは[肩|かた]の[上|うえ]に[腕|うで]を[通|とお]します。', it: 'L’underhook passa sotto l’ascella, l’overhook sopra la spalla.' },
      { t: 'ここでは[一人|ひとり]で、[動|うご]きだけを[覚|おぼ]えます。', it: 'Qui, da solo, impari solo il movimento.' },
      { t: 'アンダーフックの⟦[肘|ひじ]⟧は、[低|ひく]く[脇腹|わきばら]の[近|ちか]くに[置|お]きます。', it: 'Il gomito dell’underhook sta basso e vicino al fianco.' },
      { t: '[押|お]す[力|ちから]は[腕|うで]ではなく、⟦[足|あし]⟧から[生|う]まれます。', it: 'La spinta nasce dalle gambe, non dalle braccia.' },
      { t: '⟦[腰|こし]⟧は[低|ひく]く、スタンスは[変|か]えません。', it: 'Il bacino resta basso e la stance non cambia.' },
      { t: '[十回|じゅっかい]したら[呼吸|こきゅう]をして、[始|はじ]める[側|がわ]を[変|か]えます。', it: 'Dopo dieci ripetizioni respiri e cambi il lato di partenza.' }
    ],
    gloss: [
      { w: 'パメリング', r: 'ぱめりんぐ', it: 'pummeling' },
      { w: 'アンダーフック', r: 'あんだーふっく', it: 'underhook, braccio sotto l’ascella' },
      { w: 'オーバーフック', r: 'おーばーふっく', it: 'overhook, braccio sopra la spalla' },
      { w: '肘', r: 'ひじ', it: 'gomito' },
      { w: '足', r: 'あし', it: 'piede, gamba' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '呼吸', r: 'こきゅう', it: 'respiro' },
      { w: '脇', r: 'わき', it: 'ascella' }
    ]
  });

  A('jud-snap-down-shadow', {
    title: { t: 'スナップダウンの[練習|れんしゅう]', it: 'Snap-down a vuoto' },
    sum: [
      { t: '⟦スナップダウン⟧は、[想像|そうぞう]の[相手|あいて]の[首|くび]の[後|うし]ろを[下|した]に[引|ひ]く[動|うご]きです。', it: 'Lo snap-down tira verso il basso la nuca di un avversario immaginario.' },
      { t: '[一人|ひとり]で、[力|ちから]を[使|つか]わず、[相手|あいて]もいません。', it: 'Lo fai da solo, senza forza e senza partner.' },
      { t: '[大切|たいせつ]なのは⟦タイミング⟧と、[手|て]、[肩|かた]、[腰|こし]の[並|なら]びです。', it: 'Contano il tempismo e l’allineamento di mani, spalle e bacino.' },
      { t: '[動|うご]きは[短|みじか]く[速|はや]く、[手|て]は[数|すう]センチだけ[下|さ]がります。', it: 'Il gesto è breve e rapido: le mani scendono di pochi centimetri.' },
      { t: '⟦[腰|こし]⟧は[少|すこ]し[下|さ]がり、⟦[上体|じょうたい]⟧は[起|お]こしたままです。', it: 'Il bacino scende leggermente e il busto resta eretto.' },
      { t: '[終|お]わったら、⟦シャッフル⟧で[後|うし]ろへ[下|さ]がります。', it: 'Alla fine esci indietro con lo shuffle.' },
      { t: '⟦[肩|かた]⟧が[痛|いた]いときは、[動|うご]きを[小|ちい]さくします。', it: 'Se senti dolore alle spalle, riduci l’ampiezza.' }
    ],
    gloss: [
      { w: 'スナップダウン', r: 'すなっぷだうん', it: 'snap-down' },
      { w: 'タイミング', r: 'たいみんぐ', it: 'tempismo' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '上体', r: 'じょうたい', it: 'busto' },
      { w: 'シャッフル', r: 'しゃっふる', it: 'shuffle, passo strisciato' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '首', r: 'くび', it: 'collo, nuca' },
      { w: '手', r: 'て', it: 'mano' }
    ]
  });

  A('jud-arm-drag-shadow', {
    title: { t: 'アームドラッグの[練習|れんしゅう]', it: 'Arm drag a vuoto' },
    sum: [
      { t: '⟦アームドラッグ⟧は、[相手|あいて]の[腕|うで]を[自分|じぶん]の[体|からだ]の[前|まえ]に[引|ひ]き[通|とお]す[動|うご]きです。', it: 'L’arm drag porta il braccio dell’avversario attraverso il proprio corpo.' },
      { t: 'ねらいは、⟦[角度|かくど]⟧を[作|つく]ることです。', it: 'Lo scopo è creare un angolo.' },
      { t: '[想像|そうぞう]の[相手|あいて]の⟦[手首|てくび]⟧と[上腕|じょうわん]をつかむまねをします。', it: 'Fingi di afferrare polso e tricipite dell’avversario immaginario.' },
      { t: '[同時|どうじ]に、[横|よこ]へ[小|ちい]さな[一歩|いっぽ]を[出|だ]します。', it: 'Nello stesso tempo fai un piccolo passo laterale.' },
      { t: '[引|ひ]く[力|ちから]は⟦[背中|せなか]⟧ではなく、ステップと[足|あし]から[生|う]まれます。', it: 'La trazione nasce dal passo e dalle gambe, non dalla schiena.' },
      { t: '⟦[腰|こし]⟧は[低|ひく]く、⟦[上体|じょうたい]⟧は[起|お]こしたままです。', it: 'Il bacino resta basso e il busto eretto.' },
      { t: '[右|みぎ]と[左|ひだり]で[八回|はちかい]ずつ、ゆっくり[行|おこな]います。', it: 'Otto ripetizioni per lato, lentamente.' }
    ],
    gloss: [
      { w: 'アームドラッグ', r: 'あーむどらっぐ', it: 'arm drag, trazione del braccio' },
      { w: '角度', r: 'かくど', it: 'angolo' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '上体', r: 'じょうたい', it: 'busto' },
      { w: '上腕', r: 'じょうわん', it: 'parte alta del braccio' },
      { w: 'ステップ', r: 'すてっぷ', it: 'passo' }
    ]
  });

  A('jud-single-leg-entry', {
    title: { t: 'シングルレッグの[入|い]り[方|かた]', it: 'Single-leg: ingresso a vuoto' },
    sum: [
      { t: '⟦シングルレッグ⟧は、[片足|かたあし]をねらう[技|わざ]です。', it: 'Il single-leg è una tecnica di attacco a una gamba.' },
      { t: 'ここでは[入|い]り[方|かた]だけを、[空中|くうちゅう]でゆっくり[行|おこな]います。', it: 'Qui pratichi solo l’ingresso, nell’aria e lentamente.' },
      { t: '⟦レベルチェンジ⟧と⟦ペネトレーションステップ⟧を[合|あ]わせた[動|うご]きです。', it: 'È l’unione di level change e penetration step.' },
      { t: '[後|うし]ろのひざは、⟦マット⟧の[近|ちか]くで[止|と]め、[強|つよ]く[当|あ]てません。', it: 'Il ginocchio dietro si ferma vicino al tappeto, senza batterci.' },
      { t: '[手|て]は[体|からだ]の[前|まえ]に[置|お]き、[何|なに]も[持|も]ち[上|あ]げません。', it: 'Le mani restano davanti al corpo e non si solleva nulla.' },
      { t: '[一番|いちばん][低|ひく]いところで[止|と]まり、⟦シャッフル⟧でスタンスに[戻|もど]ります。', it: 'Ti fermi nel punto più basso e torni in stance con lo shuffle.' },
      { t: '[入|い]り[方|かた]は、⟦[指導者|しどうしゃ]⟧に[確認|かくにん]してもらうと、いいです。', it: 'È bene far verificare l’ingresso a un istruttore.' }
    ],
    gloss: [
      { w: 'シングルレッグ', r: 'しんぐるれっぐ', it: 'single-leg, attacco a una gamba' },
      { w: 'レベルチェンジ', r: 'れべるちぇんじ', it: 'level change, cambio di livello' },
      { w: 'ペネトレーションステップ', r: 'ぺねとれーしょんすてっぷ', it: 'penetration step' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: 'シャッフル', r: 'しゃっふる', it: 'shuffle, passo strisciato' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: 'スタンス', r: 'すたんす', it: 'stance' },
      { w: '片足', r: 'かたあし', it: 'una gamba' }
    ]
  });

  A('jud-double-leg-entry', {
    title: { t: 'ダブルレッグの[入|い]り[方|かた]', it: 'Double-leg: ingresso a vuoto' },
    sum: [
      { t: '⟦ダブルレッグ⟧は、[両足|りょうあし]をねらう[技|わざ]です。', it: 'Il double-leg è un attacco a due gambe.' },
      { t: 'ここでは[入|い]り[方|かた]だけを、[空中|くうちゅう]で[行|おこな]います。', it: 'Qui pratichi solo l’ingresso, nell’aria.' },
      { t: '⟦レベルチェンジ⟧と⟦ペネトレーションステップ⟧を[合|あ]わせた[動|うご]きです。', it: 'È l’unione di level change e penetration step.' },
      { t: '⟦[腕|うで]⟧は[前|まえ]の[空間|くうかん]を[包|つつ]むだけで、[何|なに]も[持|も]ち[上|あ]げません。', it: 'Le braccia avvolgono solo lo spazio davanti e non sollevano nulla.' },
      { t: '⟦[頭|あたま]⟧は[高|たか]く、[体|からだ]の[線|せん]の[横|よこ]に[置|お]きます。', it: 'La testa è alta e a lato della linea del corpo.' },
      { t: '[一番|いちばん][低|ひく]いところで[止|と]まり、⟦シャッフル⟧で[後|うし]ろへ[下|さ]がります。', it: 'Ti fermi nel punto più basso e esci indietro con lo shuffle.' },
      { t: '[後|うし]ろのひざは⟦マット⟧の[近|ちか]くで[止|と]め、⟦[指導者|しどうしゃ]⟧に[確認|かくにん]してもらうと、いいです。', it: 'Il ginocchio dietro si ferma vicino al tappeto e un istruttore può verificare.' }
    ],
    gloss: [
      { w: 'ダブルレッグ', r: 'だぶるれっぐ', it: 'double-leg, attacco a due gambe' },
      { w: 'レベルチェンジ', r: 'れべるちぇんじ', it: 'level change, cambio di livello' },
      { w: 'ペネトレーションステップ', r: 'ぺねとれーしょんすてっぷ', it: 'penetration step' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: 'シャッフル', r: 'しゃっふる', it: 'shuffle, passo strisciato' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' }
    ]
  });
  A('jud-hip-bridge', {
    title: { t: 'ヒップブリッジ', it: 'Ponte di bacino (hip bridge)' },
    sum: [
      { t: '⟦ヒップブリッジ⟧は、[寝|ね]て⟦[腰|こし]⟧を[持|も]ち[上|あ]げる[動|うご]きです。', it: 'L’hip bridge è l’estensione dell’anca da sdraiati.' },
      { t: '⟦[肩|かた]⟧で[支|ささ]え、⟦[頭|あたま]⟧では[支|ささ]えません。', it: 'Ti appoggi sulle spalle, non sulla testa.' },
      { t: '[足|あし]で[押|お]して、[肩|かた]からひざまで[一直線|いっちょくせん]にします。', it: 'Spingi con i piedi e formi una linea tra spalle e ginocchia.' },
      { t: 'お[尻|しり]とお[腹|なか]に[力|ちから]を[入|い]れます。', it: 'Contrai glutei e addome.' },
      { t: '⟦[首|くび]⟧の[力|ちから]を[抜|ぬ]き、[肩|かた]と[頭|あたま]は⟦マット⟧に[着|つ]けたままです。', it: 'Il collo è rilassato e spalle e capo restano sul tappeto.' },
      { t: 'ゆっくり、⟦[背骨|せぼね]⟧を[一|ひと]つずつ[下|お]ろします。', it: 'Scendi lentamente, vertebra per vertebra.' },
      { t: '[首|くび]が[痛|いた]いときは、すぐやめます。', it: 'Se senti dolore al collo, ti fermi subito.' }
    ],
    gloss: [
      { w: 'ヒップブリッジ', r: 'ひっぷぶりっじ', it: 'hip bridge, ponte di bacino' },
      { w: '腰', r: 'こし', it: 'bacino, anca' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: '背骨', r: 'せぼね', it: 'colonna vertebrale' },
      { w: '一直線', r: 'いっちょくせん', it: 'linea retta' }
    ]
  });

  A('jud-sprawl', {
    title: { t: 'スプロール', it: 'Sprawl controllato (a basso impatto)' },
    sum: [
      { t: '⟦スプロール⟧は、[足|あし]を[後|うし]ろに[伸|の]ばして⟦[腰|こし]⟧を[下|さ]げる[動|うご]きです。', it: 'Lo sprawl spinge indietro le gambe mentre il bacino scende.' },
      { t: 'ここでは⟦[衝撃|しょうげき]⟧を[小|ちい]さくして、[一人|ひとり]で[行|おこな]います。', it: 'Qui lo fai a basso impatto, da solo.' },
      { t: 'ねらいは、[体|からだ]の[動|うご]きを[合|あ]わせ、[腰|こし]を⟦コントロール⟧することです。', it: 'Lo scopo è coordinare il corpo e controllare il bacino.' },
      { t: '[手|て]は[体|からだ]の[前|まえ]に[出|だ]し、[足|あし]を[後|うし]ろに[伸|の]ばします。', it: 'Porti le mani davanti e allunghi le gambe indietro.' },
      { t: '[腰|こし]は⟦マット⟧から[十|じゅう]センチぐらいで[止|と]め、[打|う]ちません。', it: 'Il bacino si ferma a circa dieci centimetri dal tappeto, senza battere.' },
      { t: '⟦[首|くび]⟧は[自然|しぜん]なまま、[目|め]は[前|まえ]を[見|み]ます。', it: 'Il collo resta neutro e lo sguardo avanti.' },
      { t: '[戻|もど]るときは、[跳|と]ばずに[一歩|いっぽ]ずつ[歩|ある]きます。', it: 'Per tornare fai un passo alla volta, senza saltare.' }
    ],
    gloss: [
      { w: 'スプロール', r: 'すぷろーる', it: 'sprawl' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '衝撃', r: 'しょうげき', it: 'impatto' },
      { w: 'コントロール', r: 'こんとろーる', it: 'controllo' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: '手', r: 'て', it: 'mano' },
      { w: '一歩', r: 'いっぽ', it: 'un passo' }
    ]
  });

  A('jud-ground-locomotion', {
    title: { t: 'ベアクロールとクラブウォーク', it: 'Locomozione a terra (bear crawl e crab walk)' },
    sum: [
      { t: '⟦ベアクロール⟧は、[熊|くま]のような[歩|ある]き[方|かた]です。', it: 'Il bear crawl è la camminata dell’orso.' },
      { t: '⟦クラブウォーク⟧は、カニのような[歩|ある]き[方|かた]です。', it: 'Il crab walk è la camminata del granchio.' },
      { t: 'どちらも、[四|よっ]つの[点|てん]で[体|からだ]を[支|ささ]えます。', it: 'In entrambi il corpo poggia su quattro appoggi.' },
      { t: 'ベアクロールでは、[手|て]を⟦[肩|かた]⟧の[下|した]に[置|お]き、⟦[背中|せなか]⟧を[平|たい]らにします。', it: 'Nel bear crawl le mani stanno sotto le spalle e la schiena è piatta.' },
      { t: '[反対|はんたい]の[手|て]と[足|あし]を、[一緒|いっしょ]に[動|うご]かします。', it: 'Muovi insieme la mano e il piede opposti.' },
      { t: 'クラブウォークでは、⟦[腰|こし]⟧を[高|たか]くして、[小|ちい]さな[歩幅|ほはば]で[進|すす]みます。', it: 'Nel crab walk il bacino è alto e i passi sono piccoli.' },
      { t: '⟦[呼吸|こきゅう]⟧は[止|と]めず、[手首|てくび]や[肩|かた]が[痛|いた]いときはやめます。', it: 'Il respiro è regolare e, con dolore a polsi o spalle, ti fermi.' }
    ],
    gloss: [
      { w: 'ベアクロール', r: 'べあくろーる', it: 'bear crawl, camminata dell’orso' },
      { w: 'クラブウォーク', r: 'くらぶうぉーく', it: 'crab walk, camminata del granchio' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '呼吸', r: 'こきゅう', it: 'respiro' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '歩幅', r: 'ほはば', it: 'ampiezza del passo' }
    ]
  });

  A('jud-guard-frames', {
    title: { t: 'フレームとエビの[動|うご]き', it: 'Frame e recupero della guardia (solo)' },
    sum: [
      { t: '⟦フレーム⟧は、[胸|むね]の[前|まえ]の[前腕|ぜんわん]で[作|つく]る[枠|わく]です。', it: 'Il frame è una struttura fatta con gli avambracci davanti al petto.' },
      { t: 'フレームとエビは、ガードで⟦[空間|くうかん]⟧を[取|と]り[戻|もど]すために[使|つか]います。', it: 'Frame e shrimp servono a recuperare spazio nella guardia.' },
      { t: '⟦エビ⟧は、[床|ゆか]で⟦[腰|こし]⟧を[横|よこ]に[動|うご]かす[動|うご]きです。', it: 'Lo shrimp sposta lateralmente i fianchi a terra.' },
      { t: '[前腕|ぜんわん]は[二|ふた]つの[棒|ぼう]のように[胸|むね]の[前|まえ]に[置|お]き、⟦[肘|ひじ]⟧は[体|からだ]の[近|ちか]くです。', it: 'Gli avambracci sono due barre davanti al petto, con i gomiti vicini al busto.' },
      { t: '[足|あし]で[押|お]して[腰|こし]を[横|よこ]に[動|うご]かし、ひざを[胸|むね]に[引|ひ]きます。', it: 'Spingi con il piede, sposti i fianchi e porti le ginocchia al petto.' },
      { t: '[片足|かたあし]を[伸|の]ばして、⟦[距離|きょり]⟧を[作|つく]ります。', it: 'Stendi un piede per creare distanza.' },
      { t: '⟦[首|くび]⟧の[力|ちから]を[抜|ぬ]き、[一人|ひとり]でゆっくり[行|おこな]います。', it: 'Rilassi il collo e lavori da solo, lentamente.' }
    ],
    gloss: [
      { w: 'フレーム', r: 'ふれーむ', it: 'frame, struttura di avambracci' },
      { w: 'エビ', r: 'えび', it: 'shrimp, spostamento dei fianchi' },
      { w: '空間', r: 'くうかん', it: 'spazio' },
      { w: '腰', r: 'こし', it: 'fianchi, bacino' },
      { w: '肘', r: 'ひじ', it: 'gomito' },
      { w: '距離', r: 'きょり', it: 'distanza' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: '前腕', r: 'ぜんわん', it: 'avambraccio' }
    ]
  });

  A('jud-turtle-sit-out', {
    title: { t: 'シットアウト', it: 'Sit-out e switch da quattro zampe' },
    sum: [
      { t: '⟦シットアウト⟧は、[四|よ]つんばいの⟦[姿勢|しせい]⟧から[始|はじ]めます。', it: 'Il sit-out parte dalla posizione a quattro zampe.' },
      { t: '[片足|かたあし]を[体|からだ]の[下|した]に[通|とお]し、⟦[腰|こし]⟧を[回|まわ]します。', it: 'Una gamba passa sotto il corpo mentre il bacino ruota.' },
      { t: '[一人|ひとり]で、[体|からだ]を[動|うご]かす[練習|れんしゅう]だけです。', it: 'È solo un lavoro individuale di mobilità e coordinazione.' },
      { t: '[手|て]は⟦[肩|かた]⟧の[下|した]、ひざは[腰|こし]の[下|した]に[置|お]きます。', it: 'Le mani stanno sotto le spalle e le ginocchia sotto i fianchi.' },
      { t: '⟦[首|くび]⟧は[回|まわ]さず、[腰|こし]を[回|まわ]します。', it: 'Non ruoti il collo: ruoti il bacino.' },
      { t: '[首|くび]に⟦[体重|たいじゅう]⟧をかけず、ゆっくりなめらかに[動|うご]きます。', it: 'Non carichi il peso sul collo e ti muovi lentamente e con fluidità.' },
      { t: '[手首|てくび]や[肩|かた]が[痛|いた]いときは、やめます。', it: 'Se senti dolore ai polsi o alle spalle, ti fermi.' }
    ],
    gloss: [
      { w: 'シットアウト', r: 'しっとあうと', it: 'sit-out' },
      { w: '姿勢', r: 'しせい', it: 'posizione, postura' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: '肩', r: 'かた', it: 'spalla' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '片足', r: 'かたあし', it: 'una gamba' }
    ]
  });

  A('jud-knee-slide', {
    title: { t: 'ニースライド', it: 'Knee slide: passaggio della guardia (a vuoto)' },
    sum: [
      { t: '⟦ニースライド⟧は、⟦ガード⟧を[越|こ]える[動|うご]きの[一つ|ひとつ]です。', it: 'Il knee slide è un movimento per passare la guardia.' },
      { t: '[一人|ひとり]で、[想像|そうぞう]の[線|せん]を[使|つか]って[行|おこな]います。', it: 'Lo fai da solo, usando una linea immaginaria.' },
      { t: 'ひざをついた⟦[姿勢|しせい]⟧から[始|はじ]めます。', it: 'Parti dalla posizione in ginocchio.' },
      { t: '[前|まえ]に[出|だ]したひざを、[線|せん]に[沿|そ]って[滑|すべ]らせます。', it: 'Fai scivolare il ginocchio avanzato lungo la linea.' },
      { t: '⟦[上体|じょうたい]⟧は[起|お]こしたまま、[自由|じゆう]な[手|て]は[体|からだ]の[前|まえ]です。', it: 'Il busto resta eretto e la mano libera sta davanti al corpo.' },
      { t: '[後|うし]ろの[足|あし]で[押|お]し、⟦[腰|こし]⟧がついてきます。', it: 'Il piede dietro spinge e il bacino segue.' },
      { t: 'ひざは⟦マット⟧に[静|しず]かに[置|お]き、[打|う]ちません。', it: 'Appoggi le ginocchia sul tappeto con controllo, senza batterle.' }
    ],
    gloss: [
      { w: 'ニースライド', r: 'にーすらいど', it: 'knee slide, scivolamento del ginocchio' },
      { w: 'ガード', r: 'がーど', it: 'guardia' },
      { w: '姿勢', r: 'しせい', it: 'posizione, postura' },
      { w: '上体', r: 'じょうたい', it: 'busto' },
      { w: '腰', r: 'こし', it: 'bacino' },
      { w: 'マット', r: 'まっと', it: 'tappeto' },
      { w: '線', r: 'せん', it: 'linea' },
      { w: '想像', r: 'そうぞう', it: 'immaginazione' }
    ]
  });
  A('jud-th-principi-del-judo', {
    title: { t: '[柔道|じゅうどう]の[考|かんが]え[方|かた]', it: 'I principi del judo' },
    sum: [
      { t: '⟦[柔道|じゅうどう]⟧は、[柔|やわ]らかさの[道|みち]という[意味|いみ]です。', it: 'Judo significa «la via della cedevolezza».' },
      { t: '[柔道|じゅうどう]は、[体|からだ]と[心|こころ]と[道徳|どうとく]を[育|そだ]てる[方法|ほうほう]として[生|う]まれました。', it: 'Il judo è nato come metodo di educazione fisica, mentale e morale.' },
      { t: '[東京|とうきょう]で⟦[講道館|こうどうかん]⟧を[作|つく]ったのは、⟦[嘉納治五郎|かのうじごろう]⟧です。', it: 'A Tokyo il Kodokan fu fondato da Jigoro Kano.' },
      { t: '⟦[柔術|じゅうじゅつ]⟧の[流派|りゅうは]から[学|まな]び、[安全|あんぜん]な[技|わざ]を[選|えら]びました。', it: 'Kano trasse materiale dalle scuole di jujutsu e scelse le tecniche più sicure.' },
      { t: '⟦[精力善用|せいりょくぜんよう]⟧は、エネルギーを[無駄|むだ]なく[使|つか]うことです。', it: 'Seiryoku zenyo significa usare l’energia senza sprechi.' },
      { t: '[力|ちから]だけでなく、てこ、タイミング、[姿勢|しせい]を[使|つか]います。', it: 'Si usano leva, tempismo e postura, non solo la forza.' },
      { t: '⟦[自他共栄|じたきょうえい]⟧は、みんなで[一緒|いっしょ]に[栄|さか]えることです。', it: 'Jita kyoei significa crescere insieme agli altri.' }
    ],
    gloss: [
      { w: '柔道', r: 'じゅうどう', it: 'judo, la via della cedevolezza' },
      { w: '講道館', r: 'こうどうかん', it: 'Kodokan' },
      { w: '嘉納治五郎', r: 'かのうじごろう', it: 'Jigoro Kano' },
      { w: '柔術', r: 'じゅうじゅつ', it: 'jujutsu' },
      { w: '精力善用', r: 'せいりょくぜんよう', it: 'seiryoku zenyo, impiego ottimale dell’energia' },
      { w: '自他共栄', r: 'じたきょうえい', it: 'jita kyoei, prosperità reciproca' },
      { w: '流派', r: 'りゅうは', it: 'scuola' },
      { w: '姿勢', r: 'しせい', it: 'postura' }
    ]
  });

  A('jud-th-etichetta-e-sicurezza', {
    title: { t: 'マナーと[安全|あんぜん]', it: 'Etichetta e sicurezza' },
    sum: [
      { t: '⟦[礼|れい]⟧は、あいさつと[尊敬|そんけい]の[心|こころ]です。', it: 'Il rei è il saluto e il rispetto.' },
      { t: '⟦[畳|たたみ]⟧に[入|はい]るときと[出|で]るときに、[礼|れい]をします。', it: 'Ci si inchina entrando e uscendo dal tatami.' },
      { t: '[一人|ひとり]のときも、[始|はじ]めと[終|お]わりに[礼|れい]をします。', it: 'Anche da solo ti inchini all’inizio e alla fine.' },
      { t: '[体|からだ]のまわりに、[腕|うで]を[伸|の]ばした[長|なが]さの⟦[空間|くうかん]⟧を[空|あ]けます。', it: 'Intorno a te lasci libero uno spazio lungo quanto un braccio disteso.' },
      { t: '⟦[準備運動|じゅんびうんどう]⟧で、⟦[首|くび]⟧は[特|とく]にゆっくり[動|うご]かします。', it: 'Nel riscaldamento muovi il collo in modo particolarmente lento.' },
      { t: '[強|つよ]い[痛|いた]み、しびれ、めまい、[吐|は]き[気|け]があれば、すぐやめます。', it: 'Con dolore forte, formicolio, vertigini o nausea ti fermi subito.' },
      { t: '[一人|ひとり]では、⟦[絞|し]め[技|わざ]⟧や[関節技|かんせつわざ]をしません。', it: 'Da solo non fai strangolamenti né leve articolari.' }
    ],
    gloss: [
      { w: '礼', r: 'れい', it: 'rei, saluto e rispetto' },
      { w: '畳', r: 'たたみ', it: 'tatami' },
      { w: '空間', r: 'くうかん', it: 'spazio' },
      { w: '準備運動', r: 'じゅんびうんどう', it: 'riscaldamento' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: '絞め技', r: 'しめわざ', it: 'strangolamenti' },
      { w: '関節技', r: 'かんせつわざ', it: 'leve alle articolazioni' },
      { w: '安全', r: 'あんぜん', it: 'sicurezza' }
    ]
  });

  A('jud-th-fisica-della-proiezione', {
    title: { t: '[投|な]げの[物理|ぶつり]', it: 'Fisica della proiezione' },
    sum: [
      { t: '⟦[重心|じゅうしん]⟧は、[体|からだ]の[重|おも]さが[集|あつ]まる[点|てん]です。', it: 'Il baricentro è il punto in cui si concentra il peso del corpo.' },
      { t: '[立|た]つと、[重心|じゅうしん]は[腰|こし]のあたりにあります。', it: 'In piedi il baricentro è circa all’altezza del bacino.' },
      { t: '[重心|じゅうしん]が[足|あし]で[囲|かこ]まれた⟦[範囲|はんい]⟧の[中|なか]にあれば、[安定|あんてい]します。', it: 'Il corpo è stabile se il baricentro cade dentro l’area delimitata dai piedi.' },
      { t: '[足|あし]を[広|ひろ]く、[重心|じゅうしん]を[低|ひく]くすると、もっと[安定|あんてい]します。', it: 'Piedi più larghi e baricentro più basso aumentano la stabilità.' },
      { t: '⟦[崩|くず]し⟧は、[重心|じゅうしん]を[範囲|はんい]の[外|そと]に[出|だ]すことです。', it: 'Il kuzushi consiste nel portare il baricentro fuori dalla base.' },
      { t: '⟦てこ⟧は、⟦[支点|してん]⟧を[中心|ちゅうしん]に[回|まわ]ります。', it: 'Una leva ruota attorno a un fulcro.' },
      { t: '⟦[大腰|おおごし]⟧では、[腰|こし]が[支点|してん]になり、⟦[回転|かいてん]⟧で[投|な]げます。', it: 'Nell’o-goshi il bacino è il fulcro e la proiezione avviene per rotazione.' }
    ],
    gloss: [
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '範囲', r: 'はんい', it: 'area, base d’appoggio' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: 'てこ', r: 'てこ', it: 'leva' },
      { w: '支点', r: 'してん', it: 'fulcro' },
      { w: '大腰', r: 'おおごし', it: 'o-goshi' },
      { w: '回転', r: 'かいてん', it: 'rotazione' },
      { w: '安定', r: 'あんてい', it: 'stabilità' }
    ]
  });

  A('jud-th-kuzushi-otto-direzioni', {
    title: { t: '[崩|くず]しと[八方|はっぽう]', it: 'Kuzushi: le otto direzioni' },
    sum: [
      { t: '⟦[崩|くず]し⟧は、バランスを[崩|くず]すことです。', it: 'Il kuzushi consiste nel rompere l’equilibrio.' },
      { t: '[技|わざ]は、[崩|くず]し、⟦[作|つく]り⟧、⟦[掛|か]け⟧の[順|じゅん]に[進|すす]みます。', it: 'Una tecnica procede con kuzushi, tsukuri e kake.' },
      { t: '⟦[八方|はっぽう]⟧は、[前後左右|ぜんごさゆう]と[四|よっ]つの[斜|なな]めの[方向|ほうこう]です。', it: 'Le otto direzioni sono avanti, indietro, destra, sinistra e le quattro diagonali.' },
      { t: '⟦[斜|なな]め⟧は[土台|どだい]が[狭|せま]いので、[体|からだ]がもっと[弱|よわ]くなります。', it: 'Nelle diagonali la base è più stretta e il corpo è più vulnerabile.' },
      { t: '[前|まえ]には[腰|こし]や[肩|かた]の[技|わざ]、[後|うし]ろには[刈|か]る[技|わざ]が[合|あ]います。', it: 'Avanti si adattano le tecniche d’anca e di spalla, indietro quelle di falciata.' },
      { t: '[相手|あいて]が[歩|ある]く、[押|お]す、[引|ひ]くときが、⟦タイミング⟧です。', it: 'Il momento giusto è quando l’altro cammina, spinge o tira.' },
      { t: '[自分|じぶん]が[安定|あんてい]していないと、[崩|くず]しはできません。', it: 'Se tu non sei stabile, il kuzushi non funziona.' }
    ],
    gloss: [
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '作り', r: 'つくり', it: 'tsukuri, entrata' },
      { w: '掛け', r: 'かけ', it: 'kake, esecuzione' },
      { w: '八方', r: 'はっぽう', it: 'le otto direzioni' },
      { w: '斜め', r: 'ななめ', it: 'diagonale' },
      { w: 'タイミング', r: 'たいみんぐ', it: 'tempismo' },
      { w: '方向', r: 'ほうこう', it: 'direzione' },
      { w: '土台', r: 'どだい', it: 'base' }
    ]
  });

  A('jud-th-classificazione-nage-waza', {
    title: { t: '[投|な]げ[技|わざ]の[分類|ぶんるい]', it: 'Classificazione delle tecniche di proiezione' },
    sum: [
      { t: '[技|わざ]は、⟦[投|な]げ[技|わざ]⟧と⟦[固|かた]め[技|わざ]⟧に[大|おお]きく[分|わ]かれます。', it: 'Le tecniche si dividono in proiezioni (nage-waza) e controlli a terra (katame-waza).' },
      { t: '[投|な]げ[技|わざ]は、⟦[立技|たちわざ]⟧と⟦[捨身技|すてみわざ]⟧に[分|わ]かれます。', it: 'Le proiezioni si dividono in tecniche in piedi e tecniche di sacrificio.' },
      { t: '[立技|たちわざ]は、⟦[手技|てわざ]⟧、⟦[腰技|こしわざ]⟧、⟦[足技|あしわざ]⟧に[分|わ]かれます。', it: 'Le tecniche in piedi si dividono in mano, anca e gamba.' },
      { t: '[背負投|せおいなげ]は[手技|てわざ]、[大腰|おおごし]は[腰技|こしわざ]、[大外刈|おおそとがり]は[足技|あしわざ]です。', it: 'Il seoi-nage è una tecnica di mano, l’o-goshi d’anca, l’o-soto-gari di gamba.' },
      { t: 'この[分類|ぶんるい]は、[一番|いちばん]よく[働|はたら]く[体|からだ]の[部分|ぶぶん]で[決|き]まります。', it: 'La classificazione dipende dalla parte del corpo che agisce di più.' },
      { t: '⟦[五教|ごきょう]⟧は、[八|やっ]つずつの[五|いつ]つの[群|ぐん]で、[全部|ぜんぶ]で[四十|よんじゅう]の[技|わざ]です。', it: 'Il Gokyo ha cinque gruppi da otto tecniche, quaranta in tutto.' },
      { t: '[分類|ぶんるい]を[知|し]ると、[似|に]た[技|わざ]が[分|わ]かり、[練習|れんしゅう]を[計画|けいかく]できます。', it: 'Conoscere la classificazione aiuta a riconoscere tecniche simili e a pianificare l’allenamento.' }
    ],
    gloss: [
      { w: '投げ技', r: 'なげわざ', it: 'nage-waza, tecniche di proiezione' },
      { w: '固め技', r: 'かためわざ', it: 'katame-waza, tecniche di controllo' },
      { w: '立技', r: 'たちわざ', it: 'tachi-waza, tecniche in piedi' },
      { w: '捨身技', r: 'すてみわざ', it: 'sutemi-waza, tecniche di sacrificio' },
      { w: '手技', r: 'てわざ', it: 'te-waza, tecniche di mano' },
      { w: '腰技', r: 'こしわざ', it: 'koshi-waza, tecniche d’anca' },
      { w: '足技', r: 'あしわざ', it: 'ashi-waza, tecniche di gamba' },
      { w: '五教', r: 'ごきょう', it: 'Gokyo, cinque gruppi di tecniche' },
      { w: '分類', r: 'ぶんるい', it: 'classificazione' }
    ]
  });

  A('jud-th-prese-gi-e-no-gi', {
    title: { t: '[道着|どうぎ]ありとなしの[組|く]み[方|かた]', it: 'Prese con e senza judogi' },
    sum: [
      { t: '⟦[組|く]み[方|かた]⟧は、[自分|じぶん]と[相手|あいて]をつなぐものです。', it: 'La presa è il collegamento tra te e l’altro.' },
      { t: '[組|く]み[方|かた]を[通|とお]して、[崩|くず]しを[伝|つた]え、[距離|きょり]を[保|たも]ちます。', it: 'Con la presa trasmetti il kuzushi e controlli la distanza.' },
      { t: '⟦[道着|どうぎ]⟧では、[片手|かたて]で⟦[襟|えり]⟧、もう[片手|かたて]で⟦[袖|そで]⟧を[持|も]ちます。', it: 'Con il judogi una mano prende il bavero e l’altra la manica.' },
      { t: 'ノーギでは、⟦カラータイ⟧で[首|くび]の[後|うし]ろを[持|も]ち、[頭|あたま]をコントロールします。', it: 'Nel no-gi il collar tie tiene la nuca e controlla la testa.' },
      { t: '⟦アンダーフック⟧は[脇|わき]の[下|した]、⟦オーバーフック⟧は[相手|あいて]の[腕|うで]の[上|うえ]に[通|とお]します。', it: 'L’underhook passa sotto l’ascella, l’overhook sopra il braccio dell’altro.' },
      { t: '[諸手背負投|もろてせおいなげ]では、[両手|りょうて]で[襟|えり]を[持|も]ちます。', it: 'Nel morote-seoi-nage si prende il bavero con due mani.' },
      { t: '[肘|ひじ]は[体|からだ]の[近|ちか]くに[置|お]き、[姿勢|しせい]を[先|さき]に[作|つく]ります。', it: 'I gomiti stanno vicini al corpo e prima si costruisce la postura.' }
    ],
    gloss: [
      { w: '組み方', r: 'くみかた', it: 'kumi-kata, modo di prendere' },
      { w: '道着', r: 'どうぎ', it: 'judogi' },
      { w: '襟', r: 'えり', it: 'bavero' },
      { w: '袖', r: 'そで', it: 'manica' },
      { w: 'カラータイ', r: 'からーたい', it: 'collar tie, presa alla nuca' },
      { w: 'アンダーフック', r: 'あんだーふっく', it: 'underhook' },
      { w: 'オーバーフック', r: 'おーばーふっく', it: 'overhook' },
      { w: '肘', r: 'ひじ', it: 'gomito' }
    ]
  });

  A('jud-th-ukemi-fisiologia-e-prevenzione', {
    title: { t: '[受身|うけみ]と[体|からだ]の[守|まも]り[方|かた]', it: 'Ukemi: fisiologia e prevenzione' },
    sum: [
      { t: '⟦[受身|うけみ]⟧は、[体|からだ]で[安全|あんぜん]に[受|う]ける[倒|たお]れ[方|かた]です。', it: 'L’ukemi è il modo di ricevere una caduta con il corpo in sicurezza.' },
      { t: '⟦[衝撃|しょうげき]⟧を[広|ひろ]い[面|めん]に[分|わ]け、[時間|じかん]をかけて[逃|に]がします。', it: 'L’impatto si distribuisce su una superficie ampia e si dissipa nel tempo.' },
      { t: 'あごを[胸|むね]につけて、⟦[頭|あたま]⟧を[守|まも]ります。', it: 'Mento sul petto per proteggere la testa.' },
      { t: '[腕|うで]は[手|て]のひらを[下|した]にして、[三十度|さんじゅうど]から[四十五度|よんじゅうごど]で[打|う]ちます。', it: 'Il braccio batte con il palmo in giù da trenta a quarantacinque gradi.' },
      { t: '[手|て]をついて[止|と]めようとすると、⟦[手首|てくび]⟧を[痛|いた]めます。', it: 'Se provi a frenare appoggiando la mano, ti fai male al polso.' },
      { t: '[後|うし]ろへ[倒|たお]れるときは、⟦[背中|せなか]⟧を[丸|まる]くし、[腰|こし]から[順|じゅん]に[着|つ]きます。', it: 'Cadendo all’indietro arrotondi la schiena e tocchi in sequenza partendo dal bacino.' },
      { t: '⟦[息|いき]⟧を[吐|は]きながら[打|う]ち、[痛|いた]みやしびれがあれば[止|と]まります。', it: 'Espiri mentre batti e, con dolore o formicolio, ti fermi.' }
    ],
    gloss: [
      { w: '受身', r: 'うけみ', it: 'ukemi, caduta sicura' },
      { w: '衝撃', r: 'しょうげき', it: 'impatto' },
      { w: '頭', r: 'あたま', it: 'testa' },
      { w: '手首', r: 'てくび', it: 'polso' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '息', r: 'いき', it: 'respiro' },
      { w: '腕', r: 'うで', it: 'braccio' },
      { w: '胸', r: 'むね', it: 'petto' }
    ]
  });

  A('jud-th-allenamento-solo-pianificazione', {
    title: { t: '[一人|ひとり]の[練習|れんしゅう]の[計画|けいかく]', it: 'Allenamento solitario: pianificazione' },
    sum: [
      { t: '[五分|ごふん]の⟦[練習|れんしゅう]⟧を[続|つづ]けるほうが、[時々|ときどき]の[長|なが]い[練習|れんしゅう]より[良|よ]いです。', it: 'Cinque minuti di pratica regolare valgono più di una lunga sessione ogni tanto.' },
      { t: '⟦[間隔|かんかく]⟧をあけて⟦[復習|ふくしゅう]⟧すると、[長|なが]く[覚|おぼ]えられます。', it: 'Ripassando a intervalli, il ricordo dura più a lungo.' },
      { t: '[速|はや]さや[向|む]きの⟦[変化|へんか]⟧があると、[動|うご]きがしっかりします。', it: 'Variando velocità e direzione, il gesto diventa più solido.' },
      { t: '⟦[日記|にっき]⟧に、[間違|まちが]いと[直|なお]す[点|てん]を[一|ひと]つ[書|か]きます。', it: 'Nel diario annoti l’errore e una sola correzione.' },
      { t: '[一度|いちど]に[直|なお]すのは、[一|ひと]つだけにします。', it: 'Si corregge una sola cosa alla volta.' },
      { t: '⟦[睡眠|すいみん]⟧は、[動|うご]きの[記憶|きおく]を[強|つよ]くします。', it: 'Il sonno consolida la memoria del movimento.' },
      { t: '[疲|つか]れや[痛|いた]みがあるときは、[練習|れんしゅう]を[減|へ]らします。', it: 'Con stanchezza o dolore riduci l’allenamento.' }
    ],
    gloss: [
      { w: '練習', r: 'れんしゅう', it: 'allenamento' },
      { w: '間隔', r: 'かんかく', it: 'intervallo' },
      { w: '復習', r: 'ふくしゅう', it: 'ripasso' },
      { w: '変化', r: 'へんか', it: 'variazione' },
      { w: '日記', r: 'にっき', it: 'diario' },
      { w: '睡眠', r: 'すいみん', it: 'sonno' },
      { w: '記憶', r: 'きおく', it: 'memoria' },
      { w: '間違い', r: 'まちがい', it: 'errore' }
    ]
  });

  A('jud-th-clinch-muay-thai-principi', {
    title: { t: 'ムエタイのクリンチの[原則|げんそく]', it: 'Clinch nella muay thai: principi' },
    sum: [
      { t: '⟦クリンチ⟧は、[近|ちか]い[距離|きょり]の[組|く]み[合|あ]いで、[互|たが]いに[相手|あいて]をコントロールします。', it: 'Il clinch è il corpo a corpo ravvicinato in cui ci si controlla a vicenda.' },
      { t: '⟦ムエタイ⟧は、タイの[格闘技|かくとうぎ]で、クリンチが[大切|たいせつ]な[部分|ぶぶん]です。', it: 'La muay thai è l’arte da combattimento thailandese e il clinch ne è una parte importante.' },
      { t: '⟦プラムクリンチ⟧は、[両手|りょうて]を[相手|あいて]の[首|くび]の[後|うし]ろで[組|く]む[形|かたち]です。', it: 'Il plum clinch chiude le due mani dietro la nuca dell’altro.' },
      { t: '[規則|きそく]は[団体|だんたい]や[国|くに]で[違|ちが]うので、[確|たし]かめる[必要|ひつよう]があります。', it: 'Le regole variano secondo federazione e paese, quindi vanno verificate.' },
      { t: '[背中|せなか]を[長|なが]く、ひざを[軽|かる]く[曲|ま]げ、⟦[肘|ひじ]⟧を[近|ちか]づけます。', it: 'Schiena lunga, ginocchia leggermente flesse, gomiti vicini.' },
      { t: '[小|ちい]さな[歩幅|ほはば]で[動|うご]き、⟦[重心|じゅうしん]⟧を[足|あし]の[上|うえ]に[保|たも]ちます。', it: 'Ti muovi con passi piccoli e tieni il baricentro sopra la base.' },
      { t: '[相手|あいて]と[行|おこな]う[練習|れんしゅう]は、[資格|しかく]のある⟦[指導者|しどうしゃ]⟧がいるときだけです。', it: 'Il lavoro con un partner solo con un istruttore qualificato.' }
    ],
    gloss: [
      { w: 'クリンチ', r: 'くりんち', it: 'clinch, corpo a corpo' },
      { w: 'ムエタイ', r: 'むえたい', it: 'muay thai' },
      { w: 'プラムクリンチ', r: 'ぷらむくりんち', it: 'plum clinch' },
      { w: '肘', r: 'ひじ', it: 'gomito' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '規則', r: 'きそく', it: 'regole' },
      { w: '格闘技', r: 'かくとうぎ', it: 'arte da combattimento' }
    ]
  });

  A('jud-th-autovalutazione-video', {
    title: { t: 'ビデオで[自分|じぶん]を[見|み]る', it: 'Autovalutazione con video' },
    sum: [
      { t: '⟦ビデオ⟧は、[自分|じぶん]では[分|わ]からない⟦[姿勢|しせい]⟧や⟦[角度|かくど]⟧を[見|み]せます。', it: 'Il video mostra posture e angoli che da solo non percepisci.' },
      { t: '⟦カメラ⟧は[動|うご]かさず、[腰|こし]の[高|たか]さに[置|お]きます。', it: 'La camera sta ferma, all’altezza del bacino.' },
      { t: '[前|まえ]と[横|よこ]の[二|ふた]つの[角度|かくど]から[撮|と]ります。', it: 'Riprendi da due angoli, frontale e laterale.' },
      { t: '⟦チェックリスト⟧のすべての[項目|こうもく]に[答|こた]えます。', it: 'Rispondi a tutti i punti della checklist.' },
      { t: '[次|つぎ]の[日|ひ]に[見|み]ると、[冷静|れいせい]に[判断|はんだん]できます。', it: 'Guardando il video il giorno dopo giudichi con più calma.' },
      { t: '[形|かたち]がきれいでも、[実際|じっさい]の[効果|こうか]の[証明|しょうめい]にはなりません。', it: 'Anche se la forma è pulita, non prova l’efficacia reale.' },
      { t: 'ビデオは、⟦[指導者|しどうしゃ]⟧の[目|め]の[代|か]わりにはなりません。', it: 'Il video non sostituisce l’occhio di un istruttore.' }
    ],
    gloss: [
      { w: 'ビデオ', r: 'びでお', it: 'video' },
      { w: '姿勢', r: 'しせい', it: 'postura' },
      { w: '角度', r: 'かくど', it: 'angolo' },
      { w: 'カメラ', r: 'かめら', it: 'camera' },
      { w: 'チェックリスト', r: 'ちぇっくりすと', it: 'checklist' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '項目', r: 'こうもく', it: 'punto, voce' },
      { w: '証明', r: 'しょうめい', it: 'prova' }
    ]
  });

  A('jud-th-concatenazioni-renraku', {
    title: { t: '[連絡技|れんらくわざ]', it: 'Concatenazioni: renraku-waza' },
    sum: [
      { t: '⟦[連絡技|れんらくわざ]⟧は、[最初|さいしょ]の[技|わざ]が[次|つぎ]の[技|わざ]を[用意|ようい]する[連続|れんぞく]です。', it: 'Il renraku-waza è una sequenza in cui il primo gesto prepara il secondo.' },
      { t: '[相手|あいて]は⟦[反応|はんのう]⟧するので、その[反応|はんのう]を[使|つか]います。', it: 'L’avversario reagisce e usi la sua reazione.' },
      { t: '[前|まえ]へ[攻|せ]めると、[相手|あいて]は[後|うし]ろへ[反応|はんのう]し、[刈|か]る[技|わざ]がしやすくなります。', it: 'Attaccando in avanti l’altro reagisce all’indietro e la falciata diventa più facile.' },
      { t: '⟦[方向|ほうこう]⟧を[変|か]えるときは、[止|と]まらずに[続|つづ]けます。', it: 'Quando cambi direzione, continui senza fermarti.' },
      { t: '⟦フェイント⟧は、[反応|はんのう]を[引|ひ]き[出|だ]すまねの[動|うご]きです。', it: 'La finta è un gesto simulato per provocare una reazione.' },
      { t: '⟦[返技|かえしわざ]⟧は、[相手|あいて]の[技|わざ]を[使|つか]って[投|な]げる[技|わざ]です。', it: 'Il kaeshi-waza usa l’attacco dell’altro per proiettarlo.' },
      { t: '[返技|かえしわざ]は[上級|じょうきゅう]で、⟦[指導者|しどうしゃ]⟧と[相手|あいて]がいるときだけ[学|まな]びます。', it: 'È avanzato e si studia solo con partner e istruttore.' }
    ],
    gloss: [
      { w: '連絡技', r: 'れんらくわざ', it: 'renraku-waza, concatenazioni' },
      { w: '反応', r: 'はんのう', it: 'reazione' },
      { w: '方向', r: 'ほうこう', it: 'direzione' },
      { w: 'フェイント', r: 'ふぇいんと', it: 'finta' },
      { w: '返技', r: 'かえしわざ', it: 'kaeshi-waza, contro-tecniche' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '連続', r: 'れんぞく', it: 'serie, sequenza' },
      { w: '上級', r: 'じょうきゅう', it: 'avanzato' }
    ]
  });

  A('jud-th-dal-solo-allo-istruttore', {
    title: { t: '[一人|ひとり]から[指導者|しどうしゃ]へ', it: 'Dal solo all’istruttore' },
    sum: [
      { t: '[一人|ひとり]の[練習|れんしゅう]で、⟦バランス⟧と[動|うご]きの⟦[記憶|きおく]⟧が[育|そだ]ちます。', it: 'Con il lavoro da solo crescono l’equilibrio e la memoria motoria.' },
      { t: 'でも、それは[柔道|じゅうどう]の[全部|ぜんぶ]の[力|ちから]ではありません。', it: 'Ma non sono abilità di judo complete.' },
      { t: '[一人|ひとり]では、[抵抗|ていこう]する[相手|あいて]の⟦[崩|くず]し⟧は[確|たし]かめられません。', it: 'Da solo non puoi verificare il kuzushi su chi resiste.' },
      { t: '[投|な]げられる[練習|れんしゅう]や、[降参|こうさん]の[合図|あいず]は、[一人|ひとり]では[学|まな]べません。', it: 'Essere proiettato e i segnali di resa non si imparano da soli.' },
      { t: '⟦[道場|どうじょう]⟧は、[資格|しかく]のある⟦[指導者|しどうしゃ]⟧がいるところを[選|えら]びます。', it: 'Scegli un club con un istruttore qualificato.' },
      { t: '⟦[打込|うちこみ]⟧、⟦[投込|なげこみ]⟧、⟦[乱取|らんど]り⟧の[順|じゅん]に[進|すす]みます。', it: 'Si procede da uchikomi a nage-komi e poi a randori.' },
      { t: 'アプリだけでは[間違|まちが]いを[直|なお]せないので、[指導者|しどうしゃ]と[学|まな]ぶと[安全|あんぜん]です。', it: 'L’app da sola non corregge gli errori: con un istruttore è più sicuro.' }
    ],
    gloss: [
      { w: 'バランス', r: 'ばらんす', it: 'equilibrio' },
      { w: '記憶', r: 'きおく', it: 'memoria' },
      { w: '崩し', r: 'くずし', it: 'kuzushi, squilibrio' },
      { w: '道場', r: 'どうじょう', it: 'club, dojo' },
      { w: '指導者', r: 'しどうしゃ', it: 'istruttore' },
      { w: '打込', r: 'うちこみ', it: 'uchikomi' },
      { w: '投込', r: 'なげこみ', it: 'nage-komi, ripetizione con proiezione' },
      { w: '乱取り', r: 'らんどり', it: 'randori, allenamento libero' }
    ]
  });
})(window.ST = window.ST || {});
