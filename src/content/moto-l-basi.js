/* Moto e guida sportiva — L0 Capire la moto: 8 lezioni per chi parte da zero, con la sicurezza al primo posto. */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, fill, order } = C;

  /* ---------- L0 · Capire la moto ---------- */
  C.addTopic({
    id: 'moto-tipi-di-moto', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'I tipi di moto e a chi servono',
    summary: 'Naked, sportive, touring, adventure, custom, scooter, enduro e supermotard: come sono fatte, a che cosa servono e quali sono adatte a chi comincia.',
    objectives: ['Riconoscere gli otto grandi tipi di moto dalle caratteristiche principali', 'Associare a ogni tipo l’uso per cui è nato e il tipo di motociclista', 'Calcolare il rapporto potenza/peso e convertire kW in CV'],
    pages: [
      { h: 'Non esiste «la moto migliore»', b: `Una moto è un compromesso: ciò che la rende ottima per un uso la rende scomoda per un altro. Una moto da pista è velocissima nelle curve ma stanca in città; una moto da viaggio è comoda ma pesante da manovrare.

Per confrontare le moto servono tre numeri.

- **Cilindrata**: il volume totale dei cilindri del motore, misurato in **cm³** (centimetri cubi). Una «125» ha circa 125 cm³.
- **Potenza**: quanto lavoro fa il motore in un secondo, misurata in **kW** (chilowatt) o in **CV** (cavalli). Si converte con **1 kW ≈ 1,36 CV**.
- **Peso**: la massa della moto, in kg. Conta moltissimo nelle manovre.

> Esempio: 11 kW × 1,36 ≈ **15 CV**. Una moto da 11 kW e 110 kg ha un rapporto potenza/peso di 11 / 110 = **0,1 kW/kg**.

In questa lezione vediamo gli otto tipi principali. Il nome indica lo **scopo**: scegliere in base all’uso che farai davvero è il primo passo per guidare in sicurezza.` },
      { h: 'Naked e sportive', b: `La **naked** («nuda») non ha la **carena**, cioè i pannelli di plastica che coprono motore e telaio. Il busto è quasi eretto, il manubrio è alto e largo. È agile, versatile e adatta a città e strade normali. Contro: il vento sul petto si fa sentire alle velocità autostradali.

La **sportiva** ha una carena integrale e i **semimanubri**, due manubri bassi e separati fissati alla forcella. Il busto è inclinato in avanti, le gambe sono raccolte. È progettata per la pista: freni potenti, telaio rigido, ma polsi, schiena e collo soffrono nel traffico.

- Le sportive **di cilindrata elevata** (oltre i 600–1000 cm³) hanno prestazioni che su strada non si possono usare in modo legale e sicuro. Non sono moto per chi comincia.
- Esistono sportive di media cilindrata, più docili, e naked derivate dalle sportive.

Le prestazioni da sportiva si esplorano **in pista**, con un corso e in sicurezza, non sulle strade aperte al traffico.` },
      { h: 'Touring e adventure', b: `La **touring** è fatta per viaggiare a lungo: grande cupolino (il parabrezza che devia il vento), sella comoda, serbatoio capiente, borse laterali e bauletto. Il prezzo è il **peso**: spesso supera i 250 kg con i bagagli, quindi le manovre da fermo richiedono forza ed esperienza. La **sport-touring** è una via di mezzo, più sportiva.

La **adventure** (o «maxi-enduro») ha ruote anteriori grandi, **sospensioni lunghe** (corsa ampia, per assorbire buche e sterrato), sella alta, paramani e protezioni. Permette di viaggiare su asfalto e anche su strade bianche (sterrate leggere).

- Sella spesso molto alta: chi è di statura bassa può non toccare terra con i piedi.
- Peso e altezza le rendono impegnative per un principiante, anche se la posizione è comoda.

Chi le sceglie: chi ama il viaggio e il comfort. Prima di comprarne una, conviene aver accumulato **chilometri di esperienza** su una moto più leggera.` },
      { h: 'Custom e scooter', b: `La **custom** (o *cruiser*) ha la sella molto bassa (spesso intorno a 650–720 mm da terra), le gambe in avanti sulle **pedane avanzate**, il manubrio largo. Il baricentro è basso, la posizione è rilassata. Svantaggi: peso elevato, poca luce a terra (le pedane toccano a terra nelle curve a bassa velocità di piega), frenata e curve meno vivaci.

Lo **scooter** ha un **cambio automatico** (a variatore, senza marce da scegliere): basta girare la manopola del gas. Ha una pedana piatta per i piedi, un vano sotto la sella, ruote piccole. Sullo scooter **non c’è la leva della frizione e non c’è il pedale del cambio**; le due leve a mano sono i due freni: la sinistra frena la ruota posteriore, la destra frena l’anteriore.

- Esiste lo scooter da città (50–125 cm³) e il **maxi-scooter** (300–600 cm³), adatto anche ai viaggi.
- È il mezzo più semplice per cominciare, ma frena e sbanda come tutte le moto: richiede casco, abbigliamento e attenzione.` },
      { h: 'Enduro, cross e supermotard', b: `Le moto «da fuoristrada» sono leggere (spesso 100–150 kg), hanno sospensioni lunghe, sella alta e **pneumatici tassellati**, cioè con tacchetti per far presa sul fango.

- **Cross**: serve solo per il fuoristrada e le gare; **non è omologata** per circolare su strada.
- **Enduro**: è la versione con luci, targa e silenziatore, quindi **omologata** per strada e sterrato. In asfalto bagnato i tasselli aderiscono poco.
- **Supermotard** (o *motard*): una moto da enduro con **ruote da 17 pollici** e gomme stradali (le ruote hanno tipicamente quella misura). Agile, leggera, con freni potenti. Posizione alta e vibrazioni la rendono meno comoda sui lunghi percorsi.

Chi le sceglie: chi ama il fuoristrada (cross/enduro) o una guida vivace in città e su strade tortuose (supermotard).

Attenzione: la leggerezza non vuol dire facilità. La sella alta può rendere difficile toccare terra, e la sensibilità del gas è spesso brusca.` },
      { h: 'Quale tipo per chi parte da zero', b: `Non c’è una risposta unica. Ecco una guida orientativa.

| Uso principale | Tipo di moto |
| --- | --- |
| Città e spostamenti quotidiani | scooter, naked media, supermotard |
| Strade extraurbane e curve | naked, sport-touring |
| Viaggio con bagagli | touring, adventure, maxi-scooter |
| Sterrato | enduro, adventure |
| Pista | sportiva (dopo un corso) |
| Relax e stile | custom |

Per un principiante vanno bene le moto **leggere, con potenza dolce e sella alla propria altezza**: naked di media cilindrata, scooter, custom leggere, enduro di piccola cilindrata.

> Regola pratica: la moto giusta per cominciare è quella che **riesci a tenere ferma a piedi uniti e a muovere con una mano**, senza sforzo. Nei prossimi capitoli vedremo come misurarlo.

Il fascino dei modelli più potenti non è un buon criterio d’acquisto: la prima moto serve per **imparare**.` },
      { h: 'Potenza, peso e rapporto', b: `Due moto con la stessa potenza si comportano in modo diverso se pesano diversamente. Per questo si usa il **rapporto potenza/peso**, in kW/kg:

> **rapporto = potenza (kW) / massa (kg)**

Esempi:

> Moto A: 25 kW, 150 kg → 25 / 150 ≈ **0,167 kW/kg**
> Moto B: 35 kW, 150 kg → 35 / 150 ≈ **0,233 kW/kg**
> Moto C: 35 kW, 200 kg → 35 / 200 = **0,175 kW/kg**

La B ha più potenza per ogni kg ed è molto più «vivace» della C, anche se hanno gli stessi 35 kW.

Questi rapporti, come vedremo nella lezione sulla patente, servono anche a stabilire quali moto può guidare un neopatentato. Più alto è il valore, più la moto reagisce con forza al gas: per chi comincia è un motivo in più per scegliere un valore basso.

Conversione utile: **CV = kW × 1,36**. Per esempio 35 kW × 1,36 ≈ 47,6 CV.` },
      { h: 'Falsi miti e riepilogo', b: `Quattro idee sbagliate molto diffuse.

- **«Più cc = moto migliore.»** Falso: contano peso, potenza, comfort e uso. Una 125 ben guidata è più sicura di una 1000 mal guidata.
- **«La sportiva è la moto vera.»** Falso: è una moto da pista. In strada ha uso limitato.
- **«Lo scooter non è una vera moto.»** Per la sicurezza è un veicolo a due ruote come gli altri: servono casco, equipaggiamento e corso.
- **«La custom è facile perché è bassa.»** Attenzione: spesso pesa molto, e con le gambe in avanti il controllo è diverso.

Riepilogo dei tipi: naked (agile, versatile), sportiva (pista), touring (viaggio), adventure (viaggio e sterrato), custom (relax), scooter (città, automatico), enduro/cross (fuoristrada), supermotard (agile in città).

> In ogni caso, le prestazioni di una moto si esplorano **in pista**, in sicurezza e dopo un corso: la strada è piena di persone che non si aspettano una moto al limite.` }
    ],
    exercises: [
      mc('Quale tipo di moto non ha la carena e ha il busto quasi eretto?', ['Naked', 'Sportiva', 'Touring', 'Scooter'], 0, 'Naked significa «nuda»: niente carene. È agile e adatta a uso misto.'),
      mc('Quale tipo di moto ha ruote da 17 pollici con gomme stradali ed è derivata dall’enduro?', ['Supermotard', 'Cross da fuoristrada', 'Custom a ruote basse', 'Touring da viaggio'], 0, 'Il supermotard (o motard) è un’enduro con ruote da 17 pollici e freni potenti.'),
      mc('Quale tipo di moto non è omologato per circolare su strada?', ['Cross', 'Enduro', 'Scooter', 'Naked'], 0, 'La cross è solo per il fuoristrada e le gare; l’enduro ha invece luci, targa e omologazione.'),
      mc('Quale caratteristica rende impegnative per un principiante le adventure?', ['Sella alta e peso elevato', 'Peso contenuto e sella molto bassa', 'Potenza ridotta e cambio semiautomatico', 'Assenza di borse e parabrezza'], 0, 'Spesso hanno sella alta e peso notevole: chi è basso può non toccare terra con i piedi.'),
      mc('Sullo scooter, che cosa fa la leva sinistra?', ['Frena la ruota posteriore', 'Cambia marcia con la punta', 'Aziona la frizione del cambio', 'Frena la ruota anteriore'], 0, 'Lo scooter ha cambio automatico: le due leve sono i due freni, sinistra posteriore e destra anteriore.'),
      fill('Una moto ha una potenza di 11 kW. Quanti CV sono, circa (arrotonda all’intero; 1 kW = 1,36 CV)?', ['15'], '11 × 1,36 = 14,96, cioè circa 15 CV.'),
      fill('Una moto da 25 kW pesa 150 kg. Quanto vale il rapporto potenza/peso in kW/kg, con tre decimali?', ['0,167', '0.167'], '25 / 150 = 0,1667, cioè 0,167 kW/kg.'),
      fill('Moto da 35 kW e 200 kg. Quanto vale il rapporto potenza/peso in kW/kg, con tre decimali?', ['0,175', '0.175'], '35 / 200 = 0,175 kW/kg.'),
      mc('Quale scelta è più sensata per chi parte da zero?', ['Una moto leggera con potenza dolce e sella alla propria altezza', 'La sportiva più potente sul mercato, per imparare in fretta', 'La moto più pesante, che dà stabilità', 'Una enduro molto alta, per dominare meglio il traffico'], 0, 'La prima moto serve a imparare: conta controllare facilmente, non le prestazioni massime.'),
      mc('Perché le prestazioni di una sportiva vanno esplorate in pista?', ['Perché lì c’è uno spazio controllato, senza traffico e con strutture di sicurezza', 'Perché in pista i limiti non esistono e si può spingere al massimo', 'Perché su strada le sportive non funzionano bene', 'Perché la legge impone di usare solo la pista'], 0, 'In pista c’è assenza di traffico opposto, vie di fuga e personale: su strada un errore coinvolge altre persone.'),
      order('Ordina gli esempi dal rapporto potenza/peso più basso al più alto', ['25 kW su 200 kg (0,125)', '25 kW su 150 kg (0,167)', '35 kW su 175 kg (0,20)', '35 kW su 150 kg (0,233)'], 'Calcola potenza divisa per peso e ordina in senso crescente.')
    ],
    test: [
      mc('Quale tipo di moto ha parabrezza grande, borse e serbatoio capiente ed è pensata per viaggiare?', ['Touring', 'Cross', 'Supermotard', 'Naked'], 0, 'La touring privilegia comfort e autonomia, a costo di peso elevato.'),
      mc('Che cosa sono i semimanubri tipici delle sportive?', ['Due manubri bassi e separati fissati alla forcella', 'Un manubrio alto e largo come sulle naked', 'Un manubrio unico con frizione elettronica integrata nel comando', 'Due specchietti aggiuntivi sulla carena'], 0, 'I semimanubri portano il busto in avanti; sono comodi in pista, meno in città.'),
      fill('Una moto da 14 kW pesa 140 kg. Quanto vale il rapporto potenza/peso in kW/kg?', ['0,1', '0.1', '0,10', '0.10'], '14 / 140 = 0,1 kW/kg.'),
      fill('Una moto ha 35 kW. Quanti CV sono, circa (arrotonda all’intero; 1 kW = 1,36 CV)?', ['48'], '35 × 1,36 = 47,6, cioè circa 48 CV.'),
      mc('Quale svantaggio tipico ha una custom rispetto a una naked?', ['Peso elevato e poca luce a terra nelle curve', 'Assenza del freno anteriore di serie', 'Cambio automatico obbligatorio per omologazione', 'Impossibilità di percorrere strade statali'], 0, 'La custom ha pedane avanzate e peso: meno agile e con limiti di piega.'),
      mc('Quale delle seguenti frasi è un falso mito?', ['Più cc significa sempre moto migliore', 'Il peso incide sulle manovre', 'Il tipo di moto va scelto in base all’uso', 'Lo scooter richiede casco omologato'], 0, 'La cilindrata da sola non dice nulla di sicurezza e usabilità: contano potenza, peso e uso.'),
      mc('Quale tipo di moto è la scelta migliore per uno spostamento quotidiano in città, per chi comincia?', ['Scooter o naked di media cilindrata', 'Sportiva da 1000 cm³ con semimanubri', 'Cross da gara con gomme tassellate', 'Touring completa di borse e bauletto'], 0, 'In città servono agilità, ingombro ridotto e consumi bassi.')
    ]
  });

  C.addTopic({
    id: 'moto-anatomia-e-comandi', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'Anatomia della moto: parti, comandi e spie',
    summary: 'Le parti principali, i comandi di manubrio, leve, pedane e cambio, e il significato di strumentazione e spie.',
    objectives: ['Nominare le parti principali della moto e la loro funzione', 'Associare a ogni comando la mano o il piede che lo usa', 'Interpretare i colori delle spie e lo schema del cambio'],
    prereq: ['moto-tipi-di-moto'],
    pages: [
      { h: 'Le parti principali', b: `Una moto si può dividere in poche parti.

- **Telaio**: lo scheletro a cui si fissa tutto (motore, ruote, sella).
- **Forcella**: i due steli anteriori che reggono la ruota anteriore. Contiene le **sospensioni** anteriori (molla e ammortizzatore idraulico che assorbono le buche).
- **Forcellone**: il braccio oscillante che regge la ruota posteriore. Dietro c’è l’**ammortizzatore** posteriore.
- **Motore e cambio**: producono e trasmettono la forza.
- **Trasmissione finale**: porta la forza alla ruota posteriore; di solito una **catena**, a volte una cinghia o un albero cardanico.
- **Freni**: dischi con **pinze** che stringono le **pastiglie** (i blocchetti di materiale d’attrito).
- **Ruote e pneumatici**: l’unico contatto con la strada.
- **Serbatoio, sella, scarico, batteria, radiatore** (se il motore è raffreddato a liquido).

Il meccanismo del motore (i quattro tempi) si studia in altre lezioni di meccanica: qui ci serve sapere dove sono le cose e come si comandano.` },
      { h: 'Il manubrio: lato destro', b: `Il manubrio è il comando principale per sterzare e per i controlli a mano. A **destra**, sempre, troviamo:

- **Manopola del gas** (acceleratore): ruotandola **verso di te** il motore dà più potenza; rilasciandola, torna da sola in posizione di riposo (con una molla).
- **Leva del freno anteriore**: aziona il freno della ruota davanti. È il freno più potente.
- **Interruttore di arresto motore** (*kill switch*): un pulsante o interruttore rosso, usato per spegnere subito il motore in emergenza.
- **Pulsante di avviamento**: fa girare il motorino elettrico per far partire il motore.

> Regola per la sicurezza: **mai mettere i polpastrelli sulla leva senza il gioco giusto**: le leve hanno un piccolo gioco libero, che viene regolato con una vite. Senza gioco, si rischia di frenare in modo involontario.

Per accelerare gradualmente basta una rotazione lenta e continua del polso: movimenti bruschi sul gas fanno scattare la moto.` },
      { h: 'Il manubrio: lato sinistro', b: `A **sinistra** si trovano:

- **Leva della frizione**: la frizione separa momentaneamente il motore dalla ruota posteriore. Tirando la leva, il motore gira ma la moto non è spinta; rilasciandola, il motore e la ruota si collegano. Serve per partire, fermarsi e cambiare marcia.
- **Pulsanti e leve per le luci**: abbaglianti/anabbaglianti, lampeggio dei fari, frecce, clacson.
- **Specchietti**: vanno regolati prima di partire, perché mostrano i lati e non la schiena.

Le **frecce** (indicatori di direzione) si accendono con un interruttore a levetta o pulsante: di solito basta riportarlo al centro e premere per spegnere. Non tutte le moto spengono la freccia da sole: controlla sempre la spia.

> Esercizio mentale: stringi la mano sinistra → frizione. Ruota il polso destro → gas. Stringi la destra → freno anteriore. Il piede destro frena dietro, il sinistro cambia marcia.

Sullo **scooter** non c’è la frizione né il pedale del cambio: le due leve sono i due freni.` },
      { h: 'Pedane, pedali e cavalletti', b: `I piedi hanno compiti precisi.

- **Pedane**: appoggi per i piedi. Si tengono con la **punta del piede in avanti** e la pianta sulla pedana.
- **Pedale del cambio** (a sinistra): si aziona con la punta del piede, verso il basso o verso l’alto.
- **Pedale del freno posteriore** (a destra): frena la ruota posteriore.
- **Cavalletto laterale**: il sostegno che tiene la moto inclinata a sinistra quando è ferma.
- **Cavalletto centrale** (non su tutte): tiene la moto dritta, utile per manutenzione e catena.

Il cavalletto laterale **va sempre alzato prima di partire**. Se rimane giù, può toccare terra in curva e sbilanciare la moto. Molte moto moderne hanno un **sensore** che spegne il motore o impedisce la partenza se il cavalletto è abbassato e c’è una marcia inserita, ma non bisogna mai fidarsi solo di questo.

Il freno a pedale non è «più sicuro»: dietro frena meno; i dettagli sulla frenata si vedono in una lezione dedicata.` },
      { h: 'Lo schema del cambio', b: `Il **cambio** permette di scegliere il rapporto tra giri del motore e giri della ruota: marce basse (1ª, 2ª) per partire e andare piano, marce alte per andare più veloci con meno giri.

Sulle moto con cambio manuale il pedale si muove così:

> **1ª in giù**; poi **folle (N)** tra la 1ª e la 2ª; poi **2ª, 3ª, 4ª, 5ª, 6ª tutte verso l’alto**.

Schema: ▼ 1 · N · 2 · 3 · 4 · 5 · 6 ▲

- **Salire** di marcia = premere il pedale **in su**, con la punta del piede (sollevare con la punta).
- **Scalare** (scendere di marcia) = premere il pedale **in giù**.
- La **folle** (N) è la posizione in cui il motore non trasmette il moto alla ruota. Sul cruscotto si accende una spia verde con la lettera N.

Con un cambio a 6 marce, dalla 1ª alla 6ª si spinge **5 volte** verso l’alto (si passa per la 2ª, 3ª, 4ª, 5ª, 6ª). Per trovare la folle da fermi: leva della frizione tirata, con un piccolo tocco verso l’alto del pedale partendo dalla 1ª.` },
      { h: 'La strumentazione', b: `Il **cruscotto** (strumentazione) mostra le informazioni di cui hai bisogno guidando.

- **Tachimetro**: la velocità, in km/h.
- **Contagiri**: i giri al minuto del motore, in migliaia (×1000 giri/min). La zona rossa indica il massimo regime: oltre quel limite il motore rischia di rovinarsi.
- **Indicatore di livello carburante**: una lancetta o una barra; una spia avvisa quando il livello è basso.
- **Indicatore di marcia inserita**: un numero, con N per la folle.
- **Temperatura** del liquido di raffreddamento.
- **Contachilometri totale e parziale** (*trip*): misurano la distanza. Il parziale si azzera e serve per i rifornimenti.
- **Orologio**, e su alcune moto anche il consumo istantaneo.

Un esempio: 6000 giri/min con un contagiri a 14 000 giri massimi significa circa il 43% del regime massimo (6 000 / 14 000 ≈ 0,43).

Sul bagnato non si guarda a lungo il cruscotto: uno sguardo veloce, poi di nuovo la strada.` },
      { h: 'Le spie e i loro colori', b: `Le **spie** sono piccole luci sul cruscotto. Il colore dà un’indicazione generale (può variare, controlla sul manuale).

- **Rosso**: pericolo o guasto serio. Esempi: **pressione olio bassa**, **temperatura troppo alta**. Se si accende in marcia, ci si ferma appena è sicuro e si spegne il motore.
- **Giallo/arancione**: attenzione o anomalia da controllare: **spia ABS**, **spia iniezione/controllo motore**, carica della batteria, livello carburante basso, cambio d’olio.
- **Verde**: informazione normale: **folle (N)**, **frecce**, cavalletto abbassato (a volte).
- **Blu**: **abbaglianti** accesi.

All’accensione del quadro molte spie si illuminano per un attimo: è un controllo automatico. Poi, a motore acceso, dovrebbero spegnersi, tranne quelle che segnalano una condizione, come la folle.

> Una spia ABS che resta accesa significa che l’ABS **non funziona**. I freni normali funzionano ancora, ma senza il sostegno dell’ABS: si frena con più cautela e si va in officina.` },
      { h: 'Riepilogo: avviamento in ordine', b: `Una sequenza ordinata evita errori.

1. Sali sulla moto, regola gli specchietti.
2. Tieni la moto in equilibrio sul **cavalletto** laterale: lo alzerai solo a motore acceso.
3. **Interruttore di arresto** in posizione di marcia (RUN).
4. Inserisci la chiave e **accendi il quadro**. Guarda le spie.
5. Verifica la **folle** (spia N verde) oppure **tira la frizione**.
6. Premi il **pulsante di avviamento** senza dare gas, o con pochissimo gas se la moto è carburata.
7. Lascia il motore a girare qualche istante, poi **alza il cavalletto laterale**.
8. Controlla di nuovo gli specchietti, accendi le luci, inserisci la prima e parti con calma.

Mnemonica per le mani e i piedi: **sinistra = frizione, destra = gas e freno anteriore; piede sinistro = cambio, piede destro = freno posteriore**.` }
    ],
    exercises: [
      mc('Quale comando si trova sul lato destro del manubrio?', ['Manopola del gas', 'Leva della frizione', 'Pedale del cambio', 'Clacson'], 0, 'A destra: gas, freno anteriore, arresto motore e avviamento.'),
      mc('Che cosa aziona il pedale posizionato davanti al piede sinistro?', ['Il cambio', 'Il freno posteriore', 'Il freno anteriore', 'La frizione'], 0, 'Il pedale del cambio è a sinistra; il freno posteriore è a destra.'),
      mc('Che cosa fa la leva sinistra su una moto con cambio manuale?', ['Comanda la frizione', 'Frena la ruota anteriore', 'Accende i fari', 'Regola il gas'], 0, 'La frizione separa momentaneamente motore e ruota.'),
      fill('Un cambio ha 6 marce. Quante volte spingi il pedale verso l’alto per passare dalla 1ª alla 6ª?', ['5'], 'Dalla 1ª alla 6ª: 2ª, 3ª, 4ª, 5ª, 6ª, quindi 5 passaggi in su.'),
      mc('La folle si trova:', ['Tra la 1ª e la 2ª', 'Sotto la 1ª', 'Sopra la 6ª', 'Tra la 5ª e la 6ª'], 0, 'Schema: 1 in giù, poi N, poi 2-3-4-5-6 verso l’alto.'),
      mc('Quale colore ha di solito la spia di pressione olio troppo bassa?', ['Rosso', 'Verde', 'Blu', 'Bianco'], 0, 'Il rosso indica pericolo: si accosta e si spegne il motore.'),
      mc('Quale spia indica gli abbaglianti accesi?', ['Blu', 'Rossa', 'Gialla', 'Nessuna'], 0, 'La spia degli abbaglianti è di solito blu.'),
      mc('Che cosa significa una spia ABS gialla che resta accesa mentre guidi?', ['L’ABS non funziona; i freni normali sì', 'I freni sono rotti e vanno sostituiti prima di ripartire', 'L’ABS è attivo in questo momento e sta frenando', 'Il serbatoio è quasi pieno'], 0, 'L’ABS è disattivato: si guida con più cautela e si va in officina.'),
      fill('Il contagiri indica 7000 giri/min su un massimo di 14 000. Che percentuale del massimo è?', ['50'], '7000 / 14 000 = 0,5 = 50%.'),
      mc('Quale operazione va fatta prima di partire?', ['Alzare il cavalletto laterale', 'Abbassare gli specchietti retrovisori', 'Spegnere le luci di posizione', 'Disattivare l’ABS dal quadro'], 0, 'Il cavalletto abbassato può toccare terra in curva e far cadere.'),
      order('Ordina l’avviamento di una moto con cambio manuale', ['Accendi il quadro', 'Verifica folle o tira la frizione', 'Premi l’avviamento', 'Alza il cavalletto', 'Inserisci la prima e parti'], 'La sequenza evita partenze impreviste con la marcia inserita.')
    ],
    test: [
      mc('Che cos’è la forcella?', ['I due steli anteriori con le sospensioni', 'Il braccio posteriore che regge la ruota', 'Il serbatoio sotto la sella', 'La catena di trasmissione'], 0, 'La forcella regge la ruota anteriore e assorbe le irregolarità.'),
      mc('A che cosa serve il forcellone?', ['A reggere la ruota posteriore', 'A frenare la ruota anteriore', 'A tenere ferma la moto in sosta', 'A regolare gli specchietti'], 0, 'Il forcellone oscilla insieme all’ammortizzatore posteriore.'),
      mc('A cosa serve l’interruttore di arresto motore (kill switch)?', ['A spegnere subito il motore in emergenza', 'A inserire la folle quando ci si ferma al semaforo', 'A regolare il gas in curva', 'Ad accendere i fari abbaglianti'], 0, 'È un comando rosso a destra, per spegnere velocemente il motore.'),
      fill('Un contagiri arriva a 12 000 giri/min. Il motore gira a 3 000 giri/min. Che percentuale del massimo è?', ['25'], '3000 / 12 000 = 0,25 = 25%.'),
      mc('Quale posizione hanno i piedi sulle pedane, in guida normale?', ['Con la punta in avanti, la pianta sulla pedana', 'Con i talloni in fuori e le punte aperte verso l’esterno', 'Penzolanti in basso, senza alcun appoggio sulle pedane', 'Sul pedale del freno, sempre premuto'], 0, 'I piedi restano in posizione di controllo, pronti a cambiare o frenare.'),
      mc('Quale tra queste spie è di solito verde?', ['La folle (N)', 'La pressione olio', 'La temperatura alta', 'L’ABS guasto'], 0, 'Il verde segnala informazioni normali.'),
      mc('Sullo scooter, quale elemento non c’è?', ['Pedale del cambio e leva della frizione', 'Il freno anteriore comandato dalla leva a mano', 'Il pedale del freno posteriore e le luci', 'Il manubrio di guida'], 0, 'Lo scooter ha cambio automatico: le leve sono i due freni.')
    ]
  });

  C.addTopic({
    id: 'moto-equipaggiamento-e-sicurezza-passiva', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'Equipaggiamento e sicurezza passiva',
    summary: 'Casco ECE 22.06, taglie e scadenza, abbigliamento tecnico, guanti, stivali, protezioni, airbag e visibilità: come proteggersi se qualcosa va storto.',
    objectives: ['Riconoscere un casco omologato ECE 22.06 e sceglierne la taglia', 'Descrivere le protezioni di abbigliamento, guanti e stivali', 'Spiegare come airbag e visibilità riducono i rischi'],
    prereq: ['moto-anatomia-e-comandi'],
    pages: [
      { h: 'Sicurezza attiva e passiva', b: `Per un motociclista la sicurezza ha due parti.

- **Sicurezza attiva**: tutto ciò che **evita** l’incidente: freni in ordine, pneumatici in buono stato, guida prudente, visibilità, distanza di sicurezza.
- **Sicurezza passiva**: tutto ciò che **riduce i danni** quando l’incidente avviene: casco, abbigliamento protettivo, paraschiena, airbag.

Non sono alternative: servono entrambe. A differenza di un’auto, la moto non ha carrozzeria: il corpo del motociclista è l’unica «zona di deformazione». L’equipaggiamento è quindi parte della moto, non un accessorio.

> Un dato semplice per non sottovalutare l’abrasione: scivolando su asfalto a 50 km/h, senza protezioni la pelle è abrasa in frazioni di secondo. Per questo i capi tecnici hanno materiali e cuciture resistenti all’**abrasione** (lo sfregamento sul terreno).

Impariamo i pezzi uno per uno, partendo dalla testa.` },
      { h: 'Il casco e l’omologazione ECE 22.06', b: `Il **casco** è obbligatorio per legge in Italia, **allacciato**, sia per il guidatore sia per il passeggero. Deve essere **omologato**.

L’omologazione è garantita da un’etichetta cucita sul sottogola, con una **E cerchiata** seguita da un numero (il codice del paese che ha omologato; per l’Italia è 3) e dal codice della norma. Oggi la norma di riferimento è la **ECE 22.06**, entrata in vigore dal 2021 al posto della ECE 22.05. Testa i caschi in modo più completo: più punti d’urto, anche la **rotazione** della testa e le visiere.

- I caschi 22.05 già in circolazione non sono vietati, ma i nuovi modelli sono 22.06.
- Un casco **non omologato** (da collezione, da bici, da cantiere) non è valido e non protegge a sufficienza.

Tipologie: **integrale** (copre tutto il viso, il più protettivo), **modulare** (mento apribile), **jet** (aperto, senza mentoniera), **off-road** (visiera corta, per fuoristrada).

Un buon casco ha una calotta resistente, un interno che assorbe l’urto e un sistema di chiusura sicuro.` },
      { h: 'La taglia del casco', b: `Un casco di taglia sbagliata protegge male. Se è largo, può spostarsi o sfilarsi; se stretto, fa male e distrae.

**Come misurare**: con un metro da sarta, misura la circonferenza della testa **circa 1 cm sopra le sopracciglia**, nel punto più largo.

Tabella orientativa (i marchi variano):

| Circonferenza | Taglia |
| --- | --- |
| 53–54 cm | XS |
| 55–56 cm | S |
| 57–58 cm | M |
| 59–60 cm | L |
| 61–62 cm | XL |

Una testa di **57 cm** corrisponde quindi a una taglia M.

**Prova in negozio**:

- Deve stringere in modo uniforme, senza punti di pressione dolorosi.
- Allacciato, scuoti la testa e annuisci: il casco **non deve girare** sulla testa.
- Con il sottogola chiuso, non deve essere possibile sfilarlo tirandolo da dietro verso l’alto.
- La visiera deve chiudersi bene e il campo visivo deve essere ampio.

Il casco in genere si adatta un po’ con l’uso: ma un casco che fa male subito è sbagliato.` },
      { h: 'Chiusura, durata e scadenza', b: `**Allacciatura**: la chiusura più usata è a **doppio anello a D**: il cinturino passa nei due anelli e si tira. Altri sistemi sono la chiusura a sgancio rapido (micrometrica). Il cinturino deve aderire sotto il mento, con spazio per **un dito**.

**Quando sostituirlo**:

- Dopo **una caduta o un urto**, anche se non si vede alcun danno: la schiuma interna che assorbe l’urto si può schiacciare senza segni esterni.
- Con l’**invecchiamento**: la schiuma e le resine si degradano per usura, sudore, solventi e calore. I produttori indicano in genere di sostituire il casco dopo circa **5 anni dall’acquisto** (spesso un massimo di 7–10 anni dalla produzione): leggi le istruzioni del tuo modello.
- Con visiera graffiata o usurata: distorce la vista, soprattutto con il sole basso o di notte.

> Esempio: un casco comprato nel 2022, con regola dei 5 anni, va sostituito entro il **2027**, o prima se subisce un urto.

Non comprare un casco usato: non sai se ha già preso un colpo. Conservalo lontano da solventi, benzina e fonti di calore, e non appenderlo al manubrio o allo specchietto.` },
      { h: 'Abbigliamento tecnico', b: `Giacca e pantaloni tecnici sono fatti di materiali resistenti all’abrasione (**pelle**, **tessuti tecnici** come il Cordura) e hanno **protezioni** interne in punti chiave: **spalle, gomiti, ginocchia, anche**.

Il livello di resistenza di un capo si vede dalla norma europea **EN 17092**, che lo classifica:

- **AAA**: il livello più alto (adatto all’uso sportivo e alla guida impegnativa).
- **AA**: protezione buona per l’uso quotidiano.
- **A**: protezione più leggera, per lo scooter in città o l’estate.
- **B** e **C**: protezione limitata (solo parti specifiche).

Alcuni punti pratici:

- I **jeans normali** e i capi sportivi in cotone si squarciano in pochissimi metri di scivolata. Esistono jeans rinforzati e certificati.
- La **taglia** deve essere aderente: le protezioni stanno in posizione solo se non ballano.
- I capi impermeabili e termici consentono di guidare con meteo cattivo; nei mesi caldi servono capi traspiranti con rete e protezioni.

Una **tuta intera** è l’abbigliamento di chi va in pista.` },
      { h: 'Guanti, stivali e paraschiena', b: `**Guanti**. Le mani sono le prime a toccare terra. Cerca guanti con: palmo rinforzato, protezione sulle **nocche**, protezione del **polso** (cinghia) e polsino lungo, che entri nella manica della giacca. Norma di riferimento: **EN 13594**.

**Stivali**. Le caviglie si fratturano facilmente. Servono stivali **alti**, con rinforzi a **caviglia, malleolo e punta**, suola antiscivolo e chiusura salda. Norma: **EN 13634**. Le scarpe da ginnastica non proteggono.

**Paraschiena**. Protegge la colonna vertebrale. Può essere integrato nella giacca o indossato come gilet separato. Norma: **EN 1621-2**.

**Protezioni** (spalle, gomiti, ginocchia): norma **EN 1621-1**. In molti dispositivi esistono due **livelli**: **Livello 2** trasmette meno forza al corpo rispetto al **Livello 1**. In base ai test, un paraschiena di Livello 2 trasmette circa la metà della forza massima ammessa per il Livello 1.

> Controlla sempre che la protezione abbia **etichetta CE e norma** e che sia della tua taglia.` },
      { h: 'Airbag e visibilità', b: `**Airbag per motociclisti**. Si portano come gilet o come parte della giacca. Quando il sistema rileva una caduta, si gonfia in una frazione di secondo e protegge torace, collo e spalle.

- **A cavo (meccanico)**: un cordino fissato alla moto, che si stacca e attiva il gonfiaggio se il pilota si separa dalla moto.
- **Elettronico**: sensori (accelerometri e giroscopi) rilevano la caduta e attivano l’airbag.

Dopo l’attivazione, il sistema si **ricarica o si sostituisce** secondo le istruzioni. L’airbag **non sostituisce** casco, protezioni, guanti e stivali: aggiunge protezione.

**Visibilità**. Molti incidenti avvengono perché l’altro conducente non ha visto la moto. Ci sono tre aiuti:

- Colori chiari o **fluorescenti**, e inserti **catarifrangenti** (riflettono la luce dei fari).
- **Luci sempre accese** (obbligo di legge per i motocicli in Italia).
- Una visiera **pulita** e sgombra: serve anche a te per vedere.

Non dare mai per scontato di essere stato visto: guida come se nessuno ti vedesse.` },
      { h: 'Come spendere bene e riepilogo', b: `L’equipaggiamento completo ha un costo, ma si può costruire in ordine di priorità.

1. **Casco omologato**, della taglia giusta, di buona qualità.
2. **Guanti** e **stivali** (mani e caviglie sono le parti più colpite).
3. **Giacca e pantaloni** con protezioni e classe di abrasione adeguata.
4. **Paraschiena**.
5. **Airbag**, che completa la protezione.

> Un esempio di budget: casco 250 €, guanti 80 €, stivali 150 €, giacca 220 €, pantaloni 150 €, paraschiena 70 €: totale 920 €. Divisi su 5 anni sono circa 184 € all’anno, meno di quanto si spende in carburante in pochi mesi.

Errori comuni: guidare con abiti normali «solo per un tragitto breve»; riutilizzare un casco già caduto; non allacciare il sottogola; scegliere per estetica e non per norma.

L’equipaggiamento giusto non ti fa guidare meglio, ma ti permette di **rialzarti**. Vestiti sempre per la caduta, non per il tragitto.` }
    ],
    exercises: [
      mc('Quale norma di omologazione è oggi di riferimento per i caschi?', ['ECE 22.06', 'ECE 22.01', 'ISO 9001', 'EN 17092'], 0, 'La ECE 22.06 ha sostituito la 22.05 dal 2021.'),
      mc('Dove si trova l’etichetta di omologazione del casco?', ['Cucita sul sottogola', 'Sulla visiera', 'Nel guscio esterno a vernice', 'Non esiste'], 0, 'L’etichetta ha una E cerchiata, un numero e il codice della norma.'),
      fill('Hai una testa di 57 cm di circonferenza. Quale taglia ti serve (lettera)?', ['M', 'm'], '57–58 cm corrispondono alla taglia M nella tabella orientativa.'),
      mc('Dopo una caduta con urto del casco, anche senza danni visibili, che cosa si fa?', ['Lo si sostituisce', 'Si continua a usarlo', 'Lo si ridipinge', 'Si cambia solo la visiera'], 0, 'La schiuma interna assorbe l’urto e può essere compromessa senza segni esterni.'),
      fill('Un casco comprato nel 2022, sostituzione consigliata dopo 5 anni: entro quale anno?', ['2027'], '2022 + 5 = 2027.'),
      mc('Quale classe EN 17092 offre il livello più alto di protezione all’abrasione?', ['AAA', 'A', 'B', 'C'], 0, 'AAA è il livello più alto, usato per guida sportiva.'),
      mc('Che cosa significa livello 2 di una protezione CE rispetto al livello 1?', ['Trasmette meno forza al corpo', 'È più grande, ma assorbe lo stesso', 'È meno rigida e più comoda', 'È dedicata solo al passeggero'], 0, 'Il livello 2 supera test più severi e trasmette meno forza.'),
      mc('Quali parti sono tra le più esposte e richiedono protezione dedicata?', ['Mani e caviglie', 'Solo le orecchie', 'Solo il petto', 'Nessuna'], 0, 'Le mani toccano terra per istinto, le caviglie si fratturano facilmente.'),
      fill('Casco 250 €, guanti 80 €, stivali 150 €, giacca 220 €, pantaloni 150 €, paraschiena 70 €: totale in euro?', ['920'], '250 + 80 + 150 + 220 + 150 + 70 = 920.'),
      mc('Che cosa non fa un airbag per motociclisti?', ['Sostituire casco e altre protezioni', 'Proteggere torace e collo in caduta', 'Gonfiarsi rapidamente in caso di caduta', 'Funzionare tramite un cavo o dei sensori elettronici'], 0, 'L’airbag è un’aggiunta: il casco e le altre protezioni restano necessari.'),
      order('Ordina le priorità d’acquisto dell’equipaggiamento', ['Casco omologato', 'Guanti e stivali', 'Giacca e pantaloni protettivi', 'Paraschiena', 'Airbag'], 'Si parte da testa, mani e piedi, poi il resto del corpo e le protezioni aggiuntive.')
    ],
    test: [
      mc('Quale tipo di casco copre tutto il viso ed è considerato il più protettivo?', ['Integrale', 'Jet', 'Modulare aperto', 'Casco da bici'], 0, 'Il casco integrale ha la mentoniera fissa.'),
      fill('Una testa misura 61 cm. Quale taglia di casco (lettere) serve secondo la tabella?', ['XL', 'xl'], '61–62 cm corrispondono alla taglia XL.'),
      mc('Cosa significa «E3» nell’etichetta del casco?', ['Omologato in Italia', 'Omologato in Germania', 'Taglia 3', 'Livello di protezione 3'], 0, 'Il numero dopo la E identifica il paese; per l’Italia è 3.'),
      mc('Perché non conviene comprare un casco usato?', ['Può aver già subito un urto non visibile', 'Costa sempre troppo rispetto al nuovo', 'Non è consentito dalla legge in Italia', 'Risulta sempre di taglia sbagliata per chi lo compra'], 0, 'Non sai quale storia ha avuto e la schiuma può essere compromessa.'),
      mc('Come si possono ridurre i danni dell’abrasione su asfalto?', ['Con capi in pelle o tessuto tecnico certificati', 'Con tessuti leggeri in cotone o jeans comuni', 'Con vestiti larghi e ariosi nei mesi estivi', 'Con scarpe da ginnastica ben allacciate alla caviglia'], 0, 'I materiali tecnici resistono allo sfregamento molto più dei tessuti normali.'),
      fill('Un paraschiena costa 70 €, un airbag 400 €. Quanto costano insieme?', ['470'], '70 + 400 = 470 €.'),
      mc('Quale è una buona pratica di visibilità?', ['Indossare colori chiari o fluorescenti con inserti catarifrangenti', 'Guidare con abiti scuri anche di notte per non farsi notare', 'Tenere spente le luci anabbaglianti anche di giorno', 'Lasciare la visiera graffiata e sporca'], 0, 'Essere visti riduce molti incidenti, soprattutto agli incroci.')
    ]
  });

  C.addTopic({
    id: 'moto-patenti-codice-e-documenti', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'Patenti, codice e documenti in Italia',
    summary: 'AM, A1, A2 e A con limiti di potenza e rapporto potenza/peso, età, assicurazione e documenti, regole base e sanzioni in sintesi, sapendo che le norme cambiano.',
    objectives: ['Distinguere le categorie AM, A1, A2 e A per età e limiti', 'Verificare se una moto rientra nei limiti di potenza e di rapporto potenza/peso', 'Elencare documenti, assicurazione e regole base, ricordando di verificare le norme aggiornate'],
    prereq: ['moto-equipaggiamento-e-sicurezza-passiva'],
    pages: [
      { h: 'Attenzione: le norme cambiano', b: `Questa lezione è una **sintesi didattica** delle regole italiane, aggiornata alle conoscenze al momento della scrittura. Leggi, regole, importi delle sanzioni e limiti vengono **modificati periodicamente**: un’ampia riforma del Codice della Strada è stata approvata nel 2024 e altri aggiornamenti possono seguire.

> Prima di decidere, **verifica sempre** sulle fonti ufficiali: il sito del **Ministero delle Infrastrutture e dei Trasporti**, il **Portale dell’Automobilista**, il testo vigente del **Codice della Strada**, oppure presso una **autoscuola**.

Qui trovi concetti e ordini di grandezza, non una consulenza legale.

- Se un numero (età, potenza, importo) è decisivo per te, controllalo.
- Se hai dubbi sulla tua moto o sulla tua patente, chiedi in autoscuola o al costruttore.

Il Codice della Strada è un testo di legge pensato per rendere la circolazione sicura per tutti: conoscerlo non è solo un obbligo, è un modo per capire che cosa gli altri si aspettano da te.` },
      { h: 'Le categorie: AM, A1, A2, A', b: `In Italia (e nell’Unione Europea) la patente per le due ruote si divide in **categorie**, in ordine crescente di potenza.

| Categoria | Età minima | Che cosa si guida |
| --- | --- | --- |
| **AM** | 14 anni | ciclomotori fino a 50 cm³ e 45 km/h (elettrici fino a 4 kW) |
| **A1** | 16 anni | moto fino a 125 cm³ e 11 kW |
| **A2** | 18 anni | moto fino a 35 kW |
| **A** | 24 anni (o 20 con 2 anni di A2) | moto senza limiti di potenza |

Il percorso è **graduale**: si può passare da A1 a A2 e poi ad A. Con la categoria A2 si può accedere alla **A** a partire da 20 anni, dopo almeno due anni di A2 (accesso progressivo); l’accesso diretto è dai 24 anni.

La **A2** è la patente più comune per chi comincia a 18 anni. Con la **A1** puoi guidare le 125. Il **ciclomotore** ha un limite di velocità costruttivo di 45 km/h.

Ogni categoria si ottiene con un **esame teorico** e una **prova pratica**, che comprende manovre in un’area chiusa e guida su strada con l’esaminatore.` },
      { h: 'Potenza e rapporto potenza/peso', b: `Per A1 e A2 la legge limita non solo la potenza ma anche il **rapporto potenza/peso**, per evitare moto leggerissime con motori potenti.

- **A1**: cilindrata fino a **125 cm³**, potenza fino a **11 kW**, rapporto fino a **0,1 kW/kg**.
- **A2**: potenza fino a **35 kW**, rapporto fino a **0,2 kW/kg**. La moto non deve derivare da una versione con potenza **più del doppio** (è la regola per le moto «depotenziate»).
- **A**: senza limiti.

> Calcola: una moto da 35 kW deve avere massa di almeno 35 / 0,2 = **175 kg** per essere ammessa per la A2. Una moto da 11 kW deve pesare almeno 11 / 0,1 = **110 kg** per la A1.

Esempi:

> 28 kW e 160 kg → 28 / 160 = **0,175** ≤ 0,2 → ammessa A2.
> 35 kW e 150 kg → 35 / 150 = **0,233** > 0,2 → **non ammessa**.

La verifica ufficiale si fa sui dati riportati nella **carta di circolazione**. Le moto vendute «per A2» sono già nei limiti: controlla che il modello e l’anno corrispondano. Molte moto depotenziate possono essere «ripotenziate» solo con interventi non ammessi per un titolare di A2.` },
      { h: 'Documenti da avere con sé', b: `Quando guidi devi avere con te e saper esibire:

- **Patente di guida** della categoria giusta, valida.
- **Carta di circolazione** (il «libretto»): documento della moto, con targa, dati tecnici, potenza e massa.
- **Documento di identità**, se richiesto.

L’**assicurazione RC** (responsabilità civile) è obbligatoria. Copre i **danni causati agli altri**, non quelli al tuo mezzo o a te. Guidare senza assicurazione comporta sanzioni gravi e può portare al **sequestro** del veicolo. Il certificato è oggi in gran parte digitale e controllato tramite banche dati, ma tieni comunque a portata di mano i dati della polizza.

Altre coperture, facoltative: **furto e incendio**, **kasko** (danni al tuo mezzo), **infortuni del conducente**.

Altri obblighi periodici:

- **Bollo** (tassa di possesso): si paga ogni anno.
- **Revisione**: per le moto, la prima dopo **4 anni** dall’immatricolazione, poi ogni **2 anni**.

> Costo della revisione di esempio: 80 € ogni 2 anni = 40 € all’anno, da mettere in conto.` },
      { h: 'Regole base di circolazione', b: `Alcune regole fondamentali per chi guida una moto (verifica le versioni aggiornate).

- **Casco allacciato** sempre, anche per il passeggero. Per i minorenni il passeggero deve avere l’età e le condizioni previste.
- **Luci**: nei motocicli gli anabbaglianti sono sempre accesi.
- **Alcol**: limite generale 0,5 g/l; per **neopatentati** (primi 3 anni) e under 21 il limite è **zero**. Se hai bevuto, non guidi: l’alcol rallenta i riflessi e peggiora l’equilibrio.
- **Cellulare**: vietato usare il telefono tenendolo in mano durante la guida.
- **Passeggero**: solo se la moto è omologata per due e se la patente lo consente.
- **Limiti di velocità** (salvo diversa segnaletica): **50 km/h** nei centri abitati, **90** sulle extraurbane secondarie, **110** sulle extraurbane principali, **130** in autostrada. La segnaletica può indicare limiti più bassi. Per i neopatentati possono valere limiti più bassi nei primi anni.
- **Precedenza, semafori, strisce pedonali** e distanza di sicurezza si rispettano come per tutti.

Il limite di velocità è un **massimo**, non un obiettivo: le condizioni (pioggia, traffico, buche) richiedono spesso di andare più piano.` },
      { h: 'Sanzioni in sintesi', b: `Le sanzioni sono di tipo **amministrativo** (multe, **decurtazione di punti** dalla patente, sospensione) o **penale** (per casi gravi, come la guida in stato di ebbrezza oltre certe soglie).

- La **patente a punti** parte con **20 punti**: ogni infrazione ne toglie un certo numero. Arrivati a zero, bisogna ripetere l’esame.
- Guida **senza casco** o con casco non allacciato: multa e decurtazione di punti.
- Uso del **cellulare** alla guida: multa, punti decurtati e, in caso di recidiva, sospensione.
- **Eccesso di velocità**: la sanzione cresce con il superamento del limite e può portare a sospensione.
- **Guida con tasso alcolemico** sopra i limiti: da multa e sospensione fino a conseguenze penali e confisca.
- **Guida senza patente o assicurazione**: sanzioni elevate e sequestro.

> Gli importi esatti cambiano con gli aggiornamenti di legge (nel 2024 sono stati rivisti alcuni): non memorizzarli, consulta le tabelle ufficiali.

Il costo vero di un’infrazione non è solo la multa: includi punti, assicurazione più cara, e il rischio concreto per te e per gli altri.` },
      { h: 'Esercizi di verifica sui limiti', b: `Allena il calcolo con esempi.

**Esempio 1.** Moto: 33 kW, 170 kg. Rapporto = 33 / 170 ≈ **0,194** → ≤ 0,2 e ≤ 35 kW → ammessa per la **A2**.

**Esempio 2.** Moto: 9 kW, 110 kg. Rapporto = 9 / 110 ≈ **0,082** ≤ 0,1; potenza ≤ 11 kW → ammessa per la **A1**.

**Esempio 3.** Moto: 48 CV. Converti: 48 / 1,36 ≈ **35,3 kW** → supera di poco i 35 kW → **non ammessa** per la A2.

**Esempio 4.** Moto: 40 kW e 230 kg → 40 / 230 = 0,174 ma 40 kW > 35 kW → **non** A2.

Procedimento:

1. Converti la potenza in kW (CV / 1,36).
2. Controlla che sia ≤ limite (11 o 35 kW).
3. Calcola kW / kg e confronta con 0,1 o 0,2.
4. Controlla il dato sulla **carta di circolazione**.

I dati commerciali (potenza dichiarata, peso a secco) possono differire da quelli ufficiali: conta solo il documento.` },
      { h: 'Riepilogo e dove verificare', b: `Ricorda le cinque idee chiave.

1. Le categorie sono **AM (14), A1 (16), A2 (18), A (24, o 20 con 2 anni di A2)**.
2. A1: **125 cm³, 11 kW, 0,1 kW/kg**. A2: **35 kW, 0,2 kW/kg**.
3. Documenti: patente, carta di circolazione, assicurazione RC obbligatoria; poi bollo e revisione periodica.
4. Casco, luci, zero alcol per i neopatentati, no cellulare: sono regole non negoziabili.
5. Le **norme cambiano**: verifica sempre sulle fonti ufficiali o in autoscuola.

Un consiglio pratico: prima di comprare una moto, controlla con l’autoscuola o l’agenzia pratiche che la tua patente consenta di guidarla, e confronta il preventivo di **assicurazione** (per i giovani e i neopatentati è spesso alto).

> Le regole non sono il fine ma lo strumento: servono a rendere prevedibile il comportamento di tutti, e la prevedibilità salva vite.

Il rispetto dei limiti vale anche in moto: sulle strade aperte al traffico le prestazioni non si cercano, si gestiscono con prudenza.` }
    ],
    exercises: [
      mc('Quale età minima serve per la patente A1?', ['16 anni', '14 anni', '18 anni', '24 anni'], 0, 'AM 14, A1 16, A2 18, A 24 (o 20 con due anni di A2).'),
      mc('Quale limite di potenza hanno le moto per la patente A2?', ['35 kW', '11 kW', '60 kW', 'Nessun limite'], 0, 'La A2 consente moto fino a 35 kW e 0,2 kW/kg.'),
      fill('Qual è il rapporto massimo potenza/peso in kW/kg per la patente A1 (con un decimale)?', ['0,1', '0.1'], 'Il limite A1 è 0,1 kW/kg.'),
      fill('Una moto da 35 kW deve avere una massa minima di quanti kg per essere ammessa per la A2 (rapporto 0,2)?', ['175'], '35 / 0,2 = 175 kg.'),
      fill('Una moto da 28 kW pesa 160 kg. Quanto vale il rapporto kW/kg, con tre decimali?', ['0,175', '0.175'], '28 / 160 = 0,175.'),
      mc('Una moto da 35 kW e 150 kg è ammessa per la A2?', ['No, il rapporto è 0,233 e supera 0,2', 'Sì, perché 35 kW è il limite massimo per la categoria', 'Sì, in ogni caso, conta solo la potenza', 'Dipende dal colore'], 0, '35 / 150 = 0,233 > 0,2.'),
      mc('L’assicurazione RC copre:', ['I danni causati agli altri', 'Solo i danni al proprio mezzo', 'Solo il furto', 'Le spese di benzina'], 0, 'La RC è obbligatoria e copre la responsabilità verso terzi.'),
      mc('Con quale frequenza si fa la revisione di una moto dopo la prima?', ['Ogni 2 anni', 'Ogni anno', 'Ogni 5 anni', 'Mai'], 0, 'La prima dopo 4 anni, poi ogni 2.'),
      mc('Per i neopatentati e under 21 il limite di alcol per guidare è:', ['Zero', '0,5 g/l', '0,8 g/l', '1,5 g/l'], 0, 'Per questi gruppi vale tasso alcolemico zero.'),
      fill('Una moto da 40 CV. Quanti kW sono, con un decimale (1 kW = 1,36 CV)?', ['29,4', '29.4'], '40 / 1,36 = 29,41 kW.'),
      order('Ordina i passi per capire se una moto è ammessa per la A2', ['Converti la potenza in kW', 'Controlla che sia al massimo 35 kW', 'Calcola kW diviso kg', 'Confronta con 0,2 kW/kg', 'Verifica sulla carta di circolazione'], 'Il documento ufficiale è la carta di circolazione.')
    ],
    test: [
      mc('Quale età minima serve per la categoria A con accesso diretto?', ['24 anni', '18 anni', '20 anni', '21 anni'], 0, 'L’accesso diretto è dai 24 anni; dai 20 con due anni di A2.'),
      fill('Una moto da 9 kW pesa 110 kg. Quanto vale il rapporto potenza/peso, con tre decimali?', ['0,082', '0.082'], '9 / 110 = 0,0818, cioè 0,082.'),
      fill('Una moto da 11 kW deve pesare almeno quanti kg per la A1 (rapporto 0,1)?', ['110'], '11 / 0,1 = 110 kg.'),
      mc('Quale documento è il riferimento ufficiale per i dati tecnici di una moto?', ['La carta di circolazione', 'Il depliant del costruttore', 'La pubblicità del concessionario', 'La targa'], 0, 'I dati ufficiali di potenza e massa sono sul libretto.'),
      mc('La patente a punti parte con:', ['20 punti', '10 punti', '30 punti', '100 punti'], 0, 'Ogni infrazione toglie punti, a zero si ripete l’esame.'),
      mc('Perché è importante verificare le norme invece di impararle a memoria?', ['Perché cambiano nel tempo, importi e limiti compresi', 'Perché non sono mai cambiate negli ultimi decenni', 'Perché valgono solo in alcune regioni', 'Perché sono riservate agli addetti ai lavori e ai medici'], 0, 'Nel 2024 il Codice è stato aggiornato: fonti ufficiali e autoscuola danno il testo vigente.'),
      mc('Qual è il limite di velocità generale, salvo segnaletica, nei centri abitati?', ['50 km/h', '30 km/h', '70 km/h', '90 km/h'], 0, 'Nei centri abitati il limite generale è 50 km/h.')
    ]
  });

  C.addTopic({
    id: 'moto-controlli-prima-di-partire', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'Controlli prima di partire',
    summary: 'Pneumatici, freni, luci, olio e livelli, catena, comandi e cavalletti: una checklist di due minuti da fare a ogni uscita.',
    objectives: ['Eseguire in ordine i controlli pre-partenza con una checklist', 'Valutare pressione, usura e età di un pneumatico', 'Riconoscere i segnali che impongono di non partire'],
    prereq: ['moto-patenti-codice-e-documenti'],
    pages: [
      { h: 'Perché e come controllare', b: `Una moto ha pochi punti di contatto con la strada e nessuna «scocca» che perdona i guasti. Un controllo di **due minuti** prima di partire elimina molti rischi evitabili.

Un metodo semplice è seguire sempre lo stesso **ordine**, in giro attorno alla moto. Una versione in italiano:

1. **Gomme** e ruote
2. **Comandi** (gas, leve, sterzo)
3. **Luci** e impianto elettrico
4. **Olio** e altri liquidi
5. **Telaio**, sospensioni e trasmissione (catena)
6. **Cavalletti** e carico

(Nel mondo anglosassone si usa l’acronimo *T-CLOCS*, che segue lo stesso schema.)

> Regola: **se qualcosa non va, non parti**. Un freno spugnoso, una gomma sgonfia o una luce spenta non migliorano strada facendo.

Il manuale d’uso della tua moto riporta i valori esatti (pressioni, livelli, gioco della catena): **segui sempre il manuale**, i numeri in questa lezione sono esempi.` },
      { h: 'Pneumatici', b: `I pneumatici sono l’unico contatto con la strada: ogni punto di aderenza passa da due impronte grandi quanto la palma di una mano.

- **Pressione**: si controlla **a freddo** (moto ferma da almeno qualche ora), con un manometro. I valori giusti stanno sul manuale o su un adesivo vicino al forcellone, spesso diversi per anteriore e posteriore (per esempio circa 2,2 bar davanti e 2,5 dietro, ma solo come ordine di grandezza). Pressione bassa: gomma che si surriscalda e moto poco precisa. Troppo alta: meno aderenza.
- **Battistrada**: sono i solchi che scaricano l’acqua. Si guardano gli **indicatori di usura** (*TWI*) o si misura con un calibro. Il limite legale è circa **1,6 mm** (verifica la norma), ma sul bagnato conviene sostituire prima.
- **Danni**: tagli, bolle, rigonfiamenti, chiodi o viti conficcati.
- **Età**: sul fianco c’è il codice **DOT** con 4 cifre: **settimana e anno** di produzione. **3224** significa 32ª settimana del 2024. Gomme molto vecchie induriscono: molti produttori consigliano la sostituzione dopo alcuni anni (circa 5–6) anche se il battistrada è buono.

> Esempio di calcolo: battistrada 5,0 mm; limite 1,6 mm; si consuma 1 mm ogni 2 000 km. Restano (5,0 − 1,6) × 2 000 = **6 800 km**.` },
      { h: 'Freni', b: `I freni sono il sistema di sicurezza più importante. Il controllo è semplice.

- **Leva del freno anteriore e pedale posteriore**: devono avere corsa **uniforme**, non «spugnosa» (spugnosa vuol dire aria nell’impianto) e non devono arrivare a fine corsa.
- **Prova a moto ferma**: spingi la moto e frena. Deve fermarsi.
- **Livello del liquido freni**: nel piccolo serbatoio sul manubrio (anteriore) e vicino alla pedana (posteriore): deve stare **tra MIN e MAX**. Un livello che scende indica pastiglie consumate o una perdita.
- **Pastiglie**: guarda lo spessore del materiale d’attrito attraverso la pinza. Se vicino al minimo indicato (spesso 1–2 mm o una scanalatura), sostituiscile.
- **Dischi**: nessun solco profondo, nessuna crepa, nessuna deformazione.
- **Tubi e raccordi**: nessuna perdita o crepa.

Il **liquido freni** assorbe umidità col tempo e perde efficacia: in genere si sostituisce ogni **circa 2 anni** (segui il manuale).

> Mai guidare con freni che hanno dubbi: se la leva arriva al manubrio, o c’è una perdita, **non si parte** e si va in officina.` },
      { h: 'Luci, specchietti e clacson', b: `Vedere ed essere visti è sicurezza attiva.

A quadro acceso controlla:

- **Anabbaglianti** e **abbaglianti**.
- **Luce di posizione** posteriore e **stop**: lo stop si accende sia con la leva del freno anteriore sia con il pedale posteriore. Controlla **entrambi**: spesso sono due interruttori separati.
- **Frecce** (davanti e dietro, destra e sinistra) e relative spie.
- **Clacson**.
- **Specchietti**: regolati in modo da vedere i lati della strada e un piccolo pezzo della tua spalla.
- **Targa** pulita e leggibile.

Se non riesci a controllare lo stop da solo, usa una vetrina o chiedi a qualcuno.

La **batteria** si controlla indirettamente: se l’avviamento è lento o fa fatica, probabilmente è debole. Alcune moto la caricano solo con l’uso regolare: se la moto resta ferma a lungo, si usa un mantenitore di carica.

> Un faro bruciato non è una scusa per partire «solo per un tratto». Di notte una moto con una luce in meno può essere scambiata per una moto più lontana.` },
      { h: 'Olio e liquidi', b: `Il motore ha bisogno di fluidi nel livello giusto.

- **Olio motore**: lubrifica le parti in movimento. Si controlla dal **vetrino** laterale o con l’**astina**: il livello deve essere tra MIN e MAX. Le modalità (motore freddo o caldo, moto dritta o sul cavalletto) sono nel manuale. Una spia rossa dell’olio che si accende in marcia è un’emergenza: fermati e spegni.
- **Liquido di raffreddamento**: nelle moto raffreddate a liquido, nel **vaso di espansione**, tra MIN e MAX, **a motore freddo**. Non si apre mai il tappo del radiatore a motore caldo: il liquido è in pressione e scotta.
- **Carburante**: controlla il livello, anche se la spia non è accesa. Meglio fermarsi al distributore che a piedi.
- **Liquido freni e frizione** (se idraulica): vedi sopra.

Guarda sempre **sotto la moto**: macchie di olio, carburante o liquido sul pavimento indicano perdite.

> Esempio: un serbatoio da 14 litri, con consumo medio di 5 l/100 km, dà un’autonomia teorica di 14 / 5 × 100 = **280 km**. Meglio fermarsi al rifornimento molto prima di arrivare a zero.` },
      { h: 'La catena', b: `La **catena** trasmette la forza dal motore alla ruota posteriore. Se è troppo lenta può uscire dalla corona (la ruota dentata posteriore); se troppo tesa, si consuma e rovina i cuscinetti. Se è secca o arrugginita, usura la trasmissione.

- **Tensione (gioco)**: si misura nel punto di mezzo tra i due ingranaggi, spingendo in alto e in basso la catena. Il valore ideale è nel manuale: spesso circa **20–30 mm**. Se non sei sicuro, chiedi a un meccanico.
- **Lubrificazione**: ogni **500–1 000 km** circa, con apposito spray per catene, a **motore spento**, **mai** con la ruota che gira ad alta velocità o con il motore acceso senza protezione.
- **Usura**: maglie rigide o rotte, denti della corona a «uncino» o appuntiti indicano che serve sostituire **catena e ingranaggi insieme**.
- **Pulizia**: spazzola e prodotti specifici.

Alcune moto usano una **cinghia** o un **albero cardanico**: richiedono meno manutenzione, ma vanno comunque controllate secondo il manuale.

Il controllo catena si fa **a motore spento**, con la moto stabile sul cavalletto. Mai mettere le dita sulla catena e sulla corona con il motore in moto: sono parti che possono schiacciare.` },
      { h: 'Comandi, sterzo e carico', b: `Ultimi controlli.

- **Manopola del gas**: ruotala e rilasciala: deve tornare da sola, subito, senza incepparsi.
- **Leva frizione**: corsa fluida, gioco regolare.
- **Sterzo**: gira il manubrio da un fine corsa all’altro, senza punti duri e senza ostacoli (cavi, specchietti).
- **Cavalletti**: la molla deve riportare il cavalletto laterale in alto.
- **Sospensioni**: schiaccia forte la forcella e la sella: devono tornare senza rimbalzi. Cerca olio sugli steli della forcella.
- **Bulloneria**: controlla visivamente che ruote, pedane, leve non abbiano parti allentate.
- **Carico**: i bagagli devono essere ben fissati, il più possibile **bassi e vicini al centro** della moto. Un carico che si sposta cambia l’equilibrio.
- **Equipaggiamento**: casco allacciabile, guanti, documenti.

Dopo l’avviamento, osserva le **spie**: che cosa dovrebbe spegnersi, spento; che cosa è acceso, motivato (folle).

> Esempio pratico: controllare in sequenza gomme, comandi, luci, olio, catena, cavalletti richiede **circa 2–3 minuti**. È un investimento minimo rispetto al rischio che evita.` },
      { h: 'Checklist e frequenza', b: `Ecco la checklist completa.

| Quando | Controllo |
| --- | --- |
| Ogni uscita | Gomme (vista e pressione se dubbia), freni, luci, comandi, perdite sotto la moto, cavalletto alzato |
| Ogni settimana (o ogni 500 km) | Pressione gomme, livello olio, lubrificazione e tensione catena, livello liquido freni |
| Ogni mese | Livello liquido di raffreddamento, stato dei pneumatici in dettaglio, batteria, bulloneria |
| Ogni anno / secondo manuale | Tagliando in officina, liquido freni, filtri |

Se qualcosa non va:

- **Non partire** con difetti ai freni, allo sterzo, ai pneumatici o alle luci.
- Se il problema compare in marcia, **riduci l’andatura** e fermati in un luogo sicuro.
- Se non sai valutare un difetto, **chiedi a un meccanico**.

Abitudine che salva: gira attorno alla moto, **tocca e guarda** ogni parte. Con il tempo diventa un gesto automatico.

> Ricorda: la moto non ti avvisa con un «bip» quando una gomma è consumata. Il controllo è la tua parte della sicurezza attiva.` }
    ],
    exercises: [
      mc('Quando si controlla la pressione dei pneumatici?', ['A freddo, con la moto ferma da qualche ora', 'Subito dopo una lunga corsa, a gomme calde', 'Solo di notte, con poca luce', 'Mai, perché si regolano da sole'], 0, 'La pressione sale col calore: la misura giusta è a freddo.'),
      fill('Il codice DOT 3224 indica una gomma prodotta nella settimana numero…?', ['32'], 'Le prime due cifre sono la settimana, le ultime due l’anno: 32ª settimana del 2024.'),
      fill('Battistrada 5,0 mm, limite 1,6 mm, usura 1 mm ogni 2000 km. Quanti km restano?', ['6800', '6.800', '6 800'], '(5,0 − 1,6) × 2000 = 6800 km.'),
      mc('Cosa indica una leva del freno «spugnosa»?', ['Possibile aria nell’impianto: non si parte', 'Freni nuovi, ancora da rodare del tutto', 'Liquido in eccesso nel serbatoio', 'Una frenata solo più dolce e facile da modulare'], 0, 'Può esserci aria o una perdita: serve l’officina.'),
      mc('Il liquido di raffreddamento si controlla:', ['A motore freddo, nel vaso di espansione', 'A motore caldo, aprendo il tappo del radiatore', 'Solo d’inverno, prima delle gelate', 'Mai, perché il liquido dura per sempre'], 0, 'A motore caldo il liquido è in pressione e può scottare.'),
      fill('Serbatoio da 14 litri, consumo 5 l/100 km. Quale autonomia teorica in km?', ['280'], '14 / 5 × 100 = 280 km.'),
      mc('La catena si lubrifica:', ['A motore spento, ogni 500–1000 km circa', 'A motore acceso, a pieno gas, per distribuirla', 'Una volta sola nella vita della moto, appena acquistata', 'Con acqua, ogni 500 km circa, e senza asciugare'], 0, 'Si evita di infilare le dita su catena e corona in movimento.'),
      mc('Perché si controllano sia la leva sia il pedale per verificare lo stop?', ['Spesso sono due interruttori separati', 'Perché sono sempre collegati allo stesso interruttore', 'Per consumare in modo uniforme le pastiglie', 'Perché in realtà non serve controllarli'], 0, 'Lo stop deve accendersi con entrambi i freni.'),
      mc('Che cosa fai se la moto perde olio visibilmente?', ['Non parti e la fai controllare', 'Parti piano e controlli all’arrivo', 'Aggiungi acqua nel carter', 'Spegni la spia e prosegui'], 0, 'Una perdita può portare a bloccare il motore o a farti scivolare.'),
      mc('Dove si posiziona il carico per non disturbare l’equilibrio?', ['Basso e vicino al centro della moto', 'In alto, dietro la schiena del pilota', 'Appeso al manubrio, ai due lati', 'Tutto su un lato per bilanciare il peso'], 0, 'Un carico alto o decentrato peggiora la stabilità.'),
      order('Ordina il controllo prima di partire', ['Gomme', 'Comandi', 'Luci', 'Olio e liquidi', 'Catena e telaio', 'Cavalletti'], 'Un ordine fisso evita dimenticanze.')
    ],
    test: [
      fill('Una gomma ha codice DOT 1823. In quale anno è stata prodotta?', ['2023'], 'Le ultime due cifre sono l’anno: 2023, settimana 18.'),
      fill('Battistrada 4,2 mm, limite 1,6 mm, usura 1 mm ogni 2500 km. Quanti km restano?', ['6500', '6.500', '6 500'], '(4,2 − 1,6) × 2500 = 6500 km.'),
      mc('Il gioco corretto della catena si trova:', ['Nel manuale della moto', 'Chiedendo a un altro motociclista', 'Sul bordo interno del casco', 'Non esiste un valore indicato'], 0, 'Spesso 20–30 mm, ma il valore giusto è quello del manuale.'),
      mc('Che cosa significa che il liquido freni cala nel serbatoio?', ['Pastiglie consumate o possibile perdita', 'Che i freni sono in perfetto stato e non servono controlli', 'Che il serbatoio del liquido è troppo piccolo', 'Che la moto è nuova di fabbrica'], 0, 'Con pastiglie consumate il livello scende: va controllato.'),
      fill('Serbatoio da 12 litri, consumo 4 l/100 km. Quale autonomia teorica in km?', ['300'], '12 / 4 × 100 = 300 km.'),
      mc('Se una spia rossa della pressione olio si accende in marcia, che cosa fai?', ['Mi fermo appena sicuro e spengo il motore', 'Continuo fino a casa con andatura ridotta', 'Accelero per far raffreddare l’olio', 'Ignoro la spia finché non lampeggia'], 0, 'Senza olio il motore si danneggia rapidamente.'),
      mc('Quanto tempo richiede in genere un controllo pre-partenza completo?', ['Circa 2–3 minuti', 'Circa un’ora, con smontaggio parziale', 'Mezza giornata in officina', 'Nessuno, basta una sbirciata'], 0, 'È un investimento minimo rispetto ai rischi evitati.')
    ]
  });

  C.addTopic({
    id: 'moto-posizione-equilibrio-primi-movimenti', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'Posizione, equilibrio e primi movimenti',
    summary: 'Come sedersi, usare frizione e cambio, partire e fermarsi, fare curve lente e manovre a bassa velocità, esercitandosi in un luogo sicuro.',
    objectives: ['Assumere la posizione di guida corretta', 'Descrivere la sequenza di partenza, cambiata e arresto', 'Applicare i principi di sguardo, frizione e freno posteriore nelle manovre lente'],
    prereq: ['moto-controlli-prima-di-partire'],
    pages: [
      { h: 'La posizione di guida', b: `Una buona posizione dà controllo e riduce la fatica.

- **Busto**: leggermente inclinato in avanti, schiena morbida, non rigida.
- **Braccia**: **gomiti morbidi e leggermente piegati**, non bloccati: sono ammortizzatori. Mani sulle manopole senza stringere con forza.
- **Gambe**: **ginocchia a contatto con il serbatoio**: ti ancorano alla moto, così non devi reggerti col manubrio.
- **Piedi**: sulle pedane, **punte in avanti**.
- **Testa e sguardo**: testa alta, sguardo **lontano**, non sulla ruota davanti.
- **Dita**: due dita (o più) restano sempre vicine alle leve del freno e della frizione.

> Un test semplice: se, lasciando le mani per un attimo, il corpo non scivola in avanti e le braccia sono rilassate, la posizione è buona.

Ogni moto ha un’ergonomia propria: una custom, una naked e una sportiva cambiano la posizione, ma i principi (sguardo lontano, braccia morbide, ginocchia strette) restano gli stessi.` },
      { h: 'Equilibrio: perché la moto sta in piedi', b: `Una moto ferma non sta in piedi da sola; in movimento sì. Due ragioni principali.

- **Velocità**: più vai veloce, più la moto tende a rimanere dritta. A velocità molto basse la moto è **instabile** e servono più attenzione e piccoli aggiustamenti.
- **Sguardo e corpo**: la moto va dove guardi. Se fissi un ostacolo, tendi a finirci contro («fissazione sul bersaglio»). Per evitarlo: guarda **il punto dove vuoi andare**, non l’ostacolo.

Il **baricentro** è il punto dove si concentra il peso. In una moto è basso: tenere le ginocchia strette, il busto morbido e non spostare bruscamente il peso aiuta.

A velocità più alta, la moto si guida con il **controsterzo**: per curvare a destra si spinge leggermente il manubrio destro in avanti, e la moto si inclina a destra. Non serve capire la fisica per ora: la useremo nelle lezioni di guida e di dinamica. Per ora ricorda che a **passo d’uomo** si sterza invece nella direzione della curva.

> Esercizio mentale: guarda sempre dove vuoi **andare**, non dove temi di finire.` },
      { h: 'Frizione e punto di attacco', b: `La **frizione** collega e scollega motore e ruota. Rilasciando la leva si passa gradualmente da «staccato» a «collegato». C’è una zona intermedia chiamata **punto di attacco** (o zona di frizione), in cui la moto comincia a muoversi.

**Esercizio base** (in piazzale vuoto, con la moto stabile e un istruttore, se possibile):

1. Motore acceso, **frizione tirata**, prima inserita.
2. Rilascia la leva **lentamente** fino a sentire che la moto «vuole andare»: quello è il punto di attacco.
3. Se hai gas minimo, la moto parte a passo d’uomo.
4. Tira di nuovo la frizione: la moto smette di essere spinta dal motore.

> Un po’ di gas, **non troppo**: se dai troppo gas e rilasci in fretta, la moto scatta; se non dai gas, può spegnersi (stallo del motore).

Usare la frizione in modo «parziale» (tenendola a metà) è utile a bassa velocità e nelle manovre, ma **non è un modo di guidare** a lungo: la frizione si scalda e si consuma.

Sugli scooter non c’è frizione: l’automatico collega il motore al crescere del gas.` },
      { h: 'La partenza', b: `Sequenza per partire da fermo (su una moto con cambio manuale):

1. Posizione corretta, **specchietti** regolati, controlli fatti.
2. **Frizione tirata**, prima inserita (pedale giù).
3. **Guarda** indietro (spalla/specchietto) per vedere se arriva qualcuno, accendi la **freccia** se ti immetti sulla strada.
4. Un po’ di **gas** (giri leggermente sopra il minimo).
5. Rilascia **lentamente** la frizione fino al punto di attacco: la moto si muove.
6. Appena in movimento, **piedi sulle pedane** e rilascia del tutto la frizione con gradualità.
7. Spegni la freccia, alza lo sguardo e procedi.

Errori comuni:

- Rilasciare in fretta la frizione: la moto scatta o si spegne.
- Tenere i piedi a terra troppo a lungo: la moto va in equilibrio solo se ha un po’ di velocità.
- Guardare la ruota davanti invece della strada.

In salita parti con il **freno** (posteriore) tenuto, rilasciandolo mentre dai gas e rilasci la frizione.` },
      { h: 'Cambiare marcia', b: `Si cambia marcia per tenere il motore in un buon intervallo di giri: né troppo basso (la moto strattona), né troppo alto (rumoroso e consuma).

**Salire (esempio dalla 1ª alla 2ª):**

1. Chiudi leggermente il gas.
2. **Tira la frizione**.
3. Con la punta del piede, **sollevi il pedale** del cambio verso l’alto: scatta la 2ª.
4. Rilascia la frizione **dolcemente** e riapri il gas.

**Scalare (scendere di marcia):**

1. Rallenta con i freni.
2. Tira la frizione, premi il pedale **verso il basso**.
3. Rilascia la frizione piano: il motore gira più in fretta con la marcia più corta; se rilasci di colpo la ruota posteriore può bloccarsi o pattinare.

Regola pratica: **non scalare mai più marce del dovuto** quando vai ancora veloce. Lo scalare serve per essere pronti a riaccelerare, non per frenare.

> Per passare dalla 1ª alla 3ª si sale **2 volte**.

Il **cambio elettronico** (*quickshifter*) permette di salire senza frizione; per un principiante è meglio imparare prima il gesto classico.` },
      { h: 'Arresto e fermata', b: `Per fermarsi in modo controllato:

1. **Guarda lontano**, individua il punto dove vuoi fermarti.
2. **Chiudi il gas** e inizia a frenare con **entrambi i freni**, in modo progressivo.
3. Quando la velocità è bassa e il motore sta per spegnersi, **tira la frizione** (altrimenti il motore si spegne).
4. Scala in prima (se vuoi essere pronto a ripartire) o metti la **folle**.
5. **Appoggia il piede a terra** (di solito il sinistro) quando la moto è praticamente ferma, tenendo il destro sul pedale del freno posteriore.
6. Abbassa il cavalletto o mantieni i freni premuti.

Errori comuni:

- Frenare con il solo posteriore: poco efficace.
- Frenare bruscamente in curva o con il manubrio girato.
- Non guardare dove si mette il piede: una buca o ghiaia possono far perdere l’appoggio.

In coda o a un semaforo, mantieni la **moto in prima** con la frizione tirata, e il freno premuto: sei pronto a muoverti se serve.

> Per una fermata vera non basta la folle: la moto in folle senza freni può muoversi su una pendenza.` },
      { h: 'Curve lente e manovre a bassa velocità', b: `Le manovre a bassa velocità (inversione a U, parcheggi, slalom) sono le più difficili, perché l’equilibrio è debole. Alcuni principi.

- **Sguardo**: gira la **testa** nella direzione in cui vuoi andare, guarda **la fine della curva**, non il bordo della strada.
- **Frizione parzialmente rilasciata** e **gas leggero e costante**: la moto è tenuta «tesa» dal motore e non si spegne.
- **Freno posteriore** leggero, per controllare la velocità senza far cadere la moto in avanti. Il **freno anteriore** a bassa velocità con il manubrio girato è rischioso: la moto può cadere.
- **Corpo**: busto rilassato, ginocchia sul serbatoio, gomiti morbidi. Non ti sporgere in dentro: in lento si guida la moto, non il corpo.
- **Manubrio**: a passo d’uomo, gira nella direzione della curva.

Per l’**inversione a U**: guarda **sopra la spalla**, verso dove vuoi andare; gira il manubrio con calma, usa frizione e freno posteriore.

Il **raggio di curva** dipende dalla velocità: sotto i 20 km/h puoi girare stretto; più veloce, serve spazio.

Esercitati con coni o bottigliette in un piazzale vuoto: è il metodo che usano le scuole.` },
      { h: 'Come esercitarsi in sicurezza', b: `Impara da zero seguendo questi principi.

- **Luogo**: un **piazzale vuoto** o un’area di scuola guida, senza traffico, auto, pedoni, con fondo pulito e asciutto.
- **Compagnia**: se possibile con un **istruttore** o una persona esperta. Una scuola moto o un corso di guida sicura sono il modo più rapido e sicuro.
- **Equipaggiamento completo**: casco, guanti, stivali, giacca e pantaloni protettivi, anche per esercitarsi.
- **Progressione**: parti da cose semplici (equilibrio, frizione, partenza e arresto), poi aggiungi cambio, slalom, inversioni.
- **Poco alla volta**: sessioni brevi (20–30 minuti), con pause. Stanchezza e frustrazione portano errori.
- **Non uscire** nel traffico finché le manovre di base non sono automatiche.

Errori da evitare: esercitarsi in strade pubbliche, alzare la velocità per «provare», imitare ciò che si vede nei video.

> Ricorda: la guida sicura si costruisce con **ripetizioni lente e precise**. La velocità e le prestazioni vengono dopo, e si esplorano in pista, in un contesto protetto.

Se ti sembra tutto lento: è normale. È così che i gesti diventano automatici.` }
    ],
    exercises: [
      mc('Come devono essere i gomiti in guida?', ['Morbidi e leggermente piegati', 'Bloccati e ben dritti sul manubrio', 'Larghi e rigidi per sentire la strada', 'Appoggiati al serbatoio per riposare'], 0, 'Funzionano da ammortizzatori e permettono di muovere il manubrio con precisione.'),
      mc('Dove devono stare le ginocchia?', ['A contatto con il serbatoio', 'Aperte, lontane dal serbatoio', 'Appoggiate sul manubrio', 'Fuori dalle pedane, verso il basso'], 0, 'Ancorano il corpo alla moto e alleggeriscono le braccia.'),
      mc('Dove si guarda durante la guida?', ['Lontano, dove si vuole andare', 'Sulla ruota anteriore, poco davanti', 'Sul tachimetro, per i limiti', 'Sul pavimento, appena davanti alla moto'], 0, 'La moto tende ad andare dove guardi.'),
      mc('Che cos’è il punto di attacco della frizione?', ['Il punto in cui la moto comincia a muoversi rilasciando la leva', 'Il punto più alto di corsa della leva del gas', 'Il tasto che serve all’avviamento', 'La posizione in cui il cambio è in folle e la moto ferma'], 0, 'È la zona intermedia in cui motore e ruota cominciano a collegarsi.'),
      fill('Per passare dalla 1ª alla 3ª quante volte si solleva il pedale del cambio?', ['2'], '1ª→2ª e 2ª→3ª: due passaggi.'),
      mc('Quale freno si usa con cautela a bassa velocità con il manubrio girato?', ['Il posteriore, l’anteriore con grande cautela', 'Solo l’anteriore, azionato a fondo con il manubrio girato', 'Nessuno dei due, per non cadere', 'Entrambi, azionati a fondo insieme con decisione'], 0, 'Il posteriore aiuta a controllare; l’anteriore con manubrio girato rischia di far cadere.'),
      mc('Che cosa fa il motore se si dà gas troppo poco rilasciando la frizione troppo in fretta?', ['Si spegne (stallo)', 'Aumenta la potenza', 'Cambia marcia da solo', 'Accende la folle'], 0, 'Senza sufficiente gas il motore si spegne.'),
      mc('Dove ci si esercita all’inizio?', ['Un piazzale vuoto o un’area di scuola guida', 'Una strada trafficata, per abituarsi subito', 'Un tratto di autostrada poco frequentato', 'Una strada ripida in discesa e con curve'], 0, 'Meno rischio e più possibilità di ripetere.'),
      mc('Prima di fermarti completamente, che cosa fai con la frizione?', ['La tiri per evitare che il motore si spenga', 'La lasci sempre rilasciata fino all’arresto', 'La stacchi dal manubrio con le mani', 'Non la usi mai, basta il freno'], 0, 'A bassa velocità la frizione tirata evita lo stallo.'),
      mc('Come si stabilizza la moto in una curva stretta a passo d’uomo?', ['Più gas leggero e frizione parziale, sguardo lontano', 'Frenare forte con il solo freno anteriore e sterzare', 'Chiudere gli occhi e affidarsi all’equilibrio della moto', 'Spegnere il motore e proseguire in folle'], 0, 'Un po’ di gas con frizione parziale stabilizza la moto in lento.'),
      order('Ordina la partenza da fermo', ['Frizione tirata e prima inserita', 'Guardo indietro e metto la freccia', 'Un po’ di gas', 'Rilascio piano la frizione', 'Piedi sulle pedane'], 'La sequenza fa partire senza scatti.')
    ],
    test: [
      mc('Perché gli esercizi iniziali si fanno con l’equipaggiamento completo?', ['Perché anche cadute a bassa velocità causano ferite', 'Perché è una moda diffusa tra i motociclisti', 'Perché la scuola lo richiede soltanto per estetica', 'Perché a bassa velocità non serve proteggersi'], 0, 'Le cadute da fermo o lente causano comunque abrasioni e fratture.'),
      mc('Che cosa significa «fissazione sul bersaglio»?', ['Guardare un ostacolo e finirci contro', 'Guardare lontano e superare l’ostacolo', 'Spegnere il motore davanti all’ostacolo', 'Frenare molto presto in rettilineo'], 0, 'Il corpo segue lo sguardo: meglio guardare il percorso libero.'),
      fill('Per passare dalla 2ª alla 5ª quante volte si solleva il pedale?', ['3'], '2ª→3ª, 3ª→4ª, 4ª→5ª: tre passaggi.'),
      mc('In salita, per partire senza far indietreggiare la moto, si usa:', ['Il freno posteriore tenuto, poi rilasciato con gas e frizione', 'Il solo gas, aumentato in modo progressivo e deciso', 'Il cavalletto laterale lasciato abbassato sul terreno', 'La folle, inserita mentre la moto sta già salendo'], 0, 'Il freno tiene la moto mentre si trova il punto di attacco.'),
      mc('Quando si usa la frizione parzialmente rilasciata?', ['A bassa velocità e nelle manovre', 'Sempre in autostrada, per i consumi', 'Solo a moto spenta, in garage', 'Mai, perché consuma la frizione'], 0, 'È uno strumento per le manovre lente, non per guidare a lungo.'),
      mc('Durata consigliata per una sessione iniziale di esercizio?', ['20–30 minuti, con pause', '4 ore di fila, senza pause', '5 minuti, una sola volta alla settimana', 'Una giornata intera, per fare pratica'], 0, 'La stanchezza peggiora la precisione.'),
      mc('Quale è un errore da evitare nelle prime uscite?', ['Esercitarsi in strade pubbliche senza esperienza', 'Usare un piazzale vuoto o l’area di una scuola guida', 'Chiedere consiglio a un istruttore esperto del posto', 'Partire piano e senza fretta, con l’attrezzatura completa'], 0, 'Il traffico aggiunge rischi che non servono nell’apprendimento.')
    ]
  });

  C.addTopic({
    id: 'moto-frenata-abs-e-aiuti-elettronici', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'Frenata, ABS e aiuti elettronici',
    summary: 'Come frena una moto, quanto ci si ferma, come funzionano ABS, controllo di trazione e mappe motore e che cosa non possono fare.',
    objectives: ['Spiegare perché il freno anteriore è il più potente e come usarlo in modo progressivo', 'Calcolare spazio di reazione e di frenata a velocità diverse', 'Descrivere ABS, controllo di trazione e mappe e i loro limiti'],
    prereq: ['moto-posizione-equilibrio-primi-movimenti'],
    pages: [
      { h: 'Come frena una moto', b: `Una moto ha **due freni indipendenti**: la leva destra frena la ruota **anteriore**, il pedale destro frena la ruota **posteriore**.

Frenando, il peso si sposta in avanti: è il **trasferimento di carico**. La ruota anteriore è più schiacciata a terra, dunque può frenare **di più**. Per questo il freno anteriore è il più potente e fornisce la **maggior parte** della frenata; il posteriore, scarico, si blocca più facilmente.

- Il **freno anteriore** frena molto, ma va usato con **progressività**.
- Il **freno posteriore** stabilizza e aiuta a bassa velocità e in curva lenta.
- In generale, in frenata di emergenza si usano **entrambi**.

> Non è pericoloso usare il freno anteriore: è pericoloso usarlo **bruscamente** o con la moto in piega, quando la ruota ha meno aderenza disponibile.

Altri nomi utili: **CBS** (*combined braking system*): frenata combinata, in cui una leva aziona in parte anche l’altro freno; **ABS** (antibloccaggio) lo vediamo tra poco.` },
      { h: 'La tecnica: frenata progressiva', b: `Una frenata efficace ha una sequenza.

1. **Sguardo lontano**, schiena morbida, ginocchia sul serbatoio.
2. **Chiudi il gas**.
3. **Frenata anteriore progressiva**: prima prendi il gioco della leva e stringi con gradualità; poi aumenti la pressione man mano che il peso si sposta in avanti.
4. **Posteriore** con dolcezza, in sostegno.
5. A bassa velocità **tira la frizione** per non spegnere il motore.
6. **Rilascia** la leva in modo graduale a velocità quasi zero.

Cose da evitare:

- **Pugno brusco** sulla leva: la ruota davanti può bloccarsi e la moto cade.
- **Frenare forte in piega**: meno aderenza disponibile, rischio di caduta. Se è possibile, frena **prima** della curva, a moto dritta.
- Fissare un ostacolo: guarda la via di fuga.

Esercizio: in un piazzale con un istruttore, ripeti frenate da 30 km/h aumentando la pressione sulla leva, per sentire il limite (con ABS sentirai la pulsazione). Non cercare di bloccare la ruota su strada.` },
      { h: 'Spazi di frenata: due somme', b: `Per fermarsi servono due spazi.

> **Spazio di reazione** = velocità (m/s) × tempo di reazione (s). Il tempo di reazione è circa **1 s** (varia da persona a persona e con la stanchezza).
> **Spazio di frenata** = v² / (2 × a), con **a** la decelerazione.
> Spazio totale = reazione + frenata.

Per convertire km/h in m/s si **divide per 3,6**. Esempio con **a = 6 m/s²** (valore prudente, asfalto asciutto in buono stato):

| Velocità | v (m/s) | Reazione (1 s) | Frenata | Totale |
| --- | --- | --- | --- | --- |
| 30 km/h | 8,3 | 8,3 m | 5,8 m | **14,1 m** |
| 50 km/h | 13,9 | 13,9 m | 16,1 m | **30,0 m** |
| 100 km/h | 27,8 | 27,8 m | 64,3 m | **92,1 m** |

Osservazioni:

- Raddoppiando la velocità, lo spazio di **frenata quadruplica** (50 → 100 km/h: da 16,1 a 64,3 m, circa ×4).
- Sul bagnato la decelerazione è molto minore: gli spazi crescono.
- Il tempo di reazione conta quanto la frenata, soprattutto a velocità alta.

Per questo la **distanza di sicurezza** deve tenere conto di entrambi.` },
      { h: 'ABS: che cos’è e come funziona', b: `L’**ABS** (*Anti-lock Braking System*, antibloccaggio) impedisce che le ruote si blocchino in frenata.

Come funziona:

1. Un **sensore** su ogni ruota misura la velocità di rotazione.
2. Una **centralina** elettronica confronta i dati: se una ruota rallenta troppo in fretta (sta per bloccarsi), interviene.
3. Una **valvola** riduce per un istante la pressione sul freno di quella ruota e poi la ripristina, molte volte al secondo.
4. Tu avverti una **pulsazione** sulla leva o sul pedale: è normale.

Perché è utile: una ruota **bloccata** non sterza e scivola; con ABS la ruota continua a girare e puoi ancora **mantenere la direzione** e frenare.

Alcune cose da sapere:

- Nell’Unione Europea l’ABS è **obbligatorio sulle moto nuove sopra i 125 cm³** (dal 2016); per le moto più piccole è previsto ABS o frenata combinata (dal 2019). Controlla sul tuo modello.
- Esistono ABS a **un canale** (solo anteriore), a **due canali** (anteriore e posteriore) e **ABS di curva** (con sensore di inclinazione).
- Una spia ABS gialla fissa indica un guasto: l’ABS non funziona.` },
      { h: 'Che cosa l’ABS non fa', b: `L’ABS è un aiuto, non una garanzia. Non fa miracoli.

- **Non accorcia sempre la frenata.** Su asfalto buono può farla un po’ più corta; su ghiaia, sterrato o neve può addirittura allungarla.
- **Non aumenta l’aderenza.** Con le gomme fredde, vecchie o con pioggia, il limite resta basso.
- **Non permette di frenare in piega come su un rettilineo** (l’ABS standard è pensato per la moto dritta; l’ABS di curva aiuta, ma non cancella la fisica).
- **Non compensa** la velocità eccessiva, la distanza troppo corta o la distrazione.
- **Non impedisce** il sollevamento della ruota posteriore in frenate fortissime (alcune moto hanno un controllo anti-impennata, altre no).

> Pericolo tipico: **fidarsi troppo** dell’ABS e guidare più forte. Non si cambia lo stile perché c’è l’ABS: lo si tiene come rete di sicurezza.

Pratica: in un corso di guida sicura con un istruttore, in un piazzale, si può provare a frenare forte per **sentire** l’intervento, in modo controllato. Non provarlo in strada.

Se senti la pulsazione, **non mollare la leva**: continua a premere con decisione finché lo spazio serve.` },
      { h: 'Controllo di trazione e mappe motore', b: `Oltre all’ABS, molte moto hanno altri aiuti elettronici.

**Controllo di trazione (TCS, *Traction Control System*).** Confronta la velocità della ruota posteriore con quella dell’anteriore: se il posteriore gira molto più in fretta (pattina), la centralina riduce la potenza (per esempio ritardando l’accensione o chiudendo l’alimentazione). Utile in uscita di curva, su fondo bagnato o con asfalto sporco. **Non crea aderenza**: se la strada è ghiacciata o la gomma è fredda, il limite resta.

**Mappe motore (modalità di guida).** Cambiano la risposta del gas e a volte la potenza massima.

- **Rain** (pioggia): gas più dolce e potenza limitata, più intervento del controllo.
- **Road / Touring** (strada): risposta equilibrata.
- **Sport**: gas pronto e aggressivo; in genere si usa in pista.

Altre funzioni possibili: **controllo di impennata**, **controllo di partenza**, **cruise control**, **freno motore regolabile**.

> Una mappa «pioggia» non rende sicuro il bagnato: riduce gli errori sul gas, non la distanza di frenata.

Imposta le modalità **da fermo** e impara cosa fanno con calma. Con un neopatentato, la mappa più dolce è la scelta giusta.` },
      { h: 'Elettronica avanzata e limiti', b: `Alcune moto moderne hanno una **IMU** (*Inertial Measurement Unit*): una piccola unità con sensori (giroscopi e accelerometri) che misura **inclinazione, impennata e accelerazioni**. Con questi dati, l’elettronica regola in modo più fine ABS e controllo di trazione, anche in curva (**ABS di curva**).

Vantaggi: più sicurezza in situazioni di emergenza, soprattutto per chi guida con prudenza.

Limiti, da ricordare:

- L’elettronica **lavora entro i limiti della fisica**: se chiedi più aderenza di quella disponibile, nessun sistema può darla.
- I sensori possono **sbagliare** con pneumatici non originali, pressioni errate o modifiche alla moto.
- L’elettronica **non guida al posto tuo**: non vede il traffico, le buche, l’olio sull’asfalto.
- Un pilota che si fida troppo **riduce i margini** per compensare.

> Metafora utile: gli aiuti elettronici sono come le **cinture di sicurezza** di un’auto. Ti aiutano se qualcosa va storto, ma non sono un motivo per spingere di più.

Le prestazioni elevate si esplorano **in pista**, con un istruttore e in un ambiente protetto, non su strade aperte.` },
      { h: 'Riepilogo e buone pratiche', b: `Cose da ricordare.

1. Il **freno anteriore** è il più potente, ma va usato in modo **progressivo**. Il posteriore **stabilizza**.
2. **Spazio di fermata = reazione + frenata**. Raddoppiare la velocità **quadruplica** la frenata.
3. L’**ABS** evita il bloccaggio delle ruote: puoi frenare forte e mantenere la direzione. Non accorcia sempre lo spazio.
4. Il **controllo di trazione** limita il pattinamento; le **mappe** cambiano la risposta del gas.
5. Gli aiuti **non sostituiscono** la guida prudente e un buon equipaggiamento.

Esempio riassuntivo con a = 6 m/s²:

> A 70 km/h: v = 19,4 m/s; reazione 19,4 m; frenata 19,4² / 12 ≈ **31,5 m**; totale ≈ **51 m**.

Cosa fare:

- **Mantieni la distanza** da chi ti precede: più è alta la velocità, più spazio serve.
- Riduci la velocità in caso di pioggia, fondo sporco, buio.
- **Fai pratica** in un corso di guida sicura per capire cosa fa la tua moto in frenata.
- Controlla **pastiglie, liquido freni e pneumatici**.

Frenare bene non è un talento: è una competenza che si allena in sicurezza.` }
    ],
    exercises: [
      mc('Quale freno fornisce la maggior parte della frenata?', ['L’anteriore', 'Il posteriore', 'Il freno motore', 'La frizione'], 0, 'Il peso si sposta in avanti e carica la ruota anteriore.'),
      mc('Che cos’è il trasferimento di carico in frenata?', ['Lo spostamento del peso verso la ruota anteriore', 'Lo spostamento del carburante dal serbatoio al motore', 'Il cambio di marcia durante la frenata', 'L’aumento dei giri del motore al rilascio del gas'], 0, 'Il peso va in avanti: l’anteriore è più carica e può frenare di più.'),
      fill('Una moto va a 50 km/h. Quanti metri percorre durante 1 secondo di reazione, con un decimale?', ['13,9', '13.9'], '50 / 3,6 = 13,9 m/s, quindi 13,9 m in 1 s.'),
      fill('A 50 km/h e decelerazione 6 m/s², quanti metri di frenata (un decimale)?', ['16,1', '16.1'], '13,89² / (2 × 6) = 16,1 m.'),
      fill('A 100 km/h con a = 6 m/s², quanti metri di frenata, con un decimale?', ['64,3', '64.3'], '27,78² / 12 = 64,3 m.'),
      fill('A 30 km/h con 1 s di reazione e a = 6 m/s², quanti metri totali per fermarsi (un decimale)?', ['14,1', '14.1'], '8,3 + 5,8 = 14,1 m.'),
      mc('Raddoppiando la velocità, lo spazio di frenata diventa circa:', ['Quattro volte', 'Il doppio, ossia 2 volte quello iniziale', 'Uguale', 'La metà'], 0, 'Lo spazio dipende da v²: raddoppi v, quadruplichi lo spazio.'),
      mc('Che cosa fa l’ABS?', ['Evita il blocco delle ruote in frenata', 'Aumenta sempre l’aderenza disponibile sul fondo', 'Accorcia sempre lo spazio di frenata, su ogni fondo', 'Sostituisce il pilota nelle situazioni di emergenza'], 0, 'Permette di frenare forte mantenendo la ruota in rotazione e la direzione.'),
      mc('Che cosa senti sulla leva quando l’ABS interviene?', ['Una pulsazione', 'Nulla', 'Un blocco totale', 'Un rumore di motore'], 0, 'È normale: non mollare la leva.'),
      mc('Che cosa fa il controllo di trazione?', ['Riduce la potenza se la ruota posteriore pattina', 'Aumenta la potenza in uscita di curva per spingere', 'Frena la ruota anteriore quando si è in curva', 'Cambia marcia in modo automatico durante l’accelerazione'], 0, 'Limita il pattinamento, ma non crea aderenza dove non c’è.'),
      order('Ordina la tecnica di frenata', ['Sguardo lontano', 'Chiudo il gas', 'Freno anteriore progressivo', 'Posteriore in sostegno', 'Rilascio graduale a fine frenata'], 'La frenata efficace è progressiva e controllata.')
    ],
    test: [
      fill('A 70 km/h con 1 s di reazione e a = 6 m/s², quanti metri di frenata (un decimale)?', ['31,5', '31.5'], '19,44² / 12 ≈ 31,5 m.'),
      fill('A 90 km/h, quanti metri percorri durante 1 s di reazione?', ['25'], '90 / 3,6 = 25 m/s.'),
      fill('A 90 km/h con a = 6 m/s², quanti metri totali per fermarsi (un decimale)?', ['77,1', '77.1'], '25 + 25² / 12 = 25 + 52,1 = 77,1 m.'),
      mc('Quale è un limite tipico dell’ABS?', ['Su ghiaia può allungare la frenata', 'Funziona solo con asfalto asciutto e di notte', 'Non evita mai il bloccaggio delle ruote', 'Rende superfluo l’impianto frenante'], 0, 'Su fondi sciolti la ruota che si blocca crea un cuneo utile: l’ABS può allungare.'),
      mc('Che cos’è una mappa «Rain» del motore?', ['Una risposta del gas più dolce con potenza ridotta', 'Un tipo di pneumatico da bagnato con tasselli', 'Una luce speciale da accendere solo con la pioggia', 'Un freno aggiuntivo sulla ruota posteriore più sensibile'], 0, 'Riduce gli errori sul gas ma non accorcia la frenata sul bagnato.'),
      mc('Che cos’è la IMU?', ['Un sensore di inclinazione e accelerazioni', 'Un tipo di freno a disco ventilato per la pista', 'Una modalità di guida pensata per il bagnato', 'Un sensore che misura il livello di carburante'], 0, 'L’IMU permette controlli più fini, come l’ABS di curva.'),
      mc('Dove si prova a frenare forte per sentire l’ABS in modo sicuro?', ['In un piazzale con un istruttore', 'In una strada trafficata, di giorno', 'In autostrada, a velocità elevata', 'In curva, per sentire intervenire l’ABS'], 0, 'Prove di frenata forte in un ambiente controllato sono parte dei corsi di guida sicura.')
    ]
  });

  C.addTopic({
    id: 'moto-scegliere-la-prima-moto', subject: 'moto', stage: 'L0', minutes: 12,
    title: 'Scegliere la prima moto e crescere in sicurezza',
    summary: 'Cilindrata, altezza sella, peso, costi di gestione con calcolo del costo annuo, corsi di guida sicura, usato o nuovo.',
    objectives: ['Valutare cilindrata, sella e peso in base alla propria statura ed esperienza', 'Calcolare il costo annuo di una moto sommando costi fissi e variabili', 'Pianificare un percorso di crescita con corsi e chilometri di esperienza'],
    prereq: ['moto-frenata-abs-e-aiuti-elettronici'],
    pages: [
      { h: 'Cilindrata e potenza: quanto basta', b: `La prima moto non deve essere la moto dei sogni: deve essere quella con cui impari **in fretta e senza spaventarti**.

- **Cilindrata**: le piccole (125 cm³) sono docili e leggere; le medie (300–700 cm³) offrono più potenza; le grandi (oltre 900 cm³) sono prestazionali ma richiedono esperienza.
- **Potenza**: conta molto più della cilindrata. Una 500 dolce può essere più facile di una 300 aggressiva.
- **Erogazione**: la maniera in cui la potenza arriva. Un motore «progressivo» sale in modo regolare, uno «brusco» scatta al minimo tocco di gas.
- **Coppia ai bassi regimi**: dà una guida più facile e meno cambiate.

Il vincolo legale è la patente: con **A1** fino a 125 cm³ e 11 kW; con **A2** fino a 35 kW.

> Regola utile: scegli una moto che **non ti metta fretta**. Se per tenerla dritta devi irrigidirti, è troppo per te.

Il piacere di guidare non dipende dai cavalli: una moto di media potenza, ben tenuta, ti farà imparare **meglio** e consumare meno.` },
      { h: 'Altezza della sella', b: `L’**altezza della sella** è la distanza da terra al punto più alto della seduta. Conta perché da fermo devi **toccare terra**.

Prova in concessionaria:

1. Siediti sulla moto con la schiena dritta, senza chiedere sostegno.
2. Metti i piedi a terra: ideale la **pianta di un piede e la punta dell’altro**, o la **punta di entrambi** se sei esperto.
3. Se non tocchi con nessuna punta, la moto è **troppo alta** per ora.

Misure indicative (dipendono dal modello):

- Sella bassa: sotto gli **780 mm** (comoda per chi è di statura bassa).
- Sella media: **780–830 mm**.
- Sella alta: oltre **850 mm** (enduro, adventure).

Se ti piace la moto ma la sella è alta, esistono sellini ribassati o **kit di ribassamento** (modifiche da fare con un tecnico, perché alterano l’assetto).

> Esempio: una persona di 1,65 m ha un’altezza dell’**inseam** (cavallo) di circa 77 cm. Con una sella a 80 cm, non arriva a toccare con tutta la pianta: serve una sella più bassa o più esperienza.

Dalla sella dipende anche la **fiducia** nelle manovre da fermo.` },
      { h: 'Peso e facilità di manovra', b: `Il **peso** si sente soprattutto **da fermo** e a bassa velocità. Una moto che pesa troppo cade se si inclina oltre un certo punto e non si riesce a rialzarla.

Attenzione a due valori:

- **Peso a secco**: la moto senza liquidi, benzina, batteria. È il valore più basso, usato nella pubblicità.
- **Peso in ordine di marcia**: la moto con tutti i liquidi, con il serbatoio pieno (o quasi): è il peso reale. Può superare il peso a secco di **15–25 kg**.

Indicazioni orientative per chi comincia:

- Moto **sotto i 150 kg** a secco (125 cm³, supermotard, enduro leggere): molto facili.
- Moto **150–200 kg**: ancora adatte se la sella è giusta.
- Moto **sopra 220–250 kg**: richiedono più forza e pratica.

**Prova a tenere la moto ferma** inclinandola un po’ da un lato e dall’altro, spostandola con le braccia in retromarcia (a motore spento). Se ti spaventa, cerca un’altra moto.

Il **baricentro basso** (custom, touring) aiuta in movimento, ma il peso totale conta quando si manovra a mano. Una moto leggera perdona più errori.` },
      { h: 'I costi di gestione', b: `Comprare la moto è solo l’inizio. Ogni anno si pagano voci **fisse** (si pagano anche se non usi la moto) e **variabili** (dipendono dai km).

**Costi fissi**:

- **Assicurazione RC**: per i giovani e neopatentati può essere alta.
- **Bollo** (tassa di possesso).
- **Revisione** (in media 80 € ogni 2 anni = 40 € all’anno).
- **Equipaggiamento** (casco, giacca, guanti… va ammortizzato in 5 anni circa).
- **Deprezzamento**: la moto perde valore ogni anno (stima in percentuale).

**Costi variabili**:

- **Carburante**: litri per km × prezzo.
- **Tagliandi** e manutenzione ordinaria.
- **Pneumatici**: si sostituiscono dopo qualche migliaio di km.
- **Catena e ingranaggi**, pastiglie, olio.

**Ricorda**: parcheggio o box, parcheggio con ZTL, ricambi per cadute, accessori e multe sono extra.

> Anche una moto economica da comprare può costare di più nel tempo, se ha consumi alti o ricambi cari. Vale la pena fare un **preventivo** completo prima dell’acquisto.` },
      { h: 'Calcolo del costo annuo', b: `Facciamo un esempio completo con una moto usata di **4 500 €**, **6 000 km** all’anno.

**Costi fissi**

> Assicurazione: **480 €**
> Bollo: **60 €**
> Revisione: 80 / 2 = **40 €**
> Equipaggiamento: 700 / 5 = **140 €**
> Deprezzamento: 10% di 4 500 = **450 €**
> Totale fissi = 480 + 60 + 40 + 140 + 450 = **1 170 €**

**Costi variabili**

> Carburante: 6 000 × 4,5 / 100 = 270 litri × 1,85 € = **499,50 €**
> Tagliando: **180 €**
> Pneumatici: 320 € ogni 12 000 km → 320 × (6 000 / 12 000) = **160 €**
> Catena e ingranaggi: 210 € ogni 25 000 km → 210 × (6 000 / 25 000) = **50,40 €**
> Totale variabili = 499,50 + 180 + 160 + 50,40 = **889,90 €**

**Totale annuo** = 1 170 + 889,90 = **2 059,90 € ≈ 2 060 €**

Costo per km: 2 059,90 / 6 000 ≈ **0,34 €/km**; costo mensile ≈ 2 059,90 / 12 ≈ **172 €**.

I numeri sono **ipotetici**: prezzi e polizze variano. L’esercizio serve a imparare il **metodo**: sommare tutte le voci, anche quelle che non si vedono subito.` },
      { h: 'Corsi di guida sicura e crescita graduale', b: `Il modo più efficace per diventare un motociclista sicuro è **impararlo con un istruttore**.

- **Corsi di guida sicura**: in piazzali o circuiti, con istruttori qualificati. Si lavora su frenata di emergenza, slalom, curve, gestione dell’ABS, sguardo e posizione. Cercali presso **scuole guida, club e federazioni** riconosciute.
- **Corsi di guida su strada**: guida in traffico con un istruttore.
- **Track day** (giornate in pista): un ambiente protetto con regole e vie di fuga, dove puoi **esplorare le prestazioni** in sicurezza. Meglio dopo un corso e con una moto adatta.

Percorso consigliato:

1. **Patente** e primi esercizi in piazzale.
2. Una **moto leggera e docile** per i primi 1–2 anni e alcune migliaia di km.
3. **Corso di guida sicura**, ripetibile ogni tanto.
4. Solo dopo, se vuoi, una moto più potente (nei limiti di patente).
5. Prestazioni elevate: in **pista**.

> Un principio semplice: **sali di potenza solo quando le tue capacità sono cresciute**, non quando cresce la voglia.

Il segreto: guidare spesso, con prudenza, nelle condizioni giuste, e imparare da ogni uscita.` },
      { h: 'Usato o nuovo', b: `**Moto nuova**

- Pro: garanzia, nessuna sorpresa, ultime tecnologie (ABS, controlli).
- Contro: **deprezzamento** forte nei primi anni, prezzo alto.

**Moto usata**

- Pro: prezzo più basso, il deprezzamento maggiore è già avvenuto, meno dolore se cade.
- Contro: possibili difetti nascosti, storia ignota.

**Cosa controllare su un usato**

- **Documenti**: carta di circolazione, **libretto dei tagliandi**, numero di telaio che corrisponde.
- **Chilometri e stato**: usura di gomme, catena, dischi, leve.
- **Segni di caduta**: leve piegate, graffi a destra o a sinistra, manubrio storto.
- **Perdite** di olio o liquidi.
- **Test di guida**: avviamento, cambio, freni, rumori strani.
- **Verifica legale**: assenza di fermi, ipoteche, e correttezza del passaggio di proprietà (con costi: l’imposta e le pratiche).

> Se non sei esperto, **fai accompagnare** un amico meccanico o un esperto. E diffida di prezzi molto sotto mercato.

Una buona moto usata di 3–6 anni, ben tenuta, è spesso la scelta migliore per la prima moto: costa meno e consente di **imparare senza paura di graffiarla**.` },
      { h: 'Riepilogo: la prima moto, in pratica', b: `Una lista di controllo per scegliere.

1. **Patente**: la moto rientra nei limiti (A1 o A2)?
2. **Uso**: città, strade extraurbane, viaggio, sterrato?
3. **Sella**: tocco terra con la punta di entrambi i piedi o meglio?
4. **Peso**: riesco a spostarla a mano e a tenerla da ferma?
5. **Potenza**: docile, ti permette di imparare?
6. **Costi**: sai quanto spenderai all’anno, tutto compreso?
7. **Equipaggiamento**: hai il budget per casco e protezioni?
8. **Corso**: hai prenotato un corso di guida sicura?

> Esempio: moto usata a 4 500 €, equipaggiamento da 700 €, costo annuo di gestione circa 2 060 €. Il primo anno esce di tasca circa 4 500 + 700 + (2 060 − 140 − 450) = **6 670 €**, perché prezzo ed equipaggiamento si pagano subito (deprezzamento ed ammortamento dell’equipaggiamento si tolgono dai costi annui). Sapere cosa stai contando evita sorprese.

Ricorda: la moto è un **mezzo per imparare**, non un esame da superare con la potenza.

Le prestazioni vere si esplorano **in pista**, con un corso, protezioni e un istruttore, quando sei pronto. Sulla strada contano prudenza, visibilità e rispetto delle regole.` }
    ],
    exercises: [
      mc('Che cosa conta più della cilindrata per la facilità di guida?', ['Potenza, peso ed erogazione', 'Il colore della carena', 'Il numero degli specchietti', 'Il rumore dello scarico'], 0, 'La cilindrata da sola non dice nulla della docilità.'),
      mc('Che cosa devi riuscire a fare da fermo con la moto?', ['Toccare terra con i piedi', 'Salire in piedi sulla sella', 'Rimanere senza equilibrio', 'Non spostarla'], 0, 'L’altezza della sella deve permettere appoggi sicuri.'),
      mc('Il peso in ordine di marcia è:', ['Il peso con liquidi e carburante', 'Il peso senza liquidi né carburante', 'Il peso senza le ruote montate', 'Il peso del pilota con l’equipaggiamento'], 0, 'È il peso reale; il peso a secco è più basso.'),
      fill('Revisione da 80 € ogni 2 anni: quanti euro all’anno?', ['40'], '80 / 2 = 40.'),
      fill('Equipaggiamento da 700 € ammortizzato in 5 anni: quanti euro all’anno?', ['140'], '700 / 5 = 140.'),
      fill('Deprezzamento 10% su una moto da 4 500 €: quanti euro in un anno?', ['450'], '4 500 × 0,10 = 450.'),
      fill('Percorri 6 000 km con 4,5 l/100 km. Quanti litri consumi?', ['270'], '6 000 × 4,5 / 100 = 270.'),
      fill('270 litri a 1,85 € al litro. Quanti euro di carburante?', ['499,5', '499.5', '499,50', '499.50'], '270 × 1,85 = 499,50.'),
      fill('Costi fissi 480 + 60 + 40 + 140 + 450: quanti euro in totale?', ['1170', '1.170', '1 170'], '480 + 60 + 40 + 140 + 450 = 1 170.'),
      fill('Costo annuo totale di 1 170 fissi + 889,90 variabili, in euro arrotondati all’intero?', ['2060', '2.060', '2 060'], '1 170 + 889,90 = 2 059,90, circa 2 060.'),
      mc('Qual è il modo più efficace per crescere in sicurezza dopo la patente?', ['Corsi di guida sicura con un istruttore', 'Provare a limite su strada per capire i limiti', 'Guardare molti video di piloti esperti', 'Cambiare moto ogni mese per variare'], 0, 'L’istruttore corregge gli errori e fa provare le emergenze in sicurezza.'),
      order('Ordina il percorso di crescita consigliato', ['Patente e primi esercizi', 'Moto leggera e docile', 'Corso di guida sicura', 'Moto più potente (se serve)', 'Prestazioni in pista'], 'La potenza cresce con le capacità, non prima.')
    ],
    test: [
      fill('Percorri 5 000 km con 4 l/100 km a 1,90 € al litro. Quanti euro di carburante?', ['380'], '5 000 × 4 / 100 = 200 l; 200 × 1,90 = 380.'),
      fill('Assicurazione 600, bollo 70, carburante 380, tagliando 250: quanti euro in totale?', ['1300', '1.300', '1 300'], '600 + 70 + 380 + 250 = 1 300.'),
      fill('Costo annuo 1 300 € su 5 000 km: quanti euro per km (due decimali)?', ['0,26', '0.26'], '1 300 / 5 000 = 0,26.'),
      fill('Deprezzamento 8% su una moto da 5 000 €: quanti euro in un anno?', ['400'], '5 000 × 0,08 = 400.'),
      mc('Quale è un vantaggio dell’usato rispetto al nuovo?', ['Il deprezzamento maggiore è già avvenuto', 'Una garanzia del costruttore senza limiti', 'Una manutenzione quasi nulla nel tempo', 'Una potenza maggiore a parità di prezzo'], 0, 'La moto perde più valore nei primi anni.'),
      mc('Che cosa si controlla su una moto usata prima di comprarla?', ['Documenti, libretto tagliandi, segni di cadute e perdite', 'Soltanto il colore della carena e gli accessori montati', 'Soltanto il prezzo richiesto e il numero dei proprietari', 'Il numero di borse e portapacchi inclusi nella vendita'], 0, 'Documenti e condizioni dicono molto della storia.'),
      mc('Dove si esplorano le prestazioni elevate, in modo sicuro?', ['In pista con un corso e un istruttore', 'In autostrada, a velocità elevata', 'In città, tra i semafori', 'Su strade di montagna chiuse al traffico'], 0, 'La pista è un ambiente protetto, senza traffico opposto.')
    ]
  });

})(window.ST = window.ST || {});
