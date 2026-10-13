(function (ST) {
  'use strict';
  const start = () => ST.app.init().catch(e => {
    console.error(e);
    document.getElementById('app').innerHTML = '<div class="card"><h2>Errore di avvio</h2><p>' + String(e && e.message).replace(/</g, '&lt;') + '</p></div>';
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})(window.ST = window.ST || {});
