#!/usr/bin/env node
/* Costruisce il pacchetto vNext (Strategic Mastery Academy e laboratori) SEPARATO da index.html.
   Uso:
     node tools/build-vnext.js              → dist-vnext/skilltree-vnext.js (+ .css): payload da integrare
     node tools/build-vnext.js --combined   → dist-vnext/index.vnext.html: index.html + payload (SOLO per test locali, non per l'artefatto)
   Il payload è uno script che si accoda a quello dell'app PRIMA di </script> (l'avvio parte a DOMContentLoaded). */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), src = path.join(root, 'vnext', 'src'), out = path.join(root, 'dist-vnext');
const files = () => fs.readdirSync(src).filter(f => /\.js$/.test(f)).sort();
exports.sources = () => files().map(f => ({ name: 'vnext/' + f.replace(/\.js$/, ''), code: fs.readFileSync(path.join(src, f), 'utf8') }));
exports.css = () => fs.readdirSync(src).filter(f => /\.css$/.test(f)).sort().map(f => fs.readFileSync(path.join(src, f), 'utf8')).join('\n');
exports.bundle = () => exports.sources().map(s => '/* ---- ' + s.name + ' ---- */\n' + s.code).join('\n').replace(/<\/script/gi, '<\\/script');
if (require.main === module) {
  fs.mkdirSync(out, { recursive: true });
  const js = exports.bundle(), css = exports.css();
  fs.writeFileSync(path.join(out, 'skilltree-vnext.js'), js);
  fs.writeFileSync(path.join(out, 'skilltree-vnext.css'), css);
  console.log('skilltree-vnext.js: ' + Math.round(js.length / 1024) + ' KB · .css: ' + Math.round(css.length / 1024) + ' KB');
  if (process.argv.includes('--combined')) {
    let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    const i = html.lastIndexOf('</script>'), j = html.indexOf('</style>');
    if (i < 0 || j < 0) throw new Error('index.html non ha la struttura attesa');
    html = html.slice(0, j) + '\n' + css + '\n' + html.slice(j, i) + '\n' + js + '\n' + html.slice(i);
    fs.writeFileSync(path.join(out, 'index.vnext.html'), html);
    console.log('index.vnext.html (solo test): ' + Math.round(html.length / 1024) + ' KB');
  }
}
