/* SkillTree — Strategic Transfer Training: 5 passaggi per ogni principio (teoria → astratto → scenario → applicazione reale → verifica differita in contesto nuovo). */
(function (ST) {
  'use strict';
  const U = ST.util, TT = ST.tt = {};
  TT.GAP = 7; // giorni minimi tra l'applicazione reale e la verifica differita
  const X = (th, ab, sc) => ({ theory: th, abs: ab, scen: sc });
  const Q = (q, o, why) => ({ t: 'mc', q, o, a: 0, why });
  TT.CONTENT = {
    baserate: X('Un test o un allarme non dice da solo quanto sia probabile l’evento: conta quanto l’evento è raro in partenza. Si ricostruisce con le frequenze: su 10 000 casi, quanti sono veri positivi e quanti falsi positivi? Poi si confrontano.',
      Q('Una condizione ha prevalenza del 5%. Il test rileva l’80% dei casi veri e dà falsi positivi nel 10% dei sani. Se risulti positivo, quanto è probabile la condizione?', ['circa 30%', 'circa 80%', 'circa 50%', 'circa 5%'], 'Su 10 000: 500 veri → 400 positivi; 9 500 sani → 950 falsi positivi. 400/1350 ≈ 30%.'),
      Q('Un sistema antifrode segnala il 99% delle truffe e sbaglia sull’1% delle transazioni oneste. Le truffe sono lo 0,1% delle transazioni. Una transazione è segnalata: quanto è probabile che sia una truffa?', ['circa 9%', 'circa 99%', 'circa 50%', 'circa 1%'], 'Su 100 000: 100 truffe → 99 segnalate; 99 900 oneste → 999 segnalate. 99/1098 ≈ 9%. Per questo ogni segnalazione va verificata.')),
    opportunity: X('Ogni scelta ha un costo reale: ciò a cui rinunci con la migliore alternativa. Il costo non è solo il prezzo pagato ma il valore della seconda scelta migliore, compreso il tempo.',
      Q('Un’ora di studio vale 6 punti attesi nel corso A o 4 nel corso B. Scegliendo A, qual è il costo opportunità di quell’ora?', ['4 punti', '6 punti', '10 punti', '0 punti'], 'Il costo opportunità è il valore della migliore alternativa a cui rinunci: 4 punti.'),
      Q('Puoi lavorare 2 ore a 15 € l’ora oppure andare a cena fuori (30 € di conto). Qual è il costo reale della cena?', ['60 €', '30 €', '45 €', '15 €'], '30 € di conto + 2 ore × 15 € a cui rinunci = 60 €.')),
    growth: X('Le crescite percentuali si compongono: ogni aumento si applica al valore già aumentato, non a quello iniziale. Sommare le percentuali sottostima gli aumenti e sovrastima le riduzioni.',
      Q('Un valore di 200 cresce del 10% all’anno per 3 anni. Quanto vale alla fine?', ['266,2', '260', '230', '300'], '200 × 1,1³ = 266,2; sommando i 10% si avrebbe 260 e si sottostimerebbe.'),
      Q('Parti da 80 kg e aggiungi il 2,5% ogni settimana per 12 settimane. Dove arrivi, circa?', ['circa 107,6 kg', 'circa 104 kg', 'circa 110 kg', 'circa 92 kg'], '80 × 1,025¹² ≈ 107,6 kg. Il progresso reale rallenta, quindi è un limite teorico, non una previsione.')),
    causation: X('Due fenomeni possono andare insieme senza che uno causi l’altro: per una causa comune, per selezione o per caso. Per stabilire la causa serve un confronto controllato o una assegnazione casuale.',
      Q('In una regione, più ospedali per abitante si accompagnano a più decessi in totale. Qual è la spiegazione più sensata da controllare per prima?', ['Le regioni con più popolazione anziana hanno entrambe le cose', 'Gli ospedali causano decessi', 'I decessi creano ospedali', 'Il dato è sicuramente un errore'], 'Una causa comune (età della popolazione) può spiegare entrambe le correlazioni.'),
      Q('L’azienda nota che i clienti che usano la chat di assistenza comprano di più, e vuole imporre la chat a tutti. Che cosa manca?', ['Sapere se l’uso della chat causa gli acquisti o se i clienti già interessati la usano di più; servirebbe un confronto casuale', 'Nulla: la correlazione basta', 'Il numero di chat', 'Il colore del pulsante'], 'Può essere selezione: chi è già interessato usa la chat. Un test con assegnazione casuale distingue le due ipotesi.')),
    ev: X('Il valore atteso è la media pesata degli esiti: Σ probabilità × valore. Aiuta a confrontare scelte ripetibili; per eventi rari e gravi conta anche il rischio, non solo la media.',
      Q('Un gioco costa 4 € e dà 50 € con probabilità 1/10, altrimenti nulla. Valore atteso netto?', ['+1 €', '−4 €', '+46 €', '−1 €'], '50/10 = 5 € di vincita media − 4 € = +1 €.'),
      Q('Una garanzia estesa costa 30 €. La probabilità di guasto è 10% e la riparazione costa 200 €. Conviene in termini di valore atteso?', ['No: costo atteso della riparazione 20 € < 30 €, salvo che il rischio sia insostenibile per te', 'Sì: 200 € > 30 €', 'È indifferente', 'Dipende solo dal colore del prodotto'], '0,1 × 200 = 20 € di costo atteso contro 30 € di garanzia. L’assicurazione ha senso quando il danno non è sostenibile.')),
    regression: X('Un risultato eccezionalmente alto o basso contiene una quota di caso. La prova successiva tende verso la media anche senza alcun intervento: per attribuire un cambiamento a un intervento serve un gruppo di confronto.',
      Q('Il 10% delle squadre con il peggior punteggio a inizio stagione viene affidato a un nuovo metodo. A fine stagione quasi tutte migliorano. Quale spiegazione non va dimenticata?', ['La regressione verso la media', 'Il metodo funziona certamente', 'Tutte le squadre sono migliorate per fortuna', 'Il punteggio iniziale era sbagliato'], 'Chi parte dal fondo tende a risalire anche senza intervento: serve un gruppo di controllo.'),
      Q('Un allenatore elogia dopo una prestazione ottima e rimprovera dopo una pessima; nota che i rimproveri «funzionano» (si migliora) e gli elogi no. Che cosa può esserci dietro?', ['Regressione verso la media: dopo un risultato estremo il successivo tende verso la media', 'I rimproveri sono sempre efficaci', 'Gli elogi fanno male', 'Il giudizio non ha alcun effetto'], 'Dopo una prestazione pessima è probabile un miglioramento comunque; dopo una ottima un calo.')),
    incentives: X('Le persone rispondono agli incentivi, non alle intenzioni. In un gioco, una strategia dominante è la migliore qualunque cosa faccia l’altro; il risultato può essere peggiore per tutti rispetto alla cooperazione.',
      Q('Guadagni (tuo, altro): A-A (3,3); A-B (1,4); B-A (4,1); B-B (2,2). Quale strategia è dominante per te?', ['B: 4 > 3 e 2 > 1', 'A: 3 > 2', 'Nessuna', 'Dipende dall’altro'], 'Se l’altro sceglie A, B dà 4 contro 3; se sceglie B, B dà 2 contro 1: B domina. Ma (2,2) è peggio di (3,3).'),
      Q('Un team riceve un bonus uguale per tutti se il progetto riesce, ma lo sforzo ha un costo personale e non è osservabile. Quale rischio è tipico?', ['Free riding: ciascuno ha incentivo a ridurre lo sforzo contando sugli altri', 'Tutti si impegnano al massimo', 'Nessun rischio', 'Il bonus aumenta sempre lo sforzo'], 'Senza misurare il contributo individuale, l’incentivo a ridurre lo sforzo è forte.')),
    units: X('Prima di calcolare, controlla le unità: convertire correttamente e verificare l’ordine di grandezza evita la maggior parte degli errori. Un risultato con l’unità sbagliata è sbagliato anche se i numeri tornano.',
      Q('Quanti metri al secondo sono 90 km/h?', ['25 m/s', '90 m/s', '324 m/s', '9 m/s'], '90 ÷ 3,6 = 25 m/s.'),
      Q('Un’auto consuma 6,5 L/100 km. Quanti litri servono per 520 km?', ['33,8 L', '65 L', '3,38 L', '6,5 L'], '6,5 × 520 / 100 = 33,8 L.'))
  };
  const rec = (s, pr) => ((s.tt = s.tt || {})[pr] = s.tt[pr] || {});
  /* stato: step 1..5 completati, con vincoli su ordine e attesa */
  TT.status = (s, pr, today) => {
    const r = (s.tt || {})[pr] || {}; today = today || U.today();
    if (!r.theory) return { next: 1, ready: true };
    if (!r.abs) return { next: 2, ready: true };
    if (!r.scen) return { next: 3, ready: true };
    if (!r.apply) return { next: 4, ready: true };
    if (!r.delayed) { const wait = U.diffDays(r.apply, today); return { next: 5, ready: wait >= TT.GAP, wait: Math.max(0, TT.GAP - wait) }; }
    return { next: 6, ready: false, done: true };
  };
  TT.done = (s, pr, step, extra) => { const r = rec(s, pr), k = ['theory', 'abs', 'scen', 'apply', 'delayed'][step - 1]; r[k] = U.today(); if (step === 4) r.note = extra || ''; if (step === 5) r.delayedOk = !!extra; return r; };
  TT.item = (pr, step) => { const c = TT.CONTENT[pr]; const it = Object.assign({}, step === 2 ? c.abs : c.scen); it.skill = 'tt:' + pr; it.srcLabel = (step === 2 ? 'Esercizio astratto' : 'Scenario realistico') + ' · ' + ST.kg.PRINCIPLES[pr].t; return it; };
  /* passo 5: problema del Transfer Engine in forma non mostrata prima per quel principio (la prima non vista) */
  TT.delayedItem = (s, pr) => { const seen = ((s.skills || {})['tr:' + pr] || { hist: [] }).hist.length; return Object.assign({}, ST.kg.problem(pr, seen + 1), { srcLabel: 'Problema nuovo · materia non indicata' }); };
  TT.summary = s => Object.keys(ST.kg.PRINCIPLES).map(pr => ({ pr, st: TT.status(s, pr) }));
})(window.ST = window.ST || {});
