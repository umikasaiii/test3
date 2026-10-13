/* Inglese — stage L0 (fondamenta B1) e L1 (B1 solido). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;

  C.addTopic({
    id: 'eng-l0-habits', subject: 'eng', stage: 'L0', title: 'Abitudini e azioni in corso', minutes: 20, prereq: [],
    summary: 'Present simple, present continuous e verbi di stato.',
    objectives: ['Scegliere tra present simple e continuous in base al significato', 'Formare domande e negazioni con do/does e con be', 'Riconoscere i verbi di stato che di norma non vogliono -ing'],
    pages: [
      { h: 'Obiettivo', b: 'In questa lezione impari a distinguere due modi di parlare del presente: **ciò che succede di solito** e **ciò che sta succedendo adesso**.\n\nAlla fine saprai:\n- scegliere present simple o present continuous in base al significato, non alla traduzione italiana;\n- fare domande e negazioni senza errori di ausiliare;\n- evitare «I am knowing» e simili.' },
      { h: 'Il concetto', b: 'In italiano usiamo il presente per tutto. In inglese la scelta cambia il significato:\n\n> {{en-GB|I work in a bank.}} → è il mio lavoro, un fatto stabile.\n> {{en-GB|I am working on a report today.}} → è un’azione in corso, temporanea.\n\n**Present simple** = abitudini, fatti, stati stabili, orari.\n**Present continuous** = azioni in corso adesso, situazioni temporanee, cambiamenti in atto ({{en-GB|The weather is getting colder.}}).' },
      { h: 'Come si formano', b: '**Present simple**\n- affermativa: I/you/we/they **work**; he/she/it **works** (-s alla terza persona)\n- domanda: **Do** you work here? / **Does** she work here?\n- negazione: I **do not (don’t)** work; she **does not (doesn’t)** work\n\nQuando c’è does, il verbo torna alla forma base: {{en-GB|Does she work here?}} (non *Does she works*).\n\n**Present continuous** = am/is/are + verbo-ing\n- {{en-GB|She is working.}} / {{en-GB|Is she working?}} / {{en-GB|She isn’t working.}}\n\nOrtografia: make → making, run → running, study → studying.\n\nAvverbi di frequenza (always, usually, often, sometimes, never) stanno **prima** del verbo ma **dopo** be: {{en-GB|She often works late.}} / {{en-GB|He is always late.}}' },
      { h: 'Verbi di stato', b: 'Alcuni verbi descrivono **stati**, non azioni: di norma NON si usano in forma continua.\n\n- opinione/mente: know, understand, believe, think (= opinione), remember, want, need, prefer\n- sentimenti: like, love, hate\n- possesso/relazione: have (= possedere), own, belong, mean, seem\n\n> {{en-GB|I know the answer.}} (non *I am knowing*)\n> {{en-GB|She wants a coffee.}} (non *She is wanting*)\n\nAlcuni verbi hanno **due significati**: {{en-GB|I think it’s a good idea.}} (opinione) vs {{en-GB|I’m thinking about my holiday.}} (sto riflettendo). {{en-GB|I have a car.}} vs {{en-GB|I’m having lunch.}}' },
      { h: 'Esempio guidato', b: 'Scegli la forma giusta: *«Listen! Someone ____ (knock) at the door. — Who ____ (it/be)? I ____ (not/expect) anyone.»*\n\n1. «Listen!» → azione in corso adesso → **is knocking**.\n2. «Who is it?» → be non cambia, domanda con inversione → **is it**.\n3. «I don’t expect» o «I’m not expecting»? Qui è un’attesa **in corso**: **I’m not expecting anyone** è la più naturale; ma {{en-GB|I don’t expect anyone}} sarebbe un fatto generale.\n\nControllo: la prima frase risponde a «che cosa succede ora?», quindi continuous.' },
      { h: 'Errori comuni', b: 'Errori tipici di chi parla italiano:\n\n- *I am agree* → {{en-GB|I agree.}} (agree è un verbo, non «essere d’accordo»)\n- *She works now* → {{en-GB|She is working now.}}\n- *Does she works?* → {{en-GB|Does she work?}} (la -s passa a does)\n- *I am knowing* → {{en-GB|I know.}}\n- *Do you can swim?* → {{en-GB|Can you swim?}} (i modali non vogliono do)\n- *He go to school by bus* → {{en-GB|He goes…}}' },
      { h: 'Riepilogo', b: '- Simple = abitudini, fatti, stati. Continuous = adesso, temporaneo, in cambiamento.\n- Do/does portano la marca grammaticale: dopo does, verbo base.\n- Verbi di stato: niente -ing nel significato di stato.\n- Frequenza: prima del verbo, dopo be.\n\nOra passa agli esercizi: non guardare gli esempi mentre rispondi.' }
    ],
    exercises: [
      mc('Which sentence is correct?', ['She is knowing the answer.', 'She knows the answer.', 'She know the answer.', 'She does know the answer?'], 1, 'Know è un verbo di stato: present simple, terza persona -s.'),
      fill('Complete: Look! The baby ___ (sleep).', ['is sleeping', "'s sleeping"], 'Azione in corso: is sleeping.'),
      fill('Complete the question: ___ your brother live in Rome?', ['does'], 'Terza persona singolare: does.'),
      mc('My brother ___ TV every evening after dinner.', ['watch', 'watches', 'is watching', 'does watches'], 1, 'Abitudine + terza persona: watches.'),
      order('Metti in ordine: frequenza e verbo', ['She', 'always', 'drinks', 'tea', 'in', 'the', 'morning'], 'Frequenza prima del verbo lessicale.'),
      mc('They ___ in London at the moment.', ['live', 'are living', 'lives', 'does live'], 1, 'At the moment → situazione temporanea: are living.'),
      mc('Which verb is normally NOT used in the continuous (in this meaning)?', ['to run', 'to cook', 'to want', 'to read'], 2, 'Want è un verbo di stato.')
    ],
    test: [
      mc('«Does she works here?» — what is the problem?', ['Nothing, it is correct', 'After does the verb must be in base form', 'It should be «Do she work»', 'It needs -ing'], 1),
      fill('Complete: He ___ (not/like) coffee. He prefers tea.', ["doesn't like", 'does not like'], 'Verbo di stato: present simple negativo.'),
      mc('Choose the best option: «Why are you ___ a coat? It’s sunny.»', ['wear', 'wearing', 'to wear', 'wears'], 1, 'Domanda su un’azione in corso.'),
      mc('Which sentence expresses a habit?', ['I am reading a thriller.', 'I read for an hour every night.', 'I am reading at the moment.', 'I’m reading since Monday.'], 1)
    ],
    cards: [
      card('c1', 'di solito', 'usually', 'I usually walk to work.'), card('c2', 'di rado', 'rarely', 'She rarely eats meat.'), card('c3', 'abitudine', 'habit', 'Reading before bed is a good habit.'),
      card('c4', 'aspettarsi', 'to expect', 'I don’t expect much from the film.'), card('c5', 'essere d’accordo', 'to agree', 'I agree with you.'), card('c6', 'appartenere', 'to belong', 'This bag belongs to Anna.'),
      card('c7', 'preferire', 'to prefer', 'I prefer tea to coffee.'), card('c8', 'temporaneo', 'temporary', 'It’s a temporary job.')
    ],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A busy morning', text: 'Hi Sam, it’s Jo. I can’t talk for long because I’m waiting for the bus and it’s already late. Usually I walk to work, but my knee hurts this week, so I’m taking the bus. By the way, are you still coming to the cinema on Friday? Tom doesn’t like horror films, so we are choosing a comedy. Call me tonight.',
      qs: [{ q: 'Why is Jo taking the bus this week?', o: ['The weather is bad', 'Her knee hurts', 'Her car is broken', 'She is late for a meeting'], a: 1, kind: 'explicit' }, { q: 'What can we infer about the film?', o: ['It will be a horror film', 'It will probably be a comedy', 'It is already chosen by Sam', 'Tom will not come'], a: 1, kind: 'implicit' }, { q: 'What does Jo usually do?', o: ['Takes the bus', 'Drives', 'Walks to work', 'Cycles'], a: 2, kind: 'explicit' }] }],
    dictation: [{ text: 'She usually walks to work.', lang: 'en-GB' }, { text: 'Why are you wearing a coat today?', lang: 'en-US' }, { text: 'My brother doesn’t like horror films.', lang: 'en-GB' }],
    shadowing: [{ text: 'I usually walk to work, but today I’m taking the bus.', lang: 'en-GB', tip: 'Stress: usually, walk, taking, bus. Ritmo regolare, vocali deboli in «to» e «but».' }, { text: 'Does she work here, or is she just visiting?', lang: 'en-US', tip: 'Intonazione ascendente sulla prima domanda.' }, { text: 'I know the answer, but I’m not sure about the question.', lang: 'en-AU', tip: 'Ritmo: due gruppi di senso separati da «but».' }],
    speaking: [{ prompt: 'Describe your usual morning routine in 5 sentences, then say one thing that is different this week.', model: 'I usually get up at six and have breakfast. I walk to the station, and I take the train at seven. At work I check emails first. This week, however, I’m working from home because of the repairs in my office.' }, { prompt: 'Look around you. Say what three people or things are doing right now.', model: 'My cat is sleeping on the sofa. A car is passing in the street. Someone upstairs is cooking something that smells great.' }]
  });

  C.addTopic({
    id: 'eng-l0-past', subject: 'eng', stage: 'L0', title: 'Passato: simple o present perfect?', minutes: 20, prereq: ['eng-l0-habits'],
    summary: 'Past simple, present perfect e il collegamento con il presente.',
    objectives: ['Usare il past simple per fatti conclusi con un tempo definito', 'Usare il present perfect per esperienze e risultati attuali', 'Evitare gli errori tipici con ago, since, for, yet, already'],
    pages: [
      { h: 'Obiettivo', b: 'In italiano «ho mangiato» e «mangiai» si scelgono per stile e regione. In inglese la scelta tra **past simple** e **present perfect** dipende dal **collegamento con il presente**.\n\nImparerai a decidere in tre domande.' },
      { h: 'Il concetto', b: '**Past simple**: l’azione è finita e il momento è indicato o chiaro.\n> {{en-GB|I visited Paris in 2019.}}\n> {{en-GB|She left an hour ago.}}\n\n**Present perfect** (have/has + participio): il passato conta ORA — esperienza, risultato, periodo non concluso.\n> {{en-GB|I have visited Paris three times.}} (esperienza)\n> {{en-GB|I’ve lost my keys.}} (e non li ho ancora)\n\nRegola pratica: se c’è un tempo **concluso** (yesterday, last week, in 2019, ago) → past simple. Mai present perfect con quegli indicatori.' },
      { h: 'Forme e indicatori', b: '**Past simple**: regolari -ed (worked, studied, stopped); irregolari da imparare (go → went, see → saw, buy → bought, have → had). Domanda/negazione con **did**: {{en-GB|Did you see it?}} / {{en-GB|I didn’t see it.}}\n\n**Present perfect**: have/has + participio: {{en-GB|She has finished.}} / {{en-GB|Have you ever been to Japan?}}\n\nIndicatori tipici:\n- **ever, never, just, already, yet, so far, recently** → present perfect\n- **for** + durata (for two years), **since** + punto di partenza (since 2022)\n- **ago, yesterday, last year, in 2020, when…?** → past simple' },
      { h: 'Per decidere', b: 'Tre domande, nell’ordine:\n\n1. C’è un tempo concluso nella frase (yesterday, in May, two days ago)? → **past simple**.\n2. Parlo di esperienza, risultato o periodo ancora aperto (this week, so far, ever)? → **present perfect**.\n3. Sto chiedendo *quando*? → **past simple** ({{en-GB|When did you arrive?}}).\n\nPer le situazioni che durano ancora: {{en-GB|I have lived here for ten years.}} (e vivo qui). Se non vivo più qui: {{en-GB|I lived there for ten years.}}' },
      { h: 'Esempio guidato', b: '*«I ____ (see) that film last week. Have you ____ (see) it?»*\n\n- «last week» = tempo concluso → past simple: **saw**.\n- «Have you…?» chiede un’esperienza, senza data → present perfect: **seen**.\n\nProva a rendere vera la frase con un tuo ricordo: *I saw it on Tuesday. Have you seen it yet?*\n\nControllo: se aggiungi «yesterday» alla seconda frase, deve diventare past simple: {{en-GB|Did you see it yesterday?}}' },
      { h: 'Errori comuni', b: '- *I have seen him yesterday* → {{en-GB|I saw him yesterday.}}\n- *I am here since Monday* → {{en-GB|I have been here since Monday.}}\n- *When have you arrived?* → {{en-GB|When did you arrive?}}\n- *I didn’t went* → {{en-GB|I didn’t go.}} (dopo did il verbo è base)\n- *I have been to Rome last year* → {{en-GB|I went to Rome last year.}}' },
      { h: 'Riepilogo', b: '- Tempo concluso o domanda *when* → past simple.\n- Esperienza, risultato, periodo aperto → present perfect.\n- for = durata, since = inizio.\n- Dopo did e didn’t: verbo base.\n\nI participi irregolari (been, seen, done, gone, written, taken…) vanno ripassati con le carte.' }
    ],
    exercises: [
      mc('Choose the correct sentence.', ['I have seen her yesterday.', 'I saw her yesterday.', 'I have saw her yesterday.', 'I did see her yesterday?'], 1, 'Yesterday = tempo concluso → past simple.'),
      fill('Complete: I ___ (live) here since 2020.', ['have lived', "'ve lived"], 'Since + punto di partenza, situazione ancora vera → present perfect.'),
      fill('Complete: ___ you ever been to Japan?', ['have'], 'Esperienza di vita: Have you ever…?'),
      mc('She ___ for the company for five years — she is still there.', ['worked', 'has worked', 'works since', 'did work'], 1, 'For + durata, ancora vera → present perfect.'),
      order('Metti in ordine', ['When', 'did', 'you', 'arrive', 'in', 'London'], 'When → past simple con did.'),
      mc('I ___ my wallet! Have you seen it?', ['lost', 'have lost', 'did lose', 'was losing'], 1, 'Risultato ancora attuale: non ce l’ho → present perfect.'),
      mc('We ___ to the cinema last Saturday.', ['have gone', 'went', 'go', 'have been going'], 1)
    ],
    test: [
      mc('Which sentence is correct?', ['I have finished my homework two hours ago.', 'I finished my homework two hours ago.', 'I finish my homework two hours ago.', 'I am finishing two hours ago.'], 1),
      fill('Complete: She ___ (not/arrive) yet.', ["hasn't arrived", 'has not arrived'], 'Yet con risultato atteso → present perfect.'),
      mc('How long ___ you ___ English?', ['did / study', 'have / studied', 'are / studying since', 'do / study'], 1, 'How long + situazione ancora in corso → present perfect.'),
      mc('I ___ him in 2018 but we have never spoken since.', ['have met', 'met', 'meet', 'was meeting'], 1)
    ],
    cards: [
      card('c1', 'fa (tempo)', 'ago', 'She left two hours ago.'), card('c2', 'già', 'already', 'I’ve already eaten.'), card('c3', 'ancora (non)', 'yet', 'He hasn’t called yet.'), card('c4', 'da (punto di partenza)', 'since', 'I’ve known her since 2015.'),
      card('c5', 'per (durata)', 'for', 'We’ve lived here for years.'), card('c6', 'finora', 'so far', 'So far, it’s been a good day.'), card('c7', 'perdere', 'to lose (lost)', 'I lost my keys.'), card('c8', 'esperienza', 'experience', 'He has a lot of experience.')
    ],
    listening: [{ id: 'l1', lang: 'en-US', title: 'Checking in', text: 'Hello, I made a booking last week under the name Hernandez. I’ve been travelling since six this morning and I haven’t eaten anything yet. Has my room been cleaned? Great. Oh, and I lost my charger on the train — has anybody handed one in? No? Okay, I’ll buy a new one. Thanks.',
      qs: [{ q: 'When did the guest make the booking?', o: ['This morning', 'Last week', 'Yesterday', 'Two hours ago'], a: 1, kind: 'explicit' }, { q: 'What is still true now?', o: ['He has eaten', 'He has found the charger', 'He has not eaten', 'He has not booked'], a: 2, kind: 'explicit' }, { q: 'What will he probably do about the charger?', o: ['Wait for the train company', 'Buy another one', 'Borrow one from the hotel', 'Do nothing'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'I haven’t eaten anything yet.', lang: 'en-US' }, { text: 'When did you arrive in London?', lang: 'en-GB' }, { text: 'She has lived here since 2020.', lang: 'en-AU' }],
    shadowing: [{ text: 'I’ve been travelling since six and I haven’t eaten yet.', lang: 'en-US', tip: 'Contrazioni: I’ve, haven’t. Non separare le parole: «I’ve-been-travelling».' }, { text: 'When did you last see her?', lang: 'en-GB', tip: 'Linking: «did you» scorre in «didyou».' }, { text: 'We’ve known each other for ten years.', lang: 'en-AU', tip: 'Ritmo a stress: known, other, ten, years.' }],
    speaking: [{ prompt: 'Tell me about a trip you made: where, when, with whom, and one thing you have never done there.', model: 'Last summer I went to Lisbon with my sister. We stayed for five days. I have never tried the famous custard tarts, but I want to go back for them.' }, { prompt: 'Say three things you have done this week and one thing you haven’t done yet.', model: 'I’ve studied every day, I’ve cooked dinner twice, and I’ve called my parents. I haven’t finished my book yet.' }]
  });

  C.addTopic({
    id: 'eng-l1-modals', subject: 'eng', stage: 'L1', title: 'Modali: obbligo, consiglio, possibilità', minutes: 20, prereq: ['eng-l0-past'],
    summary: 'must, have to, should, might, can’t: sfumature di significato.',
    objectives: ['Distinguere must e have to nel significato e nella negazione', 'Dare consigli con should/ought to', 'Esprimere deduzione e possibilità: must be, might, can’t be'],
    pages: [
      { h: 'Obiettivo', b: 'I verbi modali non descrivono *che cosa succede*, ma **come lo vedi tu**: obbligo, consiglio, possibilità, deduzione.\n\nImparerai le differenze che contano davvero a livello B1+ e che spesso si sbagliano.' },
      { h: 'Il concetto', b: 'Tutti i modali hanno la stessa forma: **soggetto + modale + verbo base**, senza -s alla terza persona, senza do.\n> {{en-GB|She can swim.}} / {{en-GB|Can she swim?}} / {{en-GB|She can’t swim.}}\n\nPer ogni modale pensa a **che cosa esprime**:\n- must / have to / need to → obbligo\n- should / ought to → consiglio\n- can / could / may / might → possibilità o permesso\n- must be / can’t be → deduzione logica' },
      { h: 'Obbligo e divieto', b: '**must** = obbligo sentito da chi parla (o regola personale); **have to** = obbligo esterno (regole, circostanze).\n> {{en-GB|I must call my mum tonight.}} / {{en-GB|I have to wear a uniform at work.}}\n\n**Attenzione alla negazione:**\n- **mustn’t** = è vietato: {{en-GB|You mustn’t park here.}}\n- **don’t have to** = non è necessario: {{en-GB|You don’t have to come.}}\n\nPassato: must non ha passato → **had to**: {{en-GB|I had to leave early.}}' },
      { h: 'Consiglio, possibilità, deduzione', b: '**Consiglio**: should / shouldn’t / ought to. {{en-GB|You should see a doctor.}} Più forte: had better.\n\n**Possibilità**: may, might, could. {{en-GB|It might rain.}} (≈ 40%) {{en-GB|He could be at home.}}\n\n**Deduzione (certezza)**:\n- **must be** = sono quasi certo: {{en-GB|She must be tired.}}\n- **can’t be** = sono quasi certo che NON sia: {{en-GB|That can’t be true.}}\n- **might / could be** = è possibile.\n\nNota: per la deduzione NON si usa «mustn’t be» ma **can’t be**.' },
      { h: 'Esempio guidato', b: 'Situazione: l’autobus è in ritardo di 30 minuti e Maria non risponde.\n\n- Deduzione forte: *She must be stuck in traffic.* (tutti gli indizi lo suggeriscono)\n- Possibilità: *She might have forgotten.* (modali + have + participio per il passato)\n- Esclusione: *She can’t be at home — her car is here.*\n- Consiglio: *You should call her again.*\n\nControllo: se togli il modale, la frase diventa un fatto («She is stuck»). Il modale mostra quanto sei sicuro.' },
      { h: 'Errori comuni', b: '- *You mustn’t come* quando vuoi dire «non serve» → {{en-GB|You don’t have to come.}}\n- *She cans swim* → {{en-GB|She can swim.}}\n- *You should to go* → {{en-GB|You should go.}} (niente to dopo should; sì dopo ought: ought **to**)\n- *I must to go* → {{en-GB|I must go.}}\n- *He musts* → {{en-GB|He must / has to.}}' },
      { h: 'Riepilogo', b: '- Modale + verbo base, sempre.\n- must ≠ have to nella negazione: mustn’t (vietato) vs don’t have to (non necessario).\n- should = consiglio; might/could = possibilità; must be/can’t be = deduzione.\n- Passato dell’obbligo: had to.' }
    ],
    exercises: [
      mc('You ___ park here. It’s forbidden.', ['don’t have to', 'mustn’t', 'shouldn’t to', 'might not'], 1, 'Forbidden = divieto → mustn’t.'),
      mc('You ___ come tomorrow. The meeting is cancelled.', ['mustn’t', 'don’t have to', 'can’t be', 'ought'], 1, 'Non è necessario → don’t have to.'),
      fill('Complete: She’s been working since 6 a.m. She ___ be exhausted.', ['must'], 'Deduzione forte: must be.'),
      mc('That ___ be Tom! He is in Spain this week.', ['mustn’t', 'can’t', 'doesn’t', 'might not to'], 1, 'Deduzione negativa: can’t be.'),
      fill('Complete (past): Yesterday I ___ (must) leave early.', ['had to'], 'Passato di must: had to.'),
      mc('Which is correct?', ['She cans cook very well.', 'She can cooks very well.', 'She can cook very well.', 'She can to cook very well.'], 2),
      mc('You look ill. You ___ see a doctor.', ['should', 'must to', 'have', 'might to'], 0)
    ],
    test: [
      mc('«You mustn’t tell anyone» means…', ['It isn’t necessary to tell', 'It is forbidden to tell', 'It is possible to tell', 'You told someone'], 1),
      mc('It’s 3 a.m. and there are lights in the house. They ___ be awake.', ['must', 'mustn’t', 'don’t have to', 'should to'], 0),
      fill('Complete: You ___ to wear a helmet. It’s the law.', ['have'], 'Obbligo esterno: have to.'),
      mc('He ___ be at work — I saw him at the station five minutes ago.', ['must', 'can’t', 'should', 'has to'], 1)
    ],
    cards: [
      card('c1', 'vietato', 'forbidden', 'Smoking is forbidden here.'), card('c2', 'consigliare', 'to advise', 'I advise you to wait.'), card('c3', 'deduzione', 'deduction', 'This is a logical deduction.'), card('c4', 'sicuro', 'certain', 'I’m certain he left.'),
      card('c5', 'permesso', 'permission', 'You need permission to enter.'), card('c6', 'ritardo', 'delay', 'There’s a delay on the line.'), card('c7', 'stanco morto', 'exhausted', 'She looks exhausted.'), card('c8', 'regola', 'rule', 'It’s against the rules.')
    ],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'At the office', text: 'You don’t have to stay for the whole meeting, Karen, but you should read the report before Friday. Oh, and you mustn’t share it outside the company — it’s confidential. I think Dan might present the results, though he could be on holiday, so please check with him. He can’t have left yet, his coat is still here.',
      qs: [{ q: 'What is NOT necessary for Karen?', o: ['Reading the report', 'Staying for the whole meeting', 'Checking with Dan', 'Sharing results'], a: 1, kind: 'explicit' }, { q: 'What is forbidden?', o: ['Reading it', 'Presenting results', 'Sharing the report outside the company', 'Talking to Dan'], a: 2, kind: 'explicit' }, { q: 'What does the speaker deduce at the end?', o: ['Dan is probably still in the building', 'Dan is on holiday', 'Dan took his coat', 'Dan will not present'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'You don’t have to stay for the whole meeting.', lang: 'en-GB' }, { text: 'She must be tired after the flight.', lang: 'en-US' }, { text: 'That can’t be true.', lang: 'en-AU' }],
    shadowing: [{ text: 'You mustn’t share it, but you don’t have to read it today.', lang: 'en-GB', tip: 'Contrasto: stress su mustn’t e don’t.' }, { text: 'He can’t have left yet — his coat is still here.', lang: 'en-US', tip: 'Can’t have → «can’t-have» fuso.' }, { text: 'It might rain, so you should take an umbrella.', lang: 'en-AU', tip: 'Might: /maɪt/; should: /ʃʊd/ debole.' }],
    speaking: [{ prompt: 'Give a friend three pieces of advice about starting a new job.', model: 'You should arrive early on the first day. You shouldn’t be afraid to ask questions. And you ought to learn your colleagues’ names quickly.' }, { prompt: 'Your neighbour’s light is on at 2 a.m. Say what might be happening and what you deduce.', model: 'He must be working late, or he might be ill. He can’t be asleep, because I can hear music.' }]
  });

  C.addTopic({
    id: 'eng-l1-future-cond', subject: 'eng', stage: 'L1', title: 'Futuro e condizionali reali', minutes: 20, prereq: ['eng-l1-modals'],
    summary: 'will, going to, present continuous per il futuro; first e second conditional.',
    objectives: ['Scegliere tra will, going to e present continuous', 'Costruire first e second conditional', 'Evitare will dopo if e when nelle frasi temporali'],
    pages: [
      { h: 'Obiettivo', b: 'Il futuro in inglese non ha un tempo unico. Scegli la forma in base a **che cosa sai** e **quando hai deciso**.\n\nPoi aggiungiamo il **condizionale**: «se succede X, succederà Y» (reale) e «se succedesse X, succederebbe Y» (ipotetico).' },
      { h: 'Tre forme di futuro', b: '- **will**: decisione al momento, previsione, promessa. {{en-GB|I’ll help you.}} {{en-GB|It will be sunny tomorrow.}}\n- **be going to**: intenzione già decisa o previsione con indizi visibili. {{en-GB|I’m going to apply for that job.}} {{en-GB|Look at those clouds — it’s going to rain.}}\n- **present continuous**: appuntamento già organizzato. {{en-GB|I’m meeting Anna at seven.}}\n\nOrario ufficiale (treni, programmi): present simple. {{en-GB|The train leaves at 9:15.}}' },
      { h: 'First conditional', b: 'Situazione reale o probabile nel futuro.\n\n**If + present simple, will + verbo base**\n> {{en-GB|If it rains, we’ll stay at home.}}\n> {{en-GB|If you study, you’ll pass.}}\n\n**Attenzione**: dopo *if*, *when*, *as soon as*, *before*, *unless* si usa il **present simple**, non will.\n> {{en-GB|I’ll call you when I arrive.}} (non *when I will arrive*)\n\n*Unless* = if … not. {{en-GB|Unless you hurry, you’ll miss the train.}}' },
      { h: 'Second conditional', b: 'Situazione immaginaria o improbabile ORA.\n\n**If + past simple, would + verbo base**\n> {{en-GB|If I won the lottery, I would buy a house.}}\n> {{en-GB|If I were you, I would apply.}}\n\nCon *be* si dice comunemente **were** per tutte le persone: *If I were you…* (also *If I was* nel parlato).\n\nIl passato qui NON indica passato: indica **distanza dalla realtà**. Confronta: first = «può succedere», second = «è poco probabile o irreale».' },
      { h: 'Esempio guidato', b: 'Scegli: *«If I (have) more time, I (learn) Japanese properly.»* → il tempo non c’è, è ipotetico → second conditional: **If I had more time, I would learn Japanese properly.**\n\nPer la stessa persona con un vero piano: *«If I finish early tonight, I (study) Japanese.»* → possibile → first: **If I finish early tonight, I’ll study Japanese.**\n\nControllo: chiediti «È realistico?» Sì → first. Irrealistico/immaginario → second.' },
      { h: 'Errori comuni', b: '- *If it will rain, we stay.* → {{en-GB|If it rains, we’ll stay.}}\n- *When I will see him, I tell him.* → {{en-GB|When I see him, I’ll tell him.}}\n- *If I would have money, I would buy it.* → {{en-GB|If I had money, I would buy it.}} (niente would nella parte con if)\n- *I go to see a film tonight* come progetto → {{en-GB|I’m going to see a film tonight.}} / {{en-GB|I’m seeing a film tonight.}}' },
      { h: 'Riepilogo', b: '- will = decisione, previsione, promessa. going to = intenzione/indizi. continuous = accordo preso.\n- First: if + present, will. Second: if + past, would.\n- Mai will/would subito dopo if.\n- Dopo when, as soon as, before, unless: present simple.' }
    ],
    exercises: [
      mc('Look at the sky! It ___ rain.', ['will', 'is going to', 'rains', 'would'], 1, 'Indizi visibili → going to.'),
      mc('«The phone is ringing.» — «I ___ get it.»', ['’ll', 'am going to', 'am getting', 'would'], 0, 'Decisione al momento → will.'),
      fill('Complete: If it ___ (rain), we’ll stay at home.', ['rains'], 'Dopo if: present simple.'),
      fill('Complete: If I ___ (be) you, I would apply.', ['were', 'was'], 'Second conditional con be: were/was.'),
      mc('I’ll call you when I ___ home.', ['will get', 'get', 'would get', 'am getting to'], 1, 'Dopo when: present simple.'),
      order('Metti in ordine', ['If', 'I', 'won', 'the', 'lottery', 'I', 'would', 'travel', 'the', 'world'], 'If + past simple, would + base.'),
      mc('Which sentence is a second conditional?', ['If I see her, I’ll tell her.', 'If I saw her, I would tell her.', 'If I had seen her, I would have told her.', 'If I see her, I told her.'], 1)
    ],
    test: [
      mc('Which is correct?', ['If I will see him, I’ll tell him.', 'If I see him, I’ll tell him.', 'If I would see him, I tell him.', 'If I saw him, I’ll tell him.'], 1),
      mc('I’m ___ the dentist at 4 o’clock tomorrow. It’s already arranged.', ['going see', 'seeing', 'will see', 'to see'], 1),
      fill('Complete: If she ___ (have) more money, she would travel more.', ['had'], 'Second conditional.'),
      mc('Unless you ___, you’ll miss the bus.', ['don’t hurry', 'hurry', 'won’t hurry', 'would hurry'], 1, 'Unless = if not: quindi niente negazione e present simple.')
    ],
    cards: [
      card('c1', 'a meno che', 'unless', 'Unless it rains, we’ll go.'), card('c2', 'appena', 'as soon as', 'Call me as soon as you arrive.'), card('c3', 'promettere', 'to promise', 'I promise I’ll be there.'), card('c4', 'previsione', 'forecast', 'The forecast says rain.'),
      card('c5', 'vincere (lotteria)', 'to win', 'If I won, I’d travel.'), card('c6', 'progetto', 'plan', 'We have a plan for the weekend.'), card('c7', 'perdere il treno', 'to miss the train', 'Hurry or you’ll miss the train.'), card('c8', 'intenzione', 'intention', 'My intention is to learn.')
    ],
    listening: [{ id: 'l1', lang: 'en-AU', title: 'Weekend plans', text: 'Right, so if the weather’s good on Saturday, we’ll go to the beach. If it rains, we’re going to visit the museum — I’ve already bought the tickets. I’m meeting Lucy at ten, so I’ll text you when I’m on my way. If I had a car, I’d pick you up, but I don’t, sorry!',
      qs: [{ q: 'What will they do if it’s sunny?', o: ['Visit the museum', 'Go to the beach', 'Stay home', 'Meet Lucy'], a: 1, kind: 'explicit' }, { q: 'Why does the speaker say «I’d pick you up»?', o: ['They have a car', 'They don’t have a car but imagine it', 'They will have a car tomorrow', 'They hate driving'], a: 1, kind: 'implicit' }, { q: 'When will the speaker text?', o: ['When Lucy arrives', 'On the way', 'Tomorrow', 'After the museum'], a: 1, kind: 'explicit' }] }],
    dictation: [{ text: 'If it rains, we’ll visit the museum.', lang: 'en-AU' }, { text: 'I’ll text you when I’m on my way.', lang: 'en-GB' }, { text: 'If I had more time, I would learn Japanese.', lang: 'en-US' }],
    shadowing: [{ text: 'If the weather’s good, we’ll go to the beach.', lang: 'en-AU', tip: 'Contrazioni: weather’s, we’ll. Ritmo veloce.' }, { text: 'I’ll text you when I’m on my way.', lang: 'en-GB', tip: 'Linking: «text you» → «textchu».' }, { text: 'If I won the lottery, I’d buy a small house.', lang: 'en-US', tip: 'Flapping americano del /t/ in «lottery».' }],
    speaking: [{ prompt: 'Describe your plans for next weekend, with one condition (if …).', model: 'I’m going to visit my cousin on Saturday. If the weather is nice, we’ll go for a walk. If it rains, we’ll watch a film.' }, { prompt: 'What would you do if you had a free year? Give three ideas.', model: 'If I had a free year, I would travel through Japan. I would also study full-time and I would learn to cook properly.' }]
  });

  C.addTopic({
    id: 'eng-l1-connected-speech', subject: 'eng', stage: 'L1', title: 'Parlato connesso: capire l’inglese veloce', minutes: 20, prereq: ['eng-l1-modals'],
    summary: 'Forme deboli, legami tra parole, riduzioni e ritmo dell’inglese naturale.',
    objectives: ['Riconoscere forme deboli e riduzioni (gonna, wanna, hafta)', 'Sentire i legami (linking) e le parole omesse', 'Usare strategie di ascolto senza trascrizione'],
    pages: [
      { h: 'Obiettivo', b: 'Spesso non capisci il parlato non perché non conosci le parole, ma perché **non suonano come le hai imparate**.\n\nQui ti alleni a riconoscere ciò che succede nel parlato veloce: parole che si fondono, vocali che si indeboliscono, ritmo basato sugli accenti.' },
      { h: 'Il ritmo: stress-timed', b: 'L’inglese è «stress-timed»: le sillabe accentate arrivano a intervalli regolari e le altre si comprimono.\n\n> {{en-GB|I WANT to BUY a NEW CAR.}}\n\nLe parole di contenuto (nomi, verbi, aggettivi, avverbi) sono accentate. Le parole funzionali (to, a, the, of, and, can, was) sono deboli: *to* → /tə/, *a* → /ə/, *of* → /əv/, *and* → /ən/.\n\nIn italiano ogni sillaba ha quasi la stessa durata: per questo l’inglese sembra «mangiare» le parole.' },
      { h: 'Linking e riduzioni', b: '**Legami**: consonante + vocale si fondono. {{en-GB|Pick it up.}} → «pi-ki-tup». {{en-GB|What are you doing?}} → «whatcha doing?»\n\n**Riduzioni comuni nel parlato informale** (non da scrivere in testi formali):\n- going to → **gonna**\n- want to → **wanna**; have to → **hafta**\n- give me → **gimme**; kind of → **kinda**\n- I would have → **I’d’ve / I would’ve**\n- do you → **d’you** ({{en-GB|D’you want some?}})\n\n**Elisione**: la /t/ e la /d/ finali spesso scompaiono prima di consonante: {{en-GB|Next week}} → «nex week».' },
      { h: 'Strategie di ascolto', b: 'Per allenare l’orecchio senza leggere:\n\n1. **Primo ascolto**: solo il senso generale (chi, dove, perché). Non fermarti sulle parole sconosciute.\n2. **Secondo ascolto**: cerca i dettagli richiesti dalle domande.\n3. **Terzo ascolto con trascrizione**: confronta con ciò che hai sentito e segna dove le parole si erano fuse.\n4. **Shadowing**: ripeti ad alta voce a mezza frase di distanza, copiando ritmo e intonazione.\n\nNon trascrivere tutto: il B2 richiede di capire **il messaggio**, anche con parole mancanti.' },
      { h: 'Esempio guidato', b: 'Ascolta: {{en-US|I’m gonna grab a coffee. D’you wanna come?}}\n\nCosa senti? «Ahm gonna grab a coffee. Joo wanna come?»\n\nAnalisi:\n- *I’m gonna* = I am going to\n- *D’you* = do you (la /d/ + y fondono in /dʒ/)\n- *wanna* = want to\n\nRiscrittura standard: *I’m going to grab a coffee. Do you want to come?*\n\nControllo: se riesci a ripetere la versione veloce con lo stesso ritmo, stai imparando a «pensare» alla velocità giusta.' },
      { h: 'Errori comuni', b: '- Tentare di sentire ogni parola: funziona solo con il parlato lento. Accetta di perdere le parole funzionali.\n- Scrivere «gonna» o «wanna» in un testo formale o in un esame scritto: è parlato.\n- Pronunciare ogni parola con accento pieno: suona robotico e rende più difficile anche capire.\n- Ascoltare sempre con i sottotitoli italiani: toglie l’allenamento dell’orecchio.' },
      { h: 'Riepilogo', b: '- Ritmo: parole di contenuto accentate, parole funzionali deboli.\n- Linking: le parole si fondono; non contare gli spazi.\n- Riduzioni: gonna, wanna, hafta, d’you, I’d’ve — solo parlato.\n- Ascolta in 3 passaggi, poi shadowing.' }
    ],
    exercises: [
      mc('«I’m gonna go» corresponds to…', ['I am going to go', 'I am gone', 'I got to go', 'I’m going to gone'], 0),
      mc('Which words are usually STRESSED in a sentence?', ['Prepositions and articles', 'Nouns and main verbs', 'Only the last word', 'Pronouns'], 1, 'Parole di contenuto.'),
      listen('I wanna buy a new phone.', 'en-US', 'What did you hear?', ['I want to buy a new phone.', 'I won’t buy a new phone.', 'I want a boy phone.', 'I went to buy a phone.'], 0, 'wanna = want to.'),
      listen('What are you doing tonight?', 'en-GB', 'What did the speaker ask?', ['What are you doing tonight?', 'Where are you going tonight?', 'What have you done tonight?', 'Who are you meeting tonight?'], 0, '«Whatcha doing» è la riduzione di What are you doing.'),
      mc('«D’you want some?» means…', ['Do you want some?', 'Did you want some?', 'Don’t you want some?', 'Would you want some?'], 0),
      mc('In the sentence «She went to the shop», the word «to» is normally…', ['strongly stressed', 'weak /tə/', 'silent in all cases', 'pronounced «two»'], 1),
      mc('Which strategy is best for the FIRST listening of an unknown audio?', ['Write every word', 'Understand the general idea', 'Translate each sentence', 'Stop at each unknown word'], 1)
    ],
    test: [
      listen('Give me a minute, I’m kinda busy.', 'en-US', 'Which is the standard form?', ['Give me a minute, I’m kind of busy.', 'Gave me a minute, I’m kind busy.', 'Give her a minute, I’m kind of busy.', 'Give me a minute, I’m not busy.'], 0, 'gimme / kinda = give me / kind of.'),
      mc('«Next week» in fast speech may sound like…', ['«nex week»', '«next weak»', '«neck sweek»', '«next ween»'], 0, 'Elisione della /t/ finale.'),
      mc('Which sentence should you NOT write in a formal exam essay?', ['I intend to study.', 'I’m gonna study.', 'I plan to study.', 'I will study.'], 1),
      mc('Why does English seem fast?', ['Because every syllable is long', 'Because unstressed syllables are shortened', 'Because there are no stresses', 'Because it has no pauses'], 1)
    ],
    cards: [
      card('c1', 'ritmo', 'rhythm', 'The rhythm of English is based on stress.'), card('c2', 'accento (sillaba)', 'stress', 'The stress is on the first syllable.'), card('c3', 'debole', 'weak', 'The vowel is weak.'), card('c4', 'sottotitoli', 'subtitles', 'Watch without subtitles.'),
      card('c5', 'trascrizione', 'transcript', 'Check the transcript afterwards.'), card('c6', 'afferrare (capire)', 'to catch', 'I didn’t catch what he said.'), card('c7', 'riprodurre/ripetere', 'to repeat', 'Please repeat that.'), card('c8', 'fluente', 'fluent', 'She is fluent in English.')
    ],
    listening: [{ id: 'l1', lang: 'en-US', title: 'In a rush', text: 'Hey, I’m gonna be a bit late. I’ve gotta pick up my sister first. D’you wanna go ahead and order? I’ll have the pasta. And could you grab me a water? I’ll see you in, like, twenty minutes. Thanks a lot!',
      qs: [{ q: 'Why will the speaker be late?', o: ['Traffic', 'To pick up her sister', 'Her phone is broken', 'She is ordering food'], a: 1, kind: 'explicit' }, { q: 'What does the speaker want the listener to do?', o: ['Wait outside', 'Order food and a water', 'Call her sister', 'Cancel the table'], a: 1, kind: 'explicit' }, { q: 'How informal is the speech?', o: ['Very formal', 'Informal, between friends', 'Neutral business', 'Official announcement'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'I’m gonna be a bit late.', lang: 'en-US' }, { text: 'Do you want to go ahead and order?', lang: 'en-GB' }, { text: 'Could you grab me a water?', lang: 'en-AU' }],
    shadowing: [{ text: 'I’m gonna grab a coffee. D’you wanna come?', lang: 'en-US', tip: 'Fondi: «gonna», «d’you», «wanna». Non scandire.' }, { text: 'What are you doing this weekend?', lang: 'en-GB', tip: '«Whatcha doing» — le parole funzionali si comprimono.' }, { text: 'Pick it up and put it on the table.', lang: 'en-AU', tip: 'Linking: pi-ki-tup.' }],
    speaking: [{ prompt: 'Leave a short voice message to a friend: you’re late, explain why, and say what they should do.', model: 'Hi Sam, it’s me. I’m running a bit late — the bus broke down. Could you order for me? I’ll have the soup. See you in about twenty minutes.' }, { prompt: 'Explain in 4 sentences what makes fast English hard to understand.', model: 'In fast English, unstressed words are very short. Words join together, so it’s hard to hear the spaces. Some phrases, like «gonna», are reduced. The best solution is to listen a lot and repeat the sentences aloud.' }]
  });
})(window.ST = window.ST || {});
