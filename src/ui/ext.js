/* SkillTree — approfondimenti esterni guidati: schede «cosa cercare» generate dalla lezione, registro delle attività esterne e controllo dopo 7 giorni. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, X = ST.acts, T = ST.transfer;
  const KINDS = { read: 'Lettura', listen: 'Ascolto', video: 'Video o corso', talk: 'Conversazione', pron: 'Pronuncia', practice: 'Esercizio pratico', study: 'Studio di un libro' };
  const val = id => { const e = document.getElementById(id); return e ? e.value.trim() : ''; };
  /* termini in grassetto delle pagine, senza duplicati */
  const terms = t => { const out = [], seen = new Set(); t.pages.forEach(p => (p.b.match(/\*\*[^*]{3,40}\*\*/g) || []).forEach(m => { const x = m.slice(2, -2).replace(/[:.;,]+$/, '').trim(); const k = x.toLowerCase(); if (!seen.has(k) && !/^\d/.test(x)) { seen.add(k); out.push(x); } })); return out.slice(0, 8); };
  ST.extPrompts = t => {
    const tr = terms(t), P = [];
    if (tr.length >= 2) P.push('Cerca una definizione e un esempio reale di: ' + tr.slice(0, 3).join(', ') + '.');
    (t.objectives || []).slice(0, 3).forEach(o => P.push('Cerca un caso, un esempio o un esercizio che mostri: «' + o.charAt(0).toLowerCase() + o.slice(1) + '».'));
    P.push('Cerca una fonte autorevole (manuale, corso universitario o ente ufficiale) su «' + t.title + '» e confronta numeri e regole con la lezione: se differiscono, annota la differenza.');
    P.push('Scrivi cinque frasi di riepilogo in inglese o in giapponese e confrontale con il riepilogo qui sopra.');
    return P;
  };
  ST.extHtml = t => {
    const s = A.state, mine = (s.ext || []).filter(x => x.topic === t.id), P = ST.extPrompts(t);
    return '<details class="card"><summary><b>🔎 Approfondisci fuori dalla piattaforma</b> <span class="mute small">· facoltativo' + (mine.length ? ' · ' + mine.length + ' registrati' : '') + '</span></summary>' +
      '<ol class="small">' + P.map(x => '<li>' + E(x) + '</li>').join('') + '</ol>' +
      '<p class="small mute">Le fonti da cercare le scegli tu: non indico titoli o indirizzi che non posso verificare. Dopo 7 giorni ti chiederò cosa ricordi.</p>' +
      '<select id="ext-kind" class="inp">' + Object.keys(KINDS).map(k => '<option value="' + k + '">' + KINDS[k] + '</option>').join('') + '</select> <input id="ext-min" class="inp" type="number" min="1" max="600" placeholder="minuti" style="width:90px"> <input id="ext-note" class="inp" placeholder="cosa hai studiato (una riga)" style="width:100%;margin-top:6px"><button class="btn block" data-act="extAdd" data-id="' + t.id + '" style="margin-top:8px">Registra l’approfondimento</button></details>';
  };
  X.extAdd = el => {
    const s = A.state, t = ST.content.topic(el.dataset.id), min = parseInt(val('ext-min'), 10);
    if (isNaN(min) || min < 1) return A.toast('Indica i minuti');
    (s.ext = s.ext || []).push({ id: Date.now().toString(36), topic: t.id, kind: val('ext-kind'), min, note: val('ext-note') || t.title, d: U.today(), rev: null });
    T.record(s, 'ext:' + t.id, 'external', true, {}); A.xp(Math.min(10, Math.ceil(min / 10)), 'ext:' + t.id); A.save(); A.toast('Registrato · controllo tra 7 giorni'); A.render();
  };
  const due = s => (s.ext || []).filter(x => x.rev == null && U.diffDays(x.d, U.today()) >= 7);
  X.extReview = el => { const s = A.state, x = (s.ext || []).find(y => y.id === el.dataset.id), v = el.dataset.v; if (!x) return; x.rev = v; T.record(s, 'ext:' + x.topic, 'delayed', v === 'good', { check: 7 }); A.save(); A.render(); };
  ST.extView = s => {
    const all = s.ext || [], hrs = list => (list.reduce((a, x) => a + x.min, 0) / 60).toFixed(1), week = all.filter(x => U.diffDays(x.d, U.today()) < 7), month = all.filter(x => U.diffDays(x.d, U.today()) < 30);
    const byKind = Object.keys(KINDS).map(k => [k, all.filter(x => x.kind === k)]).filter(x => x[1].length);
    return '<div class="card"><h3>Studio esterno</h3><p class="small mute">Registra qui letture, ascolti, conversazioni e corsi fuori dall’app. Il controllo dopo 7 giorni è un’autovalutazione: serve a vedere cosa resta.</p>' +
      '<p class="small">Ore: <b>' + hrs(week) + '</b> negli ultimi 7 giorni · <b>' + hrs(month) + '</b> negli ultimi 30 · <b>' + hrs(all) + '</b> in totale</p>' +
      (byKind.length ? '<table class="t">' + byKind.map(x => '<tr><td>' + KINDS[x[0]] + '</td><td>' + hrs(x[1]) + ' h</td><td>' + x[1].length + ' voci</td></tr>').join('') + '</table>' : '<p class="small mute">Nessuna attività registrata. Dalla fine di ogni lezione trovi la scheda «Approfondisci fuori dalla piattaforma».</p>') + '</div>' +
      '<div class="card"><h3>Da ripassare (dopo 7 giorni)</h3>' + (due(s).length ? due(s).map(x => '<div class="small" style="margin:8px 0"><b>' + E(x.note) + '</b> · ' + KINDS[x.kind] + ' · ' + x.d + '<div class="mute">Senza guardare gli appunti: cosa ricordi? Scrivi due frasi su carta, poi valuta onestamente.</div><button class="btn" data-act="extReview" data-id="' + x.id + '" data-v="good">Ricordo bene</button> <button class="btn alt" data-act="extReview" data-id="' + x.id + '" data-v="part">In parte</button> <button class="btn alt" data-act="extReview" data-id="' + x.id + '" data-v="no">Poco o nulla</button></div>').join('') : '<p class="small mute">Niente da ripassare ora.</p>') + '</div>';
  };
})(window.ST = window.ST || {});
