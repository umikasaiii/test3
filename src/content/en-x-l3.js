/* Inglese — ampliamento stage L3 (B2 iniziale). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'eng', stage: 'L3', minutes: 20, prereq: ['eng-l2-passive-relative'] }, o));

  T({ id: 'eng-l3-future-advanced', title: 'Futuro avanzato: future continuous e future perfect', summary: 'will be doing, will have done, be about to, be due to.',
    objectives: ['Usare future continuous e future perfect', 'Esprimere programmi e scadenze con be due to, be about to', 'Collegare eventi futuri con while, by the time, by'],
    pages: [
      { h: 'Obiettivo', b: 'Oltre a *will*, *going to* e il present continuous, a livello B2 si usano forme che indicano **un’azione in corso in un momento futuro** o **completata prima di un momento futuro**. Servono per piani, scadenze e previsioni precise.' },
      { h: 'Future continuous', b: '**will be + -ing** = azione in corso in un momento futuro.\n- {{en-GB|This time next week I’ll be lying on a beach.}}\n- {{en-GB|Don’t call at eight; I’ll be having dinner.}}\n\nUsato anche per chiedere con cortesia di programmi altrui: {{en-GB|Will you be using the car tonight?}}\n\nDifferenza: *I’ll call you* (decisione) vs *I’ll be calling clients all morning* (attività in corso).' },
      { h: 'Future perfect', b: '**will have + participio** = azione completata **prima** di un momento futuro.\n- {{en-GB|By Friday I’ll have finished the report.}}\n- {{en-GB|By the time you arrive, we’ll have left.}}\n\nSpesso con **by** (entro) e **by the time**. Future perfect continuous (durata): {{en-GB|By June I’ll have been working here for ten years.}}' },
      { h: 'Be about to, be due to, be to', b: '- **be about to + verbo base** = sta per: {{en-GB|The film is about to start.}}\n- **be due to + verbo** = è previsto che: {{en-GB|The train is due to arrive at six.}}\n- **be to + verbo** = programma ufficiale / ordine (formale): {{en-GB|The president is to visit Rome next month.}}\n- **be bound to** = è certo che: {{en-GB|He’s bound to win.}}\n- **be likely to**: {{en-GB|It’s likely to rain.}}' },
      { h: 'Dopo while, when, by the time', b: 'Nelle frasi temporali **non si usa will**: si usa il present.\n- {{en-GB|I’ll call you when I arrive.}}\n- {{en-GB|By the time he gets home, we’ll have eaten.}}\n- {{en-GB|I’ll be waiting while you finish.}}\n\nSe l’azione precede: **present perfect**: {{en-GB|I’ll call you as soon as I have finished.}}' },
      { h: 'Esempio guidato', b: 'Pianifica: *Entro venerdì finirò il rapporto. Il lunedì alle dieci sarò in riunione. Il treno dovrebbe arrivare alle sei.*\n\n- **By Friday I’ll have finished the report.**\n- **On Monday at ten I’ll be sitting in a meeting.**\n- **The train is due to arrive at six.**\n\nControllo: scadenza (by + future perfect), azione in corso (future continuous), programma (due to).' },
      { h: 'Errori comuni', b: '- *When I will arrive* → {{en-GB|When I arrive.}}\n- *By Friday I’ll finish* (vago) → {{en-GB|I’ll have finished.}}\n- *I’ll be know* → {{en-GB|I’ll know.}} (verbi di stato)\n- *The train is about arriving* → {{en-GB|about to arrive.}}\n- *I will have been wait* → {{en-GB|I will have been waiting.}}' },
      { h: 'Riepilogo', b: '- will be + -ing: azione in corso nel futuro.\n- will have + participio: completata prima di un punto futuro.\n- be about to / due to / bound to / likely to.\n- Dopo when/by the time/while: present.' }
    ],
    exercises: [
      mc('By next June I ___ here for ten years.', ['will work', 'will have worked', 'will be work', 'work'], 1),
      mc('Don’t call at eight. I ___ dinner.', ['will have', 'will be having', 'have', 'am have'], 1),
      mc('The film is ___ start. Hurry up!', ['about to', 'about for', 'to about', 'at'], 0),
      mc('By the time you ___, we’ll have left.', ['will arrive', 'arrive', 'are arriving', 'arrived'], 1),
      mc('The train is ___ arrive at six.', ['due to', 'due of', 'dued to', 'due on'], 0),
      fill('Complete: By Friday I ___ finished the report. (will)', ['will have', '’ll have', "'ll have"], 'Future perfect.'),
      mc('He’s ___ win. He’s the best player.', ['bound to', 'bound for', 'going to to', 'bounded'], 0)
    ],
    test: [
      mc('This time tomorrow I ___ on a plane.', ['will be sitting', 'will have sat', 'sit', 'will sit'], 0),
      mc('I’ll call you as soon as I ___ the meeting.', ['will finish', 'have finished', 'am finish', 'finishing'], 1),
      mc('Which sentence is correct?', ['When I will arrive, I’ll call you.', 'When I arrive, I’ll call you.', 'When I arrived, I’ll call you.', 'When I’ll arrive, I call you.'], 1),
      mc('«The president is to visit Rome» means…', ['It is officially planned', 'He wants to visit', 'He visited', 'He has to visit'], 0)
    ],
    cards: [card('c1', 'sta per', 'about to', 'The film is about to start.'), card('c2', 'previsto', 'due', 'The train is due at six.'), card('c3', 'è certo che', 'bound to', 'He’s bound to win.'), card('c4', 'entro il momento in cui', 'by the time', 'By the time you arrive…'),
      card('c5', 'scadenza', 'deadline', 'The deadline is Friday.'), card('c6', 'completare', 'to complete', 'I’ll have completed it.'), card('c7', 'probabile', 'likely', 'It’s likely to rain.'), card('c8', 'programmare', 'to schedule', 'The meeting is scheduled.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Planning the project', text: 'By the end of the month we’ll have finished the first phase. At this time next week I’ll be presenting the results in Milan, so I won’t be answering emails. The report is due on Friday, and the client is likely to ask for changes. The train is about to leave, so I’ll call you when I arrive.',
      qs: [{ q: 'What will the speaker be doing next week?', o: ['Presenting in Milan', 'Taking a holiday', 'Writing a report', 'Visiting the client'], a: 0, kind: 'explicit' }, { q: 'When is the report due?', o: ['Friday', 'Monday', 'End of the month', 'Next week'], a: 0, kind: 'explicit' }, { q: 'What can we infer?', o: ['The speaker will be busy and hard to reach', 'The project is cancelled', 'The speaker is on holiday', 'The client is unhappy'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'By Friday I’ll have finished the report.', lang: 'en-GB' }, { text: 'This time next week I’ll be lying on a beach.', lang: 'en-US' }, { text: 'The train is about to leave.', lang: 'en-AU' }],
    shadowing: [{ text: 'By the time you arrive, we’ll have left.', lang: 'en-GB', tip: 'We’ll have: /wiːl əv/.' }, { text: 'This time tomorrow I’ll be sitting on a plane.', lang: 'en-US', tip: 'I’ll be sitting: ritmo ternario.' }, { text: 'The train is due to arrive at six.', lang: 'en-AU', tip: 'Due to: /djuː tə/.' }],
    speaking: [{ prompt: 'Describe where you will be and what you will be doing at this time next year.', model: 'This time next year I’ll be living in a bigger city. I’ll be working on a new project, and I’ll have learned a lot of Japanese.' }, { prompt: 'Say three things you will have achieved by the end of the year.', model: 'By December I’ll have finished my English course, I’ll have saved some money, and I’ll have visited three new countries.' }] });

  T({ id: 'eng-l3-participle-clauses', title: 'Frasi participiali e relative ridotte', summary: 'Participio presente e passato per comprimere le frasi; -ing/-ed con significato di tempo, causa, modo.',
    objectives: ['Ridurre le frasi relative con -ing e -ed', 'Usare le participial clauses per tempo e causa', 'Evitare l’errore del soggetto sospeso'],
    pages: [
      { h: 'Obiettivo', b: 'Le **frasi participiali** permettono di scrivere e parlare in modo più compatto e scorrevole. A livello B2 compaiono molto nella scrittura e nei testi giornalistici.' },
      { h: 'Relative ridotte', b: 'Con **-ing** (attivo): al posto di *who/which + verbo*:\n- {{en-GB|The man who is talking to Anna is my boss.}} → {{en-GB|The man talking to Anna is my boss.}}\n\nCon **participio passato** (passivo): al posto di *which/who + be + participio*:\n- {{en-GB|The book which was written by Orwell…}} → {{en-GB|The book written by Orwell…}}\n\nUsabile solo quando il pronome è **soggetto** della relativa.' },
      { h: 'Participial clauses di tempo e causa', b: '**-ing** quando i due soggetti coincidono:\n- {{en-GB|Walking home, I saw an accident.}} (= While I was walking…)\n- {{en-GB|Feeling tired, she went to bed.}} (= Because she felt tired…)\n- Azione precedente: {{en-GB|Having finished work, he went out.}} (= After he had finished…)\n\n**-ed/passivo**: {{en-GB|Written in 1949, the book is still popular.}} / {{en-GB|Surprised by the noise, he jumped.}}' },
      { h: 'Attenzione al soggetto', b: 'Il soggetto implicito deve essere **lo stesso** della frase principale.\n- ✔ {{en-GB|Walking down the street, I met an old friend.}}\n- ✘ *Walking down the street, the sun was shining.* (il sole non cammina)\n\nSe i soggetti sono diversi: usa una frase completa o una **absolute clause**: {{en-GB|The weather being good, we went out.}}' },
      { h: 'Participi come aggettivi: -ing / -ed', b: '- **-ing** = causa l’emozione: {{en-GB|an exciting film}}, {{en-GB|a boring lecture}}.\n- **-ed** = prova l’emozione: {{en-GB|I’m excited}}, {{en-GB|I’m bored}}.\n\nAltri: *interested / interesting, tired / tiring, surprised / surprising, confused / confusing.*' },
      { h: 'Esempio guidato', b: 'Combina: *«I was walking home. I saw an accident. I called the police.»*\n\n→ **Walking home, I saw an accident and called the police.**\n\nOra: *«He was exhausted. He fell asleep immediately.»* → **Exhausted, he fell asleep immediately.**\n\nControllo: i due soggetti coincidono? Sì: possibile.' },
      { h: 'Errori comuni', b: '- *Walking home, a car hit me.* → {{en-GB|Walking home, I was hit by a car.}}\n- *I’m boring* (sono noioso) vs *I’m bored* (mi annoio).\n- *The man who is talking* → ridotta solo se soggetto: *The man talking…*\n- *Finished the work, he left* → {{en-GB|Having finished the work, he left.}}\n- Usare participiali nel parlato informale: suonano formali.' },
      { h: 'Riepilogo', b: '- Relative ridotte: -ing (attivo), -ed (passivo).\n- Participial clauses: stesso soggetto; having + participio per l’anteriorità.\n- -ing causa, -ed prova.\n- Evita il soggetto sospeso.' }
    ],
    exercises: [
      mc('The man ___ to Anna is my boss.', ['talking', 'talked', 'talks', 'has talked'], 0),
      mc('The book ___ by Orwell is famous.', ['written', 'writing', 'wrote', 'write'], 0),
      mc('___ home, I met an old friend.', ['Walking', 'Walked', 'To walk', 'Walks'], 0),
      mc('___ the work, he went out.', ['Finishing', 'Having finished', 'Finished', 'To finish'], 1),
      mc('I’m ___ in this film. It’s fascinating.', ['interested', 'interesting', 'interest', 'interests'], 0),
      mc('Which sentence is correct?', ['Walking down the street, the sun was shining.', 'Walking down the street, I saw the sun shining.', 'Walking, the sun shone.', 'Walk down, I saw the sun.'], 1),
      mc('The film was so ___ that I fell asleep.', ['bored', 'boring', 'boredom', 'bore'], 1)
    ],
    test: [
      mc('The cake ___ on the table is for you.', ['sitting', 'sat', 'sits', 'sit'], 0),
      mc('___ by the news, he sat down.', ['Shocked', 'Shocking', 'To shock', 'Shocks'], 0),
      mc('Which is correct?', ['I’m boring.', 'I’m bored.', 'I’m bore.', 'I bore.'], 1),
      mc('The relative clause can be reduced only when the pronoun is…', ['the subject', 'the object', 'a possessive', 'a preposition'], 0)
    ],
    cards: [card('c1', 'colpito/sorpreso', 'surprised', 'I’m surprised.'), card('c2', 'sorprendente', 'surprising', 'It’s surprising.'), card('c3', 'confuso', 'confused', 'I’m confused.'), card('c4', 'stancante', 'tiring', 'It was a tiring day.'),
      card('c5', 'dopo aver finito', 'having finished', 'Having finished, I left.'), card('c6', 'scritto da', 'written by', 'a book written by…'), card('c7', 'testimoniare/assistere', 'to witness', 'He witnessed an accident.'), card('c8', 'esausto', 'exhausted', 'Exhausted, he fell asleep.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'A strange evening', text: 'Walking home last night, I saw a man standing outside my building. Feeling a bit nervous, I crossed the street. The man, holding a large box, asked for help. Surprised, I said yes. Having carried the box upstairs, we discovered it was a gift for my neighbour, delivered to the wrong address.',
      qs: [{ q: 'Where was the man standing?', o: ['Outside the building', 'In the park', 'On the bus', 'At the station'], a: 0, kind: 'explicit' }, { q: 'Why did the speaker cross the street?', o: ['Felt nervous', 'Wanted to cross', 'Was late', 'Met a friend'], a: 0, kind: 'explicit' }, { q: 'What was in the box?', o: ['A gift for the neighbour', 'Books', 'Clothes', 'Nothing'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'Walking home, I saw an accident.', lang: 'en-GB' }, { text: 'The man talking to Anna is my boss.', lang: 'en-US' }, { text: 'Having finished work, he went out.', lang: 'en-AU' }],
    shadowing: [{ text: 'Feeling tired, she went to bed early.', lang: 'en-GB', tip: 'Pausa dopo la virgola.' }, { text: 'Written in 1949, the book is still popular.', lang: 'en-US', tip: 'Ritmo narrativo.' }, { text: 'Having finished, I called a taxi.', lang: 'en-AU', tip: 'Having: /ˈhævɪŋ/.' }],
    speaking: [{ prompt: 'Tell a short story using at least three participial clauses.', model: 'Walking home last night, I heard a strange noise. Feeling curious, I looked around. Having found nothing, I went upstairs and fell asleep.' }, { prompt: 'Describe a film you saw using -ing and -ed adjectives.', model: 'The film was fascinating, and I was really excited. The ending was surprising, but my friend was confused.' }] });

  T({ id: 'eng-l3-dependent-prepositions', title: 'Preposizioni dipendenti da verbi, nomi e aggettivi', summary: 'depend on, good at, interested in, reason for: collocazioni obbligate.',
    objectives: ['Usare la preposizione giusta con verbi, nomi, aggettivi comuni', 'Evitare gli errori di traduzione letterale', 'Memorizzare le combinazioni in blocchi'],
    pages: [
      { h: 'Obiettivo', b: 'Molte parole vogliono una preposizione **fissa** (*depend on*, *good at*, *reason for*). Non esiste una regola: si impara in blocchi. Qui vedi le combinazioni più frequenti dal B1 al B2.' },
      { h: 'Verbi + preposizione', b: '- **depend on**, **rely on**, **concentrate on**, **insist on**, **focus on**\n- **listen to**, **belong to**, **talk to/about**, **point at/to**\n- **believe in**, **succeed in**, **specialise in**\n- **apologise for**, **thank sb for**, **pay for**, **ask for**, **wait for**, **look for**\n- **suffer from**, **recover from**, **prevent sb from**, **protect from**\n- **agree with sb / agree to a plan / agree on a price**\n\n> {{en-GB|It depends on the weather.}} / {{en-GB|I apologise for being late.}}' },
      { h: 'Aggettivi + preposizione', b: '- **good/bad at**, **interested in**, **keen on**, **fond of**, **afraid of**, **proud of**, **tired of**, **jealous of**\n- **angry/annoyed with sb about sth**, **worried about**, **excited about**\n- **similar to**, **different from**, **married to**, **responsible for**, **famous for**, **ready for**\n- **capable of**, **aware of**, **sure of/about**\n\n> {{en-GB|She’s very good at maths.}} / {{en-GB|He’s afraid of flying.}}' },
      { h: 'Nomi + preposizione', b: '- **reason for**, **need for**, **demand for**, **solution to**, **answer to**, **key to**\n- **increase in**, **rise in**, **fall in**, **difference between**, **relationship with/between**\n- **advantage of**, **disadvantage of**, **cause of**, **effect on**, **influence on**, **attitude to/towards**\n- **in charge of**, **on purpose**, **by accident**, **in advance**\n\n> {{en-GB|There’s been an increase in prices.}}' },
      { h: 'Dopo la preposizione: -ing', b: 'Dopo una preposizione si usa il **gerundio**:\n- {{en-GB|She’s good at solving problems.}}\n- {{en-GB|I’m thinking of changing jobs.}}\n- {{en-GB|He insisted on paying.}}\n- {{en-GB|Thank you for helping me.}}' },
      { h: 'Esempio guidato', b: 'Completa: *«I’m interested ___ learning Japanese. I’m keen ___ travelling and I’m good ___ languages, but I’m worried ___ the exam.»*\n\n→ **in, on, at, about**.\n\nControllo: dopo ogni preposizione il verbo è in -ing (*learning, travelling*).' },
      { h: 'Errori comuni', b: '- *depend of* → {{en-GB|depend on.}}\n- *married with* → {{en-GB|married to.}}\n- *interested on* → {{en-GB|interested in.}}\n- *good in maths* → {{en-GB|good at maths.}}\n- *different than/of* → {{en-GB|different from.}}\n- *explain me* → {{en-GB|explain it to me.}}' },
      { h: 'Riepilogo', b: '- Impara parola + preposizione come blocco.\n- depend on, good at, interested in, reason for, increase in.\n- Dopo preposizione: -ing.\n- Evita calchi dall’italiano.' }
    ],
    exercises: [
      mc('It depends ___ the weather.', ['of', 'on', 'from', 'at'], 1),
      mc('She’s very good ___ maths.', ['in', 'at', 'on', 'of'], 1),
      mc('He is married ___ a doctor.', ['with', 'to', 'by', 'of'], 1),
      mc('There’s been an increase ___ prices.', ['of', 'on', 'in', 'at'], 2),
      mc('Thank you ___ helping me.', ['for', 'of', 'to', 'about'], 0),
      mc('I’m worried ___ the exam.', ['of', 'about', 'on', 'at'], 1),
      mc('She’s different ___ her sister.', ['from', 'than of', 'with', 'to'], 0)
    ],
    test: [
      mc('Which is correct?', ['I’m interested on art.', 'I’m interested in art.', 'I’m interested at art.', 'I’m interested of art.'], 1),
      mc('He insisted ___ paying for dinner.', ['on', 'to', 'in', 'for'], 0),
      mc('The reason ___ the delay is the weather.', ['of', 'for', 'to', 'at'], 1),
      mc('I’m thinking ___ changing jobs.', ['of', 'on', 'to', 'in'], 0)
    ],
    cards: [card('c1', 'dipendere da', 'to depend on', 'It depends on you.'), card('c2', 'fare affidamento su', 'to rely on', 'You can rely on me.'), card('c3', 'scusarsi per', 'to apologise for', 'I apologise for that.'), card('c4', 'riprendersi da', 'to recover from', 'He recovered from the flu.'),
      card('c5', 'orgoglioso di', 'proud of', 'I’m proud of you.'), card('c6', 'ragione/motivo di', 'reason for', 'the reason for the delay'), card('c7', 'aumento di', 'increase in', 'an increase in prices'), card('c8', 'diverso da', 'different from', 'It’s different from mine.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A new school year', text: 'I’m really excited about the new school year. I’m good at languages, and I’m keen on learning Japanese. My teacher specialises in grammar, and she’s very proud of her students. However, I’m worried about the exams. Success depends on regular practice, and the key to improvement is concentrating on small goals.',
      qs: [{ q: 'What is the speaker good at?', o: ['Languages', 'Maths', 'Sport', 'Music'], a: 0, kind: 'explicit' }, { q: 'What is the speaker worried about?', o: ['The exams', 'The teacher', 'The homework', 'The lessons'], a: 0, kind: 'explicit' }, { q: 'What is the key to improvement?', o: ['Concentrating on small goals', 'Studying all night', 'Avoiding exams', 'Changing school'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'It depends on the weather.', lang: 'en-GB' }, { text: 'She’s good at solving problems.', lang: 'en-US' }, { text: 'There’s been an increase in prices.', lang: 'en-AU' }],
    shadowing: [{ text: 'I’m interested in learning Japanese.', lang: 'en-GB', tip: 'Interested in: /ˈɪntrəstɪd ɪn/.' }, { text: 'Thank you for helping me.', lang: 'en-US', tip: 'For helping: legati.' }, { text: 'The reason for the delay is the weather.', lang: 'en-AU', tip: 'Reason for: stress su reason.' }],
    speaking: [{ prompt: 'Talk about yourself using good at, interested in, keen on, worried about.', model: 'I’m good at organising things, and I’m interested in learning new languages. I’m keen on cooking, but I’m worried about my free time.' }, { prompt: 'Describe a change in your city using increase in / fall in / reason for.', model: 'There has been an increase in traffic, and a fall in the number of shops. The reason for this is the new shopping centre outside the city.' }] });

  T({ id: 'eng-l3-speaking-fluency', title: 'Fluidità nel parlato: riempitivi, riformulazione e turni di parola', summary: 'Come restare in conversazione quando non trovi la parola.',
    objectives: ['Usare riempitivi e riformulazione per guadagnare tempo', 'Gestire i turni di parola (interrompere, passare la parola)', 'Riparare un errore senza bloccarsi'],
    pages: [
      { h: 'Obiettivo', b: 'Parlare in modo fluente **non** significa non fare errori né conoscere tutte le parole: significa **non bloccarsi**. Le persone competenti usano strategie per guadagnare tempo e risolvere i problemi comunicativi.' },
      { h: 'Riempitivi e guadagnare tempo', b: 'Invece di silenzi o «eeeh»:\n- {{en-GB|Well, let me think…}} / {{en-GB|Let me see…}} / {{en-GB|That’s a good question.}}\n- {{en-GB|How can I put it…}} / {{en-GB|What I mean is…}}\n- {{en-GB|You know…}} / {{en-GB|I mean…}} / {{en-GB|sort of / kind of}}\n\nUsali con moderazione: poche pause ben gestite sono naturali.' },
      { h: 'Riformulare e parafrasare', b: 'Se non ricordi una parola, **gira intorno**:\n- *It’s a thing you use to…* / *It’s like a… but…* / *It’s the opposite of…*\n- {{en-GB|I can’t remember the word, but it’s something you use to cut paper.}}\n- {{en-GB|In other words… / Let me put it another way…}}\n\nSe l’altro non ha capito: {{en-GB|What I’m trying to say is…}}' },
      { h: 'Turni di parola', b: '- **Interrompere con garbo**: {{en-GB|Sorry to interrupt, but… / Can I just say something?}}\n- **Riprendere**: {{en-GB|As I was saying… / Going back to what I said…}}\n- **Passare la parola**: {{en-GB|What do you think? / How about you?}}\n- **Chiedere di ripetere**: {{en-GB|Sorry, could you say that again? / What do you mean by…?}}\n- **Verificare di aver capito**: {{en-GB|So you’re saying that…, right?}}' },
      { h: 'Riparare un errore', b: 'Quando sbagli, correggi **senza scusarti troppo**:\n- {{en-GB|Sorry, I mean…}} / {{en-GB|Let me rephrase that.}} / {{en-GB|No, wait, I should say…}}\n\nRipetere la frase corretta è sufficiente: la conversazione continua.' },
      { h: 'Esempio guidato', b: 'Situazione: devi spiegare «un cacciavite» ma non sai la parola.\n\n- **I can’t remember the word, but it’s a tool you use to turn screws. It’s like a… small handle with a metal end.**\n\nTi dicono: *a screwdriver?* → **Yes, exactly, thank you!** Nota la parola e aggiungila alle carte.\n\nControllo: ho guadagnato tempo, riformulato e confermato.' },
      { h: 'Errori comuni', b: '- Rimanere in silenzio per cercare la parola perfetta.\n- Tradurre dall’italiano parola per parola.\n- Usare troppi riempitivi (*like, you know*).\n- Interrompere senza *sorry to interrupt*.\n- Scusarsi continuamente per l’inglese.' },
      { h: 'Riepilogo', b: '- Guadagna tempo: well, let me think, how can I put it.\n- Parafrasa: it’s a thing you use to…\n- Turni: sorry to interrupt, what do you think?\n- Ripara: sorry, I mean…' }
    ],
    exercises: [
      mc('You don’t remember a word. What can you say?', ['It’s a thing you use to cut paper.', 'I don’t speak English.', 'Nothing.', 'Forget it.'], 0),
      mc('A polite way to interrupt:', ['Sorry to interrupt, but…', 'Stop talking.', 'Wait!', 'No.'], 0),
      mc('Which phrase helps you gain time?', ['Let me think…', 'Goodbye', 'Excuse me', 'No problem'], 0),
      mc('To check understanding you can say…', ['So you’re saying that…, right?', 'I don’t care.', 'Whatever.', 'Say nothing.'], 0),
      mc('To correct yourself:', ['Sorry, I mean…', 'I’m stupid.', 'Never mind everything.', 'Stop.'], 0),
      mc('To pass the turn:', ['What do you think?', 'Be quiet.', 'I finish.', 'Shut up.'], 0),
      mc('Too many fillers can make speech…', ['less clear', 'more precise', 'faster', 'more polite'], 0)
    ],
    test: [
      mc('What is paraphrasing?', ['Saying the same idea with different words', 'Repeating the same word', 'Translating', 'Staying silent'], 0),
      mc('How can you ask someone to repeat?', ['Sorry, could you say that again?', 'What?', 'Repeat!', 'Again.'], 0),
      mc('«As I was saying…» is used to…', ['go back to a point', 'end the call', 'change topic', 'interrupt'], 0),
      mc('Which expression is a filler?', ['you know', 'because', 'although', 'therefore'], 0)
    ],
    cards: [card('c1', 'riformulare', 'to rephrase', 'Let me rephrase that.'), card('c2', 'interrompere', 'to interrupt', 'Sorry to interrupt.'), card('c3', 'ovvero / in altre parole', 'in other words', 'In other words, yes.'), card('c4', 'cioè', 'I mean', 'I mean, it’s fine.'),
      card('c5', 'tipo / una specie di', 'kind of', 'It’s kind of expensive.'), card('c6', 'ripetere', 'to repeat', 'Could you repeat that?'), card('c7', 'come dire…', 'how can I put it', 'How can I put it…'), card('c8', 'cacciavite', 'screwdriver', 'I need a screwdriver.')],
    listening: [{ id: 'l1', lang: 'en-AU', title: 'Finding the word', text: 'Well, let me think… how can I put it… it’s a thing you use to open bottles. You know, it’s kind of small and metal. Oh, a bottle opener! Right. Sorry, I mean, a corkscrew, for wine. So what I’m trying to say is that I need one for tonight. Can I just ask you something? Do you have one I could borrow?',
      qs: [{ q: 'What is the speaker trying to describe?', o: ['A bottle opener / corkscrew', 'A knife', 'A bottle', 'A glass'], a: 0, kind: 'explicit' }, { q: 'How does the speaker solve the vocabulary problem?', o: ['Describing it with other words', 'Using a dictionary', 'Staying silent', 'Asking for help in Italian'], a: 0, kind: 'implicit' }, { q: 'What does the speaker finally ask?', o: ['To borrow one', 'To buy one', 'Where to find one', 'How to use it'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'Well, let me think for a second.', lang: 'en-GB' }, { text: 'Sorry, I mean a corkscrew.', lang: 'en-US' }, { text: 'What I’m trying to say is that I need help.', lang: 'en-AU' }],
    shadowing: [{ text: 'Well, how can I put it… it’s a thing you use to cut paper.', lang: 'en-GB', tip: 'Pausa naturale dopo «well».' }, { text: 'Sorry to interrupt, but can I just say something?', lang: 'en-US', tip: 'Tono cortese.' }, { text: 'So what you’re saying is that it’s too expensive, right?', lang: 'en-AU', tip: 'Intonazione ascendente su right.' }],
    speaking: [{ prompt: 'Explain an object without using its name (tool, appliance) for 30 seconds.', model: 'It’s something you use in the kitchen. It’s kind of round and flat, and you use it to cook eggs. It has a handle, and it’s usually made of metal. What is it?' }, { prompt: 'Role-play: you did not understand something. Ask for repetition and check your understanding.', model: 'Sorry, could you say that again? So you’re saying that the meeting is on Thursday, right? Thanks, that’s clearer now.' }] });

  T({ id: 'eng-l3-essay-writing', title: 'Scrivere saggi, relazioni e recensioni', summary: 'Struttura di un saggio d’opinione, di una relazione e di una recensione.',
    objectives: ['Strutturare un saggio con introduzione, sviluppo e conclusione', 'Usare connettori e paragrafi coerenti', 'Distinguere essay, report e review'],
    pages: [
      { h: 'Obiettivo', b: 'Nello scritto B2 conta **organizzare** le idee: introduzione chiara, paragrafi con una sola idea, conclusione. Impari a scrivere tre tipi di testo molto frequenti.' },
      { h: 'Il saggio d’opinione (essay)', b: '**Struttura (150–250 parole)**:\n1. **Introduzione**: contesto + tesi. *Many people believe that… In my opinion…*\n2. **Paragrafo 1**: primo argomento + esempio.\n3. **Paragrafo 2**: secondo argomento (o controargomento) + esempio.\n4. **Conclusione**: ricapitola e riafferma la tesi. *To sum up… / In conclusion…*\n\nOgni paragrafo: **frase tematica** → spiegazione → esempio.' },
      { h: 'Connettori e registro', b: '- Aggiunta: *Firstly, Moreover, In addition, Furthermore*\n- Contrasto: *However, On the other hand, Although, Despite*\n- Causa/effetto: *Because of, As a result, Therefore, Consequently*\n- Esempio: *For instance, such as*\n- Conclusione: *To sum up, In conclusion*\n\nRegistro **formale**: niente contrazioni, niente slang, frasi complete, passivo quando serve.' },
      { h: 'La relazione (report)', b: 'Scopo: **informare e proporre**. Struttura:\n- **Titolo**\n- **Introduzione**: scopo del report.\n- **Sezioni con titoli** (Findings, Advantages, Disadvantages).\n- **Conclusione/Raccomandazioni**.\n\nStile: neutro, preciso, elenchi consentiti. Es.: *The aim of this report is to… / It is recommended that…*' },
      { h: 'La recensione (review)', b: 'Scopo: **descrivere e valutare**.\n- Titolo accattivante.\n- Introduzione: che cosa recensisci (film, libro, ristorante).\n- Descrizione breve (senza spoiler).\n- Valutazione: aspetti positivi e negativi con esempi.\n- Raccomandazione: *I would recommend it to… / It’s worth seeing.*\n\nStile: più personale e vivace, ma corretto.' },
      { h: 'Esempio guidato', b: '**Tema**: *Should cities ban cars from the centre?*\n\n*Many cities face traffic and pollution. In my opinion, banning cars from the centre is a good idea. Firstly, it improves air quality. For instance, studies show a drop in pollution. Moreover, it makes streets safer for pedestrians. On the other hand, some shops may lose customers. However, this can be solved by improving public transport. To sum up, the benefits outweigh the drawbacks.*\n\nControllo: tesi, due argomenti, controargomento, conclusione, connettori.' },
      { h: 'Errori comuni', b: '- Un solo blocco di testo senza paragrafi.\n- Introdurre idee nuove nella conclusione.\n- Copiare frasi dalla traccia.\n- Contrazioni e slang in un essay formale.\n- Dimenticare il numero minimo di parole.\n- Ripetere sempre *and* e *but*.' },
      { h: 'Riepilogo', b: '- Essay: introduzione, 2 paragrafi, conclusione.\n- Report: titolo, sezioni, raccomandazioni.\n- Review: descrivi, valuta, raccomanda.\n- Connettori e registro adeguati; revisione finale.' }
    ],
    exercises: [
      mc('Which sentence usually comes first in an essay?', ['The conclusion', 'The thesis in the introduction', 'An example', 'A new idea'], 1),
      mc('Which connector adds an idea?', ['Moreover', 'However', 'Although', 'Therefore'], 0),
      mc('Which connector shows contrast?', ['On the other hand', 'Moreover', 'For example', 'To sum up'], 0),
      mc('A report usually has…', ['headings and recommendations', 'no structure', 'only opinions', 'slang'], 0),
      mc('In a formal essay you should…', ['avoid contractions', 'use slang', 'use abbreviations', 'write in one paragraph'], 0),
      mc('Which closes an essay?', ['To sum up', 'Firstly', 'For instance', 'Moreover'], 0),
      mc('A review should include…', ['description and evaluation', 'only a summary', 'only criticism', 'a list of dates'], 0)
    ],
    test: [
      mc('Where do you give an example?', ['After the topic sentence', 'In the title', 'In the last line only', 'Nowhere'], 0),
      mc('Which is a formal phrase?', ['It is recommended that', 'Stuff like that', 'Gonna', 'No way'], 0),
      mc('How many main arguments does a short essay usually have?', ['Two', 'Ten', 'None', 'One word'], 0),
      mc('A review ends with…', ['a recommendation', 'a title', 'a bibliography', 'a question'], 0)
    ],
    cards: [card('c1', 'saggio', 'essay', 'Write an essay.'), card('c2', 'relazione', 'report', 'He wrote a report.'), card('c3', 'recensione', 'review', 'a film review'), card('c4', 'tesi', 'thesis', 'State your thesis.'),
      card('c5', 'ricapitolare', 'to sum up', 'To sum up…'), card('c6', 'vantaggio', 'advantage', 'an advantage'), card('c7', 'svantaggio', 'drawback', 'a drawback'), card('c8', 'raccomandare', 'to recommend', 'I recommend it.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Writing advice', text: 'When you write an essay, begin with an introduction that states your opinion. Then use two paragraphs, each with one main idea and an example. Connect your ideas with words like moreover and however. Finally, finish with a conclusion that sums up your argument. Don’t introduce new ideas at the end, and always check your spelling and grammar.',
      qs: [{ q: 'How many body paragraphs does the speaker suggest?', o: ['Two', 'One', 'Five', 'Ten'], a: 0, kind: 'explicit' }, { q: 'What should the introduction state?', o: ['Your opinion', 'A question', 'A joke', 'A list'], a: 0, kind: 'explicit' }, { q: 'What should you avoid in the conclusion?', o: ['New ideas', 'A summary', 'The opinion', 'Connectors'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'In my opinion, this is a good idea.', lang: 'en-GB' }, { text: 'To sum up, the benefits outweigh the drawbacks.', lang: 'en-US' }, { text: 'It is recommended that the council acts quickly.', lang: 'en-AU' }],
    shadowing: [{ text: 'Firstly, it improves air quality.', lang: 'en-GB', tip: 'Firstly: stress sulla prima.' }, { text: 'However, this can be solved by improving public transport.', lang: 'en-US', tip: 'However: pausa dopo la virgola.' }, { text: 'To sum up, the benefits outweigh the drawbacks.', lang: 'en-AU', tip: 'Outweigh: /aʊtˈweɪ/.' }],
    speaking: [{ prompt: 'Give a spoken outline of an essay on: «Is social media good for young people?» (intro, 2 arguments, conclusion).', model: 'In my opinion, social media has both advantages and disadvantages. Firstly, it helps young people stay connected. Secondly, it can cause stress. To sum up, parents should supervise but not ban it.' }, { prompt: 'Recommend a film or book in four sentences like in a review.', model: 'I recently watched a film about a young chef. It’s moving and funny. The acting is excellent, though the ending is predictable. I would recommend it to anyone who loves cooking.' }] });
})(window.ST = window.ST || {});
