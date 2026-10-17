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
