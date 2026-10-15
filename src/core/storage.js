/* SkillTree — stato, persistenza (IndexedDB con fallback localStorage), migrazioni e backup. */
(function (ST) {
  'use strict';
  const U = ST.util;
  const DB = ST.storage = {};
  DB.SCHEMA = 3;
  DB.APP = 'skilltree';

  DB.defaults = () => ({
    schema: DB.SCHEMA, created: U.today(), startDate: U.today(), onboarded: false,
    profile: { name: '', theme: 'neon', rate: 0.9, accents: { en: 'en-GB' }, judoTracks: ['judo'] },
    xp: 0, xpLog: {}, xpKeys: {},
    topics: {}, cards: {}, reviewLog: [],
    kana: { items: {}, placed: false, lastSession: null },
    motor: {}, mental: {}, theory: {}, skills: {}, vocab: {}, journal: [], forecasts: [], 
    exams: [], gates: { en: {} }, rec: [],
    daily: {}, resume: {}, settings: { sound: true },
    log: []
  });

  /* Migrazioni: ogni passo porta da n a n+1. I progressi non si perdono fra versioni. */
  const MIGRATIONS = {
    2: s => { s.skills = s.skills || {}; s.journal = s.journal || []; s.forecasts = s.forecasts || []; return s; },
    1: s => { // v1 → v2: stato teorico e registro giornaliero separati
      s.theory = s.theory || {}; s.daily = s.daily || {}; s.resume = s.resume || {}; s.gates = s.gates || { en: {} };
      s.kana = s.kana || { items: {}, placed: false, lastSession: null };
      return s;
    }
  };
  DB.migrate = raw => {
    let s = Object.assign(DB.defaults(), raw);
    let v = raw && raw.schema || 1;
    while (v < DB.SCHEMA) { if (MIGRATIONS[v]) s = MIGRATIONS[v](s); v++; }
    s.schema = DB.SCHEMA;
    return s;
  };

  /* ---- IndexedDB ---- */
  let dbp = null, mode = 'none';
  const open = () => dbp || (dbp = new Promise((res, rej) => {
    if (!window.indexedDB) return rej(new Error('no-idb'));
    const rq = indexedDB.open('skilltree', 1);
    rq.onupgradeneeded = () => { const db = rq.result; if (!db.objectStoreNames.contains('kv')) db.createObjectStore('kv'); if (!db.objectStoreNames.contains('rec')) db.createObjectStore('rec'); };
    rq.onsuccess = () => res(rq.result);
    rq.onerror = () => rej(rq.error);
    rq.onblocked = () => rej(new Error('blocked'));
  }));
  const tx = (store, m, fn) => open().then(db => new Promise((res, rej) => {
    const t = db.transaction(store, m), os = t.objectStore(store), rq = fn(os);
    t.oncomplete = () => res(rq && rq.result);
    t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
  }));

  DB.mode = () => mode;
  DB.load = async () => {
    let raw = null;
    try { raw = await tx('kv', 'readonly', os => os.get('state')); mode = 'IndexedDB'; }
    catch (e) { mode = 'localStorage'; }
    if (!raw) { try { const t = localStorage.getItem('skilltree.state'); if (t) raw = JSON.parse(t); } catch (e) { /* ignora */ } }
    // Copia sincrona scritta alla chiusura della pagina: se è più recente, vince (IndexedDB è asincrono e può perdere l'ultimo salvataggio).
    try {
      const t = localStorage.getItem('skilltree.pending');
      if (t) { const p = JSON.parse(t); if (!raw || (p._ts || 0) > (raw._ts || 0)) raw = p; localStorage.removeItem('skilltree.pending'); }
    } catch (e) { /* ignora */ }
    return raw ? DB.migrate(raw) : DB.defaults();
  };

  let timer = null, pending = null, lastError = null;
  DB.lastError = () => lastError;
  const write = async state => {
    state._ts = Date.now();
    const snap = JSON.stringify(state);
    try { await tx('kv', 'readwrite', os => os.put(JSON.parse(snap), 'state')); mode = 'IndexedDB'; lastError = null; try { localStorage.removeItem('skilltree.pending'); } catch (e) { /* ignora */ } }
    catch (e) {
      mode = 'localStorage';
      try { localStorage.setItem('skilltree.state', snap); lastError = null; } catch (e2) { lastError = 'Salvataggio non riuscito: ' + e2.message; }
    }
  };
  DB.save = state => { pending = state; clearTimeout(timer); timer = setTimeout(() => { const s = pending; pending = null; if (s) write(s); }, 250); };
  DB.flush = async () => { clearTimeout(timer); if (pending) { const s = pending; pending = null; await write(s); } };
  const mirror = () => {   // scrittura sincrona di sicurezza (la pagina può chiudersi prima che IndexedDB completi)
    const s = pending || (ST.app && ST.app.state);
    if (!s) return;
    try { s._ts = Date.now(); localStorage.setItem('skilltree.pending', JSON.stringify(s)); } catch (e) { /* spazio esaurito: IndexedDB resta la copia principale */ }
  };
  window.addEventListener('pagehide', () => { mirror(); DB.flush(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { mirror(); DB.flush(); } });

  /* ---- Registrazioni vocali (Blob) ---- */
  DB.putRec = async (id, blob) => { try { await tx('rec', 'readwrite', os => os.put(blob, id)); return true; } catch (e) { return false; } };
  DB.getRec = id => tx('rec', 'readonly', os => os.get(id)).catch(() => null);
  DB.delRec = id => tx('rec', 'readwrite', os => os.delete(id)).catch(() => null);

  const b64 = blob => new Promise(r => { const f = new FileReader(); f.onload = () => r(String(f.result)); f.readAsDataURL(blob); });
  const unb64 = async url => (await fetch(url)).blob();

  /* ---- Backup ---- */
  DB.exportAll = async (withAudio) => {
    await DB.flush();
    const state = (ST.app && ST.app.state) || await DB.load();
    const out = { app: DB.APP, schema: DB.SCHEMA, exported: new Date().toISOString(), state, recordings: {} };
    if (withAudio) for (const r of state.rec) { const b = await DB.getRec(r.id); if (b) out.recordings[r.id] = await b64(b); }
    return out;
  };
  DB.validate = obj => {
    if (!obj || typeof obj !== 'object') return 'File non valido.';
    if (obj.app !== DB.APP) return 'Il file non è un backup di SkillTree.';
    if (!obj.state || typeof obj.state !== 'object') return 'Il backup non contiene lo stato.';
    if ((obj.schema || 0) > DB.SCHEMA) return 'Backup creato da una versione più recente dell’app.';
    return null;
  };
  DB.importAll = async obj => {
    const err = DB.validate(obj);
    if (err) throw new Error(err);
    const state = DB.migrate(obj.state);
    for (const id of Object.keys(obj.recordings || {})) await DB.putRec(id, await unb64(obj.recordings[id]));
    await write(state);
    return state;
  };
  DB.persistRequest = async () => { try { return navigator.storage && navigator.storage.persist ? await navigator.storage.persist() : false; } catch (e) { return false; } };
})(window.ST = window.ST || {});
