# Registro di revisione di affidabilità: lezioni di moto (campione)

Campione: 15 argomenti su 72 (circa 21%), scelti tra gli stadi L0, L1, L3, L4, L5, L6 e orientati ai temi a rischio (frenata, curva, equipaggiamento, fisica, pneumatici, regolamenti, storia con date). Per ogni argomento sono stati letti tutti i testi delle pagine, gli esercizi e il test, e sono stati ricontrollati i calcoli numerici (ricalcolati a mano o con Node). Non sono stati modificati i file `layer-*.js`: le traduzioni EN/JA degli id corretti potrebbero quindi contenere ancora i valori vecchi (vedi limiti).

Classificazione: ERRORE CERTO (verificabile con conoscenza solida o con ricalcolo), DUBBIO, DA VERIFICARE CON FONTE ESTERNA.

## Segnalazioni

| id | pagina / punto | citazione breve | classificazione | motivo | azione |
|---|---|---|---|---|---|
| moto-gomme-e-temperature | P3 (Pressioni a freddo e a caldo); P8 (riepilogo numerico); esercizio «Per avere 2,30 bar relativi a caldo…» | «a freddo si parte da (2,30 + 1,013) × 293,15 / 328,15 − 1,013 ≈ 1,99 bar» | ERRORE CERTO | Il calcolo dà 3,313 × 0,89334 = 2,9596 bar assoluti, quindi 1,947 ≈ **1,95 bar** relativi, non 1,99. Il valore sbagliato compariva in 3 punti, compresa la risposta accettata dell'esercizio. | corretto (testo P3, riepilogo P8, risposta e spiegazione dell'esercizio: 1,95 / 1.95) |
| moto-fondi-e-condizioni | P8, «Calcolo di buonsenso» | «63,7 m di frenata più 25 m di reazione (≈ 89 m), ti serve più del doppio della distanza dei 2 secondi (50 m)» | ERRORE CERTO | 89 m / 50 m = 1,77, quindi non è «più del doppio». | corretto («quasi il doppio») |
| moto-storia-del-motociclismo-sportivo | P1, primo Tourist Trophy | «Nel 1907 … sul Mountain Course di 37,73 miglia» | ERRORE CERTO | Il TT del 1907 si corse sul circuito corto di St John's (circa 15,8 miglia). Il Mountain Course da 37,73 miglia è in uso dal 1911. | corretto (1907 su St John's, circa 16 miglia; dal 1911 Mountain Course) |
| moto-storia-del-motociclismo-sportivo | P5 e P7, Ducati | «vincitrice del titolo piloti nel 2022 … e nel 2023» | DA VERIFICARE CON FONTE ESTERNA | Non è falso, ma incompleto/non aggiornato: a memoria Ducati ha vinto anche nel 2024 (Martín) e nel 2025 (M. Márquez). Anche «rientro Aprilia 2015» e «Suzuki ritirata a fine 2022» andrebbero confrontati con una fonte. | lasciato |
| moto-regolamento-tecnico | P4, pneumatici | «Moto2 e Moto3: Dunlop» | DA VERIFICARE CON FONTE ESTERNA | A memoria i fornitori delle classi minori possono essere cambiati o essere in scadenza di contratto; non verificabile senza fonte. La stessa pagina avverte che i dati vanno verificati. | lasciato |
| moto-regolamento-tecnico | P1, P7 (regole dal 2027: 850 cc, divieto ride height device) e P4 (fornitore gomme) | «Dal 2027 … motori da 850 cc» | DA VERIFICARE CON FONTE ESTERNA | Dato dichiarato come annunciato; a memoria coerente, ma può essere stato aggiornato (compreso il fornitore gomme dal 2027). | lasciato |
| moto-regolamento-tecnico | P2, esempio peso/potenza | «250 CV su … 227 kg → circa 1,1 CV/kg» | DUBBIO | Valore didattico: la potenza reale di una MotoGP è più alta di 250 CV. L'aritmetica è corretta e la direzione del confronto con le auto non cambia. | lasciato |
| moto-regolamento-tecnico | P7, vincolo del ride height device | «non attivabile dal pilota in modo libero» | DUBBIO | Formulazione vaga sulle regole d'uso del dispositivo; non verificabile a memoria. | lasciato |
| moto-pneumatici-moto | P6, battistrada legale | «1,6 mm; verifica la normativa vigente» | DA VERIFICARE CON FONTE ESTERNA | Il testo è già prudente. Non sono sicuro che il minimo di 1,6 mm valga per i motoveicoli in Italia con la stessa formulazione delle auto. | lasciato |
| moto-frenata-abs-e-aiuti-elettronici | P4, date ABS | «obbligatorio … sopra i 125 cm³ (dal 2016); … ABS o frenata combinata (dal 2019)» | DA VERIFICARE CON FONTE ESTERNA | Il regolamento UE 168/2013 distingue le omologazioni di nuovo tipo e tutte le nuove immatricolazioni (2016/2017); le date esatte per le piccole cilindrate vanno confermate. Il testo invita già a controllare sul modello. Lo stesso vale per il cenno in moto-frenata-corretta P4. | lasciato |
| moto-la-curva-su-strada | P6, controsterzo | «È la fisica del giroscopio e dell'equilibrio» | DUBBIO | Semplificazione: l'effetto giroscopico contribuisce ma di norma non è la causa principale del controsterzo. Il resto del paragrafo è corretto. | lasciato |
| moto-aderenza-e-cerchio | P7, esempio curva 0,38 g | «la riserva è dimezzata» | DUBBIO | Con μ da 1,0 a 0,6 la riserva passa da 0,62 g a 0,22 g (oppure dal 62% al 37% del limite): non è esattamente «metà». Il senso qualitativo è corretto. | lasciato |
| moto-aderenza-e-cerchio | P4, esempio 2 | «lo spazio di frenata possibile in curva quasi triplica» | DUBBIO | Il rapporto 0,85/0,28 è circa 3,0: «triplica» sarebbe più esatto. Differenza trascurabile. | lasciato |
| moto-geometria-avancorsa | P4, momento di richiamo | «N_f · trail · sin δ (… trascurando il fattore cos ε)» | DUBBIO | Per un asse di sterzo inclinato il momento attorno all'asse contiene di norma un fattore sin ε, non cos ε. Il testo lo dichiara come ordine di grandezza; i confronti relativi tra moto restano validi. | lasciato |
| moto-frenata-trail-braking | P1–P8 | tutti i calcoli (131 m, 4,7 s, 1,13 g, 1 266 N, 118 m, 157 m, 36 km/h) | nessun problema | Ricalcolati: coerenti. | n/a |
| moto-baricentro-e-masse | P1–P8 | b = 0,659 m; 0,567 m; 39°; frequenze sag | nessun problema | Ricalcolati (compreso il modello con spessore e spostamento del pilota): coerenti. | n/a |
| moto-frenata-trail-braking | P3, descrizione rilascio | «con lunghezza uniforme» | DUBBIO | Espressione poco chiara (probabilmente «in modo uniforme»); non è un errore tecnico. | lasciato |
| moto-storia-del-motociclismo-sportivo | P4, Kenny Roberts | «introdusse in Europa lo stile in curva con ginocchio e corpo fuori» | DUBBIO | Attribuzione popolare ma semplificata: la guida con il corpo fuori era già usata da altri piloti prima di Roberts (a memoria Hailwood, Saarinen); Roberts la rese celebre nella classe regina. | lasciato |

