# Registro di revisione di affidabilità: Cultura (campione)

Campione: 26 argomenti su 116 (circa 22%) con id `cul-`, letti per intero (pagine, esercizi e test). Revisione a memoria, senza fonti esterne. Ricalcolati a mano tutti i calcoli numerici presenti nel testo e negli esercizi (risultati coerenti con le risposte).

Classificazioni: ERRORE CERTO / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

| id | punto | citazione breve | classificazione | motivo | azione |
|---|---|---|---|---|---|
| cul-cucina-igiene-sicurezza | pagina 1, ortografia | «**toxine** prodotte da batteri» | ERRORE CERTO | In italiano il termine è «tossine»; «toxine» è un errore di ortografia | corretto in «tossine» |
| cul-elettricita-domestica-sicura | esercizio sul tasto di test | «Ogni quanto si premette il tasto di test» | ERRORE CERTO | «premettere» è un altro verbo; la forma corretta è «si preme» | corretto in «si preme» |
| cul-ostruzione-ferite-ustioni | epistassi: testo vs test | testo «in tutto non più di 20–30 minuti»; test «in tutto quanti minuti al massimo… 20» | DUBBIO | Il testo ammette 20–30 minuti, la risposta del test è 20 (10+10); non è un errore di calcolo, ma l'indicazione non è identica | lasciato |
| cul-traumi-caldo-freddo-allergie | schema PRICE con ghiaccio | «si usa spesso lo schema PRICE» | DUBBIO | Le raccomandazioni sulle lesioni muscolo-scheletriche si sono evolute (si discute l'uso sistematico di riposo e ghiaccio); il testo è prudente («spesso», «se c'è un dubbio, pronto soccorso») | lasciato |
| cul-traumi-caldo-freddo-allergie | centro antiveleni | «un Centro antiveleni (il 112 ti mette in contatto)» | DA VERIFICARE CON FONTE ESTERNA | Le modalità di contatto con i centri antiveleni variano per regione/periodo | lasciato |
| cul-rianimazione-cardiopolmonare-dae | valori ERC, calo 7–10%/min, L. 116/2021 | «100–120/min», «5–6 cm», «30:2», «L. 116/2021» | DA VERIFICARE CON FONTE ESTERNA | I valori coincidono con le linee guida ERC che conosco e la legge è citata correttamente; il testo avverte che le linee guida sono riviste (verificare la versione più recente) | lasciato |
| cul-lavoro-busta-paga-e-tasse | salario minimo | «non esiste un unico salario minimo di legge» | DA VERIFICARE CON FONTE ESTERNA | Tema legislativo in evoluzione; vero fino alle mie conoscenze | lasciato |
| cul-lavoro-busta-paga-e-tasse | contributi lavoratore | «9,19%» (esempio) | DA VERIFICARE CON FONTE ESTERNA | Aliquote INPS che variano per settore/dimensione; il testo le dichiara illustrative | lasciato |
| cul-assicurazioni-previdenza-pensioni | requisiti e coefficienti | «circa 67 anni», «aliquota 33%», coefficiente 5%, «circa 5 mila euro» di deducibilità | DA VERIFICARE CON FONTE ESTERNA | Valori soggetti a leggi di bilancio e adeguamenti alla speranza di vita; già dichiarati orientativi nel testo | lasciato |
| cul-diritti-e-vita-quotidiana | cedolare secca | «21%, 10% per il concordato: da verificare» | DA VERIFICARE CON FONTE ESTERNA | Aliquote modificate più volte dalle leggi di bilancio | lasciato |
| cul-europa-e-unione-europea | area euro | «20 paesi dopo l'ingresso della Croazia… altri ingressi possono essere avvenuti dopo» | DA VERIFICARE CON FONTE ESTERNA | Ingressi successivi al 2023 (per esempio Bulgaria dal 1° gennaio 2026, da confermare) renderebbero il numero obsoleto; il testo è già prudente | lasciato |
| cul-europa-e-unione-europea | Schengen, candidati, seggi | «circa 29 paesi», 720 seggi | DA VERIFICARE CON FONTE ESTERNA | Elenchi che cambiano con gli allargamenti; testo prudente | lasciato |
| cul-geopolitica-organizzazioni | UE nel G7 | «l'Unione europea partecipa come ospite» | DUBBIO | La UE partecipa ai vertici G7 come partecipante non incluso nel numero dei sette: «ospite» è una semplificazione | lasciato |
| cul-geopolitica-organizzazioni | numeri attuali | 193 ONU, 32 NATO, G20 con Unione africana | DA VERIFICARE CON FONTE ESTERNA | Numeri soggetti a cambiamento | lasciato |
| cul-sistema-solare | numeri in crescita | «oltre 5 500 esopianeti», Voyager 1 «oltre 160 UA» | DA VERIFICARE CON FONTE ESTERNA | Valori che aumentano nel tempo; il testo indica «cifra in crescita» e «dati recenti» | lasciato |
| cul-sicurezza-online-difesa | 615-ter c.p., ransomware | «art. 615-ter c.p.», «non pagare» | nessun problema | Riferimento corretto; consiglio prudente e allineato alle indicazioni comuni | nessuna azione |

