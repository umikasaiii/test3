/* SkillTree — scenari di simulazione a carte (parte H, cultura e abilità pratiche): bilancio personale, viaggio, ristrutturazione, escursione, emergenze domestiche, imparare una abilità. Situazioni inventate; scopo didattico, nessuna consulenza medica o finanziaria. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  const mk = keys => {
    const f = a => { const r = {}; keys.forEach((k, i) => { if (a[i]) r[k] = a[i]; }); return r; };
    return (label, principle, p, A, tA, B, tB) => ({ label, principle, out: [o(p, f(A), tA), o(Math.round((1 - p) * 1000) / 1000, f(B), tB)] });
  };
  const card = (id, lv, text, choices) => { let h = 0; for (let i = 0; i < id.length; i++) h += id.charCodeAt(i) * (i + 1); const r = h % choices.length; return { id, lv, text, choices: choices.slice(r).concat(choices.slice(0, r)) }; };

  /* ---- 1) Bilancio personale di un anno ---- */
  const c1 = mk(['fondo', 'risparmio', 'debiti', 'serenita']);
  SIM.register({
    id: 'cul-budget', subject: 'sec', title: 'Un anno di bilancio personale', icon: '💶',
    intro: 'Hai un lavoro stabile ma non ricco, qualche rata da chiudere e un fondo d’emergenza ancora magro. Nei prossimi dodici mesi arrivano spese fisse, prezzi che salgono, imprevisti e tentazioni. Ogni scelta sposta fondo d’emergenza, risparmio, debiti e serenità. Non è consulenza finanziaria: è un allenamento a ragionare su costi, rischi e margini. Il finale premia chi protegge prima la base e poi guarda ai rendimenti.',
    vars: {
      fondo: { label: 'Fondo d’emergenza', start: 25, min: 0, max: 100 },
      risparmio: { label: 'Risparmio e investimenti', start: 20, min: 0, max: 100 },
      debiti: { label: 'Debiti e rate', start: 40, min: 0, max: 100 },
      serenita: { label: 'Serenità e flessibilità', start: 50, min: 0, max: 100 }
    },
    weights: { fondo: 0.8, risparmio: 1.2, debiti: -1.2, serenita: 0.6 },
    penalties: [],
    turns: 6, utilText: '0,8 × fondo + 1,2 × risparmio − 1,2 × debiti + 0,6 × serenità',
    cards: [
      card('b-gennaio', 1, 'Gennaio. Hai davanti entrate nette di 1.600 € al mese e spese fisse (affitto, bollette, trasporti) che ne assorbono circa il 65%. Come imposti l’anno?', [
        c1('Fissi un tetto alle spese variabili e sposti il risparmio il giorno dello stipendio', 'Pagare prima se stessi', 0.8, [4, 8, -1, 3], 'Il risparmio automatico parte senza forza di volontà e il mese torna.', [2, 4, 0, -1], 'Il tetto è troppo stretto per un paio di mesi, ma ti abitui.'),
        c1('Tieni il conto a occhio e risparmi quel che avanza a fine mese', 'Risparmio residuale', 0.4, [2, 5, 0, 2], 'Un mese avanza qualcosa e ne approfitti.', [-1, -3, 2, -2], 'Di solito non avanza niente e il fondo non cresce.'),
        c1('Tagli drasticamente ogni spesa non essenziale per tutto l’anno', 'Austerità estrema', 0.5, [4, 7, -1, -4], 'Risparmi molto, ma la vita sociale si spegne.', [1, 2, 0, -9], 'Dopo tre mesi molli e recuperi con acquisti compensativi.')
      ]),
      card('b-abbonamenti', 1, 'Febbraio. Rileggi l’estratto conto e trovi sei abbonamenti, di cui tre che usi di rado. Valgono circa 45 € al mese.', [
        c1('Disdici quelli che non usi da tre mesi e tieni gli altri', 'Revisione delle spese ricorrenti', 0.85, [3, 6, 0, 2], 'Recuperi quasi 30 € al mese senza rinunciare a nulla di importante.', [1, 3, 0, 0], 'Uno dei servizi disdetti ti manca e lo riattivi a prezzo pieno.'),
        c1('Li tieni tutti: sono poca cosa rispetto allo stipendio', 'Piccole perdite', 0.5, [0, 0, 0, 2], 'Ti evitano fastidio e non pesano.', [-2, -4, 1, -1], 'Alla fine dell’anno sono quasi 540 € buttati.'),
        c1('Disdici tutto e rinunci a ogni servizio a pagamento', 'Taglio indiscriminato', 0.55, [3, 5, 0, -3], 'Risparmi molto e ti abitui.', [1, 2, 0, -8], 'Rinunci anche a ciò che ti dava svago e ti senti punito.')
      ]),
      card('b-fondo', 2, 'Marzo. Ricevi una gratifica di 800 €. Hai 40 € di rata mensile su un finanziamento al 9% e un fondo d’emergenza di meno di un mese di spese.', [
        c1('Dividi: una parte al fondo d’emergenza, una parte anticipa il debito caro', 'Priorità per costo e rischio', 0.8, [8, 2, -7, 4], 'Il fondo sale e il debito al 9% cala.', [6, 1, -5, 2], 'Il tasso resta alto per qualche mese, ma sei più coperto.'),
        c1('Metti tutto in un investimento che rende il 5% annuo', 'Rendimento atteso contro costo del debito', 0.5, [0, 7, 1, 1], 'Il rendimento c’è, ma meno del 9% che paghi.', [-2, 3, 2, -3], 'Il valore oscilla e resti scoperto se serve liquidità.'),
        c1('Ti concedi un viaggio di premio da 800 €', 'Gratificazione immediata', 0.7, [-4, -5, 2, 8], 'Ti rigeneri, ma il fondo resta fragile.', [-6, -7, 3, 3], 'Il viaggio costa più del previsto.')
      ]),
      card('b-offerta', 2, 'Aprile. Una vetrina dice «ultimi 3 pezzi, sconto 40%» su un televisore da 700 €. Il tuo ha cinque anni e funziona ancora.', [
        c1('Lo compri: 420 € per un risparmio di 280 € sono un affare', 'Sconto come ancoraggio', 0.4, [-5, -6, 2, 4], 'Ti piace, ma spendi 420 € che non avevi pianificato.', [-8, -9, 3, -2], 'Il prezzo pieno era gonfiato: il vero «risparmio» era piccolo.'),
        c1('Aspetti una settimana, controlli il prezzo storico e se serve lo metti in lista', 'Raffreddare l’impulso', 0.8, [1, 2, 0, 3], 'Scopri che non lo vuoi davvero e tieni i soldi.', [0, 0, 0, 1], 'L’offerta è finita e non ti cambia nulla.'),
        c1('Ignori l’offerta e non guardi più nemmeno le vetrine', 'Evitamento', 0.6, [0, 1, 0, 0], 'Niente tentazioni.', [-1, -1, 0, -3], 'Ti senti ingabbiato e poi recuperi altrove.')
      ]),
      card('b-assicura', 3, 'Maggio. Ti propongono una polizza «tutto compreso» da 38 € al mese. Hai già l’assicurazione obbligatoria, ma non una copertura per i danni alla casa in affitto.', [
        c1('Leggi condizioni, franchigie ed esclusioni e scegli solo la copertura che serve davvero', 'Copertura mirata al rischio grave', 0.75, [-1, -2, 0, 6], 'Paghi poco per coprire un danno che non potresti sostenere.', [-2, -3, 0, 3], 'Una franchigia alta limita il rimborso, ma resta utile.'),
        c1('Accetti la polizza completa: meglio non pensarci', 'Pagare per tranquillità', 0.5, [-3, -6, 0, 5], 'Ti senti coperto, anche se paghi per rischi minimi.', [-5, -8, 0, 0], 'Le esclusioni ti lasciano scoperto proprio sui casi più probabili.'),
        c1('Non assicuri nulla: tanto non succede mai', 'Rischio non coperto', 0.7, [2, 3, 0, 1], 'Per ora risparmi.', [-12, -8, 6, -7], 'Un allagamento ti costa migliaia di euro.')
      ]),
      card('b-inflazione', 3, 'Giugno. I prezzi della spesa salgono più dello stipendio e hai 2.000 € fermi sul conto. Come reagisci?', [
        c1('Tieni sul conto 3 mesi di spese e sposti il resto in strumenti prudenti e semplici', 'Liquidità e protezione dal potere d’acquisto', 0.7, [2, 7, 0, 3], 'Il fondo resta accessibile e il resto sta al passo con i prezzi.', [1, 3, 0, 0], 'I rendimenti prudenti sono modesti ma non perdi.'),
        c1('Lasci tutto sul conto: almeno è sicuro', 'Falsa sicurezza', 0.5, [1, -1, 0, 2], 'Sembra tranquillo, ma il potere d’acquisto cala.', [0, -4, 0, -1], 'L’inflazione erode i risparmi più del previsto.'),
        c1('Compri subito un bene durevole prima che rincari', 'Anticipo di acquisti', 0.35, [-3, -3, 1, 3], 'Il prezzo sale davvero e ci guadagni qualcosa.', [-6, -7, 2, -2], 'Il prezzo non cambia: hai solo speso prima.')
      ]),
      card('b-amico', 4, 'Luglio. Un amico ti chiede 600 € in prestito «per due settimane». Con il tuo fondo non sei del tutto tranquillo.', [
        c1('Presti solo la cifra che potresti anche non rivedere e lo dici in modo chiaro', 'Prestare ciò che si può perdere', 0.7, [-2, -1, 0, 4], 'Presti una somma più piccola e il rapporto resta limpido.', [-3, -2, 0, 1], 'Non restituisce, ma la somma era sopportabile.'),
        c1('Presti i 600 € per intero: l’amicizia vale più dei soldi', 'Pressione sociale', 0.4, [-6, -4, 1, 5], 'Ti restituisce in tempo e lo ringrazi.', [-12, -8, 3, -4], 'Non restituisce e il tuo fondo si svuota.'),
        c1('Rifiuti senza spiegazioni', 'Rifiuto secco', 0.7, [1, 1, 0, -2], 'Il rapporto si raffredda un po’.', [1, 0, 0, -6], 'Ti senti in colpa e la tensione dura.')
      ]),
      card('b-imprevisto', 5, 'Agosto. La caldaia si rompe: riparazione da 450 €, in pieno periodo di ferie. Il fondo d’emergenza copre appena la cifra.', [
        c1('Paghi con il fondo d’emergenza: è il suo scopo, poi lo ricostruisci', 'Usare il fondo per ciò per cui esiste', 0.85, [-8, 0, 0, 5], 'Risolvi in fretta e senza debiti.', [-9, -1, 0, 2], 'Il lavoro costa un po’ di più, ma niente interessi.'),
        c1('Paghi con la carta a rate e lasci il fondo intatto', 'Debito per conservare liquidità', 0.5, [1, 0, 6, 1], 'Il tasso è basso, ma devi rimborsarlo.', [0, -2, 9, -2], 'Gli interessi vanno oltre le attese.'),
        c1('Rimandi la riparazione e usi stufette elettriche', 'Rinvio di una spesa necessaria', 0.4, [3, 1, 0, -2], 'Per ora regge.', [-5, -3, 2, -8], 'Si guasta ancora e la riparazione costa di più.')
      ]),
      card('b-investimento', 5, 'Settembre. Un collega ti parla di un «investimento sicuro» al 18% annuo, senza rischi. Hai 1.200 € di risparmi liberi.', [
        c1('Rifiuti: rendimenti alti e «sicuri» non esistono e chiedi quali sono i rischi', 'Rischio e rendimento vanno insieme', 0.9, [1, 4, 0, 4], 'Eviti una probabile truffa e mantieni i tuoi risparmi.', [0, 2, 0, 1], 'Il collega si offende, ma i soldi restano al sicuro.'),
        c1('Investi metà della somma per «provare»', 'Prova a metà', 0.25, [-1, 6, 0, 3], 'Per qualche mese incassi, poi sparisce tutto.', [-4, -8, 2, -5], 'Il promotore sparisce e perdi 600 €.'),
        c1('Investi tutto: se fosse una truffa si saprebbe', 'Fiducia ingenua', 0.1, [0, 8, 0, 4], 'Ti va bene per un po’.', [-8, -14, 3, -9], 'Perdi tutto e ti senti sciocco.')
      ]),
      card('b-tredicesima', 6, 'Novembre. Arriva la tredicesima da 1.100 €. Il fondo è sotto i tre mesi di spese, hai ancora 800 € di debito a rate.', [
        c1('Porti il fondo a una soglia più sicura e con il resto riduci il debito caro', 'Sequenza delle priorità', 0.8, [8, 3, -6, 4], 'La base è più solida e la rata cala.', [6, 2, -4, 2], 'Resta qualche piccolo imprevisto, ma sei coperto.'),
        c1('Spendi per regali e feste: è un’occasione', 'Spesa stagionale', 0.6, [-3, -4, 1, 6], 'Un po’ di svago, ma il bilancio ne risente.', [-6, -7, 3, 2], 'Spendi più del previsto.'),
        c1('Metti tutto in un fondo azionario globale', 'Investire senza base', 0.5, [-3, 8, 2, 1], 'Il mercato sale e il fondo cresce.', [-6, -2, 3, -5], 'Il mercato scende e ti serve liquidità subito.')
      ]),
      card('b-affitto', 7, 'Dicembre. Il padrone di casa propone un aumento dell’affitto di 60 € al mese in cambio di un contratto di 4 anni. Altrove costa meno, ma traslocare ha un costo.', [
        c1('Calcoli il costo totale del trasloco e confronti con l’aumento a quattro anni', 'Costo totale', 0.75, [-1, 3, 0, 5], 'Scegli con i numeri e risparmi sul periodo lungo.', [0, 1, 0, 2], 'I numeri sono quasi pari: decidi senza rimpianti.'),
        c1('Accetti subito: cambiare casa è un’emozione', 'Inerzia', 0.5, [-1, -3, 0, 3], 'Resti nella tua zona.', [-3, -6, 0, 0], 'Il canone resta più alto della media.'),
        c1('Disdici e cerchi in fretta senza fare confronti', 'Decisione frettolosa', 0.4, [-3, 1, 2, 2], 'Trovi un posto buono.', [-8, -5, 5, -6], 'Il nuovo posto costa più di quanto pensavi, tra caparra e spostamenti.')
      ]),
      card('b-bonus', 8, 'Un bonus inatteso di 2.000 €. Hai un fondo da quasi quattro mesi di spese e un debito residuo a tasso basso (3%).', [
        c1('Resti fedele alla sequenza: completi il fondo, poi investi gradualmente a lungo termine', 'Costanza e diversificazione', 0.75, [5, 7, -1, 4], 'Il piano procede e sei più solido.', [4, 3, 0, 1], 'Il mercato oscilla, ma l’orizzonte è lungo.'),
        c1('Estingui subito il debito al 3%', 'Debito a tasso basso', 0.6, [0, 2, -6, 3], 'Ti senti leggero, ma il vantaggio è piccolo.', [-1, 0, -5, 0], 'Resti con meno liquidità del necessario.'),
        c1('Investi tutto in un solo titolo di cui parlano tutti', 'Concentrazione', 0.3, [-1, 10, 1, 3], 'Il titolo sale.', [-6, -9, 3, -6], 'Il titolo crolla e perdi buona parte della somma.')
      ]),
      card('b-licenziamento', 9, 'Voci di tagli in azienda: il tuo contratto scade a primavera. Il fondo copre quattro mesi.', [
        c1('Rafforzi il fondo, aggiorni il CV e rimandi spese grandi finché non è chiaro', 'Preparare il margine', 0.8, [6, 2, 0, 4], 'Il contratto viene rinnovato e sei pronto in ogni caso.', [5, 1, 0, 1], 'Non viene rinnovato, ma hai tempo di cercare.'),
        c1('Compri l’auto che desideri prima che tagliino gli stipendi', 'Spesa per ansia', 0.3, [-6, -4, 6, 2], 'Il lavoro resta e l’auto ti serve.', [-12, -8, 12, -6], 'Resti senza stipendio e con una rata nuova.'),
        c1('Non fai nulla finché non c’è una notizia certa', 'Attesa passiva', 0.5, [0, 0, 0, 1], 'Resta tutto come prima.', [-4, -2, 1, -6], 'Arrivi alla scadenza impreparato.')
      ]),
      card('b-fine-anno', 10, 'Fine anno. Fai il bilancio: il fondo è cresciuto ma non quanto speravi. Ti restano 900 €. Come li usi?', [
        c1('Li distribuisci secondo le priorità: fondo, debito, poi un piccolo premio senza sensi di colpa', 'Equilibrio sostenibile', 0.8, [4, 3, -3, 6], 'Il bilancio chiude in modo ordinato.', [3, 2, -2, 3], 'Il premio è più modesto, ma il piano regge.'),
        c1('Tutto nel fondo, nulla per te', 'Rigidità', 0.6, [6, 3, 0, -4], 'La base è solida, ma la motivazione cala.', [5, 2, 0, -7], 'Il piano diventa una privazione e a gennaio molli.'),
        c1('Spendi tutto: meglio che finisca bene', 'Chiusura in bellezza', 0.5, [-3, -3, 0, 7], 'Un bel Capodanno.', [-4, -5, 2, 2], 'Inizi il nuovo anno senza margine.')
      ])
    ]
  });

  /* ---- 2) Viaggio all'estero di due settimane ---- */
  const c2 = mk(['esperienza', 'budget', 'rischio', 'energia']);
  SIM.register({
    id: 'cul-viaggio', subject: 'sec', title: 'Due settimane all’estero', icon: '🧳',
    intro: 'Parti per un viaggio di due settimane in un paese lontano, con fuso orario diverso, un budget definito e tanta voglia di vedere cose. Ogni scelta sposta qualità del viaggio, budget residuo, rischio (documenti, sicurezza, salute) ed energia. Il viaggio ben riuscito non è quello con più tappe, ma quello con meno imprevisti inutili e più margine quando ne arriva uno.',
    vars: {
      esperienza: { label: 'Qualità del viaggio', start: 30, min: 0, max: 100 },
      budget: { label: 'Budget residuo', start: 60, min: 0, max: 100 },
      rischio: { label: 'Rischio (documenti, sicurezza, salute)', start: 20, min: 0, max: 100 },
      energia: { label: 'Energia e salute', start: 60, min: 0, max: 100 }
    },
    weights: { esperienza: 1.4, budget: 0.6, rischio: -1.2, energia: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,4 × qualità + 0,6 × budget − 1,2 × rischio + 0,5 × energia',
    cards: [
      card('v-documenti', 1, 'Tre settimane prima. Controlli il passaporto: scade fra sette mesi. Il paese di destinazione richiede almeno sei mesi di validità residua all’ingresso, più eventuali formalità.', [
        c2('Verifichi sul sito ufficiale dell’ambasciata o del ministero e predisponi copie digitali e cartacee', 'Fonti ufficiali e ridondanza', 0.9, [4, -2, -8, 2], 'Tutto in regola e hai una copia di scorta.', [3, -3, -4, 1], 'Serve un modulo in più, ma lo scopri con anticipo.'),
        c2('Ti fidi di un forum: «a me non hanno mai controllato»', 'Fonti non verificate', 0.5, [3, 1, -2, 1], 'Per questa volta passa.', [-8, -6, 18, -5], 'Ti negano l’imbarco e rischi di perdere il volo.'),
        c2('Rinnovi in emergenza con corsia veloce, a pagamento', 'Soluzione costosa', 0.6, [2, -6, -4, 1], 'Il documento arriva in tempo.', [-3, -8, 4, -2], 'Il ritardo di consegna rende tutto stressante.')
      ]),
      card('v-budget', 1, 'Prepari il budget: 1.800 € in tutto per due settimane, voli esclusi. Come lo gestisci?', [
        c2('Dividi per categorie con un 10% di riserva e controlli la spesa ogni sera', 'Budget con margine', 0.8, [3, 6, -2, 1], 'Spendi quasi tutto quel che hai previsto e hai una riserva.', [1, 3, -1, 0], 'Le spese reali superano le stime ma la riserva le assorbe.'),
        c2('Spendi con carta senza guardare e tiri le somme a casa', 'Nessun controllo', 0.4, [5, -4, 1, 2], 'Ti diverti e sforni solo un po’.', [1, -10, 3, -3], 'Sfori il budget già a metà viaggio.'),
        c2('Prelevi tutto in contanti per avere il controllo', 'Contanti in eccesso', 0.5, [1, 1, 6, 0], 'Il budget è visibile, ma porti molti contanti.', [-3, -6, 14, -4], 'Perdi il portafoglio e con lui gran parte dei soldi.')
      ]),
      card('v-fusi', 2, 'Atterri con un fuso di +8 ore alle 15 locali, dopo 11 ore di volo. Hai prenotato un tour alle 17.', [
        c2('Cambi orario subito, resti alla luce del giorno e rimandi il tour o lo accorci', 'Adattamento al fuso', 0.75, [3, -2, -1, 5], 'Dormi bene e ti riprendi in due giorni.', [1, -1, 0, 2], 'Lo stress si fa sentire ma non danneggia il viaggio.'),
        c2('Fai il tour comunque: il tempo è prezioso', 'Forzare la stanchezza', 0.4, [6, -1, 2, -4], 'Vedi tutto e reggi bene.', [-3, -3, 6, -12], 'Crolli di stanchezza e passi due giorni fuori uso.'),
        c2('Dormi fino a sera e salti la cena', 'Sonno a orari sbagliati', 0.5, [-1, 1, 0, 2], 'Recuperi un po’ di energie.', [-4, 0, 1, -6], 'Ti svegli alle tre di notte e il fuso si prolunga.')
      ]),
      card('v-taxi', 2, 'All’uscita dell’aeroporto un uomo ti offre «taxi ufficiale» a prezzo fisso, con insistenza. Non sai quanto costi una corsa.', [
        c2('Ignori l’offerta e vai al banco taxi ufficiale o scegli un’app riconosciuta', 'Canali verificati', 0.85, [2, -2, -4, 2], 'Paghi una tariffa corretta e arrivi tranquillo.', [1, -3, -2, 0], 'C’è coda, ma hai il prezzo chiaro.'),
        c2('Accetti: sembra gentile e hai fretta', 'Fretta e fiducia', 0.4, [2, -1, 3, 2], 'La corsa è un po’ cara ma va tutto bene.', [-3, -8, 10, -3], 'Ti fa pagare il triplo e ti lascia lontano.'),
        c2('Contratti per un prezzo migliore con altri due viaggiatori', 'Trattativa con sconosciuti', 0.55, [3, 2, 0, 1], 'Dividi la spesa.', [-2, -5, 8, -3], 'Il giro si allunga e non c’è sicurezza.')
      ]),
      card('v-cibo', 3, 'Alla bancarella più popolare si mangia ottimamente ma l’acqua per le bevande è dubbia e il caldo è forte.', [
        c2('Scegli cibo cotto al momento, bevande sigillate e fai attenzione al ghiaccio', 'Riduzione del rischio alimentare', 0.8, [4, -1, -2, 2], 'Mangi benissimo senza problemi.', [3, -1, 0, -1], 'Un lieve disturbo passeggero, niente di serio.'),
        c2('Mangi di tutto senza pensarci: è parte dell’esperienza', 'Esposizione al rischio', 0.4, [6, 0, 3, 2], 'Ti va bene e ti godi tutto.', [-4, -4, 8, -14], 'Una intossicazione ti ferma per due giorni.'),
        c2('Mangi solo nel ristorante dell’hotel per sicurezza', 'Evitamento totale', 0.7, [-3, -4, -1, 2], 'Mangi bene ma ti perdi molto.', [-4, -6, 0, 0], 'I prezzi sono alti e il cibo mediocre.')
      ]),
      card('v-meteo', 3, 'Previsioni: pioggia forte domani, proprio il giorno dell’escursione su un sentiero costiero con biglietto non rimborsabile da 60 €.', [
        c2('Sposti l’escursione a un altro giorno e usi domani per un museo', 'Flessibilità', 0.7, [4, -4, -2, 3], 'Cambi programma e la giornata è comunque ricca.', [2, -6, -1, 1], 'Il biglietto è perso, ma eviti il rischio.'),
        c2('Vai comunque: non vorrai perdere i 60 €', 'Costo sommerso', 0.4, [7, 0, 3, -2], 'Per fortuna c’è solo pioggia debole.', [-3, -3, 14, -9], 'Sentiero fangoso e scivoloso: cadi e ti fai male.'),
        c2('Resti in hotel tutto il giorno a riposare', 'Rinuncia', 0.7, [-2, -1, -1, 4], 'Riposi ma perdi un giorno.', [-3, -2, 0, 1], 'Ti annoi.')
      ]),
      card('v-coincidenza', 4, 'Il treno per la tappa successiva viene cancellato. Hai una prenotazione di hotel per stasera e solo 90 minuti prima dell’ultima corsa utile.', [
        c2('Chiedi alla biglietteria le alternative, avvisi l’hotel dell’arrivo tardivo', 'Informazione e comunicazione', 0.75, [3, -2, -3, 1], 'Trovi un bus alternativo e l’hotel ti tiene la stanza.', [1, -4, 0, -2], 'Arrivi alle due di notte ma tutto è a posto.'),
        c2('Prendi il primo taxi per l’intera tratta', 'Soluzione immediata', 0.5, [2, -8, 0, 2], 'Arrivi in orario ma spendi molto.', [-1, -12, 6, -3], 'Il prezzo è altissimo e l’autista non è affidabile.'),
        c2('Resti in stazione e aspetti il primo treno del mattino', 'Attesa passiva', 0.4, [-3, 0, 3, -5], 'Passi la notte ma non succede niente.', [-6, -4, 10, -10], 'Una notte scomoda in un posto poco sicuro.')
      ]),
      card('v-furto', 5, 'Nel mercato affollato ti accorgi che la cerniera dello zaino è aperta. Il portafoglio c’è ancora; telefono e un secondo documento non li trovi.', [
        c2('Ti allontani, controlli tutto con calma, blocchi carte e telefono e usi la copia digitale', 'Contenimento del danno', 0.8, [-1, -3, -3, -2], 'Perdi poco e il viaggio prosegue.', [-3, -6, 0, -4], 'Dovrai fare denuncia, ma sei coperto.'),
        c2('Insegui chi ti sembra sospetto', 'Reazione impulsiva', 0.15, [1, 4, 2, -2], 'Riavresti tutto, ma ti metti in pericolo.', [-5, -3, 20, -8], 'Resti coinvolto in una discussione pericolosa.'),
        c2('Ignori: forse è solo uno scambio', 'Negazione', 0.4, [2, 0, 1, 0], 'Non manca nulla.', [-6, -8, 8, -6], 'Si scopre che le carte sono state usate.')
      ]),
      card('v-fiducia', 5, 'Una guida locale offre un percorso «fuori dai circuiti» in moto, senza casco per te, a metà del prezzo normale.', [
        c2('Rifiuti il giro e scegli un’escursione con operatore riconosciuto e casco', 'Sicurezza prima del risparmio', 0.85, [3, -3, -4, 2], 'Vedi posti belli, in modo sicuro.', [2, -4, -2, 0], 'Meno originale, ma ti diverti.'),
        c2('Accetti: la fortuna aiuta gli audaci', 'Rischio non protetto', 0.35, [8, 3, 3, 2], 'Un’esperienza irripetibile.', [-6, -2, 24, -12], 'Una caduta ti procura ferite e una visita costosa.'),
        c2('Contratti per avere almeno il casco', 'Compromesso parziale', 0.5, [5, 2, 1, 0], 'La guida accetta.', [-2, -3, 10, -5], 'Il mezzo è in cattive condizioni.')
      ]),
      card('v-sanita', 6, 'Hai un forte mal di stomaco che dura da due giorni e un po’ di febbre. L’assicurazione di viaggio prevede una linea di assistenza.', [
        c2('Chiami la linea di assistenza, fai vedere da un medico in una struttura indicata e segui le sue indicazioni', 'Assistenza professionale', 0.85, [0, -4, -6, 5], 'Il problema si risolve e l’assicurazione copre parte della spesa.', [-1, -6, -3, 3], 'Serve una notte in osservazione.'),
        c2('Aspetti e prendi un farmaco trovato in valigia', 'Automedicazione', 0.4, [2, 2, 2, 2], 'Passa da solo.', [-5, -3, 10, -10], 'Peggiora e ti sposti in pronto soccorso.'),
        c2('Chiedi consiglio al farmacista del posto e ad amici via chat', 'Consiglio informale', 0.55, [1, 0, 0, 2], 'Ti rassicurano e passa.', [-2, -2, 6, -6], 'Il consiglio è sbagliato e perdi giorni.')
      ]),
      card('v-volo', 7, 'Ritorno: il volo ha due ore di ritardo e la coincidenza è a 1h30 dall’atterraggio previsto. Sei al terminal.', [
        c2('Parli subito con la compagnia per una riprotezione e scatti foto dei documenti del ritardo', 'Tutela dei diritti', 0.8, [2, 1, -3, 1], 'Ti riprotegono su un volo successivo e conservi la prova.', [1, -1, 0, -2], 'Perdi un po’ di tempo ma sei coperto.'),
        c2('Corri al gate senza dire nulla sperando nel ritardo della coincidenza', 'Scommessa sul ritardo', 0.3, [3, 0, 2, -2], 'Il secondo volo è in ritardo e prendi tutto.', [-5, -8, 8, -6], 'Perdi la coincidenza senza assistenza.'),
        c2('Compri subito un altro volo con la tua carta', 'Soluzione costosa', 0.6, [2, -10, 0, 1], 'Voli subito.', [0, -14, 2, -2], 'Il biglietto costa molto e non viene rimborsato.')
      ]),
      card('v-ultimo-giorno', 8, 'Ultimo giorno intero. Hai 80 € in tasca e due scelte per il programma. La notte seguente c’è un volo alle 6.', [
        c2('Giornata leggera, valigia pronta, cena e sonno decente', 'Margine prima del ritorno', 0.8, [3, 1, -3, 4], 'Parti riposato e senza fretta.', [1, 0, -1, 2], 'Un po’ di rimpianto per non aver visto tutto.'),
        c2('Programma fitto fino a sera e valigia all’ultimo minuto', 'Eccesso di programma', 0.4, [8, -2, 4, -3], 'Giornata memorabile.', [-4, -5, 12, -12], 'Perdi un oggetto e arrivi stremato.'),
        c2('Dedichi il pomeriggio agli acquisti per tutti', 'Regali a tutti i costi', 0.5, [2, -8, 1, -2], 'Porti a casa bei ricordi.', [-1, -12, 2, -4], 'Spendi più del previsto.')
      ]),
      card('v-dogana', 9, 'Alla dogana ti chiedono se porti cibo e beni di valore. Hai acquistato formaggi e un oggetto artigianale costoso.', [
        c2('Dichiari tutto con scontrini alla mano', 'Trasparenza', 0.85, [1, -2, -6, 2], 'Controllo rapido e nessun problema.', [0, -5, -2, -1], 'Paghi un’imposta, ma sei in regola.'),
        c2('Non dichiari: sono pochi euro', 'Piccola omissione', 0.5, [2, 1, 3, 1], 'Passi senza controlli.', [-4, -10, 20, -6], 'Ti sequestrano la merce e ti multano.'),
        c2('Dichiari solo l’oggetto costoso', 'Dichiarazione parziale', 0.6, [1, 0, 2, 1], 'Passi.', [-3, -7, 14, -4], 'I formaggi ti vengono sequestrati.')
      ]),
      card('v-casa', 10, 'Arrivi a casa, stanco e con il jet lag. Ti aspettano il lavoro e centinaia di foto da selezionare.', [
        c2('Dormi con orari locali, scarichi le foto e le selezioni nei giorni dopo', 'Recupero graduale', 0.75, [4, 0, -2, 6], 'Ti riprendi in due giorni.', [2, 0, -1, 3], 'Il jet lag dura qualche giorno in più.'),
        c2('Torni al lavoro il giorno dopo a pieno ritmo', 'Nessun recupero', 0.4, [2, 2, 2, -3], 'Reggi senza intoppi.', [-4, 0, 6, -12], 'Commetti errori per stanchezza.'),
        c2('Rimandi tutto di una settimana e ti prendi tempo', 'Riposo prolungato', 0.5, [3, -2, -1, 5], 'Ti rigeneri.', [0, -4, 0, 2], 'Ti trovi con troppe scadenze.')
      ])
    ]
  });

  /* ---- 3) Ristrutturare una stanza ---- */
  const c3 = mk(['avanzamento', 'budget', 'rischio', 'qualita']);
  SIM.register({
    id: 'cul-casa', subject: 'sec', title: 'Ristrutturare una stanza', icon: '🛠️',
    intro: 'Vuoi rifare una camera di un appartamento: pareti, pavimento, qualche punto luce. Hai un budget limitato, scadenze e un po’ di manualità. Ogni scelta sposta avanzamento dei lavori, budget residuo, rischio (sicurezza, difetti nascosti) e qualità nel tempo. Alcuni lavori si possono fare da soli, altri no: il vero risparmio sta nel capire dove la prudenza costa meno dell’errore.',
    vars: {
      avanzamento: { label: 'Avanzamento dei lavori', start: 10, min: 0, max: 100 },
      budget: { label: 'Budget residuo', start: 60, min: 0, max: 100 },
      rischio: { label: 'Rischio (sicurezza e difetti)', start: 15, min: 0, max: 100 },
      qualita: { label: 'Qualità e durata', start: 40, min: 0, max: 100 }
    },
    weights: { avanzamento: 1.4, budget: 0.6, rischio: -1.2, qualita: 0.7 },
    penalties: [],
    turns: 6, utilText: '1,4 × avanzamento + 0,6 × budget − 1,2 × rischio + 0,7 × qualità',
    cards: [
      card('h-progetto', 1, 'Prima di iniziare hai solo un’idea. Come imposti il progetto?', [
        c3('Misuri la stanza, fai uno schizzo quotato, un elenco di lavori e un calendario con margine', 'Pianificazione', 0.85, [5, 4, -3, 5], 'Sai cosa comprare e in che ordine fare i lavori.', [3, 2, -1, 3], 'Qualche misura è sbagliata, ma l’impianto regge.'),
        c3('Inizi dalla demolizione e decidi strada facendo', 'Improvvisazione', 0.4, [9, 1, 3, 1], 'Procedi spedito.', [3, -7, 12, -6], 'Scopri cose a metà lavoro e ti ritrovi bloccato.'),
        c3('Affidi l’intero progetto a un tuttofare senza contratto', 'Affidamento informale', 0.5, [7, 0, 4, 0], 'Il lavoro va avanti.', [2, -9, 10, -6], 'I costi lievitano senza controllo.')
      ]),
      card('h-preventivi', 1, 'Servono un elettricista e un imbianchino. Hai tre preventivi: 900, 1.350 e 1.800 € per l’elettricista, voci poco chiare.', [
        c3('Chiedi preventivi dettagliati con voci, tempi e garanzie, e li confronti a parità di lavoro', 'Confronto omogeneo', 0.8, [3, 5, -4, 5], 'Trovi il giusto compromesso fra prezzo e garanzia.', [2, 2, -2, 2], 'Perdi due settimane, ma scegli con calma.'),
        c3('Prendi il più economico: i lavori sono tutti uguali', 'Prezzo basso come unico criterio', 0.4, [5, 7, 2, 0], 'Il lavoro è fatto bene.', [-2, -3, 12, -9], 'Mancano certificazioni e i lavori vanno rifatti.'),
        c3('Prendi il più caro: costa tanto, sarà il migliore', 'Prezzo alto come garanzia', 0.55, [4, -7, -2, 5], 'Il lavoro è ottimo.', [3, -9, 0, 0], 'Paghi molto per poco in più.')
      ]),
      card('h-impianto', 2, 'Per aggiungere due prese e spostare un interruttore devi mettere mano al quadro e ai cavi. Hai visto un video che spiega «com’è facile».', [
        c3('Chiami un elettricista abilitato, che rilascia la dichiarazione di conformità', 'Competenza e responsabilità', 0.9, [4, -5, -10, 6], 'L’impianto è a norma e documentato.', [3, -6, -6, 3], 'Il lavoro richiede più ore del previsto.'),
        c3('Fai da solo, ma togli corrente dal quadro e provi con un tester', 'Fai da te con cautela', 0.45, [6, 3, 4, 0], 'Funziona, ma senza certificazione.', [-3, -3, 20, -6], 'Un cavo sbagliato crea un contatto pericoloso.'),
        c3('Fai da solo con la corrente accesa, per non spegnere il frigo', 'Rischio inutile', 0.2, [6, 3, 8, 0], 'Per fortuna nulla.', [-8, -6, 40, -8], 'Prendi una scarica e dovrai fare accertamenti.')
      ]),
      card('h-pareti', 2, 'Le pareti hanno macchie di umidità lungo lo zoccolo e la vecchia pittura si sfalda.', [
        c3('Cerchi la causa (perdita, condensa, risalita), la risolvi e solo poi risani e ridipingi', 'Causa prima dell’effetto', 0.8, [3, -5, -8, 8], 'Le macchie non tornano.', [1, -7, -3, 3], 'La causa è difficile da trovare e perdi tempo.'),
        c3('Applichi due mani di pittura antimuffa e vai avanti', 'Trattare il sintomo', 0.4, [7, 3, 0, 2], 'Per un po’ sembra a posto.', [2, -2, 9, -10], 'Le macchie ricompaiono a primavera.'),
        c3('Copri con cartongesso sopra la parete umida', 'Coprire il problema', 0.3, [8, 0, 1, 1], 'Sembra a posto.', [-3, -6, 14, -12], 'Dietro la lastra cresce la muffa.')
      ]),
      card('h-materiali', 3, 'Per il pavimento puoi scegliere un laminato economico (15 €/m²), un gres di buona qualità (35 €/m²) o un parquet pregiato (80 €/m²). La stanza è la camera da letto.', [
        c3('Scegli il gres o il laminato di fascia media, in base a usura e manutenzione', 'Costo totale di utilizzo', 0.75, [5, -3, -2, 8], 'Il pavimento è durevole e facile da pulire.', [3, -2, 0, 4], 'Qualche difetto di posa, ma la qualità regge.'),
        c3('Il laminato più economico: è una camera, non una cucina', 'Risparmio iniziale', 0.5, [6, 4, 0, -2], 'Dura abbastanza.', [3, 1, 2, -9], 'Si gonfia e va sostituito presto.'),
        c3('Il parquet pregiato: si fa una volta sola', 'Spesa massima', 0.55, [4, -12, -1, 10], 'Bellissimo e duraturo.', [2, -14, 1, 4], 'Il budget scivola e devi tagliare altrove.')
      ]),
      card('h-ritardo', 3, 'Il fornitore comunica che le piastrelle arriveranno con dieci giorni di ritardo. Il posatore è disponibile solo la prossima settimana.', [
        c3('Riorganizzi il calendario: fai ora i lavori che non dipendono dalle piastrelle e concordi nuova data col posatore', 'Flessibilità del piano', 0.8, [5, 1, -2, 3], 'Il ritardo si assorbe quasi del tutto.', [3, -2, 0, 1], 'Il posatore è occupato e si perde una settimana.'),
        c3('Cambi fornitore e prendi subito altre piastrelle', 'Soluzione di fretta', 0.5, [6, -4, 1, -2], 'Arrivano subito e vanno bene.', [3, -9, 3, -8], 'Il colore non è lo stesso e il costo è alto.'),
        c3('Fermi tutto in attesa del materiale', 'Blocco totale', 0.5, [-3, 0, 0, 1], 'Si ricomincia dopo dieci giorni.', [-6, -2, 2, -1], 'Perdi anche il posatore.')
      ]),
      card('h-cantiere', 4, 'Stai tagliando le piastrelle con una smerigliatrice in garage. La polvere è fitta e l’abbigliamento è leggero.', [
        c3('Ti fermi: occhiali, mascherina FFP2, guanti e taglio ad acqua o con aspirazione', 'Protezioni personali', 0.9, [3, -2, -7, 4], 'Lavori più lentamente ma in sicurezza.', [2, -3, -3, 2], 'Perdi qualche ora a procurarti il materiale.'),
        c3('Continui in fretta: sono pochi tagli', 'Fretta', 0.55, [7, 1, 3, 1], 'Finisci in mezz’ora.', [-3, -3, 20, -4], 'Un frammento ti colpisce un occhio.'),
        c3('Chiedi al posatore di tagliare tutto in laboratorio a pagamento', 'Delegare il taglio', 0.7, [4, -5, -4, 4], 'I tagli sono perfetti.', [2, -7, -2, 1], 'Un taglio sbagliato richiede una piastrella in più.')
      ]),
      card('h-contratto', 5, 'L’imbianchino propone: «pago in nero e tolgo il 20%». Non hai fattura e nessuna garanzia scritta.', [
        c3('Chiedi preventivo con fattura e garanzia scritta, anche a costo di pagare di più', 'Tracciabilità e tutela', 0.85, [4, -4, -5, 6], 'Se qualcosa va storto hai un riferimento.', [2, -5, -2, 3], 'Il costo è maggiore ma sei coperto.'),
        c3('Accetti: il 20% è una bella cifra', 'Sconto in cambio di garanzie', 0.55, [6, 5, 3, 0], 'Il lavoro è buono.', [1, -3, 14, -9], 'Il lavoro non è completo e non hai a chi rivolgerti.'),
        c3('Rinunci e dipingi da solo il fine settimana', 'Fai da te', 0.6, [5, 3, 1, 1], 'Un buon lavoro.', [2, -2, 6, -7], 'Il risultato è irregolare e va ritoccato.')
      ]),
      card('h-sorpresa', 5, 'Aprendo la parete trovi un tubo non segnato sulla planimetria, con una piccola perdita.', [
        c3('Sospendi, chiudi l’acqua, chiami l’idraulico e fai verificare prima di chiudere la parete', 'Verifica prima di chiudere', 0.85, [-1, -7, -8, 6], 'Il guasto viene riparato bene.', [-3, -9, -4, 3], 'Costa più del previsto ma sei sicuro.'),
        c3('Sigilli con un nastro e richiudi: la perdita è piccola', 'Rattoppo', 0.35, [6, 2, 3, 0], 'Per qualche mese tiene.', [-2, -6, 16, -12], 'Un anno dopo la parete è bagnata.'),
        c3('Continui i lavori attorno e ci pensi alla fine', 'Rimandare il problema', 0.4, [5, 1, 2, 0], 'Il problema non peggiora.', [-1, -5, 12, -8], 'La perdita peggiora mentre lavori.')
      ]),
      card('h-ponteggio', 6, 'Per dipingere il soffitto a 3 metri hai una scala doppia vecchia. In casa hai un trabattello in affitto a 40 € al giorno.', [
        c3('Affitti il trabattello e lo monti seguendo le istruzioni, sul pavimento stabile', 'Attrezzatura adatta', 0.85, [4, -2, -6, 5], 'Lavori in piedi e in sicurezza.', [2, -3, -3, 3], 'Il montaggio richiede più tempo.'),
        c3('Usi la scala appoggiata a un mobile, per sicurezza', 'Appoggio improvvisato', 0.4, [6, 2, 6, 0], 'Fai tutto in un’ora.', [-3, -3, 30, -3], 'Cadi dal mobile e ti fai male.'),
        c3('Eviti il soffitto e lo lasci com’è', 'Rinuncia a una parte', 0.7, [-2, 1, -1, -5], 'La stanza è comunque ok.', [-4, 0, 0, -8], 'Il soffitto stona.')
      ]),
      card('h-collaudo', 7, 'Finiti i lavori elettrici, l’elettricista ti consegna la dichiarazione di conformità; l’interruttore differenziale però scatta ogni tanto.', [
        c3('Chiedi di verificare il circuito e correggere, prima di richiudere', 'Collaudo', 0.85, [2, -3, -9, 6], 'Il difetto era un cavo schiacciato.', [0, -5, -4, 3], 'Serve una seconda visita ma è risolto.'),
        c3('Lo eviti spostando il carico su un’altra presa', 'Aggiramento', 0.3, [4, 0, 2, 0], 'Non scatta più.', [-1, -2, 18, -8], 'Il difetto resta e può diventare un pericolo.'),
        c3('Disattivi il differenziale: scatta troppo', 'Disattivare la protezione', 0.1, [4, 1, 6, 0], 'Nulla.', [-5, -4, 40, -10], 'Una scarica senza protezione è molto più grave.')
      ]),
      card('h-fine', 8, 'Mancano la zoccolatura e le finiture. Sei stanco e vuoi chiudere, ma il budget si sta esaurendo.', [
        c3('Rifai il conto residuo, scegli prima le finiture con funzione (protezione, igiene) e rimanda le estetiche', 'Priorità funzionali', 0.8, [5, 3, -3, 6], 'Chiudi con ordine e nei limiti.', [3, 1, -1, 3], 'Ti resta qualche dettaglio da fare.'),
        c3('Compri materiali economici e mal assortiti per finire subito', 'Chiudere a ogni costo', 0.5, [7, 3, 2, -3], 'La stanza è finita.', [4, 0, 4, -9], 'I dettagli dopo un anno sono rovinati.'),
        c3('Lasci la stanza a metà e riprendi più avanti', 'Sospensione', 0.5, [-3, 3, 0, -3], 'Ti riposi.', [-6, 1, 3, -6], 'Non riprenderai mai.')
      ]),
      card('h-garanzia', 9, 'Dopo tre mesi, sul bagno confinante compare una piccola crepa sul lavoro del posatore. Il lavoro è in garanzia.', [
        c3('Contatti il posatore con foto e data, e concordi un intervento in garanzia', 'Far valere la garanzia', 0.8, [2, 3, -4, 6], 'Lo risolve a sue spese.', [1, 0, -1, 3], 'Contesta, ma trovate un accordo.'),
        c3('Ripari da solo con del silicone', 'Rattoppo personale', 0.4, [3, 1, 3, 0], 'La crepa non si vede.', [-1, -3, 8, -8], 'Perdi la garanzia e la crepa si allarga.'),
        c3('Ignori: è piccola', 'Trascuratezza', 0.5, [0, 0, 0, 0], 'Resta stabile.', [-2, -4, 6, -8], 'Si infiltra acqua.')
      ]),
      card('h-bilancio', 10, 'Bilancio dei lavori: hai speso un po’ più del previsto e ti avanzano 500 €. Cosa ne fai?', [
        c3('Tieni una riserva per manutenzione e piccoli ritocchi nei prossimi mesi', 'Riserva per la manutenzione', 0.75, [3, 4, -3, 5], 'Gestisci con calma.', [2, 3, -1, 3], 'Non serve nulla, ma sei tranquillo.'),
        c3('Compri subito un mobile costoso per completare', 'Spesa finale', 0.5, [5, -7, 0, 4], 'Bell’effetto.', [3, -9, 1, 0], 'Ti pesa sul bilancio.'),
        c3('Investi nell’illuminazione per ottenere un ambiente più bello', 'Valorizzazione', 0.6, [4, -3, -1, 7], 'Ambiente accogliente.', [2, -4, 0, 3], 'Poco cambia.')
      ])
    ]
  });

  /* ---- 4) Escursione in montagna ---- */
  const c4 = mk(['progresso', 'riserve', 'rischio', 'margine']);
  SIM.register({
    id: 'cul-escursione', subject: 'sec', title: 'Un’escursione in montagna', icon: '🥾',
    intro: 'Una giornata di escursione su un sentiero di media montagna: dislivello di 1.100 metri, rifugio come meta, meteo incerto e gruppo di tre persone. Ogni scelta sposta progresso verso la meta, riserve (acqua, energie), rischio (cadute, maltempo, smarrimento) e margine di tempo e luce. In montagna la meta è opzionale, il ritorno no: la scelta prudente è spesso quella con il valore atteso più alto.',
    vars: {
      progresso: { label: 'Progresso verso la meta', start: 5, min: 0, max: 100 },
      riserve: { label: 'Riserve di acqua ed energia', start: 70, min: 0, max: 100 },
      rischio: { label: 'Rischio (cadute, maltempo, smarrimento)', start: 15, min: 0, max: 100 },
      margine: { label: 'Margine di tempo e luce', start: 60, min: 0, max: 100 }
    },
    weights: { progresso: 1.2, riserve: 0.7, rischio: -1.5, margine: 0.7 },
    penalties: [],
    turns: 6, utilText: '1,2 × progresso + 0,7 × riserve − 1,5 × rischio + 0,7 × margine',
    cards: [
      card('e-preparazione', 1, 'La sera prima. Controlli meteo, orari di sorgere e tramonto, e lo zaino. Cosa fai?', [
        c4('Leggi il bollettino di più fonti, calcoli i tempi con margine, lasci il programma a qualcuno', 'Preparazione e piano di rientro', 0.9, [4, 4, -6, 6], 'Parti con un piano chiaro e un orario limite.', [2, 3, -3, 3], 'Qualche dato è discordante, ma sai a cosa stare attento.'),
        c4('Guardi solo la previsione dell’app del telefono', 'Una sola fonte', 0.5, [5, 2, 0, 2], 'Il tempo regge.', [-2, -2, 10, -4], 'Il temporale pomeridiano è più precoce del previsto.'),
        c4('Non controlli nulla: l’hai già fatto altre volte', 'Abitudine', 0.4, [6, 0, 3, 1], 'Tutto bene.', [-3, -4, 14, -6], 'Sei impreparato a un cambio di meteo.')
      ]),
      card('e-partenza', 1, 'Alle 7:30 siete al parcheggio. Il piano prevede 4 ore di salita. Un compagno propone di partire alle 9 dopo colazione tranquilla.', [
        c4('Parti presto, con un ritmo comodo e soste programmate', 'Margine di luce e tempo', 0.85, [5, 3, -3, 6], 'Hai tempo davanti a te.', [3, 1, -1, 3], 'Il gruppo è un po’ lento ma il margine resta.'),
        c4('Parti alle 9: meglio goderselo senza fretta', 'Comodità', 0.5, [3, 4, 2, -4], 'Il tempo regge.', [1, 2, 6, -9], 'Il temporale ti prende sulla via del ritorno.'),
        c4('Parti subito e a ritmo sostenuto per recuperare tempo', 'Ritmo troppo alto', 0.5, [8, -5, 2, 5], 'Arrivi presto a metà.', [4, -10, 5, 2], 'Ti stanchi presto e rallenti.')
      ]),
      card('e-acqua', 2, 'A un bivio sai che c’è una fontana a un’ora. Hai ancora 700 ml su 1,5 litri iniziali e fa caldo.', [
        c4('Bevi regolarmente, accorci le soste al sole e ti rifornisci alla fontana', 'Idratazione regolare', 0.85, [4, 6, -3, 2], 'La fontana c’è e riparti riposato.', [2, 3, 1, 0], 'La fontana è secca ma hai il margine.'),
        c4('Razioni l’acqua per ridurre i consumi', 'Razionare troppo presto', 0.5, [4, -3, 3, 1], 'Arrivi alla fontana.', [0, -8, 8, -3], 'La fontana è secca e inizi ad avere i primi sintomi di disidratazione.'),
        c4('Bevi da un ruscello per risolvere subito', 'Acqua non trattata', 0.45, [3, 5, 2, 1], 'Nulla.', [-1, -2, 12, -6], 'Ti viene un disturbo intestinale.')
      ]),
      card('e-segnavia', 2, 'Dopo un tratto di bosco non vedi più i segni bianchi e rossi da cinque minuti. C’è una traccia che sembra proseguire.', [
        c4('Torni all’ultimo segnavia visibile e controlli mappa e GPS', 'Ritorno al punto noto', 0.85, [3, 0, -6, 2], 'Ritrovi il sentiero in dieci minuti.', [1, -2, -2, -2], 'Hai perso un po’ di tempo.'),
        c4('Segui la traccia: è probabilmente il sentiero', 'Fidarsi di una traccia', 0.4, [6, 1, 3, 1], 'Era il sentiero giusto.', [-4, -3, 16, -8], 'La traccia porta su un canalone.'),
        c4('Tagli dritto per recuperare il sentiero', 'Scorciatoia fuori sentiero', 0.3, [7, -2, 4, 2], 'Ritrovi il segno.', [-3, -5, 20, -8], 'Terreno ripido e instabile.')
      ]),
      card('e-stanchezza', 3, 'A metà salita uno del gruppo è molto affaticato e un po’ pallido. Mancano due ore alla meta.', [
        c4('Fai una sosta vera, mangi, bevi e decidi con il gruppo se continuare o accorciare', 'Ascoltare il membro più lento', 0.8, [2, 5, -4, 0], 'Si riprende e il gruppo ripartì con calma.', [0, 3, -2, -3], 'Non migliora e si accorcia il giro.'),
        c4('Insisti: è solo stanchezza e passerà con il movimento', 'Minimizzare i segnali', 0.4, [6, -3, 4, 1], 'Per fortuna regge.', [-2, -7, 16, -6], 'Peggiora e si rallenta tutto.'),
        c4('Il gruppo si divide: voi andate avanti, lui aspetta', 'Dividere il gruppo', 0.45, [6, 0, 5, 0], 'Tutto bene.', [-2, -3, 18, -5], 'Resta solo, in difficoltà.')
      ]),
      card('e-nuvole', 3, 'Alle 11:30 le nuvole si addensano a ovest e l’aria diventa più fredda. Il rifugio è a 90 minuti, la cima a 150.', [
        c4('Punti al rifugio e rivaluti da lì, rinunciando alla cima', 'Obiettivo ridotto', 0.8, [4, 3, -7, 4], 'Riposi al riparo mentre il temporale passa.', [2, 1, -4, 1], 'Il meteo migliora, ma sei comunque al sicuro.'),
        c4('Punti alla cima: ci sei quasi, il temporale arriverà dopo', 'Cima a ogni costo', 0.4, [10, -4, 6, -3], 'Raggiungi la cima e scendi in tempo.', [-4, -7, 28, -10], 'Il temporale ti prende esposto in cresta.'),
        c4('Torni indietro per la stessa via', 'Rinuncia totale', 0.7, [-2, 1, -5, 3], 'Rientri tranquillo.', [-3, 0, -2, 0], 'Il meteo migliorava e ti sei perso la meta.')
      ]),
      card('e-ora-limite', 4, 'Hai fissato come orario limite le 13:30 per iniziare a tornare. Sono le 13:20 e sei a 40 minuti dalla cima.', [
        c4('Rispetti l’orario limite: torni indietro, la cima ci sarà ancora', 'Regola dell’ora limite', 0.85, [2, 3, -6, 6], 'Scendi con la luce e senza fretta.', [1, 1, -3, 3], 'Ti pesa un po’ la rinuncia.'),
        c4('Sali comunque: sono solo 40 minuti', 'Estensione dell’orario', 0.4, [10, -4, 5, -8], 'Sei in cima e scendi di corsa.', [4, -7, 14, -16], 'Scendi al buio e in affanno.'),
        c4('Chiedi a chi incroci se la cima è ancora raggiungibile', 'Informazione locale', 0.6, [5, 0, 1, -3], 'Ti dicono di sì.', [-2, -2, 5, -3], 'Informazioni confuse.')
      ]),
      card('e-ghiaione', 5, 'La discesa passa su un tratto di sassi bagnati dalla pioggia. Hai le suole consumate e i bastoncini.', [
        c4('Rallenti, usi i bastoncini a lunghezza ridotta e passi uno alla volta', 'Passo sicuro', 0.85, [3, 0, -5, 0], 'Superi il tratto in sicurezza.', [1, -1, 2, -2], 'Scivoli ma senza conseguenze.'),
        c4('Scendi a passo svelto per uscirne in fretta', 'Velocità', 0.4, [6, 0, 4, 3], 'Passi indenne.', [-3, -3, 26, -4], 'Una caduta ti procura una distorsione.'),
        c4('Cerchi un’alternativa fuori dal sentiero', 'Fuori sentiero', 0.3, [5, -1, 4, 0], 'Funziona.', [-2, -3, 18, -6], 'Ti ritrovi in un punto ancora peggiore.')
      ]),
      card('e-nebbia', 6, 'La nebbia scende all’improvviso: visibilità di 15 metri. Il sentiero è in un tratto di cresta ampia, con precipizio ai lati.', [
        c4('Ti fermi, ti riunisci al gruppo e usi traccia GPS e mappa per procedere solo su punti certi', 'Orientamento con strumenti', 0.8, [2, -1, -5, -2], 'Ritrovi la via con calma.', [0, -2, 3, -5], 'Ritardi ma non ti perdi.'),
        c4('Prosegui a vista, ricordando il sentiero', 'Fidarsi della memoria', 0.35, [6, 0, 6, 1], 'Ricordi bene.', [-4, -4, 28, -8], 'Esci dal sentiero a pochi passi dal precipizio.'),
        c4('Aspetti fermo finché si apre', 'Attesa in zona esposta', 0.5, [-1, -2, 0, -6], 'La nebbia si alza.', [-3, -6, 4, -12], 'Il freddo e l’ora non lasciano scampo.')
      ]),
      card('e-batteria', 7, 'Il telefono è al 12% e il segnale è debole. Mancano 3 ore alla macchina.', [
        c4('Modalità aereo, schermo ridotto, cartina offline e avvisi i familiari dell’orario previsto', 'Gestione delle risorse', 0.85, [3, 3, -5, 3], 'La batteria regge fino al parcheggio.', [1, 1, -2, 0], 'Si scarica ma avevi già il piano.'),
        c4('Usi l’app di navigazione continuamente per sicurezza', 'Consumo di batteria', 0.5, [3, -2, 2, 0], 'Regge.', [-1, -5, 10, -4], 'Si scarica e perdi il riferimento.'),
        c4('Spegni il telefono e scendi a memoria', 'Rinunciare agli strumenti', 0.5, [3, 0, 2, 1], 'Trovi la strada.', [-2, -3, 14, -5], 'Sbagli bivio senza modo di avvisare.')
      ]),
      card('e-incontro', 8, 'Incontri un escursionista con una caviglia dolorante, a un’ora dal rifugio, senza segnale. Ha poca acqua.', [
        c4('Lo aiuti con acqua e bendaggio semplice, lo accompagni al rifugio e fai chiamare i soccorsi se necessario', 'Soccorso proporzionato', 0.8, [-2, -4, -3, -4], 'Lo porti al sicuro.', [-3, -6, 2, -7], 'Rallenta tutto ma riuscite a scendere insieme.'),
        c4('Gli dici di aspettare e scendi a cercare aiuto da solo', 'Delegare', 0.5, [4, 0, 2, 0], 'Rientri in fretta.', [-3, -3, 12, -4], 'Lui resta solo e il tempo passa.'),
        c4('Prosegui: non hai le competenze per aiutare', 'Indifferenza', 0.5, [4, 2, 0, 3], 'Non cambia per te.', [-2, 0, 6, -2], 'Senti di aver abbandonato qualcuno.')
      ]),
      card('e-fine', 9, 'Ultima ora di discesa. Sei stanco, le gambe cedono e il sentiero diventa monotono.', [
        c4('Rallenti, mangi qualcosa, bevi e concentri l’attenzione sui piedi', 'Gestione della stanchezza', 0.85, [3, 4, -4, 2], 'Il rientro è lento ma sicuro.', [1, 2, 0, -2], 'Ti prendi qualche minuto in più.'),
        c4('Acceleri per finire: manca poco', 'Fretta finale', 0.4, [5, -3, 4, 3], 'Arrivi prima.', [-2, -6, 24, -2], 'Una distrazione ti fa inciampare.'),
        c4('Ti siedi un’ora a riposare', 'Sosta lunga', 0.5, [-1, 3, 0, -8], 'Ti riposi.', [-3, 1, 2, -12], 'Il sole cala.')
      ]),
      card('e-bilancio', 10, 'Al parcheggio ripensi alla giornata. Hai rinunciato alla cima, ma sei tornato intero. Un compagno è deluso.', [
        c4('Ricapitoli con il gruppo cosa ha funzionato e cosa cambiare la prossima volta', 'Revisione post-azione', 0.85, [2, 3, -5, 4], 'La prossima uscita sarà meglio preparata.', [1, 1, -2, 1], 'Qualche discussione ma utile.'),
        c4('Dici che alla prossima si va comunque più veloci', 'Lezione sbagliata', 0.4, [3, 0, 4, -2], 'Per ora piace.', [-1, -2, 12, -5], 'Si consolida un’abitudine pericolosa.'),
        c4('Non ne parli: l’importante è essere tornati', 'Nessuna riflessione', 0.5, [1, 0, 0, 0], 'Nulla cambia.', [0, 0, 5, -2], 'Gli stessi errori si ripetono.')
      ])
    ]
  });

  /* ---- 5) Emergenze domestiche e primo soccorso ---- */
  const c5 = mk(['controllo', 'sicurezza', 'rischio', 'aiuto']);
  SIM.register({
    id: 'cul-emergenza', subject: 'sec', title: 'Emergenze in casa e primo soccorso', icon: '🚑',
    intro: 'Una serie di emergenze domestiche, dal piccolo incidente alla situazione seria. Non sei un professionista e non devi diventarlo: devi sapere cosa fare per primo, cosa non fare e quando chiamare il 112. Ogni scelta sposta controllo della situazione, sicurezza delle persone, rischio di peggiorare le cose e aiuto in arrivo. Il simulatore non dà istruzioni mediche: allena l’ordine delle priorità (scena, allarme, aiuto) e il resto lo insegna un corso di primo soccorso.',
    vars: {
      controllo: { label: 'Controllo della situazione', start: 40, min: 0, max: 100 },
      sicurezza: { label: 'Sicurezza di chi è coinvolto', start: 50, min: 0, max: 100 },
      rischio: { label: 'Rischio di peggiorare le cose', start: 25, min: 0, max: 100 },
      aiuto: { label: 'Aiuto in arrivo e informazioni', start: 20, min: 0, max: 100 }
    },
    weights: { controllo: 1.0, sicurezza: 1.0, rischio: -1.3, aiuto: 0.9 },
    penalties: [],
    turns: 6, utilText: '1,0 × controllo + 1,0 × sicurezza − 1,3 × rischio + 0,9 × aiuto',
    cards: [
      card('m-fumo', 1, 'Senti odore di bruciato dalla cucina e vedi fumo uscire da una pentola dimenticata sul fuoco, con fiamme basse.', [
        c5('Spegni la fonte di calore se è sicuro farlo, copri la pentola con un coperchio e arieggi; se il fuoco si estende, esci e chiami il 112', 'Eliminare la fonte e sapere quando uscire', 0.8, [8, 6, -6, 2], 'Il fuoco si spegne subito.', [4, 4, -2, 4], 'Il fuoco non si ferma: esci e chiami.'),
        c5('Versi acqua sulla pentola per spegnere subito', 'Acqua su olio', 0.15, [6, 2, 4, 0], 'Per fortuna era solo un po’ di fumo.', [-4, -8, 30, 0], 'L’acqua sull’olio crea una fiammata enorme.'),
        c5('Corri fuori ad avvisare i vicini senza chiudere il gas', 'Panico', 0.5, [2, 4, 0, 3], 'Avvisi tutti.', [-3, -2, 12, 2], 'Il fuoco cresce mentre non c’è nessuno a controllarlo.')
      ]),
      card('m-gas', 1, 'In casa senti odore di gas, forte e persistente.', [
        c5('Non accendi luci né fiamme, apri porte e finestre, chiudi il gas se è a portata, esci e chiami dal pianerottolo o da fuori', 'Evitare inneschi', 0.9, [6, 8, -8, 6], 'Eviti ogni scintilla e chiedi aiuto in sicurezza.', [4, 5, -4, 6], 'Perdi tempo ma resti lontano dal rischio.'),
        c5('Accendi la luce per vedere da dove viene', 'Interruttore come innesco', 0.1, [3, 0, 6, 0], 'Per fortuna nulla.', [-6, -12, 40, 0], 'Una scintilla può innescare una deflagrazione.'),
        c5('Chiami da dentro casa e aspetti accanto al cellulare', 'Chiamata nel punto sbagliato', 0.5, [2, 1, 2, 5], 'L’operatore ti risponde subito.', [0, -3, 10, 4], 'Resti nell’aria piena di gas.')
      ]),
      card('m-bruciatura', 2, 'Un familiare si versa acqua bollente su una mano: pelle rossa e dolorante, senza vesciche grandi.', [
        c5('Raffreddi la zona con acqua corrente fresca per diversi minuti e valuti con un professionista se serve', 'Raffreddare, non peggiorare', 0.85, [5, 6, -4, 3], 'Il dolore cala e non serve altro.', [3, 4, -1, 4], 'Resta un po’ di arrossamento ma niente di serio.'),
        c5('Applichi burro o dentifricio come si usa dire', 'Rimedi popolari', 0.1, [3, 0, 4, 0], 'Sembra calmarsi.', [-3, -6, 20, 0], 'Trattieni calore e aumenti il rischio di infezione.'),
        c5('Ignori: capita a tutti', 'Minimizzare', 0.5, [1, 1, 1, 0], 'Passa da sola.', [-3, -5, 10, -2], 'Peggiora nei giorni successivi.')
      ]),
      card('m-svenimento', 2, 'Un vicino anziano crolla nell’ingresso e non risponde quando lo chiami e lo scuoti con delicatezza.', [
        c5('Controlli la sicurezza della scena, chiami il 112 e segui le istruzioni dell’operatore, rimanendo con lui', 'Allarme precoce e istruzioni guidate', 0.9, [6, 6, -5, 9], 'Hai chiamato presto e l’operatore ti guida.', [4, 5, -2, 8], 'L’operatore ti guida e l’ambulanza arriva.'),
        c5('Provi prima a rianimarlo da solo, poi chiamerai', 'Ritardare l’allarme', 0.3, [5, 3, 3, 0], 'Si riprende un po’.', [-3, -5, 14, -4], 'Il tempo passa senza che arrivino soccorsi.'),
        c5('Gli metti un cuscino e aspetti che si riprenda', 'Attesa', 0.35, [3, 2, 2, 0], 'Si sveglia.', [-5, -8, 12, -3], 'Non si riprende e si perde tempo.')
      ]),
      card('m-taglio', 3, 'Un ragazzo si taglia profondamente un avambraccio con un coltello: il sangue esce con forza.', [
        c5('Chiami il 112 e comprimi la ferita con un panno pulito, restando con lui', 'Pressione diretta e allarme', 0.9, [6, 6, -5, 8], 'Il sangue rallenta e i soccorsi sono in arrivo.', [4, 4, -2, 7], 'Serve molto tempo, ma la pressione tiene.'),
        c5('Lo porti in auto al pronto soccorso più vicino, guidando tu', 'Trasporto improvvisato', 0.4, [5, 3, 5, 6], 'Arrivate senza incidenti.', [-3, -4, 16, 2], 'Perdi tempo nel traffico e lui peggiora.'),
        c5('Sciacqui la ferita con acqua per vedere quanto è grave', 'Cercare di vedere', 0.5, [2, 1, 3, 0], 'Capisci subito che serve aiuto.', [-3, -5, 10, -2], 'Perdi sangue e minuti preziosi.')
      ]),
      card('m-elettrico', 3, 'Un bambino sembra essere stato scosso da un elettrodomestico guasto: è ancora a contatto con l’apparecchio.', [
        c5('Togli la corrente dal quadro o stacca la spina senza toccare lui né l’apparecchio, poi chiami il 112', 'Mettere in sicurezza la scena', 0.85, [7, 7, -8, 7], 'La corrente è staccata e puoi aiutare in sicurezza.', [4, 4, -4, 6], 'Ti serve un po’ per trovare il quadro.'),
        c5('Lo tiri via afferrandolo subito', 'Soccorritore a rischio', 0.2, [5, 4, 4, 0], 'Non succede nulla a te.', [-6, -12, 36, 0], 'Resti folgorato anche tu.'),
        c5('Lo chiami da lontano e speri che si stacchi', 'Attesa passiva', 0.3, [2, 2, 2, 1], 'Si stacca.', [-4, -6, 14, 0], 'Resta a contatto con la corrente.')
      ]),
      card('m-strozza', 4, 'Un adulto durante la cena si porta le mani alla gola e non riesce a parlare né a tossire.', [
        c5('Chiami il 112 e fai ciò che hai imparato in un corso di disostruzione, se lo sai fare; altrimenti segui la guida dell’operatore', 'Competenze certificate e allarme', 0.8, [6, 7, -4, 8], 'Segui l’operatore e la situazione si sblocca.', [3, 5, -2, 6], 'Serve più tempo ma l’aiuto è in arrivo.'),
        c5('Gli dai da bere acqua per far scendere il boccone', 'Gesto sbagliato', 0.15, [3, 0, 6, 0], 'Per fortuna si riprende.', [-5, -10, 28, -2], 'L’acqua peggiora l’ostruzione.'),
        c5('Gli dai pacche forti sulla schiena mentre lo tieni dritto e cammini nella stanza', 'Improvvisare', 0.3, [3, 2, 3, 0], 'Sputa il boccone.', [-3, -6, 14, -2], 'Perdi minuti e non cambia nulla.')
      ]),
      card('m-ustione-incendio', 5, 'In un corridoio c’è fumo denso dal piano di sotto. Tuo padre è in camera al secondo piano e dorme.', [
        c5('Esci con chi puoi, chiudi le porte dietro di te, chiami il 112 da fuori e non rientri', 'Salvare chi puoi senza esporsi', 0.8, [6, 8, -6, 8], 'Tutti fuori e i vigili del fuoco in arrivo.', [3, 4, -2, 6], 'Qualcuno rimane dentro ma i soccorsi sono avvisati.'),
        c5('Attraversi il fumo per svegliarlo da solo', 'Eroismo rischioso', 0.25, [6, 6, 5, 0], 'Lo svegli e uscite insieme.', [-6, -12, 38, -2], 'Il fumo ti fa perdere conoscenza.'),
        c5('Esci e aspetti in strada senza chiamare nessuno', 'Omissione', 0.2, [2, 2, 0, 0], 'Un vicino chiama.', [-4, -7, 16, -4], 'Nessuno avvisa i soccorsi.')
      ]),
      card('m-telefono', 6, 'L’operatore del 112 ti chiede l’indirizzo, il tuo nome, cosa è successo e se la persona respira. Sei agitato.', [
        c5('Rispondi con calma, in ordine, e resti in linea finché l’operatore non ti dice di riagganciare', 'Collaborare con l’operatore', 0.9, [5, 5, -4, 8], 'L’operatore ti guida e l’equipe parte con le informazioni corrette.', [3, 3, -1, 6], 'Qualche informazione manca ma la squadra parte.'),
        c5('Riattacchi dopo aver detto «venite subito»', 'Chiamata incompleta', 0.3, [2, 0, 2, 2], 'Riescono a risalire all’indirizzo.', [-4, -6, 14, -4], 'Non sanno dove andare.'),
        c5('Dai l’indirizzo e poi corri a cercare altri a casa', 'Lasciare solo il ferito', 0.4, [3, 2, 3, 6], 'Torni subito.', [-3, -4, 12, 4], 'La vittima resta sola e peggiora.')
      ]),
      card('m-avvelenamento', 6, 'Un bambino di tre anni ha ingerito un liquido da un flacone di detersivo; è sveglio e piange.', [
        c5('Chiami subito il 112 o un centro antiveleni, tieni il flacone in mano per leggere l’etichetta e segui le istruzioni', 'Informazione dal professionista', 0.9, [6, 7, -6, 9], 'Ti dicono cosa fare in base al prodotto.', [4, 5, -2, 7], 'Serve una visita di controllo.'),
        c5('Provochi il vomito per eliminare il liquido', 'Gesto controindicato', 0.15, [3, 0, 5, 0], 'Per fortuna non succede nulla.', [-6, -12, 32, -2], 'Peggiora i danni a gola e polmoni.'),
        c5('Gli fai bere latte o acqua in abbondanza', 'Rimedio generico', 0.35, [3, 2, 2, 0], 'Sembra stare meglio.', [-4, -6, 14, -2], 'In certi casi peggiora il quadro.')
      ]),
      card('m-caduta', 7, 'Un familiare cade da una scala di un metro e mezzo: è cosciente ma lamenta forte dolore alla schiena e al collo.', [
        c5('Lo inviti a restare fermo, chiami il 112 e lo aiuti a non muoversi finché arrivano i soccorsi', 'Non mobilizzare', 0.85, [5, 7, -6, 8], 'Resta immobile e arrivano i soccorsi.', [3, 4, -2, 6], 'Vuole alzarsi, ma riesci a convincerlo.'),
        c5('Lo aiuti ad alzarsi per sedersi sul divano', 'Mobilizzare un traumatizzato', 0.25, [4, 3, 4, 0], 'Sembra stare meglio.', [-5, -10, 30, -2], 'Il movimento aggrava una lesione alla colonna.'),
        c5('Gli dai un antidolorifico e aspetti di vedere come va la notte', 'Rimandare', 0.3, [3, 3, 3, 0], 'Il dolore passa.', [-5, -8, 16, -3], 'Peggiora di notte.')
      ]),
      card('m-attesa', 8, 'Hai chiamato il 112 per un malore di un familiare; l’operatore dice che i soccorsi arriveranno in 12 minuti. Il familiare dice: «Sto meglio, non servono più».', [
        c5('Rimani con lui, riferisci all’operatore il cambiamento e aspetti comunque i soccorsi', 'Restare finché arriva l’aiuto', 0.85, [5, 7, -5, 7], 'I soccorsi lo valutano e trovano qualcosa da controllare.', [3, 4, -2, 5], 'Era un falso allarme ma sei stato prudente.'),
        c5('Richiami per annullare i soccorsi', 'Annullare per un miglioramento', 0.3, [3, 3, 2, -4], 'Per fortuna sta bene.', [-5, -10, 20, -9], 'Il malore ritorna senza aiuto in arrivo.'),
        c5('Lo lasci solo a riposare e vai ad aprire il portone', 'Lasciarlo solo', 0.5, [3, 3, 0, 5], 'Resta calmo.', [-3, -6, 10, 2], 'Si sente male mentre sei via.')
      ]),
      card('m-scena', 9, 'Dopo l’incidente in casa, la stanza è in disordine, ci sono schegge di vetro e un cavo scoperto. Il familiare è già stato portato via.', [
        c5('Metti in sicurezza vetri e cavo, avvisi chi di dovere e documenti con foto per assicurazione', 'Chiusura della scena', 0.8, [6, 6, -6, 4], 'Ripristini la sicurezza della casa.', [4, 3, -2, 2], 'Ti serve aiuto ma è fatto.'),
        c5('Pulisci tutto a mani nude per fare in fretta', 'Fretta senza protezioni', 0.4, [5, 1, 4, 0], 'Fatto in fretta.', [-2, -6, 18, -3], 'Ti tagli e si peggiora la situazione.'),
        c5('Lasci tutto così e vai in ospedale', 'Abbandonare la scena', 0.6, [-2, 1, 3, 3], 'Tornerai a sistemare.', [-4, -4, 10, 2], 'Un animale o un bambino si ferisce.')
      ]),
      card('m-formazione', 10, 'Dopo tante emergenze simulate pensi a come prepararti davvero. Hai tempo e un budget limitato.', [
        c5('Fai un corso di primo soccorso certificato, prepari una cassetta con numeri utili e un piano di evacuazione', 'Preparazione strutturata', 0.9, [8, 7, -6, 7], 'Ora sai cosa fare e dove stanno le cose.', [5, 4, -2, 4], 'Il corso è lungo ma lo porti a termine.'),
        c5('Guardi qualche video e pensi che basti', 'Formazione superficiale', 0.45, [4, 2, 1, 2], 'Hai qualche idea in più.', [-1, -3, 10, -2], 'Hai fiducia in gesti che non sai fare.'),
        c5('Decidi che in caso di bisogno chiamerai e basta', 'Delegare tutto', 0.6, [2, 3, 0, 3], 'Chiami bene.', [-1, -2, 6, 0], 'Non sai come aiutare nell’attesa.')
      ])
    ]
  });

  /* ---- 6) Imparare un'abilità in 10 settimane ---- */
  const c6 = mk(['abilita', 'motivazione', 'rischio', 'tempo']);
  SIM.register({
    id: 'cul-imparare', subject: 'sec', title: 'Imparare un’abilità in 10 settimane', icon: '🎯',
    intro: 'Vuoi imparare una nuova abilità pratica, per esempio suonare uno strumento o cucinare bene, in dieci settimane con meno di cinque ore alla settimana. Ogni scelta sposta abilità acquisita, motivazione, rischio (errori radicati, infortuni, scorciatoie) e tempo ed energia disponibili. Non esiste la scorciatoia universale: contano pratica deliberata, feedback rapido e quantità di ripetizioni di qualità.',
    vars: {
      abilita: { label: 'Abilità acquisita', start: 5, min: 0, max: 100 },
      motivazione: { label: 'Motivazione', start: 70, min: 0, max: 100 },
      rischio: { label: 'Rischio (errori radicati, infortuni, scorciatoie)', start: 15, min: 0, max: 100 },
      tempo: { label: 'Tempo ed energia residui', start: 60, min: 0, max: 100 }
    },
    weights: { abilita: 1.5, motivazione: 0.6, rischio: -1.1, tempo: 0.4 },
    penalties: [],
    turns: 6, utilText: '1,5 × abilità + 0,6 × motivazione − 1,1 × rischio + 0,4 × tempo',
    cards: [
      card('i-obiettivo', 1, 'Settimana 1. Definisci l’obiettivo: «voglio saper fare bene questa cosa». È un po’ vago.', [
        c6('Lo trasformi in un risultato osservabile alla decima settimana e in tappe settimanali piccole', 'Obiettivi specifici', 0.85, [5, 4, -3, 2], 'Sai cosa fare ogni settimana.', [3, 2, -1, 0], 'Le tappe sono troppo ambiziose ma le correggi.'),
        c6('Lo lasci vago: troppa precisione toglie il piacere', 'Obiettivo vago', 0.5, [3, 4, 2, 2], 'Procedi con entusiasmo.', [0, -4, 5, 0], 'Dopo tre settimane non sai se stai migliorando.'),
        c6('Punti subito a un livello da esperto', 'Obiettivo irrealistico', 0.3, [5, 6, 3, -2], 'Sei molto motivato.', [0, -10, 8, -4], 'Il divario ti scoraggia.')
      ]),
      card('i-metodo', 1, 'Devi scegliere come studiare: un corso strutturato, video a caso online, o un libro di base.', [
        c6('Un percorso con progressione chiara e un insegnante o una guida affidabile, integrato con pratica', 'Struttura e guida', 0.8, [6, 3, -3, 0], 'Impari le basi nell’ordine giusto.', [3, 0, -1, -2], 'Il ritmo del corso non è perfetto per te.'),
        c6('Guardi video sparsi senza ordine', 'Apprendimento frammentato', 0.4, [5, 4, 2, 2], 'Impari qualcosa di utile.', [1, -3, 8, 0], 'Impari scorciatoie sbagliate.'),
        c6('Studi solo teoria prima di toccare nulla', 'Teoria senza pratica', 0.5, [2, -2, 0, -2], 'Hai le basi.', [0, -6, 1, -4], 'Nulla resta senza pratica.')
      ]),
      card('i-routine', 2, 'Hai in media 4 ore alla settimana. Come le organizzi?', [
        c6('Quattro sessioni brevi da un’ora, in orari fissi, con un obiettivo preciso per ciascuna', 'Pratica distribuita', 0.85, [7, 4, -2, 0], 'Le sessioni brevi si consolidano.', [4, 2, 0, -2], 'Una sessione salta ma l’abitudine regge.'),
        c6('Un’unica maratona di 4 ore nel fine settimana', 'Pratica concentrata', 0.5, [5, -1, 2, -2], 'Impari molto in una volta.', [2, -5, 5, -5], 'Sei stanco e dimentichi.'),
        c6('Pratichi solo quando ne hai voglia', 'Pratica irregolare', 0.4, [4, 3, 1, 2], 'Hai buone giornate.', [0, -6, 3, 0], 'Salti intere settimane.')
      ]),
      card('i-errori', 2, 'Ti accorgi che continui a sbagliare lo stesso passaggio. Ti irrita.', [
        c6('Rallenti, isoli il passaggio e lo ripeti piano con attenzione, controllando ogni parte', 'Pratica deliberata', 0.85, [8, 2, -4, -2], 'L’errore sparisce in pochi giorni.', [4, 0, -1, -3], 'Serve più tempo ma funziona.'),
        c6('Prosegui, tanto con il tempo passerà', 'Ignorare l’errore', 0.4, [3, 3, 1, 2], 'Passa da solo.', [-1, -3, 10, 0], 'L’errore si fissa come abitudine.'),
        c6('Cambi esercizio per non demotivarti', 'Evitare la difficoltà', 0.5, [2, 3, 0, 1], 'Ti rilassi.', [0, 0, 5, 0], 'Il problema si ripresenta più avanti.')
      ]),
      card('i-feedback', 3, 'Dopo tre settimane non sai se stai facendo bene. Conosci una persona esperta disponibile solo una volta ogni due settimane.', [
        c6('Registri le tue prove e le mostri a chi sa, con domande precise', 'Feedback esterno', 0.85, [8, 3, -5, -2], 'Ricevi due correzioni che valgono ore.', [4, 1, -2, -3], 'I consigli sono generici ma utili.'),
        c6('Ti fidi della tua percezione: sai com’è andata', 'Autovalutazione', 0.4, [4, 3, 3, 2], 'Hai ragione.', [0, -2, 9, 0], 'Non vedi errori che gli altri notano subito.'),
        c6('Chiedi pareri a chi non conosce la materia', 'Feedback non qualificato', 0.5, [2, 4, 1, 1], 'Ti incoraggiano.', [0, 1, 6, 0], 'Ti dicono che va bene quando non è vero.')
      ]),
      card('i-plateau', 3, 'Settimana 5. I progressi si sono fermati da dieci giorni. Ti senti bloccato.', [
        c6('Analizzi cosa non funziona e cambi un elemento alla volta del metodo', 'Cambiare metodo con dati', 0.8, [6, 3, -3, -2], 'Il progresso riparte.', [2, 0, -1, -3], 'Il cambio non porta ancora risultati, ma impari.'),
        c6('Raddoppi le ore a parità di metodo', 'Più ore stesso metodo', 0.4, [5, -2, 3, -8], 'Sblocchi.', [0, -7, 5, -10], 'Ti stanchi senza risultati.'),
        c6('Aspetti: i plateau passano da soli', 'Attesa', 0.5, [3, -1, 1, 3], 'Passa.', [-1, -6, 4, 0], 'Non cambia nulla.')
      ]),
      card('i-motivazione', 4, 'Settimana 6. Non hai più voglia: le sessioni sembrano un dovere.', [
        c6('Riduci temporaneamente la durata, aggiungi un piccolo obiettivo divertente e condividi i progressi', 'Sostenibilità', 0.8, [4, 8, -2, 2], 'Ritrovi il piacere di iniziare.', [2, 4, 0, 0], 'La motivazione risale lentamente.'),
        c6('Ti imponi disciplina ferrea: «niente scuse»', 'Forza di volontà', 0.45, [6, -4, 2, -4], 'Resisti.', [1, -12, 5, -8], 'Collassi e salti due settimane.'),
        c6('Sospendi tutto per un mese', 'Pausa lunga', 0.3, [-5, 4, 0, 4], 'Ti riposi.', [-10, -4, 3, 3], 'Perdi il ritmo e ricominci quasi da zero.')
      ]),
      card('i-scorciatoia', 5, 'Un tutorial promette: «Padroneggia l’abilità in 10 giorni con questo trucco». Costa 90 €.', [
        c6('Lo ignori e continui con il tuo piano; se è interessante prendi solo spunti di metodo', 'Scetticismo sulle promesse', 0.85, [4, 3, -3, 2], 'Risparmi soldi e tempo.', [2, 1, -1, 0], 'Perdi un po’ di tempo a valutare.'),
        c6('Lo acquisti: forse c’è un trucco che non conosci', 'Illusione della scorciatoia', 0.25, [5, 5, 3, -2], 'Qualche idea è utile.', [0, -6, 9, -5], 'Perdi soldi e tempo su metodi inefficaci.'),
        c6('Abbandoni il piano per seguire il tutorial', 'Cambiare per novità', 0.2, [4, 6, 3, -3], 'Funziona abbastanza.', [-2, -8, 10, -6], 'Perdi le settimane investite.')
      ]),
      card('i-infortunio', 6, 'Dopo una sessione lunga senti un dolore insolito a mano e polso (o all’equivalente per la tua abilità). Dura due giorni.', [
        c6('Riposi, riduci i carichi, controlli postura e tecnica, e ti rivolgi a un professionista se persiste', 'Ascoltare i segnali', 0.85, [3, 2, -6, -2], 'Il fastidio sparisce.', [0, -1, -2, -4], 'Serve una settimana di riposo.'),
        c6('Continui: senza dolore non c’è progresso', 'Ignorare il dolore', 0.3, [5, 3, 5, 0], 'Il dolore passa.', [-4, -4, 25, -4], 'Il problema si aggrava e ti ferma per settimane.'),
        c6('Smetti per sempre per paura', 'Eccesso di cautela', 0.5, [-5, -6, -3, 2], 'Riposi.', [-8, -9, -2, 3], 'Perdi l’abilità.')
      ]),
      card('i-tempo', 7, 'Il lavoro ti toglie tempo: questa settimana hai solo due ore libere.', [
        c6('Mantieni brevi sessioni di qualità sulle cose più importanti e rinunci al resto', 'Minimo efficace', 0.85, [4, 3, -2, 1], 'Non perdi il filo.', [2, 1, 0, -1], 'Il progresso rallenta.'),
        c6('Salti la settimana: ricomincerai la prossima', 'Salto totale', 0.4, [-2, -1, 0, 4], 'Ti riposi.', [-6, -6, 2, 2], 'È difficile ripartire.'),
        c6('Rinunci al sonno per recuperare le ore', 'Sacrificio del riposo', 0.35, [5, -1, 4, -8], 'Ce la fai.', [0, -6, 10, -14], 'Sei esausto e fai errori.')
      ]),
      card('i-gruppo', 8, 'Un amico più esperto ti propone di fare pratica insieme, ma il suo livello è molto più alto del tuo.', [
        c6('Accetti, chiedi di lavorare sui tuoi punti deboli e di mostrarti i passi base', 'Imparare con chi sa', 0.8, [7, 6, -3, 0], 'Impari più in due ore che in due settimane.', [4, 3, -1, -2], 'Il divario si sente, ma impari.'),
        c6('Rifiuti: ti vergogni di mostrare quanto sei indietro', 'Evitare il confronto', 0.5, [2, -1, 1, 2], 'Procedi da solo.', [0, -4, 4, 0], 'Perdi un’occasione preziosa.'),
        c6('Accetti ma cerchi di imitare i suoi movimenti avanzati', 'Salto di livello', 0.3, [6, 5, 3, -1], 'Impari in fretta.', [-2, -3, 14, -3], 'Consolidi una tecnica sbagliata.')
      ]),
      card('i-prova', 9, 'Settimana 9. Devi dimostrare l’abilità davanti ad alcune persone. Hai paura di sbagliare.', [
        c6('Fai una prova generale registrata e riduci il programma ai pezzi che padroneggi', 'Preparazione realistica', 0.85, [6, 5, -3, -1], 'La prova va bene.', [3, 2, -1, -2], 'Qualche errore, ma gestito.'),
        c6('Provi un pezzo nuovo e più difficile per fare colpo', 'Rischio inutile', 0.25, [8, 7, 3, 0], 'Impressioni tutti.', [-2, -8, 10, -3], 'Sbagli davanti a tutti e perdi fiducia.'),
        c6('Rinunci a dimostrare: non sei pronto', 'Evitamento', 0.6, [-1, -3, 0, 2], 'Eviti ansia.', [-3, -6, 1, 1], 'Rimpiangi di non aver provato.')
      ]),
      card('i-bilancio', 10, 'Settimana 10. Valuti il risultato: non hai raggiunto tutto, ma è un progresso reale. Come prosegui?', [
        c6('Fai il bilancio con dati e video, scegli un nuovo obiettivo e mantieni una pratica minima', 'Ciclo di miglioramento', 0.85, [5, 6, -3, 0], 'Continui con un piano sostenibile.', [3, 3, -1, -1], 'Il nuovo obiettivo è ambizioso ma ci provi.'),
        c6('Smetti: obiettivo raggiunto, basta', 'Fermarsi', 0.5, [-3, 0, 0, 5], 'Ti riposi.', [-7, -5, 0, 4], 'In pochi mesi perdi quasi tutto.'),
        c6('Ti confronti con esperti di anni e ti scoraggi', 'Confronto impari', 0.4, [1, -4, 1, 0], 'Impari dai migliori.', [-2, -9, 3, 0], 'Perdi l’entusiasmo.')
      ])
    ]
  });
})(window.ST = window.ST || {});
