/* vNext M5 — Japanese Immersion Lab: 8 scenari ramificati (N5, N4, N3). I campi any/model/accept sono kana/kanji semplici (senza ruby);
   le alternative nei campi any coprono kana, katakana e romaji perché il confronto avviene sulla forma normalizzata. */
(function (ST) {
  'use strict';
  const Cv = ST.sma.convo;

  /* 1 — N5 konbini */
  Cv.add({ id: 'cv-ja-konbini', lang: 'ja', level: 'N5', area: 'Konbini', title: 'Al konbini: bento, sacchetto e pagamento', setting: 'Compri un bento in un minimarket aperto 24 ore.', start: 'n1', nodes: {
    n1: { npc: { t: 'いらっしゃいませ。おべんとうを [温|あたた]めますか。', tr: 'Benvenuto. Scalda il bento?' }, listen: true, task: { kind: 'choose', q: 'Ascolta e scegli la risposta adatta.', opts: [
      { t: 'はい、お[願|ねが]いします。', q: 3, why: 'Risposta cortese e naturale: お願いします significa «per favore, sì».', next: 'n2' },
      { t: 'いいえ、[大丈夫|だいじょうぶ]です。', q: 3, why: 'Anche questa è corretta: «no, va bene così». Senza riscaldare si passa al ramo successivo.', next: 'n3' },
      { t: 'あたためて。', q: 1, why: 'Forma informale e brusca: con un commesso si usa あたためてください oppure お願いします.', next: 'n2' },
      { t: 'はい、ふくろです。', q: 0, why: 'Non risponde alla domanda: il commesso ha chiesto di scaldare (温める), non del sacchetto.', next: 'n3' }] } },
    n2: { npc: { t: '[温|あたた]めます。[少|すこ]し [待|ま]って ください。[箸|はし]は いりますか。', tr: 'Lo scaldo. Attenda un momento, per favore. Le servono le bacchette?' }, task: { kind: 'produce', register: 'polite', prompt: 'Di che ti servono le bacchette e usa una formula cortese.', must: [
      { id: 'hashi', label: 'chiede le bacchette', any: ['はし', 'ハシ', 'おはし', 'hashi'] },
      { id: 'req', label: 'formula cortese (ください / お願いします)', any: ['ください', 'おねがい', 'お願いします', 'kudasai', 'onegai'] }], min: 6, model: 'はしを ください。', next: 'n4' } },
    n3: { npc: { t: 'ほかに [何|なに]か ありますか。', tr: 'Desidera altro?' }, task: { kind: 'order', prompt: 'Costruisci: «Il tè, per favore».', words: ['おちゃ', 'を', 'ください'], accept: ['おちゃをください', 'おちゃを ください'], model: 'おちゃを ください。', next: 'n4' } },
    n4: { npc: { t: 'ポイントカードは ありますか。', tr: 'Ha la carta punti?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista. Come rispondi?', opts: [
      { t: 'いいえ、ありません。', q: 3, why: 'Risposta corretta e cortese: ありません è la forma negativa cortese di あります.', next: 'n5' },
      { t: 'はい、あります。でも [今|いま]、[持|も]って いません。', q: 3, why: 'Risposta valida e articolata: ho la carta ma non la porto con me.', next: 'n5' },
      { t: 'ない。', q: 1, why: 'Forma informale: con un commesso serve ありません.', next: 'n5' },
      { t: 'はい、ありますか。', q: 0, why: 'Hai ripetuto la domanda con か: per rispondere si dice はい、あります oppure いいえ、ありません.', next: 'n5' }] } },
    n5: { npc: { t: '[全部|ぜんぶ]で [五百二十|ごひゃくにじゅう][円|えん]です。', tr: 'In tutto sono 520 yen.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: quanto devi pagare?', opts: [
      { t: '[五百二十|ごひゃくにじゅう][円|えん]', q: 3, why: '五百二十 = 500 + 20 (ごひゃく + にじゅう).', next: 'n6' },
      { t: '[五百十二|ごひゃくじゅうに][円|えん]', q: 1, why: 'Hai invertito le ultime due cifre: 十二 è 12, mentre 二十 è 20.', next: 'n6' },
      { t: '[二百五十|にひゃくごじゅう][円|えん]', q: 0, why: 'Hai sentito 250: l’inizio è ごひゃく (500), non にひゃく (200).', next: 'n6' }] } },
    n6: { npc: { t: '[現金|げんきん]ですか。カードですか。', tr: 'In contanti o con la carta?' }, task: { kind: 'produce', register: 'polite', prompt: 'Di che paghi con la carta e chiedi un sacchetto.', must: [
      { id: 'card', label: 'paga con la carta', any: ['カード', 'かーど', 'クレジット', 'kaado', 'ka-do', 'kado'] },
      { id: 'bag', label: 'chiede un sacchetto', any: ['ふくろ', 'ぶくろ', 'フクロ', 'ブクロ', 'fukuro', 'bukuro'] }], min: 8, model: 'カードで はらいます。ふくろを ください。', next: 'n7' } },
    n7: { npc: { t: 'レシートは いりますか。', tr: 'Vuole lo scontrino?' }, task: { kind: 'choose', q: 'Rispondi in modo cortese.', opts: [
      { t: 'はい、お[願|ねが]いします。', q: 3, why: 'Cortese e chiaro.', next: 'n8' },
      { t: 'いりません。', q: 2, why: 'Corretto ma un po’ secco; meglio いいえ、大丈夫です oppure けっこうです.', next: 'n8' },
      { t: 'いる。', q: 1, why: 'Forma informale: al negozio si usa はい、お願いします.', next: 'n8' }] } },
    n8: { npc: { t: 'ありがとうございました。また どうぞ。', tr: 'Grazie mille. Torni a trovarci.' }, end: true } } });

  /* 2 — N5 ristorante di ramen */
  Cv.add({ id: 'cv-ja-ramen', lang: 'ja', level: 'N5', area: 'Ristorante', title: 'Al ristorante di ramen: ordinare con ください', setting: 'Entri in una piccola ramenya e ordini al banco.', start: 'n1', nodes: {
    n1: { npc: { t: 'いらっしゃいませ。[何人|なんにん]ですか。', tr: 'Benvenuto. In quanti siete?' }, listen: true, task: { kind: 'choose', q: 'Ascolta e rispondi in base a quante persone siete (da solo o in due).', opts: [
      { t: '[一人|ひとり]です。', q: 3, why: 'Per le persone si usa ひとり (1), ふたり (2)… non i contatori delle cose.', next: 'n2' },
      { t: '[二人|ふたり]です。', q: 3, why: 'Risposta corretta se siete in due: ふたり. Vi portano al tavolo.', next: 'n3' },
      { t: '[一|ひと]つです。', q: 1, why: 'ひとつ si usa per le cose; per le persone serve ひとり.', next: 'n2' },
      { t: 'はい、ラーメンです。', q: 0, why: 'Non risponde: il commesso ha chiesto quante persone siete (何人).', next: 'n2' }] } },
    n2: { npc: { t: 'カウンターの [席|せき]へ どうぞ。ご[注文|ちゅうもん]は？', tr: 'Si accomodi al banco. Cosa ordina?' }, task: { kind: 'produce', register: 'polite', prompt: 'Ordina un ramen e dell’acqua usando ください.', must: [
      { id: 'ramen', label: 'ordina il ramen', any: ['ラーメン', 'らーめん', 'らあめん', 'raamen', 'ramen'] },
      { id: 'water', label: 'chiede dell’acqua', any: ['おみず', 'みず', 'ミズ', 'ウォーター', 'omizu', 'mizu'] }], min: 8, model: 'ラーメンと おみずを ください。', next: 'n4' } },
    n3: { npc: { t: 'テーブルの [席|せき]へ どうぞ。', tr: 'Si accomodi al tavolo.' }, task: { kind: 'order', prompt: 'Costruisci: «Un ramen, per favore».', words: ['ラーメン', 'を', 'ください'], accept: ['ラーメンをください', 'ラーメンを ください', 'らーめんをください'], model: 'ラーメンを ください。', next: 'n4' } },
    n4: { npc: { t: '[辛|から]いのは [大丈夫|だいじょうぶ]ですか。', tr: 'Il piccante va bene?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista. Come rispondi?', opts: [
      { t: 'はい、[大丈夫|だいじょうぶ]です。', q: 3, why: 'Risposta corretta e cortese.', next: 'n5' },
      { t: 'いいえ、[辛|から]いのは ちょっと。', q: 3, why: 'Modo gentile di rifiutare: ちょっと lascia intendere «meglio di no».', next: 'n5' },
      { t: 'いいえ、[大丈夫|だいじょうぶ]です。', q: 1, why: 'Ambiguo: 大丈夫 può voler dire «no grazie» o «va bene»; meglio chiarire con はい o con 辛いのはちょっと.', next: 'n5' },
      { t: '[辛|から]い。', q: 0, why: 'Dice solo «è piccante»: non risponde e non è cortese.', next: 'n5' }] } },
    n5: { npc: { t: 'おまたせしました。ラーメンです。どうぞ。', tr: 'Scusi l’attesa. Ecco il ramen. Prego.' }, task: { kind: 'produce', register: 'polite', prompt: 'Alla fine del pasto: di che era buono e ringrazia per il pasto.', must: [
      { id: 'tasty', label: 'dice che era buono', any: ['おいしかった', 'おいしい', 'oishikatta', 'oishii'] },
      { id: 'thanks', label: 'ごちそうさまでした', any: ['ごちそうさま', 'gochisousama', 'gochisosama'] }], min: 10, model: 'とても おいしかったです。ごちそうさまでした。', next: 'n6' } },
    n6: { npc: { t: '[千二百円|せんにひゃくえん]です。', tr: 'Sono 1200 yen.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: quanto devi pagare?', opts: [
      { t: '[千二百|せんにひゃく][円|えん]', q: 3, why: '千二百 = 1000 + 200 (せん + にひゃく).', next: 'n7' },
      { t: '[二千百|にせんひゃく][円|えん]', q: 1, why: '2100: hai scambiato le cifre; il numero comincia con せん (1000).', next: 'n7' },
      { t: '[二百|にひゃく][円|えん]', q: 0, why: '200 yen: hai perso せん (mille) all’inizio.', next: 'n7' }] } },
    n7: { npc: { t: '[現金|げんきん]ですか。カードですか。', tr: 'Contanti o carta?' }, task: { kind: 'produce', register: 'polite', prompt: 'Di che paghi in contanti.', must: [
      { id: 'cash', label: 'paga in contanti', any: ['げんきん', 'ゲンキン', 'げんきんで', 'genkin'] },
      { id: 'req', label: 'frase cortese (お願いします / です)', any: ['おねがいします', 'お願いします', 'です', 'onegaishimasu', 'desu'] }], min: 6, model: 'げんきんで お願いします。', next: 'n8' } },
    n8: { npc: { t: 'ありがとうございました。', tr: 'Grazie mille.' }, end: true } } });

  /* 3 — N5 stazione */
  Cv.add({ id: 'cv-ja-eki', lang: 'ja', level: 'N5', area: 'Stazione', title: 'In stazione: biglietto e binario', setting: 'Allo sportello compri un biglietto per Kyoto e trovi il binario.', start: 'n1', nodes: {
    n1: { npc: { t: 'いらっしゃいませ。どちらまで ですか。', tr: 'Benvenuto. Fino a dove?' }, task: { kind: 'produce', register: 'polite', prompt: 'Chiedi un biglietto per Kyoto.', must: [
      { id: 'dest', label: 'destinazione: Kyoto', any: ['きょうと', 'キョウト', 'きょーと', 'kyoto', 'kyouto'] },
      { id: 'ticket', label: 'chiede un biglietto', any: ['きっぷ', 'キップ', 'きつぷ', 'kippu'] }], min: 8, model: 'きょうとまで きっぷを いちまい ください。', next: 'n2' } },
    n2: { npc: { t: '[片道|かたみち]ですか。[往復|おうふく]ですか。', tr: 'Solo andata o andata e ritorno?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista. Come rispondi?', opts: [
      { t: '[片道|かたみち]で お[願|ねが]いします。', q: 3, why: 'Risposta chiara: 片道 è solo andata.', next: 'n3' },
      { t: '[往復|おうふく]で お[願|ねが]いします。', q: 3, why: 'Risposta chiara: 往復 è andata e ritorno.', next: 'n3' },
      { t: '[片道|かたみち]。', q: 1, why: 'Si capisce, ma è troppo secco: aggiungi で お願いします.', next: 'n3' },
      { t: 'はい、そうです。', q: 0, why: 'La domanda offre due scelte: non si risponde con はい.', next: 'n3' }] } },
    n3: { npc: { t: '[二千八百円|にせんはっぴゃくえん]です。', tr: 'Sono 2800 yen.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: quanto costa?', opts: [
      { t: '[二千八百|にせんはっぴゃく][円|えん]', q: 3, why: '二千八百 = にせん + はっぴゃく (800 ha la lettura irregolare はっぴゃく).', next: 'n4' },
      { t: '[二千五百|にせんごひゃく][円|えん]', q: 1, why: '2500: attento a はっぴゃく (800) contro ごひゃく (500).', next: 'n3b' },
      { t: '[八千二百|はっせんにひゃく][円|えん]', q: 0, why: '8200: hai invertito le prime cifre; il prezzo comincia con にせん (2000).', next: 'n3b' }] } },
    n3b: { npc: { t: 'もう いちど [言|い]います。[二千八百円|にせんはっぴゃくえん]です。', tr: 'Lo ripeto. Sono 2800 yen.' }, task: { kind: 'choose', q: 'Hai sentito la ripetizione. Come rispondi?', opts: [
      { t: 'はい、わかりました。どうぞ。', q: 3, why: 'Cortese: «ho capito, ecco».', next: 'n4' },
      { t: 'もう いちど お[願|ねが]いします。', q: 2, why: 'Corretto, ma ora puoi già rispondere.', next: 'n4' },
      { t: 'わからない。', q: 1, why: 'Informale; meglio わかりません oppure すみません、もう一度.', next: 'n4' }] } },
    n4: { npc: { t: '[電車|でんしゃ]は [三番線|さんばんせん]から [出|で]ます。', tr: 'Il treno parte dal binario 3.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: da quale binario parte il treno?', opts: [
      { t: '[三番線|さんばんせん]', q: 3, why: 'さんばんせん = binario 3.', next: 'n5' },
      { t: '[二番線|にばんせん]', q: 1, why: 'Binario 2: hai confuso さん (3) e に (2).', next: 'n5' },
      { t: '[四番線|よんばんせん]', q: 0, why: 'Binario 4: non è quello detto dal commesso.', next: 'n5' }] } },
    n5: { npc: { t: 'ほかに [質問|しつもん]は ありますか。', tr: 'Ha altre domande?' }, task: { kind: 'order', prompt: 'Costruisci: «Dov’è il binario 2?»', words: ['にばんせんは', 'どこ', 'ですか'], accept: ['にばんせんはどこですか', 'にばんせんは どこですか'], model: 'にばんせんは どこですか。', next: 'n6' } },
    n6: { npc: { t: 'あそこです。…すみません、この [電車|でんしゃ]は [京都|きょうと]に [行|い]きますか。', tr: 'È là. … Mi scusi, questo treno va a Kyoto? (te lo chiede un altro viaggiatore)' }, task: { kind: 'produce', register: 'polite', prompt: 'Rispondi al viaggiatore: sì, questo treno va a Kyoto.', must: [
      { id: 'yes', label: 'risponde di sì', any: ['はい', 'ええ', 'そうです', 'hai', 'sou desu', 'soudesu'] },
      { id: 'kyoto', label: 'nomina Kyoto', any: ['きょうと', 'キョウト', 'kyoto', 'kyouto'] }], min: 6, model: 'はい、きょうとに いきます。', next: 'n7' } },
    n7: { npc: { t: 'ありがとうございます。いってらっしゃい。', tr: 'Grazie. Buon viaggio.' }, end: true } } });

  /* 4 — N4 indicazioni */
  Cv.add({ id: 'cv-ja-michi', lang: 'ja', level: 'N4', area: 'Indicazioni', title: 'Chiedere la strada e capirla', setting: 'Per strada fermi un passante per chiedere dov’è la stazione.', start: 'n1', nodes: {
    n1: { npc: { t: 'こんにちは。', tr: 'Buongiorno. (un passante ti guarda)' }, task: { kind: 'produce', register: 'polite', prompt: 'Attira l’attenzione e chiedi con cortesia dov’è la stazione.', must: [
      { id: 'excuse', label: 'attira l’attenzione (すみません)', any: ['すみません', 'すいません', 'しつれい', 'sumimasen', 'suimasen'] },
      { id: 'station', label: 'chiede della stazione', any: ['えき', 'エキ', 'eki'] },
      { id: 'where', label: 'domanda «dove»', any: ['どこ', 'どちら', 'doko', 'dochira'] }], min: 8, model: 'すみません、えきは どこですか。', next: 'n2' } },
    n2: { npc: { t: 'まっすぐ [行|い]って、[二番目|にばんめ]の [角|かど]を [右|みぎ]に [曲|ま]がって ください。', tr: 'Vada dritto e giri a destra al secondo angolo.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: dove devi girare?', opts: [
      { t: '[二番目|にばんめ]の [角|かど]を [右|みぎ]に [曲|ま]がる', q: 3, why: '二番目 = secondo, 右 = destra.', next: 'n3' },
      { t: '[二番目|にばんめ]の [角|かど]を [左|ひだり]に [曲|ま]がる', q: 1, why: 'Il secondo angolo è giusto, ma 左 è sinistra: la direzione è 右.', next: 'n2b' },
      { t: '[一番目|いちばんめ]の [角|かど]を [右|みぎ]に [曲|ま]がる', q: 0, why: '一番目 è il primo angolo: serve il secondo.', next: 'n2b' }] } },
    n2b: { npc: { t: 'もう [少|すこ]し ゆっくり [言|い]います。まっすぐ、[二番目|にばんめ]の [角|かど]、[右|みぎ]です。', tr: 'Lo dico più piano. Dritto, secondo angolo, a destra.' }, task: { kind: 'choose', q: 'Ora conferma di aver capito.', opts: [
      { t: 'はい、わかりました。ありがとうございます。', q: 3, why: 'Cortese e chiaro.', next: 'n3' },
      { t: 'ああ、[右|みぎ]ですね。ありがとうございます。', q: 3, why: 'Ripetere l’informazione con ですね è un ottimo modo per confermare.', next: 'n3' },
      { t: 'わかった。', q: 1, why: 'Forma informale: a un estraneo si dice わかりました.', next: 'n3' }] } },
    n3: { npc: { t: '[日本|にほん]は [初|はじ]めてですか。', tr: 'È la prima volta in Giappone?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista. Come rispondi?', opts: [
      { t: 'はい、[初|はじ]めてです。', q: 3, why: 'Risposta corretta e cortese.', next: 'n4' },
      { t: 'いいえ、[去年|きょねん]も [来|き]ました。', q: 3, why: 'Ottima risposta: «no, sono venuto anche l’anno scorso».', next: 'n4' },
      { t: 'はい、[初|はじ]めて。', q: 2, why: 'Si capisce, ma manca です per essere cortese.', next: 'n4' },
      { t: 'いいえ、[初|はじ]めてでした。', q: 0, why: 'Con いいえ si nega la prima volta, ma poi si dice 初めてでした: contraddittorio.', next: 'n4' }] } },
    n4: { npc: { t: '[駅|えき]は [郵便局|ゆうびんきょく]の [隣|となり]に あります。', tr: 'La stazione è accanto all’ufficio postale.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: accanto a cosa si trova la stazione?', opts: [
      { t: '[郵便局|ゆうびんきょく]の [隣|となり]', q: 3, why: '隣 = accanto.', next: 'n5' },
      { t: '[郵便局|ゆうびんきょく]の [後|うし]ろ', q: 1, why: '後ろ = dietro, non accanto.', next: 'n5' },
      { t: '[銀行|ぎんこう]の [前|まえ]', q: 0, why: 'Banca e «davanti»: nessuno dei due è stato detto.', next: 'n5' }] } },
    n5: { npc: { t: 'ほかに [何|なに]か ありますか。', tr: 'Altro che vuole sapere?' }, task: { kind: 'order', prompt: 'Costruisci: «Quanti minuti ci vogliono a piedi?»', words: ['あるいて', 'なんぷん', 'ぐらい', 'かかりますか'], accept: ['あるいてなんぷんぐらいかかりますか', 'あるいて なんぷん ぐらい かかりますか'], model: 'あるいて なんぷん ぐらい かかりますか。', next: 'n6' } },
    n6: { npc: { t: '[五分|ごふん]ぐらいです。ここから [近|ちか]いですよ。', tr: 'Circa cinque minuti. È vicino da qui.' }, task: { kind: 'produce', register: 'polite', prompt: 'Ringrazia e di che ci vai subito.', must: [
      { id: 'thanks', label: 'ringrazia', any: ['ありがとう', 'arigatou', 'arigato'] },
      { id: 'go', label: 'dice che ci va', any: ['いきます', 'いってみます', 'ikimasu', 'ittemimasu'] }], min: 10, model: 'ありがとうございます。いってみます。', next: 'n7' } },
    n7: { npc: { t: 'いいえ。[気|き]を つけて。', tr: 'Prego. Faccia attenzione.' }, end: true } } });

  /* 5 — N4 albergo */
  Cv.add({ id: 'cv-ja-hotel', lang: 'ja', level: 'N4', area: 'Albergo', title: 'In albergo: check-in e colazione', setting: 'Arrivi alla reception di un albergo e fai il check-in.', start: 'n1', nodes: {
    n1: { npc: { t: 'いらっしゃいませ。ご[予約|よやく]は ありますか。', tr: 'Benvenuto. Ha una prenotazione?' }, task: { kind: 'produce', register: 'polite', prompt: 'Di che hai una prenotazione e dai il cognome Rossi.', must: [
      { id: 'res', label: 'dice che ha prenotato', any: ['よやく', 'yoyaku'] },
      { id: 'name', label: 'dice il cognome (Rossi)', any: ['ロッシ', 'ろっし', 'rossi', 'rosshi'] }], min: 8, model: 'よやくしています。ロッシです。', next: 'n2' } },
    n2: { npc: { t: '[二泊|にはく]ですね。お[部屋|へや]は [三階|さんがい]の [三百五号室|さんびゃくごごうしつ]です。', tr: 'Due notti, giusto. La camera è la 305 al terzo piano.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: qual è il numero della camera?', opts: [
      { t: '[三百五号室|さんびゃくごごうしつ]', q: 3, why: '305 = さんびゃくご (300 si legge さんびゃく).', next: 'n3' },
      { t: '[三百十五号室|さんびゃくじゅうごごうしつ]', q: 1, why: '315: hai aggiunto 十; il numero è 305.', next: 'n2b' },
      { t: '[五百三号室|ごひゃくさんごうしつ]', q: 0, why: '503: hai invertito le cifre.', next: 'n2b' }] } },
    n2b: { npc: { t: 'もう いちど。[三階|さんがい]の [三百五号室|さんびゃくごごうしつ]です。', tr: 'Ancora una volta: camera 305, terzo piano.' }, task: { kind: 'choose', q: 'Ora conferma.', opts: [
      { t: 'はい、わかりました。ありがとうございます。', q: 3, why: 'Cortese.', next: 'n3' },
      { t: '[三階|さんがい]ですね。ありがとうございます。', q: 3, why: 'Ripeti il piano per confermare.', next: 'n3' },
      { t: 'ありがとう。', q: 1, why: 'Troppo informale con il personale: aggiungi ございます.', next: 'n3' }] } },
    n3: { npc: { t: '[禁煙|きんえん]の [部屋|へや]で よろしいですか。', tr: 'Va bene una camera non fumatori?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista. Come rispondi?', opts: [
      { t: 'はい、[禁煙|きんえん]で お[願|ねが]いします。', q: 3, why: 'Risposta corretta e cortese.', next: 'n4' },
      { t: 'はい、けっこうです。', q: 3, why: 'けっこうです significa qui «va bene».', next: 'n4' },
      { t: 'はい、[禁煙|きんえん]で いい。', q: 1, why: 'Forma informale: servono です/お願いします.', next: 'n4' },
      { t: 'はい、[部屋|へや]です。', q: 0, why: 'Non risponde alla domanda sulla camera non fumatori.', next: 'n4' }] } },
    n4: { npc: { t: '[朝食|ちょうしょく]は [六時半|ろくじはん]から [九時|くじ]まで、[二階|にかい]の レストランです。', tr: 'La colazione è dalle 6:30 alle 9:00, nel ristorante al primo piano.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: a che ora si può fare colazione?', opts: [
      { t: '[六時半|ろくじはん]から [九時|くじ]まで', q: 3, why: 'から = da, まで = fino a.', next: 'n5' },
      { t: '[七時半|しちじはん]から [九時|くじ]まで', q: 1, why: 'Hai sbagliato l’ora iniziale: 6:30, non 7:30.', next: 'n5' },
      { t: '[六時半|ろくじはん]から [十時|じゅうじ]まで', q: 1, why: 'Hai sbagliato l’ora finale: 9:00.', next: 'n5' }] } },
    n5: { npc: { t: 'ほかに [質問|しつもん]は ありますか。', tr: 'Ha altre domande?' }, task: { kind: 'order', prompt: 'Costruisci: «A che ora è il check-out?»', words: ['チェックアウトは', 'なんじ', 'ですか'], accept: ['チェックアウトはなんじですか', 'チェックアウトは なんじですか'], model: 'チェックアウトは なんじですか。', next: 'n6' } },
    n6: { npc: { t: '[十一時|じゅういちじ]です。ほかに [何|なに]か ありますか。', tr: 'È alle undici. Altro?' }, task: { kind: 'produce', register: 'polite', prompt: 'Chiedi se possono tenerti la valigia dopo il check-out.', must: [
      { id: 'bag', label: 'nomina i bagagli', any: ['にもつ', 'ニモツ', 'スーツケース', 'nimotsu', 'suutsukeesu'] },
      { id: 'keep', label: 'chiede di custodirli', any: ['あずかって', 'あずけ', 'あずかり', 'azukatte', 'azuke'] }], min: 10, model: 'にもつを あずかって もらえますか。', next: 'n7' } },
    n7: { npc: { t: 'はい、[大丈夫|だいじょうぶ]です。ごゆっくり どうぞ。', tr: 'Sì, nessun problema. Buon soggiorno.' }, end: true } } });

  /* 6 — N4 festa / primo incontro */
  Cv.add({ id: 'cv-ja-party', lang: 'ja', level: 'N4', area: 'Presentazioni', title: 'A una festa: presentarsi e parlare di hobby', setting: 'A una festa di amici incontri un ragazzo di nome Yamamoto.', start: 'n1', nodes: {
    n1: { npc: { t: 'はじめまして。[山本|やまもと]です。おなまえは？', tr: 'Piacere. Sono Yamamoto. Come ti chiami?' }, task: { kind: 'produce', register: 'polite', prompt: 'Presentati: saluta, di che ti chiami Marco e che vieni dall’Italia.', must: [
      { id: 'greet', label: 'saluta (はじめまして)', any: ['はじめまして', 'hajimemashite'] },
      { id: 'name', label: 'dice il nome (Marco)', any: ['マルコ', 'まるこ', 'maruko', 'marco'] },
      { id: 'from', label: 'dice di essere italiano', any: ['イタリア', 'いたりあ', 'itaria'] }], min: 14, model: 'はじめまして。マルコです。イタリアから きました。', next: 'n2' } },
    n2: { npc: { t: '[日本語|にほんご]が [上手|じょうず]ですね。どこで [勉強|べんきょう]しましたか。', tr: 'Parli bene giapponese. Dove l’hai studiato?' }, listen: true, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista. Come rispondi?', opts: [
      { t: '[日本語|にほんご]の クラスで [勉強|べんきょう]しました。', q: 3, why: 'Passato cortese (しました): la domanda è al passato.', next: 'n3' },
      { t: 'いいえ、まだまだです。', q: 3, why: 'Risposta modesta tipica dopo un complimento (まだまだです = «ho ancora molto da imparare»).', next: 'n3' },
      { t: '[日本語|にほんご]の クラスで [勉強|べんきょう]します。', q: 1, why: 'Presente: la domanda chiede dove l’hai studiato (passato).', next: 'n3' },
      { t: 'ありがとう。[勉強|べんきょう]。', q: 0, why: 'Troppo frammentario e informale: manca un verbo cortese.', next: 'n3' }] } },
    n3: { npc: { t: '[私|わたし]は [会社員|かいしゃいん]で、[趣味|しゅみ]は [料理|りょうり]です。', tr: 'Io sono impiegato e il mio hobby è cucinare.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: che lavoro e che hobby ha Yamamoto?', opts: [
      { t: '[会社員|かいしゃいん]、[料理|りょうり]', q: 3, why: '会社員 = impiegato, 料理 = cucina.', next: 'n4' },
      { t: '[会社員|かいしゃいん]、[映画|えいが]', q: 1, why: 'Il lavoro è giusto, ma l’hobby è 料理 (cucinare), non 映画 (cinema).', next: 'n3b' },
      { t: '[先生|せんせい]、[料理|りょうり]', q: 1, why: 'L’hobby è giusto, ma il lavoro è 会社員, non 先生 (insegnante).', next: 'n3b' }] } },
    n3b: { npc: { t: 'もう いちど。[会社員|かいしゃいん]です。[趣味|しゅみ]は [料理|りょうり]です。', tr: 'Ancora: sono impiegato. Il mio hobby è cucinare.' }, task: { kind: 'choose', q: 'Ora reagisci con interesse.', opts: [
      { t: 'ああ、[料理|りょうり]ですか。いいですね。', q: 3, why: 'Naturale: ですか per mostrare interesse, いいですね per un commento positivo.', next: 'n4' },
      { t: 'そうですか。すごいですね。', q: 3, why: 'そうですか è la risposta standard di interesse.', next: 'n4' },
      { t: 'ふうん。', q: 0, why: 'Reazione fredda e poco cortese.', next: 'n4' }] } },
    n4: { npc: { t: 'マルコさんの [趣味|しゅみ]と お[仕事|しごと]は？', tr: 'E il tuo hobby e il tuo lavoro, Marco?' }, task: { kind: 'produce', register: 'polite', prompt: 'Di che il tuo hobby è la fotografia e che lavori come ingegnere.', must: [
      { id: 'photo', label: 'hobby: fotografia', any: ['しゃしん', 'シャシン', 'shashin'] },
      { id: 'job', label: 'lavoro: ingegnere', any: ['エンジニア', 'えんじにあ', 'enjinia'] }], min: 12, model: 'しゅみは しゃしんです。エンジニアです。', next: 'n5' } },
    n5: { npc: { t: 'いいですね。ところで…', tr: 'Che bello. A proposito…' }, task: { kind: 'order', prompt: 'Costruisci: «Che cosa fai nel fine settimana?»', words: ['しゅうまつは', 'なにを', 'しますか'], accept: ['しゅうまつはなにをしますか', 'しゅうまつは なにを しますか'], model: 'しゅうまつは なにを しますか。', next: 'n6' } },
    n6: { npc: { t: '[私|わたし]は よく [友|とも]だちと [出|で]かけます。また [会|あ]いたいですね。[連絡先|れんらくさき]を [教|おし]えて もらえますか。', tr: 'Io esco spesso con gli amici. Mi piacerebbe rivederti. Posso avere il tuo contatto?' }, task: { kind: 'produce', register: 'polite', prompt: 'Accetta volentieri e usa una formula di saluto cortese.', must: [
      { id: 'ok', label: 'accetta', any: ['いいですよ', 'いいです', 'もちろん', 'ぜひ', 'iidesu', 'iiyo', 'mochiron', 'zehi'] },
      { id: 'greet', label: 'formula よろしく', any: ['よろしく', 'yoroshiku'] }], min: 10, model: 'はい、いいですよ。よろしく お願いします。', next: 'n7' } },
    n7: { npc: { t: 'ありがとうございます。こちらこそ。', tr: 'Grazie. Il piacere è mio.' }, end: true } } });

  /* 7 — N3 telefonata di prenotazione */
  Cv.add({ id: 'cv-ja-denwa', lang: 'ja', level: 'N3', area: 'Telefono', title: 'Telefonata: prenotare un tavolo', setting: 'Telefoni a un ristorante per prenotare e usi un registro cortese.', start: 'n1', nodes: {
    n1: { npc: { t: 'お[電話|でんわ]ありがとうございます。さくらレストランで ございます。', tr: 'Grazie per la chiamata. Ristorante Sakura.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: come apri la conversazione per prenotare?', opts: [
      { t: 'もしもし、[予約|よやく]を お[願|ねが]いしたいのですが。', q: 3, why: 'Registro cortese tipico: お願いしたいのですが apre la richiesta in modo morbido.', next: 'n2' },
      { t: 'あの、[予約|よやく]を したいです。', q: 2, why: 'Corretto e cortese, ma meno raffinato di お願いしたいのですが.', next: 'n2' },
      { t: '[予約|よやく]したい。', q: 1, why: 'Informale e brusco: al telefono con un ristorante serve です/ます.', next: 'n2' }] } },
    n2: { npc: { t: 'ありがとうございます。ご[予約|よやく]は [何日|なんにち]の [何時|なんじ]でしょうか。', tr: 'Grazie. Per quale giorno e a che ora desidera prenotare?' }, task: { kind: 'produce', register: 'polite', prompt: 'Chiedi di prenotare per venerdì della prossima settimana alle sei.', must: [
      { id: 'day', label: 'giorno: venerdì', any: ['きんようび', 'きんよう', 'キンヨウビ', 'kinyoubi', 'kinyobi'] },
      { id: 'time', label: 'ora: le sei', any: ['ろくじ', 'ロクジ', 'rokuji'] }], min: 12, model: 'らいしゅうの きんようびの ろくじに お願いしたいのですが。', next: 'n3' } },
    n3: { npc: { t: '[申|もう]し[訳|わけ]ございません。その [時間|じかん]は [満席|まんせき]です。[七時|しちじ]は いかがでしょうか。', tr: 'Mi dispiace. A quell’ora siamo al completo. Andrebbe bene alle sette?' }, unexpected: true, task: { kind: 'choose', q: 'Imprevisto: non c’è posto alle sei. Cosa rispondi?', opts: [
      { t: 'はい、[七時|しちじ]で お[願|ねが]いします。', q: 3, why: 'Accetti la proposta in modo cortese.', next: 'n4' },
      { t: '[残念|ざんねん]ですが、また [今度|こんど]に します。', q: 3, why: 'Rifiuto cortese: 残念ですが = «purtroppo»; la conversazione si chiude senza prenotare.', next: 'n9' },
      { t: '[七時|しちじ]で いい。', q: 1, why: 'Informale: al telefono con il ristorante serve で お願いします.', next: 'n4' }] } },
    n4: { npc: { t: 'お[名前|なまえ]と [人数|にんずう]を お[願|ねが]いします。', tr: 'Mi dice nome e numero di persone, per favore?' }, task: { kind: 'produce', register: 'polite', prompt: 'Di il cognome Rossi e che siete in quattro.', must: [
      { id: 'name', label: 'dice il cognome (Rossi)', any: ['ロッシ', 'ろっし', 'rossi', 'rosshi'] },
      { id: 'n', label: 'quattro persone', any: ['よにん', 'ヨニン', 'よんにん', 'yonin', 'yoninn'] }], min: 8, model: 'ロッシと もうします。よにんです。', next: 'n5' } },
    n5: { npc: { t: '[金曜日|きんようび]の [七時|しちじ]、[四名様|よんめいさま]で ご[予約|よやく]を お[承|うけたまわ]りしました。', tr: 'Prenotazione accettata: venerdì alle sette, per quattro persone.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: cosa è stato confermato?', opts: [
      { t: '[金曜日|きんようび]の [七時|しちじ]、[四人|よにん]', q: 3, why: 'Venerdì alle 7, quattro persone: 四名様 è il modo rispettoso per 四人.', next: 'n6' },
      { t: '[金曜日|きんようび]の [六時|ろくじ]、[四人|よにん]', q: 1, why: 'L’ora confermata è 七時 (le sette), non le sei.', next: 'n6' },
      { t: '[土曜日|どようび]の [七時|しちじ]、[二人|ふたり]', q: 0, why: 'Giorno e persone sbagliati: venerdì, quattro persone.', next: 'n6' }] } },
    n6: { npc: { t: 'ほかに ご[連絡|れんらく]は ございますか。', tr: 'Ha altre comunicazioni da farmi?' }, task: { kind: 'order', prompt: 'Costruisci: «Potrei arrivare un po’ in ritardo».', words: ['すこし', 'おくれるかも', 'しれません'], accept: ['すこしおくれるかもしれません', 'すこし おくれるかも しれません'], model: 'すこし おくれるかも しれません。', next: 'n7' } },
    n7: { npc: { t: 'かしこまりました。お[待|ま]ちして おります。', tr: 'Certamente. Vi aspettiamo.' }, task: { kind: 'produce', register: 'polite', prompt: 'Ringrazia e chiudi con una formula cortese (よろしくお願いします).', must: [
      { id: 'thanks', label: 'ringrazia', any: ['ありがとう', 'arigatou', 'arigato'] },
      { id: 'greet', label: 'formula よろしく', any: ['よろしく', 'yoroshiku'] }], min: 12, model: 'ありがとうございます。よろしく お願いします。', next: 'n8' } },
    n8: { npc: { t: '[失礼|しつれい]いたします。', tr: 'Arrivederci. (chiusura della telefonata)' }, end: true },
    n9: { npc: { t: 'かしこまりました。またの お[電話|でんわ]を お[待|ま]ちして おります。', tr: 'Certamente. Aspettiamo la sua prossima chiamata.' }, end: true } } });

  /* 8 — N3 negozio di elettronica */
  Cv.add({ id: 'cv-ja-denki', lang: 'ja', level: 'N3', area: 'Negozio', title: 'Negozio di elettronica: un problema e la sostituzione', setting: 'Torni in negozio perché gli auricolari comprati la settimana scorsa non funzionano.', start: 'n1', nodes: {
    n1: { npc: { t: 'いらっしゃいませ。なにか お[探|さが]しですか。', tr: 'Benvenuto. Cerca qualcosa?' }, task: { kind: 'produce', register: 'polite', prompt: 'Spiega: la settimana scorsa hai comprato questi auricolari ma non si sente il suono.', must: [
      { id: 'item', label: 'nomina gli auricolari', any: ['イヤホン', 'いやほん', 'iyahon'] },
      { id: 'when', label: 'dice che li ha comprati la settimana scorsa', any: ['せんしゅう', 'センシュウ', 'senshuu', 'senshu'] },
      { id: 'prob', label: 'descrive il problema (non si sente)', any: ['きこえません', 'きこえない', 'おとが でません', 'おとがでません', 'でません', 'kikoemasen', 'demasen'] }], min: 18, model: 'せんしゅう この イヤホンを かいました。でも おとが でません。', next: 'n2' } },
    n2: { npc: { t: 'そうですか。レシートは お[持|も]ちですか。', tr: 'Capisco. Ha lo scontrino?' }, listen: true, task: { kind: 'choose', q: 'Ascolta: cosa ti chiede il commesso? Rispondi.', opts: [
      { t: 'はい、[持|も]って います。これです。', q: 3, why: 'Risposta chiara: «sì, ce l’ho, eccolo».', next: 'n3' },
      { t: 'いいえ、[持|も]って いません。', q: 3, why: 'Risposta corretta: «no, non ce l’ho». Il commesso farà una verifica.', next: 'n2b' },
      { t: 'はい、[買|か]いました。', q: 1, why: 'Ha chiesto dello scontrino (レシート), non se hai comprato.', next: 'n2b' }] } },
    n2b: { npc: { t: 'レシートが ないと [交換|こうかん]は [難|むずか]しいかも しれません。[買|か]った [日|ひ]は わかりますか。', tr: 'Senza scontrino lo scambio potrebbe essere difficile. Sa quando l’ha comprato?' }, task: { kind: 'choose', q: 'Rispondi in modo cortese.', opts: [
      { t: '[先週|せんしゅう]の [金曜日|きんようび]だったと [思|おも]います。', q: 3, why: 'と思います attenua l’informazione quando non sei sicuro.', next: 'n3' },
      { t: 'ええと、[先週|せんしゅう]の [金曜日|きんようび]です。', q: 2, why: 'Corretto; è un po’ meno prudente se non sei sicuro della data.', next: 'n3' },
      { t: '[金曜日|きんようび]だった。', q: 1, why: 'Forma informale: con un commesso servono です/ます.', next: 'n3' }] } },
    n3: { npc: { t: '[落|お]としたり、[水|みず]に [濡|ぬ]らしたり しましたか。', tr: 'Li ha fatti cadere o bagnati?' }, unexpected: true, task: { kind: 'choose', q: 'Domanda imprevista. Come rispondi?', opts: [
      { t: 'いいえ、[何|なに]も して いません。', q: 3, why: 'Risposta chiara: «no, non ho fatto niente».', next: 'n4' },
      { t: 'いいえ、[落|お]としたり[濡|ぬ]らしたり して いません。', q: 3, why: 'Ripeti i due verbi con たり…たり e la negazione: corretto.', next: 'n4' },
      { t: 'いいえ、[落|お]とします。', q: 1, why: 'Forma errata: manca la negazione al passato/continuato (していません).', next: 'n4' },
      { t: 'はい、[何|なに]も。', q: 0, why: 'はい e 何も sono incoerenti: «sì» alla domanda e poi «niente».', next: 'n4' }] } },
    n4: { npc: { t: '[新|あたら]しい ものと [交換|こうかん]できます。この [用紙|ようし]に [名前|なまえ]と [電話番号|でんわばんごう]を お[書|か]きください。', tr: 'Possiamo sostituirli con un prodotto nuovo. Scriva nome e numero di telefono su questo modulo.' }, listen: true, task: { kind: 'choose', q: 'Ascolta: cosa devi scrivere sul modulo?', opts: [
      { t: '[名前|なまえ]と [電話番号|でんわばんごう]', q: 3, why: '名前 = nome, 電話番号 = numero di telefono.', next: 'n5' },
      { t: '[名前|なまえ]だけ', q: 1, why: 'Il commesso ha detto anche il numero di telefono.', next: 'n5' },
      { t: '[住所|じゅうしょ]と [年齢|ねんれい]', q: 0, why: 'Indirizzo ed età: non sono stati richiesti.', next: 'n5' }] } },
    n5: { npc: { t: 'ほかに ご[希望|きぼう]は ありますか。', tr: 'Ha altre richieste?' }, task: { kind: 'order', prompt: 'Costruisci: «Potrebbe sostituirli con un prodotto nuovo?»', words: ['あたらしい', 'ものと', 'こうかんして', 'いただけますか'], accept: ['あたらしいものとこうかんしていただけますか', 'あたらしい ものと こうかんして いただけますか'], model: 'あたらしい ものと こうかんして いただけますか。', next: 'n6' } },
    n6: { npc: { t: 'かしこまりました。こちらが [新|あたら]しい ものです。', tr: 'Certamente. Ecco quello nuovo.' }, task: { kind: 'produce', register: 'polite', prompt: 'Chiedi se puoi controllare subito qui che il suono funzioni.', must: [
      { id: 'check', label: 'chiede di controllare', any: ['かくにん', 'ためして', 'kakunin', 'tameshite'] },
      { id: 'here', label: 'qui / adesso', any: ['いま', 'ここで', 'イマ', 'ima', 'koko'] },
      { id: 'sound', label: 'il suono', any: ['おと', 'オト', 'きこえ', 'oto ga', 'otoga'] }], min: 14, model: 'いま ここで おとが でるか かくにんしても いいですか。', next: 'n7' } },
    n7: { npc: { t: 'はい、どうぞ。ご[確認|かくにん]ください。', tr: 'Certo, prego. Controlli pure.' }, end: true } } });

  Cv.refresh();
})(window.ST = window.ST || {});
