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
