/* Formula 1 — L7 Storia e cultura (6 lezioni) e L8 Squadre, business e carriere (6 lezioni): 12 lezioni approfondite.
   Cifre economiche e di personale: solo ordini di grandezza dichiarati. Niente classifiche o risultati recenti. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;

  /* ---------- L7 · Storia e cultura ---------- */
  C.addTopic({
    id: 'f1-origini-e-primo-mondiale', subject: 'f1', stage: 'L7', minutes: 14,
    title: 'Le origini: dai Gran Premi al mondiale 1950',
    summary: 'Dalle prime corse su strada al primo Gran Premio del 1906, le Frecce d’argento degli anni ’30, fino alla gara inaugurale del campionato mondiale del 13 maggio 1950.',
    objectives: ['Collocare nel tempo i primi Gran Premi, la formula dei 750 kg e il primo mondiale', 'Descrivere formato, punti, auto e piloti del 1950', 'Calcolare punteggi e intervalli di tempo storici'],
    pages: [
      { h: 'Prima del mondiale: le corse su strada', b: `Le gare fra automobili nascono pochi anni dopo l’invenzione dell’auto: le prime competizioni si disputano su **strade aperte** da una città all’altra, alla fine dell’Ottocento.

Il **Gran Premio** in senso moderno compare nel **1906**, con il Gran Premio di Francia disputato nei dintorni di **Le Mans**; lo vinse **Ferenc Szisz** su Renault. La gara durò **due giorni**, con più giri di un lungo circuito stradale.

Nel **1904** nasce l’organismo che governerà lo sport: l’**AIACR** (Association Internationale des Automobiles Clubs Reconnus), da cui discende l’attuale **FIA**, che assume questo nome nel dopoguerra.

> Dal 1906 al 1950 passano **44 anni**: il primo Gran Premio e il primo campionato mondiale sono lontani quasi mezzo secolo.

Per decenni non esiste un titolo mondiale: esistono molti **Gran Premi nazionali** (Francia, Italia, Germania, Belgio…) e campionati organizzati dai singoli paesi, con regole che cambiano spesso.` },
      { h: 'Le formule e gli anni ’30', b: `Una **formula** è l’insieme di limiti tecnici (cilindrata, peso, carburante) che le auto devono rispettare. Cambia con le epoche per contenere velocità e costi.

Nel **1934** entra in vigore una formula che limita il **peso massimo** delle vetture a **750 kg** (senza carburante, olio, acqua e gomme). Il limite doveva frenare la potenza; i costruttori risposero con motori sempre più potenti.

Nascono così le leggendarie **Frecce d’argento**: **Mercedes-Benz** e **Auto Union**, sostenute dal governo tedesco, dominano buona parte della seconda metà del decennio, contro le italiane **Alfa Romeo** e **Maserati**.

Le Frecce d’argento devono il soprannome alla carrozzeria lasciata in alluminio naturale. Le auto, con motore anteriore (Mercedes) e **posteriore** (Auto Union), raggiungono velocità molto alte per l’epoca.

> Dal 1934 al 1950 passano **16 anni**, di cui diversi segnati dalla Seconda guerra mondiale, che interrompe le corse.

Dopo la guerra, la ripresa avviene con le auto prebelliche, ancora competitive.` },
      { h: 'Verso la Formula 1', b: `Finita la guerra, tra il **1946 e il 1947** la FIA definisce una nuova formula internazionale di vertice, chiamata **Formula 1** (o Formula A). Due categorie di motori erano consentite:

- **4,5 litri** aspirati (4 500 cm³);
- **1,5 litri** sovralimentati con compressore (1 500 cm³).

Il rapporto fra le cilindrate è **3** (4 500 / 1 500): la sovralimentazione compensava la cilindrata minore.

In quegli anni dominano le **Alfa Romeo 158 e 159** (le «Alfette»), nate prima della guerra, con motore da 1,5 litri sovralimentato, potenza dell’ordine di **350 CV** nella versione iniziale. Le case francesi e italiane, tra cui **Ferrari** (le sue prime auto portano il nome del fondatore dal 1947) e **Maserati**, cominciano a farsi largo.

Mancavano ancora un **campionato** unico e un calendario condiviso: la decisione di istituire un titolo mondiale piloti arriva alla fine degli anni ’40, con la prima stagione nel 1950.` },
      { h: 'Il 13 maggio 1950: Silverstone', b: `Il **Campionato mondiale di Formula 1** inizia il **13 maggio 1950** con il **Gran Premio di Gran Bretagna** a **Silverstone**, un ex aeroporto militare trasformato in circuito. Vinse l’italiano **Giuseppe «Nino» Farina** su **Alfa Romeo**.

La stagione 1950 conta **sette gare**: sei in Europa (Gran Bretagna, Monaco, Svizzera, Belgio, Francia, Italia) più la **500 Miglia di Indianapolis**, inserita nel calendario ma disputata con regole americane e senza partecipazione europea per anni.

> La **500 Miglia di Indianapolis** valse per il mondiale dal **1950 al 1960**.

Il primo campione del mondo fu **Farina**, davanti al compagno **Juan Manuel Fangio**; l’Alfa Romeo schierava i «tre F»: **Farina, Fangio e Fagioli**. L’Alfa Romeo 158 vinse tutte le gare europee del 1950.

Il debutto di Silverstone ebbe la presenza del re Giorgio VI, un segnale dell’importanza dell’evento.` },
      { h: 'Formato e punti del 1950', b: `Il **sistema di punti** del 1950 premiava solo i primi cinque:

| Posizione | Punti |
|---|---|
| 1° | 8 |
| 2° | 6 |
| 3° | 4 |
| 4° | 3 |
| 5° | 2 |

> Un punto in più andava a chi faceva il **giro più veloce** in gara.

Totale dei punti per una gara (primi cinque): 8 + 6 + 4 + 3 + 2 = **23**. Ai fini del titolo contavano soltanto i **migliori quattro risultati** di ogni pilota.

Il formato di gara era semplice: **qualifiche** per stabilire la griglia, poi una gara di circa **300 km** (poco più di due ore), senza soste obbligatorie né rifornimenti programmati (le soste servivano a cambiare gomme o a riparare). I piloti correvano spesso con il **casco aperto**, occhiali e senza cinture di sicurezza moderne.

Le monoposto avevano motore **anteriore** e telai a traliccio di tubi.` },
      { h: 'Le auto e i piloti del 1950', b: `Le auto del 1950 sono molto diverse da quelle moderne.

- **Motore** anteriore, posizione di guida alta e verticale.
- **Telaio a traliccio** in tubi d’acciaio, carrozzeria sottile.
- **Gomme** strette e alte, a battistrada profondo.
- **Freni a tamburo**, meno efficaci di quelli a disco (diffusi nel decennio successivo).

I piloti erano spesso professionisti con alle spalle anni di corse su strada, e **molti avevano già superato i quaranta anni**. Fangio, nato nel 1911, aveva 38 anni all’inizio della stagione 1950.

La **Ferrari** debuttò nel mondiale nel 1950 e ottenne la **prima vittoria** in una gara iridata al **Gran Premio di Gran Bretagna del 1951** con **José Froilán González**, che interruppe la serie dell’Alfa Romeo.

> Dal debutto della Ferrari (1950) alla prima vittoria (1951) passa **un anno**.

La Ferrari è l’unica squadra presente in **tutte** le stagioni del mondiale, dal 1950 a oggi.` },
      { h: 'Dal 1950 al 1954: nuovi protagonisti', b: `Fangio vince il suo primo titolo nel **1951** su Alfa Romeo. Dopo il ritiro dell’Alfa Romeo dalle corse alla fine del 1951, il campionato del **1952 e 1953** fu corso con le regole della **Formula 2** (motori da 2 litri) per mancanza di auto di Formula 1: ne approfittò **Alberto Ascari** su **Ferrari**, campione nel 1952 e nel 1953.

Dal **1954** torna la Formula 1 con una nuova regola: motori da **2,5 litri** aspirati (2 500 cm³), valida fino al 1960.

Il ritorno nel 1954 della **Mercedes-Benz** con la **W196** (anche nella versione a ruote carenate) cambia le gerarchie: Fangio vince il titolo nel 1954 e nel 1955.

Il **titolo per i costruttori** viene istituito solo nel **1958**, otto anni dopo il campionato piloti: il primo andò alla **Vanwall**.

Le tappe sono quindi: 1906 primo Gran Premio, 1934 formula dei 750 kg, 1950 primo mondiale, 1958 primo titolo costruttori.` },
      { h: 'Che cosa ci insegna questa epoca', b: `Il 1950 non è l’inizio della storia dell’auto da corsa, ma l’inizio di una **struttura stabile**: un calendario di gare, un punteggio unico e un titolo.

Alcune lezioni dalle origini.

- **Le regole cambiano la tecnica**: le formule (750 kg, 1,5 L sovralimentati, 2,5 L) hanno guidato l’evoluzione dei motori.
- **Le squadre sono diverse da oggi**: non esiste ancora un «sistema» commerciale come quello odierno; molti costruttori erano case automobilistiche, con piloti spesso pagati poco.
- **Il rischio era altissimo** (lo vedremo nelle lezioni dedicate alla sicurezza).
- **La continuità** è sorprendente: Ferrari, Alfa Romeo, Maserati e Mercedes erano già protagoniste.

> Calcolo di sintesi: dalla nascita dell’AIACR (1904) al primo mondiale (1950) sono passati **46 anni**; dal 1950 a oggi più di **settantacinque**.

Per orientarti nelle prossime lezioni, tieni a mente le date chiave come un **filo del tempo**.` }
    ],
    exercises: [
      mc('Quale corsa è considerata il primo Gran Premio in senso moderno?', ['Il Gran Premio di Francia del 1906', 'La gara di Silverstone del 1950', 'La Targa Florio del 1950', 'Il Gran Premio di Monaco del 1929'], 0, 'Il primo Gran Premio fu quello di Francia del 1906, vinto da Ferenc Szisz su Renault.'),
      mc('Quando e dove si disputò la prima gara del campionato mondiale di F1?', ['13 maggio 1950, Silverstone', '1° gennaio 1950, Monza', '21 maggio 1950, Monaco', '3 settembre 1950, Indianapolis'], 0, 'La stagione inaugurale iniziò a Silverstone con il GP di Gran Bretagna.'),
      fill('Nel 1950 la vittoria dava 8 punti, il 2° posto 6 e il 3° posto 4. Quanti punti valgono insieme i primi tre?', ['18'], '8 + 6 + 4 = 18.'),
      mc('Chi fu il primo campione del mondo di Formula 1 (1950)?', ['Giuseppe Farina (Alfa Romeo)', 'Juan Manuel Fangio (Mercedes)', 'Alberto Ascari (Ferrari)', 'Stirling Moss (Cooper)'], 0, 'Farina vinse il titolo 1950 con l’Alfa Romeo.'),
      fill('La formula del 1950 ammetteva motori da 4,5 litri aspirati. Quanti cm³ sono 4,5 litri?', ['4500', '4.500', '4 500'], '1 litro = 1 000 cm³, quindi 4,5 litri = 4 500 cm³.'),
      mc('Per quali anni la 500 Miglia di Indianapolis valse per il mondiale?', ['Dal 1950 al 1960', 'Solo nel 1950', 'Dal 1960 al 1970', 'Dal 1990 a oggi'], 0, 'Fu inserita nel calendario iridato per undici stagioni.'),
      fill('Quanti anni passano fra il primo Gran Premio (1906) e il primo mondiale (1950)?', ['44'], '1950 − 1906 = 44.'),
      mc('Che cosa limitava la formula del 1934?', ['Il peso massimo a 750 kg (senza carburante, olio, acqua e gomme)', 'La cilindrata a 1 000 cm³', 'La larghezza della pista', 'Il numero di giri dei motori'], 0, 'La formula dei 750 kg segnò il periodo delle Frecce d’argento.'),
      mc('Chi ottenne la prima vittoria Ferrari in una gara iridata (1951)?', ['José Froilán González a Silverstone', 'Fangio a Monaco', 'Farina a Monza', 'Ascari a Spa'], 0, 'Il successo di González a Silverstone interruppe la serie dell’Alfa Romeo.'),
      fill('Quanti cm³ ha un motore da 2,5 litri (formula 1954–1960)?', ['2500', '2.500', '2 500'], '2,5 × 1 000 = 2 500 cm³.'),
      mc('Quale organismo nasce nel 1904 e da cui discende la FIA?', ['L’AIACR', 'La FOM', 'La FOCA', 'Il CIK'], 0, 'L’Association Internationale des Automobiles Clubs Reconnus fu il predecessore della FIA.'),
      order('Ordina cronologicamente', ['1906 primo Gran Premio', '1934 formula dei 750 kg', '1950 primo mondiale', '1958 primo titolo costruttori'], 'Le tappe vanno dal 1906 al 1958.')
    ],
    test: [
      fill('Dalla fondazione dell’AIACR (1904) al primo mondiale (1950) quanti anni passano?', ['46'], '1950 − 1904 = 46.'),
      fill('Nel 1950 i primi cinque ricevevano 8, 6, 4, 3 e 2 punti. Quanti punti in totale?', ['23'], '8 + 6 + 4 + 3 + 2 = 23.'),
      mc('Nel 1950 per il titolo contavano:', ['Solo i migliori quattro risultati', 'Tutti i risultati', 'Solo la prima gara', 'Solo le gare europee'], 0, 'Era una regola di scarto: si sommavano i migliori quattro piazzamenti.'),
      mc('Che cosa significa motore sovralimentato?', ['Alimentato con aria compressa da compressore o turbina', 'Alimentato a gasolio', 'Con cilindrata doppia', 'Con due alberi motore'], 0, 'La sovralimentazione aumenta la massa d’aria nei cilindri e quindi la potenza.'),
      mc('Quali squadre tedesche dominarono la seconda metà degli anni ’30?', ['Mercedes-Benz e Auto Union', 'Ferrari e Maserati', 'Alfa Romeo e Bugatti', 'Opel e BMW'], 0, 'Le Frecce d’argento furono Mercedes-Benz e Auto Union.'),
      mc('Con quale squadra Fangio vinse il primo titolo (1951)?', ['Alfa Romeo', 'Ferrari', 'Cooper', 'Lotus'], 0, 'Il primo dei suoi cinque titoli arrivò con l’Alfa Romeo.'),
      mc('In quale anno fu istituito il campionato costruttori?', ['1958', '1950', '1966', '1975'], 0, 'Il primo titolo costruttori andò alla Vanwall.'),
      mc('Quale caratteristica aveva la maggior parte delle auto del 1950?', ['Motore anteriore e freni a tamburo', 'Motore posteriore e freni a disco in carbonio', 'Ali anteriori e posteriori regolabili', 'Trazione integrale'], 0, 'Le monoposto erano ancora tecnicamente semplici e con motore davanti al pilota.')
    ]
  });

  C.addTopic({
    id: 'f1-anni-cinquanta-sessanta', subject: 'f1', stage: 'L7', minutes: 14,
    title: 'Anni ’50–’60: Fangio, Moss, Clark e il motore posteriore',
    summary: 'Gli eroi dell’epoca (Fangio, Moss, Hawthorn, Brabham, Clark, i due Hill), la rivoluzione del motore posteriore e del monoscocca, e una sicurezza quasi inesistente.',
    objectives: ['Ricordare i campioni e i titoli principali dei decenni ’50 e ’60', 'Spiegare perché il motore posteriore e il monoscocca cambiarono la F1', 'Calcolare percentuali di vittoria e margini di punti'],
    prereq: ['f1-origini-e-primo-mondiale'],
    pages: [
      { h: 'Fangio e i suoi cinque titoli', b: `**Juan Manuel Fangio** (Argentina, 1911–1995) vinse **cinque** titoli mondiali, un record rimasto imbattuto fino al 2002:

| Anno | Squadra |
|---|---|
| 1951 | Alfa Romeo |
| 1954 | Maserati e Mercedes |
| 1955 | Mercedes |
| 1956 | Ferrari |
| 1957 | Maserati |

Vinse **24 gare** su **51** Gran Premi disputati: una percentuale di vittorie del **47,1%** (24 / 51), ancora oggi fra le più alte di sempre.

> Nel 1957 era campione a **46 anni**, il più anziano della storia.

Cambiava squadra di frequente e vinceva con auto diverse: si diceva che sapesse guidare al limite **senza esagerare** con la meccanica. La sua carriera si chiuse nel 1958.

Il suo stile, la sua serietà e il rispetto degli avversari ne fanno una figura di riferimento della storia dello sport.` },
      { h: 'Moss e Hawthorn: il 1958', b: `**Stirling Moss** (Gran Bretagna) è considerato uno dei migliori piloti a non aver mai vinto il titolo: arrivò **secondo** nel mondiale quattro volte di fila, dal **1955 al 1958**. Vinse **16** Gran Premi.

Il campionato **1958** fu deciso da **un solo punto**: il titolo andò a **Mike Hawthorn** (Ferrari) con **un punto** di vantaggio su Moss (Vanwall). Un gesto di sportività di Moss — che difese Hawthorn davanti ai commissari dopo un episodio in gara — è ricordato ancora oggi.

Hawthorn, primo britannico campione, si ritirò a fine stagione e morì in un incidente stradale nel **gennaio 1959**, a soli 29 anni.

> Il margine del 1958 è di **1 punto**: lo stesso distacco che, nel 1976, deciderà il titolo Hunt-Lauda.

Nel 1958 la **Vanwall** vinse anche il primo **titolo costruttori**.

Il periodo è segnato da una dura mortalità: molti protagonisti persero la vita in corsa. Li ricordiamo con rispetto: la loro eredità sono le regole di sicurezza che seguiranno.` },
      { h: 'La rivoluzione del motore posteriore', b: `Nei primi anni ’50 tutte le monoposto hanno il motore **davanti** al pilota. La **Cooper**, piccolo costruttore britannico, sposta il motore **dietro**: il baricentro si abbassa, la vettura è più compatta e più leggera, l’avantreno più sensibile.

Il momento di svolta è il **gennaio 1958**: **Stirling Moss**, su una Cooper-Climax del team privato di **Rob Walker**, vince il **Gran Premio d’Argentina**, la prima vittoria in F1 per un’auto a motore posteriore. Pochi mesi dopo vinse anche a Monaco **Maurice Trintignant**, su Cooper.

> Cooper vinse il mondiale piloti nel **1959** e nel **1960** con **Jack Brabham**, e il titolo costruttori in entrambi gli anni.

La resistenza dei costruttori tradizionali fu lunga: **Ferrari** passò al motore posteriore nel 1961. L’ultima vittoria di un’auto a motore anteriore in F1 è ricordata nel **Gran Premio d’Italia del 1960** (a Monza, con le squadre britanniche assenti).

Dal 1961 tutte le auto vincenti saranno a motore posteriore.` },
      { h: 'Formula 1,5 litri, Lotus e monoscocca', b: `Dal **1961 al 1965** la cilindrata massima scende a **1,5 litri** (1 500 cm³). I costruttori britannici, privi dei grandi motori, hanno il loro momento: **Lotus**, **Cooper**, **BRM**.

**Colin Chapman**, fondatore di Lotus, presenta nel **1962** la **Lotus 25**: il primo **monoscocca** in F1. Invece del telaio a traliccio tubolare, la scocca è un guscio in lamiera di alluminio che contiene il pilota ed è molto più **rigido** e leggero.

> Il principio, evoluto, vale ancora oggi: il **monoscocca in fibra di carbonio** è la «cellula di sopravvivenza» del pilota.

Nel **1966** la formula torna a **3,0 litri**. Nel **1967** debutta il **Ford-Cosworth DFV**, un V8 da 3 litri, a Zandvoort (Olanda): la **Lotus 49** di **Jim Clark** vince subito. Il DFV resterà in uso fino al **1985** con **155 vittorie** in gara.

> Cosworth rese il motore **accessibile ai piccoli team**, che potevano comprarlo invece di costruirlo.` },
      { h: 'Jim Clark', b: `**Jim Clark** (Scozia, 1936–1968) guidò per Lotus per tutta la carriera e vinse due titoli: **1963** e **1965**.

Nel **1963** vinse **7** delle **10** gare del campionato, cioè il **70%**: un dominio allora senza precedenti. Nel **1965** vinse il titolo e, nello stesso anno, la **500 Miglia di Indianapolis**: un evento unico, perché segnava il successo di un’auto a motore posteriore nella classica americana.

Nella carriera in F1 vinse **25** Gran Premi in **72** disputati: una percentuale del **34,7%**.

Morì il **7 aprile 1968** a Hockenheim, durante una gara di Formula 2, a soli 32 anni. Il mondo delle corse ne fu sconvolto.

Aveva una grande sensibilità di guida e uno stile fluido e preciso: lo si ricorda come uno dei piloti più completi di sempre.

> Clark: 25 vittorie su 72 gare = **34,7%**. Fangio: 24 su 51 = **47,1%**. Le differenze di epoca (meno gare per stagione) vanno considerate nei confronti.` },
      { h: 'Gli Hill e gli altri campioni', b: `Gli anni ’60 vedono molti campioni.

- **Phil Hill** (USA): nel **1961** primo americano campione, con la **Ferrari**. Il titolo fu deciso dopo l’incidente di Monza in cui perse la vita **Wolfgang von Trips**, suo compagno e rivale.
- **Graham Hill** (GB): campione nel **1962** (BRM) e nel **1968** (Lotus). È l’unico a vincere la **Tripla Corona**: Monaco (5 volte), 500 Miglia di Indianapolis (1966) e 24 Ore di Le Mans (1972).
- **Jack Brabham** (Australia): campione nel **1959, 1960 e 1966**. Nel 1966 vinse con un’auto che portava il **proprio nome**: nessun altro pilota ci è riuscito.
- **John Surtees** (GB): campione nel **1964** con Ferrari, unico a vincere titoli mondiali sia in moto sia in F1.
- **Denny Hulme** (Nuova Zelanda): campione nel **1967**.
- **Jackie Stewart** (Scozia): campione nel **1969** (Matra), poi 1971 e 1973 con Tyrrell.

> Brabham: 3 titoli (1959, 1960, 1966). Graham Hill: 2 titoli (1962, 1968).` },
      { h: 'La sicurezza assente', b: `Dobbiamo guardare agli anni ’50 e ’60 con rispetto e con onestà: **la sicurezza era quasi inesistente**.

- Il pilota correva con **casco aperto**, spesso un semplice berretto rigido, occhiali, e **senza cinture**: l’idea era che essere sbalzati fuori fosse più sicuro che restare nell’auto.
- I serbatoi erano di carburante sfuso, spesso accanto al pilota: il **fuoco** era una minaccia concreta.
- I circuiti erano **stradali**, senza vie di fuga: **Spa-Francorchamps** misurava circa **14 km**, il Nürburgring più di **20 km**, con muri, alberi e case a pochi metri dalla pista.
- Non c’erano **commissari** addestrati né soccorso medico organizzato come oggi.

> Su un circuito di 14 km, un incidente poteva restare fuori vista per minuti.

Molti piloti accettavano il rischio come parte del mestiere, e i funerali erano frequenti. Il cambiamento verrà con **Jackie Stewart** e con i medici e dirigenti che lo sostennero, dalla fine degli anni ’60.` },
      { h: 'Come leggere questi anni', b: `Questa epoca costruisce le basi della F1 moderna.

- **Tecnica**: dal motore anteriore al motore posteriore, dal telaio a traliccio al monoscocca, dal motore costruito in casa al motore acquistabile (Cosworth DFV, 1967).
- **Gare**: calendari di 7–11 gare l’anno, circuiti di tipo molto vario.
- **Sport**: nascono rivalità ancora raccontate (Moss-Hawthorn, Clark-Hill).
- **Numeri**: Fangio 5 titoli (24/51 = 47,1% di vittorie), Clark 2 titoli (25/72 = 34,7%), Brabham 3 titoli.

> Fangio aveva 46 anni nel 1957 (nato nel 1911). Clark ne aveva 32 alla sua scomparsa (nato nel 1936, morto nel 1968).

Nei decenni successivi vedremo come l’aerodinamica, con le **ali** comparse nel **1968**, e poi con l’effetto suolo, cambierà tutto di nuovo.` }
    ],
    exercises: [
      mc('Quanti titoli mondiali vinse Fangio?', ['5', '3', '7', '2'], 0, 'Vinse nel 1951, 1954, 1955, 1956 e 1957.'),
      fill('Fangio vinse 24 gare su 51 disputate. Quale percentuale (arrotondata all’intero)?', ['47', '47,1', '47.1'], '24 / 51 = 0,4706.'),
      mc('Quale caratteristica distingue Stirling Moss nella storia?', ['Fu quattro volte secondo ma non vinse mai il titolo', 'Vinse sette titoli', 'Vinse il titolo 1958', 'Non vinse mai un Gran Premio'], 0, 'Fu vicecampione dal 1955 al 1958, con 16 vittorie.'),
      mc('Quale fu la prima vittoria di un’auto a motore posteriore in F1?', ['Moss con la Cooper-Climax, Argentina 1958', 'Clark con la Lotus, Monza 1963', 'Brabham con la Brabham, 1966', 'Hill con la BRM, 1962'], 0, 'La Cooper di Rob Walker aprì la strada al motore posteriore.'),
      fill('Nel 1963 Jim Clark vinse 7 gare su 10. Quale percentuale?', ['70', '70%'], '7 / 10 = 0,70.'),
      mc('Che cosa introdusse la Lotus 25 (1962)?', ['Il primo monoscocca in F1', 'Il motore posteriore', 'L’ala posteriore', 'Il cambio semiautomatico'], 0, 'Il monoscocca sostituì il telaio a traliccio tubolare.'),
      mc('Chi vinse il mondiale 1966 con un’auto che portava il proprio nome?', ['Jack Brabham', 'Graham Hill', 'John Surtees', 'Denny Hulme'], 0, 'Brabham è l’unico pilota ad averlo fatto.'),
      fill('Nel 1958 il titolo fu deciso da Hawthorn con quanti punti di vantaggio su Moss?', ['1', 'uno'], 'Il margine fu di un solo punto.'),
      mc('Dove e quando debuttò il motore Ford-Cosworth DFV?', ['Zandvoort 1967, su Lotus 49 (vinse Clark)', 'Monza 1960, su Ferrari', 'Silverstone 1950, su Alfa Romeo', 'Spa 1958, su Vanwall'], 0, 'Il DFV vinse alla prima gara.'),
      mc('Qual era la cilindrata massima della formula 1961–1965?', ['1,5 litri', '3,0 litri', '4,5 litri', '2,5 litri'], 0, 'La cilindrata fu ridotta a 1 500 cm³.'),
      fill('Fangio vinse il suo ultimo titolo nel 1957, essendo nato nel 1911. Quanti anni aveva?', ['46'], '1957 − 1911 = 46 (compiuti a giugno).'),
      order('Ordina cronologicamente', ['1950 primo mondiale', '1958 la Cooper vince con motore posteriore', '1962 Lotus 25 monoscocca', '1967 debutto del Cosworth DFV'], 'Dal primo mondiale al motore che dominò gli anni successivi.')
    ],
    test: [
      mc('Phil Hill nel 1961 fu il primo campione di quale nazionalità?', ['Americana', 'Italiana', 'Australiana', 'Argentina'], 0, 'Vinse il titolo con la Ferrari.'),
      fill('Clark vinse 25 gare su 72. Percentuale (intera approssimata)?', ['35', '34,7', '34.7', '34'], '25 / 72 = 0,347.'),
      mc('Che cosa significa Tripla Corona, ottenuta da Graham Hill?', ['Monaco, Indianapolis 500 e Le Mans', 'Tre titoli consecutivi', 'Tre pole in una gara', 'Tre secondi posti'], 0, 'Monaco, 500 Miglia di Indianapolis e 24 Ore di Le Mans.'),
      mc('Quale squadra vinse il primo titolo costruttori (1958)?', ['Vanwall', 'Ferrari', 'Cooper', 'Lotus'], 0, 'Fu la Vanwall, davanti a Cooper e Ferrari.'),
      fill('Brabham vinse titoli nel 1959, 1960 e 1966: quanti in tutto?', ['3'], 'Tre titoli.'),
      mc('Perché i circuiti stradali dell’epoca erano pericolosi?', ['Muri, alberi e case vicino alla pista, senza vie di fuga né soccorsi rapidi', 'Perché erano troppo corti', 'Perché le gomme erano troppo larghe', 'Perché c’erano molti sorpassi'], 0, 'La struttura stradale non lasciava margini di sicurezza.'),
      mc('Il titolo piloti 1958 fu deciso per quale distacco?', ['1 punto', '10 punti', '5 punti', 'Per spareggio'], 0, 'Hawthorn batté Moss di un punto.'),
      mc('Quando tornò la cilindrata massima di 3 litri dopo la formula 1,5 litri?', ['1966', '1950', '1975', '1986'], 0, 'Dal 1966 la formula fu di 3 litri.')
    ]
  });

  C.addTopic({
    id: 'f1-anni-settanta-ottanta', subject: 'f1', stage: 'L7', minutes: 14,
    title: 'Anni ’70–’80: Lauda, Hunt, effetto suolo, turbo, Senna e Prost',
    summary: 'Dalla sfida Lauda-Hunt del 1976 alle wing cars, dall’era turbo alla rivalità fra Senna e Prost: tecnica, personaggi e numeri dei due decenni.',
    objectives: ['Ricostruire il 1976 e la rivalità Lauda-Hunt', 'Spiegare effetto suolo e motori turbo e i divieti successivi', 'Calcolare margini di punti e percentuali di vittoria'],
    prereq: ['f1-anni-cinquanta-sessanta'],
    pages: [
      { h: 'Gli anni ’70: Cosworth e nuovi campioni', b: `Negli anni ’70 il motore **Ford-Cosworth DFV** (3,0 litri, V8) permette a molti piccoli team britannici di essere competitivi. La F1 diventa un mondo di **assemblatori** (Lotus, McLaren, Tyrrell, Brabham) accanto alla **Ferrari**, che costruisce tutto in casa.

I campioni del decennio:

- **Jackie Stewart**: titoli nel 1969, 1971 e 1973;
- **Jochen Rindt**: campione **postumo** nel **1970** (perse la vita durante le prove a Monza, il 5 settembre; fu l’unico titolo assegnato a un pilota scomparso);
- **Emerson Fittipaldi** (Brasile): 1972 e 1974;
- **Niki Lauda** (Austria): 1975, 1977 (Ferrari);
- **James Hunt** (GB): 1976 (McLaren);
- **Mario Andretti** (USA): 1978 (Lotus);
- **Jody Scheckter** (Sudafrica): 1979 (Ferrari).

> Dopo Scheckter (1979), un pilota Ferrari non vince il titolo fino a **Schumacher nel 2000**: **21 anni** dopo.

Nel decennio nascono anche sponsor commerciali di rilievo: il tabacco colora le auto (livree rosse-bianche, nero-oro).` },
      { h: 'Il 1976: Lauda contro Hunt', b: `Il **1976** è una delle stagioni più raccontate. **Niki Lauda** (Ferrari) è campione in carica e domina all’inizio.

Il **1° agosto 1976**, al **Nürburgring**, Lauda ha un grave incidente con la sua Ferrari: l’auto prende fuoco e Lauda subisce ustioni e danni ai polmoni. Viene soccorso da altri piloti. Torna a guidare a **Monza** il **12 settembre**, dopo soli **42 giorni**.

> Dal 1° agosto al 12 settembre: 31 giorni fino al 1° settembre + 11 = **42 giorni**.

La stagione si decide all’ultima gara, in Giappone, al **Fuji**, sotto una pioggia battente. Lauda, giudicando il rischio eccessivo, si **ritira** dopo due giri. **James Hunt** (McLaren) arriva terzo e conquista il titolo con **69 punti** contro i **68** di Lauda: **un solo punto** di vantaggio.

Lauda tornò campione nel **1977** con la Ferrari e nel **1984** con la McLaren. La loro rivalità, che era anche amicizia, è raccontata nel film *Rush* (2013).` },
      { h: 'Le wing cars e l’effetto suolo', b: `Nel **1977** la **Lotus 78** introduce una novità: la forma del fondo e delle pance laterali crea un **tunnel Venturi** sotto l’auto. L’aria accelerata sotto la vettura abbassa la pressione e «**aspira**» l’auto verso l’asfalto: è l’**effetto suolo**.

Con la **Lotus 79** (1978) l’effetto è perfezionato: **Mario Andretti** vince il titolo, davanti al compagno Ronnie Peterson, scomparso in settembre dopo un incidente alla partenza del GP d’Italia a Monza.

Per sigillare l’aria sotto l’auto si usano le **minigonne** (skirts), strisce mobili ai lati che toccano il suolo. Le curve diventano molto più veloci, ma i carichi sul pilota aumentano e un guasto dell’aerodinamica può far perdere improvvisamente aderenza.

> Nel 1978 la **Brabham BT46B** con una grande ventola posteriore (la «fan car») vinse ad Anderstorp, in Svezia, con Lauda, poi fu ritirata: il suo uso fu giudicato troppo controverso.

Dal **1983** il regolamento impone un **fondo piatto**: l’effetto suolo con tunnel è vietato per ridurre le velocità in curva. L’idea tornerà nel 2022.` },
      { h: 'L’era turbo', b: `Il regolamento consentiva anche motori sovralimentati da **1,5 litri**, ma per anni nessuno li usava. Nel **1977** la **Renault** ci prova: la **RS01** debutta al GP di Gran Bretagna con **Jean-Pierre Jabouille**. All’inizio affidabilità scarsa («la teiera gialla»), ma nel **1979** Jabouille vince il **GP di Francia a Digione**: prima vittoria di un turbo.

Il turbo da 1,5 litri sviluppa potenze enormi: nelle versioni da qualifica si superano i **1 000 CV**, molto più dei circa 500 CV dei motori aspirati di allora.

Nel **1983 Nelson Piquet** (Brabham-BMW) è il primo campione con motore turbo.

Il regolamento tenta di limitare la potenza:

- **1984**: niente rifornimento in gara, con limite di carburante;
- **1988**: pressione di sovralimentazione ridotta a **2,5 bar** e carburante limitato a **150 litri**;
- **1989**: turbo vietati, ritorno ai motori aspirati da **3,5 litri**.

> Il turbo fu abbandonato perché le potenze erano troppo alte e costose, e tornò, in versione ibrida, nel 2014.` },
      { h: 'Senna e Prost', b: `**Ayrton Senna** (Brasile) e **Alain Prost** (Francia) furono compagni alla **McLaren-Honda** nel **1988** e nel **1989**.

Nel **1988** la **McLaren MP4/4** vinse **15** delle **16** gare (tutte tranne Monza): una percentuale del **93,75%**. Il titolo andò a Senna, con **90 punti** contro **87** di Prost (nel 1988 contavano solo i migliori 11 risultati).

Nel **1989** i due si scontrano a **Suzuka**: dopo una collisione e la successiva squalifica di Senna, il titolo va a Prost. Nel **1990**, sempre a Suzuka e con Prost sulla Ferrari, un contatto alla prima curva assegna il titolo a Senna.

Titoli e vittorie:

| Pilota | Titoli | Vittorie |
|---|---|---|
| Prost | 4 (1985, 1986, 1989, 1993) | 51 |
| Senna | 3 (1988, 1990, 1991) | 41 |

La rivalità fu intensa, a tratti dura: ma entrambi rimasero a lungo punti di riferimento di intelligenza e talento. Dopo la morte di Senna nel 1994, Prost partecipò ai funerali.` },
      { h: 'Altri campioni degli anni ’80', b: `Il decennio fu ricco di vincitori diversi.

- **Alan Jones** (Australia): campione nel **1980** con la **Williams**.
- **Nelson Piquet** (Brasile): **1981** e **1983** con Brabham, **1987** con Williams: **tre titoli**.
- **Keke Rosberg** (Finlandia): campione nel **1982** con **una sola vittoria** in stagione, la più bassa fra i campioni. Il campionato 1982 ebbe **11 vincitori diversi** in 16 gare.
- **Niki Lauda**: terzo titolo nel **1984** con McLaren, per **mezzo punto** (72 contro 71,5) su Prost: a Monaco la gara fu interrotta e i punti dimezzati.
- **Alain Prost**: 1985 e 1986 con McLaren.

Anche i **team**: nel decennio **Williams** e **McLaren** (con motori Honda, Porsche, BMW, Renault) dominano la scena, mentre la **Ferrari** vive stagioni difficili dopo il 1979.

> Margini piccoli: 1 punto (1976), 0,5 punti (1984). Un solo errore o un risultato ridotto può cambiare un titolo.

Il **sistema di punti** nel periodo era 9-6-4-3-2-1 per i primi sei (1961–1990).` },
      { h: 'Il potere e il denaro: FISA e FOCA', b: `Dietro la pista, gli anni ’70 e ’80 sono anni di **battaglie politiche**.

**Bernie Ecclestone**, già proprietario del team Brabham, guida la **FOCA** (Formula One Constructors’ Association), l’associazione dei team britannici, che trattava con organizzatori e televisioni. La **FISA** (emanazione sportiva della FIA), con presidente **Jean-Marie Balestre**, rivendicava invece il potere regolamentare.

Lo scontro sfociò nel conflitto **FISA-FOCA** del 1980–81, con minacce di campionati separati. Si risolse nel **1981** con il primo **Concorde Agreement**, il documento che regola i rapporti commerciali tra FIA, squadre e gestore dei diritti.

> L’accordo prese il nome da **Place de la Concorde** a Parigi, sede della FIA.

Il risultato fu una gestione unificata dei **diritti televisivi** e un grande sviluppo commerciale della F1 come spettacolo, sotto la guida di Ecclestone.

Nel decennio nascono i primi grandi contratti televisivi e la F1 diventa globale.` },
      { h: 'Numeri e sintesi', b: `Riassumiamo con alcuni calcoli.

- **Lauda**, Nürburgring → Monza: **42 giorni**.
- **Hunt vs Lauda 1976**: 69 − 68 = **1 punto**.
- **McLaren 1988**: 15 / 16 = **93,75%** di vittorie.
- **Senna vs Prost 1988**: 90 − 87 = **3 punti** (con scarti).
- **Scheckter → Schumacher**: 2000 − 1979 = **21 anni** senza titoli piloti Ferrari.
- **Prost**: 51 vittorie; **Senna**: 41 vittorie.

Date chiave:

| Anno | Evento |
|---|---|
| 1976 | Hunt campione per 1 punto |
| 1977 | Lotus 78 e debutto del turbo Renault |
| 1979 | Prima vittoria di un’auto turbo |
| 1983 | Fondo piatto obbligatorio; Piquet primo campione turbo |
| 1988 | McLaren-Honda 15 vittorie su 16 |
| 1989 | Turbo vietati |

> Il turbo iniziale e il successivo divieto mostrano il ciclo tipico: la tecnica spinge, il regolamento frena, poi arriva un’altra idea.` }
    ],
    exercises: [
      fill('Dal 1° agosto al 12 settembre 1976 (Nürburgring → Monza) quanti giorni passano?', ['42'], 'Dal 1° agosto al 1° settembre sono 31 giorni, più 11 fino al 12 settembre: 42.'),
      mc('Con quale margine Hunt vinse il titolo 1976 su Lauda?', ['1 punto (69 contro 68)', '10 punti', '0,5 punti', '5 punti'], 0, 'Il titolo si decise all’ultima gara, al Fuji.'),
      mc('Quale auto del 1977 introdusse l’effetto suolo con minigonne e tunnel?', ['Lotus 78', 'Brabham BT46B', 'Ferrari 312T', 'Renault RS01'], 0, 'La Lotus 78 aprì la stagione delle wing cars.'),
      mc('Chi ottenne la prima vittoria di un’auto turbo in F1 (1979)?', ['Jean-Pierre Jabouille (Renault, Digione)', 'Nelson Piquet (Brabham)', 'Niki Lauda (McLaren)', 'Keke Rosberg (Williams)'], 0, 'Fu al GP di Francia del 1979.'),
      fill('La McLaren MP4/4 vinse 15 gare su 16 nel 1988. Qual è la percentuale (intera approssimata)?', ['94', '93,75', '93.75', '93,8', '93.8'], '15 / 16 = 0,9375.'),
      mc('Che cosa caratterizzò il titolo 1982 di Keke Rosberg?', ['Una sola vittoria in stagione', 'Quindici vittorie', 'Nessun punto di scarto', 'Un titolo ottenuto a tavolino'], 0, 'Fu un titolo vinto con costanza di piazzamenti.'),
      fill('Dopo il titolo Ferrari di Scheckter (1979), il primo successivo fu di Schumacher nel 2000. Quanti anni dopo?', ['21'], '2000 − 1979 = 21.'),
      mc('Che cosa fu deciso per il 1989?', ['Divieto dei turbo e ritorno ai motori aspirati da 3,5 litri', 'Divieto di ogni motore a benzina', 'Fondo piatto obbligatorio', 'Obbligo di rifornimento'], 0, 'I turbo erano usciti dal regolamento a fine 1988.'),
      mc('Quanti titoli mondiali vinse Ayrton Senna?', ['3', '4', '2', '5'], 0, 'Nel 1988, 1990 e 1991.'),
      fill('Nel 1988 Senna chiuse con 90 punti validi e Prost con 87. Di quanti punti prevalse Senna?', ['3'], '90 − 87 = 3.'),
      mc('Perché dal 1983 si impose il fondo piatto?', ['Per ridurre le velocità in curva dell’effetto suolo', 'Per risparmiare carburante', 'Per aumentare i sorpassi', 'Per permettere il rifornimento'], 0, 'Le velocità in curva erano diventate troppo alte.'),
      order('Ordina cronologicamente', ['1976 Hunt campione', '1979 prima vittoria di un turbo', '1984 Lauda campione per mezzo punto', '1988 McLaren-Honda 15 vittorie su 16'], 'Dal 1976 al dominio McLaren-Honda del 1988.')
    ],
    test: [
      mc('Quanti titoli vinse Alain Prost?', ['4', '3', '5', '2'], 0, 'Nel 1985, 1986, 1989 e 1993.'),
      fill('Nelson Piquet fu campione nel 1981, 1983 e 1987: quanti titoli?', ['3'], 'Tre titoli.'),
      mc('Che cos’era la Brabham BT46B del 1978?', ['Un’auto con ventola posteriore per creare carico, ritirata dopo una gara', 'La prima auto turbo', 'La prima auto con ala anteriore', 'La prima auto monoscocca'], 0, 'Vinse una sola gara, in Svezia, con Lauda.'),
      mc('Quale titolo fu assegnato a un pilota scomparso durante la stagione?', ['Jochen Rindt, 1970', 'Jim Clark, 1965', 'Mike Hawthorn, 1958', 'Ronnie Peterson, 1978'], 0, 'Rindt morì a Monza e nessuno poté raggiungere i suoi punti.'),
      mc('Quale azienda debuttò nel 1977 con il motore turbo in F1?', ['Renault', 'Ferrari', 'Ford', 'Honda'], 0, 'La RS01 debuttò a Silverstone.'),
      fill('Il sistema 9-6-4-3-2-1 assegna quanti punti in totale ai primi sei?', ['25'], '9 + 6 + 4 + 3 + 2 + 1 = 25.'),
      mc('Chi fu campione nel 1980 con la Williams?', ['Alan Jones', 'Nelson Piquet', 'Keke Rosberg', 'Jody Scheckter'], 0, 'Jones vinse il titolo 1980.'),
      mc('Che cosa diede origine al primo Concorde Agreement?', ['Il conflitto FISA-FOCA', 'La morte di Rindt', 'L’arrivo del turbo', 'Il divieto delle minigonne'], 0, 'L’accordo fu firmato nel 1981.')
    ]
  });

  C.addTopic({
    id: 'f1-anni-novanta-duemila', subject: 'f1', stage: 'L7', minutes: 14,
    title: 'Anni ’90–2000: elettronica, Schumacher e Ferrari',
    summary: 'L’elettronica di bordo, il divieto del 1994, l’ascesa di Schumacher, il dominio Ferrari e i cambi di regolamento fino al 2009.',
    objectives: ['Descrivere gli aiuti elettronici e il loro divieto del 1994', 'Ricostruire la carriera di Schumacher fra Benetton e Ferrari', 'Collegare i cambi di regolamento a obiettivi precisi'],
    prereq: ['f1-anni-settanta-ottanta'],
    pages: [
      { h: 'L’elettronica entra in pista', b: `Negli anni ’90 l’**elettronica** diventa decisiva.

- **Cambio semiautomatico**: la **Ferrari 640** del **1989** (progetto di John Barnard) introduce le **leve al volante**; **Nigel Mansell** vince al debutto in Brasile.
- **Sospensioni attive**: la **Williams FW14B** del **1992** regola l’altezza e l’assetto con idraulica e sensori.
- **Controllo di trazione** e **ABS**: evitano di far pattinare le ruote.

Nel **1992 Mansell** vince il titolo con la Williams-Renault, con **9** vittorie su **16** gare (56,25%). Nel **1993 Prost**, ancora Williams, ottiene il suo quarto titolo e poi si ritira.

> Sensori, centraline e software facevano guidare «insieme al pilota»: i piloti quindi dovevano fare meno, ma i team spendevano molto in elettronica.

La FIA decide di intervenire: gli aiuti elettronici sarebbero stati vietati dal **1994**, per riportare il pilota al centro. Più avanti, nel **2008**, fu adottata una **centralina elettronica unica** per tutti i team.` },
      { h: 'Il 1994', b: `Il **1994** è un anno cruciale e doloroso.

- Aiuti elettronici **vietati** (sospensioni attive, controllo di trazione, ABS).
- **Rifornimento in gara** reintrodotto (restò in uso fino al 2009).
- Il weekend del **Gran Premio di San Marino a Imola** (30 aprile–1° maggio) segna la morte di **Roland Ratzenberger** (sabato) e di **Ayrton Senna** (domenica). Ricordiamo con rispetto entrambi; ne parleremo nella lezione sulla sicurezza.

**Michael Schumacher**, 25 anni, della **Benetton**, vince il titolo con **92 punti** contro i **91** di **Damon Hill** (Williams) nell'ultima gara, ad **Adelaide**, dopo un contatto fra i due: **un solo punto** di margine.

Nel **1995** Schumacher e la Benetton, con motori Renault, vincono ancora. Il motore da 3,5 litri viene sostituito dal **3,0 litri** in questo anno.

> 1994: 92 − 91 = **1 punto** di margine, come nel 1958 e nel 1976.` },
      { h: 'Schumacher alla Ferrari', b: `Nel **1996 Schumacher passa alla Ferrari**, che non vince il titolo piloti dal 1979. Alla guida sportiva c’è già **Jean Todt** (dal 1993); dalla Benetton arrivano poi **Ross Brawn** (direttore tecnico) e il progettista **Rory Byrne**, entrambi già suoi collaboratori.

I primi anni sono di crescita: sfiora il titolo nel 1997, nel 1998 e nel 1999 (battuto da Villeneuve e poi da Häkkinen, McLaren). Nel **2000**, al **GP del Giappone a Suzuka**, vince e conquista il titolo, il **primo di un pilota Ferrari dal 1979**.

> **2000–2004**: cinque titoli consecutivi, per un totale di **sette titoli** (1994, 1995 e cinque dal 2000 al 2004).

La Ferrari vince anche **sei titoli costruttori consecutivi** dal **1999 al 2004**.

Il segreto fu un **sistema**: squadra stabile, pilota collaborativo, test intensivi, affidabilità elevata e gomme Bridgestone sviluppate insieme alla squadra.

Schumacher ottenne **91 vittorie**: 19 con Benetton e 72 con Ferrari (19 + 72 = 91). Il suo record durò fino al 2020, quando fu superato da Hamilton.` },
      { h: 'Il dominio in numeri', b: `Il 2002 e il 2004 sono stagioni di superiorità enorme.

- **2002**: Schumacher vince **11** gare su **17** (64,7%) e sale sul podio in tutte e 17. Il titolo arriva con sei gare di anticipo, al Gran Premio di Francia.
- **2004**: vince **13** gare su **18** (72,2%).

La superiorità fece temere un calo di interesse del pubblico: troppi titoli decisi con largo anticipo. La FIA reagì con modifiche mirate.

- **2003**: nuovo sistema di punti **10-8-6-5-4-3-2-1** (ai primi otto), per dare più punti ai piazzamenti dal secondo all'ottavo posto e allungare la lotta per il titolo;
- **2003**: qualifiche modificate con un unico giro lanciato;
- **2005**: un solo treno di gomme per tutta la gara.

> Somma dei punti del nuovo sistema: 10 + 8 + 6 + 5 + 4 + 3 + 2 + 1 = **39**.

Con il vecchio sistema (10-6-4-3-2-1), il primo valeva 10 e il secondo 6; con il nuovo, il secondo valeva 8: la differenza fra primo e secondo scese da 4 a 2 punti.` },
      { h: 'I rivali: McLaren, Williams, Renault', b: `Non ci fu solo Schumacher.

- **Damon Hill** (Williams): campione nel **1996**.
- **Jacques Villeneuve** (Williams): campione nel **1997**.
- **Mika Häkkinen** (Finlandia, McLaren-Mercedes): campione nel **1998** e **1999**.
- **Fernando Alonso** (Spagna, Renault): campione nel **2005** e **2006**, interrompendo la serie Ferrari. Nel 2005 era il più giovane campione di sempre, a 24 anni.
- **Kimi Räikkönen** (Ferrari): campione 2007.

Le **squadre** si alternano: Williams dominante fra il 1992 e il 1997, McLaren fra 1998 e 2000, Ferrari fino al 2004, Renault nel 2005–06.

Anche il **2005** ebbe un episodio singolare: al **GP degli Stati Uniti a Indianapolis**, a causa di un problema di sicurezza delle gomme Michelin, le squadre che le usavano **non presero il via** dopo il giro di ricognizione. Gareggiarono solo **6 auto** (quelle con gomme Bridgestone).

> Il fatto portò a discussioni su regole di gomme e sulla responsabilità di fornitori e organizzatori.` },
      { h: 'Regolamenti in cambiamento', b: `Anni di continui cambi tecnici.

| Anno | Cambiamento |
|---|---|
| 1995 | Motori da 3,0 litri (V10 dominante) |
| 1998 | Auto più strette (da 2,0 a 1,8 m), gomme scanalate |
| 2003 | Nuovo sistema di punti |
| 2006 | Motori V8 da 2,4 litri al posto dei V10 |
| 2008 | Centralina elettronica unica (ECU standard) |
| 2009 | Gomme slick, KERS (recupero di energia) e ali ridisegnate |

Le **gomme scanalate** del 1998 riducevano l'aderenza per abbassare le velocità. Le **slick** (lisce) tornarono nel 2009.

> **KERS** (Kinetic Energy Recovery System): recupera l'energia in frenata e la restituisce con una spinta di circa 80 CV per circa 6,7 secondi a giro. Fu il germe dell'ibrido del 2014.

Nel **2009**, inoltre, la **Brawn GP**, nata dai resti della Honda, vince titoli piloti e costruttori nella sua prima e unica stagione con **Jenson Button**.` },
      { h: 'Il rifornimento in gara', b: `Dal **1994 al 2009** i rifornimenti in gara furono ammessi.

Effetti sulla strategia:

- Le soste diventano il centro della tattica: quante soste, quando, con quanto carburante.
- Il carburante a bordo è un **peso** variabile: una macchina più leggera è più veloce di alcuni decimi al giro, quindi la quantità caricata diventa una scelta tattica.
- Il **pit stop** diventa una prova di squadra: pochi secondi in cui 15–20 persone lavorano insieme.

Calcolo orientativo: ogni 10 kg di carburante costano circa **0,3 secondi al giro** (valore indicativo, varia con il circuito). Una sosta di 3 secondi più l'ingresso/uscita ai box vale ~20 secondi e si compensa con giri più veloci.

> Il rifornimento fu vietato dal **2010**, per contenere costi e rischi; da allora la strategia ruota attorno a gomme e posizione in pista.

Le soste di oggi (cambio gomme) durano circa **2 secondi**.` },
      { h: 'Numeri e sintesi', b: `Sintesi del periodo:

- **Mansell 1992**: 9 vittorie su 16 = 56,25%.
- **1994**: 92 − 91 = 1 punto di margine.
- **Schumacher**: 91 vittorie = 19 (Benetton) + 72 (Ferrari); 7 titoli.
- **2002**: 11/17 = 64,7%; **2004**: 13/18 = 72,2%.
- **Ferrari**: 6 titoli costruttori di fila (1999–2004).
- **Punti 2003**: 10-8-6-5-4-3-2-1 = 39.

Date chiave:

| Anno | Evento |
|---|---|
| 1989 | Cambio semiautomatico Ferrari |
| 1992 | Sospensioni attive Williams |
| 1994 | Aiuti elettronici vietati |
| 2000 | Schumacher campione con la Ferrari |
| 2005 | Alonso più giovane campione di allora |
| 2009 | KERS e gomme slick |

> Nel 2009 ritorna l'idea di recuperare energia; è il filo che porta all'era ibrida del 2014.` }
    ],
    exercises: [
      mc('Quale auto del 1992 usava le sospensioni attive e portò Mansell al titolo?', ['Williams FW14B', 'Ferrari F92A', 'McLaren MP4/7', 'Benetton B192'], 0, 'La Williams FW14B era dotata di sospensioni attive e controlli elettronici.'),
      fill('Mansell vinse 9 gare su 16 nel 1992. Percentuale (un decimale)?', ['56,3', '56.3', '56,25', '56.25', '56'], '9 / 16 = 0,5625.'),
      mc('Che cosa accadde ai sistemi elettronici di guida dal 1994?', ['Furono vietati', 'Furono resi obbligatori', 'Furono rimossi solo dalla Ferrari', 'Rimasero invariati'], 0, 'La FIA vietò sospensioni attive, controllo di trazione e simili.'),
      fill('Titolo 1994: Schumacher 92 punti, Hill 91. Margine?', ['1'], '92 − 91 = 1.'),
      fill('Schumacher vinse 19 gare con Benetton e 72 con Ferrari. Totale?', ['91'], '19 + 72 = 91.'),
      mc('Che cosa accadde nel 2000 a Suzuka?', ['Schumacher vinse il primo titolo Ferrari dal 1979', 'Prost si ritirò', 'Senna vinse', 'Alonso esordì'], 0, 'Il titolo Ferrari mancava dal 1979 (Scheckter).'),
      fill('Nel 2002 Schumacher vinse 11 gare su 17. Percentuale (intera approssimata)?', ['65', '64,7', '64.7'], '11 / 17 = 0,647.'),
      mc('Quale sistema di punti fu introdotto nel 2003?', ['10-8-6-5-4-3-2-1', '25-18-15-12-10-8-6-4-2-1', '9-6-4-3-2-1', '8-6-4-3-2'], 0, 'Fu esteso ai primi otto classificati.'),
      mc('Quante auto presero il via del GP degli Stati Uniti 2005?', ['6', '10', '20', '3'], 0, 'Solo le sei con gomme Bridgestone.'),
      mc('Quale motore sostituì i V10 da 3,0 litri nel 2006?', ['V8 da 2,4 litri', 'V6 turbo ibrido', 'V12', 'V8 da 3,5 litri'], 0, 'Dal 2006 si usarono V8.'),
      fill('La Ferrari vinse i titoli costruttori dal 1999 al 2004: quanti titoli consecutivi?', ['6'], '2004 − 1999 + 1 = 6.'),
      order('Ordina cronologicamente', ['1992 sospensioni attive', '1994 aiuti elettronici vietati', '2000 Schumacher campione con Ferrari', '2006 motori V8'], 'Dai primi anni ’90 all’inizio degli anni 2000.')
    ],
    test: [
      fill('Nel 2004 Schumacher vinse 13 gare su 18. Percentuale (intera approssimata)?', ['72', '72,2', '72.2'], '13 / 18 = 0,722.'),
      mc('Chi fu campione nel 1998 e nel 1999?', ['Mika Häkkinen', 'Damon Hill', 'Jacques Villeneuve', 'Fernando Alonso'], 0, 'Häkkinen vinse con la McLaren-Mercedes.'),
      mc('Chi fu campione nel 1997?', ['Jacques Villeneuve', 'Damon Hill', 'Michael Schumacher', 'Mika Häkkinen'], 0, 'Villeneuve vinse con la Williams.'),
      fill('Somma dei punti 10-8-6-5-4-3-2-1?', ['39'], '10 + 8 + 6 + 5 + 4 + 3 + 2 + 1 = 39.'),
      mc('Quando fu vietato il rifornimento in gara?', ['Dal 2010', 'Dal 1994', 'Dal 2003', 'Dal 1984'], 0, 'Il rifornimento fu ammesso dal 1994 al 2009.'),
      mc('Quale innovazione portò la Ferrari 640 nel 1989?', ['Il cambio semiautomatico a leve al volante', 'Le sospensioni attive', 'Il turbo', 'L’ala posteriore'], 0, 'Fu progettata da John Barnard.'),
      mc('Quanti titoli piloti vinse Schumacher?', ['7', '5', '6', '8'], 0, '1994, 1995 e cinque fra 2000 e 2004.'),
      mc('Che cosa significa KERS?', ['Sistema di recupero dell’energia cinetica', 'Controllo elettronico di trazione', 'Sistema di raffreddamento', 'Regolamento standard'], 0, 'Fu introdotto nel 2009.')
    ]
  });

  C.addTopic({
    id: 'f1-era-ibrida-e-nuovi-regolamenti', subject: 'f1', stage: 'L7', minutes: 14,
    title: 'L’era ibrida e i nuovi regolamenti (2014–oggi)',
    summary: 'Dal power unit ibrido 2014 al budget cap, dall’effetto suolo del 2022 ai regolamenti 2026: che cosa è cambiato e perché, senza classifiche recenti.',
    objectives: ['Descrivere i principali elementi del power unit ibrido del 2014', 'Collocare Mercedes e Red Bull nella storia recente e i cambi regolamentari 2021, 2022 e 2026', 'Eseguire conversioni e calcoli semplici su potenza, cilindrata e budget'],
    prereq: ['f1-anni-novanta-duemila'],
    pages: [
      { h: 'Il 2014: nasce il power unit ibrido', b: `Nel **2014** i motori V8 aspirati da 2,4 litri sono sostituiti dal **power unit**: un **V6 turbo da 1,6 litri** accoppiato a un sistema **ibrido** (ERS, Energy Recovery System).

Componenti principali:

- **Motore a combustione** (ICE): V6 da 1 600 cm³;
- **Turbocompressore**;
- **MGU-K** (Motor Generator Unit – Kinetic): recupera energia in frenata e la restituisce in accelerazione;
- **MGU-H** (Heat): recupera energia dai gas di scarico e dal turbo;
- **Batteria** (energy store) e centralina.

Limiti principali: regime massimo **15 000 giri/min**, flusso di carburante massimo **100 kg/h**, e **100 kg** di carburante per l’intera gara (110 kg dal 2020; i V8 ne consumavano sensibilmente di più).

> Il motore è tra i più efficienti mai costruiti per le corse: l’efficienza termica supera il **50%**, contro il 30–40% di un motore stradale a benzina.

Il passaggio all’ibrido nasce dalla volontà di avvicinare la F1 alle tecnologie dell’auto stradale e di ridurre i consumi.` },
      { h: 'Numeri del power unit', b: `Alcuni calcoli per capire le dimensioni.

- **Cilindrata per cilindro**: 1 600 cm³ / 6 ≈ **267 cm³**.
- **MGU-K**: massima potenza **120 kW**. In cavalli: 120 × 1,341 ≈ **161 hp** (≈ 163 CV metrici).
- **Energia**: per giro l'MGU-K può recuperare al massimo **2 MJ** e rilasciare al massimo **4 MJ** dalla batteria; l'MGU-H non ha un limite equivalente.
- **Potenza totale**: un power unit di quegli anni supera i **900–1 000 CV** complessivi (motore termico + parte elettrica).
- **Flusso di carburante**: 100 kg/h. Con un gran premio di circa 90 minuti (1,5 ore) non si potrebbe usare il flusso massimo per tutto il tempo: 100 kg/h × 1,5 h = 150 kg > 100 kg disponibili.

> Per questo la **gestione del carburante e dell'energia** è parte della strategia: non si può usare sempre il massimo.

Un'altra novità: gli **scarichi** sono molto più silenziosi rispetto ai V8: suono più basso e controverso fra i tifosi.

Il numero di power unit disponibili per pilota in stagione è limitato, con **penalità in griglia** se si superano le unità consentite.` },
      { h: 'Energia e tempo: un calcolo guidato', b: `Quanto dura una spinta elettrica? Potenza, energia e tempo sono legati da **E = P × t**.

> Rilascio massimo per giro: 4 MJ = 4 000 kJ. Alla potenza massima di 120 kW: t = 4 000 / 120 ≈ **33,3 s**.
> Recupero massimo per giro: 2 MJ = 2 000 kJ, sempre a 120 kW: t = 2 000 / 120 ≈ **16,7 s** di frenata «utile».

Su un giro di circa 90 secondi, la spinta piena dura quindi **poco più di un terzo del giro** (33,3 / 90 ≈ 37%). Il pilota e gli ingegneri decidono **dove** usarla: in genere dove serve più accelerazione o dove si deve difendere o attaccare.

Confronto con il **KERS del 2009**: circa 400 kJ per giro a 60 kW (≈ 80 CV) durano 400 / 60 ≈ **6,7 s**. Il sistema del 2014 è dunque molto più grande: 4 MJ contro 0,4 MJ, cioè **10 volte** l'energia rilasciabile.

> Valori e limiti regolamentari possono cambiare: servono a esercitare il ragionamento, non a sostituire il regolamento in vigore.

Dal calcolo si capisce perché la **gestione dell'energia** è una parte centrale della prestazione: l'energia è limitata, la potenza è un picco, e il tempo a disposizione è breve.` },
      { h: 'La Mercedes dopo il 2014', b: `La **Mercedes** si preparò meglio degli altri al nuovo regolamento. Nel **2014** vinse **16 delle 19 gare** (84,2%) e dominò i campionati.

- **Titoli costruttori**: Mercedes vince **otto di fila**, dal **2014 al 2021**.
- **Titoli piloti Mercedes**: **Lewis Hamilton** nel 2014, 2015, 2017, 2018, 2019 e 2020 (**sei**); **Nico Rosberg** nel 2016.

Il periodo si chiude nel **2021** con il titolo piloti a **Max Verstappen** (Red Bull-Honda), deciso nell'ultimo giro dell'ultima gara, ad **Abu Dhabi**, dopo una stagione di rivalità con Hamilton. Il titolo costruttori 2021 fu invece Mercedes.

> Per approfondire una controversia o un risultato recente, consulta fonti ufficiali e aggiornate: questo corso non riporta classifiche recenti.

Prima dell'era ibrida, la **Red Bull** con **Sebastian Vettel** aveva vinto quattro titoli piloti e costruttori consecutivi, dal 2010 al 2013.

Il dominio di una squadra è spesso legato ai cambi di regolamento: chi interpreta meglio le nuove regole parte in vantaggio.` },
      { h: 'Il budget cap e la crescita del pubblico', b: `Un grande cambiamento economico arriva nel **2021**: il **tetto di spesa** (budget cap). Ogni squadra non può spendere più di una cifra fissata per le attività legate alle prestazioni: **145 milioni di dollari** nel 2021, **140** nel 2022, **135** dal 2023 (valori soggetti ad adeguamenti).

Dal 2019 il pubblico cresce, anche grazie al documentario *Drive to Survive* su Netflix e a una gestione più attenta ai social media. **Liberty Media**, proprietaria dei diritti commerciali dal 2017, punta a un pubblico globale.

> Il tetto passa da 145 a 135 milioni: calo di (145 − 135) / 145 ≈ **6,9%**.

Altre novità del 2021: il **formato Sprint** sperimentale in tre gare (Silverstone, Monza, Interlagos) e, negli anni successivi, l'arrivo di nuove gare, fino a tre negli Stati Uniti.

Il tema dei costi sarà ripreso nelle lezioni su economia e FIA.` },
      { h: 'Il 2022: nuove regole e effetto suolo', b: `Il **2022** porta il maggior cambio aerodinamico degli ultimi decenni. Previsto per il 2021, il regolamento fu **rinviato di un anno** per la pandemia.

Novità:

- **Effetto suolo**: tunnel sotto la vettura, come negli anni ’70, per creare carico e rendere più facile seguire un'altra auto da vicino;
- **Ruote da 18 pollici** (prima 13 pollici) con gomme a profilo più basso;
- **Ali** semplificate e **cerchi** coperti da carenature;
- **Benzina E10** (10% di etanolo);
- peso minimo vettura: **798 kg** (con pilota).

> Uno degli effetti collaterali fu il **porpoising**: rimbalzi verticali ad alta velocità, quando il fondo si avvicina troppo al suolo. La FIA introdusse misure per limitarlo.

L'obiettivo era favorire i **sorpassi**, riducendo l'«aria sporca» che penalizza chi segue. Dopo qualche stagione il giudizio sull'efficacia è stato misto: occorre valutare con dati e analisi nel tempo.

Dal 2022 le gare sono generalmente 22–24 a stagione, un calendario più lungo di ogni epoca.` },
      { h: 'Il 2026: un nuovo ciclo', b: `Per il **2026** è stato definito un nuovo regolamento, approvato dalla FIA nel **2022** per i motori e nel **2024** per il telaio e l'aerodinamica.

Idee principali:

- power unit con circa **metà della potenza elettrica** e metà dal motore a combustione, grazie a una **MGU-K molto più potente** (circa **350 kW**);
- **abolizione della MGU-H**, complessa e costosa;
- **carburanti avanzati sostenibili**, a ridotte emissioni nette di carbonio;
- vetture più **piccole e leggere**, con aerodinamica attiva;
- nuovi costruttori di motori: **Audi**, **Ford** con **Red Bull**, **Honda** con Aston Martin, accanto a Mercedes e Ferrari; e una **undicesima squadra** (Cadillac).

> Attenzione: i dettagli tecnici e i partecipanti cambiano con gli aggiornamenti regolamentari. Verifica sempre i documenti FIA ufficiali.

In questo corso, la tecnica del 2026 è trattata in profondità nelle lezioni avanzate (livello L9).

Per ora, tieni a mente: ogni grande ciclo regolamentare apre una finestra di opportunità per le squadre.` },
      { h: 'Fonti, evoluzione e limiti', b: `L'evoluzione recente si legge su tre piani.

- **Tecnica**: dal V8 al power unit ibrido; dal fondo piatto all'effetto suolo; dall'ibrido a più elettrico.
- **Regolamenti**: budget cap, limiti alla galleria del vento, calendario più lungo.
- **Sport e business**: più pubblico, nuove gare, nuovi costruttori.

Conversioni utili:

> 120 kW × 1,341 ≈ 161 hp (≈ 163 CV metrici). 135 milioni / 24 gare ≈ 5,6 milioni per gara. 100 kg/h × 0,5 h = 50 kg in mezz’ora a flusso massimo.

Limiti di questa lezione:

- non riportiamo classifiche attuali, perché cambiano e sono facilmente verificabili altrove;
- le cifre sulla potenza sono **ordini di grandezza**;
- su temi controversi (decisioni dei commissari, risultati recenti) è meglio leggere cronache indipendenti.

La storia recente è utile perché mostra come **regolamento, ingegneria e strategia** si intrecciano: la stessa regola può favorire squadre diverse a distanza di pochi anni.` }
    ],
    exercises: [
      mc('Che motore introduce il regolamento 2014?', ['V6 turbo ibrido da 1,6 litri', 'V8 aspirato da 2,4 litri', 'V10 aspirato da 3,0 litri', 'V12 da 3,5 litri'], 0, 'Il power unit combina motore termico e sistema ibrido ERS.'),
      fill('L’MGU-K ha una potenza massima di 120 kW. Quanti hp (intero approssimato, con 1 kW ≈ 1,341 hp)?', ['161', '160', '160,9', '160.9'], '120 × 1,341 ≈ 161 hp (≈ 163 CV metrici).'),
      fill('La Mercedes vinse 16 gare su 19 nel 2014. Percentuale (intera approssimata)?', ['84', '84,2', '84.2'], '16 / 19 = 0,842.'),
      mc('Che cosa recupera l’MGU-H?', ['Energia dai gas di scarico e dal turbo', 'Energia dalla frenata', 'Energia dalle gomme', 'Energia dal vento'], 0, 'H sta per Heat (calore).'),
      fill('Quanti titoli costruttori consecutivi vinse la Mercedes dal 2014 al 2021?', ['8', 'otto'], '2021 − 2014 + 1 = 8.'),
      mc('Quanto era il budget cap iniziale nel 2021?', ['145 milioni di dollari', '75 milioni', '300 milioni', '1 miliardo'], 0, 'Poi scese a 140 nel 2022 e 135 dal 2023.'),
      fill('Il tetto scende da 145 a 135 milioni: di che percentuale (un decimale)?', ['6,9', '6.9', '6,90'], '10 / 145 = 0,069.'),
      mc('Che cosa cambia nel 2022?', ['Ritorna l’effetto suolo con ruote da 18 pollici', 'Si abbandona il turbo', 'Si vietano le gomme', 'Si introduce il rifornimento'], 0, 'Fu il maggior cambio aerodinamico degli ultimi anni.'),
      mc('Quale componente è eliminato dal regolamento 2026?', ['L’MGU-H', 'L’MGU-K', 'Il turbo', 'La batteria'], 0, 'La MGU-H è complessa e costosa.'),
      mc('Quanti kg di carburante ammetteva il regolamento 2014 per l’intera gara?', ['100 kg', '50 kg', '150 kg', '200 kg'], 0, 'Il limite 2014 era di 100 kg per gara (110 kg dal 2020).'),
      fill('Cilindrata di un singolo cilindro di un V6 da 1 600 cm³ (cm³, intero approssimato)?', ['267', '266,7', '266.7', '266'], '1 600 / 6 = 266,7.'),
      order('Ordina cronologicamente', ['2014 power unit ibrido V6', '2021 budget cap', '2022 effetto suolo e ruote da 18 pollici', '2026 power unit senza MGU-H'], 'Dal power unit al nuovo ciclo del 2026.')
    ],
    test: [
      mc('Chi fu campione del mondo nel 2016?', ['Nico Rosberg', 'Lewis Hamilton', 'Sebastian Vettel', 'Max Verstappen'], 0, 'Rosberg vinse il titolo con la Mercedes.'),
      fill('Hamilton vinse 2014, 2015, 2017, 2018, 2019 e 2020: quanti titoli nell’era ibrida 2014–2020?', ['6', 'sei'], 'Sei titoli.'),
      fill('Con flusso massimo di 100 kg/h, quanti kg si consumano in 30 minuti?', ['50'], '100 × 0,5 = 50.'),
      mc('Che carburante si usa dal 2022?', ['Benzina E10 (10% di etanolo)', 'Gasolio', 'Metano', 'Idrogeno puro'], 0, 'È un primo passo verso carburanti più sostenibili.'),
      mc('Quando debuttò il formato Sprint?', ['2021', '2014', '2019', '2005'], 0, 'Tre gare sperimentali nel 2021.'),
      mc('Che cos’è il porpoising?', ['Rimbalzo verticale ad alta velocità legato all’effetto suolo', 'Un tipo di gomma', 'Un modo di fare rifornimento', 'Una bandiera'], 0, 'Il fondo oscilla tra pressione bassa e perdita di carico.'),
      mc('Chi vinse il titolo piloti 2021?', ['Max Verstappen', 'Lewis Hamilton', 'Sebastian Vettel', 'Nico Rosberg'], 0, 'Fu deciso all’ultimo giro dell’ultima gara.'),
      mc('Perché il regolamento 2022 fu applicato un anno dopo il previsto?', ['Per effetto della pandemia', 'Per un incidente', 'Per la FIA', 'Per il budget cap'], 0, 'La pandemia ritardò il progetto di un anno.')
    ]
  });

  C.addTopic({
    id: 'f1-sicurezza-e-momenti-decisivi', subject: 'f1', stage: 'L7', minutes: 14,
    title: 'Sicurezza e momenti decisivi',
    summary: 'Dagli anni senza protezioni a cinture, monoscocca, HANS, barriere e halo: come la F1 ha imparato dagli incidenti, con il ruolo della FIA e il rispetto per chi ha perso la vita.',
    objectives: ['Ricostruire le principali tappe della sicurezza in F1', 'Collegare incidenti storici a precisi cambi di regolamento', 'Calcolare energie e spazi di arresto per capire le protezioni'],
    prereq: ['f1-anni-cinquanta-sessanta'],
    pages: [
      { h: 'Un percorso costruito con dolore', b: `La storia della sicurezza in F1 è una storia di **perdite** e di **lezioni imparate**. Molti piloti, commissari e spettatori hanno perso la vita nelle corse. Li ricordiamo con rispetto: quasi ogni protezione di oggi nasce dall'analisi di un incidente.

Il principio guida: l'incidente non si può eliminare, ma si può **ridurre la gravità** con quattro livelli.

1. **Prevenzione**: circuiti e regole che riducono i rischi (vie di fuga, limitatori, regole di partenza).
2. **Protezione del pilota**: casco, tuta, cinture, sedile, HANS, halo.
3. **Struttura dell'auto**: la cellula di sopravvivenza e le zone deformabili.
4. **Soccorso**: commissari, auto medica, centro medico, ambulanze e personale addestrato.

> Questa lezione non intende elencare ogni tragedia, ma mostrare come cambia il sistema.

La crescita della sicurezza va letta insieme alla storia già vista: gli anni ’50 e ’60 senza protezioni, poi la spinta decisa dei piloti come **Jackie Stewart**.` },
      { h: 'Stewart e la spinta degli anni ’60–’70', b: `**Jackie Stewart** (campione nel 1969, 1971 e 1973) dopo un grave incidente al **Gran Premio del Belgio 1966**, a Spa, rimase intrappolato nell'auto in una pozza di benzina e attese a lungo i soccorsi. Quell'esperienza lo rese un promotore instancabile della sicurezza.

Le richieste di Stewart e di altri piloti, spesso accolte con resistenza, portarono a:

- **cinture di sicurezza** e **caschi integrali** (diffusi dalla fine degli anni '60);
- **barriere** (guardrail) e vie di fuga nei circuiti;
- **tute ignifughe** in Nomex, diffuse dagli anni '70;
- **commissari** di pista meglio formati.

> Alcuni circuiti storici, come il lungo Nürburgring (oltre 20 km), vennero abbandonati per la F1 dopo il **1976** perché impossibili da proteggere: quell'anno **Niki Lauda** subì il grave incidente al Nürburgring.

Nel **1978** l'inglese **Sid Watkins** diventa **delegato medico** della F1 e per oltre venticinque anni perfeziona l'organizzazione del soccorso: centro medico, auto medica e presenza di medici addestrati in ogni gara.

I cambiamenti non furono immediati: molti furono introdotti dopo nuove tragedie.` },
      { h: 'La cellula di sopravvivenza e i crash test', b: `Il **monoscocca** (introdotto nel 1962) fu all'inizio un progresso di prestazioni. Dagli anni '80 diventa anche uno strumento di sicurezza: nel **1981** la **McLaren MP4/1** adotta il primo monoscocca in **fibra di carbonio**, molto più rigido e resistente di quelli in alluminio.

La FIA introduce i **crash test obbligatori** sulle vetture (frontali dalla metà degli anni '80, poi laterali, posteriori e sul sedile), che ogni telaio deve superare prima di correre.

Principi:

- **cellula di sopravvivenza**: il pilota è protetto da un guscio rigido, in cui non devono entrare parti;
- **zone deformabili** davanti, dietro e ai lati: assorbono l'energia dell'urto;
- **serbatoio** in una cella di materiale resistente;
- **sedile** con supporti, fissato al monoscocca.

> **Energia cinetica** E = ½ m v². A 300 km/h (83,3 m/s) una monoposto da 800 kg ha circa **2,8 MJ**. Dimezzare la velocità divide l'energia per 4.

Le strutture deformabili servono ad **allungare il tempo** di arresto, riducendo la decelerazione sul pilota.` },
      { h: 'Imola 1994 e le sue conseguenze', b: `Il weekend di **Imola** del **1994** (30 aprile e 1° maggio) segnò un punto di svolta. Il sabato morì **Roland Ratzenberger**, la domenica **Ayrton Senna**, tre volte campione, a 34 anni. Da molti anni la F1 non perdeva piloti durante un weekend di gara; **per oltre vent'anni** (fino al 2014–2015) nessun altro pilota morì per un incidente in gara.

La reazione fu rapida:

- la FIA incaricò un gruppo di esperti, con **Max Mosley** presidente (1993–2009), e rivide circuiti, auto e regole;
- furono modificati curve e chicane in diversi circuiti (compreso Imola);
- dal **1996** i lati dell'abitacolo furono alzati per proteggere meglio la testa;
- si prescrissero **crash test** più severi, anche laterali;
- l'associazione dei piloti (**GPDA**) tornò a occuparsi attivamente di sicurezza.

> Dal 1° maggio 1994 al luglio 2015 (morte di Bianchi) trascorrono **21 anni**: il periodo mostra l'efficacia delle riforme, e il valore di non abbassare mai la guardia.

Nel 2004 la FIA fondò l'**FIA Institute for Motor Sport Safety** per la ricerca sulla sicurezza.` },
      { h: 'Casco, HANS e protezione della testa', b: `Il collo e la testa sono i punti più delicati. In un impatto frontale, il corpo è trattenuto dalle cinture ma la testa continua a muoversi in avanti: il collo subisce forze enormi, con rischio di frattura alla base del cranio.

Il **HANS** (Head And Neck Support) è un collare rigido appoggiato alle spalle e collegato al casco con cinghie: **limita il movimento** della testa rispetto al busto. Fu sviluppato negli anni '80 dal biomeccanico **Robert Hubbard** e da Jim Downing; nella F1 è **obbligatorio dal 2003**.

Altre protezioni:

- **casco** con standard FIA sempre più severi, in fibra di carbonio e aramidica, con visiera resistente;
- **strisce in Zylon** sulla visiera, introdotte dopo l'incidente di **Felipe Massa** del 2009 a Budapest, in cui un frammento colpì il casco;
- **sedile** su misura in fibra e schiuma;
- **cinture a sei punti** con sgancio rapido.

> Il HANS riduce in modo rilevante i carichi sul collo ed è considerato uno dei dispositivi più efficaci mai introdotti.

Dal 2018 il **halo** completa la protezione della testa.` },
      { h: 'Barriere, vie di fuga e pneumatici', b: `La sicurezza dei circuiti riguarda **dove** e **come** un'auto in difficoltà si ferma.

- **Vie di fuga**: ampie aree in asfalto o ghiaia. L'asfalto riduce il rischio di ribaltamenti rispetto alla ghiaia, mentre la ghiaia frena meglio.
- **Barriere di pneumatici** (spesso legati insieme) e pannelli assorbenti, poi barriere energetiche (come i **Tecpro**) che assorbono l'urto.
- **Cavi di ritenzione** (wheel tethers): impediscono alle ruote di staccarsi e colpire piloti o pubblico.
- **Reti e recinzioni** per proteggere gli spettatori.
- **Curve ridisegnate**, chicane e riduzione delle velocità di punta in punti critici.

> Calcolo: un'auto a 300 km/h (83,3 m/s) che decelera a 50 g (≈ 490 m/s²) si arresta in v² / (2a) = 6 944 / 981 ≈ **7 m**. Con 5 g (≈ 49 m/s²) servirebbero circa **71 m**: per questo servono zone che allungano lo spazio.

Dopo che due commissari persero la vita, colpiti da ruote o detriti, nel 2000 e nel 2001, le protezioni dei punti di lavoro dei commissari e dei sistemi di ritenzione delle ruote furono rafforzate.` },
      { h: 'Bianchi, il Virtual Safety Car e l’halo', b: `Il **5 ottobre 2014**, al Gran Premio del Giappone a **Suzuka**, con pista bagnata, **Jules Bianchi** (Marussia) uscì di pista e colpì un mezzo di recupero. Subì gravissime lesioni cerebrali e morì il **17 luglio 2015**, a 25 anni. Il suo ricordo è ancora vivo; il numero **17** è stato ritirato dai piloti a suo nome.

La FIA condusse un'inchiesta approfondita. Fra le conseguenze:

- il **Virtual Safety Car** (VSC), introdotto nel 2015: tutte le auto riducono la velocità a un valore imposto senza uscire in fila dietro la vettura di sicurezza;
- regole più severe sulle **bandiere gialle** e sulla velocità nelle zone di recupero;
- nuove norme sui mezzi di recupero;
- sviluppo della protezione della testa.

L'**halo** è una struttura in **titanio** che circonda l'abitacolo, introdotta come obbligatoria dal **2018**. Pesa circa **7 kg** e deve resistere a un carico di circa **125 kN**, equivalenti a circa **12,7 tonnellate-forza**. In diverse occasioni ha protetto la testa dei piloti da detriti e urti.

> 125 000 N / 9,81 ≈ 12 742 kg ≈ 12,7 t.` },
      { h: 'Il ruolo della FIA e il metodo', b: `La **FIA** (Fédération Internationale de l'Automobile) è l'ente regolatore: scrive i regolamenti, omologa le vetture, controlla i circuiti e può intervenire d'urgenza per la sicurezza.

Il metodo è sempre lo stesso.

1. **Raccolta dei dati**: telemetria, video, dati dalle scatole nere (Accident Data Recorder) installate sulle auto dalla fine degli anni '90.
2. **Analisi** da parte di medici, ingegneri e piloti.
3. **Nuova regola** o modifica tecnica.
4. **Verifica** con crash test e simulazioni.

Una tappa per ciascun decennio:

| Anno | Evento |
|---|---|
| 1978 | Sid Watkins capo medico della F1 |
| 1981 | Primo monoscocca in carbonio (McLaren MP4/1) |
| 1994 | Imola: revisione di auto e circuiti |
| 2003 | HANS obbligatorio |
| 2015 | Virtual Safety Car |
| 2018 | Halo obbligatorio |

> Nel confronto fra 1970 e oggi la F1 è molto più sicura, ma non è mai priva di rischio: la sicurezza è un lavoro continuo e non finisce con un singolo dispositivo.` }
    ],
    exercises: [
      mc('Quando avvenne il weekend di Imola in cui morirono Ratzenberger e Senna?', ['30 aprile – 1° maggio 1994', '1° maggio 1984', '12 settembre 1976', '17 luglio 2015'], 0, 'Ratzenberger il sabato, Senna la domenica.'),
      mc('Da quale anno è obbligatorio il HANS?', ['2003', '1978', '1994', '2018'], 0, 'Limita il movimento della testa rispetto al busto.'),
      mc('Da quale anno è obbligatorio l’halo?', ['2018', '2003', '2015', '1996'], 0, 'È una struttura in titanio sopra l’abitacolo.'),
      fill('L’halo resiste a circa 125 kN. A quante tonnellate-forza corrispondono (125 000 N / 9,81 N/kg)?', ['12,7', '12.7', '13', '12', '12,74'], '125 000 / 9,81 ≈ 12 742 kg.'),
      fill('Un’auto a 300 km/h (83,3 m/s) decelera a 50 g (490 m/s²). Distanza di arresto in metri (intero approssimato)?', ['7', '7,1', '7.1'], 'v² / (2a) = 6 944 / 981 ≈ 7,1.'),
      mc('Se la velocità si dimezza, l’energia cinetica:', ['Si divide per 4', 'Si dimezza', 'Resta uguale', 'Si divide per 8'], 0, 'E è proporzionale a v².'),
      mc('Quale misura nasce dopo l’incidente di Bianchi?', ['Il Virtual Safety Car', 'Il HANS', 'Il monoscocca in carbonio', 'Il casco integrale'], 0, 'Il VSC fu introdotto nel 2015.'),
      fill('Dal 1994 al 2015 quanti anni passano?', ['21'], '2015 − 1994 = 21.'),
      mc('Quale ruolo ha la FIA nella sicurezza?', ['Scrive le regole, omologa vetture e circuiti e interviene sugli incidenti', 'Gestisce i diritti TV', 'Costruisce le auto', 'Sceglie i piloti'], 0, 'È l’ente regolatore.'),
      mc('A che cosa servono i crash test FIA?', ['A verificare che il telaio protegga il pilota in urti standard prima di correre', 'A misurare la velocità massima', 'A scegliere le gomme', 'A decidere la griglia'], 0, 'Ogni telaio deve superarli per essere omologato.'),
      mc('Chi fu il pilota che promosse con forza la sicurezza dopo l’incidente di Spa 1966?', ['Jackie Stewart', 'Jim Clark', 'Fangio', 'Nelson Piquet'], 0, 'Fu campione nel 1969, 1971 e 1973.'),
      order('Ordina cronologicamente', ['1978 Sid Watkins capo medico', '1994 weekend di Imola', '2003 HANS obbligatorio', '2018 halo obbligatorio'], 'Dall’organizzazione medica alla protezione della testa.')
    ],
    test: [
      fill('Con una decelerazione di 5 g (≈ 49 m/s²) da 83,3 m/s, quanti metri servono (intero approssimato)?', ['71', '70', '70,8', '70.8'], '6 944 / 98 ≈ 70,8.'),
      mc('Che cosa fa il HANS?', ['Limita il movimento della testa rispetto al busto', 'Aumenta il carico aerodinamico', 'Raffredda il pilota', 'Controlla il motore'], 0, 'Riduce le forze sul collo.'),
      mc('A che cosa servono i wheel tethers?', ['A impedire che le ruote si stacchino dall’auto', 'A tenere le gomme calde', 'A misurare la pressione', 'A regolare la sospensione'], 0, 'Sono cavi in materiali ad alta resistenza.'),
      mc('Quale vantaggio ha la gabbia rigida (monoscocca in carbonio)?', ['Protegge il pilota restando intera mentre le zone deformabili assorbono l’urto', 'Rende l’auto più morbida', 'Aumenta il peso del carburante', 'Elimina la necessità del casco'], 0, 'È la cellula di sopravvivenza.'),
      fill('Un’auto di 800 kg a 83,3 m/s ha un’energia cinetica di circa quanti megajoule (un decimale)? E = ½ m v².', ['2,8', '2.8', '2,78', '2.78'], '0,5 × 800 × 83,3² ≈ 2,78 · 10⁶ J.'),
      mc('Che cosa sono le strisce in Zylon sulla visiera?', ['Un rinforzo contro l’impatto di frammenti', 'Un filtro solare', 'Un sistema radio', 'Una protezione per il mento'], 0, 'Fu introdotto dopo l’incidente di Massa del 2009.'),
      mc('Quale organismo di ricerca fondò la FIA nel 2004?', ['FIA Institute for Motor Sport Safety', 'GPDA', 'FOM', 'CIK'], 0, 'Si occupa di ricerca e standard di sicurezza.'),
      mc('Perché l’asfalto nelle vie di fuga è usato in alcune curve?', ['Riduce i ribaltamenti rispetto alla ghiaia, anche se frena meno', 'Frena sempre meglio della ghiaia', 'È più economico', 'Aiuta i sorpassi'], 0, 'È un compromesso: ogni soluzione ha pro e contro.')
    ]
  });

  /* ---------- L8 · Squadre, business e carriere ---------- */
  C.addTopic({
    id: 'f1-come-e-fatta-una-squadra', subject: 'f1', stage: 'L8', minutes: 14,
    title: 'Come è fatta una squadra di Formula 1',
    summary: 'Reparti (aerodinamica, progettazione, produzione, operazioni di pista), ordini di grandezza del personale e ruoli: team principal, direttore tecnico, ingegnere di pista, stratega, meccanico.',
    objectives: ['Descrivere i reparti di una squadra e come collaborano', 'Distinguere i ruoli principali, in fabbrica e in pista', 'Eseguire calcoli semplici su organico, tempi e organizzazione (con dati ipotetici dichiarati)'],
    pages: [
      { h: 'Una fabbrica che corre', b: `Una squadra di F1 non è solo il gruppo di persone che vediamo ai box. È un'**azienda tecnologica** con una sede (la «fabbrica») dove si progettano e costruiscono le vetture e una **squadra di pista** che le porta in gara.

Ordini di grandezza (dati indicativi, variano fra squadre e anni):

- l'organico complessivo è dell'ordine di **qualche centinaio fino a oltre mille persone**;
- alla gara partecipa una **frazione** dell'organico, dell'ordine di **alcune decine di persone**, più i **pit crew** durante le soste;
- le vetture sono **due** per squadra, ma per ogni stagione si costruiscono più telai e migliaia di componenti, con sviluppi continui.

> Esempio ipotetico: una squadra di 1 000 persone con 100 in pista ha il **10%** dell'organico in trasferta; il **90%** lavora in fabbrica.

Il lavoro in fabbrica e in pista è collegato da dati e comunicazioni in tempo reale. Molte squadre dispongono di un **centro operativo remoto** che segue la gara a distanza e supporta le decisioni.

Le due anime: **sviluppo** (innovare sempre) e **operazioni** (eseguire senza errori nel weekend).` },
      { h: 'Aerodinamica e simulazione', b: `Il reparto **aerodinamico** studia i flussi d'aria per creare **carico** e limitare la **resistenza**. Gli strumenti principali:

- **CFD** (Computational Fluid Dynamics): simulazioni al computer del flusso intorno alla vettura, con supercomputer;
- **galleria del vento**: si testa un modello in scala (nel regolamento, al **60%**) con aria a velocità massima di circa **180 km/h** (50 m/s);
- **dati di pista**: sensori e rilevazioni per confermare le simulazioni.

Il regolamento limita queste attività con le **restrizioni ai test aerodinamici** (ATR): più una squadra è indietro nella classifica costruttori, più ore di galleria e CFD le sono concesse. L'obiettivo è ridurre i divari.

> Esempio: un modello al 60% in galleria a 50 m/s: la velocità in galleria è 180 km/h, ma la vettura reale viaggia a oltre 300 km/h. I risultati si **scalano** con metodi fisici e verifiche.

Il lavoro aerodinamico è fatto da decine di ingegneri specializzati in ali, fondo, flussi e raffreddamento, che collaborano con la progettazione meccanica.` },
      { h: 'Progettazione e ingegneria', b: `L'**ufficio progettazione** trasforma i concetti in disegni (CAD) di ogni parte: telaio, sospensioni, trasmissione, impianti, elettronica. È diviso in aree:

- **telaio e strutture** (monoscocca, crash structure);
- **sospensioni e dinamica del veicolo**;
- **trasmissione e cambio**;
- **idraulica, raffreddamento, impianti**;
- **elettronica e software** di bordo;
- **power unit**, in squadre con motori propri o in collaborazione con il fornitore.

Sono coinvolte anche discipline come **calcolo strutturale** (FEA), **simulazione della dinamica** e **analisi dei materiali**.

Il responsabile è il **direttore tecnico** (technical director), affiancato da progettisti capo di aree specifiche (chief designer).

> I componenti passano per **fasi**: concetto, progetto, verifica (simulazione e test a banco), produzione, prove in pista. Un singolo pezzo può essere ridisegnato più volte in una stagione.

Il regolamento stabilisce quali componenti («listed parts») la squadra deve progettare in proprio e quali può acquistare.` },
      { h: 'Produzione', b: `Il reparto **produzione** costruisce fisicamente le parti.

- **Materiali compositi**: il monoscocca e molte parti aerodinamiche sono in **fibra di carbonio**, stesa a strati in stampi e cotta in **autoclave** (forno a pressione).
- **Lavorazioni meccaniche** a controllo numerico (CNC) per parti in metallo ad alta precisione.
- **Stampa 3D** per prototipi e alcune parti.
- **Assemblaggio** della vettura e dei sottosistemi.
- **Controllo qualità**: misure e prove per garantire tolleranze di centesimi o millesimi di millimetro.

Il peso è un obiettivo costante: il regolamento fissa un **peso minimo** e le squadre cercano di avvicinarsi a quel limite con strutture leggere, usando il ballast (zavorra) per distribuire le masse.

> Il ciclo è rapido: una nuova ala può passare dall'idea alla pista in **poche settimane**. Questo richiede coordinamento stretto tra aerodinamica, progettazione e produzione.

La produzione è anche limitata dal **budget cap**, per cui non si può rifare tutto: ogni pezzo deve valere il suo costo.` },
      { h: 'Le operazioni di pista', b: `Il **team di pista** porta le vetture ai Gran Premi: comprende ingegneri, meccanici, specialisti dei dati, logistica e persone di supporto.

Funzioni principali:

- **ingegnere di pista** (race engineer): è il contatto radio principale del pilota. Trasforma le sensazioni in modifiche di assetto e gestisce le informazioni durante la gara;
- **ingegnere di prestazione** (performance engineer): analizza i dati e cerca margini di tempo;
- **ingegneri di sistemi**: elettronica, power unit, aerodinamica, gomme;
- **stratega** (chief strategist): decide soste, gomme, reazione alla safety car, con modelli e simulazioni;
- **meccanici**: preparano, montano e riparano le vetture;
- **logistica**: trasporto, hangar, hospitality, gestione dei materiali.

> Il weekend si divide in tre giorni di lavoro intenso, ma la preparazione comincia **settimane prima** in fabbrica.

Una squadra partecipa a **circa 24 gare** in una stagione lunga, con molte trasferte intercontinentali, quindi è fondamentale l'organizzazione dei turni.` },
      { h: 'I ruoli chiave', b: `Chi fa cosa, in sintesi.

- **Team principal**: dirige la squadra come un amministratore delegato. Decisioni sportive e commerciali, rapporti con FIA, sponsor e piloti.
- **Direttore tecnico** (technical director): responsabile dello sviluppo della vettura e dei progetti tecnici.
- **Direttore sportivo** o di corsa (race/sporting director): coordina il weekend, i rapporti con i commissari e la comunicazione di pista.
- **Ingegnere di pista**: il filo diretto con il pilota.
- **Stratega**: sceglie la tattica di gara.
- **Capo meccanico** (chief mechanic) e **meccanici**: costruiscono e mantengono la vettura; i meccanici sono suddivisi per ruolo (anteriore, posteriore, ruote).
- **Analisti di dati**: sintetizzano la telemetria in informazioni utili.
- **Operations / logistica**.

> Ogni ruolo dipende dagli altri: l'ingegnere di pista ascolta il pilota, lo stratega usa i modelli, il team principal decide fra opzioni diverse e assume responsabilità.

I piloti sono solo due, ma le persone che li supportano sono molte: questo mostra che la F1 è uno **sport di squadra**.` },
      { h: 'Il pit stop', b: `Il **pit stop** è un lavoro di squadra visibile in pochi secondi.

Organizzazione tipica: circa **20 persone** operano durante la sosta, con **tre meccanici per ruota** (uno smonta con pistola ad aria, uno toglie la gomma, uno monta la nuova), più chi solleva la vettura davanti e dietro, chi stabilizza, chi dà il via al pilota con un semaforo o un sistema elettronico.

Tempi: le soste migliori durano intorno a **2 secondi** (il record ufficiale è sotto i 2 secondi, intorno a **1,8 s**).

Calcolo indicativo: se la corsia box è lunga **300 m** e il limite è **80 km/h** (22,2 m/s), il tempo di percorrenza è 300 / 22,2 ≈ **13,5 s**. A questo si aggiungono i circa 2 s di sosta: la perdita complessiva, rispetto a restare in pista, è dell'ordine di **20 secondi** (varia molto da circuito a circuito).

> 4 ruote × 3 meccanici = **12** persone solo per le ruote.

I pit crew si allenano per ore, con strumenti di misura dei movimenti, per ottenere ripetibilità.` },
      { h: 'Come leggere i numeri', b: `Le cifre sui team vanno lette con prudenza.

- Gli **organici** (centinaia o oltre mille) sono ordini di grandezza e dipendono dal modo in cui si contano le persone (dipendenti, fornitori, power unit).
- **Il budget cap** non copre tutto (per esempio i piloti e alcune figure apicali sono esclusi): lo vedremo nella lezione sull'economia.
- Le **squadre ufficiali** (costruttori) e i team clienti hanno gradi diversi di autonomia progettuale.

Esercizi di scala (dati ipotetici):

> Team di 1 200 persone, 10% in pista = **120**. Aerodinamica 150 su 1 000 = **15%**. 24 gare in 12 mesi = **2 gare al mese** in media.

Un percorso ideale per capire la vettura: partire da un'idea (aerodinamica), simulare (CFD), testare in galleria, progettare le parti, produrle e verificarle in pista.

> Pit stop: 2,0 s contro 1,8 s è un miglioramento del **10%**: (2,0 − 1,8) / 2,0.

La F1 è una disciplina in cui piccoli miglioramenti diffusi in tutti i reparti producono differenze di prestazione misurabili sul cronometro.` }
    ],
    exercises: [
      mc('Chi dirige la squadra come un amministratore delegato?', ['Il team principal', 'L’ingegnere di pista', 'Il capo meccanico', 'Lo stratega'], 0, 'Il team principal decide a livello sportivo e commerciale.'),
      mc('Chi è il contatto radio principale del pilota?', ['L’ingegnere di pista', 'Il direttore tecnico', 'Il media manager', 'Il capo logistica'], 0, 'Traduce le sensazioni del pilota in modifiche e informazioni.'),
      fill('In una squadra ipotetica di 1 000 persone, 150 lavorano in aerodinamica. Quale percentuale?', ['15', '15%'], '150 / 1 000 = 0,15.'),
      mc('A quale scala sono i modelli in galleria del vento secondo il regolamento?', ['60%', '100%', '25%', '10%'], 0, 'I modelli sono al 60% con velocità del vento limitata.'),
      fill('Una corsia box di 300 m con limite 80 km/h (22,2 m/s): quanti secondi (un decimale)?', ['13,5', '13.5', '13,4', '13.4'], '300 / 22,2 ≈ 13,5.'),
      mc('Che compito ha lo stratega?', ['Decidere soste, gomme e reazioni agli eventi di gara', 'Costruire il telaio', 'Pagare gli sponsor', 'Guidare la vettura di sicurezza'], 0, 'Usa modelli e simulazioni.'),
      mc('In quale forno vengono cotti i componenti in fibra di carbonio?', ['Autoclave', 'Altoforno', 'Forno a microonde', 'Forno ceramico'], 0, 'L’autoclave unisce pressione e temperatura.'),
      fill('Una squadra partecipa a 24 gare in 12 mesi. Quante gare al mese, in media?', ['2'], '24 / 12 = 2.'),
      mc('Che cosa significa CFD?', ['Computational Fluid Dynamics', 'Car Fuel Distribution', 'Control Flow Device', 'Central Force Design'], 0, 'È la simulazione numerica dei flussi d’aria.'),
      mc('Quale reparto costruisce fisicamente i componenti della vettura?', ['Produzione', 'Marketing', 'Logistica', 'Strategia'], 0, 'Comprende compositi, lavorazioni CNC e assemblaggio.'),
      mc('Che cosa sono le restrizioni ai test aerodinamici (ATR)?', ['Limiti alle ore di galleria e CFD, più larghi per chi è indietro', 'Limiti ai giri di pista', 'Limiti allo stipendio dei piloti', 'Limiti al numero di meccanici'], 0, 'Servono a ridurre i divari fra squadre.'),
      order('Ordina il percorso di un’idea aerodinamica fino alla gara', ['Concetto aerodinamico', 'Simulazione CFD', 'Prova in galleria del vento', 'Progetto e produzione dei pezzi', 'Uso in pista'], 'Dall’idea alla pista passa per simulazioni, galleria, produzione e verifica.')
    ],
    test: [
      fill('Una squadra di 1 200 persone ne porta il 10% in trasferta. Quante persone?', ['120'], '1 200 × 0,10 = 120.'),
      mc('Qual è il ruolo del direttore tecnico?', ['Guidare lo sviluppo tecnico della vettura', 'Decidere le soste in gara', 'Gestire gli sponsor', 'Pilotare in simulatore'], 0, 'Coordina progettazione, aerodinamica e ingegneria.'),
      mc('Che cosa fa il capo meccanico?', ['Coordina i meccanici e la preparazione delle vetture', 'Decide la strategia', 'Gestisce i media', 'Scrive il regolamento'], 0, 'Organizza turni e lavoro di box.'),
      fill('Un pit stop passa da 2,0 s a 1,8 s. Quale percentuale di miglioramento?', ['10', '10%'], '(2,0 − 1,8) / 2,0 = 0,10.'),
      mc('Che cosa fa l’ingegnere di prestazione?', ['Analizza i dati e cerca margini di tempo', 'Cambia le gomme', 'Gestisce il budget', 'Guida la vettura'], 0, 'Lavora con telemetria e simulazioni.'),
      mc('Perché si separano fabbrica e squadra di pista?', ['Lo sviluppo continua tutto l’anno in fabbrica, mentre in pista serve una squadra mobile ed esecutiva', 'Perché le gare sono poche', 'Per ragioni fiscali', 'Perché i meccanici non lavorano in fabbrica'], 0, 'Due funzioni diverse ma collegate.'),
      mc('Che cosa significa «listed parts»?', ['Componenti che la squadra deve progettare in proprio', 'Pezzi di ricambio vietati', 'Elenco dei piloti', 'Parti in vendita'], 0, 'Il regolamento distingue ciò che si può acquistare da ciò che va sviluppato.'),
      mc('Quanti meccanici lavorano per ruota in un pit stop tipico?', ['Tre', 'Uno', 'Dieci', 'Nessuno'], 0, 'Uno smonta il dado, uno toglie la gomma, uno monta la nuova.')
    ]
  });

  C.addTopic({
    id: 'f1-economia-e-budget-cap', subject: 'f1', stage: 'L8', minutes: 14,
    title: 'L’economia della Formula 1',
    summary: 'Ricavi (diritti TV, organizzatori, sponsor), distribuzione dei premi (concetto), budget cap e costi di una stagione, con calcoli semplici su ordini di grandezza.',
    objectives: ['Identificare le fonti di ricavo della F1 e dove finisce il denaro', 'Spiegare il budget cap, che cosa include e perché esiste', 'Eseguire calcoli con valori ipotetici dichiarati'],
    prereq: ['f1-come-e-fatta-una-squadra'],
    pages: [
      { h: 'Avviso sui numeri', b: `Le cifre economiche della F1 sono spesso **riservate** o stimate. In questa lezione usiamo:

- **ordini di grandezza** (decine o centinaia di milioni; miliardi);
- **esempi ipotetici**, dichiarati come tali, per esercitare il calcolo;
- il solo dato regolamentare pubblico che conosciamo bene: il **budget cap** (145, 140, 135 milioni di dollari nel 2021, 2022, 2023).

Non troverai qui bilanci attuali di team: per quelli servono documenti ufficiali aggiornati.

> Un buon modo di ragionare: prima la **struttura** (da dove entra il denaro, dove esce), poi i numeri.

La F1 è una **industria dello spettacolo e della tecnologia**: vende diritti di trasmissione, biglietti, pubblicità e immagine; spende in progettazione, produzione, trasporto, eventi, stipendi.

I protagonisti economici sono tre: il **gestore dei diritti commerciali** (oggi Liberty Media, tramite Formula One Group), le **squadre** e gli **organizzatori** delle gare (promoter), oltre ai **broadcaster** e agli **sponsor**.` },
      { h: 'Le fonti di ricavo della F1', b: `Il denaro nella F1 arriva principalmente da quattro canali.

1. **Diritti televisivi e media**: le emittenti pagano per trasmettere le gare; oggi anche piattaforme di streaming.
2. **Quote di organizzazione** (race promotion fees): i circuiti o i governi locali pagano per ospitare un Gran Premio. Per gara si parla di cifre dell'ordine di **decine di milioni di dollari** (varia molto).
3. **Sponsorizzazioni** sia della F1 nel suo insieme (partner globali) sia delle singole squadre.
4. **Altri ricavi**: biglietti e ospitalità (spesso incassati dagli organizzatori), merchandising, licenze, esperienze.

Il gruppo che gestisce i diritti commerciali (**Formula One Group**, controllato da **Liberty Media** dal 2017) ha ricavi annui dell'ordine di **alcuni miliardi di dollari**.

> Esempio ipotetico di 3 000 milioni: media 1 200 (**40%**), organizzatori 900 (**30%**), sponsor 600 (**20%**), altro 300 (**10%**).

Parte di questi ricavi viene redistribuita alle squadre (vedi più avanti).` },
      { h: 'Liberty Media e il modello di business', b: `Nel **2017** **Liberty Media** acquista i diritti commerciali dalla precedente gestione (di **Bernie Ecclestone**, dagli anni '70). Le strategie principali:

- **Pubblico globale**: più contenuti digitali, social media, serie documentarie (come *Drive to Survive*, dal 2019);
- **Nuove gare** in mercati strategici (Stati Uniti, Medio Oriente, Asia);
- **Esperienze** per i tifosi e ospitalità di alto livello;
- **Streaming** e piattaforme proprie (F1 TV).

Il valore economico di una gara deriva dalla somma di diritti TV, quote dell'organizzatore, sponsor e indotto turistico.

> La F1 è un prodotto «**a calendario**»: poche gare (circa 24) con grande attenzione mediatica. Ogni gara è un evento, non una partita fra tante.

Questa concentrazione dei ricavi rende il valore dei diritti molto sensibile alla popolarità dello sport.

Per le squadre, la crescita dei ricavi complessivi si traduce nella **crescita del valore** della licenza di partecipazione.` },
      { h: 'Sponsor e partner', b: `Gli **sponsor** pagano per **visibilità** (loghi su auto, tute, box), per **collaborazioni tecniche** (fornitori di tecnologia con loro marchio) e per **esperienze con clienti** (ospitalità, eventi).

Tipologie:

- **Title sponsor**: il nome compare nel nome della squadra;
- **Partner tecnici**: forniscono tecnologia, servizi, software;
- **Partner finanziari e di ospitalità**;
- **Fornitori ufficiali**.

Il valore per lo sponsor è misurato in **esposizione** (minuti di TV, interazioni social) e in **business generato**.

Il rapporto sponsor-squadra è influenzato dai **risultati**: team più competitivi attraggono contratti più ricchi.

> Esempio ipotetico: uno sponsor paga 20 milioni all'anno per un logo; se la squadra spende 135 milioni (budget cap), lo sponsor copre circa il **14,8%** del costo (20 / 135).

Gli sponsor operano anche nel campo dei **piloti**: i piloti con portafoglio di sponsor possono aiutare una squadra, ma il regolamento economico (cap e licenza) limita l'influenza del solo denaro.` },
      { h: 'Distribuzione dei premi: il concetto', b: `Una parte dei ricavi del gestore dei diritti viene redistribuita alle squadre, in base ai contratti con la FIA e il gestore (il **Concorde Agreement**).

Il **concetto** (i dettagli e le cifre esatte non sono pubblici):

- una **quota di base** uguale per tutte le squadre partecipanti;
- una **quota legata al risultato** nel campionato costruttori: la squadra meglio classificata riceve di più, quella ultima meno;
- **quote storiche o speciali** riconosciute a squadre di lunga presenza (per esempio la Ferrari, secondo fonti pubbliche);
- altre voci per accordi particolari.

Con l’accordo 2021 si è cercato di ridurre il divario fra prima e ultima, in modo da **sostenere le squadre più piccole**.

> Esempio ipotetico: un fondo da 1 000 milioni diviso in 10 parti uguali (100 ciascuna) più un bonus di 200 distribuito in proporzione alla classifica. Ogni squadra riceve almeno 100; il bonus aumenta la quota di chi è più avanti, ma chi è indietro non resta a zero.

Il meccanismo equilibra l'incentivo a vincere con la stabilità del sistema.` },
      { h: 'Il budget cap', b: `Il **budget cap** (tetto di spesa) limita quanto una squadra può spendere in attività legate alle prestazioni della vettura. È in vigore dal **2021**.

- **2021**: 145 milioni di dollari; **2022**: 140; **2023**: 135 (con aggiornamenti per inflazione).
- **Escluse** dal tetto, per regolamento, voci come gli **stipendi dei piloti**, i compensi dei **tre dirigenti più pagati**, spese di marketing e attività non legate alla F1.
- Controllo: la FIA verifica i rendiconti con un'unità apposita; chi supera il limite subisce **sanzioni** finanziarie e/o sportive.

Perché esiste:

- ridurre le **spese fuori controllo** e rendere la F1 sostenibile per più squadre;
- avvicinare le prestazioni (una squadra ricca non può spendere senza limiti per svilupparsi);
- attrarre nuovi team con costi più prevedibili.

> Prima del cap, le stime per i top team erano dell'ordine di **400 milioni** o più: quasi **3 volte** il tetto (400 / 135 ≈ 2,96).

Il cap mette sotto pressione la **efficienza**: ogni pezzo e ogni ora devono valere la spesa.` },
      { h: 'Costi di una stagione, ordini di grandezza', b: `Dove vanno i soldi di una squadra? Con dati **ipotetici** per esercizio (non reali), su un cap di 135 milioni:

| Voce | Quota ipotetica |
|---|---|
| Progettazione e sviluppo | 35% |
| Produzione e materiali | 30% |
| Operazioni di pista e logistica | 20% |
| Power unit e altri servizi | 10% |
| Altro | 5% |

Calcoli:

- 35% di 135 = **47,25 milioni**;
- 30% = **40,5 milioni**;
- 20% = **27 milioni**;
- 10% = **13,5 milioni**.

Altri ordini di grandezza utili:

- 135 milioni / 24 gare = **5,6 milioni** per gara;
- 135 milioni / 365 giorni ≈ **370 000 dollari al giorno**.

> Il costo di sviluppo è concentrato in poche aree: aerodinamica e produzione dei pezzi.

Oltre al cap, le squadre hanno spese **escluse** (piloti, dirigenti, marketing), perciò il costo totale è superiore al valore del cap.` },
      { h: 'Economia e decisioni', b: `I numeri servono a decidere.

- **Cost-benefit di uno sviluppo**: se un'ala nuova costa 2 milioni e fa guadagnare 0,1 s al giro, vale la pena confrontarla con altre opzioni (stesso budget per altre idee). Il cap trasforma lo sviluppo in un problema di **allocazione**.
- **Valore della posizione in classifica**: ogni posizione costruttori vale in termini di premi, sponsor e visibilità.
- **Ingresso di nuove squadre**: richiede capitale e costi di partecipazione (vedi la lezione su FIA e promotore).

Calcoli di sintesi:

> 145 → 135 milioni: calo del **6,9%**. 24 gare × 30 milioni di quota organizzatore (ipotetico) = **720 milioni**. 400 / 135 ≈ **3** volte.

Limiti dei calcoli: i dati reali sono riservati, le valute cambiano, il tetto è soggetto ad aggiustamenti. Il metodo però resta: elencare **entrate**, **uscite**, **vincoli** e **ordini di grandezza**.

Nella prossima lezione vedremo chi stabilisce le regole del gioco: FIA, promotore e costruttori.` }
    ],
    exercises: [
      mc('Quando Liberty Media acquistò i diritti commerciali della F1?', ['2017', '2001', '2021', '1981'], 0, 'Subentrò alla gestione precedente di Bernie Ecclestone.'),
      fill('Cap di 135 milioni diviso per 24 gare: quanti milioni per gara (un decimale)?', ['5,6', '5.6', '5,63', '5.63', '5,625'], '135 / 24 = 5,625.'),
      fill('Il cap passa da 145 a 135 milioni: calo percentuale (un decimale)?', ['6,9', '6.9'], '10 / 145 = 0,069.'),
      mc('Quale voce è esclusa dal budget cap?', ['Gli stipendi dei piloti', 'I costi di produzione dei pezzi', 'Lo sviluppo dell’aerodinamica', 'Le spese di trasferta'], 0, 'Piloti e tre dirigenti più pagati sono fuori dal cap.'),
      mc('Quali sono le principali fonti di ricavo della F1?', ['Diritti TV, quote degli organizzatori e sponsor', 'Solo biglietti', 'Solo merchandising', 'Solo i premi della FIA'], 0, 'Sono i canali principali del gestore commerciale.'),
      fill('Esempio ipotetico: ricavi 3 000 milioni, media 1 200. Quale percentuale?', ['40', '40%'], '1 200 / 3 000 = 0,40.'),
      mc('Come sono redistribuiti i premi alle squadre (concetto)?', ['Quota base uguale più quota legata alla classifica e quote speciali', 'Tutto al vincitore', 'In parti identiche senza eccezioni', 'In base al numero di tifosi'], 0, 'I dettagli esatti dei contratti non sono pubblici.'),
      fill('135 milioni di dollari divisi per 365 giorni: quanti migliaia di dollari al giorno (intero approssimato)?', ['370', '369,9', '369.9', '369', '370 000', '370000'], '135 000 000 / 365 ≈ 369 863.'),
      mc('Perché è stato introdotto il budget cap?', ['Per contenere le spese e avvicinare le prestazioni', 'Per eliminare gli sponsor', 'Per aumentare il costo dei biglietti', 'Per ridurre il numero delle gare'], 0, 'Rende più sostenibile e competitivo il sistema.'),
      mc('Chi controlla il rispetto del budget cap?', ['La FIA, con un’unità dedicata', 'Gli sponsor', 'I piloti', 'I broadcaster'], 0, 'Le violazioni comportano sanzioni finanziarie e/o sportive.'),
      fill('Esempio ipotetico: 24 gare con quota media di 30 milioni ciascuna. Totale in milioni?', ['720'], '24 × 30 = 720.'),
      order('Ordina il flusso del denaro (schema semplificato)', ['Fan e pubblico', 'Broadcaster, organizzatori e sponsor', 'Gestore dei diritti', 'Distribuzione alle squadre', 'Spese di sviluppo e gara'], 'Dal pubblico alle squadre e alle loro spese.')
    ],
    test: [
      fill('Un top team spendeva circa 400 milioni; il cap è 135. Quante volte (intero approssimato)?', ['3'], '400 / 135 ≈ 2,96.'),
      mc('Che cosa sono i diritti TV?', ['Il denaro pagato dalle emittenti per trasmettere le gare', 'I premi dei piloti', 'La tassa sui biglietti', 'Un tipo di sponsor tecnico'], 0, 'Sono una delle voci principali dei ricavi.'),
      mc('Che cosa vogliono gli sponsor in cambio del denaro?', ['Visibilità, collaborazione tecnica e rapporti con clienti', 'Il controllo della strategia', 'Il diritto di scegliere il vincitore', 'Nulla'], 0, 'Valutano esposizione e business generato.'),
      fill('Ricavi ipotetici di 2 000 milioni, di cui 45% da media. Quanti milioni?', ['900'], '2 000 × 0,45 = 900.'),
      mc('Quanti sono i dirigenti esclusi dal tetto per i compensi?', ['I tre più pagati', 'Tutti', 'Nessuno', 'Solo il team principal'], 0, 'Oltre ai piloti.'),
      mc('Qual è il vantaggio di una quota base uguale per tutti i team?', ['Garantisce sostegno alle squadre meno forti', 'Elimina la competizione', 'Rende inutile il cap', 'Riduce il numero di sponsor'], 0, 'Aiuta a mantenere un campionato con molte squadre.'),
      mc('Quale società gestisce oggi i diritti commerciali della F1?', ['Formula One Group, di Liberty Media', 'La FIA', 'Il CIO', 'Una singola scuderia'], 0, 'È l’assetto dal 2017.'),
      mc('Perché i valori dei team spesso crescono con la popolarità dello sport?', ['Perché aumentano i ricavi complessivi e il valore delle licenze', 'Perché diminuiscono i costi', 'Perché crescono i pit stop', 'Perché si riduce il numero di team'], 0, 'La crescita dei ricavi aumenta l’interesse a investire.')
    ]
  });

  C.addTopic({
    id: 'f1-fia-promotore-costruttori', subject: 'f1', stage: 'L8', minutes: 14,
    title: 'FIA, promotore e costruttori: chi decide',
    summary: 'I tre attori del sistema, l’accordo della Concordia, l’ingresso di nuove squadre, i fornitori di motori e il percorso con cui si modifica un regolamento.',
    objectives: ['Distinguere i ruoli di FIA, gestore commerciale e squadre', 'Spiegare il Concorde Agreement e le regole d’ingresso di nuove squadre', 'Descrivere come nasce e si approva un cambio di regolamento'],
    prereq: ['f1-economia-e-budget-cap'],
    pages: [
      { h: 'I tre attori', b: `La Formula 1 è governata da un equilibrio fra tre attori.

1. **FIA** (Fédération Internationale de l'Automobile): l'ente **regolatore**. Scrive i regolamenti sportivo e tecnico, omologa i circuiti, nomina i commissari, controlla il rispetto delle regole. Nasce nel 1904 come AIACR; ha sede a Parigi e Ginevra.
2. **Gestore dei diritti commerciali** (oggi **Formula One Group**, di **Liberty Media**): vende diritti TV, negozia con gli organizzatori, promuove il campionato.
3. **Squadre** (costruttori): progettano e fanno correre le vetture; hanno interessi sportivi e commerciali.

Altri attori: i **fornitori di motori** (power unit), gli **organizzatori** dei Gran Premi, i **piloti** (con la GPDA, associazione dei piloti), i **broadcaster** e gli **sponsor**.

> Il sistema è un compromesso: chi **regola** (FIA) non è chi **vende** (gestore), e nessuno dei due decide da solo.

La separazione dei ruoli aiuta a bilanciare interessi diversi ma richiede accordi formali.` },
      { h: 'La FIA e il suo funzionamento', b: `La **FIA** è un'associazione di club automobilistici e organizzazioni di mobilità del mondo. Per il motorsport ha organi propri.

- **World Motor Sport Council** (WMSC): organo che approva i regolamenti dei campionati mondiali.
- **Formula 1 Commission**: forum con rappresentanti della FIA, del gestore commerciale, delle squadre, dei fornitori di motori, dei promoter, degli sponsor e dei piloti, che discute e vota proposte.
- **Commissari sportivi** e **direttore di gara** durante i weekend.
- **Dipartimenti tecnici**, medici e di sicurezza.
- **Unità per il budget cap**.

Alcuni presidenti recenti: **Max Mosley** (1993–2009), **Jean Todt** (2009–2021), **Mohammed Ben Sulayem** (dal dicembre 2021).

> Per ragioni di **sicurezza** la FIA può introdurre modifiche con procedure più rapide, anche senza il consenso delle squadre.

Il lavoro della FIA unisce competenze di ingegneria, diritto sportivo, medicina e organizzazione degli eventi.` },
      { h: 'I diritti commerciali: da Ecclestone a Liberty', b: `Negli anni '70 **Bernie Ecclestone**, con la FOCA, centralizza la vendita dei diritti TV delle gare per conto delle squadre. Dopo lo scontro FISA-FOCA, il primo **Concorde Agreement** (1981) sancisce i rapporti.

Nel **2001** la FIA cede per un lungo periodo (**100 anni**) i diritti commerciali a una società collegata a Ecclestone, per una cifra dell'ordine di **qualche centinaio di milioni di dollari** (dato di fonte pubblica, da considerare indicativo). Era un accordo molto discusso.

Dal 2017, **Liberty Media** acquisisce la gestione dei diritti dalle strutture precedenti (con una valutazione complessiva dell'ordine di **8 miliardi di dollari**) e nomina un nuovo amministratore. La F1 intensifica comunicazione digitale, contenuti e nuovi eventi.

> Una durata di 100 anni dal 2001 significa che l'accordo prevede scadenza nel **2101**.

La gestione dei diritti separata dalla regolazione sportiva è un principio per limitare i **conflitti di interesse**.

Gli sviluppi successivi mostrano come i rapporti commerciali evolvano con i tempi.` },
      { h: 'L’accordo della Concordia', b: `Il **Concorde Agreement** è il contratto fra FIA, gestore commerciale e squadre che regola la partecipazione al campionato.

Storia essenziale:

- **1981**: primo accordo, dopo il conflitto FISA-FOCA; prende il nome dalla sede FIA in **Place de la Concorde**, a Parigi;
- accordi successivi rinnovati a più riprese (anni '80 e '90, poi 2009 e 2013);
- accordo **2021–2025**, firmato nel 2020, con il budget cap e nuove regole di distribuzione dei premi;
- un nuovo ciclo comincia dal **2026**, in coincidenza con i nuovi regolamenti.

Contenuti tipici:

- **diritti e doveri** delle squadre (partecipare a tutte le gare, rispettare le regole);
- **distribuzione dei ricavi**;
- **governance**: chi vota su cosa;
- **durata** e condizioni di uscita.

> Il Concorde Agreement è in parte **riservato**: i dettagli completi non sono pubblici.

Per le squadre, firmarlo significa avere una quota dei ricavi e voce nella governance; per il gestore, significa garantire la presenza stabile di squadre al via.` },
      { h: 'Nuove squadre e fornitori di motori', b: `Per entrare in F1 una nuova squadra deve ottenere l'**approvazione della FIA** e un accordo con il gestore commerciale, e rispettare i requisiti tecnici e finanziari.

Elementi chiave:

- **Tassa d'ingresso** (anti-dilution fee): nel quadro 2021 pari a **200 milioni di dollari**, da ripartire fra le squadre esistenti (se divisa fra 10, farebbe **20 milioni ciascuna**), perché l'arrivo di un nuovo team riduce la quota di ricavi delle altre.
- **Griglia limitata**: nel tempo il numero delle squadre è stato fino a 10–11. Nel 2016 arrivò la **Haas**; dal 2026 c'è l'undicesima squadra (**Cadillac**).
- **Costruttore vero**: la squadra deve progettare in proprio le parti obbligatorie («listed parts»), pur potendone acquistare altre.

> Con 11 squadre da 2 auto, la griglia è di **22 vetture**; con 12 squadre, 24.

I **fornitori di power unit** sono pochi (Mercedes, Ferrari, Honda, Audi, e Red Bull-Ford dal 2026 – verificare l'evoluzione): ogni fornitore alimenta la propria squadra e squadre clienti. Costruire un motore competitivo è molto costoso, per cui il numero di fornitori è limitato.

Il regolamento prevede un **tetto ai costi** dei motori forniti ai clienti.` },
      { h: 'Come si cambia un regolamento', b: `Un cambio di regolamento passa per più passaggi, con tempi lunghi per le modifiche **tecniche importanti**.

1. **Proposta** (FIA, squadre, gestore commerciale o altro): nasce da un obiettivo (sicurezza, spettacolo, costi, sostenibilità).
2. **Lavoro tecnico**: gruppi di lavoro di ingegneri FIA e delle squadre studiano soluzioni e simulano effetti.
3. **Discussione** nella **F1 Commission** e consultazione dei fornitori di motori.
4. **Approvazione** del **World Motor Sport Council**.
5. **Pubblicazione** dei regolamenti e applicazione da una data prefissata.

Esempi:

- regolamento aerodinamico **2022**: approvato nel **2019**, rinviato di un anno per la pandemia; **3 anni** fra approvazione e debutto;
- regolamento power unit **2026**: approvato nel **2022**, a **4 anni** dal debutto.

> Le modifiche per la **sicurezza** possono essere introdotte rapidamente; quelle tecniche importanti richiedono preavvisi lunghi perché le squadre devono progettare e costruire.

Il processo bilancia l'esigenza di cambiare (innovazione, sicurezza) con quella di stabilità (investimenti già fatti).` },
      { h: 'Conflitti di interesse e controlli', b: `In un sistema con più attori i conflitti sono inevitabili.

- **Squadre vs gestore**: sulla ripartizione dei ricavi.
- **Squadre grandi vs piccole**: sul budget cap e sui costi.
- **FIA vs squadre**: sulle interpretazioni del regolamento tecnico e sulle sanzioni.
- **Fornitori di motori vs clienti**: sui prezzi e sulla parità di trattamento.

Strumenti per gestirli:

- **trasparenza** (regolamenti pubblicati, comunicazioni dei commissari);
- **diritto di appello** davanti a organi indipendenti (International Court of Appeal della FIA);
- **controlli** tecnici dopo le gare e verifiche finanziarie;
- **separazione dei ruoli** fra regolatore e gestore dei diritti.

> Come nello sport, ciò che conta è che le regole siano **chiare e uguali per tutti** e che siano fatte rispettare.

Le decisioni controverse sono parte della storia dello sport, ma la tendenza è verso maggiore **trasparenza** e uso dei dati.` },
      { h: 'Numeri e sintesi', b: `Calcoli e date della lezione.

- AIACR 1904 → primo Concorde 1981: **77 anni**.
- Tassa d'ingresso 200 milioni / 10 squadre = **20 milioni** ciascuna (ipotesi di ripartizione uguale).
- 11 squadre × 2 auto = **22 vetture**.
- 2022 meno 2019 = **3 anni** tra approvazione e debutto delle regole aerodinamiche; 2026 − 2022 = **4 anni** per i power unit.

Tre attori e tre funzioni:

| Attore | Funzione |
|---|---|
| FIA | Regola, omologa, controlla |
| Gestore commerciale | Vende diritti e promuove |
| Squadre | Progettano e corrono |

> Il sistema funziona se i tre attori riconoscono l'interesse comune: uno sport credibile, sicuro e sostenibile.

Questa lezione chiude il blocco sull'organizzazione della F1: nelle prossime vedremo come si arriva a lavorare o a correre in questo mondo.` }
    ],
    exercises: [
      mc('Qual è il ruolo principale della FIA?', ['Regolare lo sport e controllarne il rispetto', 'Vendere i diritti TV', 'Costruire le monoposto', 'Gestire gli sponsor delle squadre'], 0, 'La FIA scrive e applica i regolamenti.'),
      mc('Chi gestisce oggi i diritti commerciali della F1?', ['Il Formula One Group di Liberty Media', 'La FIA', 'La Ferrari', 'La GPDA'], 0, 'Dal 2017.'),
      mc('Quando fu firmato il primo Concorde Agreement?', ['1981', '1950', '2001', '2021'], 0, 'Dopo il conflitto FISA-FOCA.'),
      fill('Una tassa d’ingresso di 200 milioni divisa fra 10 squadre: quanti milioni ciascuna?', ['20'], '200 / 10 = 20.'),
      mc('Quale squadra arrivò nel 2016 tra le nuove entrate?', ['Haas', 'Williams', 'Tyrrell', 'Brabham'], 0, 'Haas debuttò nel 2016.'),
      mc('Quale organo approva i regolamenti dei campionati mondiali?', ['World Motor Sport Council', 'La GPDA', 'La FOM', 'Il CIK'], 0, 'È l’organo FIA per gli sport motoristici mondiali.'),
      mc('Che cosa fornisce un fornitore di power unit?', ['I motori ibridi alle squadre (ufficiali e clienti)', 'Le gomme', 'I circuiti', 'I commissari'], 0, 'Sono pochi, perché il costo di sviluppo è elevato.'),
      fill('Con 11 squadre da 2 vetture, quante auto sul via?', ['22'], '11 × 2 = 22.'),
      mc('Perché esiste una tassa d’ingresso per nuove squadre?', ['Perché le squadre esistenti dividono i ricavi con un nuovo membro', 'Perché la FIA vuole guadagnare', 'Perché i piloti lo chiedono', 'Per pagare i commissari'], 0, 'Compensa la diluizione della quota di ricavi.'),
      fill('Regolamento aerodinamico: approvato nel 2019, debutto nel 2022. Quanti anni?', ['3'], '2022 − 2019 = 3.'),
      mc('Come può cambiare la FIA un regolamento di sicurezza?', ['Anche con procedure rapide, in caso di urgenza', 'Solo con l’unanimità delle squadre', 'Solo a inizio decennio', 'Solo dopo un referendum dei tifosi'], 0, 'La sicurezza è prioritaria.'),
      order('Ordina il percorso di un cambio di regolamento', ['Proposta', 'Lavoro tecnico dei gruppi di esperti', 'Discussione nella F1 Commission', 'Approvazione del World Motor Sport Council', 'Pubblicazione e applicazione'], 'Dalla proposta alla pubblicazione.')
    ],
    test: [
      fill('Il regolamento power unit 2026 fu approvato nel 2022. Quanti anni prima del debutto?', ['4'], '2026 − 2022 = 4.'),
      mc('Che cosa fu la guerra FISA-FOCA?', ['Un conflitto tra governo sportivo e squadre sui poteri e sui diritti commerciali', 'Una gara', 'Un regolamento delle gomme', 'Un incidente'], 0, 'Si concluse con il primo Concorde Agreement.'),
      mc('Che cosa significa «listed parts»?', ['Parti che il costruttore deve progettare in proprio', 'Parti vietate', 'Parti di ricambio', 'Parti in carbonio'], 0, 'Distinguono i team costruttori da chi si limita ad acquistare.'),
      mc('Chi è la GPDA?', ['L’associazione dei piloti', 'Una squadra', 'Un circuito', 'Un fornitore di motori'], 0, 'Grand Prix Drivers’ Association.'),
      fill('Con un massimo di 12 squadre da 2 auto, quante vetture al massimo?', ['24'], '12 × 2 = 24.'),
      mc('Qual è un esempio di separazione dei ruoli?', ['La FIA regola, il gestore commerciale vende i diritti', 'Le squadre decidono da sole', 'I piloti dirigono la FIA', 'I commissari gestiscono gli sponsor'], 0, 'Riduce i conflitti d’interesse.'),
      mc('Quale organo giudica gli appelli sportivi della FIA?', ['International Court of Appeal', 'GPDA', 'FOM', 'Il direttore di gara'], 0, 'Offre un grado di giudizio indipendente.'),
      mc('Quanti anni dopo il 1904 (AIACR) fu firmato il primo Concorde Agreement (1981)?', ['77', '50', '100', '65'], 0, '1981 − 1904 = 77.')
    ]
  });

  C.addTopic({
    id: 'f1-la-strada-verso-la-formula-1', subject: 'f1', stage: 'L8', minutes: 14,
    title: 'La strada verso la Formula 1',
    summary: 'Karting, F4, F3, F2, super licenza, punti, età, costi e ruolo di accademie e scuderie: come si diventa pilota di F1, con ordini di grandezza e calcoli semplici.',
    objectives: ['Descrivere la scala delle categorie dal karting alla F1', 'Spiegare i requisiti della super licenza (punti, età)', 'Valutare costi, selezione e alternative con ordini di grandezza'],
    prereq: ['f1-fia-promotore-costruttori'],
    pages: [
      { h: 'La scala delle categorie', b: `Non esiste una via unica, ma il percorso più comune è questo.

1. **Karting**: si comincia presto, intorno ai **6–8 anni**. Il kart insegna controllo della vettura, traiettorie, sorpassi, gestione della pressione e della gara a contatto. Quasi tutti i piloti di F1 hanno un passato nel karting.
2. **Formula 4**: prime monoposto a ruote scoperte, dai **15 anni** (limite di età minimo).
3. **Formula 3** (campionato FIA di F3 dal 2019): vetture più veloci, con ali e aerodinamica, in gare spesso nel weekend di F1.
4. **Formula 2** (dal 2017, evoluzione della GP2): ultimo gradino prima della F1, con auto uguali per tutti (monomarca) e gare nel weekend dei Gran Premi.
5. **Formula 1**.

> Ordine di grandezza: **20–22 posti** al mondo in F1, a fronte di migliaia di giovani nei kart.

Le categorie di accesso sono quasi sempre **monomarca**: tutti hanno la stessa vettura, quindi si valuta il pilota più che la macchina. Prima del 2010 la scala era diversa (per esempio Formula 3000, GP2): i nomi cambiano, il principio rimane.

Alcuni piloti arrivano da altre strade (serie nazionali, endurance, Formula E).` },
      { h: 'La super licenza', b: `Per correre in F1 serve una **super licenza** FIA. Requisiti principali (valori da verificare nel regolamento aggiornato):

- avere almeno **18 anni** (regola introdotta dal 2016, dopo l'esordio di Verstappen a 17 anni);
- aver accumulato **40 punti** nei tre anni precedenti, ottenuti piazzandosi bene in campionati riconosciuti (F2, F3, F4 e altri);
- aver percorso un chilometraggio minimo con una vettura di F1 recente (**100 km**);
- superare un esame sul regolamento e avere una licenza e un'idoneità medica;
- patente di guida valida.

Il sistema dei punti: per esempio, il campione di **Formula 2** ottiene **40 punti** da solo, quindi basta per la super licenza.

> Max Verstappen esordì in F1 nel 2015 a **17 anni e 166 giorni**: il più giovane di sempre. Nel 2016, a 18 anni e 228 giorni, fu il più giovane vincitore.

Dopo l'esordio di Verstappen, la FIA impose il limite di 18 anni.

La super licenza non garantisce un posto: serve un team che ti ingaggi.` },
      { h: 'Esempi di percorsi', b: `Alcune storie, usate per capire che le strade possono variare.

- **Ayrton Senna**: dal karting (campione sudamericano) alla Formula Ford e alla F3 britannica, campione nel **1983**; esordio in F1 nel **1984** con la Toleman.
- **Lewis Hamilton**: karting, poi Formula Renault, F3 Euro Series, **GP2 campione nel 2006**; esordio in F1 nel **2007** con la McLaren. Fu sostenuto fin dai 13 anni dal programma giovani McLaren.
- **Charles Leclerc**: karting, GP3 campione nel **2016** e F2 campione nel **2017**; esordio in F1 nel 2018.
- **George Russell**: campione GP3 nel **2017** e campione F2 nel **2018**; esordio in F1 nel 2019.
- **Michael Schumacher**: karting, poi Formula Ford e F3 tedesca; dopo l'esperienza nel programma giovani di Mercedes nelle vetture sport, esordì nel **1991** con la Jordan.

> Un percorso tipico richiede **8–12 anni** dal primo kart alla F1, ma con molte variabili.

Il filo comune: risultati costanti, supporto economico e tecnico, e qualcuno che crede nel pilota (famiglia, team, accademia).` },
      { h: 'Accademie e scuderie', b: `Molte squadre e costruttori hanno **programmi giovani**: scelgono ragazzi promettenti, li sostengono nei campionati minori e li preparano alla F1.

Esempi:

- **Red Bull Junior Team** (attivo dai primi anni 2000);
- **Ferrari Driver Academy** (dal 2009);
- **Mercedes** (programma giovani);
- **McLaren**, **Alpine** e **Williams** con propri programmi.

Cosa offrono:

- **supporto economico** parziale o totale;
- **formazione**: preparazione fisica, mentale, tecnica, uso del simulatore;
- **contatto con il team**: giri di test, giornate in fabbrica;
- **orientamento** e accompagnamento nella scelta della categoria.

Contro:

- non c'è garanzia di arrivare in F1;
- il pilota può essere **sostituito** se i risultati calano;
- molti giovani restano senza sostegno e dipendono dalle famiglie e dagli sponsor.

> Se i posti sono 20 e le accademie seguono, per esempio, 5 piloti ciascuna, la competizione resta fortissima: i **posti in F1** sono pochi e occupati per anni.

Per le squadre i programmi giovani sono anche una strategia di **scouting** a lungo termine.` },
      { h: 'I costi', b: `Il motorsport è costoso. Ordini di grandezza **molto approssimativi** per una stagione (dipendono da paese, squadra e categoria):

- **Karting** di alto livello: dalle **decine di migliaia** di euro all'anno;
- **Formula 4**: dell'ordine di **cento–duecentocinquantamila** euro;
- **Formula 3**: da circa **mezzo milione** di euro in su;
- **Formula 2**: dell'ordine di **uno o più milioni**, spesso 2 o più.

Calcolo ipotetico, su un percorso: karting 100 000 + F4 150 000 + F3 700 000 + F2 2 000 000 = **2 950 000 euro** (cioè 2 950 in migliaia).

> Se si fanno due stagioni di F4 (2 × 150 000) e una di F3 (700 000), la somma è **1 000 000** euro.

Per questo molti piloti hanno **sponsor**, supporto di accademie o di famiglie facoltose. Un pilota che porta denaro al team viene detto «**pay driver**» (talvolta in senso limitativo): oggi le risorse economiche aiutano ma i risultati restano centrali, e in F1 i posti sono pochi.

Il **budget cap** non riguarda i piloti: i loro compensi sono esclusi dal tetto di spesa.` },
      { h: 'Il ruolo dei dati e dell’allenamento', b: `Il pilota moderno è un **atleta** e un **tecnico**.

- **Allenamento fisico**: collo, tronco e core per sopportare accelerazioni laterali di diversi g; resistenza cardiovascolare per gare di circa 90 minuti in cabina molto calda.
- **Preparazione mentale**: concentrazione sostenuta, gestione della pressione, routine di gara.
- **Simulatore**: molti piloti passano ore in simulatore per imparare circuiti e testare assetti.
- **Dati**: leggere la telemetria, capire le differenze con il compagno, dare feedback utili agli ingegneri.
- **Media e comunicazione**: interviste, social, gestione dell'immagine.

> L'esperienza nelle categorie minori serve a imparare **come lavorare con gli ingegneri**, non solo a guidare veloce.

Un pilota molto veloce ma poco preciso nel feedback tecnico rischia di non aiutare lo sviluppo dell'auto.

Molti ex piloti diventano poi ingegneri, commentatori, istruttori o riserve nei team.` },
      { h: 'Altre strade e ruoli vicini ai piloti', b: `Non tutti i giovani arrivano a un volante di F1, ma vi sono altri ruoli.

- **Pilota di riserva e di sviluppo**: lavora al simulatore e sostituisce un titolare in caso di necessità.
- **Pilota di test**: oggi limitato dai regolamenti.
- **Serie parallele**: endurance, Formula E, IndyCar, campionati GT.
- **F1 Academy** (dal 2023): campionato per giovani pilote, parte del percorso verso le categorie superiori.

> Il numero di piloti di F1 è piccolo, ma il numero di professionisti attorno a loro è molto più grande (ingegneri, meccanici, analisti, preparatori).

Per chi non diventa pilota, il motorsport offre molte carriere; le vedremo nella prossima lezione.

In sintesi, il percorso richiede **talento**, **costanza**, **supporto** e un pizzico di **fortuna** nel momento in cui si apre un posto.

Quando consigli a un giovane, ricorda che l'obiettivo di diventare pilota di F1 è raro: coltivare competenze in ingegneria e dati fornisce alternative solide.` },
      { h: 'Numeri e sintesi', b: `Riepilogo con calcoli.

- Posti: **20** (10 squadre × 2) fino al 2025, **22** con 11 squadre.
- Età minima: **18 anni**; punti per la super licenza: **40** in 3 anni.
- Verstappen: debutto a **17 anni e 166 giorni**; prima vittoria a **18 anni e 228 giorni**.
- Costo ipotetico del percorso: **2 950 000 euro** (karting + F4 + F3 + F2).
- Se 1 000 giovani competono seriamente per 20 posti: **2%** (20 / 1 000).

Scala delle categorie:

| Livello | Categoria |
|---|---|
| Base | Karting |
| 1 | Formula 4 |
| 2 | Formula 3 |
| 3 | Formula 2 |
| Vertice | Formula 1 |

> Il numero 1 000 è un'ipotesi: serve per esercitare la proporzione, non per dire quanti siano i pretendenti reali.

Aggiornamenti: regole di età e di punti possono cambiare; consulta sempre il regolamento FIA attuale.` }
    ],
    exercises: [
      order('Ordina la scala delle categorie', ['Karting', 'Formula 4', 'Formula 3', 'Formula 2', 'Formula 1'], 'Dal karting alla F1.'),
      mc('Qual è l’età minima per la super licenza?', ['18 anni', '16 anni', '21 anni', '14 anni'], 0, 'Regola in vigore dal 2016.'),
      fill('Quanti punti servono per la super licenza (in 3 anni)?', ['40'], 'Il sistema richiede 40 punti.'),
      mc('Che cosa vuol dire categoria monomarca?', ['Tutti i piloti hanno la stessa vettura', 'Ogni squadra costruisce la propria', 'Si gareggia in monoposto singola', 'Si gareggia senza gomme'], 0, 'Il confronto è soprattutto sul pilota.'),
      fill('Verstappen esordì a 17 anni e quanti giorni (il 15 marzo 2015, nato il 30 settembre 1997)?', ['166'], 'Dal 30/9/2014 al 15/3/2015 sono 166 giorni.'),
      mc('Che titolo vinse Hamilton nel 2006?', ['Campione GP2', 'Campione F3 britannica', 'Campione di F1', 'Campione F4'], 0, 'Esordì in F1 nel 2007.'),
      fill('Costo ipotetico: karting 100 000 + F4 150 000 + F3 700 000 + F2 2 000 000. Totale in migliaia di euro?', ['2950', '2.950', '2 950'], 'Somma 2 950 000 euro = 2 950 migliaia.'),
      mc('Quale programma giovani appartiene alla Red Bull?', ['Red Bull Junior Team', 'F1 Academy', 'Ferrari Driver Academy', 'GPDA'], 0, 'La Ferrari ha la Ferrari Driver Academy.'),
      mc('Che cos’è la F1 Academy (dal 2023)?', ['Un campionato per giovani pilote', 'Una scuola di meccanica', 'Un programma di test dei motori', 'Una categoria di endurance'], 0, 'È parte del percorso verso le categorie superiori.'),
      mc('Chi è un pilota di riserva?', ['Un pilota pronto a sostituire un titolare e che lavora al simulatore', 'Un pilota che non ha mai gareggiato', 'Il capo meccanico', 'Un commissario'], 0, 'Dà supporto alle squadre.'),
      fill('Se 1 000 giovani competono per 20 posti (ipotesi), quale percentuale?', ['2', '2%'], '20 / 1 000 = 0,02.'),
      mc('Perché i costi nelle categorie minori sono rilevanti?', ['Servono vetture, trasferte, ingegneri e test, spesso finanziati da famiglie e sponsor', 'Perché i piloti sono pagati molto', 'Perché non servono sponsor', 'Perché le gare sono rare'], 0, 'Il sostegno economico è una barriera concreta.')
    ],
    test: [
      fill('Quanti anni passano fra i 15 anni (F4) e i 18 (super licenza)?', ['3'], '18 − 15 = 3.'),
      mc('Con quale titolo Senna esordì in F1 nel 1984?', ['Dopo la F3 britannica 1983', 'Dopo la GP2', 'Dopo la F2', 'Dopo la Formula E'], 0, 'Esordì con la Toleman.'),
      mc('Perché la FIA introdusse il limite dei 18 anni?', ['Dopo l’esordio di Verstappen a 17 anni, per una maggiore maturità', 'Per ridurre i costi', 'Perché le auto erano più lente', 'Per ragioni fiscali'], 0, 'Fu deciso nel 2016.'),
      fill('Due stagioni di F4 a 150 000 euro ciascuna e una di F3 a 700 000. Totale in migliaia di euro?', ['1000', '1.000', '1 000'], '300 000 + 700 000 = 1 000 000.'),
      mc('Che cosa si intende per pay driver?', ['Un pilota che porta sponsor o denaro alla squadra', 'Un pilota pagato dalla FIA', 'Un pilota ritirato', 'Un pilota di test'], 0, 'Il termine è spesso usato in senso limitativo.'),
      mc('Cosa offre di solito un’accademia piloti?', ['Supporto economico, formazione e contatto con il team', 'Un posto garantito in F1', 'Un contratto a vita', 'Solo corsi di guida stradale'], 0, 'Non c’è garanzia di arrivare alla F1.'),
      mc('Perché il karting è considerato fondamentale?', ['Insegna controllo, traiettorie e sorpassi con costi inferiori alle monoposto', 'Perché le auto sono uguali', 'Perché è obbligatorio per legge', 'Perché si guadagna molto'], 0, 'Quasi tutti i piloti partono da lì.'),
      mc('Qual è il numero di posti in F1 con 10 squadre?', ['20', '10', '30', '40'], 0, '10 squadre × 2 vetture.')
    ]
  });

  C.addTopic({
    id: 'f1-carriere-dietro-le-quinte', subject: 'f1', stage: 'L8', minutes: 14,
    title: 'Carriere dietro le quinte',
    summary: 'Ingegneria (aerodinamica, meccanica, elettronica, dati), analisti, operazioni, media: ruoli, studi, competenze e come prepararsi.',
    objectives: ['Elencare i principali profili professionali di una squadra e le competenze richieste', 'Collegare percorsi di studio e progetti pratici (Formula Student, dati) ai ruoli', 'Costruire un piano di studio con calcoli di ore e crediti'],
    prereq: ['f1-la-strada-verso-la-formula-1'],
    pages: [
      { h: 'Una carriera in F1 non passa solo dal volante', b: `Dietro ogni pilota ci sono centinaia di persone. Le **carriere** possibili sono molte, anche non tecniche.

- **Ingegneria**: aerodinamica, meccanica, materiali, dinamica del veicolo, power unit, elettronica, software.
- **Dati e strategia**: analisti, data engineer, specialisti di simulazione e strategia.
- **Operazioni**: meccanici, logistica, gestione degli eventi, qualità.
- **Business**: finanza, legale, acquisti, sponsorizzazioni, marketing.
- **Media e comunicazione**: giornalismo, video, social media, relazioni con la stampa.
- **IT e cybersicurezza**: infrastrutture, cloud, sicurezza dei dati.

> Squadre da centinaia o oltre mille persone significano molti profili diversi: la F1 non è una sola professione.

Gli stipendi e le condizioni dipendono da squadra, ruolo e paese: non diamo cifre perché variano molto.

Le condizioni di lavoro sono spesso **intense**: orari lunghi nei periodi di sviluppo e trasferte frequenti (circa 24 gare l'anno per il personale di pista).` },
      { h: 'Ingegneria aerodinamica e meccanica', b: `L'**ingegnere aerodinamico** analizza i flussi, progetta ali, fondo e carrozzeria con CFD e galleria del vento. Competenze: fluidodinamica, matematica, programmazione, uso di software di simulazione.

L'**ingegnere meccanico** progetta telaio, sospensioni, trasmissione e sistemi. Competenze: meccanica dei solidi, materiali, CAD, analisi strutturale (FEA), tolleranze e produzione.

L'**ingegnere dei materiali compositi** studia la fibra di carbonio e i processi di cottura.

La **dinamica del veicolo** studia come l'auto si comporta in curva e nelle accelerazioni: ammortizzatori, barre antirollio, bilanciamento.

> Libri di riferimento (per approfondire): *Race Car Vehicle Dynamics* di Milliken e Milliken; *Competition Car Aerodynamics* di Simon McBeath; *Race Car Aerodynamics* di Joseph Katz.

Percorsi di studio tipici: ingegneria meccanica, aerospaziale, dell'autoveicolo; in Italia sono noti i corsi di diversi **politecnici** e università, con specializzazioni in veicolo e motorsport; all'estero esistono corsi dedicati al motorsport.

Un'esperienza molto apprezzata è la partecipazione a **competizioni studentesche** (Formula Student / Formula SAE).` },
      { h: 'Elettronica, power unit e software', b: `Le auto moderne sono piene di **elettronica**: centralina, sensori, sistemi di controllo, batterie e motori elettrici.

- **Ingegnere elettronico**: progetta schede, cablaggi, sensori e sistemi di alimentazione.
- **Ingegnere del power unit**: motore termico, turbo, parte ibrida (MGU-K, batteria).
- **Software e controlli**: algoritmi di gestione dell'energia, simulazioni in tempo reale, strumenti per i piloti e gli ingegneri.
- **Sistemi di telemetria**: acquisizione e trasmissione di dati dalla vettura ai box.

Competenze utili: elettrotecnica, elettronica di potenza, controlli automatici, programmazione (C/C++, Python), modellazione in MATLAB/Simulink.

> Una monoposto ha dell'ordine di **centinaia di sensori** e genera una quantità di dati che deve essere elaborata in tempo quasi reale.

Percorsi universitari: ingegneria elettronica, elettrica, informatica, automazione, ingegneria dei sistemi.

La differenza con altri settori è la **velocità**: i cicli di sviluppo sono brevissimi e il software può cambiare fra una sessione e l'altra.` },
      { h: 'Dati, analisti e strategia', b: `La F1 è uno sport di **dati**. Gli **analisti** trasformano numeri in decisioni.

- **Analista di prestazioni**: confronta i giri dei piloti, individua dove si guadagna o si perde tempo.
- **Data engineer**: costruisce l'infrastruttura per raccogliere, pulire e archiviare i dati.
- **Stratega e simulazione**: modelli di gara con probabilità (safety car, degrado delle gomme), simulazioni Monte Carlo.
- **Scienziato dei dati / machine learning**: previsioni su usura, tempi sul giro, comportamento delle gomme.

Strumenti: **Python** (pandas, NumPy), **SQL**, statistica, visualizzazione dei dati. Esiste una libreria open source, **FastF1**, che permette di analizzare dati pubblici di tempi e telemetria delle gare.

> Esercizio pratico: scarica i tempi di una gara, calcola la media dei giri per ogni pilota e confrontala con il passo dei migliori; costruisci un grafico del degrado delle gomme.

Competenze di base: statistica (media, varianza, regressione), probabilità, programmazione, capacità di comunicare i risultati.

Percorsi universitari: statistica, matematica, informatica, fisica, ingegneria gestionale e dei dati.` },
      { h: 'Operazioni, logistica, media e business', b: `Non solo ingegneri.

**Operazioni e logistica**: organizzare il trasporto di auto, attrezzature e persone in tutto il mondo, pianificare gli spazi dei box, gestire dogane e tempi. Competenze: gestione, organizzazione, lingue.

**Meccanici**: formazione tecnica (istituti professionali, apprendistato, esperienza in officine e in categorie minori). Lavoro manuale preciso, sotto pressione.

**Media e comunicazione**: giornalisti, videomaker, fotografi, social media manager, press officer. Competenze: scrittura, linguaggi audiovisivi, conoscenza dello sport.

**Business**: marketing, rapporti con gli sponsor, finanza (controllo del budget cap), diritto (contratti e regolamenti).

> Stesse regole di preparazione: studi solidi, esperienza pratica (stage, progetti), rete di contatti e candidature mirate.

La F1 è anche un mondo dove i **soft skills** (comunicazione, lavoro di squadra, gestione dello stress) sono decisivi.

Chi non lavora direttamente in una squadra può farlo in aziende fornitrici, in società che organizzano gli eventi o nei media.` },
      { h: 'Percorsi di studio e numeri', b: `Un piano di studi tipico in Italia: **laurea triennale** (180 CFU) + **laurea magistrale** (120 CFU) = **300 CFU**.

Un CFU corrisponde a circa **25 ore** di lavoro complessivo (lezioni, studio, laboratori):

> 180 CFU × 25 ore = **4 500 ore**; 300 CFU × 25 = **7 500 ore**. Per anno: 300 / 5 = **60 CFU**.

Oltre alla laurea contano:

- **Formula Student / Formula SAE**: competizioni nate negli Stati Uniti nel **1981** dove studenti progettano e costruiscono una piccola monoposto; ottimo banco di prova per lavoro di squadra e budget limitato;
- **stage** e tesi in aziende di settore;
- **progetti personali** (analisi di dati, simulazioni, programmi);
- **lingue**, in particolare l'inglese tecnico;
- **competenze trasversali**.

> Altri settori preparano bene: aerospaziale, difesa, automotive, energia. Molti professionisti della F1 arrivano da lì.

Non esiste una ricetta unica: curiosità, metodo e costanza contano più del nome del corso di laurea.` },
      { h: 'Strategie di studio e formazione continua', b: `Come prepararsi in modo efficace.

1. **Basi solide**: matematica (analisi, algebra lineare, probabilità) e fisica (meccanica, termodinamica, fluidi).
2. **Strumenti**: programmazione (Python), CAD, fogli di calcolo, strumenti di simulazione.
3. **Progetti**: costruire cose reali (un kart elettrico, un'analisi dati, una simulazione di strategia) vale più di un voto.
4. **Curiosità attiva**: leggere regolamenti FIA, seguire gare con la telemetria, capire perché una scelta funziona.
5. **Rete e comunicazione**: associazioni studentesche, conferenze, contatti con ex studenti.
6. **Formazione continua**: corsi online, master, certificazioni.

Pianificazione ipotetica: 12 CFU in un semestre per una materia = 12 × 25 = **300 ore** di lavoro; su 15 settimane sono 20 ore a settimana.

> Se un ingegnere di pista partecipa a 24 gare di 4 giorni ciascuna (con viaggio), trascorre **96 giorni** l'anno in trasferta: va considerato nelle scelte di vita.

La preparazione richiede **equilibrio**: sacrificare tutto per un'idea rischia di bruciare l'entusiasmo; costruire competenze trasferibili offre alternative.` },
      { h: 'Come candidarsi e restare realisti', b: `Qualche consiglio pratico.

- **Curriculum e portfolio**: progetti concreti, anche piccoli, con descrizione chiara dei risultati.
- **Candidature mirate**: leggere le offerte, adattare la lettera al ruolo.
- **Inizia in piccolo**: squadre minori, categorie di formazione, fornitori, aziende collegate.
- **Colloqui**: preparati su tecnica di base, problem solving e capacità di lavorare in squadra.
- **Reti**: partecipare a eventi, concorsi, gruppi di studio.

Realismo: la concorrenza è alta. Le squadre selezionano con molta cura, ma le competenze acquisite sono utili in molti settori (aerospaziale, auto, energia, tecnologie).

> Un percorso solido ha un piano B: se non arrivi in F1, la tua competenza in dati o ingegneria vale in molti altri campi.

Per ricapitolare i numeri: 180 CFU × 25 h = 4 500 h; 300 CFU = 5 anni; 24 gare × 4 giorni = 96 giorni.

La F1 premia le persone che uniscono rigore tecnico, passione e capacità di collaborare sotto pressione.` }
    ],
    exercises: [
      fill('180 CFU, 25 ore ciascuno: quante ore di lavoro complessivo?', ['4500', '4.500', '4 500'], '180 × 25 = 4 500.'),
      fill('Laurea triennale (180 CFU) più magistrale (120 CFU): quanti CFU totali?', ['300'], '180 + 120 = 300.'),
      mc('Che cos’è la Formula Student / Formula SAE?', ['Una competizione dove gli studenti progettano e costruiscono una monoposto', 'Un campionato professionistico', 'Un corso di guida', 'Una serie di rally'], 0, 'Nata negli Stati Uniti nel 1981.'),
      mc('Quale linguaggio è molto usato nell’analisi dei dati di gara?', ['Python', 'COBOL', 'Visual Basic 6', 'Pascal'], 0, 'Con librerie come pandas e NumPy.'),
      mc('Che cos’è FastF1?', ['Una libreria open source per analizzare dati pubblici di gara', 'Un videogioco', 'Una squadra', 'Un tipo di gomma'], 0, 'Permette di scaricare tempi e telemetria.'),
      mc('Chi studia i flussi d’aria sulla vettura?', ['L’ingegnere aerodinamico', 'Il capo meccanico', 'L’addetto stampa', 'Il responsabile marketing'], 0, 'Usa CFD e galleria del vento.'),
      mc('Quale profilo costruisce l’infrastruttura per raccogliere e archiviare i dati?', ['Data engineer', 'Pilota di riserva', 'Meccanico', 'Commissario'], 0, 'Prepara i dati agli analisti.'),
      fill('Un ingegnere partecipa a 24 gare di 4 giorni ciascuna: quanti giorni in trasferta?', ['96'], '24 × 4 = 96.'),
      mc('Chi si occupa di trasporto di vetture, attrezzature e persone?', ['Operazioni e logistica', 'Aerodinamica', 'Strategia', 'Comunicazione'], 0, 'È un reparto fondamentale.'),
      mc('Quale formazione prepara i meccanici?', ['Istituti tecnici e professionali, apprendistato ed esperienza in officina', 'Solo un dottorato', 'Solo studi umanistici', 'Nessuna formazione'], 0, 'Il lavoro manuale preciso si impara con pratica.'),
      mc('Perché la partecipazione a Formula Student è apprezzata?', ['Mostra capacità di lavoro di squadra e progetto con budget limitato', 'Perché è obbligatoria', 'Perché dà un titolo mondiale', 'Perché si guida un’auto di F1'], 0, 'È una prova pratica.'),
      order('Ordina un percorso di preparazione', ['Basi di matematica e fisica', 'Programmazione e strumenti', 'Progetti pratici', 'Stage o tesi in azienda', 'Candidatura mirata'], 'Dalle basi alla candidatura.')
    ],
    test: [
      fill('Quanti CFU all’anno in un percorso di cinque anni da 300 CFU?', ['60'], '300 / 5 = 60.'),
      mc('Quale profilo progetta schede, cablaggi e sensori?', ['Ingegnere elettronico', 'Ingegnere aerodinamico', 'Addetto stampa', 'Cuoco'], 0, 'Lavora con centraline, sensori e alimentazione.'),
      mc('Perché è utile la statistica a uno stratega?', ['Per valutare probabilità ed effetti di scelte sotto incertezza', 'Per costruire il motore', 'Per scegliere il colore', 'Per ottenere la patente'], 0, 'La gara è piena di incertezza.'),
      fill('12 CFU × 25 ore: quante ore di lavoro?', ['300'], '12 × 25 = 300.'),
      mc('Quale libro tratta la dinamica del veicolo da competizione?', ['Race Car Vehicle Dynamics (Milliken)', 'Il Gattopardo', 'I promessi sposi', 'Guida galattica'], 0, 'Testo classico di riferimento.'),
      mc('Perché i progetti personali contano?', ['Dimostrano competenze reali e iniziativa', 'Sostituiscono la laurea', 'Danno un titolo FIA', 'Servono a pagare le tasse'], 0, 'Un portfolio mostra cosa sai fare.'),
      mc('Quali settori forniscono professionisti alla F1?', ['Aerospaziale, auto, energia e difesa', 'Solo il turismo', 'Solo la scuola', 'Solo la moda'], 0, 'Le competenze sono trasferibili.'),
      mc('Quale caratteristica rende il lavoro in F1 impegnativo?', ['Orari intensi e trasferte frequenti', 'Poca varietà di compiti', 'Assenza di tecnologia', 'Nessuna scadenza'], 0, 'I cicli di sviluppo sono rapidi.')
    ]
  });

  C.addTopic({
    id: 'f1-come-sistema', subject: 'f1', stage: 'L8', minutes: 14,
    title: 'La F1 come sistema: tecnologia, ambiente, pubblico',
    summary: 'Che cosa passa dalla F1 alle auto stradali, impatto economico e ambientale, sostenibilità, pubblico e media: una visione d’insieme con ordini di grandezza.',
    objectives: ['Distinguere trasferimento tecnologico reale e slogan', 'Leggere i numeri dell’impatto ambientale e delle strategie di riduzione', 'Collegare economia locale, pubblico e media'],
    prereq: ['f1-carriere-dietro-le-quinte'],
    pages: [
      { h: 'Un laboratorio, con prudenza', b: `La F1 è spesso definita un «**laboratorio**» per l'auto stradale. In parte è vero, in parte è uno slogan: vale la pena distinguere.

Ciò che arriva davvero dalle corse alle auto di serie:

- **materiali** e lavorazioni (fibra di carbonio, leghe leggere);
- **cambi semiautomatici con comandi al volante** e gestione elettronica;
- **sistemi ibridi** e recupero di energia;
- **telemetria** e diagnostica;
- **sicurezza**: strutture assorbenti e cellule rigide.

Cosa **non** si trasferisce direttamente: una monoposto non è un'auto di serie. Costi, durata, rumore e comfort sono completamente diversi.

> Il trasferimento avviene soprattutto in **tre modi**: tecnologie (un componente), metodi (processi di simulazione e test) e persone (ingegneri che passano a lavorare in altri settori).

Anche altri settori traggono vantaggio: aerospaziale, sanità, energia.

Una regola di buon senso: quando leggi «ispirato alla F1», chiediti **che cosa** è stato trasferito e **con quali modifiche**.` },
      { h: 'Esempi concreti di trasferimento', b: `Alcuni esempi con date.

| Anno | Tecnologia in F1 | Applicazione |
|---|---|---|
| 1981 | Monoscocca in fibra di carbonio (McLaren MP4/1) | Carbonio nelle auto sportive e componenti leggeri |
| 1989 | Cambio semiautomatico a leve (Ferrari 640) | Dal 1997 sulla Ferrari F355 F1, primo modello stradale con paddle |
| 1992 | Sospensioni attive (Williams FW14B) | Sospensioni elettroniche adattive |
| 2009 | KERS | Ibridi sportivi di serie (come LaFerrari, McLaren P1, Porsche 918, dal 2013) |
| 2014 | Power unit ibrido ad alta efficienza | Ricerca su motori e gestione dell'energia |

> L'efficienza termica del motore di F1 supera il 50%, mentre un motore stradale a benzina è tipicamente intorno al 30–40%. Con un riferimento ipotetico del 35%, la differenza è di **15 punti percentuali**.

Altri esempi: dopo aver studiato le soste ai box della Ferrari, l'ospedale **Great Ormond Street** di Londra (2005) rivide le procedure di consegna dei pazienti dalla sala operatoria alla terapia intensiva; è un caso riportato come ispirazione di **metodo**.

Non tutto è vero: molte innovazioni arrivano dall'industria stradale alla F1, non viceversa.` },
      { h: 'Impatto ambientale: da dove arrivano le emissioni', b: `La F1 ha pubblicato una valutazione della propria **impronta di carbonio**: per l'anno **2018** circa **256 000 tonnellate di CO₂ equivalente** (ordine di grandezza di un quarto di milione).

La scoperta più interessante è dove nascono:

- **trasporto di merci** (logistica): circa il **45%**;
- **spostamenti del personale**: circa il **28%**;
- **strutture** (sedi, fabbriche): circa il **19%**;
- eventi e trasmissioni: la quota restante;
- **power unit in pista**: **sotto l'1%** (dato indicativo, circa 0,7%).

> Con 250 000 t come ordine di grandezza: logistica 45% = **112 500 t**; power unit 0,7% = **1 750 t**.

Il messaggio: concentrare l'attenzione solo sul motore trascura la parte più grande dell'impronta, cioè **trasporti e logistica**.

La F1 ha dichiarato l'obiettivo di essere **neutrale in termini di emissioni nette entro il 2030**. L'obiettivo è un impegno, non un risultato già ottenuto: occorre verificare, nel tempo, i progressi con dati indipendenti.

Per un confronto corretto serve conoscere il **perimetro** dei calcoli (quali attività sono incluse).` },
      { h: 'Strategie di riduzione', b: `Come ridurre l'impatto?

- **Logistica**: calendario organizzato per aree geografiche, minore uso di aerei, trasporto marittimo e ferroviario dove possibile, attrezzatura più leggera e condivisa.
- **Viaggi del personale**: **centri operativi remoti** per svolgere funzioni dalla sede, riducendo le persone in trasferta.
- **Energia**: fabbriche e circuiti con fonti rinnovabili, efficienza energetica.
- **Carburanti**: benzina **E10** dal 2022 e, dal 2026, carburanti **avanzati sostenibili** per i power unit.
- **Eventi**: riduzione dei rifiuti plastici, trasporti pubblici per gli spettatori.

Calcolo ipotetico: se la logistica pesa 112 500 t e si riduce del 20%, il risparmio è 112 500 × 0,20 = **22 500 t**.

> Per gara: 112 500 t / 24 gare ≈ **4 690 t** di logistica a evento (ordine di grandezza, ipotetico).

Un carburante sostenibile non elimina le emissioni all'uscita dallo scarico, ma ne riduce l'impatto **netto** se la materia prima è rinnovabile o riciclata: va valutato l'intero ciclo di vita.

Anche qui la regola è chiedere i **dati** e il **metodo di calcolo**.` },
      { h: 'Impatto economico', b: `Un Gran Premio genera attività economica per la città e la regione ospitante.

- **Turismo**: hotel, ristoranti, trasporti. Il pubblico in tribuna arriva da altre regioni e paesi.
- **Lavoro**: personale temporaneo per l'evento, commissari, sicurezza, ospitalità.
- **Infrastrutture**: circuiti e servizi.
- **Immagine**: promozione internazionale del territorio.

Le stime dell'impatto variano molto da studio a studio (da **decine a centinaia di milioni** di dollari per evento), perché dipendono da cosa si include (spesa dei turisti, costi pubblici, spostamenti di spesa da altre attività).

Un'altra dimensione è la presenza di **distretti industriali** attorno ai team: in Inghilterra la cosiddetta «**Motorsport Valley**», in Italia l'area dell'Emilia dove hanno sede scuderie e aziende collegate. Qui l'impatto è fatto di **lavoro qualificato** e di competenze tecniche.

> Esempio: se un evento attira 100 000 visitatori che spendono in media 500 euro, la spesa è 50 milioni di euro (ipotetica). Una parte non è «nuova»: va valutato che cosa sarebbe successo senza l'evento.

Costi pubblici e benefici vanno confrontati con rigore.` },
      { h: 'Pubblico e media', b: `La F1 è cambiata anche nel modo in cui è raccontata.

- **Televisione e streaming**: le gare sono trasmesse in tutto il mondo; sono cresciute le piattaforme digitali proprie.
- **Documentari**: la serie *Drive to Survive* (Netflix, dal **2019**) ha avvicinato nuovo pubblico, raccontando storie di piloti e squadre.
- **Social media**: contenuti brevi, dietro le quinte, interazione con i tifosi.
- **Nuove gare**: negli Stati Uniti si corre ad **Austin** (dal 2012), a **Miami** (dal 2022) e a **Las Vegas** (dal 2023): tre appuntamenti.
- **Esperienze**: hospitality, eventi nelle città.

Come tutti i media, la rappresentazione include **semplificazioni e drammatizzazioni**: la competenza consiste nel distinguere racconto e dati.

> Più il pubblico è vario (giovani, donne, nuovi paesi), più cresce il valore commerciale dello sport, e più sono interessanti nuove professioni (contenuti, dati, ospitalità).

Questa dinamica interagisce con la sostenibilità: più eventi e viaggi aumentano l'impronta; l'equilibrio è una scelta di sistema.` },
      { h: 'Il sistema nel suo insieme', b: `Mettiamo insieme i pezzi. La F1 è un **sistema** dove si influenzano a vicenda:

- **Tecnica**: regole, ingegneria, sicurezza, innovazione.
- **Economia**: ricavi, budget cap, premi, sponsor.
- **Governance**: FIA, gestore commerciale, squadre.
- **Persone**: piloti, ingegneri, meccanici, analisti, media.
- **Ambiente**: emissioni, carburanti, logistica.
- **Pubblico**: tifosi, televisioni, social.

Una decisione in un punto ha effetti altrove. Esempio: aggiungere gare aumenta ricavi e pubblico, ma anche costi, viaggi e impronta di carbonio; un cap più stringente riduce le spese ma limita lo sviluppo tecnologico.

> Pensare per sistemi significa chiedersi sempre: **chi guadagna, chi paga, che effetti collaterali ci sono, cosa misuro**.

Riassunto numerico: 256 000 t (2018), 45% logistica, <1% power unit, obiettivo 2030; efficienza termica >50%; 24 gare l'anno.

Con questa lezione si chiude il percorso di storia e organizzazione: nel livello L9 si va in profondità nella tecnica avanzata.` },
      { h: 'Come valutare un’affermazione sulla F1', b: `Una piccola lista di controllo per leggere articoli, post e dichiarazioni.

1. **Fonte**: è ufficiale (FIA, F1, team) o un commento?
2. **Data**: i regolamenti cambiano; verifica l'anno.
3. **Numeri**: sono ordini di grandezza, stime o dati certi? Qual è il perimetro?
4. **Confronto**: rispetto a che cosa (anno, categoria, altre auto)?
5. **Interessi**: chi trae vantaggio dall'affermazione?
6. **Causa ed effetto**: la correlazione non è causa.

Esercizio rapido:

> «La F1 inquina pochissimo perché le auto emettono meno dell'1%». Corretto? Il dato (circa 0,7%) riguarda la quota del *power unit in pista* nelle emissioni dell'intero campionato, non l'impatto totale del motorsport né quello di tutta l'industria.

Un lettore attento sa dire «**dipende da cosa si conta**».

La competenza che hai costruito in queste lezioni, fra storia, squadre ed economia, serve proprio a questo: leggere la F1 con spirito critico e curioso, senza perdere il piacere di seguirla.` }
    ],
    exercises: [
      mc('Quale monoscocca fu in carbonio nel 1981?', ['McLaren MP4/1', 'Lotus 25', 'Ferrari 640', 'Williams FW14B'], 0, 'Fu il primo monoscocca in fibra di carbonio.'),
      mc('Quale auto stradale fu la prima con paddle ispirati alla F1 (1997)?', ['Ferrari F355 F1', 'Fiat Panda', 'Ford Model T', 'Lotus Seven'], 0, 'Il cambio Ferrari derivò dall’esperienza in F1.'),
      fill('Motore F1 con efficienza termica del 50% contro un motore stradale del 35%: quanti punti percentuali di differenza?', ['15'], '50 − 35 = 15.'),
      mc('Entro quale anno la F1 ha dichiarato l’obiettivo di neutralità sulle emissioni nette?', ['2030', '2010', '2050', '2100'], 0, 'È un impegno dichiarato nel 2019.'),
      fill('Su 250 000 t di emissioni, la logistica pesa il 45%: quante tonnellate?', ['112500', '112.500', '112 500'], '250 000 × 0,45 = 112 500.'),
      mc('Che carburante è previsto dal 2026?', ['Carburanti avanzati sostenibili', 'Gasolio', 'Carbone', 'Solo elettrico'], 0, 'Il carburante è parte del nuovo regolamento.'),
      mc('Quando partì la serie Drive to Survive?', ['2019', '1999', '2009', '2024'], 0, 'È su Netflix.'),
      mc('Dove si corre oggi negli Stati Uniti?', ['Austin, Miami e Las Vegas', 'Solo New York', 'Solo Austin', 'Nessun luogo'], 0, 'Dal 2012, 2022 e 2023.'),
      mc('L’ospedale Great Ormond Street si ispirò a quale reparto della F1?', ['Ai pit stop della Ferrari', 'Ai commissari', 'Ai broadcaster', 'Ai meccanici motori'], 0, 'Fu un trasferimento di metodo.'),
      mc('Qual è la principale fonte delle emissioni della F1 secondo la valutazione del 2018?', ['Logistica e trasporto delle merci', 'Il power unit in pista', 'La illuminazione notturna', 'I pit stop'], 0, 'Circa il 45%.'),
      fill('Se la logistica (112 500 t) si riducesse del 20%: quante tonnellate si risparmiano?', ['22500', '22.500', '22 500'], '112 500 × 0,20 = 22 500.'),
      order('Ordina cronologicamente', ['1981 monoscocca in carbonio', '1989 cambio semiautomatico', '1992 sospensioni attive', '2014 power unit ibrido'], 'Da MP4/1 all’ibrido.')
    ],
    test: [
      fill('Se i power unit in pista pesassero lo 0,7% di 250 000 t: quante tonnellate?', ['1750', '1.750', '1 750'], '250 000 × 0,007 = 1 750.'),
      mc('Che cosa significa benzina E10?', ['Benzina con 10% di etanolo', 'Benzina a 10 ottani', 'Benzina senza additivi', 'Gasolio miscelato'], 0, 'È usata dal 2022.'),
      mc('Perché lo slogan «la F1 è un laboratorio» va usato con prudenza?', ['Una monoposto non è un’auto di serie e molto non si trasferisce direttamente', 'Perché non c’è ricerca', 'Perché non ci sono ingegneri', 'Perché non ci sono gare'], 0, 'I trasferimenti sono reali ma selettivi.'),
      mc('Che cos’è la Motorsport Valley?', ['Un distretto industriale in Inghilterra con molti team e fornitori', 'Un circuito', 'Una gomma', 'Un regolamento'], 0, 'Concentra competenze e aziende.'),
      mc('Quale città ospita un Gran Premio in Nevada dal 2023?', ['Las Vegas', 'Miami', 'Austin', 'Montréal'], 0, 'Fu inserita nel calendario 2023.'),
      fill('Se la logistica vale 112 500 t e i Gran Premi sono 24, quante tonnellate a evento (intero approssimato)?', ['4688', '4687', '4690', '4 688', '4 687', '4.688', '4687,5', '4687.5'], '112 500 / 24 = 4 687,5.'),
      mc('Qual è il rischio di un’affermazione isolata come «meno dell’1% delle emissioni»?', ['Può nascondere cosa è incluso o escluso nel calcolo', 'È sempre falsa', 'È sempre vera', 'Non ha rilevanza'], 0, 'Occorre sapere il perimetro dei dati.'),
      mc('Perché il sistema F1 richiede di pensare per compromessi?', ['Perché una decisione ha effetti su costi, ambiente, pubblico e tecnica', 'Perché i regolamenti sono immutabili', 'Perché c’è un solo attore', 'Perché non esistono numeri'], 0, 'Gli elementi sono interconnessi.')
    ]
  });

})(window.ST = window.ST || {});
