/* Inglese e giapponese — testi di lettura per la pratica (non usati nelle prove B2) e dialoghi ramificati. */
(function (ST) {
  'use strict';
  const C = ST.content;
  const q = (q, o, a, why) => ({ q, o, a, why: why || '' });

  C.readingPractice = {
    en: [
      { id: 'rp-en-1', level: 'B1', title: 'A new neighbour', text: 'Last month a young woman moved into the flat next to mine. At first we only said hello on the stairs, but last week she knocked on my door to ask if she could borrow a ladder. We ended up talking for an hour. She works as a nurse and often finishes work at night, which is why I sometimes hear her coming home late. I’ve promised to water her plants when she goes on holiday.',
        qs: [q('What did the neighbour want to borrow?', ['A ladder', 'Some plants', 'A key', 'A book'], 0), q('Why does the writer hear her late at night?', ['She works at night as a nurse', 'She has parties', 'She works in a bar', 'She travels a lot'], 0), q('What has the writer promised to do?', ['Water her plants', 'Lend a ladder', 'Cook dinner', 'Look after her cat'], 0)] },
      { id: 'rp-en-2', level: 'B1+', title: 'Commuting by bike', text: 'More people in my city are cycling to work, and it’s easy to see why. The new cycle lanes make the journey safer, and a bike is often faster than a car in the rush hour. Of course, the weather can be a problem. When it rains heavily, many cyclists take the tram instead. My colleague Tom says the biggest advantage is that he never has to look for a parking space.',
        qs: [q('Why do more people cycle?', ['Safer lanes and speed in rush hour', 'Cheaper bikes', 'Free trams', 'No cars'], 0), q('What do many cyclists do when it rains heavily?', ['Take the tram', 'Take the car', 'Stay at home', 'Walk'], 0), q('What is Tom’s main advantage?', ['No parking problems', 'Faster journey', 'Better health', 'Lower cost'], 0)] },
      { id: 'rp-en-3', level: 'B2', title: 'The paradox of choice', text: 'It seems intuitive that more options make us happier, yet several studies suggest the opposite. When faced with dozens of choices, people often take longer to decide and feel less satisfied afterwards, wondering whether a different option would have been better. This does not mean that choice is bad; rather, it suggests that carefully limiting the options, or using clear criteria, can reduce regret and make decisions easier.',
        qs: [q('What does the passage question?', ['That more options always make us happier', 'That choice exists', 'That studies are useful', 'That decisions are fast'], 0), q('According to the text, what may happen after a choice among many options?', ['Less satisfaction and more doubts', 'Greater joy', 'No effect', 'Immediate decision'], 0), q('What does the author suggest?', ['Limit options or use criteria', 'Avoid decisions', 'Choose randomly', 'Add more options'], 0)] },
      { id: 'rp-en-4', level: 'B2', title: 'Why cities are quieter at night', text: 'Anyone who has walked through a city at three in the morning knows how different it feels. Traffic thins, shops close and the hum of daily life fades. Yet cities are never entirely silent: delivery vans, night buses and ventilation systems create a low background noise. Researchers who study urban sound argue that this «nocturnal soundscape» deserves attention, because even moderate noise can affect sleep, and sleep, in turn, shapes our health and mood.',
        qs: [q('What is the main topic?', ['The sound of cities at night and its effects', 'The history of buses', 'How shops operate', 'Why people dislike cities'], 0), q('What creates the low background noise?', ['Delivery vans, night buses and ventilation', 'Crowds', 'Music venues', 'Traffic jams'], 0), q('Why does the research matter, according to the text?', ['Noise can affect sleep, which affects health and mood', 'It will reduce traffic', 'It makes cities safer', 'It proves cities are silent'], 0)] }
    ]
  };

  /* Dialoghi ramificati: ogni risposta ha una qualità (0–2) e un feedback. Autovalutazione guidata, non valutazione esterna. */
  const ch = (t, next, qq, fb) => ({ t, next, q: qq, fb });
  C.dialogues = [
    { id: 'dl-en-1', lang: 'en', level: 'B1', title: 'Ordering at a café', accent: 'en-GB', start: 'n1', nodes: {
      n1: { p: 'Good morning! What can I get you?', c: [ch('A coffee, please.', 'n2', 1, 'Corretto ma molto breve: prova a essere più completo.'), ch('Could I have a medium latte and a croissant, please?', 'n2', 2, 'Naturale e cortese.'), ch('I want coffee.', 'n2', 0, 'Troppo diretto: usa «Could I have…» o «I’d like…».')] },
      n2: { p: 'Sure. Would you like that to have here or to take away?', c: [ch('To take away, please.', 'n3', 2, 'Perfetto.'), ch('Take away.', 'n3', 1, 'Si capisce, ma manca la cortesia.'), ch('I eat here.', 'n3', 0, 'Meglio: «I’ll have it here» o «To eat in».')] },
      n3: { p: 'That’s six pounds fifty. Are you paying by card?', c: [ch('Yes, by card. Thank you!', 'end', 2, 'Chiaro e cortese.'), ch('Can I pay with my phone?', 'end', 2, 'Naturale: domanda utile.'), ch('Card yes.', 'end', 0, 'Costruisci una frase completa.')] } } },
    { id: 'dl-en-2', lang: 'en', level: 'B2', title: 'Disagreeing politely at work', accent: 'en-US', start: 'n1', nodes: {
      n1: { p: 'I think we should move the deadline to next week. What do you think?', c: [ch('I see your point, but I’m worried about the client’s expectations.', 'n2', 2, 'Accordo parziale e motivazione.'), ch('No, that’s wrong.', 'n2', 0, 'Troppo brusco in contesto lavorativo.'), ch('Maybe.', 'n2', 1, 'Troppo vago: aggiungi un motivo.')] },
      n2: { p: 'Fair enough. But we haven’t had enough time to test the product. Do you have an alternative?', c: [ch('We could release a smaller version first and add the rest later.', 'n3', 2, 'Proposta concreta con condizionale implicito.'), ch('I don’t know.', 'n3', 0, 'Offri almeno un’idea.'), ch('Why don’t we ask the client?', 'n3', 1, 'Utile ma passa la responsabilità.')] },
      n3: { p: 'That sounds reasonable. Could you draft a plan by Friday?', c: [ch('Of course. I’ll send it over by Thursday evening.', 'end', 2, 'Impegno chiaro.'), ch('Yes.', 'end', 1, 'Breve: aggiungi i tempi.'), ch('I’m too busy.', 'end', 0, 'Rifiuto brusco: proponi un’alternativa.')] } } },
    { id: 'dl-en-3', lang: 'en', level: 'B1', title: 'Asking for directions', accent: 'en-AU', start: 'n1', nodes: {
      n1: { p: 'G’day! Can I help you?', c: [ch('Excuse me, could you tell me where the station is?', 'n2', 2, 'Domanda indiretta, cortese.'), ch('Where is station?', 'n2', 0, 'Manca l’articolo e la cortesia.'), ch('Hello. I’m looking for the train station.', 'n2', 2, 'Naturale.')] },
      n2: { p: 'Sure. Go straight ahead for two blocks, then turn left at the bank.', c: [ch('Straight on, then left at the bank. Is it far?', 'n3', 2, 'Hai ripetuto per confermare e chiesto di più.'), ch('Okay, thanks.', 'n3', 1, 'Va bene, ma conferma i dettagli.'), ch('I don’t understand.', 'n3', 1, 'Meglio: «Could you repeat that, please?»')] },
      n3: { p: 'Only about five minutes on foot.', c: [ch('Great, thanks a lot for your help!', 'end', 2, 'Cortese e naturale.'), ch('Thanks.', 'end', 1, 'Corretto.'), ch('Bye.', 'end', 0, 'Troppo brusco.')] } } },
    { id: 'dl-ja-1', lang: 'ja', level: 'J1', title: 'Al ristorante', start: 'n1', nodes: {
      n1: { p: 'いらっしゃいませ。なんめいさまですか。', c: [ch('ふたりです。', 'n2', 2, 'Corretto: «due persone».'), ch('ふたつです。', 'n2', 0, 'ふたつ conta oggetti; per le persone: ふたり.'), ch('はい。', 'n2', 1, 'Non risponde alla domanda.')] },
      n2: { p: 'ごちゅうもんは なんですか。', c: [ch('ラーメンを ください。', 'n3', 2, 'Naturale e cortese.'), ch('ラーメンを たべたいです。', 'n3', 1, 'Si capisce; meglio ください.'), ch('ラーメン。', 'n3', 0, 'Troppo breve e brusco.')] },
      n3: { p: 'おのみものは どうしますか。', c: [ch('みずを おねがいします。', 'end', 2, 'Cortese.'), ch('いりません。', 'end', 1, 'Cortese ma secco.'), ch('みず！', 'end', 0, 'Troppo informale.')] } } },
    { id: 'dl-ja-2', lang: 'ja', level: 'J2', title: 'Chiedere un favore', start: 'n1', nodes: {
      n1: { p: 'どうしましたか。', c: [ch('すみません、ちょっと てつだって いただけませんか。', 'n2', 2, 'Molto cortese.'), ch('てつだって ください。', 'n2', 1, 'Corretto ma meno cortese.'), ch('てつだえ。', 'n2', 0, 'Imperativo: scortese.')] },
      n2: { p: 'いいですよ。なにを しますか。', c: [ch('この にもつを はこんで もらえますか。', 'n3', 2, 'Richiesta chiara.'), ch('これ。', 'n3', 0, 'Troppo vago.'), ch('にもつを はこんで ください。', 'n3', 1, 'Corretto.')] },
      n3: { p: 'わかりました。どこへ はこびますか。', c: [ch('あの へやまで おねがいします。', 'end', 2, 'Ottimo.'), ch('むこうです。', 'end', 1, 'Va bene, ma vago.'), ch('しりません。', 'end', 0, 'Non risponde alla domanda.')] } } },
    { id: 'dl-ja-3', lang: 'ja', level: 'J3', title: 'Rifiutare un invito', start: 'n1', nodes: {
      n1: { p: 'あした いっしょに えいがを みませんか。', c: [ch('すみません、あしたは しごとが あるので、ちょっと…。', 'n2', 2, 'Rifiuto con garbo e motivo.'), ch('いやです。', 'n2', 0, 'Troppo diretto.'), ch('そうですね…。', 'n2', 1, 'Evasivo ma ambiguo.')] },
      n2: { p: 'そうですか。じゃあ、どようびは どうですか。', c: [ch('どようびなら だいじょうぶです。', 'n3', 2, 'Accettazione condizionale (なら).'), ch('たぶん。', 'n3', 1, 'Troppo vago.'), ch('むりです。', 'n3', 0, 'Troppo brusco.')] },
      n3: { p: 'よかった。じゃあ、どようびの ごご ふたりで いきましょう。', c: [ch('はい、たのしみです。よろしくおねがいします。', 'end', 2, 'Cortese.'), ch('はい。', 'end', 1, 'Breve.'), ch('いいよ。', 'end', 1, 'Informale: ok solo tra amici.')] } } }
  ];
})(window.ST = window.ST || {});
