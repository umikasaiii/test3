/* SkillTree — Japanese Life Simulator: scenari di vita reale a scelte (stesso motore dei dialoghi inglesi).
   Registro cortese standard (です/ます). Scelte predefinite: non è conversazione libera. I livelli sono interni, non JLPT. */
(function (ST) {
  'use strict';
  const DL = ST.dialog, N = (npc, tr, ch) => ({ npc, tr, ch: ch && ch.map(c => ({ t: c[0], q: c[1], fb: c[2], next: c[3] })) }), END = (npc, tr) => ({ npc, tr, end: true });
  [
    { lang: 'ja', id: 'ja-restaurant', title: 'Al ristorante', area: 'Ristorante', level: 'Livello interno 1', start: 'a', nodes: {
      a: N('いらっしゃいませ。[何名様|なんめいさま]ですか。', 'Benvenuto. Quante persone siete?', [['[二人|ふたり]です。', 2, 'Risposta corretta e cortese: numero + です.', 'b'], ['[二|に]。', 1, 'Si capisce, ma è troppo secco: aggiungi です.', 'b'], ['[私|わたし]は[学生|がくせい]です。', 0, 'Non risponde alla domanda (quante persone).', 'b']]),
      b: N('こちらへどうぞ。ご[注文|ちゅうもん]は？', 'Da questa parte. Che cosa ordinate?', [['ラーメンを[一つ|ひとつ]お[願|ねが]いします。', 2, 'Formula standard: 〜をお願いします.', 'c'], ['すみません、おすすめは[何|なん]ですか。', 2, 'Chiede un consiglio: ottima mossa.', 'b2'], ['ラーメン、くれ。', 0, 'くれ è brusco e scortese in un ristorante: usa お願いします o ください.', 'c']]),
      b2: N('[今日|きょう]はカレーがおすすめです。', 'Oggi consigliamo il curry.', [['じゃあ、カレーをお[願|ねが]いします。', 2, 'Accetta il consiglio in modo naturale.', 'c'], ['カレーはちょっと…。ラーメンをお[願|ねが]いします。', 2, 'ちょっと… è un modo gentile di rifiutare.', 'c']]),
      c: N('お[飲|の]み[物|もの]はどうしますか。', 'E da bere?', [['お[水|みず]をお[願|ねが]いします。', 2, 'Corretto.', 'd'], ['いりません。', 1, 'Si capisce, ma è un po’ brusco: meglio 大丈夫です o いいです.', 'd']]),
      d: N('[以上|いじょう]でよろしいですか。', 'È tutto?', [['はい、[以上|いじょう]です。', 2, 'Risposta standard.', 'e'], ['はい、お[願|ねが]いします。', 1, 'Comprensibile ma meno preciso di 以上です.', 'e']]),
      e: END('かしこまりました。[少々|しょうしょう]お[待|ま]ちください。', 'Certamente. Attenda un momento, per favore.') } },
    { lang: 'ja', id: 'ja-konbini', title: 'Al konbini', area: 'Konbini', level: 'Livello interno 1', start: 'a', nodes: {
      a: N('いらっしゃいませ。[袋|ふくろ]はいりますか。', 'Benvenuto. Le serve una busta?', [['はい、お[願|ねが]いします。', 2, 'Corretto.', 'b'], ['いいえ、[大丈夫|だいじょうぶ]です。', 2, 'Modo comune per rifiutare.', 'b'], ['[袋|ふくろ]？', 0, 'Ripete la parola senza rispondere.', 'b']]),
      b: N('お[弁当|べんとう]を[温|あたた]めますか。', 'Scalda il bento?', [['はい、お[願|ねが]いします。', 2, 'Corretto.', 'c'], ['いいえ、そのままで[大丈夫|だいじょうぶ]です。', 2, 'Naturale: そのまま = così com’è.', 'c'], ['[熱|あつ]い！', 0, 'Non risponde alla domanda.', 'c']]),
      c: N('[全部|ぜんぶ]で[五百円|ごひゃくえん]です。', 'In tutto sono 500 yen.', [['カードでお[願|ねが]いします。', 2, 'Chiede di pagare con carta.', 'd'], ['[現金|げんきん]でお[願|ねが]いします。', 2, 'Chiede di pagare in contanti.', 'd'], ['[高|たか]い！', 1, 'Dice «caro!»: non è offensivo ma non risolve il pagamento.', 'd']]),
      d: END('ありがとうございました。', 'Grazie, arrivederci.') } },
    { lang: 'ja', id: 'ja-station', title: 'In stazione', area: 'Stazione e indicazioni', level: 'Livello interno 2', start: 'a', nodes: {
      a: N('どうしましたか。', 'Che cosa succede?', [['すみません、[東京駅|とうきょうえき]へ[行|い]きたいです。', 2, 'Si scusa e dice dove vuole andare.', 'b'], ['[東京|とうきょう]。', 0, 'Una sola parola: non è chiaro cosa chiedi.', 'b'], ['[道|みち]に[迷|まよ]いました。', 1, 'Dice che si è perso, ma non dice dove vuole andare.', 'b']]),
      b: N('[東京駅|とうきょうえき]ですか。この[電車|でんしゃ]に[乗|の]って、[三番目|さんばんめ]の[駅|えき]で[降|お]りてください。', 'Tokyo? Salga su questo treno e scenda alla terza stazione.', [['[三番目|さんばんめ]ですね。ありがとうございます。', 2, 'Ripete per conferma: ottima abitudine.', 'c'], ['もう[一度|いちど]お[願|ねが]いします。', 2, 'Chiede di ripetere in modo cortese.', 'b2'], ['はい。', 1, 'Se hai capito va bene, ma confermare il numero è più sicuro.', 'c']]),
      b2: N('[三番目|さんばんめ]の[駅|えき]です。', 'La terza stazione.', [['わかりました。ありがとうございます。', 2, 'Corretto.', 'c']]),
      c: N('[切符|きっぷ]は[持|も]っていますか。', 'Ha il biglietto?', [['はい、[持|も]っています。', 2, 'Corretto.', 'd'], ['いいえ、どこで[買|か]いますか。', 2, 'Chiede dove comprarlo.', 'd']]),
      d: END('あそこで[買|か]えます。お[気|き]をつけて。', 'Può comprarlo laggiù. Buon viaggio.') } },
    { lang: 'ja', id: 'ja-hotel', title: 'In hotel', area: 'Hotel', level: 'Livello interno 2', start: 'a', nodes: {
      a: N('いらっしゃいませ。ご[予約|よやく]はありますか。', 'Benvenuto. Ha una prenotazione?', [['はい、[今日|きょう]から[二泊|にはく]の[予約|よやく]をしました。', 2, 'Informazione chiara.', 'b'], ['はい。[山田|やまだ]です。', 2, 'Dice il nome: utile e rapido.', 'b'], ['ありません。', 1, 'Corretto ma secco: chiedi se c’è una camera disponibile.', 'b']]),
      b: N('お[名前|なまえ]をお[願|ねが]いします。', 'Il suo nome, per favore.', [['[山田|やまだ]です。', 2, 'Corretto.', 'c'], ['[山田|やまだ]と[言|い]います。', 2, 'Più formale: ottimo.', 'c'], ['[名前|なまえ]？', 0, 'Ripete la parola senza dare il nome.', 'c']]),
      c: N('[朝食|ちょうしょく]は[七時|しちじ]から[十時|じゅうじ]までです。', 'La colazione è dalle sette alle dieci.', [['ありがとうございます。チェックアウトは[何時|なんじ]ですか。', 2, 'Ringrazia e fa la domanda successiva.', 'd'], ['[分|わ]かりました。', 1, 'Corretto ma neutro: aggiungi un ringraziamento.', 'd'], ['[朝|あさ]は[食|た]べません。', 1, 'Informazione non richiesta: non risponde.', 'd']]),
      d: END('チェックアウトは[十一時|じゅういちじ]です。ごゆっくりどうぞ。', 'Il check-out è alle undici (orario fittizio). Si rilassi.') } },
    { lang: 'ja', id: 'ja-lost', title: 'Un problema: portafoglio perso', area: 'Imprevisti durante un viaggio', level: 'Livello interno 2', start: 'a', nodes: {
      a: N('どうしましたか。', 'Che cosa è successo?', [['[財布|さいふ]をなくしました。', 2, 'Chiaro e diretto.', 'b'], ['[財布|さいふ]、ない。', 1, 'Si capisce, ma è troppo informale.', 'b'], ['[助|たす]けてください！', 0, '助けて è per un pericolo immediato: qui è esagerato e poco chiaro.', 'b']]),
      b: N('いつ、どこでなくしましたか。', 'Quando e dove l’ha perso?', [['[昨日|きのう]、[駅|えき]の[近|ちか]くでなくしたと[思|おも]います。', 2, 'Informazioni precise con と思います per l’incertezza.', 'c'], ['[今朝|けさ]、[電車|でんしゃ]の[中|なか]かもしれません。', 2, 'かもしれません esprime incertezza.', 'c'], ['わかりません。', 1, 'Onesto, ma dai almeno una stima.', 'c']]),
      c: N('どんな[財布|さいふ]ですか。', 'Che portafoglio è?', [['[黒|くろ]い[財布|さいふ]です。', 2, 'Descrizione semplice e corretta.', 'd'], ['[黒|くろ]くて[小|ちい]さい[財布|さいふ]です。', 2, 'Più dettagliata: ottima.', 'd']]),
      d: END('[連絡|れんらく]しますので、この[紙|かみ]に[名前|なまえ]と[電話番号|でんわばんごう]を[書|か]いてください。', 'La contatteremo: scriva nome e numero di telefono su questo foglio.') } }
  ].forEach(d => DL.LIST.push(d));
})(window.ST = window.ST || {});
