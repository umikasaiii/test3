(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A('moto-tipi-di-moto', {
    title: { t: 'Motorcycle types and who they suit', it: 'I tipi di moto e a chi servono' },
    sum: [
      { t: 'No bike is the best: every motorcycle is a compromise, so choose by the use you will really make of it.', it: 'Non esiste la moto migliore: ogni moto è un compromesso, quindi si sceglie in base all’uso che se ne farà davvero.' },
      { t: 'A ⟦naked⟧ bike has no fairing and an upright posture, while a ⟦sportbike⟧ has clip-on bars and is built for the track.', it: 'La naked non ha la carena e ha il busto eretto; la sportiva ha i semimanubri ed è progettata per la pista.' },
      { t: 'A ⟦touring⟧ bike and an ⟦adventure⟧ bike are made for long journeys, but their weight and height are demanding for a beginner.', it: 'La touring e la adventure sono fatte per viaggiare a lungo, ma peso e altezza sono impegnativi per un principiante.' },
      { t: 'A ⟦cruiser⟧ has a very low seat, and a ⟦scooter⟧ has an automatic gearbox, with no clutch lever and no gear pedal.', it: 'La custom ha la sella molto bassa; lo scooter ha il cambio automatico, senza leva della frizione né pedale del cambio.' },
      { t: 'Cross, enduro and ⟦supermotard⟧ bikes are light, with long suspension; a cross bike is not approved for the road.', it: 'Cross, enduro e supermotard sono leggere, con sospensioni lunghe; la cross non è omologata per la strada.' },
      { t: 'The ⟦power-to-weight ratio⟧ is power in kW divided by mass in kg; the higher it is, the livelier the bike.', it: 'Il rapporto potenza/peso è la potenza in kW divisa per la massa in kg; più è alto, più la moto è vivace.' },
      { t: 'A beginner needs a light bike with gentle power and a seat at the right height: the first bike is for learning.', it: 'Chi comincia ha bisogno di una moto leggera, con potenza dolce e sella alla giusta altezza, perché la prima moto serve per imparare.' }
    ],
    gloss: [
      { w: 'naked', it: 'moto senza carena, busto eretto' },
      { w: 'sportbike', it: 'moto sportiva da pista' },
      { w: 'touring', it: 'moto da viaggio' },
      { w: 'adventure', it: 'maxi-enduro per asfalto e sterrato' },
      { w: 'cruiser', it: 'custom, sella bassa e gambe avanti' },
      { w: 'scooter', it: 'cambio automatico, pedana piatta' },
      { w: 'supermotard', it: 'enduro con ruote da 17 pollici e gomme stradali' },
      { w: 'power-to-weight ratio', it: 'rapporto potenza/peso (kW/kg)' },
      { w: 'fairing', it: 'carena' },
      { w: 'displacement', it: 'cilindrata' }
    ]
  });

  A('moto-anatomia-e-comandi', {
    title: { t: 'Motorcycle anatomy: parts, controls and warning lights', it: 'Anatomia della moto: parti, comandi e spie' },
    sum: [
      { t: 'The main parts are the frame, the fork in front, the ⟦swingarm⟧ behind, the engine, the brakes and the wheels.', it: 'Le parti principali sono telaio, forcella davanti, forcellone dietro, motore, freni e ruote.' },
      { t: 'On the right handlebar are the ⟦throttle⟧, the front brake lever, the ⟦kill switch⟧ and the start button.', it: 'Sul manubrio destro ci sono il gas, la leva del freno anteriore, l’interruttore di arresto motore e il pulsante di avviamento.' },
      { t: 'On the left are the ⟦clutch⟧ lever, the light controls and the mirrors; the left foot shifts, the right foot brakes.', it: 'A sinistra ci sono la leva della frizione, i comandi delle luci e gli specchietti; il piede sinistro cambia marcia e il destro frena.' },
      { t: 'The shift pattern puts first gear down, then ⟦neutral⟧, then second to sixth going up.', it: 'Lo schema del cambio mette la prima in giù, poi la folle, poi dalla seconda alla sesta verso l’alto.' },
      { t: 'The side ⟦stand⟧ must always be raised before you set off, because it can touch the ground in a bend.', it: 'Il cavalletto laterale va sempre alzato prima di partire, perché può toccare terra in curva.' },
      { t: 'The ⟦rev counter⟧ shows revs; ⟦warning lights⟧ are red for serious faults, yellow for anomalies, green for information, blue for high beam.', it: 'Il contagiri mostra i giri del motore e le spie sono rosse per guasti seri, gialle per anomalie, verdi per informazioni e blu per gli abbaglianti.' },
      { t: 'If the ABS light stays on, the ABS is not working: brake more carefully and go to a workshop.', it: 'Se la spia ABS resta accesa, l’ABS non funziona: si frena con più cautela e si va in officina.' }
    ],
    gloss: [
      { w: 'swingarm', it: 'forcellone' },
      { w: 'throttle', it: 'manopola del gas' },
      { w: 'kill switch', it: 'interruttore di arresto motore' },
      { w: 'clutch', it: 'frizione' },
      { w: 'neutral', it: 'folle' },
      { w: 'stand', it: 'cavalletto' },
      { w: 'rev counter', it: 'contagiri' },
      { w: 'warning lights', it: 'spie del cruscotto' },
      { w: 'fork', it: 'forcella' },
      { w: 'brake pads', it: 'pastiglie dei freni' }
    ]
  });

  A('moto-equipaggiamento-e-sicurezza-passiva', {
    title: { t: 'Gear and passive safety', it: 'Equipaggiamento e sicurezza passiva' },
    sum: [
      { t: '⟦Active safety⟧ avoids the crash, while ⟦passive safety⟧ reduces the damage when a crash happens; you need both.', it: 'La sicurezza attiva evita l’incidente, quella passiva riduce i danni quando avviene; servono entrambe.' },
      { t: 'The ⟦helmet⟧ is compulsory and must be fastened and approved, and today the reference standard is ECE 22.06.', it: 'Il casco è obbligatorio, allacciato e omologato, e oggi la norma di riferimento è la ECE 22.06.' },
      { t: 'A helmet of the wrong size protects badly, and after a fall or impact it must be replaced, even without visible damage.', it: 'Un casco di taglia sbagliata protegge male e dopo una caduta o un urto va sostituito, anche senza danni visibili.' },
      { t: 'Technical clothing is graded by EN 17092 for ⟦abrasion⟧ resistance; ordinary jeans tear within a few metres.', it: 'L’abbigliamento tecnico è classificato dalla norma EN 17092 e la resistenza all’abrasione è la proprietà chiave; i jeans normali si squarciano in pochi metri.' },
      { t: 'Gloves, tall boots and a ⟦back protector⟧ protect the hands, the ankles and the spine.', it: 'Guanti, stivali alti e paraschiena proteggono mani, caviglie e colonna vertebrale.' },
      { t: 'An ⟦airbag⟧ vest inflates when a fall is detected, but it does not replace the helmet or the other protection.', it: 'Il gilet airbag si gonfia quando rileva una caduta, ma non sostituisce il casco né le altre protezioni.' },
      { t: 'For ⟦visibility⟧ use fluorescent colours and reflective strips, and never assume that other drivers have seen you.', it: 'Per la visibilità usa colori fluorescenti e inserti catarifrangenti, e non dare mai per scontato di essere stato visto.' }
    ],
    gloss: [
      { w: 'active safety', it: 'sicurezza attiva, evita l’incidente' },
      { w: 'passive safety', it: 'sicurezza passiva, riduce i danni' },
      { w: 'helmet', it: 'casco' },
      { w: 'abrasion', it: 'abrasione, sfregamento sul terreno' },
      { w: 'back protector', it: 'paraschiena' },
      { w: 'airbag', it: 'airbag per motociclisti' },
      { w: 'visibility', it: 'visibilità' },
      { w: 'full-face', it: 'casco integrale' },
      { w: 'gloves', it: 'guanti' },
      { w: 'boots', it: 'stivali' }
    ]
  });

  A('moto-patenti-codice-e-documenti', {
    title: { t: 'Licences, traffic code and documents in Italy', it: 'Patenti, codice e documenti in Italia' },
    sum: [
      { t: 'This lesson is a teaching summary: rules and penalties change, so always check the official sources or a driving school.', it: 'Questa lezione è una sintesi didattica: regole e sanzioni cambiano, quindi verifica sempre le fonti ufficiali o un’autoscuola.' },
      { t: '⟦Licence⟧ categories: AM from 14, A1 from 16, A2 from 18, A from 24 (20 with two years of A2).', it: 'Le categorie della patente per due ruote sono AM a 14 anni, A1 a 16, A2 a 18 e A a 24, o 20 con 2 anni di A2.' },
      { t: 'A1 allows up to 125 cm³ and 11 kW; A2 allows up to 35 kW, with a ⟦power-to-weight limit⟧ of 0.2 kW/kg.', it: 'La A1 consente fino a 125 cm³ e 11 kW, la A2 fino a 35 kW con un limite di rapporto potenza/peso di 0,2 kW/kg.' },
      { t: 'You must carry your licence and the ⟦registration document⟧, and ⟦liability insurance⟧ is compulsory.', it: 'Devi avere con te la patente e la carta di circolazione, e l’assicurazione RC è obbligatoria.' },
      { t: 'Insurance covers damage caused to others, not damage to your own vehicle or to you.', it: 'L’assicurazione copre i danni causati agli altri, non quelli al tuo mezzo o a te.' },
      { t: 'The ⟦alcohol limit⟧ is 0.5 g/l, but zero for new licence holders in their first 3 years and for under 21s.', it: 'Il limite di alcol è 0,5 g/l in generale, ma zero per i neopatentati nei primi 3 anni e per gli under 21.' },
      { t: 'The ⟦points licence⟧ starts with 20 points, and the speed limit is a maximum, not a target.', it: 'La patente a punti parte con 20 punti e il limite di velocità è un massimo, non un obiettivo.' }
    ],
    gloss: [
      { w: 'licence', it: 'patente' },
      { w: 'power-to-weight limit', it: 'limite del rapporto potenza/peso' },
      { w: 'registration document', it: 'carta di circolazione (libretto)' },
      { w: 'liability insurance', it: 'assicurazione RC' },
      { w: 'alcohol limit', it: 'limite alcolemico' },
      { w: 'points licence', it: 'patente a punti' },
      { w: 'new licence holders', it: 'neopatentati' },
      { w: 'penalties', it: 'sanzioni' },
      { w: 'driving school', it: 'autoscuola' },
      { w: 'road tax', it: 'bollo' }
    ]
  });

  A('moto-controlli-prima-di-partire', {
    title: { t: 'Checks before riding', it: 'Controlli prima di partire' },
    sum: [
      { t: 'A check of two minutes before leaving removes many avoidable risks, so always follow the same order around the bike.', it: 'Un controllo di due minuti prima di partire elimina molti rischi evitabili, quindi segui sempre lo stesso ordine attorno alla moto.' },
      { t: 'Check ⟦tyre pressure⟧ when the tyres are cold, then the ⟦tread⟧ (the legal limit is about 1.6 mm), cuts and age.', it: 'Controlla la pressione a freddo, poi il battistrada (il limite legale è circa 1,6 mm), i tagli e l’età.' },
      { t: 'The age of a tyre is read from the ⟦DOT code⟧, which gives the week and the year of production.', it: 'L’età di una gomma si legge dal codice DOT, che indica settimana e anno di produzione.' },
      { t: 'Brake lever and pedal must not feel ⟦spongy⟧, and the ⟦brake fluid⟧ level must stay between MIN and MAX.', it: 'Leva e pedale del freno non devono essere spugnosi e il livello del liquido freni deve stare tra MIN e MAX.' },
      { t: 'Check the lights, including the brake light from both lever and pedal, then the horn and the mirrors.', it: 'Controlla le luci, compreso lo stop sia con la leva sia con il pedale, poi il clacson e gli specchietti.' },
      { t: 'Check the oil level and, when the engine is cold, the coolant in the ⟦expansion tank⟧; look under the bike for ⟦leaks⟧.', it: 'Controlla il livello dell’olio e, a motore freddo, il liquido di raffreddamento nel vaso di espansione; guarda sotto la moto per le perdite.' },
      { t: 'The ⟦chain⟧ needs the right ⟦slack⟧ and lubrication with the engine off; if something is wrong, you do not ride.', it: 'La catena richiede il giusto gioco e la lubrificazione a motore spento; se qualcosa non va, non si parte.' }
    ],
    gloss: [
      { w: 'tyre pressure', it: 'pressione dei pneumatici' },
      { w: 'tread', it: 'battistrada' },
      { w: 'DOT code', it: 'codice DOT con settimana e anno di produzione' },
      { w: 'spongy', it: 'spugnoso (aria nell’impianto)' },
      { w: 'brake fluid', it: 'liquido freni' },
      { w: 'expansion tank', it: 'vaso di espansione' },
      { w: 'leaks', it: 'perdite' },
      { w: 'chain', it: 'catena' },
      { w: 'slack', it: 'gioco della catena' },
      { w: 'checklist', it: 'lista di controllo' }
    ]
  });

  A('moto-posizione-equilibrio-primi-movimenti', {
    title: { t: 'Posture, balance and first movements', it: 'Posizione, equilibrio e primi movimenti' },
    sum: [
      { t: 'A good ⟦riding position⟧ has soft elbows, knees against the tank, feet on the pegs and your eyes looking far ahead.', it: 'Una buona posizione ha gomiti morbidi, ginocchia contro il serbatoio, piedi sulle pedane e lo sguardo lontano.' },
      { t: 'The bike goes where you look, so avoid ⟦target fixation⟧: look at where you want to go, not at the obstacle.', it: 'La moto va dove guardi, quindi evita la fissazione sul bersaglio: guarda dove vuoi andare, non l’ostacolo.' },
      { t: 'The ⟦clutch⟧ joins engine and wheel, and the ⟦friction point⟧ is where the bike starts to move.', it: 'La frizione collega motore e ruota e il punto di attacco è dove la moto comincia a muoversi.' },
      { t: 'To pull away, clutch in, first gear, a little throttle, then release the clutch slowly and put your feet on the pegs.', it: 'Per partire: frizione tirata, prima, un po’ di gas, poi rilascia la frizione lentamente e metti i piedi sulle pedane.' },
      { t: 'To ⟦upshift⟧, ease the throttle, pull the clutch, lift the pedal and release gently; to ⟦downshift⟧, slow down first.', it: 'Per salire di marcia chiudi un po’ il gas, tira la frizione, solleva il pedale e rilascia dolcemente; per scalare rallenta prima.' },
      { t: 'To stop, close the throttle, brake progressively with both brakes, pull the clutch before the engine stalls, then put a foot down.', it: 'Per fermarti, chiudi il gas, frena in modo progressivo con entrambi i freni, tira la frizione prima che il motore si spenga, poi appoggia un piede.' },
      { t: 'Practise in an empty car park, with full gear and an instructor if possible, in short sessions of 20–30 minutes.', it: 'Esercitati in un piazzale vuoto, con equipaggiamento completo e se possibile un istruttore, in sessioni brevi di 20–30 minuti.' }
    ],
    gloss: [
      { w: 'riding position', it: 'posizione di guida' },
      { w: 'target fixation', it: 'fissazione sul bersaglio' },
      { w: 'clutch', it: 'frizione' },
      { w: 'friction point', it: 'punto di attacco della frizione' },
      { w: 'upshift', it: 'salire di marcia' },
      { w: 'downshift', it: 'scalare' },
      { w: 'stall', it: 'spegnersi (il motore)' },
      { w: 'countersteering', it: 'controsterzo' },
      { w: 'pegs', it: 'pedane' },
      { w: 'centre of gravity', it: 'baricentro' }
    ]
  });

  A('moto-frenata-abs-e-aiuti-elettronici', {
    title: { t: 'Braking, ABS and electronic aids', it: 'Frenata, ABS e aiuti elettronici' },
    sum: [
      { t: 'When you brake, weight shifts forward (⟦load transfer⟧), so the front brake gives most of the braking.', it: 'Frenando il peso si sposta in avanti (trasferimento di carico), quindi il freno anteriore fornisce la maggior parte della frenata.' },
      { t: 'Use ⟦progressive braking⟧: squeeze the lever gradually, and avoid braking hard when the bike is leaning.', it: 'Usa una frenata progressiva: stringi la leva gradualmente ed evita di frenare forte con la moto in piega.' },
      { t: 'Total stopping distance is the ⟦reaction distance⟧ plus the ⟦braking distance⟧, and reaction time is about 1 s.', it: 'Lo spazio totale di fermata è lo spazio di reazione più quello di frenata, e il tempo di reazione è circa 1 s.' },
      { t: 'If you double the speed, the braking distance becomes four times longer, for example from 16.1 to 64.3 m.', it: 'Se raddoppi la velocità, lo spazio di frenata diventa quattro volte più lungo, per esempio da 16,1 a 64,3 m.' },
      { t: '⟦ABS⟧ uses wheel sensors and a control unit to stop wheels locking, so you can brake hard and keep your direction.', it: 'L’ABS usa sensori sulle ruote e una centralina per evitare il bloccaggio, così puoi frenare forte e mantenere la direzione.' },
      { t: 'ABS does not always shorten the stop, does not add grip and does not make up for excess speed.', it: 'L’ABS non accorcia sempre la frenata, non aumenta l’aderenza e non compensa la velocità eccessiva.' },
      { t: '⟦Traction control⟧ cuts power when the rear wheel slips, and riding modes change the throttle response, but aids never replace prudent riding.', it: 'Il controllo di trazione riduce la potenza quando il posteriore pattina e le mappe cambiano la risposta del gas, ma gli aiuti non sostituiscono la guida prudente.' }
    ],
    gloss: [
      { w: 'load transfer', it: 'trasferimento di carico' },
      { w: 'progressive braking', it: 'frenata progressiva' },
      { w: 'reaction distance', it: 'spazio di reazione' },
      { w: 'braking distance', it: 'spazio di frenata' },
      { w: 'ABS', it: 'antibloccaggio dei freni' },
      { w: 'traction control', it: 'controllo di trazione' },
      { w: 'riding modes', it: 'mappe motore, modalità di guida' },
      { w: 'IMU', it: 'unità di misura inerziale (inclinazione e accelerazioni)' },
      { w: 'lock', it: 'bloccarsi (della ruota)' },
      { w: 'grip', it: 'aderenza' }
    ]
  });

  A('moto-scegliere-la-prima-moto', {
    title: { t: 'Choosing your first motorcycle', it: 'Scegliere la prima moto e crescere in sicurezza' },
    sum: [
      { t: 'Your first bike is the one you learn on quickly and without fear, and ⟦power⟧ matters more than displacement.', it: 'La prima moto è quella con cui impari in fretta e senza paura, e la potenza conta più della cilindrata.' },
      { t: 'The licence sets the limits: A1 allows up to 125 cm³ and 11 kW, while A2 allows up to 35 kW.', it: 'La patente fissa i limiti: con A1 fino a 125 cm³ e 11 kW, con A2 fino a 35 kW.' },
      { t: 'The ⟦seat height⟧ matters because at a standstill you must touch the ground; try it in the shop.', it: 'L’altezza della sella conta perché da fermo devi toccare terra; provala in concessionaria.' },
      { t: '⟦Dry weight⟧ is lower than the weight in ⟦running order⟧, which can be 15–25 kg more; a light bike forgives mistakes.', it: 'Il peso a secco è inferiore al peso reale in ordine di marcia, che può essere di 15–25 kg in più, e una moto leggera perdona più errori.' },
      { t: 'Costs are ⟦fixed⟧ (insurance, road tax, inspection, gear, depreciation) or variable (fuel, servicing, tyres, chain).', it: 'I costi sono fissi (assicurazione, bollo, revisione, equipaggiamento, deprezzamento) o variabili (carburante, tagliandi, pneumatici, catena).' },
      { t: 'In the lesson’s example, a used bike of 4500 euros ridden 6000 km a year costs about 2060 euros a year.', it: 'Nell’esempio della lezione, una moto usata da 4500 € percorsa per 6000 km all’anno costa circa 2060 € all’anno.' },
      { t: 'Take a ⟦safe-riding course⟧, use a light and docile bike at first, and increase power only when your skills have grown.', it: 'Fai un corso di guida sicura, usa all’inizio una moto leggera e docile e sali di potenza solo quando le tue capacità sono cresciute.' }
    ],
    gloss: [
      { w: 'power', it: 'potenza' },
      { w: 'displacement', it: 'cilindrata' },
      { w: 'seat height', it: 'altezza della sella' },
      { w: 'dry weight', it: 'peso a secco (senza liquidi)' },
      { w: 'running order', it: 'in ordine di marcia (con liquidi e serbatoio pieno)' },
      { w: 'fixed', it: 'costi fissi (si pagano comunque)' },
      { w: 'depreciation', it: 'deprezzamento' },
      { w: 'safe-riding course', it: 'corso di guida sicura' },
      { w: 'used bike', it: 'moto usata' },
      { w: 'service book', it: 'libretto dei tagliandi' }
    ]
  });

  A('moto-rischio-e-statistica', {
    title: { t: 'Risk perception and statistics', it: 'Percezione del rischio e statistica' },
    sum: [
      { t: '⟦Risk⟧ is the probability that something happens times the ⟦severity⟧ of its consequences, so it cannot be judged by feeling.', it: 'Il rischio è la probabilità che accada qualcosa per la gravità delle conseguenze, quindi non si valuta a sensazione.' },
      { t: 'On a motorcycle the severity is higher, because there is no cabin, no seat belts and no standard airbags.', it: 'In moto la gravità è maggiore, perché non ci sono abitacolo, cinture e airbag di serie.' },
      { t: 'Per kilometre, a rider’s risk of dying in a crash is of the order of 15–20 times that of a car occupant.', it: 'Per chilometro percorso, il rischio di morire in incidente di un motociclista è di ordine 15–20 volte quello di un occupante d’auto.' },
      { t: 'Many crashes happen at ⟦intersections⟧, often because a car does not give way, so ride as if others could not see you.', it: 'Molti incidenti avvengono agli incroci, spesso perché un’auto non dà la precedenza, quindi guida come se non ti vedessero.' },
      { t: '⟦Kinetic energy⟧ depends on the square of speed, so going from 50 to 100 km/h makes it four times bigger.', it: 'L’energia cinetica dipende dal quadrato della velocità, quindi passare da 50 a 100 km/h la quadruplica.' },
      { t: 'A ⟦safety margin⟧ is the free visible space minus the space you need to stop; build it with lower speed and anticipation.', it: 'Il margine di sicurezza è lo spazio libero visibile meno quello che ti serve per fermarti; si costruisce con meno velocità, sguardo più lontano e anticipazione.' },
      { t: 'Mental traps such as ⟦overconfidence⟧ and ⟦normalisation of deviance⟧ hide risk, so rely on numbers and habits, not feelings.', it: 'Trappole mentali come l’eccesso di fiducia e la normalizzazione della devianza nascondono il rischio, quindi affidati a numeri e abitudini, non a sensazioni.' }
    ],
    gloss: [
      { w: 'risk', it: 'rischio (probabilità × gravità)' },
      { w: 'severity', it: 'gravità delle conseguenze' },
      { w: 'intersections', it: 'incroci e intersezioni' },
      { w: 'kinetic energy', it: 'energia cinetica' },
      { w: 'safety margin', it: 'margine di sicurezza' },
      { w: 'overconfidence', it: 'eccesso di fiducia' },
      { w: 'normalisation of deviance', it: 'normalizzazione della devianza' },
      { w: 'survivor bias', it: 'bias del sopravvissuto' },
      { w: 'crash', it: 'incidente' },
      { w: 'give way', it: 'dare la precedenza' }
    ]
  });

  A('moto-visione-e-distanza', {
    title: { t: 'Vision, attention and safe distance', it: 'Visione, attenzione e distanza di sicurezza' },
    sum: [
      { t: 'Look far ahead, where you are going: it gives you time, for example about 12 seconds ahead on an open road.', it: 'Guarda lontano, dove stai per andare: ti dà tempo, per esempio circa 12 secondi davanti su strada extraurbana.' },
      { t: 'The bike goes where you look, so avoid ⟦target fixation⟧ and turn your head towards the exit.', it: 'La moto va dove guardi, quindi evita la fissazione sul bersaglio e gira la testa verso l’uscita.' },
      { t: 'Keep a constant ⟦scan⟧: far, middle, near, mirrors; the ⟦vanishing point⟧ shows how the road will change.', it: 'Mantieni una scansione costante: lontano, medio, vicino, specchietti; il punto di fuga mostra come cambierà la strada.' },
      { t: 'Check the mirror and look over your shoulder before changing direction; never stay in the ⟦blind spot⟧ of a truck.', it: 'Controlla lo specchietto e guarda sopra la spalla prima di cambiare direzione, e non stare mai nell’angolo cieco di un’auto o di un camion.' },
      { t: '⟦Reaction time⟧ is typically 0.75–1.5 s, and at 90 km/h in one second you travel 25 m.', it: 'Il tempo di reazione è tipicamente 0,75–1,5 s, e a 90 km/h in un secondo percorri 25 m.' },
      { t: 'Keep a ⟦following distance⟧ of at least 2 seconds in normal conditions, and 3–4 seconds in rain or at night.', it: 'Mantieni una distanza di sicurezza di almeno 2 secondi in condizioni normali, e di 3–4 secondi con pioggia o di notte.' },
      { t: 'A two-second ⟦distraction⟧ at 50 km/h means travelling 27.8 m almost blind, so never look at a phone while riding.', it: 'Una distrazione di 2 secondi a 50 km/h significa percorrere 27,8 m quasi alla cieca, quindi non guardare mai il telefono mentre guidi.' }
    ],
    gloss: [
      { w: 'target fixation', it: 'fissazione sul bersaglio' },
      { w: 'scan', it: 'scansione visiva' },
      { w: 'vanishing point', it: 'punto di fuga' },
      { w: 'blind spot', it: 'angolo cieco' },
      { w: 'reaction time', it: 'tempo di reazione' },
      { w: 'following distance', it: 'distanza di sicurezza' },
      { w: 'distraction', it: 'distrazione' },
      { w: 'tailgating', it: 'stare incollati al veicolo davanti' },
      { w: 'peripheral vision', it: 'visione periferica' },
      { w: 'lane position', it: 'posizione nella corsia' }
    ]
  });

  A('moto-frenata-corretta', {
    title: { t: 'Correct braking', it: 'La frenata corretta' },
    sum: [
      { t: 'A bike has two independent brakes; the ⟦front brake⟧ is much more powerful and gives most of the deceleration (often 70–90%).', it: 'La moto ha due freni indipendenti; il freno anteriore è molto più potente e dà gran parte della decelerazione (spesso 70–90%).' },
      { t: 'Use both brakes, with the front one dominant and ⟦progressive⟧: braking is dosing, not force, so squeeze, do not snatch.', it: 'Usa entrambi i freni, con l’anteriore dominante e progressivo: la frenata è dosaggio, non forza; la leva si stringe, non si strappa.' },
      { t: 'In braking, ⟦load transfer⟧ moves weight onto the front wheel, while the unloaded rear wheel locks easily.', it: 'In frenata il trasferimento di carico sposta peso sulla ruota anteriore, mentre il posteriore scarico si blocca facilmente.' },
      { t: 'In ⟦emergency braking⟧ look at the free space, keep the bike upright, squeeze quickly but smoothly and hold the pressure.', it: 'Nella frenata di emergenza guarda lo spazio libero, tieni la moto in verticale, stringi in modo rapido ma dolce e mantieni la pressione.' },
      { t: '⟦ABS⟧ stops the wheels from locking, but it does not create grip where there is none.', it: 'L’ABS impedisce il blocco delle ruote, ma non crea aderenza dove non c’è.' },
      { t: 'The ⟦stopping distance⟧ is reaction plus braking: on dry road, 27.7 m from 50 km/h and 69.6 m from 90 km/h.', it: 'Lo spazio di arresto è reazione più frenata; sull’asciutto, da 50 km/h è 27,7 m e da 90 km/h è 69,6 m.' },
      { t: 'The available ⟦grip⟧ is shared between braking and turning, so brake before leaning, with the bike upright.', it: 'L’aderenza disponibile è una sola e si divide tra frenare e curvare, quindi frena prima di inclinare, a moto dritta.' }
    ],
    gloss: [
      { w: 'front brake', it: 'freno anteriore' },
      { w: 'progressive', it: 'progressivo, graduale' },
      { w: 'load transfer', it: 'trasferimento di carico' },
      { w: 'emergency braking', it: 'frenata di emergenza' },
      { w: 'ABS', it: 'antibloccaggio dei freni' },
      { w: 'stopping distance', it: 'spazio di arresto (reazione + frenata)' },
      { w: 'grip', it: 'aderenza' },
      { w: 'rear brake', it: 'freno posteriore' },
      { w: 'lean', it: 'inclinazione, piega' },
      { w: 'deceleration', it: 'decelerazione' }
    ]
  });

  A('moto-la-curva-su-strada', {
    title: { t: 'Cornering on the road', it: 'La curva su strada' },
    sum: [
      { t: 'In a bend the bike needs a force towards the centre, which comes from tyre ⟦grip⟧; ⟦lateral acceleration⟧ is a = v²/r.', it: 'In curva la moto ha bisogno di una forza verso il centro, che viene dall’aderenza dei pneumatici; l’accelerazione laterale è a = v²/r.' },
      { t: 'Speed counts squared: at a radius of 50 m, going from 60 to 70 km/h raises the lateral acceleration by 36%.', it: 'La velocità conta al quadrato: su un raggio di 50 m, passare da 60 a 70 km/h aumenta l’accelerazione laterale del 36%.' },
      { t: 'On the road you never ride at the limit of grip, because the surface can change; use at most half of it.', it: 'Su strada non si va mai al limite dell’aderenza, perché il fondo può cambiare; se ne usa al massimo la metà.' },
      { t: 'In a ⟦blind bend⟧ your speed must let you stop within the visible free space; if you cannot see, slow down.', it: 'In una curva cieca la velocità deve permetterti di fermarti entro lo spazio visibile e libero; se non vedi, riduci.' },
      { t: 'On the road always stay in your own lane, and delay the ⟦apex⟧ a little to see the exit sooner.', it: 'Su strada si resta sempre nella propria corsia, e si ritarda un po’ la corda per vedere prima l’uscita.' },
      { t: 'Brake upright before you ⟦lean⟧, then release the brakes progressively while leaning, with a steady throttle.', it: 'Frena in rettilineo prima di inclinare, poi rilascia i freni progressivamente mentre inclini, con gas costante.' },
      { t: 'Look at the exit, keep your arms relaxed and use ⟦countersteering⟧ above about 30–40 km/h; enter slowly and exit smoothly.', it: 'Guarda l’uscita, tieni le braccia rilassate e usa il controsterzo sopra circa 30–40 km/h; entra piano ed esci fluido.' }
    ],
    gloss: [
      { w: 'grip', it: 'aderenza' },
      { w: 'lateral acceleration', it: 'accelerazione laterale' },
      { w: 'blind bend', it: 'curva cieca' },
      { w: 'apex', it: 'punto di corda' },
      { w: 'countersteering', it: 'controsterzo' },
      { w: 'lean', it: 'inclinare, piegare' },
      { w: 'friction coefficient', it: 'coefficiente di attrito' },
      { w: 'radius', it: 'raggio della curva' },
      { w: 'throttle', it: 'manopola del gas' },
      { w: 'lane', it: 'corsia' }
    ]
  });

  A('moto-fondi-e-condizioni', {
    title: { t: 'Difficult surfaces and conditions', it: 'Fondi difficili e condizioni' },
    sum: [
      { t: 'Grip is described by the ⟦friction coefficient⟧; if it halves, the braking distance doubles.', it: 'L’aderenza si descrive con il coefficiente d’attrito; se si dimezza, lo spazio di frenata raddoppia.' },
      { t: 'The first minutes of rain after a dry spell are the most treacherous, so slow down and keep 3–4 seconds of distance.', it: 'I primi minuti di pioggia dopo un periodo secco sono i più insidiosi, quindi riduci la velocità e mantieni 3–4 secondi di distanza.' },
      { t: 'In ⟦aquaplaning⟧ the tyre floats on deep water: do not brake or steer, ease off the throttle and keep the bike straight.', it: 'Nell’aquaplaning il pneumatico galleggia sull’acqua profonda: non frenare né sterzare, lascia il gas e tieni la moto dritta.' },
      { t: 'Painted lines, ⟦manhole covers⟧ and ⟦tram tracks⟧ are very slippery when wet; cross them upright, without braking or accelerating.', it: 'Strisce, tombini e binari del tram sono molto scivolosi quando sono bagnati; attraversali in verticale, senza frenare né accelerare.' },
      { t: 'On ⟦gravel⟧, sand, leaves and oil, slow down before, keep the bike upright and avoid braking in a bend.', it: 'Su ghiaia, sabbia, foglie e olio riduci prima, tieni la moto verticale ed evita di frenare in curva.' },
      { t: '⟦Cold tyres⟧ grip less, so ride gently for the first 5–10 km, with little lean and progressive brakes.', it: 'I pneumatici freddi aderiscono meno, quindi nei primi 5–10 km guida in modo dolce, con poca piega e freni progressivi.' },
      { t: 'The rule is simple: less grip means more space and less ⟦lean⟧, so read the road and use smooth controls.', it: 'La regola è semplice: meno aderenza significa più spazio e meno piega, quindi leggi la strada e usa comandi dolci.' }
    ],
    gloss: [
      { w: 'friction coefficient', it: 'coefficiente d’attrito (μ)' },
      { w: 'aquaplaning', it: 'aquaplaning, la gomma galleggia sull’acqua' },
      { w: 'manhole covers', it: 'tombini e chiusini' },
      { w: 'tram tracks', it: 'binari del tram' },
      { w: 'gravel', it: 'ghiaia' },
      { w: 'cold tyres', it: 'pneumatici freddi' },
      { w: 'lean', it: 'piega, inclinazione' },
      { w: 'painted lines', it: 'segnaletica orizzontale, vernice' },
      { w: 'braking distance', it: 'spazio di frenata' },
      { w: 'potholes', it: 'buche' }
    ]
  });

  A('moto-gruppo-e-viaggi', {
    title: { t: 'Group riding and trips', it: 'Guida in gruppo e viaggi' },
    sum: [
      { t: 'In a group, ride your own pace and respect the rules, and hold a ⟦briefing⟧ before leaving.', it: 'In gruppo guida il tuo ritmo e rispetta le regole, e fai un briefing prima di partire.' },
      { t: 'In a ⟦staggered formation⟧ keep at least 2 seconds from the bike ahead on your track, about 1 second from the diagonal.', it: 'Nella formazione a scacchiera tieni almeno 2 secondi dalla moto sulla stessa traccia e circa 1 secondo da quella diagonale.' },
      { t: 'In bends, on narrow roads or in rain, switch to ⟦single file⟧ and increase the distance.', it: 'In curva, su strade strette o con pioggia, passa alla fila indiana e aumenta la distanza.' },
      { t: '⟦Hand signals⟧ agreed in the briefing do not replace the indicator, and they are not prudent in bends or at high speed.', it: 'I segnali manuali concordati nel briefing non sostituiscono la freccia e non sono prudenti in curva o a velocità elevata.' },
      { t: '⟦Fatigue⟧ worsens attention: stop every 1.5–2 hours for at least 15–20 minutes, because caffeine helps only briefly.', it: 'La fatica peggiora l’attenzione: fermati ogni 1,5–2 ore per almeno 15–20 minuti, perché la caffeina aiuta solo temporaneamente.' },
      { t: 'Plan the route, weather and stops, and load ⟦luggage⟧ low, near the centre and symmetric, within the maximum weight.', it: 'Pianifica percorso, meteo e soste, e carica i bagagli bassi, vicini al centro e simmetrici, entro il peso massimo.' },
      { t: 'A ⟦passenger⟧ is allowed only if the bike is approved for two; the rider brakes more gently and leaves more distance.', it: 'Il passeggero è ammesso solo se la moto è omologata per due; il pilota frena con più dolcezza e aumenta le distanze.' }
    ],
    gloss: [
      { w: 'briefing', it: 'riunione prima della partenza' },
      { w: 'staggered formation', it: 'formazione a scacchiera (zig-zag)' },
      { w: 'single file', it: 'fila indiana' },
      { w: 'hand signals', it: 'segnali manuali' },
      { w: 'fatigue', it: 'fatica, stanchezza' },
      { w: 'luggage', it: 'bagagli' },
      { w: 'passenger', it: 'passeggero' },
      { w: 'indicator', it: 'freccia' },
      { w: 'route', it: 'percorso' },
      { w: 'rest stop', it: 'sosta' }
    ]
  });

  A('moto-guida-difensiva-e-mentalita', {
    title: { t: 'Defensive riding and mindset', it: 'Guida difensiva e mentalità' },
    sum: [
      { t: '⟦Defensive riding⟧ is based on ⟦anticipation⟧, margins and responsibility: leave room for your own mistakes and for those of others.', it: 'La guida difensiva si basa su anticipazione, margini e responsabilità: lascia spazio all’errore, tuo e degli altri.' },
      { t: 'Assume that others may make mistakes or not see you, and always keep an ⟦escape route⟧.', it: 'Presumi che gli altri possano sbagliare o non vederti, e lascia sempre una via di fuga.' },
      { t: '⟦Hurry⟧ is a common risk: on 20 km, riding at 100 instead of 90 km/h saves only 80 seconds.', it: 'La fretta è un rischio comune: su 20 km, andare a 100 invece di 90 km/h fa risparmiare solo 80 secondi.' },
      { t: 'The best rule with ⟦alcohol⟧ is zero: the legal limit is not a safety threshold, and nothing sobers you up quickly.', it: 'La regola migliore con l’alcol è zero: il limite legale non è una soglia di sicurezza e nulla fa smaltire in fretta.' },
      { t: 'Medicines can cause drowsiness, and a ⟦microsleep⟧ of 4 seconds at 90 km/h means 100 m without control.', it: 'I farmaci possono causare sonnolenza, e un microsonno di 4 secondi a 90 km/h significa 100 m percorsi senza controllo.' },
      { t: 'A ⟦safe-riding course⟧ builds correct reflexes in a controlled place; it is not an invitation to experiment on the road.', it: 'Un corso di guida sicura crea automatismi corretti in un luogo controllato; non è un invito a sperimentare su strada.' },
      { t: 'After a fall, make the scene safe and call ⟦112⟧; do not remove the helmet unless it is essential.', it: 'Dopo una caduta metti in sicurezza la scena e chiama il 112; non togliere il casco se non è indispensabile.' }
    ],
    gloss: [
      { w: 'defensive riding', it: 'guida difensiva' },
      { w: 'anticipation', it: 'anticipazione' },
      { w: 'escape route', it: 'via di fuga' },
      { w: 'hurry', it: 'fretta' },
      { w: 'alcohol', it: 'alcol' },
      { w: 'microsleep', it: 'microsonno' },
      { w: 'safe-riding course', it: 'corso di guida sicura' },
      { w: '112', it: 'numero unico di emergenza europeo' },
      { w: 'near miss', it: 'quasi incidente' },
      { w: 'first aid', it: 'primo soccorso' }
    ]
  });

  A('moto-motore-quattro-tempi', {
    title: { t: 'The four-stroke engine', it: 'Il motore a quattro tempi' },
    sum: [
      { t: 'A combustion engine turns the chemical energy of the air-fuel mixture into work: the burning gases push a ⟦piston⟧.', it: 'Un motore a combustione trasforma l’energia chimica della miscela aria-benzina in lavoro: i gas che bruciano spingono un pistone.' },
      { t: 'The connecting rod and the ⟦crankshaft⟧ turn the back-and-forth motion of the piston into rotation.', it: 'La biella e l’albero motore trasformano il moto avanti-indietro del pistone in rotazione.' },
      { t: 'The ⟦four-stroke cycle⟧ is intake, compression, power and exhaust; only the power stroke produces work.', it: 'Il ciclo a quattro tempi è aspirazione, compressione, scoppio e scarico; solo lo scoppio produce lavoro.' },
      { t: 'Four strokes take two crankshaft turns, 720°, so each cylinder fires only once every two turns.', it: 'Quattro corse richiedono due giri dell’albero motore, 720°, quindi ogni cilindro ha uno scoppio solo ogni due giri.' },
      { t: 'The ⟦camshaft⟧ opens the valves and turns at half the crankshaft speed, a ratio of 2:1.', it: 'L’albero a camme apre le valvole e gira a metà della velocità dell’albero motore, con rapporto 2:1.' },
      { t: '⟦Displacement⟧ depends on bore, stroke and number of cylinders; doubling the bore makes it four times larger.', it: 'La cilindrata dipende da alesaggio, corsa e numero di cilindri; raddoppiando l’alesaggio quadruplica.' },
      { t: 'A high ⟦compression ratio⟧ raises efficiency but also the risk of ⟦knocking⟧; a petrol engine’s efficiency is about 30–35%.', it: 'Un rapporto di compressione alto aumenta il rendimento ma anche il rischio di detonazione; il rendimento di un motore a benzina è circa 30–35%.' }
    ],
    gloss: [
      { w: 'piston', it: 'pistone' },
      { w: 'crankshaft', it: 'albero motore' },
      { w: 'four-stroke cycle', it: 'ciclo a quattro tempi' },
      { w: 'camshaft', it: 'albero a camme' },
      { w: 'displacement', it: 'cilindrata' },
      { w: 'compression ratio', it: 'rapporto di compressione' },
      { w: 'knocking', it: 'detonazione (combustione incontrollata)' },
      { w: 'valve clearance', it: 'gioco valvole' },
      { w: 'torque', it: 'coppia' },
      { w: 'spark plug', it: 'candela' }
    ]
  });

  A('moto-motore-due-tempi', {
    title: { t: 'The two-stroke engine and the comparison', it: 'Il motore a due tempi e il confronto' },
    sum: [
      { t: 'A ⟦two-stroke⟧ engine completes the cycle in one crankshaft turn, 360°, so there is a firing at every turn.', it: 'Il motore a due tempi completa il ciclo in un solo giro di albero motore, 360°, quindi c’è uno scoppio a ogni giro.' },
      { t: 'It has no poppet valves: the ⟦ports⟧ in the cylinder wall are opened and closed by the piston itself.', it: 'Non ha valvole a fungo: le luci nella parete del cilindro sono aperte e chiuse dal pistone stesso.' },
      { t: 'The sealed ⟦crankcase⟧ works as a pump, and the fresh mixture pushes out the burnt gases in the ⟦scavenging⟧.', it: 'Il carter chiuso funziona da pompa e la miscela fresca spinge fuori i gas bruciati nel lavaggio.' },
      { t: 'Scavenging is imperfect, so some fresh mixture escapes through the exhaust: consumption and emissions are worse.', it: 'Il lavaggio non è perfetto, quindi un po’ di miscela fresca esce dallo scarico: consumi ed emissioni sono peggiori.' },
      { t: 'The oil is carried with the fuel as a ⟦premix⟧, typically 2%, or by separate lubrication; too little oil causes ⟦seizure⟧.', it: 'L’olio è portato con il combustibile come miscela, tipicamente al 2%, o con lubrificazione separata; poco olio provoca il grippaggio.' },
      { t: 'The two-stroke is light and simple, with high ⟦specific power⟧, but the four-stroke wins in consumption, emissions and durability.', it: 'Il due tempi è leggero e semplice, con grande potenza specifica, ma il quattro tempi vince in consumi, emissioni e durata.' },
      { t: 'Today it survives in competition off-road bikes and portable tools; an off-road model without road approval cannot be used on the road.', it: 'Oggi sopravvive nel fuoristrada da competizione e negli attrezzi portatili; un modello da fuoristrada senza omologazione stradale non si usa su strada.' }
    ],
    gloss: [
      { w: 'two-stroke', it: 'motore a due tempi' },
      { w: 'ports', it: 'luci (finestre) nel cilindro' },
      { w: 'crankcase', it: 'carter dell’albero motore' },
      { w: 'scavenging', it: 'lavaggio dei gas bruciati' },
      { w: 'premix', it: 'miscela benzina-olio' },
      { w: 'seizure', it: 'grippaggio' },
      { w: 'specific power', it: 'potenza specifica' },
      { w: 'separate lubrication', it: 'lubrificazione separata' },
      { w: 'exhaust', it: 'scarico' },
      { w: 'spark plug', it: 'candela' }
    ]
  });

  A('moto-architetture-motore', {
    title: { t: 'Engine layouts: single, twin, triple, four and V4', it: 'Architetture dei motori: mono, bi, tri, quattro e V4' },
    sum: [
      { t: 'In a four-stroke each cylinder fires once every 720°, so evenly spaced cylinders give a regular ⟦firing interval⟧.', it: 'In un quattro tempi ogni cilindro scoppia una volta ogni 720°, quindi cilindri ben distribuiti danno un intervallo di scoppio regolare.' },
      { t: 'A single is simple, light and cheap, but it pulses and vibrates, so it uses a ⟦balance shaft⟧.', it: 'Il monocilindrico è semplice, leggero ed economico, ma pulsa e vibra, quindi usa un contralbero di bilanciamento.' },
      { t: 'A 90° ⟦V-twin⟧ nearly balances the inertia forces, with firing at 270° and 450°.', it: 'Il bicilindrico a V di 90° equilibra quasi del tutto le forze d’inerzia, con scoppi a 270° e 450°.' },
      { t: 'In a ⟦boxer⟧ the two opposed pistons balance each other naturally, with a low centre of gravity but a wide engine.', it: 'Nel boxer i due pistoni opposti si bilanciano naturalmente, con baricentro basso ma motore largo.' },
      { t: 'A triple fires every 240°, balancing low-rev torque and top-end power.', it: 'Il tricilindrico scoppia ogni 240°, con un buon equilibrio fra coppia in basso e potenza in alto.' },
      { t: 'An ⟦inline four⟧ fires every 180°, very smooth and high-revving, while a ⟦V4⟧ is compact but more complex and costly.', it: 'Il quattro in linea scoppia ogni 180°, molto fluido e da alti giri, mentre il V4 è compatto ma più complesso e costoso.' },
      { t: 'A ⟦crossplane⟧ crank gives uneven firing intervals; no layout is the best, because each has its own character.', it: 'Un albero crossplane dà intervalli di scoppio irregolari; nessuna architettura è la migliore, perché ognuna ha il suo carattere.' }
    ],
    gloss: [
      { w: 'firing interval', it: 'sfasamento di scoppio' },
      { w: 'balance shaft', it: 'contralbero di bilanciamento' },
      { w: 'V-twin', it: 'bicilindrico a V' },
      { w: 'boxer', it: 'cilindri opposti orizzontali' },
      { w: 'inline four', it: 'quattro cilindri in linea' },
      { w: 'V4', it: 'quattro cilindri a V' },
      { w: 'crossplane', it: 'albero a manovelle a 90°, scoppi irregolari' },
      { w: 'inertia forces', it: 'forze d’inerzia' },
      { w: 'vibrations', it: 'vibrazioni' },
      { w: 'crank angle', it: 'angolo di manovella' }
    ]
  });

  A('moto-alimentazione-scarico', {
    title: { t: 'Fuel system, injection and exhaust', it: 'Alimentazione, iniezione e scarico' },
    sum: [
      { t: 'Petrol needs air in the right proportion: the ⟦air-fuel ratio⟧ for complete burning is 14.7:1 by mass.', it: 'La benzina ha bisogno di aria nelle giuste proporzioni: il rapporto aria-carburante per una combustione completa è 14,7:1 in massa.' },
      { t: 'A ⟦lambda⟧ of 1 is the ideal mixture; below 1 it is rich, above 1 lean, with a risk of overheating.', it: 'Un lambda pari a 1 è la miscela ideale; sotto 1 è ricca, sopra 1 è povera, con rischio di surriscaldamento.' },
      { t: 'The ⟦carburettor⟧ doses the fuel using the vacuum created in a ⟦venturi⟧, and it is sensitive to temperature and altitude.', it: 'Il carburatore dosa il carburante sfruttando la depressione creata in un venturi, ed è sensibile a temperatura e altitudine.' },
      { t: 'In electronic injection the ⟦ECU⟧ sets the injector opening time from sensors, using a map.', it: 'Nell’iniezione elettronica la centralina stabilisce il tempo di apertura dell’iniettore dai sensori, usando una mappa.' },
      { t: 'With ⟦ride-by-wire⟧ the grip has only a sensor, and the ECU moves the throttle with an electric motor.', it: 'Con il ride-by-wire la manopola ha solo un sensore e la centralina muove la farfalla con un motorino elettrico.' },
      { t: 'A dirty ⟦air filter⟧ limits the air, so the mixture gets rich and the engine loses power.', it: 'Un filtro dell’aria sporco limita l’aria, quindi la miscela diventa ricca e il motore perde potenza.' },
      { t: 'The ⟦catalytic converter⟧ works well only near lambda 1; the approved exhaust must never be removed or modified.', it: 'Il catalizzatore lavora bene solo con lambda vicino a 1; lo scarico omologato non va mai rimosso o modificato.' }
    ],
    gloss: [
      { w: 'air-fuel ratio', it: 'rapporto aria-carburante' },
      { w: 'lambda', it: 'rapporto tra AFR reale e quello ideale' },
      { w: 'carburettor', it: 'carburatore' },
      { w: 'venturi', it: 'restringimento che crea depressione' },
      { w: 'ECU', it: 'centralina elettronica' },
      { w: 'ride-by-wire', it: 'gas elettronico, senza cavi' },
      { w: 'air filter', it: 'filtro dell’aria' },
      { w: 'catalytic converter', it: 'catalizzatore' },
      { w: 'injector', it: 'iniettore' },
      { w: 'rich mixture', it: 'miscela ricca' }
    ]
  });

  A('moto-lubrificazione-raffreddamento', {
    title: { t: 'Lubrication and cooling', it: 'Lubrificazione e raffreddamento' },
    sum: [
      { t: 'Engine oil lubricates, cools, cleans, protects and seals; without it the metal parts ⟦seize⟧ in a few seconds.', it: 'L’olio motore lubrifica, raffredda, pulisce, protegge e sigilla; senza olio le parti metalliche si grippano in pochi secondi.' },
      { t: 'On a bike the oil often also lubricates clutch and gearbox, so use a motorcycle oil with the JASO MA/MA2 specification.', it: 'In moto l’olio spesso lubrifica anche frizione e cambio, quindi usa un olio per moto con specifica JASO MA/MA2.' },
      { t: 'If the ⟦oil warning light⟧ comes on while riding, stop safely at once and switch off the engine.', it: 'Se la spia olio si accende in marcia, fermati subito in sicurezza e spegni il motore.' },
      { t: 'In a code like 10W-40 the first number is the cold behaviour and the second is the hot ⟦viscosity⟧.', it: 'In una sigla come 10W-40 il primo numero indica il comportamento a freddo e il secondo la viscosità a caldo.' },
      { t: 'The ⟦oil filter⟧ traps particles and is replaced at the oil change; used oil is special waste for an authorised collection point.', it: 'Il filtro dell’olio trattiene le particelle e si sostituisce al cambio olio; l’olio usato è un rifiuto speciale da consegnare a un punto autorizzato.' },
      { t: 'Most of the fuel energy becomes heat, and ⟦liquid cooling⟧ keeps the temperature constant with a pump, a radiator and a ⟦thermostat⟧.', it: 'Gran parte dell’energia del carburante diventa calore, e il raffreddamento a liquido mantiene la temperatura costante con pompa, radiatore e termostato.' },
      { t: 'The ⟦coolant⟧ is 50% water and 50% antifreeze, and you must never open the radiator cap when the engine is hot.', it: 'Il liquido è per il 50% acqua e per il 50% antigelo, e non si apre mai il tappo del radiatore a caldo.' }
    ],
    gloss: [
      { w: 'seize', it: 'grippare' },
      { w: 'oil warning light', it: 'spia olio' },
      { w: 'viscosity', it: 'viscosità' },
      { w: 'oil filter', it: 'filtro dell’olio' },
      { w: 'liquid cooling', it: 'raffreddamento a liquido' },
      { w: 'thermostat', it: 'termostato' },
      { w: 'coolant', it: 'liquido di raffreddamento' },
      { w: 'radiator', it: 'radiatore' },
      { w: 'oil pump', it: 'pompa dell’olio' },
      { w: 'expansion tank', it: 'vaso di espansione' }
    ]
  });

  A('moto-frizione-cambio-trasmissione', {
    title: { t: 'Clutch, gearbox and transmission', it: 'Frizione, cambio e trasmissione' },
    sum: [
      { t: 'The transmission adapts the engine to the wheel: the clutch connects or disconnects, and the gearbox chooses among several ratios.', it: 'La trasmissione adatta il motore alla ruota: la frizione collega o scollega e il cambio sceglie fra più rapporti.' },
      { t: 'A ⟦gear ratio⟧ of 3:1 means the input turns 3 times for each turn of the output, multiplying torque by 3.', it: 'Un rapporto di trasmissione di 3:1 significa che l’ingresso fa 3 giri per ogni giro dell’uscita, moltiplicando la coppia per 3.' },
      { t: 'The wet multi-plate ⟦clutch⟧ is pressed by springs, and pulling the lever separates the plates; long slipping overheats it.', it: 'La frizione a dischi multipli a bagno d’olio è compressa da molle e tirando la leva i dischi si separano; uno slittamento prolungato la surriscalda.' },
      { t: 'A ⟦slipper clutch⟧ limits the braking torque on a hard downshift, but it does not excuse bad technique.', it: 'La frizione antisaltellamento limita la coppia frenante in una scalata violenta, ma non giustifica una tecnica sbagliata.' },
      { t: 'The ⟦sequential⟧ gearbox goes N–1–2–3–4–5–6, and a ⟦quickshifter⟧ allows shifting without the clutch.', it: 'Il cambio sequenziale segue lo schema N–1–2–3–4–5–6 e lo shifter elettronico permette di cambiare senza frizione.' },
      { t: 'The final ratio is the teeth of the crown divided by those of the ⟦sprocket⟧; a bigger sprocket gives a longer ratio.', it: 'Il rapporto finale è i denti della corona divisi per quelli del pignone; un pignone più grande dà un rapporto più lungo.' },
      { t: 'The final drive can be a ⟦chain⟧, the most common, a belt or a shaft, which needs very little maintenance.', it: 'La trasmissione finale può essere a catena, la più diffusa, a cinghia o a cardano, che richiede pochissima manutenzione.' }
    ],
    gloss: [
      { w: 'gear ratio', it: 'rapporto di trasmissione' },
      { w: 'clutch', it: 'frizione' },
      { w: 'slipper clutch', it: 'frizione antisaltellamento' },
      { w: 'sequential', it: 'sequenziale (marce in ordine)' },
      { w: 'quickshifter', it: 'cambio elettronico senza frizione' },
      { w: 'sprocket', it: 'pignone' },
      { w: 'chain', it: 'catena' },
      { w: 'shaft drive', it: 'trasmissione a cardano' },
      { w: 'crown', it: 'corona (ruota dentata posteriore)' },
      { w: 'plates', it: 'dischi della frizione' }
    ]
  });

  A('moto-impianto-elettrico', {
    title: { t: 'Electrical system and ignition', it: 'Impianto elettrico e accensione' },
    sum: [
      { t: 'The system is 12 V: the ⟦battery⟧ starts the engine, the ⟦alternator⟧ generates current, and the ⟦regulator⟧ limits the voltage.', it: 'L’impianto è a 12 V: la batteria avvia il motore, l’alternatore genera corrente e il regolatore limita la tensione.' },
      { t: 'A full battery at rest reads about 12.6–12.9 V, and with the engine running you expect 13.5–14.8 V.', it: 'Una batteria piena a riposo segna circa 12,6–12,9 V e a motore acceso ci si aspetta 13,5–14,8 V.' },
      { t: '⟦Ohm’s law⟧ links voltage, current and resistance; a 55 W headlight at 12 V draws about 4.6 A.', it: 'La legge di Ohm lega tensione, corrente e resistenza; un faro da 55 W a 12 V assorbe circa 4,6 A.' },
      { t: 'The ignition ⟦coil⟧ works as a transformer giving tens of thousands of volts, and the ECU decides when the spark fires.', it: 'La bobina funziona da trasformatore e dà decine di migliaia di volt, e la centralina decide quando scocca la scintilla.' },
      { t: 'A ⟦fuse⟧ melts to protect the cables; never fit a higher rating, and if it blows again, look for a short circuit.', it: 'Il fusibile si fonde per proteggere i cavi; non montarne mai uno di amperaggio maggiore e, se salta ancora, cerca un cortocircuito.' },
      { t: 'With a ⟦multimeter⟧ measure voltage in parallel, and measure resistance only with the circuit off.', it: 'Con il multimetro misura la tensione in parallelo e la resistenza solo a circuito spento.' },
      { t: 'A lead-acid battery contains sulphuric acid and gives off hydrogen: charge it in a ventilated place and disconnect the negative pole first.', it: 'La batteria al piombo contiene acido solforico e produce idrogeno: caricala in un luogo ventilato e scollega prima il polo negativo.' }
    ],
    gloss: [
      { w: 'battery', it: 'batteria' },
      { w: 'alternator', it: 'alternatore' },
      { w: 'regulator', it: 'regolatore di tensione' },
      { w: 'Ohm’s law', it: 'legge di Ohm (V = R · I)' },
      { w: 'coil', it: 'bobina di accensione' },
      { w: 'fuse', it: 'fusibile' },
      { w: 'multimeter', it: 'multimetro' },
      { w: 'ECU', it: 'centralina elettronica' },
      { w: 'short circuit', it: 'cortocircuito' },
      { w: 'spark plug', it: 'candela' }
    ]
  });

  A('moto-telaio-ciclistica', {
    title: { t: 'Frame and chassis', it: 'Telaio e ciclistica' },
    sum: [
      { t: 'The ⟦frame⟧ is the skeleton of the bike: it bears loads, sets the geometry, and needs the right stiffness and low weight.', it: 'Il telaio è lo scheletro della moto: sopporta i carichi, definisce la geometria e deve avere la giusta rigidità e poco peso.' },
      { t: 'A ⟦trellis frame⟧ is made of welded steel tubes forming triangles, and it is light and cheap.', it: 'Il telaio a traliccio è fatto di tubi d’acciaio saldati che formano triangoli, ed è leggero ed economico.' },
      { t: 'A ⟦perimeter frame⟧ has two beams wrapping the engine; aluminium weighs a third of steel but is three times less stiff.', it: 'Il telaio perimetrale ha due travi che avvolgono il motore; l’alluminio pesa circa un terzo dell’acciaio, ma è circa tre volte meno rigido.' },
      { t: 'In a stressed-engine design, the engine is part of the structure, saving tubes and weight.', it: 'Con il motore portante, il motore fa parte della struttura, risparmiando tubi e peso.' },
      { t: 'The ⟦swingarm⟧ holds the rear wheel: a longer one gives more stability and traction, a shorter one more agility.', it: 'Il forcellone regge la ruota posteriore: uno più lungo dà più stabilità e trazione, uno più corto più agilità.' },
      { t: 'The ⟦wheelbase⟧ is typically 1300–1450 mm on sport and naked bikes: a short one is agile, a long one stable.', it: 'L’interasse è tipicamente 1300–1450 mm su sportive e naked: uno corto è agile, uno lungo è stabile.' },
      { t: 'Too much ⟦stiffness⟧ makes the bike harsh and too little makes it weave, so after a serious crash have the frame checked.', it: 'Troppa rigidità rende la moto dura e troppo poca la fa ondeggiare, quindi dopo un incidente grave fai controllare il telaio.' }
    ],
    gloss: [
      { w: 'frame', it: 'telaio' },
      { w: 'trellis frame', it: 'telaio a traliccio' },
      { w: 'perimeter frame', it: 'telaio perimetrale a doppia trave' },
      { w: 'swingarm', it: 'forcellone' },
      { w: 'wheelbase', it: 'interasse' },
      { w: 'stiffness', it: 'rigidità' },
      { w: 'chassis', it: 'ciclistica' },
      { w: 'steering head', it: 'cannotto di sterzo' },
      { w: 'unsprung weight', it: 'pesi non sospesi' },
      { w: 'carbon fibre', it: 'fibra di carbonio' }
    ]
  });

  A('moto-sospensioni', {
    title: { t: 'Suspension: fork, shock, spring, damper', it: 'Sospensioni: forcella, mono, molla, ammortizzatore' },
    sum: [
      { t: 'Suspension keeps the wheel in contact with the road and gives comfort and control by managing weight transfers.', it: 'Le sospensioni tengono la ruota a contatto con l’asfalto e danno comfort e controllo gestendo i trasferimenti di peso.' },
      { t: 'The ⟦spring⟧ supports the weight, while the ⟦damper⟧ dissipates energy and stops the spring from bouncing.', it: 'La molla sostiene il peso, mentre l’ammortizzatore dissipa l’energia ed evita che la molla rimbalzi.' },
      { t: 'An ⟦upside-down fork⟧ is stiffer and reduces the ⟦unsprung weight⟧, which is why it is typical of sport bikes.', it: 'La forcella a steli rovesciati è più rigida e riduce i pesi non sospesi, per questo è tipica delle moto sportive.' },
      { t: 'The rear shock works through a ⟦linkage⟧, which makes its response progressive.', it: 'Il mono posteriore lavora tramite leveraggi, che ne rendono la risposta progressiva.' },
      { t: '⟦Preload⟧ changes the starting compression of the spring but not its stiffness; a spring too soft needs a stiffer one.', it: 'Il precarico cambia la compressione iniziale della molla ma non la sua rigidezza; una molla troppo morbida va sostituita con una più rigida.' },
      { t: 'In ⟦rebound⟧ damping, too fast makes the wheel bounce, and too slow stops the suspension from recovering.', it: 'Nell’estensione, troppo veloce fa rimbalzare la ruota e troppo lenta non lascia recuperare la sospensione.' },
      { t: 'The ⟦sag⟧ with rider is typically 25–35% of the travel; adjust one click at a time and never dismantle springs without training.', it: 'Il SAG con pilota è tipicamente 25–35% dell’escursione; regola un click alla volta e non smontare mai le molle senza formazione.' }
    ],
    gloss: [
      { w: 'spring', it: 'molla' },
      { w: 'damper', it: 'ammortizzatore idraulico' },
      { w: 'upside-down fork', it: 'forcella a steli rovesciati' },
      { w: 'unsprung weight', it: 'pesi non sospesi' },
      { w: 'linkage', it: 'leveraggi' },
      { w: 'preload', it: 'precarico della molla' },
      { w: 'rebound', it: 'estensione (della sospensione)' },
      { w: 'sag', it: 'affondamento sotto peso' },
      { w: 'fork', it: 'forcella' },
      { w: 'travel', it: 'escursione' }
    ]
  });

  A('moto-freni-ruote-pneumatici', {
    title: { t: 'Brakes, wheels and tyres', it: 'Freni, ruote e pneumatici' },
    sum: [
      { t: 'Braking turns ⟦kinetic energy⟧ into heat, and doubling the speed makes the energy four times bigger.', it: 'Frenare significa trasformare energia cinetica in calore, e raddoppiando la velocità l’energia quadruplica.' },
      { t: 'The hydraulic path is lever, master cylinder, hose, ⟦caliper⟧, pads and disc; the front brake does most of the work, 70–90%.', it: 'Il percorso idraulico è leva, pompa, tubo, pinza, pastiglie e disco; il freno anteriore fa la maggior parte del lavoro, 70–90%.' },
      { t: 'Replace the ⟦brake pads⟧ below the minimum thickness, often 1–1.5 mm, and always both pads of the same caliper.', it: 'Sostituisci le pastiglie sotto lo spessore minimo, spesso 1–1,5 mm, e sempre entrambe quelle della stessa pinza.' },
      { t: 'The ⟦brake fluid⟧ absorbs moisture, which lowers its boiling point, so it is replaced about every 2 years.', it: 'Il liquido dei freni assorbe umidità, che ne abbassa il punto di ebollizione, quindi si sostituisce circa ogni 2 anni.' },
      { t: '⟦ABS⟧ prevents wheel locking: if you feel the pulsation, do not release the lever; with the ABS light on, brakes still work.', it: 'L’ABS impedisce il bloccaggio delle ruote: se senti la pulsazione non rilasciare la leva; se la spia ABS resta accesa, i freni funzionano comunque.' },
      { t: 'On a 180/55 ZR17 tyre, 180 is the width in mm, 55 the ⟦aspect ratio⟧ and 17 the rim diameter in inches.', it: 'Su un pneumatico 180/55 ZR17, 180 è la larghezza in mm, 55 il rapporto d’aspetto e 17 il diametro del cerchio in pollici.' },
      { t: 'The ⟦DOT code⟧ gives week and year of production, the legal minimum tread is 1.6 mm, and ⟦tyre pressure⟧ is checked cold.', it: 'Il codice DOT indica settimana e anno di fabbricazione, il battistrada minimo legale è 1,6 mm e la pressione si controlla a freddo.' }
    ],
    gloss: [
      { w: 'kinetic energy', it: 'energia cinetica' },
      { w: 'caliper', it: 'pinza del freno' },
      { w: 'brake pads', it: 'pastiglie dei freni' },
      { w: 'brake fluid', it: 'liquido dei freni' },
      { w: 'ABS', it: 'antibloccaggio dei freni' },
      { w: 'aspect ratio', it: 'rapporto d’aspetto (altezza fianco / larghezza)' },
      { w: 'DOT code', it: 'codice DOT con settimana e anno' },
      { w: 'tyre pressure', it: 'pressione del pneumatico' },
      { w: 'disc', it: 'disco del freno' },
      { w: 'tubeless', it: 'senza camera d’aria' }
    ]
  });

  A('moto-manutenzione-programmata', {
    title: { t: 'Scheduled maintenance and small repairs', it: 'Manutenzione programmata e piccole riparazioni' },
    sum: [
      { t: 'Regular maintenance gives safety, reliability and lower costs, and the ⟦owner’s manual⟧ lists intervals and torque values.', it: 'La manutenzione regolare dà sicurezza, affidabilità e costi minori, e il libretto d’uso elenca intervalli e coppie di serraggio.' },
      { t: 'Before each ride check tyres, brakes, lights, oil and chain; a ⟦service⟧ is typically every 6000–12000 km or yearly.', it: 'Prima di ogni uscita controlla pneumatici, freni, luci, olio e catena; il tagliando è tipicamente ogni 6000–12000 km o annuale.' },
      { t: 'In the garage use a stable surface and a stand, work on a cold engine, and disconnect the battery’s negative pole first.', it: 'In garage usa una superficie stabile e un cavalletto, lavora a motore freddo e scollega prima il polo negativo della batteria.' },
      { t: 'Tighten important screws with a ⟦torque wrench⟧, and take used oil to a collection centre.', it: 'Serra le viti importanti con la chiave dinamometrica e porta l’olio usato a un centro di raccolta.' },
      { t: 'Lubricate the ⟦chain⟧ every 500–1000 km and check the slack, typically 25–35 mm; replace chain, sprocket and crown together.', it: 'Lubrifica la catena ogni 500–1000 km e controlla il gioco, tipicamente 25–35 mm; sostituisci insieme catena, pignone e corona.' },
      { t: 'Never put grease or oil on discs or ⟦brake pads⟧, and after any brake work press the lever before riding.', it: 'Mai grasso o olio su dischi e pastiglie, e dopo qualsiasi lavoro ai freni premi la leva prima di partire.' },
      { t: 'Go straight to the ⟦workshop⟧ if the brake is spongy, the oil light is on, or after a fall: safety before saving.', it: 'Vai subito in officina se il freno è spugnoso, la spia olio è accesa o dopo una caduta: la sicurezza viene prima del risparmio.' }
    ],
    gloss: [
      { w: 'owner’s manual', it: 'libretto uso e manutenzione' },
      { w: 'service', it: 'tagliando' },
      { w: 'torque wrench', it: 'chiave dinamometrica' },
      { w: 'chain', it: 'catena' },
      { w: 'brake pads', it: 'pastiglie dei freni' },
      { w: 'workshop', it: 'officina' },
      { w: 'oil filter', it: 'filtro dell’olio' },
      { w: 'slack', it: 'gioco della catena' },
      { w: 'spark plug', it: 'candela' },
      { w: 'maintenance log', it: 'registro degli interventi' }
    ]
  });

  A('moto-diagnostica-problemi', {
    title: { t: 'Diagnostics and common problems', it: 'Diagnostica e problemi comuni' },
    sum: [
      { t: 'Do not change parts at random: use a method of ⟦symptom⟧, ⟦hypothesis⟧, test, repair and check.', it: 'Non cambiare pezzi a caso: usa un metodo di sintomo, ipotesi, test, intervento e verifica.' },
      { t: 'Describe the symptom precisely, change one thing at a time, and start with the free checks like fuel, fuses and battery.', it: 'Descrivi il sintomo con precisione, cambia una cosa alla volta e parti dai controlli gratuiti come carburante, fusibili e batteria.' },
      { t: 'If the ⟦starter motor⟧ does not turn, think electrical; if it turns without starting, think fuel, spark or air.', it: 'Se il motorino non gira, pensa a un problema elettrico; se gira ma il motore non parte, pensa a benzina, scintilla o aria.' },
      { t: 'For a stall or loss of power, check in this order: fuel, air, ⟦spark⟧; black smoke means a rich mixture.', it: 'Per uno spegnimento o un calo di potenza, controlla in quest’ordine: carburante, aria, scintilla; il fumo nero indica miscela ricca.' },
      { t: 'A new noise is a free warning: stop safely and listen; do not restart if it is deep and metallic.', it: 'Un rumore nuovo è un avviso gratuito: fermati in sicurezza e ascolta, e non riavviare se è metallico e profondo dal motore.' },
      { t: 'A red ⟦warning light⟧ while riding means slow down gradually and stop in a safe place; never cover a warning light.', it: 'Una spia rossa durante la guida significa rallentare gradualmente e fermarsi in un luogo sicuro; non coprire mai una spia.' },
      { t: 'If simple checks find nothing, the workshop can read the ECU ⟦fault codes⟧; never ride with doubtful brakes or steering.', it: 'Se i controlli semplici non trovano nulla, l’officina può leggere i codici di errore della centralina; non guidare mai con freni o sterzo dubbi.' }
    ],
    gloss: [
      { w: 'symptom', it: 'sintomo' },
      { w: 'hypothesis', it: 'ipotesi' },
      { w: 'starter motor', it: 'motorino di avviamento' },
      { w: 'spark', it: 'scintilla' },
      { w: 'warning light', it: 'spia del cruscotto' },
      { w: 'fault codes', it: 'codici di errore della centralina' },
      { w: 'fuse', it: 'fusibile' },
      { w: 'rich mixture', it: 'miscela ricca' },
      { w: 'stall', it: 'spegnersi' },
      { w: 'shimmy', it: 'oscillazioni del manubrio' }
    ]
  });

  A('moto-fisica-della-curva', {
    title: { t: 'The physics of cornering: lean angle', it: 'Fisica della curva: angolo di piega' },
    sum: [
      { t: 'In a bend the bike needs a ⟦centripetal force⟧ towards the centre, supplied only by tyre friction; ⟦lateral acceleration⟧ is v²/r.', it: 'In curva la moto ha bisogno di una forza centripeta verso il centro, fornita solo dall’attrito dei pneumatici; l’accelerazione laterale è v²/r.' },
      { t: 'The bike leans inwards because the lean makes the resultant force pass through the ⟦centre of gravity⟧.', it: 'La moto si piega verso l’interno perché l’inclinazione fa passare la risultante delle forze dal baricentro.' },
      { t: 'The ⟦lean angle⟧ follows tan θ = v²/(g·r), so it depends on speed and radius, not on mass.', it: 'L’angolo di piega segue tan θ = v²/(g·r), quindi dipende da velocità e raggio, non dalla massa.' },
      { t: 'Doubling the speed quadruples the tangent; at a radius of 50 m, 60 km/h needs about 29.5° of lean.', it: 'Raddoppiare la velocità quadruplica la tangente; su un raggio di 50 m, 60 km/h richiedono circa 29,5° di piega.' },
      { t: 'The maximum lean depends only on the ⟦friction coefficient⟧, and halving the grip cuts the limit speed by about 29%.', it: 'La piega massima dipende solo dal coefficiente d’aderenza, e dimezzare l’aderenza toglie circa il 29% della velocità limite.' },
      { t: 'Braking or accelerating in a bend uses part of the same ⟦grip reserve⟧: the more you lean, the less remains to brake.', it: 'Frenare o accelerare in piega consuma una parte della stessa riserva d’aderenza: più sei piegato, meno ne resta per frenare.' },
      { t: 'The formulas explain physics, not choose a speed; in normal use keep the lean well below 20–25° to keep a reserve.', it: 'Le formule spiegano la fisica, non scelgono una velocità; nell’uso normale tieni la piega ben sotto 20–25° per conservare una riserva.' }
    ],
    gloss: [
      { w: 'centripetal force', it: 'forza centripeta' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'lean angle', it: 'angolo di piega' },
      { w: 'friction coefficient', it: 'coefficiente d’aderenza' },
      { w: 'grip reserve', it: 'riserva d’aderenza' },
      { w: 'lateral acceleration', it: 'accelerazione laterale' },
      { w: 'radius', it: 'raggio della curva' },
      { w: 'resultant force', it: 'forza risultante' },
      { w: 'tangent', it: 'tangente' },
      { w: 'limit speed', it: 'velocità limite' }
    ]
  });

  A('moto-giroscopio-e-controsterzo', {
    title: { t: 'Gyroscope and countersteering', it: 'Giroscopio e controsterzo' },
    sum: [
      { t: 'A spinning wheel has ⟦angular momentum⟧, which grows linearly with speed and opposes changes in the direction of its axis.', it: 'Una ruota che gira ha un momento angolare, che cresce linearmente con la velocità e si oppone ai cambi di direzione del suo asse.' },
      { t: 'In ⟦precession⟧, a torque on a gyroscope makes it turn about an axis perpendicular to both the torque and the momentum.', it: 'Nella precessione, un momento applicato a un giroscopio lo fa ruotare attorno a un asse perpendicolare al momento e al momento angolare.' },
      { t: 'The ⟦gyroscopic effect⟧ is comparable but not dominant: a motorcycle is not steered by the gyroscope.', it: 'L’effetto giroscopico è comparabile ma non dominante: la moto non si governa con il giroscopio.' },
      { t: 'To start a right bend at speed, push the right grip forward: this is ⟦countersteering⟧, and the bike leans to the right.', it: 'Per iniziare una curva a destra a velocità sostenuta, spingi in avanti la manopola destra: è il controsterzo, e la moto si piega a destra.' },
      { t: 'It is the only physical way to lean the bike at normal speed; below about 20–30 km/h you lean with your body.', it: 'È l’unico modo fisico per far piegare la moto a velocità normale; sotto circa 20–30 km/h si piega con il corpo.' },
      { t: 'A bike stays upright thanks to three contributions: ⟦trail⟧, the gyroscopic effect and mass distribution.', it: 'La moto sta in piedi grazie a tre contributi: avancorsa, effetto giroscopico e distribuzione delle masse.' },
      { t: 'If a ⟦wobble⟧ appears, do not brake with the front or fight the bars; ease off the throttle and keep soft arms.', it: 'Se compare un’oscillazione di sterzo, non frenare con l’anteriore né opporti al manubrio; rilascia gradualmente il gas e tieni le braccia morbide.' }
    ],
    gloss: [
      { w: 'angular momentum', it: 'momento angolare' },
      { w: 'precession', it: 'precessione' },
      { w: 'gyroscopic effect', it: 'effetto giroscopico' },
      { w: 'countersteering', it: 'controsterzo' },
      { w: 'trail', it: 'avancorsa' },
      { w: 'wobble', it: 'oscillazione rapida dello sterzo (shimmy)' },
      { w: 'weave', it: 'serpeggio, oscillazione lenta di tutta la moto' },
      { w: 'lean', it: 'piega, inclinazione' },
      { w: 'tank slapper', it: 'wobble forte che porta il manubrio a fondo corsa' },
      { w: 'centre of gravity', it: 'baricentro' }
    ]
  });

  A('moto-aderenza-e-cerchio', {
    title: { t: 'Grip and the grip circle', it: 'Aderenza e cerchio di aderenza' },
    sum: [
      { t: 'All forces pass through a ⟦contact patch⟧ the size of a palm; the maximum force is limited by the ⟦friction coefficient⟧ μ.', it: 'Tutte le forze passano da un’impronta grande quanto un palmo, e la forza massima è limitata dal coefficiente d’aderenza μ.' },
      { t: 'Typical μ is about 0.9–1.2 on warm dry asphalt, 0.5–0.7 on wet, and 0.1–0.4 or less on dirt, leaves or paint.', it: 'Il μ tipico è circa 0,9–1,2 su asfalto asciutto caldo, 0,5–0,7 sul bagnato e 0,1–0,4 o meno su sporco, foglie o vernice.' },
      { t: 'If the deceleration halves, the ⟦braking distance⟧ doubles, and the distance grows with the square of the speed.', it: 'Se la decelerazione si dimezza, lo spazio di frenata raddoppia, e lo spazio cresce con il quadrato della velocità.' },
      { t: 'Grip is a single reserve shared by all forces, the ⟦grip circle⟧: you cannot have the maximum of both braking and cornering.', it: 'L’aderenza è una riserva unica condivisa da tutte le forze, il cerchio d’aderenza: non si può avere il massimo sia di frenata sia di curva.' },
      { t: 'On a wet road (μ = 0.6), the braking reserve in the same bend drops from 0.85 g to 0.28 g.', it: 'Sul bagnato (μ = 0,6) la riserva di frenata nella stessa curva scende da 0,85 g a 0,28 g.' },
      { t: 'A front slide causes a ⟦lowside⟧ that is almost never recoverable; a rear slide can end in a violent ⟦highside⟧.', it: 'Una scivolata dell’anteriore causa un lowside quasi mai recuperabile; una del posteriore può finire in un violento highside.' },
      { t: 'On the road, brake upright before the bend, release as you lean, and keep wide margins: numbers are not targets.', it: 'Su strada frena a moto dritta prima della curva, rilascia mentre inclini e tieni margini ampi: i numeri non sono obiettivi.' }
    ],
    gloss: [
      { w: 'contact patch', it: 'impronta di contatto' },
      { w: 'friction coefficient', it: 'coefficiente d’aderenza (μ)' },
      { w: 'braking distance', it: 'spazio di frenata' },
      { w: 'grip circle', it: 'cerchio di aderenza' },
      { w: 'lowside', it: 'caduta di lato' },
      { w: 'highside', it: 'caduta con il pilota catapultato' },
      { w: 'safety margin', it: 'margine di sicurezza' },
      { w: 'deceleration', it: 'decelerazione' },
      { w: 'lean', it: 'inclinazione, piega' },
      { w: 'reserve', it: 'riserva' }
    ]
  });

  A('moto-trasferimenti-di-carico', {
    title: { t: 'Load transfers: wheelie and stoppie', it: 'Trasferimenti di carico: impennata e stoppie' },
    sum: [
      { t: 'In braking the load moves between the wheels: the force acts on the ground, but inertia on the high ⟦centre of gravity⟧.', it: 'In frenata il carico si sposta tra le ruote: la forza agisce sul suolo, ma l’inerzia sul baricentro, che sta in alto.' },
      { t: 'The ⟦load transfer⟧ grows with mass, acceleration and height of the centre of gravity, and falls with the ⟦wheelbase⟧.', it: 'Il trasferimento di carico cresce con massa, accelerazione e altezza del baricentro, e diminuisce con l’interasse.' },
      { t: 'In the 280 kg example, braking at 0.5 g adds 600 N to the front and removes it from the rear.', it: 'Nell’esempio da 280 kg, frenare a 0,5 g aggiunge 600 N all’anteriore e li toglie al posteriore.' },
      { t: 'At 0.8 g the rear carries only 18% of the load, so it locks easily; the front brake is far more effective.', it: 'A 0,8 g il posteriore porta solo il 18% del carico, quindi si blocca facilmente e il freno anteriore è molto più efficace.' },
      { t: 'A ⟦stoppie⟧ starts when the rear load falls to zero, and a ⟦wheelie⟧ starts when the front load falls to zero.', it: 'Lo stoppie inizia quando il carico posteriore si annulla, l’impennata quando si annulla quello anteriore.' },
      { t: 'A lower centre of gravity makes wheelies harder: the limit is 1.34 g at 0.50 m height, 1.12 g at 0.60 m.', it: 'Un baricentro più basso rende l’impennata più difficile: il limite è 1,34 g a 0,50 m di altezza, 1,12 g a 0,60 m.' },
      { t: 'Under braking the fork ⟦dives⟧ and under acceleration the rear squats; squeeze the brake progressively, because these limits are physics, not targets.', it: 'In frenata la forcella affonda e in accelerazione il posteriore si abbassa; stringi il freno progressivamente, perché questi limiti sono fisica, non obiettivi.' }
    ],
    gloss: [
      { w: 'load transfer', it: 'trasferimento di carico' },
      { w: 'wheelbase', it: 'interasse' },
      { w: 'stoppie', it: 'sollevamento della ruota posteriore in frenata' },
      { w: 'wheelie', it: 'impennata' },
      { w: 'dives', it: 'affonda (la forcella in frenata)' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'squat', it: 'abbassamento del posteriore in accelerazione' },
      { w: 'progressive braking', it: 'frenata progressiva' },
      { w: 'inertia', it: 'inerzia' },
      { w: 'static load', it: 'carico statico' }
    ]
  });

  A('moto-geometria-avancorsa', {
    title: { t: 'Geometry: wheelbase, rake and trail', it: 'Geometria: interasse, inclinazione e avancorsa' },
    sum: [
      { t: 'Steering geometry is defined by four measures: ⟦wheelbase⟧, ⟦rake⟧, ⟦trail⟧ and ⟦offset⟧.', it: 'La geometria dello sterzo è definita da quattro quote: interasse, inclinazione del cannotto, avancorsa e offset.' },
      { t: 'Typical sport bikes have a rake of 23–25° and a trail of 90–105 mm, while choppers have 30–40° and 150–250 mm.', it: 'Le sportive tipiche hanno un’inclinazione di 23–25° e un’avancorsa di 90–105 mm, i chopper 30–40° e 150–250 mm.' },
      { t: 'Trail is a consequence of wheel radius, rake and offset: changing any of the three changes it.', it: 'L’avancorsa è una conseguenza di raggio, inclinazione e offset: cambiare uno dei tre la modifica.' },
      { t: 'More trail gives a stronger ⟦self-centring⟧ torque, so more stability in a straight line but a bike harder to lean.', it: 'Più avancorsa dà un momento di richiamo più forte, quindi più stabilità in rettilineo ma una moto più dura da piegare.' },
      { t: 'Less trail, a more vertical head and a short wheelbase give agility, but less stability at high speed.', it: 'Meno avancorsa, cannotto più verticale e interasse corto danno agilità, ma meno stabilità ad alta velocità.' },
      { t: 'A long wheelbase needs more ⟦steering angle⟧: at 50 m radius, 1.6° for a sport bike, 2.2° for a chopper.', it: 'Un interasse lungo richiede più angolo di sterzo: su un raggio di 50 m è 1,6° per una sportiva e 2,2° per un chopper.' },
      { t: 'No geometry is the best, it is a compromise; changing tyre size or forks alters it, so ask a qualified technician.', it: 'Nessuna geometria è la migliore, è un compromesso; cambiare taglia dei pneumatici o forcelle la altera, quindi rivolgiti a un tecnico qualificato.' }
    ],
    gloss: [
      { w: 'wheelbase', it: 'interasse' },
      { w: 'rake', it: 'inclinazione del cannotto di sterzo' },
      { w: 'trail', it: 'avancorsa' },
      { w: 'offset', it: 'scostamento tra asse di sterzo e perno ruota' },
      { w: 'self-centring', it: 'effetto di richiamo che riallinea la ruota' },
      { w: 'steering angle', it: 'angolo di sterzo' },
      { w: 'stability', it: 'stabilità' },
      { w: 'agility', it: 'maneggevolezza, agilità' },
      { w: 'chopper', it: 'moto con forcella lunga e inclinata' },
      { w: 'technician', it: 'tecnico' }
    ]
  });

  A('moto-baricentro-e-masse', {
    title: { t: 'Centre of gravity and masses', it: 'Baricentro e masse' },
    sum: [
      { t: 'The ⟦centre of gravity⟧ is the point where all the weight can be imagined, for the system bike, rider and load.', it: 'Il baricentro è il punto in cui si può pensare concentrato tutto il peso, per il sistema moto, pilota e carico.' },
      { t: 'You can find its position by weighing each wheel on a scale and using the ⟦weight distribution⟧ between front and rear.', it: 'Si trova la sua posizione pesando ciascuna ruota su una bilancia e usando la ripartizione dei pesi fra anteriore e posteriore.' },
      { t: 'A sport bike carries about 48–52% of its weight on the front, a touring bike about 45/55, and a cruiser about 40/60.', it: 'Una sportiva ha circa il 48–52% del peso sull’anteriore, una touring circa 45/55 e una cruiser circa 40/60.' },
      { t: 'The ⟦unsprung mass⟧ (wheels, tyres, brakes) must be small, so the wheel returns to the ground quickly and grip stays good.', it: 'La massa non sospesa (ruote, pneumatici, freni) deve essere piccola, così la ruota torna a terra in fretta e il grip resta buono.' },
      { t: 'The suspension frequency depends only on the ⟦sag⟧; road bikes have about 1.5–3 Hz, with a sag of 25–35% of travel.', it: 'La frequenza delle sospensioni dipende solo dal sag; sulle moto stradali è circa 1,5–3 Hz, con un sag del 25–35% dell’escursione.' },
      { t: 'Leaning the torso forward lowers the centre of gravity and loads the front; shifting inward lets the bike lean less.', it: 'Portare il busto in avanti abbassa il baricentro e carica l’anteriore; spostarsi verso l’interno fa piegare meno la moto.' },
      { t: 'A 70 kg ⟦passenger⟧ lowers the wheelie limit from 1.10 g to 0.86 g: raise the ⟦preload⟧, keep luggage low.', it: 'Un passeggero da 70 kg abbassa il limite di impennata da 1,10 g a 0,86 g: aumenta il precarico e tieni i bagagli bassi.' }
    ],
    gloss: [
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'weight distribution', it: 'ripartizione dei pesi' },
      { w: 'unsprung mass', it: 'massa non sospesa' },
      { w: 'sag', it: 'affondamento statico della sospensione' },
      { w: 'passenger', it: 'passeggero' },
      { w: 'preload', it: 'precarico' },
      { w: 'sprung mass', it: 'massa sospesa' },
      { w: 'wheelie', it: 'impennata' },
      { w: 'wheelbase', it: 'interasse' },
      { w: 'luggage', it: 'bagagli' }
    ]
  });

  A('moto-aerodinamica-della-moto', {
    title: { t: 'Motorcycle aerodynamics', it: 'Aerodinamica della moto' },
    sum: [
      { t: '⟦Aerodynamic drag⟧ grows with the square of speed, and ⟦CdA⟧ combines the drag coefficient and the frontal area.', it: 'La resistenza aerodinamica cresce con il quadrato della velocità, e il CdA combina il coefficiente di resistenza e l’area frontale.' },
      { t: 'A faired sport bike has a CdA of about 0.25–0.35 m², a naked 0.45–0.6 m²; the rider is about half the area.', it: 'Una sportiva carenata ha un CdA di circa 0,25–0,35 m², una naked 0,45–0,6 m², e il pilota è circa metà della superficie.' },
      { t: 'The power needed grows with the cube of speed: from 100 to 200 km/h it is multiplied by 8.', it: 'La potenza necessaria cresce con il cubo della velocità: da 100 a 200 km/h si moltiplica per 8.' },
      { t: '⟦Rolling resistance⟧ matters little: at 200 km/h it is only about 7% of the total, so aerodynamics dominates.', it: 'La resistenza al rotolamento conta poco: a 200 km/h è solo circa il 7% del totale, quindi domina l’aerodinamica.' },
      { t: 'Speed is relative to the air: a headwind of 20 km/h at 100 km/h raises the aerodynamic power by 1.73 times.', it: 'La velocità è relativa all’aria: con 20 km/h di vento contrario a 100 km/h, la potenza aerodinamica aumenta di 1,73 volte.' },
      { t: 'A ⟦fairing⟧ and a ⟦tuck⟧ position cut drag: tuck alone saves 10–20% of the CdA, so lowering CdA is like adding power.', it: 'La carenatura e la posizione raccolta riducono la resistenza: la sola posizione raccolta riduce il CdA del 10–20%, e ridurre il CdA vale quanto aggiungere potenza.' },
      { t: '⟦Winglets⟧ create downforce to reduce wheelies, but these are physical effects, not an invitation to speed on the road.', it: 'Le alette creano carico aerodinamico per ridurre l’impennata, ma sono effetti fisici, non un invito a spingere la velocità su strada.' }
    ],
    gloss: [
      { w: 'aerodynamic drag', it: 'resistenza aerodinamica' },
      { w: 'CdA', it: 'prodotto di coefficiente di resistenza e area frontale' },
      { w: 'rolling resistance', it: 'resistenza al rotolamento' },
      { w: 'fairing', it: 'carenatura' },
      { w: 'tuck', it: 'posizione raccolta dietro il cupolino' },
      { w: 'winglets', it: 'alette aerodinamiche' },
      { w: 'frontal area', it: 'area frontale' },
      { w: 'downforce', it: 'carico aerodinamico' },
      { w: 'headwind', it: 'vento contrario' },
      { w: 'windscreen', it: 'parabrezza' }
    ]
  });

  A('moto-pneumatici-moto', {
    title: { t: 'Motorcycle tyres', it: 'Pneumatici moto' },
    sum: [
      { t: 'A motorcycle tyre has a ⟦round profile⟧, because when the bike leans the contact moves towards the shoulder.', it: 'Il pneumatico moto ha un profilo tondo, perché quando la moto si inclina il contatto si sposta verso la spalla.' },
      { t: 'On a 120/70 ZR17 tyre, 120 is the width in mm, 70 the aspect ratio, 17 the rim diameter in inches.', it: 'In una marcatura come 120/70 ZR17, 120 è la larghezza in mm, 70 il rapporto d’aspetto e 17 il diametro del cerchio in pollici.' },
      { t: 'The ⟦contact patch⟧ is about the size of a palm per wheel, and grip depends also on compound, temperature and profile.', it: 'L’impronta di contatto è grande circa quanto un palmo per ruota, e l’aderenza dipende anche da mescola, temperatura e profilo.' },
      { t: 'A dual or triple ⟦compound⟧ puts a harder centre where the tyre wears most, and softer shoulders for grip in the lean.', it: 'La doppia o tripla mescola mette un centro più duro dove il pneumatico si consuma di più, e spalle più morbide per il grip in piega.' },
      { t: 'Each compound has a working temperature window, so ride gently on ⟦cold tyres⟧ until they warm up.', it: 'Ogni mescola ha una finestra di temperatura di lavoro, quindi guida dolcemente con pneumatici freddi finché non si scaldano.' },
      { t: 'Pressure rises with temperature (⟦Gay-Lussac’s law⟧), so check it cold and never deflate a hot tyre.', it: 'La pressione sale con la temperatura (legge di Gay-Lussac), quindi controllala a freddo e non sgonfiare mai un pneumatico caldo.' },
      { t: '⟦Slicks⟧ have no tread and are not approved for the road; on road tyres, the legal minimum tread is 1.6 mm.', it: 'Le slick non hanno scolpitura e non sono omologate per la strada; sulle gomme stradali, il battistrada minimo legale è 1,6 mm.' }
    ],
    gloss: [
      { w: 'round profile', it: 'profilo tondo' },
      { w: 'contact patch', it: 'impronta di contatto' },
      { w: 'compound', it: 'mescola' },
      { w: 'cold tyres', it: 'pneumatici freddi' },
      { w: 'Gay-Lussac’s law', it: 'legge di Gay-Lussac (P1/T1 = P2/T2)' },
      { w: 'slicks', it: 'gomme da pista senza scolpitura' },
      { w: 'camber thrust', it: 'spinta di camber' },
      { w: 'tread', it: 'battistrada' },
      { w: 'shoulder', it: 'spalla del pneumatico' },
      { w: 'wear indicator', it: 'indicatore di usura (TWI)' }
    ]
  });

  A('moto-track-day', {
    title: { t: 'Preparing a track day', it: 'Preparare un track day' },
    sum: [
      { t: 'A ⟦track day⟧ is a day on a closed circuit rented to amateurs: not a race, and the goal is to learn.', it: 'Un track day è una giornata su un circuito chiuso affittato a piloti amatori: non è una gara e l’obiettivo è imparare.' },
      { t: 'What you learn there applies only on track: sport riding must never be transferred to the road.', it: 'Ciò che si impara lì vale solo in pista: la guida sportiva non va mai trasferita su strada.' },
      { t: 'Riders are split into groups by level, with turns of 15–25 minutes; when in doubt, choose the slower group.', it: 'I piloti sono divisi in gruppi per livello, con turni di 15–25 minuti; nel dubbio scegli il gruppo più lento.' },
      { t: 'A standard road bike in good order is fine: check brakes, chain, oil and bolts, and never disable safety systems.', it: 'Una moto stradale di serie in ordine va bene: controlla freni, catena, olio e bulloneria, e non disattivare mai i sistemi di sicurezza.' },
      { t: 'A bike that fails the ⟦technical check⟧ does not ride; the first laps are slow, as ⟦cold tyres⟧ grip less.', it: 'Se la moto non supera il controllo tecnico, non si gira, e i primi giri sono lenti perché le gomme fredde hanno meno aderenza.' },
      { t: 'Protection includes a ⟦leather suit⟧, a ⟦back protector⟧, a full-face helmet, gloves and boots, and the helmet is replaced after a fall.', it: 'La protezione comprende tuta in pelle, paraschiena, casco integrale, guanti e stivali, e il casco si sostituisce dopo una caduta.' },
      { t: 'Listen to the ⟦briefing⟧ and know the ⟦flags⟧: yellow means danger and no overtaking, red means stop, chequered means end of session.', it: 'Ascolta il briefing e conosci le bandiere: gialla significa pericolo e divieto di sorpasso, rossa stop, a scacchi fine turno.' }
    ],
    gloss: [
      { w: 'track day', it: 'giornata in pista per amatori' },
      { w: 'technical check', it: 'controllo tecnico' },
      { w: 'cold tyres', it: 'pneumatici freddi' },
      { w: 'leather suit', it: 'tuta in pelle' },
      { w: 'back protector', it: 'paraschiena' },
      { w: 'briefing', it: 'riunione prima dei turni' },
      { w: 'flags', it: 'bandiere' },
      { w: 'run-off area', it: 'via di fuga' },
      { w: 'marshals', it: 'commissari di percorso' },
      { w: 'slower group', it: 'gruppo più lento' }
    ]
  });

  A('moto-body-position', {
    title: { t: 'Rider posture and body position', it: 'Posizione e body position' },
    sum: [
      { t: 'The rider is often a quarter of the total mass, so moving the body shifts the ⟦centre of gravity⟧.', it: 'Il pilota è spesso un quarto della massa totale, quindi spostare il corpo sposta il baricentro.' },
      { t: '⟦Body position⟧ reduces the ⟦lean angle⟧ of the bike, keeps it stable and lets you look far ahead.', it: 'La body position riduce l’angolo di piega della moto, la mantiene stabile e ti permette di guardare lontano.' },
      { t: 'This technique is learned on track with an instructor; on the road the normal seated position is the correct one.', it: 'Questa tecnica si impara in pista con un istruttore; su strada la posizione normale in sella è quella corretta.' },
      { t: 'Start from a base position: relaxed spine, soft elbows, light grip, knees on the tank and feet on the ⟦pegs⟧.', it: 'Parti da una posizione base: colonna rilassata, gomiti morbidi, presa leggera, ginocchia sul serbatoio e piedi sulle pedane.' },
      { t: 'Move your body before the corner, not during it: hips inward, torso low, outside knee on the tank, arms relaxed.', it: 'Sposta il corpo prima della curva, non durante: bacino all’interno, busto basso, ginocchio esterno sul serbatoio, braccia rilassate.' },
      { t: 'Touching the ground with the knee is a consequence, not a goal, and you should only use proper ⟦sliders⟧.', it: 'Toccare con il ginocchio è una conseguenza, non un obiettivo, e si usano solo gli slider appropriati.' },
      { t: 'Turn your head towards the ⟦apex⟧ and the exit, and fix one error per session, such as stiff arms or late shifting.', it: 'Gira la testa verso la corda e l’uscita, e correggi un solo errore per turno, come le braccia rigide o lo spostamento tardivo.' }
    ],
    gloss: [
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'body position', it: 'posizione del corpo in sella' },
      { w: 'lean angle', it: 'angolo di piega' },
      { w: 'pegs', it: 'pedane' },
      { w: 'sliders', it: 'protezioni di ginocchio che sfiorano il suolo' },
      { w: 'apex', it: 'punto di corda' },
      { w: 'stiff arms', it: 'braccia rigide' },
      { w: 'instructor', it: 'istruttore' },
      { w: 'tank', it: 'serbatoio' },
      { w: 'hips', it: 'bacino' }
    ]
  });

  A('moto-frenata-trail-braking', {
    title: { t: 'Limit braking and trail braking', it: 'Frenata al limite e trail braking' },
    sum: [
      { t: 'On track, braking is where most time is gained and lost; a good braking is late but constant, not sudden.', it: 'In pista la frenata è dove si guadagna e si perde più tempo; una buona frenata è tardiva ma costante, non brusca.' },
      { t: 'The distance grows with the square of the speed: doubling the speed needs four times the space.', it: 'La distanza cresce con il quadrato della velocità: raddoppiare la velocità richiede quattro volte lo spazio.' },
      { t: 'Under braking the ⟦load transfer⟧ puts weight on the front, which does 70–90% of the work; the limit is the ⟦stoppie⟧.', it: 'In frenata il trasferimento di carico mette peso sull’anteriore, che fa il 70–90% del lavoro; il limite è lo stoppie.' },
      { t: 'The ideal braking has three phases: a gradual first squeeze, steady maximum pressure while upright, and a ⟦progressive release⟧.', it: 'La frenata ideale ha tre fasi: una prima stretta graduale, pressione massima costante a moto dritta e un rilascio progressivo.' },
      { t: 'The ⟦grip circle⟧ explains ⟦trail braking⟧: keep braking as you start to lean, with less brake as the lean grows.', it: 'Il cerchio d’aderenza spiega il trail braking: continua a frenare mentre inizi a piegare, con meno freno man mano che la piega cresce.' },
      { t: 'Choose fixed markers for the ⟦braking point⟧ and move it later by 5–10 m at a time, if braking was clean.', it: 'Scegli riferimenti fissi per il punto di staccata e anticipalo di soli 5–10 m per volta, se la frenata precedente è stata pulita.' },
      { t: '⟦ABS⟧ is a safety net: if it keeps intervening you are over the limit; all this is for the track only.', it: 'L’ABS è una rete di sicurezza: se interviene di continuo sei oltre il limite; tutto questo vale per la pista, mai per la strada.' }
    ],
    gloss: [
      { w: 'load transfer', it: 'trasferimento di carico' },
      { w: 'stoppie', it: 'sollevamento del posteriore in frenata' },
      { w: 'progressive release', it: 'rilascio graduale della leva' },
      { w: 'grip circle', it: 'cerchio d’aderenza' },
      { w: 'trail braking', it: 'frenare mentre si inizia a piegare' },
      { w: 'braking point', it: 'punto di staccata' },
      { w: 'ABS', it: 'antibloccaggio' },
      { w: 'front brake', it: 'freno anteriore' },
      { w: 'markers', it: 'riferimenti fissi a bordo pista' },
      { w: 'deceleration', it: 'decelerazione' }
    ]
  });

  A('moto-traiettorie-e-corda', {
    title: { t: 'Racing lines and apexes', it: 'Traiettorie e punti di corda' },
    sum: [
      { t: 'A line is the path through a bend, with an ⟦entry⟧, an ⟦apex⟧ and an exit.', it: 'Una traiettoria è il percorso nella curva, con ingresso, punto di corda e uscita.' },
      { t: 'A larger ⟦radius⟧ allows a higher speed: doubling the radius multiplies the speed by about 1.41.', it: 'Un raggio maggiore permette una velocità più alta: raddoppiare il raggio moltiplica la velocità per circa 1,41.' },
      { t: 'In a 90° bend (inner radius 20 m, track 12 m wide) the wide line allows 88 km/h instead of 57.', it: 'In una curva a 90° con raggio interno di 20 m e pista larga 12 m, la linea di apertura consente 88 km/h invece di 57.' },
      { t: 'Choose the line backwards from the exit: if a long straight follows, the speed at the exit matters most.', it: 'Scegli la linea partendo dall’uscita: se segue un lungo rettilineo, conta soprattutto la velocità all’uscita.' },
      { t: 'A ⟦late apex⟧ lets the bike straighten earlier and open the throttle sooner, at the cost of a slower entry.', it: 'Una corda tardiva fa raddrizzare prima la moto e riaprire prima il gas, al prezzo di un ingresso più lento.' },
      { t: 'Use ⟦reference points⟧ and look at the apex and the exit, because ⟦repeatability⟧ is worth more than one exceptional lap.', it: 'Usa i riferimenti e guarda la corda e l’uscita, perché la ripetibilità vale più di un singolo giro eccezionale.' },
      { t: 'These lines use the whole track and are never transferred to the road, where you stay in your own lane.', it: 'Queste linee usano tutta la pista e non si trasferiscono mai su strada, dove si resta nella propria corsia.' }
    ],
    gloss: [
      { w: 'entry', it: 'ingresso in curva' },
      { w: 'apex', it: 'punto di corda' },
      { w: 'radius', it: 'raggio' },
      { w: 'late apex', it: 'corda tardiva' },
      { w: 'reference points', it: 'riferimenti visivi' },
      { w: 'repeatability', it: 'ripetibilità' },
      { w: 'racing line', it: 'linea da pista' },
      { w: 'exit', it: 'uscita di curva' },
      { w: 'kerb', it: 'cordolo' },
      { w: 'straight', it: 'rettilineo' }
    ]
  });

  A('moto-gas-e-uscita', {
    title: { t: 'Throttle and corner exit', it: 'Il gas e l’uscita di curva' },
    sum: [
      { t: 'Lap time is made mostly at the exit, because the ⟦exit speed⟧ carries over the whole next straight.', it: 'Il tempo del giro si fa soprattutto in uscita, perché la velocità d’uscita si porta per tutto il rettilineo successivo.' },
      { t: 'The exit is where the ⟦throttle⟧ comes in and loads the rear, so the keyword is gradualness.', it: 'L’uscita è dove entra in gioco il gas e si carica il posteriore, quindi la parola chiave è gradualità.' },
      { t: 'Avoid step-like openings: throttle is like lean in reverse, so more lean means less throttle.', it: 'Evita aperture a gradini: il gas è come la piega al contrario, quindi più piega significa meno gas.' },
      { t: 'In the ⟦grip circle⟧, a large lean uses almost all grip for cornering, so open the throttle as the bike rises.', it: 'Nel cerchio d’aderenza, a piega elevata quasi tutta l’aderenza è usata dalla curva, quindi apri il gas man mano che la moto si rialza.' },
      { t: 'At low lean the limit is no longer grip but the ⟦wheelie⟧, the lifting of the front wheel.', it: 'A piega bassa il limite non è più l’aderenza, ma l’impennata, cioè il sollevamento dell’anteriore.' },
      { t: 'If the rear slides, do not shut the throttle suddenly, because of the ⟦highside⟧ risk; reduce it gradually.', it: 'Se il posteriore scivola, non chiudere di colpo il gas per il rischio di highside; riducilo gradualmente.' },
      { t: '⟦Traction control⟧ cuts torque when it detects slip, but it does not create grip, and it is never tampered with.', it: 'Il controllo di trazione riduce la coppia quando rileva slittamento, ma non crea aderenza e non si manomette mai.' }
    ],
    gloss: [
      { w: 'exit speed', it: 'velocità all’uscita di curva' },
      { w: 'throttle', it: 'manopola del gas' },
      { w: 'grip circle', it: 'cerchio d’aderenza' },
      { w: 'wheelie', it: 'impennata' },
      { w: 'highside', it: 'caduta con il pilota catapultato' },
      { w: 'traction control', it: 'controllo di trazione' },
      { w: 'wheelie control', it: 'controllo di impennata' },
      { w: 'slip', it: 'slittamento' },
      { w: 'lean', it: 'piega' },
      { w: 'rear wheel', it: 'ruota posteriore' }
    ]
  });

  A('moto-cambio-e-freno-motore', {
    title: { t: 'Gearbox, downshifting and engine braking', it: 'Cambio, scalata e freno motore' },
    sum: [
      { t: 'On track the gearbox keeps the revs in the useful band: upshift near maximum power, downshift while braking.', it: 'In pista il cambio tiene i giri nella fascia utile: si sale vicino alla potenza massima e si scala in frenata.' },
      { t: 'Choose the ⟦corner gear⟧ before the corner, because shifting in the middle of the lean unsettles the bike.', it: 'La marcia di curva si sceglie prima della curva, perché cambiare a metà piega scompone la moto.' },
      { t: 'At 100 km/h the revs are about 7720 in second, 6300 in third and 5280 in fourth.', it: 'A 100 km/h i giri sono circa 7720 in 2ª, 6300 in 3ª e 5280 in 4ª.' },
      { t: 'When you downshift the engine must rev up; releasing the ⟦clutch⟧ without matching makes the rear wheel slow down suddenly and hop.', it: 'Quando scali il motore deve salire di giri; rilasciare la frizione senza adeguarli fa rallentare di colpo la ruota posteriore e la fa saltellare.' },
      { t: 'A ⟦slipper clutch⟧ and a ⟦blip⟧ of throttle with the clutch pulled help, and an auto-blipper can do it for you.', it: 'Una frizione antisaltellamento e un colpo di gas con la frizione tirata aiutano, e un auto-blipper può farlo al posto tuo.' },
      { t: '⟦Engine braking⟧ is worth little compared to the brakes in hard braking, about 0.14–0.34 g, but it affects rear stability.', it: 'Il freno motore vale poco rispetto ai freni in frenata forte, circa 0,14–0,34 g, ma incide sulla stabilità del posteriore.' },
      { t: 'Choose the highest gear that gives a crisp throttle response at the exit; a ⟦quickshifter⟧ is for upshifts at full throttle.', it: 'Scegli la marcia più alta che dà una risposta franca al gas in uscita; il quickshifter serve per salire di marcia a pieno gas.' }
    ],
    gloss: [
      { w: 'corner gear', it: 'marcia di curva' },
      { w: 'clutch', it: 'frizione' },
      { w: 'slipper clutch', it: 'frizione antisaltellamento' },
      { w: 'blip', it: 'colpo di gas in scalata' },
      { w: 'engine braking', it: 'freno motore' },
      { w: 'quickshifter', it: 'cambio elettronico senza frizione' },
      { w: 'rev limiter', it: 'limitatore di giri' },
      { w: 'downshift', it: 'scalare' },
      { w: 'overall ratio', it: 'rapporto complessivo' },
      { w: 'rev counter', it: 'contagiri' }
    ]
  });

  A('moto-gomme-e-temperature', {
    title: { t: 'Managing tyres and temperatures', it: 'Gestione di gomme e temperature' },
    sum: [
      { t: 'Tyre grip depends on temperature, and there is a working ⟦window⟧: too cold it is hard, too hot it wears.', it: 'L’aderenza della gomma dipende dalla temperatura, e c’è una finestra di funzionamento: troppo fredda è dura, troppo calda si consuma.' },
      { t: 'The ⟦warm-up⟧ is the most dangerous phase, so the first laps are always slow.', it: 'Il riscaldamento è la fase più pericolosa, quindi i primi giri si fanno sempre piano.' },
      { t: 'Warm the tyres gradually with progressive braking and acceleration; ⟦tyre warmers⟧ cool quickly, within 2–3 minutes.', it: 'Scalda le gomme gradualmente con frenate e accelerazioni progressive; le termocoperte si raffreddano in fretta, entro 2–3 minuti.' },
      { t: 'Pressure rises with temperature: 2.20 bar cold becomes about 2.58 bar hot, so correct by small steps of 0.05–0.1 bar.', it: 'La pressione sale con la temperatura: 2,20 bar a freddo diventano circa 2,58 bar a caldo, quindi correggi a piccoli passi di 0,05–0,1 bar.' },
      { t: 'Overheating shows as ⟦graining⟧ and ⟦blistering⟧, and a cold tyre gives no feedback and understeer.', it: 'Il surriscaldamento si vede come graining e blistering, e una gomma fredda non dà feedback e sottosterza.' },
      { t: '⟦Degradation⟧ makes lap times worse by 0.12 s per lap in the model, so a steady pace is better.', it: 'Il degrado peggiora i tempi di 0,12 s per giro nel modello, quindi è meglio un ritmo costante.' },
      { t: 'Cords, cuts, bulges or irregular wear mean replacement; in the wet, braking from 100 km/h goes from 39 m to 79 m.', it: 'Cordini, tagli, rigonfiamenti o usura irregolare significano sostituire il pneumatico; sul bagnato la frenata da 100 km/h passa da 39 m a 79 m.' }
    ],
    gloss: [
      { w: 'window', it: 'finestra di temperatura di funzionamento' },
      { w: 'warm-up', it: 'riscaldamento' },
      { w: 'tyre warmers', it: 'termocoperte' },
      { w: 'graining', it: 'granulosità della gomma surriscaldata' },
      { w: 'degradation', it: 'degrado, perdita di prestazione' },
      { w: 'cold pressure', it: 'pressione a freddo' },
      { w: 'blistering', it: 'bolle sulla gomma' },
      { w: 'slick', it: 'gomma da pista senza scolpitura' },
      { w: 'compound', it: 'mescola' },
      { w: 'understeer', it: 'sottosterzo' }
    ]
  });

  A('moto-kart-e-auto-in-pista', {
    title: { t: 'Karts and cars on track', it: 'Kart e auto in pista' },
    sum: [
      { t: 'Bikes, karts and cars share the same physics: the ⟦grip circle⟧, ⟦load transfer⟧, the line and vision.', it: 'Moto, kart e auto condividono la stessa fisica: il cerchio dell’aderenza, il trasferimento di carico, la linea e la visione.' },
      { t: 'A kart has no suspension, a rigid frame and direct steering, while a car has four wheels, suspension and a differential.', it: 'Il kart non ha sospensioni, ha un telaio rigido e lo sterzo diretto, mentre l’auto ha quattro ruote, sospensioni e differenziale.' },
      { t: '⟦Understeer⟧ means the front loses grip first and the car runs wide; ⟦oversteer⟧ means the rear loses grip first.', it: 'Il sottosterzo significa che l’anteriore perde aderenza per primo e l’auto allarga; il sovrasterzo che il posteriore perde aderenza per primo.' },
      { t: 'To fix understeer reduce the steering and ease the throttle; for oversteer look where you want to go and dose the throttle.', it: 'Per correggere il sottosterzo riduci lo sterzo e il gas; per il sovrasterzo guarda dove vuoi andare e dosa il gas.' },
      { t: 'In braking a car moves about 23% of its weight forward, a bike about 49%, so the bike is more sensitive.', it: 'In frenata un’auto trasferisce circa il 23% del peso sull’anteriore, una moto circa il 49%, quindi la moto è più sensibile.' },
      { t: '⟦Trail braking⟧ helps the car rotate, but releasing the pedal suddenly can cause oversteer on entry.', it: 'Il trail braking aiuta la rotazione dell’auto, ma rilasciare di colpo il pedale può causare sovrasterzo in ingresso.' },
      { t: 'The ⟦kart⟧ is a good school; step up to cars gradually with instructors, and only on the track.', it: 'Il kart è una buona scuola, e si passa alle auto gradualmente con istruttori; tutto questo vale solo per la pista.' }
    ],
    gloss: [
      { w: 'grip circle', it: 'cerchio dell’aderenza' },
      { w: 'load transfer', it: 'trasferimento di carico' },
      { w: 'understeer', it: 'sottosterzo' },
      { w: 'oversteer', it: 'sovrasterzo' },
      { w: 'trail braking', it: 'frenare mentre si inizia a sterzare' },
      { w: 'kart', it: 'kart' },
      { w: 'differential', it: 'differenziale' },
      { w: 'suspension', it: 'sospensioni' },
      { w: 'steering', it: 'sterzo' },
      { w: 'instructors', it: 'istruttori' }
    ]
  });

  A('moto-preparazione-del-pilota', {
    title: { t: 'Physical and mental preparation of the rider', it: 'Preparazione fisica e mentale del pilota' },
    sum: [
      { t: 'A session of 20 minutes in leathers at 30 °C is physical work, with high heart rate, heat and constant concentration.', it: 'Un turno da 20 minuti in tuta di pelle a 30 °C è un lavoro fisico, con frequenza cardiaca alta, caldo e concentrazione continua.' },
      { t: '⟦Fatigue⟧ reduces precision before the rider notices, so stopping when tired is a safety choice.', it: 'La fatica riduce la precisione prima che il pilota se ne accorga, quindi fermarsi quando si è stanchi è una scelta di sicurezza.' },
      { t: 'The ⟦core⟧ stabilises the trunk, and ⟦grip endurance⟧ of the forearms limits long sessions; train 2–3 times a week.', it: 'Il core stabilizza il tronco, e la resistenza della presa degli avambracci limita i turni lunghi; allenati 2–3 volte a settimana.' },
      { t: 'The typical ⟦reaction time⟧ is 0.2–0.3 s, and at 180 km/h each extra 0.1 s means 5 metres.', it: 'Il tempo di reazione tipico è 0,2–0,3 s, e a 180 km/h ogni 0,1 s in più sono 5 metri.' },
      { t: '⟦Dehydration⟧ of 2% already worsens concentration, so drink regularly and rest in the shade between sessions.', it: 'Una disidratazione del 2% peggiora già la concentrazione, quindi bevi regolarmente e riposa all’ombra tra i turni.' },
      { t: '⟦Visualisation⟧ is a mental lap of 5–10 minutes at real timing, followed by a routine with breathing and a single goal.', it: 'La visualizzazione è un giro mentale di 5–10 minuti a tempi reali, seguito da una routine con respirazione e un solo obiettivo.' },
      { t: 'The worst errors come from hurry, ego and fatigue: skip a session when tired, and see a doctor if in doubt.', it: 'Gli errori peggiori nascono da fretta, ego e fatica, quindi salta un turno se sei stanco, e consulta un medico se hai dubbi.' }
    ],
    gloss: [
      { w: 'fatigue', it: 'fatica' },
      { w: 'grip endurance', it: 'resistenza della presa' },
      { w: 'reaction time', it: 'tempo di reazione' },
      { w: 'dehydration', it: 'disidratazione' },
      { w: 'visualisation', it: 'visualizzazione mentale del giro' },
      { w: 'core', it: 'muscoli del tronco' },
      { w: 'aerobic base', it: 'base di resistenza aerobica' },
      { w: 'arm pump', it: 'indurimento degli avambracci' },
      { w: 'routine', it: 'routine pre-turno' },
      { w: 'ego', it: 'ego, voler stare con i più veloci' }
    ]
  });

  A('moto-dati-bandiere-sicurezza', {
    title: { t: 'Data analysis, video and safety', it: 'Analisi dei dati, video e sicurezza' },
    sum: [
      { t: 'Without data you improve by feel, and feel can mislead; data show where time is gained and lost.', it: 'Senza dati si migliora a sensazione, e la sensazione inganna; i dati dicono dove si guadagna e si perde.' },
      { t: 'The tools are the lap timer, video, ⟦sector⟧ timing and ⟦telemetry⟧ of throttle, brake, lean and speed.', it: 'Gli strumenti sono il cronometro, il video, i tempi per settore e la telemetria di acceleratore, freno, piega e velocità.' },
      { t: '⟦Repeatability⟧ counts more than a single lap, so work on the most variable sector, not the fastest.', it: 'La ripetibilità conta più del giro singolo, quindi lavora sul settore più variabile, non sul più veloce.' },
      { t: 'The ⟦theoretical best lap⟧ adds the best sectors: 109.7 s in the example, 0.4 s below the real best lap.', it: 'Il giro teorico somma i migliori settori: 109,7 s nell’esempio, 0,4 s sotto il miglior giro reale.' },
      { t: 'A long phase with neither brake nor throttle, called ⟦coasting⟧, is lost time; the throttle should be a smooth ramp.', it: 'Una lunga fase senza né freno né gas, detta coasting, è tempo perso; il gas dovrebbe essere una rampa liscia.' },
      { t: 'A ⟦yellow flag⟧ means danger and no overtaking; a ⟦red flag⟧ means the session is stopped and you return to the pits.', it: 'La bandiera gialla significa pericolo e niente sorpassi, e la rossa che la sessione è interrotta e si rientra ai box.' },
      { t: 'After a fall do not remove the helmet if a neck injury is suspected, and return gradually, one parameter at a time.', it: 'Dopo una caduta non togliere il casco se si sospetta un trauma al collo, e rientra gradualmente, un parametro per volta.' }
    ],
    gloss: [
      { w: 'sector', it: 'settore del giro' },
      { w: 'telemetry', it: 'telemetria' },
      { w: 'repeatability', it: 'ripetibilità' },
      { w: 'theoretical best lap', it: 'giro teorico (somma dei migliori settori)' },
      { w: 'coasting', it: 'fase senza freno né gas' },
      { w: 'yellow flag', it: 'bandiera gialla' },
      { w: 'red flag', it: 'bandiera rossa' },
      { w: 'blue flag', it: 'bandiera blu' },
      { w: 'lap time', it: 'tempo sul giro' },
      { w: 'marshals', it: 'commissari di percorso' }
    ]
  });

  A('moto-campionati-e-discipline', {
    title: { t: 'Championships and disciplines', it: 'Campionati e discipline' },
    sum: [
      { t: 'Racing splits into road racing and off-road, and a ⟦prototype⟧ is built only to race, unlike a production-derived bike.', it: 'Le corse si dividono in velocità e fuoristrada, e un prototipo è costruito solo per correre, a differenza di una derivata di serie.' },
      { t: 'MotoGP is the top class, with prototypes powered by 1000 cc four-stroke engines.', it: 'La MotoGP è la classe regina, con prototipi a motore quattro tempi da 1000 cc.' },
      { t: 'Moto2 uses a Triumph 765 cc three-cylinder engine, the same for all, while ⟦Moto3⟧ uses 250 cc single-cylinder four-strokes.', it: 'La Moto2 usa un tre cilindri Triumph da 765 cc, uguale per tutti, mentre la Moto3 usa monocilindrici quattro tempi da 250 cc.' },
      { t: '⟦MotoE⟧ is the electric class since 2019, with one single make, and the battery limits the race length.', it: 'La MotoE è la classe elettrica dal 2019, con un solo marchio, e la batteria limita la durata delle gare.' },
      { t: '⟦WorldSBK⟧ has existed since 1988 and uses production-derived bikes; Jonathan Rea won 6 consecutive titles from 2015 to 2020.', it: 'Il WorldSBK esiste dal 1988 e usa moto derivate dalla serie; Jonathan Rea ha vinto 6 titoli consecutivi dal 2015 al 2020.' },
      { t: '⟦Endurance⟧ races last for hours with teams of 2–3 riders, like the 8 Hours of Suzuka.', it: 'Le gare di endurance durano ore con squadre di 2-3 piloti, come le 8 Ore di Suzuka.' },
      { t: 'Off-road includes motocross, enduro, the Dakar, ⟦trial⟧ and speedway, and the ⟦Tourist Trophy⟧ has run on closed roads since 1907.', it: 'Il fuoristrada comprende motocross, enduro, Dakar, trial e speedway, e il Tourist Trophy si corre su strade chiuse dal 1907.' }
    ],
    gloss: [
      { w: 'prototype', it: 'moto costruita solo per correre' },
      { w: 'Moto3', it: 'classe minore con monocilindrici da 250 cc' },
      { w: 'MotoE', it: 'classe elettrica del Mondiale' },
      { w: 'WorldSBK', it: 'Mondiale Superbike' },
      { w: 'Endurance', it: 'gara di resistenza' },
      { w: 'trial', it: 'superare ostacoli senza toccare terra' },
      { w: 'Tourist Trophy', it: 'corsa su strade chiuse all’Isola di Man' },
      { w: 'MotoGP', it: 'classe regina del Mondiale' },
      { w: 'Moto2', it: 'classe intermedia con motore unico' },
      { w: 'motocross', it: 'gare brevi su pista sterrata con salti' }
    ]
  });

  A('moto-storia-del-motociclismo-sportivo', {
    title: { t: 'History of motorcycle racing', it: 'Storia del motociclismo sportivo' },
    sum: [
      { t: 'The first motorcycle with an internal combustion engine dates from 1885, and the first series bike from 1894.', it: 'La prima motocicletta con motore a combustione interna è del 1885, e la prima moto di serie del 1894.' },
      { t: 'The first ⟦Tourist Trophy⟧ was held in 1907, and racing served to show reliability and to sell bikes.', it: 'Il primo Tourist Trophy si disputò nel 1907, e le corse servivano a dimostrare l’affidabilità e a vendere moto.' },
      { t: 'The FIM organised the first ⟦World Championship⟧ in 1949, and European makers such as Gilera and MV Agusta dominated.', it: 'La FIM organizzò il primo Campionato del Mondo nel 1949, e dominarono costruttori europei come Gilera e MV Agusta.' },
      { t: 'The ⟦Japanese makers⟧ arrived: Honda debuted at the TT in 1959 and won its first titles in 1961.', it: 'Arrivarono i costruttori giapponesi: la Honda debuttò al TT nel 1959 e vinse i primi titoli nel 1961.' },
      { t: 'From 1975 the ⟦two-stroke⟧ 500s dominated the top class, and Mick Doohan won 5 consecutive titles from 1994 to 1998.', it: 'Dal 1975 le 500 due tempi dominarono la classe regina, e Mick Doohan vinse 5 titoli consecutivi dal 1994 al 1998.' },
      { t: '⟦MotoGP⟧ began in 2002 with ⟦four-stroke⟧ engines of 990 cc, then 800 cc in 2007, and 1000 cc again from 2012.', it: 'La MotoGP nacque nel 2002 con quattro tempi da 990 cc, poi 800 cc nel 2007 e di nuovo 1000 cc dal 2012.' },
      { t: 'Giacomo Agostini won 15 titles and Valentino Rossi 9; each change of era is a compromise between spectacle, safety and costs.', it: 'Giacomo Agostini vinse 15 titoli e Valentino Rossi 9; ogni cambio di era è un compromesso tra spettacolo, sicurezza e costi.' }
    ],
    gloss: [
      { w: 'Tourist Trophy', it: 'storica corsa su strada dell’Isola di Man' },
      { w: 'World Championship', it: 'Campionato del Mondo' },
      { w: 'Japanese makers', it: 'costruttori giapponesi' },
      { w: 'two-stroke', it: 'motore a due tempi' },
      { w: 'MotoGP', it: 'classe regina dal 2002' },
      { w: 'FIM', it: 'federazione motociclistica internazionale' },
      { w: 'four-stroke', it: 'motore a quattro tempi' },
      { w: 'title', it: 'titolo mondiale' },
      { w: 'era', it: 'epoca' },
      { w: 'timeline', it: 'linea del tempo' }
    ]
  });

  A('moto-weekend-di-gara-e-punti', {
    title: { t: 'The race weekend and the scoring', it: 'Il weekend di gara e il punteggio' },
    sum: [
      { t: 'A MotoGP weekend lasts three days: Friday practice, Saturday qualifying and the Sprint, Sunday warm-up and the long race.', it: 'Un weekend di MotoGP dura tre giorni: prove il venerdì, qualifiche e Sprint il sabato, warm-up e gara lunga la domenica.' },
      { t: 'The ⟦Sprint⟧, introduced in 2023, is about half the distance and has its own points.', it: 'La Sprint, introdotta nel 2023, è circa metà distanza e ha punti propri.' },
      { t: 'In ⟦qualifying⟧ the 10 fastest riders go straight to Q2, and the others race in Q1, where the first 2 advance.', it: 'Nelle qualifiche i 10 piloti più veloci vanno direttamente in Q2, e gli altri disputano la Q1, dove i primi 2 passano.' },
      { t: 'The ⟦grid⟧ has three bikes per row, and ⟦pole position⟧ gives clean air, but race pace matters more.', it: 'La griglia ha tre moto per fila, e la pole position dà aria pulita, ma il ritmo gara conta di più.' },
      { t: 'The long race lasts about 40–45 minutes with no refuelling, and in sudden rain the ⟦flag-to-flag⟧ rule lets riders change bike.', it: 'La gara lunga dura circa 40-45 minuti senza rifornimento, e con pioggia improvvisa la regola flag-to-flag permette di cambiare moto.' },
      { t: 'The long race scores the first 15, from 25 to 1; the Sprint scores the first 9, from 12 to 1.', it: 'La gara lunga dà punti ai primi 15, da 25 a 1, e la Sprint ai primi 9, da 12 a 1.' },
      { t: 'The maximum is 37 points per weekend, and a ⟦long lap penalty⟧ costs about 2–3 seconds.', it: 'Il massimo è 37 punti a weekend, e una long lap penalty costa circa 2-3 secondi.' }
    ],
    gloss: [
      { w: 'Sprint', it: 'gara breve del sabato, dal 2023' },
      { w: 'qualifying', it: 'qualifiche (Q1 e Q2)' },
      { w: 'grid', it: 'griglia di partenza' },
      { w: 'flag-to-flag', it: 'regola per cambiare moto con pioggia improvvisa' },
      { w: 'long lap penalty', it: 'penalità: giro più lungo da percorrere' },
      { w: 'pole position', it: 'primo posto in griglia' },
      { w: 'warm-up', it: 'breve sessione della domenica mattina' },
      { w: 'practice', it: 'prove libere cronometrate' },
      { w: 'points', it: 'punti' },
      { w: 'race direction', it: 'direzione gara' }
    ]
  });

  A('moto-regolamento-tecnico', {
    title: { t: 'The technical regulations', it: 'Il regolamento tecnico' },
    sum: [
      { t: 'The ⟦technical regulations⟧ say what a racing bike can be, for safety, costs and spectacle.', it: 'Il regolamento tecnico stabilisce cosa può essere una moto da corsa, per sicurezza, costi e spettacolo.' },
      { t: 'MotoGP rules allow 1000 cc four-strokes, at most 4 cylinders, an 81 mm ⟦bore⟧ and a 157 kg minimum weight.', it: 'Le regole recenti della MotoGP ammettono quattro tempi da 1000 cc, al massimo 4 cilindri, alesaggio massimo 81 mm e peso minimo 157 kg.' },
      { t: 'The fuel tank is limited to 22 litres, and there are no refuelling stops, so the rider manages the pace.', it: 'Il serbatoio è limitato a 22 litri e non ci sono soste per il rifornimento, quindi il pilota gestisce il ritmo.' },
      { t: 'With a ⟦single tyre supplier⟧, Michelin since 2016 in MotoGP, riders choose the compound and the pressure.', it: 'Con la gomma unica, Michelin dal 2016 in MotoGP, i piloti scelgono la mescola e la pressione.' },
      { t: 'Since 2016 MotoGP uses a single ⟦ECU⟧ from Magneti Marelli, but teams still work on the maps.', it: 'Dal 2016 la MotoGP usa una centralina unica di Magneti Marelli, ma le squadre lavorano ancora sulle mappe.' },
      { t: '⟦Winglets⟧ create downforce against wheelies, external ones were banned in 2017, and the ⟦ride height device⟧ came from Ducati in 2019.', it: 'Le alette creano carico contro l’impennata, quelle esterne furono vietate nel 2017 e il dispositivo di abbassamento nacque dalla Ducati nel 2019.' },
      { t: 'New rules announced from 2027 foresee 850 cc engines, to be verified, and rules are also a tool to control costs.', it: 'Le nuove regole annunciate dal 2027 prevedono motori da 850 cc, da verificare, e le regole sono anche uno strumento di controllo dei costi.' }
    ],
    gloss: [
      { w: 'technical regulations', it: 'regolamento tecnico' },
      { w: 'single tyre supplier', it: 'gomma unica (monogomma)' },
      { w: 'ECU', it: 'centralina elettronica' },
      { w: 'winglets', it: 'alette aerodinamiche' },
      { w: 'ride height device', it: 'dispositivo di abbassamento della moto' },
      { w: 'compound', it: 'mescola' },
      { w: 'minimum weight', it: 'peso minimo' },
      { w: 'downforce', it: 'carico aerodinamico' },
      { w: 'bore', it: 'alesaggio' },
      { w: 'maps', it: 'mappe della centralina' }
    ]
  });

  A('moto-squadre-e-business', {
    title: { t: 'Teams and the business of motorcycle racing', it: 'Squadre e business del motociclismo' },
    sum: [
      { t: 'The ⟦FIM⟧ is the sporting authority; ⟦Dorna⟧ holds commercial rights since 1992; all sit in the Grand Prix Commission.', it: 'La FIM è l’autorità sportiva; la Dorna detiene i diritti commerciali dal 1992; con squadre e costruttori siedono tutti nella Grand Prix Commission.' },
      { t: 'There are three types of team: the ⟦factory team⟧, the ⟦satellite team⟧ with leased bikes, and the independent team.', it: 'Ci sono tre tipi di squadra: il team ufficiale, il team satellite con moto in leasing e il team indipendente.' },
      { t: 'The recent MotoGP grid has about 22 riders in 11 teams, so 2 bikes per team.', it: 'La griglia MotoGP recente ha circa 22 piloti in 11 squadre, quindi 2 moto per squadra.' },
      { t: 'The garage has precise roles: team manager, ⟦crew chief⟧, mechanics, data engineer, electronics engineer and tyre technician.', it: 'Il box ha ruoli precisi: team manager, capotecnico, meccanici, ingegnere di pista, elettronico e gommista.' },
      { t: 'Budgets are estimates: a factory team spends from tens to over a hundred million euros a year.', it: 'I budget sono stime: un team ufficiale spende da decine a oltre cento milioni di euro all’anno.' },
      { t: 'Teams live on the manufacturer, ⟦sponsors⟧, promoter contributions and merchandising, and TV rights are a main source of income.', it: 'Le squadre vivono del costruttore, degli sponsor, dei contributi del promotore e del merchandising, e i diritti TV sono una fonte di ricavo principale.' },
      { t: 'In MotoGP the ⟦prototypes⟧ are not sold, while Superbike replicas are, so a win there directly affects sales.', it: 'In MotoGP i prototipi non sono in vendita, mentre le replica della Superbike sì, quindi una vittoria lì ha un effetto diretto sulle vendite.' }
    ],
    gloss: [
      { w: 'FIM', it: 'federazione motociclistica internazionale' },
      { w: 'Dorna', it: 'promotore con i diritti commerciali' },
      { w: 'factory team', it: 'team ufficiale del costruttore' },
      { w: 'satellite team', it: 'team con moto fornite dal costruttore' },
      { w: 'crew chief', it: 'capotecnico' },
      { w: 'sponsors', it: 'sponsor' },
      { w: 'prototypes', it: 'moto costruite solo per correre' },
      { w: 'TV rights', it: 'diritti televisivi' },
      { w: 'budget', it: 'bilancio di spesa' },
      { w: 'promoter', it: 'promotore del campionato' }
    ]
  });

  A('moto-piloti-e-carriere', {
    title: { t: 'Riders and careers', it: 'Piloti e carriere' },
    sum: [
      { t: 'Most riders start as children on a ⟦minibike⟧, then go through youth championships, Talent Cups, Moto3, Moto2 and MotoGP.', it: 'Quasi tutti i piloti cominciano da bambini con la minimoto, poi passano per campionati giovanili, Talent Cup, Moto3, Moto2 e MotoGP.' },
      { t: 'Starting early develops sensitivity, but early specialisation brings pressure, so other sports help too.', it: 'Partire presto sviluppa sensibilità, ma la specializzazione precoce porta pressione, quindi aiutano anche altri sport.' },
      { t: 'The ⟦Talent Cup⟧ championships use identical bikes, so costs are lower and the comparison between riders is fair.', it: 'I campionati Talent Cup usano moto uguali per tutti, quindi i costi sono più contenuti e il confronto fra piloti è equo.' },
      { t: 'A ⟦Moto3⟧ seat can cost hundreds of thousands to over a million euros: a ⟦pay driver⟧ may exclude talent.', it: 'Un sedile in Moto3 può costare da centinaia di migliaia a oltre un milione di euro, quindi un pay driver può escludere talenti senza mezzi.' },
      { t: 'You need a ⟦licence⟧ from the national federation, with a medical exam, and the minimum age in Moto3 is 16.', it: 'Serve una licenza della federazione nazionale, con visita medica, e l’età minima in Moto3 è 16 anni.' },
      { t: 'Racing demands aerobic endurance, with heart rates of 160–180 beats per minute, plus strong core and neck and mental ⟦resilience⟧.', it: 'Correre richiede resistenza aerobica, con frequenze cardiache di 160-180 battiti al minuto, oltre a core e collo forti e resilienza mentale.' },
      { t: 'Márquez won the MotoGP title at 20 in 2013, and Rossi won his first title at 18 in 1997 and raced past 40.', it: 'Márquez vinse il titolo MotoGP a 20 anni nel 2013, e Rossi vinse il primo titolo a 18 anni nel 1997 e corse oltre i 40 anni.' }
    ],
    gloss: [
      { w: 'minibike', it: 'minimoto' },
      { w: 'Talent Cup', it: 'campionato giovanile con moto uguali' },
      { w: 'pay driver', it: 'pilota che porta denaro alla squadra' },
      { w: 'licence', it: 'licenza di gara' },
      { w: 'resilience', it: 'resilienza' },
      { w: 'Moto3', it: 'classe d’ingresso del Mondiale' },
      { w: 'academy', it: 'accademia dei costruttori' },
      { w: 'sponsor', it: 'sponsor' },
      { w: 'federation', it: 'federazione' },
      { w: 'career', it: 'carriera' }
    ]
  });

  A('moto-sicurezza-nelle-corse', {
    title: { t: 'Safety in racing', it: 'La sicurezza nelle corse' },
    sum: [
      { t: 'Safety is a ⟦layered system⟧: rider and gear, bike, circuit, organisation and rules, and the risk can never be zero.', it: 'La sicurezza è un sistema a strati: pilota ed equipaggiamento, moto, circuito, organizzazione e regole, e il rischio non può mai essere zero.' },
      { t: 'The helmet is the most important item, and the leather suit must resist ⟦abrasion⟧ for dozens of metres.', it: 'Il casco è l’elemento più importante e la tuta di pelle deve resistere all’abrasione per decine di metri.' },
      { t: 'From 100 to 200 km/h the sliding distance grows from 49 m to 197 m, almost four times longer.', it: 'Da 100 a 200 km/h la distanza di scivolata cresce da 49 m a 197 m, quasi quattro volte più lunga.' },
      { t: 'An ⟦airbag⟧ suit first appeared in the World Championship in 2007, but it does not remove the impact energy.', it: 'La tuta con airbag comparve per la prima volta nel Mondiale nel 2007, ma non elimina l’energia dell’impatto.' },
      { t: '⟦Run-off⟧ areas, barriers and ⟦air fences⟧ turn a sudden impact into a slower deceleration.', it: 'Le vie di fuga, le barriere e le air fence trasformano un urto brusco in una decelerazione più lenta.' },
      { t: 'The race direction and the ⟦marshals⟧ show flags and rescue riders; a yellow flag forbids overtaking.', it: 'La direzione gara e i commissari mostrano le bandiere e soccorrono i piloti; la bandiera gialla vieta i sorpassi.' },
      { t: 'After a fall a rider must pass a medical check to be ⟦fit to race⟧; the Clinica Mobile dates from 1977.', it: 'Dopo una caduta il pilota deve superare una valutazione medica per essere idoneo a correre, e la Clinica Mobile fu ideata nel 1977.' }
    ],
    gloss: [
      { w: 'layered system', it: 'sistema a strati' },
      { w: 'abrasion', it: 'abrasione' },
      { w: 'airbag', it: 'airbag nella tuta' },
      { w: 'run-off', it: 'via di fuga' },
      { w: 'air fences', it: 'barriere gonfiabili' },
      { w: 'marshals', it: 'commissari di percorso' },
      { w: 'fit to race', it: 'idoneo a correre' },
      { w: 'race direction', it: 'direzione gara' },
      { w: 'helmet', it: 'casco' },
      { w: 'barriers', it: 'barriere' }
    ]
  });

  A('moto-tecnologia-e-cultura', {
    title: { t: 'From track to road, and motorcycling culture', it: 'Dalla pista alla strada e cultura motociclistica' },
    sum: [
      { t: 'Racing has long been a laboratory, but a technology must become reliable, cheap to build and usable by amateurs.', it: 'Le corse sono state a lungo un laboratorio, ma una tecnologia deve diventare affidabile, economica da produrre e utilizzabile da non professionisti.' },
      { t: 'The ⟦disc brake⟧ became standard on the Honda CB750 in 1969, and ⟦radial calipers⟧ spread on sport bikes from the nineties.', it: 'Il freno a disco divenne di serie sulla Honda CB750 nel 1969, e le pinze radiali si diffusero sulle sportive dagli anni ’90.' },
      { t: 'In MotoGP riders brake from over 300 km/h to a few tens in a few seconds, with decelerations near 1.5 g.', it: 'In MotoGP i piloti frenano da oltre 300 km/h a poche decine in pochi secondi, con decelerazioni vicine a 1,5 g.' },
      { t: 'The first production bike with ⟦ABS⟧ was the BMW K100 in 1988; these aids raise the margin, not the limit.', it: 'La prima moto di serie con ABS fu la BMW K100 nel 1988; questi aiuti aumentano il margine, non il limite.' },
      { t: 'Reducing the ⟦unsprung mass⟧ improves the response of the suspension and the handling.', it: 'Ridurre le masse non sospese migliora la risposta della sospensione e la maneggevolezza.' },
      { t: '⟦EICMA⟧, the motorcycle show in Milan, dates from 1914, and museums and motorcycle clubs keep this history alive.', it: 'L’EICMA, il salone della moto a Milano, nasce nel 1914, e musei e motoclub tengono viva questa storia.' },
      { t: 'To read a race on TV, convert the ⟦gap⟧ into metres: at 180 km/h, 1 second is 50 m.', it: 'Per capire una gara in TV, converti il distacco in metri: a 180 km/h, 1 secondo sono 50 m.' }
    ],
    gloss: [
      { w: 'disc brake', it: 'freno a disco' },
      { w: 'radial calipers', it: 'pinze radiali' },
      { w: 'ABS', it: 'antibloccaggio dei freni' },
      { w: 'unsprung mass', it: 'massa non sospesa' },
      { w: 'EICMA', it: 'salone internazionale della moto di Milano' },
      { w: 'gap', it: 'distacco tra due piloti' },
      { w: 'traction control', it: 'controllo di trazione' },
      { w: 'carbon fibre', it: 'fibra di carbonio' },
      { w: 'museum', it: 'museo' },
      { w: 'laboratory', it: 'laboratorio' }
    ]
  });

  A('moto-adv-motore-prestazioni', {
    title: { t: 'The high-performance engine', it: 'Il motore ad alte prestazioni' },
    sum: [
      { t: 'Power is ⟦torque⟧ times angular speed, so at equal torque power rises with revs, and sport engines seek high revs.', it: 'La potenza è coppia per velocità angolare, quindi a parità di coppia cresce con il regime, e i motori sportivi cercano regimi alti.' },
      { t: 'Maximum power occurs at a higher rev than maximum torque, and the gearbox keeps the engine near it.', it: 'La potenza massima si trova a un regime più alto di quello della coppia massima, e il cambio tiene il motore vicino a essa.' },
      { t: '⟦Mean effective pressure⟧ compares engines of different size and does not depend on revs; above 14–16 bar needs excellent filling and combustion.', it: 'La pressione media effettiva confronta motori di cilindrata diversa e non dipende dal regime; oltre 14–16 bar servono ottimo riempimento e combustione.' },
      { t: '⟦Volumetric efficiency⟧ is the air really drawn per cycle, and since power depends on air, every point counts.', it: 'Il rendimento volumetrico è l’aria realmente aspirata per ciclo, e poiché la potenza dipende dall’aria, ogni punto conta.' },
      { t: 'The ⟦mean piston speed⟧ of racing engines is between 20 and 28 m/s, and a short stroke allows higher revs.', it: 'La velocità media del pistone dei motori da corsa è fra 20 e 28 m/s, e una corsa corta permette giri più alti.' },
      { t: '⟦Inertia forces⟧ grow with the square of the revs: 1.4 times the revs gives 1.96 times the force.', it: 'Le forze d’inerzia crescono con il quadrato dei giri: 1,4 volte i giri danno 1,96 volte la forza.' },
      { t: '⟦Desmodromic⟧ and pneumatic valves fight valve float, and removing anti-pollution systems is illegal on the road.', it: 'Le valvole desmodromiche e pneumatiche contrastano il galleggiamento, e rimuovere i sistemi anti-inquinamento è illegale su strada.' }
    ],
    gloss: [
      { w: 'torque', it: 'coppia' },
      { w: 'mean effective pressure', it: 'pressione media effettiva (PME)' },
      { w: 'volumetric efficiency', it: 'rendimento volumetrico' },
      { w: 'mean piston speed', it: 'velocità media del pistone' },
      { w: 'inertia forces', it: 'forze d’inerzia' },
      { w: 'desmodromic', it: 'distribuzione con richiamo meccanico della valvola' },
      { w: 'valve float', it: 'galleggiamento delle valvole' },
      { w: 'specific power', it: 'potenza specifica (cv/litro)' },
      { w: 'bore', it: 'alesaggio' },
      { w: 'stroke', it: 'corsa del pistone' }
    ]
  });

  A('moto-adv-elettronica-bordo', {
    title: { t: 'On-board electronics and controls', it: 'Elettronica di bordo e controlli' },
    sum: [
      { t: 'A 6-axis ⟦IMU⟧ has 3 accelerometers and 3 gyroscopes, and it estimates the lean angle rather than measuring it.', it: 'Una IMU a 6 assi ha 3 accelerometri e 3 giroscopi, e stima l’angolo di piega invece di misurarlo.' },
      { t: '⟦Sensor fusion⟧ trusts the gyroscope in the short term and the accelerometer in the long term, because a gyroscope drifts.', it: 'La fusione dei sensori si fida del giroscopio a breve termine e dell’accelerometro a lungo termine, perché il giroscopio deriva.' },
      { t: 'With ⟦ride-by-wire⟧ a sensor reads the grip and the ECU opens the throttle, so the request becomes a signal to modulate.', it: 'Con il ride-by-wire un sensore legge la manopola e la centralina apre la farfalla, quindi la richiesta diventa un segnale modulabile.' },
      { t: 'The ⟦slip ratio⟧ compares rear and front wheel speed, and ⟦traction control⟧ cuts torque when slip exceeds a target.', it: 'Lo slip ratio confronta la velocità della ruota posteriore e anteriore, e il controllo di trazione taglia la coppia quando lo slittamento supera un obiettivo.' },
      { t: 'The slip target must fall as the lean angle grows, because grip is shared between lateral and longitudinal force.', it: 'L’obiettivo di slittamento deve scendere con l’angolo di piega, perché l’aderenza è condivisa fra forza laterale e longitudinale.' },
      { t: 'The ⟦anti-wheelie⟧ cuts torque before the front lifts, and ⟦cornering ABS⟧ limits the brake pressure in a deep lean.', it: 'L’anti-wheelie riduce la coppia prima che l’anteriore si alzi, e l’ABS in curva limita la pressione dei freni in piega profonda.' },
      { t: 'The systems decide on a model with delays of 10–50 ms: they help, never cancel physics, and tampering is illegal.', it: 'I sistemi decidono su un modello con ritardi di 10–50 ms: aiutano, non cancellano la fisica, e manometterli è illegale.' }
    ],
    gloss: [
      { w: 'IMU', it: 'unità di misura inerziale' },
      { w: 'sensor fusion', it: 'fusione dei sensori' },
      { w: 'ride-by-wire', it: 'gas elettronico' },
      { w: 'slip ratio', it: 'rapporto di slittamento' },
      { w: 'traction control', it: 'controllo di trazione' },
      { w: 'anti-wheelie', it: 'controllo dell’impennata' },
      { w: 'cornering ABS', it: 'ABS in curva' },
      { w: 'riding modes', it: 'modalità di guida' },
      { w: 'launch control', it: 'controllo di partenza' },
      { w: 'engine braking', it: 'freno motore' }
    ]
  });

  A('moto-adv-aerodinamica-moto', {
    title: { t: 'Modern motorcycle aerodynamics', it: 'Aerodinamica moderna delle moto' },
    sum: [
      { t: 'The ⟦dynamic pressure⟧ gives drag and downforce when multiplied by the equivalent areas ⟦CdA⟧ and CLA.', it: 'La pressione dinamica dà resistenza e carico quando è moltiplicata per le aree equivalenti CdA e CLA.' },
      { t: 'A bike with rider has a CdA of about 0.25–0.4 m²; doubling the speed multiplies the power against the air by 8.', it: 'Per una moto con pilota il CdA è circa 0,25–0,4 m², e raddoppiare la velocità moltiplica per 8 la potenza contro l’aria.' },
      { t: 'In the example, at 300 km/h the drag is 1250 N and the power absorbed is 104.2 kW.', it: 'Nell’esempio, a 300 km/h la resistenza è 1250 N e la potenza assorbita è 104,2 kW.' },
      { t: '⟦Winglets⟧ create downforce at the cost of drag, mainly to reduce wheelies and steady the front.', it: 'Le alette creano carico a costo di resistenza, soprattutto per ridurre l’impennata e stabilizzare l’anteriore.' },
      { t: 'In the example the winglets give 125 N at 300 km/h, about 5% of the weight, and 56 N at 200 km/h.', it: 'Nell’esempio le alette danno 125 N a 300 km/h, circa il 5% del peso, e 56 N a 200 km/h.' },
      { t: 'Drag loads the front: at 300 km/h the front carries 66.7% of the weight, so rear ⟦traction⟧ becomes scarce.', it: 'La resistenza agisce sopra il suolo e carica l’anteriore: a 300 km/h l’anteriore porta il 66,7% del peso, quindi la trazione posteriore diventa scarsa.' },
      { t: 'A ⟦ride height device⟧ lowers the bike at the start, the ⟦slipstream⟧ cuts drag but also front load, and rules change often.', it: 'Il ride height device abbassa la moto in partenza, la scia riduce la resistenza ma anche il carico anteriore, e le regole cambiano spesso.' }
    ],
    gloss: [
      { w: 'dynamic pressure', it: 'pressione dinamica' },
      { w: 'CdA', it: 'area equivalente di resistenza' },
      { w: 'winglets', it: 'alette aerodinamiche' },
      { w: 'traction', it: 'trazione' },
      { w: 'ride height device', it: 'dispositivo di abbassamento' },
      { w: 'slipstream', it: 'scia di un altro veicolo' },
      { w: 'downforce', it: 'carico aerodinamico' },
      { w: 'drag', it: 'resistenza aerodinamica' },
      { w: 'wheelie', it: 'impennata' },
      { w: 'centre of pressure', it: 'centro di pressione' }
    ]
  });

  A('moto-adv-modelli-pneumatico', {
    title: { t: 'Tyre models for motorcycles', it: 'Modelli di pneumatico per la moto' },
    sum: [
      { t: 'A ⟦tyre model⟧ links the longitudinal and lateral forces to slip ratio, slip angle, camber and vertical load.', it: 'Un modello di pneumatico lega le forze longitudinale e laterale a slip ratio, slip angle, camber e carico verticale.' },
      { t: 'Physical models explain why but are hard to tune; empirical ones like the ⟦Magic Formula⟧ fit a few parameters to test data.', it: 'I modelli fisici spiegano il perché ma sono difficili da tarare, mentre quelli empirici come la Magic Formula adattano pochi parametri ai dati di prova.' },
      { t: 'In the Magic Formula, D is the peak force, equal to the friction coefficient times the vertical load.', it: 'Nella Magic Formula, D è il picco della forza, pari al coefficiente d’attrito per il carico verticale.' },
      { t: 'The lateral force saturates and can fall past the peak; real bike tyres peak at a smaller ⟦slip angle⟧.', it: 'La forza laterale satura e può calare oltre il picco; i pneumatici moto reali hanno il picco a uno slip angle minore.' },
      { t: 'A leaned round tyre produces ⟦camber thrust⟧, which lets the bike corner with a very small slip angle.', it: 'Un pneumatico tondo inclinato produce la spinta di camber, che permette alla moto di curvare con uno slip angle piccolissimo.' },
      { t: 'The friction coefficient falls as the load grows, so a ⟦load transfer⟧ is not zero-sum for the total grip.', it: 'Il coefficiente d’attrito diminuisce con il carico, quindi un trasferimento di carico non è a somma zero per l’aderenza totale.' },
      { t: 'Grip has a bell-shaped dependence on ⟦temperature⟧, and a model holds only within its range, so it must be validated.', it: 'L’aderenza ha una dipendenza a campana dalla temperatura, e un modello vale solo entro il suo campo, quindi va validato.' }
    ],
    gloss: [
      { w: 'tyre model', it: 'modello matematico del pneumatico' },
      { w: 'Magic Formula', it: 'formula empirica di Pacejka' },
      { w: 'camber thrust', it: 'spinta di camber' },
      { w: 'load transfer', it: 'trasferimento di carico' },
      { w: 'temperature', it: 'temperatura' },
      { w: 'slip angle', it: 'angolo di deriva' },
      { w: 'slip ratio', it: 'rapporto di slittamento' },
      { w: 'friction coefficient', it: 'coefficiente d’attrito' },
      { w: 'vertical load', it: 'carico verticale' },
      { w: 'grip', it: 'aderenza' }
    ]
  });

  A('moto-adv-dinamica-semplificata', {
    title: { t: 'A simplified dynamic model of the motorcycle', it: 'Modello dinamico semplificato della moto' },
    sum: [
      { t: 'In ⟦steady cornering⟧ the lean follows tan φ = v²/(g·R): 25 m/s on an 80 m radius gives 38.5°.', it: 'In curva stazionaria la piega segue tan φ = v²/(g·R): 25 m/s su un raggio di 80 m danno 38,5°.' },
      { t: 'The limit is grip, tan φ ≤ μ, and with μ = 1.3 the maximum lean is about 52°.', it: 'Il limite è l’aderenza, tan φ ≤ μ, e con μ = 1,3 la piega massima è circa 52°.' },
      { t: 'Because of the ⟦tyre thickness⟧, the frame leans 6–7° more than the thin-tyre model says, so ground clearance becomes critical.', it: 'A causa dello spessore del pneumatico, il telaio si inclina 6–7° più del modello sottile, quindi la luce a terra diventa critica.' },
      { t: 'At high speed steering mainly triggers the lean through ⟦countersteering⟧.', it: 'Ad alta velocità lo sterzo serve soprattutto a innescare la piega con il controsterzo.' },
      { t: 'Linear models show three modes: ⟦capsize⟧, ⟦weave⟧ at 2–4 Hz and ⟦wobble⟧ at 7–9 Hz.', it: 'I modelli lineari mostrano tre modi: capsize, weave a 2–4 Hz e wobble a 7–9 Hz.' },
      { t: 'A ⟦steering damper⟧ opposes the steering speed and damps the wobble, but it does not fix setup defects.', it: 'L’ammortizzatore di sterzo si oppone alla velocità di sterzo e smorza il wobble, ma non risolve difetti di assetto.' },
      { t: 'If a steering oscillation appears, reduce the throttle progressively, relax your arms and do not brake hard.', it: 'Se compare un’oscillazione di sterzo, riduci il gas in modo progressivo, rilassa le braccia e non frenare con forza.' }
    ],
    gloss: [
      { w: 'steady cornering', it: 'curva stazionaria' },
      { w: 'tyre thickness', it: 'spessore del pneumatico' },
      { w: 'countersteering', it: 'controsterzo' },
      { w: 'capsize', it: 'lento cadere della moto inclinata' },
      { w: 'weave', it: 'oscillazione di rollio e imbardata' },
      { w: 'wobble', it: 'oscillazione dello sterzo' },
      { w: 'steering damper', it: 'ammortizzatore di sterzo' },
      { w: 'ground clearance', it: 'luce a terra' },
      { w: 'lean angle', it: 'angolo di piega' },
      { w: 'validation', it: 'validazione con misure' }
    ]
  });

  A('moto-adv-assetto-setup', {
    title: { t: 'Advanced setup and tuning', it: 'Assetto e messa a punto avanzati' },
    sum: [
      { t: '⟦Setup⟧ is an experiment: form a hypothesis, change one parameter at a time, measure the effect, decide.', it: 'La messa a punto è un esperimento: formula un’ipotesi, cambia un parametro per volta, misura l’effetto, decidi.' },
      { t: 'Tyre pressure rises with temperature, about 0.10 bar every 10 °C, so adjust it cold and record it.', it: 'La pressione dei pneumatici sale con la temperatura, circa 0,10 bar ogni 10 °C, quindi regolala a freddo e registrala.' },
      { t: '⟦Preload⟧ moves the working point of the spring and the ⟦sag⟧, but does not change its stiffness.', it: 'Il precarico sposta il punto di lavoro della molla e il sag, ma non ne cambia la rigidezza.' },
      { t: 'Damping is adjusted in compression and ⟦rebound⟧, at low and high speed; rebound too slow makes the suspension pack down.', it: 'L’idraulica si regola in compressione ed estensione, a bassa e alta velocità; un’estensione troppo lenta fa «sedere» la sospensione.' },
      { t: 'Changing the ride heights alters the rake and the ⟦trail⟧, so change them in small steps and note the starting values.', it: 'Cambiare le altezze altera l’inclinazione e l’avancorsa, quindi cambiale a piccoli passi e annota i valori di partenza.' },
      { t: 'Collect comparable data; if the fork uses more than 90–95% of its travel under braking, the spring is insufficient.', it: 'Raccogli dati confrontabili; se la forcella usa più del 90–95% della corsa in frenata, la molla è insufficiente.' },
      { t: 'Lap times are noisy: with a standard deviation of 0.4 s, a difference of 0.1 s is within the ⟦noise⟧.', it: 'I tempi sul giro sono rumorosi: con una deviazione standard di 0,4 s, una differenza di 0,1 s è dentro il rumore.' }
    ],
    gloss: [
      { w: 'setup', it: 'messa a punto' },
      { w: 'preload', it: 'precarico' },
      { w: 'sag', it: 'affondamento statico' },
      { w: 'rebound', it: 'estensione' },
      { w: 'trail', it: 'avancorsa' },
      { w: 'noise', it: 'variabilità casuale dei dati' },
      { w: 'rake', it: 'inclinazione dello sterzo' },
      { w: 'damping', it: 'smorzamento idraulico' },
      { w: 'motion ratio', it: 'rapporto di leva del leveraggio' },
      { w: 'spring rate', it: 'rigidezza della molla' }
    ]
  });

  A('moto-adv-telemetria-dati', {
    title: { t: 'Telemetry and data analysis', it: 'Telemetria e analisi dei dati' },
    sum: [
      { t: 'A ⟦logger⟧ records throttle, brake pressure, wheel speeds, suspension travel, IMU, GPS and temperatures.', it: 'Un logger registra acceleratore, pressione dei freni, velocità delle ruote, corsa delle sospensioni, IMU, GPS e temperature.' },
      { t: 'A wrong ⟦calibration⟧ falsifies everything, so check that the data are plausible before analysing them.', it: 'Una calibrazione sbagliata falsifica tutto, quindi controlla che i dati siano plausibili prima di analizzarli.' },
      { t: 'The ⟦Nyquist⟧ theorem allows components up to half the sampling frequency; above that, ⟦aliasing⟧ creates false signals.', it: 'Il teorema di Nyquist ammette componenti fino a metà della frequenza di campionamento; oltre, l’aliasing crea falsi segnali.' },
      { t: 'GPS runs at 10–25 Hz, so at 300 km/h and 10 Hz there is one sample every 8.3 m.', it: 'Il GPS lavora a 10–25 Hz, quindi a 300 km/h e 10 Hz c’è un campione ogni 8,3 m.' },
      { t: 'Compare laps as a function of distance, not time, and choose a reference lap.', it: 'Confronta i giri in funzione della distanza, non del tempo, e scegli un giro di riferimento.' },
      { t: 'The ⟦delta time⟧ is cumulative, so compare it section by section: in the example, rider B brakes later but loses 1.20 s.', it: 'Il delta tempo è cumulato, quindi confrontalo tratto per tratto: nell’esempio il pilota B frena più tardi ma perde 1,20 s.' },
      { t: 'The mean shows the pace and the standard deviation the consistency; ⟦correlation⟧ is not causation.', it: 'La media mostra il ritmo e la deviazione standard la costanza; la correlazione non è causalità.' }
    ],
    gloss: [
      { w: 'logger', it: 'sistema di acquisizione dati' },
      { w: 'calibration', it: 'calibrazione dei sensori' },
      { w: 'Nyquist', it: 'teorema del campionamento (f_s/2)' },
      { w: 'aliasing', it: 'falsi segnali a frequenza più bassa' },
      { w: 'delta time', it: 'differenza cumulata di tempo fra due giri' },
      { w: 'correlation', it: 'correlazione' },
      { w: 'sampling frequency', it: 'frequenza di campionamento' },
      { w: 'standard deviation', it: 'deviazione standard' },
      { w: 'reference lap', it: 'giro di riferimento' },
      { w: 'cherry picking', it: 'scegliere solo i dati che confermano l’ipotesi' }
    ]
  });

  A('moto-adv-simulazione-giro', {
    title: { t: 'Lap simulation and optimisation', it: 'Simulazione del giro e ottimizzazione' },
    sum: [
      { t: 'A ⟦quasi-steady⟧ lap simulator splits the track into small sections and assumes equilibrium at each point, ignoring transients.', it: 'Un simulatore del giro quasi-stazionario spezza la pista in piccoli tratti e assume l’equilibrio in ogni punto, ignorando i transitori.' },
      { t: 'The inputs are geometry, ⟦grip⟧, power, drag, mass and wheelie limits; the result is a speed profile and a lap time.', it: 'Gli ingredienti sono geometria, aderenza, potenza, resistenza, massa e limiti di impennata e stoppie; il risultato è un profilo di velocità e un tempo sul giro.' },
      { t: 'The maximum cornering speed is √(μ·g·R): with μ = 1.3 and R = 40 m it is 81.3 km/h.', it: 'La velocità massima in curva è √(μ·g·R): con μ = 1,3 e R = 40 m è 81,3 km/h.' },
      { t: 'A ⟦two-pass⟧ algorithm runs backward for braking and forward for acceleration, and takes the minimum at each point.', it: 'Un algoritmo a due passaggi va all’indietro per la frenata e in avanti per l’accelerazione, e prende il minimo in ogni punto.' },
      { t: 'Below about 211.7 km/h acceleration is limited by ⟦traction⟧ and wheelie, above it by power.', it: 'Sotto circa 211,7 km/h l’accelerazione è limitata da trazione e impennata, sopra dalla potenza.' },
      { t: 'In the example ⟦sensitivity⟧ shows that 5% more grip saves 0.73 s, while 5% more power saves only 0.10 s.', it: 'Nell’esempio la sensibilità mostra che il 5% di aderenza in più fa risparmiare 0,73 s, mentre il 5% di potenza in più solo 0,10 s.' },
      { t: 'The model gives an upper bound to validate with ⟦telemetry⟧; it is no invitation to replicate these speeds on public roads.', it: 'Il modello dà un limite superiore da validare con la telemetria, e non è un invito a replicare queste velocità sulle strade pubbliche.' }
    ],
    gloss: [
      { w: 'quasi-steady', it: 'quasi-stazionario' },
      { w: 'two-pass', it: 'a due passaggi (indietro e avanti)' },
      { w: 'traction', it: 'trazione' },
      { w: 'sensitivity', it: 'sensibilità ai parametri' },
      { w: 'telemetry', it: 'telemetria' },
      { w: 'lap simulator', it: 'simulatore del giro' },
      { w: 'grip', it: 'aderenza' },
      { w: 'objective function', it: 'funzione obiettivo' },
      { w: 'validation', it: 'validazione' },
      { w: 'speed profile', it: 'profilo di velocità' }
    ]
  });

})(window.ST = window.ST || {});
