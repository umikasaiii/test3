(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);

  A('moto-tipi-di-moto', {
    title: { t: 'バイクの[種類|しゅるい]', it: 'I tipi di moto' },
    sum: [
      { t: '[一番|いちばん]いいバイクは、ありません。', it: 'Non esiste «la moto migliore».' },
      { t: 'バイクは⟦[種類|しゅるい]⟧で[使|つか]い[方|かた]が[違|ちが]います。', it: 'L’uso della moto cambia secondo il tipo.' },
      { t: '⟦ネイキッド⟧は、[町|まち]や[普通|ふつう]の[道|みち]に[向|む]いています。', it: 'La naked è adatta a città e strade normali.' },
      { t: '⟦ツーリング⟧は[旅|たび]に[向|む]いていますが、[重|おも]いです。', it: 'La touring è adatta ai viaggi, ma è pesante.' },
      { t: '⟦スクーター⟧は[自動|じどう]のギアです。', it: 'Lo scooter ha il cambio automatico.' },
      { t: '⟦クロス⟧は[公道|こうどう]を[走|はし]れません。', it: 'La cross non può circolare su strada.' },
      { t: '⟦[出力|しゅつりょく]⟧と[重|おも]さの[比|ひ]も[大切|たいせつ]です。', it: 'Anche il rapporto tra potenza e peso conta.' }
    ],
    gloss: [
      { w: '種類', r: 'しゅるい', it: 'tipo, genere' },
      { w: 'ネイキッド', r: 'ねいきっど', it: 'naked (senza carena)' },
      { w: 'ツーリング', r: 'つーりんぐ', it: 'touring' },
      { w: 'スクーター', r: 'すくーたー', it: 'scooter' },
      { w: 'クロス', r: 'くろす', it: 'cross' },
      { w: '出力', r: 'しゅつりょく', it: 'potenza' },
      { w: '公道', r: 'こうどう', it: 'strada pubblica' },
      { w: '自動', r: 'じどう', it: 'automatico' },
      { w: '普通', r: 'ふつう', it: 'normale' }
    ]
  });

  A('moto-anatomia-e-comandi', {
    title: { t: 'バイクの[部品|ぶひん]と[操作|そうさ]', it: 'Parti, comandi e spie della moto' },
    sum: [
      { t: '[右|みぎ]の[手|て]で、⟦アクセル⟧と[前|まえ]の⟦ブレーキ⟧を[使|つか]います。', it: 'Con la mano destra si usano il gas e il freno anteriore.' },
      { t: '[前|まえ]のブレーキが[一番|いちばん][強|つよ]いです。', it: 'Il freno anteriore è il più potente.' },
      { t: '[左|ひだり]の[手|て]で、⟦クラッチ⟧を[使|つか]います。', it: 'Con la mano sinistra si usa la frizione.' },
      { t: '⟦クラッチ⟧を[引|ひ]くと、エンジンの[力|ちから]は[伝|つた]わりません。', it: 'Tirando la frizione, la forza del motore non arriva alla ruota.' },
      { t: '[左|ひだり]の[足|あし]で⟦ギア⟧を[変|か]えます。', it: 'Con il piede sinistro si cambia marcia.' },
      { t: '⟦メーター⟧は[速度|そくど]とエンジンの[回転|かいてん]を[示|しめ]します。', it: 'La strumentazione mostra la velocità e i giri del motore.' },
      { t: '⟦[警告灯|けいこくとう]⟧の[赤|あか]は、[危険|きけん]か[故障|こしょう]のしるしです。', it: 'La spia rossa indica un pericolo o un guasto.' }
    ],
    gloss: [
      { w: 'アクセル', r: 'あくせる', it: 'acceleratore, gas' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: 'クラッチ', r: 'くらっち', it: 'frizione' },
      { w: 'ギア', r: 'ぎあ', it: 'marcia, cambio' },
      { w: 'メーター', r: 'めーたー', it: 'strumentazione, contatori' },
      { w: '警告灯', r: 'けいこくとう', it: 'spia luminosa' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '回転', r: 'かいてん', it: 'rotazione, giri' },
      { w: '故障', r: 'こしょう', it: 'guasto' },
      { w: '危険', r: 'きけん', it: 'pericolo' }
    ]
  });

  A('moto-equipaggiamento-e-sicurezza-passiva', {
    title: { t: '[身|み]を[守|まも]る[装備|そうび]', it: 'Equipaggiamento e sicurezza passiva' },
    sum: [
      { t: '[事故|じこ]を[防|ふせ]ぐことも、[被害|ひがい]を[減|へ]らすことも[必要|ひつよう]です。', it: 'Serve sia evitare l’incidente sia ridurre i danni.' },
      { t: '⟦ヘルメット⟧は[法律|ほうりつ]で[義務|ぎむ]です。', it: 'Il casco è obbligatorio per legge.' },
      { t: '⟦ヘルメット⟧は⟦[認証|にんしょう]⟧を[受|う]けたものを[使|つか]います。', it: 'Si usa un casco omologato.' },
      { t: '⟦[転倒|てんとう]⟧した[後|あと]は、ヘルメットを[交換|こうかん]します。', it: 'Dopo una caduta si sostituisce il casco.' },
      { t: '[手|て]と[足首|あしくび]はけがをしやすいので、⟦[手袋|てぶくろ]⟧と⟦ブーツ⟧を[着|つ]けます。', it: 'Mani e caviglie si feriscono facilmente: si indossano guanti e stivali.' },
      { t: '⟦ジャケット⟧とズボンには⟦プロテクター⟧が[入|はい]っています。', it: 'Giacca e pantaloni hanno le protezioni all’interno.' },
      { t: '⟦エアバッグ⟧は、[転倒|てんとう]を[感|かん]じると[膨|ふく]らみます。', it: 'L’airbag si gonfia quando rileva una caduta.' }
    ],
    gloss: [
      { w: 'ヘルメット', r: 'へるめっと', it: 'casco' },
      { w: '認証', r: 'にんしょう', it: 'omologazione, certificazione' },
      { w: '転倒', r: 'てんとう', it: 'caduta' },
      { w: '手袋', r: 'てぶくろ', it: 'guanti' },
      { w: 'ブーツ', r: 'ぶーつ', it: 'stivali' },
      { w: 'ジャケット', r: 'じゃけっと', it: 'giacca' },
      { w: 'プロテクター', r: 'ぷろてくたー', it: 'protezione, paraschiena' },
      { w: 'エアバッグ', r: 'えあばっぐ', it: 'airbag' },
      { w: '被害', r: 'ひがい', it: 'danno' },
      { w: '義務', r: 'ぎむ', it: 'obbligo' }
    ]
  });

  A('moto-patenti-codice-e-documenti', {
    title: { t: '[免許|めんきょ]と[書類|しょるい]', it: 'Patenti, codice e documenti' },
    sum: [
      { t: '⟦[免許|めんきょ]⟧には、エーエムやエーなどの[種類|しゅるい]があります。', it: 'La patente ha categorie come AM e A.' },
      { t: '⟦カテゴリー⟧は、[出力|しゅつりょく]が[大|おお]きくなる[順|じゅん]です。', it: 'Le categorie vanno in ordine crescente di potenza.' },
      { t: 'エーワンとエーツーには、[出力|しゅつりょく]と[重|おも]さの⟦[制限|せいげん]⟧があります。', it: 'A1 e A2 hanno limiti di potenza e di peso.' },
      { t: '⟦[免許証|めんきょしょう]⟧とバイクの⟦[書類|しょるい]⟧を[持|も]ちます。', it: 'Si portano con sé la patente e i documenti della moto.' },
      { t: '⟦[保険|ほけん]⟧は[必|かなら]ず[必要|ひつよう]です。', it: 'L’assicurazione è sempre obbligatoria.' },
      { t: 'ほかの[人|ひと]への[被害|ひがい]を、[保険|ほけん]がカバーします。', it: 'L’assicurazione copre i danni causati agli altri.' },
      { t: '⟦[法律|ほうりつ]⟧は[変|か]わるので、[公式|こうしき]な[情報|じょうほう]を[確認|かくにん]します。', it: 'Le norme cambiano: si verificano le fonti ufficiali.' }
    ],
    gloss: [
      { w: '免許', r: 'めんきょ', it: 'patente, licenza' },
      { w: 'カテゴリー', r: 'かてごりー', it: 'categoria' },
      { w: '制限', r: 'せいげん', it: 'limite' },
      { w: '免許証', r: 'めんきょしょう', it: 'patente (documento)' },
      { w: '書類', r: 'しょるい', it: 'documenti' },
      { w: '保険', r: 'ほけん', it: 'assicurazione' },
      { w: '法律', r: 'ほうりつ', it: 'legge, norma' },
      { w: '出力', r: 'しゅつりょく', it: 'potenza' },
      { w: '確認', r: 'かくにん', it: 'verificare' }
    ]
  });

  A('moto-controlli-prima-di-partire', {
    title: { t: '[出発|しゅっぱつ]の[前|まえ]の[点検|てんけん]', it: 'Controlli prima di partire' },
    sum: [
      { t: '[出発|しゅっぱつ]の[前|まえ]に、[二分|にふん]の⟦[点検|てんけん]⟧をします。', it: 'Prima di partire si fa un controllo di due minuti.' },
      { t: 'いつも[同|おな]じ[順番|じゅんばん]で、バイクのまわりを[見|み]ます。', it: 'Si guarda attorno alla moto sempre nello stesso ordine.' },
      { t: '⟦タイヤ⟧の⟦[空気圧|くうきあつ]⟧は、[冷|つめ]たい[時|とき]に[測|はか]ります。', it: 'La pressione delle gomme si misura a freddo.' },
      { t: '⟦ブレーキ⟧が[効|き]くか[試|ため]します。', it: 'Si prova se i freni funzionano.' },
      { t: '⟦ライト⟧と⟦ウインカー⟧も[確認|かくにん]します。', it: 'Si controllano anche le luci e le frecce.' },
      { t: 'ブレーキランプは、[前|まえ]と[後|うし]ろの[両方|りょうほう]で[確認|かくにん]します。', it: 'La luce di stop si controlla con entrambi i freni.' },
      { t: '⟦オイル⟧の[量|りょう]と⟦チェーン⟧の[状態|じょうたい]も[見|み]ます。', it: 'Si guardano anche il livello dell’olio e lo stato della catena.' }
    ],
    gloss: [
      { w: '点検', r: 'てんけん', it: 'controllo, ispezione' },
      { w: 'タイヤ', r: 'たいや', it: 'pneumatico' },
      { w: '空気圧', r: 'くうきあつ', it: 'pressione dell’aria' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: 'ライト', r: 'らいと', it: 'luce, faro' },
      { w: 'ウインカー', r: 'ういんかー', it: 'freccia' },
      { w: 'オイル', r: 'おいる', it: 'olio' },
      { w: 'チェーン', r: 'ちぇーん', it: 'catena' },
      { w: '出発', r: 'しゅっぱつ', it: 'partenza' }
    ]
  });

  A('moto-posizione-equilibrio-primi-movimenti', {
    title: { t: '[姿勢|しせい]とバランス', it: 'Posizione, equilibrio e primi movimenti' },
    sum: [
      { t: '⟦[姿勢|しせい]⟧がよいと、[疲|つか]れにくくなります。', it: 'Con una buona posizione ci si stanca meno.' },
      { t: '[膝|ひざ]でタンクを[挟|はさ]みます。', it: 'Si stringe il serbatoio con le ginocchia.' },
      { t: '⟦[視線|しせん]⟧は、[行|い]きたい[方向|ほうこう]に[向|む]けます。', it: 'Lo sguardo va rivolto dove si vuole andare.' },
      { t: '⟦[低速|ていそく]⟧では、バイクは⟦[不安定|ふあんてい]⟧です。', it: 'A bassa velocità la moto è instabile.' },
      { t: '⟦クラッチ⟧をゆっくり[離|はな]すと、バイクが[動|うご]き[始|はじ]めます。', it: 'Rilasciando piano la frizione, la moto comincia a muoversi.' },
      { t: '⟦ギア⟧を[変|か]える[時|とき]は、クラッチを[引|ひ]きます。', it: 'Per cambiare marcia si tira la frizione.' },
      { t: '[車|くるま]や[人|ひと]のいない[広|ひろ]い[場所|ばしょ]で、⟦[練習|れんしゅう]⟧します。', it: 'Ci si esercita in un luogo ampio senza auto né persone.' }
    ],
    gloss: [
      { w: '姿勢', r: 'しせい', it: 'posizione, postura' },
      { w: '視線', r: 'しせん', it: 'sguardo' },
      { w: '低速', r: 'ていそく', it: 'bassa velocità' },
      { w: '不安定', r: 'ふあんてい', it: 'instabile' },
      { w: 'クラッチ', r: 'くらっち', it: 'frizione' },
      { w: 'ギア', r: 'ぎあ', it: 'marcia' },
      { w: '練習', r: 'れんしゅう', it: 'esercizio, allenamento' },
      { w: '方向', r: 'ほうこう', it: 'direzione' },
      { w: '場所', r: 'ばしょ', it: 'luogo' }
    ]
  });

  A('moto-frenata-abs-e-aiuti-elettronici', {
    title: { t: 'ブレーキとエービーエス', it: 'Frenata, ABS e aiuti elettronici' },
    sum: [
      { t: '⟦ブレーキ⟧は、[前|まえ]と[後|うし]ろに[二|ふた]つあります。', it: 'I freni sono due, davanti e dietro.' },
      { t: '⟦[荷重移動|かじゅういどう]⟧で、[重|おも]さが[前|まえ]に[移|うつ]ります。', it: 'Col trasferimento di carico il peso si sposta in avanti.' },
      { t: 'だから[前|まえ]のブレーキが[一番|いちばん][強|つよ]いです。', it: 'Per questo il freno anteriore è il più potente.' },
      { t: 'ブレーキは、[少|すこ]しずつ[強|つよ]く[握|にぎ]ります。', it: 'Il freno si stringe in modo progressivo.' },
      { t: '⟦エービーエス⟧は、タイヤが⟦ロック⟧するのを[防|ふせ]ぎます。', it: 'L’ABS evita che le ruote si blocchino.' },
      { t: '⟦エービーエス⟧でも、⟦[停止距離|ていしきょり]⟧が[必|かなら]ず[短|みじか]くなるとは[限|かぎ]りません。', it: 'Anche con l’ABS, lo spazio di arresto non sempre si accorcia.' },
      { t: '⟦トラクションコントロール⟧は、⟦スリップ⟧を[抑|おさ]えます。', it: 'Il controllo di trazione limita il pattinamento.' }
    ],
    gloss: [
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: '荷重移動', r: 'かじゅういどう', it: 'trasferimento di carico' },
      { w: 'エービーエス', r: 'えーびーえす', it: 'ABS' },
      { w: 'ロック', r: 'ろっく', it: 'bloccaggio' },
      { w: '停止距離', r: 'ていしきょり', it: 'spazio di arresto' },
      { w: 'トラクションコントロール', r: 'とらくしょんこんとろーる', it: 'controllo di trazione' },
      { w: 'スリップ', r: 'すりっぷ', it: 'pattinamento' },
      { w: '前輪', r: 'ぜんりん', it: 'ruota anteriore' },
      { w: '後輪', r: 'こうりん', it: 'ruota posteriore' }
    ]
  });

  A('moto-scegliere-la-prima-moto', {
    title: { t: '[最初|さいしょ]のバイクの[選|えら]び[方|かた]', it: 'Scegliere la prima moto' },
    sum: [
      { t: '[最初|さいしょ]のバイクは、[早|はや]く[安心|あんしん]して[覚|おぼ]えられるものを[選|えら]びます。', it: 'La prima moto è quella con cui impari in fretta e senza spaventarti.' },
      { t: '⟦[出力|しゅつりょく]⟧は⟦[排気量|はいきりょう]⟧より[大切|たいせつ]です。', it: 'La potenza conta più della cilindrata.' },
      { t: '⟦シート⟧の[高|たか]さは、[止|と]まった[時|とき]に[足|あし]が[着|つ]くかで[決|き]めます。', it: 'L’altezza della sella si sceglie in base a se, da fermo, i piedi toccano terra.' },
      { t: '⟦[重量|じゅうりょう]⟧が[大|おお]きすぎると、[倒|たお]れた[時|とき]に[起|お]こせません。', it: 'Se il peso è troppo grande, dopo una caduta non riesci a rialzarla.' },
      { t: '⟦[保険|ほけん]⟧や⟦[税金|ぜいきん]⟧など、[毎年|まいとし]のお[金|かね]もかかります。', it: 'Ogni anno ci sono costi come assicurazione e tasse.' },
      { t: '⟦[講習|こうしゅう]⟧で、インストラクターから[学|まな]びます。', it: 'Nei corsi si impara da un istruttore.' },
      { t: '⟦[中古|ちゅうこ]⟧のバイクは[安|やす]いですが、[隠|かく]れた[欠点|けってん]があるかもしれません。', it: 'La moto usata costa meno, ma può avere difetti nascosti.' }
    ],
    gloss: [
      { w: '出力', r: 'しゅつりょく', it: 'potenza' },
      { w: '排気量', r: 'はいきりょう', it: 'cilindrata' },
      { w: 'シート', r: 'しーと', it: 'sella' },
      { w: '重量', r: 'じゅうりょう', it: 'peso' },
      { w: '保険', r: 'ほけん', it: 'assicurazione' },
      { w: '税金', r: 'ぜいきん', it: 'tasse' },
      { w: '講習', r: 'こうしゅう', it: 'corso' },
      { w: '中古', r: 'ちゅうこ', it: 'usato' },
      { w: '欠点', r: 'けってん', it: 'difetto' }
    ]
  });

  A('moto-rischio-e-statistica', {
    title: { t: 'リスクと[統計|とうけい]', it: 'Percezione del rischio e statistica' },
    sum: [
      { t: 'バイクは、[車|くるま]より⟦リスク⟧が[高|たか]いです。', it: 'In moto il rischio è più alto che in auto.' },
      { t: '[感覚|かんかく]ではなく、⟦[統計|とうけい]⟧で[考|かんが]えます。', it: 'Il rischio si valuta con le statistiche, non a sensazione.' },
      { t: '⟦[交差点|こうさてん]⟧では、[車|くるま]が[譲|ゆず]らないことがあります。', it: 'Agli incroci a volte l’auto non dà la precedenza.' },
      { t: '⟦[運動|うんどう]エネルギー⟧は、[速度|そくど]の⟦[二乗|にじょう]⟧に[比例|ひれい]します。', it: 'L’energia cinetica dipende dal quadrato della velocità.' },
      { t: '⟦マージン⟧は、[必要|ひつよう]な[距離|きょり]や[時間|じかん]より[多|おお]い[分|ぶん]です。', it: 'Il margine è lo spazio o il tempo in più del necessario.' },
      { t: '⟦[自信過剰|じしんかじょう]⟧は、[危険|きけん]な[考|かんが]え[方|かた]です。', it: 'L’eccesso di fiducia è un modo di pensare pericoloso.' },
      { t: '[速度|そくど]は、[止|と]まれる[距離|きょり]が[見|み]える[範囲|はんい]に[入|はい]るように[選|えら]びます。', it: 'La velocità si sceglie in modo che lo spazio di arresto stia dentro lo spazio visibile.' }
    ],
    gloss: [
      { w: 'リスク', r: 'りすく', it: 'rischio' },
      { w: '統計', r: 'とうけい', it: 'statistica' },
      { w: '交差点', r: 'こうさてん', it: 'incrocio' },
      { w: '運動エネルギー', r: 'うんどうえねるぎー', it: 'energia cinetica' },
      { w: '二乗', r: 'にじょう', it: 'quadrato (al quadrato)' },
      { w: 'マージン', r: 'まーじん', it: 'margine' },
      { w: '自信過剰', r: 'じしんかじょう', it: 'eccesso di fiducia' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: '距離', r: 'きょり', it: 'distanza' }
    ]
  });

  A('moto-visione-e-distanza', {
    title: { t: '[見|み]ることと[車間距離|しゃかんきょり]', it: 'Visione, attenzione e distanza di sicurezza' },
    sum: [
      { t: '[遠|とお]くを[見|み]ると、⟦[余裕|よゆう]⟧ができます。', it: 'Guardando lontano si guadagna margine di tempo.' },
      { t: '⟦[視線|しせん]⟧が[向|む]く[方向|ほうこう]に、バイクは[進|すす]みやすいです。', it: 'La moto tende ad andare dove guarda lo sguardo.' },
      { t: '⟦[障害物|しょうがいぶつ]⟧ではなく、[逃|に]げる[道|みち]を[見|み]ます。', it: 'Si guarda la via di uscita, non l’ostacolo.' },
      { t: '⟦[死角|しかく]⟧に[注意|ちゅうい]して、[肩|かた]ごしに[後|うし]ろを[見|み]ます。', it: 'Attenzione all’angolo cieco: si guarda dietro con l’occhiata di spalla.' },
      { t: '⟦[反応時間|はんのうじかん]⟧の[間|あいだ]も、バイクは[進|すす]みます。', it: 'Durante il tempo di reazione la moto continua ad avanzare.' },
      { t: '⟦[車間距離|しゃかんきょり]⟧は、[秒|びょう]で[数|かぞ]えます。', it: 'La distanza di sicurezza si conta in secondi.' },
      { t: '[雨|あめ]の[日|ひ]は、[車間距離|しゃかんきょり]を[長|なが]くします。', it: 'Con la pioggia si aumenta la distanza di sicurezza.' }
    ],
    gloss: [
      { w: '余裕', r: 'よゆう', it: 'margine, agio' },
      { w: '視線', r: 'しせん', it: 'sguardo' },
      { w: '障害物', r: 'しょうがいぶつ', it: 'ostacolo' },
      { w: '死角', r: 'しかく', it: 'angolo cieco' },
      { w: '反応時間', r: 'はんのうじかん', it: 'tempo di reazione' },
      { w: '車間距離', r: 'しゃかんきょり', it: 'distanza di sicurezza' },
      { w: '方向', r: 'ほうこう', it: 'direzione' },
      { w: '注意', r: 'ちゅうい', it: 'attenzione' },
      { w: '遠く', r: 'とおく', it: 'lontano' }
    ]
  });

  A('moto-frenata-corretta', {
    title: { t: '[正|ただ]しいブレーキ', it: 'La frenata corretta' },
    sum: [
      { t: '⟦ブレーキ⟧は[二|ふた]つあり、[別々|べつべつ]に[働|はたら]きます。', it: 'I freni sono due e agiscono in modo indipendente.' },
      { t: '⟦[荷重移動|かじゅういどう]⟧で、[前|まえ]のブレーキがより[強|つよ]く[効|き]きます。', it: 'Col trasferimento di carico il freno anteriore agisce di più.' },
      { t: '⟦[緊急|きんきゅう]ブレーキ⟧では、[空|あ]いた[場所|ばしょ]を[見|み]ます。', it: 'Nella frenata d’emergenza si guarda lo spazio libero.' },
      { t: 'バイクを[立|た]てて、[前|まえ]のブレーキを[素早|すばや]く、でも[優|やさ]しく[握|にぎ]ります。', it: 'Con la moto in verticale si stringe il freno anteriore, in fretta ma con dolcezza.' },
      { t: '⟦エービーエス⟧は、ブレーキの⟦ロック⟧を[防|ふせ]ぎます。', it: 'L’ABS evita il bloccaggio dei freni.' },
      { t: '⟦[停止距離|ていしきょり]⟧は、[反応|はんのう]の[距離|きょり]とブレーキの[距離|きょり]の[合計|ごうけい]です。', it: 'Lo spazio di arresto è la somma di reazione e frenata.' },
      { t: 'ブレーキとカーブは、[一|ひと]つの⟦グリップ⟧を[分|わ]け[合|あ]います。', it: 'Frenata e curva si dividono una sola aderenza.' }
    ],
    gloss: [
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: '荷重移動', r: 'かじゅういどう', it: 'trasferimento di carico' },
      { w: '緊急ブレーキ', r: 'きんきゅうぶれーき', it: 'frenata di emergenza' },
      { w: 'エービーエス', r: 'えーびーえす', it: 'ABS' },
      { w: 'ロック', r: 'ろっく', it: 'bloccaggio' },
      { w: '停止距離', r: 'ていしきょり', it: 'spazio di arresto' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: 'カーブ', r: 'かーぶ', it: 'curva' },
      { w: '合計', r: 'ごうけい', it: 'somma, totale' }
    ]
  });

  A('moto-la-curva-su-strada', {
    title: { t: '[道路|どうろ]のカーブ', it: 'La curva su strada' },
    sum: [
      { t: 'カーブでは、タイヤの⟦グリップ⟧が[曲|ま]がる[力|ちから]になります。', it: 'In curva è l’aderenza dei pneumatici a darti la forza per girare.' },
      { t: '⟦[公道|こうどう]⟧では、⟦[限界|げんかい]⟧の[速度|そくど]で[走|はし]りません。', it: 'Su strada non si va alla velocità del limite.' },
      { t: 'カーブでは、[見|み]える[範囲|はんい]で[止|と]まれる[速度|そくど]にします。', it: 'In curva si va a una velocità con cui ci si ferma nello spazio visibile.' },
      { t: '[自分|じぶん]の⟦[車線|しゃせん]⟧から[出|で]てはいけません。', it: 'Non si deve uscire dalla propria corsia.' },
      { t: '⟦[減速|げんそく]⟧は、バイクを[傾|かたむ]ける[前|まえ]にします。', it: 'Si rallenta prima di inclinare la moto.' },
      { t: '⟦[視線|しせん]⟧は、カーブの[出口|でぐち]に[向|む]けます。', it: 'Lo sguardo va verso l’uscita della curva.' },
      { t: '⟦アクセル⟧は、[急|きゅう]に[閉|し]めずに[一定|いってい]にします。', it: 'Il gas non si chiude di colpo, si tiene costante.' }
    ],
    gloss: [
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '公道', r: 'こうどう', it: 'strada pubblica' },
      { w: '限界', r: 'げんかい', it: 'limite' },
      { w: '車線', r: 'しゃせん', it: 'corsia' },
      { w: '減速', r: 'げんそく', it: 'rallentare' },
      { w: '視線', r: 'しせん', it: 'sguardo' },
      { w: 'アクセル', r: 'あくせる', it: 'gas, acceleratore' },
      { w: 'カーブ', r: 'かーぶ', it: 'curva' },
      { w: '出口', r: 'でぐち', it: 'uscita' }
    ]
  });

  A('moto-fondi-e-condizioni', {
    title: { t: '[滑|すべ]りやすい[路面|ろめん]', it: 'Fondi difficili e condizioni' },
    sum: [
      { t: '⟦[摩擦係数|まさつけいすう]⟧は、タイヤの⟦グリップ⟧を[表|あらわ]します。', it: 'Il coefficiente d’attrito descrive l’aderenza del pneumatico.' },
      { t: '⟦[路面|ろめん]⟧が[濡|ぬ]れると、グリップが[下|さ]がります。', it: 'Se il fondo è bagnato, l’aderenza scende.' },
      { t: '[降|ふ]り[始|はじ]めの[雨|あめ]は、[特|とく]に[滑|すべ]りやすいです。', it: 'La pioggia appena iniziata è particolarmente scivolosa.' },
      { t: '⟦ペイント⟧、⟦マンホール⟧、⟦[線路|せんろ]⟧は、[濡|ぬ]れると[滑|すべ]ります。', it: 'Vernice, tombini e binari scivolano quando sono bagnati.' },
      { t: '⟦[砂利|じゃり]⟧や⟦[落|お]ち[葉|ば]⟧、[油|あぶら]も[滑|すべ]ります。', it: 'Anche ghiaia, foglie e olio sono scivolosi.' },
      { t: '[冷|つめ]たいタイヤは、グリップが[弱|よわ]いです。', it: 'Le gomme fredde hanno meno aderenza.' },
      { t: 'グリップが[少|すく]ないほど、[距離|きょり]は[長|なが]く、[傾|かたむ]きは[小|ちい]さくします。', it: 'Meno aderenza c’è, più spazio serve e meno si inclina.' }
    ],
    gloss: [
      { w: '摩擦係数', r: 'まさつけいすう', it: 'coefficiente d’attrito' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: 'ペイント', r: 'ぺいんと', it: 'vernice stradale' },
      { w: 'マンホール', r: 'まんほーる', it: 'tombino' },
      { w: '線路', r: 'せんろ', it: 'binari' },
      { w: '砂利', r: 'じゃり', it: 'ghiaia' },
      { w: '落ち葉', r: 'おちば', it: 'foglie cadute' },
      { w: 'タイヤ', r: 'たいや', it: 'pneumatico' }
    ]
  });

  A('moto-gruppo-e-viaggi', {
    title: { t: 'グループ[走行|そうこう]と[旅|たび]', it: 'Guida in gruppo e viaggi' },
    sum: [
      { t: '⟦グループ⟧では、[自分|じぶん]のペースで[走|はし]ります。', it: 'In gruppo si guida al proprio ritmo.' },
      { t: '⟦[千鳥走行|ちどりそうこう]⟧では、バイクが[交互|こうご]に[並|なら]びます。', it: 'Nella formazione a scacchiera le moto si alternano.' },
      { t: '⟦[合図|あいず]⟧は、[出発|しゅっぱつ]の[前|まえ]に[決|き]めます。', it: 'I segnali si concordano prima della partenza.' },
      { t: '⟦[疲労|ひろう]⟧は、[注意|ちゅうい]と[反応|はんのう]を[悪|わる]くします。', it: 'La fatica peggiora attenzione e riflessi.' },
      { t: '⟦[休憩|きゅうけい]⟧を[定期的|ていきてき]にとります。', it: 'Si fanno soste a intervalli regolari.' },
      { t: '⟦[荷物|にもつ]⟧は[低|ひく]く、[中心|ちゅうしん]の[近|ちか]くに、[左右|さゆう][同|おな]じ[重|おも]さで[積|つ]みます。', it: 'Il carico va basso, vicino al centro e uguale a destra e a sinistra.' },
      { t: '⟦[同乗者|どうじょうしゃ]⟧がいる[時|とき]は、[操作|そうさ]を[優|やさ]しくします。', it: 'Con un passeggero si usano i comandi con più dolcezza.' }
    ],
    gloss: [
      { w: 'グループ', r: 'ぐるーぷ', it: 'gruppo' },
      { w: '千鳥走行', r: 'ちどりそうこう', it: 'formazione a scacchiera' },
      { w: '合図', r: 'あいず', it: 'segnale' },
      { w: '疲労', r: 'ひろう', it: 'fatica' },
      { w: '休憩', r: 'きゅうけい', it: 'sosta, pausa' },
      { w: '荷物', r: 'にもつ', it: 'bagaglio, carico' },
      { w: '同乗者', r: 'どうじょうしゃ', it: 'passeggero' },
      { w: '注意', r: 'ちゅうい', it: 'attenzione' },
      { w: '出発', r: 'しゅっぱつ', it: 'partenza' }
    ]
  });

  A('moto-guida-difensiva-e-mentalita', {
    title: { t: '[防衛運転|ぼうえいうんてん]と[心|こころ]の[持|も]ち[方|かた]', it: 'Guida difensiva e mentalità' },
    sum: [
      { t: '⟦[防衛運転|ぼうえいうんてん]⟧は、⟦[予測|よそく]⟧と⟦[余裕|よゆう]⟧が[基本|きほん]です。', it: 'La guida difensiva si basa su anticipazione e margini.' },
      { t: '[大切|たいせつ]なのは、[無事|ぶじ]に[着|つ]くことです。', it: 'Ciò che conta è arrivare sani.' },
      { t: 'ほかの[人|ひと]も[間違|まちが]えるかもしれないと[考|かんが]えます。', it: 'Si pensa che anche gli altri possano sbagliare.' },
      { t: '⟦[感情|かんじょう]⟧は、[注意|ちゅうい]と[判断|はんだん]を[弱|よわ]くします。', it: 'Le emozioni riducono attenzione e giudizio.' },
      { t: '⟦[焦|あせ]り⟧で[急|いそ]いでも、[節約|せつやく]できる[時間|じかん]は[少|すく]ないです。', it: 'Con la fretta si risparmia poco tempo.' },
      { t: '⟦[飲酒|いんしゅ]⟧は、[反応|はんのう]と[判断|はんだん]を[悪|わる]くします。', it: 'L’alcol peggiora riflessi e giudizio.' },
      { t: 'お[酒|さけ]を[飲|の]んだら、[運転|うんてん]しません。', it: 'Se hai bevuto, non guidi.' }
    ],
    gloss: [
      { w: '防衛運転', r: 'ぼうえいうんてん', it: 'guida difensiva' },
      { w: '予測', r: 'よそく', it: 'anticipazione' },
      { w: '余裕', r: 'よゆう', it: 'margine' },
      { w: '感情', r: 'かんじょう', it: 'emozioni' },
      { w: '焦り', r: 'あせり', it: 'fretta, ansia' },
      { w: '飲酒', r: 'いんしゅ', it: 'consumo di alcol' },
      { w: '判断', r: 'はんだん', it: 'giudizio' },
      { w: '注意', r: 'ちゅうい', it: 'attenzione' },
      { w: '無事', r: 'ぶじ', it: 'sano e salvo' }
    ]
  });

  A('moto-motore-quattro-tempi', {
    title: { t: '[四|よん]ストロークのエンジン', it: 'Il motore a quattro tempi' },
    sum: [
      { t: 'エンジンは、ガソリンと[空気|くうき]を[燃|も]やして[力|ちから]を[作|つく]ります。', it: 'Il motore brucia benzina e aria per produrre forza.' },
      { t: '⟦ピストン⟧は、[燃|も]えたガスに[押|お]されて[動|うご]きます。', it: 'Il pistone è spinto dai gas bruciati.' },
      { t: '[四|よっ]つの[行程|こうてい]は、⟦[吸入|きゅうにゅう]⟧、⟦[圧縮|あっしゅく]⟧、⟦[燃焼|ねんしょう]⟧、⟦[排気|はいき]⟧です。', it: 'Le quattro fasi sono aspirazione, compressione, combustione e scarico.' },
      { t: '⟦カム⟧が⟦バルブ⟧を[開|あ]けたり[閉|し]めたりします。', it: 'Le camme aprono e chiudono le valvole.' },
      { t: '⟦[排気量|はいきりょう]⟧は、ピストンが[動|うご]かす[体積|たいせき]です。', it: 'La cilindrata è il volume spostato dai pistoni.' },
      { t: '⟦[圧縮比|あっしゅくひ]⟧は、[混合気|こんごうき]をどれだけつぶすかを[表|あらわ]します。', it: 'Il rapporto di compressione dice quanto viene schiacciata la miscela.' },
      { t: '⟦トルク⟧は[回|まわ]す[力|ちから]、⟦[出力|しゅつりょく]⟧は[仕事|しごと]の[速|はや]さです。', it: 'La coppia è la forza di rotazione, la potenza è la rapidità del lavoro.' }
    ],
    gloss: [
      { w: 'ピストン', r: 'ぴすとん', it: 'pistone' },
      { w: '吸入', r: 'きゅうにゅう', it: 'aspirazione' },
      { w: '圧縮', r: 'あっしゅく', it: 'compressione' },
      { w: '燃焼', r: 'ねんしょう', it: 'combustione' },
      { w: '排気', r: 'はいき', it: 'scarico' },
      { w: 'カム', r: 'かむ', it: 'camma' },
      { w: 'バルブ', r: 'ばるぶ', it: 'valvola' },
      { w: '排気量', r: 'はいきりょう', it: 'cilindrata' },
      { w: '圧縮比', r: 'あっしゅくひ', it: 'rapporto di compressione' },
      { w: 'トルク', r: 'とるく', it: 'coppia' },
      { w: '出力', r: 'しゅつりょく', it: 'potenza' }
    ]
  });

  A('moto-motore-due-tempi', {
    title: { t: '[二|に]ストロークのエンジン', it: 'Il motore a due tempi e il confronto' },
    sum: [
      { t: '⟦[二|に]ストローク⟧は、[一回転|いっかいてん]でサイクルが[終|お]わります。', it: 'Il due tempi completa il ciclo in un solo giro.' },
      { t: '[一回転|いっかいてん]ごとに、⟦[燃焼|ねんしょう]⟧が[一回|いっかい]あります。', it: 'Ad ogni giro c’è uno scoppio.' },
      { t: '⟦ポート⟧は、ピストンが[開|あ]けたり[閉|し]めたりします。', it: 'Le luci sono aperte e chiuse dal pistone.' },
      { t: '⟦オイル⟧は、ガソリンに[混|ま]ぜるか、[別|べつ]に[送|おく]ります。', it: 'L’olio si mescola alla benzina oppure arriva separato.' },
      { t: '[同|おな]じ[回転|かいてん]では、[二|に]ストロークのほうが[燃焼|ねんしょう]が[多|おお]いです。', it: 'A pari giri il due tempi ha più scoppi.' },
      { t: '⟦オフロード⟧の[競技|きょうぎ]で、[今|いま]も[使|つか]われます。', it: 'Si usa ancora oggi nelle gare fuoristrada.' },
      { t: '⟦ピストン⟧と⟦ピストンリング⟧は、すり[減|へ]るのが[早|はや]いです。', it: 'Pistone e fasce si consumano in fretta.' }
    ],
    gloss: [
      { w: '二ストローク', r: 'にすとろーく', it: 'due tempi' },
      { w: '燃焼', r: 'ねんしょう', it: 'combustione, scoppio' },
      { w: 'ポート', r: 'ぽーと', it: 'luce (apertura nel cilindro)' },
      { w: 'オイル', r: 'おいる', it: 'olio' },
      { w: 'オフロード', r: 'おふろーど', it: 'fuoristrada' },
      { w: 'ピストン', r: 'ぴすとん', it: 'pistone' },
      { w: 'ピストンリング', r: 'ぴすとんりんぐ', it: 'fasce elastiche' },
      { w: '競技', r: 'きょうぎ', it: 'gara, competizione' },
      { w: '回転', r: 'かいてん', it: 'giro, rotazione' }
    ]
  });

  A('moto-architetture-motore', {
    title: { t: 'エンジンの[形|かたち]', it: 'Architetture dei motori' },
    sum: [
      { t: '⟦[燃焼間隔|ねんしょうかんかく]⟧は、エンジンの[個性|こせい]を[決|き]めます。', it: 'L’intervallo di scoppio determina il carattere del motore.' },
      { t: '⟦[単気筒|たんきとう]⟧は、[簡単|かんたん]で[軽|かる]くて[安|やす]いです。', it: 'Il monocilindrico è semplice, leggero ed economico.' },
      { t: '[九十度|きゅうじゅうど]の⟦ブイツイン⟧は、[力|ちから]がほぼつり[合|あ]います。', it: 'Il V-twin a novanta gradi bilancia quasi del tutto le forze.' },
      { t: '⟦[三気筒|さんきとう]⟧は、[燃焼|ねんしょう]の[間隔|かんかく]が[規則的|きそくてき]です。', it: 'Il tricilindrico ha scoppi a intervalli regolari.' },
      { t: '⟦ブイフォー⟧は、[短|みじか]くて[幅|はば]が[狭|せま]いです。', it: 'Il V4 è corto e stretto.' },
      { t: 'ピストンの⟦[慣性力|かんせいりょく]⟧は、[自然|しぜん]には[消|き]えません。', it: 'Le forze d’inerzia dei pistoni non si annullano da sole.' },
      { t: '⟦[振動|しんどう]⟧は、[回転|かいてん]が[上|あ]がると[大|おお]きくなります。', it: 'Le vibrazioni crescono quando salgono i giri.' }
    ],
    gloss: [
      { w: '燃焼間隔', r: 'ねんしょうかんかく', it: 'intervallo di scoppio' },
      { w: '単気筒', r: 'たんきとう', it: 'monocilindrico' },
      { w: 'ブイツイン', r: 'ぶいついん', it: 'bicilindrico a V' },
      { w: '三気筒', r: 'さんきとう', it: 'tricilindrico' },
      { w: 'ブイフォー', r: 'ぶいふぉー', it: 'V4' },
      { w: '慣性力', r: 'かんせいりょく', it: 'forza d’inerzia' },
      { w: '振動', r: 'しんどう', it: 'vibrazione' },
      { w: '個性', r: 'こせい', it: 'carattere' },
      { w: '間隔', r: 'かんかく', it: 'intervallo' }
    ]
  });

  A('moto-alimentazione-scarico', {
    title: { t: '[燃料|ねんりょう]の[供給|きょうきゅう]と[排気|はいき]', it: 'Alimentazione, iniezione e scarico' },
    sum: [
      { t: 'ガソリンを[燃|も]やすには、[空気|くうき]が[必要|ひつよう]です。', it: 'Per bruciare la benzina serve aria.' },
      { t: '⟦キャブレター⟧は、[空気|くうき]の[流|なが]れでガソリンを[吸|す]い[出|だ]します。', it: 'Il carburatore aspira la benzina con il flusso dell’aria.' },
      { t: '⟦インジェクション⟧は、⟦イーシーユー⟧が[噴射|ふんしゃ]の[時間|じかん]を[決|き]めます。', it: 'Nell’iniezione la centralina decide il tempo di iniezione.' },
      { t: '⟦スロットル⟧は、[入|はい]る[空気|くうき]の[量|りょう]を[決|き]めます。', it: 'La farfalla regola la quantità d’aria che entra.' },
      { t: '⟦マップ⟧は、[回転|かいてん]と[負荷|ふか]で[決|き]まる[数字|すうじ]の[表|ひょう]です。', it: 'La mappa è una tabella di valori secondo giri e carico.' },
      { t: '⟦エアフィルター⟧は、ほこりをエンジンの[前|まえ]で[止|と]めます。', it: 'Il filtro dell’aria ferma la polvere prima del motore.' },
      { t: '⟦マフラー⟧は[音|おと]を[小|ちい]さくし、⟦[触媒|しょくばい]⟧は[排気|はいき]をきれいにします。', it: 'Il silenziatore riduce il rumore, il catalizzatore pulisce lo scarico.' }
    ],
    gloss: [
      { w: 'キャブレター', r: 'きゃぶれたー', it: 'carburatore' },
      { w: 'インジェクション', r: 'いんじぇくしょん', it: 'iniezione' },
      { w: 'イーシーユー', r: 'いーしーゆー', it: 'ECU, centralina' },
      { w: 'スロットル', r: 'すろっとる', it: 'farfalla, gas' },
      { w: 'マップ', r: 'まっぷ', it: 'mappa' },
      { w: 'エアフィルター', r: 'えあふぃるたー', it: 'filtro dell’aria' },
      { w: 'マフラー', r: 'まふらー', it: 'silenziatore' },
      { w: '触媒', r: 'しょくばい', it: 'catalizzatore' },
      { w: '噴射', r: 'ふんしゃ', it: 'iniezione (spruzzo)' },
      { w: '空気', r: 'くうき', it: 'aria' }
    ]
  });

  A('moto-lubrificazione-raffreddamento', {
    title: { t: 'オイルと[冷却|れいきゃく]', it: 'Lubrificazione e raffreddamento' },
    sum: [
      { t: '⟦オイル⟧は、[金属|きんぞく]の[部品|ぶひん]の⟦[摩擦|まさつ]⟧を[減|へ]らします。', it: 'L’olio riduce l’attrito tra le parti metalliche.' },
      { t: 'オイルは、[熱|ねつ]も[汚|よご]れも[運|はこ]びます。', it: 'L’olio porta via sia il calore sia lo sporco.' },
      { t: '⟦オイルポンプ⟧は、オイルに[圧力|あつりょく]をかけます。', it: 'La pompa dell’olio mette l’olio in pressione.' },
      { t: '⟦オイルフィルター⟧は、[小|ちい]さなごみを[止|と]めます。', it: 'Il filtro dell’olio trattiene le piccole impurità.' },
      { t: '⟦[粘度|ねんど]⟧は、[流|なが]れにくさを[表|あらわ]します。', it: 'La viscosità indica quanto un fluido fatica a scorrere.' },
      { t: '[冷却|れいきゃく]には、⟦[空冷|くうれい]⟧、⟦[油冷|ゆれい]⟧、⟦[水冷|すいれい]⟧があります。', it: 'Il raffreddamento può essere ad aria, a olio o a liquido.' },
      { t: '⟦[冷却水|れいきゃくすい]⟧の[量|りょう]は、エンジンが[冷|つめ]たい[時|とき]に[見|み]ます。', it: 'Il livello del liquido si controlla a motore freddo.' }
    ],
    gloss: [
      { w: 'オイル', r: 'おいる', it: 'olio' },
      { w: '摩擦', r: 'まさつ', it: 'attrito' },
      { w: 'オイルポンプ', r: 'おいるぽんぷ', it: 'pompa dell’olio' },
      { w: 'オイルフィルター', r: 'おいるふぃるたー', it: 'filtro dell’olio' },
      { w: '粘度', r: 'ねんど', it: 'viscosità' },
      { w: '空冷', r: 'くうれい', it: 'raffreddamento ad aria' },
      { w: '油冷', r: 'ゆれい', it: 'raffreddamento a olio' },
      { w: '水冷', r: 'すいれい', it: 'raffreddamento a liquido' },
      { w: '冷却水', r: 'れいきゃくすい', it: 'liquido di raffreddamento' },
      { w: '冷却', r: 'れいきゃく', it: 'raffreddamento' }
    ]
  });

  A('moto-frizione-cambio-trasmissione', {
    title: { t: 'クラッチとミッション', it: 'Frizione, cambio e trasmissione' },
    sum: [
      { t: '⟦トランスミッション⟧は、エンジンとタイヤの[回転|かいてん]を[合|あ]わせます。', it: 'La trasmissione adatta i giri del motore a quelli della ruota.' },
      { t: '⟦クラッチ⟧は、エンジンとミッションをつないだり[切|き]ったりします。', it: 'La frizione collega e scollega motore e cambio.' },
      { t: 'クラッチは、[何枚|なんまい]もの⟦ディスク⟧を[重|かさ]ねています。', it: 'La frizione ha un pacco di molti dischi.' },
      { t: '⟦スリッパークラッチ⟧は、[急|きゅう]なシフトダウンで[後輪|こうりん]が[跳|は]ねるのを[減|へ]らします。', it: 'L’antisaltellamento riduce i saltelli della ruota posteriore in scalata violenta.' },
      { t: '⟦シーケンシャル⟧のミッションは、[順番|じゅんばん]にギアを[変|か]えます。', it: 'Il cambio sequenziale passa da una marcia all’altra in ordine.' },
      { t: '⟦[最終減速比|さいしゅうげんそくひ]⟧は、ふたつのスプロケットの[歯数|はすう]で[決|き]まります。', it: 'Il rapporto finale dipende dai denti dei due ingranaggi.' },
      { t: '⟦チェーン⟧は[一番|いちばん][多|おお]い[方式|ほうしき]で、[掃除|そうじ]と[注油|ちゅうゆ]が[必要|ひつよう]です。', it: 'La catena è il sistema più diffuso e richiede pulizia e lubrificazione.' }
    ],
    gloss: [
      { w: 'トランスミッション', r: 'とらんすみっしょん', it: 'trasmissione' },
      { w: 'クラッチ', r: 'くらっち', it: 'frizione' },
      { w: 'ディスク', r: 'でぃすく', it: 'disco' },
      { w: 'スリッパークラッチ', r: 'すりっぱーくらっち', it: 'frizione antisaltellamento' },
      { w: 'シーケンシャル', r: 'しーけんしゃる', it: 'sequenziale' },
      { w: '最終減速比', r: 'さいしゅうげんそくひ', it: 'rapporto finale' },
      { w: 'チェーン', r: 'ちぇーん', it: 'catena' },
      { w: '後輪', r: 'こうりん', it: 'ruota posteriore' },
      { w: 'スプロケット', r: 'すぷろけっと', it: 'corona, pignone' }
    ]
  });

  A('moto-impianto-elettrico', {
    title: { t: '[電気系統|でんきけいとう]と[点火|てんか]', it: 'Impianto elettrico e accensione' },
    sum: [
      { t: '⟦バッテリー⟧は[電気|でんき]を[蓄|たくわ]え、エンジンを[始動|しどう]します。', it: 'La batteria accumula elettricità e avvia il motore.' },
      { t: '⟦オルタネーター⟧は、エンジンの[力|ちから]で[電気|でんき]を[作|つく]ります。', it: 'L’alternatore produce elettricità con la forza del motore.' },
      { t: '⟦レギュレーター⟧は、[電圧|でんあつ]を[安定|あんてい]させます。', it: 'Il regolatore stabilizza la tensione.' },
      { t: '⟦スパークプラグ⟧の[火花|ひばな]が、[混合気|こんごうき]に[火|ひ]をつけます。', it: 'La scintilla della candela accende la miscela.' },
      { t: '⟦ヒューズ⟧は、[電流|でんりゅう]が[多|おお]すぎると[切|き]れて[配線|はいせん]を[守|まも]ります。', it: 'Il fusibile si fonde con troppa corrente e protegge i cavi.' },
      { t: 'ヒューズを、もっと[大|おお]きな[電流|でんりゅう]のものに[替|か]えてはいけません。', it: 'Non si sostituisce mai il fusibile con uno di amperaggio maggiore.' },
      { t: '⟦イーシーユー⟧は、⟦センサー⟧の[信号|しんごう]でエンジンを[制御|せいぎょ]します。', it: 'La centralina gestisce il motore con i segnali dei sensori.' }
    ],
    gloss: [
      { w: 'バッテリー', r: 'ばってりー', it: 'batteria' },
      { w: 'オルタネーター', r: 'おるたねーたー', it: 'alternatore' },
      { w: 'レギュレーター', r: 'れぎゅれーたー', it: 'regolatore di tensione' },
      { w: 'スパークプラグ', r: 'すぱーくぷらぐ', it: 'candela' },
      { w: 'ヒューズ', r: 'ひゅーず', it: 'fusibile' },
      { w: 'イーシーユー', r: 'いーしーゆー', it: 'ECU, centralina' },
      { w: 'センサー', r: 'せんさー', it: 'sensore' },
      { w: '電圧', r: 'でんあつ', it: 'tensione' },
      { w: '火花', r: 'ひばな', it: 'scintilla' }
    ]
  });

  A('moto-telaio-ciclistica', {
    title: { t: 'フレームと[足回|あしまわ]り', it: 'Telaio e ciclistica' },
    sum: [
      { t: '⟦フレーム⟧は、バイクの[骨組|ほねぐ]みです。', it: 'Il telaio è lo scheletro della moto.' },
      { t: '⟦トラスフレーム⟧は、[管|くだ]を[三角形|さんかくけい]に[組|く]みます。', it: 'Il telaio a traliccio è fatto di tubi disposti a triangolo.' },
      { t: '⟦ツインスパーフレーム⟧は、[二本|にほん]の[太|ふと]い[部材|ぶざい]がエンジンの[横|よこ]を[通|とお]ります。', it: 'Il perimetrale ha due grosse travi ai lati del motore.' },
      { t: '⟦スイングアーム⟧は、[後輪|こうりん]を[支|ささ]えて[軸|じく]を[中心|ちゅうしん]に[動|うご]きます。', it: 'Il forcellone regge la ruota posteriore e oscilla attorno a un perno.' },
      { t: '⟦アルミ⟧は[軽|かる]く、⟦スチール⟧は[安|やす]くて[直|なお]せます。', it: 'L’alluminio è leggero, l’acciaio è economico e riparabile.' },
      { t: '⟦[剛性|ごうせい]⟧が[高|たか]すぎると、バイクは[硬|かた]くなります。', it: 'Se la rigidità è troppa, la moto diventa dura.' },
      { t: '[剛性|ごうせい]が[低|ひく]すぎると、バイクが[揺|ゆ]れます。', it: 'Se la rigidità è troppo poca, la moto ondeggia.' }
    ],
    gloss: [
      { w: 'フレーム', r: 'ふれーむ', it: 'telaio' },
      { w: 'トラスフレーム', r: 'とらすふれーむ', it: 'telaio a traliccio' },
      { w: 'ツインスパーフレーム', r: 'ついんすぱーふれーむ', it: 'telaio perimetrale a doppia trave' },
      { w: 'スイングアーム', r: 'すいんぐあーむ', it: 'forcellone' },
      { w: 'アルミ', r: 'あるみ', it: 'alluminio' },
      { w: 'スチール', r: 'すちーる', it: 'acciaio' },
      { w: '剛性', r: 'ごうせい', it: 'rigidità' },
      { w: '後輪', r: 'こうりん', it: 'ruota posteriore' },
      { w: '部材', r: 'ぶざい', it: 'elemento strutturale' }
    ]
  });

  A('moto-sospensioni', {
    title: { t: 'サスペンションのしくみ', it: 'Sospensioni: forcella, mono, molla, ammortizzatore' },
    sum: [
      { t: '⟦サスペンション⟧は、タイヤを⟦[路面|ろめん]⟧に[付|つ]けておきます。', it: 'Le sospensioni tengono la ruota a contatto con l’asfalto.' },
      { t: 'もう[一|ひと]つの[役目|やくめ]は、⟦[衝撃|しょうげき]⟧を[和|やわ]らげることです。', it: 'Un altro compito è attenuare gli urti.' },
      { t: '⟦フォーク⟧には、スプリングとオイルが[入|はい]っています。', it: 'La forcella contiene la molla e l’olio.' },
      { t: '⟦リアショック⟧は、フレームと[後|うし]ろのアームの[間|あいだ]にあります。', it: 'Il mono posteriore sta tra telaio e forcellone.' },
      { t: '⟦スプリング⟧は、[力|ちから]に[比例|ひれい]して[縮|ちぢ]みます。', it: 'La molla si comprime in proporzione alla forza.' },
      { t: '⟦ダンパー⟧は、オイルを[細|ほそ]い[穴|あな]に[通|とお]して[動|うご]きを[抑|おさ]えます。', it: 'L’ammortizzatore frena il movimento facendo passare l’olio da piccoli fori.' },
      { t: '⟦サグ⟧は、バイクの[重|おも]さで[沈|しず]む[量|りょう]です。', it: 'Il SAG è quanto la sospensione si comprime sotto il peso della moto.' }
    ],
    gloss: [
      { w: 'サスペンション', r: 'さすぺんしょん', it: 'sospensione' },
      { w: '路面', r: 'ろめん', it: 'fondo stradale' },
      { w: '衝撃', r: 'しょうげき', it: 'urto' },
      { w: 'フォーク', r: 'ふぉーく', it: 'forcella' },
      { w: 'リアショック', r: 'りあしょっく', it: 'ammortizzatore posteriore' },
      { w: 'スプリング', r: 'すぷりんぐ', it: 'molla' },
      { w: 'ダンパー', r: 'だんぱー', it: 'ammortizzatore idraulico' },
      { w: 'サグ', r: 'さぐ', it: 'SAG (affondamento sotto carico)' },
      { w: 'オイル', r: 'おいる', it: 'olio' }
    ]
  });

  A('moto-freni-ruote-pneumatici', {
    title: { t: 'ブレーキとタイヤ', it: 'Freni, ruote e pneumatici' },
    sum: [
      { t: 'ブレーキは、⟦[運動|うんどう]エネルギー⟧を[熱|ねつ]に[変|か]えます。', it: 'Il freno trasforma l’energia cinetica in calore.' },
      { t: '⟦キャリパー⟧が、⟦ブレーキパッド⟧で⟦ディスク⟧をはさみます。', it: 'La pinza stringe il disco con le pastiglie.' },
      { t: 'ブレーキは⟦[油圧|ゆあつ]⟧で[力|ちから]を[伝|つた]えます。', it: 'Il freno trasmette la forza con l’idraulica.' },
      { t: '⟦ブレーキフルード⟧は、[熱|ねつ]で[沸騰|ふっとう]すると[効|き]かなくなります。', it: 'Se il liquido dei freni bolle per il calore, la frenata si perde.' },
      { t: '⟦エービーエス⟧は、ブレーキの⟦ロック⟧を[防|ふせ]ぎます。', it: 'L’ABS evita il bloccaggio dei freni.' },
      { t: 'タイヤの[側面|そくめん]の[数字|すうじ]は、[幅|はば]や⟦リム⟧の[大|おお]きさを[表|あらわ]します。', it: 'I numeri sul fianco indicano la larghezza e la misura del cerchio.' },
      { t: 'タイヤの⟦[空気圧|くうきあつ]⟧は、[多|おお]すぎても[少|すく]なすぎても[危険|きけん]です。', it: 'La pressione è pericolosa sia se troppo alta sia se troppo bassa.' }
    ],
    gloss: [
      { w: '運動エネルギー', r: 'うんどうえねるぎー', it: 'energia cinetica' },
      { w: 'キャリパー', r: 'きゃりぱー', it: 'pinza freno' },
      { w: 'ブレーキパッド', r: 'ぶれーきぱっど', it: 'pastiglia' },
      { w: 'ディスク', r: 'でぃすく', it: 'disco' },
      { w: '油圧', r: 'ゆあつ', it: 'pressione idraulica' },
      { w: 'ブレーキフルード', r: 'ぶれーきふるーど', it: 'liquido dei freni' },
      { w: 'エービーエス', r: 'えーびーえす', it: 'ABS' },
      { w: 'ロック', r: 'ろっく', it: 'bloccaggio' },
      { w: 'リム', r: 'りむ', it: 'cerchio' },
      { w: '空気圧', r: 'くうきあつ', it: 'pressione dell’aria' }
    ]
  });

  A('moto-manutenzione-programmata', {
    title: { t: '[定期整備|ていきせいび]', it: 'Manutenzione programmata e piccole riparazioni' },
    sum: [
      { t: 'バイクは[熱|ねつ]や[振動|しんどう]の[中|なか]で[働|はたら]くので、⟦[定期整備|ていきせいび]⟧が[大切|たいせつ]です。', it: 'La moto lavora tra calore e vibrazioni, quindi la manutenzione regolare è importante.' },
      { t: '[作業|さぎょう]は[平|たいら]で[安定|あんてい]した[場所|ばしょ]で、⟦スタンド⟧を[使|つか]います。', it: 'Si lavora su una superficie piana e stabile, usando il cavalletto.' },
      { t: '⟦エンジンオイル⟧と⟦オイルフィルター⟧は、[説明書|せつめいしょ]の[時期|じき]に[交換|こうかん]します。', it: 'Olio e filtro si sostituiscono nei tempi indicati dal manuale.' },
      { t: '⟦チェーン⟧は、[掃除|そうじ]と[注油|ちゅうゆ]と[張|は]りの[調整|ちょうせい]が[必要|ひつよう]です。', it: 'La catena richiede pulizia, lubrificazione e regolazione della tensione.' },
      { t: '⟦ブレーキパッド⟧は、[限度|げんど]より[薄|うす]いと[交換|こうかん]します。', it: 'Le pastiglie si sostituiscono quando sono sotto il minimo.' },
      { t: '⟦スパークプラグ⟧も、[決|き]まった[間隔|かんかく]で[見|み]ます。', it: 'Anche le candele si controllano a intervalli stabiliti.' },
      { t: 'ブレーキの[異常|いじょう]や[液漏|えきも]れがあれば、[運転|うんてん]せず⟦[整備工場|せいびこうじょう]⟧へ[行|い]きます。', it: 'Con anomalie ai freni o perdite si va in officina senza guidare.' }
    ],
    gloss: [
      { w: '定期整備', r: 'ていきせいび', it: 'manutenzione periodica' },
      { w: 'スタンド', r: 'すたんど', it: 'cavalletto' },
      { w: 'エンジンオイル', r: 'えんじんおいる', it: 'olio motore' },
      { w: 'オイルフィルター', r: 'おいるふぃるたー', it: 'filtro dell’olio' },
      { w: 'チェーン', r: 'ちぇーん', it: 'catena' },
      { w: 'ブレーキパッド', r: 'ぶれーきぱっど', it: 'pastiglia freno' },
      { w: 'スパークプラグ', r: 'すぱーくぷらぐ', it: 'candela' },
      { w: '整備工場', r: 'せいびこうじょう', it: 'officina' },
      { w: '交換', r: 'こうかん', it: 'sostituire' }
    ]
  });

  A('moto-diagnostica-problemi', {
    title: { t: '[故障|こしょう]を[探|さが]す[方法|ほうほう]', it: 'Diagnostica e problemi comuni' },
    sum: [
      { t: '⟦[症状|しょうじょう]⟧、⟦[仮説|かせつ]⟧、⟦[検査|けんさ]⟧の[順|じゅん]に[進|すす]みます。', it: 'Si procede in ordine: sintomo, ipotesi, test.' },
      { t: '[部品|ぶひん]を[適当|てきとう]に[替|か]えるのは、よくない[方法|ほうほう]です。', it: 'Cambiare pezzi a caso è un metodo sbagliato.' },
      { t: '⟦セルモーター⟧が[回|まわ]らない[時|とき]は、[電気|でんき]の[問題|もんだい]です。', it: 'Se il motorino non gira, il problema è elettrico.' },
      { t: 'セルモーターが[回|まわ]ってもかからない[時|とき]は、ガソリンか[火花|ひばな]か[空気|くうき]が[足|た]りません。', it: 'Se il motorino gira ma il motore non parte, manca benzina, scintilla o aria.' },
      { t: '[変|へん]な[音|おと]は、[故障|こしょう]を[知|し]らせる⟦サイン⟧です。', it: 'I rumori strani sono segnali di un guasto.' },
      { t: '⟦[警告灯|けいこくとう]⟧は、[赤|あか]が[危険|きけん]で[止|と]まる[合図|あいず]です。', it: 'Per le spie, il rosso significa pericolo: fermati.' },
      { t: '⟦オイル⟧の[赤|あか]い[警告灯|けいこくとう]が[点|つ]いたら、すぐ[止|と]まってエンジンを[切|き]ります。', it: 'Se si accende la spia rossa dell’olio, ci si ferma subito e si spegne il motore.' }
    ],
    gloss: [
      { w: '症状', r: 'しょうじょう', it: 'sintomo' },
      { w: '仮説', r: 'かせつ', it: 'ipotesi' },
      { w: '検査', r: 'けんさ', it: 'test, verifica' },
      { w: 'セルモーター', r: 'せるもーたー', it: 'motorino di avviamento' },
      { w: 'サイン', r: 'さいん', it: 'segnale' },
      { w: '警告灯', r: 'けいこくとう', it: 'spia luminosa' },
      { w: 'オイル', r: 'おいる', it: 'olio' },
      { w: '故障', r: 'こしょう', it: 'guasto' },
      { w: '火花', r: 'ひばな', it: 'scintilla' }
    ]
  });

  A('moto-fisica-della-curva', {
    title: { t: 'カーブの[物理|ぶつり]', it: 'Fisica della curva: angolo di piega' },
    sum: [
      { t: '[曲|ま]がるには、[中心|ちゅうしん]へ[向|む]かう⟦[向心力|こうしんりょく]⟧が[必要|ひつよう]です。', it: 'Per curvare serve una forza centripeta verso il centro.' },
      { t: 'その[力|ちから]は、タイヤと[路面|ろめん]の⟦[摩擦|まさつ]⟧から[来|き]ます。', it: 'Quella forza viene dall’attrito tra pneumatico e fondo.' },
      { t: '⟦[横加速度|よこかそくど]⟧は、[速度|そくど]の[二乗|にじょう]を[半径|はんけい]で[割|わ]った[値|あたい]です。', it: 'L’accelerazione laterale è il quadrato della velocità diviso il raggio.' },
      { t: '[速度|そくど]が[上|あ]がるほど、⟦バンク[角|かく]⟧は[大|おお]きくなります。', it: 'Più sale la velocità, più cresce l’angolo di piega.' },
      { t: '⟦[摩擦係数|まさつけいすう]⟧が、[最大|さいだい]の[角度|かくど]を[決|き]めます。', it: 'Il coefficiente d’attrito determina l’angolo massimo.' },
      { t: 'ブレーキや⟦[加速|かそく]⟧も、[同|おな]じ⟦グリップ⟧を[使|つか]います。', it: 'Anche frenata e accelerazione usano lo stesso grip.' },
      { t: '⟦[計算|けいさん]⟧で、[慎重|しんちょう]な[運転|うんてん]の[理由|りゆう]が[分|わ]かります。', it: 'Il calcolo fa capire perché la guida prudente è giusta.' }
    ],
    gloss: [
      { w: '向心力', r: 'こうしんりょく', it: 'forza centripeta' },
      { w: '摩擦', r: 'まさつ', it: 'attrito' },
      { w: '横加速度', r: 'よこかそくど', it: 'accelerazione laterale' },
      { w: 'バンク角', r: 'ばんくかく', it: 'angolo di piega' },
      { w: '摩擦係数', r: 'まさつけいすう', it: 'coefficiente d’attrito' },
      { w: '加速', r: 'かそく', it: 'accelerazione' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '計算', r: 'けいさん', it: 'calcolo' },
      { w: '二乗', r: 'にじょう', it: 'quadrato' }
    ]
  });

  A('moto-giroscopio-e-controsterzo', {
    title: { t: 'ジャイロとカウンターステア', it: 'Giroscopio e controsterzo' },
    sum: [
      { t: '[回|まわ]る[車輪|しゃりん]には、⟦[角運動量|かくうんどうりょう]⟧があります。', it: 'Una ruota che gira possiede un momento angolare.' },
      { t: '⟦ジャイロ⟧は、[力|ちから]を[加|くわ]えた[向|む]きと[直角|ちょっかく]に[動|うご]きます。', it: 'Il giroscopio si muove ad angolo retto rispetto alla forza applicata.' },
      { t: 'この[動|うご]きを⟦[歳差運動|さいさうんどう]⟧と[呼|よ]びます。', it: 'Questo movimento si chiama precessione.' },
      { t: '⟦カウンターステア⟧では、[右|みぎ]のグリップを[前|まえ]に[押|お]すと、[右|みぎ]に[曲|ま]がります。', it: 'Col controsterzo, spingendo avanti la manopola destra si curva a destra.' },
      { t: '⟦ハンドル⟧は[一瞬|いっしゅん]、[逆|ぎゃく]の[左|ひだり]に[切|き]れます。', it: 'Il manubrio gira per un istante nel verso opposto, a sinistra.' },
      { t: '⟦トレール⟧も、バイクを[安定|あんてい]させる[理由|りゆう]の[一|ひと]つです。', it: 'Anche l’avancorsa è una delle ragioni della stabilità.' },
      { t: '⟦[速度|そくど]⟧が[上|あ]がると、ハンドルは[安定|あんてい]して[重|おも]くなります。', it: 'Con più velocità il manubrio diventa più stabile e più duro.' }
    ],
    gloss: [
      { w: '角運動量', r: 'かくうんどうりょう', it: 'momento angolare' },
      { w: 'ジャイロ', r: 'じゃいろ', it: 'giroscopio' },
      { w: '歳差運動', r: 'さいさうんどう', it: 'precessione' },
      { w: 'カウンターステア', r: 'かうんたーすてあ', it: 'controsterzo' },
      { w: 'ハンドル', r: 'はんどる', it: 'manubrio' },
      { w: 'トレール', r: 'とれーる', it: 'avancorsa' },
      { w: '速度', r: 'そくど', it: 'velocità' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'manopola' },
      { w: '安定', r: 'あんてい', it: 'stabilità' }
    ]
  });

  A('moto-aderenza-e-cerchio', {
    title: { t: 'グリップと[摩擦円|まさつえん]', it: 'Aderenza e cerchio di aderenza' },
    sum: [
      { t: 'タイヤと[路面|ろめん]の⟦[接地面|せっちめん]⟧は、[手|て]のひらくらいです。', it: 'L’impronta di contatto è grande più o meno come il palmo di una mano.' },
      { t: '⟦[加速|かそく]⟧、ブレーキ、カーブの[力|ちから]は、すべてそこを[通|とお]ります。', it: 'Accelerazione, frenata e curva passano tutte da lì.' },
      { t: '⟦[摩擦係数|まさつけいすう]⟧が[大|おお]きいほど、[出|だ]せる[力|ちから]も[大|おお]きくなります。', it: 'Più alto è il coefficiente d’attrito, più forza si può usare.' },
      { t: '⟦[摩擦円|まさつえん]⟧は、[使|つか]えるグリップの[限度|げんど]を[円|えん]で[表|あらわ]します。', it: 'Il cerchio di aderenza mostra con un cerchio il limite del grip utilizzabile.' },
      { t: '⟦グリップ⟧は[一|ひと]つなので、[曲|ま]がるとブレーキの[分|ぶん]が[減|へ]ります。', it: 'L’aderenza è una sola: se curvi ne resta meno per frenare.' },
      { t: '⟦[前輪|ぜんりん]⟧が[滑|すべ]ると、⟦ローサイド⟧になり、ほとんど[立|た]て[直|なお]せません。', it: 'Se l’anteriore scivola c’è un lowside, quasi mai recuperabile.' },
      { t: 'ブレーキは、バイクが[立|た]っている[間|あいだ]に[少|すこ]しずつかけます。', it: 'Si frena un po’ alla volta mentre la moto è dritta.' }
    ],
    gloss: [
      { w: '接地面', r: 'せっちめん', it: 'impronta di contatto' },
      { w: '加速', r: 'かそく', it: 'accelerazione' },
      { w: '摩擦係数', r: 'まさつけいすう', it: 'coefficiente d’attrito' },
      { w: '摩擦円', r: 'まさつえん', it: 'cerchio di aderenza' },
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '前輪', r: 'ぜんりん', it: 'ruota anteriore' },
      { w: 'ローサイド', r: 'ろーさいど', it: 'lowside (caduta di lato)' },
      { w: '限度', r: 'げんど', it: 'limite' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' }
    ]
  });

  A('moto-trasferimenti-di-carico', {
    title: { t: '[荷重移動|かじゅういどう]とウイリー', it: 'Trasferimenti di carico: impennata e stoppie' },
    sum: [
      { t: 'ブレーキや[加速|かそく]で、⟦[荷重移動|かじゅういどう]⟧が[起|お]きます。', it: 'Frenando o accelerando avviene un trasferimento di carico.' },
      { t: '⟦[重心|じゅうしん]⟧が[高|たか]いほど、[荷重移動|かじゅういどう]は[大|おお]きくなります。', it: 'Più il baricentro è alto, più grande è il trasferimento.' },
      { t: 'ブレーキの[時|とき]は、⟦[荷重|かじゅう]⟧が[前|まえ]へ[移|うつ]ります。', it: 'In frenata il carico si sposta in avanti.' },
      { t: '⟦ストッピー⟧は、[後輪|こうりん]の[荷重|かじゅう]がゼロになると[始|はじ]まります。', it: 'Lo stoppie inizia quando il carico sul posteriore si annulla.' },
      { t: '[加速|かそく]の[時|とき]は、[荷重|かじゅう]が[後|うし]ろへ[移|うつ]ります。', it: 'In accelerazione il carico si sposta indietro.' },
      { t: '⟦ウイリー⟧は、[前輪|ぜんりん]の[荷重|かじゅう]がゼロになると[始|はじ]まります。', it: 'L’impennata inizia quando il carico sull’anteriore si annulla.' },
      { t: 'ブレーキの[時|とき]、⟦サスペンション⟧が[縮|ちぢ]んで[前|まえ]が[沈|しず]みます。', it: 'In frenata la sospensione si comprime e l’avantreno affonda.' }
    ],
    gloss: [
      { w: '荷重移動', r: 'かじゅういどう', it: 'trasferimento di carico' },
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '荷重', r: 'かじゅう', it: 'carico' },
      { w: 'ストッピー', r: 'すとっぴー', it: 'stoppie' },
      { w: 'ウイリー', r: 'ういりー', it: 'impennata' },
      { w: 'サスペンション', r: 'さすぺんしょん', it: 'sospensione' },
      { w: '前輪', r: 'ぜんりん', it: 'ruota anteriore' },
      { w: '後輪', r: 'こうりん', it: 'ruota posteriore' }
    ]
  });

  A('moto-geometria-avancorsa', {
    title: { t: 'ジオメトリーとトレール', it: 'Geometria: interasse, inclinazione e avancorsa' },
    sum: [
      { t: '⟦ホイールベース⟧は、[前|まえ]と[後|うし]ろの[車軸|しゃじく]の[距離|きょり]です。', it: 'L’interasse è la distanza tra gli assi delle due ruote.' },
      { t: '⟦キャスター[角|かく]⟧は、ステアリングの[軸|じく]の[傾|かたむ]きです。', it: 'L’inclinazione è la pendenza dell’asse di sterzo.' },
      { t: '⟦トレール⟧は、[軸|じく]の[延長|えんちょう]が[地面|じめん]に[着|つ]く[点|てん]と⟦[接地点|せっちてん]⟧の[差|さ]です。', it: 'L’avancorsa è la distanza tra il punto dove l’asse tocca terra e il punto di contatto.' },
      { t: 'トレールが[大|おお]きいほど、⟦[直進安定性|ちょくしんあんていせい]⟧が[高|たか]くなります。', it: 'Più grande è l’avancorsa, maggiore è la stabilità in rettilineo.' },
      { t: 'トレールとホイールベースが[小|ちい]さいと、⟦[操縦性|そうじゅうせい]⟧が[高|たか]くなります。', it: 'Con avancorsa e interasse minori, la maneggevolezza aumenta.' },
      { t: 'タイヤやフォークを[替|か]えると、⟦ジオメトリー⟧が[変|か]わります。', it: 'Cambiando pneumatici o forcella, la geometria cambia.' },
      { t: '[安定|あんてい]が[増|ふ]えると、[軽快|けいかい]さは[減|へ]ります。', it: 'Più stabilità significa meno agilità.' }
    ],
    gloss: [
      { w: 'ホイールベース', r: 'ほいーるべーす', it: 'interasse' },
      { w: 'キャスター角', r: 'きゃすたーかく', it: 'inclinazione dello sterzo' },
      { w: 'トレール', r: 'とれーる', it: 'avancorsa' },
      { w: '接地点', r: 'せっちてん', it: 'punto di contatto' },
      { w: '直進安定性', r: 'ちょくしんあんていせい', it: 'stabilità in rettilineo' },
      { w: '操縦性', r: 'そうじゅうせい', it: 'maneggevolezza' },
      { w: 'ジオメトリー', r: 'じおめとりー', it: 'geometria' },
      { w: '軽快', r: 'けいかい', it: 'agilità, leggerezza' }
    ]
  });

  A('moto-baricentro-e-masse', {
    title: { t: '[重心|じゅうしん]と[重|おも]さ', it: 'Baricentro e masse' },
    sum: [
      { t: '⟦[重心|じゅうしん]⟧は、[全体|ぜんたい]の[重|おも]さが[集|あつ]まると[考|かんが]える[点|てん]です。', it: 'Il baricentro è il punto in cui si pensa concentrato tutto il peso.' },
      { t: 'バイクとライダーと[荷物|にもつ]を[合|あ]わせて[考|かんが]えます。', it: 'Si considerano insieme moto, pilota e carico.' },
      { t: '[前後|ぜんご]の[重|おも]さの⟦[配分|はいぶん]⟧は、バイクの[種類|しゅるい]で[違|ちが]います。', it: 'La ripartizione dei pesi tra avanti e dietro varia con il tipo di moto.' },
      { t: '⟦ばね[上|うえ]⟧は[車体|しゃたい]とライダー、⟦ばね[下|した]⟧は[車輪|しゃりん]などです。', it: 'La massa sospesa è telaio e pilota, quella non sospesa è fatta di ruote e simili.' },
      { t: '⟦ライダー⟧が[前|まえ]に[体|からだ]を[傾|かたむ]けると、⟦[前輪|ぜんりん]⟧の[荷重|かじゅう]が[増|ふ]えます。', it: 'Se il pilota si sposta in avanti, aumenta il carico sull’anteriore.' },
      { t: '⟦[同乗者|どうじょうしゃ]⟧が[乗|の]ると、[重心|じゅうしん]の[位置|いち]が[変|か]わります。', it: 'Con un passeggero cambia la posizione del baricentro.' },
      { t: '[荷物|にもつ]がある[時|とき]は、⟦プリロード⟧を[上|あ]げて⟦サグ⟧を[戻|もど]します。', it: 'Con il carico si aumenta il precarico per ripristinare il SAG.' }
    ],
    gloss: [
      { w: '重心', r: 'じゅうしん', it: 'baricentro' },
      { w: '配分', r: 'はいぶん', it: 'ripartizione' },
      { w: 'ばね上', r: 'ばねうえ', it: 'massa sospesa' },
      { w: 'ばね下', r: 'ばねした', it: 'massa non sospesa' },
      { w: 'ライダー', r: 'らいだー', it: 'pilota' },
      { w: '前輪', r: 'ぜんりん', it: 'ruota anteriore' },
      { w: '同乗者', r: 'どうじょうしゃ', it: 'passeggero' },
      { w: 'プリロード', r: 'ぷりろーど', it: 'precarico' },
      { w: 'サグ', r: 'さぐ', it: 'SAG' }
    ]
  });

  A('moto-aerodinamica-della-moto', {
    title: { t: 'バイクの[空気力学|くうきりきがく]', it: 'Aerodinamica della moto' },
    sum: [
      { t: '⟦[空気抵抗|くうきていこう]⟧は、[速度|そくど]の⟦[二乗|にじょう]⟧で[大|おお]きくなります。', it: 'La resistenza dell’aria cresce con il quadrato della velocità.' },
      { t: '[必要|ひつよう]な⟦[出力|しゅつりょく]⟧は、[速度|そくど]の⟦[三乗|さんじょう]⟧で[増|ふ]えます。', it: 'La potenza necessaria cresce con il cubo della velocità.' },
      { t: 'タイヤの[変形|へんけい]による⟦[転|ころ]がり[抵抗|ていこう]⟧もあります。', it: 'C’è anche la resistenza al rotolamento dovuta alla deformazione del pneumatico.' },
      { t: '⟦[最高速度|さいこうそくど]⟧は、[出力|しゅつりょく]と[空気抵抗|くうきていこう]で[決|き]まります。', it: 'La velocità massima dipende da potenza e resistenza dell’aria.' },
      { t: '[速度|そくど]を[上|あ]げるには、[大|おお]きな[出力|しゅつりょく]が[必要|ひつよう]です。', it: 'Per guadagnare velocità serve molta potenza.' },
      { t: '⟦カウル⟧は、[風|かぜ]を[流|なが]して[空気抵抗|くうきていこう]を[減|へ]らします。', it: 'La carenatura guida l’aria e riduce la resistenza.' },
      { t: '⟦ウイングレット⟧は、[加速|かそく]の[時|とき]に[前輪|ぜんりん]が[浮|う]くのを[抑|おさ]えます。', it: 'Le alette riducono la tendenza ad alzare l’anteriore in accelerazione.' }
    ],
    gloss: [
      { w: '空気抵抗', r: 'くうきていこう', it: 'resistenza dell’aria' },
      { w: '二乗', r: 'にじょう', it: 'quadrato' },
      { w: '出力', r: 'しゅつりょく', it: 'potenza' },
      { w: '三乗', r: 'さんじょう', it: 'cubo' },
      { w: '転がり抵抗', r: 'ころがりていこう', it: 'resistenza al rotolamento' },
      { w: '最高速度', r: 'さいこうそくど', it: 'velocità massima' },
      { w: 'カウル', r: 'かうる', it: 'carenatura' },
      { w: 'ウイングレット', r: 'ういんぐれっと', it: 'alette aerodinamiche' },
      { w: '前輪', r: 'ぜんりん', it: 'ruota anteriore' }
    ]
  });

  A('moto-pneumatici-moto', {
    title: { t: 'バイクのタイヤ', it: 'Pneumatici moto' },
    sum: [
      { t: 'バイクのタイヤは、⟦[断面|だんめん]⟧が[丸|まる]い[形|かたち]です。', it: 'Il pneumatico della moto ha una sezione a profilo tondo.' },
      { t: 'バイクが[傾|かたむ]くと、[接地|せっち]する[場所|ばしょ]が[側面|そくめん]に[移|うつ]ります。', it: 'Quando la moto si inclina, il contatto si sposta verso il fianco.' },
      { t: '⟦[接地面|せっちめん]⟧は、[手|て]のひらくらいの[大|おお]きさです。', it: 'L’impronta di contatto è grande come il palmo di una mano.' },
      { t: '⟦コンパウンド⟧は、[柔|やわ]らかいほどグリップが[強|つよ]く、[減|へ]りも[早|はや]いです。', it: 'Più morbida è la mescola, più grip c’è e più in fretta si consuma.' },
      { t: '⟦[温度|おんど]⟧が[上|あ]がると、タイヤの⟦[空気圧|くうきあつ]⟧も[上|あ]がります。', it: 'Se la temperatura sale, sale anche la pressione del pneumatico.' },
      { t: '[空気圧|くうきあつ]は、タイヤが[冷|つめ]たい[時|とき]に[測|はか]ります。', it: 'La pressione si misura a pneumatico freddo.' },
      { t: '⟦スリック⟧は[溝|みぞ]がなく、[公道|こうどう]では[使|つか]えません。', it: 'Le slick non hanno scolpitura e non si usano su strada.' }
    ],
    gloss: [
      { w: '断面', r: 'だんめん', it: 'sezione, profilo' },
      { w: '接地面', r: 'せっちめん', it: 'impronta di contatto' },
      { w: 'コンパウンド', r: 'こんぱうんど', it: 'mescola' },
      { w: '温度', r: 'おんど', it: 'temperatura' },
      { w: '空気圧', r: 'くうきあつ', it: 'pressione dell’aria' },
      { w: 'スリック', r: 'すりっく', it: 'slick (senza scolpitura)' },
      { w: '公道', r: 'こうどう', it: 'strada pubblica' },
      { w: '側面', r: 'そくめん', it: 'fianco' }
    ]
  });

  A('moto-track-day', {
    title: { t: 'トラックデイの[準備|じゅんび]', it: 'Preparare un track day' },
    sum: [
      { t: '⟦トラックデイ⟧は、[閉|し]じた⟦サーキット⟧を[走|はし]る[日|ひ]です。', it: 'Il track day è una giornata su un circuito chiuso al traffico.' },
      { t: '⟦レース⟧ではないので、⟦[順位|じゅんい]⟧はありません。', it: 'Non è una gara, quindi non c’è classifica.' },
      { t: '[目的|もくてき]は、[安全|あんぜん]な[場所|ばしょ]で[学|まな]ぶことです。', it: 'Lo scopo è imparare in un ambiente sicuro.' },
      { t: '[迷|まよ]ったら、[遅|おそ]いグループを[選|えら]びます。', it: 'Nel dubbio, si sceglie il gruppo più lento.' },
      { t: 'ふつうの⟦[市販|しはん]⟧のバイクで[十分|じゅうぶん]です。', it: 'Una moto normale di serie basta.' },
      { t: '⟦レザースーツ⟧などの⟦[装備|そうび]⟧は、[入口|いりぐち]で[確認|かくにん]されます。', it: 'Tuta in pelle e altro equipaggiamento sono controllati all’ingresso.' },
      { t: '⟦ブリーフィング⟧で、すべてのルールを[聞|き]きます。', it: 'Nel briefing si ascoltano tutte le regole.' }
    ],
    gloss: [
      { w: 'トラックデイ', r: 'とらっくでい', it: 'track day' },
      { w: 'サーキット', r: 'さーきっと', it: 'circuito' },
      { w: 'レース', r: 'れーす', it: 'gara' },
      { w: '順位', r: 'じゅんい', it: 'classifica' },
      { w: '市販', r: 'しはん', it: 'di serie, in vendita' },
      { w: 'レザースーツ', r: 'れざーすーつ', it: 'tuta in pelle' },
      { w: '装備', r: 'そうび', it: 'equipaggiamento' },
      { w: 'ブリーフィング', r: 'ぶりーふぃんぐ', it: 'briefing' },
      { w: '目的', r: 'もくてき', it: 'scopo' }
    ]
  });

  A('moto-body-position', {
    title: { t: 'ボディポジション', it: 'Posizione e body position' },
    sum: [
      { t: 'ライダーの⟦[体重|たいじゅう]⟧は、[全体|ぜんたい]の[四分|よんぶん]の[一|いち]ほどです。', it: 'Il peso del pilota è spesso circa un quarto del totale.' },
      { t: '⟦ボディポジション⟧は、[体|からだ]の[位置|いち]を[決|き]めることです。', it: 'La body position consiste nel decidere dove mettere il corpo.' },
      { t: '[基本|きほん]の⟦[姿勢|しせい]⟧では、[肘|ひじ]を[柔|やわ]らかく[曲|ま]げます。', it: 'Nella posizione base i gomiti sono morbidi e piegati.' },
      { t: '[腕|うで]が[硬|かた]いと、でこぼこが⟦ハンドル⟧に[伝|つた]わります。', it: 'Con le braccia rigide le buche arrivano al manubrio.' },
      { t: '[体|からだ]を[動|うご]かすのは、カーブの[前|まえ]です。', it: 'Il corpo si sposta prima della curva.' },
      { t: '⟦[視線|しせん]⟧は、[早|はや]めに⟦[出口|でぐち]⟧へ[向|む]けます。', it: 'Lo sguardo va verso l’uscita in anticipo.' },
      { t: '[外側|そとがわ]の⟦ステップ⟧が、[体|からだ]を[支|ささ]えます。', it: 'La pedana esterna sostiene il corpo.' }
    ],
    gloss: [
      { w: '体重', r: 'たいじゅう', it: 'peso corporeo' },
      { w: 'ボディポジション', r: 'ぼでぃぽじしょん', it: 'posizione del corpo' },
      { w: '姿勢', r: 'しせい', it: 'posizione, postura' },
      { w: 'ハンドル', r: 'はんどる', it: 'manubrio' },
      { w: '視線', r: 'しせん', it: 'sguardo' },
      { w: '出口', r: 'でぐち', it: 'uscita' },
      { w: 'ステップ', r: 'すてっぷ', it: 'pedana' },
      { w: 'ライダー', r: 'らいだー', it: 'pilota' },
      { w: '基本', r: 'きほん', it: 'base' }
    ]
  });

  A('moto-frenata-trail-braking', {
    title: { t: 'ブレーキングとトレイルブレーキング', it: 'Frenata al limite e trail braking' },
    sum: [
      { t: '⟦ブレーキング⟧は、[時間|じかん]を[大|おお]きく[左右|さゆう]します。', it: 'La frenata influisce molto sul tempo.' },
      { t: 'いいブレーキングは、[遅|おそ]いのに[乱暴|らんぼう]ではありません。', it: 'Una buona frenata è tardiva ma non brusca.' },
      { t: '⟦[前輪|ぜんりん]⟧のブレーキが、[大部分|だいぶぶん]の⟦[制動|せいどう]⟧をします。', it: 'Il freno anteriore fa la maggior parte della frenata.' },
      { t: '⟦ブレーキ⟧は、[最初|さいしょ]は[力強|ちからづよ]く、でも[少|すこ]しずつ[握|にぎ]ります。', it: 'Il freno si stringe con decisione ma gradualmente.' },
      { t: '⟦トレイルブレーキング⟧は、ブレーキを[少|すこ]しずつ[離|はな]しながら[曲|ま]がる[技術|ぎじゅつ]です。', it: 'Il trail braking è curvare mentre si rilascia il freno poco a poco.' },
      { t: '⟦[摩擦円|まさつえん]⟧の[中|なか]で、ブレーキとカーブを[分|わ]け[合|あ]います。', it: 'Dentro il cerchio di aderenza, freno e curva si dividono il grip.' },
      { t: 'ブレーキを[始|はじ]める[点|てん]は、[動|うご]かない⟦[目印|めじるし]⟧で[決|き]めます。', it: 'Il punto di staccata si sceglie con riferimenti fissi.' }
    ],
    gloss: [
      { w: 'ブレーキング', r: 'ぶれーきんぐ', it: 'frenata' },
      { w: '前輪', r: 'ぜんりん', it: 'ruota anteriore' },
      { w: '制動', r: 'せいどう', it: 'frenata, azione frenante' },
      { w: 'ブレーキ', r: 'ぶれーき', it: 'freno' },
      { w: 'トレイルブレーキング', r: 'とれいるぶれーきんぐ', it: 'trail braking' },
      { w: '摩擦円', r: 'まさつえん', it: 'cerchio di aderenza' },
      { w: '目印', r: 'めじるし', it: 'riferimento, punto di riferimento' },
      { w: '技術', r: 'ぎじゅつ', it: 'tecnica' }
    ]
  });

  A('moto-traiettorie-e-corda', {
    title: { t: 'ラインとクリッピングポイント', it: 'Traiettorie e punti di corda' },
    sum: [
      { t: '⟦ライン⟧は、カーブの[中|なか]の[通|とお]り[道|みち]です。', it: 'La traiettoria è il percorso della moto nella curva.' },
      { t: 'いいラインは、⟦[出口|でぐち]⟧の[速度|そくど]が[高|たか]くなる[線|せん]です。', it: 'La linea buona è quella che fa uscire più veloci.' },
      { t: 'カーブには、[入口|いりぐち]と⟦クリッピングポイント⟧と[出口|でぐち]があります。', it: 'La curva ha ingresso, punto di corda e uscita.' },
      { t: '⟦[半径|はんけい]⟧が[大|おお]きいほど、[速|はや]く[曲|ま]がれます。', it: 'Più il raggio è grande, più veloce si può curvare.' },
      { t: '[出口|でぐち]から[考|かんが]えて、ラインを[選|えら]びます。', it: 'La linea si sceglie ragionando a partire dall’uscita.' },
      { t: '⟦レイトエイペックス⟧は、[早|はや]く[立|た]て[直|なお]して、⟦アクセル⟧を[早|はや]く[開|あ]けます。', it: 'Con la corda tardiva ci si raddrizza prima e si apre prima il gas.' },
      { t: '⟦[視線|しせん]⟧は、クリッピングポイントから[出口|でぐち]へ[向|む]けます。', it: 'Lo sguardo va dal punto di corda all’uscita.' }
    ],
    gloss: [
      { w: 'ライン', r: 'らいん', it: 'traiettoria, linea' },
      { w: '出口', r: 'でぐち', it: 'uscita' },
      { w: 'クリッピングポイント', r: 'くりっぴんぐぽいんと', it: 'punto di corda' },
      { w: '半径', r: 'はんけい', it: 'raggio' },
      { w: 'レイトエイペックス', r: 'れいとえいぺっくす', it: 'corda tardiva' },
      { w: 'アクセル', r: 'あくせる', it: 'gas' },
      { w: '視線', r: 'しせん', it: 'sguardo' },
      { w: '入口', r: 'いりぐち', it: 'ingresso' }
    ]
  });

  A('moto-gas-e-uscita', {
    title: { t: 'アクセルとコーナー[出口|でぐち]', it: 'Il gas e l’uscita di curva' },
    sum: [
      { t: '⟦[出口|でぐち]⟧の[速度|そくど]は、[次|つぎ]の[直線|ちょくせん]でずっと[効|き]きます。', it: 'La velocità in uscita pesa su tutto il rettilineo successivo.' },
      { t: '⟦アクセル⟧は[敏感|びんかん]なので、[小|ちい]さな[動|うご]きで[開|あ]けます。', it: 'Il gas è molto sensibile, quindi si apre con piccoli movimenti.' },
      { t: '[手首|てくび]はやわらかく、[肘|ひじ]は[自由|じゆう]にします。', it: 'Il polso è morbido e il gomito è libero.' },
      { t: '⟦[摩擦円|まさつえん]⟧は、[加速|かそく]の[時|とき]にも[当|あ]てはまります。', it: 'Il cerchio di aderenza vale anche in accelerazione.' },
      { t: '[加速|かそく]の[時|とき]は、⟦[荷重|かじゅう]⟧が[後|うし]ろへ[移|うつ]ります。', it: 'In accelerazione il carico si sposta indietro.' },
      { t: '⟦[後輪|こうりん]⟧は、わずかな⟦スリップ⟧で[力|ちから]を[伝|つた]えます。', it: 'La ruota posteriore trasmette forza con un piccolo slittamento.' },
      { t: '⟦トラクションコントロール⟧は、[後輪|こうりん]の[滑|すべ]りを[検知|けんち]して[力|ちから]を[減|へ]らします。', it: 'Il controllo di trazione rileva lo slittamento e riduce la forza.' }
    ],
    gloss: [
      { w: '出口', r: 'でぐち', it: 'uscita' },
      { w: 'アクセル', r: 'あくせる', it: 'gas' },
      { w: '摩擦円', r: 'まさつえん', it: 'cerchio di aderenza' },
      { w: '荷重', r: 'かじゅう', it: 'carico' },
      { w: '後輪', r: 'こうりん', it: 'ruota posteriore' },
      { w: 'スリップ', r: 'すりっぷ', it: 'slittamento' },
      { w: 'トラクションコントロール', r: 'とらくしょんこんとろーる', it: 'controllo di trazione' },
      { w: '加速', r: 'かそく', it: 'accelerazione' }
    ]
  });

  A('moto-cambio-e-freno-motore', {
    title: { t: 'シフトとエンジンブレーキ', it: 'Cambio, scalata e freno motore' },
    sum: [
      { t: '⟦ミッション⟧は、エンジンを[使|つか]える[回転|かいてん]の[範囲|はんい]に[保|たも]ちます。', it: 'Il cambio tiene il motore nella fascia di giri utile.' },
      { t: '⟦[回転数|かいてんすう]⟧が[低|ひく]すぎると、[反応|はんのう]が[鈍|にぶ]くなります。', it: 'Con i giri troppo bassi la risposta è molle.' },
      { t: '⟦シフトダウン⟧では、エンジンの[回転|かいてん]が[上|あ]がります。', it: 'Scalando, i giri del motore salgono.' },
      { t: '⟦エンジンブレーキ⟧は、アクセルを[閉|と]じた[時|とき]の[制動力|せいどうりょく]です。', it: 'Il freno motore è la forza frenante a gas chiuso.' },
      { t: 'ギアが[低|ひく]いほど、エンジンブレーキは[強|つよ]くなります。', it: 'Più la marcia è bassa, più forte è il freno motore.' },
      { t: 'シフトダウンは、[一|ひと]つずつ、ブレーキングの[間|あいだ]に[行|おこな]います。', it: 'Si scala una marcia alla volta, durante la frenata.' },
      { t: '⟦クイックシフター⟧は、⟦クラッチ⟧を[使|つか]わずにシフトアップできます。', it: 'Il quickshifter permette di salire di marcia senza frizione.' }
    ],
    gloss: [
      { w: 'ミッション', r: 'みっしょん', it: 'cambio' },
      { w: '回転数', r: 'かいてんすう', it: 'numero di giri' },
      { w: 'シフトダウン', r: 'しふとだうん', it: 'scalata' },
      { w: 'エンジンブレーキ', r: 'えんじんぶれーき', it: 'freno motore' },
      { w: 'クイックシフター', r: 'くいっくしふたー', it: 'quickshifter' },
      { w: 'クラッチ', r: 'くらっち', it: 'frizione' },
      { w: '制動力', r: 'せいどうりょく', it: 'forza frenante' },
      { w: 'ギア', r: 'ぎあ', it: 'marcia' }
    ]
  });

  A('moto-gomme-e-temperature', {
    title: { t: 'タイヤと[温度|おんど]', it: 'Gestione di gomme e temperature' },
    sum: [
      { t: 'ゴムの⟦グリップ⟧は、⟦[温度|おんど]⟧で[変|か]わります。', it: 'L’aderenza della gomma cambia con la temperatura.' },
      { t: '[冷|つめ]たいゴムは[硬|かた]く、グリップが[弱|よわ]いです。', it: 'La gomma fredda è dura e ha poco grip.' },
      { t: '[熱|あつ]すぎると、ゴムは[柔|やわ]らかくなって⟦[摩耗|まもう]⟧が[進|すす]みます。', it: 'Se è troppo calda, la gomma si ammorbidisce e si consuma di più.' },
      { t: 'タイヤには、⟦[適正温度|てきせいおんど]⟧の[範囲|はんい]があります。', it: 'Il pneumatico ha una finestra di temperatura ottimale.' },
      { t: '⟦ウォームアップ⟧は、ゆっくりとやさしい[操作|そうさ]で[行|おこな]います。', it: 'Il riscaldamento si fa con calma e comandi dolci.' },
      { t: '⟦[空気圧|くうきあつ]⟧は、タイヤが[熱|あつ]くなると[上|あ]がります。', it: 'La pressione sale quando il pneumatico si scalda.' },
      { t: '[内側|うちがわ]の[布|ぬの]が[見|み]えたら、すぐ⟦[交換|こうかん]⟧します。', it: 'Se si vede il tessuto interno, si sostituisce subito.' }
    ],
    gloss: [
      { w: 'グリップ', r: 'ぐりっぷ', it: 'aderenza' },
      { w: '温度', r: 'おんど', it: 'temperatura' },
      { w: '摩耗', r: 'まもう', it: 'usura' },
      { w: '適正温度', r: 'てきせいおんど', it: 'temperatura ottimale' },
      { w: 'ウォームアップ', r: 'うぉーむあっぷ', it: 'riscaldamento' },
      { w: '空気圧', r: 'くうきあつ', it: 'pressione dell’aria' },
      { w: '交換', r: 'こうかん', it: 'sostituire' },
      { w: '範囲', r: 'はんい', it: 'intervallo, finestra' }
    ]
  });

  A('moto-kart-e-auto-in-pista', {
    title: { t: 'カートと[車|くるま]のサーキット', it: 'Kart e auto in pista' },
    sum: [
      { t: 'バイクもカートも[車|くるま]も、[同|おな]じ[物理|ぶつり]に[従|したが]います。', it: 'Moto, kart e auto seguono la stessa fisica.' },
      { t: 'どれにも、タイヤの⟦[摩擦円|まさつえん]⟧があります。', it: 'Per tutti vale il cerchio di aderenza del pneumatico.' },
      { t: '⟦アンダーステア⟧は、[前輪|ぜんりん]が[先|さき]に[滑|すべ]って[外|そと]へ[膨|ふく]らむことです。', it: 'Il sottosterzo è quando l’anteriore scivola per primo e si allarga.' },
      { t: '⟦オーバーステア⟧は、[後輪|こうりん]が[先|さき]に[滑|すべ]ることです。', it: 'Il sovrasterzo è quando scivola per primo il posteriore.' },
      { t: 'バイクは⟦カウンターステア⟧、カートと[車|くるま]は⟦ハンドル⟧で[曲|ま]がります。', it: 'La moto gira col controsterzo, kart e auto col volante.' },
      { t: '⟦カート⟧は、ラインやブレーキを[学|まな]ぶ[良|よ]い[学校|がっこう]です。', it: 'Il kart è una buona scuola per imparare linea e frenata.' },
      { t: '[認証|にんしょう]を[受|う]けたヘルメットなどの⟦[装備|そうび]⟧が[必要|ひつよう]です。', it: 'Servono casco omologato e altro equipaggiamento.' }
    ],
    gloss: [
      { w: '摩擦円', r: 'まさつえん', it: 'cerchio di aderenza' },
      { w: 'アンダーステア', r: 'あんだーすてあ', it: 'sottosterzo' },
      { w: 'オーバーステア', r: 'おーばーすてあ', it: 'sovrasterzo' },
      { w: 'カウンターステア', r: 'かうんたーすてあ', it: 'controsterzo' },
      { w: 'ハンドル', r: 'はんどる', it: 'volante, manubrio' },
      { w: 'カート', r: 'かーと', it: 'kart' },
      { w: '装備', r: 'そうび', it: 'equipaggiamento' },
      { w: '前輪', r: 'ぜんりん', it: 'ruote anteriori' },
      { w: '後輪', r: 'こうりん', it: 'ruote posteriori' }
    ]
  });

  A('moto-preparazione-del-pilota', {
    title: { t: 'ライダーの[準備|じゅんび]', it: 'Preparazione fisica e mentale del pilota' },
    sum: [
      { t: 'ライダーは⟦アスリート⟧で、[走行|そうこう]は[体|からだ]の[仕事|しごと]です。', it: 'Il pilota è un atleta e guidare è un lavoro fisico.' },
      { t: '⟦[体幹|たいかん]⟧は、[腕|うで]に[頼|たよ]らず[体|からだ]を[安定|あんてい]させます。', it: 'Il core stabilizza il corpo senza appoggiarsi alle braccia.' },
      { t: '[脚|あし]は、ステップとタンクを[挟|はさ]む[力|ちから]に[使|つか]います。', it: 'Le gambe servono per spingere sulle pedane e stringere il serbatoio.' },
      { t: '⟦[有酸素運動|ゆうさんそうんどう]⟧は、[走行|そうこう]の[間|あいだ]の[回復|かいふく]を[助|たす]けます。', it: 'L’allenamento aerobico aiuta a recuperare tra i turni.' },
      { t: 'スーツとヘルメットは[熱|ねつ]がこもるので、⟦[水分補給|すいぶんほきゅう]⟧が[大切|たいせつ]です。', it: 'Tuta e casco trattengono il calore, quindi è importante idratarsi.' },
      { t: '⟦イメージトレーニング⟧は、[頭|あたま]の[中|なか]で[一周|いっしゅう]を[繰|く]り[返|かえ]します。', it: 'La visualizzazione ripete mentalmente un giro.' },
      { t: '⟦[焦|あせ]り⟧や⟦エゴ⟧が、ミスの[原因|げんいん]になります。', it: 'Fretta ed ego causano errori.' }
    ],
    gloss: [
      { w: 'アスリート', r: 'あすりーと', it: 'atleta' },
      { w: '体幹', r: 'たいかん', it: 'core, tronco' },
      { w: '有酸素運動', r: 'ゆうさんそうんどう', it: 'esercizio aerobico' },
      { w: '水分補給', r: 'すいぶんほきゅう', it: 'idratazione' },
      { w: 'イメージトレーニング', r: 'いめーじとれーにんぐ', it: 'visualizzazione mentale' },
      { w: '焦り', r: 'あせり', it: 'fretta' },
      { w: 'エゴ', r: 'えご', it: 'ego' },
      { w: '回復', r: 'かいふく', it: 'recupero' },
      { w: '原因', r: 'げんいん', it: 'causa' }
    ]
  });
})(window.ST = window.ST || {});
