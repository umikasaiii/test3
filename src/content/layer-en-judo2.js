(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);

  A('jud-th-storia-del-judo', {
    title: { t: 'The history of judo', it: 'Storia del judo: dal jujutsu alle Olimpiadi' },
    sum: [
      { t: 'Before judo, Japan had many traditional schools, called ⟦ryu⟧, of ⟦jujutsu⟧.', it: 'Prima del judo il Giappone aveva molte scuole tradizionali, dette ryu, di jujutsu.' },
      { t: '⟦Jigoro Kano⟧ selected and reorganised their techniques, and founded the ⟦Kodokan⟧ in Tokyo in 1882.', it: 'Jigoro Kano ne selezionò e riordinò le tecniche, e fondò il Kodokan a Tokyo nel 1882.' },
      { t: 'He introduced ⟦randori⟧, free but regulated practice, next to the preset forms.', it: 'Introdusse il randori, pratica libera ma regolata, accanto alle forme preordinate.' },
      { t: 'The ⟦IJF⟧, the international federation, was founded in 1951.', it: 'La IJF, la federazione internazionale, fu fondata nel 1951.' },
      { t: 'Judo became an ⟦Olympic⟧ sport at Tokyo in 1964, with men’s weight categories.', it: 'Il judo divenne sport olimpico a Tokyo nel 1964, con le categorie di peso maschili.' },
      { t: 'Women’s judo became a full Olympic discipline at Barcelona in 1992, after a demonstration in 1988.', it: 'Il judo femminile divenne disciplina olimpica a pieno titolo a Barcellona nel 1992, dopo una dimostrazione nel 1988.' },
      { t: 'As judo spread, local programmes adapted, so clubs can differ from each other.', it: 'Diffondendosi il judo, i programmi locali si adattarono, quindi i club possono differire.' }
    ],
    gloss: [
      { w: 'ryu', it: 'scuola tradizionale' },
      { w: 'jujutsu', it: 'arti di combattimento tradizionali giapponesi' },
      { w: 'Jigoro Kano', it: 'fondatore del judo' },
      { w: 'Kodokan', it: 'scuola fondata da Kano a Tokyo' },
      { w: 'randori', it: 'allenamento libero regolato' },
      { w: 'IJF', it: 'Federazione Internazionale di Judo' },
      { w: 'Olympic', it: 'olimpico' },
      { w: 'founded', it: 'fondò, fondata' },
      { w: 'federation', it: 'federazione' }
    ]
  });

  A('jud-th-sistema-dei-gradi', {
    title: { t: 'Kyu and dan grades', it: 'Il sistema dei gradi: kyu e dan' },
    sum: [
      { t: 'Judo has two families of grades: ⟦kyu⟧ for students and ⟦dan⟧ for black belts.', it: 'Il judo ha due famiglie di gradi: kyu per gli allievi e dan per le cinture nere.' },
      { t: 'The numbers run in opposite directions: kyu numbers go down towards the black belt, dan numbers go up.', it: 'I numeri vanno in direzioni opposte: i kyu scendono verso la cintura nera, i dan salgono.' },
      { t: '⟦Shodan⟧ means first dan, and it is a starting point, not an arrival.', it: 'Shodan significa primo dan, ed è un punto di partenza, non di arrivo.' },
      { t: 'The belt is called ⟦obi⟧; the colours of the kyu belts vary by country and federation.', it: 'La cintura si chiama obi; i colori delle cinture dei kyu variano per paese e federazione.' },
      { t: 'A ⟦grade⟧ is not a measure of strength: it reflects knowledge, experience and behaviour.', it: 'Un grado non misura la forza: riflette conoscenze, esperienza e comportamento.' },
      { t: 'Requirements are set by each ⟦federation⟧, so never compare belts between countries as one scale.', it: 'I requisiti li decide ogni federazione, quindi non confrontare le cinture tra paesi come una scala unica.' },
      { t: 'The app has no grades: levels L0 to L5 are study levels, and real grades need an ⟦examiner⟧.', it: 'L’app non ha gradi: i livelli da L0 a L5 sono di studio, e i gradi veri richiedono un esaminatore.' }
    ],
    gloss: [
      { w: 'kyu', it: 'grado degli allievi' },
      { w: 'dan', it: 'grado delle cinture nere' },
      { w: 'shodan', it: 'primo dan' },
      { w: 'obi', it: 'cintura' },
      { w: 'examiner', it: 'esaminatore' },
      { w: 'black belt', it: 'cintura nera' },
      { w: 'grade', it: 'grado' },
      { w: 'federation', it: 'federazione' },
      { w: 'belt', it: 'cintura' }
    ]
  });

  A('jud-th-cultura-del-dojo', {
    title: { t: 'Dojo culture', it: 'Cultura del dojo: rispetto, tatami, abbigliamento' },
    sum: [
      { t: 'The ⟦dojo⟧ is the place where you study the way, and its rules protect everyone.', it: 'Il dojo è il luogo dove si studia la via, e le sue regole proteggono tutti.' },
      { t: '⟦Ritsu-rei⟧ is the standing bow and ⟦za-rei⟧ is the kneeling bow.', it: 'Il ritsu-rei è l’inchino in piedi e lo za-rei è l’inchino in ginocchio.' },
      { t: 'You step onto the ⟦tatami⟧ without shoes, and you keep it clean.', it: 'Sali sul tatami senza scarpe e lo tieni pulito.' },
      { t: 'The ⟦judogi⟧ has three parts: ⟦uwagi⟧, zubon and obi, and it must be clean.', it: 'Il judogi ha tre parti: uwagi, zubon e obi, e deve essere pulito.' },
      { t: 'Respect means listening, helping beginners and stopping at once when a partner signals.', it: 'Rispetto significa ascoltare, aiutare i principianti e fermarsi subito quando il compagno segnala.' },
      { t: 'Common injuries involve fingers, wrists, shoulders, knees and neck, and ⟦warm-up⟧ and good falls reduce them.', it: 'Gli infortuni comuni riguardano dita, polsi, spalle, ginocchia e collo, e riscaldamento e cadute corrette li riducono.' },
      { t: 'After a blow to the head or sharp pain, you stop and see a doctor if symptoms last.', it: 'Dopo un colpo alla testa o un dolore acuto ti fermi e vai dal medico se i sintomi durano.' }
    ],
    gloss: [
      { w: 'dojo', it: 'luogo di studio' },
      { w: 'ritsu-rei', it: 'inchino in piedi' },
      { w: 'za-rei', it: 'inchino in ginocchio' },
      { w: 'tatami', it: 'superficie di lavoro' },
      { w: 'judogi', it: 'divisa del judo' },
      { w: 'uwagi', it: 'giacca' },
      { w: 'warm-up', it: 'riscaldamento' },
      { w: 'respect', it: 'rispetto' },
      { w: 'wrist', it: 'polso' }
    ]
  });

  A('jud-th-preparazione-fisica', {
    title: { t: 'Physical preparation for judo', it: 'Preparazione fisica per il judo' },
    sum: [
      { t: 'Judo asks for ⟦grip strength⟧, a stable ⟦core⟧, mobility, balance and the ability to fall safely.', it: 'Il judo chiede forza di presa, un core stabile, mobilità, equilibrio e la capacità di cadere in sicurezza.' },
      { t: 'Physical work supports technique, and it never replaces it.', it: 'Il lavoro fisico supporta la tecnica e non la sostituisce mai.' },
      { t: 'Hanging from a bar and carrying weights train your grip, and you change one thing at a time.', it: 'Appendersi a una sbarra e trasportare pesi allenano la presa, e cambi una cosa per volta.' },
      { t: 'The ⟦plank⟧, the ⟦dead bug⟧ and the ⟦bird dog⟧ train the core, with quality before duration.', it: 'Plank, dead bug e bird dog allenano il core, con la qualità prima della durata.' },
      { t: 'Move your neck slowly, and never force ⟦mobility⟧ work.', it: 'Muovi il collo lentamente e non forzare mai il lavoro di mobilità.' },
      { t: 'You improve during ⟦recovery⟧: sleep, rest days, food and water matter.', it: 'Migliori durante il recupero: contano sonno, giorni di riposo, cibo e acqua.' },
      { t: 'Persistent tiredness or joint pain means you reduce the load, and no programme guarantees results.', it: 'Stanchezza persistente o dolori articolari significano ridurre il carico, e nessun programma garantisce risultati.' }
    ],
    gloss: [
      { w: 'grip strength', it: 'forza di presa' },
      { w: 'core', it: 'tronco, addome e lombari' },
      { w: 'mobility', it: 'mobilità' },
      { w: 'recovery', it: 'recupero' },
      { w: 'plank', it: 'esercizio di tenuta del tronco' },
      { w: 'dead bug', it: 'esercizio di controllo del core da supini' },
      { w: 'bird dog', it: 'esercizio da quadrupedia' },
      { w: 'overload', it: 'sovraccarico' },
      { w: 'sleep', it: 'sonno' }
    ]
  });

  A('jud-th-albero-delle-tecniche', {
    title: { t: 'The tree of techniques', it: 'L’albero delle tecniche e i limiti per età' },
    sum: [
      { t: '⟦Waza⟧ means technique, and the main branches are ⟦nage-waza⟧, ⟦katame-waza⟧ and atemi-waza.', it: 'Waza significa tecnica, e i rami principali sono nage-waza, katame-waza e atemi-waza.' },
      { t: 'Nage-waza are throws, split into standing techniques and sacrifice techniques.', it: 'Le nage-waza sono proiezioni, divise in tecniche in piedi e tecniche di sacrificio.' },
      { t: 'Katame-waza are controls: ⟦osaekomi-waza⟧ are holds, ⟦shime-waza⟧ are chokes and kansetsu-waza are joint locks.', it: 'Le katame-waza sono controlli: osaekomi-waza immobilizzazioni, shime-waza strangolamenti e kansetsu-waza leve.' },
      { t: 'Sport judo allows joint locks only on the elbow.', it: 'Il judo sportivo ammette le leve solo al gomito.' },
      { t: 'The ⟦tap⟧ is the signal of surrender, and you let go at once.', it: 'Il tap è il segnale di resa, e molli subito la presa.' },
      { t: 'Youth competitions limit chokes and locks because growing bodies are more vulnerable.', it: 'Le gare giovanili limitano strangolamenti e leve perché i corpi in crescita sono più vulnerabili.' },
      { t: 'The ⟦tori⟧ performs a technique and the ⟦uke⟧ receives it, and the rules vary with age and country.', it: 'Il tori esegue la tecnica e l’uke la riceve, e le regole variano con età e paese.' }
    ],
    gloss: [
      { w: 'waza', it: 'tecnica' },
      { w: 'nage-waza', it: 'proiezioni' },
      { w: 'katame-waza', it: 'tecniche di controllo' },
      { w: 'osaekomi-waza', it: 'immobilizzazioni' },
      { w: 'shime-waza', it: 'strangolamenti' },
      { w: 'tap', it: 'segnale di resa' },
      { w: 'tori', it: 'chi esegue la tecnica' },
      { w: 'uke', it: 'chi la riceve' },
      { w: 'elbow', it: 'gomito' }
    ]
  });

  A('jud-th-gokyo-no-waza', {
    title: { t: 'The Gokyo no waza', it: 'Il Gokyo no waza: i cinque gruppi' },
    sum: [
      { t: 'The ⟦Gokyo no waza⟧ is the Kodokan list of fundamental throws, dated 1895 and revised in 1920.', it: 'Il Gokyo no waza è l’elenco Kodokan delle proiezioni fondamentali, del 1895 e rivisto nel 1920.' },
      { t: 'It has five groups of eight techniques, so forty in all.', it: 'Ha cinque gruppi da otto tecniche, quindi quaranta in tutto.' },
      { t: '⟦Dai-ikkyo⟧ includes O-soto-gari, O-goshi, O-uchi-gari and Seoi-nage.', it: 'Il Dai-ikkyo comprende O-soto-gari, O-goshi, O-uchi-gari e Seoi-nage.' },
      { t: '⟦Dai-nikyo⟧ includes Ko-soto-gari, Koshi-guruma, Tai-otoshi, Harai-goshi and Uchi-mata.', it: 'Il Dai-nikyo comprende Ko-soto-gari, Koshi-guruma, Tai-otoshi, Harai-goshi e Uchi-mata.' },
      { t: 'Sacrifice techniques such as ⟦Tomoe-nage⟧ appear from the third group, ⟦Dai-sankyo⟧.', it: 'Le tecniche di sacrificio, come Tomoe-nage, compaiono dal terzo gruppo, il Dai-sankyo.' },
      { t: 'The fourth and fifth groups, ⟦Dai-yonkyo⟧ and Dai-gokyo, hold the more advanced throws.', it: 'Il quarto e il quinto gruppo, Dai-yonkyo e Dai-gokyo, contengono le proiezioni più avanzate.' },
      { t: 'The order is didactic, so a famous throw like ⟦Uchi-mata⟧ is not necessarily easy.', it: 'L’ordine è didattico, quindi una proiezione famosa come Uchi-mata non è per forza facile.' }
    ],
    gloss: [
      { w: 'Gokyo no waza', it: 'elenco Kodokan delle quaranta proiezioni' },
      { w: 'Dai-ikkyo', it: 'primo gruppo' },
      { w: 'Dai-nikyo', it: 'secondo gruppo' },
      { w: 'Dai-sankyo', it: 'terzo gruppo' },
      { w: 'Dai-yonkyo', it: 'quarto gruppo' },
      { w: 'Tomoe-nage', it: 'proiezione di sacrificio all’indietro' },
      { w: 'Uchi-mata', it: 'proiezione con la coscia interna' },
      { w: 'throw', it: 'proiezione' },
      { w: 'group', it: 'gruppo' }
    ]
  });

  A('jud-th-ne-waza-principi', {
    title: { t: 'Ground work: ne-waza', it: 'Ne-waza: principi del lavoro a terra' },
    sum: [
      { t: '⟦Ne-waza⟧ means ground techniques, where position, weight and patience matter more than speed.', it: 'Ne-waza significa tecniche a terra, dove posizione, peso e pazienza contano più della velocità.' },
      { t: 'Every hold rests on three principles: contact, weight and a wide ⟦base⟧.', it: 'Ogni immobilizzazione si basa su tre principi: contatto, peso e base larga.' },
      { t: '⟦Kesa-gatame⟧ is the scarf hold, with head and one arm controlled from the side.', it: 'Il kesa-gatame è il controllo a sciarpa, con testa e un braccio controllati di lato.' },
      { t: '⟦Yoko-shiho-gatame⟧ is the side four-corner hold, and ⟦kami-shiho-gatame⟧ is the same hold from above the head.', it: 'Lo yoko-shiho-gatame è il controllo laterale ai quattro lati, e il kami-shiho-gatame è lo stesso dalla testa.' },
      { t: '⟦Tate-shiho-gatame⟧ is the mounted hold, with the body weight above the chest.', it: 'Il tate-shiho-gatame è il controllo a cavalcioni, con il peso del corpo sul torace.' },
      { t: 'Alone you can train the ⟦bridge⟧ and the ⟦shrimp⟧, slowly, without loading the neck.', it: 'Da solo puoi allenare il bridge e lo shrimp, lentamente, senza caricare il collo.' },
      { t: 'Chokes and joint locks are not taught in the app, because they need a partner and an instructor.', it: 'Strangolamenti e leve non sono insegnati nell’app, perché richiedono un partner e un istruttore.' }
    ],
    gloss: [
      { w: 'ne-waza', it: 'lavoro a terra' },
      { w: 'kesa-gatame', it: 'controllo a sciarpa' },
      { w: 'yoko-shiho-gatame', it: 'controllo laterale ai quattro lati' },
      { w: 'kami-shiho-gatame', it: 'controllo dalla testa' },
      { w: 'tate-shiho-gatame', it: 'controllo a cavalcioni' },
      { w: 'bridge', it: 'ponte' },
      { w: 'shrimp', it: 'spostamento dell’anca, detto anche hip escape' },
      { w: 'base', it: 'base di appoggio' },
      { w: 'hold', it: 'immobilizzazione' }
    ]
  });

  A('jud-th-regole-di-gara', {
    title: { t: 'Contest rules (IJF)', it: 'Regole di gara e arbitraggio (IJF)' },
    sum: [
      { t: 'IJF rules change, so always check the current version of the refereeing rules.', it: 'Le regole IJF cambiano, quindi verifica sempre la versione corrente del regolamento.' },
      { t: 'Senior bouts last 4 minutes of actual time, and the clock stops at each ⟦mate⟧.', it: 'Gli incontri senior durano 4 minuti di tempo effettivo, e il cronometro si ferma a ogni mate.' },
      { t: '⟦Ippon⟧ ends the bout: a throw with force and speed, largely on the back, or a hold of 20 seconds.', it: 'L’ippon chiude l’incontro: una proiezione con forza e velocità, in gran parte sulla schiena, o un controllo di 20 secondi.' },
      { t: '⟦Waza-ari⟧ is a lesser score, including a hold of 10 to under 20 seconds.', it: 'Il waza-ari è un punteggio minore, compreso un controllo da 10 a meno di 20 secondi.' },
      { t: '⟦Shido⟧ is a light penalty, and ⟦hansoku-make⟧ is disqualification from the bout.', it: 'Lo shido è una penalità lieve, e l’hansoku-make è la squalifica dall’incontro.' },
      { t: 'If the score is level, the ⟦golden score⟧ has no time limit, and the first score wins.', it: 'Se il punteggio è pari, il golden score non ha limite di tempo, e vince il primo punteggio.' },
      { t: 'Learn the referee’s commands: hajime starts, mate stops, and sore-made ends the bout.', it: 'Impara i comandi dell’arbitro: hajime inizia, mate ferma e sore-made termina l’incontro.' }
    ],
    gloss: [
      { w: 'ippon', it: 'punto pieno' },
      { w: 'waza-ari', it: 'punteggio parziale' },
      { w: 'shido', it: 'penalità lieve' },
      { w: 'hansoku-make', it: 'squalifica dall’incontro' },
      { w: 'golden score', it: 'spareggio senza limite di tempo' },
      { w: 'mate', it: 'fermi' },
      { w: 'hajime', it: 'inizio' },
      { w: 'referee', it: 'arbitro' },
      { w: 'penalty', it: 'penalità' }
    ]
  });
})(window.ST = window.ST || {});
