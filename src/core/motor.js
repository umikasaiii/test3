/* SkillTree — scheduler motorio (judo/lotta). 5 minuti al giorno, solo esercizi solitari e sicuri.
   Registra per ogni tecnica: ultimo allenamento, richiami, difficoltà, qualità, errori ricorrenti,
   prossima data, stato e (separata) eventuale verifica di un istruttore.
   La valutazione autonoma NON è una validazione tecnica esterna. */
(function (ST) {
  'use strict';
  const U = ST.util, S = ST.srs, PL = ST.plan;
  const M = ST.motor = {};

  M.rec = (state, id) => state.motor[id];
  M.active = state => Object.keys(state.motor).filter(id => state.motor[id].introduced);
  M.defs = () => ST.content.judo.techniques;
  /* Percorsi: 'judo' (sempre) e 'lotta' (no-gi, opzionale dal profilo). */
  M.tracks = state => { const p = (state && state.profile) || {}, base = (p.judoTracks || ['judo']).filter(t => t !== 'clinch'); return p.clinchOff ? base : base.concat('clinch'); };
  M.defsFor = state => M.defs().filter(t => M.tracks(state).includes(t.track || 'judo'));
  M.def = id => ST.content.judo.techniques.find(t => t.id === id);

  M.mean = (rec, n) => {
    const l = (rec.log || []).slice(-n);
    return l.length ? l.reduce((a, x) => a + x.quality, 0) / l.length : 0;
  };

  /* Una nuova tecnica entra solo se: (1) il mese del corso lo consente, (2) le tecniche attive
     sono abbastanza stabili (media qualità ≥ 3 sugli ultimi 2 richiami), (3) sono passati ≥ 10 giorni
     dall'ultima introduzione, (4) al massimo 2 tecniche sono ancora in fase "learning". */
  M.nextToIntroduce = (state, date) => {
    date = date || U.today();
    const mo = U.monthIndex(state.startDate || date, date);
    const act = M.active(state).map(id => state.motor[id]);
    const next = M.defsFor(state).find(t => !state.motor[t.id] && mo >= t.minMonth);
    if (!next) return null;
    if (act.length) {
      const lastIntro = act.map(r => r.introduced).sort().pop();
      if (U.diffDays(lastIntro, date) < 10) return null;
      const learning = act.filter(r => r.card.state === 'learning' || r.card.state === 'new');
      if (learning.length > 2) return null;
      if (act.some(r => r.log.length >= 2 && M.mean(r, 2) < 3)) return null;
    }
    return next;
  };

  M.introduce = (state, techId, date) => {
    date = date || U.today();
    state.motor[techId] = { introduced: date, card: S.newCard({ due: U.addDays(date, 1) }), log: [], errors: {}, instructor: null };
    return state.motor[techId];
  };

  M.dueScore = (state, id, date) => {
    const r = state.motor[id];
    return (r.card.due <= date ? 1 : 0) * (1 + S.overdueDays(r.card, date)) * (1 + (r.card.lapses || 0) * 0.5);
  };

  /* Sceglie ciò che si fa oggi, secondo la rotazione settimanale approvata. */
  M.pickForDay = (state, date) => {
    date = date || U.today();
    const wd = U.weekday(date), slot = PL.JUDO_SLOT[wd];
    const act = M.active(state);
    const out = { slot, weekday: wd, items: [], intro: null, rest: wd === 6, reason: '' };
    if (slot === 'theory') { out.reason = 'Domenica: nessun lavoro fisico.'; return out; }
    const byDue = act.slice().sort((a, b) => M.dueScore(state, b, date) - M.dueScore(state, a, date));
    const newest = act.slice().sort((a, b) => state.motor[b].introduced.localeCompare(state.motor[a].introduced));
    const movement = act.filter(id => (M.def(id).tags || []).includes('movement'));
    const dueNow = act.filter(id => state.motor[id].card.due <= date);

    if (slot === 'intro') {
      const next = M.nextToIntroduce(state, date);
      if (next) { out.intro = next.id; out.items = [next.id]; out.reason = 'Nuova tecnica: ' + next.name; }
      else if (act.length) {
        const weak = act.slice().sort((a, b) => M.mean(state.motor[a], 3) - M.mean(state.motor[b], 3))[0];
        out.items = [weak]; out.reason = 'Perfezionamento: la tecnica con qualità media più bassa.';
      } else { const f = M.defs()[0]; out.intro = f.id; out.items = [f.id]; out.reason = 'Prima tecnica del percorso.'; }
    } else if (slot === 'consolidate') {
      const cur = newest.find(id => state.motor[id].card.state !== 'consolidated') || newest[0];
      if (cur) { out.items = [cur]; out.reason = 'Consolida la tecnica più recente non ancora consolidata.'; }
    } else if (slot === 'movement') {
      const pool = movement.length ? movement : act;
      const sorted = pool.slice().sort((a, b) => (state.motor[a].card.last || '').localeCompare(state.motor[b].card.last || ''));
      if (sorted.length) { out.items = sorted.slice(0, 2); out.reason = 'Spostamenti, equilibrio e tai sabaki: i meno allenati di recente.'; }
    } else if (slot === 'variant') {
      const older = byDue.filter(id => id !== newest[0]);
      const pickId = (older.length ? older : byDue)[0];
      if (pickId) { out.items = [pickId]; out.variant = true; out.reason = 'Ripasso con variante: tecnica più in ritardo.'; }
    } else if (slot === 'random') {
      // Richiamo casuale pesato: più in ritardo/più fragile = più probabile. Nessuna dimostrazione.
      const pool = act.slice();
      const picks = [];
      while (picks.length < Math.min(3, pool.length)) {
        const ws = pool.map(id => 1 + M.dueScore(state, id, date) * 3 + (state.motor[id].card.last ? Math.min(U.diffDays(state.motor[id].card.last, date), 60) / 15 : 2));
        const tot = ws.reduce((a, b) => a + b, 0);
        let x = U.rand() * tot, i = 0;
        while (i < ws.length - 1 && x > ws[i]) { x -= ws[i]; i++; }
        picks.push(pool.splice(i, 1)[0]);
      }
      out.items = picks; out.reason = 'Richiamo casuale pesato su tutte le tecniche studiate.';
    } else if (slot === 'combo') {
      const ready = act.filter(id => state.motor[id].card.state !== 'new');
      const stable = (ready.length >= 2 ? ready : act);
      const combo = (ST.content.judo.combos || []).find(c => c.ids.every(id => stable.includes(id)));
      out.items = combo ? combo.ids.slice() : U.sample(stable, Math.min(3, stable.length));
      out.combo = combo ? combo.name : 'Sequenza libera';
      out.reason = 'Combinazione e mini-verifica motoria.';
    }
    // Mai una sessione vuota: al primo giorno (o se il giorno non ha tecniche idonee) si parte dal repertorio.
    if (!out.items.length) {
      if (!act.length) { const f = M.defs()[0]; out.slot = 'intro'; out.intro = f.id; out.items = [f.id]; out.reason = 'Prima tecnica del percorso.'; }
      else { out.items = [byDue[0]]; out.reason = (out.reason || '') + ' Nessuna tecnica specifica per oggi: si ripassa la più in ritardo.'; }
      return out;
    }
    // Una tecnica scaduta non resta fuori: se la giornata non la include, si aggiunge (max 3 voci totali).
    const overdue = byDue.filter(id => dueNow.includes(id) && !out.items.includes(id) && state.motor[id].card.due < date);
    if (overdue.length && out.items.length < 3 && slot !== 'intro') { out.items.push(overdue[0]); out.reason += ' + ripasso scaduto.'; }
    return out;
  };

  /* Suddivisione dei 300 secondi: si adatta a complessità, qualità recente e necessità di recupero. */
  M.phases = (state, techId) => {
    const t = M.def(techId), r = state.motor[techId];
    let p = { recall: 30, slow: 150, vary: 90, check: 30 };
    const q = r ? M.mean(r, 3) : 0, st = r ? r.card.state : 'new';
    if (!r || st === 'new' || q > 0 && q < 3) p = { recall: 30, slow: 180, vary: 60, check: 30 };
    else if (st === 'consolidated' && q >= 4) p = { recall: 45, slow: 75, vary: 135, check: 45 };
    if ((t.complexity || 1) >= 3) { p.slow += 15; p.vary -= 15; }
    return p;
  };

  /* Registra una sessione. quality 1–5 (autovalutata), difficulty 1–5, errors: tag[]. */
  M.log = (state, techId, quality, difficulty, errors, date) => {
    date = date || U.today();
    const r = state.motor[techId];
    r.log.push({ date, quality, difficulty, errors: errors || [] });
    if (r.log.length > 200) r.log.shift();
    (errors || []).forEach(e => { r.errors[e] = (r.errors[e] || 0) + 1; });
    let grade = S.gradeFromSelf(quality, difficulty);
    // Un errore ricorrente (≥3 volte negli ultimi 5 richiami) limita l'allungamento dell'intervallo.
    const recent = r.log.slice(-5);
    const counts = {};
    recent.forEach(x => (x.errors || []).forEach(e => { counts[e] = (counts[e] || 0) + 1; }));
    const recurring = Object.keys(counts).filter(e => counts[e] >= 3);
    r.card = S.review(r.card, grade, date);
    if (recurring.length && r.card.interval > 7) { r.card.interval = 7; r.card.due = U.addDays(date, 7); }
    r.recurring = recurring;
    return r;
  };

  M.verifyByInstructor = (state, techId, note, date) => {
    state.motor[techId].instructor = { date: date || U.today(), note: note || '' };
  };

  M.label = r => !r ? 'Non iniziata' : r.instructor ? 'Verificata da istruttore' : ({ new: 'Nuova', learning: 'In apprendimento', consolidating: 'In consolidamento', consolidated: 'Consolidata (autovalutata)' })[r.card.state];

  /* Stadio motorio L0–L5 derivato dal progresso (non dai XP). */
  M.stage = (state, date) => {
    const mo = U.monthIndex(state.startDate || (date || U.today()), date);
    const act = M.active(state).map(id => ({ d: M.def(id), r: state.motor[id] }));
    const cons = act.filter(x => ['consolidating', 'consolidated'].includes(x.r.card.state)).length;
    const has = tag => act.some(x => x.d.stage === tag);
    let s = 'L0';
    if (cons >= 3 && has('L1')) s = 'L1';
    if (s === 'L1' && cons >= 5 && has('L2')) s = 'L2';
    if (s === 'L2' && cons >= 7 && has('L3')) s = 'L3';
    if (s === 'L3' && mo >= 13 && cons >= 8) s = 'L4';
    if (s === 'L4' && mo >= 19 && act.filter(x => x.r.card.state === 'consolidated').length >= 8) s = 'L5';
    return s;
  };
})(window.ST = window.ST || {});
