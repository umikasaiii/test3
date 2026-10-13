/* Inglese — stage L4 (B2 solido) e L5 (B2+ / primo C1). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;

  C.addTopic({
    id: 'eng-l4-hypothetical', subject: 'eng', stage: 'L4', title: 'Ipotesi: terzo condizionale, wish e rimpianti', minutes: 20, prereq: ['eng-l3-narrative'],
    summary: 'Third e mixed conditionals, wish / if only, should have.',
    objectives: ['Costruire il terzo condizionale per ipotesi irrealizzate nel passato', 'Usare i condizionali misti', 'Esprimere rimpianti con wish, if only, should have'],
    pages: [
      { h: 'Obiettivo', b: 'Per discutere ciò che **non è successo** (e come sarebbe andata) serve un set di strutture: terzo condizionale, condizionali misti, wish. Sono tipici del B2 e compaiono in conversazioni su scelte e rimpianti.' },
      { h: 'Terzo condizionale', b: 'Ipotesi sul passato che non si è realizzata.\n\n**If + past perfect, would have + participio**\n> {{en-GB|If I had studied harder, I would have passed.}}\n> {{en-GB|She wouldn’t have missed the bus if she had left earlier.}}\n\nSignifica: non ho studiato abbastanza e non ho passato. Il passato qui è **irreale**: è la distanza di due livelli (past perfect) per sottolineare che non si può cambiare.' },
      { h: 'Condizionali misti', b: 'Mescolano passato e presente.\n\n**Causa passata → effetto presente**: if + past perfect, would + base\n> {{en-GB|If I had taken that job, I would be richer now.}}\n\n**Condizione presente → effetto passato**: if + past simple, would have + participio\n> {{en-GB|If I weren’t so shy, I would have asked her out.}}\n\nControlla la linea del tempo di ciascuna metà della frase, non della frase intera.' },
      { h: 'Wish, if only, should have', b: '- **wish + past simple**: rimpianto sul presente. {{en-GB|I wish I knew the answer.}} / {{en-GB|I wish I were taller.}}\n- **wish + past perfect**: rimpianto sul passato. {{en-GB|I wish I had listened.}}\n- **wish + would**: lamentela su un comportamento altrui. {{en-GB|I wish you would stop that.}}\n- **if only**: più enfatico di wish. {{en-GB|If only I had more time!}}\n- **should have + participio**: critica o rimpianto. {{en-GB|I should have called her.}} / {{en-GB|You shouldn’t have said that.}}' },
      { h: 'Esempio guidato', b: 'Fatti: *Non ho preso l’ombrello. Mi sono bagnato.*\n\n- Terzo condizionale: **If I had taken an umbrella, I wouldn’t have got wet.**\n- Wish: **I wish I had taken an umbrella.**\n- Should have: **I should have taken an umbrella.**\n\nMisto: *Sono raffreddato ora perché mi sono bagnato ieri* → **If I hadn’t got wet yesterday, I wouldn’t have a cold now.**\n\nControllo: parti dai fatti reali, poi nega mentalmente ciascuno.' },
      { h: 'Errori comuni', b: '- *If I would have known, I would have come.* → {{en-GB|If I had known, I would have come.}}\n- *I wish I would have more time.* → {{en-GB|I wish I had more time.}}\n- *If I had known, I would come* (voleva dire passato) → {{en-GB|I would have come.}}\n- *I should have went* → {{en-GB|I should have gone.}}\n- Dimenticare have: *I would passed.* → {{en-GB|I would have passed.}}' },
      { h: 'Riepilogo', b: '- Third: if + past perfect, would have + participio.\n- Mixed: guarda la linea del tempo di ciascuna metà.\n- wish + past (presente), wish + past perfect (passato), wish + would (lamentela).\n- should have per rimpianti/critiche.' }
    ],
    exercises: [
      mc('If I ___ harder, I would have passed.', ['studied', 'had studied', 'would study', 'have studied'], 1),
      fill('Complete: She wouldn’t have missed the bus if she ___ (leave) earlier.', ['had left'], 'Past perfect nella if-clause.'),
      mc('I wish I ___ the answer now.', ['knew', 'know', 'had known', 'would know'], 0, 'Presente irreale: wish + past simple.'),
      mc('I wish I ___ to her yesterday.', ['talked', 'had talked', 'would talk', 'talk'], 1, 'Passato: past perfect.'),
      mc('You ___ said that. It was rude.', ['shouldn’t have', 'mustn’t', 'shouldn’t', 'couldn’t to'], 0),
      mc('If I hadn’t eaten so much, I ___ so sick now.', ['wouldn’t be', 'wouldn’t have been', 'won’t be', 'wasn’t'], 0, 'Misto: causa passata, effetto presente.'),
      order('Metti in ordine', ['If', 'only', 'I', 'had', 'more', 'time'], 'If only + past simple per rimpianto presente.')
    ],
    test: [
      mc('Which sentence is a third conditional?', ['If I see her, I’ll tell her.', 'If I saw her, I would tell her.', 'If I had seen her, I would have told her.', 'If I see her, I told her.'], 2),
      mc('«I wish I had saved more money» refers to…', ['the present', 'the past', 'the future', 'a habit'], 1),
      fill('Complete: If I ___ (know), I would have helped.', ['had known'], 'Third conditional.'),
      mc('Which is correct?', ['If I would have known, I would have come.', 'If I had known, I would have come.', 'If I knew, I would have come.', 'If I had know, I would come.'], 1)
    ],
    cards: [
      card('c1', 'rimpianto', 'regret', 'I have no regrets.'), card('c2', 'sarebbe dovuto', 'should have', 'I should have called.'), card('c3', 'se solo', 'if only', 'If only I had more time!'), card('c4', 'sbagliare/perdere', 'to miss', 'I missed the train.'),
      card('c5', 'ripensare', 'to rethink', 'I need to rethink this.'), card('c6', 'bagnato', 'wet', 'I got wet in the rain.'), card('c7', 'scelta', 'choice', 'It was a difficult choice.'), card('c8', 'conseguenza', 'consequence', 'That has consequences.')
    ],
    listening: [{ id: 'l1', lang: 'en-US', title: 'A missed chance', text: 'If I had applied for that job, I would be working in Berlin now. Honestly, I wish I had taken the chance. I was afraid, and I should have listened to my sister. She told me I would regret it. If only I could go back, I would send the application without a second thought.',
      qs: [{ q: 'Did the speaker apply for the job?', o: ['Yes', 'No', 'Not sure', 'He applied twice'], a: 1, kind: 'implicit' }, { q: 'Who gave advice?', o: ['His boss', 'His sister', 'A friend', 'His father'], a: 1, kind: 'explicit' }, { q: 'How does the speaker feel now?', o: ['Proud', 'Regretful', 'Neutral', 'Angry at his sister'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'If I had studied harder, I would have passed.', lang: 'en-GB' }, { text: 'I wish I had listened to her advice.', lang: 'en-US' }, { text: 'You shouldn’t have said that.', lang: 'en-AU' }],
    shadowing: [{ text: 'If I had known, I would have come earlier.', lang: 'en-GB', tip: 'Contrazioni: I’d, would’ve /wʊdəv/.' }, { text: 'I wish I had taken the chance.', lang: 'en-US', tip: 'Stress su wish e chance.' }, { text: 'If only I could go back.', lang: 'en-AU', tip: 'Enfasi emotiva su only.' }],
    speaking: [{ prompt: 'Talk about a decision you regret or are glad about, using third conditional and wish.', model: 'Last year I didn’t take a language course. If I had joined, I would speak better now. I wish I had started earlier.' }, { prompt: 'Say what would be different in your life if you had chosen a different path.', model: 'If I had moved abroad, I would have learned another language sooner. If I hadn’t stayed in my town, I might have met different people.' }]
  });

  C.addTopic({
    id: 'eng-l4-collocations', subject: 'eng', stage: 'L4', title: 'Collocazioni e phrasal verbs ad alta frequenza', minutes: 20, prereq: ['eng-l4-hypothetical'],
    summary: 'Le combinazioni di parole naturali e i phrasal verbs più utili.',
    objectives: ['Usare collocazioni verbo+nome e aggettivo+nome', 'Capire i phrasal verbs più frequenti', 'Imparare il lessico in blocchi, non parole isolate'],
    pages: [
      { h: 'Obiettivo', b: 'Parlare in modo naturale significa scegliere le parole che **vanno insieme**. Si dice *make a decision* e *do homework*, non il contrario. Imparerai collocazioni e phrasal verbs come **blocchi** da recuperare interi.' },
      { h: 'Collocazioni: make, do, take, have', b: '**make**: a decision, a mistake, an effort, progress, money, a suggestion, a phone call\n**do**: homework, the dishes, research, business, your best, someone a favour\n**take**: a break, a photo, a risk, part in, place, advantage of\n**have**: a look, a chat, a shower, fun, an argument, a problem\n\n{{en-GB|I need to make a decision.}} / {{en-GB|Let’s take a break.}} / {{en-GB|Can you do me a favour?}}\n\nCollocazioni con aggettivi: *heavy rain, strong coffee, deep sleep, fast food, bitter disappointment.* Non si dice *strong rain* né *heavy coffee*.' },
      { h: 'Phrasal verbs', b: 'Verbo + particella: spesso il significato non si deduce dalle parti.\n\n- **give up** (smettere) · **carry on** (continuare) · **find out** (scoprire)\n- **look after** (accudire) · **look for** (cercare) · **look forward to** (non vedere l’ora, + -ing)\n- **turn down** (rifiutare) · **put off** (rimandare) · **come up with** (inventare)\n- **get along with** (andare d’accordo) · **run out of** (finire) · **take off** (decollare; togliere)\n\nSeparabili: {{en-GB|Turn the offer down. / Turn down the offer.}} Con pronome: **sempre separato**: {{en-GB|Turn it down.}} Non separabili: {{en-GB|Look after the kids.}} → *look them after* è sbagliato; si dice {{en-GB|look after them.}}' },
      { h: 'Come impararli', b: '1. Studia **blocchi interi**, non parole singole: *make a decision*, non solo *decision*.\n2. Usa carte con la frase, non solo la traduzione.\n3. Crea una frase **tua** per ogni blocco.\n4. Ripassa dopo 1, 3, 7, 14, 30 giorni (le carte lo fanno per te).\n5. Quando ascolti, nota le collocazioni ricorrenti.\n\nNon imparare cento phrasal verbs di colpo: sceglierne pochi, ma usarli davvero.' },
      { h: 'Esempio guidato', b: 'Completa: *I’ve ____ a lot of progress, but I can’t ____ up with a good plan. I’ll ____ a break and ____ it over later.*\n\n- **made** a lot of progress (make progress)\n- **come** up with a plan\n- **take** a break\n- **think** it over (riflettere)\n\nControllo: ciascuna parola va con quella accanto? Se hai dubbi, cerca la collocazione in un corpus o dizionario.' },
      { h: 'Errori comuni', b: '- *do a mistake* → {{en-GB|make a mistake.}}\n- *make a photo* → {{en-GB|take a photo.}}\n- *look forward to see you* → {{en-GB|look forward to seeing you.}}\n- *I’ll look after it them* → {{en-GB|I’ll look after them.}}\n- *strong rain / heavy tea* → {{en-GB|heavy rain, strong tea.}}' },
      { h: 'Riepilogo', b: '- make = creare/produrre; do = attività generiche/doveri.\n- Collocazioni di aggettivi vanno imparate come blocchi.\n- Phrasal verbs: pochi, utili, in frasi tue.\n- look forward to + -ing; pronome tra verbo e particella nei separabili.' }
    ],
    exercises: [
      mc('Please ___ a decision before Friday.', ['do', 'make', 'take', 'have'], 1),
      mc('Let’s ___ a break; I’m tired.', ['make', 'do', 'take', 'give'], 2),
      mc('Which is correct?', ['strong rain', 'heavy rain', 'deep rain', 'big rain'], 1),
      mc('«I’m looking forward to ___ you.»', ['see', 'seeing', 'saw', 'be seen'], 1),
      mc('She ___ up smoking last year.', ['gave', 'put', 'took', 'came'], 0),
      mc('«Turn down the offer» — which sentence is correct?', ['Turn down it.', 'Turn it down.', 'Turn down it the.', 'Down turn it.'], 1),
      fill('Complete: We have run ___ of milk.', ['out'], 'run out of = finire.')
    ],
    test: [
      mc('Which collocation is correct?', ['do a mistake', 'make a mistake', 'take a mistake', 'have a mistake'], 1),
      mc('I can’t ___ with a better idea.', ['come up', 'make up', 'put up', 'get over'], 0),
      mc('Which phrasal verb means «to postpone»?', ['put off', 'put on', 'put up', 'put out'], 0),
      mc('How do you say «accudire i bambini»?', ['look for the kids', 'look after the kids', 'look at the kids', 'look up the kids'], 1)
    ],
    cards: [
      card('c1', 'prendere una decisione', 'to make a decision', 'I need to make a decision.'), card('c2', 'fare una pausa', 'to take a break', 'Let’s take a break.'), card('c3', 'rimandare', 'to put off', 'Don’t put it off.'), card('c4', 'inventare/trovare (idea)', 'to come up with', 'She came up with a plan.'),
      card('c5', 'scoprire', 'to find out', 'I found out the truth.'), card('c6', 'andare d’accordo', 'to get along with', 'I get along with him.'), card('c7', 'rifiutare', 'to turn down', 'They turned down the offer.'), card('c8', 'non vedere l’ora', 'to look forward to', 'I look forward to meeting you.')
    ],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Planning a trip', text: 'We’ve been putting off this trip for ages, but we’ve finally made a decision. We’re going to take a few days off and travel to Scotland. I’m really looking forward to it. We’ve come up with a rough plan, though we’ll find out more details next week. If we run out of money, we’ll just give up the hotel and camp.',
      qs: [{ q: 'What decision have they made?', o: ['To go to Scotland', 'To stay home', 'To sell the car', 'To cancel the trip'], a: 0, kind: 'explicit' }, { q: 'What will they do if they run out of money?', o: ['Return home', 'Give up the hotel and camp', 'Borrow money', 'Stay with friends'], a: 1, kind: 'explicit' }, { q: 'How does the speaker feel?', o: ['Excited', 'Worried', 'Angry', 'Bored'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'We’ve finally made a decision.', lang: 'en-GB' }, { text: 'She came up with a great idea.', lang: 'en-US' }, { text: 'I’m looking forward to meeting you.', lang: 'en-AU' }],
    shadowing: [{ text: 'We’ve been putting off this trip for ages.', lang: 'en-GB', tip: 'Linking: «putting off» → «puttinoff».' }, { text: 'I’m really looking forward to it.', lang: 'en-US', tip: 'Stress su really, forward.' }, { text: 'Let’s take a break and think it over.', lang: 'en-AU', tip: 'Think it over: legami.' }],
    speaking: [{ prompt: 'Describe a plan you have put off for a long time and what you will do about it, using three collocations.', model: 'I’ve been putting off a visit to the dentist. I need to make an appointment and take a day off work. I’ll do my best to go next week.' }, { prompt: 'Explain what you do when you run out of ideas at work or at home.', model: 'I take a break, go for a walk, and then try to come up with a new idea. If that doesn’t work, I talk to a friend.' }]
  });

  C.addTopic({
    id: 'eng-l5-register', subject: 'eng', stage: 'L5', title: 'Registro, cortesia e sfumature', minutes: 20, prereq: ['eng-l4-collocations'],
    summary: 'Formale/informale, hedging, cortesia indiretta e toni.',
    objectives: ['Adattare il registro alla situazione', 'Usare hedging per attenuare affermazioni', 'Formulare richieste cortesi e commenti diplomatici'],
    pages: [
      { h: 'Obiettivo', b: 'Una frase corretta può suonare brusca, troppo informale o troppo rigida. A livello B2+ il tuo inglese deve **adattarsi al contesto**: email di lavoro, amici, clienti, riunioni.' },
      { h: 'Formale, neutro, informale', b: 'Informale → neutro → formale:\n- Can you…? → Could you…? → Would you be able to…?\n- I wanna… → I’d like to… → I would like to…\n- Sorry about that → I apologise → Please accept my apologies\n- Thanks → Thank you → Thank you very much for…\n- Get back to me → Let me know → Please reply at your earliest convenience\n\nNel formale: niente contrazioni nei testi scritti, verbi più lunghi (*obtain* vs *get*), frasi complete. Nell’informale: contrazioni, phrasal verbs, frasi brevi.' },
      { h: 'Cortesia indiretta', b: 'Le richieste dirette suonano brusche. Rendile indirette:\n\n- {{en-GB|Close the window.}} → {{en-GB|Could you close the window, please?}} → {{en-GB|Would you mind closing the window?}}\n- {{en-GB|I want a coffee.}} → {{en-GB|I’d like a coffee.}} → {{en-GB|I was wondering if I could have a coffee.}}\n\nPiù la richiesta è importante o il rapporto formale, più la frase si allunga e passa al condizionale (**could, would, might**). Funziona anche per rifiuti: {{en-GB|I’m afraid I can’t make it.}}' },
      { h: 'Hedging', b: 'Il **hedging** attenua l’affermazione per essere accurati o diplomatici:\n\n- verbi: *seem, appear, tend to, suggest* — {{en-GB|The data seems to suggest that…}}\n- avverbi: *probably, possibly, fairly, relatively, generally*\n- modali: *may, might, could*\n- espressioni: *to some extent, in most cases, it appears that*\n\n> {{en-GB|Remote work may improve productivity in some cases.}}\n\nNon è debolezza: è precisione. Nel B2/C1 scritto e orale è un segnale di competenza.' },
      { h: 'Esempio guidato', b: 'Riscrivi in tre registri: *«Send me the file now.»*\n\n- **Informale**: *Can you send me the file? Thanks!*\n- **Neutro**: *Could you send me the file, please?*\n- **Formale**: *I would be grateful if you could send me the file at your earliest convenience.*\n\nControllo: ogni versione cambia lunghezza, verbo e tono. Chiediti chi leggerà o ascolterà e quanto è formale il rapporto.' },
      { h: 'Errori comuni', b: '- Tradurre dal tono italiano: *Give me…* può sembrare un ordine.\n- Usare contrazioni e slang in una email a un cliente.\n- Esagerare con la formalità tra colleghi alla pari: sembra freddo.\n- *Please to confirm* → {{en-GB|Please confirm.}}\n- Mischiare registri nella stessa frase.' },
      { h: 'Riepilogo', b: '- Adatta registro a persona e situazione.\n- Richieste: can → could → would you mind.\n- Hedging per precisione e diplomazia.\n- Formale: frasi complete, no contrazioni scritte; informale: contrazioni e phrasal verbs.' }
    ],
    exercises: [
      mc('Which request is the most polite?', ['Give me the report.', 'Could you give me the report?', 'Would you mind giving me the report, please?', 'I want the report.'], 2),
      mc('Which is the most formal?', ['Get back to me', 'Let me know', 'Please reply at your earliest convenience', 'Drop me a line'], 2),
      mc('«The data seems to suggest…» is an example of…', ['Hedging', 'Slang', 'Exaggeration', 'Command'], 0),
      mc('Which phrase is suitable for an email to a client?', ['Hey, thanks!', 'I wanna ask you something', 'I would like to enquire about…', 'Gimme the info'], 2),
      mc('A polite way to refuse an invitation:', ['No.', 'I’m afraid I can’t make it.', 'Never.', 'I don’t want.'], 1),
      fill('Complete: I was ___ if I could borrow your pen.', ['wondering'], 'Formula cortese.'),
      mc('Which sounds more tentative?', ['It is wrong.', 'It may be slightly inaccurate.', 'It’s definitely wrong.', 'Wrong.'], 1)
    ],
    test: [
      mc('«Would you mind closing the window?» is…', ['formal-polite', 'rude', 'slang', 'an order'], 0),
      mc('Which verb is a typical hedge?', ['prove', 'tend', 'insist', 'order'], 1),
      mc('Which contraction use is most suitable in a formal letter?', ['I’m writing to apply.', 'I am writing to apply.', 'Im writing to apply.', 'I writing to apply.'], 1),
      mc('A natural way to ask a colleague for help is…', ['Help me now.', 'Could you give me a hand?', 'I demand help.', 'You must help.'], 1)
    ],
    cards: [
      card('c1', 'ti dispiace…?', 'would you mind…?', 'Would you mind waiting?'), card('c2', 'temo di', 'I’m afraid', 'I’m afraid I can’t.'), card('c3', 'tendere a', 'to tend to', 'People tend to forget.'), card('c4', 'a vostro comodo', 'at your earliest convenience', 'Reply at your earliest convenience.'),
      card('c5', 'scusarsi (formale)', 'to apologise', 'I apologise for the delay.'), card('c6', 'richiedere informazioni', 'to enquire', 'I’m writing to enquire about prices.'), card('c7', 'diplomatico', 'tactful', 'She is very tactful.'), card('c8', 'dare una mano', 'to give someone a hand', 'Can you give me a hand?')
    ],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Two ways to ask', text: 'Version one: Hey, can you send me that file? Thanks! Version two: Good morning, Ms Patel. I was wondering whether you might be able to send me the file when you have a moment. I would be very grateful.',
      qs: [{ q: 'Which version is more formal?', o: ['Version one', 'Version two', 'Both equally', 'Neither'], a: 1, kind: 'explicit' }, { q: 'Which phrase makes the request more tentative?', o: ['Can you', 'I was wondering whether you might be able to', 'Thanks', 'Hey'], a: 1, kind: 'explicit' }, { q: 'Who is probably the listener in version two?', o: ['A close friend', 'A colleague or client the speaker respects', 'A family member', 'A child'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'I was wondering whether you might be able to help.', lang: 'en-GB' }, { text: 'I would be very grateful for your reply.', lang: 'en-US' }, { text: 'I’m afraid I can’t make it on Friday.', lang: 'en-AU' }],
    shadowing: [{ text: 'Would you mind closing the window, please?', lang: 'en-GB', tip: 'Intonazione ascendente cortese.' }, { text: 'The data seems to suggest a slight improvement.', lang: 'en-US', tip: 'Ritmo professionale, stress su data, suggest, slight.' }, { text: 'I’m afraid I won’t be able to attend.', lang: 'en-AU', tip: 'Toni bassi per rifiuto cortese.' }],
    speaking: [{ prompt: 'Role-play: ask your manager politely for a day off next Friday. Give a reason.', model: 'Good morning. I was wondering whether I could take next Friday off. I have a family event, and I’d be happy to finish my urgent tasks beforehand.' }, { prompt: 'Rephrase this bluntly stated opinion in a more diplomatic way: «Your plan is bad.»', model: 'I’m not sure the plan fully addresses the problem. It might be worth considering a few alternatives.' }]
  });

  C.addTopic({
    id: 'eng-l5-emphasis', subject: 'eng', stage: 'L5', title: 'Enfasi, inversione e frasi scisse', minutes: 20, prereq: ['eng-l5-register'],
    summary: 'Cleft sentences, inversione dopo avverbi negativi e altri mezzi per mettere in risalto.',
    objectives: ['Usare cleft sentences (It was… that / What I need is…)', 'Riconoscere l’inversione dopo never, rarely, not only', 'Variare l’enfasi nella lingua parlata e scritta'],
    pages: [
      { h: 'Obiettivo', b: 'Quando vuoi dire «questa cosa, e non un’altra», l’inglese riordina la frase invece di usare soltanto l’intonazione. Imparerai **cleft sentences** e **inversione**: strutture che compaiono spesso nel parlato colto e nello scritto.' },
      { h: 'Cleft sentences', b: 'Mettono in risalto un elemento.\n\n- **It + be + elemento + that/who…**\n> {{en-GB|It was Anna who called me.}}\n> {{en-GB|It’s the noise that bothers me.}}\n\n- **What + frase + be + elemento**\n> {{en-GB|What I need is a holiday.}}\n> {{en-GB|What annoys me is the delay.}}\n\n- **All / The thing / The reason** + be:\n> {{en-GB|All I want is some peace.}}\n> {{en-GB|The reason I called is to ask a favour.}}' },
      { h: 'Inversione', b: 'Dopo avverbi negativi o restrittivi in prima posizione, l’ausiliare precede il soggetto:\n\n- **never / rarely / seldom**: {{en-GB|Never have I seen such a mess.}}\n- **not only … but also**: {{en-GB|Not only did she win, but she also broke the record.}}\n- **no sooner … than**: {{en-GB|No sooner had we arrived than it started to rain.}}\n- **hardly … when**: {{en-GB|Hardly had he left when the phone rang.}}\n- **only after / only when**: {{en-GB|Only then did I understand.}}\n\nCon i verbi senza ausiliare compare do/does/did: *Not only **did** she win.*\n\nÈ una struttura **formale o enfatica**: non è necessario nel parlato quotidiano, ma devi riconoscerla.' },
      { h: 'Altri mezzi di enfasi', b: '- **Ausiliare enfatico**: {{en-GB|I DO like it!}} / {{en-GB|She did tell me.}}\n- **Intensificatori**: absolutely, totally, utterly, extremely; con aggettivi estremi: *exhausted* (non *very exhausted*).\n- **Ripetizione**: {{en-GB|It was a long, long day.}}\n- **Intonazione e stress**: {{en-GB|I didn’t say HE stole it.}} — il significato cambia con lo stress.\n\nAttenzione ai **gradable / non-gradable adjectives**: *very tired* ma *absolutely exhausted*.' },
      { h: 'Esempio guidato', b: 'Frase base: *I need a holiday.* Rendila enfatica in tre modi:\n\n- Cleft: **What I need is a holiday.**\n- Inversione (frase simile): **Never have I needed a holiday more.**\n- Ausiliare: **I do need a holiday!**\n\nControllo: leggi ad alta voce e senti come cambia il peso della frase. Usale con moderazione: troppa enfasi stanca chi ascolta.' },
      { h: 'Errori comuni', b: '- *Never I have seen…* → {{en-GB|Never have I seen…}}\n- *Not only she won…* → {{en-GB|Not only did she win…}}\n- *very exhausted* → {{en-GB|absolutely exhausted.}}\n- *It was Anna that she called me.* → {{en-GB|It was Anna who called me.}}\n- Usare inversione in contesti informali: suona teatrale.' },
      { h: 'Riepilogo', b: '- Cleft: It was… that / What I need is…\n- Inversione dopo never, rarely, not only, no sooner, only after.\n- Ausiliare enfatico: I DO like it.\n- Aggettivi estremi con absolutely, non con very.' }
    ],
    exercises: [
      mc('Which sentence is correct?', ['Never I have seen such a mess.', 'Never have I seen such a mess.', 'Never I saw such a mess.', 'Never did I have seen.'], 1),
      mc('___ did she win, but she also broke the record.', ['Not only', 'Only not', 'No only', 'Not just'], 0),
      fill('Complete: ___ I need is a holiday.', ['what'], 'Cleft con what.'),
      mc('Which phrase is natural?', ['very exhausted', 'absolutely exhausted', 'absolutely tired', 'extremely amazing'], 1),
      mc('«No sooner had we arrived ___ it started to rain.»', ['when', 'than', 'that', 'then'], 1),
      mc('«It was Anna who called me» emphasises…', ['the action', 'the person', 'the time', 'the place'], 1),
      mc('«I DO like it!» uses…', ['emphatic auxiliary', 'inversion', 'passive', 'hedging'], 0)
    ],
    test: [
      mc('Which is correct?', ['Hardly he had left when the phone rang.', 'Hardly had he left when the phone rang.', 'Hardly he left when the phone rang.', 'Hardly did he had left.'], 1),
      mc('«What annoys me is the delay» is…', ['a cleft sentence', 'a passive', 'a conditional', 'a question'], 0),
      mc('Which adjective takes «absolutely»?', ['tired', 'good', 'freezing', 'busy'], 2),
      mc('Which is the most natural?', ['Only after the meeting did I understand.', 'Only after the meeting I understood.', 'Only after the meeting I did understand.', 'After only the meeting did I understood.'], 0)
    ],
    cards: [
      card('c1', 'enfasi', 'emphasis', 'Put emphasis on the key word.'), card('c2', 'inversione', 'inversion', 'Inversion is used after «never».'), card('c3', 'non appena', 'no sooner … than', 'No sooner had he left than it rained.'), card('c4', 'a stento', 'hardly', 'Hardly anyone came.'),
      card('c5', 'esausto', 'exhausted', 'I’m absolutely exhausted.'), card('c6', 'pazzesco', 'incredible', 'It’s incredible.'), card('c7', 'fastidiare', 'to annoy', 'The noise annoys me.'), card('c8', 'pace/tranquillità', 'peace', 'All I want is some peace.')
    ],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'After a long day', text: 'Honestly, what I need is a good night’s sleep. Never have I been so tired. No sooner had I got home than the phone rang. It was my boss who called — not my colleague, as I expected. I do like my job, but the reason I’m exhausted is that I haven’t had a break all week.',
      qs: [{ q: 'What does the speaker need most?', o: ['A holiday', 'A good night’s sleep', 'A new job', 'A meeting'], a: 1, kind: 'explicit' }, { q: 'Who called?', o: ['A colleague', 'The boss', 'A friend', 'A customer'], a: 1, kind: 'explicit' }, { q: 'What can we infer?', o: ['The speaker hates his job', 'He likes the job but is overworked', 'He is on holiday', 'He is angry with the boss'], a: 1, kind: 'implicit' }] }],
    dictation: [{ text: 'What I need is a good night’s sleep.', lang: 'en-GB' }, { text: 'Never have I seen such a mess.', lang: 'en-US' }, { text: 'No sooner had we arrived than it started to rain.', lang: 'en-AU' }],
    shadowing: [{ text: 'What I need is a good night’s sleep.', lang: 'en-GB', tip: 'Stress su need e sleep; pausa dopo «is».' }, { text: 'Never have I been so tired.', lang: 'en-US', tip: 'Enfasi iniziale su never.' }, { text: 'It was my boss who called.', lang: 'en-AU', tip: 'Stress su boss.' }],
    speaking: [{ prompt: 'Say what you need most right now using a cleft sentence, then give a reason with an emphatic structure.', model: 'What I need most is a quiet weekend. It’s not the work that tires me, it’s the constant noise. I really do need to rest.' }, { prompt: 'Describe a surprising event using no sooner / hardly / never have I.', model: 'No sooner had I sat down than the lights went out. Never have I been so surprised.' }]
  });
})(window.ST = window.ST || {});
