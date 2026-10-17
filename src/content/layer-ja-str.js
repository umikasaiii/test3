(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);

  A('str-pensiero-strategico', {
    title: { t: '[戦略的|せんりゃくてき]な[考|かんが]え[方|かた]', it: 'Pensiero strategico: obiettivi, vincoli e mosse altrui' },
    sum: [
      { t: '⟦[戦略|せんりゃく]⟧は、どんな[時|とき]に[何|なに]をするかの[計画|けいかく]です。', it: 'La strategia è un piano che dice cosa fare in ogni circostanza.' },
      { t: '⟦[目標|もくひょう]⟧は[具体的|ぐたいてき]で、[大切|たいせつ]な[順|じゅん]に[並|なら]べます。', it: 'L’obiettivo è specifico e ordinato per importanza.' },
      { t: '⟦[制約|せいやく]⟧は、[選|えら]ぶときの[枠|わく]です。', it: 'I vincoli sono i confini dentro cui si sceglie.' },
      { t: '[相手|あいて]の⟦[反応|はんのう]⟧を[先|さき]に[考|かんが]えます。', it: 'Si anticipa la reazione dell’altro.' },
      { t: '⟦[機会費用|きかいひよう]⟧は、あきらめた[一番|いちばん]よい[道|みち]の[価値|かち]です。', it: 'Il costo opportunità è il valore della migliore alternativa a cui si rinuncia.' },
      { t: '[戻|もど]せる[決定|けってい]は[早|はや]く、[戻|もど]せない[決定|けってい]はゆっくり[決|き]めます。', it: 'Le decisioni reversibili si prendono in fretta, quelle irreversibili con calma.' },
      { t: '⟦[戦略|せんりゃく]⟧は[行|い]き[先|さき]、⟦[戦術|せんじゅつ]⟧は[動|うご]き[方|かた]です。', it: 'La strategia decide dove andare, la tattica come muoversi.' }
    ],
    gloss: [
      { w: '戦略', r: 'せんりゃく', it: 'strategia' },
      { w: '戦術', r: 'せんじゅつ', it: 'tattica' },
      { w: '目標', r: 'もくひょう', it: 'obiettivo' },
      { w: '制約', r: 'せいやく', it: 'vincolo' },
      { w: '反応', r: 'はんのう', it: 'reazione' },
      { w: '機会費用', r: 'きかいひよう', it: 'costo opportunità' },
      { w: '計画', r: 'けいかく', it: 'piano' },
      { w: '決定', r: 'けってい', it: 'decisione' },
      { w: '価値', r: 'かち', it: 'valore' }
    ]
  });

  A('str-decisioni-sotto-incertezza', {
    title: { t: '[不確|ふたし]かな[時|とき]の[決|き]め[方|かた]', it: 'Decisioni sotto incertezza: valore atteso e rischio' },
    sum: [
      { t: '⟦[確率|かくりつ]⟧は、[起|お]こりやすさを[表|あらわ]す[数|かず]です。', it: 'La probabilità è un numero che esprime quanto è probabile un evento.' },
      { t: '⟦[期待値|きたいち]⟧は、[結果|けっか]の[重|おも]みつき⟦[平均|へいきん]⟧です。', it: 'Il valore atteso è la media pesata dei risultati.' },
      { t: '⟦[分散|ぶんさん]⟧は、[結果|けっか]のばらつきです。', it: 'La varianza misura la dispersione dei risultati.' },
      { t: 'お[金|かね]が[増|ふ]えると、[追加|ついか]の⟦[効用|こうよう]⟧は[減|へ]ります。', it: 'Più denaro hai, meno vale l’euro in più (utilità marginale decrescente).' },
      { t: '⟦[決定木|けっていぼく]⟧は、[後|うし]ろから[解|と]きます。', it: 'L’albero decisionale si risolve all’indietro.' },
      { t: '⟦[基準率|きじゅんりつ]⟧を[忘|わす]れると、[判断|はんだん]を[間違|まちが]えます。', it: 'Se dimentichi la frequenza di base, giudichi male.' },
      { t: 'すでに[払|はら]った⟦[埋没費用|まいぼつひよう]⟧は、[選|えら]ぶ[理由|りゆう]になりません。', it: 'Il costo irrecuperabile già pagato non è un motivo per scegliere.' }
    ],
    gloss: [
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '平均', r: 'へいきん', it: 'media' },
      { w: '分散', r: 'ぶんさん', it: 'varianza, dispersione' },
      { w: '効用', r: 'こうよう', it: 'utilità' },
      { w: '決定木', r: 'けっていぼく', it: 'albero decisionale' },
      { w: '基準率', r: 'きじゅんりつ', it: 'frequenza di base' },
      { w: '埋没費用', r: 'まいぼつひよう', it: 'costo irrecuperabile' },
      { w: '結果', r: 'けっか', it: 'risultato' },
      { w: '判断', r: 'はんだん', it: 'giudizio' }
    ]
  });

  A('str-giochi-a-somma-zero-e-minimax', {
    title: { t: 'ゼロサムゲームとミニマックス', it: 'Giochi a somma zero, alberi e minimax' },
    sum: [
      { t: '⟦ゼロサムゲーム⟧は、[一方|いっぽう]の[得|とく]が[相手|あいて]の[損|そん]です。', it: 'Nel gioco a somma zero, il guadagno di uno è la perdita dell’altro.' },
      { t: 'ゲームの⟦[木|き]⟧は、⟦[局面|きょくめん]⟧と[手|て]でできています。', it: 'L’albero di gioco è fatto di posizioni e di mosse.' },
      { t: '⟦ミニマックス⟧は、[相手|あいて]が⟦[最善|さいぜん]⟧を[選|えら]ぶと[考|かんが]えます。', it: 'Il minimax suppone che l’avversario scelga il meglio per sé.' },
      { t: '[値|あたい]は⟦[葉|は]⟧から⟦[根|ね]⟧に[向|む]かって[計算|けいさん]します。', it: 'Il valore si calcola dalle foglie verso la radice.' },
      { t: '⟦[後|うし]ろ[向|む]き[帰納法|きのうほう]⟧は、[終|お]わりから[考|かんが]えます。', it: 'L’induzione a ritroso parte dalla fine del gioco.' },
      { t: '[一|ひと]つから[三|みっ]つ[取|と]る⟦ニム⟧は、[残|のこ]りが[四|よん]つだと[負|ま]けです。', it: 'Nel Nim in cui si prendono da uno a tre oggetti, con quattro rimasti si perde.' },
      { t: '⟦[枝刈|えだか]り⟧は、[答|こた]えを[変|か]えずに[計算|けいさん]を[減|へ]らします。', it: 'La potatura riduce i calcoli senza cambiare il risultato.' }
    ],
    gloss: [
      { w: 'ゼロサムゲーム', r: 'ぜろさむげーむ', it: 'gioco a somma zero' },
      { w: '木', r: 'き', it: 'albero (di gioco)' },
      { w: '局面', r: 'きょくめん', it: 'posizione' },
      { w: 'ミニマックス', r: 'みにまっくす', it: 'minimax' },
      { w: '最善', r: 'さいぜん', it: 'la mossa migliore' },
      { w: '葉', r: 'は', it: 'foglia' },
      { w: '根', r: 'ね', it: 'radice' },
      { w: '後ろ向き帰納法', r: 'うしろむききのうほう', it: 'induzione a ritroso' },
      { w: 'ニム', r: 'にむ', it: 'Nim' },
      { w: '枝刈り', r: 'えだかり', it: 'potatura (alfa-beta)' }
    ]
  });

  A('str-matrici-di-payoff-e-nash', {
    title: { t: '[利得行列|りとくぎょうれつ]とナッシュ[均衡|きんこう]', it: 'Matrici di payoff ed equilibrio di Nash' },
    sum: [
      { t: '[同時|どうじ]に[選|えら]ぶゲームは、⟦[利得行列|りとくぎょうれつ]⟧で[表|あらわ]します。', it: 'Un gioco a scelte simultanee si rappresenta con la matrice dei payoff.' },
      { t: '⟦[支配戦略|しはいせんりゃく]⟧は、[相手|あいて]が[何|なに]をしても[得|とく]な[手|て]です。', it: 'Una strategia dominante conviene qualunque cosa faccia l’altro.' },
      { t: '[支配|しはい]された[手|て]を[順|じゅん]に⟦[消去|しょうきょ]⟧します。', it: 'Si eliminano a più riprese le strategie dominate.' },
      { t: '⟦ナッシュ[均衡|きんこう]⟧は、[誰|だれ]も[一人|ひとり]では[得|とく]をしない[組|く]み[合|あ]わせです。', it: 'L’equilibrio di Nash è una combinazione in cui nessuno migliora cambiando da solo.' },
      { t: 'おたがいが⟦[最適反応|さいてきはんのう]⟧になるセルを[探|さが]します。', it: 'Si cercano le celle in cui entrambi giocano la risposta migliore.' },
      { t: '⟦[鹿狩|しかが]り⟧は、[協力|きょうりょく]すれば[大|おお]きく[得|とく]をします。', it: 'Nella caccia al cervo, cooperando si guadagna di più.' },
      { t: '⟦チキン⟧には、[均衡|きんこう]が[二|ふた]つあります。', it: 'Nel gioco del chicken ci sono due equilibri.' }
    ],
    gloss: [
      { w: '利得行列', r: 'りとくぎょうれつ', it: 'matrice dei payoff' },
      { w: '支配戦略', r: 'しはいせんりゃく', it: 'strategia dominante' },
      { w: '消去', r: 'しょうきょ', it: 'eliminazione' },
      { w: 'ナッシュ均衡', r: 'なっしゅきんこう', it: 'equilibrio di Nash' },
      { w: '最適反応', r: 'さいてきはんのう', it: 'risposta migliore' },
      { w: '鹿狩り', r: 'しかがり', it: 'caccia al cervo' },
      { w: 'チキン', r: 'ちきん', it: 'chicken (gioco del falco e della colomba)' },
      { w: '均衡', r: 'きんこう', it: 'equilibrio' },
      { w: '協力', r: 'きょうりょく', it: 'cooperazione' },
      { w: '戦略', r: 'せんりゃく', it: 'strategia' }
    ]
  });

  A('str-dilemma-del-prigioniero-e-cooperazione', {
    title: { t: '[囚人|しゅうじん]のジレンマと[協力|きょうりょく]', it: 'Dilemma del prigioniero e cooperazione' },
    sum: [
      { t: '⟦[囚人|しゅうじん]のジレンマ⟧では、[二人|ふたり]が[別々|べつべつ]に[選|えら]びます。', it: 'Nel dilemma del prigioniero i due scelgono separatamente.' },
      { t: '⟦[裏切|うらぎ]り⟧は⟦[支配戦略|しはいせんりゃく]⟧です。', it: 'Defezionare è la strategia dominante.' },
      { t: '[二人|ふたり]とも[裏切|うらぎ]る⟦[均衡|きんこう]⟧になります。', it: 'L’equilibrio è che entrambi defezionino.' },
      { t: '⟦[協力|きょうりょく]⟧すれば[二人|ふたり]とも[良|よ]いのに、[裏切|うらぎ]ります。', it: 'Cooperando andrebbe meglio a entrambi, eppure si defeziona.' },
      { t: '⟦[繰|く]り[返|かえ]し⟧では、[未来|みらい]が[協力|きょうりょく]を[助|たす]けます。', it: 'Nelle ripetizioni, il futuro aiuta la cooperazione.' },
      { t: '⟦しっぺ[返|がえ]し⟧は、[最初|さいしょ]に[協力|きょうりょく]し、[前|まえ]の[手|て]をまねます。', it: 'Il tit-for-tat coopera al primo turno e poi ripete la mossa precedente.' },
      { t: '⟦[評判|ひょうばん]⟧も、[協力|きょうりょく]を[支|ささ]えます。', it: 'Anche la reputazione sostiene la cooperazione.' }
    ],
    gloss: [
      { w: '囚人のジレンマ', r: 'しゅうじんのじれんま', it: 'dilemma del prigioniero' },
      { w: '裏切り', r: 'うらぎり', it: 'defezione, tradimento' },
      { w: '支配戦略', r: 'しはいせんりゃく', it: 'strategia dominante' },
      { w: '均衡', r: 'きんこう', it: 'equilibrio' },
      { w: '協力', r: 'きょうりょく', it: 'cooperazione' },
      { w: '繰り返し', r: 'くりかえし', it: 'ripetizione' },
      { w: 'しっぺ返し', r: 'しっぺがえし', it: 'tit-for-tat, occhio per occhio' },
      { w: '評判', r: 'ひょうばん', it: 'reputazione' },
      { w: '未来', r: 'みらい', it: 'futuro' }
    ]
  });

  A('str-strategie-miste', {
    title: { t: '[混合戦略|こんごうせんりゃく]と[読|よ]まれない[手|て]', it: 'Strategie miste e imprevedibilità' },
    sum: [
      { t: '⟦[純粋戦略|じゅんすいせんりゃく]⟧では、[均衡|きんこう]がないゲームがあります。', it: 'In strategie pure ci sono giochi senza equilibrio.' },
      { t: '⟦[混合戦略|こんごうせんりゃく]⟧は、[手|て]ごとに⟦[確率|かくりつ]⟧を[決|き]めます。', it: 'La strategia mista assegna una probabilità a ciascuna strategia.' },
      { t: '[混合戦略|こんごうせんりゃく]の[利得|りとく]は、⟦[期待値|きたいち]⟧で[考|かんが]えます。', it: 'Il payoff di una strategia mista si calcola come valore atteso.' },
      { t: '[相手|あいて]がどちらでも[同|おな]じになる[確率|かくりつ]を[探|さが]します。', it: 'Si cerca la probabilità che rende l’altro indifferente tra le sue scelte.' },
      { t: '⟦じゃんけん⟧の[均衡|きんこう]は、[三|みっ]つとも[同|おな]じ[確率|かくりつ]です。', it: 'L’equilibrio di sasso, carta, forbici dà la stessa probabilità a tutte e tre le mosse.' },
      { t: '⟦ミニマックス[定理|ていり]⟧は、[二人|ふたり]のゼロサムゲームの[値|あたい]を[決|き]めます。', it: 'Il teorema del minimax fissa il valore del gioco a somma zero tra due giocatori.' },
      { t: '⟦[予測|よそく]⟧されると[負|ま]けるので、[確率|かくりつ]に[合|あ]わせて[混|ま]ぜます。', it: 'Se ti prevedono perdi, quindi mescoli le mosse secondo le giuste frequenze.' }
    ],
    gloss: [
      { w: '純粋戦略', r: 'じゅんすいせんりゃく', it: 'strategia pura' },
      { w: '混合戦略', r: 'こんごうせんりゃく', it: 'strategia mista' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: 'じゃんけん', r: 'じゃんけん', it: 'sasso, carta, forbici' },
      { w: 'ミニマックス定理', r: 'みにまっくすていり', it: 'teorema del minimax' },
      { w: '予測', r: 'よそく', it: 'previsione' },
      { w: '均衡', r: 'きんこう', it: 'equilibrio' },
      { w: '利得', r: 'りとく', it: 'payoff, guadagno' },
      { w: '値', r: 'あたい', it: 'valore' }
    ]
  });

  A('str-nim-e-sprague-grundy', {
    title: { t: 'ニムとグランディ[数|すう]', it: 'Nim e numeri di Sprague-Grundy' },
    sum: [
      { t: '⟦[不偏|ふへん]ゲーム⟧は、[二人|ふたり]に[同|おな]じ[手|て]があるゲームです。', it: 'Un gioco imparziale è un gioco in cui i due giocatori hanno le stesse mosse.' },
      { t: '⟦ピー[局面|きょくめん]⟧は[動|うご]く[人|ひと]が[負|ま]け、⟦エヌ[局面|きょくめん]⟧は[勝|か]ちです。', it: 'In una posizione P perde chi muove, in una posizione N vince.' },
      { t: '⟦ニム[和|わ]⟧がゼロなら、[動|うご]く[人|ひと]は[負|ま]けです。', it: 'Se la nim-sum è zero, chi muove perde.' },
      { t: 'ニム[和|わ]がゼロでなければ、[石|いし]を[取|と]ってゼロにします。', it: 'Se la nim-sum non è zero, si tolgono sassi per portarla a zero.' },
      { t: '⟦メックス⟧は、[出|で]てこない[一番|いちばん][小|ちい]さい[数|かず]です。', it: 'Il mex è il più piccolo numero che non compare nell’elenco.' },
      { t: '⟦グランディ[数|すう]⟧がゼロの[局面|きょくめん]は、[動|うご]く[人|ひと]が[負|ま]けです。', it: 'In una posizione con numero di Grundy zero, chi muove perde.' },
      { t: 'ゲームの[和|わ]は、グランディ[数|すう]の⟦[排他的論理和|はいたてきろんりわ]⟧です。', it: 'Per la somma di giochi si usa lo XOR dei numeri di Grundy.' }
    ],
    gloss: [
      { w: '不偏ゲーム', r: 'ふへんげーむ', it: 'gioco imparziale' },
      { w: 'ピー局面', r: 'ぴーきょくめん', it: 'posizione P (perde chi muove)' },
      { w: 'エヌ局面', r: 'えぬきょくめん', it: 'posizione N (vince chi muove)' },
      { w: 'ニム和', r: 'にむわ', it: 'nim-sum' },
      { w: 'メックス', r: 'めっくす', it: 'mex (minimo escluso)' },
      { w: 'グランディ数', r: 'ぐらんでぃすう', it: 'numero di Grundy' },
      { w: '排他的論理和', r: 'はいたてきろんりわ', it: 'XOR (o esclusivo)' },
      { w: '局面', r: 'きょくめん', it: 'posizione' },
      { w: '石', r: 'いし', it: 'sasso' }
    ]
  });

  A('str-alberi-di-gioco-e-valutazione', {
    title: { t: 'ゲームの[木|き]と[評価|ひょうか]', it: 'Alberi di gioco e funzioni di valutazione' },
    sum: [
      { t: '⟦[分岐数|ぶんきすう]⟧と[深|ふか]さで、[木|き]の[大|おお]きさが[決|き]まります。', it: 'Fattore di ramificazione e profondità fissano la dimensione dell’albero.' },
      { t: '⟦ミニマックス⟧は、[葉|は]の[値|あたい]から[上|うえ]へ[求|もと]めます。', it: 'Il minimax parte dai valori delle foglie e risale.' },
      { t: '⟦[枝刈|えだか]り⟧で、[見|み]なくてよい[葉|は]を[飛|と]ばします。', it: 'Con la potatura si saltano le foglie che non serve guardare.' },
      { t: '⟦[手|て]の[順番|じゅんばん]⟧が[良|よ]いと、[枝刈|えだか]りが[効|き]きます。', it: 'Con un buon ordine delle mosse la potatura rende di più.' },
      { t: '[深|ふか]さに[限|かぎ]りがあるので、⟦[評価関数|ひょうかかんすう]⟧で[推定|すいてい]します。', it: 'La profondità è limitata, quindi si stima con una funzione di valutazione.' },
      { t: '⟦[水平線効果|すいへいせんこうか]⟧は、[先|さき]の[危険|きけん]を[見落|みお]とします。', it: 'L’effetto orizzonte fa perdere di vista il pericolo oltre il limite.' },
      { t: '⟦[置換表|ちかんひょう]⟧は、[同|おな]じ[局面|きょくめん]の[計算|けいさん]をむだにしません。', it: 'La tabella di trasposizione evita di ricalcolare la stessa posizione.' }
    ],
    gloss: [
      { w: '分岐数', r: 'ぶんきすう', it: 'fattore di ramificazione' },
      { w: '木', r: 'き', it: 'albero' },
      { w: '葉', r: 'は', it: 'foglia' },
      { w: 'ミニマックス', r: 'みにまっくす', it: 'minimax' },
      { w: '枝刈り', r: 'えだかり', it: 'potatura' },
      { w: '手の順番', r: 'てのじゅんばん', it: 'ordine delle mosse' },
      { w: '評価関数', r: 'ひょうかかんすう', it: 'funzione di valutazione' },
      { w: '水平線効果', r: 'すいへいせんこうか', it: 'effetto orizzonte' },
      { w: '置換表', r: 'ちかんひょう', it: 'tabella di trasposizione' },
      { w: '局面', r: 'きょくめん', it: 'posizione' }
    ]
  });

  A('str-ottimizzazione-greedy-e-dp', {
    title: { t: '[欲張|よくば]り[法|ほう]と[動的計画法|どうてきけいかくほう]', it: 'Ottimizzazione: greedy e programmazione dinamica' },
    sum: [
      { t: '⟦[最適化|さいてきか]⟧は、[一番|いちばん]よい[答|こた]えを[探|さが]すことです。', it: 'Ottimizzare significa cercare la soluzione migliore.' },
      { t: '⟦[欲張|よくば]り[法|ほう]⟧は、[今|いま]いちばん[良|よ]い[選択|せんたく]をします。', it: 'Il greedy sceglie, a ogni passo, ciò che sembra migliore subito.' },
      { t: '⟦[動的計画法|どうてきけいかくほう]⟧は、[小|ちい]さな[問題|もんだい]の[答|こた]えをためて[使|つか]います。', it: 'La programmazione dinamica conserva e riusa le risposte dei sottoproblemi.' },
      { t: '⟦[最適部分構造|さいてきぶぶんこうぞう]⟧があると、[小|ちい]さな[問題|もんだい]に[分|わ]けられます。', it: 'Con la sottostruttura ottima, il problema si divide in sottoproblemi.' },
      { t: '⟦[区間選択|くかんせんたく]⟧では、[終|お]わりが[早|はや]いものを[選|えら]びます。', it: 'Nella selezione di intervalli si sceglie quello che finisce prima.' },
      { t: '⟦ナップサック[問題|もんだい]⟧では、[欲張|よくば]り[法|ほう]は[間違|まちが]えることがあります。', it: 'Nello zaino il greedy può sbagliare.' },
      { t: 'お[釣|つ]りの[問題|もんだい]も、[硬貨|こうか]の[種類|しゅるい]しだいで[欲張|よくば]り[法|ほう]は[失敗|しっぱい]します。', it: 'Anche per il resto, a seconda dei tagli delle monete il greedy può fallire.' }
    ],
    gloss: [
      { w: '最適化', r: 'さいてきか', it: 'ottimizzazione' },
      { w: '欲張り法', r: 'よくばりほう', it: 'metodo greedy' },
      { w: '動的計画法', r: 'どうてきけいかくほう', it: 'programmazione dinamica' },
      { w: '最適部分構造', r: 'さいてきぶぶんこうぞう', it: 'sottostruttura ottima' },
      { w: '区間選択', r: 'くかんせんたく', it: 'selezione di intervalli' },
      { w: 'ナップサック問題', r: 'なっぷさっくもんだい', it: 'problema dello zaino' },
      { w: '硬貨', r: 'こうか', it: 'moneta' },
      { w: '選択', r: 'せんたく', it: 'scelta' },
      { w: '問題', r: 'もんだい', it: 'problema' }
    ]
  });

  A('str-grafi-e-cammini-minimi', {
    title: { t: 'グラフと[最短経路|さいたんけいろ]', it: 'Grafi e cammini minimi' },
    sum: [
      { t: '⟦グラフ⟧は、⟦[頂点|ちょうてん]⟧と⟦[辺|へん]⟧でできています。', it: 'Un grafo è fatto di nodi e di archi.' },
      { t: '[辺|へん]に⟦[重|おも]み⟧をつけて、[距離|きょり]や[費用|ひよう]を[表|あらわ]します。', it: 'Si danno pesi agli archi per rappresentare distanze o costi.' },
      { t: '⟦[幅優先探索|はばゆうせんたんさく]⟧は、[辺|へん]の[数|かず]が[少|すく]ない[道|みち]を[探|さが]します。', it: 'La ricerca in ampiezza trova il cammino con meno archi.' },
      { t: '⟦ダイクストラ[法|ほう]⟧は、マイナスの[重|おも]みがないときに[使|つか]います。', it: 'Dijkstra si usa quando non ci sono pesi negativi.' },
      { t: '[出発点|しゅっぱつてん]から[全部|ぜんぶ]の[点|てん]への⟦[最短経路|さいたんけいろ]⟧を[求|もと]めます。', it: 'Trova i cammini minimi dalla sorgente verso tutti gli altri nodi.' },
      { t: '⟦[最小全域木|さいしょうぜんいきぎ]⟧は、[全部|ぜんぶ]をつなぐ[一番|いちばん][安|やす]い[木|き]です。', it: 'L’albero di copertura minimo è il più economico che collega tutto.' },
      { t: '⟦クリティカルパス⟧が[遅|おく]れると、[全体|ぜんたい]が[遅|おく]れます。', it: 'Se il cammino critico ritarda, ritarda l’intero progetto.' }
    ],
    gloss: [
      { w: 'グラフ', r: 'ぐらふ', it: 'grafo' },
      { w: '頂点', r: 'ちょうてん', it: 'nodo, vertice' },
      { w: '辺', r: 'へん', it: 'arco' },
      { w: '重み', r: 'おもみ', it: 'peso' },
      { w: '幅優先探索', r: 'はばゆうせんたんさく', it: 'ricerca in ampiezza (BFS)' },
      { w: 'ダイクストラ法', r: 'だいくすとらほう', it: 'algoritmo di Dijkstra' },
      { w: '最短経路', r: 'さいたんけいろ', it: 'cammino minimo' },
      { w: '最小全域木', r: 'さいしょうぜんいきぎ', it: 'albero di copertura minimo' },
      { w: 'クリティカルパス', r: 'くりてぃかるぱす', it: 'cammino critico' },
      { w: '出発点', r: 'しゅっぱつてん', it: 'punto di partenza' }
    ]
  });

  A('str-probabilita-nei-giochi', {
    title: { t: 'ゲームの[確率|かくりつ]', it: 'Probabilità nei giochi' },
    sum: [
      { t: '⟦サイコロ⟧を[二|ふた]つ[振|ふ]ると、[七|なな]が[一番|いちばん][出|で]やすいです。', it: 'Lanciando due dadi, il 7 è la somma che esce più facilmente.' },
      { t: '[賭|か]けの⟦[期待値|きたいち]⟧がゼロなら、⟦[公平|こうへい]⟧です。', it: 'Se il valore atteso della scommessa è zero, la scommessa è equa.' },
      { t: '⟦[条件付|じょうけんつ]き[確率|かくりつ]⟧は、[情報|じょうほう]で[変|か]わります。', it: 'La probabilità condizionata cambia con l’informazione.' },
      { t: '⟦[二項分布|にこうぶんぷ]⟧は、[成功|せいこう]の[回数|かいすう]の[確率|かくりつ]を[表|あらわ]します。', it: 'La binomiale dà la probabilità del numero di successi.' },
      { t: '⟦モンティホール⟧では、[選|えら]び[直|なお]したほうが[勝|か]ちやすいです。', it: 'Nel problema di Monty Hall, cambiare scelta aumenta la probabilità di vincere.' },
      { t: '⟦ギャンブラーの[誤謬|ごびゅう]⟧は、[過去|かこ]が[次|つぎ]を[変|か]えると[思|おも]うことです。', it: 'La fallacia del giocatore è credere che il passato cambi l’esito successivo.' },
      { t: '⟦ハウスエッジ⟧のせいで、[長|なが]く[遊|あそ]ぶと[損|そん]をします。', it: 'A causa del vantaggio del banco, giocando a lungo si perde.' }
    ],
    gloss: [
      { w: 'サイコロ', r: 'さいころ', it: 'dado' },
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '公平', r: 'こうへい', it: 'equo' },
      { w: '条件付き確率', r: 'じょうけんつきかくりつ', it: 'probabilità condizionata' },
      { w: '二項分布', r: 'にこうぶんぷ', it: 'distribuzione binomiale' },
      { w: 'モンティホール', r: 'もんてぃほーる', it: 'problema di Monty Hall' },
      { w: 'ギャンブラーの誤謬', r: 'ぎゃんぶらーのごびゅう', it: 'fallacia del giocatore' },
      { w: 'ハウスエッジ', r: 'はうすえっじ', it: 'vantaggio del banco' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' },
      { w: '賭け', r: 'かけ', it: 'scommessa' }
    ]
  });

  A('str-pianificazione-e-vincoli', {
    title: { t: '[計画|けいかく]と[制約|せいやく]', it: 'Pianificazione e vincoli' },
    sum: [
      { t: '⟦[制約充足問題|せいやくじゅうそくもんだい]⟧は、[制約|せいやく]を[守|まも]る[答|こた]えを[探|さが]します。', it: 'Un problema di soddisfacimento di vincoli cerca una soluzione che li rispetti tutti.' },
      { t: '⟦[変数|へんすう]⟧と[値|あたい]の[範囲|はんい]と[制約|せいやく]で[表|あらわ]します。', it: 'Lo si descrive con variabili, valori possibili e vincoli.' },
      { t: '⟦バックトラック⟧は、[制約|せいやく]に[違反|いはん]したら[戻|もど]ります。', it: 'Il backtracking torna indietro appena un vincolo è violato.' },
      { t: '⟦ヒューリスティック⟧は、[選択肢|せんたくし]が[少|すく]ない[変数|へんすう]を[先|さき]にします。', it: 'L’euristica sceglie per prima la variabile con meno valori possibili.' },
      { t: '⟦[制約伝播|せいやくでんぱ]⟧は、[選択肢|せんたくし]を[減|へ]らします。', it: 'La propagazione dei vincoli riduce le scelte possibili.' },
      { t: '⟦[締切|しめきり]⟧が[近|ちか]い[仕事|しごと]から[先|さき]にします。', it: 'Si esegue prima il lavoro con la scadenza più vicina.' },
      { t: '⟦パレート[最適|さいてき]⟧では、[何|なに]かを[良|よ]くすると[別|べつ]が[悪|わる]くなります。', it: 'Nell’ottimo di Pareto, migliorare un criterio ne peggiora un altro.' }
    ],
    gloss: [
      { w: '制約充足問題', r: 'せいやくじゅうそくもんだい', it: 'problema di soddisfacimento di vincoli (CSP)' },
      { w: '変数', r: 'へんすう', it: 'variabile' },
      { w: 'バックトラック', r: 'ばっくとらっく', it: 'backtracking' },
      { w: 'ヒューリスティック', r: 'ひゅーりすてぃっく', it: 'euristica' },
      { w: '制約伝播', r: 'せいやくでんぱ', it: 'propagazione dei vincoli' },
      { w: '締切', r: 'しめきり', it: 'scadenza' },
      { w: 'パレート最適', r: 'ぱれーとさいてき', it: 'ottimo di Pareto' },
      { w: '制約', r: 'せいやく', it: 'vincolo' },
      { w: '選択肢', r: 'せんたくし', it: 'opzione, scelta possibile' }
    ]
  });

  A('str-scacchi-regole-e-valore-dei-pezzi', {
    title: { t: 'チェスの[規則|きそく]と[駒|こま]の[価値|かち]', it: 'Scacchi: regole, mosse speciali e valore dei pezzi' },
    sum: [
      { t: '⟦[盤|ばん]⟧は、[六十四|ろくじゅうよん]のマスでできています。', it: 'La scacchiera è fatta di sessantaquattro caselle.' },
      { t: '⟦ルーク⟧は[縦横|たてよこ]、⟦ビショップ⟧は[斜|なな]めに[動|うご]きます。', it: 'La Torre si muove in orizzontale e verticale, l’Alfiere in diagonale.' },
      { t: '⟦ナイト⟧は、[駒|こま]を[飛|と]び[越|こ]えます。', it: 'Il Cavallo salta sopra gli altri pezzi.' },
      { t: '⟦キャスリング⟧は、キングとルークを[同時|どうじ]に[動|うご]かします。', it: 'L’arrocco muove insieme il Re e la Torre.' },
      { t: 'キングが[攻撃|こうげき]されると、⟦[王手|おうて]⟧です。', it: 'Quando il Re è attaccato, c’è scacco.' },
      { t: '⟦チェックメイト⟧は、どうしても[防|ふせ]げない[王手|おうて]です。', it: 'Lo scacco matto è uno scacco che non si può parare in alcun modo.' },
      { t: '⟦[駒|こま]の[価値|かち]⟧では、ポーンが[一|いち]、クイーンが[九|きゅう]です。', it: 'Nel valore dei pezzi, il pedone vale uno e la Donna nove.' }
    ],
    gloss: [
      { w: '盤', r: 'ばん', it: 'scacchiera' },
      { w: 'ルーク', r: 'るーく', it: 'Torre' },
      { w: 'ビショップ', r: 'びしょっぷ', it: 'Alfiere' },
      { w: 'ナイト', r: 'ないと', it: 'Cavallo' },
      { w: 'キャスリング', r: 'きゃすりんぐ', it: 'arrocco' },
      { w: '王手', r: 'おうて', it: 'scacco' },
      { w: 'チェックメイト', r: 'ちぇっくめいと', it: 'scacco matto' },
      { w: '駒の価値', r: 'こまのかち', it: 'valore dei pezzi' },
      { w: 'クイーン', r: 'くいーん', it: 'Donna' },
      { w: 'ポーン', r: 'ぽーん', it: 'pedone' }
    ]
  });

  A('str-scacchi-principi-di-apertura', {
    title: { t: 'チェスの[序盤|じょばん]の[原則|げんそく]', it: 'Scacchi: i principi dell’apertura' },
    sum: [
      { t: '⟦[序盤|じょばん]⟧は、[駒|こま]を[早|はや]く[働|はたら]かせる[時|とき]です。', it: 'L’apertura è il momento di mettere in gioco i pezzi in fretta.' },
      { t: '⟦[中央|ちゅうおう]⟧を[取|と]ると、[駒|こま]がよく[動|うご]きます。', it: 'Controllando il centro, i pezzi si muovono meglio.' },
      { t: '⟦ナイト⟧とビショップを⟦[展開|てんかい]⟧します。', it: 'Si sviluppano i Cavalli e gli Alfieri.' },
      { t: '⟦キャスリング⟧で、キングを[安全|あんぜん]にします。', it: 'Con l’arrocco si mette il Re al sicuro.' },
      { t: '[理由|りゆう]がなければ、[同|おな]じ[駒|こま]を[二度|にど][動|うご]かしません。', it: 'Senza un motivo, non si muove due volte lo stesso pezzo.' },
      { t: '⟦クイーン⟧を[早|はや]く[出|だ]すと、[攻|せ]められます。', it: 'Se la Donna esce presto, diventa un bersaglio.' },
      { t: '⟦シシリアン⟧は、[横|よこ]から[中央|ちゅうおう]を[争|あらそ]います。', it: 'La Siciliana contende il centro dall’ala.' }
    ],
    gloss: [
      { w: '序盤', r: 'じょばん', it: 'apertura (fase iniziale)' },
      { w: '中央', r: 'ちゅうおう', it: 'centro' },
      { w: 'ナイト', r: 'ないと', it: 'Cavallo' },
      { w: '展開', r: 'てんかい', it: 'sviluppo' },
      { w: 'キャスリング', r: 'きゃすりんぐ', it: 'arrocco' },
      { w: 'クイーン', r: 'くいーん', it: 'Donna' },
      { w: 'シシリアン', r: 'ししりあん', it: 'difesa Siciliana' },
      { w: '駒', r: 'こま', it: 'pezzo' },
      { w: '安全', r: 'あんぜん', it: 'sicurezza' }
    ]
  });

  A('str-scacchi-matti-elementari', {
    title: { t: 'チェスの[基本|きほん]のメイト', it: 'Scacchi: i matti elementari' },
    sum: [
      { t: '⟦チェックメイト⟧は、[王手|おうて]で[逃|に]げ[道|みち]がありません。', it: 'Nello scacco matto il Re è sotto scacco e non ha via di fuga.' },
      { t: '⟦クイーン⟧と[自分|じぶん]のキングで、[相手|あいて]を[追|お]いつめます。', it: 'Con la Donna e il proprio Re si mette alle strette l’avversario.' },
      { t: '⟦ルーク⟧とキングは、⟦オポジション⟧を[使|つか]います。', it: 'Con Torre e Re si usa l’opposizione.' },
      { t: '[二|ふた]つのルークは、⟦[階段|かいだん]⟧のように[押|お]していきます。', it: 'Due Torri spingono il Re come i gradini di una scala.' },
      { t: '⟦バックランクメイト⟧は、[逃|に]げ[場|ば]のないキングを[狙|ねら]います。', it: 'Il matto di corridoio colpisce il Re senza caselle di fuga.' },
      { t: '⟦スマザーメイト⟧は、ナイトで[詰|つ]ませます。', it: 'Il matto soffocato si dà con il Cavallo.' },
      { t: '⟦フールズメイト⟧は、[一番|いちばん][短|みじか]いメイトです。', it: 'Il matto del Pazzo è il matto più breve.' }
    ],
    gloss: [
      { w: 'チェックメイト', r: 'ちぇっくめいと', it: 'scacco matto' },
      { w: 'クイーン', r: 'くいーん', it: 'Donna' },
      { w: 'ルーク', r: 'るーく', it: 'Torre' },
      { w: 'オポジション', r: 'おぽじしょん', it: 'opposizione' },
      { w: '階段', r: 'かいだん', it: 'scala (due Torri)' },
      { w: 'バックランクメイト', r: 'ばっくらんくめいと', it: 'matto di corridoio' },
      { w: 'スマザーメイト', r: 'すまざーめいと', it: 'matto soffocato' },
      { w: 'フールズメイト', r: 'ふーるずめいと', it: 'matto del Pazzo' },
      { w: '王手', r: 'おうて', it: 'scacco' },
      { w: 'ナイト', r: 'ないと', it: 'Cavallo' }
    ]
  });

  A('str-scacchi-motivi-tattici', {
    title: { t: 'チェスの[戦術|せんじゅつ]のパターン', it: 'Scacchi: i motivi tattici' },
    sum: [
      { t: '⟦フォーク⟧は、[二|ふた]つを[同時|どうじ]に[攻撃|こうげき]します。', it: 'La forchetta attacca due bersagli insieme.' },
      { t: '⟦ピン⟧された[駒|こま]は、[自由|じゆう]に[動|うご]けません。', it: 'Un pezzo inchiodato non può muoversi liberamente.' },
      { t: '⟦スキュア⟧は、[大切|たいせつ]な[駒|こま]が[前|まえ]にあります。', it: 'Nell’infilata il pezzo più prezioso sta davanti.' },
      { t: '⟦[開|ひら]き[王手|おうて]⟧は、[隠|かく]れた[攻撃|こうげき]を[開|ひら]きます。', it: 'Lo scacco di scoperta apre un attacco nascosto.' },
      { t: '⟦ディフレクション⟧は、[守|まも]る[駒|こま]を[引|ひ]き[離|はな]します。', it: 'La deviazione allontana il pezzo che difende.' },
      { t: '⟦ツヴィッシェンツーク⟧は、[途中|とちゅう]に[入|い]れる[強|つよ]い[手|て]です。', it: 'La mossa intermedia è una mossa forte inserita prima della risposta attesa.' },
      { t: '⟦[弱点|じゃくてん]⟧は、[手順|てじゅん]を[決|き]めて[探|さが]します。', it: 'Le debolezze si cercano con un metodo.' }
    ],
    gloss: [
      { w: 'フォーク', r: 'ふぉーく', it: 'forchetta' },
      { w: 'ピン', r: 'ぴん', it: 'inchiodatura' },
      { w: 'スキュア', r: 'すきゅあ', it: 'infilata' },
      { w: '開き王手', r: 'ひらきおうて', it: 'scacco di scoperta' },
      { w: 'ディフレクション', r: 'でぃふれくしょん', it: 'deviazione' },
      { w: 'ツヴィッシェンツーク', r: 'つゔぃっしぇんつーく', it: 'mossa intermedia' },
      { w: '弱点', r: 'じゃくてん', it: 'punto debole' },
      { w: '王手', r: 'おうて', it: 'scacco' },
      { w: '手順', r: 'てじゅん', it: 'metodo, sequenza di passi' }
    ]
  });

  A('str-scacchi-finali-essenziali', {
    title: { t: 'チェスの[終盤|しゅうばん]の[基本|きほん]', it: 'Scacchi: i finali essenziali' },
    sum: [
      { t: '⟦[終盤|しゅうばん]⟧では、キングも[戦|たたか]います。', it: 'Nel finale anche il Re partecipa alla lotta.' },
      { t: '[動|うご]かなくてよい[方|ほう]が、⟦オポジション⟧を[持|も]ちます。', it: 'Ha l’opposizione chi non deve muovere.' },
      { t: 'キングが⟦[鍵|かぎ]のマス⟧に[着|つ]けば、ポーンは[成|な]れます。', it: 'Se il Re raggiunge una casa chiave, il pedone promuove.' },
      { t: '⟦[正方形|せいほうけい]の[規則|きそく]⟧で、ポーンを[止|と]められるか[分|わ]かります。', it: 'La regola del quadrato dice se si può fermare il pedone.' },
      { t: '⟦[端|はし]のポーン⟧は、[引|ひ]き[分|わ]けになることがあります。', it: 'Con il pedone di torre si può arrivare alla patta.' },
      { t: '⟦ルセナ⟧は[勝|か]ち、⟦フィリドール⟧は[引|ひ]き[分|わ]けの[形|かたち]です。', it: 'La posizione di Lucena è vincente, quella di Philidor porta alla patta.' },
      { t: 'ルークは⟦[積極的|せっきょくてき]⟧に[使|つか]います。', it: 'La Torre va usata in modo attivo.' }
    ],
    gloss: [
      { w: '終盤', r: 'しゅうばん', it: 'finale' },
      { w: 'オポジション', r: 'おぽじしょん', it: 'opposizione' },
      { w: '鍵のマス', r: 'かぎのます', it: 'casa chiave' },
      { w: '正方形の規則', r: 'せいほうけいのきそく', it: 'regola del quadrato' },
      { w: '端のポーン', r: 'はしのぽーん', it: 'pedone di torre' },
      { w: 'ルセナ', r: 'るせな', it: 'posizione di Lucena' },
      { w: 'フィリドール', r: 'ふぃりどーる', it: 'posizione di Philidor' },
      { w: '積極的', r: 'せっきょくてき', it: 'attivo' },
      { w: '引き分け', r: 'ひきわけ', it: 'patta' }
    ]
  });

  A('str-scacchi-metodo-di-calcolo', {
    title: { t: '[考|かんが]える[手順|てじゅん]', it: 'Scacchi: il metodo di calcolo' },
    sum: [
      { t: '⟦[手順|てじゅん]⟧を[決|き]めると、[大|おお]きな[失敗|しっぱい]を[防|ふせ]げます。', it: 'Con un metodo si evitano gli errori grossolani.' },
      { t: '⟦[候補手|こうほしゅ]⟧は、[計算|けいさん]する[価値|かち]のある[手|て]です。', it: 'Le mosse candidate sono quelle che meritano di essere calcolate.' },
      { t: '⟦[強制手|きょうせいしゅ]⟧は、[王手|おうて]、[取|と]る、[脅|おど]すの[順|じゅん]に[探|さが]します。', it: 'Le mosse forzanti si cercano in quest’ordine: scacchi, catture, minacce.' },
      { t: '⟦[変化|へんか]⟧は、[一|ひと]つずつ[最後|さいご]まで[読|よ]みます。', it: 'Le varianti si calcolano una alla volta, fino in fondo.' },
      { t: '[動|うご]かす[前|まえ]に、⟦[安全確認|あんぜんかくにん]⟧をします。', it: 'Prima di muovere si fa un controllo anti-errore.' },
      { t: '⟦[評価|ひょうか]⟧は、[四|よっ]つの[基準|きじゅん]で[行|おこな]います。', it: 'La valutazione segue quattro criteri.' },
      { t: '⟦[時間|じかん]⟧は、[大事|だいじ]な[局面|きょくめん]に[使|つか]います。', it: 'Il tempo si spende nelle posizioni critiche.' }
    ],
    gloss: [
      { w: '手順', r: 'てじゅん', it: 'metodo, procedura' },
      { w: '候補手', r: 'こうほしゅ', it: 'mossa candidata' },
      { w: '強制手', r: 'きょうせいしゅ', it: 'mossa forzante' },
      { w: '変化', r: 'へんか', it: 'variante' },
      { w: '安全確認', r: 'あんぜんかくにん', it: 'controllo anti-errore' },
      { w: '評価', r: 'ひょうか', it: 'valutazione' },
      { w: '時間', r: 'じかん', it: 'tempo' },
      { w: '局面', r: 'きょくめん', it: 'posizione' },
      { w: '基準', r: 'きじゅん', it: 'criterio' }
    ]
  });

  A('str-scacchi-strutture-di-pedoni', {
    title: { t: 'ポーンの[形|かたち]', it: 'Strutture di pedoni: isolati, doppiati, arretrati e passati' },
    sum: [
      { t: '⟦ポーン[構造|こうぞう]⟧は、[長|なが]く[変|か]わりません。', it: 'La struttura di pedoni cambia molto lentamente.' },
      { t: '⟦[孤立|こりつ]ポーン⟧は、[隣|となり]の[列|れつ]に[味方|みかた]がいません。', it: 'Il pedone isolato non ha pedoni amici sulle colonne adiacenti.' },
      { t: '⟦[二重|にじゅう]ポーン⟧は、[同|おな]じ[列|れつ]に[二|ふた]つあります。', it: 'I pedoni doppiati sono due sulla stessa colonna.' },
      { t: '⟦[後進|こうしん]ポーン⟧は、[進|すす]めず[守|まも]られません。', it: 'Il pedone arretrato non può avanzare e non è protetto da pedoni.' },
      { t: '⟦パスポーン⟧は、[前|まえ]に[敵|てき]のポーンがありません。', it: 'Il pedone passato non ha pedoni avversari davanti a sé.' },
      { t: '⟦ポーンチェーン⟧は、[土台|どだい]を[攻|せ]めます。', it: 'La catena di pedoni si attacca alla base.' },
      { t: '⟦アウトポスト⟧は、ポーンに[守|まも]られた[強|つよ]いマスです。', it: 'L’avamposto è una casa forte protetta da un pedone.' }
    ],
    gloss: [
      { w: 'ポーン構造', r: 'ぽーんこうぞう', it: 'struttura di pedoni' },
      { w: '孤立ポーン', r: 'こりつぽーん', it: 'pedone isolato' },
      { w: '二重ポーン', r: 'にじゅうぽーん', it: 'pedoni doppiati' },
      { w: '後進ポーン', r: 'こうしんぽーん', it: 'pedone arretrato' },
      { w: 'パスポーン', r: 'ぱすぽーん', it: 'pedone passato' },
      { w: 'ポーンチェーン', r: 'ぽーんちぇーん', it: 'catena di pedoni' },
      { w: 'アウトポスト', r: 'あうとぽすと', it: 'avamposto' },
      { w: '土台', r: 'どだい', it: 'base' },
      { w: '列', r: 'れつ', it: 'colonna' }
    ]
  });

  A('str-scacchi-colonne-diagonali-e-case-forti', {
    title: { t: '[列|れつ]と[斜|なな]めと[強|つよ]いマス', it: 'Colonne, diagonali e case forti' },
    sum: [
      { t: '⟦[開|あ]いた[列|れつ]⟧は、ポーンが[一|ひと]つもない[列|れつ]です。', it: 'Una colonna aperta è una colonna senza alcun pedone.' },
      { t: '⟦ルーク⟧は、[開|あ]いた[列|れつ]で[力|ちから]を[出|だ]します。', it: 'La Torre dà il meglio sulle colonne aperte.' },
      { t: 'ルークを[二|ふた]つ[重|かさ]ねて、⟦[侵入|しんにゅう]⟧します。', it: 'Si raddoppiano le Torri e si penetra.' },
      { t: '⟦[第七|だいなな]ランク⟧のルークは、とても[強|つよ]いです。', it: 'Una Torre in settima traversa è fortissima.' },
      { t: '⟦ナイト⟧は、⟦アウトポスト⟧で[強|つよ]くなります。', it: 'Il Cavallo diventa forte su un avamposto.' },
      { t: '⟦[悪|わる]いビショップ⟧は、[味方|みかた]のポーンに[邪魔|じゃま]されます。', it: 'L’Alfiere cattivo è ostacolato dai propri pedoni.' },
      { t: '⟦[弱|よわ]いマス⟧は、ポーンで[守|まも]れないマスです。', it: 'Una casa debole è una casa che i pedoni non possono più difendere.' }
    ],
    gloss: [
      { w: '開いた列', r: 'あいたれつ', it: 'colonna aperta' },
      { w: 'ルーク', r: 'るーく', it: 'Torre' },
      { w: '侵入', r: 'しんにゅう', it: 'penetrazione' },
      { w: '第七ランク', r: 'だいなならんく', it: 'settima traversa' },
      { w: 'ナイト', r: 'ないと', it: 'Cavallo' },
      { w: 'アウトポスト', r: 'あうとぽすと', it: 'avamposto' },
      { w: '悪いビショップ', r: 'わるいびしょっぷ', it: 'Alfiere cattivo' },
      { w: '弱いマス', r: 'よわいます', it: 'casa debole' },
      { w: '列', r: 'れつ', it: 'colonna' }
    ]
  });

  A('str-scacchi-scambi-e-squilibri', {
    title: { t: '[交換|こうかん]と[不均衡|ふきんこう]', it: 'Scambi e squilibri: quando cambiare, quando evitare' },
    sum: [
      { t: '⟦[不均衡|ふきんこう]⟧を[見|み]つけて、[自分|じぶん]の[有利|ゆうり]にします。', it: 'Si individuano gli squilibri e li si trasforma a proprio vantaggio.' },
      { t: '⟦[駒|こま]の[価値|かち]⟧は、[局面|きょくめん]によって[変|か]わります。', it: 'Il valore dei pezzi cambia con la posizione.' },
      { t: '⟦[交換|こうかん]⟧の[前|まえ]に、どの[駒|こま]かを[考|かんが]えます。', it: 'Prima di un cambio si pensa a quale pezzo si cambia.' },
      { t: '⟦ビショップペア⟧は、[長|なが]く[続|つづ]く[小|ちい]さな[利点|りてん]です。', it: 'La coppia degli Alfieri è un piccolo vantaggio che dura a lungo.' },
      { t: '⟦ナイト⟧は[閉|と]じた[局面|きょくめん]、ビショップは[開|ひら]いた[局面|きょくめん]が[得意|とくい]です。', it: 'Il Cavallo preferisce le posizioni chiuse, l’Alfiere quelle aperte.' },
      { t: '⟦[質|しつ]の[犠牲|ぎせい]⟧には、⟦[補償|ほしょう]⟧が[必要|ひつよう]です。', it: 'Il sacrificio di qualità richiede un compenso.' },
      { t: '[有利|ゆうり]なときは、⟦[単純化|たんじゅんか]⟧して[反撃|はんげき]を[減|へ]らします。', it: 'Quando si è in vantaggio, si semplifica per ridurre il controgioco.' }
    ],
    gloss: [
      { w: '不均衡', r: 'ふきんこう', it: 'squilibrio' },
      { w: '駒の価値', r: 'こまのかち', it: 'valore dei pezzi' },
      { w: '交換', r: 'こうかん', it: 'cambio, scambio' },
      { w: 'ビショップペア', r: 'びしょっぷぺあ', it: 'coppia degli Alfieri' },
      { w: 'ナイト', r: 'ないと', it: 'Cavallo' },
      { w: '質の犠牲', r: 'しつのぎせい', it: 'sacrificio di qualità' },
      { w: '補償', r: 'ほしょう', it: 'compenso' },
      { w: '単純化', r: 'たんじゅんか', it: 'semplificazione' },
      { w: '局面', r: 'きょくめん', it: 'posizione' }
    ]
  });

  A('str-scacchi-iniziativa-e-attacco', {
    title: { t: 'イニシアチブと[王|おう]への[攻撃|こうげき]', it: 'Iniziativa, sviluppo e attacco al Re' },
    sum: [
      { t: '⟦イニシアチブ⟧を[持|も]つと、[相手|あいて]は[受|う]け[身|み]になります。', it: 'Chi ha l’iniziativa costringe l’avversario sulla difensiva.' },
      { t: '⟦[展開|てんかい]⟧が[早|はや]いと、[有利|ゆうり]になります。', it: 'Svilupparsi più in fretta dà un vantaggio.' },
      { t: '⟦キャスリング⟧したキングを[攻|せ]めるには、[駒|こま]と[開|あ]いた[列|れつ]が[必要|ひつよう]です。', it: 'Per attaccare il Re arroccato servono pezzi e colonne aperte.' },
      { t: '[攻|せ]める[駒|こま]が[多|おお]いと、⟦[犠牲|ぎせい]⟧が[成功|せいこう]しやすいです。', it: 'Con più attaccanti, il sacrificio ha più probabilità di riuscire.' },
      { t: '⟦ギリシャの[贈|おく]り[物|もの]⟧は、ビショップの[犠牲|ぎせい]で[始|はじ]まります。', it: 'Il sacrificio greco inizia con il sacrificio di un Alfiere.' },
      { t: '[横|よこ]から[攻|せ]める[前|まえ]に、⟦[中央|ちゅうおう]⟧が[安定|あんてい]しているか[見|み]ます。', it: 'Prima di attaccare sull’ala, si controlla che il centro sia stabile.' },
      { t: '⟦[予防|よぼう]⟧は、[相手|あいて]の[計画|けいかく]を[先|さき]に[止|と]めることです。', it: 'La profilassi è fermare in anticipo i piani dell’avversario.' }
    ],
    gloss: [
      { w: 'イニシアチブ', r: 'いにしあちぶ', it: 'iniziativa' },
      { w: '展開', r: 'てんかい', it: 'sviluppo' },
      { w: 'キャスリング', r: 'きゃすりんぐ', it: 'arrocco' },
      { w: '犠牲', r: 'ぎせい', it: 'sacrificio' },
      { w: 'ギリシャの贈り物', r: 'ぎりしゃのおくりもの', it: 'sacrificio greco' },
      { w: '中央', r: 'ちゅうおう', it: 'centro' },
      { w: '予防', r: 'よぼう', it: 'profilassi' },
      { w: '計画', r: 'けいかく', it: 'piano' },
      { w: '駒', r: 'こま', it: 'pezzo' }
    ]
  });

  A('str-scacchi-analisi-delle-partite', {
    title: { t: '[自分|じぶん]の[対局|たいきょく]を[分析|ぶんせき]する', it: 'Analizzare le proprie partite e costruire un repertorio' },
    sum: [
      { t: '⟦[分析|ぶんせき]⟧は、[経験|けいけん]を[知識|ちしき]に[変|か]えます。', it: 'L’analisi trasforma l’esperienza in conoscenza.' },
      { t: '[最初|さいしょ]は、⟦エンジン⟧を[使|つか]わずに[考|かんが]えます。', it: 'All’inizio si ragiona senza usare il motore.' },
      { t: '⟦[重要局面|じゅうようきょくめん]⟧では、[一|ひと]つの[手|て]で[結果|けっか]が[変|か]わります。', it: 'In un momento critico una sola mossa cambia il risultato.' },
      { t: 'ミスの⟦[原因|げんいん]⟧を[分|わ]けると、[対策|たいさく]が[決|き]まります。', it: 'Classificando la causa degli errori si decide la cura.' },
      { t: '⟦[失敗|しっぱい]ノート⟧に、[毎回|まいかい]の[間違|まちが]いを[書|か]きます。', it: 'Nel registro degli errori si annota ogni errore.' },
      { t: 'エンジンは、[自分|じぶん]の[考|かんが]えを⟦[確認|かくにん]⟧する[道具|どうぐ]です。', it: 'Il motore serve a verificare le proprie idee.' },
      { t: '⟦レパートリー⟧は、[少|すく]なくよく[勉強|べんきょう]します。', it: 'Il repertorio va tenuto piccolo e studiato bene.' }
    ],
    gloss: [
      { w: '分析', r: 'ぶんせき', it: 'analisi' },
      { w: 'エンジン', r: 'えんじん', it: 'motore scacchistico' },
      { w: '重要局面', r: 'じゅうようきょくめん', it: 'momento critico' },
      { w: '原因', r: 'げんいん', it: 'causa' },
      { w: '失敗ノート', r: 'しっぱいのーと', it: 'registro degli errori' },
      { w: '確認', r: 'かくにん', it: 'verifica' },
      { w: 'レパートリー', r: 'れぱーとりー', it: 'repertorio' },
      { w: '経験', r: 'けいけん', it: 'esperienza' },
      { w: '知識', r: 'ちしき', it: 'conoscenza' }
    ]
  });

  A('str-scacchi-allenamento-e-torneo', {
    title: { t: '[練習|れんしゅう]と[大会|たいかい]とイロレーティング', it: 'Allenamento, torneo e rating Elo' },
    sum: [
      { t: '⟦[目的|もくてき]のある[練習|れんしゅう]⟧で、[上達|じょうたつ]します。', it: 'Con una pratica deliberata si migliora.' },
      { t: '⟦[戦術|せんじゅつ]⟧の[問題|もんだい]を、[毎日|まいにち]たくさん[解|と]きます。', it: 'Ogni giorno si risolvono tanti problemi di tattica.' },
      { t: '[自分|じぶん]の[棋譜|きふ]に、⟦[注釈|ちゅうしゃく]⟧をつけます。', it: 'Si annotano le proprie partite con brevi commenti.' },
      { t: '⟦[持|も]ち[時間|じかん]⟧には、クラシカルやブリッツなどがあります。', it: 'I ritmi di gioco sono il classico, il blitz e altri.' },
      { t: '⟦ルーティン⟧は、[緊張|きんちょう]をやわらげます。', it: 'La routine attenua il nervosismo.' },
      { t: '⟦イロレーティング⟧の[差|さ]から、[期待|きたい]される[得点|とくてん]が[分|わ]かります。', it: 'Dalla differenza di rating Elo si ricava il punteggio atteso.' },
      { t: 'レーティングは、⟦[係数|けいすう]⟧と[予想|よそう]との[差|さ]で[変|か]わります。', it: 'Il rating cambia in base al coefficiente e alla differenza dal punteggio atteso.' }
    ],
    gloss: [
      { w: '目的のある練習', r: 'もくてきのあるれんしゅう', it: 'pratica deliberata' },
      { w: '戦術', r: 'せんじゅつ', it: 'tattica' },
      { w: '注釈', r: 'ちゅうしゃく', it: 'annotazione, commento' },
      { w: '持ち時間', r: 'もちじかん', it: 'ritmo di gioco, tempo a disposizione' },
      { w: 'ルーティン', r: 'るーてぃん', it: 'routine' },
      { w: 'イロレーティング', r: 'いろれーてぃんぐ', it: 'rating Elo' },
      { w: '係数', r: 'けいすう', it: 'coefficiente (K)' },
      { w: '緊張', r: 'きんちょう', it: 'nervosismo, tensione' },
      { w: '棋譜', r: 'きふ', it: 'partita registrata' }
    ]
  });

  A('str-utilita-e-avversione-al-rischio', {
    title: { t: '[効用|こうよう]と[危険|きけん]をきらう[心|こころ]', it: 'Utilità e avversione al rischio' },
    sum: [
      { t: '⟦[期待値|きたいち]⟧だけでは、[選|えら]び[方|かた]を[説明|せつめい]できません。', it: 'Il valore atteso da solo non spiega come si sceglie.' },
      { t: '⟦[効用|こうよう]⟧は、お[金|かね]の[価値|かち]を[数|かず]にしたものです。', it: 'L’utilità è il valore del denaro espresso con un numero.' },
      { t: '⟦[期待効用|きたいこうよう]⟧が[一番|いちばん][高|たか]い[選択|せんたく]をします。', it: 'Si sceglie l’opzione con la massima utilità attesa.' },
      { t: '⟦[危険回避|きけんかいひ]⟧の[人|ひと]は、[確実|かくじつ]な[金額|きんがく]を[選|えら]びます。', it: 'Chi è avverso al rischio preferisce la cifra sicura.' },
      { t: '⟦[確実性等価|かくじつせいとうか]⟧は、[賭|か]けと[同|おな]じ[価値|かち]の[確実|かくじつ]な[金額|きんがく]です。', it: 'L’equivalente certo è la cifra sicura che vale quanto la scommessa.' },
      { t: '⟦[保険|ほけん]⟧は、[大|おお]きな[損|そん]を[避|さ]けるために[払|はら]います。', it: 'L’assicurazione si paga per evitare una grossa perdita.' },
      { t: '⟦プロスペクト[理論|りろん]⟧は、[損|そん]を[大|おお]きく[感|かん]じると[言|い]います。', it: 'La teoria del prospetto dice che le perdite pesano di più.' }
    ],
    gloss: [
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '効用', r: 'こうよう', it: 'utilità' },
      { w: '期待効用', r: 'きたいこうよう', it: 'utilità attesa' },
      { w: '危険回避', r: 'きけんかいひ', it: 'avversione al rischio' },
      { w: '確実性等価', r: 'かくじつせいとうか', it: 'equivalente certo' },
      { w: '保険', r: 'ほけん', it: 'assicurazione' },
      { w: 'プロスペクト理論', r: 'ぷろすぺくとりろん', it: 'teoria del prospetto' },
      { w: '賭け', r: 'かけ', it: 'scommessa' },
      { w: '金額', r: 'きんがく', it: 'somma di denaro' }
    ]
  });

  A('str-bayes-nelle-decisioni', {
    title: { t: 'ベイズで[考|かんが]える[決|き]め[方|かた]', it: 'Bayes nelle decisioni' },
    sum: [
      { t: '⟦ベイズの[定理|ていり]⟧は、[証拠|しょうこ]を[見|み]て[考|かんが]えを[変|か]えます。', it: 'Il teorema di Bayes dice come cambiare opinione davanti a una prova.' },
      { t: '⟦[事前確率|じぜんかくりつ]⟧は、[証拠|しょうこ]の[前|まえ]の[確率|かくりつ]です。', it: 'La probabilità a priori è quella prima della prova.' },
      { t: '⟦[尤度|ゆうど]⟧は、[仮説|かせつ]が[正|ただ]しいときの[証拠|しょうこ]の[出|で]やすさです。', it: 'La verosimiglianza è quanto è probabile la prova se l’ipotesi è vera.' },
      { t: '⟦[事後確率|じごかくりつ]⟧は、[証拠|しょうこ]の[後|あと]の[確率|かくりつ]です。', it: 'La probabilità a posteriori è quella dopo la prova.' },
      { t: '⟦[基準率|きじゅんりつ]⟧を[忘|わす]れると、[大|おお]きく[間違|まちが]えます。', it: 'Se si dimentica la frequenza di base, si sbaglia di molto.' },
      { t: '⟦オッズ⟧に[尤度比|ゆうどひ]をかけて、[更新|こうしん]します。', it: 'Con gli odds si aggiorna moltiplicando per il rapporto di verosimiglianza.' },
      { t: '⟦[情報|じょうほう]の[価値|かち]⟧を、[決|き]める[前|まえ]に[考|かんが]えます。', it: 'Prima di decidere si pensa al valore dell’informazione.' }
    ],
    gloss: [
      { w: 'ベイズの定理', r: 'べいずのていり', it: 'teorema di Bayes' },
      { w: '事前確率', r: 'じぜんかくりつ', it: 'probabilità a priori' },
      { w: '尤度', r: 'ゆうど', it: 'verosimiglianza' },
      { w: '事後確率', r: 'じごかくりつ', it: 'probabilità a posteriori' },
      { w: '基準率', r: 'きじゅんりつ', it: 'frequenza di base' },
      { w: 'オッズ', r: 'おっず', it: 'odds' },
      { w: '情報の価値', r: 'じょうほうのかち', it: 'valore dell’informazione' },
      { w: '証拠', r: 'しょうこ', it: 'prova' },
      { w: '尤度比', r: 'ゆうどひ', it: 'rapporto di verosimiglianza' },
      { w: '確率', r: 'かくりつ', it: 'probabilità' }
    ]
  });

  A('str-kelly-e-gestione-del-rischio', {
    title: { t: 'ケリー[基準|きじゅん]と[危険|きけん]の[管理|かんり]', it: 'Kelly e gestione del rischio' },
    sum: [
      { t: 'これは[数学|すうがく]の[練習|れんしゅう]で、[投資|とうし]の[助言|じょげん]ではありません。', it: 'È un esercizio di matematica, non un consiglio finanziario.' },
      { t: '⟦ケリー[基準|きじゅん]⟧は、[賭|か]ける[割合|わりあい]を[決|き]めます。', it: 'Il criterio di Kelly decide quale frazione puntare.' },
      { t: '⟦[賭|か]けすぎ⟧は、[成長|せいちょう]を[減|へ]らします。', it: 'Puntare troppo riduce la crescita.' },
      { t: '⟦[分数|ぶんすう]ケリー⟧は、[半分|はんぶん]などの[割合|わりあい]だけ[賭|か]けます。', it: 'Il Kelly frazionato punta solo una frazione, per esempio la metà.' },
      { t: '⟦[破産|はさん]⟧は、[期待値|きたいち]では[見|み]えません。', it: 'La rovina non si vede nel valore atteso.' },
      { t: '⟦[分散化|ぶんさんか]⟧は、[独立|どくりつ]な[賭|か]けのときだけ[効|き]きます。', it: 'La diversificazione funziona solo con scommesse indipendenti.' },
      { t: '⟦[競争|きょうそう]⟧では、[遅|おく]れていれば[危険|きけん]を[増|ふ]やします。', it: 'In una competizione, se sei indietro aumenti il rischio.' }
    ],
    gloss: [
      { w: 'ケリー基準', r: 'けりーきじゅん', it: 'criterio di Kelly' },
      { w: '賭けすぎ', r: 'かけすぎ', it: 'puntare troppo' },
      { w: '分数ケリー', r: 'ぶんすうけりー', it: 'Kelly frazionato' },
      { w: '破産', r: 'はさん', it: 'rovina' },
      { w: '分散化', r: 'ぶんさんか', it: 'diversificazione' },
      { w: '競争', r: 'きょうそう', it: 'competizione' },
      { w: '期待値', r: 'きたいち', it: 'valore atteso' },
      { w: '割合', r: 'わりあい', it: 'frazione, proporzione' },
      { w: '賭け', r: 'かけ', it: 'scommessa' }
    ]
  });

  A('str-negoziazione-e-incentivi', {
    title: { t: '[交渉|こうしょう]とインセンティブ', it: 'Negoziazione e incentivi' },
    sum: [
      { t: '⟦バトナ⟧は、[交渉|こうしょう]が[失敗|しっぱい]したときの[最善|さいぜん]の[代案|だいあん]です。', it: 'La BATNA è la migliore alternativa se la trattativa fallisce.' },
      { t: '⟦[留保価格|りゅうほかかく]⟧は、これ[以上|いじょう]は[譲|ゆず]れない[値段|ねだん]です。', it: 'Il prezzo di riserva è il limite oltre il quale non si cede.' },
      { t: '⟦[合意可能領域|ごういかのうりょういき]⟧は、[二人|ふたり]が[受|う]け[入|い]れる[値段|ねだん]の[幅|はば]です。', it: 'La ZOPA è l’intervallo di prezzi che entrambi accettano.' },
      { t: '⟦アンカリング⟧は、[最初|さいしょ]の[数字|すうじ]に[影響|えいきょう]されることです。', it: 'L’ancoraggio è lasciarsi influenzare dal primo numero.' },
      { t: '⟦[立場|たちば]⟧は[要求|ようきゅう]で、⟦[利害|りがい]⟧はその[理由|りゆう]です。', it: 'La posizione è ciò che chiedi, l’interesse è il motivo per cui lo chiedi.' },
      { t: '⟦プリンシパル⟧と⟦エージェント⟧の[利益|りえき]は[違|ちが]います。', it: 'Gli interessi di principale e agente non coincidono.' },
      { t: '⟦インセンティブ⟧は、[測|はか]れることに[合|あ]わせて[作|つく]ります。', it: 'Gli incentivi si costruiscono su ciò che si può misurare.' }
    ],
    gloss: [
      { w: 'バトナ', r: 'ばとな', it: 'BATNA (migliore alternativa)' },
      { w: '留保価格', r: 'りゅうほかかく', it: 'prezzo di riserva' },
      { w: '合意可能領域', r: 'ごういかのうりょういき', it: 'ZOPA (zona di accordo possibile)' },
      { w: 'アンカリング', r: 'あんかりんぐ', it: 'ancoraggio' },
      { w: '立場', r: 'たちば', it: 'posizione' },
      { w: '利害', r: 'りがい', it: 'interesse' },
      { w: 'プリンシパル', r: 'ぷりんしぱる', it: 'principale' },
      { w: 'エージェント', r: 'えーじぇんと', it: 'agente' },
      { w: 'インセンティブ', r: 'いんせんてぃぶ', it: 'incentivo' },
      { w: '交渉', r: 'こうしょう', it: 'negoziazione' }
    ]
  });

  A('str-strategia-competitiva', {
    title: { t: '[競争|きょうそう]の[戦略|せんりゃく]', it: 'Strategia competitiva' },
    sum: [
      { t: '⟦[戦略|せんりゃく]⟧は、[反応|はんのう]する[相手|あいて]を[考|かんが]えた[選択|せんたく]です。', it: 'La strategia è una scelta che tiene conto di avversari che reagiscono.' },
      { t: '⟦[診断|しんだん]⟧と[方針|ほうしん]と[行動|こうどう]の[三|みっ]つがそろいます。', it: 'Servono tre parti: diagnosi, politica guida e azioni.' },
      { t: '⟦[非対称|ひたいしょう]⟧は、[自分|じぶん]の[強|つよ]みが[活|い]きる[場所|ばしょ]で[戦|たたか]うことです。', it: 'L’asimmetria è combattere dove i propri punti di forza contano.' },
      { t: '⟦ウーダループ⟧は、[見|み]る、[判断|はんだん]、[決|き]める、[動|うご]くの[繰|く]り[返|かえ]しです。', it: 'Il ciclo OODA è la ripetizione di osservare, orientarsi, decidere, agire.' },
      { t: '⟦ランチェスターの[法則|ほうそく]⟧では、[力|ちから]は[数|かず]の[二乗|にじょう]で[増|ふ]えます。', it: 'Nella legge di Lanchester la forza cresce col quadrato del numero.' },
      { t: '⟦[抑止|よくし]⟧には、[能力|のうりょく]と[信頼性|しんらいせい]と[伝達|でんたつ]が[必要|ひつよう]です。', it: 'La deterrenza richiede capacità, credibilità e comunicazione.' },
      { t: '⟦[先行者|せんこうしゃ]⟧は[有利|ゆうり]ですが、[必|かなら]ず[勝|か]つとは[限|かぎ]りません。', it: 'Chi arriva per primo ha vantaggi, ma non vince per forza.' }
    ],
    gloss: [
      { w: '戦略', r: 'せんりゃく', it: 'strategia' },
      { w: '診断', r: 'しんだん', it: 'diagnosi' },
      { w: '非対称', r: 'ひたいしょう', it: 'asimmetria' },
      { w: 'ウーダループ', r: 'うーだるーぷ', it: 'ciclo OODA' },
      { w: 'ランチェスターの法則', r: 'らんちぇすたーのほうそく', it: 'legge di Lanchester' },
      { w: '抑止', r: 'よくし', it: 'deterrenza' },
      { w: '先行者', r: 'せんこうしゃ', it: 'primo arrivato' },
      { w: '方針', r: 'ほうしん', it: 'politica guida, linea' },
      { w: '信頼性', r: 'しんらいせい', it: 'credibilità' },
      { w: '行動', r: 'こうどう', it: 'azione' }
    ]
  });

  A('str-errori-strategici-e-pre-mortem', {
    title: { t: '[戦略|せんりゃく]の[間違|まちが]いとプレモーテム', it: 'Errori strategici e pre-mortem' },
    sum: [
      { t: '⟦[埋没費用|まいぼつひよう]⟧は、もう[戻|もど]らないので[無視|むし]します。', it: 'Il costo affondato non torna più, quindi lo si ignora.' },
      { t: '⟦[自信過剰|じしんかじょう]⟧は、[予想|よそう]の[正確|せいかく]さを[高|たか]く[見|み]ます。', it: 'L’eccesso di fiducia fa sopravvalutare la precisione delle stime.' },
      { t: '⟦[確証|かくしょう]バイアス⟧は、[自分|じぶん]の[考|かんが]えに[合|あ]う[情報|じょうほう]を[探|さが]します。', it: 'Il bias di conferma fa cercare le informazioni che confermano ciò che si crede.' },
      { t: '⟦グループシンク⟧は、[全員|ぜんいん]が[合意|ごうい]を[優先|ゆうせん]してしまうことです。', it: 'Nel pensiero di gruppo tutti danno la precedenza al consenso.' },
      { t: '⟦プレモーテム⟧は、[失敗|しっぱい]したと[仮定|かてい]して[原因|げんいん]を[考|かんが]えます。', it: 'Il pre-mortem immagina il fallimento e ne cerca le cause.' },
      { t: '⟦[決定日記|けっていにっき]⟧は、[後知恵|あとぢえ]を[防|ふせ]ぎます。', it: 'Il diario delle decisioni contrasta il senno di poi.' },
      { t: '⟦[結果論|けっかろん]⟧をやめて、[決|き]め[方|かた]で[評価|ひょうか]します。', it: 'Si smette di giudicare dall’esito e si valuta il modo in cui si è deciso.' }
    ],
    gloss: [
      { w: '埋没費用', r: 'まいぼつひよう', it: 'costo affondato' },
      { w: '自信過剰', r: 'じしんかじょう', it: 'eccesso di fiducia' },
      { w: '確証バイアス', r: 'かくしょうばいあす', it: 'bias di conferma' },
      { w: 'グループシンク', r: 'ぐるーぷしんく', it: 'pensiero di gruppo' },
      { w: 'プレモーテム', r: 'ぷれもーてむ', it: 'pre-mortem' },
      { w: '決定日記', r: 'けっていにっき', it: 'diario delle decisioni' },
      { w: '結果論', r: 'けっかろん', it: 'giudicare dall’esito (resulting)' },
      { w: '後知恵', r: 'あとぢえ', it: 'senno di poi' },
      { w: '原因', r: 'げんいん', it: 'causa' },
      { w: '失敗', r: 'しっぱい', it: 'fallimento' }
    ]
  });

  A('str-eco-costi', {
    title: { t: '[費用|ひよう]と[損益分岐点|そんえきぶんきてん]', it: 'Costi, margine e break-even' },
    sum: [
      { t: '⟦[固定費|こていひ]⟧は、[作|つく]る[数|かず]が[変|か]わっても[変|か]わりません。', it: 'I costi fissi non cambiano al variare della quantità prodotta.' },
      { t: '⟦[変動費|へんどうひ]⟧は、[作|つく]る[数|かず]といっしょに[増|ふ]えます。', it: 'I costi variabili crescono con la quantità prodotta.' },
      { t: '⟦[限界利益|げんかいりえき]⟧は、[価格|かかく]から[変動費|へんどうひ]を[引|ひ]いたものです。', it: 'Il margine di contribuzione è il prezzo meno il costo variabile.' },
      { t: '⟦[損益分岐点|そんえきぶんきてん]⟧は、[利益|りえき]がゼロの[数量|すうりょう]です。', it: 'Il break-even è la quantità a cui il profitto è zero.' },
      { t: '⟦[安全余裕率|あんぜんよゆうりつ]⟧は、[売上|うりあげ]の[余裕|よゆう]を[示|しめ]します。', it: 'Il margine di sicurezza mostra quanto le vendite superano il break-even.' },
      { t: '⟦[機会費用|きかいひよう]⟧は、あきらめた[最善|さいぜん]の[道|みち]の[価値|かち]です。', it: 'Il costo opportunità è il valore della migliore alternativa a cui si rinuncia.' },
      { t: '⟦[埋没費用|まいぼつひよう]⟧は、もう[戻|もど]らないので[判断|はんだん]に[入|い]れません。', it: 'Il costo affondato non torna indietro, quindi non entra nella decisione.' }
    ],
    gloss: [
      { w: '固定費', r: 'こていひ', it: 'costi fissi' },
      { w: '変動費', r: 'へんどうひ', it: 'costi variabili' },
      { w: '限界利益', r: 'げんかいりえき', it: 'margine di contribuzione' },
      { w: '損益分岐点', r: 'そんえきぶんきてん', it: 'punto di pareggio (break-even)' },
      { w: '安全余裕率', r: 'あんぜんよゆうりつ', it: 'margine di sicurezza' },
      { w: '機会費用', r: 'きかいひよう', it: 'costo opportunità' },
      { w: '埋没費用', r: 'まいぼつひよう', it: 'costo affondato' },
      { w: '価格', r: 'かかく', it: 'prezzo' },
      { w: '利益', r: 'りえき', it: 'profitto' },
      { w: '数量', r: 'すうりょう', it: 'quantità' }
    ]
  });

  A('str-eco-mercato', {
    title: { t: '[需要|じゅよう]と[供給|きょうきゅう]と[価格|かかく]', it: 'Domanda, offerta, elasticità e prezzo ottimo' },
    sum: [
      { t: '⟦[需要曲線|じゅようきょくせん]⟧は、[価格|かかく]と[買|か]いたい[量|りょう]の[関係|かんけい]です。', it: 'La curva di domanda lega il prezzo alla quantità che si vuole comprare.' },
      { t: '⟦[供給曲線|きょうきゅうきょくせん]⟧は、[価格|かかく]と[売|う]りたい[量|りょう]の[関係|かんけい]です。', it: 'La curva di offerta lega il prezzo alla quantità che si vuole vendere.' },
      { t: '⟦[均衡|きんこう]⟧は、[需要|じゅよう]と[供給|きょうきゅう]が[等|ひと]しくなる[点|てん]です。', it: 'L’equilibrio è il punto in cui domanda e offerta coincidono.' },
      { t: '[価格|かかく][以外|いがい]が[変|か]わると、[曲線|きょくせん]が[動|うご]きます。', it: 'Se cambia qualcosa oltre al prezzo, la curva si sposta.' },
      { t: '⟦[弾力性|だんりょくせい]⟧は、[価格|かかく]が[変|か]わると[量|りょう]がどれだけ[変|か]わるかです。', it: 'L’elasticità misura quanto cambia la quantità al variare del prezzo.' },
      { t: '[需要|じゅよう]が[弾力的|だんりょくてき]なら、[値上|ねあ]げで⟦[総収入|そうしゅうにゅう]⟧が[減|へ]ります。', it: 'Se la domanda è elastica, aumentare il prezzo riduce il ricavo totale.' },
      { t: '⟦[限界収入|げんかいしゅうにゅう]⟧と⟦[限界費用|げんかいひよう]⟧が[等|ひと]しい[点|てん]が、[最適|さいてき]な[量|りょう]です。', it: 'La quantità ottima è dove ricavo marginale e costo marginale sono uguali.' }
    ],
    gloss: [
      { w: '需要曲線', r: 'じゅようきょくせん', it: 'curva di domanda' },
      { w: '供給曲線', r: 'きょうきゅうきょくせん', it: 'curva di offerta' },
      { w: '均衡', r: 'きんこう', it: 'equilibrio' },
      { w: '弾力性', r: 'だんりょくせい', it: 'elasticità' },
      { w: '総収入', r: 'そうしゅうにゅう', it: 'ricavo totale' },
      { w: '限界収入', r: 'げんかいしゅうにゅう', it: 'ricavo marginale' },
      { w: '限界費用', r: 'げんかいひよう', it: 'costo marginale' },
      { w: '価格', r: 'かかく', it: 'prezzo' },
      { w: '量', r: 'りょう', it: 'quantità' }
    ]
  });

  A('str-eco-valore-attuale', {
    title: { t: '[現在価値|げんざいかち]と[複利|ふくり]', it: 'Valore attuale, interesse composto e confronto fra investimenti' },
    sum: [
      { t: '⟦[割引率|わりびきりつ]⟧は、[時間|じかん]の[価値|かち]を[表|あらわ]します。', it: 'Il tasso di sconto esprime il valore del tempo.' },
      { t: '⟦[現在価値|げんざいかち]⟧は、[未来|みらい]のお[金|かね]を[今|いま]の[価値|かち]にしたものです。', it: 'Il valore attuale è il denaro futuro espresso in valore di oggi.' },
      { t: '⟦[複利|ふくり]⟧は、[利息|りそく]にも[利息|りそく]がつきます。', it: 'Con l’interesse composto anche gli interessi producono interessi.' },
      { t: '[複数|ふくすう]の[支払|しはら]いは、[一|ひと]つずつ[割|わ]り[引|び]いて[足|た]します。', it: 'Più pagamenti si attualizzano uno per uno e poi si sommano.' },
      { t: '⟦[正味現在価値|しょうみげんざいかち]⟧がプラスなら、[投資|とうし]します。', it: 'Se il valore attuale netto è positivo, si investe.' },
      { t: '⟦[内部収益率|ないぶしゅうえきりつ]⟧は、[正味現在価値|しょうみげんざいかち]をゼロにする[率|りつ]です。', it: 'Il TIR è il tasso che rende il valore attuale netto uguale a zero.' },
      { t: '⟦[永久年金|えいきゅうねんきん]⟧は、[毎年|まいとし]の[額|がく]を[率|りつ]で[割|わ]ります。', it: 'Per una rendita perpetua si divide l’importo annuo per il tasso.' }
    ],
    gloss: [
      { w: '割引率', r: 'わりびきりつ', it: 'tasso di sconto' },
      { w: '現在価値', r: 'げんざいかち', it: 'valore attuale' },
      { w: '複利', r: 'ふくり', it: 'interesse composto' },
      { w: '正味現在価値', r: 'しょうみげんざいかち', it: 'valore attuale netto (VAN)' },
      { w: '内部収益率', r: 'ないぶしゅうえきりつ', it: 'tasso interno di rendimento (TIR)' },
      { w: '永久年金', r: 'えいきゅうねんきん', it: 'rendita perpetua' },
      { w: '投資', r: 'とうし', it: 'investimento' },
      { w: '利息', r: 'りそく', it: 'interessi' },
      { w: '未来', r: 'みらい', it: 'futuro' }
    ]
  });

  A('str-eco-scambio', {
    title: { t: '[比較優位|ひかくゆうい]と[貿易|ぼうえき]の[利益|りえき]', it: 'Vantaggio comparato e guadagni dallo scambio' },
    sum: [
      { t: '⟦[絶対優位|ぜったいゆうい]⟧があっても、[貿易|ぼうえき]は[得|とく]になります。', it: 'Anche con un vantaggio assoluto, commerciare conviene.' },
      { t: '⟦[機会費用|きかいひよう]⟧が[低|ひく]い[方|ほう]が、⟦[比較優位|ひかくゆうい]⟧を[持|も]ちます。', it: 'Ha il vantaggio comparato chi ha il costo opportunità più basso.' },
      { t: '⟦[特化|とっか]⟧すると、[全体|ぜんたい]の[生産量|せいさんりょう]が[増|ふ]えます。', it: 'Specializzandosi, la produzione totale aumenta.' },
      { t: '⟦[交易条件|こうえきじょうけん]⟧は、[二人|ふたり]に[得|とく]な[範囲|はんい]で[決|き]まります。', it: 'I termini di scambio stanno nell’intervallo conveniente per entrambi.' },
      { t: '⟦[貿易|ぼうえき]の[利益|りえき]⟧は、[二人|ふたり]に[生|う]まれます。', it: 'I guadagni dallo scambio vanno a entrambe le parti.' },
      { t: '⟦アウトソーシング⟧も、[同|おな]じ[考|かんが]え[方|かた]です。', it: 'Anche l’outsourcing segue la stessa logica.' },
      { t: '⟦リカード⟧のモデルは[単純|たんじゅん]で、[輸送費|ゆそうひ]を[考|かんが]えません。', it: 'Il modello di Ricardo è semplice e non considera i costi di trasporto.' }
    ],
    gloss: [
      { w: '絶対優位', r: 'ぜったいゆうい', it: 'vantaggio assoluto' },
      { w: '機会費用', r: 'きかいひよう', it: 'costo opportunità' },
      { w: '比較優位', r: 'ひかくゆうい', it: 'vantaggio comparato' },
      { w: '特化', r: 'とっか', it: 'specializzazione' },
      { w: '交易条件', r: 'こうえきじょうけん', it: 'termini di scambio' },
      { w: '貿易の利益', r: 'ぼうえきのりえき', it: 'guadagni dallo scambio' },
      { w: 'アウトソーシング', r: 'あうとそーしんぐ', it: 'esternalizzazione' },
      { w: 'リカード', r: 'りかーど', it: 'Ricardo' },
      { w: '生産量', r: 'せいさんりょう', it: 'quantità prodotta' },
      { w: '輸送費', r: 'ゆそうひ', it: 'costi di trasporto' }
    ]
  });

  A('str-eco-oligopolio', {
    title: { t: '[寡占|かせん]の[競争|きょうそう]', it: 'Oligopolio: Cournot, Bertrand e collusione' },
    sum: [
      { t: '⟦[寡占|かせん]⟧では、[会社|かいしゃ]の[利益|りえき]が[他社|たしゃ]にも[左右|さゆう]されます。', it: 'In un oligopolio il profitto di ciascuna impresa dipende anche dalle altre.' },
      { t: '⟦クールノー⟧は、[量|りょう]で[競争|きょうそう]するモデルです。', it: 'Il modello di Cournot è una concorrenza sulle quantità.' },
      { t: '⟦[反応関数|はんのうかんすう]⟧は、[相手|あいて]の[量|りょう]への[最善|さいぜん]の[答|こた]えです。', it: 'La funzione di reazione è la risposta migliore alla quantità dell’altro.' },
      { t: '⟦ベルトラン⟧は、[価格|かかく]で[競争|きょうそう]して[利益|りえき]がゼロになります。', it: 'Nel modello di Bertrand si compete sui prezzi e i profitti si azzerano.' },
      { t: '⟦カルテル⟧を[組|く]むと、[利益|りえき]は[増|ふ]えます。', it: 'Con un accordo collusivo i profitti aumentano.' },
      { t: '[約束|やくそく]を[破|やぶ]ると[得|とく]なので、カルテルは[不安定|ふあんてい]です。', it: 'Rompere l’accordo conviene, quindi il cartello è instabile.' },
      { t: '⟦トリガー[戦略|せんりゃく]⟧は、[裏切|うらぎ]りをずっと[罰|ばっ]します。', it: 'La strategia grim trigger punisce per sempre chi devia.' }
    ],
    gloss: [
      { w: '寡占', r: 'かせん', it: 'oligopolio' },
      { w: 'クールノー', r: 'くーるのー', it: 'Cournot' },
      { w: '反応関数', r: 'はんのうかんすう', it: 'funzione di reazione' },
      { w: 'ベルトラン', r: 'べるとらん', it: 'Bertrand' },
      { w: 'カルテル', r: 'かるてる', it: 'cartello, collusione' },
      { w: 'トリガー戦略', r: 'とりがーせんりゃく', it: 'strategia grim trigger' },
      { w: '価格', r: 'かかく', it: 'prezzo' },
      { w: '利益', r: 'りえき', it: 'profitto' },
      { w: '競争', r: 'きょうそう', it: 'concorrenza' },
      { w: '量', r: 'りょう', it: 'quantità' }
    ]
  });

  A('str-eco-aste-incentivi', {
    title: { t: 'オークションとインセンティブ', it: 'Aste, incentivi e principale-agente' },
    sum: [
      { t: '⟦オークション⟧は、[一番|いちばん][高|たか]く[評価|ひょうか]する[人|ひと]に[売|う]ります。', it: 'L’asta assegna il bene a chi lo valuta di più.' },
      { t: '⟦[第二価格入札|だいにかかくにゅうさつ]⟧では、[二番目|にばんめ]に[高|たか]い[値|ね]を[払|はら]います。', it: 'Nell’asta di Vickrey si paga la seconda offerta più alta.' },
      { t: '[本当|ほんとう]の[価値|かち]で[入札|にゅうさつ]するのが⟦[支配戦略|しはいせんりゃく]⟧です。', it: 'Offrire il proprio vero valore è la strategia dominante.' },
      { t: '⟦[第一価格入札|だいいちかかくにゅうさつ]⟧では、[価値|かち]より[低|ひく]く[入札|にゅうさつ]します。', it: 'Nell’asta di prima offerta si offre meno del proprio valore.' },
      { t: '⟦[最低価格|さいていかかく]⟧を[決|き]めると、[売上|うりあげ]が[増|ふ]えることがあります。', it: 'Fissando un prezzo di riserva, il ricavo può aumentare.' },
      { t: '⟦[勝者|しょうしゃ]の[呪|のろ]い⟧は、[高|たか]すぎる[値|ね]で[勝|か]ってしまうことです。', it: 'La maledizione del vincitore è vincere pagando troppo.' },
      { t: '⟦モラルハザード⟧を[防|ふせ]ぐために、ボーナスで[動機|どうき]をつくります。', it: 'Per contrastare l’azzardo morale si crea un incentivo con il bonus.' }
    ],
    gloss: [
      { w: 'オークション', r: 'おーくしょん', it: 'asta' },
      { w: '第二価格入札', r: 'だいにかかくにゅうさつ', it: 'asta di seconda offerta (Vickrey)' },
      { w: '支配戦略', r: 'しはいせんりゃく', it: 'strategia dominante' },
      { w: '第一価格入札', r: 'だいいちかかくにゅうさつ', it: 'asta di prima offerta' },
      { w: '最低価格', r: 'さいていかかく', it: 'prezzo di riserva' },
      { w: '勝者の呪い', r: 'しょうしゃののろい', it: 'maledizione del vincitore' },
      { w: 'モラルハザード', r: 'もらるはざーど', it: 'azzardo morale' },
      { w: 'ボーナス', r: 'ぼーなす', it: 'bonus' },
      { w: '入札', r: 'にゅうさつ', it: 'offerta (in un’asta)' },
      { w: '動機', r: 'どうき', it: 'incentivo, motivazione' }
    ]
  });

  A('str-eco-strategia-impresa', {
    title: { t: '[会社|かいしゃ]の[戦略|せんりゃく]と[競争優位|きょうそうゆうい]', it: 'Strategia d’impresa: vantaggio competitivo e opzioni reali' },
    sum: [
      { t: '⟦[競争優位|きょうそうゆうい]⟧は、[長|なが]く[守|まも]れる[強|つよ]みです。', it: 'Il vantaggio competitivo è un punto di forza difendibile nel tempo.' },
      { t: '⟦[差別化|さべつか]⟧は、[高|たか]くても[選|えら]ばれる[理由|りゆう]をつくります。', it: 'La differenziazione crea un motivo per essere scelti anche a prezzo più alto.' },
      { t: '⟦[経験曲線|けいけんきょくせん]⟧では、[生産|せいさん]が[倍|ばい]になるたびに[費用|ひよう]が[下|さ]がります。', it: 'Con la curva d’esperienza, a ogni raddoppio della produzione il costo scende.' },
      { t: '⟦ネットワーク[効果|こうか]⟧は、[使|つか]う[人|ひと]が[多|おお]いほど[価値|かち]が[上|あ]がります。', it: 'L’effetto di rete: più utenti ci sono, più il bene vale.' },
      { t: '⟦スイッチングコスト⟧が[高|たか]いと、[客|きゃく]は[変|か]えにくいです。', it: 'Se i costi di cambio sono alti, il cliente cambia con difficoltà.' },
      { t: '⟦[参入障壁|さんにゅうしょうへき]⟧は、[新|あたら]しい[会社|かいしゃ]を[防|ふせ]ぎます。', it: 'Le barriere all’ingresso tengono fuori le nuove imprese.' },
      { t: '⟦リアルオプション⟧は、[待|ま]つ[自由|じゆう]の[価値|かち]です。', it: 'Un’opzione reale è il valore della libertà di aspettare.' }
    ],
    gloss: [
      { w: '競争優位', r: 'きょうそうゆうい', it: 'vantaggio competitivo' },
      { w: '差別化', r: 'さべつか', it: 'differenziazione' },
      { w: '経験曲線', r: 'けいけんきょくせん', it: 'curva d’esperienza' },
      { w: 'ネットワーク効果', r: 'ねっとわーくこうか', it: 'effetto di rete' },
      { w: 'スイッチングコスト', r: 'すいっちんぐこすと', it: 'costi di cambio' },
      { w: '参入障壁', r: 'さんにゅうしょうへき', it: 'barriere all’ingresso' },
      { w: 'リアルオプション', r: 'りあるおぷしょん', it: 'opzione reale' },
      { w: '価値', r: 'かち', it: 'valore' },
      { w: '生産', r: 'せいさん', it: 'produzione' },
      { w: '費用', r: 'ひよう', it: 'costo' }
    ]
  });

  A('str-mil-sun-tzu', {
    title: { t: '[孫子|そんし]の[兵法|へいほう]', it: 'Sun Tzu, L’arte della guerra' },
    sum: [
      { t: '⟦[孫子|そんし]⟧は、[戦争|せんそう]の[考|かんが]え[方|かた]を[書|か]いた[本|ほん]とされます。', it: 'Il Sunzi è considerato un trattato sul modo di pensare la guerra.' },
      { t: '[戦|たたか]う[前|まえ]に、⟦[五事|ごじ]⟧を[比|くら]べて[計算|けいさん]します。', it: 'Prima di combattere si confrontano e si calcolano i cinque fattori.' },
      { t: '⟦[詭道|きどう]⟧は、[相手|あいて]の[判断|はんだん]を[間違|まちが]えさせることです。', it: 'L’inganno serve a far sbagliare le valutazioni dell’avversario.' },
      { t: '[敵|てき]と[自分|じぶん]を[知|し]るほど、⟦[危険|きけん]⟧は[小|ちい]さくなります。', it: 'Più conosci il nemico e te stesso, minore è il pericolo.' },
      { t: '⟦[戦|たたか]わずに[勝|か]つ⟧のが[最高|さいこう]です。', it: 'Vincere senza combattere è il massimo.' },
      { t: '[長|なが]い[戦争|せんそう]は⟦[費用|ひよう]⟧が[大|おお]きいので、[速|はや]さが[大切|たいせつ]です。', it: 'Una guerra lunga costa molto, quindi la rapidità conta.' },
      { t: '⟦[兵力|へいりょく]⟧の[比|ひ]で、[戦|たたか]い[方|かた]を[変|か]えます。', it: 'Si cambia il modo di combattere secondo il rapporto di forze.' }
    ],
    gloss: [
      { w: '孫子', r: 'そんし', it: 'Sunzi (Sun Tzu)' },
      { w: '五事', r: 'ごじ', it: 'i cinque fattori' },
      { w: '詭道', r: 'きどう', it: 'inganno' },
      { w: '危険', r: 'きけん', it: 'pericolo' },
      { w: '戦わずに勝つ', r: 'たたかわずにかつ', it: 'vincere senza combattere' },
      { w: '費用', r: 'ひよう', it: 'costo' },
      { w: '兵力', r: 'へいりょく', it: 'forze, effettivi' },
      { w: '戦争', r: 'せんそう', it: 'guerra' },
      { w: '判断', r: 'はんだん', it: 'valutazione' }
    ]
  });

  A('str-mil-clausewitz', {
    title: { t: 'クラウゼヴィッツと[戦争|せんそう]', it: 'Clausewitz: guerra e politica' },
    sum: [
      { t: '⟦クラウゼヴィッツ⟧は、[戦争|せんそう]と[政治|せいじ]を[結|むす]びつけました。', it: 'Clausewitz ha legato la guerra alla politica.' },
      { t: '⟦[戦争|せんそう]⟧は、ほかの[手段|しゅだん]による⟦[政治|せいじ]⟧の[続|つづ]きです。', it: 'La guerra è la continuazione della politica con altri mezzi.' },
      { t: '⟦[絶対戦争|ぜったいせんそう]⟧は[理論|りろん]で、[現実|げんじつ]の[戦争|せんそう]は[限|かぎ]られます。', it: 'La guerra assoluta è teoria; la guerra reale ha dei limiti.' },
      { t: '⟦[摩擦|まさつ]⟧は、[小|ちい]さな[困難|こんなん]が[積|つ]み[重|かさ]なることです。', it: 'L’attrito è l’accumularsi di piccole difficoltà.' },
      { t: '⟦[三位一体|さんみいったい]⟧は、[暴力|ぼうりょく]と[偶然|ぐうぜん]と[理性|りせい]です。', it: 'La trinità è violenza, caso e ragione.' },
      { t: '⟦[重心|じゅうしん]⟧は、[力|ちから]を[集中|しゅうちゅう]すべき[中心|ちゅうしん]です。', it: 'Il centro di gravità è il punto su cui concentrare lo sforzo.' },
      { t: '⟦[攻勢終末点|こうせいしゅうまつてん]⟧では、[攻|せ]める[側|がわ]の[有利|ゆうり]がなくなります。', it: 'Al punto culminante, l’attaccante perde il suo vantaggio.' }
    ],
    gloss: [
      { w: 'クラウゼヴィッツ', r: 'くらうぜゔぃっつ', it: 'Clausewitz' },
      { w: '戦争', r: 'せんそう', it: 'guerra' },
      { w: '政治', r: 'せいじ', it: 'politica' },
      { w: '絶対戦争', r: 'ぜったいせんそう', it: 'guerra assoluta' },
      { w: '摩擦', r: 'まさつ', it: 'attrito' },
      { w: '三位一体', r: 'さんみいったい', it: 'trinità' },
      { w: '重心', r: 'じゅうしん', it: 'centro di gravità' },
      { w: '攻勢終末点', r: 'こうせいしゅうまつてん', it: 'punto culminante dell’offensiva' },
      { w: '偶然', r: 'ぐうぜん', it: 'caso' },
      { w: '理性', r: 'りせい', it: 'ragione' }
    ]
  });

  A('str-mil-principi-guerra', {
    title: { t: '[戦争原則|せんそうげんそく]と[集中|しゅうちゅう]', it: 'Principi della guerra e concentrazione' },
    sum: [
      { t: '⟦[戦争原則|せんそうげんそく]⟧は、[判断|はんだん]の[助|たす]けになる[点検表|てんけんひょう]です。', it: 'I principi della guerra sono una lista di controllo per il giudizio.' },
      { t: '⟦[指揮統一|しきとういつ]⟧は、[一人|ひとり]の[指揮官|しきかん]を[置|お]くことです。', it: 'L’unità di comando significa avere un solo comandante.' },
      { t: '⟦[集中|しゅうちゅう]⟧は、[大切|たいせつ]な[場所|ばしょ]と[時|とき]に[力|ちから]を[集|あつ]めます。', it: 'La massa concentra la forza nel luogo e nel momento decisivi.' },
      { t: '⟦[戦力節約|せんりょくせつやく]⟧は、[他|ほか]の[場所|ばしょ]には[最小|さいしょう]の[力|ちから]だけ[使|つか]います。', it: 'L’economia di forza usa il minimo indispensabile altrove.' },
      { t: '⟦[機動|きどう]⟧と⟦[奇襲|きしゅう]⟧で、[敵|てき]を[不利|ふり]にします。', it: 'Con la manovra e la sorpresa si mette il nemico in svantaggio.' },
      { t: '⟦[単純|たんじゅん]⟧な[計画|けいかく]は、[失敗|しっぱい]を[減|へ]らします。', it: 'I piani semplici riducono gli errori.' },
      { t: '⟦カンナエ⟧は、[集中|しゅうちゅう]の[有名|ゆうめい]な[例|れい]です。', it: 'Canne è un esempio celebre di concentrazione.' }
    ],
    gloss: [
      { w: '戦争原則', r: 'せんそうげんそく', it: 'principi della guerra' },
      { w: '指揮統一', r: 'しきとういつ', it: 'unità di comando' },
      { w: '集中', r: 'しゅうちゅう', it: 'concentrazione, massa' },
      { w: '戦力節約', r: 'せんりょくせつやく', it: 'economia di forza' },
      { w: '機動', r: 'きどう', it: 'manovra' },
      { w: '奇襲', r: 'きしゅう', it: 'sorpresa' },
      { w: '単純', r: 'たんじゅん', it: 'semplice' },
      { w: 'カンナエ', r: 'かんなえ', it: 'Canne (Cannae)' },
      { w: '点検表', r: 'てんけんひょう', it: 'lista di controllo' }
    ]
  });

  A('str-mil-lanchester', {
    title: { t: 'ランチェスターの[法則|ほうそく]', it: 'Le leggi di Lanchester' },
    sum: [
      { t: '⟦ランチェスター⟧は、[損害|そんがい]を[数式|すうしき]で[表|あらわ]しました。', it: 'Lanchester ha descritto le perdite con delle equazioni.' },
      { t: '⟦[線形法則|せんけいほうそく]⟧では、[残|のこ]る[数|かず]は[差|さ]になります。', it: 'Nella legge lineare i superstiti sono la differenza.' },
      { t: '⟦[二乗法則|にじょうほうそく]⟧では、[力|ちから]は[数|かず]の[二乗|にじょう]で[決|き]まります。', it: 'Nella legge quadratica la forza dipende dal quadrato del numero.' },
      { t: '⟦[質|しつ]⟧は、[数|かず]の[少|すく]なさを[補|おぎな]えることがあります。', it: 'La qualità può compensare la scarsità numerica.' },
      { t: '⟦[戦力分散|せんりょくぶんさん]⟧した[側|がわ]は、[負|ま]けやすくなります。', it: 'Chi divide le proprie forze rischia di più di perdere.' },
      { t: '⟦モデル⟧は[単純|たんじゅん]な[仮定|かてい]で、[予言|よげん]ではありません。', it: 'Il modello si basa su ipotesi semplici e non è una previsione.' },
      { t: '[大|おお]きい[側|がわ]の[有利|ゆうり]は、[数|かず]の[差|さ]より[大|おお]きくなります。', it: 'Il vantaggio del più grande supera la semplice differenza numerica.' }
    ],
    gloss: [
      { w: 'ランチェスター', r: 'らんちぇすたー', it: 'Lanchester' },
      { w: '線形法則', r: 'せんけいほうそく', it: 'legge lineare' },
      { w: '二乗法則', r: 'にじょうほうそく', it: 'legge quadratica' },
      { w: '質', r: 'しつ', it: 'qualità' },
      { w: '戦力分散', r: 'せんりょくぶんさん', it: 'divisione delle forze' },
      { w: 'モデル', r: 'もでる', it: 'modello' },
      { w: '損害', r: 'そんがい', it: 'perdite, danni' },
      { w: '仮定', r: 'かてい', it: 'ipotesi' },
      { w: '有利', r: 'ゆうり', it: 'vantaggio' }
    ]
  });

  A('str-mil-logistica', {
    title: { t: '[兵站|へいたん]と[補給|ほきゅう]', it: 'Logistica e rifornimenti' },
    sum: [
      { t: '⟦[兵站|へいたん]⟧は、[必要|ひつよう]な[物|もの]を[必要|ひつよう]な[所|ところ]へ[届|とど]けることです。', it: 'La logistica porta ciò che serve dove serve.' },
      { t: '⟦[消費量|しょうひりょう]⟧から[計算|けいさん]して、[必要|ひつよう]な[量|りょう]を[知|し]ります。', it: 'Si parte dal consumo per capire quanto serve.' },
      { t: '[距離|きょり]が[長|なが]いほど、⟦[有効積載量|ゆうこうせきさいりょう]⟧は[減|へ]ります。', it: 'Più la distanza cresce, più il carico utile diminuisce.' },
      { t: '⟦[補給線|ほきゅうせん]⟧が[長|なが]いと、[軍|ぐん]は[弱|よわ]くなります。', it: 'Se la linea di rifornimento è lunga, l’esercito si indebolisce.' },
      { t: '⟦ナポレオン⟧のロシア[遠征|えんせい]は、[補給|ほきゅう]の[問題|もんだい]で[崩|くず]れました。', it: 'La campagna di Russia di Napoleone si sfaldò anche per problemi di rifornimento.' },
      { t: '⟦バルバロッサ[作戦|さくせん]⟧では、[鉄道|てつどう]と[泥|どろ]が[問題|もんだい]でした。', it: 'Nell’operazione Barbarossa, ferrovie e fango furono un problema.' },
      { t: '⟦ボトルネック⟧が[全体|ぜんたい]の[力|ちから]を[決|き]めます。', it: 'Il collo di bottiglia determina la capacità dell’intero sistema.' }
    ],
    gloss: [
      { w: '兵站', r: 'へいたん', it: 'logistica' },
      { w: '消費量', r: 'しょうひりょう', it: 'consumo' },
      { w: '有効積載量', r: 'ゆうこうせきさいりょう', it: 'carico utile' },
      { w: '補給線', r: 'ほきゅうせん', it: 'linea di rifornimento' },
      { w: 'ナポレオン', r: 'なぽれおん', it: 'Napoleone' },
      { w: 'バルバロッサ作戦', r: 'ばるばろっささくせん', it: 'operazione Barbarossa' },
      { w: 'ボトルネック', r: 'ぼとるねっく', it: 'collo di bottiglia' },
      { w: '補給', r: 'ほきゅう', it: 'rifornimento' },
      { w: '距離', r: 'きょり', it: 'distanza' }
    ]
  });

  A('str-mil-ooda-asimmetria', {
    title: { t: 'ウーダループと[非対称戦|ひたいしょうせん]', it: 'OODA, manovra e asimmetria' },
    sum: [
      { t: '⟦ウーダループ⟧は、[観察|かんさつ]、[状況判断|じょうきょうはんだん]、[決定|けってい]、[行動|こうどう]です。', it: 'Il ciclo OODA è osservare, orientarsi, decidere, agire.' },
      { t: '⟦[状況判断|じょうきょうはんだん]⟧は、[意味|いみ]を[与|あた]える[大切|たいせつ]な[段階|だんかい]です。', it: 'L’orientamento è la fase importante che dà significato ai dati.' },
      { t: '[速|はや]い⟦リズム⟧を[持|も]つと、[相手|あいて]の[間違|まちが]いが[積|つ]み[重|かさ]なります。', it: 'Con un ritmo più veloce, gli errori dell’avversario si accumulano.' },
      { t: '⟦[消耗戦|しょうもうせん]⟧は[資源|しげん]を[減|へ]らし、⟦[機動戦|きどうせん]⟧は[結束|けっそく]を[崩|くず]します。', it: 'Il logoramento consuma le risorse, la manovra spezza la coesione.' },
      { t: '⟦ミッションコマンド⟧は、[目的|もくてき]を[伝|つた]えて、[方法|ほうほう]は[任|まか]せます。', it: 'Il comando per missione comunica lo scopo e lascia libertà sui modi.' },
      { t: '⟦[非対称戦|ひたいしょうせん]⟧では、[弱|よわ]い[側|がわ]が[別|べつ]の[場所|ばしょ]で[戦|たたか]います。', it: 'Nel conflitto asimmetrico il più debole combatte su un altro terreno.' },
      { t: '⟦ゲリラ⟧は、[小|ちい]さな[攻撃|こうげき]で[相手|あいて]を[疲|つか]れさせます。', it: 'La guerriglia logora l’avversario con piccoli attacchi.' }
    ],
    gloss: [
      { w: 'ウーダループ', r: 'うーだるーぷ', it: 'ciclo OODA' },
      { w: '状況判断', r: 'じょうきょうはんだん', it: 'orientamento' },
      { w: 'リズム', r: 'りずむ', it: 'ritmo' },
      { w: '消耗戦', r: 'しょうもうせん', it: 'guerra di logoramento' },
      { w: '機動戦', r: 'きどうせん', it: 'guerra di manovra' },
      { w: 'ミッションコマンド', r: 'みっしょんこまんど', it: 'comando per missione' },
      { w: '非対称戦', r: 'ひたいしょうせん', it: 'guerra asimmetrica' },
      { w: 'ゲリラ', r: 'げりら', it: 'guerriglia' },
      { w: '観察', r: 'かんさつ', it: 'osservazione' },
      { w: '行動', r: 'こうどう', it: 'azione' }
    ]
  });

  A('str-mil-deterrenza-giochi', {
    title: { t: '[抑止|よくし]とゲーム[理論|りろん]', it: 'Deterrenza e teoria dei giochi del conflitto' },
    sum: [
      { t: '⟦[抑止|よくし]⟧は、[費用|ひよう]が[利益|りえき]より[大|おお]きいと[信|しん]じさせます。', it: 'La deterrenza fa credere che il costo superi il beneficio.' },
      { t: '⟦[信頼性|しんらいせい]⟧のない[脅|おど]しは、[効|き]きません。', it: 'Una minaccia non credibile non funziona.' },
      { t: '⟦コミットメント⟧は、[自分|じぶん]の[選択肢|せんたくし]をわざと[減|へ]らします。', it: 'L’impegno riduce volontariamente le proprie opzioni.' },
      { t: '⟦チキン⟧では、[二人|ふたり]とも[進|すす]むと[大|おお]きな[損|そん]になります。', it: 'Nel chicken, se entrambi vanno dritti la perdita è enorme.' },
      { t: '⟦エスカレーション⟧は、[対立|たいりつ]が[少|すこ]しずつ[激|はげ]しくなることです。', it: 'L’escalation è l’aumento graduale dell’intensità del conflitto.' },
      { t: '⟦[安全保障|あんぜんほしょう]のジレンマ⟧は、[囚人|しゅうじん]のジレンマの[一種|いっしゅ]です。', it: 'Il dilemma della sicurezza è un tipo di dilemma del prigioniero.' },
      { t: '⟦[相互確証破壊|そうごかくしょうはかい]⟧では、[先制攻撃|せんせいこうげき]の[後|あと]も[反撃|はんげき]できます。', it: 'Con la distruzione reciproca assicurata si può rispondere anche dopo un primo attacco.' }
    ],
    gloss: [
      { w: '抑止', r: 'よくし', it: 'deterrenza' },
      { w: '信頼性', r: 'しんらいせい', it: 'credibilità' },
      { w: 'コミットメント', r: 'こみっとめんと', it: 'impegno (commitment)' },
      { w: 'チキン', r: 'ちきん', it: 'chicken' },
      { w: 'エスカレーション', r: 'えすかれーしょん', it: 'escalation' },
      { w: '安全保障のジレンマ', r: 'あんぜんほしょうのじれんま', it: 'dilemma della sicurezza' },
      { w: '相互確証破壊', r: 'そうごかくしょうはかい', it: 'distruzione reciproca assicurata (MAD)' },
      { w: '反撃', r: 'はんげき', it: 'contrattacco' },
      { w: '費用', r: 'ひよう', it: 'costo' },
      { w: '利益', r: 'りえき', it: 'beneficio' }
    ]
  });

  A('str-opt-programmazione-lineare', {
    title: { t: '[線形計画法|せんけいけいかくほう]', it: 'Programmazione lineare' },
    sum: [
      { t: '⟦[線形計画法|せんけいけいかくほう]⟧は、[式|しき]がすべて[一次|いちじ]の[問題|もんだい]です。', it: 'La programmazione lineare riguarda problemi in cui tutte le espressioni sono lineari.' },
      { t: '⟦[目的関数|もくてきかんすう]⟧は、[最大|さいだい]か[最小|さいしょう]にしたい[式|しき]です。', it: 'La funzione obiettivo è l’espressione da rendere massima o minima.' },
      { t: '⟦[変数|へんすう]⟧は、[自分|じぶん]で[選|えら]べる[量|りょう]です。', it: 'Le variabili sono le quantità che si possono scegliere.' },
      { t: '⟦[実行可能領域|じっこうかのうりょういき]⟧は、[制約|せいやく]を[全部|ぜんぶ][守|まも]る[点|てん]の[集|あつ]まりです。', it: 'La regione ammissibile è l’insieme dei punti che rispettano tutti i vincoli.' },
      { t: '⟦[最適解|さいてきかい]⟧は、⟦[頂点|ちょうてん]⟧のどれかにあります。', it: 'Una soluzione ottima si trova in uno dei vertici.' },
      { t: '⟦[影|かげ]の[価格|かかく]⟧は、[資源|しげん]を[一|ひと]つ[増|ふ]やす[価値|かち]です。', it: 'Il prezzo ombra è il valore di una unità in più di risorsa.' },
      { t: '⟦シンプレックス[法|ほう]⟧は、[頂点|ちょうてん]から[頂点|ちょうてん]へ[進|すす]みます。', it: 'Il simplesso si sposta da un vertice all’altro.' }
    ],
    gloss: [
      { w: '線形計画法', r: 'せんけいけいかくほう', it: 'programmazione lineare' },
      { w: '目的関数', r: 'もくてきかんすう', it: 'funzione obiettivo' },
      { w: '変数', r: 'へんすう', it: 'variabile' },
      { w: '実行可能領域', r: 'じっこうかのうりょういき', it: 'regione ammissibile' },
      { w: '最適解', r: 'さいてきかい', it: 'soluzione ottima' },
      { w: '頂点', r: 'ちょうてん', it: 'vertice' },
      { w: '影の価格', r: 'かげのかかく', it: 'prezzo ombra' },
      { w: 'シンプレックス法', r: 'しんぷれっくすほう', it: 'metodo del simplesso' },
      { w: '制約', r: 'せいやく', it: 'vincolo' }
    ]
  });

  A('str-opt-programmazione-dinamica', {
    title: { t: '[動的計画法|どうてきけいかくほう]をくわしく', it: 'Programmazione dinamica avanzata' },
    sum: [
      { t: '⟦[動的計画法|どうてきけいかくほう]⟧は、[小|ちい]さな[問題|もんだい]を[一回|いっかい]だけ[解|と]きます。', it: 'La programmazione dinamica risolve ogni sottoproblema una sola volta.' },
      { t: '⟦[最適部分構造|さいてきぶぶんこうぞう]⟧と⟦[重複部分問題|ちょうふくぶぶんもんだい]⟧が[必要|ひつよう]です。', it: 'Servono la sottostruttura ottima e i sottoproblemi sovrapposti.' },
      { t: '⟦[状態|じょうたい]⟧と⟦[漸化式|ぜんかしき]⟧と[初期値|しょきち]を[決|き]めます。', it: 'Si definiscono lo stato, la ricorrenza e il caso base.' },
      { t: '⟦[硬貨|こうか]⟧の[最小枚数|さいしょうまいすう]は、[表|ひょう]を[順|じゅん]に[埋|う]めて[求|もと]めます。', it: 'Il minimo numero di monete si trova riempiendo una tabella in ordine.' },
      { t: '⟦ナップサック[問題|もんだい]⟧は、[容量|ようりょう]ごとの[表|ひょう]で[解|と]きます。', it: 'Lo zaino si risolve con una tabella per capacità.' },
      { t: '⟦[最長共通部分列|さいちょうきょうつうぶぶんれつ]⟧は、[二|ふた]つの[文字列|もじれつ]の[共通|きょうつう]の[並|なら]びです。', it: 'La sottosequenza comune più lunga è la sequenza condivisa da due stringhe.' },
      { t: '⟦[編集距離|へんしゅうきょり]⟧は、[文字列|もじれつ]を[変|か]える[最小|さいしょう]の[操作|そうさ]の[数|かず]です。', it: 'La distanza di edit è il minimo numero di operazioni per trasformare una stringa.' }
    ],
    gloss: [
      { w: '動的計画法', r: 'どうてきけいかくほう', it: 'programmazione dinamica' },
      { w: '最適部分構造', r: 'さいてきぶぶんこうぞう', it: 'sottostruttura ottima' },
      { w: '重複部分問題', r: 'ちょうふくぶぶんもんだい', it: 'sottoproblemi sovrapposti' },
      { w: '状態', r: 'じょうたい', it: 'stato' },
      { w: '漸化式', r: 'ぜんかしき', it: 'ricorrenza' },
      { w: '硬貨', r: 'こうか', it: 'moneta' },
      { w: 'ナップサック問題', r: 'なっぷさっくもんだい', it: 'problema dello zaino' },
      { w: '最長共通部分列', r: 'さいちょうきょうつうぶぶんれつ', it: 'sottosequenza comune più lunga (LCS)' },
      { w: '編集距離', r: 'へんしゅうきょり', it: 'distanza di edit (Levenshtein)' },
      { w: '文字列', r: 'もじれつ', it: 'stringa' }
    ]
  });

  A('str-opt-grafi', {
    title: { t: 'グラフの[道|みち]と[木|き]と[流|なが]れ', it: 'Grafi: cammini, alberi e flussi' },
    sum: [
      { t: '⟦グラフ⟧の[辺|へん]に[重|おも]みをつけて、[三|みっ]つの[問題|もんだい]を[考|かんが]えます。', it: 'Si danno pesi agli archi del grafo e si studiano tre problemi.' },
      { t: '⟦ダイクストラ[法|ほう]⟧は、マイナスのない[重|おも]みで⟦[最短経路|さいたんけいろ]⟧を[求|もと]めます。', it: 'Dijkstra trova il cammino minimo quando non ci sono pesi negativi.' },
      { t: '[前|まえ]の[点|てん]を[覚|おぼ]えておくと、⟦[経路|けいろ]⟧が[分|わ]かります。', it: 'Ricordando il nodo precedente si ricostruisce il percorso.' },
      { t: '⟦クラスカル[法|ほう]⟧は、[輪|わ]を[作|つく]らない[軽|かる]い[辺|へん]から[足|た]します。', it: 'Kruskal aggiunge gli archi più leggeri che non formano cicli.' },
      { t: '⟦プリム[法|ほう]⟧は、[一|ひと]つの[木|き]を[育|そだ]てていきます。', it: 'Prim fa crescere un unico albero.' },
      { t: '⟦[最大流|さいだいりゅう]⟧は、[容量|ようりょう]の[中|なか]で[流|なが]せる[一番|いちばん]の[量|りょう]です。', it: 'Il flusso massimo è la quantità maggiore che la rete può far passare.' },
      { t: '⟦[最小|さいしょう]カット⟧の[容量|ようりょう]は、[最大流|さいだいりゅう]と[同|おな]じです。', it: 'La capacità del taglio minimo è uguale al flusso massimo.' }
    ],
    gloss: [
      { w: 'グラフ', r: 'ぐらふ', it: 'grafo' },
      { w: 'ダイクストラ法', r: 'だいくすとらほう', it: 'algoritmo di Dijkstra' },
      { w: '最短経路', r: 'さいたんけいろ', it: 'cammino minimo' },
      { w: '経路', r: 'けいろ', it: 'percorso' },
      { w: 'クラスカル法', r: 'くらすかるほう', it: 'algoritmo di Kruskal' },
      { w: 'プリム法', r: 'ぷりむほう', it: 'algoritmo di Prim' },
      { w: '最大流', r: 'さいだいりゅう', it: 'flusso massimo' },
      { w: '最小カット', r: 'さいしょうかっと', it: 'taglio minimo' },
      { w: '容量', r: 'ようりょう', it: 'capacità' }
    ]
  });

  A('str-opt-pianificazione-progetto', {
    title: { t: 'プロジェクトの[計画|けいかく]', it: 'Pianificazione di progetto' },
    sum: [
      { t: '⟦[作業|さぎょう]⟧には、[期間|きかん]と[順番|じゅんばん]の[決|き]まりがあります。', it: 'Ogni attività ha una durata e vincoli di precedenza.' },
      { t: '⟦[前向き計算|まえむきけいさん]⟧は、[一番|いちばん][早|はや]い[開始|かいし]を[求|もと]めます。', it: 'La passata in avanti calcola le date di inizio al più presto.' },
      { t: '⟦[後ろ向き計算|うしろむきけいさん]⟧は、[一番|いちばん][遅|おそ]い[終了|しゅうりょう]を[求|もと]めます。', it: 'La passata all’indietro calcola le date di fine al più tardi.' },
      { t: '⟦スラック⟧がゼロの[作業|さぎょう]が、⟦クリティカルパス⟧です。', it: 'Le attività con slack zero formano il cammino critico.' },
      { t: '⟦フロート⟧は[余裕|よゆう]の[日数|にっすう]で、[共有|きょうゆう]されることがあります。', it: 'Il float è il margine in giorni e può essere condiviso.' },
      { t: '⟦ガントチャート⟧は、[作業|さぎょう]を[時間|じかん]の[棒|ぼう]で[見|み]せます。', it: 'Il diagramma di Gantt mostra le attività come barre nel tempo.' },
      { t: '⟦[三点見積|さんてんみつ]もり⟧で、[不確|ふたし]かな[期間|きかん]を[扱|あつか]います。', it: 'Con la stima a tre valori si trattano le durate incerte.' }
    ],
    gloss: [
      { w: '作業', r: 'さぎょう', it: 'attività' },
      { w: '前向き計算', r: 'まえむきけいさん', it: 'passata in avanti' },
      { w: '後ろ向き計算', r: 'うしろむきけいさん', it: 'passata all’indietro' },
      { w: 'スラック', r: 'すらっく', it: 'slack, margine' },
      { w: 'クリティカルパス', r: 'くりてぃかるぱす', it: 'cammino critico' },
      { w: 'フロート', r: 'ふろーと', it: 'float' },
      { w: 'ガントチャート', r: 'がんとちゃーと', it: 'diagramma di Gantt' },
      { w: '三点見積もり', r: 'さんてんみつもり', it: 'stima a tre valori (PERT)' },
      { w: '期間', r: 'きかん', it: 'durata' }
    ]
  });

  A('str-opt-assegnamento-combinatori', {
    title: { t: '[割当問題|わりあてもんだい]と[組合|くみあ]わせの[問題|もんだい]', it: 'Assegnamento e problemi combinatori' },
    sum: [
      { t: '⟦[割当問題|わりあてもんだい]⟧は、[人|ひと]と[仕事|しごと]を[一|ひと]つずつ[組|く]みます。', it: 'Il problema dell’assegnamento abbina una persona a un compito, uno per uno.' },
      { t: '⟦[欲張|よくば]り[法|ほう]⟧は、[最適|さいてき]から[少|すこ]しずれることがあります。', it: 'Il metodo goloso può scostarsi un poco dall’ottimo.' },
      { t: '⟦ハンガリー[法|ほう]⟧は、[最適|さいてき]な[割当|わりあて]を[見|み]つけます。', it: 'Il metodo ungherese trova l’assegnamento ottimo.' },
      { t: '⟦[巡回|じゅんかい]セールスマン[問題|もんだい]⟧は、[全部|ぜんぶ]の[町|まち]を[回|まわ]る[一番|いちばん][短|みじか]い[道|みち]です。', it: 'Il commesso viaggiatore cerca il giro più breve che visita tutte le città.' },
      { t: '⟦[最近傍法|さいきんぼうほう]⟧は、[一番|いちばん][近|ちか]い[町|まち]へ[行|い]く[速|はや]い[方法|ほうほう]です。', it: 'Il metodo del più vicino è un modo rapido: si va sempre alla città più vicina.' },
      { t: '⟦ツーオプト⟧は、[道|みち]の[一部|いちぶ]を[逆|ぎゃく]にして[良|よ]くします。', it: 'Il 2-opt migliora il giro invertendo un tratto.' },
      { t: '⟦エヌピー[困難|こんなん]⟧な[問題|もんだい]は、いつでも[速|はや]い[方法|ほうほう]が[分|わ]かりません。', it: 'Per i problemi NP-hard non si conosce un metodo sempre veloce.' }
    ],
    gloss: [
      { w: '割当問題', r: 'わりあてもんだい', it: 'problema dell’assegnamento' },
      { w: '欲張り法', r: 'よくばりほう', it: 'metodo goloso (greedy)' },
      { w: 'ハンガリー法', r: 'はんがりーほう', it: 'metodo ungherese' },
      { w: '巡回セールスマン問題', r: 'じゅんかいせーるすまんもんだい', it: 'problema del commesso viaggiatore' },
      { w: '最近傍法', r: 'さいきんぼうほう', it: 'nearest neighbour' },
      { w: 'ツーオプト', r: 'つーおぷと', it: '2-opt' },
      { w: 'エヌピー困難', r: 'えぬぴーこんなん', it: 'NP-hard' },
      { w: '最適', r: 'さいてき', it: 'ottimo' },
      { w: '町', r: 'まち', it: 'città' }
    ]
  });

  A('str-opt-ricerca-locale-bandit', {
    title: { t: '[局所探索|きょくしょたんさく]とバンディット', it: 'Ricerca locale, metaeuristiche e bandit' },
    sum: [
      { t: '⟦[局所探索|きょくしょたんさく]⟧は、[小|ちい]さな[変更|へんこう]で[答|こた]えを[良|よ]くします。', it: 'La ricerca locale migliora la soluzione con piccole modifiche.' },
      { t: '⟦[山登|やまのぼ]り[法|ほう]⟧は、[一番|いちばん]よい[隣|となり]へ[進|すす]みます。', it: 'L’hill climbing va verso il vicino migliore.' },
      { t: '⟦[局所最適|きょくしょさいてき]⟧で[止|と]まる[危険|きけん]があります。', it: 'C’è il rischio di fermarsi in un ottimo locale.' },
      { t: '⟦ランダムリスタート⟧は、いろいろな[場所|ばしょ]からやり[直|なお]します。', it: 'Il random restart riparte da punti diversi.' },
      { t: '⟦[焼|や]きなまし[法|ほう]⟧は、[温度|おんど]が[高|たか]いと[悪|わる]い[手|て]も[受|う]けます。', it: 'La ricottura simulata accetta anche mosse peggiori quando la temperatura è alta.' },
      { t: '⟦[遺伝的|いでんてき]アルゴリズム⟧は、[集団|しゅうだん]を[進化|しんか]させます。', it: 'Gli algoritmi genetici fanno evolvere una popolazione.' },
      { t: '⟦バンディット[問題|もんだい]⟧は、[探索|たんさく]と[活用|かつよう]の[兼|か]ね[合|あ]いです。', it: 'Il problema del bandit è il compromesso fra esplorare e sfruttare.' }
    ],
    gloss: [
      { w: '局所探索', r: 'きょくしょたんさく', it: 'ricerca locale' },
      { w: '山登り法', r: 'やまのぼりほう', it: 'hill climbing' },
      { w: '局所最適', r: 'きょくしょさいてき', it: 'ottimo locale' },
      { w: 'ランダムリスタート', r: 'らんだむりすたーと', it: 'riavvio casuale' },
      { w: '焼きなまし法', r: 'やきなましほう', it: 'ricottura simulata' },
      { w: '遺伝的アルゴリズム', r: 'いでんてきあるごりずむ', it: 'algoritmo genetico' },
      { w: 'バンディット問題', r: 'ばんでぃっともんだい', it: 'problema del bandit' },
      { w: '探索', r: 'たんさく', it: 'esplorazione' },
      { w: '活用', r: 'かつよう', it: 'sfruttamento' }
    ]
  });

  A('str-opt-multiobiettivo-decisioni-reali', {
    title: { t: '[目標|もくひょう]がいくつもある[決|き]め[方|かた]', it: 'Multi-obiettivo e decisioni reali' },
    sum: [
      { t: '⟦[多目的最適化|ためくてきさいてきか]⟧では、[目標|もくひょう]がぶつかります。', it: 'Nell’ottimizzazione multi-obiettivo gli obiettivi sono in conflitto.' },
      { t: '⟦[支配|しはい]⟧されない[選択肢|せんたくし]が、⟦パレート[最適|さいてき]⟧です。', it: 'Le opzioni non dominate sono Pareto-ottimali.' },
      { t: 'パレート[最適|さいてき]の[集|あつ]まりが、⟦パレートフロンティア⟧です。', it: 'L’insieme delle soluzioni Pareto-ottimali è la frontiera di Pareto.' },
      { t: '⟦[加重和|かじゅうわ]⟧は、[目標|もくひょう]に[重|おも]みをつけて[一|ひと]つの[数|かず]にします。', it: 'La somma pesata dà un peso a ogni obiettivo e li riduce a un solo numero.' },
      { t: '[一|ひと]つの[目標|もくひょう]を[残|のこ]し、ほかを⟦[制約|せいやく]⟧にします。', it: 'Si tiene un solo obiettivo e gli altri diventano vincoli.' },
      { t: '⟦[感度分析|かんどぶんせき]⟧で、[重|おも]みを[変|か]えても[結果|けっか]が[同|おな]じか[見|み]ます。', it: 'Con l’analisi di sensibilità si verifica se cambiando i pesi il risultato resta lo stesso.' },
      { t: '⟦ボトルネック⟧を[改善|かいぜん]すれば、[全体|ぜんたい]が[良|よ]くなります。', it: 'Migliorando il collo di bottiglia, migliora tutto il sistema.' }
    ],
    gloss: [
      { w: '多目的最適化', r: 'ためくてきさいてきか', it: 'ottimizzazione multi-obiettivo' },
      { w: '支配', r: 'しはい', it: 'dominanza' },
      { w: 'パレート最適', r: 'ぱれーとさいてき', it: 'ottimo di Pareto' },
      { w: 'パレートフロンティア', r: 'ぱれーとふろんてぃあ', it: 'frontiera di Pareto' },
      { w: '加重和', r: 'かじゅうわ', it: 'somma pesata' },
      { w: '制約', r: 'せいやく', it: 'vincolo' },
      { w: '感度分析', r: 'かんどぶんせき', it: 'analisi di sensibilità' },
      { w: 'ボトルネック', r: 'ぼとるねっく', it: 'collo di bottiglia' },
      { w: '目標', r: 'もくひょう', it: 'obiettivo' }
    ]
  });

})(window.ST = window.ST || {});
