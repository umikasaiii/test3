# Test realmente eseguiti (ultima esecuzione di questa sessione)

| Test | Comando | Esito |
|---|---|---|
| Unitari vNext (motori, validatori, risolutori, regole, formule) | `node --test tests/vnext/vnext.test.js` | 90 passati, 0 falliti |
| Regressione app esistente | `node tests/engine.test.js` | 70 passati, 0 falliti |
| Validazione contenuti (app + vNext) | `node tools/validate-content.js` | «Contenuti validi» |
| E2E Chromium su app + pacchetto (tessera in home, hub, ogni laboratorio giocato nell'interfaccia, moduli e verifica di livello, salvataggio, reload, esportazione/importazione) | `node tools/build.js && node tests/vnext/e2e-vnext.js` | «E2E vNext superato» |
| Prestazioni con profilo telefono emulato (360×740, CPU 4×) | `node tests/vnext/perf-vnext.js` | Entro le soglie: avvio +0,9–2,1 s (misure ripetute), memoria JS ~60 MB, ottimo F1 ~0,3 s |
| Conteggi dei contenuti rispetto agli obiettivi del mandato | `node tools/vnext-report.js` | Tutti raggiunti (con le avvertenze nel documento principale) |

**Non eseguito / non eseguibile qui:** Android reale, Safari/iOS (c'è solo Chromium), sintesi vocale (assente in headless), microfono reale, uso prolungato. Il campo «prestazioni» è un profilo emulato, non un dispositivo.
