/* Inglese — ampliamento stage L5 (B2+ / primo C1). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'eng', stage: 'L5', minutes: 20, prereq: ['eng-l4-collocations'] }, o));

  T({ id: 'eng-l5-nominalisation', title: 'Nominalizzazione e scrittura formale', summary: 'Trasformare verbi e aggettivi in nomi; frasi dense e impersonali.',
    objectives: ['Trasformare frasi con verbi in frasi con nomi', 'Usare lo stile impersonale e il passivo', 'Rendere un testo più formale e accademico'],
    pages: [
      { h: 'Obiettivo', b: 'Nello scritto formale e accademico le informazioni sono spesso **concentrate in nomi** (*the increase in prices*) invece di esprimerle con verbi (*prices increased*). È un tratto tipico del livello C1.' },
      { h: 'Dal verbo al nome', b: '- decide → **decision**, develop → **development**, fail → **failure**, arrive → **arrival**\n- grow → **growth**, choose → **choice**, behave → **behaviour**, respond → **response**\n\nTrasformazione: *The company expanded quickly, and this surprised everyone.* → **The rapid expansion of the company surprised everyone.**' },
      { h: 'Dall’aggettivo al nome', b: '- important → **importance**, different → **difference**, able → **ability**, safe → **safety**\n- efficient → **efficiency**, available → **availability**\n\n> *The system is very efficient.* → **The efficiency of the system is remarkable.**' },
      { h: 'Strutture impersonali e passive', b: '- {{en-GB|It is widely believed that…}} / {{en-GB|It has been argued that…}}\n- {{en-GB|There is a growing need for…}}\n- {{en-GB|The results suggest that…}} / {{en-GB|This indicates a shift in…}}\n- {{en-GB|Attention should be paid to…}}\n\nEvitano *I* e *you* e danno un tono oggettivo.' },
      { h: 'Frasi lunghe ma chiare', b: 'Una frase nominalizzata può essere densa: **evita di accumularne troppe**. Regole:\n1. Un concetto principale per frase.\n2. Verbo semplice dopo il nome complesso: *The rise in unemployment caused concern.*\n3. Dividi se superi 30 parole.\n4. Usa connettori per guidare il lettore.' },
      { h: 'Esempio guidato', b: 'Riscrivi in stile formale: *«Because many people use smartphones, we are worried about their health.»*\n\n→ **The widespread use of smartphones has raised concerns about public health.**\n\nControllo: verbo → nome (*use*), causa/effetto nel verbo (*raised*), tono impersonale.' },
      { h: 'Errori comuni', b: '- Usare nominalizzazioni nel parlato informale: suona artificioso.\n- Accumulare troppi nomi: *the implementation development procedure review*.\n- Perdere il soggetto reale.\n- Mescolare registro formale e informale.\n- Non controllare le collocazioni: *do/make a decision*.' },
      { h: 'Riepilogo', b: '- Verbi → nomi: decide → decision, grow → growth.\n- Aggettivi → nomi: efficient → efficiency.\n- It is widely believed that…; The results suggest…\n- Densità controllata.' }
    ],
    exercises: [
      mc('The noun from «decide» is…', ['decision', 'decisement', 'decideness', 'decider'], 0),
      mc('The noun from «grow» is…', ['growth', 'growing', 'grew', 'growen'], 0),
      mc('Rewrite: «Prices increased.» →', ['There was an increase in prices.', 'The increase prices.', 'Increasing price.', 'It increase prices.'], 0),
      mc('Which is more formal?', ['The results suggest that…', 'We think that…', 'Look, it seems…', 'I guess…'], 0),
      mc('The noun from «efficient» is…', ['efficiency', 'efficientness', 'effication', 'efficience'], 0),
      mc('Which sentence is nominalised?', ['The rapid expansion of the company surprised everyone.', 'The company expanded rapidly.', 'They expand the company.', 'The company is expanding.'], 0),
      mc('Impersonal structure:', ['It is widely believed that…', 'I believe that…', 'You should…', 'We can…'], 0)
    ],
    test: [
      mc('The noun from «fail» is…', ['failure', 'failing', 'failment', 'failness'], 0),
      mc('«There is a growing need for» is…', ['formal and impersonal', 'slang', 'a question', 'a command'], 0),
      mc('Too many stacked nouns make a text…', ['hard to read', 'clearer', 'shorter', 'more informal'], 0),
      mc('Rewrite: «Many people use smartphones.» (formal)', ['The widespread use of smartphones…', 'People use smartphone.', 'Use of the people.', 'Smartphones many.'], 0)
    ],
    cards: [card('c1', 'espansione', 'expansion', 'rapid expansion'), card('c2', 'crescita', 'growth', 'economic growth'), card('c3', 'diffuso', 'widespread', 'widespread use'), card('c4', 'preoccupazione', 'concern', 'raise concerns'),
      card('c5', 'indicare', 'to indicate', 'This indicates a shift.'), card('c6', 'suggerire (dati)', 'to suggest', 'The results suggest…'), card('c7', 'sostenuto', 'it has been argued', 'It has been argued that…'), card('c8', 'cambiamento', 'shift', 'a shift in attitude')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A formal talk', text: 'The widespread use of smartphones has raised concerns about public health. It is widely believed that excessive screen time affects sleep. The results of recent research suggest a significant shift in teenagers’ habits. There is a growing need for clearer guidelines, and attention should be paid to the role of schools.',
      qs: [{ q: 'What has the widespread use of smartphones caused?', o: ['Concerns about public health', 'A fall in prices', 'More sleep', 'New schools'], a: 0, kind: 'explicit' }, { q: 'What is widely believed?', o: ['Screen time affects sleep', 'Phones are cheap', 'Schools are closed', 'Teenagers sleep more'], a: 0, kind: 'explicit' }, { q: 'What is the style of the talk?', o: ['Formal and impersonal', 'Informal', 'Angry', 'Humorous'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'The results suggest a significant shift.', lang: 'en-GB' }, { text: 'There is a growing need for guidelines.', lang: 'en-US' }, { text: 'It is widely believed that sleep matters.', lang: 'en-AU' }],
    shadowing: [{ text: 'The widespread use of smartphones has raised concerns.', lang: 'en-GB', tip: 'Frase lunga: respira dopo smartphones.' }, { text: 'It is widely believed that sleep is essential.', lang: 'en-US', tip: 'Registro formale: ritmo regolare.' }, { text: 'Attention should be paid to the role of schools.', lang: 'en-AU', tip: 'Paid to: legati.' }],
    speaking: [{ prompt: 'Explain a social issue in a formal register using two nominalisations.', model: 'The rapid growth of tourism has caused concerns about housing. There is a growing need for regulation, and attention should be paid to residents’ needs.' }, { prompt: 'Rephrase this informally and then formally: «People are worried because prices keep going up.»', model: 'Informal: Everyone is worried because prices keep going up. Formal: The continuing rise in prices has raised widespread concern.' }] });

  T({ id: 'eng-l5-spoken-discourse', title: 'Discorso parlato: segnali e coerenza nella conversazione', summary: 'Discourse markers del parlato: well, actually, to be honest, anyway.',
    objectives: ['Riconoscere e usare i segnali discorsivi più frequenti', 'Strutturare un turno di parola lungo', 'Capire il parlato spontaneo di madrelingua'],
    pages: [
      { h: 'Obiettivo', b: 'Il parlato spontaneo è diverso dallo scritto: frasi incomplete, ripetizioni, segnali discorsivi. Capirli è essenziale per il C1 e per seguire serie e podcast.' },
      { h: 'Segnali di apertura e transizione', b: '- **Well,** (esitazione, introduce una risposta non ovvia)\n- **So,** (introduce un nuovo punto / conclusione)\n- **Anyway,** (torna all’argomento / chiude)\n- **By the way,** (digressione)\n- **Speaking of which,** (collega a qualcosa appena detto)\n\n> {{en-GB|Well, it’s not that simple.}} / {{en-GB|Anyway, as I was saying…}}' },
      { h: 'Atteggiamento e opinione', b: '- **Actually,** (in realtà, correzione/sorpresa)\n- **To be honest / Frankly,** (sincerità)\n- **Basically,** (in sostanza)\n- **I mean,** (riformulazione)\n- **Obviously / Clearly,**\n- **Fortunately / Unfortunately,**\n\n> {{en-GB|To be honest, I didn’t like it.}} / {{en-GB|I mean, it’s a good idea, but it’s expensive.}}' },
      { h: 'Collegare e rafforzare', b: '- **Besides / On top of that** (aggiunta)\n- **Still / All the same / Even so** (nonostante)\n- **After all** (in fondo, dopo tutto)\n- **As a matter of fact** (anzi, per l’esattezza)\n- **Right? / You know?** (ricerca di conferma)\n\n> {{en-GB|It’s expensive. Still, it’s worth it.}}' },
      { h: 'Il parlato reale', b: 'Nel parlato spontaneo senti:\n- **frasi non finite**: *If I’d known, I’d have…*\n- **ripetizioni**: *I think, I think we should…*\n- **riformulazioni**: *It’s, well, it’s complicated.*\n- **contrazioni forti**: *gonna, wanna, kinda, dunno*\n\nNon cercare di capire ogni parola: segui il senso e i segnali.' },
      { h: 'Esempio guidato', b: 'Conversazione:\n\n- A: *So, did you like the film?*\n- B: *Well, to be honest, not really. I mean, the acting was great, but the plot was, you know, kind of predictable.*\n- A: *Actually, I agree. Anyway, shall we get dinner?*\n\nAnalisi: *well* (esitazione), *to be honest* (sincerità), *I mean* (riformulazione), *actually* (accordo/correzione), *anyway* (cambia argomento).' },
      { h: 'Errori comuni', b: '- Usare *actually* come «attualmente».\n- Abusare di *like* e *you know*.\n- Usare questi segnali nello scritto formale.\n- Tradurli con parole fisse: il significato dipende dal contesto.\n- Non riconoscere il cambio di argomento con *anyway*.' },
      { h: 'Riepilogo', b: '- Well, so, anyway, by the way.\n- Actually, to be honest, I mean, basically.\n- Still, after all, as a matter of fact.\n- Parlato: frasi incomplete e riformulazioni.' }
    ],
    exercises: [
      mc('«Actually» in speech often means…', ['in fact (correction)', 'currently', 'never', 'maybe'], 0),
      mc('«Anyway» is often used to…', ['return to a topic or close', 'start a sentence about the past', 'ask a question', 'ask for money'], 0),
      mc('«To be honest» introduces…', ['a sincere opinion', 'a joke', 'a command', 'a question'], 0),
      mc('«I mean» is used to…', ['rephrase', 'insult', 'count', 'end the talk'], 0),
      mc('«By the way» introduces…', ['a digression', 'the conclusion', 'a command', 'an apology'], 0),
      mc('«After all» can mean…', ['in the end / you must remember', 'before all', 'after the party', 'everybody'], 0),
      mc('«Even so» means…', ['nevertheless', 'also', 'because', 'before'], 0)
    ],
    test: [
      mc('Which marker shows hesitation?', ['Well', 'Therefore', 'Moreover', 'Hence'], 0),
      mc('«As a matter of fact» means…', ['in fact', 'in the past', 'by chance', 'as a rule'], 0),
      mc('«Besides» is used to…', ['add a reason', 'contrast', 'end', 'apologise'], 0),
      mc('A natural fragment of spontaneous speech is…', ['an unfinished sentence', 'a full formal essay', 'a legal clause', 'a dictionary entry'], 0)
    ],
    cards: [card('c1', 'in realtà', 'actually', 'Actually, I disagree.'), card('c2', 'a dire il vero', 'to be honest', 'To be honest, I’m tired.'), card('c3', 'comunque', 'anyway', 'Anyway, let’s move on.'), card('c4', 'tra l’altro', 'by the way', 'By the way, I saw Anna.'),
      card('c5', 'in sostanza', 'basically', 'Basically, it’s a scam.'), card('c6', 'in fondo', 'after all', 'After all, it’s just a game.'), card('c7', 'ciononostante', 'even so', 'Even so, it’s good.'), card('c8', 'per di più', 'on top of that', 'On top of that, it rained.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'After the film', text: 'So, what did you think? Well, to be honest, not much. I mean, the acting was great, but the story was, you know, kind of predictable. Actually, I agree. Still, the music was amazing. Anyway, shall we get dinner? By the way, I found a new restaurant near the station. As a matter of fact, I booked a table for eight.',
      qs: [{ q: 'What did the speaker think about the film?', o: ['Not much', 'It was perfect', 'It was terrible', 'It was boring'], a: 0, kind: 'explicit' }, { q: 'What was good about it?', o: ['The acting and music', 'The story', 'The length', 'The place'], a: 0, kind: 'explicit' }, { q: 'What can we infer at the end?', o: ['The restaurant is already booked', 'They will stay home', 'They hate restaurants', 'They will go to the cinema again'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'To be honest, I didn’t like it.', lang: 'en-GB' }, { text: 'Anyway, shall we get dinner?', lang: 'en-US' }, { text: 'As a matter of fact, I booked a table.', lang: 'en-AU' }],
    shadowing: [{ text: 'Well, to be honest, not really.', lang: 'en-US', tip: 'Pausa naturale dopo well.' }, { text: 'I mean, it’s a good idea, but it’s expensive.', lang: 'en-GB', tip: 'Riformulazione: intonazione piatta poi ascendente.' }, { text: 'Anyway, shall we get dinner?', lang: 'en-AU', tip: 'Cambio argomento.' }],
    speaking: [{ prompt: 'Give your opinion about a film or restaurant using at least four discourse markers.', model: 'Well, to be honest, I didn’t love it. I mean, the food was fine, but, you know, it was kind of expensive. Still, the service was great. Anyway, I’d go back.' }, { prompt: 'Change the topic naturally in a conversation.', model: 'Anyway, enough about work. By the way, did you see the match last night? Actually, I missed it. Speaking of which, are you free on Saturday?' }] });

  T({ id: 'eng-l5-implicit-meaning', title: 'Significati impliciti: ironia, sottintesi e tono', summary: 'Capire ciò che non è detto: sarcasmo, eufemismi, understatement, humour britannico.',
    objectives: ['Riconoscere ironia e sarcasmo', 'Capire understatement ed eufemismi', 'Usare il tono per interpretare l’atteggiamento del parlante'],
    pages: [
      { h: 'Obiettivo', b: 'Capire una lingua significa anche capire **ciò che non è detto**. Ironia, sarcasmo, understatement e sottintesi sono comuni nell’inglese quotidiano, soprattutto britannico, e sono richiesti nelle domande di inferenza.' },
      { h: 'Ironia e sarcasmo', b: '- **Ironia**: dire il contrario di ciò che si pensa, o notare un contrasto: *What lovely weather!* (sotto la pioggia).\n- **Sarcasmo**: ironia con intento di ferire/criticare: *Oh, great, another meeting.*\n\nIndizi: **tono** esagerato, contesto che contraddice, frasi positive su situazioni negative, intonazione piatta o prolungata.' },
      { h: 'Understatement ed eufemismi', b: '**Understatement** = minimizzare: *It’s not bad* = è ottimo; *a bit of a problem* = un grosso problema; *I was slightly annoyed* = ero furioso.\n\n**Eufemismi**: *pass away* (morire), *let go* (licenziare), *between jobs* (disoccupato), *a bit tipsy* (ubriaco).\n\nIl British English usa molto l’understatement: *Not bad at all* può essere un grande complimento.' },
      { h: 'Sottintesi e implicature', b: 'Spesso diciamo meno di ciò che vogliamo comunicare:\n- *It’s a bit cold in here.* = Chiudi la finestra.\n- *Do you have the time?* = Che ore sono?\n- *I’d love to, but I have work.* = No, grazie.\n\nPer interpretare: chiedi **perché lo dice** e **che cosa vuole ottenere**.' },
      { h: 'Il tono come informazione', b: 'Lo stesso testo cambia significato col tono:\n- *Fine.* (neutro) / *Fine!* (arrabbiato) / *Fine…* (rassegnato)\n- *Really?* con intonazione ascendente = sorpresa; discendente = scetticismo.\n\nNell’ascolto, valuta: **tono, pause, enfasi, contesto**.' },
      { h: 'Esempio guidato', b: 'Ascolti: *«Oh, brilliant. Another delay. Just what I needed.»*\n\nDomanda: **How does the speaker feel?**\n→ Annoyed. Indizi: *Oh, brilliant* (sarcasmo), *just what I needed* (contrario di ciò che pensa), contesto negativo (*delay*).\n\nControllo: parole positive + situazione negativa = sarcasmo.' },
      { h: 'Errori comuni', b: '- Prendere alla lettera un’espressione ironica.\n- Non cogliere l’understatement britannico.\n- Usare il sarcasmo con persone che non conosci: può offendere.\n- Rispondere a *Do you have the time?* con *Yes.*\n- Ignorare il contesto e il tono.' },
      { h: 'Riepilogo', b: '- Ironia/sarcasmo: dire il contrario; indizi di tono e contesto.\n- Understatement: minimizzare.\n- Sottintesi: chiedi scopo e contesto.\n- Il tono cambia il significato.' }
    ],
    exercises: [
      listen('Oh, brilliant. Another delay. Just what I needed.', 'en-GB', 'How does the speaker feel?', ['Annoyed', 'Happy', 'Neutral', 'Excited'], 0, 'Sarcasmo: sembra positivo ma è negativo.'),
      mc('«It’s not bad at all» (British) can mean…', ['it’s very good', 'it’s terrible', 'it’s boring', 'it’s average'], 0),
      mc('«It’s a bit cold in here» may mean…', ['please close the window', 'I like cold', 'the room is empty', 'I am a doctor'], 0),
      mc('«Between jobs» is a euphemism for…', ['unemployed', 'very busy', 'travelling', 'retired'], 0),
      mc('Understatement means…', ['saying less than what you mean', 'shouting', 'lying', 'a long speech'], 0),
      listen('What a lovely day! We’ll get soaked.', 'en-US', 'This is probably…', ['ironic', 'literal', 'a question', 'a joke about food'], 0),
      mc('Sarcasm is…', ['irony used to criticise', 'a type of food', 'a polite request', 'a grammar rule'], 0)
    ],
    test: [
      mc('«I’d love to, but I have work.» usually means…', ['no, I can’t', 'yes, I will', 'maybe later', 'I love work'], 0),
      mc('«A bit of a problem» is often…', ['a serious problem', 'no problem', 'a joke', 'a small gift'], 0),
      listen('Oh, great. Another meeting.', 'en-AU', 'How does the speaker feel?', ['Annoyed', 'Delighted', 'Calm', 'Surprised'], 0),
      mc('Which clue suggests sarcasm?', ['positive words in a negative situation', 'a long pause only', 'a formal word', 'a question'], 0)
    ],
    cards: [card('c1', 'ironia', 'irony', 'There’s irony in that.'), card('c2', 'sarcasmo', 'sarcasm', 'That’s sarcasm.'), card('c3', 'eufemismo', 'euphemism', '«Pass away» is a euphemism.'), card('c4', 'minimizzare', 'understatement', 'a classic British understatement'),
      card('c5', 'sottinteso', 'implication', 'the implication is clear'), card('c6', 'tono', 'tone', 'his tone was cold'), card('c7', 'licenziare', 'to let go', 'They let him go.'), card('c8', 'alticcio', 'tipsy', 'a bit tipsy')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A rainy picnic', text: 'Oh, lovely weather for a picnic. It’s only a bit wet. Well, not bad at all, considering we’re soaked to the skin. I’d love to stay, but I think we should go home. It’s a bit cold in here, don’t you think? Honestly, it’s not exactly what I’d call fun, but at least the sandwiches were nice.',
      qs: [{ q: 'What is the speaker’s attitude to the weather?', o: ['Ironic: it is bad', 'Delighted', 'Neutral', 'Surprised'], a: 0, kind: 'implicit' }, { q: 'What does «I’d love to stay, but…» suggest?', o: ['She wants to leave', 'She wants to stay', 'She is angry', 'She is hungry'], a: 0, kind: 'implicit' }, { q: 'What was positive?', o: ['The sandwiches', 'The weather', 'The place', 'The company'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'Oh, brilliant. Another delay.', lang: 'en-GB' }, { text: 'It’s not bad at all.', lang: 'en-US' }, { text: 'It’s a bit cold in here.', lang: 'en-AU' }],
    shadowing: [{ text: 'Oh, lovely weather for a picnic.', lang: 'en-GB', tip: 'Ironia: tono esagerato.' }, { text: 'It’s not bad at all, considering.', lang: 'en-US', tip: 'Understatement: tono leggero.' }, { text: 'I’d love to, but I have work.', lang: 'en-AU', tip: 'Intonazione discendente su work.' }],
    speaking: [{ prompt: 'Say the same sentence in two tones (sincere and sarcastic): «Great job.»', model: 'Sincere: Great job, well done! Sarcastic: Oh, great job, really. Just what we needed. (The meaning changes with tone and context.)' }, { prompt: 'Explain what someone really means when they say «It’s a bit cold in here».', model: 'They probably want someone to close the window or turn on the heating. It’s an indirect request, not a comment about the temperature.' }] });

  T({ id: 'eng-l5-presenting-debating', title: 'Presentare e discutere: presentazioni e dibattiti', summary: 'Struttura di una presentazione, gestione delle domande, argomentare e confutare.',
    objectives: ['Strutturare una presentazione di 3–5 minuti', 'Rispondere a domande e obiezioni', 'Argomentare e confutare in modo cortese'],
    pages: [
      { h: 'Obiettivo', b: 'A livello C1 devi saper **presentare** idee a un pubblico e **discutere** con argomenti, anche in disaccordo. Questa lezione ti dà struttura e formule.' },
      { h: 'Struttura di una presentazione', b: '1. **Apertura**: *Good morning, everyone. Today I’d like to talk about…*\n2. **Panoramica**: *I’ll cover three points: first…, second…, finally…*\n3. **Sviluppo**: un punto alla volta, con dati ed esempi.\n4. **Conclusione**: *To sum up… / The key takeaway is…*\n5. **Domande**: *I’d be happy to take any questions.*\n\nConsiglio: una frase per diapositiva, niente lettura del testo.' },
      { h: 'Segnali di transizione', b: '- {{en-GB|Let’s move on to…}} / {{en-GB|Turning to…}}\n- {{en-GB|As you can see on this slide…}}\n- {{en-GB|This brings me to my next point.}}\n- {{en-GB|Before I go on, let me clarify…}}\n- {{en-GB|To illustrate this, consider…}}\n\nPausa e intonazione contano quanto le parole.' },
      { h: 'Gestire le domande', b: '- Non capito: {{en-GB|Could you rephrase that, please?}}\n- Guadagnare tempo: {{en-GB|That’s an interesting question.}}\n- Non so: {{en-GB|I don’t have the exact figures, but I’ll find out and get back to you.}}\n- Obiezione: {{en-GB|I see your point, but…}} / {{en-GB|That’s true to some extent, however…}}\n- Rimandare: {{en-GB|Perhaps we could discuss that afterwards.}}' },
      { h: 'Argomentare e confutare', b: '**Argomento**: *Claim → Reason → Evidence → Link back.*\n\nConfutare con garbo:\n- {{en-GB|While I understand your concern, the data suggest…}}\n- {{en-GB|I’d like to challenge that assumption.}}\n- {{en-GB|On the contrary, …}}\n- {{en-GB|That may be true in some cases, but it doesn’t apply here.}}\n\nCritica l’**idea**, non la persona.' },
      { h: 'Esempio guidato', b: '*«Remote work is less productive.»* Risposta:\n\n**I understand the concern, but the evidence suggests otherwise. A recent study found that productivity rose by 13% among remote workers. That said, I agree that communication needs attention. To address this, teams could meet in person once a month.**\n\nControllo: riconosci, confuti con un dato, concedi un punto, proponi una soluzione.' },
      { h: 'Errori comuni', b: '- Leggere le diapositive ad alta voce.\n- Parlare troppo in fretta.\n- Dire *you are wrong* invece di *I see it differently*.\n- Dimenticare la conclusione.\n- Non guardare il pubblico.' },
      { h: 'Riepilogo', b: '- Apertura, panoramica, sviluppo, conclusione, domande.\n- Transizioni: let’s move on to…, this brings me to…\n- Confutare: I understand your point, but…\n- Claim → reason → evidence.' }
    ],
    exercises: [
      mc('Which is a good opening?', ['Good morning, everyone. Today I’d like to talk about…', 'Hey, so, um, yeah.', 'I don’t know what to say.', 'Slide one.'], 0),
      mc('«This brings me to my next point» is a…', ['transition', 'question', 'apology', 'joke'], 0),
      mc('A polite way to disagree:', ['I see your point, but…', 'You are wrong.', 'No!', 'That’s stupid.'], 0),
      mc('If you don’t know an answer:', ['I’ll find out and get back to you.', 'I don’t care.', 'Never.', 'Ask someone else.'], 0),
      mc('A strong argument has…', ['claim, reason, evidence', 'only a claim', 'only an example', 'a joke'], 0),
      mc('To close a talk you say…', ['To sum up…', 'Let’s start…', 'Firstly…', 'By the way…'], 0),
      mc('Critique the…', ['idea, not the person', 'person, not the idea', 'speaker’s clothes', 'audience'], 0)
    ],
    test: [
      mc('«Turning to…» is used to…', ['change topic', 'end', 'ask', 'apologise'], 0),
      mc('«To illustrate this, consider…» introduces…', ['an example', 'a question', 'a joke', 'a break'], 0),
      mc('A good way to answer a hard question:', ['That’s an interesting question.', 'I refuse.', 'No comment angrily.', 'Silence.'], 0),
      mc('Which is better to avoid?', ['Reading slides aloud', 'Eye contact', 'Pausing', 'Examples'], 0)
    ],
    cards: [card('c1', 'presentazione', 'presentation', 'give a presentation'), card('c2', 'obiezione', 'objection', 'raise an objection'), card('c3', 'confutare', 'to refute', 'refute an argument'), card('c4', 'sfidare', 'to challenge', 'challenge an assumption'),
      card('c5', 'concedere', 'to concede', 'I concede the point.'), card('c6', 'prova/evidenza', 'evidence', 'The evidence suggests…'), card('c7', 'conclusione chiave', 'key takeaway', 'The key takeaway is…'), card('c8', 'chiarire', 'to clarify', 'Let me clarify.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'A short presentation', text: 'Good morning, everyone. Today I’d like to talk about remote work. I’ll cover three points: productivity, communication and well-being. First, productivity. A recent study found that it rose by thirteen percent. This brings me to my next point: communication. While I understand the concern about isolation, the evidence suggests that regular meetings can help. To sum up, remote work can work well if it is well organised. I’d be happy to take any questions.',
      qs: [{ q: 'What is the topic of the talk?', o: ['Remote work', 'Travel', 'Sport', 'Cooking'], a: 0, kind: 'explicit' }, { q: 'How many points will the speaker cover?', o: ['Three', 'Two', 'Five', 'One'], a: 0, kind: 'explicit' }, { q: 'What is the speaker’s conclusion?', o: ['Remote work can work well if organised', 'Remote work is bad', 'Remote work should stop', 'Nothing'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'Today I’d like to talk about remote work.', lang: 'en-GB' }, { text: 'This brings me to my next point.', lang: 'en-US' }, { text: 'I’d be happy to take any questions.', lang: 'en-AU' }],
    shadowing: [{ text: 'Good morning, everyone. Today I’d like to talk about remote work.', lang: 'en-US', tip: 'Ritmo calmo, pause tra le frasi.' }, { text: 'While I understand the concern, the evidence suggests otherwise.', lang: 'en-GB', tip: 'Contrasto: pausa dopo concern.' }, { text: 'To sum up, remote work can work well if it is well organised.', lang: 'en-AU', tip: 'Conclusione: tono discendente.' }],
    speaking: [{ prompt: 'Give a 60-second presentation on a topic you know (opening, three points, conclusion).', model: 'Good morning. Today I’d like to talk about learning languages. I’ll cover three points: motivation, practice and feedback. First, motivation… Second, practice… Finally, feedback… To sum up, regular practice with feedback is the key.' }, { prompt: 'Politely rebut this statement: «Learning Japanese is impossible for Europeans.»', model: 'I see your point, but I’d like to challenge that assumption. Many Europeans learn Japanese successfully with regular practice. It’s difficult, but not impossible.' }] });
})(window.ST = window.ST || {});
