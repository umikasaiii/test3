/* SkillTree — pensiero critico (fallacie, bias, valutazione delle fonti) e test di transfer in tre categorie.
   Ogni elemento ha due forme: la forma 0 si allena, la forma 1 è riservata ai test di transfer vicino (mai usata in allenamento). */
(function (ST) {
  'use strict';
  const U = ST.util, MN = ST.mental, G = MN.gen, CR = MN.crit = {};
  const F = { // nome, [testo forma 0, testo forma 1], spiegazione
    ad_hominem: ['Attacco alla persona', ['Non ascoltare la sua proposta sul budget: è uno che ha cambiato lavoro tre volte.', 'La sua critica al metodo è da scartare: ha una condanna per guida in stato di ebbrezza.'], 'Si respinge l’argomento attaccando chi lo sostiene, non il contenuto.'],
    dilemma: ['Falso dilemma', ['O ti iscrivi a questa palestra oggi, o rinunci per sempre a stare in forma.', 'Dobbiamo comprare questo software o chiudere l’azienda: non esistono altre strade.'], 'Presenta solo due opzioni quando ne esistono altre.'],
    pendio: ['Pendio scivoloso', ['Se oggi salti un allenamento, domani ne salterai due e tra un mese avrai smesso di allenarti.', 'Se permettiamo una proroga, tutti chiederanno proroghe e nessuna scadenza avrà più senso.'], 'Si afferma una catena di conseguenze inevitabili senza prove di ogni passaggio.'],
    autorita: ['Appello all’autorità', ['Lo dice un famoso attore, quindi questo integratore funziona.', 'Un noto imprenditore garantisce che questa dieta è la migliore, quindi lo è.'], 'Un’autorità fuori dal proprio campo non è una prova.'],
    postHoc: ['Post hoc (dopo, quindi a causa di)', ['Ho cambiato scarpe e ho battuto il mio record: le scarpe mi hanno fatto correre più forte.', 'Dopo aver adottato il nuovo orario, le vendite sono salite: è merito dell’orario.'], 'La successione temporale non dimostra la causa.'],
    generalizzazione: ['Generalizzazione affrettata', ['Ho incontrato due turisti scortesi: i turisti di quel Paese sono tutti maleducati.', 'Il primo ordine ha avuto un ritardo: questo fornitore consegna sempre in ritardo.'], 'Si trae una regola generale da pochissimi casi.'],
    pagliaio: ['Uomo di paglia', ['Lui vuole regole sul traffico; quindi vuole togliere a tutti la libertà di muoversi.', 'Se proponi di ridurre gli straordinari, vuoi che l’azienda smetta di lavorare.'], 'Si deforma la tesi dell’altro per attaccare una versione più debole.'],
    circolare: ['Petizione di principio', ['Questo libro è affidabile perché lo dice il suo autore, che è sempre affidabile.', 'Il regolamento è giusto perché è scritto nel regolamento.'], 'La conclusione è già contenuta nella premessa.']
  };
  const B = {
    conferma: ['Bias di conferma', ['Cerchi solo articoli che dicono che il tuo programma di allenamento è il migliore e ignori quelli contrari.', 'Dopo aver deciso di comprare un’auto, leggi soltanto le recensioni positive di quel modello.'], 'Si cercano e si ricordano solo le informazioni che confermano ciò che già si crede.'],
    ancoraggio: ['Ancoraggio', ['Il venditore chiede 900 €, poi «scende» a 700 €: ti sembra un affare anche se vale 500 €.', 'Vedi prima un prezzo di listino di 2 000 € e poi uno sconto a 1 400 €: giudichi il secondo prezzo conveniente solo per il confronto.'], 'Il primo numero visto influenza la stima successiva.'],
    disponibilita: ['Euristica della disponibilità', ['Dopo un servizio sugli squali pensi che nuotare al mare sia pericolosissimo.', 'Dopo aver letto di un furto nel tuo quartiere, stimi i furti come molto più frequenti di quanto indicano le statistiche.'], 'Si giudica la frequenza dagli esempi che vengono in mente più facilmente.'],
    affondato: ['Costo affondato', ['Hai pagato il biglietto del film, ma è noioso: resti fino alla fine «per non sprecare i soldi».', 'Hai già speso molto per un corso che non ti serve più: continui per non buttare ciò che hai pagato.'], 'Si decide in base a costi già sostenuti e non recuperabili.'],
    alone: ['Effetto alone', ['Un collega è molto simpatico, quindi pensi che sia anche competente nel suo lavoro.', 'Un atleta è bellissimo da vedere: lo ritieni anche un ottimo stratega.'], 'Un tratto positivo influenza il giudizio su altri tratti non collegati.'],
    sopravvivenza: ['Errore del sopravvissuto', ['Studi solo i fondatori di imprese famose per capire come avere successo, ignorando quelle fallite.', 'Giudichi un metodo di studio efficace perché lo usano i primi della classe, senza contare chi lo ha usato ed è andato male.'], 'Si guarda solo chi ce l’ha fatta, ignorando i casi che non vediamo.']
  };
  const S = [ // valutazione fonti: affermazione scenario → giudizio migliore
    [['Un post anonimo dice che un farmaco «cura tutto» e cita «studi» senza dare riferimenti.', 'Un video promette di aumentare la massa muscolare del 30% in una settimana e rimanda a «una ricerca» senza titolo né autori.'], 'Non verificabile: mancano autori e riferimenti', ['Affidabile: parla di studi', 'Affidabile: è molto condiviso', 'Falso: i post anonimi sono sempre falsi'], 'L’assenza di fonti identificabili rende l’affermazione non verificabile (non automaticamente falsa).'],
    [['Un sito vende un integratore e pubblica «recensioni» solo positive.', 'Un negozio online mostra solo valutazioni a cinque stelle e nessuna recensione critica.'], 'Fonte con conflitto d’interesse: da verificare altrove', ['Affidabile: ci sono molte recensioni', 'Affidabile: tutti sono soddisfatti', 'Inutile: le recensioni non servono mai'], 'Chi vende ha interesse a mostrare solo il lato favorevole.'],
    [['Uno studio su 12 persone trova un effetto, mai replicato, e un titolo lo presenta come «la prova definitiva».', 'Un piccolo studio con 15 partecipanti mostra un risultato e nessuno ha ancora provato a ripeterlo, ma la notizia dice «è dimostrato».'], 'Evidenza preliminare: campione piccolo e senza replica', ['Prova definitiva', 'Dato inutile perché sono pochi', 'Falso perché è un titolo'], 'Un campione piccolo e non replicato è un indizio, non una prova definitiva.'],
    [['Una meta-analisi di molti studi controllati randomizzati trova un effetto piccolo ma coerente, con limiti dichiarati.', 'Una revisione di numerosi studi controllati con metodi dichiarati trova un effetto modesto e coerente tra gli studi.'], 'Evidenza più solida, con effetto modesto da interpretare con prudenza', ['Evidenza debole perché l’effetto è piccolo', 'Prova che l’effetto sia enorme', 'Da ignorare perché è una sintesi'], 'Più studi controllati e coerenti pesano più di un singolo studio; «piccolo» è la dimensione dell’effetto, non la qualità della prova.']
  ];
  const opts = (rng, right, pool) => U.shuffle([right].concat(U.sample(pool.filter(x => x !== right), 3, rng)), rng);
  const make = (type, bank, form, rng, lab) => {
    const keys = Object.keys(bank), k = U.pick(keys, rng), names = keys.map(x => bank[x][0]);
    const o = opts(rng, bank[k][0], names);
    return { t: 'mc', mtype: type, q: lab + ' «' + bank[k][1][form] + '»', o, a: o.indexOf(bank[k][0]), why: bank[k][0] + ': ' + bank[k][2], form, key: k };
  };
  CR.fallacy = (form, rng) => make('fallacy', F, form, rng, 'Quale errore di ragionamento contiene?');
  CR.bias = (form, rng) => make('bias', B, form, rng, 'Quale bias cognitivo è all’opera?');
  CR.source = (form, rng) => { const k = Math.floor(rng() * S.length), s = S[k], o = U.shuffle([s[1]].concat(s[2]), rng); return { t: 'mc', mtype: 'source', q: 'Come valuti questa fonte? «' + s[0][form] + '»', o, a: o.indexOf(s[1]), why: s[3], form, key: 'S' + k }; };
  CR.TYPES = ['fallacy', 'bias', 'source'];
  CR.LABEL = { fallacy: 'Pensiero critico · fallacie', bias: 'Pensiero critico · bias cognitivi', source: 'Pensiero critico · valutare le fonti' };
  CR.counts = { fallacy: Object.keys(F).length, bias: Object.keys(B).length, source: S.length };
  /* allenamento: sempre forma 0 */
  CR.TYPES.forEach(t => { G[t] = (lv, rng) => CR[t](0, rng || U.rand); MN.LABEL[t] = CR.LABEL[t]; MN.EST[t] = 16; MN.TYPES.push(t); });
  MN.DOMAINS[4].types = MN.DOMAINS[4].types.concat(['source']);          // venerdì: strategia e predizione
  MN.DOMAINS[5].types = MN.DOMAINS[5].types.concat(['fallacy', 'bias']);  // sabato: enigmi e ragionamento
  MN.WEEK = MN.DOMAINS.map(d => d.types.slice(0, 3));

  /* ---------------- Memoria prospettica: ricordare ed eseguire regole fornite prima ---------------- */
  const ri = (rng, a, b) => a + Math.floor(rng() * (b - a + 1));
  G.prosp = (lv, rng) => {
    rng = rng || U.rand; const nSeq = Math.min(8, 3 + Math.ceil(lv / 3)), harder = lv >= 8;
    const rules = harder ? [['multiplo di 5', 'C', n => n % 5 === 0], ['pari', 'P', n => n % 2 === 0], ['maggiore di 20', 'G', n => n > 20]] : [['multiplo di 5', 'C', n => n % 5 === 0], ['pari', 'P', n => n % 2 === 0]];
    const seq = Array.from({ length: nSeq }, () => ri(rng, 2, harder ? 40 : 20));
    const code = n => { for (const r of rules) if (r[2](n)) return r[1]; return 'N'; }; // le regole sono in ordine di priorità
    const correct = seq.map(code).join(' ');
    const wrongs = new Set(); let guard = 0;
    while (wrongs.size < 3 && guard++ < 50) { const w = seq.map((n, i) => rng() < 0.3 ? U.pick(['C', 'P', 'G', 'N'], rng) : code(n)).join(' '); if (w !== correct) wrongs.add(w); }
    const o = U.shuffle([correct].concat(Array.from(wrongs)), rng); while (o.length < 4) o.push(correct + ' N');
    const show = 'REGOLE (in ordine di priorità): ' + rules.map(r => 'se il numero è ' + r[0] + ' → ' + r[1]).join('; ') + '; altrimenti → N.';
    return { t: 'flash', mtype: 'prosp', show, ms: 4000 + rules.length * 1500, q: 'Applica le regole che hai appena visto alla sequenza ' + seq.join(', ') + '. Quale codifica è corretta?', o, a: o.indexOf(correct), why: seq.map((n, i) => n + '→' + code(n)).join(', ') + '. Hai dovuto tenere in mente le regole e la loro priorità mentre eseguivi il compito.', timed: 45 };
  };
  /* ---------------- Metacognizione: scelta delle strategie di studio e analisi dell'errore ---------------- */
  const META = [
    ['Devi memorizzare 40 termini per un esame tra tre settimane. Quale strategia ha le migliori prove di efficacia?', 'Richiamo attivo ripetuto (provare a ricordare senza guardare) distribuito nel tempo', ['Rileggere più volte gli appunti l’ultima sera', 'Sottolineare tutto con colori diversi', 'Studiare solo quando ci si sente motivati'], 'Richiamo attivo e distribuzione nel tempo producono ricordo più duraturo di rilettura e sottolineatura.'],
    ['Hai studiato un capitolo e «lo riconosci» quando lo rileggi. Perché non è un buon segnale di aver imparato?', 'La familiarità si confonde con la capacità di richiamare senza aiuti', ['Perché i capitoli lunghi non si possono imparare', 'Perché riconoscere è identico a ricordare', 'Perché serve studiare solo con musica'], 'Riconoscere è più facile che richiamare: la sensazione di sapere può essere ingannevole (illusione di competenza).'],
    ['Hai sbagliato un esercizio. Quale analisi dell’errore è più utile?', 'Distinguere tra svista di calcolo, lacuna concettuale e fretta, e correggere in modo diverso ciascuna', ['Concludere che non sei portato', 'Ripetere subito lo stesso esercizio guardando la soluzione', 'Ignorarlo perché è uno solo'], 'Cause diverse richiedono rimedi diversi: controllo dei passaggi, ripasso del concetto, gestione del tempo.'],
    ['Prima di un test sei molto sicuro di aver capito tutto, ma non hai mai provato un esercizio senza appunti. Che cosa fai?', 'Provi alcuni esercizi senza appunti per verificare la tua stima', ['Ti fidi della sensazione', 'Rileggi gli appunti un’altra volta', 'Studi più ore senza verificare'], 'La verifica con prove reali calibra la tua fiducia.'],
    ['Studi due argomenti molto simili e li confondi. Quale pratica aiuta a distinguerli?', 'Alternare esercizi dei due argomenti e confrontare esplicitamente le differenze', ['Studiare prima tutto uno e poi tutto l’altro senza confronti', 'Studiarli solo in un unico giorno', 'Evitare di confrontarli'], 'L’alternanza (interleaving) e il confronto aiutano a scegliere la strategia giusta.'],
    ['Hai poco tempo: tre argomenti, di cui uno che padroneggi bene. Come distribuisci il tempo?', 'Più tempo sugli argomenti deboli, con un breve richiamo di quello solido', ['Tutto il tempo su quello che sai già, perché è piacevole', 'Uguale tempo a tutti per principio', 'Nessuna verifica'], 'Il rendimento è maggiore dove ci sono più lacune, ma senza abbandonare del tutto il resto.'],
    ['Dopo una spiegazione ti sembra tutto chiaro. Come verifichi di aver capito davvero?', 'Lo spieghi a parole tue senza guardare, e rilevi dove ti blocchi', ['Rileggi la spiegazione', 'Annuisci mentre la rileggi', 'Aspetti di ricordarla da solo'], 'Spiegare senza guardare rivela le lacune che la rilettura nasconde.'],
    ['Ti accorgi di sbagliare di più alla fine di una sessione lunga. Quale decisione è più sensata?', 'Accorciare le sessioni o inserire pause, e rivedere ciò che hai sbagliato in un altro momento', ['Allungare ancora le sessioni', 'Ignorare il calo', 'Concludere che sei poco intelligente'], 'La fatica riduce la prestazione: si adatta il metodo, non si trae un giudizio su di sé.']
  ];
  G.meta = (lv, rng) => { rng = rng || U.rand; const m = U.pick(META, rng), o = U.shuffle([m[1]].concat(m[2]), rng); return { t: 'mc', mtype: 'meta', q: m[0], o, a: o.indexOf(m[1]), why: m[3] }; };
  CR.counts.meta = META.length;
  ['prosp', 'meta'].forEach(t => { MN.EST[t] = t === 'prosp' ? 22 : 16; MN.TYPES.push(t); });
  MN.LABEL.prosp = 'Memoria prospettica · regole da ricordare'; MN.LABEL.meta = 'Metacognizione · strategie di studio';
  MN.DOMAINS[1].types = MN.DOMAINS[1].types.concat(['prosp']);  // martedì: memoria
  MN.DOMAINS[4].types = MN.DOMAINS[4].types.concat(['meta']);   // venerdì: strategia e predizione
  MN.WEEK = MN.DOMAINS.map(d => d.types.slice(0, 3));
  /* test di transfer: A = prestazione allenata (stessi tipi e forme dell'allenamento al livello attuale),
     B = transfer vicino (compiti simili, forma 1 mai allenata), C = transfer distante (problemi nuovi dal Transfer Engine) */
  CR.TV = { A: 'Prestazione allenata', B: 'Transfer vicino', C: 'Transfer distante' };
  CR.tvItems = (state, cat, n, rng) => {
    rng = rng || U.rand; n = n || 6; const out = [];
    if (cat === 'A') { const pool = ['calc', 'seq', 'span', 'logic', 'fallacy', 'bias']; for (let i = 0; i < n; i++) { const t = pool[i % pool.length]; const it = MN.make(t, MN.level(state, t), rng); it.tv = 'A'; out.push(it); } }
    else if (cat === 'B') { for (let i = 0; i < n; i++) { const t = CR.TYPES[i % 3], it = CR[t](1, rng); it.tv = 'B'; out.push(it); } }
    else { const ks = U.shuffle(Object.keys(ST.kg.PRINCIPLES), rng); for (let i = 0; i < n; i++) { const p = ST.kg.problem(ks[i % ks.length], 1 + i); out.push(Object.assign({ tv: 'C' }, p)); } }
    return out;
  };
  /* registro dei test: separato per categoria, mai un punteggio unico né un "QI" */
  CR.tvRecord = (state, cat, ok, n, ms) => { (state.tv = state.tv || []).push({ d: U.today(), cat, ok, n, ms }); if (state.tv.length > 200) state.tv.shift(); };
  CR.tvSummary = (state, cat) => { const l = (state.tv || []).filter(x => x.cat === cat); if (!l.length) return null; const pc = x => Math.round(100 * x.ok / x.n); return { runs: l.length, first: pc(l[0]), last: pc(l[l.length - 1]), best: Math.max.apply(null, l.map(pc)) }; };
})(window.ST = window.ST || {});
