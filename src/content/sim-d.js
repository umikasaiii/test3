/* SkillTree — scenari di strategia a carte (parte D): mercato, investimenti, campagna astratta, assedio, diplomazia. Tutto inventato e didattico. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  const ch = (label, principle, out, hint) => hint ? { label, principle, hint, out } : { label, principle, out };
  const card = (id, lv, text, choices) => ({ id, lv, text, choices });

  /* ---- 1) Lanciare un prodotto in un mercato con concorrenti ---- */
  SIM.register({
    id: 'mercato', title: 'Lanciare un prodotto in un mercato con concorrenti', icon: '📈',
    intro: 'La tua piccola azienda lancia una cuffia wireless in un mercato dove dominano due concorrenti, Aurex e Brivo. Ogni decisione tocca prezzo, qualità, quota di mercato, cassa e reputazione. Il punteggio premia la cassa residua e la quota conquistata, più la solidità del marchio (reputazione e qualità percepita): una quota comprata in perdita pesa poco se brucia la cassa.',
    vars: {
      cassa: { label: 'Cassa', start: 60, min: -80, max: 250, unit: 'k€', tight: true },
      quota: { label: 'Quota di mercato', start: 5, min: 0, max: 60, unit: '%' },
      reputazione: { label: 'Reputazione del marchio', start: 50, min: 0, max: 100 },
      qualita: { label: 'Qualità percepita', start: 55, min: 0, max: 100 }
    },
    weights: { cassa: 0.6, quota: 2.2, reputazione: 0.5, qualita: 0.4 },
    penalties: [],
    turns: 5, utilText: '0,6 × cassa (negativa se in rosso) + 2,2 × quota di mercato + 0,5 × reputazione + 0,4 × qualità',
    cards: [
      card('m-prezzo', 1, 'Prima del lancio devi fissare il prezzo. Aurex vende a 99 €, Brivo a 79 €. Il tuo costo unitario è 45 €: un prezzo basso porta volumi ma erode il margine, uno alto ti lascia una nicchia piccola.', [
        ch('Prezzo d’ingresso a 69 €, sotto tutti', 'Elasticità della domanda', [o(0.55, { quota: 6, cassa: -4, reputazione: 2 }, 'Molti provano il prodotto; il margine è sottile ma i volumi arrivano.'), o(0.45, { quota: 3, cassa: -9, reputazione: -2 }, 'Brivo ti segue al ribasso e i volumi extra non compensano il margine perso.')]),
        ch('Prezzo a 89 €, tra i due', 'Differenziazione', [o(0.6, { quota: 2, cassa: 7, reputazione: 3 }, 'Il posizionamento intermedio regge e il margine è sano.'), o(0.4, { quota: 0, cassa: 2, reputazione: 0 }, 'Il cliente non vede perché pagare più di Brivo: vendite deboli.')]),
        ch('Prezzo a 109 €, premium, puntando sulla qualità', 'Segnale di qualità', [o(0.4, { quota: 1, cassa: 10, reputazione: 6, qualita: 5 }, 'Una nicchia di appassionati paga volentieri e parla bene di te.'), o(0.6, { quota: -1, cassa: -2, reputazione: -2 }, 'Senza un marchio noto il prezzo alto spaventa e il magazzino si riempie.')])
      ]),
      card('m-canale', 1, 'Puoi vendere su un grande marketplace (visibilità immediata, commissione del 20%) o dal tuo sito (margine pieno, ma nessuno ti conosce).', [
        ch('Solo marketplace', 'Costi fissi contro variabili', [o(0.7, { quota: 4, cassa: -3 }, 'Le vendite partono subito, ma la commissione mangia il margine.'), o(0.3, { quota: 2, cassa: -5, reputazione: -3 }, 'Una recensione negativa in prima pagina pesa molto, e non controlli la relazione col cliente.')]),
        ch('Solo sito proprietario', 'Controllo del margine', [o(0.4, { quota: 2, cassa: 4, reputazione: 3 }, 'Pochi clienti ma fedeli e a margine pieno.'), o(0.6, { quota: 0, cassa: -5, reputazione: 0 }, 'Nessuno ti trova e le spese di pubblicità non rientrano.')]),
        ch('Entrambi, con un piccolo budget pubblicitario', 'Diversificazione', [o(1, { quota: 3, cassa: -4, reputazione: 2 }, 'Copri più canali, ma disperdi attenzione e budget.')])
      ]),
      card('m-recensioni', 2, 'Le prime recensioni segnalano un difetto minore di connessione bluetooth in circa il 6% degli esemplari. Ritirare e sostituire costa, ignorare rischia di diffondere la voce.', [
        ch('Richiamo volontario con sostituzione gratuita', 'Reputazione come attivo', [o(0.8, { cassa: -10, reputazione: 8, qualita: 6 }, 'Costa caro ma il marchio ne esce come serio e affidabile.'), o(0.2, { cassa: -14, reputazione: 3, qualita: 3 }, 'Il richiamo è più esteso del previsto e logora la cassa.')]),
        ch('Aggiornamento firmware correttivo e sostituzione solo su richiesta', 'Costo di cambio', [o(0.6, { cassa: -3, reputazione: 3, qualita: 3 }, 'Il firmware risolve quasi tutti i casi: costo contenuto.'), o(0.4, { cassa: -5, reputazione: -4, qualita: -1 }, 'Il difetto resta per alcuni e la frustrazione si diffonde online.')]),
        ch('Non fai nulla e investi in pubblicità', 'Asimmetria informativa', [o(0.5, { cassa: -2, quota: 3, reputazione: -2 }, 'La voce non si diffonde e la pubblicità porta clienti.'), o(0.5, { cassa: -5, quota: -1, reputazione: -10, qualita: -6 }, 'Un video virale sul difetto distrugge la fiducia.')])
      ]),
      card('m-promo', 2, 'Si avvicina la stagione dei regali. Puoi fare una promozione del 20% per quattro settimane: aumenta i volumi, ma abitua i clienti a comprare solo a prezzo ribassato.', [
        ch('Promozione piena del 20%', 'Elasticità della domanda', [o(0.55, { quota: 5, cassa: 2, reputazione: -1 }, 'Il picco di vendite compensa lo sconto.'), o(0.45, { quota: 2, cassa: -6, reputazione: -2 }, 'Anticipi gli acquisti che avresti fatto comunque e il prezzo di riferimento scende.')]),
        ch('Bundle con accessorio a basso costo, prezzo invariato', 'Differenziazione', [o(0.65, { quota: 3, cassa: 3, reputazione: 3 }, 'Valore percepito alto senza toccare il prezzo di listino.'), o(0.35, { quota: 1, cassa: -3, reputazione: 0 }, 'L’accessorio costa più del previsto e nessuno lo apprezza.')]),
        ch('Nessuna promozione, prezzo fermo', 'Valore del marchio', [o(0.5, { quota: -1, cassa: 5, reputazione: 3 }, 'Perdi qualche vendita ma proteggi margine e posizionamento.'), o(0.5, { quota: -3, cassa: 1, reputazione: 0 }, 'I concorrenti scontano e ti portano via clienti.')])
      ]),
      card('m-guerra', 3, 'Brivo annuncia un taglio di prezzo del 15% sul suo modello concorrente. È una mossa tipica di Bertrand: se rispondi uguagliando, i margini scendono per tutti.', [
        ch('Uguagli subito il taglio', 'Guerra di prezzo', [o(0.5, { quota: 1, cassa: -9, reputazione: -1 }, 'Mantieni la quota, ma entrambi guadagnate meno.'), o(0.5, { quota: 3, cassa: -7, reputazione: 0 }, 'Brivo si ritira in fretta e i margini si stabilizzano.')]),
        ch('Ignori il taglio e mantieni il prezzo', 'Segnale di qualità', [o(0.5, { quota: -4, cassa: 2, reputazione: 2 }, 'Perdi un po’ di clienti sensibili al prezzo ma tieni il margine.'), o(0.5, { quota: -6, cassa: -1, reputazione: -1 }, 'Brivo guadagna terreno più del previsto.')]),
        ch('Lanci una versione “lite” a prezzo basso, lasciando intatto il modello principale', 'Segmentazione', [o(0.65, { quota: 3, cassa: -5, reputazione: 1 }, 'Presidi il segmento basso senza svalutare il prodotto principale.'), o(0.35, { quota: 1, cassa: -8, reputazione: -3, qualita: -3 }, 'La versione lite cannibalizza le vendite del modello principale.')])
      ]),
      card('m-fornitore', 3, 'Il tuo fornitore di batterie propone un contratto biennale a prezzo bloccato, con un 12% di sconto ma una penale in caso di mancato ritiro. Un fornitore alternativo costa di più, senza impegni.', [
        ch('Firmi il contratto biennale', 'Costi fissi contro variabili', [o(0.55, { cassa: 6, qualita: 2 }, 'Il costo unitario scende e i volumi lo sostengono.'), o(0.45, { cassa: -9, qualita: 2 }, 'La domanda frena e la penale ti stringe.')]),
        ch('Compri a lotti dal fornitore alternativo', 'Flessibilità', [o(1, { cassa: -2, qualita: 1 }, 'Costa un po’ di più ma resti libero di cambiare.')]),
        ch('Contratto annuale con sconto minore e clausola di uscita', 'Opzione reale', [o(0.7, { cassa: 3, qualita: 2 }, 'Un buon compromesso fra sconto e libertà.'), o(0.3, { cassa: 0, qualita: 1 }, 'La clausola costa più del previsto.')])
      ]),
      card('m-fedeli', 4, 'Aurex lancia un programma fedeltà: sconti crescenti per chi riacquista. I clienti che passano a un altro marchio perdono i vantaggi accumulati, cioè hanno un costo di cambio.', [
        ch('Crei un programma fedeltà analogo', 'Costo di cambio', [o(0.6, { quota: 2, cassa: -6, reputazione: 3 }, 'Rendi più “appiccicosi” i tuoi clienti, ma il costo si fa sentire.'), o(0.4, { quota: 0, cassa: -8, reputazione: 0 }, 'Hai pochi clienti da fidelizzare: il programma rende poco.')]),
        ch('Offri una prova di 60 giorni con reso gratuito', 'Riduzione del rischio percepito', [o(0.65, { quota: 4, cassa: -5, reputazione: 4 }, 'Elimini l’esitazione di chi vuole cambiare marchio.'), o(0.35, { quota: 2, cassa: -10, reputazione: 1 }, 'Molti resi: i costi di logistica salgono.')]),
        ch('Punti sulla qualità e su una nuova funzione esclusiva', 'Differenziazione', [o(0.5, { quota: 2, cassa: -7, qualita: 8, reputazione: 3 }, 'La nuova funzione convince gli esperti e passa il passaparola.'), o(0.5, { quota: 0, cassa: -9, qualita: 4 }, 'Il mercato non la considera decisiva.')])
      ]),
      card('m-capacita', 5, 'La domanda sta crescendo. Puoi investire 30 k€ per raddoppiare la capacità produttiva, ma se i volumi si fermano resterai con un impianto sottoutilizzato (Cournot: più produci, più il prezzo di mercato scende).', [
        ch('Raddoppi la capacità', 'Costi fissi contro variabili', [o(0.5, { cassa: -30, quota: 8, reputazione: 2 }, 'Soddisfi la domanda e prendi quota ai concorrenti in difficoltà.'), o(0.5, { cassa: -30, quota: 2, reputazione: 0 }, 'La domanda rallenta e l’impianto lavora a metà.')]),
        ch('Espandi in due fasi con una prima tranche da 12 k€', 'Opzione reale', [o(0.7, { cassa: -12, quota: 4, reputazione: 1 }, 'Cresci con prudenza e lasci aperta la seconda tranche.'), o(0.3, { cassa: -12, quota: 1, reputazione: -2 }, 'La domanda esplode e non riesci a evaderla tutta.')]),
        ch('Non investi, subappalti la produzione eccedente', 'Flessibilità', [o(0.6, { cassa: -4, quota: 3, qualita: -3 }, 'Eviti il rischio d’impianto, ma i margini si assottigliano.'), o(0.4, { cassa: -6, quota: 1, qualita: -6, reputazione: -3 }, 'Il subfornitore consegna in ritardo e con difetti.')])
      ]),
      card('m-alleanza', 5, 'Un grande rivenditore di elettronica propone di metterti a scaffale in 300 negozi, ma pretende uno sconto del 25% e l’esclusiva su un modello. Visibilità enorme, margine ridotto, dipendenza dal canale.', [
        ch('Accetti l’accordo pieno', 'Potere contrattuale', [o(0.55, { quota: 9, cassa: -4, reputazione: 4 }, 'Esplodi in visibilità e le vendite volano.'), o(0.45, { quota: 6, cassa: -9, reputazione: -2 }, 'Il rivenditore ti spreme sul prezzo e ne diventi dipendente.')]),
        ch('Rifiuti l’esclusiva e contratti sconto più basso su un solo modello', 'Alternativa migliore (BATNA)', [o(0.5, { quota: 5, cassa: 2, reputazione: 2 }, 'Strappi condizioni decenti e conservi la libertà.'), o(0.5, { quota: 1, cassa: 0, reputazione: 0 }, 'Il rivenditore va da un altro marchio.')]),
        ch('Rifiuti e rafforzi il canale diretto', 'Controllo del margine', [o(0.5, { quota: 2, cassa: 4, reputazione: 3 }, 'Crescita più lenta ma margini intatti.'), o(0.5, { quota: 0, cassa: -2, reputazione: 0 }, 'Senza visibilità fatichi a crescere.')])
      ]),
      card('m-nuovo', 6, 'Un nuovo concorrente low cost, Cesil, entra con un prodotto simile a 55 €. Può erodere la tua fascia inferiore. Puoi comprimere i costi, alzare la qualità o abbassare i prezzi.', [
        ch('Tagli i costi per sostenere un prezzo più basso', 'Costi fissi contro variabili', [o(0.55, { cassa: -3, quota: 3, qualita: -5 }, 'Reggi il prezzo, ma la qualità percepita cala.'), o(0.45, { cassa: -6, quota: 1, qualita: -8, reputazione: -3 }, 'I tagli si notano e le recensioni peggiorano.')]),
        ch('Alzi la qualità e comunichi la differenza', 'Differenziazione', [o(0.6, { cassa: -8, quota: 1, qualita: 8, reputazione: 5 }, 'Il marchio si distanzia dal low cost.'), o(0.4, { cassa: -10, quota: -2, qualita: 4 }, 'Molti clienti scelgono comunque il prezzo.')]),
        ch('Segnali di essere pronto a una guerra di prezzo, senza avviarla', 'Deterrenza', [o(0.5, { cassa: 0, quota: 2, reputazione: 1 }, 'Cesil non rischia e si accomoda in un segmento diverso.'), o(0.5, { cassa: -9, quota: -1, reputazione: -2 }, 'Cesil non si fa intimidire: la guerra parte lo stesso.')])
      ]),
      card('m-acquisizione', 7, 'Un piccolo concorrente fallisce e un fondo vende il suo marchio e il portafoglio clienti (circa 4 punti di quota) per 35 k€. Integrarlo è complesso.', [
        ch('Acquisisci tutto e integri subito', 'Costo opportunità', [o(0.5, { cassa: -35, quota: 5, reputazione: 2 }, 'Guadagni quota e clienti in un colpo solo.'), o(0.5, { cassa: -40, quota: 2, reputazione: -4, qualita: -3 }, 'L’integrazione è un incubo e metà dei clienti sparisce.')]),
        ch('Acquisisci solo il portafoglio clienti a prezzo ridotto', 'Opzione reale', [o(0.65, { cassa: -18, quota: 3, reputazione: 1 }, 'Prendi i clienti e lasci il resto.'), o(0.35, { cassa: -18, quota: 1, reputazione: -1 }, 'I clienti sono meno fedeli del previsto.')]),
        ch('Rinunci e investi gli stessi soldi in marketing', 'Costo opportunità', [o(0.55, { cassa: -20, quota: 3, reputazione: 3 }, 'Il marketing porta crescita organica.'), o(0.45, { cassa: -20, quota: 1, reputazione: 1 }, 'La campagna rende meno del previsto.')])
      ]),
      card('m-cartello', 8, 'Un dirigente di Aurex ti suggerisce informalmente di “non farvi la guerra sui prezzi” e di allinearvi a 99 €. Sarebbe un accordo di cartello, illegale, ma rende il mercato più stabile.', [
        ch('Accetti l’intesa informale', 'Rischio legale', [o(0.4, { cassa: 12, quota: 1, reputazione: 0 }, 'I margini salgono per un po’.'), o(0.6, { cassa: -30, reputazione: -20, quota: -3 }, 'L’autorità garante avvia un’indagine: multa e danno d’immagine.')]),
        ch('Rifiuti e segnali che competerai sul prodotto', 'Reputazione come attivo', [o(0.7, { cassa: -2, reputazione: 6, qualita: 3 }, 'Il tuo marchio guadagna credibilità.'), o(0.3, { cassa: -8, reputazione: 2, quota: -2 }, 'Aurex reagisce con sconti mirati contro di te.')]),
        ch('Rifiuti e segnali la proposta alle autorità', 'Rischio legale', [o(0.6, { cassa: -4, reputazione: 8, quota: 2 }, 'Il tuo gesto fa notizia: hai la fiducia dei clienti.'), o(0.4, { cassa: -9, reputazione: 2, quota: -2 }, 'Una causa legale ti distoglie risorse e Aurex è furiosa.')])
      ]),
      card('m-bolla', 8, 'Si diffonde la notizia che una tecnologia audio di nuova generazione renderà obsoleti i tuoi prodotti entro un anno. Hai ancora molto magazzino.', [
        ch('Liquidi il magazzino a sconto forte', 'Costo affondato', [o(0.65, { cassa: 8, quota: 2, reputazione: -2 }, 'Recuperi liquidità prima che il valore crolli.'), o(0.35, { cassa: 3, quota: 3, reputazione: -5 }, 'Il prezzo brucia il tuo posizionamento.')]),
        ch('Investi subito nella nuova tecnologia, accettando un ritardo', 'Opzione reale', [o(0.5, { cassa: -18, qualita: 9, reputazione: 3, quota: -1 }, 'La nuova linea ti rimette in gioco.'), o(0.5, { cassa: -22, qualita: 4, reputazione: -2, quota: -3 }, 'Troppo tardi: i concorrenti ti battono sul tempo.')]),
        ch('Aspetti e osservi cosa fanno gli altri', 'Valore dell’informazione', [o(0.5, { cassa: 3, quota: 0 }, 'La notizia era esagerata e non cambia nulla.'), o(0.5, { cassa: -8, quota: -4, reputazione: -3 }, 'La tecnologia arriva: sei in ritardo e con il magazzino pieno.')])
      ])
    ]
  });

  /* ---- 2) Gestire un portafoglio di investimenti ---- */
  SIM.register({
    id: 'investimenti', title: 'Gestire il capitale di una piccola azienda familiare', icon: '💼',
    intro: 'Gestisci il capitale di una piccola azienda familiare per cinque anni. Tre variabili contano oltre al valore: la ricchezza netta (patrimonio meno debiti), la liquidità disponibile per le emergenze e il debito. Il punteggio premia il patrimonio finale e la liquidità, penalizza il debito: un portafoglio troppo concentrato può rendere molto o crollare, un portafoglio troppo prudente non cresce.',
    vars: {
      patrimonio: { label: 'Patrimonio investito', start: 100, min: 0, max: 400, unit: 'k€', tight: true },
      liquidita: { label: 'Liquidità', start: 25, min: -40, max: 150, unit: 'k€' },
      debito: { label: 'Debito', start: 20, min: 0, max: 200, unit: 'k€' },
      reputazione: { label: 'Affidabilità verso la banca', start: 60, min: 0, max: 100 }
    },
    weights: { patrimonio: 1, liquidita: 1, debito: -0.9, reputazione: 0.3 },
    penalties: [],
    turns: 5, utilText: '1 × patrimonio + 1 × liquidità (negativa se scoperto) − 0,9 × debito + 0,3 × affidabilità verso la banca',
    cards: [
      card('v-fondo', 1, 'Hai 20 k€ liquidi in eccesso. Puoi tenerli sul conto (0,5%), metterli in titoli di stato (3%) o in un fondo azionario globale (media 7%, ma con anni anche a −25%).', [
        ch('Conto corrente', 'Liquidità', [o(1, { liquidita: 0, patrimonio: 0 }, 'Nessun rischio, nessun rendimento: l’inflazione erode il potere d’acquisto.')]),
        ch('Titoli di stato', 'Rischio e rendimento', [o(0.85, { patrimonio: 4, liquidita: -20 }, 'Rendimento contenuto ma sicuro.'), o(0.15, { patrimonio: 1, liquidita: -20 }, 'I tassi salgono e il valore dei titoli scende un po’.')]),
        ch('Fondo azionario globale', 'Premio per il rischio', [o(0.65, { patrimonio: 14, liquidita: -20 }, 'Un buon periodo di mercato: rendimento ben sopra il resto.'), o(0.35, { patrimonio: -8, liquidita: -20 }, 'Un anno di crisi: il valore scende, ma recupererà forse.')])
      ]),
      card('v-fondo-emerg', 1, 'Un tecnico ti dice che il capannone avrà bisogno di una riparazione costosa nei prossimi mesi (stima 15 k€, con grande incertezza).', [
        ch('Accantoni subito 15 k€ in liquidità', 'Liquidità', [o(0.6, { liquidita: -2, patrimonio: 0 }, 'La riparazione costa meno del previsto e hai ancora un cuscinetto.'), o(0.4, { liquidita: -4, reputazione: 2 }, 'Il costo è quello previsto: nessun problema.')]),
        ch('Finanzi la riparazione con un prestito a 5 anni', 'Leva finanziaria', [o(0.7, { debito: 15, liquidita: 12, patrimonio: 2 }, 'Tieni liquidità per altre occasioni, ma i tassi pesano.'), o(0.3, { debito: 15, liquidita: 10, patrimonio: -1, reputazione: -2 }, 'Il tasso è peggiore del previsto.')]),
        ch('Rimandi la riparazione e vedi cosa succede', 'Costo opportunità', [o(0.5, { liquidita: 3, patrimonio: 2 }, 'Il capannone regge ancora.'), o(0.5, { liquidita: -18, patrimonio: -6, reputazione: -4 }, 'Un guasto improvviso blocca la produzione e costa molto di più.')])
      ]),
      card('v-diversifica', 2, 'Il tuo portafoglio è per il 70% in azioni di un’unica azienda del tuo settore, di cui sei dipendente. Ti piace: la conosci bene.', [
        ch('Mantieni tutto: la conosci meglio di chiunque', 'Concentrazione', [o(0.55, { patrimonio: 16 }, 'L’azienda va bene e il tuo portafoglio cresce molto.'), o(0.45, { patrimonio: -30, reputazione: -4 }, 'L’azienda inciampa: perdi stipendio e capitale insieme.')]),
        ch('Vendi metà e diversifichi in un fondo globale', 'Diversificazione', [o(0.7, { patrimonio: 6 }, 'La crescita è meno spettacolare ma più stabile.'), o(0.3, { patrimonio: -2 }, 'Il fondo rende poco nel periodo e l’azienda cresce senza di te.')]),
        ch('Vendi tutto e metti il ricavato in titoli di stato', 'Riduzione del rischio', [o(1, { patrimonio: 3, liquidita: -2 }, 'Sicuro, ma sacrifichi la crescita.')])
      ]),
      card('v-immobile', 2, 'Un immobile da affittare costa 120 k€; ne hai solo 20 di caparra e finanzieresti il resto con un mutuo. L’affitto rende il 5% lordo, ma c’è il rischio di sfitto.', [
        ch('Compri con mutuo al 90%', 'Leva finanziaria', [o(0.5, { patrimonio: 10, debito: 100, liquidita: -10 }, 'L’affitto ripaga il mutuo e il valore cresce.'), o(0.5, { patrimonio: -5, debito: 100, liquidita: -18, reputazione: -4 }, 'Lo sfitto e le spese ti mettono in difficoltà.')]),
        ch('Compri un immobile più piccolo con un mutuo del 50%', 'Margine di sicurezza', [o(0.65, { patrimonio: 6, debito: 40, liquidita: -6 }, 'Rischio più contenuto e rendimento discreto.'), o(0.35, { patrimonio: 1, debito: 40, liquidita: -8 }, 'Rendimento deludente.')]),
        ch('Non compri: preferisci un fondo immobiliare quotato', 'Diversificazione', [o(0.6, { patrimonio: 5, liquidita: -8 }, 'Liquido e diversificato, con rendimento in linea.'), o(0.4, { patrimonio: -3, liquidita: -8 }, 'Il fondo soffre per l’aumento dei tassi.')])
      ]),
      card('v-van', 3, 'Puoi comprare una macchina nuova per 30 k€: farà risparmiare 8 k€ l’anno per 5 anni, ma tra un anno il tasso di sconto potrebbe salire dal 4% al 9%. Il VAN è positivo al 4%, meno chiaro al 9%.', [
        ch('Compri con liquidità', 'Valore attuale netto', [o(0.6, { patrimonio: 12, liquidita: -30 }, 'Il risparmio arriva ed è un buon investimento.'), o(0.4, { patrimonio: 4, liquidita: -30 }, 'Il risparmio è inferiore al previsto, ma copre il costo.')]),
        ch('Compri con leasing a rate', 'Leva finanziaria', [o(0.65, { patrimonio: 9, debito: 28, liquidita: -4 }, 'Tieni liquidità ma paghi gli interessi.'), o(0.35, { patrimonio: 3, debito: 28, liquidita: -4, reputazione: -2 }, 'Le rate pesano più del previsto.')]),
        ch('Rinvii di un anno e osservi i tassi', 'Opzione di attesa', [o(0.5, { patrimonio: 1 }, 'I tassi restano bassi: perdi un anno di risparmi.'), o(0.5, { patrimonio: 0, liquidita: 2 }, 'I tassi salgono: sei contento di non aver comprato.')])
      ]),
      card('v-rebal', 4, 'Dopo un anno di forte rialzo azionario, la quota di azioni nel tuo portafoglio è salita dal 50% al 68%. Ribilanciare significa vendere ciò che è salito.', [
        ch('Non fai nulla: lasci correre i vincitori', 'Momentum contro rischio', [o(0.5, { patrimonio: 14 }, 'Il rialzo continua.'), o(0.5, { patrimonio: -18 }, 'Il mercato inverte e la perdita è più grande.')]),
        ch('Ribilanci al 50/50', 'Ribilanciamento', [o(0.6, { patrimonio: 5, liquidita: 2 }, 'Cristallizzi parte dei guadagni e riduci il rischio.'), o(0.4, { patrimonio: 0, liquidita: 2 }, 'Il rialzo continua senza di te, ma dormi tranquillo.')]),
        ch('Riduci le azioni al 30% per prudenza', 'Riduzione del rischio', [o(0.6, { patrimonio: 2, liquidita: 6 }, 'Resta una base sicura ma limiti la crescita.'), o(0.4, { patrimonio: -2, liquidita: 6 }, 'Il mercato sale ancora: opportunità persa.')])
      ]),
      card('v-socio', 4, 'Un amico ti propone di entrare come socio in una startup di consegne. Chiede 25 k€ per il 10% dell’azienda. Un sondaggio su startup simili indica che la maggior parte fallisce, ma qualcuna rende molto.', [
        ch('Investi i 25 k€ per intero', 'Asimmetria dei payoff', [o(0.2, { patrimonio: 90, liquidita: -25 }, 'La startup esplode: un guadagno enorme.'), o(0.8, { patrimonio: -20, liquidita: -25 }, 'La startup chiude e il capitale è perso.')]),
        ch('Investi solo 8 k€', 'Dimensionamento della posizione', [o(0.2, { patrimonio: 28, liquidita: -8 }, 'Piccolo investimento, buon ritorno.'), o(0.8, { patrimonio: -6, liquidita: -8 }, 'Perdi una cifra che puoi permetterti.')]),
        ch('Rifiuti, ma offri un prestito personale all’amico', 'Rischio di controparte', [o(0.6, { patrimonio: 4, liquidita: -10 }, 'Il prestito rende un interesse decente.'), o(0.4, { patrimonio: -8, liquidita: -10, reputazione: -3 }, 'Non te lo restituisce e l’amicizia si rovina.')])
      ]),
      card('v-debito', 5, 'Hai un debito da 20 k€ al 6%. Un fondo prudente rende in media il 4%. Puoi estinguere il debito, tenere tutto e investire, o rinegoziare.', [
        ch('Estingui il debito con la liquidità', 'Rendimento certo', [o(1, { debito: -20, liquidita: -20, patrimonio: 1, reputazione: 5 }, 'Risparmi il 6% sicuro e migliori il tuo profilo bancario.')]),
        ch('Mantieni il debito e investi la liquidità', 'Leva finanziaria', [o(0.5, { patrimonio: 6, liquidita: -4 }, 'Il rendimento supera il costo del debito.'), o(0.5, { patrimonio: -3, liquidita: -4, reputazione: -2 }, 'Il rendimento è inferiore al tasso del debito.')]),
        ch('Rinegozi il tasso con un’altra banca', 'Costi di transazione', [o(0.6, { debito: -2, liquidita: -2, reputazione: 2 }, 'Ottieni un tasso migliore.'), o(0.4, { liquidita: -4, reputazione: -2 }, 'La banca rifiuta e le spese di istruttoria sono perse.')])
      ]),
      card('v-crisi', 6, 'Uno shock di mercato fa scendere le azioni del 22% in due mesi. I giornali parlano di recessione. Il tuo portafoglio azionario vale ora molto meno.', [
        ch('Vendi tutto per fermare le perdite', 'Avversione alla perdita', [o(0.5, { patrimonio: -14, liquidita: 14 }, 'Vendi in buon momento: il mercato continua a scendere.'), o(0.5, { patrimonio: -18, liquidita: 18 }, 'Il mercato risale subito e perdi il rimbalzo.')]),
        ch('Mantieni e non fai nulla', 'Orizzonte temporale', [o(0.55, { patrimonio: 12 }, 'Il mercato si riprende e recuperi.'), o(0.45, { patrimonio: -10 }, 'La crisi si approfondisce e la perdita cresce.')]),
        ch('Compri di più con la liquidità di emergenza', 'Contrarianismo', [o(0.55, { patrimonio: 22, liquidita: -20 }, 'Compri a sconto e il rimbalzo ti premia.'), o(0.45, { patrimonio: -16, liquidita: -20, reputazione: -2 }, 'Il mercato scende ancora e resti senza cuscinetto.')])
      ]),
      card('v-fisco', 6, 'Un consulente propone una struttura offshore “aggressiva” che ridurrebbe le tasse sul reddito da capitale. È al limite del lecito. Il risparmio stimato è 9 k€ l’anno.', [
        ch('Accetti la struttura', 'Rischio legale', [o(0.4, { patrimonio: 12, reputazione: -2 }, 'Per ora nessun controllo.'), o(0.6, { patrimonio: -25, liquidita: -12, reputazione: -12 }, 'Un controllo fiscale porta sanzioni e interessi.')]),
        ch('Rifiuti e usi solo strumenti agevolati previsti dalla legge', 'Ottimizzazione lecita', [o(0.8, { patrimonio: 4, reputazione: 2 }, 'Risparmio più modesto, tutto in regola.'), o(0.2, { patrimonio: 1, liquidita: -3 }, 'Il consulente costa più del risparmio ottenuto.')]),
        ch('Chiedi un parere scritto a un secondo professionista', 'Valore dell’informazione', [o(0.7, { patrimonio: 3, liquidita: -3, reputazione: 3 }, 'Eviti un errore o scopri un’alternativa solida.'), o(0.3, { patrimonio: 0, liquidita: -3 }, 'Spendi la parcella e il risultato non cambia.')])
      ]),
      card('v-inflazione', 7, 'L’inflazione sale al 6% e la banca centrale alza i tassi. Il tuo portafoglio ha molti titoli di stato a lungo termine a tasso fisso e azioni di aziende molto indebitate.', [
        ch('Passi a titoli indicizzati all’inflazione e a breve scadenza', 'Rischio di tasso', [o(0.7, { patrimonio: 6, liquidita: -4 }, 'Ti proteggi dall’erosione del potere d’acquisto.'), o(0.3, { patrimonio: -4, liquidita: -4 }, 'L’inflazione cala presto e i tassi ti penalizzano.')]),
        ch('Mantieni la composizione: il lungo termine premierà', 'Orizzonte temporale', [o(0.4, { patrimonio: 5 }, 'L’inflazione rientra e recuperi.'), o(0.6, { patrimonio: -14 }, 'I prezzi dei titoli scendono ancora e l’erosione continua.')]),
        ch('Aumenti la quota in beni reali (immobili, materie prime)', 'Copertura', [o(0.55, { patrimonio: 9, liquidita: -6 }, 'I beni reali tengono il passo dei prezzi.'), o(0.45, { patrimonio: -6, liquidita: -6 }, 'Le materie prime crollano e subisci la volatilità.')])
      ]),
      card('v-banca', 8, 'La banca ti avvisa che, a causa dell’aumento dei tassi, il tuo debito variabile di 60 k€ è più caro. Offre di convertirlo a tasso fisso al 7%, ma se i tassi scendessero rimarresti bloccato.', [
        ch('Converti a tasso fisso', 'Copertura', [o(0.55, { liquidita: -2, patrimonio: 2, reputazione: 3 }, 'I tassi continuano a salire: eviti un aumento pesante.'), o(0.45, { liquidita: -6, patrimonio: -2 }, 'I tassi scendono e paghi più del necessario.')]),
        ch('Restituisci subito 25 k€ del debito e tieni il resto variabile', 'Riduzione della leva', [o(0.6, { debito: -25, liquidita: -25, patrimonio: 2, reputazione: 4 }, 'Calo l’esposizione e dormi meglio.'), o(0.4, { debito: -25, liquidita: -30, patrimonio: -2 }, 'Resti con poca liquidità quando serve.')]),
        ch('Mantieni il variabile e scommetti sul calo dei tassi', 'Scommessa direzionale', [o(0.4, { liquidita: 6, patrimonio: 4 }, 'I tassi scendono e risparmi.'), o(0.6, { liquidita: -16, patrimonio: -4, reputazione: -4 }, 'I tassi salgono ancora e le rate diventano insostenibili.')])
      ])
    ]
  });

  /* ---- 3) Campagna militare astratta fra due regni immaginari ---- */
  SIM.register({
    id: 'campagna', title: 'Campagna fra i regni di Veldrun e Ostara', icon: '🏰',
    intro: 'Sei il comandante dell’armata di Veldrun in una campagna astratta contro il regno di Ostara. Non è un manuale: è un gioco di concetti come forze, rifornimenti, morale e iniziativa. Ogni decisione sposta queste variabili e il punteggio premia l’iniziativa e le forze rimaste, la solidità dei rifornimenti e il morale. Ogni turno chiede di bilanciare concentrazione, logistica e rischio.',
    vars: {
      forze: { label: 'Forze efficaci', start: 60, min: 0, max: 100 },
      rifornimenti: { label: 'Rifornimenti', start: 60, min: -20, max: 100 },
      morale: { label: 'Morale', start: 60, min: 0, max: 100 },
      iniziativa: { label: 'Iniziativa', start: 50, min: -50, max: 100 }
    },
    weights: { forze: 0.8, rifornimenti: 0.5, morale: 0.5, iniziativa: 0.9 },
    penalties: [],
    turns: 5, utilText: '0,8 × forze + 0,5 × rifornimenti + 0,5 × morale + 0,9 × iniziativa',
    cards: [
      card('c-passo', 1, 'L’armata di Veldrun è al confine. Due strade portano in territorio nemico: una larga e diretta, ma esposta; una stretta e più lunga, ma coperta dalle colline.', [
        ch('Strada diretta con tutta l’armata', 'Concentrazione delle forze', [o(0.55, { iniziativa: 8, rifornimenti: -4, morale: 3 }, 'L’avanzata è rapida e Ostara reagisce in ritardo.'), o(0.45, { iniziativa: 2, forze: -8, rifornimenti: -5 }, 'Una colonna nemica attende al passo: perdite iniziali.')]),
        ch('Strada coperta con l’armata allungata', 'Linee interne', [o(1, { iniziativa: 0, rifornimenti: -6, morale: 0, forze: 2 }, 'Più lenta ma più sicura: perdi tempo e scorte.')]),
        ch('Dividi l’armata: due colonne sulle due strade', 'Divisione delle forze', [o(0.4, { iniziativa: 10, forze: 2, rifornimenti: -5 }, 'Ostara non sa dove colpire.'), o(0.6, { iniziativa: -4, forze: -10, morale: -4, rifornimenti: -4 }, 'Una colonna isolata viene battuta.')])
      ]),
      card('c-magazzino', 1, 'Si può stabilire un magazzino avanzato a un giorno di marcia dal fronte: accorcia la linea di rifornimenti ma richiede una scorta di uomini.', [
        ch('Magazzino forte, con una guarnigione solida', 'Logistica', [o(0.75, { rifornimenti: 12, forze: -4, morale: 3 }, 'Rifornimenti più sicuri ma con meno uomini al fronte.'), o(0.25, { rifornimenti: 4, forze: -6 }, 'Un reparto nemico disturba il trasporto.')]),
        ch('Magazzino leggero con poche guardie', 'Efficienza', [o(0.6, { rifornimenti: 9, forze: -1 }, 'Funziona e costa poco.'), o(0.4, { rifornimenti: -8, forze: -4, morale: -4 }, 'Un raid lo saccheggia.')]),
        ch('Nessun magazzino: foraggiamento nel territorio', 'Attrito', [o(0.4, { rifornimenti: 5, morale: -2, iniziativa: 4 }, 'Muovi veloce e leggero.'), o(0.6, { rifornimenti: -10, morale: -6, forze: -3 }, 'La popolazione resiste e il cibo scarseggia.')])
      ]),
      card('c-scout', 2, 'Gli esploratori riferiscono che un’armata di Ostara si sta radunando, ma non sai dove né quanto sia grande. Puoi spendere tempo per saperne di più.', [
        ch('Mandi pattuglie in profondità', 'Informazione prima di decidere', [o(0.7, { iniziativa: 6, forze: -2, morale: 2 }, 'Capisci dove colpiranno: sei un passo avanti.'), o(0.3, { iniziativa: 0, forze: -5, morale: -2 }, 'Le pattuglie vengono intercettate.')]),
        ch('Ti muovi comunque senza attendere', 'Ciclo OODA', [o(0.5, { iniziativa: 7, rifornimenti: -2 }, 'La rapidità disorienta Ostara.'), o(0.5, { iniziativa: -6, forze: -6, morale: -3 }, 'Cadi in un’imboscata.')]),
        ch('Rimani su posizioni difensive e aspetti', 'Difesa', [o(0.6, { iniziativa: -5, forze: 3, rifornimenti: 2, morale: 1 }, 'Nessun incidente ma regali iniziativa.'), o(0.4, { iniziativa: -8, rifornimenti: -2, morale: -3 }, 'Ostara sceglie il tempo e il luogo.')])
      ]),
      card('c-moralita', 2, 'Le truppe sono stanche e mormorano: da giorni mangiano poco e dormono male. Un riposo di due giorni le aiuterebbe, ma darebbe tempo al nemico.', [
        ch('Due giorni di riposo completo', 'Attrito', [o(0.7, { morale: 10, forze: 4, iniziativa: -5, rifornimenti: -3 }, 'L’armata si rimette in sesto, ma Ostara ne approfitta.'), o(0.3, { morale: 8, forze: 3, iniziativa: -12, rifornimenti: -3 }, 'Ostara occupa un punto chiave nel frattempo.')]),
        ch('Riposo parziale a turni', 'Compromesso', [o(0.7, { morale: 5, forze: 1, iniziativa: -2 }, 'Un buon equilibrio.'), o(0.3, { morale: 2, forze: -2, iniziativa: -3 }, 'Metà delle truppe resta stanca.')]),
        ch('Marci subito: la stanchezza passerà con la vittoria', 'Iniziativa', [o(0.45, { iniziativa: 8, morale: 3, forze: -2 }, 'Ostara è sorpresa e cede.'), o(0.55, { iniziativa: 2, morale: -10, forze: -7 }, 'Le truppe esauste si sfaldano al primo scontro.')])
      ]),
      card('c-ala', 3, 'La cavalleria di Veldrun, leggera e veloce, potrebbe aggirare l’ala sinistra di Ostara. Ma se manda tutta la cavalleria, il centro resta debole.', [
        ch('Aggiri con tutta la cavalleria', 'Manovra', [o(0.5, { iniziativa: 12, forze: 2, morale: 6 }, 'L’aggiramento riesce e il fianco nemico crolla.'), o(0.5, { iniziativa: -4, forze: -12, morale: -6 }, 'La cavalleria è bloccata e il centro viene sfondato.')]),
        ch('Aggiri con metà cavalleria e tieni il resto in riserva', 'Economia delle forze', [o(0.6, { iniziativa: 6, forze: -2, morale: 3 }, 'Un buon equilibrio: danno al nemico e centro saldo.'), o(0.4, { iniziativa: 1, forze: -4, morale: 0 }, 'L’aggiramento è debole.')]),
        ch('Rinunci all’aggiramento e tieni la linea compatta', 'Concentrazione delle forze', [o(1, { iniziativa: -2, forze: 3, morale: 1 }, 'Prudente: nessun rischio ma nessuna sorpresa.')])
      ]),
      card('c-allargare', 3, 'Una città di frontiera, Sorren, è senza difesa. Occuparla darebbe un punto d’appoggio e prestigio, ma richiederebbe di staccare un contingente.', [
        ch('Occupi Sorren con un forte contingente', 'Linee interne', [o(0.7, { rifornimenti: 9, morale: 5, forze: -6, iniziativa: 2 }, 'Sorren diventa una base di rifornimento.'), o(0.3, { rifornimenti: 3, morale: 1, forze: -9, iniziativa: -3 }, 'Il contingente è assediato subito.')]),
        ch('Occupi Sorren con poche truppe', 'Concentrazione delle forze', [o(0.5, { rifornimenti: 6, morale: 4, forze: -2, iniziativa: 2 }, 'Funziona a poco prezzo.'), o(0.5, { rifornimenti: -2, morale: -4, forze: -6, iniziativa: -2 }, 'Ostara riconquista Sorren in pochi giorni.')]),
        ch('Ignori Sorren e punti sull’armata nemica', 'Obiettivo principale', [o(1, { iniziativa: 4, forze: 0, rifornimenti: -3 }, 'Resti concentrato sull’obiettivo, senza distrazioni.')])
      ]),
      card('c-inseguimento', 4, 'Dopo uno scontro favorevole, l’armata di Ostara si ritira disordinata. Inseguirla darebbe la vittoria decisiva, ma le tue truppe sono sparse e allungate.', [
        ch('Inseguimento a fondo', 'Punto culminante', [o(0.45, { iniziativa: 14, forze: -3, rifornimenti: -8, morale: 8 }, 'Il nemico si sfalda e la campagna è quasi vinta.'), o(0.55, { iniziativa: -4, forze: -12, rifornimenti: -12, morale: -6 }, 'Hai superato il tuo punto culminante: le linee sono troppo lunghe e la contromossa ti colpisce.')]),
        ch('Inseguimento limitato, con riorganizzazione', 'Economia delle forze', [o(0.65, { iniziativa: 6, forze: -1, rifornimenti: -3, morale: 4 }, 'Tieni la pressione senza sbilanciarti.'), o(0.35, { iniziativa: 0, rifornimenti: -3, morale: 0 }, 'Il nemico si rimette in sesto.')]),
        ch('Fermi e consolidi la vittoria', 'Consolidamento', [o(1, { iniziativa: -3, forze: 4, rifornimenti: 5, morale: 4 }, 'Sicuro, ma regali tempo al nemico.')])
      ]),
      card('c-riserve', 4, 'Hai una riserva di 8 mila uomini non ancora impegnati. Impiegarla ora aumenterebbe subito la forza, ma ti toglierebbe la possibilità di rispondere a un imprevisto.', [
        ch('Impegni la riserva subito', 'Concentrazione delle forze', [o(0.55, { forze: 4, iniziativa: 8, morale: 3 }, 'Superiorità locale e ottima spinta.'), o(0.45, { forze: -4, iniziativa: -2, morale: -3 }, 'Il nemico contrattacca altrove e non hai riserve.')]),
        ch('Tieni la riserva per il momento decisivo', 'Riserva strategica', [o(0.6, { forze: 1, iniziativa: 3, morale: 2 }, 'La riserva ti permette di rispondere a un colpo.'), o(0.4, { forze: 0, iniziativa: -3, morale: -2 }, 'La riserva resta inutilizzata mentre l’occasione passa.')]),
        ch('Impegni metà e riserva metà', 'Economia delle forze', [o(1, { forze: 2, iniziativa: 4, morale: 1, rifornimenti: -2 }, 'Una via di mezzo senza grande vantaggio.')])
      ]),
      card('c-supply', 5, 'Il convoglio principale dei rifornimenti è in ritardo di tre giorni a causa del maltempo. Le scorte reggono ancora cinque giorni.', [
        ch('Attendi il convoglio fermo', 'Logistica', [o(0.8, { rifornimenti: 12, iniziativa: -8, morale: 2 }, 'Le scorte tornano, ma il nemico guadagna iniziativa.'), o(0.2, { rifornimenti: 6, iniziativa: -10, morale: -2 }, 'Il convoglio ritarda ancora.')]),
        ch('Procedi con razioni ridotte', 'Attrito', [o(0.5, { iniziativa: 4, rifornimenti: -6, morale: -4 }, 'Il ritmo è mantenuto: il convoglio ti raggiunge in marcia.'), o(0.5, { iniziativa: -2, rifornimenti: -12, morale: -9, forze: -4 }, 'Le truppe affamate perdono combattività.')]),
        ch('Requisisci viveri localmente e poi avanzi', 'Linee interne', [o(0.55, { rifornimenti: 6, iniziativa: 3, morale: -4 }, 'Soluzione efficace ma impopolare.'), o(0.45, { rifornimenti: 2, iniziativa: 0, morale: -8, forze: -3 }, 'La popolazione si ribella.')])
      ]),
      card('c-tregua', 6, 'Ostara propone una tregua di tre giorni. Può essere un tentativo sincero o un modo per guadagnare tempo e rinforzi.', [
        ch('Accetti e usi i giorni per riorganizzarti', 'Ciclo OODA', [o(0.55, { forze: 4, rifornimenti: 8, morale: 6, iniziativa: -4 }, 'Entrambi si rafforzano: tu di più.'), o(0.45, { forze: 0, rifornimenti: 4, morale: 2, iniziativa: -12 }, 'Ostara riceve rinforzi freschi e ti supera.')]),
        ch('Rifiuti e attacchi subito', 'Iniziativa', [o(0.5, { iniziativa: 10, forze: -3, morale: 3 }, 'Ostara è colta prima dei rinforzi.'), o(0.5, { iniziativa: 0, forze: -9, morale: -6 }, 'Il nemico è più preparato di quanto pensassi.')]),
        ch('Accetti ma sposti segretamente le truppe in posizione', 'Inganno', [o(0.55, { iniziativa: 8, forze: 2, rifornimenti: 3 }, 'Alla fine della tregua sei in posizione migliore.'), o(0.45, { iniziativa: -4, morale: -6, forze: -4 }, 'Ostara scopre il movimento: la tua parola perde credito.')])
      ]),
      card('c-ritirata', 7, 'L’armata nemica, più numerosa, avanza verso di te. Hai la scelta fra tenere la posizione, ritirarti attirandola verso le tue basi o contrattaccare in anticipo.', [
        ch('Tieni la posizione e combatti', 'Concentrazione delle forze', [o(0.45, { forze: -4, morale: 6, iniziativa: 4 }, 'Tieni il terreno e infliggi perdite.'), o(0.55, { forze: -14, morale: -8, iniziativa: -8 }, 'Il numero prevale e sei sopraffatto.')]),
        ch('Ritirata strategica verso le basi', 'Linee interne', [o(0.7, { forze: 3, rifornimenti: 8, iniziativa: -6, morale: -2 }, 'Il nemico si allunga mentre tu ti rafforzi.'), o(0.3, { forze: -3, rifornimenti: 2, iniziativa: -10, morale: -6 }, 'La ritirata si trasforma in una fuga disordinata.')]),
        ch('Contrattacco anticipato sul fianco', 'Manovra', [o(0.4, { forze: -2, iniziativa: 14, morale: 8 }, 'Il colpo sorprende Ostara e capovolge la situazione.'), o(0.6, { forze: -12, iniziativa: -6, morale: -8 }, 'Il contrattacco fallisce e perdi molto.')])
      ]),
      card('c-decisiva', 8, 'È il momento della battaglia decisiva. Ostara tiene una posizione forte su un’altura, con rinforzi in arrivo. Il tuo morale è alto, ma le scorte sono limitate.', [
        ch('Attacco frontale immediato', 'Iniziativa', [o(0.4, { forze: -8, iniziativa: 14, morale: 10 }, 'L’altura cade e il nemico si sfalda.'), o(0.6, { forze: -18, iniziativa: -8, morale: -12 }, 'L’assalto è respinto con gravi perdite.')]),
        ch('Assedio alla posizione e attesa dei suoi rinforzi', 'Attrito', [o(0.5, { forze: -3, rifornimenti: -8, iniziativa: -2, morale: -3 }, 'Il tempo consuma entrambi ma tu hai meno scorte.'), o(0.5, { forze: 0, rifornimenti: -10, iniziativa: -6, morale: -5 }, 'I rinforzi nemici arrivano prima dei tuoi.')]),
        ch('Aggiri l’altura e tagli i suoi rifornimenti', 'Manovra', [o(0.55, { forze: -4, rifornimenti: -4, iniziativa: 10, morale: 6 }, 'Costringi Ostara ad abbandonare la posizione.'), o(0.45, { forze: -10, rifornimenti: -10, iniziativa: -4, morale: -4 }, 'La manovra è troppo lunga e le tue linee si assottigliano.')])
      ]),
      card('c-ritiro-regno', 8, 'Il re di Veldrun ordina di sospendere la campagna entro una settimana per ragioni politiche. Puoi obbedire, cercare un successo rapido o negoziare una proroga.', [
        ch('Obbedisci e ripieghi in buon ordine', 'Disciplina', [o(1, { forze: 4, rifornimenti: 6, morale: -4, iniziativa: -10 }, 'Preservi l’armata ma perdi iniziativa.')]),
        ch('Tenti un colpo rapido prima della scadenza', 'Punto culminante', [o(0.4, { forze: -4, iniziativa: 12, morale: 8 }, 'Il successo rapido convince il re.'), o(0.6, { forze: -12, iniziativa: -4, morale: -8, rifornimenti: -6 }, 'Il colpo fallisce proprio quando non potevi permettertelo.')]),
        ch('Negozi una proroga per consolidare le posizioni', 'Negoziazione', [o(0.55, { forze: 2, rifornimenti: 3, iniziativa: 4, morale: 2 }, 'Ottieni qualche giorno in più.'), o(0.45, { forze: 0, rifornimenti: -2, iniziativa: -6, morale: -3 }, 'Il re rifiuta e ha perso fiducia in te.')])
      ])
    ]
  });

  /* ---- 4) Difesa e logoramento di una città immaginaria ---- */
  SIM.register({
    id: 'assedio', title: 'L’assedio di Valdoria', icon: '🛡️',
    intro: 'Sei il governatore di Valdoria, città murata immaginaria, assediata da un esercito che non ha fretta e conta sul logoramento. Devi far durare le scorte, tenere alto il morale della popolazione, mantenere gli alleati e preservare i difensori. Il punteggio premia scorte, morale, difensori e alleanze alla fine dell’assedio.',
    vars: {
      scorte: { label: 'Scorte di cibo', start: 60, min: -20, max: 100 },
      morale: { label: 'Morale', start: 60, min: 0, max: 100 },
      difensori: { label: 'Difensori efficaci', start: 60, min: 0, max: 100 },
      alleati: { label: 'Fiducia degli alleati', start: 40, min: -30, max: 100 }
    },
    weights: { scorte: 0.7, morale: 0.7, difensori: 0.9, alleati: 0.6 },
    penalties: [],
    turns: 5, utilText: '0,7 × scorte (negative se esaurite) + 0,7 × morale + 0,9 × difensori + 0,6 × fiducia degli alleati',
    cards: [
      card('a-razioni', 1, 'L’assedio è appena cominciato. Le scorte potrebbero durare quattro mesi a razione piena o più a lungo a razione ridotta. Nessuno sa quanto durerà.', [
        ch('Razione piena per tenere alto il morale', 'Gestione delle scorte', [o(0.6, { morale: 6, scorte: -10, difensori: 2 }, 'Il morale tiene e i difensori restano forti.'), o(0.4, { morale: 5, scorte: -14, difensori: 2 }, 'L’assedio si prolunga e le scorte calano più in fretta.')]),
        ch('Razione ridotta del 20% da subito', 'Gestione delle scorte', [o(0.7, { morale: -3, scorte: -5, difensori: 0 }, 'Con un po’ di disagio guadagni settimane preziose.'), o(0.3, { morale: -6, scorte: -5, difensori: -3 }, 'Il malcontento porta qualche furto di cibo.')]),
        ch('Razioni differenziate: più ai difensori, meno ai civili', 'Priorità', [o(0.6, { morale: -6, scorte: -7, difensori: 5 }, 'I difensori restano forti, ma i civili mormorano.'), o(0.4, { morale: -10, scorte: -7, difensori: 4, alleati: -3 }, 'Il malcontento civile cresce e gli alleati lo notano.')])
      ]),
      card('a-pozzo', 1, 'Una sorgente d’acqua sotto le mura è stata contaminata dai nemici. Puoi scavare un nuovo pozzo (lento ma sicuro), razionare l’acqua o rischiare una sortita per riprendere la sorgente.', [
        ch('Scavi un nuovo pozzo', 'Investimento sul lungo periodo', [o(0.75, { scorte: -4, morale: 4, difensori: -2 }, 'Il pozzo risolve il problema in pochi giorni.'), o(0.25, { scorte: -6, morale: -4, difensori: -3 }, 'Il pozzo rende poco e il lavoro è estenuante.')]),
        ch('Razioni l’acqua', 'Gestione delle scorte', [o(0.6, { scorte: -3, morale: -5, difensori: -2 }, 'Reggi ma con disagio crescente.'), o(0.4, { scorte: -4, morale: -8, difensori: -4 }, 'Alcuni si ammalano per l’acqua insufficiente.')]),
        ch('Sortita per riprendere la sorgente', 'Iniziativa', [o(0.45, { scorte: 2, morale: 7, difensori: -6, alleati: 2 }, 'La sortita riesce e risolleva l’orgoglio della città.'), o(0.55, { scorte: -3, morale: -6, difensori: -14 }, 'La sortita fallisce con gravi perdite.')])
      ]),
      card('a-messaggero', 2, 'Puoi inviare un messaggero agli alleati del regno vicino per chiedere aiuto. La via è rischiosa: se viene catturato, il nemico saprà che sei in difficoltà.', [
        ch('Invii un messaggero con un messaggio ottimistico', 'Credibilità', [o(0.55, { alleati: 8, morale: 3 }, 'Gli alleati restano fiduciosi.'), o(0.45, { alleati: -4, morale: -2 }, 'Il messaggero è catturato e il nemico ti conosce meglio.')]),
        ch('Invii due messaggeri per vie diverse, con messaggio sincero', 'Ridondanza', [o(0.7, { alleati: 8, morale: 2, difensori: -2 }, 'Almeno uno arriva e gli alleati mobilitano un aiuto.'), o(0.3, { alleati: -2, difensori: -3 }, 'Nessuno arriva e perdi uomini preziosi.')]),
        ch('Non invii nessuno: non vuoi mostrare debolezza', 'Segnale', [o(0.5, { alleati: -6, morale: 1 }, 'Gli alleati non sanno nulla.'), o(0.5, { alleati: -10, morale: -3 }, 'Gli alleati ti credono già caduto.')])
      ]),
      card('a-spia', 2, 'Una spia nemica è stata smascherata in città. Potresti giustiziarla pubblicamente, usarla per diffondere false informazioni o espellerla.', [
        ch('Esecuzione pubblica', 'Deterrenza', [o(0.6, { morale: 4, alleati: -2 }, 'La città si sente al sicuro, ma gli alleati disapprovano.'), o(0.4, { morale: -3, alleati: -4 }, 'L’esecuzione indurisce l’avversario e spaventa i cittadini.')]),
        ch('La usi per disinformare il nemico', 'Inganno', [o(0.5, { morale: 2, difensori: 4, scorte: 2 }, 'Il nemico crede a informazioni false e spreca sforzi.'), o(0.5, { morale: -2, difensori: -3, scorte: -2 }, 'La spia riesce a passare un messaggio vero.')]),
        ch('La espelli senza clamore', 'Costo opportunità', [o(0.8, { morale: 1, alleati: 2 }, 'Gesto civile e senza conseguenze.'), o(0.2, { morale: -2, difensori: -2 }, 'Il nemico acquista informazioni preziose.')])
      ]),
      card('a-sortita', 3, 'I difensori vedono un accampamento nemico lasciato poco sorvegliato di notte. Una sortita potrebbe bruciare le macchine d’assedio, ma i difensori sono già pochi.', [
        ch('Sortita notturna con 200 uomini scelti', 'Iniziativa', [o(0.5, { difensori: -4, morale: 8, alleati: 3 }, 'Distruggi due macchine d’assedio e rialzi il morale.'), o(0.5, { difensori: -14, morale: -6, alleati: -2 }, 'I nemici erano in allerta e subisci gravi perdite.')]),
        ch('Sortita limitata con 60 uomini e ritirata rapida', 'Economia delle forze', [o(0.65, { difensori: -2, morale: 4 }, 'Un piccolo danno a basso costo.'), o(0.35, { difensori: -6, morale: -2 }, 'Il gruppo viene scoperto e deve ritirarsi.')]),
        ch('Nessuna sortita: preservi i difensori', 'Logoramento', [o(0.7, { difensori: 2, morale: -2 }, 'Tieni la linea ma il morale cala.'), o(0.3, { difensori: 0, morale: -4, scorte: -2 }, 'Il nemico completa le macchine d’assedio senza disturbo.')])
      ]),
      card('a-profughi', 3, 'Centinaia di contadini dei villaggi vicini bussano alle porte, chiedendo rifugio. Sono bocche da sfamare, ma anche braccia utili e un segno di fiducia nella città.', [
        ch('Li accogli tutti', 'Responsabilità', [o(0.6, { scorte: -12, morale: 5, difensori: 3, alleati: 3 }, 'Le braccia aiutano e la città è vista come un rifugio.'), o(0.4, { scorte: -16, morale: -4, difensori: 1, alleati: 0 }, 'Il sovraffollamento causa malattie e tensioni.')]),
        ch('Accogli solo chi può lavorare o combattere', 'Selezione', [o(0.7, { scorte: -6, morale: -2, difensori: 5, alleati: 0 }, 'Guadagni forza e controlli le scorte.'), o(0.3, { scorte: -6, morale: -6, difensori: 4, alleati: -4 }, 'La selezione crea rancori e cattiva fama.')]),
        ch('Chiudi le porte', 'Gestione delle scorte', [o(0.7, { scorte: 0, morale: -8, alleati: -6 }, 'Le scorte restano ma la tua città perde anima.'), o(0.3, { scorte: 0, morale: -12, alleati: -10, difensori: -3 }, 'I profughi vengono massacrati sotto le mura: lo shock è grande.')])
      ]),
      card('a-negozio', 4, 'Il comandante assediante propone di negoziare: ti lascerebbe liberi in cambio di un tributo annuo, ma controllerebbe i tuoi commerci. Potrebbe essere una proposta sincera o una trappola.', [
        ch('Accetti il tributo e chiudi l’assedio', 'Compromesso', [o(0.55, { scorte: 6, morale: 4, difensori: 3, alleati: -6 }, 'Salvi la città, ma gli alleati lo considerano un cedimento.'), o(0.45, { scorte: 2, morale: -4, difensori: -2, alleati: -10 }, 'Il nemico viola i patti e ti lascia comunque indebolito.')]),
        ch('Rifiuti e proponi un tributo minore', 'Alternativa migliore (BATNA)', [o(0.5, { scorte: 4, morale: 3, alleati: 0 }, 'Si apre una trattativa seria.'), o(0.5, { scorte: -4, morale: -3, difensori: -2 }, 'Il nemico si irrita e stringe l’assedio.')]),
        ch('Rifiuti nettamente e rilanci con il morale', 'Credibilità', [o(0.55, { morale: 6, difensori: 2, alleati: 4, scorte: -4 }, 'Il tuo rifiuto è visto come segno di forza.'), o(0.45, { morale: -2, difensori: -3, scorte: -6, alleati: -2 }, 'Il rifiuto costa caro: l’assedio si fa più duro.')])
      ]),
      card('a-malattia', 4, 'Una febbre si diffonde tra i difensori. Puoi isolare i malati in una zona delle mura (riducendo la difesa), mandarli in città o ignorare il problema.', [
        ch('Quarantena severa', 'Contenimento', [o(0.7, { difensori: -6, morale: -2, scorte: -2 }, 'Contieni la febbre, ma perdi forza difensiva.'), o(0.3, { difensori: -10, morale: -5, scorte: -3 }, 'La quarantena è tardiva e i malati sono molti.')]),
        ch('Cure e riposo in città per tutti i malati', 'Cura', [o(0.55, { difensori: -3, morale: 3, scorte: -4 }, 'I malati guariscono e la fiducia cresce.'), o(0.45, { difensori: -8, morale: -3, scorte: -4 }, 'La malattia si diffonde fra i civili.')]),
        ch('Ignori e mantieni tutti ai loro posti', 'Costo opportunità', [o(0.4, { difensori: 2, morale: 0 }, 'Per fortuna la febbre si esaurisce da sola.'), o(0.6, { difensori: -14, morale: -8 }, 'L’epidemia dilaga e le mura sono sguarnite.')])
      ]),
      card('a-alleati', 5, 'Gli alleati promettono un esercito di soccorso entro un mese, ma chiedono in cambio che tu ceda loro il controllo dei dazi cittadini dopo la guerra.', [
        ch('Accetti le condizioni', 'Dipendenza', [o(0.6, { alleati: 12, morale: 6, difensori: 2 }, 'La promessa di aiuto rialza gli animi.'), o(0.4, { alleati: 4, morale: -2, difensori: -2 }, 'Gli alleati tardano e il loro prezzo è alto.')]),
        ch('Chiedi di abbassare le condizioni', 'Negoziazione', [o(0.5, { alleati: 8, morale: 3, scorte: -2 }, 'Trovi un accordo equilibrato.'), o(0.5, { alleati: -4, morale: -3, scorte: -2 }, 'Gli alleati si irritano e rallentano la partenza.')]),
        ch('Rifiuti: preferisci resistere da solo', 'Autonomia', [o(0.45, { alleati: -8, morale: 4, difensori: 1 }, 'Lo orgoglio civile cresce.'), o(0.55, { alleati: -14, morale: -6, difensori: -2, scorte: -4 }, 'Resti isolato e l’assedio si stringe.')])
      ]),
      card('a-carestia', 5, 'Le scorte si assottigliano. Un magazziniere propone di requisire il cibo dalle case dei ricchi mercanti, che finora ne hanno nascosto.', [
        ch('Requisisci tutto con la forza', 'Interesse collettivo', [o(0.65, { scorte: 14, morale: 3, alleati: -4 }, 'Le scorte ricompaiono e i poveri applaudono.'), o(0.35, { scorte: 8, morale: -4, alleati: -8, difensori: -3 }, 'I mercanti si ribellano e dividono la città.')]),
        ch('Chiedi loro di donare, con un riconoscimento pubblico', 'Incentivi', [o(0.55, { scorte: 8, morale: 5, alleati: 2 }, 'Molti donano per onore.'), o(0.45, { scorte: 3, morale: -2, alleati: 0 }, 'Pochi donano e il problema resta.')]),
        ch('Compri cibo a prezzo alto da contrabbandieri', 'Costo opportunità', [o(0.5, { scorte: 12, morale: 1, alleati: -2 }, 'Il cibo arriva, ma a caro prezzo.'), o(0.5, { scorte: 4, morale: -3, alleati: -4 }, 'I contrabbandieri ti truffano.')])
      ]),
      card('a-breccia', 6, 'Le macchine d’assedio hanno aperto una breccia nel muro nord. Hai poche ore per decidere dove schierare i difensori.', [
        ch('Concentri tutti i difensori alla breccia', 'Concentrazione delle forze', [o(0.6, { difensori: -6, morale: 6 }, 'Respingi l’assalto con fatica.'), o(0.4, { difensori: -10, morale: -4, scorte: -4 }, 'Il nemico finge e colpisce un altro tratto debole.')]),
        ch('Tieni la breccia con metà e il resto di riserva mobile', 'Difesa in profondità', [o(0.65, { difensori: -4, morale: 4 }, 'La riserva tappa i punti deboli.'), o(0.35, { difensori: -8, morale: -3 }, 'La breccia cede e la riserva arriva tardi.')]),
        ch('Costruisci una seconda cinta interna e lasci la breccia', 'Arretramento', [o(0.55, { difensori: -3, morale: -3, scorte: -3 }, 'Perdi un quartiere ma tieni una linea più corta.'), o(0.45, { difensori: -8, morale: -8, scorte: -5 }, 'Il nemico dilaga e la seconda cinta non è finita.')])
      ]),
      card('a-resa', 7, 'Il nemico, impaziente, offre una resa con onore: i difensori usciranno liberi e disarmati, ma la città sarà occupata. In cambio, nessuna rappresaglia.', [
        ch('Accetti la resa onorevole', 'Valore della vita', [o(0.7, { difensori: 10, morale: -8, alleati: -14, scorte: 5 }, 'Salvi molte vite e perdi la città.'), o(0.3, { difensori: 2, morale: -12, alleati: -18, scorte: 0 }, 'Il nemico non rispetta i patti.')]),
        ch('Rifiuti e resisti ancora una settimana', 'Logoramento', [o(0.5, { difensori: -8, morale: 4, scorte: -8, alleati: 6 }, 'Gli alleati arrivano in tempo.'), o(0.5, { difensori: -14, morale: -8, scorte: -12, alleati: -2 }, 'Le scorte finiscono e la città soffre.')]),
        ch('Rilanci con una controfferta: città libera ma neutrale', 'Negoziazione', [o(0.4, { difensori: 4, morale: 2, alleati: -2, scorte: 4 }, 'Il nemico accetta e la città si salva.'), o(0.6, { difensori: -5, morale: -3, scorte: -3 }, 'Il nemico respinge e si irrita.')])
      ]),
      card('a-ultimo', 8, 'L’ultimo mese. L’esercito alleato è atteso ma non confermato. I tuoi difensori sono stremati e le scorte quasi finite. Puoi tentare una grande sortita, resistere o cercare un compromesso.', [
        ch('Grande sortita per rompere l’assedio', 'Iniziativa', [o(0.4, { difensori: -10, morale: 12, alleati: 8, scorte: 8 }, 'L’assedio si rompe e la città è libera.'), o(0.6, { difensori: -24, morale: -14, alleati: -4, scorte: -4 }, 'La sortita fallisce e i difensori sono annientati.')]),
        ch('Resisti fino all’arrivo degli alleati', 'Logoramento', [o(0.5, { difensori: -6, morale: 2, alleati: 10, scorte: -10 }, 'Gli alleati arrivano e il nemico si ritira.'), o(0.5, { difensori: -10, morale: -10, alleati: -6, scorte: -14 }, 'Gli alleati non arrivano e la fame colpisce.')]),
        ch('Apri una trattativa riservata col nemico', 'Negoziazione', [o(0.55, { difensori: 4, morale: 4, alleati: -6, scorte: 5 }, 'Ottieni condizioni accettabili.'), o(0.45, { difensori: -4, morale: -6, alleati: -10, scorte: -3 }, 'La trattativa trapela e gli alleati si irritano.')])
      ])
    ]
  });

  /* ---- 5) Crisi diplomatica fra stati immaginari ---- */
  SIM.register({
    id: 'diplomazia', title: 'Crisi diplomatica fra Norvia e Kestra', icon: '🕊️',
    intro: 'Sei il ministro degli esteri di Norvia in una crisi con il vicino Kestra, che ha occupato un’isola contesa. Puoi cercare una soluzione negoziata, rafforzare la deterrenza o coinvolgere gli alleati. Il punteggio premia la sicurezza (deterrenza), la credibilità e la reputazione internazionale, e penalizza la tensione, che cresce con l’escalation.',
    vars: {
      tensione: { label: 'Tensione (rischio di escalation)', start: 40, min: 0, max: 100 },
      deterrenza: { label: 'Deterrenza', start: 50, min: 0, max: 100 },
      credibilita: { label: 'Credibilità', start: 50, min: 0, max: 100 },
      alleati: { label: 'Sostegno degli alleati', start: 50, min: 0, max: 100 }
    },
    weights: { tensione: -0.9, deterrenza: 0.7, credibilita: 0.8, alleati: 0.6 },
    penalties: [],
    turns: 5, utilText: '−0,9 × tensione + 0,7 × deterrenza + 0,8 × credibilità + 0,6 × sostegno degli alleati',
    cards: [
      card('d-nota', 1, 'Kestra ha occupato l’isola di Terravia con un piccolo distaccamento. La stampa chiede una risposta forte. Devi inviare una prima nota diplomatica.', [
        ch('Nota dura con ultimatum di 48 ore', 'Credibilità della minaccia', [o(0.45, { tensione: 8, deterrenza: 6, credibilita: 6 }, 'Kestra capisce che Norvia non scherza.'), o(0.55, { tensione: 16, deterrenza: 2, credibilita: -4 }, 'L’ultimatum scade senza risultati e sei costretto a rilanciare o a perdere la faccia.')]),
        ch('Nota ferma ma aperta al negoziato', 'Segnalazione calibrata', [o(0.6, { tensione: -4, credibilita: 3, alleati: 3 }, 'Si apre un canale di dialogo.'), o(0.4, { tensione: 4, credibilita: -2, deterrenza: -2 }, 'Kestra legge la fermezza come debolezza.')]),
        ch('Nota di protesta e richiesta di mediazione internazionale', 'Alleati', [o(0.65, { tensione: -2, alleati: 8, credibilita: 1 }, 'La comunità internazionale appoggia.'), o(0.35, { tensione: 2, alleati: 2, credibilita: -3 }, 'Appari come uno stato che non sa farsi rispettare.')])
      ]),
      card('d-hotline', 1, 'Un ambasciatore propone di aprire una linea diretta riservata con Kestra, per evitare incidenti involontari. Kestra potrebbe vederla come un segno di debolezza.', [
        ch('Apri la linea e comunica pubblicamente la scelta', 'Prevenzione dell’escalation', [o(0.7, { tensione: -8, credibilita: 3 }, 'Riduci il rischio di malintesi.'), o(0.3, { tensione: -2, credibilita: -3 }, 'La stampa ti accusa di ammorbidirti.')]),
        ch('Apri la linea in segreto', 'Riservatezza', [o(0.65, { tensione: -7, credibilita: 1 }, 'Il canale funziona senza clamore.'), o(0.35, { tensione: -2, credibilita: -5 }, 'Il segreto trapela e sembri ambiguo.')]),
        ch('Non apri la linea: tutto passa dai canali ufficiali', 'Rigidità', [o(0.6, { tensione: 2, credibilita: 2, deterrenza: 1 }, 'Mantieni la linea ufficiale.'), o(0.4, { tensione: 8, credibilita: 0 }, 'Un incidente di mare scatena un grave malinteso.')])
      ]),
      card('d-esercitazione', 2, 'La difesa propone una grande esercitazione navale vicino all’isola come segnale. Potrebbe rafforzare la deterrenza o essere letta come una provocazione.', [
        ch('Esercitazione massiccia con le forze principali', 'Segnalazione costosa', [o(0.5, { tensione: 8, deterrenza: 10, credibilita: 4 }, 'Il messaggio è chiaro: Norvia è pronta.'), o(0.5, { tensione: 18, deterrenza: 4, credibilita: -2 }, 'Kestra risponde con una propria esercitazione: sale la tensione.')]),
        ch('Esercitazione limitata, annunciata in anticipo', 'Trasparenza', [o(0.7, { tensione: 1, deterrenza: 5, credibilita: 3 }, 'Segnale misurato: nessuno lo legge come minaccia.'), o(0.3, { tensione: 4, deterrenza: 2 }, 'Il messaggio passa inosservato.')]),
        ch('Nessuna esercitazione: preferisci i canali diplomatici', 'Moderazione', [o(0.6, { tensione: -5, deterrenza: -4, credibilita: 1 }, 'Riduci il rischio ma indebolisci il segnale.'), o(0.4, { tensione: 1, deterrenza: -8, credibilita: -3 }, 'Kestra ne approfitta e avanza di un altro passo.')])
      ]),
      card('d-sanzioni', 2, 'Gli alleati propongono sanzioni economiche contro Kestra. Funzionerebbero come pressione, ma danneggerebbero anche i tuoi commerci e potrebbero irrigidire Kestra.', [
        ch('Sanzioni complete e immediate', 'Costo della coercizione', [o(0.5, { tensione: 8, deterrenza: 5, credibilita: 5, alleati: 6 }, 'Mostri fermezza e coesione.'), o(0.5, { tensione: 14, deterrenza: 1, credibilita: 0, alleati: 3 }, 'Kestra si irrigidisce e cerca partner alternativi.')]),
        ch('Sanzioni mirate e graduali, con possibilità di revoca', 'Escalation graduale', [o(0.65, { tensione: 2, deterrenza: 4, credibilita: 4, alleati: 5 }, 'La pressione cresce con un’uscita possibile.'), o(0.35, { tensione: 5, deterrenza: 1, credibilita: 0, alleati: 2 }, 'Kestra le ignora.')]),
        ch('Rifiuti le sanzioni e punti sul dialogo', 'Negoziazione', [o(0.5, { tensione: -4, alleati: -6, credibilita: -2 }, 'Gli alleati restano delusi.'), o(0.5, { tensione: -1, alleati: -8, credibilita: -5, deterrenza: -3 }, 'Appari incerto e Kestra si rinforza.')])
      ]),
      card('d-mediatore', 3, 'Un terzo stato neutrale, Lumera, si offre come mediatore. Kestra ha già detto di fidarsi di lui, ma Lumera ha stretti legami commerciali con Kestra.', [
        ch('Accetti Lumera come mediatore', 'Terza parte', [o(0.55, { tensione: -8, credibilita: 2, alleati: -2 }, 'Il negoziato parte con un clima più disteso.'), o(0.45, { tensione: -2, credibilita: -3, alleati: -4 }, 'Lumera favorisce Kestra e tu perdi terreno.')]),
        ch('Chiedi un mediatore alternativo, o una coppia di mediatori', 'Equilibrio', [o(0.6, { tensione: -4, credibilita: 3, alleati: 3 }, 'Ottieni un meccanismo più equilibrato.'), o(0.4, { tensione: 3, credibilita: -2, alleati: 0 }, 'Si perde tempo e Kestra si irrita.')]),
        ch('Rifiuti qualsiasi mediazione e tratti direttamente', 'Controllo del processo', [o(0.5, { tensione: -2, credibilita: 4, deterrenza: 2 }, 'Il tuo negoziatore ha mano libera.'), o(0.5, { tensione: 6, credibilita: -3, alleati: -3 }, 'Il dialogo si blocca senza testimoni.')])
      ]),
      card('d-concessione', 4, 'Kestra propone: ritiro dall’isola in cambio del riconoscimento dei suoi diritti di pesca nell’area. È una concessione modesta, ma crea un precedente.', [
        ch('Accetti subito per chiudere la crisi', 'Precedente', [o(0.65, { tensione: -14, credibilita: -2, deterrenza: -2, alleati: 2 }, 'La crisi si chiude e Kestra si ritira.'), o(0.35, { tensione: -8, credibilita: -8, deterrenza: -6, alleati: -4 }, 'Kestra legge la concessione come segno di debolezza e prepara nuove pretese.')]),
        ch('Controproponi una commissione mista per i diritti di pesca', 'Compromesso istituzionale', [o(0.55, { tensione: -8, credibilita: 4, alleati: 3 }, 'Una soluzione che salva la faccia a entrambi.'), o(0.45, { tensione: 2, credibilita: -1 }, 'Kestra rifiuta e perdi tempo.')]),
        ch('Rifiuti: nessuna concessione prima del ritiro', 'Credibilità', [o(0.45, { tensione: 4, credibilita: 6, deterrenza: 5 }, 'Kestra si ritira senza compenso.'), o(0.55, { tensione: 14, credibilita: 2, deterrenza: 2, alleati: -4 }, 'La crisi si irrigidisce.')])
      ]),
      card('d-blocco', 4, 'Un pattugliatore di Norvia e uno di Kestra si sono incrociati pericolosamente: nessun colpo sparato, ma entrambi i governi diffondono versioni opposte dell’incidente.', [
        ch('Denunci pubblicamente l’incidente con prove', 'Trasparenza', [o(0.6, { tensione: 6, credibilita: 6, alleati: 5 }, 'Le prove convincono la comunità internazionale.'), o(0.4, { tensione: 12, credibilita: -2, alleati: 0 }, 'Le prove sono contestate e la tensione cresce.')]),
        ch('Chiedi un’indagine congiunta sull’incidente', 'Prevenzione dell’escalation', [o(0.6, { tensione: -6, credibilita: 2, alleati: 2 }, 'Raffreddi gli animi.'), o(0.4, { tensione: 0, credibilita: -3, deterrenza: -3 }, 'L’indagine è lenta e sembri esitare.')]),
        ch('Rafforzi la presenza navale e taci', 'Segnalazione costosa', [o(0.5, { tensione: 6, deterrenza: 7, credibilita: 2 }, 'Kestra capisce che non indietreggerai.'), o(0.5, { tensione: 14, deterrenza: 3, credibilita: -2 }, 'Kestra risponde allo stesso modo.')])
      ]),
      card('d-alleato-forte', 5, 'Il tuo principale alleato, Brannor, offre di schierare truppe sul tuo territorio come deterrente. Rassicura, ma Kestra lo vedrà come una minaccia e Brannor potrebbe trascinarti in una guerra.', [
        ch('Accetti lo schieramento completo', 'Dilemma di sicurezza', [o(0.5, { tensione: 8, deterrenza: 12, alleati: 6, credibilita: 3 }, 'La deterrenza è forte e Kestra frena.'), o(0.5, { tensione: 18, deterrenza: 6, alleati: 4, credibilita: -3 }, 'Kestra si sente accerchiata e rilancia.')]),
        ch('Accetti uno schieramento simbolico e difensivo', 'Segnalazione calibrata', [o(0.65, { tensione: 2, deterrenza: 6, alleati: 4, credibilita: 2 }, 'Il segnale è chiaro ma non provocatorio.'), o(0.35, { tensione: 4, deterrenza: 2, alleati: 0 }, 'Kestra lo ignora.')]),
        ch('Rifiuti lo schieramento e conservi la tua autonomia', 'Autonomia strategica', [o(0.6, { tensione: -4, deterrenza: -6, alleati: -6, credibilita: 2 }, 'Ti smarchi, ma Brannor se ne ricorda.'), o(0.4, { tensione: 0, deterrenza: -10, alleati: -10, credibilita: -2 }, 'Brannor si raffredda e Kestra lo nota.')])
      ]),
      card('d-opinione', 5, 'In patria cresce il sentimento nazionalista: una parte del parlamento chiede di “riprendersi l’isola con la forza”. Puoi assecondare l’opinione o contenerla.', [
        ch('Adotti toni duri per placare l’opposizione', 'Politica interna', [o(0.5, { tensione: 8, credibilita: 3, deterrenza: 4 }, 'Il governo si rafforza in patria, ma sale la tensione.'), o(0.5, { tensione: 14, credibilita: -3, deterrenza: 2 }, 'I toni duri ti legano le mani: non puoi più negoziare.')]),
        ch('Spieghi apertamente i costi di una guerra', 'Costi pubblici', [o(0.55, { tensione: -4, credibilita: 4, alleati: 3 }, 'Una parte dell’opinione si calma.'), o(0.45, { tensione: 2, credibilita: -4, deterrenza: -2 }, 'Ti accusano di debolezza.')]),
        ch('Eviti il tema e lasci che si spenga da sé', 'Rinvio', [o(0.4, { tensione: -2 }, 'La pressione cala.'), o(0.6, { tensione: 6, credibilita: -3 }, 'L’opposizione cresce e il tema esplode.')])
      ]),
      card('d-incidente', 6, 'Un aereo da ricognizione di Norvia viene abbattuto, secondo Kestra “per errore”. Due piloti sono morti. L’opinione pubblica chiede rappresaglia.', [
        ch('Risposta militare proporzionata e limitata', 'Escalation controllata', [o(0.45, { tensione: 10, deterrenza: 8, credibilita: 6 }, 'Segnale di fermezza senza perdere il controllo.'), o(0.55, { tensione: 22, deterrenza: 3, credibilita: 0, alleati: -4 }, 'Kestra reagisce e la spirale parte.')]),
        ch('Chiedi scuse, risarcimento e inchiesta internazionale', 'Via diplomatica', [o(0.55, { tensione: -4, credibilita: 4, alleati: 5 }, 'Kestra concede un’inchiesta e la crisi si raffredda.'), o(0.45, { tensione: 6, credibilita: -5, deterrenza: -4, alleati: 0 }, 'Kestra rifiuta e sembri incapace di reagire.')]),
        ch('Convochi gli alleati per una risposta coordinata', 'Alleati', [o(0.6, { tensione: 4, deterrenza: 6, credibilita: 3, alleati: 8 }, 'La risposta collettiva è forte.'), o(0.4, { tensione: 6, deterrenza: 2, credibilita: -2, alleati: -4 }, 'Gli alleati litigano su come rispondere.')])
      ]),
      card('d-bluff', 7, 'Il tuo servizio di intelligence segnala che Kestra potrebbe stare bluffando sulla sua disponibilità a un conflitto. Non è certo. Puoi rilanciare e sfidare il bluff, o ridurre l’impegno.', [
        ch('Rilanci: dichiari che userai la forza se Kestra non si ritira', 'Credibilità della minaccia', [o(0.5, { tensione: 8, deterrenza: 10, credibilita: 8 }, 'Kestra cede: la minaccia era credibile.'), o(0.5, { tensione: 24, deterrenza: -2, credibilita: -10, alleati: -6 }, 'Kestra non cede e sei costretto a scegliere fra guerra e perdita di faccia.')]),
        ch('Offri una via d’uscita onorevole con un termine chiaro', 'Salvare la faccia', [o(0.6, { tensione: -10, deterrenza: 2, credibilita: 4 }, 'Kestra accetta e la crisi si chiude.'), o(0.4, { tensione: 2, deterrenza: -4, credibilita: -3 }, 'Kestra legge l’offerta come cedimento.')]),
        ch('Rafforzi in silenzio le difese e aspetti una mossa di Kestra', 'Valore dell’attesa', [o(0.5, { tensione: 4, deterrenza: 7, credibilita: 2 }, 'Quando Kestra muove, sei pronto.'), o(0.5, { tensione: 10, deterrenza: 3, credibilita: -3 }, 'Kestra coglie il rafforzamento e rilancia.')])
      ]),
      card('d-vertice', 8, 'Si apre un vertice finale a tre. Kestra chiede il riconoscimento dei suoi “interessi storici” sull’isola. Norvia può accettare un compromesso, tenere la linea o lasciare il tavolo.', [
        ch('Accetti un compromesso con sovranità condivisa e monitoraggio', 'Compromesso', [o(0.6, { tensione: -18, credibilita: 4, deterrenza: -4, alleati: 4 }, 'La crisi si risolve con un equilibrio fragile.'), o(0.4, { tensione: -8, credibilita: -6, deterrenza: -8, alleati: -4 }, 'Il compromesso è fragile e Kestra lo rimette in discussione.')]),
        ch('Tieni la linea: sovranità piena di Norvia', 'Posizione non negoziabile', [o(0.35, { tensione: 4, credibilita: 8, deterrenza: 8, alleati: 3 }, 'Kestra cede e Norvia ne esce rafforzata.'), o(0.65, { tensione: 14, credibilita: 2, deterrenza: 2, alleati: -6 }, 'Il vertice fallisce e la tensione sale.')]),
        ch('Lasci il tavolo per segnalare la tua determinazione', 'Brinkmanship', [o(0.3, { tensione: 6, credibilita: 8, deterrenza: 8 }, 'Kestra cede la tensione e ritorna al tavolo.'), o(0.7, { tensione: 20, credibilita: -4, deterrenza: 0, alleati: -8 }, 'Il gesto si ritorce contro di te: sei isolato.')])
      ]),
      card('d-garanzia', 8, 'Un accordo finale richiederebbe garanzie reciproche: ispettori sull’isola e un patto di non aggressione. Kestra potrebbe violarlo, ma accettarlo ti legherebbe a regole che dovresti rispettare anche tu.', [
        ch('Firmi il patto con ispettori internazionali', 'Vincoli reciproci', [o(0.65, { tensione: -14, credibilita: 6, alleati: 6, deterrenza: -2 }, 'L’accordo regge e la crisi si spegne.'), o(0.35, { tensione: -6, credibilita: -2, alleati: 2, deterrenza: -6 }, 'Kestra aggira gli ispettori.')]),
        ch('Firmi un patto senza ispettori, basato sulla fiducia', 'Fiducia', [o(0.45, { tensione: -10, credibilita: 2, deterrenza: -2 }, 'Kestra rispetta il patto.'), o(0.55, { tensione: -2, credibilita: -8, deterrenza: -8, alleati: -4 }, 'Kestra lo viola e tu appari ingenuo.')]),
        ch('Non firmi e mantieni la deterrenza attiva', 'Deterrenza', [o(0.6, { tensione: 4, deterrenza: 6, credibilita: 2, alleati: -2 }, 'La crisi resta aperta ma sei forte.'), o(0.4, { tensione: 10, deterrenza: 3, credibilita: -2, alleati: -6 }, 'Il rischio di escalation aumenta.')])
      ])
    ]
  });
})(window.ST = window.ST || {});
