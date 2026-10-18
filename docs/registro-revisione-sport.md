# Registro di revisione affidabilità: campione di lezioni di sport

Campione: 14 argomenti su 69 (circa 20%), letti per intero (pagine, esercizi e test), con ricalcolo di tutti i numeri svolti (anche via script per monotonia/strain, regressioni CP e W′).

Classificazione: ERRORE CERTO (verificabile con conoscenza solida o con il calcolo) / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

## Argomenti esaminati

| Stadio | id | File |
|---|---|---|
| L0 | spo-sistemi-energetici | spo-l-fisiologia.js |
| L2 | spo-mobilita-prevenzione-infortuni | spo-l-forza.js |
| L4 | spo-monitoraggio-del-carico | spo-l-resistenza.js |
| L5 | spo-macronutrienti | spo-l-nutrizione.js |
| L6 | spo-idratazione-e-termoregolazione | spo-l-nutrizione.js |
| L6 | spo-integratori-e-doping | spo-l-nutrizione.js |
| L7 | spo-adv-potenza-critica | spo-l-fisiologia2.js |
| L9 | spo-adv-infortunio-rischio-rientro | spo-l-prestazione2.js |
| L10 | spo-adv-energia-salute-atleta | spo-l-nutrizione2.js |
| L10 | spo-adv-idratazione-minerali | spo-l-nutrizione2.js |
| L10 | spo-adv-proteine-avanzate | spo-l-nutrizione2.js |
| L10 | spo-adv-ferro-vitamina-d | spo-l-nutrizione2.js |
| L11 | spo-adv-giovani | spo-l-popolazioni.js |
| L11 | spo-adv-atlete | spo-l-popolazioni.js |

## Segnalazioni

| id | Pagina / punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| spo-integratori-e-doping | p. 7 «Doping: rischi e regole», rischi per la salute | «l’EPA/EPO e il doping ematico aumentano il rischio di trombosi…» | ERRORE CERTO | EPA è l’acido eicosapentaenoico (omega-3, citato come integratore utile nella lezione spo-macronutrienti), non una sostanza dopante; la sostanza è l’EPO (eritropoietina). Refuso che attribuisce rischi di doping a un omega-3. | corretto («EPO e il doping ematico») |
| spo-adv-potenza-critica | p. 6 «Il modello a tre parametri» | «La differenza è del 10–15% in questi esempi» | ERRORE CERTO | Dai numeri della stessa pagina: a 400 W 147 s contro 180 s = −18%; a 350 W 255 s contro 288 s = −11,5%. L’intervallo 10–15% non contiene il primo caso. | corretto («dell’11–18%») |
| spo-idratazione-e-termoregolazione | p. 7 «Caldo, acclimatazione e segnali di allarme» | «assenza di sudore con pelle calda» tra i segnali del colpo di calore | DUBBIO | Nel colpo di calore da esercizio la sudorazione spesso è ancora presente (l’assenza di sudore è tipica del colpo di calore classico, non da sforzo). Elencarla come segnale può far escludere il pericolo in un atleta che suda. Il resto dell’elenco (confusione, barcollamento, collasso) è corretto. | lasciato |
| spo-adv-proteine-avanzate | p. 6 «Qualità proteica» | «pattern di riferimento per adulti: lisina ≈ 48 mg/g di proteine» | DA VERIFICARE CON FONTE ESTERNA | Se ricordo bene, il pattern FAO 2013 per adulti/adolescenti riporta lisina 45 mg/g, mentre 48 mg/g è quello della fascia 3-10 anni. L’esempio è dichiarato «didattico, numeri indicativi», ed è coerente internamente (esercizi e test usano 48). | lasciato |
| spo-adv-ferro-vitamina-d | p. 2 «Gli esami» | «valori più alti, ad esempio 30–45 µg/L, sono usati in presenza di infiammazione» | DA VERIFICARE CON FONTE ESTERNA | Mi risulta che l’OMS (2020) indichi per le persone con infiammazione/infezione soglie molto più alte (70 µg/L) rispetto a 15 µg/L; il testo è formulato con «ad esempio» e «nella pratica clinica», quindi non è falso ma può essere impreciso nell’attribuzione. | lasciato |
| spo-mobilita-prevenzione-infortuni | p. 4 «Che cosa dice l’evidenza» | «Lauersen e colleghi (2014) su 26 studi randomizzati (oltre 26 000 partecipanti)» | DA VERIFICARE CON FONTE ESTERNA | Ricordo 25 studi e circa 26 600 partecipanti; non sono abbastanza sicuro da correggere. Le stime riportate (RR ≈ 0,32 forza; −45% propriocezione; stretching nullo) sono coerenti con quanto ricordo. | lasciato |
| spo-adv-energia-salute-atleta / spo-adv-atlete | soglie EA 30 / 45 kcal/kg MM | «45 kcal/kg di massa magra/die… buona disponibilità» | DUBBIO (lieve) | Le soglie sono presentate correttamente come indicative, con limiti e zona grigia espliciti. Nessuna modifica necessaria; segnalato solo perché sono numeri molto citati e con evidenza sperimentale limitata (già dichiarato nel testo). | lasciato |
| spo-adv-idratazione-minerali | p. 8 «Alcol, caldo e altura» | «aumento del metabolismo basale dell’ordine del 10–20% nei primi giorni oltre i 3 000–4 000 m» | DA VERIFICARE CON FONTE ESTERNA | Ordine di grandezza plausibile ma con forte variabilità; il testo lo presenta come «alcuni studi» e «ordini di grandezza». | lasciato |

