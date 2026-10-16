(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);

  A('moto-citta-e-traffico', {
    title: { t: '[町|まち]と[交通|こうつう]', it: 'Città e traffico' },
    sum: [
      { t: '⟦[町|まち]⟧には[危険|きけん]がたくさんあります。', it: 'In città i pericoli sono moltissimi.' },
      { t: '⟦[事故|じこ]⟧は⟦[交差点|こうさてん]⟧で[多|おお]いです。', it: 'Molti incidenti avvengono agli incroci.' },
      { t: 'ほかの[人|ひと]の[動|うご]きを⟦[予測|よそく]⟧します。', it: 'Si prevede ciò che possono fare gli altri utenti.' },
      { t: '[交差点|こうさてん]の[前|まえ]で、[先|さき]に⟦[減速|げんそく]⟧します。', it: 'Si rallenta prima dell’incrocio, in anticipo.' },
      { t: '⟦[優先権|ゆうせんけん]⟧があっても、[安心|あんしん]できません。', it: 'Anche se hai la precedenza, non puoi stare tranquillo: la precedenza non è un’armatura.' },
      { t: '[指|ゆび]を⟦ブレーキ⟧にかけておきます。', it: 'Tieni le dita sui freni.' },
      { t: '⟦[信号|しんごう]⟧の⟦[黄色|きいろ]⟧は、[早|はや]く[決|き]めます。', it: 'Per il giallo del semaforo, decidi in anticipo.' }
    ],
    gloss: [
      { w: '町', r: 'まち', it: 'città, paese' },
      { w: '事故', r: 'じこ', it: 'incidente' },
      { w: '交差点', r: 'こうさてん', it: 'incrocio' },
      { w: '予測', r: 'よそく', it: 'previsione, anticipazione' },
      { w: '減速', r: 'げんそく', it: 'rallentare' },
      { w: '優先権', r: 'ゆうせんけん', it: 'diritto di precedenza' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: '信号', r: 'しんごう', it: 'semaforo' },
      { w: '黄色', r: 'きいろ', it: 'giallo' }
    ]
  });

  A('moto-urb-percezione-smidsy', {
    title: { t: '[町|まち]の[危険|きけん]と「[見|み]えなかった」', it: 'Rischio urbano e «non l’avevo visto»' },
    sum: [
      { t: '⟦[運転手|うんてんしゅ]⟧は[見|み]ているのに、バイクに[気|き]づきません。', it: 'L’automobilista guarda, ma non si accorge della moto.' },
      { t: '⟦[事故|じこ]⟧の[後|あと]、[見|み]えなかったとよく[言|い]います。', it: 'Dopo un incidente si sente spesso dire «non l’avevo visto».' },
      { t: '⟦[脳|のう]⟧は⟦[予想|よそう]⟧したものを[見|み]ます。', it: 'Il cervello vede ciò che si aspetta.' },
      { t: 'バイクは[細|ほそ]いので、[遠|とお]くて[遅|おそ]く[感|かん]じます。', it: 'La moto è stretta, quindi sembra più lontana e più lenta.' },
      { t: '⟦[視線|しせん]⟧が[合|あ]っても、[見|み]えたとは[限|かぎ]りません。', it: 'Anche se gli sguardi si incrociano, non è detto che ti abbia visto.' },
      { t: '[自分|じぶん]は[見|み]えていないと[思|おも]い、⟦[確認|かくにん]⟧してから[進|すす]みます。', it: 'Parti dal presupposto di non essere visto e procedi solo dopo una conferma.' },
      { t: '⟦[交差点|こうさてん]⟧に[着|つ]く⟦[速度|そくど]⟧が[大切|たいせつ]です。', it: 'La velocità con cui arrivi all’incrocio è decisiva.' }
    ],
    gloss: [
      { w: '運転手', r: 'うんてんしゅ', it: 'conducente' },
      { w: '事故', r: 'じこ', it: 'incidente' },
      { w: '脳', r: 'のう', it: 'cervello' },
      { w: '予想', r: 'よそう', it: 'aspettativa, previsione' },
      { w: '視線', r: 'しせん', it: 'sguardo' },
      { w: '確認', r: 'かくにん', it: 'conferma, verifica' },
      { w: '交差点', r: 'こうさてん', it: 'incrocio' },
      { w: '速度', r: 'そくど', it: 'velocità' }
    ]
  });

  A('moto-urb-angoli-ciechi', {
    title: { t: '[車|くるま]とトラックの[死角|しかく]', it: 'Angoli ciechi di auto e camion' },
    sum: [
      { t: '⟦[死角|しかく]⟧は⟦[運転手|うんてんしゅ]⟧に[見|み]えない[場所|ばしょ]です。', it: 'L’angolo cieco è una zona che il conducente non vede.' },
      { t: '[相手|あいて]の⟦ミラー⟧が[見|み]えなければ、[相手|あいて]にも[見|み]えません。', it: 'Se non vedi il suo specchietto, lui non può vedere te.' },
      { t: '[前|まえ]の⟦ピラー⟧は、バイクを[隠|かく]すことがあります。', it: 'Il montante anteriore può nascondere una moto.' },
      { t: '[車|くるま]の[横|よこ]に[長|なが]くいてはいけません。', it: 'Non restare a lungo affiancato a un’auto.' },
      { t: '⟦トラック⟧の⟦[死角|しかく]⟧は、とても[大|おお]きいです。', it: 'Gli angoli ciechi di un camion sono molto più ampi.' },
      { t: '[曲|ま]がる[時|とき]、[後|うし]ろの⟦[車輪|しゃりん]⟧は⟦[内側|うちがわ]⟧を[通|とお]ります。', it: 'Quando un camion svolta, le ruote posteriori passano all’interno.' },
      { t: 'その⟦[隙間|すきま]⟧に[入|はい]ってはいけません。', it: 'Non infilarti in quel varco.' }
    ],
    gloss: [
      { w: '死角', r: 'しかく', it: 'angolo cieco' },
      { w: '運転手', r: 'うんてんしゅ', it: 'conducente' },
      { w: 'ミラー', r: 'みらー', it: 'specchietto' },
      { w: 'ピラー', r: 'ぴらー', it: 'montante (del parabrezza)' },
      { w: 'トラック', r: 'とらっく', it: 'camion' },
      { w: '車輪', r: 'しゃりん', it: 'ruota' },
      { w: '内側', r: 'うちがわ', it: 'lato interno' },
      { w: '隙間', r: 'すきま', it: 'varco, spazio stretto' }
    ]
  });

  A('moto-urb-incroci-precedenze', {
    title: { t: '[交差点|こうさてん]と[優先|ゆうせん]とロータリー', it: 'Incroci, precedenze e rotatorie' },
    sum: [
      { t: '⟦[交差点|こうさてん]⟧は⟦[事故|じこ]⟧が[起|お]きやすい[場所|ばしょ]です。', it: 'L’incrocio è un luogo dove gli incidenti avvengono facilmente.' },
      { t: '[遠|とお]くから[見|み]て、[手前|てまえ]で⟦[減速|げんそく]⟧します。', it: 'Leggi da lontano e rallenta prima di arrivare.' },
      { t: '[順番|じゅんばん]は[警察官|けいさつかん]、⟦[信号|しんごう]⟧、⟦[標識|ひょうしき]⟧です。', it: 'L’ordine è: agenti, semafori, segnali.' },
      { t: '[規則|きそく]は[今|いま]の[法律|ほうりつ]で[確認|かくにん]します。', it: 'Le regole vanno verificate sul codice vigente.' },
      { t: '⟦[優先権|ゆうせんけん]⟧は[権利|けんり]ですが、[身|み]を[守|まも]れません。', it: 'La precedenza è un diritto, ma non ti protegge.' },
      { t: '⟦[黄色|きいろ]⟧で[判断|はんだん]を[間違|まちが]える[人|ひと]が[多|おお]いです。', it: 'Molti sbagliano la decisione al giallo.' },
      { t: '⟦ロータリー⟧では[中|なか]の[車|くるま]が[先|さき]です。', it: 'In rotatoria, di norma, passa prima chi è già dentro (verifica codice e segnaletica).' }
    ],
    gloss: [
      { w: '交差点', r: 'こうさてん', it: 'incrocio' },
      { w: '事故', r: 'じこ', it: 'incidente' },
      { w: '減速', r: 'げんそく', it: 'rallentare' },
      { w: '信号', r: 'しんごう', it: 'semaforo' },
      { w: '標識', r: 'ひょうしき', it: 'segnale stradale' },
      { w: '優先権', r: 'ゆうせんけん', it: 'diritto di precedenza' },
      { w: '黄色', r: 'きいろ', it: 'giallo' },
      { w: 'ロータリー', r: 'ろーたりー', it: 'rotatoria' },
      { w: '警察官', r: 'けいさつかん', it: 'agente di polizia' }
    ]
  });

  A('moto-urb-spazio-arresto', {
    title: { t: '[止|と]まるための[距離|きょり]', it: 'Spazio di fuga e distanza di sicurezza' },
    sum: [
      { t: '⟦[停止距離|ていしきょり]⟧は⟦[反応|はんのう]⟧と⟦ブレーキ⟧の[合計|ごうけい]です。', it: 'Lo spazio di arresto è la somma di reazione e frenata.' },
      { t: '⟦[時速|じそく]⟧50キロで、[乾|かわ]いた[道|みち]は27.7メートルです。', it: 'A 50 km/h, sull’asciutto, sono 27,7 metri.' },
      { t: '⟦[路面|ろめん]⟧が[濡|ぬ]れると、38メートルになります。', it: 'Se il fondo è bagnato, diventano 38 metri.' },
      { t: '⟦[速度|そくど]⟧を[半分|はんぶん]にすると、10.4メートルです。', it: 'Dimezzando la velocità, sono 10,4 metri.' },
      { t: '[衝突|しょうとつ]の⟦エネルギー⟧は[速度|そくど]の[二乗|にじょう]で[増|ふ]えます。', it: 'L’energia dell’urto cresce con il quadrato della velocità.' },
      { t: '[前|まえ]の[車|くるま]との⟦[間隔|かんかく]⟧は[最低|さいてい]2[秒|びょう]です。', it: 'La distanza dal veicolo davanti è di almeno 2 secondi.' },
      { t: '[濡|ぬ]れた[道|みち]では、3から4[秒|びょう]にします。', it: 'Sul bagnato si porta a 3–4 secondi.' }
    ],
    gloss: [
      { w: '停止距離', r: 'ていしきょり', it: 'spazio di arresto' },
      { w: '反応', r: 'はんのう', it: 'reazione' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno, frenata' },
      { w: '時速', r: 'じそく', it: 'velocità oraria' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: 'エネルギー', r: 'えねるぎー', it: 'energia' },
      { w: '間隔', r: 'かんかく', it: 'distanza, intervallo' }
    ]
  });

  A('moto-urb-fondi-rotaie-bagnato', {
    title: { t: '[町|まち]の[路面|ろめん]: レール、マンホール、[雨|あめ]', it: 'Fondo urbano: rotaie, tombini, strisce e bagnato' },
    sum: [
      { t: '[町|まち]の⟦[路面|ろめん]⟧は、[場所|ばしょ]によって[違|ちが]います。', it: 'Il fondo in città cambia da un punto all’altro.' },
      { t: '[道路|どうろ]の⟦ペイント⟧は、[濡|ぬ]れると[滑|すべ]ります。', it: 'La vernice stradale, quando è bagnata, scivola.' },
      { t: '⟦マンホール⟧は、[濡|ぬ]れるととても[滑|すべ]ります。', it: 'I tombini, bagnati, sono molto scivolosi.' },
      { t: '⟦レール⟧は、⟦[直角|ちょっかく]⟧に[近|ちか]い[角度|かくど]で[渡|わた]ります。', it: 'Le rotaie si attraversano con un angolo il più possibile vicino al perpendicolare.' },
      { t: '⟦ブレーキ⟧は、[渡|わた]る[前|まえ]にかけます。', it: 'Frena prima di attraversare, non sopra.' },
      { t: '⟦[雨|あめ]⟧の[降|ふ]り[始|はじ]めが、[一番|いちばん][危|あぶ]ないです。', it: 'L’inizio della pioggia è il momento più pericoloso.' },
      { t: '⟦[横断歩道|おうだんほどう]⟧の[前|まえ]で、[減速|げんそく]します。', it: 'Prima delle strisce pedonali si rallenta.' }
    ],
    gloss: [
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: 'ペイント', r: 'ぺいんと', it: 'vernice' },
      { w: 'マンホール', r: 'まんほーる', it: 'tombino' },
      { w: 'レール', r: 'れーる', it: 'rotaia' },
      { w: '直角', r: 'ちょっかく', it: 'angolo retto, perpendicolare' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: '雨', r: 'あめ', it: 'pioggia' },
      { w: '横断歩道', r: 'おうだんほどう', it: 'strisce pedonali' }
    ]
  });

  A('moto-urb-utenti-vulnerabili', {
    title: { t: '[歩行者|ほこうしゃ]と[自転車|じてんしゃ]とドア', it: 'Pedoni, ciclisti, monopattini e portiere' },
    sum: [
      { t: '⟦[歩行者|ほこうしゃ]⟧や⟦[電動|でんどう]キックボード⟧は、[弱|よわ]い⟦[立場|たちば]⟧です。', it: 'Pedoni e monopattini elettrici sono utenti più vulnerabili.' },
      { t: '[止|と]まった[車|くるま]の⟦[陰|かげ]⟧から[人|ひと]が[出|で]てきます。', it: 'Le persone spuntano da dietro i veicoli fermi.' },
      { t: '15メートル[先|さき]に[人|ひと]が[出|で]ても、⟦[時速|じそく]⟧30キロなら[止|と]まれます。', it: 'Se una persona compare a 15 metri, a 30 km/h riesci a fermarti.' },
      { t: '⟦[時速|じそく]⟧40キロでは[止|と]まれず、ぶつかります。', it: 'A 40 km/h non riesci a fermarti e urti.' },
      { t: '⟦[自転車|じてんしゃ]⟧を[追|お]い[越|こ]す[時|とき]は、[横|よこ]を[広|ひろ]く[空|あ]けます。', it: 'Quando sorpassi un ciclista, lascia molto spazio laterale.' },
      { t: '⟦ドア⟧が[開|あ]くので、[止|と]まった[車|くるま]から[少|すく]なくとも1メートル[離|はな]れます。', it: 'Le portiere si aprono: stai ad almeno 1 metro dalle auto ferme.' },
      { t: '[細|こま]かい[規則|きそく]は、[今|いま]の⟦[法律|ほうりつ]⟧で[確認|かくにん]します。', it: 'Le regole di dettaglio vanno verificate sul codice vigente.' }
    ],
    gloss: [
      { w: '歩行者', r: 'ほこうしゃ', it: 'pedone' },
      { w: '電動キックボード', r: 'でんどうきっくぼーど', it: 'monopattino elettrico' },
      { w: '立場', r: 'たちば', it: 'posizione, condizione' },
      { w: '陰', r: 'かげ', it: 'ombra, dietro (qualcosa)' },
      { w: '時速', r: 'じそく', it: 'velocità oraria' },
      { w: '自転車', r: 'じてんしゃ', it: 'bicicletta, ciclista' },
      { w: 'ドア', r: 'どあ', it: 'portiera' },
      { w: '法律', r: 'ほうりつ', it: 'legge, codice' }
    ]
  });

  A('moto-urb-filtraggio', {
    title: { t: '[車|くるま]の[列|れつ]の[間|あいだ]を[走|はし]ること', it: 'Filtraggio e marcia tra le file' },
    sum: [
      { t: '[車|くるま]の[列|れつ]の[間|あいだ]を[走|はし]ることを、⟦フィルタリング⟧と[言|い]います。', it: 'Muoversi tra le file di veicoli si chiama filtraggio.' },
      { t: '[多|おお]くの[人|ひと]がしても、⟦[合法|ごうほう]⟧で[安全|あんぜん]とは[限|かぎ]りません。', it: 'Anche se molti lo fanno, non è detto che sia lecito e sicuro.' },
      { t: 'イタリアでは、⟦[法律|ほうりつ]⟧にはっきりした[決|き]まりがありません。', it: 'In Italia il codice non lo disciplina in modo esplicito.' },
      { t: '[今|いま]の[法律|ほうりつ]を⟦[確認|かくにん]⟧し、[分|わ]からなければしません。', it: 'Verifica il codice vigente e, se non sei sicuro, non farlo.' },
      { t: '⟦[隙間|すきま]⟧は、[片側|かたがわ]55センチだけです。', it: 'Lo spazio è di soli 55 centimetri per lato.' },
      { t: '⟦ドア⟧が[急|きゅう]に[開|あ]くので、[危|あぶ]ないです。', it: 'Le portiere si aprono all’improvviso: è pericoloso.' },
      { t: '[節約|せつやく]できる⟦[時間|じかん]⟧は[少|すく]なく、⟦[危険|きけん]⟧は[大|おお]きいです。', it: 'Il tempo che si risparmia è poco, il rischio è grande.' }
    ],
    gloss: [
      { w: 'フィルタリング', r: 'ふぃるたりんぐ', it: 'filtraggio' },
      { w: '合法', r: 'ごうほう', it: 'lecito, legale' },
      { w: '法律', r: 'ほうりつ', it: 'legge, codice' },
      { w: '確認', r: 'かくにん', it: 'verifica' },
      { w: '隙間', r: 'すきま', it: 'spazio stretto' },
      { w: 'ドア', r: 'どあ', it: 'portiera' },
      { w: '時間', r: 'じかん', it: 'tempo' },
      { w: '危険', r: 'きけん', it: 'pericolo, rischio' }
    ]
  });

  A('moto-urb-manovre-parcheggio', {
    title: { t: '[低速|ていそく]の[操作|そうさ]と[駐車|ちゅうしゃ]', it: 'Manovre a bassa velocità e parcheggio' },
    sum: [
      { t: '⟦[転倒|てんとう]⟧は、ほとんど[止|と]まった[時|とき]に[多|おお]いです。', it: 'Le cadute avvengono spesso da fermi o quasi.' },
      { t: '⟦[視線|しせん]⟧は、[行|い]きたい[方向|ほうこう]に[向|む]けます。', it: 'Lo sguardo va dove vuoi andare.' },
      { t: '⟦クラッチ⟧を[少|すこ]しつないで、[速度|そくど]を[調整|ちょうせい]します。', it: 'Si tiene la frizione appena innestata per regolare la velocità.' },
      { t: '[後|うし]ろの⟦ブレーキ⟧を、[足|あし]で[軽|かる]く[使|つか]います。', it: 'Si usa dolcemente il freno posteriore con il piede.' },
      { t: '⟦ハンドル⟧を[切|き]った[時|とき]、[前|まえ]のブレーキは[危険|きけん]です。', it: 'Con lo sterzo girato, il freno anteriore è pericoloso.' },
      { t: '⟦[坂道|さかみち]⟧では、⟦ギア⟧を[入|い]れたままにします。', it: 'In pendenza si lascia la marcia inserita.' },
      { t: '⟦スタンド⟧は、[柔|やわ]らかい[地面|じめん]で[沈|しず]みます。', it: 'Il cavalletto affonda su un terreno morbido.' }
    ],
    gloss: [
      { w: '転倒', r: 'てんとう', it: 'caduta' },
      { w: '視線', r: 'しせん', it: 'sguardo' },
      { w: 'クラッチ', r: 'くらっち', it: 'frizione' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: 'ハンドル', r: 'はんどる', it: 'manubrio, sterzo' },
      { w: '坂道', r: 'さかみち', it: 'strada in pendenza' },
      { w: 'ギア', r: 'ぎあ', it: 'marcia' },
      { w: 'スタンド', r: 'すたんど', it: 'cavalletto' }
    ]
  });

  A('moto-urb-visibilita-notte-pioggia', {
    title: { t: '[夜|よる]と[雨|あめ]の[視界|しかい]', it: 'Visibilità, notte e pioggia' },
    sum: [
      { t: '⟦[視界|しかい]⟧の[中|なか]で[止|と]まれる⟦[速度|そくど]⟧にします。', it: 'Vai a una velocità che ti permetta di fermarti entro lo spazio che vedi.' },
      { t: '⟦[反射材|はんしゃざい]⟧の[服|ふく]は、[夜|よる]に[役|やく]に[立|た]ちます。', it: 'Un abbigliamento riflettente è utile di notte.' },
      { t: '[昼|ひる]の⟦ライト⟧の[義務|ぎむ]は、[法律|ほうりつ]で[確認|かくにん]します。', it: 'L’obbligo delle luci di giorno si verifica sul codice.' },
      { t: '[前|まえ]に[車|くるま]がいる[時|とき]は、⟦ハイビーム⟧を[消|け]します。', it: 'Quando c’è un veicolo davanti, si spegne l’abbagliante.' },
      { t: '[暗|くら]い[服|ふく]の⟦[歩行者|ほこうしゃ]⟧は、25メートルでやっと[見|み]えます。', it: 'Un pedone vestito di scuro si vede appena a 25 metri.' },
      { t: '⟦[時速|じそく]⟧50キロでは、[止|と]まれません。', it: 'A 50 km/h non riesci a fermarti.' },
      { t: '⟦[雨|あめ]⟧の[夜|よる]は、40キロより[遅|おそ]く[走|はし]ります。', it: 'Nelle notti di pioggia si va a meno di 40 km/h.' }
    ],
    gloss: [
      { w: '視界', r: 'しかい', it: 'campo visivo, visibilità' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '反射材', r: 'はんしゃざい', it: 'materiale riflettente' },
      { w: 'ライト', r: 'らいと', it: 'luce, faro' },
      { w: 'ハイビーム', r: 'はいびーむ', it: 'abbagliante' },
      { w: '歩行者', r: 'ほこうしゃ', it: 'pedone' },
      { w: '時速', r: 'じそく', it: 'velocità oraria' },
      { w: '雨', r: 'あめ', it: 'pioggia' },
      { w: '法律', r: 'ほうりつ', it: 'legge, codice' }
    ]
  });

  A('moto-urb-scenari-scooter-passeggero', {
    title: { t: 'スクーターと[同乗者|どうじょうしゃ]と[判断|はんだん]', it: 'Scooter, passeggero e scenari di decisione' },
    sum: [
      { t: '⟦スクーター⟧は[悪|わる]い⟦[路面|ろめん]⟧で⟦[減速|げんそく]⟧します。', it: 'Con lo scooter, sui fondi cattivi si rallenta.' },
      { t: '⟦[同乗者|どうじょうしゃ]⟧がいると、[止|と]まる[距離|きょり]が[延|の]びます。', it: 'Con un passeggero lo spazio di arresto si allunga.' },
      { t: '[同乗者|どうじょうしゃ]は⟦ヘルメット⟧をしっかり[着|つ]けます。', it: 'Il passeggero indossa bene il casco.' },
      { t: '[年齢|ねんれい]などの[条件|じょうけん]は、[今|いま]の⟦[法律|ほうりつ]⟧で[確認|かくにん]します。', it: 'Età e altri requisiti si verificano sul codice vigente.' },
      { t: '[止|と]まった[車|くるま]がある⟦[交差点|こうさてん]⟧では、30キロに[減速|げんそく]します。', it: 'A un incrocio con un’auto ferma si rallenta a 30 km/h.' },
      { t: '[止|と]まった⟦バス⟧は、[追|お]い[越|こ]しません。', it: 'Un autobus fermo non si sorpassa.' },
      { t: '⟦トラック⟧の[横|よこ]の⟦[隙間|すきま]⟧には、[入|はい]りません。', it: 'Non ci si infila nel varco accanto a un camion.' }
    ],
    gloss: [
      { w: 'スクーター', r: 'すくーたー', it: 'scooter' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '減速', r: 'げんそく', it: 'rallentare' },
      { w: '同乗者', r: 'どうじょうしゃ', it: 'passeggero' },
      { w: 'ヘルメット', r: 'へるめっと', it: 'casco' },
      { w: '法律', r: 'ほうりつ', it: 'legge, codice' },
      { w: '交差点', r: 'こうさてん', it: 'incrocio' },
      { w: 'バス', r: 'ばす', it: 'autobus' },
      { w: 'トラック', r: 'とらっく', it: 'camion' },
      { w: '隙間', r: 'すきま', it: 'varco, spazio stretto' }
    ]
  });
})(window.ST = window.ST || {});
