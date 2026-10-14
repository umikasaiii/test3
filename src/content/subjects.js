/* SkillTree — definizione delle materie principali, degli stage e delle materie secondarie. */
(function (ST) {
  'use strict';
  const C = ST.content;
  const st = (id, title, desc) => ({ id, title, desc, topics: [] });

  C.defineSubject({ id: 'eng', title: 'Inglese', icon: '🇬🇧', primary: true, lang: 'en', color: '#5aa9ff',
    goal: 'B2 solido nelle quattro abilità, con priorità a comprensione del parlato naturale e conversazione spontanea.',
    stageNote: 'Gli stage L0–L5 sono livelli didattici interni. Completare le lezioni NON assegna un livello CEFR: il B2 si dichiara solo con prove sulle quattro abilità.',
    stages: [
      st('L0', 'Fondamenta B1', 'Consolida tempi base e struttura della frase (partenza: B1 iniziale).'),
      st('L1', 'B1 solido', 'Modali, futuro, condizionali reali e parlato connesso.'),
      st('L2', 'Ponte B1+ → B2', 'Discorso indiretto, passivo, frasi relative.'),
      st('L3', 'B2 iniziale', 'Argomentare, raccontare, accenti britannico/americano/australiano.'),
      st('L4', 'B2 solido', 'Ipotesi, collocazioni e phrasal verbs ad alta frequenza.'),
      st('L5', 'B2+ e primo C1', 'Registro, sfumature, enfasi.')
    ] });
  C.defineSubject({ id: 'jpn', title: 'Giapponese', icon: '🇯🇵', primary: true, lang: 'ja', color: '#ff7a9c',
    goal: 'Autonomia comunicativa quotidiana su argomenti familiari: capire, rispondere, esprimere bisogni e opinioni, leggere e scrivere testi non avanzati.',
    stageNote: 'J0–J5 sono livelli didattici interni e NON equivalgono a JLPT o CEFR. Il parlato con persone reali va verificato con un docente o madrelingua.',
    stages: [
      st('J0', 'Suoni e frasi di sopravvivenza', 'Mora, ritmo, です/は/か, numeri, presentarsi.'),
      st('J1', 'Verbi in forma cortese', 'ます, particelle, tempo, luoghi, desideri.'),
      st('J2', 'Forma て e forma semplice', 'Richieste, azioni in corso, opinioni.'),
      st('J3', 'Esperienze e ragioni', 'Passato semplice, esperienze, causa e contrasto.'),
      st('J4', 'Condizioni e potenziale', 'Condizionali, abilità, dare e ricevere, cortesia.'),
      st('J5', 'Lingua parlata e lettura', 'Parlato informale, kanji in contesto, testi funzionali.')
    ] });

  const P = (id, title, icon, goal, extra) => C.defineSubject(Object.assign({ id, title, icon, primary: true, goal, stages: [st('L0', 'Pillole introduttive', 'Brevi lezioni distribuite nel tempo.')], pillOnly: true }, extra || {}));
  P('cyb', 'Cybersecurity', '🛡️', 'Dalle basi all’architettura: reti, sistemi, crittografia, sicurezza applicativa, difesa operativa, cloud e governance — in ottica difensiva ed etica, con laboratori generati e scenari.', { pillOnly: false, stages: [st('L0', 'Fondamenti', 'Principi, rischio, autenticazione, ingegneria sociale, malware (concetti), etica e legalità. Include le pillole introduttive.'), st('L1', 'Reti e sistemi', 'TCP/IP, DNS, TLS, firewall; Linux e Windows, hardening, container, backup.'), st('L2', 'Crittografia', 'Cifrari, hash, chiavi pubbliche, firme, PKI e gli errori più comuni.'), st('L3', 'Sicurezza applicativa e web', 'OWASP, sessioni, controllo degli accessi, API, ciclo di sviluppo sicuro.'), st('L4', 'Difesa operativa e analisi', 'Log e SIEM, rilevamento, incident response, forense, analisi statica dei malware, threat intelligence.'), st('L5', 'Architettura e avanzato', 'Threat modeling, cloud, zero trust, mitigazioni della memoria, reverse engineering (concetti), governance, test di penetrazione autorizzati, gestione delle vulnerabilità.')] });
  P('sport', 'Scienze dello sport', '🏃', 'Fisiologia, allenamento, recupero e apprendimento motorio.');
  P('prog', 'Programmazione e AI', '💻', 'Fondamenti di programmazione e uso consapevole dell’intelligenza artificiale.');
  P('f1', 'Formula 1', '🏎️', 'Regolamenti, tecnica, strategia e storia della F1.');
  P('str', 'Strategia e logica', '♟️', 'Pensiero strategico, decisioni e ragionamento formale.');
  C.defineSubject({ id: 'grp', title: 'Judo e lotta libera', icon: '🥋', primary: true, motor: true, goal: 'Memoria motoria, coordinazione, footwork e fluidità con pratica solitaria e sicura.', stageNote: 'Livelli L0–L5 interni, non cinture né gradi ufficiali. Ciò che richiede partner o resistenza non è allenabile qui.', stages: ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'].map((id, i) => st(id, ['Fondamenta', 'Prime entrate', 'Coordinazione e meccaniche', 'Ne-waza e transizioni', 'Combinazioni e variabilità', 'Fluidità e automatizzazione'][i], '')) });
  C.defineSubject({ id: 'mnt', title: 'Allenamento mentale', icon: '🧠', primary: true, generated: true, goal: 'Memoria di lavoro, attenzione, ragionamento, calcolo, velocità decisionale — esercizi generati e adattivi.', stages: [st('L0', 'Esercizi generati', 'Livello adattivo per tipo di esercizio (1–10).'), st('L1', 'Strategie di memoria', 'Come funziona la memoria e le tecniche che migliorano davvero la ritenzione.'), st('L2', 'Calcolo e stima', 'Trucchi di calcolo mentale, percentuali, stime e ordini di grandezza.'), st('L3', 'Ragionamento', 'Logica, sillogismi, ragionamento condizionale, bias e probabilità.'), st('L4', 'Attenzione e apprendimento', 'Concentrazione, sonno, esercizio e limiti dell’allenamento cognitivo.')] });

  C.secondary = [
    'Storia essenziale', 'Geografia del mondo', 'Economia e finanza', 'Diritto, Costituzione e istituzioni', 'Psicologia e comportamento', 'Filosofia e pensiero critico',
    'Matematica e statistica', 'Fisica', 'Chimica', 'Biologia', 'Astronomia', 'Medicina di base e primo soccorso', 'Nutrizione', 'Tecnologia e digitale',
    'Comunicazione e scrittura', 'Letteratura', 'Arte e architettura', 'Musica', 'Cucina', 'Casa e fai da te', 'Meccanica e motori', 'Viaggi e orientamento'
  ];
})(window.ST = window.ST || {});
