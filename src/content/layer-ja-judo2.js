(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('ja', id, o);

  A('jud-th-storia-del-judo', {
    title: { t: '[柔道|じゅうどう]の[歴史|れきし]', it: 'Storia del judo: dal jujutsu alle Olimpiadi' },
    sum: [
      { t: '[柔道|じゅうどう]の[前|まえ]に、[日本|にほん]には⟦[柔術|じゅうじゅつ]⟧の⟦[流派|りゅうは]⟧がたくさんありました。', it: 'Prima del judo il Giappone aveva molte scuole di jujutsu.' },
      { t: '⟦[嘉納治五郎|かのうじごろう]⟧は、その[技|わざ]を[選|えら]んで[整|ととの]えました。', it: 'Jigoro Kano scelse e riordinò quelle tecniche.' },
      { t: '[東京|とうきょう]に⟦[講道館|こうどうかん]⟧を[作|つく]ったのは、[千八百八十二年|せんはっぴゃくはちじゅうにねん]です。', it: 'Il Kodokan fu fondato a Tokyo nel 1882.' },
      { t: '[自由|じゆう]に[練習|れんしゅう]する⟦[乱取|らんど]り⟧も、[取|と]り[入|い]れました。', it: 'Introdusse anche il randori, la pratica libera.' },
      { t: '[国際柔道連盟|こくさいじゅうどうれんめい]は、[千九百五十一年|せんきゅうひゃくごじゅういちねん]にできました。', it: 'La federazione internazionale nacque nel 1951.' },
      { t: '[柔道|じゅうどう]は、[東京|とうきょう]の⟦オリンピック⟧で[初|はじ]めて[行|おこな]われました。', it: 'Il judo fu olimpico per la prima volta a Tokyo nel 1964.' },
      { t: '[女子|じょし]の[柔道|じゅうどう]は、バルセロナで[正式種目|せいしきしゅもく]になりました。', it: 'Il judo femminile divenne ufficiale a Barcellona nel 1992.' }
    ],
    gloss: [
      { w: '柔術', r: 'じゅうじゅつ', it: 'jujutsu' },
      { w: '流派', r: 'りゅうは', it: 'scuola tradizionale' },
      { w: '嘉納治五郎', r: 'かのうじごろう', it: 'Jigoro Kano' },
      { w: '講道館', r: 'こうどうかん', it: 'Kodokan' },
      { w: '乱取り', r: 'らんどり', it: 'randori, allenamento libero' },
      { w: 'オリンピック', r: 'おりんぴっく', it: 'Olimpiadi' },
      { w: '歴史', r: 'れきし', it: 'storia' },
      { w: '女子', r: 'じょし', it: 'femminile' }
    ]
  });

  A('jud-th-sistema-dei-gradi', {
    title: { t: '[級|きゅう]と[段|だん]', it: 'Il sistema dei gradi: kyu e dan' },
    sum: [
      { t: '[柔道|じゅうどう]の⟦[階級|かいきゅう]⟧には、⟦[級|きゅう]⟧と⟦[段|だん]⟧があります。', it: 'I gradi del judo sono i kyu e i dan.' },
      { t: '[級|きゅう]は⟦[黒帯|くろおび]⟧の[前|まえ]の[階級|かいきゅう]です。', it: 'I kyu sono i gradi prima della cintura nera.' },
      { t: '[級|きゅう]の[数|かず]は、[黒帯|くろおび]に[近|ちか]いほど[少|すく]なくなります。', it: 'Il numero dei kyu diminuisce avvicinandosi alla cintura nera.' },
      { t: '[段|だん]の[数|かず]は、[上|うえ]に[行|い]くほど[大|おお]きくなります。', it: 'Il numero dei dan cresce salendo.' },
      { t: '⟦[帯|おび]⟧の[色|いろ]は、[国|くに]や⟦[団体|だんたい]⟧によって[違|ちが]います。', it: 'I colori delle cinture cambiano secondo il paese e la federazione.' },
      { t: '[黒帯|くろおび]は[終|お]わりではなく、[始|はじ]まりです。', it: 'La cintura nera è un inizio, non una fine.' },
      { t: '[階級|かいきゅう]は[力|ちから]ではなく、⟦[経験|けいけん]⟧や[態度|たいど]を[表|あらわ]します。', it: 'Il grado esprime esperienza e comportamento, non la forza.' }
    ],
    gloss: [
      { w: '級', r: 'きゅう', it: 'kyu, grado degli allievi' },
      { w: '段', r: 'だん', it: 'dan, grado delle cinture nere' },
      { w: '帯', r: 'おび', it: 'cintura' },
      { w: '黒帯', r: 'くろおび', it: 'cintura nera' },
      { w: '階級', r: 'かいきゅう', it: 'grado' },
      { w: '団体', r: 'だんたい', it: 'federazione, organizzazione' },
      { w: '経験', r: 'けいけん', it: 'esperienza' },
      { w: '態度', r: 'たいど', it: 'comportamento' }
    ]
  });

  A('jud-th-cultura-del-dojo', {
    title: { t: '[道場|どうじょう]のマナー', it: 'Cultura del dojo: rispetto, tatami, abbigliamento' },
    sum: [
      { t: '⟦[道場|どうじょう]⟧は、[道|みち]を[学|まな]ぶ[場所|ばしょ]です。', it: 'Il dojo è il luogo dove si studia la via.' },
      { t: '[立|た]ってする⟦[礼|れい]⟧と、[座|すわ]ってする[礼|れい]があります。', it: 'C’è il saluto in piedi e quello in ginocchio.' },
      { t: '⟦[畳|たたみ]⟧には、くつをぬいで[上|あ]がります。', it: 'Sul tatami si sale senza scarpe.' },
      { t: '⟦[柔道着|じゅうどうぎ]⟧は、いつもきれいにしておきます。', it: 'Il judogi si tiene sempre pulito.' },
      { t: '⟦[先生|せんせい]⟧の[話|はなし]をよく[聞|き]き、⟦[仲間|なかま]⟧を[助|たす]けます。', it: 'Si ascolta l’istruttore e si aiutano i compagni.' },
      { t: '⟦[準備運動|じゅんびうんどう]⟧は、けがを[減|へ]らします。', it: 'Il riscaldamento riduce gli infortuni.' },
      { t: '[強|つよ]い[痛|いた]みがあれば、すぐやめて[医者|いしゃ]に[行|い]きます。', it: 'Con dolore forte ti fermi e vai dal medico.' }
    ],
    gloss: [
      { w: '道場', r: 'どうじょう', it: 'dojo' },
      { w: '礼', r: 'れい', it: 'saluto, rispetto' },
      { w: '畳', r: 'たたみ', it: 'tatami' },
      { w: '柔道着', r: 'じゅうどうぎ', it: 'judogi' },
      { w: '準備運動', r: 'じゅんびうんどう', it: 'riscaldamento' },
      { w: '先生', r: 'せんせい', it: 'istruttore' },
      { w: '仲間', r: 'なかま', it: 'compagni' },
      { w: '医者', r: 'いしゃ', it: 'medico' }
    ]
  });

  A('jud-th-preparazione-fisica', {
    title: { t: '[柔道|じゅうどう]のための[体|からだ]づくり', it: 'Preparazione fisica per il judo' },
    sum: [
      { t: '[柔道|じゅうどう]には、⟦[握力|あくりょく]⟧と⟦[体幹|たいかん]⟧が[大切|たいせつ]です。', it: 'Nel judo contano la forza di presa e il core.' },
      { t: '[体|からだ]づくりは、[技|わざ]を[助|たす]けるもので、[代|か]わりにはなりません。', it: 'La preparazione aiuta la tecnica, non la sostituisce.' },
      { t: '⟦[鉄棒|てつぼう]⟧にぶら[下|さ]がって、[握力|あくりょく]を[鍛|きた]えます。', it: 'Appeso a una sbarra alleni la presa.' },
      { t: '[体幹|たいかん]は、⟦[背中|せなか]⟧をまっすぐにして[鍛|きた]えます。', it: 'Il core si allena tenendo la schiena dritta.' },
      { t: '⟦[首|くび]⟧は、いつもゆっくり[動|うご]かします。', it: 'Il collo si muove sempre lentamente.' },
      { t: '⟦[回復|かいふく]⟧のために、⟦[睡眠|すいみん]⟧と[休|やす]みが[必要|ひつよう]です。', it: 'Per il recupero servono sonno e riposo.' },
      { t: '[痛|いた]みや[疲|つか]れが[続|つづ]くときは、[量|りょう]を[減|へ]らします。', it: 'Con dolore o stanchezza persistenti riduci il carico.' }
    ],
    gloss: [
      { w: '握力', r: 'あくりょく', it: 'forza di presa' },
      { w: '体幹', r: 'たいかん', it: 'core, tronco' },
      { w: '回復', r: 'かいふく', it: 'recupero' },
      { w: '鉄棒', r: 'てつぼう', it: 'sbarra' },
      { w: '睡眠', r: 'すいみん', it: 'sonno' },
      { w: '背中', r: 'せなか', it: 'schiena' },
      { w: '首', r: 'くび', it: 'collo' },
      { w: '疲れ', r: 'つかれ', it: 'stanchezza' }
    ]
  });

  A('jud-th-albero-delle-tecniche', {
    title: { t: '[技|わざ]の[分類|ぶんるい]', it: 'L’albero delle tecniche e i limiti per età' },
    sum: [
      { t: '[柔道|じゅうどう]の[技|わざ]は、[大|おお]きく[二|ふた]つに[分|わ]かれます。', it: 'Le tecniche del judo si dividono in due grandi gruppi.' },
      { t: '⟦[投|な]げ[技|わざ]⟧は、[相手|あいて]を[投|な]げる[技|わざ]です。', it: 'Le nage-waza sono le tecniche di proiezione.' },
      { t: '⟦[固|かた]め[技|わざ]⟧は、[寝|ね]た[姿勢|しせい]で[相手|あいて]を[抑|おさ]える[技|わざ]です。', it: 'Le katame-waza sono le tecniche di controllo a terra.' },
      { t: '[固|かた]め[技|わざ]には、[抑|おさ]え[込|こ]み、⟦[絞|し]め[技|わざ]⟧、⟦[関節技|かんせつわざ]⟧があります。', it: 'Tra queste: immobilizzazioni, strangolamenti e leve.' },
      { t: '[技|わざ]をかける[人|ひと]を⟦[取|と]り⟧、[受|う]ける[人|ひと]を⟦[受|う]け⟧といいます。', it: 'Chi esegue è il tori, chi riceve è l’uke.' },
      { t: '[参|ま]ったの⟦[合図|あいず]⟧があれば、すぐに[放|はな]します。', it: 'Al segnale di resa si molla subito.' },
      { t: '[子|こ]どもの[試合|しあい]では、[絞|し]め[技|わざ]や[関節技|かんせつわざ]を[制限|せいげん]します。', it: 'Nelle gare dei bambini strangolamenti e leve sono limitati.' }
    ],
    gloss: [
      { w: '投げ技', r: 'なげわざ', it: 'nage-waza, proiezioni' },
      { w: '固め技', r: 'かためわざ', it: 'katame-waza, controlli' },
      { w: '絞め技', r: 'しめわざ', it: 'strangolamenti' },
      { w: '関節技', r: 'かんせつわざ', it: 'leve articolari' },
      { w: '取り', r: 'とり', it: 'tori, chi esegue' },
      { w: '受け', r: 'うけ', it: 'uke, chi riceve' },
      { w: '合図', r: 'あいず', it: 'segnale' },
      { w: '制限', r: 'せいげん', it: 'limite' }
    ]
  });

  A('jud-th-gokyo-no-waza', {
    title: { t: '[五教|ごきょう]の[技|わざ]', it: 'Il Gokyo no waza: i cinque gruppi' },
    sum: [
      { t: '⟦[五教|ごきょう]⟧は、⟦[講道館|こうどうかん]⟧の[投|な]げ[技|わざ]の[一覧|いちらん]です。', it: 'Il Gokyo è l’elenco Kodokan delle proiezioni.' },
      { t: '[五|いつ]つの[教|きょう]に、[八|やっ]つずつ[技|わざ]があります。', it: 'Ha cinque gruppi di otto tecniche ciascuno.' },
      { t: '[全部|ぜんぶ]で、[四十|よんじゅう]の[技|わざ]になります。', it: 'In tutto sono quaranta tecniche.' },
      { t: '[第一教|だいいっきょう]には、⟦[大腰|おおごし]⟧と⟦[背負投|せおいなげ]⟧があります。', it: 'Nel primo gruppo ci sono o-goshi e seoi-nage.' },
      { t: '[第二教|だいにきょう]には、⟦[体|たい][落|お]とし⟧と⟦[内股|うちまた]⟧があります。', it: 'Nel secondo gruppo ci sono tai-otoshi e uchi-mata.' },
      { t: '⟦[捨身技|すてみわざ]⟧は、[第三教|だいさんきょう]から[出|で]てきます。', it: 'Le tecniche di sacrificio compaiono dal terzo gruppo.' },
      { t: '⟦[順番|じゅんばん]⟧は[学|まな]ぶ[順|じゅん]で、[易|やさ]しさではありません。', it: 'L’ordine è didattico, non di facilità.' }
    ],
    gloss: [
      { w: '五教', r: 'ごきょう', it: 'Gokyo, cinque gruppi' },
      { w: '講道館', r: 'こうどうかん', it: 'Kodokan' },
      { w: '大腰', r: 'おおごし', it: 'o-goshi' },
      { w: '背負投', r: 'せおいなげ', it: 'seoi-nage' },
      { w: '体落とし', r: 'たいおとし', it: 'tai-otoshi' },
      { w: '内股', r: 'うちまた', it: 'uchi-mata' },
      { w: '捨身技', r: 'すてみわざ', it: 'tecniche di sacrificio' },
      { w: '順番', r: 'じゅんばん', it: 'ordine' }
    ]
  });

  A('jud-th-ne-waza-principi', {
    title: { t: '[寝技|ねわざ]の[考|かんが]え[方|かた]', it: 'Ne-waza: principi del lavoro a terra' },
    sum: [
      { t: '⟦[寝技|ねわざ]⟧は、[寝|ね]た[姿勢|しせい]で[行|おこな]う[技|わざ]です。', it: 'Il ne-waza è il lavoro in posizione sdraiata.' },
      { t: '[大切|たいせつ]なのは、⟦[接触|せっしょく]⟧と[体重|たいじゅう]と[広|ひろ]い⟦[土台|どだい]⟧です。', it: 'Contano contatto, peso e una base larga.' },
      { t: '⟦[袈裟固|けさが]め⟧は、[横|よこ]から[頭|あたま]と[腕|うで]を[抑|おさ]えます。', it: 'Il kesa-gatame controlla testa e braccio di lato.' },
      { t: '⟦[横四方固|よこしほうが]め⟧と⟦[上四方固|かみしほうが]め⟧も[基本|きほん]です。', it: 'Anche yoko-shiho-gatame e kami-shiho-gatame sono di base.' },
      { t: '⟦[縦四方固|たてしほうが]め⟧は、[上|うえ]に[乗|の]って[抑|おさ]えます。', it: 'Il tate-shiho-gatame controlla stando sopra.' },
      { t: '[一人|ひとり]では、ブリッジとエビで[動|うご]きを[練習|れんしゅう]します。', it: 'Da solo alleni il movimento con bridge e shrimp.' },
      { t: '[首|くび]に[体重|たいじゅう]をかけず、ゆっくり[行|おこな]います。', it: 'Senza caricare il collo, lentamente.' }
    ],
    gloss: [
      { w: '寝技', r: 'ねわざ', it: 'ne-waza, lavoro a terra' },
      { w: '袈裟固め', r: 'けさがため', it: 'kesa-gatame' },
      { w: '横四方固め', r: 'よこしほうがため', it: 'yoko-shiho-gatame' },
      { w: '上四方固め', r: 'かみしほうがため', it: 'kami-shiho-gatame' },
      { w: '縦四方固め', r: 'たてしほうがため', it: 'tate-shiho-gatame' },
      { w: '接触', r: 'せっしょく', it: 'contatto' },
      { w: '土台', r: 'どだい', it: 'base' },
      { w: 'ブリッジ', r: 'ぶりっじ', it: 'ponte' }
    ]
  });

  A('jud-th-regole-di-gara', {
    title: { t: '[試合|しあい]のルール', it: 'Regole di gara e arbitraggio (IJF)' },
    sum: [
      { t: 'ルールは[変|か]わるので、いつも[新|あたら]しい[規則|きそく]を[確|たし]かめます。', it: 'Le regole cambiano, quindi controlli sempre il regolamento nuovo.' },
      { t: '⟦[一本|いっぽん]⟧は、[試合|しあい]が[終|お]わる[一番|いちばん][大|おお]きな[点|てん]です。', it: 'L’ippon è il punto massimo e chiude l’incontro.' },
      { t: '⟦[技|わざ]あり⟧は、[一本|いっぽん]より[小|ちい]さい[点|てん]です。', it: 'Il waza-ari è un punto minore dell’ippon.' },
      { t: '⟦[抑|おさ]え[込|こ]み⟧は、[時間|じかん]の[長|なが]さで[点|てん]が[決|き]まります。', it: 'Nell’osaekomi il punto dipende dalla durata.' },
      { t: '⟦[指導|しどう]⟧は[軽|かる]い[反則|はんそく]で、⟦[反則負|はんそくま]け⟧は[負|ま]けです。', it: 'Lo shido è una penalità lieve, l’hansoku-make una sconfitta.' },
      { t: '⟦[同点|どうてん]⟧のときは、ゴールデンスコアで[決|き]めます。', it: 'In caso di parità si decide con il golden score.' },
      { t: '⟦[審判|しんぱん]⟧の[号令|ごうれい]は、[始|はじ]め、[待|ま]て、それまでです。', it: 'I comandi sono hajime, mate e sore-made.' }
    ],
    gloss: [
      { w: '一本', r: 'いっぽん', it: 'ippon' },
      { w: '技あり', r: 'わざあり', it: 'waza-ari' },
      { w: '抑え込み', r: 'おさえこみ', it: 'osaekomi, immobilizzazione' },
      { w: '指導', r: 'しどう', it: 'shido, penalità lieve' },
      { w: '反則負け', r: 'はんそくまけ', it: 'hansoku-make' },
      { w: '審判', r: 'しんぱん', it: 'arbitro' },
      { w: '同点', r: 'どうてん', it: 'parità' },
      { w: 'ゴールデンスコア', r: 'ごーるでんすこあ', it: 'golden score' }
    ]
  });
})(window.ST = window.ST || {});
