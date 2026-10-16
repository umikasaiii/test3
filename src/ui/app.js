/* SkillTree — guscio dell'app: stato, navigazione a pila, barra superiore, eventi, tempo attivo. */
(function (ST) {
  'use strict';
  const U = ST.util, P = ST.progress;
  const A = ST.app = { state: null, stack: [], tab: 'home', ctx: null };
  ST.views = {};      // name -> (params) => html
  ST.after = {};      // name -> (el, params) => void   (hook post-render)
  ST.acts = {};       // data-act -> (el, ev) => void

  const $ = (q, r) => (r || document).querySelector(q);
  A.$ = $;
  A.save = () => ST.storage.save(A.state);
  A.toast = (msg, ms) => {
    const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; t.setAttribute('role', 'status');
    document.body.appendChild(t); setTimeout(() => t.remove(), ms || 2600);
  };
  A.theme = () => { document.documentElement.setAttribute('data-theme', A.state.profile.theme || 'neon'); };

  A.view = () => A.stack.length ? A.stack[A.stack.length - 1] : { name: A.tab, p: {} };
  A.go = (name, p) => { A.stack.push({ name, p: p || {} }); try { history.pushState({ d: A.stack.length }, ''); } catch (e) { /* file:// può rifiutare */ } A.render(true); };
  A.replace = (name, p) => { A.stack[A.stack.length - 1] = { name, p: p || {} }; A.render(); };
  A.back = () => {
    if (!A.stack.length) return;
    let used = false;
    try { if (history.state && history.state.d) { history.back(); used = true; } } catch (e) { /* ignora */ }
    if (!used) { A.stack.pop(); A.render(true); }
  };
  A.setTab = t => { A.stack = []; A.tab = t; A.render(true); };
  window.addEventListener('popstate', () => {
    if (A.stack.length) { A.stack.pop(); A.render(true); }
    else if (A.tab !== 'home') { A.tab = 'home'; A.render(true); }
  });

  /* ---- tempo attivo (stima onesta: i minuti sono misurati dall'interazione, con soglia di inattività) ---- */
  let lastTouch = Date.now();
  const touch = () => {
    const now = Date.now(), dt = now - lastTouch;
    lastTouch = now;
    if (dt > 0 && dt < 45000 && A.ctx && A.state) {
      const d = (A.state.daily[U.today()] = A.state.daily[U.today()] || {});
      d.active = d.active || {};
      d.active[A.ctx] = (d.active[A.ctx] || 0) + dt / 60000;
    }
  };
  document.addEventListener('pointerdown', touch, true);
  document.addEventListener('keydown', touch, true);
  A.activeMin = ctx => { const d = A.state.daily[U.today()]; return d && d.active ? Math.round(d.active[ctx] || 0) : 0; };

  /* ---- giornata ---- */
  A.day = (date) => { const k = date || U.today(); return (A.state.daily[k] = A.state.daily[k] || { en: {}, ja: {}, general: {}, active: {} }); };
  A.streak = () => {
    let n = 0, d = U.today();
    const has = k => { const x = A.state.daily[k]; return x && ((x.active && Object.values(x.active).some(v => v >= 1)) || Object.values(x.en || {}).some(Boolean) || Object.values(x.ja || {}).some(Boolean) || Object.values(x.general || {}).some(Boolean)); };
    if (!has(d)) d = U.addDays(d, -1);
    while (has(d)) { n++; d = U.addDays(d, -1); }
    return n;
  };
  A.xp = (amount, key) => {
    const before = P.levelInfo(A.state.xp).level;
    const g = P.award(A.state, amount, key);
    const now = P.levelInfo(A.state.xp).level;
    if (now > before) A.toast('🎉 Livello generale ' + now + '!', 3200);
    A.save(); A.topbar();
    return g;
  };
  A.subjectTouch = id => { A.state.last = A.state.last || {}; A.state.last[id] = U.today(); };

  /* ---- barra superiore ---- */
  A.topbar = () => {
    const li = P.levelInfo(A.state.xp);
    $('#top').innerHTML = '<div class="row"><span class="lv">Lv ' + li.level + '</span><b>' + A.state.xp.toLocaleString('it-IT') + ' XP</b><span class="sp"></span><span class="mute">🔥 ' + A.streak() + ' gg</span></div>' +
      '<div class="bar" aria-label="Progresso verso il livello successivo"><i style="width:' + li.pct + '%"></i></div>' +
      '<div class="sub"><span>' + (li.level >= P.MAX_LEVEL ? 'Livello massimo' : 'Prossimo livello: ' + li.remaining.toLocaleString('it-IT') + ' XP') + '</span><span>XP = partecipazione, non padronanza</span></div>';
  };

  A.tabs = [['home', '🌳', 'Home'], ['paths', '🧭', 'Percorsi'], ['practice', '🎯', 'Pratica'], ['progress', '📊', 'Progresso'], ['more', '⚙️', 'Altro']];
  A.renderTabs = () => {
    const cur = A.stack.length ? null : A.tab;
    $('#tabs').innerHTML = A.tabs.map(t => '<button data-act="tab" data-tab="' + t[0] + '" class="' + ((cur === t[0] || (!cur && A.rootTab === t[0])) ? 'on' : '') + '" aria-label="' + t[2] + '"><b>' + t[1] + '</b>' + t[2] + '</button>').join('');
  };

  let lastKey = '';
  A.render = (fresh) => {
    const v = A.view();
    if (!A.state.onboarded && v.name !== 'onboard') { A.stack = []; A.tab = 'onboard'; }
    const cur = A.view();
    A.rootTab = A.stack.length ? (A.stack[0].root || A.tab) : A.tab;
    const fn = ST.views[cur.name];
    const el = $('#app');
    el.innerHTML = fn ? fn(cur.p) : '<p>Vista non trovata: ' + U.esc(cur.name) + '</p>';
    el.className = (A.state.profile.furigana === false ? 'nofur' : '');
    if (ST.after[cur.name]) ST.after[cur.name](el, cur.p);
    A.topbar(); A.renderTabs(); if (ST.langFab) ST.langFab();
    $('#tabs').style.display = (cur.name === 'onboard') ? 'none' : '';
    const key = cur.name + JSON.stringify(cur.p || {});
    if (fresh || key !== lastKey) window.scrollTo(0, 0);
    lastKey = key;
  };

  /* ---- eventi ---- */
  document.addEventListener('click', ev => {
    const el = ev.target.closest('[data-act]');
    if (!el) return;
    const fn = ST.acts[el.dataset.act];
    if (fn) { ev.preventDefault(); try { fn(el, ev); } catch (e) { console.error(e); A.toast('Errore: ' + e.message); } }
  });
  ST.acts.tab = el => A.setTab(el.dataset.tab);
  ST.acts.back = () => A.back();
  ST.acts.go = el => A.go(el.dataset.view, el.dataset.p ? JSON.parse(el.dataset.p) : {});
  ST.acts.say = el => {
    const lang = el.dataset.lang === 'ja' ? 'ja-JP' : el.dataset.lang === 'en' ? A.state.profile.accents.en || 'en-GB' : el.dataset.lang;
    ST.audio.speak(el.dataset.text, { lang }).then(r => { if (!r.ok) A.toast(ST.audio.explain(r.reason), 4500); });
  };
  window.addEventListener('error', e => { try { A.errors = (A.errors || []).concat(e.message).slice(-10); } catch (x) { /* ignora */ } });

  /* ---- avvio ---- */
  A.init = async () => {
    ST.content.finalize();
    A.state = await ST.storage.load();
    A.theme();
    if (ST.injectArt) ST.injectArt();
    ST.storage.persistRequest();
    if (window.location.protocol !== 'file:' && 'serviceWorker' in navigator) { try { navigator.serviceWorker.register('sw.js'); } catch (e) { /* ignora */ } }
    ST.audio.ready();
    A.render(true);
  };
})(window.ST = window.ST || {});
