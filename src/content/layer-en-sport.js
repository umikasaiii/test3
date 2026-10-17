(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A('spo-sistemi-energetici', {
    title: { t: 'Energy systems', it: 'I sistemi energetici' },
    sum: [
      { t: 'Muscle stores very little ⟦ATP⟧, so it is rebuilt continuously by three pathways working together.', it: 'Il muscolo ha pochissimo ATP, quindi viene ricostruito di continuo da tre vie che lavorano insieme.' },
      { t: 'The ⟦phosphocreatine⟧ system has the highest power but a tiny capacity, and it dominates jumps, throws and the first seconds of a sprint.', it: 'Il sistema della fosfocreatina ha la potenza massima ma capacità minima, e domina salti, lanci e i primi secondi di uno sprint.' },
      { t: '⟦Glycolysis⟧ works without oxygen and yields 2 net ATP per glucose; ⟦lactate⟧ is a fuel and an indicator, not a poison.', it: 'La glicolisi lavora senza ossigeno e rende 2 ATP netti per glucosio; il lattato è un combustibile e un indicatore, non un veleno.' },
      { t: 'The ⟦oxidative system⟧ has low power but huge capacity, and one glucose gives about 15 times more ATP than anaerobic glycolysis.', it: 'Il sistema ossidativo ha potenza bassa ma capacità enorme, e un glucosio rende circa 15 volte più ATP della glicolisi anaerobica.' },
      { t: 'The contribution of each system changes with duration and intensity, and the estimates are ranges, not exact values.', it: 'Il contributo di ciascun sistema cambia con durata e intensità, e le stime sono intervalli, non valori esatti.' },
      { t: 'Fat dominates at low intensity and carbohydrate at high intensity, which the ⟦respiratory exchange ratio⟧ helps to estimate.', it: 'I grassi dominano a bassa intensità e i carboidrati ad alta intensità, e il quoziente respiratorio aiuta a stimarlo.' },
      { t: 'About 5 kcal per litre of oxygen converts ⟦VO₂⟧ into energy, and the ⟦EPOC⟧ after exercise is real but modest.', it: 'Circa 5 kcal per litro di ossigeno convertono il VO₂ in energia, e l’EPOC dopo l’esercizio esiste ma è modesto.' }
    ],
    gloss: [
      { w: 'ATP', it: 'adenosina trifosfato, la «moneta» energetica del muscolo' },
      { w: 'phosphocreatine', it: 'fosfocreatina (PCr)' },
      { w: 'glycolysis', it: 'glicolisi' },
      { w: 'lactate', it: 'lattato' },
      { w: 'oxidative system', it: 'sistema ossidativo (aerobico)' },
      { w: 'respiratory exchange ratio', it: 'quoziente respiratorio (RER)' },
      { w: 'VO₂', it: 'consumo di ossigeno' },
      { w: 'EPOC', it: 'consumo di ossigeno in eccesso dopo l’esercizio' },
      { w: 'power', it: 'potenza (ATP al secondo)' },
      { w: 'capacity', it: 'capacità (ATP totale disponibile)' }
    ]
  });
  A('spo-muscolo-scheletrico', {
    title: { t: 'The skeletal muscle', it: 'Il muscolo scheletrico' },
    sum: [
      { t: 'Force comes from actin and myosin sliding in the ⟦sarcomere⟧, triggered by calcium after a signal from the motor neuron.', it: 'La forza nasce dallo scorrimento di actina e miosina nel sarcomero, innescato dal calcio dopo un segnale del motoneurone.' },
      { t: '⟦Type I fibres⟧ are slow and fatigue-resistant, ⟦type IIx fibres⟧ are fast and tire early, and IIa are intermediate.', it: 'Le fibre di tipo I sono lente e resistenti alla fatica, le IIx veloci e si affaticano presto, le IIa sono intermedie.' },
      { t: 'A motor neuron and all the fibres it supplies form a ⟦motor unit⟧, and all its fibres are of the same type.', it: 'Un motoneurone e tutte le fibre che innerva formano un’unità motoria, e tutte le sue fibre sono dello stesso tipo.' },
      { t: 'The ⟦size principle⟧ says motor units are recruited from small to large, so fast fibres need heavy loads or maximal intent.', it: 'Il principio della dimensione dice che le unità motorie sono reclutate dalla piccola alla grande, quindi le fibre veloci richiedono carichi alti o intento massimo.' },
      { t: '⟦Eccentric⟧ contractions lengthen the muscle and produce more force, while ⟦concentric⟧ ones shorten it and isometric ones do no external work.', it: 'Le contrazioni eccentriche allungano il muscolo e producono più forza, le concentriche lo accorciano e le isometriche non compiono lavoro esterno.' },
      { t: 'In the ⟦force-velocity⟧ relation, power peaks at intermediate loads and speeds, so there is no single load for power.', it: 'Nella relazione forza-velocità la potenza è massima a carichi e velocità intermedi, quindi non esiste un solo carico per la potenza.' },
      { t: 'Force also depends on sarcomere length and cross-sectional area, but fibre type alone does not predict talent.', it: 'La forza dipende anche dalla lunghezza del sarcomero e dalla sezione, ma il solo tipo di fibra non prevede il talento.' }
    ],
    gloss: [
      { w: 'sarcomere', it: 'sarcomero, unità contrattile del muscolo' },
      { w: 'type I fibres', it: 'fibre di tipo I (lente, ossidative)' },
      { w: 'type IIx fibres', it: 'fibre di tipo IIx (veloci, glicolitiche)' },
      { w: 'motor unit', it: 'unità motoria' },
      { w: 'size principle', it: 'principio della dimensione (Henneman)' },
      { w: 'eccentric', it: 'eccentrica, il muscolo si allunga' },
      { w: 'concentric', it: 'concentrica, il muscolo si accorcia' },
      { w: 'isometric', it: 'isometrica, lunghezza invariata' },
      { w: 'force-velocity', it: 'relazione forza-velocità' },
      { w: 'cross-sectional area', it: 'sezione trasversale' }
    ]
  });
  A('spo-sistema-nervoso-coordinazione', {
    title: { t: 'The nervous system and coordination', it: 'Sistema nervoso e coordinazione' },
    sum: [
      { t: 'Muscle force depends on ⟦recruitment⟧, ⟦rate coding⟧ and how well motor units and muscles work together.', it: 'La forza muscolare dipende da reclutamento, frequenza di scarica e da quanto bene lavorano insieme unità motorie e muscoli.' },
      { t: 'Faster firing makes single twitches sum into a stronger, fused contraction called tetanus.', it: 'Una scarica più rapida fa sommare le singole scosse in una contrazione più forte e fusa, detta tetano.' },
      { t: 'Early strength gains in beginners are largely neural, and ⟦cross-education⟧ is a clue to central adaptations.', it: 'I primi guadagni di forza nei principianti sono in gran parte neurali, e la cross-education è un indizio di adattamenti centrali.' },
      { t: 'Many sport actions leave little time, so ⟦rate of force development⟧ matters as much as maximal force.', it: 'In molti gesti c’è poco tempo, quindi la rapidità di produzione di forza conta quanto la forza massima.' },
      { t: 'The ⟦muscle spindle⟧ senses length and triggers the stretch reflex, while the ⟦Golgi tendon organ⟧ senses force.', it: 'Il fuso neuromuscolare rileva la lunghezza e attiva il riflesso da stiramento, mentre l’organo del Golgi rileva la forza.' },
      { t: 'Motor learning moves from a cognitive to an associative and then an autonomous stage, as described by Fitts and Posner.', it: 'L’apprendimento motorio passa da una fase cognitiva a una associativa e poi autonoma, come descritto da Fitts e Posner.' },
      { t: '⟦Variable practice⟧ and an external focus of attention tend to help learning, but the effects depend on task and level.', it: 'La pratica variabile e il focus attentivo esterno tendono ad aiutare l’apprendimento, ma gli effetti dipendono da compito e livello.' }
    ],
    gloss: [
      { w: 'recruitment', it: 'reclutamento delle unità motorie' },
      { w: 'rate coding', it: 'frequenza di scarica' },
      { w: 'cross-education', it: 'trasferimento controlaterale della forza' },
      { w: 'rate of force development', it: 'rapidità di produzione di forza (RFD)' },
      { w: 'muscle spindle', it: 'fuso neuromuscolare' },
      { w: 'Golgi tendon organ', it: 'organo tendineo del Golgi' },
      { w: 'variable practice', it: 'pratica variabile' },
      { w: 'co-contraction', it: 'co-contrazione degli antagonisti' },
      { w: 'proprioceptors', it: 'propriocettori' },
      { w: 'specificity', it: 'specificità dell’adattamento' }
    ]
  });
  A('spo-cardio-respiratorio', {
    title: { t: 'The cardio-respiratory system', it: 'Sistema cardio-respiratorio' },
    sum: [
      { t: 'Oxygen travels along a chain from the lungs to the mitochondria, and the weakest link limits ⟦VO₂max⟧.', it: 'L’ossigeno percorre una catena dai polmoni ai mitocondri, e l’anello più debole limita il VO₂max.' },
      { t: '⟦Cardiac output⟧ equals heart rate times ⟦stroke volume⟧, and in healthy people it is the main difference between individuals.', it: 'La gittata cardiaca è frequenza cardiaca per gittata sistolica, e nelle persone sane è la principale differenza fra individui.' },
      { t: 'The ⟦Fick equation⟧ says VO₂ equals cardiac output times the arteriovenous oxygen difference.', it: 'L’equazione di Fick dice che il VO₂ è la gittata cardiaca per la differenza arterovenosa di ossigeno.' },
      { t: 'Maximum heart rate formulas such as 220 minus age give only a rough estimate, and the ⟦heart rate reserve⟧ method refines target zones.', it: 'Le formule della FC massima, come 220 meno l’età, danno solo una stima grossolana, e il metodo della riserva di frequenza cardiaca affina le zone bersaglio.' },
      { t: 'The first and second ⟦thresholds⟧ mark turning points in lactate and ventilation, and they predict endurance better than VO₂max alone.', it: 'La prima e la seconda soglia segnano punti di svolta di lattato e ventilazione, e predicono la resistenza meglio del solo VO₂max.' },
      { t: 'Long-term training enlarges the left ventricle, raises plasma volume and adds capillaries and mitochondria in the muscle.', it: 'L’allenamento prolungato ingrandisce il ventricolo sinistro, aumenta il volume plasmatico e aggiunge capillari e mitocondri nel muscolo.' },
      { t: 'These adaptations are reversible and vary greatly between people, and unusual symptoms during effort deserve medical advice.', it: 'Questi adattamenti sono reversibili e variano molto fra le persone, e sintomi insoliti durante lo sforzo meritano un parere medico.' }
    ],
    gloss: [
      { w: 'VO₂max', it: 'massimo consumo di ossigeno' },
      { w: 'cardiac output', it: 'gittata cardiaca' },
      { w: 'stroke volume', it: 'gittata sistolica' },
      { w: 'Fick equation', it: 'equazione di Fick' },
      { w: 'heart rate reserve', it: 'riserva di frequenza cardiaca (Karvonen)' },
      { w: 'thresholds', it: 'soglie (lattato, ventilatorie)' },
      { w: 'ventilation', it: 'ventilazione' },
      { w: 'plasma volume', it: 'volume plasmatico' },
      { w: 'haemoglobin', it: 'emoglobina' },
      { w: 'arteriovenous difference', it: 'differenza arterovenosa di ossigeno' }
    ]
  });
  A('spo-adattamento-allenamento', {
    title: { t: 'Adaptation to training', it: 'Adattamento all’allenamento' },
    sum: [
      { t: 'A training stimulus causes fatigue, and ⟦adaptation⟧ happens during recovery, so dose and recovery must be balanced.', it: 'Lo stimolo di allenamento causa fatica, e l’adattamento avviene durante il recupero, quindi dose e recupero vanno bilanciati.' },
      { t: '⟦Progressive overload⟧ means raising the stimulus gradually, but the popular 10% rule is a heuristic, not a proven law.', it: 'Il sovraccarico progressivo significa aumentare lo stimolo gradualmente, ma la popolare regola del 10% è un’euristica, non una legge dimostrata.' },
      { t: '⟦Specificity⟧ means the body adapts to the exact demands imposed, so general work is a base but not enough alone.', it: 'La specificità significa che il corpo si adatta alle richieste esatte imposte, quindi il lavoro generale è una base ma da solo non basta.' },
      { t: 'The ⟦supercompensation⟧ idea is a useful simplification, and the fitness-fatigue model shows that fatigue hides fitness in the short term.', it: 'L’idea della supercompensazione è una semplificazione utile, e il modello fitness-fatica mostra che a breve termine la fatica maschera la fitness.' },
      { t: 'Responses to the same programme differ widely, so tables are population averages and the plan must be adjusted to you.', it: 'Le risposte allo stesso programma differiscono molto, quindi le tabelle sono medie di popolazione e il piano va regolato su di te.' },
      { t: 'Before calling someone a ⟦non-responder⟧, compare the change with the test’s ⟦typical error⟧ and check sleep, diet and adherence.', it: 'Prima di dire che qualcuno è un non-responder, confronta il cambiamento con l’errore tipico del test e controlla sonno, alimentazione e aderenza.' },
      { t: 'Adaptations are ⟦reversible⟧: with ⟦detraining⟧ they fade, but a lower volume at high intensity can maintain them.', it: 'Gli adattamenti sono reversibili: con il detraining svaniscono, ma un volume minore ad alta intensità può mantenerli.' }
    ],
    gloss: [
      { w: 'adaptation', it: 'adattamento' },
      { w: 'progressive overload', it: 'sovraccarico progressivo' },
      { w: 'specificity', it: 'specificità (SAID)' },
      { w: 'supercompensation', it: 'supercompensazione' },
      { w: 'fitness-fatigue model', it: 'modello fitness-fatica (Banister)' },
      { w: 'non-responder', it: 'chi non risponde al programma' },
      { w: 'typical error', it: 'errore tipico di misura' },
      { w: 'reversible', it: 'reversibile' },
      { w: 'detraining', it: 'perdita degli adattamenti per interruzione' },
      { w: 'muscle memory', it: 'memoria muscolare' }
    ]
  });
  A('spo-recupero-fatica', {
    title: { t: 'Recovery and fatigue', it: 'Recupero e fatica' },
    sum: [
      { t: 'Adaptation happens during recovery, and different systems recover at different speeds, so there is no single recovery time.', it: 'L’adattamento avviene durante il recupero, e i diversi sistemi recuperano a velocità diverse, quindi non esiste un tempo di recupero unico.' },
      { t: '⟦Sleep⟧ is the recovery tool with the strongest evidence, and adults generally need 7–9 hours a night.', it: 'Il sonno è lo strumento di recupero con l’evidenza più forte, e gli adulti in genere ne hanno bisogno da 7 a 9 ore a notte.' },
      { t: '⟦Peripheral fatigue⟧ arises in the muscle, while ⟦central fatigue⟧ is a reduced voluntary drive from the brain and spinal cord.', it: 'La fatica periferica nasce nel muscolo, mentre la fatica centrale è una riduzione del comando volontario da cervello e midollo.' },
      { t: '⟦DOMS⟧ peaks at 24–72 hours after unusual eccentric work and is not caused by lactic acid.', it: 'Il DOMS raggiunge il picco a 24–72 ore dopo un lavoro eccentrico insolito e non è causato dall’acido lattico.' },
      { t: '⟦Overreaching⟧ is a short drop in performance that can be functional, while ⟦overtraining syndrome⟧ lasts months and is diagnosed by exclusion.', it: 'L’overreaching è un breve calo di prestazione che può essere funzionale, mentre la sindrome da sovrallenamento dura mesi e si diagnostica per esclusione.' },
      { t: 'Simple monitoring, such as ⟦session RPE⟧, works best when you follow your own trends instead of universal thresholds.', it: 'Un monitoraggio semplice, come l’RPE di sessione, funziona meglio se si seguono le proprie tendenze invece di soglie universali.' },
      { t: 'Energy, carbohydrate, protein, fluids and load management matter most, while massage, cold water and compression have small or uncertain effects.', it: 'Energia, carboidrati, proteine, liquidi e gestione del carico contano di più, mentre massaggio, acqua fredda e compressione hanno effetti piccoli o incerti.' }
    ],
    gloss: [
      { w: 'sleep', it: 'sonno' },
      { w: 'peripheral fatigue', it: 'fatica periferica (nel muscolo)' },
      { w: 'central fatigue', it: 'fatica centrale (comando volontario ridotto)' },
      { w: 'DOMS', it: 'dolore muscolare a insorgenza ritardata' },
      { w: 'overreaching', it: 'sovraccarico funzionale o non funzionale' },
      { w: 'overtraining syndrome', it: 'sindrome da sovrallenamento' },
      { w: 'session RPE', it: 'percezione dello sforzo della sessione × durata' },
      { w: 'repeated bout effect', it: 'effetto della ripetizione' },
      { w: 'cold water immersion', it: 'immersione in acqua fredda' },
      { w: 'active recovery', it: 'recupero attivo' }
    ]
  });
  A('spo-metodo-scientifico-sport', {
    title: { t: 'The scientific method in sport', it: 'Il metodo scientifico nello sport' },
    sum: [
      { t: 'The ⟦scientific method⟧ limits errors by testing falsifiable hypotheses with a fair comparison and then replicating the result.', it: 'Il metodo scientifico limita gli errori testando ipotesi falsificabili con un confronto equo e poi replicando il risultato.' },
      { t: 'The ⟦study design⟧ decides what can be concluded, and a randomized controlled trial is the best design to test causation.', it: 'Il tipo di studio determina cosa si può concludere, e il trial controllato randomizzato è il disegno migliore per verificare la causalità.' },
      { t: 'The ⟦effect size⟧ and the ⟦confidence interval⟧ matter more than a “significant” p-value, and small samples give wide uncertainty.', it: 'La dimensione dell’effetto e l’intervallo di confidenza contano più di un valore p «significativo», e i campioni piccoli danno molta incertezza.' },
      { t: 'Common ⟦biases⟧ include selection, placebo, publication and survivorship bias, and good design reduces them but never removes them.', it: 'I bias comuni includono selezione, placebo, pubblicazione e sopravvissuto, e un buon disegno li riduce ma non li elimina.' },
      { t: '⟦Correlation⟧ does not prove causation, because a third factor, a ⟦confounder⟧, may explain both variables.', it: 'La correlazione non prova la causalità, perché un terzo fattore, un confondente, può spiegare entrambe le variabili.' },
      { t: 'A headline such as “50% lower risk” should be split into ⟦relative risk⟧ and absolute risk before you believe it.', it: 'Un titolo come «rischio ridotto del 50%» va scomposto in rischio relativo e assoluto prima di crederci.' },
      { t: 'Trust should be proportional to the evidence: ask how big the effect is, how uncertain, and in whom.', it: 'La fiducia deve essere proporzionata alle prove: chiedi quanto è grande l’effetto, con quale incertezza e su chi.' }
    ],
    gloss: [
      { w: 'scientific method', it: 'metodo scientifico' },
      { w: 'study design', it: 'disegno dello studio' },
      { w: 'effect size', it: 'dimensione dell’effetto' },
      { w: 'confidence interval', it: 'intervallo di confidenza' },
      { w: 'biases', it: 'distorsioni sistematiche (bias)' },
      { w: 'correlation', it: 'correlazione' },
      { w: 'confounder', it: 'fattore confondente' },
      { w: 'relative risk', it: 'rischio relativo' },
      { w: 'placebo', it: 'effetto placebo' },
      { w: 'randomized controlled trial', it: 'trial controllato randomizzato' }
    ]
  });
  A('spo-principi-costruzione-forza', {
    title: { t: 'Principles of building strength', it: 'Principi di costruzione della forza' },
    sum: [
      { t: 'A strength programme combines a few variables: intensity, ⟦volume⟧, frequency, rest and exercise selection.', it: 'Un programma di forza combina poche variabili: intensità, volume, frequenza, riposi e scelta degli esercizi.' },
      { t: 'Intensity can be set as a percentage of ⟦1RM⟧ or by effort, using ⟦RIR⟧ and ⟦RPE⟧ to adjust to the day.', it: 'L’intensità si può fissare come percentuale della 1RM o per sforzo, usando RIR e RPE per adattarsi al giorno.' },
      { t: 'The ⟦Epley⟧ and ⟦Brzycki⟧ formulas estimate 1RM from a submaximal set, but they are approximations.', it: 'Le formule di Epley e Brzycki stimano la 1RM da una serie sub-massimale, ma sono approssimazioni.' },
      { t: 'Weekly volume has diminishing returns, and at equal volume training frequency changes strength results little.', it: 'Il volume settimanale ha rendimenti decrescenti, e a parità di volume la frequenza cambia poco i risultati di forza.' },
      { t: 'Rest long enough between sets, from 2 to 5 minutes on heavy lifts, to avoid losing repetitions and quality.', it: 'Riposa abbastanza tra le serie, da 2 a 5 minuti nei fondamentali pesanti, per non perdere ripetizioni e qualità.' },
      { t: '⟦Double progression⟧ adds repetitions within a range and raises the load once every set reaches the top.', it: 'La doppia progressione aggiunge ripetizioni entro una forbice e aumenta il carico quando tutte le serie raggiungono il tetto.' },
      { t: 'If progress stalls in a ⟦plateau⟧, check recovery, technique and volume first, and use spotters and safety supports.', it: 'Se i progressi si fermano in un plateau, controlla prima recupero, tecnica e volume, e usa spotter e supporti di sicurezza.' }
    ],
    gloss: [
      { w: 'volume', it: 'volume di allenamento' },
      { w: '1RM', it: 'carico massimo sollevabile una volta' },
      { w: 'RIR', it: 'ripetizioni di scorta a fine serie' },
      { w: 'RPE', it: 'scala dello sforzo percepito' },
      { w: 'Epley', it: 'formula di Epley per stimare la 1RM' },
      { w: 'Brzycki', it: 'formula di Brzycki per stimare la 1RM' },
      { w: 'double progression', it: 'doppia progressione' },
      { w: 'plateau', it: 'stallo dei progressi' },
      { w: 'frequency', it: 'frequenza settimanale' },
      { w: 'spotter', it: 'compagno che assiste la serie' }
    ]
  });
  A('spo-ipertrofia-muscolare', {
    title: { t: 'Hypertrophy: volume, proximity to failure and frequency', it: 'Ipertrofia: volume, vicinanza al cedimento e frequenza' },
    sum: [
      { t: '⟦Hypertrophy⟧ is an increase in muscle size that needs a repeatable stimulus and adequate recovery.', it: 'L’ipertrofia è un aumento della dimensione del muscolo che richiede uno stimolo ripetibile e un recupero adeguato.' },
      { t: '⟦Mechanical tension⟧ is the best-recognised stimulus, while muscle damage and soreness are not reliable signs of growth.', it: 'La tensione meccanica è lo stimolo meglio riconosciuto, mentre danno muscolare e dolenzia non sono segni affidabili di crescita.' },
      { t: 'Light and heavy loads give similar hypertrophy when sets are taken close to ⟦failure⟧, but heavy loads win for maximal strength.', it: 'Carichi leggeri e pesanti danno ipertrofia simile se le serie sono portate vicino al cedimento, ma i carichi pesanti vincono per la forza massimale.' },
      { t: 'Count ⟦hard sets⟧ per muscle each week: beginners need fewer, trained people more, with ⟦diminishing returns⟧.', it: 'Conta le serie dure per muscolo a settimana: i principianti ne servono meno, gli allenati di più, con rendimenti decrescenti.' },
      { t: 'Stopping 1–2 repetitions short of failure gives similar growth with less fatigue, so most sets can stay at RIR 0–3.', it: 'Fermarsi a 1–2 ripetizioni dal cedimento dà una crescita simile con meno fatica, quindi la maggior parte delle serie può restare a RIR 0–3.' },
      { t: 'At equal volume, training a muscle once, twice or three times a week gives very similar results, so adherence matters most.', it: 'A parità di volume, allenare un muscolo una, due o tre volte a settimana dà risultati molto simili, quindi conta soprattutto l’aderenza.' },
      { t: 'A daily ⟦protein⟧ intake of 1.4–2.0 g/kg, enough sleep and a small calorie surplus support growth.', it: 'Un apporto giornaliero di proteine di 1,4–2,0 g/kg, sonno sufficiente e un lieve surplus calorico sostengono la crescita.' }
    ],
    gloss: [
      { w: 'hypertrophy', it: 'ipertrofia, aumento di dimensione del muscolo' },
      { w: 'mechanical tension', it: 'tensione meccanica' },
      { w: 'failure', it: 'cedimento muscolare' },
      { w: 'hard sets', it: 'serie dure (vicine al cedimento)' },
      { w: 'protein', it: 'proteine' },
      { w: 'range of motion', it: 'ampiezza di movimento' },
      { w: 'metabolic stress', it: 'stress metabolico' },
      { w: 'diminishing returns', it: 'rendimenti decrescenti' },
      { w: 'multi-joint exercises', it: 'esercizi multiarticolari' },
      { w: 'adherence', it: 'aderenza al programma' }
    ]
  });
  A('spo-tecnica-biomeccanica-fondamentali', {
    title: { t: 'Technique and biomechanics of the main lifts', it: 'Tecnica e biomeccanica dei fondamentali' },
    sum: [
      { t: 'A joint ⟦moment⟧ equals force times the perpendicular ⟦moment arm⟧, so the same load can be easier or harder.', it: 'Il momento di una articolazione è forza per braccio perpendicolare, quindi lo stesso carico può essere più facile o più difficile.' },
      { t: 'Keep the ⟦bar path⟧ close to the body and above the ⟦mid-foot⟧, because moving the bar away raises the moment on the trunk.', it: 'Tieni la traiettoria del bilanciere vicina al corpo e sopra il mesopiede, perché allontanarlo aumenta il momento sul tronco.' },
      { t: 'In the squat and deadlift, limb lengths change the trunk angle, so there is no single perfect technique.', it: 'Nello squat e nello stacco la lunghezza degli arti cambia l’inclinazione del tronco, quindi non esiste un’unica tecnica perfetta.' },
      { t: 'In the bench press the forearm stays near vertical, and in the overhead press the bar finishes over the mid-foot.', it: 'Nella panca l’avambraccio resta quasi verticale, e nell’overhead press la barra termina sopra il mesopiede.' },
      { t: 'Pull-ups, rows and the ⟦hip thrust⟧ have simple progressions, and the hip thrust is a good option for beginners.', it: 'Trazioni, rematore e hip thrust hanno progressioni semplici, e l’hip thrust è una buona opzione per principianti.' },
      { t: 'Correct one common error at a time, with a lighter load and a side-view video, and aim for repeatable movement.', it: 'Correggi un solo errore comune per volta, con un carico ridotto e un video laterale, puntando alla ripetibilità del gesto.' },
      { t: 'Use a ⟦spotter⟧ or safety supports near your limit, learn how to bail out, and choose variants that keep technique good.', it: 'Usa uno spotter o dei supporti vicino al limite, impara come abbandonare il carico e scegli varianti che mantengano una buona tecnica.' }
    ],
    gloss: [
      { w: 'moment', it: 'momento (coppia) = forza × braccio' },
      { w: 'moment arm', it: 'braccio del momento' },
      { w: 'bar path', it: 'traiettoria del bilanciere' },
      { w: 'mid-foot', it: 'mesopiede, parte centrale del piede' },
      { w: 'hip thrust', it: 'spinta d’anca con schiena su panca' },
      { w: 'spotter', it: 'compagno che assiste' },
      { w: 'trap bar', it: 'barra esagonale' },
      { w: 'neutral spine', it: 'colonna neutra' },
      { w: 'warm-up ramp', it: 'riscaldamento a rampa' },
      { w: 'variant', it: 'variante dell’esercizio' }
    ]
  });
  A('spo-forza-massimale-neurale', {
    title: { t: 'Maximal strength, neural adaptations and programming', it: 'Forza massimale, adattamenti neurali e programmazione' },
    sum: [
      { t: '⟦Maximal strength⟧ depends on a structural component, muscle size, and a neural component, how well the nervous system activates it.', it: 'La forza massimale dipende da una componente strutturale, la dimensione del muscolo, e da una neurale, quanto bene il sistema nervoso lo attiva.' },
      { t: 'Typical strength prescriptions use heavy loads, 1–6 repetitions, long rests and training each main lift 2–3 times a week.', it: 'Le prescrizioni tipiche per la forza usano carichi pesanti, 1–6 ripetizioni, riposi lunghi e ogni fondamentale 2–3 volte a settimana.' },
      { t: '⟦Specificity⟧ means you improve what you train, so heavy squats are the best way to raise your squat.', it: 'La specificità significa che migliori ciò che alleni, quindi gli squat pesanti sono il modo migliore per alzare il tuo squat.' },
      { t: 'Beginners use a ⟦linear progression⟧ or a 5×5 scheme, adding load each session, but this pace cannot last.', it: 'I principianti usano una progressione lineare o uno schema 5×5, aggiungendo carico a ogni seduta, ma questo ritmo non può durare.' },
      { t: '⟦Daily undulating periodization⟧ varies intensity within the week and suits intermediates, though its advantage over linear is small or uncertain.', it: 'La periodizzazione ondulata giornaliera varia l’intensità nella settimana e si adatta agli intermedi, anche se il vantaggio sul lineare è piccolo o incerto.' },
      { t: '⟦Block periodization⟧ moves through accumulation, intensification and realization, and is meant for advanced athletes.', it: 'La periodizzazione a blocchi passa per accumulo, intensificazione e realizzazione, ed è pensata per atleti avanzati.' },
      { t: 'A ⟦deload⟧ cuts volume to dissipate fatigue, and peaking before a test keeps intensity while lowering volume.', it: 'Lo scarico riduce il volume per smaltire la fatica, e il picco prima di un test mantiene l’intensità abbassando il volume.' }
    ],
    gloss: [
      { w: 'maximal strength', it: 'forza massimale' },
      { w: 'specificity', it: 'specificità' },
      { w: 'linear progression', it: 'progressione lineare' },
      { w: 'daily undulating periodization', it: 'periodizzazione ondulata giornaliera (DUP)' },
      { w: 'block periodization', it: 'periodizzazione a blocchi' },
      { w: 'deload', it: 'settimana di scarico' },
      { w: 'peaking', it: 'picco di forma' },
      { w: 'neural adaptations', it: 'adattamenti neurali' },
      { w: 'accumulation', it: 'blocco di accumulo' },
      { w: 'intensification', it: 'blocco di intensificazione' }
    ]
  });
  A('spo-potenza-e-rfd', {
    title: { t: 'Power and rate of force development', it: 'Potenza e rate of force development' },
    sum: [
      { t: '⟦Power⟧ is force times velocity, so a very strong but slow athlete, or a fast but weak one, has limited power.', it: 'La potenza è forza per velocità, quindi un atleta molto forte ma lento, o veloce ma debole, ha potenza limitata.' },
      { t: 'In a simplified linear ⟦force-velocity⟧ model, maximal power occurs at half of maximal force, and real curves are not perfectly linear.', it: 'In un modello lineare semplificato forza-velocità, la potenza massima si ha a metà della forza massima, e le curve reali non sono perfettamente lineari.' },
      { t: '⟦RFD⟧ is the speed at which force rises, and early RFD matters because many sport contacts last only a fraction of a second.', it: 'La RFD è la velocità con cui cresce la forza, e la RFD precoce conta perché molti contatti sportivi durano una frazione di secondo.' },
      { t: '⟦Ballistic⟧ and Olympic lifts accelerate the load through the whole movement, but Olympic lifts need a qualified coach.', it: 'Gli esercizi balistici e olimpici accelerano il carico per tutto il movimento, ma gli olimpici richiedono un allenatore qualificato.' },
      { t: 'The best load for power depends on the exercise and the person, so use a range of loads and stop when velocity drops.', it: 'Il carico migliore per la potenza dipende dall’esercizio e dalla persona, quindi usa una gamma di carichi e fermati quando la velocità cala.' },
      { t: '⟦Contrast training⟧ pairs a heavy set with an explosive one, but its evidence is mixed and the benefit is small and individual.', it: 'L’allenamento a contrasto abbina una serie pesante a una esplosiva, ma l’evidenza è mista e il vantaggio è piccolo e individuale.' },
      { t: 'Jump height can be estimated from ⟦flight time⟧ with h = g·t²/8, and changes of 2–3 cm may be only measurement noise.', it: 'L’altezza di un salto si stima dal tempo di volo con h = g·t²/8, e variazioni di 2–3 cm possono essere solo rumore di misura.' }
    ],
    gloss: [
      { w: 'power', it: 'potenza (forza × velocità)' },
      { w: 'force-velocity', it: 'relazione forza-velocità' },
      { w: 'RFD', it: 'rapidità di produzione di forza' },
      { w: 'ballistic', it: 'balistico, accelerato fino al rilascio' },
      { w: 'contrast training', it: 'allenamento a contrasto (complessi)' },
      { w: 'flight time', it: 'tempo di volo' },
      { w: 'countermovement jump', it: 'salto con contromovimento (CMJ)' },
      { w: 'jump squat', it: 'squat con salto' },
      { w: 'triple extension', it: 'triplice estensione (caviglia, ginocchio, anca)' },
      { w: 'post-activation potentiation', it: 'potenziazione post-attivazione (PAPE)' }
    ]
  });
  A('spo-pliometria', {
    title: { t: 'Plyometrics: the stretch-shortening cycle and safe volume', it: 'Pliometria: ciclo stiramento-accorciamento e volume sicuro' },
    sum: [
      { t: 'The ⟦stretch-shortening cycle⟧ has an eccentric phase, an ⟦amortization⟧ phase and a concentric phase, and it makes movement more powerful.', it: 'Il ciclo stiramento-accorciamento ha una fase eccentrica, una di ammortizzazione e una concentrica, e rende il movimento più potente.' },
      { t: 'A short cycle has ground contact under about 250 ms, so plyometrics is training for ⟦quickness⟧, not for endurance.', it: 'Un ciclo breve ha un contatto a terra sotto circa 250 ms, quindi la pliometria è un allenamento di rapidità, non di resistenza.' },
      { t: 'Reviews show plyometric training improves jumping, sprinting and change of direction, especially when combined with strength work.', it: 'Le revisioni mostrano che la pliometria migliora salto, sprint e cambi di direzione, soprattutto se combinata con la forza.' },
      { t: 'Volume is counted in ⟦ground contacts⟧ per session, with more contacts for advanced athletes and fewer when intensity rises.', it: 'Il volume si conta in contatti per seduta, più contatti per gli avanzati e meno quando l’intensità sale.' },
      { t: 'Progress from landing drills to low-intensity bilateral jumps, then to single-leg and high-intensity work such as the ⟦depth jump⟧.', it: 'Si progredisce dagli atterraggi ai salti bilaterali a bassa intensità, poi al lavoro monopodalico e ad alta intensità come il depth jump.' },
      { t: 'Bending the knees lengthens the stopping distance and so lowers the average ⟦landing force⟧.', it: 'Flettere le ginocchia allunga lo spazio di arresto e quindi riduce la forza media di atterraggio.' },
      { t: 'Stop the session if pain appears, landings become unstable or jump height drops, and allow 48–72 hours between hard sessions.', it: 'Interrompi la seduta se compare dolore, gli atterraggi diventano instabili o l’altezza del salto cala, e lascia 48–72 ore tra sedute intense.' }
    ],
    gloss: [
      { w: 'stretch-shortening cycle', it: 'ciclo stiramento-accorciamento (SSC)' },
      { w: 'amortization', it: 'fase di ammortizzazione (transizione)' },
      { w: 'ground contacts', it: 'contatti a terra, misura del volume' },
      { w: 'depth jump', it: 'salto in profondità da una cassa' },
      { w: 'landing force', it: 'forza di atterraggio' },
      { w: 'reactive strength index', it: 'indice di forza reattiva (RSI)' },
      { w: 'countermovement', it: 'contromovimento' },
      { w: 'work-to-rest ratio', it: 'rapporto lavoro:riposo' },
      { w: 'quickness', it: 'rapidità' },
      { w: 'progression', it: 'progressione' }
    ]
  });
  A('spo-velocita-agilita-cambi-direzione', {
    title: { t: 'Speed, agility and change of direction', it: 'Velocità, agilità e cambi di direzione' },
    sum: [
      { t: 'Running speed is stride length times ⟦stride frequency⟧, and the two partly conflict, so the balance varies by person.', it: 'La velocità di corsa è lunghezza del passo per frequenza dei passi, e i due fattori sono in parziale conflitto, quindi l’equilibrio varia da persona a persona.' },
      { t: 'A sprint has start, ⟦acceleration⟧, transition, ⟦maximal velocity⟧ and deceleration phases, and team sports use mostly short sprints.', it: 'Uno sprint ha fasi di partenza, accelerazione, transizione, velocità massima e decelerazione, e gli sport di squadra usano soprattutto scatti brevi.' },
      { t: 'In acceleration the aim is high horizontal force, while at top speed the aim is short, reactive ground contacts.', it: 'Nell’accelerazione l’obiettivo è una forza orizzontale elevata, mentre alla velocità massima sono contatti brevi e reattivi.' },
      { t: '⟦Change of direction⟧ is a planned manoeuvre, whereas ⟦agility⟧ is a reaction to a stimulus and adds perception and decision.', it: 'Il cambio di direzione è una manovra pianificata, mentre l’agilità è una reazione a uno stimolo e aggiunge percezione e decisione.' },
      { t: 'Stopping in less space needs larger eccentric forces, since stopping distance is v² divided by 2a.', it: 'Frenare in meno spazio richiede forze eccentriche maggiori, perché la distanza di frenata è v² diviso 2a.' },
      { t: 'Speed work needs near-maximal effort and long recoveries, and the session ends when times worsen by about 3%.', it: 'Il lavoro di velocità richiede sforzo quasi massimale e recuperi lunghi, e la seduta finisce quando i tempi peggiorano di circa il 3%.' },
      { t: 'Do speed sessions fresh, use a ⟦RAMP warm-up⟧, and build up high-speed exposure gradually to protect the hamstrings.', it: 'Fai le sedute di velocità da fresco, usa un riscaldamento RAMP e aumenta gradualmente l’esposizione ad alta velocità per proteggere gli ischiocrurali.' }
    ],
    gloss: [
      { w: 'stride frequency', it: 'frequenza dei passi' },
      { w: 'acceleration', it: 'accelerazione' },
      { w: 'maximal velocity', it: 'velocità massima' },
      { w: 'change of direction', it: 'cambio di direzione (pianificato)' },
      { w: 'agility', it: 'agilità reattiva' },
      { w: 'split', it: 'tempo parziale su un tratto' },
      { w: 'RAMP warm-up', it: 'riscaldamento RAMP' },
      { w: 'hamstrings', it: 'muscoli posteriori della coscia (ischiocrurali)' },
      { w: 'sled', it: 'slitta per lo sprint' },
      { w: 'stride length', it: 'lunghezza del passo' }
    ]
  });
  A('spo-mobilita-prevenzione-infortuni', {
    title: { t: 'Mobility and injury prevention', it: 'Mobilità e prevenzione degli infortuni' },
    sum: [
      { t: '⟦Mobility⟧ is controlled active range of motion, there is no single right range, and more is not always better.', it: 'La mobilità è un range di movimento attivo e controllato, non esiste un range giusto per tutti, e di più non è sempre meglio.' },
      { t: 'The ⟦RAMP warm-up⟧ has four phases, raise, activate, mobilise and potentiate, and it improves performance.', it: 'Il riscaldamento RAMP ha quattro fasi, aumentare, attivare, mobilizzare e potenziare, e migliora la prestazione.' },
      { t: 'Long ⟦static stretching⟧ can slightly reduce strength right afterwards, so do dynamic stretching before and static stretching later.', it: 'Lo stretching statico lungo può ridurre leggermente la forza subito dopo, quindi fai quello dinamico prima e quello statico dopo.' },
      { t: 'Over weeks, stretching increases range of motion mainly by raising tolerance to stretch, but it alone does not clearly prevent injuries.', it: 'Nel corso delle settimane lo stretching aumenta il ROM soprattutto alzando la tolleranza allo stiramento, ma da solo non previene chiaramente gli infortuni.' },
      { t: 'The strongest evidence supports strength training, balance work and regular structured programmes, not stretching alone.', it: 'L’evidenza più forte sostiene l’allenamento della forza, il lavoro di equilibrio e i programmi strutturati regolari, non il solo stretching.' },
      { t: 'The ⟦Nordic hamstring⟧ exercise and balance training have targeted evidence, but they are demanding and need gradual dosing.', it: 'Il Nordic hamstring e l’allenamento dell’equilibrio hanno evidenza mirata, ma sono impegnativi e richiedono un dosaggio graduale.' },
      { t: 'Return gradually after a break, treat the ⟦10% rule⟧ and the ⟦acute:chronic ratio⟧ as heuristics, and stop for sharp pain or swelling.', it: 'Rientra gradualmente dopo una pausa, considera la regola del 10% e il rapporto acuto:cronico come euristiche, e fermati per dolore acuto o gonfiore.' }
    ],
    gloss: [
      { w: 'mobility', it: 'mobilità' },
      { w: 'RAMP warm-up', it: 'riscaldamento in quattro fasi (Raise, Activate, Mobilise, Potentiate)' },
      { w: 'static stretching', it: 'stretching statico' },
      { w: 'dynamic stretching', it: 'stretching dinamico' },
      { w: 'Nordic hamstring', it: 'esercizio eccentrico per gli ischiocrurali' },
      { w: '10% rule', it: 'regola del 10% di aumento settimanale' },
      { w: 'acute:chronic ratio', it: 'rapporto carico acuto:cronico (ACWR)' },
      { w: 'range of motion', it: 'range di movimento (ROM)' },
      { w: 'proprioception', it: 'propriocezione' },
      { w: 'return to training', it: 'rientro graduale' }
    ]
  });
  A('spo-allenamento-aerobico', {
    title: { t: 'Aerobic training: zones, volume and tests', it: 'Allenamento aerobico: zone, volume e test' },
    sum: [
      { t: 'Aerobic endurance depends on ⟦VO₂max⟧, the fraction of it you can sustain, and movement economy.', it: 'La resistenza aerobica dipende dal VO₂max, dalla frazione che si riesce a sostenere e dall’economia del movimento.' },
      { t: 'Intensity can be described by percent of maximum heart rate, by the ⟦Karvonen method⟧ or by ⟦RPE⟧, and the two percentages are not equivalent.', it: 'L’intensità si descrive con la percentuale della FC massima, con il metodo di Karvonen o con l’RPE, e le due percentuali non sono equivalenti.' },
      { t: 'The three-zone model is anchored to two thresholds, and fixed percentages are only averages, so measured thresholds and the ⟦talk test⟧ help.', it: 'Il modello a tre zone è ancorato a due soglie, e le percentuali fisse sono solo medie, quindi soglie misurate e talk test aiutano.' },
      { t: '⟦Polarized⟧ and ⟦pyramidal⟧ distributions both keep most training easy, and recent meta-analyses show no clear winner.', it: 'Le distribuzioni polarizzata e piramidale mantengono facile la maggior parte dell’allenamento, e le meta-analisi recenti non mostrano un chiaro vincitore.' },
      { t: 'Raise volume gradually, about 10% a week as a rule of thumb, and insert a lighter week every few weeks.', it: 'Aumenta il volume gradualmente, circa il 10% a settimana come regola empirica, e inserisci una settimana più leggera ogni poche settimane.' },
      { t: 'The ⟦Cooper test⟧ estimates VO₂max from the distance covered in 12 minutes, but it is a rough estimate best used over time.', it: 'Il test di Cooper stima il VO₂max dalla distanza percorsa in 12 minuti, ma è una stima grossolana, da usare soprattutto nel tempo.' },
      { t: 'Avoid the permanent ⟦grey zone⟧, trust no formula blindly, and stop and see a doctor if you have chest pain or other worrying symptoms.', it: 'Evita la zona grigia permanente, non fidarti ciecamente di nessuna formula, e fermati e consulta un medico se hai dolore al petto o altri sintomi preoccupanti.' }
    ],
    gloss: [
      { w: 'VO₂max', it: 'massimo consumo di ossigeno' },
      { w: 'Karvonen method', it: 'metodo della FC di riserva' },
      { w: 'RPE', it: 'percezione dello sforzo' },
      { w: 'talk test', it: 'test del parlato per stimare l’intensità' },
      { w: 'polarized', it: 'distribuzione polarizzata (molto facile e molto duro)' },
      { w: 'pyramidal', it: 'distribuzione piramidale' },
      { w: 'Cooper test', it: 'test di Cooper dei 12 minuti' },
      { w: 'grey zone', it: 'zona grigia a ritmo medio' },
      { w: 'cardiac drift', it: 'deriva cardiaca' },
      { w: 'deload week', it: 'settimana di scarico' }
    ]
  });
  A('spo-soglie-vo2max-economia', {
    title: { t: 'Thresholds, VO₂max, economy and predicting times', it: 'Soglie, VO2max, economia e previsione dei tempi' },
    sum: [
      { t: 'Endurance performance depends on three determinants: ⟦VO₂max⟧, the ⟦threshold⟧ and ⟦running economy⟧.', it: 'La prestazione di resistenza dipende da tre determinanti: VO₂max, soglia ed economia di corsa.' },
      { t: 'VO₂max alone does not predict a race, because two athletes with the same value can perform differently.', it: 'Il solo VO₂max non prevede la gara, perché due atleti con lo stesso valore possono avere prestazioni diverse.' },
      { t: 'The first threshold and the ⟦maximal lactate steady state⟧ are defined in different ways, so they must not be confused.', it: 'La prima soglia e il massimo stato stazionario del lattato sono definiti in modi diversi, quindi non vanno confusi.' },
      { t: 'Pace in min/km and speed in km/h are converted by dividing 60 by one of them.', it: 'Ritmo in min/km e velocità in km/h si convertono dividendo 60 per l’uno o per l’altra.' },
      { t: 'The ⟦ACSM equation⟧ estimates the oxygen cost of running on flat ground, and it is a population estimate.', it: 'L’equazione ACSM stima il costo in ossigeno della corsa in pianura, ed è una stima di popolazione.' },
      { t: '⟦Riegel’s formula⟧ predicts a time over another distance with an exponent of 1.06, which is an average that works best for close distances.', it: 'La formula di Riegel prevede il tempo su un’altra distanza con un esponente di 1,06, che è una media e funziona meglio per distanze vicine.' },
      { t: 'All these indices are estimates with error, so repeat tests in the same conditions and watch the trend.', it: 'Tutti questi indici sono stime con errore, quindi ripeti i test nelle stesse condizioni e guarda la tendenza.' }
    ],
    gloss: [
      { w: 'VO₂max', it: 'massimo consumo di ossigeno' },
      { w: 'threshold', it: 'soglia' },
      { w: 'running economy', it: 'economia di corsa' },
      { w: 'maximal lactate steady state', it: 'massimo stato stazionario del lattato (MLSS)' },
      { w: 'critical power', it: 'potenza critica' },
      { w: 'ACSM equation', it: 'equazione ACSM per la corsa' },
      { w: 'Riegel’s formula', it: 'formula di Riegel per prevedere i tempi' },
      { w: 'pace', it: 'ritmo (min/km)' },
      { w: 'tempo run', it: 'corsa continua a ritmo di soglia' },
      { w: 'cruise intervals', it: 'ripetute di soglia con recuperi brevi' }
    ]
  });
  A('spo-hiit-intervalli-sit', {
    title: { t: 'HIIT, intervals and SIT', it: 'HIIT, intervalli e SIT' },
    sum: [
      { t: '⟦HIIT⟧ alternates hard efforts and recovery, while ⟦sprint interval training⟧ uses all-out efforts of 20–30 s with long recoveries.', it: 'L’HIIT alterna sforzi intensi e recupero, mentre lo sprint interval training usa sforzi massimali di 20–30 s con recuperi lunghi.' },
      { t: 'Its main advantage is time efficiency, but it adds fatigue and injury risk if badly dosed, so it complements an easy aerobic base.', it: 'Il suo vantaggio principale è l’efficienza di tempo, ma aggiunge fatica e rischio di infortunio se mal dosato, quindi integra una base aerobica facile.' },
      { t: 'Classic protocols such as 30-30 and 4×4 can be compared by their total hard work and recovery time.', it: 'I protocolli classici come il 30-30 e il 4×4 si confrontano per il lavoro intenso totale e il tempo di recupero.' },
      { t: 'Short or ⟦active recovery⟧ keeps oxygen use high, while long passive recovery restores ⟦phosphocreatine⟧ and preserves intensity.', it: 'Un recupero breve o attivo mantiene alto il consumo di ossigeno, mentre un recupero lungo e passivo ripristina la fosfocreatina e preserva l’intensità.' },
      { t: 'Expected gains in ⟦VO₂max⟧ are larger in untrained people, and the ⟦individual response⟧ varies greatly, so the mean hides variability.', it: 'I guadagni attesi di VO₂max sono maggiori nei non allenati, e la risposta individuale varia molto, quindi la media nasconde la variabilità.' },
      { t: 'Most people need only 1–2 hard sessions a week, with at least 48 hours between them and the rest kept easy.', it: 'La maggior parte delle persone ha bisogno di sole 1–2 sedute intense a settimana, con almeno 48 ore tra l’una e l’altra e il resto facile.' },
      { t: 'Beginners should build an easy base first, screen for cardiovascular risk and progress one variable at a time.', it: 'I principianti devono prima costruire una base facile, valutare il rischio cardiovascolare e progredire una variabile alla volta.' }
    ],
    gloss: [
      { w: 'HIIT', it: 'allenamento intervallato ad alta intensità' },
      { w: 'sprint interval training', it: 'allenamento a sprint massimali (SIT)' },
      { w: 'phosphocreatine', it: 'fosfocreatina' },
      { w: 'VO₂max', it: 'massimo consumo di ossigeno' },
      { w: 'individual response', it: 'risposta individuale' },
      { w: 'work-to-recovery ratio', it: 'rapporto lavoro:recupero' },
      { w: 'active recovery', it: 'recupero attivo' },
      { w: 'non-responder', it: 'chi non risponde al protocollo' },
      { w: 'overreaching', it: 'sovraccarico con calo di prestazione' },
      { w: 'progression', it: 'progressione' }
    ]
  });
  A('spo-periodizzazione', {
    title: { t: 'Periodization: linear, block and undulating', it: 'Periodizzazione: lineare, a blocchi, ondulata' },
    sum: [
      { t: '⟦Periodization⟧ plans changes in load, content and goals over time to peak at the right moment and reduce stagnation.', it: 'Periodizzare significa pianificare nel tempo variazioni di carico, contenuti e obiettivi per arrivare al picco al momento giusto e ridurre la stagnazione.' },
      { t: 'The cycle hierarchy runs from the ⟦macrocycle⟧ through the ⟦mesocycle⟧ to the microcycle, which is usually one week.', it: 'La gerarchia dei cicli va dal macrociclo al mesociclo fino al microciclo, che di solito è una settimana.' },
      { t: '⟦Linear⟧ periodization lowers volume while intensity rises, which is simple and suits beginners with a single peak.', it: 'La periodizzazione lineare riduce il volume mentre l’intensità sale, ed è semplice e adatta ai principianti con un solo picco.' },
      { t: '⟦Block⟧ periodization concentrates few goals per block and relies on residual effects, and its evidence over other models is limited.', it: 'La periodizzazione a blocchi concentra pochi obiettivi per blocco e sfrutta gli effetti residui, e la sua evidenza rispetto ad altri modelli è limitata.' },
      { t: '⟦Undulating⟧ periodization varies intensity and volume every session or week, but it is not clearly superior.', it: 'La periodizzazione ondulata varia intensità e volume a ogni seduta o settimana, ma non è chiaramente superiore.' },
      { t: 'Raise volume in small steps, then take a ⟦deload⟧ week, often every 3–4 weeks, keeping frequency and part of the intensity.', it: 'Aumenta il volume a piccoli passi, poi inserisci una settimana di scarico, spesso ogni 3–4 settimane, mantenendo frequenza e parte dell’intensità.' },
      { t: 'Periodizing helps a little, but total volume, consistency and adherence matter more, so choose a plan you can follow and adjust.', it: 'Periodizzare aiuta un poco, ma contano di più volume totale, costanza e aderenza, quindi scegli un piano che sai seguire e correggere.' }
    ],
    gloss: [
      { w: 'periodization', it: 'periodizzazione' },
      { w: 'macrocycle', it: 'macrociclo, stagione o ciclo di mesi' },
      { w: 'mesocycle', it: 'mesociclo, blocco di alcune settimane' },
      { w: 'linear', it: 'lineare' },
      { w: 'block', it: 'a blocchi' },
      { w: 'undulating', it: 'ondulata, varia a ogni seduta o settimana' },
      { w: 'deload', it: 'settimana di scarico' },
      { w: 'residual effects', it: 'effetti residui' },
      { w: 'accumulation', it: 'blocco di accumulo' },
      { w: 'realization', it: 'blocco di realizzazione' }
    ]
  });
  A('spo-tapering-e-picco-di-forma', {
    title: { t: 'Tapering and peaking', it: 'Tapering e picco di forma' },
    sum: [
      { t: '⟦Tapering⟧ is a progressive reduction of training load before the main race, to remove ⟦fatigue⟧ without losing fitness.', it: 'Il tapering è una riduzione progressiva del carico prima della gara principale, per eliminare la fatica senza perdere la forma.' },
      { t: 'It works because fatigue fades in days while ⟦fitness⟧ fades in weeks, so performance rises.', it: 'Funziona perché la fatica si dissipa in giorni mentre la forma decade in settimane, quindi la prestazione sale.' },
      { t: 'A well-done taper improves performance by about 2–3% on average, with large individual differences.', it: 'Un tapering ben fatto migliora la prestazione in media di circa 2–3%, con grandi differenze individuali.' },
      { t: 'Reduce ⟦volume⟧ progressively by 41–60%, but keep intensity and frequency, for about 8–14 days.', it: 'Riduci il volume progressivamente del 41–60%, ma mantieni intensità e frequenza, per circa 8–14 giorni.' },
      { t: 'The ⟦Banister model⟧ describes performance as fitness minus fatigue, each with a different decay speed, and it is a conceptual tool only.', it: 'Il modello di Banister descrive la prestazione come forma meno fatica, ciascuna con una diversa velocità di decadimento, ed è solo uno strumento concettuale.' },
      { t: 'Choose one to three ⟦A races⟧ per year for full tapers, and avoid anything new on race day.', it: 'Scegli da una a tre gare A all’anno per un tapering completo, ed evita qualsiasi novità il giorno della gara.' },
      { t: 'Common mistakes are cutting intensity, tapering too long, hard tests just before the race, and eating as in peak weeks.', it: 'Errori comuni sono ridurre l’intensità, fare un tapering troppo lungo, test duri poco prima della gara e mangiare come nelle settimane di picco.' }
    ],
    gloss: [
      { w: 'tapering', it: 'scarico pre-gara' },
      { w: 'fitness', it: 'forma fisica (componente positiva)' },
      { w: 'fatigue', it: 'fatica (componente negativa)' },
      { w: 'volume', it: 'volume di allenamento' },
      { w: 'Banister model', it: 'modello fitness-fatica di Banister' },
      { w: 'A races', it: 'gare A, obiettivo principale' },
      { w: 'detraining', it: 'perdita di condizione per troppa inattività' },
      { w: 'peaking', it: 'raggiungere il picco di forma' },
      { w: 'decay', it: 'decadimento' },
      { w: 'mini-taper', it: 'mini-scarico per le gare B' }
    ]
  });
  A('spo-monitoraggio-del-carico', {
    title: { t: 'Load monitoring: sRPE, ACWR and HRV', it: 'Monitoraggio del carico: sRPE, ACWR, HRV' },
    sum: [
      { t: 'Monitoring checks that delivered load matches planned load, and no single indicator is enough on its own.', it: 'Il monitoraggio verifica che il carico realizzato corrisponda a quello pianificato, e nessun indicatore da solo basta.' },
      { t: '⟦Session RPE⟧ multiplies the effort rating by the duration in minutes and gives load in ⟦arbitrary units⟧.', it: 'L’RPE di sessione moltiplica la valutazione dello sforzo per la durata in minuti e dà il carico in unità arbitrarie.' },
      { t: '⟦Monotony⟧ is the daily mean divided by its standard deviation, and ⟦strain⟧ is weekly load times monotony.', it: 'La monotonia è la media giornaliera divisa per la sua deviazione standard, e lo strain è il carico settimanale per la monotonia.' },
      { t: 'The ⟦ACWR⟧ divides acute load by chronic load, and it is widely used but strongly debated.', it: 'L’ACWR divide il carico acuto per quello cronico, ed è molto usato ma fortemente discusso.' },
      { t: 'Its problems include mathematical coupling, thresholds that depend on the sample, loss of absolute load and weak causal evidence.', it: 'I suoi problemi includono l’accoppiamento matematico, soglie dipendenti dal campione, la perdita del carico assoluto e un’evidenza causale debole.' },
      { t: '⟦HRV⟧ is best read as a seven-day moving average against your usual value, not as a single noisy morning.', it: 'L’HRV si legge meglio come media mobile di sette giorni rispetto al proprio valore abituale, non come una singola mattina rumorosa.' },
      { t: 'Keep the data simple, watch trends, and decide with context instead of rigid thresholds.', it: 'Mantieni i dati semplici, osserva le tendenze e decidi con il contesto invece che con soglie rigide.' }
    ],
    gloss: [
      { w: 'session RPE', it: 'RPE di sessione × durata' },
      { w: 'monotony', it: 'monotonia del carico' },
      { w: 'strain', it: 'strain, carico × monotonia' },
      { w: 'ACWR', it: 'rapporto carico acuto/cronico' },
      { w: 'HRV', it: 'variabilità della frequenza cardiaca' },
      { w: 'arbitrary units', it: 'unità arbitrarie (AU)' },
      { w: 'internal load', it: 'carico interno' },
      { w: 'external load', it: 'carico esterno' },
      { w: 'mathematical coupling', it: 'accoppiamento matematico' },
      { w: 'questionnaire', it: 'questionario soggettivo' }
    ]
  });
  A('spo-sport-di-squadra', {
    title: { t: 'Preparing for team and intermittent sports', it: 'Preparazione per sport di squadra e intermittenti' },
    sum: [
      { t: 'Team sports are ⟦intermittent⟧: short high-intensity actions alternate with low-intensity running and pauses.', it: 'Gli sport di squadra sono intermittenti: brevi azioni ad alta intensità si alternano a corsa a bassa intensità e pause.' },
      { t: 'Players need an aerobic base, ⟦repeated sprint ability⟧, strength and power, and tolerance to load.', it: 'I giocatori hanno bisogno di una base aerobica, capacità di ripetere sprint, forza e potenza, e tolleranza al carico.' },
      { t: 'The ⟦Yo-Yo test⟧ estimates VO₂max from total distance, and the sprint decrement shows how much performance drops across repeated sprints.', it: 'Lo Yo-Yo test stima il VO₂max dalla distanza totale, e il decremento negli sprint mostra quanto cala la prestazione nelle ripetizioni.' },
      { t: 'The ⟦pre-season⟧ rebuilds the aerobic base and strength, raising load gradually, about 10% a week, with a lighter week every few weeks.', it: 'La pre-stagione ricostruisce la base aerobica e la forza, aumentando il carico gradualmente, circa il 10% a settimana, con una settimana più leggera ogni poche settimane.' },
      { t: '⟦In-season⟧, one or two short heavy strength sessions maintain strength, and the match is the biggest load of the week.', it: 'In stagione, una o due brevi sedute di forza pesante mantengono la forza, e la partita è il carico maggiore della settimana.' },
      { t: 'The ⟦match-day⟧ notation, such as MD-3, places load in the middle of the week and reduces it towards the match.', it: 'La notazione del giorno di partita, come MD-3, colloca il carico a metà settimana e lo riduce verso la partita.' },
      { t: 'Avoid sudden load spikes, neglecting strength, ignoring players who play little, and relying on a single metric.', it: 'Evita picchi improvvisi di carico, trascurare la forza, ignorare chi gioca poco e affidarsi a una sola metrica.' }
    ],
    gloss: [
      { w: 'intermittent', it: 'intermittente, azioni intense alternate a pause' },
      { w: 'repeated sprint ability', it: 'capacità di ripetere sprint (RSA)' },
      { w: 'Yo-Yo test', it: 'test Yo-Yo a recupero intermittente' },
      { w: 'pre-season', it: 'pre-stagione' },
      { w: 'in-season', it: 'in stagione' },
      { w: 'match-day', it: 'giorno di partita (MD)' },
      { w: 'compensatory session', it: 'seduta compensativa per chi gioca poco' },
      { w: 'neuromuscular programmes', it: 'programmi neuromuscolari di prevenzione' },
      { w: 'aerobic base', it: 'base aerobica' },
      { w: 'session RPE', it: 'RPE di sessione' }
    ]
  });
  A('spo-sport-di-combattimento', {
    title: { t: 'Preparing for combat and grappling sports', it: 'Preparazione per sport di combattimento e di lotta' },
    sum: [
      { t: 'Combat sports are high-intensity ⟦intermittent⟧ efforts that need ⟦anaerobic power⟧, repeated efforts and a good aerobic base.', it: 'Gli sport di combattimento sono sforzi intermittenti ad alta intensità che richiedono potenza anaerobica, sforzi ripetuti e una buona base aerobica.' },
      { t: 'A bout uses all three energy systems, and the aerobic system is decisive for recovering between efforts and between bouts.', it: 'Un incontro usa tutti e tre i sistemi energetici, e il sistema aerobico è decisivo per recuperare tra gli sforzi e tra gli incontri.' },
      { t: 'Strength, power and ⟦grip⟧ are trained with heavy lifts, fast explosive work and grip-specific exercises, introduced gradually.', it: 'Forza, potenza e presa si allenano con sollevamenti pesanti, lavoro veloce ed esplosivo ed esercizi specifici di presa, introdotti gradualmente.' },
      { t: 'The ⟦special judo fitness test⟧ gives an index from heart rate and number of throws, and a lower index means better fitness.', it: 'Il test specifico per il judo dà un indice dalla frequenza cardiaca e dal numero di proiezioni, e un indice più basso indica una forma migliore.' },
      { t: 'Extreme ⟦weight cutting⟧ by dehydration or fasting is dangerous and harms performance.', it: 'I tagli di peso estremi con disidratazione o digiuno sono pericolosi e peggiorano la prestazione.' },
      { t: 'Weight loss for a category should be gradual, planned well in advance and supervised by a sports doctor and a dietitian.', it: 'La perdita di peso per una categoria deve essere graduale, pianificata con largo anticipo e seguita da un medico dello sport e da un dietista.' },
      { t: 'Plan a tournament with a peak and a taper, limit hard ⟦sparring⟧, and stop after a blow to the head with symptoms.', it: 'Pianifica un torneo con un picco e uno scarico, limita lo sparring intenso, e fermati dopo un colpo alla testa con sintomi.' }
    ],
    gloss: [
      { w: 'intermittent', it: 'intermittente' },
      { w: 'grip', it: 'presa' },
      { w: 'special judo fitness test', it: 'test specifico di forma per il judo (SJFT)' },
      { w: 'weight cutting', it: 'taglio di peso' },
      { w: 'sparring', it: 'combattimento di allenamento' },
      { w: 'low energy availability', it: 'bassa disponibilità energetica (RED-S)' },
      { w: 'weight category', it: 'categoria di peso' },
      { w: 'anaerobic power', it: 'potenza anaerobica' },
      { w: 'tapering', it: 'scarico pre-gara' },
      { w: 'dehydration', it: 'disidratazione' }
    ]
  });
  A('spo-resistenza-potenza-racchetta', {
    title: { t: 'Endurance, power and racket sports', it: 'Sport di resistenza, di potenza e a racchetta' },
    sum: [
      { t: 'Cycling zones are set as a percentage of ⟦FTP⟧, which is estimated as 95% of the average power of a 20-minute test.', it: 'Le zone nel ciclismo si fissano come percentuale della FTP, che si stima come il 95% della potenza media di un test di 20 minuti.' },
      { t: 'In swimming the ⟦critical swim speed⟧ is estimated from two timed trials, and technique matters as much as fitness.', it: 'Nel nuoto la velocità critica si stima da due prove cronometrate, e la tecnica conta quanto la condizione.' },
      { t: '⟦Triathlon⟧ splits training among three sports, and adds ⟦brick sessions⟧, transitions and race nutrition.', it: 'Il triathlon divide l’allenamento fra tre sport, e aggiunge sedute brick, transizioni e nutrizione di gara.' },
      { t: 'Endurance seasons use a long base, then threshold and race-pace work, a taper and one or two ⟦peaking⟧ phases.', it: 'Le stagioni di resistenza usano una lunga base, poi lavoro di soglia e a ritmo gara, uno scarico e uno o due picchi.' },
      { t: 'Power sports favour quality over volume, with heavy low-repetition sets and long rests to keep the nervous system fresh.', it: 'Gli sport di potenza privilegiano la qualità sul volume, con serie pesanti a poche ripetizioni e recuperi lunghi per tenere fresco il sistema nervoso.' },
      { t: '⟦Racket sports⟧ have very short actions, so they need an aerobic base, speed, change of direction and shoulder and ankle prevention.', it: 'Gli sport a racchetta hanno azioni brevissime, quindi richiedono base aerobica, velocità, cambi di direzione e prevenzione di spalla e caviglia.' },
      { t: 'In technical-combinatorial sports, technique and ⟦relative strength⟧ dominate, and pressure on weight needs medical and dietetic supervision.', it: 'Negli sport tecnico-combinatori dominano tecnica e forza relativa, e la pressione sul peso richiede la supervisione di medico e dietista.' }
    ],
    gloss: [
      { w: 'FTP', it: 'potenza di soglia funzionale' },
      { w: 'critical swim speed', it: 'velocità critica di nuoto (CSS)' },
      { w: 'triathlon', it: 'triathlon' },
      { w: 'brick sessions', it: 'sedute brick (bici + corsa)' },
      { w: 'relative strength', it: 'forza relativa al peso corporeo' },
      { w: 'peaking', it: 'picco di forma' },
      { w: 'racket sports', it: 'sport a racchetta' },
      { w: 'work-to-rest ratio', it: 'rapporto lavoro:pausa' },
      { w: 'power-to-weight', it: 'rapporto potenza/peso' },
      { w: 'double periodization', it: 'doppia periodizzazione (indoor e outdoor)' }
    ]
  });
  A('spo-energia-e-bilancio-energetico', {
    title: { t: 'Energy and energy balance', it: 'Energia e bilancio energetico' },
    sum: [
      { t: '⟦Energy balance⟧ compares energy intake with energy expenditure, but the system is dynamic, so appetite and metabolism respond.', it: 'Il bilancio energetico confronta energia assunta e spesa, ma il sistema è dinamico, quindi appetito e metabolismo rispondono.' },
      { t: 'Total daily expenditure has four parts: basal metabolism, the thermic effect of food, exercise and non-exercise activity.', it: 'Il dispendio totale giornaliero ha quattro componenti: metabolismo basale, effetto termico del cibo, esercizio e attività non da esercizio.' },
      { t: 'The ⟦Mifflin-St Jeor⟧ equation estimates ⟦BMR⟧ from weight, height, age and sex, and it is a starting estimate, not a measurement.', it: 'L’equazione di Mifflin-St Jeor stima il BMR da peso, altezza, età e sesso, ed è una stima di partenza, non una misura.' },
      { t: 'Multiplying BMR by a ⟦physical activity level⟧ gives ⟦TDEE⟧, which people tend to overestimate and should verify over time.', it: 'Moltiplicando il BMR per un fattore di attività si ottiene il TDEE, che le persone tendono a sovrastimare e che va verificato nel tempo.' },
      { t: 'The ⟦MET⟧ method estimates an activity’s cost as MET × body weight × hours, and the result is gross, including basal metabolism.', it: 'Il metodo dei MET stima il costo di un’attività come MET × peso × ore, e il risultato è lordo, compreso il metabolismo basale.' },
      { t: 'Carbohydrate and protein give 4 kcal per gram, fat gives 9 and alcohol gives 7.', it: 'Carboidrati e proteine danno 4 kcal per grammo, i grassi 9 e l’alcol 7.' },
      { t: 'The 7700 kcal per kg rule is only a short-term approximation, because of ⟦metabolic adaptation⟧ and the loss of lean mass and water.', it: 'La regola dei 7700 kcal per kg è solo un’approssimazione a breve termine, per l’adattamento metabolico e la perdita di massa magra e acqua.' }
    ],
    gloss: [
      { w: 'energy balance', it: 'bilancio energetico' },
      { w: 'BMR', it: 'metabolismo basale' },
      { w: 'Mifflin-St Jeor', it: 'equazione predittiva del BMR' },
      { w: 'TDEE', it: 'dispendio energetico totale giornaliero' },
      { w: 'physical activity level', it: 'fattore di attività fisica (PAL)' },
      { w: 'MET', it: 'equivalente metabolico' },
      { w: 'metabolic adaptation', it: 'adattamento metabolico' },
      { w: 'thermic effect of food', it: 'effetto termico del cibo' },
      { w: 'NEAT', it: 'attività non da esercizio' },
      { w: 'kilocalorie', it: 'chilocaloria (kcal)' }
    ]
  });
  A('spo-macronutrienti', {
    title: { t: 'Macronutrients: protein, carbohydrate and fat', it: 'Macronutrienti: proteine, carboidrati, grassi' },
    sum: [
      { t: '⟦Macronutrients⟧ are recommended as ranges, in percent of energy or grams per kilogram, not as exact targets.', it: 'I macronutrienti sono raccomandati come intervalli, in percentuale dell’energia o in grammi per chilogrammo, non come obiettivi esatti.' },
      { t: 'Protein quality depends on essential ⟦amino acids⟧ and digestibility, and cereals and legumes complement each other over the day.', it: 'La qualità delle proteine dipende dagli amminoacidi essenziali e dalla digeribilità, e cereali e legumi si completano nell’arco della giornata.' },
      { t: 'The RDA for protein is 0.8 g/kg per day for healthy low-activity adults, while active people are advised 1.2–2.0 g/kg.', it: 'La RDA per le proteine è 0,8 g/kg al giorno per adulti sani poco attivi, mentre alle persone attive si consigliano 1,2–2,0 g/kg.' },
      { t: 'Carbohydrates are neither good nor bad: type, quantity and context matter, and ⟦fibre⟧ should reach at least 25 g a day.', it: 'I carboidrati non sono né buoni né cattivi: contano tipo, quantità e contesto, e le fibre dovrebbero arrivare ad almeno 25 g al giorno.' },
      { t: 'The ⟦glycaemic load⟧ equals ⟦glycaemic index⟧ times grams of carbohydrate in the portion divided by 100.', it: 'Il carico glicemico è l’indice glicemico per i grammi di carboidrati della porzione diviso 100.' },
      { t: 'Keep ⟦saturated fat⟧ below 10% of energy and trans fats to a minimum, and replace saturated fat with unsaturated fat.', it: 'Mantieni i grassi saturi sotto il 10% dell’energia e i grassi trans al minimo, e sostituisci i saturi con grassi insaturi.' },
      { t: 'Myths such as “carbohydrates make you fat” are misleading, and individual advice for disease belongs to doctors and dietitians.', it: 'Miti come «i carboidrati fanno ingrassare» sono fuorvianti, e i consigli individuali per le malattie spettano a medici e dietisti.' }
    ],
    gloss: [
      { w: 'macronutrients', it: 'macronutrienti' },
      { w: 'amino acids', it: 'amminoacidi' },
      { w: 'fibre', it: 'fibre alimentari' },
      { w: 'glycaemic load', it: 'carico glicemico' },
      { w: 'glycaemic index', it: 'indice glicemico' },
      { w: 'saturated fat', it: 'grassi saturi' },
      { w: 'omega-3', it: 'acidi grassi omega-3' },
      { w: 'trans fats', it: 'grassi trans' },
      { w: 'free sugars', it: 'zuccheri liberi' },
      { w: 'protein quality', it: 'qualità delle proteine' }
    ]
  });
  A('spo-micronutrienti-e-fibre', {
    title: { t: 'Micronutrients: deficiencies, sources and excess', it: 'Micronutrienti: carenze, fonti ed eccessi' },
    sum: [
      { t: '⟦Micronutrients⟧ are needed in small amounts, and both deficiency and excess can cause harm, so more is not better.', it: 'I micronutrienti servono in piccole quantità, e sia la carenza sia l’eccesso possono fare danni, quindi di più non è meglio.' },
      { t: 'A varied diet usually covers almost all needs, with exceptions in iron, vitamin D, vitamin B12 and ⟦iodine⟧.', it: 'Una dieta varia di solito copre quasi tutti i bisogni, con eccezioni per ferro, vitamina D, vitamina B12 e iodio.' },
      { t: '⟦Iron⟧ is essential for haemoglobin, and it should be supplemented only after tests and on medical advice, because excess accumulates.', it: 'Il ferro è essenziale per l’emoglobina, e va integrato solo dopo esami e su indicazione medica, perché l’eccesso si accumula.' },
      { t: '⟦Calcium⟧ and vitamin D support bone, and vitamin D should be measured before supplementing.', it: 'Calcio e vitamina D sostengono l’osso, e la vitamina D va misurata prima di integrare.' },
      { t: '⟦Vitamin B12⟧ occurs only in animal foods, so vegans need supplements or fortified foods.', it: 'La vitamina B12 si trova solo negli alimenti di origine animale, quindi i vegani hanno bisogno di integratori o alimenti fortificati.' },
      { t: 'Most ⟦sodium⟧ comes from processed foods, and the WHO advises less than 5 g of salt a day, with iodised salt in moderation.', it: 'La maggior parte del sodio viene dai cibi trasformati, e l’OMS consiglia meno di 5 g di sale al giorno, con sale iodato in moderazione.' },
      { t: 'Supplements are indicated for a documented deficiency or a special group, never “for safety”, and always with a doctor or dietitian.', it: 'Gli integratori sono indicati per una carenza documentata o un gruppo particolare, mai «per sicurezza», e sempre con medico o dietista.' }
    ],
    gloss: [
      { w: 'micronutrients', it: 'micronutrienti (vitamine e minerali)' },
      { w: 'iron', it: 'ferro' },
      { w: 'calcium', it: 'calcio' },
      { w: 'vitamin B12', it: 'vitamina B12' },
      { w: 'sodium', it: 'sodio' },
      { w: 'tolerable upper intake level', it: 'livello massimo tollerabile (UL)' },
      { w: 'iodine', it: 'iodio' },
      { w: 'potassium', it: 'potassio' },
      { w: 'magnesium', it: 'magnesio' },
      { w: 'at-risk groups', it: 'gruppi a rischio di carenza' }
    ]
  });
  A('spo-pattern-alimentari-e-salute', {
    title: { t: 'Dietary patterns and health', it: 'Pattern alimentari e salute' },
    sum: [
      { t: 'People eat ⟦dietary patterns⟧, not single nutrients, and overall diet quality predicts health better than any one ingredient.', it: 'Le persone mangiano pattern alimentari, non singoli nutrienti, e la qualità complessiva della dieta predice la salute meglio di qualsiasi singolo ingrediente.' },
      { t: 'The ⟦Mediterranean diet⟧ is rich in vegetables, legumes, olive oil and fish, and PREDIMED linked it to about 30% fewer cardiovascular events.', it: 'La dieta mediterranea è ricca di verdura, legumi, olio d’oliva e pesce, e PREDIMED l’ha collegata a circa il 30% in meno di eventi cardiovascolari.' },
      { t: 'The ⟦DASH diet⟧ lowers blood pressure by about 5–6 mmHg on average, and it overlaps with the Mediterranean diet.', it: 'La dieta DASH abbassa la pressione di circa 5–6 mmHg in media, e si sovrappone alla dieta mediterranea.' },
      { t: 'Vegetarian and vegan diets can be healthy at any age if well planned, with B12 supplements and care with iron, calcium and iodine.', it: 'Le diete vegetariane e vegane possono essere sane a ogni età se ben pianificate, con integrazione di B12 e attenzione a ferro, calcio e iodio.' },
      { t: '⟦Ultra-processed foods⟧ are associated with worse health, but the category is very broad and the mechanism is unclear.', it: 'Gli alimenti ultra-processati sono associati a esiti di salute peggiori, ma la categoria è molto ampia e il meccanismo non è chiaro.' },
      { t: '⟦Alcohol⟧ provides 7 kcal per gram, its risks grow with quantity, and the WHO says no level of consumption is free of risk.', it: 'L’alcol fornisce 7 kcal per grammo, i suoi rischi crescono con la quantità, e l’OMS afferma che nessun livello di consumo è privo di rischio.' },
      { t: '⟦Observational studies⟧ find associations while randomized trials support causation, and relative risk must be read with absolute risk.', it: 'Gli studi osservazionali trovano associazioni mentre i trial randomizzati sostengono la causalità, e il rischio relativo va letto con il rischio assoluto.' }
    ],
    gloss: [
      { w: 'dietary patterns', it: 'pattern alimentari' },
      { w: 'Mediterranean diet', it: 'dieta mediterranea' },
      { w: 'DASH diet', it: 'dieta per abbassare la pressione' },
      { w: 'ultra-processed foods', it: 'alimenti ultra-processati' },
      { w: 'alcohol', it: 'alcol' },
      { w: 'observational studies', it: 'studi osservazionali' },
      { w: 'confounders', it: 'fattori confondenti' },
      { w: 'cardiometabolic risk', it: 'rischio cardiometabolico' },
      { w: 'relative risk', it: 'rischio relativo' },
      { w: 'PREDIMED', it: 'studio randomizzato sulla dieta mediterranea' }
    ]
  });
  A('spo-idratazione-etichette-e-miti', {
    title: { t: 'Hydration, labels and myths', it: 'Idratazione, etichette e miti' },
    sum: [
      { t: 'Total water needs, from drinks and food, are about 2.5 L a day for men and 2.0 L for women in mild conditions.', it: 'Il fabbisogno totale di acqua, da bevande e cibo, è circa 2,5 L al giorno per gli uomini e 2,0 L per le donne in condizioni miti.' },
      { t: 'In healthy adults ⟦thirst⟧ is an effective guide, and ⟦urine colour⟧ is a rough practical indicator of hydration.', it: 'Negli adulti sani la sete è una guida efficace, e il colore dell’urina è un indicatore pratico approssimativo dell’idratazione.' },
      { t: '⟦Electrolytes⟧ do not need supplementing with a normal diet, but oral rehydration solutions help in diarrhoea or vomiting.', it: 'Gli elettroliti non vanno integrati con una dieta normale, ma le soluzioni reidratanti orali aiutano in caso di diarrea o vomito.' },
      { t: '⟦Caffeine⟧ is safe for healthy adults up to 400 mg a day and 200 mg in a single dose, with individual sensitivity.', it: 'La caffeina è sicura per gli adulti sani fino a 400 mg al giorno e 200 mg in una singola dose, con sensibilità individuale.' },
      { t: 'On a food label compare products per 100 g, then calculate the ⟦portion⟧ you really eat.', it: 'Su un’etichetta alimentare confronta i prodotti per 100 g, poi calcola la porzione che mangi davvero.' },
      { t: 'Nutrition ⟦claims⟧ have precise legal definitions, and “light” means at least 30% less of a nutrient, not necessarily low in calories.', it: 'I claim nutrizionali hanno definizioni legali precise, e «light» significa almeno il 30% in meno di un nutriente, non necessariamente pochi calorie.' },
      { t: 'Check the study type, confounders, absolute numbers and funding before believing a nutrition headline or a myth like “detox”.', it: 'Controlla tipo di studio, confondenti, numeri assoluti e finanziamento prima di credere a un titolo nutrizionale o a un mito come il «detox».' }
    ],
    gloss: [
      { w: 'thirst', it: 'sete' },
      { w: 'urine colour', it: 'colore dell’urina' },
      { w: 'electrolytes', it: 'elettroliti' },
      { w: 'caffeine', it: 'caffeina' },
      { w: 'claims', it: 'dichiarazioni nutrizionali in etichetta' },
      { w: 'nutrition label', it: 'tabella nutrizionale' },
      { w: 'portion', it: 'porzione' },
      { w: 'oral rehydration solution', it: 'soluzione reidratante orale' },
      { w: 'detox', it: 'presunta depurazione' },
      { w: 'conflict of interest', it: 'conflitto di interessi' }
    ]
  });
  A('spo-nutrizione-per-la-performance', {
    title: { t: 'Nutrition for performance', it: 'Nutrizione per la performance' },
    sum: [
      { t: 'Fuel is periodized: carbohydrate intake follows training load, and enough ⟦energy⟧ is the foundation of everything.', it: 'Il carburante è periodizzato: l’apporto di carboidrati segue il carico di allenamento, e un’energia sufficiente è la base di tutto.' },
      { t: 'Daily ⟦carbohydrate⟧ targets range from 3–5 g/kg for light training up to 8–12 g/kg for very heavy training.', it: 'Gli obiettivi giornalieri di carboidrati vanno da 3–5 g/kg per allenamenti leggeri fino a 8–12 g/kg per allenamenti molto pesanti.' },
      { t: 'During long exercise take 30–60 g per hour, and up to 90 g per hour of ⟦multiple transportable carbohydrates⟧ after 2.5 hours.', it: 'Durante esercizi lunghi assumi 30–60 g all’ora, e fino a 90 g all’ora di carboidrati multipli trasportabili oltre le 2,5 ore.' },
      { t: '⟦Carbohydrate loading⟧ uses 10–12 g/kg a day for 36–48 hours before events longer than 90 minutes.', it: 'Il carico di carboidrati usa 10–12 g/kg al giorno per 36–48 ore prima di prove più lunghe di 90 minuti.' },
      { t: 'The pre-event meal gives 1–4 g/kg of carbohydrate 1–4 hours before, low in fat and fibre, and nothing new on race day.', it: 'Il pasto pre-gara fornisce 1–4 g/kg di carboidrati nelle 1–4 ore prima, povero di grassi e fibre, e nulla di nuovo il giorno della gara.' },
      { t: 'Athletes need 1.2–2.0 g/kg of ⟦protein⟧ a day, spread over meals of about 0.25–0.3 g/kg every 3–5 hours.', it: 'Gli atleti hanno bisogno di 1,2–2,0 g/kg di proteine al giorno, distribuite in pasti di circa 0,25–0,3 g/kg ogni 3–5 ore.' },
      { t: 'For ⟦recovery⟧ after close sessions, take 1.0–1.2 g/kg of carbohydrate per hour for 4 hours, and the old 30-minute window is overstated.', it: 'Per il recupero dopo sedute ravvicinate, assumi 1,0–1,2 g/kg di carboidrati all’ora per 4 ore, e la vecchia finestra di 30 minuti è sopravvalutata.' }
    ],
    gloss: [
      { w: 'energy', it: 'energia sufficiente' },
      { w: 'carbohydrate', it: 'carboidrati' },
      { w: 'multiple transportable carbohydrates', it: 'carboidrati multipli trasportabili (glucosio + fruttosio)' },
      { w: 'carbohydrate loading', it: 'carico di carboidrati' },
      { w: 'protein', it: 'proteine' },
      { w: 'recovery', it: 'recupero' },
      { w: 'periodization', it: 'periodizzazione della nutrizione' },
      { w: 'glycogen', it: 'glicogeno' },
      { w: 'train-low', it: 'allenarsi con pochi carboidrati' },
      { w: 'leucine', it: 'leucina, amminoacido segnale' }
    ]
  });
  A('spo-idratazione-e-termoregolazione', {
    title: { t: 'Hydration and thermoregulation in sport', it: 'Idratazione e termoregolazione nello sport' },
    sum: [
      { t: 'Most of the energy used in exercise becomes heat, and the body loses it mainly by ⟦sweat⟧ evaporation.', it: 'Gran parte dell’energia usata nell’esercizio diventa calore, e il corpo lo disperde soprattutto con l’evaporazione del sudore.' },
      { t: 'Weigh yourself before and after training, and add what you drank and subtract urine, to calculate your own ⟦sweat rate⟧.', it: 'Pesati prima e dopo l’allenamento, e aggiungi ciò che hai bevuto e sottrai l’urina, per calcolare il tuo tasso di sudore.' },
      { t: 'A ⟦fluid deficit⟧ above about 2% of body weight can impair endurance in the heat, but it is a prudent reference, not a limit.', it: 'Un deficit di liquidi oltre circa il 2% del peso può peggiorare la resistenza nel caldo, ma è un riferimento prudente, non un limite.' },
      { t: 'After exercise drink about 125–150% of the deficit in small amounts, together with food that contains ⟦sodium⟧.', it: 'Dopo l’esercizio bevi circa il 125–150% del deficit in piccole dosi, insieme a cibo che contenga sodio.' },
      { t: 'Sweat sodium varies greatly between people, and losses matter mainly in long events in the heat.', it: 'Il sodio nel sudore varia molto da persona a persona, e le perdite contano soprattutto in eventi lunghi nel caldo.' },
      { t: '⟦Hyponatraemia⟧ is mainly caused by drinking more than you sweat, so drink to thirst and do not gain weight during the race.', it: 'L’iponatriemia è causata soprattutto dal bere più di quanto si suda, quindi bevi secondo la sete e non aumentare di peso durante la gara.' },
      { t: '⟦Heat acclimatization⟧ takes about 10–14 days, and heat stroke is a medical emergency that needs rapid cooling.', it: 'L’acclimatazione al caldo richiede circa 10–14 giorni, e il colpo di calore è un’emergenza medica che richiede un raffreddamento rapido.' }
    ],
    gloss: [
      { w: 'sweat', it: 'sudore' },
      { w: 'sweat rate', it: 'tasso di sudorazione' },
      { w: 'fluid deficit', it: 'deficit di liquidi' },
      { w: 'sodium', it: 'sodio' },
      { w: 'hyponatraemia', it: 'iponatriemia, sodio nel sangue troppo basso' },
      { w: 'heat acclimatization', it: 'acclimatazione al caldo' },
      { w: 'heat stroke', it: 'colpo di calore' },
      { w: 'rehydration', it: 'reidratazione' },
      { w: 'thermoregulation', it: 'termoregolazione' },
      { w: 'hydration plan', it: 'piano di idratazione' }
    ]
  });
  A('spo-integratori-e-doping', {
    title: { t: 'Evidence-based supplements and doping', it: 'Integratori con evidenza e doping' },
    sum: [
      { t: 'The ⟦IOC⟧ groups supplements by evidence level, and few have proven benefits, which are usually modest and individual.', it: 'Il CIO raggruppa gli integratori per livello di evidenza, e pochi hanno benefici dimostrati, di solito modesti e individuali.' },
      { t: 'Training, food and sleep come first, because a supplement cannot make up for mistakes in those areas.', it: 'Prima vengono allenamento, alimentazione e sonno, perché un integratore non compensa gli errori in queste aree.' },
      { t: '⟦Creatine⟧ monohydrate has the most evidence for short, high-intensity efforts, at 3–5 g a day, and some people respond little.', it: 'La creatina monoidrato ha più evidenza per sforzi brevi e ad alta intensità, a 3–5 g al giorno, e alcune persone rispondono poco.' },
      { t: '⟦Caffeine⟧ helps at 3–6 mg/kg about an hour before, but high doses exceed prudent safety limits and add side effects.', it: 'La caffeina aiuta a 3–6 mg/kg circa un’ora prima, ma le dosi alte superano i limiti prudenziali di sicurezza e aggiungono effetti collaterali.' },
      { t: 'Nitrate, beta-alanine and bicarbonate give small effects, and bicarbonate often causes stomach problems, so test it in training only.', it: 'Nitrato, beta-alanina e bicarbonato danno effetti piccoli, e il bicarbonato spesso causa disturbi gastrici, quindi si prova solo in allenamento.' },
      { t: 'Supplements can be ⟦contaminated⟧, and under ⟦strict liability⟧ the athlete is always responsible for what is in the body.', it: 'Gli integratori possono essere contaminati, e con la responsabilità oggettiva l’atleta è sempre responsabile di ciò che c’è nel suo corpo.' },
      { t: '⟦Doping⟧ violates WADA rules and carries serious health risks, so never use banned substances, and report pressure to the national anti-doping agency.', it: 'Il doping viola le norme WADA e comporta gravi rischi per la salute, quindi non usare mai sostanze vietate e segnala le pressioni all’agenzia antidoping nazionale.' }
    ],
    gloss: [
      { w: 'IOC', it: 'Comitato Olimpico Internazionale (CIO)' },
      { w: 'creatine', it: 'creatina' },
      { w: 'caffeine', it: 'caffeina' },
      { w: 'contaminated', it: 'contaminato da sostanze non dichiarate' },
      { w: 'strict liability', it: 'responsabilità oggettiva' },
      { w: 'doping', it: 'doping' },
      { w: 'WADA', it: 'agenzia mondiale antidoping' },
      { w: 'beta-alanine', it: 'beta-alanina' },
      { w: 'bicarbonate', it: 'bicarbonato di sodio' },
      { w: 'therapeutic use exemption', it: 'esenzione per uso terapeutico (TUE)' }
    ]
  });
  A('spo-peso-e-composizione-corporea', {
    title: { t: 'Weight, body composition and athlete health', it: 'Peso, composizione corporea e salute dello sportivo' },
    sum: [
      { t: 'Weight is a crude indicator, and ⟦body composition⟧ together with health, energy and performance matters more.', it: 'Il peso è un indicatore grossolano, e la composizione corporea insieme a salute, energia e prestazione conta di più.' },
      { t: 'The ⟦BMI⟧ cannot separate lean from fat mass, and ⟦skinfold⟧ estimates carry an error of several percentage points.', it: 'Il BMI non distingue massa magra da grassa, e le stime con la plicometria hanno un errore di diversi punti percentuali.' },
      { t: 'A safe rate of weight loss is about 0.25–0.75% of body weight per week, judged on the weekly average, not on a single day.', it: 'Una velocità sicura di perdita di peso è circa 0,25–0,75% del peso corporeo a settimana, valutata sulla media settimanale, non su un singolo giorno.' },
      { t: 'To keep muscle, use a moderate deficit, regular strength training and enough protein.', it: 'Per mantenere il muscolo, usa un deficit moderato, allenamento di forza regolare e proteine sufficienti.' },
      { t: 'Gaining lean mass needs progressive training, enough protein and a modest energy surplus, and a large surplus mostly adds fat.', it: 'Aumentare la massa magra richiede allenamento progressivo, proteine sufficienti e un modesto surplus energetico, e un surplus grande aggiunge soprattutto grasso.' },
      { t: '⟦Energy availability⟧ is intake minus exercise expenditure per kg of lean mass, and chronic low values cause ⟦RED-S⟧.', it: 'La disponibilità energetica è l’assunzione meno la spesa per esercizio per kg di massa magra, e valori cronicamente bassi causano la RED-S.' },
      { t: '⟦Eating disorders⟧ are illnesses that need medical help, and extreme weight cutting before competition is dangerous.', it: 'I disturbi alimentari sono malattie che richiedono aiuto medico, e il taglio estremo del peso prima di una gara è pericoloso.' }
    ],
    gloss: [
      { w: 'body composition', it: 'composizione corporea' },
      { w: 'BMI', it: 'indice di massa corporea' },
      { w: 'skinfold', it: 'plica cutanea (plicometria)' },
      { w: 'energy availability', it: 'disponibilità energetica' },
      { w: 'RED-S', it: 'deficit energetico relativo nello sport' },
      { w: 'eating disorders', it: 'disturbi dell’alimentazione' },
      { w: 'lean mass', it: 'massa magra' },
      { w: 'energy deficit', it: 'deficit energetico' },
      { w: 'weight cutting', it: 'taglio di peso' },
      { w: 'weight category', it: 'categoria di peso' }
    ]
  });
  A('spo-adv-bioenergetica-lattato', {
    title: { t: 'Advanced bioenergetics and lactate', it: 'Bioenergetica avanzata e lattato' },
    sum: [
      { t: 'Lactate is a metabolic intermediate and a fuel moved between cells and tissues, described by the ⟦lactate shuttle⟧.', it: 'Il lattato è un intermedio metabolico e un combustibile spostato fra cellule e tessuti, descritto dalla navetta del lattato.' },
      { t: 'Blood lactate does not measure production, but the balance between appearance, Ra, and ⟦clearance⟧, Rd.', it: 'Il lattato nel sangue non misura la produzione, ma l’equilibrio fra comparsa, Ra, e rimozione, Rd.' },
      { t: 'After exercise lactate decays roughly exponentially, but its return to normal says nothing about recovery of glycogen or the nervous system.', it: 'Dopo lo sforzo il lattato decade in modo circa esponenziale, ma il suo ritorno alla norma non dice nulla sul recupero di glicogeno o sistema nervoso.' },
      { t: 'The role of acidosis in fatigue is debated, and lactate is better seen as an indicator than as a poison.', it: 'Il ruolo dell’acidosi nella fatica è dibattuto, e il lattato è meglio visto come un indicatore che come un veleno.' },
      { t: 'The ⟦MLSS⟧ is the highest constant intensity with a ⟦steady state⟧ of lactate, unlike a fixed ⟦lactate threshold⟧ such as 4 mmol/L.', it: 'L’MLSS è la massima intensità costante con lattato in stato stazionario, a differenza di una soglia del lattato fissa come 4 mmol/L.' },
      { t: 'The ⟦crossover concept⟧ describes the intensity beyond which carbohydrate supplies more energy than fat, and endurance training shifts it higher.', it: 'Il concetto di crossover descrive l’intensità oltre la quale i carboidrati forniscono più energia dei grassi, e l’allenamento di resistenza lo sposta più in alto.' },
      { t: '⟦Metabolic flexibility⟧ is the ability to switch fuels, and fat oxidation values depend strongly on protocol, recent diet and sex.', it: 'La flessibilità metabolica è la capacità di cambiare combustibile, e i valori di ossidazione dei grassi dipendono molto da protocollo, dieta recente e sesso.' }
    ],
    gloss: [
      { w: 'lactate shuttle', it: 'navetta del lattato' },
      { w: 'MLSS', it: 'massimo stato stazionario del lattato' },
      { w: 'crossover concept', it: 'concetto di crossover dei substrati' },
      { w: 'metabolic flexibility', it: 'flessibilità metabolica' },
      { w: 'clearance', it: 'rimozione (MCR)' },
      { w: 'steady state', it: 'stato stazionario' },
      { w: 'FATmax', it: 'intensità di massima ossidazione dei grassi' },
      { w: 'respiratory exchange ratio', it: 'quoziente respiratorio (RER)' },
      { w: 'monocarboxylate transporters', it: 'trasportatori monocarbossilati (MCT)' },
      { w: 'lactate threshold', it: 'soglia del lattato' }
    ]
  });
  A('spo-adv-potenza-critica', {
    title: { t: 'Critical power and W′', it: 'Potenza critica e W′' },
    sum: [
      { t: 'The ⟦critical power⟧ model links constant intensity to ⟦time to exhaustion⟧ with two parameters, CP and ⟦W′⟧.', it: 'Il modello di potenza critica lega l’intensità costante al tempo di esaurimento con due parametri, CP e W′.' },
      { t: 'The core relation is P = CP + W′/t, which is a hyperbola, and W′ is a finite amount of work above CP.', it: 'La relazione di base è P = CP + W′/t, che è un’iperbole, e W′ è una quantità finita di lavoro sopra la CP.' },
      { t: 'CP and W′ can be estimated from two exhaustive trials, but small measurement errors are amplified in the estimates.', it: 'CP e W′ si possono stimare da due prove a esaurimento, ma piccoli errori di misura si amplificano nelle stime.' },
      { t: 'With three or more trials, regression gives a better estimate, and there is no single “true” value of CP.', it: 'Con tre o più prove, la regressione dà una stima migliore, e non esiste un unico valore «vero» di CP.' },
      { t: 'In running and swimming the same idea uses ⟦critical speed⟧ and D′, but the model errs at very short and very long durations.', it: 'Nella corsa e nel nuoto la stessa idea usa la velocità critica e D′, ma il modello sbaglia a durate molto brevi e molto lunghe.' },
      { t: 'CP separates the heavy and severe ⟦intensity domains⟧, and the ⟦W′ balance⟧ models fatigue as a battery that drains and recharges.', it: 'La CP separa i domini di intensità pesante e severo, e il bilancio di W′ modella la fatica come una batteria che si scarica e si ricarica.' },
      { t: 'The model describes efforts of about 2 to 20 minutes well, but W′ is not a fixed store and durability lowers CP.', it: 'Il modello descrive bene sforzi da circa 2 a 20 minuti, ma W′ non è una riserva fissa e la durabilità abbassa la CP.' }
    ],
    gloss: [
      { w: 'critical power', it: 'potenza critica (CP)' },
      { w: 'W′', it: 'quantità finita di lavoro sopra la potenza critica' },
      { w: 'critical speed', it: 'velocità critica' },
      { w: 'intensity domains', it: 'domini di intensità' },
      { w: 'W′ balance', it: 'bilancio di W′' },
      { w: 'time to exhaustion', it: 'tempo di esaurimento' },
      { w: 'three-parameter model', it: 'modello a tre parametri' },
      { w: 'durability', it: 'durabilità' },
      { w: 'regression', it: 'regressione' },
      { w: 'hyperbola', it: 'iperbole' }
    ]
  });
  A('spo-adv-cinetica-vo2-economia', {
    title: { t: 'VO₂ kinetics and energy cost', it: 'Cinetica del VO2 e costo energetico' },
    sum: [
      { t: 'At the start of exercise ⟦VO₂ kinetics⟧ rise exponentially with a time constant ⟦tau⟧, so VO₂ lags behind demand.', it: 'All’inizio dell’esercizio la cinetica del VO₂ sale in modo esponenziale con una costante di tempo tau, quindi il VO₂ è in ritardo sulla richiesta.' },
      { t: 'The ⟦oxygen deficit⟧ is the area between the final value and the curve, and a faster response reduces it.', it: 'Il deficit di ossigeno è l’area fra il valore finale e la curva, e una risposta più rapida lo riduce.' },
      { t: 'In heavy and severe exercise a ⟦slow component⟧ makes VO₂ keep rising, and its origin is probably multifactorial.', it: 'Nell’esercizio pesante e severo una componente lenta fa continuare a salire il VO₂, e la sua origine è probabilmente multifattoriale.' },
      { t: 'The ⟦Fick equation⟧ shows that VO₂max depends on oxygen transport, cardiac output and haemoglobin, and on muscle utilization.', it: 'L’equazione di Fick mostra che il VO₂max dipende dal trasporto di ossigeno, gittata cardiaca ed emoglobina, e dall’utilizzo muscolare.' },
      { t: 'Whether VO₂max is limited centrally or peripherally depends on conditions and population, and there is no single answer.', it: 'Se il VO₂max sia limitato in modo centrale o periferico dipende da condizioni e popolazione, e non c’è una risposta unica.' },
      { t: 'The ⟦cost of running⟧ per kilometre is nearly independent of speed, with about 5–10% variation between runners.', it: 'Il costo della corsa per chilometro è quasi indipendente dalla velocità, con una variazione di circa 5–10% fra corridori.' },
      { t: 'Velocity at VO₂max equals VO₂max times 60 divided by cost, so a more economical runner is faster at the same VO₂max.', it: 'La velocità a VO₂max è il VO₂max per 60 diviso il costo, quindi un corridore più economico è più veloce a parità di VO₂max.' }
    ],
    gloss: [
      { w: 'VO₂ kinetics', it: 'cinetica del VO₂' },
      { w: 'tau', it: 'costante di tempo della risposta' },
      { w: 'oxygen deficit', it: 'deficit di ossigeno' },
      { w: 'slow component', it: 'componente lenta del VO₂' },
      { w: 'Fick equation', it: 'equazione di Fick' },
      { w: 'cost of running', it: 'costo energetico della corsa' },
      { w: 'running economy', it: 'economia di corsa' },
      { w: 'velocity at VO₂max', it: 'velocità a VO₂max' },
      { w: 'VO₂peak', it: 'picco di VO₂ osservato nel test' },
      { w: 'cardiac output', it: 'gittata cardiaca' }
    ]
  });
  A('spo-adv-segnali-molecolari', {
    title: { t: 'Molecular signals of adaptation', it: 'Segnali molecolari dell’adattamento' },
    sum: [
      { t: 'Each training session creates mechanical, metabolic and hormonal signals that activate pathways regulating gene expression and protein synthesis.', it: 'Ogni seduta di allenamento genera segnali meccanici, metabolici e ormonali che attivano vie che regolano l’espressione genica e la sintesi proteica.' },
      { t: '⟦mTORC1⟧ integrates amino acids, insulin and mechanical stimuli to raise protein synthesis, but acute signals predict long-term growth only weakly.', it: 'mTORC1 integra aminoacidi, insulina e stimoli meccanici per aumentare la sintesi proteica, ma i segnali acuti predicono la crescita a lungo termine solo debolmente.' },
      { t: '⟦AMPK⟧ senses low cellular energy and promotes glucose uptake, fat oxidation and mitochondrial biogenesis.', it: 'L’AMPK rileva la bassa energia cellulare e promuove l’assorbimento di glucosio, l’ossidazione dei grassi e la biogenesi mitocondriale.' },
      { t: '⟦PGC-1α⟧ coordinates mitochondrial biogenesis, but it is important rather than the only switch.', it: 'PGC-1α coordina la biogenesi mitocondriale, ma è importante e non l’unico interruttore.' },
      { t: 'Net ⟦muscle protein balance⟧ is synthesis minus breakdown, and the link between acute synthesis and later growth is weak.', it: 'Il bilancio proteico muscolare netto è sintesi meno degradazione, e il legame fra sintesi acuta e crescita successiva è debole.' },
      { t: 'Under the ⟦myonuclear domain⟧ idea, fibres may need new nuclei to grow, and retained nuclei may explain muscle memory, but this is uncertain.', it: 'Secondo l’idea del dominio mionucleare, le fibre possono richiedere nuovi nuclei per crescere, e i nuclei conservati possono spiegare la memoria muscolare, ma è incerto.' },
      { t: 'The ⟦interference effect⟧ in concurrent training is small for strength and larger for power, and fatigue and nutrition probably matter more than AMPK.', it: 'L’effetto interferenza nell’allenamento concorrente è piccolo per la forza e maggiore per la potenza, e fatica e nutrizione contano probabilmente più dell’AMPK.' }
    ],
    gloss: [
      { w: 'mTORC1', it: 'complesso regolatore della sintesi proteica' },
      { w: 'AMPK', it: 'sensore del calo di energia cellulare' },
      { w: 'PGC-1α', it: 'coattivatore della biogenesi mitocondriale' },
      { w: 'muscle protein balance', it: 'bilancio proteico muscolare netto' },
      { w: 'myonuclear domain', it: 'dominio mionucleare' },
      { w: 'interference effect', it: 'effetto interferenza' },
      { w: 'satellite cells', it: 'cellule satelliti' },
      { w: 'concurrent training', it: 'allenamento concorrente' },
      { w: 'muscle memory', it: 'memoria muscolare' },
      { w: 'mitochondrial biogenesis', it: 'biogenesi mitocondriale' }
    ]
  });
  A('spo-adv-neuromuscolare-tendine', {
    title: { t: 'Advanced neuromuscular function and the tendon', it: 'Neuromuscolare avanzato e tendine' },
    sum: [
      { t: 'Force is modulated by recruitment following the size principle and by ⟦rate coding⟧, and the values are orders of magnitude.', it: 'La forza è modulata dal reclutamento secondo il principio della dimensione e dalla codifica in frequenza, e i valori sono ordini di grandezza.' },
      { t: '⟦Voluntary activation⟧ is quantified with twitch interpolation, comparing a superimposed twitch with the resting twitch.', it: 'L’attivazione volontaria si quantifica con la twitch interpolation, confrontando una scossa sovrapposta con la scossa a riposo.' },
      { t: 'Central fatigue arises in the spinal cord or the cortex, and models such as the “central governor” remain controversial.', it: 'La fatica centrale nasce nel midollo spinale o nella corteccia, e modelli come il «governatore centrale» restano controversi.' },
      { t: '⟦EMG decomposition⟧ reconstructs the firing of single motor units, but its sample is partial and biased.', it: 'La decomposizione dell’EMG ricostruisce la scarica delle singole unità motorie, ma il suo campione è parziale e distorto.' },
      { t: '⟦Hill’s equation⟧ gives a hyperbolic force-velocity curve with maximal power at about a third of maximal force and velocity.', it: 'L’equazione di Hill dà una curva iperbolica forza-velocità con potenza massima a circa un terzo della forza e della velocità massime.' },
      { t: 'In the extended model the ⟦series elastic element⟧ lets fascicles shorten slowly while the tendon stores and returns energy.', it: 'Nel modello esteso l’elemento elastico in serie permette ai fascicoli di accorciarsi lentamente mentre il tendine immagazzina e restituisce energia.' },
      { t: 'Vertical ⟦stiffness⟧ in running is force divided by centre-of-mass displacement, and its links to economy and injury are inconsistent.', it: 'La stiffness verticale nella corsa è la forza divisa per lo spostamento del baricentro, e i suoi legami con economia e infortuni sono incoerenti.' }
    ],
    gloss: [
      { w: 'rate coding', it: 'codifica in frequenza' },
      { w: 'voluntary activation', it: 'attivazione volontaria' },
      { w: 'EMG decomposition', it: 'decomposizione del segnale elettromiografico' },
      { w: 'Hill’s equation', it: 'equazione di Hill forza-velocità' },
      { w: 'series elastic element', it: 'elemento elastico in serie (tendine)' },
      { w: 'stiffness', it: 'rigidità' },
      { w: 'twitch interpolation', it: 'interpolazione della scossa' },
      { w: 'stretch reflex', it: 'riflesso da stiramento' },
      { w: 'proprioception', it: 'propriocezione' },
      { w: 'central governor', it: 'governatore centrale (ipotesi)' }
    ]
  });
  A('spo-adv-ambienti-estremi', {
    title: { t: 'Altitude, heat and cold', it: 'Altitudine, caldo e freddo' },
    sum: [
      { t: 'At altitude the oxygen fraction stays the same, but barometric pressure falls, so the ⟦partial pressure of oxygen⟧ drops.', it: 'In quota la frazione di ossigeno resta uguale, ma la pressione barometrica cala, quindi cala la pressione parziale di ossigeno.' },
      { t: 'VO₂max falls by roughly 6–9% per 1000 m above about 1000–1500 m, and the estimate is only an order of magnitude.', it: 'Il VO₂max cala di circa 6–9% per 1000 m sopra circa 1000–1500 m, e la stima è solo un ordine di grandezza.' },
      { t: '⟦Acclimatization⟧ raises ventilation and EPO within hours, and haemoglobin mass by about 1% per 100 hours of exposure.', it: 'L’acclimatazione aumenta ventilazione ed EPO nel giro di ore, e la massa di emoglobina di circa 1% ogni 100 ore di esposizione.' },
      { t: '⟦Live high, train low⟧ means living at moderate altitude to stimulate red cell production while training lower to keep intensity.', it: 'Live high, train low significa vivere a quota moderata per stimolare la produzione di globuli rossi allenandosi più in basso per mantenere l’intensità.' },
      { t: 'A high ⟦haematocrit⟧ raises blood viscosity and the risk of thrombosis, and using EPO or transfusions for sport is doping.', it: 'Un ematocrito alto aumenta la viscosità del sangue e il rischio di trombosi, e usare EPO o trasfusioni per lo sport è doping.' },
      { t: 'In exercise almost all metabolic power becomes heat, so the ⟦heat balance⟧ depends on evaporation of sweat.', it: 'Nell’esercizio quasi tutta la potenza metabolica diventa calore, quindi il bilancio termico dipende dall’evaporazione del sudore.' },
      { t: 'Heat acclimatization takes about 10–14 days, and ⟦exertional heat stroke⟧ is a medical emergency needing rapid cooling.', it: 'L’acclimatazione al caldo richiede circa 10–14 giorni, e il colpo di calore da sforzo è un’emergenza medica che richiede un raffreddamento rapido.' }
    ],
    gloss: [
      { w: 'partial pressure of oxygen', it: 'pressione parziale di ossigeno' },
      { w: 'acclimatization', it: 'acclimatazione' },
      { w: 'live high, train low', it: 'vivere in quota e allenarsi più in basso' },
      { w: 'haematocrit', it: 'ematocrito' },
      { w: 'heat balance', it: 'bilancio termico' },
      { w: 'exertional heat stroke', it: 'colpo di calore da sforzo' },
      { w: 'EPO', it: 'eritropoietina' },
      { w: 'acute mountain sickness', it: 'mal di montagna acuto' },
      { w: 'haemoglobin mass', it: 'massa di emoglobina' },
      { w: 'cold shock', it: 'shock da freddo' }
    ]
  });
  A('spo-adv-differenze-individuali', {
    title: { t: 'Individual differences and genetics', it: 'Differenze individuali e genetica' },
    sum: [
      { t: 'Performance is ⟦polygenic⟧, and ⟦heritability⟧ describes variation in a population, not how “genetic” one person’s value is.', it: 'La prestazione è poligenica, e l’ereditabilità descrive la variabilità in una popolazione, non quanto sia «genetico» il valore di una persona.' },
      { t: 'The ⟦Hardy-Weinberg law⟧ gives genotype frequencies, as with ACTN3 R577X, but such variants explain only a small part of performance.', it: 'La legge di Hardy-Weinberg dà le frequenze dei genotipi, come per ACTN3 R577X, ma queste varianti spiegano solo una piccola parte della prestazione.' },
      { t: '⟦Candidate gene⟧ studies often fail to replicate because of small samples, multiple tests and population stratification.', it: 'Gli studi sui geni candidati spesso non si replicano a causa di campioni piccoli, test multipli e stratificazione della popolazione.' },
      { t: 'Because the ⟦base rate⟧ of elite athletes is tiny, ⟦Bayes’ theorem⟧ shows that genetic talent tests have negligible predictive value.', it: 'Poiché la probabilità di base di essere un atleta d’élite è minima, il teorema di Bayes mostra che i test genetici del talento hanno un valore predittivo trascurabile.' },
      { t: 'Much of the spread between ⟦responders⟧ and “non-responders” is ⟦measurement error⟧, which a control group helps to separate from true individual response.', it: 'Gran parte della dispersione fra «⟦responder⟧» e «non-responder» è errore di misura, che un gruppo di controllo aiuta a separare dalla vera risposta individuale.' },
      { t: 'The HERITAGE study showed a very wide range of ⟦trainability⟧, and part of the response is familial.', it: 'Lo studio HERITAGE ha mostrato un intervallo molto ampio di allenabilità, e parte della risposta è familiare.' },
      { t: 'Sex and age shift average values, but variation within each group is larger, and epigenetic markers have no validated predictive value.', it: 'Sesso ed età spostano i valori medi, ma la variabilità dentro ogni gruppo è maggiore, e i marcatori epigenetici non hanno un valore predittivo validato.' }
    ],
    gloss: [
      { w: 'heritability', it: 'ereditabilità' },
      { w: 'Hardy-Weinberg law', it: 'legge di Hardy-Weinberg' },
      { w: 'candidate gene', it: 'gene candidato' },
      { w: 'Bayes’ theorem', it: 'teorema di Bayes' },
      { w: 'measurement error', it: 'errore di misura' },
      { w: 'trainability', it: 'allenabilità' },
      { w: 'epigenetics', it: 'epigenetica' },
      { w: 'responders', it: 'chi risponde al programma' },
      { w: 'base rate', it: 'probabilità di base' },
      { w: 'polygenic', it: 'poligenico, dovuto a molte varianti' }
    ]
  });
  A('spo-adv-vbt', {
    title: { t: 'Velocity-based training', it: 'Allenamento basato sulla velocità (VBT)' },
    sum: [
      { t: 'Bar velocity reflects today’s readiness, and ⟦velocity-based training⟧ uses it to set load, estimate 1RM and stop sets.', it: 'La velocità del bilanciere riflette la prontezza di oggi, e l’allenamento basato sulla velocità la usa per fissare il carico, stimare la 1RM e fermare le serie.' },
      { t: 'Velocity falls almost linearly with load within a person, and the ⟦mean propulsive velocity⟧ is the most common measure.', it: 'La velocità cala in modo quasi lineare con il carico nella stessa persona, e la velocità media propulsiva è la misura più comune.' },
      { t: 'The ⟦minimal velocity threshold⟧ is the speed of the last successful ⟦repetition⟧, and it allows a 1RM estimate by extrapolation.', it: 'La velocità minima di soglia è la velocità dell’ultima ripetizione riuscita, e permette di stimare la 1RM per estrapolazione.' },
      { t: 'The velocity of the first repetition lets you adjust the daily load, instead of trusting an old 1RM.', it: 'La velocità della prima ripetizione permette di correggere il carico del giorno, invece di fidarsi di una vecchia 1RM.' },
      { t: '⟦Velocity loss⟧ is a stopping criterion: lower thresholds leave more repetitions in reserve and cause less fatigue.', it: 'La perdita di velocità è un criterio di arresto: soglie più basse lasciano più ripetizioni di scorta e causano meno fatica.' },
      { t: 'VBT is objective but needs a device, whereas RPE and ⟦RIR⟧ are free but less accurate in long sets.', it: 'La VBT è oggettiva ma richiede un dispositivo, mentre RPE e RIR sono gratuiti ma meno accurati nelle serie lunghe.' },
      { t: 'Device error, the choice of MVT and non-universal thresholds limit precision, and for beginners VBT is often unnecessary.', it: 'L’errore dei dispositivi, la scelta dell’MVT e soglie non universali limitano la precisione, e per i principianti la VBT è spesso superflua.' }
    ],
    gloss: [
      { w: 'velocity-based training', it: 'allenamento basato sulla velocità' },
      { w: 'mean propulsive velocity', it: 'velocità media propulsiva (MPV)' },
      { w: 'minimal velocity threshold', it: 'velocità minima di soglia (MVT)' },
      { w: 'velocity loss', it: 'perdita di velocità nella serie' },
      { w: 'load-velocity relationship', it: 'relazione carico-velocità' },
      { w: 'autoregulation', it: 'autoregolazione del carico' },
      { w: 'RIR', it: 'ripetizioni di scorta' },
      { w: 'encoder', it: 'trasduttore di posizione' },
      { w: 'repetition', it: 'ripetizione' },
      { w: 'intent', it: 'intenzione di massima velocità' }
    ]
  });
  A('spo-adv-profilo-fv', {
    title: { t: 'The force-velocity profile', it: 'Profilo forza-velocità' },
    sum: [
      { t: 'In ballistic movements the system’s force-velocity relation is approximately linear, defined by ⟦F0⟧ and ⟦V0⟧.', it: 'Nei movimenti balistici la relazione forza-velocità del sistema è approssimativamente lineare, definita da F0 e V0.' },
      { t: '⟦Maximal power⟧ equals F0 times V0 divided by 4, and the slope ⟦Sfv⟧ shows whether the profile is force-oriented or velocity-oriented.', it: 'La potenza massima è F0 per V0 diviso 4, e la pendenza Sfv mostra se il profilo è orientato alla forza o alla velocità.' },
      { t: 'The ⟦Samozino method⟧ builds the jump profile from body mass, jump height and push-off distance, using loaded jumps.', it: 'Il metodo di Samozino costruisce il profilo del salto da massa corporea, altezza di salto e distanza di spinta, usando salti con carico.' },
      { t: 'The ⟦F-V imbalance⟧ compares the actual slope with an optimal slope, but a small deficit can be within measurement noise.', it: 'Lo squilibrio F-V confronta la pendenza reale con una pendenza ottimale, ma un piccolo deficit può rientrare nel rumore di misura.' },
      { t: 'In sprinting, a single sprint fitted with an exponential gives maximal velocity, a time constant and the horizontal profile.', it: 'Nello sprint, un singolo scatto adattato a un’esponenziale dà velocità massima, costante di tempo e profilo orizzontale.' },
      { t: 'Two athletes with the same maximal power can have different profiles, so the profile adds information beyond power.', it: 'Due atleti con la stessa potenza massima possono avere profili diversi, quindi il profilo aggiunge informazione oltre la potenza.' },
      { t: 'Use the profile to orient emphasis, remeasure after some weeks, and remember that F0 and V0 are noisy extrapolations, not a verdict on talent.', it: 'Usa il profilo per orientare l’enfasi, rimisura dopo alcune settimane, e ricorda che F0 e V0 sono estrapolazioni rumorose, non un verdetto sul talento.' }
    ],
    gloss: [
      { w: 'F0', it: 'forza massima teorica a velocità zero' },
      { w: 'V0', it: 'velocità massima teorica a forza zero' },
      { w: 'Sfv', it: 'pendenza del profilo forza-velocità' },
      { w: 'Samozino method', it: 'metodo di Samozino per i salti' },
      { w: 'F-V imbalance', it: 'squilibrio forza-velocità' },
      { w: 'maximal power', it: 'potenza massima (Pmax)' },
      { w: 'push-off distance', it: 'distanza di spinta' },
      { w: 'time constant', it: 'costante di tempo' },
      { w: 'optimal profile', it: 'profilo ottimale' },
      { w: 'ballistic', it: 'balistico' }
    ]
  });
  A('spo-adv-programmazione', {
    title: { t: 'Advanced strength programming', it: 'Programmazione avanzata della forza' },
    sum: [
      { t: 'A ⟦programming model⟧ distributes volume, intensity, specificity and recovery over time, and it creates no adaptation by itself.', it: 'Un modello di programmazione distribuisce nel tempo volume, intensità, specificità e recupero, e non crea adattamenti da solo.' },
      { t: 'At equal volume and intensity, differences between linear, undulating and block models in strength gains are often small.', it: 'A parità di volume e intensità, le differenze nei guadagni di forza fra modelli lineare, ondulato e a blocchi sono spesso piccole.' },
      { t: '⟦Block periodization⟧ moves from accumulation to transformation and realization, and relies on ⟦residual effects⟧.', it: 'La periodizzazione a blocchi passa da accumulo a trasformazione e realizzazione, e sfrutta gli effetti residui.' },
      { t: 'The ⟦conjugate system⟧ combines maximal effort, dynamic effort and repetition effort, but strong controlled evidence is missing.', it: 'Il sistema coniugato combina sforzo massimale, sforzo dinamico e sforzo ripetuto, ma mancano prove controllate solide.' },
      { t: '⟦PAPE⟧ can briefly improve performance after a heavy conditioning set, with a small effect, about 3–10 minutes later, mostly in stronger athletes.', it: 'La PAPE può migliorare brevemente la prestazione dopo una serie di condizionamento pesante, con un effetto piccolo, circa 3–10 minuti dopo, soprattutto negli atleti più forti.' },
      { t: 'Choose a model by level, sport, calendar and available time, because a simple plan followed consistently beats a perfect plan followed half the time.', it: 'Scegli un modello in base a livello, sport, calendario e tempo disponibile, perché un piano semplice seguito con costanza batte un piano perfetto seguito a metà.' },
      { t: 'Most failures come from ⟦adherence⟧ and implementation errors, such as overambitious plans, changing model too often and ignoring sport fatigue.', it: 'La maggior parte dei fallimenti viene dall’aderenza e da errori di implementazione, come piani troppo ambiziosi, cambi di modello troppo frequenti e fatica sportiva ignorata.' }
    ],
    gloss: [
      { w: 'programming model', it: 'modello di programmazione' },
      { w: 'block periodization', it: 'periodizzazione a blocchi' },
      { w: 'conjugate system', it: 'sistema coniugato (Westside-like)' },
      { w: 'PAPE', it: 'miglioramento della prestazione post-attivazione' },
      { w: 'adherence', it: 'aderenza al programma' },
      { w: 'residual effects', it: 'effetti residui' },
      { w: 'undulating', it: 'ondulato' },
      { w: 'autoregulation', it: 'autoregolazione' },
      { w: 'dynamic effort', it: 'sforzo dinamico a velocità massima' },
      { w: 'deload', it: 'settimana di scarico' }
    ]
  });
  A('spo-adv-tendine-rigidita', {
    title: { t: 'Tendon and stiffness', it: 'Tendine e rigidità' },
    sum: [
      { t: 'The tendon behaves like a viscoelastic spring that stores and returns energy, described by ⟦stiffness⟧, stress, strain and ⟦Young’s modulus⟧.', it: 'Il tendine si comporta come una molla viscoelastica che immagazzina e restituisce energia, descritta da stiffness, stress, strain e modulo di Young.' },
      { t: 'Tendons adapt to load more slowly than muscle, which can create a mismatch when training load rises quickly.', it: 'I tendini si adattano al carico più lentamente del muscolo, il che può creare un disallineamento quando il carico sale in fretta.' },
      { t: '⟦Isometric⟧ holds and ⟦heavy slow resistance⟧ are common protocols, and progressive sufficient load matters more than the exact method.', it: 'Le contrazioni isometriche e il lento pesante sono protocolli comuni, e un carico progressivo e sufficiente conta più del metodo esatto.' },
      { t: 'The link between stiffness and economy has an inverted-U shape, so stiffness should be matched to the task, not maximised.', it: 'Il legame fra stiffness ed economia ha forma a U rovesciata, quindi la stiffness va adattata al compito, non massimizzata.' },
      { t: 'A short stretch-shortening cycle has ground contact under about 250 ms, and the ⟦reactive strength index⟧ helps choose drop height.', it: 'Un ciclo stiramento-accorciamento breve ha un contatto a terra sotto circa 250 ms, e l’indice di forza reattiva aiuta a scegliere l’altezza di caduta.' },
      { t: 'Advanced plyometrics progress from low to high impact, controlling ground contacts, quality and recovery.', it: 'La pliometria avanzata progredisce da basso ad alto impatto, controllando contatti a terra, qualità e recupero.' },
      { t: '⟦Tendinopathy⟧ is an overload condition, often linked to sudden load spikes, and persistent pain needs a health professional.', it: 'La tendinopatia è una condizione da sovraccarico, spesso legata a picchi improvvisi di carico, e il dolore persistente richiede un professionista sanitario.' }
    ],
    gloss: [
      { w: 'stiffness', it: 'rigidità' },
      { w: 'isometric', it: 'isometrico' },
      { w: 'heavy slow resistance', it: 'allenamento lento e pesante (HSR)' },
      { w: 'reactive strength index', it: 'indice di forza reattiva (RSI)' },
      { w: 'tendinopathy', it: 'tendinopatia' },
      { w: 'Young’s modulus', it: 'modulo di Young' },
      { w: 'stress', it: 'sollecitazione (forza per sezione)' },
      { w: 'strain', it: 'deformazione' },
      { w: 'ground contacts', it: 'contatti al suolo' },
      { w: 'viscoelastic', it: 'viscoelastico' }
    ]
  });
  A('spo-adv-eccentrico-accomodante', {
    title: { t: 'Eccentric, accommodating loads and BFR', it: 'Eccentrico, carichi accomodanti e BFR' },
    sum: [
      { t: '⟦Eccentric⟧ strength is greater than concentric strength, and eccentric work causes more soreness, especially the first time.', it: 'La forza eccentrica è maggiore di quella concentrica, e il lavoro eccentrico causa più dolenzia, soprattutto la prima volta.' },
      { t: '⟦Supramaximal⟧ eccentric loads of about 105–120% of the concentric 1RM need assistance, gradual progression and no training to failure.', it: 'I carichi eccentrici sovramassimali di circa 105–120% della 1RM concentrica richiedono assistenza, progressione graduale e nessun allenamento al cedimento.' },
      { t: 'The ⟦flywheel⟧ gives resistance proportional to acceleration, and eccentric overload depends on braking technique.', it: 'Il volano dà una resistenza proporzionale all’accelerazione, e il sovraccarico eccentrico dipende dalla tecnica di frenata.' },
      { t: '⟦Chains⟧ and ⟦bands⟧ add resistance toward the end of the movement, but their effects on strength are modest or uncertain.', it: 'Catene e bande aggiungono resistenza verso la fine del movimento, ma i loro effetti sulla forza sono modesti o incerti.' },
      { t: 'Functional isometrics train a specific joint angle and are useful for testing and weak points, with limited transfer to dynamic movements.', it: 'Gli isometrici funzionali allenano un angolo articolare specifico e sono utili per i test e i punti deboli, con trasferimento limitato ai movimenti dinamici.' },
      { t: '⟦Blood flow restriction⟧ uses low loads, about 20–30% of 1RM, with a cuff to raise hypertrophy and strength beyond low loads alone.', it: 'La restrizione del flusso usa carichi bassi, circa 20–30% della 1RM, con una cuffia per aumentare ipertrofia e forza oltre i soli carichi bassi.' },
      { t: 'BFR needs medical screening and contraindications are important, so it is a tool for specific contexts, not a shortcut.', it: 'La BFR richiede uno screening medico e le controindicazioni sono importanti, quindi è uno strumento per contesti specifici, non una scorciatoia.' }
    ],
    gloss: [
      { w: 'eccentric', it: 'eccentrico, il muscolo si allunga' },
      { w: 'supramaximal', it: 'sovramassimale, oltre la 1RM concentrica' },
      { w: 'flywheel', it: 'volano a inerzia' },
      { w: 'chains', it: 'catene come carico accomodante' },
      { w: 'bands', it: 'bande elastiche' },
      { w: 'blood flow restriction', it: 'restrizione del flusso sanguigno (BFR)' },
      { w: 'isometric mid-thigh pull', it: 'tirata isometrica a metà coscia (IMTP)' },
      { w: 'repeated bout effect', it: 'effetto protettivo della ripetizione' },
      { w: 'arterial occlusion pressure', it: 'pressione di occlusione arteriosa' },
      { w: 'contraindications', it: 'controindicazioni' }
    ]
  });
  A('spo-adv-ipertrofia-avanzata', {
    title: { t: 'Advanced hypertrophy', it: 'Ipertrofia avanzata' },
    sum: [
      { t: 'More weekly sets generally give more hypertrophy, with ⟦diminishing returns⟧, and the right volume differs by person and muscle.', it: 'Più serie settimanali di solito danno più ipertrofia, con rendimenti decrescenti, e il volume giusto varia da persona a persona e da muscolo a muscolo.' },
      { t: '⟦MEV⟧, MAV and ⟦MRV⟧ are individual volume landmarks, a heuristic and not a law, because no validated individual measure exists.', it: 'MEV, MAV e MRV sono punti di riferimento individuali di volume, un’euristica e non una legge, perché non esiste una misura individuale validata.' },
      { t: 'Sets taken to 0–3 repetitions in reserve produce similar growth, so training to ⟦failure⟧ is not necessary.', it: 'Le serie portate a 0–3 ripetizioni di scorta producono una crescita simile, quindi allenarsi a cedimento non è necessario.' },
      { t: 'When sets are close to failure, light and heavy loads give similar hypertrophy, but heavy loads win for maximal strength.', it: 'Quando le serie sono vicine al cedimento, carichi leggeri e pesanti danno ipertrofia simile, ma i carichi pesanti vincono per la forza massimale.' },
      { t: 'Training at long ⟦muscle length⟧ may add growth in some muscles, but studies are short and the evidence is mixed.', it: 'Allenarsi a lunghezza muscolare maggiore può aggiungere crescita in alcuni muscoli, ma gli studi sono brevi e l’evidenza è contrastante.' },
      { t: 'Recovery cost rises with proximity to failure, so spread volume across sessions and plan a ⟦deload⟧ when signals worsen.', it: 'Il costo di recupero cresce con la vicinanza al cedimento, quindi distribuisci il volume su più sedute e pianifica uno scarico quando i segnali peggiorano.' },
      { t: 'Protein of about 1.6 g/kg and a modest energy surplus support growth, while the sarcoplasmic versus myofibrillar idea is unproven.', it: 'Circa 1,6 g/kg di proteine e un modesto surplus energetico sostengono la crescita, mentre l’idea sarcoplasmatica contro miofibrillare non è dimostrata.' }
    ],
    gloss: [
      { w: 'diminishing returns', it: 'rendimenti decrescenti' },
      { w: 'MEV', it: 'volume minimo efficace' },
      { w: 'failure', it: 'cedimento muscolare' },
      { w: 'muscle length', it: 'lunghezza muscolare' },
      { w: 'deload', it: 'settimana di scarico' },
      { w: 'MRV', it: 'volume massimo recuperabile' },
      { w: 'stimulus-to-fatigue ratio', it: 'rapporto stimolo/fatica' },
      { w: 'repetitions in reserve', it: 'ripetizioni di scorta' },
      { w: 'surplus', it: 'surplus energetico' },
      { w: 'indirect sets', it: 'serie indirette' }
    ]
  });
  A('spo-adv-forza-per-sport', {
    title: { t: 'Strength and power for sport', it: 'Forza e potenza per lo sport' },
    sum: [
      { t: 'Gym strength ⟦transfers⟧ to sport only if it raises a limiting capacity and carries over to the movement.', it: 'La forza in sala si trasferisce allo sport solo se aumenta una capacità limitante e passa nel gesto.' },
      { t: 'Maximal strength matters most for athletes with low starting strength, and gains matter less above a certain level.', it: 'La forza massimale conta di più per gli atleti con bassa forza di partenza, e i guadagni contano meno oltre un certo livello.' },
      { t: 'A ⟦test battery⟧ shows strengths and weaknesses, and a change counts only if it exceeds the ⟦typical error⟧ and the ⟦smallest worthwhile change⟧.', it: 'Una batteria di test mostra punti forti e deboli, e un cambiamento conta solo se supera l’errore tipico e la minima variazione rilevante.' },
      { t: 'In-season, strength can be maintained with about a third of the volume if intensity stays high.', it: 'In stagione la forza si può mantenere con circa un terzo del volume se l’intensità resta alta.' },
      { t: 'Combining strength and endurance can cause ⟦interference⟧, mostly for power, and separating hard sessions reduces it.', it: 'Combinare forza e resistenza può causare interferenza, soprattutto sulla potenza, e separare le sedute dure la riduce.' },
      { t: 'Combat sports value relative strength and grip, and team sports value acceleration, deceleration, jumps and contact.', it: 'Gli sport di combattimento valorizzano forza relativa e presa, e gli sport di squadra accelerazione, decelerazione, salti e contatti.' },
      { t: 'Load models such as ⟦sRPE⟧ and the acute:chronic ratio describe change, and they should not be used as rigid traffic lights.', it: 'Modelli di carico come sRPE e il rapporto acuto:cronico descrivono il cambiamento, e non vanno usati come semafori rigidi.' }
    ],
    gloss: [
      { w: 'transfers', it: 'si trasferisce alla prestazione' },
      { w: 'test battery', it: 'batteria di test' },
      { w: 'smallest worthwhile change', it: 'minima variazione rilevante (SWC)' },
      { w: 'interference', it: 'interferenza fra forza e resistenza' },
      { w: 'sRPE', it: 'RPE di sessione × durata' },
      { w: 'typical error', it: 'errore tipico' },
      { w: 'relative strength', it: 'forza relativa al peso corporeo' },
      { w: 'in-season', it: 'in stagione agonistica' },
      { w: 'match day', it: 'giorno di partita' },
      { w: 'eccentric', it: 'eccentrico' }
    ]
  });
  A('spo-adv-modellazione-del-carico', {
    title: { t: 'Load modelling: TRIMP, fitness-fatigue and CTL/ATL/TSB', it: 'Modellazione del carico: TRIMP, fitness-fatica, CTL/ATL/TSB' },
    sum: [
      { t: 'A load model turns a session into a number, and it is only as good as its inputs and assumptions.', it: 'Un modello del carico trasforma una seduta in un numero, ed è valido solo quanto i suoi input e le sue ipotesi.' },
      { t: '⟦Banister’s TRIMP⟧ weights duration by relative heart rate with an exponential factor, so hard minutes count more.', it: 'Il TRIMP di Banister pesa la durata per la frequenza cardiaca relativa con un fattore esponenziale, quindi i minuti duri contano di più.' },
      { t: 'Edwards’ TRIMP uses heart rate zones, while ⟦sRPE⟧ multiplies the effort rating by minutes and suits intermittent sports.', it: 'Il TRIMP di Edwards usa le zone di frequenza cardiaca, mentre l’sRPE moltiplica lo sforzo per i minuti e si adatta agli sport intermittenti.' },
      { t: 'The ⟦fitness-fatigue model⟧ describes performance as a slow fitness term minus a fast fatigue term.', it: 'Il modello fitness-fatica descrive la prestazione come un termine lento di fitness meno un termine rapido di fatica.' },
      { t: '⟦CTL⟧, ATL and TSB are exponential averages of daily load, with time constants of about 42 days and 7 days.', it: 'CTL, ATL e TSB sono medie esponenziali del carico giornaliero, con costanti di tempo di circa 42 giorni e 7 giorni.' },
      { t: 'The ⟦TSS⟧ normalizes load to threshold power through the ⟦intensity factor⟧, and one hour at threshold equals 100 points.', it: 'Il TSS normalizza il carico rispetto alla potenza di soglia tramite il fattore di intensità, e un’ora alla soglia vale 100 punti.' },
      { t: 'Parameters are hard to identify and models can suffer from ⟦overfitting⟧, so use them to describe and reason, not to issue automatic verdicts.', it: 'I parametri sono difficili da identificare e i modelli possono sovra-adattarsi, quindi usali per descrivere e ragionare, non per dare verdetti automatici.' }
    ],
    gloss: [
      { w: 'Banister’s TRIMP', it: 'impulso di allenamento di Banister' },
      { w: 'sRPE', it: 'RPE di sessione × durata' },
      { w: 'fitness-fatigue model', it: 'modello fitness-fatica' },
      { w: 'CTL', it: 'carico cronico (fitness)' },
      { w: 'TSS', it: 'punteggio di stress da allenamento' },
      { w: 'ACWR', it: 'rapporto carico acuto:cronico' },
      { w: 'exponentially weighted moving average', it: 'media mobile esponenziale (EWMA)' },
      { w: 'overfitting', it: 'sovra-adattamento ai dati' },
      { w: 'intensity factor', it: 'fattore di intensità (IF)' },
      { w: 'mathematical coupling', it: 'accoppiamento matematico' }
    ]
  });
  A('spo-adv-monitoraggio-in-pratica', {
    title: { t: 'Monitoring in practice: reliability, SWC, HRV and CMJ', it: 'Monitoraggio in pratica: affidabilità, SWC, HRV, CMJ' },
    sum: [
      { t: 'Every measurement equals the true value plus error, so you must tell a real change from ⟦noise⟧.', it: 'Ogni misura è il valore vero più l’errore, quindi bisogna distinguere un cambiamento reale dal rumore.' },
      { t: 'Reliability from test-retest data gives the ⟦typical error⟧ and the coefficient of variation, and the ICC depends on how varied the sample is.', it: 'L’affidabilità dai dati test-retest dà l’errore tipico e il coefficiente di variazione, e l’ICC dipende da quanto è eterogeneo il campione.' },
      { t: 'The ⟦smallest worthwhile change⟧ is often 0.2 times the between-athlete standard deviation.', it: 'La minima variazione rilevante è spesso 0,2 volte la deviazione standard fra atleti.' },
      { t: 'The ⟦minimal detectable change⟧ equals 1.96 × √2 × TE, and a small “+2 cm” is often only noise.', it: 'Il minimo cambiamento rilevabile è 1,96 × √2 × TE, e un piccolo «+2 cm» è spesso solo rumore.' },
      { t: 'Regression to the mean and multiple comparisons produce false alarms, so look at trends rather than single values.', it: 'La regressione verso la media e i confronti multipli producono falsi allarmi, quindi guarda le tendenze invece dei singoli valori.' },
      { t: '⟦RMSSD⟧ and its natural logarithm quantify heart rate variability, and a seven-day moving average reduces morning noise.', it: 'L’RMSSD e il suo logaritmo naturale quantificano la variabilità della frequenza cardiaca, e una media mobile di sette giorni riduce il rumore del mattino.' },
      { t: 'The ⟦countermovement jump⟧ is a quick readiness test, and a change smaller than the MDC cannot be called real.', it: 'Il salto con contromovimento è un rapido test di prontezza, e un cambiamento inferiore all’MDC non può essere considerato reale.' }
    ],
    gloss: [
      { w: 'noise', it: 'rumore di misura' },
      { w: 'typical error', it: 'errore tipico (TE)' },
      { w: 'smallest worthwhile change', it: 'minima variazione rilevante (SWC)' },
      { w: 'minimal detectable change', it: 'minimo cambiamento rilevabile (MDC)' },
      { w: 'RMSSD', it: 'indice di variabilità della frequenza cardiaca' },
      { w: 'countermovement jump', it: 'salto con contromovimento (CMJ)' },
      { w: 'reliability', it: 'affidabilità, ripetibilità' },
      { w: 'validity', it: 'validità' },
      { w: 'baseline', it: 'valore di riferimento individuale' },
      { w: 'regression to the mean', it: 'regressione verso la media' }
    ]
  });
  A('spo-adv-statistica-applicata', {
    title: { t: 'Applied statistics for sport', it: 'Statistica applicata allo sport' },
    sum: [
      { t: 'Sport science has small samples, noisy measures and modest effects, so statistics should quantify uncertainty, not remove it.', it: 'La scienza dello sport ha campioni piccoli, misure rumorose ed effetti modesti, quindi la statistica deve quantificare l’incertezza, non eliminarla.' },
      { t: '⟦Cohen’s d⟧ is the difference between means divided by the standard deviation, and its thresholds are conventions.', it: 'La d di Cohen è la differenza fra medie divisa per la deviazione standard, e le sue soglie sono convenzioni.' },
      { t: 'A 95% ⟦confidence interval⟧ shows the range of plausible effects, and “not significant” does not mean “no effect”.', it: 'Un intervallo di confidenza al 95% mostra l’intervallo di effetti plausibili, e «non significativo» non significa «nessun effetto».' },
      { t: 'Low ⟦statistical power⟧ leads to missed effects and to overestimates when a result is significant.', it: 'Una bassa potenza statistica porta a effetti non rilevati e a sovrastime quando un risultato è significativo.' },
      { t: '⟦Magnitude-based inference⟧ is popular in sport but controversial for inflating type I errors.', it: 'L’inferenza basata sulle magnitudini è popolare nello sport ma controversa perché gonfia gli errori di tipo I.' },
      { t: '⟦Single-case designs⟧ and the Bayesian approach help when only one athlete is available, with the limits of autocorrelation and priors.', it: 'I disegni a caso singolo e l’approccio bayesiano aiutano quando c’è un solo atleta, con i limiti di autocorrelazione e prior.' },
      { t: '⟦P-hacking⟧ and publication bias inflate false positives, and meta-analysis is only as good as the studies it combines.', it: 'Il p-hacking e il bias di pubblicazione gonfiano i falsi positivi, e la meta-analisi vale quanto gli studi che combina.' }
    ],
    gloss: [
      { w: 'Cohen’s d', it: 'dimensione dell’effetto standardizzata' },
      { w: 'confidence interval', it: 'intervallo di confidenza' },
      { w: 'statistical power', it: 'potenza statistica' },
      { w: 'magnitude-based inference', it: 'inferenza basata sulle magnitudini (MBI)' },
      { w: 'single-case designs', it: 'disegni a caso singolo (N = 1)' },
      { w: 'p-hacking', it: 'manipolazione delle analisi fino a p < 0,05' },
      { w: 'Bayes factor', it: 'fattore di Bayes' },
      { w: 'meta-analysis', it: 'meta-analisi' },
      { w: 'multiplicity', it: 'molteplicità dei test' },
      { w: 'pre-registration', it: 'pre-registrazione' }
    ]
  });
  A('spo-adv-infortunio-rischio-rientro', {
    title: { t: 'Injury: models, risk, prevention and return to play', it: 'Infortunio: modelli, rischio, prevenzione e rientro' },
    sum: [
      { t: 'Injury must first be defined, and ⟦incidence⟧ is counted per 1000 hours of exposure so teams can be compared.', it: 'L’infortunio va prima definito, e l’incidenza si conta per 1000 ore di esposizione così da confrontare le squadre.' },
      { t: 'Causal models such as ⟦tissue capacity⟧ and the biopsychosocial view are frameworks for reasoning, not predictors.', it: 'Modelli causali come la capacità tissutale e la visione biopsicosociale sono cornici di ragionamento, non predittori.' },
      { t: 'The ACWR links load spikes to injury, but it is criticised for mathematical coupling, hidden absolute load and arbitrary thresholds.', it: 'L’ACWR collega i picchi di carico agli infortuni, ma è criticato per accoppiamento matematico, carico assoluto nascosto e soglie arbitrarie.' },
      { t: 'A risk factor can be a good target for action and still be a poor selection test.', it: 'Un fattore di rischio può essere un buon bersaglio d’intervento e comunque un cattivo test di selezione.' },
      { t: 'Screening tests with modest sensitivity and specificity give a low ⟦positive predictive value⟧, so they cannot decide for one athlete.', it: 'I test di screening con sensibilità e specificità modeste danno un basso valore predittivo positivo, quindi non possono decidere per un singolo atleta.' },
      { t: 'Multi-component prevention programmes reduce injuries, but their real effect depends on ⟦adherence⟧, as the ⟦number needed to treat⟧ shows.', it: 'I programmi di prevenzione multi-componente riducono gli infortuni, ma il loro effetto reale dipende dall’aderenza, come mostra il numero da trattare.' },
      { t: '⟦Return to play⟧ should combine a minimum time with functional criteria and psychological readiness, decided together with the medical staff.', it: 'Il rientro deve combinare un tempo minimo con criteri funzionali e prontezza psicologica, deciso insieme allo staff medico.' }
    ],
    gloss: [
      { w: 'incidence', it: 'incidenza per ore di esposizione' },
      { w: 'tissue capacity', it: 'capacità tissutale' },
      { w: 'positive predictive value', it: 'valore predittivo positivo' },
      { w: 'adherence', it: 'aderenza al programma' },
      { w: 'number needed to treat', it: 'numero da trattare (NNT)' },
      { w: 'return to play', it: 'rientro all’attività sportiva' },
      { w: 'limb symmetry index', it: 'indice di simmetria degli arti (LSI)' },
      { w: 'screening', it: 'test di screening' },
      { w: 'risk factor', it: 'fattore di rischio' },
      { w: 'multi-component programme', it: 'programma multi-componente' }
    ]
  });
  A('spo-adv-apprendimento-motorio-avanzato', {
    title: { t: 'Advanced motor learning and technical sports', it: 'Apprendimento motorio avanzato e sport tecnici' },
    sum: [
      { t: '⟦Performance⟧ during practice is not ⟦learning⟧, which is a lasting change shown in retention and transfer tests.', it: 'La prestazione durante la pratica non è apprendimento, che è un cambiamento duraturo mostrato dai test di ritenzione e transfer.' },
      { t: 'The ecological view says movement emerges from athlete, task and environment, and the ⟦constraints-led approach⟧ changes constraints to guide new solutions.', it: 'La visione ecologica dice che il movimento emerge da atleta, compito e ambiente, e l’approccio basato sui vincoli cambia i vincoli per guidare nuove soluzioni.' },
      { t: '⟦Random practice⟧ worsens performance during acquisition but improves retention and transfer compared with blocked practice.', it: 'La pratica casuale peggiora la prestazione durante l’acquisizione ma migliora ritenzione e transfer rispetto alla pratica bloccata.' },
      { t: 'Schema theory predicts that variable practice makes a movement more general, but practice should stay representative of competition.', it: 'La teoria dello schema prevede che la pratica variabile renda un movimento più generale, ma la pratica deve restare rappresentativa della gara.' },
      { t: 'Frequent feedback guides practice but can create dependence, so reduce it or give it only when error leaves a ⟦bandwidth⟧.', it: 'Un feedback frequente guida la pratica ma può creare dipendenza, quindi riducilo o dallo solo quando l’errore esce da un intervallo di tolleranza.' },
      { t: 'An ⟦external focus⟧ on the effect of the movement usually helps more than an internal focus on the body, with small to moderate effects.', it: 'Un focus esterno sull’effetto del movimento di solito aiuta più di un focus interno sul corpo, con effetti da piccoli a moderati.' },
      { t: 'In judo and wrestling, progress from uchi-komi to constrained randori, vary partners and prioritise safe falling skills, while specific evidence is limited.', it: 'Nel judo e nella lotta, progredisci dall’uchi-komi al randori vincolato, varia i partner e dai priorità alle cadute sicure, mentre l’evidenza specifica è limitata.' }
    ],
    gloss: [
      { w: 'performance', it: 'prestazione osservata nella pratica' },
      { w: 'learning', it: 'apprendimento, cambiamento duraturo' },
      { w: 'constraints-led approach', it: 'approccio basato sui vincoli' },
      { w: 'random practice', it: 'pratica casuale' },
      { w: 'bandwidth', it: 'intervallo di tolleranza per il feedback' },
      { w: 'external focus', it: 'focus attentivo esterno' },
      { w: 'retention', it: 'ritenzione' },
      { w: 'transfer', it: 'transfer, trasferimento a nuove situazioni' },
      { w: 'contextual interference', it: 'interferenza contestuale' },
      { w: 'mental imagery', it: 'immaginazione mentale' }
    ]
  });
  A('spo-adv-periodizzazione-evidenza', {
    title: { t: 'Evidence-based periodization and programme comparisons', it: 'Periodizzazione basata sull’evidenza e confronti tra programmi' },
    sum: [
      { t: 'Studies comparing periodization models are few, short and small, and programmes often differ in more than one variable.', it: 'Gli studi che confrontano i modelli di periodizzazione sono pochi, brevi e piccoli, e i programmi spesso differiscono per più di una variabile.' },
      { t: 'The ⟦polarized⟧, ⟦pyramidal⟧ and threshold models differ in how time is split among three intensity zones.', it: 'I modelli polarizzato, piramidale e a soglia differiscono per come il tempo è diviso fra tre zone di intensità.' },
      { t: 'The same programme can look like 80/20 when counted by sessions but different when counted by time, so always state the method.', it: 'Lo stesso programma può apparire 80/20 se contato per sedute ma diverso se contato per tempo, quindi dichiara sempre il metodo.' },
      { t: '⟦Concurrent training⟧ may cause interference mostly in power and hypertrophy, and the real issue is managing total load and fatigue.', it: 'L’allenamento concorrente può causare interferenza soprattutto su potenza e ipertrofia, e il vero problema è gestire carico totale e fatica.' },
      { t: '⟦HRV-guided⟧ training shows small benefits whose intervals often include zero, with very different algorithms.', it: 'L’allenamento guidato dall’HRV mostra benefici piccoli i cui intervalli spesso includono lo zero, con algoritmi molto diversi.' },
      { t: 'To detect a small effect between models you would need about 392 people per group, so most studies lack ⟦statistical power⟧.', it: 'Per rilevare un piccolo effetto fra modelli servirebbero circa 392 persone per gruppo, quindi la maggior parte degli studi non ha potenza statistica.' },
      { t: 'Part of the spread in individual response is noise, and the ⟦individual response⟧ SD equals √(SD² trained − SD² control).', it: 'Parte della dispersione nella risposta individuale è rumore, e la SD della risposta individuale è √(SD² allenati − SD² controllo).' }
    ],
    gloss: [
      { w: 'polarized', it: 'distribuzione polarizzata' },
      { w: 'pyramidal', it: 'distribuzione piramidale' },
      { w: 'HRV-guided', it: 'guidato dalla variabilità della frequenza cardiaca' },
      { w: 'statistical power', it: 'potenza statistica' },
      { w: 'individual response', it: 'risposta individuale' },
      { w: 'concurrent training', it: 'allenamento concorrente' },
      { w: 'block periodization', it: 'periodizzazione a blocchi' },
      { w: 'interference effect', it: 'effetto interferenza' },
      { w: 'meta-analysis', it: 'meta-analisi' },
      { w: 'time in zone', it: 'tempo trascorso in zona' }
    ]
  });
  A('spo-adv-organizzazione-della-performance', {
    title: { t: 'Organizing performance in a team', it: 'Organizzazione della performance in un team' },
    sum: [
      { t: 'A ⟦performance model⟧ breaks performance into determinants and links them to training decisions, after a ⟦needs analysis⟧.', it: 'Un performance model scompone la prestazione in determinanti e li collega alle decisioni di allenamento, dopo un’analisi dei bisogni.' },
      { t: 'A ⟦test battery⟧ must be valid, reliable, sensitive, specific, feasible and useful, and composites can hide weaknesses.', it: 'Una batteria di test deve essere valida, affidabile, sensibile, specifica, fattibile e utile, e i compositi possono nascondere i punti deboli.' },
      { t: 'A ⟦KPI⟧ is an indicator of progress, and Goodhart’s principle warns that a measure that becomes a target stops being a good measure.', it: 'Un KPI è un indicatore di progresso, e il principio di Goodhart avverte che una misura che diventa un obiettivo smette di essere una buona misura.' },
      { t: 'The team decision process runs from question to evidence, uncertainty, decision, action and review, with a decision log.', it: 'Il processo decisionale del team va dalla domanda all’evidenza, all’incertezza, alla decisione, all’azione e alla revisione, con un registro delle decisioni.' },
      { t: 'In a congested calendar the aim shifts from developing qualities to keeping readiness, using rotation and compensatory sessions.', it: 'In un calendario congestionato l’obiettivo passa dallo sviluppare qualità al mantenere la prontezza, usando rotazione e sedute compensative.' },
      { t: '⟦Jet lag⟧ needs roughly one day per time zone to resolve, and travel east is usually harder than travel west.', it: 'Il jet lag richiede circa un giorno per fuso orario per risolversi, e viaggiare verso est è di solito più difficile che verso ovest.' },
      { t: 'Communicate with honesty about uncertainty, and treat athletes’ data as health data that must be protected under the ⟦GDPR⟧.', it: 'Comunica con onestà sull’incertezza, e tratta i dati degli atleti come dati sulla salute da proteggere secondo il GDPR.' }
    ],
    gloss: [
      { w: 'performance model', it: 'modello della prestazione' },
      { w: 'test battery', it: 'batteria di test' },
      { w: 'KPI', it: 'indicatore chiave di prestazione' },
      { w: 'jet lag', it: 'sfasamento circadiano da fuso orario' },
      { w: 'GDPR', it: 'regolamento europeo sulla protezione dei dati' },
      { w: 'needs analysis', it: 'analisi dei bisogni' },
      { w: 'decision log', it: 'registro delle decisioni' },
      { w: 'sleep debt', it: 'debito di sonno' },
      { w: 'composite score', it: 'punteggio composito' },
      { w: 'congested calendar', it: 'calendario congestionato' }
    ]
  });
  A('spo-adv-periodizzazione-carboidrati', {
    title: { t: 'Periodizing carbohydrate availability', it: 'Periodizzazione e disponibilità di carboidrati' },
    sum: [
      { t: '⟦Nutritional periodization⟧ matches carbohydrate intake to the work required by each session, instead of a fixed daily intake.', it: 'La periodizzazione nutrizionale adatta l’apporto di carboidrati al lavoro richiesto da ciascuna seduta, invece di un apporto giornaliero fisso.' },
      { t: 'Total ⟦glycogen⟧ stores are about 400–600 g, held in muscle and liver, and the liver store keeps blood glucose stable.', it: 'Le scorte totali di glicogeno sono circa 400–600 g, nei muscoli e nel fegato, e la scorta epatica mantiene stabile la glicemia.' },
      { t: 'Daily targets run from 3–5 g/kg for light days up to 8–12 g/kg for extreme loads, so move within that range.', it: 'Gli obiettivi giornalieri vanno da 3–5 g/kg per i giorni leggeri fino a 8–12 g/kg per carichi estremi, quindi ci si sposta in quell’intervallo.' },
      { t: 'During exercise, intake is 30–60 g per hour for 1 to 2.5 hours, and up to 90 g per hour beyond 2.5 hours.', it: 'Durante l’esercizio l’assunzione è di 30–60 g all’ora per 1–2,5 ore, e fino a 90 g all’ora oltre le 2,5 ore.' },
      { t: '⟦Train-low⟧ and ⟦sleep-low⟧ raise molecular signals, but their effects on performance are inconsistent.', it: 'Il train-low e lo sleep-low aumentano i segnali molecolari, ma i loro effetti sulla prestazione sono incostanti.' },
      { t: 'Training with low ⟦carbohydrate availability⟧ has risks, such as lower quality, infections, bone and hormonal effects and eating disorders in vulnerable people.', it: 'Allenarsi con pochi carboidrati ha dei rischi, come qualità inferiore, infezioni, effetti su ossa e ormoni e disturbi alimentari nelle persone vulnerabili.' },
      { t: 'A ⟦ketogenic diet⟧ raises fat oxidation but cannot sustain the highest intensities, and ⟦metabolic flexibility⟧ is hard to measure.', it: 'Una dieta chetogenica aumenta l’ossidazione dei grassi ma non possono sostenere le intensità più alte, e la flessibilità metabolica è difficile da misurare.' }
    ],
    gloss: [
      { w: 'nutritional periodization', it: 'periodizzazione nutrizionale' },
      { w: 'glycogen', it: 'glicogeno, riserva di carboidrati' },
      { w: 'train-low', it: 'allenarsi con glicogeno basso' },
      { w: 'sleep-low', it: 'dormire con glicogeno basso dopo una seduta' },
      { w: 'metabolic flexibility', it: 'flessibilità metabolica' },
      { w: 'ketogenic diet', it: 'dieta chetogenica' },
      { w: 'indirect calorimetry', it: 'calorimetria indiretta' },
      { w: 'respiratory exchange ratio', it: 'quoziente respiratorio (RER)' },
      { w: 'carbohydrate availability', it: 'disponibilità di carboidrati' },
      { w: 'low energy availability', it: 'bassa disponibilità energetica (RED-S)' }
    ]
  });
  A('spo-adv-carboidrati-multitrasportabili', {
    title: { t: 'Multiple transportable carbohydrates and gut training', it: 'Carboidrati multi-trasportabili e gut training' },
    sum: [
      { t: 'Each sugar needs its own intestinal transporter, and ⟦SGLT1⟧ for ⟦glucose⟧ saturates at about 60–70 g per hour.', it: 'Ogni zucchero ha bisogno del proprio trasportatore intestinale, e l’SGLT1 per il glucosio si satura a circa 60–70 g all’ora.' },
      { t: 'Adding ⟦fructose⟧ opens a second route through ⟦GLUT5⟧, so more carbohydrate can be absorbed and oxidized.', it: 'Aggiungere fruttosio apre una seconda via tramite GLUT5, quindi si può assorbire e ossidare più carboidrato.' },
      { t: 'The classic glucose to fructose ratio is 2:1, and newer work suggests about 1:0.8 with less solid evidence.', it: 'Il rapporto classico glucosio:fruttosio è 2:1, e lavori più recenti suggeriscono circa 1:0,8 con evidenza meno solida.' },
      { t: 'Intake is up to 60 g per hour, 60–90 g for long races, and 90–120 g only for some elite athletes.', it: 'L’assunzione è fino a 60 g all’ora, 60–90 g per gare lunghe, e 90–120 g solo per alcuni atleti d’élite.' },
      { t: 'Convert grams into drinks, gels and food, and watch drink concentration, because very concentrated solutions slow ⟦gastric emptying⟧.', it: 'Converti i grammi in bevande, gel e cibo, e controlla la concentrazione della bevanda, perché le soluzioni molto concentrate rallentano lo svuotamento gastrico.' },
      { t: '⟦Gut training⟧ means practising race-level intake in training to improve tolerance, though evidence is limited and partly expectation.', it: 'Il gut training consiste nel praticare in allenamento un’assunzione da gara per migliorare la tolleranza, anche se l’evidenza è limitata e in parte dovuta all’aspettativa.' },
      { t: 'Persistent or severe digestive symptoms need medical evaluation, and nothing new should be tried on race day.', it: 'I sintomi digestivi persistenti o gravi richiedono una valutazione medica, e nulla di nuovo va provato il giorno della gara.' }
    ],
    gloss: [
      { w: 'SGLT1', it: 'trasportatore intestinale del glucosio' },
      { w: 'GLUT5', it: 'trasportatore intestinale del fruttosio' },
      { w: 'gut training', it: 'allenamento dell’intestino' },
      { w: 'glucose', it: 'glucosio' },
      { w: 'fructose', it: 'fruttosio' },
      { w: 'sucrose', it: 'saccarosio' },
      { w: 'gastric emptying', it: 'svuotamento gastrico' },
      { w: 'exogenous carbohydrate', it: 'carboidrato esogeno, assunto con gli alimenti' },
      { w: 'FODMAP', it: 'carboidrati fermentabili mal tollerati' },
      { w: 'tolerance', it: 'tolleranza gastrointestinale' }
    ]
  });
  A('spo-adv-proteine-avanzate', {
    title: { t: 'Advanced protein topics', it: 'Proteine avanzate' },
    sum: [
      { t: 'For people who train, intakes of 1.2–2.0 g/kg per day are common, with about 0.25–0.4 g/kg per meal, and these are ranges, not rules.', it: 'Per chi si allena sono comuni apporti di 1,2–2,0 g/kg al giorno, con circa 0,25–0,4 g/kg per pasto, e sono intervalli, non regole.' },
      { t: 'The ⟦leucine threshold⟧ of about 2–3 g per meal comes from acute studies, and total daily intake matters more than a single dose.', it: 'La soglia della leucina di circa 2–3 g per pasto viene da studi acuti, e l’apporto totale giornaliero conta più della singola dose.' },
      { t: 'Spreading protein over 3–5 meals helps acutely, but at equal total the long-term effect on lean mass is small or absent.', it: 'Distribuire le proteine su 3–5 pasti aiuta in acuto, ma a parità di totale l’effetto a lungo termine sulla massa magra è piccolo o assente.' },
      { t: '⟦Casein⟧ before sleep raises overnight synthesis, and it is a reasonable low-risk option but not necessary.', it: 'La caseina prima di dormire aumenta la sintesi notturna, ed è un’opzione ragionevole e a basso rischio ma non necessaria.' },
      { t: '⟦Nitrogen balance⟧ is nitrogen intake minus losses, using the factor 6.25, but it has important measurement limits.', it: 'Il bilancio azotato è l’azoto assunto meno le perdite, usando il fattore 6,25, ma ha importanti limiti di misura.' },
      { t: '⟦PDCAAS⟧ and ⟦DIAAS⟧ rate protein quality from ⟦essential amino acids⟧ and digestibility, and cereals and legumes complement each other.', it: 'PDCAAS e DIAAS valutano la qualità delle proteine da aminoacidi essenziali e digeribilità, e cereali e legumi si completano.' },
      { t: 'In a calorie deficit, higher intakes of about 1.6–2.4 g/kg help to keep lean mass, and older adults need at least 1.0–1.2 g/kg.', it: 'In deficit calorico, apporti più alti di circa 1,6–2,4 g/kg aiutano a mantenere la massa magra, e gli anziani ne hanno bisogno di almeno 1,0–1,2 g/kg.' }
    ],
    gloss: [
      { w: 'leucine threshold', it: 'soglia della leucina' },
      { w: 'casein', it: 'caseina, proteina a digestione lenta' },
      { w: 'nitrogen balance', it: 'bilancio azotato' },
      { w: 'PDCAAS', it: 'indice di qualità proteica corretto per la digeribilità' },
      { w: 'DIAAS', it: 'indice di qualità proteica con digeribilità ileale' },
      { w: 'muscle protein synthesis', it: 'sintesi proteica muscolare (MPS)' },
      { w: 'anabolic resistance', it: 'resistenza anabolica' },
      { w: 'essential amino acids', it: 'aminoacidi essenziali' },
      { w: 'limiting amino acid', it: 'aminoacido limitante' },
      { w: 'lean mass', it: 'massa magra' }
    ]
  });
  A('spo-adv-ferro-vitamina-d', {
    title: { t: 'Iron, vitamin D and the athlete’s micronutrients', it: 'Ferro, vitamina D e micronutrienti dell’atleta' },
    sum: [
      { t: '⟦Iron⟧ is part of haemoglobin and mitochondrial enzymes, and a deficit can reduce work capacity even before anaemia.', it: 'Il ferro fa parte dell’emoglobina e degli enzimi mitocondriali, e un deficit può ridurre la capacità di lavoro già prima dell’anemia.' },
      { t: '⟦Ferritin⟧ reflects stores but rises with inflammation, and its reference limits are debated, so read it with other tests.', it: 'La ferritina riflette le scorte ma sale con l’infiammazione, e i suoi limiti di riferimento sono discussi, quindi va letta con altri esami.' },
      { t: '⟦Sports pseudoanaemia⟧ is a dilution of haemoglobin from plasma expansion and does not need iron.', it: 'La pseudoanemia dello sportivo è una diluizione dell’emoglobina per espansione del plasma e non richiede ferro.' },
      { t: '⟦Haem iron⟧ is absorbed better than non-haem iron, vitamin C helps, and phytates, polyphenols and calcium inhibit absorption.', it: 'Il ferro eme è assorbito meglio di quello non eme, la vitamina C aiuta, e fitati, polifenoli e calcio ne inibiscono l’assorbimento.' },
      { t: '⟦Hepcidin⟧ blocks iron absorption and peaks about 3 hours after exercise, but clinical benefit of timing is still limited.', it: 'L’epcidina blocca l’assorbimento del ferro e raggiunge il picco circa 3 ore dopo l’esercizio, ma il beneficio clinico del timing è ancora limitato.' },
      { t: '⟦Vitamin D⟧ is judged by serum 25(OH)D, and correcting a deficiency may help, but going above adequate levels shows no consistent benefit.', it: 'La vitamina D si valuta con la 25(OH)D sierica, e correggere una carenza può aiutare, ma superare i livelli adeguati non mostra benefici coerenti.' },
      { t: 'Blind supplementation is risky, as it can cause iron overload, mask bleeding and give excess vitamin D, so test first.', it: 'L’integrazione cieca è rischiosa, perché può causare sovraccarico di ferro, mascherare sanguinamenti e dare un eccesso di vitamina D, quindi prima si fanno esami.' }
    ],
    gloss: [
      { w: 'iron', it: 'ferro' },
      { w: 'ferritin', it: 'ferritina, indicatore delle scorte di ferro' },
      { w: 'sports pseudoanaemia', it: 'pseudoanemia dello sportivo' },
      { w: 'hepcidin', it: 'epcidina, ormone che regola il ferro' },
      { w: 'vitamin D', it: 'vitamina D' },
      { w: 'transferrin saturation', it: 'saturazione della transferrina (TSAT)' },
      { w: 'haem iron', it: 'ferro eme' },
      { w: 'non-haem iron', it: 'ferro non eme' },
      { w: 'haemochromatosis', it: 'emocromatosi' },
      { w: 'plasma volume', it: 'volume plasmatico' }
    ]
  });
  A('spo-adv-energia-salute-atleta', {
    title: { t: 'Energy and athlete health: RED-S and the menstrual cycle', it: 'Energia e salute dell’atleta: RED-S e ciclo' },
    sum: [
      { t: '⟦Energy availability⟧ is intake minus exercise expenditure per kilogram of lean mass, and low values define ⟦low energy availability⟧.', it: 'La disponibilità energetica è l’assunzione meno la spesa per esercizio per chilogrammo di massa magra, e i valori bassi definiscono la bassa disponibilità energetica.' },
      { t: '⟦RED-S⟧ extends the older triad to men and to many systems, such as bone, hormones, immunity, heart and mood.', it: 'La RED-S estende la vecchia triade agli uomini e a molti sistemi, come ossa, ormoni, immunità, cuore e umore.' },
      { t: 'About 30 kcal/kg of lean mass is a risk threshold and about 45 is good availability, but thresholds are uncertain and individual.', it: 'Circa 30 kcal/kg di massa magra è una soglia di rischio e circa 45 è una buona disponibilità, ma le soglie sono incerte e individuali.' },
      { t: 'Warning signs include missing periods, stress fractures, fatigue, repeated illness and a drop in performance, and bone damage may not be fully reversible.', it: 'I segnali d’allarme includono assenza di ciclo, fratture da stress, stanchezza, malattie ripetute e calo di prestazione, e il danno osseo può non essere del tutto reversibile.' },
      { t: 'The menstrual cycle has a follicular and a ⟦luteal phase⟧, and tracking it helps to spot irregularities that signal health problems.', it: 'Il ciclo mestruale ha una fase follicolare e una luteale, e tracciarlo aiuta a riconoscere irregolarità che segnalano problemi di salute.' },
      { t: 'Evidence on cycle phase and performance shows a small, variable effect of low quality, so there is no universal rule for training by phase.', it: 'L’evidenza su fase del ciclo e prestazione mostra un effetto piccolo e variabile di bassa qualità, quindi non esiste una regola universale per allenarsi per fase.' },
      { t: '⟦Hormonal contraception⟧ can mask ⟦amenorrhoea⟧ from low energy, and the solution is to restore energy through a team of doctor, dietitian and psychologist.', it: 'La contraccezione ormonale può mascherare l’amenorrea da bassa energia, e la soluzione è ripristinare l’energia con un team di medico, dietista e psicologo.' }
    ],
    gloss: [
      { w: 'energy availability', it: 'disponibilità energetica' },
      { w: 'low energy availability', it: 'bassa disponibilità energetica (LEA)' },
      { w: 'RED-S', it: 'deficit energetico relativo nello sport' },
      { w: 'amenorrhoea', it: 'assenza di mestruazioni' },
      { w: 'stress fracture', it: 'frattura da stress' },
      { w: 'follicular phase', it: 'fase follicolare' },
      { w: 'luteal phase', it: 'fase luteale' },
      { w: 'female athlete triad', it: 'triade dell’atleta' },
      { w: 'bone density', it: 'densità ossea' },
      { w: 'hormonal contraception', it: 'contraccezione ormonale' }
    ]
  });
  A('spo-adv-idratazione-minerali', {
    title: { t: 'Advanced hydration, sodium and caffeine', it: 'Idratazione, sodio e caffeina avanzati' },
    sum: [
      { t: '⟦Plasma osmolality⟧ controls thirst and ⟦vasopressin⟧, and sweat is hypotonic, so heavy sweating tends to raise osmolality.', it: 'L’osmolalità plasmatica controlla sete e vasopressina, e il sudore è ipotonico, quindi sudare molto tende ad aumentare l’osmolalità.' },
      { t: 'Sweat sodium varies from about 10 to 90 mmol/L, so losses are very individual and can be recovered with meals.', it: 'Il sodio nel sudore varia da circa 10 a 90 mmol/L, quindi le perdite sono molto individuali e si possono recuperare con i pasti.' },
      { t: 'A ⟦sweat test⟧ gives a snapshot only, because concentration differs between body sites and from day to day.', it: 'Uno sweat test dà solo un’istantanea, perché la concentrazione differisce fra le zone del corpo e da un giorno all’altro.' },
      { t: '⟦Exercise-associated hyponatraemia⟧ is mainly caused by drinking more than is lost, and it needs medical treatment, not more water.', it: 'L’iponatriemia associata all’esercizio è causata soprattutto dal bere più di quanto si perde, e richiede un trattamento medico, non altra acqua.' },
      { t: 'After exercise, rehydrate with about 125–150% of the fluid lost when time is short, and sodium helps retain fluid.', it: 'Dopo l’esercizio, reidrata con circa il 125–150% del liquido perso quando il tempo è poco, e il sodio aiuta a trattenere i liquidi.' },
      { t: 'In most situations ⟦drinking to thirst⟧ is enough and safer, while a planned strategy suits heavy sweaters and long events in the heat.', it: 'Nella maggior parte delle situazioni bere secondo la sete è sufficiente e più sicuro, mentre una strategia pianificata è adatta a chi suda molto e agli eventi lunghi nel caldo.' },
      { t: '⟦Caffeine⟧ works at 3–6 mg/kg about an hour before, has a half-life of about 5 hours, and genetic dose tests are not recommended.', it: 'La caffeina funziona a 3–6 mg/kg circa un’ora prima, ha un’emivita di circa 5 ore, e i test genetici per la dose non sono raccomandati.' }
    ],
    gloss: [
      { w: 'plasma osmolality', it: 'osmolalità plasmatica' },
      { w: 'sweat test', it: 'test del sudore' },
      { w: 'exercise-associated hyponatraemia', it: 'iponatriemia associata all’esercizio (EAH)' },
      { w: 'caffeine', it: 'caffeina' },
      { w: 'vasopressin', it: 'vasopressina, ormone che trattiene acqua' },
      { w: 'drinking to thirst', it: 'bere secondo la sete' },
      { w: 'rehydration', it: 'reidratazione' },
      { w: 'half-life', it: 'emivita' },
      { w: 'hypotonic', it: 'ipotonico, meno concentrato del plasma' },
      { w: 'CYP1A2', it: 'enzima che metabolizza la caffeina' }
    ]
  });
  A('spo-adv-evidenze-integratori-clinica', {
    title: { t: 'Weighing evidence and basic clinical nutrition', it: 'Valutare le evidenze e nutrizione clinica di base' },
    sum: [
      { t: 'Evidence has a ⟦hierarchy⟧, from systematic reviews of randomized trials down to mechanistic studies and expert opinion, and quality matters more than label.', it: 'L’evidenza ha una gerarchia, dalle revisioni sistematiche di trial randomizzati agli studi meccanicistici e al parere di esperti, e la qualità conta più dell’etichetta.' },
      { t: 'Observational studies suffer from ⟦confounding⟧ and measurement error, and nutrition trials suffer from poor blinding, short duration and surrogate markers.', it: 'Gli studi osservazionali soffrono di confondimento ed errore di misura, e i trial nutrizionali di cieco scarso, breve durata e marcatori surrogati.' },
      { t: 'A headline such as “+30%” may hide a tiny change, so check ⟦absolute risk⟧ and the baseline risk.', it: 'Un titolo come «+30%» può nascondere un cambiamento minimo, quindi controlla il rischio assoluto e il rischio di base.' },
      { t: 'The ⟦placebo⟧ and nocebo effects are not negligible in sport, so credible double-blind designs are needed.', it: 'Gli effetti placebo e nocebo non sono trascurabili nello sport, quindi servono disegni in doppio cieco credibili.' },
      { t: 'The IOC classifies supplements by evidence, with creatine, caffeine, beta-alanine, nitrate and bicarbonate in the supported group and dose ranges that are not prescriptions.', it: 'Il CIO classifica gli integratori per evidenza, con creatina, caffeina, beta-alanina, nitrato e bicarbonato nel gruppo sostenuto e intervalli di dose che non sono prescrizioni.' },
      { t: 'Supplements are not checked like drugs, so ⟦contamination⟧ is real, and under ⟦strict liability⟧ the athlete answers for what is in the body.', it: 'Gli integratori non sono controllati come i farmaci, quindi la contaminazione è reale, e con la responsabilità oggettiva l’atleta risponde di ciò che c’è nel suo corpo.' },
      { t: 'Know the basic cardiometabolic values, such as blood pressure and fasting glucose, and see a doctor for abnormal values or exertional symptoms.', it: 'Conosci i valori cardiometabolici di base, come pressione e glicemia a digiuno, e rivolgiti a un medico per valori anomali o sintomi da sforzo.' }
    ],
    gloss: [
      { w: 'hierarchy', it: 'gerarchia delle prove' },
      { w: 'absolute risk', it: 'rischio assoluto' },
      { w: 'placebo', it: 'effetto placebo' },
      { w: 'contamination', it: 'contaminazione con sostanze non dichiarate' },
      { w: 'strict liability', it: 'responsabilità oggettiva' },
      { w: 'GRADE', it: 'sistema per valutare la certezza delle prove' },
      { w: 'confounding', it: 'confondimento' },
      { w: 'creatine', it: 'creatina' },
      { w: 'TUE', it: 'esenzione per uso terapeutico' },
      { w: 'fasting glucose', it: 'glicemia a digiuno' }
    ]
  });
  A('spo-adv-giovani', {
    title: { t: 'Young athletes: maturation, load and specialization', it: 'Atleti giovani: maturazione, carico e specializzazione' },
    sum: [
      { t: 'Two children of the same age can differ by years of ⟦biological maturation⟧, so chronological age alone misleads.', it: 'Due ragazzi della stessa età possono differire di anni di maturazione biologica, quindi la sola età cronologica inganna.' },
      { t: 'The ⟦peak height velocity⟧ is the moment of fastest growth, around 13–14 years in boys and 11–12 in girls, with wide individual variation.', it: 'Il picco di velocità di crescita è il momento di crescita più rapida, intorno ai 13–14 anni nei maschi e agli 11–12 nelle femmine, con ampia variabilità individuale.' },
      { t: 'Maturation is estimated by growth rate, predicted adult height or offset equations, all with error, so they give context and not a talent test.', it: 'La maturazione si stima con velocità di crescita, altezza adulta predetta o equazioni di offset, tutte con errore, quindi danno un contesto e non sono un test di talento.' },
      { t: 'The ⟦LTAD⟧ model and windows of trainability are useful frames but are hypotheses, and “sensitive” does not mean “last chance”.', it: 'Il modello LTAD e le finestre di allenabilità sono cornici utili ma sono ipotesi, e «sensibile» non significa «ultima occasione».' },
      { t: 'With qualified supervision, resistance training in youth has low risk and does not harm ⟦growth plates⟧.', it: 'Con una supervisione qualificata, l’allenamento con i sovraccarichi nei giovani ha un rischio basso e non danneggia le cartilagini di crescita.' },
      { t: 'Growth-related injuries and overload come mostly from cumulated load, and a rule of thumb says weekly organized hours should not exceed age in years.', it: 'Gli infortuni da crescita e il sovraccarico derivano soprattutto dal carico cumulato, e una regola empirica dice che le ore settimanali organizzate non dovrebbero superare l’età in anni.' },
      { t: 'The ⟦relative age effect⟧ favours children born just after the cut-off date, and ⟦early specialization⟧ has no general evidence of advantage.', it: 'Il relative age effect favorisce i nati subito dopo la data di taglio, e la specializzazione precoce non ha evidenza di un vantaggio generale.' }
    ],
    gloss: [
      { w: 'biological maturation', it: 'maturazione biologica' },
      { w: 'peak height velocity', it: 'picco di velocità di crescita (PHV)' },
      { w: 'LTAD', it: 'sviluppo a lungo termine dell’atleta' },
      { w: 'relative age effect', it: 'effetto dell’età relativa' },
      { w: 'early specialization', it: 'specializzazione precoce' },
      { w: 'sampling', it: 'pratica di più sport da piccoli' },
      { w: 'growth plates', it: 'cartilagini di crescita' },
      { w: 'bio-banding', it: 'raggruppare per maturazione' },
      { w: 'apophysis', it: 'apofisi, zona di inserzione tendinea' },
      { w: 'window of trainability', it: 'finestra di allenabilità' }
    ]
  });
  A('spo-adv-atlete', {
    title: { t: 'Female athletes: physiology, cycle, injuries and energy availability', it: 'Atlete: fisiologia, ciclo, infortuni e disponibilità energetica' },
    sum: [
      { t: 'Differences between sexes are averages, the distributions overlap, and they should be used to form hypotheses, not to lower expectations.', it: 'Le differenze fra i sessi sono medie, le distribuzioni si sovrappongono, e vanno usate per formulare ipotesi, non per abbassare le aspettative.' },
      { t: 'Normalized for muscle mass, strength differences shrink, and the relative response to strength training is similar between sexes.', it: 'Normalizzate per la massa muscolare, le differenze di forza si riducono, e la risposta relativa all’allenamento di forza è simile fra i sessi.' },
      { t: 'There is no robust evidence for periodizing training by menstrual phase, so track symptoms through the ⟦menstrual cycle⟧ and adapt individually.', it: 'Non c’è evidenza solida per periodizzare l’allenamento per fase mestruale, quindi si tracciano i sintomi e ci si adatta in modo individuale.' },
      { t: '⟦ACL⟧ rupture is two to four times more frequent in female athletes in jumping sports, with neuromuscular control as a modifiable factor.', it: 'La rottura del LCA è da due a quattro volte più frequente nelle atlete negli sport con salti, con il controllo neuromuscolare come fattore modificabile.' },
      { t: '⟦Neuromuscular programmes⟧ can roughly halve ACL injuries in studies, but in absolute terms many athletes must be treated to avoid one case.', it: 'I programmi neuromuscolari di prevenzione possono dimezzare circa gli infortuni al LCA negli studi, ma in termini assoluti molte atlete devono essere trattate per evitare un caso.' },
      { t: '⟦Energy availability⟧ below about 30 kcal/kg of ⟦fat-free mass⟧ raises risk, and ⟦RED-S⟧ affects hormones, bone, immunity and performance in women and men.', it: 'Una disponibilità energetica sotto circa 30 kcal/kg di massa libera da grasso aumenta il rischio, e la RED-S colpisce ormoni, ossa, immunità e prestazione in donne e uomini.' },
      { t: 'Iron deficiency is relatively frequent in female athletes, and pregnancy and ⟦postpartum⟧ return need individual medical guidance.', it: 'La carenza di ferro è relativamente frequente nelle atlete, e gravidanza e rientro post partum richiedono una guida medica individuale.' }
    ],
    gloss: [
      { w: 'ACL', it: 'legamento crociato anteriore (LCA)' },
      { w: 'energy availability', it: 'disponibilità energetica' },
      { w: 'RED-S', it: 'deficit energetico relativo nello sport' },
      { w: 'fat-free mass', it: 'massa libera da grasso' },
      { w: 'menstrual cycle', it: 'ciclo mestruale' },
      { w: 'neuromuscular programmes', it: 'programmi neuromuscolari di prevenzione' },
      { w: 'relative risk', it: 'rischio relativo' },
      { w: 'number needed to treat', it: 'numero da trattare (NNT)' },
      { w: 'bone health', it: 'salute ossea' },
      { w: 'postpartum', it: 'post partum' }
    ]
  });
  A('spo-adv-master', {
    title: { t: 'Master athletes and ageing: sarcopenia, VO₂max and power', it: 'Master e invecchiamento: sarcopenia, VO2max e potenza' },
    sum: [
      { t: 'Ageing is not a disease, and the picture varies enormously between people of the same age, partly because of ⟦disuse⟧.', it: 'Invecchiare non è una malattia, e il quadro varia enormemente fra persone della stessa età, in parte per il disuso.' },
      { t: '⟦Sarcopenia⟧ is the progressive loss of muscle mass and function, and strength is the first criterion in the European consensus.', it: 'La sarcopenia è la perdita progressiva di massa e funzione muscolare, e la forza è il primo criterio nel consenso europeo.' },
      { t: '⟦Dynapenia⟧ is a loss of strength not explained by muscle mass alone, so preserving mass is not enough.', it: 'La dinamopenia è una perdita di forza non spiegata dalla sola massa muscolare, quindi conservare la massa non basta.' },
      { t: 'VO₂max ⟦falls⟧ by about 10% per decade in sedentary people and about 5% in people who train regularly.', it: 'Il VO₂max cala di circa il 10% per decennio nei sedentari e di circa il 5% in chi si allena regolarmente.' },
      { t: 'Muscle ⟦power⟧ declines earlier and more than strength, and power matters for standing up, climbing stairs and recovering balance.', it: 'La potenza muscolare cala prima e più della forza, e la potenza conta per alzarsi, salire le scale e recuperare l’equilibrio.' },
      { t: 'The WHO advises muscle-strengthening at least 2 days a week, and older adults need a higher protein dose per meal because of ⟦anabolic resistance⟧.', it: 'L’OMS consiglia il rinforzo muscolare almeno 2 giorni a settimana, e gli anziani hanno bisogno di una dose proteica per pasto più alta a causa della resistenza anabolica.' },
      { t: 'Heavy loads are safe in healthy masters with technique and supervision, while risk factors and warning symptoms call for a doctor first.', it: 'I carichi pesanti sono sicuri nei master sani con tecnica e supervisione, mentre fattori di rischio e sintomi d’allarme richiedono prima un medico.' }
    ],
    gloss: [
      { w: 'sarcopenia', it: 'perdita progressiva di massa e funzione muscolare' },
      { w: 'dynapenia', it: 'perdita di forza non spiegata dalla massa' },
      { w: 'power', it: 'potenza muscolare' },
      { w: 'anabolic resistance', it: 'resistenza anabolica' },
      { w: 'master athletes', it: 'atleti master' },
      { w: 'grip strength', it: 'forza di presa' },
      { w: 'age grading', it: 'conversione della prestazione per età' },
      { w: 'multicomponent training', it: 'allenamento multicomponente' },
      { w: 'disuse', it: 'disuso' },
      { w: 'falls', it: 'cadute' }
    ]
  });
  A('spo-adv-sprint-salti', {
    title: { t: 'Sprints and jumps: mechanics, exponential model and periodization', it: 'Sprint e salti: meccanica, modello esponenziale e periodizzazione' },
    sum: [
      { t: 'A 100 m sprint has reaction, acceleration, ⟦maximal velocity⟧ and maintenance phases, and the best athletes slow down least at the end.', it: 'Uno sprint di 100 m ha fasi di reazione, accelerazione, velocità massima e mantenimento, e i migliori rallentano di meno alla fine.' },
      { t: 'In acceleration the ⟦horizontal force⟧ matters most, and a linear force-velocity profile gives maximal power as F0 × V0 / 4.', it: 'Nell’accelerazione conta soprattutto la forza orizzontale, e un profilo forza-velocità lineare dà la potenza massima come F0 × V0 / 4.' },
      { t: 'The ⟦exponential model⟧ v(t) = vmax(1 − e^(−t/τ)) describes acceleration with a ⟦time constant⟧, and a smaller tau means faster acceleration.', it: 'Il modello esponenziale v(t) = vmax(1 − e^(−t/τ)) descrive l’accelerazione con una costante di tempo, e un tau più piccolo significa un’accelerazione più rapida.' },
      { t: 'The model gives split times, but it ignores reaction time and the final deceleration, so it is descriptive, not a physical law.', it: 'Il modello dà i tempi parziali, ma ignora il tempo di reazione e la decelerazione finale, quindi è descrittivo, non una legge fisica.' },
      { t: 'Training maximal velocity uses flying sprints with long recoveries and few repetitions, always fresh.', it: 'Allenare la velocità massima usa sprint lanciati con recuperi lunghi e poche ripetizioni, sempre da freschi.' },
      { t: '⟦Resisted⟧ and assisted sprints complement free sprinting, but evidence is small and mixed, and no optimal sled load exists.', it: 'Gli sprint resistiti e assistiti integrano lo sprint libero, ma l’evidenza è scarsa e contrastante, e non esiste un carico ottimale per la slitta.' },
      { t: 'In jumps, the ⟦reactive strength index⟧ is jump height divided by ground contact time, and flight time gives height as h = g·t²/8.', it: 'Nei salti, l’indice di forza reattiva è l’altezza del salto divisa per il tempo di contatto, e il tempo di volo dà l’altezza come h = g·t²/8.' }
    ],
    gloss: [
      { w: 'horizontal force', it: 'forza orizzontale' },
      { w: 'exponential model', it: 'modello esponenziale della velocità' },
      { w: 'resisted', it: 'resistito, con slitta o elastici' },
      { w: 'reactive strength index', it: 'indice di forza reattiva (RSI)' },
      { w: 'time constant', it: 'costante di tempo (tau)' },
      { w: 'maximal velocity', it: 'velocità massima' },
      { w: 'force-velocity profile', it: 'profilo forza-velocità' },
      { w: 'flying sprint', it: 'sprint lanciato' },
      { w: 'Nordic hamstring', it: 'esercizio eccentrico per i posteriori della coscia' },
      { w: 'drop jump', it: 'salto in profondità' }
    ]
  });
  A('spo-adv-mezzofondo-ultra', {
    title: { t: 'Middle distance, marathon and ultra: models, pacing and racing', it: 'Mezzofondo, maratona e ultra: modelli, pacing e gara' },
    sum: [
      { t: 'Joyner’s model says speed equals VO₂max times the sustainable fraction divided by ⟦running economy⟧, and the three determinants are not independent.', it: 'Il modello di Joyner dice che la velocità è il VO₂max per la frazione sostenibile diviso l’economia di corsa, e i tre determinanti non sono indipendenti.' },
      { t: 'The ⟦VDOT⟧ of Daniels and Gilbert is an effective VO₂max that combines VO₂max and economy, not a laboratory value.', it: 'Il VDOT di Daniels e Gilbert è un VO₂max efficace che combina VO₂max ed economia, non un valore di laboratorio.' },
      { t: 'Strength training improves economy by about 2–8% in meta-analyses, and the best cadence is individual.', it: 'L’allenamento di forza migliora l’economia di circa il 2–8% nelle meta-analisi, e la cadenza migliore è individuale.' },
      { t: 'In long races even ⟦pacing⟧ is close to optimal, and the claim that a ⟦negative split⟧ is always better is unproven.', it: 'Nelle gare lunghe un pacing regolare è vicino all’ottimale, e l’affermazione che il negative split sia sempre migliore non è dimostrata.' },
      { t: 'Going out too fast raises the risk of the “wall”, linked to glycogen depletion, muscle fatigue and heat.', it: 'Partire troppo veloci aumenta il rischio del «muro», legato a esaurimento del glicogeno, fatica muscolare e caldo.' },
      { t: 'Race fuelling uses 30–60 g of carbohydrate per hour, up to 90 g with ⟦multiple transportable carbohydrates⟧, and fluids should not exceed sweat losses.', it: 'Il rifornimento in gara usa 30–60 g di carboidrati all’ora, fino a 90 g con carboidrati multi-trasportabili, e i liquidi non devono superare le perdite di sudore.' },
      { t: 'In ultras the ⟦effort-kilometre⟧ rule adds elevation gain, and advanced shoes lower energy cost by about 2–4% with large individual variation.', it: 'Nelle ultra la regola dei km-sforzo aggiunge il dislivello, e le scarpe avanzate riducono il costo energetico di circa il 2–4% con grande variabilità individuale.' }
    ],
    gloss: [
      { w: 'running economy', it: 'economia di corsa' },
      { w: 'VDOT', it: 'VO₂max efficace di Daniels e Gilbert' },
      { w: 'pacing', it: 'distribuzione dello sforzo in gara' },
      { w: 'effort-kilometre', it: 'km-sforzo, distanza più dislivello/100' },
      { w: 'negative split', it: 'seconda metà più veloce della prima' },
      { w: 'multiple transportable carbohydrates', it: 'carboidrati multi-trasportabili' },
      { w: 'super shoes', it: 'scarpe con piastra in carbonio e schiuma ad alta restituzione' },
      { w: 'hyponatraemia', it: 'iponatriemia da diluizione' },
      { w: 'heat stroke', it: 'colpo di calore' },
      { w: 'ultramarathon', it: 'ultramaratona' }
    ]
  });
  A('spo-adv-ciclismo-nuoto', {
    title: { t: 'Cycling and swimming: power, resistance and pacing', it: 'Ciclismo e nuoto: potenza, resistenza al moto e pacing' },
    sum: [
      { t: 'On flat ground, cycling power is air drag, which grows with the cube of speed, plus ⟦rolling resistance⟧, which grows with speed.', it: 'In piano la potenza in bici è la resistenza dell’aria, che cresce con il cubo della velocità, più la resistenza al rotolamento, che cresce con la velocità.' },
      { t: 'A lower ⟦CdA⟧ saves power at a given speed, which is why time trials care so much about position and equipment.', it: 'Un CdA più basso fa risparmiare potenza a una data velocità, ed è per questo che le cronometro danno tanto peso a posizione e attrezzatura.' },
      { t: 'On climbs, power per kilogram matters most, while ⟦drafting⟧ cuts air drag and headwind raises it strongly.', it: 'In salita conta soprattutto la potenza per chilogrammo, mentre la scia riduce la resistenza dell’aria e il vento contrario la aumenta molto.' },
      { t: 'The critical power model gives CP and W′ from two maximal efforts, and ⟦FTP⟧ is not the same as CP.', it: 'Il modello di potenza critica dà CP e W′ da due sforzi massimali, e la FTP non coincide con la CP.' },
      { t: 'Pacing by power favours steady output, and ⟦normalized power⟧ and the variability index describe how variable an effort was, but they are heuristics.', it: 'Il pacing su potenza favorisce una produzione costante, e la potenza normalizzata e l’indice di variabilità descrivono quanto uno sforzo è stato variabile, ma sono euristiche.' },
      { t: 'In swimming, ⟦critical swim speed⟧ comes from two trials, and resistance grows roughly with the square of speed.', it: 'Nel nuoto la velocità critica viene da due prove, e la resistenza cresce circa con il quadrato della velocità.' },
      { t: 'Swimming speed is stroke length times stroke rate, ⟦SWOLF⟧ is time plus strokes, and technique weighs more in water.', it: 'La velocità nel nuoto è lunghezza di bracciata per frequenza, lo SWOLF è tempo più bracciate, e la tecnica pesa di più in acqua.' }
    ],
    gloss: [
      { w: 'rolling resistance', it: 'resistenza al rotolamento' },
      { w: 'CdA', it: 'area frontale effettiva aerodinamica' },
      { w: 'drafting', it: 'scia, stare dietro a un altro ciclista' },
      { w: 'FTP', it: 'potenza di soglia funzionale' },
      { w: 'normalized power', it: 'potenza normalizzata (NP)' },
      { w: 'critical swim speed', it: 'velocità critica di nuoto (CSS)' },
      { w: 'SWOLF', it: 'indice di efficienza: tempo più bracciate' },
      { w: 'stroke rate', it: 'frequenza di bracciata' },
      { w: 'critical power', it: 'potenza critica' },
      { w: 'variability index', it: 'indice di variabilità' }
    ]
  });
  A('spo-adv-combattimento-elite', {
    title: { t: 'Elite combat and wrestling: demand analysis, weight and concussion', it: 'Combattimento e lotta d’élite: demand analysis, peso e commozione' },
    sum: [
      { t: 'A ⟦demand analysis⟧ describes durations, effort-to-pause ratio and energy systems of a discipline to guide training.', it: 'Una demand analysis descrive durate, rapporto sforzo-pausa e sistemi energetici di una disciplina per guidare l’allenamento.' },
      { t: 'Fights are intermittent, and ⟦phosphocreatine⟧ resynthesis has a half-life of about 30 seconds, so short pauses give incomplete recovery.', it: 'Gli incontri sono intermittenti, e la risintesi della fosfocreatina ha un tempo di dimezzamento di circa 30 secondi, quindi pause brevi danno un recupero incompleto.' },
      { t: 'A good aerobic base helps recovery between actions, and grip endurance may discriminate levels better than maximal ⟦grip strength⟧.', it: 'Una buona base aerobica aiuta il recupero fra le azioni, e la resistenza della presa può discriminare i livelli meglio della forza massima di presa.' },
      { t: 'Rapid ⟦weight cutting⟧ by dehydration is dangerous, especially for minors, and acute loss above about 5% of body mass is high risk.', it: 'Il taglio rapido del peso con disidratazione è pericoloso, soprattutto per i minori, e una perdita acuta oltre circa il 5% della massa corporea è ad alto rischio.' },
      { t: 'Safer approaches choose a category close to natural body composition and lose weight gradually, with a doctor and a nutritionist.', it: 'Gli approcci più sicuri scelgono una categoria vicina alla composizione corporea naturale e perdono peso gradualmente, con un medico e un nutrizionista.' },
      { t: 'A tournament ⟦taper⟧ cuts volume by 40–60% for about 8–14 days while keeping intensity, and between bouts you rehydrate and eat light carbohydrate.', it: 'Il tapering di torneo riduce il volume del 40–60% per circa 8–14 giorni mantenendo l’intensità, e tra gli incontri ci si reidrata e si assumono carboidrati leggeri.' },
      { t: 'For ⟦concussion⟧ the rule is “if in doubt, sit them out”, then medical assessment and a graded return, at least 24 hours per stage.', it: 'Per la commozione cerebrale la regola è «in caso di dubbio, si esce», poi valutazione medica e ritorno graduale, con almeno 24 ore per fase.' }
    ],
    gloss: [
      { w: 'demand analysis', it: 'analisi delle richieste della disciplina' },
      { w: 'phosphocreatine', it: 'fosfocreatina' },
      { w: 'weight cutting', it: 'taglio di peso' },
      { w: 'taper', it: 'scarico pre-gara' },
      { w: 'concussion', it: 'commozione cerebrale' },
      { w: 'grip strength', it: 'forza di presa' },
      { w: 'work-to-rest ratio', it: 'rapporto sforzo-pausa' },
      { w: 'golden score', it: 'tempo supplementare nel judo' },
      { w: 'graded return', it: 'ritorno graduale' },
      { w: 'dehydration', it: 'disidratazione' }
    ]
  });
  A('spo-adv-squadra-elite', {
    title: { t: 'Elite team sport: fixtures, GPS and tactical periodization', it: 'Squadra d’élite: calendario, GPS e tactical periodization' },
    sum: [
      { t: 'In a congested calendar, markers of recovery may need 48–72 hours or more, so recovery between matches is the main work.', it: 'In un calendario congestionato gli indicatori di recupero possono richiedere 48–72 ore o più, quindi il recupero fra le partite è il lavoro principale.' },
      { t: '⟦GPS⟧ tracking quantifies external load such as total distance, ⟦high-speed running⟧ and sprints, but thresholds are arbitrary and systems are not comparable.', it: 'Il tracciamento GPS quantifica il carico esterno come distanza totale, corsa ad alta velocità e sprint, ma le soglie sono arbitrarie e i sistemi non sono confrontabili.' },
      { t: 'Fixed speed thresholds treat all players the same, while ⟦individual thresholds⟧ based on maximal speed change the reading.', it: 'Le soglie di velocità fisse trattano tutti i giocatori allo stesso modo, mentre le soglie individuali basate sulla velocità massima cambiano la lettura.' },
      { t: '⟦Rotation⟧ shares minutes to limit individual load, and three matches with at most two full games each need at least 17 outfield players.', it: 'La rotazione distribuisce i minuti per limitare il carico individuale, e tre partite con al massimo due intere a testa richiedono almeno 17 giocatori di campo.' },
      { t: 'The ⟦acute:chronic ratio⟧ gives different numbers when coupled and uncoupled, so it is a debated heuristic and not a traffic light.', it: 'Il rapporto acuto:cronico dà numeri diversi se accoppiato o non accoppiato, quindi è un’euristica discussa e non un semaforo.' },
      { t: '⟦Tactical periodization⟧ organizes training around the game model with a repeated weekly pattern, but controlled evidence is limited.', it: 'La periodizzazione tattica organizza l’allenamento attorno al modello di gioco con uno schema settimanale ripetuto, ma l’evidenza controllata è limitata.' },
      { t: 'Return from injury is criteria-based, moving through individual, modified team, full team and match stages, with the doctor responsible.', it: 'Il rientro dall’infortunio è a criteri, e passa per fasi individuali, di squadra modificata, di squadra completa e di partita, con il medico responsabile.' }
    ],
    gloss: [
      { w: 'GPS', it: 'sistema di tracciamento della posizione' },
      { w: 'individual thresholds', it: 'soglie individuali di velocità' },
      { w: 'rotation', it: 'rotazione dei giocatori' },
      { w: 'acute:chronic ratio', it: 'rapporto carico acuto:cronico' },
      { w: 'tactical periodization', it: 'periodizzazione tattica' },
      { w: 'high-speed running', it: 'corsa ad alta velocità' },
      { w: 'coupling', it: 'accoppiamento matematico' },
      { w: 'match day', it: 'giorno di partita (MD)' },
      { w: 'return to play', it: 'rientro all’attività' },
      { w: 'fixture congestion', it: 'congestione del calendario' }
    ]
  });
})(window.ST = window.ST || {});
