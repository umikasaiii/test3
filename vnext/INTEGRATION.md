# Integrazione del pacchetto vNext in SkillTree

Il pacchetto è **separato** da `index.html` per non superare il limite dell'artefatto (16 MB; `index.html` è già a ~14,9 MB).
Non modifica nessun file esistente: si aggancia alle API pubbliche dell'app (`ST.content`, `ST.views`, `ST.after`, `ST.acts`, `ST.transfer`, `ST.app`).

## Build
```
node tools/build-vnext.js              # dist-vnext/skilltree-vnext.js + skilltree-vnext.css
node tools/build-vnext.js --combined   # dist-vnext/index.vnext.html (index.html + pacchetto: SOLO test locali)
node --test vnext/tests/vnext.test.js  # test unitari
node vnext/tests/e2e-vnext.js          # e2e su Chromium (dopo --combined)
```

## Opzione A — merge nei sorgenti (consigliata se il limite di dimensione non è più un vincolo)
1. Copiare `vnext/src/*.js` in `src/content/` (o `src/ui/`) e aggiungerli in `tools/build.js` → `ORDER`, **dopo** `ui/views-home` (il pacchetto avvolge `ST.views.subject` e `ST.after.home`) e **prima** di `ui/boot`.
2. Aggiungere `vnext/src/sma.css` in coda a `src/ui/style.css`.
3. `node tools/build.js`.

## Opzione B — payload esterno (nessun ingrandimento di index.html)
1. Pubblicare `skilltree-vnext.js` e `.css` accanto a `index.html` (multi-file dell'artefatto o hosting).
2. In `index.html` aggiungere, **dopo** lo script inline e prima di `</body>`: `<script src="skilltree-vnext.js"></script>` e `<link rel="stylesheet" href="skilltree-vnext.css">`. L'avvio dell'app parte a `DOMContentLoaded`, quindi il payload ha il tempo di registrarsi.
3. Aggiungere i due file alla lista di `sw.js` (`addAll`) per l'uso offline e incrementare `CACHE`.
4. Il payload non deve essere caricato con `defer` prima dello script inline (richiede `window.ST`).

## Contratto con l'app esistente
- Soggetto `sma` (non `primary`): non compare in «Percorsi»; si apre dalla tessera in home (`data-view="subject" data-p='{"id":"sma"}'`).
- Stato: `state.sma` (creato al bisogno da `ST.sma.S(state)`); il backup esistente lo include. Nessuna migrazione dello schema.
- Evidenze: `ST.sma.record(state, dimensione, chiave, tipo, ok, opzioni)` → `ST.transfer.record` con id `sma:<dimensione>:<chiave>`. Il profilo (`ST.sma.profile`) aggrega per dimensione, mai un punteggio unico.
- Laboratori: `ST.sma.registerLab({id,title,desc,view,ready:true})`; finché non registrato, l'hub lo mostra come «Non ancora implementato».
- Nuovi argomenti: `ST.sma.topic({id,pillar,stage,title,summary,objectives,pages,exercises,test})` (stesso DSL `mc/fill/order` di `ST.content`).
- Collisioni: id con prefisso `sma-`, view con prefisso `sma-`, azioni `data-act` con prefisso `sma`.

## Aggiornamenti per l'integratore (versione 1.0.0)
- **File del pacchetto** (ordine alfabetico = ordine di esecuzione): `00-core`, `10-mod-det-pln`, `11-mod-ada-ldr`, `20-deduction`, `21-deduction-cases`, `21b-deduction-cases2`, `22-opponent`, `23-forecast`, `24-process`, `25-process-cases`, `26-multimove`, `30-strategos`, `31-strategos-missions`, `31b-strategos-missions2`, `40-listening`, `50-combat`, `51-combat-cases`, `60-cyberlab`, `61-cyberlab-challenges`, `62-proglab`, `63-proglab-exercises`, `70-f1lab`, `71-f1lab-scenarios`, `72-sportlab`, `80-convo`, `81-convo-en`, `82-convo-ja`, `90-cross`, `91-links`, `92-audio`, `93-levelcheck` + `sma.css`. Dimensione del pacchetto (JS): ~0,7 MB; `index.html` + pacchetto ≈ 15,7 MB (sotto il limite di 16 MB dell'artefatto, ma con pochissimo margine).
- **Service worker (`sw.js`)**: se si usa l'opzione B (file esterni) aggiungere `./skilltree-vnext.js` e `./skilltree-vnext.css` a `addAll` e incrementare `CACHE`; con l'opzione A non serve nulla.
- **Dipendenze dall'app esistente** (devono esistere): `ST.util` (esc, ruby, shuffle, clamp, addDays, today), `ST.content` (defineSubject, addTopic, topicsOf), `ST.views`/`ST.after`/`ST.acts`, `ST.app` (state, save, go, back, render, toast, xp), `ST.transfer` (record, jAdd, jClose, fAdd…), `ST.srs`, `ST.layer.romaji`, `ST.audio`, `ST.runner`, `ST.sim`, `ST.progress`.
- **Viste aggiunte**: `sma-*` (vedi `grep "V\['sma-" vnext/src`). Azioni `data-act` con prefisso `sma`. La vista `subject` è avvolta per `id: 'sma'`; `ST.after.home` è avvolto per aggiungere la tessera.
- **Stato**: `state.sma` con sottochiavi `labs, missions, diary, cases, sims, forecast, tech, convo, listen, combat, cross, levelChecks`. Nessuna migrazione dello schema; il backup/ripristino esistente lo include (testato).
- **Evidenze**: le chiavi `sma:*` entrano in `state.skills`; la funzione `ST.transfer.due` le include nelle verifiche a 7/30/90: nell'interfaccia esistente appaiono con l'id grezzo (migliorabile con un resolver dei nomi).
- **Test**: `node --test vnext/tests/vnext.test.js` (90), `node tools/build-vnext.js --combined && node vnext/tests/e2e-vnext.js`, `node vnext/tests/perf-vnext.js`, `node tools/validate-content.js --vnext`, `node tools/vnext-report.js`.
