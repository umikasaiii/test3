/* SkillTree — esecutore di esercizi: scelta, risposta digitata, ordinamento e prove di allenamento mentale. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, E = U.esc, V = ST.views, X = ST.acts, K = ST.kana;
  const R = ST.runner = {};
  let timers = [];
  const clearTimers = () => { timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers = []; };

  /* cfg: {title, items, kind, back, onAnswer(item, ok, idx), onFinish(results) => html|undefined, xpPer, xpKey, ctx} */
  R.start = cfg => {
    A.run = Object.assign({ i: 0, res: [], phase: 'q', xpPer: 3 }, cfg);
    A.run.items = cfg.items.filter(Boolean);
    if (!A.run.items.length) { A.toast('Nessun elemento disponibile.'); return; }
    prep();
    A.ctx = cfg.ctx || A.ctx;
    A.go('run');
  };
  const prep = () => {
    const r = A.run, it = r.items[r.i];
    const cur = Object.assign({}, it);
    if (it.t === 'mc' || it.t === 'flash') {
      const order = U.shuffle(it.o.map((_, i) => i));
      cur.o2 = order.map(i => it.o[i]); cur.a2 = order.indexOf(it.a);
    }
    if (it.t === 'order') cur.tok = U.shuffle(it.words.map((w, i) => ({ w, i })));
    cur.placed = [];
    r.cur = cur; r.phase = 'q'; r.t0 = Date.now(); r.spanShown = false;
  };

  const sayBtn = s => s ? '<button class="btn alt sm" data-act="run-say" aria-label="Ascolta">🔊 Ascolta</button> ' : '';
  V.run = () => {
    const r = A.run;
    if (!r) return '<p>Nessuna sessione attiva.</p>';
    clearTimers();
    if (r.phase === 'done') return summary();
    const it = r.cur, n = r.items.length;
    let h = '<div class="row"><button class="btn alt sm" data-act="run-quit">✕ Esci</button><span class="sp"></span><span class="mute small">' + E(r.title) + ' · ' + (r.i + 1) + '/' + n + '</span>' + (r.deadline ? '<span class="pill" id="clk" style="margin-left:8px">⏱</span>' : '') + (it.timed ? '<span class="pill" id="itclk" style="margin-left:8px">⏱ ' + it.timed + 's</span>' : '') + '</div>' +
      '<div class="prog" style="margin:8px 0"><i style="width:' + Math.round(100 * r.i / n) + '%"></i></div>';
    h += '<div class="card">' + (it.srcLabel ? '<div class="mute small">' + E(it.srcLabel) + '</div>' : '');
    h += '<h2 style="margin-top:4px">' + (it.hideText && it.say ? 'Ascolta e rispondi' : '') + (it.q ? (it.hideText && it.say ? '' : U.ruby(it.q)) : '') + '</h2>';
    if (it.hideText && it.say) h += '<p>' + U.ruby(it.q) + '</p>';
    if (it.say) h += '<p>' + sayBtn(it.say) + '<span class="mute small">' + (it.hideText ? 'Il testo non è mostrato. Puoi riascoltare.' : '') + '</span></p>';
    if (it.t === 'mc') {
      h += it.o2.map((o, i) => '<button class="opt" data-act="run-opt" data-i="' + i + '">' + U.ruby(o) + '</button>').join('');
    } else if (it.t === 'fill') {
      h += '<input type="text" id="fill" autocomplete="off" autocapitalize="off" spellcheck="false" ' + (it.num ? 'inputmode="numeric"' : '') + ' placeholder="' + (it.ja ? 'kana o romaji' : 'scrivi la risposta') + '"><div class="row" style="margin-top:10px"><button class="btn block" data-act="run-fill">Verifica</button></div>' + (it.ja ? '<p class="mute small">Puoi rispondere in hiragana, katakana o romaji (es. «ohayou»).</p>' : '');
    } else if (it.t === 'order') {
      h += '<div class="slot" id="slot">' + (it.placed.map((p, k) => '<button class="chip" data-act="run-untok" data-k="' + k + '">' + U.ruby(p.w) + '</button>').join('') || '<span class="mute small">Tocca le parole nell’ordine giusto</span>') + '</div><div class="chips">' +
        it.tok.map((t, k) => '<button class="chip' + (it.placed.some(p => p === t) ? ' used' : '') + '" data-act="run-tok" data-k="' + k + '"' + (it.placed.some(p => p === t) ? ' disabled' : '') + '>' + U.ruby(t.w) + '</button>').join('') + '</div><button class="btn block" data-act="run-order">Verifica</button>';
    } else if (it.t === 'dict') {
      h += '<p><button class="btn alt sm" data-act="run-say">🔊 Normale</button> <button class="btn alt sm" data-act="run-slow">🐢 Lento</button></p><textarea id="fill" rows="3" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + (it.lang === 'ja' ? 'scrivi in kana o romaji' : 'scrivi ciò che senti') + '"></textarea><button class="btn block" style="margin-top:10px" data-act="run-fill">Verifica</button><p class="mute small">Riascolta quanto vuoi. Nel dettato conta la precisione: punteggiatura e maiuscole sono ignorate.</p>';
    } else if (it.t === 'span') {
      h += '<div class="center big" id="spanbox" style="min-height:70px;margin:20px 0">Preparati…</div><div id="spanin" hidden><input type="text" id="fill" inputmode="numeric" autocomplete="off" placeholder="cifre"><button class="btn block" style="margin-top:10px" data-act="run-fill">Verifica</button></div>';
    } else if (it.t === 'corsi') {
      h += '<div class="grid9" id="corsi">' + Array.from({ length: 9 }, (_, i) => '<button data-act="run-corsi" data-i="' + i + '" disabled aria-label="Casella ' + (i + 1) + '"></button>').join('') + '</div><p class="center mute small" id="corsimsg">Osserva la sequenza…</p>';
    } else if (it.t === 'flash') {
      h += '<div class="center big" id="flashbox" style="min-height:90px;margin:16px 0;line-height:1.5">Preparati…</div><div id="flashopts" hidden>' + it.o2.map((o, i) => '<button class="opt" data-act="run-opt" data-i="' + i + '">' + U.ruby(o) + '</button>').join('') + '</div>';
    } else if (it.t === 'react') {
      h += '<div class="center big" id="rbox" style="min-height:150px;display:flex;align-items:center;justify-content:center;border-radius:16px;background:#1c2340;margin:12px 0;font-size:40px">Preparati…</div>' + (it.choice ? '<div class="grid2"><button class="btn block" data-act="run-react" data-d="L">◀ Sinistra</button><button class="btn block" data-act="run-react" data-d="R">Destra ▶</button></div>' : '<button class="btn block" style="min-height:70px" data-act="run-react">TOCCA</button>') + '<p class="mute small center" id="rmsg"></p>';
    } else if (it.t === 'nback') {
      h += '<div class="center big" id="nbox" style="min-height:110px;margin:16px 0;font-size:56px">Preparati…</div><button class="btn block" id="nbtn" data-act="run-nb" disabled>Uguale</button><p class="mute small center" id="nbmsg">Le lettere compaiono una alla volta.</p>';
    } else if (it.t === 'odd') {
      h += '<div class="oddgrid">' + it.cells.map((c, i) => '<button data-act="run-odd" data-i="' + i + '">' + E(c) + '</button>').join('') + '</div>';
    } else if (it.t === 'stroop') {
      h += '<div class="center big" style="color:' + it.color + ';margin:16px 0">' + E(it.word) + '</div><div class="grid2">' + it.opts.map((o, i) => '<button class="opt" data-act="run-stroop" data-i="' + i + '">' + E(o) + '</button>').join('') + '</div>';
    }
    h += '<div id="fb"></div></div>';
    return h;
  };
  ST.after.run = () => {
    const r = A.run; if (!r || r.phase !== 'q') return;
    const it = r.cur;
    if ((it.say || it.t === 'dict') && !it.noauto) { setTimeout(() => X['run-say'](), 250); }
    if (it.t === 'span') {
      const box = A.$('#spanbox'); const ds = it.digits.split(''); let k = 0;
      const step = () => {
        if (k < ds.length) { box.textContent = ds[k++]; timers.push(setTimeout(() => { box.textContent = ''; timers.push(setTimeout(step, 200)); }, it.ms)); }
        else { box.textContent = '?'; A.$('#spanin').hidden = false; const f = A.$('#fill'); if (f) f.focus(); }
      };
      timers.push(setTimeout(step, 700));
    }
    if (it.timed) { const tick = () => { const c = A.$('#itclk'); if (!c) return; const left = Math.round(it.timed - (Date.now() - r.t0) / 1000); c.textContent = left >= 0 ? '⏱ ' + left + 's' : '⏱ lento'; c.style.color = left < 0 ? 'var(--bad, #ff5c7a)' : ''; }; tick(); timers.push(setInterval(tick, 500)); }
    if (it.t === 'flash') {
      const box = A.$('#flashbox'), opts = A.$('#flashopts');
      timers.push(setTimeout(() => { box.textContent = it.show; timers.push(setTimeout(() => { box.textContent = '— — —'; opts.hidden = false; r.t0 = Date.now(); }, it.ms)); }, 700));
    }
    if (it.t === 'react') {
      const box = A.$('#rbox'), msg = A.$('#rmsg'), rx = r.rx = { i: -1, shown: false, t0: 0, res: [], tm: null };
      const finish = () => { const succ = rx.res.filter(x => x.ok).length, n = it.trials.length, rts = rx.res.filter(x => x.rt).map(x => x.rt); box.textContent = '✓'; R.answer(succ / n >= 0.7, (rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0) + ' ms', succ / n); };
      const next = () => {
        rx.i++; rx.shown = false; if (rx.i >= it.trials.length) { finish(); return; }
        const tr = it.trials[rx.i]; box.style.background = '#1c2340'; box.textContent = 'Attendi…';
        rx.tm = setTimeout(() => {
          rx.shown = true; rx.t0 = Date.now();
          box.style.background = tr.go ? '#1f9d55' : '#c0392b'; box.textContent = tr.go ? (it.choice ? (tr.dir === 'L' ? '◀' : '▶') : '●') : '✕ NON toccare';
          rx.tm = setTimeout(() => { if (!rx.shown) return; rx.shown = false; rx.res.push({ ok: !tr.go }); msg.textContent = tr.go ? 'Troppo lento' : 'Bene: non hai toccato'; rx.tm = setTimeout(next, 500); }, tr.go ? 1100 : 900);
        }, tr.delay);
      };
      rx.next = next; timers.push(setTimeout(next, 800)); r.rxClear = () => clearTimeout(rx.tm);
    }
    if (it.t === 'nback') {
      const box = A.$('#nbox'), btn = A.$('#nbtn'); r.nb = { taps: {}, i: -1 };
      const stepFn = () => {
        r.nb.i++;
        if (r.nb.i >= it.seq.length) {
          let errs = 0, tot = 0;
          it.seq.forEach((c, i) => { if (i >= it.n) { tot++; if (!!r.nb.taps[i] !== !!it.targets[i]) errs++; } });
          box.textContent = '✓'; btn.disabled = true;
          R.answer(errs <= Math.floor(tot * 0.25), errs + ' errori su ' + tot, Math.max(0, (tot - errs) / tot)); return;
        }
        box.textContent = it.seq[r.nb.i]; btn.disabled = r.nb.i < it.n;
        timers.push(setTimeout(() => { box.textContent = ''; btn.disabled = true; timers.push(setTimeout(stepFn, 250)); }, it.ms));
      };
      timers.push(setTimeout(stepFn, 900));
    }
    if (it.t === 'corsi') {
      const cells = [...document.querySelectorAll('#corsi button')]; let k = 0; r.corsiIn = [];
      const flash = () => {
        if (k < it.seq.length) { const c = cells[it.seq[k++]]; c.classList.add('lit'); timers.push(setTimeout(() => { c.classList.remove('lit'); timers.push(setTimeout(flash, 250)); }, 600)); }
        else { cells.forEach(c => { c.disabled = false; }); A.$('#corsimsg').textContent = 'Ora tocca in ordine.'; }
      };
      timers.push(setTimeout(flash, 700));
    }
    if (r.deadline) { const tick = () => { const c = A.$('#clk'); if (!c) return; const left = Math.round((r.deadline - Date.now()) / 1000); c.textContent = left >= 0 ? '⏱ ' + Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0') : '⏱ tempo scaduto'; c.style.color = left < 0 ? 'var(--bad, #ff5c7a)' : ''; }; tick(); timers.push(setInterval(tick, 1000)); }
    const f = A.$('#fill'); if (f && it.t === 'fill') { f.focus(); f.addEventListener('keydown', e => { if (e.key === 'Enter') X['run-fill'](); }); }
  };

  const speakCur = rate => {
    const r = A.run; if (!r || !r.cur) return;
    const sp = r.cur.say || (r.cur.t === 'dict' ? { text: r.cur.text, lang: r.cur.lang } : null);
    if (!sp) return;
    const lang = sp.lang === 'ja' ? 'ja-JP' : sp.lang === 'en' ? A.state.profile.accents.en : sp.lang;
    ST.audio.speak(sp.text, { lang, rate }).then(x => { if (!x.ok) A.toast(ST.audio.explain(x.reason), 4500); });
  };
  X['run-say'] = () => speakCur();
  X['run-slow'] = () => speakCur(0.6);
  X['run-quit'] = () => { clearTimers(); ST.audio.stop(); if (confirm('Uscire dalla sessione? I progressi di questa sessione non salvati andranno persi.')) { A.run = null; A.back(); } };

  const norm = s => U.norm(String(s));
  const check = (it, val) => {
    if (it.t === 'mc') return +val === it.a2;
    if (it.t === 'fill') {
      if (it.ja) return it.a.some(a => K.sameReading(val, a)) || it.a.some(a => norm(val) === norm(a));
      if (it.num) return it.a.some(a => String(val).trim() === String(a));
      return it.a.some(a => norm(a) === norm(val));
    }
    if (it.t === 'span') return String(val).replace(/\D/g, '') === it.a[0];
    if (it.t === 'dict') {
      const jp = it.lang === 'ja';
      const d = jp ? U.charDiff(K.toHiragana(U.speechText(it.text)), K.toHiragana(val)) : U.wordDiff(it.text, val);
      A.run.lastDiff = jp ? null : d; A.run.lastScore = d.score;
      return d.score >= 0.85;
    }
    return !!val;
  };
  const answerText = it => it.t === 'dict' ? it.text : it.t === 'mc' ? it.o2[it.a2] : it.t === 'order' ? it.words.join(' ') : (it.a || []).join(' / ');

  R.answer = (ok, val, score) => {
    const r = A.run, it = r.cur;
    if (r.phase !== 'q') return;
    r.phase = 'fb';
    clearTimers();
    const late = !!((r.deadline && Date.now() > r.deadline) || (it.timed && Date.now() - r.t0 > it.timed * 1000));
    r.res.push({ item: r.items[r.i], ok, val, ms: Date.now() - r.t0, late, score });
    if (r.onAnswer) r.onAnswer(r.items[r.i], ok, r.i, r.res[r.res.length - 1]);
    const fb = A.$('#fb');
    fb.innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Corretto' : '✗ Non corretto') + '</b>' + (it.t === 'dict' ? '<div>Precisione: <b>' + Math.round((r.lastScore || 0) * 100) + '%</b></div><div class="diff">' + (r.lastDiff ? r.lastDiff.ops.map(o => o.ok ? E(o.w) : o.missing ? '<span class="m">' + E(o.w) + '</span>' : '<span class="x">' + E(o.w) + '</span>').join(' ') : '') + '</div><div>Testo: <b>' + U.ruby(it.text) + '</b></div>' : ok ? '' : '<div>Risposta: <b>' + U.ruby(answerText(it)) + '</b></div>') + (!ok && it.diag ? (() => { const d = it.diag(it.t === 'mc' ? it.o2[val] : val); return d ? '<div class="small" style="margin-top:4px">⚠ ' + U.ruby(d) + '</div>' : ''; })() : '') + (it.why ? '<div class="mute small" style="margin-top:4px">' + U.ruby(it.why) + '</div>' : '') + '</div>' +
      '<button class="btn block" style="margin-top:10px" data-act="run-next">' + (r.i + 1 >= r.items.length ? 'Concludi' : 'Avanti') + '</button>';
    fb.scrollIntoView({ block: 'nearest' });
  };
  X['run-react'] = el => {
    const r = A.run; if (!r || !r.rx || r.phase !== 'q') return; const rx = r.rx, it = r.cur, tr = it.trials[rx.i]; if (!tr) return;
    const msg = A.$('#rmsg'); clearTimeout(rx.tm);
    if (!rx.shown) { rx.res.push({ ok: false }); msg.textContent = 'Troppo presto!'; }
    else { const rt = Date.now() - rx.t0; rx.shown = false; const right = tr.go && (!it.choice || el.dataset.d === tr.dir); const ok = right && rt <= it.thr; rx.res.push({ ok, rt: right ? rt : 0 }); msg.textContent = !tr.go ? 'Era rosso: non toccare' : !right ? 'Lato sbagliato' : (ok ? rt + ' ms ✓' : rt + ' ms (troppo lento)'); }
    rx.tm = setTimeout(() => { if (A.run === r && r.phase === 'q') { const b = A.$('#rbox'); if (b) { b.style.background = '#1c2340'; } rx.next && rx.next(); } }, 600);
  };
  X['run-nb'] = () => { const r = A.run; if (!r || !r.nb || r.nb.i < 0) return; r.nb.taps[r.nb.i] = true; const b = A.$('#nbtn'); if (b) b.disabled = true; };
  X['run-opt'] = el => {
    const r = A.run; if (r.phase !== 'q') return;
    const it = r.cur, i = +el.dataset.i, ok = it.okSet ? it.okSet.includes(it.o2[i]) : i === it.a2;
    document.querySelectorAll('.opt').forEach((b, k) => { b.disabled = true; if (k === it.a2) b.classList.add('ok'); else if (k === i) b.classList.add('no'); });
    R.answer(ok, i);
  };
  X['run-fill'] = () => { const r = A.run, f = A.$('#fill'); if (!f || r.phase !== 'q') return; if (!f.value.trim()) return; f.disabled = true; R.answer(check(r.cur, f.value), f.value); };
  X['run-tok'] = el => { const r = A.run, it = r.cur, t = it.tok[+el.dataset.k]; if (it.placed.includes(t)) return; it.placed.push(t); const keep = r.phase; A.render(); r.phase = keep; };
  X['run-untok'] = el => { const it = A.run.cur; it.placed.splice(+el.dataset.k, 1); A.render(); };
  X['run-order'] = () => { const it = A.run.cur; if (A.run.phase !== 'q') return; const ok = it.placed.length === it.words.length && it.placed.every((p, k) => p.i === k) || it.placed.map(p => p.w).join(' ') === it.words.join(' '); R.answer(ok, it.placed.map(p => p.w).join(' ')); };
  X['run-corsi'] = el => {
    const r = A.run, it = r.cur; if (r.phase !== 'q') return;
    const i = +el.dataset.i; r.corsiIn.push(i); el.classList.add('lit');
    const k = r.corsiIn.length - 1;
    if (it.seq[k] !== i) { document.querySelectorAll('#corsi button').forEach(b => { b.disabled = true; }); R.answer(false, r.corsiIn.join(',')); }
    else if (r.corsiIn.length === it.seq.length) { document.querySelectorAll('#corsi button').forEach(b => { b.disabled = true; }); R.answer(true, r.corsiIn.join(',')); }
  };
  X['run-odd'] = el => { const it = A.run.cur; if (A.run.phase !== 'q') return; R.answer(+el.dataset.i === it.a, el.dataset.i); };
  X['run-stroop'] = el => { const it = A.run.cur; if (A.run.phase !== 'q') return; R.answer(+el.dataset.i === it.a, el.dataset.i); };
  X['run-next'] = () => {
    const r = A.run; clearTimers(); ST.audio.stop();
    if (r.i + 1 >= r.items.length) { r.phase = 'done'; r.extra = r.onFinish ? r.onFinish(r.res) : ''; A.render(); return; }
    r.i++; prep(); A.render();
  };
  const summary = () => {
    const r = A.run, ok = r.res.filter(x => x.ok).length, n = r.res.length;
    const wrong = r.res.filter(x => !x.ok);
    return '<div class="card glow center"><h1>' + E(r.title) + '</h1><div class="big">' + ok + ' / ' + n + '</div><p class="mute">' + Math.round(100 * ok / Math.max(1, n)) + '% corrette</p>' + (r.extra || '') + '</div>' +
      (wrong.length ? '<div class="card"><h3>Da rivedere</h3>' + wrong.map(w => '<p><b>' + U.ruby(w.item.q || '') + '</b><br><span class="mute small">' + U.ruby(w.item.t === 'mc' ? w.item.o[w.item.a] : w.item.t === 'order' ? w.item.words.join(' ') : (w.item.a || []).join(' / ')) + '</span></p>').join('') + '<p class="mute small">Gli errori tornano nel ripasso dilazionato.</p></div>' : '') +
      '<button class="btn block" data-act="run-close">Fine</button>';
  };
  X['run-close'] = () => { const r = A.run; A.run = null; clearTimers(); if (r && r.after) r.after(); A.back(); };
})(window.ST = window.ST || {});
