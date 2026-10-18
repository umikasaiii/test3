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

## Seconda revisione

Seconda revisione di affidabilità su 34 argomenti `cul-` non letti nella prima (testo, esercizi e test letti per intero). Revisione a memoria, senza fonti esterne; ricalcolati con Node i calcoli finanziari (rate, montanti, TAEG), con verifica manuale di fisica, chimica, statistica e date.

| id | punto | citazione breve | classificazione | motivo | azione |
|---|---|---|---|---|---|
| cul-ottocento-risorgimento-imperialismo | pagina «La questione sociale», assicurazioni sociali | «Bismarck introduce assicurazioni sociali (1880)» | ERRORE CERTO | La prima legge (assicurazione malattia) è del 1883, seguita da infortuni (1884) e invalidità/vecchiaia (1889); il 1880 non corrisponde a nessuna di esse | corretto in «(dal 1883)» |
| cul-elettricita-e-circuiti | pagina «Carica, corrente e tensione» | «l'alternata (AC) inverte il verso 50 volte al secondo» | ERRORE CERTO | A 50 Hz si hanno 50 cicli al secondo e il verso si inverte 100 volte al secondo | corretto in «inverte il verso 100 volte al secondo (50 cicli al secondo, cioè 50 Hz)» |
| cul-riconoscere-un-malore | pagina «Convulsioni», elenco azioni | «toglie gli occhiali» | ERRORE CERTO | Refuso: gli altri punti dell'elenco sono all'imperativo («proteggi», «misura», «allenta») | corretto in «togli gli occhiali» |
| cul-stato-moderno-e-settecento | pagina «La rivoluzione industriale» | «il reddito per persona cresca stabilmente solo dopo la fine dell'Ottocento» | DUBBIO | Le ricostruzioni più citate collocano l'avvio di una crescita stabile del reddito pro capite in Gran Bretagna già a metà Ottocento; la frase è presentata come tema di studio, ma la data tarda è discutibile | lasciato |
| cul-illuminismo-kant | pagina «Date e collegamenti» | «Tra la nascita e la morte di Kant passano 80 anni (1724–1804)» | DUBBIO | Differenza fra anni solari coerente con l'esercizio; in età effettiva Kant (22 aprile 1724 – 12 febbraio 1804) visse 79 anni. Stesso criterio per altre date di nascita/morte negli esercizi | lasciato |
| cul-elettricita-e-circuiti | pagina «Sovraccarico e uso responsabile» | «Il fulmine… pochi milioni di volt, ma correnti di decine di migliaia di ampere» | DA VERIFICARE CON FONTE ESTERNA | Le stime di tensione di un fulmine citate di solito sono di ordine molto superiore (decine/centinaia di milioni di volt); cifra incerta, il senso del passaggio (corrente elevata per tempo brevissimo) non cambia | lasciato |
| cul-riconoscere-un-malore | pagina «Svenimento» | «Una persona sveglia dopo uno svenimento, sconosciuta per il sistema, va comunque valutata da un medico» | DUBBIO | Frase poco chiara («sconosciuta per il sistema»); il consiglio (valutazione medica) è prudente | lasciato |
| cul-rinascimento | pagina «Brunelleschi e Masaccio» | «Morì a ventisette anni» (Masaccio 1401–1428) | DUBBIO | Per differenza di anni 27, per età effettiva circa 26 (nato a fine dicembre 1401, morto nel 1428) | lasciato |
| cul-roma-impero-e-caduta | pagina «Augusto e il principato» | «oltre 40 anni di potere… 40 anni» | DUBBIO | Se si conta dal 31 a.C. (Azio) sono 44, dal 27 a.C. sono 40: «oltre 40» e «40» non sono del tutto coerenti, ma il testo esplicita il calcolo da 27 a.C. | lasciato |
| cul-corpo-umano, cul-sonno-movimento-abitudini | durate del sonno nei bambini | 9–12 ore (corpo/stress) contro 9–11 ore (sonno-movimento) | DUBBIO | Le fasce variano per fonte (AASM 6–12 anni: 9–12; NSF: 9–11); già dichiarate indicative | lasciato |
| cul-dal-dopoguerra-a-oggi, cul-istituzioni-italiane-e-europee | cifre politiche aggiornabili | UE a 27, area euro a 12 nel 2002, 400+200 parlamentari | DA VERIFICARE CON FONTE ESTERNA | Dati soggetti a modifiche (allargamenti, riforme); coerenti con quanto noto | lasciato |

### Id modificati

