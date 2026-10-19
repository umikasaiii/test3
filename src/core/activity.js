/* SkillTree — Contextual Practice Engine: registro persistente delle attività (laboratori e simulazioni), collegamenti
   argomento→pratica pertinente e motore dei suggerimenti.
   Principi: (1) lo stato vive dentro lo stato esistente (s.act): backup, esportazione e importazione lo includono;
   (2) completamento ≠ padronanza: una pratica può essere completata con un risultato insufficiente («Da ripassare»);
   (3) nessuna regola di verifica esistente viene toccata; (4) i collegamenti seguono gli argomenti, non la sola materia. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress, PL = ST.plan;
  const Z = ST.act = {};

  Z.STATUS = { todo: 'Da iniziare', doing: 'In corso', done: 'Completata', review: 'Da ripassare' };
  Z.DIFF = { base: 'Base', media: 'Media', alta: 'Alta' };
  Z.RECENT_DAYS = 10;      // una lezione è «recente» per i suggerimenti entro questa soglia
  Z.SNOOZE_DAYS = 3;       // «più tardi» nasconde l'attività per questo numero di giorni
  Z.REPEAT_DAYS = 10;      // distanza minima prima di riproporre una pratica già completata con buon risultato

  /* ---- stato persistente: s.act = { v, rec: { id → record }, snooze: { id → data } } ---- */
  Z.S = s => { const a = (s.act = s.act || {}); a.v = 1; a.rec = a.rec || {}; a.snooze = a.snooze || {}; return a; };
  Z.rec = (s, id) => Z.S(s).rec[id] || null;
  const mk = (s, id) => (Z.S(s).rec[id] = Z.S(s).rec[id] || { id, att: 0, first: null, last: null, begun: null, done: null, doneN: 0, best: null, score: null, ok: null, ms: null, manual: false, items: {} });

  /* L'utente (o un pulsante «Inizia») segna che sta cominciando: «In corso» finché non c'è un completamento. */
  Z.begin = (s, id) => { const r = mk(s, id); r.begun = r.begun || U.today(); return r; };
  /* Registra la fine di un tentativo.
     o: { item?, done = true, ok?, score? (0–1), ms? (solo se misurato), manual? }
     done=false → tentativo registrato ma non completato (attività «In corso»). */
  Z.record = (s, id, o) => {
    o = o || {}; const r = mk(s, id), day = U.today(), done = o.done !== false;
    r.att++; r.last = day; r.first = r.first || day; r.begun = r.begun || day;
    if (typeof o.score === 'number' && isFinite(o.score)) { r.score = +o.score.toFixed(3); r.best = r.best == null ? r.score : Math.max(r.best, r.score); }
    if (typeof o.ms === 'number' && o.ms > 0) r.ms = Math.round(o.ms);
    if (typeof o.ok === 'boolean') r.ok = o.ok;
    if (o.item != null) {
      const it = (r.items[o.item] = r.items[o.item] || { att: 0, ok: false, best: null, last: null });
      it.att++; it.last = day; if (o.ok === true || (o.ok == null && done)) it.ok = true;
      if (typeof o.score === 'number' && isFinite(o.score)) it.best = it.best == null ? +o.score.toFixed(3) : Math.max(it.best, +o.score.toFixed(3));
    }
    r.days = (r.days || []).filter(d => d !== day).concat(day).slice(-40);
    if (done) { r.done = r.done || day; r.doneN++; if (o.manual) r.manual = true; else if (r.doneN === 1) r.manual = false; }
    return r;
  };
  /* Conferma manuale, esplicita: usata solo per attività senza una condizione verificabile dall'app. */
  Z.confirm = (s, id) => Z.record(s, id, { manual: true });
  Z.finish = (id, o) => { try { const A = ST.app; if (!A || !A.state) return null; const r = Z.record(A.state, id, o); A.save(); return r; } catch (e) { return null; } };
  Z.snooze = (s, id, days) => { Z.S(s).snooze[id] = U.addDays(U.today(), days || Z.SNOOZE_DAYS); };
  Z.snoozed = (s, id) => { const d = Z.S(s).snooze[id]; return !!d && d > U.today(); };
  Z.itemsDone = (s, id) => { const r = Z.rec(s, id); return r ? Object.values(r.items).filter(i => i.ok).length : 0; };

  /* Stato di un'attività: completamento, non padronanza.
     «Da ripassare» = già completata ma l'ultimo tentativo non ha raggiunto il criterio dell'attività. */
  Z.status = (s, id) => {
    const r = Z.rec(s, id); if (!r) return 'todo';
    if (r.done) return r.ok === false ? 'review' : 'done';
    return (r.begun || r.att) ? 'doing' : 'todo';
  };

  /* ---- catalogo ---- */
  const META = {
    deduction: { kind: 'lab', skill: 'Ragionamento deduttivo e aggiornamento delle ipotesi', mins: 15, diff: 'media', auto: 'Completato quando concludi un caso (esito registrato).' },
    opponent: { kind: 'sim', skill: 'Lettura dell’avversario e adattamento', mins: 10, diff: 'media', auto: 'Completata a fine partita.' },
    forecast: { kind: 'lab', skill: 'Calibrazione delle previsioni', mins: 10, diff: 'media', auto: 'Completato dopo almeno 8 intervalli.' },
    crisis: { kind: 'sim', skill: 'Decisioni sotto pressione in una crisi', mins: 15, diff: 'alta', auto: 'Completata a fine scenario.' },
    comm: { kind: 'sim', skill: 'Comunicazione strategica', mins: 15, diff: 'media', auto: 'Completata a fine scenario.' },
    multimove: { kind: 'sim', skill: 'Pianificazione a più mosse', mins: 15, diff: 'media', auto: 'Completata a fine partita.' },
    strategos: { kind: 'lab', skill: 'Applicazione del metodo nella vita reale', mins: 20, diff: 'alta', auto: 'Completata quando chiudi la revisione di una missione.' },
    listening: { kind: 'lab', skill: 'Ascolto di parlato reale', mins: 20, diff: 'media', auto: null },
    combat: { kind: 'lab', skill: 'Riconoscimento tattico nel judo e nella lotta', mins: 10, diff: 'media', auto: 'Completato a fine situazione.' },
    cyberlab: { kind: 'lab', skill: 'Analisi difensiva con comandi (simulata)', mins: 20, diff: 'media', auto: 'Completato quando risolvi un esercizio.' },
    proglab: { kind: 'lab', skill: 'Programmazione e debugging', mins: 25, diff: 'alta', auto: 'Completato quando superi tutti i test di un esercizio.' },
    f1lab: { kind: 'sim', skill: 'Strategia di gara', mins: 15, diff: 'media', auto: 'Completata quando esegui un piano, un duello o un confronto.' },
    sportlab: { kind: 'lab', skill: 'Progettazione e critica dei programmi di allenamento', mins: 20, diff: 'alta', auto: 'Completato quando concludi uno studio.' },
    convoEn: { kind: 'sim', skill: 'Conversazione in inglese', mins: 15, diff: 'media', auto: 'Completata a fine scenario.' },
    convoJa: { kind: 'sim', skill: 'Conversazione in giapponese', mins: 15, diff: 'media', auto: 'Completata a fine scenario.' },
    cross: { kind: 'lab', skill: 'Integrazione di più materie', mins: 30, diff: 'alta', auto: 'Completata quando salvi la sintesi finale.' },
    cog: { kind: 'lab', skill: 'Prestazione cognitiva', mins: 15, diff: 'media', auto: 'Completato a fine sessione.' },
    decision: { kind: 'lab', skill: 'Decisioni quantitative', mins: 15, diff: 'media', auto: 'Completato a fine sessione.' },
    sportcalc: { kind: 'lab', skill: 'Calcoli di scienze dello sport', mins: 15, diff: 'media', auto: 'Completato a fine sessione.' },
    audio: { kind: 'lab', skill: 'Ripetizione e ascolto della propria voce', mins: 10, diff: 'base', auto: null }
  };
  Z.META = META;
  /* attività non registrate dal pacchetto Strategic Mastery */
  const EXTRA = [{ id: 'sportcalc', title: 'Sport Science · laboratori di calcolo', act: 'optStart', data: { k: 'sport' }, desc: 'Carichi, energia, nutrizione e prestazione con calcoli verificati.', ready: true }];

  const simDefs = () => ((ST.sim && ST.sim.templates) || []).map(t => ({ id: 'sim:' + t.id, title: t.title, icon: t.icon, act: 'startSim', data: { id: t.id }, desc: 'Scenario a turni su uno scenario inventato.', ready: true, meta: { kind: 'sim', skill: 'Decisioni a più turni (' + (({ str: 'strategia', sport: 'sport', f1: 'Formula 1', sec: 'vita quotidiana', moto: 'moto' })[t.subject || 'str'] || 'strategia') + ')', mins: 15, diff: 'media', auto: 'Completata a fine partita.' }, subject: t.subject || 'str' }));
  Z.defs = () => {
    const labs = ((ST.sma && ST.sma.labs) || []).filter(l => l.ready).concat(EXTRA).map(l => Object.assign({}, l, { meta: META[l.id] || { kind: 'lab', skill: l.title, mins: 20, diff: 'media', auto: null } }));
    return labs.concat(simDefs());
  };
  Z.def = id => Z.defs().find(d => d.id === id) || null;
  Z.kindOf = d => d.meta.kind;
  /* avvia un'attività: segna «in corso» e apre la schermata giusta */
  Z.launch = (id) => {
    const d = Z.def(id), A = ST.app; if (!d) return false;
    Z.begin(A.state, id); A.save();
    if (d.act && ST.acts[d.act]) { ST.acts[d.act]({ dataset: Object.assign({}, d.data || {}) }); return true; }
    if (d.view) { A.go(d.view, d.p || {}); return true; }
    return false;
  };

  /* ---- collegamenti argomento → pratica (basati su argomento, non solo su materia) ---- */
  const L = (lab, subj, re, why) => ({ lab, subj, re, why });
  Z.LINKS = [
    L('forecast', 'str', /decisioni-sotto-incertezza|bayes-nelle-decisioni|kelly|utilita-e-avversione|probabilita-nei-giochi/, 'Applica la probabilità: stima intervalli e controlla se sei troppo sicuro.'),
    L('forecast', 'mnt', /previsione-e-calibrazione|bias-cognitivi-e-probabilita/, 'Misura quanto le tue stime sono calibrate.'),
    L('forecast', 'sec', /^(probabilita|statistica-e-dati)$/, 'Allena la stima con intervalli di confidenza sul tuo livello di sicurezza.'),
    L('forecast', 'sma', /det-l1-confronto|det-l4-previsioni|ada-l4/, 'Confronta previsioni ed esiti per verificare la tua calibrazione.'),
    L('forecast', 'cyb', /rischio-quantitativo/, 'Stimare probabilità e perdite richiede intervalli onesti.'),
    L('forecast', 'moto', /rischio-e-statistica/, 'Rischio e statistica: allena la stima di probabilità.'),
    L('forecast', 'f1', /incertezza-e-decisioni/, 'Decidere con incertezza: verifica la calibrazione delle tue stime.'),
    L('forecast', 'sport', /adv-statistica-applicata/, 'Statistica applicata: allena la stima con intervalli.'),
    L('deduction', 'mnt', /logica-sillogismi|ragionamento-condizionale|enigmi-strategie|bias-cognitivi/, 'Applica il ragionamento a un caso con indizi progressivi.'),
    L('deduction', 'str', /^(bias|errori-strategici-e-pre-mortem|bayes-nelle-decisioni|pensiero-strategico)$/, 'Metti alla prova ipotesi concorrenti e aggiornamento delle convinzioni.'),
    L('deduction', 'sec', /logica-ed-etica|bias-decisioni|psicologia-scienza|ia-fake-news-fonti/, 'Distingui prove, ipotesi e opinioni in un caso concreto.'),
    L('deduction', 'sma', /^det-/, 'Il Deduction Lab allena proprio questa competenza.'),
    L('deduction', 'cyb', /forense-digitale|rilevamento-e-threat-hunting|threat-intelligence/, 'Ragiona su indizi e ipotesi concorrenti come in un’indagine.'),
    L('multimove', 'str', /alberi-di-gioco|pianificazione-e-vincoli|nim-e-sprague|scacchi-metodo-di-calcolo|opt-pianificazione-progetto|opt-programmazione-dinamica|strategia-competitiva|mil-/, 'Pianifica su più turni vedendo le conseguenze delle tue scelte.'),
    L('multimove', 'sma', /^(pln|ada)-/, 'Il simulatore a più mosse applica la pianificazione ai turni successivi.'),
    L('opponent', 'str', /dilemma-del-prigioniero|matrici-di-payoff|strategie-miste|giochi-a-somma-zero|negoziazione-e-incentivi|eco-aste|eco-oligopolio|mil-deterrenza/, 'Leggi la regola dell’avversario e adattati.'),
    L('opponent', 'sma', /pln-l2|pln-l3|ada-l2|ada-l3/, 'Allena la lettura di avversari che reagiscono alle tue mosse.'),
    L('crisis', 'cyb', /incident-response|continuita-operativa/, 'Decidi sotto pressione in un incidente simulato.'),
    L('crisis', 'sma', /ldr-l3|pln-l4|ada-l4|ldr-l2/, 'Gestisci un imprevisto con informazioni incomplete.'),
    L('crisis', 'str', /^errori-strategici-e-pre-mortem$/, 'Metti alla prova il piano quando qualcosa va storto.'),
    L('comm', 'sma', /^ldr-/, 'Allena la comunicazione di una decisione.'),
    L('comm', 'sec', /comunicazione-scrittura|argomentare-parlare/, 'Applica la comunicazione a uno scenario con scelte e conseguenze.'),
    L('comm', 'str', /negoziazione-e-incentivi/, 'Comunica e negozia in uno scenario ramificato.'),
    L('combat', 'grp', /^(kumikata|hand-fighting|tai-sabaki|kuzushi|deashi-timing|level-change|penetration-step|plum-clinch|sprawl|single-leg-entry|double-leg-entry|guard-frames|turtle-sit-out|th-kuzushi|th-fisica-della-proiezione|th-albero|th-concatenazioni|th-ne-waza|th-classificazione|th-prese|ogoshi-entry|osoto-entry|seoi-entry)/, 'Riconosci il momento tattico su schemi dall’alto (teoria, non competenza motoria).'),
    L('f1lab', 'f1', /pit-stop-e-strategie|undercut|strategia-gomme|safety-car|incertezza-e-decisioni|gestione-dal-muretto|gomme-e-carburante|^tyres$|pneumatici-struttura|aderenza-e-finestra|bagnato|simulazione-del-giro|tempo-sul-giro|adv-modelli-pneumatico|adv-tempo-sul-giro/, 'Prova una strategia di gara su un modello sintetico dichiarato.'),
    L('sportlab', 'sport', /periodizz|tapering|monitoraggio|principi-costruzione-forza|ipertrofia|adattamento-allenamento|recupero-fatica|forza-massimale|hiit|adv-programmazione|adv-modellazione|adv-statistica|adv-vbt|adv-eccentrico|adv-profilo-fv|adv-organizzazione/, 'Progetta e critica un programma sulla base di questo argomento.'),
    L('sportcalc', 'sport', /sistemi-energetici|energia-e-bilancio|macronutrienti|nutrizione-per-la-performance|idratazione|peso-e-composizione|soglie-vo2max|allenamento-aerobico|adv-bioenergetica|adv-potenza-critica|adv-cinetica|adv-periodizzazione-carboidrati/, 'Esercitati sui calcoli di questo argomento.'),
    L('cyberlab', 'cyb', /modelli-osi|indirizzamento|dns-dhcp|tls-e-https|firewall-ids|attacchi-di-rete|linux-sicurezza|windows-sicurezza|hardening|http-sessioni|log-e-siem|controllo-accessi|rilevamento-e-threat-hunting|forense-digitale|autenticazione-e-password/, 'Metti in pratica l’argomento in un terminale simulato (solo analisi e difesa).'),
    L('proglab', 'str', /opt-programmazione-dinamica|ottimizzazione-greedy-e-dp|grafi-e-cammini-minimi|opt-grafi|opt-ricerca-locale/, 'Implementa e testa l’algoritmo in JavaScript, in un ambiente isolato.'),
    L('proglab', 'cyb', /injection-e-prevenzione|sdlc-sicuro/, 'Leggi, correggi e testa codice in un ambiente isolato.'),
    L('convoEn', 'eng', /^(l[0-9]-)(habits|past|questions|comparatives|quantity|prepositions|be-have|time-dates|modals|future|gerund|present-perfect|phrasal|smalltalk|linking|past-continuous|defining-relative|reported|passive|articles|preferences|describing|mixed-conditionals|conditionals|argument$|narrative|speaking|future-advanced|hypothetical|modals-speculation|idioms|collocations|register|emphasis|spoken-discourse|presenting-debating|vocab-daily|vocab-work|vocab-health)/, 'Usa la struttura in una conversazione guidata, con domande impreviste.'),
    L('convoJa', 'jpn', /^j[0-5]-(desu|masu|places|numbers|demonstr|family|food|invitations|comparison|time-routine|directions|te-uses|te-form|intentions|travel|noun-modification|obligation|hearsay|phone|past-experience|reasons|passive|causative|volitional|work|keigo|conversation|casual|conditionals|giving|shopping|greetings|particles|weather|purpose|sentence-final|connectors|formal-vs-casual|plain-opinion|nai-form)|^j6-gram|^j7-(vita|lavoro|viaggi|dialoghi|email)/, 'Usa la forma in uno scenario quotidiano con riconoscimento, comprensione e risposta.'),
    L('listening', null, /(^|-)(connected-speech|accents|discussion-podcast|hedging-markers-listening|spoken-discourse|dialoghi|listening-strategies)/, 'Allena l’ascolto di parlato reale con sottotitoli locali.'),
    L('audio', null, /pronunciation-stress|intonation-meaning|j0-sounds|^j0-sounds$|l1-connected-speech/, 'Ripeti con velocità regolabile e confrontati a orecchio.'),
    L('cog', 'mnt', /memoria-come|chunking|palazzo|nomi-e-liste|calcolo-trucchi|stima-fermi|concentrazione/, 'Allena la prestazione negli stessi compiti con esercizi adattivi.'),
    L('cog', 'sec', /^memoria-apprendimento$/, 'Allena la memoria di lavoro con esercizi adattivi.'),
    L('decision', 'str', /decisioni-sotto-incertezza|utilita-e-avversione|kelly|opt-multiobiettivo|opportunity|strategia-competitiva/, 'Applica valore atteso e ottimizzazione a decisioni quantitative.'),
    L('strategos', 'sma', /-l[345]-/, 'Applica il metodo a una situazione reale e registra l’esito.'),
    L('strategos', 'str', /^(decisioni-sotto-incertezza|pianificazione-e-vincoli|errori-strategici-e-pre-mortem|negoziazione-e-incentivi|alberi-di-gioco)/, 'Porta il modello in una situazione vera con una missione guidata.')
  ];
  const SL = (subj, re, ids, why) => ({ subj, re, ids, why });
  Z.SIMLINKS = [
    SL('str', /pensiero-strategico|giochi-a-somma-zero|strategia-competitiva|mil-principi|mil-sun-tzu|mil-clausewitz/, ['blotto'], 'Distribuisci risorse su più fronti e vedi le conseguenze.'),
    SL('str', /mil-lanchester|mil-logistica|mil-ooda/, ['campagna', 'assedio'], 'Applica il principio a una campagna a turni.'),
    SL('str', /mil-deterrenza|negoziazione-e-incentivi|eco-aste/, ['diplomazia', 'negoziazione'], 'Negozia e reagisci a un avversario con interessi diversi.'),
    SL('str', /kelly|utilita-e-avversione|decisioni-sotto-incertezza|bayes-nelle-decisioni/, ['rischio'], 'Quanto rischiare? Scegli puntate con vantaggio.'),
    SL('str', /eco-strategia-impresa|eco-oligopolio|eco-mercato|eco-valore/, ['mercato', 'impresa'], 'Decisioni d’impresa su più turni.'),
    SL('str', /opt-pianificazione-progetto|pianificazione-e-vincoli|opt-multiobiettivo/, ['progetto', 'evento'], 'Pianifica con vincoli e imprevisti.'),
    SL('str', /errori-strategici-e-pre-mortem/, ['crisi'], 'Un piano alla prova di una crisi.'),
    SL('str', /eco-costi|opt-assegnamento/, ['team'], 'Assegna risorse e persone a più turni.'),
    SL('sma', /pln-l4|ldr-l3|ldr-l4/, ['crisi', 'team'], 'Un piano reale sotto pressione.'),
    SL('sport', /^(periodizzazione|tapering|adv-periodizzazione)/, ['spo-gara', 'spo-adv-blocchi'], 'Pianifica un ciclo e correggilo strada facendo.'),
    SL('sport', /ipertrofia|costruzione-forza|forza-massimale|adv-ipertrofia/, ['spo-forza'], 'Gestisci un ciclo di forza di 12 settimane.'),
    SL('sport', /nutrizione|macronutrienti|energia-e-bilancio|peso-e-composizione/, ['spo-nutrizione'], 'Costruisci un’alimentazione per un atleta amatoriale.'),
    SL('sport', /recupero-fatica|infortun|mobilita-prevenzione/, ['spo-rientro'], 'Rientro graduale dopo uno stop.'),
    SL('sport', /sport-di-squadra|monitoraggio-del-carico/, ['spo-stagione'], 'Gestisci una stagione di squadra.'),
    SL('sport', /sport-di-combattimento|adv-combattimento/, ['spo-adv-torneo'], 'Un torneo di combattimento in due giorni.'),
    SL('sport', /adv-ambienti-estremi/, ['spo-adv-altura'], 'Un campo in altura.'),
    SL('sport', /adv-monitoraggio|adv-statistica/, ['spo-adv-dati'], 'Leggi dati rumorosi con senso critico.'),
    SL('sport', /adv-mezzofondo|resistenza|allenamento-aerobico/, ['spo-adv-ultra', 'spo-gara'], 'Gestisci una gara di resistenza.'),
    SL('f1', /pit-stop-e-strategie|strategia-gomme|undercut|gomme-e-carburante/, ['f1-gp'], 'Gestisci una gara asciutta di 60 giri.'),
    SL('f1', /bagnato|safety-car/, ['f1-meteo'], 'Una gara con pioggia variabile.'),
    SL('f1', /simulazione-del-giro|tempo-sul-giro|adv-tempo-sul-giro/, ['f1-quali'], 'Una sessione di qualifica.'),
    SL('f1', /gestione-dal-muretto|incertezza-e-decisioni/, ['f1-muretto'], 'Decisioni dal muretto con due piloti.'),
    SL('f1', /budget-cap|economia-e-budget/, ['f1-stagione'], 'Una stagione sotto il budget cap.'),
    SL('f1', /la-strada-verso|carriere-dietro/, ['f1-carriera'], 'La carriera di un giovane pilota.'),
    SL('sec', /risparmio-e-interesse|budget-e-consumo|investire|lavoro-busta/, ['cul-budget'], 'Un anno di bilancio personale.'),
    SL('sec', /orientarsi-e-viaggiare|orientamento-e-mappe/, ['cul-viaggio'], 'Due settimane all’estero.'),
    SL('sec', /casa-pulizia|fai-da-te|riparazioni|elettricita-domestica/, ['cul-casa'], 'Ristrutturare una stanza.'),
    SL('sec', /meteo-e-sicurezza-in-montagna|campeggio/, ['cul-escursione'], 'Un’escursione in montagna.'),
    SL('sec', /primo-soccorso|rianimazione|ostruzione|traumi|riconoscere-un-malore/, ['cul-emergenza'], 'Emergenze in casa e primo soccorso.'),
    SL('sec', /imparare-una-abilita/, ['cul-imparare'], 'Imparare un’abilità in 10 settimane.'),
    SL('mnt', /memoria-come|allenare-bene|concentrazione|sonno-esercizio/, ['esame'], 'Prepararsi a una prova importante applicando ciò che sai sull’apprendimento.'),
    SL('sec', /memoria-apprendimento/, ['esame'], 'Prepararsi a una prova importante in 8 settimane.'),
    SL('str', /eco-valore|kelly|utilita-e-avversione/, ['investimenti'], 'Gestisci un capitale tenendo conto del rischio.'),
    SL('sec', /investire-senza-illusioni|risparmio-e-interesse/, ['investimenti'], 'Gestisci un capitale tenendo conto del rischio.'),
    SL('moto', /^(track-day|dati-bandiere|preparazione-del-pilota)/, ['moto-trackday'], 'Una giornata in pista.'),
    SL('moto', /guida-difensiva|visione-e-distanza|frenata-corretta|frenata-trail/, ['moto-imparare'], 'Dodici settimane per imparare la guida sportiva.'),
    SL('moto', /diagnostica-problemi|manutenzione-programmata/, ['moto-meccanica'], 'Diagnosi e manutenzione della tua moto.'),
    SL('moto', /gruppo-e-viaggi/, ['moto-viaggio'], 'Una settimana di viaggio in moto.'),
    SL('moto', /assetto|sospensioni|adv-telemetria/, ['moto-assetto'], 'Messa a punto in un weekend.'),
    SL('moto', /campionati|weekend-di-gara/, ['moto-stagione'], 'Una stagione di campionato amatoriale.')
  ];
  const key = t => t.id.replace(/^[a-z0-9]+-/, '');
  const matches = (rule, t) => (!rule.subj || rule.subj === t.subject) && rule.re.test(key(t));
  /* pratiche pertinenti a un argomento: [{ id, why, kind }] — nessuna se non esiste un collegamento reale */
  Z.linksFor = t => {
    const out = [], seen = new Set(), defs = {}; Z.defs().forEach(d => { defs[d.id] = d; });
    Z.LINKS.forEach(r => { if (matches(r, t) && defs[r.lab] && !seen.has(r.lab)) { seen.add(r.lab); out.push({ id: r.lab, why: r.why, kind: defs[r.lab].meta.kind }); } });
    Z.SIMLINKS.forEach(r => { if (matches(r, t)) r.ids.forEach(sid => { const id = 'sim:' + sid; if (defs[id] && !seen.has(id)) { seen.add(id); out.push({ id, why: r.why, kind: 'sim' }); } }); });
    return out;
  };
  /* Requisiti: la pratica si propone dopo la lezione e solo se i prerequisiti dell'argomento sono soddisfatti */
  Z.blockedReason = (s, t) => {
    if (!PL.unlocked(s, t)) return 'prerequisiti dell’argomento non soddisfatti';
    if (P.topicStatus(s, t.id) === 'new') return 'prima la lezione';
    return null;
  };

  /* ---- struttura di un argomento: Lezione → Esercizi → Laboratorio → Simulazione → Verifica ---- */
  /* lettura dell'archivio dell'argomento SENZA crearne il record (le viste non devono modificare lo stato) */
  const EMPTY = Object.freeze({ page: 0, studied: null, ex: {}, tests: [], retests: [] });
  const trec = (s, id) => (s.topics && s.topics[id]) || EMPTY;
  Z.topicParts = (s, t) => {
    const r = trec(s, t.id), st = P.topicStatus(s, t.id), total = t.exercises.length, need = Math.min(5, total);
    const okN = Object.values(r.ex || {}).filter(e => e.ok).length, tried = Object.values(r.ex || {}).filter(e => e.n).length;
    const lesson = r.studied ? 'done' : (r.page > 0 ? 'doing' : 'todo');
    const practice = !total ? 'done' : okN >= need ? 'done' : (tried || okN) ? 'doing' : 'todo';
    const testsN = (r.tests || []).length + (r.retests || []).length;
    const retest = P.atLeast(st, 'verified') && st !== 'retained' && r.studied && (r.tests || []).some(x => x.score >= P.PASS && U.diffDays(r.studied, x.date) >= 1 && U.diffDays(x.date, U.today()) >= 14);
    const test = P.atLeast(st, 'verified') ? (retest ? 'review' : 'done') : testsN ? 'review' : 'todo';
    return { lesson, practice, test, okN, need, total, retest: !!retest, status: st };
  };
  /* completamento dell'argomento = lezione letta + esercizi svolti; la padronanza (verifica) resta separata */
  Z.topicState = (s, t) => {
    const p = Z.topicParts(s, t);
    if (p.test === 'review' && p.retest) return 'review';
    if (p.lesson === 'done' && p.practice === 'done') return 'done';
    if (p.lesson === 'todo' && p.practice === 'todo') return 'todo';
    return 'doing';
  };
  /* ordine dei livelli e degli argomenti (come nel curriculum) */
  Z.orderedTopics = sid => { const out = []; ST.content.stagesOf(sid).forEach(stg => stg.topics.forEach(id => out.push(ST.content.topic(id)))); return out; };
  /* prossimo argomento consigliato: prima lezioni/esercizi (in ordine di curriculum), poi la verifica */
  Z.nextTopic = (s, sid, filter) => {
    const ts = Z.orderedTopics(sid).filter(t => !filter || filter(t));
    return ts.find(t => { const st = P.topicStatus(s, t.id); return (st === 'new' || st === 'studied') && PL.unlocked(s, t); }) || ts.find(t => P.topicStatus(s, t.id) === 'practiced') || null;
  };
  Z.recommendedStage = (s, sid, filter) => { const t = Z.nextTopic(s, sid, filter); if (t) return t.stage; const st = ST.content.stagesOf(sid).filter(g => g.topics.length); return st.length ? st[st.length - 1].id : null; };
  Z.levelStats = (s, sid, stage, filter) => {
    const ts = Z.orderedTopics(sid).filter(t => t.stage === stage && (!filter || filter(t)));
    const o = { total: ts.length, done: 0, verified: 0, doing: 0, review: 0 };
    ts.forEach(t => { const x = Z.topicState(s, t); if (x === 'done') o.done++; else if (x === 'doing') o.doing++; else if (x === 'review') { o.done++; o.review++; } if (P.atLeast(P.topicStatus(s, t.id), 'verified')) o.verified++; });
    return o;
  };
  /* sequenza di passi di un argomento con il prossimo da fare (per «Continua» e per l'hub dell'argomento) */
  Z.topicSteps = (s, t) => {
    const p = Z.topicParts(s, t), steps = [];
    steps.push({ part: 'lesson', status: p.lesson });
    if (t.exercises.length) steps.push({ part: 'practice', status: p.practice });
    const blocked = Z.blockedReason(s, t);
    Z.linksFor(t).forEach(l => steps.push({ part: l.kind === 'sim' ? 'sim' : 'lab', id: l.id, status: Z.status(s, l.id), why: l.why, snoozed: Z.snoozed(s, l.id), blocked: !!blocked && p.lesson !== 'done' }));
    const canTest = trec(s, t.id).studied && U.diffDays(trec(s, t.id).studied, U.today()) >= 1;
    steps.push({ part: 'test', status: p.test, later: !canTest });
    // il prossimo passo: ordine didattico; le pratiche posticipate o già buone e la verifica non ancora valida si saltano
    steps.forEach(x => { x.next = false; });
    const nx = steps.find(x => x.status !== 'done' && !x.snoozed && !x.blocked && !x.later && (x.part !== 'lab' && x.part !== 'sim' || x.status === 'todo' || x.status === 'doing' || x.status === 'review'));
    if (nx) nx.next = true;
    return steps;
  };

  /* ---- suggerimenti della Home ---- */
  Z.profileWeak = s => {
    const M = ST.sma; if (!M || !M.profile) return [];
    const prof = M.profile(s), map = { deduction: 'deduction', planning: 'multimove', adaptability: 'opponent', calibration: 'forecast', leadership: 'comm', application: 'strategos', decision: 'decision' };
    return Object.keys(prof).filter(d => map[d] && prof[d].n >= 3 && prof[d].ok / prof[d].n < 0.6).map(d => ({ dim: d, lab: map[d], pct: Math.round(100 * prof[d].ok / prof[d].n) }));
  };
  Z.recommend = (s, max, opts) => {
    max = max == null ? 2 : max; opts = opts || {};
    const today = U.today(), defs = {}; Z.defs().forEach(d => { defs[d.id] = d; });
    const cand = {}, add = (id, prio, topic, reason) => {
      const d = defs[id]; if (!d || Z.snoozed(s, id)) return;
      const st = Z.status(s, id), r = Z.rec(s, id);
      if (st === 'done' && prio !== 5) return;                                       // già completata con buon risultato
      if (prio === 5 && !(st === 'done' && r && r.last && U.diffDays(r.last, today) >= Z.REPEAT_DAYS)) return;
      if (!cand[id] || cand[id].prio > prio) cand[id] = { id, prio, topic: topic || null, reason, status: st };
    };
    const topics = []; ST.content.subjects.forEach(sub => ST.content.topicsOf(sub.id).forEach(t => topics.push(t)));
    const touched = id => { const r = s.topics[id]; return !!(r && r.studied); };
    // Strategic Mastery è facoltativa: entra nei suggerimenti solo se l'utente l'ha già iniziata
    const smaStarted = ST.content.topicsOf('sma').some(t => touched(t.id)) || (s.sma && Object.keys(s.sma.labs || {}).length > 0);
    topics.forEach(t => {
      if (!touched(t.id) || Z.blockedReason(s, t)) return;
      if (t.subject === 'sma' && !smaStarted) return;
      const r = s.topics[t.id], age = U.diffDays(r.studied, today), links = Z.linksFor(t);
      links.forEach(l => {
        if (age <= Z.RECENT_DAYS) add(l.id, 1, t, 'Collegata alla lezione «' + t.title + '», completata ' + (age === 0 ? 'oggi' : age === 1 ? 'ieri' : age + ' giorni fa') + '. ' + l.why);
        else if (Z.status(s, l.id) === 'review') add(l.id, 2, t, 'L’ultimo risultato era sotto il criterio: ripetila per consolidare «' + t.title + '».');
        else if (P.topicStatus(s, t.id) !== 'verified' && P.topicStatus(s, t.id) !== 'retained') add(l.id, 3, t, 'Pertinente all’argomento che stai consolidando: «' + t.title + '». ' + l.why);
        else if (l.kind === 'sim') add(l.id, 4, t, 'Simulazione non ancora affrontata su «' + t.title + '». ' + l.why);
        else add(l.id, 5, t, 'Consolidamento di «' + t.title + '»: è passato del tempo dall’ultima volta.');
      });
    });
    // competenze con risultati insufficienti (Strategic Mastery)
    if (smaStarted) Z.profileWeak(s).forEach(w => add(w.lab, 2, null, 'Nel profilo «' + (ST.sma.DIMS[w.dim] || w.dim) + '» hai il ' + w.pct + '% di successo: un’altra prova aiuta a consolidare.'));
    // attività completate ma sotto il criterio
    Z.defs().forEach(d => { if (Z.status(s, d.id) === 'review' && (d.meta.kind === 'lab' || d.meta.kind === 'sim')) add(d.id, 2, null, 'L’ultimo tentativo era sotto il criterio: ripetila per consolidare.'); });
    const list = Object.values(cand).sort((a, b) => a.prio - b.prio || (a.status === 'doing' ? -1 : 0) - (b.status === 'doing' ? -1 : 0));
    // varietà: prima una proposta per materia di partenza; se ne mancano, completa con le restanti
    const out = [], used = new Set();
    list.forEach(x => { const sj = x.topic ? x.topic.subject : '_' + x.id; if (out.length < max && !used.has(sj)) { out.push(x); used.add(sj); } });
    list.forEach(x => { if (out.length < max && out.indexOf(x) < 0) out.push(x); });
    return out.slice(0, max).map(c => {
      const d = defs[c.id], sub = c.topic ? ST.content.subject(c.topic.subject) : null;
      return Object.assign({}, c, { def: d, subjectTitle: sub ? sub.title : (d.subject ? (ST.content.subject(d.subject) || {}).title : 'Pratica') });
    });
  };

  /* giorni di attività Strategic Mastery negli ultimi n giorni (laboratori, moduli studiati, verifiche) */
  Z.smaDays = (s, n) => {
    const from = U.addDays(U.today(), -(n - 1)), days = new Set(), M = ST.sma; if (!M) return 0;
    const ids = new Set(M.labs.map(l => l.id).concat(((ST.sim && ST.sim.templates) || []).map(t => 'sim:' + t.id)));
    Object.keys(Z.S(s).rec).forEach(id => { if (ids.has(id)) (Z.S(s).rec[id].days || []).forEach(d => { if (d >= from) days.add(d); }); });
    ST.content.topicsOf('sma').forEach(t => { const r = s.topics[t.id]; if (!r) return; if (r.studied && r.studied >= from) days.add(r.studied); (r.tests || []).concat(r.retests || []).forEach(x => { if (x.date >= from) days.add(x.date); }); });
    return days.size;
  };

  /* ---- Strategic Mastery: «Continua» — prossimo modulo/esercizio pertinente ---- */
  Z.smaNext = s => {
    const M = ST.sma; if (!M) return null;
    // 1) verifiche differite STRATEGOS in scadenza (reali, già previste a 7/30/90 giorni)
    const S = M.strategos; if (S && S.due) { const d = S.due(s)[0]; if (d) return { type: 'check', iid: d.iid, check: d.check, title: 'Verifica a ' + d.check + ' giorni — ' + ((S.byId(d.mid) || {}).title || 'missione'), mins: 5, act: 'smaMisOpen', data: { i: d.iid } }; }
    // 2) prossimo argomento in ordine di livello; poi i passi pratica (laboratori, simulazioni) non rimandati
    const t = Z.nextTopic(s, 'sma');
    if (t) {
      const st = Z.topicSteps(s, t), n = st.find(x => x.next);
      if (n) return Object.assign({ type: n.part, topic: t }, n);
      return { type: 'lesson', topic: t, part: 'lesson', status: 'todo' };
    }
    // 3) argomenti tutti studiati: se un laboratorio collegato non è stato affrontato, proponilo
    for (const tp of Z.orderedTopics('sma')) { const x = Z.topicSteps(s, tp).find(y => (y.part === 'lab' || y.part === 'sim') && y.status !== 'done' && !y.snoozed); if (x) return Object.assign({ type: x.part, topic: tp }, x); }
    // 4) verifica di livello disponibile e non superata
    const lc = M.levelCheck; if (lc) { const lv = M.LEVELS.find((l, i) => { const p = M.levelProgress(s, l.id); const e = lc.S(s)[l.id]; return p.total && p.practiced === p.total && !(e && e.pass); }); if (lv) return { type: 'levelcheck', level: lv.id, title: 'Verifica di livello ' + lv.id + ' · ' + lv.title, mins: 15 }; }
    return null;
  };
})(window.ST = window.ST || {});
