/* Inglese — ampliamento stage L0 (fondamenta B1). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order, listen, card } = C;
  const T = (o) => C.addTopic(Object.assign({ subject: 'eng', stage: 'L0', minutes: 20, prereq: [] }, o));

  T({ id: 'eng-l0-questions', title: 'Fare domande: wh-questions e question tags', summary: 'Parole interrogative, ordine delle parole e tag finali.',
    objectives: ['Formare domande con who, what, where, when, why, how', 'Distinguere soggetto e oggetto nella domanda', 'Usare le question tags in modo naturale'],
    pages: [
      { h: 'Obiettivo', b: 'Fare domande è il modo più rapido per avviare una conversazione. In inglese l’ordine delle parole nelle domande cambia rispetto all’affermazione e questo crea errori frequenti.\n\nQui impari le **wh-questions**, il caso speciale delle domande sul soggetto e le **question tags** («You’re coming, aren’t you?»).' },
      { h: 'Le parole interrogative', b: '- **who** (chi), **what** (che cosa), **which** (quale tra opzioni), **whose** (di chi)\n- **where** (dove), **when** (quando), **why** (perché), **how** (come)\n- **how much / how many / how long / how often / how old**\n\nStruttura base: **wh-word + ausiliare + soggetto + verbo**\n> {{en-GB|Where do you work?}} / {{en-GB|What did she say?}} / {{en-GB|Why are they late?}}\n\nCon **be** non serve do: {{en-GB|Where is the station?}}' },
      { h: 'Domande sul soggetto', b: 'Quando la parola interrogativa **è il soggetto** della frase, NON si usa l’ausiliare do/does/did.\n\n- Oggetto: {{en-GB|Who did you call?}} (tu hai chiamato qualcuno)\n- Soggetto: {{en-GB|Who called you?}} (qualcuno ha chiamato te)\n- {{en-GB|What happened?}} / {{en-GB|Who lives here?}} / {{en-GB|Which team won?}}\n\nIl verbo resta alla forma normale (terza persona: *lives*, *won*).' },
      { h: 'Preposizioni in fondo', b: 'Nelle domande informali la preposizione resta **alla fine**:\n> {{en-GB|Who are you talking to?}} / {{en-GB|What is it made of?}} / {{en-GB|Where do you come from?}}\n\nNel registro molto formale si può anticipare («To whom are you speaking?») ma nel parlato è raro.\n\nDomande indirette (già viste): {{en-GB|Do you know where he lives?}} — qui l’ordine è affermativo.' },
      { h: 'Question tags', b: 'Una **question tag** trasforma un’affermazione in una richiesta di conferma. Regola: frase positiva → tag negativa; frase negativa → tag positiva; stesso ausiliare.\n\n- {{en-GB|You’re Italian, aren’t you?}}\n- {{en-GB|She doesn’t smoke, does she?}}\n- {{en-GB|They can swim, can’t they?}}\n- {{en-GB|He went home, didn’t he?}}\n\nCasi speciali: **I am** → *aren’t I?*; **Let’s** → *shall we?*; imperativo → *will you?*\n\nIntonazione: **discendente** = sei quasi sicuro; **ascendente** = chiedi davvero.' },
      { h: 'Esempio guidato', b: 'Trasforma *«Marco works in Milan»* in tre domande:\n\n1. Sì/no: **Does Marco work in Milan?**\n2. Wh sul luogo: **Where does Marco work?**\n3. Tag: **Marco works in Milan, doesn’t he?**\n\nOra sul soggetto: *«Someone called me»* → **Who called you?** (nessun did).\n\nControllo: se nella domanda sul soggetto hai usato did, togli l’ausiliare.' },
      { h: 'Errori comuni', b: '- *Where you live?* → {{en-GB|Where do you live?}}\n- *Who did call you?* (soggetto) → {{en-GB|Who called you?}}\n- *What means this word?* → {{en-GB|What does this word mean?}}\n- *You like pizza, don’t you?* è corretto; *You like pizza, do you?* cambia il significato (sorpresa).\n- *How is she old?* → {{en-GB|How old is she?}}' },
      { h: 'Riepilogo', b: '- wh-word + ausiliare + soggetto + verbo; con be niente do.\n- Domande sul soggetto: niente ausiliare.\n- Preposizione in fondo nel parlato.\n- Tag: positivo ↔ negativo, stesso ausiliare; intonazione = certezza.' }
    ],
    exercises: [
      mc('Which question is correct?', ['Where you live?', 'Where do you live?', 'Where live you?', 'Where does you live?'], 1),
      mc('Someone broke the window. → ___ broke the window?', ['Who did', 'Who', 'Whom did', 'Who does'], 1, 'Domanda sul soggetto: niente ausiliare.'),
      fill('Complete: She isn’t here, ___ she?', ['is'], 'Frase negativa → tag positiva.'),
      mc('You like jazz, ___?', ['do you', 'don’t you', 'aren’t you', 'did you'], 1),
      order('Metti in ordine', ['What', 'does', 'this', 'word', 'mean'], 'Does + soggetto + verbo base.'),
      mc('Which tag completes «Let’s go,»?', ['will we?', 'shall we?', 'don’t we?', 'are we?'], 1),
      mc('«How ___ is the lake?» (profondità)', ['long', 'old', 'deep', 'much'], 2)
    ],
    test: [
      mc('Which is correct?', ['What did happen?', 'What happened?', 'What does happen yesterday?', 'What happen?'], 1),
      fill('Complete: They went to Rome, ___ they?', ['didn’t', "didn't"], 'Passato positivo → didn’t.'),
      mc('Which sentence is correct?', ['Who are you talking?', 'Who are you talking to?', 'To who you are talking?', 'Who you are talking to?'], 1),
      mc('A rising intonation on a tag means…', ['you really ask for information', 'you are sure', 'you are angry', 'nothing'], 0)
    ],
    cards: [card('c1', 'quale (tra opzioni)', 'which', 'Which one do you prefer?'), card('c2', 'di chi', 'whose', 'Whose bag is this?'), card('c3', 'quanto tempo (durata)', 'how long', 'How long does it take?'), card('c4', 'quanto spesso', 'how often', 'How often do you train?'),
      card('c5', 'succedere', 'to happen', 'What happened?'), card('c6', 'significare', 'to mean', 'What does it mean?'), card('c7', 'chiedere', 'to ask', 'Can I ask you something?'), card('c8', 'domanda', 'question', 'That’s a good question.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'A first meeting', text: 'So, you’re new here, aren’t you? Where do you come from? Oh, Naples! Who did you move with? Nobody called you before you arrived, did they? What happened with your flat, then? And how long are you staying? I’m sorry for so many questions. What are you interested in?',
      qs: [{ q: 'Where does the new person come from?', o: ['Rome', 'Naples', 'Milan', 'Turin'], a: 1, kind: 'explicit' }, { q: 'Why does the speaker apologise at the end?', o: ['For asking so many questions', 'For being late', 'For a mistake', 'For leaving'], a: 0, kind: 'explicit' }, { q: 'What is the speaker trying to do?', o: ['Get to know the newcomer', 'Sell something', 'Give directions', 'Complain'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'Where do you come from?', lang: 'en-GB' }, { text: 'You’re new here, aren’t you?', lang: 'en-US' }, { text: 'Who are you talking to?', lang: 'en-AU' }],
    shadowing: [{ text: 'Who did you move with, and how long are you staying?', lang: 'en-GB', tip: 'Intonazione discendente nelle wh-questions.' }, { text: 'You’re coming tonight, aren’t you?', lang: 'en-US', tip: 'Tag con intonazione leggermente ascendente se chiedi conferma.' }, { text: 'What happened with your flat?', lang: 'en-AU', tip: 'Stress su happened e flat.' }],
    speaking: [{ prompt: 'You meet a new colleague. Ask five different questions, including one tag.', model: 'Where are you from? How long have you worked here? What do you do in your free time? Who recommended this restaurant? You’re joining us for lunch, aren’t you?' }, { prompt: 'Ask a friend about a trip they took (four questions).', model: 'Where did you go? Who went with you? What was the best part? How long did you stay?' }] });

  T({ id: 'eng-l0-comparatives', title: 'Confronti: comparativi e superlativi', summary: 'More/-er, the most/-est, as…as, less e fewer.',
    objectives: ['Formare comparativi e superlativi regolari e irregolari', 'Usare as…as e than correttamente', 'Evitare doppi comparativi'],
    pages: [
      { h: 'Obiettivo', b: 'Confrontare persone, cose e situazioni è una funzione quotidiana (acquisti, viaggi, opinioni). In inglese la forma dipende dalla **lunghezza dell’aggettivo**.' },
      { h: 'Comparativo', b: '- Aggettivi **brevi** (1 sillaba): **-er + than**: {{en-GB|taller than}}, {{en-GB|faster than}}. Raddoppio: *big → bigger*, *hot → hotter*. Con -y: *happy → happier*.\n- Aggettivi **lunghi** (2+ sillabe): **more + aggettivo + than**: {{en-GB|more expensive than}}, {{en-GB|more interesting than}}.\n- **Irregolari**: good → **better**, bad → **worse**, far → **farther/further**.\n\n> {{en-GB|This phone is cheaper than that one.}}\n> {{en-GB|Flying is more convenient than driving.}}' },
      { h: 'Superlativo', b: '- Brevi: **the + -est**: {{en-GB|the tallest}}, {{en-GB|the happiest}}.\n- Lunghi: **the most + aggettivo**: {{en-GB|the most beautiful}}.\n- Irregolari: **the best**, **the worst**, **the furthest**.\n\nSpesso si usa **in** con luoghi/gruppi: {{en-GB|the highest mountain in Europe}}; con **of** per insiemi: {{en-GB|the best of all}}.\n\nCon il present perfect: {{en-GB|It’s the best film I’ve ever seen.}}' },
      { h: 'As … as e altri confronti', b: '- **as + aggettivo + as** = uguale: {{en-GB|She’s as tall as her brother.}}\n- **not as … as** = meno di: {{en-GB|This isn’t as difficult as I thought.}}\n- **less … than** (opposto di more): {{en-GB|less expensive than}}.\n- **fewer** (numerabili) / **less** (non numerabili): {{en-GB|fewer people}}, {{en-GB|less water}}.\n- Aumento progressivo: {{en-GB|It’s getting colder and colder.}}\n- Doppio comparativo: {{en-GB|The more you practise, the better you get.}}' },
      { h: 'Esempio guidato', b: 'Confronta due case: *A: 80 mq, 600 €, vicino al centro. B: 100 mq, 700 €, lontana.*\n\n- **House B is bigger than house A**, but it’s **more expensive**.\n- **House A is cheaper** and **closer to the centre**.\n- **House A isn’t as big as house B**.\n- If I want **the cheapest** option, I’ll choose A.\n\nControllo: ho usato than dopo il comparativo e the prima del superlativo?' },
      { h: 'Errori comuni', b: '- *more taller* → {{en-GB|taller}} (non doppio).\n- *the most best* → {{en-GB|the best}}.\n- *more cheap than* → {{en-GB|cheaper than}}.\n- *as tall than* → {{en-GB|as tall as}}.\n- *less people* → {{en-GB|fewer people}} (numerabili).\n- Dimenticare **the** nel superlativo: *She is most intelligent* → *the most intelligent*.' },
      { h: 'Riepilogo', b: '- Brevi: -er / the -est. Lunghi: more / the most.\n- Irregolari: better/best, worse/worst, further/furthest.\n- as…as per uguaglianza; not as…as; less/fewer.\n- The more…, the more… per progressione.' }
    ],
    exercises: [
      mc('This book is ___ than that one.', ['more interesting', 'interestinger', 'most interesting', 'interesting'], 0),
      mc('She is ___ girl in the class.', ['taller', 'the tallest', 'most tall', 'more tall'], 1),
      fill('Complete: My car is as fast ___ yours.', ['as'], 'as … as.'),
      mc('There are ___ cars than ten years ago. (numerabile)', ['less', 'fewer', 'little', 'smaller'], 1),
      mc('Which is correct?', ['more cheaper', 'cheaper', 'most cheap', 'more cheap'], 1),
      fill('Complete: Good, better, the ___.', ['best'], 'Superlativo irregolare.'),
      order('Metti in ordine', ['The', 'more', 'you', 'practise', 'the', 'better', 'you', 'get'], 'The + comparativo, the + comparativo.')
    ],
    test: [
      mc('It’s the ___ film I’ve ever seen.', ['best', 'better', 'most good', 'goodest'], 0),
      mc('Which sentence is correct?', ['He is more older than me.', 'He is older than me.', 'He is oldest than me.', 'He is older that me.'], 1),
      fill('Complete: It’s getting colder and ___.', ['colder'], 'Aumento progressivo.'),
      mc('I drink ___ coffee than before. (non numerabile)', ['fewer', 'less', 'lesser', 'few'], 1)
    ],
    cards: [card('c1', 'più economico', 'cheaper', 'This one is cheaper.'), card('c2', 'più costoso', 'more expensive', 'It’s more expensive.'), card('c3', 'il migliore', 'the best', 'This is the best.'), card('c4', 'il peggiore', 'the worst', 'It was the worst day.'),
      card('c5', 'lontano', 'far', 'It’s far from here.'), card('c6', 'comodo', 'convenient', 'It’s very convenient.'), card('c7', 'pericoloso', 'dangerous', 'It’s more dangerous.'), card('c8', 'uguale', 'the same', 'They are the same.')],
    listening: [{ id: 'l1', lang: 'en-US', title: 'Choosing a phone', text: 'So I’m comparing two phones. The first one is cheaper, but it’s not as fast as the second one. The second has a bigger screen and a better camera, but the battery isn’t as good. Honestly, it’s the most expensive phone in the shop, and I’d need to save for months. The cheaper one is less powerful, but fewer things can go wrong with it.',
      qs: [{ q: 'Which phone is cheaper?', o: ['The first', 'The second', 'Both', 'Neither'], a: 0, kind: 'explicit' }, { q: 'What is the advantage of the second phone?', o: ['Bigger screen and better camera', 'Longer battery', 'Lower price', 'Smaller size'], a: 0, kind: 'explicit' }, { q: 'Which one will the speaker probably choose?', o: ['Not clear: he is still deciding', 'The second one for sure', 'Neither', 'A third one'], a: 0, kind: 'implicit' }] }],
    dictation: [{ text: 'This phone is cheaper than that one.', lang: 'en-GB' }, { text: 'It’s the best film I’ve ever seen.', lang: 'en-US' }, { text: 'The more you practise, the better you get.', lang: 'en-AU' }],
    shadowing: [{ text: 'It’s cheaper, but it’s not as fast as the other one.', lang: 'en-GB', tip: 'Stress su cheaper e fast; «as … as» in debole.' }, { text: 'It’s the most expensive phone in the shop.', lang: 'en-US', tip: 'Superlativo: stress su most e expensive.' }, { text: 'The more you practise, the better you get.', lang: 'en-AU', tip: 'Ritmo a coppie.' }],
    speaking: [{ prompt: 'Compare two cities you know (four sentences).', model: 'Rome is bigger than Florence, but Florence is quieter. Rome is more crowded, and the traffic is worse. Florence is the most beautiful city I’ve visited.' }, { prompt: 'Compare two ways of travelling to work.', model: 'The train is faster than the bus, but it’s more expensive. Cycling is the cheapest option, and it’s healthier.' }] });

  T({ id: 'eng-l0-quantity', title: 'Quantità: numerabili e non, some/any, much/many', summary: 'Nomi numerabili e non numerabili, quantificatori e too/enough.',
    objectives: ['Distinguere nomi numerabili e non numerabili', 'Usare some, any, much, many, a lot of, a few, a little', 'Usare too e enough correttamente'],
    pages: [
      { h: 'Obiettivo', b: 'Parlare di quantità sembra semplice, ma gli italiani sbagliano spesso perché alcune parole sono numerabili in italiano e non in inglese (*informazioni*, *consigli*, *capelli*). Impari a scegliere il quantificatore giusto.' },
      { h: 'Numerabili e non numerabili', b: '**Numerabili**: si contano (*a book, two books*). **Non numerabili**: massa o concetto (*water, money, time, advice, information, news, luggage, furniture, hair*).\n\nNon hanno plurale e non vogliono **a/an**: {{en-GB|I need some advice.}} (non *an advice*). Per contarli: *a piece of advice*, *a glass of water*, *a slice of bread*.\n\nAttenzione: *news* è singolare ({{en-GB|The news is good.}}).' },
      { h: 'Some, any, no', b: '- **some**: affermativa, offerte/richieste: {{en-GB|I’d like some water.}} / {{en-GB|Would you like some tea?}}\n- **any**: negativa e domanda: {{en-GB|I don’t have any money.}} / {{en-GB|Do you have any questions?}}\n- **no** = not any: {{en-GB|I have no time.}}\n- Composti: *somebody, anything, nowhere…*\n\nCon **any** in frase affermativa il significato è «qualsiasi»: {{en-GB|You can ask any question.}}' },
      { h: 'Much, many, a lot of, few, little', b: '- **many** (numerabili) / **much** (non numerabili): usati soprattutto in negative e domande: {{en-GB|How many people came?}} / {{en-GB|We don’t have much time.}}\n- **a lot of / lots of**: ovunque, soprattutto in affermative.\n- **a few** (alcuni, positivo) vs **few** (pochi, quasi nessuno); **a little** vs **little**, per i non numerabili.\n> {{en-GB|I have a few friends here.}} (ne ho alcuni) / {{en-GB|I have few friends here.}} (quasi nessuno)' },
      { h: 'Too e enough', b: '- **too** = troppo (negativo): {{en-GB|It’s too hot.}} / {{en-GB|too many people}} / {{en-GB|too much noise}}.\n- **enough** = abbastanza. Dopo l’aggettivo, prima del nome: {{en-GB|He isn’t old enough.}} / {{en-GB|We have enough chairs.}}\n- **too … to**: {{en-GB|It’s too cold to swim.}}\n- **enough … to**: {{en-GB|She’s old enough to drive.}}\n\nNon si dice *too much good* ma *very good*.' },
      { h: 'Esempio guidato', b: 'Descrivi una cucina: *Non c’è molto spazio, ci sono poche sedie, ma abbiamo abbastanza piatti.*\n\n**There isn’t much space, there are only a few chairs, but we have enough plates.**\n\nOra chiedi: *Hai delle domande? Quanto tempo ti serve?* → **Do you have any questions? How much time do you need?**\n\nControllo: numerabile → many/few/a few; non numerabile → much/little/a little.' },
      { h: 'Errori comuni', b: '- *an information* → {{en-GB|some information / a piece of information.}}\n- *many money* → {{en-GB|much money.}}\n- *I have few time* → {{en-GB|I have little time.}}\n- *The news are bad* → {{en-GB|The news is bad.}}\n- *enough big* → {{en-GB|big enough.}}\n- *I have some questions?* in domanda neutra → {{en-GB|Do you have any questions?}}' },
      { h: 'Riepilogo', b: '- Non numerabili: niente plurale, niente a/an.\n- some (affermativa), any (negativa/domanda).\n- many/few + numerabili; much/little + non numerabili; a lot of ovunque.\n- too = eccesso; enough dopo l’aggettivo.' }
    ],
    exercises: [
      mc('Which sentence is correct?', ['I need an advice.', 'I need some advice.', 'I need advices.', 'I need many advice.'], 1),
      mc('We don’t have ___ time.', ['many', 'much', 'a few', 'few'], 1),
      mc('How ___ people came to the party?', ['much', 'many', 'a little', 'any'], 1),
      fill('Complete: She’s not tall ___ to reach the shelf.', ['enough'], 'enough dopo l’aggettivo.'),
      mc('It’s ___ cold to go swimming.', ['enough', 'too', 'very much', 'so much'], 1),
      mc('The news ___ good today.', ['are', 'is', 'were', 'have been'], 1),
      mc('I have ___ friends here — I know almost nobody.', ['a few', 'few', 'a little', 'little'], 1)
    ],
    test: [
      mc('Which is a non-countable noun?', ['chair', 'information', 'idea', 'book'], 1),
      fill('Complete: Do you have ___ questions?', ['any'], 'Domanda: any.'),
      mc('He isn’t old ___ to vote.', ['too', 'enough', 'very', 'much'], 1),
      mc('There is ___ milk in the fridge — we need to buy some.', ['a little', 'little', 'a few', 'few'], 1)
    ],
    cards: [card('c1', 'consiglio/i', 'advice', 'Can you give me some advice?'), card('c2', 'informazioni', 'information', 'I need some information.'), card('c3', 'bagagli', 'luggage', 'My luggage is heavy.'), card('c4', 'mobili', 'furniture', 'The furniture is new.'),
      card('c5', 'abbastanza', 'enough', 'That’s enough.'), card('c6', 'troppo', 'too', 'It’s too expensive.'), card('c7', 'alcuni (pochi ma presenti)', 'a few', 'I have a few ideas.'), card('c8', 'un po’ di (non numerabile)', 'a little', 'I need a little help.')],
    listening: [{ id: 'l1', lang: 'en-AU', title: 'Moving house', text: 'We’ve got too much furniture for the new flat, so we’re selling a few things. I don’t have much time, because the move is on Friday. There isn’t enough space for the big sofa, and we have almost no luggage left to pack. Did you hear any news about the removal van? Some friends said they’d help, so we should have enough people.',
      qs: [{ q: 'Why are they selling things?', o: ['The flat is too small for all the furniture', 'They need money', 'They hate the furniture', 'It’s old'], a: 0, kind: 'implicit' }, { q: 'When is the move?', o: ['Friday', 'Monday', 'Next month', 'Tonight'], a: 0, kind: 'explicit' }, { q: 'What does the speaker ask about?', o: ['News about the removal van', 'The price of the flat', 'The weather', 'A sofa'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'I don’t have much time.', lang: 'en-GB' }, { text: 'Do you have any questions?', lang: 'en-US' }, { text: 'There isn’t enough space for the sofa.', lang: 'en-AU' }],
    shadowing: [{ text: 'We’ve got too much furniture and not enough space.', lang: 'en-AU', tip: 'Stress su too much e not enough.' }, { text: 'I have a few ideas, but I don’t have much time.', lang: 'en-GB', tip: 'Contrasto few/much.' }, { text: 'Could I have some advice, please?', lang: 'en-US', tip: 'Intonazione cortese.' }],
    speaking: [{ prompt: 'Describe your fridge or your desk using some, any, much, many, enough.', model: 'There’s some milk and a few eggs, but there isn’t any cheese. There aren’t many vegetables, and I don’t have enough fruit for the week.' }, { prompt: 'Say what you have too much of and what you don’t have enough of in your life.', model: 'I have too many things to do, but I don’t have enough free time. I’d like a little more sleep and fewer meetings.' }] });

  T({ id: 'eng-l0-prepositions', title: 'Preposizioni di tempo e di luogo', summary: 'in, on, at per tempo e luogo; to, into, towards; from, for, since.',
    objectives: ['Usare in, on, at con tempo e luogo', 'Distinguere to, at, in per il movimento e la posizione', 'Evitare gli errori di traduzione più frequenti'],
    pages: [
      { h: 'Obiettivo', b: 'Le preposizioni sono la parte dell’inglese più difficile da «tradurre»: ogni lingua le usa in modo diverso. Qui imparerai uno schema per **in / on / at** e per i **movimenti** (*go to, arrive at*).' },
      { h: 'Il tempo: at, on, in', b: '- **at** = punto preciso: {{en-GB|at 6 o’clock}}, {{en-GB|at night}}, {{en-GB|at the weekend}} (UK), {{en-GB|at Christmas}}.\n- **on** = giorni e date: {{en-GB|on Monday}}, {{en-GB|on 5 May}}, {{en-GB|on my birthday}}, {{en-GB|on Friday evening}}.\n- **in** = periodi lunghi: {{en-GB|in July}}, {{en-GB|in 2024}}, {{en-GB|in summer}}, {{en-GB|in the morning}}, {{en-GB|in two weeks}}.\n\nSenza preposizione: *next week, last year, this morning, every day*.' },
      { h: 'Il luogo: at, on, in', b: '- **at** = punto / luogo come funzione: {{en-GB|at the station}}, {{en-GB|at home}}, {{en-GB|at work}}, {{en-GB|at a party}}.\n- **on** = su una superficie o linea: {{en-GB|on the table}}, {{en-GB|on the wall}}, {{en-GB|on the second floor}}, {{en-GB|on the bus}}.\n- **in** = dentro uno spazio: {{en-GB|in the room}}, {{en-GB|in London}}, {{en-GB|in a car}}.\n\nMezzi: **by** + mezzo ({{en-GB|by train}}), ma **on foot**.' },
      { h: 'Movimento e direzione', b: '- **to** = destinazione: {{en-GB|go to Rome}}, {{en-GB|go to school}}. Con **home**: niente preposizione: {{en-GB|go home}}.\n- **into / out of** = entrare/uscire: {{en-GB|He walked into the room.}}\n- **towards** = in direzione di; **through** = attraverso; **across** = di là; **along** = lungo; **past** = oltre; **over/under**.\n- **arrive at** (luogo piccolo) / **arrive in** (città, paese): {{en-GB|arrive at the airport}}, {{en-GB|arrive in Paris}}.' },
      { h: 'For, since, during, until', b: '- **for** + durata: {{en-GB|for three hours}}.\n- **since** + inizio: {{en-GB|since Monday}}.\n- **during** + evento: {{en-GB|during the film}}.\n- **until / by**: until = fino a (continua); by = entro (scadenza). {{en-GB|I’ll wait until six.}} / {{en-GB|Send it by Friday.}}\n- **ago** dopo la durata: {{en-GB|two years ago}}.' },
      { h: 'Esempio guidato', b: 'Completa: *«The meeting is ___ Monday ___ 10 o’clock, ___ the third floor. We arrive ___ the office ___ 9:30 and wait ___ the reception ___ the meeting starts.»*\n\n**on** Monday **at** 10, **on** the third floor, arrive **at** the office **at** 9:30, wait **at** the reception **until** the meeting starts.\n\nControllo: giorno → on, ora → at, piano → on, fino a → until.' },
      { h: 'Errori comuni', b: '- *in Monday* → {{en-GB|on Monday.}}\n- *at the morning* → {{en-GB|in the morning.}}\n- *I go to home* → {{en-GB|I go home.}}\n- *I arrived to Rome* → {{en-GB|I arrived in Rome.}}\n- *I’m married with Anna* → {{en-GB|married to Anna.}}\n- *depends of* → {{en-GB|depends on.}}' },
      { h: 'Riepilogo', b: '- Tempo: at (ora), on (giorno/data), in (mese/anno/stagione).\n- Luogo: at (punto), on (superficie), in (spazio chiuso).\n- Movimento: to, into, towards; arrive at/in.\n- for/since/during; until/by.' }
    ],
    exercises: [
      mc('The class starts ___ nine o’clock.', ['in', 'on', 'at', 'to'], 2),
      mc('I was born ___ 1990 ___ May.', ['in … in', 'on … in', 'in … on', 'at … in'], 0),
      mc('We have lunch ___ Sunday.', ['in', 'on', 'at', 'by'], 1),
      mc('I’m going ___ home now.', ['to', 'at', 'in', '(nessuna preposizione)'], 3, 'Con home non serve preposizione.'),
      mc('She arrived ___ the airport late.', ['to', 'in', 'at', 'on'], 2),
      mc('Send the report ___ Friday (deadline).', ['until', 'by', 'during', 'since'], 1),
      mc('He has lived here ___ 2019.', ['for', 'since', 'during', 'from'], 1)
    ],
    test: [
      mc('See you ___ the weekend! (UK)', ['at', 'on', 'in', 'to'], 0),
      mc('The picture is ___ the wall.', ['at', 'in', 'on', 'to'], 2),
      fill('Complete: I have worked here ___ three years.', ['for'], 'Durata: for.'),
      mc('Which is correct?', ['I arrived to Paris.', 'I arrived in Paris.', 'I arrived at Paris.', 'I arrived on Paris.'], 1)
    ],
    cards: [card('c1', 'attraverso', 'through', 'We walked through the park.'), card('c2', 'lungo', 'along', 'along the river'), card('c3', 'di fronte a', 'opposite', 'opposite the station'), card('c4', 'accanto a', 'next to', 'next to the bank'),
      card('c5', 'fino a', 'until', 'I’ll wait until six.'), card('c6', 'entro', 'by', 'by Friday'), card('c7', 'durante', 'during', 'during the film'), card('c8', 'dipendere da', 'to depend on', 'It depends on you.')],
    listening: [{ id: 'l1', lang: 'en-GB', title: 'Directions and times', text: 'The bank is on the corner, opposite the station. It opens at nine on weekdays, but on Saturday it opens at ten. In the morning it’s quiet, and during lunchtime it’s crowded. Walk along the river, go through the park, and you’ll arrive at the main square. I’ll wait for you there until half past twelve.',
      qs: [{ q: 'When does the bank open on Saturday?', o: ['At ten', 'At nine', 'At eleven', 'It’s closed'], a: 0, kind: 'explicit' }, { q: 'When is the bank crowded?', o: ['During lunchtime', 'In the morning', 'At night', 'On Sunday'], a: 0, kind: 'explicit' }, { q: 'How long will the speaker wait?', o: ['Until 12:30', 'Until ten', 'Until Friday', 'All day'], a: 0, kind: 'explicit' }] }],
    dictation: [{ text: 'See you on Monday at nine.', lang: 'en-GB' }, { text: 'I arrived in Rome last night.', lang: 'en-US' }, { text: 'The bank is opposite the station.', lang: 'en-AU' }],
    shadowing: [{ text: 'Walk along the river and go through the park.', lang: 'en-GB', tip: 'Ritmo regolare; stress su walk, river, park.' }, { text: 'It opens at nine on weekdays.', lang: 'en-US', tip: 'At nine on weekdays: due preposizioni deboli.' }, { text: 'I’ll wait for you until half past twelve.', lang: 'en-AU', tip: 'Half past: /hɑːf pɑːst/.' }],
    speaking: [{ prompt: 'Describe your weekly routine with at, on, in (five sentences).', model: 'I get up at seven on weekdays. In the morning I work at home. On Wednesday I go to the gym at six. At the weekend I visit my parents. In July I take a holiday.' }, { prompt: 'Give directions from your home to the nearest supermarket.', model: 'Leave the building and turn left. Walk along the street, past the bank, and cross the road at the traffic lights. The supermarket is next to the pharmacy, opposite the park.' }] });
})(window.ST = window.ST || {});