## Id modificati

- `cul-cucina-igiene-sicurezza` (file `src/content/cul-l-casa.js`): «toxine» in «tossine».
- `cul-elettricita-domestica-sicura` (file `src/content/cul-l-casa.js`): «si premette» in «si preme».

Dopo le modifiche: `node tools/validate-content.js` restituisce «Contenuti validi» e `node --check src/content/cul-l-casa.js` è senza errori. Non sono stati toccati file `layer-*.js`.

## Id esaminati senza problemi (nessun errore certo; restano eventuali note di tabella)

cul-rianimazione-cardiopolmonare-dae, cul-ostruzione-ferite-ustioni, cul-traumi-caldo-freddo-allergie, cul-guida-sicura, cul-sicurezza-online-difesa, cul-nutrizione-di-base, cul-novecento-guerre-e-totalitarismi, cul-roma-monarchia-e-repubblica, cul-umanesimo-scoperte-riforma, cul-lavoro-busta-paga-e-tasse, cul-assicurazioni-previdenza-pensioni, cul-la-costituzione-italiana, cul-europa-e-unione-europea, cul-geopolitica-organizzazioni, cul-diritti-e-vita-quotidiana, cul-sistema-solare, cul-stelle-galassie-cosmologia, cul-calore-e-termodinamica, cul-atomi-e-tavola-periodica, cul-genetica-ed-evoluzione, cul-probabilita, cul-filosofia-ottocento, cul-dante-petrarca-boccaccio, cul-risparmio-e-interesse-composto.

(Gli altri due id del campione, cul-cucina-igiene-sicurezza e cul-elettricita-domestica-sicura, avevano solo i refusi sopra, corretti; sul resto del loro contenuto non sono emersi errori.)

## Cosa è stato verificato

- Date e nomi storici (Novecento, Roma, Umanesimo/Riforma, Dante/Petrarca/Boccaccio, filosofia dell'Ottocento): coerenti con quanto è noto.
- Calcoli: tutti ricontrollati (spazi di frenata, correnti, kcal, probabilità, Bayes, interesse composto, annualità, tempi luce, Keplero, Hardy-Weinberg, ecc.): nessuna incoerenza tra testo ed esercizi.
- Sicurezza (RCP, ostruzione, ustioni, avvelenamenti, anafilassi, elettricità, gas, cibo): nessun consiglio pericoloso; le lezioni rinviano ai corsi certificati e al 112.
- Neutralità: religione e politica (Riforma/Controriforma, Marx, Nietzsche, foibe, Holodomor, Brexit) presentate con equilibrio e con indicazione delle interpretazioni discusse.

## Limiti della revisione

- Condotta a memoria, senza consultare fonti esterne né internet: non può certificare valori soggetti a cambiamento (norme fiscali e previdenziali, aliquote, requisiti pensionistici, numeri di Stati/membri, conteggi di esopianeti, linee guida ERC aggiornate).
- Campione di 26 argomenti su 116: non si può estendere l'esito agli altri 90.
- Si è corretto solo ciò che era certo; le imprecisioni di taglio (semplificazioni didattiche) sono state lasciate e segnalate come DUBBIO.
- Non verificati gli aspetti grafici o di funzionamento dell'app, solo i contenuti testuali.
