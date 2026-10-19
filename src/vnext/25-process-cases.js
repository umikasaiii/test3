/* vNext M3 — scenari pilota per Crisis Management e Strategic Communication (4). Valutati sul processo; vedi 24-process.js. */
(function (ST) {
  'use strict';
  const P = ST.sma.process;
  const o = (label, proc, why, next, fx, risk, flag) => Object.assign({ label, proc, why, next, fx: fx || {} }, risk ? { risk } : {}, flag ? { flag } : {});

  P.add({ id: 'proc-progetto-ritardo', kind: 'crisis', level: 'L2', title: 'Il progetto in ritardo',
    intro: 'Sei il responsabile di un progetto per un cliente. A tre settimane dalla fine mancano ancora tre settimane di lavoro e resta il 10% del budget. Le informazioni sono incomplete e le persone sono stanche.',
    vars: { ritardo: { label: 'Ritardo stimato', start: 3, min: 0, max: 8, unit: 'sett.' }, budget: { label: 'Budget residuo', start: 10, min: 0, max: 20, unit: '%' }, fiducia: { label: 'Fiducia del cliente', start: 60, min: 0, max: 100 }, morale: { label: 'Morale del team', start: 70, min: 0, max: 100 } },
    weights: { ritardo: -2, fiducia: 2, morale: 1, budget: 1 }, start: 'n1',
    nodes: {
      n1: { text: 'Il responsabile tecnico ti avvisa del ritardo. Che cosa fai per prima cosa?', opts: [
        o('Riunisci il team per capire cause e stato reale dei lavori', 3, 'Prima di decidere serve sapere dove sei davvero: una diagnosi rapida riduce il rischio di agire sul problema sbagliato.', 'n2', { morale: 5 }),
        o('Chiedi subito budget aggiuntivo al cliente, senza un’analisi', 1, 'Chiedere risorse senza sapere a cosa servono indebolisce la richiesta e la credibilità.', 'n2', { fiducia: -10 }),
        o('Imponi straordinari a tutti da subito', 1, 'Una misura generica senza diagnosi: costa energia al team e non è detto che tocchi la causa.', 'n2', { morale: -15, ritardo: -0.5 }, { p: 0.3, fx: { morale: -10 }, text: 'Due persone si ammalano per la stanchezza.' })] },
      n2: { text: 'Dalla diagnosi emergono tre problemi: un fornitore in ritardo, un requisito ambiguo e un collaboratore sovraccarico. Non sai ancora quanto costi risolvere il requisito. Come scegli le priorità?', opts: [
        o('Ordini i problemi per impatto e urgenza, affronti fornitore e requisito per primi e prepari un piano B', 3, 'Una priorità esplicita con alternativa contingente è la base di una decisione sotto incertezza.', 'n3', { ritardo: -1.5 }),
        o('Li affronti tutti e tre insieme con tutto il team', 1, 'Senza priorità le forze si disperdono e i colli di bottiglia restano.', 'n3', { ritardo: -0.5, morale: -10 }),
        o('Aspetti di avere dati completi prima di muoverti', 0, 'Aspettare l’informazione perfetta ha un costo: il tempo scorre e le opzioni si riducono.', 'n3', { ritardo: 1 })] },
      n3: { text: 'Il cliente chiede aggiornamenti sullo stato del progetto. Come comunichi il ritardo?', opts: [
        o('Comunichi subito il ritardo con cause, impatto e due opzioni (ridurre l’ambito o spostare la consegna)', 3, 'Trasparenza e alternative concrete costruiscono fiducia anche quando la notizia è sgradita; resta un rischio che il cliente reagisca male.', 'n4', { fiducia: 10 }, { p: 0.25, fx: { fiducia: -15 }, text: 'Il cliente reagisce con durezza, indipendentemente dalla qualità della comunicazione.' }),
        o('Aspetti di aver recuperato qualcosa prima di dire nulla', 1, 'Il silenzio sembra sicurezza ma, quando il ritardo emerge, il danno alla fiducia è maggiore.', 'n4', { fiducia: -10 }),
        o('Minimizzi il ritardo e prometti la data originale', 0, 'Promettere ciò che non puoi mantenere è inganno: non è un processo accettabile anche se a breve termine calma il cliente.', 'n4', { fiducia: 5 }, { p: 0.6, fx: { fiducia: -40 }, text: 'Il cliente scopre il ritardo reale e perde fiducia.' }, 'manip')] },
      n4: { text: 'Devi decidere come chiudere il progetto.', opts: [
        o('Concordi con il cliente una riduzione dell’ambito al minimo di valore', 3, 'Rivedere i vincoli di comune accordo è spesso la mossa più robusta quando le risorse sono fisse.', null, { ritardo: -2, morale: 5 }),
        o('Concordi uno spostamento della consegna di due settimane', 2, 'Soluzione accettabile se il cliente può aspettare; non risolve però il problema di fondo.', null, { ritardo: -2.5, fiducia: -5 }),
        o('Aggiungi persone al progetto in ritardo', 1, 'Aggiungere persone tardi spesso rallenta (formazione, coordinamento): non è una soluzione affidabile.', null, { budget: -8, ritardo: -0.5 }, { p: 0.5, fx: { ritardo: 1 }, text: 'Il nuovo personale richiede tempo di formazione e rallenta il team.' })] }
    },
    explain: 'In una crisi la qualità del processo (diagnosi, priorità esplicite, comunicazione trasparente, revisione dei vincoli) è l’unica parte che controlli: l’esito dipende anche da eventi esterni. Una buona decisione può finire male (il cliente reagisce comunque con durezza) e una cattiva può finire bene per caso. Qui conta distinguere le due cose.' });

  P.add({ id: 'proc-allarme-contraddittorio', kind: 'crisis', level: 'L3', title: 'Allarmi contraddittori',
    intro: 'Sei il referente tecnico di un servizio interno. Il monitoraggio segnala un picco anomalo, ma i dati non sono coerenti: un avviso indica un lavoro di backup, mentre un utente segnala accessi strani. Hai poco tempo e informazioni contrastanti.',
    vars: { danno: { label: 'Danno potenziale', start: 30, min: 0, max: 100 }, fiducia: { label: 'Fiducia degli utenti', start: 70, min: 0, max: 100 }, fermo: { label: 'Fermo del servizio', start: 0, min: 0, max: 12, unit: 'ore' }, morale: { label: 'Morale del team', start: 70, min: 0, max: 100 } },
    weights: { danno: -2, fiducia: 2, fermo: -1, morale: 1 }, start: 'n1',
    nodes: {
      n1: { text: 'I segnali sono contrastanti. Qual è la prima azione?', opts: [
        o('Isoli l’account sospetto e verifichi i log in parallelo, tenendo il servizio attivo', 3, 'Un’azione reversibile e proporzionata limita il danno mentre raccogli informazioni per distinguere le ipotesi.', 'n2', { danno: -15 }),
        o('Interrompi subito l’intero servizio senza verificare', 1, 'Reazione drastica e costosa senza dati: elimina il rischio ma crea un danno certo.', 'n2', { danno: -20, fermo: 5, fiducia: -10 }),
        o('Consideri tutto un falso allarme da backup e prosegui', 0, 'Ignorare un segnale concorrente solo perché l’ipotesi innocua è più comoda è un errore di ragionamento.', 'n2', { danno: 20 }, { p: 0.5, fx: { danno: 20 }, text: 'Gli accessi anomali erano reali e la situazione peggiora.' })] },
      n2: { text: 'Gli utenti chiedono che cosa sta succedendo. Come comunichi?', opts: [
        o('Dici che cosa sai, che cosa non sai ancora e quando ci sarà il prossimo aggiornamento', 3, 'Distinguere il noto dall’ignoto e dare un orario del prossimo aggiornamento riduce il panico e protegge la credibilità.', 'n3', { fiducia: 10 }),
        o('Aspetti di avere la certezza prima di comunicare', 1, 'Il silenzio lascia spazio a voci e supposizioni.', 'n3', { fiducia: -8 }),
        o('Dici che è tutto sotto controllo e non c’è alcun problema', 0, 'Rassicurare senza fondamento è inganno e si ritorce contro quando emerge la verità.', 'n3', { fiducia: 5 }, { p: 0.5, fx: { fiducia: -30 }, text: 'Emergono prove del problema reale e gli utenti si sentono presi in giro.' }, 'manip')] },
      n3: { text: 'La situazione è sotto controllo. Come chiudi l’episodio?', opts: [
        o('Fai una revisione senza colpe, documenti cause e azioni correttive con responsabili e scadenze', 3, 'La revisione senza ricerca di colpe trasforma l’errore in miglioramento misurabile.', null, { danno: -10, morale: 10 }),
        o('Chiudi il caso senza documentare nulla', 0, 'Senza documentazione l’errore si ripeterà e nessuno impara.', null, { morale: -5 }),
        o('Individui un colpevole e lo richiami davanti a tutti', 0, 'Attribuire la colpa alle persone invece che al processo scoraggia le segnalazioni future.', null, { morale: -25, fiducia: -5 })] }
    },
    explain: 'Con informazioni contraddittorie la mossa robusta è quella reversibile e proporzionata, che raccoglie dati senza chiudere le alternative. Comunicare ciò che si sa e ciò che non si sa mantiene la fiducia più di una rassicurazione vuota. Questo scenario è difensivo e didattico: non descrive tecniche d’attacco.' });

  P.add({ id: 'proc-conflitto-priorita', kind: 'comm', level: 'L2', title: 'Due colleghi, due priorità',
    intro: 'Due colleghi si contendono la stessa priorità: Marta vuole finire prima il modulo A, Luca il modulo B. Il disaccordo sta diventando personale. Sei un collega di pari livello che ha la fiducia di entrambi.',
    vars: { relazione: { label: 'Relazione fra i due', start: 40, min: 0, max: 100 }, accordo: { label: 'Accordo raggiunto', start: 0, min: 0, max: 100 }, tensione: { label: 'Tensione', start: 70, min: 0, max: 100 } },
    weights: { accordo: 2, relazione: 2, tensione: -1 }, start: 'n1',
    nodes: {
      n1: { text: 'Marta e Luca ti raccontano le loro posizioni separatamente. Come cominci?', opts: [
        o('Ascolti entrambi e riformuli ciò che ciascuno vuole ottenere davvero (interessi), non solo la posizione', 3, 'Distinguere interessi e posizioni apre soluzioni che le posizioni da sole escludono.', 'n2', { tensione: -15, relazione: 10 }),
        o('Dai ragione a chi parla per ultimo per chiudere in fretta', 1, 'Compiacere evita il conflitto sul momento ma lo lascia irrisolto e perde fiducia.', 'n2', { tensione: -5, relazione: -10 }),
        o('Minacci di riferire tutto al responsabile se non si mettono d’accordo', 0, 'La minaccia è coercizione: ottiene obbedienza, non accordo, e danneggia la relazione.', 'n2', { tensione: 10, relazione: -20 }, null, 'manip')] },
      n2: { text: 'Emerge che Marta teme di non rispettare una scadenza e Luca teme di lasciare il cliente senza una funzione importante. Come procedi?', opts: [
        o('Metti entrambi allo stesso tavolo e li inviti a elencare vincoli e criteri comuni prima delle soluzioni', 3, 'Criteri condivisi rendono la scelta meno personale e più verificabile.', 'n3', { accordo: 25, tensione: -10 }),
        o('Proponi tu la soluzione e chiedi di accettarla', 2, 'Può funzionare ma non crea ownership e può essere vista come imposizione.', 'n3', { accordo: 15 }),
        o('Presenti a ognuno solo ciò che gli conviene sull’altro per spingerli a cedere', 0, 'Manipolare le informazioni distorce la fiducia: non è mai premiato, anche se funziona.', 'n3', { accordo: 15, relazione: -20 }, { p: 0.5, fx: { relazione: -20 }, text: 'Scoprono che hai filtrato le informazioni.' }, 'manip')] },
      n3: { text: 'Hanno individuato due opzioni: modulo A in due settimane e B in quattro, oppure un compromesso con una versione ridotta di entrambi. Che cosa fai per chiudere?', opts: [
        o('Chiedi a ciascuno di verificare l’opzione, fissate criteri di successo e una data di revisione', 3, 'Un accordo con criteri e revisione rende il risultato verificabile e correggibile.', null, { accordo: 30, relazione: 10, tensione: -15 }),
        o('Dichiari l’accordo concluso senza fissare nulla', 1, 'Un accordo vago si sfalda al primo intoppo.', null, { accordo: 10 }),
        o('Lasci che decidano da soli senza seguire', 1, 'Nessun follow-up: il rischio è che il conflitto riemerga.', null, { accordo: 5, tensione: -5 })] }
    },
    explain: 'Nella gestione di un disaccordo il processo che funziona è ascoltare, riformulare gli interessi, concordare criteri e verificare. Minacce, filtri sull’informazione e compiacenza possono dare un risultato a breve termine ma non vengono premiati: l’obiettivo è un accordo robusto e una relazione che regge.' });

  P.add({ id: 'proc-negoziare-scadenza', kind: 'comm', level: 'L3', title: 'Negoziare più tempo',
    intro: 'Devi consegnare un lavoro importante, ma con le risorse attuali la scadenza di venerdì è irrealistica. Devi chiedere più tempo al tuo responsabile, che è sotto pressione a sua volta.',
    vars: { accordo: { label: 'Accordo ottenuto', start: 0, min: 0, max: 100 }, relazione: { label: 'Relazione col responsabile', start: 60, min: 0, max: 100 }, tensione: { label: 'Tensione', start: 50, min: 0, max: 100 } },
    weights: { accordo: 2, relazione: 2, tensione: -1 }, start: 'n1',
    nodes: {
      n1: { text: 'Come prepari la conversazione?', opts: [
        o('Chiarisci il tuo obiettivo, le tue alternative e che cosa interessa davvero al responsabile', 3, 'Conoscere i propri interessi e quelli dell’altro e le alternative disponibili è la base di una negoziazione informata.', 'n2', { tensione: -10 }),
        o('Vai senza preparazione e improvvisi', 1, 'L’improvvisazione aumenta il rischio di accettare un accordo peggiore o di irrigidirsi.', 'n2', {}),
        o('Prepari una scusa sul fatto che un altro progetto ti sta bloccando, anche se non è vero', 0, 'Inventare giustificazioni è inganno: minaccia la fiducia e la relazione nel lungo periodo.', 'n2', { relazione: -5 }, { p: 0.4, fx: { relazione: -25 }, text: 'Il responsabile verifica e scopre che non è vero.' }, 'manip')] },
      n2: { text: 'Nella conversazione, come formuli la richiesta?', opts: [
        o('Spieghi la situazione con dati, proponi due opzioni (consegna ridotta venerdì o completa tra una settimana) e chiedi quale preferisce', 3, 'Presentare alternative concrete sposta la discussione dal «sì/no» alla scelta fra opzioni.', 'n3', { accordo: 40, relazione: 5 }),
        o('Dici che non puoi consegnare e che deve spostare la scadenza', 1, 'Un ultimatum senza alternative chiude il dialogo.', 'n3', { accordo: 10, tensione: 20 }),
        o('Minacci di non lavorare più sul progetto se non ottieni più tempo', 0, 'La minaccia è coercizione: non è un metodo di negoziazione accettabile.', 'n3', { accordo: 15, relazione: -25, tensione: 25 }, null, 'manip')] },
      n3: { text: 'Il responsabile accetta in parte e chiede garanzie. Come concludi?', opts: [
        o('Confermi per iscritto che cosa consegnerai e quando, e fissi un controllo intermedio', 3, 'Mettere per iscritto riduce i fraintendimenti e protegge entrambi.', null, { accordo: 30, relazione: 10, tensione: -10 }),
        o('Accetti a voce tutto ciò che chiede per chiudere in fretta', 1, 'Accettare tutto per evitare tensione ti espone a impegni irrealistici.', null, { accordo: 10, tensione: 10 }),
        o('Ringrazi e vai via senza fissare i dettagli', 1, 'Un accordo non verificabile rischia di riaprirsi alla prima difficoltà.', null, { accordo: 15 })] }
    },
    explain: 'Negoziare in modo etico significa preparare obiettivi e alternative, capire gli interessi dell’altro, proporre opzioni concrete e mettere l’accordo per iscritto. Bluff, scuse inventate e minacce possono ottenere qualcosa nell’immediato ma danneggiano la fiducia e non vengono mai premiate.' });
})(window.ST = window.ST || {});
