/* Inglese — ampliamento stage L1 (B1 solido). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'eng', stage: 'L1', minutes: 20, prereq: ['eng-l0-past'] }, o));

  T({ id: 'eng-l1-gerund-infinitive', title: 'Gerundio e infinito dopo i verbi', summary: 'Verb + -ing, verb + to, e i verbi che cambiano significato.',
    objectives: ['Scegliere tra -ing e to + infinito dopo un verbo', 'Riconoscere i verbi con cambio di significato', 'Usare l’-ing dopo le preposizioni'],
    pages: [
      { h: 'Obiettivo', b: 'Dopo molti verbi inglesi serve la forma **-ing**, dopo altri **to + verbo**. Non esiste una regola unica: si impara per gruppi frequenti. Obiettivo: usarli con sicurezza nelle situazioni di tutti i giorni.' },
      { h: 'Verbi + -ing', b: 'Gruppi comuni:\n- piacere/non piacere: **enjoy, like, love, hate, mind, can’t stand**\n- smettere/continuare: **stop, finish, keep, give up, carry on**\n- evitare/rischiare: **avoid, risk, suggest, admit, deny, imagine, consider**\n\n> {{en-GB|I enjoy cooking.}} / {{en-GB|She finished writing the report.}} / {{en-GB|Would you mind opening the window?}}\n\nDopo una **preposizione** si usa sempre -ing: {{en-GB|I’m interested in learning Japanese.}} / {{en-GB|Thanks for helping me.}} / {{en-GB|Before leaving, call me.}}' },
      { h: 'Verbi + to + infinito', b: 'Gruppi comuni:\n- volontà/progetti: **want, need, hope, plan, decide, expect, wish, would like**\n- promesse/rifiuti: **promise, offer, refuse, agree, manage, fail**\n- **learn, afford, seem, appear, pretend**\n\n> {{en-GB|I decided to move.}} / {{en-GB|She wants to learn Japanese.}} / {{en-GB|We can’t afford to buy it.}}\n\nCon un oggetto: **want/ask/tell/advise/allow + oggetto + to**: {{en-GB|She asked me to wait.}} / {{en-GB|He allowed us to leave.}}' },
      { h: 'Verbi con entrambe le forme', b: '- **like / love / hate / prefer**: poca differenza; con **would** si usa to: {{en-GB|I’d like to go.}}\n- **begin / start / continue**: stesso significato.\n- **remember / forget / stop / try** cambiano:\n  - {{en-GB|I remember locking the door.}} (ricordo di averlo fatto) / {{en-GB|Remember to lock the door.}} (non dimenticare di farlo)\n  - {{en-GB|He stopped smoking.}} (smise) / {{en-GB|He stopped to smoke.}} (si fermò per fumare)\n  - {{en-GB|Try restarting it.}} (prova come esperimento) / {{en-GB|I tried to open it.}} (ho cercato di)' },
      { h: 'Esempio guidato', b: 'Completa: *I decided ___ (move) to Berlin. I don’t mind ___ (live) abroad, and I’m looking forward to ___ (learn) German. I hope ___ (find) a job soon.*\n\n- decide **to move**;\n- don’t mind **living**;\n- look forward **to learning** (qui *to* è preposizione → -ing);\n- hope **to find**.\n\nControllo: dopo preposizione sempre -ing; dopo decide/hope to + infinito.' },
      { h: 'Errori comuni', b: '- *I enjoy to read* → {{en-GB|I enjoy reading.}}\n- *I want that you come* → {{en-GB|I want you to come.}}\n- *She suggested to go* → {{en-GB|She suggested going.}}\n- *I look forward to see you* → {{en-GB|to seeing you.}}\n- *I’m used to get up early* → {{en-GB|I’m used to getting up early.}}\n- *Stop to talk!* (smetti) → {{en-GB|Stop talking!}}' },
      { h: 'Riepilogo', b: '- -ing: enjoy, finish, mind, avoid, suggest, keep; dopo preposizione.\n- to: want, need, hope, decide, plan, promise, manage.\n- Cambio: remember/stop/try.\n- want/ask/tell + oggetto + to.' }
    ],
    exercises: [
      mc('I enjoy ___ in the evening.', ['to read', 'reading', 'read', 'to reading'], 1),
      mc('She decided ___ a new job.', ['looking for', 'to look for', 'look for', 'for looking'], 1),
      mc('I’m interested ___ Japanese.', ['to learn', 'in learning', 'in learn', 'learning'], 1),
      mc('Remember ___ the door when you leave.', ['locking', 'to lock', 'lock', 'to locking'], 1),
      mc('He stopped ___ ten years ago.', ['to smoke', 'smoking', 'smoke', 'smoked'], 1),
      mc('She asked me ___ her.', ['help', 'helping', 'to help', 'for help'], 2),
      fill('Complete: Thanks for ___ (come).', ['coming'], 'Dopo preposizione: -ing.')
    ],
    test: [
      mc('Which is correct?', ['I look forward to see you.', 'I look forward to seeing you.', 'I look forward see you.', 'I look forward seeing you.'], 1),
      mc('We can’t afford ___ a new car.', ['buying', 'to buy', 'buy', 'for buying'], 1),
      mc('I remember ___ him last year. (ricordo di averlo incontrato)', ['to meet', 'meeting', 'meet', 'met'], 1),
      mc('She suggested ___ to the cinema.', ['to go', 'going', 'go', 'to going'], 1)
    ],
    cards: [card('c1', 'evitare', 'to avoid', 'Avoid making noise.'), card('c2', 'riuscire a', 'to manage to', 'I managed to finish.'), card('c3', 'permettersi', 'to afford', 'I can’t afford it.'), card('c4', 'rinunciare a', 'to give up', 'Don’t give up!'),
      card('c5', 'fingere', 'to pretend', 'He pretended to sleep.'), card('c6', 'accettare', 'to agree', 'They agreed to help.'), card('c7', 'rifiutare', 'to refuse', 'She refused to pay.'), card('c8', 'non vedere l’ora', 'to look forward to', 'I look forward to meeting you.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A big decision', text: 'I’ve decided to move abroad. I don’t mind living far from home, and I’m looking forward to learning a new language. My parents suggested waiting a year, but I can’t afford to wait. I managed to save some money, and I’ve promised to call every Sunday. I just hope to find a good job.',
      qs: [{ q: 'What has the speaker decided?', o: ['To move abroad', 'To wait a year', 'To change job', 'To study at home'], a: 0, kind: 'explicit' }, { q: 'What did the parents suggest?', o: ['Waiting a year', 'Moving now', 'Calling daily', 'Finding a job'], a: 0, kind: 'explicit' }, { q: 'What can we infer about the speaker’s attitude?', o: ['Determined but a bit anxious about a job', 'Completely carefree', 'Unhappy about leaving', 'Uninterested'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'I enjoy learning new languages.', lang: 'en-GB' }, { text: 'She decided to move abroad.', lang: 'en-US' }, { text: 'Thanks for helping me.', lang: 'en-AU' }],
    shadowing: [{ text: 'I’m looking forward to meeting your family.', lang: 'en-GB', tip: 'Looking forward to: tre parole in un blocco.' }, { text: 'I decided to move, and I hope to find a job.', lang: 'en-US', tip: 'To debole: /tə/.' }, { text: 'She suggested going to the cinema.', lang: 'en-AU', tip: 'Suggested going: ritmo veloce.' }],
    speaking: [{ prompt: 'Talk about your plans for next year with decide, hope, plan, look forward to.', model: 'I’ve decided to study harder. I plan to take an exam in June, and I hope to travel in the summer. I’m looking forward to meeting new people.' }, { prompt: 'Say three things you enjoy, mind or can’t stand.', model: 'I enjoy walking in the evening. I don’t mind cooking. I can’t stand waiting in queues.' }] });

  T({ id: 'eng-l1-present-perfect-continuous', title: 'Present perfect continuous e durata', summary: 'have been doing: attività in corso o appena conclusa, e confronto con il present perfect.',
    objectives: ['Formare e usare il present perfect continuous', 'Distinguere risultato (perfect) e attività (continuous)', 'Parlare di durata con for e since'],
    pages: [
      { h: 'Obiettivo', b: 'Per dire **da quanto tempo** fai qualcosa o spiegare **perché** sei stanco/sporco/bagnato, l’inglese usa il **present perfect continuous**. Lo impari confrontandolo con il present perfect semplice.' },
      { h: 'La forma', b: '**have/has + been + verbo-ing**\n- {{en-GB|I’ve been studying for two hours.}}\n- {{en-GB|She’s been working here since 2020.}}\n- Negativa: {{en-GB|I haven’t been sleeping well.}}\n- Domanda: {{en-GB|How long have you been waiting?}}\n\nUso 1: **attività iniziata nel passato e ancora in corso** (con for/since).\nUso 2: **attività appena conclusa, con effetti visibili**: {{en-GB|Why are you wet? — I’ve been running in the rain.}}' },
      { h: 'Perfect semplice o continuous?', b: '- **Continuous** → accento sull’**attività** e sulla **durata**: {{en-GB|I’ve been reading all afternoon.}}\n- **Semplice** → accento sul **risultato** o sul **numero**: {{en-GB|I’ve read three chapters.}}\n\nVerbi di stato (know, like, be, have…) non si usano in continuous: {{en-GB|I’ve known her for years.}} (non *been knowing*).\n\nCon *live* e *work* la differenza è minima: {{en-GB|I’ve lived / I’ve been living here for ten years.}}' },
      { h: 'How long, for, since, recently', b: '- **How long** + continuous: {{en-GB|How long have you been learning English?}}\n- **for** + durata; **since** + inizio.\n- **recently / lately** indicano un periodo vicino: {{en-GB|I’ve been feeling tired lately.}}\n- **all day / all week**: {{en-GB|He’s been working all week.}}\n\nAttenzione: **how many** chiede una quantità → perfect semplice: {{en-GB|How many emails have you written?}}' },
      { h: 'Esempio guidato', b: 'Racconta: *Sei stanco perché hai lavorato tutto il giorno. Hai finito due relazioni. Studi inglese da due anni.*\n\n- **I’m tired because I’ve been working all day.**\n- **I’ve finished two reports.** (risultato)\n- **I’ve been studying English for two years.** (durata)\n\nControllo: attività e durata → continuous; risultato e numero → semplice.' },
      { h: 'Errori comuni', b: '- *I’m studying English since two years* → {{en-GB|I’ve been studying English for two years.}}\n- *I have been knowing* → {{en-GB|I’ve known.}}\n- *How long are you here?* → {{en-GB|How long have you been here?}}\n- *I’ve been reading three books* → {{en-GB|I’ve read three books.}}\n- Confondere *since* e *for*.' },
      { h: 'Riepilogo', b: '- have/has + been + -ing.\n- In corso da un certo tempo, o appena finita con effetti visibili.\n- Continuous = attività/durata; semplice = risultato/quantità.\n- Verbi di stato: perfect semplice.' }
    ],
    exercises: [
      mc('I ___ for you for an hour!', ['wait', 'am waiting', 'have been waiting', 'have waited'], 2),
      mc('How long ___ you ___ English?', ['are / learning', 'have / been learning', 'do / learn', 'did / learn'], 1),
      mc('She’s tired because she ___ all night.', ['works', 'has worked', 'has been working', 'is working'], 2),
      mc('I ___ three emails this morning.', ['have been writing', 'have written', 'am writing', 'write'], 1, 'Numero → perfect semplice.'),
      fill('Complete: They’ve been living here ___ 2018.', ['since'], 'Punto di inizio: since.'),
      mc('Which verb cannot be used in the continuous?', ['to run', 'to know', 'to cook', 'to read'], 1),
      mc('Why is your hair wet? — I ___ in the rain.', ['have been walking', 'walked', 'am walking', 'walk'], 0)
    ],
    test: [
      mc('We ___ here since seven o’clock.', ['are waiting', 'have been waiting', 'wait', 'waited'], 1),
      mc('How many pages ___ you ___?', ['have / been reading', 'have / read', 'are / reading', 'do / read'], 1),
      fill('Complete: I’ve been feeling tired ___ (recentemente).', ['lately', 'recently'], 'lately/recently.'),
      mc('Which sentence is correct?', ['I have been knowing him for years.', 'I have known him for years.', 'I know him since years.', 'I am knowing him for years.'], 1)
    ],
    cards: [card('c1', 'ultimamente', 'lately', 'I’ve been busy lately.'), card('c2', 'recentemente', 'recently', 'I’ve recently moved.'), card('c3', 'tutto il giorno', 'all day', 'I’ve been working all day.'), card('c4', 'esausto', 'worn out', 'I’m worn out.'),
      card('c5', 'aspettare', 'to wait', 'I’ve been waiting for an hour.'), card('c6', 'allenarsi', 'to train', 'I’ve been training for months.'), card('c7', 'bagnato', 'soaked', 'I’m soaked.'), card('c8', 'scadenza', 'deadline', 'I’ve been working on a deadline.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'After a long day', text: 'Sorry I’m late. I’ve been waiting for the bus for forty minutes, and I’ve been running to get here. I’ve been working on this project since eight this morning, and I’ve finished two reports already. I’ve been feeling a bit dizzy lately, so I think I’ll sleep early tonight.',
      qs: [{ q: 'How long did the speaker wait for the bus?', o: ['Forty minutes', 'An hour', 'Twenty minutes', 'Two hours'], a: 0, kind: 'explicit' }, { q: 'How many reports has the speaker finished?', o: ['Two', 'Three', 'One', 'None'], a: 0, kind: 'explicit' }, { q: 'Why will the speaker sleep early?', o: ['Feeling dizzy and tired', 'To catch a bus', 'To finish a report', 'A party tomorrow'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'I’ve been waiting for forty minutes.', lang: 'en-GB' }, { text: 'How long have you been learning English?', lang: 'en-US' }, { text: 'She’s been working here since 2020.', lang: 'en-AU' }],
    shadowing: [{ text: 'I’ve been working on this since eight this morning.', lang: 'en-US', tip: 'I’ve been working: tre parole legate.' }, { text: 'How long have you been waiting?', lang: 'en-GB', tip: 'Have you been: riduzione in /həvjubɪn/.' }, { text: 'She’s been feeling tired lately.', lang: 'en-AU', tip: 'She’s been: /ʃiːz bɪn/.' }],
    speaking: [{ prompt: 'Say what you have been doing this week and for how long.', model: 'I’ve been studying English for two years. This week I’ve been working late, and I’ve been training every evening. I’ve read two chapters of my book.' }, { prompt: 'Explain why you are tired, wet or hungry today.', model: 'I’m tired because I’ve been working since six. I haven’t eaten anything, so I’m hungry. I’ve been walking in the rain, so I’m wet.' }] });

  T({ id: 'eng-l1-phrasal-everyday', title: 'Phrasal verbs di uso quotidiano', summary: 'I phrasal verbs più frequenti a livello B1, per temi.',
    objectives: ['Capire e usare 25 phrasal verbs frequenti', 'Riconoscere separabili e inseparabili', 'Impararli per contesto e non per traduzione'],
    pages: [
      { h: 'Obiettivo', b: 'I phrasal verbs (verbo + particella) sono onnipresenti nel parlato. Non si indovinano dalle parti: si imparano come **blocchi**. Qui ne vedi 25 tra i più frequenti, divisi per situazione.' },
      { h: 'Routine e casa', b: '- **get up** (alzarsi), **wake up** (svegliarsi), **go out** (uscire), **come back** (tornare)\n- **turn on / turn off** (accendere/spegnere), **switch off**\n- **pick up** (prendere, andare a prendere), **put away** (riordinare), **throw away** (buttare)\n- **clean up** (pulire/riordinare)\n\n> {{en-GB|I get up at seven and turn on the radio.}}\n> {{en-GB|Please put your toys away.}}' },
      { h: 'Lavoro e studio', b: '- **fill in / fill out** (compilare), **look up** (cercare in un dizionario), **find out** (scoprire), **work out** (calcolare/risolvere)\n- **hand in** (consegnare), **catch up** (mettersi in pari), **take on** (assumere un incarico)\n- **carry on** (continuare), **give up** (smettere)\n\n> {{en-GB|Look up the word in the dictionary.}}\n> {{en-GB|I need to catch up on my emails.}}' },
      { h: 'Viaggi e relazioni', b: '- **set off** (partire), **check in / check out** (registrarsi/lasciare l’hotel), **take off** (decollare), **get on / get off** (salire/scendere)\n- **get along with** (andare d’accordo), **fall out with** (litigare), **make up** (fare pace), **grow up** (crescere)\n- **look after** (accudire), **look forward to** (non vedere l’ora)\n\n> {{en-GB|We set off at six and checked in at noon.}}' },
      { h: 'Separabili e inseparabili', b: 'Con un oggetto, alcuni phrasal verbs sono **separabili**: {{en-GB|turn the light off}} / {{en-GB|turn off the light}}. Con **pronome** si separa sempre: {{en-GB|turn it off}} (non *turn off it*).\n\nI phrasal verbs con **tre parti** o molti preposizionali sono inseparabili: {{en-GB|look after the baby}}, {{en-GB|get along with him}}, {{en-GB|look forward to it}}.\n\nSuggerimento: impara sempre l’esempio completo, così memorizzi anche la costruzione.' },
      { h: 'Esempio guidato', b: 'Trasforma in una storia breve usando phrasal verbs: *Mi sono alzato presto, ho spento la sveglia, sono partito alle sei, mi sono registrato in hotel e ho scoperto che il mio amico aveva fatto pace con la sorella.*\n\n→ **I got up early, turned off the alarm, set off at six, checked in at the hotel and found out that my friend had made up with his sister.**\n\nControllo: ho separato quando c’era un pronome?' },
      { h: 'Errori comuni', b: '- *turn off it* → {{en-GB|turn it off.}}\n- *look up it* → {{en-GB|look it up.}}\n- *I look forward to see you* → {{en-GB|seeing you.}}\n- *get on the bus / get off the bus* ≠ *get in/out of a car*.\n- Tradurre parola per parola: *give up* non è «dare su».' },
      { h: 'Riepilogo', b: '- 25 phrasal verbs di base per tema.\n- Separabili: pronome in mezzo.\n- Imparali in frasi complete.\n- Rivedi con le carte dopo 1, 3, 7, 14, 30 giorni.' }
    ],
    exercises: [
      mc('Please ___ the light. It’s too bright.', ['turn off', 'turn in', 'turn at', 'turn to'], 0),
      mc('I didn’t know this word, so I ___ it ___.', ['looked / up', 'looked / at', 'put / on', 'took / in'], 0),
      mc('We ___ at six and arrived at noon.', ['set off', 'set in', 'set on', 'set up'], 0),
      mc('Which is correct?', ['I turned off it.', 'I turned it off.', 'I turned off the it.', 'I off turned it.'], 1),
      mc('She doesn’t ___ her sister: they argue all the time.', ['get along with', 'get on to', 'look after', 'catch up'], 0),
      fill('Complete: Please fill ___ this form.', ['in', 'out'], 'fill in / fill out.'),
      mc('I need to ___ on my emails after the holiday.', ['catch up', 'give up', 'set up', 'put away'], 0)
    ],
    test: [
      mc('Which means «scoprire»?', ['find out', 'find up', 'fill in', 'look after'], 0),
      mc('The plane ___ at ten o’clock.', ['took off', 'took in', 'put off', 'set up'], 0),
      mc('Which sentence is right?', ['Look after them.', 'Look them after.', 'Look after it them.', 'After look them.'], 0),
      mc('«Make up» means…', ['to become friends again after an argument', 'to stand up', 'to wake up', 'to turn off'], 0)
    ],
    cards: [card('c1', 'accendere', 'turn on', 'Turn on the TV.'), card('c2', 'spegnere', 'turn off', 'Turn off the light.'), card('c3', 'consegnare', 'hand in', 'Hand in your homework.'), card('c4', 'mettersi in pari', 'catch up', 'I need to catch up.'),
      card('c5', 'litigare con', 'fall out with', 'She fell out with her boss.'), card('c6', 'fare pace', 'make up', 'They made up.'), card('c7', 'registrarsi (hotel)', 'check in', 'We checked in at two.'), card('c8', 'cercare (nel dizionario)', 'look up', 'Look it up.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A busy morning', text: 'I got up late, so I had to rush. I turned off the alarm, put away my clothes, and set off for work. On the train I filled in a form and looked up a word in my dictionary. At the office I had to catch up on my emails and hand in a report. After work I’m going to pick up my sister and look after her dog.',
      qs: [{ q: 'Why did the speaker rush?', o: ['Got up late', 'Missed the bus', 'Was ill', 'Had a meeting'], a: 0, kind: 'explicit' }, { q: 'What did the speaker do on the train?', o: ['Filled in a form', 'Slept', 'Read a book', 'Called a friend'], a: 0, kind: 'explicit' }, { q: 'What will the speaker do after work?', o: ['Pick up their sister and look after her dog', 'Go to the gym', 'Work late', 'Go shopping'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'Turn off the light, please.', lang: 'en-GB' }, { text: 'I need to catch up on my emails.', lang: 'en-US' }, { text: 'We set off at six.', lang: 'en-AU' }],
    shadowing: [{ text: 'I got up late, so I had to rush.', lang: 'en-GB', tip: 'Got up: «gotup» legato.' }, { text: 'Turn it off and put it away.', lang: 'en-US', tip: 'Pronomi in mezzo: it deboli.' }, { text: 'She’s looking after her dog.', lang: 'en-AU', tip: 'Looking after: ritmo regolare.' }],
    speaking: [{ prompt: 'Describe your morning using five phrasal verbs.', model: 'I wake up at six, get up at six-fifteen, turn on the radio and set off at seven. I pick up a coffee on the way and carry on to work.' }, { prompt: 'Tell a short story about an argument and making up.', model: 'Last week I fell out with my brother about money. We didn’t talk for two days, but then we made up and went out for dinner.' }] });

  T({ id: 'eng-l1-smalltalk', title: 'Small talk e opinioni semplici', summary: 'Iniziare e mantenere una conversazione informale; esprimere gusti e opinioni.',
    objectives: ['Iniziare, mantenere e chiudere una conversazione informale', 'Esprimere gusti e opinioni con formule naturali', 'Reagire con interesse (reaction phrases)'],
    pages: [
      { h: 'Obiettivo', b: 'Il small talk è la conversazione leggera con colleghi, vicini, sconosciuti. È una competenza linguistica **e** sociale: non servono frasi complesse, ma formule naturali e reazioni che mostrano interesse.' },
      { h: 'Aprire e mantenere', b: '**Aprire**: {{en-GB|Hi, I don’t think we’ve met. I’m Marco.}} / {{en-GB|Nice weather today, isn’t it?}} / {{en-GB|How’s your day going?}}\n\n**Domande aperte** (non sì/no): {{en-GB|What do you do?}} / {{en-GB|How did you find the trip?}} / {{en-GB|What are you up to this weekend?}}\n\n**Ricambiare**: {{en-GB|And you?}} / {{en-GB|What about you?}}\n\n**Argomenti sicuri**: tempo, lavoro, viaggi, cibo, hobby, sport. Evita politica e soldi con sconosciuti.' },
      { h: 'Reazioni', b: 'Mostrare interesse tiene viva la conversazione:\n- sorpresa: {{en-GB|Really? / No way! / Wow, that’s amazing!}}\n- interesse: {{en-GB|That sounds interesting. / Tell me more.}}\n- empatia: {{en-GB|Oh no, I’m sorry to hear that. / That must be hard.}}\n- accordo: {{en-GB|Me too. / So do I. / Neither do I.}}\n\n**So / Neither**: {{en-GB|I love pizza. — So do I.}} / {{en-GB|I don’t like cold weather. — Neither do I.}}' },
      { h: 'Esprimere gusti e opinioni', b: '- Gusti: {{en-GB|I’m (really) into jazz.}} / {{en-GB|I’m not a big fan of crowds.}} / {{en-GB|I can’t stand loud music.}}\n- Opinione: {{en-GB|I think it’s great. / In my opinion… / I’d say…}}\n- Accordo/disaccordo (semplice): {{en-GB|I agree. / I’m not sure about that. / That’s a good point, but…}}\n- Preferenza: {{en-GB|I’d rather stay home than go out.}}\n\nUsa *I think* e *I’d say* per rendere un’opinione meno rigida.' },
      { h: 'Chiudere con garbo', b: 'Non lasciare la conversazione a metà:\n- {{en-GB|It was nice talking to you.}}\n- {{en-GB|I’d better get going. I have an early start tomorrow.}}\n- {{en-GB|Let’s keep in touch.}} / {{en-GB|See you around!}}\n- {{en-GB|Have a great weekend!}}\n\nRisposte tipiche: {{en-GB|You too! / Take care! / See you!}}' },
      { h: 'Esempio guidato', b: 'Una breve conversazione:\n\n- A: {{en-GB|Hi! Are you here for the conference?}}\n- B: {{en-GB|Yes, I’m Giulia. And you?}}\n- A: {{en-GB|Tom. What do you do, Giulia?}}\n- B: {{en-GB|I’m a designer. I’m really into typography. What about you?}}\n- A: {{en-GB|Cool! I’m an engineer. Well, it was nice talking to you.}}\n\nControllo: domanda aperta, ricambio, reazione, chiusura: ci sono tutte.' },
      { h: 'Errori comuni', b: '- Rispondere con una sola parola: *Yes.* — aggiungi un dettaglio.\n- Dire *I am agree* → {{en-GB|I agree.}}\n- *I like very much football* → {{en-GB|I like football very much / I’m really into football.}}\n- *Me too* dopo una negativa: usa *Neither do I*.\n- Fare domande troppo personali subito.' },
      { h: 'Riepilogo', b: '- Aprire con una domanda aperta, ricambiare, reagire.\n- So do I / Neither do I.\n- Gusti: into, fan, can’t stand; opinione: I think, I’d say.\n- Chiudere con garbo.' }
    ],
    exercises: [
      mc('I love sushi. — ___', ['So do I.', 'Neither do I.', 'So am I.', 'I don’t.'], 0),
      mc('I don’t like crowds. — ___', ['So do I.', 'Neither do I.', 'Me too.', 'Yes I do.'], 1),
      mc('Which is an open question?', ['Do you like your job?', 'What do you do in your free time?', 'Are you tired?', 'Is it cold?'], 1),
      mc('A polite way to end a chat:', ['Bye.', 'It was nice talking to you.', 'I’m leaving.', 'No more.'], 1),
      mc('«I’m not a big fan of football» means…', ['I don’t like it very much', 'I love it', 'I play it', 'I watch it daily'], 0),
      fill('Complete: I’d ___ stay home than go out.', ['rather'], 'would rather.'),
      mc('Which reaction shows surprise?', ['No way!', 'I see.', 'Maybe.', 'Okay.'], 0)
    ],
    test: [
      mc('She is a doctor. — ___ ?', ['Really? That sounds interesting.', 'Why?', 'Go away.', 'I am agree.'], 0),
      mc('I can’t swim. — ___', ['So can I.', 'Neither can I.', 'Neither do I.', 'So do I.'], 1),
      mc('Which sentence is correct?', ['I am agree with you.', 'I agree with you.', 'I agree to you.', 'I’m agree.'], 1),
      mc('«I’m really into jazz» means…', ['I really like jazz', 'I’m inside jazz', 'I hate jazz', 'I am a jazz teacher'], 0)
    ],
    cards: [card('c1', 'sono appassionato di', 'I’m into', 'I’m into photography.'), card('c2', 'non sopporto', 'I can’t stand', 'I can’t stand waiting.'), card('c3', 'piuttosto che', 'I’d rather', 'I’d rather walk.'), card('c4', 'stare in contatto', 'keep in touch', 'Let’s keep in touch.'),
      card('c5', 'devo andare', 'I’d better get going', 'I’d better get going.'), card('c6', 'che cosa fai?', 'What do you do?', 'What do you do for a living?'), card('c7', 'che ne dici?', 'What do you think?', 'What do you think about it?'), card('c8', 'non è affatto male', 'not bad at all', 'It’s not bad at all.')],
    listening: [{ id: 'l1', lang: 'en-AU', title: 'At a party', text: 'Hi, I don’t think we’ve met. I’m Jess. Oh, you’re a friend of Tom’s? Really? What do you do? A teacher! That sounds interesting. I’m not a big fan of crowds, to be honest. I’d rather stay at home than go out, but this party’s great. Anyway, it was nice talking to you. I’d better get going. Let’s keep in touch!',
      qs: [{ q: 'How does Jess know the other person?', o: ['Through Tom', 'From work', 'From school', 'She doesn’t'], a: 0, kind: 'explicit' }, { q: 'What does Jess say about crowds?', o: ['She isn’t a big fan', 'She loves them', 'She never goes out', 'She hates parties'], a: 0, kind: 'explicit' }, { q: 'How does Jess end the conversation?', o: ['Politely, suggesting to keep in touch', 'Rudely', 'She doesn’t', 'She asks for money'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'It was nice talking to you.', lang: 'en-GB' }, { text: 'I’m really into jazz. What about you?', lang: 'en-US' }, { text: 'I’d rather stay at home.', lang: 'en-AU' }],
    shadowing: [{ text: 'I don’t think we’ve met. I’m Jess.', lang: 'en-AU', tip: 'Tono amichevole, ritmo leggero.' }, { text: 'That sounds interesting. Tell me more.', lang: 'en-GB', tip: 'Intonazione ascendente su more.' }, { text: 'It was nice talking to you. Let’s keep in touch!', lang: 'en-US', tip: 'Chiusura calorosa.' }],
    speaking: [{ prompt: 'Start a conversation with a stranger at an event, ask two questions and react.', model: 'Hi, is this your first time here? I’m Marco. What do you do? Really? That sounds interesting. I’m into photography myself.' }, { prompt: 'Give your opinion about something you like and something you can’t stand.', model: 'I’m really into cooking, especially pasta. I think it’s relaxing. I can’t stand loud music in restaurants.' }] });

  T({ id: 'eng-l1-vocab-daily', title: 'Lessico quotidiano: casa, lavoro, viaggi, salute', summary: 'Vocabolario ad alta frequenza per quattro ambiti, con collocazioni.',
    objectives: ['Conoscere 40 parole/espressioni ad alta frequenza', 'Usarle in collocazioni naturali', 'Prepararsi a situazioni pratiche (medico, hotel, ufficio)'],
    pages: [
      { h: 'Obiettivo', b: 'Il lessico si impara meglio per **situazioni**. Qui raccogli 40 parole ed espressioni ad alta frequenza per quattro ambiti, con le collocazioni che le rendono naturali.' },
      { h: 'Casa', b: '- **rent** (affitto/affittare), **landlord**, **flat / apartment**, **neighbour**\n- **furniture**, **fridge**, **cooker**, **washing machine**\n- **move in / move out**, **pay the rent**, **do the housework**, **take out the rubbish**\n\n> {{en-GB|We pay the rent on the first of the month.}}\n> {{en-GB|My neighbour is very friendly.}}' },
      { h: 'Lavoro', b: '- **colleague, boss, manager, employee, customer**\n- **salary, contract, meeting, deadline, schedule**\n- **apply for a job, have an interview, work overtime, take a day off, be on holiday**\n\n> {{en-GB|I have a meeting at ten and a deadline on Friday.}}\n> {{en-GB|She works overtime every week.}}' },
      { h: 'Viaggi', b: '- **flight, ticket, passport, luggage, boarding gate, delay**\n- **book a room, check in, make a reservation, miss the train, get lost**\n- **single/return ticket, platform, timetable**\n\n> {{en-GB|Our flight was delayed by two hours.}}\n> {{en-GB|Can I book a table for two?}}' },
      { h: 'Salute', b: '- **headache, sore throat, fever, cough, cold, stomachache**\n- **prescription, medicine, appointment, pharmacy**\n- **I’ve got a… / My… hurts / I feel dizzy / I’m allergic to…**\n\n> {{en-GB|I’ve got a sore throat and a fever.}}\n> {{en-GB|I need to make an appointment with the doctor.}}\n\nAttenzione: *medicine* = medicina/farmaco; *drug* indica spesso sostanze illegali.' },
      { h: 'Esempio guidato', b: 'Descrivi un imprevisto in viaggio: *Il volo era in ritardo, ho perso la coincidenza, sono arrivato tardi in hotel e ho chiesto un’altra camera.*\n\n→ **My flight was delayed, so I missed my connection. I arrived late at the hotel and asked for a different room.**\n\nControllo: ho usato collocazioni (*miss a connection*, *book a room*) e non traduzioni letterali?' },
      { h: 'Errori comuni', b: '- *I have a cold* (raffreddore) ≠ *I am cold* (ho freddo).\n- *I have headache* → {{en-GB|I have a headache.}}\n- *make a trip* → {{en-GB|take / go on a trip.}}\n- *do a reservation* → {{en-GB|make a reservation.}}\n- *the luggages* → {{en-GB|the luggage.}}\n- *I lost the train* → {{en-GB|I missed the train.}}' },
      { h: 'Riepilogo', b: '- Casa, lavoro, viaggi, salute: 40 parole per situazione.\n- Collocazioni: pay the rent, miss the train, make a reservation.\n- Falsi amici: medicine/drug, cold/cold.\n- Ripassa con le carte.' }
    ],
    exercises: [
      mc('I need to ___ an appointment with the doctor.', ['do', 'make', 'take', 'have to'], 1),
      mc('We ___ the train because we were late.', ['lost', 'missed', 'left', 'forgot'], 1),
      mc('She works ___ every week; her boss pays extra.', ['overtime', 'over time', 'out time', 'extra work time'], 0),
      mc('My flat is small, but the ___ is cheap.', ['rent', 'rental house', 'renting', 'landing'], 0),
      mc('I’ve got a ___ throat and a fever.', ['sore', 'hurt', 'pain', 'bad'], 0),
      fill('Complete: Can I ___ a table for two?', ['book', 'reserve'], 'book a table.'),
      mc('Which noun is non-countable?', ['luggage', 'ticket', 'suitcase', 'passport'], 0)
    ],
    test: [
      mc('I have a ___ — I’m sneezing and coughing.', ['cold', 'cool', 'fever hot', 'cough cold'], 0),
      mc('Our flight was ___ by two hours.', ['delayed', 'late', 'lost', 'stopped'], 0),
      mc('I have a meeting at ten and a ___ on Friday.', ['deadline', 'dead end', 'finish line', 'limit time'], 0),
      mc('«Landlord» is…', ['the person who owns the flat you rent', 'a tenant', 'a neighbour', 'a boss'], 0)
    ],
    cards: [card('c1', 'affitto', 'rent', 'We pay the rent monthly.'), card('c2', 'proprietario di casa', 'landlord', 'The landlord lives upstairs.'), card('c3', 'scadenza', 'deadline', 'I have a deadline.'), card('c4', 'straordinari', 'overtime', 'She works overtime.'),
      card('c5', 'ritardo (volo)', 'delay', 'There’s a delay.'), card('c6', 'bagaglio', 'luggage', 'My luggage is heavy.'), card('c7', 'mal di gola', 'sore throat', 'I have a sore throat.'), card('c8', 'ricetta (medica)', 'prescription', 'I need a prescription.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'At the hotel', text: 'Good evening. I’ve got a reservation under Rossi. Our flight was delayed, so we arrived late. Could we check in, please? Also, my wife has a sore throat and a slight fever. Is there a pharmacy nearby? And what time is breakfast? We have an early train tomorrow, so we’d like to check out before eight.',
      qs: [{ q: 'Why did they arrive late?', o: ['Their flight was delayed', 'They missed the train', 'They got lost', 'The hotel was full'], a: 0, kind: 'explicit' }, { q: 'What is the problem with the speaker’s wife?', o: ['A sore throat and a fever', 'A headache', 'A stomachache', 'Nothing'], a: 0, kind: 'explicit' }, { q: 'What can we infer about tomorrow?', o: ['They need an early start', 'They will sleep late', 'They will stay another night', 'They will visit the doctor'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'I’ve got a reservation under Rossi.', lang: 'en-GB' }, { text: 'Our flight was delayed by two hours.', lang: 'en-US' }, { text: 'I need to make an appointment.', lang: 'en-AU' }],
    shadowing: [{ text: 'Is there a pharmacy nearby?', lang: 'en-GB', tip: 'Intonazione ascendente nella domanda.' }, { text: 'I’ve got a sore throat and a fever.', lang: 'en-US', tip: 'Stress su sore e fever.' }, { text: 'We’d like to check out before eight.', lang: 'en-AU', tip: 'Check out: stress sulla prima.' }],
    speaking: [{ prompt: 'At a pharmacy, describe your symptoms and ask for help.', model: 'Hello, I’ve got a sore throat and a cough, and I feel a bit dizzy. Could you recommend something? Do I need a prescription?' }, { prompt: 'Describe your flat or house to a friend using at least five of today’s words.', model: 'I rent a small flat. The landlord is nice, and the neighbours are friendly. The furniture is old, but the rent is cheap.' }] });
})(window.ST = window.ST || {});
