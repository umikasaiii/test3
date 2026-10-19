/* SkillTree vNext — Strategic Mastery Academy: nucleo condiviso (registrazione, stato, profilo, registro dei laboratori).
   Pacchetto SEPARATO da index.html (vedi vnext/INTEGRATION.md). Usa solo le API esistenti: ST.content, ST.views, ST.after, ST.acts,
   ST.transfer (evidenze), ST.app (stato e salvataggio). Nessuna dipendenza di rete. */
(function (ST) {
  'use strict';
  const U = ST.util, C = ST.content, A = ST.app, E = U.esc;
  const M = ST.sma = { VERSION: '0.2.0', milestone: 'M1-M2 (nucleo)' };

  /* ---- quattro pilastri (archetipi ispirati a personaggi di fantasia, come richiamo mnemonico: nessuna pretesa di equivalenza) ---- */
  M.PILLARS = {
    det: { id: 'det', icon: '🔎', title: 'Detective Intelligence', arch: 'L', dim: 'deduction', color: '#7aa2ff',
      skills: ['Ragionamento deduttivo e induttivo', 'Ragionamento probabilistico e bayesiano', 'Ipotesi concorrenti', 'Fatti vs supposizioni', 'Contraddizioni', 'Affidabilità delle fonti', 'Spiegazioni alternative', 'Riduzione dei bias', 'Aggiornamento delle convinzioni'] },
    pln: { id: 'pln', icon: '♟', title: 'Multi-Layer Planning', arch: 'Light', dim: 'planning', color: '#b48cff',
      skills: ['Pianificazione a più mosse', 'Alberi decisionali', 'Conseguenze di 2° e 3° ordine', 'Incentivi e teoria dei giochi', 'Pianificazione contingente', 'Punti deboli di una strategia', 'Reazioni altrui', 'Piani A, B e C robusti'] },
    ada: { id: 'ada', icon: '🧭', title: 'Adaptive Strategy', arch: 'Lelouch', dim: 'adaptability', color: '#5ee0c0',
      skills: ['Adattamento agli imprevisti', 'Gestione delle risorse', 'Strategia competitiva e cooperativa', 'Vincoli e colli di bottiglia', 'Decisioni sequenziali', 'Gestione del rischio', 'Cambiare strategia quando serve', 'Valutazione delle opportunità'] },
    ldr: { id: 'ldr', icon: '🛡', title: 'Leadership & Decisions', arch: 'Erwin', dim: 'leadership', color: '#ffb86b',
      skills: ['Leadership situazionale', 'Decisioni con informazioni incomplete', 'Coordinamento delle persone', 'Comunicazione strategica', 'Priorità', 'Analisi dei rischi', 'Gestione delle crisi', 'Responsabilità delle decisioni'] }
  };
  M.PILLAR_IDS = Object.keys(M.PILLARS);

  /* ---- sei livelli di padronanza ---- */
  M.LEVELS = [
    { id: 'L0', title: 'Foundations', goals: ['Distinguere fatti, ipotesi e opinioni', 'Definire obiettivi', 'Riconoscere vincoli', 'Probabilità e conseguenze', 'Semplici errori di ragionamento'] },
    { id: 'L1', title: 'Analytical Thinking', goals: ['Analizzare problemi strutturati', 'Confrontare alternative', 'Formulare ipotesi', 'Identificare rischi', 'Giustificare decisioni semplici'] },
    { id: 'L2', title: 'Tactical Reasoning', goals: ['Pianificare più mosse', 'Informazioni incomplete', 'Incentivi e reazioni', 'Più variabili'] },
    { id: 'L3', title: 'Advanced Strategy', goals: ['Scenari complessi', 'Risorse limitate', 'Aggiornare strategie', 'Avversari adattivi', 'Conseguenze indirette'] },
    { id: 'L4', title: 'Real-World Strategic Application', goals: ['Applicare modelli a situazioni quotidiane', 'Progetti e imprevisti', 'Confrontare previsioni ed esiti', 'Trovare errori nei propri ragionamenti'] },
    { id: 'L5', title: 'Strategic Mastery', goals: ['Integrare più modelli', 'Problemi nuovi e aperti', 'Obiettivi e vincoli contrastanti', 'Motivare le decisioni', 'Adattamento e autocorrezione', 'Evidenze ripetute di applicazione reale'] }
  ];
  M.LEVEL_NOTE = 'I livelli sono interni all’app e descrivono prestazioni misurate qui. L5 non è una prova di intelligenza eccezionale né di competenza universale; il profilo non è una valutazione psicometrica validata.';

  /* ---- sette dimensioni del profilo (mai un punteggio unico) ---- */
  M.DIMS = { deduction: 'Deduction', planning: 'Planning', adaptability: 'Adaptability', decision: 'Decision Quality', calibration: 'Forecast Calibration', leadership: 'Leadership & Communication', application: 'Real-Life Application' };

  /* ---- soggetto e stage ---- */
  const st = (id, title, desc) => ({ id, title, desc, topics: [] });
  C.defineSubject({ id: 'sma', title: 'Strategic Mastery Academy', icon: '🜂', primary: false, optional: true, color: '#b48cff',
    goal: 'Specializzazione facoltativa: ragionamento deduttivo, pianificazione, previsione, adattamento e decisioni, con simulazioni, laboratori e applicazione nella vita reale.',
    stageNote: M.LEVEL_NOTE,
    stages: M.LEVELS.map(l => st(l.id, l.title, l.goals.join(' · '))) });
  /* registra un modulo didattico (stesso DSL delle altre materie) con il pilastro di appartenenza */
  M.topic = o => {
    if (!M.PILLARS[o.pillar]) throw new Error('Pilastro sconosciuto: ' + o.pillar);
    return C.addTopic(Object.assign({ subject: 'sma', minutes: 15 }, o));
  };

  /* ---- stato persistente (dentro lo stato esistente: backup e importazione lo includono) ---- */
  M.S = s => { const x = (s.sma = s.sma || {}); x.v = x.v || 1; x.labs = x.labs || {}; x.missions = x.missions || []; x.diary = x.diary || []; x.cases = x.cases || {}; x.sims = x.sims || {}; x.forecast = x.forecast || []; return x; };

  /* ---- evidenze: stesse categorie di ST.transfer, con chiave sma:<dimensione>:<id> ---- */
  M.record = (s, dim, key, kind, ok, o) => ST.transfer.record(s, 'sma:' + dim + ':' + key, kind, ok, o);
  M.profile = s => {
    const out = {}; Object.keys(M.DIMS).forEach(d => { out[d] = { n: 0, ok: 0, noHelp: 0, noHelpOk: 0, kinds: {} }; });
    Object.keys(s.skills || {}).forEach(id => {
      const m = /^sma:([a-z]+):/.exec(id); if (!m || !out[m[1]]) return;
      const o = out[m[1]];
      s.skills[id].hist.forEach(h => { o.n++; if (h.ok) o.ok++; if (!h.help) { o.noHelp++; if (h.ok) o.noHelpOk++; } o.kinds[h.k] = (o.kinds[h.k] || 0) + 1; });
    });
    return out;
  };

  /* ---- registro dei laboratori: ready=false significa che NON è ancora implementato e non viene presentato come disponibile ---- */
  M.labs = [];
  M.registerLab = l => { const i = M.labs.findIndex(x => x.id === l.id); if (i >= 0) M.labs[i] = l; else M.labs.push(l); return l; };
  M.pendingLabs = [
    { id: 'deduction', title: 'Deduction Lab', milestone: 'M3' }, { id: 'multimove', title: 'Multi-Move Strategy Simulator', milestone: 'M3' },
    { id: 'opponent', title: 'Adaptive Opponent', milestone: 'M3' }, { id: 'forecast', title: 'Forecasting & Calibration Lab', milestone: 'M3' },
    { id: 'crisis', title: 'Crisis Management Lab', milestone: 'M3' }, { id: 'comm', title: 'Strategic Communication Lab', milestone: 'M3' },
    { id: 'strategos', title: 'STRATEGOS · missioni reali e diario decisionale', milestone: 'M4' }
  ];
  const labState = id => { const r = M.labs.find(l => l.id === id); return r && r.ready ? r : null; };
  M.labState = labState;

  /* ---- avanzamento dei livelli: raccomandazione soft, mai blocco ---- */
  M.levelProgress = (s, lv) => {
    const ts = C.topicsOf('sma').filter(t => t.stage === lv); let st = 0, pr = 0, ve = 0;
    ts.forEach(t => { const x = ST.progress.topicStatus(s, t.id); if (ST.progress.atLeast(x, 'studied')) st++; if (ST.progress.atLeast(x, 'practiced')) pr++; if (ST.progress.atLeast(x, 'verified')) ve++; });
    return { total: ts.length, studied: st, practiced: pr, verified: ve };
  };
  M.levelRecommended = (s, i) => i === 0 || (() => { const p = M.levelProgress(s, M.LEVELS[i - 1].id); return p.total === 0 || p.practiced / p.total >= 0.7; })();

  /* ---- hub (anteposto alla vista standard della materia, che continua a mostrare livelli e argomenti) ---- */
  M.hub = s => {
    const prof = M.profile(s), lab = M.labs;
    let h = '<div class="card glow sma-hub"><h2 style="margin:0">Strategic Mastery Academy</h2>' +
      '<p class="small mute">Specializzazione facoltativa: 2 sedute settimanali da 15–45 min (consigliati 20–30) e una terza opzionale di transfer reale. Non fa parte delle 3 missioni quotidiane e nessuna settimana saltata penalizza il percorso principale.</p>' +
      '<p class="warn small">' + E(M.LEVEL_NOTE) + '</p></div>';
    h += '<div class="card"><h3>Quattro percorsi</h3><div class="list">' + M.PILLAR_IDS.map(id => {
      const p = M.PILLARS[id], n = C.topicsOf('sma').filter(t => t.pillar === id).length;
      return '<div class="item" style="border-left:3px solid ' + p.color + '"><span class="ic">' + p.icon + '</span><span class="tx"><b>' + E(p.title) + '</b><span>' + n + ' moduli · ' + E(p.skills.slice(0, 4).join(' · ')) + '…</span></span></div>';
    }).join('') + '</div></div>';
    h += '<div class="card"><h3>Profilo (prestazioni misurate nell’app)</h3><p class="small mute">Sette dimensioni separate, mai un punteggio unico. «Senza aiuto» conta solo i tentativi senza suggerimenti.</p>' + Object.keys(M.DIMS).map(d => {
      const o = prof[d], pc = o.n ? Math.round(100 * o.ok / o.n) : null;
      return '<div class="sma-dim"><span>' + E(M.DIMS[d]) + '</span><span class="sma-bar"><i style="width:' + (pc || 0) + '%"></i></span><small>' + (o.n ? pc + '% su ' + o.n + ' prove' + (o.noHelp ? ' · senza aiuto ' + Math.round(100 * o.noHelpOk / o.noHelp) + '%' : '') : 'nessuna prova') + '</small></div>';
    }).join('') + '</div>';
    h += '<div class="card"><h3>Laboratori</h3><div class="list">' + lab.map(l => '<button class="item" data-act="' + E(l.act || 'go') + '"' + (l.act ? '' : ' data-view="' + E(l.view) + '"') + (l.p ? ' data-p=\'' + E(JSON.stringify(l.p)) + '\'' : '') + Object.keys(l.data || {}).map(k => ' data-' + k + '="' + E(l.data[k]) + '"').join('') + '><span class="tx"><b>' + E(l.title) + '</b><span>' + E(l.desc || '') + '</span></span><span class="tag good">disponibile</span></button>').join('') +
      M.pendingLabs.filter(p => !labState(p.id)).map(p => '<div class="item"><span class="tx"><b>' + E(p.title) + '</b><span>Non ancora implementato · previsto in ' + p.milestone + '</span></span><span class="tag">in arrivo</span></div>').join('') + '</div></div>';
    h += '<div class="card"><h3>Livelli consigliati</h3>' + M.LEVELS.map((l, i) => {
      const p = M.levelProgress(s, l.id);
      return '<p class="small" style="margin:6px 0"><b>' + l.id + ' · ' + E(l.title) + '</b> ' + (M.levelRecommended(s, i) ? '' : '<span class="tag">consigliato dopo ' + M.LEVELS[i - 1].id + '</span> ') + '<span class="mute">' + p.total + ' moduli · ' + p.practiced + ' esercitati · ' + p.verified + ' verificati</span></p>';
    }).join('') + '</div>';
    return h;
  };

  /* ---- aggancio alle viste esistenti senza modificarle: la vista materia 'sma' riceve il hub; la home riceve una tessera ---- */
  const V = ST.views;
  const baseSubject = V.subject;
  V.subject = p => (p && p.id === 'sma') ? M.hub(A.state) + baseSubject(p) : baseSubject(p);
  const baseHome = ST.after.home;
  ST.after.home = (el, p) => {
    if (baseHome) baseHome(el, p);
    if (el.querySelector('[data-sma-tile]')) return;
    const g = el.querySelector('.grid2'); if (!g) return;
    g.insertAdjacentHTML('afterend', '<button class="tile" data-sma-tile data-act="go" data-view="subject" data-p=\'{"id":"sma"}\' style="margin-top:8px"><b>🜂 Strategic Mastery Academy</b><span>Specializzazione facoltativa · deduzione, pianificazione, previsione</span></button>');
  };
})(window.ST = window.ST || {});
