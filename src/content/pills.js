/* Materie teoriche a rotazione (5′ al giorno): pillole introduttive.
   Una pillola da 5 minuti NON assegna livelli avanzati: porta al massimo a «esercitato/verificato» di quella pillola.
   Contenuto attuale = nucleo iniziale; l’espansione per materia è nel piano di lavoro (docs/ROADMAP.md). */
(function (ST) {
  'use strict';
  const C = ST.content, { mc, card } = C;
  const pill = (id, subject, title, summary, pages, ex, test, extra) => C.addTopic(Object.assign({ id, subject, stage: 'L0', title, summary, minutes: 5, prereq: [], pill: true,
    objectives: [], pages: pages.map((p, i) => ({ h: p[0], b: p[1] })), exercises: ex, test, cards: [] }, extra || {}));

  // ---- Cybersecurity (lunedì teoria; venerdì scenari) ----
  pill('cyb-phishing', 'cyb', 'Phishing: riconoscere i segnali', 'Come distinguere un messaggio fraudolento da uno legittimo.', [
    ['Che cos’è', 'Il phishing è un tentativo di indurti a compiere un’azione (cliccare, inserire credenziali, pagare) fingendo di essere un mittente fidato. L’attacco sfrutta fretta, paura e autorità, non una vulnerabilità tecnica.'],
    ['I segnali', 'Controlla:\n- **mittente**: l’indirizzo reale, non solo il nome visualizzato;\n- **urgenza**: «agisci entro 24 ore» è un campanello d’allarme;\n- **link**: passa il cursore (o tieni premuto su mobile) per vedere l’indirizzo reale;\n- **richieste insolite**: password, codici OTP, pagamenti.'],
    ['Che cosa fare', 'Non cliccare. Apri il sito digitando tu stesso l’indirizzo o dall’app ufficiale. Segnala il messaggio. Se hai inserito credenziali: cambia la password e attiva l’autenticazione a più fattori.']
  ], [
    mc('Quale segnale è tipico del phishing?', ['Urgenza e minaccia di blocco dell’account', 'Un saluto personale', 'Un allegato di testo', 'Un logo'], 0),
    mc('Come verifichi un link sospetto?', ['Passo il cursore o tengo premuto per vedere l’URL reale', 'Lo apro subito', 'Lo inoltro a un amico', 'Lo ignoro senza guardarlo'], 0),
    mc('Se hai inserito la password in un sito falso, che cosa fai per prima cosa?', ['Cambio la password e attivo MFA', 'Aspetto', 'Spengo il telefono', 'Elimino l’email'], 0)
  ], [
    mc('Il phishing sfrutta soprattutto…', ['Fattori psicologici come fretta e fiducia', 'Solo bug del sistema', 'Solo virus', 'La velocità della rete'], 0),
    mc('Che cosa è meglio fare davanti a un messaggio della banca con un link?', ['Aprire l’app o il sito ufficiale digitando l’indirizzo', 'Cliccare il link', 'Rispondere con i dati', 'Inoltrarlo'], 0)
  ]);

  pill('cyb-password-mfa', 'cyb', 'Password e autenticazione a più fattori', 'Perché lunghezza e unicità contano, e a che cosa serve la MFA.', [
    ['Password', 'Una password lunga e unica per servizio è più efficace di una corta e «complicata». Un **gestore di password** permette di avere password diverse senza ricordarle tutte.'],
    ['MFA', 'L’autenticazione a più fattori richiede due prove distinte: qualcosa che sai (password) + qualcosa che hai (app, chiave di sicurezza) o sei (biometria). Anche se la password viene rubata, l’attaccante non può entrare.'],
    ['Limiti', 'Gli SMS sono meno sicuri di un’app di autenticazione o di una chiave FIDO2. Il phishing può ancora rubare i codici a tempo: le chiavi FIDO2 resistono meglio.']
  ], [
    mc('Quale password è più robusta?', ['Una frase lunga e unica', 'Una parola corta con un numero', 'La stessa ovunque', 'Il tuo nome'], 0),
    mc('Che cos’è la MFA?', ['Più prove di identità distinte', 'Una password più lunga', 'Un antivirus', 'Una VPN'], 0),
    mc('Quale metodo è più resistente al phishing?', ['Chiave FIDO2', 'SMS', 'Domanda segreta', 'Password lunga'], 0)
  ], [
    mc('Perché una password unica per servizio è importante?', ['Un furto in un sito non compromette gli altri', 'È più facile da ricordare', 'È più veloce', 'Non è importante'], 0),
    mc('Che cosa aiuta a gestire molte password?', ['Un gestore di password', 'Un file di testo sul desktop', 'Un foglio sul monitor', 'Riutilizzarle'], 0)
  ]);

  pill('cyb-scenario-ceo', 'cyb', 'Scenario: email urgente del “capo”', 'Che cosa fai se un messaggio che sembra del tuo superiore chiede un bonifico urgente?', [
    ['Situazione', 'Ricevi un’email che sembra del tuo amministratore: «Sono in riunione, serve un bonifico urgente a un nuovo fornitore. Non chiamarmi, ti mando l’IBAN». È una tipica frode del tipo *business email compromise*.'],
    ['Indizi', 'Richiesta di urgenza e segretezza, bypass delle procedure, dominio leggermente diverso, canale insolito. Tutti elementi che indicano una pressione psicologica.'],
    ['Risposta corretta', 'Verifica **fuori banda**: chiama il superiore a un numero già noto, non rispondere alla stessa email. Segui la procedura di approvazione. Segnala il tentativo al reparto sicurezza.']
  ], [
    mc('Qual è il primo passo corretto?', ['Verificare con una chiamata a un numero già noto', 'Fare il bonifico per non perdere tempo', 'Rispondere all’email chiedendo conferma', 'Ignorare tutto senza segnalare'], 0),
    mc('Perché «non chiamarmi» è un indizio?', ['Impedisce la verifica indipendente', 'È un segno di fiducia', 'È un’abitudine normale', 'È una regola aziendale'], 0),
    mc('Che cosa segnali dopo?', ['Il tentativo al team di sicurezza', 'Niente', 'Solo ai colleghi sui social', 'Solo alla banca'], 0)
  ], [
    mc('Che cosa significa verifica «fuori banda»?', ['Usare un canale diverso da quello della richiesta', 'Rispondere all’email', 'Usare la stessa chat', 'Aspettare'], 0),
    mc('Che cosa fa la procedura di approvazione?', ['Riduce il rischio di frodi individuali', 'Rallenta senza motivo', 'Non serve', 'Aiuta solo i manager'], 0)
  ]);

  pill('cyb-scenario-wifi', 'cyb', 'Scenario: Wi-Fi pubblico', 'Quando e come usare una rete pubblica.', [
    ['Situazione', 'Sei in un aeroporto e vedi due reti: «Airport_Free_WiFi» e «Airport WiFi». Devi controllare la posta e fare un acquisto.'],
    ['Rischi', 'Un attaccante può creare una rete con un nome simile (evil twin) e intercettare il traffico non cifrato. Le connessioni HTTPS proteggono il contenuto, ma non tutti i rischi (reindirizzamenti, pagine di login false).'],
    ['Buone pratiche', 'Chiedi al personale il nome ufficiale; usa dati mobili per operazioni sensibili; evita pagamenti e login critici su reti non fidate; considera una VPN affidabile; mantieni aggiornato il dispositivo.']
  ], [
    mc('Qual è il rischio principale di una rete con nome simile a quella ufficiale?', ['Evil twin che intercetta il traffico', 'Rallentamento', 'Costi nascosti', 'Nessuno'], 0),
    mc('Per un pagamento importante, che cosa conviene?', ['Usare dati mobili o una rete fidata', 'Qualunque rete', 'Disattivare HTTPS', 'Condividere la password'], 0),
    mc('Che cosa fa la VPN?', ['Cifra il traffico tra il tuo dispositivo e il server VPN', 'Rende anonimo ogni cosa', 'Sostituisce l’antivirus', 'Aumenta la velocità'], 0)
  ], [
    mc('Chi può confermare il nome corretto della rete?', ['Il personale del locale', 'Un utente a caso', 'Nessuno', 'Il browser'], 0),
    mc('HTTPS protegge…', ['Il contenuto della comunicazione dal sito', 'Il dispositivo da ogni malware', 'La batteria', 'La velocità'], 0)
  ]);

  // ---- Scienze dello sport (martedì) ----
  pill('sport-recovery', 'sport', 'Carico, recupero e supercompensazione', 'Perché ci si allena e si migliora riposando.', [
    ['Il principio', 'L’allenamento è uno **stimolo di stress**: la performance cala subito, poi, con riposo e nutrizione, il corpo si adatta e può superare il livello iniziale (supercompensazione). Senza recupero, lo stimolo si somma e porta a stanchezza cronica.'],
    ['Carico progressivo', 'Per continuare a migliorare, il carico (volume, intensità, densità) deve aumentare **gradualmente**. Aumenti troppo rapidi aumentano il rischio di infortuni.'],
    ['Recupero', 'Sonno (7–9 ore per la maggior parte degli adulti), alimentazione adeguata, giorni di scarico e gestione dello stress. Il recupero fa parte dell’allenamento, non è tempo perso.']
  ], [
    mc('Quando avviene l’adattamento?', ['Durante il recupero dopo lo stimolo', 'Solo durante l’allenamento', 'Solo di notte', 'Mai'], 0),
    mc('Che cos’è il carico progressivo?', ['Un aumento graduale dello stimolo', 'Un carico costante', 'Un carico casuale', 'Un carico massimo'], 0),
    mc('Quale fattore NON è parte del recupero?', ['Sovrallenamento continuo', 'Sonno', 'Alimentazione', 'Giorni di scarico'], 0)
  ], [
    mc('La supercompensazione è…', ['Un adattamento oltre il livello di partenza dopo recupero', 'Un calo permanente', 'Un tipo di dieta', 'Un esercizio'], 0),
    mc('Perché evitare aumenti troppo rapidi del carico?', ['Aumentano il rischio di infortuni', 'Perché sono noiosi', 'Perché servono più attrezzi', 'Non c’è motivo'], 0)
  ]);

  pill('sport-motor-learning', 'sport', 'Apprendimento motorio e ripetizione distribuita', 'Perché la pratica spaziata e variabile consolida meglio un gesto.', [
    ['Fasi', 'L’apprendimento motorio passa da una fase **cognitiva** (capire il gesto), a una **associativa** (affinare ed eliminare errori) fino a una **autonoma** (esecuzione quasi automatica).'],
    ['Pratica distribuita e variabile', 'Sedute brevi e frequenti consolidano meglio di sessioni lunghe e rare. Variare leggermente le condizioni (velocità, direzione, ordine) migliora l’adattabilità rispetto alla ripetizione identica.'],
    ['Feedback', 'Il feedback esterno (allenatore, video) è importante: l’autovalutazione può essere imprecisa, specie all’inizio.']
  ], [
    mc('Quale fase corrisponde a un gesto quasi automatico?', ['Autonoma', 'Cognitiva', 'Associativa', 'Preparatoria'], 0),
    mc('Quale pratica consolida meglio?', ['Brevi sedute distribuite nel tempo', 'Una sola lunga seduta', 'Nessuna ripetizione', 'Solo teoria'], 0),
    mc('Perché serve feedback esterno?', ['L’autovalutazione può essere imprecisa', 'Per motivazione sociale solo', 'Non serve', 'Per pubblicità'], 0)
  ], [
    mc('Variare le condizioni di pratica aiuta…', ['L’adattabilità', 'Solo la velocità', 'Nulla', 'Il riposo'], 0),
    mc('La fase cognitiva è quella in cui…', ['Si capisce il gesto', 'Si perfeziona', 'Si automatizza', 'Si gareggia'], 0)
  ]);

  // ---- Programmazione e AI (mercoledì) ----
  pill('prog-variables', 'prog', 'Variabili, tipi e condizioni', 'Il primo mattone: dare un nome a un dato e decidere in base ad esso.', [
    ['Variabili', 'Una variabile è un nome associato a un valore. In Python: `eta = 30`. Il **tipo** (intero, decimale, testo, booleano) determina quali operazioni sono possibili.'],
    ['Condizioni', 'Una condizione valuta un’espressione vera/falsa. `if eta >= 18: print("maggiorenne")`. L’indentazione definisce il blocco.'],
    ['Ripetizione', 'Un ciclo ripete istruzioni: `for i in range(3): print(i)` stampa 0, 1, 2. Il concetto chiave: **stato** che cambia nel tempo.']
  ], [
    mc('Che cos’è una variabile?', ['Un nome associato a un valore', 'Un errore', 'Una funzione', 'Un file'], 0),
    mc('Che valori produce range(3)?', ['0, 1, 2', '1, 2, 3', '0, 1, 2, 3', '3'], 0),
    mc('Che cosa definisce un blocco in Python?', ['L’indentazione', 'Le parentesi graffe', 'Il punto e virgola', 'Il colore'], 0)
  ], [
    mc('Quale è un tipo booleano?', ['True', '3.14', '"ciao"', '[1,2]'], 0),
    mc('Che cosa stampa: x = 5; if x > 3: print("sì")', ['sì', 'no', 'niente', 'errore'], 0)
  ]);

  pill('prog-llm', 'prog', 'Come funziona un modello linguistico (e i suoi limiti)', 'Che cosa fa realmente un LLM e perché può sbagliare.', [
    ['Che cosa fa', 'Un modello linguistico di grandi dimensioni (LLM) è addestrato a prevedere il testo successivo su enormi quantità di testo. Da questo emergono capacità di sintesi, traduzione, scrittura di codice.'],
    ['Limiti', 'Può produrre risposte plausibili ma false («allucinazioni»), non ha accesso a fatti recenti se non li riceve, e non «sa» di sapere. La sicurezza con cui scrive non indica correttezza.'],
    ['Uso consapevole', 'Verifica le informazioni importanti con fonti affidabili, fornisci contesto chiaro, non incollare dati sensibili in strumenti non autorizzati, e tratta l’output come bozza da controllare.']
  ], [
    mc('Che cosa è un’allucinazione?', ['Una risposta plausibile ma falsa', 'Un errore di rete', 'Un bug di grafica', 'Una funzione'], 0),
    mc('Come si usa un LLM in modo consapevole?', ['Verificando l’output con fonti affidabili', 'Fidandosi sempre', 'Condividendo dati sensibili', 'Evitando contesto'], 0),
    mc('L’addestramento di base di un LLM consiste in…', ['Prevedere il testo successivo', 'Cercare su Internet in tempo reale', 'Verificare i fatti', 'Eseguire codice'], 0)
  ], [
    mc('La sicurezza con cui un LLM risponde indica correttezza?', ['No', 'Sì', 'Sempre', 'Solo per il codice'], 0),
    mc('Che cosa è meglio non incollare in uno strumento non autorizzato?', ['Dati sensibili', 'Domande generali', 'Una poesia', 'Un’idea'], 0)
  ]);

  // ---- Formula 1 (giovedì) ----
  pill('f1-tyres', 'f1', 'Gomme: mescole, temperatura, degrado', 'Perché la gestione delle gomme decide la strategia.', [
    ['Mescole', 'La F1 usa mescole con diversa durezza: più morbide = più aderenza ma più degrado; più dure = più durata ma meno grip. Il regolamento prevede l’uso di almeno due mescole diverse in gara asciutta.'],
    ['Temperatura e degrado', 'Le gomme lavorano in una **finestra di temperatura**: troppo fredde non aderiscono, troppo calde si degradano. Il **degrado** è la perdita di prestazione col passare dei giri.'],
    ['Perché conta', 'Il bilancio tra ritmo e usura determina quando fermarsi. Una gomma che degrada meno permette uno stint più lungo.']
  ], [
    mc('Che cosa succede con una mescola più morbida?', ['Più grip ma più degrado', 'Meno grip e meno degrado', 'Nessuna differenza', 'Più durata'], 0),
    mc('Che cos’è il degrado?', ['Perdita di prestazione col tempo', 'Un tipo di gomma', 'Un incidente', 'Un limite di velocità'], 0),
    mc('Perché esiste una finestra di temperatura?', ['Le gomme funzionano meglio in un intervallo', 'Per regola estetica', 'Per il pubblico', 'Per il motore'], 0)
  ], [
    mc('Una gomma troppo calda…', ['Si degrada più in fretta', 'Dura di più', 'Aderisce meglio sempre', 'Non cambia'], 0),
    mc('Mescole dure vs morbide: vantaggio delle dure?', ['Più durata', 'Più grip', 'Più peso', 'Più velocità massima'], 0)
  ]);

  pill('f1-aero', 'f1', 'Aerodinamica: downforce e resistenza', 'Come le ali e il fondo generano carico.', [
    ['Downforce', 'La **deportanza** (downforce) spinge l’auto verso la pista, aumentando il grip in curva. Si genera con le ali e, soprattutto nelle monoposto attuali, con il fondo (effetto suolo).'],
    ['Resistenza', 'Più carico di solito significa più **resistenza** (drag), quindi minore velocità massima in rettilineo. I team scelgono un compromesso in base al circuito.'],
    ['DRS', 'Il DRS apre l’ala posteriore su alcuni rettilinei per ridurre la resistenza e favorire il sorpasso, entro limiti regolamentari.']
  ], [
    mc('Che cos’è la downforce?', ['Forza che spinge l’auto verso il suolo', 'Una spinta in avanti', 'Una gomma', 'Un motore'], 0),
    mc('Che compromesso devono trovare i team?', ['Carico contro resistenza', 'Peso contro colore', 'Costo contro rumore', 'Velocità contro sicurezza'], 0),
    mc('A che cosa serve il DRS?', ['Ridurre la resistenza per facilitare il sorpasso', 'Aumentare il carico', 'Raffreddare i freni', 'Cambiare le gomme'], 0)
  ], [
    mc('Quale circuito richiede meno carico?', ['Uno con lunghi rettilinei veloci', 'Uno con molte curve lente', 'Uno cittadino', 'Nessuno'], 0),
    mc('Dove si genera molta downforce nelle monoposto attuali?', ['Nel fondo (effetto suolo)', 'Nel volante', 'Nel casco', 'Nelle ruote'], 0)
  ]);

  // ---- Strategia e logica (sabato) ----
  pill('str-opportunity', 'str', 'Costo opportunità e decisioni', 'Ogni scelta ha un costo: ciò a cui rinunci.', [
    ['Concetto', 'Il **costo opportunità** è il valore della migliore alternativa a cui rinunci scegliendo qualcosa. Spendere un’ora a guardare video costa un’ora di studio, di sonno o di lavoro.'],
    ['Come usarlo', 'Prima di decidere, elenca almeno due alternative e stima benefici e costi di ciascuna, includendo il tempo.'],
    ['Attenzione', 'Il **costo sommerso** (già speso, non recuperabile) non deve influenzare la decisione: conta ciò che puoi ancora ottenere.']
  ], [
    mc('Che cos’è il costo opportunità?', ['Il valore della migliore alternativa rifiutata', 'Il prezzo pagato', 'Un costo fisso', 'Una tassa'], 0),
    mc('Il costo sommerso…', ['Non deve guidare la scelta futura', 'Deve sempre guidarla', 'È uguale al costo opportunità', 'Non esiste'], 0),
    mc('Che cosa fai prima di una decisione importante?', ['Confronto almeno due alternative', 'Scelgo la prima', 'Rimando sempre', 'Chiedo a caso'], 0)
  ], [
    mc('Dedicare un’ora a un videogioco costa…', ['Un’ora di altre attività possibili', 'Niente', 'Solo denaro', 'Solo energia'], 0),
    mc('Hai già speso 100 € per un corso che non ti serve. Che cosa conta ora?', ['Il valore futuro di continuare', 'I 100 € già spesi', 'Il prezzo di listino', 'L’opinione altrui'], 0)
  ]);

  pill('str-bias', 'str', 'Bias di conferma e ragionamento', 'Come evitare di cercare solo ciò che dà ragione.', [
    ['Che cos’è', 'Il **bias di conferma** è la tendenza a cercare e ricordare le informazioni che confermano ciò che già crediamo, ignorando quelle contrarie.'],
    ['Esempio', 'Convinto che un metodo di studio funzioni, ricordi solo i casi in cui ha funzionato e dimentichi quelli in cui hai fallito.'],
    ['Rimedi', 'Cerca attivamente prove contrarie, chiedi a qualcuno di fare l’avvocato del diavolo, definisci in anticipo che cosa ti farebbe cambiare idea.']
  ], [
    mc('Che cos’è il bias di conferma?', ['Cercare solo informazioni che confermano le proprie idee', 'Un errore matematico', 'Un tipo di logica', 'Un’abitudine'], 0),
    mc('Un rimedio utile:', ['Cercare prove contrarie', 'Ignorare i dati', 'Leggere sempre la stessa fonte', 'Evitare confronti'], 0),
    mc('Definire in anticipo che cosa ti farebbe cambiare idea…', ['Riduce il bias', 'Lo aumenta', 'Non cambia', 'È inutile'], 0)
  ], [
    mc('Quale comportamento è un esempio di bias di conferma?', ['Ricordare solo i successi di un metodo', 'Provare più metodi', 'Chiedere pareri contrari', 'Misurare i risultati'], 0),
    mc('Per ridurre il bias conviene…', ['Una verifica dei dati con criteri prefissati', 'Affidarsi al feeling', 'Evitare numeri', 'Ignorare errori'], 0)
  ]);

  // ---- Materie secondarie (domenica) ----
  pill('sec-method', 'sec', 'Il metodo scientifico', 'Come si arriva a conoscenze affidabili.', [
    ['Passi', 'Osservazione → domanda → ipotesi verificabile → esperimento/dati → analisi → conclusione provvisoria. Le conclusioni restano aperte a revisione.'],
    ['Falsificabilità', 'Un’ipotesi scientifica deve poter essere smentita da dati. Un’affermazione che spiega tutto e non può essere messa alla prova non è scientifica.'],
    ['Correlazione e causalità', 'Due fenomeni correlati non sono necessariamente uno la causa dell’altro: può esserci una terza causa o il caso.']
  ], [
    mc('Che cosa significa falsificabile?', ['Può essere smentita da dati', 'È falsa', 'È segreta', 'È sempre vera'], 0),
    mc('Correlazione implica causalità?', ['No, non necessariamente', 'Sempre', 'Mai', 'Solo in medicina'], 0),
    mc('Una conclusione scientifica è…', ['Provvisoria e rivedibile', 'Definitiva', 'Una opinione', 'Una legge'], 0)
  ], [
    mc('Quale è un esempio di ipotesi verificabile?', ['«Dormire 8 ore migliora il punteggio al test»', '«Tutto è relativo»', '«Il destino decide»', '«Mi piace studiare»'], 0),
    mc('I gelati e gli annegamenti aumentano insieme in estate perché…', ['Una terza causa (il caldo) agisce su entrambi', 'I gelati causano annegamenti', 'Gli annegamenti causano gelati', 'Per caso sempre'], 0)
  ]);

  pill('sec-compound', 'sec', 'Interesse composto', 'Perché il tempo conta quanto l’importo.', [
    ['Idea', 'Con l’interesse composto gli interessi si aggiungono al capitale e a loro volta producono interessi. Il capitale cresce in modo esponenziale: 1000 € al 5% annuo diventano circa 1629 € in 10 anni.'],
    ['Il tempo', 'A parità di rendimento, iniziare prima conta molto. Ma lo stesso meccanismo vale per i debiti: gli interessi sul debito crescono.'],
    ['Attenzione', 'I rendimenti reali variano e non sono garantiti; costi e inflazione riducono il rendimento effettivo.']
  ], [
    mc('Che cos’è l’interesse composto?', ['Interessi sugli interessi accumulati', 'Un interesse fisso', 'Un costo', 'Una tassa'], 0),
    mc('Che cosa conta di più a parità di rendimento?', ['Il tempo di capitalizzazione', 'Il colore del conto', 'L’orario', 'Niente'], 0),
    mc('Lo stesso meccanismo agisce su…', ['Debiti con interessi', 'Nessuna cosa', 'Solo i risparmi', 'Solo azioni'], 0)
  ], [
    mc('Che cosa riduce il rendimento reale?', ['Costi e inflazione', 'Il tempo', 'Il capitale', 'Nessuno'], 0),
    mc('1000 € al 5% annuo composto per 10 anni valgono circa…', ['1629 €', '1500 €', '1050 €', '2000 €'], 0)
  ]);

  C.defineSubject({ id: 'sec', title: 'Materie secondarie', icon: '📚', primary: false, goal: 'Cultura generale distribuita: pillole a rotazione la domenica.', stages: [{ id: 'L0', title: 'Pillole introduttive', desc: '', topics: [] }], pillOnly: true });
})(window.ST = window.ST || {});