## Id modificati

- moto-gomme-e-temperature (file `src/content/moto-l-pista.js`): 1,99 bar corretto in 1,95 bar (testo, riepilogo, esercizio).
- moto-fondi-e-condizioni (file `src/content/moto-l-strada.js`): «più del doppio» corretto in «quasi il doppio».
- moto-storia-del-motociclismo-sportivo (file `src/content/moto-l-corse.js`): circuito del TT 1907.

Verifiche eseguite dopo le modifiche: `node tools/validate-content.js` stampa «Contenuti validi» (restano due ATTENZIONE preesistenti su argomenti jpn, non toccati) e `node --check` è ok su `moto-l-pista.js`, `moto-l-strada.js`, `moto-l-corse.js`.

## Id esaminati senza errori certi

moto-frenata-corretta, moto-rischio-e-statistica, moto-la-curva-su-strada, moto-equipaggiamento-e-sicurezza-passiva, moto-baricentro-e-masse, moto-aderenza-e-cerchio, moto-pneumatici-moto, moto-regolamento-tecnico, moto-frenata-trail-braking, moto-geometria-avancorsa, moto-frenata-abs-e-aiuti-elettronici, moto-adv-dinamica-semplificata (alcuni con DUBBI o voci DA VERIFICARE elencati sopra, ma senza errori certi).

## Limiti della revisione

