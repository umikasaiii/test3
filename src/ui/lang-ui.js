/* SkillTree — full immersion: l'interfaccia fissa (pulsanti, intestazioni, messaggi) della lezione, degli esercizi e della verifica
   passa nella lingua scelta (modalità B e C). Sostituzione per frasi intere note: il contenuto non è toccato. */
(function (ST) {
  'use strict';
  const U = ST.util, A = ST.app, L = ST.layer;
  const D = {
    en: {
      x: { '← Indietro': '← Back', '← Argomento': '← Topic', '☰ Indice': '☰ Contents', 'Indice': 'Contents', 'Avanti →': 'Next →', 'Vai agli esercizi →': 'Go to the exercises →', '✕ Esci': '✕ Quit', '✓ Corretto': '✓ Correct', '✗ Non corretto': '✗ Incorrect', 'Avanti': 'Next', 'Concludi': 'Finish', 'Fine': 'Done', 'Verifica': 'Check', 'Stato:': 'Status:', 'Letta': 'Read', 'Esercitato': 'Practised', 'Verificato': 'Verified', 'Mantenuto': 'Retained',
        'Anche in:': 'Also in:', 'Collegamenti trasversali': 'Cross-topic links', '(per parole chiave):': '(by keywords):', 'Lessico dell’argomento': 'Topic vocabulary', 'Entra nel ripasso dilazionato dopo la lezione.': 'It joins your spaced review after the lesson.',
        'Tocca le parole nell’ordine giusto': 'Tap the words in the right order', 'Da rivedere': 'To review', 'Gli errori tornano nel ripasso dilazionato.': 'Your mistakes come back in your spaced review.', 'Tutto corretto. Domani prova la verifica.': 'All correct. Try the test tomorrow.', 'Gli errori tornano domani nei ripassi.': 'Your mistakes will come back tomorrow in your reviews.', 'Preparazione…': 'Getting ready…', 'Ascolta': 'Listen', '🔊 Ascolta': '🔊 Listen' },
      rx: [[/^Pagina (\d+) di (\d+) · (.*)$/, (m, T) => 'Page ' + m[1] + ' of ' + m[2] + ' · ' + T(m[3])], [/^Esercizi · (.*) · (\d+)\/(\d+)$/, (m, T) => 'Exercises · ' + T(m[1]) + ' · ' + m[2] + '/' + m[3]], [/^Verifica · (.*) · (\d+)\/(\d+)$/, (m, T) => 'Test · ' + T(m[1]) + ' · ' + m[2] + '/' + m[3]], [/^Verifica · (.*)$/, (m, T) => 'Test · ' + T(m[1])], [/^Esercizi · (.*)$/, (m, T) => 'Exercises · ' + T(m[1])],
        [/^Risposta: (.*)$/, m => 'Answer: ' + m[1]], [/^(\d+)% corrette$/, m => m[1] + '% correct']],
      msg: { 'Sotto l’80%: rivedi la lezione e gli errori; riprova dopo un po’.': 'Below 80%: review the lesson and your mistakes; try again after a while.', 'Superata, ma svolta nello stesso giorno della lezione: non conta come verifica. Ripetila da domani per ottenere «Verificato».': 'Passed, but taken on the same day as the lesson: it does not count as verification. Repeat it from tomorrow to get “Verified”.', 'Verificato. Un ritest dopo almeno 14 giorni porterà a «Mantenuto».': 'Verified. A retest after at least 14 days will earn “Retained”.', 'Ritest superato a distanza: conoscenza mantenuta.': 'Retest passed after a gap: knowledge retained.' },
      ph: { 'scrivi la risposta': 'type your answer' }
    },
    ja: {
      x: { '← Indietro': '← [戻|もど]る', '← Argomento': '← トピック', '☰ Indice': '☰ [目次|もくじ]', 'Indice': '[目次|もくじ]', 'Avanti →': '[次|つぎ]へ →', 'Vai agli esercizi →': '[練習|れんしゅう]へ →', '✕ Esci': '✕ やめる', '✓ Corretto': '✓ [正解|せいかい]', '✗ Non corretto': '✗ [不正解|ふせいかい]', 'Avanti': '[次|つぎ]へ', 'Concludi': 'おわる', 'Fine': 'おわり', 'Verifica': '[確認|かくにん]', 'Stato:': '[状態|じょうたい]:', 'Letta': '[読|よ]んだ', 'Esercitato': '[練習|れんしゅう]ずみ', 'Verificato': '[確認|かくにん]ずみ', 'Mantenuto': '[定着|ていちゃく]',
        'Anche in:': 'ほかに:', 'Collegamenti trasversali': 'ほかの[科目|かもく]との[関係|かんけい]', '(per parole chiave):': '（キーワードで[探|さが]した）:', 'Lessico dell’argomento': 'このトピックの[言葉|ことば]', 'Entra nel ripasso dilazionato dopo la lezione.': 'レッスンのあと、[復習|ふくしゅう]に[入|はい]ります。',
        'Tocca le parole nell’ordine giusto': '[正|ただ]しい[順|じゅん]に[言葉|ことば]をタップします', 'Da rivedere': '[見直|みなお]し', 'Gli errori tornano nel ripasso dilazionato.': '[間違|まちが]いは[復習|ふくしゅう]で[戻|もど]ってきます。', 'Tutto corretto. Domani prova la verifica.': 'ぜんぶ[正解|せいかい]です。[明日|あした]、[確認|かくにん]テストをしましょう。', 'Gli errori tornano domani nei ripassi.': '[間違|まちが]いは[明日|あした]の[復習|ふくしゅう]で[戻|もど]ってきます。', 'Preparazione…': 'じゅんびちゅう…', 'Ascolta': '[聞|き]く', '🔊 Ascolta': '🔊 [聞|き]く' },
      rx: [[/^Pagina (\d+) di (\d+) · (.*)$/, (m, T) => m[1] + '/' + m[2] + 'ページ · ' + T(m[3])], [/^Esercizi · (.*) · (\d+)\/(\d+)$/, (m, T) => '[練習|れんしゅう] · ' + T(m[1]) + ' · ' + m[2] + '/' + m[3]], [/^Verifica · (.*) · (\d+)\/(\d+)$/, (m, T) => '[確認|かくにん]テスト · ' + T(m[1]) + ' · ' + m[2] + '/' + m[3]], [/^Verifica · (.*)$/, (m, T) => '[確認|かくにん]テスト · ' + T(m[1])], [/^Esercizi · (.*)$/, (m, T) => '[練習|れんしゅう] · ' + T(m[1])],
        [/^Risposta: (.*)$/, m => '[答|こた]え: ' + m[1]], [/^(\d+)% corrette$/, m => m[1] + '% [正解|せいかい]']],
      msg: { 'Sotto l’80%: rivedi la lezione e gli errori; riprova dopo un po’.': '80%より[低|ひく]いです。レッスンと[間違|まちが]いを[見直|みなお]して、しばらくしてからもう[一度|いちど]やりましょう。', 'Superata, ma svolta nello stesso giorno della lezione: non conta come verifica. Ripetila da domani per ottenere «Verificato».': '[合格|ごうかく]しましたが、レッスンと[同|おな]じ[日|ひ]にしたので、[確認|かくにん]として[数|かぞ]えません。[明日|あした]からもう[一度|いちど]やって、「[確認|かくにん]ずみ」にしましょう。', 'Verificato. Un ritest dopo almeno 14 giorni porterà a «Mantenuto».': '[確認|かくにん]ずみです。[少|すく]なくとも[十四日|じゅうよっか][後|あと]にもう[一度|いちど]すると、「[定着|ていちゃく]」になります。', 'Ritest superato a distanza: conoscenza mantenuta.': '[間|あいだ]をあけた[再|さい]テストに[合格|ごうかく]しました。[知識|ちしき]が[定着|ていちゃく]しています。' },
      ph: { 'scrivi la risposta': 'こたえをかく' }
    }
  };
  const activeTopic = () => { const v = A.view(); if (v.name === 'run') return A.run && A.run.topic ? ST.content.topic(A.run.topic) : null; return (v.name === 'topic' || v.name === 'lesson') && v.p && v.p.id ? ST.content.topic(v.p.id) : null; };
  let busy = false;
  ST.langDom = () => {
    if (busy) return; const t = activeTopic(); if (!t) return;
    const r = L.resolve(A.state.settings, t); if (r.lang === 'it' || r.mode === 'A') return;
    const dict = D[r.lang], lay = L.get(r.lang, t.id), ja = r.lang === 'ja', root = document.getElementById('app'); if (!root || !dict) return;
    const T = s => (s === t.title && lay && lay.title ? lay.title.t : s);
    const html = v => ja ? U.ruby(v) : U.esc(v), plain = v => ja ? U.speechText(v) : v;
    const skip = n => { for (let e = n.parentElement; e && e !== root; e = e.parentElement) { if (e.classList && (e.classList.contains('layer-card') || e.classList.contains('page') || e.classList.contains('gl-pop'))) return true; if (e.tagName === 'ARTICLE') return true; } return false; };
    busy = true;
    try {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
      nodes.forEach(n => {
        if (skip(n)) return; const raw = n.nodeValue, s = raw.trim(); if (!s) return;
        let out = dict.x[s]; if (out == null) for (const [re, f] of dict.rx) { const m = re.exec(s); if (m) { out = f(m, T); break; } }
        if (out == null) return; const par = n.parentElement;
        if (par && par.childNodes.length === 1) par.innerHTML = html(out); else n.nodeValue = raw.replace(s, plain(out));
      });
      root.querySelectorAll('p.warn, p.fb').forEach(p => { const m = dict.msg[p.textContent.trim()]; if (m) p.innerHTML = html(m); });
      root.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(e => { const m = dict.ph[e.getAttribute('placeholder')]; if (m) e.setAttribute('placeholder', plain(m)); });
      root.querySelectorAll('[aria-label]').forEach(e => { const m = dict.ph[e.getAttribute('aria-label')]; if (m) e.setAttribute('aria-label', plain(m)); });
    } finally { busy = false; }
  };
  /* la verifica e gli esercizi cambiano il DOM senza passare da render(): osserviamo #app */
  const start = () => { const root = document.getElementById('app'); if (!root) return setTimeout(start, 200); let q = false; new MutationObserver(() => { if (q || busy) return; q = true; Promise.resolve().then(() => { q = false; ST.langDom(); }); }).observe(root, { childList: true, subtree: true, characterData: false }); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})(window.ST = window.ST || {});