## Id modificati

- spo-integratori-e-doping (src/content/spo-l-nutrizione.js)
- spo-adv-potenza-critica (src/content/spo-l-fisiologia2.js)

Dopo le modifiche: `node tools/validate-content.js` stampa «Contenuti validi»; `node --check` superato sui due file.

## Id esaminati senza problemi (nessuna segnalazione, o solo note «lasciato» sopra)

- spo-sistemi-energetici
- spo-mobilita-prevenzione-infortuni (solo nota sul numero di studi di Lauersen)
- spo-monitoraggio-del-carico
- spo-macronutrienti
- spo-idratazione-e-termoregolazione (solo nota sul segno «assenza di sudore»)
- spo-adv-infortunio-rischio-rientro
- spo-adv-energia-salute-atleta
- spo-adv-idratazione-minerali
- spo-adv-proteine-avanzate (solo nota sul pattern lisina)
- spo-adv-ferro-vitamina-d (solo nota sulla soglia di ferritina)
- spo-adv-giovani
- spo-adv-atlete

## Verifiche numeriche confermate

Tutti i calcoli svolti e le risposte degli esercizi/test sono coerenti con il testo e corretti: sistemi energetici (VO2→kcal, MET, deficit di O2, t½ della PCr), monotonia e strain (media, SD n−1, 1,28/2 227 e 2,17/5 418 e 1,24/2 981), ACWR accoppiato e non, CP/W′ da 2 e 3 prove (regressioni 266,9 W/23,4 kJ e 264,5 W/24,3 kJ), velocità critica, W′bal, χ² del relative age effect, VPP/VPN/LR/NNT, EA e massa magra, sodio nel sudore, caffeina, alcol, PDCAAS/DIAAS, bilancio azotato, TSAT, conversioni vitamina D.

## Limiti della revisione

- Revisione fatta a memoria: nessuna fonte esterna consultata (nessun accesso a articoli, linee guida o liste WADA aggiornate).
- Campione di 14 lezioni su 69: l’assenza di errori nel campione non garantisce l’assenza negli altri 55 argomenti.
- Sono stati corretti solo errori verificabili con calcolo o con conoscenza solida; le voci «DUBBIO» e «DA VERIFICARE» richiedono un controllo sulle fonti primarie (OMS 2020 per la ferritina, FAO 2013 per i pattern amminoacidici, Lauersen 2014, consensi IOC/ACSM/EFSA più recenti).
- Dati regolatori (lista WADA, limiti EFSA, linee guida IOC) possono essere cambiati dopo la mia conoscenza e vanno riverificati.
- Non sono state riesaminate le traduzioni dei layer (layer-*.js, non toccati): le correzioni sono state fatte solo nei file sorgente italiani, quindi le versioni tradotte delle due frasi potrebbero ancora contenere il testo precedente.

---

## Seconda revisione

Campione aggiuntivo: 22 argomenti non letti nella prima revisione (totale cumulato 36 su 69, circa 52%), letti per intero (pagine, esercizi e test), con ricalcolo via Node di tutti i numeri svolti (BMR/TDEE, Siri, EA, Riegel, ACSM, Karvonen, Banister/CTL/ATL/TSB con simulazione giorno per giorno, TRIMP, TSS, NP, EWMA/ACWR, PIO2 e PAO2, CaO2, bilancio termico, VBT, profilo F-V e sprint mono-esponenziale, statistica: potenza, MBI, Bayes, meta-analisi a effetto fisso, Q/I²). Stessa classificazione: ERRORE CERTO / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

