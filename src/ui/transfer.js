/* SkillTree — Laboratorio decisioni: dashboard competenze, diario delle decisioni, previsioni. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, T = ST.transfer;
  const val = id => { const e = document.getElementById(id); return e ? e.value.trim() : ''; };
  const tabs = t => '<div class="row" style="gap:6px;flex-wrap:wrap">' + [['dash', 'Competenze'], ['tr', 'Transfer'], ['rwd', 'Decisioni'], ['cog', 'Test cognitivi'], ['jour', 'Diario'], ['fore', 'Previsioni']].map(x => '<button class="btn' + (t === x[0] ? '' : ' ghost') + '" data-act="go" data-view="transfer" data-p=\'{"t":"' + x[0] + '"}\'>' + x[1] + '</button>').join('') + '</div>';
  const field = (id, label, ph) => '<label class="small mute">' + label + '</label><input id="' + id + '" class="inp" placeholder="' + E(ph || '') + '" style="width:100%">';
  const dash = s => {
    const ids = Object.keys(s.skills || {}), due = T.due(s);
    return '<div class="card"><h3>Dashboard delle competenze</h3><p class="small mute">Dimensioni separate, nessun punteggio unico: completare una lezione non dimostra padronanza. I dati arrivano solo dalle tue risposte registrate.</p>' +
      (ids.length ? '<table class="t"><tr><td></td>' + Object.keys(T.KINDS).map(k => '<td class="small">' + E(T.KINDS[k].split(' ')[0]) + '</td>').join('') + '</tr>' + ids.map(id => { const d = T.dims(s, id); return '<tr><td><b>' + E(id) + '</b></td>' + Object.keys(T.KINDS).map(k => '<td>' + T.pct(d[k]) + '</td>').join('') + '</tr>'; }).join('') + '</table>' : '<p class="small">Nessuna evidenza ancora: compare qui man mano che le attività dei laboratori registrano risposte.</p>') +
      '<p class="small">Verifiche a distanza (7/30/90 giorni) dovute: <b>' + due.length + '</b>' + (due.length ? ' · ' + due.slice(0, 5).map(x => E(x.id) + ' (' + x.check + 'g)').join(', ') : '') + '</p></div>';
  };
  const jour = s => {
    const j = (s.journal || []).slice().reverse(), due = T.jDue(s);
    return '<div class="card"><h3>Nuova decisione</h3>' + field('j-sit', 'Situazione') + field('j-goal', 'Obiettivo') + field('j-opts', 'Opzioni considerate') + field('j-hyp', 'Ipotesi / cosa ti aspetti') + field('j-p', 'Probabilità di successo (0–100)', '60') + field('j-choice', 'Scelta') + field('j-why', 'Motivazione') + field('j-check', 'Data di verifica (AAAA-MM-GG)', U.today()) +
      '<button class="btn block" data-act="jAdd" style="margin-top:8px">Salva nel diario</button></div>' +
      (due.length ? '<div class="card"><p class="warn small">Da verificare: ' + due.length + '</p></div>' : '') +
      '<div class="card"><h3>Registro (' + j.length + ')</h3>' + (j.map(e => '<div class="small" style="margin:8px 0;border-top:1px solid #334"><b>' + E(e.made) + '</b> · ' + E(e.sit) + '<br>Scelta: ' + E(e.choice) + (e.p != null ? ' (p=' + e.p + '%)' : '') + (e.closed ? '<br>Esito: ' + E(e.outcome) + '<br>Lezione: ' + E(e.lesson) : (e.check ? '<br><span class="mute">verifica il ' + E(e.check) + '</span><br><input id="o-' + e.id + '" class="inp" placeholder="esito" style="width:48%"> <input id="l-' + e.id + '" class="inp" placeholder="lezione appresa" style="width:48%"><button class="btn" data-act="jClose" data-id="' + e.id + '">Chiudi</button>' : '')) + '</div>').join('') || '<p class="small mute">Vuoto.</p>') + '</div>' +
      '<button class="btn ghost block" data-act="jExport">Esporta diario e previsioni (JSON)</button>';
  };
  const fore = s => {
    const f = (s.forecasts || []).slice().reverse(), b = T.brier(s);
    return '<div class="card"><h3>Previsioni probabilistiche</h3><p class="small mute">Il Brier score (0 = perfetto, 0,25 = tirare a caso) si calcola solo su eventi già risolti. Previsioni aperte: nessun punteggio.</p>' +
      (b ? '<p class="small">Risolte: <b>' + b.n + '</b> · Brier prima stima: <b>' + b.first + '</b> · ultima stima: <b>' + b.last + '</b> · aperte: ' + b.open + '</p>' : '<p class="small">Nessuna previsione risolta ancora.</p>') +
      field('f-q', 'Evento (deve avere esito sì/no verificabile)') + field('f-p', 'Probabilità che accada (1–99)', '70') + field('f-ev', 'Evidenze su cui ti basi') + field('f-due', 'Entro quando si saprà (AAAA-MM-GG)', U.today()) +
      '<button class="btn block" data-act="fAdd" style="margin-top:8px">Registra previsione</button></div>' +
      '<div class="card"><h3>Registro (' + f.length + ')</h3>' + (f.map(e => '<div class="small" style="margin:8px 0;border-top:1px solid #334"><b>' + E(e.q) + '</b><br>p: ' + e.revs.map(r => r.p + '%').join(' → ') + (e.due ? ' · entro ' + E(e.due) : '') + '<br>' + (e.out != null ? 'Esito: <b>' + (e.out ? 'accaduto' : 'non accaduto') + '</b>' : '<button class="btn" data-act="fRes" data-id="' + e.id + '" data-v="1">È accaduto</button> <button class="btn" data-act="fRes" data-id="' + e.id + '" data-v="0">Non è accaduto</button> <input id="u-' + e.id + '" class="inp" placeholder="nuova p" style="width:70px"><button class="btn ghost" data-act="fUpd" data-id="' + e.id + '">Aggiorna</button>') + '</div>').join('') || '<p class="small mute">Vuoto.</p>') + '</div>';
  };
  const tr = s => {
    const K = ST.kg, due = T.due(s).filter(x => x.id.indexOf('tr:') === 0);
    return '<div class="card"><h3>Transfer spontaneo</h3><p class="small mute">Problemi senza indicazione della materia né del principio: devi riconoscere tu che cosa serve. Il principio viene rivelato solo dopo la risposta. Qui si misura il problema nuovo, distinto dai quiz di materia.</p>' +
      (due.length ? '<p class="warn small">Verifiche a distanza dovute: ' + due.map(x => E(K.PRINCIPLES[x.id.slice(3)].t) + ' (' + x.check + 'g)').join(', ') + '</p>' : '') +
      '<button class="btn block" data-act="trStart">▶ Sessione mista (5 problemi)</button>' +
      '<table class="t" style="margin-top:8px"><tr><td>Principio</td><td class="small">Problema nuovo</td><td class="small">Ritenzione</td></tr>' + Object.keys(K.PRINCIPLES).map(k => { const d = T.dims(s, 'tr:' + k); return '<tr><td>' + E(K.PRINCIPLES[k].t) + '<div class="small mute">uso reale: ' + E(K.PRINCIPLES[k].real) + '</div></td><td>' + T.pct(d.novel) + '</td><td>' + T.pct(d.delayed) + '</td></tr>'; }).join('') + '</table></div>' +
      '<div class="card"><h3>Missioni multidisciplinari</h3>' + K.MISSIONS.map(m => '<div style="margin:10px 0"><b>' + E(m.t) + '</b>' + m.steps.map((st, i) => '<div class="small" style="margin:4px 0">' + (i + 1) + '. ' + E(st.x) + (st.go ? ' <button class="btn ghost" data-act="go" data-view="' + st.go.view + '" data-p=\'' + JSON.stringify(st.go.p) + '\'>Apri</button>' : ' <button class="btn ghost" data-act="trStart" data-pr="' + st.pr.join(',') + '">Allena</button>') + '</div>').join('') + '</div>').join('') + '</div>' +
      '<div class="card"><h3>Come si collegano</h3>' + Object.keys(K.PRINCIPLES).map(k => '<div class="small"><b>' + E(K.PRINCIPLES[k].t) + '</b> ← materie: ' + K.PRINCIPLES[k].subj.join(', ') + ' · collegato a: ' + K.PRINCIPLES[k].links.map(l => E(K.PRINCIPLES[l].t)).join(', ') + '</div>').join('') + '</div>';
  };
  const rwd = s => {
    const Rw = ST.rwd, st = A.rwdState, sc = st && Rw.SCENARIOS.find(x => x.id === st.id);
    if (!sc) return '<div class="card"><h3>Real-World Decision Lab</h3><p class="small mute">Scenari con informazioni incomplete: scegli quali dati ti servono, decidi, poi vedi una conseguenza simulata (un solo esito estratto a sorte) e il confronto con il valore atteso. Non tutte le scelte hanno una risposta unica.</p>' + Rw.SCENARIOS.map(x => '<button class="item" data-act="rwdOpen" data-id="' + x.id + '"><span class="ic">🎯</span><span class="tx"><b>' + E(x.area) + '</b><span>' + E(x.sit.slice(0, 90)) + '…</span></span></button>').join('') + '</div>';
    const head = '<div class="card"><h3>' + E(sc.area) + '</h3><p class="small"><b>Situazione.</b> ' + E(sc.sit) + '</p><p class="small"><b>Obiettivo.</b> ' + E(sc.goal) + '</p><p class="small"><b>Vincoli.</b> ' + E(sc.cons) + '</p><p class="small"><b>Informazioni disponibili.</b> ' + E(sc.known) + '</p></div>';
    if (st.stage === 1) return head + '<div class="card"><h3>Che cosa vorresti sapere prima di decidere?</h3><p class="small mute">Seleziona le informazioni che ti servirebbero davvero.</p>' + sc.info.map((x, i) => '<label class="small" style="display:block;margin:6px 0"><input type="checkbox" class="rw-i" value="' + i + '"> ' + E(x[0]) + '</label>').join('') + '<button class="btn block" data-act="rwdInfo">Avanti</button></div>';
    if (st.stage === 2) return head + '<div class="card"><h3>La tua decisione</h3>' + sc.opts.map(o => '<label class="small" style="display:block;margin:6px 0"><input type="radio" name="rw-o" class="rw-o" value="' + o.id + '"> ' + E(o.t) + '</label>').join('') + '<label class="small mute">Quanto sei sicuro che sia la scelta migliore?</label><select id="rw-c" class="inp"><option>50</option><option>60</option><option>70</option><option>80</option><option>90</option></select><button class="btn block" data-act="rwdChoose" style="margin-top:8px">Decidi</button></div>';
    const op = sc.opts.find(o => o.id === st.choice), evs = Rw.evs(sc), is = st.is;
    return head + '<div class="card glow"><h3>Conseguenza simulata</h3><p class="small">Hai scelto: <b>' + E(op.t) + '</b></p><p class="small">Esito estratto a sorte: <b>' + E(st.out.t) + '</b></p>' + (sc.dir ? '<table class="t"><tr><td>Opzione</td><td>Valore atteso (' + E(sc.unit) + ')</td></tr>' + sc.opts.map(o => '<tr><td>' + E(o.t) + '</td><td>' + evs.find(e => e.id === o.id).ev + '</td></tr>').join('') + '</table>' : '') +
      '<p class="small">Informazioni rilevanti riconosciute: <b>' + is.hit + ' / ' + is.total + '</b>' + (is.wrong ? ' · poco utili: ' + is.wrong : '') + '</p>' +
      (sc.best ? '<p class="small">' + (st.choice === sc.best ? '✓ Scelta coerente con il valore atteso.' : 'Il valore atteso indicava un’altra opzione.') + ' (Un esito sfortunato non rende sbagliata una buona decisione.)</p>' : '<p class="small">Questo scenario non ha una risposta unica: nessun punteggio registrato.</p>') +
      '<p class="small"><b>Spiegazione.</b> ' + E(sc.why) + '</p><p class="small"><b>Riflessione.</b> ' + E(sc.refl) + '</p><button class="btn" data-act="rwdJournal">Salva nel diario</button> <button class="btn ghost" data-act="rwdOpen" data-id="">Altri scenari</button></div>';
  };
  const cog = s => {
    const CR = ST.mental.crit;
    return '<div class="card"><h3>Test di transfer cognitivo</h3><p class="small mute">Tre categorie, mai fuse in un unico punteggio. Un miglioramento negli esercizi allenati (A) non prova un miglioramento generale: per questo si misura anche il transfer vicino (B, compiti simili con forme mai allenate) e distante (C, problemi nuovi senza indicazione della materia). Nessun test misura il QI.</p>' +
      Object.keys(CR.TV).map(c => { const m = CR.tvSummary(s, c); return '<div class="item" style="display:block"><b>' + c + ' · ' + E(CR.TV[c]) + '</b><div class="small mute">' + (m ? 'test svolti: ' + m.runs + ' · primo: ' + m.first + '% · ultimo: ' + m.last + '% · migliore: ' + m.best + '%' : 'nessun test ancora: il primo funge da misura iniziale') + '</div><button class="btn" data-act="tvStart" data-c="' + c + '">▶ Test (6 problemi)</button></div>'; }).join('') + '<p class="small mute">I test sono brevi: le variazioni di pochi punti percentuali su 6 problemi sono rumore, non progresso. Valuta le tendenze su molte prove.</p></div>';
  };
  ST.views.transfer = p => { p = p || {}; const t = p.t || 'dash', s = A.state; return '<div class="card glow"><h2 style="margin:0">Laboratorio decisioni</h2><p class="small mute">Transfer, diario e previsioni · dati locali e privati.</p>' + tabs(t) + '</div>' + (t === 'jour' ? jour(s) : t === 'fore' ? fore(s) : t === 'tr' ? tr(s) : t === 'rwd' ? rwd(s) : t === 'cog' ? cog(s) : dash(s)); };
  const re = () => { A.save(); A.render(); };
  X.jAdd = () => { const s = A.state, p = parseInt(val('j-p'), 10); if (!val('j-sit') || !val('j-choice')) return A.toast && A.toast('Servono almeno situazione e scelta'); T.jAdd(s, { sit: val('j-sit'), goal: val('j-goal'), opts: val('j-opts'), hyp: val('j-hyp'), p: isNaN(p) ? null : Math.max(0, Math.min(100, p)), choice: val('j-choice'), why: val('j-why'), check: val('j-check') }); re(); };
  X.jClose = el => { T.jClose(A.state, el.dataset.id, val('o-' + el.dataset.id), val('l-' + el.dataset.id)); re(); };
  X.fAdd = () => { const p = parseInt(val('f-p'), 10); if (!val('f-q') || isNaN(p) || p < 1 || p > 99) return A.toast && A.toast('Evento e probabilità 1–99'); T.fAdd(A.state, val('f-q'), p, val('f-ev'), val('f-due')); re(); };
  X.fRes = el => { T.fResolve(A.state, el.dataset.id, el.dataset.v === '1'); re(); };
  X.fUpd = el => { const p = parseInt(val('u-' + el.dataset.id), 10); if (!isNaN(p) && p >= 1 && p <= 99) T.fUpdate(A.state, el.dataset.id, p); re(); };
  X.trStart = el => {
    const s = A.state, K = ST.kg, R = ST.runner, dueIds = T.due(s).filter(x => x.id.indexOf('tr:') === 0);
    let prs = el && el.dataset && el.dataset.pr ? el.dataset.pr.split(',') : dueIds.map(x => x.id.slice(3)).concat(U.shuffle(Object.keys(K.PRINCIPLES))).filter((v, i, a) => a.indexOf(v) === i).slice(0, 5);
    const items = prs.map(pr => { const seen = ((s.skills || {})['tr:' + pr] || { hist: [] }).hist.length; return Object.assign({ pr }, K.problem(pr, seen)); });
    A.ctx = 'general';
    R.start({ title: 'Transfer spontaneo', kind: 'free', items, ctx: 'general', onAnswer: (it, ok, i, r) => { const d = dueIds.find(x => x.id === 'tr:' + it.principle); T.record(s, 'tr:' + it.principle, d ? 'delayed' : 'novel', ok, { ms: r && r.ms, check: d && d.check }); },
      onFinish: res => '<p class="small">Principi incontrati: ' + res.map(x => '<b>' + E(K.PRINCIPLES[x.item.principle].t) + '</b> (uso reale: ' + E(K.PRINCIPLES[x.item.principle].real) + ')').join(' · ') + '</p>' });
  };
  X.rwdOpen = el => { A.rwdState = el.dataset.id ? { id: el.dataset.id, stage: 1 } : null; A.render(); };
  X.rwdInfo = () => { const sc = ST.rwd.SCENARIOS.find(x => x.id === A.rwdState.id); A.rwdState.picked = Array.from(document.querySelectorAll('.rw-i:checked')).map(e => sc.info[+e.value][0]); A.rwdState.stage = 2; A.render(); };
  X.rwdChoose = () => {
    const st = A.rwdState, sc = ST.rwd.SCENARIOS.find(x => x.id === st.id), ch = document.querySelector('.rw-o:checked'); if (!ch) return A.toast('Scegli un’opzione');
    const op = sc.opts.find(o => o.id === ch.value), conf = +val('rw-c');
    st.choice = op.id; st.out = ST.rwd.sample(op, U.rand()); st.is = ST.rwd.infoScore(sc, st.picked); st.conf = conf; st.stage = 3;
    if (sc.best) T.record(A.state, 'rwd:' + sc.id, 'auto', op.id === sc.best, { conf });
    A.save(); A.render();
  };
  X.rwdJournal = () => { const st = A.rwdState, sc = ST.rwd.SCENARIOS.find(x => x.id === st.id), op = sc.opts.find(o => o.id === st.choice); T.jAdd(A.state, { sit: '[Scenario] ' + sc.sit, goal: sc.goal, opts: sc.opts.map(o => o.t).join(' | '), p: st.conf, choice: op.t, why: 'Esito simulato: ' + st.out.t }); A.save(); A.toast('Salvato nel diario'); };
  X.tvStart = el => {
    const s = A.state, CR = ST.mental.crit, c = el.dataset.c, R = ST.runner, items = CR.tvItems(s, c, 6); A.ctx = 'general';
    R.start({ title: 'Test · ' + CR.TV[c], kind: 'free', items, ctx: 'general', onAnswer: () => {},
      onFinish: res => { const ok = res.filter(x => x.ok).length; CR.tvRecord(s, c, ok, res.length, res.reduce((a, x) => a + (x.ms || 0), 0)); A.save(); return '<p class="small">Registrato: <b>' + ok + ' / ' + res.length + '</b> in categoria ' + c + '. Confrontalo con le prove precedenti, non con un valore assoluto.</p>'; } });
  };
  X.jExport = () => { const b = new Blob([T.exportJournal(A.state)], { type: 'application/json' }), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'skilltree-diario.json'; a.click(); };
})(window.ST = window.ST || {});
