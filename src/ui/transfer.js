/* SkillTree — Laboratorio decisioni: dashboard competenze, diario delle decisioni, previsioni. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, T = ST.transfer;
  const val = id => { const e = document.getElementById(id); return e ? e.value.trim() : ''; };
  const tabs = t => '<div class="row" style="gap:6px;flex-wrap:wrap">' + [['dash', 'Competenze'], ['jour', 'Diario'], ['fore', 'Previsioni']].map(x => '<button class="btn' + (t === x[0] ? '' : ' ghost') + '" data-act="go" data-view="transfer" data-p=\'{"t":"' + x[0] + '"}\'>' + x[1] + '</button>').join('') + '</div>';
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
  ST.views.transfer = p => { p = p || {}; const t = p.t || 'dash', s = A.state; return '<div class="card glow"><h2 style="margin:0">Laboratorio decisioni</h2><p class="small mute">Transfer, diario e previsioni · dati locali e privati.</p>' + tabs(t) + '</div>' + (t === 'jour' ? jour(s) : t === 'fore' ? fore(s) : dash(s)); };
  const re = () => { A.save(); A.render(); };
  X.jAdd = () => { const s = A.state, p = parseInt(val('j-p'), 10); if (!val('j-sit') || !val('j-choice')) return A.toast && A.toast('Servono almeno situazione e scelta'); T.jAdd(s, { sit: val('j-sit'), goal: val('j-goal'), opts: val('j-opts'), hyp: val('j-hyp'), p: isNaN(p) ? null : Math.max(0, Math.min(100, p)), choice: val('j-choice'), why: val('j-why'), check: val('j-check') }); re(); };
  X.jClose = el => { T.jClose(A.state, el.dataset.id, val('o-' + el.dataset.id), val('l-' + el.dataset.id)); re(); };
  X.fAdd = () => { const p = parseInt(val('f-p'), 10); if (!val('f-q') || isNaN(p) || p < 1 || p > 99) return A.toast && A.toast('Evento e probabilità 1–99'); T.fAdd(A.state, val('f-q'), p, val('f-ev'), val('f-due')); re(); };
  X.fRes = el => { T.fResolve(A.state, el.dataset.id, el.dataset.v === '1'); re(); };
  X.fUpd = el => { const p = parseInt(val('u-' + el.dataset.id), 10); if (!isNaN(p) && p >= 1 && p <= 99) T.fUpdate(A.state, el.dataset.id, p); re(); };
  X.jExport = () => { const b = new Blob([T.exportJournal(A.state)], { type: 'application/json' }), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'skilltree-diario.json'; a.click(); };
})(window.ST = window.ST || {});
