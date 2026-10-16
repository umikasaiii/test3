/* SkillTree — Laboratorio decisioni: dashboard competenze, diario delle decisioni, previsioni. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, T = ST.transfer;
  const val = id => { const e = document.getElementById(id); return e ? e.value.trim() : ''; };
  const tabs = t => '<div class="row" style="gap:6px;flex-wrap:wrap">' + [['dash', 'Competenze'], ['tr', 'Transfer'], ['rwd', 'Decisioni'], ['cog', 'Test cognitivi'], ['cs', 'Casi sport'], ['voc', 'Lessico'], ['kj', 'Kanji'], ['dlg', 'Dialoghi'], ['jp', 'Produzione JA'], ['tt', 'Allenamento strategico'], ['jour', 'Diario'], ['fore', 'Previsioni']].map(x => '<button class="btn' + (t === x[0] ? '' : ' ghost') + '" data-act="go" data-view="transfer" data-p=\'{"t":"' + x[0] + '"}\'>' + x[1] + '</button>').join('') + '</div>';
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
      '<table class="t" style="margin-top:8px"><tr><td>Principio</td><td class="small">Problema nuovo</td><td class="small">Ritenzione</td></tr>' + Object.keys(K.PRINCIPLES).map(k => { const d = T.dims(s, 'tr:' + k); return '<tr><td>' + E(K.PRINCIPLES[k].t) + '<div class="small mute">uso reale: ' + E(K.PRINCIPLES[k].real) + '</div>' + K.topicsOf(k, 3).map(t => '<button class="btn alt sm" data-act="go" data-view="topic" data-p=\'{"id":"' + t.id + '"}\'>' + E(t.title.slice(0, 28)) + '</button>').join(' ') + '</td><td>' + T.pct(d.novel) + '</td><td>' + T.pct(d.delayed) + '</td></tr>'; }).join('') + '</table></div>' +
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
  const cs = s => '<div class="card"><h3>Case Study Engine · Scienze dello sport</h3><p class="small mute">Casi con dati fittizi in 5 passi: analizza i dati, formula l’ipotesi, individua l’informazione mancante, decidi, valuta i limiti. Servono a esercitare il metodo, non a prescrivere allenamenti reali.</p>' +
    ST.cases.CASES.map(c => { const d = T.dims(s, 'case:' + c.id); return '<button class="item" data-act="csStart" data-id="' + c.id + '"><span class="tx"><b>' + E(c.title) + '</b><span>guidata: ' + T.pct(d.guided) + '</span></span><span class="tag">5 passi</span></button>'; }).join('') +
    '<h3 style="margin-top:12px">Alfabetizzazione alla ricerca</h3><p class="small mute">Rischio relativo e assoluto, campioni piccoli, intervalli di confidenza, validità esterna, confronti multipli. Sono 8 domande; le fonti inglesi arriveranno con English Across SkillTree.</p><button class="btn block" data-act="csStart" data-id="research">▶ Lettura critica (8 domande)</button></div>';
  const voc = s => '<div class="card"><h3>Lessico attivo</h3><p class="small mute">Ogni parola passa da: riconoscimento → richiamo senza aiuti (2 volte) → uso in una frase (completamento) → produzione di una frase tua → verifica a distanza dopo almeno ' + ST.vocab.GAP + ' giorni dal primo richiamo. La produzione è autovalutata: l’app non corregge la grammatica. Le parole dovute per il ripasso hanno la precedenza.</p>' +
    [['en', 'Inglese'], ['ja', 'Giapponese']].map(l => { const c = ST.vocab.counts(s, l[0]); return '<div class="item" style="display:block"><b>' + l[1] + '</b> · ' + c.reduce((a, b) => a + b, 0) + ' parole<div class="small mute">' + ST.vocab.LABELS.map((x, i) => x + ': ' + c[i]).join(' · ') + '</div><button class="btn" data-act="vocStart" data-l="' + l[0] + '">▶ Sessione (10 parole)</button></div>'; }).join('') +
    '<p class="small mute">Le parole entrano qui quando studi un argomento di lingua. In giapponese la fase «contesto» è sostituita dalla produzione perché le carte non hanno ancora frasi d’esempio.</p></div>';
  const ttv = s => {
    const K = ST.kg, TT = ST.tt, sel = A.ttSel, steps = ['Teoria', 'Esercizio astratto', 'Scenario realistico', 'Applicazione reale', 'Verifica differita'];
    if (sel) { const c = TT.CONTENT[sel], st = TT.status(s, sel), p = K.PRINCIPLES[sel];
      return '<div class="card"><h3>' + E(p.t) + '</h3><p class="small mute">Passo ' + Math.min(st.next, 5) + ' di 5 · ' + steps.map((x, i) => (i + 1 < st.next ? '✓ ' : '') + x).join(' → ') + '</p>' +
        (st.next === 1 ? '<p class="small">' + E(c.theory) + '</p><p class="small mute">Dove si usa nella vita reale: ' + E(p.real) + '</p><button class="btn block" data-act="ttStep" data-pr="' + sel + '" data-n="1">Ho letto: avanti</button>'
        : st.next === 2 || st.next === 3 ? '<button class="btn block" data-act="ttStep" data-pr="' + sel + '" data-n="' + st.next + '">▶ ' + steps[st.next - 1] + '</button>'
        : st.next === 4 ? '<p class="small">Scegli una situazione concreta dei prossimi giorni in cui userai questo principio e descrivila (es. «prima di comprare X confronterò il costo per uso»).</p><input id="tt-note" class="inp" style="width:100%" placeholder="La mia situazione concreta"><button class="btn block" data-act="ttStep" data-pr="' + sel + '" data-n="4" style="margin-top:8px">Mi impegno e salvo nel diario</button>'
        : st.done ? '<p class="small">Percorso completato. Verifica differita: ' + (((s.tt || {})[sel] || {}).delayedOk ? 'riuscita' : 'non riuscita (ripeti il passo 1–3 per rinforzare)') + '.</p>'
        : st.ready ? '<p class="small">Un problema nuovo, senza indicare il principio: riconoscilo da solo.</p><button class="btn block" data-act="ttStep" data-pr="' + sel + '" data-n="5">▶ Verifica differita</button>' : '<p class="small mute">La verifica differita si sblocca tra ' + st.wait + ' giorni: serve tempo tra applicazione e prova.</p>') +
        '<button class="btn ghost" data-act="ttSel" data-pr="" style="margin-top:8px">← Tutti i principi</button></div>'; }
    return '<div class="card"><h3>Allenamento strategico in 5 passaggi</h3><p class="small mute">Ogni principio: teoria → esercizio astratto → scenario realistico → applicazione nella tua vita → verifica differita in un contesto nuovo, senza suggerimenti. L’ultimo passo è quello che conta.</p>' + TT.summary(s).map(x => '<button class="item" data-act="ttSel" data-pr="' + x.pr + '"><span class="tx"><b>' + E(K.PRINCIPLES[x.pr].t) + '</b><span>' + (x.st.done ? 'completato' : 'passo ' + x.st.next + ' di 5' + (x.st.next === 5 && !x.st.ready ? ' (tra ' + x.st.wait + ' giorni)' : '')) + '</span></span></button>').join('') + '</div>';
  };
  const kjv = s => { const KJ = ST.kanji, ix = KJ.index(); return '<div class="card"><h3>Kanji Intelligence</h3><p class="small mute">' + Object.keys(ix.chars).length + ' kanji in ' + ix.words.length + ' vocaboli dalle carte di giapponese. Si lavora su parole e contesti, non su caratteri isolati. Riconoscimento e produzione sono contati separatamente: leggere un kanji non significa saperlo scrivere.</p>' +
    '<button class="btn block" data-act="kjStart" data-t="mix">▶ Sessione mista (10)</button><table class="t" style="margin-top:8px"><tr><td>Esercizio</td><td class="small">Corrette</td><td></td></tr>' +
    KJ.TYPES.map(t => { const m = (s.kanji || {})[t]; return '<tr><td>' + E(KJ.LABEL[t]) + (KJ.PRODUCTION[t] ? ' <span class="tag">produzione</span>' : ' <span class="tag">riconoscimento</span>') + '</td><td>' + (m && m.n ? Math.round(100 * m.ok / m.n) + '% (' + m.n + ')' : '—') + '</td><td><button class="btn alt sm" data-act="kjStart" data-t="' + t + '">▶</button></td></tr>'; }).join('') + '</table>' +
    '<p class="small mute">Componenti e letture on/kun usano elenchi curati (letture principali, non esaustive). Servono per orientarsi: un componente suggerisce il campo di significato ma non lo determina sempre.</p></div>'; };
  const dlgv = s => {
    const DL = ST.dialog, st = A.dlg;
    if (!st) return '<div class="card"><h3>Dialoghi ramificati · inglese e giapponese</h3><p class="small mute">Dialoghi a scelte: ogni risposta cambia il corso della conversazione e riceve un feedback. Non è una conversazione libera con un’AI: le risposte sono predefinite (disponibile solo l’ascolto con la voce del dispositivo, non registrazioni di madrelingua).</p>' + [['en', 'Inglese'], ['ja', 'Giapponese · simulatore di vita (registro cortese)']].map(g => '<h4>' + g[1] + '</h4>' + DL.LIST.filter(d => d.lang === g[0]).map(d => { const r = (s.skills || {})['dlg:' + d.id]; return '<button class="item" data-act="dlgOpen" data-id="' + d.id + '"><span class="tx"><b>' + E(d.title) + '</b><span>' + E(d.area) + ' · ' + d.level + (r && r.hist.length ? ' · tentativi: ' + r.hist.length : '') + '</span></span></button>'; }).join('')).join('') + '</div>';
    const d = DL.byId(st.id), n = d.nodes[st.node];
    const last = st.log.length ? st.log[st.log.length - 1] : null;
    let h = last ? '<div class="card"><p class="small">Hai detto: «' + (DL.byId(st.id).lang === 'ja' ? U.ruby(last.text) : E(last.text)) + '»</p><p class="small ' + (last.q === 2 ? 'good' : last.q === 1 ? 'warn' : 'bad') + '">' + (last.q === 2 ? '✓ ' : last.q === 1 ? '≈ ' : '✗ ') + E(last.fb) + '</p></div>' : '';
    h += '<div class="card"><h3>' + E(d.title) + '</h3><p><b>' + '<button class="say" data-act="say" data-lang="' + (d.lang === 'ja' ? 'ja' : 'en-GB') + '" data-text="' + E(U.speechText(n.npc)) + '" aria-label="Ascolta">🔊</button> <span class="sayt">' + (d.lang === 'ja' ? U.ruby(n.npc) : E(n.npc)) + '</span>' + '</b></p><details><summary class="small mute">Traduzione</summary><p class="small">' + E(n.tr) + '</p></details>';
    if (n.end) { const pc = Math.round(100 * DL.score(st.log)); h += '<p class="small"><b>Fine del dialogo.</b> Risposte efficaci: ' + st.log.filter(x => x.q === 2).length + ' su ' + st.log.length + ' (' + pc + '%). È un esercizio di scelta tra risposte predefinite, non una valutazione della tua produzione libera.</p><button class="btn" data-act="dlgOpen" data-id="' + d.id + '">Ripeti</button> <button class="btn ghost" data-act="dlgOpen" data-id="">Altri dialoghi</button></div>'; }
    else h += n.ch.map((c, i) => '<button class="item" data-act="dlgPick" data-i="' + i + '"><span class="tx"><b>' + (d.lang === 'ja' ? U.ruby(c.t) : E(c.t)) + '</b></span></button>').join('') + '</div>';
    return h;
  };
  const jpv = s => { const JP = ST.jprod; return '<div class="card"><h3>Produzione attiva · giapponese</h3><p class="small mute">Scrivere, trasformare e ricostruire: competenza produttiva, separata dal riconoscimento. Le risposte scritte sono confrontate con le versioni accettate (kana, o romaji senza spazi): una frase corretta ma diversa può essere rifiutata, quindi la soluzione è un modello. Non c’è valutazione orale. Per le particelle (は, を, へ) conviene scrivere in kana.</p>' +
    '<button class="btn block" data-act="jpStart" data-t="mix">▶ Sessione mista (10)</button><table class="t" style="margin-top:8px">' + JP.TYPES.map(t => { const m = (s.jprod || {})[t]; return '<tr><td>' + E(JP.LABEL[t]) + (JP.PRODUCTION[t] ? ' <span class="tag">produzione</span>' : ' <span class="tag">riconoscimento</span>') + '</td><td>' + (m && m.n ? Math.round(100 * m.ok / m.n) + '% (' + m.n + ')' : '—') + '</td><td><button class="btn alt sm" data-act="jpStart" data-t="' + t + '">▶</button></td></tr>'; }).join('') + '</table></div>'; };
  ST.views.transfer = p => { p = p || {}; const t = p.t || 'dash', s = A.state; return '<div class="card glow"><h2 style="margin:0">Laboratorio decisioni</h2><p class="small mute">Transfer, diario e previsioni · dati locali e privati.</p>' + tabs(t) + '</div>' + (t === 'jour' ? jour(s) : t === 'fore' ? fore(s) : t === 'tr' ? tr(s) : t === 'rwd' ? rwd(s) : t === 'cog' ? cog(s) : t === 'cs' ? cs(s) : t === 'voc' ? voc(s) : t === 'kj' ? kjv(s) : t === 'dlg' ? dlgv(s) : t === 'jp' ? jpv(s) : t === 'tt' ? ttv(s) : dash(s)); };
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
  X.csStart = el => {
    const id = el.dataset.id, CS = ST.cases, c = CS.CASES.find(x => x.id === id), items = c ? CS.itemsOf(c) : U.shuffle(CS.RESEARCH.slice()); A.ctx = 'general';
    ST.runner.start({ title: c ? c.title : 'Lettura critica della ricerca', kind: 'free', items, ctx: 'general', onAnswer: () => {} });
  };
  X.vocStart = el => {
    const s = A.state, items = ST.vocab.session(s, el.dataset.l, 10); if (!items.length) return A.toast('Nessuna parola disponibile: studia prima un argomento di lingua.');
    A.ctx = 'general'; ST.runner.start({ title: 'Lessico attivo', kind: 'free', items, ctx: 'general', onAnswer: (it, ok) => { ST.vocab.grade(s, it, ok); A.save(); } });
  };
  X.ttSel = el => { A.ttSel = el.dataset.pr || null; A.render(); };
  X.ttStep = el => {
    const s = A.state, pr = el.dataset.pr, n = +el.dataset.n, TT = ST.tt;
    if (n === 1) { TT.done(s, pr, 1); A.save(); return A.render(); }
    if (n === 4) { const note = val('tt-note'); if (!note) return A.toast('Descrivi la situazione'); TT.done(s, pr, 4, note); T.jAdd(s, { sit: '[Applicazione] ' + ST.kg.PRINCIPLES[pr].t + ': ' + note, goal: 'Applicare il principio nella vita reale', choice: note, check: U.addDays(U.today(), TT.GAP) }); A.save(); return A.render(); }
    A.ctx = 'general';
    if (n === 5) ST.runner.start({ title: 'Verifica differita', kind: 'free', items: [TT.delayedItem(s, pr)], ctx: 'general', onAnswer: (it, ok) => { TT.done(s, pr, 5, ok); T.record(s, 'tr:' + pr, 'delayed', ok, {}); A.save(); } });
    else ST.runner.start({ title: ST.kg.PRINCIPLES[pr].t, kind: 'free', items: [TT.item(pr, n)], ctx: 'general', onAnswer: () => { TT.done(s, pr, n); A.save(); } });
  };
  X.kjStart = el => {
    const s = A.state, KJ = ST.kanji, t = el.dataset.t, items = t === 'mix' ? KJ.session(s, 10) : Array.from({ length: 8 }, () => KJ.make(t, 1, U.rand, s)); A.ctx = 'general';
    ST.runner.start({ title: t === 'mix' ? 'Kanji · sessione mista' : KJ.LABEL[t], kind: 'free', items, ctx: 'general', onAnswer: (it, ok) => { KJ.record(s, it.mtype, ok); A.xp(ok ? 2 : 0, 'kj:' + it.mtype); A.save(); } });
  };
  X.dlgOpen = el => { A.dlg = el.dataset.id ? { id: el.dataset.id, node: ST.dialog.byId(el.dataset.id).start, log: [] } : null; A.render(); };
  X.dlgPick = el => {
    const st = A.dlg, DL = ST.dialog, d = DL.byId(st.id), r = DL.step(d, st.node, +el.dataset.i); st.log.push(r); st.node = r.next;
    if (d.nodes[st.node].end) { T.record(A.state, 'dlg:' + st.id, 'auto', DL.score(st.log) >= 0.8, {}); A.xp(3, 'dlg:' + st.id); A.save(); }
    A.render();
  };
  X.jpStart = el => {
    const s = A.state, JP = ST.jprod, t = el.dataset.t, items = t === 'mix' ? JP.session(10) : Array.from({ length: 8 }, () => JP.make(t)); A.ctx = 'general';
    ST.runner.start({ title: t === 'mix' ? 'Produzione · sessione mista' : JP.LABEL[t], kind: 'free', items, ctx: 'general', onAnswer: (it, ok) => { JP.record(s, it.mtype, ok); A.xp(ok ? 2 : 0, 'jp:' + it.mtype); A.save(); } });
  };
  X.jExport = () => { const b = new Blob([T.exportJournal(A.state)], { type: 'application/json' }), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'skilltree-diario.json'; a.click(); };
})(window.ST = window.ST || {});
