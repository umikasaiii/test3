(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A("cul-sistema-solare", {
    title: { t: "The solar system", it: "Il sistema solare" },
    sum: [
      { t: "The ⟦solar system⟧ formed from a collapsing cloud of gas and dust, and most of its mass is in the Sun.", it: "Il sistema solare si formò dal collasso di una nube di gas e polveri e la maggior parte della sua massa è nel Sole." },
      { t: "Eight ⟦planets⟧ orbit the Sun: four rocky ones, two gas giants and two ice giants.", it: "Otto pianeti orbitano attorno al Sole: quattro rocciosi, due giganti gassosi e due giganti ghiacciati." },
      { t: "The Sun is a stable star that makes energy by ⟦nuclear fusion⟧, turning hydrogen into helium in its core.", it: "Il Sole è una stella stabile che produce energia con la fusione nucleare, trasformando idrogeno in elio nel nucleo." },
      { t: "Distances are measured in ⟦astronomical units⟧, and light from the Sun takes about eight minutes to reach the Earth.", it: "Le distanze si misurano in unità astronomiche e la luce del Sole impiega circa otto minuti per raggiungere la Terra." },
      { t: "The Moon shows ⟦phases⟧ because we see a different lit part, and an ⟦eclipse⟧ happens when Sun, Earth and Moon line up.", it: "La Luna mostra le fasi perché ne vediamo una parte illuminata diversa, e un'eclissi avviene quando Sole, Terra e Luna sono allineati." },
      { t: "The ⟦seasons⟧ depend on the tilt of the Earth's axis, not on its distance from the Sun.", it: "Le stagioni dipendono dall'inclinazione dell'asse terrestre, non dalla distanza dal Sole." },
      { t: "⟦Kepler's laws⟧ describe orbits as ellipses, with the square of the period proportional to the cube of the orbit size.", it: "Le leggi di Keplero descrivono le orbite come ellissi, con il quadrato del periodo proporzionale al cubo della dimensione dell'orbita." }
    ],
    gloss: [
      { w: "solar system", it: "sistema solare" },
      { w: "planets", it: "pianeti" },
      { w: "nuclear fusion", it: "fusione nucleare" },
      { w: "astronomical units", it: "unità astronomiche" },
      { w: "phases", it: "fasi (lunari)" },
      { w: "eclipse", it: "eclissi" },
      { w: "seasons", it: "stagioni" },
      { w: "Kepler's laws", it: "leggi di Keplero" },
      { w: "orbit", it: "orbita" },
      { w: "asteroid", it: "asteroide" }
    ]
  });
  A("cul-stelle-galassie-cosmologia", {
    title: { t: "Stars, galaxies and cosmology", it: "Stelle, galassie e cosmologia" },
    sum: [
      { t: "A ⟦light year⟧ is the distance light travels in a year, so it measures distance, not time.", it: "Un anno luce è la distanza percorsa dalla luce in un anno, quindi misura una distanza, non un tempo." },
      { t: "A ⟦star⟧ is a sphere of plasma where nuclear fusion happens, and its mass governs almost its whole life.", it: "Una stella è una sfera di plasma in cui avviene la fusione nucleare, e la sua massa governa quasi tutta la sua vita." },
      { t: "Stars like the Sun end as a ⟦white dwarf⟧, while very massive stars explode as a ⟦supernova⟧.", it: "Le stelle come il Sole finiscono come nane bianche, mentre le stelle molto massicce esplodono come supernove." },
      { t: "A ⟦black hole⟧ is a region where gravity is so strong that not even light can escape.", it: "Un buco nero è una regione in cui la gravità è così intensa che nemmeno la luce può sfuggire." },
      { t: "Our galaxy, the ⟦Milky Way⟧, is a barred spiral, and the observable universe contains a huge number of galaxies.", it: "La nostra galassia, la Via Lattea, è una spirale barrata, e l'universo osservabile contiene un enorme numero di galassie." },
      { t: "⟦Hubble's law⟧ says that distant galaxies move away faster, because space itself is expanding.", it: "La legge di Hubble dice che le galassie lontane si allontanano più velocemente, perché è lo spazio stesso a espandersi." },
      { t: "The ⟦Big Bang⟧ model rests on expansion, the cosmic background radiation and the abundance of light elements; dark matter remains unknown.", it: "Il modello del Big Bang si basa sull'espansione, sulla radiazione cosmica di fondo e sull'abbondanza degli elementi leggeri; la materia oscura resta sconosciuta." }
    ],
    gloss: [
      { w: "light year", it: "anno luce" },
      { w: "star", it: "stella" },
      { w: "white dwarf", it: "nana bianca" },
      { w: "supernova", it: "supernova" },
      { w: "black hole", it: "buco nero" },
      { w: "Milky Way", it: "Via Lattea" },
      { w: "Hubble's law", it: "legge di Hubble" },
      { w: "Big Bang", it: "Big Bang" },
      { w: "redshift", it: "spostamento verso il rosso" },
      { w: "dark matter", it: "materia oscura" }
    ]
  });
  A("cul-scienze-della-terra", {
    title: { t: "Earth sciences", it: "Scienze della Terra" },
    sum: [
      { t: "We cannot dig deep enough, so the Earth's inner layers are studied mainly through ⟦seismic waves⟧.", it: "Non possiamo scavare abbastanza, quindi gli strati interni della Terra si studiano soprattutto con le onde sismiche." },
      { t: "The Earth has a crust, a mantle, a liquid outer core and a solid inner core.", it: "La Terra ha una crosta, un mantello, un nucleo esterno liquido e un nucleo interno solido." },
      { t: "In ⟦plate tectonics⟧, the rigid lithosphere is split into plates that move a few centimetres a year.", it: "Nella tettonica a placche, la litosfera rigida è divisa in placche che si muovono di pochi centimetri all'anno." },
      { t: "Earthquakes and volcanoes occur mostly at plate boundaries, where plates diverge, converge or slide past each other.", it: "Terremoti e vulcani avvengono per lo più ai margini delle placche, dove queste si allontanano, si avvicinano o scorrono lateralmente." },
      { t: "Rocks are ⟦igneous⟧, sedimentary or metamorphic, and one type can turn into another in the rock cycle.", it: "Le rocce sono ignee, sedimentarie o metamorfiche, e un tipo può trasformarsi in un altro nel ciclo delle rocce." },
      { t: "⟦Weather⟧ is the condition at a given moment and place, while ⟦climate⟧ is the long-term statistics of weather.", it: "Il tempo meteorologico è la condizione in un dato momento e luogo, mentre il clima è la statistica del tempo su lungo periodo." },
      { t: "The natural ⟦greenhouse effect⟧ warms the planet, and according to the IPCC human origin of today's warming is unequivocal.", it: "L'effetto serra naturale riscalda il pianeta e, secondo l'IPCC, l'origine umana del riscaldamento attuale è inequivocabile." }
    ],
    gloss: [
      { w: "seismic waves", it: "onde sismiche" },
      { w: "plate tectonics", it: "tettonica a placche" },
      { w: "lithosphere", it: "litosfera" },
      { w: "earthquake", it: "terremoto" },
      { w: "volcano", it: "vulcano" },
      { w: "igneous", it: "ignee" },
      { w: "weather", it: "tempo meteorologico" },
      { w: "climate", it: "clima" },
      { w: "greenhouse effect", it: "effetto serra" },
      { w: "mantle", it: "mantello" }
    ]
  });
  A("cul-filosofia-antica", {
    title: { t: "Ancient philosophy: from the pre-Socratics to the Hellenistic age", it: "Filosofia antica: dai presocratici all'ellenismo" },
    sum: [
      { t: "Philosophy means «love of wisdom» and began in Greek cities, seeking rational explanations of the world instead of only myth.", it: "Filosofia significa «amore per la sapienza» e nacque nelle città greche, cercando spiegazioni razionali del mondo invece del solo mito." },
      { t: "The ⟦pre-Socratics⟧ looked for the ⟦archè⟧, the original principle of everything: water for Thales, atoms for Democritus.", it: "I presocratici cercavano l'archè, il principio originario di tutto: l'acqua per Talete, gli atomi per Democrito." },
      { t: "Socrates questioned citizens with irony and ⟦maieutics⟧, helping them find the truth themselves; he wrote nothing.", it: "Socrate interrogava i cittadini con ironia e maieutica, aiutandoli a trovare da soli la verità; non scrisse nulla." },
      { t: "Plato taught the ⟦theory of Ideas⟧: the changing sensible world is an imperfect copy of eternal essences.", it: "Platone insegnò la teoria delle idee: il mondo sensibile e mutevole è una copia imperfetta di essenze eterne." },
      { t: "Aristotle placed forms inside concrete things and founded logic with the ⟦syllogism⟧.", it: "Aristotele collocò le forme dentro le cose concrete e fondò la logica con il sillogismo." },
      { t: "In the Hellenistic age, ⟦Epicureanism⟧ sought calm by moderating desires, and ⟦Stoicism⟧ taught living according to reason and nature.", it: "In età ellenistica l'epicureismo cercava la serenità moderando i desideri, e lo stoicismo insegnava a vivere secondo ragione e natura." },
      { t: "⟦Scepticism⟧ suspended judgement, since the truth cannot be decided, and so aimed at tranquillity.", it: "Lo scetticismo sospendeva il giudizio, perché non si può decidere il vero, e così mirava alla tranquillità." }
    ],
    gloss: [
      { w: "pre-Socratics", it: "presocratici" },
      { w: "archè", it: "archè, principio originario" },
      { w: "maieutics", it: "maieutica, arte della levatrice" },
      { w: "theory of Ideas", it: "teoria delle idee" },
      { w: "syllogism", it: "sillogismo" },
      { w: "Epicureanism", it: "epicureismo" },
      { w: "Stoicism", it: "stoicismo" },
      { w: "Scepticism", it: "scetticismo" },
      { w: "sophists", it: "sofisti" },
      { w: "virtue", it: "virtù" }
    ]
  });
  A("cul-filosofia-medievale-moderna", {
    title: { t: "Medieval and modern philosophy: from Augustine to Hume", it: "Filosofia medievale e moderna: da Agostino a Hume" },
    sum: [
      { t: "In the Middle Ages philosophy was tied to theology, and the central question was how ⟦faith and reason⟧ relate.", it: "Nel Medioevo la filosofia era legata alla teologia, e la domanda centrale era il rapporto tra fede e ragione." },
      { t: "Augustine, influenced by Plato, looked for truth inside the soul and stressed free will and ⟦grace⟧.", it: "Agostino, influenzato da Platone, cercava la verità dentro l'anima e sottolineava libero arbitrio e grazia." },
      { t: "Thomas Aquinas absorbed Aristotle into Christian thought; his ⟦scholasticism⟧ held that faith and reason do not contradict each other.", it: "Tommaso d'Aquino assimilò Aristotele nel pensiero cristiano; la sua scolastica sostenne che fede e ragione non si contraddicono." },
      { t: "Descartes doubted everything with ⟦methodical doubt⟧ and found one certainty: «I think, therefore I am».", it: "Cartesio dubitò di tutto con il dubbio metodico e trovò una certezza: «penso, dunque sono»." },
      { t: "⟦Rationalism⟧, with Descartes, Spinoza and Leibniz, makes reason and innate ideas the source of certain knowledge.", it: "Il razionalismo, con Cartesio, Spinoza e Leibniz, fa della ragione e delle idee innate la fonte della conoscenza certa." },
      { t: "⟦Empiricism⟧, with Locke, Berkeley and Hume, holds that all knowledge comes from sense experience.", it: "L'empirismo, con Locke, Berkeley e Hume, sostiene che ogni conoscenza deriva dall'esperienza sensibile." },
      { t: "Hume showed the ⟦problem of induction⟧: we expect the sun to rise tomorrow by habit, not by logical necessity.", it: "Hume mostrò il problema dell'induzione: ci aspettiamo che il sole sorga domani per abitudine, non per necessità logica." }
    ],
    gloss: [
      { w: "faith and reason", it: "fede e ragione" },
      { w: "grace", it: "grazia" },
      { w: "scholasticism", it: "scolastica" },
      { w: "methodical doubt", it: "dubbio metodico" },
      { w: "Rationalism", it: "razionalismo" },
      { w: "Empiricism", it: "empirismo" },
      { w: "problem of induction", it: "problema dell'induzione" },
      { w: "cogito", it: "cogito (penso, dunque sono)" },
      { w: "free will", it: "libero arbitrio" },
      { w: "innate ideas", it: "idee innate" }
    ]
  });
  A("cul-illuminismo-kant", {
    title: { t: "The Enlightenment and Kant: reason, freedom, critique", it: "Illuminismo e Kant: ragione, libertà, critica" },
    sum: [
      { t: "The ⟦Enlightenment⟧ trusted critical reason and progress against prejudice, superstition and despotism.", it: "L'Illuminismo si fidava della ragione critica e del progresso contro pregiudizi, superstizioni e dispotismo." },
      { t: "Its heart was the ⟦Encyclopédie⟧, a collective work meant to collect and spread knowledge.", it: "Il suo cuore era l'Encyclopédie, un'opera collettiva per raccogliere e diffondere le conoscenze." },
      { t: "Montesquieu proposed the ⟦separation of powers⟧ to limit power, and Voltaire fought for ⟦tolerance⟧.", it: "Montesquieu propose la separazione dei poteri per limitare il potere, e Voltaire lottò per la tolleranza." },
      { t: "For Kant, enlightenment means leaving a self-imposed immaturity; his motto is «Dare to use your own intelligence».", it: "Per Kant l'Illuminismo è l'uscita da una minorità imputabile a se stessi; il suo motto è «Abbi il coraggio di servirti della tua intelligenza»." },
      { t: "In the Critique of Pure Reason, knowledge needs experience and ⟦a priori⟧ forms, and we know ⟦phenomena⟧, not the thing in itself.", it: "Nella Critica della ragion pura la conoscenza richiede esperienza e forme a priori, e conosciamo i fenomeni, non la cosa in sé." },
      { t: "Morality comes from duty dictated by reason, not from goals or rewards.", it: "La morale deriva dal dovere dettato dalla ragione, non da fini o premi." },
      { t: "The ⟦categorical imperative⟧ says: act on a maxim you can want as a universal law, and treat humanity as an end.", it: "L'imperativo categorico dice: agisci secondo una massima che puoi volere come legge universale e tratta l'umanità come un fine." }
    ],
    gloss: [
      { w: "Enlightenment", it: "Illuminismo" },
      { w: "Encyclopédie", it: "Encyclopédie (Enciclopedia)" },
      { w: "separation of powers", it: "separazione dei poteri" },
      { w: "tolerance", it: "tolleranza" },
      { w: "a priori", it: "a priori" },
      { w: "phenomena", it: "fenomeni" },
      { w: "categorical imperative", it: "imperativo categorico" },
      { w: "thing in itself", it: "cosa in sé (noumeno)" },
      { w: "duty", it: "dovere" },
      { w: "autonomy", it: "autonomia" }
    ]
  });
  A("cul-filosofia-ottocento", {
    title: { t: "Nineteenth-century philosophy: Hegel, Marx, Nietzsche", it: "Filosofia dell'Ottocento: Hegel, Marx, Nietzsche" },
    sum: [
      { t: "Nineteenth-century philosophy had to face the French Revolution, the Industrial Revolution and the success of science.", it: "La filosofia dell'Ottocento doveva fare i conti con la Rivoluzione francese, la Rivoluzione industriale e il successo delle scienze." },
      { t: "⟦Romanticism⟧ reacted against Enlightenment rationalism by valuing feeling, history, nation and the individual.", it: "Il Romanticismo reagì al razionalismo illuminista valorizzando sentimento, storia, nazione e individuo." },
      { t: "For Hegel, reality is the development of Spirit in history, which advances through a ⟦dialectic⟧ of overcome contradictions.", it: "Per Hegel la realtà è lo sviluppo dello Spirito nella storia, che procede con una dialettica di contraddizioni superate." },
      { t: "Marx's ⟦historical materialism⟧ holds that the economy conditions law, politics and culture, and capitalism produces ⟦alienation⟧.", it: "Il materialismo storico di Marx sostiene che l'economia condiziona diritto, politica e cultura, e il capitalismo produce alienazione." },
      { t: "⟦Positivism⟧ saw science as the only valid knowledge and the engine of progress; Comte founded sociology.", it: "Il positivismo vedeva nella scienza l'unico sapere valido e il motore del progresso; Comte fondò la sociologia." },
      { t: "Kierkegaard defended the single individual against systems, and described three stages of existence.", it: "Kierkegaard difese il singolo contro i sistemi e descrisse tre stadi dell'esistenza." },
      { t: "Nietzsche announced the «death of God», the fading of Christian belief as a basis of values, and discussed ⟦nihilism⟧.", it: "Nietzsche annunciò la «morte di Dio», il venir meno della credenza cristiana come fondamento dei valori, e trattò il nichilismo." }
    ],
    gloss: [
      { w: "Romanticism", it: "Romanticismo" },
      { w: "dialectic", it: "dialettica" },
      { w: "historical materialism", it: "materialismo storico" },
      { w: "alienation", it: "alienazione" },
      { w: "Positivism", it: "positivismo" },
      { w: "nihilism", it: "nichilismo" },
      { w: "class struggle", it: "lotta di classe" },
      { w: "Spirit", it: "Spirito (in Hegel)" },
      { w: "overman", it: "superuomo" },
      { w: "will to power", it: "volontà di potenza" }
    ]
  });
  A("cul-filosofia-novecento", {
    title: { t: "Twentieth-century philosophy: existence, language, science, politics", it: "Filosofia del Novecento: esistenza, linguaggio, scienza, politica" },
    sum: [
      { t: "The twentieth century saw wars, totalitarianism and scientific revolutions, and philosophy split into traditions such as continental and analytic.", it: "Il Novecento vide guerre, totalitarismi e rivoluzioni scientifiche, e la filosofia si divise in tradizioni come quella continentale e quella analitica." },
      { t: "Husserl founded ⟦phenomenology⟧: it describes how experience appears to consciousness, which is always consciousness of something.", it: "Husserl fondò la fenomenologia: essa descrive come l'esperienza si dà alla coscienza, che è sempre coscienza di qualcosa." },
      { t: "⟦Existentialism⟧ puts the freedom and responsibility of the individual at the centre; for Sartre, existence precedes essence.", it: "L'esistenzialismo pone al centro libertà e responsabilità del singolo; per Sartre l'esistenza precede l'essenza." },
      { t: "⟦Analytic philosophy⟧ holds that many problems depend on language and are clarified by logical analysis.", it: "La filosofia analitica ritiene che molti problemi dipendano dal linguaggio e si chiariscano con l'analisi logica." },
      { t: "For the later Wittgenstein, meaning is use, within «language games».", it: "Per il Wittgenstein della maturità il significato è l'uso, nei «giochi linguistici»." },
      { t: "Popper says a theory is scientific if it is ⟦falsifiable⟧, while Kuhn describes science as ⟦paradigms⟧ separated by revolutions.", it: "Popper afferma che una teoria è scientifica se è falsificabile, mentre Kuhn descrive la scienza come paradigmi separati da rivoluzioni." },
      { t: "Arendt studied ⟦totalitarianism⟧ and the ⟦banality of evil⟧: great crimes can be committed by ordinary people who stop thinking and judging.", it: "Arendt studiò il totalitarismo e la banalità del male: grandi crimini possono essere compiuti da persone ordinarie che rinunciano a pensare e a giudicare." }
    ],
    gloss: [
      { w: "phenomenology", it: "fenomenologia" },
      { w: "Existentialism", it: "esistenzialismo" },
      { w: "Analytic philosophy", it: "filosofia analitica" },
      { w: "falsifiable", it: "falsificabile" },
      { w: "paradigms", it: "paradigmi" },
      { w: "totalitarianism", it: "totalitarismo" },
      { w: "banality of evil", it: "banalità del male" },
      { w: "intentionality", it: "intenzionalità" },
      { w: "language games", it: "giochi linguistici" },
      { w: "Dasein", it: "Dasein (esserci)" }
    ]
  });
  A("cul-logica-ed-etica", {
    title: { t: "Logic and ethics: arguing and deciding", it: "Logica ed etica: argomentare e decidere" },
    sum: [
      { t: "An argument offers premises in support of a conclusion; reasoning can be deductive, inductive or abductive.", it: "Un argomento offre premesse a sostegno di una conclusione; il ragionamento può essere deduttivo, induttivo o abduttivo." },
      { t: "⟦Validity⟧ concerns form, while ⟦soundness⟧ also requires that the premises are really true.", it: "La validità riguarda la forma, mentre la solidità richiede anche che le premesse siano davvero vere." },
      { t: "⟦Modus ponens⟧ and modus tollens are valid forms, but affirming the consequent is invalid.", it: "Il modus ponens e il modus tollens sono forme valide, ma l'affermazione del conseguente è invalida." },
      { t: "A ⟦fallacy⟧ is a persuasive-looking error, such as the ad hominem, the ⟦straw man⟧ or the false dilemma.", it: "Una fallacia è un errore che sembra persuasivo, come l'ad hominem, l'uomo di paglia o il falso dilemma." },
      { t: "⟦Utilitarianism⟧ judges actions by consequences, ⟦deontology⟧ by duties and rights, and ⟦virtue ethics⟧ by character.", it: "L'utilitarismo giudica le azioni dalle conseguenze, la deontologia da doveri e diritti, l'etica delle virtù dal carattere." },
      { t: "The ⟦trolley problem⟧ shows these theories can answer differently, and there is no single answer.", it: "Il dilemma del carrello mostra che queste teorie possono rispondere in modo diverso, e non c'è una risposta unica." },
      { t: "A good method is to check the facts, the conflicting values and the options, then reach a reasoned decision.", it: "Un buon metodo è verificare i fatti, i valori in conflitto e le opzioni, poi giungere a una decisione motivata." }
    ],
    gloss: [
      { w: "Validity", it: "validità" },
      { w: "soundness", it: "solidità" },
      { w: "Modus ponens", it: "modus ponens" },
      { w: "fallacy", it: "fallacia" },
      { w: "straw man", it: "uomo di paglia" },
      { w: "Utilitarianism", it: "utilitarismo" },
      { w: "deontology", it: "deontologia" },
      { w: "virtue ethics", it: "etica delle virtù" },
      { w: "trolley problem", it: "dilemma del carrello" },
      { w: "premise", it: "premessa" }
    ]
  });
  A("cul-letteratura-origini-classica", {
    title: { t: "Early and classical literature: epic and theatre", it: "Letteratura delle origini e classica: epica e teatro" },
    sum: [
      { t: "Ancient writers fixed genres such as ⟦epic⟧ and tragedy, and a classic still speaks to readers of different times.", it: "Gli autori antichi fissarono generi come l'epica e la tragedia, e un classico parla ancora a lettori di epoche diverse." },
      { t: "The ⟦Iliad⟧ tells a few days of the Trojan War, centred on the wrath of Achilles.", it: "L'Iliade racconta pochi giorni della guerra di Troia, incentrati sull'ira di Achille." },
      { t: "The ⟦Odyssey⟧ narrates Odysseus' return to Ithaca: the hero is the man who resists, knows and returns.", it: "L'Odissea narra il ritorno di Ulisse a Itaca: l'eroe è l'uomo che resiste, sa e ritorna." },
      { t: "In Virgil's ⟦Aeneid⟧, Aeneas flees Troy and is driven by duty to destiny, or ⟦pietas⟧; Rome will descend from his line.", it: "Nell'Eneide Enea fugge da Troia ed è mosso dal dovere verso il destino, la pietas; Roma discenderà dalla sua stirpe." },
      { t: "⟦Greek tragedy⟧ was born in Athens at festivals of Dionysus; for Aristotle it arouses pity and terror and produces ⟦catharsis⟧.", it: "La tragedia greca nacque ad Atene nelle feste di Dioniso; per Aristotele suscita pietà e terrore e produce la catarsi." },
      { t: "The three great tragedians were Aeschylus, Sophocles and Euripides; in Antigone, the written law of the city clashes with unwritten laws.", it: "I tre grandi tragici furono Eschilo, Sofocle ed Euripide; nell'Antigone la legge scritta della città si scontra con le leggi non scritte." },
      { t: "Old comedy, with Aristophanes, was political satire, while new comedy, with Menander, told private stories with typical characters.", it: "La commedia antica, con Aristofane, era satira politica, mentre la commedia nuova, con Menandro, raccontava vicende private con caratteri tipici." }
    ],
    gloss: [
      { w: "epic", it: "epica" },
      { w: "Iliad", it: "Iliade" },
      { w: "Odyssey", it: "Odissea" },
      { w: "Aeneid", it: "Eneide" },
      { w: "pietas", it: "pietas, dovere verso il destino" },
      { w: "Greek tragedy", it: "tragedia greca" },
      { w: "catharsis", it: "catarsi" },
      { w: "chorus", it: "coro" },
      { w: "Homeric question", it: "questione omerica" },
      { w: "comedy", it: "commedia" }
    ]
  });
  A("cul-dante-petrarca-boccaccio", {
    title: { t: "Dante, Petrarch, Boccaccio: the Three Crowns", it: "Dante, Petrarca, Boccaccio: le Tre Corone" },
    sum: [
      { t: "In the fourteenth century Dante, Petrarch and Boccaccio, the ⟦Three Crowns⟧, raised poetry in Italian to a European level.", it: "Nel Trecento Dante, Petrarca e Boccaccio, le Tre Corone, portarono la poesia in volgare italiano a un livello europeo." },
      { t: "Dante's ⟦Commedia⟧ tells an otherworldly journey through Inferno, Purgatorio and Paradiso, guided by Virgil, Beatrice and Saint Bernard.", it: "La Commedia di Dante narra un viaggio ultraterreno attraverso Inferno, Purgatorio e Paradiso, guidato da Virgilio, Beatrice e San Bernardo." },
      { t: "It is written in ⟦terza rima⟧, and the ⟦contrappasso⟧ makes each punishment match the sin by analogy or by contrast.", it: "È scritta in terza rima, e il contrappasso fa corrispondere ogni pena alla colpa per analogia o per contrasto." },
      { t: "Dante was exiled from Florence in 1302 and never returned; he died in Ravenna in 1321.", it: "Dante fu condannato all'esilio da Firenze nel 1302 e non vi tornò più; morì a Ravenna nel 1321." },
      { t: "Petrarch, the first great humanist, wrote the ⟦Canzoniere⟧, a collection of poems «in life» and «in death» of Laura.", it: "Petrarca, il primo grande umanista, scrisse il Canzoniere, una raccolta di poesie «in vita» e «in morte» di Laura." },
      { t: "Boccaccio's ⟦Decameron⟧ is a collection of tales told by a group of young people who take refuge from the plague.", it: "Il Decameron di Boccaccio è una raccolta di novelle raccontate da un gruppo di giovani rifugiati per sfuggire alla peste." },
      { t: "Its themes are human wit, fortune, love and the tricks people play, with irony towards the clergy.", it: "I suoi temi sono l'ingegno umano, la fortuna, l'amore e la beffa, con ironia verso il clero." }
    ],
    gloss: [
      { w: "Three Crowns", it: "Tre Corone" },
      { w: "Commedia", it: "Commedia (di Dante)" },
      { w: "terza rima", it: "terzine a rima incatenata" },
      { w: "contrappasso", it: "contrappasso" },
      { w: "Canzoniere", it: "Canzoniere (di Petrarca)" },
      { w: "Decameron", it: "Decameron" },
      { w: "humanist", it: "umanista" },
      { w: "vernacular", it: "volgare" },
      { w: "exile", it: "esilio" },
      { w: "frame story", it: "cornice (narrativa)" }
    ]
  });
  A("cul-rinascimento-barocco", {
    title: { t: "Renaissance and Baroque: Ariosto, Machiavelli, Tasso, Galileo", it: "Rinascimento e Barocco: Ariosto, Machiavelli, Tasso, Galileo" },
    sum: [
      { t: "⟦Humanism⟧ rediscovered classical authors and put the human being back at the centre, preparing the Renaissance.", it: "L'Umanesimo riscoprì gli autori classici e rimise l'uomo al centro, preparando il Rinascimento." },
      { t: "Ariosto's ⟦Orlando furioso⟧ intertwines wars and loves; Orlando loses his wits for Angelica, a metaphor for passion overcoming reason.", it: "L'Orlando furioso di Ariosto intreccia guerre e amori; Orlando perde il senno per Angelica, metafora della passione che travolge la ragione." },
      { t: "Machiavelli's ⟦The Prince⟧ looks at how things really are, and separates political analysis from traditional morality.", it: "Il Principe di Machiavelli guarda a come stanno davvero le cose e separa l'analisi politica dalla morale tradizionale." },
      { t: "After the Council of Trent, the ⟦Counter-Reformation⟧ brought control over texts; Tasso's Gerusalemme liberata is set in the first crusade.", it: "Dopo il Concilio di Trento la Controriforma portò controllo sui testi; la Gerusalemme liberata di Tasso è ambientata nella prima crociata." },
      { t: "The ⟦Baroque⟧ favours wonder, bold metaphors and contrast; Marino is its best-known Italian poet.", it: "Il Barocco predilige la meraviglia, la metafora ardita e il contrasto; Marino è il suo poeta italiano più noto." },
      { t: "Galileo wrote clear, brilliant prose and chose Italian to reach a wider public; he was condemned by the Inquisition.", it: "Galileo scrisse una prosa chiara e brillante e scelse il volgare per raggiungere un pubblico più ampio; fu condannato dall'Inquisizione." },
      { t: "Shakespeare's theatre of passions and Cervantes' ⟦Don Quixote⟧, a parody of chivalric romances, mark European literature.", it: "Il teatro delle passioni di Shakespeare e il Don Chisciotte di Cervantes, parodia dei romanzi cavallereschi, segnano la letteratura europea." }
    ],
    gloss: [
      { w: "Humanism", it: "Umanesimo" },
      { w: "Orlando furioso", it: "Orlando furioso" },
      { w: "The Prince", it: "Il Principe" },
      { w: "Counter-Reformation", it: "Controriforma" },
      { w: "Baroque", it: "Barocco" },
      { w: "Don Quixote", it: "Don Chisciotte" },
      { w: "virtù and fortuna", it: "virtù e fortuna" },
      { w: "Inquisition", it: "Inquisizione" },
      { w: "court", it: "corte" },
      { w: "tragedy", it: "tragedia" }
    ]
  });
  A("cul-ottocento-letterario", {
    title: { t: "Italian and European nineteenth century: from Foscolo to Verga", it: "Ottocento italiano ed europeo: da Foscolo a Verga" },
    sum: [
      { t: "Two sensibilities coexisted: ⟦Neoclassicism⟧, with harmony and measure, and ⟦Romanticism⟧, with feeling, nation and history.", it: "Convivevano due sensibilità: il Neoclassicismo, con armonia e misura, e il Romanticismo, con sentimento, nazione e storia." },
      { t: "Foscolo wrote «Dei Sepolcri», arguing that tombs keep alive the bond between the living and the dead.", it: "Foscolo scrisse «Dei Sepolcri», sostenendo che le tombe mantengono vivo il legame fra vivi e morti." },
      { t: "Manzoni's ⟦I promessi sposi⟧ is a historical novel set under Spanish rule, with Providence and the «little people» at its centre.", it: "I promessi sposi di Manzoni è un romanzo storico ambientato sotto il dominio spagnolo, con la Provvidenza e i «piccoli» al centro." },
      { t: "Leopardi moved from a «historical» pessimism to a «cosmic» one, where Nature is indifferent or hostile.", it: "Leopardi passò da un pessimismo «storico» a uno «cosmico», in cui la Natura è indifferente o ostile." },
      { t: "In «La ginestra» he proposes solidarity among human beings against Nature.", it: "Nella «Ginestra» propone la solidarietà fra gli uomini contro la Natura." },
      { t: "⟦Verismo⟧, with Verga, looks at social reality using ⟦impersonality⟧: the narrator seems to disappear.", it: "Il verismo, con Verga, guarda alla realtà sociale con l'impersonalità: il narratore sembra scomparire." },
      { t: "The ⟦realist novel⟧ became the dominant genre in Europe, with Flaubert, Dickens, Tolstoy and Dostoevsky.", it: "Il romanzo realista divenne il genere dominante in Europa, con Flaubert, Dickens, Tolstoj e Dostoevskij." }
    ],
    gloss: [
      { w: "Neoclassicism", it: "Neoclassicismo" },
      { w: "Romanticism", it: "Romanticismo" },
      { w: "I promessi sposi", it: "I promessi sposi" },
      { w: "Verismo", it: "verismo" },
      { w: "impersonality", it: "impersonalità" },
      { w: "realist novel", it: "romanzo realista" },
      { w: "historical novel", it: "romanzo storico" },
      { w: "pessimism", it: "pessimismo" },
      { w: "Providence", it: "Provvidenza" },
      { w: "Naturalism", it: "Naturalismo" }
    ]
  });
  A("cul-novecento-letterario", {
    title: { t: "The twentieth century: crisis of the self and world literature", it: "Novecento: crisi dell'io e letteratura mondiale" },
    sum: [
      { t: "Psychoanalysis, relativity and the world wars shook old certainties, and the ⟦subject⟧ appeared divided and unstable.", it: "Psicoanalisi, relatività e guerre mondiali scossero le vecchie certezze, e il soggetto apparve diviso e instabile." },
      { t: "In Svevo's «La coscienza di Zeno», an unreliable narrator writes memoirs in non-chronological time; the ⟦inetto⟧ is a man unable to act.", it: "Ne «La coscienza di Zeno» di Svevo un narratore inattendibile scrive memorie in un tempo non cronologico; l'inetto è un uomo incapace di agire." },
      { t: "For Pirandello reality has no single face: everyone wears ⟦masks⟧ and identity is fragmented.", it: "Per Pirandello la realtà non ha un volto unico: ognuno indossa maschere e l'identità è frantumata." },
      { t: "Ungaretti wrote very short poems in ⟦free verse⟧, with the «dug-out» word and silence on the page.", it: "Ungaretti scrisse poesie brevissime in versi liberi, con la parola «scavata» e il silenzio sulla pagina." },
      { t: "Montale expressed the «evil of living» through concrete objects, the ⟦objective correlative⟧, with sober language.", it: "Montale espresse il «male di vivere» tramite oggetti concreti, il correlativo oggettivo, con linguaggio sobrio." },
      { t: "Calvino, Levi and Eco renewed Italian prose; Levi's «If This Is a Man» is a lucid and sober testimony.", it: "Calvino, Levi ed Eco rinnovarono la prosa italiana; «Se questo è un uomo» di Levi è una testimonianza lucida e sobria." },
      { t: "World literature includes Kafka, Joyce and García Márquez, whose ⟦magical realism⟧ narrates the marvellous as normal.", it: "La letteratura mondiale comprende Kafka, Joyce e García Márquez, il cui realismo magico narra il meraviglioso come normale." }
    ],
    gloss: [
      { w: "subject", it: "soggetto, io" },
      { w: "inetto", it: "inetto" },
      { w: "masks", it: "maschere" },
      { w: "objective correlative", it: "correlativo oggettivo" },
      { w: "magical realism", it: "realismo magico" },
      { w: "stream of consciousness", it: "flusso di coscienza" },
      { w: "free verse", it: "versi liberi" },
      { w: "Hermeticism", it: "ermetismo" },
      { w: "unreliable narrator", it: "narratore inattendibile" },
      { w: "testimony", it: "testimonianza" }
    ]
  });
  A("cul-guardare-arte-antica", {
    title: { t: "Looking at an artwork, and ancient art", it: "Guardare un'opera e l'arte antica" },
    sum: [
      { t: "Look at an artwork for a while before reading the caption, following four steps: describe, analyse, contextualise, interpret.", it: "Guarda un'opera a lungo prima di leggere la didascalia, seguendo quattro passi: descrivere, analizzare, contestualizzare, interpretare." },
      { t: "Line, colour and ⟦light⟧ are tools of analysis; ⟦chiaroscuro⟧ models volumes through the gradual passage from light to shadow.", it: "Linea, colore e luce sono strumenti di analisi; il chiaroscuro modella i volumi con il passaggio graduale dalla luce all'ombra." },
      { t: "⟦Composition⟧ organises figures in space, and linear ⟦perspective⟧ makes parallel lines converge at a vanishing point.", it: "La composizione organizza le figure nello spazio, e la prospettiva lineare fa convergere le rette parallele in un punto di fuga." },
      { t: "Technique explains choices: a ⟦fresco⟧ is painted on wet plaster, so it suits a wall and cannot be easily corrected.", it: "La tecnica spiega le scelte: un affresco è dipinto su intonaco fresco, quindi si adatta a un muro e non si corregge facilmente." },
      { t: "Egyptian art is tied to religion and the pharaoh, with ⟦frontality⟧, a fixed canon and hierarchical perspective.", it: "L'arte egizia è legata alla religione e al faraone, con frontalità, canone fisso e prospettiva gerarchica." },
      { t: "Greek art seeks ideal beauty and harmony, and moves from the archaic to the classical and Hellenistic phases.", it: "L'arte greca cerca la bellezza ideale e l'armonia, e passa dalla fase arcaica a quella classica ed ellenistica." },
      { t: "Roman art celebrates power with realistic portraits and historical reliefs, and uses the arch, the vault and concrete.", it: "L'arte romana celebra il potere con ritratti realistici e rilievi storici, e usa arco, volta e cemento." }
    ],
    gloss: [
      { w: "chiaroscuro", it: "chiaroscuro" },
      { w: "composition", it: "composizione" },
      { w: "perspective", it: "prospettiva" },
      { w: "fresco", it: "affresco" },
      { w: "frontality", it: "frontalità" },
      { w: "canon", it: "canone (di proporzioni)" },
      { w: "Hellenistic", it: "ellenistico" },
      { w: "contrapposto", it: "contrapposto" },
      { w: "light", it: "luce" },
      { w: "relief", it: "rilievo" }
    ]
  });
  A("cul-arte-medievale", {
    title: { t: "Medieval art", it: "Arte medievale" },
    sum: [
      { t: "Medieval art was at the service of faith: figures often seek meaning rather than realism, and gold backgrounds suggest divine space.", it: "L'arte medievale era al servizio della fede: le figure cercano spesso il significato più che il realismo, e l'oro dei fondi indica lo spazio divino." },
      { t: "⟦Early Christian⟧ churches derive from the Roman ⟦basilica⟧, with a long plan, aisles, wooden roofs and mosaics.", it: "Le chiese paleocristiane derivano dalla basilica romana, con pianta allungata, navate, tetti in legno e mosaici." },
      { t: "⟦Byzantine⟧ art has a central plan, a dome, gold mosaics and frontal, rigid figures without depth.", it: "L'arte bizantina ha pianta centrale, cupola, mosaici d'oro e figure frontali e rigide, senza profondità." },
      { t: "⟦Romanesque⟧ churches have thick walls, round arches, stone vaults and little light.", it: "Le chiese romaniche hanno muri spessi, archi a tutto sesto, volte in pietra e poca luce." },
      { t: "⟦Gothic⟧ architecture uses the pointed arch, the ribbed vault and ⟦flying buttresses⟧, so walls can open into large stained-glass windows.", it: "L'architettura gotica usa l'arco a sesto acuto, la volta a crociera costolonata e gli archi rampanti, così i muri possono aprirsi in grandi vetrate." },
      { t: "In Italy, Giotto broke with the Byzantine manner by bringing volume and space to painting.", it: "In Italia Giotto ruppe con la maniera bizantina portando volume e spazio nella pittura." },
      { t: "The key difference: in Romanesque the wall carries the weight, in Gothic a skeleton of piers and arches does.", it: "La differenza chiave: nel romanico il peso è retto dal muro, nel gotico da uno scheletro di pilastri e archi." }
    ],
    gloss: [
      { w: "Early Christian", it: "paleocristiano" },
      { w: "Byzantine", it: "bizantino" },
      { w: "Romanesque", it: "romanico" },
      { w: "Gothic", it: "gotico" },
      { w: "flying buttresses", it: "archi rampanti" },
      { w: "basilica", it: "basilica" },
      { w: "mosaic", it: "mosaico" },
      { w: "pointed arch", it: "arco a sesto acuto" },
      { w: "ribbed vault", it: "volta a crociera costolonata" },
      { w: "stained glass", it: "vetrata" }
    ]
  });
  A("cul-rinascimento", {
    title: { t: "The Renaissance", it: "Il Rinascimento" },
    sum: [
      { t: "The ⟦Renaissance⟧ began in Florence, where artists looked to classical antiquity as a model and put the human being at the centre.", it: "Il Rinascimento iniziò a Firenze, dove gli artisti guardavano all'antichità classica come modello e mettevano l'uomo al centro." },
      { t: "Linear ⟦perspective⟧ represents three-dimensional space on a flat surface, with parallel lines meeting at a ⟦vanishing point⟧.", it: "La prospettiva lineare rappresenta lo spazio tridimensionale su una superficie piana, con le rette parallele che convergono in un punto di fuga." },
      { t: "Brunelleschi worked out perspective through experiments, and Alberti theorised it in his treatise «De pictura».", it: "Brunelleschi mise a punto la prospettiva con esperimenti, e Alberti la teorizzò nel trattato «De pictura»." },
      { t: "Brunelleschi built the ⟦dome⟧ of Santa Maria del Fiore, and Masaccio brought the same rigour to painting.", it: "Brunelleschi costruì la cupola di Santa Maria del Fiore, e Masaccio portò lo stesso rigore in pittura." },
      { t: "Leonardo treated painting as science, and is known for ⟦sfumato⟧, aerial perspective and the pyramidal composition.", it: "Leonardo considerava la pittura una scienza, ed è noto per lo sfumato, la prospettiva aerea e la composizione piramidale." },
      { t: "Michelangelo saw himself as a sculptor, and his figures show powerful bodies and restrained force; Raphael is the master of harmony.", it: "Michelangelo si considerava soprattutto scultore, e le sue figure mostrano corpi possenti e forza trattenuta; Raffaello è il maestro dell'armonia." },
      { t: "After about 1520, ⟦Mannerism⟧ imitated the great masters' «manner» with elongated figures and complicated poses.", it: "Dopo il 1520 circa il Manierismo imitò la «maniera» dei grandi maestri con figure allungate e pose complicate." }
    ],
    gloss: [
      { w: "Renaissance", it: "Rinascimento" },
      { w: "perspective", it: "prospettiva" },
      { w: "vanishing point", it: "punto di fuga" },
      { w: "sfumato", it: "sfumato" },
      { w: "Mannerism", it: "Manierismo" },
      { w: "humanism", it: "umanesimo" },
      { w: "dome", it: "cupola" },
      { w: "fresco", it: "affresco" },
      { w: "symmetry", it: "simmetria" },
      { w: "patron", it: "committente, mecenate" }
    ]
  });
  A("cul-barocco-settecento", {
    title: { t: "Baroque and the eighteenth century", it: "Barocco e Settecento" },
    sum: [
      { t: "The ⟦Baroque⟧ was born in Rome, where the Catholic Church used art to persuade and involve the faithful.", it: "Il Barocco nacque a Roma, dove la Chiesa cattolica usava l'arte per persuadere e coinvolgere i fedeli." },
      { t: "It is recognised by movement, ⟦theatricality⟧, strong contrast of light and shadow, and the union of the arts.", it: "Si riconosce da movimento, teatralità, forte contrasto di luce e ombra e unione delle arti." },
      { t: "Caravaggio used ⟦tenebrism⟧ and realistic, ordinary figures, bringing sacred subjects into everyday life.", it: "Caravaggio usò il tenebrismo e figure realistiche e popolari, portando i soggetti sacri nella vita quotidiana." },
      { t: "Bernini aimed at dramatic effect, while Borromini explored complex geometry and wavy plans.", it: "Bernini puntava all'effetto drammatico, mentre Borromini esplorava geometrie complesse e piante ondulate." },
      { t: "In Protestant Holland, painters worked for the market, producing portraits, landscapes and still lifes, some with a ⟦vanitas⟧ meaning.", it: "Nell'Olanda protestante i pittori lavoravano per il mercato, producendo ritratti, paesaggi e nature morte, alcune con un significato di vanitas." },
      { t: "The ⟦Rococo⟧ favoured light elegance, pastel colours, asymmetric curves and gallant themes in courts and salons.", it: "Il Rococò prediligeva eleganza leggera, colori pastello, curve asimmetriche e temi galanti nelle corti e nei salotti." },
      { t: "⟦Neoclassicism⟧ reacted with clarity, sharp lines and ancient subjects, inspired by Enlightenment reason and archaeological discoveries; David and Canova are its masters.", it: "Il Neoclassicismo reagì con chiarezza, linee nette e soggetti antichi, ispirato dalla ragione illuminista e dalle scoperte archeologiche; David e Canova ne sono i maestri." }
    ],
    gloss: [
      { w: "Baroque", it: "Barocco" },
      { w: "tenebrism", it: "tenebrismo" },
      { w: "vanitas", it: "vanitas" },
      { w: "Rococo", it: "Rococò" },
      { w: "Neoclassicism", it: "Neoclassicismo" },
      { w: "chiaroscuro", it: "chiaroscuro" },
      { w: "still life", it: "natura morta" },
      { w: "view painting", it: "vedutismo" },
      { w: "theatricality", it: "teatralità" },
      { w: "Counter-Reformation", it: "Controriforma" }
    ]
  });
  A("cul-ottocento", {
    title: { t: "The nineteenth century: from Romanticism to Post-Impressionism", it: "L'Ottocento: da Romanticismo a Post-impressionismo" },
    sum: [
      { t: "Photography freed painting from documenting reality, and paint in tubes allowed artists to work outdoors.", it: "La fotografia liberò la pittura dal compito di documentare la realtà, e i colori in tubetto permisero di dipingere all'aperto." },
      { t: "⟦Romanticism⟧ exalted feeling, imagination and the ⟦sublime⟧, a fascinating fear before a nature greater than us.", it: "Il Romanticismo esaltò sentimento, immaginazione e sublime, lo spavento affascinante davanti a una natura più grande di noi." },
      { t: "⟦Realism⟧ showed reality as it is, with workers and peasants, without idealisation.", it: "Il Realismo mostrava la realtà così com'è, con lavoratori e contadini, senza idealizzazione." },
      { t: "In Italy the ⟦Macchiaioli⟧ painted from life in patches of light and shadow.", it: "In Italia i Macchiaioli dipingevano dal vero a macchie di luce e ombra." },
      { t: "⟦Impressionism⟧ painted the light of the instant outdoors, with short broken brushstrokes and coloured shadows.", it: "L'Impressionismo dipingeva all'aperto la luce dell'istante, con pennellate brevi e spezzate e ombre colorate." },
      { t: "⟦Post-Impressionism⟧ was not a group but individual paths: structure for Cézanne, dots for Seurat, expression for Van Gogh.", it: "Il Post-impressionismo non era un gruppo ma una serie di strade individuali: struttura per Cézanne, puntini per Seurat, espressione per Van Gogh." },
      { t: "Other currents existed too, such as academic art, the Pre-Raphaelites, Rodin's sculpture and Art Nouveau.", it: "Esistevano anche altri filoni, come l'arte accademica, i Preraffaelliti, la scultura di Rodin e l'Art Nouveau." }
    ],
    gloss: [
      { w: "Romanticism", it: "Romanticismo" },
      { w: "sublime", it: "sublime" },
      { w: "Realism", it: "Realismo" },
      { w: "Impressionism", it: "Impressionismo" },
      { w: "Post-Impressionism", it: "Post-impressionismo" },
      { w: "Macchiaioli", it: "Macchiaioli" },
      { w: "plein air", it: "en plein air (all'aperto)" },
      { w: "Salon", it: "Salon (esposizione ufficiale)" },
      { w: "pointillism", it: "puntinismo" },
      { w: "academic art", it: "arte accademica" }
    ]
  });
  A("cul-novecento-contemporanea", {
    title: { t: "Avant-gardes and contemporary art", it: "Avanguardie e arte contemporanea" },
    sum: [
      { t: "The historical ⟦avant-gardes⟧ were early twentieth-century movements that broke with traditional representation and issued manifestos.", it: "Le avanguardie storiche erano movimenti del primo Novecento che ruppero con la rappresentazione tradizionale ed emisero manifesti." },
      { t: "⟦Cubism⟧, with Picasso and Braque, shows an object from several points of view at once.", it: "Il Cubismo, con Picasso e Braque, mostra un oggetto da più punti di vista contemporaneamente." },
      { t: "⟦Futurism⟧, an Italian movement, exalted speed, machines and the modern city, and rejected the past.", it: "Il Futurismo, movimento italiano, esaltava velocità, macchine e città moderna, e rifiutava il passato." },
      { t: "⟦Abstract art⟧ gave up recognisable objects: lines, shapes and colours speak for themselves, like music.", it: "L'Astrattismo abbandonò gli oggetti riconoscibili: linee, forme e colori parlano da soli, come la musica." },
      { t: "⟦Dada⟧ protested against a world that had produced war, and Duchamp's ⟦ready-made⟧ turned an everyday object into art.", it: "Dada protestò contro un mondo che aveva prodotto la guerra, e il ready-made di Duchamp trasformò un oggetto comune in opera." },
      { t: "⟦Surrealism⟧ explored the unconscious, dreams and automatism, with reference to Freud's ideas.", it: "Il Surrealismo esplorava l'inconscio, il sogno e l'automatismo, con riferimento alle idee di Freud." },
      { t: "After 1945 art became more concept, process and experience, as in Pop Art and conceptual art.", it: "Dopo il 1945 l'arte divenne sempre più concetto, processo ed esperienza, come nella Pop Art e nell'arte concettuale." }
    ],
    gloss: [
      { w: "avant-gardes", it: "avanguardie" },
      { w: "Cubism", it: "Cubismo" },
      { w: "Futurism", it: "Futurismo" },
      { w: "Abstract art", it: "Astrattismo" },
      { w: "Dada", it: "Dada" },
      { w: "ready-made", it: "ready-made" },
      { w: "Surrealism", it: "Surrealismo" },
      { w: "manifesto", it: "manifesto" },
      { w: "Pop Art", it: "Pop Art" },
      { w: "conceptual art", it: "arte concettuale" }
    ]
  });
  A("cul-architettura", {
    title: { t: "Architecture: elements, styles and plans", it: "Architettura: elementi, stili e piante" },
    sum: [
      { t: "Vitruvius says a good building has ⟦firmitas⟧, utilitas and venustas: it must be solid, useful and beautiful.", it: "Vitruvio dice che un buon edificio ha firmitas, utilitas e venustas: deve essere solido, utile e bello." },
      { t: "The Greek ⟦trilithic system⟧ uses two vertical supports and a horizontal ⟦lintel⟧, while the arch and the vault carry weight by compression.", it: "Il sistema trilitico greco usa due sostegni verticali e un architrave orizzontale, mentre l'arco e la volta reggono il peso per compressione." },
      { t: "Arches and vaults push outwards, so they need buttresses, ties or flying buttresses.", it: "Archi e volte spingono verso l'esterno, quindi servono contrafforti, catene o rampanti." },
      { t: "The three Greek ⟦orders⟧ are Doric, Ionic and Corinthian, distinguished above all by the capital.", it: "I tre ordini greci sono dorico, ionico e corinzio, distinti soprattutto dal capitello." },
      { t: "Styles follow one another but also coexist: one church may have a Romanesque apse, a Gothic nave and a Baroque façade.", it: "Gli stili si susseguono ma anche convivono: una chiesa può avere un'abside romanica, una navata gotica e una facciata barocca." },
      { t: "A ⟦plan⟧ is a horizontal cut of the building; the ⟦scale⟧ tells how drawn lengths correspond to real ones.", it: "La pianta è un taglio orizzontale dell'edificio; la scala indica come le lunghezze disegnate corrispondono a quelle reali." },
      { t: "Materials set the possible forms: stone resists compression, and ⟦reinforced concrete⟧ adds steel bars that absorb tension.", it: "I materiali determinano le forme possibili: la pietra resiste a compressione e il cemento armato aggiunge barre d'acciaio che assorbono la trazione." }
    ],
    gloss: [
      { w: "firmitas", it: "firmitas (solidità)" },
      { w: "trilithic system", it: "sistema trilitico" },
      { w: "lintel", it: "architrave" },
      { w: "orders", it: "ordini architettonici" },
      { w: "plan", it: "pianta" },
      { w: "scale", it: "scala (di riduzione)" },
      { w: "reinforced concrete", it: "cemento armato" },
      { w: "vault", it: "volta" },
      { w: "dome", it: "cupola" },
      { w: "buttress", it: "contrafforte" }
    ]
  });
  A("cul-musica-fondamenti", {
    title: { t: "Music: the fundamentals", it: "Musica: i fondamenti" },
    sum: [
      { t: "A sound is described by pitch, duration, intensity and ⟦timbre⟧, the «voice» that tells a violin from a flute.", it: "Un suono si descrive con altezza, durata, intensità e timbro, la «voce» che distingue un violino da un flauto." },
      { t: "Pitch depends on ⟦frequency⟧, measured in hertz, and an ⟦octave⟧ corresponds to a doubling of frequency.", it: "L'altezza dipende dalla frequenza, misurata in hertz, e un'ottava corrisponde al raddoppio della frequenza." },
      { t: "The ⟦semitone⟧ is the smallest distance in Western music, and an octave contains twelve of them.", it: "Il semitono è la distanza minima nella musica occidentale, e un'ottava ne contiene dodici." },
      { t: "A major ⟦scale⟧ follows the pattern tone, tone, semitone, tone, tone, tone, semitone, and sounds brighter than the minor.", it: "Una scala maggiore segue lo schema tono, tono, semitono, tono, tono, tono, semitono, e suona più luminosa della minore." },
      { t: "An ⟦interval⟧ is the distance between two notes, counted in semitones and named with a number and a quality.", it: "Un intervallo è la distanza fra due note, contata in semitoni e nominata con un numero e una qualità." },
      { t: "Rhythm organises durations into beats and bars; the speed is measured in ⟦BPM⟧, beats per minute.", it: "Il ritmo organizza le durate in pulsazioni e battute; la velocità si misura in BPM, battiti per minuto." },
      { t: "A ⟦triad⟧ stacks two thirds, and the cadence from the dominant to the tonic gives a sense of conclusion.", it: "Una triade sovrappone due terze, e la cadenza dalla dominante alla tonica dà senso di conclusione." }
    ],
    gloss: [
      { w: "timbre", it: "timbro" },
      { w: "frequency", it: "frequenza" },
      { w: "octave", it: "ottava" },
      { w: "semitone", it: "semitono" },
      { w: "scale", it: "scala" },
      { w: "interval", it: "intervallo" },
      { w: "BPM", it: "battiti per minuto" },
      { w: "triad", it: "triade" },
      { w: "tonic", it: "tonica" },
      { w: "staff", it: "pentagramma" }
    ]
  });
  A("cul-storia-musica", {
    title: { t: "History of classical music", it: "Storia della musica colta" },
    sum: [
      { t: "Written Western music began in the Middle Ages with ⟦Gregorian chant⟧, sung in Latin on a single melodic line.", it: "La musica occidentale scritta cominciò nel Medioevo con il canto gregoriano, cantato in latino su una sola linea melodica." },
      { t: "Guido d'Arezzo's staff and note names came from earlier neumes, and ⟦polyphony⟧ later added several voices.", it: "Il rigo musicale e i nomi delle note di Guido d'Arezzo derivano dai neumi, e la polifonia aggiunse poi più voci." },
      { t: "In the Renaissance, vocal polyphony dominated, and the ⟦madrigal⟧ set poems for several voices.", it: "Nel Rinascimento dominava la polifonia vocale, e il madrigale metteva in musica testi poetici a più voci." },
      { t: "The Baroque added the ⟦basso continuo⟧ and invented opera, oratorio and concerto; Bach is the master of the ⟦fugue⟧.", it: "Il Barocco aggiunse il basso continuo e vide nascere opera, oratorio e concerto; Bach è il maestro della fuga." },
      { t: "Classicism, with Haydn, Mozart and Beethoven, sought clarity and balance, and its core is the ⟦sonata form⟧.", it: "Il Classicismo, con Haydn, Mozart e Beethoven, cercava chiarezza ed equilibrio, e il suo cuore è la forma sonata." },
      { t: "Romanticism valued feeling and the individual, with larger orchestras, richer harmony and Italian opera.", it: "Il Romanticismo valorizzava sentimento e individuo, con orchestre più grandi, armonie più ricche e l'opera italiana." },
      { t: "In the twentieth century music split into many languages, such as atonality, minimalism and electronic music.", it: "Nel Novecento la musica si frammentò in molti linguaggi, come atonalità, minimalismo e musica elettronica." }
    ],
    gloss: [
      { w: "Gregorian chant", it: "canto gregoriano" },
      { w: "polyphony", it: "polifonia" },
      { w: "madrigal", it: "madrigale" },
      { w: "basso continuo", it: "basso continuo" },
      { w: "fugue", it: "fuga" },
      { w: "sonata form", it: "forma sonata" },
      { w: "symphony", it: "sinfonia" },
      { w: "concerto", it: "concerto" },
      { w: "opera", it: "opera" },
      { w: "twelve-tone", it: "dodecafonia" }
    ]
  });
  A("cul-musica-popolare", {
    title: { t: "Popular music, recording, cinema and the ear", it: "Musica popolare, registrazione, cinema e orecchio" },
    sum: [
      { t: "The ⟦blues⟧ grew out of African American traditions and is recognised by its twelve-bar structure on three chords and its blue notes.", it: "Il blues nacque dalle tradizioni afroamericane e si riconosce dalla struttura di dodici battute su tre accordi e dalle blue notes." },
      { t: "⟦Jazz⟧ was born in New Orleans, and its typical features are ⟦improvisation⟧, swing and syncopation.", it: "Il jazz nacque a New Orleans, e i suoi tratti tipici sono improvvisazione, swing e sincope." },
      { t: "⟦Rock⟧ and roll emerged in the United States from blues, rhythm and blues and country, with the electric guitar as its core.", it: "Il rock and roll nacque negli Stati Uniti da blues, rhythm and blues e country, con la chitarra elettrica al centro." },
      { t: "⟦Hip hop⟧ was born in the Bronx and is built on sampling and repeated beats, with DJ, rap, breakdance and graffiti.", it: "L'hip hop nacque nel Bronx e si basa su campionamento e beat ripetuti, con DJ, rap, breakdance e graffiti." },
      { t: "Electronic music uses oscillators, filters and computers to make or transform sounds; it is a way of producing, not one style.", it: "La musica elettronica usa oscillatori, filtri e computer per produrre o trasformare suoni; è un modo di produrre, non un solo stile." },
      { t: "Digital audio is measured by the ⟦sampling rate⟧ and bit depth, and a compressed MP3 is much smaller than a CD file.", it: "L'audio digitale si misura con la frequenza di campionamento e i bit, e un MP3 compresso è molto più piccolo di un file da CD." },
      { t: "Active listening means following one element at a time, and prolonged loud volume damages the inner ear irreversibly.", it: "L'ascolto attivo significa seguire un elemento alla volta, e un volume alto prolungato danneggia l'orecchio interno in modo irreversibile." }
    ],
    gloss: [
      { w: "blues", it: "blues" },
      { w: "Jazz", it: "jazz" },
      { w: "Rock", it: "rock" },
      { w: "Hip hop", it: "hip hop" },
      { w: "sampling rate", it: "frequenza di campionamento" },
      { w: "improvisation", it: "improvvisazione" },
      { w: "swing", it: "swing" },
      { w: "syncopation", it: "sincope" },
      { w: "sample", it: "campione (sample)" },
      { w: "synthesizer", it: "sintetizzatore" }
    ]
  });
  A("cul-primo-soccorso-principi", {
    title: { t: "First aid: the principles", it: "Primo soccorso: i principi" },
    sum: [
      { t: "⟦First aid⟧ is the help an ordinary citizen gives while waiting for professional rescuers; it is not a treatment.", it: "Il primo soccorso è l'aiuto che un cittadino qualsiasi dà in attesa dei soccorsi professionali; non è una cura." },
      { t: "Three rules guide everything: protect yourself and others, call for help without hesitation, and do only what you can do.", it: "Tre regole guidano tutto: proteggi te stesso e gli altri, chiama i soccorsi senza esitare e fai solo ciò che sai fare." },
      { t: "Check ⟦scene safety⟧ first, because an injured rescuer becomes a second patient.", it: "Verifica prima la sicurezza della scena, perché un soccorritore ferito diventa un secondo paziente." },
      { t: "Then check ⟦consciousness⟧: call out and shake the shoulders gently; if there is no answer, check breathing for up to 10 seconds.", it: "Poi valuta la coscienza: chiama e scuoti con delicatezza le spalle; se non risponde, controlla il respiro per non più di 10 secondi." },
      { t: "In Italy ⟦112⟧ is the single European emergency number, free from any phone.", it: "In Italia il 112 è il Numero Unico di Emergenza europeo, gratuito da qualsiasi telefono." },
      { t: "Tell the ⟦operator⟧ where you are, what happened and how the person is, and do not hang up until told.", it: "Dì all'operatore dove sei, che cosa è successo e come sta la persona, e non riattaccare finché non te lo dice." },
      { t: "This lesson is general information and cannot replace a ⟦certified course⟧, where you practise on a manikin.", it: "Questa lezione è divulgazione e non può sostituire un corso certificato, dove si prova su un manichino." }
    ],
    gloss: [
      { w: "First aid", it: "primo soccorso" },
      { w: "scene safety", it: "sicurezza della scena" },
      { w: "consciousness", it: "coscienza" },
      { w: "112", it: "numero unico di emergenza" },
      { w: "operator", it: "operatore (della centrale)" },
      { w: "certified course", it: "corso certificato" },
      { w: "recovery position", it: "posizione laterale di sicurezza" },
      { w: "airway", it: "vie aeree" },
      { w: "bystander effect", it: "effetto spettatore" },
      { w: "rescuers", it: "soccorritori" }
    ]
  });
  A("cul-rianimazione-cardiopolmonare-dae", {
    title: { t: "Cardiopulmonary resuscitation and the defibrillator (AED)", it: "Rianimazione cardiopolmonare e defibrillatore (DAE)" },
    sum: [
      { t: "In ⟦cardiac arrest⟧ the heart stops working effectively, blood stops circulating and the brain is damaged within minutes.", it: "Nell'arresto cardiaco il cuore smette di funzionare in modo efficace, il sangue smette di circolare e il cervello si danneggia in pochi minuti." },
      { t: "It is not the same as a ⟦heart attack⟧, where a heart vessel is blocked and the person is often conscious.", it: "Non coincide con l'infarto, in cui un vaso del cuore è ostruito e la persona è spesso cosciente." },
      { t: "The ⟦chain of survival⟧ has four links, and the first three are in the hands of ordinary citizens.", it: "La catena della sopravvivenza ha quattro anelli, e i primi tre sono in mano ai cittadini." },
      { t: "The sequence is: I recognise, I call, I compress, I defibrillate.", it: "La sequenza è: riconosco, chiamo, comprimo, defibrillo." },
      { t: "For an adult, ⟦chest compressions⟧ go at 100 to 120 per minute, about 5 to 6 cm deep, letting the chest recoil.", it: "Per un adulto le compressioni toraciche vanno a 100–120 al minuto, profonde circa 5–6 cm, lasciando risalire il torace." },
      { t: "Those who are trained alternate 30 compressions and 2 ⟦rescue breaths⟧; others can do compressions only, which is better than nothing.", it: "Chi è addestrato alterna 30 compressioni e 2 insufflazioni; gli altri possono fare solo compressioni, che è meglio che non fare nulla." },
      { t: "An ⟦AED⟧ analyses the heart rhythm, guides you by voice and shocks only when needed; a certified course remains essential.", it: "Un DAE analizza il ritmo cardiaco, ti guida con la voce e scarica solo se serve; un corso certificato resta indispensabile." }
    ],
    gloss: [
      { w: "cardiac arrest", it: "arresto cardiaco" },
      { w: "chain of survival", it: "catena della sopravvivenza" },
      { w: "chest compressions", it: "compressioni toraciche" },
      { w: "AED", it: "DAE, defibrillatore semiautomatico esterno" },
      { w: "heart attack", it: "infarto" },
      { w: "defibrillation", it: "defibrillazione" },
      { w: "ventricular fibrillation", it: "fibrillazione ventricolare" },
      { w: "rescue breaths", it: "insufflazioni" },
      { w: "CPR", it: "rianimazione cardiopolmonare (RCP)" },
      { w: "pads", it: "piastre adesive" }
    ]
  });
  A("cul-ostruzione-ferite-ustioni", {
    title: { t: "Choking, wounds, bleeding and burns", it: "Ostruzione, ferite, emorragie e ustioni" },
    sum: [
      { t: "In ⟦partial choking⟧ the person coughs strongly and can speak and breathe, so you encourage coughing and stay close.", it: "Nell'ostruzione parziale la persona tossisce con forza e riesce a parlare e respirare, quindi la incoraggi a tossire e resti accanto." },
      { t: "In complete obstruction the person cannot speak, cough or breathe: call 112 and perform the manoeuvres.", it: "Nell'ostruzione completa la persona non riesce a parlare, tossire o respirare: chiama il 112 ed esegui le manovre." },
      { t: "For a conscious adult, alternate five ⟦back blows⟧ and five abdominal thrusts (the ⟦Heimlich manoeuvre⟧); if the person faints, start resuscitation.", it: "Per un adulto cosciente alterna cinque colpi dorsali e cinque compressioni addominali (manovra di Heimlich); se perde coscienza, inizia la rianimazione." },
      { t: "For a minor ⟦wound⟧, rinse with running water, cover with sterile gauze, and watch for signs of infection.", it: "Per una ferita lieve, risciacqua con acqua corrente, copri con garza sterile e controlla i segni di infezione." },
      { t: "For severe bleeding, press directly on the wound with a clean cloth, and add another cloth on top without lifting the first.", it: "Per un'emorragia grave premi direttamente sulla ferita con un panno pulito e aggiungine un altro sopra senza sollevare il primo." },
      { t: "For a ⟦nosebleed⟧, seat the person, head slightly forward, and pinch the soft part of the nose for about ten minutes.", it: "Per il sangue dal naso, fai sedere la persona con la testa leggermente in avanti e stringi la parte molle del naso per circa 10 minuti." },
      { t: "For a ⟦burn⟧, cool it with running water for about twenty minutes and cover it loosely; no ice or home remedies.", it: "Per un'ustione, raffreddala con acqua corrente per circa 20 minuti e coprila in modo leggero; niente ghiaccio né rimedi casalinghi." }
    ],
    gloss: [
      { w: "partial choking", it: "ostruzione parziale" },
      { w: "Heimlich manoeuvre", it: "manovra di Heimlich" },
      { w: "wound", it: "ferita" },
      { w: "burn", it: "ustione" },
      { w: "direct pressure", it: "pressione diretta" },
      { w: "nosebleed", it: "sangue dal naso (epistassi)" },
      { w: "back blows", it: "colpi dorsali" },
      { w: "tourniquet", it: "laccio emostatico" },
      { w: "sterile gauze", it: "garza sterile" },
      { w: "shock", it: "stato di shock" }
    ]
  });
  A("cul-traumi-caldo-freddo-allergie", {
    title: { t: "Trauma, heat and cold, poisoning and severe allergies", it: "Traumi, caldo e freddo, avvelenamenti e allergie gravi" },
    sum: [
      { t: "For mild injuries the ⟦PRICE⟧ scheme is often used: protection, rest, ice, compression and elevation.", it: "Per le lesioni lievi si usa spesso lo schema PRICE: protezione, riposo, ghiaccio, compressione ed elevazione." },
      { t: "With a suspected ⟦fracture⟧, immobilise the limb as you find it, and do not try to straighten it.", it: "Con una sospetta frattura, immobilizza l'arto nella posizione in cui si trova e non cercare di raddrizzarlo." },
      { t: "After a major trauma do not move the person, as the spine may be injured, and call 112 for head-injury warning signs.", it: "Dopo un trauma importante non muovere la persona, perché la colonna può essere lesa, e chiama il 112 per i segni di allarme di un trauma cranico." },
      { t: "⟦Heat stroke⟧ is an emergency with very high body temperature and confusion: call 112, find a cool place, cool the body.", it: "Il colpo di calore è un'emergenza con temperatura corporea molto alta e confusione: chiama il 112, trova un luogo fresco e raffredda il corpo." },
      { t: "In ⟦hypothermia⟧ the body temperature falls: shelter the person, remove wet clothes, cover and move gently, and give no alcohol.", it: "Nell'ipotermia la temperatura del corpo scende: proteggi la persona, togli gli abiti bagnati, copri e muovi con delicatezza, senza dare alcol." },
      { t: "In ⟦poisoning⟧, make the scene safe, call 112 or a poison centre, and do not induce vomiting.", it: "In caso di avvelenamento, metti in sicurezza la scena, chiama il 112 o un Centro antiveleni e non provocare il vomito." },
      { t: "⟦Anaphylaxis⟧ is a severe, rapid allergic reaction: call 112 at once and help use a prescribed adrenaline auto-injector.", it: "L'anafilassi è una reazione allergica grave e rapida: chiama subito il 112 e aiuta a usare l'autoiniettore di adrenalina prescritto." }
    ],
    gloss: [
      { w: "PRICE", it: "schema PRICE" },
      { w: "fracture", it: "frattura" },
      { w: "Heat stroke", it: "colpo di calore" },
      { w: "hypothermia", it: "ipotermia" },
      { w: "poisoning", it: "avvelenamento" },
      { w: "Anaphylaxis", it: "anafilassi" },
      { w: "auto-injector", it: "autoiniettore" },
      { w: "head injury", it: "trauma cranico" },
      { w: "carbon monoxide", it: "monossido di carbonio" },
      { w: "sprain", it: "distorsione" }
    ]
  });
  A("cul-riconoscere-un-malore", {
    title: { t: "Recognising a medical emergency", it: "Riconoscere un malore" },
    sum: [
      { t: "In a sudden illness you do not diagnose: you recognise warning signs and decide whether to call 112.", it: "Davanti a un malore non fai diagnosi: riconosci i segnali di allarme e decidi se chiamare il 112." },
      { t: "A ⟦heart attack⟧ brings chest pain or pressure, perhaps spreading to the arm or jaw: call 112, keep the person resting.", it: "L'infarto dà dolore o oppressione al torace, che può irradiarsi al braccio o alla mandibola: chiama il 112, tieni la persona a riposo." },
      { t: "A ⟦stroke⟧ is recognised with the FAST rule: face, arm, speech, time.", it: "L'ictus si riconosce con la regola FAST: viso, braccio, parola, tempo." },
      { t: "For ⟦fainting⟧, lay the person down, raise the legs and check breathing; call 112 if recovery is not quick.", it: "Per lo svenimento, fai sdraiare la persona, solleva le gambe e verifica il respiro; chiama il 112 se la ripresa non è rapida." },
      { t: "In a ⟦seizure⟧, protect the person from injury, note the time, and do not restrain them or put anything in their mouth.", it: "In una convulsione proteggi la persona dalle lesioni, annota l'ora e non trattenerla né metterle nulla in bocca." },
      { t: "In ⟦hypoglycaemia⟧ and in an ⟦asthma attack⟧, never give drugs that were not prescribed to that person.", it: "In caso di ipoglicemia e di crisi d'asma, non dare mai farmaci non prescritti a quella persona." },
      { t: "Common errors are waiting for it to pass, driving the person instead of calling an ambulance, and giving drugs on your own.", it: "Errori comuni sono aspettare che passi, accompagnare la persona in auto invece di chiamare l'ambulanza e dare farmaci di propria iniziativa." }
    ],
    gloss: [
      { w: "heart attack", it: "infarto" },
      { w: "stroke", it: "ictus" },
      { w: "fainting", it: "svenimento (sincope)" },
      { w: "seizure", it: "convulsione" },
      { w: "hypoglycaemia", it: "ipoglicemia" },
      { w: "asthma attack", it: "crisi d'asma" },
      { w: "FAST", it: "regola FAST (viso, braccio, parola, tempo)" },
      { w: "warning signs", it: "segnali di allarme" },
      { w: "ambulance", it: "ambulanza" },
      { w: "symptom", it: "sintomo" }
    ]
  });
  A("cul-nutrizione-di-base", {
    title: { t: "Basic nutrition and reading labels", it: "Nutrizione di base e lettura delle etichette" },
    sum: [
      { t: "⟦Macronutrients⟧ (carbohydrates, proteins, fats) give energy, while vitamins and minerals are needed in small amounts.", it: "I macronutrienti (carboidrati, proteine, grassi) forniscono energia, mentre vitamine e minerali servono in piccole quantità." },
      { t: "Energy per gram is 4 ⟦kilocalories⟧ for carbohydrates and proteins and 9 for fats.", it: "L'energia per grammo è di 4 kilocalorie per carboidrati e proteine e di 9 per i grassi." },
      { t: "No macronutrient is «bad» in itself: quality and quantity within the whole diet are what count.", it: "Nessun macronutriente è «cattivo» in assoluto: contano qualità e quantità nel complesso della dieta." },
      { t: "The ⟦Mediterranean diet⟧ is a traditional model shown as a pyramid, with cereals, vegetables, fruit and olive oil every day.", it: "La dieta mediterranea è un modello tradizionale rappresentato da una piramide, con cereali, verdura, frutta e olio d'oliva ogni giorno." },
      { t: "On a ⟦label⟧, compare products using the values per 100 g, because declared portions can be small and misleading.", it: "Sull'etichetta confronta i prodotti usando i valori per 100 g, perché le porzioni dichiarate possono essere piccole e ingannevoli." },
      { t: "To get a ⟦portion⟧ value, multiply by the portion divided by 100; ingredients are listed in decreasing order of weight.", it: "Per il valore di una porzione si moltiplica per la porzione divisa per 100; gli ingredienti sono elencati in ordine decrescente di peso." },
      { t: "Popular ⟦myths⟧, such as «detox» products, lack solid basis, and this lesson is not a diet or individual advice.", it: "Miti diffusi, come i prodotti «detox», non hanno basi solide, e questa lezione non è una dieta né un consiglio individuale." }
    ],
    gloss: [
      { w: "Macronutrients", it: "macronutrienti" },
      { w: "Mediterranean diet", it: "dieta mediterranea" },
      { w: "label", it: "etichetta" },
      { w: "myths", it: "miti" },
      { w: "kilocalories", it: "kilocaloria (kcal)" },
      { w: "fibre", it: "fibre" },
      { w: "saturated fat", it: "grassi saturi" },
      { w: "portion", it: "porzione" },
      { w: "allergens", it: "allergeni" },
      { w: "dietitian", it: "dietista" }
    ]
  });
  A("cul-sonno-movimento-abitudini", {
    title: { t: "Sleep, movement and habits", it: "Sonno, movimento e abitudini" },
    sum: [
      { t: "Diet, movement, sleep, stress, smoking and alcohol act together on health; no single habit saves or condemns.", it: "Alimentazione, movimento, sonno, stress, fumo e alcol agiscono insieme sulla salute; nessuna singola abitudine salva o condanna." },
      { t: "This lesson gives general orders of magnitude for healthy people, not a prescription; anyone with an illness should talk to a doctor.", it: "Questa lezione offre ordini di grandezza generali per persone sane, non una prescrizione; chi ha una malattia deve parlare con il medico." },
      { t: "⟦WHO⟧ guidelines advise 150 to 300 minutes of ⟦moderate⟧ ⟦aerobic activity⟧ weekly for adults, plus ⟦muscle strengthening⟧ on at least 2 days.", it: "Le linee guida OMS indicano per gli adulti da 150 a 300 minuti a settimana di attività aerobica moderata, più il rinforzo muscolare per almeno 2 giorni." },
      { t: "⟦Sedentary behaviour⟧ means spending long periods sitting with low energy use, and it should be limited and replaced by movement.", it: "La sedentarietà è passare molto tempo seduti con basso dispendio di energia, e va limitata e sostituita con movimento." },
      { t: "Sleep is not lost time: it consolidates memory and regulates hormones and mood, and adults generally need 7 to 9 hours.", it: "Il sonno non è tempo perso: consolida la memoria e regola ormoni e umore, e gli adulti in generale hanno bisogno di 7–9 ore." },
      { t: "⟦Sleep hygiene⟧ means regular times, morning light, fewer screens before bed, and a dark, quiet, cool room.", it: "L'igiene del sonno significa orari regolari, luce al mattino, meno schermi prima di dormire e una camera buia, silenziosa e fresca." },
      { t: "Small, gradual changes last longer than drastic ones, and persistent problems should be discussed with a doctor.", it: "I cambiamenti piccoli e graduali durano più di quelli drastici, e i problemi persistenti vanno discussi con il medico." }
    ],
    gloss: [
      { w: "aerobic activity", it: "attività aerobica" },
      { w: "Sedentary behaviour", it: "sedentarietà" },
      { w: "Sleep hygiene", it: "igiene del sonno" },
      { w: "WHO", it: "OMS" },
      { w: "habits", it: "abitudini" },
      { w: "moderate", it: "moderata (intensità)" },
      { w: "muscle strengthening", it: "rinforzo muscolare" },
      { w: "insomnia", it: "insonnia" },
      { w: "screens", it: "schermi" },
      { w: "caffeine", it: "caffeina" }
    ]
  });
  A("cul-come-funziona-internet", {
    title: { t: "How the Internet works", it: "Come funziona Internet" },
    sum: [
      { t: "The Internet is a ⟦network of networks⟧ linked by common rules called protocols; the web is only one service on it.", it: "Internet è una rete di reti collegate da regole comuni chiamate protocolli; il web è solo uno dei servizi che vi viaggiano." },
      { t: "Data are split into small ⟦packets⟧ that travel through different routers and are put together at the destination.", it: "I dati sono divisi in piccoli pacchetti che passano da router diversi e si ricompongono a destinazione." },
      { t: "Every connected device has an ⟦IP address⟧, and IPv4 addresses are no longer enough, which is why IPv6 exists.", it: "Ogni dispositivo connesso ha un indirizzo IP, e gli indirizzi IPv4 non bastano più, per questo esiste IPv6." },
      { t: "The ⟦DNS⟧ translates readable names into IP addresses, like a phone book.", it: "Il DNS traduce i nomi leggibili in indirizzi IP, come una rubrica telefonica." },
      { t: "A ⟦browser⟧ requests pages from a ⟦server⟧ using HTTP, and cookies may remember you or track you.", it: "Un browser richiede le pagine a un server usando HTTP, e i cookie possono ricordarti o tracciarti." },
      { t: "⟦HTTPS⟧ encrypts the connection and checks the server's identity, but it does not guarantee that the site is honest.", it: "HTTPS cifra la connessione e verifica l'identità del server, ma non garantisce che il sito sia onesto." },
      { t: "The ⟦cloud⟧ means using other people's computers, so protect your account and keep a separate backup.", it: "Il cloud consiste nell'usare computer di altri, quindi proteggi l'account e tieni una copia separata." }
    ],
    gloss: [
      { w: "network of networks", it: "rete di reti" },
      { w: "packets", it: "pacchetti" },
      { w: "IP address", it: "indirizzo IP" },
      { w: "DNS", it: "DNS (sistema dei nomi di dominio)" },
      { w: "browser", it: "browser" },
      { w: "server", it: "server" },
      { w: "HTTPS", it: "HTTPS" },
      { w: "cloud", it: "cloud (nuvola)" },
      { w: "router", it: "router" },
      { w: "Wi-Fi", it: "Wi-Fi" }
    ]
  });
  A("cul-sicurezza-online-difesa", {
    title: { t: "Online security: basic defence", it: "Sicurezza online: difesa di base" },
    sum: [
      { t: "Security means reducing the most likely risks with a few habits, and this lesson is entirely defensive.", it: "Sicurezza significa ridurre i rischi più probabili con poche abitudini, e questa lezione è interamente difensiva." },
      { t: "The key principle is ⟦defence in depth⟧: no measure is perfect, but several simple ones together make an attack much costlier.", it: "Il principio chiave è la difesa a strati: nessuna misura è perfetta, ma più misure semplici insieme rendono un attacco molto più costoso." },
      { t: "A strong password is long, unique and unpredictable, and a ⟦passphrase⟧ of random words is also easier to remember.", it: "Una password robusta è lunga, unica e non prevedibile, e una passphrase di parole casuali si ricorda anche più facilmente." },
      { t: "A ⟦password manager⟧ keeps all credentials in an encrypted vault protected by one long master password.", it: "Un gestore di password conserva tutte le credenziali in un archivio cifrato protetto da una sola password principale lunga." },
      { t: "⟦Two-factor authentication⟧ asks for two proofs, and you must never give the codes you receive to anyone.", it: "L'autenticazione a due fattori richiede due prove, e non devi mai comunicare a nessuno i codici che ricevi." },
      { t: "Automatic ⟦updates⟧ fix known security flaws, and apps should be installed only from official stores.", it: "Gli aggiornamenti automatici correggono falle di sicurezza note, e le app vanno installate solo dagli store ufficiali." },
      { t: "The ⟦3-2-1 backup⟧ rule means three copies, on two different media, with one off-site; synchronisation is not a backup.", it: "La regola di backup 3-2-1 prevede tre copie, su due supporti diversi, una fuori sede; la sincronizzazione non è un backup." }
    ],
    gloss: [
      { w: "defence in depth", it: "difesa a strati" },
      { w: "passphrase", it: "passphrase (frase d'accesso)" },
      { w: "password manager", it: "gestore di password" },
      { w: "Two-factor authentication", it: "autenticazione a due fattori" },
      { w: "updates", it: "aggiornamenti" },
      { w: "3-2-1 backup", it: "backup 3-2-1" },
      { w: "ransomware", it: "ransomware" },
      { w: "malware", it: "malware" },
      { w: "credential stuffing", it: "riuso di credenziali rubate" },
      { w: "VPN", it: "VPN" }
    ]
  });
  A("cul-truffe-e-phishing", {
    title: { t: "Scams and phishing", it: "Truffe e phishing" },
    sum: [
      { t: "⟦Social engineering⟧ uses psychology rather than a technical flaw, with levers such as ⟦urgency⟧, fear, authority and greed.", it: "L'ingegneria sociale sfrutta la psicologia invece di una falla informatica, con leve come urgenza, paura, autorità e avidità." },
      { t: "The common signal is that the message pushes you not to think and not to verify.", it: "Il segnale comune è che il messaggio ti spinge a non pensare e a non verificare." },
      { t: "⟦Phishing⟧ is a message posing as a trusted body to get credentials or payments, often through a link to a ⟦fake site⟧.", it: "Il phishing è un messaggio che finge di essere un ente fidato per ottenere credenziali o pagamenti, spesso con un link a un sito falso." },
      { t: "⟦Smishing⟧ uses text messages and ⟦vishing⟧ uses phone calls, often with a falsified number on the display.", it: "Lo smishing usa gli SMS e il vishing le telefonate, spesso con un numero falsificato sul display." },
      { t: "No legitimate body asks for your PIN, password or one-time codes.", it: "Nessun ente legittimo chiede PIN, password o codici OTP." },
      { t: "A simple procedure helps: stop, think, verify through another channel, and only then decide.", it: "Una procedura semplice aiuta: fermati, pensa, verifica per un altro canale e solo dopo decidi." },
      { t: "If you were scammed, call your bank at once, change passwords, keep the evidence and report it to the ⟦Polizia Postale⟧.", it: "Se sei caduto in una truffa, chiama subito la banca, cambia le password, conserva le prove e denuncia alla Polizia Postale." }
    ],
    gloss: [
      { w: "Social engineering", it: "ingegneria sociale" },
      { w: "Phishing", it: "phishing" },
      { w: "Smishing", it: "smishing (phishing via SMS)" },
      { w: "vishing", it: "vishing (phishing telefonico)" },
      { w: "Polizia Postale", it: "Polizia Postale e delle Comunicazioni" },
      { w: "spoofing", it: "falsificazione del mittente o numero" },
      { w: "urgency", it: "urgenza" },
      { w: "evidence", it: "prove" },
      { w: "fake site", it: "sito falso" },
      { w: "one-time codes", it: "codici OTP" }
    ]
  });
  A("cul-privacy-e-dati-personali", {
    title: { t: "Privacy and personal data", it: "Privacy e dati personali" },
    sum: [
      { t: "⟦Personal data⟧ is any information about an identified or identifiable person, and special categories such as health deserve stronger protection.", it: "Un dato personale è qualsiasi informazione su una persona identificata o identificabile, e categorie particolari come la salute meritano protezione rafforzata." },
      { t: "Privacy matters to control who knows what about you and to avoid identity theft, discrimination and targeted scams.", it: "La privacy conta per controllare chi sa cosa di te ed evitare furti d'identità, discriminazioni e truffe mirate." },
      { t: "The ⟦GDPR⟧ is the European law, and in Italy the supervisory authority is the ⟦Garante⟧.", it: "Il GDPR è la legge europea e in Italia l'autorità di controllo è il Garante." },
      { t: "You have rights such as access, rectification, erasure and objection, and ⟦consent⟧ must be free, informed and revocable.", it: "Hai diritti come accesso, rettifica, cancellazione e opposizione, e il consenso deve essere libero, informato e revocabile." },
      { t: "Your ⟦digital footprint⟧ is the set of traces you leave online, and nothing online is truly «deleted».", it: "La tua impronta digitale è l'insieme delle tracce che lasci online, e nulla di ciò che è online è realmente «cancellato»." },
      { t: "App ⟦permissions⟧ should follow the rule of the minimum necessary, so revoke those an app does not need.", it: "I permessi delle app dovrebbero seguire la regola del minimo necessario, quindi revoca quelli che non servono." },
      { t: "Minors are vulnerable users online, so dialogue and agreed rules come before bans.", it: "I minori sono utenti vulnerabili online, quindi dialogo e regole concordate vengono prima dei divieti." }
    ],
    gloss: [
      { w: "Personal data", it: "dati personali" },
      { w: "GDPR", it: "GDPR (regolamento europeo sulla protezione dei dati)" },
      { w: "consent", it: "consenso" },
      { w: "digital footprint", it: "impronta digitale" },
      { w: "permissions", it: "permessi (delle app)" },
      { w: "Garante", it: "Garante per la protezione dei dati personali" },
      { w: "cookies", it: "cookie" },
      { w: "data breach", it: "violazione dei dati" },
      { w: "privacy policy", it: "informativa privacy" },
      { w: "tracking", it: "tracciamento" }
    ]
  });
  A("cul-ia-fake-news-fonti", {
    title: { t: "Artificial intelligence, fake news and checking sources", it: "Intelligenza artificiale, fake news e verifica delle fonti" },
    sum: [
      { t: "Most current ⟦artificial intelligence⟧ is machine learning: a model is trained on very many examples until it learns regularities.", it: "La maggior parte dell'intelligenza artificiale attuale è apprendimento automatico: un modello è addestrato su moltissimi esempi finché impara regolarità." },
      { t: "A ⟦language model⟧ is trained to predict the next piece of text, called a token, and writes one token at a time.", it: "Un modello linguistico è addestrato a prevedere la prossima parte di testo, detta token, e scrive un token alla volta." },
      { t: "It does not consult a bank of verified facts, so it can sound sure even when it is wrong.", it: "Non consulta una banca di fatti verificati, quindi può sembrare sicuro anche quando sbaglia." },
      { t: "A false statement presented with confidence is called a ⟦hallucination⟧, such as an invented name, quote or reference.", it: "Un'affermazione falsa presentata con sicurezza si chiama allucinazione, come un nome, una citazione o un riferimento inventati." },
      { t: "⟦Disinformation⟧ is false information spread on purpose, and ⟦deepfakes⟧ are faces, voices or videos made or altered with AI to look real.", it: "La disinformazione è informazione falsa diffusa intenzionalmente, e i deepfake sono volti, voci o video creati o alterati con l'IA per sembrare reali." },
      { t: "To check news, stop before sharing, look at source and date, and find other sources; ⟦lateral reading⟧ means opening other tabs.", it: "Per verificare una notizia fermati prima di condividere, guarda fonte e data e trova altre fonti; la lettura laterale significa aprire altre schede." },
      { t: "Treat AI as an assistant that can be wrong, check facts, and do not entrust it with decisions on health or safety.", it: "Considera l'IA un assistente che può sbagliare, verifica i fatti e non affidarle decisioni su salute o sicurezza." }
    ],
    gloss: [
      { w: "artificial intelligence", it: "intelligenza artificiale" },
      { w: "language model", it: "modello linguistico" },
      { w: "hallucination", it: "allucinazione (affermazione falsa e sicura)" },
      { w: "Disinformation", it: "disinformazione" },
      { w: "deepfakes", it: "deepfake" },
      { w: "lateral reading", it: "lettura laterale" },
      { w: "token", it: "token (pezzetto di parola)" },
      { w: "machine learning", it: "apprendimento automatico" },
      { w: "bias", it: "pregiudizio, distorsione" },
      { w: "fact-checking", it: "verifica dei fatti" }
    ]
  });
  A("cul-cucina-igiene-sicurezza", {
    title: { t: "Cooking: hygiene, safety and equipment", it: "Cucina: igiene, sicurezza e attrezzatura" },
    sum: [
      { t: "⟦Food poisoning⟧ cannot be seen or smelled, because contaminated food often looks and smells normal.", it: "Un'intossicazione alimentare non si vede e non si sente, perché gli alimenti contaminati hanno spesso aspetto e odore normali." },
      { t: "Risk is controlled with three levers: temperature, time and hygiene.", it: "Il rischio si controlla con tre leve: temperatura, tempo e igiene." },
      { t: "Keep the fridge at 4 °C or less and the freezer at −18 °C; the ⟦danger zone⟧ is 5 to 60 °C.", it: "Tieni il frigorifero a 4 °C o meno e il congelatore a −18 °C; la zona di pericolo va da 5 a 60 °C." },
      { t: "Cooked or perishable food should not stay more than 2 hours at room temperature.", it: "Il cibo cotto o deperibile non deve restare più di 2 ore a temperatura ambiente." },
      { t: "⟦Cross-contamination⟧ passes ⟦bacteria⟧ from raw to ready-to-eat food, so wash hands for at least 20 seconds and separate boards.", it: "La contaminazione crociata trasferisce batteri dal crudo al cibo pronto, quindi lava le mani per almeno 20 secondi e separa i taglieri." },
      { t: "A «⟦use by⟧» date is a safety date, while «⟦best before⟧» concerns quality; when in doubt, do not eat.", it: "«Da consumarsi entro» è una data di sicurezza, mentre «preferibilmente entro» riguarda la qualità; nel dubbio, non mangiare." },
      { t: "A sharp knife is safer than a blunt one, and an oil fire must never be put out with water.", it: "Un coltello affilato è più sicuro di uno spuntato, e un fuoco d'olio non va mai spento con l'acqua." }
    ],
    gloss: [
      { w: "danger zone", it: "zona di pericolo" },
      { w: "Cross-contamination", it: "contaminazione crociata" },
      { w: "food poisoning", it: "intossicazione alimentare" },
      { w: "bacteria", it: "batteri" },
      { w: "cold chain", it: "catena del freddo" },
      { w: "use by", it: "da consumarsi entro" },
      { w: "best before", it: "da consumarsi preferibilmente entro" },
      { w: "thermometer", it: "termometro" },
      { w: "knife", it: "coltello" },
      { w: "gas leak", it: "odore di gas" }
    ]
  });
  A("cul-tecniche-base-cottura", {
    title: { t: "Basic techniques: cuts and cooking methods", it: "Tecniche di base: tagli e cotture" },
    sum: [
      { t: "Heat passes by ⟦conduction⟧, convection and radiation, and it changes the structure of food.", it: "Il calore passa per conduzione, convezione e irraggiamento, e cambia la struttura del cibo." },
      { t: "Liquid water does not exceed 100 °C, so wet food does not brown.", it: "L'acqua liquida non supera i 100 °C, quindi il cibo bagnato non rosola." },
      { t: "The ⟦Maillard reaction⟧ gives brown colour and roasted aromas, and needs a dry surface and a hot, uncrowded pan.", it: "La reazione di Maillard dà colore bruno e aromi di tostato, e richiede una superficie asciutta e una padella calda e non sovraccarica." },
      { t: "Regular ⟦cuts⟧, such as slices, dice and julienne, give even cooking because pieces of the same size cook in the same time.", it: "Tagli regolari, come fette, dadini e julienne, danno cotture uniformi perché pezzi della stessa dimensione cuociono nello stesso tempo." },
      { t: "A ⟦soffritto⟧ of finely chopped onion, carrot and celery is cooked gently in oil; if it burns, start again.", it: "Un soffritto di cipolla, carota e sedano tritati finemente si cuoce dolcemente in olio; se brucia, ricomincia." },
      { t: "⟦Steaming⟧ loses fewer soluble vitamins than boiling, but steam burns more than boiling water.", it: "La cottura al vapore perde meno vitamine solubili della bollitura, ma il vapore ustiona più dell'acqua bollente." },
      { t: "⟦Braising⟧ means searing and then cooking covered at low heat for hours, so collagen turns into gelatin and tough cuts become tender.", it: "La brasatura consiste nel rosolare e poi cuocere coperto a fuoco basso per ore, così il collagene diventa gelatina e i tagli duri diventano teneri." }
    ],
    gloss: [
      { w: "Maillard reaction", it: "reazione di Maillard" },
      { w: "cuts", it: "tagli" },
      { w: "soffritto", it: "soffritto" },
      { w: "Steaming", it: "cottura al vapore" },
      { w: "Braising", it: "brasatura" },
      { w: "conduction", it: "conduzione" },
      { w: "convection", it: "convezione" },
      { w: "searing", it: "rosolatura" },
      { w: "collagen", it: "collagene" },
      { w: "julienne", it: "julienne" }
    ]
  });
  A("cul-pasta-riso-cereali-legumi", {
    title: { t: "Pasta, rice, grains and legumes", it: "Pasta, riso, cereali e legumi" },
    sum: [
      { t: "Pasta, rice and grains are rich in ⟦starch⟧, which absorbs water and swells when heated.", it: "Pasta, riso e cereali sono ricchi di amido, che assorbe acqua e si gonfia con il calore." },
      { t: "Pasta needs plenty of water: about 1 litre per 100 g, with 10 g of salt per litre added when it boils.", it: "La pasta richiede tanta acqua: circa 1 litro ogni 100 g, con 10 g di sale per litro aggiunto quando bolle." },
      { t: "Cook pasta ⟦al dente⟧ and keep a ladle of cooking water; do not rinse pasta that will be dressed.", it: "Cuoci la pasta al dente e tieni un mestolo di acqua di cottura; non sciacquare la pasta che dovrai condire." },
      { t: "Rice can be boiled in plenty of water, cooked by ⟦absorption⟧, or made into ⟦risotto⟧ with hot broth added little by little.", it: "Il riso si può bollire in tanta acqua, cuocere per assorbimento o preparare come risotto con brodo caldo aggiunto poco alla volta." },
      { t: "Whole grains need more time and sometimes ⟦soaking⟧, while couscous is pre-cooked and only needs rehydrating.", it: "I cereali integrali richiedono più tempo e talvolta un ammollo, mentre il couscous è precotto e basta reidratarlo." },
      { t: "Dried ⟦legumes⟧ are soaked for several hours and then cooked for a long time, with salt added near the end.", it: "I legumi secchi si mettono in ammollo per diverse ore e poi si cuociono a lungo, salando verso la fine." },
      { t: "Undercooked red beans contain a toxic substance, so they must boil vigorously, and leftover rice must be cooled quickly.", it: "I fagioli rossi poco cotti contengono una sostanza tossica, quindi devono bollire vivacemente, e il riso avanzato va raffreddato in fretta." }
    ],
    gloss: [
      { w: "starch", it: "amido" },
      { w: "al dente", it: "al dente" },
      { w: "absorption", it: "cottura per assorbimento" },
      { w: "risotto", it: "risotto" },
      { w: "legumes", it: "legumi" },
      { w: "soaking", it: "ammollo" },
      { w: "whole grains", it: "cereali integrali" },
      { w: "couscous", it: "couscous" },
      { w: "cooking water", it: "acqua di cottura" },
      { w: "portion", it: "porzione" }
    ]
  });
  A("cul-carne-pesce-uova", {
    title: { t: "Meat, fish and eggs: cooking and safety", it: "Carne, pesce e uova: cotture e sicurezza" },
    sum: [
      { t: "Meat, fish and eggs are rich in protein and water, which suits bacteria, so they need extra care.", it: "Carne, pesce e uova sono ricchi di proteine e acqua, perfetti per i batteri, quindi richiedono più attenzione." },
      { t: "⟦Poultry⟧ and eggs may carry ⟦Salmonella⟧, and ⟦minced meat⟧ mixes surface bacteria into the inside.", it: "Pollame e uova possono portare Salmonella, e la carne macinata mescola all'interno i batteri della superficie." },
      { t: "Use a ⟦probe thermometer⟧ for the ⟦core temperature⟧: about 74 °C for poultry, 71 °C for minced meat, 63 °C for fish.", it: "Usa un termometro a sonda per la temperatura al cuore: circa 74 °C per il pollame, 71 °C per la carne macinata, 63 °C per il pesce." },
      { t: "Colour is not enough: pink meat can be well cooked, and brown meat can be raw in the centre.", it: "Il colore non basta: la carne rosa può essere ben cotta e la carne bruna può essere cruda al centro." },
      { t: "Fresh fish has bright eyes, red gills and firm flesh, and meat should rest before it is cut.", it: "Il pesce fresco ha occhi lucidi, branchie rosse e carne soda, e la carne deve riposare prima di essere tagliata." },
      { t: "Raw fish needs professional freezing, a domestic freezer does not guarantee the same result, and raw eggs may carry Salmonella.", it: "Il pesce crudo richiede un congelamento professionale, il congelatore domestico non garantisce lo stesso risultato, e le uova crude possono contenere Salmonella." },
      { t: "Meat loses water when cooked, so divide the cooked weight you want by the ⟦yield⟧ to find the raw weight to buy.", it: "La carne perde acqua cuocendo, quindi dividi il peso cotto desiderato per la resa per trovare il peso crudo da comprare." }
    ],
    gloss: [
      { w: "Salmonella", it: "Salmonella" },
      { w: "core temperature", it: "temperatura al cuore" },
      { w: "probe thermometer", it: "termometro a sonda" },
      { w: "minced meat", it: "carne macinata" },
      { w: "cooking loss", it: "calo di cottura" },
      { w: "yield", it: "resa" },
      { w: "poultry", it: "pollame" },
      { w: "raw fish", it: "pesce crudo" },
      { w: "pasteurised eggs", it: "uova pastorizzate" },
      { w: "vulnerable people", it: "persone vulnerabili" }
    ]
  });
  A("cul-verdure-zuppe-salse", {
    title: { t: "Vegetables, soups, sauces and seasonings", it: "Verdure, zuppe, salse e condimenti" },
    sum: [
      { t: "Vegetables give fibre, vitamins and minerals, and must be washed under running water, never with soap.", it: "Le verdure forniscono fibre, vitamine e minerali, e vanno lavate sotto acqua corrente, mai con il sapone." },
      { t: "⟦Blanching⟧ in boiling salted water, then in ice water, fixes the green colour, while steaming loses fewer soluble vitamins.", it: "Lo sbollentare in acqua bollente salata e poi in acqua e ghiaccio fissa il verde, mentre la cottura al vapore perde meno vitamine solubili." },
      { t: "Roasting vegetables caramelises the surface, so cut pieces of the same size and spread them in a single layer.", it: "Cuocere le verdure al forno caramella la superficie, quindi taglia pezzi della stessa dimensione e stendili in un solo strato." },
      { t: "For a soup, start with a ⟦soffritto⟧, add the harder vegetables first and salt only at the end.", it: "Per una zuppa si parte da un soffritto, si aggiungono prima le verdure più dure e si sala solo alla fine." },
      { t: "An ⟦emulsion⟧ is a stable mix of liquids that normally do not blend, like a ⟦vinaigrette⟧ of three parts oil, one vinegar.", it: "Un'emulsione è una miscela stabile di liquidi che normalmente non si mescolano, come una vinaigrette di tre parti di olio e una di aceto." },
      { t: "Homemade ⟦mayonnaise⟧ contains raw eggs and is a risky food, so use pasteurised eggs and keep it cold.", it: "La maionese fatta in casa contiene uova crude ed è un alimento a rischio, quindi usa uova pastorizzate e tienila al freddo." },
      { t: "The tongue distinguishes five tastes, including ⟦umami⟧; to fix a dish, taste it and correct one taste at a time.", it: "La lingua distingue cinque gusti, tra cui l'umami; per correggere un piatto, assaggialo e correggi un gusto alla volta." }
    ],
    gloss: [
      { w: "Blanching", it: "sbollentare (sbianchire)" },
      { w: "emulsion", it: "emulsione" },
      { w: "mayonnaise", it: "maionese" },
      { w: "umami", it: "umami" },
      { w: "soffritto", it: "soffritto" },
      { w: "vinaigrette", it: "vinaigrette" },
      { w: "béchamel", it: "besciamella" },
      { w: "broth", it: "brodo" },
      { w: "seasoning", it: "condimento" },
      { w: "steaming", it: "cottura al vapore" }
    ]
  });
  A("cul-impasti-lievitazione", {
    title: { t: "Dough and leavening: bread and pizza", it: "Impasti e lievitazione: pane e pizza" },
    sum: [
      { t: "A basic dough has flour, water, salt and ⟦yeast⟧, and flour proteins form ⟦gluten⟧, an elastic network that traps gas.", it: "Un impasto base ha farina, acqua, sale e lievito, e le proteine della farina formano il glutine, una rete elastica che trattiene i gas." },
      { t: "Recipes use ⟦baker's percentages⟧ on the weight of flour, which is always 100%, and ingredients are weighed, not measured by volume.", it: "Le ricette usano le percentuali del fornaio sul peso della farina, che è sempre 100%, e gli ingredienti si pesano, non si misurano a volume." },
      { t: "⟦Hydration⟧ is the weight of water divided by the weight of flour, and higher hydration gives a softer, stickier dough.", it: "L'idratazione è il peso dell'acqua diviso il peso della farina, e un'idratazione più alta dà un impasto più morbido e appiccicoso." },
      { t: "The longer the ⟦rising⟧, the less yeast is needed; yeast dies at high temperature, so the water must be cold or lukewarm.", it: "Più lunga è la lievitazione, meno lievito serve; il lievito muore ad alta temperatura, quindi l'acqua deve essere fredda o tiepida." },
      { t: "The dough has risen when its volume doubles and a finger dent returns slowly.", it: "L'impasto ha lievitato quando il volume raddoppia e la tacca del dito ritorna lentamente." },
      { t: "To ⟦scale⟧ a recipe, multiply every ingredient by the same factor, the wanted quantity divided by the recipe quantity.", it: "Per scalare una ricetta, moltiplica ogni ingrediente per lo stesso fattore, la quantità desiderata divisa per quella della ricetta." },
      { t: "Raw flour and dough should not be eaten, and a very hot oven needs long oven gloves and care with steam.", it: "Farina e impasto crudi non vanno mangiati, e un forno molto caldo richiede guanti lunghi e attenzione al vapore." }
    ],
    gloss: [
      { w: "gluten", it: "glutine" },
      { w: "baker's percentages", it: "percentuali del fornaio" },
      { w: "Hydration", it: "idratazione" },
      { w: "yeast", it: "lievito" },
      { w: "scale", it: "scalare (una ricetta)" },
      { w: "rising", it: "lievitazione" },
      { w: "flour", it: "farina" },
      { w: "dough", it: "impasto" },
      { w: "fermentation", it: "fermentazione" },
      { w: "crust", it: "crosta" }
    ]
  });
  A("cul-dolci-dispensa-spesa", {
    title: { t: "Sweets, pantry, shopping and waste", it: "Dolci, dispensa, spesa e spreco" },
    sum: [
      { t: "In baking, proportions matter more than in cooking, because each ingredient has a precise function.", it: "In pasticceria le proporzioni contano più che in cucina, perché ogni ingrediente ha una funzione precisa." },
      { t: "The «quattro quarti» cake uses equal weights of eggs, butter, sugar and flour; ⟦shortcrust⟧ uses flour, butter, sugar at 3:2:1.", it: "La torta «quattro quarti» usa pesi uguali di uova, burro, zucchero e farina; la frolla usa farina, burro e zucchero in rapporto 3 : 2 : 1." },
      { t: "⟦Jam⟧ keeps thanks to sugar and acidity, with sugar equal to half the weight of the cleaned fruit, in sterilised jars.", it: "La marmellata si conserva grazie a zucchero e acidità, con zucchero pari alla metà del peso della frutta pulita, in barattoli sterilizzati." },
      { t: "⟦Botulism⟧ grows without air and in low acidity, so home preserves of vegetables in oil are not suitable without proper procedures.", it: "Il botulino cresce senza aria e con poca acidità, quindi le conserve casalinghe di verdure sott'olio non sono adatte senza procedure adeguate." },
      { t: "A good pantry is cool, dry and dark, with airtight containers and the ⟦FIFO⟧ rule: first in, first out.", it: "Una buona dispensa è fresca, asciutta e buia, con contenitori ermetici e la regola FIFO: primo a entrare, primo a uscire." },
      { t: "Planning menus and shopping lists reduces ⟦food waste⟧, which comes mainly from excess purchases and forgotten leftovers.", it: "Pianificare menù e lista della spesa riduce lo spreco alimentare, che nasce soprattutto da acquisti eccessivi e avanzi dimenticati." },
      { t: "The ⟦cost per portion⟧ is the ingredients' total cost divided by the portions, and the price per kilo lets you compare packs.", it: "Il costo per porzione è il costo totale degli ingredienti diviso le porzioni, e il prezzo al chilo permette di confrontare le confezioni." }
    ],
    gloss: [
      { w: "Botulism", it: "botulino" },
      { w: "FIFO", it: "FIFO (primo a entrare, primo a uscire)" },
      { w: "food waste", it: "spreco alimentare" },
      { w: "cost per portion", it: "costo per porzione" },
      { w: "shortcrust", it: "pasta frolla" },
      { w: "jam", it: "marmellata" },
      { w: "pantry", it: "dispensa" },
      { w: "shopping list", it: "lista della spesa" },
      { w: "price per kilo", it: "prezzo al chilo" },
      { w: "preserves", it: "conserve" }
    ]
  });
  A("cul-casa-pulizia-manutenzione", {
    title: { t: "Home: cleaning, maintenance, damp and bills", it: "Casa: pulizia, manutenzione, umidità e bollette" },
    sum: [
      { t: "Cleaning removes visible dirt, while ⟦disinfecting⟧ reduces microbes and is done after cleaning.", it: "Pulire significa rimuovere lo sporco visibile, mentre disinfettare riduce i microrganismi e si fa dopo aver pulito." },
      { t: "Work from top to bottom and from cleanest to dirtiest, using different cloths for different areas.", it: "Procedi dall'alto verso il basso e dal più pulito al più sporco, usando panni diversi per aree diverse." },
      { t: "Never mix cleaning products: ⟦bleach⟧ with ammonia or acids releases toxic gases.", it: "Non mescolare mai i prodotti di pulizia: la candeggina con ammoniaca o acidi libera gas tossici." },
      { t: "Read the label, ventilate, wear gloves, and keep products in their original bottle out of children's reach.", it: "Leggi l'etichetta, ventila, indossa guanti e tieni i prodotti nel flacone originale fuori dalla portata dei bambini." },
      { t: "⟦Mould⟧ grows where there is humidity and little ventilation, so air the rooms briefly but well and repair leaks.", it: "La muffa cresce dove ci sono umidità e poca ventilazione, quindi aera brevemente ma bene e ripara le perdite." },
      { t: "Regular ⟦maintenance⟧ avoids faults; ⟦carbon monoxide⟧ is odourless and deadly, so keep a detector and service the boiler.", it: "La manutenzione regolare evita guasti; il monossido di carbonio è inodore e letale, quindi tieni un rilevatore e fai controllare la caldaia." },
      { t: "Electricity is measured in ⟦kilowatt-hours⟧: kWh equals power in kilowatts times hours of use.", it: "L'energia elettrica si misura in kilowattora: i kWh sono la potenza in kilowatt per le ore di utilizzo." }
    ],
    gloss: [
      { w: "disinfecting", it: "disinfettare" },
      { w: "bleach", it: "candeggina" },
      { w: "Mould", it: "muffa" },
      { w: "maintenance", it: "manutenzione" },
      { w: "kilowatt-hours", it: "kilowattora (kWh)" },
      { w: "carbon monoxide", it: "monossido di carbonio" },
      { w: "condensation", it: "condensa" },
      { w: "humidity", it: "umidità" },
      { w: "descaler", it: "anticalcare" },
      { w: "bill", it: "bolletta" }
    ]
  });
  A("cul-fai-da-te-misure-trapano", {
    title: { t: "DIY: tools, measuring, drilling and shelves", it: "Fai da te: attrezzi, misure, trapano e mensole" },
    sum: [
      { t: "Safety comes first: wear glasses, an FFP2 mask and ear protection, and never wear gloves or loose sleeves near rotating parts.", it: "La sicurezza viene prima: indossa occhiali, mascherina FFP2 e protezioni per l'udito, e non usare mai guanti o maniche larghe vicino a parti rotanti." },
      { t: "Clamp the workpiece, and unplug the tool or remove the battery before changing a bit or blade.", it: "Blocca il pezzo e stacca la spina o la batteria prima di cambiare punta o lama." },
      { t: "Follow «measure twice, cut once», and check horizontal lines with a ⟦spirit level⟧.", it: "Segui il motto «misura due volte, taglia una», e controlla le linee orizzontali con una livella a bolla." },
      { t: "Match the ⟦drill bit⟧ to the material and the ⟦wall plug⟧ to the wall, with a hole as wide as the plug.", it: "Abbina la punta al materiale e il tassello alla parete, con un foro largo quanto il tassello." },
      { t: "Before drilling, look for hidden cables and pipes with a ⟦detector⟧, and if in doubt, do not drill.", it: "Prima di forare cerca cavi e tubi nascosti con un rilevatore e, nel dubbio, non forare." },
      { t: "⟦Plasterboard⟧ holds little weight, so use specific plugs, and fix heavy loads to the studs or the wall behind.", it: "Il cartongesso regge poco peso, quindi usa tasselli specifici e fissa i carichi pesanti ai montanti o al muro dietro." },
      { t: "Area is base times height and volume is length times width times height; add a ⟦margin⟧ of about 10% for waste.", it: "L'area è base per altezza e il volume è lunghezza per larghezza per altezza; aggiungi un margine di circa il 10% per gli scarti." }
    ],
    gloss: [
      { w: "spirit level", it: "livella a bolla" },
      { w: "wall plug", it: "tassello" },
      { w: "Plasterboard", it: "cartongesso" },
      { w: "margin", it: "margine (di scarto)" },
      { w: "drill bit", it: "punta (del trapano)" },
      { w: "protective equipment", it: "dispositivi di protezione (DPI)" },
      { w: "detector", it: "rilevatore" },
      { w: "bracket", it: "staffa" },
      { w: "ladder", it: "scala" },
      { w: "tape measure", it: "metro a nastro" }
    ]
  });
  A("cul-riparazioni-idrauliche-pareti", {
    title: { t: "Small repairs: water, trap and walls", it: "Piccole riparazioni: acqua, sifone e pareti" },
    sum: [
      { t: "Every plumbing job starts by knowing where to shut off the water: the ⟦stopcock⟧ under the sink or the main valve.", it: "Ogni intervento idraulico inizia dal sapere dove si chiude l'acqua: il rubinetto di arresto sotto il lavandino o la valvola generale." },
      { t: "Before working, close the stopcock, open the tap to release the pressure, and place a bucket and rags under the joints.", it: "Prima di lavorare chiudi l'arresto, apri il rubinetto per scaricare la pressione e metti secchio e stracci sotto i raccordi." },
      { t: "A dripping tap usually has a worn ⟦gasket⟧ or ⟦cartridge⟧, and a drip every second wastes a lot of water over time.", it: "Un rubinetto che gocciola ha di solito una guarnizione o una cartuccia consumata, e una goccia al secondo spreca molta acqua nel tempo." },
      { t: "The ⟦trap⟧ is the curved pipe under the sink that holds water and blocks sewer smells; it can be unscrewed and cleaned.", it: "Il sifone è il tubo curvo sotto il lavandino che trattiene acqua e blocca i cattivi odori; si può svitare e pulire." },
      { t: "Chemical drain cleaners are corrosive and must never be mixed; first try hot water and a plunger.", it: "Gli sturascarichi chimici sono corrosivi e non vanno mai mescolati; prima prova con acqua calda e una ventosa." },
      { t: "A good paint job depends on preparation: clean, fill holes, sand with a mask, and use a ⟦primer⟧ on porous walls.", it: "Una buona verniciatura dipende dalla preparazione: pulisci, stucca i buchi, carteggia con la mascherina e usa un fissativo sulle pareti porose." },
      { t: "The paint needed is area divided by ⟦coverage⟧ times the coats; call a professional for gas smell or water near electrics.", it: "La pittura necessaria è l'area divisa per la resa per le mani; chiama un professionista per odore di gas o acqua vicino all'impianto elettrico." }
    ],
    gloss: [
      { w: "stopcock", it: "rubinetto di arresto" },
      { w: "gasket", it: "guarnizione" },
      { w: "trap", it: "sifone" },
      { w: "primer", it: "fissativo" },
      { w: "coverage", it: "resa (m² per litro)" },
      { w: "cartridge", it: "cartuccia (del rubinetto)" },
      { w: "plumber", it: "idraulico" },
      { w: "filler", it: "stucco" },
      { w: "PTFE tape", it: "nastro di PTFE (teflon)" },
      { w: "coat", it: "mano (di vernice)" }
    ]
  });
  A("cul-elettricita-domestica-sicura", {
    title: { t: "Household electricity safely", it: "Elettricità domestica in sicurezza" },
    sum: [
      { t: "Household current at 230 volts can kill, so working on the electrical system must be left to a licensed electrician.", it: "La corrente domestica a 230 volt può uccidere, quindi i lavori sull'impianto elettrico vanno lasciati a un elettricista abilitato." },
      { t: "Power equals voltage times current, so current equals power divided by voltage: I = P ÷ V.", it: "La potenza è la tensione per la corrente, quindi la corrente è la potenza divisa per la tensione: I = P ÷ V." },
      { t: "The ⟦circuit breaker⟧ (magnetothermal switch) protects the cables from ⟦overload⟧ and ⟦short circuit⟧.", it: "L'interruttore magnetotermico protegge i cavi da sovraccarico e cortocircuito." },
      { t: "The ⟦residual current device⟧ protects people by detecting leakage, has a threshold of 30 milliamperes, and should be tested every month.", it: "L'interruttore differenziale protegge le persone rilevando le dispersioni, ha una soglia di 30 milliampere e va provato ogni mese." },
      { t: "The ⟦earth connection⟧ carries fault current to the ground, so never remove the earth pin or use adapters that exclude it.", it: "La messa a terra porta verso terra la corrente di guasto, quindi non togliere mai il polo di terra né usare adattatori che lo escludono." },
      { t: "For a ⟦power strip⟧, add the powers, divide by 230 volts and compare with the limit; heaters need the wall socket.", it: "Per una ciabatta, somma le potenze, dividi per 230 volt e confronta con il limite; gli apparecchi che scaldano vanno alla presa a muro." },
      { t: "You can change a light bulb with care, but call an electrician at a burning smell, blackened sockets or repeated tripping.", it: "Puoi sostituire una lampadina con attenzione, ma chiama un elettricista se c'è odore di bruciato, prese annerite o scatti ripetuti." }
    ],
    gloss: [
      { w: "circuit breaker", it: "interruttore magnetotermico" },
      { w: "residual current device", it: "interruttore differenziale (salvavita)" },
      { w: "earth connection", it: "messa a terra" },
      { w: "power strip", it: "ciabatta (presa multipla)" },
      { w: "short circuit", it: "cortocircuito" },
      { w: "overload", it: "sovraccarico" },
      { w: "electrician", it: "elettricista" },
      { w: "voltage", it: "tensione" },
      { w: "current", it: "corrente" },
      { w: "light bulb", it: "lampadina" }
    ]
  });
  A("cul-come-funziona-un-motore", {
    title: { t: "How an engine works", it: "Come funziona un motore" },
    sum: [
      { t: "A thermal engine turns fuel's chemical energy into mechanical energy: gases push a ⟦piston⟧, and a connecting rod gives rotation.", it: "Un motore termico trasforma l'energia chimica di un carburante in energia meccanica: i gas spingono un pistone e una biella dà la rotazione." },
      { t: "The ⟦four-stroke cycle⟧ is intake, compression, combustion and expansion, and exhaust; only combustion produces work.", it: "Il ciclo a quattro tempi è aspirazione, compressione, combustione ed espansione, scarico; solo la combustione produce lavoro." },
      { t: "A petrol engine uses a spark from the ⟦spark plug⟧, while a ⟦diesel⟧ engine compresses only air and the fuel ignites itself.", it: "Un motore a benzina usa la scintilla della candela, mentre un motore diesel comprime solo aria e il combustibile si accende da solo." },
      { t: "A ⟦hybrid⟧ combines a thermal engine, electric motors and a battery; an electric vehicle has only a motor and a battery.", it: "Un ibrido combina motore termico, motori elettrici e una batteria; un veicolo elettrico ha solo motore elettrico e batteria." },
      { t: "Power equals ⟦torque⟧ times angular speed, so the same power at lower revs needs more torque.", it: "La potenza è la coppia per la velocità angolare, quindi la stessa potenza a un regime più basso richiede più coppia." },
      { t: "Fuel consumption is given in l/100 km or km/l, and the conversion is an inversion, not a subtraction.", it: "Il consumo si esprime in l/100 km o km/l, e la conversione è un'inversione, non una sottrazione." },
      { t: "A running engine produces carbon monoxide, so never run it in a closed garage, and never touch the orange high-voltage cables.", it: "Un motore acceso produce monossido di carbonio, quindi non farlo mai girare in un garage chiuso, e non toccare mai i cavi arancioni ad alta tensione." }
    ],
    gloss: [
      { w: "four-stroke cycle", it: "ciclo a quattro tempi" },
      { w: "diesel", it: "diesel (gasolio)" },
      { w: "hybrid", it: "ibrido" },
      { w: "torque", it: "coppia" },
      { w: "piston", it: "pistone" },
      { w: "spark plug", it: "candela" },
      { w: "carbon monoxide", it: "monossido di carbonio" },
      { w: "power", it: "potenza" },
      { w: "consumption", it: "consumo" },
      { w: "battery", it: "batteria" }
    ]
  });
  A("cul-manutenzione-base-auto", {
    title: { t: "Basic car maintenance", it: "Manutenzione base dell'auto" },
    sum: [
      { t: "Simple regular checks prevent faults and dangerous situations, such as worn tyres, weak brakes or broken lights.", it: "Controlli semplici e regolari prevengono guasti e situazioni pericolose, come pneumatici lisci, freni scarsi o luci fuori uso." },
      { t: "You do quick visual checks yourself, while brakes, suspension, electrics and airbags belong to a workshop; the ⟦handbook⟧ is the reference.", it: "Fai da te i controlli visivi rapidi, mentre freni, sospensioni, impianto elettrico e airbag spettano all'officina; il libretto è il riferimento." },
      { t: "Work with the car stopped, on level ground, engine off and handbrake on, and wait if the engine is hot.", it: "Lavora con l'auto ferma, in piano, a motore spento e freno a mano inserito, e attendi se il motore è caldo." },
      { t: "Check the ⟦engine oil⟧ with the ⟦dipstick⟧, between MIN and MAX, and never open the radiator cap on a hot engine.", it: "Controlla l'olio motore con l'asta, tra MIN e MAX, e non aprire mai il tappo del radiatore a motore caldo." },
      { t: "Check ⟦tyre pressure⟧ when the tyres are cold, using the handbook values, not the maximum written on the sidewall.", it: "Controlla la pressione degli pneumatici a gomme fredde, con i valori del libretto, non il massimo scritto sul fianco." },
      { t: "The colour of a ⟦warning light⟧ shows urgency: red means stop safely, orange means workshop soon, green or blue is information.", it: "Il colore di una spia indica l'urgenza: rosso significa fermarsi in sicurezza, arancione officina presto, verde o blu è informazione." },
      { t: "Never work under a car held only by a ⟦jack⟧: use stands, or take the car to a workshop.", it: "Non lavorare mai sotto un'auto sostenuta solo da un cric: usa cavalletti, oppure porta l'auto in officina." }
    ],
    gloss: [
      { w: "handbook", it: "libretto di uso e manutenzione" },
      { w: "engine oil", it: "olio motore" },
      { w: "tyre pressure", it: "pressione degli pneumatici" },
      { w: "warning light", it: "spia del cruscotto" },
      { w: "tread", it: "battistrada" },
      { w: "battery", it: "batteria" },
      { w: "jack", it: "cric" },
      { w: "coolant", it: "liquido refrigerante" },
      { w: "dipstick", it: "asta dell'olio" },
      { w: "workshop", it: "officina" }
    ]
  });
  A("cul-guida-sicura", {
    title: { t: "Safe driving", it: "Guida sicura" },
    sum: [
      { t: "The total ⟦stopping distance⟧ is the ⟦reaction distance⟧ plus the braking distance.", it: "Lo spazio totale di arresto è lo spazio di reazione più lo spazio di frenata." },
      { t: "Reaction takes about one second, during which the car keeps moving: at 90 km/h that is 25 metres.", it: "La reazione richiede circa un secondo, durante il quale l'auto continua ad avanzare: a 90 km/h sono 25 metri." },
      { t: "The ⟦braking distance⟧ is d = v² / (2a), so it grows with the square of speed: doubling speed quadruples it.", it: "Lo spazio di frenata è d = v² / (2a), quindi cresce con il quadrato della velocità: raddoppiando la velocità quadruplica." },
      { t: "Wet roads, snow and ice reduce ⟦grip⟧ and so lengthen the braking distance.", it: "Strada bagnata, neve e ghiaccio riducono l'aderenza e quindi allungano lo spazio di frenata." },
      { t: "The ⟦two-second rule⟧ gives a safe distance: use four seconds or more in rain, fog or snow.", it: "La regola dei due secondi dà una distanza di sicurezza: usa quattro secondi o più con pioggia, nebbia o neve." },
      { t: "In ⟦aquaplaning⟧, do not brake or steer sharply: ease off the accelerator and hold the wheel steady.", it: "In caso di aquaplaning non frenare né sterzare bruscamente: togli piano il piede dall'acceleratore e tieni il volante fermo." },
      { t: "Fatigue causes microsleeps, and the real remedy is to stop and rest; a phone in your hand is forbidden and very risky.", it: "La fatica provoca microsonni e il vero rimedio è fermarsi a riposare; il telefono in mano è vietato e rischiosissimo." }
    ],
    gloss: [
      { w: "stopping distance", it: "spazio di arresto" },
      { w: "braking distance", it: "spazio di frenata" },
      { w: "grip", it: "aderenza" },
      { w: "two-second rule", it: "regola dei due secondi" },
      { w: "aquaplaning", it: "aquaplaning" },
      { w: "reaction distance", it: "spazio di reazione" },
      { w: "microsleep", it: "microsonno" },
      { w: "fatigue", it: "fatica" },
      { w: "distraction", it: "distrazione" },
      { w: "safe distance", it: "distanza di sicurezza" }
    ]
  });
  A("cul-la-bicicletta", {
    title: { t: "The bicycle", it: "La bicicletta" },
    sum: [
      { t: "Knowing the parts, such as frame, fork, wheels, transmission, brakes and steering, helps describe a problem.", it: "Conoscere le parti, come telaio, forcella, ruote, trasmissione, freni e sterzo, aiuta a descrivere un problema." },
      { t: "The ⟦gear ratio⟧ is the number of chainring teeth divided by the sprocket teeth.", it: "Il rapporto di trasmissione è il numero di denti della corona diviso quello del pignone." },
      { t: "Speed equals ⟦cadence⟧ times gear ratio times wheel circumference, and short ratios are used for climbing.", it: "La velocità è la cadenza per il rapporto per la circonferenza della ruota, e i rapporti corti si usano in salita." },
      { t: "Before riding, do the quick «ABC» check: air, brakes and ⟦chain⟧.", it: "Prima di partire fai il controllo rapido «ABC»: aria, freni e catena." },
      { t: "Always wear a ⟦helmet⟧, and use a white light in front and a red one behind in the dark.", it: "Indossa sempre il casco e usa una luce bianca davanti e una rossa dietro al buio." },
      { t: "Never put lubricant on the ⟦brake pads⟧, rim or disc, because the brake would stop working.", it: "Non mettere mai lubrificante su pattini, cerchio o disco, perché il freno non frenerebbe più." },
      { t: "To change an ⟦inner tube⟧, use tyre levers, find the cause inside the tyre, and avoid pinching the new tube.", it: "Per cambiare una camera d'aria usa i levagomme, cerca la causa dentro il pneumatico ed evita di pizzicare la camera nuova." }
    ],
    gloss: [
      { w: "gear ratio", it: "rapporto di trasmissione" },
      { w: "cadence", it: "cadenza (giri di pedale al minuto)" },
      { w: "helmet", it: "casco" },
      { w: "inner tube", it: "camera d'aria" },
      { w: "chain", it: "catena" },
      { w: "brake pads", it: "pattini dei freni" },
      { w: "tyre levers", it: "levagomme" },
      { w: "circumference", it: "circonferenza" },
      { w: "chainring", it: "corona" },
      { w: "sprocket", it: "pignone" }
    ]
  });
  A("cul-orientamento-e-mappe", {
    title: { t: "Orientation and maps on a hike", it: "Orientamento e mappe in escursione" },
    sum: [
      { t: "A good map is the main tool even with a GPS, and its ⟦scale⟧ tells you how to convert centimetres into metres.", it: "Una buona carta è lo strumento principale anche con un GPS, e la sua scala ti dice come convertire centimetri in metri." },
      { t: "⟦Contour lines⟧ join points at the same height, and lines close together mean a steep ⟦slope⟧.", it: "Le curve di livello uniscono i punti alla stessa quota, e curve vicine indicano un pendio ripido." },
      { t: "Slope equals height difference divided by horizontal distance, times 100.", it: "La pendenza è il dislivello diviso la distanza orizzontale, per 100." },
      { t: "The ⟦compass⟧ needle points to magnetic north, and an ⟦azimuth⟧ is the angle measured clockwise from north.", it: "L'ago della bussola punta al nord magnetico, e un azimut è l'angolo misurato in senso orario dal nord." },
      { t: "⟦Naismith's rule⟧ estimates walking time: one hour per 5 km of distance plus one hour per 600 m of climb.", it: "La regola di Naismith stima il tempo di cammino: un'ora ogni 5 km di distanza più un'ora ogni 600 m di salita." },
      { t: "Plan an outing with a turn-back time, a weather forecast and an itinerary shared with a trusted person.", it: "Pianifica un'uscita con un orario limite di inversione, le previsioni meteo e l'itinerario comunicato a una persona fidata." },
      { t: "A phone does not replace map and compass; if unsure of your position, stop, orient the map, and call 112 if lost.", it: "Il telefono non sostituisce carta e bussola; se non sei sicuro della posizione, fermati, orienta la carta e chiama il 112 se non riesci a ritrovarti." }
    ],
    gloss: [
      { w: "scale", it: "scala (della carta)" },
      { w: "Contour lines", it: "curve di livello" },
      { w: "azimuth", it: "azimut" },
      { w: "Naismith's rule", it: "regola di Naismith" },
      { w: "compass", it: "bussola" },
      { w: "slope", it: "pendenza" },
      { w: "legend", it: "legenda" },
      { w: "GPS", it: "GPS" },
      { w: "turn-back time", it: "orario limite di inversione" },
      { w: "offline maps", it: "mappe offline" }
    ]
  });
  A("cul-meteo-e-sicurezza-in-montagna", {
    title: { t: "Weather and safety in the mountains", it: "Meteo e sicurezza in montagna" },
    sum: [
      { t: "In the mountains the weather changes faster than in the valley, and the consequences of an error are greater.", it: "In montagna il tempo cambia più in fretta che a valle e le conseguenze di un errore sono maggiori." },
      { t: "Three weather risks are ⟦thunderstorms⟧, ⟦hypothermia⟧ and reduced ⟦visibility⟧.", it: "Tre rischi legati al meteo sono i temporali, l'ipotermia e la visibilità ridotta." },
      { t: "Cumulus clouds growing vertically in late morning can become storm clouds, so bring your return forward.", it: "I cumuli che crescono in verticale nella tarda mattinata possono diventare nuvole da temporale, quindi anticipa il rientro." },
      { t: "Temperature falls about 6.5 °C every 1000 m, so prepare clothing for the highest altitude, not the start.", it: "La temperatura scende di circa 6,5 °C ogni 1000 m, quindi prepara l'abbigliamento sulla quota più alta, non su quella di partenza." },
      { t: "Dress in ⟦layers⟧: a base layer, an insulating layer and a waterproof shell, avoiding cotton.", it: "Vestiti a strati: uno strato a contatto con la pelle, uno isolante e un guscio impermeabile, evitando il cotone." },
      { t: "Decide before leaving when to ⟦turn back⟧, because turning back is not a failure.", it: "Decidi prima di partire quando tornare indietro, perché tornare indietro non è un fallimento." },
      { t: "In a storm, move away from ridges and isolated trees, and to call for ⟦rescue⟧, dial 112 and give your position.", it: "In un temporale allontanati da creste e alberi isolati e, per chiedere soccorso, chiama il 112 e dai la tua posizione." }
    ],
    gloss: [
      { w: "thunderstorms", it: "temporali" },
      { w: "layers", it: "strati (di abbigliamento)" },
      { w: "turn back", it: "tornare indietro" },
      { w: "hypothermia", it: "ipotermia" },
      { w: "visibility", it: "visibilità" },
      { w: "cumulonimbus", it: "cumulonembo" },
      { w: "lightning", it: "fulmini" },
      { w: "rescue", it: "soccorso" },
      { w: "itinerary", it: "itinerario" },
      { w: "waterproof shell", it: "guscio impermeabile" }
    ]
  });
  A("cul-campeggio-e-vita-allaperto", {
    title: { t: "Camping and life outdoors", it: "Campeggio e vita all'aperto" },
    sum: [
      { t: "First check where camping is allowed, because ⟦wild camping⟧ is often forbidden or regulated.", it: "Per prima cosa verifica dove il campeggio è permesso, perché il campeggio libero è spesso vietato o regolato." },
      { t: "Choose flat, dry ground away from stream beds, dead trees and slopes with rockfall.", it: "Scegli un terreno piano e asciutto, lontano da alvei di torrenti, alberi secchi e pendii con caduta massi." },
      { t: "When pitching a ⟦tent⟧, keep the vents open, and never cook inside it because of fire and ⟦carbon monoxide⟧.", it: "Montando la tenda, tieni aperti gli sfiati e non cucinare mai al suo interno, per il rischio di incendio e di monossido di carbonio." },
      { t: "Use a ⟦stove⟧ outdoors on a stable surface and never leave it unattended; open fires are often forbidden.", it: "Usa il fornello all'aperto su una superficie stabile e non lasciarlo mai incustodito; i fuochi liberi sono spesso vietati." },
      { t: "Water from streams may carry bacteria, viruses and protozoa, so ⟦filter⟧ it and then treat it; boiling is the safest method.", it: "L'acqua dei ruscelli può contenere batteri, virus e protozoi, quindi filtrala e poi trattala; bollire è il metodo più sicuro." },
      { t: "Wash hands with soap for at least 20 seconds, and dig a hole far from water if there are no toilets.", it: "Lava le mani con il sapone per almeno 20 secondi e, se non ci sono servizi, scava una buca lontano dall'acqua." },
      { t: "The ⟦Leave No Trace⟧ principles mean taking your rubbish away, leaving what you find and respecting wildlife.", it: "I principi del «Leave No Trace» significano portare via i rifiuti, lasciare ciò che si trova e rispettare la fauna." }
    ],
    gloss: [
      { w: "carbon monoxide", it: "monossido di carbonio" },
      { w: "stove", it: "fornello" },
      { w: "Leave No Trace", it: "non lasciare traccia" },
      { w: "tent", it: "tenda" },
      { w: "wild camping", it: "campeggio libero" },
      { w: "filter", it: "filtro" },
      { w: "boiling", it: "bollitura" },
      { w: "campfire", it: "fuoco libero" },
      { w: "stakes", it: "picchetti" },
      { w: "protozoa", it: "protozoi" }
    ]
  });
  A("cul-nodi-e-cordame", {
    title: { t: "Knots and ropes", it: "Nodi e cordame" },
    sum: [
      { t: "A rope has synthetic or natural fibres, and a good knot is easy to tie, holds the load and unties easily.", it: "Una cima ha fibre sintetiche o naturali, e un buon nodo è facile da fare, tiene il carico e si scioglie facilmente." },
      { t: "Every knot reduces the strength of a rope, often by a third or more.", it: "Ogni nodo riduce la resistenza della cima, spesso di un terzo o più." },
      { t: "A ⟦stopper knot⟧, like the ⟦figure-eight⟧, makes a thickening at the end so the rope cannot slip out of a ring.", it: "Un nodo di bloccaggio, come il savoia, forma un ingrossamento all'estremità perché la cima non si sfili da un anello." },
      { t: "The ⟦reef knot⟧ joins two ropes of equal diameter and material; if not symmetric, it is a granny knot that slips.", it: "Il nodo piano unisce due cime di uguale diametro e materiale; se non è simmetrico, è un nodo falso che scivola." },
      { t: "The ⟦bowline⟧ forms a ⟦loop⟧ that does not slide and unties easily, but it may loosen under varying loads.", it: "La gassa d'amante forma un occhio che non scorre e si scioglie facilmente, ma può allentarsi con carichi variabili." },
      { t: "The ⟦clove hitch⟧ and the round turn with two half hitches fix a rope to a pole.", it: "Il nodo parlato e il nodo da barcaiolo fissano una cima a un palo." },
      { t: "This lesson is for domestic, camping and boat uses, not for climbing or lifting people, which need training and certified equipment.", it: "Questa lezione riguarda usi domestici, da campeggio e da barca, non l'arrampicata né il sollevamento di persone, che richiedono formazione e attrezzature certificate." }
    ],
    gloss: [
      { w: "stopper knot", it: "nodo di bloccaggio" },
      { w: "reef knot", it: "nodo piano" },
      { w: "bowline", it: "gassa d'amante" },
      { w: "clove hitch", it: "nodo parlato" },
      { w: "figure-eight", it: "nodo savoia (a otto)" },
      { w: "half hitch", it: "mezzo collo" },
      { w: "loop", it: "occhio (cappio)" },
      { w: "rope", it: "cima, corda" },
      { w: "breaking load", it: "carico di rottura" },
      { w: "tail", it: "coda (estremità libera)" }
    ]
  });
  A("cul-cucito-e-riparazioni", {
    title: { t: "Sewing and textile repairs", it: "Cucito e riparazioni tessili" },
    sum: [
      { t: "A higher ⟦needle⟧ number means a thinner needle, and the thread colour should be slightly darker than the fabric.", it: "Un numero più alto dell'ago indica un ago più sottile, e il colore del filo va scelto leggermente più scuro del tessuto." },
      { t: "Needles and pins prick and scissors cut, so work in good light, count your needles and keep sharp objects from children.", it: "Aghi e spilli pungono e le forbici tagliano, quindi lavora con buona luce, conta gli aghi e tieni gli oggetti taglienti lontani dai bambini." },
      { t: "Cut the thread about as long as from your fingertips to your shoulder, and end it with a secure knot.", it: "Taglia il filo lungo circa quanto dalla punta delle dita alla spalla e chiudilo con un nodo sicuro." },
      { t: "The ⟦backstitch⟧ is solid and similar to machine sewing, while the ⟦slip stitch⟧ is almost invisible and is used for hems.", it: "Il punto indietro è solido e simile alla cucitura a macchina, mentre il punto scorto è quasi invisibile e si usa per gli orli." },
      { t: "A button needs a ⟦shank⟧, a little space made with thread, so that it does not pull on the fabric.", it: "Un bottone ha bisogno di un gambo, un po' di spazio fatto col filo, perché non tiri sul tessuto." },
      { t: "For a ⟦hem⟧, measure on the wearer and add the fold height; ⟦darning⟧ rebuilds a weave over a hole.", it: "Per un orlo, misura su chi indossa il capo e aggiungi l'altezza della piega; il rammendo ricostruisce una trama su un buco." },
      { t: "For stains, act quickly, dab from the outside toward the centre without rubbing, and never mix bleach with ammonia or acids.", it: "Per le macchie, agisci subito, tampona dall'esterno verso il centro senza strofinare, e non mescolare mai candeggina con ammoniaca o acidi." }
    ],
    gloss: [
      { w: "needle", it: "ago" },
      { w: "backstitch", it: "punto indietro" },
      { w: "shank", it: "gambo (del bottone)" },
      { w: "hem", it: "orlo" },
      { w: "darning", it: "rammendo" },
      { w: "slip stitch", it: "punto scorto" },
      { w: "thread", it: "filo" },
      { w: "button", it: "bottone" },
      { w: "stain", it: "macchia" },
      { w: "bleach", it: "candeggina" }
    ]
  });
  A("cul-giardinaggio-e-orto", {
    title: { t: "Gardening and vegetable growing", it: "Giardinaggio e orto" },
    sum: [
      { t: "Plants live on ⟦soil⟧, light, water and air, and good soil is soft, well drained and rich in organic matter.", it: "Le piante vivono di suolo, luce, acqua e aria, e un buon terreno è soffice, ben drenato e ricco di sostanza organica." },
      { t: "Soil can be sandy, clayey or ⟦loam⟧, and loam is the most suitable.", it: "Il suolo può essere sabbioso, argilloso o franco, e il franco è il più adatto." },
      { t: "Fruiting vegetables need 6 to 8 hours of direct sun, and plants must respect planting distances.", it: "Gli ortaggi da frutto vogliono 6–8 ore di sole diretto, e le piante devono rispettare le distanze di semina." },
      { t: "Water at the base of the plants, less often but abundantly, and use ⟦mulch⟧ to reduce evaporation and weeds.", it: "Annaffia alla base delle piante, meno spesso ma abbondantemente, e usa il pacciame per ridurre evaporazione ed erbacce." },
      { t: "Follow an approximate calendar and ⟦transplant⟧ after the last frosts; ⟦crop rotation⟧ means not repeating a plant family in the same place.", it: "Segui un calendario orientativo e trapianta dopo le ultime gelate; la rotazione consiste nel non ripetere una famiglia di piante nello stesso posto." },
      { t: "⟦Compost⟧ comes from greens and browns, about two parts brown to one part green, kept as moist as a wrung-out sponge.", it: "Il compost nasce da verdi e marroni, circa 2 parti di marroni per 1 di verdi, mantenuto umido come una spugna strizzata." },
      { t: "Prevention comes first against pests, then removal by hand; even «natural» products can be toxic, so read the label.", it: "Contro i parassiti viene prima la prevenzione, poi la rimozione a mano; anche i prodotti «naturali» possono essere tossici, quindi leggi l'etichetta." }
    ],
    gloss: [
      { w: "loam", it: "terreno franco" },
      { w: "mulch", it: "pacciame" },
      { w: "crop rotation", it: "rotazione delle colture" },
      { w: "Compost", it: "compost" },
      { w: "soil", it: "suolo, terreno" },
      { w: "transplant", it: "trapiantare" },
      { w: "pests", it: "parassiti" },
      { w: "sowing", it: "semina" },
      { w: "aphids", it: "afidi" },
      { w: "frost", it: "gelata" }
    ]
  });
  A("cul-imparare-una-abilita-manuale", {
    title: { t: "Learning a new manual skill", it: "Imparare una nuova abilità manuale" },
    sum: [
      { t: "A manual skill is learned in three phases: cognitive, associative and autonomous.", it: "Un'abilità manuale si impara in tre fasi: cognitiva, associativa e autonoma." },
      { t: "Progress is not linear, and the quality of practice matters more than the hours.", it: "Il progresso non è lineare, e la qualità della pratica conta più delle ore." },
      { t: "⟦Deliberate practice⟧ has a specific, measurable goal, full attention, immediate feedback and a difficulty just above your current level.", it: "La pratica deliberata ha un obiettivo specifico e misurabile, attenzione piena, feedback immediato e una difficoltà appena oltre il livello attuale." },
      { t: "Break a complex task into ⟦sub-skills⟧, train the difficult ones first and slowly, and remember: first right, then fast.", it: "Scomponi un compito complesso in sotto-abilità, allena prima le difficili e lentamente, e ricorda: prima giusto, poi veloce." },
      { t: "Use ⟦feedback⟧ from a teacher, a model, a recording or objective measures, and correct one aspect at a time.", it: "Usa il feedback di un maestro, di un modello, di una registrazione o di misure oggettive, e correggi un aspetto alla volta." },
      { t: "Errors are information, but some hurt: protections are part of the skill, and never rush or improvise with fire, fuel or electricity.", it: "Gli errori sono informazione, ma alcuni fanno male: le protezioni fanno parte dell'abilità, e non bisogna mai avere fretta né improvvisare con fuoco, carburanti o elettricità." },
      { t: "A practice ⟦journal⟧ turns experience into learning, and the Dreyfus model describes five levels from ⟦novice⟧ to ⟦expert⟧.", it: "Un diario degli esercizi trasforma l'esperienza in apprendimento, e il modello di Dreyfus descrive cinque livelli, da novizio a esperto." }
    ],
    gloss: [
      { w: "Deliberate practice", it: "pratica deliberata" },
      { w: "sub-skills", it: "sotto-abilità" },
      { w: "feedback", it: "feedback (riscontro)" },
      { w: "journal", it: "diario" },
      { w: "plateau", it: "plateau (fase senza progressi evidenti)" },
      { w: "novice", it: "novizio" },
      { w: "expert", it: "esperto" },
      { w: "autonomous phase", it: "fase autonoma" },
      { w: "supervision", it: "supervisione" },
      { w: "goal", it: "obiettivo" }
    ]
  });
})(window.ST = window.ST || {});
