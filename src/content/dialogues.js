/* Dialoghi ramificati aggiuntivi (nessuna IA: percorsi scritti, valutazione guidata sulle scelte). */
(function (ST) {
  'use strict';
  const C = ST.content;
  const ch = (t, next, q, fb) => ({ t, next, q, fb });
  const D = (id, lang, level, title, accent, nodes) => C.dialogues.push({ id, lang, level, title, accent, start: 'n1', nodes });

  D('dl-en-4', 'en', 'B1', 'At the doctor’s', 'en-GB', {
    n1: { p: 'Good morning. What seems to be the problem?', c: [ch('I’ve had a sore throat and a fever since Monday.', 'n2', 2, 'Chiaro: sintomi + durata con present perfect.'), ch('I am sick since Monday.', 'n2', 0, 'Meglio «I’ve been ill / I’ve had… since Monday».'), ch('My throat hurts.', 'n2', 1, 'Corretto, ma manca la durata.')] },
    n2: { p: 'I see. Are you taking any medication at the moment?', c: [ch('No, I’m not taking anything, but I’m allergic to penicillin.', 'n3', 2, 'Informazione importante e ben formulata.'), ch('No.', 'n3', 1, 'Va bene, ma qui conviene dire delle allergie.'), ch('Yes, I take pills.', 'n3', 0, 'Troppo vago: quali farmaci?')] },
    n3: { p: 'Right. I’ll prescribe something. You should rest and drink plenty of water.', c: [ch('Thank you, doctor. How long should I stay at home?', 'end', 2, 'Domanda utile e cortese.'), ch('Okay, thanks.', 'end', 1, 'Corretto.'), ch('I must work tomorrow.', 'end', 0, 'Non risponde: spiega o chiedi un consiglio.')] } });
  D('dl-en-5', 'en', 'B1', 'Booking a hotel room by phone', 'en-US', {
    n1: { p: 'Grand Hotel, how can I help you?', c: [ch('Hello, I’d like to book a double room for two nights, please.', 'n2', 2, 'Formula naturale con dettagli.'), ch('I want a room.', 'n2', 0, 'Troppo diretto e senza dettagli.'), ch('Do you have any rooms available?', 'n2', 1, 'Corretto, ma rimanda i dettagli.')] },
    n2: { p: 'Certainly. For which dates, and would you like breakfast included?', c: [ch('From the fifth to the seventh of May, and yes, breakfast included, please.', 'n3', 2, 'Date e richiesta chiare.'), ch('May five. Breakfast yes.', 'n3', 0, 'Costruisci frasi complete.'), ch('The fifth of May for two nights.', 'n3', 1, 'Chiaro, manca la colazione.')] },
    n3: { p: 'That’s 180 dollars in total. Could I have a name for the reservation?', c: [ch('Of course. It’s Rossi, R-O-S-S-I.', 'end', 2, 'Hai fatto lo spelling: ottimo.'), ch('Rossi.', 'end', 1, 'Va bene, ma lo spelling aiuta.'), ch('My name is difficult.', 'end', 0, 'Non risponde alla richiesta.')] } });
  D('dl-en-6', 'en', 'B1+', 'Making plans with a friend', 'en-AU', {
    n1: { p: 'Hey! Are you free this weekend? A few of us are going hiking.', c: [ch('That sounds great! What time are you leaving?', 'n2', 2, 'Reazione naturale e domanda utile.'), ch('Yes. I go.', 'n2', 0, 'Struttura da correggere: «I’d love to come».'), ch('Maybe. I’m not sure yet.', 'n2', 1, 'Va bene, ma spiega perché.')] },
    n2: { p: 'We’re meeting at eight at the station. Bring some water and good shoes.', c: [ch('Eight is a bit early for me, but I’ll be there. Should I bring lunch too?', 'n3', 2, 'Esprimi una difficoltà e confermi.'), ch('Okay.', 'n3', 1, 'Corretto.'), ch('No, too early.', 'n3', 0, 'Brusco: proponi un’alternativa.')] },
    n3: { p: 'Yes, please. And if it rains, we’ll go to the museum instead.', c: [ch('Perfect. If it rains, I’ll bring an umbrella, just in case.', 'end', 2, 'First conditional usato bene.'), ch('Fine, thanks.', 'end', 1, 'Corretto.'), ch('If it will rain, I stay home.', 'end', 0, 'Dopo «if»: present simple; «I’ll stay home».')] } });
  D('dl-en-7', 'en', 'B2', 'A job interview', 'en-GB', {
    n1: { p: 'Thank you for coming in. Could you tell me why you’re interested in this position?', c: [ch('I’ve been working in this field for five years, and this role would let me take on more responsibility.', 'n2', 2, 'Concreto e collegato all’esperienza.'), ch('I need a job.', 'n2', 0, 'Troppo diretto e poco professionale.'), ch('I like your company.', 'n2', 1, 'Corretto ma generico.')] },
    n2: { p: 'And what would you say is your biggest weakness?', c: [ch('I sometimes take on too much, but I’ve learned to prioritise and to ask for help.', 'n3', 2, 'Onesto, con strategia di miglioramento.'), ch('I have no weaknesses.', 'n3', 0, 'Poco credibile.'), ch('I’m shy.', 'n3', 1, 'Onesto, ma manca la soluzione.')] },
    n3: { p: 'Thank you. Do you have any questions for us?', c: [ch('Yes, I’d like to know what the first three months would look like in this role.', 'end', 2, 'Domanda mirata e professionale.'), ch('How much is the salary?', 'end', 1, 'Lecito, ma meglio più tardi.'), ch('No.', 'end', 0, 'Occasione persa: preparati una domanda.')] } });
  D('dl-en-8', 'en', 'B2', 'Complaining about a faulty product', 'en-US', {
    n1: { p: 'Customer service, how can I help?', c: [ch('I bought a vacuum cleaner from you last week, and it stopped working after two days. I’d like a refund or a replacement.', 'n2', 2, 'Problema, tempi e richiesta chiari.'), ch('Your product is terrible!', 'n2', 0, 'Aggressivo: non aiuta a risolvere.'), ch('It doesn’t work.', 'n2', 1, 'Troppo vago.')] },
    n2: { p: 'I’m sorry to hear that. Do you have the receipt?', c: [ch('Yes, I have it here. Would you like me to send you a copy by email?', 'n3', 2, 'Collaborativo e proattivo.'), ch('I lost it.', 'n3', 1, 'Onesto, ma proponi un’alternativa (conferma d’ordine).'), ch('Why do you need it?', 'n3', 0, 'Suona ostile.')] },
    n3: { p: 'That would be great. We can send a replacement within five working days.', c: [ch('Thank you. Could you confirm that by email, please?', 'end', 2, 'Cortese e ottieni una conferma scritta.'), ch('Okay.', 'end', 1, 'Corretto.'), ch('Five days is too long!', 'end', 0, 'Meglio chiedere un’alternativa.')] } });

  D('dl-ja-4', 'ja', 'J1', 'In un negozio', null, {
    n1: { p: 'いらっしゃいませ。なにを おさがしですか。', c: [ch('この シャツを みせて ください。', 'n2', 2, 'Richiesta cortese e chiara.'), ch('シャツ。', 'n2', 0, 'Troppo breve e brusco.'), ch('シャツが ほしいです。', 'n2', 1, 'Corretto, ma meno cortese.')] },
    n2: { p: 'こちらは いかがですか。あおと しろが あります。', c: [ch('あおを ください。いくらですか。', 'n3', 2, 'Scelta e domanda sul prezzo.'), ch('いいです。', 'n3', 1, 'Ambiguo: sì o no?'), ch('わかりません。', 'n3', 0, 'Non risponde alla domanda.')] },
    n3: { p: 'ごせんえんです。', c: [ch('はい、おねがいします。', 'end', 2, 'Cortese e chiaro.'), ch('たかいですね。', 'end', 1, 'Naturale ma non conclude.'), ch('いりません。', 'end', 1, 'Secco: meglio «すみません、また こんど».')] } });
  D('dl-ja-5', 'ja', 'J1', 'Chiedere la strada', null, {
    n1: { p: 'どうしましたか。', c: [ch('すみません、えきは どこですか。', 'n2', 2, 'Naturale e cortese.'), ch('えき？', 'n2', 0, 'Troppo breve.'), ch('えきに いきたいです。', 'n2', 1, 'Corretto, ma meno diretto.')] },
    n2: { p: 'まっすぐ いって、みぎに まがって ください。', c: [ch('まっすぐ いって、みぎですね。ありがとうございます。', 'n3', 2, 'Ripeti per confermare.'), ch('はい。', 'n3', 1, 'Va bene ma non confermi.'), ch('もういちど おねがいします。', 'n3', 2, 'Chiedi di ripetere: ottimo.')] },
    n3: { p: 'ここから ごふんぐらいです。', c: [ch('ごふんですね。たすかります。', 'end', 2, 'Confermi e ringrazi.'), ch('ありがとう。', 'end', 1, 'Corretto.'), ch('とおいですね。', 'end', 0, 'Non è la reazione adatta.')] } });
  D('dl-ja-6', 'ja', 'J2', 'Prenotare un tavolo', null, {
    n1: { p: 'はい、さくらレストランです。', c: [ch('すみません、あした よじに ふたり よやくしたいんですが…。', 'n2', 2, 'Naturale e cortese.'), ch('よやく おねがい。', 'n2', 0, 'Troppo informale e incompleto.'), ch('あした いきます。', 'n2', 1, 'Non dici ora e persone.')] },
    n2: { p: 'あしたの よじですね。おなまえを おねがいします。', c: [ch('ロッシです。よろしく おねがいします。', 'n3', 2, 'Cortese e completo.'), ch('ロッシ。', 'n3', 0, 'Troppo secco.'), ch('マルコです。', 'n3', 1, 'Corretto.')] },
    n3: { p: 'かしこまりました。おまちして おります。', c: [ch('ありがとうございます。よろしく おねがいします。', 'end', 2, 'Chiusura cortese.'), ch('はい。', 'end', 1, 'Breve.'), ch('じゃあね。', 'end', 0, 'Troppo informale.')] } });
  D('dl-ja-7', 'ja', 'J3', 'Spiegare un ritardo', null, {
    n1: { p: 'どうして おくれたんですか。', c: [ch('すみません、でんしゃが とまっていたので、おくれました。', 'n2', 2, 'Scusa + motivo con ので.'), ch('でんしゃです。', 'n2', 1, 'Si capisce, ma è secco.'), ch('しりません。', 'n2', 0, 'Non risponde e suona scortese.')] },
    n2: { p: 'そうですか。れんらくは できませんでしたか。', c: [ch('でんわを しようと おもったんですが、バッテリーが なくて…。', 'n3', 2, 'Spiegazione con ～ようと思う.'), ch('できませんでした。', 'n3', 1, 'Corretto ma non spieghi.'), ch('わすれました。', 'n3', 0, 'Troppo diretto.')] },
    n3: { p: 'わかりました。つぎは まえもって れんらくして ください。', c: [ch('はい、わかりました。きを つけます。', 'end', 2, 'Cortese, assumi l’impegno.'), ch('はい。', 'end', 1, 'Breve.'), ch('でも わたしのせいじゃ ないです。', 'end', 0, 'Difensivo.')] } });
  D('dl-ja-8', 'ja', 'J4', 'Fare un piano condizionale', null, {
    n1: { p: 'こんどの にちようび、どこか いきませんか。', c: [ch('いいですね。てんきが よかったら、うみへ いきましょう。', 'n2', 2, 'Proposta con たら.'), ch('いいです。', 'n2', 1, 'Ambiguo.'), ch('いきません。', 'n2', 0, 'Rifiuto senza motivo.')] },
    n2: { p: 'あめが ふったら どうしますか。', c: [ch('あめが ふったら、えいがを みに いきませんか。', 'n3', 2, 'Piano B chiaro.'), ch('わかりません。', 'n3', 0, 'Non contribuisci.'), ch('うちに いましょう。', 'n3', 1, 'Va bene.')] },
    n3: { p: 'いいですね。じゃあ、あさ てんきを かくにんしましょう。', c: [ch('はい、あさ れんらくします。', 'end', 2, 'Impegno chiaro.'), ch('はい。', 'end', 1, 'Breve.'), ch('めんどうですね。', 'end', 0, 'Poco collaborativo.')] } });
  D('dl-ja-9', 'ja', 'J5', 'Tra amici (informale)', null, {
    n1: { p: 'ねえ、きのうの ドラマ みた？', c: [ch('みたよ！さいごが びっくりした。', 'n2', 2, 'Naturale e informale.'), ch('みました。', 'n2', 1, 'Troppo formale con un amico.'), ch('なんですか。', 'n2', 0, 'Non risponde.')] },
    n2: { p: 'わかる！ はんにんが あの ひとだとは おもわなかった。', c: [ch('ほんと？ ぼく、さいしょから あやしいと おもってた。', 'n3', 2, 'Reazione naturale con と思ってた.'), ch('そうですか。', 'n3', 1, 'Troppo formale.'), ch('ふうん。', 'n3', 1, 'Va bene ma freddo.')] },
    n3: { p: 'すごい！ こんど いっしょに つぎの シーズン みようよ。', c: [ch('いいね！ たのしみ！', 'end', 2, 'Entusiasta e naturale.'), ch('はい、おねがいします。', 'end', 0, 'Formale: fuori registro.'), ch('うん。', 'end', 1, 'Breve.')] } });
})(window.ST = window.ST || {});
