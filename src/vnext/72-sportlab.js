/* vNext M7d — Sport Science Advanced Lab: progettazione e critica di PROGRAMMI GENERICI di allenamento. Non produce prescrizioni
   personalizzate né diagnosi: è un esercizio di ragionamento su volume, intensità, progressione, recupero, periodizzazione e interferenza
   forza/resistenza, con regole euristiche dichiarate come tali. Include l'interpretazione critica di sintesi di studi SINTETICI e i limiti
   delle formule predittive (1RM stimato, rapporto carico acuto:cronico). */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, M = ST.sma, E = U.esc, X = ST.acts, V = ST.views;
  const S = M.sportlab = {};
  S.DISCLAIMER = 'Esercizio di ragionamento su programmi generici: non è una prescrizione né una consulenza medica. Le soglie sono euristiche diffuse nella letteratura divulgativa e variano fra persone, discipline e studi.';
  /* ---- formule (con i loro limiti) ---- */
  S.epley = (w, reps) => reps <= 1 ? w : w * (1 + reps / 30);          // stima del 1RM: affidabile soprattutto fra 1 e ~10 ripetizioni
  S.brzycki = (w, reps) => reps >= 37 ? NaN : w * 36 / (37 - reps);
  S.pctOf = (oneRm, pct) => Math.round(oneRm * pct / 100 * 2) / 2;
  S.acwr = (loads, acute, chronic) => { acute = acute || 7; chronic = chronic || 28; if (loads.length < chronic) return null; const a = loads.slice(-acute).reduce((x, y) => x + y, 0) / acute, c = loads.slice(-chronic).reduce((x, y) => x + y, 0) / chronic; return c ? a / c : null; };
  S.ACWR_NOTE = 'Il rapporto acuto:cronico è un indicatore descrittivo: le soglie «sicure» (es. 0,8–1,3) non hanno validità predittiva solida e dipendono da come si misura il carico.';
  /* ---- generatore di mesocicli: onda di volume con scarico, progressione scelta ---- */
  S.PROG = { none: 'Nessuna progressione esplicita', linear: 'Lineare (carico +2,5% a settimana)', double: 'Doppia progressione (prima ripetizioni, poi carico)' };
  S.mesocycle = o => {
    const weeks = U.clamp(+o.weeks || 8, 4, 12), out = []; let load = o.startPct || 70, sets = o.baseSets || 10, wk = 0;
    for (let w = 1; w <= weeks; w++) {
      const deload = o.deload && w % o.deload === 0, base = deload ? 0.6 : 1;
      if (!deload) wk++; const inc = o.prog === 'linear' ? 2.5 * (wk - 1) : o.prog === 'double' ? 1.25 * Math.floor((wk - 1) / 2) : 0;
      out.push({ week: w, deload: !!deload, sets: Math.round(sets * base + (!deload && o.prog !== 'none' ? Math.floor((wk - 1) / 2) : 0)), pct: Math.min(95, Math.round((load + inc) * (deload ? 0.9 : 1) * 10) / 10), rpe: deload ? 6 : Math.min(9.5, 7 + 0.25 * (wk - 1)) });
    }
    return out;
  };
  /* ---- critica del programma: ogni segnalazione ha una motivazione, un grado di certezza e il suo limite ---- */
  S.critique = p => {
    const f = [], add = (lvl, t, why) => f.push({ lvl, t, why });
    const sets = +p.setsPerMuscle || 0, ses = +p.sessions || 0, weeks = +p.weeks || 0, endur = +p.endurance || 0;
    if (sets < 6) add('info', 'Volume settimanale molto basso (' + sets + ' serie per gruppo muscolare)', 'Per ipertrofia o forza, volumi molto bassi producono spesso progressi limitati; per un principiante possono bastare. Dipende dall’esperienza.');
    else if (sets > 24) add('warn', 'Volume settimanale molto alto (' + sets + ' serie per gruppo muscolare)', 'Oltre un certo volume il recupero diventa limitante: i valori sopra le 20–25 serie sono rari e richiedono tempo e supervisione.');
    if (p.prog === 'none') add('warn', 'Nessun modello di progressione', 'Senza un modo esplicito per aumentare carico, ripetizioni o difficoltà non c’è sovraccarico progressivo: il programma si ripete, non progredisce.');
    if (weeks >= 6 && !p.deload) add('info', 'Nessuna settimana di scarico in ' + weeks + ' settimane', 'Alcuni programmi la prevedono ogni 4–6 settimane; l’evidenza che sia necessaria per tutti è debole: monitora affaticamento e prestazione.');
    if (ses > 5 && sets > 16) add('warn', 'Molte sedute e volume elevato', 'Se il tempo di recupero è limitato (sonno, lavoro) la qualità delle sedute cala: un volume simile distribuito meglio è più sostenibile.');
    if (p.goal === 'concurrent' || endur > 0) {
      if (endur >= 3 && sets >= 14) add('warn', 'Resistenza (' + endur + ' sedute) e volume di forza alto insieme', 'L’interferenza fra allenamento di forza e di resistenza cresce quando entrambi sono elevati: priorizza un obiettivo o riduci uno dei due.');
      if (p.order === 'sameday-endurance-first') add('info', 'Resistenza prima della forza nella stessa seduta', 'Una seduta di resistenza prima può ridurre la qualità della forza che segue; separare le sedute di almeno alcune ore o usare giorni diversi riduce l’interferenza (effetto modesto e variabile).');
      if (p.order === 'separate') add('good', 'Sedute separate', 'Distanziare forza e resistenza è una strategia comune per limitare l’interferenza.');
    }
    if (p.prog && p.prog !== 'none') add('good', 'Progressione prevista: ' + S.PROG[p.prog], 'Un criterio esplicito rende il programma verificabile: puoi capire quando funziona e quando no.');
    if (p.deload) add('good', 'Scarico previsto ogni ' + p.deload + ' settimane', 'Pianificare il recupero riduce il rischio di accumulare fatica; è una scelta, non una regola universale.');
    if (sets >= 10 && sets <= 20 && p.goal === 'hypertrophy') add('good', 'Volume in un intervallo diffuso per l’ipertrofia (' + sets + ' serie)', 'È un’indicazione euristica: la risposta individuale varia molto.');
    return f;
  };
  /* ---- interpretazione critica di studi SINTETICI ---- */
  S.STUDIES = [
    { id: 'st-1', text: 'Uno studio su 14 studenti universitari maschi per 6 settimane trova che il gruppo che assume un integratore X guadagna 0,4 kg di massa magra in più del placebo (p = 0,04), misurata con impedenziometria.', limits: ['Campione piccolo', 'Misura indiretta (impedenziometria)', 'Durata breve'], distractors: ['Il gruppo di controllo è troppo grande', 'Il valore di p è troppo basso per essere credibile'], why: 'Con 14 persone gli effetti sono instabili; l’impedenziometria è sensibile all’idratazione e il guadagno di 0,4 kg può rientrare nell’errore. Un p vicino a 0,05 è debole.' },
    { id: 'st-2', text: 'Un’indagine osservazionale su 5.000 corridori amatoriali mostra che chi corre 4 volte a settimana si infortuna meno di chi corre 2 volte; gli autori concludono che «correre di più previene gli infortuni».', limits: ['Studio osservazionale: correlazione non è causalità', 'Possibile «effetto del lavoratore sano»'], distractors: ['Il campione è troppo grande', 'Ha incluso troppi corridori'], why: 'Chi si infortuna smette di correre: i più sani continuano ad allenarsi di più. Con dati osservazionali non si può attribuire il vantaggio al numero di sedute.' },
    { id: 'st-3', text: 'Uno studio randomizzato su 40 atleti confronta due schemi di forza (3×10 contro 5×5) per 8 settimane: il carico massimo aumenta del 12% e dell’11%; la differenza non è statisticamente significativa.', limits: ['Differenza piccola e non significativa: nessuna superiorità dimostrata', 'Breve durata'], distractors: ['Dimostra che i due schemi sono identici per tutti', 'Dimostra che 3×10 è meglio'], why: 'Non significativo non significa equivalente: con 40 persone lo studio può non rilevare differenze piccole. Non c’è prova né di superiorità né di uguaglianza.' },
    { id: 'st-4', text: 'Uno studio misura i livelli di un marcatore ematico dopo l’uso di una bevanda per il recupero e conclude che «migliora il recupero muscolare», senza misurare la prestazione nei giorni successivi.', limits: ['Esito surrogato (marcatore) senza esito di prestazione', 'Non è dimostrato un beneficio reale'], distractors: ['Il marcatore non è misurabile', 'La bevanda è sicuramente dannosa'], why: 'Un cambiamento in un marcatore non implica un miglioramento della prestazione o del recupero: servono esiti che contano per l’atleta.' },
    { id: 'st-5', text: 'Una rassegna sistematica di 12 studi riporta un effetto piccolo di un metodo di allenamento sulla velocità; 9 studi sono su atleti d’élite maschi e 3 su amatori; l’eterogeneità è alta.', limits: ['Popolazione poco diversificata', 'Alta eterogeneità: l’effetto medio dice poco', 'Effetto piccolo'], distractors: ['Una rassegna non ha mai valore', 'Gli studi sugli atleti d’élite non servono a nessuno'], why: 'Una rassegna è più informativa di un singolo studio, ma se i risultati sono eterogenei e la popolazione è ristretta, la generalizzazione è limitata.' }
  ];
  S.judgeStudy = (st, picked) => { const L = new Set(st.limits), hit = picked.filter(x => L.has(x)).length, wrong = picked.filter(x => !L.has(x)).length; return { hit, wrong, total: L.size, good: hit >= Math.ceil(L.size / 2) && wrong === 0, missed: st.limits.filter(x => picked.indexOf(x) < 0) }; };
  S.options = st => U.shuffle(st.limits.concat(st.distractors), (() => { let x = st.id.length * 7 + 3; return () => (x = (x * 16807) % 2147483647) / 2147483647; })());
  M.registerLab({ id: 'sportlab', title: 'Sport Science Advanced Lab', view: 'sma-sport', desc: 'Progetta e critica programmi di allenamento generici (volume, progressione, scarico, interferenza) e leggi con senso critico studi sintetici.', ready: true });
  const stat = () => ((M.S(A.state).tech = M.S(A.state).tech || {}).sport = (M.S(A.state).tech.sport || {}));
  const form = { goal: 'hypertrophy', weeks: 8, sessions: 4, setsPerMuscle: 12, prog: 'double', deload: 4, endurance: 0, order: 'separate', startPct: 70, res: null };
  const sel = (id, opts, v) => '<select id="' + id + '">' + Object.keys(opts).map(k => '<option value="' + k + '"' + (String(v) === k ? ' selected' : '') + '>' + E(opts[k]) + '</option>').join('') + '</select>';
  V['sma-sport'] = () => {
    let h = '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🏃 Sport Science Advanced Lab</h1>';
    h += '<div class="card"><h3>Progetta un programma generico</h3><p class="small">Obiettivo ' + sel('sma-sp-goal', { strength: 'Forza', hypertrophy: 'Ipertrofia', concurrent: 'Forza + resistenza' }, form.goal) + ' · settimane <input id="sma-sp-weeks" type="number" min="4" max="12" value="' + form.weeks + '" style="width:60px"> · sedute/sett. <input id="sma-sp-ses" type="number" min="1" max="7" value="' + form.sessions + '" style="width:60px"></p>' +
      '<p class="small">Serie settimanali per gruppo muscolare <input id="sma-sp-sets" type="number" min="1" max="40" value="' + form.setsPerMuscle + '" style="width:60px"> · progressione ' + sel('sma-sp-prog', S.PROG, form.prog) + '</p><p class="small">Scarico ogni <select id="sma-sp-deload"><option value="0"' + (!form.deload ? ' selected' : '') + '>mai</option><option value="4"' + (form.deload === 4 ? ' selected' : '') + '>4 settimane</option><option value="6"' + (form.deload === 6 ? ' selected' : '') + '>6 settimane</option></select> · sedute di resistenza/sett. <input id="sma-sp-end" type="number" min="0" max="7" value="' + form.endurance + '" style="width:60px"> · ordine ' + sel('sma-sp-order', { separate: 'sedute separate', 'sameday-endurance-first': 'stesso giorno: resistenza prima', 'sameday-strength-first': 'stesso giorno: forza prima' }, form.order) + '</p><button class="btn" data-act="smaSpRun">Analizza</button></div>';
    if (form.res) { const r = form.res; h += '<div class="card glow"><h3>Mesociclo generato</h3><div style="overflow-x:auto"><table class="small" style="border-collapse:collapse;width:100%"><tr><th>Sett.</th><th>Serie</th><th>%1RM top</th><th>RPE</th><th></th></tr>' + r.meso.map(w => '<tr><td>' + w.week + '</td><td>' + w.sets + '</td><td>' + w.pct + '</td><td>' + w.rpe + '</td><td>' + (w.deload ? 'scarico' : '') + '</td></tr>').join('') + '</table></div></div><div class="card"><h3>Analisi critica</h3>' + (r.crit.length ? r.crit.map(c => '<p class="small"><span class="tag ' + (c.lvl === 'good' ? 'good' : c.lvl === 'warn' ? 'acc' : '') + '">' + ({ good: 'ok', warn: 'attenzione', info: 'nota' })[c.lvl] + '</span> <b>' + E(c.t) + '</b><br>' + E(c.why) + '</p>').join('') : '<p class="small">Nessuna segnalazione.</p>') + '<p class="small mute">' + E(S.DISCLAIMER) + '</p></div>'; }
    h += '<div class="card"><h3>I limiti delle formule</h3><p class="small">Una serie da 5 ripetizioni con 100 kg stima un 1RM di <b>' + S.epley(100, 5).toFixed(1) + ' kg</b> (Epley) o <b>' + S.brzycki(100, 5).toFixed(1) + ' kg</b> (Brzycki): due formule, due stime. Sono ragionevoli entro circa 10 ripetizioni e perdono precisione oltre; non sostituiscono un test diretto.</p><p class="small">' + E(S.ACWR_NOTE) + ' Esempio: carichi 4 settimane costanti = ' + S.acwr(Array(28).fill(100)).toFixed(2) + '; con un picco finale (7 giorni a 150) = ' + S.acwr(Array(21).fill(100).concat(Array(7).fill(150))).toFixed(2) + '.</p></div>';
    h += '<div class="card"><h3>Leggere uno studio</h3><div class="list">' + S.STUDIES.map(s => '<button class="item" data-act="smaSpStudy" data-id="' + s.id + '"><span class="tx"><b>Studio ' + s.id.slice(3) + '</b><span>' + E(s.text.slice(0, 80)) + '…</span></span>' + (stat()[s.id] ? '<span class="tag ' + (stat()[s.id].good ? 'good' : '') + '">' + (stat()[s.id].good ? 'ok' : 'da rivedere') + '</span>' : '') + '</button>').join('') + '</div></div>';
    return h;
  };
  const sg = {}; 
  V['sma-sport-study'] = p => {
    const st = S.STUDIES.find(x => x.id === p.id), g = sg[st.id] || (sg[st.id] = { picked: [], res: null });
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>Studio ' + st.id.slice(3) + '</h1><div class="card"><p>' + E(st.text) + '</p><p class="small mute">Dati sintetici: lo studio è inventato per l’esercizio.</p></div><div class="card"><h3>Quali sono i limiti reali di questo studio?</h3>' + S.options(st).map(o => '<label class="small" style="display:block;margin:6px 0"><input type="checkbox" data-act="smaSpPick" data-id="' + st.id + '" data-o="' + E(o) + '"' + (g.picked.indexOf(o) >= 0 ? ' checked' : '') + '> ' + E(o) + '</label>').join('') + '<button class="btn" data-act="smaSpJudge" data-id="' + st.id + '">Valuta</button></div>' +
      (g.res ? '<div class="card glow"><h3>' + (g.res.good ? 'Lettura critica solida' : 'Da rivedere') + '</h3><p class="small">Limiti individuati: ' + g.res.hit + ' su ' + g.res.total + (g.res.wrong ? ' · ' + g.res.wrong + ' non pertinenti' : '') + (g.res.missed.length ? '<br>Mancavano: ' + g.res.missed.map(E).join('; ') : '') + '</p><p class="small">' + E(st.why) + '</p></div>' : '');
  };
  X.smaSpRun = () => { const v = id => (document.getElementById(id) || {}).value; Object.assign(form, { goal: v('sma-sp-goal'), weeks: +v('sma-sp-weeks'), sessions: +v('sma-sp-ses'), setsPerMuscle: +v('sma-sp-sets'), prog: v('sma-sp-prog'), deload: +v('sma-sp-deload'), endurance: +v('sma-sp-end'), order: v('sma-sp-order') }); form.res = { meso: S.mesocycle(form), crit: S.critique(form) }; A.render(); };
  X.smaSpStudy = el => { delete sg[el.dataset.id]; A.go('sma-sport-study', { id: el.dataset.id }); };
  X.smaSpPick = el => { const g = sg[el.dataset.id], i = g.picked.indexOf(el.dataset.o); if (i >= 0) g.picked.splice(i, 1); else g.picked.push(el.dataset.o); };
  X.smaSpJudge = el => { const st = S.STUDIES.find(x => x.id === el.dataset.id), g = sg[st.id]; g.res = S.judgeStudy(st, g.picked); const e = stat(); e[st.id] = { good: g.res.good, d: U.today() }; ST.act.record(A.state, 'sportlab', { item: st.id, ok: !!g.res.good }); M.record(A.state, 'deduction', 'sport:' + st.id, 'auto', g.res.good, {}); A.save(); A.render(); };
})(window.ST = window.ST || {});
