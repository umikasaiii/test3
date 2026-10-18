# Registro di revisione affidabilità: campione di lezioni di Formula 1

Campione: 18 argomenti su 70 (circa 26%), letti per intero (pagine, esercizi e test), con ricalcolo via Node di tutti i numeri svolti (tabelle di carico/resistenza, modelli di sosta, undercut, bilanci ERS, punti, budget cap).

Classificazione: ERRORE CERTO (verificabile con conoscenza solida o con il calcolo) / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

## Argomenti esaminati

| Stadio | id | File |
|---|---|---|
| L0 | f1-sistema-di-punti | f1-l-basi.js |
| L1 | f1-formato-del-weekend | f1-l-regole.js |
| L1 | f1-la-gara-distanza-punti | f1-l-regole.js |
| L1 | f1-safety-car-vsc-bandiera-rossa | f1-l-regole.js |
| L1 | f1-penalita-e-commissari | f1-l-regole.js |
| L1 | f1-gomme-e-carburante | f1-l-regole.js |
| L1 | f1-regolamento-tecnico-principale | f1-l-regole.js |
| L1 | f1-budget-cap | f1-l-regole.js |
| L2 | f1-power-unit-ibrida | f1-l-vettura.js |
| L2 | f1-ers-e-gestione-energia | f1-l-vettura.js |
| L3 | f1-forze-aerodinamiche | f1-l-aero.js |
| L3 | f1-drs-e-scia | f1-l-aero.js |
| L5 | f1-pit-stop-e-strategie | f1-l-strategia.js |
| L5 | f1-undercut-e-overcut | f1-l-strategia.js |
| L7 | f1-anni-settanta-ottanta | f1-l-storia.js |
| L7 | f1-era-ibrida-e-nuovi-regolamenti | f1-l-storia.js |
| L8 | f1-economia-e-budget-cap | f1-l-storia.js |
| L9 | f1-adv-power-unit-2026 | f1-l-avanzato.js |

## Segnalazioni

