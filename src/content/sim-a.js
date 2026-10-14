/* SkillTree — scenari di strategia a carte (serie A): lancio di un prodotto e gestione di una crisi. Tutto inventato e didattico. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  const ch = (label, principle, out, hint) => hint ? { label, principle, hint, out } : { label, principle, out };

  /* ---- 1) Lanciare un prodotto in 12 settimane ---- */
  SIM.register({
    id: 'progetto', title: 'Lanciare un prodotto in 12 settimane', icon: '🚀',
    intro: 'Guidi il lancio di un’app gestionale per piccoli studi professionali: hai un budget limitato e 12 settimane di tempo. Ogni turno porta una decisione (assunzioni, funzionalità, test, marketing, imprevisti). L’obiettivo è arrivare al lancio con un prodotto solido e una buona reputazione, senza esaurire budget e tempo: qualità e reputazione contano di più, budget e settimane residue sono un margine di sicurezza, e restare a secco o sfondare la scadenza è penalizzato.',
    vars: {
      budget: { label: 'Budget', start: 100, min: -150, max: 300, unit: 'k€', tight: true },
      tempo: { label: 'Tempo residuo', start: 12, min: -15, max: 30, unit: 'settimane', tight: true },
      qualita: { label: 'Qualità del prodotto', start: 55, min: -100, max: 200 },
      reputazione: { label: 'Reputazione', start: 45, min: -100, max: 200 }
    },
    weights: { budget: 0.5, tempo: 4, qualita: 1, reputazione: 0.9 },
    penalties: [],
    turns: 5,
    utilText: '0,5 × budget + 4 × settimane residue + qualità + 0,9 × reputazione; sforare budget o scadenza (valori negativi) fa perdere punti in modo proporzionale',
    cards: [
      { id: 'pr-team', lv: 1, text: 'Serve un secondo sviluppatore backend: il lavoro previsto è di circa 20 settimane-persona. Un’assunzione costa 18 k€ ma richiede 2 settimane di inserimento; un’agenzia costa 28 k€ ed è subito operativa; un freelance costa 10 k€ ma l’affidabilità è incerta.', choices: [
        ch('Assumi uno sviluppatore', 'Costo opportunità', [o(1, { budget: -18, tempo: -2, qualita: 10 }, 'Si inserisce bene ma l’onboarding costa due settimane.')], 'Investi in capacità stabile, pagando in tempo.'),
        ch('Affidi il backend a un’agenzia', 'Collo di bottiglia', [o(1, { budget: -28, tempo: -0.5, qualita: 6 }, 'Parte subito, ma costa tanto e conosce poco il prodotto.')]),
        ch('Prendi un freelance', 'Informazione prima di decidere', [o(0.7, { budget: -10, tempo: -1, qualita: 5 }, 'Il freelance consegna in tempo.'), o(0.3, { budget: -10, tempo: -2.5, qualita: -4, reputazione: -3 }, 'Consegne in ritardo e codice da rifare.')])
      ] },
      { id: 'pr-mvp', lv: 1, text: 'Il backlog ha 30 funzionalità. Un MVP con le 8 essenziali richiede poco tempo; fare tutto richiede molto di più; una via di mezzo con 15 funzioni è un compromesso.', choices: [
        ch('Solo MVP essenziale', 'Reversibilità', [o(1, { budget: -4, tempo: -1, qualita: 4, reputazione: 1 }, 'Prodotto snello, pronto presto: si può ampliare dopo il lancio.')]),
        ch('Tutte le funzionalità', 'Costo opportunità', [o(1, { budget: -10, tempo: -3, qualita: 12, reputazione: 3 }, 'Prodotto ricco, ma settimane preziose consumate.')]),
        ch('15 funzionalità', 'Anticipare il secondo ordine', [o(0.75, { budget: -7, tempo: -2, qualita: 8, reputazione: 2 }, 'Equilibrio buono.'), o(0.25, { budget: -8, tempo: -3, qualita: 5 }, 'Le integrazioni si rivelano più lunghe del previsto.')])
      ] },
      { id: 'pr-beta', lv: 2, text: 'Il prodotto è quasi pronto. Una beta chiusa con 40 studi richiede due settimane e un po’ di supporto; saltarla fa risparmiare tempo ma lascia i bug alla produzione.', choices: [
        ch('Beta chiusa di 2 settimane', 'Informazione prima di decidere', [o(1, { budget: -3, tempo: -2, qualita: 8, reputazione: 3 }, 'I tester trovano e fanno correggere i difetti peggiori.')]),
        ch('Mini-beta con 15 utenti, 1 settimana', 'Ridondanza/buffer', [o(1, { budget: -2, tempo: -1, qualita: 4, reputazione: 1 }, 'Qualche difetto emerge, non tutti.')]),
        ch('Salta la beta', 'Rischio asimmetrico', [o(0.65, { tempo: 0.5, qualita: 0 }, 'Nessun problema evidente: hai guadagnato tempo.'), o(0.35, { qualita: -12, reputazione: -10, budget: -4 }, 'Bug grave al lancio, utenti scontenti e hotfix urgenti.')])
      ] },
      { id: 'pr-prezzo', lv: 2, text: 'Devi fissare il prezzo. Un piano premium a 49 €/mese dà margini ma meno clienti; 19 €/mese conquista quota ma sacrifica ricavi; un piano gratuito limitato attira utenti ma costa supporto.', choices: [
        ch('Premium 49 €/mese', 'Costo opportunità', [o(0.7, { budget: 10, reputazione: 3 }, 'Gli studi più strutturati accettano e il margine è buono.'), o(0.3, { budget: 2, reputazione: -2 }, 'Poche iscrizioni nei primi giorni.')]),
        ch('Penetrazione a 19 €/mese', 'Anticipare il secondo ordine', [o(1, { budget: -4, reputazione: 8 }, 'Molti iscritti ma costi di supporto maggiori.')]),
        ch('Freemium con limiti', 'Reversibilità', [o(0.75, { budget: -8, reputazione: 10, tempo: -0.5 }, 'Buon passaparola: i gratuiti portano nuovi clienti.'), o(0.25, { budget: -8, reputazione: 2, tempo: -1 }, 'Pochi passano al piano a pagamento.')])
      ] },
      { id: 'pr-stampa', lv: 3, text: 'Un blog di settore ti invita a un’intervista esclusiva tra tre giorni. Il prodotto non è del tutto stabile: una demo dal vivo può impressionare o fallire.', choices: [
        ch('Accetti con demo dal vivo', 'Rischio asimmetrico', [o(0.7, { reputazione: 12, tempo: -0.5 }, 'La demo funziona: grande visibilità.'), o(0.3, { reputazione: -10, tempo: -1 }, 'La demo si blocca in diretta: pessima figura.')]),
        ch('Mandi un comunicato e video registrato', 'Reversibilità', [o(1, { reputazione: 4, budget: -2 }, 'Visibilità modesta ma controllata.')]),
        ch('Rifiuti e prosegui con lo sviluppo', 'Costo opportunità', [o(1, { tempo: 0.5, reputazione: -1 }, 'Più tempo per lavorare, occasione persa.')])
      ] },
      { id: 'pr-debito', lv: 3, text: 'Il codice scritto in fretta ha accumulato debito tecnico: ogni modifica è più lenta e i difetti aumentano. Un refactoring completo richiede una settimana e mezza.', choices: [
        ch('Refactoring completo', 'Ridondanza/buffer', [o(1, { tempo: -1.5, budget: -5, qualita: 9 }, 'Il codice è più pulito e stabile.')]),
        ch('Refactoring solo dei moduli critici', 'Collo di bottiglia', [o(1, { tempo: -0.5, budget: -2, qualita: 4 }, 'Risolti i punti più a rischio.')]),
        ch('Rimandi a dopo il lancio', 'Anticipare il secondo ordine', [o(0.7, { qualita: -2 }, 'Per ora regge.'), o(0.3, { qualita: -12, tempo: -1 }, 'Il sistema diventa instabile e perdi giorni a correggerlo.')])
      ] },
      { id: 'pr-marketing', lv: 4, text: 'Quando far partire il marketing? Lanciare la campagna ora crea attesa (15 k€) ma se il prodotto slitta perde credibilità; farlo a ridosso del lancio costa meno ma rende meno; una lista d’attesa organica costa poco.', choices: [
        ch('Campagna anticipata', 'Anticipare il secondo ordine', [o(0.75, { budget: -15, reputazione: 10 }, 'Molta attesa: la lista d’attesa cresce.'), o(0.25, { budget: -15, reputazione: -8, tempo: -0.5 }, 'Il prodotto slitta e l’attesa si trasforma in critica.')]),
        ch('Campagna a ridosso del lancio', 'Costo opportunità', [o(1, { budget: -10, reputazione: 6 }, 'Effetto buono e senza rischi di ritardo.')]),
        ch('Lista d’attesa organica', 'Ridondanza/buffer', [o(1, { budget: -2, reputazione: 3, tempo: -0.5 }, 'Pochi costi, poco impatto.')])
      ] },
      { id: 'pr-fornitore', lv: 5, text: 'Il fornitore dell’infrastruttura per la sicurezza dei dati annuncia un ritardo di due settimane. Un fornitore alternativo premium costa 14 k€ ed è pronto subito; una soluzione cloud temporanea costa meno ma va poi migrata.', choices: [
        ch('Attendi il fornitore', 'Collo di bottiglia', [o(1, { tempo: -2 }, 'Perdi due settimane ma nessuna spesa.')]),
        ch('Passi al fornitore alternativo premium', 'Costo opportunità', [o(1, { budget: -14, tempo: -0.5 }, 'Attivo quasi subito, ma costoso.')]),
        ch('Soluzione cloud temporanea', 'Reversibilità', [o(0.7, { budget: -6, tempo: -1, qualita: -2 }, 'Funziona, con un po’ di lavoro di migrazione.'), o(0.3, { budget: -8, tempo: -2, qualita: -5 }, 'La migrazione è più complessa del previsto.')])
      ] },
      { id: 'pr-dev', lv: 5, text: 'La sviluppatrice chiave comunica che si dimetterà tra due settimane per un’offerta migliore. Conosce a fondo il codice del modulo di fatturazione.', choices: [
        ch('Controfferta (+12 k€)', 'Costo opportunità', [o(0.8, { budget: -12 }, 'Accetta e resta fino al lancio.'), o(0.2, { budget: -12, tempo: -2, qualita: -6 }, 'Se ne va comunque e il budget è sprecato.')]),
        ch('Passaggio di consegne e sostituto', 'Reversibilità', [o(1, { budget: -8, tempo: -2, qualita: -3 }, 'Perdi tempo ma la conoscenza si trasferisce.')]),
        ch('Redistribuisci il carico sul team', 'Collo di bottiglia', [o(1, { tempo: -1, qualita: -8 }, 'Il team regge ma la qualità cala.')])
      ] },
      { id: 'pr-reclamo', lv: 6, text: 'Uno studio pilota, tra i più influenti nel settore, segnala per iscritto un difetto nel calcolo dei compensi. Minaccia di sospendere l’utilizzo.', choices: [
        ch('Correzione immediata dedicata', 'Informazione prima di decidere', [o(1, { tempo: -1, budget: -3, reputazione: 6, qualita: 3 }, 'Lo studio apprezza la rapidità e lo racconta ad altri.')]),
        ch('Rispondi e metti in roadmap', 'Reversibilità', [o(0.7, { reputazione: 1 }, 'Lo studio accetta di aspettare.'), o(0.3, { reputazione: -10 }, 'Lo studio scrive pubblicamente della delusione.')]),
        ch('Rimborso e scuse', 'Costo opportunità', [o(1, { budget: -6, reputazione: 4 }, 'Lo studio resta, ma il difetto non è risolto.')])
      ] },
      { id: 'pr-concorrente', lv: 6, text: 'Un concorrente annuncia che lancerà un prodotto simile tra tre settimane, prima di te. Hai ancora margine di preparazione.', choices: [
        ch('Accelera il lancio tagliando funzionalità', 'Collo di bottiglia', [o(1, { tempo: 1.5, qualita: -8, reputazione: 2 }, 'Arrivi in contemporanea, con meno funzioni.')]),
        ch('Differenzia con una funzione esclusiva', 'Anticipare il secondo ordine', [o(0.7, { budget: -12, tempo: -1.5, qualita: 6, reputazione: 4 }, 'Il tuo prodotto spicca rispetto al concorrente.'), o(0.3, { budget: -12, tempo: -2, qualita: 2, reputazione: -4 }, 'La funzione non convince e hai perso tempo.')]),
        ch('Mantieni la rotta', 'Informazione prima di decidere', [o(0.5, { reputazione: 0 }, 'Il mercato non si accorge dell’anticipo.'), o(0.5, { reputazione: -8 }, 'Il concorrente cattura l’attenzione e sembri secondo.')])
      ] },
      { id: 'pr-investitore', lv: 7, text: 'Un investitore propone 30 k€ aggiuntivi se anticipi il lancio di due settimane. Il prodotto è fragile e anticipare significa tagliare test.', choices: [
        ch('Accetti l’offerta', 'Rischio asimmetrico', [o(0.6, { budget: 30, tempo: 2, qualita: -10 }, 'Lanci in anticipo con fondi extra ma qualità più bassa.'), o(0.4, { budget: 30, tempo: 1, qualita: -14, reputazione: -8 }, 'Lancio frettoloso, bug e proteste.')]),
        ch('Rifiuti e mantieni il piano', 'Reversibilità', [o(1, {}, 'Niente cambia.')]),
        ch('Negozi 15 k€ per un anticipo di una settimana', 'Informazione prima di decidere', [o(0.5, { budget: 15, tempo: 1, qualita: -4 }, 'L’investitore accetta il compromesso.'), o(0.5, { reputazione: -4, tempo: -0.5 }, 'La trattativa ti distrae e l’investitore si raffredda.')])
      ] },
      { id: 'pr-audit', lv: 8, text: 'Il tuo prodotto tratta dati sensibili di clienti. Un audit di sicurezza esterno costa 10 k€ e richiede una settimana e mezza; una checklist interna è rapida ma meno sicura.', choices: [
        ch('Audit esterno completo', 'Ridondanza/buffer', [o(1, { budget: -10, tempo: -1.5, qualita: 6, reputazione: 3 }, 'Vulnerabilità corrette: dormi tranquillo.')]),
        ch('Checklist interna', 'Costo opportunità', [o(0.8, { budget: -1, tempo: -0.5, qualita: 2 }, 'Nessun problema rilevato.'), o(0.2, { qualita: -10, reputazione: -20, tempo: -1 }, 'Si scopre una falla dopo il lancio: grave danno di immagine.')]),
        ch('Rimanda dopo il lancio', 'Rischio asimmetrico', [o(0.55, { tempo: 0.5 }, 'Nulla di grave, hai guadagnato tempo.'), o(0.45, { reputazione: -18, qualita: -8, budget: -6 }, 'Un incidente di sicurezza costa tanto.')])
      ] },
      { id: 'pr-straordinari', lv: 9, text: 'Mancano pochi giorni e il team è indietro. Puoi chiedere straordinari pagati (6 k€), spostare la data o tagliare ulteriormente.', choices: [
        ch('Straordinari pagati', 'Collo di bottiglia', [o(0.65, { budget: -6, tempo: 2 }, 'Il team recupera due settimane.'), o(0.35, { budget: -6, tempo: 1, qualita: -12 }, 'Stanchezza e errori: qualità in calo.')]),
        ch('Sposti la data di una settimana', 'Reversibilità', [o(1, { tempo: -1, reputazione: -3 }, 'Il team lavora con calma ma perdi un po’ di credibilità.')]),
        ch('Tagli altre funzionalità', 'Costo opportunità', [o(1, { tempo: 1.5, qualita: -7, reputazione: -2 }, 'Prodotto più asciutto, lancio in tempo.')])
      ] },
      { id: 'pr-enterprise', lv: 10, text: 'Un grande gruppo propone un contratto da 25 k€ per personalizzazioni ad hoc; ti richiederebbe tre settimane di lavoro. In alternativa propone un contratto standard da 10 k€.', choices: [
        ch('Accetti le personalizzazioni', 'Rischio asimmetrico', [o(0.7, { budget: 25, tempo: -3, qualita: -6, reputazione: 6 }, 'Incassi ma consumi quasi tutto il margine di tempo.'), o(0.3, { budget: 10, tempo: -3.5, qualita: -8, reputazione: -4 }, 'Le richieste crescono e il contratto si riduce.')]),
        ch('Offri il contratto standard', 'Costo opportunità', [o(1, { budget: 10, tempo: -0.5, reputazione: 2 }, 'Incasso modesto, poco impatto sul piano.')]),
        ch('Declini per concentrarti sul lancio', 'Reversibilità', [o(1, { tempo: 0.5, reputazione: -1 }, 'Il piano resta intatto.')])
      ] }
    ]
  });

  /* ---- 2) Gestire una crisi: blackout in un centro congressi ---- */
  SIM.register({
    id: 'crisi', title: 'Gestire una crisi: blackout in un centro congressi con 800 persone', icon: '🚨',
    intro: 'Sei il responsabile dell’evento: un blackout improvviso ha lasciato al buio un centro congressi con 800 partecipanti, tra cui un ospite istituzionale. Hai a disposizione squadre e mezzi (steward, medici, tecnici) e una finestra di tempo limitata prima che le batterie di emergenza si esauriscano. L’obiettivo è mantenere alta la sicurezza e la fiducia dei presenti spendendo con giudizio squadre e minuti: sicurezza e fiducia sono ciò che conta, restare senza squadre o senza tempo è penalizzato.',
    vars: {
      risorse: { label: 'Squadre e mezzi', start: 12, min: -20, max: 30, unit: 'squadre', tight: true },
      tempo: { label: 'Tempo disponibile', start: 70, min: -100, max: 200, unit: 'min', tight: true },
      sicurezza: { label: 'Sicurezza', start: 70, min: -100, max: 200 },
      fiducia: { label: 'Fiducia dei presenti', start: 70, min: -100, max: 200 }
    },
    weights: { risorse: 2, tempo: 0.5, sicurezza: 1.3, fiducia: 0.7 },
    penalties: [],
    turns: 5,
    utilText: '2 × squadre + 0,5 × minuti + 1,3 × sicurezza + 0,7 × fiducia; esaurire squadre o minuti (valori negativi) fa perdere punti in modo proporzionale',
    cards: [
      { id: 'cr-comm', lv: 1, text: 'Sono passati 30 secondi dal blackout, la sala è al buio con le luci di emergenza deboli. Come comunichi ai presenti?', choices: [
        ch('Annuncio al microfono con batteria', 'Anticipare il secondo ordine', [o(0.8, { tempo: -2, fiducia: 8 }, 'Voce calma, la sala si tranquillizza.'), o(0.2, { tempo: -4, fiducia: -2 }, 'Il microfono non funziona: messaggio perso.')]),
        ch('Staff in sala con megafoni e cartelli', 'Ridondanza/buffer', [o(1, { risorse: -2, tempo: -5, fiducia: 5, sicurezza: 3 }, 'Comunicazione capillare ma impegna due squadre.')]),
        ch('Attendi notizie dai tecnici', 'Informazione prima di decidere', [o(0.6, { tempo: -3, fiducia: 2 }, 'Il tecnico conferma presto un guasto semplice.'), o(0.4, { tempo: -4, fiducia: -10, sicurezza: -8 }, 'Il silenzio genera ansia e movimenti disordinati.')])
      ] },
      { id: 'cr-triage', lv: 1, text: 'In sala 3 una persona è svenuta, altre cinque hanno malori lievi (agitazione, calore). Hai a disposizione medici e volontari.', choices: [
        ch('Squadra medica sul caso grave', 'Collo di bottiglia', [o(1, { risorse: -2, tempo: -3, sicurezza: 8 }, 'Il caso grave è stabilizzato, i lievi restano da seguire.')]),
        ch('Infermeria mobile centralizzata', 'Ridondanza/buffer', [o(1, { risorse: -3, tempo: -6, sicurezza: 12, fiducia: 3 }, 'Tutti sono seguiti, ma impegna molte risorse.')]),
        ch('Volontari per i lievi, medico sul grave', 'Costo opportunità', [o(0.75, { risorse: -1, tempo: -4, sicurezza: 9 }, 'Gestione efficiente.'), o(0.25, { risorse: -1, tempo: -5, sicurezza: 3, fiducia: -5 }, 'Un malore lieve peggiora e si perde tempo.')])
      ] },
      { id: 'cr-delega', lv: 2, text: 'Il capo della sicurezza chiede di avere piena autonomia sui settori nord e sud mentre tu coordini il resto.', choices: [
        ch('Delega totale ai capi settore', 'Anticipare il secondo ordine', [o(0.75, { tempo: -2, sicurezza: 6 }, 'I settori lavorano in parallelo, decisioni rapide.'), o(0.25, { tempo: -3, sicurezza: -8, fiducia: -4 }, 'Ordini contraddittori generano confusione.')]),
        ch('Centralizzi ogni decisione', 'Collo di bottiglia', [o(1, { tempo: -6, sicurezza: 4 }, 'Coerenza assicurata ma tutto passa da te.')]),
        ch('Delega con verifica ogni 10 minuti', 'Ridondanza/buffer', [o(1, { risorse: -1, tempo: -4, sicurezza: 7 }, 'Coordinamento buono, costo moderato.')])
      ] },
      { id: 'cr-buio', lv: 2, text: 'Nel corridoio centrale il buio è quasi totale e la gente si accalca verso le scale. Puoi posizionare steward con torce, usare i telefoni dei partecipanti come luce, oppure chiedere di restare seduti.', choices: [
        ch('Steward con torce lungo le scale', 'Ridondanza/buffer', [o(1, { risorse: -2, tempo: -3, sicurezza: 8, fiducia: 3 }, 'Percorso illuminato e flusso ordinato.')]),
        ch('Chiedi di usare le torce dei telefoni', 'Anticipare il secondo ordine', [o(0.75, { tempo: -2, sicurezza: 6, fiducia: 4 }, 'La gente collabora e il corridoio si illumina.'), o(0.25, { tempo: -3, sicurezza: -4, fiducia: -3 }, 'I telefoni si scaricano e si crea confusione.')]),
        ch('Chiedi di restare seduti', 'Reversibilità', [o(0.6, { tempo: -1, sicurezza: 3, fiducia: 2 }, 'La maggior parte resta ferma.'), o(0.4, { tempo: -2, sicurezza: -6, fiducia: -5 }, 'Alcuni si alzano comunque e il caos cresce.')])
      ] },
      { id: 'cr-ascensore', lv: 3, text: 'Tre persone sono bloccate nell’ascensore 3, una è claustrofobica. Un tecnico interno può tentare lo sblocco manuale.', choices: [
        ch('Vigili del fuoco specializzati', 'Informazione prima di decidere', [o(1, { risorse: -2, tempo: -5, sicurezza: 6, fiducia: 2 }, 'Intervento sicuro ma lento.')]),
        ch('Sblocco manuale del tecnico', 'Rischio asimmetrico', [o(0.7, { risorse: -1, tempo: -3, sicurezza: 5, fiducia: 3 }, 'Sblocco riuscito.'), o(0.3, { risorse: -1, tempo: -4, sicurezza: -10 }, 'La cabina si muove: infortunio.')]),
        ch('Rassicuri via interfono e attendi il ripristino', 'Reversibilità', [o(0.5, { tempo: -1, fiducia: 2, sicurezza: 2 }, 'La luce torna presto e l’ascensore riparte.'), o(0.5, { tempo: -2, sicurezza: -6, fiducia: -4 }, 'La persona claustrofobica va in panico.')])
      ] },
      { id: 'cr-evac', lv: 3, text: 'Al minuto 10 la luce non è tornata. Le batterie di emergenza durano ancora circa 40 minuti. Decidi se evacuare.', choices: [
        ch('Evacuazione immediata di tutti', 'Costo opportunità', [o(0.8, { risorse: -4, tempo: -12, sicurezza: 10, fiducia: -3 }, 'Evacuazione ordinata ma costosa.'), o(0.2, { risorse: -4, tempo: -12, sicurezza: -15, fiducia: -6 }, 'Calca nelle uscite: feriti.')]),
        ch('Attendi altri 10 minuti', 'Informazione prima di decidere', [o(0.6, { tempo: -3, sicurezza: 5, fiducia: 3 }, 'La luce torna in tempo: evacuazione evitata.'), o(0.4, { tempo: -5, sicurezza: -8, fiducia: -6 }, 'Il buio persiste: peggio di prima.')]),
        ch('Evacuazione progressiva per settori', 'Reversibilità', [o(1, { risorse: -2, tempo: -8, sicurezza: 8, fiducia: 2 }, 'Flusso ordinato, senza panico.')])
      ] },
      { id: 'cr-voce', lv: 4, text: 'Sui social circola una voce: «incendio nel centro congressi». Parenti e giornalisti stanno già chiamando.', choices: [
        ch('Smentita ufficiale con foto e aggiornamenti', 'Anticipare il secondo ordine', [o(1, { tempo: -2, fiducia: 8, sicurezza: 2 }, 'La voce si ferma e i presenti si tranquillizzano.')]),
        ch('Ignori e ti concentri sulla sala', 'Costo opportunità', [o(0.5, {}, 'La voce si spegne da sola.'), o(0.5, { sicurezza: -10, fiducia: -12 }, 'Arrivano persone dall’esterno, panico.')]),
        ch('Staff nei corridoi a smentire a voce', 'Ridondanza/buffer', [o(1, { risorse: -2, tempo: -4, fiducia: 5, sicurezza: 4 }, 'Messaggio chiaro, ma impegna personale.')])
      ] },
      { id: 'cr-escalation', lv: 4, text: 'Hai la possibilità di chiamare subito la protezione civile e i vigili del fuoco, ma l’allarme potrebbe spaventare la sala. Il guasto potrebbe essere semplice.', choices: [
        ch('Chiami subito i rinforzi', 'Ridondanza/buffer', [o(1, { risorse: 4, tempo: -2, fiducia: -2, sicurezza: 3 }, 'Arrivano mezzi e personale: più margine.')]),
        ch('Attendi la diagnosi tecnica (10 min)', 'Informazione prima di decidere', [o(0.6, { tempo: -5, fiducia: 3 }, 'Era un guasto semplice.'), o(0.4, { tempo: -5, sicurezza: -8, risorse: 2 }, 'Il guasto è grave e i rinforzi arrivano in ritardo.')]),
        ch('Allerta preventiva (stand-by)', 'Reversibilità', [o(1, { risorse: 2, tempo: -1 }, 'I soccorsi sono avvisati ma non mobilitati.')])
      ] },
      { id: 'cr-quadro', lv: 5, text: 'Il tecnico propone di riavviare subito il quadro elettrico: in 8 minuti torna la luce, ma c’è rischio di sovraccarico. Una verifica completa richiede 15 minuti; un generatore mobile può dare luce parziale.', choices: [
        ch('Riavvio immediato', 'Rischio asimmetrico', [o(0.7, { tempo: -3, sicurezza: 10, fiducia: 6 }, 'La luce torna: l’evento riparte.'), o(0.3, { tempo: -6, risorse: -2, sicurezza: -15 }, 'Corto circuito e fumo: situazione peggiorata.')]),
        ch('Verifica completa prima', 'Informazione prima di decidere', [o(1, { tempo: -12, sicurezza: 6, fiducia: 1 }, 'Riavvio sicuro ma lento.')]),
        ch('Generatore mobile', 'Reversibilità', [o(1, { risorse: -3, tempo: -7, sicurezza: 9, fiducia: 3 }, 'Luce parziale e sicura, a costo di risorse.')])
      ] },
      { id: 'cr-vip', lv: 5, text: 'L’ospite istituzionale, con il suo staff, vuole lasciare subito l’edificio dall’ingresso riservato: «non possiamo stare al buio».', choices: [
        ch('Scorta dedicata fuori dall’ingresso riservato', 'Collo di bottiglia', [o(1, { risorse: -2, tempo: -2, fiducia: -3 }, 'L’ospite è al sicuro, ma gli altri notano il trattamento di favore.')]),
        ch('Lo inviti a restare con tutti e spieghi', 'Informazione prima di decidere', [o(0.7, { fiducia: 4, tempo: -1 }, 'Accetta e dà il buon esempio.'), o(0.3, { fiducia: -10, tempo: -2 }, 'Polemica pubblica: critiche all’organizzazione.')]),
        ch('Area protetta con un operatore dedicato', 'Ridondanza/buffer', [o(1, { risorse: -1, tempo: -2, fiducia: 2, sicurezza: 2 }, 'L’ospite è tranquillo e non si sente trascurato.')])
      ] },
      { id: 'cr-cardiaco', lv: 6, text: 'Un partecipante di 62 anni ha un dolore al petto e perde i sensi. Sono disponibili un defibrillatore e volontari formati; i medici sono già impegnati.', choices: [
        ch('Squadra medica, DAE e ambulanza', 'Collo di bottiglia', [o(0.85, { risorse: -3, tempo: -6, sicurezza: 10, fiducia: 4 }, 'Rianimato e trasportato.'), o(0.15, { risorse: -3, tempo: -6, sicurezza: -4, fiducia: -3 }, 'Il paziente è grave nonostante l’intervento.')]),
        ch('Volontari con DAE, medico richiamato in seguito', 'Rischio asimmetrico', [o(0.6, { risorse: -1, tempo: -3, sicurezza: 8 }, 'I volontari intervengono bene.'), o(0.4, { risorse: -1, tempo: -4, sicurezza: -12, fiducia: -8 }, 'L’intervento è tardivo e inefficace.')]),
        ch('Ambulanza dedicata e continui l’evacuazione', 'Costo opportunità', [o(1, { risorse: -2, tempo: -2, sicurezza: 6, fiducia: 1 }, 'L’ambulanza interviene mentre tutto procede.')])
      ] },
      { id: 'cr-stampa', lv: 7, text: 'Fuori dall’ingresso una troupe televisiva chiede dichiarazioni: se non rispondi, potrebbe riprendere la folla e diffondere immagini fuori contesto.', choices: [
        ch('Portavoce con aggiornamento controllato', 'Anticipare il secondo ordine', [o(1, { risorse: -1, tempo: -3, fiducia: 8 }, 'Messaggio chiaro e rassicurante.')]),
        ch('Nessun commento', 'Rischio asimmetrico', [o(0.7, { fiducia: -2 }, 'Nessuna conseguenza.'), o(0.3, { fiducia: -14, sicurezza: -3 }, 'Un video virale mostra la confusione e amplifica l’ansia.')]),
        ch('Rimandi tutto a fine crisi', 'Reversibilità', [o(1, { fiducia: 3 }, 'Dichiarazione breve: «tutto sotto controllo».')])
      ] },
      { id: 'cr-uscita', lv: 8, text: 'Un’uscita di emergenza è ostruita da stand non rimossi. La folla in coda si ammassa sulle altre uscite.', choices: [
        ch('Squadra per rimuovere gli stand', 'Collo di bottiglia', [o(1, { risorse: -2, tempo: -6, sicurezza: 10 }, 'Uscita libera, flusso migliorato.')]),
        ch('Reindirizzi la folla sulle altre uscite', 'Rischio asimmetrico', [o(0.65, { tempo: -2, sicurezza: 4 }, 'Il flusso regge.'), o(0.35, { tempo: -3, sicurezza: -12, fiducia: -4 }, 'Ingorgo: spinte e malori.')]),
        ch('Apri il cancello ovest con due squadre', 'Ridondanza/buffer', [o(1, { risorse: -3, tempo: -4, sicurezza: 8, fiducia: 2 }, 'Nuova via di uscita aperta.')])
      ] },
      { id: 'cr-fumo', lv: 9, text: 'Dalla sala tecnica proviene odore di bruciato. Potrebbe essere un cavo surriscaldato o un principio di incendio.', choices: [
        ch('Isoli la zona ed evacui l’area adiacente', 'Ridondanza/buffer', [o(1, { risorse: -3, tempo: -5, sicurezza: 10, fiducia: -2 }, 'Area messa in sicurezza.')]),
        ch('Ispezione con un solo tecnico', 'Informazione prima di decidere', [o(0.55, { risorse: -1, tempo: -3, sicurezza: 4, fiducia: 3 }, 'Falso allarme: era un cavo caldo.'), o(0.45, { risorse: -1, tempo: -6, sicurezza: -14 }, 'Principio di incendio: intervento in ritardo.')]),
        ch('Estintori pronti e attesa', 'Costo opportunità', [o(0.5, { risorse: -1, tempo: -1, sicurezza: 2 }, 'L’odore svanisce.'), o(0.5, { risorse: -2, tempo: -3, sicurezza: -12, fiducia: -6 }, 'Il fumo aumenta e l’area va comunque evacuata.')])
      ] },
      { id: 'cr-chiusura', lv: 10, text: 'La luce è tornata a metà, ma gli impianti non sono tutti verificati. Puoi dichiarare chiuso l’evento e rimborsare i biglietti o tentare di riprendere il programma.', choices: [
        ch('Chiudi l’evento e rimborsa', 'Reversibilità', [o(1, { risorse: -2, tempo: -3, sicurezza: 8, fiducia: 5 }, 'Decisione prudente, apprezzata dai presenti.')]),
        ch('Riprendi il programma ridotto', 'Rischio asimmetrico', [o(0.6, { risorse: -1, tempo: -4, fiducia: 8, sicurezza: 2 }, 'L’evento riparte e la sala applaude.'), o(0.4, { risorse: -2, tempo: -6, sicurezza: -12, fiducia: -8 }, 'Un nuovo guasto interrompe tutto.')]),
        ch('Rinvii la decisione di 10 minuti', 'Informazione prima di decidere', [o(1, { tempo: -10, sicurezza: 4, fiducia: 2 }, 'Hai più informazioni, ma il tempo è finito.')])
      ] }
    ]
  });
})(window.ST = window.ST || {});
