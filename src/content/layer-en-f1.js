(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A('f1-che-cose-la-f1', {
    title: { t: 'What Formula 1 is', it: 'Che cos’è la Formula 1' },
    sum: [
      { t: '⟦Formula 1⟧ is the top category of circuit racing for ⟦single-seaters⟧: cars with one seat and open wheels.', it: 'La Formula 1 è la massima categoria delle corse in pista per monoposto: auto con un solo posto e ruote scoperte.' },
      { t: 'The ⟦FIA⟧, founded in 1904, writes the sporting and technical rules, appoints the stewards and looks after safety.', it: 'La FIA, fondata nel 1904, scrive il regolamento sportivo e tecnico, nomina i commissari e si occupa della sicurezza.' },
      { t: 'The commercial ⟦promoter⟧, owned by Liberty Media since 2017, sells TV rights; the cars belong to the teams.', it: 'Il promotore commerciale, di Liberty Media dal 2017, vende i diritti televisivi; le auto sono delle squadre.' },
      { t: 'Young drivers climb a ladder of categories and need a ⟦super licence⟧ from the FIA to race in F1.', it: 'I giovani piloti salgono una scala di categorie e hanno bisogno di una superlicenza della FIA per correre in F1.' },
      { t: 'The ⟦Drivers’ Championship⟧ goes to the driver with the most points, and ties are broken by the number of wins.', it: 'Il campionato piloti va al pilota con più punti, e le parità si risolvono con il numero di vittorie.' },
      { t: 'The ⟦Constructors’ Championship⟧ adds up the points of a team’s two drivers, so it rewards the best car overall.', it: 'Il campionato costruttori somma i punti dei due piloti di una squadra, quindi premia l’auto migliore nel complesso.' },
      { t: 'Recent seasons have 10 teams with 2 drivers each, so 20 cars, and up to 24 ⟦Grand Prix⟧ races.', it: 'Le stagioni recenti hanno 10 squadre con 2 piloti ciascuna, quindi 20 auto, e fino a 24 Gran Premi.' }
    ],
    gloss: [
      { w: 'Formula 1', it: 'Formula 1, massima categoria di monoposto' },
      { w: 'single-seaters', it: 'monoposto' },
      { w: 'FIA', it: 'Federazione Internazionale dell’Automobile' },
      { w: 'promoter', it: 'promotore commerciale del campionato' },
      { w: 'super licence', it: 'superlicenza, documento FIA per correre in F1' },
      { w: 'Drivers’ Championship', it: 'campionato piloti' },
      { w: 'Constructors’ Championship', it: 'campionato costruttori' },
      { w: 'Grand Prix', it: 'Gran Premio, singola gara del campionato' },
      { w: 'stewards', it: 'commissari, i giudici che danno le penalità' },
      { w: 'points', it: 'punti' }
    ]
  });
  A('f1-il-weekend-di-gara', {
    title: { t: 'The race weekend', it: 'Il weekend di gara' },
    sum: [
      { t: 'A standard ⟦Grand Prix⟧ weekend lasts three days: practice on Friday, qualifying on Saturday and the race on Sunday.', it: 'Un weekend standard di Gran Premio dura tre giorni: prove il venerdì, qualifiche il sabato e gara la domenica.' },
      { t: '⟦Free practice⟧ sessions last 60 minutes and give no points; teams use them to find the ⟦set-up⟧ and test tyres.', it: 'Le prove libere durano 60 minuti e non danno punti; le squadre le usano per trovare l’assetto e provare le gomme.' },
      { t: '⟦Qualifying⟧ sets the ⟦grid⟧ in three knockout parts, Q1, Q2 and Q3, lasting 18, 15 and 12 minutes.', it: 'Le qualifiche decidono la griglia in tre parti a eliminazione, Q1, Q2 e Q3, di 18, 15 e 12 minuti.' },
      { t: 'The fastest lap in Q3 earns ⟦pole position⟧, the first place on the grid.', it: 'Il giro più veloce in Q3 vale la pole position, il primo posto in griglia.' },
      { t: 'The race uses a ⟦standing start⟧, covers enough laps to exceed 305 km, and cannot last more than 2 hours.', it: 'La gara ha una partenza da fermo, copre i giri necessari a superare i 305 km e non può durare più di 2 ore.' },
      { t: 'In the ⟦sprint⟧ format, used at about six weekends a year, a short race of about 100 km is added on Saturday.', it: 'Nel formato sprint, usato in circa sei weekend all’anno, il sabato si aggiunge una gara breve di circa 100 km.' },
      { t: 'Session times are always local, so check the converted ⟦time zone⟧ to know when the race starts at home.', it: 'Gli orari delle sessioni sono sempre locali, quindi controlla il fuso orario convertito per sapere quando inizia la gara da noi.' }
    ],
    gloss: [
      { w: 'Grand Prix', it: 'Gran Premio' },
      { w: 'free practice', it: 'prove libere (FP1, FP2, FP3)' },
      { w: 'set-up', it: 'assetto, regolazioni dell’auto' },
      { w: 'qualifying', it: 'qualifiche' },
      { w: 'grid', it: 'griglia di partenza' },
      { w: 'pole position', it: 'pole position, primo posto in griglia' },
      { w: 'standing start', it: 'partenza da fermo' },
      { w: 'sprint', it: 'gara sprint, gara breve del sabato' },
      { w: 'Sprint Qualifying', it: 'qualifiche sprint, per la griglia della sprint' },
      { w: 'time zone', it: 'fuso orario' }
    ]
  });
  A('f1-squadre-piloti-ruoli', {
    title: { t: 'Teams, drivers and roles', it: 'Squadre, piloti e ruoli' },
    sum: [
      { t: 'A ⟦team⟧ enters the cars and races, while the ⟦constructor⟧ is the name under which the car and its points are registered.', it: 'La scuderia iscrive le auto e gareggia, mentre il costruttore è il nome sotto cui sono registrate l’auto e i suoi punti.' },
      { t: 'The ⟦team principal⟧ runs the team, represents it to the FIA, and sits on the ⟦pit wall⟧ during the race.', it: 'Il team principal guida la squadra, la rappresenta davanti alla FIA e in gara siede al muretto dei box.' },
      { t: 'The ⟦race engineer⟧ talks to the driver by radio and turns his feelings into technical changes; the ⟦strategist⟧ decides when to pit.', it: 'L’ingegnere di pista parla al pilota via radio e traduce le sue sensazioni in modifiche tecniche; l’ingegnere di strategia decide quando fermarsi ai box.' },
      { t: 'The ⟦pit crew⟧, about twenty people, changes four tyres while the car stands still for roughly 2–3 seconds.', it: 'La squadra di sosta, circa venti persone, cambia quattro gomme mentre l’auto resta ferma circa 2–3 secondi.' },
      { t: 'Each team has two race drivers who are also first rivals, because as ⟦teammates⟧ they drive the same car.', it: 'Ogni squadra ha due piloti titolari che sono anche i primi rivali, perché da compagni di squadra guidano la stessa auto.' },
      { t: 'A ⟦reserve driver⟧ stands in for a race driver in case of illness or injury, and often works in the simulator.', it: 'Il pilota di riserva sostituisce un titolare in caso di malattia o infortunio e spesso lavora al simulatore.' },
      { t: 'The ⟦power unit⟧ is the engine; a ⟦customer team⟧ buys it from a manufacturer but builds its own chassis and aerodynamics.', it: 'La power unit è il motore; una squadra cliente la compra da un costruttore ma progetta da sé telaio e aerodinamica.' }
    ],
    gloss: [
      { w: 'team', it: 'scuderia, squadra che gareggia' },
      { w: 'constructor', it: 'costruttore, nome sotto cui sono registrati auto e punti' },
      { w: 'team principal', it: 'capo della squadra' },
      { w: 'pit wall', it: 'muretto dei box' },
      { w: 'race engineer', it: 'ingegnere di pista' },
      { w: 'strategist', it: 'ingegnere di strategia' },
      { w: 'pit crew', it: 'squadra di sosta' },
      { w: 'teammates', it: 'compagni di squadra' },
      { w: 'reserve driver', it: 'pilota di riserva' },
      { w: 'power unit', it: 'unità motrice ibrida' },
      { w: 'customer team', it: 'squadra cliente' }
    ]
  });
  A('f1-sistema-di-punti', {
    title: { t: 'The points system', it: 'Il sistema di punti' },
    sum: [
      { t: 'Points reward finishing position: in a normal race only the top 10 score, so a retirement gives zero.', it: 'I punti premiano il piazzamento: in una gara normale vanno a punti solo i primi 10, quindi un ritiro dà zero.' },
      { t: 'The ⟦points scale⟧ is 25, 18, 15, 12, 10, 8, 6, 4, 2 and 1 for first to tenth place.', it: 'La scala dei punti è 25, 18, 15, 12, 10, 8, 6, 4, 2 e 1 dal primo al decimo posto.' },
      { t: 'A driver must complete at least 90% of the winner’s distance to be ⟦classified⟧.', it: 'Un pilota deve completare almeno il 90% della distanza del vincitore per essere classificato.' },
      { t: 'In a ⟦sprint⟧ weekend the top eight score 8, 7, 6, 5, 4, 3, 2 and 1 points.', it: 'In un weekend sprint i primi otto prendono 8, 7, 6, 5, 4, 3, 2 e 1 punti.' },
      { t: 'Since 2025 the ⟦fastest lap⟧ no longer gives an extra point; before, it gave 1 point to a top-ten finisher.', it: 'Dal 2025 il giro veloce non dà più un punto extra; prima ne dava 1 a chi arrivava nei primi dieci.' },
      { t: 'A team’s score in the ⟦Constructors’ Championship⟧ is the sum of its two drivers’ points, up to 43 for a 1-2 finish.', it: 'Il punteggio di una squadra nel campionato costruttori è la somma dei punti dei due piloti, fino a 43 con una doppietta 1-2.' },
      { t: 'In a ⟦tie⟧, more wins decide, and a time ⟦penalty⟧ changes the points because it is applied before classification.', it: 'In caso di parità decidono le vittorie, e una penalità di tempo cambia i punti perché si applica prima della classifica.' }
    ],
    gloss: [
      { w: 'points', it: 'punti' },
      { w: 'points scale', it: 'scala dei punti' },
      { w: 'classified', it: 'classificato, che ha percorso abbastanza distanza' },
      { w: 'sprint', it: 'gara sprint' },
      { w: 'fastest lap', it: 'giro veloce' },
      { w: 'Constructors’ Championship', it: 'campionato costruttori' },
      { w: 'penalty', it: 'penalità' },
      { w: 'tie', it: 'parità di punti' },
      { w: 'retirement', it: 'ritiro' },
      { w: 'consistent', it: 'costante, regolare' }
    ]
  });
  A('f1-bandiere-e-segnali', {
    title: { t: 'Flags and signals', it: 'Le bandiere e i segnali' },
    sum: [
      { t: '⟦Marshals⟧ show flags along the track to warn drivers of danger or give an important message; light panels repeat them.', it: 'I commissari di percorso mostrano le bandiere lungo la pista per avvisare di un pericolo o dare un’informazione importante; i pannelli luminosi le ripetono.' },
      { t: 'A ⟦yellow flag⟧ means danger: slow down and do not overtake; a double yellow means be ready to stop.', it: 'La bandiera gialla significa pericolo: rallenta e non sorpassare; la doppia gialla significa essere pronti a fermarsi.' },
      { t: 'A ⟦red flag⟧ stops the session: cars return slowly to the pit lane, and a race restarts from a standing start.', it: 'La bandiera rossa ferma la sessione: le auto rientrano lentamente ai box e la gara riparte con una partenza da fermi.' },
      { t: 'A ⟦blue flag⟧ tells a ⟦lapped⟧ driver to let the faster car through quickly; ignoring it can bring a penalty.', it: 'La bandiera blu dice a un pilota doppiato di lasciar passare in fretta l’auto più veloce; ignorarla può portare a una penalità.' },
      { t: 'The ⟦chequered flag⟧ marks the finish; after the in-lap the cars go to the ⟦parc fermé⟧ for checks.', it: 'La bandiera a scacchi segna la fine; dopo il giro di rientro le auto vanno al parco chiuso per i controlli.' },
      { t: 'A ⟦black flag⟧ means disqualification; black with an orange circle signals a mechanical problem, black and white a warning.', it: 'La bandiera nera significa squalifica; nera con cerchio arancione segnala un problema meccanico, nera e bianca un avvertimento.' },
      { t: 'Behind the ⟦safety car⟧ the field bunches up, while under the ⟦VSC⟧ drivers keep above a minimum time and gaps stay similar.', it: 'Dietro la safety car il gruppo si compatta, mentre con la VSC i piloti restano sopra un tempo minimo e i distacchi restano simili.' }
    ],
    gloss: [
      { w: 'marshals', it: 'commissari di percorso' },
      { w: 'yellow flag', it: 'bandiera gialla, pericolo' },
      { w: 'red flag', it: 'bandiera rossa, sessione fermata' },
      { w: 'blue flag', it: 'bandiera blu, lascia passare' },
      { w: 'lapped', it: 'doppiato, con almeno un giro di ritardo' },
      { w: 'chequered flag', it: 'bandiera a scacchi, fine' },
      { w: 'parc fermé', it: 'parco chiuso dove le auto vengono controllate' },
      { w: 'black flag', it: 'bandiera nera, squalifica' },
      { w: 'safety car', it: 'auto di sicurezza' },
      { w: 'VSC', it: 'virtual safety car' },
      { w: 'delta', it: 'tempo minimo indicato sul volante durante la VSC' }
    ]
  });
  A('f1-il-circuito', {
    title: { t: 'The circuit', it: 'Il circuito' },
    sum: [
      { t: 'A ⟦circuit⟧ is a closed track; a lap measures about 3 to 7 km, and race distance is length times laps.', it: 'Un circuito è un percorso chiuso; un giro misura circa da 3 a 7 km, e la distanza di gara è lunghezza per giri.' },
      { t: 'Corners include the ⟦hairpin⟧ and the ⟦chicane⟧, and each has an ⟦apex⟧, the innermost point of the racing line.', it: 'Le curve comprendono il tornante e la chicane, e ognuna ha un punto di corda, il punto più interno della traiettoria.' },
      { t: 'On long straights cars reach about 330–350 km/h, then brake hard in the ⟦braking zone⟧, where time is won or lost.', it: 'Sui rettilinei lunghi le auto raggiungono circa 330–350 km/h, poi frenano forte nella staccata, dove si guadagna o si perde tempo.' },
      { t: 'Each circuit is split into three ⟦sectors⟧, and the lap time is the sum of the three sector times.', it: 'Ogni circuito è diviso in tre settori, e il tempo del giro è la somma dei tre tempi di settore.' },
      { t: '⟦Track limits⟧ are the white lines at the edge; leaving them with an advantage can cancel a lap or bring a penalty.', it: 'I limiti pista sono le linee bianche ai bordi; uscirne ottenendo un vantaggio può cancellare un giro o portare una penalità.' },
      { t: 'Up to 2025, a car within 1 second at the detection point may open its rear-wing ⟦DRS⟧ in a marked zone.', it: 'Fino al 2025, un’auto a meno di 1 secondo nel punto di rilevamento può aprire il DRS dell’ala posteriore in una zona indicata.' },
      { t: '⟦Street circuits⟧ are narrower, with walls close to the track, while permanent circuits have wide ⟦run-off⟧ areas.', it: 'I circuiti cittadini sono più stretti, con muri vicini alla pista, mentre i circuiti permanenti hanno ampie vie di fuga.' }
    ],
    gloss: [
      { w: 'circuit', it: 'circuito, percorso chiuso' },
      { w: 'hairpin', it: 'tornante' },
      { w: 'chicane', it: 'chicane, due curve ravvicinate in senso opposto' },
      { w: 'apex', it: 'punto di corda' },
      { w: 'braking zone', it: 'staccata' },
      { w: 'sectors', it: 'settori' },
      { w: 'track limits', it: 'limiti pista' },
      { w: 'DRS', it: 'Drag Reduction System, ala posteriore apribile' },
      { w: 'detection point', it: 'punto di rilevamento' },
      { w: 'street circuits', it: 'circuiti cittadini' },
      { w: 'run-off', it: 'via di fuga' }
    ]
  });
  A('f1-la-monoposto-in-sintesi', {
    title: { t: 'The single-seater at a glance', it: 'La monoposto in sintesi' },
    sum: [
      { t: 'An F1 car has one goal, a fast lap, so it has one seat, open wheels, large wings and no comfort items.', it: 'Una F1 ha un solo obiettivo, andare veloce sul giro, quindi ha un posto solo, ruote scoperte e grandi ali, e nessun comfort.' },
      { t: 'The ⟦power unit⟧ gives about 1000 hp for about 800 kg, a far higher ⟦power-to-weight ratio⟧ than a family car.', it: 'La power unit dà circa 1000 CV e il peso minimo è circa 800 kg, un rapporto peso/potenza molto più alto di un’auto familiare.' },
      { t: '⟦Downforce⟧ presses the car onto the track, adds ⟦grip⟧ and allows fast corners; at high speed it can exceed the car’s weight.', it: 'Il carico aerodinamico spinge l’auto sull’asfalto, aumenta l’aderenza e permette curve veloci; ad alta velocità può superare il peso dell’auto.' },
      { t: 'Its price is ⟦drag⟧, so engineers use more downforce at slow Monaco and less at fast Monza.', it: 'Il prezzo è la resistenza all’aria, quindi gli ingegneri usano più carico a Monaco, lento, e meno a Monza, veloce.' },
      { t: 'The ⟦monocoque⟧ is the rigid carbon-fibre survival cell, and the ⟦halo⟧, custom seat, helmet and belts also protect the driver.', it: 'La monoscocca è la cellula di sopravvivenza rigida in fibra di carbonio, e anche halo, sedile su misura, casco e cinture proteggono il pilota.' },
      { t: 'Tyres are the only contact with the track, and dry ⟦compounds⟧ come as soft, medium and hard, with other types for rain.', it: 'Le gomme sono l’unico contatto con la pista, e le mescole da asciutto sono morbida, media e dura, con altre per la pioggia.' },
      { t: 'The steering wheel is a control centre with buttons for gears, ⟦brake balance⟧, electrical energy and the team radio.', it: 'Il volante è un centro di comando con pulsanti per marce, ripartizione della frenata, energia elettrica e radio della squadra.' }
    ],
    gloss: [
      { w: 'power unit', it: 'unità motrice ibrida' },
      { w: 'power-to-weight ratio', it: 'rapporto peso/potenza' },
      { w: 'downforce', it: 'carico aerodinamico, deportanza' },
      { w: 'grip', it: 'aderenza' },
      { w: 'drag', it: 'resistenza all’aria' },
      { w: 'aerodynamics', it: 'aerodinamica' },
      { w: 'monocoque', it: 'scocca, cellula di sopravvivenza' },
      { w: 'halo', it: 'struttura in titanio sopra la testa del pilota' },
      { w: 'compounds', it: 'mescole delle gomme' },
      { w: 'brake balance', it: 'ripartizione della frenata' }
    ]
  });
  A('f1-guardare-una-gara', {
    title: { t: 'How to watch and understand a race', it: 'Come guardare e capire una gara' },
    sum: [
      { t: 'The ⟦timing tower⟧ shows the live order with each driver’s three-letter code, team colour, gap and tyre type.', it: 'La torre dei tempi mostra la classifica in tempo reale con il codice di tre lettere, il colore della squadra, il distacco e la gomma di ogni pilota.' },
      { t: 'The ⟦gap⟧ is the distance to the leader, while the ⟦interval⟧ is the distance to the car directly ahead.', it: 'Il gap è il distacco dal leader, mentre l’intervallo è il distacco dall’auto immediatamente davanti.' },
      { t: 'If B is 2.5 s behind A and C is 1.0 s behind B, C’s gap is 3.5 s.', it: 'Se B è a 2,5 s da A e C è a 1,0 s da B, il gap di C è 3,5 s.' },
      { t: 'Below 1 second the chasing car can use ⟦DRS⟧ (rules up to 2025), so the interval shows who may attack.', it: 'Sotto 1 secondo l’auto che insegue può usare il DRS (regolamento fino al 2025), quindi l’intervallo mostra chi può attaccare.' },
      { t: '⟦Purple⟧ means the best time of everyone in that sector, green a personal best, and yellow slower than the driver’s best.', it: 'Il viola indica il miglior tempo di tutti in quel settore, il verde un record personale e il giallo più lento del proprio miglior tempo.' },
      { t: 'A tyre symbol shows soft, medium or hard and its age in laps; old tyres are probably slow because of ⟦degradation⟧.', it: 'Un simbolo mostra gomma morbida, media o dura, con la sua età in giri, e una gomma vecchia è probabilmente lenta per il degrado.' },
      { t: 'A ⟦pit stop⟧ keeps the car still for 2–3 seconds, but the whole pit lane passage costs about 20 seconds.', it: 'Una sosta ai box tiene l’auto ferma 2–3 secondi, ma l’intero passaggio nella corsia dei box costa circa 20 secondi.' }
    ],
    gloss: [
      { w: 'timing tower', it: 'torre dei tempi, classifica sullo schermo' },
      { w: 'gap', it: 'distacco dal leader' },
      { w: 'interval', it: 'distacco dall’auto davanti' },
      { w: 'DRS', it: 'Drag Reduction System' },
      { w: 'purple', it: 'viola, miglior tempo di tutti in un settore' },
      { w: 'degradation', it: 'degrado delle gomme' },
      { w: 'pit stop', it: 'sosta ai box' },
      { w: 'race control', it: 'direzione gara' },
      { w: 'team radio', it: 'radio tra pilota e squadra' },
      { w: 'drive-through', it: 'passaggio in corsia box senza fermarsi, penalità' }
    ]
  });
  A('f1-glossario-e-numeri', {
    title: { t: 'Glossary and reference numbers', it: 'Glossario e numeri di riferimento' },
    sum: [
      { t: 'The ⟦fastest lap⟧ is the quickest race lap and gives no points since 2025, while ⟦pole position⟧ is won in qualifying.', it: 'Il giro veloce è il giro più rapido in gara e dal 2025 non dà punti, mentre la pole position si ottiene in qualifica.' },
      { t: 'In ⟦parc fermé⟧ teams cannot freely modify the car after qualifying starts; breaking this can mean starting from the pit lane.', it: 'Nel parco chiuso le squadre non possono modificare liberamente l’auto dopo l’inizio delle qualifiche; violarlo può significare partire dai box.' },
      { t: 'A ⟦stint⟧ is the stretch between stops: one stop on lap 24 of 60 gives stints of 24 and 36 laps.', it: 'Lo stint è il tratto fra due soste: con una sosta al giro 24 in una gara di 60 giri, gli stint sono di 24 e 36 giri.' },
      { t: 'An ⟦undercut⟧ means stopping earlier and using fresh tyres to gain time; an ⟦overcut⟧ means stopping later.', it: 'L’undercut significa fermarsi prima e usare gomme nuove per guadagnare tempo; l’overcut significa fermarsi dopo.' },
      { t: '⟦Degradation⟧ is the loss of tyre performance over laps, for example 0.05–0.1 s per lap; a sudden collapse is a cliff.', it: 'Il degrado è la perdita di prestazione delle gomme nei giri, per esempio 0,05–0,1 s per giro; un crollo improvviso è un cliff.' },
      { t: '⟦DNF⟧ means did not finish, ⟦DNS⟧ did not start, and the ⟦pit window⟧ is the range of laps for stopping.', it: 'DNF significa non ha finito e DNS non ha preso il via, mentre la pit window è l’intervallo di giri in cui la sosta conviene.' },
      { t: 'Two simple formulas: average speed is distance over time, and race distance is lap length times number of laps.', it: 'Due formule semplici: la velocità media è distanza su tempo, e la distanza di gara è lunghezza del giro per numero di giri.' }
    ],
    gloss: [
      { w: 'fastest lap', it: 'giro veloce' },
      { w: 'pole position', it: 'primo posto in griglia' },
      { w: 'parc fermé', it: 'parco chiuso, regime di controllo dell’auto' },
      { w: 'stint', it: 'tratto di gara fra due soste' },
      { w: 'undercut', it: 'fermarsi prima dell’avversario per sorpassarlo' },
      { w: 'overcut', it: 'fermarsi dopo l’avversario per sorpassarlo' },
      { w: 'degradation', it: 'degrado, perdita di prestazione delle gomme' },
      { w: 'DNF', it: 'Did Not Finish, ritiro' },
      { w: 'DNS', it: 'Did Not Start, non ha preso il via' },
      { w: 'pit window', it: 'intervallo di giri in cui la sosta conviene' }
    ]
  });
  A('f1-formato-del-weekend', {
    title: { t: 'The weekend format: qualifying, sprint and grid', it: 'Il formato del weekend: qualifiche, sprint e griglia' },
    sum: [
      { t: 'A normal weekend has three practice sessions; a ⟦sprint weekend⟧ has only one, plus a sprint race on Saturday.', it: 'Un weekend normale ha tre prove libere; un weekend sprint ne ha una sola, più la gara sprint del sabato.' },
      { t: '⟦Qualifying⟧ has three knockout parts: 20 cars in Q1 (18 minutes), 15 in Q2 (15 minutes) and 10 in Q3 (12 minutes).', it: 'La qualifica ha tre parti a eliminazione: 20 vetture in Q1 (18 minuti), 15 in Q2 (15 minuti) e 10 in Q3 (12 minuti).' },
      { t: 'Each part counts the best lap, and a lap that breaks the ⟦track limits⟧ is cancelled.', it: 'Ogni parte conta il miglior giro, e un giro che viola i limiti pista viene cancellato.' },
      { t: 'The ⟦grid⟧ has two staggered columns, so 20 cars make 10 rows; a car that misses it starts from the pit lane.', it: 'La griglia ha due colonne sfalsate, quindi 20 vetture formano 10 file, e una vettura che non la raggiunge parte dalla corsia dei box.' },
      { t: '⟦Sprint Qualifying⟧ has SQ1, SQ2 and SQ3 of 12, 10 and 8 minutes, and sets only the grid of the sprint.', it: 'La qualifica sprint ha SQ1, SQ2 e SQ3 di 12, 10 e 8 minuti, e decide solo la griglia della sprint.' },
      { t: 'The ⟦sprint⟧ is about 100 km with no mandatory stop, and the top eight score 8 down to 1.', it: 'La sprint è di circa 100 km senza sosta obbligatoria, e i primi otto prendono da 8 a 1 punti.' },
      { t: '⟦Grid penalties⟧ move a driver backwards: for example, qualifying 4th with a 5-place penalty means starting 9th.', it: 'Le penalità di griglia fanno arretrare un pilota: per esempio, qualificarsi 4° con 5 posizioni di penalità significa partire 9°.' }
    ],
    gloss: [
      { w: 'sprint weekend', it: 'weekend con gara sprint' },
      { w: 'qualifying', it: 'qualifica' },
      { w: 'track limits', it: 'limiti pista' },
      { w: 'grid', it: 'griglia di partenza' },
      { w: 'Sprint Qualifying', it: 'qualifica sprint (SQ)' },
      { w: 'sprint', it: 'gara sprint' },
      { w: 'grid penalties', it: 'penalità di griglia' },
      { w: 'pole position', it: 'primo posto in griglia' },
      { w: 'pit lane', it: 'corsia dei box' },
      { w: 'knockout', it: 'a eliminazione' }
    ]
  });
  A('f1-la-gara-distanza-punti', {
    title: { t: 'The race: start, distance, time limit and points', it: 'La gara: partenza, distanza, tempo massimo e punti' },
    sum: [
      { t: 'After the ⟦formation lap⟧, five red lights go out together for a ⟦standing start⟧; moving early is a false start.', it: 'Dopo il giro di formazione, cinque luci rosse si spengono insieme per una partenza da fermo; muoversi prima è una falsa partenza.' },
      { t: 'Race distance is the fewest whole laps above 305 km, so lap counts vary; Monaco is the exception at about 260 km.', it: 'La distanza di gara è il minimo numero di giri interi oltre 305 km, quindi i giri variano; Monaco fa eccezione con circa 260 km.' },
      { t: 'The time limit is 2 hours from the start, or 3 hours in total if a ⟦red flag⟧ interrupts.', it: 'C’è un limite di tempo di 2 ore dal via, e fino a 3 ore in totale se una bandiera rossa interrompe la gara.' },
      { t: 'The top ten score 25, 18, 15, 12, 10, 8, 6, 4, 2 and 1; the ⟦fastest lap⟧ point ended in 2025.', it: 'I primi dieci prendono 25, 18, 15, 12, 10, 8, 6, 4, 2 e 1 punti, e il punto del giro veloce è stato abolito nel 2025.' },
      { t: 'To be ⟦classified⟧ a driver needs at least 90% of the winner’s distance, even if the car is not at the finish.', it: 'Per essere classificato un pilota deve percorrere almeno il 90% della distanza del vincitore, anche se l’auto non è al traguardo.' },
      { t: 'In the ⟦Constructors’ Championship⟧ the points of both cars add up, so a team can score at most 43 in a race.', it: 'Nel campionato costruttori si sommano i punti di entrambe le vetture, quindi una squadra può prendere al massimo 43 punti in una gara.' },
      { t: 'If a race is stopped early, full points are given beyond 75% of the distance; below that, points are reduced.', it: 'Se una gara è fermata in anticipo, oltre il 75% della distanza si danno punti pieni; sotto, i punti sono ridotti.' }
    ],
    gloss: [
      { w: 'formation lap', it: 'giro di formazione' },
      { w: 'standing start', it: 'partenza da fermo' },
      { w: 'false start', it: 'falsa partenza' },
      { w: 'red flag', it: 'bandiera rossa' },
      { w: 'fastest lap', it: 'giro veloce' },
      { w: 'classified', it: 'classificato' },
      { w: 'Constructors’ Championship', it: 'campionato costruttori' },
      { w: 'provisional', it: 'provvisorio, non ancora definitivo' },
      { w: 'lapped', it: 'doppiato' },
      { w: 'time limit', it: 'tempo massimo' }
    ]
  });
  A('f1-safety-car-vsc-bandiera-rossa', {
    title: { t: 'Safety car, VSC and red flag', it: 'Safety car, VSC e bandiera rossa' },
    sum: [
      { t: 'The ⟦race director⟧ neutralises a race with yellow flags, a ⟦VSC⟧, a ⟦safety car⟧ or a red flag, by danger level.', it: 'Il direttore di gara può neutralizzare la corsa con bandiere gialle, VSC, safety car o bandiera rossa, secondo il pericolo.' },
      { t: 'Under a safety car the cars queue behind it, overtaking is banned, and the ⟦pit lane⟧ stays open.', it: 'Sotto safety car le vetture si mettono in fila dietro di essa, i sorpassi sono vietati e la corsia box resta aperta.' },
      { t: 'The gaps between drivers disappear, and laps under the safety car still count as race laps.', it: 'I distacchi fra i piloti scompaiono, e i giri sotto safety car contano comunque come giri di gara.' },
      { t: 'A pit stop costs about half as much time under the safety car, so it can turn strategies upside down.', it: 'Una sosta costa circa metà del tempo sotto safety car, quindi può ribaltare le strategie.' },
      { t: 'Under the VSC, drivers stay above a ⟦delta⟧ time shown on the wheel, so the gaps stay the same.', it: 'Con la VSC i piloti restano sopra un tempo delta indicato sul volante, quindi i distacchi restano invariati.' },
      { t: 'At the ⟦restart⟧ the leader sets the pace, and overtaking is allowed once the leader crosses the control line.', it: 'Alla ripartenza il leader decide il ritmo, e i sorpassi sono permessi quando il leader passa la linea di controllo.' },
      { t: 'A ⟦red flag⟧ stops the race, teams may change tyres, and the restart is a standing start after a new formation lap.', it: 'La bandiera rossa ferma la gara, le squadre possono cambiare le gomme e la ripartenza è da fermo dopo un nuovo giro di formazione.' }
    ],
    gloss: [
      { w: 'race director', it: 'direttore di gara' },
      { w: 'VSC', it: 'virtual safety car' },
      { w: 'safety car', it: 'auto di sicurezza che guida il gruppo' },
      { w: 'pit lane', it: 'corsia dei box' },
      { w: 'delta', it: 'tempo-limite indicato sul volante' },
      { w: 'restart', it: 'ripartenza' },
      { w: 'control line', it: 'linea di controllo' },
      { w: 'red flag', it: 'bandiera rossa' },
      { w: 'lapped', it: 'doppiato' },
      { w: 'standing start', it: 'partenza da fermo' }
    ]
  });
  A('f1-penalita-e-commissari', {
    title: { t: 'Penalties, stewards and penalty points', it: 'Penalità, commissari e punti patente' },
    sum: [
      { t: 'The ⟦stewards⟧ decide penalties, while the ⟦race director⟧ runs the session and only reports incidents to them.', it: 'I commissari decidono le penalità, mentre il direttore di gara dirige la sessione e si limita a segnalare gli episodi.' },
      { t: 'Common penalties are 5 or 10 seconds, a ⟦drive-through⟧, a ⟦stop&go⟧, a grid drop and disqualification.', it: 'Le penalità comuni sono 5 o 10 secondi, un drive-through, uno stop&go, l’arretramento in griglia e la squalifica.' },
      { t: 'A 10-second penalty turns an 8.0-second lead into a 2.0-second deficit, so the finishing order changes.', it: 'Una penalità di 10 secondi trasforma 8,0 secondi di vantaggio in 2,0 secondi di ritardo, quindi l’ordine di arrivo cambia.' },
      { t: 'Infringements can add ⟦penalty points⟧ to the super licence, and 12 points in 12 months mean a one-race ban.', it: 'Le infrazioni possono aggiungere punti patente alla super licenza, e 12 punti in 12 mesi comportano una gara di sospensione.' },
      { t: 'A lap that breaks ⟦track limits⟧ is cancelled in qualifying; in the race, warnings are followed by a 5-second penalty.', it: 'Un giro che viola i limiti pista è cancellato in qualifica; in gara gli avvisi sono seguiti da una penalità di 5 secondi.' },
      { t: 'The driver who causes a collision usually gets 5 or 10 seconds; shared blame is a ⟦racing incident⟧.', it: 'Il pilota che causa una collisione riceve in genere 5 o 10 secondi; una responsabilità condivisa è un incidente di gara.' },
      { t: 'Teams can protest, ask for a ⟦right of review⟧ on new evidence, or appeal to the FIA International Court of Appeal.', it: 'Le squadre possono protestare, chiedere una revisione se emergono elementi nuovi o ricorrere alla Corte d’Appello Internazionale della FIA.' }
    ],
    gloss: [
      { w: 'stewards', it: 'commissari sportivi, gli arbitri che decidono le sanzioni' },
      { w: 'race director', it: 'direttore di gara' },
      { w: 'drive-through', it: 'passaggio in corsia box senza fermarsi' },
      { w: 'stop&go', it: 'sosta al proprio box per un tempo prefissato' },
      { w: 'penalty points', it: 'punti patente sulla super licenza' },
      { w: 'super licence', it: 'super licenza' },
      { w: 'track limits', it: 'limiti pista' },
      { w: 'racing incident', it: 'incidente di gara, senza penalità' },
      { w: 'right of review', it: 'diritto di revisione di una decisione' },
      { w: 'reprimand', it: 'ammonizione' }
    ]
  });
  A('f1-gomme-e-carburante', {
    title: { t: 'Tyres and fuel in the regulations', it: 'Gomme e carburante nel regolamento' },
    sum: [
      { t: 'Pirelli is the single tyre supplier, with dry slicks, green ⟦intermediates⟧ and blue ⟦full wets⟧.', it: 'Pirelli è l’unico fornitore di gomme, con slick da asciutto, intermedie verdi e full wet blu.' },
      { t: 'The three ⟦compounds⟧ of a weekend are called hard, medium and soft, so the names are relative, not fixed.', it: 'Le tre mescole di un weekend si chiamano hard, medium e soft, quindi i nomi sono relativi, non fissi.' },
      { t: 'A soft compound gives more ⟦grip⟧ but less life, while a hard one does the opposite.', it: 'Una mescola morbida dà più aderenza ma dura meno, una dura fa il contrario.' },
      { t: 'Each driver gets limited ⟦tyre sets⟧: 13 dry (8 soft, 3 medium, 2 hard), 4 intermediate and 3 full wet.', it: 'Ogni pilota riceve set limitati: 13 a secco (8 soft, 3 medium, 2 hard), 4 di intermedie e 3 di full wet.' },
      { t: 'The ⟦two-compound rule⟧ requires two different dry compounds in a dry race, so at least one pit stop.', it: 'L’obbligo di due mescole richiede due mescole a secco diverse in gara asciutta, quindi almeno una sosta.' },
      { t: 'Refuelling is banned since 2010; the limit is 110 kg of fuel per race with a maximum ⟦fuel flow⟧ of 100 kg/h.', it: 'Il rifornimento è vietato dal 2010; il limite è 110 kg di carburante per gara con un flusso massimo di 100 kg/h.' },
      { t: 'The ⟦minimum weight⟧ is 800 kg without fuel in 2025, and ⟦ballast⟧ is added if the driver is below 80 kg.', it: 'Il peso minimo è 800 kg senza carburante nel 2025, e si aggiunge zavorra se il pilota pesa meno di 80 kg.' }
    ],
    gloss: [
      { w: 'intermediates', it: 'intermedie, gomme verdi per pista umida' },
      { w: 'full wets', it: 'gomme da bagnato estremo (blu)' },
      { w: 'compounds', it: 'mescole' },
      { w: 'grip', it: 'aderenza' },
      { w: 'tyre sets', it: 'set di gomme assegnati per weekend' },
      { w: 'two-compound rule', it: 'obbligo di due mescole diverse in gara asciutta' },
      { w: 'fuel flow', it: 'flusso massimo di carburante' },
      { w: 'minimum weight', it: 'peso minimo della vettura' },
      { w: 'ballast', it: 'zavorra' },
      { w: 'slick', it: 'gomma da asciutto' }
    ]
  });
  A('f1-regolamento-tecnico-principale', {
    title: { t: 'The main technical regulations', it: 'Il regolamento tecnico principale' },
    sum: [
      { t: 'The ⟦technical regulations⟧ aim at safety, fairness and cost control, and a better show through overtaking.', it: 'Il regolamento tecnico mira a sicurezza, equità e controllo dei costi, e a più spettacolo grazie ai sorpassi.' },
      { t: 'Main limits: maximum width 2000 mm, maximum ⟦wheelbase⟧ 3600 mm, minimum weight 800 kg in 2025, and 18-inch wheels.', it: 'Limiti principali: larghezza massima 2000 mm, passo massimo 3600 mm, peso minimo 800 kg nel 2025 e ruote da 18 pollici.' },
      { t: 'Since 2022, ⟦ground effect⟧ gives much of the grip, and a wooden ⟦plank⟧ under the car limits ride height.', it: 'Dal 2022 l’effetto suolo dà gran parte dell’aderenza, e un pattino di legno sotto la vettura limita l’altezza da terra.' },
      { t: 'The plank is 10 mm thick and may wear by 1 mm, so 9 mm must remain, or the car is disqualified.', it: 'Il pattino è spesso 10 mm e può consumarsi di 1 mm, quindi ne devono restare 9, altrimenti la vettura è squalificata.' },
      { t: '⟦DRS⟧ may be used in marked zones, within 1 second at the detection point, but not in the first two laps.', it: 'Il DRS si può usare nelle zone indicate, a meno di 1 secondo al punto di rilevamento, ma non nei primi due giri.' },
      { t: 'The 2024–2025 ⟦power unit⟧ is a 1.6-litre V6 turbo hybrid with a 120 kW ⟦MGU-K⟧; the ⟦MGU-H⟧ goes in 2026.', it: 'La power unit 2024–2025 è un V6 turbo ibrido da 1,6 litri con MGU-K da 120 kW; l’MGU-H viene eliminato dal 2026.' },
      { t: '⟦Parc fermé⟧ begins at the start of qualifying and bans free changes; illegal changes mean starting from the pit lane.', it: 'Il parc fermé inizia al via della qualifica e vieta modifiche libere; modifiche non consentite portano alla partenza dalla corsia box.' }
    ],
    gloss: [
      { w: 'technical regulations', it: 'regolamento tecnico' },
      { w: 'wheelbase', it: 'passo, distanza fra gli assi' },
      { w: 'ground effect', it: 'effetto suolo' },
      { w: 'plank', it: 'pattino di legno composito sotto la vettura' },
      { w: 'DRS', it: 'Drag Reduction System, ala posteriore mobile' },
      { w: 'power unit', it: 'unità motrice ibrida' },
      { w: 'MGU-K', it: 'motore-generatore sull’albero motore' },
      { w: 'MGU-H', it: 'recupera energia dai gas di scarico' },
      { w: 'parc fermé', it: 'regime che vieta di modificare liberamente la vettura' },
      { w: 'homologation', it: 'omologazione, parti congelate' }
    ]
  });
  A('f1-budget-cap', {
    title: { t: 'Budget cap and financial rules', it: 'Budget cap e regole finanziarie' },
    sum: [
      { t: 'The ⟦budget cap⟧, introduced in 2021, limits relevant spending to balance the championship, at roughly 135–145 million dollars a year.', it: 'Il budget cap, introdotto nel 2021, limita la spesa rilevante per equilibrare il campionato, nell’ordine di 135–145 milioni di dollari l’anno.' },
      { t: 'It covers costs of car performance, such as design, production, ⟦wind tunnel⟧, ⟦CFD⟧ and simulators.', it: 'Riguarda i costi legati alla prestazione della vettura, come progettazione, produzione, galleria del vento, CFD e simulatori.' },
      { t: 'It excludes driver salaries, the three highest-paid executives and marketing.', it: 'Esclude gli stipendi dei piloti, i tre dirigenti più pagati e il marketing.' },
      { t: 'For example, 140 million spent minus 8 for drivers and 2 for marketing leaves 130 million of ⟦relevant spending⟧.', it: 'Per esempio, 140 milioni spesi meno 8 per i piloti e 2 per il marketing lasciano 130 milioni di spesa rilevante.' },
      { t: 'A ⟦minor overspend⟧ is under 5% of the cap, while a ⟦material overspend⟧ is above 5% and brings harsher penalties.', it: 'Una violazione minore è sotto il 5% del tetto, mentre una materiale è sopra il 5% e comporta sanzioni più dure.' },
      { t: 'In 2022 Red Bull was found to have a minor overspend for 2021: a fine of about 7 million dollars.', it: 'Nel 2022 Red Bull risultò avere una violazione minore per il 2021: una multa di circa 7 milioni di dollari.' },
      { t: 'The ⟦ATR⟧ limits wind-tunnel time and CFD on a sliding scale: 70% of the base quota for the champion, 115% for last.', it: 'L’ATR limita galleria del vento e CFD con una scala mobile: 70% della quota base per il campione, 115% per l’ultima squadra.' }
    ],
    gloss: [
      { w: 'budget cap', it: 'tetto di spesa' },
      { w: 'relevant spending', it: 'spesa rilevante, soggetta al tetto' },
      { w: 'wind tunnel', it: 'galleria del vento' },
      { w: 'CFD', it: 'simulazione fluidodinamica al computer' },
      { w: 'minor overspend', it: 'violazione minore, eccesso sotto il 5%' },
      { w: 'material overspend', it: 'violazione materiale, eccesso sopra il 5%' },
      { w: 'ATR', it: 'Aerodynamic Testing Restrictions, limiti alle prove aerodinamiche' },
      { w: 'Financial Regulations', it: 'Regolamento finanziario' },
      { w: 'sliding scale', it: 'scala mobile' },
      { w: 'procedural breach', it: 'violazione procedurale, per esempio documenti incompleti' }
    ]
  });
  A('f1-governance-fia-fom', {
    title: { t: 'Governance: FIA, FOM and how the rules change', it: 'Governance: FIA, FOM e come cambiano le regole' },
    sum: [
      { t: 'The ⟦FIA⟧ writes and enforces the sporting, technical and financial rules and looks after safety; it is based in Paris.', it: 'La FIA scrive e applica i regolamenti sportivo, tecnico e finanziario e tutela la sicurezza; ha sede a Parigi.' },
      { t: 'The commercial side belongs to the ⟦promoter⟧, Formula One Management (⟦FOM⟧), owned by Liberty Media since 2017.', it: 'La parte commerciale spetta al promotore, Formula One Management (FOM), di proprietà di Liberty Media dal 2017.' },
      { t: 'In short, the FIA decides how to race, and the promoter decides how to sell the show.', it: 'In breve, la FIA decide come si corre, il promotore come si vende lo spettacolo.' },
      { t: 'The ⟦Concorde Agreement⟧ is a confidential contract among the FIA, promoter and teams; the first dates from 1981.', it: 'Il Concorde Agreement è un contratto riservato fra FIA, promotore e squadre; il primo è del 1981.' },
      { t: 'A ⟦Super Licence⟧ needs age 18, 40 points in three years and at least 300 km in an F1 car.', it: 'Per ottenere la Super Licenza un pilota deve avere 18 anni, ottenere 40 punti in tre anni e percorrere 300 km con una F1.' },
      { t: 'Rules are discussed in the ⟦F1 Commission⟧, then formally approved by the ⟦WMSC⟧.', it: 'Le regole sono discusse nella Commissione F1 e poi approvate formalmente dal WMSC.' },
      { t: 'Ordinary changes need at least a year’s notice, while urgent safety changes can be made quickly, even mid-season.', it: 'Le modifiche ordinarie richiedono almeno un anno di preavviso, mentre quelle urgenti per sicurezza possono avvenire rapidamente, anche in stagione.' }
    ],
    gloss: [
      { w: 'FIA', it: 'Federazione Internazionale dell’Automobile, il regolatore' },
      { w: 'promoter', it: 'promotore commerciale' },
      { w: 'FOM', it: 'Formula One Management' },
      { w: 'Concorde Agreement', it: 'accordo della Concordia, contratto riservato' },
      { w: 'Super Licence', it: 'Super Licenza' },
      { w: 'F1 Commission', it: 'Commissione F1' },
      { w: 'WMSC', it: 'Consiglio Mondiale dello Sport Motoristico' },
      { w: 'technical directive', it: 'direttiva tecnica della FIA' },
      { w: 'governance', it: 'governance, chi decide le regole' },
      { w: 'entrants', it: 'entranti, le squadre iscritte' }
    ]
  });
  A('f1-telaio-e-monoscocca', {
    title: { t: 'Chassis and monocoque', it: 'Telaio e monoscocca' },
    sum: [
      { t: 'The ⟦monocoque⟧, or ⟦survival cell⟧, is one shell that holds the driver, with suspension, tank and power unit attached.', it: 'La monoscocca, o cella di sopravvivenza, è una scocca unica che contiene il pilota, a cui si attaccano sospensioni, serbatoio e power unit.' },
      { t: 'It is made of ⟦carbon fibre⟧ composite: fibres held by epoxy resin, layered and cured in an ⟦autoclave⟧.', it: 'È fatta di composito in fibra di carbonio: fibre tenute da resina epossidica, sovrapposte e indurite in autoclave.' },
      { t: 'Carbon is about 1.6 g/cm³ against 7.85 for steel, so the same volume weighs about one fifth.', it: 'Il carbonio è circa 1,6 g/cm³ contro 7,85 dell’acciaio, quindi a parità di volume pesa circa un quinto.' },
      { t: 'A ⟦honeycomb⟧ sandwich stiffens without adding weight, because stiffness grows with the square of the distance between skins.', it: 'Una struttura a sandwich a nido d’ape irrigidisce senza appesantire, perché la rigidezza cresce con il quadrato della distanza tra le pelli.' },
      { t: 'In a crash the surrounding structures crush and absorb energy, while the survival cell must stay intact.', it: 'In un incidente le strutture attorno si schiacciano e assorbono energia, mentre la cella di sopravvivenza deve restare integra.' },
      { t: 'The ⟦halo⟧, a titanium arch fitted since 2018, weighs about 7 kg and protects the driver’s head.', it: 'L’halo, un arco in titanio presente dal 2018, pesa circa 7 kg e protegge la testa del pilota.' },
      { t: 'The ⟦minimum weight⟧ is about 800 kg in 2025, and ⟦ballast⟧ fills any gap; the front axle carries 45–46%.', it: 'Il peso minimo è circa 800 kg nel 2025, e la zavorra colma ogni differenza; l’asse anteriore porta il 45–46%.' }
    ],
    gloss: [
      { w: 'monocoque', it: 'monoscocca, scocca portante' },
      { w: 'survival cell', it: 'cella di sopravvivenza' },
      { w: 'carbon fibre', it: 'fibra di carbonio' },
      { w: 'autoclave', it: 'forno a pressione per indurire il composito' },
      { w: 'honeycomb', it: 'nido d’ape' },
      { w: 'crash structure', it: 'struttura d’urto che assorbe energia' },
      { w: 'halo', it: 'arco in titanio sopra il pilota' },
      { w: 'minimum weight', it: 'peso minimo' },
      { w: 'ballast', it: 'zavorra' },
      { w: 'centre of gravity', it: 'baricentro' }
    ]
  });
  A('f1-power-unit-ibrida', {
    title: { t: 'The hybrid power unit', it: 'La power unit ibrida' },
    sum: [
      { t: 'From 2014 to 2025 the ⟦power unit⟧ is a hybrid made of six elements, not just an engine.', it: 'Dal 2014 al 2025 la power unit è un ibrido composto da sei elementi, non un semplice motore.' },
      { t: 'The ⟦ICE⟧ is a 1.6-litre V6 turbo with direct injection, limited to 15 000 rpm.', it: 'L’ICE è un V6 turbo da 1,6 litri con iniezione diretta, limitato a 15 000 giri/min.' },
      { t: 'The ⟦MGU-H⟧ turns exhaust energy into electricity and can spin the turbo, removing most ⟦turbo lag⟧.', it: 'L’MGU-H trasforma l’energia di scarico in elettricità e può far girare il turbo, eliminando quasi del tutto il ritardo.' },
      { t: 'The ⟦MGU-K⟧ adds torque as a motor and recharges the battery as a generator, with up to 120 kW.', it: 'L’MGU-K aggiunge coppia come motore e ricarica la batteria come generatore, con fino a 120 kW.' },
      { t: 'The ⟦energy store⟧ is a lithium-ion battery of 20–25 kg; the rules limit energy per lap, not capacity.', it: 'L’energy store è una batteria agli ioni di litio da 20–25 kg; il regolamento limita l’energia per giro, non la capacità.' },
      { t: '⟦Thermal efficiency⟧ is the share of fuel energy turned into work: above 50% in F1, 30–40% in road petrol engines.', it: 'Il rendimento termico è la quota di energia del carburante che diventa lavoro: oltre il 50% in F1, 30–40% nei motori a benzina di serie.' },
      { t: 'The total is about 1000 hp, an unofficial order of magnitude; from 2026 the MGU-H is removed.', it: 'Il totale è circa 1000 CV, un ordine di grandezza non ufficiale; dal 2026 l’MGU-H viene eliminato.' }
    ],
    gloss: [
      { w: 'power unit', it: 'unità motrice ibrida' },
      { w: 'ICE', it: 'motore a combustione interna' },
      { w: 'MGU-H', it: 'motore-generatore collegato al turbo (calore)' },
      { w: 'MGU-K', it: 'motore-generatore collegato all’albero motore (cinetica)' },
      { w: 'energy store', it: 'ES, la batteria' },
      { w: 'turbo lag', it: 'ritardo del turbo' },
      { w: 'thermal efficiency', it: 'rendimento termico' },
      { w: 'turbocharger', it: 'turbocompressore' },
      { w: 'control electronics', it: 'centralina ed elettronica di potenza' },
      { w: 'kilowatt', it: 'kilowatt, unità di potenza' }
    ]
  });
  A('f1-ers-e-gestione-energia', {
    title: { t: 'ERS and energy management', it: 'ERS e gestione dell’energia' },
    sum: [
      { t: 'The ⟦ERS⟧ recovers, stores and reuses energy through the MGU-K, the MGU-H and the battery.', it: 'L’ERS recupera, immagazzina e riusa energia tramite MGU-K, MGU-H e batteria.' },
      { t: 'In 2014–2025 the ⟦MGU-K⟧ may recover at most 2 MJ per lap and ⟦deploy⟧ at most 4 MJ, at 120 kW.', it: 'Nel 2014–2025 l’MGU-K può recuperare al massimo 2 MJ per giro e fare deploy di 4 MJ al massimo, a 120 kW.' },
      { t: 'The ⟦MGU-H⟧ has no energy limit, so it supplies the missing 2 MJ needed to spend 4 MJ per lap.', it: 'L’MGU-H non ha limiti di energia, quindi fornisce i 2 MJ mancanti per spendere 4 MJ per giro.' },
      { t: 'The ⟦energy balance⟧ of a lap is input minus deploy: 3.8 MJ in and 4.0 MJ out loses 0.2 MJ.', it: 'Il bilancio energetico di un giro è ingresso meno deploy: 3,8 MJ in ingresso e 4,0 MJ in uscita fanno perdere 0,2 MJ.' },
      { t: 'Full power of 120 kW lasts at most 33.3 s per lap, so the driver spends it on long accelerations or overtakes.', it: 'La piena potenza di 120 kW dura al massimo 33,3 s per giro, quindi si spende sulle lunghe accelerazioni o per un sorpasso.' },
      { t: 'The driver picks ⟦modes⟧ from the wheel, and uses ⟦lift and coast⟧ to save fuel and help recovery.', it: 'Il pilota sceglie le modalità dal volante e usa il lift and coast per risparmiare carburante e facilitare il recupero.' },
      { t: 'The ERS creates no energy, it moves it in time; about 10% of a lap’s mechanical energy is electric.', it: 'L’ERS non crea energia, la sposta nel tempo; circa il 10% dell’energia meccanica di un giro è elettrica.' }
    ],
    gloss: [
      { w: 'ERS', it: 'Energy Recovery System' },
      { w: 'MGU-K', it: 'motore-generatore cinetico' },
      { w: 'MGU-H', it: 'motore-generatore collegato al turbo' },
      { w: 'deploy', it: 'uso dell’energia: l’MGU-K diventa motore' },
      { w: 'energy balance', it: 'bilancio energetico del giro' },
      { w: 'modes', it: 'modalità di funzionamento scelte dal volante' },
      { w: 'lift and coast', it: 'alzare il piede prima della frenata per risparmiare' },
      { w: 'recovery', it: 'recupero di energia in frenata' },
      { w: 'battery', it: 'batteria (ES)' },
      { w: 'MJ', it: 'megajoule, unità di energia' }
    ]
  });
  A('f1-trasmissione-e-cambio', {
    title: { t: 'Transmission and gearbox', it: 'Trasmissione e cambio' },
    sum: [
      { t: 'F1 cars are ⟦rear-wheel drive⟧: power goes from engine to clutch, gearbox, differential and rear wheels.', it: 'Le F1 hanno trazione posteriore: la potenza va da motore a frizione, cambio, differenziale e ruote posteriori.' },
      { t: 'The ⟦clutch⟧ is used mainly at the start; during the race gears are changed without it.', it: 'La frizione si usa soprattutto alla partenza; durante la gara le marce si cambiano senza di essa.' },
      { t: 'The ⟦sequential⟧ gearbox uses dog rings, and ⟦seamless shift⟧ changes gear in tens of milliseconds.', it: 'Il cambio sequenziale usa innesti frontali, e il seamless shift cambia marcia in decine di millisecondi.' },
      { t: 'Since 2014 the gearbox has 8 gears plus reverse, so each gear covers a narrower speed range.', it: 'Dal 2014 il cambio ha 8 marce più la retromarcia, quindi ogni marcia copre un intervallo di velocità più stretto.' },
      { t: 'The same gearbox must last about six races, otherwise the driver takes a grid penalty.', it: 'La stessa scatola del cambio deve durare circa sei gare, altrimenti il pilota prende una penalità in griglia.' },
      { t: 'The ⟦gear ratio⟧ is engine revolutions per wheel revolution; a higher ratio means a shorter gear.', it: 'Il rapporto di trasmissione è il numero di giri del motore per ogni giro della ruota; un rapporto più alto significa una marcia più corta.' },
      { t: 'The ⟦differential⟧ lets the outer wheel turn faster in corners, and a limited-slip type also sends torque to the slower wheel.', it: 'Il differenziale permette alla ruota esterna di girare più veloce in curva, e uno a slittamento limitato manda coppia anche alla ruota più lenta.' }
    ],
    gloss: [
      { w: 'rear-wheel drive', it: 'trazione posteriore' },
      { w: 'clutch', it: 'frizione' },
      { w: 'sequential', it: 'sequenziale, una marcia alla volta' },
      { w: 'seamless shift', it: 'cambio senza interruzione' },
      { w: 'paddles', it: 'palette dietro il volante' },
      { w: 'gear ratio', it: 'rapporto di trasmissione' },
      { w: 'differential', it: 'differenziale' },
      { w: 'limited-slip differential', it: 'differenziale a slittamento limitato' },
      { w: 'torque', it: 'coppia' },
      { w: 'dog ring', it: 'innesto frontale' }
    ]
  });
  A('f1-freni', {
    title: { t: 'Brakes', it: 'I freni' },
    sum: [
      { t: 'In braking an F1 car reaches 5–6 g, four to five times its acceleration, so braking zones win time.', it: 'In frenata una F1 raggiunge 5–6 g, circa 4–5 volte la sua accelerazione, quindi le zone di frenata sono dove si guadagna tempo.' },
      { t: 'The brakes are ⟦carbon-carbon⟧: light, able to exceed 1000 °C, but poor when cold.', it: 'I freni sono in carbonio-carbonio: leggeri, in grado di superare i 1000 °C, ma poco efficaci da freddi.' },
      { t: 'The ⟦caliper⟧ squeezes the pads through a hydraulic system based on ⟦Pascal’s law⟧: pressure is equal, so force follows area.', it: 'La pinza stringe le pastiglie con un impianto idraulico basato sulla legge di Pascal: la pressione è uguale, quindi la forza segue l’area.' },
      { t: 'Since 2014 the rear axle uses ⟦brake-by-wire⟧, which compensates for the braking torque of the ⟦MGU-K⟧.', it: 'Dal 2014 l’asse posteriore usa il brake-by-wire, che compensa la coppia frenante dell’MGU-K.' },
      { t: 'The ⟦braking distance⟧ is d = v²/(2a): from 300 km/h at 5 g it takes about 70.8 m and 1.70 s.', it: 'La distanza di frenata è d = v²/(2a): da 300 km/h a 5 g servono circa 70,8 m e 1,70 s.' },
      { t: 'Doubling the speed needs four times the distance: from 100 to 200 km/h, 7.9 m becomes 31.5 m.', it: 'Raddoppiare la velocità richiede uno spazio quadruplo: da 100 a 200 km/h, 7,9 m diventano 31,5 m.' },
      { t: '⟦Brake bias⟧ is the share of braking force on the front axle, usually 55–60%, because weight shifts forward.', it: 'Il brake bias è la quota di forza frenante sull’asse anteriore, di solito 55–60%, perché il peso si trasferisce in avanti.' }
    ],
    gloss: [
      { w: 'carbon-carbon', it: 'carbonio-carbonio, materiale di dischi e pastiglie' },
      { w: 'caliper', it: 'pinza' },
      { w: 'Pascal’s law', it: 'legge di Pascal, la pressione si trasmette uguale' },
      { w: 'brake-by-wire', it: 'frenata elettronica sull’asse posteriore' },
      { w: 'MGU-K', it: 'motore-generatore cinetico' },
      { w: 'braking distance', it: 'distanza di frenata' },
      { w: 'brake bias', it: 'ripartizione della frenata fra gli assi' },
      { w: 'lock-up', it: 'bloccaggio della ruota' },
      { w: 'deceleration', it: 'decelerazione' },
      { w: 'hydraulic', it: 'idraulico' }
    ]
  });
  A('f1-sospensioni-e-sterzo', {
    title: { t: 'Suspension and steering', it: 'Sospensioni e sterzo' },
    sum: [
      { t: 'Suspension keeps the tyres on the road, controls ride height, roll and pitch, and passes forces to the chassis.', it: 'Le sospensioni tengono le gomme a contatto con l’asfalto, controllano altezza da terra, rollio e beccheggio e trasmettono le forze al telaio.' },
      { t: 'F1 uses ⟦double wishbone⟧ suspension with springs inside the monocoque; active suspension has been banned since 1994.', it: 'La F1 usa sospensioni a doppi bracci oscillanti con molle dentro la scocca; le sospensioni attive sono vietate dal 1994.' },
      { t: 'In a ⟦push-rod⟧ layout the rod works in compression; a ⟦pull-rod⟧ works in tension and lowers the centre of gravity.', it: 'Nello schema push-rod l’asta lavora in compressione; il pull-rod lavora in trazione e abbassa il baricentro.' },
      { t: 'The ⟦motion ratio⟧ matters squared: 300 N/mm of spring with a ratio of 0.5 gives 75 N/mm at the wheel.', it: 'Il rapporto di leva conta al quadrato: 300 N/mm di molla con rapporto 0,5 danno 75 N/mm alla ruota.' },
      { t: 'The spring stores energy, while the ⟦damper⟧ dissipates it as heat with a force proportional to speed.', it: 'La molla immagazzina energia, mentre l’ammortizzatore la dissipa in calore con una forza proporzionale alla velocità.' },
      { t: 'An ⟦anti-roll bar⟧ resists body roll; a stiffer front bar tends to understeer, a stiffer rear one to oversteer.', it: 'Una barra antirollio si oppone al rollio; una barra anteriore più rigida tende al sottosterzo, una posteriore più rigida al sovrasterzo.' },
      { t: '⟦Ackermann⟧ geometry makes the inner wheel steer more than the outer, because it follows a smaller circle.', it: 'La geometria Ackermann fa sterzare di più la ruota interna di quella esterna, perché percorre un cerchio più piccolo.' }
    ],
    gloss: [
      { w: 'double wishbone', it: 'doppi bracci oscillanti' },
      { w: 'push-rod', it: 'asta che lavora in compressione' },
      { w: 'pull-rod', it: 'asta che lavora in trazione' },
      { w: 'motion ratio', it: 'rapporto di leva' },
      { w: 'damper', it: 'ammortizzatore' },
      { w: 'anti-roll bar', it: 'barra antirollio' },
      { w: 'understeer', it: 'sottosterzo' },
      { w: 'oversteer', it: 'sovrasterzo' },
      { w: 'Ackermann', it: 'geometria che fa sterzare di più la ruota interna' },
      { w: 'porpoising', it: 'rimbalzo ad alta velocità dell’auto a effetto suolo' }
    ]
  });
  A('f1-raffreddamento-e-affidabilita', {
    title: { t: 'Cooling and reliability', it: 'Raffreddamento e affidabilità' },
    sum: [
      { t: 'Even at 50% efficiency, half of the fuel energy becomes heat: roughly 590 kW to disperse.', it: 'Anche con un rendimento del 50%, metà dell’energia del carburante diventa calore: circa 590 kW da smaltire.' },
      { t: '⟦Radiators⟧ sit in the sidepods, and a hot Grand Prix needs bigger cooling openings, which add ⟦drag⟧.', it: 'I radiatori stanno nelle fiancate, e un Gran Premio caldo richiede aperture di raffreddamento più grandi, che aumentano la resistenza.' },
      { t: 'With heat transfer Q = ṁ·c·ΔT, a ΔT of 45 K instead of 60 K needs 33% more air.', it: 'Con lo scambio di calore Q = ṁ·c·ΔT, un ΔT di 45 K invece di 60 K richiede il 33% di aria in più.' },
      { t: 'The fluids are coolant, oil, fuel with 10% ethanol, hydraulic fluid and brake fluid, and the FIA checks samples.', it: 'I fluidi sono liquido di raffreddamento, olio, carburante con 10% di etanolo, liquido idraulico e dei freni, e la FIA controlla i campioni.' },
      { t: 'Each season limits the power unit elements: extra ones bring ⟦grid penalties⟧, 10 places for the first and 5 for the next.', it: 'Ogni stagione limita gli elementi della power unit: quelli in più portano penalità in griglia, 10 posizioni per il primo e 5 per i successivi.' },
      { t: 'A car is a ⟦series system⟧: 20 components, each 99% reliable, give an overall reliability of only about 81.8%.', it: 'Una vettura è un sistema in serie: 20 componenti, ciascuno affidabile al 99%, danno un’affidabilità complessiva di solo circa l’81,8%.' },
      { t: 'Hundreds of sensors feed ⟦telemetry⟧, and engineers may ask the driver to ⟦lift and coast⟧ to cool the car.', it: 'Centinaia di sensori alimentano la telemetria, e gli ingegneri possono chiedere al pilota il lift and coast per raffreddare la vettura.' }
    ],
    gloss: [
      { w: 'radiators', it: 'radiatori nelle fiancate' },
      { w: 'drag', it: 'resistenza aerodinamica' },
      { w: 'intercooler', it: 'scambiatore che raffredda l’aria compressa dal turbo' },
      { w: 'coolant', it: 'liquido di raffreddamento' },
      { w: 'grid penalties', it: 'penalità in griglia' },
      { w: 'series system', it: 'sistema in serie, basta un guasto per fermarlo' },
      { w: 'redundancy', it: 'ridondanza, componenti doppi' },
      { w: 'telemetry', it: 'telemetria, dati inviati ai box' },
      { w: 'lift and coast', it: 'alzare il piede prima della frenata' },
      { w: 'sensors', it: 'sensori' }
    ]
  });
  A('f1-sicurezza-e-sostenibilita', {
    title: { t: 'Safety and sustainability', it: 'Sicurezza e sostenibilità' },
    sum: [
      { t: 'Safety is built in ⟦layers⟧: circuit, car, driver, procedures and data, each covering for the others.', it: 'La sicurezza è fatta di strati: circuito, vettura, pilota, procedure e dati, ciascuno a supplire gli altri.' },
      { t: 'In Grosjean’s 2020 crash at about 190 km/h, the intact cell, halo, belts and fireproof suit let him leave the car.', it: 'Nell’incidente di Grosjean nel 2020 a circa 190 km/h, la scocca integra, l’halo, le cinture e la tuta ignifuga gli permisero di uscire dall’auto.' },
      { t: 'The belts have 6 anchorage points, and the ⟦HANS⟧, compulsory since 2003, stops the head lunging forward.', it: 'Le cinture hanno 6 punti di ancoraggio, e l’HANS, obbligatorio dal 2003, impedisce alla testa di lanciarsi in avanti.' },
      { t: 'The helmet follows FIA standard 8860 with a ⟦Zylon⟧ strip, and the ⟦Nomex⟧ suit resists direct flame for seconds.', it: 'Il casco rispetta la norma FIA 8860 con una striscia di Zylon, e la tuta in Nomex resiste alla fiamma diretta per alcuni secondi.' },
      { t: 'The ⟦fire extinguisher system⟧ can be triggered by the driver or by marshals, and the fuel tank is flexible and reinforced.', it: 'L’impianto antincendio può essere attivato dal pilota o dai commissari, e il serbatoio è flessibile e rinforzato.' },
      { t: 'Every chassis must pass static and dynamic ⟦crash tests⟧, such as a 15 m/s frontal impact and halo loads over 100 kN.', it: 'Ogni scocca deve superare prove d’urto statiche e dinamiche, come un urto frontale a 15 m/s e carichi sull’halo oltre 100 kN.' },
      { t: 'Fuel has been E10, with 10% ethanol, since 2022; from 2026 ⟦sustainable fuel⟧ is 100%, and F1 targets net zero by 2030.', it: 'Il carburante è E10, con il 10% di etanolo, dal 2022; dal 2026 il carburante sostenibile è al 100%, e la F1 punta a emissioni nette zero entro il 2030.' }
    ],
    gloss: [
      { w: 'layers', it: 'strati di sicurezza' },
      { w: 'HANS', it: 'Head And Neck Support, collare che protegge il collo' },
      { w: 'Zylon', it: 'fibra molto resistente nella visiera' },
      { w: 'Nomex', it: 'tessuto ignifugo della tuta' },
      { w: 'fire extinguisher system', it: 'impianto antincendio' },
      { w: 'crash tests', it: 'prove d’urto per l’omologazione' },
      { w: 'sustainable fuel', it: 'carburante sostenibile' },
      { w: 'E10', it: 'benzina con 10% di etanolo' },
      { w: 'harness', it: 'cinture di sicurezza' },
      { w: 'halo', it: 'arco in titanio sopra la testa del pilota' }
    ]
  });
  A('f1-forze-aerodinamiche', {
    title: { t: 'Aerodynamic forces: downforce and drag', it: 'Forze aerodinamiche: carico e resistenza' },
    sum: [
      { t: 'Aerodynamics creates ⟦downforce⟧, creates ⟦drag⟧ and sets the balance between the front and rear axle.', it: 'L’aerodinamica genera carico, genera resistenza e decide il bilanciamento tra asse anteriore e posteriore.' },
      { t: 'Downforce adds ⟦grip⟧ without adding mass, and above about 206 km/h it exceeds the car’s weight.', it: 'Il carico aumenta l’aderenza senza aggiungere massa, e oltre circa 206 km/h supera il peso della vettura.' },
      { t: 'A car wing is an inverted aircraft wing, so its force points down: ⟦negative lift⟧.', it: 'L’ala di una vettura è un’ala d’aereo capovolta, quindi la sua forza punta verso il basso: portanza negativa.' },
      { t: 'The force follows F = ½·ρ·C·A·v², where ½ρv² is the ⟦dynamic pressure⟧: 6000 Pa at 100 m/s.', it: 'La forza segue F = ½·ρ·C·A·v², dove ½ρv² è la pressione dinamica: 6000 Pa a 100 m/s.' },
      { t: 'Because force grows with v², going from 100 to 200 km/h quadruples the downforce.', it: 'Poiché la forza cresce con v², passare da 100 a 200 km/h quadruplica il carico.' },
      { t: 'The power to beat drag grows with the cube of speed, so the last km/h of top speed cost a lot.', it: 'La potenza per vincere la resistenza cresce con il cubo della velocità, quindi gli ultimi km/h di velocità massima costano moltissimo.' },
      { t: 'The ⟦downforce-to-drag ratio⟧ stays about 3.6 at any speed, far below an airliner’s 15–20.', it: 'Il rapporto carico/resistenza resta circa 3,6 a qualunque velocità, molto meno dei 15–20 di un aereo di linea.' }
    ],
    gloss: [
      { w: 'downforce', it: 'carico aerodinamico' },
      { w: 'drag', it: 'resistenza all’aria' },
      { w: 'grip', it: 'aderenza' },
      { w: 'negative lift', it: 'portanza negativa, ala capovolta' },
      { w: 'dynamic pressure', it: 'pressione dinamica ½ρv²' },
      { w: 'downforce-to-drag ratio', it: 'rapporto carico/resistenza (L/D)' },
      { w: 'air density', it: 'densità dell’aria' },
      { w: 'Bernoulli', it: 'principio di Bernoulli: più velocità, meno pressione' },
      { w: 'effective area', it: 'area efficace C·A' },
      { w: 'ground effect', it: 'effetto suolo' }
    ]
  });
  A('f1-ali-anteriore-posteriore', {
    title: { t: 'Front and rear wings', it: 'Ali anteriore e posteriore' },
    sum: [
      { t: 'The ⟦front wing⟧ meets the air first, makes front downforce and prepares the flow for the rest of the car.', it: 'L’ala anteriore incontra l’aria per prima, produce carico sull’avantreno e prepara il flusso per il resto della vettura.' },
      { t: 'The ⟦rear wing⟧ makes rear downforce, helps pull air out of the diffuser and carries the DRS flap.', it: 'L’ala posteriore produce carico sul retrotreno, aiuta a estrarre l’aria dal diffusore e porta il flap del DRS.' },
      { t: 'The ⟦aerodynamic balance⟧ is the split between front and rear downforce, around 45% at the front.', it: 'Il bilanciamento aerodinamico è la ripartizione tra carico anteriore e posteriore, intorno al 45% sul davanti.' },
      { t: 'A larger ⟦angle of attack⟧ gives more downforce, roughly C ≈ 2π·α, as long as the flow stays attached.', it: 'Un angolo d’attacco maggiore dà più carico, circa C ≈ 2π·α, finché il flusso resta attaccato.' },
      { t: 'Several elements with slots, called ⟦flaps⟧, keep the flow attached at steep angles but add drag.', it: 'Più elementi con fessure, detti flap, mantengono il flusso attaccato a inclinazioni elevate ma aumentano la resistenza.' },
      { t: '⟦Endplates⟧ reduce air leaking round the tip, which creates ⟦induced drag⟧ growing with the square of the coefficient.', it: 'Le endplate riducono la fuga d’aria all’estremità, che crea resistenza indotta crescente con il quadrato del coefficiente.' },
      { t: 'Beyond the ⟦stall⟧ angle the flow detaches and downforce drops, so teams keep a safety margin.', it: 'Oltre l’angolo di stallo il flusso si stacca e il carico cala, quindi le squadre tengono un margine di sicurezza.' }
    ],
    gloss: [
      { w: 'front wing', it: 'ala anteriore' },
      { w: 'rear wing', it: 'ala posteriore' },
      { w: 'aerodynamic balance', it: 'bilanciamento aerodinamico' },
      { w: 'angle of attack', it: 'angolo d’attacco' },
      { w: 'flaps', it: 'elementi aggiuntivi dell’ala' },
      { w: 'endplates', it: 'paratie laterali dell’ala' },
      { w: 'induced drag', it: 'resistenza indotta' },
      { w: 'stall', it: 'stallo, distacco del flusso' },
      { w: 'beam wing', it: 'ala inferiore vicino al diffusore' },
      { w: 'oversteer', it: 'sovrasterzo' }
    ]
  });
  A('f1-effetto-suolo-e-fondo', {
    title: { t: 'Ground effect and the floor', it: 'Effetto suolo e fondo' },
    sum: [
      { t: '⟦Ground effect⟧ is downforce made by the floor, where air speeds up under the car and pressure drops.', it: 'L’effetto suolo è il carico generato dal fondo, dove l’aria accelera sotto la vettura e la pressione scende.' },
      { t: 'Lotus pioneered it in 1977–78; the flat floor was imposed in 1983, and shaped floors returned in 2022 without ⟦skirts⟧.', it: 'La Lotus lo introdusse nel 1977–78; il fondo piano fu imposto nel 1983 e i fondi profilati sono tornati nel 2022 senza gonne.' },
      { t: 'In a ⟦Venturi tunnel⟧ the section narrows, speed rises and pressure falls, following continuity and Bernoulli.', it: 'In un tunnel Venturi la sezione si restringe, la velocità sale e la pressione scende, secondo continuità e Bernoulli.' },
      { t: 'The ⟦diffuser⟧ widens the tunnel so that pressure recovers and the throat can keep a strong depression.', it: 'Il diffusore allarga il tunnel in modo che la pressione risalga e la gola possa mantenere una forte depressione.' },
      { t: 'Without skirts the floor is sealed by edge ⟦vortices⟧, a delicate seal that changes with ride height and roll.', it: 'Senza gonne il fondo è sigillato dai vortici di bordo, una sigillatura delicata che cambia con altezza da terra e rollio.' },
      { t: 'The ⟦plank⟧ is 10 mm thick with about 1 mm of allowed wear, so teams cannot lower the car too much.', it: 'Il plank è spesso 10 mm con circa 1 mm di usura ammessa, quindi le squadre non possono abbassare troppo la vettura.' },
      { t: '⟦Porpoising⟧ is a vertical oscillation: the floor stalls when too low, downforce drops and the springs push the car up.', it: 'Il porpoising è un’oscillazione verticale: il fondo si strozza quando è troppo basso, il carico cala e le molle spingono su la vettura.' }
    ],
    gloss: [
      { w: 'ground effect', it: 'effetto suolo' },
      { w: 'skirts', it: 'gonne laterali, vietate oggi' },
      { w: 'Venturi tunnel', it: 'tunnel Venturi, canale che restringe e riallarga' },
      { w: 'diffuser', it: 'diffusore' },
      { w: 'vortices', it: 'vortici che sigillano il fondo' },
      { w: 'plank', it: 'pattino di legno sotto la vettura' },
      { w: 'porpoising', it: 'rimbalzo verticale ad alta velocità' },
      { w: 'downforce', it: 'carico aerodinamico' },
      { w: 'throat', it: 'gola, punto più stretto del tunnel' },
      { w: 'ride height', it: 'altezza da terra' }
    ]
  });
  A('f1-drs-e-scia', {
    title: { t: 'DRS, slipstream and dirty air', it: 'DRS, scia e aria sporca' },
    sum: [
      { t: 'Overtaking is hard because the following car loses performance just as it gets close.', it: 'Superare è difficile perché la vettura che segue perde prestazione proprio quando si avvicina.' },
      { t: 'The ⟦slipstream⟧ lowers ⟦drag⟧ for the follower, which can lose 10% or more within one or two car lengths.', it: 'La scia riduce la resistenza di chi segue, che può calare del 10% o più a una o due lunghezze di distanza.' },
      { t: '⟦Dirty air⟧ is turbulent, so the follower’s wings and floor make less ⟦downforce⟧, mainly in fast corners.', it: 'L’aria sporca è turbolenta, quindi ali e fondo di chi segue producono meno carico, soprattutto nelle curve veloci.' },
      { t: 'The 2022 rules were written to reduce dirty air, which still costs time and tyre life in fast corners.', it: 'Il regolamento 2022 è stato scritto per ridurre l’aria sporca, che nelle curve veloci costa ancora tempo e gomme.' },
      { t: 'The ⟦DRS⟧, introduced in 2011, lifts the rear flap to cut drag and adds about 10–15 km/h.', it: 'Il DRS, introdotto nel 2011, solleva il flap posteriore per ridurre la resistenza e aggiunge circa 10–15 km/h.' },
      { t: 'DRS requires being within 1.0 second at the ⟦detection point⟧ and is banned in the first two laps after a start.', it: 'Il DRS richiede di essere entro 1,0 secondo al punto di rilevamento ed è vietato nei primi due giri dopo la partenza.' },
      { t: 'In ⟦DRS trains⟧ similar cars all benefit and none escapes; from 2026 active aerodynamics replaces DRS.', it: 'Nei treni DRS auto simili ne beneficiano tutte e nessuna si stacca; dal 2026 l’aerodinamica attiva sostituisce il DRS.' }
    ],
    gloss: [
      { w: 'slipstream', it: 'scia, meno resistenza per chi segue' },
      { w: 'drag', it: 'resistenza all’aria' },
      { w: 'dirty air', it: 'aria sporca, turbolenta' },
      { w: 'downforce', it: 'carico aerodinamico' },
      { w: 'DRS', it: 'Drag Reduction System' },
      { w: 'detection point', it: 'punto di rilevamento' },
      { w: 'DRS trains', it: 'treni DRS, auto vicine che usano tutte il DRS' },
      { w: 'active aerodynamics', it: 'aerodinamica attiva, ali mobili dal 2026' },
      { w: 'overtake', it: 'sorpassare' },
      { w: 'undercut', it: 'sorpasso con la sosta anticipata' }
    ]
  });
  A('f1-raffreddamento-e-carrozzeria', {
    title: { t: 'Cooling, airflow and bodywork', it: 'Raffreddamento, flussi e carrozzeria' },
    sum: [
      { t: 'The engine and systems produce much heat, removed by incoming air; the lesson’s example sends 250 kW to the air.', it: 'Il motore e gli impianti producono molto calore, smaltito dall’aria in ingresso; l’esempio della lezione manda 250 kW nell’aria.' },
      { t: 'Heat removal follows Q = ṁ·cₚ·ΔT, so a ΔT of 45 K instead of 60 K needs 33% more air.', it: 'Lo smaltimento segue Q = ṁ·cₚ·ΔT, quindi un ΔT di 45 K invece di 60 K richiede il 33% di aria in più.' },
      { t: 'Hot races such as Bahrain, Singapore, Miami and Qatar need more openings, so teams bring different ⟦cooling kits⟧.', it: 'Le gare calde come Bahrain, Singapore, Miami e Qatar richiedono più aperture, quindi i team portano kit di raffreddamento diversi.' },
      { t: 'More air through the radiators means more ⟦drag⟧, but overheating costs far more than a couple of km/h.', it: 'Più aria nei radiatori significa più resistenza, ma il surriscaldamento costa molto più di un paio di km/h.' },
      { t: 'The ⟦sidepods⟧ hold the radiators and guide the flow towards the floor and the rear wing.', it: 'I sidepod contengono i radiatori e guidano il flusso verso il fondo e l’ala posteriore.' },
      { t: '⟦Brake ducts⟧ blow air onto discs and calipers; carbon brakes work well between about 400 and 800 °C.', it: 'I condotti dei freni soffiano aria su dischi e pinze; i freni in carbonio lavorano bene tra circa 400 e 800 °C.' },
      { t: '⟦Outwash⟧ pushes air outwards around the front wheels; ⟦bargeboards⟧ were removed in 2022 and ⟦vortices⟧ now protect the floor.', it: 'L’outwash spinge l’aria verso l’esterno delle ruote anteriori; i bargeboard sono stati eliminati nel 2022 e i vortici ora proteggono il fondo.' }
    ],
    gloss: [
      { w: 'cooling kits', it: 'kit di raffreddamento, carrozzeria con aperture diverse' },
      { w: 'drag', it: 'resistenza aerodinamica' },
      { w: 'sidepods', it: 'carenature laterali con i radiatori' },
      { w: 'brake ducts', it: 'condotti di raffreddamento dei freni' },
      { w: 'outwash', it: 'flusso spinto verso l’esterno delle ruote anteriori' },
      { w: 'bargeboards', it: 'pannelli verticali tra ruote e sidepod, eliminati nel 2022' },
      { w: 'vortices', it: 'vortici, flussi rotanti usati come strumento' },
      { w: 'radiators', it: 'radiatori' },
      { w: 'airbox', it: 'presa d’aria sopra la testa del pilota' },
      { w: 'mass flow', it: 'portata in massa' }
    ]
  });
  A('f1-sviluppo-aerodinamico', {
    title: { t: 'Aerodynamic development and correlation', it: 'Sviluppo aerodinamico e correlazione' },
    sum: [
      { t: 'An update follows a cycle: idea, ⟦CFD⟧, ⟦wind tunnel⟧, production, track test, ⟦correlation⟧ and decision.', it: 'Un aggiornamento segue un ciclo: idea, CFD, galleria del vento, produzione, prova in pista, correlazione e decisione.' },
      { t: 'Updates are worth a few tenths of a second per lap, and ATR and the ⟦budget cap⟧ limit development.', it: 'Gli aggiornamenti valgono pochi decimi di secondo al giro, e ATR e tetto di spesa limitano lo sviluppo.' },
      { t: 'In the tunnel a model of at most 60% scale is tested at up to 50 m/s over a ⟦rolling road⟧.', it: 'In galleria si prova un modello in scala al massimo del 60% fino a 50 m/s su un tappeto mobile.' },
      { t: 'Because the ⟦Reynolds number⟧ differs from the real car, the model cannot represent it exactly.', it: 'Poiché il numero di Reynolds è diverso da quello della vettura reale, il modello non la rappresenta esattamente.' },
      { t: 'CFD selects and optimises, the tunnel confirms and the track verifies; absolute CFD results need caution.', it: 'La CFD seleziona e ottimizza, la galleria conferma e la pista verifica; i risultati assoluti della CFD vanno trattati con cautela.' },
      { t: 'If the tunnel predicts +3.0% downforce and the track gives +1.8%, the correlation ratio is 60%.', it: 'Se la galleria prevede +3,0% di carico e la pista dà +1,8%, il rapporto di correlazione è 60%.' },
      { t: 'The ⟦ATR⟧ gives top teams fewer tests: about 70% of the reference for the best, 115% for the last.', it: 'L’ATR dà meno prove alle squadre in testa: circa il 70% del riferimento per la prima, il 115% per l’ultima.' }
    ],
    gloss: [
      { w: 'CFD', it: 'fluidodinamica computazionale, simulazione al computer' },
      { w: 'wind tunnel', it: 'galleria del vento' },
      { w: 'correlation', it: 'correlazione, confronto tra previsione e pista' },
      { w: 'budget cap', it: 'tetto di spesa' },
      { w: 'rolling road', it: 'tappeto mobile sotto il modello' },
      { w: 'Reynolds number', it: 'numero di Reynolds' },
      { w: 'ATR', it: 'Aerodynamic Testing Restrictions' },
      { w: 'flow-vis paint', it: 'vernice che mostra il flusso' },
      { w: 'aero rake', it: 'rastrelliera di tubicini per misurare la pressione' },
      { w: 'back-to-back', it: 'confronto a coppie con e senza il pezzo' }
    ]
  });
  A('f1-pneumatici-struttura-mescole', {
    title: { t: 'Tyres: structure, compounds, markings', it: 'Pneumatici: struttura, mescole, marcature' },
    sum: [
      { t: 'All forces pass through four small ⟦contact patches⟧, each of hundreds of square centimetres.', it: 'Tutte le forze passano per quattro piccole aree di contatto, ciascuna di centinaia di centimetri quadrati.' },
      { t: 'A tyre is a composite structure: ⟦tread⟧, belts, carcass, sidewall, bead and inner liner.', it: 'Un pneumatico è una struttura composta: battistrada, cinture, carcassa, spalla, tallone e innerliner.' },
      { t: 'Pirelli makes ⟦compounds⟧ from C0, the hardest, to C5, the softest, and three adjacent ones are chosen per race.', it: 'Pirelli produce mescole dalla C0, la più dura, alla C5, la più morbida, e per ogni gara ne vengono scelte tre adiacenti.' },
      { t: 'Within a weekend they are called hard, medium and soft, with white, yellow and red ⟦sidewall⟧ marks, so the label is relative.', it: 'In un weekend si chiamano hard, medium e soft, con marcature bianca, gialla e rossa sulla spalla, quindi l’etichetta è relativa.' },
      { t: 'Green ⟦intermediates⟧ and blue ⟦full wets⟧ have grooved treads; a dry race requires two different slick compounds.', it: 'Le intermedie verdi e le full wet blu hanno il battistrada scolpito; una gara asciutta richiede due mescole slick diverse.' },
      { t: 'Dry tyres work best at about 80–110 °C, so ⟦tyre blankets⟧ heat them; start pressures are 22–26 psi.', it: 'Le gomme da asciutto rendono al meglio a circa 80–110 °C, quindi le coperte termiche le scaldano; le pressioni di partenza sono 22–26 psi.' },
      { t: 'The ⟦friction circle⟧ says a tyre cannot give maximum grip in cornering and braking at the same time.', it: 'Il cerchio di aderenza dice che una gomma non può dare il massimo in curva e in frenata contemporaneamente.' }
    ],
    gloss: [
      { w: 'contact patches', it: 'aree di contatto tra gomma e asfalto' },
      { w: 'tread', it: 'battistrada' },
      { w: 'carcass', it: 'carcassa' },
      { w: 'compounds', it: 'mescole' },
      { w: 'sidewall', it: 'spalla, fiancata della gomma' },
      { w: 'intermediates', it: 'intermedie (verdi)' },
      { w: 'full wets', it: 'gomme da pioggia forte (blu)' },
      { w: 'tyre blankets', it: 'coperte termiche' },
      { w: 'friction circle', it: 'cerchio di aderenza' },
      { w: 'slick', it: 'gomma liscia da asciutto' }
    ]
  });
  A('f1-aderenza-e-finestra-termica', {
    title: { t: 'Grip, thermal window and degradation', it: 'Aderenza, finestra termica e degrado' },
    sum: [
      { t: 'Lateral grip has a ⟦mechanical grip⟧ part from weight and tyres and an ⟦aerodynamic grip⟧ part that grows with v².', it: 'L’aderenza laterale ha una parte di grip meccanico, da peso e gomme, e una di grip aerodinamico, che cresce con v².' },
      { t: 'In the example, grip is 1.85 g at 100 km/h and 6.10 g at 360 km/h, so slow corners need mechanical grip.', it: 'Nell’esempio l’aderenza è 1,85 g a 100 km/h e 6,10 g a 360 km/h, quindi le curve lente dipendono dal grip meccanico.' },
      { t: '⟦Load sensitivity⟧ means the friction coefficient falls as load rises, so doubling the load does not double the force.', it: 'La sensibilità al carico significa che il coefficiente di aderenza cala all’aumentare del carico, quindi raddoppiare il carico non raddoppia la forza.' },
      { t: 'The ⟦thermal window⟧ is a temperature range about 20 °C wide where the tyre grips best; soft compounds work lower.', it: 'La finestra termica è un intervallo di temperatura largo circa 20 °C in cui la gomma ha più grip; le mescole morbide lavorano più in basso.' },
      { t: '⟦Graining⟧ comes from a tyre that is too cold: small grains form on the surface and grip drops, often temporarily.', it: 'Il graining nasce da una gomma troppo fredda: sulla superficie si formano granelli e il grip cala, spesso in modo temporaneo.' },
      { t: '⟦Blistering⟧ comes from a tyre that is too hot, forming bubbles inside the tread, and it is irreversible.', it: 'Il blistering nasce da una gomma troppo calda, che forma bolle nel battistrada, ed è irreversibile.' },
      { t: '⟦Degradation⟧ is typically 0.03–0.15 s per lap, but a lighter car as fuel burns, 0.03 s per kg, partly hides it.', it: 'Il degrado è tipicamente 0,03–0,15 s a giro, ma una vettura più leggera per il carburante consumato, 0,03 s per kg, lo nasconde in parte.' }
    ],
    gloss: [
      { w: 'mechanical grip', it: 'grip meccanico, da peso, gomme e sospensioni' },
      { w: 'aerodynamic grip', it: 'grip aerodinamico, dovuto al carico' },
      { w: 'load sensitivity', it: 'sensibilità al carico' },
      { w: 'thermal window', it: 'finestra termica' },
      { w: 'graining', it: 'formazione di granelli per gomma troppo fredda' },
      { w: 'blistering', it: 'formazione di bolle per gomma troppo calda' },
      { w: 'degradation', it: 'degrado, perdita di prestazione nel tempo' },
      { w: 'wear', it: 'usura, perdita fisica di materiale' },
      { w: 'cliff', it: 'crollo improvviso delle prestazioni' },
      { w: 'friction coefficient', it: 'coefficiente di aderenza μ' }
    ]
  });
  A('f1-dinamica-del-veicolo', {
    title: { t: 'Vehicle dynamics: cornering and load transfer', it: 'Dinamica del veicolo: curva e trasferimenti di carico' },
    sum: [
      { t: 'Cornering speed follows v = √(a·r): at fixed acceleration, doubling the radius raises speed about 1.41 times.', it: 'La velocità in curva segue v = √(a·r): a accelerazione fissa, raddoppiare il raggio aumenta la velocità di circa 1,41 volte.' },
      { t: 'With ⟦downforce⟧, a 100 m corner is taken at 186.4 km/h instead of 138.1 km/h without aerodynamics.', it: 'Con il carico aerodinamico, una curva da 100 m si percorre a 186,4 km/h invece di 138,1 km/h senza aerodinamica.' },
      { t: 'Beyond a ⟦critical radius⟧ of about 222 m, grip no longer limits speed; power and drag do.', it: 'Oltre un raggio critico di circa 222 m l’aderenza non limita più la velocità; lo fanno potenza e resistenza.' },
      { t: '⟦Lateral load transfer⟧ moves load from inner to outer wheels, ΔW = m·a·h/t, shared by the roll stiffness of each axle.', it: 'Il trasferimento di carico laterale sposta carico dalle ruote interne a quelle esterne, ΔW = m·a·h/t, ripartito dalla rigidezza al rollio di ciascun asse.' },
      { t: 'Under braking, ⟦longitudinal load transfer⟧ loads the front axle, which is why drivers use ⟦trail braking⟧.', it: 'In frenata il trasferimento di carico longitudinale carica l’asse anteriore, per questo i piloti usano il trail braking.' },
      { t: '⟦Understeer⟧ means the front slides first and ⟦oversteer⟧ the rear; the difference of ⟦slip angles⟧ sets the balance.', it: 'Sottosterzo significa che scivola prima l’anteriore e sovrasterzo il posteriore; la differenza degli angoli di deriva decide il bilanciamento.' },
      { t: 'A corner has three phases, entry, centre and exit; 20% less downforce costs 0.24 s in a 100 m corner.', it: 'Una curva ha tre fasi, ingresso, centro e uscita; il 20% di carico in meno costa 0,24 s in una curva da 100 m.' }
    ],
    gloss: [
      { w: 'downforce', it: 'carico aerodinamico' },
      { w: 'critical radius', it: 'raggio critico, oltre il quale l’aderenza non limita' },
      { w: 'lateral load transfer', it: 'trasferimento di carico laterale' },
      { w: 'longitudinal load transfer', it: 'trasferimento di carico longitudinale' },
      { w: 'trail braking', it: 'rilascio progressivo del freno entrando in curva' },
      { w: 'understeer', it: 'sottosterzo' },
      { w: 'oversteer', it: 'sovrasterzo' },
      { w: 'slip angles', it: 'angoli di deriva' },
      { w: 'roll stiffness', it: 'rigidezza al rollio' },
      { w: 'apex', it: 'punto di corda' }
    ]
  });
  A('f1-assetto-e-tarature', {
    title: { t: 'Set-up and track-specific tuning', it: 'Assetto e tarature per pista' },
    sum: [
      { t: 'The ⟦set-up⟧ is the set of adjustments that adapts a built car to a circuit, conditions and driver.', it: 'L’assetto è l’insieme delle regolazioni che adatta una vettura già costruita a un circuito, alle condizioni e al pilota.' },
      { t: '⟦Ride height⟧ matters in ground-effect cars, and ⟦rake⟧ is the front-rear tilt: 30 mm over 3.6 m is 0.48°.', it: 'L’altezza da terra è fondamentale nelle vetture a effetto suolo, e il rake è l’inclinazione longitudinale: 30 mm su 3,6 m sono 0,48°.' },
      { t: 'The ⟦aerodynamic balance⟧ is the front share of downforce, about 45%; in the lesson’s example, 1 point moves 240 N.', it: 'Il bilanciamento aerodinamico è la quota di carico sull’avantreno, circa 45%; nell’esempio della lezione 1 punto sposta 240 N.' },
      { t: 'Ground-effect cars are kept very stiff, and a stiffer front ⟦anti-roll bar⟧ adds understeer.', it: 'Le vetture a effetto suolo sono tenute molto rigide, e una barra antirollio anteriore più rigida aggiunge sottosterzo.' },
      { t: 'The ideal ⟦brake bias⟧ goes from about 53% to 64% at the front, so it is adjusted during the lap.', it: 'La ripartizione ideale dei freni va da circa 53% a 64% sull’anteriore, quindi viene regolata durante il giro.' },
      { t: 'With a ⟦limited-slip differential⟧, a 40% lock on 1000 N·m gives 700 N·m to the outer wheel and 300 to the inner.', it: 'Con un differenziale a slittamento limitato, un blocco del 40% su 1000 N·m dà 700 N·m alla ruota esterna e 300 alla interna.' },
      { t: 'Monza wants low-downforce wings and Monaco maximum wings, and ⟦parc fermé⟧ limits changes after qualifying.', it: 'Monza vuole ali scariche e Monaco ali al massimo, e il parc fermé limita le modifiche dopo le qualifiche.' }
    ],
    gloss: [
      { w: 'set-up', it: 'assetto, insieme delle regolazioni' },
      { w: 'ride height', it: 'altezza da terra' },
      { w: 'rake', it: 'inclinazione longitudinale della vettura' },
      { w: 'aerodynamic balance', it: 'bilanciamento aerodinamico' },
      { w: 'camber', it: 'inclinazione della ruota' },
      { w: 'toe', it: 'convergenza' },
      { w: 'anti-roll bar', it: 'barra antirollio' },
      { w: 'brake bias', it: 'ripartizione dei freni' },
      { w: 'limited-slip differential', it: 'differenziale a slittamento limitato' },
      { w: 'parc fermé', it: 'parco chiuso, limiti alle modifiche' }
    ]
  });
  A('f1-bagnato-e-condizioni-variabili', {
    title: { t: 'Wet weather and changing conditions', it: 'Bagnato e condizioni variabili' },
    sum: [
      { t: 'Water lowers the friction coefficient: about 1.5 dry, 1.1 with intermediates and 0.8 with heavy water (rough figures).', it: 'L’acqua riduce il coefficiente di aderenza: circa 1,5 sull’asciutto, 1,1 con le intermedie e 0,8 con molta acqua (cifre indicative).' },
      { t: '⟦Spray⟧ reduces visibility, braking distances grow, and wet races often reshuffle the order.', it: 'Lo spruzzo riduce la visibilità, le frenate si allungano e le gare nel bagnato spesso ribaltano la classifica.' },
      { t: '⟦Intermediates⟧ suit a damp or drying track, while ⟦full wets⟧ are for heavy rain.', it: 'Le intermedie vanno bene per pista umida o in asciugatura, mentre le full wet sono per la pioggia forte.' },
      { t: 'As the track dries, intermediates overheat, and the switch to slicks comes at the ⟦crossover⟧, when slicks become faster.', it: 'Con la pista che si asciuga le intermedie si surriscaldano, e il passaggio alle slick avviene al crossover, quando le slick diventano più veloci.' },
      { t: '⟦Aquaplaning⟧ happens when the tyre rides on a film of water and loses contact with the asphalt.', it: 'L’aquaplaning si verifica quando la gomma sale su un velo d’acqua e perde contatto con l’asfalto.' },
      { t: 'Halving deceleration doubles braking distance: from 200 km/h it is 78.7 m at 2 g and 157.3 m at 1 g.', it: 'Dimezzare la decelerazione raddoppia la distanza di frenata: da 200 km/h sono 78,7 m con 2 g e 157,3 m con 1 g.' },
      { t: 'The race director can declare a ⟦wet race⟧, start behind the safety car or red-flag it; the two-compound rule then lapses.', it: 'Il direttore di gara può dichiarare una gara bagnata, far partire dietro la safety car o esporre la rossa; l’obbligo di due mescole decade.' }
    ],
    gloss: [
      { w: 'friction coefficient', it: 'coefficiente di aderenza μ' },
      { w: 'spray', it: 'spruzzo d’acqua sollevato dalle auto' },
      { w: 'intermediates', it: 'intermedie (verdi)' },
      { w: 'full wets', it: 'gomme da pioggia forte (blu)' },
      { w: 'crossover', it: 'giro in cui le slick diventano più veloci delle intermedie' },
      { w: 'aquaplaning', it: 'perdita di contatto su un velo d’acqua' },
      { w: 'wet race', it: 'gara dichiarata bagnata' },
      { w: 'dry line', it: 'linea asciutta, la traiettoria che si asciuga per prima' },
      { w: 'slicks', it: 'gomme lisce da asciutto' },
      { w: 'rivers', it: 'rivoli d’acqua sulla pista' }
    ]
  });
  A('f1-simulazione-del-giro', {
    title: { t: 'Lap simulation and the performance limit', it: 'Simulazione del giro e limite della prestazione' },
    sum: [
      { t: '⟦Lap time simulation⟧ sums small stretches, t = Σ Δs/v, each at a speed set by power, grip or braking.', it: 'La simulazione del giro somma piccoli tratti, t = Σ Δs/v, ciascuno a una velocità fissata da potenza, aderenza o frenata.' },
      { t: 'The average speed, 208 km/h, is far below the ⟦top speed⟧ of 339 km/h, so corners and braking decide the lap.', it: 'La velocità media, 208 km/h, è molto inferiore alla velocità massima di 339 km/h, quindi curve e frenate decidono il giro.' },
      { t: 'A ⟦quasi-static model⟧ treats each instant as equilibrium, with a forward pass for acceleration and a backward pass for braking.', it: 'Un modello quasi-statico tratta ogni istante come equilibrio, con una passata in avanti per l’accelerazione e una all’indietro per la frenata.' },
      { t: 'A ⟦sensitivity⟧ table changes one parameter at a time: grip matters most (−0.47), then mass (+0.23), then downforce (−0.18).', it: 'Una tabella di sensibilità cambia un parametro alla volta: pesa di più l’aderenza (−0,47), poi la massa (+0,23), poi il carico (−0,18).' },
      { t: 'Each kg costs roughly 0.03 s per lap, so a full 110 kg tank makes a lap about 3 seconds slower.', it: 'Ogni kg costa circa 0,03 s a giro, quindi un serbatoio pieno da 110 kg rende un giro più lento di circa 3 secondi.' },
      { t: 'A ⟦ghost lap⟧ compares two laps through the ⟦delta⟧, the time difference along the distance, showing where time is lost.', it: 'Un ghost lap confronta due giri tramite il delta, la differenza di tempo lungo la distanza, mostrando dove si perde tempo.' },
      { t: 'The model errs on transients, tyres and traffic, so it is more reliable for comparisons than for absolute lap times.', it: 'Il modello sbaglia su transitori, gomme e traffico, quindi è più affidabile per confronti che per tempi assoluti.' }
    ],
    gloss: [
      { w: 'lap time simulation', it: 'simulazione del giro' },
      { w: 'top speed', it: 'velocità massima' },
      { w: 'quasi-static model', it: 'modello quasi-statico' },
      { w: 'sensitivity', it: 'sensibilità, effetto di un parametro sul tempo' },
      { w: 'ghost lap', it: 'giro fantasma, confronto fra due giri' },
      { w: 'delta', it: 'differenza di tempo accumulato lungo la distanza' },
      { w: 'elasticity', it: 'elasticità, variazione % del tempo per variazione % del parametro' },
      { w: 'transients', it: 'transitori, fenomeni dinamici ignorati dal modello' },
      { w: 'performance limit', it: 'limite della prestazione' },
      { w: 'ballast', it: 'zavorra' }
    ]
  });
  A('f1-tempo-sul-giro', {
    title: { t: 'Lap time as a sum of factors', it: 'Il tempo sul giro come somma di fattori' },
    sum: [
      { t: 'Lap time is a base time plus small corrections from ⟦fuel⟧, ⟦tyre degradation⟧ and ⟦traffic⟧.', it: 'Il tempo sul giro è un tempo di base più piccole correzioni dovute a carburante, degrado delle gomme e traffico.' },
      { t: 'Without refuelling, a full tank slows the car by about 0.03 s per kg, so 100 kg means about 3.0 s.', it: 'Senza rifornimento, un serbatoio pieno rallenta la vettura di circa 0,03 s per kg, quindi 100 kg sono circa 3,0 s.' },
      { t: 'Burning about 1.75 kg per lap makes the car faster by about 0.0525 s each lap.', it: 'Bruciare circa 1,75 kg a giro rende la vettura più veloce di circa 0,0525 s a ogni giro.' },
      { t: 'Degradation is roughly linear at 0.03–0.15 s per lap of tyre age; 0.08 s per lap over 20 laps costs 1.6 s.', it: 'Il degrado è circa lineare a 0,03–0,15 s per giro di età della gomma; 0,08 s a giro in 20 giri costano 1,6 s.' },
      { t: 'In t = t0 + d·e − f·B, fuel partly hides degradation, so lap time rises only 0.0275 s per lap.', it: 'Nel modello t = t0 + d·e − f·B il carburante nasconde in parte il degrado, quindi il tempo sale solo di 0,0275 s a giro.' },
      { t: 'Following another car in ⟦dirty air⟧ costs about 0.3–1.0 s per lap, so ⟦clean air⟧ is a valuable resource.', it: 'Seguire un’altra macchina nell’aria sporca costa circa 0,3–1,0 s a giro, quindi l’aria pulita è una risorsa preziosa.' },
      { t: 'To isolate degradation, use the ⟦fuel-corrected time⟧: the example shows 2.4 s of degradation over 30 laps.', it: 'Per isolare il degrado si usa il tempo corretto per il carburante: l’esempio mostra 2,4 s di degrado in 30 giri.' }
    ],
    gloss: [
      { w: 'fuel', it: 'carburante, più massa e giri più lenti' },
      { w: 'tyre degradation', it: 'degrado delle gomme' },
      { w: 'traffic', it: 'traffico, perdita di carico stando dietro a un’altra auto' },
      { w: 'clean air', it: 'aria pulita, senza auto davanti' },
      { w: 'fuel-corrected time', it: 'tempo corretto per il carburante' },
      { w: 'dirty air', it: 'aria sporca' },
      { w: 'base time', it: 'tempo di base' },
      { w: 'cliff', it: 'crollo improvviso del degrado' },
      { w: 'tyre age', it: 'età della gomma in giri' },
      { w: 'model', it: 'modello, formula approssimata per fare conti' }
    ]
  });
  A('f1-pit-stop-e-strategie', {
    title: { t: 'Pit stops: time loss and comparing strategies', it: 'Pit stop: perdita di tempo e confronto tra strategie' },
    sum: [
      { t: 'The ⟦pit loss⟧ is the time lost versus staying out, usually 20–25 s, and depends on the circuit, not the driver.', it: 'La perdita di tempo è il tempo perso rispetto a restare in pista, in genere 20–25 s, e dipende dal circuito più che dal pilota.' },
      { t: 'Its parts are the slow pit lane, a stationary stop of about 2–2.5 s, and braking and restart on cold tyres.', it: 'Le sue componenti sono la corsia box lenta, una sosta ferma di circa 2–2,5 s, e la frenata e la ripartenza su gomme fredde.' },
      { t: 'The cost per lap of a stint, c(n) = P/n + d(n−1)/2, is flat near its minimum, giving a ⟦pit window⟧.', it: 'Il costo per giro di uno stint è c(n) = P/n + d(n−1)/2, piatto vicino al minimo, e dà una finestra di sosta.' },
      { t: 'With P = 22 s and d = 0.08, the optimal ⟦stint⟧ is about 23 laps.', it: 'Con P = 22 s e d = 0,08, lo stint ottimo è di circa 23 giri.' },
      { t: 'Rejoining behind slower cars costs ⟦traffic⟧: 6 laps at 0.8 s each lose 4.8 s.', it: 'Rientrare dietro auto più lente costa traffico: 6 giri a 0,8 s ciascuno fanno perdere 4,8 s.' },
      { t: 'In the 50-lap model one stop beats two by 6.29 s: the extra stop costs 22 s and gains only 15.71 s.', it: 'Nel modello di 50 giri, una sosta batte due soste di 6,29 s, perché la sosta in più costa 22 s e ne guadagna solo 15,71.' },
      { t: 'Two stops win when the ⟦break-even⟧ pit loss is below 15.71 s, when tyres cannot last, or under a ⟦safety car⟧.', it: 'Due soste vincono quando la perdita è sotto il pareggio di 15,71 s, quando le gomme non reggono, o con una safety car.' }
    ],
    gloss: [
      { w: 'pit loss', it: 'perdita di tempo per la sosta' },
      { w: 'pit window', it: 'finestra di sosta' },
      { w: 'stint', it: 'tratto di gara fra due soste' },
      { w: 'traffic', it: 'traffico dopo il rientro' },
      { w: 'break-even', it: 'punto di pareggio' },
      { w: 'safety car', it: 'auto di sicurezza' },
      { w: 'degradation', it: 'degrado delle gomme' },
      { w: 'compound offset', it: 'differenza di ritmo fra mescole' },
      { w: 'one-stop', it: 'strategia a una sosta' },
      { w: 'pit lane', it: 'corsia dei box' }
    ]
  });
  A('f1-undercut-e-overcut', {
    title: { t: 'Undercut and overcut', it: 'Undercut e overcut' },
    sum: [
      { t: 'In an ⟦undercut⟧ the chaser stops first and uses fresh, faster tyres to get ahead when the rival stops.', it: 'In un undercut chi insegue si ferma per primo e usa gomme nuove, più veloci, per passare davanti quando il rivale si ferma.' },
      { t: 'The gain is G = d·(k − 2): with d = 0.10 s per lap and a 19-lap-old tyre, 1.7 s.', it: 'Il guadagno è G = d·(k − 2): con d = 0,10 s a giro e una gomma di 19 giri, è 1,7 s.' },
      { t: 'It works only if the gain exceeds the ⟦gap⟧: a 1.5 s gap leaves +0.2 s, while a 2.0 s gap fails.', it: 'Funziona solo se il guadagno supera il distacco: 1,5 s di distacco lasciano +0,2 s, mentre 2,0 s falliscono.' },
      { t: 'The gain grows with ⟦degradation⟧, and with no degradation it is zero.', it: 'Il guadagno cresce con il degrado, e senza degrado è zero.' },
      { t: 'The rival’s best answers are to stop first (⟦pre-empt⟧) or to stay out for an ⟦overcut⟧.', it: 'Le migliori risposte del rivale sono fermarsi prima (pre-empt) o restare fuori per un overcut.' },
      { t: 'Exiting in ⟦traffic⟧ can cancel the gain: 1.7 s minus 3 laps at 0.9 s leaves −1.0 s.', it: 'Uscire nel traffico può annullare il guadagno: 1,7 s meno 3 giri a 0,9 s lascia −1,0 s.' },
      { t: 'An overcut pays when the old tyre degrades little, new tyres warm up slowly or the pit exit is busy.', it: 'L’overcut paga quando la gomma vecchia degrada poco, le gomme nuove si scaldano lentamente o l’uscita dai box è trafficata.' }
    ],
    gloss: [
      { w: 'undercut', it: 'fermarsi prima del rivale per passarlo' },
      { w: 'overcut', it: 'restare fuori più a lungo per fermarsi dopo' },
      { w: 'gap', it: 'distacco' },
      { w: 'degradation', it: 'degrado delle gomme' },
      { w: 'pre-empt', it: 'anticipare la sosta per evitare l’undercut' },
      { w: 'traffic', it: 'traffico all’uscita dai box' },
      { w: 'clean air', it: 'aria pulita' },
      { w: 'pit exit', it: 'uscita dai box' },
      { w: 'margin', it: 'margine sul distacco' },
      { w: 'pit wall', it: 'muretto dei box' }
    ]
  });
  A('f1-strategia-gomme', {
    title: { t: 'Tyre strategy: compounds, stints and cliff', it: 'Strategia gomme: mescole, stint e cliff' },
    sum: [
      { t: 'A softer ⟦compound⟧ is faster but its ⟦degradation⟧ comes sooner; adjacent compounds differ by 0.3–0.8 s per lap when new.', it: 'Una mescola più morbida è più veloce ma degrada prima; mescole adiacenti differiscono di 0,3–0,8 s a giro da nuove.' },
      { t: 'The optimal ⟦stint⟧ is n* = √(2P/d): with P = 22 s and d = 0.08 s per lap, about 23.5 laps.', it: 'La lunghezza ottima dello stint è n* = √(2P/d): con P = 22 s e d = 0,08 s a giro, circa 23,5 giri.' },
      { t: 'More degradation means a shorter optimal stint, and a costlier stop means a longer one.', it: 'Più degrado significa uno stint ottimo più corto, e una sosta più costosa significa uno stint più lungo.' },
      { t: 'The ⟦cliff⟧ is the point where degradation suddenly becomes much faster, and the formula stops working.', it: 'Il cliff è il punto in cui il degrado diventa improvvisamente molto più rapido, e la formula smette di valere.' },
      { t: 'Stopping a few laps early costs little, but running past the cliff costs a lot: five laps beyond it lose 6.0 s.', it: 'Fermarsi qualche giro prima costa poco, ma restare oltre il cliff costa molto: cinque giri oltre fanno perdere 6,0 s.' },
      { t: '⟦Tyre management⟧ means driving smoothly to make tyres last, at the cost of a few tenths now.', it: 'La gestione delle gomme significa guidare in modo dolce per farle durare, a costo di qualche decimo oggi.' },
      { t: 'The ⟦two-compound rule⟧ applies in dry races; in the model, starting on soft costs 4.92 s overall but may gain positions.', it: 'L’obbligo di due mescole vale nelle gare asciutte; nel modello, partire con la soft costa 4,92 s in totale ma può guadagnare posizioni.' }
    ],
    gloss: [
      { w: 'compound', it: 'mescola' },
      { w: 'degradation', it: 'degrado' },
      { w: 'stint', it: 'tratto di gara fra due soste' },
      { w: 'cliff', it: 'punto di crollo improvviso delle prestazioni' },
      { w: 'tyre management', it: 'gestione delle gomme' },
      { w: 'two-compound rule', it: 'obbligo di due mescole diverse' },
      { w: 'optimal stint', it: 'lunghezza ottima dello stint' },
      { w: 'pit loss', it: 'perdita di tempo per la sosta' },
      { w: 'soft', it: 'mescola morbida (rossa)' },
      { w: 'hard', it: 'mescola dura (bianca)' }
    ]
  });
  A('f1-safety-car-e-vsc', {
    title: { t: 'Safety car and VSC: pit or stay out', it: 'Safety car e VSC: box o resta fuori' },
    sum: [
      { t: 'Under the ⟦safety car⟧ a lap lasts 40–60% longer, under the ⟦VSC⟧ 30–40% longer, and gaps shrink.', it: 'Sotto safety car un giro dura il 40–60% in più, sotto VSC il 30–40% in più, e i distacchi si comprimono.' },
      { t: '⟦Pit loss⟧ falls from about 22 s at green to 15 s under the VSC and 11 s under the safety car.', it: 'La perdita del pit stop scende da circa 22 s in regime verde a circa 15 s sotto VSC e circa 11 s sotto safety car.' },
      { t: 'The saving needs a planned stop: stopping δ laps early costs time growing with δ², 4.16 s for δ = 8.', it: 'Il risparmio è reale solo se la sosta era prevista: fermarsi δ giri prima costa un tempo crescente con δ², 4,16 s per δ = 8.' },
      { t: 'A stop under the safety car stays worthwhile unless the planned stop is more than about 13 laps away.', it: 'Una sosta sotto safety car resta conveniente a meno che la sosta prevista sia a più di circa 13 giri di distanza.' },
      { t: 'Delaying a stop to wait for a safety car pays for at most 2–3 laps, and only where one is very likely.', it: 'Ritardare la sosta aspettando una safety car conviene al massimo per 2–3 giri, e solo dove è molto probabile.' },
      { t: 'For the leader, stopping costs a certain 11 s, while staying out has an ⟦expected value⟧ of 16.9 s with more ⟦variance⟧.', it: 'Per il leader fermarsi costa 11 s certi, mentre restare fuori ha un valore atteso di 16,9 s con più varianza.' },
      { t: 'The leader loses his gap anyway, so he tends to ⟦cover⟧ a chaser’s stop.', it: 'Il leader perde comunque il suo vantaggio, quindi tende a coprire la sosta di chi insegue.' }
    ],
    gloss: [
      { w: 'safety car', it: 'auto di sicurezza che compatta il gruppo' },
      { w: 'VSC', it: 'virtual safety car, tempo-obiettivo (delta) per settore' },
      { w: 'pit loss', it: 'perdita di tempo del pit stop' },
      { w: 'expected value', it: 'valore atteso' },
      { w: 'variance', it: 'varianza, variabilità degli esiti' },
      { w: 'cover', it: 'coprire, imitare la mossa del rivale' },
      { w: 'double stack', it: 'due auto della stessa squadra ai box insieme' },
      { w: 'delta', it: 'tempo-obiettivo da rispettare sotto VSC' },
      { w: 'red flag', it: 'bandiera rossa, sosta gratuita' },
      { w: 'conditional plan', it: 'piano condizionale per ogni evento' }
    ]
  });
  A('f1-incertezza-e-decisioni', {
    title: { t: 'Uncertainty, simulation and game theory', it: 'Incertezza, simulazione e teoria dei giochi' },
    sum: [
      { t: 'A strategy is chosen before the outcome is known, so it is judged by ⟦expected value⟧ and by ⟦variance⟧, the risk.', it: 'Una strategia si sceglie prima di conoscere l’esito, quindi si giudica con il valore atteso e con la varianza, cioè il rischio.' },
      { t: 'In the example, +4 s at 60% and −5 s at 40% average +0.4 s, with a ⟦standard deviation⟧ of 4.41 s.', it: 'Nell’esempio, +4 s al 60% e −5 s al 40% danno +0,4 s in media ma una deviazione standard di 4,41 s.' },
      { t: 'In points, a safe 4th place gives 12, while the risky plan averages 10.9 points with much more variability.', it: 'In punti, un sicuro quarto posto vale 12, mentre il piano rischioso vale in media 10,9 punti con molta più variabilità.' },
      { t: 'The ⟦objective function⟧ decides: if only the podium matters, the riskier plan can be right.', it: 'La funzione obiettivo decide: se conta solo il podio, il piano più rischioso può essere quello giusto.' },
      { t: '⟦Monte Carlo simulation⟧ runs the race many times with random events; four times the runs halve the error.', it: 'La simulazione Monte Carlo fa girare la gara molte volte con eventi casuali; quattro volte le simulazioni dimezzano l’errore.' },
      { t: 'With a 1% chance of a safety car per lap, the chance of at least one in 57 laps is 43.6%.', it: 'Con l’1% di probabilità di safety car a ogni giro, la probabilità di almeno una in 57 giri è 43,6%.' },
      { t: 'Because the rival also decides, a ⟦mixed strategy⟧ keeps you unpredictable; in the example B undercuts with probability 30.8%.', it: 'Poiché anche il rivale decide, una strategia mista ti rende imprevedibile; nell’esempio B fa l’undercut con probabilità 30,8%.' }
    ],
    gloss: [
      { w: 'expected value', it: 'valore atteso, media pesata con le probabilità' },
      { w: 'variance', it: 'varianza' },
      { w: 'standard deviation', it: 'deviazione standard' },
      { w: 'objective function', it: 'funzione obiettivo' },
      { w: 'Monte Carlo simulation', it: 'simulazione Monte Carlo' },
      { w: 'mixed strategy', it: 'strategia mista, scelta casuale con le giuste probabilità' },
      { w: 'game theory', it: 'teoria dei giochi' },
      { w: 'law of large numbers', it: 'legge dei grandi numeri' },
      { w: 'mirror', it: 'copertura, imitare il rivale' },
      { w: 'pre-empt', it: 'anticipare una mossa attesa dal rivale' }
    ]
  });
  A('f1-gestione-dal-muretto', {
    title: { t: 'Managing the race from the pit wall', it: 'Gestione della gara dal muretto' },
    sum: [
      { t: 'The ⟦pit wall⟧ sees the whole picture and prepares ⟦conditional plans⟧, while the driver feels the car.', it: 'Il muretto vede tutto il quadro e prepara piani condizionali, mentre il pilota sente la macchina.' },
      { t: 'The ⟦radio⟧ must be short and clear, and the driver is also a sensor whose feedback corrects the models.', it: 'La radio deve essere breve e chiara, e il pilota è anche un sensore il cui feedback corregge i modelli.' },
      { t: '⟦Lift and coast⟧ saves fuel: with 2.6 kg missing, about 17.3 laps cost only 2.08 s.', it: 'Il lift and coast risparmia carburante: con 2,6 kg mancanti, circa 17,3 giri costano solo 2,08 s.' },
      { t: 'A lean engine map for the whole race would cost 11.4 s, so lift and coast is used only when needed.', it: 'Una mappa motore povera per tutta la gara costerebbe 11,4 s, quindi il lift and coast si usa solo quando serve.' },
      { t: 'Pace is a resource: pushing 0.25 s per lap for 4 laps builds 1.0 s of extra margin against an undercut.', it: 'Il ritmo è una risorsa: spingere 0,25 s a giro per 4 giri costruisce 1,0 s di margine in più contro un undercut.' },
      { t: '⟦Team orders⟧, allowed since 2011, swap positions: they move 7 points between drivers, not in the constructors’ total.', it: 'Gli ordini di squadra, consentiti dal 2011, scambiano le posizioni: spostano 7 punti tra i piloti, non nel totale costruttori.' },
      { t: 'By ⟦expected value⟧, pushing with a 6% failure chance is worth 12.83 points against 12.47 for managing.', it: 'Per valore atteso, spingere con il 6% di rischio di guasto vale 12,83 punti contro 12,47 di gestire.' }
    ],
    gloss: [
      { w: 'pit wall', it: 'muretto dei box' },
      { w: 'conditional plans', it: 'piani condizionali preparati prima della gara' },
      { w: 'radio', it: 'radio tra pilota e ingegnere di pista' },
      { w: 'lift and coast', it: 'togliere il gas prima della frenata per risparmiare' },
      { w: 'team orders', it: 'ordini di squadra' },
      { w: 'expected value', it: 'valore atteso' },
      { w: 'head of strategy', it: 'capo strategia' },
      { w: 'race engineer', it: 'ingegnere di pista' },
      { w: 'undercut', it: 'sosta anticipata per passare il rivale' },
      { w: 'margin', it: 'margine di sicurezza sul distacco' }
    ]
  });
  A('f1-telemetria', {
    title: { t: 'Telemetry: sensors, channels and charts', it: 'La telemetria: sensori, canali e grafici' },
    sum: [
      { t: '⟦Telemetry⟧ measures hundreds of quantities on the car and sends them to the pits; the ⟦ECU⟧ is standard for all teams.', it: 'La telemetria misura centinaia di grandezze sulla vettura e le trasmette ai box; la centralina è standard per tutte le squadre.' },
      { t: 'A ⟦channel⟧ is a quantity recorded over time, such as speed, rpm, gear, throttle, brake pressure and steering angle.', it: 'Un canale è una grandezza registrata nel tempo, come velocità, regime, marcia, acceleratore, pressione del freno e angolo di sterzo.' },
      { t: 'The ⟦sampling rate⟧ is the number of measurements per second: at 300 km/h, 10 Hz gives a sample every 8.33 m.', it: 'La frequenza di campionamento è il numero di misure al secondo: a 300 km/h, 10 Hz dà un campione ogni 8,33 m.' },
      { t: 'Charts are best plotted against distance, so two laps line up at the same point on the track.', it: 'I grafici si tracciano meglio rispetto alla distanza, così due giri si allineano nello stesso punto della pista.' },
      { t: '⟦Lateral g⟧ follows a = v²/r: 70 m/s on a 250 m radius gives 2.0 g; fast corners peak at 5–6 g.', it: 'I G laterali seguono a = v²/r: 70 m/s su un raggio di 250 m danno 2,0 g, e le curve veloci raggiungono picchi di 5–6 g.' },
      { t: 'Telemetry drives actions on car health, tyres, fuel and set-up, but numbers always need interpretation.', it: 'La telemetria guida le azioni su salute della vettura, gomme, carburante e assetto, ma i numeri vanno sempre interpretati.' },
      { t: 'Beware of sampling, transmission delay, units and different conditions, and always run ⟦plausibility checks⟧.', it: 'Attenzione a campionamento, ritardo di trasmissione, unità e condizioni diverse, e fai sempre controlli di plausibilità.' }
    ],
    gloss: [
      { w: 'telemetry', it: 'telemetria, misure trasmesse ai box' },
      { w: 'ECU', it: 'centralina standard' },
      { w: 'channel', it: 'canale, grandezza registrata nel tempo' },
      { w: 'sampling rate', it: 'frequenza di campionamento' },
      { w: 'lateral g', it: 'accelerazione laterale in curva' },
      { w: 'plausibility checks', it: 'controlli di plausibilità' },
      { w: 'throttle', it: 'apertura del gas' },
      { w: 'brake pressure', it: 'pressione del freno' },
      { w: 'overlay', it: 'traccia sovrapposta di due giri' },
      { w: 'trail braking', it: 'frenata a rimanere' }
    ]
  });
  A('f1-schermate-dei-tempi', {
    title: { t: 'Timing screens: reading race pace', it: 'Le schermate dei tempi: leggere il ritmo gara' },
    sum: [
      { t: 'The ⟦timing screen⟧ shows position, gap, interval, last and best lap, sectors, tyre compound and age, and stops.', it: 'La schermata dei tempi mostra posizione, gap, intervallo, ultimo giro e giro migliore, settori, mescola ed età della gomma e soste.' },
      { t: 'A car’s ⟦gap⟧ is the sum of the intervals of all cars ahead: 1.2 + 2.5 = 3.7 s.', it: 'Il gap di una macchina è la somma degli intervalli di tutte quelle davanti: 1,2 + 2,5 = 3,7 s.' },
      { t: '⟦Mini-sectors⟧ are purple, green or yellow, and the ⟦ideal lap⟧ combines the best sectors from different laps.', it: 'I mini-settori sono viola, verdi o gialli, e il giro ideale combina i migliori settori di giri diversi.' },
      { t: 'Compound and ⟦tyre age⟧ reveal intentions: a 21-lap-old tyre with falling pace suggests an early stop.', it: 'Mescola ed età della gomma rivelano le intenzioni: una gomma di 21 giri con ritmo in calo suggerisce una sosta presto.' },
      { t: '⟦Race pace⟧ is the average of clean laps, excluding pit laps, safety car laps and traffic.', it: 'Il ritmo gara è la media dei giri puliti, escludendo giri ai box, sotto safety car e in traffico.' },
      { t: 'Closing 0.35 s per lap, a chaser at 2.5 s needs about 4.3 laps to reach 1.0 s.', it: 'Recuperando 0,35 s a giro, un inseguitore a 2,5 s impiega circa 4,3 giri per arrivare a 1,0 s.' },
      { t: 'Raw pace must be corrected for tyre age: 10 laps of difference at 0.08 s per lap is 0.8 s.', it: 'Il ritmo grezzo va corretto per l’età delle gomme: 10 giri di differenza a 0,08 s a giro sono 0,8 s.' }
    ],
    gloss: [
      { w: 'timing screen', it: 'schermata dei tempi' },
      { w: 'gap', it: 'distacco dal leader' },
      { w: 'interval', it: 'distacco dall’auto davanti' },
      { w: 'mini-sectors', it: 'mini-settori' },
      { w: 'ideal lap', it: 'giro ideale, somma dei migliori settori' },
      { w: 'tyre age', it: 'età della gomma in giri' },
      { w: 'race pace', it: 'ritmo gara' },
      { w: 'clean laps', it: 'giri puliti, senza traffico né neutralizzazioni' },
      { w: 'trend', it: 'tendenza del distacco giro dopo giro' },
      { w: 'median', it: 'mediana, utile con valori anomali' }
    ]
  });
  A('f1-confronto-tra-piloti', {
    title: { t: 'Comparing drivers: delta, braking and lines', it: 'Confronto tra piloti: delta, frenate e traiettorie' },
    sum: [
      { t: 'The ⟦delta⟧ is the cumulative time difference between two laps at each point, compared at equal distance and in comparable conditions.', it: 'Il delta è la differenza cumulata di tempo tra due giri in ogni punto, confrontata alla stessa distanza e in condizioni paragonabili.' },
      { t: 'Losing 5 km/h in a 100 m slow corner costs about 0.08 s.', it: 'Perdere 5 km/h in una curva lenta di 100 m costa circa 0,08 s.' },
      { t: 'In a segment example, B takes a slow corner at 125 km/h instead of 120 and gains 0.12 s there.', it: 'In un esempio a segmenti, B percorre una curva lenta a 125 km/h invece di 120 e vi guadagna 0,12 s.' },
      { t: 'An ⟦overlay⟧ plots two laps against the same distance, and where the curves separate, one driver does something different.', it: 'La traccia sovrapposta disegna due giri sulla stessa distanza, e dove le curve si separano un pilota fa qualcosa di diverso.' },
      { t: 'A ⟦braking point⟧ 10 m later at 300 km/h gains 0.12 s, but only if the speed at the ⟦apex⟧ holds.', it: 'Un punto di frenata 10 m più tardi a 300 km/h guadagna 0,12 s, ma solo se la velocità all’apice regge.' },
      { t: '⟦Trail braking⟧ keeps braking after turn-in, releasing gradually to the apex, and gives a higher minimum speed.', it: 'Il trail braking continua a frenare dopo l’inserimento, rilasciando gradualmente fino all’apice, e dà una velocità minima più alta.' },
      { t: '⟦Exit speed⟧ carries along the straight: 1 km/h more over 600 m at 250 km/h gains about 0.03 s.', it: 'La velocità di uscita si porta lungo il rettilineo: 1 km/h in più su 600 m a 250 km/h guadagna circa 0,03 s.' }
    ],
    gloss: [
      { w: 'delta', it: 'differenza cumulata di tempo fra due giri' },
      { w: 'overlay', it: 'traccia sovrapposta di due giri' },
      { w: 'braking point', it: 'punto di frenata' },
      { w: 'apex', it: 'punto di corda' },
      { w: 'trail braking', it: 'frenata a rimanere, rilascio graduale' },
      { w: 'exit speed', it: 'velocità di uscita dalla curva' },
      { w: 'minimum speed', it: 'velocità minima all’apice' },
      { w: 'sector', it: 'settore' },
      { w: 'segment', it: 'segmento corto in cui si calcola il tempo' },
      { w: 'fair comparison', it: 'confronto equo con giri paragonabili' }
    ]
  });
  A('f1-simulazione-giro-e-gara', {
    title: { t: 'Lap and race simulation', it: 'Simulazione del giro e della gara' },
    sum: [
      { t: 'A team cannot test every strategy on track, so it runs ⟦lap simulation⟧ and ⟦race simulation⟧ on a computer.', it: 'Una squadra non può provare tutte le strategie in pista, quindi usa al computer la simulazione del giro e della gara.' },
      { t: 'In corners the maximum speed is v = √(a·r): 3.5 g on a 100 m radius gives 58.6 m/s, about 210.9 km/h.', it: 'In curva la velocità massima è v = √(a·r): 3,5 g su un raggio di 100 m danno 58,6 m/s, circa 210,9 km/h.' },
      { t: 'Speed grows with the square root of grip, so 1% more grip gives about 0.5% more speed.', it: 'La velocità cresce con la radice dell’aderenza, quindi l’1% di aderenza in più dà circa lo 0,5% di velocità in più.' },
      { t: 'A race simulation applies the lap model to every lap and adds stops; in the 12-lap example a stop costs 18.4 s.', it: 'Una simulazione di gara ripete il modello del giro per ogni giro e aggiunge le soste; nell’esempio di 12 giri una sosta costa 18,4 s.' },
      { t: '⟦Linear regression⟧ estimates degradation from stint data: the raw slope was 0.0764 s per lap.', it: 'La regressione lineare stima il degrado dai dati dello stint: la pendenza grezza era 0,0764 s a giro.' },
      { t: 'Correcting for fuel gives 0.1289 s per lap, nearly double, and an ⟦R²⟧ near 1 shows an almost straight line.', it: 'Correggere per il carburante dà 0,1289 s a giro, quasi il doppio, e un R² vicino a 1 mostra una retta quasi perfetta.' },
      { t: 'A line cannot see the ⟦cliff⟧, so avoid extrapolating, and ⟦validate⟧ the model on data not used for calibration.', it: 'Una retta non vede il cliff, quindi evita di estrapolare, e valida il modello su dati non usati per calibrarlo.' }
    ],
    gloss: [
      { w: 'lap simulation', it: 'simulazione del giro' },
      { w: 'race simulation', it: 'simulazione della gara' },
      { w: 'linear regression', it: 'regressione lineare, retta ai minimi quadrati' },
      { w: 'R²', it: 'coefficiente di determinazione, qualità del fit' },
      { w: 'cliff', it: 'crollo improvviso del degrado' },
      { w: 'validate', it: 'validare, confrontare con dati non usati per calibrare' },
      { w: 'quasi-static', it: 'quasi-stazionario, ogni istante in equilibrio' },
      { w: 'extrapolation', it: 'previsione fuori dall’intervallo dei dati' },
      { w: 'weighted average', it: 'media ponderata' },
      { w: 'standard error', it: 'errore standard' }
    ]
  });
  A('f1-affidabilita-e-prestazioni', {
    title: { t: 'Reliability and performance data', it: 'Affidabilità e dati di performance' },
    sum: [
      { t: '⟦Reliability⟧ is the probability that a component works for the whole time required; a retirement means zero points.', it: 'L’affidabilità è la probabilità che un componente funzioni per tutto il tempo richiesto; un ritiro significa zero punti.' },
      { t: 'The ⟦failure rate⟧ λ is failures divided by exposures: 3 failures in 120 starts is 2.5% per race.', it: 'Il tasso di guasto λ è guasti diviso esposizioni: 3 guasti in 120 partenze sono il 2,5% a gara.' },
      { t: 'Its inverse is the ⟦MTBF⟧, 40 races: on average one failure per 40 races of exposure.', it: 'Il suo inverso è l’MTBF, 40 gare: in media un guasto ogni 40 gare di esposizione.' },
      { t: 'Over 24 races at a 2.5% failure rate, the chance of no failure is 54.5%.', it: 'In 24 gare con un tasso di guasto del 2,5%, la probabilità di nessun guasto è 54,5%.' },
      { t: 'In a ⟦series system⟧ reliabilities multiply: 20 components at 0.99 give 81.8%, and ⟦redundancy⟧ helps at a cost in weight.', it: 'In un sistema in serie le affidabilità si moltiplicano: 20 componenti da 0,99 danno 81,8%, e la ridondanza aiuta a costo di peso.' },
      { t: 'After 0 failures in n tests, the ⟦rule of three⟧ bounds the rate at 3/n, so proving under 1% needs 300 tests.', it: 'La regola del tre limita il tasso di guasto a circa 3/n dopo 0 guasti su n prove, quindi dimostrare meno dell’1% richiede 300 prove.' },
      { t: '⟦FMEA⟧ ranks risks with RPN = S × O × D, so a rare but severe, hard-to-detect failure can rank first.', it: 'La FMEA classifica i rischi con RPN = S × O × D, quindi un guasto raro ma grave e difficile da rilevare può essere il primo.' }
    ],
    gloss: [
      { w: 'reliability', it: 'affidabilità' },
      { w: 'failure rate', it: 'tasso di guasto' },
      { w: 'MTBF', it: 'tempo medio fra guasti' },
      { w: 'series system', it: 'sistema in serie' },
      { w: 'redundancy', it: 'ridondanza' },
      { w: 'rule of three', it: 'regola del tre: limite superiore con 0 guasti' },
      { w: 'FMEA', it: 'analisi dei modi di guasto e dei loro effetti' },
      { w: 'RPN', it: 'numero di priorità del rischio' },
      { w: 'bathtub curve', it: 'curva a vasca da bagno' },
      { w: 'burn-in', it: 'rodaggio dei componenti' }
    ]
  });
  A('f1-analisi-post-gara', {
    title: { t: 'Post-race analysis: process versus result', it: 'Analisi post-gara: processo contro risultato' },
    sum: [
      { t: 'The ⟦debrief⟧ asks what happened, why, whether decisions were good with the information then available, and what to change.', it: 'Il debrief chiede che cosa è successo, perché, se le decisioni erano buone con le informazioni di allora, e che cosa cambiare.' },
      { t: 'A good decision can have a bad outcome: 70% for +10 and 30% for −8 points give an ⟦expected value⟧ of +4.6.', it: 'Una decisione può essere buona con un esito cattivo: 70% per +10 e 30% per −8 punti dà un valore atteso di +4,6.' },
      { t: 'Judging a decision by its outcome is called ⟦resulting⟧; the four quadrants are merit, bad luck, good luck and error.', it: 'Giudicare una decisione dall’esito si chiama resulting; i quattro quadranti sono merito, sfortuna, fortuna ed errore.' },
      { t: 'An anomalous lap distorts the mean: 91.2, 91.3, 91.1, 91.4 and 95.8 average 92.16 s, but the ⟦median⟧ is 91.3 s.', it: 'Un giro anomalo falsa la media: per 91,2, 91,3, 91,1, 91,4 e 95,8 è 92,16 s, ma la mediana è 91,3 s.' },
      { t: 'Compare a pace gap with its ⟦standard error⟧: 0.30 s with a ratio of 4.2 is probably real; 0.08 s is noise.', it: 'Confronta una differenza di ritmo con il suo errore standard: 0,30 s con rapporto 4,2 è probabilmente reale, 0,08 s è rumore.' },
      { t: 'A ⟦counterfactual⟧ such as “one lap earlier” is valid only if everything else stays equal, but rivals could react.', it: 'Un controfattuale come «un giro prima» vale solo se tutto il resto resta uguale, ma i rivali potrebbero reagire.' },
      { t: 'Beware of ⟦hindsight bias⟧, confirmation bias and survivorship bias, and record decisions and probabilities beforehand.', it: 'Attenzione al senno di poi, al bias di conferma e al bias di sopravvivenza, e registra prima decisioni e probabilità.' }
    ],
    gloss: [
      { w: 'debrief', it: 'analisi post-gara' },
      { w: 'expected value', it: 'valore atteso' },
      { w: 'resulting', it: 'giudicare la decisione dal risultato' },
      { w: 'median', it: 'mediana, valore centrale' },
      { w: 'standard error', it: 'errore standard' },
      { w: 'counterfactual', it: 'controfattuale, «se avessimo fatto altrimenti»' },
      { w: 'hindsight bias', it: 'senno di poi' },
      { w: 'calibration', it: 'calibrazione delle probabilità stimate' },
      { w: 'quadrants', it: 'i quattro quadranti processo-esito' },
      { w: 'outlier', it: 'valore anomalo' }
    ]
  });
  A('f1-origini-e-primo-mondiale', {
    title: { t: 'The origins: from Grands Prix to the 1950 world championship', it: 'Le origini: dai Gran Premi al mondiale 1950' },
    sum: [
      { t: 'The first modern ⟦Grand Prix⟧ was held in 1906 near Le Mans, won by Ferenc Szisz on Renault.', it: 'Il primo Gran Premio moderno si disputò nel 1906 vicino a Le Mans, vinto da Ferenc Szisz su Renault.' },
      { t: 'The ⟦AIACR⟧, ancestor of the FIA, was founded in 1904.', it: 'L’AIACR, antenata della FIA, nacque nel 1904.' },
      { t: 'In 1934 a formula limited weight to 750 kg, and the German ⟦Silver Arrows⟧ of Mercedes-Benz and Auto Union dominated.', it: 'Nel 1934 una formula limitò il peso a 750 kg, e le Frecce d’argento tedesche di Mercedes-Benz e Auto Union dominarono.' },
      { t: 'After the war the new ⟦Formula 1⟧ allowed 4.5-litre aspirated or 1.5-litre ⟦supercharged⟧ engines, and the Alfa Romeo 158 dominated.', it: 'Dopo la guerra la nuova Formula 1 consentì motori aspirati da 4,5 litri o sovralimentati da 1,5 litri, e l’Alfa Romeo 158 dominò.' },
      { t: 'The world championship began on 13 May 1950 at Silverstone, won by Giuseppe Farina on Alfa Romeo.', it: 'Il mondiale iniziò il 13 maggio 1950 a Silverstone, vinto da Giuseppe Farina su Alfa Romeo.' },
      { t: 'In 1950 the top five scored 8, 6, 4, 3 and 2, with one for fastest lap; the best four results counted.', it: 'Nel 1950 i punti andavano ai primi cinque (8, 6, 4, 3, 2), più uno per il giro veloce, e contavano i migliori quattro risultati.' },
      { t: 'The ⟦constructors’ title⟧ began only in 1958, won by Vanwall; Ferrari, the only team in every season, debuted in 1950.', it: 'Il titolo costruttori nacque solo nel 1958, vinto dalla Vanwall; la Ferrari, unica squadra in tutte le stagioni, debuttò nel 1950.' }
    ],
    gloss: [
      { w: 'Grand Prix', it: 'Gran Premio' },
      { w: 'AIACR', it: 'Association Internationale des Automobiles Clubs Reconnus' },
      { w: 'Silver Arrows', it: 'Frecce d’argento, Mercedes-Benz e Auto Union' },
      { w: 'Formula 1', it: 'Formula 1, formula internazionale di vertice dal dopoguerra' },
      { w: 'supercharged', it: 'sovralimentato con compressore' },
      { w: 'constructors’ title', it: 'titolo costruttori' },
      { w: 'Silverstone', it: 'circuito della prima gara mondiale' },
      { w: 'formula', it: 'insieme di limiti tecnici per le auto' },
      { w: 'drum brakes', it: 'freni a tamburo' },
      { w: 'spaceframe', it: 'telaio a traliccio di tubi' }
    ]
  });
  A('f1-anni-cinquanta-sessanta', {
    title: { t: 'The ’50s and ’60s: Fangio, Moss, Clark and the rear engine', it: 'Anni ’50–’60: Fangio, Moss, Clark e il motore posteriore' },
    sum: [
      { t: 'Fangio won five world titles, with 24 wins in 51 Grands Prix (47.1%), and was champion at 46 in 1957.', it: 'Fangio vinse cinque titoli mondiali, con 24 vittorie in 51 Gran Premi (47,1%), e fu campione a 46 anni nel 1957.' },
      { t: 'In 1958 Hawthorn beat Moss by one point, and Vanwall won the first ⟦constructors’ title⟧.', it: 'Nel 1958 Hawthorn batté Moss di un punto, e la Vanwall vinse il primo titolo costruttori.' },
      { t: 'The ⟦rear engine⟧ revolution came from Cooper: Moss won in Argentina in January 1958, and Brabham took the 1959 and 1960 titles.', it: 'La rivoluzione del motore posteriore venne dalla Cooper: Moss vinse in Argentina nel gennaio 1958, e Brabham conquistò i titoli 1959 e 1960.' },
      { t: 'Lotus introduced the first ⟦monocoque⟧ in 1962, replacing the tubular ⟦spaceframe⟧ with a rigid aluminium shell.', it: 'La Lotus introdusse il primo monoscocca nel 1962, sostituendo il telaio a traliccio tubolare con un guscio rigido in alluminio.' },
      { t: 'The ⟦Cosworth DFV⟧ debuted in 1967, stayed in use until 1985 with 155 wins, and was accessible to small teams.', it: 'Il Cosworth DFV debuttò nel 1967, restò in uso fino al 1985 con 155 vittorie, ed era accessibile ai piccoli team.' },
      { t: 'Jim Clark won 25 of 72 races (34.7%) and two titles, in 1963 and 1965.', it: 'Jim Clark vinse 25 gare su 72 (34,7%) e due titoli, nel 1963 e nel 1965.' },
      { t: 'Safety was almost absent: open helmets, no belts, and road circuits like 14 km Spa with no ⟦run-off⟧.', it: 'La sicurezza era quasi assente: caschi aperti, niente cinture e circuiti stradali come Spa, di 14 km, senza vie di fuga.' }
    ],
    gloss: [
      { w: 'constructors’ title', it: 'titolo costruttori' },
      { w: 'rear engine', it: 'motore posteriore' },
      { w: 'monocoque', it: 'monoscocca, guscio rigido che contiene il pilota' },
      { w: 'spaceframe', it: 'telaio a traliccio tubolare' },
      { w: 'Cosworth DFV', it: 'motore V8 da 3 litri acquistabile dai piccoli team' },
      { w: 'run-off', it: 'via di fuga' },
      { w: 'Triple Crown', it: 'Tripla Corona: Monaco, Indianapolis e Le Mans' },
      { w: 'drum brakes', it: 'freni a tamburo' },
      { w: 'cars', it: 'auto' },
      { w: 'privateer', it: 'team privato' }
    ]
  });
  A('f1-anni-settanta-ottanta', {
    title: { t: 'The ’70s and ’80s: Lauda, Hunt, ground effect, turbo, Senna and Prost', it: 'Anni ’70–’80: Lauda, Hunt, effetto suolo, turbo, Senna e Prost' },
    sum: [
      { t: 'The ⟦Cosworth DFV⟧ engine let small British teams compete, while Ferrari built everything in-house.', it: 'Il motore Cosworth DFV permise ai piccoli team britannici di essere competitivi, mentre la Ferrari costruiva tutto in casa.' },
      { t: 'In 1976 Lauda crashed at the Nürburgring on 1 August and returned at Monza after 42 days.', it: 'Nel 1976 Lauda ebbe un incidente al Nürburgring il 1° agosto e tornò a Monza dopo 42 giorni.' },
      { t: 'Hunt took the 1976 title with 69 points to Lauda’s 68, after Lauda retired in the rain in Japan.', it: 'Hunt conquistò il titolo 1976 con 69 punti contro i 68 di Lauda, dopo il ritiro di Lauda sotto la pioggia in Giappone.' },
      { t: 'The Lotus 78 (1977) and 79 (1978) brought ⟦ground effect⟧, sealed by ⟦skirts⟧; a flat floor was imposed in 1983.', it: 'La Lotus 78 (1977) e la 79 (1978) portarono l’effetto suolo, sigillato dalle minigonne; nel 1983 fu imposto un fondo piatto.' },
      { t: 'Renault introduced the ⟦turbo⟧ in 1977; Piquet was the first turbo champion in 1983, and turbos were banned in 1989.', it: 'La Renault introdusse il turbo nel 1977; Piquet fu il primo campione turbo nel 1983, e i turbo furono vietati nel 1989.' },
      { t: 'In 1988 the McLaren MP4/4 won 15 of 16 races, and Senna beat Prost by 90 points to 87.', it: 'Nel 1988 la McLaren MP4/4 vinse 15 gare su 16, e Senna batté Prost per 90 punti a 87.' },
      { t: 'The ⟦FOCA⟧–FISA conflict ended in 1981 with the first ⟦Concorde Agreement⟧, which unified TV rights.', it: 'Il conflitto FISA-FOCA si chiuse nel 1981 con il primo Concorde Agreement, che unificò i diritti televisivi.' }
    ],
    gloss: [
      { w: 'Cosworth DFV', it: 'motore V8 da 3 litri usato dai piccoli team' },
      { w: 'ground effect', it: 'effetto suolo' },
      { w: 'skirts', it: 'minigonne laterali che sigillano il fondo' },
      { w: 'turbo', it: 'motore sovralimentato da 1,5 litri' },
      { w: 'FOCA', it: 'associazione dei team britannici guidata da Ecclestone' },
      { w: 'Concorde Agreement', it: 'accordo fra FIA, squadre e gestore dei diritti' },
      { w: 'FISA', it: 'emanazione sportiva della FIA' },
      { w: 'flat floor', it: 'fondo piatto obbligatorio dal 1983' },
      { w: 'wing cars', it: 'auto con effetto suolo, dette anche wing cars' },
      { w: 'fan car', it: 'Brabham BT46B con ventola posteriore' }
    ]
  });
  A('f1-anni-novanta-duemila', {
    title: { t: 'The ’90s and 2000s: electronics, Schumacher and Ferrari', it: 'Anni ’90–2000: elettronica, Schumacher e Ferrari' },
    sum: [
      { t: 'Electronics became decisive: paddle shift in 1989, ⟦active suspension⟧ in 1992, ⟦traction control⟧ and ABS.', it: 'L’elettronica diventò decisiva: leve al volante nel 1989, sospensioni attive nel 1992, controllo di trazione e ABS.' },
      { t: 'Electronic aids were banned from 1994, and a single standard ⟦ECU⟧ was adopted in 2008.', it: 'Gli aiuti elettronici furono vietati dal 1994, e nel 2008 fu adottata una centralina unica standard.' },
      { t: 'In 1994 Schumacher won the title by 92 points to 91 over Hill, after a contact in Adelaide.', it: 'Nel 1994 Schumacher vinse il titolo con 92 punti contro i 91 di Hill, dopo un contatto ad Adelaide.' },
      { t: 'Schumacher moved to Ferrari in 1996, with Brawn and Byrne, and won the title in 2000.', it: 'Schumacher passò alla Ferrari nel 1996, con Brawn e Byrne, e vinse il titolo nel 2000.' },
      { t: 'He won seven titles and 91 races, 19 with Benetton and 72 with Ferrari, which took six ⟦constructors’ titles⟧ in a row.', it: 'Vinse sette titoli e 91 gare, 19 con la Benetton e 72 con la Ferrari, che ottenne sei titoli costruttori di fila.' },
      { t: 'In 2003 the ⟦points scale⟧ became 10-8-6-5-4-3-2-1, totalling 39, to prolong the fight for the title.', it: 'Nel 2003 la scala dei punti divenne 10-8-6-5-4-3-2-1, per un totale di 39, per allungare la lotta per il titolo.' },
      { t: '⟦Refuelling⟧ was allowed from 1994 to 2009, and the ⟦KERS⟧ of 2009 was the seed of the hybrid.', it: 'Il rifornimento fu ammesso dal 1994 al 2009, e il KERS del 2009 fu il germe dell’ibrido.' }
    ],
    gloss: [
      { w: 'active suspension', it: 'sospensioni attive con idraulica e sensori' },
      { w: 'traction control', it: 'controllo di trazione' },
      { w: 'ECU', it: 'centralina elettronica unica' },
      { w: 'constructors’ titles', it: 'titoli costruttori' },
      { w: 'points scale', it: 'scala dei punti' },
      { w: 'refuelling', it: 'rifornimento in gara' },
      { w: 'KERS', it: 'Kinetic Energy Recovery System, recupero di energia' },
      { w: 'grooved tyres', it: 'gomme scanalate del 1998' },
      { w: 'slick', it: 'gomma liscia, tornata nel 2009' },
      { w: 'ABS', it: 'sistema antibloccaggio dei freni' }
    ]
  });
  A('f1-era-ibrida-e-nuovi-regolamenti', {
    title: { t: 'The hybrid era and new regulations (2014–today)', it: 'L’era ibrida e i nuovi regolamenti (2014–oggi)' },
    sum: [
      { t: 'In 2014 the V8 gave way to the ⟦power unit⟧, a 1.6-litre V6 turbo hybrid with an ⟦ERS⟧.', it: 'Nel 2014 il V8 lasciò il posto al power unit, un V6 turbo ibrido da 1,6 litri con un ERS.' },
      { t: 'Its limits are 15 000 rpm, 100 kg/h of fuel flow and 100 kg of fuel per race; efficiency exceeds 50%.', it: 'I suoi limiti sono 15 000 giri/min, 100 kg/h di flusso di carburante e 100 kg di carburante per gara, con efficienza termica oltre il 50%.' },
      { t: 'Per lap the ⟦MGU-K⟧ recovers at most 2 MJ and releases at most 4 MJ, about 33.3 s at 120 kW.', it: 'Per giro l’MGU-K recupera al massimo 2 MJ e rilascia al massimo 4 MJ, circa 33,3 s a 120 kW.' },
      { t: 'Mercedes won 16 of 19 races in 2014 and eight constructors’ titles in a row, from 2014 to 2021.', it: 'La Mercedes vinse 16 gare su 19 nel 2014 e otto titoli costruttori di fila, dal 2014 al 2021.' },
      { t: 'The ⟦budget cap⟧ arrived in 2021: 145 million dollars, then 140 in 2022 and 135 from 2023.', it: 'Il budget cap arrivò nel 2021: 145 milioni di dollari, poi 140 nel 2022 e 135 dal 2023.' },
      { t: 'The 2022 rules brought ⟦ground effect⟧, 18-inch wheels, E10 fuel and a 798 kg minimum weight.', it: 'Il regolamento 2022 portò l’effetto suolo, ruote da 18 pollici, benzina E10 e un peso minimo di 798 kg.' },
      { t: 'For 2026 about half the power is electric with a 350 kW MGU-K, and the ⟦MGU-H⟧ is abolished.', it: 'Per il 2026 circa metà della potenza è elettrica con una MGU-K da 350 kW, e l’MGU-H è abolita.' }
    ],
    gloss: [
      { w: 'power unit', it: 'unità motrice ibrida' },
      { w: 'ERS', it: 'Energy Recovery System' },
      { w: 'MGU-K', it: 'motore-generatore cinetico' },
      { w: 'MGU-H', it: 'motore-generatore del calore, abolito dal 2026' },
      { w: 'budget cap', it: 'tetto di spesa' },
      { w: 'ground effect', it: 'effetto suolo' },
      { w: 'porpoising', it: 'rimbalzi verticali ad alta velocità' },
      { w: 'active aerodynamics', it: 'aerodinamica attiva del 2026' },
      { w: 'sustainable fuel', it: 'carburante sostenibile' },
      { w: 'sprint format', it: 'formato sprint, sperimentato nel 2021' }
    ]
  });
  A('f1-sicurezza-e-momenti-decisivi', {
    title: { t: 'Safety and decisive moments', it: 'Sicurezza e momenti decisivi' },
    sum: [
      { t: 'Safety works on four levels: prevention, driver protection, car structure and rescue.', it: 'La sicurezza lavora su quattro livelli: prevenzione, protezione del pilota, struttura dell’auto e soccorso.' },
      { t: 'After his 1966 crash at Spa, Jackie Stewart campaigned for belts, full-face helmets, barriers and fireproof suits.', it: 'Dopo l’incidente del 1966 a Spa, Jackie Stewart si batté per cinture, caschi integrali, barriere e tute ignifughe.' },
      { t: 'The ⟦monocoque⟧ became a safety tool: the first carbon-fibre one came in 1981, followed by mandatory ⟦crash tests⟧.', it: 'Il monoscocca divenne uno strumento di sicurezza: il primo in carbonio arrivò nel 1981, seguito dai crash test obbligatori.' },
      { t: 'The 1994 Imola weekend was a turning point, leading to revised circuits, cars and rules.', it: 'Il weekend di Imola del 1994 fu un punto di svolta, e portò a una revisione di circuiti, auto e regole.' },
      { t: 'The ⟦HANS⟧ has been mandatory since 2003, and ⟦Zylon⟧ strips on the visor followed Massa’s 2009 accident.', it: 'L’HANS è obbligatorio dal 2003, e le strisce di Zylon sulla visiera seguirono l’incidente di Massa nel 2009.' },
      { t: 'After Bianchi’s 2014 accident came the ⟦Virtual Safety Car⟧ in 2015, and the ⟦halo⟧ became mandatory in 2018.', it: 'Dopo l’incidente di Bianchi nel 2014 arrivò il Virtual Safety Car nel 2015, e l’halo divenne obbligatorio nel 2018.' },
      { t: 'An 800 kg car at 300 km/h carries about 2.8 MJ; ⟦deformable structures⟧ lengthen stopping time and cut deceleration.', it: 'Un’auto da 800 kg a 300 km/h ha circa 2,8 MJ; le strutture deformabili allungano il tempo di arresto e riducono la decelerazione.' }
    ],
    gloss: [
      { w: 'monocoque', it: 'monoscocca, cellula di sopravvivenza' },
      { w: 'crash tests', it: 'prove d’urto obbligatorie' },
      { w: 'HANS', it: 'Head And Neck Support' },
      { w: 'Zylon', it: 'fibra resistente sulla visiera' },
      { w: 'Virtual Safety Car', it: 'VSC, auto rallentate a un valore imposto' },
      { w: 'halo', it: 'arco in titanio, obbligatorio dal 2018' },
      { w: 'deformable structures', it: 'zone deformabili che assorbono l’urto' },
      { w: 'run-off', it: 'via di fuga' },
      { w: 'wheel tethers', it: 'cavi di ritenzione delle ruote' },
      { w: 'survival cell', it: 'cellula di sopravvivenza' }
    ]
  });
  A('f1-come-e-fatta-una-squadra', {
    title: { t: 'How a Formula 1 team is built', it: 'Come è fatta una squadra di Formula 1' },
    sum: [
      { t: 'A team is a technology company: a factory that designs and builds the cars, plus a few dozen people trackside.', it: 'Una squadra è un’azienda tecnologica: una fabbrica che progetta e costruisce le vetture, più una squadra di pista di alcune decine di persone.' },
      { t: 'In an example with 1000 people and 100 at the track, 10% travel and 90% work in the factory.', it: 'In un esempio con 1000 persone e 100 in pista, il 10% viaggia e il 90% lavora in fabbrica.' },
      { t: 'Aerodynamics uses ⟦CFD⟧ and a ⟦wind tunnel⟧ model at 60% scale and 50 m/s, limited by the ⟦ATR⟧.', it: 'L’aerodinamica usa CFD e un modello in galleria del vento in scala 60% a 50 m/s, limitati dall’ATR.' },
      { t: 'The ⟦technical director⟧ leads design, and ⟦listed parts⟧ must be designed in-house.', it: 'Il direttore tecnico guida la progettazione, e le listed parts devono essere progettate in proprio.' },
      { t: 'Production builds carbon-fibre parts cured in an ⟦autoclave⟧, and a new wing can go from idea to track in weeks.', it: 'La produzione costruisce parti in fibra di carbonio cotte in autoclave, e una nuova ala può passare dall’idea alla pista in poche settimane.' },
      { t: 'At the track the ⟦race engineer⟧, the strategist and the mechanics work together, and the team principal decides between options.', it: 'In pista l’ingegnere di pista, lo stratega e i meccanici lavorano insieme, e il team principal decide fra le opzioni.' },
      { t: 'A pit stop uses about 20 people, three mechanics per wheel, and the best stops last about 2 seconds.', it: 'Un pit stop impiega circa 20 persone, tre meccanici per ruota, e le soste migliori durano circa 2 secondi.' }
    ],
    gloss: [
      { w: 'CFD', it: 'simulazione del flusso al computer' },
      { w: 'wind tunnel', it: 'galleria del vento' },
      { w: 'ATR', it: 'restrizioni ai test aerodinamici' },
      { w: 'technical director', it: 'direttore tecnico' },
      { w: 'listed parts', it: 'parti che la squadra deve progettare in proprio' },
      { w: 'autoclave', it: 'forno a pressione per il carbonio' },
      { w: 'race engineer', it: 'ingegnere di pista' },
      { w: 'strategist', it: 'stratega, decide soste e gomme' },
      { w: 'pit crew', it: 'squadra di sosta' },
      { w: 'team principal', it: 'capo della squadra' }
    ]
  });
  A('f1-economia-e-budget-cap', {
    title: { t: 'The economics of Formula 1', it: 'L’economia della Formula 1' },
    sum: [
      { t: 'F1 money comes mainly from ⟦TV rights⟧, ⟦race promotion fees⟧, sponsorships and other income such as merchandising.', it: 'Il denaro della F1 arriva soprattutto da diritti TV, quote di organizzazione, sponsorizzazioni e altri ricavi come il merchandising.' },
      { t: 'The commercial rights holder, owned by ⟦Liberty Media⟧ since 2017, has revenues of a few billion dollars.', it: 'Il gestore dei diritti commerciali, controllato da Liberty Media dal 2017, ha ricavi dell’ordine di alcuni miliardi di dollari.' },
      { t: 'Teams receive part of the revenue: an equal ⟦base share⟧ plus a share tied to the constructors’ ranking.', it: 'Le squadre ricevono parte dei ricavi: una quota di base uguale per tutte più una quota legata alla classifica costruttori.' },
      { t: '⟦Sponsors⟧ pay for visibility and partnerships; in the example, 20 million of a 135 million cost is about 14.8%.', it: 'Gli sponsor pagano per visibilità e collaborazioni; nell’esempio, 20 milioni su un costo di 135 milioni sono circa il 14,8%.' },
      { t: 'The ⟦budget cap⟧ was 145 million dollars in 2021, 140 in 2022 and 135 in 2023, excluding driver salaries and marketing.', it: 'Il budget cap era di 145 milioni di dollari nel 2021, 140 nel 2022 e 135 nel 2023, con esclusi stipendi dei piloti e marketing.' },
      { t: 'Before the cap, top teams were estimated at 400 million or more, nearly three times the cap.', it: 'Prima del cap, i top team erano stimati a 400 milioni o più, quasi tre volte il tetto.' },
      { t: 'The cap turns development into an ⟦allocation⟧ problem: a 2 million wing worth 0.1 s per lap competes with other ideas.', it: 'Il cap trasforma lo sviluppo in un problema di allocazione: un’ala da 2 milioni che vale 0,1 s al giro compete con altre idee.' }
    ],
    gloss: [
      { w: 'TV rights', it: 'diritti televisivi' },
      { w: 'race promotion fees', it: 'quote di organizzazione pagate dai circuiti' },
      { w: 'Liberty Media', it: 'proprietaria dei diritti commerciali dal 2017' },
      { w: 'base share', it: 'quota di base uguale per tutte le squadre' },
      { w: 'sponsors', it: 'sponsor' },
      { w: 'budget cap', it: 'tetto di spesa' },
      { w: 'allocation', it: 'allocazione delle risorse' },
      { w: 'Formula One Group', it: 'gestore dei diritti commerciali' },
      { w: 'Concorde Agreement', it: 'accordo fra FIA, squadre e gestore' },
      { w: 'title sponsor', it: 'sponsor il cui nome compare nel nome della squadra' }
    ]
  });
  A('f1-fia-promotore-costruttori', {
    title: { t: 'FIA, promoter and constructors: who decides', it: 'FIA, promotore e costruttori: chi decide' },
    sum: [
      { t: 'Three actors balance F1: the ⟦FIA⟧ regulates, the rights holder sells and promotes, and the teams build and race.', it: 'Tre attori bilanciano la F1: la FIA regola, il gestore dei diritti vende e promuove, e le squadre costruiscono e corrono.' },
      { t: 'The FIA has the ⟦WMSC⟧ and the ⟦F1 Commission⟧, which discusses and votes on proposals; safety changes can be faster.', it: 'La FIA ha il WMSC e la Commissione F1, che discute e vota le proposte; le modifiche di sicurezza possono essere più rapide.' },
      { t: 'Ecclestone centralised TV rights in the ’70s, and the first ⟦Concorde Agreement⟧ came in 1981 after the FISA-FOCA clash.', it: 'Ecclestone centralizzò i diritti TV negli anni ’70, e il primo Concorde Agreement arrivò nel 1981 dopo lo scontro FISA-FOCA.' },
      { t: '⟦Liberty Media⟧ took over the commercial rights in 2017.', it: 'Liberty Media rilevò la gestione dei diritti commerciali nel 2017.' },
      { t: 'The Concorde Agreement is partly confidential and covers rights, duties, revenue sharing and governance.', it: 'Il Concorde Agreement è in parte riservato e riguarda diritti, doveri, distribuzione dei ricavi e governance.' },
      { t: 'A new team needs FIA approval and an ⟦anti-dilution fee⟧ of 200 million dollars, shared among existing teams.', it: 'Una nuova squadra richiede l’approvazione FIA e una tassa d’ingresso di 200 milioni di dollari, ripartita fra le squadre esistenti.' },
      { t: 'The 2026 power unit rules were approved in 2022, four years ahead, because teams need time to design and build.', it: 'Il regolamento power unit 2026 fu approvato nel 2022, quattro anni prima, perché le squadre hanno bisogno di tempo per progettare e costruire.' }
    ],
    gloss: [
      { w: 'FIA', it: 'ente regolatore' },
      { w: 'WMSC', it: 'World Motor Sport Council, approva i regolamenti' },
      { w: 'F1 Commission', it: 'forum che discute e vota le proposte' },
      { w: 'Concorde Agreement', it: 'contratto fra FIA, gestore e squadre' },
      { w: 'Liberty Media', it: 'gestore dei diritti commerciali dal 2017' },
      { w: 'anti-dilution fee', it: 'tassa d’ingresso per nuove squadre' },
      { w: 'GPDA', it: 'associazione dei piloti' },
      { w: 'conflict of interest', it: 'conflitto di interessi' },
      { w: 'engine supplier', it: 'fornitore di power unit' },
      { w: 'International Court of Appeal', it: 'Corte d’Appello Internazionale della FIA' }
    ]
  });
  A('f1-la-strada-verso-la-formula-1', {
    title: { t: 'The road to Formula 1', it: 'La strada verso la Formula 1' },
    sum: [
      { t: 'The common path is karting, Formula 4, Formula 3, Formula 2 and then Formula 1.', it: 'Il percorso più comune è karting, Formula 4, Formula 3, Formula 2 e poi Formula 1.' },
      { t: '⟦Karting⟧ starts at about 6–8 years old, and ⟦Formula 4⟧ is open from age 15.', it: 'Il karting inizia intorno ai 6–8 anni, e la Formula 4 è aperta dai 15 anni.' },
      { t: 'The feeder categories are mostly ⟦single-make⟧, so the driver is judged more than the car.', it: 'Le categorie di accesso sono quasi sempre monomarca, quindi si valuta il pilota più della macchina.' },
      { t: 'A ⟦super licence⟧ needs age 18, 40 points in three years, 100 km in a recent F1 car and an exam.', it: 'Una super licenza richiede 18 anni, 40 punti in tre anni, 100 km con una F1 recente e un esame.' },
      { t: 'Verstappen debuted at 17 years and 166 days, which led the FIA to impose the age-18 rule.', it: 'Verstappen esordì a 17 anni e 166 giorni, e questo spinse la FIA a imporre il limite di 18 anni.' },
      { t: 'Youth ⟦academies⟧ such as Red Bull Junior Team and Ferrari Driver Academy support drivers, with no guarantee of reaching F1.', it: 'Le accademie giovanili come il Red Bull Junior Team e la Ferrari Driver Academy sostengono i piloti, senza garanzia di arrivare in F1.' },
      { t: 'Costs are high, so a ⟦pay driver⟧ may bring sponsors, but results matter and seats number only about 20.', it: 'I costi sono alti, quindi un pay driver può portare sponsor, ma contano i risultati e i posti sono solo circa 20.' }
    ],
    gloss: [
      { w: 'Karting', it: 'kart, la prima tappa' },
      { w: 'Formula 4', it: 'prime monoposto, dai 15 anni' },
      { w: 'single-make', it: 'monomarca, stessa vettura per tutti' },
      { w: 'super licence', it: 'super licenza FIA' },
      { w: 'academies', it: 'accademie, programmi giovani delle squadre' },
      { w: 'pay driver', it: 'pilota che porta denaro alla squadra' },
      { w: 'Formula 2', it: 'ultimo gradino prima della F1' },
      { w: 'F1 Academy', it: 'campionato per giovani pilote dal 2023' },
      { w: 'simulator', it: 'simulatore' },
      { w: 'reserve driver', it: 'pilota di riserva' }
    ]
  });
  A('f1-carriere-dietro-le-quinte', {
    title: { t: 'Careers behind the scenes', it: 'Carriere dietro le quinte' },
    sum: [
      { t: 'Behind each driver are hundreds of people, and careers are not only technical.', it: 'Dietro ogni pilota ci sono centinaia di persone, e le carriere non sono solo tecniche.' },
      { t: 'Aerodynamic engineers use ⟦CFD⟧ and the wind tunnel, while mechanical engineers design chassis, suspension and transmission.', it: 'Gli ingegneri aerodinamici usano CFD e galleria del vento, mentre gli ingegneri meccanici progettano telaio, sospensioni e trasmissione.' },
      { t: 'Electronics, ⟦power unit⟧ and software engineers work on sensors, hybrid systems and energy management.', it: 'Gli ingegneri di elettronica, power unit e software lavorano su sensori, sistemi ibridi e gestione dell’energia.' },
      { t: '⟦Data analysts⟧ turn numbers into decisions with Python, SQL and statistics, and ⟦FastF1⟧ analyses public data.', it: 'Gli analisti di dati trasformano i numeri in decisioni con Python, SQL e statistica, e FastF1 analizza dati pubblici.' },
      { t: '⟦Operations⟧ and logistics move cars and equipment around the world, and mechanics train through technical schools.', it: 'Operazioni e logistica spostano auto e attrezzature in tutto il mondo, e i meccanici si formano negli istituti tecnici.' },
      { t: 'Media and business roles include journalism, marketing, finance and law, where ⟦soft skills⟧ are decisive.', it: 'I ruoli nei media e nel business comprendono giornalismo, marketing, finanza e diritto, dove le soft skills sono decisive.' },
      { t: 'A typical study plan is 180 + 120 = 300 credits of about 25 hours each, and ⟦Formula Student⟧ is valued.', it: 'Un piano di studi tipico è 180 + 120 = 300 crediti di circa 25 ore ciascuno, e la Formula Student è apprezzata.' }
    ],
    gloss: [
      { w: 'CFD', it: 'fluidodinamica computazionale' },
      { w: 'power unit', it: 'unità motrice ibrida' },
      { w: 'data analysts', it: 'analisti di dati' },
      { w: 'FastF1', it: 'libreria open source per dati pubblici delle gare' },
      { w: 'operations', it: 'operazioni' },
      { w: 'soft skills', it: 'competenze trasversali' },
      { w: 'Formula Student', it: 'competizione studentesca di monoposto' },
      { w: 'wind tunnel', it: 'galleria del vento' },
      { w: 'portfolio', it: 'raccolta di progetti concreti' },
      { w: 'CFU', it: 'credito formativo universitario, circa 25 ore' }
    ]
  });
  A('f1-come-sistema', {
    title: { t: 'F1 as a system: technology, environment, audience', it: 'La F1 come sistema: tecnologia, ambiente, pubblico' },
    sum: [
      { t: 'F1 is called a laboratory for road cars, but only partly: carbon fibre, paddle shift, hybrids and crash structures did transfer.', it: 'La F1 è detta laboratorio per l’auto stradale, ma solo in parte: fibra di carbonio, cambio a leve, ibridi e strutture d’urto sono stati trasferiti.' },
      { t: '⟦Technology transfer⟧ happens in three ways: technologies, methods and people.', it: 'Il trasferimento tecnologico avviene in tre modi: tecnologie, metodi e persone.' },
      { t: 'The ⟦thermal efficiency⟧ of the F1 engine exceeds 50%, against 30–40% for a road petrol engine.', it: 'L’efficienza termica del motore di F1 supera il 50%, contro il 30–40% di un motore stradale a benzina.' },
      { t: 'The 2018 ⟦carbon footprint⟧ was about 256 000 tonnes of CO₂ equivalent; logistics were about 45% and staff travel 28%.', it: 'L’impronta di carbonio del 2018 era circa 256 000 tonnellate di CO₂ equivalente; la logistica pesava circa il 45% e i viaggi del personale il 28%.' },
      { t: 'The power unit on track is below 1% of emissions, so ⟦logistics⟧ matter more than engines.', it: 'Il power unit in pista è sotto l’1% delle emissioni, quindi la logistica conta più dei motori.' },
      { t: 'F1 aims for ⟦net zero⟧ by 2030, with E10 since 2022 and ⟦sustainable fuels⟧ from 2026; this is a commitment.', it: 'La F1 punta a emissioni nette zero entro il 2030, con E10 dal 2022 e carburanti sostenibili dal 2026; è un impegno, non un risultato.' },
      { t: 'Thinking in systems means asking who gains, who pays, what side effects appear and what is measured.', it: 'Pensare per sistemi significa chiedersi chi guadagna, chi paga, che effetti collaterali ci sono e cosa si misura.' }
    ],
    gloss: [
      { w: 'technology transfer', it: 'trasferimento tecnologico' },
      { w: 'thermal efficiency', it: 'efficienza termica' },
      { w: 'carbon footprint', it: 'impronta di carbonio' },
      { w: 'logistics', it: 'logistica, trasporto di merci' },
      { w: 'net zero', it: 'emissioni nette zero' },
      { w: 'sustainable fuels', it: 'carburanti sostenibili' },
      { w: 'perimeter', it: 'perimetro del calcolo: quali attività sono incluse' },
      { w: 'Motorsport Valley', it: 'distretto industriale del motorsport in Inghilterra' },
      { w: 'Drive to Survive', it: 'serie documentaria Netflix dal 2019' },
      { w: 'E10', it: 'benzina con 10% di etanolo' }
    ]
  });
  A('f1-adv-termodinamica-power-unit', {
    title: { t: 'Power unit thermodynamics', it: 'Termodinamica della power unit' },
    sum: [
      { t: 'The air-standard ⟦Otto cycle⟧ has ideal efficiency η = 1 − r^(1−γ), depending only on the ⟦compression ratio⟧ and γ.', it: 'Il ciclo Otto ad aria standard ha rendimento ideale η = 1 − r^(1−γ), che dipende solo dal rapporto di compressione e da γ.' },
      { t: 'With r = 18 and γ = 1.4 the ideal efficiency is 68.5%, a maximum, not the real value.', it: 'Con r = 18 e γ = 1,4 il rendimento ideale è 68,5%, un massimo, non il valore reale.' },
      { t: 'At equal r the ideal Diesel is less efficient, 63.2% against 68.5%, but real diesels use higher r because they avoid ⟦knock⟧.', it: 'A pari r il Diesel ideale è meno efficiente, 63,2% contro 68,5%, ma i Diesel reali usano r più alti perché evitano la detonazione.' },
      { t: 'Real efficiency multiplies the ideal value by combustion and mechanical losses; manufacturers claim above 50%.', it: 'Il rendimento reale moltiplica il valore ideale per le perdite di combustione e meccaniche; i costruttori dichiarano oltre il 50%.' },
      { t: 'Power is P = ṁ·⟦LHV⟧·η: 100 kg/h of 43 MJ/kg fuel at 50% gives about 597 kW.', it: 'La potenza è P = ṁ·LHV·η: 100 kg/h di carburante da 43 MJ/kg al 50% dà circa 597 kW.' },
      { t: 'A ⟦lean mixture⟧ (λ > 1) lowers wall losses but needs more air: λ = 1.4 needs 40% more.', it: 'Una miscela magra (λ > 1) riduce le perdite alle pareti ma richiede più aria: λ = 1,4 ne richiede il 40% in più di λ = 1,0.' },
      { t: 'A ⟦pre-chamber⟧ ignites the lean mixture at many points at once, so combustion is faster and more stable.', it: 'Una pre-camera accende la miscela magra in molti punti insieme, quindi la combustione è più veloce e stabile.' }
    ],
    gloss: [
      { w: 'Otto cycle', it: 'ciclo Otto, a volume costante' },
      { w: 'compression ratio', it: 'rapporto di compressione' },
      { w: 'knock', it: 'detonazione, autoaccensione della miscela' },
      { w: 'LHV', it: 'potere calorifico inferiore' },
      { w: 'lean mixture', it: 'miscela magra, con più aria' },
      { w: 'pre-chamber', it: 'pre-camera di accensione' },
      { w: 'bsfc', it: 'consumo specifico al freno' },
      { w: 'stoichiometric', it: 'stechiometrico, rapporto aria/combustibile ideale' },
      { w: 'air-standard cycle', it: 'ciclo ad aria standard' },
      { w: 'thermal efficiency', it: 'rendimento termico' }
    ]
  });
  A('f1-adv-power-unit-2026', {
    title: { t: 'The 2026 power unit: energy balance', it: 'Power unit dal 2026: bilancio energetico' },
    sum: [
      { t: 'From 2026 the engine stays a 1.6-litre V6 turbo hybrid, but the electric part grows and the ⟦MGU-H⟧ is removed.', it: 'Dal 2026 il motore resta un V6 turbo ibrido da 1,6 litri, ma la parte elettrica cresce e la MGU-H viene eliminata.' },
      { t: 'The ⟦MGU-K⟧ rises from 120 kW to about 350 kW, so the electric share approaches half of peak power.', it: 'La MGU-K sale da 120 kW a circa 350 kW, quindi la quota elettrica si avvicina alla metà della potenza di picco.' },
      { t: 'Fuel is limited by ⟦energy flow⟧ in MJ/h, and it must be ⟦sustainable fuel⟧.', it: 'Il carburante è limitato dal flusso di energia in MJ/h, e deve essere sostenibile.' },
      { t: 'In an illustrative example, 400 kW from the engine plus 350 kW from the MGU-K gives 750 kW, 46.7% electric.', it: 'In un esempio illustrativo, 400 kW dal motore più 350 kW dalla MGU-K danno 750 kW, di cui il 46,7% elettrico.' },
      { t: 'Without the MGU-H, braking recovery is limited by MGU-K power: one heavy braking recovers only 22% of 2.4 MJ.', it: 'Senza MGU-H il recupero in frenata è limitato dalla potenza della MGU-K: una frenata forte recupera solo il 22% di 2,4 MJ.' },
      { t: 'Energy must be handled with three limits: maximum ⟦deployment⟧ power, energy per lap and the battery charge window.', it: 'L’energia va gestita con tre limiti: potenza massima di deployment, energia per giro e finestra di carica della batteria.' },
      { t: 'On long straights ⟦clipping⟧ can occur, when an energy or power limit reduces acceleration before the straight ends.', it: 'Sui rettilinei lunghi può verificarsi il clipping, quando un limite di energia o potenza riduce l’accelerazione prima della fine del rettilineo.' }
    ],
    gloss: [
      { w: 'MGU-H', it: 'motore-generatore del turbo, eliminato dal 2026' },
      { w: 'MGU-K', it: 'motore-generatore cinetico' },
      { w: 'energy flow', it: 'flusso di energia del combustibile (MJ/h)' },
      { w: 'sustainable fuel', it: 'carburante sostenibile' },
      { w: 'deployment', it: 'uso dell’energia elettrica' },
      { w: 'clipping', it: 'calo della potenza elettrica prima della fine del rettilineo' },
      { w: 'electric share', it: 'quota elettrica della potenza' },
      { w: 'turbo lag', it: 'ritardo del turbo' },
      { w: 'certainty level', it: 'livello di certezza: alto, medio, illustrativo' },
      { w: 'battery charge window', it: 'finestra di carica della batteria' }
    ]
  });
  A('f1-adv-gestione-energia-ottimale', {
    title: { t: 'Optimal energy management (ERS)', it: 'Gestione ottimale dell’energia (ERS)' },
    sum: [
      { t: 'The problem is to spend limited battery energy where it gains most, ending the lap with at least the starting charge.', it: 'Il problema è spendere l’energia limitata della batteria dove rende di più, finendo il giro con almeno la carica di partenza.' },
      { t: 'It is an ⟦optimal control⟧ problem: the charge is the state and electrical power is the control.', it: 'È un problema di controllo ottimo: la carica è lo stato e la potenza elettrica è il controllo.' },
      { t: 'At the optimum the ⟦marginal gain⟧ in seconds per MJ is equal everywhere; its value λ is the ⟦shadow price⟧.', it: 'All’ottimo il guadagno marginale in secondi per MJ è uguale ovunque si spende energia; il valore comune λ è il prezzo ombra.' },
      { t: 'The optimum is flat: in the example, 2.29 and 1.71 MJ gain 0.4229 s against 0.42 s for an equal split.', it: 'L’ottimo è piatto: nell’esempio, 2,29 e 1,71 MJ guadagnano 0,4229 s contro 0,42 s con una ripartizione uguale.' },
      { t: '⟦Dynamic programming⟧ solves it backwards with the principle of optimality; the discrete example gains 0.29 s.', it: 'La programmazione dinamica lo risolve a ritroso con il principio di ottimalità; l’esempio discreto guadagna 0,29 s.' },
      { t: 'Recovery sources (braking, ⟦lift and coast⟧, engine charging, ⟦super-clipping⟧) are compared by seconds lost per MJ.', it: 'Le fonti di recupero (frenata, lift and coast, carica con il motore, super-clipping) si confrontano con i secondi persi per MJ.' },
      { t: 'The ⟦curse of dimensionality⟧ explodes the number of states when speed, tyre temperature and fuel are included.', it: 'La maledizione della dimensionalità fa esplodere il numero di stati quando si includono velocità, temperatura delle gomme e carburante.' }
    ],
    gloss: [
      { w: 'optimal control', it: 'controllo ottimo' },
      { w: 'marginal gain', it: 'guadagno marginale, secondi per MJ' },
      { w: 'shadow price', it: 'prezzo ombra (λ)' },
      { w: 'dynamic programming', it: 'programmazione dinamica di Bellman' },
      { w: 'lift and coast', it: 'sollevare il piede prima della frenata' },
      { w: 'super-clipping', it: 'carica con il motore a fine rettilineo' },
      { w: 'curse of dimensionality', it: 'maledizione della dimensionalità' },
      { w: 'cyclic constraint', it: 'vincolo ciclico: carica finale uguale o maggiore' },
      { w: 'state of charge', it: 'stato di carica della batteria' },
      { w: 'principle of optimality', it: 'principio di ottimalità di Bellman' }
    ]
  });
  A('f1-adv-aerodinamica-avanzata', {
    title: { t: 'Advanced aerodynamics: CFD, vortices, stall', it: 'Aerodinamica avanzata: CFD, vortici, stallo' },
    sum: [
      { t: 'Air obeys Navier–Stokes equations, solved with ⟦CFD⟧; the ⟦Reynolds number⟧ is 1.6·10⁶ for a wing, so flow is turbulent.', it: 'L’aria obbedisce alle equazioni di Navier–Stokes, risolte con la CFD; il numero di Reynolds è 1,6·10⁶ per un’ala, quindi il flusso è turbolento.' },
      { t: 'Turbulence models trade cost for fidelity: DNS is impractical, ⟦RANS⟧ is the cheap standard, and LES is more accurate in wakes.', it: 'I modelli di turbolenza scambiano costo e fedeltà: la DNS è impraticabile, la RANS è lo standard economico, e la LES è più accurata nelle scie.' },
      { t: 'The ⟦pressure coefficient⟧ Cp = 1 − (v/V)² is negative where air accelerates: 120 m/s against 80 m/s gives −1.25.', it: 'Il coefficiente di pressione Cp = 1 − (v/V)² è negativo dove l’aria accelera: 120 m/s contro 80 m/s dà −1,25.' },
      { t: 'Forces grow with V² but drag power with V³, so cutting CdA by 30% raises top speed by about 12.6%.', it: 'Le forze crescono con V² ma la potenza di resistenza con V³, quindi ridurre CdA del 30% aumenta la velocità massima di circa il 12,6%.' },
      { t: 'In a ⟦venturi⟧ floor model, a throat ratio from 1.25 to 1.6 deepens Cp from −0.5625 to −1.56.', it: 'In un modello di fondo venturi, un rapporto di gola da 1,25 a 1,6 approfondisce Cp da −0,5625 a −1,56.' },
      { t: '⟦Vortices⟧ at floor edges seal the floor and manage wheel wakes, but they are sensitive and can burst.', it: 'I vortici ai bordi del fondo sigillano il fondo e gestiscono la scia delle ruote, ma sono sensibili e possono scoppiare.' },
      { t: 'Flow separation causes ⟦stall⟧, so engineers keep a margin away from the peak, giving up some downforce for stability.', it: 'La separazione del flusso causa lo stallo, quindi gli ingegneri tengono un margine dal picco, rinunciando a un po’ di carico per la stabilità.' }
    ],
    gloss: [
      { w: 'CFD', it: 'fluidodinamica computazionale' },
      { w: 'Reynolds number', it: 'numero di Reynolds, regola la turbolenza' },
      { w: 'RANS', it: 'Reynolds-Averaged Navier–Stokes, standard industriale' },
      { w: 'pressure coefficient', it: 'coefficiente di pressione Cp' },
      { w: 'venturi', it: 'effetto venturi: l’aria accelera nella gola' },
      { w: 'vortices', it: 'vortici, masse d’aria in rotazione' },
      { w: 'stall', it: 'stallo, separazione dello strato limite' },
      { w: 'adjoint method', it: 'metodo aggiunto: gradienti con circa 2 soluzioni' },
      { w: 'boundary layer', it: 'strato limite' },
      { w: 'active aerodynamics', it: 'aerodinamica attiva del 2026' }
    ]
  });
  A('f1-adv-modelli-pneumatico', {
    title: { t: 'Tyre models: Magic Formula and thermal', it: 'Modelli di pneumatico: Magic Formula e termica' },
    sum: [
      { t: 'Tyre forces come from small slip: the ⟦slip ratio⟧ longitudinally and the ⟦slip angle⟧ laterally, a few percent and a few degrees.', it: 'Le forze della gomma nascono da piccoli scorrimenti: lo slip ratio in senso longitudinale e l’angolo di deriva in senso laterale, pochi punti percentuali e pochi gradi.' },
      { t: 'The ⟦Magic Formula⟧ is an empirical curve with four parameters, B, C, D and E.', it: 'La Magic Formula è una curva empirica con quattro parametri, B, C, D ed E.' },
      { t: 'D is the peak, μ·Fz, and the cornering stiffness is Cα = B·C·D, the slope at the origin.', it: 'D è il picco, μ·Fz, e la rigidezza di derapata è Cα = B·C·D, la pendenza all’origine.' },
      { t: 'In the example the force peaks at 8000 N near 8°, then falls slowly; the linear model already overestimates at 3°.', it: 'Nell’esempio la forza raggiunge il picco di 8000 N vicino a 8°, poi scende lentamente; il modello lineare sovrastima già a 3°.' },
      { t: '⟦Load sensitivity⟧ means μ falls as load rises: doubling the load from 2000 to 4000 N raises maximum force only 82%.', it: 'La sensibilità al carico significa che μ cala all’aumentare del carico: raddoppiare il carico da 2000 a 4000 N aumenta la forza massima solo dell’82%.' },
      { t: 'The ⟦friction ellipse⟧ shares grip: using 80% of the braking force leaves only 60% lateral, which explains trail braking.', it: 'L’ellisse di aderenza ripartisce l’aderenza: usare l’80% della forza in frenata lascia solo il 60% laterale, il che spiega il trail braking.' },
      { t: 'A one-node ⟦thermal model⟧ gives a 40 s time constant and a 90 °C equilibrium in the example, but it is crude.', it: 'Un modello termico a un nodo dà una costante di tempo di 40 s e un equilibrio di 90 °C nell’esempio, ma è grossolano.' }
    ],
    gloss: [
      { w: 'slip ratio', it: 'scorrimento longitudinale κ' },
      { w: 'slip angle', it: 'angolo di deriva α' },
      { w: 'Magic Formula', it: 'formula empirica di Pacejka' },
      { w: 'load sensitivity', it: 'sensibilità al carico' },
      { w: 'friction ellipse', it: 'ellisse di aderenza' },
      { w: 'thermal model', it: 'modello termico del pneumatico' },
      { w: 'cornering stiffness', it: 'rigidezza di derapata' },
      { w: 'time constant', it: 'costante di tempo τ' },
      { w: 'trail braking', it: 'frenata a rimanere' },
      { w: 'thermal window', it: 'finestra termica' }
    ]
  });
  A('f1-adv-dinamica-veicolo', {
    title: { t: 'Advanced vehicle dynamics', it: 'Dinamica del veicolo avanzata' },
    sum: [
      { t: 'Longitudinal motion follows m·dv/dt = Fx − drag, with power as the limit at high speed and grip at low speed.', it: 'Il moto longitudinale segue m·dv/dt = Fx − resistenza, con la potenza come limite ad alta velocità e l’aderenza a bassa velocità.' },
      { t: 'In the example, 750 kW at 70 m/s gives 8.98 m/s², and the theoretical top speed is about 365 km/h.', it: 'Nell’esempio, 750 kW a 70 m/s danno 8,98 m/s², e la velocità massima teorica è circa 365 km/h.' },
      { t: 'The ⟦bicycle model⟧ reduces the car to two wheels with two degrees of freedom: lateral and yaw velocity.', it: 'Il modello a bicicletta riduce la vettura a due ruote con due gradi di libertà: velocità laterale e di imbardata.' },
      { t: 'The ⟦understeer gradient⟧ K = Wf/Cf − Wr/Cr is positive for understeer; the example gives 0.41°/g.', it: 'Il gradiente di sottosterzo K = Wf/Cf − Wr/Cr è positivo per il sottosterzo; l’esempio dà 0,41°/g.' },
      { t: 'At the ⟦characteristic speed⟧ the required steering is double the kinematic one: 70.4 m/s in the example.', it: 'Alla velocità caratteristica lo sterzo necessario è il doppio di quello cinematico: 70,4 m/s nell’esempio.' },
      { t: 'Lateral ⟦load transfer⟧ is ΔFz = m·ay·h/t, which is 2649 N at 2 g in the example.', it: 'Il trasferimento di carico laterale è ΔFz = m·ay·h/t, cioè 2649 N a 2 g nell’esempio.' },
      { t: 'With ⟦load sensitivity⟧, more transfer on an axis means less grip there, so a stiffer front ⟦roll stiffness⟧ gives more understeer.', it: 'Con la sensibilità al carico, più trasferimento su un asse significa meno aderenza su quell’asse, quindi una rigidezza al rollio anteriore maggiore dà più sottosterzo.' }
    ],
    gloss: [
      { w: 'bicycle model', it: 'modello a bicicletta, due ruote su un piano' },
      { w: 'understeer gradient', it: 'gradiente di sottosterzo K' },
      { w: 'characteristic speed', it: 'velocità caratteristica del sottosterzo' },
      { w: 'load transfer', it: 'trasferimento di carico' },
      { w: 'load sensitivity', it: 'sensibilità al carico' },
      { w: 'roll stiffness', it: 'rigidezza al rollio' },
      { w: 'critical speed', it: 'velocità critica per il sovrasterzo' },
      { w: 'yaw', it: 'imbardata' },
      { w: 'oversteer', it: 'sovrasterzo' },
      { w: 'degrees of freedom', it: 'gradi di libertà' }
    ]
  });
  A('f1-adv-tempo-sul-giro', {
    title: { t: 'Lap time simulation and optimisation', it: 'Simulazione e ottimizzazione del tempo sul giro' },
    sum: [
      { t: 'The minimum-time problem seeks the ⟦racing line⟧ and speed profile that minimise T = ∫ds/v, so slow zones weigh more.', it: 'Il problema del tempo minimo cerca la traiettoria e il profilo di velocità che minimizzano T = ∫ds/v, quindi le zone lente pesano di più.' },
      { t: 'Without aerodynamics the corner limit is v = √(μ·g·R): μ = 2.0 and R = 80 m give 39.6 m/s (142.6 km/h).', it: 'Senza aerodinamica il limite in curva è v = √(μ·g·R): μ = 2,0 e R = 80 m danno 39,6 m/s, cioè 142,6 km/h.' },
      { t: 'With downforce the same corner is taken at 52.0 m/s; above a ⟦critical radius⟧ of 190.5 m, grip stops limiting speed.', it: 'Con il carico la stessa curva si percorre a 52,0 m/s, e oltre un raggio critico di 190,5 m l’aderenza non limita più la velocità.' },
      { t: 'The ⟦friction circle⟧ shares grip: at 1.5 g lateral with a 2 g maximum, 1.32 g remains for acceleration or braking.', it: 'Il cerchio di aderenza ripartisce l’aderenza: a 1,5 g laterali con massimo 2 g, restano 1,32 g per accelerare o frenare.' },
      { t: 'The ⟦forward-backward algorithm⟧ takes the minimum of the corner limit, a braking pass backwards and an acceleration pass forwards.', it: 'L’algoritmo avanti-indietro prende il minimo tra il limite di curva, una passata all’indietro in frenata e una in avanti in accelerazione.' },
      { t: 'In the stadium example the lap takes 25.10 s, and 5% more grip saves 0.44 s, far more than braking changes.', it: 'Nell’esempio del circuito a stadio il giro dura 25,10 s, e il 5% di aderenza in più fa risparmiare 0,44 s, molto più delle modifiche alla frenata.' },
      { t: '⟦QSS⟧ is fast for comparing set-ups, while the ⟦transient optimum⟧ is more faithful but costly.', it: 'Il QSS è rapido per confrontare gli assetti, mentre l’ottimo transitorio è più fedele ma costoso.' }
    ],
    gloss: [
      { w: 'racing line', it: 'traiettoria' },
      { w: 'critical radius', it: 'raggio critico, oltre il quale l’aderenza non limita' },
      { w: 'friction circle', it: 'cerchio di aderenza' },
      { w: 'forward-backward algorithm', it: 'algoritmo avanti-indietro per il profilo di velocità' },
      { w: 'QSS', it: 'quasi-stazionario, equilibrio in ogni punto' },
      { w: 'transient optimum', it: 'ottimo transitorio con dinamica completa' },
      { w: 'sensitivity', it: 'sensibilità, effetto di un parametro sul tempo' },
      { w: 'late apex', it: 'apice tardivo, favorisce l’uscita' },
      { w: 'direct collocation', it: 'collocazione diretta, discretizzazione del problema' },
      { w: 'relative comparison', it: 'confronto relativo con gli stessi parametri' }
    ]
  });
  A('f1-adv-affidabilita-e-dati', {
    title: { t: 'Reliability, risk and data analysis', it: 'Affidabilità, rischio e analisi dei dati' },
    sum: [
      { t: 'Reliability R(t) is the survival probability, and key components have limited life and a maximum number of units per season.', it: 'L’affidabilità R(t) è la probabilità di sopravvivenza, e i componenti principali hanno vita limitata e un numero massimo di elementi per stagione.' },
      { t: 'The ⟦Weibull⟧ model R(t) = exp(−(t/η)^β) has scale η, where R = 36.8%, and shape β, where β > 1 means wear.', it: 'Il modello di Weibull R(t) = exp(−(t/η)^β) ha scala η, dove R = 36,8%, e forma β, dove β > 1 indica usura.' },
      { t: 'Telemetry statistics use confidence intervals and ⟦z-scores⟧; ±3σ control charts give 0.27% false alarms per sample.', it: 'La statistica sulla telemetria usa intervalli di confidenza e punteggi z; le carte di controllo a ±3σ danno lo 0,27% di falsi allarmi per campione.' },
      { t: 'The ⟦MTBF⟧ is not guaranteed life: with β = 3 only 49% of parts reach the mean life.', it: 'L’MTBF non è la vita garantita: con β = 3 solo il 49% dei componenti arriva alla vita media.' },
      { t: '⟦B10⟧ life is the time by which 10% fail: 1889 km in the example, which can set the replacement threshold.', it: 'La vita B10 è il tempo entro cui si guasta il 10%: 1889 km nell’esempio, che può fissare la soglia di sostituzione.' },
      { t: '⟦Conditional reliability⟧ shows wear: a part at 3000 km has 56% chance of lasting 1000 km more; a new one, 98%.', it: 'L’affidabilità condizionata mostra l’usura: un pezzo a 3000 km ha il 56% di probabilità di durare altri 1000 km, contro il 98% di uno nuovo.' },
      { t: 'In a ⟦Markov⟧ decision model the best choice depends on the horizon: continue with few races left, replace with many.', it: 'In un modello decisionale di Markov la scelta migliore dipende dall’orizzonte: con poche gare residue si continua, con molte conviene sostituire.' }
    ],
    gloss: [
      { w: 'Weibull', it: 'distribuzione di Weibull per la vita dei componenti' },
      { w: 'z-scores', it: 'punteggi z: scarto in unità di deviazione standard' },
      { w: 'MTBF', it: 'tempo medio fra guasti' },
      { w: 'B10', it: 'tempo entro cui si guasta il 10% dei componenti' },
      { w: 'conditional reliability', it: 'affidabilità condizionata' },
      { w: 'Markov', it: 'catena di Markov: stati Sano, Degradato, Guasto' },
      { w: 'series system', it: 'sistema in serie' },
      { w: 'control chart', it: 'carta di controllo' },
      { w: 'censored data', it: 'dati censurati, componenti non guastati' },
      { w: 'bathtub curve', it: 'curva a vasca da bagno' }
    ]
  });
})(window.ST = window.ST || {});
