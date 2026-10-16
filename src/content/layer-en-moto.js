(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);

  A('moto-citta-e-traffico', {
    title: { t: 'City and traffic', it: 'Città e traffico' },
    sum: [
      { t: 'In town speeds are low, but events are many, and many urban crashes happen at ⟦junctions⟧.', it: 'In città le velocità sono basse, ma gli eventi sono tanti, e molti incidenti urbani avvengono agli incroci.' },
      { t: 'The main principle is ⟦anticipation⟧: predict what every other user may do and leave space for their mistakes.', it: 'Il principio generale è l’anticipazione: prevedi cosa può fare ciascun altro utente e lascia spazio per l’errore.' },
      { t: 'At 50 km/h the ⟦stopping distance⟧ is 27.7 m, more than a 25 m view, so slow down early: ⟦right of way⟧ is not armour.', it: 'A 50 km/h lo spazio di arresto è 27,7 m, più di una visuale di 25 m: riduci in anticipo, perché la precedenza non è un’armatura.' },
      { t: 'At a yellow light a comfortable stop from 50 km/h needs 38.0 m, and the ⟦dilemma zone⟧ is why you slow down early.', it: 'Al giallo una frenata comoda da 50 km/h richiede 38,0 m, e la «zona di dilemma» è il motivo per cui si riduce in anticipo.' },
      { t: 'In a ⟦roundabout⟧ slow down at the entry, keep your lane, and go much slower in the wet, away from painted lines.', it: 'In rotatoria rallenta all’ingresso, mantieni la tua corsia e vai molto più piano sul bagnato, lontano dalle linee dipinte.' },
      { t: 'The rules on ⟦filtering⟧ vary and change, so check the current code and penalties; with 20 km/h of ⟦relative speed⟧ the impact energy is four times that at 10 km/h.', it: 'Le norme sul filtrare variano e cambiano: verifica il codice vigente e le sanzioni; con 20 km/h di velocità relativa l’energia d’urto è 4 volte quella a 10 km/h.' },
      { t: 'Avoid ⟦slalom⟧ riding, leave about one metre beside parked cars (the ⟦door zone⟧), and pass cyclists with at least 1 m, checking the current rule.', it: 'Evita lo slalom tra le auto, lascia circa un metro accanto alle auto parcheggiate (zona portiera) e sorpassa i ciclisti con almeno 1 m, verificando la norma vigente.' }
    ],
    gloss: [
      { w: 'junctions', it: 'incroci' },
      { w: 'anticipation', it: 'anticipazione, prevedere cosa faranno gli altri' },
      { w: 'stopping distance', it: 'spazio di arresto (reazione + frenata)' },
      { w: 'right of way', it: 'precedenza' },
      { w: 'dilemma zone', it: 'zona di dilemma (al giallo)' },
      { w: 'roundabout', it: 'rotatoria' },
      { w: 'filtering', it: 'filtrare tra le file di veicoli' },
      { w: 'relative speed', it: 'velocità relativa' },
      { w: 'slalom', it: 'slalom tra le auto' },
      { w: 'door zone', it: 'zona portiera (dove può aprirsi una portiera)' }
    ]
  });

  A('moto-urb-percezione-smidsy', {
    title: { t: 'Urban risk and “I didn’t see you”', it: 'Rischio urbano e «non l’avevo visto»' },
    sum: [
      { t: '⟦SMIDSY⟧ means “Sorry Mate, I Didn’t See You”, the phrase a rider often hears after a crash at a junction.', it: 'SMIDSY significa «Sorry Mate, I Didn’t See You» («scusa, non ti avevo visto»), la frase che il motociclista sente spesso dopo uno scontro a un incrocio.' },
      { t: 'The driver usually did look, but the brain did not register the bike: researchers call it ⟦looked-but-failed-to-see⟧.', it: 'L’automobilista di solito ha guardato, ma il cervello non ha registrato la moto: in letteratura si parla di «guardato ma non visto».' },
      { t: 'The brain sees mostly what its ⟦expectation⟧ predicts, and heavy ⟦mental workload⟧ in town leaves little attention for a small bike.', it: 'Il cervello vede soprattutto ciò che si aspetta, e il forte carico mentale in città lascia poca attenzione per una moto piccola.' },
      { t: 'At 50 m a bike 0.8 m wide has a ⟦visual angle⟧ of about 0.92°, a car 2.06°, so the bike seems farther and slower.', it: 'A 50 m una moto larga 0,8 m ha un angolo visivo di circa 0,92°, un’auto di 2,06°: la moto sembra più lontana e più lenta.' },
      { t: 'A car pulling out needs about 3.24 s, in which a bike covers about 45 m at 50 km/h and about 27 m at 30 km/h.', it: 'Un’auto che si immette impiega circa 3,24 s, tempo in cui la moto percorre circa 45 m a 50 km/h e circa 27 m a 30 km/h.' },
      { t: '⟦eye contact⟧ is not proof of being seen: trust a vehicle that clearly slows or stops, and treat a courtesy gesture as information, not a guarantee.', it: 'Il contatto visivo non è prova di essere stati visti: fidati di un veicolo che rallenta o si ferma in modo evidente e considera un gesto di cortesia un’informazione, non una garanzia.' },
      { t: 'Practise ⟦defensive riding⟧: ride as if invisible, slow down before conflict points, keep fingers on the brakes and leave space.', it: 'Pratica la guida difensiva: guida come se fossi invisibile, riduci prima dei punti di conflitto, tieni le dita sui freni e lascia spazio.' }
    ],
    gloss: [
      { w: 'SMIDSY', it: 'sigla di «scusa, non ti avevo visto»' },
      { w: 'looked-but-failed-to-see', it: 'guardato ma non visto' },
      { w: 'expectation', it: 'aspettativa' },
      { w: 'mental workload', it: 'carico mentale' },
      { w: 'visual angle', it: 'angolo visivo' },
      { w: 'eye contact', it: 'contatto visivo' },
      { w: 'defensive riding', it: 'guida difensiva' },
      { w: 'right of way', it: 'precedenza' },
      { w: 'high-visibility clothing', it: 'abbigliamento ad alta visibilità' },
      { w: 'conflict point', it: 'punto di conflitto (incroci, uscite)' }
    ]
  });

  A('moto-urb-angoli-ciechi', {
    title: { t: 'Blind spots of cars and lorries', it: 'Angoli ciechi di auto e camion' },
    sum: [
      { t: 'A ⟦blind spot⟧ is an area the driver cannot see directly or in the mirrors: if you cannot see their mirror, they cannot see you.', it: 'Un angolo cieco è una zona che il conducente non vede né direttamente né negli specchietti: se non vedi il suo specchietto, lui non vede te.' },
      { t: 'The front ⟦pillar⟧ is about 15 cm wide and at 50 m it can hide about 5.3 m, so a whole bike may disappear.', it: 'Il montante anteriore è largo circa 15 cm e a 50 m può nascondere circa 5,3 m: una moto intera può sparire.' },
      { t: 'On a ⟦collision course⟧ the viewing angle stays constant, so change your position in the lane slightly or slow down.', it: 'Su una rotta di collisione l’angolo di vista resta costante: sposta leggermente la posizione nella corsia o rallenta.' },
      { t: 'Beside a car, ⟦relative speed⟧ decides your exposure: a 5 m blind zone lasts 1.8 s at 10 km/h and 0.6 s at 30 km/h, so do not ride alongside.', it: 'Accanto a un’auto la velocità relativa decide quanto sei esposto: una zona cieca di 5 m dura 1,8 s a 10 km/h e 0,6 s a 30 km/h, quindi non affiancare.' },
      { t: '⟦heavy vehicles⟧ have much bigger blind spots: follow at least 3 seconds back and never stop in front of a lorry’s cab.', it: 'I mezzi pesanti hanno zone cieche molto più ampie: segui ad almeno 3 secondi e non sostare mai davanti alla cabina di un camion.' },
      { t: 'In a turn the rear wheels cut inside (⟦off-tracking⟧): the gap that opens is not an invitation, and you could be crushed.', it: 'In svolta le ruote posteriori tagliano all’interno (off-tracking): il varco che si apre non è un invito e puoi essere schiacciato.' },
      { t: 'Watch the front wheels and the driver’s head to read a ⟦lane change⟧ early, and never put the bike where you would have no way out.', it: 'Guarda le ruote anteriori e la testa del conducente per riconoscere in anticipo un cambio di corsia, e non mettere mai la moto dove non avresti via d’uscita.' }
    ],
    gloss: [
      { w: 'blind spot', it: 'angolo cieco' },
      { w: 'pillar', it: 'montante (del parabrezza)' },
      { w: 'collision course', it: 'rotta di collisione' },
      { w: 'relative speed', it: 'velocità relativa' },
      { w: 'heavy vehicles', it: 'mezzi pesanti' },
      { w: 'off-tracking', it: 'ruote posteriori che tagliano la curva in svolta' },
      { w: 'lane change', it: 'cambio di corsia' },
      { w: 'shoulder check', it: 'occhiata di spalla' },
      { w: 'mirror', it: 'specchietto' },
      { w: 'following distance', it: 'distanza di sicurezza' }
    ]
  });

  A('moto-urb-incroci-precedenze', {
    title: { t: 'Junctions, right of way and roundabouts', it: 'Incroci, precedenze e rotatorie' },
    sum: [
      { t: 'A ⟦junction⟧ is a ⟦conflict point⟧: read it from afar, slow down early, look for confirmation, and pass only if the free space you see is enough.', it: 'L’incrocio è un punto di conflitto: leggilo da lontano, rallenta prima, cerca conferme e passa solo se lo spazio libero che vedi basta.' },
      { t: 'Having ⟦right of way⟧ is a right, not a barrier: if the other driver ignores it, you are right but on the ground.', it: 'Avere la precedenza è un diritto, non una barriera: se l’altro non la rispetta, hai ragione ma sei a terra.' },
      { t: 'The usual order of priority (to verify in the current code) is traffic officers, traffic lights, road signs, then ⟦priority to the right⟧.', it: 'L’ordine di priorità generale (da verificare nel codice vigente) è: agenti del traffico, semafori, segnali, poi precedenza a destra.' },
      { t: 'A car pulling out needs 3.24 s, about 4 s with your ⟦reaction time⟧: that is 55.6 m at 50 km/h and 33.3 m at 30 km/h.', it: 'Un’auto che si immette impiega 3,24 s, circa 4 s con il tuo tempo di reazione: sono 55,6 m a 50 km/h e 33,3 m a 30 km/h.' },
      { t: 'On a 3 s ⟦yellow light⟧ at 50 km/h you cover 41.7 m but stopping needs 27.7 m dry, 38.0 m wet.', it: 'Con un giallo di 3 s a 50 km/h percorri 41,7 m, ma per fermarti servono 27,7 m sull’asciutto e 38,0 m sul bagnato.' },
      { t: 'In a ⟦roundabout⟧ priority normally goes to those already in the ring; with a 15 m radius the ⟦lateral acceleration⟧ is 0.21 g at 20 km/h and 0.47 g at 30 km/h.', it: 'In rotatoria la precedenza è di norma di chi è già nell’anello; con raggio di 15 m l’accelerazione laterale è 0,21 g a 20 km/h e 0,47 g a 30 km/h.' },
      { t: 'Near a junction do not start ⟦overtaking⟧ and never ride alongside a long vehicle about to turn; a car slowing for no reason is a warning.', it: 'In prossimità di un incrocio non sorpassare e non affiancare mai un mezzo lungo che sta per svoltare; un’auto che rallenta senza motivo è un avviso.' }
    ],
    gloss: [
      { w: 'junction', it: 'incrocio' },
      { w: 'conflict point', it: 'punto di conflitto' },
      { w: 'right of way', it: 'precedenza' },
      { w: 'priority to the right', it: 'precedenza a destra' },
      { w: 'reaction time', it: 'tempo di reazione' },
      { w: 'yellow light', it: 'semaforo giallo' },
      { w: 'roundabout', it: 'rotatoria' },
      { w: 'lateral acceleration', it: 'accelerazione laterale (in curva)' },
      { w: 'overtaking', it: 'sorpasso' },
      { w: 'traffic lights', it: 'semafori' }
    ]
  });

  A('moto-urb-spazio-arresto', {
    title: { t: 'Escape space and safe distance', it: 'Spazio di fuga e distanza di sicurezza' },
    sum: [
      { t: '⟦escape space⟧ is the free space you need to avoid a problem by stopping or moving: ahead, to the sides and behind.', it: 'Lo spazio di fuga è lo spazio libero che ti serve per evitare un problema fermandoti o spostandoti: davanti, ai lati e dietro.' },
      { t: '⟦stopping distance⟧ is ⟦reaction distance⟧ plus ⟦braking distance⟧, using 1 s reaction and 7 m/s² dry or 4 m/s² wet as teaching values.', it: 'Lo spazio di arresto è spazio di reazione più spazio di frenata, usando come valori didattici 1 s di reazione e 7 m/s² sull’asciutto o 4 m/s² sul bagnato.' },
      { t: 'At 50 km/h it is 13.9 m plus 13.8 m, so 27.7 m dry; in the wet it is 38.0 m, about 37% more.', it: 'A 50 km/h sono 13,9 m più 13,8 m, quindi 27,7 m sull’asciutto; sul bagnato sono 38,0 m, circa il 37% in più.' },
      { t: 'Braking distance grows with the square of speed: from 30 to 60 km/h dry stopping distance grows 2.7 times, from 13.3 to 36.5 m.', it: 'Lo spazio di frenata cresce con il quadrato della velocità: da 30 a 60 km/h lo spazio di arresto asciutto cresce di 2,7 volte, da 13,3 a 36,5 m.' },
      { t: 'If space is not enough you still hit with a residual ⟦impact speed⟧: an obstacle at 20 m with 50 km/h means about 37 km/h, at 25 m about 22 km/h.', it: 'Se lo spazio non basta urti comunque con una velocità residua: un ostacolo a 20 m con 50 km/h significa circa 37 km/h, a 25 m circa 22 km/h.' },
      { t: 'Measure ⟦following distance⟧ in seconds: at 50 km/h 2 s is 27.8 m and 3 s is 41.7 m, and in rain use 3–4 s.', it: 'Misura la distanza dal veicolo davanti in secondi: a 50 km/h 2 s sono 27,8 m e 3 s sono 41,7 m, e con la pioggia si usano 3–4 s.' },
      { t: 'Halving speed to 25 km/h cuts stopping distance from 27.7 to 10.4 m; the code asks for adequate distance, so check the current text.', it: 'Dimezzare la velocità a 25 km/h riduce lo spazio di arresto da 27,7 a 10,4 m; il codice richiede una distanza adeguata, quindi verifica il testo vigente.' }
    ],
    gloss: [
      { w: 'escape space', it: 'spazio di fuga' },
      { w: 'stopping distance', it: 'spazio di arresto' },
      { w: 'reaction distance', it: 'spazio percorso durante la reazione' },
      { w: 'braking distance', it: 'spazio di frenata' },
      { w: 'impact speed', it: 'velocità d’impatto' },
      { w: 'following distance', it: 'distanza dal veicolo davanti' },
      { w: 'deceleration', it: 'decelerazione' },
      { w: 'reaction time', it: 'tempo di reazione' },
      { w: 'grip', it: 'aderenza' },
      { w: 'kinetic energy', it: 'energia cinetica' }
    ]
  });

  A('moto-urb-fondi-rotaie-bagnato', {
    title: { t: 'Urban surfaces: rails, manholes, paint and wet', it: 'Fondo urbano: rotaie, tombini, strisce e bagnato' },
    sum: [
      { t: 'A city road is a mosaic of surfaces, and a bike has two small ⟦contact patch⟧ areas, so one slippery spot is enough.', it: 'La strada urbana è un mosaico di fondi e la moto ha due piccole impronte a contatto con il suolo: basta un punto scivoloso.' },
      { t: '⟦grip⟧ is described by μ; teaching values are about 0.7 dry, 0.4 wet and 0.3 or less on wet paint or metal.', it: 'L’aderenza si descrive con μ; i valori didattici sono circa 0,7 sull’asciutto, 0,4 sul bagnato e 0,3 o meno su vernice o metallo bagnati.' },
      { t: 'At 40 km/h you stop in 19.9 m dry and 26.5 m wet (+33%), and the ⟦first rain⟧ after a dry spell is the worst.', it: 'A 40 km/h ti fermi in 19,9 m sull’asciutto e 26,5 m sul bagnato (+33%), e l’inizio della pioggia dopo un periodo secco è il momento peggiore.' },
      { t: 'Wet ⟦road paint⟧ is slippery (about 32.1 m at 40 km/h), so do not brake or lean on stripes and arrows.', it: 'La vernice stradale bagnata è scivolosa (circa 32,1 m a 40 km/h): non frenare né piegare su strisce e frecce.' },
      { t: '⟦manhole covers⟧ and metal plates are slippery when wet and may sit at a different level: steer early and gently, no hard braking on them.', it: 'Tombini e piastre metalliche sono scivolosi da bagnati e possono essere a livello diverso: sterza presto e dolcemente, senza frenate brusche sopra.' },
      { t: '⟦tram rails⟧ are the most treacherous surface: a 5 cm groove is crossed over 5.0 cm at 90° but 14.6 cm at 20°, so cross close to perpendicular.', it: 'Le rotaie del tram sono il fondo più insidioso: una gola di 5 cm è percorsa per 5,0 cm a 90° ma per 14,6 cm a 20°, quindi attraversa il più possibile in perpendicolare.' },
      { t: 'Stay ⟦upright⟧ with a steady throttle and no braking over rails, paint and ⟦cobblestones⟧, and brake before them, not on them.', it: 'Resta in verticale, con gas costante e senza frenare, su rotaie, vernice e sanpietrini, e frena prima, non sopra.' }
    ],
    gloss: [
      { w: 'contact patch', it: 'impronta di contatto della gomma' },
      { w: 'grip', it: 'aderenza' },
      { w: 'first rain', it: 'inizio della pioggia dopo un periodo secco' },
      { w: 'road paint', it: 'vernice stradale (strisce, frecce)' },
      { w: 'manhole covers', it: 'tombini, chiusini' },
      { w: 'tram rails', it: 'rotaie del tram' },
      { w: 'groove', it: 'gola, scanalatura della rotaia' },
      { w: 'cobblestones', it: 'sanpietrini, pavé' },
      { w: 'upright', it: 'in verticale' },
      { w: 'steady throttle', it: 'gas costante' }
    ]
  });

  A('moto-urb-utenti-vulnerabili', {
    title: { t: 'Pedestrians, cyclists, e-scooters and car doors', it: 'Pedoni, ciclisti, monopattini e portiere' },
    sum: [
      { t: 'Pedestrians, cyclists, scooter riders and children are ⟦vulnerable road users⟧ even more than you, so the bike has greater responsibility.', it: 'Pedoni, ciclisti, monopattinisti e bambini sono utenti vulnerabili ancora più di te, quindi la moto ha una responsabilità maggiore.' },
      { t: 'A pedestrian walks at about 1.4 m/s and often appears from behind a stopped van, a bus or out of ⟦driveways⟧.', it: 'Un pedone cammina a circa 1,4 m/s e spesso compare da dietro un furgone fermo, un autobus o da passi carrai.' },
      { t: 'If a pedestrian appears at 15 m, at 30 km/h you stop in 13.3 m, but at 40 km/h you hit at about 30 km/h.', it: 'Se un pedone compare a 15 m, a 30 km/h ti fermi in 13,3 m, ma a 40 km/h urti a circa 30 km/h.' },
      { t: 'Passing a cyclist at 50 km/h gives a ⟦relative speed⟧ of 9.7 m/s, so leave wide ⟦lateral clearance⟧ (about 1.5 m, to verify) and pass slowly.', it: 'Sorpassare un ciclista a 50 km/h dà una velocità relativa di 9,7 m/s: lascia ampio spazio laterale (circa 1,5 m, da verificare) e sorpassa piano.' },
      { t: '⟦e-scooters⟧ have small wheels, low visibility and mixed behaviour, so give them as much space as a cyclist.', it: 'I monopattini hanno ruote piccole, bassa visibilità e comportamento misto: lascia loro lo stesso spazio di un ciclista.' },
      { t: 'Keep at least 1 m, better 1.5 m, from parked cars: an open door takes about 1 m, and this is the ⟦door zone⟧.', it: 'Tieni almeno 1 m, meglio 1,5 m, dalle auto parcheggiate: una portiera aperta occupa circa 1 m, e questa è la zona portiera.' },
      { t: 'The code protects pedestrians on ⟦pedestrian crossings⟧ and forbids opening doors dangerously, but check the current text: the norm is a minimum, prudence a method.', it: 'Il codice tutela i pedoni sugli attraversamenti e vieta di aprire le portiere con pericolo, ma verifica il testo vigente: la norma è un minimo, la prudenza un metodo.' }
    ],
    gloss: [
      { w: 'vulnerable road users', it: 'utenti vulnerabili della strada' },
      { w: 'driveways', it: 'passi carrai' },
      { w: 'relative speed', it: 'velocità relativa' },
      { w: 'lateral clearance', it: 'distanza laterale' },
      { w: 'e-scooters', it: 'monopattini elettrici' },
      { w: 'door zone', it: 'zona portiera' },
      { w: 'pedestrian crossings', it: 'attraversamenti pedonali, strisce' },
      { w: 'bus stop', it: 'fermata dell’autobus' },
      { w: 'overtaking', it: 'sorpasso' },
      { w: 'micromobility', it: 'micromobilità (monopattini, bici)' }
    ]
  });

  A('moto-urb-filtraggio', {
    title: { t: 'Filtering between lines of traffic', it: 'Filtraggio e marcia tra le file' },
    sum: [
      { t: '⟦filtering⟧ means riding between two lines of slow or queued vehicles, but common does not mean lawful or safe.', it: 'Il filtraggio è la marcia tra due file di veicoli lenti o incolonnati, ma diffuso non significa lecito né sicuro.' },
      { t: 'In Italy it is not clearly regulated: this is a ⟦grey area⟧, so check the current code; this is not legal advice.', it: 'In Italia non è disciplinato in modo chiaro: è una zona grigia, quindi verifica il codice vigente; questa non è consulenza legale.' },
      { t: 'With two 3 m lanes and cars 2.0 m wide with mirrors, a 0.9 m bike has only 0.55 m of ⟦side clearance⟧ per side.', it: 'Con due corsie da 3 m e auto larghe 2,0 m con gli specchietti, una moto di 0,9 m ha solo 0,55 m di spazio laterale per lato.' },
      { t: 'The ⟦speed difference⟧ matters: with a queue at 10 km/h, the ⟦stopping distance⟧ is 7.8 m at 20 km/h and 13.3 m at 30 km/h.', it: 'La differenza di velocità conta: con una colonna a 10 km/h, lo spazio di arresto è 7,8 m a 20 km/h e 13,3 m a 30 km/h.' },
      { t: 'Typical risks in a ⟦queue⟧ are opening doors, lane changes from a car’s ⟦blind spot⟧, pedestrians, long vehicles and the queue restarting.', it: 'I rischi tipici in colonna sono portiere che si aprono, cambi di corsia da auto che non ti vedono nell’angolo cieco, pedoni, mezzi lunghi e la ripartenza della colonna.' },
      { t: 'If you filter where permitted, keep speed low (a teaching rule: up to 20 km/h, 10–15 km/h above traffic) and avoid junctions and long vehicles.', it: 'Se filtri dove consentito, tieni la velocità bassa (regola didattica: fino a 20 km/h, 10–15 km/h sopra il traffico) ed evita incroci e mezzi lunghi.' },
      { t: 'The time saved is small, 6 minutes in the queue against 3 minutes at 20 km/h on 1 km: when in doubt, stay in line.', it: 'Il tempo risparmiato è piccolo, 6 minuti in fila contro 3 minuti a 20 km/h su 1 km: nel dubbio resta in fila.' }
    ],
    gloss: [
      { w: 'filtering', it: 'filtraggio, marcia tra le file' },
      { w: 'grey area', it: 'zona grigia (norma poco chiara)' },
      { w: 'side clearance', it: 'spazio laterale libero' },
      { w: 'speed difference', it: 'differenza di velocità' },
      { w: 'stopping distance', it: 'spazio di arresto' },
      { w: 'queue', it: 'colonna, coda di veicoli' },
      { w: 'blind spot', it: 'angolo cieco' },
      { w: 'door zone', it: 'zona portiera' },
      { w: 'long vehicles', it: 'mezzi lunghi' },
      { w: 'legal advice', it: 'consulenza legale' }
    ]
  });

  A('moto-urb-manovre-parcheggio', {
    title: { t: 'Low-speed manoeuvres and parking', it: 'Manovre a bassa velocità e parcheggio' },
    sum: [
      { t: 'Many falls happen at a standstill, because at low speed the ⟦gyroscopic effect⟧ and the bike’s self-stabilising geometry are weak.', it: 'Molte cadute avvengono da fermi, perché a bassa velocità l’effetto giroscopico e l’autostabilità dovuta alla geometria sono deboli.' },
      { t: 'With a high ⟦centre of gravity⟧ and 250 kg, recovering a 10° lean takes about 256 N·m of ⟦torque⟧; beyond 10° many people cannot.', it: 'Con un baricentro alto e 250 kg, recuperare un’inclinazione di 10° richiede circa 256 N·m di coppia; oltre 10° molte persone non ci riescono.' },
      { t: 'Look where you want to go, use the clutch ⟦friction zone⟧, a steady throttle and the ⟦rear brake⟧, and avoid the front brake with the steering turned.', it: 'Guarda dove vuoi andare, usa la zona di attrito della frizione, il gas costante e il freno posteriore, ed evita il freno anteriore con lo sterzo girato.' },
      { t: 'A ⟦U-turn⟧ needs about 5–6 m, since the ⟦turning radius⟧ is about 2.5–3 m; check where U-turns are banned, or push the bike by hand.', it: 'Un’inversione a U richiede circa 5–6 m, perché il raggio di sterzata è circa 2,5–3 m; verifica dove è vietata l’inversione, oppure spingi la moto a mano.' },
      { t: 'For a ⟦hill start⟧ use the rear brake, a little more throttle and the friction point; on a 10% slope a 250 kg bike pulls with about 244 N.', it: 'Per la partenza in salita usa il freno posteriore, un po’ più gas e il punto di attrito; su una pendenza del 10% una moto da 250 kg tira con circa 244 N.' },
      { t: 'The ⟦side stand⟧ concentrates weight: about 12.3 bar on 10 cm² but 1.2 bar with a plate, so soft or hot asphalt can let it sink.', it: 'Il cavalletto laterale concentra il peso: circa 12,3 bar su 10 cm² ma 1,2 bar con un piastrino, quindi asfalto molle o caldo può farlo affondare.' },
      { t: 'Leaving a parking space, check mirrors, look over your shoulder, signal and exit slowly; practise in an empty car park with protective gear.', it: 'Uscendo da un parcheggio controlla gli specchietti, guarda di spalla, segnala ed esci lentamente; esercitati in un parcheggio vuoto con le protezioni.' }
    ],
    gloss: [
      { w: 'gyroscopic effect', it: 'effetto giroscopico delle ruote' },
      { w: 'centre of gravity', it: 'baricentro' },
      { w: 'torque', it: 'coppia (momento di una forza)' },
      { w: 'friction zone', it: 'zona di attrito della frizione' },
      { w: 'rear brake', it: 'freno posteriore' },
      { w: 'U-turn', it: 'inversione a U' },
      { w: 'turning radius', it: 'raggio di sterzata' },
      { w: 'hill start', it: 'partenza in salita' },
      { w: 'side stand', it: 'cavalletto laterale' },
      { w: 'steady throttle', it: 'gas costante' }
    ]
  });

  A('moto-urb-visibilita-notte-pioggia', {
    title: { t: 'Visibility, night and rain', it: 'Visibilità, notte e pioggia' },
    sum: [
      { t: 'You must see and be seen, and the key rule is that speed must let you stop within your ⟦usable sight distance⟧.', it: 'Devi vedere e farti vedere, e la regola chiave è che la velocità deve permetterti di fermarti entro la distanza di visione utile.' },
      { t: 'By day bright colours help, at night ⟦reflective material⟧ matters most: a dark-clothed pedestrian shows at about 25–30 m, a reflective one from over 100 m.', it: 'Di giorno aiutano i colori vivaci, di notte conta soprattutto il materiale riflettente: un pedone vestito di scuro si vede a circa 25–30 m, uno riflettente da oltre 100 m.' },
      { t: 'The ⟦dipped headlight⟧ is the basic light, daytime use may be required for bikes, and the ⟦high beam⟧ is for dark roads with no vehicles ahead or oncoming.', it: 'L’anabbagliante è la luce di base, l’uso diurno può essere obbligatorio per le moto, e l’abbagliante serve su strade buie senza veicoli davanti o contromano.' },
      { t: 'Check that the ⟦brake light⟧ works with both brakes; a badly aimed or dirty headlight can cut your sight distance by 20–30%.', it: 'Verifica che la luce di stop si accenda con entrambi i freni; un faro regolato male o sporco può ridurre la distanza di visione del 20–30%.' },
      { t: 'At night with 50 m of sight the top speed is about 73 km/h dry, but if a dark pedestrian shows at 25 m it is about 47 km/h.', it: 'Di notte con 50 m di visione la velocità massima è circa 73 km/h sull’asciutto, ma se un pedone scuro si vede a 25 m è circa 47 km/h.' },
      { t: 'In rain the same distances give about 59 and 38 km/h, so keep 3–4 s distance, ride smoothly and avoid ⟦puddles⟧ and painted lines.', it: 'Con la pioggia le stesse distanze danno circa 59 e 38 km/h: tieni 3–4 s di distanza, guida dolcemente ed evita pozzanghere e linee dipinte.' },
      { t: 'Keep the ⟦visor⟧ clean and fog-free, stay back from ⟦spray⟧, and when ⟦glare⟧ hits look at the road edge, not at the lights.', it: 'Tieni la visiera pulita e senza appannamento, resta lontano dagli spruzzi e, se ti abbagliano, guarda il margine della strada e non i fari.' }
    ],
    gloss: [
      { w: 'usable sight distance', it: 'distanza di visione utile' },
      { w: 'reflective material', it: 'materiale riflettente' },
      { w: 'dipped headlight', it: 'luce anabbagliante' },
      { w: 'high beam', it: 'luce abbagliante' },
      { w: 'brake light', it: 'luce di stop' },
      { w: 'puddles', it: 'pozzanghere' },
      { w: 'visor', it: 'visiera del casco' },
      { w: 'spray', it: 'spruzzi d’acqua' },
      { w: 'glare', it: 'abbagliamento' },
      { w: 'anti-fog film', it: 'pellicola antiappannante' }
    ]
  });

  A('moto-urb-scenari-scooter-passeggero', {
    title: { t: 'Scooters, passengers and decision scenarios', it: 'Scooter, passeggero e scenari di decisione' },
    sum: [
      { t: 'Scooters have smaller wheels and an ⟦automatic transmission⟧; a 3 cm manhole is 10% of a 17″ wheel radius but 13.8% of a 10″ one.', it: 'Gli scooter hanno ruote più piccole e un cambio automatico; un tombino da 3 cm vale il 10% del raggio di una ruota da 17″ ma il 13,8% di una da 10″.' },
      { t: 'Scooter brakes may be ⟦combined braking⟧, and ⟦ABS⟧ makes hard braking safer but does not cancel physics; stopping distances and priority rules stay the same.', it: 'I freni dello scooter possono essere combinati, e l’ABS rende più sicura la frenata decisa ma non annulla la fisica; spazi di arresto e precedenze restano gli stessi.' },
      { t: 'A ⟦passenger⟧ of 75 kg raises the mass from 250 to 325 kg (+30%), and the ⟦kinetic energy⟧ at 50 km/h from 24.1 to 31.3 kJ.', it: 'Un passeggero di 75 kg porta la massa da 250 a 325 kg (+30%), e l’energia cinetica a 50 km/h da 24,1 a 31,3 kJ.' },
      { t: 'In practice braking gets worse: if deceleration drops from 7 to 6 m/s², stopping goes from 27.7 to 30.0 m, so add 1 s of ⟦following distance⟧.', it: 'In pratica la frenata peggiora: se la decelerazione scende da 7 a 6 m/s², l’arresto passa da 27,7 a 30,0 m, quindi aggiungi 1 s di distanza dal veicolo davanti.' },
      { t: 'The passenger needs an approved helmet, gloves and visible clothing, must sit when the bike is stable and not move abruptly; age requirements are in the code, to verify.', it: 'Il passeggero deve avere casco omologato, guanti e abbigliamento visibile, sedersi a moto stabile e non muoversi bruscamente; i requisiti di età sono nel codice, da verificare.' },
      { t: 'In scenarios A and B, slow to 30 km/h at a junction (13.3 m ⟦stopping distance⟧) and keep 1–1.5 m from a parked taxi.', it: 'Negli scenari A e B riduci a 30 km/h a un incrocio (arresto 13,3 m) e tieni 1–1,5 m da un taxi in sosta.' },
      { t: 'In scenarios C to F do not overtake a bus, ride under 40 km/h in the wet at night, let a turning lorry pass, and stay in the queue; always ask what ⟦margin⟧ you would have.', it: 'Negli scenari da C a F non sorpassare un autobus, vai sotto i 40 km/h sul bagnato di notte, lascia passare un camion che svolta e resta in fila; chiediti sempre che margine avresti.' }
    ],
    gloss: [
      { w: 'automatic transmission', it: 'cambio automatico (variatore)' },
      { w: 'combined braking', it: 'frenata combinata (CBS)' },
      { w: 'ABS', it: 'sistema antibloccaggio dei freni' },
      { w: 'passenger', it: 'passeggero' },
      { w: 'kinetic energy', it: 'energia cinetica' },
      { w: 'following distance', it: 'distanza dal veicolo davanti' },
      { w: 'stopping distance', it: 'spazio di arresto' },
      { w: 'margin', it: 'margine di sicurezza' },
      { w: 'side stand', it: 'cavalletto laterale' },
      { w: 'deceleration', it: 'decelerazione' }
    ]
  });
})(window.ST = window.ST || {});
