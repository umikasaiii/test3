/* SkillTree — scenari di strategia (carte): preparazione di una prova e organizzazione di un evento. Tutto inventato e didattico. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });

  /* ---- 1) Prepararsi a una prova importante in 8 settimane ---- */
  SIM.register({
    id: 'esame', title: 'Prepararsi a una prova importante in 8 settimane', icon: '📚',
    intro: 'Hai 8 settimane per prepararti a una prova importante e un monte di circa 130 ore di studio utilizzabili. Ogni scelta consuma ore, energia o fiducia, e conta quanto sei preparato davvero, non quanto ti senti. Il punteggio premia preparazione, energia e fiducia a fine percorso, un po\' di ore residue e conta come perdita ogni debito di energia o di ore.',
    vars: {
      preparazione: { label: 'Preparazione', start: 10, min: 0, max: 200 },
      energia: { label: 'Energia (negativa = debito di stanchezza)', start: 80, min: -80, max: 200 },
      tempo: { label: 'Ore di studio disponibili (negative = notti rubate)', start: 130, min: -80, max: 200, unit: 'h', tight: true },
      fiducia: { label: 'Fiducia', start: 50, min: -80, max: 200 }
    },
    weights: { preparazione: 1, energia: 0.4, tempo: 0.3, fiducia: 0.4 },
    penalties: [],
    turns: 5, utilText: 'preparazione + 0,4 × energia + 0,4 × fiducia + 0,3 × ore residue (energia e ore negative contano come debito e pesano sul punteggio)',
    cards: [
      { id: 'es-metodo', lv: 1, text: 'Inizi il ciclo di studio dei primi capitoli (circa 12 ore). Hai tre modi di impiegarle: rileggere e sottolineare, rifare riassunti ordinati, oppure chiudere il libro e richiamare a memoria quello che ricordi.',
        choices: [
          { label: 'Rileggere e sottolineare', principle: 'Illusione di competenza', hint: 'Dà sensazione di fluidità, ma testa poco la memoria.', out: [o(1, { preparazione: 5, tempo: -10, energia: -4, fiducia: 6 }, 'Ti sembra di sapere tutto, ma i test veri mostreranno lacune.')] },
          { label: 'Riassunti belli e schemi colorati', principle: 'Attività utile vs attività visibile', out: [o(1, { preparazione: 6, tempo: -15, energia: -6, fiducia: 4 }, 'Materiale ordinato, ma consumi ore a impaginare.')] },
          { label: 'Richiamo attivo: libro chiuso, domande e risposta a memoria', principle: 'Richiamo attivo', hint: 'Più faticoso ora, molto più efficace per ricordare.', out: [o(0.8, { preparazione: 13, tempo: -12, energia: -12, fiducia: -2 }, 'Scopri subito cosa non sai e lo fissi.'), o(0.2, { preparazione: 9, tempo: -12, energia: -16, fiducia: -8 }, 'Giornata dura: ricordi poco, morale in calo, ma hai mappato le lacune.')] }
        ] },
      { id: 'es-spacing', lv: 2, text: 'Hai già studiato la prima parte. Puoi ripassarla subito per fissarla, programmare ripassi distanziati (dopo 3, poi 10 giorni) oppure lasciarla e concentrarti solo sul nuovo.',
        choices: [
          { label: 'Ripasso immediato, due ore di fila', principle: 'Spaziatura', out: [o(1, { preparazione: 5, tempo: -8, energia: -6, fiducia: 3 }, 'Ricordi bene oggi, ma tra due settimane sarà svanito.')] },
          { label: 'Ripassi brevi distanziati nel calendario', principle: 'Spaziatura', hint: 'Richiedono pianificazione ma fissano più a lungo.', out: [o(0.85, { preparazione: 11, tempo: -9, energia: -5, fiducia: 3 }, 'I ripassi spaziati consolidano: la curva dell\'oblio si appiattisce.'), o(0.15, { preparazione: 6, tempo: -11, energia: -5 }, 'Salti un ripasso per un imprevisto: il beneficio si riduce.')] },
          { label: 'Solo materiale nuovo, ripasso alla fine', principle: 'Costo opportunità', out: [o(0.5, { preparazione: 10, tempo: -6, energia: -8 }, 'Avanzi veloce nel programma.'), o(0.5, { preparazione: 4, tempo: -6, energia: -8, fiducia: -4 }, 'Il materiale iniziale ti sfugge e dovrai rifarlo.')] }
        ] },
      { id: 'es-temi', lv: 2, text: 'Servono materiali di esercizio. Puoi usare i temi degli anni passati (10 ore), leggere un secondo manuale integrale (20 ore) o chiedere a un compagno che ha già dato la prova com\'è fatta davvero.',
        choices: [
          { label: 'Fare i temi degli anni passati', principle: 'Informazione prima di decidere', out: [o(1, { preparazione: 9, tempo: -10, energia: -8, fiducia: 3 }, 'Capisci lo stile delle domande e dove sbagli.')] },
          { label: 'Secondo manuale, lettura integrale', principle: 'Costo opportunità', out: [o(1, { preparazione: 4, tempo: -20, energia: -10, fiducia: 2 }, 'Molta lettura, poco aggancio con ciò che verrà chiesto.')] },
          { label: 'Chiedere a chi l\'ha già sostenuta', principle: 'Informazione prima di decidere', hint: 'Costa pochissimo, ma l\'informazione può essere datata.', out: [o(0.75, { preparazione: 5, tempo: -2, fiducia: 4 }, 'Ottimi consigli su cosa conta e cosa no.'), o(0.25, { preparazione: 0, tempo: -2, fiducia: -2 }, 'Le informazioni erano obsolete: nessun vantaggio.')] }
        ] },
      { id: 'es-pausa', lv: 2, text: 'Dopo tre settimane intense senti il calo. Puoi inserire movimento quotidiano (45 minuti), prenderti un weekend completo senza studio, o tirare dritto.',
        choices: [
          { label: 'Camminata o sport 45 minuti al giorno', principle: 'Ridondanza/buffer', out: [o(1, { energia: 12, tempo: -4, fiducia: 2, preparazione: 1 }, 'Più lucidità e sonno migliore, ore sottratte contenute.')] },
          { label: 'Weekend completo di stacco', principle: 'Ridondanza/buffer', out: [o(1, { energia: 25, tempo: -12, fiducia: 3 }, 'Ricarichi, ma perdi un blocco di ore.')] },
          { label: 'Tirare dritto', principle: 'Costo opportunità', hint: 'Risparmi ore ora, ma il debito di energia si accumula.', out: [o(0.6, { preparazione: 6, energia: -12, tempo: -8 }, 'Avanzi, ma sei stanco.'), o(0.4, { preparazione: 2, energia: -20, tempo: -8, fiducia: -5 }, 'Il rendimento crolla: studi ma non trattieni.')] }
        ] },
      { id: 'es-simula', lv: 3, text: 'A metà percorso puoi fare una simulazione completa cronometrata (3 ore più correzione): ti dirà a che punto sei, ma può demoralizzare. In alternativa una simulazione parziale, o rimandare.',
        choices: [
          { label: 'Simulazione completa cronometrata', principle: 'Informazione prima di decidere', hint: 'Misura reale della preparazione e anche allenamento al recupero.', out: [o(0.6, { preparazione: 10, tempo: -8, energia: -10, fiducia: 8 }, 'Va meglio del previsto e correggi gli errori con precisione.'), o(0.4, { preparazione: 10, tempo: -8, energia: -10, fiducia: -10 }, 'Voto basso: duro, ma ora sai dove lavorare.')] },
          { label: 'Simulazione parziale (un terzo)', principle: 'Informazione prima di decidere', out: [o(1, { preparazione: 6, tempo: -4, energia: -5, fiducia: 2 }, 'Informazione parziale, impatto emotivo contenuto.')] },
          { label: 'Rimandare, studiare ancora un po\'', principle: 'Anticipare il secondo ordine', out: [o(0.7, { preparazione: 6, tempo: -8, energia: -8, fiducia: 2 }, 'Avanzi, ma senza sapere dove sei.'), o(0.3, { preparazione: 2, tempo: -8, energia: -8, fiducia: -3 }, 'Studi cose già sapute e trascuri le lacune.')] }
        ] },
      { id: 'es-festa', lv: 3, text: 'Un amico organizza una festa di compleanno importante sabato sera, e in famiglia c\'è un pranzo lungo domenica. Rischi di perdere un intero fine settimana di studio.',
        choices: [
          { label: 'Andare a entrambe', principle: 'Costo opportunità', out: [o(1, { energia: 8, fiducia: 8, tempo: -14, preparazione: 0 }, 'Serate belle, ma il weekend è perso per lo studio.')] },
          { label: 'Andare solo alla festa e studiare domenica', principle: 'Reversibilità', out: [o(1, { energia: 6, fiducia: 6, tempo: -7, preparazione: 5 }, 'Compromesso: un po\' di vita sociale senza perdere tutto.')] },
          { label: 'Declinare entrambi e studiare', principle: 'Costo opportunità', hint: 'Guadagni ore ma paghi in morale e relazioni.', out: [o(1, { preparazione: 8, energia: -8, fiducia: -4, tempo: -10 }, 'Studi, ma ti senti isolato.')] }
        ] },
      { id: 'es-malato', lv: 4, text: 'Svegli con la febbre a 38,2 a cinque settimane dalla prova. Hai un capitolo importante da finire. Cosa fai?',
        choices: [
          { label: 'Riposo completo due giorni', principle: 'Ridondanza/buffer', out: [o(1, { energia: 20, tempo: -8, preparazione: 0, fiducia: -2 }, 'Guarisci in fretta, ma restano indietro alcune pagine.')] },
          { label: 'Studio leggero: schede e rilettura a letto', principle: 'Reversibilità', out: [o(1, { energia: 5, tempo: -8, preparazione: 5 }, 'Recuperi senza forzare e mantieni il ritmo.')] },
          { label: 'Forzare, studio normale', principle: 'Anticipare il secondo ordine', hint: 'Il corpo malato rende poco e la guarigione si allunga.', out: [o(0.7, { preparazione: 7, energia: -18, tempo: -12, fiducia: 0 }, 'Passi la giornata sui libri, ma ricordi poco.'), o(0.3, { preparazione: 2, energia: -30, tempo: -16, fiducia: -6 }, 'Ricaduta: perdi giorni e morale.')] }
        ] },
      { id: 'es-gruppo', lv: 4, text: 'Un gruppo di sei compagni propone sessioni di studio collettive (10 ore). Potrebbe essere molto utile oppure trasformarsi in chiacchiere. In alternativa, puoi spiegare un capitolo a un amico oppure studiare da solo.',
        choices: [
          { label: 'Unirsi al gruppo di sei', principle: 'Informazione prima di decidere', out: [o(0.6, { preparazione: 12, tempo: -10, fiducia: 6, energia: -5 }, 'Spiegarvi a vicenda fa emergere lacune e fissa i concetti.'), o(0.4, { preparazione: 2, tempo: -10, fiducia: 1, energia: -3 }, 'Troppa dispersione: ore passate a parlare d\'altro.')] },
          { label: 'Un compagno fidato: spiegarsi a turno', principle: 'Richiamo attivo', out: [o(0.85, { preparazione: 10, tempo: -8, fiducia: 4, energia: -8 }, 'Insegnare ti obbliga a organizzare le idee.'), o(0.15, { preparazione: 4, tempo: -8, energia: -8 }, 'L\'amico è poco preparato: scambio sterile.')] },
          { label: 'Studiare da solo', principle: 'Collo di bottiglia', out: [o(1, { preparazione: 8, tempo: -10, energia: -9, fiducia: -1 }, 'Lavoro regolare e senza distrazioni, ma senza feedback.')] }
        ] },
      { id: 'es-debole', lv: 5, text: 'Dal conteggio dei temi emerge un argomento ostico che pesa circa il 30% della prova e che non hai capito. Hai tre strade: dedicarci 20 ore, ignorarlo e consolidare il resto, oppure chiedere un chiarimento al docente.',
        choices: [
          { label: 'Dedicarci 20 ore', principle: 'Collo di bottiglia', hint: 'Alto costo, alto valore se riesce.', out: [o(0.7, { preparazione: 16, tempo: -20, energia: -14, fiducia: 5 }, 'Finalmente il nodo si scioglie.'), o(0.3, { preparazione: 6, tempo: -20, energia: -14, fiducia: -6 }, 'Non riesci a venirne a capo da solo.')] },
          { label: 'Ignorarlo, consolidare il resto', principle: 'Costo opportunità', out: [o(0.6, { preparazione: 8, tempo: -10, energia: -8, fiducia: 2 }, 'Il resto è solido e l\'argomento debole pesa poco.'), o(0.4, { preparazione: 3, tempo: -10, energia: -8, fiducia: -4 }, 'L\'argomento debole è nel tema in modo determinante.')] },
          { label: 'Chiedere un chiarimento al docente (ricevimento)', principle: 'Informazione prima di decidere', out: [o(0.8, { preparazione: 10, tempo: -6, energia: -4, fiducia: 4 }, 'In mezz\'ora ti spiega il punto chiave.'), o(0.2, { preparazione: 4, tempo: -6, energia: -4 }, 'Risposta vaga, poco guadagno.')] }
        ] },
      { id: 'es-sonno', lv: 5, text: 'Tre giorni prima della prova hai ancora 150 pagine da rivedere. Puoi studiare di notte per coprirle tutte, dormire regolarmente e studiare solo i punti più probabili, o chiedere aiuto a un tutor.',
        choices: [
          { label: 'Nottata di studio', principle: 'Anticipare il secondo ordine', hint: 'La privazione di sonno peggiora memoria e attenzione.', out: [o(0.5, { preparazione: 14, energia: -30, tempo: -14, fiducia: 2 }, 'Copri tutto, ma sei distrutto.'), o(0.5, { preparazione: 6, energia: -32, tempo: -14, fiducia: -6 }, 'Dopo le 2 non fissi più nulla.')] },
          { label: 'Sonno regolare e studio selettivo', principle: 'Ridondanza/buffer', out: [o(1, { preparazione: 8, energia: 6, tempo: -10, fiducia: 3 }, 'Ripassi solo i punti chiave, ma la mente funziona.')] },
          { label: 'Tutor a pagamento per 6 ore', principle: 'Collo di bottiglia', out: [o(0.7, { preparazione: 14, tempo: -8, energia: -6, fiducia: 5 }, 'Ti indica i punti decisivi e chiarisce i dubbi.'), o(0.3, { preparazione: 5, tempo: -8, energia: -6, fiducia: -2 }, 'Non è all\'altezza: tempo sprecato.')] }
        ] },
      { id: 'es-ansia', lv: 6, text: 'A una settimana dalla prova l\'ansia sale e il confronto con i compagni ti agita. Puoi lavorare sulla gestione dell\'ansia, confrontarti con i più preparati, o ignorare il problema.',
        choices: [
          { label: 'Respirazione, scrittura dei pensieri, visualizzazione', principle: 'Ridondanza/buffer', out: [o(1, { fiducia: 8, energia: 4, tempo: -3 }, 'Riduci il carico emotivo e dormi meglio.')] },
          { label: 'Confrontarti con i più preparati', principle: 'Informazione prima di decidere', hint: 'Può motivare o demoralizzare.', out: [o(0.5, { fiducia: 6, preparazione: 3, tempo: -3 }, 'Ti rassicurano e scambiate dritte utili.'), o(0.5, { fiducia: -12, preparazione: 2, tempo: -3, energia: -4 }, 'Ti sembra di sapere molto meno degli altri.')] },
          { label: 'Ignorare e studiare di più', principle: 'Anticipare il secondo ordine', out: [o(0.5, { preparazione: 6, tempo: -8, energia: -8, fiducia: -2 }, 'Studi, ma con il cuore in gola.'), o(0.5, { preparazione: 3, tempo: -8, energia: -10, fiducia: -8 }, 'L\'ansia ti blocca e rende le ore meno produttive.')] }
        ] },
      { id: 'es-ultima', lv: 7, text: 'Ultima settimana: restano 35 ore. Puoi ripassare tutto il programma, concentrarti sui punti deboli individuati dai temi, oppure ridurre al minimo e riposare con un formulario.',
        choices: [
          { label: 'Ripasso completo di tutto', principle: 'Collo di bottiglia', out: [o(0.8, { preparazione: 12, energia: -18, tempo: -25, fiducia: 2 }, 'Copri tutto, ma arrivi stanco.'), o(0.2, { preparazione: 7, energia: -22, tempo: -28, fiducia: -4 }, 'Non riesci a chiudere tutto: restano buchi.')] },
          { label: 'Solo i punti deboli emersi dai temi', principle: 'Collo di bottiglia', hint: 'Efficace se la diagnosi è giusta.', out: [o(0.75, { preparazione: 14, energia: -12, tempo: -18, fiducia: 5 }, 'Trasformi i punti deboli in punti di forza.'), o(0.25, { preparazione: 6, energia: -12, tempo: -18, fiducia: -2 }, 'La diagnosi era parziale: ne esce un altro punto debole.')] },
          { label: 'Minimo indispensabile e riposo', principle: 'Ridondanza/buffer', out: [o(1, { preparazione: 4, energia: 15, tempo: -8, fiducia: 6 }, 'Arrivi lucido, ma con qualche lacuna in più.')] }
        ] },
      { id: 'es-giorno', lv: 8, text: 'Giorno della prova: hai 120 minuti e dieci domande di difficoltà variabile. Puoi iniziare dalle facili e gestire il tempo, partire dalla più difficile, oppure arrivare con due ore d\'anticipo a ripassare ancora.',
        choices: [
          { label: 'Prima le facili, poi le difficili, tempo diviso', principle: 'Reversibilità', out: [o(1, { preparazione: 6, fiducia: 5, energia: -6 }, 'Accumuli punti sicuri e sfrutti il tempo per le difficili.')] },
          { label: 'Partire dalla più difficile', principle: 'Costo opportunità', hint: 'Alto rischio di bloccarsi e perdere tempo.', out: [o(0.4, { preparazione: 12, fiducia: 5, energia: -10 }, 'La affronti a mente fresca e ti sblocchi.'), o(0.6, { preparazione: -6, fiducia: -10, energia: -12 }, 'Ti blocchi e perdi minuti preziosi per le altre.')] },
          { label: 'Arrivare due ore prima per ripassare', principle: 'Anticipare il secondo ordine', out: [o(1, { preparazione: 3, fiducia: -5, energia: -10 }, 'L\'ansia aumenta e non fissi nulla di nuovo.')] }
        ] }
    ]
  });

  /* ---- 2) Organizzare un evento con 300 partecipanti ---- */
  SIM.register({
    id: 'evento', title: 'Organizzare un evento con 300 partecipanti', icon: '🎪',
    intro: 'Devi organizzare in 50 giorni un convegno-festa per 300 persone con un budget di circa 80 mila euro. Ogni decisione costa giorni di lavoro e budget, può far crescere la soddisfazione degli ospiti e può alzare o abbassare il rischio operativo. Il punteggio premia soddisfazione e budget residuo, penalizza il rischio (più basso è meglio) e conta come perdita ogni sforamento di budget o ritardo.',
    vars: {
      budget: { label: 'Budget (negativo = sforamento)', start: 80, min: -60, max: 200, unit: 'k€', tight: true },
      tempo: { label: 'Giorni disponibili (negativi = ritardo)', start: 50, min: -40, max: 80, unit: 'giorni', tight: true },
      soddisfazione: { label: 'Soddisfazione attesa', start: 40, min: -50, max: 200 },
      rischio: { label: 'Rischio operativo (più basso è meglio)', start: 40, min: -50, max: 200 }
    },
    weights: { soddisfazione: 1, rischio: -0.8, budget: 0.8, tempo: 0.5 },
    penalties: [],
    turns: 5, utilText: 'soddisfazione − 0,8 × rischio + 0,8 × budget residuo + 0,5 × giorni residui (budget e giorni negativi, cioè sforamenti e ritardi, pesano come perdita)',
    cards: [
      { id: 'ev-sede', lv: 1, text: 'Devi scegliere la sede per 300 persone. Un teatro centrale costa 18 k€ ed è ben collegato, un ex capannone industriale 9 k€ ma richiede allestimenti, un centro congressi in periferia costa 12 k€ ed è già attrezzato.',
        choices: [
          { label: 'Teatro centrale (18 k€)', principle: 'Costo opportunità', out: [o(1, { budget: -18, tempo: -4, soddisfazione: 16, rischio: -6 }, 'Sede prestigiosa e semplice da raggiungere.')] },
          { label: 'Ex capannone (9 k€ + allestimenti)', principle: 'Collo di bottiglia', hint: 'Costa meno ma consuma giorni e può nascondere imprevisti.', out: [o(0.6, { budget: -13, tempo: -9, soddisfazione: 14, rischio: 4 }, 'Atmosfera originale, lavoro extra ma riuscito.'), o(0.4, { budget: -16, tempo: -12, soddisfazione: 8, rischio: 14 }, 'Impianti e uscite di sicurezza richiedono interventi.')] },
          { label: 'Centro congressi periferico (12 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -12, tempo: -3, soddisfazione: 7, rischio: -4 }, 'Tutto funziona, ma l\'ambiente è anonimo.')] }
        ] },
      { id: 'ev-sopral', lv: 2, text: 'Prima di firmare i contratti puoi fare un sopralluogo tecnico dettagliato (3 giorni, 1 k€) con un professionista, oppure fidarti delle schede dei fornitori.',
        choices: [
          { label: 'Sopralluogo tecnico dettagliato', principle: 'Informazione prima di decidere', out: [o(0.6, { budget: -1, tempo: -3, rischio: -10, soddisfazione: 3 }, 'Individui in anticipo due criticità e le risolvi.'), o(0.4, { budget: -1, tempo: -3, rischio: -3 }, 'Nessuna sorpresa: costo piccolo, tranquillità minima.')] },
          { label: 'Fidarsi delle schede', principle: 'Informazione prima di decidere', out: [o(0.7, { tempo: 0, rischio: 2 }, 'Nessun problema evidente per ora.'), o(0.3, { budget: -4, tempo: -4, rischio: 12, soddisfazione: -4 }, 'Emergono limiti tecnici a ridosso dell\'evento.')] },
          { label: 'Un check rapido di mezza giornata', principle: 'Reversibilità', out: [o(1, { budget: -0.3, tempo: -1, rischio: -4 }, 'Copri i punti principali con poco sforzo.')] }
        ] },
      { id: 'ev-comunic', lv: 2, text: 'Serve far arrivare le persone. Puoi pagare una campagna social e stampa (7 k€), affidarti a rete personale e newsletter (1 k€, più lenta), o coinvolgere associazioni partner con scambio visibilità.',
        choices: [
          { label: 'Campagna a pagamento (7 k€)', principle: 'Costo opportunità', out: [o(0.8, { budget: -7, tempo: -3, soddisfazione: 12, rischio: -2 }, 'Buone iscrizioni e ottima visibilità.'), o(0.2, { budget: -7, tempo: -3, soddisfazione: 5, rischio: 4 }, 'Campagna sotto le attese: pochi nuovi iscritti.')] },
          { label: 'Rete personale e newsletter', principle: 'Reversibilità', out: [o(0.6, { budget: -1, tempo: -5, soddisfazione: 7 }, 'Arrivano i fedeli: partecipazione stabile.'), o(0.4, { budget: -1, tempo: -5, soddisfazione: 1, rischio: 6 }, 'Iscrizioni scarse: rischio di sala semivuota.')] },
          { label: 'Partnership con associazioni', principle: 'Collo di bottiglia', out: [o(0.7, { budget: -2, tempo: -6, soddisfazione: 11, rischio: -3 }, 'Le associazioni portano un pubblico motivato.'), o(0.3, { budget: -2, tempo: -9, soddisfazione: 4, rischio: 3 }, 'Coordinamento lento e promesse vaghe.')] }
        ] },
      { id: 'ev-catering', lv: 2, text: 'Per il catering hai tre offerte: un servizio premium (15 k€), uno standard (9 k€), oppure buffet con tre piccoli fornitori locali (7 k€ ma più coordinamento).',
        choices: [
          { label: 'Catering premium (15 k€)', principle: 'Costo opportunità', out: [o(1, { budget: -15, tempo: -2, soddisfazione: 14, rischio: -4 }, 'Qualità alta e fornitore affidabile.')] },
          { label: 'Catering standard (9 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -9, tempo: -2, soddisfazione: 8, rischio: -2 }, 'Nulla di eccezionale, nulla di sbagliato.')] },
          { label: 'Tre fornitori locali (7 k€)', principle: 'Collo di bottiglia', hint: 'Risparmi ma spezzi la filiera: più punti di guasto.', out: [o(0.6, { budget: -7, tempo: -7, soddisfazione: 13, rischio: 4 }, 'Cibo apprezzato, ma coordinamento faticoso.'), o(0.4, { budget: -8, tempo: -8, soddisfazione: 3, rischio: 14 }, 'Un fornitore salta le consegne: buchi nel buffet.')] }
        ] },
      { id: 'ev-prezzo', lv: 3, text: 'Come fissare il prezzo dei biglietti? Ingresso gratuito su iscrizione (nessun incasso, massima partecipazione), 25 € (circa 7,5 k€ se si riempie la sala) o 45 € con sconti (potenziale 11 k€ ma sala più vuota).',
        choices: [
          { label: 'Ingresso gratuito', principle: 'Costo opportunità', out: [o(0.7, { soddisfazione: 12, rischio: 4 }, 'Sala piena, ma con molti iscritti che poi non vengono.'), o(0.3, { soddisfazione: 6, rischio: 10 }, 'No-show alto: sala semivuota e immagine debole.')] },
          { label: 'Biglietto a 25 €', principle: 'Reversibilità', out: [o(0.7, { budget: 7, soddisfazione: 8, rischio: -2 }, 'Incassi buoni e presenze affidabili.'), o(0.3, { budget: 4, soddisfazione: 4, rischio: 2 }, 'Vendite sotto le attese.')] },
          { label: 'Biglietto a 45 € con sconti', principle: 'Costo opportunità', hint: 'Più margine per biglietto, ma meno persone e più polemica.', out: [o(0.5, { budget: 11, soddisfazione: 3, rischio: 0 }, 'Incasso alto, pubblico selezionato.'), o(0.5, { budget: 5, soddisfazione: -4, rischio: 6 }, 'Vendite lente: devi tagliare i costi.')] }
        ] },
      { id: 'ev-volont', lv: 3, text: 'Ti serve personale per accoglienza e logistica. Puoi ingaggiare un\'agenzia di staff (8 k€), reclutare volontari motivati (2 k€ di rimborsi, ma da formare) o fare con pochi collaboratori interni.',
        choices: [
          { label: 'Agenzia di staff (8 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -8, tempo: -2, soddisfazione: 6, rischio: -10 }, 'Personale professionale e coordinato.')] },
          { label: 'Volontari formati (2 k€)', principle: 'Collo di bottiglia', out: [o(0.65, { budget: -2, tempo: -8, soddisfazione: 9, rischio: -6 }, 'Entusiasmo e buona accoglienza.'), o(0.35, { budget: -2, tempo: -10, soddisfazione: 2, rischio: 6 }, 'Qualche volontario non si presenta.')] },
          { label: 'Solo collaboratori interni', principle: 'Anticipare il secondo ordine', out: [o(1, { tempo: -4, soddisfazione: -3, rischio: 10 }, 'Pochi occhi e troppo da fare nei momenti di picco.')] }
        ] },
      { id: 'ev-assic', lv: 4, text: 'Hai la possibilità di assicurare l\'evento per cancellazione e responsabilità civile: polizza completa 4 k€, base 1,5 k€, nessuna copertura.',
        choices: [
          { label: 'Polizza completa (4 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -4, tempo: -1, rischio: -14 }, 'Dormi tranquillo: gli imprevisti pesano molto meno.')] },
          { label: 'Copertura base (1,5 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -1.5, tempo: -1, rischio: -6 }, 'Coperti solo i danni più gravi.')] },
          { label: 'Nessuna copertura', principle: 'Anticipare il secondo ordine', hint: 'Risparmi, ma una coda grave diventa insostenibile.', out: [o(0.8, { rischio: 3 }, 'Per ora non succede nulla.'), o(0.2, { budget: -8, rischio: 16, soddisfazione: -4 }, 'Un danno improvviso ricade interamente sul tuo budget.')] }
        ] },
      { id: 'ev-meteo', lv: 4, text: 'Parte del programma è all\'aperto (cortile). Previsioni incerte. Puoi affittare tensostrutture di riserva (6 k€), tenere pronto un piano B interno (poco costoso ma meno spazio) o puntare solo sul bel tempo.',
        choices: [
          { label: 'Tensostrutture di riserva (6 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -6, tempo: -2, soddisfazione: 6, rischio: -14 }, 'Qualunque meteo, il programma regge.')] },
          { label: 'Piano B interno ridotto', principle: 'Reversibilità', out: [o(0.7, { budget: -1, tempo: -3, rischio: -8, soddisfazione: 1 }, 'Il piano B ti salva senza grandi spese.'), o(0.3, { budget: -1, tempo: -3, rischio: -4, soddisfazione: -4 }, 'Spazio stretto: ospiti stipati, ma tutto si fa.')] },
          { label: 'Puntare sul bel tempo', principle: 'Anticipare il secondo ordine', hint: 'Zero costo, ma esposto a una coda pesante.', out: [o(0.65, { soddisfazione: 6, rischio: 2 }, 'Bel tempo: evento splendido.'), o(0.35, { budget: -6, soddisfazione: -14, rischio: 22 }, 'Pioggia: improvvisi rimedi costosi e ospiti scontenti.')] }
        ] },
      { id: 'ev-sponsor', lv: 5, text: 'Un\'azienda ti offre 12 k€ di sponsorizzazione, ma chiede uno slot di 40 minuti sul palco principale e il logo ovunque. Un\'altra offre 5 k€ con solo uno stand. Potresti anche non avere sponsor.',
        choices: [
          { label: 'Sponsor da 12 k€ con slot sul palco', principle: 'Costo opportunità', hint: 'Soldi subito, ma il programma diventa meno puro.', out: [o(0.6, { budget: 12, tempo: -5, soddisfazione: -2, rischio: 0 }, 'Lo slot è accettabile e il budget respira.'), o(0.4, { budget: 12, tempo: -7, soddisfazione: -12, rischio: 4 }, 'Il pubblico percepisce la pubblicità invadente.')] },
          { label: 'Sponsor da 5 k€ con stand', principle: 'Reversibilità', out: [o(1, { budget: 5, tempo: -3, soddisfazione: 2 }, 'Aiuto contenuto, programma intatto.')] },
          { label: 'Nessuno sponsor, ridurre i costi altrove', principle: 'Anticipare il secondo ordine', out: [o(1, { tempo: -1, soddisfazione: 3, rischio: 4 }, 'Programma libero, ma sei più esposto sul budget.')] }
        ] },
      { id: 'ev-permessi', lv: 5, text: 'Per 300 persone servono permessi: agibilità, piano di sicurezza antincendio, occupazione suolo. Puoi seguire la pratica tu stesso (12 giorni, rischio di errori), affidarti a un consulente (3 k€, 4 giorni) o chiedere una deroga rapida.',
        choices: [
          { label: 'Pratica fai-da-te (12 giorni)', principle: 'Collo di bottiglia', out: [o(0.6, { tempo: -12, rischio: -8 }, 'Pratica a posto, ma tempo mangiato.'), o(0.4, { tempo: -14, rischio: 8, budget: -1 }, 'Errori nei moduli: la pratica va rifatta.')] },
          { label: 'Consulente (3 k€, 4 giorni)', principle: 'Costo opportunità', out: [o(0.9, { budget: -3, tempo: -4, rischio: -12 }, 'Documenti in regola e consegnati in tempo.'), o(0.1, { budget: -3, tempo: -7, rischio: -6 }, 'Ritardi burocratici, ma si chiude.')] },
          { label: 'Chiedere deroga rapida', principle: 'Anticipare il secondo ordine', hint: 'Veloce ma può essere negata: vuoi davvero scommettere sulla sicurezza?', out: [o(0.5, { tempo: -2, rischio: -2 }, 'La deroga è concessa, ma con limiti di capienza.'), o(0.5, { tempo: -8, budget: -2, rischio: 14 }, 'Deroga negata: ricominci a ridosso dell\'evento.')] }
        ] },
      { id: 'ev-relatore', lv: 6, text: 'Il relatore principale, quello che attirava metà dei partecipanti, cancella per motivi di salute a dieci giorni dall\'evento. Puoi chiamare una sostituta nota ma costosa (9 k€), riorganizzare il programma con relatori interni, oppure rinviare l\'evento.',
        choices: [
          { label: 'Sostituta nota (9 k€)', principle: 'Reversibilità', out: [o(0.8, { budget: -9, tempo: -3, soddisfazione: 6, rischio: -2 }, 'La nuova ospite convince e il programma regge.'), o(0.2, { budget: -9, tempo: -4, soddisfazione: -2, rischio: 6 }, 'Si libera all\'ultimo e arriva stanca: intervento scialbo.')] },
          { label: 'Programma con relatori interni', principle: 'Costo opportunità', out: [o(0.5, { tempo: -6, soddisfazione: -2, rischio: 4 }, 'Il programma regge, ma senza grande richiamo.'), o(0.5, { tempo: -6, soddisfazione: -12, rischio: 10 }, 'Richieste di rimborso e pubblico deluso.')] },
          { label: 'Rinviare di tre settimane', principle: 'Anticipare il secondo ordine', hint: 'Evita il peggio ma costa giorni e contratti da rinegoziare.', out: [o(1, { budget: -6, tempo: -14, soddisfazione: -3, rischio: -4 }, 'Rinvio ordinato, ma costi e logistica da rifare.')] }
        ] },
      { id: 'ev-ritardo', lv: 6, text: 'Il fornitore di audio e luci avvisa che le attrezzature arriveranno con 5 giorni di ritardo. Puoi affittare impianto sostitutivo (7 k€), aspettare e comprimere il montaggio, o cambiare fornitore.',
        choices: [
          { label: 'Affittare impianto sostitutivo (7 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -7, tempo: -2, rischio: -6 }, 'Problema risolto subito.')] },
          { label: 'Aspettare e comprimere il montaggio', principle: 'Collo di bottiglia', out: [o(0.55, { tempo: -4, rischio: 4 }, 'Montaggio in extremis ma riuscito.'), o(0.45, { tempo: -5, rischio: 16, soddisfazione: -6, budget: -2 }, 'Prove tecniche saltate: l\'audio gracchia il giorno dell\'apertura.')] },
          { label: 'Cambiare fornitore', principle: 'Reversibilità', out: [o(0.65, { budget: -5, tempo: -8, rischio: -2, soddisfazione: 2 }, 'Il nuovo fornitore è più affidabile, ma perdi giorni.'), o(0.35, { budget: -8, tempo: -10, rischio: 8 }, 'Nuovo contratto e nuove incognite.')] }
        ] },
      { id: 'ev-headcount', lv: 7, text: 'A due settimane dall\'evento le iscrizioni salgono a 380, ma la sede regge 340. Puoi chiudere le iscrizioni (lista d\'attesa), aggiungere una sala video collegata (6 k€) o ampliare con tensostruttura e personale (10 k€).',
        choices: [
          { label: 'Chiudere le iscrizioni a 340', principle: 'Collo di bottiglia', out: [o(1, { tempo: -2, soddisfazione: -6, rischio: -4 }, 'Sede in regola, ma resta fuori chi voleva venire.')] },
          { label: 'Sala video collegata (6 k€)', principle: 'Ridondanza/buffer', out: [o(0.75, { budget: -6, tempo: -4, soddisfazione: 6, rischio: 0 }, 'Tutti dentro; la seconda sala funziona bene.'), o(0.25, { budget: -7, tempo: -5, soddisfazione: -2, rischio: 8 }, 'Collegamento instabile e lamentele.')] },
          { label: 'Ampliare con tensostruttura (10 k€)', principle: 'Costo opportunità', hint: 'Costa molto e richiede nuovi permessi: valuta tempo e rischio.', out: [o(0.6, { budget: -10, tempo: -8, soddisfazione: 10, rischio: 2 }, 'Tutti accolti e clima eccellente.'), o(0.4, { budget: -12, tempo: -10, soddisfazione: 2, rischio: 16 }, 'Nuovi permessi in ritardo: si apre all\'ultimo.')] }
        ] },
      { id: 'ev-sciopero', lv: 8, text: 'Annunciato lo sciopero dei mezzi pubblici nel giorno dell\'evento: molti ospiti arrivano in treno. Puoi organizzare navette (8 k€), spostare l\'inizio del programma di due ore, o confidare che il disagio sia contenuto.',
        choices: [
          { label: 'Navette dalla stazione (8 k€)', principle: 'Ridondanza/buffer', out: [o(0.85, { budget: -8, tempo: -4, soddisfazione: 6, rischio: -8 }, 'Gli ospiti arrivano regolarmente.'), o(0.15, { budget: -8, tempo: -5, soddisfazione: 0, rischio: 0 }, 'Le navette sono insufficienti nei momenti di punta.')] },
          { label: 'Spostare l\'inizio di due ore', principle: 'Reversibilità', out: [o(0.7, { tempo: -3, soddisfazione: -3, rischio: -3 }, 'Si recupera sulla puntualità, a scapito del programma.'), o(0.3, { tempo: -4, soddisfazione: -9, rischio: 6 }, 'Slittano contratti di relatori e catering: confusione.')] },
          { label: 'Confidare nel buon senso', principle: 'Anticipare il secondo ordine', out: [o(0.5, { soddisfazione: 0, rischio: 2 }, 'Quasi tutti arrivano in qualche modo.'), o(0.5, { soddisfazione: -14, rischio: 14, budget: -2 }, 'Sala mezza vuota e inizio caotico.')] }
        ] },
      { id: 'ev-allergie', lv: 7, text: 'Dalle iscrizioni emergono 28 richieste di menù speciali (allergie gravi, celiachia, vegani). Puoi far gestire tutto dal catering con etichettatura rigorosa (3 k€), tenere un unico menù con alternativa generica o chiedere a ognuno di portare il proprio cibo.',
        choices: [
          { label: 'Menù dedicati con etichette e procedure (3 k€)', principle: 'Ridondanza/buffer', out: [o(1, { budget: -3, tempo: -3, soddisfazione: 6, rischio: -12 }, 'Allergie sotto controllo e ospiti rassicurati.')] },
          { label: 'Un menù con alternativa generica', principle: 'Anticipare il secondo ordine', out: [o(0.7, { tempo: -1, soddisfazione: -2, rischio: 4 }, 'Il pasto scorre senza incidenti.'), o(0.3, { budget: -5, tempo: -2, soddisfazione: -10, rischio: 22 }, 'Una reazione allergica richiede l\'ambulanza: immagine rovinata.')] },
          { label: 'Ognuno porta il proprio cibo', principle: 'Costo opportunità', out: [o(1, { tempo: -1, soddisfazione: -8, rischio: 0 }, 'Poco costoso ma poco ospitale: molti brontolano.')] }
        ] }
    ]
  });
})(window.ST = window.ST || {});
