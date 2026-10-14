/* Inglese — ampliamento stage L4 (B2 solido). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'eng', stage: 'L4', minutes: 20, prereq: ['eng-l3-narrative'] }, o));

  T({ id: 'eng-l4-phrasal-2', title: 'Phrasal verbs B2: lavoro, opinioni, cambiamenti', summary: '30 phrasal verbs di livello medio-alto, con costruzioni.',
    objectives: ['Capire e usare 30 phrasal verbs di livello B2', 'Gestire phrasal verbs a tre parti', 'Usarli in contesti di lavoro e discussione'],
    pages: [
      { h: 'Obiettivo', b: 'Al B2 i phrasal verbs diventano più astratti e legati a lavoro, opinioni e cambiamenti. Ne vediamo 30, con la costruzione corretta (separabile o no).' },
      { h: 'Lavoro e progetti', b: '- **set up** (avviare/creare), **take on** (assumere un compito/persona), **carry out** (svolgere), **point out** (far notare)\n- **bring up** (sollevare un tema), **call off** (annullare), **put off** (rimandare), **work out** (risolvere)\n- **come up with** (inventare), **sort out** (sistemare), **run into** (imbattersi in), **follow up** (dar seguito)\n\n> {{en-GB|We set up a new team and carried out a survey.}}\n> {{en-GB|The meeting was called off.}}' },
      { h: 'Opinioni e discussioni', b: '- **back up** (sostenere), **go along with** (assecondare), **stand up for** (difendere), **turn down** (rifiutare)\n- **talk over** (discutere), **bring about** (causare), **come across** (imbattersi / sembrare)\n- **break down** (guastarsi / crollare / analizzare), **point out**, **rule out** (escludere)\n\n> {{en-GB|He stood up for his colleague.}}\n> {{en-GB|We can’t rule out a delay.}}' },
      { h: 'Cambiamenti e processi', b: '- **cut down on** (ridurre), **give up** (smettere), **take up** (iniziare un’attività), **get over** (superare)\n- **fall apart** (andare in pezzi), **turn out** (risultare), **end up** (finire per), **pick up** (migliorare / imparare)\n- **grow out of** (crescere e lasciare), **look into** (indagare), **come down with** (ammalarsi)\n\n> {{en-GB|It turned out to be a good idea.}}\n> {{en-GB|I’ve taken up running and cut down on sugar.}}' },
      { h: 'Costruzione', b: '- **Separabili**: *call off the meeting / call the meeting off / call it off*.\n- **Inseparabili**: *come across a problem*, *look into the matter*, *run into a friend*.\n- **Tre parti**: *come up with an idea*, *stand up for yourself*, *cut down on sweets*, *get along with colleagues*.\n\nSe il pronome è oggetto di un separabile, va in mezzo.' },
      { h: 'Esempio guidato', b: '*«Abbiamo avviato un progetto, ma poi abbiamo annullato la riunione e rimandato la decisione. Alla fine tutto si è risolto.»*\n\n→ **We set up a project, but we called off the meeting and put off the decision. In the end, everything worked out.**\n\nControllo: ho usato phrasal verbs adatti al contesto e ho separato quando c’era un pronome?' },
      { h: 'Errori comuni', b: '- *call off it* → {{en-GB|call it off.}}\n- *I came across her* ok; *I came across to see* ≠ senso.\n- *put up with it* ≠ *put off* (sopportare vs rimandare).\n- *cut down* senza *on*: *cut down on sugar*.\n- Confondere *take up* (iniziare un’attività) e *take on* (assumersi).' },
      { h: 'Riepilogo', b: '- 30 phrasal verbs per lavoro, opinioni, cambiamenti.\n- Separabili/inseparabili/tre parti.\n- Impara l’esempio completo.\n- Rivedi con le carte.' }
    ],
    exercises: [
      mc('The meeting was ___ because of the strike.', ['called off', 'called up', 'called for', 'called in'], 0),
      mc('We need to ___ a solution quickly.', ['come up with', 'come across', 'come down', 'come in'], 0),
      mc('I’m trying to ___ sugar.', ['cut down on', 'cut up', 'cut off', 'cut in'], 0),
      mc('He ___ his colleague when the boss criticised him.', ['stood up for', 'stood for', 'stood in', 'stood out'], 0),
      mc('The plan ___ well. Everyone was happy.', ['turned out', 'turned up', 'turned in', 'turned on'], 0),
      mc('We can’t ___ the possibility of a delay.', ['rule out', 'rule up', 'rule off', 'rule in'], 0),
      mc('Which is correct?', ['Call off it.', 'Call it off.', 'Off call it.', 'Call off to it.'], 1)
    ],
    test: [
      mc('«Put off» means…', ['to postpone', 'to turn on', 'to tolerate', 'to arrive'], 0),
      mc('I ran ___ an old friend at the station.', ['into', 'at', 'on', 'up'], 0),
      mc('She has ___ yoga recently.', ['taken up', 'taken in', 'taken out', 'taken over'], 0),
      mc('The company will ___ ten new employees.', ['take on', 'take up', 'take off', 'take after'], 0)
    ],
    cards: [card('c1', 'avviare', 'set up', 'We set up a team.'), card('c2', 'svolgere', 'carry out', 'carry out research'), card('c3', 'far notare', 'point out', 'He pointed out a mistake.'), card('c4', 'sollevare un tema', 'bring up', 'She brought up a problem.'),
      card('c5', 'escludere', 'rule out', 'rule out a delay'), card('c6', 'risultare', 'turn out', 'It turned out well.'), card('c7', 'finire per', 'end up', 'We ended up at home.'), card('c8', 'indagare su', 'look into', 'We’ll look into it.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'The project update', text: 'We set up the project in January and carried out a survey. We came up with several ideas, but we had to call off the March meeting and put off the final decision. It turned out that the budget was too small, so we’re looking into cheaper options. I’d like to point out that we can’t rule out further delays.',
      qs: [{ q: 'What happened to the March meeting?', o: ['It was called off', 'It was moved earlier', 'It was long', 'It was held'], a: 0, kind: 'explicit' }, { q: 'What problem emerged?', o: ['The budget was too small', 'No ideas', 'Too many staff', 'The survey failed'], a: 0, kind: 'explicit' }, { q: 'What does the speaker warn about?', o: ['Further delays', 'Cancellation', 'Cost cuts', 'Lost data'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'We had to call off the meeting.', lang: 'en-GB' }, { text: 'It turned out to be a good idea.', lang: 'en-US' }, { text: 'We can’t rule out a delay.', lang: 'en-AU' }],
    shadowing: [{ text: 'We came up with several ideas, but we had to put off the decision.', lang: 'en-GB', tip: 'Phrasal verbs: stress sulla particella.' }, { text: 'It turned out that the budget was too small.', lang: 'en-US', tip: 'Turned out: legati.' }, { text: 'I’d like to point out one thing.', lang: 'en-AU', tip: 'Point out: stress su out.' }],
    speaking: [{ prompt: 'Describe a project at work or study using five phrasal verbs from the lesson.', model: 'We set up a study group and carried out some research. We came up with a plan, but we had to put off the final meeting. In the end, it turned out well.' }, { prompt: 'Talk about a habit you have taken up or cut down on.', model: 'I’ve taken up running, and I’ve cut down on coffee. I gave up smoking years ago, and I’m trying to get over my fear of public speaking.' }] });

  T({ id: 'eng-l4-idioms', title: 'Idiomi e espressioni fisse ad alta frequenza', summary: '40 idiomi e collocazioni fisse per conversazione e scrittura informale.',
    objectives: ['Capire gli idiomi più frequenti nel parlato', 'Usare 20 idiomi in modo appropriato', 'Evitare di tradurre gli idiomi letteralmente'],
    pages: [
      { h: 'Obiettivo', b: 'Gli idiomi sono espressioni il cui significato non si deduce dalle parole. Sono frequenti in film, podcast e conversazioni. Non serve conoscerne centinaia: ne bastano **pochi molto comuni**, usati con naturalezza.' },
      { h: 'Lavoro e difficoltà', b: '- **a piece of cake** = facilissimo\n- **under the weather** = poco bene\n- **in the same boat** = nella stessa situazione\n- **hit the nail on the head** = centrare il punto\n- **the last straw** = la goccia che fa traboccare il vaso\n- **on the ball** = attento e pronto\n- **back to square one** = punto e a capo\n- **go the extra mile** = fare di più\n\n> {{en-GB|The exam was a piece of cake.}} / {{en-GB|I’m feeling a bit under the weather.}}' },
      { h: 'Tempo, denaro, vita quotidiana', b: '- **once in a blue moon** = molto raramente\n- **in the long run** = a lungo termine\n- **at the last minute** = all’ultimo\n- **save for a rainy day** = risparmiare per i tempi difficili\n- **cost an arm and a leg** = costare un occhio della testa\n- **break the bank** = spendere troppo\n- **time flies** = il tempo vola\n- **call it a day** = smettere per oggi\n\n> {{en-GB|That car costs an arm and a leg.}}' },
      { h: 'Persone e opinioni', b: '- **get along like a house on fire** = andare molto d’accordo\n- **bite the bullet** = stringere i denti\n- **break the ice** = rompere il ghiaccio\n- **pull someone’s leg** = prendere in giro\n- **beat around the bush** = girarci intorno\n- **speak your mind** = dire ciò che pensi\n- **keep an eye on** = tenere d’occhio\n- **let the cat out of the bag** = svelare un segreto\n\n> {{en-GB|Stop beating around the bush and tell me.}}' },
      { h: 'Come usarli', b: '1. Impara l’**esempio completo**, non solo il significato.\n2. Usa gli idiomi con **moderazione**: uno ogni tanto suona naturale.\n3. Attenzione al **registro**: molti sono informali.\n4. Non modificare la forma (*a piece of the cake* è sbagliato).\n5. Se non sei sicuro, usa un’espressione neutra.' },
      { h: 'Esempio guidato', b: 'Racconta: *L’esame era facilissimo, ma ieri mi sentivo poco bene. L’ultimo ostacolo è stato il traffico, così ho dovuto stringere i denti e arrivare all’ultimo minuto.*\n\n→ **The exam was a piece of cake, but yesterday I was under the weather. The last straw was the traffic, so I had to bite the bullet and arrive at the last minute.**\n\nControllo: ogni idioma ha la forma esatta?' },
      { h: 'Errori comuni', b: '- Tradurre dall’italiano: *rompere una gamba* non è «break a leg» in questo senso (è un augurio teatrale).\n- Usare idiomi in testi accademici.\n- Cambiare una parola: *a piece of the cake*.\n- Esagerare: troppi idiomi suonano forzati.\n- Non conoscere il significato reale.' },
      { h: 'Riepilogo', b: '- 40 idiomi comuni divisi per tema.\n- Impara l’esempio completo.\n- Registro informale; moderazione.\n- Forma fissa.' }
    ],
    exercises: [
      mc('«A piece of cake» means…', ['very easy', 'a dessert', 'a small gift', 'difficult'], 0),
      mc('«Under the weather» means…', ['slightly ill', 'in the rain', 'lost', 'very happy'], 0),
      mc('«Cost an arm and a leg» means…', ['to be very expensive', 'to hurt', 'to be free', 'to be a bargain'], 0),
      mc('«Once in a blue moon» means…', ['very rarely', 'every month', 'at night', 'never'], 0),
      mc('«Beat around the bush» means…', ['avoid the main point', 'hit a bush', 'walk in a garden', 'speak loudly'], 0),
      mc('«Let the cat out of the bag» means…', ['reveal a secret', 'lose a pet', 'go shopping', 'be angry'], 0),
      mc('«Break the ice» means…', ['to start a conversation', 'to fall', 'to cook', 'to be cold'], 0)
    ],
    test: [
      mc('«Call it a day» means…', ['stop working for today', 'name a day', 'start work', 'take a holiday'], 0),
      mc('«In the same boat» means…', ['in the same situation', 'on a boat', 'lost', 'alone'], 0),
      mc('«Pull someone’s leg» means…', ['to joke with them', 'to hurt them', 'to help them', 'to follow them'], 0),
      mc('«The last straw» is…', ['the final problem that makes you lose patience', 'a drink', 'a lucky thing', 'a first step'], 0)
    ],
    cards: [card('c1', 'facilissimo', 'a piece of cake', 'It’s a piece of cake.'), card('c2', 'poco bene', 'under the weather', 'I’m under the weather.'), card('c3', 'costare tantissimo', 'cost an arm and a leg', 'It costs an arm and a leg.'), card('c4', 'molto raramente', 'once in a blue moon', 'once in a blue moon'),
      card('c5', 'stringere i denti', 'bite the bullet', 'I’ll bite the bullet.'), card('c6', 'rompere il ghiaccio', 'break the ice', 'break the ice'), card('c7', 'svelare un segreto', 'let the cat out of the bag', 'He let the cat out of the bag.'), card('c8', 'smettere per oggi', 'call it a day', 'Let’s call it a day.')],
    listening: [{ id: 'l1', lang: 'en-AU', title: 'Chatting at work', text: 'Honestly, the test was a piece of cake. Last week I was under the weather, though. The last straw was the traffic. Anyway, I’ve decided to bite the bullet and ask for a pay rise. It costs an arm and a leg to live here! My boss and I get along like a house on fire, so I’m sure it’ll be fine. Let’s call it a day and go for a coffee.',
      qs: [{ q: 'How was the test?', o: ['Very easy', 'Very difficult', 'Boring', 'Cancelled'], a: 0, kind: 'explicit' }, { q: 'What has the speaker decided to do?', o: ['Ask for a pay rise', 'Change job', 'Take a holiday', 'Move house'], a: 0, kind: 'explicit' }, { q: 'How is the relationship with the boss?', o: ['Very good', 'Bad', 'Distant', 'Tense'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'The exam was a piece of cake.', lang: 'en-GB' }, { text: 'I’m feeling a bit under the weather.', lang: 'en-US' }, { text: 'Let’s call it a day.', lang: 'en-AU' }],
    shadowing: [{ text: 'It costs an arm and a leg.', lang: 'en-GB', tip: 'Ritmo: stress su arm e leg.' }, { text: 'Stop beating around the bush!', lang: 'en-US', tip: 'Tono diretto.' }, { text: 'I’ll just have to bite the bullet.', lang: 'en-AU', tip: 'Bite the: legato.' }],
    speaking: [{ prompt: 'Tell a short story using at least four idioms from the lesson.', model: 'The exam was a piece of cake, but I was under the weather. The last straw was the traffic. I had to bite the bullet and run. We ended up laughing about it, and we called it a day.' }, { prompt: 'Explain what an idiom means to a friend without using its literal meaning.', model: 'When someone says it costs an arm and a leg, they mean it’s very expensive. It’s not about your body; it’s just a way to say «a lot of money».' }] });

  T({ id: 'eng-l4-modals-speculation', title: 'Modali per la deduzione nel passato e nel presente', summary: 'must have, might have, can’t have, should have, needn’t have.',
    objectives: ['Usare modal + have + participio per dedurre e criticare', 'Distinguere certezza, possibilità e impossibilità', 'Usare needn’t have e didn’t need to'],
    pages: [
      { h: 'Obiettivo', b: 'Per fare ipotesi su ciò che è successo (e non l’hai visto) si usa **modale + have + participio passato**. Serve per spiegazioni, indagini, rimpianti e critiche.' },
      { h: 'Deduzione nel passato', b: '- **must have + participio** = quasi certo: {{en-GB|She must have forgotten.}}\n- **can’t have / couldn’t have** = quasi certo che NON: {{en-GB|He can’t have been at home — the lights were off.}}\n- **may / might / could have** = possibile: {{en-GB|They might have missed the train.}}\n\nScala: must have (90%) → might have (50%) → can’t have (≈0%).' },
      { h: 'Critica e rimpianto', b: '- **should have** = sarebbe dovuto: {{en-GB|You should have called me.}}\n- **shouldn’t have**: {{en-GB|I shouldn’t have said that.}}\n- **ought to have**: {{en-GB|We ought to have left earlier.}}\n- **could have** = avrebbe potuto (e non l’ha fatto): {{en-GB|You could have asked for help.}}' },
      { h: 'Needn’t have e didn’t need to', b: '- **needn’t have + participio** = non era necessario, ma l’ho fatto: {{en-GB|I needn’t have brought an umbrella.}} (L’ho portato, ma non serviva.)\n- **didn’t need to + base** = non era necessario (non è chiaro se l’ho fatto): {{en-GB|I didn’t need to bring an umbrella.}}\n\nDifferenza chiave: needn’t have = azione compiuta inutilmente.' },
      { h: 'Deduzione nel presente', b: '- **must be** (certo), **can’t be** (impossibile), **might/could be** (possibile): {{en-GB|He must be at work.}}\n- **must be + -ing** (azione in corso): {{en-GB|She must be sleeping.}}\n\nCon la forma continua nel passato: **must have been + -ing**: {{en-GB|They must have been waiting for hours.}}' },
      { h: 'Esempio guidato', b: 'Il caffè è freddo e le luci sono spente.\n- **He must have left an hour ago.** (certo)\n- **He might have gone out for lunch.** (possibile)\n- **He can’t have been working late.** (impossibile)\n- **He should have told us.** (critica)\n\nControllo: ogni frase usa modale + have + participio.' },
      { h: 'Errori comuni', b: '- *must had* → {{en-GB|must have.}}\n- *can’t has gone* → {{en-GB|can’t have gone.}}\n- *I should have went* → {{en-GB|should have gone.}}\n- *needn’t to have* → {{en-GB|needn’t have.}}\n- Usare *must* per obbligo passato: usa *had to*.' },
      { h: 'Riepilogo', b: '- must/might/can’t + have + participio: deduzione.\n- should/shouldn’t/could + have + participio: critica/rimpianto.\n- needn’t have vs didn’t need to.\n- must be/can’t be per il presente.' }
    ],
    exercises: [
      mc('She isn’t answering. She ___ asleep.', ['must be', 'must have', 'should be', 'can be'], 0),
      mc('The window is broken. Someone ___ broken it.', ['must have', 'must', 'should', 'can'], 0),
      mc('He ___ at home; the lights were off.', ['can’t have been', 'must been', 'should be', 'couldn’t be been'], 0),
      mc('You ___ called me. I was worried.', ['should have', 'should', 'must', 'would'], 0),
      mc('I ___ brought an umbrella. It didn’t rain.', ['needn’t have', 'needn’t', 'didn’t need', 'mustn’t have'], 0),
      mc('They ___ missed the train. I’m not sure.', ['might have', 'must had', 'can’t', 'should'], 0),
      mc('Which is correct?', ['I should have went.', 'I should have gone.', 'I should had gone.', 'I should went.'], 1)
    ],
    test: [
      mc('«He must have forgotten» means…', ['I’m almost sure he forgot', 'He had to forget', 'He might forget', 'He can’t forget'], 0),
      mc('«I shouldn’t have said that» expresses…', ['regret', 'obligation', 'possibility', 'prediction'], 0),
      mc('She ___ left already; her coat is still here.', ['can’t have', 'must have', 'should', 'would'], 0),
      mc('«Needn’t have» means…', ['it wasn’t necessary but I did it', 'I couldn’t do it', 'I wanted to do it', 'it was forbidden'], 0)
    ],
    cards: [card('c1', 'deve aver', 'must have', 'She must have left.'), card('c2', 'può aver', 'might have', 'He might have called.'), card('c3', 'non può aver', 'can’t have', 'He can’t have known.'), card('c4', 'avrebbe dovuto', 'should have', 'You should have asked.'),
      card('c5', 'non era necessario', 'needn’t have', 'I needn’t have gone.'), card('c6', 'rimpiangere', 'to regret', 'I regret nothing.'), card('c7', 'dedurre', 'to deduce', 'We deduced that…'), card('c8', 'sospetto', 'suspect', 'He’s a suspect.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'A mystery', text: 'The door was open, and the coffee was still warm. Someone must have been here recently. It can’t have been the owner — she’s on holiday. It might have been a neighbour, or it could have been a burglar. They should have locked the door. I needn’t have worried, though; nothing was stolen.',
      qs: [{ q: 'Why does the speaker think someone was there recently?', o: ['The coffee was warm', 'A noise', 'A letter', 'A phone call'], a: 0, kind: 'explicit' }, { q: 'Who can’t it have been?', o: ['The owner', 'A neighbour', 'A burglar', 'A friend'], a: 0, kind: 'explicit' }, { q: 'Was anything stolen?', o: ['No', 'Yes, money', 'Yes, jewellery', 'Not known'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'She must have forgotten the keys.', lang: 'en-GB' }, { text: 'He can’t have been at home.', lang: 'en-US' }, { text: 'You should have called me.', lang: 'en-AU' }],
    shadowing: [{ text: 'Someone must have been here recently.', lang: 'en-US', tip: 'Must have been: /mʌst əv bɪn/.' }, { text: 'It can’t have been the owner.', lang: 'en-GB', tip: 'Can’t have: /kɑːnt əv/.' }, { text: 'I shouldn’t have said that.', lang: 'en-AU', tip: 'Shouldn’t have: /ʃʊdnt əv/.' }],
    speaking: [{ prompt: 'Imagine a mystery: your friend didn’t arrive. Give three possible explanations.', model: 'She must have missed the bus. She might have forgotten the date, or she could have been stuck in traffic. She can’t have lost her phone; she texted me this morning.' }, { prompt: 'Say two things you should have done and one you needn’t have done.', model: 'I should have studied more, and I should have called my parents. I needn’t have bought so much food for the party.' }] });

  T({ id: 'eng-l4-data-trends', title: 'Descrivere dati, grafici e tendenze', summary: 'Lessico per aumenti, cali, proporzioni e confronti; frasi per presentare dati.',
    objectives: ['Descrivere un grafico con verbi e nomi di tendenza', 'Usare percentuali e proporzioni correttamente', 'Presentare dati in modo chiaro e neutro'],
    pages: [
      { h: 'Obiettivo', b: 'Descrivere dati è richiesto in presentazioni, relazioni e prove B2. Servono verbi di tendenza, aggettivi di grado e strutture per percentuali.' },
      { h: 'Verbi e nomi di tendenza', b: '- Aumento: **rise, increase, grow, go up, climb, soar** (forte)\n- Diminuzione: **fall, decrease, decline, drop, go down, plunge** (forte)\n- Stabilità: **stay stable, remain steady, level off**\n- Picchi: **peak at, reach a high of**; **hit a low of**\n\nNomi: *a rise, an increase, a fall, a decline, a peak, a trough*.\n\n> {{en-GB|Sales rose sharply in March.}} / {{en-GB|There was a slight fall in prices.}}' },
      { h: 'Aggettivi e avverbi di grado', b: '- Grande: **sharp(ly), dramatic(ally), significant(ly), considerable/considerably**\n- Medio: **steady/steadily, gradual(ly), moderate(ly)**\n- Piccolo: **slight(ly), marginal(ly), modest(ly)**\n\n> {{en-GB|The number rose steadily from 20 to 50.}}\n> {{en-GB|There was a dramatic drop in unemployment.}}' },
      { h: 'Percentuali e proporzioni', b: '- **by + differenza**: {{en-GB|Sales rose by 10%.}}\n- **to + valore finale**: {{en-GB|Sales rose to 500 units.}}\n- **from … to …**: {{en-GB|rose from 300 to 500}}\n- **at** per i picchi: {{en-GB|peaked at 70%}}\n- Proporzioni: **a third, a quarter, a majority, a minority, nearly half, over 60 percent**\n- **account for** = costituire: {{en-GB|Students account for 40% of users.}}' },
      { h: 'Presentare un grafico', b: 'Struttura:\n1. **Introduzione**: *The chart shows… / This graph illustrates…*\n2. **Panoramica**: *Overall, there was an upward trend.*\n3. **Dettagli** con dati chiave.\n4. **Confronto** o conclusione.\n\nFormule: {{en-GB|As can be seen from the chart… / It is clear that… / The most striking feature is…}}' },
      { h: 'Esempio guidato', b: 'Dati: *vendite 2020: 200, 2021: 250, 2022: 400, 2023: 390.*\n\n**The chart shows sales over four years. Overall, there was an upward trend. Sales rose steadily from 200 to 250 between 2020 and 2021, then climbed sharply to 400 in 2022. In 2023 they dipped slightly to 390.**\n\nControllo: introduzione, panoramica, dettagli con from/to e by.' },
      { h: 'Errori comuni', b: '- *The sales increased of 10%* → {{en-GB|by 10%.}}\n- *rose at 500* → {{en-GB|rose to 500.}}\n- *a graph shows to…* → {{en-GB|shows that…}}\n- Confondere *rise* (intransitivo) e *raise* (transitivo): {{en-GB|Prices rose. / They raised prices.}}\n- Mescolare i tempi nella descrizione.' },
      { h: 'Riepilogo', b: '- Verbi: rise, fall, peak, level off; avverbi di grado.\n- by (differenza), to (valore finale), at (picco).\n- Proporzioni: a third, a majority.\n- Struttura: intro, overall, dettagli.' }
    ],
    exercises: [
      mc('Sales ___ sharply in March.', ['rose', 'raised', 'rised', 'arose'], 0),
      mc('Prices rose ___ 10%.', ['by', 'to', 'at', 'for'], 0),
      mc('Sales rose ___ 500 units.', ['by', 'to', 'at', 'in'], 1),
      mc('The number peaked ___ 70%.', ['at', 'to', 'by', 'of'], 0),
      mc('«A slight fall» means…', ['a small decrease', 'a large decrease', 'an increase', 'stability'], 0),
      mc('A majority is…', ['more than half', 'less than half', 'a third', 'half exactly'], 0),
      mc('Which is correct?', ['Students account for 40% of users.', 'Students accounts 40%.', 'Students account of 40%.', 'Students are accounting for 40.'], 0)
    ],
    test: [
      mc('«Soar» means…', ['rise very sharply', 'fall slowly', 'stay stable', 'disappear'], 0),
      mc('«Level off» means…', ['stop increasing/decreasing and become stable', 'rise', 'fall', 'cancel'], 0),
      mc('Sales rose ___ 200 ___ 400.', ['from / to', 'by / at', 'to / from', 'of / in'], 0),
      mc('Which phrase introduces a chart?', ['The chart shows…', 'Look at that!', 'It is funny.', 'I don’t know.'], 0)
    ],
    cards: [card('c1', 'aumentare', 'to rise', 'Prices rose.'), card('c2', 'calare', 'to fall', 'Sales fell.'), card('c3', 'crescere rapidamente', 'to soar', 'Prices soared.'), card('c4', 'crollare', 'to plunge', 'Sales plunged.'),
      card('c5', 'stabilizzarsi', 'to level off', 'It levelled off.'), card('c6', 'picco', 'peak', 'a peak in July'), card('c7', 'tendenza', 'trend', 'an upward trend'), card('c8', 'costituire (percentuale)', 'to account for', 'It accounts for 20%.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A short presentation', text: 'This chart shows the number of visitors over five years. Overall, there was an upward trend. Visitors rose steadily from two hundred thousand to three hundred thousand between twenty-nineteen and twenty-twenty-one. After that, numbers soared to nearly five hundred thousand, then levelled off. Tourists accounted for about sixty percent of the total.',
      qs: [{ q: 'What was the overall trend?', o: ['Upward', 'Downward', 'Flat', 'Irregular'], a: 0, kind: 'explicit' }, { q: 'What happened after 2021?', o: ['Numbers soared', 'Numbers fell', 'Numbers stayed flat', 'Data ended'], a: 0, kind: 'explicit' }, { q: 'What share did tourists account for?', o: ['About 60%', 'About 40%', 'About 10%', 'About 90%'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'Sales rose sharply in March.', lang: 'en-GB' }, { text: 'Prices fell by ten percent.', lang: 'en-US' }, { text: 'The chart shows an upward trend.', lang: 'en-AU' }],
    shadowing: [{ text: 'Overall, there was an upward trend.', lang: 'en-GB', tip: 'Overall: stress sulla prima.' }, { text: 'Sales rose from two hundred to four hundred.', lang: 'en-US', tip: 'Numeri: chiarezza.' }, { text: 'Tourists account for sixty percent of the total.', lang: 'en-AU', tip: 'Account for: legati.' }],
    speaking: [{ prompt: 'Describe the trend of something you know (prices, temperature, steps per day) for 40 seconds.', model: 'The number of steps I take rose steadily from 5,000 to 9,000 over three months. It peaked at 12,000 in July, then dropped slightly in autumn. Overall, there is an upward trend.' }, { prompt: 'Give three sentences about the share of a group in a population.', model: 'Young people account for about thirty percent of users. A majority of them use the app daily. Only a small minority never use it.' }] });

  T({ id: 'eng-l4-news-media', title: 'Linguaggio delle notizie e dei media', summary: 'Titoli, registro giornalistico, riportare fonti, riconoscere opinioni e fatti.',
    objectives: ['Capire titoli e articoli di cronaca', 'Distinguere fatti, opinioni e attribuzioni', 'Usare verbi di riporto giornalistici'],
    pages: [
      { h: 'Obiettivo', b: 'Leggere e ascoltare notizie in inglese è uno degli input più utili per il B2. Il linguaggio giornalistico ha convenzioni: titoli compressi, passivi, verbi di riporto, attribuzione delle fonti.' },
      { h: 'I titoli (headlines)', b: 'Caratteristiche:\n- **Presente** per eventi passati: {{en-GB|Mayor resigns after scandal.}}\n- **Omissione di articoli e ausiliari**: {{en-GB|Prices up, wages down.}}\n- **Infinito = futuro**: {{en-GB|PM to visit Paris.}}\n- **Participio passato = passivo**: {{en-GB|Man arrested after robbery.}}\n- **Parole brevi**: *slash* (ridurre), *bid* (tentativo), *probe* (indagine), *talks* (trattative), *hit* (colpire)\n\nUn titolo non va letto come una frase normale.' },
      { h: 'Attribuire la fonte', b: 'Verbi di riporto tipici:\n- neutri: **say, report, announce, state, confirm**\n- forti: **claim, allege, insist, warn, admit, deny**\n\nFrasi: {{en-GB|According to the report, unemployment fell.}} / {{en-GB|The minister said that…}} / {{en-GB|Sources claim that…}}\n\n**Claim** e **allege** segnalano che l’informazione **non è verificata**.' },
      { h: 'Fatti e opinioni', b: '- **Fatto**: verificabile: *The company has 500 employees.*\n- **Opinione**: valutazione: *The policy is a disaster.*\n- Segnali di opinione: *arguably, apparently, supposedly, it seems, critics say*\n- Hedging: *may, could, is thought to, is expected to*\n\nChiediti: chi lo dice? su quale base? c’è un dato?' },
      { h: 'Passivi e strutture impersonali', b: '- {{en-GB|It is reported that…}} / {{en-GB|He is said to be…}} / {{en-GB|She is believed to have left.}}\n- {{en-GB|Three people are reported injured.}}\n\nSono molto frequenti nel registro giornalistico e nei testi formali.' },
      { h: 'Esempio guidato', b: '**Headline:** *PM to visit Paris amid strike*\n\n- *to visit* = futuro (visiterà).\n- *amid* = nel mezzo di.\n\n**Article:** *The Prime Minister is expected to meet the president on Friday, according to sources.* → **is expected to** (ipotesi) + **according to** (fonte).\n\nControllo: ho capito il futuro, il passivo e la fonte?' },
      { h: 'Errori comuni', b: '- Tradurre i titoli parola per parola.\n- Prendere *claims* come verità.\n- Ignorare *according to / allegedly*.\n- Confondere *say* e *tell*.\n- Dimenticare che *to + verbo* nei titoli = futuro.' },
      { h: 'Riepilogo', b: '- Titoli: presente, infinito = futuro, participio = passivo.\n- Verbi di riporto: say, claim, allege, warn.\n- Fatti vs opinioni; hedging.\n- It is said/reported/believed that…' }
    ],
    exercises: [
      mc('«PM to visit Paris» means…', ['The PM will visit Paris', 'The PM visited Paris', 'The PM wants to visit', 'The PM has to visit'], 0),
      mc('«Man arrested after robbery» uses…', ['a past participle as passive', 'an infinitive', 'a gerund', 'a question'], 0),
      mc('«Claim» suggests the information is…', ['not verified', 'proved', 'official', 'old'], 0),
      mc('«According to the report» introduces…', ['a source', 'a joke', 'a question', 'a rule'], 0),
      mc('«It is believed that» is…', ['an impersonal structure', 'a headline', 'a question tag', 'slang'], 0),
      mc('Which is an opinion?', ['The policy is a disaster.', 'The company has 500 employees.', 'He is 40.', 'It rained on Monday.'], 0),
      mc('«Probe» in a headline usually means…', ['investigation', 'test', 'tool', 'experiment'], 0)
    ],
    test: [
      mc('«Talks» in a headline means…', ['negotiations', 'speeches', 'songs', 'lessons'], 0),
      mc('«He is said to be» means…', ['People say he is', 'He said', 'He tells', 'He wants to be'], 0),
      mc('A neutral reporting verb is…', ['say', 'allege', 'deny', 'warn'], 0),
      mc('«Prices up, wages down» is a…', ['headline with omitted verbs', 'question', 'command', 'quote'], 0)
    ],
    cards: [card('c1', 'secondo', 'according to', 'According to the report…'), card('c2', 'sostenere (senza prova)', 'to claim', 'He claims he’s innocent.'), card('c3', 'presunto', 'alleged', 'the alleged thief'), card('c4', 'indagine', 'probe', 'a police probe'),
      card('c5', 'trattative', 'talks', 'peace talks'), card('c6', 'fonte', 'source', 'a reliable source'), card('c7', 'smentire', 'to deny', 'He denied it.'), card('c8', 'avvertire', 'to warn', 'Experts warn of a rise.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'News bulletin', text: 'The Prime Minister is expected to visit Paris on Friday for talks on trade, according to government sources. Unions have warned of strikes, and the opposition claims that the plan is a mistake. A man has been arrested after a robbery in the city centre, police said. Prices are reported to have risen by two percent this month.',
      qs: [{ q: 'Why will the PM visit Paris?', o: ['For trade talks', 'For a holiday', 'For a funeral', 'For an interview'], a: 0, kind: 'explicit' }, { q: 'What do the unions warn of?', o: ['Strikes', 'Floods', 'Tax rises', 'A war'], a: 0, kind: 'explicit' }, { q: 'How should «the opposition claims» be interpreted?', o: ['As an unverified opinion', 'As proven fact', 'As an order', 'As a joke'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'According to sources, the minister will resign.', lang: 'en-GB' }, { text: 'Prices are reported to have risen.', lang: 'en-US' }, { text: 'A man has been arrested after a robbery.', lang: 'en-AU' }],
    shadowing: [{ text: 'The Prime Minister is expected to visit Paris on Friday.', lang: 'en-GB', tip: 'Registro da notiziario: ritmo regolare.' }, { text: 'Unions have warned of strikes.', lang: 'en-US', tip: 'Warned of: legati.' }, { text: 'Police said a man has been arrested.', lang: 'en-AU', tip: 'Passivo: stress su arrested.' }],
    speaking: [{ prompt: 'Summarise a news item you read recently in four sentences, attributing the source.', model: 'According to a report, unemployment fell last month. The minister said that new jobs were created. Critics claim the figures are misleading. It remains to be seen how the trend will develop.' }, { prompt: 'Make three predictions as if you were a news presenter using «is expected to», «is likely to», «is set to».', model: 'The government is expected to announce new measures. Prices are likely to rise next month. The new law is set to take effect in January.' }] });
})(window.ST = window.ST || {});
