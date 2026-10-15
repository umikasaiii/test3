/* SkillTree — scenari di simulazione a carte (parte I, moto): giornata in pista, imparare la guida sportiva, meccanica, viaggio, assetto, stagione amatoriale. Situazioni inventate; scopo didattico, nessun invito a guidare in modo illegale su strada. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  const mk = keys => {
    const f = a => { const r = {}; keys.forEach((k, i) => { if (a[i]) r[k] = a[i]; }); return r; };
    return (label, principle, p, A, tA, B, tB) => ({ label, principle, out: [o(p, f(A), tA), o(Math.round((1 - p) * 1000) / 1000, f(B), tB)] });
  };
  const card = (id, lv, text, choices) => { let h = 0; for (let i = 0; i < id.length; i++) h += id.charCodeAt(i) * (i + 1); const r = h % choices.length; return { id, lv, text, choices: choices.slice(r).concat(choices.slice(0, r)) }; };

  /* ---- 1) Una giornata in pista ---- */
  const c1 = mk(['ritmo', 'gomme', 'fatica', 'rischio']);
  SIM.register({
    id: 'moto-trackday', subject: 'moto', title: 'Una giornata in pista', icon: '🏁',
    intro: 'Primo track day di stagione con la tua moto stradale: sei turni da venti minuti, asfalto che si scalda, gomme da mettere in temperatura, bandiere da rispettare e la voglia di abbassare il tempo sul giro. Ogni scelta sposta progressione di ritmo, stato di gomme e freni, fatica e rischio di caduta. Qui non vince chi spinge di più: vince chi finisce la giornata con la moto intera, più veloce di come è arrivato.',
    vars: {
      ritmo: { label: 'Progressione di ritmo', start: 30, min: 0, max: 100 },
      gomme: { label: 'Gomme e freni', start: 80, min: 0, max: 100 },
      fatica: { label: 'Fatica', start: 15, min: 0, max: 100 },
      rischio: { label: 'Rischio di caduta', start: 15, min: 0, max: 100 }
    },
    weights: { ritmo: 1.2, gomme: 0.6, fatica: -0.8, rischio: -1.3 },
    penalties: [],
    turns: 6, utilText: '1,2 × ritmo + 0,6 × gomme e freni − 0,8 × fatica − 1,3 × rischio',
    cards: [
      card('t-briefing', 1, 'Mattina, ore 8. Il direttore di pista tiene il briefing: significato delle bandiere, regole di sorpasso, uscita dai box. Il caffè è ancora in coda e la tua moto è già pronta.', [
        c1('Ascolti tutto il briefing e fai domande sulle bandiere e sui punti critici del tracciato', 'Regole e segnali prima del ritmo', 0.85, [3, 0, 0, -6], 'Sai cosa significa ogni bandiera e dove si sorpassa: meno sorprese.', [1, 0, 0, -2], 'Molte cose le sapevi già, ma almeno hai fugato un dubbio.'),
        c1('Salti il briefing: hai già fatto una giornata in pista due anni fa', 'Esperienza che copre la lacuna', 0.6, [2, 0, 1, 1], 'Il ricordo regge e guadagni mezz’ora.', [-2, 0, 0, 8], 'Non sapevi che la bandiera gialla lampeggiante qui vale divieto totale di sorpasso.'),
        c1('Ascolti metà briefing e passi il resto a controllare la moto', 'Divisione dell’attenzione', 0.55, [2, 1, 0, -2], 'Controlli tutto e capti l’essenziale.', [0, 0, 0, 4], 'Ti sfugge la procedura di rientro ai box.')
      ]),
      card('t-pressioni', 1, 'Fase di preparazione. Le gomme sono quelle stradali e il fornitore indica una pressione a freddo per uso in pista, più bassa di quella da strada. Stai per montare il termometro da asfalto.', [
        c1('Parti dalla pressione indicata, la misuri a freddo e annoti i valori dopo ogni turno', 'Un riferimento e un dato misurabile', 0.8, [3, 5, 0, -3], 'Il comportamento è prevedibile e la gomma lavora nella sua finestra.', [1, 2, 0, -1], 'L’asfalto è più freddo del previsto, ma almeno hai dati su cui correggere.'),
        c1('Abbassi molto la pressione: più impronta, più aderenza', 'Pressione bassa per grip', 0.4, [5, -3, 1, -1], 'Sembra incollata per due giri.', [-3, -8, 2, 8], 'La spalla si flette e si surriscalda: la moto diventa vaga in appoggio.'),
        c1('Lasci la pressione da strada: è quella con cui sei venuto in sicurezza', 'Abitudine', 0.6, [0, 1, 0, 0], 'La moto è stabile ma poco precisa.', [-2, -4, 1, 3], 'Con il caldo la pressione sale troppo e perdi sensibilità all’anteriore.')
      ]),
      card('t-warmup', 2, 'Primo turno. Le gomme sono fredde e il gruppo ti passa a sinistra e a destra con ritmi diversi. Hai davanti due giri prima di sentire la gomma lavorare.', [
        c1('Fai tre o quattro giri progressivi, con piega e gas crescenti, e guardi solo la tua linea', 'Riscaldamento progressivo', 0.85, [4, 2, 1, -4], 'Le gomme entrano in temperatura e sali con ritmo senza strappi.', [2, 1, 1, 0], 'Il gruppo ti passa nervoso, ma tu resti sul tuo.'),
        c1('Attacchi subito per non far scappare i più lenti', 'Ritmo sotto pressione', 0.35, [6, -2, 2, 2], 'Ci riesci e ti senti in forma.', [-4, -6, 3, 10], 'L’anteriore chiude nel primo tornante: una scivolata per fortuna senza danni.'),
        c1('Fai un solo giro lento e poi tiri subito il collo', 'Rodaggio troppo corto', 0.5, [4, 0, 1, 0], 'Funziona se la gomma è già tiepida.', [-2, -4, 2, 6], 'La posteriore è ancora fredda e sbacchia in uscita.')
      ]),
      card('t-gruppo', 2, 'Le tre fasce (principianti, intermedi, veloci) sono già assegnate. Hai lavorato bene in quella intermedia, ma un amico ti dice di passare ai veloci: «sei pronto».', [
        c1('Resti nell’intermedia e punti a farti passare da pochi e passare tu con metodo', 'Gruppo adatto al livello', 0.8, [3, 1, 0, -4], 'Impari rapportandoti con piloti simili e senza panico.', [2, 0, 1, -1], 'La fascia è un po’ lenta, ma costruisci regolarità.'),
        c1('Passi ai veloci: più stimolo e più sorpassi da guardare', 'Stimolo dall’alto', 0.4, [6, -2, 3, 3], 'Impari molto guardando linee migliori.', [-3, -3, 5, 12], 'Il differenziale di velocità ti mette sotto pressione e rischi un contatto.'),
        c1('Scendi nei principianti: meglio andare piano', 'Sottostima di sé', 0.6, [-1, 2, -2, -3], 'Ti riposi e non rischi.', [-3, 0, -1, -1], 'Ti annoi e perdi il filo del ritmo che stavi costruendo.')
      ]),
      card('t-bandiera', 3, 'Sei in una curva veloce e vedi una bandiera gialla ferma sul margine del rettilineo successivo. Dietro di te c’è un pilota in scia.', [
        c1('Alzi il gas subito, rallenti in modo visibile e non sorpassi fino al segnale di via libera', 'Rispetto delle bandiere', 0.9, [1, 1, 0, -6], 'Il pilota dietro capisce e rallenta; il pericolo sul tracciato si risolve.', [0, 0, 1, -2], 'Quello dietro ti sfiora, ma nessun contatto.'),
        c1('Mantieni il ritmo: non vedi l’ostacolo e non vuoi perdere la scia', 'Ritmo prima del segnale', 0.35, [4, 0, 0, 4], 'Passa senza problemi.', [-8, -2, 3, 22], 'Trovi una moto ferma a metà carreggiata e freni all’ultimo.'),
        c1('Rallenti ma sorpassi chi ti sta davanti nel tratto giallo', 'Interpretazione favorevole', 0.3, [3, 0, 0, 2], 'Nessuno se ne accorge.', [-6, -1, 2, 16], 'Il sorpasso in giallo ti costa un richiamo e un ritiro dal turno.')
      ]),
      card('t-sorpasso', 3, 'Un pilota più veloce ti prende in scia e vuole passare. Sei concentrato su una traiettoria che finalmente funziona.', [
        c1('Mantieni la tua linea, alzi un braccio per segnalare e lo lasci passare dove è più sicuro', 'Linea prevedibile', 0.85, [2, 0, 0, -5], 'Passa pulito e tu impari guardando la sua scia.', [0, 0, 1, -2], 'Si incastra in una frenata lunga, ma nessun problema.'),
        c1('Ti allarghi in curva per dargli spazio, di colpo', 'Gesto improvviso', 0.45, [0, 0, 1, 0], 'Capisce e passa.', [-3, -1, 2, 12], 'Cambi linea proprio mentre sta passando e rischiate il contatto.'),
        c1('Acceleri per non farti sorpassare', 'Orgoglio', 0.3, [3, -1, 2, 4], 'Resti davanti, ma con il fiato corto.', [-5, -3, 5, 14], 'Esci largo e perdi la traiettoria.')
      ]),
      card('t-pausa', 4, 'Pausa pranzo, tre ore dopo il primo turno. Fa caldo, la tuta è fradicia e senti la testa leggera.', [
        c1('Bevi con regolarità, mangi poco e leggero e riposi con la tuta aperta', 'Idratazione e carboidrati leggeri', 0.85, [3, 0, -8, -2], 'Il pomeriggio si presenta con energie e lucidità.', [2, 0, -5, 0], 'L’aria è soffocante e il recupero è parziale.'),
        c1('Salti il pranzo per fare un ulteriore turno libero', 'Tempo in pista come priorità', 0.4, [5, -2, 4, 2], 'Ti prende bene e ti senti in forma.', [-2, -3, 10, 10], 'Cali di concentrazione e finisci largo in una curva.'),
        c1('Un panino grande e una bibita zuccherata, poi ti sdrai', 'Pranzo abbondante', 0.55, [1, 0, -4, 0], 'Recuperi e non senti il pranzo.', [-2, 0, 3, 4], 'Il pomeriggio inizia con sonnolenza e crampi.')
      ]),
      card('t-temperature', 5, 'Pomeriggio, asfalto a 48 °C. La posteriore sembra scivolare in uscita e le pressioni dopo il turno sono salite di 0,4 bar sopra l’obiettivo.', [
        c1('Riduci leggermente il ritmo, aspetti il raffreddamento e correggi la pressione a gomma fredda per il turno successivo', 'Gestione termica', 0.8, [-1, 6, 0, -5], 'La gomma resta nella finestra e scivola meno.', [-3, 3, 1, -2], 'Perdi un po’ di ritmo ma la moto è più docile.'),
        c1('Continui allo stesso ritmo: «le gomme devono scaldarsi, è normale»', 'Normalizzazione', 0.35, [4, -3, 2, 2], 'Resiste e ti diverti.', [-4, -12, 3, 14], 'La posteriore perde grip in piena piega e il gas diventa un rischio.'),
        c1('Abbassi molto la pressione per aumentare l’impronta', 'Correzione eccessiva', 0.4, [3, 1, 0, 0], 'Per qualche giro funziona.', [-3, -9, 1, 9], 'La spalla si flette, la gomma si surriscalda ancora di più.')
      ]),
      card('t-frenata', 5, 'Alla fine del rettilineo, frenata violenta in curva lenta. Nei turni precedenti hai frenato sempre più tardi e ti sei trovato lungo in tre occasioni.', [
        c1('Sposti il punto di frenata di pochi metri per volta e valuti freno, ingresso e uscita di ogni prova', 'Un parametro alla volta', 0.85, [4, 1, 0, -5], 'Il tempo scende senza strappi e la moto resta sotto controllo.', [2, 1, 1, -2], 'Un paio di giri non cambiano nulla, ma il metodo regge.'),
        c1('Freni quindici metri più tardi in un colpo solo, per capire il limite', 'Cercare il limite in un salto', 0.3, [7, -3, 2, 4], 'Una volta ti riesce e il giro è velocissimo.', [-5, -8, 4, 22], 'Vai lungo nella via di fuga: sei in piedi per caso.'),
        c1('Freni prima di quanto serva per sicurezza, così non vai lungo', 'Frenata conservativa', 0.65, [-2, 2, 0, -3], 'Sei sicuro ma non cresci.', [-3, 0, 1, 1], 'Stai ancora troppo sul freno in piega e l’anteriore si carica male.')
      ]),
      card('t-cronometro', 6, 'Il cronometro dice 1’42”8 al giro. Il tuo obiettivo era 1’42”. Nei prossimi venti minuti hai un solo turno prima del traguardo di giornata.', [
        c1('Lavori sulla regolarità e su un punto: l’uscita dell’ultima curva, cercando di replicare giri uguali', 'Costanza prima del tempo', 0.8, [5, 1, 1, -3], 'Il tempo scende di un paio di decimi senza forzare.', [2, 0, 2, -1], 'Il lavoro è buono ma il cronometro non cambia.'),
        c1('Spingi in ogni curva per chiudere il decimo mancante', 'Inseguire il numero', 0.35, [6, -3, 5, 7], 'Ti esce un giro buono.', [-5, -6, 6, 20], 'Vai oltre il limite in tre curve e ti trovi con il retrotreno in controsterzo.'),
        c1('Smetti di guardare il tempo e vai a sensazione', 'Sensazione senza dato', 0.6, [2, 0, 0, 0], 'Il ritmo è buono, ma non capisci dove migliorare.', [-1, 0, 1, 2], 'Non c’è un riferimento a cui tornare.')
      ]),
      card('t-fatica', 7, 'Quarto turno. L’avambraccio brucia, la frenata è meno precisa e hai commesso due errori leggeri nello stesso giro.', [
        c1('Rientri ai box, riposi un turno e ti confronti con l’istruttore su come ti vedeva in pista', 'La fatica è un dato', 0.85, [1, 0, -10, -8], 'Scopri che stringevi il manubrio: lo rilassi e torni più pulito.', [0, 0, -6, -3], 'Il riposo è più corto del previsto, ma almeno recuperi.'),
        c1('Fai ancora un turno: sei qui per allenarti', 'Perseverare', 0.4, [3, -2, 6, 4], 'Ti riprendi con un paio di giri buoni.', [-5, -3, 12, 18], 'Vai lungo in curva 3 e rientri con un ginocchio dolorante.'),
        c1('Prendi un integratore energetico e continui', 'Tampone', 0.5, [2, 0, -3, 1], 'La lucidità torna per un po’.', [-2, 0, 5, 9], 'Il calo ritorna dopo sei giri.')
      ]),
      card('t-sbavatura', 8, 'In uscita da una curva lenta il retrotreno scivola e riprendi la moto con un correttivo. Nessuna caduta, ma il cuore sta battendo forte. Tre giri dopo senti ancora un lieve tremito.', [
        c1('Rientri, controlli gomma e pressioni, e ripassi con il gas leggermente più progressivo', 'Analisi dell’errore', 0.8, [2, 2, -2, -8], 'Capisci che aprivi il gas troppo presto e correggi.', [0, 1, 0, -3], 'Il problema non è chiaro, ma sei prudente.'),
        c1('Torni subito in pista per «chiudere» la paura', 'Rimontare subito', 0.45, [4, 0, 2, 2], 'La paura svanisce e ti riprendi.', [-4, -2, 6, 17], 'Sei tesissimo e un secondo errore finisce a terra.'),
        c1('Finisci la giornata: hai già fatto abbastanza', 'Abbandono precauzionale', 0.7, [-3, 3, -4, -6], 'Non rischi, ma lasci perdere un turno utile.', [-3, 2, -2, -3], 'Rimpianti a fine giornata.')
      ]),
      card('t-gomma', 9, 'Controllo gomme prima dell’ultimo turno: la posteriore ha un bordo che sembra «bruciato» ai lati e la gomma è già calda al tatto. Dopo cinque turni i freni hanno un pedale più lungo.', [
        c1('Sostituisci la gomma o chiedi un parere al gommista di pista; controlli anche pastiglie e liquido freni', 'Sicurezza prima del chilometraggio', 0.85, [-2, 12, 0, -10], 'Il cambio ti costa tempo e soldi, ma la moto torna affidabile.', [-4, 8, 0, -5], 'Il gommista dice che era ancora a posto, ma tu sei tranquillo.'),
        c1('La gomma regge: ne hai già viste di peggio. Fai l’ultimo turno', 'Ottimismo', 0.35, [3, -5, 2, 3], 'Regge fino alla fine.', [-5, -14, 4, 22], 'La posteriore perde un pezzo di battistrada e la moto si scompone.'),
        c1('Lasci la moto ferma e finisci la giornata guardando gli altri', 'Rinuncia totale', 0.7, [-4, 5, -3, -8], 'Eviti ogni problema.', [-5, 3, -2, -5], 'Il giorno perso ti costa più del risparmio.')
      ]),
      card('t-ultimo', 10, 'Ultimo turno, luce bassa e asfalto più fresco. Un amico ti sfida: «chi chiude più veloce paga la cena». Sei alla tua migliore forma della giornata e hai già migliorato di mezzo secondo.', [
        c1('Rifiuti la sfida, usi il turno per consolidare la regolarità e chiudi con qualche giro di defaticamento', 'Chiusura prudente', 0.85, [4, 2, -3, -8], 'Chiudi con un tempo solido e senza rischi.', [2, 1, -1, -3], 'L’amico ti prende in giro, ma ti basta quanto hai imparato.'),
        c1('Accetti: è un gioco e con l’asfalto fresco c’è grip', 'Sfida da amico', 0.4, [7, -1, 3, 6], 'Scendi di un secondo e vinci la cena.', [-6, -4, 5, 24], 'Sovrastimi il grip e finisci a terra a bassa velocità, con la moto rovinata.'),
        c1('Fai il tuo ritmo ma scappi quando l’amico ti segue', 'Reazione di fuga', 0.5, [3, 0, 2, 2], 'Prendi lo stesso un buon passo.', [-2, -2, 3, 9], 'Sei concentrato su di lui e non sul tracciato.')
      ])
    ]
  });

  /* ---- 2) Imparare la guida sportiva in dodici settimane ---- */
  const c2 = mk(['tecnica', 'fiducia', 'fatica', 'rischio']);
  SIM.register({
    id: 'moto-imparare', subject: 'moto', title: 'Dodici settimane per imparare la guida sportiva', icon: '🎓',
    intro: 'Hai la patente da due anni e vuoi imparare a guidare in modo sportivo ma sicuro. Hai dodici settimane: un corso, qualche uscita in pista, esercizi di frenata e di curva, un istruttore che ti dà feedback e una moto che non perdona gli errori. Ogni scelta sposta tecnica, fiducia in te stesso, fatica accumulata e rischio. Non vince chi corre di più: vince chi costruisce basi solide una alla volta.',
    vars: {
      tecnica: { label: 'Tecnica di guida', start: 25, min: 0, max: 100 },
      fiducia: { label: 'Fiducia ben calibrata', start: 40, min: 0, max: 100 },
      fatica: { label: 'Fatica e stress', start: 20, min: 0, max: 100 },
      rischio: { label: 'Rischio di errore grave', start: 25, min: 0, max: 100 }
    },
    weights: { tecnica: 1.4, fiducia: 0.6, fatica: -0.7, rischio: -1.2 },
    penalties: [],
    turns: 6, utilText: '1,4 × tecnica + 0,6 × fiducia − 0,7 × fatica − 1,2 × rischio',
    cards: [
      card('i-corso', 1, 'Settimana 1. Devi scegliere dove imparare: un corso di guida sicura con istruttori abilitati, un amico esperto che si offre di accompagnarti, oppure i video online.', [
        c2('Ti iscrivi a un corso con istruttori e programma graduale, che prevede feedback personale', 'Istruzione strutturata', 0.85, [7, 3, 2, -6], 'Impari le basi nel giusto ordine e con feedback.', [5, 1, 3, -2], 'Il corso è un po’ generico, ma il metodo regge.'),
        c2('Segui l’amico esperto: guida da anni e ti porta sulle sue strade', 'Esempio informale', 0.45, [4, 4, 0, 0], 'Impari qualcosa e ti diverti.', [0, 1, 1, 12], 'Ti porta a un ritmo che non è il tuo e copi anche i suoi difetti.'),
        c2('Guardi tutorial online e provi da solo in un parcheggio vuoto', 'Autodidatta senza feedback', 0.5, [3, 2, 0, -1], 'Alcuni esercizi sono chiari e li ripeti.', [-1, 2, 1, 8], 'Consolidi errori di postura che nessuno ti corregge.')
      ]),
      card('i-sguardo', 1, 'Settimana 2. In un esercizio di slalom lento l’istruttore ti dice: «guarda dove vuoi andare, non dove temi di finire». Tu fissi i coni.', [
        c2('Alzi lo sguardo verso l’uscita di ogni cono e ripeti l’esercizio fino a sentirlo naturale', 'Visione e controllo', 0.85, [6, 2, 1, -4], 'La moto segue lo sguardo e lo slalom si apre.', [3, 1, 2, -1], 'Il cambiamento è lento, ma l’istruttore conferma il progresso.'),
        c2('Continui a guardare i coni: se li perdi di vista li tocchi', 'Fissazione sull’ostacolo', 0.35, [1, 2, 0, 3], 'Per ora li schivi.', [-3, -3, 2, 8], 'Li travolgi uno dopo l’altro e ti irrigidisci.'),
        c2('Provi a velocità sempre più alta per «sentire» il movimento', 'Velocità come maestro', 0.4, [4, 3, 2, 4], 'Funziona, ma sei al limite.', [-3, -3, 4, 14], 'Perdi il controllo e finisci a terra a bassa velocità.')
      ]),
      card('i-frenata', 2, 'Settimana 3. Esercizio di frenata: dai 50 km/h devi fermarti entro un cono. Finora hai usato quasi solo il freno posteriore.', [
        c2('Impari a usare i due freni con progressione: anteriore morbido all’inizio, poi crescente, con il peso sulle gambe', 'Frenata progressiva con peso sull’anteriore', 0.85, [7, 3, 2, -6], 'Gli spazi si accorciano e la moto resta composta.', [4, 1, 3, -2], 'Fatichi a dosare la leva, ma la direzione è giusta.'),
        c2('Dai tutta la leva anteriore a freddo per abituarti allo “spavento”', 'Esposizione brusca', 0.3, [3, 4, 2, 6], 'Funziona e ti senti sicuro.', [-3, -6, 4, 18], 'L’anteriore si blocca e cadi a bassa velocità.'),
        c2('Continui con il solo posteriore: è «più sicuro»', 'Convinzione errata', 0.6, [1, 1, 0, 0], 'Nessun blocco ma spazi lunghi.', [-2, -2, 1, 8], 'Il posteriore si blocca e la moto scoda.')
      ]),
      card('i-postura', 2, 'Settimana 4. L’istruttore nota che in curva stai rigido, con le braccia tese e il corpo fermo in sella. Dice che stai «combattendo» la moto.', [
        c2('Lavori su un esercizio per volta: braccia morbide, poi busto e gambe, e verifichi con un video', 'Una variabile alla volta', 0.85, [7, 3, 2, -5], 'Dopo due sessioni la moto è più fluida e ti stanchi meno.', [4, 1, 2, -2], 'Il video mostra ancora tensioni, ma capisci dove lavorare.'),
        c2('Cerchi di cambiare tutto in una volta: braccia, busto, sguardo, gas', 'Troppo insieme', 0.35, [4, 2, 3, 2], 'Per qualche giro ci riesci.', [-3, -4, 5, 10], 'Sei sommerso dalle istruzioni e fai peggio di prima.'),
        c2('Lasci stare: ognuno ha il suo stile', 'Rifiuto del feedback', 0.5, [1, 2, 0, 2], 'Resti dove sei.', [-2, -2, 1, 9], 'La rigidità ti stanca e peggiora la frenata.')
      ]),
      card('i-ripetizione', 3, 'Settimana 5. Hai una curva in cui sbagli sempre la stessa cosa: apri il gas troppo presto e allarghi l’uscita.', [
        c2('Ripeti la curva a velocità inferiore, apri il gas dopo il vertice e aggiungi velocità solo quando è pulita', 'Pratica deliberata', 0.85, [7, 3, 2, -5], 'La traiettoria si pulisce e acquisisci fiducia.', [4, 2, 3, -2], 'Serve una seconda sessione per vederne i frutti.'),
        c2('Provi la curva a velocità maggiore per «forzare» la soluzione', 'Velocità come correttivo', 0.35, [3, 2, 2, 3], 'Per un po’ ti riesce.', [-3, -4, 4, 14], 'Allarghi di più e rischi la via di fuga.'),
        c2('Passi a un’altra curva e speri che migliori da sola', 'Evitamento', 0.5, [1, 1, -1, 0], 'Diventa un punto cieco ma passa inosservato.', [-2, -2, 1, 7], 'L’errore si ripresenta in altri punti.')
      ]),
      card('i-feedback', 4, 'Settimana 6. Fai riprendere una tua sessione con una telecamera. Il video mostra che il tuo ginocchio interno si apre troppo e che sbarri la moto in ingresso.', [
        c2('Guardi il video con l’istruttore, scegli un solo difetto da correggere e lo lavori per due uscite', 'Feedback specifico e mirato', 0.85, [7, 3, 1, -5], 'Ora sai cosa vedi e come correggerlo.', [4, 2, 2, -2], 'Il difetto è radicato e va lavorato più a lungo.'),
        c2('Ti deprimi vedendoti: decidi che sei negato e scendi di livello', 'Autocritica distruttiva', 0.55, [-1, -6, -1, -1], 'Almeno non rischi.', [-3, -8, 0, 0], 'Perdi motivazione e salti due uscite.'),
        c2('Ignori il video: i filmati mostrano sempre cose peggiori di quel che senti', 'Negazione', 0.4, [1, 3, 0, 4], 'Ti senti più sicuro.', [-3, -2, 1, 10], 'Mantieni la rigidità e il difetto si consolida.')
      ]),
      card('i-pista', 5, 'Settimana 7. Ti propongono una giornata in pista con il corso. Non hai mai guidato su un circuito e hai paura di essere lento.', [
        c2('Ti iscrivi alla fascia principianti, vai a ritmo tuo e ti concentri su traiettoria e frenata', 'Contesto protetto', 0.85, [7, 4, 3, -4], 'Impari in un ambiente controllato e ti diverti.', [4, 2, 4, -1], 'Le gomme sono fredde e il turno parte lento, ma impari.'),
        c2('Rimandi: «sono pronto solo quando sarò più veloce»', 'Attesa senza pratica', 0.6, [0, -2, -1, 0], 'Resti nel tuo livello.', [-2, -4, 0, 2], 'Il corso prosegue senza di te e perdi il passo.'),
        c2('Ti iscrivi alla fascia intermedia: se resti in coda li segui e impari', 'Sfidare la fascia', 0.4, [6, 3, 4, 5], 'Impari tanto vedendo linee migliori.', [-2, -5, 6, 16], 'Il ritmo è troppo alto e cadi alla seconda curva.')
      ]),
      card('i-mente', 6, 'Settimana 8. Dopo due giri riusciti senti il pilota che c’è in te: hai voglia di dare un colpo di gas in più. Poi un’emozione ti afferra nella testa.', [
        c2('Ti dai un obiettivo di processo (frenata costante, sguardo alto) e lasci il tempo come risultato', 'Obiettivo di processo', 0.8, [6, 3, 2, -4], 'Resti lucido e migliori senza forzare.', [3, 1, 2, -1], 'Il risultato non si vede subito, ma il metodo resta.'),
        c2('Dici a te stesso «adesso spingi» e aumenti il ritmo a ogni giro', 'Entusiasmo senza freno', 0.35, [5, 4, 3, 5], 'Ti scende il tempo.', [-3, -4, 5, 18], 'Apri il gas troppo in fretta e alzi la moto in uscita.'),
        c2('Ti blocchi sulla paura di sbagliare e vai a rilento tutto il turno', 'Paralisi', 0.5, [0, -3, 2, 1], 'Eviti errori ma non impari.', [-2, -5, 3, 5], 'Il turno passa senza progressi.')
      ]),
      card('i-stanchezza', 7, 'Settimana 9. Hai fatto tre uscite in dieci giorni. Il corpo è stanco, i lavori ti prendono e noti piccoli errori ripetuti.', [
        c2('Ti prendi una settimana di recupero e ripassi mentalmente esercizi e traiettorie', 'Recupero e visualizzazione', 0.8, [4, 3, -9, -4], 'Torni fresco, con più chiarezza.', [2, 2, -6, -1], 'Perdi un po’ di ritmo, ma recuperi.'),
        c2('Continui con le uscite: il corso finisce fra poco', 'Sovrallenamento', 0.4, [4, 1, 6, 5], 'Reggi e arrivi al corso con più pratica.', [-3, -3, 12, 15], 'La stanchezza ti fa sbagliare un controllo e vai lungo.'),
        c2('Guardi solo video di piloti professionisti per “assorbire” la tecnica', 'Imitazione passiva', 0.5, [2, 2, -4, 1], 'Ti ispira e ti rilassa.', [0, 1, -2, 3], 'Copi dettagli che non puoi riprodurre ancora.')
      ]),
      card('i-errore', 8, 'Settimana 10. Cadi a bassa velocità in un tornante: nulla di grave, ma la moto è graffiata e la mano ti trema. Sei a metà del corso.', [
        c2('Ti fermi, valuti i danni, ti fai controllare dall’istruttore e analizzi con lui cosa è successo prima di ripartire', 'Analisi dopo l’errore', 0.85, [5, 2, 1, -7], 'Capisci che sei andato dentro troppo piano con il peso sul manubrio.', [3, 1, 2, -3], 'La causa non è chiara, ma rientri con calma.'),
        c2('Ti rimetti in sella subito per non farti prendere dal timore', 'Rimonta emotiva', 0.4, [3, 2, 2, 3], 'Funziona e ti rimette in pista.', [-4, -5, 5, 17], 'Sei ancora tremante e commetti un secondo errore.'),
        c2('Smetti per un mese: la moto ha bisogno di riparazioni', 'Pausa lunga', 0.6, [-2, -3, -3, -3], 'Ti riposi.', [-4, -5, -2, 0], 'Perdi il ritmo e la fiducia sparisce.')
      ]),
      card('i-gruppo', 9, 'Settimana 11. Un gruppo di amici propone una “uscita sportiva” sulle strade di montagna aperte al traffico. Sei curioso di mettere in pratica quanto hai imparato.', [
        c2('Declini l’uscita sportiva su strada aperta e proponi una giornata in pista a ritmo libero', 'La velocità va dove è sicura e legale', 0.85, [5, 3, 0, -9], 'La pista è l’ambiente giusto e tutti si divertono senza rischiare gli altri.', [3, 2, 1, -4], 'Solo due amici accettano, ma è una buona giornata.'),
        c2('Vai, ma ti tieni sotto i limiti e nelle curve cieche', 'Uscita su strada con rispetto', 0.65, [2, 3, 2, 0], 'Resti sul ritmo giusto.', [-3, -3, 4, 14], 'Qualcuno del gruppo spinge e ti trascina.'),
        c2('Vai e provi a stare con i più veloci: è l’occasione per metterti alla prova', 'Pressione del gruppo', 0.25, [4, 4, 4, 5], 'Ti riesce e ti senti forte.', [-6, -7, 6, 28], 'In una curva cieca incontri un’auto: ti salvi per un soffio.')
      ]),
      card('i-esame', 10, 'Settimana 12. Ultima giornata: prova finale con l’istruttore su un percorso di frenata, slalom e curva. Hai un’ottima giornata e sei in forma.', [
        c2('Fai la prova a ritmo tuo, applicando lo schema che hai allenato e senza cercare di stupire', 'Fedeltà al processo', 0.85, [7, 4, 0, -7], 'Consegni un risultato pulito e regolare.', [4, 3, 1, -3], 'Fai un piccolo errore, ma lo gestisci con calma.'),
        c2('Provi a stupire l’istruttore con una frenata al limite', 'Esibizione', 0.35, [6, 5, 3, 5], 'Gli piace e ti senti un campione.', [-4, -6, 5, 22], 'Blocchi l’anteriore e l’istruttore ti ferma.'),
        c2('Sei teso e chiedi di rimandare a un’altra data', 'Rinvio', 0.6, [-1, -2, -2, -2], 'Ti rilassi.', [-3, -4, 1, 0], 'Perdi la forma e il momento giusto.')
      ]),
      card('i-prossimo', 6, 'A fine corso hai ancora margine. Come impieghi le prossime settimane per consolidare quanto imparato?', [
        c2('Programmi un’uscita mensile in pista con un obiettivo preciso e riguardi i tuoi video ogni volta', 'Ripetizione distribuita e verifica', 0.85, [6, 3, 0, -5], 'La tecnica si consolida con calma.', [4, 2, 1, -2], 'Il calendario scivola, ma recuperi.'),
        c2('Compri una moto più potente per “crescere”', 'Potenza come scorciatoia', 0.35, [3, 5, 2, 6], 'Ti diverti, ma devi riadattarti.', [-3, -5, 4, 20], 'La nuova moto ti prende la mano nei primi giri.'),
        c2('Smetti: hai imparato abbastanza e il rischio è alto', 'Stop', 0.6, [-3, -1, -4, -5], 'Ti fermi e non rischi.', [-5, -3, -2, -2], 'Tutto quello che hai costruito svanisce in pochi mesi.')
      ])
    ]
  });

  /* ---- 3) Diagnosi e manutenzione di una moto ---- */
  const c3 = mk(['affidabilita', 'sicurezza', 'costi', 'tempo']);
  SIM.register({
    id: 'moto-meccanica', subject: 'moto', title: 'Diagnosi e manutenzione della tua moto', icon: '🔧',
    intro: 'La tua moto ha sette anni e 28.000 km. In sei occasioni dovrai decidere: un guasto, un rumore, un consumo strano, il tagliando, un ricambio, un parere dell’officina. Ogni scelta sposta affidabilità, sicurezza, costi sostenuti e tempo perso. La manutenzione migliore non è la più economica né la più costosa: è quella che protegge freni, gomme e catena prima del resto e non cerca scorciatoie sui guasti che contano.',
    vars: {
      affidabilita: { label: 'Affidabilità della moto', start: 55, min: 0, max: 100 },
      sicurezza: { label: 'Sicurezza (freni, gomme, luci)', start: 55, min: 0, max: 100 },
      costi: { label: 'Costi sostenuti', start: 20, min: 0, max: 100 },
      tempo: { label: 'Tempo perso fermo', start: 15, min: 0, max: 100 }
    },
    weights: { affidabilita: 1, sicurezza: 1.4, costi: -0.7, tempo: -0.5 },
    penalties: [],
    turns: 6, utilText: '1,0 × affidabilità + 1,4 × sicurezza − 0,7 × costi − 0,5 × tempo',
    cards: [
      card('m-avviamento', 1, 'Dopo due settimane di sosta in garage la moto non parte: il motorino gira lento e poi si ferma. È autunno e fa freddo.', [
        c3('Controlli per prima cosa la batteria con un tester, poi i contatti dei morsetti, prima di toccare altro', 'Dal semplice al complesso', 0.85, [6, 2, -2, -2], 'La batteria è scarica per la sosta: la ricarichi e riparti.', [4, 1, -6, -5], 'La batteria è ormai a fine vita: ne compri una nuova.'),
        c3('Chiedi un soccorso e porti la moto in officina senza controllare nulla', 'Delega totale', 0.6, [4, 1, -8, -8], 'Il problema era semplice e ti costa comunque.', [2, 0, -10, -9], 'L’officina trova più di un problema e il conto sale.'),
        c3('Smonti il motorino d’avviamento per verificarlo', 'Salto di diagnosi', 0.25, [4, 0, -3, -5], 'Era davvero lui.', [-2, -2, -7, -12], 'Scopri che era la batteria e hai perso tempo.')
      ]),
      card('m-catena', 1, 'Noti che la catena fa un lieve fruscio, è un po’ secca e il gioco al centro sembra aumentato. Hai fatto 2.500 km dall’ultimo controllo.', [
        c3('Pulisci, lubrifichi e regoli la tensione secondo il manuale, controllando anche l’usura dei denti dei pignoni', 'Manutenzione ordinaria', 0.9, [5, 4, -2, -2], 'La trasmissione torna silenziosa e scorrevole.', [3, 3, -4, -4], 'I pignoni risultano consumati: la sostituzione è inevitabile.'),
        c3('Tiri la catena al massimo per eliminare il gioco', 'Eccesso di tensione', 0.35, [1, 0, -1, -1], 'Il gioco sparisce.', [-4, -6, -6, -4], 'Una catena troppo tesa consuma cuscinetti e pignoni e rischia di spezzarsi.'),
        c3('Spruzzi molto lubrificante e ignori il resto', 'Rimedio superficiale', 0.5, [2, 2, -1, -1], 'Il rumore si attenua.', [-2, -3, -3, -2], 'Il lubrificante in eccesso attira polvere e sporco.')
      ]),
      card('m-freni', 2, 'La leva del freno anteriore ha una corsa più lunga del solito e le pastiglie, dai primi controlli, sono quasi al limite. Hai una gita programmata nel fine settimana.', [
        c3('Controlli pastiglie e disco, sostituisci le pastiglie e verifichi lo stato del liquido freni', 'Il freno prima di tutto', 0.9, [4, 10, -4, -3], 'Il comando torna deciso e sicuro.', [3, 8, -8, -6], 'Il liquido è vecchio e serve anche uno spurgo: il costo aumenta.'),
        c3('Rimandi a dopo la gita: le pastiglie resistono ancora qualche centinaio di chilometri', 'Rinviare ciò che non va rinviato', 0.4, [0, 2, 0, 0], 'Funziona fino al ritorno.', [-4, -14, -3, -5], 'In discesa il freno ti cede e rischi l’incidente.'),
        c3('Sostituisci solo la pastiglia consumata più dell’altra', 'Sostituzione parziale', 0.4, [2, 3, -2, -2], 'Risparmi un po’.', [-1, -6, -4, -3], 'La frenata è sbilanciata e i dischi si rigano.')
      ]),
      card('m-rumore', 2, 'Dopo un’uscita senti un «tic-tic» regolare dal motore al minimo, che sparisce quando sali di giri. L’olio ha 7.000 km.', [
        c3('Controlli il livello e lo stato dell’olio, fai un cambio olio e filtro e ascolti di nuovo', 'Manutenzione prima della diagnosi sofisticata', 0.8, [6, 3, -3, -3], 'Il tic sparisce: l’olio era troppo vecchio.', [3, 1, -5, -4], 'Il rumore resta: serve la messa a punto delle valvole.'),
        c3('Ignori il rumore: se sparisce coi giri non è grave', 'Normalizzazione di un sintomo', 0.45, [1, 0, 0, 0], 'Resta sopportabile.', [-6, -2, -6, -6], 'Un gioco valvole eccessivo danneggia punterie e alberi.'),
        c3('Smonti la testata per cercare la causa', 'Intervento drastico', 0.15, [3, 0, -4, -6], 'Trovi un punto da registrare.', [-2, -2, -12, -14], 'Non trovi nulla e il costo è alto.')
      ]),
      card('m-tagliando', 3, 'Il tagliando è scaduto da 2.000 km. L’officina ufficiale chiede 380 €, un’officina di fiducia 260 €, e un amico ti propone di farlo da te con il manuale.', [
        c3('Vai dall’officina di fiducia chiedendo un preventivo scritto con le operazioni previste', 'Preventivo chiaro e controllabile', 0.8, [6, 5, -4, -3], 'Pagi il giusto, ogni voce è chiara e la moto è a posto.', [4, 3, -6, -5], 'Il preventivo cresce con piccoli extra, ma sono giustificati.'),
        c3('Vai all’officina ufficiale: costa di più, ma è più sicura', 'Brand come garanzia', 0.7, [6, 6, -7, -3], 'Tutto in regola e documentato.', [5, 5, -9, -4], 'Paghi voci poco utili.'),
        c3('Lo fai da te senza esperienza, per risparmiare', 'Fai da te senza competenze', 0.35, [4, 3, -1, -4], 'Sei fortunato e va tutto bene.', [-4, -10, -3, -6], 'Serri male una vite dei freni e il tagliando va rifatto.')
      ]),
      card('m-consumi', 4, 'I consumi sono saliti da 5,2 a 6,4 litri per 100 km in due mesi. La moto va bene, ma il minimo è un po’ irregolare.', [
        c3('Controlli pressione degli pneumatici, filtro aria, candele e carburazione prima di fare supposizioni', 'Cause semplici prima di quelle gravi', 0.8, [6, 3, -3, -3], 'Il filtro è intasato: lo sostituisci e il consumo rientra.', [4, 2, -5, -4], 'Le candele sono da cambiare: costo contenuto.'),
        c3('Aggiungi un additivo “miracoloso” nel serbatoio', 'Rimedio commerciale', 0.25, [2, 0, -2, 0], 'Il minimo si regolarizza per qualche giorno.', [-2, 0, -4, -2], 'Il problema persiste e perdi soldi.'),
        c3('Acquisti una centralina elettronica che promette di ridurre i consumi', 'Modifica non necessaria', 0.2, [3, 0, -6, -2], 'Il consumo cala un po’.', [-4, -3, -10, -6], 'La moto va peggio e perde l’omologazione.')
      ]),
      card('m-gomme', 5, 'Le gomme hanno 5.000 km e un battistrada visibilmente residuo, ma sono vecchie di quasi sei anni. Hai notato micro-crepe sulle spalle.', [
        c3('Le sostituisci in base all’età e alle crepe, non solo al battistrada residuo', 'Età della gomma e degrado', 0.85, [4, 12, -6, -3], 'Le nuove gomme migliorano aderenza e frenata.', [3, 8, -9, -5], 'Il costo è alto, ma la moto è più sicura.'),
        c3('Le tieni: il battistrada è ancora abbondante', 'Metrica sbagliata', 0.35, [1, 2, 0, 0], 'Non succede nulla.', [-4, -14, -3, -4], 'In una curva bagnata la moto perde aderenza.'),
        c3('Cambi solo la posteriore, che si consuma di più', 'Coppia mista', 0.4, [2, 4, -3, -2], 'Il comportamento è accettabile.', [-2, -6, -5, -3], 'Differenza di grip tra anteriore e posteriore, e la moto si comporta in modo strano.')
      ]),
      card('m-officina', 6, 'L’officina ti consiglia di sostituire cuscinetti dello sterzo, forcella e cinghia di distribuzione in un colpo solo: 1.100 € in totale. Non sei sicuro di tutto.', [
        c3('Chiedi di vedere i pezzi consumati, la motivazione di ciascun intervento e un secondo parere per le voci più costose', 'Fiducia verificabile', 0.8, [6, 7, -6, -6], 'Scopri che solo i cuscinetti sono urgenti e fai il resto più avanti.', [4, 5, -9, -8], 'Il secondo parere conferma e fai tutto.'),
        c3('Accetti subito: se lo dicono loro sarà necessario', 'Fiducia cieca', 0.5, [6, 6, -12, -4], 'Tutto in regola ma spendi più del dovuto.', [4, 4, -14, -4], 'Paghi un intervento che non serviva.'),
        c3('Rifiuti tutto: «vogliono solo spillarmi soldi»', 'Sfiducia di principio', 0.4, [0, 0, 0, 0], 'Per ora non succede niente.', [-6, -12, -4, -8], 'Un cuscinetto sterzo rovinato ti rende la moto instabile.')
      ]),
      card('m-ricambio', 6, 'Ti serve un disco freno. Un ricambio originale costa 230 €, uno di marca nota 150 €, un compatibile senza certificazione 60 € da un sito sconosciuto.', [
        c3('Scegli il ricambio di marca nota con scheda tecnica e omologazione e lo fai montare da un meccanico', 'Qualità verificabile', 0.85, [5, 9, -5, -3], 'Il disco lavora bene e ti costa meno dell’originale.', [3, 6, -7, -4], 'Serve un po’ di assestamento ma funziona.'),
        c3('Prendi l’originale: nessun rischio', 'Originale a tutti i costi', 0.85, [5, 9, -9, -3], 'Il comportamento è identico.', [4, 8, -10, -3], 'Costa più del necessario.'),
        c3('Compri il compatibile da 60 €', 'Risparmio sul componente critico', 0.35, [1, 3, 0, 0], 'Funziona abbastanza.', [-4, -14, -3, -5], 'Il materiale si usura in poche uscite e fa vibrare la leva.')
      ]),
      card('m-invernale', 7, 'Arriva l’inverno e la moto starà ferma tre mesi. Hai un garage freddo e umido.', [
        c3('Stabilizzatore nel serbatoio, mantenitore di carica, pressioni gomme corrette e copertura traspirante', 'Rimessaggio corretto', 0.85, [7, 3, -3, -4], 'A primavera riparte al primo colpo.', [5, 2, -5, -5], 'Qualche inconveniente, ma la moto sta bene.'),
        c3('La lasci com’è: tanto basta metterla in moto una volta al mese', 'Soluzione parziale', 0.4, [2, 1, 0, -1], 'Ripartirà senza problemi.', [-5, -3, -5, -8], 'Batteria scarica, benzina vecchia, ruggine sui dischi.'),
        c3('Svuoti il serbatoio completamente', 'Serbatoio vuoto', 0.3, [2, 0, -1, -2], 'Nessun problema.', [-5, -3, -5, -6], 'Il serbatoio arrugginisce all’interno.')
      ]),
      card('m-spia', 8, 'Si accende la spia dell’iniezione in autostrada. La moto sembra andare normalmente, ma ti trovi a 120 km da casa.', [
        c3('Ti fermi in un posto sicuro, spegni e riaccendi, controlli la risposta e poi rientri piano e con attenzione', 'Gestione prudente di una spia', 0.75, [4, 5, -3, -4], 'La spia sparisce: era un sensore momentaneo.', [2, 4, -6, -7], 'La spia resta, ma la moto va in modalità ridotta e arrivi a casa.'),
        c3('Continui normalmente: se non da problemi va bene', 'Ignorare la spia', 0.35, [1, 1, 0, 0], 'Arrivi a casa.', [-5, -6, -6, -9], 'Il guasto peggiora e ti ritrovi a piedi.'),
        c3('Chiami subito il carro attrezzi', 'Soluzione cautelativa estrema', 0.65, [3, 5, -9, -8], 'Non rischi nulla.', [3, 5, -10, -9], 'Il costo è alto per un problema minore.')
      ]),
      card('m-vendita', 9, 'Un amico vuole comprare la tua moto. Ha qualche segno ma è affidabile. Il prezzo è corretto, ma lui chiede di non dichiarare un piccolo danno al telaio da una caduta.', [
        c3('Dichiari tutti i difetti noti e la storia degli interventi, con fatture alla mano', 'Trasparenza', 0.9, [3, 5, -2, -2], 'La vendita avviene serenamente e l’amicizia ne esce rafforzata.', [2, 3, -4, -3], 'Il prezzo scende un po’, ma la coscienza è a posto.'),
        c3('Taci il danno al telaio: il prezzo è equo e ormai la moto è usata', 'Omissione', 0.3, [0, -4, 0, 0], 'Nessuno nota nulla.', [-4, -12, -4, -4], 'Il danno emerge in un controllo e ne risponderesti legalmente.'),
        c3('Rinunci alla vendita e tieni la moto: troppo complicato', 'Evitare la decisione', 0.6, [1, 1, 0, -1], 'La moto resta tua.', [0, 0, 0, 0], 'Nessun cambiamento.')
      ]),
      card('m-ricostruzione', 10, 'Dopo una piccola caduta a bassa velocità, la forcella è leggermente storta e il manubrio non è allineato. Puoi ripararla da un artigiano o sostituire gli steli.', [
        c3('Fai controllare allineamento del telaio e della forcella con strumenti e decidi in base alla misura', 'Misurazione prima dell’intervento', 0.85, [6, 10, -6, -6], 'Scopri che la forcella è lievemente piegata: la sostituisci e il comportamento torna corretto.', [4, 7, -9, -8], 'Il telaio è a posto, ma servono spese e tempo.'),
        c3('Raddrizzi la forcella a mano o con un attrezzo improvvisato', 'Riparazione improvvisata', 0.2, [3, 2, -2, -3], 'Sembra a posto.', [-6, -16, -4, -4], 'La forcella cede in frenata.'),
        c3('Ignori il problema se la moto sembra andare dritta', 'Sottovalutazione', 0.35, [1, 1, 0, 0], 'Non emergono difetti.', [-5, -12, -3, -3], 'Il comportamento dello sterzo diventa pericoloso.')
      ]),
      card('m-bilancio', 5, 'Fine stagione: hai 300 € di budget per migliorare la moto prima del prossimo anno. Cosa scegli?', [
        c3('Sostituisci i componenti d’usura critici (liquido freni, olio, pastiglie) e tieni una piccola riserva', 'Prima l’usura, poi il resto', 0.85, [5, 8, -4, -3], 'La moto riparte solida e il budget è sotto controllo.', [3, 6, -6, -4], 'Un imprevisto assorbe la riserva.'),
        c3('Compri un terminale sportivo: più sound, più cavalli', 'Estetica prima della manutenzione', 0.55, [1, -2, -8, -2], 'La moto suona bene.', [-3, -5, -10, -4], 'Perdi omologazione e affidabilità.'),
        c3('Tieni tutto da parte: non succede nulla finché non si rompe', 'Manutenzione reattiva', 0.5, [0, -1, 0, 0], 'Nessuna spesa.', [-5, -8, -4, -6], 'Un guasto ti arriva nel momento peggiore.')
      ])
    ]
  });

  /* ---- 4) Un viaggio in moto di una settimana ---- */
  const c4 = mk(['percorso', 'energia', 'sicurezza', 'budget']);
  SIM.register({
    id: 'moto-viaggio', subject: 'moto', title: 'Una settimana di viaggio in moto', icon: '🧭',
    intro: 'Parti per sette giorni in moto, da solo, con borse laterali, un budget e un itinerario di circa 2.200 km. Meteo che cambia, stanchezza che si accumula, un carico da ripartire, soste da pianificare e qualche imprevisto meccanico. Ogni scelta sposta riuscita del percorso, energia, sicurezza e budget. Il viaggio ben fatto non è quello con più chilometri, ma quello in cui ogni giorno finisci con margine, lucido e in tempo.',
    vars: {
      percorso: { label: 'Riuscita del percorso', start: 30, min: 0, max: 100 },
      energia: { label: 'Energia e lucidità', start: 70, min: 0, max: 100 },
      sicurezza: { label: 'Sicurezza', start: 60, min: 0, max: 100 },
      budget: { label: 'Budget residuo', start: 70, min: 0, max: 100 }
    },
    weights: { percorso: 1.2, energia: 0.9, sicurezza: 1.2, budget: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,2 × percorso + 0,9 × energia + 1,2 × sicurezza + 0,5 × budget',
    cards: [
      card('v-carico', 1, 'La sera prima della partenza prepari i bagagli: una valigia rigida, due borse laterali, uno zaino. Hai circa 22 kg di roba e tanta voglia di portare «per ogni evenienza».', [
        c4('Riduci il carico all’essenziale, metti i pesi vicino al baricentro e in basso, e regoli le pressioni e il precarico come da manuale', 'Distribuzione del carico', 0.85, [4, 4, 8, 3], 'La moto è stabile e la guida resta precisa.', [2, 3, 5, 1], 'Il peso è comunque alto, ma il comportamento è prevedibile.'),
        c4('Metti tutto nel bauletto posteriore: più comodo da montare', 'Peso in alto e dietro', 0.4, [1, 0, -4, 0], 'Sembra tutto a posto.', [-3, -4, -12, -1], 'L’anteriore alleggerisce e la moto diventa instabile a velocità autostradale.'),
        c4('Porti tutto con te sullo zaino', 'Peso sulle spalle', 0.35, [2, -5, -2, 0], 'Per un po’ non si sente.', [-3, -12, -6, 0], 'Dopo tre ore la schiena e le spalle cedono.')
      ]),
      card('v-meteo', 1, 'Giorno 1, ore 8. Le previsioni dicono pioggia e temporali per il primo pomeriggio sul passo che dovresti attraversare. Hai già 280 km programmati.', [
        c4('Parti presto, guardi il radar alle soste e se serve ripieghi su una strada di fondovalle o ti fermi in anticipo', 'Piano B scritto', 0.8, [5, 3, 6, -2], 'Anticipi il passo, eviti il temporale e dormi dove avevi previsto.', [3, 1, 4, -6], 'Il temporale arriva prima del previsto: ti fermi e perdi una tappa, ma in sicurezza.'),
        c4('Parti normalmente e vai: se piove, mettete il giubbino impermeabile', 'Fiducia nell’ottimismo', 0.35, [4, -1, -3, 1], 'Il temporale ti risparmia.', [-4, -8, -12, -5], 'Pioggia forte e asfalto scivoloso in quota.'),
        c4('Annulli la giornata e aspetti il bel tempo', 'Cautela eccessiva', 0.7, [-3, 3, 4, -5], 'Riposi e ripari.', [-4, 2, 3, -7], 'Il tempo non migliora per due giorni.')
      ]),
      card('v-soste', 2, 'Dopo tre ore di guida ininterrotta senti la schiena rigida e fai fatica a concentrarti. Il prossimo paese è a 40 minuti.', [
        c4('Ti fermi alla prima area sicura, stai in piedi dieci minuti, bevi e mangi qualcosa di leggero', 'Pausa ogni due ore', 0.9, [2, 9, 6, -1], 'Riparti lucido e con meno tensione.', [1, 6, 4, -1], 'Il posto è scomodo ma serve comunque.'),
        c4('Aspetti il prossimo paese: sono solo 40 minuti', 'Resistere', 0.5, [3, -2, 0, 0], 'Reggi.', [-1, -9, -7, 0], 'Perdi la lucidità e commetti un errore di valutazione in un incrocio.'),
        c4('Bevi un caffè forte e prosegui', 'Stimolante come tampone', 0.4, [3, 1, 0, 0], 'Funziona.', [-1, -7, -5, 0], 'Il calo arriva dopo, più duro.')
      ]),
      card('v-percorso', 2, 'Giorno 2. Hai due itinerari: una statale tortuosa e panoramica di 150 km con tempi stimati di 3 ore e mezza, oppure l’autostrada in 2 ore. Sei in anticipo e il meteo è sereno.', [
        c4('Scegli la statale panoramica, ma con un’ora di margine e una sosta pranzo programmata', 'Piacere con margine', 0.8, [8, 2, 3, -2], 'Il tragitto è un piacere e arrivi riposato.', [5, -2, 1, -3], 'Una frana rallenta il traffico, ma il margine assorbe l’intoppo.'),
        c4('Prendi l’autostrada per arrivare presto e riposarti', 'Efficienza pura', 0.7, [2, 3, 3, -4], 'Arrivi fresco, ma perdi parte del viaggio.', [1, 2, 3, -6], 'Traffico e pedaggi più alti del previsto.'),
        c4('Combini: statale ma a ritmo sostenuto per compensare il tempo', 'Fretta su strada aperta', 0.35, [6, -2, -4, -1], 'Arrivi in anticipo.', [-3, -8, -12, -4], 'Prendi una curva con ghiaia troppo forte e vai lungo.')
      ]),
      card('v-benzina', 3, 'Giorno 3. Nella zona montana l’ultima stazione di servizio è a 60 km e la prossima a 110 km. Hai metà serbatoio e un’autonomia reale di circa 180 km.', [
        c4('Fai il pieno alla stazione che c’è e calcoli l’autonomia con margine del 20%', 'Margine di autonomia', 0.9, [5, 3, 6, -2], 'Arrivi con più di un quarto di serbatoio.', [3, 2, 4, -3], 'Hai fatto il pieno inutilmente, ma sei tranquillo.'),
        c4('Vai avanti: arriverai alla prossima di sicuro', 'Ottimismo sulla riserva', 0.4, [4, 1, 0, 0], 'Ce la fai con un filo di benzina.', [-8, -8, -10, -6], 'Finisci la benzina in salita e spingi la moto.'),
        c4('Fai solo metà pieno per non appesantire la moto', 'Economia di peso', 0.5, [3, 0, -1, 0], 'Ti basta.', [-5, -5, -6, -3], 'Devi cercare in fretta una stazione.')
      ]),
      card('v-mecc', 4, 'Giorno 3, sera. Controllando la moto noti il livello dell’olio più basso del solito e un po’ di umidità vicino alla guarnizione del cambio. Sei in un paese di 800 abitanti.', [
        c4('Rabbocchi con olio compatibile, annoti il livello, e controlli la perdita al mattino; poi decidi se andare da un’officina', 'Monitorare e agire per gradi', 0.8, [4, 2, 6, -3], 'La perdita è minima e la tieni sotto controllo.', [2, 1, 2, -8], 'La perdita è reale e ti fermi mezza giornata per una riparazione.'),
        c4('Ignori: l’olio basso è normale dopo 700 km', 'Normalizzare', 0.35, [3, 1, 0, 0], 'Nessun danno.', [-5, -3, -10, -10], 'Il motore si surriscalda e il danno ti ferma.'),
        c4('Cerchi subito un’officina a 80 km di distanza, cambiando percorso', 'Deviazione drastica', 0.6, [-3, -3, 4, -9], 'Controllano tutto e riparti con una guarnizione nuova.', [-4, -4, 3, -12], 'L’officina è chiusa e perdi mezza giornata.')
      ]),
      card('v-nebbia', 5, 'Giorno 4. Al passo trovi nebbia e visibilità di 30 metri. La strada è stretta, con ghiaia e curve cieche. Non c’è alternativa a breve.', [
        c4('Rallenti molto, accendi le luci, mantieni distanza e ti fermi in uno slargo sicuro se peggiora', 'Velocità adeguata alla visibilità', 0.85, [3, 0, 8, -2], 'Scendi con calma e dopo il passo la nebbia si dirada.', [1, -2, 5, -4], 'Perdi un’ora ma resti tranquillo.'),
        c4('Mantieni la velocità: prima esci, meglio è', 'Uscire in fretta', 0.3, [4, 0, -4, 0], 'La visibilità migliora e passi.', [-6, -7, -18, -4], 'Incontri un camion fermo dietro una curva e freni all’ultimo.'),
        c4('Torni indietro e prendi un percorso più lungo e sicuro', 'Rinuncia', 0.7, [-3, -3, 4, -5], 'Cambi itinerario con calma.', [-5, -4, 3, -8], 'Il giro è più lungo del previsto.')
      ]),
      card('v-alloggio', 5, 'Giorno 4, sera. Sei stanco e vicino a un albergo costoso (110 €). A 30 km c’è un posto più economico (60 €), ma il buio sta arrivando.', [
        c4('Ti fermi nell’albergo vicino: la stanchezza e il buio sono un rischio che costa più dei 50 €', 'Il costo del rischio', 0.85, [3, 8, 6, -6], 'Dormi bene e riparti in forma.', [1, 6, 4, -8], 'La camera è meno confortevole del previsto, ma va bene.'),
        c4('Vai al posto più economico: risparmi 50 € e sono solo 30 km', 'Risparmio contro margine', 0.45, [3, -2, 0, 4], 'Arrivi tranquillo.', [-3, -9, -10, 3], 'Guidi di notte con fauna sulla strada e rischi un incontro con un cervo.'),
        c4('Dormi in tenda in una piazzola vicino alla strada, senza permessi', 'Bivacco improvvisato', 0.3, [2, 1, -2, 6], 'Nessuno disturba.', [-3, -7, -8, 3], 'Ti svegli con freddo e un controllo delle forze dell’ordine.')
      ]),
      card('v-foratura', 6, 'Giorno 5. Senti una vibrazione al posteriore e dopo una sosta trovi la gomma quasi a terra. Hai un kit di riparazione e una bomboletta.', [
        c4('Ripari con il kit, riporti la pressione al valore corretto e vai piano fino alla prima officina per un controllo', 'Riparazione d’emergenza con verifica', 0.75, [3, 0, 6, -4], 'Arrivi in officina e fai sostituire la gomma.', [1, -2, 3, -9], 'Il kit tiene a metà e devi comunque chiamare un carro attrezzi.'),
        c4('Ripari e prosegui normalmente: il kit è fatto apposta', 'Riparazione provvisoria trattata come definitiva', 0.35, [4, 0, -2, 2], 'Resiste.', [-4, -4, -12, -8], 'La riparazione cede in curva.'),
        c4('Chiami subito il carro attrezzi e basta', 'Delega immediata', 0.6, [-2, 0, 5, -10], 'Ti portano all’officina.', [-3, -2, 4, -12], 'Aspetti due ore sotto il sole.')
      ]),
      card('v-tentazione', 7, 'Giorno 6. Un gruppo di motociclisti locali ti invita a seguirli su una strada di montagna chiusa al traffico per un evento. Sono molto più veloci di te.', [
        c4('Declini con garbo, o li segui a distanza solo se la strada è davvero chiusa e a ritmo tuo, e ti tieni lontano dalla loro scia', 'Il tuo ritmo conta, non quello degli altri', 0.8, [5, 2, 7, 0], 'Ti godi la giornata e conosci persone.', [3, 0, 4, -1], 'La strada è meno bella ma tu sei sereno.'),
        c4('Li segui a tutta: un’occasione così non capita due volte', 'Pressione del gruppo', 0.3, [8, -2, -4, 0], 'Ti diverti moltissimo.', [-4, -9, -18, -6], 'Vai lungo in una curva e ti ritrovi nel fosso.'),
        c4('Preferisci restare in albergo e riposare', 'Rinuncia totale', 0.65, [-3, 4, 3, 2], 'Ti riposi.', [-4, 3, 2, 0], 'Ti pesa rimpiangere l’occasione.')
      ]),
      card('v-rientro', 8, 'Giorno 7. Devi rientrare: 520 km, tutto autostrada e statale, con il rischio di temporali e traffico del ritorno.', [
        c4('Dividi il rientro in due tappe da 260 km con una notte intermedia', 'Margine su tratta lunga', 0.8, [5, 6, 7, -5], 'Rientri riposato e con un giorno in più per recuperare.', [3, 3, 4, -8], 'La notte intermedia costa, ma ne vale la pena.'),
        c4('Fai tutto in giornata per essere a casa presto', 'Una tappa di 520 km', 0.4, [4, -6, -2, 5], 'Arrivi stanco ma intero.', [-2, -12, -10, 2], 'La stanchezza ti fa commettere un errore a un casello.'),
        c4('Parti all’alba e fai una sola sosta', 'Alba senza pause', 0.45, [4, -4, 0, 4], 'Fila liscio.', [-3, -11, -8, 2], 'Un colpo di sonno a metà strada.')
      ]),
      card('v-assicura', 9, 'Prima di una tappa all’estero scopri che la tua assicurazione ha un massimale basso fuori dall’Unione e senza assistenza stradale. Hai tempo di decidere.', [
        c4('Verifichi la copertura, aggiungi assistenza e documenti necessari, e conservi numeri utili a portata', 'Documenti e copertura', 0.9, [5, 3, 8, -3], 'Tutto in regola e un po’ di tranquillità in più.', [3, 2, 5, -5], 'Qualche costo extra, ma sei coperto.'),
        c4('Non fai nulla: nessuno controlla davvero', 'Confidare nella fortuna', 0.3, [3, 1, 0, 3], 'Nessun problema.', [-5, -6, -10, -10], 'Un piccolo incidente diventa un grosso problema.'),
        c4('Rinunci alla tappa estera', 'Evitamento', 0.6, [-4, 2, 2, 2], 'Eviti il problema.', [-5, 1, 1, 1], 'Rimpiangi un posto che volevi vedere.')
      ]),
      card('v-fine', 10, 'Ultima tappa. Hai ancora un giorno di margine e 120 € di budget. Ti viene voglia di un detour di 300 km per un lago famoso.', [
        c4('Consideri energia, meteo e orario: fai il detour solo se riesci a rientrare di giorno, altrimenti lo fai un’altra volta', 'Decisione basata su margini', 0.8, [6, 3, 6, -2], 'Riesci a fare tutto con calma.', [3, 1, 4, 0], 'Rinunci, ma ti rimane tempo per riposare.'),
        c4('Vai comunque: è un’occasione, e il rientro si vede dopo', 'Eccitazione', 0.4, [8, -4, -3, -4], 'Splendido, anche se stanchissimo.', [-3, -10, -12, -6], 'Rientri nel buio con la stanchezza accumulata.'),
        c4('Resti in zona a riposare e basta', 'Riposo', 0.75, [-1, 5, 3, 3], 'Ti riposi.', [-1, 4, 3, 2], 'Il giorno passa senza particolari.')
      ]),
      card('v-diario', 4, 'La sera, tra una tappa e l’altra, noti che stai accumulando piccoli errori: una svolta sbagliata, un pagamento dimenticato. Il gruppo di amici ti manda un messaggio per sapere come stai.', [
        c4('Rispondi con calma, fai un controllo della giornata e imposti un limite di chilometri per l’indomani', 'Revisione serale e limiti', 0.8, [4, 5, 5, 1], 'Impari dai piccoli errori e li correggi.', [2, 3, 3, 0], 'Resti un po’ teso ma consapevole.'),
        c4('Scrivi che va tutto bene e vai a dormire presto senza riflettere', 'Minimizzare', 0.55, [2, 4, 0, 1], 'Dormi bene.', [-1, -2, -6, -2], 'Gli errori si ripetono il giorno dopo.'),
        c4('Passi la serata a riguardare le foto e il percorso del giorno dopo fino a tardi', 'Notte corta', 0.5, [4, -3, -1, 0], 'Il piano è accurato.', [0, -9, -5, 0], 'Dormi poco e sei lento al mattino.')
      ])
    ]
  });

  /* ---- 5) Messa a punto in un weekend ---- */
  const c5 = mk(['tempo', 'sensazioni', 'dati', 'rischio']);
  SIM.register({
    id: 'moto-assetto', subject: 'moto', title: 'Messa a punto in un weekend', icon: '🎛️',
    intro: 'Hai due giorni, sei sessioni e una moto da mettere a punto su un circuito che conosci già. Pressioni, precarico, compressione e ritorno, altezza, rapporti, elettronica: tanti parametri, poco tempo, sensazioni che cambiano con la gomma e il caldo, dati che spesso hanno rumore. Ogni scelta sposta il tempo sul giro, la coerenza delle sensazioni, la qualità dei dati raccolti e il rischio. Il metodo è semplice e noioso: un parametro per volta, un dato per volta.',
    vars: {
      tempo: { label: 'Tempo sul giro (progresso)', start: 20, min: 0, max: 100 },
      sensazioni: { label: 'Feeling con la moto', start: 40, min: 0, max: 100 },
      dati: { label: 'Qualità dei dati', start: 30, min: 0, max: 100 },
      rischio: { label: 'Rischio', start: 20, min: 0, max: 100 }
    },
    weights: { tempo: 1.2, sensazioni: 0.8, dati: 0.8, rischio: -1.2 },
    penalties: [],
    turns: 6, utilText: '1,2 × tempo + 0,8 × sensazioni + 0,8 × dati − 1,2 × rischio',
    cards: [
      card('a-baseline', 1, 'Sabato, prima sessione. Hai la moto con l’assetto standard che ti ha dato il costruttore. Il tecnico ti chiede da dove vuoi partire.', [
        c5('Fai due o tre giri “di riferimento” con l’assetto base, annoti sensazioni e tempi, e parti da lì', 'Punto di partenza misurabile', 0.9, [4, 3, 8, -3], 'Hai un riferimento chiaro per confrontare ogni modifica.', [2, 1, 5, -1], 'Il riferimento è un po’ sporco dal traffico, ma ti serve comunque.'),
        c5('Cambi subito molte cose seguendo la moda del forum', 'Copiare un assetto altrui', 0.3, [3, 1, -3, 4], 'Una delle modifiche funziona.', [-3, -5, -8, 10], 'Non sai più cosa funziona e cosa no.'),
        c5('Provi un assetto da gara trovato in un video', 'Assetto non adatto', 0.25, [4, -1, 0, 6], 'Va bene per un po’.', [-4, -7, -4, 14], 'La moto è nervosa e imprevedibile.')
      ]),
      card('a-pressioni', 1, 'Seconda sessione. La gomma anteriore è calda, la pressione è salita di 0,3 bar. Il feeling in ingresso è un po’ vago.', [
        c5('Registri la pressione a caldo e a freddo, regoli a freddo in modo che a caldo ricada nella finestra consigliata', 'Pressione come variabile controllata', 0.85, [4, 4, 7, -3], 'La gomma lavora nella sua finestra e l’ingresso è più preciso.', [2, 2, 5, -1], 'Il miglioramento è modesto, ma il dato è utile.'),
        c5('Abbassi di 0,5 bar per “aprire” l’impronta', 'Correzione grande', 0.4, [3, 2, 0, 1], 'Per un po’ funziona.', [-3, -4, -3, 7], 'La spalla si surriscalda e la gomma cala.'),
        c5('Non tocchi nulla: la gomma deve scaldarsi', 'Passività', 0.6, [1, 0, 1, 0], 'Il feeling migliora da solo.', [-2, -2, 0, 3], 'Il feeling resta vago e perdi una sessione.')
      ]),
      card('a-uno', 2, 'Hai una lista di sei modifiche possibili: precarico, ritorno forcella, altezza posteriore, rapporti, mappa, ammortizzatore di sterzo. Hai quattro sessioni.', [
        c5('Cambi un solo parametro per sessione, in ordine di impatto atteso, e lo annoti prima e dopo', 'Un parametro alla volta', 0.9, [6, 4, 9, -3], 'Ogni modifica ha una causa e un effetto leggibile.', [4, 2, 6, -1], 'La modifica non cambia nulla, e questa è già una risposta.'),
        c5('Cambi tre parametri insieme per risparmiare tempo', 'Cambi multipli', 0.4, [5, 1, -4, 3], 'Il tempo migliora, ma non sai perché.', [-2, -5, -7, 8], 'Il tempo peggiora e non sai quale modifica sia la colpevole.'),
        c5('Segui l’istinto: cambi quello che “sembra giusto” in quel momento', 'Intuizione', 0.45, [3, 2, -2, 2], 'Sei fortunato.', [-3, -3, -4, 6], 'Perdi il filo logico e torni al punto di partenza.')
      ]),
      card('a-precarico', 2, 'In frenata forte la moto si abbassa molto davanti e rimane a lungo schiacciata in ingresso. Il tecnico suggerisce di aumentare il precarico e la compressione.', [
        c5('Fai prima una misura dell’affondamento statico e dinamico, poi aumenti il precarico di poco e provi', 'Misura prima della correzione', 0.85, [5, 4, 8, -3], 'L’affondamento scende nel range corretto e la frenata è stabile.', [3, 2, 6, -1], 'Il miglioramento è piccolo ma coerente col dato.'),
        c5('Aumenti molto precarico e compressione per eliminare l’affondamento', 'Rigidità eccessiva', 0.3, [3, 1, 0, 4], 'La moto è dura ma stabile.', [-3, -7, -2, 10], 'L’anteriore perde grip e scivola in ingresso.'),
        c5('Non tocchi nulla: l’affondamento è normale in frenata', 'Normalizzazione', 0.5, [1, 0, 0, 0], 'Va bene così.', [-2, -3, 0, 3], 'Il problema persiste.')
      ]),
      card('a-sensazioni', 3, 'Al terzo giro sembra che la moto «allarghi» in uscita, ma il cronometro dice che il tempo è sceso di 0,3 secondi.', [
        c5('Confronti le sensazioni con i dati (accelerazione, angolo di piega) e ripeti per tre giri', 'Sensazioni e numeri insieme', 0.85, [5, 4, 9, -3], 'Il dato conferma che la moto è più stabile e un po’ più lenta in piega.', [3, 2, 6, -1], 'Il dato è ambiguo ma lo annoti.'),
        c5('Ti fidi solo del cronometro: se scende è meglio', 'Numero unico', 0.5, [3, -3, 2, 2], 'Il tempo è scesissimo.', [-2, -6, 0, 5], 'Il tempo era un caso: cerchi in vano.'),
        c5('Ti fidi solo delle sensazioni: se la moto allarga, non va bene', 'Sensazione unica', 0.5, [1, 3, -2, 1], 'La moto ti piace di più.', [-3, -1, -4, 4], 'Torni indietro e perdi 0,3 secondi.')
      ]),
      card('a-rumore', 4, 'I dati della centralina mostrano un picco strano di temperatura gomma a metà giornata. L’aria è cambiata, c’è vento e il sensore sembra instabile.', [
        c5('Ripeti la misura con strumento di riferimento, confronti con altri giri e scarti i valori fuori scala', 'Verificare il dato prima di usarlo', 0.85, [3, 2, 9, -3], 'Il picco era un artefatto del sensore.', [1, 1, 6, -1], 'Il dato è reale e capisci che serve intervenire.'),
        c5('Cambi pressioni e assetto in base al picco', 'Reagire al rumore', 0.3, [2, -1, -4, 5], 'Per caso migliora.', [-3, -5, -8, 9], 'Correggi un problema che non esiste e ne crei uno.'),
        c5('Ignori tutti i dati della giornata, non ti fidi più', 'Scartare tutto', 0.6, [0, 1, -3, 0], 'Torni alla sensazione pura.', [-2, 0, -5, 3], 'Perdi anche i dati utili.')
      ]),
      card('a-rapporti', 5, 'In fondo al rettilineo il limitatore interviene qualche istante prima della frenata. Il tecnico propone di allungare un rapporto, ma questo peggiora la ripresa dall’uscita della curva lenta.', [
        c5('Valuti il giro intero: calcoli quanto guadagni in fondo e quanto perdi in uscita prima di cambiare', 'Ottimizzare il giro, non un punto', 0.8, [5, 3, 8, -2], 'Scegli una soluzione di compromesso e il tempo scende.', [3, 1, 5, 0], 'Il vantaggio è piccolo ma reale.'),
        c5('Allunghi il rapporto: la velocità massima è tutto', 'Velocità massima', 0.4, [3, 0, 0, 3], 'Vinci qualche km/h.', [-3, -3, -3, 5], 'Perdi di più in uscita che quanto guadagni sul rettilineo.'),
        c5('Accorci il rapporto per migliorare la ripresa', 'Ripresa a scapito della velocità', 0.4, [3, 1, 0, 2], 'La ripresa è migliore.', [-2, -2, -2, 4], 'Il limitatore interviene ancora prima.')
      ]),
      card('a-gomma', 6, 'Domenica mattina, asfalto freddo. La moto che ieri era perfetta ora sembra pigra e la gomma non entra in temperatura. Un meccanico vicino ti propone di cambiare l’assetto per «compensare».', [
        c5('Aspetti qualche giro, controlli pressioni a freddo e temperature, e lasci stare l’assetto finché la gomma non è in finestra', 'Condizioni cambiate, non assetto cambiato', 0.85, [4, 3, 7, -4], 'Dopo quattro giri la moto torna quella di ieri.', [2, 1, 5, -2], 'Serve più tempo, ma risparmi modifiche inutili.'),
        c5('Ritocchi l’assetto per «compensare» il freddo', 'Reazione alle condizioni', 0.3, [2, 0, -4, 5], 'Funziona per un po’.', [-3, -5, -7, 9], 'A mezzogiorno la moto è inguidabile.'),
        c5('Rimetti l’assetto base: ricominci da zero', 'Reset', 0.5, [1, 1, 2, -1], 'Almeno hai un punto fisso.', [-2, -2, 0, 2], 'Perdi tempo prezioso.')
      ]),
      card('a-elettronica', 7, 'Il controllo di trazione e la mappa gas sono regolabili. Il meccanico dice che puoi «alzare» la soglia per avere più libertà in uscita.', [
        c5('Cambi un livello alla volta in una curva test e verifichi le sensazioni e il dato sullo slittamento', 'Elettronica come strumento di misura', 0.8, [5, 3, 8, -3], 'Trovi un livello che ti permette di essere veloce con margine.', [3, 1, 5, -1], 'Il livello giusto è quello di partenza.'),
        c5('Disattivi il controllo di trazione per “sentire” la moto', 'Rimuovere le protezioni', 0.3, [4, 3, 0, 6], 'Ti piace la sensazione.', [-4, -4, -3, 14], 'Highside in uscita da una curva lenta.'),
        c5('Metti il livello più alto per essere sicuro', 'Protezione massima', 0.6, [1, -1, 2, -4], 'Sei sicuro ma lento.', [-2, -3, 0, -2], 'La moto interviene troppo e senti il motore spegnersi in uscita.')
      ]),
      card('a-tempo', 8, 'Sei in ritardo sul programma: nell’ultima sessione vuoi provare due modifiche e fare un giro veloce. La luce cala e le gomme sono usurate.', [
        c5('Ne fai una sola, la più promettente, e usi gli ultimi giri per confermare con tre giri consecutivi', 'Priorità e conferma', 0.85, [5, 3, 8, -4], 'La modifica è confermata ed è un guadagno reale.', [3, 1, 5, -2], 'Non funziona, ma lo sai e te la lasci alle spalle.'),
        c5('Provi entrambe in due giri consecutivi: poi decidi', 'Doppia modifica', 0.35, [3, 0, -3, 3], 'Per caso va bene.', [-3, -4, -7, 8], 'Non sai a chi attribuire il risultato.'),
        c5('Cerchi il tempo massimo con l’assetto attuale, a gomme finite', 'Giro della gloria', 0.35, [4, 2, 0, 5], 'Il giro è veloce.', [-4, -4, -3, 15], 'Il retrotreno cede e finisci nella ghiaia.')
      ]),
      card('a-confronto', 9, 'Un collega sul box ha lo stesso modello e un tempo migliore del tuo di sei decimi. Ti passa le sue regolazioni.', [
        c5('Le guardi come ipotesi e provi una alla volta, ricordando che peso, stile e gomme sono diversi', 'Assetti altrui come ipotesi', 0.85, [5, 3, 7, -3], 'Una parte aiuta e una no: costruisci il tuo assetto.', [3, 1, 5, -1], 'Nessuna regolazione ti aiuta, ma impari.'),
        c5('Copi tutti i suoi valori', 'Copiare un assetto', 0.3, [4, -1, -2, 5], 'Funziona abbastanza.', [-4, -6, -5, 11], 'Il suo assetto non è adatto a te.'),
        c5('Non lo ascolti: ognuno ha il suo stile', 'Chiusura', 0.55, [1, 1, 0, 0], 'Resti sul tuo.', [-1, -1, -1, 1], 'Perdi un’occasione per imparare.')
      ]),
      card('a-bilancio', 10, 'Fine weekend: hai molti dati, qualche foglio di appunti e la sensazione di aver cambiato tanto. Come riassumi per il prossimo evento?', [
        c5('Scrivi un foglio d’assetto con valori finali, condizioni, sensazioni e cosa non ha funzionato', 'Documentare per riprodurre', 0.9, [4, 3, 9, -3], 'La prossima volta partirai da un riferimento solido.', [2, 2, 6, -1], 'Mancano alcuni dati, ma l’insieme è utile.'),
        c5('Ti fidi della memoria: ricorderai tutto', 'Memoria', 0.3, [1, 1, -3, 0], 'Ricordi bene.', [-2, -3, -7, 4], 'Dopo un mese hai dimenticato metà delle regolazioni.'),
        c5('Cancelli tutto e riparti da zero la prossima volta', 'Reset totale', 0.6, [-1, 0, -5, 0], 'Almeno non porti errori.', [-2, -1, -6, 1], 'Perdi tutto il lavoro.')
      ]),
      card('a-sicurezza', 5, 'Prima di salire sulla moto dopo una modifica al ritorno forcella, noti che i controlli di routine (bulloni, freni) non sono stati rifatti dopo l’intervento.', [
        c5('Rifai il controllo completo: bulloni, perni, cavo gas, freni e sterzo, con un giro lento di verifica', 'Controlli dopo ogni intervento', 0.9, [3, 3, 6, -8], 'Trovi una vite allentata e la sistemi.', [1, 1, 4, -4], 'Tutto in ordine ma sei tranquillo.'),
        c5('Salti il controllo: il meccanico è bravo', 'Fiducia cieca', 0.55, [2, 1, 0, 2], 'Nessun problema.', [-4, -5, -3, 14], 'Una vite allentata genera una vibrazione pericolosa.'),
        c5('Fai il controllo solo visivo', 'Controllo parziale', 0.6, [2, 2, 1, -2], 'Basta.', [-2, -3, -2, 7], 'Sfugge un dettaglio nascosto.')
      ])
    ]
  });

  /* ---- 6) Una stagione di campionato amatoriale ---- */
  const c6 = mk(['risultato', 'budget', 'forma', 'equilibrio']);
  SIM.register({
    id: 'moto-stagione', subject: 'moto', title: 'Una stagione di campionato amatoriale', icon: '🏆',
    intro: 'Corri in un campionato giovanile-amatoriale su otto gare. Hai un budget limitato, un lavoro o lo studio che pretendono tempo, gomme da comprare, ricambi da tenere, un piccolo sponsor locale e il rischio sempre presente di infortuni. Ogni scelta sposta risultato, budget, forma fisica e equilibrio con la vita fuori pista. La stagione migliore non è quella con più vittorie: è quella in cui arrivi all’ultima gara con la moto, il fisico e il conto in ordine.',
    vars: {
      risultato: { label: 'Risultati di campionato', start: 25, min: 0, max: 100 },
      budget: { label: 'Budget disponibile', start: 60, min: 0, max: 100 },
      forma: { label: 'Forma fisica e salute', start: 60, min: 0, max: 100 },
      equilibrio: { label: 'Studio, lavoro e serenità', start: 55, min: 0, max: 100 }
    },
    weights: { risultato: 1.2, budget: 0.7, forma: 1, equilibrio: 0.8 },
    penalties: [],
    turns: 6, utilText: '1,2 × risultato + 0,7 × budget + 1,0 × forma + 0,8 × equilibrio',
    cards: [
      card('s-programma', 1, 'Inizio stagione. Puoi iscriverti a tutte e otto le gare, a sei o a quattro. Il costo di una gara (iscrizione, trasferta, usura) è circa 600 €.', [
        c6('Scegli sei gare, tenendo due weekend liberi per recupero e imprevisti, e fissi un tetto di spesa', 'Programma con margini', 0.8, [6, 5, 4, 3], 'Hai un calendario sostenibile e spazio per riparazioni.', [4, 3, 3, 1], 'Un imprevisto ti costringe a saltare una gara, ma il piano regge.'),
        c6('Ti iscrivi a tutte e otto: più gare, più punti', 'Quantità', 0.4, [8, -8, -4, -6], 'Ottieni un buon punteggio.', [3, -14, -10, -12], 'Il budget si esaurisce a metà stagione e studio e lavoro ne risentono.'),
        c6('Ti iscrivi a sole quattro gare per risparmiare', 'Minimo indispensabile', 0.6, [2, 5, 3, 3], 'Hai margine.', [-1, 3, 2, 2], 'Il punteggio finale è troppo basso per lottare.')
      ]),
      card('s-allenamento', 1, 'Il tuo programma di allenamento: hai due ore alla settimana per la preparazione fisica oltre alle uscite in moto. Cosa fai?', [
        c6('Un mix di forza per la schiena e le gambe, mobilità e un po’ di resistenza, costante per tutta la stagione', 'Preparazione generale e costanza', 0.85, [4, 0, 8, 2], 'La resistenza cresce e la guida diventa meno faticosa.', [2, 0, 5, 0], 'I miglioramenti sono lenti ma reali.'),
        c6('Solo pista: la moto è il miglior allenamento', 'Specificità esclusiva', 0.5, [4, -5, -2, -2], 'La guida migliora ma il fisico resta indietro.', [1, -7, -6, -3], 'Dopo qualche gara la schiena cede.'),
        c6('Un programma massacrante da atleta professionista', 'Sovraccarico', 0.3, [5, 0, 4, -6], 'Hai risultati.', [-2, -2, -12, -9], 'Ti infortuni al ginocchio a metà stagione.')
      ]),
      card('s-gomme', 2, 'Per la prima gara devi decidere sulle gomme: set nuovo (180 €), set usato con 40 km residui (80 €) o uno da gara con mescola morbida (260 €, dura meno).', [
        c6('Usi un set nuovo alle gare importanti e il set intermedio per gli allenamenti', 'Gomme nuove dove contano', 0.8, [5, -2, 3, 1], 'Il grip è affidabile quando serve.', [3, -3, 2, 0], 'Il tempo è buono ma il budget cala.'),
        c6('Usi sempre quelle usate per risparmiare', 'Risparmio sulla gomma', 0.5, [1, 3, -4, 0], 'Reggono e risparmi.', [-3, 1, -8, -2], 'Perdi aderenza nei momenti critici.'),
        c6('Usi la mescola morbida ogni gara: massima prestazione', 'Mescola massima', 0.45, [6, -8, 1, 0], 'Ottieni il tempo migliore.', [2, -10, -3, 0], 'Finisci la gomma a metà gara.')
      ]),
      card('s-sponsor', 2, 'Un negozio locale ti offre 500 € di sponsorizzazione in cambio di adesivi, foto e presenza a due eventi. Sono due weekend di impegni extra.', [
        c6('Accetti, negozi i due eventi in giorni non vicini alle gare e scrivi un accordo chiaro', 'Accordo chiaro e sostenibile', 0.8, [3, 8, 0, 0], 'Il budget cresce e il rapporto è positivo.', [2, 6, -2, -3], 'Gli eventi richiedono più tempo del previsto.'),
        c6('Rifiuti: gli sponsor portano solo obblighi', 'Indipendenza', 0.7, [0, 0, 0, 1], 'Resti libero.', [0, -1, 0, 0], 'Perdi un’opportunità.'),
        c6('Accetti senza leggere i dettagli e ti impegni a più eventi', 'Impegni illimitati', 0.35, [2, 9, -2, -3], 'Tutto bene.', [-2, 3, -8, -12], 'Gli eventi ti tolgono il tempo di studio e di allenamento.')
      ]),
      card('s-studio', 3, 'A metà stagione hai due esami (o scadenze di lavoro) nella stessa settimana della gara. Il tempo per le prove libere si riduce.', [
        c6('Prepari gli esami con anticipo, riduci le prove libere e fai una gara a ritmo prudente', 'Priorità e pianificazione', 0.8, [3, 0, 2, 7], 'Superi gli esami e la gara è dignitosa.', [1, -1, 0, 4], 'La gara va meno bene, ma tutto è sotto controllo.'),
        c6('Salti gli esami: la gara è più importante', 'Gara come priorità', 0.4, [5, -3, 0, -7], 'La gara va molto bene.', [1, -5, -2, -12], 'Gli esami sono rimandati e la pressione sale.'),
        c6('Studi tutta la notte prima della gara', 'Compressione', 0.35, [3, 0, -6, 2], 'Ce la fai.', [-4, -2, -14, -6], 'Arrivi alla gara stanchissimo.')
      ]),
      card('s-ricambi', 3, 'Ti serve un kit di ricambi: leve, pedane, un set di cuscinetti e una catena di scorta. Costa 340 € in totale, ma non sai quanto ti servirà.', [
        c6('Compri i pezzi più soggetti a danni da caduta (leve, pedane) e una catena, e rinvii il resto', 'Scorta mirata', 0.8, [4, -3, 1, 2], 'Hai pronto ciò che serve quando succede.', [2, -4, 0, 1], 'Il budget cala ma sei coperto.'),
        c6('Non compri nulla: eventualmente li compri sul posto', 'Zero scorte', 0.4, [0, 4, 0, 0], 'Non succede nulla.', [-6, 1, -2, -5], 'Una caduta ti blocca per il resto del weekend.'),
        c6('Compri tutto, perfino ricambi rari', 'Scorta eccessiva', 0.6, [2, -9, 0, 1], 'Sei pronto a tutto.', [1, -10, 0, 0], 'Rimane tutto in garage.')
      ]),
      card('s-infortunio', 4, 'Dopo una scivolata leggera senti dolore alla spalla. Un amico dice che passerà; la prossima gara è fra otto giorni.', [
        c6('Ti fai visitare, segui il riposo e il ritorno graduale consigliato, e valuti se correre o saltare', 'Infortunio preso sul serio', 0.8, [-1, -3, 7, 3], 'È una contusione: guarisce e rientri più forte.', [-3, -4, 3, 0], 'Servono due settimane di stop.'),
        c6('Corri comunque con un antidolorifico', 'Mascherare il dolore', 0.3, [4, 0, -3, 0], 'Il dolore non si sente.', [-4, -4, -14, -4], 'Peggiori l’infortunio e ti fermi per un mese.'),
        c6('Ti fermi un mese per sicurezza, senza visita', 'Stop alla cieca', 0.6, [-3, 2, 2, 2], 'Ti riposi.', [-5, 2, 0, 0], 'Perdi forma e ritmo.')
      ]),
      card('s-pressione', 5, 'Sei secondo in campionato a due gare dalla fine, a 8 punti dal primo. Un errore ti costerebbe il podio.', [
        c6('Mantieni il tuo piano di gara e lavori sulla regolarità, senza cambiare approccio', 'Regolarità in campionato', 0.8, [7, 0, 2, 2], 'Chiudi il podio e sei in lotta.', [4, 0, 1, 0], 'Il primo è più forte ma il podio è tuo.'),
        c6('Spingi al massimo per recuperare i punti', 'Rischio sproporzionato', 0.3, [8, -2, 0, -2], 'Vinci e ti avvicini.', [-4, -8, -8, -4], 'Cadi alla seconda curva.'),
        c6('Ti accontenti del secondo posto e vai piano', 'Difesa passiva', 0.6, [3, 0, 1, 1], 'Mantieni il secondo posto.', [-1, 0, 0, 0], 'Perdi anche il podio.')
      ]),
      card('s-budget', 6, 'A tre gare dalla fine il budget è basso: una gomma nuova e le spese di trasferta ti porterebbero sotto zero.', [
        c6('Rivedi il programma: salti una gara minore, chiedi un contributo allo sponsor e riduci le spese extra', 'Gestione attiva del budget', 0.8, [3, 6, 2, 3], 'Trovi un equilibrio sostenibile.', [1, 4, 1, 1], 'Servono tagli dolorosi.'),
        c6('Usi la carta di credito: il campionato vale più degli interessi', 'Debito per correre', 0.4, [5, -10, 0, -4], 'Finisci bene la stagione.', [2, -14, -2, -8], 'Gli interessi e il debito pesano per mesi.'),
        c6('Rinunci a tutte le gare restanti', 'Abbandono', 0.7, [-6, 5, 1, 2], 'Chiudi il bilancio.', [-8, 4, 0, 0], 'Rimpiangi di aver mollato.')
      ]),
      card('s-compagni', 6, 'Un compagno di squadra ti chiede di aiutarlo a regolare l’assetto durante il tuo tempo di riposo. Tu hai bisogno di recuperare.', [
        c6('Gli dedichi un’ora e poi ti riposi, spiegando che hai bisogno di energie', 'Cooperazione con limiti', 0.8, [3, 0, 1, 4], 'Il rapporto migliora e tu ti riposi.', [2, 0, 0, 1], 'Fai più di un’ora ma rimani sereno.'),
        c6('Rifiuti: sei lì per correre, non per fare il meccanico', 'Chiusura', 0.65, [1, 0, 2, -2], 'Ti concentri sul tuo.', [0, 0, 1, -4], 'La squadra si raffredda.'),
        c6('Passi la serata ad aiutarlo e salti il riposo', 'Generosità senza limiti', 0.4, [2, 0, -8, 4], 'Ottimo spirito di squadra.', [0, 0, -12, 1], 'Il giorno dopo sei esausto.')
      ]),
      card('s-pioggia', 7, 'Gara sotto la pioggia. Hai una moto con un buon asciutto, ma poca esperienza sul bagnato. Puoi scegliere tra gomme da pioggia a 140 € e gomme da asciutto con ritmo ridotto.', [
        c6('Usi le gomme da pioggia, riduci il ritmo nei primi giri e studi la tenuta dell’asfalto', 'Attrezzatura giusta, ritmo adeguato', 0.8, [5, -4, 3, 1], 'Finisci la gara a punti.', [3, -5, 1, 0], 'Il tempo è lento ma sei in sicurezza.'),
        c6('Corri con le gomme da asciutto per risparmiare', 'Risparmio rischioso', 0.3, [3, 3, 0, 0], 'La pioggia cala presto.', [-4, -2, -8, -5], 'La moto scivola in ogni curva.'),
        c6('Salti la gara: non vale il rischio', 'Rinuncia alla gara', 0.6, [-4, 3, 2, 1], 'Eviti rischi.', [-6, 2, 1, 0], 'Perdi punti pesanti.')
      ]),
      card('s-videoanalisi', 8, 'Hai a disposizione tre mesi di video e dati della stagione. Un tecnico può aiutarti a fare un’analisi completa per 150 €.', [
        c6('Fai l’analisi, scegli due punti deboli e li trasformi in un piano di lavoro invernale', 'Analisi e piano', 0.85, [5, -2, 2, 2], 'Hai un percorso chiaro per la stagione successiva.', [3, -3, 1, 1], 'L’analisi mostra poche novità, ma ti conferma il metodo.'),
        c6('Riguardi i video da solo, senza confrontarli con i dati', 'Analisi incompleta', 0.55, [2, 1, 0, 0], 'Capisci qualcosa.', [0, 1, 0, -1], 'Non cambia nulla.'),
        c6('Cambi moto per ripartire da zero', 'Soluzione costosa', 0.3, [3, -12, 0, 0], 'La nuova moto è un’altra storia.', [-2, -14, -2, -2], 'Spendi molto e peggiori.')
      ]),
      card('s-finale', 9, 'Ultima gara: sei quarto in campionato, la moto è in ordine, la spalla è a posto e il budget è quasi finito. C’è un podio a 6 punti.', [
        c6('Fai una gara pulita con un obiettivo di processo: partenza regolare, ritmo costante, niente rischi inutili', 'Processo rispetto al risultato', 0.8, [6, 0, 1, 3], 'Chiudi in zona podio.', [3, 0, 1, 1], 'Arrivi quarto con una gara matura.'),
        c6('Attacchi dal primo giro: è l’ultima occasione', 'Tutto o niente', 0.35, [8, -2, -2, -2], 'Vinci la gara.', [-4, -8, -8, -6], 'Cadi e rompi la moto.'),
        c6('Salti l’ultima gara per evitare spese', 'Rinuncia', 0.55, [-4, 3, 1, 1], 'Risparmi.', [-5, 3, 0, 0], 'Perdi il quarto posto.')
      ]),
      card('s-bilancio', 10, 'Fine stagione: valuti cosa è andato e cosa no. Hai imparato molto, ti sei stancato, hai speso più del previsto. Il prossimo anno?', [
        c6('Fai un bilancio scritto (budget, risultati, infortuni, studio), fissi due obiettivi realistici e un tetto di spesa', 'Bilancio e obiettivi realistici', 0.85, [5, 4, 3, 5], 'Hai un piano sostenibile per l’anno prossimo.', [3, 3, 2, 3], 'Il piano è prudente ma ti lascia spazio per crescere.'),
        c6('Decidi sull’onda dell’entusiasmo: più gare, moto più potente', 'Escalation', 0.35, [6, -10, -4, -8], 'Parti con grande entusiasmo.', [1, -14, -8, -12], 'Il budget non regge.'),
        c6('Smetti di correre: troppo stress', 'Uscita dal campionato', 0.55, [-6, 4, 2, 4], 'Ti riposi.', [-8, 3, 1, 2], 'Ti manca la pista.')
      ])
    ]
  });
})(window.ST = window.ST || {});
