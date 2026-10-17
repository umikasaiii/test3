(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A("mnt-memoria-come-funziona", {
    title: { t: "How memory works (and how to study better)", it: "Come funziona la memoria (e come studiare meglio)" },
    sum: [
      { t: "Memory is not a camera: it works in three stages, ⟦encoding⟧, ⟦storage⟧ and ⟦retrieval⟧.", it: "La memoria non è una telecamera: funziona in tre fasi, codifica, immagazzinamento e recupero." },
      { t: "We forget quickly at first and then more slowly, as the ⟦forgetting curve⟧ shows.", it: "Si dimentica in fretta all’inizio e poi più lentamente, come mostra la curva dell’oblio." },
      { t: "With the ⟦spacing effect⟧, reviewing in several separate sessions beats one session of the same total length.", it: "Con l’effetto di distanziamento, ripassare in più sessioni separate funziona meglio di una sola della stessa durata totale." },
      { t: "A reasonable plan is to review after a day, then after a few days, then after a week.", it: "Uno schema ragionevole è ripassare dopo un giorno, poi dopo qualche giorno, poi dopo una settimana." },
      { t: "⟦Active recall⟧, also called the testing effect, strengthens memory more than rereading, especially when followed by correction.", it: "Il richiamo attivo, detto anche effetto del test, rafforza la memoria più della rilettura, soprattutto se seguito dalla correzione." },
      { t: "Rereading creates an ⟦illusion of fluency⟧: recognising a text is not the same as remembering it.", it: "Rileggere crea l’illusione di fluidità: riconoscere un testo non è come ricordarlo." },
      { t: "⟦Interleaving⟧ alternates problem types; it is harder, but it usually improves your choice of the right method.", it: "L’interleaving alterna tipi di problema; è più faticoso, ma di solito migliora la scelta del metodo giusto." }
    ],
    gloss: [
      { w: "encoding", it: "codifica: trasformare ciò che percepisci in traccia" },
      { w: "storage", it: "immagazzinamento della traccia nel tempo" },
      { w: "retrieval", it: "recupero del ricordo quando serve" },
      { w: "forgetting curve", it: "curva dell’oblio" },
      { w: "spacing effect", it: "effetto di distanziamento" },
      { w: "Active recall", it: "richiamo attivo (effetto del test)" },
      { w: "illusion of fluency", it: "illusione di fluidità" },
      { w: "Interleaving", it: "alternare tipi di problema o argomenti" },
      { w: "review", it: "ripasso" }
    ]
  });
  A("mnt-chunking-e-numeri", {
    title: { t: "Chunking and remembering numbers (phonetic system)", it: "Chunking e memoria dei numeri (sistema fonetico)" },
    sum: [
      { t: "⟦Working memory⟧ holds few items for a few seconds, and the limit concerns ⟦chunks⟧, not single digits.", it: "La memoria di lavoro tiene poche informazioni per pochi secondi, e il limite riguarda i blocchi, non le cifre singole." },
      { t: "Studies suggest about 3-5 chunks, although the exact number is debated.", it: "Gli studi suggeriscono circa 3-5 blocchi, anche se il numero esatto è discusso." },
      { t: "⟦Chunking⟧ joins several items into one meaningful unit: 12 digits become three well-known dates.", it: "Il chunking unisce più elementi in un’unità con significato: 12 cifre diventano tre date note." },
      { t: "It does not increase capacity; it uses the capacity you have better.", it: "Non aumenta la capacità; usa meglio quella che hai." },
      { t: "In the ⟦phonetic system⟧ each digit stands for a consonant sound, and ⟦vowels⟧ do not count.", it: "Nel sistema fonetico ogni cifra corrisponde a un suono consonantico, e le vocali non contano." },
      { t: "What counts is the sound, not the letter: “gatto” is g-tt, which gives 71.", it: "Conta il suono, non la lettera: «gatto» è g-tt, cioè 71." },
      { t: "You turn the consonants into a ⟦concrete word⟧ and visualise it, but the system needs a few hours of practice.", it: "Trasformi le consonanti in una parola concreta e la visualizzi, ma il sistema richiede qualche ora di pratica." }
    ],
    gloss: [
      { w: "Working memory", it: "memoria di lavoro" },
      { w: "chunks", it: "blocchi di informazione" },
      { w: "Chunking", it: "raggruppare in unità con significato" },
      { w: "phonetic system", it: "sistema fonetico (major system)" },
      { w: "vowels", it: "vocali" },
      { w: "concrete word", it: "parola concreta, facile da immaginare" },
      { w: "digit", it: "cifra" },
      { w: "consonant", it: "consonante" },
      { w: "capacity", it: "capacità" }
    ]
  });
  A("mnt-palazzo-della-memoria", {
    title: { t: "The memory palace (method of loci)", it: "Il palazzo della memoria (metodo dei loci)" },
    sum: [
      { t: "The ⟦method of loci⟧, or ⟦memory palace⟧, links what you want to remember to well-known places in a fixed order.", it: "Il metodo dei loci, o palazzo della memoria, associa ciò che vuoi ricordare a luoghi ben noti in un ordine fisso." },
      { t: "To recall, you mentally walk the ⟦route⟧ and look at what you left at each point.", it: "Per richiamare, cammini mentalmente il percorso e guardi cosa hai lasciato in ogni punto." },
      { t: "It works because it uses strong ⟦spatial memory⟧ and gives you a ready-made order and a cue for each item.", it: "Funziona perché usa la forte memoria spaziale e ti dà un ordine già pronto e un indizio per ogni elemento." },
      { t: "Choose a route you know well, with distinct ⟦loci⟧ in a fixed order, and start with 10.", it: "Scegli un percorso che conosci bene, con loci distinti in ordine fisso, e inizia con 10." },
      { t: "Turn each item into a ⟦vivid image⟧: specific, in action, unusual or exaggerated, using several senses.", it: "Trasforma ogni elemento in un’immagine vivida: specifica, in azione, insolita o esagerata, con più sensi." },
      { t: "To recall, restart from locus 1 and go in order, then review after a few hours and the next day.", it: "Per richiamare, riparti dal locus 1 in ordine, poi ripassa dopo qualche ora e il giorno dopo." },
      { t: "It is very effective for ⟦ordered lists⟧, but it does not train memory in general: it improves that task, not everyday memory.", it: "È molto efficace per le liste ordinate, ma non allena la memoria in generale: migliora quel compito, non la memoria di tutti i giorni." }
    ],
    gloss: [
      { w: "method of loci", it: "metodo dei loci" },
      { w: "memory palace", it: "palazzo della memoria" },
      { w: "route", it: "percorso" },
      { w: "spatial memory", it: "memoria spaziale" },
      { w: "loci", it: "luoghi (punti del percorso)" },
      { w: "vivid image", it: "immagine vivida" },
      { w: "ordered lists", it: "liste ordinate" },
      { w: "locus", it: "singolo punto del percorso" },
      { w: "cue", it: "indizio di recupero" }
    ]
  });
  A("mnt-nomi-e-liste", {
    title: { t: "Remembering names, faces and lists", it: "Ricordare nomi, volti e liste" },
    sum: [
      { t: "A name is an ⟦arbitrary label⟧ with no link to the face, and often the real problem is attention.", it: "Un nome è un’etichetta arbitraria senza legami con il volto, e spesso il vero problema è l’attenzione." },
      { t: "To encode better, listen carefully, repeat the name at once and link it to something you know.", it: "Per codificare meglio, ascolta davvero, ripeti subito il nome e collegalo a qualcosa che già conosci." },
      { t: "Turn the name into a concrete image, pick a distinctive ⟦facial feature⟧ and join them in a vivid scene.", it: "Trasforma il nome in un’immagine concreta, scegli un tratto del volto distintivo e uniscili in una scena vivida." },
      { t: "In the ⟦link method⟧ each item is joined to the next by a scene, but a lost link breaks the chain.", it: "Nel metodo dei collegamenti ogni elemento è unito al successivo da una scena, ma un anello perso spezza la catena." },
      { t: "In the ⟦story method⟧ you invent a story with the items in list order; keep it short, 10-12 items.", it: "Nel metodo della storia inventi una storia con gli elementi nell’ordine della lista; tienila breve, 10-12 elementi." },
      { t: "The ⟦peg system⟧ uses fixed hooks, one per number, so you can recall item number 7 directly.", it: "Il sistema dei pioli usa ganci fissi, uno per numero, quindi puoi richiamare direttamente l’elemento numero 7." },
      { t: "All these methods share meaning, concrete images and ⟦review⟧, but you will not remember every name in a full room.", it: "Tutti questi metodi condividono significato, immagini concrete e ripasso, ma non ricorderai tutti i nomi di una sala piena." }
    ],
    gloss: [
      { w: "arbitrary label", it: "etichetta arbitraria, senza legame col volto" },
      { w: "facial feature", it: "tratto del volto" },
      { w: "link method", it: "metodo dei collegamenti (catena)" },
      { w: "story method", it: "metodo della storia" },
      { w: "peg system", it: "sistema dei pioli" },
      { w: "review", it: "ripasso" },
      { w: "hooks", it: "ganci (pioli) fissi" },
      { w: "attention", it: "attenzione" },
      { w: "chain", it: "catena di immagini" }
    ]
  });
  A("mnt-concentrazione-e-attenzione", {
    title: { t: "Concentration and attention", it: "Concentrazione e attenzione" },
    sum: [
      { t: "⟦Attention⟧ is selective and limited: the ⟦cocktail party effect⟧ shows filtering, while ⟦inattentional blindness⟧ shows what we miss.", it: "L’attenzione è selettiva e limitata: l’effetto cocktail party mostra il filtraggio, la cecità attentiva mostra ciò che ci sfugge." },
      { t: "What you do not attend to is not well encoded, so attention is the first step of memory.", it: "Ciò a cui non presti attenzione non viene codificato bene, quindi l’attenzione è il primo passo della memoria." },
      { t: "⟦Cognitive load⟧ can be intrinsic, extraneous or useful, and the method is to reduce the ⟦extraneous load⟧.", it: "Il carico cognitivo può essere intrinseco, estraneo o utile, e il metodo è ridurre il carico estraneo." },
      { t: "Doing two tasks “together” means switching quickly, and each switch has a ⟦switch cost⟧: slower work and more errors.", it: "Fare due compiti «insieme» significa passare rapidamente dall’uno all’altro, e ogni passaggio ha un costo di commutazione: più lentezza e più errori." },
      { t: "The data show a performance cost, not permanent damage, so the rule is one task at a time.", it: "I dati mostrano un costo di prestazione, non danni permanenti, quindi la regola è un compito per volta." },
      { t: "An interruption makes you reload the context and can take several minutes to recover from, so put the phone in another room.", it: "Un’interruzione ti costringe a ricaricare il contesto e può richiedere diversi minuti per riprendere, quindi metti il telefono in un’altra stanza." },
      { t: "Study in blocks of 25-50 minutes with short ⟦breaks⟧ of 5-10 minutes; these are conventions, not laws.", it: "Studia in blocchi di 25-50 minuti con pause brevi di 5-10 minuti; sono convenzioni, non leggi." }
    ],
    gloss: [
      { w: "Attention", it: "attenzione" },
      { w: "cocktail party effect", it: "sentire il proprio nome in una stanza rumorosa" },
      { w: "inattentional blindness", it: "cecità attentiva" },
      { w: "Cognitive load", it: "carico cognitivo" },
      { w: "extraneous load", it: "carico estraneo, sforzo inutile" },
      { w: "switch cost", it: "costo di commutazione tra compiti" },
      { w: "breaks", it: "pause" },
      { w: "working memory", it: "memoria di lavoro" },
      { w: "interruption", it: "interruzione" }
    ]
  });
  A("mnt-sonno-esercizio-e-limiti", {
    title: { t: "Sleep, exercise, stress and the limits of mental training", it: "Sonno, esercizio, stress e limiti dell’allenamento mentale" },
    sum: [
      { t: "During sleep the brain reactivates memory traces, and ⟦consolidation⟧ makes a memory more stable.", it: "Durante il sonno il cervello riattiva le tracce di memoria, e il consolidamento rende un ricordo più stabile." },
      { t: "Sleep consolidates what you studied awake: you cannot learn a language by sleeping with headphones.", it: "Il sonno consolida ciò che hai studiato da sveglio: non si impara una lingua dormendo con le cuffie." },
      { t: "Many adults do better with about 7-9 hours of ⟦sleep⟧, but individual needs vary and this is not medical advice.", it: "Molti adulti stanno meglio con circa 7-9 ore di sonno, ma il bisogno individuale varia e non è un consiglio medico." },
      { t: "Regular ⟦aerobic exercise⟧ goes with small gains in attention, but effects are modest and results not always consistent.", it: "L’esercizio aerobico regolare si accompagna a piccoli miglioramenti nell’attenzione, ma gli effetti sono modesti e i risultati non sempre concordi." },
      { t: "Intense or prolonged ⟦stress⟧ tends to worsen attention and recall; planning ahead and timed practice can help.", it: "Lo stress intenso o prolungato tende a peggiorare attenzione e richiamo; pianificare con anticipo e fare prove a tempo può aiutare." },
      { t: "⟦Near transfer⟧ to very similar tasks is well documented, while evidence for ⟦far transfer⟧ from ⟦brain training⟧ is weak.", it: "Il trasferimento vicino a compiti molto simili è ben documentato, mentre le prove di trasferimento lontano dal brain training sono deboli." },
      { t: "The exercises here can teach ⟦strategies⟧ and practice, but they cannot raise general intelligence or replace sleep, movement or professional help.", it: "Gli esercizi qui possono insegnare strategie e dare pratica, ma non possono aumentare l’intelligenza in generale né sostituire sonno, movimento o aiuto professionale." }
    ],
    gloss: [
      { w: "consolidation", it: "processo che rende un ricordo più stabile" },
      { w: "sleep", it: "sonno" },
      { w: "aerobic exercise", it: "esercizio aerobico" },
      { w: "stress", it: "stress" },
      { w: "Near transfer", it: "trasferimento vicino (compiti simili)" },
      { w: "far transfer", it: "trasferimento lontano (compiti diversi)" },
      { w: "brain training", it: "giochi di allenamento cerebrale" },
      { w: "strategies", it: "strategie apprese consapevolmente" },
      { w: "executive functions", it: "funzioni esecutive" }
    ]
  });
  A("mnt-calcolo-trucchi-1", {
    title: { t: "Mental arithmetic: breaking up, compensating, multiplying", it: "Calcolo mentale: scomporre, compensare, moltiplicare" },
    sum: [
      { t: "Break numbers into pieces, working left to right and keeping one ⟦partial result⟧: 47 + 38 = 77 + 8 = 85.", it: "Spezza i numeri in pezzi, lavorando da sinistra a destra e tenendo in mente un solo risultato parziale: 47 + 38 = 77 + 8 = 85." },
      { t: "With ⟦compensation⟧ you round a nearly round number, then correct: 396 + 247 = 400 + 247 − 4 = 643.", it: "Con la compensazione arrotondi un numero quasi tondo, poi correggi: 396 + 247 = 400 + 247 − 4 = 643." },
      { t: "To ⟦multiply by 5⟧ multiply by 10 and halve; to ⟦multiply by 9⟧ multiply by 10 and subtract the number.", it: "Per moltiplicare per 5 moltiplica per 10 e dimezza; per moltiplicare per 9 moltiplica per 10 e sottrai il numero." },
      { t: "To ⟦multiply by 11⟧ keep the end digits and put their sum between them: 34 × 11 = 374.", it: "Per moltiplicare per 11 tieni le cifre agli estremi e metti in mezzo la loro somma: 34 × 11 = 374." },
      { t: "To ⟦multiply by 25⟧ multiply by 100 and divide by 4: 36 × 25 = 3600 : 4 = 900.", it: "Per moltiplicare per 25 moltiplica per 100 e dividi per 4: 36 × 25 = 3600 : 4 = 900." },
      { t: "For ⟦squares ending in 5⟧, write n × (n + 1), then 25: 35² is 3 × 4 = 12, so 1225.", it: "Per i quadrati dei numeri che finiscono per 5 scrivi n × (n + 1) seguito da 25: 35² è 3 × 4 = 12, quindi 1225." },
      { t: "⟦Difference of squares⟧ gives (a + b)(a − b) = a² − b²: 52 × 48 = 2500 − 4 = 2496.", it: "La differenza di quadrati dà (a + b)(a − b) = a² − b²: 52 × 48 = 2500 − 4 = 2496." }
    ],
    gloss: [
      { w: "partial result", it: "risultato parziale" },
      { w: "compensation", it: "arrotondare e correggere la differenza" },
      { w: "multiply by 5", it: "moltiplicare per 5: ×10 e dimezza" },
      { w: "multiply by 9", it: "moltiplicare per 9: ×10 meno il numero" },
      { w: "multiply by 11", it: "moltiplicare per 11: somma al centro" },
      { w: "multiply by 25", it: "moltiplicare per 25: ×100 diviso 4" },
      { w: "squares ending in 5", it: "quadrati di numeri che finiscono per 5" },
      { w: "difference of squares", it: "differenza di quadrati" },
      { w: "round number", it: "numero tondo" }
    ]
  });
  A("mnt-calcolo-trucchi-2", {
    title: { t: "Percentages, fractions, divisibility and casting out nines", it: "Percentuali, frazioni, divisibilità e prova del nove" },
    sum: [
      { t: "⟦Percent⟧ means “out of a hundred”, and 10% (divide by 10) and 1% (divide by 100) are the ⟦building blocks⟧.", it: "Percento significa «su cento», e il 10% (dividi per 10) e l’1% (dividi per 100) sono i mattoni." },
      { t: "Other percentages are composed from them: 5% is half of 10%, so 15% of 340 is 34 + 17 = 51.", it: "Le altre percentuali si compongono da questi: il 5% è metà del 10%, quindi il 15% di 340 è 34 + 17 = 51." },
      { t: "A 20% rise multiplies by 1.2 and a 20% fall by 0.8, and they do not cancel: 100 becomes 120, then 96.", it: "Un aumento del 20% moltiplica per 1,2 e una riduzione del 20% per 0,8, e non si annullano: 100 diventa 120, poi 96." },
      { t: "A ⟦percentage change⟧ is (new − old) : old, so 80 to 100 is +25%, but 100 to 80 is −20%.", it: "Una variazione percentuale è (nuovo − vecchio) : vecchio, quindi da 80 a 100 è +25%, ma da 100 a 80 è −20%." },
      { t: "Learn a few ⟦fraction⟧ conversions by heart: 1/4 = 0.25 = 25%, 1/5 = 0.2 = 20% and 3/4 = 0.75.", it: "Impara a memoria alcune conversioni di frazioni: 1/4 = 0,25 = 25%, 1/5 = 0,2 = 20% e 3/4 = 0,75." },
      { t: "⟦Divisibility rules⟧ help: a number is divisible by 9 if its ⟦digit sum⟧ is, and 1728 has digit sum 18.", it: "I criteri di divisibilità aiutano: un numero è divisibile per 9 se lo è la somma delle sue cifre, e 1728 ha somma delle cifre 18." },
      { t: "⟦Casting out nines⟧ checks a result with digit sums, but it misses swapped digits, so a match means only “probably right”.", it: "La prova del nove controlla un risultato con le somme delle cifre, ma non vede lo scambio di cifre, quindi «torna» significa solo «probabilmente giusto»." }
    ],
    gloss: [
      { w: "Percent", it: "per cento, «su cento»" },
      { w: "building blocks", it: "mattoni: 10% e 1%" },
      { w: "percentage change", it: "variazione percentuale" },
      { w: "fraction", it: "frazione" },
      { w: "Divisibility rules", it: "criteri di divisibilità" },
      { w: "Casting out nines", it: "prova del nove" },
      { w: "digit sum", it: "somma delle cifre" },
      { w: "digital root", it: "radice digitale (una sola cifra)" },
      { w: "increase", it: "aumento" }
    ]
  });
  A("mnt-stima-fermi", {
    title: { t: "Estimation, orders of magnitude and Fermi problems", it: "Stima, ordini di grandezza e problemi di Fermi" },
    sum: [
      { t: "⟦Estimation⟧ means calculating well enough, fast: round to convenient numbers and ⟦balance the errors⟧ by rounding one factor up, the other down.", it: "Stimare significa calcolare abbastanza bene, in fretta: arrotonda a numeri comodi e bilancia gli errori arrotondando un fattore per eccesso, l’altro per difetto." },
      { t: "The ⟦order of magnitude⟧ is the nearest power of 10, and products add exponents while ratios subtract them.", it: "L’ordine di grandezza è la potenza di 10 più vicina, e nei prodotti si sommano gli esponenti mentre nei rapporti si sottraggono." },
      { t: "Useful reference values are a world population of about 8 billion and a day of 86 400 seconds.", it: "Valori di riferimento utili sono una popolazione mondiale di circa 8 miliardi e un giorno di 86 400 secondi." },
      { t: "A ⟦Fermi problem⟧ takes an apparently impossible “how many…?” question and splits it into simple estimates.", it: "Un problema di Fermi prende una domanda apparentemente impossibile («quanti…?») e la scompone in stime semplici." },
      { t: "The five steps are to define, break down, estimate each factor with a round number, multiply, and check plausibility.", it: "I cinque passi sono definire, scomporre, stimare ogni fattore con un numero tondo, moltiplicare e verificare la plausibilità." },
      { t: "Example: at 70 beats a minute, a heart makes about 3 billion beats in 80 years.", it: "Esempio: a 70 battiti al minuto, un cuore fa circa 3 miliardi di battiti in 80 anni." },
      { t: "Errors tend to compensate, so give ⟦bounds⟧, solve the problem two ways and always write the ⟦units⟧.", it: "Gli errori tendono a compensarsi, quindi indica dei limiti, risolvi il problema in due modi e scrivi sempre le unità di misura." }
    ],
    gloss: [
      { w: "Estimation", it: "stima" },
      { w: "balance the errors", it: "bilanciare gli errori di arrotondamento" },
      { w: "order of magnitude", it: "ordine di grandezza" },
      { w: "power of 10", it: "potenza di 10" },
      { w: "Fermi problem", it: "problema di Fermi" },
      { w: "bounds", it: "limiti (minimo e massimo sicuri)" },
      { w: "units", it: "unità di misura" },
      { w: "plausibility", it: "plausibilità" },
      { w: "round number", it: "numero tondo" }
    ]
  });
  A("mnt-logica-sillogismi", {
    title: { t: "Syllogisms: validity, Euler circles and typical errors", it: "Sillogismi: validità, cerchi di Eulero e errori tipici" },
    sum: [
      { t: "A ⟦syllogism⟧ has two ⟦premises⟧ and a conclusion, and the ⟦middle term⟧ appears in the premises but never in the conclusion.", it: "Un sillogismo ha due premesse e una conclusione, e il termine medio compare nelle premesse ma mai nella conclusione." },
      { t: "⟦Validity⟧ concerns only structure, and a ⟦sound⟧ argument needs a valid structure and true premises.", it: "La validità riguarda solo la struttura, e un ragionamento solido richiede una struttura valida e premesse vere." },
      { t: "⟦Belief bias⟧ makes us accept plausible conclusions whatever the structure, so ignore plausibility and draw the sets.", it: "Il pregiudizio di credenza ci fa accettare conclusioni plausibili a prescindere dalla struttura, quindi ignora la plausibilità e disegna gli insiemi." },
      { t: "Statements come in four types, A, E, I and O, and “some” means at least one.", it: "Gli enunciati sono di quattro tipi, A, E, I e O, e «alcuni» vuol dire almeno uno." },
      { t: "With ⟦Euler circles⟧ you look for a ⟦counterexample⟧: a drawing where the premises hold but the conclusion fails.", it: "Con i cerchi di Eulero cerchi un controesempio: un disegno in cui le premesse valgono ma la conclusione no." },
      { t: "⟦Barbara⟧ is a classic valid form: all M are P, all S are M, so all S are P.", it: "Barbara è una forma valida classica: tutti gli M sono P, tutti gli S sono M, dunque tutti gli S sono P." },
      { t: "Common errors: the ⟦undistributed middle⟧, two negative premises, two particular premises, and converting “all S are P” into “all P are S”.", it: "Errori comuni: il medio non distribuito, due premesse negative, due premesse particolari e la conversione di «tutti gli S sono P» in «tutti i P sono S»." }
    ],
    gloss: [
      { w: "syllogism", it: "sillogismo" },
      { w: "premises", it: "premesse" },
      { w: "middle term", it: "termine medio (il ponte)" },
      { w: "Validity", it: "validità: dipende solo dalla struttura" },
      { w: "sound", it: "solido: struttura valida e premesse vere" },
      { w: "Belief bias", it: "pregiudizio di credenza" },
      { w: "Euler circles", it: "cerchi di Eulero" },
      { w: "counterexample", it: "controesempio" },
      { w: "Barbara", it: "forma valida: tutti, tutti, dunque tutti" },
      { w: "undistributed middle", it: "medio non distribuito" }
    ]
  });
  A("mnt-ragionamento-condizionale", {
    title: { t: "Conditional reasoning: if–then, Wason and negation", it: "Ragionamento condizionale: se–allora, Wason e negazione" },
    sum: [
      { t: "In “if P then Q”, P is the ⟦antecedent⟧ and Q the ⟦consequent⟧; it fails only when P is true, Q false.", it: "In «se P allora Q», P è l’antecedente e Q il conseguente; fallisce solo quando P è vero e Q falso." },
      { t: "⟦Modus ponens⟧ affirms the antecedent to conclude Q, while ⟦modus tollens⟧ denies the consequent to conclude not P.", it: "Il modus ponens afferma l’antecedente per concludere Q, il modus tollens nega il conseguente per concludere non P." },
      { t: "The ⟦contrapositive⟧, “if not Q then not P”, is always equivalent to the original statement.", it: "La contrapposta, «se non Q allora non P», è sempre equivalente all’enunciato originale." },
      { t: "⟦Affirming the consequent⟧ and denying the antecedent are not valid, and the converse is not equivalent to the original.", it: "L’affermazione del conseguente e la negazione dell’antecedente non sono valide, e la conversa non è equivalente all’originale." },
      { t: "P is ⟦sufficient⟧ for Q and Q is ⟦necessary⟧ for P, and “P only if Q” means P implies Q.", it: "P è sufficiente per Q e Q è necessario per P, e «P solo se Q» significa che P implica Q." },
      { t: "In the ⟦Wason selection task⟧ with cards E, K, 4 and 7, turn E and 7; many people choose E and 4.", it: "Nel compito di selezione di Wason con le carte E, K, 4 e 7 bisogna girare E e 7; molti scelgono E e 4." },
      { t: "The ⟦negation⟧ of “if P then Q” is “P and not Q”; “all passed” is negated by “at least one did not”.", it: "La negazione di «se P allora Q» è «P e non Q»; «tutti hanno superato» si nega con «almeno uno non ha superato»." }
    ],
    gloss: [
      { w: "antecedent", it: "antecedente: la parte «se P»" },
      { w: "consequent", it: "conseguente: la parte «allora Q»" },
      { w: "Modus ponens", it: "affermo P, concludo Q" },
      { w: "modus tollens", it: "nego Q, concludo non P" },
      { w: "contrapositive", it: "contrapposta: se non Q allora non P" },
      { w: "Affirming the consequent", it: "fallacia: da Q concludere P" },
      { w: "sufficient", it: "sufficiente: basta per avere" },
      { w: "necessary", it: "necessario: senza non c’è" },
      { w: "Wason selection task", it: "compito di selezione delle carte di Wason" },
      { w: "negation", it: "negazione" }
    ]
  });
  A("mnt-bias-cognitivi-e-probabilita", {
    title: { t: "Cognitive biases and intuitive probability", it: "Bias cognitivi e probabilità intuitiva" },
    sum: [
      { t: "With ⟦base rate neglect⟧, a test for a rare disease can be accurate and a positive result still mean a low probability.", it: "Con la trascuratezza del tasso base, un test per una malattia rara può essere affidabile e un risultato positivo indicare comunque una bassa probabilità." },
      { t: "Use ⟦natural frequencies⟧: of 1000 people, 10 are ill and 9 test positive, while 99 of the 990 healthy also test positive.", it: "Usa le frequenze naturali: su 1000 persone, 10 sono malate e 9 risultano positive, mentre risultano positive anche 99 dei 990 sani." },
      { t: "So only 9 of 108 positives are ill, about 8%, because the ⟦base rate⟧ is low.", it: "Quindi solo 9 positivi su 108 sono malati, circa l’8%, perché il tasso base è basso." },
      { t: "The ⟦conjunction fallacy⟧: “A and B” cannot be more probable than A alone, so “cashier and feminist” cannot beat “cashier”.", it: "La fallacia della congiunzione: «A e B» non può essere più probabile di A da sola, quindi «cassiera e femminista» non può battere «cassiera»." },
      { t: "The ⟦gambler’s fallacy⟧: after five heads in a row, the next toss is still 1/2, because tosses are independent.", it: "L’errore del giocatore: dopo cinque teste di fila, il lancio successivo ha ancora probabilità 1/2, perché i lanci sono indipendenti." },
      { t: "⟦Confirmation bias⟧ makes us seek cases that agree with our idea, so look for a case that would refute it.", it: "Il pregiudizio di conferma ci fa cercare casi che concordano con la nostra idea, quindi cerca un caso che la smentirebbe." },
      { t: "The ⟦cognitive reflection test⟧ has questions with a wrong intuitive answer, so substitute your answer into the text and slow down.", it: "Il test di riflessione cognitiva ha domande con una risposta intuitiva sbagliata, quindi sostituisci la tua risposta nel testo e rallenta." }
    ],
    gloss: [
      { w: "base rate neglect", it: "trascurare il tasso base" },
      { w: "natural frequencies", it: "frequenze naturali (conteggi su 1000 persone)" },
      { w: "base rate", it: "tasso base: quanto è comune ciò che cerchi" },
      { w: "conjunction fallacy", it: "fallacia della congiunzione" },
      { w: "gambler’s fallacy", it: "errore del giocatore" },
      { w: "Confirmation bias", it: "pregiudizio di conferma" },
      { w: "cognitive reflection test", it: "test di riflessione cognitiva" },
      { w: "false alarms", it: "falsi allarmi (falsi positivi)" },
      { w: "independent", it: "indipendenti: senza memoria" }
    ]
  });
  A("mnt-strategia-giochi-nim-minimax", {
    title: { t: "Perfect-information games: Nim, minimax and looking ahead", it: "Giochi a informazione perfetta: Nim, minimax e guardare avanti" },
    sum: [
      { t: "In ⟦perfect information⟧ games, each position is either winning or losing for the player to move, found by ⟦backward induction⟧.", it: "Nei giochi a informazione perfetta ogni posizione è vincente o perdente per chi deve muovere, e si trova con l’induzione retrograda." },
      { t: "A ⟦losing position⟧ allows only moves to winning ones; a ⟦winning position⟧ has at least one move to a losing one.", it: "Una posizione perdente permette solo mosse verso posizioni vincenti; una vincente ha almeno una mossa verso una perdente." },
      { t: "In the ⟦subtraction game⟧, taking 1 to k objects, the losing positions are the multiples of k + 1.", it: "Nel gioco di sottrazione, in cui si prendono da 1 a k oggetti, le posizioni perdenti sono i multipli di k + 1." },
      { t: "In ⟦Nim⟧ you take any number from one pile; a position is losing when the ⟦XOR⟧ of the piles is 0.", it: "Nel Nim si toglie un numero qualsiasi da una pila; una posizione è perdente quando lo XOR delle pile vale 0." },
      { t: "To find the winning move, look for a pile p with p XOR S < p; with two piles, make them equal.", it: "Per trovare la mossa vincente, cerca una pila p con p XOR S < p; con due pile, rendile uguali." },
      { t: "In tic-tac-toe a ⟦fork⟧ creates two threats at once, so look ahead three half-moves, yours, his and yours.", it: "Nel tris una forchetta crea due minacce insieme, quindi guarda avanti di tre semi-mosse: tua, sua e tua." },
      { t: "With ⟦minimax⟧ endings score +1, 0 or −1; you pick the maximum, and assume the opponent picks the minimum.", it: "Con il minimax i finali valgono +1, 0 o −1; scegli il massimo e assumi che l’avversario scelga il minimo." }
    ],
    gloss: [
      { w: "perfect information", it: "informazione perfetta (niente dadi né carte nascoste)" },
      { w: "backward induction", it: "induzione retrograda: dalla fine all’indietro" },
      { w: "losing position", it: "posizione perdente per chi muove" },
      { w: "winning position", it: "posizione vincente per chi muove" },
      { w: "subtraction game", it: "gioco di sottrazione" },
      { w: "Nim", it: "gioco con più pile" },
      { w: "XOR", it: "somma binaria senza riporti" },
      { w: "fork", it: "forchetta: due minacce insieme" },
      { w: "minimax", it: "massimizzo il mio valore, l’avversario lo minimizza" },
      { w: "nim-sum", it: "XOR delle pile" }
    ]
  });
  A("mnt-previsione-e-calibrazione", {
    title: { t: "Probabilistic forecasting and calibration", it: "Previsione probabilistica e calibrazione" },
    sum: [
      { t: "You are ⟦calibrated⟧ if the events you call “90%” happen about 90% of the time.", it: "Sei calibrato se gli eventi che dai al «90%» accadono circa il 90% delle volte." },
      { t: "One forecast cannot be judged on its own, so you need a sample of forecasts.", it: "Una singola previsione non si può giudicare da sola, quindi serve un campione di previsioni." },
      { t: "The ⟦Brier score⟧ is (p − o)², where o is 1 if the event happens and 0 if not; lower is better.", it: "Il punteggio di Brier è (p − o)², dove o vale 1 se l’evento accade e 0 se non accade; più è basso, meglio è." },
      { t: "Saying 0.9 scores 0.01 if the event happens and 0.81 if not, while always saying 50% scores 0.25.", it: "Dire 0,9 dà 0,01 se l’evento accade e 0,81 se non accade, mentre dire sempre 50% dà 0,25." },
      { t: "⟦Overconfidence⟧ is the most studied flaw, so widen your intervals and look for reasons you could be wrong.", it: "L’eccesso di fiducia è il difetto più studiato, quindi allarga gli intervalli e cerca motivi per cui potresti sbagliare." },
      { t: "Start from the ⟦base rate⟧ of the reference class, then update: posterior odds = initial odds × ⟦likelihood ratio⟧.", it: "Parti dal tasso di base della classe di riferimento, poi aggiorna: odds posteriori = odds iniziali × rapporto di verosimiglianza." },
      { t: "Keep a ⟦forecast log⟧, because without it the ⟦hindsight bias⟧ rewrites the past as “I knew it”.", it: "Tieni un registro delle previsioni, perché senza di esso il bias del senno di poi riscrive il passato come «lo sapevo»." }
    ],
    gloss: [
      { w: "calibrated", it: "calibrato: la fiducia corrisponde alla frequenza reale" },
      { w: "Brier score", it: "punteggio di Brier: errore quadratico della previsione" },
      { w: "Overconfidence", it: "eccesso di fiducia" },
      { w: "base rate", it: "tasso di base della classe di riferimento" },
      { w: "likelihood ratio", it: "rapporto di verosimiglianza" },
      { w: "forecast log", it: "registro delle previsioni" },
      { w: "hindsight bias", it: "bias del senno di poi" },
      { w: "reference class", it: "classe di riferimento" },
      { w: "odds", it: "quote (rapporto tra probabilità)" }
    ]
  });
  A("mnt-enigmi-strategie-di-soluzione", {
    title: { t: "Puzzles: knights and knaves, cryptarithms, sudoku, sequences", it: "Enigmi: cavalieri e furfanti, crittoaritmetica, sudoku, sequenze" },
    sum: [
      { t: "In ⟦knights and knaves⟧ puzzles, knights always tell the truth and knaves always lie, so use ⟦case analysis⟧ and check each assumption.", it: "Negli enigmi di cavalieri e furfanti i cavalieri dicono sempre il vero e i furfanti mentono sempre, quindi usa l’analisi dei casi e verifica ogni ipotesi." },
      { t: "Discard any case that leads to a ⟦contradiction⟧, until one case remains, and then recheck every statement.", it: "Scarta ogni caso che porta a una contraddizione, finché ne resta uno, poi ricontrolla ogni affermazione." },
      { t: "In a ⟦cryptarithm⟧ each letter is a different digit, a leading letter cannot be 0, and a ⟦carry⟧ is 0 or 1.", it: "In una crittoaritmetica ogni lettera è una cifra diversa, la lettera iniziale non può essere 0 e un riporto vale 0 o 1." },
      { t: "Start from the most constrained columns: in SEND + MORE = MONEY, M = 1, giving 9567 + 1085 = 10652.", it: "Parti dalle colonne più vincolate: in SEND + MORE = MONEY, M = 1, e si arriva a 9567 + 1085 = 10652." },
      { t: "In a 4×4 ⟦sudoku⟧, each row, column and 2×2 box contains 1-4 once.", it: "In un sudoku 4×4 ogni riga, colonna e riquadro 2×2 contiene 1-4 una sola volta." },
      { t: "A ⟦naked single⟧ is a cell with one candidate left, and a ⟦hidden single⟧ is a number that fits one cell only.", it: "Un singolo nudo è una cella con un solo candidato rimasto, e un singolo nascosto è un numero che può andare in una sola cella." },
      { t: "For a ⟦sequence⟧ try differences, then ⟦second differences⟧, then ratios: 2, 5, 10, 17, 26 continues with 37.", it: "Per una sequenza prova le differenze, poi le differenze seconde, poi i rapporti: 2, 5, 10, 17, 26 continua con 37." }
    ],
    gloss: [
      { w: "knights and knaves", it: "cavalieri (dicono il vero) e furfanti (mentono)" },
      { w: "case analysis", it: "analisi dei casi" },
      { w: "contradiction", it: "contraddizione" },
      { w: "cryptarithm", it: "crittoaritmetica: lettere al posto delle cifre" },
      { w: "carry", it: "riporto" },
      { w: "sudoku", it: "sudoku" },
      { w: "naked single", it: "singolo nudo" },
      { w: "hidden single", it: "singolo nascosto" },
      { w: "sequence", it: "sequenza numerica" },
      { w: "second differences", it: "differenze seconde" }
    ]
  });
  A("mnt-allenare-bene-evidenze", {
    title: { t: "Training well: what studies say (and do not say)", it: "Allenare bene: che cosa dicono (e non dicono) gli studi" },
    sum: [
      { t: "Ask who was studied, whether there was an ⟦active control group⟧, and whether the gain is on the trained task or elsewhere.", it: "Chiediti chi è stato studiato, se c’era un gruppo di controllo attivo e se il miglioramento è sul compito allenato o su altri compiti." },
      { t: "⟦Near transfer⟧ is common, while ⟦far transfer⟧ to general abilities such as intelligence is rare and controversial.", it: "Il trasferimento vicino è comune, mentre quello lontano ad abilità generali come l’intelligenza è raro e controverso." },
      { t: "In simulations, Wilson et al. (2019) found learning fastest at 85% accuracy; the app uses this ⟦85% rule⟧ as a heuristic.", it: "In simulazioni, Wilson e colleghi (2019) hanno trovato l’apprendimento più rapido con un’accuratezza intorno all’85%; l’app usa questa regola dell’85% solo come euristica." },
      { t: "In a 2014 study, ⟦interleaved practice⟧ scored 72% against 38% for blocked practice, but the evidence comes mostly from one research group.", it: "In uno studio del 2014 la pratica intercalata ottenne il 72% contro il 38% della pratica a blocchi, ma le evidenze vengono in gran parte da un solo gruppo di ricerca." },
      { t: "⟦Working memory training⟧ such as ⟦n-back⟧ improves the trained task, but a 2016 meta-analysis of 87 publications found no convincing far transfer.", it: "L’allenamento della memoria di lavoro, come l’n-back, migliora il compito allenato, ma una meta-analisi del 2016 su 87 pubblicazioni non ha trovato trasferimento lontano convincente." },
      { t: "The ⟦ACTIVE study⟧ linked speed training in adults aged 65 and over to about 25% fewer dementia diagnoses at 20 years.", it: "Lo studio ACTIVE ha associato l’allenamento della velocità in adulti dai 65 anni a circa il 25% di diagnosi di demenza in meno a 20 anni." },
      { t: "That result is observational and not for young adults, so the app expects no general IQ gain, only gains from specific strategies.", it: "Quel risultato è osservazionale e non vale per i giovani adulti, quindi l’app non promette un aumento generale del QI, ma solo guadagni da strategie specifiche." }
    ],
    gloss: [
      { w: "active control group", it: "gruppo di controllo che fa un’altra attività" },
      { w: "Near transfer", it: "trasferimento vicino" },
      { w: "far transfer", it: "trasferimento lontano" },
      { w: "85% rule", it: "regola dell’85% (euristica sulla difficoltà)" },
      { w: "interleaved practice", it: "pratica intercalata" },
      { w: "Working memory training", it: "allenamento della memoria di lavoro" },
      { w: "n-back", it: "compito di memoria di lavoro (stimolo di n passi prima)" },
      { w: "ACTIVE study", it: "studio su adulti dai 65 anni" },
      { w: "heuristic", it: "euristica: regola pratica, non legge" },
      { w: "meta-analysis", it: "meta-analisi: sintesi di molti studi" }
    ]
  });
})(window.ST = window.ST || {});
