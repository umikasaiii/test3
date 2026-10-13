/* SkillTree — audio: sintesi vocale (TTS) del dispositivo, registrazione microfono, diagnostica.
   Nota onesta: su Chrome Android il comportamento dipende dalle voci installate (Google TTS / Samsung TTS).
   Il codice gestisce: caricamento asincrono delle voci, assenza di voce, errori, fine riproduzione, timeout. */
(function (ST) {
  'use strict';
  const U = ST.util;
  const A = ST.audio = {};

  A.supported = () => 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
  A.voices = () => A.supported() ? speechSynthesis.getVoices() : [];

  /* Le voci su Chrome arrivano in modo asincrono: attendere voiceschanged (max 2,5 s). */
  A.ready = () => new Promise(res => {
    if (!A.supported()) return res([]);
    const v = speechSynthesis.getVoices();
    if (v.length) return res(v);
    let done = false;
    const fin = () => { if (!done) { done = true; res(speechSynthesis.getVoices()); } };
    speechSynthesis.addEventListener('voiceschanged', fin, { once: true });
    setTimeout(fin, 2500);
  });

  /* Sceglie la voce più adatta: stessa regione → stessa lingua → null (usa lang e lascia decidere al sistema). */
  A.pickVoice = (lang, preferred) => {
    const vs = A.voices();
    if (!vs.length) return null;
    const L = lang.toLowerCase().replace('_', '-');
    if (preferred) { const p = vs.find(v => v.voiceURI === preferred); if (p) return p; }
    const exact = vs.filter(v => v.lang.toLowerCase().replace('_', '-') === L);
    const pref = exact.find(v => v.localService) || exact[0];
    if (pref) return pref;
    const base = L.split('-')[0];
    return vs.find(v => v.lang.toLowerCase().startsWith(base)) || null;
  };
  A.hasVoice = lang => !!A.pickVoice(lang);

  let current = null;
  A.stop = () => { try { if (A.supported()) speechSynthesis.cancel(); } catch (e) { /* ignora */ } current = null; };

  /* speak → Promise che risolve a fine riproduzione {ok:true} o {ok:false, reason}.
     Va chiamata da un gesto dell'utente (tap): le policy autoplay lo richiedono. */
  A.speak = (text, opts) => new Promise(resolve => {
    opts = opts || {};
    if (!A.supported()) return resolve({ ok: false, reason: 'unsupported' });
    const lang = opts.lang || 'en-GB';
    const clean = U.speechText(text);
    A.stop();
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = lang;
    u.rate = opts.rate || (ST.app && ST.app.state ? ST.app.state.profile.rate : 0.9) || 0.9;
    u.pitch = 1;
    const v = A.pickVoice(lang, opts.voiceURI || (ST.app && ST.app.state && ST.app.state.profile.voices && ST.app.state.profile.voices[lang]));
    if (v) u.voice = v;
    let finished = false;
    const fin = r => { if (finished) return; finished = true; clearTimeout(guard); clearInterval(keep); current = null; resolve(r); };
    // Chrome può non emettere onend: stima di durata + margine.
    const est = Math.max(2500, clean.length * 120 / (u.rate || 1) + 3000);
    const guard = setTimeout(() => fin({ ok: speechSynthesis.speaking ? true : false, reason: 'timeout' }), est * 3);
    // Workaround Chrome: lunghi enunciati si bloccano dopo ~15 s se in pausa implicita.
    const keep = setInterval(() => { if (speechSynthesis.speaking && !speechSynthesis.paused) { speechSynthesis.pause(); speechSynthesis.resume(); } }, 10000);
    u.onend = () => fin({ ok: true, voice: v ? v.name : null });
    u.onerror = e => fin({ ok: false, reason: (e && e.error) || 'error' });
    current = u;
    try { speechSynthesis.speak(u); } catch (e) { fin({ ok: false, reason: 'exception' }); }
    if (opts.onstart) u.onstart = opts.onstart;
    if (!v) A.lastNoVoice = lang;
  });

  /* Riproduce più frasi in sequenza (pausa breve tra le battute). */
  A.speakSeq = async (items, opts) => {
    for (const it of items) {
      if (opts && opts.cancelled && opts.cancelled()) return { ok: false, reason: 'cancelled' };
      const r = await A.speak(it.text, Object.assign({}, opts, { lang: it.lang || (opts && opts.lang) }));
      if (!r.ok) return r;
      await new Promise(r => setTimeout(r, (opts && opts.gap) || 350));
    }
    return { ok: true };
  };

  A.explain = reason => ({
    unsupported: 'Questo browser non offre la sintesi vocale. Usa Chrome su Android.',
    'not-allowed': 'Audio bloccato dal browser: tocca di nuovo il pulsante 🔊 (serve un tuo tap).',
    'language-unavailable': 'Voce non installata per questa lingua. Impostazioni Android → Sistema → Lingua → Sintesi vocale → installa i dati voce.',
    'voice-unavailable': 'Voce non disponibile: scegline un’altra in Altro → Audio.',
    'synthesis-failed': 'Sintesi non riuscita: riprova o cambia voce in Altro → Audio.',
    timeout: 'La riproduzione non è terminata: verifica volume e voci installate.'
  })[reason] || 'Audio non riprodotto (' + reason + ').';

  A.diagnose = async () => {
    const info = { protocol: location.protocol, secure: window.isSecureContext, tts: A.supported(), voices: [], mic: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia), recorder: typeof MediaRecorder !== 'undefined', asr: !!(window.SpeechRecognition || window.webkitSpeechRecognition) };
    await A.ready();
    info.voices = A.voices().map(v => ({ name: v.name, lang: v.lang, local: v.localService, uri: v.voiceURI }));
    info.langs = {};
    ['en-GB', 'en-US', 'en-AU', 'ja-JP'].forEach(l => { const v = A.pickVoice(l); info.langs[l] = v ? v.name + ' (' + v.lang + ')' : null; });
    return info;
  };

  /* ---- Registrazione ---- */
  const R = A.rec = { stream: null, mr: null, chunks: [] };
  R.start = async () => {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || typeof MediaRecorder === 'undefined') throw new Error('Registrazione non supportata in questo browser.');
    try { R.stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) { throw new Error(e && e.name === 'NotAllowedError' ? 'Permesso microfono negato. Abilitalo dalle impostazioni del sito in Chrome.' : 'Microfono non disponibile: ' + (e && e.message)); }
    R.chunks = [];
    const mime = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm'].find(m => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m));
    R.mr = new MediaRecorder(R.stream, mime ? { mimeType: mime } : undefined);
    R.mr.ondataavailable = e => { if (e.data && e.data.size) R.chunks.push(e.data); };
    R.mr.start();
  };
  R.stop = () => new Promise(res => {
    if (!R.mr || R.mr.state === 'inactive') return res(null);
    R.mr.onstop = () => { const b = new Blob(R.chunks, { type: R.mr.mimeType || 'audio/webm' }); R.stream.getTracks().forEach(t => t.stop()); R.mr = null; res(b); };
    R.mr.stop();
  });
  A.playBlob = blob => new Promise(res => {
    const url = URL.createObjectURL(blob), a = new Audio(url);
    const end = ok => { URL.revokeObjectURL(url); res({ ok }); };
    a.onended = () => end(true); a.onerror = () => end(false);
    a.play().catch(() => end(false));
  });
})(window.ST = window.ST || {});