| id | Pagina / punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| f1-power-unit-ibrida | p. 8 «Controllo di coerenza» | «720 kW × 0,00136 ≈ 979 CV» | ERRORE CERTO | Errore di unità: 1 kW ≈ 1,36 CV (la lezione stessa lo dice a p. 6); 720 × 0,00136 = 0,979, non 979. Il fattore 0,00136 vale per i watt. | corretto («720 kW × 1,36 ≈ 979 CV») |
| f1-forze-aerodinamiche | p. 8 «Densità dell’aria, altitudine» | «da 24 000 N a circa 19 250 N» | ERRORE CERTO | Il valore non deriva da nessun calcolo coerente: −20% di 24 000 = 19 200; ½·0,98·100²·4,0 = 19 600. | corretto («circa 19 200 N», coerente con il −20% dichiarato) |
| f1-pit-stop-e-strategie | p. 7 «Quando la 2 soste è obbligata» | «da 15,7 s sale a circa 16,1 s» | ERRORE CERTO | Ricalcolo con d raddoppiato per tutte le mescole, stessi stint: A − B in pista = 14,22 s, quindi il pareggio scende (15,7 → 14,2). La 2 soste (S15 M18 M17) accumula più degrado della 1 sosta (38,87 contro 37,38 s a d base), perciò più degrado la penalizza. Il testo affermava il contrario. | corretto («scende a circa 14,2 s (stessi stint), perché la 2 soste usa anche la soft, che degrada di più») |
| f1-era-ibrida-e-nuovi-regolamenti | p. 2 e p. 8, es. E2 | «120 × 1,341 ≈ 161 CV» | ERRORE CERTO | 1,341 è il fattore kW → hp (cavallo inglese), non CV metrico (1,36; 163 CV, come nelle lezioni f1-power-unit-ibrida e f1-regolamento-tecnico-principale). Due valori diversi per la stessa potenza con la stessa unità. | corretto: «161 hp (≈ 163 CV metrici)» in p. 2, p. 8 ed E2 (testo e spiegazione; risposte invariate) |
| f1-era-ibrida-e-nuovi-regolamenti | p. 1 e es. E10 | «100 kg di carburante per l’intera gara»; E10 «ammette il regolamento per l’intera gara ibrida? 100 kg» | ERRORE CERTO | Il limite di 100 kg vale 2014–2019; dal 2020 è 110 kg (come in f1-gomme-e-carburante e f1-power-unit-ibrida). E10, formulata in generale, dava come corretta una risposta superata e in contrasto con le altre lezioni. | corretto: p. 1 «(110 kg dal 2020)»; E10 riformulata sul 2014 con spiegazione «(110 kg dal 2020)» |
| f1-safety-car-vsc-bandiera-rossa | p. 1 | «Tre strumenti:» seguito da 4 voci | ERRORE CERTO | L’elenco ha quattro voci (gialle, VSC, SC, rossa). | corretto («Quattro strumenti») |
| f1-forze-aerodinamiche | p. 5 | «PU … 750–800 kW di picco» | DUBBIO | In f1-power-unit-ibrida il totale è ≈ 720 kW (ordine di 1 000 CV = 735 kW); 750–800 kW è un po’ più alto. Dichiarato «valore indicativo». | nessuna modifica |
| f1-forze-aerodinamiche | p. 2 | «798 kg nel 2022–2024» | DA VERIFICARE CON FONTE ESTERNA | Il 2022 era partito con un minimo inferiore (795 kg, poi portato a 798 kg): da controllare. | nessuna modifica |
| f1-la-gara-distanza-punti | p. 6, es. E9/T6 | «Oltre il 75%» e risposte 45 e 42 giri (esattamente il 75%) | DUBBIO | «Oltre» e uguale a 75% non coincidono; il regolamento sportivo va letto per l’estremo incluso. Scala dei punti ridotti già dichiarata non memorizzabile. | nessuna modifica |
| f1-gomme-e-carburante | p. 4 | «Monaco 2025 … obbligo di due soste (con tre set di mescole diverse)» | DA VERIFICARE CON FONTE ESTERNA | Il fatto è reale, ma la regola chiedeva di usare almeno tre set; che le mescole fossero tre diverse è da verificare. | nessuna modifica |
| f1-gomme-e-carburante | p. 1 | «C0 … C5; dal 2025 si aggiunge una C6» | DA VERIFICARE CON FONTE ESTERNA | Nomenclatura delle mescole variata più volte (già dichiarato «da verificare»). | nessuna modifica |
| f1-penalita-e-commissari | p. 4 e p. 6 | «3 ammonizioni … penalità di griglia»; «protesta entro circa un’ora»; «revisione 14 giorni» | DA VERIFICARE CON FONTE ESTERNA | Soglie procedurali che cambiano per anno; già con «da verificare» nel testo. | nessuna modifica |
| f1-power-unit-ibrida | p. 4 | «una luce di sicurezza che avverte i commissari» | DUBBIO | La spia avverte i commissari di percorso/soccorritori (marshal), non i commissari sportivi; il termine in italiano è ambiguo. | nessuna modifica |
| f1-adv-power-unit-2026 | tutta la lezione | MGU-K 350 kW, 3 000 MJ/h, 8,5 MJ per giro, nuovi costruttori | DA VERIFICARE CON FONTE ESTERNA | Il testo etichetta già ogni cifra [A]/[M]/[I]. Principi e cifre coincidono con ciò che ricordo del regolamento 2026; tutti i calcoli ricontrollati. Dopo l’avvio della stagione 2026 possono esserci stati aggiornamenti. | nessuna modifica |

## Id modificati

- f1-power-unit-ibrida (f1-l-vettura.js)
- f1-forze-aerodinamiche (f1-l-aero.js)
- f1-pit-stop-e-strategie (f1-l-strategia.js)
- f1-era-ibrida-e-nuovi-regolamenti (f1-l-storia.js)
- f1-safety-car-vsc-bandiera-rossa (f1-l-regole.js)

## Id senza problemi

f1-sistema-di-punti, f1-formato-del-weekend, f1-la-gara-distanza-punti (solo il dubbio sul 75%), f1-penalita-e-commissari, f1-gomme-e-carburante, f1-regolamento-tecnico-principale, f1-budget-cap, f1-ers-e-gestione-energia, f1-drs-e-scia, f1-undercut-e-overcut, f1-anni-settanta-ottanta, f1-economia-e-budget-cap, f1-adv-power-unit-2026. Date, titoli, record e numeri di tabelle e calcoli risultano coerenti (punti, 22/24 gare, distanze di gara, ATR 70–115%, tetto 145/140/135, MGU-K 120 kW, 2 e 4 MJ, tabelle di carico e curva, stint e pareggio, undercut, ERS).

## Limiti

- Revisione a memoria, senza alcuna fonte esterna né accesso a Internet.
- Campione di 18 argomenti su 70: restano da leggere gli altri 52, compresi f1-adv-gestione-energia-ottimale e f1-adv-tempo-sul-giro (non letti).
- Regolamenti 2026 e dettagli procedurali (punti ridotti per gare interrotte, penalità, mescole) non verificati su testi FIA aggiornati.
- Le versioni nei file layer-en/ja non sono state toccate né controllate.
