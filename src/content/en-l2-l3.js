/* Inglese — stage L2 (ponte B1+ → B2) e L3 (B2 iniziale). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;

  C.addTopic({
    id: 'eng-l2-reported', subject: 'eng', stage: 'L2', title: 'Discorso indiretto e domande indirette', minutes: 20, prereq: ['eng-l1-future-cond'],
    summary: 'Riportare ciò che qualcuno ha detto: backshift, verbi di riporto, domande indirette.',
    objectives: ['Applicare il backshift dei tempi verbali', 'Usare verbi di riporto con la struttura corretta', 'Formare domande indirette educate'],
    pages: [
      { h: 'Obiettivo', b: 'Riportare ciò che qualcuno ha detto è una competenza quotidiana: al lavoro, in famiglia, nei racconti. Imparerai a **spostare i tempi indietro**, a scegliere il verbo di riporto più naturale e a fare **domande indirette** gentili («Could you tell me where…?»).' },
      { h: 'Il backshift', b: 'Se il verbo di riporto è al passato (said, told), il tempo della frase riportata di solito **arretra di un gradino**:\n\n- present simple → past simple: «I **work** here» → She said she **worked** here.\n- present continuous → past continuous: «I’m **leaving**» → He said he **was leaving**.\n- past simple → past perfect: «I **saw** it» → She said she **had seen** it.\n- present perfect → past perfect\n- will → would; can → could; may → might\n\nCambiano anche i riferimenti: here → there, now → then, today → that day, tomorrow → the next day, ago → before.\n\nSe il fatto è ancora vero, il backshift è facoltativo: {{en-GB|She said she lives in Rome.}}' },
      { h: 'Verbi di riporto', b: 'Say e tell non sono intercambiabili: **tell** richiede un oggetto (*told me*), **say** no.\n> {{en-GB|She told me she was tired.}} / {{en-GB|She said she was tired.}}\n\nVerbi che riassumono l’atto comunicativo e hanno strutture proprie:\n- **suggest** + -ing / that: {{en-GB|He suggested going out.}}\n- **promise / offer / refuse / agree** + to + base: {{en-GB|She promised to call.}}\n- **admit / deny / apologise for** + -ing: {{en-GB|He admitted breaking the window.}}\n- **ask / tell / warn / advise** + oggetto + to: {{en-GB|He told me not to worry.}}\n\nQuesti verbi rendono il riporto più naturale di un lungo «he said that…».' },
      { h: 'Domande riportate e indirette', b: 'Nelle domande riportate l’ordine è **da frase affermativa** e non c’è do/does:\n\n- «Where do you live?» → She asked me **where I lived.**\n- «Are you ready?» → He asked **if/whether I was ready.**\n\nLe **domande indirette** (educate) funzionano allo stesso modo:\n> {{en-GB|Could you tell me where the station is?}} (non *where is the station*)\n> {{en-GB|Do you know what time it starts?}}\n> {{en-GB|I wonder whether she’s coming.}}\n\nQuando c’è una frase introduttiva, la domanda perde l’inversione.' },
      { h: 'Esempio guidato', b: '*«I’m going to quit my job next month,» Marco told me yesterday.* Riporta.\n\n1. Verbo di riporto passato → backshift: *am going to* → **was going to**.\n2. *my* → **his**; *next month* → **the following month**; (yesterday resta se il riferimento è chiaro, oppure the day before).\n3. Risultato: **Marco told me he was going to quit his job the following month.**\n\nProva con un verbo di riporto: *Marco announced he was going to quit…* oppure *Marco said he was quitting.*\n\nControllo: ogni pronome e riferimento temporale deve avere senso dal punto di vista di chi riporta.' },
      { h: 'Errori comuni', b: '- *She said me she was tired* → {{en-GB|She told me / She said (to me) she was tired.}}\n- *He asked me where did I live* → {{en-GB|He asked me where I lived.}}\n- *She suggested to go* → {{en-GB|She suggested going.}}\n- *I asked him if he will come* → {{en-GB|if he would come.}}\n- Dimenticare di cambiare i pronomi e i riferimenti temporali.' },
      { h: 'Riepilogo', b: '- Backshift: un gradino indietro, will→would, can→could.\n- tell + persona, say senza.\n- Verbi di riporto: suggest -ing, promise to, admit -ing, tell sb to.\n- Domande riportate e indirette: ordine affermativo, if/whether per sì/no.' }
    ],
    exercises: [
      mc('«I’m tired,» she said. → She said she ___ tired.', ['is', 'was', 'has been', 'be'], 1),
      fill('Complete: He told ___ he was ready.', ['me', 'us', 'her', 'him', 'them'], 'Tell richiede un oggetto.'),
      mc('«Where do you work?» → He asked me where I ___.', ['do work', 'worked', 'did work', 'am working'], 1, 'Ordine affermativo e backshift.'),
      mc('She suggested ___ to the cinema.', ['to go', 'going', 'go', 'that going'], 1, 'Suggest + -ing.'),
      mc('Which is the correct indirect question?', ['Could you tell me where is the station?', 'Could you tell me where the station is?', 'Could you tell me where does the station?', 'Could you tell me the station where?'], 1),
      fill('Complete: «I will help you,» he said. → He promised ___ me.', ['to help'], 'Promise + to + base.'),
      mc('He admitted ___ the money.', ['to take', 'taking', 'take', 'that taking'], 1)
    ],
    test: [
      mc('«I saw it,» she said. → She said she ___ it.', ['saw', 'had seen', 'has seen', 'would see'], 1),
      mc('Which sentence is correct?', ['She said me to wait.', 'She told me to wait.', 'She said to wait me.', 'She told to wait.'], 1),
      fill('Complete: «Are you coming?» → He asked ___ I was coming.', ['if', 'whether'], 'Domanda sì/no: if/whether.'),
      mc('«Don’t touch it!» → He warned us ___ it.', ['don’t touch', 'not to touch', 'to not touching', 'not touching'], 1)
    ],
    cards: [
      card('c1', 'avvertire', 'to warn', 'He warned me not to go.'), card('c2', 'ammettere', 'to admit', 'She admitted her mistake.'), card('c3', 'negare', 'to deny', 'He denied lying.'), card('c4', 'rifiutare', 'to refuse', 'They refused to pay.'),
      card('c5', 'suggerire', 'to suggest', 'I suggest taking a taxi.'), card('c6', 'scusarsi', 'to apologise', 'I apologise for being late.'), card('c7', 'chiedersi', 'to wonder', 'I wonder where she is.'), card('c8', 'annunciare', 'to announce', 'They announced a new plan.')
    ],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A message passed on', text: 'Mr Clarke called this morning. He said he was running late and asked whether you could start the meeting without him. He also told me to remind you that the report was due on Friday. I asked him if he had sent the figures, and he admitted forgetting them. He promised to email them by noon.',
      qs: [{ q: 'What did Mr Clarke ask?', o: ['To cancel the meeting', 'Whether the meeting could start without him', 'To send the report', 'To call back'], a: 1, kind: 'explicit' }, { q: 'What did he forget?', o: ['The report', 'The meeting time', 'The figures', 'His phone'], a: 2, kind: 'explicit' }, { q: 'What can we infer about the figures?', o: ['They were already sent', 'They will arrive later today', 'They aren’t needed', 'They are lost forever'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'He said he was running late.', lang: 'en-GB' }, { text: 'Could you tell me where the station is?', lang: 'en-US' }, { text: 'She promised to call me back.', lang: 'en-AU' }],
    shadowing: [{ text: 'He asked whether I could start the meeting without him.', lang: 'en-GB', tip: 'Whether: /ˈweðə/. Stress su asked, start, meeting, without.' }, { text: 'I wonder where she has gone.', lang: 'en-US', tip: 'Intonazione discendente.' }, { text: 'She told me not to worry about it.', lang: 'en-AU', tip: '«told me» — la /d/ legata.' }],
    speaking: [{ prompt: 'Report a conversation you had recently: what did they say, ask or promise?', model: 'My manager said the project was going well. She asked me whether I could present the results, and I promised to prepare the slides by Thursday.' }, { prompt: 'Ask a stranger politely for three pieces of information using indirect questions.', model: 'Excuse me, could you tell me where the post office is? Do you know what time it closes? I was wondering whether there’s a bank nearby.' }]
  });

  C.addTopic({
    id: 'eng-l2-passive-relative', subject: 'eng', stage: 'L2', title: 'Passivo e frasi relative', minutes: 20, prereq: ['eng-l2-reported'],
    summary: 'Quando usare il passivo; who/which/that/whose/where, definenti e non definenti.',
    objectives: ['Costruire il passivo nei tempi principali', 'Scegliere il pronome relativo corretto', 'Distinguere frasi relative definenti e non definenti'],
    pages: [
      { h: 'Obiettivo', b: 'Il passivo sposta l’attenzione da **chi fa** a **che cosa viene fatto**. Le frasi relative aggiungono informazioni a un nome senza spezzare la frase. Entrambe sono essenziali per scrivere e parlare in modo più compatto (B2).' },
      { h: 'Il passivo', b: 'Forma: **be (nel tempo giusto) + participio passato**.\n\n- present simple: {{en-GB|English is spoken here.}}\n- past simple: {{en-GB|The bridge was built in 1890.}}\n- present perfect: {{en-GB|The report has been finished.}}\n- future: {{en-GB|It will be delivered tomorrow.}}\n- con modale: {{en-GB|It must be done today.}}\n\nUsa il passivo quando l’agente è sconosciuto, ovvio o irrilevante: {{en-GB|My bike was stolen.}} Per indicare l’agente: **by**.\n\nStruttura utile: **have something done** = far fare qualcosa a un altro: {{en-GB|I had my hair cut.}} {{en-GB|She’s having the car repaired.}}' },
      { h: 'Frasi relative', b: '**Pronomi**:\n- persone: **who** (o that)\n- cose: **which** (o that)\n- possesso: **whose**\n- luogo: **where**; tempo: **when**\n\n**Definenti** (identificano il nome, niente virgole, that possibile):\n> {{en-GB|The man who lives next door is a doctor.}}\n> {{en-GB|This is the book that I told you about.}}\n\n**Non definenti** (aggiungono un’informazione extra, tra virgole, NO that):\n> {{en-GB|My sister, who lives in Milan, works for a bank.}}\n\nNelle definenti il pronome si può omettere se è **oggetto**: {{en-GB|The book I told you about.}} Non si omette se è soggetto.' },
      { h: 'Esempio guidato', b: 'Unisci: *The film was directed by Nolan. I watched it last night.*\n\n1. «it» è oggetto di watched → relativo: *which/that/(nulla)*.\n2. Risultato definente: **The film (that) I watched last night was directed by Nolan.**\n3. Aggiungere un’info extra: *Inception, which I watched last night, was directed by Nolan.* (non definente, virgole, niente that)\n\nControllo: se togli la relativa e la frase non identifica più il nome, è definente; se togli ed è solo un’aggiunta, è non definente e vuole le virgole.' },
      { h: 'Errori comuni', b: '- *The house where I live in* → {{en-GB|The house where I live / The house which I live in.}} (non entrambi)\n- *The man which called me* → {{en-GB|The man who called me.}}\n- *Her car was stolen from her* → {{en-GB|Her car was stolen.}}\n- *It was happened yesterday* → {{en-GB|It happened yesterday.}} (happen non è passivabile)\n- *My brother, that lives in Rome…* → {{en-GB|who lives in Rome.}} (non definente: no that)' },
      { h: 'Riepilogo', b: '- Passivo = be + participio; agente con by solo se serve.\n- have something done per servizi.\n- who (persone), which (cose), whose, where.\n- Definenti senza virgole (that ok, omissione se oggetto); non definenti con virgole (no that).' }
    ],
    exercises: [
      mc('The bridge ___ in 1890.', ['built', 'was built', 'is built', 'has built'], 1),
      fill('Complete: English ___ (speak) in many countries.', ['is spoken'], 'Present simple passive.'),
      mc('The woman ___ lives next door is a nurse.', ['which', 'who', 'whose', 'where'], 1),
      mc('This is the town ___ I was born.', ['who', 'which', 'where', 'whose'], 2),
      mc('I ___ my phone ___ yesterday. (a technician did it)', ['had / repaired', 'have / repair', 'did / repaired', 'was / repaired'], 0, 'have + oggetto + participio.'),
      mc('Which sentence needs commas?', ['The man who called is my uncle.', 'My uncle, who is a pilot, lives in Dubai.', 'The book that I read was good.', 'The house I bought is old.'], 1),
      mc('Which sentence is correct?', ['It was happened yesterday.', 'It happened yesterday.', 'It has been happening yesterday.', 'It is happened yesterday.'], 1)
    ],
    test: [
      mc('The report ___ by Friday.', ['must finish', 'must be finished', 'must finished', 'must be finish'], 1),
      mc('The girl ___ bag was stolen called the police.', ['who', 'which', 'whose', 'whom’s'], 2),
      fill('Complete: Rome, ___ is the capital of Italy, is a beautiful city.', ['which'], 'Non definente: which.'),
      mc('The car ___ I bought last year is already broken.', ['who', 'where', '—(nothing) / that', 'whose'], 2, 'Il relativo oggetto si può omettere o essere that.')
    ],
    cards: [
      card('c1', 'rubare', 'to steal (stole)', 'My bike was stolen.'), card('c2', 'costruire', 'to build (built)', 'They built a new bridge.'), card('c3', 'riparare', 'to repair', 'I need to repair my phone.'), card('c4', 'consegnare', 'to deliver', 'It will be delivered tomorrow.'),
      card('c5', 'identificare', 'to identify', 'Can you identify the problem?'), card('c6', 'vicino di casa', 'neighbour', 'My neighbour is friendly.'), card('c7', 'ottenere', 'to obtain', 'You need to obtain permission.'), card('c8', 'ufficio postale', 'post office', 'The post office is closed.')
    ],
    listening: [{ id: 'l1', lang: 'en-US', title: 'Town history', text: 'Our town, which was founded in 1850, is famous for its old market. The market, which is held every Saturday, was rebuilt after a fire in 1923. The building where it takes place was designed by a local architect whose work you can see across the region. Today the market is visited by thousands of tourists.',
      qs: [{ q: 'When was the town founded?', o: ['1923', '1850', '1900', 'It is unknown'], a: 1, kind: 'explicit' }, { q: 'What happened in 1923?', o: ['The market was founded', 'The market was rebuilt after a fire', 'The market closed', 'The architect was born'], a: 1, kind: 'explicit' }, { q: 'What can we infer about the market today?', o: ['It is popular with visitors', 'It is closed', 'It is small', 'It is new'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'The bridge was built in 1890.', lang: 'en-GB' }, { text: 'My sister, who lives in Milan, works for a bank.', lang: 'en-US' }, { text: 'I had my hair cut yesterday.', lang: 'en-AU' }],
    shadowing: [{ text: 'The market, which is held every Saturday, was rebuilt after a fire.', lang: 'en-US', tip: 'Pause e intonazione ai punti tra virgole.' }, { text: 'The man who lives next door is a doctor.', lang: 'en-GB', tip: 'Stress: man, lives, door, doctor.' }, { text: 'It must be done by the end of the week.', lang: 'en-AU', tip: 'Must be done: ritmo regolare.' }],
    speaking: [{ prompt: 'Describe your town or a famous place using at least two passive sentences and two relative clauses.', model: 'Turin, which is in the north of Italy, was the first capital of the country. The city is known for its cars and its chocolate, which is sold all over the world.' }, { prompt: 'Describe a person you admire using who and whose.', model: 'My grandmother is a woman who never gives up. She’s someone whose advice I always follow.' }]
  });

  C.addTopic({
    id: 'eng-l3-argument', subject: 'eng', stage: 'L3', title: 'Argomentare: connettori e opinioni', minutes: 20, prereq: ['eng-l2-passive-relative'],
    summary: 'Collegare idee, contrastare, concludere; esprimere accordo e disaccordo con garbo.',
    objectives: ['Usare connettori di contrasto, causa e risultato', 'Strutturare un breve testo di opinione', 'Esprimere accordo e disaccordo in modo appropriato'],
    pages: [
      { h: 'Obiettivo', b: 'A livello B2 non basta formare frasi corrette: devi **collegarle** in modo che l’ascoltatore segua il ragionamento. Qui impari i connettori più frequenti e come strutturare un’opinione, sia scritta che orale.' },
      { h: 'Contrasto', b: 'Attenzione alla grammatica che segue ogni connettore:\n\n- **but / however**: {{en-GB|It was cheap. However, the quality was poor.}}\n- **although / even though** + frase: {{en-GB|Although it was cheap, the quality was poor.}}\n- **despite / in spite of** + nome o -ing: {{en-GB|Despite the rain, we went out.}} / {{en-GB|In spite of being tired…}}\n- **whereas / while**: confronto tra due fatti: {{en-GB|My brother likes sport, whereas I prefer books.}}\n\nNon dire *Despite of* o *although of*.' },
      { h: 'Causa, risultato, aggiunta', b: '**Causa**: because + frase; because of / due to + nome; since / as.\n> {{en-GB|We stayed home because of the storm.}}\n\n**Risultato**: so, therefore, as a result, consequently.\n> {{en-GB|Prices rose. As a result, fewer people bought cars.}}\n\n**Aggiunta**: and, also, in addition, moreover, besides.\n\n**Esempio/riformulazione**: for example, for instance, in other words, that is.\n\n**Conclusione**: to sum up, in conclusion, overall.' },
      { h: 'Strutturare un’opinione', b: 'Una struttura semplice e robusta (adatta a prove B2):\n\n1. **Posizione**: {{en-GB|In my opinion, remote work is a good thing.}}\n2. **Ragione 1 + esempio**: *First, it saves commuting time. For example, I gain two hours a day.*\n3. **Ragione 2**: *Moreover, it can improve concentration.*\n4. **Controargomento**: *Admittedly, some people feel isolated; however, this can be solved by meeting colleagues occasionally.*\n5. **Conclusione**: *Overall, the benefits outweigh the drawbacks.*\n\nFormule per introdurre opinioni: I believe, It seems to me that, As far as I’m concerned, From my point of view.' },
      { h: 'Accordo e disaccordo', b: 'Nel parlato spontaneo il disaccordo diretto («No, you’re wrong») è brusco. Alternative:\n\n- Accordo: {{en-GB|I totally agree.}} / {{en-GB|That’s a good point.}} / {{en-GB|Exactly.}}\n- Accordo parziale: {{en-GB|I see what you mean, but…}} / {{en-GB|That’s true up to a point.}}\n- Disaccordo cortese: {{en-GB|I’m not sure I agree.}} / {{en-GB|I’d say the opposite, actually.}}\n- Chiedere chiarimenti: {{en-GB|Could you give an example?}}\n\nLa differenza tra neutro e brusco spesso sta nel tono e nei *softeners* (actually, I’m afraid, I think).' },
      { h: 'Esempio guidato', b: 'Trasforma queste idee in un testo collegato: *Cars are convenient. They pollute. Many people use them.*\n\n→ **Although cars are convenient, they pollute the environment. As a result, many cities are encouraging public transport. In my opinion, we should reduce car use, even though this will take time.**\n\nAnalisi: *although* + frase; *as a result* collega causa-effetto; *even though* rafforza il contrasto.\n\nControllo: leggi ad alta voce. Se ogni frase sembra scollegata, manca un connettore.' },
      { h: 'Errori comuni', b: '- *Despite it was raining* → {{en-GB|Despite the rain / Although it was raining.}}\n- *In spite of he was tired* → {{en-GB|In spite of being tired / Although he was tired.}}\n- *Because of he left* → {{en-GB|Because he left / because of his departure.}}\n- Usare *but* e *although* insieme nella stessa frase.\n- Mettere *however* in mezzo a una frase senza punteggiatura: {{en-GB|It was cheap; however, it was poor.}}' },
      { h: 'Riepilogo', b: '- although + frase; despite + nome/-ing; however = nuova frase.\n- because + frase; because of + nome.\n- as a result / therefore per le conseguenze.\n- Opinione: posizione → ragioni + esempi → controargomento → conclusione.' }
    ],
    exercises: [
      mc('___ the rain, we went for a walk.', ['Although', 'Despite', 'However', 'Because'], 1),
      mc('___ it was raining, we went for a walk.', ['Despite', 'In spite of', 'Although', 'Because of'], 2),
      mc('He didn’t study. ___, he failed.', ['Although', 'As a result', 'Despite', 'Whereas'], 1),
      fill('Complete: We cancelled the trip ___ the storm.', ['because of', 'due to'], 'Nome → because of / due to.'),
      mc('My brother loves sport, ___ I prefer reading.', ['however', 'whereas', 'despite', 'because'], 1),
      mc('Which is the most polite way to disagree?', ['You’re wrong.', 'I’m not sure I agree.', 'That’s stupid.', 'No!'], 1),
      order('Metti in ordine', ['Although', 'it', 'was', 'expensive', 'we', 'bought', 'it'], 'Although + frase, + frase.')
    ],
    test: [
      mc('Choose the correct sentence.', ['Despite he was tired, he kept working.', 'Despite being tired, he kept working.', 'Despite of tired, he kept working.', 'Despite he tired, he kept working.'], 1),
      mc('Prices rose. ___, fewer people bought cars.', ['Although', 'In spite of', 'As a result', 'Whereas'], 2),
      mc('Which phrase introduces a conclusion?', ['For example', 'To sum up', 'Moreover', 'Whereas'], 1),
      mc('«I see what you mean, but…» is…', ['partial agreement', 'full agreement', 'an insult', 'a conclusion'], 0)
    ],
    cards: [
      card('c1', 'tuttavia', 'however', 'It’s cheap; however, it’s poor.'), card('c2', 'nonostante', 'despite', 'Despite the rain, we went.'), card('c3', 'mentre/invece', 'whereas', 'I like tea, whereas he likes coffee.'), card('c4', 'di conseguenza', 'consequently', 'Consequently, sales fell.'),
      card('c5', 'inoltre', 'moreover', 'Moreover, it saves time.'), card('c6', 'bilancia (pesare)', 'to outweigh', 'The benefits outweigh the risks.'), card('c7', 'svantaggio', 'drawback', 'The main drawback is the cost.'), card('c8', 'è vero fino a un certo punto', 'true up to a point', 'That’s true up to a point.')
    ],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Radio debate', text: 'Presenter: Should cities ban cars from the centre? Guest: I think so. Although some shops fear losing customers, studies show that foot traffic actually rises. Moreover, air quality improves. Presenter: But what about people with disabilities? Guest: That’s a fair point, and exceptions would clearly be needed. Overall, though, the benefits outweigh the drawbacks.',
      qs: [{ q: 'What is the guest’s position?', o: ['Against banning cars', 'In favour of banning cars from centres', 'Neutral', 'Against exceptions'], a: 1, kind: 'explicit' }, { q: 'Which concern does the presenter raise?', o: ['Cost', 'Pollution', 'People with disabilities', 'Shop owners'], a: 2, kind: 'explicit' }, { q: 'How does the guest respond?', o: ['He ignores it', 'He accepts the point and suggests exceptions', 'He gets angry', 'He changes topic'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'Although it was expensive, we bought it.', lang: 'en-GB' }, { text: 'In my opinion, the benefits outweigh the drawbacks.', lang: 'en-US' }, { text: 'I’m not sure I agree with you.', lang: 'en-AU' }],
    shadowing: [{ text: 'Although some shops fear losing customers, foot traffic actually rises.', lang: 'en-GB', tip: 'Pausa dopo la virgola, stress su fear, customers, actually, rises.' }, { text: 'That’s a fair point, but I’d say the opposite.', lang: 'en-US', tip: 'Tono cortese: discesa lieve su point.' }, { text: 'Overall, the benefits outweigh the drawbacks.', lang: 'en-AU', tip: '«Overall» con stress sulla prima sillaba.' }],
    speaking: [{ prompt: 'Give your opinion on remote work in 60–90 seconds, with two reasons and one counter-argument.', model: 'In my opinion, remote work is positive. First, it saves commuting time. Moreover, many people concentrate better at home. Admittedly, some feel isolated; however, meeting colleagues occasionally can solve this. Overall, the benefits outweigh the drawbacks.' }, { prompt: 'Politely disagree with this statement: «Learning a language is easy if you have talent.»', model: 'I see what you mean, but I’m not sure I agree. Talent helps, but regular practice is probably more important, whereas talent without practice doesn’t get you far.' }]
  });

  C.addTopic({
    id: 'eng-l3-narrative', subject: 'eng', stage: 'L3', title: 'Raccontare: tempi narrativi', minutes: 20, prereq: ['eng-l3-argument'],
    summary: 'Past simple, past continuous, past perfect, used to / would.',
    objectives: ['Costruire un racconto con sequenza e sfondo', 'Usare past perfect per anteriorità', 'Distinguere used to e would per abitudini passate'],
    pages: [
      { h: 'Obiettivo', b: 'Un buon racconto in inglese separa **gli eventi** (che avanzano la storia) dallo **sfondo** (che descrive la situazione) e segnala ciò che è successo **prima**. Imparerai a usare i tre tempi narrativi insieme.' },
      { h: 'I tre tempi', b: '- **Past simple**: eventi in sequenza. {{en-GB|He opened the door and walked in.}}\n- **Past continuous** (was/were + -ing): sfondo, azione in corso quando succede altro. {{en-GB|It was raining when we left.}}\n- **Past perfect** (had + participio): evento precedente a un altro passato. {{en-GB|When I arrived, the film had already started.}}\n\nUna storia ben fatta alterna: sfondo (continuous), eventi (simple), antefatti (perfect).' },
      { h: 'Simple + continuous', b: 'Azione lunga interrotta da un evento breve:\n> {{en-GB|I was cooking when the phone rang.}}\n\nDue azioni simultanee in corso: {{en-GB|She was reading while he was cooking.}}\n\nUna sequenza di eventi completati: {{en-GB|I got up, had a shower and left.}}\n\nSe usi past simple per due eventi vicini, la sequenza è temporale: {{en-GB|When I opened the door, the dog ran out.}} (prima apro, poi corre).' },
      { h: 'Past perfect e abitudini passate', b: 'Past perfect per l’**anteriorità**:\n> {{en-GB|I couldn’t get in because I had lost my key.}}\n> {{en-GB|By the time we arrived, they had left.}}\n\n**Used to** per abitudini o stati passati che non esistono più: {{en-GB|I used to play the piano.}} / {{en-GB|We used to live in Rome.}} (domanda: *Did you use to…?*)\n\n**Would** per abitudini ripetute (non per stati): {{en-GB|Every summer we would go to the sea.}} Non si dice *I would live in Rome*.' },
      { h: 'Esempio guidato', b: 'Racconta: *ieri sera / cena / mio fratello arrivare / io cucinare da due ore.*\n\n→ **Last night I was cooking dinner. I had been cooking for two hours when my brother arrived.** (had been cooking: past perfect continuous per durata prima di un evento)\n\nVersione più semplice, sempre corretta: **Last night I was cooking when my brother arrived. I had started at six.**\n\nControllo: stabilisci la linea del tempo; l’azione più antica prende il past perfect, lo sfondo il continuous, gli eventi il simple.' },
      { h: 'Errori comuni', b: '- *When I arrived, the film started* (se era già iniziato) → {{en-GB|had started.}}\n- *I was knowing him* → {{en-GB|I knew him.}} (verbo di stato)\n- *I used to went* → {{en-GB|I used to go.}}\n- *I would be a shy child* (stato) → {{en-GB|I used to be a shy child.}}\n- Usare past perfect per **ogni** passato: serve solo per anteriorità.' },
      { h: 'Riepilogo', b: '- Simple = eventi; continuous = sfondo/azione in corso; perfect = prima di.\n- Used to = abitudine/stato passato; would = solo azioni ripetute.\n- Connettori: when, while, as, by the time, after, before, as soon as.' }
    ],
    exercises: [
      mc('I ___ dinner when the phone rang.', ['cooked', 'was cooking', 'had cooked', 'cook'], 1),
      mc('When we arrived, the film ___ already ___.', ['has / started', 'had / started', 'was / starting', 'did / start'], 1),
      fill('Complete: I couldn’t get in because I ___ (lose) my key.', ['had lost'], 'Prima del momento passato: past perfect.'),
      mc('We ___ live in Rome when I was a child.', ['would', 'used to', 'use to', 'were used'], 1, 'Stato passato → used to.'),
      mc('Every summer we ___ to the sea.', ['would go', 'used to be going', 'were go', 'have gone'], 0, 'Azione ripetuta: would.'),
      order('Metti in ordine', ['She', 'was', 'reading', 'when', 'the', 'lights', 'went', 'out'], 'Continuous + when + simple.'),
      mc('He ___ the answer, so he didn’t need to ask.', ['knew', 'was knowing', 'has known', 'would know'], 0)
    ],
    test: [
      mc('By the time I got to the station, the train ___.', ['left', 'had left', 'was leaving', 'has left'], 1),
      mc('Which sentence is correct?', ['I would be a shy child.', 'I used to be a shy child.', 'I was used be a shy child.', 'I use to be a shy child.'], 1),
      fill('Complete: She ___ (walk) in the park when it started to rain.', ['was walking'], 'Azione in corso interrotta.'),
      mc('I was tired because I ___ all night.', ['worked', 'had been working', 'work', 'was worked'], 1)
    ],
    cards: [
      card('c1', 'racconto', 'story', 'Tell me a story.'), card('c2', 'sfondo', 'background', 'The background is described in past continuous.'), card('c3', 'prima che', 'by the time', 'By the time I got there, it was over.'), card('c4', 'perdere (chiavi)', 'to lose', 'I lost my keys.'),
      card('c5', 'accadere', 'to happen', 'What happened?'), card('c6', 'fortunatamente', 'luckily', 'Luckily, nobody was hurt.'), card('c7', 'improvvisamente', 'suddenly', 'Suddenly the lights went out.'), card('c8', 'alla fine', 'in the end', 'In the end, we found it.')
    ],
    listening: [{ id: 'l1', lang: 'en-AU', title: 'A bad trip', text: 'We were driving to the coast when the car suddenly stopped. It had been making a strange noise for days, but I hadn’t had time to check it. It was getting dark and it was raining, so we called a mechanic. While we were waiting, a farmer stopped to help. He said he used to be a mechanic himself. In the end, he fixed it in ten minutes.',
      qs: [{ q: 'What had been happening before the car stopped?', o: ['It had been making a strange noise', 'It had been raining', 'It had been fixed', 'It had been towed'], a: 0, kind: 'explicit' }, { q: 'What was the weather like?', o: ['Sunny', 'Dark and rainy', 'Foggy', 'Windy only'], a: 1, kind: 'explicit' }, { q: 'Why could the farmer fix the car?', o: ['He was a tourist', 'He had worked as a mechanic', 'He called a friend', 'It fixed itself'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'We were driving to the coast when the car stopped.', lang: 'en-AU' }, { text: 'By the time I arrived, they had already left.', lang: 'en-GB' }, { text: 'I used to play the piano when I was a child.', lang: 'en-US' }],
    shadowing: [{ text: 'It had been making a strange noise for days.', lang: 'en-AU', tip: 'Had been making: «hadbeen making» fuso, ritmo regolare.' }, { text: 'While we were waiting, a farmer stopped to help.', lang: 'en-GB', tip: 'Intonazione ascendente fino alla virgola.' }, { text: 'I used to be a very shy child.', lang: 'en-US', tip: '«used to» → /juːstə/.' }],
    speaking: [{ prompt: 'Tell a short story about a day when something went wrong. Use background, events and something that had happened before.', model: 'Last winter I was going to the airport when my taxi broke down. I had left home early, so I still had time. I called another taxi and arrived just before the gate closed.' }, { prompt: 'Describe something you used to do as a child that you don’t do now.', model: 'When I was a child, I used to collect stickers. Every Sunday I would go to the kiosk with my father to buy new packs.' }]
  });

  C.addTopic({
    id: 'eng-l3-accents', subject: 'eng', stage: 'L3', title: 'Accenti: britannico, americano, australiano', minutes: 20, prereq: ['eng-l3-argument'],
    summary: 'Differenze di suono e lessico: come riconoscere le tre varietà nel parlato.',
    objectives: ['Riconoscere i tratti principali di BrE, AmE e AusE', 'Conoscere le differenze lessicali frequenti', 'Allenare l’ascolto con accenti diversi'],
    pages: [
      { h: 'Obiettivo', b: 'Imparare un solo accento rende difficile capire gli altri. Qui impari a **riconoscere i tratti ricorrenti** di inglese britannico, americano e australiano, per capirli tutti senza dover imitarli tutti.\n\nObiettivo di produzione: sceglierne uno come modello (in coerenza) e capire gli altri.' },
      { h: 'Suoni: le differenze principali', b: '**Rotico / non rotico**: l’americano pronuncia la /r/ dopo la vocale ({{en-US|car, hard, water}}); il britannico standard e l’australiano di solito no ({{en-GB|car}} → «cah»).\n\n**T intervocalica**: l’americano «flappa» la /t/ in /ɾ/ quasi /d/: {{en-US|water, better, city}}. Il britannico mantiene una /t/ più netta; nel parlato informale può diventare glottal stop ({{en-GB|bottle}}).\n\n**Vocale di *bath*, *dance*, *can’t***: britannico /ɑː/ (bahth), americano /æ/ (bæth).\n\n**Australiano**: vocali tipicamente più «spostate»: *mate* ≈ «maite», *day* ≈ «dai»; intonazione spesso ascendente a fine frase; molte abbreviazioni: *arvo* (afternoon), *brekkie* (breakfast).' },
      { h: 'Lessico e ortografia', b: 'Britannico → americano:\n- flat → apartment\n- lift → elevator\n- lorry → truck\n- autumn → fall\n- holiday → vacation\n- biscuit → cookie\n- petrol → gas(oline)\n- pavement → sidewalk\n\nAustraliano: *ute* (pick-up), *servo* (distributore), *thongs* (infradito), *no worries* (prego, non c’è problema).\n\nOrtografia: colour/color, centre/center, organise/organize, travelling/traveling.' },
      { h: 'Come allenare l’orecchio', b: '1. Scegli **tre fonti** costanti, una per accento (es. un podcast, un canale video, un notiziario).\n2. Ascolta ogni settimana 10 minuti per fonte, **senza sottotitoli** nella prima passata.\n3. Annota **due tratti** ricorrenti per fonte (es. flap, rising intonation).\n4. Usa lo shadowing su brevi frammenti per interiorizzare il ritmo.\n5. Ritorna a materiali già ascoltati dopo alcuni giorni: la ripetizione consolida.\n\nNon mescolare l’**output**: quando parli, resta coerente (es. «lift» e «holiday» insieme a «color» sono incoerenti, ma non sono errori gravi).' },
      { h: 'Esempio guidato', b: 'Tre persone dicono «I can’t park here»:\n\n- {{en-GB|I can’t park here.}} — /kɑːnt/, /r/ non pronunciata in «park» → «pahk».\n- {{en-US|I can’t park here.}} — /kænt/, /r/ pronunciata → «parrk».\n- {{en-AU|I can’t park here.}} — vocale di «can’t» lunga, /r/ assente, «here» più chiuso.\n\nControllo: riascolta le tre versioni e prova a descrivere in una frase quale tratto hai notato per ciascuna.' },
      { h: 'Errori comuni', b: '- Pensare che un accento sia «sbagliato»: sono varietà legittime.\n- Rinunciare a un audio perché «non è l’accento che conosco»: allena proprio quello.\n- Imitare un accento senza padroneggiarne i tratti: scegli un modello e resta coerente.\n- Ignorare il lessico: capire «lorry» o «fall» evita incomprensioni.' },
      { h: 'Riepilogo', b: '- /r/ rotica: americano sì, britannico e australiano no.\n- T tra vocali: flap in americano.\n- bath/dance: /ɑː/ britannico, /æ/ americano.\n- Australiano: vocali spostate, intonazione ascendente, abbreviazioni.\n- Allena tre fonti, senza sottotitoli, e usa lo shadowing.' }
    ],
    exercises: [
      mc('Which accent usually pronounces the /r/ after a vowel in «car»?', ['British (RP)', 'American', 'Australian', 'All of them'], 1),
      listen('I’ll take the lift to the third floor.', 'en-GB', 'The speaker is most likely…', ['British', 'American', 'Neither', 'It cannot be known'], 0, '«lift» è tipicamente britannico/australiano; negli USA: elevator.'),
      mc('«Water» sounds like «wader» in…', ['British', 'American', 'Both', 'Neither'], 1, 'Flap della /t/ americana.'),
      mc('What is an Australian «ute»?', ['A tool', 'A pick-up truck', 'A hat', 'A snack'], 1),
      mc('Which is the American word for «autumn»?', ['fall', 'leaf', 'cool', 'harvest'], 0),
      listen('I’m going to the shops this arvo.', 'en-AU', 'What does «arvo» mean?', ['afternoon', 'morning', 'evening', 'avocado'], 0),
      mc('Which strategy trains your ear best?', ['One accent only', 'Regular listening to several sources', 'Only subtitles', 'Only textbooks'], 1)
    ],
    test: [
      mc('«Bath» with /ɑː/ is typically…', ['British', 'American', 'Both', 'None'], 0),
      mc('A typical Australian trait is…', ['Rising intonation at the end of sentences', 'Strong rotic /r/', 'Flap /t/ only', 'No vowels'], 0),
      mc('«Sidewalk» is…', ['British', 'American', 'Australian', 'Scottish only'], 1),
      listen('Let’s take the elevator to the apartment.', 'en-US', 'This is most likely…', ['American', 'British', 'Australian', 'Impossible to say'], 0)
    ],
    cards: [
      card('c1', 'ascensore (UK)', 'lift', 'Take the lift.'), card('c2', 'ascensore (US)', 'elevator', 'Take the elevator.'), card('c3', 'marciapiede (UK)', 'pavement', 'Walk on the pavement.'), card('c4', 'marciapiede (US)', 'sidewalk', 'Walk on the sidewalk.'),
      card('c5', 'camion (UK)', 'lorry', 'A lorry blocked the road.'), card('c6', 'autunno (US)', 'fall', 'I love fall.'), card('c7', 'non c’è problema (AU)', 'no worries', 'Thanks! — No worries.'), card('c8', 'accento', 'accent', 'She has a strong accent.')
    ],
    listening: [{ id: 'l1', lang: 'en-AU', title: 'Arvo plans', text: 'G’day! I’m heading to the servo for some petrol, then I’ll pick up some brekkie from the cafe. This arvo I’m meeting Jess at the beach. If you want, you can come along — no worries if you’re busy, though!',
      qs: [{ q: 'What will the speaker do first?', o: ['Meet Jess', 'Get petrol', 'Go to the beach', 'Have lunch'], a: 1, kind: 'explicit' }, { q: 'When will the speaker meet Jess?', o: ['In the morning', 'In the afternoon', 'At night', 'Tomorrow'], a: 1, kind: 'explicit' }, { q: 'The speaker’s attitude towards the invitation is…', o: ['Insistent', 'Relaxed and friendly', 'Angry', 'Formal'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'I’ll take the lift to the third floor.', lang: 'en-GB' }, { text: 'Let’s take the elevator to the apartment.', lang: 'en-US' }, { text: 'No worries, mate, see you this afternoon.', lang: 'en-AU' }],
    shadowing: [{ text: 'I can’t park here, there’s a lorry in the way.', lang: 'en-GB', tip: '/ɑː/ in can’t; r finale muta in «here/there».' }, { text: 'I’ll get a better water bottle at the city store.', lang: 'en-US', tip: 'Flap: better, water, city.' }, { text: 'G’day! No worries, see you this arvo.', lang: 'en-AU', tip: 'Intonazione ascendente e riduzioni.' }],
    speaking: [{ prompt: 'Choose one accent as your model. Say three sentences about your day and note which words you pronounce in your model accent.', model: 'This morning I went to the office by bus. In the afternoon I had a long meeting. In the evening I cooked pasta and watched a film.' }, { prompt: 'Explain to a friend how to recognise an American accent compared to a British one.', model: 'Americans pronounce the r at the end of words, like in «car». Between vowels the t sounds like a d, as in «water». British speakers usually drop the final r and use a clear t.' }]
  });
})(window.ST = window.ST || {});
