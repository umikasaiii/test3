/* Inglese — ampliamento stage L2 (ponte B1+ → B2). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'eng', stage: 'L2', minutes: 20, prereq: ['eng-l1-future-cond'] }, o));

  T({ id: 'eng-l2-articles', title: 'Articoli e determinanti', summary: 'a/an, the, nessun articolo; this/that, each/every, both/either/neither.',
    objectives: ['Scegliere tra a/an, the e articolo zero', 'Usare i determinanti più frequenti', 'Correggere gli errori tipici degli italiani'],
    pages: [
      { h: 'Obiettivo', b: 'In italiano l’articolo c’è quasi sempre; in inglese **a volte non serve** e a volte cambia il significato. È uno degli errori che restano fino al B2 se non si studiano in modo mirato.' },
      { h: 'A / an', b: '**a/an** = uno qualsiasi, prima menzione, professione, descrizione.\n- {{en-GB|I have a car.}} / {{en-GB|She is an engineer.}} / {{en-GB|He’s a very kind person.}}\n- **an** davanti a **suono** vocalico: {{en-GB|an hour}}, {{en-GB|an umbrella}}; **a** davanti a suono consonantico: {{en-GB|a university}} (suona /juː/).\n- Distributivo: {{en-GB|twice a week}}, {{en-GB|50 km an hour}}.' },
      { h: 'The', b: '**the** = specifico, già noto o unico.\n- Seconda menzione: {{en-GB|I bought a jacket. The jacket is blue.}}\n- Unico: {{en-GB|the sun, the moon, the Prime Minister}}\n- Superlativi e ordinali: {{en-GB|the best, the first}}\n- Fiumi, mari, catene montuose, gruppi di isole, nazioni al plurale: {{en-GB|the Thames, the Alps, the Netherlands, the USA}}\n- Strumenti musicali: {{en-GB|I play the guitar.}}\n- Aggettivi come sostantivi: {{en-GB|the rich, the elderly}}' },
      { h: 'Nessun articolo', b: 'Articolo **zero** con:\n- plurali e non numerabili in senso generale: {{en-GB|Dogs are loyal.}} / {{en-GB|Water is essential.}}\n- pasti, sport, materie: {{en-GB|have breakfast, play tennis, study history}}\n- la maggior parte di città, paesi, laghi, singole montagne: {{en-GB|Italy, Lake Garda, Mount Etna}}\n- espressioni fisse: {{en-GB|go to school / bed / work / hospital}} (come funzione), {{en-GB|by car}}\n\nConfronta: {{en-GB|He’s in hospital.}} (è ricoverato) vs {{en-GB|He’s at the hospital.}} (è nell’edificio).' },
      { h: 'Determinanti utili', b: '- **this/these** (vicino), **that/those** (lontano)\n- **each** (ognuno, singolarmente) / **every** (tutti): {{en-GB|Every student has a book.}}\n- **both** (entrambi), **either** (l’uno o l’altro), **neither** (nessuno dei due): {{en-GB|Neither answer is correct.}}\n- **all / most / some / no**: {{en-GB|All students passed. / Most people agree.}}\n- **another / other / the other**: {{en-GB|Can I have another coffee?}}' },
      { h: 'Esempio guidato', b: 'Completa: *«I’m ___ teacher. Yesterday I met ___ man who plays ___ violin. ___ man was very friendly. We talked about ___ music.»*\n\n→ **a** teacher; **a** man; **the** violin; **The** man (già menzionato); **zero** article before *music* (generale).\n\nControllo: prima menzione = a; già noto = the; generale plurale/non numerabile = niente.' },
      { h: 'Errori comuni', b: '- *I like the music* (in generale) → {{en-GB|I like music.}}\n- *I’m teacher* → {{en-GB|I’m a teacher.}}\n- *I play football* ok / *I play the guitar* ok: attenzione a sport vs strumenti.\n- *He is in the hospital* per un paziente → {{en-GB|in hospital.}}\n- *an university* → {{en-GB|a university.}}\n- *The life is hard* → {{en-GB|Life is hard.}}' },
      { h: 'Riepilogo', b: '- a/an per la prima menzione e le professioni; the per ciò che è specifico/noto.\n- Articolo zero con generali, sport, pasti, molte località.\n- every / each / both / either / neither.\n- Attenzione ai suoni (an hour, a university).' }
    ],
    exercises: [
      mc('She is ___ engineer.', ['a', 'an', 'the', '—'], 1),
      mc('I saw ___ film last night. ___ film was great.', ['a / The', 'the / A', 'a / A', 'the / The'], 0),
      mc('___ life can be difficult.', ['The', 'A', '—(nessun articolo)', 'An'], 2),
      mc('He plays ___ guitar.', ['a', 'the', '—', 'an'], 1),
      mc('She is in ___ hospital after the accident. (ricoverata)', ['the', 'a', '—', 'an'], 2),
      mc('We visited ___ Alps last summer.', ['a', 'the', '—', 'an'], 1),
      mc('___ of the two answers is correct. (nessuna)', ['Neither', 'Either', 'Both', 'Each'], 0)
    ],
    test: [
      mc('Which is correct?', ['I’m teacher.', 'I’m a teacher.', 'I’m the teacher.', 'I’m an teacher.'], 1),
      mc('I like ___ coffee, but I don’t like ___ coffee you made.', ['—, the', 'the, the', 'a, the', '—, a'], 0),
      mc('She plays ___ tennis every week.', ['the', 'a', '—', 'an'], 2),
      mc('___ student in the class has a laptop. (ognuno)', ['Every', 'All', 'Both', 'Neither'], 0)
    ],
    cards: [card('c1', 'entrambi', 'both', 'Both answers are right.'), card('c2', 'nessuno dei due', 'neither', 'Neither is correct.'), card('c3', 'ognuno', 'each', 'Each student has a book.'), card('c4', 'ogni', 'every', 'Every day is different.'),
      card('c5', 'un altro', 'another', 'Another coffee, please.'), card('c6', 'l’altro', 'the other', 'The other one is mine.'), card('c7', 'in ospedale (ricoverato)', 'in hospital', 'He’s in hospital.'), card('c8', 'in generale', 'in general', 'In general, I agree.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'The new neighbour', text: 'I met a new neighbour yesterday. The neighbour is a nurse, and she works at the hospital near the river. She plays the piano, and she loves classical music. She told me that every Sunday she goes to the mountains with her dog. Both of us like hiking, so we decided to go together next week.',
      qs: [{ q: 'What does the neighbour do?', o: ['She is a nurse', 'She is a teacher', 'She is a pianist', 'She is a doctor'], a: 0, kind: 'explicit' }, { q: 'When does she go to the mountains?', o: ['Every Sunday', 'Every Saturday', 'Every day', 'Once a month'], a: 0, kind: 'explicit' }, { q: 'What will they do next week?', o: ['Go hiking together', 'Play the piano', 'Visit the hospital', 'Meet a nurse'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'She is an engineer and plays the guitar.', lang: 'en-GB' }, { text: 'Life is hard, but music helps.', lang: 'en-US' }, { text: 'Both answers are correct.', lang: 'en-AU' }],
    shadowing: [{ text: 'I met a man yesterday. The man was very friendly.', lang: 'en-US', tip: 'A /ə/ debole; the /ðə/ davanti a consonante.' }, { text: 'She works at the hospital near the river.', lang: 'en-GB', tip: 'Articoli deboli e veloci.' }, { text: 'Every student has a book.', lang: 'en-AU', tip: 'Every: /ˈevri/, due sillabe.' }],
    speaking: [{ prompt: 'Describe a person you met recently, paying attention to a / the.', model: 'I met a woman at a party last week. The woman is an architect, and she plays the violin. She told me she lives in a small flat near the park.' }, { prompt: 'Talk about what you like in general (music, food, sport) without using the.', model: 'I like music, especially jazz. I love Italian food, and I play tennis twice a week. Nature is important to me.' }] });

  T({ id: 'eng-l2-preferences', title: 'Preferenze e raccomandazioni: would rather, had better, prefer', summary: 'Esprimere preferenze, consigli forti e desideri nel presente e nel passato.',
    objectives: ['Usare would rather, prefer to, had better', 'Esprimere preferenze personali o su altri', 'Dare consigli e avvertimenti con garbo'],
    pages: [
      { h: 'Obiettivo', b: 'Una conversazione quotidiana richiede di dire **che cosa preferisci**, **che cosa sarebbe meglio** e **che cosa non dovresti fare**. Le strutture con *would rather*, *prefer* e *had better* sono tra le più utili e spesso confuse.' },
      { h: 'Prefer', b: '- **prefer + nome / -ing**: {{en-GB|I prefer tea.}} / {{en-GB|I prefer walking to driving.}}\n- **prefer to + verbo base**: {{en-GB|I prefer to stay home.}}\n- **prefer A to B**: {{en-GB|I prefer cats to dogs.}}\n- Con **would**: {{en-GB|I’d prefer to wait.}} / {{en-GB|Would you prefer tea or coffee?}}\n- Con oggetto: {{en-GB|I’d prefer you to call me.}}' },
      { h: 'Would rather', b: '**would rather + verbo base** = preferirei (+ than + verbo base).\n- {{en-GB|I’d rather stay home tonight.}}\n- {{en-GB|I’d rather walk than take the bus.}}\n\nPer altre persone: **would rather + soggetto + passato** (presente/futuro):\n- {{en-GB|I’d rather you didn’t smoke here.}}\n\nPassato: **would rather have + participio** = avrei preferito: {{en-GB|I’d rather have stayed home.}}' },
      { h: 'Had better', b: '**had better + verbo base** = sarebbe meglio che (consiglio forte, con tono di avvertimento, riferito al presente/futuro).\n- {{en-GB|You’d better hurry, or you’ll miss the train.}}\n- {{en-GB|We’d better not be late.}}\n\nNon è passato: la forma è *had*, ma significa ora/prossimamente. Nel parlato **’d better**. Meno cortese di *should*: *You should rest.* (consiglio) vs *You’d better rest.* (se no…).' },
      { h: 'Altre strutture utili', b: '- **It’s time + soggetto + passato**: {{en-GB|It’s time we left.}}\n- **I wish / If only** per desideri (già visti).\n- **Would you mind + -ing / if I + passato**: {{en-GB|Would you mind opening the window?}} / {{en-GB|Would you mind if I opened the window?}}\n- **I’d like to** (desiderio cortese): {{en-GB|I’d like to book a table.}}' },
      { h: 'Esempio guidato', b: 'Scegli: *Vuoi vedere un film o uscire a cena?* → **Would you rather watch a film or go out for dinner?**\n\n*Preferisco restare a casa.* → **I’d rather stay home.**\n\n*Sarebbe meglio che ci sbrigassimo, altrimenti perdiamo il treno.* → **We’d better hurry, or we’ll miss the train.**\n\nControllo: dopo would rather/had better il verbo è alla forma base, senza to.' },
      { h: 'Errori comuni', b: '- *I’d rather to stay* → {{en-GB|I’d rather stay.}}\n- *I had better to go* → {{en-GB|I’d better go.}}\n- *I prefer to walk than to drive* → {{en-GB|I prefer walking to driving / I’d rather walk than drive.}}\n- *You had better told him* → {{en-GB|You’d better tell him.}}\n- *I’d rather you don’t come* → {{en-GB|I’d rather you didn’t come.}}' },
      { h: 'Riepilogo', b: '- prefer + nome/-ing; prefer A to B; prefer to + base.\n- would rather + base (than + base); would rather + soggetto + passato.\n- had better + base (consiglio forte).\n- It’s time + soggetto + passato.' }
    ],
    exercises: [
      mc('I’d rather ___ at home tonight.', ['stay', 'to stay', 'staying', 'stayed'], 0),
      mc('You ___ hurry, or you’ll miss the train.', ['had better', 'would better', 'have better', 'better to'], 0),
      mc('I prefer walking ___ driving.', ['than', 'to', 'from', 'that'], 1),
      mc('I’d rather you ___ here. (non fumare)', ['don’t smoke', 'didn’t smoke', 'won’t smoke', 'not smoke'], 1),
      mc('It’s time we ___ home.', ['go', 'went', 'going', 'will go'], 1),
      fill('Complete: Would you mind ___ the window? (close)', ['closing'], 'Would you mind + -ing.'),
      mc('I’d rather ___ stayed home yesterday. (rimpianto)', ['have', 'had', 'to have', '—'], 0)
    ],
    test: [
      mc('Which is correct?', ['I’d rather to go.', 'I’d rather go.', 'I’d rather going.', 'I’d rather went.'], 1),
      mc('We ___ be late, or the boss will be angry.', ['’d better not', 'had better not to', 'would better not', 'better not to'], 0),
      mc('Would you ___ tea or coffee?', ['rather', 'prefer', 'better', 'like to'], 1),
      fill('Complete: I prefer cats ___ dogs.', ['to'], 'prefer A to B.')
    ],
    cards: [card('c1', 'preferire', 'to prefer', 'I prefer tea.'), card('c2', 'piuttosto che', 'rather than', 'I’d walk rather than drive.'), card('c3', 'sarebbe meglio che', 'had better', 'You’d better go.'), card('c4', 'è ora che', 'it’s time', 'It’s time we left.'),
      card('c5', 'ti dispiace?', 'would you mind', 'Would you mind waiting?'), card('c6', 'avvertimento', 'warning', 'That’s a warning.'), card('c7', 'sbrigarsi', 'to hurry', 'Hurry up!'), card('c8', 'rimanere a casa', 'to stay in', 'I’d rather stay in.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Planning the evening', text: 'Would you rather go out or stay in tonight? I’d rather stay in, to be honest. We’d better decide soon, though, or the restaurants will be full. I prefer cooking at home to eating out, and I’d rather you didn’t invite too many people. It’s time we made a plan. Would you mind calling Sam and asking if he’s free?',
      qs: [{ q: 'What does the speaker prefer to do tonight?', o: ['Stay in', 'Go out', 'Go to a restaurant', 'Go to Sam’s'], a: 0, kind: 'explicit' }, { q: 'Why should they decide soon?', o: ['Restaurants fill up', 'It’s late', 'Sam is waiting', 'They have a ticket'], a: 0, kind: 'explicit' }, { q: 'What does the speaker ask?', o: ['To call Sam', 'To cook', 'To book a table', 'To invite many people'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'I’d rather stay at home tonight.', lang: 'en-GB' }, { text: 'You’d better hurry up.', lang: 'en-US' }, { text: 'Would you mind opening the window?', lang: 'en-AU' }],
    shadowing: [{ text: 'I’d rather stay in than go out.', lang: 'en-GB', tip: 'I’d rather: /aɪd ˈrɑːðə/.' }, { text: 'We’d better decide soon.', lang: 'en-US', tip: 'We’d better: /wiːd ˈbetər/.' }, { text: 'Would you mind opening the window?', lang: 'en-AU', tip: 'Cortese: tono ascendente.' }],
    speaking: [{ prompt: 'Tell a friend what you prefer for the weekend and give a warning with had better.', model: 'I’d rather stay home on Saturday, and I prefer cooking to eating out. You’d better book a table soon, or the restaurant will be full.' }, { prompt: 'Ask someone politely to change something using would you mind.', model: 'Excuse me, would you mind turning the music down a little? I’m trying to work.' }] });

  T({ id: 'eng-l2-word-formation', title: 'Formazione delle parole: prefissi e suffissi', summary: 'Come ampliare il lessico da una sola radice.',
    objectives: ['Riconoscere i prefissi e suffissi più frequenti', 'Formare nomi, aggettivi, verbi e avverbi dalla stessa radice', 'Dedurre il significato di parole nuove'],
    pages: [
      { h: 'Obiettivo', b: 'A livello B2 devi capire e usare **famiglie di parole** (*decide, decision, decisive, decisively*). Conoscere prefissi e suffissi permette di **raddoppiare il lessico** con poco sforzo e di dedurre parole sconosciute.' },
      { h: 'Suffissi che formano nomi', b: '- **-tion / -sion**: decide → decision, inform → information\n- **-ment**: develop → development, achieve → achievement\n- **-ness**: happy → happiness, kind → kindness\n- **-ity**: able → ability, secure → security\n- **-er / -or / -ist / -ian**: teach → teacher, act → actor, art → artist, music → musician\n- **-ship**: friend → friendship, leader → leadership\n\n> {{en-GB|Her kindness made a big difference.}}' },
      { h: 'Suffissi per aggettivi, verbi, avverbi', b: '- Aggettivi: **-ful** (useful), **-less** (careless), **-able/-ible** (comfortable), **-ous** (dangerous), **-al** (national), **-ive** (creative), **-y** (windy), **-ic** (economic)\n- Verbi: **-ise/-ize** (modernise), **-en** (widen), **-ify** (simplify)\n- Avverbi: **-ly** (quickly, carefully)\n\nAttenzione: *-ly* non sempre è avverbio: *friendly* è aggettivo. Alcuni avverbi sono irregolari: good → well, fast → fast.' },
      { h: 'Prefissi', b: '- negativi: **un-** (unhappy), **in-/im-/il-/ir-** (incorrect, impossible, illegal, irregular), **dis-** (disagree), **mis-** (misunderstand)\n- ripetizione: **re-** (rewrite)\n- quantità: **over-** (overwork), **under-** (underpay), **multi-**, **semi-**\n- tempo/posizione: **pre-** (preview), **post-**, **inter-** (international), **sub-**, **super-**\n\nScelta del prefisso negativo: va imparata con la parola (*unfair, impossible, illegal, irresponsible*).' },
      { h: 'Come dedurre una parola nuova', b: 'Davanti a *unsustainable* chiediti: **un-** (non) + **sustain** (mantenere) + **-able** (che può essere) → «che non si può mantenere».\n\nStrategia: 1) trova la radice; 2) identifica la categoria (nome? aggettivo?) dal suffisso; 3) verifica con il contesto.' },
      { h: 'Esempio guidato', b: 'Completa con la forma corretta della parola tra parentesi:\n- *Her ___ (creative) is amazing.* → **creativity**\n- *This is a very ___ (use) tool.* → **useful**\n- *He solved the problem ___ (quick).* → **quickly**\n- *They ___ (agree) about the budget.* → **disagreed** (prefisso negativo)\n\nControllo: che parte del discorso richiede la frase? nome, aggettivo, avverbio, verbo?' },
      { h: 'Errori comuni', b: '- *unpossible* → {{en-GB|impossible.}}\n- *carefull* → {{en-GB|careful.}}\n- *quick* usato come avverbio → {{en-GB|quickly.}}\n- *informations* → non numerabile: {{en-GB|information.}}\n- Confondere *-ing* e *-ed*: *boring* (noioso) vs *bored* (annoiato).' },
      { h: 'Riepilogo', b: '- Nomi: -tion, -ment, -ness, -ity, -er/-ist.\n- Aggettivi: -ful, -less, -able, -ous, -al, -ive.\n- Prefissi negativi: un-, in-/im-/il-/ir-, dis-, mis-.\n- Deduci: radice + prefisso + suffisso + contesto.' }
    ],
    exercises: [
      fill('Complete: He’s very ___ (success). He passed every exam.', ['successful'], 'successful.'),
      mc('The opposite of «possible» is…', ['unpossible', 'impossible', 'dispossible', 'inpossible'], 1),
      mc('A person who plays music is a ___.', ['musician', 'musicer', 'musical', 'musicist'], 0),
      mc('The film was ___ (bore). I almost fell asleep.', ['bored', 'boring', 'bore', 'boredom'], 1),
      fill('Complete: She spoke ___ (calm).', ['calmly'], 'calmly.'),
      mc('«Unreliable» means…', ['not able to be trusted', 'very reliable', 'reliable again', 'a reliable person'], 0),
      mc('Which noun comes from «develop»?', ['development', 'developing', 'developal', 'developness'], 0)
    ],
    test: [
      mc('The noun from «decide» is…', ['decision', 'decisement', 'decideness', 'decider'], 0),
      mc('Which is correct?', ['carefull', 'careful', 'carefulle', 'carefuly'], 1),
      mc('«Misunderstand» means…', ['understand wrongly', 'understand again', 'not understand at all', 'explain'], 0),
      fill('Complete: They are very ___ (friend).', ['friendly'], 'friendly.')
    ],
    cards: [card('c1', 'decisione', 'decision', 'It was a hard decision.'), card('c2', 'sviluppo', 'development', 'Economic development'), card('c3', 'gentilezza', 'kindness', 'Thank you for your kindness.'), card('c4', 'impossibile', 'impossible', 'It’s impossible.'),
      card('c5', 'inaffidabile', 'unreliable', 'He’s unreliable.'), card('c6', 'fraintendere', 'to misunderstand', 'I misunderstood.'), card('c7', 'creatività', 'creativity', 'She shows creativity.'), card('c8', 'successo', 'success', 'It was a success.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'A creative idea', text: 'Our team’s creativity is our biggest strength. Last month we developed an unusual product, and its success was unexpected. Some colleagues disagreed about the price, and a few misunderstood the plan, but we explained it again. The development took six months, and the final result is both useful and comfortable.',
      qs: [{ q: 'What is the team’s biggest strength?', o: ['Creativity', 'Speed', 'Budget', 'Size'], a: 0, kind: 'explicit' }, { q: 'What did some colleagues disagree about?', o: ['The price', 'The name', 'The deadline', 'The colour'], a: 0, kind: 'explicit' }, { q: 'How long did the development take?', o: ['Six months', 'One month', 'A year', 'Two weeks'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'Her creativity is amazing.', lang: 'en-GB' }, { text: 'It was an unexpected success.', lang: 'en-US' }, { text: 'They disagreed about the price.', lang: 'en-AU' }],
    shadowing: [{ text: 'The development took six months.', lang: 'en-US', tip: 'Development: stress sulla seconda sillaba.' }, { text: 'It’s both useful and comfortable.', lang: 'en-GB', tip: 'Comfortable: /ˈkʌmftəbl/, tre sillabe.' }, { text: 'Some colleagues disagreed about the price.', lang: 'en-AU', tip: 'Disagreed: stress su -agreed.' }],
    speaking: [{ prompt: 'Describe a colleague or friend using three nouns from adjectives (kindness, ability…).', model: 'My friend Anna is known for her kindness and her ability to listen. Her creativity inspires everybody, and her honesty is a great strength.' }, { prompt: 'Explain a misunderstanding you had and how you solved it.', model: 'Last week I misunderstood the time of the meeting. I arrived an hour late, but my boss was understanding, and we rescheduled.' }] });

  T({ id: 'eng-l2-emails', title: 'Scrivere email e messaggi professionali', summary: 'Struttura, registro e formule per email formali e semi-formali.',
    objectives: ['Strutturare un’email (saluto, scopo, dettagli, richiesta, chiusura)', 'Scegliere il registro corretto', 'Usare formule utili e collocazioni'],
    pages: [
      { h: 'Obiettivo', b: 'Scrivere un’email chiara in inglese è una competenza B2 richiesta in quasi ogni lavoro. Lo scopo è **farsi capire e ottenere ciò che serve**, con un tono adeguato.' },
      { h: 'Struttura', b: '1. **Oggetto** (subject): breve e specifico: *Question about invoice 2043*.\n2. **Saluto**: *Dear Ms Rossi,* (formale), *Hi Marco,* (informale).\n3. **Apertura/scopo**: *I’m writing to…* / *I’m getting in touch about…*\n4. **Dettagli**: poche frasi, un’idea per paragrafo.\n5. **Richiesta/azione**: *Could you please…?* / *I would be grateful if you could…*\n6. **Chiusura**: *Thank you for your help. / I look forward to hearing from you.*\n7. **Firma**: *Kind regards, / Best regards, / Best,*' },
      { h: 'Formule utili', b: '- Scopo: {{en-GB|I’m writing to enquire about…}} / {{en-GB|I’m writing to follow up on our meeting.}}\n- Allegati: {{en-GB|Please find attached the report.}} / {{en-GB|I’ve attached…}}\n- Riferimenti: {{en-GB|With reference to your email of 5 May…}}\n- Scuse: {{en-GB|I apologise for the delay.}}\n- Richieste: {{en-GB|Could you let me know by Friday?}}\n- Chiusura: {{en-GB|Please do not hesitate to contact me.}}' },
      { h: 'Registro', b: '**Formale**: frasi complete, niente contrazioni, verbi più lunghi (*obtain, require, inform*), cortesia indiretta (*I would appreciate…*).\n\n**Semi-formale/informale** (colleghi): contrazioni ok, frasi brevi, *Thanks! / Cheers / Best*.\n\nRegola: adatta il registro a chi ricevere e alla relazione. In dubbio, **un gradino più formale**.' },
      { h: 'Esempio guidato', b: '**Subject:** Meeting on Friday\n\nDear Mr Evans,\n\nI’m writing to confirm our meeting on Friday at 10 a.m. I’ve attached the agenda for your reference. Could you please let me know if the time still suits you?\n\nThank you for your help.\n\nKind regards,\nMarco Rossi\n\nControllo: scopo chiaro, allegato citato, richiesta cortese, chiusura e firma.' },
      { h: 'Errori comuni', b: '- *I write you to…* → {{en-GB|I’m writing to…}}\n- *Dear Sir/Madam* se conosci il nome: usa *Dear Ms Rossi,*\n- *Best regards* con virgola, non due punti.\n- *Looking forward to hear* → {{en-GB|looking forward to hearing.}}\n- *I send you the file in attachment* → {{en-GB|Please find the file attached.}}\n- Oggetto troppo vago: *Hello* o *Info*.' },
      { h: 'Riepilogo', b: '- Oggetto, saluto, scopo, dettagli, richiesta, chiusura, firma.\n- Formule: I’m writing to…, please find attached…, could you please…\n- Registro formale vs informale.\n- Un’idea per paragrafo; frasi brevi.' }
    ],
    exercises: [
      mc('Which opening is appropriate for a formal email to someone you don’t know?', ['Hey!', 'Dear Ms Smith,', 'Yo,', 'Hi there,'], 1),
      mc('Which is a good subject line?', ['Hello', 'Question about invoice 2043', 'Info', 'Please read'], 1),
      mc('«Please find attached» means…', ['I attach a file', 'Please look for a file', 'Find the file yourself', 'The file is lost'], 0),
      fill('Complete: I look forward to ___ from you.', ['hearing'], 'look forward to + -ing.'),
      mc('Which closing is correct?', ['Kind regards,', 'Kind regard:', 'Regards of kind,', 'Kind regarding,'], 0),
      mc('A more formal alternative to «Can you send me…?»', ['Could you possibly send me…', 'Send me…', 'I want…', 'You must send…'], 0),
      mc('Which sentence is correct?', ['I write you to ask a question.', 'I’m writing to ask a question.', 'I writing to ask a question.', 'I am write to ask.'], 1)
    ],
    test: [
      mc('Which is the best closing line?', ['Please do not hesitate to contact me.', 'Bye.', 'Answer fast.', 'Whatever.'], 0),
      mc('You write to a colleague you know well. Which greeting fits?', ['Dear Sir,', 'Hi Anna,', 'To whom it may concern,', 'Honoured Madam,'], 1),
      fill('Complete: I’m writing to ___ about the delay. (chiedere informazioni)', ['enquire', 'inquire'], 'enquire about.'),
      mc('Which sentence is correct?', ['I send you the file in attachment.', 'I’ve attached the file.', 'I attach you the file in.', 'Attachment file here.'], 1)
    ],
    cards: [card('c1', 'in allegato', 'attached', 'Please find attached the invoice.'), card('c2', 'oggetto (email)', 'subject line', 'Write a clear subject line.'), card('c3', 'seguito', 'to follow up', 'I’m writing to follow up.'), card('c4', 'chiedere informazioni', 'to enquire', 'I’m writing to enquire.'),
      card('c5', 'riconoscente', 'grateful', 'I’d be grateful if you could…'), card('c6', 'scusarsi', 'to apologise', 'I apologise for the delay.'), card('c7', 'riferirsi a', 'with reference to', 'With reference to your email…'), card('c8', 'cordiali saluti', 'kind regards', 'Kind regards, Marco')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Dictating an email', text: 'Right, I’d like to send a short email to Mr Evans. Dear Mr Evans, I’m writing to confirm our meeting on Friday at ten. I’ve attached the agenda for your reference. Could you please let me know if the time suits you? Thank you for your help. Kind regards, Marco Rossi.',
      qs: [{ q: 'What is the purpose of the email?', o: ['To confirm a meeting', 'To cancel a meeting', 'To ask for a refund', 'To apply for a job'], a: 0, kind: 'explicit' }, { q: 'What has been attached?', o: ['The agenda', 'The invoice', 'A photo', 'A contract'], a: 0, kind: 'explicit' }, { q: 'What can we infer about the register?', o: ['It is formal and polite', 'It is slang', 'It is angry', 'It is very informal'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'I’m writing to confirm our meeting on Friday.', lang: 'en-GB' }, { text: 'Please find attached the report.', lang: 'en-US' }, { text: 'I look forward to hearing from you.', lang: 'en-AU' }],
    shadowing: [{ text: 'Could you please let me know if the time suits you?', lang: 'en-GB', tip: 'Cortese: tono ascendente su you.' }, { text: 'I’ve attached the agenda for your reference.', lang: 'en-US', tip: 'Attached: stress su -tached.' }, { text: 'Please do not hesitate to contact me.', lang: 'en-AU', tip: 'Hesitate: /ˈhezɪteɪt/.' }],
    speaking: [{ prompt: 'Dictate a short email to a colleague asking to reschedule a meeting.', model: 'Hi Anna, I’m writing to ask if we could reschedule our meeting on Thursday. I have an unexpected appointment. Would Friday morning suit you? Thanks for your understanding. Best, Marco.' }, { prompt: 'Say what you would write in the subject line and first sentence to complain about a late delivery.', model: 'Subject: Late delivery of order 5521. Dear Sir or Madam, I’m writing to complain about the late delivery of my order, which was due on Monday.' }] });

  T({ id: 'eng-l2-listening-strategies', title: 'Strategie di ascolto: gist, dettagli e distrattori', summary: 'Come affrontare ascolti B2: previsione, appunti, ascolto selettivo.',
    objectives: ['Prevedere il contenuto prima dell’ascolto', 'Distinguere ascolto globale, selettivo e di dettaglio', 'Riconoscere i distrattori più comuni'],
    pages: [
      { h: 'Obiettivo', b: 'Capire un ascolto non significa capire tutte le parole. A livello B2 devi saper **scegliere che cosa ascoltare** e **ignorare ciò che non serve**. Queste strategie valgono sia in un esame sia nella vita reale.' },
      { h: 'Prima dell’ascolto', b: '1. **Leggi le domande** e sottolinea le parole chiave.\n2. **Prevedi**: chi parla? dove? perché? quale registro?\n3. **Anticipa il lessico**: se il tema è «viaggio», aspettati *delay, platform, booking*.\n\nDedicarsi 30 secondi a questo raddoppia la comprensione.' },
      { h: 'Tipi di ascolto', b: '- **Globale (gist)**: capire il tema e lo scopo. Primo ascolto.\n- **Selettivo**: cercare un’informazione precisa (numero, orario, nome).\n- **Di dettaglio**: capire ragioni, atteggiamenti, opinioni.\n- **Inferenziale**: capire ciò che **non** è detto esplicitamente (tono, sottintesi).\n\nUsa il primo ascolto per il gist, il secondo per il dettaglio.' },
      { h: 'Distrattori e trappole', b: 'Tipiche trappole:\n- **Correzioni**: «It’s on Tuesday — no, sorry, Wednesday.» → la risposta è Wednesday.\n- **Sinonimi**: nell’audio *cheap*, nella domanda *inexpensive*.\n- **Numeri simili**: 13 / 30, 15 / 50: ascolta lo stress (thirTEEN / THIRty).\n- **Negazioni**: «I didn’t think it was bad» = era buono.\n- **Segnali discorsivi**: *however, but, actually* introducono l’informazione chiave.' },
      { h: 'Appunti rapidi', b: 'Non scrivere frasi: usa **parole chiave e simboli**:\n- ↑ aumento, ↓ calo, = uguale, ≠ diverso, @ a, w/ con\n- abbreviazioni: *mtg* (meeting), *info*, *approx.*\n\nScrivi solo numeri, nomi, motivi e opinioni. Dopo l’ascolto, riordina in 1 minuto.' },
      { h: 'Esempio guidato', b: 'Ascolto: *«The meeting is on Tuesday — no, wait, Wednesday at 3. Oh, actually it’s at 3:30.»*\n\nDomanda: **When is the meeting?** → Wednesday at 3:30.\n\nCome ci arrivo: ho notato le correzioni (*no, wait*, *actually*) e ho tenuto l’ultima informazione.\n\nControllo: se la prima risposta che senti è seguita da una correzione, non scrivere subito.' },
      { h: 'Errori comuni', b: '- Rispondere con la prima informazione senza aspettare le correzioni.\n- Bloccarsi su una parola e perdere il resto: lasciala e vai avanti.\n- Scegliere l’opzione con la parola ascoltata: spesso è un distrattore.\n- Non leggere le domande prima.\n- Ascoltare con i sottotitoli: non allena nulla.' },
      { h: 'Riepilogo', b: '- Prima: leggi, prevedi, anticipa.\n- Gist, selettivo, dettaglio, inferenza.\n- Distrattori: correzioni, sinonimi, numeri, negazioni.\n- Appunti con parole chiave e simboli.' }
    ],
    exercises: [
      mc('What should you do first when you get listening questions?', ['Read them and underline key words', 'Close your eyes', 'Write the answer', 'Skip them'], 0),
      listen('The train leaves at fifteen minutes past five. No, sorry, at fifty past five.', 'en-GB', 'When does the train leave?', ['5:15', '5:50', '4:50', '15:50'], 1, 'Correzione: 5:50.'),
      mc('«Gist» listening means…', ['understanding the general idea', 'listening for numbers', 'writing every word', 'translating'], 0),
      listen('I didn’t think the film was bad at all.', 'en-US', 'What does the speaker think?', ['It was good', 'It was bad', 'It was boring', 'No opinion'], 0),
      mc('Which marker often introduces the key information?', ['however', 'and', 'the', 'so'], 0),
      mc('What do you do with an unknown word while listening?', ['Let it go and continue', 'Stop and translate', 'Stop the audio', 'Guess wildly'], 0),
      listen('It costs thirteen pounds, not thirty.', 'en-AU', 'How much does it cost?', ['£13', '£30', '£3', '£1,300'], 0)
    ],
    test: [
      listen('Actually, it’s on Thursday, not Tuesday.', 'en-GB', 'When is it?', ['Tuesday', 'Thursday', 'Both days', 'Not clear'], 1),
      mc('Which is a good note-taking method?', ['Keywords and symbols', 'Full sentences', 'Nothing', 'Only the last word'], 0),
      mc('A common trap in listening tests is…', ['a correction after the first answer', 'a very slow speaker', 'an easy topic', 'no distractors'], 0),
      mc('Inferential listening means understanding…', ['what is implied, not said', 'only numbers', 'only names', 'only the title'], 0)
    ],
    cards: [card('c1', 'distrattore', 'distractor', 'Watch out for distractors.'), card('c2', 'idea generale', 'gist', 'Listen for the gist.'), card('c3', 'dettaglio', 'detail', 'Check every detail.'), card('c4', 'appunti', 'notes', 'Take notes.'),
      card('c5', 'sottintendere', 'to imply', 'He implied he was unhappy.'), card('c6', 'in realtà', 'actually', 'Actually, it’s Thursday.'), card('c7', 'comunque (contrasto)', 'however', 'However, it’s expensive.'), card('c8', 'prevedere', 'to predict', 'Predict the topic.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'Changing plans', text: 'Okay, so the meeting is on Tuesday — oh, wait, sorry, it’s Wednesday at three. Actually, they moved it to three-thirty because of a delay. We’ll need about fifteen minutes for the presentation, not fifty. And don’t forget: the budget is thirteen thousand, not thirty. However, I think we should still prepare the full report.',
      qs: [{ q: 'When is the meeting?', o: ['Wednesday at 3:30', 'Tuesday at 3', 'Wednesday at 3', 'Tuesday at 3:30'], a: 0, kind: 'explicit' }, { q: 'How long will the presentation take?', o: ['About fifteen minutes', 'Fifty minutes', 'An hour', 'Five minutes'], a: 0, kind: 'explicit' }, { q: 'What does the speaker recommend?', o: ['Still preparing the full report', 'Cancelling the meeting', 'Reducing the budget', 'Moving the meeting'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'Actually, it’s on Wednesday, not Tuesday.', lang: 'en-GB' }, { text: 'It costs thirteen thousand pounds.', lang: 'en-US' }, { text: 'I didn’t think it was bad at all.', lang: 'en-AU' }],
    shadowing: [{ text: 'It’s on Tuesday — no, wait, Wednesday.', lang: 'en-US', tip: 'Correzione: stress su Wednesday.' }, { text: 'It costs thirteen, not thirty.', lang: 'en-GB', tip: 'thirTEEN vs THIRty.' }, { text: 'However, we should still prepare the report.', lang: 'en-AU', tip: 'However: pausa e stress.' }],
    speaking: [{ prompt: 'Summarise an audio you heard recently in four sentences: topic, speaker, key point, your opinion.', model: 'I listened to a podcast about sleep. The speaker was a researcher. The main point was that regular sleep improves memory. I think it’s useful advice.' }, { prompt: 'Explain two strategies that help you understand fast speech.', model: 'First, I read the questions before listening. Second, I focus on keywords and ignore small words. I also listen twice: once for the idea, once for the details.' }] });
})(window.ST = window.ST || {});