### Argomenti esaminati

| Stadio | id | File |
|---|---|---|
| L5 | spo-energia-e-bilancio-energetico | spo-l-nutrizione.js |
| L5 | spo-micronutrienti-e-fibre | spo-l-nutrizione.js |
| L5 | spo-pattern-alimentari-e-salute | spo-l-nutrizione.js |
| L5 | spo-idratazione-etichette-e-miti | spo-l-nutrizione.js |
| L6 | spo-peso-e-composizione-corporea | spo-l-nutrizione.js |
| L3 | spo-soglie-vo2max-economia | spo-l-resistenza.js |
| L3 | spo-hiit-intervalli-sit | spo-l-resistenza.js |
| L4 | spo-tapering-e-picco-di-forma | spo-l-resistenza.js |
| L4 | spo-periodizzazione | spo-l-resistenza.js |
| L0 | spo-cardio-respiratorio | spo-l-fisiologia.js |
| L0 | spo-recupero-fatica | spo-l-fisiologia.js |
| L7 | spo-adv-bioenergetica-lattato | spo-l-fisiologia2.js |
| L7 | spo-adv-cinetica-vo2-economia | spo-l-fisiologia2.js |
| L7 | spo-adv-ambienti-estremi | spo-l-fisiologia2.js |
| L8 | spo-adv-vbt | spo-l-forza2.js |
| L8 | spo-adv-profilo-fv | spo-l-forza2.js |
| L9 | spo-adv-modellazione-del-carico | spo-l-prestazione2.js |
| L9 | spo-adv-statistica-applicata | spo-l-prestazione2.js |
| L10 | spo-adv-periodizzazione-carboidrati | spo-l-nutrizione2.js |
| L10 | spo-adv-carboidrati-multitrasportabili | spo-l-nutrizione2.js |
| L10 | spo-adv-evidenze-integratori-clinica | spo-l-nutrizione2.js |
| L11 | spo-adv-master | spo-l-popolazioni.js |

### Segnalazioni

