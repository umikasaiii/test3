/* SkillTree — grafo delle conoscenze, problemi di transfer spontaneo (materia non dichiarata) e missioni multidisciplinari. */
(function (ST) {
  'use strict';
  const K = ST.kg = {};
  /* principi trasversali: dove nascono (materie) e dove si usano nella vita reale */
  K.PRINCIPLES = {
    baserate: { t: 'Probabilità di base (Bayes)', subj: ['str', 'cyb', 'sport'], real: 'test medici, allarmi di sicurezza, screening', links: ['causation', 'ev'] },
    opportunity: { t: 'Costo opportunità e costo per uso', subj: ['str', 'sec'], real: 'abbonamenti, acquisti, tempo', links: ['ev', 'incentives'] },
    growth: { t: 'Crescita composta', subj: ['sport', 'str', 'sec'], real: 'sovraccarico progressivo, inflazione, risparmio', links: ['units'] },
    causation: { t: 'Correlazione e causalità', subj: ['sport', 'sec', 'cyb'], real: 'studi scientifici, notizie, abitudini', links: ['regression', 'baserate'] },
    ev: { t: 'Valore atteso', subj: ['str', 'sec'], real: 'scommesse, investimenti, decisioni a rischio', links: ['baserate', 'opportunity'] },
    regression: { t: 'Regressione verso la media', subj: ['sport', 'str'], real: 'prestazioni eccezionali, interventi dopo un picco negativo', links: ['causation'] },
    incentives: { t: 'Incentivi e strategia dominante', subj: ['str', 'f1', 'cyb'], real: 'negoziazione, prezzi, sicurezza', links: ['opportunity', 'ev'] },
    units: { t: 'Unità di misura e stime', subj: ['sport', 'f1', 'moto', 'sec'], real: 'ritmi, consumi, conversioni', links: ['growth'] }
  };
  /* due problemi per principio: la seconda variante serve per le verifiche a distanza */
  const P = (principle, v, q, o, a, why) => ({ t: 'mc', principle, v, q, o, a, why, srcLabel: 'Problema nuovo · materia non indicata' });
  K.PROBLEMS = [
    P('baserate', 0, 'Una malattia colpisce l’1% delle persone. Un test rileva il 90% dei malati e dà un falso positivo nel 10% dei sani. Risulti positivo: quanto è probabile che tu sia malato?', ['circa 90%', 'circa 50%', 'circa 8%', 'circa 1%'], 2, 'Su 10 000 persone: 100 malati → 90 positivi; 9 900 sani → 990 falsi positivi. 90/(90+990) ≈ 8%.'),
    P('baserate', 1, 'Un filtro antispam segnala il 95% dello spam e sbaglia sul 5% della posta buona. Lo spam è il 2% dei messaggi. Un messaggio è segnalato: quanto è probabile che sia spam?', ['circa 95%', 'circa 28%', 'circa 50%', 'circa 5%'], 1, 'Su 10 000: 200 spam → 190 segnalati; 9 800 buoni → 490 segnalati. 190/680 ≈ 28%.'),
    P('opportunity', 0, 'Un abbonamento costa 40 € al mese e lo usi 2 volte. L’ingresso singolo costa 12 €. Cosa conviene?', ['abbonamento: 20 € a uso', 'ingresso singolo: 12 € a uso', 'sono uguali', 'dipende solo dal prezzo mensile'], 1, '40/2 = 20 € per uso contro 12 € dell’ingresso singolo.'),
    P('opportunity', 1, 'Un abbonamento costa 30 € al mese e lo usi 5 volte. L’ingresso singolo costa 8 €. Cosa conviene?', ['abbonamento: 6 € a uso', 'ingresso singolo: 8 € a uso', 'sono uguali', 'non si può dire'], 0, '30/5 = 6 € per uso contro 8 € dell’ingresso singolo.'),
    P('growth', 0, 'Parti da 100 kg e aggiungi il 5% ogni settimana per 8 settimane. Dove arrivi, circa?', ['circa 140 kg', 'circa 148 kg', 'circa 160 kg', 'circa 108 kg'], 1, '100 × 1,05^8 ≈ 147,7: gli aumenti si compongono, non si sommano (sommati darebbero 140).'),
    P('growth', 1, 'Un prezzo di 100 € sale del 3% all’anno per 10 anni. Quanto vale alla fine, circa?', ['circa 130 €', 'circa 134 €', 'circa 150 €', 'circa 103 €'], 1, '100 × 1,03^10 ≈ 134,4 €; sommando i 3% si avrebbe 130 €, sottostimando.'),
    P('causation', 0, 'In una città, nei mesi in cui si vendono più gelati ci sono più annegamenti. Quale spiegazione è la più sensata?', ['i gelati causano annegamenti', 'gli annegamenti fanno vendere gelati', 'una causa comune: il caldo estivo', 'è un caso: i dati non dicono nulla'], 2, 'Una terza variabile (stagione calda) aumenta entrambe: correlazione senza causalità diretta.'),
    P('causation', 1, 'Chi dorme con le scarpe ai piedi si sveglia più spesso con mal di testa. Qual è la spiegazione da controllare per prima?', ['le scarpe causano mal di testa', 'una causa comune, come l’aver bevuto la sera prima', 'il mal di testa fa dormire con le scarpe', 'nessuna, il dato è sicuramente falso'], 1, 'Un fattore comune (alcol) può spiegare sia il dormire vestiti sia il mal di testa.'),
    P('ev', 0, 'Giochi a 3 € a partita: vinci 20 € con probabilità 1/6, altrimenti nulla. Il valore atteso netto per partita è…', ['circa +0,33 €', 'circa −3 €', 'circa −0,33 €', 'circa +17 €'], 0, '20/6 ≈ 3,33 € di vincita media − 3 € di costo ≈ +0,33 €.'),
    P('ev', 1, 'Giochi a 3 € a partita: vinci 10 € con probabilità 1/4, altrimenti nulla. Il valore atteso netto per partita è…', ['circa +0,5 €', 'circa −0,5 €', 'circa +7 €', 'circa −3 €'], 1, '10/4 = 2,5 € di vincita media − 3 € = −0,5 €.'),
    P('regression', 0, 'Un atleta ha una prestazione eccezionalmente alta. Alla prova successiva, in media, cosa ti aspetti senza altri cambiamenti?', ['uguale o più alta', 'più vicina alla sua media abituale', 'molto più bassa del suo minimo', 'non si può prevedere nulla'], 1, 'Un risultato estremo contiene in parte fortuna: la prova seguente tende verso la media.'),
    P('regression', 1, 'Gli studenti con i voti peggiori nel test iniziale seguono un tutoraggio e migliorano nel test finale. Cosa NON si può concludere?', ['che il tutoraggio sia certamente efficace: parte del miglioramento può essere regressione alla media', 'che serva un gruppo di controllo', 'che alcuni migliorino per caso', 'che il campione sia selezionato'], 0, 'Chi è scelto perché è agli estremi tende comunque a migliorare: serve un gruppo di controllo.'),
    P('incentives', 0, 'Due negozi scelgono tra «sconto» e «prezzo pieno». Guadagni (tuo, altro): sconto-sconto (2,2); sconto-pieno (5,0); pieno-sconto (0,5); pieno-pieno (3,3). Senza accordi vincolanti cosa sceglie un decisore razionale?', ['prezzo pieno', 'sconto, qualunque cosa faccia l’altro', 'dipende dall’altro negozio', 'è indifferente'], 1, 'Sconto dà 5 > 3 se l’altro tiene il prezzo pieno e 2 > 0 se anche l’altro fa sconto: strategia dominante, ma (2,2) è peggio di (3,3).'),
    P('incentives', 1, 'Guadagni (tuo, altro): sconto-sconto (4,4); sconto-pieno (6,1); pieno-sconto (1,6); pieno-pieno (5,5). Senza accordi vincolanti cosa sceglie un decisore razionale?', ['prezzo pieno', 'sconto, qualunque cosa faccia l’altro', 'dipende dall’altro negozio', 'è indifferente'], 1, 'Sconto: 6 > 5 se l’altro tiene il pieno, 4 > 1 se l’altro fa sconto. Dominante.'),
    P('units', 0, 'Corri 10 km a 5:00 al chilometro. Quanto dura la corsa?', ['40 minuti', '50 minuti', '55 minuti', '60 minuti'], 1, '10 × 5 min = 50 min.'),
    P('units', 1, 'Corri 8 km a 4:30 al chilometro. Quanto dura la corsa?', ['32 minuti', '34 minuti', '36 minuti', '40 minuti'], 2, '8 × 4,5 min = 36 min.')
  ];
  K.problem = (pr, seen) => { const l = K.PROBLEMS.filter(x => x.principle === pr); return l.find(x => x.v === ((seen || 0) % l.length)) || l[0]; };
  /* missioni multidisciplinari: passi eseguibili (vista dell'app o pratica di transfer) */
  K.MISSIONS = [
    { id: 'm-train', t: 'Valuta un programma di allenamento', steps: [
      { x: 'Leggi un argomento di programmazione dell’allenamento (Scienze dello sport).', go: { view: 'subject', p: { id: 'sport' } } },
      { x: 'Allena i principi «crescita composta» e «correlazione e causalità» senza indicazioni sulla materia.', pr: ['growth', 'causation'] },
      { x: 'Annota nel diario la decisione tra due programmi, con ipotesi e data di verifica.', go: { view: 'transfer', p: { t: 'jour' } } },
      { x: 'Registra una previsione sull’esito (probabilità, evidenze).', go: { view: 'transfer', p: { t: 'fore' } } },
      { x: 'Dopo 7 giorni: ripeti i problemi a distanza (scheda Transfer).', go: { view: 'transfer', p: { t: 'tr' } } } ] },
    { id: 'm-budget', t: 'Gestisci un budget e un acquisto', steps: [
      { x: 'Studia economia e decisioni (Strategia).', go: { view: 'subject', p: { id: 'str' } } },
      { x: 'Allena «costo opportunità» e «valore atteso».', pr: ['opportunity', 'ev'] },
      { x: 'Registra la decisione di acquisto nel diario.', go: { view: 'transfer', p: { t: 'jour' } } } ] },
    { id: 'm-risk', t: 'Valuta un rischio (sicurezza o salute)', steps: [
      { x: 'Allena «probabilità di base» e «incentivi».', pr: ['baserate', 'incentives'] },
      { x: 'Fai una previsione sul tuo giudizio e confrontala con l’esito.', go: { view: 'transfer', p: { t: 'fore' } } } ] },
    { id: 'm-race', t: 'Analizza una decisione di gara (F1 o moto)', steps: [
      { x: 'Apri la materia e scegli un laboratorio di strategia o tempi.', go: { view: 'subject', p: { id: 'f1' } } },
      { x: 'Allena «unità di misura» e «regressione verso la media».', pr: ['units', 'regression'] } ] }
  ];
})(window.ST = window.ST || {});
(function (ST) {
  'use strict';
  const K = ST.kg;
  /* collegamento argomento → principio per parole chiave nel titolo, nel sommario e negli obiettivi (euristico, dichiarato come tale) */
  K.KEYS = {
    baserate: /bayes|probabilit|falsi positiv|prevalenz|sensibilit|screening/i,
    opportunity: /costo opportunit|trade-?off|compromess|alternativ|budget|risors/i,
    growth: /compost|crescita|esponenzial|inflazion|sovraccarico progressivo|progressione/i,
    causation: /causal|correlazion|confondent|osservazional|esperiment|placebo|randomizz/i,
    ev: /valore atteso|expectimax|aspettativa|scommess|incertezza|rischio/i,
    regression: /regressione (alla|verso) |regressione alla media/i,
    incentives: /incentiv|nash|dilemma del prigioniero|teoria dei giochi|strategia dominante|negoziazion/i,
    units: /unit[àa] di misura|conversion|ordine di grandezza|fermi/i
  };
  const textOf = t => [t.title, t.summary].concat(t.objectives || []).join(' ');
  const LANG = { eng: 1, jpn: 1 }; // gli argomenti di lingua non sono collegati per parola chiave
  K.principlesOf = t => LANG[t.subject] ? [] : Object.keys(K.KEYS).filter(p => K.KEYS[p].test(textOf(t)));
  K.topicsOf = (pr, max) => Object.values(ST.content.topics).filter(t => K.principlesOf(t).includes(pr)).slice(0, max || 6);
  /* argomenti collegati: prerequisiti dichiarati, successivi che li richiedono, e altri argomenti con un principio in comune */
  K.related = t => {
    const all = Object.values(ST.content.topics), pre = (t.prereq || []).filter(id => ST.content.topics[id]);
    const next = all.filter(x => (x.prereq || []).includes(t.id)).map(x => x.id);
    const prs = K.principlesOf(t), shared = all.filter(x => x.id !== t.id && x.subject !== t.subject && K.principlesOf(x).some(p => prs.includes(p))).slice(0, 5).map(x => x.id);
    return { pre, next, prs, shared };
  };
})(window.ST = window.ST || {});
