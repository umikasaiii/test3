/* Moto e guida sportiva — L1 Guida sicura su strada: 8 lezioni. Tutto è pensato per la guida legale e prudente su strada;
   i valori numerici sono ordini di grandezza didattici, le norme del codice della strada possono cambiare. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;

  /* ---------- L1 · Guida sicura su strada ---------- */
  C.addTopic({
    id: 'moto-rischio-e-statistica', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'Percezione del rischio e statistica',
    summary: 'Dove e come avvengono gli incidenti in moto, perché il motociclista è vulnerabile, quanta energia c’è in gioco e come costruire un margine di sicurezza.',
    objectives: ['Conoscere gli ordini di grandezza del rischio e le categorie tipiche di incidente', 'Calcolare l’energia in gioco e confrontarla con una caduta dall’alto', 'Definire e usare il margine di sicurezza (spazio visibile meno spazio necessario)'],
    pages: [
      { h: 'Il rischio non è una sensazione', b: `Andare in moto è bellissimo e **statisticamente più rischioso** che andare in auto. Il rischio non si valuta a sensazione: chi si sente sicuro perché «non è mai successo niente» sta usando una prova sola, la propria esperienza, mentre gli incidenti sono eventi rari che si concentrano su pochi momenti.\n\nPerché si parla di **rischio** e non di semplice pericolo? Il rischio combina due cose:\n\n> **rischio = probabilità che accada × gravità delle conseguenze**\n\nIn moto la probabilità di un incidente non è necessariamente molto più alta di quella in auto per ogni singola situazione, ma la **gravità** lo è: non c’è abitacolo, cinture, airbag di serie come in auto. Una caduta a bassa velocità, che in auto sarebbe un ammaccamento, in moto può significare un trauma serio.\n\nLa buona notizia è che molti fattori sono **sotto il tuo controllo**: velocità, distanza, visibilità, equipaggiamento, stato fisico. La lezione serve a capire dove si concentra il rischio per ridurlo in modo ragionato.` },
      { h: 'Ordini di grandezza', b: `Le statistiche europee e italiane (ISTAT, ACI, ETSC) mostrano in modo coerente che, **per chilometro percorso**, un motociclista ha un rischio di morire in incidente di **ordine 15–20 volte** quello di un occupante d’auto. Il numero esatto cambia da paese e da anno ad anno: tienilo come ordine di grandezza, non come valore preciso.\n\nUn altro dato ricorrente: i motociclisti sono una quota **molto più alta delle vittime** della strada di quanto lo siano tra i veicoli in circolazione.\n\n> Esempio didattico: se un'auto avesse un rischio 1 per milione di km, la moto avrebbe circa 15–20. Su 10 000 km all'anno, il rischio relativo è quindi 15–20 volte più alto, a parità di tutto il resto.\n\nIl rischio **non è uguale per tutti**: dipende da esperienza, età, tipo di strada, ora del giorno, meteo, sobrietà, velocità. Chi guida in modo prudente, con equipaggiamento completo e sobrio, è in una zona molto diversa dalla media.\n\nI primi mesi dopo la patente o dopo una lunga pausa sono un periodo critico: esperienza e rischio si legano.` },
      { h: 'Dove avvengono gli incidenti', b: `Gli studi sugli incidenti motociclistici (ad esempio il rapporto americano di Hurt e il progetto europeo MAIDS) trovano alcuni **schemi ricorrenti**:\n\n- **Intersezioni** (incroci, immissioni, rotatorie): una quota rilevante degli incidenti con un altro veicolo, spesso un'auto che **non dà la precedenza** o svolta davanti alla moto.\n- **Svolta a sinistra dell'auto**: il conducente guarda, ma «non vede» la moto, stretta e con un solo faro, e le attribuisce una velocità minore del reale.\n- **Curve** su strade extraurbane: uscite di strada o invasione della corsia opposta, spesso da **velocità eccessiva per il raggio** o frenata in piega.\n- **Perdita di aderenza** su fondi difficili: ghiaia, pioggia, olio, foglie, vernice bagnata.\n- **Urti da dietro** o ostacoli improvvisi.\n\nNegli incidenti con un altro veicolo, gli studi indicano che l'**errore primario è spesso dell'altro conducente**, tipicamente per mancata percezione. Ma questo non è un'assoluzione: se sai che «non ti vedono», **guidi come se non ti vedessero**. Negli incidenti con un solo veicolo l'errore è invece di solito del motociclista.` },
      { h: 'Vulnerabilità: quanta energia', b: `Il motociclista è **la zona di deformazione del proprio veicolo**: l'energia dell'urto passa al corpo. L'energia cinetica è:

> **E = ½ · m · v²**

e dipende dal **quadrato** della velocità. Un modo concreto per capirla è l'equivalente in **altezza di caduta**: la velocità v corrisponde a quella raggiunta cadendo da un'altezza h = v² / (2g), con g ≈ 9,81 m/s².

> v = 50 km/h = 13,9 m/s → h ≈ **9,8 m** (circa un terzo piano)
> v = 90 km/h = 25 m/s → h ≈ **31,9 m** (circa 10 piani)
> v = 130 km/h = 36,1 m/s → h ≈ **66,5 m**

Passare da 50 a 100 km/h **quadruplica** l'energia (non la raddoppia). Per questo la velocità è il fattore che pesa di più sulla gravità delle conseguenze.

Casco, giacca, guanti, pantaloni protettivi e stivali omologati non rendono invincibili: **riducono** la gravità di alcuni traumi. Sono l'ultima difesa, non il sostituto della prevenzione.` },
      { h: 'Il margine di sicurezza', b: `Un **margine di sicurezza** è lo spazio o il tempo in più rispetto al minimo necessario per evitare un problema. Si può esprimere così:

> **margine = spazio libero e visibile − spazio che ti serve per fermarti (o evitare)**

Se il margine è positivo e sufficiente, puoi gestire un imprevisto; se è zero o negativo, un imprevisto diventa un incidente.

> Esempio: vedi la strada libera per 60 m. Il tuo spazio di arresto a 70 km/h è circa 19,4 (reazione, 1 s) + 27,0 (frenata) = **46,4 m**. Margine = 60 − 46,4 = **13,6 m**.
> A 90 km/h servono 25 + 44,6 = **69,6 m**: margine **−9,6 m**, cioè non riesci a fermarti in tempo.

Il margine si costruisce in tre modi: **ridurre la velocità**, **guardare più lontano** (più spazio visibile) e **anticipare** (agire prima, cioè avere più tempo). Un margine è come un salvadanaio: lo consumano la distrazione, la stanchezza, la pioggia, la sorpresa.` },
      { h: 'Gli errori mentali tipici', b: `Alcune distorsioni del giudizio fanno sottovalutare il rischio:

- **Eccesso di fiducia**: «io guido bene». Quasi tutti si ritengono sopra la media, il che statisticamente non può essere vero.
- **Abitudine**: sul percorso di tutti i giorni il cervello «va in automatico» e nota meno gli imprevisti.
- **Normalizzazione della devianza**: se ho superato un po' il limite molte volte senza problemi, sembra normale, finché una volta non lo è.
- **Bias del sopravvissuto**: sentiamo le storie di chi ha fatto sempre così «e va bene», non di chi ha avuto l'incidente.
- **Illusione di controllo**: sentirsi in controllo perché la moto è reattiva, anche quando il margine reale è piccolo.

> Un esempio numerico: se il rischio di un singolo comportamento scorretto è «uno su mille» a uscita e lo ripeti 500 volte in un anno, la probabilità di cavarsela sempre è 0,999⁵⁰⁰ ≈ **60,6%**: quasi quattro volte su dieci qualcosa accade.

Lo scopo non è la paura ma la **lucidità**: usare numeri e abitudini, non sensazioni.` },
      { h: 'Tre abitudini che abbassano il rischio', b: `Dalle statistiche emergono azioni semplici con molto effetto:

1. **Velocità adatta**: non il limite «a prescindere», ma la velocità per cui lo spazio di arresto sta dentro lo spazio visibile, tenendo conto del fondo e del meteo. Rispettare i limiti è un obbligo, ma non basta sempre: il limite è un massimo, non un consiglio.
2. **Visibilità e posizione**: farsi vedere (abbigliamento chiaro o con parti riflettenti, fari accesi) e scegliere dove stare nella corsia in modo da essere visto e da avere una via di fuga.
3. **Sobrietà e lucidità**: nessun alcol, nessun farmaco che alteri l'attenzione, riposo adeguato.

A queste si aggiunge l'**equipaggiamento completo**: casco omologato allacciato, protezioni su tutto il corpo. Un casco allacciato male o troppo grande offre una protezione ridotta.

> Un buon allenamento mentale: a ogni incrocio chiediti «se quell'auto partisse adesso, ho spazio per evitarla?». Se la risposta è no, riduci prima, non dopo.

Le prossime lezioni mostrano come costruire questi margini: vista, frenata, curva, fondi, città, viaggi e mentalità.` },
      { h: 'Costruire un piano personale', b: `Trasforma la teoria in regole concrete, scritte e semplici. Un piano personale può avere cinque punti:

- **Prima di partire**: casco e protezioni, controllo di gomme, luci e freni, stato fisico («sono sveglio, sobrio, non ho fretta?»).
- **Velocità**: scelgo la velocità in base a visibilità, fondo e traffico, e non supero i limiti di legge.
- **Distanza**: tengo almeno 2 secondi dal veicolo davanti, di più con pioggia.
- **Incroci**: li considero il punto più pericoloso e li affronto con dita sui freni, sguardo che cerca l'auto che potrebbe partire.
- **Fretta**: se sono in ritardo, accetto il ritardo. Il tempo recuperato correndo è minimo (ci torneremo).

> Esempio: su 20 km, andare a 100 km/h invece di 90 fa risparmiare solo **80 secondi** (da 13 min 20 s a 12 min), ma fa salire l'energia dell'urto da 625 a 772 (+23%, in unità m²/s² per massa unitaria ×½).

Rivaluta il piano dopo ogni «quasi incidente»: quello è un dato gratuito, una lezione senza costo.` }
    ],
    exercises: [
      mc('Il rischio, in senso tecnico, combina:', ['probabilità e gravità delle conseguenze', 'solo la velocità a cui si procede', 'soltanto il tipo e la cilindrata della moto', 'la fortuna e le condizioni del meteo'], 0, 'Rischio = probabilità × gravità: in moto la gravità è alta per l’assenza di abitacolo.'),
      fill('Un’energia cinetica E = ½mv² dipende dal quadrato della velocità. Se la velocità passa da 50 a 100 km/h, per quante volte si moltiplica l’energia?', ['4', 'quattro'], 'Raddoppiare v moltiplica v² per 4.'),
      fill('Quanto vale 90 km/h in m/s?', ['25'], '90 / 3,6 = 25.'),
      fill('Altezza di caduta equivalente a 90 km/h (v = 25 m/s), con g = 9,81: h = v²/(2g). Arrotonda al metro.', ['32', '31,9', '31.9'], '625 / 19,62 ≈ 31,9 m.'),
      mc('Quale categoria è tipica degli incidenti moto-auto?', ['L’auto che non vede la moto e svolta o taglia la strada all’incrocio', 'La moto che frena troppo presto davanti all’auto che la segue', 'Il motociclista che perde il controllo per un malore improvviso', 'L’uso eccessivo degli specchietti da parte del conducente dell’auto'], 0, 'Intersezioni e svolte a sinistra sono schemi ricorrenti nelle ricerche (Hurt, MAIDS).'),
      mc('Se sai che spesso gli automobilisti non ti vedono, la scelta più sensata è:', ['guidare come se non ti vedessero', 'contare sul fatto che hai la precedenza', 'suonare il clacson in continuazione', 'accelerare per uscire dal loro campo visivo'], 0, 'Avere ragione non protegge dalle conseguenze: servono margini.'),
      fill('Spazio libero e visibile 60 m. Spazio di arresto 46,4 m. Quanto vale il margine di sicurezza (in metri)?', ['13,6', '13.6'], '60 − 46,4 = 13,6.'),
      mc('A 90 km/h lo spazio di arresto è circa 69,6 m. Con 60 m di strada visibile libera, il margine è:', ['negativo: non ci si ferma in tempo', 'positivo, di circa 10 m di margine', 'zero', 'sempre sufficiente se la moto ha l’ABS'], 0, '60 − 69,6 = −9,6 m: serve rallentare.'),
      mc('Quale tra queste NON è un modo per aumentare il margine di sicurezza?', ['Aumentare la velocità per uscire prima dalla zona di pericolo', 'Ridurre la velocità prima della zona critica', 'Guardare più lontano possibile davanti a sé', 'Anticipare le azioni degli altri utenti della strada'], 0, 'Più velocità riduce lo spazio e il tempo a disposizione.'),
      fill('Se un comportamento rischioso ha probabilità 1/1000 per uscita e lo ripeti 500 volte, la probabilità di non avere problemi è circa (in %, intero): 0,999^500.', ['61', '60,6', '60.6', '60'], '0,999^500 ≈ 0,606.'),
      fill('Su 20 km, passare da 90 a 100 km/h quanti secondi fa risparmiare circa?', ['80'], '20/90 h = 13 min 20 s; 20/100 h = 12 min; differenza 80 s.'),
      order('Ordina le parti del calcolo del margine di sicurezza', ['spazio visibile libero', '−', 'spazio di arresto', '=', 'margine'], 'Il margine è la differenza tra ciò che vedi libero e ciò che ti serve per fermarti.')
    ],
    test: [
      fill('Quanto vale 130 km/h in m/s (un decimale)?', ['36,1', '36.1'], '130 / 3,6 ≈ 36,1.'),
      fill('Altezza di caduta equivalente a 50 km/h (13,9 m/s) con g = 9,81: arrotonda al metro.', ['10', '9,8', '9.8'], '13,89² / 19,62 ≈ 9,8 m.'),
      mc('Circa quante volte è più alto il rischio di morire per km percorso per un motociclista rispetto a un occupante d’auto (ordine di grandezza)?', ['15–20 volte', '1,2 volte', '2 volte', '100 volte'], 0, 'Stime europee: ordine di 15–20 volte, con variazioni fra paesi e anni.'),
      mc('Quale affermazione sull’equipaggiamento è corretta?', ['Riduce la gravità di alcuni traumi ma non sostituisce la prevenzione', 'Rende immuni dagli incidenti anche ad alta velocità', 'Serve soltanto oltre i 100 km/h, non in città', 'È inutile quando la moto dispone dell’ABS'], 0, 'Le protezioni sono l’ultima barriera.'),
      fill('Vedi la strada libera per 50 m. A 50 km/h lo spazio di arresto (reazione 1 s + frenata a 7 m/s²) è circa 27,7 m. Margine in metri (un decimale)?', ['22,3', '22.3'], '50 − 27,7 = 22,3.'),
      mc('La «normalizzazione della devianza» consiste nel:', ['considerare normale un comportamento scorretto perché finora non ha causato guai', 'seguire sempre la velocità media tenuta dal traffico intorno', 'frenare ogni volta nello stesso punto del percorso abituale', 'indossare più protezioni dopo ogni caduta evitata'], 0, 'Il rischio resta ma l’abitudine lo nasconde.'),
      mc('Negli incidenti con un solo veicolo (senza altri coinvolti) l’errore è più spesso:', ['del motociclista, ad esempio velocità eccessiva per la curva', 'dell’asfalto, quasi sempre dissestato o scivoloso', 'del meteo, in particolare della pioggia improvvisa', 'dell’altro conducente, che non rispetta la precedenza'], 0, 'Senza altri veicoli, le cause tipiche sono velocità, traiettoria e fondo.')
    ]
  });

  C.addTopic({
    id: 'moto-visione-e-distanza', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'Visione, attenzione e distanza di sicurezza',
    summary: 'Guardare lontano, scansionare, punto di fuga, angoli ciechi, essere visibili; tempo di reazione e distanza percorsa (d = v·t) con calcoli svolti.',
    objectives: ['Applicare la scansione visiva e la regola «dove guardi vai»', 'Calcolare lo spazio percorso nel tempo di reazione con d = v·t', 'Scegliere una distanza di sicurezza in secondi adeguata alle condizioni'],
    prereq: ['moto-rischio-e-statistica'],
    pages: [
      { h: 'Guardare lontano', b: `Quasi tutto ciò che serve per guidare bene arriva dagli **occhi**. La regola base: **guarda lontano**, dove stai per andare, non il paraspruzzi o la ruota anteriore.

Perché? Guardare lontano dà **tempo**: se alzi lo sguardo di qualche secondo davanti a te, vedi i problemi quando si possono ancora risolvere con calma, non quando sono già addosso.

> Un buon riferimento su strada extraurbana: cerca l'orizzonte e controlla il traffico **12 secondi** davanti (a 90 km/h sono 25 m/s × 12 = **300 m**). In città, 12 secondi a 50 km/h sono circa 167 m, cioè un paio di incroci.

Il cervello usa la **visione centrale** per i dettagli (mira, lettura) e la **visione periferica** per rilevare movimento e posizione. Se fissi un punto troppo vicino, la visione periferica si «stringe» e perdi informazioni laterali, soprattutto ad alta velocità.

Alternare lo sguardo lontano con il controllo di ciò che è vicino è il cuore della **scansione**: lontano, medio, vicino, specchietti, strumenti (con occhiate brevi), poi di nuovo lontano.` },
      { h: 'Dove guardi vai', b: `È una frase che si sente spesso in moto, ed è vera in un senso preciso: il corpo tende a **dirigere la moto verso dove guarda**. Se in curva fissi il guardrail, aumenti la probabilità di andarci contro: è la **fissazione sul bersaglio** (target fixation).

Applicazione pratica:
- guarda **la via di uscita**, non l'ostacolo: se c'è una buca o della ghiaia, cerca il tratto pulito accanto;
- in curva guarda **la fine della curva**, poi più avanti man mano che si apre;
- in emergenza costringi lo sguardo sullo spazio libero.

La ragione è sia fisiologica sia di controllo: la testa orientata verso l'uscita porta con sé le spalle, il manubrio e quindi la traiettoria. Un'idea utile: **gira la testa, non solo gli occhi**, specialmente per guardare l'uscita di una curva.

> Prova mentale: un ostacolo largo 30 cm a 15 m davanti a te. Se lo fissi, la moto tende ad andare lì. Se guardi lo spazio a sinistra di 1 m, lo scarti più facilmente.

Il principio vale anche in frenata: guardare avanti e non verso il pericolo vicino, cosa che aiuta a mantenere equilibrio e traiettoria.` },
      { h: 'Scansione e punto di fuga', b: `La **scansione visiva** è una routine ripetuta continuamente. Un modo pratico: (1) lontano, 12 secondi; (2) intermedio, 4–6 secondi; (3) vicino, 2 secondi; (4) specchietti ogni 5–8 secondi e prima di ogni manovra; (5) strumenti con una rapida occhiata, mai prolungata.

Il **punto di fuga** è dove i bordi della strada sembrano convergere all'orizzonte. Il suo comportamento ti dice come cambia la strada:
- se il punto di fuga **si avvicina** e la strada si «chiude» lateralmente, la strada sta curvando e probabilmente stringe;
- se il punto di fuga **resta lontano** e fisso, la curva è ampia o il tratto è rettilineo;
- se i bordi non si vedono, **riduci** perché non vedi il pericolo.

Un secondo riferimento è il **punto di tangenza**, dove la linea interna della curva smette di avvicinarsi: se il margine interno della strada ti «viene incontro» rapidamente, la curva è stretta; se resta costante, il raggio è costante.

> In pratica, se entrando in curva non vedi l’uscita e la strada ti si stringe davanti, è il segnale di **ridurre** prima dell’ingresso.

Un buon guidatore non «guarda tutto» ma **sa dove guardare** e con che frequenza.` },
      { h: 'Angoli ciechi, specchietti, visibilità', b: `L'**angolo cieco** è la zona che gli specchietti non mostrano. In moto gli specchietti sono più piccoli e spesso vibrano; l'angolo cieco laterale-posteriore è importante prima di cambiare corsia o svoltare.

La regola: **specchietto + occhiata di spalla** (girare la testa, non il busto) prima di ogni cambio di direzione. Il tempo dell'occhiata sia breve: a 90 km/h in 1 secondo percorri 25 m senza guardare avanti.

Anche gli **altri** hanno angoli ciechi, e la moto è piccola: può sparire dietro un montante, uno specchietto, un camion. Alcune regole:
- **non stare nell'angolo cieco** di un'auto o di un camion: se non vedi lo specchietto del conducente, lui non vede te;
- sorpassa i veicoli lunghi con decisione ma solo dove è consentito, senza indugiare sul fianco;
- a un incrocio, **sposta leggermente la posizione** nella corsia per essere visibile.

**Farsi vedere**: fari accesi (obbligatori anche di giorno per le moto in Italia, verifica le norme vigenti), abbigliamento chiaro o con inserti riflettenti, casco chiaro. Non basta: l'auto non ti vede anche per un fenomeno detto «guardato ma non visto». Per questo **non fare mai affidamento** sulla visibilità.` },
      { h: 'Il tempo di reazione e d = v·t', b: `Il **tempo di reazione** è l'intervallo tra il momento in cui compare un pericolo e il momento in cui inizi a frenare o a sterzare. Comprende percezione, decisione e movimento. Per un conducente attento è tipicamente **0,75–1,5 s**, di più se distratto, stanco o sotto effetto di sostanze.

In quel tempo la moto continua a muoversi a velocità costante e percorre:

> **d = v · t**

con v in m/s (km/h ÷ 3,6) e t in secondi.

> v = 50 km/h = 13,89 m/s, t = 1 s → d = **13,9 m**
> v = 90 km/h = 25 m/s, t = 1 s → d = **25 m**; con t = 1,5 s → **37,5 m**
> v = 130 km/h = 36,1 m/s, t = 1 s → d = **36,1 m**

Una **distrazione di 2 secondi** a 50 km/h (guardare lo schermo del telefono o il navigatore) equivale a percorrere **27,8 m** praticamente alla cieca. A 90 km/h sono **50 m**, circa la lunghezza di mezzo campo di calcio.

Il tempo di reazione non si allena in modo sostanzioso, ma **l'anticipazione** sì: se prevedi il problema, parti prima e di fatto riduci il ritardo.` },
      { h: 'La distanza di sicurezza in secondi', b: `Misurare la distanza in metri è scomodo: cambia con la velocità. Meglio la **regola dei secondi**: scegli un punto fisso (un cartello, un palo) e conta quanti secondi passano tra quando lo supera il veicolo davanti e quando lo superi tu.

- **Almeno 2 secondi** in condizioni normali (asciutto, buona visibilità).
- **3–4 secondi** con pioggia, di notte, con vento forte o su fondo incerto.

> A 72 km/h (20 m/s), 2 secondi = **40 m**.
> A 108 km/h (30 m/s), 2 secondi = **60 m**; con pioggia a 4 secondi = **120 m**.

Questa regola è legata alla velocità: la distanza in metri **cresce con la velocità**, ma il tempo resta lo stesso, quindi la protezione è proporzionale.

Perché 2 secondi? Contano la reazione (circa 1 s) più un margine per la frenata del veicolo davanti. Per le moto è prudente di più: dietro un camion o un'auto grande non vedi cosa succede davanti.

**Non stare incollato** (tailgating): il motociclista che segue troppo da vicino perde la visuale e non può evitare un'auto che frena. Il Codice della strada richiede una distanza tale da evitare collisioni: il valore in metri non è fisso.` },
      { h: 'Posizione nella corsia', b: `La posizione nella corsia influenza **cosa vedi** e **come ti vedono**.

Nella corsia puoi usare tre posizioni: **sinistra**, **centro**, **destra**. Il riferimento generale è la parte centrale o leggermente verso il lato che offre maggiore visibilità e via di fuga. Alcune idee:
- **dietro un'auto**: spostati un po' lateralmente rispetto alla scia in modo da vedere la strada davanti e farti vedere dallo specchietto;
- **in prossimità di un incrocio**: scegli la posizione in cui vedi di più (e sei visto) e prepara una via di fuga;
- **nei curvoni**: tieni la tua corsia, non invadere mai la corsia opposta.

Evita il centro dove si accumula olio e gomma (spesso con aderenza ridotta, specialmente dopo la pioggia leggera dopo un lungo periodo di secco): le due tracce dei pneumatici delle auto sono spesso più pulite del centro.

> Con una corsia di 3 m e una moto larga circa 0,8 m, hai 1,1 m di margine per lato: lo spostamento laterale è piccolo, ma sufficiente a cambiare cosa vedi.

L'obiettivo non è «passare vicino» agli ostacoli, ma mantenere sempre **una via di fuga** e una visuale.` },
      { h: 'Attenzione, distrazioni e sintesi', b: `L'attenzione è una risorsa limitata: se la usi per il telefono, la musica a volume alto, una discussione con il passeggero o il navigatore, ne resta meno per la strada.

Regole semplici:
- **niente telefono** in mano o guardato mentre guidi; usa un supporto e un percorso già impostato prima di partire;
- se devi guardare qualcosa, fermati in un luogo sicuro;
- **non ascoltare** musica o conversazioni a un volume che copre i rumori della strada (clacson, sirene);
- evita di «inseguire» pensieri: se sei agitato, prenditi un minuto prima di partire.

> Calcolo conclusivo: a 90 km/h, 1 secondo di distrazione = 25 m; 3 secondi = **75 m**; con distanza di sicurezza di 2 s hai 50 m di spazio con il veicolo davanti. Una distrazione di 3 secondi li consuma tutti.

**Sintesi della lezione**: guarda lontano, guarda dove vuoi andare, scansiona di continuo, non stare negli angoli ciechi, mantieni almeno 2 secondi di distanza (più con maltempo), non staccare gli occhi dalla strada. Con queste abitudini il tempo di reazione diventa tempo **guadagnato**, non sprecato.` }
    ],
    exercises: [
      fill('A 90 km/h (25 m/s) con tempo di reazione di 1 s, quanti metri percorri prima di iniziare a frenare?', ['25'], 'd = v·t = 25 × 1.'),
      fill('A 50 km/h, quanti metri percorri in 1 s (un decimale)?', ['13,9', '13.9'], '50/3,6 = 13,89.'),
      fill('A 90 km/h con reazione 1,5 s, quanti metri percorri nel tempo di reazione (un decimale)?', ['37,5', '37.5'], '25 × 1,5 = 37,5.'),
      fill('Distrazione di 2 secondi a 50 km/h: metri percorsi (un decimale)?', ['27,8', '27.8'], '13,89 × 2 = 27,8.'),
      mc('La frase «dove guardi vai» serve a ricordare di:', ['guardare la via di uscita e non l’ostacolo', 'fissare bene la buca per riuscire a evitarla', 'guardare sempre il tachimetro per tenere il limite', 'guardare soltanto negli specchietti retrovisori'], 0, 'La fissazione sul bersaglio porta verso ciò che si fissa.'),
      mc('Prima di cambiare corsia, la regola è:', ['specchietto e occhiata di spalla', 'azionare solo la freccia e spostarsi', 'controllare solo lo specchietto sinistro', 'accelerare e spostarsi prima che altri arrivino'], 0, 'L’angolo cieco non è coperto dagli specchietti.'),
      fill('Distanza di sicurezza di 2 secondi a 72 km/h (20 m/s): quanti metri?', ['40'], '20 × 2 = 40.'),
      mc('Con pioggia la distanza di sicurezza in secondi va:', ['aumentata (3–4 s)', 'diminuita', 'lasciata a 1 s', 'resa uguale in metri alla condizione asciutta'], 0, 'Frenata e aderenza peggiorano: serve più margine.'),
      mc('Se non vedi lo specchietto del camionista davanti a te, di norma:', ['lui non vede te', 'lui ti vede meglio', 'sei nel suo punto cieco ma in sicurezza', 'puoi sorpassare in qualunque punto'], 0, 'Regola dello specchietto: se non vedi il suo specchietto, lui non vede te.'),
      fill('A 90 km/h, 12 secondi di sguardo in avanti equivalgono a quanti metri?', ['300'], '25 × 12 = 300.'),
      mc('Quale comportamento riduce davvero le distrazioni?', ['Impostare il navigatore prima di partire e usare un supporto', 'Guardare il telefono ai semafori mentre si è ancora in movimento', 'Rispondere ai messaggi quando il tratto di strada è dritto', 'Alzare molto la musica per riuscire a concentrarsi di più'], 0, 'La preparazione prima di partire evita di distogliere lo sguardo.'),
      order('Ordina la scansione visiva dalla più lontana', ['lontano', 'intermedio', 'vicino', 'specchietti', 'strumenti'], 'Si parte dalla visione lontana e si ritorna spesso a essa.')
    ],
    test: [
      fill('A 130 km/h con tempo di reazione 1 s, quanti metri (un decimale)?', ['36,1', '36.1'], '130/3,6 × 1 = 36,1.'),
      fill('A 108 km/h (30 m/s), distanza di 2 secondi in metri?', ['60'], '30 × 2 = 60.'),
      fill('A 72 km/h con pioggia e distanza di 4 secondi, quanti metri?', ['80'], '20 × 4 = 80.'),
      mc('Distrazione di 3 secondi a 90 km/h: quanti metri percorri senza guardare?', ['75 m', '25 m', '50 m', '100 m'], 0, '25 × 3 = 75.'),
      mc('Quale posizione conviene tenere dietro un’auto?', ['Leggermente laterale per vedere davanti e farsi vedere', 'Esattamente dietro al paraurti, per non farsi notare', 'Sempre sul bordo destro della corsia, vicino al margine', 'Dentro l’angolo cieco, dove l’auto non può urtare'], 0, 'Aiuta visibilità e via di fuga.'),
      mc('Il «tempo di reazione» comprende:', ['percezione, decisione e inizio dell’azione', 'soltanto il tempo che serve per frenare', 'soltanto il tempo che serve per accelerare', 'il tempo di arresto completo fino alla fermata'], 0, 'Non include la frenata, che viene dopo.'),
      mc('Quale fenomeno spiega perché un automobilista può guardare e non vedere la moto?', ['Mancata percezione («guardato ma non visto»)', 'Diffrazione della luce del faro anteriore', 'Effetto doppler sul rumore del motore', 'Asfalto troppo scuro per il contrasto con la moto'], 0, 'Piccole sagome e aspettative portano a non registrare la moto: non contare su essere visto.')
    ]
  });

  C.addTopic({
    id: 'moto-frenata-corretta', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'La frenata corretta',
    summary: 'Freno anteriore e posteriore, trasferimento di carico, frenata di emergenza, ABS e spazio di frenata d = v²/(2a) con tabelle e calcoli.',
    objectives: ['Spiegare il trasferimento di carico e perché il freno anteriore è il più importante', 'Calcolare lo spazio di frenata d = v²/(2a) e lo spazio di arresto totale', 'Descrivere una frenata di emergenza progressiva e il ruolo dell’ABS'],
    prereq: ['moto-visione-e-distanza'],
    pages: [
      { h: 'Due freni, due ruote', b: `La moto ha **due freni indipendenti**: l’anteriore (di solito a leva sul lato destro del manubrio) e il posteriore (di solito a pedale a destra). Alcune moto hanno un freno combinato (CBS) che collega in parte i due circuiti: leggi il manuale della tua.

Il freno anteriore è **molto più potente** perché in frenata il peso si sposta in avanti. Il posteriore si scarica e blocca la ruota con facilità. Come ordine di grandezza, in una frenata forte l’anteriore fornisce la **gran parte** (spesso 70–90%) della decelerazione.

Non significa «usa solo l’anteriore»: l’uso di entrambi i freni, con l’anteriore dominante, stabilizza la moto e permette dosaggio. Nelle andature lente e nelle manovre il posteriore è prezioso.

> Regola base su strada dritta: **entrambi i freni, con l’anteriore in modo progressivo**, sguardo avanti, moto verticale, frizione tirata solo alla fine (o come indicato dal tuo istruttore).

La frenata non è un gesto di forza ma di **dosaggio**: la leva si stringe, non si strappa.` },
      { h: 'Il trasferimento di carico', b: `Quando freni, la decelerazione a fa **spostare carico** sulla ruota anteriore. Il trasferimento è:

> **ΔN = m · a · h / L**

con m massa totale moto+pilota, h altezza del baricentro da terra, L interasse.

> m = 250 kg, h = 0,6 m, L = 1,4 m, a = 7 m/s²:
> ΔN = 250 × 7 × 0,6 / 1,4 = **750 N**
> Peso totale = 250 × 9,8 = 2 450 N; supponiamo ripartizione statica 50/50 → 1 225 N per ruota.
> Davanti: 1 225 + 750 = **1 975 N** (80,6%); dietro: 1 225 − 750 = **475 N** (19,4%).

La ruota anteriore è ora molto più carica e può trasmettere una forza frenante molto maggiore, mentre il posteriore, scarico, **si blocca facilmente** con poco pedale.

Corollari: con baricentro alto e interasse corto il trasferimento è maggiore (rischio di sollevare il posteriore); con passeggero e bagagli i valori cambiano. Per questo si frena in modo **progressivo**: appena inizi, il carico sale sull’anteriore e subito dopo puoi stringere di più.` },
      { h: 'Frenata di emergenza', b: `La frenata di emergenza efficace ha una sequenza:

1. **Sguardo** avanti verso lo spazio libero, non sull’ostacolo.
2. **Moto in verticale** e dritta, braccia morbide, ginocchia sul serbatoio, busto non rigido.
3. **Freno anteriore**: stringi con progressione **rapida ma dolce** (carico che sale) fino al massimo; contemporaneamente **posteriore con dosaggio** moderato.
4. **Mantieni** la pressione senza rilasciarla di colpo; se l’anteriore pattina (senza ABS), rilascia un poco e riprendi.
5. Solo a moto quasi ferma, **frizione** e piede a terra.

Gli errori tipici: **strappare** la leva (blocco immediato), frenare mentre la moto è piegata, bloccare il posteriore e perdere la linea, fissare l’ostacolo.

> Se la tua frenata a 50 km/h dà a = 7 m/s², la distanza è 13,8 m; un’azione ritardata o timida con a = 4 m/s² dà **24,1 m**: ben **10,3 m** in più.

Esercitarsi in un parcheggio vuoto o in un corso di guida sicura, con istruttore, rende il gesto automatico. Non si prova mai su strada aperta.` },
      { h: 'ABS e controlli elettronici', b: `L’**ABS** (anti-lock braking system) impedisce il blocco delle ruote in frenata modulando automaticamente la pressione dei freni. In Europa è obbligatorio sulle nuove moto oltre una certa cilindrata (125 cc) dal 2016 e sulle nuove moto più piccole in modo parziale: verifica le norme attuali.

Cosa fa:
- permette di **frenare forte** senza che la ruota si blocchi e quindi di **mantenere il controllo** della traiettoria;
- compensa errori di dosaggio sul bagnato.

Cosa **non** fa:
- non crea aderenza dove non c’è: sul fondo scivoloso lo spazio resta lungo;
- non annulla la fisica: la distanza dipende comunque da v²/(2a);
- non elimina il rischio in piega, anche se alcuni sistemi (ABS «cornering») gestiscono parzialmente l’inclinazione.

Con l’ABS, in emergenza **stringi a fondo e mantieni**: le pulsazioni sulla leva sono normali. Non rilasciare.

Altri aiuti: sistemi combinati (CBS), controllo di trazione, ABS con sensore di inclinazione. Tutti aiutano a gestire errori **piccoli**, non a ignorare i limiti.` },
      { h: 'Spazio di frenata: d = v²/(2a)', b: `Con decelerazione costante a, lo spazio di frenata da velocità v è:

> **d = v² / (2·a)**

con v in m/s, a in m/s². Un valore didattico di a su asfalto asciutto con buone gomme è **7 m/s²** (circa 0,7 g); su bagnato ~**4 m/s²** (0,4 g). Sono ordini di grandezza: dipendono da gomme, asfalto, moto, pilota.

> 50 km/h = 13,89 m/s → d = 192,9 / 14 = **13,8 m**
> 90 km/h = 25 m/s → d = 625 / 14 = **44,6 m**
> 130 km/h = 36,1 m/s → d = 1 304 / 14 = **93,1 m**

Le conseguenze:
- **raddoppiando la velocità lo spazio quadruplica** (50→100: da 13,8 a ~55,1 m);
- dimezzando l’aderenza lo spazio raddoppia;
- +10 km/h da 60 a 70 km/h aggiunge 7,2 m (19,8 → 27,0 m).

La formula vale da quando inizi la frenata: **prima c’è il tempo di reazione**, quindi la frenata parte più avanti.` },
      { h: 'Spazio di arresto totale e tabella', b: `Lo spazio per fermarsi comprende **reazione + frenata**:

> **d_tot = v·t + v²/(2a)**

Con t = 1 s e a = 7 m/s² (asciutto):

| km/h | reazione | frenata | totale |
|---|---|---|---|
| 30 | 8,3 | 5,0 | **13,3 m** |
| 50 | 13,9 | 13,8 | **27,7 m** |
| 70 | 19,4 | 27,0 | **46,4 m** |
| 90 | 25,0 | 44,6 | **69,6 m** |
| 130 | 36,1 | 93,1 | **129,3 m** |

A 90 km/h sul **bagnato** (a = 4): frenata 625/8 = **78,1 m**, totale 103,1 m: **33,5 m** più dell’asciutto.

Un altro uso: **velocità di impatto**. Se a 90 km/h vedi un ostacolo a 60 m, in 25 m di reazione restano 35 m. La frenata da 25 m/s con a = 7 m/s² in 35 m: v² = 625 − 2·7·35 = 135 → v = 11,6 m/s ≈ **42 km/h** all’impatto. Lo schianto non si evita, ma la velocità scende da 90 a 42, con energia ridotta di oltre l’**78%**.

Sempre: ogni km/h in meno conta.` },
      { h: 'Frenata e curva', b: `L’aderenza disponibile è **una sola** e si divide tra frenare e curvare. Un modo per pensarci è il **cerchio di aderenza**: la somma vettoriale di accelerazione laterale e longitudinale non può superare μ·g.

> a_tot² = a_lat² + a_long² ≤ (μ·g)²
> Con μ g = 7,85 m/s² (μ = 0,8) e a_lat = 5,56 m/s² in curva a 60 km/h su raggio 50 m, resta **a_long ≈ 5,5 m/s²** per frenare (sqrt(61,6 − 30,9)).

Quindi se curvi già molto, ti resta **poco** per frenare: frenare forte in piega può portare alla perdita dell’anteriore. La regola per la strada: **frena prima di inclinare**, a moto dritta, e in curva solo **rilasci** o usi frenate leggere e progressive, rialzando la moto se devi frenare di più.

Per questo la velocità si regola **prima** dell’ingresso. Non si «recupera» in curva.

Se in piega ti trovi a dover frenare in emergenza: lo sguardo sullo spazio libero, raddrizzare un poco la moto mentre aumenti la frenata (con gradualità) è spesso meglio del blocco. L’ABS con sensore di inclinazione aiuta, ma non è una garanzia.` },
      { h: 'Errori comuni e sintesi', b: `Errori frequenti:

- **Frenare tardi** e poi tutto insieme: più spazio e più rischio di blocco.
- **Solo il posteriore** per paura dell’anteriore: lo spazio si allunga molto (il posteriore dà una frazione piccola della frenata).
- **Rilasciare di colpo** il freno a moto quasi ferma: scossa e perdita di equilibrio.
- **Guardare il pericolo** invece dello spazio libero.
- **Distanza insufficiente**: vedere il problema troppo tardi per qualsiasi tecnica.

Sintesi quantitativa: a 50 km/h con buona frenata ti fermi in ~28 m (reazione inclusa), a 90 km/h in ~70 m, a 130 km/h in ~129 m. Sul bagnato aggiungi circa 60–75% alla sola frenata.

> Un modo di calibrare la distanza: a 90 km/h, 2 secondi sono 50 m, meno dei 69,6 m di arresto totale. La regola dei 2 secondi è un minimo e **non basta per evitare** un urto con un veicolo che si ferma di colpo; funziona perché anche il veicolo davanti ha bisogno di spazio per frenare.

Pratica: corsi di guida sicura permettono di provare la frenata di emergenza in un ambiente controllato. Impara il gesto lì, non per strada.` }
    ],
    exercises: [
      fill('Frenata da 50 km/h con a = 7 m/s²: spazio di frenata in metri (un decimale)?', ['13,8', '13.8'], '13,89²/14 = 13,8.'),
      fill('Frenata da 90 km/h con a = 7 m/s²: spazio di frenata in metri (un decimale)?', ['44,6', '44.6'], '625 / 14 = 44,6.'),
      fill('Frenata da 90 km/h su bagnato con a = 4 m/s²: metri (un decimale)?', ['78,1', '78.1'], '625 / 8 = 78,1.'),
      fill('Spazio di arresto totale a 70 km/h (reazione 1 s, a = 7): metri, un decimale?', ['46,4', '46.4'], '19,4 + 27,0 = 46,4.'),
      mc('Se la velocità raddoppia, lo spazio di frenata:', ['quadruplica', 'raddoppia', 'resta uguale', 'diventa 1,5 volte'], 0, 'd = v²/(2a).'),
      mc('Perché il freno anteriore è il più efficace?', ['Per il trasferimento di carico in avanti in frenata', 'Perché è sempre più grande del freno posteriore', 'Perché il freno posteriore non esercita alcuna forza', 'Perché è più vicino alla mano del pilota'], 0, 'L’anteriore si carica, il posteriore si scarica.'),
      fill('m = 250 kg, a = 7 m/s², h = 0,6 m, L = 1,4 m. Trasferimento di carico ΔN in newton?', ['750'], '250 × 7 × 0,6 / 1,4 = 750.'),
      mc('Cosa non può fare l’ABS?', ['Creare aderenza dove non c’è', 'Evitare il blocco delle ruote', 'Aiutare a mantenere la direzione', 'Compensare errori di dosaggio sul bagnato'], 0, 'L’ABS gestisce il blocco, non aumenta l’attrito disponibile.'),
      mc('In frenata di emergenza con ABS, quando senti pulsare la leva:', ['mantieni la pressione', 'rilasci subito', 'ti fermi con il solo posteriore', 'cambi marcia'], 0, 'È il sistema che interviene: continua a stringere.'),
      mc('Quando conviene frenare in modo deciso, in una curva?', ['Prima della curva, a moto dritta', 'A metà piega, con il massimo della forza', 'Mai, in nessun caso e con nessun freno', 'Solo con il posteriore, mentre si è piegati'], 0, 'L’aderenza va usata per frenare prima di inclinare.'),
      fill('A 90 km/h vedi un ostacolo a 60 m. Dopo 1 s di reazione (25 m) frenando a 7 m/s², a che km/h arrivi all’impatto (arrotonda all’intero)? v² = 625 − 14·35.', ['42', '41,8', '41.8'], 'v² = 135 → 11,6 m/s ≈ 41,8 km/h.'),
      order('Ordina la frenata di emergenza', ['sguardo avanti', 'moto dritta', 'anteriore progressivo e posteriore dosato', 'mantieni la pressione', 'frizione a moto quasi ferma'], 'Sequenza di base, da fare in un corso.')
    ],
    test: [
      fill('Spazio di arresto totale a 50 km/h (reazione 1 s, a = 7 m/s²), un decimale?', ['27,7', '27.7'], '13,9 + 13,8.'),
      fill('Spazio di frenata da 130 km/h con a = 7 m/s², arrotonda al metro.', ['93', '93,1', '93.1'], '36,11²/14 = 93,1.'),
      fill('Spazio di frenata da 30 km/h con a = 7 m/s²: metri, intero?', ['5', '5,0', '5.0'], '8,33²/14 = 4,96.'),
      mc('Sul bagnato lo spazio di frenata a 90 km/h (a = 4) rispetto all’asciutto (a = 7) è:', ['circa 33 m più lungo', 'uguale, perché dipende solo dalla velocità', 'circa 5 m più lungo, quasi uguale', 'più corto, perché si frena con più prudenza'], 0, '78,1 − 44,6 = 33,5 m.'),
      mc('Quale scelta è corretta in curva stretta con moto già molto piegata?', ['Evitare frenate forti e regolare la velocità prima', 'Frenare a fondo con l’anteriore per fermarsi in curva', 'Bloccare il posteriore per raddrizzare la moto', 'Chiudere il gas di colpo e frenare forte'], 0, 'L’aderenza è già impegnata dalla curva.'),
      mc('Con a_tot² = a_lat² + a_long², se a_lat aumenta, a_long disponibile:', ['diminuisce', 'aumenta', 'resta uguale', 'è sempre nulla'], 0, 'Il totale non può superare μ·g.'),
      mc('Dove si impara la frenata di emergenza?', ['In un corso di guida sicura o in area chiusa con un istruttore', 'Su una strada extraurbana vuota, di notte, senza istruttore', 'In autostrada, quando c’è poco traffico intorno', 'Sul bagnato in città, con la moto già carica'], 0, 'Mai in strada aperta: prove solo in ambienti controllati.')
    ]
  });

  C.addTopic({
    id: 'moto-la-curva-su-strada', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'La curva su strada',
    summary: 'Traiettoria di sicurezza nella propria corsia, velocità di ingresso, vedere l’uscita, rilascio dei freni, sguardo e limiti di aderenza con calcoli.',
    objectives: ['Scegliere velocità e traiettoria in base alla visibilità dell’uscita', 'Calcolare accelerazione laterale e angolo di piega con a = v²/r', 'Riconoscere i limiti di aderenza e restare nella propria corsia'], 
    prereq: ['moto-frenata-corretta'],
    pages: [
      { h: 'Che cosa succede in curva', b: `In curva la moto deve ricevere una **forza verso il centro** (forza centripeta) che le fa cambiare direzione. Quella forza viene dall’**aderenza** tra pneumatici e asfalto. L’accelerazione laterale è:

> **a = v² / r**

con v in m/s e r in metri. Il pilota **piega** la moto: l’angolo θ soddisfa (trascurando lo spessore dei pneumatici):

> **tan θ = v² / (r·g)**

> v = 60 km/h = 16,67 m/s, r = 50 m → a = 277,8/50 = **5,56 m/s²**; tan θ = 5,56/9,81 = 0,567 → θ ≈ **29,5°**

La velocità conta al **quadrato**: a r = 50 m, a 70 km/h l’accelerazione sarebbe 7,56 m/s², +36% rispetto a 60 km/h, e la piega salirebbe a circa 37.6°.

Per la guida su strada, la domanda chiave non è «quanto posso piegare» ma: **che margine mi resta** rispetto al limite di aderenza e a ciò che non vedo.` },
      { h: 'Il limite di aderenza', b: `La forza massima dipende dal **coefficiente di attrito** μ: a_max = μ·g.

> Asciutto, μ ≈ 0,8 → a_max ≈ 7,85 m/s². Su r = 50 m: v_max = √(7,85 × 50) = 19,8 m/s ≈ **71 km/h**
> Bagnato, μ ≈ 0,4 → a_max ≈ 3,92 m/s² → v_max ≈ 14,0 m/s ≈ **50 km/h**

Sono valori teorici **sul limite**, oltre i quali si cade. Su strada **non si va mai al limite**: l’asfalto cambia (sabbia, buche, giunti, vernici), e un limite «quasi raggiunto» non ammette errori. Una regola prudente: usare al massimo **la metà** dell’aderenza disponibile.

> A μ = 0,8, metà di a_max è 3,9 m/s²; su r = 50 m la velocità sarebbe 14 m/s = **50 km/h**.

Segnali che ti avvicini troppo al limite: moto che «scivola» o «scorre», pneumatico che vibra, necessità di correggere continuamente. Se li senti, **riduci** e mantieni la calma: non frenare bruscamente, non chiudere il gas di colpo.` },
      { h: 'Vedere l’uscita: la regola della visibilità', b: `Su strada pubblica la curva ha un rischio che in pista non c’è: **non sai cosa c’è dopo** (auto ferma, ghiaia, ciclista, veicolo che invade la corsia). La regola fondamentale è:

> **la velocità deve permettere di fermarsi entro lo spazio visibile e libero**

Con t = 1 s: v·t + v²/(2a) = spazio visibile S. Risolvendo per v:

> S = 40 m, a = 7 m/s²: v² + 14 v − 560 = 0 → v = **17,7 m/s ≈ 64 km/h**
> S = 40 m, a = 4 m/s² (bagnato): v² + 8 v − 320 = 0 → v = 14,3 m/s ≈ **52 km/h**

Se a metà curva lo spazio visibile è 40 m, in teoria potresti andare a 64 km/h sull’asciutto, ma la curva stessa limita la velocità (a = v²/r). **Vale il valore più basso** tra quello di visibilità e quello di aderenza.

In curva cieca la strada può avere un veicolo che arriva dall’altra parte: lo spazio libero visibile è quello fino al punto dove puoi vedere l’asfalto **della tua corsia**; con veicoli opposti non servono solo i tuoi spazi. Se non vedi, riduci.` },
      { h: 'Traiettoria di sicurezza: nella propria corsia', b: `**Regola assoluta**: su strada si resta **sempre nella propria corsia**. Superare la linea di mezzeria in curva è pericoloso e vietato. Le tecniche di pista (usare tutta la larghezza) non valgono su strada aperta al traffico.

All’interno della corsia si sceglie una traiettoria che aumenta la **visibilità** e il **raggio**:

- **Ingresso** dal lato esterno della propria corsia (nei limiti del consentito e se la strada è libera), per vedere più lontano e aprire il raggio;
- **Punto di corda** (vicino al lato interno) un po’ **più tardi**, dove vedi l’uscita;
- **Uscita** verso l’esterno.

Ritardare la corda rende la curva più «squadrata» ma permette di **vedere l’uscita prima** e correggere. Un raggio effettivo più grande riduce l’accelerazione laterale.

> Ipotesi didattica: la traiettoria aperta porta il raggio da 50 a 55 m. A 60 km/h l’accelerazione scende da 5,56 a **5,05 m/s²** (−9%); a 65 m scenderebbe a 4,27 (−23%), ma in una corsia di 3 m non si guadagna tanto: la leva principale è la **velocità**.

In una curva a sinistra, spostarsi vicino alla mezzeria **non** è un modo di aprire la curva: è pericoloso per i veicoli che arrivano.` },
      { h: 'Velocità di ingresso e rilascio dei freni', b: `La velocità di curva si decide **prima** di inclinare: **frena in rettilineo**, entra con una velocità che ti lascia margine, poi **rilascia progressivamente** i freni mentre inclini, e mantieni un gas costante o appena in apertura.

Sequenza tipica:
1. **Guarda** la curva e scegli la velocità (con la regola della visibilità).
2. **Frena** a moto dritta, in modo progressivo.
3. **Rilascia** i freni mentre inclini; evita il rilascio brusco.
4. **Piega** con gas leggero e costante (il gas troppo chiuso carica l’anteriore, troppo aperto scarica).
5. Appena vedi l’uscita, **apri** il gas con gradualità e rialza la moto.

Il principio dell’aderenza condivisa (cerchio di aderenza) spiega perché la **frenata si smaltisce** man mano che la piega aumenta.

> Entrata a 70 km/h invece di 60 km/h su r = 50 m: a sale da 5,56 a 7,56 m/s², +36%; e lo spazio di frenata necessario sale di 7,2 m (da 19,8 a 27,0 m).

Un errore tipico: **entrare troppo veloci** e correggere frenando a metà curva. L’errore costa più della prudenza, e fa perdere controllo.` },
      { h: 'Sguardo, postura e dolcezza dei comandi', b: `In curva lo sguardo è il comando più potente:

- **guarda l’uscita** e poi via via più lontano; la testa ruota verso il lato della curva;
- evita la fissazione su guardrail, auto o buche;
- **sguardo in alto**: la moto segue.

Postura e comandi:
- **braccia e spalle rilassate**; la tensione sul manubrio disturba la moto;
- ginocchia e piedi stabili, corpo che segue la moto;
- **dolcezza** sui comandi: gas, freno e sterzo si muovono con gradualità. I movimenti bruschi consumano aderenza.

Per **inclinare** a velocità sopra circa 30–40 km/h si usa il **controsterzo**: spingere in avanti il lato del manubrio verso cui vuoi curvare (spingere a destra per curvare a destra) fa piegare la moto. Sembra contro-intuitivo, ma è il modo in cui si cambia direzione con i veicoli a due ruote a velocità medie. È la fisica del giroscopio e dell’equilibrio.

> Non serve «fare forza»: una spinta piccola e rapida basta. Se la moto non si piega a sufficienza, non aggredire: riduci prima della curva.` },
      { h: 'Errori tipici e come correggerli', b: `Gli errori più comuni in curva:

1. **Entrata troppo veloce** (corretta riducendo prima la velocità, non a metà piega).
2. **Fissazione sull’ostacolo** (guarda l’uscita).
3. **Chiusura brusca del gas** in piega, che carica l’anteriore e cambia la traiettoria. Mantieni un gas costante.
4. **Frenata brusca** in piega: rischio di perdita d’aderenza; se serve, rialza la moto e frena di più dolcemente.
5. **Invasione della corsia opposta**: pericolosissima; riduci piuttosto.
6. **Irrigidirsi** e non voler piegare: la moto non cade se curva con l’aderenza.

> Se ti accorgi di entrare troppo veloce: **non** frenare con violenza. Guarda l’uscita, mantieni la piega, **piega un po’ di più** (se c’è aderenza) o rilascia il gas dolcemente. La moto ha di solito più piega disponibile di quanta il pilota sia disposto a usare, ma questo non è un invito a esplorare i limiti.

Regola riassuntiva: **entra piano, esci fluido**. Se dopo la curva non senti di aver avuto margine, la prossima volta rallenta di più.` },
      { h: 'Strade non conosciute e condizioni', b: `La curva conosciuta non è la curva sicura: possono essere cambiati fondo, traffico e luce. Alcune regole:

- **Strade nuove**: aumenta il margine, perché non sai il raggio, la pendenza (compresa la contropendenza), i dossi.
- **Curve a raggio variabile** (che si stringono): riduci prima, perché il raggio cala e l’accelerazione laterale cresce al quadrato.
- **Ombre, umidità, polvere**: sotto gli alberi l’asfalto può restare bagnato o scivoloso; riduci.
- **Cambio di fondo** in piega (giunti, tombini, rattoppi): evita la frenata e mantieni la piega.
- **Fari e sole radente**: se non vedi l’uscita per il sole, riduci.

> Esempio: stesso raggio 50 m ma bagnato (μ = 0,4): v_max = 50 km/h; con un margine del 50% la velocità prudente è circa **35 km/h** (0,707 di 50, perché a ∝ v²: metà aderenza → v × √0,5).

Un buon allenamento: percorrere la stessa curva in sicurezza, **sempre sotto** il limite, osservando come la moto risponde. La curva non è un test di coraggio.` }
    ],
    exercises: [
      fill('v = 60 km/h = 16,67 m/s, raggio 50 m. Accelerazione laterale in m/s² (un decimale)?', ['5,6', '5.6', '5,56', '5.56'], '277,8/50 = 5,56.'),
      fill('Stessa curva: angolo di piega tan θ = 0,567. Quanti gradi circa?', ['30', '29,5', '29.5'], 'arctan 0,567 ≈ 29,5°.'),
      fill('μ = 0,8, raggio 50 m: velocità limite teorica in km/h (intero)?', ['71', '71,3', '71.3'], '√(7,85×50) = 19,8 m/s = 71,3 km/h.'),
      fill('μ = 0,4, raggio 50 m: velocità limite teorica in km/h (intero)?', ['50', '50,4', '50.4'], '√(3,92×50) = 14,0 m/s = 50,4 km/h.'),
      mc('Su strada, in una curva la traiettoria deve:', ['restare nella propria corsia', 'usare anche la corsia opposta se è libera', 'tagliare sempre verso la mezzeria', 'essere la più corta possibile'], 0, 'Invadere la corsia opposta è vietato e pericoloso.'),
      mc('Qual è la regola della visibilità in curva?', ['Fermarsi entro lo spazio visibile e libero', 'Andare al limite di velocità segnalato dalla strada', 'Seguire a vista il veicolo che precede in curva', 'Chiudere gli occhi e affidarsi alla piega'], 0, 'Se non vedi l’uscita, riduci.'),
      fill('Spazio visibile 40 m, a = 7 m/s², reazione 1 s: velocità massima in km/h (intero, valore tra 63 e 64)?', ['64', '63,6', '63.6'], 'v = 17,68 m/s = 63,6 km/h.'),
      mc('Quando conviene frenare, rispetto alla curva?', ['Prima di inclinare, a moto dritta', 'Quando la moto è già inclinata a metà piega', 'Solo all’uscita, per stabilizzare la moto', 'Mai, perché in curva non si deve frenare'], 0, 'La velocità si regola prima, per lasciare aderenza alla piega.'),
      mc('Il controsterzo serve a:', ['avviare l’inclinazione spingendo sul manubrio dal lato della curva', 'frenare in modo progressivo prima della curva', 'cambiare marcia senza usare la frizione', 'abbassare il baricentro portando il corpo in avanti'], 0, 'Spingere il lato interno in avanti fa piegare la moto verso quel lato.'),
      mc('Se ti accorgi di entrare troppo veloce in curva:', ['guardi l’uscita, mantieni la piega e non freni con violenza', 'freni a fondo con il solo freno anteriore', 'chiudi il gas di colpo e freni con forza', 'ti irrigidisci sul manubrio e stringi le ginocchia'], 0, 'Le azioni brusche consumano l’aderenza.'),
      fill('Passando da 60 a 70 km/h con r = 50 m, di quanto cresce l’accelerazione laterale (in %, intero)? (a ∝ v²)', ['36', '36,1', '36.1'], '(70/60)² = 1,361.'),
      order('Ordina la sequenza di una curva prudente', ['guardo la curva', 'regolo la velocità', 'freno a moto dritta', 'rilascio e inclino', 'guardo l’uscita e riapro il gas'], 'Velocità prima, poi piega, poi uscita.')
    ],
    test: [
      fill('v = 50 km/h = 13,89 m/s, r = 40 m. Accelerazione laterale (un decimale)?', ['4,8', '4.8'], '192,9/40 = 4,82.'),
      fill('Con μ = 0,8 e r = 100 m, velocità limite teorica in km/h (intero)?', ['101', '100,9', '100.9'], '√(7,85 × 100) = 28,0 m/s = 100,9 km/h (≈101).'),
      mc('Se in curva dimezzi la velocità, l’accelerazione laterale (stesso raggio):', ['si divide per 4', 'si dimezza', 'raddoppia', 'resta uguale'], 0, 'a = v²/r.'),
      mc('La velocità prudente in curva è:', ['il minimo tra quella imposta dalla visibilità e quella dall’aderenza', 'sempre il limite di velocità indicato dalla strada', 'quella tenuta dal veicolo che precede', 'la massima possibile entro i limiti di legge'], 0, 'Valgono entrambi i vincoli.'),
      mc('Perché usare solo una parte dell’aderenza?', ['Perché l’asfalto può cambiare e servono margini per errori e imprevisti', 'Perché l’aderenza disponibile è praticamente infinita', 'Perché l’ABS compensa sempre qualunque errore del pilota', 'Perché le curve su strada sono tutte uguali tra loro'], 0, 'Un margine copre sabbia, buche, foglie.'),
      mc('Che cosa fa una curva a raggio che si stringe?', ['aumenta l’accelerazione laterale e può richiedere di ridurre', 'non cambia nulla, la velocità resta identica', 'riduce il rischio e consente di accelerare', 'permette di accelerare già a centro curva'], 0, 'a = v²/r cresce al calare di r.'),
      mc('Dove va lo sguardo in curva?', ['Verso l’uscita, poi sempre più lontano', 'Sulla ruota anteriore, appena sotto il faro', 'Sul guardrail esterno alla curva', 'Sul tachimetro, per controllare la velocità'], 0, 'Dove guardi vai.')
    ]
  });

  C.addTopic({
    id: 'moto-fondi-e-condizioni', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'Fondi difficili e condizioni',
    summary: 'Pioggia, ghiaia, strisce e tombini bagnati, foglie, freddo, vento e buche: come cambiano aderenza e spazi di frenata, con coefficienti d’attrito e calcoli.',
    objectives: ['Stimare come cambiano gli spazi con il coefficiente d’attrito d = v²/(2μg)', 'Riconoscere i fondi e le situazioni più insidiose e adeguare la guida', 'Gestire pneumatici freddi, vento e buche in modo prudente'],
    prereq: ['moto-la-curva-su-strada'],
    pages: [
      { h: 'Il coefficiente d’attrito', b: `L’**aderenza** si descrive con il **coefficiente d’attrito μ**: la forza massima orizzontale che il pneumatico può trasmettere è F = μ·N (N: carico). La decelerazione massima è a = μ·g.

Ordini di grandezza **indicativi** (variano con gomme, temperatura, asfalto):

| Fondo | μ indicativo |
|---|---|
| Asfalto asciutto, buone gomme | 0,8–1,0 |
| Asfalto bagnato | 0,4–0,6 |
| Vernice, tombini, binari bagnati | 0,2–0,4 |
| Foglie bagnate, ghiaia, fango | 0,2–0,4 |
| Ghiaccio | ≤ 0,1 |

Lo spazio di frenata diventa:

> **d = v² / (2·μ·g)**

Se μ si dimezza, lo spazio **raddoppia**. E questi valori sono **medi**: nel punto peggiore (macchia d’olio, vernice lucida) la perdita può essere improvvisa e localizzata.

Lo scopo non è memorizzare i numeri, ma sapere che sui fondi difficili **gli spazi si moltiplicano** e che l’aderenza deve essere trattata come una risorsa scarsa: meno frenata, meno piega, più dolcezza.` },
      { h: 'Pioggia: calcoli e comportamento', b: `Con la pioggia μ scende a circa 0,4–0,6 e la visibilità peggiora. I primi minuti di pioggia dopo un periodo secco sono i **più insidiosi**: acqua, olio e polvere formano un velo scivoloso.

Calcolo a 50 km/h (13,89 m/s):

> asciutto μ = 0,8 → d = 192,9 / (2 × 0,8 × 9,81) = **12,3 m**
> bagnato μ = 0,5 → d = **19,7 m**
> vernice bagnata μ = 0,3 → d = **32,8 m**
> ghiaccio μ = 0,1 → d = **98,3 m**

A 90 km/h (25 m/s) sul bagnato (μ = 0,5): **63,7 m** di sola frenata, rispetto ai 39,8 m su asciutto con μ = 0,8.

Cosa fare:
- **ridurre la velocità** e **aumentare la distanza** (3–4 secondi);
- **anticipare** e usare freni e gas con gradualità; anteriore e posteriore insieme, con più dolcezza;
- **piega minore**;
- visore pulito, abbigliamento impermeabile, fari accesi.

Aquaplaning: con acqua profonda e alta velocità, il pneumatico galleggia e perde contatto. Se succede: **non frenare, non sterzare**, lascia il gas dolcemente e mantieni la moto dritta. La prevenzione è ridurre la velocità e avere battistrada in buono stato (il minimo legale in Italia è 1,6 mm, verifica le norme; sul bagnato più è profondo meglio è).` },
      { h: 'Strisce, tombini, vernice e binari', b: `Alcuni elementi stradali sono **molto più scivolosi del resto** soprattutto quando sono bagnati:

- **strisce pedonali** e segnaletica orizzontale (vernice);
- **tombini** e chiusini metallici;
- **binari del tram** e bordi in metallo;
- **giunti** e rattoppi di bitume (soprattutto con il caldo e dopo la pioggia);
- **macchie d’olio** e carburante agli incroci e alle stazioni di servizio.

Il coefficiente su questi punti può scendere a **0,2–0,3** (valori indicativi). A 30 km/h (8,33 m/s):

> μ = 0,8 → d = 69,4 / 15,7 = **4,4 m**
> μ = 0,25 → d = 69,4 / 4,9 = **14,1 m**

Regole:
- **attraversa in modo dritto**, con la moto verticale, **senza frenare né accelerare** sull’elemento scivoloso;
- **frena prima** di arrivare;
- ai **binari** attraversali con un angolo vicino ai 90° (se possibile) per non far infilare la ruota;
- in curva evita di appoggiare la piega su vernice bagnata.

Se la striscia pedonale bagnata è sul tuo percorso di frenata, ricorda che la distanza è molto più lunga: riduci già **prima** di arrivare.` },
      { h: 'Ghiaia, sabbia, foglie e olio', b: `La **ghiaia** e la **sabbia** si trovano spesso ai bordi, in uscita da cantieri o accessi agricoli, e nelle curve dopo i temporali. Le **foglie** bagnate formano uno strato scivoloso, specialmente in autunno e sotto gli alberi. L’**olio** è quasi invisibile, appare come un’area lucida e iridescente.

Comportamento:
- **riduci** prima, non sopra la ghiaia;
- **moto verticale**, gas e freni costanti, niente scarti;
- se la ghiaia è in curva, **non frenare**: mantieni la piega, riduci il gas dolcemente e guarda l’uscita;
- se la ruota scivola, il riflesso sbagliato è frenare o chiudere il gas bruscamente.

> A 50 km/h, su ghiaia con μ = 0,3 lo spazio è **32,8 m**: 2,7 volte quello dell’asciutto (12,3 m).

Anche l’**accelerazione laterale massima** si riduce: μ = 0,3 → a_max = 2,94 m/s²; su un raggio di 50 m, v_max = √(2,94 × 50) = 12,1 m/s ≈ **44 km/h**: sembra molto, ma è il limite teorico, senza margine; una velocità prudente è molto più bassa.

Cerca i segnali: aloni lucidi, strisce di sabbia, ombre sulla corsia, foglie raccolte. Sono indizi che vanno letti **prima** di arrivarci.` },
      { h: 'Freddo e pneumatici freddi', b: `I pneumatici funzionano bene in una **finestra di temperatura**. Da freddi, specialmente d’inverno, la gomma è più dura e **aderisce meno**: nei primi chilometri hai meno margine. Anche la pressione cambia con la temperatura.

La pressione (assoluta) è proporzionale alla temperatura assoluta (p/T costante). Esempio: pressione 2,5 bar (relativa; ≈ 3,51 bar assoluta) a 20 °C; se la temperatura scende di 10 °C:

> Δp ≈ 3,51 × 10 / 293 ≈ **0,12 bar** in meno

In pratica: ogni 10 °C di calo, circa **0,1 bar** in meno. Un pneumatico sottogonfio si deforma, scalda male e tiene peggio. **Controlla la pressione a freddo**, con valori indicati dal costruttore.

Cosa fare:
- i **primi 5–10 km** guida in modo **dolce**: poca piega, freni progressivi, gas morbido;
- evita partenze brusche e frenate forti da freddo;
- su strade con **ghiaccio** (ombre, ponti, mattino presto sotto i 4 °C) la moto è molto instabile: se possibile **non partire**;
- abbigliamento caldo: il freddo rallenta i riflessi e riduce la sensibilità delle mani.

Non esiste regola universale per la temperatura: dipende dalla mescola. Segui le indicazioni del costruttore del pneumatico.` },
      { h: 'Vento e veicoli pesanti', b: `La spinta del vento sulla moto e sul pilota cresce con il **quadrato** della velocità relativa: F ∝ v². Raddoppiare la velocità del vento quadruplica la forza.

> Un vento di 50 km/h spinge **4 volte** più di un vento di 25 km/h.

Situazioni tipiche:
- **uscita da gallerie**, **viadotti**, tratti con alberi: il vento laterale può arrivare improvviso;
- **sorpasso** di camion: cambio di vento e effetto di «risucchio» e «scudo»; mantieni la traiettoria con decisione;
- **scie** di veicoli pesanti: turbolenza.

Cosa fare:
- **riduci** nei punti ventosi e mantieni una presa salda ma non rigida;
- evita di stare **affiancato** a camion e autobus;
- piega la moto verso il vento solo in modo graduale;
- se il vento è forte (raffiche), meglio **sospendere** il viaggio.

Anche il **carico** (bauletto, borse) aumenta la superficie esposta; carica in modo equilibrato e basso. Con vento forte il rischio non è tanto cadere, ma essere **spostati fuori traiettoria** da raffiche improvvise: serve spazio laterale.` },
      { h: 'Buche, dossi, giunti e asfalto rovinato', b: `Buche e dossi mettono in crisi le **sospensioni** e la **stabilità**. Una buca profonda può danneggiare il cerchio e far perdere il controllo.

Come comportarsi:
- **guarda lontano** per individuarle prima; la scansione serve anche qui;
- se possibile, **evita** la buca con piccole correzioni, **in sicurezza**, senza invadere altre corsie né mettere a rischio chi ti segue;
- se non puoi evitarla: **riduci** prima (frena prima, non nella buca), **alleggerisci** il peso dal manubrio e mantieni la moto dritta;
- **non frenare** mentre la ruota è nella buca: la sospensione è compressa e il pneumatico può bloccarsi;
- attraversa i **giunti** e i dossi in verticale.

> A 50 km/h (13,9 m/s) in 0,5 s percorri 6,9 m. Se vedi una buca a 15 m, hai circa 1 secondo: riduci subito e posiziona la moto, senza manovre brusche.

La **pressione corretta** e **sospensioni in buono stato** aiutano; pneumatici troppo gonfi o troppo duri trasmettono più urti.

Strade con asfalto deteriorato richiedono **velocità inferiore** per mantenere margini: la regola della visibilità vale anche per il fondo che non vedi bene.` },
      { h: 'Sintesi: adatta la guida al fondo', b: `Il filo conduttore è semplice: **meno aderenza = più spazio e meno piega**.

Riepilogo con numeri a 50 km/h, frenata sola:
- asciutto (μ 0,8): **12,3 m**
- bagnato (μ 0,5): **19,7 m**
- vernice bagnata (μ 0,3): **32,8 m**
- ghiaccio (μ 0,1): **98,3 m**

Strategia generale:
1. **Leggi** la strada: lucida, scura, con foglie, con ghiaia, ombre.
2. **Riduci** la velocità prima del problema.
3. **Aumenta** distanza e margini.
4. **Usa** i comandi con dolcezza, senza brusche variazioni.
5. **Mantieni** la moto dritta quando attraversi elementi insidiosi.
6. **Rinuncia** se le condizioni sono oltre le tue capacità (ghiaccio, vento forte, pioggia violenta).

> Calcolo di buonsenso: se a 90 km/h sul bagnato ti servono 63,7 m di frenata più 25 m di reazione (≈ 89 m), ti serve quasi il doppio della distanza dei 2 secondi (50 m). La distanza di sicurezza va **adattata**: 4 secondi = 100 m.

Equipaggiamento adatto (impermeabile, visibilità, gomme in buono stato) fa parte della sicurezza, non è un optional. Preparare il viaggio guardando previsioni meteo e stato delle strade è parte della guida prudente.` }
    ],
    exercises: [
      fill('Frenata da 50 km/h con μ = 0,5 (g = 9,81): metri, un decimale?', ['19,7', '19.7'], '192,9 / 9,81 = 19,7.'),
      fill('Frenata da 50 km/h con μ = 0,3: metri, un decimale?', ['32,8', '32.8'], '192,9 / 5,886 = 32,8.'),
      fill('Frenata da 50 km/h con μ = 0,1: metri, intero?', ['98', '98,3', '98.3'], '192,9 / 1,962 = 98,3.'),
      mc('Se μ si dimezza, lo spazio di frenata:', ['raddoppia', 'si dimezza', 'quadruplica', 'resta uguale'], 0, 'd è inversamente proporzionale a μ.'),
      mc('Quando conviene attraversare strisce pedonali o tombini bagnati?', ['Con moto dritta, senza frenare né accelerare', 'Frenando forte proprio sopra la superficie bagnata', 'Piegando molto per attraversarli più in fretta', 'Accelerando per passarci sopra con la ruota leggera'], 0, 'L’aderenza è bassa: niente forze extra sull’elemento scivoloso.'),
      mc('In caso di aquaplaning:', ['non frenare né sterzare, lascia il gas dolcemente e tieni dritto', 'frena a fondo con il solo freno anteriore', 'sterza di scatto per uscire dall’acqua', 'accelera con decisione per risalire sul velo d’acqua'], 0, 'Il pneumatico non è a contatto: i comandi non servono.'),
      fill('Se la temperatura cala di 10 °C, di circa quanti bar cala la pressione di un pneumatico a 2,5 bar relativi (Δp ≈ P_assoluta·ΔT/T)? (due decimali)', ['0,12', '0.12'], '3,51 × 10/293 = 0,12.'),
      mc('Con pneumatici freddi nei primi km:', ['guida in modo dolce, con poca piega', 'piega al massimo per scaldare le gomme in fretta', 'frena forte per scaldare subito anche i freni', 'non cambia nulla, le gomme sono sempre pronte'], 0, 'Meno aderenza da freddo.'),
      fill('Se la velocità del vento raddoppia, di quante volte cresce la spinta (F ∝ v²)?', ['4', 'quattro'], '2² = 4.'),
      mc('Su una buca che non puoi evitare:', ['riduci prima e non frenare mentre ci passi', 'frena forte mentre sei dentro la buca', 'accelera di colpo per scavalcarla', 'sterza bruscamente per aggirare il bordo'], 0, 'La sospensione compressa e la ruota che si blocca sono rischi.'),
      fill('A 90 km/h con μ = 0,5: frenata in metri, arrotonda all’intero (v = 25 m/s).', ['64', '63,7', '63.7'], '625 / 9,81 = 63,7.'),
      order('Ordina la strategia sui fondi difficili', ['leggi la strada', 'riduci la velocità', 'aumenta la distanza', 'comandi dolci', 'moto dritta sull’elemento scivoloso'], 'Si anticipa e si usa meno aderenza.')
    ],
    test: [
      fill('Frenata da 30 km/h con μ = 0,25: metri, un decimale? (v = 8,33 m/s)', ['14,1', '14.1'], '69,4 / 4,905 = 14,1.'),
      fill('Frenata da 50 km/h con μ = 0,8: metri, un decimale?', ['12,3', '12.3'], '192,9 / 15,7 = 12,3.'),
      mc('Il momento più insidioso con la pioggia è:', ['i primi minuti dopo un periodo secco', 'dopo molte ore di pioggia continua', 'solo di notte, con poca luce', 'solo in autostrada, ad alta velocità'], 0, 'Olio e polvere si mescolano all’acqua.'),
      mc('Con ghiaia in curva è meglio:', ['non frenare, mantenere la piega e ridurre il gas dolcemente', 'frenare con forza per perdere subito velocità', 'piegare di più per aumentare l’aderenza', 'accelerare per uscire dalla ghiaia più velocemente'], 0, 'Evitare azioni brusche.'),
      mc('Qual è un segnale di possibile olio sull’asfalto?', ['Chiazze lucide o iridescenti', 'Asfalto di colore chiaro e molto ruvido', 'Segnaletica orizzontale appena ridipinta', 'Nuvole basse all’orizzonte'], 0, 'Spesso agli incroci e ai distributori.'),
      mc('Con vento forte e raffiche conviene:', ['ridurre, tenere spazio laterale e valutare di sospendere', 'sorpassare i camion per uscire dalla scia', 'andare più veloci per ridurre l’effetto del vento', 'stare vicino ai camion per ripararsi dalle raffiche'], 0, 'Il rischio è lo spostamento improvviso della traiettoria.'),
      mc('Distanza di sicurezza sul bagnato a 90 km/h (25 m/s) con 4 secondi:', ['100 m', '50 m', '25 m', '200 m'], 0, '25 × 4 = 100.')
    ]
  });

  C.addTopic({
    id: 'moto-citta-e-traffico', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'Città e traffico',
    summary: 'Muoversi tra le auto, semafori, rotatorie, incroci, filtrare nel traffico (regole e rischi) e parcheggi, con calcoli su spazi, tempi e velocità relative.',
    objectives: ['Applicare un metodo sicuro per incroci, semafori e rotatorie', 'Valutare rischi e regole del filtrare e del superare in colonna, sapendo che le norme cambiano', 'Calcolare distanze e velocità relative in scenari urbani'],
    prereq: ['moto-fondi-e-condizioni'],
    pages: [
      { h: 'La città è il terreno più denso di rischi', b: `In città le velocità sono basse, ma gli **eventi sono tanti**: incroci ogni pochi metri, pedoni, ciclisti, portiere che si aprono, auto che svoltano o cambiano corsia, tram, buche, fondi scivolosi. Molti incidenti motociclistici urbani avvengono **agli incroci** e a velocità moderate.

Il principio generale è l’**anticipazione**: prevedi cosa può fare ciascun altro utente e lascia spazio per l’errore. Tre regole:

1. **Velocità adatta**: la moto reattiva invoglia a scattare, ma in città i margini sono piccoli.
2. **Dita sui freni** vicino a incroci, strisce e veicoli fermi che potrebbero ripartire.
3. **Posizione** che ti rende visibile e che lasci una via di fuga.

> A 50 km/h percorri 13,9 m/s: a un incrocio con 25 m di visuale, hai meno di **2 secondi** prima di essere sul punto. Una frenata completa da 50 km/h richiede 27,7 m (reazione inclusa): più dello spazio visibile.

Per questo il comportamento prudente in città è ridurre ancora prima dell’incrocio, anche se hai la precedenza: la **precedenza non è un’armatura**.` },
      { h: 'Incroci: il momento critico', b: `All’incrocio il pericolo principale è l’auto che **non ti vede** o **valuta male** la tua velocità e ti taglia la strada. Metodo:

1. **Riduci** prima di arrivare (idealmente a una velocità che permetta di fermarti).
2. **Scansiona** a destra, a sinistra, poi ancora a destra, cercando veicoli che si avvicinano o che sembrano pronti a partire; guarda il **conducente** (volto, direzione dello sguardo, ruote che si muovono).
3. **Posizionati** nella corsia per essere visibile: non nascosto dietro un’auto o un furgone.
4. **Dita sui freni** e piede sul pedale.
5. Se hai la precedenza ma l’altro non ha rallentato, **cedila**.

Le situazioni più critiche:
- **svolta a sinistra** dell’auto che arriva in senso opposto;
- **auto che esce** da una strada laterale o da un passo carraio;
- **veicolo che si ferma** coprendo la visuale a chi arriva da dietro e ne esce un altro.

> Esempio: il tuo spazio di arresto a 40 km/h (11,1 m/s) è 11,1 + 8,8 = **19,9 m**. A 30 km/h sono 8,3 + 5,0 = **13,3 m**: ridurre di 10 km/h libera oltre 6 m, a volte la differenza tra frenata e urto.` },
      { h: 'Semafori', b: `Al semaforo giallo la decisione è: **fermarsi o passare**. Una buona regola è decidere **prima**, guardando il semaforo da lontano; se il verde dura da molto, aspettati il giallo e prepara la frenata.

Per fermarti con una frenata **comoda** (a = 4 m/s²) a 50 km/h:

> d = 13,9 (reazione 1 s) + 192,9/8 (24,1) = **38,0 m**

Se sei più vicino di 38 m al momento del giallo, **non riesci a fermarti comodamente**; con frenata massima (a = 7) servono 27,7 m. Un giallo di 3 secondi a 50 km/h copre circa **41,7 m**. Questa è la «zona di dilemma»: pochi metri in cui sia fermarsi sia passare sono rischiosi. Per questo **riduci in anticipo**.

Altre regole:
- **non partire** appena scatta il verde: guarda se arrivano veicoli con il rosso (chi «brucia»);
- ferma **dietro** la linea di arresto, in posizione visibile; tieni la moto in prima, pronto a muoverti;
- al semaforo, **non** stare nell’angolo cieco di un mezzo pesante;
- con la pioggia ricorda che il fondo (strisce, vernice) è scivoloso: fermati con anticipo.

Passare con il rosso è vietato e pericolosissimo. I semafori con lampeggiante e le regole specifiche possono differire: segui sempre la segnaletica.` },
      { h: 'Rotatorie', b: `La **rotatoria** riduce i conflitti, ma ha rischi propri: auto che entrano senza guardare, curve con fondo scivoloso (linee dipinte, olio di auto ferme), traffico multiplo.

Regole generali (verifica sempre la segnaletica: nelle rotatorie con il segnale «dai precedenza» all’ingresso hanno precedenza i veicoli già circolanti):
- **rallenta** all’ingresso e guarda a sinistra (da dove arrivano i veicoli);
- **usa la corsia giusta** e **segnala** l’uscita con la freccia;
- in rotatoria **mantieni la tua corsia**, non tagliare;
- attenzione a chi entra: considera che possa non vederti.

Calcolo: rotatoria con raggio 15 m a 25 km/h (6,94 m/s): a = 48,2/15 = **3,2 m/s²**. Sul bagnato (μ ≈ 0,4, a_max ≈ 3,9 m/s²), la velocità limite teorica è circa **27,6 km/h**: quindi a 25 km/h sei **quasi al limite**. Sul bagnato, in rotatoria, devi andare **molto più piano**.

Attenzione anche a **strisce e frecce dipinte** sulla rotatoria: sul bagnato sono scivolose, evita di frenare o accelerare sopra di esse mentre sei piegato.

Con camion e autobus lascia spazio: possono occupare più corsie per sterzare.` },
      { h: 'Filtrare e superare in colonna: regole e rischi', b: `Il **filtrare** (muoversi tra file di veicoli fermi o lenti) è una pratica diffusa, ma la sua **regolamentazione varia** da paese a paese e le norme italiane sono oggetto di interpretazioni e cambiamenti. In Italia non esiste, a quanto risulta, una norma che lo autorizzi esplicitamente nel senso in cui altri paesi lo regolano; possono applicarsi i divieti di sorpasso a destra, di marcia a cavallo di linee e di manovre pericolose. **Informati sulle norme vigenti e sulle sanzioni**: la regola può essere cambiata e un incidente mentre si filtra può comportare responsabilità.

Dal punto di vista della **sicurezza**, i rischi sono ben noti: portiere che si aprono, auto che cambiano corsia, pedoni che attraversano tra le file, specchietti, differenze di velocità. Un criterio di buonsenso, che compare in linee guida di altri paesi, è mantenere una **differenza di velocità contenuta** (dell’ordine di 10–15 km/h rispetto al traffico) e **non farlo** quando il traffico scorre.

> L’energia di un urto dipende dal quadrato della **velocità relativa**: con 20 km/h di differenza è **4 volte** quella con 10 km/h.

> A 30 km/h (8,3 m/s) in 1 secondo percorri 8,3 m: una portiera che si apre a 5 m davanti a te non lascia scampo: lo spazio di arresto totale a 30 km/h è circa 13 m.

**Mai** a velocità alta, **mai** in condizioni di scarsa visibilità, **mai** se non puoi vedere cosa c’è davanti. Se non sei sicuro, **resta in fila**: il tempo risparmiato è piccolo (ci torneremo), il rischio no.` },
      { h: 'Slalom tra le auto e cambio corsia', b: `Lo **slalom** tra le auto (cambi di corsia continui, scatti, zig-zag) è tra i comportamenti più rischiosi in città: ogni cambio di corsia ti espone a un nuovo veicolo che potrebbe non vederti, e gli spostamenti laterali riducono l’aderenza disponibile per frenare.

In termini concreti:
- ogni **cambio di corsia** è una manovra che richiede specchietto, occhiata di spalla e freccia;
- le auto non si aspettano una moto che si muove rapidamente di lato;
- i **veicoli lunghi** hanno angoli ciechi grandi;
- sul fondo irregolare (rattoppi, tombini) un cambio di direzione brusco può far perdere aderenza.

> Un cambio di corsia da 3 m fatto in 1 secondo a 50 km/h: lo spostamento laterale è piccolo, ma in 1 secondo percorri 13,9 m in avanti. L’automobilista dietro di te, se non ti vede, ha **meno di 1,5 s** per accorgersi e reagire.

Consigli:
- **mantieni la corsia** e muoviti con il flusso;
- **cambia solo se serve** e quando hai spazio libero;
- **segnala sempre** e controlla l’angolo cieco;
- non seguire il veicolo davanti troppo da vicino: se frena, hai bisogno di spazio.

La regola della **distanza di 2 secondi** vale anche in città (a 50 km/h sono 27,8 m): in colonna molte persone ne tengono molto meno; tu non puoi fidarti che l’auto davanti non freni di botto.` },
      { h: 'Pedoni, ciclisti, mezzi pubblici, portiere', b: `Gli utenti più vulnerabili e imprevedibili della città richiedono **margini aggiuntivi**:

- **Pedoni**: possono comparire tra auto ferme o da dietro un autobus. Alle strisce pedonali **riduci** e preparati a fermarti; ricorda che la vernice bagnata è scivolosa.
- **Ciclisti**: sorpassali con almeno **1 m** di distanza laterale (in molti paesi è richiesto 1,5 m; verifica la norma) e senza strette; non sorpassarli subito prima di un incrocio.
- **Autobus e tram**: fermano la visuale; i binari sono scivolosi; le fermate sono punti di attraversamento.
- **Portiere**: le auto parcheggiate possono aprire all’improvviso: lascia **un metro** (la lunghezza di una portiera) quando passi accanto a veicoli fermi.
- **Veicoli di emergenza**: fai spazio e non ostacolarli.

> Un pedone che attraversa a 1,4 m/s (5 km/h) impiega 2 s per 2,8 m (la larghezza di una corsia). A 50 km/h in 2 s percorri 27,8 m: se lo vedi a 25 m, non basta; lo spazio di arresto è 27,7 m. Per evitarlo serve ridurre **prima**.

La strategia è **leggere i segnali**: pedone che guarda il telefono, bambino vicino alla strada, auto con la ruota che gira, finestrino con persone, portiera con persona dentro. Sono indizi che qualcosa sta per accadere.` },
      { h: 'Parcheggi e manovre a bassa velocità', b: `Molte cadute avvengono **da fermo o a bassa velocità**: manovre, parcheggi, pendenze, fondi scivolosi (ghiaino, olio, sabbia, foglie).

Per le **manovre lente**:
- **sguardo** nella direzione in cui vuoi andare, testa girata, non sulla ruota anteriore;
- usa **frizione** (in zona di frizione) e **freno posteriore** per dosare la velocità; il gas costante;
- sterza a fondo solo con la moto in **leggero movimento** e controlla il baricentro: una moto ferma con sterzo completamente girato è instabile;
- usa il **cavalletto** laterale su fondo solido e piano; su pendenze **parcheggia in modo che la moto non si muova** (marcia inserita, ruota verso il bordo, a seconda della pendenza). Sui fondi morbidi (sabbia, asfalto caldo e tenero) metti un appoggio sotto il cavalletto.

> Una moto da 200 kg su una pendenza del 10% ha una forza lungo il pendio pari a 200 × 9,81 × sin(5,7°) ≈ **195 N**: poco meno di 20 kg-forza, abbastanza da farla scivolare se il cavalletto cede.

Parcheggia in modo **sicuro** e legale: non su marciapiedi dove intralci pedoni, non su strisce, non in zone vietate. Blocca lo sterzo e proteggi la moto dal furto in modo adeguato.

**Sintesi**: in città moto sicura vuol dire velocità moderata, scansione continua, margini agli incroci, nessun slalom, attenzione ai più vulnerabili.` }
    ],
    exercises: [
      fill('Spazio di arresto totale a 40 km/h (11,1 m/s), reazione 1 s e a = 7 m/s²: metri, un decimale?', ['19,9', '19.9', '20'], '11,1 + 123,5/14 = 11,1 + 8,8.'),
      fill('Semaforo: a 50 km/h con frenata comoda (a = 4) servono quanti metri totali (reazione 1 s inclusa), intero?', ['38', '38,0', '38.0'], '13,9 + 24,1 = 38,0.'),
      mc('All’incrocio, anche se hai la precedenza, conviene:', ['ridurre e controllare che l’altro ti abbia visto', 'accelerare per passare prima degli altri', 'chiudere gli occhi e affidarsi alla fortuna', 'suonare il clacson e passare senza guardare'], 0, 'La precedenza non protegge da un urto.'),
      mc('Quale informazione è corretta sul filtrare?', ['Le norme variano e cambiano: bisogna informarsi sulle regole vigenti e sulle sanzioni', 'È sempre consentito ovunque, senza alcun limite', 'È sempre vietato ovunque in modo identico in tutta Europa', 'È consentito solo ai ciclomotori e ai motocicli leggeri'], 0, 'La disciplina dipende dal paese e può cambiare.'),
      fill('Se la differenza di velocità con il traffico passa da 10 a 20 km/h, l’energia d’urto relativa si moltiplica per quante volte?', ['4', 'quattro'], 'Dipende dal quadrato della velocità relativa.'),
      mc('In rotatoria sul bagnato, rispetto all’asciutto, è corretto:', ['andare molto più piano e non frenare né accelerare sulle strisce dipinte', 'andare più forte per uscire prima dalla rotatoria', 'tagliare le corsie per accorciare il percorso', 'frenare con decisione mentre si è in piega'], 0, 'Il limite di aderenza è circa la metà.'),
      fill('Rotatoria r = 15 m, 25 km/h (6,94 m/s): accelerazione laterale, un decimale?', ['3,2', '3.2'], '48,2/15 = 3,21.'),
      mc('Qual è un comportamento sicuro verso un ciclista?', ['Lasciare ampia distanza laterale e non sorpassare prima di un incrocio', 'Passare a pochi centimetri per fare in fretta', 'Suonare il clacson e stringerlo verso il bordo', 'Superarlo in curva, dove ha meno spazio e meno visibilità'], 0, 'Distanza laterale e scelta del momento.'),
      mc('Quando un’auto parcheggiata può aprire la portiera?', ['In qualsiasi momento: lascia circa un metro', 'Mai, se ha le luci spente e il motore spento', 'Solo con il motore acceso e il piede sul freno', 'Solo di notte, quando il traffico è ridotto'], 0, 'Il rischio è imprevedibile: spazio laterale.'),
      fill('Passando davanti a un’auto parcheggiata a 30 km/h, quanti metri percorri in 1 secondo (un decimale)?', ['8,3', '8.3'], '30/3,6 = 8,33.'),
      mc('Per le manovre a bassa velocità si usa:', ['frizione, freno posteriore, gas costante e sguardo verso la direzione', 'solo il freno anteriore azionato a fondo', 'soltanto l’acceleratore, senza usare frizione e freno', 'sguardo sulla ruota anteriore e gas a scatti'], 0, 'Dosaggio e sguardo avanti.'),
      order('Ordina il metodo di approccio a un incrocio', ['riduci', 'scansiona destra-sinistra-destra', 'posizionati visibile', 'dita sui freni', 'passa solo se l’altro ti ha visto'], 'Prima il margine, poi il passaggio.')
    ],
    test: [
      fill('Spazio di arresto totale a 30 km/h (reazione 1 s, a = 7 m/s²), un decimale?', ['13,3', '13.3'], '8,3 + 5,0 = 13,3.'),
      fill('Giallo di 3 secondi a 50 km/h: quanti metri si percorrono (un decimale)?', ['41,7', '41.7'], '13,89 × 3.'),
      mc('Cosa vuol dire «zona di dilemma» al semaforo?', ['Pochi metri dove sia fermarsi sia passare sono a rischio', 'Una zona priva di semaforo lungo la strada', 'Una zona riservata esclusivamente ai pedoni', 'La corsia riservata ai bus e ai taxi'], 0, 'Riducendo prima si evita di trovarcisi.'),
      mc('Perché lo slalom è rischioso?', ['Ogni cambio di corsia espone a veicoli che non ti vedono e riduce aderenza', 'Perché fa consumare più benzina del normale', 'Perché rallenta troppo il flusso del traffico', 'Perché in piega non si riesce a frenare mai'], 0, 'Manovre brusche e angoli ciechi.'),
      mc('Al semaforo verde, prima di partire conviene:', ['controllare che nessuno passi con il rosso', 'accelerare subito, prima degli altri veicoli', 'passare in diagonale per guadagnare spazio', 'spegnere il motore e riaccenderlo in partenza'], 0, 'Chi «brucia» il rosso è un pericolo.'),
      mc('Perché si parcheggia con attenzione sui fondi morbidi?', ['Il cavalletto può affondare e la moto cadere', 'Perché in quel caso si consuma più carburante', 'Perché la moto si sporca di fango', 'Non è un problema, il cavalletto regge sempre'], 0, 'Serve un appoggio sotto il cavalletto.'),
      mc('Quale distanza di sicurezza minima in città a 50 km/h con regola dei 2 secondi?', ['circa 28 m', 'circa 5 m', 'circa 100 m', 'circa 2 m'], 0, '13,9 × 2 = 27,8 m.')
    ]
  });

  C.addTopic({
    id: 'moto-gruppo-e-viaggi', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'Guida in gruppo e viaggi',
    summary: 'Formazioni e segnali, distanze, fatica e soste, pianificazione del viaggio, carico e passeggero, con calcoli su tempi, spazi ed energia.',
    objectives: ['Applicare la formazione a scacchiera e le distanze corrette in gruppo', 'Pianificare un viaggio con soste, tempi e carico in modo realistico', 'Capire come passeggero e bagagli cambiano comportamento ed energia della moto'],
    prereq: ['moto-citta-e-traffico'],
    pages: [
      { h: 'Perché guidare in gruppo richiede regole', b: `Andare in gruppo è piacevole ma aumenta alcuni rischi: **distanza ridotta**, tendenza a seguire il ritmo del più veloce, **pressione sociale** (non voler rallentare), distrazioni, sorpassi di gruppo.

Principi base:
- **Guida il tuo ritmo**, non quello degli altri. Se ti senti a disagio, **rallenta** e lascia che il gruppo vada avanti, ritrovandoti al punto di sosta.
- **Rispetta i limiti** e il codice: il gruppo non è una giustificazione.
- **Briefing prima di partire**: percorso, soste, segnali, ordine, cosa fare se qualcuno si ferma o si perde.
- **Dimensione**: gruppi piccoli (fino a 5–6 moto) sono più gestibili; i grandi si dividono in sottogruppi.
- Ogni pilota è **responsabile** della propria sicurezza.

> Un gruppo con una formazione corretta occupa **più lunghezza** di una fila: 6 moto con 2 s di distanza a 90 km/h (50 m ogni 2 s) occupano circa 250 m. Il gruppo lungo è meno compatto ma più sicuro.

Capofila e chiudifila sono ruoli chiave: il primo conosce il percorso e imposta un ritmo adatto al meno esperto; l’ultimo vigila e segnala problemi.` },
      { h: 'La formazione a scacchiera', b: `Su strada con due o più moto si usa la formazione **a scacchiera** (zig-zag): le moto si alternano su due posizioni nella corsia, una nella metà sinistra, la successiva nella destra.

Vantaggi:
- ogni moto ha una **traccia** libera davanti, per frenare o evitare;
- la distanza effettiva dalla moto davanti (sulla stessa traccia) è **doppia** rispetto a quella dalla moto diagonale;
- si vede meglio la strada.

Distanze (regola dei secondi):
- dalla moto **sulla stessa traccia**: almeno **2 secondi**;
- dalla moto **diagonale** (davanti): circa **1 secondo**.

> A 90 km/h (25 m/s): 2 s = **50 m**, 1 s = **25 m**. A 120 km/h (33,3 m/s): 2 s = **66,7 m**.

In **curva** e su **strade strette** o con pioggia, passa alla **fila indiana** (una dietro l’altra, ciascuno nella propria traccia) e **aumenta** la distanza. Non affiancarti mai a un’altra moto nella stessa corsia: non lascia spazio per evitare.

Mantieni la formazione **senza irrigidirti**: se il gruppo ha un ritmo che ti spinge, esci dalla scia o fermati. **Non sorpassare** a gruppi senza riflettere: ogni pilota valuta il proprio sorpasso.` },
      { h: 'Segnali e comunicazione', b: `In gruppo la comunicazione evita malintesi. Segnali manuali e luminosi comuni (da concordare nel briefing: non sono tutti ufficiali):

- **mano sinistra alzata**: attenzione/avviso o chiamata di sosta;
- **mano verso il basso** (indicando): pericolo sul fondo (buca, ghiaia);
- **dito indicante il lato**: ostacolo da evitare su quel lato;
- **pugno chiuso alzato**: sosta/rallentamento;
- **freccia**: cambio di direzione e svolta;
- fari o lampeggio **breve** per avvisi.

Per la **sicurezza**:
- i segnali non sostituiscono la **freccia**, che resta obbligatoria quando previsto dal codice;
- ripeti il segnale **a catena** ai piloti dietro;
- usa i segnali **con anticipo** e mantieni sempre due mani sul manubrio quando puoi: i segnali con una mano a velocità elevata o in curva non sono prudenti.

Eventuali **interfono** nel casco facilitano la comunicazione ma **distraggono**: usa volume contenuto, parla poco, evita conversazioni lunghe in traffico.

> Un segnale dato 3 secondi prima di un pericolo a 90 km/h dà **75 m** di anticipo a chi segue: è tempo prezioso.` },
      { h: 'Fatica e soste', b: `La **fatica** peggiora attenzione e riflessi, in modo non sempre percepibile. Dopo molte ore di guida gli errori aumentano, soprattutto con vento, caldo o freddo.

Linee guida:
- **sosta ogni 1,5–2 ore** (circa 100–150 km, a seconda del ritmo) di almeno **15–20 minuti**;
- **idratati** e fai uno spuntino leggero; evita pasti pesanti;
- **allunga** muscoli e articolazioni (collo, polsi, schiena);
- **riposa** bene la notte prima;
- **fermati** se senti segnali di stanchezza: sbadigli frequenti, difficoltà a mantenere la traiettoria, pensieri che vagano, occhi pesanti.

La stanchezza non si vince con un caffè: la caffeina aiuta solo temporaneamente. **Dormire** o riposare è la soluzione.

Anche il **meteo** stanca: caldo (disidratazione), freddo (rallenta i riflessi, irrigidisce), pioggia (concentrazione). Un abbigliamento adatto (strati, protezioni ventilate) riduce l’impatto.

> Esempio: un viaggio di 400 km a 70 km/h di media in movimento richiede **5,7 ore** (5 h 43 min) di guida; con 3 soste da 20 minuti diventano **6 h 43 min**. Pianificare con meno soste per «recuperare» è un errore.` },
      { h: 'Pianificare il viaggio', b: `Un buon viaggio comincia **prima**:

1. **Percorso**: scegli strade adatte; verifica lavori, chiusure e meteo. In montagna considera quota e temperatura.
2. **Tempi realistici**: calcola con una media **prudente** e le soste.
3. **Orari**: evita di guidare nelle ore più scure o con luce radente, se puoi; parti con margine.
4. **Carburante e ricarica**: pianifica le soste in base all’autonomia reale; non aspettare la spia.
5. **Moto**: controlla pneumatici (pressione e usura), freni, olio, catena (o cardano), luci, liquidi. Se il viaggio è lungo, fai un controllo prima.
6. **Documenti** e **kit**: patente, libretto, assicurazione, kit di emergenza e riparazione foratura, giubbotto ad alta visibilità, telefono carico.
7. **Piano B**: cosa fare se il meteo peggiora o ti senti stanco.

> Un tratto di 250 km a 80 km/h medi: 3 h 7 min di guida; con una sosta da 20 min: 3 h 27 min. Se parti alle 9:00, arrivi circa alle 12:30.

Condividi il programma con qualcuno (percorso e orario previsto). Non cercare di «recuperare tempo» correndo: come visto, la velocità extra fa risparmiare pochissimo e costa molto in rischio.` },
      { h: 'Carico e bagagli', b: `Il carico cambia **massa, baricentro e stabilità** della moto. Alcune regole:

- **rispetta il peso massimo** indicato dal costruttore (libretto o manuale);
- carica **basso** e **vicino al centro** della moto, in modo **simmetrico** (stesso peso a destra e a sinistra);
- **fissa bene**: bagagli sciolti si muovono e destabilizzano;
- non appendere pesi al manubrio;
- **adegua pressione** dei pneumatici e, se previsto, precarico delle sospensioni, secondo il manuale;
- **fari** possono richiedere regolazione se il carico alza l’anteriore.

Un carico alto e dietro tende a **scaricare l’anteriore** (sterzo leggero) e a rendere la moto meno stabile.

> Esempio con una massa di 280 kg (moto + pilota) a 90 km/h: energia cinetica = ½ × 280 × 25² = **87,5 kJ**. Con 30 kg di bagagli, 310 kg: **96,9 kJ**, circa +11%. I freni devono dissipare più energia e lo spazio non cala.

Con bagagli aumentano anche **ingombro** (valigie larghe: attenzione ai passaggi stretti e al filtrare, se consentito) e **superficie al vento**.

Fai un **giro di prova** a bassa velocità con il carico, per sentire come risponde la moto.` },
      { h: 'Il passeggero', b: `Trasportare un passeggero cambia molto la moto: massa, baricentro, frenata, stabilità. Solo se la moto è **omologata** per due persone e il passeggero ha **casco omologato** e **abbigliamento adeguato**; verifica le **norme** (requisiti di età, esperienza e documenti) vigenti.

Per il pilota:
- **frena e accelera con più dolcezza**: il passeggero spinge in avanti e fa oscillare il peso;
- **aumenta le distanze** (almeno un secondo in più);
- **entra in curva più piano**;
- regola **pressione** e **precarico** secondo manuale;
- **parla** con il passeggero prima: come tenersi, dove appoggiare i piedi, quando inclinarsi (insieme al pilota, senza opporsi), evitare movimenti bruschi.

Per il passeggero: **piedi sulle pedane** (sempre, anche alle soste brevi), **mani** alle maniglie o al pilota, **segui** la moto senza anticipare le curve, **tieni il casco allacciato**.

> Con un passeggero da 70 kg la massa passa da 280 a 350 kg (+25%): l’energia cinetica a 90 km/h sale da 87,5 a **109,4 kJ** (+25%).

Un passeggero che frena male o si sposta bruscamente può far perdere il controllo: **spiegare è sicurezza**. E per il pilota inesperto, i primi viaggi in due vanno fatti con calma, su strade conosciute.` },
      { h: 'Sintesi e preparazione alle emergenze', b: `In viaggio e in gruppo la sicurezza deriva da **regole concordate**, **ritmo adatto**, **distanze** e **riposo**.

Checklist:
- **briefing** e segnali concordati;
- **scacchiera** con 2 secondi (stessa traccia) e 1 secondo (diagonale); **fila indiana** in curva e con pioggia;
- **soste** ogni 1,5–2 ore;
- **carico** basso, simmetrico e fissato; **pressioni** adeguate;
- **passeggero** istruito e protetto;
- **percorso** e **meteo** verificati; **piano B**.

> Rapporto distanza/tempo: a 90 km/h ogni secondo di distanza vale 25 m. Un gruppo di 5 moto in scacchiera con 1 secondo fra consecutive occupa circa 100 m; in fila indiana a 2 secondi, 200 m.

In emergenza (un compagno cade o si ferma):
- **non frenare bruscamente** né fermarti in mezzo alla carreggiata;
- **fermati** in un punto sicuro, **segnala** il pericolo, **chiama il 112** se serve, aiuta senza aggravare (seguirà nell’ultima lezione).

Infine, il piacere del viaggio non dipende dalla velocità: dipende da **panorami, compagnia e sicurezza**. Chi arriva sano è il vincitore del giro.` }
    ],
    exercises: [
      fill('In scacchiera a 90 km/h, 2 secondi sulla stessa traccia equivalgono a quanti metri?', ['50'], '25 × 2 = 50.'),
      fill('In scacchiera a 90 km/h, 1 secondo dalla moto diagonale equivale a quanti metri?', ['25'], '25 × 1.'),
      fill('A 120 km/h (33,3 m/s), 2 secondi sono quanti metri (intero)?', ['67', '66,7', '66.7', '66'], '33,33 × 2 = 66,7.'),
      mc('In curva stretta o con pioggia, il gruppo dovrebbe:', ['passare alla fila indiana e aumentare la distanza', 'affiancarsi per restare compatti', 'accelerare per uscire dalla curva insieme', 'sorpassarsi a vicenda per cambiare ordine'], 0, 'Servono tracce libere e più margine.'),
      mc('Se un compagno va troppo forte per te, la cosa migliore è:', ['andare al tuo ritmo e ritrovarsi alla sosta', 'inseguirlo per non perdere il gruppo', 'sorpassare tutti gli altri per raggiungerlo', 'staccarsi dal gruppo e spingere al massimo'], 0, 'Ognuno è responsabile della propria sicurezza.'),
      fill('Un viaggio di 400 km a 70 km/h di media in movimento richiede quante ore di guida (un decimale)?', ['5,7', '5.7'], '400/70 = 5,71.'),
      mc('Ogni quanto è prudente fare una sosta di riposo?', ['circa ogni 1,5–2 ore', 'ogni 8 ore', 'mai se si è in gruppo', 'solo con il buio'], 0, 'Linea guida generale: la fatica cresce con il tempo.'),
      mc('Come va disposto il carico?', ['basso, vicino al centro e simmetrico', 'in alto e dietro, per liberare il peso', 'appeso al manubrio, sui due lati', 'tutto da un solo lato, per bilanciare il pilota'], 0, 'Alto e laterale peggiora stabilità e sterzo.'),
      fill('Massa 280 kg, v = 25 m/s: energia cinetica in kJ (un decimale)? ½mv².', ['87,5', '87.5'], '0,5 × 280 × 625 = 87 500 J.'),
      fill('Con passeggero la massa passa da 280 a 350 kg: di quanto cresce l’energia cinetica a parità di velocità (%)?', ['25'], '350/280 = 1,25.'),
      mc('Cosa deve fare il passeggero?', ['tenere i piedi sulle pedane e seguire la moto in curva', 'opporsi alla piega, restando dritto sulla sella', 'togliere il casco in sosta in mezzo alla strada', 'stare in piedi sulle pedane nei tratti veloci'], 0, 'Seguire senza anticipare.'),
      order('Ordina la preparazione di un viaggio', ['percorso e meteo', 'controllo moto', 'carico e pressioni', 'briefing e segnali', 'soste e piano B'], 'Si prepara prima di partire.')
    ],
    test: [
      fill('Segnale dato 3 secondi prima di un pericolo a 90 km/h: quanti metri di anticipo?', ['75'], '25 × 3 = 75.'),
      fill('Tratto di 250 km a 80 km/h in movimento: ore di guida (due decimali)?', ['3,13', '3.13', '3,125', '3.125'], '250/80 = 3,125 h = 3 h 7,5 min.'),
      mc('Con 6 moto, in scacchiera, quale coppia è sulla stessa traccia?', ['una moto e quella due posizioni davanti', 'due moto affiancate', 'una moto e quella subito davanti', 'nessuna'], 0, 'L’alternanza porta alla stessa traccia ogni due moto.'),
      mc('Dopo 400 km con 3 soste da 20 min a 70 km/h medi, il tempo totale è circa:', ['6 h 43 min', '5 h 43 min', '7 h 30 min', '4 h'], 0, '5 h 43 + 60 min.'),
      mc('Perché il passeggero richiede più distanza?', ['La massa aumenta e la frenata/stabilità cambiano', 'Perché il motore diventa più forte', 'Perché la moto diventa più corta', 'Perché non serve nessuna distanza in più'], 0, 'Più energia e dinamica diversa.'),
      mc('L’interfono nel casco:', ['può facilitare la comunicazione ma distrae: va usato poco', 'è obbligatorio per legge in tutti i casi', 'sostituisce le frecce e i segnali', 'è sempre sicuro e non distrae mai'], 0, 'Attenzione limitata.'),
      mc('La caffeina contro la stanchezza:', ['aiuta solo temporaneamente: servono riposo e sosta', 'sostituisce completamente il sonno perso', 'rende sicuri anche con forte stanchezza', 'cura la fatica in modo definitivo'], 0, 'Il riposo è l’unica soluzione.')
    ]
  });

  C.addTopic({
    id: 'moto-guida-difensiva-e-mentalita', subject: 'moto', stage: 'L1', minutes: 14,
    title: 'Guida difensiva e mentalità',
    summary: 'Gestione di emozioni e fretta, alcol e farmaci (zero), stanchezza, corsi di guida sicura e cosa fare dopo una caduta: sicurezza, 112, casco.',
    objectives: ['Applicare i principi della guida difensiva e gestire emozioni e fretta', 'Spiegare perché alcol, farmaci e stanchezza sono incompatibili con la guida', 'Descrivere le azioni corrette dopo una caduta o un incidente'],
    prereq: ['moto-gruppo-e-viaggi'],
    pages: [
      { h: 'Che cos’è la guida difensiva', b: `La **guida difensiva** è un modo di guidare basato su **anticipazione**, **margini** e **assunzione di responsabilità**: non conta chi ha ragione, conta **arrivare sani**. Non significa guidare «timidamente», ma **guidare in modo da lasciare spazio all’errore** (tuo e degli altri).

Principi:
1. **Anticipa**: cerca i problemi prima che diventino emergenze.
2. **Assumi** che gli altri possano sbagliare o non vederti.
3. **Mantieni** distanza e velocità adatte.
4. **Lascia sempre una via di fuga**.
5. **Rispetta** il codice e i limiti.
6. **Controlla** le tue condizioni: sobrietà, riposo, emozioni.

> Un esempio numerico: sulla stessa strada, a 50 km/h con distanza di 2 secondi tieni 27,8 m, mentre a 1 secondo tieni solo 13,9 m, meno dello spazio di frenata di 13,8 m + la reazione di 13,9 m = 27,7 m. A 1 s di distanza non puoi evitare un veicolo che frena forte.

La guida difensiva non è teoria: sono **abitudini** che si costruiscono ripetendole, anche quando «non serve». Un piccolo esercizio quotidiano: **ad alta voce** (o mentalmente) nomina i pericoli che vedi: «auto ferma a destra, può uscire», «semaforo giallo in vista», «strada bagnata».` },
      { h: 'Emozioni e fretta', b: `Le **emozioni** influenzano la guida: rabbia, ansia, euforia, tristezza riducono attenzione e giudizio. La **fretta** è tra i fattori più comuni: porta a velocità eccessiva, distanze corte, manovre azzardate.

Un calcolo per ridimensionare la fretta: su 20 km, a 90 km/h impieghi 13 min 20 s; a 100 km/h 12 min. Risparmi **80 secondi**. Su 50 km: 33 min 20 s contro 30 min, **3 min 20 s**.

> L’energia di un urto passa da 625 (90 km/h) a 772 (100 km/h) in unità proporzionali a v² in (m/s)²: **+23%**, per 80 secondi.

Strategie:
- **parti con margine**: se sei in ritardo, avvisa e accetta di arrivare tardi;
- se ti arrabbi per un comportamento altrui (sorpassi, tagli), **non reagire**: rallenta, respira, lascia andare; non inseguire, non rispondere con gesti;
- **non guidare** se sei molto agitato o sconvolto: cammina un po’, bevi acqua, aspetta;
- **euforia** (moto nuova, bella giornata) = rischio: metti un limite personale più basso;
- **non lasciarti sfidare** da altri motociclisti o automobilisti.

Il tempo risparmiato correndo è quasi sempre **irrisorio**, mentre il rischio sale con il quadrato della velocità.` },
      { h: 'Alcol: tolleranza zero', b: `L’**alcol** altera riflessi, coordinazione, giudizio, visione e percezione del rischio; spesso provoca anche **eccesso di fiducia**. In moto, dove l’equilibrio e il controllo sono continui, gli effetti sono gravi anche a basse concentrazioni.

Le **norme** (in Italia il limite generale è 0,5 g/l; tolleranza zero per neopatentati nei primi anni, per chi ha meno di 21 anni e per i conducenti professionali; le regole e le sanzioni possono cambiare) sono un **limite legale**, non una soglia di sicurezza. Per la guida in moto la regola prudente è **zero alcol**.

Calcolo orientativo (formula di Widmark): una persona di 70 kg con un bicchiere (circa 12 g di alcol) raggiunge circa **12 / (70 × 0,7) ≈ 0,25 g/l**. Il fegato smaltisce in media circa **0,10–0,15 g/l all’ora**: per eliminare quel bicchiere servono quasi **2 ore** (circa 1,6 h a 0,15 g/l/h), ma i valori variano molto da persona a persona; **non esiste modo di «smaltire» in fretta** (caffè, acqua, doccia non servono).

> Se l’alcol allunga il tempo di reazione da 1,0 a 1,3 s (valore ipotetico), a 90 km/h percorri **7,5 m** in più prima di frenare.

Regola: **se bevi, non guidi**. Programma il ritorno (taxi, amico che non beve, trasporto pubblico) **prima**. Questo vale anche per il «giorno dopo»: l’alcol può essere ancora presente.` },
      { h: 'Farmaci, sostanze e stanchezza', b: `**Farmaci**: alcuni (sedativi, antistaminici, ansiolitici, antidolorifici forti, alcuni antidepressivi) causano **sonnolenza**, rallentano i riflessi e alterano la vista. **Leggi il foglietto illustrativo** (avvertenze sulla guida) e chiedi a medico o farmacista; in caso di dubbio **non guidare**.

**Sostanze stupefacenti** e altre sostanze: vietate alla guida, con effetti gravi sulla percezione e sul giudizio. Nessuna sostanza migliora la guida.

**Stanchezza e sonno**: la privazione di sonno peggiora l’attenzione in modo simile all’alcol. Studi hanno stimato che restare svegli per circa 17–19 ore produce prestazioni paragonabili a un tasso alcolemico intorno a 0,5 g/l (stime variabili). I **microsonni** durano pochi secondi: a 90 km/h, **4 secondi** sono **100 m** percorsi senza controllo.

Segnali: sbadigli, occhi pesanti, difficoltà a mantenere la traiettoria, distrazione, perdita di ricordi degli ultimi km.

> Se senti stanchezza: **fermati** in un luogo sicuro, riposa 15–20 minuti; se hai molto sonno, **dormi**. Non «tirare avanti».

Anche **dolore**, **malattia**, **fame**, **sete** e **caldo estremo** riducono la capacità di guida. Prima di partire fai un rapido **controllo personale**: «sono lucido, sobrio, riposato, calmo?». Se no, rimanda o scegli un altro mezzo.` },
      { h: 'Corsi di guida sicura e allenamento', b: `La patente certifica un livello minimo; la **guida sicura** si impara con **esperienza** e **formazione**. I **corsi di guida sicura** (in aree chiuse, con istruttori qualificati) permettono di provare, in sicurezza, cose che su strada sono pericolose: frenata di emergenza, evitamento, curva, gestione del fondo scivoloso, manovre a bassa velocità.

Cosa si impara:
- **frenata** progressiva e di emergenza (anche con ABS);
- **schivata** di un ostacolo;
- **posizione** e sguardo;
- **limiti** della moto e propri;
- gestione di **errori** (guardare il bersaglio, panico).

Un corso non rende invincibili, e **non è un invito a sperimentare** su strada pubblica: serve a creare automatismi corretti e a **conoscere i limiti** in un ambiente controllato. Gli studi sui corsi hanno risultati variabili: i benefici maggiori si vedono quando i corsi sviluppano **atteggiamento** e giudizio, non solo abilità tecniche.

> Un riferimento utile: una frenata di emergenza da 50 km/h dovrebbe fermare la moto in circa **14 m** di frenata più il tempo di reazione. Se nel corso scopri di avere bisogno di **molto più**, significa che devi lavorare sul dosaggio.

Anche **allenarsi** da soli in un parcheggio vuoto (manovre lente, frenate progressive a bassa velocità) con **cautela** aiuta. **Revisiona** periodicamente le tue abitudini e, dopo lunghe pause, ricomincia con calma.` },
      { h: 'Dopo una caduta: prima la sicurezza', b: `Se cadi o assisti a una caduta, la priorità è **evitare ulteriori danni**. Sequenza di base:

1. **Fermati / sicurezza**: se sei un soccorritore, **non esporti**. Parcheggia in modo sicuro, **accendi le quattro frecce**, indossa se possibile il **giubbotto ad alta visibilità**, **segnala** il pericolo a distanza (triangolo, se ne hai uno e se è sicuro raggiungere il punto).
2. **Spegni il motore** della moto caduta (e chiudi il rubinetto del carburante, se previsto) per ridurre il rischio di incendio.
3. **Chiama il 112** (numero unico di emergenza europeo, funziona anche senza credito e fuori copertura del tuo operatore): comunica **luogo preciso**, numero di feriti, condizioni, pericoli.
4. **Valuta** la persona: è cosciente? respira?
5. **Non muoverla** se sospetti trauma alla colonna (dolore al collo o alla schiena, formicolii, intorpidimento), a meno di **pericolo immediato** (ad esempio incendio o traffico).

Anche se ti senti bene, dopo una caduta **fatti controllare**: l’adrenalina maschera il dolore e alcuni danni (testa, organi interni) si manifestano dopo.

> Ricorda: l’energia in gioco anche a 50 km/h equivale a una caduta da circa **10 m**; non sottovalutare i traumi.

Segui le **indicazioni dell’operatore del 112**: sono istruzioni specifiche per la situazione.` },
      { h: 'Il casco e il primo soccorso', b: `**Il casco non si rimuove** a meno di necessità, se la persona è **cosciente** o **incosciente** ma respira: la rimozione scorretta può aggravare un trauma del collo. La regola generale è: **non togliere il casco** a un infortunato, salvo che sia **indispensabile** (ad esempio la persona **non respira** e le vie aeree non si possono liberare) e **solo con persone addestrate** o su indicazione del 112.

Cosa puoi fare:
- **parlare** con la persona, **rassicurarla** e dirle di **non muoversi**;
- **mantenere il capo allineato**, senza forzare;
- **controllare il respiro** (guardare il torace, ascoltare);
- **fermare emorragie** esterne con pressione diretta;
- **coprire** la persona per evitare il raffreddamento;
- **non dare da bere o mangiare**;
- **non rimuovere** oggetti conficcati.

Se la persona **non respira**, l’operatore del 112 ti guiderà nelle **manovre di rianimazione**. Un **corso di primo soccorso** (BLS) è un investimento prezioso per ogni motociclista.

> Un calcolo di tempo: l’ambulanza ha bisogno di una posizione precisa. A 90 km/h in 1 minuto percorri 1,5 km: segna **il cartello chilometrico** o la **via** più vicina prima di chiamare.

In caso di **incidente con un altro veicolo**, scambia i dati, scatta foto e, se ci sono feriti, **chiama sempre i soccorsi**. Le procedure assicurative e legali cambiano: informati prima.` },
      { h: 'Mentalità: dalla regola all’abitudine', b: `La sicurezza in moto si regge su una **mentalità**: umiltà, curiosità, costanza.

- **Umiltà**: riconoscere che il margine è piccolo e che chiunque può sbagliare.
- **Apprendimento continuo**: dopo un «quasi incidente» chiediti **cosa è successo** e **cosa cambiare**.
- **Priorità**: arrivare sano è più importante di qualsiasi tempo o prestazione.
- **Pazienza**: rinunciare a un sorpasso, a una curva piena di sabbia, a una partenza con il maltempo non è debolezza.
- **Rispetto**: per le persone più vulnerabili e per le regole.

Un **piano personale** in cinque righe (ripasso del corso):
1. **Sobrio, riposato, calmo** prima di partire.
2. **Equipaggiamento completo**.
3. **Velocità** che permette di fermarsi entro lo spazio visibile e libero.
4. **Distanze** di almeno 2 secondi (più con maltempo), via di fuga.
5. **Se qualcosa non va, rallenta o fermati**.

> Un ultimo numero: a 50 km/h la tua energia è equivalente a una caduta da circa 10 m; a 90 km/h da 32 m. Ogni 10 km/h in meno riduce l’energia in modo significativo: da 90 a 80 km/h l’energia scende del **21%** ((80/90)² = 0,79).

La moto è un mezzo che regala libertà: la sicurezza è ciò che ti permette di **continuare a goderne**.` }
    ],
    exercises: [
      fill('Su 20 km, passare da 90 a 100 km/h fa risparmiare quanti secondi?', ['80'], '13 min 20 s − 12 min = 80 s.'),
      mc('Quale limite alcolemico è prudente per chi guida una moto?', ['Zero alcol', '0,5 g/l', '0,8 g/l', '1,5 g/l'], 0, 'Il limite legale non è una soglia di sicurezza.'),
      fill('Con 12 g di alcol, 70 kg e r = 0,7: tasso alcolemico stimato in g/l (due decimali)?', ['0,24', '0.24', '0,25', '0.25', '0,245', '0.245'], '12/(70×0,7) = 0,245.'),
      fill('Un microsonno di 4 secondi a 90 km/h: metri percorsi?', ['100'], '25 × 4.'),
      mc('Se ti senti stanco alla guida:', ['ti fermi in un luogo sicuro e riposi', 'accendi la musica forte', 'accelerare per arrivare prima', 'bevi un caffè e continui senza sosta'], 0, 'Solo il riposo risolve.'),
      mc('Per chiamare i soccorsi in Italia/Europa il numero unico di emergenza è:', ['112', '113 solo', '911', '555'], 0, 'Il 112 è il numero unico di emergenza europeo.'),
      mc('Davanti a un motociclista caduto che respira, il casco:', ['non va rimosso salvo reale necessità e con persone addestrate', 'va tolto subito, per farlo respirare meglio', 'va tolto tirando forte verso l’alto', 'va tolto sempre, a chiunque sia caduto'], 0, 'Rischio di aggravare un trauma al collo.'),
      mc('Se sospetti un trauma alla colonna:', ['non muovere la persona salvo pericolo immediato', 'falla sedere subito per controllare', 'falla camminare per verificare il dolore', 'trascinala via dalla strada tirandola per le braccia'], 0, 'Muoverla può peggiorare il danno.'),
      mc('Come usare un corso di guida sicura?', ['Per imparare in ambiente controllato, non per provare i limiti su strada', 'Per correre in strada con maggiore sicurezza', 'Per imparare a saltare le regole del codice', 'Non serve a chi ha già la patente da tempo'], 0, 'Il corso crea automatismi in sicurezza.'),
      mc('Un farmaco con avvertenza «può alterare la capacità di guidare»:', ['va letto e, nel dubbio, non si guida', 'si ignora, è una formula generica', 'si assume una dose doppia per sicurezza', 'si accompagna con alcol per limitare gli effetti'], 0, 'Chiedi al medico o al farmacista.'),
      fill('Da 90 a 80 km/h, di quanto scende l’energia cinetica (in %, intero)? 1 − (80/90)².', ['21'], '(80/90)² = 0,79.'),
      order('Ordina le prime azioni dopo una caduta', ['metti in sicurezza la zona', 'spegni il motore', 'chiama il 112', 'valuta coscienza e respiro', 'non muovere se sospetto trauma'], 'Sicurezza prima, poi soccorsi.')
    ],
    test: [
      fill('Su 50 km, passare da 90 a 100 km/h fa risparmiare quanti minuti e secondi? Rispondi in secondi.', ['200'], '33 min 20 s − 30 min = 3 min 20 s = 200 s.'),
      fill('Con alcol la reazione passa da 1,0 a 1,3 s a 90 km/h: metri in più, un decimale?', ['7,5', '7.5'], '0,3 × 25 = 7,5.'),
      mc('Quale azione NON è corretta dopo una caduta?', ['Togliere il casco al ferito senza motivo', 'Chiamare il 112 e indicare il luogo', 'Accendere le quattro frecce e segnalare', 'Non dare da bere né da mangiare al ferito'], 0, 'Il casco si lascia, salvo necessità.'),
      mc('Perché «solo un bicchiere» può essere un problema?', ['L’alcol altera riflessi e giudizio già a basse dosi e lo smaltimento è lento', 'Non è mai un problema, se ci si sente bene', 'Si smaltisce in fretta bevendo molto caffè', 'Dipende solo dal colore della bevanda scelta'], 0, 'Smaltimento ≈ 0,1–0,15 g/l all’ora.'),
      mc('Alle prime avvisaglie di rabbia o fretta:', ['rallenti, respiri e lasci andare', 'inseguire chi ti ha tagliato la strada', 'accelerare', 'sorpassare tutti'], 0, 'Non reagire e riduci il ritmo.'),
      mc('Cosa comunichi al 112?', ['luogo preciso, numero di feriti e condizioni, pericoli', 'solo il tuo nome e il numero di telefono', 'solo la marca e il modello della moto', 'nulla, basta lasciare il telefono acceso'], 0, 'Serve per inviare i soccorsi giusti.'),
      mc('Dopo una caduta, anche se ti senti bene:', ['ti fai controllare da un medico', 'riparti subito, per non perdere tempo', 'nascondi i sintomi agli altri soccorritori', 'ignori il dolore finché non peggiora'], 0, 'L’adrenalina maschera i danni.')
    ]
  });
})(window.ST = window.ST || {});
