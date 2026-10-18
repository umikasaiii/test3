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

## Seconda revisione

Campione: 25 argomenti nuovi (non presenti nella prima revisione), letti per intero (pagine, esercizi, test). Ricalcolo via Node di tutti i numeri svolti (velocità/rapporti del cambio, frenata, carico e aderenza, curva con aerodinamica, modello a bicicletta, tempo sul giro e sensibilità, stint ottimo, safety car, Monte Carlo e strategia mista, Magic Formula, modello termico della gomma, programmazione dinamica dell'ERS, cicli Otto/Diesel) e controllo di date e fatti storici a memoria. Le classificazioni sono le stesse della prima revisione.

### Argomenti esaminati

f1-glossario-e-numeri, f1-bandiere-e-segnali, f1-il-circuito, f1-trasmissione-e-cambio, f1-freni, f1-pneumatici-struttura-mescole, f1-aderenza-e-finestra-termica, f1-dinamica-del-veicolo, f1-assetto-e-tarature, f1-simulazione-del-giro, f1-tempo-sul-giro, f1-strategia-gomme, f1-safety-car-e-vsc, f1-incertezza-e-decisioni, f1-telemetria, f1-origini-e-primo-mondiale, f1-anni-cinquanta-sessanta, f1-anni-novanta-duemila, f1-sicurezza-e-momenti-decisivi, f1-effetto-suolo-e-fondo, f1-adv-termodinamica-power-unit, f1-adv-modelli-pneumatico, f1-adv-dinamica-veicolo, f1-adv-gestione-energia-ottimale, f1-adv-tempo-sul-giro.

### Segnalazioni

| id | Pagina / punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| f1-adv-termodinamica-power-unit | p. 5, regole 2014–2025 | «il carburante di gara a 100 kg» | ERRORE CERTO | Il limite di 100 kg vale 2014–2019; dal 2020 è 110 kg (come in f1-gomme-e-carburante, f1-power-unit-ibrida e nella correzione di f1-era-ibrida-e-nuovi-regolamenti). Il testo riferiva 100 kg a tutto il periodo 2014–2025. | corretto («100 kg fino al 2019 e a 110 kg dal 2020») |
| f1-adv-termodinamica-power-unit | p. 8 ed es. E7 | «0,0272 kg/s ≈ 97,9 kg/h»; risposte 97,9 / 97.9 / 98 | ERRORE CERTO | 550 000 / (0,47 · 43·10⁶) = 0,02721 kg/s = 97,97 kg/h, che a un decimale è 98,0, non 97,9. Chi calcolava correttamente 98,0 era segnato errato (il confronto delle risposte è per stringa). | corretti testo, spiegazione e risposte («98,0», «98.0», «98» e, per chi usa 0,0272, «97,9»/«97.9») |
| f1-assetto-e-tarature | p. 6, differenziale | «ruota esterna 700 N·m, interna 300 N·m … aiuta la rotazione» | DUBBIO | In un differenziale a slittamento limitato l'attrito interno tende a trasferire coppia dalla ruota che gira più veloce (l'esterna in curva) a quella più lenta (l'interna), quindi in uscita un blocco alto è di norma associato a più sottosterzo, non a più rotazione. Il verso dipende però da assetto, slittamento delle ruote e tipo di differenziale. | nessuna modifica; da rivedere con un ingegnere di trasmissione |
| f1-strategia-gomme | p. 1 | «da C1 (la più dura) a C5» | DUBBIO | Altre lezioni (f1-pneumatici-struttura-mescole, f1-gomme-e-carburante) parlano di C0–C5. La gamma è cambiata nel tempo (C1–C5 fino al 2022, C0 aggiunta dal 2023): le due scale convivono senza nota. | nessuna modifica |
| f1-il-circuito | p. 1 ed es. T1 | «la distanza superi i 305 km» / «4 km × 76 giri = 304 km» | DUBBIO | L'esercizio ipotetico dà una gara da 304 km, sotto il minimo dichiarato a p. 1. L'aritmetica è corretta. | nessuna modifica |
| f1-freni | p. 6 | «ΔT ≈ 415 K» | DUBBIO | 645 / (1,3 · 1,2) = 413,5 K; la cifra è arrotondata ai 5 K. | nessuna modifica |
| f1-origini-e-primo-mondiale | p. 3 | «Alfa Romeo 158 … 350 CV nella versione iniziale» | DA VERIFICARE CON FONTE ESTERNA | A memoria il 158 del 1938 erogava circa 190–200 CV; i circa 350 CV sono della versione 1950 (il 159 del 1951 arrivò a circa 420). | nessuna modifica |
| f1-anni-cinquanta-sessanta | p. 1 | «record rimasto imbattuto fino al 2002» | DUBBIO | Schumacher eguagliò i 5 titoli di Fangio nel 2002 e li superò (6°) nel 2003; la formula è ambigua (eguagliato, non battuto, nel 2002). | nessuna modifica |
| f1-simulazione-del-giro | p. 6 | «tra 3 000 e 4 000 m cresce di 0,398 s» | DUBBIO | Con i valori tabulati 1,652 − 1,253 = 0,399; probabile arrotondamento dei dati di partenza. | nessuna modifica |
| f1-glossario-e-numeri, f1-adv-gestione-energia-ottimale | varie | peso minimo «circa 800 kg»; cifre ERS illustrative | DA VERIFICARE CON FONTE ESTERNA | Già dichiarati ordini di grandezza o dati illustrativi nel testo. | nessuna modifica |

### Id modificati

- f1-adv-termodinamica-power-unit (f1-l-avanzato.js): limite carburante e arrotondamento di E7/p. 8. Attenzione ai riepiloghi EN/JA (layer-en-f1.js, layer-ja-f1.js): possono riportare «97.9 kg/h» e «100 kg» e non sono stati toccati.

### Id senza problemi

f1-glossario-e-numeri, f1-bandiere-e-segnali, f1-il-circuito (solo il dubbio su T1), f1-trasmissione-e-cambio, f1-freni (solo arrotondamento), f1-pneumatici-struttura-mescole, f1-aderenza-e-finestra-termica, f1-dinamica-del-veicolo, f1-simulazione-del-giro, f1-tempo-sul-giro, f1-strategia-gomme (solo la scala C1–C5), f1-safety-car-e-vsc, f1-incertezza-e-decisioni, f1-telemetria, f1-anni-novanta-duemila, f1-sicurezza-e-momenti-decisivi, f1-effetto-suolo-e-fondo, f1-adv-modelli-pneumatico, f1-adv-dinamica-veicolo, f1-adv-gestione-energia-ottimale, f1-adv-tempo-sul-giro, f1-origini-e-primo-mondiale e f1-anni-cinquanta-sessanta (solo i dubbi indicati). Date, record, punti, tabelle di rapporti, frenata, aderenza, curva, modello a bicicletta, Magic Formula, modello termico, DP dell'ERS e sensibilità risultano coerenti con il ricalcolo.

### Id ancora da leggere

f1-adv-aerodinamica-avanzata, f1-adv-affidabilita-e-dati, f1-affidabilita-e-prestazioni, f1-ali-anteriore-posteriore, f1-analisi-post-gara, f1-bagnato-e-condizioni-variabili, f1-carriere-dietro-le-quinte, f1-che-cose-la-f1, f1-come-e-fatta-una-squadra, f1-come-sistema, f1-confronto-tra-piloti, f1-fia-promotore-costruttori, f1-gestione-dal-muretto, f1-governance-fia-fom, f1-guardare-una-gara, f1-il-weekend-di-gara, f1-la-monoposto-in-sintesi, f1-la-strada-verso-la-formula-1, f1-raffreddamento-e-affidabilita, f1-raffreddamento-e-carrozzeria, f1-schermate-dei-tempi, f1-sicurezza-e-sostenibilita, f1-simulazione-giro-e-gara, f1-sospensioni-e-sterzo, f1-squadre-piloti-ruoli, f1-sviluppo-aerodinamico, f1-telaio-e-monoscocca

### Limiti

- Revisione a memoria, senza fonti esterne né accesso a Internet.
- Le versioni nei file layer-en/ja non sono state toccate né controllate.