- `cul-ottocento-risorgimento-imperialismo` (file `src/content/cul-l-storia.js`): assicurazioni sociali di Bismarck «(1880)» in «(dal 1883)». Possibile ripresa nei riepiloghi EN/JA (`layer-*.js`, non toccati): verificare se citano la data.
- `cul-elettricita-e-circuiti` (file `src/content/cul-l-scienze1.js`): inversione di verso della corrente alternata, da 50 a 100 volte al secondo (50 cicli, 50 Hz). Possibile ripresa nei riepiloghi EN/JA (`layer-*.js`, non toccati): verificare se citano il numero.
- `cul-riconoscere-un-malore` (file `src/content/cul-l-salute.js`): refuso «toglie» in «togli» (nessun fatto/numero, nessun impatto sui layer).

Dopo le modifiche: `node tools/validate-content.js` restituisce «Contenuti validi» (con le sole ATTENZIONE già presenti su contenuti non di Cultura) e `node --check` è senza errori su `cul-l-storia.js`, `cul-l-scienze1.js`, `cul-l-salute.js`. Non sono stati toccati file `layer-*.js`.

### Id esaminati senza problemi (nessun errore certo; restano eventuali note di tabella)

cul-grecia-polis-e-ellenismo, cul-roma-impero-e-caduta, cul-alto-medioevo, cul-basso-medioevo, cul-stato-moderno-e-settecento, cul-rivoluzioni-atlantiche-e-napoleone, cul-dal-dopoguerra-a-oggi, cul-filosofia-antica, cul-filosofia-medievale-moderna, cul-illuminismo-kant, cul-filosofia-novecento, cul-logica-ed-etica, cul-rinascimento-barocco, cul-moto-forze-newton, cul-energia-lavoro-potenza, cul-reazioni-acidi-basi-ph, cul-corpo-umano, cul-scienze-della-terra, cul-investire-senza-illusioni, cul-debiti-prestiti-e-mutui, cul-come-funziona-leconomia, cul-bias-decisioni, cul-stress-sonno-benessere, cul-istituzioni-italiane-e-europee, cul-manutenzione-base-auto, cul-la-bicicletta, cul-sonno-movimento-abitudini, cul-statistica-e-dati, cul-numeri-percentuali-proporzioni, cul-primo-soccorso-principi, cul-rinascimento. (Gli altri tre id letti, cul-ottocento-risorgimento-imperialismo, cul-elettricita-e-circuiti e cul-riconoscere-un-malore, hanno solo le correzioni sopra; sul resto non sono emersi errori.)

Verifiche numeriche riuscite (Node): rate e interessi di prestito e mutuo (88,85 €; 188,71 €; 711,32 €; 791,76 €), TAEG circa 6,4%, montanti 43 219 / 40 817 / 28 068 €, revolving 2 391 €, margini di sondaggio ±3,1 e ±2,0, correlazione r ≈ 0,77, paradosso di Simpson, deviazione standard, fisica (frenata, energia, potenza, circuiti), chimica (bilanciamenti, moli, pH), conti di sonno e caffeina.

### Id ancora da leggere (56 dell’elenco, dopo prima e seconda revisione)

cul-algebra-e-funzioni, cul-architettura, cul-argomentare-parlare, cul-arte-medievale, cul-barocco-settecento, cul-budget-e-consumo-consapevole, cul-campeggio-e-vita-allaperto, cul-carne-pesce-uova, cul-cartografia-coordinate, cul-casa-pulizia-manutenzione, cul-cellula-e-vita, cul-chimica-quotidiana, cul-clima-e-biomi, cul-come-funziona-internet, cul-come-funziona-un-motore, cul-comunicazione-scrittura, cul-continenti-e-regioni, cul-cucito-e-riparazioni, cul-dolci-dispensa-spesa, cul-ecologia-e-ambiente, cul-emozioni-motivazione, cul-fai-da-te-misure-trapano, cul-geografia-fisica, cul-geometria-e-trigonometria, cul-giardinaggio-e-orto, cul-guardare-arte-antica, cul-ia-fake-news-fonti, cul-imparare-una-abilita-manuale, cul-impasti-lievitazione, cul-italia-geografia, cul-legami-molecole-moli, cul-letteratura-origini-classica, cul-memoria-apprendimento, cul-meteo-e-sicurezza-in-montagna, cul-musica-fondamenti, cul-musica-popolare, cul-nodi-e-cordame, cul-novecento-contemporanea, cul-novecento-letterario, cul-onde-luce-suono, cul-orientamento-e-mappe, cul-orientarsi-e-viaggiare, cul-ottocento, cul-ottocento-letterario, cul-pasta-riso-cereali-legumi, cul-popolazione-citta-migrazioni, cul-preistoria-e-prime-civilta, cul-privacy-e-dati-personali, cul-psicologia-scienza, cul-psicologia-sociale, cul-riparazioni-idrauliche-pareti, cul-storia-musica, cul-sviluppo-personalita, cul-tecniche-base-cottura, cul-truffe-e-phishing, cul-verdure-zuppe-salse.

Limiti di questa seconda revisione: stessa metodologia della prima (memoria, senza fonti esterne); la classificazione «nessun problema» significa solo che non sono emersi errori certi, non una certificazione.
