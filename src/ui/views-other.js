/* SkillTree — Pratica, Progresso, Altro e reindirizzamenti dall'hub dell'argomento. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress, PL = ST.plan, C = ST.content, A = ST.app, E = U.esc, V = ST.views, X = ST.acts;

  /* ---- reindirizzamenti dall'hub di un argomento ---- */
  const redirect = (name, fn) => { V[name] = p => { setTimeout(() => { A.stack.pop(); fn(p); }, 0); return '<p class="mute center">Preparazione…</p>'; }; };
  const lg = id => C.topic(id).subject === 'eng' ? 'en' : 'ja';
  redirect('listenTopic', p => X.startListening(lg(p.id), { topic: p.id }));
  redirect('dictTopic', p => X.startDictation(lg(p.id), { topic: p.id }));
  redirect('shadowTopic', p => X.startShadow(lg(p.id), { topic: p.id }));
  redirect('speakTopic', p => X.startSpeak(lg(p.id), { topic: p.id }));
  redirect('readTopic', p => X.startReading(lg(p.id), { topic: p.id }));

  /* ---- Pratica ---- */
  V.practice = () => {
    const s = A.state, lang = s.profile.pl || 'en', due = ST.cards.dueCount(s, lang), dueAll = ST.cards.dueCount(s);
    const t = (icon, title, sub, act, extra) => '<button class="tile" data-act="' + act + '" ' + (extra || '') + '><b>' + icon + ' ' + title + '</b><span>' + sub + '</span></button>';
    return '<h1>Pratica</h1><div class="seg"><button class="' + (lang === 'en' ? 'on' : '') + '" data-act="plang" data-l="en">🇬🇧 Inglese</button><button class="' + (lang === 'ja' ? 'on' : '') + '" data-act="plang" data-l="ja">🇯🇵 Giapponese</button></div>' +
      '<h2>Laboratori linguistici</h2><div class="grid2">' +
      t('🔁', 'Ripasso', due + ' dovuti (' + dueAll + ' totali)', 'p-review') +
      t('🎧', 'Ascolto', 'senza testo · domande', 'p-listen') +
      t('📝', 'Dettato', 'ascolta e scrivi', 'p-dict') +
      t('🗣️', 'Shadowing', 'ripeti e registra', 'p-shadow') +
      t('💬', 'Risposta spontanea', 'parlato guidato', 'p-speak') +
      t('🗨️', 'Conversazione', 'dialoghi ramificati', 'p-convo') +
      t('📰', 'Lettura', 'testi e domande', 'p-read') +
      t('✏️', 'Scrittura', 'testo libero', 'p-write') +
      t('🧪', 'Mini-esame', 'richiamo cumulativo', 'p-mini') +
      t('⏱️', 'Esame di stadio', 'cronometrato · soglia 75%', 'p-stage') +
      t('⚙️', 'Grammatica generata', 'forme verbali · errori spiegati', 'p-drill') +
      (lang === 'ja' ? t('あ', 'Kana Trainer', 'riconoscimento rapido', 'p-kana') : t('🎯', 'Prova B2', 'ascolto / lettura (indicatore)', 'go', 'data-view="b2"')) +
      t('📺', 'Contenuti graduati', 'cosa ascoltare/leggere fuori dall’app', 'go', 'data-view="resources"') +
      '</div><h2>Generale</h2><div class="grid2">' + t('🧠', 'Allenamento mentale', '5 min · adattivo', 'startMental') + t('🥋', 'Judo 5′', 'sessione di oggi', 'go', 'data-view="judoSession"') + t('📚', 'Teoria di oggi', E(PL.THEORY_LABEL[PL.THEORY[U.weekday()]]), 'startTheory') + t('🔊', 'Diagnostica audio', 'voci, microfono', 'go', 'data-view="audioTest"') + '</div>' +
      '<p class="mute small" style="margin-top:12px">Tutte le attività qui sono libere: la missione giornaliera suggerisce l’ordine e i tempi.</p>';
  };
  const pl = () => A.state.profile.pl || 'en';
  X.plang = el => { A.state.profile.pl = el.dataset.l; A.save(); A.render(); };
  X['p-review'] = () => { A.pb = null; if (ST.cards.dueCount(A.state, pl())) X.startReview(pl()); else X.startCardsFree(pl()); };
  X['p-listen'] = () => { A.pb = null; X.startListening(pl()); };
  X['p-dict'] = () => { A.pb = null; X.startDictation(pl()); };
  X['p-shadow'] = () => { A.pb = null; X.startShadow(pl()); };
  X['p-speak'] = () => { A.pb = null; X.startSpeak(pl()); };
  X['p-convo'] = () => { A.pb = null; X.startConvo(pl()); };
  X['p-read'] = () => { A.pb = null; X.startReading(pl()); };
  X['p-write'] = () => { A.pb = null; X.startWrite(pl()); };
  X['p-mini'] = () => { A.pb = null; X.startMini(pl()); };
  X['p-stage'] = () => { A.pb = null; X.startStageExam(pl()); };
  X['p-drill'] = () => { A.pb = null; X.startDrill(pl()); };
  X['p-kana'] = () => { A.pb = null; X.startKana(); };

  /* ---- Contenuti graduati ---- */
  V.resources = () => {
    const lang = A.state.profile.pl || 'en', R = C.resources;
    const idx = Math.max(0, ...L_studied(lang).map(t => C.STAGES.indexOf(t.stage)));
    const bandNow = lang === 'en' ? (idx <= 1 ? 'B1' : idx === 2 ? 'B1+' : idx === 3 ? 'B2' : 'B2+') : 'J' + Math.min(5, idx);
    const inBand = (b, cur) => lang === 'en' ? b === cur : (b.match(/J\d/g) || []).some(x => Math.abs(+x[1] - +cur[1]) <= 0) || (b.includes('–') && +cur[1] >= +b.match(/J(\d)/)[1] && +cur[1] <= +b.match(/–J(\d)/)[1]);
    const items = R.items.filter(x => x.lang === lang);
    const bands = [...new Set(items.map(x => x.band))];
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>📺 Contenuti graduati</h1><div class="seg"><button class="' + (lang === 'en' ? 'on' : '') + '" data-act="plang" data-l="en">🇬🇧 Inglese</button><button class="' + (lang === 'ja' ? 'on' : '') + '" data-act="plang" data-l="ja">🇯🇵 Giapponese</button></div>' +
      '<div class="card"><h3>Come usarli</h3><ul class="small">' + R.method[lang].map(E).map(x => '<li>' + x + '</li>').join('') + '</ul></div>' +
      '<p class="mute small">Livello suggerito dai tuoi progressi: <b>' + bandNow + '</b> (indicativo, non è una certificazione). I materiali sono indicati per nome: verifica disponibilità e lingua dei sottotitoli la prima volta.</p>' +
      bands.map(b => '<h2>' + E(b) + (inBand(b, bandNow) ? ' <span class="tag good">per te ora</span>' : '') + '</h2><div class="list">' + items.filter(x => x.band === b).map(x => '<div class="item" style="align-items:flex-start"><span class="ic">' + ({ Podcast: '🎧', Video: '▶️', 'Video / TV': '📺', TV: '📺', Serie: '🎬', Anime: '🎬', Dorama: '🎬', Lettura: '📖', 'Notizie lente': '📰' })[x.type] + '</span><span class="tx"><b>' + E(x.title) + '</b><span>' + E(x.type) + (x.accent ? ' · ' + E(x.accent) : '') + ' · ' + E(x.where) + ' · sottotitoli: ' + E(x.subs) + '</span><span style="display:block;margin-top:4px">' + E(x.how) + '</span></span></div>').join('') + '</div>').join('');
  };
  const L_studied = lang => ST.labs.studied(lang);

  /* ---- Prove B2 (ascolto/lettura) ---- */
  V.b2 = () => {
    const s = A.state, rep = PL.b2Report(s);
    const lab = { none: 'Nessuna prova', partial: 'Prove parziali', 'in-app': 'Indicatore in-app superato', external: 'Evidenza esterna' };
    return '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🎯 Prove B2</h1><p class="warn small">Queste prove sono <b>indicatori in-app</b> su materiali limitati. Per dichiarare un B2 servono prove indipendenti e rappresentative sulle quattro abilità; parlato e scrittura richiedono sempre evidenza esterna (docente o esame).</p>' +
      '<div class="card"><h3>Criterio in-app</h3><p class="small">Ascolto o lettura: almeno 6 prove diverse, svolte in almeno 3 giorni diversi, con media ≥ 75%. Ogni prova si usa una sola volta.</p>' + rep.map(r => '<p class="row"><b style="width:90px">' + ({ listening: 'Ascolto', reading: 'Lettura', speaking: 'Parlato', writing: 'Scrittura' })[r.skill] + '</b><span class="tag ' + (r.status === 'in-app' || r.status === 'external' ? 'good' : r.status === 'partial' ? 'warn' : '') + '">' + lab[r.status] + '</span></p>').join('') + '</div>' +
      '<div class="grid2"><button class="tile" data-act="gate" data-s="listening"><b>🎧 Prova di ascolto</b><span>' + gateLeft('listening') + ' disponibili</span></button><button class="tile" data-act="gate" data-s="reading"><b>📰 Prova di lettura</b><span>' + gateLeft('reading') + ' disponibili</span></button></div>' +
      '<button class="btn alt block" style="margin-top:12px" data-act="evidence" data-lang="en">+ Registra evidenza esterna (certificato, docente, esame)</button>';
  };
  const gateLeft = skill => { const used = new Set(A.state.exams.filter(e => e.kind === 'gate' && e.skill === skill).map(e => e.item)); return C.gate[skill].filter(x => !used.has(x.id)).length; };
  X.gate = el => X.startGate(el.dataset.s);
  X.evidence = el => {
    const lang = el.dataset.lang;
    const skills = lang === 'en' ? ['listening', 'reading', 'speaking', 'writing'] : ['ascolto', 'parlato', 'lettura', 'scrittura'];
    const sk = prompt('Abilità attestata (' + skills.join(' / ') + ')?'); if (!sk) return;
    const key = skills.includes(sk.trim().toLowerCase()) ? sk.trim().toLowerCase() : null; if (!key) { A.toast('Abilità non riconosciuta.'); return; }
    const src = prompt('Fonte (es. certificato Cambridge B2, docente Mario Rossi, simulazione esame)?'); if (!src) return;
    const s = A.state; s.gates[lang] = s.gates[lang] || {};
    const g = s.gates[lang][key] = s.gates[lang][key] || { evidence: [] };
    g.evidence.push({ date: U.today(), source: src }); A.save(); A.toast('Evidenza registrata.'); A.render();
  };

  /* ---- Progresso ---- */
  const bar = (n, tot, cls) => '<div class="prog ' + (cls || '') + '"><i style="width:' + (tot ? Math.round(100 * n / tot) : 0) + '%"></i></div>';
  V.progress = () => {
    const s = A.state, li = P.levelInfo(s.xp), m = PL.minutes(s);
    let h = '<h1>Progresso</h1><div class="card glow"><h3>Livello generale ' + li.level + ' / ' + P.MAX_LEVEL + '</h3><p>' + s.xp.toLocaleString('it-IT') + ' XP · mancano ' + li.remaining.toLocaleString('it-IT') + ' al livello successivo</p>' + bar(li.into, li.span) +
      '<p class="mute small">L’XP misura la <b>partecipazione</b>. Non è completamento, conoscenza verificata né competenza pratica: questi livelli sono separati qui sotto.</p></div>';
    // settimana
    const days = Array.from({ length: 7 }, (_, i) => U.addDays(U.today(), i - 6));
    h += '<div class="card"><h3>Ultimi 7 giorni (minuti attivi)</h3><div class="row" style="align-items:flex-end;height:70px">' + days.map(d => { const x = s.daily[d], v = x && x.active ? Object.values(x.active).reduce((a, b) => a + b, 0) : 0; return '<div class="sp center"><div style="height:' + Math.min(60, v) + 'px;background:linear-gradient(var(--acc2),var(--acc));border-radius:6px 6px 0 0;min-height:2px"></div><div class="small mute">' + d.slice(8) + '</div></div>'; }).join('') + '</div><p class="mute small">Mese di corso ' + m.month + ' · piano ' + m.en + '′ inglese / ' + m.ja + '′ giapponese / ' + m.general + '′ generale.</p></div>';
    // materie
    h += '<h2>Per materia: quattro piani distinti</h2>';
    C.subjects.filter(x => x.primary && !x.motor && !x.generated).concat([C.subject('sec')]).forEach(sub => {
      const c = ST.topicCounts(sub.id);
      h += '<div class="card"><h3>' + sub.icon + ' ' + E(sub.title) + '</h3><dl class="kv"><dt>Lezioni lette</dt><dd>' + c.studied + '/' + c.total + bar(c.studied, c.total) + '</dd><dt>Esercitati</dt><dd>' + c.practiced + '/' + c.total + bar(c.practiced, c.total) + '</dd><dt>Verificati</dt><dd>' + c.verified + '/' + c.total + bar(c.verified, c.total, 'good') + '</dd><dt>Mantenuti</dt><dd>' + c.retained + '/' + c.total + bar(c.retained, c.total, 'good') + '</dd></dl>' +
        (sub.lang ? '<p class="mute small">Stage interni ' + sub.stages[0].id + '–' + sub.stages[5].id + ' · ' + (sub.id === 'jpn' ? 'non equivalgono a JLPT/CEFR.' : 'non equivalgono a livelli CEFR.') + '</p>' : '<p class="mute small">Pillole introduttive: non assegnano livelli.</p>') + '</div>';
    });
    // inglese B2
    const rep = PL.b2Report(s);
    h += '<div class="card"><h3>🇬🇧 Inglese · gate B2 (quattro abilità)</h3>' + rep.map(r => '<p class="row"><b style="width:90px">' + ({ listening: 'Ascolto', reading: 'Lettura', speaking: 'Parlato', writing: 'Scrittura' })[r.skill] + '</b><span class="tag ' + (['in-app', 'external'].includes(r.status) ? 'good' : r.status === 'partial' ? 'warn' : '') + '">' + ({ none: 'non verificato', partial: 'parziale', 'in-app': 'indicatore in-app', external: 'evidenza esterna' })[r.status] + '</span></p>').join('') +
      '<p class="' + (m.b2 ? '' : 'warn') + ' small">' + (m.b2 ? 'B2 verificato su tutte le abilità: la fase 3 (inglese 15′) può applicarsi dal mese 17.' : 'B2 NON verificato: la fase 3 non si applica; l’inglese resta a 20–25 minuti.') + '</p><button class="btn alt sm" data-act="go" data-view="b2">Prove B2</button></div>';
    h += '<div class="card"><h3>🇯🇵 Giapponese · evidenza esterna</h3><p class="small">' + (((s.gates.ja && Object.keys(s.gates.ja).length) ? Object.keys(s.gates.ja).map(k => '<span class="tag good">' + E(k) + '</span>').join(' ') : 'Nessuna evidenza registrata.')) + '</p><p class="mute small">L’autonomia comunicativa va confermata con un docente o madrelingua (o una prova ufficiale). Gli stage J0–J5 non sono livelli JLPT.</p><button class="btn alt sm" data-act="evidence" data-lang="ja">+ Registra evidenza</button></div>';
    // judo
    const J = C.judo.techniques;
    h += '<div class="card"><h3>🥋 Judo · memoria motoria (autovalutata)</h3><table class="t"><tr><th>Tecnica</th><th>Stato</th><th>Ultimo</th><th>Prossimo</th></tr>' + J.map(t => { const r = s.motor[t.id]; return '<tr><td>' + E(t.name.split(':')[0]) + '</td><td>' + (r ? E(ST.motor.label(r)) : '—') + '</td><td>' + (r ? r.card.last || '—' : '') + '</td><td>' + (r ? r.card.due : '') + '</td></tr>'; }).join('') + '</table><p class="mute small">Stadio motorio: ' + ST.motor.stage(s) + '. Nessun dato qui prova la capacità di applicare la tecnica contro un avversario che resiste.</p></div>';
    // memoria
    const cards = Object.values(s.cards), by = { new: 0, learning: 0, consolidating: 0, consolidated: 0 };
    cards.forEach(c => { by[c.state] = (by[c.state] || 0) + 1; });
    const last30 = (s.reviewLog || []).filter(x => U.diffDays(x.d, U.today()) <= 30), ok30 = last30.filter(x => x.ok).length;
    h += '<div class="card"><h3>🔁 Memoria e ripasso</h3><dl class="kv"><dt>Carte attive</dt><dd>' + cards.length + '</dd><dt>In apprendimento</dt><dd>' + (by.learning || 0) + '</dd><dt>In consolidamento</dt><dd>' + (by.consolidating || 0) + '</dd><dt>Consolidate</dt><dd>' + (by.consolidated || 0) + '</dd><dt>Dovute ora</dt><dd>' + ST.cards.dueCount(s) + '</dd><dt>Richiamo corretto (30 gg)</dt><dd>' + (last30.length ? Math.round(100 * ok30 / last30.length) + '% su ' + last30.length : '—') + '</dd></dl></div>';
    h += '<div class="card"><h3>🎙️ Parlato e scrittura registrati</h3><p class="small">' + s.rec.length + ' registrazioni/autovalutazioni · ' + (s.writing ? s.writing.length : 0) + ' testi scritti.</p><p class="mute small">Servono a vedere i tuoi progressi nel tempo; non sostituiscono la valutazione di un docente.</p></div>';
    return h;
  };

  /* ---- Altro ---- */
  V.more = () => {
    const s = A.state, p = s.profile;
    return '<h1>Altro</h1>' +
      '<div class="card"><h3>Profilo e tema</h3><label class="small mute">Nome</label><input type="text" id="m-name" value="' + E(p.name) + '"><label class="small mute" style="display:block;margin-top:8px">Data di inizio corso</label><input type="date" id="m-start" value="' + E(s.startDate) + '"><label class="small mute" style="display:block;margin-top:8px">Tema</label><select id="m-theme">' + ST.themeOpts(p.theme) + '</select><button class="btn block" style="margin-top:10px" data-act="m-save">Salva</button></div>' +
      '<div class="card"><h3>Audio</h3><label class="small mute">Velocità voce (' + p.rate + ')</label><input type="range" id="m-rate" min="0.5" max="1.2" step="0.05" value="' + p.rate + '"><label class="small mute" style="display:block;margin-top:8px">Accento inglese preferito</label><select id="m-acc">' + ['en-GB', 'en-US', 'en-AU'].map(a => '<option' + (p.accents.en === a ? ' selected' : '') + '>' + a + '</option>').join('') + '</select><div class="row" style="margin-top:10px"><button class="btn alt" data-act="m-audio">Salva audio</button><button class="btn alt" data-act="go" data-view="audioTest">Diagnostica</button></div></div>' +
      '<div class="card"><h3>Backup e ripristino</h3><p class="mute small">I dati sono salvati in <b>' + E(ST.storage.mode() || '…') + '</b>. Fai un backup regolare: se cambi dispositivo, svuoti i dati del browser o sposti il file, potresti perdere i progressi.</p><div class="grid2"><button class="btn alt" data-act="m-export">⬇ Esporta backup</button><button class="btn alt" data-act="m-export-a">⬇ Con registrazioni</button></div><input type="file" id="m-file" accept="application/json,.json" hidden><button class="btn alt block" style="margin-top:8px" data-act="m-import">⬆ Importa backup</button>' + (window.location.protocol === 'file:' ? '<p class="warn small" style="margin-top:8px">Stai usando il file direttamente (file://): lo spazio di archiviazione dipende dal percorso del file.</p>' : '') + '</div>' +
      '<div class="card"><h3>Informazioni</h3><p class="small">SkillTree Academy · versione ' + ST.VERSION + ' · schema dati ' + ST.storage.SCHEMA + '.</p><p class="mute small">Audio, microfono e persistenza dipendono dal dispositivo: usa «Diagnostica audio» per verificare voci TTS e registrazione sul tuo telefono.</p></div>' +
      '<div class="card"><h3>Zona pericolosa</h3><button class="btn alt block" data-act="m-reset" style="border-color:var(--bad)">Cancella tutti i dati</button></div>';
  };
  X['m-save'] = () => { const s = A.state; s.profile.name = A.$('#m-name').value.trim(); const d = A.$('#m-start').value; if (d) s.startDate = d; s.profile.theme = A.$('#m-theme').value; A.theme(); A.save(); A.toast('Salvato'); A.render(); };
  X['m-audio'] = () => { const s = A.state; s.profile.rate = +A.$('#m-rate').value; s.profile.accents.en = A.$('#m-acc').value; A.save(); A.toast('Audio salvato'); };
  const download = (name, text) => { const b = new Blob([text], { type: 'application/json' }), u = URL.createObjectURL(b), a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { a.remove(); URL.revokeObjectURL(u); }, 1500); };
  X['m-export'] = async () => { const o = await ST.storage.exportAll(false); download('skilltree-backup-' + U.today() + '.json', JSON.stringify(o)); A.toast('Backup esportato'); };
  X['m-export-a'] = async () => { const o = await ST.storage.exportAll(true); download('skilltree-backup-audio-' + U.today() + '.json', JSON.stringify(o)); A.toast('Backup con registrazioni esportato'); };
  X['m-import'] = () => { const f = A.$('#m-file'); f.onchange = async () => { const file = f.files[0]; if (!file) return; try { const obj = JSON.parse(await file.text()); const err = ST.storage.validate(obj); if (err) { A.toast(err, 5000); return; } if (!confirm('Importare il backup? Lo stato attuale verrà sostituito.')) return; A.state = await ST.storage.importAll(obj); A.theme(); A.toast('Backup importato'); A.setTab('home'); } catch (e) { A.toast('Backup non valido: ' + e.message, 5000); } }; f.click(); };
  X['m-reset'] = async () => { if (!confirm('Cancellare TUTTI i dati? Operazione irreversibile.')) return; A.state = ST.storage.defaults(); await ST.storage.flush(); ST.storage.save(A.state); await ST.storage.flush(); A.theme(); A.setTab('home'); };

  /* ---- Diagnostica audio ---- */
  V.audioTest = () => '<div class="row"><button class="btn alt sm" data-act="back">← Indietro</button></div><h1>🔊 Diagnostica audio</h1><p class="mute small">Verifica sul tuo dispositivo reale: i test automatici non possono garantire l’audio su Android.</p><div id="diag" class="card">Analisi in corso…</div>' +
    '<div class="card"><h3>Prova voci</h3><div class="grid2"><button class="btn alt" data-act="say" data-lang="en-GB" data-text="Hello, this is a British English test.">en-GB</button><button class="btn alt" data-act="say" data-lang="en-US" data-text="Hello, this is an American English test.">en-US</button><button class="btn alt" data-act="say" data-lang="en-AU" data-text="Hello, this is an Australian English test.">en-AU</button><button class="btn alt" data-act="say" data-lang="ja-JP" data-text="こんにちは。これは日本語のテストです。">ja-JP</button></div></div>' +
    '<div class="card"><h3>Microfono</h3><button class="btn alt" data-act="mic-test">Prova registrazione (3 s)</button><p id="mic-out" class="mute small"></p></div>';
  ST.after.audioTest = async () => {
    const d = await ST.audio.diagnose(), el = A.$('#diag'); if (!el) return;
    const row = (k, v, ok) => '<tr><td>' + k + '</td><td><span class="tag ' + (ok ? 'good' : 'bad') + '">' + E(String(v)) + '</span></td></tr>';
    el.innerHTML = '<table class="t">' + row('Protocollo', d.protocol, d.protocol !== 'file:') + row('Contesto sicuro', d.secure ? 'sì' : 'no', d.secure) + row('Sintesi vocale', d.tts ? 'disponibile' : 'assente', d.tts) + row('Voci installate', d.voices.length, d.voices.length > 0) +
      ['en-GB', 'en-US', 'en-AU', 'ja-JP'].map(l => row('Voce ' + l, d.langs[l] || 'non trovata (si userà la più vicina)', !!d.langs[l])).join('') + row('Microfono (getUserMedia)', d.mic ? 'sì' : 'no', d.mic) + row('Registrazione (MediaRecorder)', d.recorder ? 'sì' : 'no', d.recorder) + '</table>' +
      (!d.voices.length ? '<p class="warn small">Nessuna voce rilevata. Su Android: Impostazioni → Sistema → Lingua → Sintesi vocale → installa i dati voce (Google). Poi riapri Chrome.</p>' : '') +
      (d.protocol === 'file:' ? '<p class="warn small">File locale (file://): il microfono può richiedere il permesso a ogni utilizzo e alcuni browser limitano le funzioni. Se possibile, servi il file via https.</p>' : '');
  };
  X['mic-test'] = async () => { const out = A.$('#mic-out'); try { out.textContent = 'Registrazione…'; await ST.audio.rec.start(); await new Promise(r => setTimeout(r, 3000)); const b = await ST.audio.rec.stop(); out.textContent = 'Registrato ' + Math.round(b.size / 1024) + ' KB. Riproduzione…'; const r = await ST.audio.playBlob(b); out.textContent = r.ok ? 'Riproduzione completata ✓' : 'Riproduzione non riuscita'; } catch (e) { out.textContent = e.message; } };
})(window.ST = window.ST || {});