- Revisione fatta a memoria: nessuna fonte esterna consultata (nessuna norma, regolamento sportivo o database di risultati).
- I calcoli sono stati ricontrollati (a mano e con Node dove utile), ma i valori di riferimento didattici (μ, potenze, pressioni minime, frequenze) non sono stati confrontati con dati reali.
- Date e regolamenti recenti (MotoGP 2024-2027, fornitori di gomme, norme UE su ABS e battistrada) sono le voci più esposte a invecchiamento: vanno verificate con fonte.
- Campione di 15 argomenti su 72: l'assenza di errori negli altri 57 non è dimostrata.
- Non sono stati toccati i file `layer-*.js`: se le traduzioni EN/JA ripetono i valori corretti (1,99 bar; «più del doppio»; Mountain Course 1907), vanno riallineate con il flusso previsto per i layer.
- Sono stati corretti solo gli ERRORI CERTI; i DUBBI e le voci DA VERIFICARE sono lasciati invariati.

---

## Seconda revisione

Campione aggiuntivo: 22 argomenti non letti nella prima revisione (totale cumulato 37 su 72, circa 51%), letti per intero (pagine, esercizi e test), con ricalcolo via Node di tutti i numeri svolti (limiti patente A1/A2, spazi e tempi di reazione, cilindrata/CR/velocità del pistone, rendimento e bilancio termico, rigidezza alla ruota, frequenza propria e smorzamento, SAG, energia cinetica e idraulica dei freni, pressioni a caldo, tan θ e limiti di aderenza, giroscopio e controsterzo, trasferimenti di carico con i limiti di stoppie e impennata, potenza aerodinamica con rotolamento (soluzione numerica), settori e giro teorico, delta tempo, correlazione e test t, punteggi MotoGP, Magic Formula, camber thrust, modello termico a parametri concentrati, PME e forze d'inerzia). Non sono stati letti i pilota-moto. Stessa classificazione: ERRORE CERTO / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

### Argomenti esaminati

| Stadio | id | File |
|---|---|---|
| L0 | moto-patenti-codice-e-documenti | moto-l-basi.js |
| L0 | moto-controlli-prima-di-partire | moto-l-basi.js |
| L0 | moto-scegliere-la-prima-moto | moto-l-basi.js |
| L1 | moto-visione-e-distanza | moto-l-strada.js |
| L2 | moto-motore-quattro-tempi | moto-l-meccanica.js |
| L2 | moto-lubrificazione-raffreddamento | moto-l-meccanica.js |
| L2 | moto-impianto-elettrico | moto-l-meccanica.js |
| L2 | moto-sospensioni | moto-l-meccanica.js |
| L2 | moto-freni-ruote-pneumatici | moto-l-meccanica.js |
| L3 | moto-fisica-della-curva | moto-l-dinamica.js |
| L3 | moto-giroscopio-e-controsterzo | moto-l-dinamica.js |
| L3 | moto-trasferimenti-di-carico | moto-l-dinamica.js |
| L3 | moto-aerodinamica-della-moto | moto-l-dinamica.js |
| L4 | moto-track-day | moto-l-pista.js |
| L4 | moto-dati-bandiere-sicurezza | moto-l-pista.js |
| L5 | moto-campionati-e-discipline | moto-l-corse.js |
| L5 | moto-weekend-di-gara-e-punti | moto-l-corse.js |
| L5 | moto-sicurezza-nelle-corse | moto-l-corse.js |
| L6 | moto-adv-motore-prestazioni | moto-l-avanzato.js |
| L6 | moto-adv-modelli-pneumatico | moto-l-avanzato.js |
| L6 | moto-adv-assetto-setup | moto-l-avanzato.js |
| L6 | moto-adv-telemetria-dati | moto-l-avanzato.js |

### Segnalazioni

| id | pagina / punto | citazione breve | classificazione | motivo | azione |
|---|---|---|---|---|---|
| moto-dati-bandiere-sicurezza | P2 «Lap time, settori e giro teorico» | «il settore 2 (maggiore oscillazione, 41,7–42,1 s) è il meno ripetibile» | ERRORE CERTO | Dai cinque giri della stessa pagina: S1 oscilla 32,1–32,6 (0,5 s, SD 0,19), S2 41,7–42,1 (0,4 s, SD 0,16), S3 35,9–36,4 (0,5 s, SD 0,19). Il settore 2 è quindi il MENO variabile, non il più variabile; inoltre il margine al giro teorico è 0,4 s, non «un decimo». | corretto («i settori 1 e 3 (oscillazione 0,5 s) sono i meno ripetibili; il settore 2 oscilla di 0,4 s»; «Quei 0,4 s di margine») |
| moto-adv-assetto-setup | P4 «Idraulica», ES. 4 e 5 | «c_cr = 2·√(k·m) = 3 556 N·s/m; ζ = 0,3 → 1 067; ζ = 0,7 → 2 489; forza 747 N» | ERRORE CERTO | Con k = 28 700 N/m e m = 110 kg: c_cr = 2·√(3 157 000) = 3 553,6 N·s/m (non 3 556). Di conseguenza 1 066, 2 488 e 746 N. Scarto di 2,4 su 3 554 (0,07%), ma il valore non corrisponde a nessun arrotondamento del calcolo mostrato. | corretto nel testo e nei due esercizi (risposte accettate: 3554 / 3 554 / 3553,6; 2488 / 2 488) |
| moto-sospensioni | P3 «Il mono posteriore e i leveraggi» | «Con leveraggi progressivi, MR diminuisce a fine corsa, quindi la sospensione si irrigidisce» | ERRORE CERTO | Nella stessa pagina MR = corsa molla / corsa ruota (0,6) e la rigidezza alla ruota vale k·MR². Se MR diminuisse, k·MR² diminuirebbe e la sospensione si ammorbidirebbe, il contrario di ciò che dice la frase. Con questa definizione un leveraggio progressivo ha MR crescente. (Lo stesso uso di MR in moto-adv-assetto-setup è coerente.) | corretto («MR aumenta a fine corsa (l'ammortizzatore si muove di più per ogni mm di ruota)») |
| moto-visione-e-distanza | P4 «Angoli ciechi, specchietti, visibilità» | «non farti mai affidamento sulla visibilità» | ERRORE CERTO | Refuso grammaticale («non fare mai affidamento»). | corretto |
| moto-freni-ruote-pneumatici | P3 «Pompa e idraulica: calcolo» | «Pinza con 4 pistoncini da Ø 27 mm: area totale 2 290 mm² → forza di serraggio 2 980 N per pastiglia» | DUBBIO | In una pinza fissa a 4 pistoncini (descritta nella pagina P2 come «pistoni su entrambi i lati») ogni pastiglia è spinta da 2 pistoncini: la forza per pastiglia sarebbe circa la metà (≈ 1 490 N), con coppia e decelerazione dimezzate (≈ 0,47 g invece di 0,94 g). Il calcolo è corretto per una pinza flottante con 4 pistoncini su un solo lato; il testo non specifica il tipo. | lasciato |
| moto-visione-e-distanza | P7 «Posizione nella corsia» | «Il riferimento generale è la parte centrale… Evita il centro dove si accumula olio» | DUBBIO | Le due frasi sembrano in contrasto («parte centrale» e «evita il centro»). Probabilmente la prima indica la corsia in generale e la seconda la fascia centrale con olio/gomma, ma il testo è ambiguo. | lasciato |
| moto-scegliere-la-prima-moto | P2 «Altezza della sella» | «media 780–830 mm; alta oltre 850 mm» | DUBBIO (lieve) | Il tratto 830–850 mm non rientra in nessuna fascia. | lasciato |
| moto-sospensioni | P6 «SAG» | «SAG a vuoto circa 5–15 mm» e esempio con SAG a vuoto 20 mm | DUBBIO (lieve) | I valori tipici sono dichiarati «ordine di grandezza»; l'esempio (20 mm, 16,7%) cade appena fuori dall'intervallo citato. | lasciato |
| moto-trasferimenti-di-carico | P6 «Ruolo di baricentro e interasse» | «Le sportive hanno il baricentro più basso e l'interasse corto» | DUBBIO | Affermazione relativa non motivata: rispetto a cruiser/touring le sportive hanno interasse corto, ma il baricentro non è in genere più basso. Non incide sui calcoli. | lasciato |
| moto-patenti-codice-e-documenti | P2–P6 | soglie di età, potenza, rapporto kW/kg, revisione 4+2 anni, alcol zero primi 3 anni/under 21, limiti 50/90/110/130, 20 punti | DA VERIFICARE CON FONTE ESTERNA | Coerenti con quanto ricordo del Codice (riforma 2024 compresa, che ha introdotto altre modifiche alle sanzioni); la lezione stessa invita a verificare sul testo vigente. | lasciato |
| moto-weekend-di-gara-e-punti | P1–P4 | formato Practice/Q1–Q2/Sprint, punti 12-9-7-6-5-4-3-2-1 e 25-20-…-1, griglia 3-3-3 | DA VERIFICARE CON FONTE ESTERNA | Coerente con il formato 2023–2025 che ricordo; il testo avverte che il programma cambia da stagione a stagione, e il calendario/regolamento delle stagioni successive va confrontato con fonte aggiornata. | lasciato |
| moto-freni-ruote-pneumatici / moto-track-day | battistrada legale 1,6 mm; ABS obbligatorio dal 2016–2017 | — | DA VERIFICARE CON FONTE ESTERNA | Stessa voce già aperta nella prima revisione (moto-pneumatici-moto, moto-frenata-abs-e-aiuti-elettronici). | lasciato |

Verificati e coerenti (esempi): date e fatti storici di moto-campionati-e-discipline e moto-sicurezza-nelle-corse (Moto2 2010/765 cc dal 2019, Moto3 2012, MotoE 2019 e Ducati V21L dal 2023, WorldSBK 1988 Donington con Merkel, Rea 2015–2020, Suzuka 1978, Bol d'Or 1922, Dakar KTM 2001–2019, Parlotti 1972, Clinica Mobile 1977, D-air 2007, Simoncelli/Misano 2012); Magic Formula (picco 1 800 N a ≈ 13,5°, tutti i valori della tabella), camber thrust (0,33/0,48-0,49/0,62/0,90), 289/245/214/152 km/h con rotolamento, 14,1 bar di PME, forza d'inerzia 6,9 e 13,5 kN, r = −0,544 e t = −1,59.

### Id modificati (seconda revisione)

- moto-dati-bandiere-sicurezza (src/content/moto-l-pista.js): ripetibilità dei settori nel giro teorico. **Nota layer**: i riepiloghi EN/JA potrebbero riportare «settore 2 il meno ripetibile».
- moto-adv-assetto-setup (src/content/moto-l-avanzato.js): c_cr 3 554, c = 1 066 / 2 488 N·s/m, forza 746 N; risposte accettate dei due esercizi aggiornate. **Nota layer**: i riepiloghi EN/JA potrebbero riportare 3 556 / 1 067 / 2 489 / 747.
- moto-sospensioni (src/content/moto-l-meccanica.js): MR aumenta (non diminuisce) a fine corsa con leveraggi progressivi. **Nota layer**: eventuale frase equivalente nei riepiloghi EN/JA.
- moto-visione-e-distanza (src/content/moto-l-strada.js): refuso «non fare mai affidamento».

Dopo le modifiche: `node tools/validate-content.js` stampa «Contenuti validi» (restano le ATTENZIONE preesistenti su str-/eng-/jpn-, non toccate); `node --check` superato su moto-l-pista.js, moto-l-avanzato.js, moto-l-meccanica.js, moto-l-strada.js.

### Id esaminati senza errori certi

moto-patenti-codice-e-documenti, moto-controlli-prima-di-partire, moto-scegliere-la-prima-moto, moto-motore-quattro-tempi, moto-lubrificazione-raffreddamento, moto-impianto-elettrico, moto-freni-ruote-pneumatici (solo DUBBIO sulla pinza), moto-fisica-della-curva, moto-giroscopio-e-controsterzo, moto-trasferimenti-di-carico, moto-aerodinamica-della-moto, moto-track-day, moto-campionati-e-discipline, moto-weekend-di-gara-e-punti, moto-sicurezza-nelle-corse, moto-adv-motore-prestazioni, moto-adv-modelli-pneumatico, moto-adv-telemetria-dati.

### Limiti della seconda revisione

- Revisione a memoria con ricalcolo: nessuna fonte esterna consultata (norme, regolamenti sportivi, risultati). Le voci DA VERIFICARE riguardano soprattutto norme italiane/UE e formati di campionato aggiornati.
- Restano da leggere in una eventuale terza revisione i 24 argomenti non ancora campionati dell'elenco ext/moto-todo.txt (moto-tipi-di-moto, moto-anatomia-e-comandi, moto-posizione-equilibrio-primi-movimenti, moto-gruppo-e-viaggi, moto-guida-difensiva-e-mentalita, moto-motore-due-tempi, moto-architetture-motore, moto-alimentazione-scarico, moto-frizione-cambio-trasmissione, moto-telaio-ciclistica, moto-manutenzione-programmata, moto-diagnostica-problemi, moto-body-position, moto-traiettorie-e-corda, moto-gas-e-uscita, moto-cambio-e-freno-motore, moto-kart-e-auto-in-pista, moto-preparazione-del-pilota, moto-squadre-e-business, moto-piloti-e-carriere, moto-tecnologia-e-cultura, moto-adv-elettronica-bordo, moto-adv-aerodinamica-moto, moto-adv-simulazione-giro), oltre ai moto-piloti.
- Layer EN/JA non toccati: vanno riallineate le correzioni indicate nelle note layer sopra.