| id | Pagina / punto | Citazione breve | Classificazione | Motivo | Azione |
|---|---|---|---|---|---|
| spo-adv-cinetica-vo2-economia | p. 5 «I fattori limitanti di VO2max», sensibilità a Hb | «Hb da 15 a 16 g/dL → CaO2 = 21,4 → differenza 17,4 → VO2 = 4,33 L/min» | ERRORE CERTO | CaO2 = 1,34 × 16 × 0,98 + 0,3 = 21,31 (non 21,4); con CvO2 = 4 la differenza è 17,3. Con 17,4 il VO2 sarebbe 250 × 17,4 = 4,35 L/min, incoerente con il 4,33 riportato (che deriva da 17,3). Il risultato finale (4,33; +8%) era corretto, gli intermedi no. | corretto («CaO2 = 21,3 → differenza 17,3») |
| spo-soglie-vo2max-economia | p. 8 «Come si allenano soglia ed economia» | «un principiano trae più beneficio» | ERRORE CERTO | Refuso («principiante»). | corretto |
| spo-recupero-fatica | p. 3 «Fatica centrale e periferica» | «dal giunzione neuromuscolare in giù» | ERRORE CERTO | Refuso grammaticale («dalla giunzione»). | corretto |
| spo-adv-modellazione-del-carico | p. 4, tabella della simulazione di 5 giorni | «h giorno 2 = 97,7; giorno 3 = 175,4» | DUBBIO (lieve) | Ricalcolando con e^(−1/42) si ottiene 97,6 e 175,3 (scarto di 0,1, che non cambia p né le risposte accettate degli esercizi). Probabile arrotondamento diverso. | lasciato |
| spo-adv-master | p. 3 «Il calo del VO2max» | «servono circa 15–18 ml/kg/min per mantenere l'indipendenza» | DA VERIFICARE CON FONTE ESTERNA | Il testo lo dichiara «ordine di grandezza basato su dati osservazionali, non soglia clinica»; il valore esatto in letteratura non è verificabile a memoria. | lasciato |
| spo-adv-evidenze-integratori-clinica | p. 5 «Contaminazione» | «Geyer e coll. 2004: 94 su 634 (14,8%) contenevano steroidi anabolizzanti non dichiarati» | DA VERIFICARE CON FONTE ESTERNA | Aritmetica corretta (94/634 = 14,8%); a memoria il lavoro riguarda prodotti con precursori/prohormoni di steroidi, e il campione era di 634 prodotti non ormonali: la dicitura «steroidi anabolizzanti» andrebbe confrontata con l'articolo. | lasciato |
| spo-idratazione-etichette-e-miti | p. 4 «Caffeina e salute» | «200 mg in una singola dose (anche vicino all'attività intensa)» | DA VERIFICARE CON FONTE ESTERNA | Il parere EFSA 2015 indica 200 mg in dose singola anche per l'assunzione entro 2 ore da attività fisica intensa (dato coerente con quanto ricordo); resta da confrontare la formulazione con il documento. | lasciato |

Tutti gli altri calcoli e fatti dei 22 argomenti sono risultati coerenti con il ricalcolo e con conoscenze solide (esempi: PREDIMED ~7 400 e ~30%, EFSA acqua 2,5/2,0 L, EWGSOP2 27/16 kg, Moore 2015 0,40 contro 0,24 g/kg, Bosquet 2007 41–60% e 8–14 giorni, OMS 2020, ESC/ESH 2018, ADA, Friedewald, 1,1% Hb mass ogni 100 h, SGLT1 1,0–1,2 g/min, Hopkins 0,2–0,6–1,2–2,0–4,0).

### Id modificati (seconda revisione)

- spo-adv-cinetica-vo2-economia (src/content/spo-l-fisiologia2.js): CaO2 e differenza a-v nel calcolo di sensibilità. **Nota layer**: i riepiloghi EN/JA potrebbero ripetere «21,4 / 17,4».
- spo-soglie-vo2max-economia (src/content/spo-l-resistenza.js): refuso «principiante».
- spo-recupero-fatica (src/content/spo-l-fisiologia.js): refuso «dalla giunzione».

Dopo le modifiche: `node tools/validate-content.js` stampa «Contenuti validi» (restano le ATTENZIONE preesistenti su str-/eng-/jpn-, non toccate); `node --check` superato su spo-l-fisiologia.js, spo-l-fisiologia2.js, spo-l-resistenza.js.

### Id esaminati senza problemi (nessuna segnalazione, o solo note «lasciato» sopra)

spo-energia-e-bilancio-energetico, spo-micronutrienti-e-fibre, spo-pattern-alimentari-e-salute, spo-idratazione-etichette-e-miti (solo nota caffeina), spo-peso-e-composizione-corporea, spo-hiit-intervalli-sit, spo-tapering-e-picco-di-forma (Banister: 38,3 al giorno 30,6 confermato), spo-periodizzazione, spo-cardio-respiratorio, spo-adv-bioenergetica-lattato, spo-adv-ambienti-estremi, spo-adv-vbt, spo-adv-profilo-fv, spo-adv-modellazione-del-carico (solo nota di arrotondamento), spo-adv-statistica-applicata, spo-adv-periodizzazione-carboidrati, spo-adv-carboidrati-multitrasportabili, spo-adv-evidenze-integratori-clinica (solo nota Geyer), spo-adv-master (solo nota 15–18 ml/kg/min).

### Limiti della seconda revisione

- Anche questa è una revisione a memoria e con ricalcolo; nessuna fonte esterna consultata. Restano da leggere in una eventuale terza revisione i 33 argomenti non ancora campionati (spo-muscolo-scheletrico, spo-sistema-nervoso-coordinazione, spo-adattamento-allenamento, spo-metodo-scientifico-sport, spo-principi-costruzione-forza, spo-ipertrofia-muscolare, spo-tecnica-biomeccanica-fondamentali, spo-forza-massimale-neurale, spo-potenza-e-rfd, spo-pliometria, spo-velocita-agilita-cambi-direzione, spo-allenamento-aerobico, spo-sport-di-squadra, spo-sport-di-combattimento, spo-resistenza-potenza-racchetta, spo-nutrizione-per-la-performance, spo-adv-segnali-molecolari, spo-adv-neuromuscolare-tendine, spo-adv-differenze-individuali, spo-adv-programmazione, spo-adv-tendine-rigidita, spo-adv-eccentrico-accomodante, spo-adv-ipertrofia-avanzata, spo-adv-forza-per-sport, spo-adv-monitoraggio-in-pratica, spo-adv-apprendimento-motorio-avanzato, spo-adv-periodizzazione-evidenza, spo-adv-organizzazione-della-performance, spo-adv-sprint-salti, spo-adv-mezzofondo-ultra, spo-adv-ciclismo-nuoto, spo-adv-combattimento-elite, spo-adv-squadra-elite).
- Layer EN/JA non toccati: la correzione «21,3 / 17,3» va riallineata con il flusso previsto se i riepiloghi riportavano i valori vecchi.
