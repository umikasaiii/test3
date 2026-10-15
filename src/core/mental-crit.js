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
