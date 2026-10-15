/* Cultura e abilità generali — L2 Geografia, mondo e orientamento: 9 lezioni. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;

  C.addTopic({
    id: 'cul-geografia-fisica', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Geografia fisica: rilievi, acque e tettonica',
    summary: 'Forme del rilievo, fiumi e bacini, mari e oceani, tettonica a placche in sintesi e ordini di grandezza da ricordare.',
    objectives: ['Distinguere montagne, colline, pianure e altopiani e spiegarne l’origine', 'Descrivere in sintesi la tettonica a placche e i suoi effetti (terremoti, vulcani, catene)', 'Usare ordini di grandezza per altezze, profondità e superfici'],
    pages: [
      { h: 'La Terra in cifre', b: `La Terra è quasi una sfera con un raggio medio di circa **6 371 km** e una circonferenza di circa **40 000 km**.

La sua superficie è di circa **510 milioni di km²**, di cui circa il **71%** coperta da acqua (soprattutto oceani) e circa il **29%** da terre emerse.

> Acqua: 510 × 0,71 ≈ **362 milioni di km²**
> Terre emerse: 510 × 0,29 ≈ **148 milioni di km²**

Le terre emerse non sono distribuite in modo uniforme: l’emisfero nord ne contiene molte più del sud. Le differenze di quota sono minuscole rispetto alle dimensioni del pianeta: vedremo che dalla cima più alta alla fossa più profonda ci sono circa 20 km, circa lo 0,3% del raggio.` },
      { h: 'Le forme del rilievo', b: `Si distinguono quattro grandi forme.

- **Montagne**: rilievi elevati e ripidi, in genere oltre i 600 m di quota; si dispongono spesso in **catene** (Alpi, Ande, Himalaya).
- **Colline**: rilievi più bassi e dolci, in genere sotto i 600 m.
- **Pianure**: terre piatte o poco ondulate, spesso create dai depositi dei fiumi (alluvionali), come la Pianura Padana.
- **Altopiani**: superfici elevate ma pianeggianti, incise da valli (esempio: l’altopiano tibetano).

I limiti numerici sono convenzioni e variano da paese a paese. Le montagne si classificano anche per origine: **da corrugamento** (scontro di placche: Alpi, Himalaya), **vulcaniche** (Etna), **da faglia** (blocchi sollevati). L’erosione di acqua, ghiaccio e vento le modella nel tempo.` },
      { h: 'Tettonica a placche: l’idea di base', b: `La crosta terrestre e la parte più rigida del mantello sono divise in grandi **placche** (circa sette maggiori e diverse minori), che si muovono lentamente, di qualche centimetro l’anno, sul mantello più plastico sottostante.

Ai bordi delle placche si hanno tre tipi di contatto:
- **divergente**: le placche si allontanano e nasce nuova crosta (dorsali oceaniche, come quella atlantica);
- **convergente**: si avvicinano; una può scendere sotto l’altra (**subduzione**) oppure si scontrano formando catene montuose;
- **trasforme**: scorrono di lato (faglia di San Andreas, in California).

> Se l’Atlantico si allarga di **2,5 cm l’anno**, in 100 milioni di anni la distanza cresce di 0,025 m × 10⁸ = 2,5 × 10⁶ m = **2 500 km**.

Sono tempi lunghissimi, ma spiegano come si formano gli oceani.` },
      { h: 'Terremoti e vulcani', b: `Quasi tutti i terremoti e molti vulcani si concentrano lungo i **bordi delle placche**. Il caso più noto è la **Cintura di fuoco** del Pacifico, dove molte placche convergono e si ha subduzione.

- Un **terremoto** è il rilascio improvviso di energia accumulata nelle rocce che si fratturano lungo una faglia. Il punto d’origine è l’**ipocentro**; il punto sulla superficie sopra di esso è l’**epicentro**.
- Un **vulcano** si forma dove il magma risale in superficie, per esempio sopra una zona di subduzione o lungo una dorsale.

La **magnitudo** misura l’energia del terremoto su scala logaritmica: tra un grado e il successivo l’ampiezza delle onde cresce di circa 10 volte e l’energia rilasciata di circa 32 volte.

> Magnitudo 7 contro 5: 32 × 32 ≈ **1 000** volte più energia.

L’Italia, al margine fra le placche africana ed euroasiatica, ha terremoti (Appennino) e vulcani (Etna, Vesuvio, Stromboli).` },
      { h: 'Fiumi e bacini', b: `Un **fiume** nasce da una sorgente, riceve **affluenti** e termina in un mare (**foce**) o in un lago. L’insieme del territorio che gli porta acqua è il **bacino idrografico**. Un fiume ha un **regime** che dipende da piogge, nevi e ghiacciai: i fiumi alpini hanno piene primaverili per lo scioglimento delle nevi.

Alla foce può formarsi un **delta** (depositi di sedimenti, es. Po, Nilo) o un **estuario** (apertura a imbuto, es. Tamigi).

Ordini di grandezza noti: il **Nilo** misura circa **6 650 km** e il Rio delle Amazzoni circa 6 400 km (la classifica dipende da dove si misurano sorgente e foce). Il **Po**, il più lungo fiume italiano, misura circa **650 km**.

La **portata** è il volume d’acqua che passa in una sezione nell’unità di tempo: un fiume con sezione di 200 m² e velocità di 1,5 m/s ha una portata di 200 × 1,5 = **300 m³/s**.` },
      { h: 'Mari, oceani e laghi', b: `Gli oceani sono tre grandi bacini collegati: **Pacifico** (il più vasto, circa un terzo della superficie terrestre), **Atlantico** e **Indiano**, a cui si aggiungono l’Artico e l’Oceano Australe, a seconda delle classificazioni.

La profondità media degli oceani è di circa **3 700 m**; il punto più profondo noto, la **fossa delle Marianne** (Challenger Deep), è a circa **11 000 m**.

Un **mare** è una parte di oceano delimitata da coste o isole; il Mediterraneo è un mare quasi chiuso, collegato all’Atlantico dallo **stretto di Gibilterra** e al Mar Rosso dal Canale di Suez. Ha una salinità un po’ superiore alla media oceanica (circa 35–38 g di sali per kg d’acqua).

I **laghi** possono essere di origine glaciale (laghi prealpini italiani), vulcanica o tettonica. Le **maree** sono oscillazioni del livello del mare causate soprattutto dalla Luna: sono piccole nel Mediterraneo e molto ampie in altri mari.` },
      { h: 'Ordini di grandezza da ricordare', b: `Meglio ricordare ordini di grandezza sicuri che numeri precisi dubbi.

- Cima più alta: **Everest**, circa **8 850 m** (la misura ufficiale del 2020 è 8 848,86 m).
- Punto più profondo: circa **11 000 m** sotto il livello del mare.
- Monte Bianco, la cima più alta delle Alpi: circa **4 800 m**.
- Kilimangiaro, la più alta d’Africa: circa **5 900 m**.

> Dislivello massimo sulla Terra: circa 8 850 + 11 000 ≈ **19 850 m**, cioè quasi 20 km. Rispetto al raggio: 19,85 / 6 371 ≈ **0,3%**.

Con la quota la temperatura scende di circa **6,5 °C ogni 1 000 m** (gradiente medio in aria libera).

> Se a livello del mare ci sono 15 °C, a 3 000 m ci aspettiamo 15 − 6,5 × 3 = **−4,5 °C**.

Questo spiega le nevi perenni sulle alte montagne anche ai tropici.` },
      { h: 'Come studiare un territorio', b: `Per descrivere un territorio si osservano, in ordine:

1. **Posizione** (latitudine, vicinanza al mare, confini);
2. **Rilievo** (pianure, montagne, quote);
3. **Idrografia** (fiumi, laghi, coste);
4. **Clima** (temperature, precipitazioni);
5. **Attività umane** (popolazione, città, economia).

Gli elementi si influenzano a vicenda: le pianure alluvionali ospitano molta agricoltura e popolazione; le catene montuose ostacolano i collegamenti e funzionano da confini; i fiumi forniscono acqua, energia e vie di trasporto.

> Esempio di sintesi: la Pianura Padana, la più grande pianura italiana, è un’antica depressione riempita dai sedimenti del Po e dei suoi affluenti alpini e appenninici; per questo è fertile, densamente popolata e molto industrializzata.

Chi collega queste dimensioni passa dal semplice elenco di nomi a una vera comprensione.` }
    ],
    exercises: [
      mc('Circa quale percentuale della superficie terrestre è coperta da acqua?', ['71%', '50%', '29%', '90%'], 0, 'Circa il 71% è acqua, il 29% terre emerse.'),
      fill('Superficie terrestre 510 milioni di km², 71% acqua. Quanti milioni di km² di acqua (arrotonda all’intero)?', ['362'], '510 × 0,71 = 362,1.'),
      fill('Un oceano si allarga di 2,5 cm l’anno. Di quanti km si allarga in 40 milioni di anni?', ['1000', '1.000', '1 000'], '0,025 m × 4 × 10⁷ = 10⁶ m = 1 000 km.'),
      mc('Quale tipo di bordo tra placche corrisponde a una dorsale oceanica?', ['Divergente', 'Convergente', 'Trasforme', 'Nessuno'], 0, 'Lungo le dorsali le placche si allontanano e si forma nuova crosta.'),
      mc('Le Alpi e l’Himalaya sono montagne formate soprattutto da:', ['scontro tra placche (corrugamento)', 'accumulo di lava', 'erosione del vento', 'impatti di meteoriti'], 0, 'Sono catene da collisione continentale.'),
      fill('Un fiume ha sezione di 200 m² e velocità 1,5 m/s. Portata in m³/s?', ['300'], '200 × 1,5 = 300.'),
      fill('Il livello del mare ha 15 °C. Con un gradiente di 6,5 °C/km, che temperatura a 3 000 m (in °C)?', ['-4,5', '-4.5', '−4,5'], '15 − 19,5 = −4,5.'),
      mc('Un terremoto di magnitudo 7 rilascia rispetto a uno di magnitudo 5 circa:', ['1 000 volte più energia', '2 volte più energia', '100 volte più energia', 'la stessa energia'], 0, 'Circa 32 volte per grado: 32 × 32 ≈ 1 000.'),
      mc('Che cos’è l’epicentro?', ['Il punto in superficie sopra il punto d’origine del terremoto', 'Il punto d’origine in profondità', 'La faglia stessa', 'Il centro della Terra'], 0, 'L’origine in profondità è l’ipocentro.'),
      mc('Un delta fluviale si forma:', ['dove i sedimenti si depositano alla foce', 'alla sorgente', 'in alta montagna', 'solo nei laghi'], 0, 'I sedimenti portati dal fiume si accumulano allo sbocco.'),
      order('Ordina dal più basso al più alto (quota/profondità)', ['Fossa delle Marianne', 'Livello del mare', 'Monte Bianco', 'Everest'], 'Da circa −11 000 m, a 0, a circa 4 800 m, a circa 8 850 m.')
    ],
    test: [
      fill('Terre emerse: 29% di 510 milioni di km². Quanti milioni di km² (all’intero)?', ['148'], '510 × 0,29 = 147,9.'),
      mc('La Cintura di fuoco è una zona del:', ['Pacifico, con molti vulcani e terremoti', 'Atlantico meridionale', 'Mar Mediterraneo', 'Oceano Indiano interno'], 0, 'Lungo il Pacifico si ha subduzione intensa.'),
      fill('Dislivello approssimato tra una cima di 8 850 m e una fossa di 11 000 m, in metri?', ['19850', '19.850', '19 850'], '8 850 + 11 000.'),
      mc('Un bacino idrografico è:', ['il territorio che raccoglie le acque verso un fiume', 'il letto del fiume', 'un lago artificiale', 'la foce'], 0, 'Comprende il fiume e tutti i suoi affluenti.'),
      mc('Una pianura alluvionale è tipicamente fertile perché:', ['formata dai sedimenti dei fiumi', 'ricoperta di ghiaccio', 'molto elevata', 'priva di acqua'], 0, 'I sedimenti sono ricchi di materiale utile alle coltivazioni.'),
      fill('A 2 000 m di quota, partendo da 20 °C al livello del mare e 6,5 °C/km, la temperatura (in °C)?', ['7'], '20 − 13 = 7.'),
      mc('Il Po è:', ['il più lungo fiume italiano, circa 650 km', 'un fiume appenninico di 100 km', 'il fiume più lungo d’Europa', 'un lago'], 0, 'Circa 650 km, e sfocia con un delta nell’Adriatico.')
    ]
  });

  C.addTopic({
    id: 'cul-clima-e-biomi', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Clima, biomi e cambiamento climatico',
    summary: 'Fattori del clima, zone climatiche e biomi, correnti oceaniche, effetto serra e stato delle conoscenze sul riscaldamento globale.',
    objectives: ['Elencare i fattori che determinano il clima di un luogo', 'Collegare zone climatiche e biomi principali', 'Riassumere cause, evidenze e incertezze del cambiamento climatico'],
    prereq: ['cul-geografia-fisica'],
    pages: [
      { h: 'Tempo e clima', b: `Il **tempo atmosferico** è lo stato dell’atmosfera in un momento e luogo; il **clima** è l’insieme delle condizioni medie (e della loro variabilità) su un periodo lungo, tradizionalmente **30 anni**.

I due elementi principali sono **temperatura** e **precipitazioni**. Il clima di un luogo si riassume con la media mensile di entrambe.

> Esempio: media mensile minima 4 °C a gennaio, massima 28 °C a luglio. **Escursione termica annua** = 28 − 4 = **24 °C**.

Dire «oggi è freddo, quindi il riscaldamento globale non esiste» confonde tempo e clima: un singolo giorno non dice nulla sulla tendenza di decenni.` },
      { h: 'I fattori del clima', b: `Il clima locale dipende da alcuni fattori fondamentali.

- **Latitudine**: più ci si allontana dall’equatore, più i raggi solari arrivano inclinati e la temperatura media scende.
- **Altitudine**: circa −6,5 °C per ogni 1 000 m.
- **Distanza dal mare**: il mare si scalda e si raffredda lentamente, e rende il clima più mite (clima **marittimo**); lontano dal mare l’escursione è maggiore (clima **continentale**).
- **Correnti oceaniche e venti dominanti**.
- **Rilievi**: costringono l’aria umida a salire e a scaricare pioggia sul versante sopravvento; il versante opposto è più secco.

> A 2 000 m con 22 °C al livello del mare: 22 − 6,5 × 2 = **9 °C**.

Questi fattori agiscono insieme: due città alla stessa latitudine possono avere climi molto diversi.` },
      { h: 'Zone climatiche', b: `La Terra si divide in grandi fasce.

- **Zona torrida (tropicale)**: tra i due **tropici** (circa 23,4° N e S). Qui il Sole può essere allo zenit.
- **Zone temperate**: tra i tropici e i **circoli polari** (circa 66,6° N e S); quattro stagioni.
- **Zone fredde (polari)**: oltre i circoli polari, con notti e giorni molto lunghi.

La classificazione più diffusa, di Köppen, distingue cinque gruppi: **A tropicale**, **B arido**, **C temperato**, **D continentale**, **E polare**.

L’inclinazione dell’asse terrestre (circa 23,4°) causa le stagioni, non la distanza dal Sole.

> La differenza fra circolo polare e tropico è 66,6 − 23,4 = **43,2°** di latitudine: la zona temperata è larga circa 43,2 × 111 ≈ **4 800 km**.

L’Italia ha un clima in gran parte temperato di tipo **mediterraneo** (estati calde e secche, inverni miti e piovosi) lungo le coste e nel Sud.` },
      { h: 'Biomi principali', b: `Un **bioma** è un grande ambiente definito da clima e vegetazione.

- **Foresta pluviale equatoriale**: molto calda e piovosa tutto l’anno, enorme biodiversità (Amazzonia, Congo).
- **Savana**: stagione secca e stagione umida, erba e alberi sparsi.
- **Deserto**: precipitazioni scarsissime, in genere sotto i 250 mm l’anno. Può essere caldo (Sahara) o freddo.
- **Steppa/prateria**: clima semiarido o continentale, erba.
- **Bosco mediterraneo e macchia**: arbusti sempreverdi, adattati all’estate secca.
- **Foresta temperata**: alberi a foglia caduca.
- **Taiga**: foreste di conifere in climi freddi.
- **Tundra**: terreno ghiacciato (permafrost), vegetazione bassa.

I biomi non cambiano bruscamente: tra l’uno e l’altro ci sono fasce di transizione, e la quota produce una successione simile alla latitudine.` },
      { h: 'Venti, pressione e correnti', b: `Il Sole scalda di più l’equatore. L’aria calda sale, creando una zona di **bassa pressione** con molte piogge, e ricade a circa 30° di latitudine (alta pressione, clima arido): qui si trovano molti grandi deserti, come il Sahara.

I **venti** soffiano dalle alte alle basse pressioni, deviati dalla rotazione terrestre (**effetto Coriolis**): a destra nell’emisfero nord, a sinistra nel sud.

Le **correnti oceaniche** trasportano calore. La **Corrente del Golfo** porta acqua calda dai Caraibi verso l’Europa nord-occidentale e rende miti i suoi inverni rispetto ad altre zone alla stessa latitudine. La **corrente di Humboldt** porta acqua fredda lungo la costa occidentale sudamericana.

Il fenomeno **El Niño** è una fase irregolare (ogni pochi anni) in cui il Pacifico equatoriale orientale si scalda: modifica piogge e temperature in molte regioni.` },
      { h: 'L’effetto serra', b: `Alcuni gas dell’atmosfera (**vapore acqueo, anidride carbonica CO₂, metano CH₄, protossido di azoto**) lasciano passare la luce solare ma trattengono parte del calore emesso dalla Terra. È l’**effetto serra naturale**, e senza di esso la temperatura media sarebbe di circa −18 °C anziché circa +15 °C.

Il problema è l’**aumento di origine umana** dei gas serra, soprattutto per **combustibili fossili** (carbone, petrolio, gas), deforestazione e agricoltura.

> La CO₂ atmosferica era circa **280 ppm** prima della rivoluzione industriale; oggi supera circa **420 ppm**.
> Aumento: (420 − 280) / 280 = **50%**.

Misure dirette (dal 1958) e dati dei ghiacci antichi mostrano che il livello attuale è il più alto da centinaia di migliaia di anni. La firma isotopica del carbonio indica un’origine fossile dell’aumento. La CO₂ resta nell’atmosfera per secoli: ridurre le emissioni rallenta la crescita, ma l’effetto è lento.` },
      { h: 'Che cosa dice la scienza', b: `Lo stato delle conoscenze (riassunto nei rapporti dell’**IPCC**, il panel di esperti dell’ONU) è che il riscaldamento globale recente è **inequivocabilmente** causato dalle attività umane.

Elementi principali:
- la temperatura media globale è salita di circa **1,1–1,3 °C** rispetto al periodo preindustriale;
- i ghiacciai e le calotte polari perdono massa;
- il livello del mare è salito di circa **20 cm** dal 1900, oggi di alcuni mm l’anno (circa 3–4);
- aumentano ondate di calore ed eventi estremi in molte regioni.

> A 4 mm l’anno, in 25 anni: 4 × 25 = 100 mm = **10 cm** in più, se il ritmo restasse costante (ma tende ad accelerare).

L’**Accordo di Parigi** (2015) mira a contenere il riscaldamento «ben al di sotto di 2 °C», con sforzi per 1,5 °C.

Le incertezze riguardano soprattutto **quanto** (sensibilità climatica, dinamica delle calotte) e **dove** si manifesteranno gli effetti, non l’esistenza del fenomeno.` },
      { h: 'Mitigazione e adattamento', b: `Le risposte sono di due tipi.

- **Mitigazione**: ridurre le emissioni, o aumentare gli assorbimenti. Esempi: energie rinnovabili (solare, eolico, idroelettrico), efficienza energetica, trasporti elettrici, tutela delle foreste.
- **Adattamento**: ridurre i danni inevitabili. Esempi: difese costiere, reti idriche resilienti, colture resistenti alla siccità, allerta per le ondate di calore.

Le emissioni variano molto: in totale i grandi paesi emettono di più, ma per abitante le differenze sono ampie (un abitante di un paese ricco emette in media molte volte quanto uno di un paese povero).

Aspetti da distinguere per ragionare bene:
1. **fatti misurati** (temperature, CO₂, livello del mare);
2. **attribuzione** (cause);
3. **proiezioni** (scenari, con intervalli di incertezza);
4. **scelte politiche** (quanto e come agire), che dipendono anche da valori e costi.

Buona informazione significa non confondere questi livelli.` }
    ],
    exercises: [
      mc('Il clima si definisce su un periodo di tradizionalmente:', ['30 anni', '1 settimana', '1 mese', '1 giorno'], 0, 'Si usano medie su trent’anni.'),
      fill('Temperatura media 22 °C al livello del mare, gradiente 6,5 °C/km. A 2 000 m, in °C?', ['9'], '22 − 13 = 9.'),
      fill('Media di gennaio 4 °C, di luglio 28 °C. Escursione termica annua in °C?', ['24'], '28 − 4 = 24.'),
      mc('Le stagioni sulla Terra sono dovute soprattutto:', ['all’inclinazione dell’asse terrestre', 'alla distanza dal Sole', 'alle macchie solari', 'alla Luna'], 0, 'L’asse inclinato di circa 23,4° cambia l’angolo dei raggi.'),
      mc('Il clima mediterraneo è tipicamente:', ['estati calde e secche, inverni miti e piovosi', 'freddo tutto l’anno', 'piovoso tutto l’anno', 'sempre secco'], 0, 'È tipico delle coste del Mediterraneo.'),
      fill('CO₂ passata da 280 a 420 ppm. Aumento percentuale?', ['50', '50%'], '(420 − 280) / 280 = 0,5.'),
      mc('La Corrente del Golfo contribuisce a:', ['mitigare gli inverni dell’Europa nord-occidentale', 'raffreddare il Sahara', 'creare monsoni indiani', 'formare El Niño'], 0, 'Porta acqua calda verso nord-est.'),
      mc('Il bioma con permafrost e vegetazione bassa è:', ['la tundra', 'la savana', 'la foresta pluviale', 'la macchia mediterranea'], 0, 'Il suolo è ghiacciato in profondità.'),
      fill('Il mare sale di 4 mm l’anno. Quanti cm in 25 anni?', ['10'], '4 × 25 = 100 mm = 10 cm.'),
      mc('Quale affermazione distingue correttamente tempo e clima?', ['Il tempo è lo stato momentaneo, il clima la media di lungo periodo', 'Sono sinonimi', 'Il clima cambia ogni giorno', 'Il tempo si misura in decenni'], 0, 'Un giorno freddo non smentisce una tendenza decennale.'),
      order('Ordina la logica del riscaldamento globale', ['Emissioni di gas serra', 'Più CO₂ in atmosfera', 'Più calore trattenuto', 'Aumento della temperatura media'], 'Dalle cause agli effetti.')
    ],
    test: [
      fill('Il Sole è allo zenit fino al tropico a circa 23,4° N; il circolo polare è a circa 66,6° N. Differenza in gradi?', ['43,2', '43.2'], '66,6 − 23,4 = 43,2.'),
      mc('Perché molti deserti si trovano intorno a 30° di latitudine?', ['L’aria che ricade è secca (alta pressione)', 'Sono lontani dal Sole', 'Non c’è vento', 'Sono sempre in alta quota'], 0, 'Dopo aver perso umidità all’equatore, l’aria ridiscende e asciuga.'),
      mc('Il versante sopravvento di una catena montuosa è di solito:', ['più piovoso', 'più secco', 'senza precipitazioni', 'privo di nubi'], 0, 'L’aria umida sale e scarica pioggia.'),
      fill('A 1 500 m, partendo da 18 °C a livello del mare: quanti °C (arrotonda a 1 decimale, gradiente 6,5)?', ['8,3', '8.3', '8,25', '8.25'], '18 − 9,75 = 8,25.'),
      mc('L’IPCC è:', ['il panel intergovernativo dell’ONU sul cambiamento climatico', 'un’agenzia che regola il petrolio', 'un trattato', 'un satellite'], 0, 'Valuta e sintetizza la letteratura scientifica.'),
      mc('Quale è un esempio di adattamento (non di mitigazione)?', ['Costruire difese contro l’innalzamento del mare', 'Installare pannelli solari', 'Piantare foreste', 'Ridurre i consumi'], 0, 'L’adattamento riduce i danni, la mitigazione riduce le cause.'),
      mc('L’effetto serra naturale porta la temperatura media a circa:', ['+15 °C invece di circa −18 °C', '+50 °C', '0 °C', '−50 °C'], 0, 'Senza gas serra la Terra sarebbe quasi interamente ghiacciata.')
    ]
  });

  C.addTopic({
    id: 'cul-popolazione-citta-migrazioni', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Popolazione, città e migrazioni',
    summary: 'Demografia (natalità, mortalità, piramidi), urbanizzazione e migrazioni, con calcoli di densità, tassi e variazione di popolazione.',
    objectives: ['Calcolare densità, tassi di natalità e mortalità e variazione della popolazione', 'Leggere una piramide delle età e collegarla alla fase demografica', 'Spiegare urbanizzazione e migrazioni con cause e conseguenze'],
    pages: [
      { h: 'Quanti siamo', b: `La popolazione mondiale ha superato gli **8 miliardi** di persone nel 2022 (stima ONU). Era circa 1 miliardo attorno al 1800 e circa 2,5 miliardi attorno al 1950: la crescita più rapida della storia è avvenuta nel Novecento, grazie al calo della mortalità (igiene, vaccini, agricoltura).

Oggi la crescita rallenta: il numero medio di figli per donna è sceso in quasi tutto il mondo. Le proiezioni dell’ONU indicano un picco nella seconda metà del secolo, a poco più di 10 miliardi, con forti incertezze.

La popolazione è distribuita in modo molto ineguale: oltre la metà vive in **Asia**, e due paesi (India e Cina) superano ciascuno 1,4 miliardi di abitanti. L’India è oggi il più popoloso.

> Se 8 miliardi vivono su circa 149 milioni di km² di terre emerse, la densità media mondiale è 8 000 / 149 ≈ **54 ab/km²**, ma con enormi differenze locali (tra deserti e grandi pianure fertili).` },
      { h: 'La densità di popolazione', b: `La **densità** è il numero di abitanti per km²:

> **densità = abitanti / superficie**

> Italia: circa 59 milioni di abitanti su circa 301 000 km² → 59 000 000 / 301 340 ≈ **196 ab/km²**.
> Lombardia: circa 10 milioni su circa 23 900 km² → ≈ **420 ab/km²**.
> Valle d’Aosta: circa 123 000 su 3 263 km² → ≈ **38 ab/km²**.

È una media: nasconde le differenze interne (una città di 400 000 abitanti in una regione vuota).

Alcuni esempi di ordini di grandezza: il **Bangladesh** ha una densità oltre **1 000 ab/km²**, la **Mongolia** circa **2 ab/km²**.

Per questo si usa anche la **densità fisiologica** (abitanti per superficie coltivabile), che mostra meglio la pressione sulle risorse. I numeri esatti cambiano ogni anno: ricorda gli ordini di grandezza.` },
      { h: 'Natalità, mortalità, crescita', b: `I **tassi** si esprimono in genere per mille abitanti all’anno (‰).

> **Tasso di natalità** = nati / popolazione × 1 000
> **Tasso di mortalità** = morti / popolazione × 1 000
> **Saldo naturale** = nati − morti
> **Saldo migratorio** = immigrati − emigrati
> **Variazione totale** = saldo naturale + saldo migratorio

> Esempio: popolazione 10 000 000; nati 90 000; morti 110 000; immigrati 60 000; emigrati 20 000.
> Natalità = 9‰; mortalità = 11‰.
> Saldo naturale = −20 000; saldo migratorio = +40 000.
> Variazione = **+20 000**, cioè +0,2% (2‰).

La **fecondità** (figli per donna) per mantenere stabile una popolazione, senza migrazioni, è circa **2,1**. L’Italia ha un valore di circa 1,2 nel periodo recente, tra i più bassi al mondo: i nati sono meno dei morti da molti anni.

La **speranza di vita** è oltre 80 anni in Italia, circa 73 nel mondo (ordine di grandezza).` },
      { h: 'Piramidi delle età', b: `Una **piramide delle età** è un grafico a barre orizzontali che mostra, per fasce di età (0–4, 5–9…) e per sesso, quante persone ci sono.

- **Base larga, a triangolo**: molti giovani, alta natalità: popolazione in forte crescita (molti paesi africani).
- **Forma a colonna**: nascite e morti in equilibrio, popolazione stabile.
- **Base stretta, vertice largo (a trottola)**: pochi giovani, molti anziani: popolazione in calo e invecchiata (Italia, Giappone).

L’**indice di dipendenza** misura il carico sulla popolazione in età lavorativa:

> **(0–14 anni + 65 anni e oltre) / (15–64 anni) × 100**

> Su 100 persone: 13 giovani, 24 anziani, 63 in età attiva → (13 + 24) / 63 × 100 = **58,7**.

Significa che ogni 100 persone in età lavorativa ce ne sono circa 59 da sostenere (pensioni, sanità, istruzione). Un indice alto per anziani mette sotto pressione i sistemi di welfare.` },
      { h: 'La transizione demografica', b: `Il modello della **transizione demografica** descrive il passaggio, in quattro fasi, da alta a bassa natalità e mortalità.

1. **Pre-transizione**: natalità e mortalità alte, popolazione stabile.
2. **Calo della mortalità** (miglioramenti sanitari) con natalità ancora alta: forte crescita.
3. **Calo della natalità**: la crescita rallenta.
4. **Natalità e mortalità basse**: crescita nulla o negativa, invecchiamento.

La regola del 70 stima il **tempo di raddoppio** di una popolazione che cresce a un tasso costante di r% annuo:

> tempo ≈ 70 / r anni → con r = 1,4 → 70 / 1,4 = **50 anni**; con r = 2 → 35 anni.

I paesi europei sono oggi nella fase 4; molti paesi dell’Africa subsahariana nelle fasi 2–3.

Il modello è una semplificazione (nessun paese segue esattamente le fasi), ma aiuta a leggere le differenze fra paesi.` },
      { h: 'Urbanizzazione', b: `**Urbanizzazione** è la crescita della quota di popolazione che vive in città. Dal 2007 più della metà dell’umanità vive in aree urbane; oggi la quota è circa **il 57%**, e potrebbe salire verso il 68% entro il 2050 (stime ONU).

Le **megalopoli** (oltre 10 milioni di abitanti) sono circa trenta nel mondo e si trovano soprattutto in Asia (Tokyo, Delhi, Shanghai).

Cause: lavoro, servizi, istruzione, meccanizzazione agricola. Conseguenze:
- **positive**: efficienza dei servizi, innovazione, minori consumi per persona;
- **negative**: traffico, inquinamento, costo delle case, **baraccopoli** (quartieri informali, dove vive circa un miliardo di persone), consumo di suolo.

> Se la popolazione mondiale è di 8 miliardi e il 57% vive in città, gli abitanti urbani sono 8 × 0,57 = **4,56 miliardi**.

In Italia circa 7 abitanti su 10 vivono in aree urbane, ma le città italiane sono per lo più medie, non megalopoli.` },
      { h: 'Migrazioni', b: `Una **migrazione** è uno spostamento di residenza, interno a un paese o fra paesi. I motivi si dividono in **fattori di spinta** (push: povertà, guerre, persecuzioni, disastri) e **fattori di attrazione** (pull: lavoro, sicurezza, studio, ricongiungimento familiare).

Il **rifugiato** è chi fugge da guerra o persecuzione ed è tutelato dal diritto internazionale (Convenzione di Ginevra del 1951); il **migrante economico** si sposta per migliorare le proprie condizioni. Le due categorie giuridiche sono diverse, anche se nella realtà si sovrappongono.

Ordini di grandezza: i migranti internazionali sono circa **3,6% della popolazione mondiale** (circa 280 milioni); la maggior parte delle persone resta nel proprio paese.

> Se un paese ha 60 milioni di abitanti e il 9% sono nati all’estero → 60 × 0,09 = **5,4 milioni**.

Le migrazioni producono rimesse, scambi culturali, bisogno di integrazione. Un buon ragionamento distingue **dati** (flussi, stock) da **valutazioni politiche**.` },
      { h: 'Riepilogo: formule e ordini di grandezza', b: `Formule da ricordare:

- **densità** = abitanti / superficie (ab/km²);
- **natalità** e **mortalità** = eventi / popolazione × 1 000;
- **variazione totale** = (nati − morti) + (immigrati − emigrati);
- **indice di dipendenza** = (0–14 + 65 e oltre) / (15–64) × 100;
- **tempo di raddoppio** ≈ 70 / tasso di crescita %.

> Esempio completo: una città ha 500 000 abitanti su 125 km² → densità 4 000 ab/km². Ha 4 500 nati e 5 000 morti: natalità 9‰, mortalità 10‰, saldo naturale −500. Arrivano 3 000 persone e ne partono 1 500: saldo migratorio +1 500. Variazione = **+1 000** (+0,2%).

Ordini di grandezza utili: 8 miliardi di persone nel mondo; circa 57% in città; fecondità di sostituzione 2,1; Italia circa 59 milioni, fecondità circa 1,2.

Ricorda che i dati demografici si aggiornano ogni anno: i **metodi** di calcolo restano, i **numeri** vanno verificati su fonti ufficiali (ISTAT, ONU).` }
    ],
    exercises: [
      fill('Italia: circa 59 milioni di abitanti su 301 000 km². Densità in ab/km² (arrotonda all’intero)?', ['196', '195', '197'], '59 000 000 / 301 340 ≈ 196.'),
      fill('Popolazione 10 000 000; nati 90 000. Tasso di natalità in ‰?', ['9'], '90 000 / 10 000 000 × 1 000.'),
      fill('Saldo naturale −20 000, saldo migratorio +40 000. Variazione totale?', ['20000', '+20000', '20.000', '20 000'], '−20 000 + 40 000.'),
      mc('Una piramide con base molto larga indica:', ['molti giovani e forte crescita', 'popolazione molto anziana', 'popolazione in calo', 'migrazioni in uscita'], 0, 'Alta natalità: tante classi giovani.'),
      fill('13 giovani, 24 anziani, 63 in età attiva. Indice di dipendenza (un decimale)?', ['58,7', '58.7'], '37 / 63 × 100.'),
      fill('Crescita annua costante 1,4%. Tempo di raddoppio in anni (regola del 70)?', ['50'], '70 / 1,4 = 50.'),
      mc('La fecondità di sostituzione è circa:', ['2,1 figli per donna', '1,0', '3,5', '5,0'], 0, 'Serve per mantenere stabile la popolazione senza migrazioni.'),
      mc('Quale è un fattore di attrazione (pull)?', ['Opportunità di lavoro', 'Guerra', 'Siccità', 'Persecuzione'], 0, 'I fattori pull attirano verso la destinazione.'),
      fill('Se 8 miliardi di persone vivono per il 57% in città, quanti miliardi di urbani (due decimali)?', ['4,56', '4.56'], '8 × 0,57.'),
      mc('Un rifugiato è tutelato da:', ['Convenzione di Ginevra del 1951', 'Trattato di Maastricht', 'Carta del NATO', 'Accordi di Schengen'], 0, 'È la base del diritto internazionale dei rifugiati.'),
      order('Ordina le fasi della transizione demografica', ['Natalità e mortalità alte', 'Mortalità in calo', 'Natalità in calo', 'Natalità e mortalità basse'], 'La mortalità scende prima della natalità.')
    ],
    test: [
      fill('Valle d’Aosta: circa 123 000 abitanti su 3 263 km². Densità in ab/km² (all’intero)?', ['38'], '123 000 / 3 263 ≈ 37,7.'),
      mc('La densità è una media perché:', ['nasconde le differenze interne al territorio', 'è sempre uguale ovunque', 'non dipende dalla superficie', 'conta solo le città'], 0, 'Una regione può avere pochi centri molto popolati e molte aree vuote.'),
      fill('Popolazione 2 000 000; morti 24 000. Tasso di mortalità in ‰?', ['12'], '24 000 / 2 000 000 × 1 000.'),
      mc('Una piramide a trottola (base stretta, vertice largo) è tipica di:', ['una popolazione invecchiata', 'un paese in rapida crescita', 'una popolazione appena nata', 'una colonia'], 0, 'Pochi nati e molti anziani, come in Italia o Giappone.'),
      fill('Un paese di 60 milioni ha il 9% di nati all’estero. Quanti milioni (un decimale)?', ['5,4', '5.4'], '60 × 0,09.'),
      mc('Che cosa sono le baraccopoli?', ['Quartieri urbani informali e poveri', 'Quartieri storici', 'Zone industriali', 'Villaggi rurali'], 0, 'Spesso privi di servizi basilari.'),
      mc('Quale combinazione produce crescita naturale negativa?', ['Natalità minore della mortalità', 'Natalità maggiore della mortalità', 'Solo immigrazione', 'Solo emigrazione'], 0, 'Saldo naturale = nati − morti < 0.')
    ]
  });

  C.addTopic({
    id: 'cul-continenti-e-regioni', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Continenti e regioni del mondo',
    summary: 'Una sintesi di Asia, Africa, Americhe, Europa, Oceania e Antartide: dimensioni, caratteri fisici, popolazione ed elementi essenziali.',
    objectives: ['Collocare e confrontare i continenti per dimensioni e popolazione (ordini di grandezza)', 'Ricordare gli elementi fisici e umani essenziali di ciascun continente', 'Capire che i confini continentali sono convenzioni'],
    prereq: ['cul-geografia-fisica'],
    pages: [
      { h: 'I continenti e i loro confini', b: `Un **continente** è una grande massa di terre emerse; la divisione è una **convenzione**, non una regola naturale. Il modello più diffuso in Italia ne conta **sei**: Africa, America, Antartide, Asia, Europa, Oceania. Altri distinguono America del Nord e America del Sud (sette continenti).

Confini convenzionali: Europa–Asia lungo i monti **Urali**, il fiume Ural, il Caucaso; Asia–Africa lungo il **Canale di Suez**; America del Nord–America del Sud all’**istmo di Panama**.

Superfici approssimate (in milioni di km²): Asia ~44,6; Africa ~30,4; America del Nord ~24,7; America del Sud ~17,8; Antartide ~14,2; Europa ~10,2; Oceania ~8,5. Il totale delle terre emerse è circa 149 milioni.

> Quota dell’Asia: 44,6 / 149 ≈ **30%**. L’Africa è circa 30,4 / 0,30134 ≈ **100 volte l’Italia**.` },
      { h: 'Asia', b: `L’**Asia** è il continente più grande e più popoloso: circa il **60% dell’umanità**, oltre 4,5 miliardi di persone.

Fisicamente è varia: la catena dell’**Himalaya** con l’**Everest** (circa 8 850 m), l’altopiano del Tibet, i deserti dell’Asia centrale, le immense pianure della Siberia, grandi fiumi (Yangtze, Fiume Giallo, Gange, Indo, Mekong), il clima dei **monsoni** nel sud e sud-est.

Regioni: Asia orientale (Cina, Giappone, Coree), meridionale (India), sud-orientale (Indonesia, Vietnam), centrale, occidentale (Medio Oriente).

Elementi essenziali: culla di grandi civiltà e di religioni (induismo, buddismo, islam, ebraismo, cristianesimo hanno radici asiatiche); oggi centro della produzione manifatturiera mondiale; le maggiori città del mondo; grandi riserve di petrolio e gas nel Golfo Persico.

> Cina e India insieme hanno circa 2,8 miliardi di abitanti: circa **35%** di 8 miliardi.` },
      { h: 'Africa', b: `L’**Africa** è il secondo continente per superficie (~30 milioni di km²) e popolazione (circa **1,5 miliardi**, circa il 18% mondiale), con una popolazione molto giovane e fra le più rapide crescite demografiche.

Fisica: grandi altopiani, la **Rift Valley** (frattura tettonica), il **Sahara** (circa 9 milioni di km², quasi 30% del continente), la savana, la foresta pluviale del Congo. Fiumi: **Nilo**, Congo, Niger, Zambesi. Cima più alta: **Kilimangiaro** (circa 5 900 m).

È attraversata dall’equatore: la fascia equatoriale è piovosa, mentre ai due lati si estendono savane e deserti.

Gli stati riconosciuti dall’ONU sono **54**. I confini attuali derivano in larga parte dal periodo coloniale (Conferenza di Berlino 1884–85) e dalla successiva indipendenza (soprattutto 1950–1970).

Risorse: minerali (rame, cobalto, oro, diamanti), petrolio e gas. Sfide e opportunità: urbanizzazione rapida, giovinezza della popolazione, sviluppo infrastrutturale.

> Sahara / Africa = 9 / 30,4 ≈ **30%**.` },
      { h: 'America del Nord, Centrale e del Sud', b: `L’**America** si estende dall’Artico a Capo Horn, quasi da polo a polo.

**America del Nord** (con America centrale e Caraibi): Canada, Stati Uniti, Messico. Grandi pianure interne, Montagne Rocciose a ovest, Appalachi a est; il sistema fluviale **Mississippi–Missouri**; i Grandi Laghi. Gli Stati Uniti sono la maggiore economia nazionale del mondo. La popolazione dell’intera America del Nord, compresa quella centrale, è sull’ordine di **600 milioni**.

**America del Sud**: la catena delle **Ande** (la più lunga catena continentale) con l’**Aconcagua** (circa 6 960 m, la cima più alta delle Americhe), il bacino dell’**Amazzonia**, la più grande foresta pluviale del mondo, e il fiume omonimo, di massima portata. Popolazione circa **440 milioni**; lingue dominanti spagnolo e portoghese (Brasile).

Il paese più popoloso del Sud è il **Brasile** (oltre 200 milioni di abitanti).

> America (Nord+Sud) = 24,7 + 17,8 = **42,5 milioni di km²**, quasi quanto l’Asia (44,6).` },
      { h: 'Europa', b: `L’**Europa** è il continente più piccolo dopo l’Oceania e l’Antartide (~10 milioni di km²) ma densamente popolato: circa **740 milioni** di abitanti (incluse parti di Russia europea), cioè circa il 9% dell’umanità.

Fisica: penisole (scandinava, iberica, italica, balcanica), catene (**Alpi**, Pirenei, Carpazi), grandi pianure (europea orientale, Padana), fiumi (**Volga**, il più lungo, circa 3 500 km; **Danubio**, che attraversa o tocca molti stati). Cima più alta: **Elbrus** (circa 5 640 m) secondo il confine al Caucaso; il **Monte Bianco** (circa 4 800 m) è il più alto delle Alpi e dell’Europa occidentale.

Clima: da quello mediterraneo al sud, a quello oceanico a ovest, continentale a est, subartico a nord. Coste molto lunghe in rapporto alla superficie.

Elementi essenziali: culla di molte istituzioni politiche e culturali moderne, oggi con alto reddito medio, forte integrazione economica (UE) e popolazione che invecchia.

> L’Europa ha una densità media sull’ordine di 70 ab/km² (740 / 10,2 ≈ 72), più del doppio della media mondiale di circa 54.` },
      { h: 'Oceania e Antartide', b: `L’**Oceania** comprende l’**Australia** (circa 7,7 milioni di km², il continente-isola e il sesto paese più grande del mondo), la Nuova Zelanda e migliaia di isole del Pacifico (Melanesia, Micronesia, Polinesia). La popolazione è di circa **45 milioni**, ed è il continente meno popoloso fra quelli abitati. Gran parte dell’Australia è arida (l’**Outback**), con popolazione concentrata sulle coste sud-orientali. Fauna unica (canguri, koala) a causa dell’isolamento.

L’**Antartide** (circa 14,2 milioni di km²) è il continente più freddo, ventoso e secco. Circa il **98%** è coperto da ghiaccio, spesso in media oltre 2 km: se tutto si sciogliesse il livello del mare salirebbe di decine di metri. Non ha popolazione stabile, solo ricercatori nelle basi (alcune migliaia in estate).

Il **Trattato Antartico** (1959) la dedica alla pace e alla ricerca scientifica e vieta attività militari; un protocollo del 1991 vieta lo sfruttamento minerario.

> Spessore medio di circa 2 km su circa 14 milioni di km²: ordine di grandezza di **qualche decina di milioni di km³** di ghiaccio.` },
      { h: 'Confrontare e ricordare', b: `Per non perdersi tra i numeri, usa uno schema semplice con **tre dimensioni**: superficie, popolazione, densità.

- **Asia**: ~44,6 milioni di km², ~4,7 miliardi di abitanti
- **Africa**: ~30,4 milioni di km², ~1,5 miliardi
- **America**: ~42,5 milioni di km², ~1 miliardo
- **Europa**: ~10,2 milioni di km², ~740 milioni
- **Oceania**: ~8,5 milioni di km², ~45 milioni
- **Antartide**: ~14,2 milioni di km², quasi nessun abitante

> Densità dell’Africa = 1 500 / 30,4 ≈ **49 ab/km²**; dell’Asia = 4 700 / 44,6 ≈ **105 ab/km²**.

Ricorda che i **valori demografici cambiano** ogni anno e le stime differiscono fra fonti: servono come ordini di grandezza.

Strategia di studio: associa a ogni continente una **catena** (Himalaya, Ande, Alpi…), un **fiume** (Gange, Amazzoni, Nilo, Danubio…), un **bioma** (monsoni, foresta, deserto…) e un **carattere umano** (popolazione, lingue, economia). Quattro ancore per ogni continente bastano per orientarsi.` },
      { h: 'Riepilogo: ancore per ogni continente', b: `Per fissare le idee, un’ancora per continente.

- **Asia**: Himalaya, monsoni, circa 60% dell’umanità.
- **Africa**: Sahara, Nilo, Rift Valley, 54 stati, popolazione giovane.
- **America**: Ande, Amazzonia, Mississippi–Missouri; due sub-continenti.
- **Europa**: Alpi, Volga, penisole, UE, popolazione che invecchia.
- **Oceania**: Australia, Pacifico, popolazione piccola.
- **Antartide**: ghiaccio, Trattato Antartico, nessun abitante stabile.

> Controllo di coerenza: sommando le superfici approssimate (44,6 + 30,4 + 42,5 + 10,2 + 8,5 + 14,2) si ottengono circa **150 milioni di km²**, in accordo con i circa 149 milioni di terre emerse (le differenze sono arrotondamenti e convenzioni).

Imparare i numeri come **ordini di grandezza** è più utile che memorizzare cifre al decimale: servono a capire se una notizia è plausibile (una densità di 5 000 ab/km² per un intero paese, per esempio, non lo è).` }
    ],
    exercises: [
      mc('Il continente più popoloso è:', ['l’Asia', 'l’Africa', 'l’Europa', 'l’America'], 0, 'Circa il 60% della popolazione mondiale vive in Asia.'),
      fill('Asia ~44,6 e terre emerse totali ~149 milioni di km². Quota percentuale dell’Asia (all’intero)?', ['30'], '44,6 / 149 ≈ 0,30.'),
      fill('L’Africa misura ~30,4 milioni di km², l’Italia ~0,301. Quante volte più grande (all’intero)?', ['100', '101'], '30,4 / 0,301 ≈ 101.'),
      mc('Il confine convenzionale fra Asia e Africa è:', ['il Canale di Suez', 'lo stretto di Gibilterra', 'il Bosforo', 'l’istmo di Panama'], 0, 'Suez collega Mediterraneo e Mar Rosso.'),
      mc('La catena delle Ande si trova:', ['in America del Sud', 'in Africa', 'in Asia', 'in Oceania'], 0, 'Corre lungo la costa occidentale.'),
      mc('Quanti stati africani sono membri dell’ONU?', ['54', '12', '30', '80'], 0, 'Sono 54 stati riconosciuti.'),
      fill('Sahara ~9 milioni di km² su ~30,4 dell’Africa. Quota in % (all’intero)?', ['30'], '9 / 30,4 = 0,296.'),
      mc('L’Antartide è:', ['coperta per circa il 98% da ghiaccio', 'un deserto caldo', 'densamente popolata', 'divisa in molti stati'], 0, 'È un continente quasi interamente glaciale, regolato dal Trattato Antartico.'),
      mc('La foresta pluviale più grande del mondo è:', ['l’Amazzonia', 'la taiga', 'la savana', 'la Siberia'], 0, 'Occupa il bacino del Rio delle Amazzoni.'),
      fill('America del Nord 24,7 + America del Sud 17,8 in milioni di km²?', ['42,5', '42.5'], '24,7 + 17,8.'),
      order('Ordina per superficie dal più grande al più piccolo', ['Asia', 'Africa', 'Europa', 'Oceania'], 'Circa 44,6, 30,4, 10,2, 8,5 milioni di km².')
    ],
    test: [
      fill('Africa: 1 500 milioni di abitanti su 30,4 milioni di km². Densità in ab/km² (all’intero)?', ['49', '50'], '1 500 / 30,4 = 49,3.'),
      mc('L’Australia è:', ['continente-isola e paese molto grande', 'uno stato europeo', 'un arcipelago senza terre grandi', 'parte dell’Asia'], 0, 'Circa 7,7 milioni di km².'),
      mc('Quale è un carattere dell’Africa?', ['Popolazione molto giovane e in rapida crescita', 'Popolazione molto anziana', 'Assenza di deserti', 'Un unico stato'], 0, 'L’età mediana è fra le più basse.'),
      mc('Il Trattato Antartico del 1959:', ['dedica il continente a pace e ricerca', 'divide l’Antartide fra gli Stati', 'permette le miniere', 'crea una colonia'], 0, 'Vieta anche attività militari.'),
      fill('Europa: 740 milioni su 10,2 milioni di km². Densità in ab/km² (all’intero)?', ['73', '72'], '740 / 10,2 ≈ 72,5.'),
      mc('Gli Urali sono il confine convenzionale fra:', ['Europa e Asia', 'Asia e Africa', 'Europa e Africa', 'Nord e Sud America'], 0, 'Insieme al fiume Ural e al Caucaso.'),
      mc('Perché i confini continentali sono “convenzionali”?', ['Perché dipendono da scelte storiche e culturali, non da barriere naturali nette', 'Perché non esistono', 'Perché cambiano ogni anno', 'Perché sono fissi per legge'], 0, 'Europa e Asia, ad esempio, sono un’unica massa continua.')
    ]
  });

  C.addTopic({
    id: 'cul-italia-geografia', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'L’Italia: territorio, regioni, economia, patrimonio',
    summary: 'Carattere fisico dell’Italia, regioni, divari territoriali, economia e patrimonio culturale e naturale, con densità e distanze.',
    objectives: ['Descrivere il territorio fisico italiano (Alpi, Appennini, pianure, coste, vulcani)', 'Collocare le regioni e confrontare popolazione, superficie e densità', 'Illustrare economia territoriale e patrimonio in modo equilibrato'],
    prereq: ['cul-geografia-fisica', 'cul-popolazione-citta-migrazioni'],
    pages: [
      { h: 'Posizione e dimensioni', b: `L’Italia occupa una **penisola** al centro del Mediterraneo, con le due grandi isole di **Sicilia** e **Sardegna** e molte minori. La superficie è di circa **301 000 km²**; la popolazione, nel periodo recente, circa **59 milioni** (in lieve calo).

Si estende dalle Alpi (circa 47° N) fino a Lampedusa (circa 35,5° N):

> Differenza di latitudine ≈ 47 − 35,5 = 11,5° → 11,5 × 111 ≈ **1 275 km** in linea retta lungo un meridiano.

Confina con **Francia, Svizzera, Austria e Slovenia**; all’interno del suo territorio ci sono due piccoli stati indipendenti, la **Repubblica di San Marino** e lo **Stato della Città del Vaticano**.

Le coste (isole comprese) superano i **7 000 km**: l’Italia è circondata dai mari Tirreno, Ionio, Adriatico, Ligure e dal Mediterraneo. La posizione centrale ha favorito scambi e conflitti nella storia.` },
      { h: 'Rilievi, pianure, vulcani', b: `Il territorio italiano è per circa **un terzo montuoso**, per **il 40% circa collinare** e solo per **un quinto pianeggiante** (ordini di grandezza).

- **Alpi**: arco a nord; vette oltre i 4 000 m. Il **Monte Bianco** (circa 4 800 m) si trova al confine con la Francia; il **Gran Paradiso** (4 061 m) è la cima più alta interamente in territorio italiano.
- **Appennini**: dorsale lunga che attraversa la penisola, fino a circa 2 900 m (Gran Sasso, Corno Grande). È geologicamente più giovane e soggetto a terremoti.
- **Pianura Padana**: la più vasta pianura italiana, attraversata dal **Po** (circa 650 km). Altre pianure minori: Tavoliere, Campidano.
- **Vulcani**: **Etna** (attivo, circa 3 300 m, varia con le eruzioni), **Vesuvio** (circa 1 280 m), **Stromboli** (isole Eolie), Campi Flegrei.

Laghi: il maggiore è il **Garda** (circa 370 km²). Fiumi: Po, Adige, Tevere sono i principali.

> Se le pianure sono un quinto di 301 000 km², sono circa **60 000 km²**.` },
      { h: 'Le regioni', b: `L’Italia ha **20 regioni**, di cui **5 a statuto speciale** (Valle d’Aosta, Trentino-Alto Adige, Friuli-Venezia Giulia, Sardegna, Sicilia), con maggiore autonomia.

- **Nord**: Valle d’Aosta, Piemonte, Lombardia, Liguria, Trentino-Alto Adige, Veneto, Friuli-Venezia Giulia, Emilia-Romagna.
- **Centro**: Toscana, Umbria, Marche, Lazio.
- **Sud**: Abruzzo, Molise, Campania, Puglia, Basilicata, Calabria.
- **Isole**: Sicilia, Sardegna.

Estremi: la **più grande** per superficie è la **Sicilia** (circa 25 700 km²); la più piccola la **Valle d’Aosta** (3 263 km²). La più popolosa è la **Lombardia** (circa 10 milioni), la meno popolosa la Valle d’Aosta.

> Densità: Lombardia ≈ 10 000 000 / 23 863 ≈ **419 ab/km²**; Basilicata, con circa 540 000 abitanti su 10 073 km², ≈ **54 ab/km²**.

Le regioni hanno competenze importanti (per esempio sanità); sopra di esse vi sono lo Stato e l’Unione europea; sotto, province e comuni (circa 7 900).` },
      { h: 'Economia: caratteri generali', b: `L’Italia è una delle maggiori economie del mondo e tra i grandi paesi manifatturieri europei. Il prodotto interno lordo (PIL) la colloca nel periodo recente tra le prime dieci economie mondiali.

I settori:
- **primario** (agricoltura, pesca): poco peso nel PIL (circa il 2%), ma prodotti di qualità (vino, olio, formaggi, ortofrutta);
- **secondario** (industria): meccanica, moda, alimentare, farmaceutica, mobili, con molte piccole e medie imprese;
- **terziario** (servizi): il settore più grande per occupazione e valore, con turismo, commercio, finanza.

Una caratteristica italiana sono i **distretti industriali**: gruppi di piccole imprese specializzate in uno stesso settore in un’area (occhialeria a Belluno, ceramica a Sassuolo, calzature in Veneto e Marche).

L’Italia esporta soprattutto macchinari, beni di consumo e alimentari, e importa energia (gas, petrolio) di cui è povera.

> Se i servizi producono circa il 70% di un PIL di 2 000 miliardi di euro (ordine di grandezza), sono **1 400 miliardi**.` },
      { h: 'Divari territoriali', b: `Esiste un divario storico tra **Nord** e **Mezzogiorno** (Sud e isole): minore reddito pro capite, occupazione più bassa, servizi meno sviluppati. Il PIL per abitante del Sud è sensibilmente inferiore a quello del Nord (di circa il 40%, a seconda dell’anno e degli indicatori).

Altri divari:
- **aree interne** (montagne e Appennino): spopolamento, servizi lontani;
- **città e campagne**;
- fra regioni a statuto speciale e ordinaria, per competenze.

Le cause sono storiche, economiche e istituzionali; spiegazioni semplici («colpa di uno solo») sono quasi sempre sbagliate.

Strumenti di riequilibrio: fondi europei di coesione, investimenti in infrastrutture, il PNRR (Piano nazionale di ripresa e resilienza, 2021).

> Con valori ipotetici: se il reddito pro capite del Nord è 36 000 € e quello del Sud 24 000 €, il rapporto è 24 / 36 = **0,67**: il Sud ha i due terzi del reddito del Nord.

Per giudicare un divario conviene guardare più indicatori (occupazione, istruzione, speranza di vita), non uno solo.` },
      { h: 'Città e popolazione', b: `Le città più popolose sono **Roma** (circa 2,8 milioni), **Milano** (circa 1,4 milioni), **Napoli** (circa 0,9 milioni), **Torino**; la rete urbana è fatta anche di molte città medie e piccoli centri storici.

Aree metropolitane maggiori: Roma, Milano, Napoli. Roma è la **capitale**.

La popolazione è distribuita in modo ineguale: grande concentrazione nella **Pianura Padana** e lungo le coste, bassa densità nelle aree montane interne. Fenomeni attuali: **invecchiamento** (circa un quarto della popolazione ha oltre 65 anni), natalità bassa, saldo naturale negativo compensato in parte dai flussi migratori, spostamento dal Sud al Nord.

Ordine geografico nord-sud di alcuni capoluoghi (per latitudine): Aosta, Milano, Roma, Napoli, Palermo.

> Una città di 2,8 milioni in un paese di 59: 2,8 / 59 ≈ **4,7%** della popolazione.

I trasporti principali: alta velocità ferroviaria Torino–Milano–Roma–Napoli–Salerno, autostrade, grandi porti (Genova, Trieste, Gioia Tauro).` },
      { h: 'Patrimonio culturale e naturale', b: `L’Italia ha uno dei maggiori patrimoni culturali del mondo, con circa **60 siti UNESCO** (uno dei numeri più alti per paese, insieme alla Cina), fra cui: il centro storico di Roma, Venezia e la sua laguna, Firenze, Pompei, le Dolomiti, l’Etna, le Cinque Terre, i trulli di Alberobello.

La ricchezza è anche **diffusa**: borghi, chiese, musei, paesaggi agrari, tradizioni, cucina (patrimonio immateriale: la dieta mediterranea). Il **turismo** attira decine di milioni di visitatori l’anno e vale una quota importante del PIL (nell’ordine del 10% con l’indotto).

Sfide: **conservazione** (terremoti, alluvioni, inquinamento), **sovraffollamento** (Venezia, Cinque Terre), **distribuzione** dei flussi su più luoghi e stagioni, gestione sostenibile.

L’Italia ha anche **parchi nazionali** (Gran Paradiso, Stelvio, Abruzzo) che proteggono biodiversità.

> Un visitatore che spende 100 € al giorno e rimane 4 giorni lascia 400 €; un milione di visitatori simili: **400 milioni di euro**.

Un cittadino consapevole sa conoscere, usare e tutelare questo patrimonio.` },
      { h: 'Riepilogo: l’Italia in numeri', b: `Scheda di sintesi (ordini di grandezza, periodo recente).

- Superficie circa **301 000 km²**; popolazione circa **59 milioni**; densità circa **196 ab/km²**.
- **20 regioni**, 5 a statuto speciale; Lombardia la più popolosa, Sicilia la più estesa, Valle d’Aosta la più piccola.
- Alpi (Monte Bianco circa 4 800 m), Appennini, Pianura Padana; Po circa 650 km.
- Tre vulcani famosi: Etna, Vesuvio, Stromboli.
- Economia di servizi e manifattura di qualità, con forte divario Nord–Sud.
- Circa 60 siti UNESCO.

> Esercizio di stima: se in Italia ci fossero 59 milioni di persone distribuite uniformemente, ogni km² ne ospiterebbe circa 196, ovvero un quadrato di 100 m × 100 m (1 ettaro = 0,01 km²) conterrebbe in media circa **2 persone**.

Metodo: per ogni territorio descrivi posizione, rilievo, acque, clima, popolazione, economia, patrimonio, e collega le cause agli effetti.` }
    ],
    exercises: [
      mc('Quante sono le regioni italiane?', ['20', '18', '15', '24'], 0, 'Di cui 5 a statuto speciale.'),
      fill('Lombardia: 10 milioni di abitanti su 23 863 km². Densità in ab/km² (all’intero)?', ['419', '420'], '10 000 000 / 23 863 ≈ 419.'),
      fill('Da 47° N a 35,5° N: distanza lungo un meridiano in km (111 km/grado, all’intero)?', ['1277', '1276', '1275', '1.276', '1 276', '1.277', '1 277', '1.275', '1 275'], '11,5 × 111 = 1 276,5.'),
      mc('La regione più grande per superficie è:', ['la Sicilia', 'il Piemonte', 'la Lombardia', 'la Sardegna'], 0, 'Circa 25 700 km², leggermente più del Piemonte.'),
      mc('La cima più alta interamente in territorio italiano è:', ['il Gran Paradiso', 'il Monte Bianco', 'l’Etna', 'il Gran Sasso'], 0, '4 061 m; il Monte Bianco è al confine con la Francia.'),
      mc('Quali sono regioni a statuto speciale?', ['Sicilia e Sardegna', 'Lazio e Campania', 'Veneto e Piemonte', 'Toscana e Umbria'], 0, 'Insieme a Valle d’Aosta, Trentino-Alto Adige e Friuli-Venezia Giulia.'),
      fill('Se le pianure sono un quinto di 301 000 km², quanti km² sono (all’intero, circa)?', ['60200', '60000', '60.200', '60 200', '60.000', '60 000'], '301 000 / 5 = 60 200.'),
      mc('Che cos’è un distretto industriale?', ['Un’area con molte piccole imprese dello stesso settore', 'Un’unica grande fabbrica', 'Una zona agricola', 'Una regione'], 0, 'Esempi: ceramica a Sassuolo, occhialeria a Belluno.'),
      fill('Reddito pro capite Nord 36 000 €, Sud 24 000 €. Rapporto Sud/Nord (due decimali)?', ['0,67', '0.67'], '24 / 36 = 0,666…'),
      mc('Quale è il più lungo fiume italiano?', ['il Po', 'il Tevere', 'l’Adige', 'l’Arno'], 0, 'Circa 650 km.'),
      order('Ordina da nord a sud (per latitudine)', ['Aosta', 'Milano', 'Roma', 'Palermo'], 'La latitudine diminuisce scendendo verso sud.')
    ],
    test: [
      fill('Una città di 2,8 milioni in un paese di 59 milioni: quale % della popolazione (un decimale)?', ['4,7', '4.7'], '2,8 / 59 = 0,0475.'),
      mc('I due stati indipendenti dentro il territorio italiano sono:', ['San Marino e Città del Vaticano', 'Monaco e Andorra', 'Malta e Liechtenstein', 'Lussemburgo e Svizzera'], 0, 'Sono due enclave.'),
      mc('L’Etna è:', ['un vulcano attivo in Sicilia', 'una montagna delle Alpi', 'un fiume', 'un lago'], 0, 'Circa 3 300 m, quota variabile.'),
      fill('Basilicata: circa 540 000 abitanti su 10 073 km². Densità in ab/km² (all’intero)?', ['54', '53'], '540 000 / 10 073 ≈ 53,6.'),
      mc('La parte più grande dell’economia italiana per occupazione è:', ['il terziario', 'il primario', 'la pesca', 'l’estrazione'], 0, 'I servizi superano industria e agricoltura.'),
      mc('Perché il turismo di massa pone problemi al patrimonio?', ['Sovraffollamento e usura di luoghi fragili', 'Non attira visitatori', 'Riduce il PIL', 'Elimina la cultura'], 0, 'Venezia e le Cinque Terre sono esempi.'),
      fill('1 milione di visitatori che spendono 400 € ciascuno: quanti milioni di euro?', ['400'], '1 000 000 × 400 = 400 000 000.')
    ]
  });

  C.addTopic({
    id: 'cul-europa-e-unione-europea', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Europa e Unione europea',
    summary: 'Le tappe dell’integrazione europea, le istituzioni dell’UE (concetti), il mercato unico, l’euro e Schengen, con date e numeri svolti.',
    objectives: ['Ordinare le principali tappe dell’integrazione europea dal 1951 a oggi', 'Distinguere compiti e funzioni delle istituzioni dell’UE', 'Spiegare mercato unico, euro e area Schengen e fare semplici conversioni'],
    prereq: ['cul-continenti-e-regioni'],
    pages: [
      { h: 'Dall’Europa divisa all’integrazione', b: `Dopo la **Seconda guerra mondiale** (1939–1945) vari leader europei pensarono che legare le economie avrebbe reso impossibile un’altra guerra fra paesi vicini. Il 9 maggio 1950 il ministro francese **Robert Schuman** propose di mettere in comune la produzione di carbone e acciaio: oggi il 9 maggio è la **Festa dell’Europa**.

Tappe iniziali:
- **1951**, trattato di Parigi: nasce la **CECA** (Comunità europea del carbone e dell’acciaio) fra sei paesi: Belgio, Francia, Germania (Ovest), Italia, Lussemburgo, Paesi Bassi.
- **1957**, **Trattati di Roma** (25 marzo): nasce la **CEE** (Comunità economica europea), con il mercato comune, e l’Euratom.

I sei paesi fondatori sono ancora oggi membri. La logica funzionalista era: integrare un settore alla volta, creando interessi comuni e fiducia reciproca.

> Dai Trattati di Roma (1957) al 2026 sono passati 2026 − 1957 = **69 anni**.` },
      { h: 'Allargamenti e approfondimenti', b: `Due movimenti procedono insieme: **allargamento** (più membri) e **approfondimento** (più competenze comuni).

- **1973**: Danimarca, Irlanda, Regno Unito (da 6 a 9 membri).
- **1979**: prime elezioni dirette del Parlamento europeo.
- **1981–1986**: Grecia, poi Spagna e Portogallo (12 membri).
- **1992**, trattato di **Maastricht** (in vigore dal 1993): nasce l’**Unione europea** e si pianifica l’euro.
- **1995**: Austria, Finlandia, Svezia.
- **2004**: ingresso di dieci paesi, in gran parte dell’ex blocco sovietico (Polonia, Repubblica Ceca, Ungheria ecc.).
- **2007**: Bulgaria e Romania. **2013**: Croazia.
- **2009**: trattato di **Lisbona**, che riforma istituzioni e processi.
- **2020**: il **Regno Unito** esce (Brexit, 31 gennaio 2020).

Dopo l’uscita i membri sono **27**. Popolazione dell’UE: circa **450 milioni**.

> L’Italia, con circa 59 milioni, è circa 59 / 450 = **13%** della popolazione dell’UE.

Altri paesi hanno lo status di candidati: l’elenco cambia, va verificato in fonti aggiornate.` },
      { h: 'Le istituzioni: i concetti', b: `Le istituzioni dell’UE hanno ruoli distinti, un po’ come i poteri di uno stato, ma l’UE **non è uno stato federale**: i governi nazionali restano centrali.

- **Parlamento europeo**: eletto direttamente ogni **5 anni** dai cittadini; ha **720 seggi** (dal 2024) e approva leggi e bilancio insieme al Consiglio dell’UE.
- **Consiglio europeo**: i capi di stato o di governo; fissa gli indirizzi politici generali.
- **Consiglio dell’UE**: i ministri dei governi, per materia; adotta le leggi insieme al Parlamento.
- **Commissione europea**: l’organo esecutivo; **propone le leggi**, gestisce le politiche e vigila sui trattati («guardiana dei trattati»).
- **Corte di giustizia dell’UE** (Lussemburgo): garantisce l’interpretazione uniforme del diritto UE.
- **Banca centrale europea** (Francoforte): politica monetaria dell’euro.

> I seggi italiani sono 76 su 720: 76 / 720 ≈ **10,6%**, meno del 13% dei suoi abitanti perché il sistema dà ai paesi piccoli più seggi per abitante (**proporzionalità degressiva**).

Atti: **regolamenti** (validi direttamente in tutti gli stati) e **direttive** (fissano obiettivi che gli stati recepiscono con leggi proprie).` },
      { h: 'Come si decide', b: `Nel Consiglio dell’UE molte decisioni sono prese a **maggioranza qualificata**. Dal trattato di Lisbona questa richiede due condizioni insieme:

- almeno il **55% degli Stati membri** (quindi 15 su 27);
- che rappresentino almeno il **65% della popolazione** dell’UE.

> 27 × 0,55 = 14,85 → servono **15 stati**.

Per alcune materie sensibili (fiscalità, politica estera e di sicurezza, adesione di nuovi membri) serve invece l’**unanimità**: ogni stato può bloccare.

Procedura legislativa ordinaria: la **Commissione propone**; **Parlamento e Consiglio** discutono e approvano; gli stati applicano. Il principio di **sussidiarietà** dice che l’UE agisce solo se l’obiettivo si raggiunge meglio a livello europeo che nazionale. Il principio di **proporzionalità** limita i mezzi a quanto necessario.

I cittadini dell’UE hanno anche la **cittadinanza europea** (in aggiunta a quella nazionale): diritto di voto alle europee e alle elezioni comunali nel paese di residenza, libera circolazione, protezione consolare.` },
      { h: 'Il mercato unico', b: `Il **mercato unico** (completato formalmente nel 1993) garantisce le **quattro libertà**: circolazione di **merci, persone, servizi e capitali**.

Conseguenze pratiche:
- niente dazi doganali fra paesi UE;
- norme comuni di sicurezza dei prodotti (marchio **CE**);
- un cittadino UE può **vivere, lavorare e studiare** in un altro paese (programma **Erasmus**, dal 1987);
- regole comuni sulla concorrenza (vietati cartelli e aiuti di stato distorsivi);
- l’UE ha politiche comuni su agricoltura (PAC), coesione regionale, ambiente, commercio con il resto del mondo.

Con circa 450 milioni di consumatori, l’UE è uno dei maggiori blocchi commerciali del mondo e negozia accordi commerciali come un’unica entità.

> Se una merce costa 10 € di produzione e una tariffa doganale del 5% si applicasse all’importazione, costerebbe 10 × 1,05 = **10,50 €**: nel mercato unico quel 5% non c’è.

Il bilancio comune è piccolo rispetto all’economia: circa l’1% del reddito nazionale lordo dell’UE.` },
      { h: 'L’euro', b: `L’**euro** è la moneta comune di una parte degli stati UE (l’**area euro**). Il percorso: nel **1999** l’euro nasce come moneta scritturale (conti, mercati) con 11 paesi; il **1° gennaio 2002** entrano in circolazione monete e banconote in 12 paesi, fra cui l’Italia. L’area euro conta **20 paesi** dopo l’ingresso della Croazia (1° gennaio 2023); altri ingressi possono essere avvenuti dopo.

Il tasso di cambio fissato irrevocabilmente per l’Italia è: **1 euro = 1 936,27 lire**.

> 1 000 000 di lire = 1 000 000 / 1 936,27 ≈ **516,46 €**.
> 10 € = 10 × 1 936,27 = **19 362,70 lire**.
> Un caffè da 2 000 lire valeva circa 2 000 / 1 936,27 ≈ **1,03 €**.

La politica monetaria è gestita dalla **BCE** (obiettivo principale: stabilità dei prezzi, inflazione intorno al 2% nel medio termine). I vantaggi: niente costi di cambio e più confronto dei prezzi. Il rischio: i singoli paesi non possono svalutare la propria moneta. Per entrare servono i **criteri di convergenza** (inflazione, finanze pubbliche, tassi, stabilità del cambio). Anche paesi non UE (come il Kosovo o Montenegro) usano l’euro in modo unilaterale.` },
      { h: 'Schengen', b: `L’**area Schengen** elimina i **controlli sistematici alle frontiere interne**. Il nome deriva dal paese del Lussemburgo dove nel **1985** cinque paesi firmarono l’accordo; l’abolizione effettiva dei controlli iniziò il **26 marzo 1995**.

Oggi comprende la maggior parte degli stati UE più alcuni non UE (Islanda, Liechtenstein, Norvegia, Svizzera): circa **29 paesi** nel periodo recente. Alcuni stati UE non partecipano (come l’Irlanda) e altri sono entrati da poco: l’elenco va verificato.

Regole:
- chi entra da fuori ha controlli alle **frontiere esterne**;
- i paesi possono reintrodurre temporaneamente controlli per gravi motivi (sicurezza, emergenze);
- con un **visto Schengen** (per cittadini che ne hanno bisogno) si può viaggiare fra i paesi dell’area, fino a **90 giorni su 180**.

> Un viaggiatore che resta 60 giorni in Francia e poi 40 giorni in Italia, in un periodo di 180 giorni, ha usato **100 giorni**: supera il limite di 10 giorni.

Per i cittadini italiani, che sono cittadini UE, non c’è limite di giorni nell’area UE: resta il dovere di avere un **documento d’identità valido** (la carta d’identità valida per l’espatrio basta nell’UE).` },
      { h: 'Ruolo e limiti', b: `Bilancio equilibrato di ciò che l’UE rappresenta.

**Risultati**: pace fra membri da oltre settant’anni, grande mercato, libertà di movimento, standard comuni (ambiente, consumatori, protezione dei dati: **GDPR**, 2018), fondi di coesione e ricerca, un peso nelle trattative globali.

**Critiche e dibattiti**: complessità delle procedure, «deficit democratico» (distanza dei cittadini dalle istituzioni), differenze fra paesi su migrazioni, debito pubblico e difesa, tensioni fra sovranità nazionale e decisioni comuni. Il referendum del 2016 nel Regno Unito mostrò che l’adesione non è irreversibile.

Sono pareri politici: la scienza geografica e civica aiuta a **conoscere i fatti** (chi decide, con quale procedura) per formarsi un’opinione.

> Se il bilancio UE annuo è circa l’1% del reddito di un’economia da 17 000 miliardi di euro (ordine di grandezza), vale circa **170 miliardi**; confrontato con il bilancio di un grande stato nazionale (migliaia di miliardi), mostra che l’UE non è un super-stato.

Consiglio pratico: per informarti, usa fonti ufficiali (europa.eu, eur-lex) e confronta stampa di orientamenti diversi.` }
    ],
    exercises: [
      mc('In che anno furono firmati i Trattati di Roma?', ['1957', '1945', '1992', '2002'], 0, 'Il 25 marzo 1957, con CEE ed Euratom.'),
      mc('Quale non faceva parte dei sei paesi fondatori?', ['Spagna', 'Italia', 'Francia', 'Paesi Bassi'], 0, 'La Spagna entrò nel 1986.'),
      fill('Per una maggioranza qualificata serve il 55% di 27 stati: quanti stati (all’intero superiore)?', ['15'], '27 × 0,55 = 14,85.'),
      fill('1 000 000 di lire a 1 936,27 lire per euro: quanti euro (due decimali)?', ['516,46', '516.46'], '1 000 000 / 1 936,27.'),
      mc('Quale istituzione propone le leggi europee?', ['La Commissione europea', 'La BCE', 'La Corte di giustizia', 'Il Parlamento da solo'], 0, 'Ha il diritto di iniziativa legislativa.'),
      mc('Che cosa sono le «quattro libertà» del mercato unico?', ['Merci, persone, servizi, capitali', 'Parola, stampa, culto, riunione', 'Pace, lavoro, casa, salute', 'Euro, banca, dogana, tassa'], 0, 'Circolano liberamente tra gli stati dell’UE.'),
      fill('Quale anno vide l’entrata in circolazione di banconote e monete in euro?', ['2002'], '1° gennaio 2002.'),
      mc('La BCE ha sede a:', ['Francoforte', 'Bruxelles', 'Parigi', 'Roma'], 0, 'La Corte di giustizia è a Lussemburgo.'),
      mc('Con il visto Schengen un turista extra-UE può stare al massimo:', ['90 giorni su 180', '30 giorni', '1 anno', '180 giorni su 365'], 0, 'È la regola generale di soggiorno breve.'),
      fill('10 € in lire (al cambio 1 936,27), con arrotondamento all’intero?', ['19363', '19.363', '19 363'], '19 362,70 arrotondato.'),
      order('Ordina cronologicamente', ['CECA', 'Trattati di Roma', 'Trattato di Maastricht', 'Banconote in euro'], '1951, 1957, 1992 (in vigore 1993), 2002.')
    ],
    test: [
      fill('L’UE ha circa 450 milioni di abitanti, l’Italia 59. Quota % dell’Italia (all’intero)?', ['13'], '59 / 450 = 13,1%.'),
      mc('Un regolamento UE:', ['è direttamente applicabile in tutti gli stati', 'va recepito con legge nazionale', 'vale solo per il Parlamento', 'è facoltativo'], 0, 'Le direttive invece fissano obiettivi da recepire.'),
      fill('Quanti seggi ha il Parlamento europeo dal 2024?', ['720'], 'Sono 720.'),
      mc('Il principio di sussidiarietà significa che:', ['l’UE agisce solo se è più efficace dell’azione nazionale', 'tutte le decisioni sono europee', 'gli stati non possono decidere', 'la BCE decide tutto'], 0, 'Le decisioni restano il più vicino possibile ai cittadini.'),
      mc('Quale materia richiede di norma l’unanimità?', ['Politica estera e di sicurezza comune', 'Marchio CE', 'Concorrenza agricola', 'Erasmus'], 0, 'Ogni stato ha così un diritto di veto.'),
      fill('Da 1 000 000 di lire a 516,46 €: un caffè da 1 500 lire in euro (due decimali)?', ['0,77', '0.77'], '1 500 / 1 936,27 = 0,7747.'),
      mc('Schengen riguarda:', ['i controlli alle frontiere interne', 'la moneta', 'la difesa', 'l’energia'], 0, 'Elimina i controlli sistematici fra gli stati dell’area.')
    ]
  });

  C.addTopic({
    id: 'cul-geopolitica-organizzazioni', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Geopolitica e organizzazioni internazionali',
    summary: 'Stati, sovranità e confini; ONU, NATO, G7/G20 e altre organizzazioni; risorse e passaggi strategici, con un metodo per leggere gli eventi.',
    objectives: ['Spiegare che cos’è uno stato e come nascono i confini', 'Descrivere composizione e funzioni di ONU, NATO, G7/G20 e di alcune altre organizzazioni', 'Leggere conflitti e tensioni con un metodo equilibrato (interessi, risorse, diritto)'],
    prereq: ['cul-continenti-e-regioni'],
    pages: [
      { h: 'Stati, sovranità, confini', b: `Uno **stato** ha tre elementi: **popolo**, **territorio** e **governo sovrano**. La **sovranità** è il potere supremo su un territorio, senza un’autorità superiore. Gli stati membri dell’ONU sono **193** nel periodo recente; altri sono riconosciuti da alcuni e non da altri, ed esistono territori contesi.

I **confini** possono essere **naturali** (fiumi, catene montuose, coste) o **artificiali** (linee geometriche, meridiani, paralleli: tipici in Africa e Nord America). Molti confini africani furono tracciati nell’epoca coloniale (conferenza di Berlino, 1884–85) senza tener conto di popoli e lingue.

Le frontiere cambiano nel tempo: guerre, trattati, dissoluzioni (URSS 1991, Jugoslavia negli anni Novanta), indipendenze. Perciò ogni mappa politica è una fotografia di un periodo e **le informazioni su confini e appartenenze vanno controllate** su fonti aggiornate.

> Dalla fine della Seconda guerra mondiale il numero di stati è cresciuto da qualche decina a quasi 200, soprattutto con la decolonizzazione e la dissoluzione di URSS e Jugoslavia.

Regola: i principi del diritto internazionale sono la **integrità territoriale** e l’**autodeterminazione dei popoli**; non sempre vanno d’accordo e in molti casi si scontrano.` },
      { h: 'L’ONU', b: `L’**Organizzazione delle Nazioni Unite** nasce nel **1945** (carta firmata a San Francisco il 26 giugno, in vigore il 24 ottobre) con **51 membri fondatori**, per mantenere pace e sicurezza internazionali, promuovere i diritti e la cooperazione. Ha sede a **New York**; oggi conta **193 membri**.

Organi principali:
- **Assemblea generale**: tutti gli stati, **un voto ciascuno**; le risoluzioni sono raccomandazioni.
- **Consiglio di sicurezza**: 15 membri, di cui 5 **permanenti con diritto di veto** (Stati Uniti, Russia, Cina, Francia, Regno Unito) e 10 eletti per due anni. È l’unico organo che può adottare decisioni vincolanti; servono **9 voti su 15** e nessun veto dei permanenti.
- **Segretario generale**: capo dell’amministrazione.
- **Corte internazionale di giustizia** (L’Aia): dirime controversie tra stati che accettano la sua giurisdizione.

> 9 voti su 15 = **60%** dei membri; per le questioni importanti l’Assemblea chiede i due terzi dei presenti e votanti: con 193 votanti, 193 × 2/3 = 128,67 → **129 voti**.

Il veto è molto discusso: garantisce che le grandi potenze restino nel sistema, ma può paralizzare il Consiglio. Esistono proposte di riforma, senza accordo.` },
      { h: 'Agenzie ONU e diritti', b: `Intorno all’ONU ruotano molte agenzie specializzate.

- **FAO** (alimentazione e agricoltura, sede a Roma);
- **OMS** (salute, Ginevra);
- **UNESCO** (educazione, scienza, cultura, Parigi) che assegna la lista del Patrimonio mondiale;
- **UNICEF** (infanzia); **UNHCR** (rifugiati);
- **FMI** e **Banca mondiale** (nate a Bretton Woods, 1944) per stabilità finanziaria e sviluppo.

Il 10 dicembre **1948** l’Assemblea generale approva la **Dichiarazione universale dei diritti umani**, che non è un trattato vincolante ma ha una grande autorità morale e giuridica. Su di essa si fondano patti vincolanti per gli stati che li ratificano.

Le **missioni di pace** (caschi blu) sono forze inviate con il consenso delle parti e un mandato del Consiglio di sicurezza. Il successo dipende da mandato, mezzi e volontà politica.

La **Corte penale internazionale** (statuto di Roma 1998, in vigore dal 2002, sede a L’Aia) giudica singoli individui per crimini gravi; non tutti gli stati ne fanno parte.

> Se un organo ha 193 membri e 51 erano fondatori, i membri entrati dopo il 1945 sono 193 − 51 = **142**.` },
      { h: 'NATO e alleanze', b: `La **NATO** (Organizzazione del Trattato dell’Atlantico del Nord) è un’alleanza di difesa collettiva, nata nel **1949** con il Trattato di Washington fra 12 paesi (fra cui Italia, Stati Uniti, Canada, Regno Unito, Francia). L’**articolo 5** stabilisce che un attacco armato contro uno è considerato attacco contro tutti, con le azioni che ogni alleato giudica necessarie. Fu invocato una sola volta, dopo gli attacchi dell’11 settembre 2001.

Dopo la fine della Guerra fredda si è allargata a molti paesi dell’Europa centro-orientale. Nel periodo recente conta **32 membri** (Finlandia nel 2023, Svezia nel 2024). Sede a **Bruxelles**.

Altre organizzazioni regionali di sicurezza e cooperazione:
- **OSCE**: dialogo e controllo degli armamenti in Europa;
- **Unione africana** (2002, sede Addis Abeba);
- **ASEAN** nel Sud-Est asiatico; **OSA** in America;
- **Lega araba**, **CSTO** e altre.

Alleanze e organizzazioni nascono e cambiano: le loro azioni vanno giudicate sui fatti e sui documenti ufficiali, non su slogan. Ragionamento equilibrato: la deterrenza può prevenire conflitti, ma può anche essere percepita come minaccia dai rivali (dilemma della sicurezza).` },
      { h: 'G7, G20 e forum economici', b: `Il **G7** è un forum informale delle maggiori economie avanzate: **Canada, Francia, Germania, Giappone, Italia, Regno Unito, Stati Uniti**; l’Unione europea partecipa come ospite. Si riunisce ogni anno in uno dei paesi membri a rotazione, sotto presidenza annuale, e discute economia, sicurezza, clima. Non ha un trattato né sanzioni: produce **dichiarazioni** e orientamenti.

Il **G20** nasce nel 1999 fra ministri delle finanze e, dopo la crisi del 2008, si riunisce a livello di capi di stato e di governo. Comprende **19 paesi** più l’**Unione europea** e, dal 2023, l’**Unione africana**; include grandi economie emergenti (Cina, India, Brasile, Indonesia ecc.) e rappresenta circa l’**80% del PIL mondiale** e circa due terzi della popolazione.

Altri organismi: **OMC** (commercio, 1995, Ginevra), **OCSE** (economie avanzate, Parigi), **OPEC** (produttori di petrolio, Vienna), **BRICS** (gruppo di grandi economie emergenti, in espansione).

> Se il G20 vale l’80% del PIL e il PIL mondiale è circa 105 mila miliardi di dollari (ordine di grandezza), il G20 vale circa **84 mila miliardi**.

Ricorda: i vertici sono occasioni di coordinamento, non governi mondiali.` },
      { h: 'Risorse e punti strategici', b: `Le **risorse** (energia, acqua, minerali, terre agricole) influenzano le relazioni fra stati: dove sono concentrate, chi le possiede e come passano.

- **Petrolio e gas**: grandi riserve nel Golfo Persico, in Russia, in Nord America. Importatori ed esportatori sono interdipendenti.
- **Acqua**: i bacini condivisi (Nilo, Tigri-Eufrate, Mekong) richiedono accordi fra gli stati a monte e a valle.
- **Minerali critici** (litio, cobalto, terre rare) per batterie, elettronica ed energie rinnovabili: produzione e raffinazione concentrate in pochi paesi.

I **colli di bottiglia marittimi** sono stretti passaggi per il commercio:
- **Stretto di Hormuz**: vi transita circa un quinto del petrolio consumato nel mondo;
- **Canale di Suez**, **Bab el-Mandeb**, **stretto di Malacca**, **Bosforo**, **Canale di Panama**.

> Se il mondo consuma circa 100 milioni di barili al giorno e un quinto passa da Hormuz, sono circa **20 milioni di barili al giorno**.

La sicurezza degli approvvigionamenti spiega molte scelte: diversificare fornitori, scorte strategiche, rinnovabili. Sono dati che cambiano: usa fonti aggiornate (IEA, Banca mondiale).` },
      { h: 'Come leggere una crisi', b: `Per capire un conflitto o una tensione, evita la cronaca del giorno e applica un metodo.

1. **Attori**: stati, gruppi, organizzazioni; chi decide.
2. **Interessi**: sicurezza, risorse, prestigio, identità, economia.
3. **Storia**: precedenti, trattati, confini.
4. **Diritto internazionale**: sovranità, integrità territoriale, autodeterminazione, diritti umani, divieto dell’uso della forza (Carta ONU, art. 2.4), diritto alla legittima difesa (art. 51).
5. **Alternative**: diplomazia, sanzioni, mediazione, forza.
6. **Fonti**: confronta più fonti (ufficiali, giornalistiche, accademiche) e distingui **fatti**, **interpretazioni**, **propaganda**.

Il **realismo** vede soprattutto potenza e interessi; il **liberalismo** istituzioni e cooperazione; il **costruttivismo** idee e identità. Sono lenti diverse, non verità assolute.

> Un esempio di meccanismo: in Consiglio una risoluzione con 12 voti su 15 a favore **non passa** se uno dei 5 permanenti vota contro; la stessa con 8 voti favorevoli e nessun veto non passa comunque (servono 9).

Attenzione: i numeri e le situazioni di cronaca recente cambiano rapidamente, e le valutazioni iniziali sono spesso incomplete.` },
      { h: 'Riepilogo: tabella mentale delle organizzazioni', b: `Una sintesi da ripassare.

- **ONU** (1945, New York): 193 membri; Consiglio di sicurezza con 5 membri permanenti e veto.
- **NATO** (1949): alleanza di difesa collettiva, art. 5; 32 membri nel periodo recente.
- **UE**: integrazione economica e politica, 27 membri.
- **G7**: 7 economie avanzate; **G20**: 19 paesi più UE e Unione africana.
- **OMC** (1995): commercio; **FMI** e **Banca mondiale** (1944): finanza e sviluppo; **OMS**, **FAO**, **UNESCO**: agenzie ONU.

> Verifica numerica: 5 permanenti + 10 non permanenti = 15 membri; maggioranza di 9 su 15 = 60%; i due terzi di 15 sarebbero 10 voti.

Evita due errori frequenti: confondere **UE** con **ONU** o **NATO** (sono cose diverse) e attribuire a un forum informale (G7, G20) poteri che non ha.

Per ogni notizia nuova, chiediti: chi è l’organizzazione, che cosa può fare per trattato, con quale procedura decide?` }
    ],
    exercises: [
      mc('In che anno nasce l’ONU?', ['1945', '1919', '1957', '1989'], 0, 'Carta firmata a San Francisco, in vigore il 24 ottobre 1945.'),
      fill('Per il Consiglio di sicurezza servono 9 voti su 15. Quale % (all’intero)?', ['60'], '9 / 15 = 0,6.'),
      mc('Quali paesi hanno il veto nel Consiglio di sicurezza?', ['USA, Russia, Cina, Francia, Regno Unito', 'USA, Germania, Giappone, India, Brasile', 'Tutti i membri', 'Solo gli USA'], 0, 'Sono i cinque membri permanenti.'),
      fill('Due terzi di 193 votanti: quanti voti (all’intero superiore)?', ['129'], '193 × 2/3 = 128,67.'),
      mc('L’articolo 5 della NATO riguarda:', ['la difesa collettiva', 'il commercio', 'la moneta', 'l’ambiente'], 0, 'Un attacco a uno è un attacco a tutti.'),
      mc('Il G7 comprende:', ['Italia, Francia, Germania, Giappone, Regno Unito, Canada, USA', 'Italia, Cina, India, Brasile, Russia, Egitto, Spagna', 'Solo paesi europei', 'Tutti i membri UE'], 0, 'Più la UE come ospite.'),
      fill('51 fondatori su 193 membri attuali: quanti sono entrati dopo?', ['142'], '193 − 51.'),
      mc('Quale organizzazione ha sede a Roma?', ['la FAO', 'l’OMS', 'l’UNESCO', 'la NATO'], 0, 'La FAO si occupa di alimentazione e agricoltura.'),
      mc('Lo Stretto di Hormuz è importante perché:', ['vi transita una grande parte del petrolio mondiale', 'collega il Mediterraneo al Mar Nero', 'è un canale artificiale', 'è in Europa'], 0, 'Circa un quinto del petrolio consumato.'),
      fill('Il mondo consuma 100 milioni di barili al giorno e un quinto passa da Hormuz: quanti milioni?', ['20'], '100 / 5.'),
      order('Ordina cronologicamente', ['Bretton Woods', 'ONU', 'Dichiarazione universale dei diritti umani', 'NATO'], '1944, 1945, 1948, 1949.')
    ],
    test: [
      fill('Se il G20 vale l’80% di 100 mila miliardi, quanti mila miliardi?', ['80'], '0,8 × 100.'),
      mc('Il G20 comprende anche:', ['l’Unione europea e l’Unione africana', 'solo paesi europei', 'tutti i membri ONU', 'solo asiatici'], 0, 'L’UA è membro dal 2023.'),
      mc('La Dichiarazione universale dei diritti umani (1948) è:', ['una dichiarazione senza forza di trattato, ma con grande autorità', 'un trattato vincolante in sé', 'una legge italiana', 'un accordo commerciale'], 0, 'Ha ispirato patti vincolanti.'),
      mc('Che cosa significa «integrità territoriale»?', ['I confini di uno stato non si cambiano con la forza', 'Gli stati non possono commerciare', 'Ogni popolo ha uno stato', 'I confini sono sempre naturali'], 0, 'È un principio del diritto internazionale.'),
      mc('Una risoluzione ottiene 12 voti su 15 ma un membro permanente vota contro. Il risultato è:', ['non passa (veto)', 'passa', 'passa con 2/3', 'passa all’Assemblea'], 0, 'Il veto blocca la decisione.'),
      fill('Se un organo ha 15 membri: 5 permanenti e quanti non permanenti?', ['10'], '15 − 5.'),
      mc('I confini africani attuali sono in larga parte:', ['tracciati nell’epoca coloniale', 'fissati nel 1919', 'originari del Medioevo', 'sempre coincidenti con le etnie'], 0, 'Conferenza di Berlino 1884–85 e spartizione successiva.')
    ]
  });

  C.addTopic({
    id: 'cul-cartografia-coordinate', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Cartografia, coordinate e fusi orari',
    summary: 'Latitudine e longitudine, proiezioni, scale, curve di livello e fusi orari, con calcoli di distanze, pendenze e ore.',
    objectives: ['Leggere e convertire coordinate geografiche e calcolare distanze lungo i meridiani', 'Usare scala e curve di livello per misurare distanze e pendenze', 'Calcolare differenze di fuso orario e orari di arrivo'],
    pages: [
      { h: 'Latitudine e longitudine', b: `Un punto sulla Terra si individua con due coordinate angolari.

- **Latitudine**: angolo a nord (N) o a sud (S) dell’**equatore** (0°), da 0° a **90°**. I **paralleli** sono cerchi di uguale latitudine.
- **Longitudine**: angolo a est (E) o a ovest (W) del **meridiano di Greenwich** (0°), da 0° a **180°**. I **meridiani** sono semicerchi da polo a polo.

> Roma: circa **41,9° N, 12,5° E**. New York: circa 40,7° N, 74° W.

Le coordinate si scrivono in **gradi decimali** (45,5°) o in **gradi, primi e secondi** (45° 30′ 00″). Un grado = 60 primi, un primo = 60 secondi.

> 45° 30′ 00″ = 45 + 30/60 = **45,5°**. 12° 15′ 36″ = 12 + 15/60 + 36/3600 = **12,26°**.

I GPS usano in genere il sistema di riferimento **WGS 84**. Attenzione all’ordine: in molti sistemi si scrive prima la latitudine e poi la longitudine, in altri il contrario.` },
      { h: 'Distanze sulla sfera', b: `La circonferenza terrestre è circa **40 000 km**, quindi un grado di arco lungo un meridiano misura circa 40 000 / 360 ≈ **111 km**; un primo d’arco circa **1,85 km**.

Il **miglio nautico** vale esattamente **1 852 m** e corrisponde a un primo di latitudine; il **nodo** è un miglio nautico all’ora.

> Fra 40° N e 45° N lungo lo stesso meridiano: 5 × 111 = **555 km**.
> Fra due punti 3° di latitudine di differenza: 3 × 60 = 180 miglia nautiche = 180 × 1,852 ≈ **333 km**.

I meridiani convergono ai poli, quindi la lunghezza di un grado di **longitudine** dipende dalla latitudine φ:

> 1° di longitudine ≈ 111,32 × cos φ km
> a 0° (equatore): **111,3 km**; a 45°: 111,32 × 0,7071 ≈ **78,7 km**; a 60°: 111,32 × 0,5 ≈ **55,7 km**; ai poli: 0.

Per distanze molto grandi la via più breve è un arco di **cerchio massimo** (ortodromia): perciò gli aerei fra Europa e America seguono rotte che sulle mappe piane sembrano curve verso nord.` },
      { h: 'Proiezioni', b: `Una sfera non si può rappresentare su un piano **senza distorsioni**. Una **proiezione** è un metodo per farlo; alcune proprietà si conservano, altre si deformano.

- **Conforme** (conserva gli angoli e le forme locali): la **proiezione di Mercatore** (1569), utile alla navigazione perché una rotta a direzione costante è una linea retta. Ma ingrandisce molto le aree vicine ai poli: la Groenlandia appare grande quanto l’Africa, mentre l’Africa è circa **14 volte** più grande (30,4 contro circa 2,2 milioni di km²).
- **Equivalente** (conserva le aree): Gall–Peters, Mollweide; deformano le forme.
- **Equidistante**: conserva le distanze da un punto (carte con centro sul polo).

I tre «supporti» geometrici sono **cilindro** (Mercatore), **cono**, **piano** (carte polari).

Per le carte topografiche si usa spesso la **proiezione UTM** (Universal Transverse Mercator), che divide il mondo in 60 fusi di **6° di longitudine** e permette misure in metri.

> 360° / 6° = **60** fusi UTM. L’Italia è nei fusi 32, 33 e 34.

Quando guardi una mappa, chiediti sempre: che cosa è stato sacrificato?` },
      { h: 'La scala', b: `La **scala** è il rapporto fra una distanza sulla carta e la corrispondente distanza reale: scala 1:25 000 significa che **1 cm sulla carta = 25 000 cm = 250 m** nella realtà.

> 1:25 000 → 1 cm = 250 m → 4 cm = 1 km.
> 1:50 000 → 1 cm = 500 m → 2 cm = 1 km.
> 1:100 000 → 1 cm = 1 km.

Esempi svolti:
> Sulla 1:25 000 due rifugi distano 7,2 cm: 7,2 × 250 = **1 800 m**.
> Sulla 1:50 000 un tratto misura 4,2 cm: 4,2 × 0,5 = **2,1 km**.
> Un sentiero di 3 km sulla 1:25 000: 3 000 m / 250 = **12 cm** sulla carta.

Una **scala grande** (1:10 000) mostra un’area piccola con molti dettagli; una **scala piccola** (1:1 000 000) un’area vasta con pochi dettagli.

Le carte hanno anche una **scala grafica** (un segmento graduato), che resta valida se la carta viene ingrandita o ridotta in fotocopia, mentre la scala numerica no.

Attenzione: la distanza misurata sulla carta è **orizzontale** (in pianta); il percorso reale in salita è un po’ più lungo.` },
      { h: 'Curve di livello', b: `Le **curve di livello** (isoipse) uniscono tutti i punti alla **stessa quota**. La distanza verticale fra due curve vicine è l’**equidistanza** (per esempio 10 m o 25 m, indicata nella legenda). Ogni quinta curva è in genere più spessa e riporta la quota.

Come leggerle:
- curve **ravvicinate** → pendio **ripido**; curve **distanziate** → pendio dolce;
- curve chiuse concentriche → **cima** (o depressione: lo si capisce dalle quote);
- curve a «V» → **valle** (la punta indica verso monte) o **crinale** (la punta verso valle).

La **pendenza** si calcola come dislivello / distanza orizzontale:

> Da 1 350 m a 1 500 m di quota, con 1,2 km di distanza in orizzontale: dislivello 150 m; pendenza = 150 / 1 200 = 0,125 = **12,5%** → angolo ≈ atan(0,125) ≈ **7,1°**.
> Con equidistanza 10 m, fra i due punti si attraversano 150 / 10 = **15 curve**.

Una pendenza del 10% = 10 m di salita ogni 100 m = circa **5,7°**. Un sentiero escursionistico comune ha pendenza fra il 10% e il 30%.` },
      { h: 'Fusi orari: la regola dei 15°', b: `La Terra ruota di 360° in 24 ore: **15° = 1 ora**, quindi **1° = 4 minuti**.

Il mondo è diviso in **24 fusi orari** di 15° ciascuno. L’ora di riferimento è l’**UTC** (tempo coordinato universale), legato al meridiano di Greenwich.

- Italia: **UTC+1** (ora solare, CET); **UTC+2** in estate (ora legale, CEST).
- New York: UTC−5 (inverno), UTC−4 (estate).
- Tokyo: UTC+9 (non usa ora legale). Londra: UTC+0 (inverno), UTC+1 (estate).

Il **tempo solare locale** dipende dalla longitudine: Roma (12,5° E) è 2,5° a ovest del meridiano 15° E (su cui è basata l’ora italiana):

> 2,5° × 4 min = **10 minuti**: il mezzogiorno solare medio a Roma avviene alle 12:10 (ora CET).

I confini dei fusi seguono confini politici (la Cina usa un solo fuso, pur coprendo circa cinque fusi). La **linea del cambiamento di data** segue approssimativamente il meridiano 180°: attraversandola verso ovest si salta un giorno.

> Differenza di longitudine fra Roma e New York: 12,5 + 74 = 86,5° → 86,5 × 4 = 346 min ≈ 5 h 46 min di tempo solare; i fusi legali differiscono di **6 ore**.` },
      { h: 'Calcoli di ora e di viaggio', b: `Metodo: porta tutto a UTC, calcola, poi converti.

**Esempio 1.** In Italia (inverno, UTC+1) sono le 9:00. A Tokyo (UTC+9) la differenza è +8 ore → **17:00**. In estate (Italia UTC+2) la differenza è 7 ore → 16:00.

**Esempio 2.** Un volo parte da Roma alle 10:00 (UTC+1, inverno) e dura 9 h 30 min. Arrivo in ora di Roma: 19:30. New York è 6 ore indietro: **13:30 ora locale** (UTC−5).

**Esempio 3.** Una videochiamata fra Milano (UTC+1) e Los Angeles (UTC−8): differenza 9 ore. Se a Los Angeles sono le 8:00, a Milano sono le **17:00**.

**Esempio 4.** Un volo parte da Milano alle 12:00 (inverno) e arriva a Tokyo alle 07:00 del giorno dopo (ora locale). In ora di Milano, 07:00 a Tokyo sono 8 ore prima, cioè le 23:00 del giorno stesso: il volo dura 23:00 − 12:00 = **11 ore**.

Regole di prudenza: controlla se i paesi usano ora legale e in quali date; scrivi gli orari con l’indicazione del fuso (es. «17:00 UTC+9») per evitare ambiguità; per i viaggi con scali, ogni tratto ha il suo orario locale.

> Il jet lag cresce con il numero di fusi attraversati: il corpo si adatta di circa 1 fuso al giorno (ordine di grandezza).` },
      { h: 'Riepilogo: formule di cartografia', b: `Formule e numeri da ricordare.

- 1° di latitudine ≈ **111 km**; 1′ ≈ **1,85 km** (1 miglio nautico = 1 852 m).
- 1° di longitudine ≈ **111,32 × cos φ** km.
- Scala 1:N → 1 cm sulla carta = N/100 m. Per 1:25 000, 4 cm = 1 km.
- Pendenza % = dislivello / distanza orizzontale × 100.
- **15° = 1 ora**, 1° = 4 minuti; ora locale = UTC + fuso.

> Esempio completo: da Milano (45,5° N, 9,2° E) a un punto 2° più a sud sullo stesso meridiano: 2 × 111 = **222 km**. Su una carta 1:1 000 000 corrispondono a 222 000 000 mm / 1 000 000 = **222 mm**, cioè 22,2 cm.

> Una salita di 300 m su 2 km orizzontali ha pendenza 300 / 2 000 = **15%**.

Metodo di controllo: verifica sempre l’**ordine di grandezza** del risultato (una distanza fra due città italiane non può essere di 5 000 km) e le **unità** (cm sulla carta, m o km sul terreno).` }
    ],
    exercises: [
      fill('45° 30′ 00″ in gradi decimali?', ['45,5', '45.5'], '30′ = 0,5°.'),
      fill('Distanza lungo un meridiano fra 40° N e 45° N (111 km/grado), in km?', ['555'], '5 × 111.'),
      mc('Quanti metri reali sono 1 cm sulla carta alla scala 1:25 000?', ['250 m', '25 m', '2 500 m', '25 000 m'], 0, '25 000 cm = 250 m.'),
      fill('Sulla 1:25 000 due punti distano 7,2 cm. Distanza reale in metri?', ['1800', '1.800', '1 800'], '7,2 × 250.'),
      fill('Un tratto misura 4,2 cm su una carta 1:50 000. Distanza reale in km?', ['2,1', '2.1'], '4,2 × 0,5.'),
      mc('Quanto vale 1 miglio nautico?', ['1 852 m', '1 609 m', '1 000 m', '1 111 m'], 0, 'Corrisponde a un primo d’arco di meridiano.'),
      fill('Dislivello 150 m su 1 200 m orizzontali. Pendenza in %?', ['12,5', '12.5'], '150 / 1 200 = 0,125.'),
      fill('Quanti minuti corrispondono a 1° di longitudine (tempo solare)?', ['4'], '24 × 60 / 360.'),
      mc('In Italia sono le 9:00 (inverno). A Tokyo (UTC+9) sono le:', ['17:00', '16:00', '10:00', '09:00'], 0, 'Differenza di 8 ore.'),
      fill('Quanti fusi UTM da 6° coprono il globo?', ['60'], '360 / 6.'),
      order('Ordina il metodo per convertire un orario', ['Porta l’ora a UTC', 'Calcola la differenza di fuso', 'Somma o sottrai', 'Verifica l’ora legale'], 'Passare da UTC evita errori.')
    ],
    test: [
      fill('1° di longitudine a 60° di latitudine, in km (111,32 × cos 60°, un decimale)?', ['55,7', '55.7'], '111,32 × 0,5 = 55,66.'),
      mc('Quale proiezione ingrandisce molto le aree vicine ai poli?', ['Mercatore', 'Mollweide', 'Equivalente', 'Nessuna'], 0, 'È conforme ma distorce le aree.'),
      fill('Un sentiero di 3 km su una carta 1:25 000 misura in cm?', ['12'], '3 000 / 250.'),
      mc('Curve di livello molto ravvicinate indicano:', ['un pendio ripido', 'una pianura', 'un lago', 'una cresta piana'], 0, 'Poca distanza orizzontale per lo stesso dislivello.'),
      fill('Volo Roma–New York: partenza 10:00 (Roma), 9 h 30 di volo, New York 6 ore indietro. Ora d’arrivo locale (hh:mm)?', ['13:30', '13.30'], '19:30 − 6 h.'),
      fill('Con equidistanza di 25 m, quanti intervalli fra le quote 1 000 m e 1 250 m?', ['10'], '250 / 25.'),
      mc('Se a Los Angeles (UTC−8) sono le 8:00, a Milano (UTC+1) sono le:', ['17:00', '07:00', '16:00', '00:00'], 0, 'Differenza di 9 ore.')
    ]
  });

  C.addTopic({
    id: 'cul-orientarsi-e-viaggiare', subject: 'sec', stage: 'L2', minutes: 14,
    title: 'Orientarsi e viaggiare',
    summary: 'Bussola, azimut e direzioni reciproche, declinazione magnetica, mappa topografica, tempi di cammino (Naismith), sicurezza e itinerari.',
    objectives: ['Calcolare azimut, direzioni reciproche e correzioni per la declinazione', 'Stimare i tempi di cammino con la regola di Naismith e pianificare un itinerario', 'Preparare un viaggio con documenti, assicurazione, salute e margini di sicurezza'],
    prereq: ['cul-cartografia-coordinate'],
    pages: [
      { h: 'Punti cardinali e bussola', b: `I quattro **punti cardinali** sono Nord, Est, Sud, Ovest. In senso orario fra N e E c’è il Nord-Est, e così via: otto direzioni principali.

La **bussola** ha un ago magnetizzato che si allinea al campo magnetico terrestre e punta verso il **nord magnetico**. Si usa tenendola piana, lontana da metalli, magneti e dispositivi elettronici che falsano la lettura.

Altri metodi per orientarsi:
- **Sole**: nell’emisfero nord, a mezzogiorno solare il Sole è a sud.
- **Stella Polare**: indica il nord; la sua altezza sull’orizzonte è circa uguale alla **latitudine** del luogo (a Roma, circa 42°).
- **Indizi naturali** (muschio sui tronchi, forma degli alberi) sono poco affidabili: non vanno usati come unico metodo.
- **GPS e smartphone**: comodi ma dipendono da batteria e segnale; porta sempre carta e bussola.

> Il Sole ruota apparentemente di 15° all’ora: a metà pomeriggio non è più a sud ma verso ovest, quindi la regola «a sud» vale solo intorno al mezzogiorno solare.` },
      { h: 'Azimut e direzione reciproca', b: `L'**azimut** è l’angolo misurato dal **nord in senso orario**, da 0° a 360°.

- N = **0°** (o 360°), E = **90°**, S = **180°**, W = **270°**; NE = 45°, SE = 135°, SW = 225°, NW = 315°.

La **direzione reciproca** (contro-azimut) è la direzione opposta, cioè quella per tornare indietro: si aggiungono o si tolgono **180°**.

> Azimut di andata 65° → reciproca 65 + 180 = **245°**.
> Azimut di andata 310° → reciproca 310 − 180 = **130°**.

Per **seguire un azimut** si porta il valore sulla ghiera, si orienta la bussola finché l’ago coincide con la freccia di orientamento e si cammina nella direzione indicata, scegliendo punti di riferimento sul percorso (un albero, un masso).

Per **misurare un azimut** si punta la freccia di direzione verso il bersaglio e si ruota la ghiera finché l’ago è allineato: la lettura è l’azimut.

> Un errore di 5° su 2 km sposta di 2 000 × tan 5° ≈ **175 m**; 1° su 1 km sposta di circa **17 m**. Piccoli errori angolari diventano grandi errori sulle lunghe distanze.` },
      { h: 'Declinazione magnetica', b: `Il **nord magnetico** non coincide con il **nord geografico** (la direzione verso il polo Nord, che è anche la direzione dei meridiani sulla carta). L’angolo fra i due è la **declinazione magnetica**: varia da luogo a luogo e **cambia lentamente nel tempo**. In Italia, nel periodo recente, è di pochi gradi (di solito qualche grado verso est); il valore aggiornato è riportato sul bordo di molte carte o si ottiene da servizi online.

Conversione, con declinazione **est** (positiva) di D gradi:

> **Azimut magnetico = azimut geografico − D**
> **Azimut geografico = azimut magnetico + D**

> Con D = +4° E: dalla carta si legge un azimut geografico di 120° → in bussola si imposta 120 − 4 = **116°**.
> Con D = +4° E, bussola 90° → direzione geografica = 94°.
> Con D = +4° E e azimut geografico 2° → 2 − 4 = −2° → **358°** (si aggiungono 360° se negativo).

Per declinazione **ovest** vale il contrario (si somma per passare da geografico a magnetico).

Se la regione ha declinazione molto piccola o se l’errore è accettabile in rapporto alla distanza, si può trascurarla, ma in zone con grandi declinazioni (alcune zone del globo superano i 10°–20°) è essenziale.` },
      { h: 'Leggere una mappa topografica', b: `Una **carta topografica** (per esempio una carta escursionistica 1:25 000) rappresenta in dettaglio il terreno.

Elementi da controllare:
1. **Legenda**: simboli di sentieri, rifugi, strade, corsi d’acqua, boschi.
2. **Scala** e **equidistanza**.
3. **Reticolo di coordinate** (UTM o geografico) e freccia del nord.
4. **Numerazione dei sentieri** (es. CAI nelle Alpi italiane).

Il metodo per orientare la carta: appoggiala su una superficie piana, allinea le linee del reticolo verso il nord con l’ago della bussola (correggendo la declinazione) e confronta il paesaggio con i simboli.

**Individuare la propria posizione**: con due punti di riferimento visibili, misura i loro azimut con la bussola, calcola i contro-azimut e traccia due linee sulla carta: il tuo punto è all’**intersezione**. Con tre punti ottieni un piccolo triangolo di errore.

> Se il rifugio A è a 40° e il rifugio B a 130°, i contro-azimut sono 220° e 310°: le linee tracciate da A e B con quegli angoli si incontrano nella tua posizione.

Controlla sempre il **profilo altimetrico**: percorsi con poche curve distanziate sono facili, con curve fitte sono ripidi.` },
      { h: 'Tempi di cammino: Naismith', b: `La **regola di Naismith** (William Naismith, 1892) stima il tempo di cammino:

> **5 km all’ora in piano + 1 ora ogni 600 m di salita**

È una stima per escursionisti allenati su sentiero senza carichi pesanti.

> 10 km con 900 m di salita: 10 / 5 = 2 h; 900 / 600 = 1,5 h → **3,5 h** (3 h 30).
> 12 km con 600 m di salita: 12 / 5 = 2,4 h; + 1 h = **3,4 h** (3 h 24).
> 14 km con 1 200 m di salita: 2,8 h + 2 h = **4,8 h** (4 h 48).

Varianti: in Italia le guide indicano spesso 300–400 m/h di dislivello in salita e 4 km/h in piano; in discesa ripida si aggiungono tempi per la fatica. Regole di prudenza:
- aggiungi **pause** (circa 10 minuti ogni ora o 15 minuti ogni 90);
- aumenta i tempi con zaino pesante, gruppo numeroso, terreno difficile, neve o caldo;
- calcola un **margine** di sicurezza;
- misura sempre il tempo reale della tua prima ora e **ricalibra**.

Il dislivello in salita si calcola dalla carta sommando i tratti in salita, non solo con la differenza fra partenza e arrivo.` },
      { h: 'Pianificare un itinerario', b: `Prima di partire:

1. **Obiettivo e livello**: scegli un itinerario adatto al gruppo meno allenato.
2. **Carta e tracce**: studia percorso, alternative, fonti d’acqua, punti di fuga.
3. **Meteo**: previsioni ufficiali; rinuncia se c’è rischio di temporali o neve.
4. **Orari**: parti presto e **calcola il rientro prima del buio**.
5. **Attrezzatura**: scarpe adatte, strati, acqua, cibo, kit di primo soccorso, torcia frontale, telo termico, carta e bussola, batteria esterna.
6. **Comunica** l’itinerario a qualcuno e l’ora prevista di rientro.

> Esempio: 14 km e 1 200 m di salita → 4 h 48 + 30 min di pause = **5 h 18**. Tramonto alle 17:30, vuoi rientrare con 1 h di margine, cioè entro le 16:30. Partenza massima = 16:30 − 5:18 = **11:12**. Meglio le 8:00.

Se serve aiuto in montagna in Italia: **112** (numero unico di emergenza) che gira la richiesta al **Soccorso alpino**. Fornisci posizione (coordinate) e numero di persone.

Regola d’oro: **quando il rischio cresce, torna indietro**; la cima non scappa.` },
      { h: 'Sicurezza nei viaggi', b: `Per un viaggio all’estero, controlla con anticipo.

**Documenti**
- Nell’UE basta la **carta d’identità valida per l’espatrio** (o il passaporto).
- Fuori UE di solito serve il **passaporto**; molti paesi richiedono che sia valido per **3–6 mesi dopo l’ingresso** e con pagine libere.
- Alcuni paesi richiedono **visto** o **autorizzazione di viaggio online** (come l’ESTA per gli Stati Uniti): verifica prima sui siti ufficiali.
- Porta **copie** (cartacee e digitali separate) dei documenti.

**Salute**
- Verifica vaccinazioni e profilassi con la ASL o un centro di medicina dei viaggi.
- Nell’UE la **Tessera europea di assicurazione malattia (TEAM)**, sul retro della tessera sanitaria, dà accesso alle cure urgenti pubbliche alle stesse condizioni dei residenti.
- Fuori UE conviene una **assicurazione di viaggio** che copra spese mediche e rimpatrio sanitario, oltre a bagaglio e annullamento.

**Informazione**: il sito del Ministero degli esteri **Viaggiare Sicuri** e il portale «Dove siamo nel mondo» segnalano rischi e permettono di registrare il viaggio. In emergenza: **112** nell’UE.

> Passaporto che scade il 10 marzo, viaggio con ingresso il 15 gennaio, regola dei 6 mesi: servirebbe validità almeno fino al 15 luglio → **non basta**, rinnovalo.

Buone abitudini: diversifica contanti e carte, non esibire oggetti di valore, tieni i farmaci nel bagaglio a mano con prescrizione.` },
      { h: 'Riepilogo e lista di controllo', b: `Lista di controllo da stampare.

**Prima**: itinerario adatto, carta e bussola, meteo, orari con margine, avviso a una persona, documenti e assicurazione se all’estero.

**Durante**: orienta la carta, controlla la posizione ogni volta che cambia il terreno, verifica i tempi di Naismith sulla prima ora, bevi e mangia, non separare il gruppo.

**Se sei in difficoltà**: fermati, ricostruisci l’ultima posizione certa, torna sui tuoi passi (direzione reciproca), chiama il **112** con coordinate.

> Calcolo finale: andata 13 km, +900 m. Naismith: 13 / 5 + 900 / 600 = 2,6 + 1,5 = **4,1 h** ≈ 4 h 06; con 30 min di pause 4 h 36. Se il ritorno richiede la stessa durata, il giro dura fra le 8 e le 9 h: parti in tempo per rientrare con la luce.

Le competenze si consolidano con l’**uso**: esercitati su itinerari brevi e noti prima di affrontare terreni isolati, e confronta sempre la stima con il tempo reale.` }
    ],
    exercises: [
      mc('Qual è l’azimut dell’Est?', ['90°', '0°', '180°', '270°'], 0, 'Si misura dal nord in senso orario.'),
      fill('Azimut di andata 65°. Direzione reciproca in gradi?', ['245'], '65 + 180.'),
      fill('Azimut di andata 310°. Direzione reciproca in gradi?', ['130'], '310 − 180.'),
      fill('Declinazione +4° E, azimut geografico 120°. Azimut da impostare in bussola?', ['116'], '120 − 4.'),
      mc('La declinazione magnetica è:', ['l’angolo fra nord geografico e nord magnetico', 'l’inclinazione del terreno', 'la latitudine', 'l’altezza del Sole'], 0, 'Varia con il luogo e il tempo.'),
      fill('Naismith: 10 km con 900 m di salita. Tempo totale in ore?', ['3,5', '3.5'], '10/5 + 900/600 = 2 + 1,5.'),
      fill('Naismith: 12 km con 600 m di salita. Tempo in minuti?', ['204'], '3,4 h × 60.'),
      fill('Errore di 5° su 2 km: spostamento circa in metri (all’intero, tan 5° ≈ 0,0875)?', ['175', '174'], '2 000 × 0,0875.'),
      mc('Per portare l’azimut dal nord geografico al magnetico con declinazione est si:', ['sottrae la declinazione', 'somma la declinazione', 'moltiplica per 2', 'non si fa nulla'], 0, 'Magnetico = geografico − D (est).'),
      mc('Il numero di emergenza unico europeo è:', ['112', '118', '911', '999'], 0, 'In Italia è attivo il 112 con smistamento ai soccorsi.'),
      order('Ordina una buona pianificazione', ['Scegli l’itinerario', 'Controlla il meteo', 'Calcola tempi e rientro', 'Avvisa qualcuno'], 'Prima il piano, poi la verifica, poi la comunicazione.')
    ],
    test: [
      fill('Naismith: 14 km con 1 200 m di salita. Ore totali (un decimale)?', ['4,8', '4.8'], '2,8 + 2.'),
      fill('Itinerario di 5 h 18 min con rientro entro le 16:30. Orario massimo di partenza (hh:mm)?', ['11:12', '11.12'], '16:30 − 5:18.'),
      mc('La reciproca di un azimut di 20° è:', ['200°', '160°', '340°', '110°'], 0, '20 + 180.'),
      mc('Quale documento basta, in genere, per viaggiare tra paesi UE per un cittadino italiano?', ['Carta d’identità valida per l’espatrio', 'Visto', 'Solo il codice fiscale', 'Patente scaduta'], 0, 'Nell’UE vale come documento di viaggio.'),
      fill('Declinazione +4° E, azimut geografico 2°. Azimut magnetico (0–360)?', ['358'], '2 − 4 = −2 → 358.'),
      mc('La TEAM serve per:', ['cure urgenti nel sistema pubblico di altri paesi UE', 'ottenere un visto', 'cambiare moneta', 'assicurare il bagaglio'], 0, 'È sul retro della tessera sanitaria.'),
      mc('Se il tempo peggiora e il rischio cresce, la scelta più prudente è:', ['tornare indietro', 'accelerare', 'separare il gruppo', 'ignorare il meteo'], 0, 'La sicurezza viene prima dell’obiettivo.')
    ]
  });

})(window.ST = window.ST || {});
