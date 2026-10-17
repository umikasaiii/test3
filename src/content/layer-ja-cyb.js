(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);
  A('cyb-gestione-del-rischio', {
    title: { t: '[危険|きけん]の[管理|かんり]', it: 'Gestione del rischio' },
    sum: [
      { t: '[全部|ぜんぶ]を[同|おな]じように[守|まも]ることは、できません。', it: 'Non si può proteggere tutto allo stesso modo.' },
      { t: '⟦リスク⟧は、⟦[確率|かくりつ]⟧と⟦[影響|えいきょう]⟧の[掛|か]け[算|ざん]です。', it: 'Il rischio è probabilità per impatto.' },
      { t: 'データが[少|すく]ないときは、⟦マトリクス⟧で[評価|ひょうか]します。', it: 'Quando mancano dati si valuta con una matrice qualitativa.' },
      { t: '[対応|たいおう]は⟦[低減|ていげん]⟧、⟦[移転|いてん]⟧、⟦[回避|かいひ]⟧、⟦[受容|じゅよう]⟧の[四|よっ]つです。', it: 'Le risposte sono quattro: ridurre, trasferire, evitare, accettare.' },
      { t: '⟦[対策|たいさく]⟧は、[防|ふせ]ぐもの、[見|み]つけるもの、[直|なお]すものがあります。', it: 'I controlli possono prevenire, rilevare o correggere.' },
      { t: '[対策|たいさく]のあとにも、⟦[残留|ざんりゅう]リスク⟧が[残|のこ]ります。', it: 'Anche dopo i controlli resta un rischio residuo.' },
      { t: 'リスクの[記録|きろく]は、[続|つづ]けて[見直|みなお]します。', it: 'Il registro dei rischi si rivede continuamente.' }
    ],
    gloss: [
      { w: 'リスク', r: 'りすく', it: 'rischio' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '影響', r: 'えいきょう', it: 'impatto, influenza' },
      { w: 'マトリクス', r: 'まとりくす', it: 'matrice' },
      { w: '低減', r: 'ていげん', it: 'riduzione (del rischio)' },
      { w: '移転', r: 'いてん', it: 'trasferimento (del rischio)' },
      { w: '回避', r: 'かいひ', it: 'evitare (il rischio)' },
      { w: '受容', r: 'じゅよう', it: 'accettazione (del rischio)' },
      { w: '対策', r: 'たいさく', it: 'misura, controllo' },
      { w: '残留リスク', r: 'ざんりゅうりすく', it: 'rischio residuo' }
    ]
  });

  A('cyb-autenticazione-e-password', {
    title: { t: '[認証|にんしょう]とパスワード', it: 'Autenticazione, password e MFA' },
    sum: [
      { t: '⟦[認証|にんしょう]⟧は[本人|ほんにん]の[確認|かくにん]で、⟦[認可|にんか]⟧は[許可|きょか]の[判断|はんだん]です。', it: 'L’autenticazione verifica chi sei; l’autorizzazione decide cosa puoi fare.' },
      { t: '⟦[多要素認証|たようそにんしょう]⟧は、[違|ちが]う[種類|しゅるい]の[要素|ようそ]を[組|く]み[合|あ]わせます。', it: 'La MFA combina fattori di categorie diverse.' },
      { t: '[長|なが]いパスワードは、⟦エントロピー⟧が[大|おお]きくなります。', it: 'Una password lunga ha più entropia.' },
      { t: '[辞書|じしょ]の[言葉|ことば]や[個人|こじん]の[情報|じょうほう]は、[簡単|かんたん]に[試|ため]されます。', it: 'Parole di dizionario e dati personali si provano con facilità.' },
      { t: 'サーバーは、⟦ハッシュ⟧と⟦ソルト⟧を[保存|ほぞん]します。', it: 'Il server conserva l’hash con il sale, non la password.' },
      { t: '⟦パスワードマネージャー⟧で、サービスごとに[別|べつ]のパスワードを[使|つか]います。', it: 'Con un gestore di password si usa una password diversa per ogni servizio.' },
      { t: '[漏|も]れた[組|く]み[合|あ]わせの[再利用|さいりよう]は、[試行|しこう]の[制限|せいげん]で[防|ふせ]ぎます。', it: 'Il riuso di credenziali rubate si contrasta limitando i tentativi.' }
    ],
    gloss: [
      { w: '認証', r: 'にんしょう', it: 'autenticazione' },
      { w: '認可', r: 'にんか', it: 'autorizzazione' },
      { w: '多要素認証', r: 'たようそにんしょう', it: 'autenticazione a più fattori (MFA)' },
      { w: '要素', r: 'ようそ', it: 'fattore, elemento' },
      { w: 'エントロピー', r: 'えんとろぴー', it: 'entropia' },
      { w: 'ハッシュ', r: 'はっしゅ', it: 'hash' },
      { w: 'ソルト', r: 'そると', it: 'sale (salt)' },
      { w: 'パスワードマネージャー', r: 'ぱすわーどまねーじゃー', it: 'gestore di password' },
      { w: '試行', r: 'しこう', it: 'tentativo' }
    ]
  });

  A('cyb-ingegneria-sociale-e-phishing', {
    title: { t: 'ソーシャルエンジニアリングとフィッシング', it: 'Ingegneria sociale e phishing' },
    sum: [
      { t: '⟦ソーシャルエンジニアリング⟧は、システムではなく[人|ひと]をだます[攻撃|こうげき]です。', it: 'L’ingegneria sociale inganna le persone, non i sistemi.' },
      { t: '⟦フィッシング⟧は、[信頼|しんらい]できる[相手|あいて]のふりをした[偽|にせ]のメッセージです。', it: 'Il phishing è un messaggio falso che finge di venire da un mittente fidato.' },
      { t: '[特定|とくてい]の[人|ひと]をねらうものは、⟦スピアフィッシング⟧です。', it: 'Quello mirato a una persona precisa è lo spear phishing.' },
      { t: '⟦[口実|こうじつ]⟧を[作|つく]って、もっともらしく[頼|たの]みます。', it: 'Si costruisce un pretesto per rendere credibile la richiesta.' },
      { t: '[急|いそ]がせたり[怖|こわ]がらせたりして、[考|かんが]える[時間|じかん]を[奪|うば]います。', it: 'Si mette fretta o paura, per togliere tempo di riflettere.' },
      { t: '[送信者|そうしんしゃ]とリンクと⟦[添付|てんぷ]ファイル⟧を、クリックせずに[確認|かくにん]します。', it: 'Mittente, link e allegati si controllano senza cliccare.' },
      { t: 'あやしいメッセージは⟦[報告|ほうこく]⟧し、[組織|そしき]は⟦[訓練|くんれん]⟧で[備|そな]えます。', it: 'I messaggi sospetti si segnalano; l’organizzazione si prepara con l’addestramento.' }
    ],
    gloss: [
      { w: 'ソーシャルエンジニアリング', r: 'そーしゃるえんじにありんぐ', it: 'ingegneria sociale' },
      { w: 'フィッシング', r: 'ふぃっしんぐ', it: 'phishing' },
      { w: 'スピアフィッシング', r: 'すぴあふぃっしんぐ', it: 'spear phishing (mirato)' },
      { w: '口実', r: 'こうじつ', it: 'pretesto' },
      { w: '添付ファイル', r: 'てんぷふぁいる', it: 'allegato' },
      { w: '報告', r: 'ほうこく', it: 'segnalazione' },
      { w: '訓練', r: 'くんれん', it: 'addestramento, esercitazione' },
      { w: '送信者', r: 'そうしんしゃ', it: 'mittente' }
    ]
  });

  A('cyb-malware-concetti', {
    title: { t: 'マルウェアの[種類|しゅるい]と[防御|ぼうぎょ]', it: 'Malware: tipi, ciclo di infezione e difese' },
    sum: [
      { t: '⟦マルウェア⟧は、[害|がい]を[与|あた]えたり[情報|じょうほう]を[盗|ぬす]んだりするソフトです。', it: 'Il malware è software che danneggia, spia o ottiene accessi non autorizzati.' },
      { t: '⟦ウイルス⟧、⟦ワーム⟧、⟦トロイの[木馬|もくば]⟧は、[広|ひろ]がり[方|かた]が[違|ちが]います。', it: 'Virus, worm e trojan si distinguono per come si diffondono.' },
      { t: '⟦ランサムウェア⟧は、データを[暗号化|あんごうか]して[金|かね]を[要求|ようきゅう]します。', it: 'Il ransomware cifra i dati e chiede denaro.' },
      { t: '⟦ボットネット⟧は、[感染|かんせん]した[機器|きき]を[遠隔|えんかく]で[操|あやつ]る[仕組|しく]みです。', it: 'Una botnet è una rete di dispositivi infetti controllati a distanza.' },
      { t: '[感染|かんせん]すると、[再起動|さいきどう]のあとも⟦[持続性|じぞくせい]⟧で[居座|いすわ]ります。', it: 'Dopo l’infezione il malware resta attivo anche dopo il riavvio grazie alla persistenza.' },
      { t: '[見慣|みな]れない[動作|どうさ]は、⟦[感染|かんせん]⟧のサインかもしれません。', it: 'Un comportamento insolito può essere un segnale di infezione.' },
      { t: '⟦バックアップ⟧は、[三|みっ]つ[作|つく]って[二|ふた]つの[種類|しゅるい]に[保存|ほぞん]し、[一|ひと]つは[別|べつ]の[場所|ばしょ]に[置|お]きます。', it: 'Backup: tre copie, su due tipi di supporto, una in un altro luogo (regola 3-2-1).' }
    ],
    gloss: [
      { w: 'マルウェア', r: 'まるうぇあ', it: 'malware' },
      { w: 'ウイルス', r: 'ういるす', it: 'virus' },
      { w: 'ワーム', r: 'わーむ', it: 'worm' },
      { w: 'トロイの木馬', r: 'とろいのもくば', it: 'trojan (cavallo di Troia)' },
      { w: 'ランサムウェア', r: 'らんさむうぇあ', it: 'ransomware' },
      { w: 'ボットネット', r: 'ぼっとねっと', it: 'botnet' },
      { w: '持続性', r: 'じぞくせい', it: 'persistenza' },
      { w: '感染', r: 'かんせん', it: 'infezione' },
      { w: 'バックアップ', r: 'ばっくあっぷ', it: 'backup' }
    ]
  });

  A('cyb-etica-legge-e-autorizzazione', {
    title: { t: '[倫理|りんり]と[法律|ほうりつ]と[許可|きょか]', it: 'Etica, legge e autorizzazione' },
    sum: [
      { t: '⟦[許可|きょか]⟧があるかどうかが、[専門家|せんもんか]と[犯罪者|はんざいしゃ]の[違|ちが]いです。', it: 'La differenza tra professionista e criminale è l’autorizzazione.' },
      { t: '[許可|きょか]は[書面|しょめん]で、⟦[範囲|はんい]⟧を[決|き]めて[受|う]けます。', it: 'L’autorizzazione si ottiene per iscritto, con un perimetro definito.' },
      { t: '[許可|きょか]のない⟦アクセス⟧は、[多|おお]くの[国|くに]で[違法|いほう]です。', it: 'L’accesso non autorizzato è illegale in quasi tutti gli ordinamenti.' },
      { t: '[見|み]つけた⟦[脆弱性|ぜいじゃくせい]⟧は、[先|さき]に[持|も]ち[主|ぬし]へ[知|し]らせます。', it: 'Una vulnerabilità trovata va comunicata prima al responsabile del sistema.' },
      { t: '⟦バグバウンティ⟧は、[決|き]まった[規則|きそく]の[中|なか]で[弱点|じゃくてん]を[探|さが]す[制度|せいど]です。', it: 'Il bug bounty è un programma per cercare debolezze entro regole precise.' },
      { t: '⟦[交戦規則|こうせんきそく]⟧が、テストの[内容|ないよう]と[限界|げんかい]を[決|き]めます。', it: 'Le regole d’ingaggio stabiliscono cosa si può fare nel test e i suoi limiti.' },
      { t: '[練習|れんしゅう]は[自分|じぶん]の⟦ラボ⟧か、[用意|ようい]された[環境|かんきょう]だけでします。', it: 'Ci si esercita solo nel proprio laboratorio o in ambienti predisposti.' }
    ],
    gloss: [
      { w: '許可', r: 'きょか', it: 'autorizzazione, permesso' },
      { w: '範囲', r: 'はんい', it: 'perimetro, ambito (scope)' },
      { w: 'アクセス', r: 'あくせす', it: 'accesso' },
      { w: '脆弱性', r: 'ぜいじゃくせい', it: 'vulnerabilità' },
      { w: 'バグバウンティ', r: 'ばぐばうんてぃ', it: 'bug bounty' },
      { w: '交戦規則', r: 'こうせんきそく', it: 'regole d’ingaggio' },
      { w: 'ラボ', r: 'らぼ', it: 'laboratorio' },
      { w: '違法', r: 'いほう', it: 'illegale' }
    ]
  });

  A('cyb-modelli-osi-e-tcpip', {
    title: { t: 'ネットワークの[階層|かいそう]モデル', it: 'Modelli OSI e TCP/IP: livelli, PDU, porte e servizi' },
    sum: [
      { t: 'ネットワークは、⟦レイヤー⟧に[分|わ]けて[考|かんが]えます。', it: 'La rete si ragiona dividendola in livelli.' },
      { t: '⟦オーエスアイモデル⟧は[七|なな]つ、⟦ティーシーピーアイピー⟧は[四|よっ]つの[層|そう]です。', it: 'Il modello OSI ha sette livelli, il TCP/IP quattro.' },
      { t: '⟦ヘッダー⟧を[付|つ]けて[包|つつ]むことを、⟦カプセル[化|か]⟧と[言|い]います。', it: 'Aggiungere intestazioni a ogni livello si chiama incapsulamento.' },
      { t: '⟦アイピーアドレス⟧は[機器|きき]の[場所|ばしょ]、⟦ポート⟧はサービスの[入口|いりぐち]です。', it: 'L’indirizzo IP indica dove sta il dispositivo; la porta è l’ingresso del servizio.' },
      { t: '⟦マックアドレス⟧は、[同|おな]じネットワークの[中|なか]で[使|つか]います。', it: 'L’indirizzo MAC si usa all’interno della stessa rete locale.' },
      { t: '[代表的|だいひょうてき]なポートを[知|し]ると、⟦ログ⟧が[読|よ]みやすくなります。', it: 'Conoscere le porte comuni aiuta a leggere i log.' },
      { t: 'レイヤーごとに、[典型的|てんけいてき]な[攻撃|こうげき]と[防御|ぼうぎょ]があります。', it: 'Ogni livello ha minacce e difese tipiche.' }
    ],
    gloss: [
      { w: 'レイヤー', r: 'れいやー', it: 'livello, strato' },
      { w: 'オーエスアイモデル', r: 'おーえすあいもでる', it: 'modello OSI' },
      { w: 'ティーシーピーアイピー', r: 'てぃーしーぴーあいぴー', it: 'TCP/IP' },
      { w: 'ヘッダー', r: 'へっだー', it: 'intestazione (header)' },
      { w: 'カプセル化', r: 'かぷせるか', it: 'incapsulamento' },
      { w: 'アイピーアドレス', r: 'あいぴーあどれす', it: 'indirizzo IP' },
      { w: 'ポート', r: 'ぽーと', it: 'porta' },
      { w: 'マックアドレス', r: 'まっくあどれす', it: 'indirizzo MAC' },
      { w: 'ログ', r: 'ろぐ', it: 'log, registro' }
    ]
  });

  A('cyb-indirizzamento-e-subnetting', {
    title: { t: 'アイピーアドレスとサブネット', it: 'Indirizzamento IP, subnetting, NAT e IPv6' },
    sum: [
      { t: '⟦アイピーアドレス⟧は、ネットワーク[上|じょう]の[住所|じゅうしょ]です。', it: 'L’indirizzo IP è l’indirizzo di un dispositivo sulla rete.' },
      { t: '⟦シーダー⟧では、スラッシュの[後|あと]の[数|かず]がネットワークのビット[数|すう]です。', it: 'Nel CIDR il numero dopo la barra indica i bit di rete.' },
      { t: '⟦サブネットマスク⟧で、ネットワークとホストの[境目|さかいめ]が[決|き]まります。', it: 'La maschera di sottorete separa la parte di rete da quella dell’host.' },
      { t: 'ブロックの[大|おお]きさで、⟦ネットワークアドレス⟧と⟦ブロードキャスト⟧が[分|わ]かります。', it: 'Con la dimensione del blocco si trovano indirizzo di rete e broadcast.' },
      { t: '⟦プライベートアドレス⟧は、インターネットでは[使|つか]えません。', it: 'Gli indirizzi privati non si instradano su Internet.' },
      { t: '⟦ナット⟧は、[多|おお]くの[機器|きき]が[公開|こうかい]アドレスを[共有|きょうゆう]する[仕組|しく]みです。', it: 'Il NAT permette a molti dispositivi di condividere pochi indirizzi pubblici.' },
      { t: '⟦アイピーブイシックス⟧は[長|なが]いアドレスで、[数|かず]の[不足|ふそく]をなくします。', it: 'IPv6 usa indirizzi lunghi ed elimina la scarsità di indirizzi.' }
    ],
    gloss: [
      { w: 'アイピーアドレス', r: 'あいぴーあどれす', it: 'indirizzo IP' },
      { w: 'シーダー', r: 'しーだー', it: 'CIDR' },
      { w: 'サブネットマスク', r: 'さぶねっとますく', it: 'maschera di sottorete' },
      { w: 'ネットワークアドレス', r: 'ねっとわーくあどれす', it: 'indirizzo di rete' },
      { w: 'ブロードキャスト', r: 'ぶろーどきゃすと', it: 'broadcast' },
      { w: 'プライベートアドレス', r: 'ぷらいべーとあどれす', it: 'indirizzo privato' },
      { w: 'ナット', r: 'なっと', it: 'NAT (traduzione di indirizzi)' },
      { w: 'アイピーブイシックス', r: 'あいぴーぶいしっくす', it: 'IPv6' },
      { w: 'ホスト', r: 'ほすと', it: 'host' }
    ]
  });

  A('cyb-dns-dhcp-arp', {
    title: { t: 'ネットワークの[基本|きほん]サービス', it: 'DNS, DHCP e ARP: servizi di base e loro difese' },
    sum: [
      { t: '⟦ディーエヌエス⟧は、サイトの[名前|なまえ]を⟦アイピーアドレス⟧に[変|か]えます。', it: 'Il DNS traduce il nome di un sito in un indirizzo IP.' },
      { t: '[偽|にせ]の[答|こた]えを[信|しん]じると、[別|べつ]のサイトへ[行|い]ってしまいます。', it: 'Se si accetta una risposta falsa, si finisce su un altro sito.' },
      { t: '⟦ディーエヌエスセック⟧は、[答|こた]えが[本物|ほんもの]かを[確|たし]かめます。', it: 'DNSSEC verifica che la risposta sia autentica.' },
      { t: '⟦ディーエイチシーピー⟧は、[新|あたら]しい[機器|きき]に[設定|せってい]を[自動|じどう]で[配|くば]ります。', it: 'Il DHCP assegna automaticamente la configurazione ai nuovi dispositivi.' },
      { t: '[許可|きょか]のない⟦ディーエイチシーピー⟧サーバーは、[偽|にせ]の[設定|せってい]を[配|くば]ります。', it: 'Un server DHCP non autorizzato distribuisce impostazioni false.' },
      { t: '⟦エーアールピー⟧は、[簡単|かんたん]に[信用|しんよう]してしまう[仕組|しく]みです。', it: 'L’ARP è un meccanismo che si fida troppo facilmente.' },
      { t: '[防御|ぼうぎょ]は、⟦スイッチ⟧の[設定|せってい]で[行|おこな]います。', it: 'Le difese si applicano con la configurazione dello switch.' }
    ],
    gloss: [
      { w: 'ディーエヌエス', r: 'でぃーえぬえす', it: 'DNS' },
      { w: 'アイピーアドレス', r: 'あいぴーあどれす', it: 'indirizzo IP' },
      { w: 'ディーエヌエスセック', r: 'でぃーえぬえすせっく', it: 'DNSSEC' },
      { w: 'ディーエイチシーピー', r: 'でぃーえいちしーぴー', it: 'DHCP' },
      { w: 'エーアールピー', r: 'えーあーるぴー', it: 'ARP' },
      { w: 'スイッチ', r: 'すいっち', it: 'switch' },
      { w: '偽', r: 'にせ', it: 'falso' },
      { w: '設定', r: 'せってい', it: 'impostazione, configurazione' }
    ]
  });

  A('cyb-tls-e-https', {
    title: { t: 'ティーエルエスとエイチティーティーピーエス', it: 'TLS e HTTPS: handshake, certificati e HSTS' },
    sum: [
      { t: '⟦ティーエルエス⟧は、[通信|つうしん]を[守|まも]る[技術|ぎじゅつ]です。', it: 'TLS è la tecnologia che protegge la comunicazione.' },
      { t: '[秘密|ひみつ]を[守|まも]り、[改|かい]ざんを[防|ふせ]ぎ、[相手|あいて]を[確認|かくにん]します。', it: 'Protegge la riservatezza, impedisce le modifiche e verifica l’interlocutore.' },
      { t: '⟦ハンドシェイク⟧で、クライアントとサーバーが[共通|きょうつう]の[鍵|かぎ]を[決|き]めます。', it: 'Nell’handshake client e server stabiliscono una chiave comune.' },
      { t: '⟦[証明書|しょうめいしょ]⟧は、サイトと[公開鍵|こうかいかぎ]を[結|むす]びつけます。', it: 'Il certificato lega il sito a una chiave pubblica.' },
      { t: '⟦[認証局|にんしょうきょく]⟧が[署名|しょめい]して、[信頼|しんらい]の[連鎖|れんさ]ができます。', it: 'La Certification Authority firma e si forma la catena di fiducia.' },
      { t: '⟦エイチエスティーエス⟧は、[常|つね]に[安全|あんぜん]な[接続|せつぞく]を[使|つか]わせます。', it: 'HSTS obbliga il browser a usare sempre una connessione sicura.' },
      { t: 'ブラウザーの⟦[警告|けいこく]⟧は、[読|よ]んでから[判断|はんだん]します。', it: 'L’avviso del browser va letto prima di decidere.' }
    ],
    gloss: [
      { w: 'ティーエルエス', r: 'てぃーえるえす', it: 'TLS' },
      { w: 'ハンドシェイク', r: 'はんどしぇいく', it: 'handshake' },
      { w: '証明書', r: 'しょうめいしょ', it: 'certificato' },
      { w: '認証局', r: 'にんしょうきょく', it: 'autorità di certificazione (CA)' },
      { w: 'エイチエスティーエス', r: 'えいちえすてぃーえす', it: 'HSTS' },
      { w: '警告', r: 'けいこく', it: 'avviso' },
      { w: '公開鍵', r: 'こうかいかぎ', it: 'chiave pubblica' },
      { w: '鍵', r: 'かぎ', it: 'chiave' }
    ]
  });

  A('cyb-firewall-ids-segmentazione', {
    title: { t: 'ファイアウォールと[分離|ぶんり]', it: 'Firewall, IDS/IPS, segmentazione e VPN' },
    sum: [
      { t: '⟦ファイアウォール⟧は、[信頼|しんらい]の[違|ちが]うネットワークの[間|あいだ]を[守|まも]ります。', it: 'Il firewall protegge il confine tra reti con diverso livello di fiducia.' },
      { t: '⟦ステートフル⟧は、[接続|せつぞく]の[状態|じょうたい]を[覚|おぼ]えて[返事|へんじ]を[通|とお]します。', it: 'Il firewall stateful ricorda le connessioni e lascia passare le risposte.' },
      { t: '[規則|きそく]は[上|うえ]から[順|じゅん]に[見|み]て、[最後|さいご]は⟦[暗黙|あんもく]の[拒否|きょひ]⟧です。', it: 'Le regole si valutano dall’alto; alla fine c’è il deny implicito.' },
      { t: '⟦ディーエムゼット⟧は、[公開|こうかい]サービスを[内部|ないぶ]から[分|わ]ける[場所|ばしょ]です。', it: 'La DMZ separa i servizi pubblici dalla rete interna.' },
      { t: '⟦ブイラン⟧は、[一|ひと]つのスイッチを[論理的|ろんりてき]に[分|わ]けます。', it: 'Le VLAN dividono logicamente uno stesso switch.' },
      { t: '⟦アイディーエス⟧は[知|し]らせ、⟦アイピーエス⟧はブロックもします。', it: 'L’IDS segnala; l’IPS può anche bloccare.' },
      { t: '⟦ブイピーエヌ⟧は[安全|あんぜん]な[道|みち]を[作|つく]り、ゼロトラストは[誰|だれ]も[信|しん]じません。', it: 'La VPN crea un percorso sicuro; lo zero trust non si fida di nessuno.' }
    ],
    gloss: [
      { w: 'ファイアウォール', r: 'ふぁいあうぉーる', it: 'firewall' },
      { w: 'ステートフル', r: 'すてーとふる', it: 'stateful (con memoria di stato)' },
      { w: '暗黙の拒否', r: 'あんもくのきょひ', it: 'deny implicito' },
      { w: 'ディーエムゼット', r: 'でぃーえむぜっと', it: 'DMZ' },
      { w: 'ブイラン', r: 'ぶいらん', it: 'VLAN' },
      { w: 'アイディーエス', r: 'あいでぃーえす', it: 'IDS (rilevamento intrusioni)' },
      { w: 'アイピーエス', r: 'あいぴーえす', it: 'IPS (prevenzione intrusioni)' },
      { w: 'ブイピーエヌ', r: 'ぶいぴーえぬ', it: 'VPN' },
      { w: 'ゼロトラスト', r: 'ぜろとらすと', it: 'zero trust' }
    ]
  });

  A('cyb-attacchi-di-rete-e-difese', {
    title: { t: 'ネットワークへの[攻撃|こうげき]と[防御|ぼうぎょ]', it: 'Attacchi di rete e difese: concetti e contromisure' },
    sum: [
      { t: '[攻撃|こうげき]は、⟦シーアイエー⟧の[三|みっ]つの[性質|せいしつ]に[結|むす]びつけて[考|かんが]えます。', it: 'Gli attacchi si capiscono collegandoli alle tre proprietà della triade CIA.' },
      { t: '⟦[中間者攻撃|ちゅうかんしゃこうげき]⟧は、[通信|つうしん]の[間|あいだ]に[入|はい]り[込|こ]みます。', it: 'L’attacco man-in-the-middle si inserisce nel mezzo della comunicazione.' },
      { t: '⟦ディードス⟧は、[大量|たいりょう]の[機器|きき]から[攻撃|こうげき]してサービスを[止|と]めます。', it: 'Il DDoS ferma un servizio attaccandolo da moltissimi dispositivi.' },
      { t: '⟦スプーフィング⟧は[偽装|ぎそう]、⟦スニッフィング⟧は[盗|ぬす]み[聞|ぎ]きです。', it: 'Lo spoofing è la falsificazione; lo sniffing è l’ascolto di nascosto.' },
      { t: '⟦ポートスキャン⟧は[調査|ちょうさ]で、[防御側|ぼうぎょがわ]は[検知|けんち]できます。', it: 'La scansione delle porte è ricognizione, e chi difende può rilevarla.' },
      { t: '⟦ワイファイ⟧は[電波|でんぱ]が[共有|きょうゆう]なので、⟦[暗号化|あんごうか]⟧が[必要|ひつよう]です。', it: 'Il Wi-Fi è un mezzo condiviso, quindi serve la cifratura.' },
      { t: '⟦イービルツイン⟧は、[偽|にせ]のアクセスポイントで[接続|せつぞく]を[誘|さそ]います。', it: 'L’evil twin è un finto access point che attira le connessioni.' }
    ],
    gloss: [
      { w: 'シーアイエー', r: 'しーあいえー', it: 'CIA (riservatezza, integrità, disponibilità)' },
      { w: '中間者攻撃', r: 'ちゅうかんしゃこうげき', it: 'attacco man-in-the-middle' },
      { w: 'ディードス', r: 'でぃーどす', it: 'DDoS' },
      { w: 'スプーフィング', r: 'すぷーふぃんぐ', it: 'spoofing' },
      { w: 'スニッフィング', r: 'すにっふぃんぐ', it: 'sniffing' },
      { w: 'ポートスキャン', r: 'ぽーとすきゃん', it: 'scansione delle porte' },
      { w: 'ワイファイ', r: 'わいふぁい', it: 'Wi-Fi' },
      { w: '暗号化', r: 'あんごうか', it: 'cifratura' },
      { w: 'イービルツイン', r: 'いーびるついん', it: 'evil twin' }
    ]
  });

  A('cyb-linux-sicurezza', {
    title: { t: 'リナックスの[安全|あんぜん]', it: 'Sicurezza di Linux: utenti, permessi, SSH e log' },
    sum: [
      { t: 'ファイルとプロセスは、⟦ユーザー⟧と⟦グループ⟧に[属|ぞく]します。', it: 'File e processi appartengono a un utente e a un gruppo.' },
      { t: '⟦パーミッション⟧は、[所有者|しょゆうしゃ]、グループ、その[他|ほか]の[三|みっ]つに[分|わ]かれます。', it: 'I permessi sono divisi tra proprietario, gruppo e altri.' },
      { t: '⟦チェンジモード⟧は、[数字|すうじ]か[記号|きごう]で[権限|けんげん]を[変|か]えます。', it: 'chmod cambia i permessi in forma ottale o simbolica.' },
      { t: '⟦アンマスク⟧は、[新|あたら]しいファイルの[初期|しょき]の[権限|けんげん]を[決|き]めます。', it: 'umask stabilisce i permessi iniziali dei nuovi file.' },
      { t: '⟦スード⟧は、[必要|ひつよう]な[命令|めいれい]だけを[管理者|かんりしゃ]として[実行|じっこう]します。', it: 'sudo esegue come amministratore solo i comandi necessari.' },
      { t: '⟦エスエスエイチ⟧は、パスワードより[鍵|かぎ]で[入|はい]るほうが[安全|あんぜん]です。', it: 'Con SSH è più sicuro entrare con una chiave che con la password.' },
      { t: '⟦ログ⟧を[見|み]ると、[誰|だれ]がいつ[入|はい]ったか[分|わ]かります。', it: 'Dai log si vede chi è entrato e quando.' }
    ],
    gloss: [
      { w: 'ユーザー', r: 'ゆーざー', it: 'utente' },
      { w: 'グループ', r: 'ぐるーぷ', it: 'gruppo' },
      { w: 'パーミッション', r: 'ぱーみっしょん', it: 'permesso (di accesso)' },
      { w: 'チェンジモード', r: 'ちぇんじもーど', it: 'chmod (cambia i permessi)' },
      { w: 'アンマスク', r: 'あんますく', it: 'umask' },
      { w: 'スード', r: 'すーど', it: 'sudo' },
      { w: 'エスエスエイチ', r: 'えすえすえいち', it: 'SSH' },
      { w: 'ログ', r: 'ろぐ', it: 'log, registro' },
      { w: '権限', r: 'けんげん', it: 'privilegio, permesso' }
    ]
  });

  A('cyb-windows-sicurezza', {
    title: { t: 'ウィンドウズの[安全|あんぜん]', it: 'Sicurezza di Windows: account, ACL, eventi e cifratura' },
    sum: [
      { t: '⟦ユーエーシー⟧は、[重|おも]い[操作|そうさ]の[前|まえ]に[確認|かくにん]を[求|もと]めます。', it: 'L’UAC chiede conferma prima di operazioni importanti.' },
      { t: 'ファイルの[権限|けんげん]は、⟦アクセス[制御|せいぎょ]リスト⟧で[決|き]めます。', it: 'I permessi dei file si definiscono con le liste di controllo accessi (ACL).' },
      { t: '[安全|あんぜん]の[設定|せってい]は、⟦ローカルセキュリティポリシー⟧で[決|き]めます。', it: 'Le impostazioni di sicurezza si definiscono con il criterio di sicurezza locale.' },
      { t: 'ログの⟦イベントアイディー⟧を[見|み]ると、[不正|ふせい]な[動|うご]きが[分|わ]かります。', it: 'Dagli ID evento nel registro si riconoscono i comportamenti anomali.' },
      { t: '⟦ビットロッカー⟧は、ディスクを[暗号化|あんごうか]して[盗難|とうなん]に[備|そな]えます。', it: 'BitLocker cifra il disco per difendersi dal furto.' },
      { t: '⟦グループポリシー⟧は、[設定|せってい]を[多|おお]くのパソコンに[配|くば]ります。', it: 'Le Group Policy distribuiscono le impostazioni a molti computer.' },
      { t: '⟦ラップス⟧は、[管理者|かんりしゃ]パスワードをパソコンごとに[変|か]えます。', it: 'LAPS rende diversa la password di amministratore su ogni computer.' }
    ],
    gloss: [
      { w: 'ユーエーシー', r: 'ゆーえーしー', it: 'UAC (controllo dell’account utente)' },
      { w: 'アクセス制御リスト', r: 'あくせすせいぎょりすと', it: 'lista di controllo accessi (ACL)' },
      { w: 'ローカルセキュリティポリシー', r: 'ろーかるせきゅりてぃぽりしー', it: 'criterio di sicurezza locale' },
      { w: 'イベントアイディー', r: 'いべんとあいでぃー', it: 'ID evento' },
      { w: 'ビットロッカー', r: 'びっとろっかー', it: 'BitLocker' },
      { w: 'グループポリシー', r: 'ぐるーぷぽりしー', it: 'Group Policy' },
      { w: 'ラップス', r: 'らっぷす', it: 'LAPS' },
      { w: '暗号化', r: 'あんごうか', it: 'cifratura' }
    ]
  });

  A('cyb-active-directory-concetti', {
    title: { t: 'アクティブディレクトリの[基本|きほん]', it: 'Active Directory: concetti e difese' },
    sum: [
      { t: '⟦アクティブディレクトリ⟧は、ユーザーや[機器|きき]を[一|ひと]つの[場所|ばしょ]で[管理|かんり]します。', it: 'Active Directory gestisce utenti e dispositivi in un unico posto.' },
      { t: '⟦ドメインコントローラー⟧が、[認証|にんしょう]の[中心|ちゅうしん]になります。', it: 'Il controller di dominio è il centro dell’autenticazione.' },
      { t: '⟦ケルベロス⟧は、パスワードを[送|おく]らずにチケットで[認証|にんしょう]します。', it: 'Kerberos autentica con ticket, senza inviare la password.' },
      { t: '⟦エヌティーエルエム⟧は[古|ふる]い[方式|ほうしき]なので、[段階的|だんかいてき]に[止|や]めます。', it: 'NTLM è un metodo vecchio, quindi lo si dismette gradualmente.' },
      { t: 'ADには⟦[特権|とっけん]⟧が[集|あつ]まるので、[重要|じゅうよう]な[標的|ひょうてき]です。', it: 'In AD si concentrano i privilegi, quindi è un bersaglio primario.' },
      { t: '⟦[階層|かいそう]モデル⟧は、[管理者|かんりしゃ]の[資格情報|しかくじょうほう]を[層|そう]ごとに[分|わ]けます。', it: 'Il modello a livelli separa le credenziali degli amministratori per livello.' },
      { t: '[特権|とっけん]を[減|へ]らして、[動|うご]きを⟦[監視|かんし]⟧します。', it: 'Si riducono i privilegi e si monitora l’attività.' }
    ],
    gloss: [
      { w: 'アクティブディレクトリ', r: 'あくてぃぶでぃれくとり', it: 'Active Directory' },
      { w: 'ドメインコントローラー', r: 'どめいんこんとろーらー', it: 'controller di dominio' },
      { w: 'ケルベロス', r: 'けるべろす', it: 'Kerberos' },
      { w: 'エヌティーエルエム', r: 'えぬてぃーえるえむ', it: 'NTLM' },
      { w: '特権', r: 'とっけん', it: 'privilegio' },
      { w: '階層モデル', r: 'かいそうもでる', it: 'modello a livelli (tiering)' },
      { w: '監視', r: 'かんし', it: 'monitoraggio' },
      { w: '認証', r: 'にんしょう', it: 'autenticazione' }
    ]
  });

  A('cyb-hardening-e-patch-management', {
    title: { t: 'ハードニングとパッチの[管理|かんり]', it: 'Hardening e patch management' },
    sum: [
      { t: '⟦ハードニング⟧は、[不要|ふよう]なものを[減|へ]らして[設定|せってい]を[固|かた]めることです。', it: 'L’hardening riduce ciò che non serve e configura bene il sistema.' },
      { t: '⟦ベースライン⟧は、[安全|あんぜん]な[設定|せってい]の[基準|きじゅん]です。', it: 'La baseline è la configurazione di sicurezza di riferimento.' },
      { t: '[開|あ]いたポートやサービスを[減|へ]らして、⟦[攻撃面|こうげきめん]⟧を[小|ちい]さくします。', it: 'Si riducono porte e servizi aperti per diminuire la superficie d’attacco.' },
      { t: '⟦パッチ⟧は、[危険|きけん]に[応|おう]じて[順番|じゅんばん]と[間隔|かんかく]を[決|き]めます。', it: 'Le patch hanno priorità e cadenza decise in base al rischio.' },
      { t: '[設定|せってい]が[少|すこ]しずつずれることを、⟦ドリフト⟧と[呼|よ]びます。', it: 'Lo scostamento graduale dalla configurazione prevista si chiama drift.' },
      { t: '⟦[脆弱性|ぜいじゃくせい]スキャン⟧と⟦ペネトレーションテスト⟧は[違|ちが]う[作業|さぎょう]です。', it: 'Lo scan di vulnerabilità e il penetration test sono attività diverse.' },
      { t: '[変更|へんこう]は⟦[変更管理|へんこうかんり]⟧で、[記録|きろく]して[確認|かくにん]してから[行|おこな]います。', it: 'Le modifiche si fanno con il change management: prima si registrano e si verificano.' }
    ],
    gloss: [
      { w: 'ハードニング', r: 'はーどにんぐ', it: 'hardening (rafforzamento)' },
      { w: 'ベースライン', r: 'べーすらいん', it: 'baseline' },
      { w: '攻撃面', r: 'こうげきめん', it: 'superficie d’attacco' },
      { w: 'パッチ', r: 'ぱっち', it: 'patch, correzione' },
      { w: 'ドリフト', r: 'どりふと', it: 'drift, scostamento di configurazione' },
      { w: '脆弱性スキャン', r: 'ぜいじゃくせいすきゃん', it: 'scansione delle vulnerabilità' },
      { w: 'ペネトレーションテスト', r: 'ぺねとれーしょんてすと', it: 'penetration test' },
      { w: '変更管理', r: 'へんこうかんり', it: 'gestione delle modifiche' }
    ]
  });

  A('cyb-container-e-virtualizzazione', {
    title: { t: 'コンテナと[仮想化|かそうか]の[安全|あんぜん]', it: 'Container e virtualizzazione: sicurezza' },
    sum: [
      { t: '⟦[仮想|かそう]マシン⟧は、[自分|じぶん]の⟦カーネル⟧を[持|も]つ[環境|かんきょう]です。', it: 'Una macchina virtuale è un ambiente con un proprio kernel.' },
      { t: '⟦コンテナ⟧は、ホストのカーネルを[共有|きょうゆう]します。', it: 'Il container condivide il kernel dell’host.' },
      { t: '⟦イメージ⟧が[古|ふる]いと、[全部|ぜんぶ]のコンテナが[危険|きけん]になります。', it: 'Se l’immagine è obsoleta, ogni container creato da essa è a rischio.' },
      { t: 'コンテナには、[必要|ひつよう]な⟦[権限|けんげん]⟧だけを[与|あた]えます。', it: 'Al container si danno solo i privilegi necessari.' },
      { t: '⟦シークレット⟧は、イメージやコードに[書|か]いてはいけません。', it: 'I segreti non vanno scritti nelle immagini né nel codice.' },
      { t: '⟦ネットワーク[分離|ぶんり]⟧で、[通信|つうしん]は[必要|ひつよう]な[分|ぶん]だけにします。', it: 'Con la segmentazione di rete si lascia solo il traffico necessario.' },
      { t: '[設定|せってい]の[間違|まちが]いは、[自動|じどう]の[検査|けんさ]で[見|み]つけます。', it: 'Gli errori di configurazione si trovano con controlli automatici.' }
    ],
    gloss: [
      { w: '仮想マシン', r: 'かそうましん', it: 'macchina virtuale' },
      { w: 'カーネル', r: 'かーねる', it: 'kernel' },
      { w: 'コンテナ', r: 'こんてな', it: 'container' },
      { w: 'イメージ', r: 'いめーじ', it: 'immagine' },
      { w: '権限', r: 'けんげん', it: 'privilegio' },
      { w: 'シークレット', r: 'しーくれっと', it: 'segreto (password, token, chiave)' },
      { w: 'ネットワーク分離', r: 'ねっとわーくぶんり', it: 'segmentazione di rete' },
      { w: 'ホスト', r: 'ほすと', it: 'host' }
    ]
  });

  A('cyb-backup-e-ripristino', {
    title: { t: 'バックアップと[復旧|ふっきゅう]', it: 'Backup e ripristino: dalla regola 3-2-1 al ransomware' },
    sum: [
      { t: '⟦バックアップ⟧は、データの⟦[可用性|かようせい]⟧と[完全性|かんぜんせい]を[守|まも]ります。', it: 'Il backup protegge la disponibilità e l’integrità dei dati.' },
      { t: '[三|みっ]つのコピー、[二|ふた]つの[媒体|ばいたい]、[一|ひと]つは[別|べつ]の[場所|ばしょ]に[置|お]きます。', it: 'Tre copie, su due supporti, una in un luogo diverso.' },
      { t: '⟦フルバックアップ⟧は[全部|ぜんぶ]、⟦[差分|さぶん]⟧は[変|か]わった[分|ぶん]をコピーします。', it: 'Il backup completo copia tutto; quello differenziale copia ciò che è cambiato.' },
      { t: '⟦アールピーオー⟧は[失|うしな]ってよいデータの[量|りょう]、⟦アールティーオー⟧は[復旧|ふっきゅう]までの[時間|じかん]です。', it: 'RPO è la quantità di dati che si può perdere; RTO il tempo per ripartire.' },
      { t: '⟦ランサムウェア⟧は、バックアップも[壊|こわ]そうとします。', it: 'Il ransomware cerca di distruggere anche i backup.' },
      { t: '[復元|ふくげん]の[試験|しけん]は、[事故|じこ]の[前|まえ]に[定期的|ていきてき]にします。', it: 'I test di ripristino si fanno regolarmente, prima di un incidente.' },
      { t: '⟦ディーアール⟧は[復旧|ふっきゅう]の[計画|けいかく]、⟦ビーシーピー⟧は[事業|じぎょう]を[続|つづ]ける[計画|けいかく]です。', it: 'Il DR è il piano di ripristino; il BCP è il piano per continuare l’attività.' }
    ],
    gloss: [
      { w: 'バックアップ', r: 'ばっくあっぷ', it: 'backup' },
      { w: '可用性', r: 'かようせい', it: 'disponibilità' },
      { w: 'フルバックアップ', r: 'ふるばっくあっぷ', it: 'backup completo' },
      { w: '差分', r: 'さぶん', it: 'differenza, backup differenziale' },
      { w: 'アールピーオー', r: 'あーるぴーおー', it: 'RPO (perdita di dati accettata)' },
      { w: 'アールティーオー', r: 'あーるてぃーおー', it: 'RTO (tempo di ripristino)' },
      { w: 'ランサムウェア', r: 'らんさむうぇあ', it: 'ransomware' },
      { w: 'ディーアール', r: 'でぃーあーる', it: 'DR (disaster recovery)' },
      { w: 'ビーシーピー', r: 'びーしーぴー', it: 'BCP (continuità operativa)' }
    ]
  });

  A('cyb-cifrari-classici-e-principi', {
    title: { t: '[古|ふる]い[暗号|あんごう]と[基本|きほん]の[原則|げんそく]', it: 'Cifrari classici e principi: Kerckhoffs, Vigenère, one-time pad' },
    sum: [
      { t: '⟦[暗号|あんごう]⟧は、[信頼|しんらい]できない[場所|ばしょ]で[情報|じょうほう]を[守|まも]ります。', it: 'La crittografia protegge l’informazione in luoghi di cui non ci fidiamo.' },
      { t: '⟦ケルクホフスの[原則|げんそく]⟧は、[鍵|かぎ]だけが[秘密|ひみつ]であればよいという[考|かんが]えです。', it: 'Il principio di Kerckhoffs: basta che solo la chiave sia segreta.' },
      { t: '⟦シーザー[暗号|あんごう]⟧は、[文字|もじ]を[決|き]まった[数|かず]だけずらします。', it: 'Il cifrario di Cesare sposta le lettere di un numero fisso.' },
      { t: '⟦ヴィジュネル[暗号|あんごう]⟧は、[鍵|かぎ]の[言葉|ことば]を[繰|く]り[返|かえ]して[使|つか]います。', it: 'Il cifrario di Vigenère ripete una parola chiave.' },
      { t: '⟦[頻度分析|ひんどぶんせき]⟧で、[古|ふる]い[暗号|あんごう]は[破|やぶ]られます。', it: 'Con l’analisi delle frequenze i cifrari antichi si rompono.' },
      { t: '⟦エックスオア⟧は、[二|ふた]つのビットが[違|ちが]うかどうかを[調|しら]べます。', it: 'Lo XOR verifica se due bit sono diversi.' },
      { t: '⟦ワンタイムパッド⟧は、[使|つか]い[捨|す]ての[乱数|らんすう]の[鍵|かぎ]が[条件|じょうけん]です。', it: 'Il one-time pad richiede una chiave casuale usata una sola volta.' }
    ],
    gloss: [
      { w: '暗号', r: 'あんごう', it: 'cifrario, crittografia' },
      { w: 'ケルクホフスの原則', r: 'けるくほふすのげんそく', it: 'principio di Kerckhoffs' },
      { w: 'シーザー暗号', r: 'しーざーあんごう', it: 'cifrario di Cesare' },
      { w: 'ヴィジュネル暗号', r: 'う゛ぃじゅねるあんごう', it: 'cifrario di Vigenère' },
      { w: '頻度分析', r: 'ひんどぶんせき', it: 'analisi delle frequenze' },
      { w: 'エックスオア', r: 'えっくすおあ', it: 'XOR' },
      { w: 'ワンタイムパッド', r: 'わんたいむぱっど', it: 'one-time pad' },
      { w: '鍵', r: 'かぎ', it: 'chiave' }
    ]
  });

  A('cyb-cifrari-simmetrici', {
    title: { t: '[共通鍵暗号|きょうつうかぎあんごう]', it: 'Cifrari simmetrici: AES, modi di cifratura e AEAD' },
    sum: [
      { t: '⟦[共通鍵暗号|きょうつうかぎあんごう]⟧は、[同|おな]じ[鍵|かぎ]で[暗号化|あんごうか]と[復号|ふくごう]をします。', it: 'La crittografia simmetrica cifra e decifra con la stessa chiave.' },
      { t: '⟦ブロック[暗号|あんごう]⟧は、[決|き]まった[大|おお]きさのブロックを[変換|へんかん]します。', it: 'Il cifrario a blocchi trasforma blocchi di dimensione fissa.' },
      { t: '⟦エーイーエス⟧は[代表的|だいひょうてき]な[方式|ほうしき]で、[鍵|かぎ]の[長|なが]さを[選|えら]べます。', it: 'AES è il cifrario più diffuso e ha chiavi di diverse lunghezze.' },
      { t: '⟦イーシービー⟧は[同|おな]じブロックが[同|おな]じ[形|かたち]になるので、[情報|じょうほう]が[漏|も]れます。', it: 'ECB cifra blocchi uguali allo stesso modo, quindi perde informazione.' },
      { t: '⟦アイブイ⟧と⟦ナンス⟧は、[毎回|まいかい][変|か]えて[使|つか]います。', it: 'IV e nonce vanno cambiati a ogni uso.' },
      { t: '⟦エーイーエーディー⟧は、[暗号化|あんごうか]と[改|かい]ざんの[検出|けんしゅつ]を[一緒|いっしょ]にします。', it: 'L’AEAD unisce cifratura e rilevamento delle modifiche.' },
      { t: '⟦パディングオラクル⟧は、エラーの[違|ちが]いから[情報|じょうほう]が[漏|も]れる[弱点|じゃくてん]です。', it: 'Il padding oracle è una debolezza: le differenze negli errori rivelano informazioni.' }
    ],
    gloss: [
      { w: '共通鍵暗号', r: 'きょうつうかぎあんごう', it: 'crittografia simmetrica' },
      { w: 'ブロック暗号', r: 'ぶろっくあんごう', it: 'cifrario a blocchi' },
      { w: 'エーイーエス', r: 'えーいーえす', it: 'AES' },
      { w: 'イーシービー', r: 'いーしーびー', it: 'ECB (modo di cifratura)' },
      { w: 'アイブイ', r: 'あいぶい', it: 'IV (vettore di inizializzazione)' },
      { w: 'ナンス', r: 'なんす', it: 'nonce' },
      { w: 'エーイーエーディー', r: 'えーいーえーでぃー', it: 'AEAD (cifratura autenticata)' },
      { w: 'パディングオラクル', r: 'ぱでぃんぐおらくる', it: 'padding oracle' }
    ]
  });

  A('cyb-hash-mac-e-password', {
    title: { t: 'ハッシュとマックとパスワード', it: 'Hash, MAC e password: dalla SHA-2 ad Argon2' },
    sum: [
      { t: '⟦ハッシュ[関数|かんすう]⟧は、データを[決|き]まった[長|なが]さの[値|あたい]にします。', it: 'Una funzione hash trasforma i dati in un valore di lunghezza fissa.' },
      { t: '⟦[衝突|しょうとつ]⟧は、[違|ちが]うデータが[同|おな]じハッシュになることです。', it: 'La collisione avviene quando dati diversi danno lo stesso hash.' },
      { t: '⟦[誕生日|たんじょうび]のパラドックス⟧は、[衝突|しょうとつ]が[思|おも]ったより[早|はや]く[起|お]きる[理由|りゆう]です。', it: 'Il paradosso del compleanno spiega perché le collisioni arrivano prima del previsto.' },
      { t: '[古|ふる]い⟦エムディーファイブ⟧は、[今|いま]は[安全|あんぜん]ではありません。', it: 'Il vecchio MD5 oggi non è più sicuro.' },
      { t: '⟦エイチマック⟧は、[鍵|かぎ]を[使|つか]って[改|かい]ざんを[見|み]つけます。', it: 'L’HMAC usa una chiave per scoprire le modifiche.' },
      { t: 'パスワードには、⟦ソルト⟧を[付|つ]けて[保存|ほぞん]します。', it: 'Le password si conservano con un sale.' },
      { t: 'わざと[遅|おそ]くした⟦ケーディーエフ⟧が、パスワードに[向|む]いています。', it: 'Per le password sono adatte le KDF volutamente lente.' }
    ],
    gloss: [
      { w: 'ハッシュ関数', r: 'はっしゅかんすう', it: 'funzione hash' },
      { w: '衝突', r: 'しょうとつ', it: 'collisione' },
      { w: '誕生日のパラドックス', r: 'たんじょうびのぱらどっくす', it: 'paradosso del compleanno' },
      { w: 'エムディーファイブ', r: 'えむでぃーふぁいぶ', it: 'MD5' },
      { w: 'エイチマック', r: 'えいちまっく', it: 'HMAC' },
      { w: 'ソルト', r: 'そると', it: 'sale (salt)' },
      { w: 'ケーディーエフ', r: 'けーでぃーえふ', it: 'KDF (funzione di derivazione della chiave)' },
      { w: '改ざん', r: 'かいざん', it: 'manomissione' }
    ]
  });

  A('cyb-chiave-pubblica', {
    title: { t: '[公開鍵暗号|こうかいかぎあんごう]', it: 'Crittografia a chiave pubblica: aritmetica modulare, RSA, Diffie–Hellman' },
    sum: [
      { t: '⟦[公開鍵暗号|こうかいかぎあんごう]⟧は、[鍵|かぎ]の[受|う]け[渡|わた]しの[問題|もんだい]を[解決|かいけつ]します。', it: 'La crittografia a chiave pubblica risolve il problema dello scambio delle chiavi.' },
      { t: '⟦[剰余演算|じょうよえんざん]⟧は、[時計|とけい]のように[数|かず]が[戻|もど]ります。', it: 'L’aritmetica modulare riporta i numeri all’inizio, come su un orologio.' },
      { t: '⟦アールエスエー⟧は、[大|おお]きな[数|かず]の⟦[素因数分解|そいんすうぶんかい]⟧が[難|むずか]しいことを[使|つか]います。', it: 'RSA si basa sulla difficoltà di fattorizzare numeri grandi.' },
      { t: '[授業|じゅぎょう]の[例|れい]は[小|ちい]さな[素数|そすう]ですが、[実際|じっさい]には[使|つか]えません。', it: 'Gli esempi usano primi piccoli, ma nella realtà non vanno usati.' },
      { t: '[実際|じっさい]のアールエスエーには、[大|おお]きな[鍵|かぎ]と⟦パディング⟧が[必要|ひつよう]です。', it: 'L’RSA reale richiede chiavi grandi e il padding.' },
      { t: '⟦ディフィーヘルマン⟧は、[公開|こうかい]の[通信|つうしん]だけで[共通|きょうつう]の[秘密|ひみつ]を[作|つく]ります。', it: 'Diffie–Hellman crea un segreto comune usando solo comunicazioni pubbliche.' },
      { t: '⟦[楕円曲線|だえんきょくせん]⟧は、[短|みじか]い[鍵|かぎ]で[同|おな]じ[強|つよ]さを[目指|めざ]します。', it: 'Le curve ellittiche puntano alla stessa sicurezza con chiavi più corte.' }
    ],
    gloss: [
      { w: '公開鍵暗号', r: 'こうかいかぎあんごう', it: 'crittografia a chiave pubblica' },
      { w: '剰余演算', r: 'じょうよえんざん', it: 'aritmetica modulare' },
      { w: 'アールエスエー', r: 'あーるえすえー', it: 'RSA' },
      { w: '素因数分解', r: 'そいんすうぶんかい', it: 'fattorizzazione in primi' },
      { w: 'パディング', r: 'ぱでぃんぐ', it: 'padding' },
      { w: 'ディフィーヘルマン', r: 'でぃふぃーへるまん', it: 'Diffie–Hellman' },
      { w: '楕円曲線', r: 'だえんきょくせん', it: 'curva ellittica' },
      { w: '素数', r: 'そすう', it: 'numero primo' }
    ]
  });

  A('cyb-firme-certificati-pki', {
    title: { t: '[電子署名|でんししょめい]と[証明書|しょうめいしょ]', it: 'Firme digitali, certificati e PKI' },
    sum: [
      { t: '⟦[電子署名|でんししょめい]⟧は、[誰|だれ]が[作|つく]ったかと、[変更|へんこう]がないことを[示|しめ]します。', it: 'La firma digitale mostra chi ha prodotto il dato e che non è stato modificato.' },
      { t: '[署名|しょめい]は[秘密鍵|ひみつかぎ]で[作|つく]り、⟦[公開鍵|こうかいかぎ]⟧で[確認|かくにん]します。', it: 'Si firma con la chiave privata e si verifica con la chiave pubblica.' },
      { t: '⟦[証明書|しょうめいしょ]⟧は、[公開鍵|こうかいかぎ]が[誰|だれ]のものかを[保証|ほしょう]します。', it: 'Il certificato garantisce a chi appartiene una chiave pubblica.' },
      { t: '⟦[認証局|にんしょうきょく]⟧が[署名|しょめい]し、⟦[証明書|しょうめいしょ]チェーン⟧になります。', it: 'La CA firma e si forma la catena di certificati.' },
      { t: '[盗|ぬす]まれた[鍵|かぎ]の[証明書|しょうめいしょ]は、⟦[失効|しっこう]⟧させます。', it: 'Il certificato di una chiave rubata viene revocato.' },
      { t: '⟦[証明書|しょうめいしょ]の[透明性|とうめいせい]⟧で、[不正|ふせい]な[発行|はっこう]を[見|み]つけます。', it: 'La Certificate Transparency permette di scoprire emissioni illecite.' },
      { t: '⟦コード[署名|しょめい]⟧は、ソフトの[出所|でどころ]を[守|まも]ります。', it: 'La firma del codice tutela l’origine del software.' }
    ],
    gloss: [
      { w: '電子署名', r: 'でんししょめい', it: 'firma digitale' },
      { w: '公開鍵', r: 'こうかいかぎ', it: 'chiave pubblica' },
      { w: '証明書', r: 'しょうめいしょ', it: 'certificato' },
      { w: '認証局', r: 'にんしょうきょく', it: 'autorità di certificazione (CA)' },
      { w: '証明書チェーン', r: 'しょうめいしょちぇーん', it: 'catena di certificati' },
      { w: '失効', r: 'しっこう', it: 'revoca' },
      { w: '証明書の透明性', r: 'しょうめいしょのとうめいせい', it: 'Certificate Transparency' },
      { w: 'コード署名', r: 'こーどしょめい', it: 'firma del codice' },
      { w: '秘密鍵', r: 'ひみつかぎ', it: 'chiave privata' }
    ]
  });

  A('cyb-errori-crittografici-comuni', {
    title: { t: '[暗号|あんごう]のよくある[間違|まちが]い', it: 'Errori crittografici comuni e gestione delle chiavi' },
    sum: [
      { t: '[自作|じさく]せず、⟦[標準|ひょうじゅん]⟧の[方式|ほうしき]を[使|つか]います。', it: 'Non si inventa la propria crittografia: si usano metodi standard.' },
      { t: '⟦[鍵|かぎ]⟧をコードに[書|か]くと、[漏|も]れる[危険|きけん]があります。', it: 'Scrivere una chiave nel codice rischia di farla trapelare.' },
      { t: '[鍵|かぎ]には、[暗号用|あんごうよう]の⟦[乱数|らんすう]⟧を[使|つか]います。', it: 'Per le chiavi si usano numeri casuali adatti alla crittografia.' },
      { t: '[同|おな]じ[鍵|かぎ]で⟦ナンス⟧を[再利用|さいりよう]してはいけません。', it: 'Con la stessa chiave non si riusa il nonce.' },
      { t: '⟦[鍵管理|かぎかんり]⟧には、⟦ケーエムエス⟧が[役|やく]に[立|た]ちます。', it: 'Per gestire le chiavi è utile un KMS.' },
      { t: '[量子|りょうし]コンピューターに[備|そな]えた⟦[耐量子暗号|たいりょうしあんごう]⟧が[考|かんが]えられています。', it: 'Si studiano algoritmi post-quantistici, in vista dei computer quantistici.' },
      { t: '⟦ティーエルエス⟧も、[古|ふる]い[設定|せってい]は[危険|きけん]です。', it: 'Anche per TLS una configurazione vecchia è pericolosa.' }
    ],
    gloss: [
      { w: '標準', r: 'ひょうじゅん', it: 'standard' },
      { w: '鍵', r: 'かぎ', it: 'chiave' },
      { w: '乱数', r: 'らんすう', it: 'numero casuale' },
      { w: 'ナンス', r: 'なんす', it: 'nonce' },
      { w: '鍵管理', r: 'かぎかんり', it: 'gestione delle chiavi' },
      { w: 'ケーエムエス', r: 'けーえむえす', it: 'KMS (servizio di gestione chiavi)' },
      { w: '耐量子暗号', r: 'たいりょうしあんごう', it: 'crittografia post-quantistica' },
      { w: 'ティーエルエス', r: 'てぃーえるえす', it: 'TLS' }
    ]
  });

  A('cyb-http-sessioni-e-cookie', {
    title: { t: 'エイチティーティーピーとセッション', it: 'HTTP, sessioni e cookie' },
    sum: [
      { t: '⟦エイチティーティーピー⟧は、[要求|ようきゅう]と[返事|へんじ]でできています。', it: 'HTTP funziona con richieste e risposte.' },
      { t: '⟦ステータスコード⟧は、[結果|けっか]を[表|あらわ]す[番号|ばんごう]です。', it: 'Il codice di stato è un numero che indica l’esito.' },
      { t: '⟦クッキー⟧は、サーバーが[誰|だれ]かを[覚|おぼ]えるために[使|つか]います。', it: 'I cookie servono al server per ricordare chi sei.' },
      { t: 'セッションのクッキーには、[安全|あんぜん]のための⟦フラグ⟧を[付|つ]けます。', it: 'Ai cookie di sessione si aggiungono flag di sicurezza.' },
      { t: '⟦セッション⟧は、[推測|すいそく]されにくい[番号|ばんごう]で[管理|かんり]します。', it: 'Le sessioni si gestiscono con identificatori difficili da indovinare.' },
      { t: '⟦ジェイダブリューティー⟧は[署名|しょめい]つきですが、[中身|なかみ]は[隠|かく]れていません。', it: 'Un JWT è firmato, ma il contenuto non è nascosto.' },
      { t: '⟦[同一|どういつ]オリジンポリシー⟧は、ほかのサイトからの[読|よ]み[取|と]りを[制限|せいげん]します。', it: 'La same-origin policy limita la lettura da parte di altri siti.' }
    ],
    gloss: [
      { w: 'エイチティーティーピー', r: 'えいちてぃーてぃーぴー', it: 'HTTP' },
      { w: 'ステータスコード', r: 'すてーたすこーど', it: 'codice di stato' },
      { w: 'クッキー', r: 'くっきー', it: 'cookie' },
      { w: 'フラグ', r: 'ふらぐ', it: 'flag, attributo' },
      { w: 'セッション', r: 'せっしょん', it: 'sessione' },
      { w: 'ジェイダブリューティー', r: 'じぇいだぶりゅーてぃー', it: 'JWT (token firmato)' },
      { w: '同一オリジンポリシー', r: 'どういつおりじんぽりしー', it: 'same-origin policy' },
      { w: 'コルス', r: 'こるす', it: 'CORS' }
    ]
  });

  A('cyb-owasp-top10-panoramica', {
    title: { t: 'オワスプのトップテン', it: 'OWASP Top 10: panoramica' },
    sum: [
      { t: '⟦オワスプ⟧は、ウェブの[安全|あんぜん]を[研究|けんきゅう]する[非営利|ひえいり]の[団体|だんたい]です。', it: 'OWASP è una fondazione senza scopo di lucro che si occupa di sicurezza web.' },
      { t: '⟦トップテン⟧は、[危険|きけん]な[問題|もんだい]の[分類|ぶんるい]で、[優先順位|ゆうせんじゅんい]を[決|き]めるために[使|つか]います。', it: 'La Top 10 classifica i problemi più rischiosi e serve a dare priorità.' },
      { t: '⟦アクセス[制御|せいぎょ]⟧の[不備|ふび]では、[権限|けんげん]を[超|こ]えた[操作|そうさ]ができます。', it: 'Con un controllo degli accessi difettoso si agisce oltre i propri permessi.' },
      { t: '⟦[設定|せってい]ミス⟧は、[初期|しょき]のままの[危険|きけん]な[設定|せってい]などです。', it: 'Gli errori di configurazione includono impostazioni predefinite pericolose.' },
      { t: '⟦[認証|にんしょう]の[不備|ふび]⟧は、[弱|よわ]いパスワードなどで[起|お]きます。', it: 'I difetti di autenticazione nascono, per esempio, da password deboli.' },
      { t: '⟦ログ⟧がないと、[攻撃|こうげき]に[気|き]づけません。', it: 'Senza log non ci si accorge degli attacchi.' },
      { t: 'カテゴリごとに、[対応|たいおう]する[防御|ぼうぎょ]を[覚|おぼ]えます。', it: 'Per ogni categoria si impara la difesa corrispondente.' }
    ],
    gloss: [
      { w: 'オワスプ', r: 'おわすぷ', it: 'OWASP' },
      { w: 'トップテン', r: 'とっぷてん', it: 'Top 10' },
      { w: 'アクセス制御', r: 'あくせすせいぎょ', it: 'controllo degli accessi' },
      { w: '設定ミス', r: 'せっていみす', it: 'errore di configurazione' },
      { w: '認証の不備', r: 'にんしょうのふび', it: 'difetto di autenticazione' },
      { w: 'ログ', r: 'ろぐ', it: 'log, registro' },
      { w: '優先順位', r: 'ゆうせんじゅんい', it: 'priorità' },
      { w: '防御', r: 'ぼうぎょ', it: 'difesa' }
    ]
  });

  A('cyb-injection-e-prevenzione', {
    title: { t: 'インジェクションと[対策|たいさく]', it: 'Injection e prevenzione' },
    sum: [
      { t: '⟦インジェクション⟧は、データがコードとして[扱|あつか]われる[問題|もんだい]です。', it: 'L’injection nasce quando i dati sono trattati come codice.' },
      { t: '⟦エスキューエル⟧を[文字列|もじれつ]の[連結|れんけつ]で[作|つく]ると[危険|きけん]です。', it: 'Costruire una query SQL concatenando stringhe è pericoloso.' },
      { t: '⟦パラメータークエリ⟧が、[最|もっと]も[大切|たいせつ]な[防御|ぼうぎょ]です。', it: 'Le query parametrizzate sono la difesa principale.' },
      { t: '[同|おな]じ[原則|げんそく]は、⟦コマンド⟧にも[使|つか]えます。', it: 'Lo stesso principio vale anche per i comandi di sistema.' },
      { t: '⟦[入力検証|にゅうりょくけんしょう]⟧は[補助|ほじょ]の[防御|ぼうぎょ]で、それだけでは[足|た]りません。', it: 'La validazione dell’input è una difesa secondaria e da sola non basta.' },
      { t: '⟦[最小権限|さいしょうけんげん]⟧で、[被害|ひがい]を[小|ちい]さくします。', it: 'Con il privilegio minimo si riduce il danno.' },
      { t: '⟦ダブリューエーエフ⟧は[追加|ついか]の[層|そう]で、ほかの[対策|たいさく]の[代|か]わりではありません。', it: 'Il WAF è un livello in più, non sostituisce le altre misure.' }
    ],
    gloss: [
      { w: 'インジェクション', r: 'いんじぇくしょん', it: 'injection' },
      { w: 'エスキューエル', r: 'えすきゅーえる', it: 'SQL' },
      { w: 'パラメータークエリ', r: 'ぱらめーたーくえり', it: 'query parametrizzata' },
      { w: 'コマンド', r: 'こまんど', it: 'comando' },
      { w: '入力検証', r: 'にゅうりょくけんしょう', it: 'validazione dell’input' },
      { w: '最小権限', r: 'さいしょうけんげん', it: 'privilegio minimo' },
      { w: 'ダブリューエーエフ', r: 'だぶりゅーえーえふ', it: 'WAF (firewall per applicazioni web)' },
      { w: '連結', r: 'れんけつ', it: 'concatenazione' }
    ]
  });

  A('cyb-xss-csrf-e-difese', {
    title: { t: 'エックスエスエスとシーエスアールエフ', it: 'XSS, CSRF e difese' },
    sum: [
      { t: '⟦エックスエスエス⟧は、[信用|しんよう]できないデータがページの[中|なか]で[動|うご]く[問題|もんだい]です。', it: 'L’XSS è il problema di dati non fidati che agiscono dentro la pagina.' },
      { t: '[反射型|はんしゃがた]、[保存型|ほぞんがた]、ドムの[三|みっ]つがあります。', it: 'Ci sono le varianti riflessa, memorizzata e DOM-based.' },
      { t: '⟦エスケープ⟧は、[場所|ばしょ]に[合|あ]わせて[出力|しゅつりょく]を[変換|へんかん]します。', it: 'La codifica dell’output si adatta al contesto in cui compare.' },
      { t: '⟦シーエスピー⟧は、[読|よ]み[込|こ]める[場所|ばしょ]を[制限|せいげん]します。', it: 'La CSP limita da dove si può caricare il contenuto.' },
      { t: '⟦シーエスアールエフ⟧は、ブラウザーが[自動|じどう]で[送|おく]るクッキーを[悪用|あくよう]します。', it: 'Il CSRF sfrutta i cookie che il browser invia in automatico.' },
      { t: '⟦セームサイト⟧と⟦トークン⟧で、[不正|ふせい]な[要求|ようきゅう]を[防|ふせ]ぎます。', it: 'SameSite e token contrastano le richieste non volute.' },
      { t: '⟦クリックジャッキング⟧は、[隠|かく]した[枠|わく]の[中|なか]でクリックさせる[手口|てくち]です。', it: 'Il clickjacking fa cliccare dentro un riquadro nascosto.' }
    ],
    gloss: [
      { w: 'エックスエスエス', r: 'えっくすえすえす', it: 'XSS (cross-site scripting)' },
      { w: 'エスケープ', r: 'えすけーぷ', it: 'escape, codifica dell’output' },
      { w: 'シーエスピー', r: 'しーえすぴー', it: 'CSP (Content Security Policy)' },
      { w: 'シーエスアールエフ', r: 'しーえすあーるえふ', it: 'CSRF' },
      { w: 'セームサイト', r: 'せーむさいと', it: 'SameSite' },
      { w: 'トークン', r: 'とーくん', it: 'token' },
      { w: 'クリックジャッキング', r: 'くりっくじゃっきんぐ', it: 'clickjacking' },
      { w: 'クッキー', r: 'くっきー', it: 'cookie' }
    ]
  });

  A('cyb-controllo-accessi-e-api', {
    title: { t: 'アクセス[制御|せいぎょ]とエーピーアイ', it: 'Controllo degli accessi e sicurezza delle API' },
    sum: [
      { t: '⟦[認証|にんしょう]⟧は[本人|ほんにん]の[確認|かくにん]、⟦[認可|にんか]⟧は[許可|きょか]の[判断|はんだん]です。', it: 'L’autenticazione verifica chi sei; l’autorizzazione decide cosa puoi fare.' },
      { t: '⟦アイドーアール⟧は、[番号|ばんごう]を[変|か]えると[他人|たにん]のデータが[見|み]える[問題|もんだい]です。', it: 'L’IDOR permette di vedere i dati altrui cambiando un identificatore.' },
      { t: '⟦アールバック⟧は[役割|やくわり]で、⟦エイバック⟧は[条件|じょうけん]で[権限|けんげん]を[決|き]めます。', it: 'RBAC assegna i permessi per ruolo; ABAC in base ad attributi e condizioni.' },
      { t: '[認可|にんか]の[確認|かくにん]は、[必|かなら]ずサーバー[側|がわ]で[行|おこな]います。', it: 'Il controllo di autorizzazione si fa sempre lato server.' },
      { t: '⟦エーピーアイ⟧は[機能|きのう]とデータを[直接|ちょくせつ][公開|こうかい]します。', it: 'Le API espongono direttamente funzioni e dati.' },
      { t: '⟦オーオース⟧は、[権限|けんげん]を[安全|あんぜん]に[渡|わた]す[仕組|しく]みです。', it: 'OAuth è un meccanismo per delegare i permessi in modo sicuro.' },
      { t: '⟦オーアイディーシー⟧はログインの[確認|かくにん]に[使|つか]いますが、[設定|せってい]の[間違|まちが]いに[注意|ちゅうい]します。', it: 'OIDC serve a verificare il login, ma attenzione agli errori di configurazione.' }
    ],
    gloss: [
      { w: '認証', r: 'にんしょう', it: 'autenticazione' },
      { w: '認可', r: 'にんか', it: 'autorizzazione' },
      { w: 'アイドーアール', r: 'あいどーあーる', it: 'IDOR' },
      { w: 'アールバック', r: 'あーるばっく', it: 'RBAC (controllo basato su ruoli)' },
      { w: 'エイバック', r: 'えいばっく', it: 'ABAC (controllo basato su attributi)' },
      { w: 'エーピーアイ', r: 'えーぴーあい', it: 'API' },
      { w: 'オーオース', r: 'おーおーす', it: 'OAuth' },
      { w: 'オーアイディーシー', r: 'おーあいでぃーしー', it: 'OpenID Connect (OIDC)' }
    ]
  });

  A('cyb-sdlc-sicuro-e-supply-chain', {
    title: { t: '[安全|あんぜん]な[開発|かいはつ]とサプライチェーン', it: 'SDLC sicuro e supply chain' },
    sum: [
      { t: '[開発|かいはつ]の[全|すべ]ての[段階|だんかい]に、[安全|あんぜん]の[作業|さぎょう]を[入|い]れます。', it: 'Le attività di sicurezza entrano in ogni fase dello sviluppo.' },
      { t: '⟦[脅威|きょうい]モデリング⟧は、コードを[書|か]く[前|まえ]に[危険|きけん]を[考|かんが]えます。', it: 'La modellazione delle minacce valuta i pericoli prima di scrivere il codice.' },
      { t: '⟦コードレビュー⟧では、[安全|あんぜん]のチェックリストを[使|つか]います。', it: 'Nella revisione del codice si usa una checklist di sicurezza.' },
      { t: '⟦サスト⟧や⟦ダスト⟧などの[自動|じどう][検査|けんさ]を[組|く]み[合|あ]わせます。', it: 'Si combinano strumenti automatici come SAST e DAST.' },
      { t: '⟦シークレット⟧は、ソースコードに[入|い]れてはいけません。', it: 'I segreti non vanno inseriti nel codice sorgente.' },
      { t: '⟦エスボム⟧は[部品|ぶひん]の[一覧|いちらん]で、[署名|しょめい]は[出所|でどころ]を[守|まも]ります。', it: 'La SBOM elenca i componenti; la firma tutela la provenienza.' },
      { t: '⟦ログ⟧に、[秘密|ひみつ]の[情報|じょうほう]を[書|か]いてはいけません。', it: 'Nei log non si scrivono informazioni riservate.' }
    ],
    gloss: [
      { w: '脅威モデリング', r: 'きょういもでりんぐ', it: 'modellazione delle minacce' },
      { w: 'コードレビュー', r: 'こーどれびゅー', it: 'revisione del codice' },
      { w: 'サスト', r: 'さすと', it: 'SAST (analisi statica)' },
      { w: 'ダスト', r: 'だすと', it: 'DAST (analisi dinamica)' },
      { w: 'シークレット', r: 'しーくれっと', it: 'segreto' },
      { w: 'エスボム', r: 'えすぼむ', it: 'SBOM (elenco dei componenti)' },
      { w: 'ログ', r: 'ろぐ', it: 'log, registro' },
      { w: 'サプライチェーン', r: 'さぷらいちぇーん', it: 'catena di fornitura' }
    ]
  });

  A('cyb-log-e-siem', {
    title: { t: 'ログとシーム', it: 'Log, SIEM e correlazione degli eventi' },
    sum: [
      { t: '⟦ログ⟧は、[誰|だれ]が[何|なに]をしたかの[記録|きろく]です。', it: 'Un log è la registrazione di chi ha fatto cosa.' },
      { t: '[機器|きき]ごとに、[見|み]えることが[違|ちが]います。', it: 'Ogni fonte vede una parte diversa della storia.' },
      { t: '[形式|けいしき]を⟦[正規化|せいきか]⟧し、[時刻|じこく]を⟦ユーティーシー⟧に[合|あ]わせます。', it: 'Si normalizza il formato e si allinea l’ora a UTC.' },
      { t: 'ログは、⟦[保存期間|ほぞんきかん]⟧を[決|き]めて[改|かい]ざんから[守|まも]ります。', it: 'I log si conservano per un periodo stabilito e si proteggono dalle modifiche.' },
      { t: '⟦シーム⟧は、たくさんのログを[集|あつ]めて[分析|ぶんせき]する[仕組|しく]みです。', it: 'Il SIEM raccoglie e analizza molti log.' },
      { t: '⟦[相関|そうかん]ルール⟧は、[複数|ふくすう]の[出来事|できごと]をつなげて[判断|はんだん]します。', it: 'Le regole di correlazione collegano più eventi per giudicarli.' },
      { t: 'ログでは、[誰|だれ]が、どこから、[何回|なんかい]したかを[読|よ]みます。', it: 'Nei log si leggono chi, da dove e quante volte.' }
    ],
    gloss: [
      { w: 'ログ', r: 'ろぐ', it: 'log, registro' },
      { w: '正規化', r: 'せいきか', it: 'normalizzazione' },
      { w: 'ユーティーシー', r: 'ゆーてぃーしー', it: 'UTC (ora universale)' },
      { w: '保存期間', r: 'ほぞんきかん', it: 'periodo di conservazione' },
      { w: 'シーム', r: 'しーむ', it: 'SIEM' },
      { w: '相関ルール', r: 'そうかんるーる', it: 'regola di correlazione' },
      { w: '分析', r: 'ぶんせき', it: 'analisi' },
      { w: '記録', r: 'きろく', it: 'registrazione' }
    ]
  });

  A('cyb-rilevamento-e-threat-hunting', {
    title: { t: '[検知|けんち]とスレットハンティング', it: 'Rilevamento, falsi positivi e threat hunting' },
    sum: [
      { t: '⟦[検知|けんち]⟧には、シグネチャ、[振|ふ]る[舞|ま]い、[異常|いじょう]の[三|みっ]つの[方法|ほうほう]があります。', it: 'Il rilevamento può basarsi su firme, comportamento o anomalie.' },
      { t: '⟦[誤検知|ごけんち]⟧は、[問題|もんだい]がないのに[警報|けいほう]が[出|で]ることです。', it: 'Un falso positivo è un allarme dove non c’è alcun problema.' },
      { t: '⟦[見逃|みのが]し⟧は、[本物|ほんもの]の[攻撃|こうげき]に[気|き]づかないことです。', it: 'Un falso negativo è non accorgersi di un attacco vero.' },
      { t: '⟦[適合率|てきごうりつ]⟧と⟦[再現率|さいげんりつ]⟧で、[検知|けんち]の[質|しつ]を[測|はか]ります。', it: 'Precision e recall misurano la qualità del rilevamento.' },
      { t: '[攻撃|こうげき]が[珍|めずら]しいと、[警報|けいほう]の[多|おお]くは[誤報|ごほう]になります。', it: 'Quando gli attacchi sono rari, la maggior parte degli allarmi è sbagliata.' },
      { t: '⟦スレットハンティング⟧は、[仮説|かせつ]を[立|た]てて[先|さき]に[探|さが]す[活動|かつどう]です。', it: 'Il threat hunting parte da un’ipotesi e cerca in anticipo.' },
      { t: '⟦ハニーポット⟧や⟦カナリアトークン⟧は、[触|ふ]れた[時点|じてん]で[怪|あや]しいと[分|わ]かります。', it: 'Honeypot e canary token rivelano un’attività sospetta non appena vengono toccati.' }
    ],
    gloss: [
      { w: '検知', r: 'けんち', it: 'rilevamento' },
      { w: '誤検知', r: 'ごけんち', it: 'falso positivo' },
      { w: '見逃し', r: 'みのがし', it: 'falso negativo, mancato rilevamento' },
      { w: '適合率', r: 'てきごうりつ', it: 'precision' },
      { w: '再現率', r: 'さいげんりつ', it: 'recall' },
      { w: 'スレットハンティング', r: 'すれっとはんてぃんぐ', it: 'threat hunting' },
      { w: 'ハニーポット', r: 'はにーぽっと', it: 'honeypot' },
      { w: 'カナリアトークン', r: 'かなりあとーくん', it: 'canary token' }
    ]
  });

  A('cyb-incident-response', {
    title: { t: 'インシデント[対応|たいおう]', it: 'Incident response: dal rilevamento alle lezioni apprese' },
    sum: [
      { t: '⟦インシデント⟧は、[実際|じっさい]に[害|がい]がある[出来事|できごと]です。', it: 'Un incidente è un evento che causa un danno reale.' },
      { t: '[準備|じゅんび]では、[役割|やくわり]と⟦プレイブック⟧を[決|き]めます。', it: 'Nella preparazione si definiscono ruoli e playbook.' },
      { t: '[検知|けんち]して、[本当|ほんとう]の[事故|じこ]か[重大|じゅうだい]かを[分析|ぶんせき]します。', it: 'Si rileva e si analizza se è un incidente vero e quanto è grave.' },
      { t: '⟦[封|ふう]じ[込|こ]め⟧、⟦[根絶|こんぜつ]⟧、⟦[復旧|ふっきゅう]⟧は[別|べつ]の[段階|だんかい]です。', it: 'Contenimento, eradicazione e recupero sono fasi distinte.' },
      { t: '[連絡|れんらく]は[決|き]まった[人|ひと]が[行|おこな]い、[法律|ほうりつ]の[義務|ぎむ]も[守|まも]ります。', it: 'Le comunicazioni spettano a persone designate, nel rispetto degli obblighi di legge.' },
      { t: '⟦[証拠|しょうこ]⟧は、[消|け]さずに[保存|ほぞん]します。', it: 'Le prove si conservano, senza distruggerle.' },
      { t: '[終|お]わったあと、⟦[教訓|きょうくん]⟧を[振|ふ]り[返|かえ]って[次|つぎ]に[生|い]かします。', it: 'Alla fine si rivedono le lezioni apprese per usarle la volta dopo.' }
    ],
    gloss: [
      { w: 'インシデント', r: 'いんしでんと', it: 'incidente (di sicurezza)' },
      { w: 'プレイブック', r: 'ぷれいぶっく', it: 'playbook' },
      { w: '封じ込め', r: 'ふうじこめ', it: 'contenimento' },
      { w: '根絶', r: 'こんぜつ', it: 'eradicazione' },
      { w: '復旧', r: 'ふっきゅう', it: 'ripristino, recupero' },
      { w: '証拠', r: 'しょうこ', it: 'prova' },
      { w: '教訓', r: 'きょうくん', it: 'lezione appresa' },
      { w: '準備', r: 'じゅんび', it: 'preparazione' }
    ]
  });

  A('cyb-forense-digitale', {
    title: { t: 'デジタルフォレンジックス', it: 'Forense digitale: prove, integrità e catena di custodia' },
    sum: [
      { t: '⟦フォレンジックス⟧は、デジタルの⟦[証拠|しょうこ]⟧を[正|ただ]しく[扱|あつか]う[作業|さぎょう]です。', it: 'La forense digitale tratta correttamente le prove digitali.' },
      { t: '⟦[揮発性|きはつせい]⟧の[高|たか]いものから[順|じゅん]に[集|あつ]めます。', it: 'Si raccoglie partendo dalle prove più volatili.' },
      { t: 'コピーが[同|おな]じかどうかは、⟦ハッシュ⟧で[確認|かくにん]します。', it: 'Con l’hash si verifica che la copia sia identica.' },
      { t: '⟦ライトブロッカー⟧は、[元|もと]のディスクへの[書|か]き[込|こ]みを[防|ふせ]ぎます。', it: 'Il write blocker impedisce di scrivere sul disco originale.' },
      { t: '⟦[保管|ほかん]の[連鎖|れんさ]⟧は、[誰|だれ]がいつ[証拠|しょうこ]を[持|も]ったかの[記録|きろく]です。', it: 'La catena di custodia registra chi ha avuto la prova e quando.' },
      { t: '⟦タイムライン⟧は、[出来事|できごと]を[時間|じかん]の[順|じゅん]に[並|なら]べたものです。', it: 'La timeline dispone gli eventi in ordine cronologico.' },
      { t: 'クラウドでは、[調|しら]べられる[範囲|はんい]に[限|かぎ]りがあります。', it: 'Nel cloud la possibilità di indagare ha dei limiti.' }
    ],
    gloss: [
      { w: 'フォレンジックス', r: 'ふぉれんじっくす', it: 'forense digitale' },
      { w: '証拠', r: 'しょうこ', it: 'prova' },
      { w: '揮発性', r: 'きはつせい', it: 'volatilità' },
      { w: 'ハッシュ', r: 'はっしゅ', it: 'hash' },
      { w: 'ライトブロッカー', r: 'らいとぶろっかー', it: 'write blocker' },
      { w: '保管の連鎖', r: 'ほかんのれんさ', it: 'catena di custodia' },
      { w: 'タイムライン', r: 'たいむらいん', it: 'timeline, linea temporale' },
      { w: 'クラウド', r: 'くらうど', it: 'cloud' }
    ]
  });

  A('cyb-analisi-statica-malware-concetti', {
    title: { t: 'マルウェアの[静的解析|せいてきかいせき]', it: 'Analisi statica del malware: concetti per difensori' },
    sum: [
      { t: '⟦[静的解析|せいてきかいせき]⟧は、[実行|じっこう]せずにファイルを[調|しら]べます。', it: 'L’analisi statica esamina il file senza eseguirlo.' },
      { t: '[解析|かいせき]は、⟦[隔離|かくり]⟧した[安全|あんぜん]な[環境|かんきょう]で[行|おこな]います。', it: 'L’analisi si fa in un ambiente isolato e sicuro.' },
      { t: 'まず⟦ハッシュ⟧を[計算|けいさん]して、[評判|ひょうばん]を[調|しら]べます。', it: 'Prima si calcola l’hash e si cerca la reputazione del file.' },
      { t: '⟦[文字列|もじれつ]⟧や⟦インポート⟧から、[手|て]がかりが[得|え]られます。', it: 'Dalle stringhe e dagli import si ricavano indizi.' },
      { t: '⟦サンドボックス⟧は、[隔離|かくり]した[環境|かんきょう]で[動|うご]きを[記録|きろく]します。', it: 'La sandbox registra il comportamento in un ambiente isolato.' },
      { t: '⟦[侵害指標|しんがいしひょう]⟧は[痕跡|こんせき]で、[振|ふ]る[舞|ま]いは[手口|てくち]の[特徴|とくちょう]です。', it: 'Gli indicatori di compromissione sono tracce; il comportamento descrive il modo di operare.' },
      { t: '⟦ヤラ⟧は、パターンでファイルの[仲間|なかま]を[見|み]つけるルールです。', it: 'YARA è un insieme di regole per trovare famiglie di file tramite pattern.' }
    ],
    gloss: [
      { w: '静的解析', r: 'せいてきかいせき', it: 'analisi statica' },
      { w: '隔離', r: 'かくり', it: 'isolamento' },
      { w: 'ハッシュ', r: 'はっしゅ', it: 'hash' },
      { w: '文字列', r: 'もじれつ', it: 'stringa' },
      { w: 'インポート', r: 'いんぽーと', it: 'import (funzioni importate)' },
      { w: 'サンドボックス', r: 'さんどぼっくす', it: 'sandbox' },
      { w: '侵害指標', r: 'しんがいしひょう', it: 'indicatore di compromissione (IOC)' },
      { w: 'ヤラ', r: 'やら', it: 'YARA' }
    ]
  });

  A('cyb-threat-intelligence-e-attck', {
    title: { t: '[脅威|きょうい]インテリジェンスとアタック', it: 'Threat intelligence, Kill Chain e MITRE ATT&CK' },
    sum: [
      { t: '⟦[脅威|きょうい]インテリジェンス⟧は、[分析|ぶんせき]された[脅威|きょうい]の[情報|じょうほう]です。', it: 'La threat intelligence è informazione sulle minacce, analizzata e contestualizzata.' },
      { t: '[情報|じょうほう]には[四|よっ]つのレベルがあり、[使|つか]う[人|ひと]が[違|ちが]います。', it: 'Ci sono quattro livelli di informazione, per destinatari diversi.' },
      { t: '⟦キルチェーン⟧は、[攻撃|こうげき]を[七|なな]つの[段階|だんかい]に[分|わ]けて[考|かんが]えます。', it: 'La Kill Chain descrive un attacco come sequenza di sette fasi.' },
      { t: '⟦マイターアタック⟧は、[実際|じっさい]の[戦術|せんじゅつ]と[技術|ぎじゅつ]の[一覧|いちらん]です。', it: 'MITRE ATT&CK è un elenco di tattiche e tecniche osservate nella realtà.' },
      { t: '⟦[検知|けんち]ルール⟧を[技術|ぎじゅつ]に[結|むす]びつけると、[足|た]りない[所|ところ]が[分|わ]かります。', it: 'Collegando le regole di rilevamento alle tecniche emergono le lacune.' },
      { t: '⟦[痛|いた]みのピラミッド⟧は、[指標|しひょう]の[価値|かち]を[順番|じゅんばん]に[並|なら]べます。', it: 'La piramide del dolore ordina gli indicatori in base al loro valore.' },
      { t: '⟦スティックス⟧と⟦タクシー⟧は、[共有|きょうゆう]の[形式|けいしき]です。', it: 'STIX e TAXII sono formati per condividere le informazioni.' }
    ],
    gloss: [
      { w: '脅威インテリジェンス', r: 'きょういいんてりじぇんす', it: 'threat intelligence' },
      { w: 'キルチェーン', r: 'きるちぇーん', it: 'Kill Chain' },
      { w: 'マイターアタック', r: 'まいたーあたっく', it: 'MITRE ATT&CK' },
      { w: '検知ルール', r: 'けんちるーる', it: 'regola di rilevamento' },
      { w: '痛みのピラミッド', r: 'いたみのぴらみっど', it: 'piramide del dolore' },
      { w: 'スティックス', r: 'すてぃっくす', it: 'STIX' },
      { w: 'タクシー', r: 'たくしー', it: 'TAXII' },
      { w: '戦術', r: 'せんじゅつ', it: 'tattica' }
    ]
  });

  A('cyb-threat-modeling', {
    title: { t: '[脅威|きょうい]モデリング', it: 'Threat modeling: STRIDE, alberi di attacco e requisiti' },
    sum: [
      { t: '⟦[脅威|きょうい]モデリング⟧は、システムの[危険|きけん]を[整理|せいり]して[考|かんが]えます。', it: 'Il threat modeling analizza in modo ordinato i pericoli di un sistema.' },
      { t: '⟦データフロー[図|ず]⟧に、⟦[信頼境界|しんらいきょうかい]⟧を[描|か]きます。', it: 'Nel diagramma dei flussi di dati si disegnano i confini di fiducia.' },
      { t: '⟦ストライド⟧は、[六|むっ]つの[種類|しゅるい]の[脅威|きょうい]を[確認|かくにん]します。', it: 'STRIDE passa in rassegna sei categorie di minacce.' },
      { t: '[小|ちい]さなポータルを[例|れい]に、[要素|ようそ]ごとにストライドを[当|あ]てます。', it: 'Su un piccolo portale d’esempio si applica STRIDE a ogni elemento.' },
      { t: '⟦[攻撃|こうげき]ツリー⟧は、[目標|もくひょう]を[小|ちい]さな[手順|てじゅん]に[分|わ]けた[図|ず]です。', it: 'L’albero di attacco scompone un obiettivo in passi più piccoli.' },
      { t: '⟦ドレッド⟧などで、[脅威|きょうい]に[優先順位|ゆうせんじゅんい]を[付|つ]けます。', it: 'Con DREAD o simili si assegna una priorità alle minacce.' },
      { t: '[脅威|きょうい]は、[確認|かくにん]できる⟦[要件|ようけん]⟧と[対策|たいさく]に[変|か]えます。', it: 'Le minacce si trasformano in requisiti verificabili e contromisure.' }
    ],
    gloss: [
      { w: '脅威モデリング', r: 'きょういもでりんぐ', it: 'threat modeling' },
      { w: 'データフロー図', r: 'でーたふろーず', it: 'diagramma dei flussi di dati' },
      { w: '信頼境界', r: 'しんらいきょうかい', it: 'confine di fiducia' },
      { w: 'ストライド', r: 'すとらいど', it: 'STRIDE' },
      { w: '攻撃ツリー', r: 'こうげきつりー', it: 'albero di attacco' },
      { w: 'ドレッド', r: 'どれっど', it: 'DREAD' },
      { w: '要件', r: 'ようけん', it: 'requisito' },
      { w: '脅威', r: 'きょうい', it: 'minaccia' }
    ]
  });

  A('cyb-cloud-security', {
    title: { t: 'クラウドの[安全|あんぜん]', it: 'Sicurezza nel cloud: IAM, configurazione e visibilità' },
    sum: [
      { t: '⟦[責任共有|せきにんきょうゆう]モデル⟧では、[提供者|ていきょうしゃ]と[利用者|りようしゃ]が[責任|せきにん]を[分|わ]けます。', it: 'Con la responsabilità condivisa, provider e cliente si dividono le responsabilità.' },
      { t: '⟦アイエーエム⟧は、[誰|だれ]が[何|なに]をできるかを[決|き]めます。', it: 'L’IAM decide chi può fare cosa.' },
      { t: '[必要|ひつよう]な[権限|けんげん]だけを[与|あた]える⟦[最小権限|さいしょうけんげん]⟧が[基本|きほん]です。', it: 'Il principio di base è il privilegio minimo: solo i permessi necessari.' },
      { t: '⟦[設定|せってい]ミス⟧が、[実際|じっさい]の[事故|じこ]で[多|おお]い[原因|げんいん]です。', it: 'Gli errori di configurazione sono una causa frequente di incidenti reali.' },
      { t: '⟦セキュリティグループ⟧と[暗号化|あんごうか]で、[通信|つうしん]とデータを[守|まも]ります。', it: 'Con i security group e la cifratura si proteggono traffico e dati.' },
      { t: '⟦ログ⟧と⟦シーエスピーエム⟧で、[設定|せってい]の[状態|じょうたい]を[見|み]ます。', it: 'Con i log e il CSPM si controlla lo stato delle configurazioni.' },
      { t: '⟦マルチアカウント⟧では、[被害|ひがい]の[範囲|はんい]を[小|ちい]さくできます。', it: 'Con più account si riduce l’estensione del danno.' }
    ],
    gloss: [
      { w: '責任共有モデル', r: 'せきにんきょうゆうもでる', it: 'modello di responsabilità condivisa' },
      { w: 'アイエーエム', r: 'あいえーえむ', it: 'IAM (gestione di identità e accessi)' },
      { w: '最小権限', r: 'さいしょうけんげん', it: 'privilegio minimo' },
      { w: '設定ミス', r: 'せっていみす', it: 'errore di configurazione' },
      { w: 'セキュリティグループ', r: 'せきゅりてぃぐるーぷ', it: 'security group (firewall virtuale)' },
      { w: 'ログ', r: 'ろぐ', it: 'log, registro' },
      { w: 'シーエスピーエム', r: 'しーえすぴーえむ', it: 'CSPM (controllo della postura cloud)' },
      { w: 'マルチアカウント', r: 'まるちあかうんと', it: 'strategia multi-account' }
    ]
  });

  A('cyb-zero-trust-e-identita', {
    title: { t: 'ゼロトラストとアイデンティティ', it: 'Zero trust e identità come nuovo perimetro' },
    sum: [
      { t: '⟦ゼロトラスト⟧は、[内側|うちがわ]でも[自動的|じどうてき]に[信用|しんよう]しない[考|かんが]え[方|かた]です。', it: 'Lo zero trust non si fida automaticamente nemmeno di ciò che sta dentro.' },
      { t: 'ネットワークではなく、⟦アイデンティティ⟧が[新|あたら]しい[境界|きょうかい]です。', it: 'Il nuovo perimetro è l’identità, non la rete.' },
      { t: '⟦エスエスオー⟧は、[一度|いちど]のログインで[複数|ふくすう]のサービスを[使|つか]えます。', it: 'Con il single sign-on un solo login permette di usare più servizi.' },
      { t: '⟦[条件付|じょうけんつ]きアクセス⟧は、[状況|じょうきょう]を[見|み]て[許可|きょか]か[拒否|きょひ]を[決|き]めます。', it: 'L’accesso condizionale decide se consentire o negare in base al contesto.' },
      { t: '⟦マイクロセグメンテーション⟧は、ネットワークを[細|こま]かく[分|わ]けます。', it: 'La microsegmentazione divide la rete in parti molto piccole.' },
      { t: '⟦ピーエーエム⟧は、[必要|ひつよう]な[時|とき]だけ[特権|とっけん]を[与|あた]えます。', it: 'Il PAM concede i privilegi solo quando servono.' },
      { t: '⟦ゼットティーエヌエー⟧は、[必要|ひつよう]な[資源|しげん]だけを[見|み]せます。', it: 'ZTNA mostra solo le risorse necessarie.' }
    ],
    gloss: [
      { w: 'ゼロトラスト', r: 'ぜろとらすと', it: 'zero trust' },
      { w: 'アイデンティティ', r: 'あいでんてぃてぃ', it: 'identità' },
      { w: 'エスエスオー', r: 'えすえすおー', it: 'SSO (accesso unico)' },
      { w: '条件付きアクセス', r: 'じょうけんつきあくせす', it: 'accesso condizionale' },
      { w: 'マイクロセグメンテーション', r: 'まいくろせぐめんてーしょん', it: 'microsegmentazione' },
      { w: 'ピーエーエム', r: 'ぴーえーえむ', it: 'PAM (gestione degli accessi privilegiati)' },
      { w: 'ゼットティーエヌエー', r: 'ぜっとてぃーえぬえー', it: 'ZTNA' },
      { w: '特権', r: 'とっけん', it: 'privilegio' }
    ]
  });

  A('cyb-memoria-e-mitigazioni', {
    title: { t: 'メモリの[間違|まちが]いと[対策|たいさく]', it: 'Errori di memoria e mitigazioni moderne' },
    sum: [
      { t: '⟦メモリ⟧を[直接|ちょくせつ][扱|あつか]う[言語|げんご]は、[自動|じどう]の[確認|かくにん]がありません。', it: 'I linguaggi che gestiscono direttamente la memoria non hanno controlli automatici.' },
      { t: '⟦バッファオーバーフロー⟧は、[入|はい]る[量|りょう]より[多|おお]く[書|か]くことです。', it: 'Il buffer overflow è scrivere più dati di quanti ne contenga il buffer.' },
      { t: '⟦ユーズアフターフリー⟧は、[解放|かいほう]したメモリをまだ[使|つか]うことです。', it: 'Use-after-free significa usare ancora memoria già liberata.' },
      { t: '[間違|まちが]いが[制御|せいぎょ]の[情報|じょうほう]を[変|か]えると、コードの[実行|じっこう]につながります。', it: 'Se l’errore altera dati di controllo, può portare all’esecuzione di codice.' },
      { t: '⟦カナリア⟧、⟦エヌエックス⟧、⟦エーエスエルアール⟧が[基本|きほん]の[対策|たいさく]です。', it: 'Canarini, NX e ASLR sono le mitigazioni di base.' },
      { t: '⟦ファジング⟧や⟦サニタイザー⟧で、[開発|かいはつ]中に[間違|まちが]いを[見|み]つけます。', it: 'Con fuzzing e sanitizer si trovano gli errori durante lo sviluppo.' },
      { t: '⟦メモリ[安全|あんぜん]⟧な[言語|げんご]は、この[種類|しゅるい]の[間違|まちが]いを[避|さ]けます。', it: 'I linguaggi memory-safe evitano questa classe di errori.' }
    ],
    gloss: [
      { w: 'メモリ', r: 'めもり', it: 'memoria' },
      { w: 'バッファオーバーフロー', r: 'ばっふぁおーばーふろー', it: 'buffer overflow' },
      { w: 'ユーズアフターフリー', r: 'ゆーずあふたーふりー', it: 'use-after-free' },
      { w: 'カナリア', r: 'かなりあ', it: 'canarino (stack canary)' },
      { w: 'エヌエックス', r: 'えぬえっくす', it: 'NX (memoria non eseguibile)' },
      { w: 'エーエスエルアール', r: 'えーえすえるあーる', it: 'ASLR' },
      { w: 'ファジング', r: 'ふぁじんぐ', it: 'fuzzing' },
      { w: 'サニタイザー', r: 'さにたいざー', it: 'sanitizer' },
      { w: 'メモリ安全', r: 'めもりあんぜん', it: 'memory-safe' }
    ]
  });

  A('cyb-reverse-engineering-concetti', {
    title: { t: 'リバースエンジニアリングの[基本|きほん]', it: 'Reverse engineering: concetti per la difesa' },
    sum: [
      { t: '⟦リバースエンジニアリング⟧は、ソースなしでプログラムの[仕組|しく]みを[調|しら]べることです。', it: 'Il reverse engineering analizza un programma senza il suo codice sorgente.' },
      { t: '[防御|ぼうぎょ]のために、[脆弱性|ぜいじゃくせい]やマルウェアを[調|しら]べるときに[使|つか]います。', it: 'In difesa serve per studiare vulnerabilità e malware.' },
      { t: 'ソースは⟦アセンブリ⟧を[通|とお]って、⟦[機械語|きかいご]⟧になります。', it: 'Il sorgente passa per l’assembly e diventa codice macchina.' },
      { t: '⟦レジスタ⟧と⟦スタック⟧が、[読|よ]むときの[基本|きほん]です。', it: 'Registri e stack sono la base per leggere il codice.' },
      { t: '[比較|ひかく]の[後|あと]に⟦ジャンプ⟧して、[条件|じょうけん]に[応|おう]じて[分|わ]かれます。', it: 'Dopo un confronto si salta, e il flusso si dirama secondo la condizione.' },
      { t: '⟦[難読化|なんどくか]⟧は、[機能|きのう]を[変|か]えずに[読|よ]みにくくします。', it: 'L’offuscamento rende il codice più difficile da leggere senza cambiarne la funzione.' },
      { t: '[合法|ごうほう]かどうかは[場合|ばあい]で[違|ちが]うので、[法律|ほうりつ]と[倫理|りんり]を[守|まも]ります。', it: 'La liceità dipende dal caso, quindi si rispettano legge ed etica.' }
    ],
    gloss: [
      { w: 'リバースエンジニアリング', r: 'りばーすえんじにありんぐ', it: 'reverse engineering' },
      { w: 'アセンブリ', r: 'あせんぶり', it: 'assembly' },
      { w: '機械語', r: 'きかいご', it: 'codice macchina' },
      { w: 'レジスタ', r: 'れじすた', it: 'registro (della CPU)' },
      { w: 'スタック', r: 'すたっく', it: 'stack' },
      { w: 'ジャンプ', r: 'じゃんぷ', it: 'salto (istruzione jmp)' },
      { w: '難読化', r: 'なんどくか', it: 'offuscamento' },
      { w: '脆弱性', r: 'ぜいじゃくせい', it: 'vulnerabilità' }
    ]
  });

  A('cyb-mobile-iot-e-ot', {
    title: { t: 'モバイルとアイオーティーと[産業|さんぎょう]システム', it: 'Sicurezza di mobile, IoT e sistemi industriali' },
    sum: [
      { t: '⟦サンドボックス⟧と⟦パーミッション⟧が、モバイルの[安全|あんぜん]の[基本|きほん]です。', it: 'Sandbox e permessi sono la base della sicurezza mobile.' },
      { t: '[公式|こうしき]ストアの[外|そと]から[入|い]れる⟦サイドローディング⟧は、[危険|きけん]が[高|たか]くなります。', it: 'Il sideloading, cioè installare fuori dallo store ufficiale, aumenta il rischio.' },
      { t: '⟦エムディーエム⟧で、[会社|かいしゃ]の[端末|たんまつ]をまとめて[管理|かんり]します。', it: 'Con l’MDM si gestiscono insieme i dispositivi aziendali.' },
      { t: '⟦アイオーティー⟧は、[弱|よわ]い[初期|しょき]パスワードや[古|ふる]い[部品|ぶひん]が[問題|もんだい]です。', it: 'Nell’IoT sono problemi tipici password iniziali deboli e componenti vecchi.' },
      { t: '⟦ファームウェア⟧に[署名|しょめい]があれば、[改|かい]ざんを[防|ふせ]げます。', it: 'Se il firmware è firmato, si possono prevenire le manomissioni.' },
      { t: '⟦オーティー⟧は[設備|せつび]を[動|うご]かすので、⟦[可用性|かようせい]⟧が[最優先|さいゆうせん]です。', it: 'L’OT comanda impianti fisici, perciò la disponibilità viene prima di tutto.' },
      { t: '⟦パデューモデル⟧で、[層|そう]ごとにネットワークを[分|わ]けます。', it: 'Con il modello Purdue la rete si divide per livelli.' }
    ],
    gloss: [
      { w: 'サンドボックス', r: 'さんどぼっくす', it: 'sandbox' },
      { w: 'パーミッション', r: 'ぱーみっしょん', it: 'permesso (di app)' },
      { w: 'サイドローディング', r: 'さいどろーでぃんぐ', it: 'sideloading' },
      { w: 'エムディーエム', r: 'えむでぃーえむ', it: 'MDM (gestione dei dispositivi mobili)' },
      { w: 'アイオーティー', r: 'あいおーてぃー', it: 'IoT (Internet delle cose)' },
      { w: 'ファームウェア', r: 'ふぁーむうぇあ', it: 'firmware' },
      { w: 'オーティー', r: 'おーてぃー', it: 'OT (tecnologia operativa)' },
      { w: '可用性', r: 'かようせい', it: 'disponibilità' },
      { w: 'パデューモデル', r: 'ぱでゅーもでる', it: 'modello Purdue' }
    ]
  });

  A('cyb-gestione-vulnerabilita-e-cvss', {
    title: { t: '[脆弱性|ぜいじゃくせい]の[管理|かんり]とシーブイエスエス', it: 'Gestione delle vulnerabilità e CVSS' },
    sum: [
      { t: '⟦[脆弱性|ぜいじゃくせい]⟧は[発見|はっけん]から[修正|しゅうせい]まで、[繰|く]り[返|かえ]し[管理|かんり]します。', it: 'Le vulnerabilità si gestiscono in modo ciclico, dalla scoperta alla correzione.' },
      { t: '⟦シーブイイー⟧は[番号|ばんごう]、⟦シーダブリューイー⟧は[弱点|じゃくてん]の[種類|しゅるい]です。', it: 'CVE è l’identificativo; CWE è il tipo di debolezza.' },
      { t: '⟦シーブイエスエス⟧は、[深刻|しんこく]さを[点数|てんすう]で[表|あらわ]します。', it: 'CVSS esprime la gravità con un punteggio.' },
      { t: '⟦ベクトル⟧は、[基本|きほん]の[条件|じょうけん]を[短|みじか]く[表|あらわ]します。', it: 'Il vettore riassume in breve le condizioni di base.' },
      { t: '[点数|てんすう]は[同|おな]じでも、[状況|じょうきょう]で[重要度|じゅうようど]が[変|か]わります。', it: 'A parità di punteggio, l’importanza cambia con il contesto.' },
      { t: '⟦[悪用可能性|あくようかのうせい]⟧と⟦[重要度|じゅうようど]⟧で、[優先順位|ゆうせんじゅんい]を[決|き]めます。', it: 'Sfruttabilità e criticità dell’asset determinano la priorità.' },
      { t: '⟦エスエルエー⟧で[期限|きげん]を[決|き]め、[例外|れいがい]は[承認|しょうにん]して[記録|きろく]します。', it: 'Gli SLA fissano i tempi; le eccezioni vanno approvate e registrate.' }
    ],
    gloss: [
      { w: '脆弱性', r: 'ぜいじゃくせい', it: 'vulnerabilità' },
      { w: 'シーブイイー', r: 'しーぶいいー', it: 'CVE' },
      { w: 'シーダブリューイー', r: 'しーだぶりゅーいー', it: 'CWE' },
      { w: 'シーブイエスエス', r: 'しーぶいえすえす', it: 'CVSS' },
      { w: 'ベクトル', r: 'べくとる', it: 'vettore' },
      { w: '悪用可能性', r: 'あくようかのうせい', it: 'sfruttabilità' },
      { w: '重要度', r: 'じゅうようど', it: 'criticità, importanza' },
      { w: 'エスエルエー', r: 'えすえるえー', it: 'SLA (tempi di rimedio)' }
    ]
  });

  A('cyb-rischio-quantitativo', {
    title: { t: '[数字|すうじ]で[見|み]るリスク', it: 'Rischio quantitativo: SLE, ARO e ALE' },
    sum: [
      { t: '⟦リスク⟧は、[起|お]こる[確率|かくりつ]と[影響|えいきょう]の[組|く]み[合|あ]わせです。', it: 'Il rischio combina la probabilità che accada e il suo impatto.' },
      { t: '⟦エスエルイー⟧は、[一回|いっかい]の[事故|じこ]で[失|うしな]う[金額|きんがく]です。', it: 'L’SLE è la perdita economica in un singolo evento.' },
      { t: '⟦エーアールオー⟧は、[一年|いちねん]に[起|お]こる[回数|かいすう]の[予想|よそう]です。', it: 'L’ARO è il numero atteso di eventi in un anno.' },
      { t: '⟦エーエルイー⟧は、エスエルイーとエーアールオーの[掛|か]け[算|ざん]です。', it: 'L’ALE è SLE moltiplicato per ARO.' },
      { t: '⟦[費用対効果|ひようたいこうか]⟧を[見|み]て、[対策|たいさく]を[選|えら]びます。', it: 'Si sceglie il controllo valutando il rapporto costi-benefici.' },
      { t: '[対策|たいさく]のあとにも、⟦[残留|ざんりゅう]リスク⟧は[残|のこ]ります。', it: 'Dopo i controlli resta un rischio residuo.' },
      { t: '⟦リスク[登録簿|とうろくぼ]⟧に[記録|きろく]し、[数字|すうじ]が[不確|ふたし]かなことを[忘|わす]れません。', it: 'Si annota tutto nel registro dei rischi, ricordando che le stime sono incerte.' }
    ],
    gloss: [
      { w: 'リスク', r: 'りすく', it: 'rischio' },
      { w: 'エスエルイー', r: 'えすえるいー', it: 'SLE (perdita per singolo evento)' },
      { w: 'エーアールオー', r: 'えーあーるおー', it: 'ARO (frequenza annua attesa)' },
      { w: 'エーエルイー', r: 'えーえるいー', it: 'ALE (perdita annua attesa)' },
      { w: '費用対効果', r: 'ひようたいこうか', it: 'rapporto costi-benefici' },
      { w: '残留リスク', r: 'ざんりゅうりすく', it: 'rischio residuo' },
      { w: 'リスク登録簿', r: 'りすくとうろくぼ', it: 'registro dei rischi' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' }
    ]
  });

  A('cyb-framework-e-conformita', {
    title: { t: 'フレームワークとコンプライアンス', it: 'Framework, standard e conformità' },
    sum: [
      { t: 'この[授業|じゅぎょう]は[教育|きょういく]のためで、[法律|ほうりつ]の[助言|じょげん]ではありません。', it: 'Questa lezione è educativa e non costituisce consulenza legale.' },
      { t: '⟦[標準|ひょうじゅん]⟧、⟦フレームワーク⟧、[法令|ほうれい]は、[目的|もくてき]が[違|ちが]います。', it: 'Standard, framework e normative hanno scopi diversi.' },
      { t: '⟦アイエスオー⟧は、[情報|じょうほう][安全|あんぜん]の[管理|かんり]の[仕組|しく]みを[定|さだ]めます。', it: 'L’ISO definisce un sistema di gestione della sicurezza delle informazioni.' },
      { t: '⟦ニストシーエスエフ⟧は、[自主的|じしゅてき]に[使|つか]う[安全|あんぜん]の[枠組|わくぐ]みです。', it: 'Il NIST CSF è un quadro volontario per organizzare la sicurezza.' },
      { t: '⟦ジーディーピーアール⟧は、[個人|こじん]データを[守|まも]るルールです。', it: 'Il GDPR è il regolamento che tutela i dati personali.' },
      { t: '⟦エヌアイエスツー⟧は、ヨーロッパの[安全|あんぜん]に[関|かん]する[指令|しれい]です。', it: 'NIS2 è la direttiva europea sulla sicurezza informatica.' },
      { t: '⟦[監査|かんさ]⟧と[評価|ひょうか]は[別|べつ]で、[形|かたち]だけの[遵守|じゅんしゅ]では[足|た]りません。', it: 'Audit e assessment sono diversi, e la conformità di facciata non basta.' }
    ],
    gloss: [
      { w: '標準', r: 'ひょうじゅん', it: 'standard' },
      { w: 'フレームワーク', r: 'ふれーむわーく', it: 'framework' },
      { w: 'アイエスオー', r: 'あいえすおー', it: 'ISO' },
      { w: 'ニストシーエスエフ', r: 'にすとしーえすえふ', it: 'NIST CSF' },
      { w: 'ジーディーピーアール', r: 'じーでぃーぴーあーる', it: 'GDPR' },
      { w: 'エヌアイエスツー', r: 'えぬあいえすつー', it: 'NIS2' },
      { w: '監査', r: 'かんさ', it: 'audit' },
      { w: '遵守', r: 'じゅんしゅ', it: 'conformità, rispetto delle norme' }
    ]
  });

  A('cyb-test-di-penetrazione-autorizzati', {
    title: { t: '[許可|きょか]された[侵入|しんにゅう]テスト', it: 'Test di penetrazione autorizzati e pratica etica' },
    sum: [
      { t: '⟦ペネトレーションテスト⟧は、[許可|きょか]を[得|え]て[行|おこな]う[安全|あんぜん]の[検査|けんさ]です。', it: 'Il penetration test è una verifica di sicurezza svolta con autorizzazione.' },
      { t: '⟦レッドチーム⟧は[攻撃側|こうげきがわ]、⟦ブルーチーム⟧は[防御側|ぼうぎょがわ]です。', it: 'Il red team attacca; il blue team difende.' },
      { t: '⟦パープルチーム⟧は、[二|ふた]つのチームを[協力|きょうりょく]させます。', it: 'Il purple team fa collaborare i due gruppi.' },
      { t: 'テストの[前|まえ]に、⟦[範囲|はんい]⟧と[規則|きそく]を[書面|しょめん]で[決|き]めます。', it: 'Prima del test si stabiliscono per iscritto perimetro e regole.' },
      { t: '[公開|こうかい]された⟦メソドロジー⟧に[沿|そ]って[進|すす]めます。', it: 'Si procede seguendo metodologie pubbliche.' },
      { t: '⟦レポート⟧は、[経営|けいえい]向けと[技術|ぎじゅつ]向けに[分|わ]けて[書|か]きます。', it: 'Il report si scrive su due livelli: per la direzione e per i tecnici.' },
      { t: '[練習|れんしゅう]は、[合法|ごうほう]な⟦ラボ⟧だけでします。', it: 'Ci si esercita solo in laboratori legali.' }
    ],
    gloss: [
      { w: 'ペネトレーションテスト', r: 'ぺねとれーしょんてすと', it: 'penetration test' },
      { w: 'レッドチーム', r: 'れっどちーむ', it: 'red team' },
      { w: 'ブルーチーム', r: 'ぶるーちーむ', it: 'blue team' },
      { w: 'パープルチーム', r: 'ぱーぷるちーむ', it: 'purple team' },
      { w: '範囲', r: 'はんい', it: 'perimetro, ambito' },
      { w: 'メソドロジー', r: 'めそどろじー', it: 'metodologia' },
      { w: 'レポート', r: 'れぽーと', it: 'report' },
      { w: 'ラボ', r: 'らぼ', it: 'laboratorio' }
    ]
  });

  A('cyb-architettura-sicura-e-difesa-in-profondita', {
    title: { t: '[安全|あんぜん]な[設計|せっけい]と[多層防御|たそうぼうぎょ]', it: 'Architettura sicura e difesa in profondità' },
    sum: [
      { t: '⟦[多層防御|たそうぼうぎょ]⟧は、[独立|どくりつ]した[対策|たいさく]を[重|かさ]ねる[考|かんが]え[方|かた]です。', it: 'La difesa in profondità sovrappone più misure indipendenti.' },
      { t: '[設計|せっけい]には、[昔|むかし]から[使|つか]われる⟦[原則|げんそく]⟧があります。', it: 'Per la progettazione esistono principi consolidati nel tempo.' },
      { t: '⟦リファレンスアーキテクチャ⟧を[使|つか]うと、[一|ひと]から[考|かんが]えずに[済|す]みます。', it: 'Un’architettura di riferimento evita di reinventare tutto da zero.' },
      { t: '⟦セグメンテーション⟧で、[被害|ひがい]が[広|ひろ]がるのを[防|ふせ]ぎます。', it: 'La segmentazione impedisce che il danno si diffonda.' },
      { t: '⟦シークレット⟧と[鍵|かぎ]は、[専用|せんよう]の[仕組|しく]みで[管理|かんり]します。', it: 'Segreti e chiavi si gestiscono con strumenti dedicati.' },
      { t: '⟦レジリエンス⟧は、[故障|こしょう]しても[続|つづ]けて[復旧|ふっきゅう]する[力|ちから]です。', it: 'La resilienza è la capacità di continuare e riprendersi dopo un guasto.' },
      { t: '[設計|せっけい]の⟦チェックリスト⟧で、[作|つく]る[前|まえ]に[確認|かくにん]します。', it: 'Con una checklist si controlla il progetto prima di realizzarlo.' }
    ],
    gloss: [
      { w: '多層防御', r: 'たそうぼうぎょ', it: 'difesa in profondità' },
      { w: '原則', r: 'げんそく', it: 'principio' },
      { w: 'リファレンスアーキテクチャ', r: 'りふぁれんすあーきてくちゃ', it: 'architettura di riferimento' },
      { w: 'セグメンテーション', r: 'せぐめんてーしょん', it: 'segmentazione' },
      { w: 'シークレット', r: 'しーくれっと', it: 'segreto' },
      { w: 'レジリエンス', r: 'れじりえんす', it: 'resilienza' },
      { w: 'チェックリスト', r: 'ちぇっくりすと', it: 'checklist' },
      { w: '設計', r: 'せっけい', it: 'progettazione' }
    ]
  });

  A('cyb-continuita-operativa-e-crisi', {
    title: { t: '[事業継続|じぎょうけいぞく]と[危機|きき]', it: 'Continuità operativa, crisi e cultura della sicurezza' },
    sum: [
      { t: '⟦ビーシーピー⟧は[事業|じぎょう]を[続|つづ]ける[計画|けいかく]、⟦ディーアール⟧は[復旧|ふっきゅう]の[計画|けいかく]です。', it: 'Il BCP è il piano per continuare l’attività; il DR è il piano di ripristino.' },
      { t: '⟦ビーアイエー⟧は、どの[業務|ぎょうむ]が[大切|たいせつ]かを[調|しら]べます。', it: 'La BIA individua quali attività sono più importanti.' },
      { t: '⟦アールティーオー⟧、⟦アールピーオー⟧、⟦エムティーディー⟧は、ビーアイエーで[決|き]めます。', it: 'RTO, RPO e MTD si stabiliscono con la BIA.' },
      { t: '⟦[可用性|かようせい]⟧は、[少|すこ]しの[差|さ]でも[大|おお]きな[意味|いみ]があります。', it: 'Per la disponibilità anche una piccola differenza conta molto.' },
      { t: '⟦[危機管理|ききかんり]⟧では、[伝|つた]える[人|ひと]と[内容|ないよう]を[事前|じぜん]に[決|き]めます。', it: 'Nella gestione della crisi si decidono prima chi comunica e che cosa.' },
      { t: '⟦[演習|えんしゅう]⟧で[計画|けいかく]を[試|ため]し、[取引先|とりひきさき]のリスクも[見|み]ます。', it: 'Con le esercitazioni si prova il piano e si valuta il rischio dei fornitori.' },
      { t: '[経営|けいえい]には、[少|すく]ない[指標|しひょう]で[分|わ]かりやすく[報告|ほうこく]します。', it: 'Alla direzione si riferisce con poche metriche, in modo chiaro.' }
    ],
    gloss: [
      { w: 'ビーシーピー', r: 'びーしーぴー', it: 'BCP (continuità operativa)' },
      { w: 'ディーアール', r: 'でぃーあーる', it: 'DR (disaster recovery)' },
      { w: 'ビーアイエー', r: 'びーあいえー', it: 'BIA (analisi dell’impatto sul business)' },
      { w: 'アールティーオー', r: 'あーるてぃーおー', it: 'RTO' },
      { w: 'アールピーオー', r: 'あーるぴーおー', it: 'RPO' },
      { w: 'エムティーディー', r: 'えむてぃーでぃー', it: 'MTD (interruzione massima tollerabile)' },
      { w: '可用性', r: 'かようせい', it: 'disponibilità' },
      { w: '危機管理', r: 'ききかんり', it: 'gestione della crisi' },
      { w: '演習', r: 'えんしゅう', it: 'esercitazione' }
    ]
  });
})(window.ST = window.ST || {});
