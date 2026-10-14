/* SkillTree — scenari di simulazione a carte (parte G, Formula 1): gara asciutta, meteo, qualifica, muretto, stagione, carriera. Squadre, circuiti e piloti sono inventati; scopo didattico. */
(function (ST) {
  'use strict';
  const SIM = ST.sim;
  const o = (p, fx, text) => ({ p, fx, text });
  const mk = keys => {
    const f = a => { const r = {}; keys.forEach((k, i) => { if (a[i]) r[k] = a[i]; }); return r; };
    return (label, principle, p, A, tA, B, tB) => ({ label, principle, out: [o(p, f(A), tA), o(Math.round((1 - p) * 1000) / 1000, f(B), tB)] });
  };
  const card = (id, lv, text, choices) => { let h = 0; for (let i = 0; i < id.length; i++) h += id.charCodeAt(i) * (i + 1); const r = h % choices.length; return { id, lv, text, choices: choices.slice(r).concat(choices.slice(0, r)) }; };

  /* ---- 1) Gara asciutta di 60 giri ---- */
  const c1 = mk(['posizione', 'gomme', 'rischio', 'margine']);
  SIM.register({
    id: 'f1-gp', subject: 'f1', title: 'Gara asciutta di 60 giri', icon: '🏁',
    intro: 'Sei lo stratega di una squadra di metà gruppo al Gran Premio di un circuito inventato: 60 giri, asciutto, due mescole utilizzabili e almeno una sosta obbligatoria. Ogni scelta sposta posizione in pista, vita residua delle gomme, rischio (incidenti, guasti, penalità) e margine strategico (opzioni ancora aperte). Il finale conta: premia chi legge degrado, traffico e probabilità di safety car, non chi insegue la mossa spettacolare.',
    vars: {
      posizione: { label: 'Posizione e ritmo', start: 40, min: 0, max: 100 },
      gomme: { label: 'Vita residua delle gomme', start: 60, min: 0, max: 100 },
      rischio: { label: 'Rischio (incidenti, guasti, penalità)', start: 15, min: 0, max: 100 },
      margine: { label: 'Margine strategico', start: 50, min: 0, max: 100 }
    },
    weights: { posizione: 1.5, gomme: 0.5, rischio: -1.2, margine: 0.4 },
    penalties: [],
    turns: 6, utilText: '1,5 × posizione + 0,5 × gomme − 1,2 × rischio + 0,4 × margine',
    cards: [
      card('g-partenza', 1, 'Giro 1. Parti decimo su una mescola media; davanti c’è un gruppo compatto e il vento è calmo. Come affronti la prima curva?', [
        c1('Attacchi all’esterno per guadagnare tre posizioni subito', 'Rischio al via', 0.4, [8, -4, 8, 0], 'Ne guadagni due, ma le gomme soffrono nel duello.', [-4, -6, 22, -4], 'Contatto in curva 1: ala danneggiata e giro perso.'),
        c1('Segui la scia, resti pulito e sfrutti le posizioni perse dagli altri', 'Pazienza nel primo giro', 0.8, [6, 1, -2, 3], 'Due posizioni guadagnate senza rischi.', [3, 0, 0, 1], 'Il gruppo resta fermo, ma sei in ordine.'),
        c1('Parti defilato per salvare le gomme e il muso della vettura', 'Prudenza', 0.6, [-2, 3, -3, 0], 'Perdi un paio di posizioni ma la vettura è intatta.', [-5, 2, -1, -2], 'Troppo defilato: finisci in coda al gruppo.')
      ]),
      card('g-traffico', 1, 'Giro 8. Sei bloccato dietro una vettura più lenta e il tuo ritmo cala di mezzo secondo al giro. La zona DRS è lontana.', [
        c1('Tentativo all’esterno sul rettilineo, con le gomme già scivolose', 'Sorpasso forzato', 0.4, [9, -5, 12, -2], 'Il sorpasso riesce ma con un bloccaggio vistoso.', [-3, -7, 20, -4], 'Tocco con l’altro pilota e penalità di 5 secondi.'),
        c1('Resti in scia per due giri e cerchi di uscire dal blocco con la sosta', 'Undercut per liberarsi', 0.75, [5, 2, -1, 4], 'Il tuo box anticipato ti dà aria pulita e un bel ritmo.', [2, 1, 0, 1], 'Rientri nel traffico, ma guadagni comunque.'),
        c1('Rallenti e aspetti un errore di quello davanti', 'Attesa passiva', 0.5, [-2, 3, -1, 0], 'Nessun errore e poche emozioni.', [-5, 2, 0, -3], 'Perdi tempo prezioso e un altro ti passa.')
      ]),
      card('g-degrado', 2, 'Giro 18. Il degrado sulle posteriori è superiore al previsto, ma il rivale diretto non è ancora rientrato.', [
        c1('Rientri subito per fare l’undercut', 'Undercut', 0.7, [5, 8, 1, 2], 'Con gomme nuove passi davanti all’uscita dai box.', [1, 8, 2, 0], 'L’aria è sporca: l’undercut vale meno del previsto.'),
        c1('Prolunghi per un overcut con aria pulita e gomme in gestione', 'Overcut', 0.45, [6, -4, 0, 3], 'Il rivale rientra e il tuo ritmo regge.', [-4, -10, 3, -2], 'Il degrado esplode e perdi più di quanto speravi.'),
        c1('Segui la pista e fai quello che fa il rivale', 'Marcatura', 0.65, [1, 3, 0, 2], 'Resti a contatto senza grandi mosse.', [-1, 2, 0, -1], 'Rientrate insieme e nessuno guadagna.')
      ]),
      card('g-vsc', 2, 'Giro 24. Virtual safety car: una vettura è ferma a bordo pista. Il tuo box programmato sarebbe fra cinque giri.', [
        c1('Rientri ora: il pit costa meno in regime di VSC', 'Sosta sotto VSC', 0.75, [6, 8, 0, 3], 'Risparmi circa 8 secondi rispetto a una sosta normale.', [3, 7, 1, 1], 'Il VSC finisce prima del tuo arrivo ai box e la sosta costa di più.'),
        c1('Resti in pista per non rovinare la tua finestra', 'Fedeltà al piano', 0.5, [0, -3, 0, 1], 'Il piano originale regge.', [-3, -5, 0, -2], 'Ti passano in tre che hanno rischiato.'),
        c1('Rallenti al massimo per ridurre il degrado', 'Gestione eccessiva', 0.5, [-3, 3, -1, 0], 'Sprechi la posizione per pochissimo guadagno di gomme.', [-4, 2, 0, -2], 'Il tuo ritmo ti toglie la possibilità di scegliere.')
      ]),
      card('g-traffico2', 4, 'Giro 26. Dopo la sosta rientreresti in mezzo a un trenino di vetture lente, con il tuo ritmo potenziale 8 decimi migliore.', [
        c1('Rientri comunque: l’undercut è ormai avviato', 'Costo del traffico', 0.4, [2, 6, 5, 0], 'Ti districhi dopo un giro, ma perdi tempo.', [-5, 4, 9, -3], 'Resti bloccato per sette giri e il vantaggio svanisce.'),
        c1('Posticipi di due giri per rientrare in una zona libera', 'Gestione del traffico', 0.75, [5, -3, 1, 4], 'Esci con aria pulita e ritmo pieno.', [2, -5, 2, 2], 'Il degrado ti costa qualche decimo, ma sei libero.'),
        c1('Rientri e provi due fermate con una seconda sosta', 'Strategia a due soste', 0.45, [3, 10, 3, 1], 'Gomme fresche e ritmo alto per le due frazioni finali.', [-4, 8, 4, -4], 'Il tempo perso ai box non si recupera.')
      ]),
      card('g-radio', 4, 'Giro 31. Il pilota segnala via radio un calo di freni sulla posteriore sinistra. I sensori danno un valore al limite.', [
        c1('Gli chiedi di spingere fino al traguardo: i dati sono al limite, non oltre', 'Rischio di affidabilità', 0.4, [6, -2, 12, 0], 'Il valore resta sul limite.', [-4, -4, 28, -4], 'I freni cedono: ritiro o giri persi.'),
        c1('Ordini un cambio di modalità freni e temperature, e di sollevare in ingresso', 'Gestione dei sistemi', 0.8, [3, 1, -4, 3], 'Il valore rientra e il ritmo cala di poco.', [1, 0, -2, 1], 'Perdi un decimo ma la macchina resta integra.'),
        c1('Richiami subito ai box per un controllo', 'Reazione prudente', 0.5, [-6, 5, -6, -2], 'Il controllo non rivela nulla e perdi posizioni.', [-9, 4, -4, -4], 'Sosta imprevista che costa il podio.')
      ]),
      card('g-sc', 5, 'Giro 38. Safety car: la maggior parte dei piloti rientra, tu sei in testa al gruppo con gomme di 18 giri.', [
        c1('Rientri e monti le dure: il costo del pit è più basso con la SC', 'Pit sotto SC', 0.75, [7, 10, 1, 3], 'Costo ridotto e gomme nuove per il finale.', [4, 9, 2, 0], 'Esci dietro a molti che erano già in pit e perdi due posizioni.'),
        c1('Resti fuori e guadagni posizione in pista', 'Posizione in pista', 0.4, [8, -4, 3, 1], 'Guidi il gruppo, ma a gomme vecchie.', [-5, -6, 6, -4], 'Alla ripartenza vieni passato da chi ha gomme fresche.'),
        c1('Rientri e monti le medie per riserva di sosta', 'Opzione sul finale', 0.6, [4, 5, 0, 3], 'Gomme più sicure, ritmo moderato.', [1, 4, 1, 1], 'Dovrai gestire fino al traguardo.')
      ]),
      card('g-restart', 6, 'Ripartenza dopo la safety car, giro 41. Sei quinto con gomme fresche; davanti c’è un pilota che ha rischiato di restare fuori dai punti.', [
        c1('Attacchi alla prima curva con tutto', 'Aggressività in ripartenza', 0.4, [9, -3, 12, -1], 'Salti due vetture in frenata.', [-6, -6, 25, -4], 'Contatto in curva 1.'),
        c1('Attendi il DRS e scegli il punto di attacco più pulito', 'Pazienza e DRS', 0.75, [6, 0, -1, 3], 'Sorpassi con il DRS al terzo giro senza rischi.', [3, 0, 0, 1], 'Il rivale difende bene, ma non perdi nulla.'),
        c1('Risparmi gomme e carburante, accetti la posizione', 'Gestione prudente', 0.6, [1, 4, -2, 1], 'Posizione mantenuta.', [-2, 3, 0, -2], 'Qualcuno dietro approfitta della tua passività.')
      ]),
      card('g-meteo', 6, 'Giro 45. Il muretto vede dal radar una nuvola a 20 minuti, con probabilità di pioggia del 30%. Hai ancora una sosta in tasca.', [
        c1('Rientri subito per le intermedie: scommessa sulla pioggia', 'Anticipo su previsione', 0.3, [5, -2, 8, 0], 'Piove davvero e hai vinto la scommessa.', [-9, -4, 14, -5], 'Non piove e hai buttato via la gara.'),
        c1('Continui con le gomme di adesso e prepari un piano B pronto al muro', 'Piano condizionale', 0.8, [3, -2, -1, 5], 'Il piano B ti resta in tasca e non devi usarlo.', [1, -3, 0, 3], 'Piove leggermente: rientri e ti salvi.'),
        c1('Ignori il radar: la previsione al 30% è troppo bassa', 'Probabilità', 0.55, [2, 0, 0, -2], 'Non piove.', [-5, -3, 5, -4], 'Piove e perdi tempo prezioso.')
      ]),
      card('g-ordini', 7, 'Giro 49. Il compagno di squadra, più lento di 4 decimi, ti rallenta in pista senza motivo. Tu sei più veloce e sei quinto.', [
        c1('Chiedi via radio di lasciarti passare subito', 'Ordini di squadra', 0.6, [6, 0, 1, -2], 'Passi senza attriti, ma la decisione viene discussa.', [3, 0, 2, -4], 'Il compagno è titubante e perdi due giri.'),
        c1('Aspetti il suo errore o una sosta', 'Attesa', 0.45, [0, 2, 0, 0], 'L’errore non arriva, ma nemmeno guai.', [-4, 2, 0, -3], 'Rimani bloccato ancora a lungo.'),
        c1('Fai uno swap programmato con il compito di ridargli la posizione se non sorpassi', 'Swap condizionale', 0.75, [6, 1, -1, 4], 'Passa a te la posizione senza tensioni.', [3, 0, 0, 2], 'Il compagno recupera la posizione, ma nessuno ci rimette.')
      ]),
      card('g-ultimi', 8, 'Giro 54. Hai 6 giri alla fine e un rivale 1,2 secondi dietro con gomme più fresche; il tuo degrado è alto.', [
        c1('Spingi al massimo per tenere il margine', 'Spinta ai limiti', 0.4, [5, -8, 10, -1], 'Tieni, ma sei sul filo.', [-8, -10, 16, -4], 'Le gomme crollano e il rivale ti passa.'),
        c1('Gestisci il ritmo ai punti di frenata e proteggi la traiettoria in rettilineo', 'Difesa intelligente', 0.8, [4, -2, -1, 2], 'Hai il rivale a distanza di DRS ma senza mai superarti.', [1, -3, 0, 0], 'Perdi un secondo ma tieni la posizione.'),
        c1('Rientri per un pit finale a 6 giri dalla fine', 'Sosta tardiva', 0.35, [6, 12, 4, 0], 'Gomme fresche e giro veloce.', [-12, 10, 6, -6], 'Perdi tre posizioni per il tempo del pit.')
      ]),
      card('g-pioggia-finale', 8, 'Giro 56. Qualche goccia sul rettilineo: la pista è ancora asciutta, ma il rivale inizia a spingere meno.', [
        c1('Rimani con la tua strategia: nessuna decisione', 'Mantenere il piano', 0.65, [2, -1, 0, 1], 'Le gocce non diventano pioggia.', [-3, -2, 3, -2], 'La pista si bagna e la tua gomma non regge.'),
        c1('Ti avvicini al rivale che rallenta e provi un sorpasso al limite', 'Attacco opportunista', 0.4, [8, -3, 10, 0], 'Il sorpasso riesce.', [-6, -5, 20, -3], 'Bloccaggio in frenata e fuori traiettoria.'),
        c1('Segnali al box e ti prepari con una finestra di sicurezza', 'Allerta anticipata', 0.75, [3, 0, -2, 4], 'Tutto sotto controllo.', [1, 0, 0, 2], 'Poche gocce: nulla da fare.')
      ]),
      card('g-ultimo-giro', 9, 'Ultimo giro. Sei terzo con 0,8 secondi sul quarto e uno scarto di batteria molto diverso dal suo.', [
        c1('Usi tutta la batteria in un colpo solo sul rettilineo di partenza', 'Gestione dell’energia', 0.4, [5, 0, 5, -2], 'La batteria si esaurisce presto e rischi la difesa.', [-6, 0, 8, -4], 'Resti senza spinta nel finale e il quarto ti passa.'),
        c1('Distribuisci l’energia sui punti dove serve per difendere l’ultimo settore', 'Allocazione dell’energia', 0.8, [4, 0, -1, 3], 'Difendi con la potenza giusta nei punti giusti.', [1, 0, 0, 1], 'Tieni a fatica.'),
        c1('Ti concentri sul miglior giro veloce', 'Obiettivo secondario', 0.5, [2, -2, 3, 0], 'Giro veloce e podio.', [-5, -3, 6, -3], 'Perdi un posto per una moneta in più.')
      ]),
      card('g-bandiera', 10, 'Bandiera a scacchi in vista: un pilota davanti a te rallenta con un problema. Ti serve decidere se rischiare un sorpasso o mettere in sicurezza la posizione.', [
        c1('Lo passi subito con un attacco in staccata', 'Opportunismo', 0.5, [8, 0, 8, 1], 'Il sorpasso riesce.', [-6, -2, 20, -3], 'Il contatto è inevitabile.'),
        c1('Attendi che lui rallenti ancora e superi pulito sul rettilineo', 'Sorpasso a basso rischio', 0.8, [6, 0, -1, 3], 'Superi senza rischi e prendi il podio.', [3, 0, 0, 1], 'Hai atteso troppo e ti passa l’altro.'),
        c1('Ti accodi e finisci in posizione', 'Sicurezza', 0.7, [1, 0, -2, 0], 'Quarto posto assicurato.', [0, 0, 0, -1], 'Il problema non peggiora.')
      ])
    ]
  });

  /* ---- 2) Pioggia variabile ---- */
  const c2 = mk(['passo', 'aderenza', 'rischio', 'opzioni']);
  SIM.register({
    id: 'f1-meteo', subject: 'f1', title: 'Gara con pioggia variabile', icon: '🌧️',
    intro: 'Il circuito (inventato) è bagnato a tratti e il radar cambia ogni dieci minuti. Devi decidere quando passare da intermedie a slick e viceversa, quanto rischiare, come usare la safety car. Ogni scelta sposta passo gara, aderenza disponibile, rischio (uscite di pista, danni) e opzioni strategiche ancora aperte. Non c’è mossa sempre giusta: conta l’informazione, non l’intuizione.',
    vars: {
      passo: { label: 'Passo gara', start: 40, min: 0, max: 100 },
      aderenza: { label: 'Aderenza e gomme', start: 55, min: 0, max: 100 },
      rischio: { label: 'Rischio di uscita o danni', start: 20, min: 0, max: 100 },
      opzioni: { label: 'Opzioni aperte', start: 50, min: 0, max: 100 }
    },
    weights: { passo: 1.5, aderenza: 0.5, rischio: -1.2, opzioni: 0.4 },
    penalties: [],
    turns: 6, utilText: '1,5 × passo + 0,5 × aderenza − 1,2 × rischio + 0,4 × opzioni',
    cards: [
      card('m-griglia', 1, 'Giro di formazione: pista umida con la traiettoria asciutta. Che gomma monti in griglia?', [
        c2('Slick medie: la traiettoria è asciutta e il resto asciugherà', 'Scommessa sull’asciugatura', 0.35, [8, -3, 12, -2], 'Dopo due giri la pista tiene e sei in testa.', [-7, -8, 20, -5], 'Sei fuori dalle traiettorie e vai in testacoda.'),
        c2('Intermedie: sicure al via, con il piano di passare agli slick al primo segnale', 'Gomma sicura per il via', 0.8, [4, 4, -2, 3], 'Parti bene e controlli la gara.', [2, 3, 0, 1], 'Le intermedie si consumano presto ma restano utili.'),
        c2('Pioggia piena: meglio andare sul sicuro', 'Eccesso di prudenza', 0.5, [-2, 3, -2, -2], 'Pochi problemi, ma rallenti.', [-5, 1, 0, -4], 'Troppo lente sulla pista che si asciuga.')
      ]),
      card('m-radar', 1, 'Giro 5. Il radar mostra una cella di pioggia a 8 km che si muove verso il circuito, ma potrebbe passare a lato.', [
        c2('Passi subito alle intermedie per anticipare la pioggia', 'Anticipo', 0.35, [4, 2, 4, -2], 'La pioggia arriva e sei già al sicuro.', [-8, -4, 8, -5], 'La pioggia devia: hai perso 15 secondi per niente.'),
        c2('Aspetti due giri e confronti i tempi del settore bagnato dei rivali', 'Informazione in pista', 0.8, [4, 0, -1, 4], 'Lo scarto dei rivali ti dice il momento giusto.', [2, -1, 0, 2], 'Perdi un po’ di tempo, ma la decisione è corretta.'),
        c2('Continui senza cambiare: la pista è asciutta', 'Dati attuali', 0.5, [2, 0, 2, 0], 'Per ora va.', [-5, -5, 10, -3], 'Ti prende la pioggia lontano dai box.')
      ]),
      card('m-pit', 2, 'Giro 11. Inizia a piovere. Il rivale diretto rientra. Sei a metà del giro e hai ancora gomme in buono stato.', [
        c2('Rientri alla prossima occasione per intermedie', 'Reazione tempestiva', 0.75, [5, 7, -1, 2], 'La pista ora scivola e sei al sicuro.', [2, 6, 0, 0], 'Un giro di troppo sulle slick.'),
        c2('Resti fuori e sfidi la pioggia ancora leggera', 'Resistenza', 0.4, [3, -5, 10, 1], 'La pioggia si ferma e hai guadagnato un pit.', [-7, -10, 18, -3], 'Esci in curva e perdi tempo.'),
        c2('Rientri subito ma monti le pioggia piena', 'Gomma sbagliata', 0.35, [3, 6, 2, 0], 'La pioggia intensifica e va bene.', [-5, 3, 3, -3], 'Le gomme da pioggia si surriscaldano su pista poco bagnata.')
      ]),
      card('m-linea', 3, 'Giro 14. Sulle intermedie noti che la traiettoria ideale ora è molto più asciutta, ma con qualche pozza.', [
        c2('Resti sulla traiettoria asciutta e fai attenzione alle pozze', 'Gestione della traiettoria', 0.75, [5, 3, 0, 2], 'Il ritmo è alto e l’usura ragionevole.', [2, 2, 3, 0], 'Una pozza ti fa perdere un decimo.'),
        c2('Resti sulla linea bagnata per evitare problemi con le gomme', 'Prudenza', 0.6, [0, 2, -2, 0], 'Meno rischio, meno passo.', [-3, 1, 0, -2], 'Il rivale ti passa.'),
        c2('Provi a sorpassare sul bagnato per sfruttare l’aderenza diversa', 'Sorpasso sul bagnato', 0.4, [8, -3, 10, 0], 'Funziona.', [-6, -3, 20, -3], 'Aquaplaning in staccata.')
      ]),
      card('m-sc', 4, 'Giro 18. Una vettura esce di pista: safety car. Le intermedie hanno 8 giri, la pista sta asciugando.', [
        c2('Rientri subito per le slick: la SC consente di scegliere con costo ridotto', 'Pit sotto SC', 0.45, [5, 6, 3, 1], 'La pista asciuga più presto del previsto.', [-8, 4, 6, -4], 'La pista è ancora troppo bagnata e perdi tutto.'),
        c2('Rimani fuori e aspetti il restart per vedere la pista', 'Attesa di informazioni', 0.7, [2, -1, 0, 4], 'Hai tutte le opzioni.', [-2, -2, 1, 1], 'Perdi posizione per non rischiare.'),
        c2('Rientri per un set di intermedie nuove', 'Sicurezza', 0.7, [3, 6, -1, 1], 'Intermedie fresche: ritmo sicuro.', [1, 5, 0, -1], 'Sei fuori posizione ma sicuro.')
      ]),
      card('m-asciutto', 5, 'Giro 24. La traiettoria è quasi asciutta; il rivale con intermedie logore perde 2 secondi al giro.', [
        c2('Monti le slick ora: il crossover è vicino', 'Crossover', 0.7, [7, 5, 2, 2], 'Passi in testa al gruppo.', [2, 4, 4, 0], 'Ancora scivoloso nelle ultime curve.'),
        c2('Aspetti altri due giri per essere sicuro', 'Attesa', 0.5, [-1, -3, 0, 0], 'Ti trovi nel momento giusto.', [-5, -6, 2, -3], 'Il rivale ti passa.'),
        c2('Segui il rivale quando rientra', 'Marcatura', 0.65, [2, 3, 0, 1], 'Perdi un posto.', [0, 2, 0, 0], 'Resti in scia.')
      ]),
      card('m-slick', 6, 'Giro 28. Sulle slick nuove senti pochissimo grip all’inizio: le gomme sono fredde e la pista ancora umida.', [
        c2('Spingi per scaldare in fretta', 'Gestione termica', 0.4, [6, 0, 12, 0], 'Le gomme entrano in finestra.', [-6, -4, 22, -3], 'Sottosterzo e uscita in ghiaia.'),
        c2('Scaldi con il pilota che zigzaga sul rettilineo e frena forte nelle zone lente', 'Warm-up controllato', 0.8, [4, 3, -2, 2], 'Le gomme entrano in finestra senza rischi.', [1, 2, 0, 0], 'Servono due giri in più, ma sicuro.'),
        c2('Torni ai box e rimonti le intermedie', 'Ripensamento', 0.5, [-5, 0, -2, -3], 'Troppo tempo perso.', [-8, -1, 0, -5], 'Disastro di strategia.')
      ]),
      card('m-bandiera', 6, 'Giro 33. Bandiera gialla in un settore e cielo scuro: una nuova cella sta per arrivare.', [
        c2('Ignori il cielo e spingi: gli slick vanno bene', 'Negazione', 0.35, [4, -2, 5, 0], 'La cella passa a lato.', [-8, -9, 15, -4], 'Arriva la pioggia e sei sulle slick.'),
        c2('Prepari il pit per le intermedie e osservi il radar ogni giro', 'Piano condizionale', 0.8, [3, 1, -1, 5], 'Rientri solo se la pioggia arriva.', [2, -1, 0, 3], 'Rientri una volta di troppo.'),
        c2('Rientri subito per sicurezza', 'Cambio anticipato', 0.4, [-3, 3, -1, -2], 'La pioggia arriva.', [-8, 1, 0, -5], 'Non arriva nulla e hai buttato un pit.')
      ]),
      card('m-sc2', 7, 'Giro 38. Seconda safety car per detriti. Hai slick medie con 10 giri e il gruppo è compatto dietro la SC.', [
        c2('Rientri per le dure per risparmiare il pit', 'Gomma finale', 0.75, [5, 7, 0, 2], 'Il pit gratis ti dà un finale tranquillo.', [3, 5, 1, 0], 'Perdi due posizioni al restart.'),
        c2('Rimani fuori per la posizione', 'Posizione', 0.45, [6, -4, 4, 0], 'Il restart ti premia.', [-6, -7, 8, -3], 'Gomme vecchie al restart.'),
        c2('Rientri per le morbide per un finale d’attacco', 'Attacco finale', 0.5, [6, 3, 3, 0], 'Ritmo altissimo.', [-3, -1, 6, -2], 'Sono troppo consumate in fretta.')
      ]),
      card('m-ripartenza', 8, 'Ripartenza: la pista è asciutta ma con una zona bagnata in curva 4, dove ci sono pozze.', [
        c2('Attacchi in curva 4 sfruttando la linea bagnata', 'Linea alternativa', 0.35, [8, -3, 12, 0], 'Guadagni 2 posizioni.', [-7, -4, 22, -4], 'Esci in testacoda.'),
        c2('Sorpassi sul rettilineo e resti sulla linea asciutta in curva 4', 'Linea sicura', 0.8, [5, 2, -1, 3], 'Passi con pulizia.', [2, 1, 0, 1], 'Il rivale resiste.'),
        c2('Resti dietro e aspetti', 'Attesa', 0.6, [0, 1, -2, 0], 'Tutto sotto controllo.', [-3, 0, 0, -2], 'Il treno si allunga.')
      ]),
      card('m-pioggia-tardiva', 9, 'Giro 50. Rovescio improvviso con 10 giri alla fine: tu sei sulle slick, quattro secondi davanti.', [
        c2('Rientri per le intermedie e rischi di perdere il vantaggio', 'Pit di sicurezza', 0.6, [-1, 8, -4, 1], 'Perdi il vantaggio ma la gara è salva.', [-5, 6, -2, -2], 'Sei dietro, ma sulla gomma giusta.'),
        c2('Resti fuori e guidi con estrema cautela', 'Resistenza', 0.4, [2, -6, 6, 0], 'Il rovescio finisce presto.', [-9, -10, 16, -5], 'Testacoda a 7 giri dalla fine.'),
        c2('Rientri per le pioggia piena', 'Gomma estrema', 0.3, [-2, 5, -2, -2], 'Piove forte.', [-9, 2, 0, -6], 'Lenta e surriscaldata.')
      ]),
      card('m-ultimi', 10, 'Ultimi tre giri: la pista asciuga ancora, tu sei terzo con intermedie e il quarto dietro monta slick.', [
        c2('Difendi con cattiveria in ogni curva', 'Difesa estrema', 0.4, [5, -3, 10, 0], 'Tieni la posizione.', [-7, -5, 18, -3], 'Contatto e ritiro.'),
        c2('Scegli i punti dove le intermedie ti aiutano e gestisci le gomme', 'Gestione tattica', 0.75, [4, 1, -1, 2], 'Il quarto si avvicina senza passare.', [1, 0, 0, 0], 'Perdi un secondo.'),
        c2('Lasci passare il quarto per non rischiare', 'Rinuncia', 0.6, [-4, 0, -3, -3], 'Eviti il contatto.', [-6, 0, -1, -4], 'Non basta.')
      ]),
      card('m-comunic', 2, 'Giro 12. Il pilota chiede alla radio di cambiare gomma, ma i dati del box dicono che la pista ha ancora poca acqua.', [
        c2('Segui il pilota: sente più di quanto vedano i sensori', 'Input del pilota', 0.5, [3, 3, 2, 0], 'Aveva ragione.', [-3, 2, 3, -2], 'Il box era più informato.'),
        c2('Rispondi con i dati e chiedi un’altra tornata di verifica', 'Dati condivisi', 0.8, [4, 1, -1, 3], 'La squadra lavora in sintonia.', [2, 0, 0, 1], 'Il pilota perde fiducia.'),
        c2('Ignori la richiesta senza spiegazioni', 'Comunicazione', 0.4, [2, 0, 1, -1], 'Per caso funziona.', [-4, -1, 3, -4], 'Tensione in squadra.')
      ]),
      card('m-ala', 3, 'Giro 16. Una pozza ha danneggiato l’ala anteriore (-5% carico). La pista è mista.', [
        c2('Rientri per sostituire l’ala', 'Riparazione', 0.65, [-2, 4, -5, 2], 'Perdi 20 secondi ma la macchina è a posto.', [-5, 3, -3, 0], 'Perdi anche la posizione.'),
        c2('Prosegui con regolazioni del bilanciamento in cabina', 'Compensazione', 0.55, [1, -1, 3, 1], 'Il danno è tollerabile.', [-5, -3, 10, -2], 'Il danno peggiora.'),
        c2('Prosegui senza cambiare nulla', 'Negazione', 0.4, [2, 0, 6, 0], 'Non cambia nulla.', [-6, -2, 14, -3], 'Perdi controllo nei rettilinei veloci.')
      ])
    ]
  });

  /* ---- 3) Qualifica ---- */
  const c3 = mk(['tempo', 'gomme', 'rischio', 'fiducia']);
  SIM.register({
    id: 'f1-quali', subject: 'f1', title: 'Sessione di qualifica', icon: '⏱️',
    intro: 'Tre fasi di qualifica su un circuito inventato, con un numero limitato di set di gomme nuove, una pista che migliora a ogni passaggio e il traffico che disturba i giri lanciati. Ogni scelta sposta tempo sul giro, set nuovi ancora disponibili, rischio (errori, bandiere, penalità) e fiducia del pilota. Chi spreca risorse al mattino non ha più armi alla fine.',
    vars: {
      tempo: { label: 'Tempo sul giro', start: 35, min: 0, max: 100 },
      gomme: { label: 'Set nuovi disponibili', start: 60, min: 0, max: 100 },
      rischio: { label: 'Rischio di errore o penalità', start: 15, min: 0, max: 100 },
      fiducia: { label: 'Fiducia del pilota', start: 55, min: 0, max: 100 }
    },
    weights: { tempo: 1.5, gomme: 0.5, rischio: -1.2, fiducia: 0.4 },
    penalties: [],
    turns: 6, utilText: '1,5 × tempo + 0,5 × set nuovi − 1,2 × rischio + 0,4 × fiducia',
    cards: [
      card('q-uscita', 1, 'Inizio Q1. La pista è verde e migliora di 4 decimi ogni cinque minuti. Quando mandi fuori il pilota?', [
        c3('Subito, per mettere un tempo al sicuro', 'Giro di sicurezza', 0.7, [4, -4, -2, 2], 'Un tempo nel gruppo e la fiducia sale.', [2, -5, 1, 0], 'Sei fuori troppo presto con la pista lenta.'),
        c3('Per ultimo, per sfruttare l’asfalto migliore', 'Ultimo giro', 0.4, [8, 0, 10, 0], 'Pista in gran forma e tempo ottimo.', [-6, 0, 18, -4], 'Bandiera rossa e nessun tempo utile.'),
        c3('A metà sessione con un giro di preparazione e uno di attacco', 'Finestra centrale', 0.8, [6, -2, -2, 3], 'Pista già buona, spazio libero e margine di errore.', [3, -3, 0, 1], 'Un po’ di traffico ti costa un decimo.')
      ]),
      card('q-giro-out', 1, 'Giro di uscita dai box: le gomme nuove devono arrivare in temperatura ma il pilota ha poco tempo.', [
        c3('Un giro di preparazione tranquillo con freni e gomme ben scaldati', 'Preparazione', 0.8, [5, 0, -2, 3], 'Gomme e freni nella finestra al via del giro lanciato.', [2, 0, 0, 1], 'Un po’ freddo in curva 1.'),
        c3('Saltare la preparazione per risparmiare il set', 'Risparmio forzato', 0.4, [3, 3, 8, 0], 'Funziona.', [-6, 2, 16, -3], 'Bloccaggio in curva 1 e giro buttato.'),
        c3('Due giri di preparazione completi', 'Eccesso di preparazione', 0.6, [2, -5, -1, 1], 'Gomme pronte ma già usate.', [0, -7, 0, 0], 'Il giro lanciato è meno fresco.')
      ]),
      card('q-traffico', 2, 'Giro lanciato: davanti due vetture in giro lento sul rettilineo. Il tuo pilota recupera a sei secondi.', [
        c3('Crei uno spazio di sei secondi e dai la partenza all’ultimo istante', 'Gestione del traffico', 0.75, [6, -1, -2, 3], 'Giro pulito.', [3, -1, 0, 1], 'Un po’ di scia persa.'),
        c3('Passi accanto a loro in curva 2 per sorpassarli', 'Sorpasso rischioso', 0.3, [5, 0, 15, -1], 'Passi senza problemi.', [-7, -1, 26, -5], 'Penalità per ostacolo e giro cancellato.'),
        c3('Abortisci e rientri ai box', 'Giro abortito', 0.6, [-3, 3, -2, -3], 'Eviti il traffico.', [-5, 2, 0, -4], 'Perdi un tentativo.')
      ]),
      card('q-assetto', 2, 'Nel Q1 la vettura ha sottosterzo in curve lente. Hai tempo per un solo aggiustamento.', [
        c3('Sposti il bilanciamento freno verso l’avantreno e scarichi l’ala anteriore di un punto', 'Piccole correzioni', 0.7, [6, 0, 0, 3], 'Il sottosterzo scompare.', [2, 0, 1, 0], 'Troppo poco per cambiare il ritmo.'),
        c3('Cambi molte impostazioni insieme', 'Cambi multipli', 0.35, [7, 0, 6, 0], 'Funziona.', [-6, 0, 12, -4], 'Non sai più cosa funziona: la macchina è inguidabile.'),
        c3('Lasci tutto invariato e confidi nel pilota', 'Nessuna modifica', 0.5, [1, 0, 2, 1], 'Il pilota si adatta.', [-3, 0, 4, -2], 'Il pilota perde fiducia nella macchina.')
      ]),
      card('q-q2-gomma', 4, 'Q2. Passare con la mescola media (giro leggermente più lento) risparmia un set nuovo di morbide per la gara… ma la gara parte con la gomma di qualifica.', [
        c3('Passi con le morbide nuove per sicurezza', 'Sicurezza di passaggio', 0.8, [5, -6, -1, 2], 'Passi sul sicuro ma consumi il set.', [3, -6, 0, 0], 'Passi comunque, ma di poco.'),
        c3('Provi con la media: è la gomma di partenza e ti lascia un set per Q3', 'Scelta strategica', 0.55, [3, 4, 4, 0], 'Passi con margine ridotto e hai le morbide per Q3.', [-9, 3, 6, -4], 'Resti fuori in Q2.'),
        c3('Usi un set già usato di morbide', 'Set usato', 0.5, [2, 1, 2, 0], 'Passi.', [-6, 1, 4, -3], 'Non basta.')
      ]),
      card('q-vento', 4, 'Un colpo di vento improvviso alle curve veloci del terzo settore: il pilota perde mezzo secondo nel giro precedente.', [
        c3('Aumenti il carico aerodinamico posteriore per stabilizzare', 'Adattamento alle condizioni', 0.65, [3, 0, -3, 3], 'La macchina è stabile.', [-2, 0, 0, 0], 'Perdi un po’ in rettilineo.'),
        c3('Resti con la stessa assetto: il vento passerà', 'Attesa', 0.45, [3, 0, 3, 0], 'Il vento cala.', [-5, 0, 8, -3], 'Il vento persiste.'),
        c3('Chiudi la sessione per non rischiare', 'Rinuncia', 0.6, [-6, 3, -4, -3], 'Eviti il rischio.', [-9, 2, -3, -5], 'Perdi la posizione.')
      ]),
      card('q-bandiera', 5, 'Bandiera gialla nel secondo settore appena prima che il tuo pilota arrivi: il tempo è in bilico.', [
        c3('Mantieni il piede giù: i giri lanciati non sono mai ripetibili', 'Ignorare le bandiere', 0.1, [6, 0, 30, -2], 'Il giro è buono, ma poi la penalità cancella tutto.', [-8, 0, 40, -6], 'Penalità e arretramento in griglia.'),
        c3('Alzi come da regolamento e riprovi con un altro giro', 'Rispetto del regolamento', 0.75, [5, -4, -3, 3], 'Il secondo tentativo con le gomme ancora buone riesce.', [2, -5, 0, 0], 'Il tempo è peggiore ma pulito.'),
        c3('Abortisci il giro e rientri ai box', 'Risparmio', 0.6, [-1, 2, -2, 0], 'Salvi il set.', [-4, 1, 0, -2], 'Non ci sono più tentativi.')
      ]),
      card('q-q3-ordine', 6, 'Q3. Hai due set di morbide nuovi e due tentativi, ma la pista si migliora molto nei minuti finali.', [
        c3('Primo tentativo subito, secondo alla fine', 'Due attacchi', 0.75, [7, -4, 1, 3], 'Hai un tempo di riserva e un secondo giro con pista migliore.', [4, -5, 2, 1], 'Il secondo tentativo è peggio del primo.'),
        c3('Un solo tentativo all’ultimo istante con il set migliore', 'Tutto su un giro', 0.4, [9, 3, 12, 0], 'Pista perfetta e giro eccellente.', [-9, 2, 22, -5], 'Un errore e nessun altro tentativo.'),
        c3('Due tentativi all’inizio quando la pista è ancora scarica', 'Anticipo', 0.5, [2, -4, 0, 1], 'Tempo discreto.', [-3, -4, 1, -1], 'Pista lenta e traffico.')
      ]),
      card('q-radio', 6, 'Il pilota via radio dice di sentirsi sicuro e chiede di togliere l’alleggerimento di carico per un giro all’attacco.', [
        c3('Segui la richiesta: è il tuo pilota', 'Fiducia nel pilota', 0.5, [5, 0, 4, 2], 'Il giro è eccellente.', [-4, 0, 10, -3], 'La macchina è nervosa.'),
        c3('Concordi un compromesso a metà con dati dalle ultime tornate', 'Dati e dialogo', 0.8, [6, 0, -1, 4], 'Il giro è equilibrato.', [3, 0, 1, 1], 'Vi mancano pochi centesimi.'),
        c3('Rifiuti: i dati dicono il contrario', 'Rigidità', 0.6, [2, 0, -1, -3], 'Non c’è tensione.', [-2, 0, 0, -5], 'Il pilota si innervosisce.')
      ]),
      card('q-errore', 7, 'Il pilota al primo tentativo in Q3 sbaglia una curva e perde 3 decimi: il giro è ancora a 0,2 dal tempo di riferimento.', [
        c3('Torni subito ai box per cambiare le gomme', 'Reazione immediata', 0.5, [3, -5, -1, 0], 'Secondo tentativo buono.', [-3, -6, 0, -2], 'Il tempo non basta.'),
        c3('Gli chiedi di concludere il giro e lavorare sul raffreddamento', 'Gestione dell’errore', 0.8, [4, 0, -2, 3], 'Completa il giro e prepara il secondo.', [2, 0, 0, 1], 'Nulla di rilevante.'),
        c3('Gli ricordi l’errore e gli chiedi di non ripeterlo', 'Pressione', 0.4, [2, 0, 3, -3], 'Il pilota reagisce.', [-4, 0, 8, -6], 'Il pilota sbaglia ancora.')
      ]),
      card('q-ultimo', 8, 'Ultimo tentativo di Q3, pista migliorata. Il tuo pilota è quarto per 0,05 secondi. Come lo spingi?', [
        c3('Richiesta di spingere al 110% su ogni curva', 'Spinta ai limiti', 0.4, [8, 0, 14, 0], 'Giro al limite e pole.', [-8, 0, 28, -6], 'Muro in curva 8.'),
        c3('Chiedi un giro pulito concentrato su punti di frenata e trazione', 'Costanza', 0.8, [6, 0, -1, 4], 'Il giro è pulito e vale la prima fila.', [3, 0, 0, 2], 'Quarto ma con fiducia.'),
        c3('Gli chiedi di accontentarsi della posizione', 'Accontentarsi', 0.7, [0, 0, -3, -2], 'Quarto assicurato.', [-3, 0, -1, -4], 'Un altro lo passa.')
      ]),
      card('q-rossa', 9, 'Bandiera rossa a fine Q3: non c’è tempo per un altro giro lanciato. Sei quinto.', [
        c3('Chiedi di ripartire con le gomme usate per l’ultimo tentativo', 'Uso di risorse', 0.5, [4, -4, 3, 0], 'Ripartiamo.', [-5, -3, 8, -3], 'Tempo non migliorato.'),
        c3('Montiamo un set nuovo di morbide e prepariamo il giro', 'Set nuovo', 0.7, [6, -5, 0, 3], 'Un giro all’attacco.', [3, -6, 0, 1], 'Il traffico ti disturba.'),
        c3('Restiamo ai box e salviamo le gomme per la gara', 'Risparmio', 0.7, [-1, 4, -3, 0], 'Quinto in griglia con set freschi.', [-3, 3, -1, -2], 'Quinto con qualche rimpianto.')
      ]),
      card('q-regole', 10, 'La penalità per ostacolo è un rischio: il tuo pilota, in giro lento, è in mezzo alla traiettoria di un rivale.', [
        c3('Resti sulla linea ideale: tocca al rivale evitarlo', 'Pensare solo a sé', 0.3, [1, 0, 14, -1], 'Nessuna conseguenza.', [-5, 0, 24, -5], 'Penalità di tre posizioni.'),
        c3('Ti sposti fuori linea e lasci passare', 'Rispetto delle regole', 0.8, [2, 0, -3, 3], 'Nessun problema.', [0, 0, -1, 1], 'Tu perdi un po’ di tempo.'),
        c3('Acceleri per sparire dalla sua traiettoria', 'Accelerare', 0.5, [2, -2, 4, 0], 'Funziona.', [-3, -2, 9, -3], 'Gomme danneggiate.')
      ]),
      card('q-debrief', 3, 'Fine Q1: dai dati risulta che il pilota ha perso 2 decimi nel terzo settore per una frenata troppo anticipata.', [
        c3('Gli mostri il confronto con il compagno e proponi di spostare il punto di frenata di 5 metri', 'Analisi dei dati', 0.75, [5, 0, -1, 4], 'Capisce e migliora.', [2, 0, 1, 2], 'Migliora poco.'),
        c3('Gli dici di frenare più tardi, senza dettagli', 'Istruzione vaga', 0.4, [3, 0, 5, 0], 'Funziona.', [-3, 0, 10, -3], 'Si blocca in frenata.'),
        c3('Non gli dici nulla per non influenzarlo', 'Silenzio', 0.6, [1, 0, 0, 1], 'Si regola da solo.', [-2, 0, 1, -2], 'Perde ancora.')
      ])
    ]
  });

  /* ---- 4) Muretto box con due piloti ---- */
  const c4 = mk(['punti', 'gomme', 'affidabilita', 'clima']);
  SIM.register({
    id: 'f1-muretto', subject: 'f1', title: 'Il muretto con due piloti', icon: '🎧',
    intro: 'Sei il capo della strategia di una squadra con due piloti, uno più veloce e uno più esperto, in una gara tesa. Devi decidere ordini di squadra, gestione gomme, rischi di affidabilità e cosa dire via radio, spesso con pochi secondi a disposizione. Ogni scelta sposta punti attesi, stato delle gomme, affidabilità delle vetture e clima interno. Un clima rotto costa punti nelle gare successive.',
    vars: {
      punti: { label: 'Punti attesi della squadra', start: 40, min: 0, max: 100 },
      gomme: { label: 'Stato gomme', start: 60, min: 0, max: 100 },
      affidabilita: { label: 'Affidabilità delle vetture', start: 70, min: 0, max: 100 },
      clima: { label: 'Clima in squadra', start: 60, min: 0, max: 100 }
    },
    weights: { punti: 1.5, gomme: 0.5, affidabilita: 0.9, clima: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,5 × punti + 0,5 × gomme + 0,9 × affidabilità + 0,5 × clima',
    cards: [
      card('w-briefing', 1, 'Briefing pre-gara. I due piloti hanno stili diversi: uno spinge subito, l’altro gestisce. Come imposti i piani?', [
        c4('Stessa strategia per entrambi per semplicità', 'Uniformità', 0.5, [2, 0, 0, 2], 'Tutto semplice e nessuna tensione.', [-3, -2, 0, 1], 'Il pilota che gestisce rimane inutilmente indietro.'),
        c4('Strategie diverse, ma con un punto di verifica a metà gara per scambiarsi informazioni', 'Diversificazione', 0.75, [6, 2, 0, 3], 'Copri più scenari e uno dei due ne approfitta.', [3, 1, 0, 1], 'Nessuno dei due ne esce meglio.'),
        c4('Decidi tutto al volo durante la gara', 'Improvvisazione', 0.4, [3, 0, 0, -2], 'Per caso funziona.', [-5, -3, -2, -4], 'Caos e confusione sul muretto.')
      ]),
      card('w-regole-ordini', 1, 'Prima della gara i piloti chiedono quando saranno applicati gli ordini di squadra e quali sono le priorità.', [
        c4('Dici di non preoccuparsi: deciderai al momento', 'Opacità', 0.4, [2, 0, 0, -3], 'Nessuno protesta.', [-3, 0, 0, -6], 'Si sentono fuori dalle decisioni.'),
        c4('Spieghi i criteri: punti, rischio di contatto e margine sul rivale diretto', 'Regole chiare', 0.85, [4, 0, 0, 5], 'Fiducia nel muretto.', [2, 0, 0, 3], 'Ancora qualche malumore, ma gestibile.'),
        c4('Dai priorità al pilota più veloce già adesso', 'Gerarchia anticipata', 0.5, [4, 0, 0, -2], 'Il più veloce rende.', [-2, 0, 0, -5], 'L’altro si demotiva.')
      ]),
      card('w-degrado', 2, 'Giro 20. Il pilota A segnala degrado alto sulle anteriori; il pilota B ha ritmo e gomme migliori ma è dietro.', [
        c4('Fai rientrare A subito per gomme nuove', 'Sosta per degrado', 0.7, [4, 6, 0, 1], 'A recupera e ritrova ritmo.', [1, 6, 0, -1], 'Esce nel traffico.'),
        c4('Tieni A fuori fino alla finestra con una gestione dei freni e del ritmo', 'Gestione', 0.55, [3, -3, -1, 2], 'Allunga lo stint e tiene la posizione.', [-5, -8, -2, -2], 'Il degrado esplode.'),
        c4('Fai rientrare B per ottimizzare e lasci A ad aprire la strada', 'Strategia doppia', 0.5, [3, 3, 0, 0], 'Funziona.', [-2, 2, 0, -2], 'B perde posizione.')
      ]),
      card('w-motore', 3, 'Il pilota B segnala potenza ridotta del 3% per un problema al sistema di raffreddamento della power unit.', [
        c4('Gli dici di spingere al 100%: servono i punti', 'Pressione', 0.35, [4, 0, -10, 0], 'Regge.', [-7, 0, -25, -3], 'Il motore cede.'),
        c4('Gli chiedi di usare la modalità di protezione e sollevare in curva', 'Gestione dei sistemi', 0.8, [3, 0, 3, 3], 'Il motore si salva.', [1, 0, 1, 1], 'Perdi due decimi.'),
        c4('Lo richiami ai box per controllare', 'Sosta di controllo', 0.5, [-5, 3, 4, -1], 'Il problema si risolve ma sei dietro.', [-8, 2, 2, -3], 'Il controllo non trova nulla.')
      ]),
      card('w-sc', 4, 'Safety car. Entrambi i piloti sono nel gruppo; solo uno può rientrare senza perdere posizioni (doppia sosta rallenta il secondo).', [
        c4('Rientri il pilota in testa e lasci l’altro fuori', 'Priorità', 0.65, [4, 5, 0, 1], 'Il primo guadagna posizioni.', [1, 4, 0, -2], 'Il secondo accusa la scelta.'),
        c4('Rientrano entrambi, con il secondo in coda alla fila', 'Doppia sosta', 0.55, [3, 8, 0, 0], 'Il ritardo costa poco.', [-4, 6, 0, -2], 'Il ritardo costa tre posizioni.'),
        c4('Nessuno rientra', 'Posizione in pista', 0.4, [3, -6, 0, 0], 'Resistono.', [-6, -9, -1, -2], 'Gomme vecchie al restart.')
      ]),
      card('w-ordine', 5, 'Giro 38. Il pilota A, più lento, tiene dietro B che ha ritmo migliore di 4 decimi. Davanti c’è un rivale a portata.', [
        c4('Ordini subito a A di far passare B', 'Ordine di squadra', 0.7, [5, 0, 0, -1], 'B passa e raggiunge il rivale.', [2, 0, 0, -4], 'A protesta e B perde tempo.'),
        c4('Aspetti due giri per vedere se A recupera', 'Attesa', 0.4, [2, 0, 0, 1], 'A recupera il ritmo.', [-4, 0, 0, -3], 'B rallenta e il rivale scappa.'),
        c4('Proponi lo scambio condizionato: se B non passa il rivale entro 5 giri, torna indietro', 'Swap condizionale', 0.8, [6, 0, 0, 3], 'Tutti accettano la logica.', [3, 0, 0, 1], 'B non passa il rivale e rimette A davanti.')
      ]),
      card('w-radio', 5, 'B chiede via radio perché è stato rallentato: è nervoso e rischia di commettere un errore.', [
        c4('Rispondi con i dati di tempo e il piano per i giri successivi', 'Radio chiara', 0.8, [3, 0, 0, 4], 'Si calma e rende.', [1, 0, 0, 2], 'Resta teso ma concentrato.'),
        c4('Rispondi in tono brusco: concentrati sulla guida', 'Tono duro', 0.4, [2, 0, 0, -3], 'Reagisce bene.', [-4, 0, -2, -6], 'Si innervosisce e sbaglia.'),
        c4('Non rispondi per non distrarlo', 'Silenzio', 0.55, [1, 0, 0, -1], 'Si calma da solo.', [-2, 0, -1, -3], 'Si sente ignorato.')
      ]),
      card('w-freni', 6, 'Giro 42. Temperatura freni di A oltre la soglia, e il rivale è a 0,6 secondi.', [
        c4('Gli ordini di sollevare in ingresso curva e lasciare tre decimi', 'Protezione dell’affidabilità', 0.7, [2, 0, 6, 2], 'Freni salvi e posizione tenuta.', [-4, 0, 4, -1], 'Il rivale passa ma la macchina arriva.'),
        c4('Gli dici di difendere comunque: il podio vale più', 'Rischio affidabilità', 0.35, [5, 0, -10, 0], 'Regge.', [-7, 0, -28, -4], 'I freni cedono e finisce in ghiaia.'),
        c4('Lo chiami ai box per un controllo', 'Sosta di sicurezza', 0.4, [-6, 4, 6, -1], 'Controllo senza problemi.', [-9, 3, 4, -3], 'Perdi due posizioni.')
      ]),
      card('w-protesta', 6, 'Un rivale ti ha spinto fuori in staccata. Hai 5 minuti per decidere se presentare un reclamo.', [
        c4('Presenti il reclamo subito con il video', 'Reclamo', 0.5, [4, 0, 0, 1], 'Penalità al rivale.', [-1, 0, 0, -2], 'Respinto e perdi tempo.'),
        c4('Raccogli dati e video e decidi dopo la gara con calma', 'Valutazione', 0.75, [3, 0, 0, 3], 'Ottieni il risultato.', [1, 0, 0, 1], 'Nessuna conseguenza.'),
        c4('Lasci perdere', 'Rinuncia', 0.6, [0, 0, 0, -2], 'Niente cambia.', [-2, 0, 0, -3], 'La squadra si sente ignorata.')
      ]),
      card('w-ultimo-stint', 7, 'Mancano 12 giri: A ha gomme più vecchie ma è davanti; B ha gomme fresche e ha ritmo, ma è dietro di 2 secondi.', [
        c4('Lasci che B attacchi A in pista senza intervenire', 'Corsa libera', 0.5, [4, 0, -2, 1], 'B passa A.', [-5, 0, -5, -5], 'Contatto fra compagni.'),
        c4('Ordini a A di facilitare il sorpasso e a B di non rischiare', 'Coordinamento', 0.8, [6, 0, 0, 3], 'Cambio di posizione pulito.', [3, 0, 0, 1], 'B non passa abbastanza.'),
        c4('Congeli le posizioni', 'Congelamento', 0.7, [1, 0, 0, -1], 'Punti assicurati.', [0, 0, 0, -3], 'B si sente frenato.')
      ]),
      card('w-finale', 8, 'Ultimo giro. A è in lotta per il podio con un rivale; B potrebbe aiutare a rallentarlo ma sarebbe rischioso.', [
        c4('B si mette fra A e il rivale per fare da tappo', 'Tappo', 0.3, [4, 0, -3, -2], 'Funziona.', [-6, 0, -12, -5], 'Penalità per ostacolo e contatto.'),
        c4('B resta dietro e segue le regole', 'Corsa pulita', 0.8, [3, 0, 0, 2], 'Chiudono in sicurezza.', [1, 0, 0, 0], 'A perde il podio ma chiude sano.'),
        c4('B rallenta a metà curva per forzare il rivale a rallentare', 'Gioco sporco', 0.3, [3, 0, -6, -4], 'Funziona.', [-8, 0, -15, -6], 'Penalità e reputazione danneggiata.')
      ]),
      card('w-protezione', 9, 'Per le gare successive, la power unit di A ha già percorso due terzi della vita utile prevista.', [
        c4('La usi fino al limite senza ridurre la potenza', 'Massimo uso', 0.4, [5, 0, -8, 0], 'Regge.', [-6, 0, -22, -3], 'Si rompe e partirà con penalità.'),
        c4('Riduci la modalità solo in alcune zone per prolungarne la vita', 'Gestione della vita utile', 0.75, [3, 0, 4, 2], 'Vita estesa senza perdere molto.', [1, 0, 2, 0], 'Perdi due decimi.'),
        c4('Sostituisci subito l’unità e accetti la penalità in griglia', 'Cambio preventivo', 0.5, [-3, 0, 6, 0], 'Affidabile ma penalizzato.', [-5, 0, 4, -2], 'Penalità peggiore del previsto.')
      ]),
      card('w-conf', 10, 'Dopo la gara i media chiedono un commento sugli ordini di squadra. I due piloti hanno opinioni diverse.', [
        c4('Dici che gli ordini sono stati un errore', 'Scaricare', 0.3, [0, 0, 0, -3], 'Nessuno ci bada.', [-2, 0, 0, -8], 'La squadra si sente tradita.'),
        c4('Spieghi i criteri di squadra e riconosci il lavoro di entrambi', 'Comunicazione coerente', 0.85, [2, 0, 0, 5], 'Clima ottimo.', [1, 0, 0, 3], 'Qualche malumore in privato.'),
        c4('Eviti di commentare', 'Non rispondere', 0.6, [0, 0, 0, 0], 'Silenzio.', [0, 0, 0, -3], 'I media fanno ipotesi.')
      ]),
      card('w-pit', 2, 'Sosta di B: la squadra ha il 15% di rischio di sosta lenta con un cambio gomme complesso, o sosta più semplice che costa 0,3 secondi in più.', [
        c4('Sosta complessa per guadagnare tempo', 'Rischio di sosta', 0.55, [4, 4, 0, 1], 'Sosta rapida.', [-5, 2, -2, -3], 'Sosta lenta e perdi posizioni.'),
        c4('Sosta standard collaudata', 'Procedura affidabile', 0.85, [3, 4, 1, 2], 'Sosta pulita.', [1, 3, 0, 0], 'Sosta più lenta del solito.'),
        c4('Rimandi la sosta di un giro', 'Rinvio', 0.5, [1, -2, 0, 0], 'Nessun danno.', [-3, -3, 0, -1], 'Perdi la finestra.')
      ])
    ]
  });

  /* ---- 5) Stagione ---- */
  const c5 = mk(['prestazione', 'budget', 'affidabilita', 'sviluppo']);
  SIM.register({
    id: 'f1-stagione', subject: 'f1', title: 'Una stagione sotto il budget cap', icon: '📈',
    intro: 'Dirigi lo sviluppo tecnico di una squadra di metà gruppo con un tetto di spesa annuale. Ogni scelta sposta prestazione della vettura, budget residuo, affidabilità e capacità di sviluppo (galleria del vento, personale, talento in crescita). Non puoi spendere due volte lo stesso euro, e le risorse di galleria sono contingentate: conta il rendimento di ogni investimento e il momento in cui lo fai.',
    vars: {
      prestazione: { label: 'Prestazione della vettura', start: 40, min: 0, max: 100 },
      budget: { label: 'Budget residuo', start: 60, min: 0, max: 100 },
      affidabilita: { label: 'Affidabilità', start: 65, min: 0, max: 100 },
      sviluppo: { label: 'Capacità di sviluppo', start: 50, min: 0, max: 100 }
    },
    weights: { prestazione: 1.5, budget: 0.5, affidabilita: 0.9, sviluppo: 0.5 },
    penalties: [],
    turns: 6, utilText: '1,5 × prestazione + 0,5 × budget + 0,9 × affidabilità + 0,5 × sviluppo',
    cards: [
      card('s-inverno', 1, 'Inverno. Hai un budget fisso e puoi spendere in aerodinamica, motore, telaio o personale. Cosa privilegi?', [
        c5('Tutto in aerodinamica per iniziare con un grande salto di prestazioni', 'Concentrazione', 0.4, [10, -12, -6, -2], 'La vettura parte forte ma il resto è scoperto.', [-2, -14, -8, -4], 'Il salto non arriva e il budget è bruciato.'),
        c5('Una quota per ogni area con priorità alle carenze note e riserva per gli aggiornamenti in corsa', 'Allocazione bilanciata', 0.8, [6, -6, 3, 4], 'Una base sensata.', [3, -5, 2, 2], 'Guadagno modesto ma sicuro.'),
        c5('Risparmi e aspetti di vedere come va la vettura', 'Attesa', 0.5, [-2, 4, 0, -2], 'Hai riserve.', [-5, 3, -2, -4], 'Parti in ritardo.')
      ]),
      card('s-galleria', 1, 'Le ore di galleria del vento sono contingentate. Hai un pacchetto da provare in due versioni: quale studi per primo?', [
        c5('La versione ambiziosa: se funziona è un salto', 'Alto rischio, alto rendimento', 0.4, [9, -6, -1, 1], 'Funziona e guadagni molto.', [-4, -7, -2, -3], 'Dati non correlati con la pista.'),
        c5('La versione conservativa, più prevedibile', 'Basso rischio', 0.75, [5, -5, 1, 3], 'Guadagno solido.', [2, -5, 1, 1], 'Guadagno minore del previsto.'),
        c5('Dividi le ore a metà fra le due', 'Diversificazione', 0.6, [5, -6, 0, 2], 'Hai due opzioni.', [1, -6, 0, 0], 'Nessuna ha abbastanza dati.')
      ]),
      card('s-corr', 2, 'Le correlazioni fra galleria e pista sono basse sull’ultimo aggiornamento. Cosa fai?', [
        c5('Ignori il problema: sono solo numeri', 'Negazione', 0.4, [2, 0, 0, 0], 'Per caso va.', [-8, -5, -2, -5], 'Sviluppi in direzione sbagliata.'),
        c5('Dedichi risorse alla correlazione, anche rallentando lo sviluppo per due gare', 'Calibrazione', 0.8, [3, -3, 1, 6], 'Ritrovi la correlazione e riparti.', [1, -3, 0, 3], 'Costo alto, risultato lento.'),
        c5('Cambi galleria o fornitore', 'Cambio drastico', 0.4, [3, -10, 0, 1], 'Il nuovo funziona.', [-5, -12, -2, -5], 'Perdi mesi.')
      ]),
      card('s-aggiorn', 3, 'Primo grande aggiornamento della stagione: l’ala nuova costa il 12% del budget e promette 3 decimi, con un 30% di rischio di non funzionare.', [
        c5('Lo porti subito in tutte le gare', 'Introduzione precipitosa', 0.4, [6, -12, -3, 1], 'Funziona.', [-4, -12, -4, -3], 'Non funziona e hai buttato i soldi.'),
        c5('Lo provi nel venerdì in una vettura e decidi dopo i dati', 'Test in pista', 0.8, [5, -8, 1, 3], 'Conferma il guadagno.', [2, -7, 1, 1], 'Guadagno parziale.'),
        c5('Aspetti la gara successiva per un’introduzione completa', 'Attesa', 0.6, [3, -6, 0, 1], 'Introduzione ordinata.', [0, -6, 0, -1], 'Perdi una gara di sviluppo.')
      ]),
      card('s-affid', 4, 'Due rotture in tre gare per lo stesso componente. Il costo di riprogettare è alto, ma il sintomo si ripete.', [
        c5('Aggiungi margini di sicurezza a tutta la linea senza analisi', 'Sovradimensionamento', 0.5, [-2, -6, 8, -1], 'Funziona.', [-4, -7, 4, -2], 'Peso e prestazioni peggiorano.'),
        c5('Analisi della causa radice e ridisegno mirato del componente', 'Root cause', 0.8, [1, -5, 10, 4], 'Il problema si risolve.', [0, -4, 6, 2], 'Parzialmente.'),
        c5('Continui così e accetti il rischio', 'Accettazione', 0.35, [2, 3, -6, 0], 'Non si rompe.', [-4, 2, -14, -3], 'Ennesima rottura.')
      ]),
      card('s-pilota', 4, 'Il giovane pilota del vivaio impressiona nei test del venerdì, ma il budget per il sedile è limitato.', [
        c5('Gli dai un posto da titolare adesso', 'Promozione rapida', 0.4, [3, -8, -2, 3], 'Rende subito.', [-3, -9, -3, -2], 'Troppa pressione, errori costosi.'),
        c5('Lo fai correre in altre sessioni, con un piano di crescita graduale', 'Sviluppo graduale', 0.8, [2, -3, 0, 6], 'Cresce e diventa utile.', [1, -3, 0, 4], 'Cresce più lentamente.'),
        c5('Lo ignori', 'Spreco di talento', 0.6, [0, 2, 0, -3], 'Nessun costo.', [-1, 2, 0, -5], 'Il talento se ne va.')
      ]),
      card('s-cap', 5, 'A metà stagione sei vicino al tetto di spesa. L’aggiornamento successivo costa tanto e le spese di trasferta sono già alte.', [
        c5('Spendi comunque e riduci le spese di fine anno', 'Spesa anticipata', 0.4, [6, -14, 0, 1], 'Funziona.', [-3, -15, -2, -3], 'Finisci in difficoltà.'),
        c5('Pianifichi le uscite per le ultime gare e scegli solo gli aggiornamenti con il miglior rapporto costo/guadagno', 'Pianificazione', 0.8, [4, -6, 1, 4], 'Spesa ben distribuita.', [2, -5, 1, 2], 'Risultati modesti.'),
        c5('Congeli tutto lo sviluppo', 'Stop', 0.6, [-3, 5, 1, -2], 'Hai riserve.', [-5, 4, 0, -4], 'Perdi terreno sui rivali.')
      ]),
      card('s-regolam', 6, 'Le regole del prossimo anno cambiano completamente. Ogni risorsa spesa sulla vettura attuale è sottratta a quella del prossimo anno.', [
        c5('Tutto sul prossimo anno', 'Sacrifico il presente', 0.5, [-6, -4, 0, 8], 'La base è eccellente.', [-8, -4, -1, 4], 'Rischio di sbagliare direzione.'),
        c5('Una quota ben dosata sul presente e il resto sul futuro, con milestone verificabili', 'Bilanciamento', 0.8, [3, -3, 2, 6], 'Ottimo equilibrio.', [1, -3, 1, 4], 'Costa risorse.'),
        c5('Tutto sul presente', 'Presente', 0.4, [6, -8, 1, -5], 'Punti ora.', [2, -8, 0, -7], 'Domani sarai indietro.')
      ]),
      card('s-sponsor', 6, 'Uno sponsor offre soldi in cambio di test aerodinamici ridotti su un particolare componente.', [
        c5('Accetti: i soldi servono', 'Soldi subito', 0.5, [-2, 8, 0, -3], 'Budget migliore.', [-4, 7, -1, -5], 'Lo sviluppo si ferma.'),
        c5('Rifiuti ma proponi un accordo diverso', 'Negoziazione', 0.6, [1, 4, 0, 1], 'Accordo trovato.', [0, 0, 0, 0], 'Nessun accordo.'),
        c5('Rifiuti', 'Rifiuto', 0.8, [1, 0, 0, 1], 'Tieni libertà.', [0, -2, 0, 0], 'Perdi l’opportunità.')
      ]),
      card('s-rimonta', 7, 'Sei quarto nel campionato costruttori a 20 punti dal terzo. Restano 8 gare.', [
        c5('Spendi il resto del budget per un aggiornamento ambizioso', 'All-in', 0.35, [8, -15, -4, 0], 'Funziona.', [-4, -15, -6, -3], 'Non funziona.'),
        c5('Piccoli aggiornamenti mirati nelle gare con circuiti favorevoli', 'Aggiornamenti mirati', 0.8, [5, -6, 2, 3], 'Guadagni punti.', [3, -5, 1, 1], 'Rimani vicino.'),
        c5('Mantieni la posizione senza spese', 'Gestione', 0.6, [-2, 3, 0, -1], 'Quarta.', [-4, 2, 0, -2], 'Perdi il quarto.')
      ]),
      card('s-personale', 8, 'Un ingegnere chiave riceve un’offerta da un’altra squadra. Perderlo rallenterebbe lo sviluppo.', [
        c5('Alzi lo stipendio molto sopra la media della squadra', 'Retention a costo', 0.65, [1, -7, 0, 5], 'Rimane.', [0, -8, 0, 1], 'Se ne va lo stesso.'),
        c5('Proponi un ruolo con più responsabilità e un ritocco ragionevole', 'Crescita professionale', 0.75, [2, -3, 0, 6], 'Accetta.', [0, -3, 0, 2], 'Prende tempo.'),
        c5('Lo lasci andare', 'Rinuncia', 0.5, [-1, 3, 0, -4], 'Lo rimpiazzi.', [-4, 3, -1, -8], 'Vuoto nel team.')
      ]),
      card('s-test', 9, 'Hai una sessione di test in pista disponibile e un componente nuovo da provare, ma solo una vettura.', [
        c5('Provi il componente su una vettura e usi l’altra come riferimento', 'Confronto controllato', 0.75, [5, -3, 2, 4], 'Dati chiari.', [2, -3, 1, 2], 'Dati ambigui.'),
        c5('Provi tre componenti insieme', 'Test multipli', 0.4, [5, -4, 0, 1], 'Dati utili.', [-3, -4, -2, -3], 'Non sai cosa funziona.'),
        c5('Non provi', 'Rinuncia', 0.6, [-1, 3, 0, -2], 'Risparmi.', [-3, 2, 0, -4], 'Resti senza dati.')
      ]),
      card('s-finale', 10, 'Ultime gare: un grande aggiornamento potrebbe aiutare il prossimo anno, ma richiede di rinunciare a punti oggi.', [
        c5('Lo porti ora per raccogliere dati utili', 'Dati per il futuro', 0.7, [-2, -4, 1, 7], 'Dati preziosi.', [-4, -4, 0, 4], 'Dati più modesti.'),
        c5('Lo rimandi all’anno dopo', 'Rinvio', 0.6, [2, 3, 1, -1], 'Punti conservati.', [0, 2, 0, -2], 'Poco cambia.'),
        c5('Lo porti e speri di fare punti', 'Doppia scommessa', 0.4, [5, -6, 0, 5], 'Funziona.', [-5, -6, -2, 1], 'Né punti né dati.')
      ]),
      card('s-dati', 2, 'Il tuo reparto dati propone di costruire una nuova pipeline per l’analisi delle gare, con costi in ore e un beneficio non immediato.', [
        c5('Rifiuti: servono risultati subito', 'Corto termine', 0.5, [1, 2, 0, -3], 'Nessun danno.', [-2, 2, 0, -4], 'Decisioni meno informate.'),
        c5('Approvi un progetto pilota su un solo tipo di analisi', 'Pilota', 0.8, [2, -3, 0, 5], 'Beneficio visibile.', [1, -3, 0, 3], 'Beneficio modesto.'),
        c5('Approvi tutto il progetto', 'Tutto subito', 0.45, [4, -8, 0, 6], 'Funziona.', [-2, -9, 0, 1], 'Costoso e lento.')
      ])
    ]
  });

  /* ---- 6) Carriera di un giovane pilota ---- */
  const c6 = mk(['talento', 'reputazione', 'risorse', 'equilibrio']);
  SIM.register({
    id: 'f1-carriera', subject: 'f1', title: 'La carriera di un giovane pilota', icon: '🏎️',
    intro: 'Dal kart alle formule, in un percorso inventato: ogni anno devi scegliere formazione, team, sponsor e come gestire errori e stanchezza. Le scelte spostano talento sviluppato, reputazione, risorse economiche e benessere (equilibrio vita-sport). Senza equilibrio la carriera si spegne; senza risorse non si corre. Nessuna scorciatoia è gratis.',
    vars: {
      talento: { label: 'Talento sviluppato', start: 30, min: 0, max: 100 },
      reputazione: { label: 'Reputazione', start: 30, min: 0, max: 100 },
      risorse: { label: 'Risorse economiche', start: 45, min: 0, max: 100 },
      equilibrio: { label: 'Equilibrio e benessere', start: 65, min: 0, max: 100 }
    },
    weights: { talento: 1.5, reputazione: 0.8, risorse: 0.5, equilibrio: 0.9 },
    penalties: [],
    turns: 6, utilText: '1,5 × talento + 0,8 × reputazione + 0,5 × risorse + 0,9 × equilibrio',
    cards: [
      card('k-kart', 1, 'Kart a 12 anni. Hai un budget familiare limitato: come lo usi?', [
        c6('Corri tutto il calendario nazionale più i test privati', 'Massima esposizione', 0.4, [6, 3, -14, -6], 'Cresci in fretta ma i costi sono enormi.', [2, 1, -16, -10], 'Spese alte e stanchezza.'),
        c6('Pochi eventi scelti bene e allenamenti su simulatore e preparazione fisica', 'Qualità sul volume', 0.8, [6, 3, -5, 3], 'Crescita costante e sostenibile.', [3, 1, -4, 2], 'Meno risultati, ma sostenibile.'),
        c6('Corri solo per divertimento, senza obiettivi', 'Nessuna direzione', 0.6, [1, 0, -2, 4], 'Ti diverti.', [-2, -1, -2, 2], 'Resti indietro.')
      ]),
      card('k-scuola', 1, 'Gli allenamenti si sovrappongono agli esami della scuola. Cosa scegli?', [
        c6('Salti gli esami per le gare', 'Tutto sulla pista', 0.35, [4, 2, -2, -8], 'Pista sì, ma il resto cede.', [-2, 0, -2, -12], 'Ti ritrovi senza piano B.'),
        c6('Ti organizzi con scuola e team per concordare un calendario che tenga entrambe le cose', 'Pianificazione', 0.8, [4, 2, 0, 5], 'Gestisci entrambi.', [2, 1, 0, 3], 'Perdi un evento ma sei in pari.'),
        c6('Rinunci alle gare per la scuola', 'Priorità unica', 0.7, [-3, -2, 1, 4], 'Esami ottimi.', [-5, -3, 0, 2], 'Sei fuori ritmo.')
      ]),
      card('k-coach', 2, 'Un coach esperto propone di lavorare con te ma costa molto. Il suo metodo è molto diverso dal tuo.', [
        c6('Accetti subito: è il migliore', 'Fiducia cieca', 0.5, [6, 2, -8, -1], 'Impari molto.', [-2, 0, -10, -4], 'Metodi incompatibili e soldi persi.'),
        c6('Fai una prova di due weekend per valutare compatibilità e progressi', 'Prova', 0.8, [5, 2, -3, 3], 'Funziona e decidi con dati.', [2, 1, -2, 2], 'Non è adatto, ma il costo è basso.'),
        c6('Rifiuti: sai già come fare', 'Chiusura', 0.5, [0, 0, 0, 1], 'Procedi.', [-3, -1, 0, -2], 'Resti fermo.')
      ]),
      card('k-errore', 2, 'In gara hai commesso un errore che ha eliminato un rivale. Il team vuole la tua versione.', [
        c6('Dai la colpa al rivale', 'Scaricare', 0.3, [0, -3, 0, -3], 'Nessuno insiste.', [-2, -10, 0, -7], 'Reputazione compromessa.'),
        c6('Ammetti l’errore e spieghi cosa cambierai', 'Assunzione di responsabilità', 0.85, [4, 5, 0, 3], 'Rispetto del team.', [2, 3, 0, 1], 'Qualche critica ma stima.'),
        c6('Resti in silenzio', 'Silenzio', 0.6, [0, -1, 0, -1], 'Si dimentica.', [-2, -4, 0, -3], 'Voci negative.')
      ]),
      card('k-sponsor', 4, 'Uno sponsor offre un contratto: molti soldi, ma condizioni vincolanti (eventi, immagine, meno allenamento).', [
        c6('Firmi senza leggere: servono soldi', 'Fretta', 0.35, [-2, 2, 14, -8], 'Soldi subito.', [-5, -4, 10, -14], 'Clausole pesanti.'),
        c6('Fai leggere il contratto a un consulente e negozi limiti sugli eventi', 'Consulenza e negoziazione', 0.8, [3, 3, 8, 3], 'Accordo equilibrato.', [1, 2, 5, 1], 'Accordo più piccolo.'),
        c6('Rifiuti sempre gli sponsor', 'Autonomia', 0.7, [1, 0, -3, 2], 'Sei libero.', [-2, -1, -5, 0], 'Mancano fondi.')
      ]),
      card('k-categoria', 5, 'Passaggio di categoria: puoi scegliere un team di vertice con poco spazio o uno più piccolo in cui sarai la punta.', [
        c6('Team di vertice: impari dai migliori ma in ombra', 'Ambiente di alto livello', 0.5, [5, 3, -3, -2], 'Impari molto.', [1, -1, -3, -5], 'Poca attenzione, poche gare.'),
        c6('Team piccolo: più minuti in pista, ma meno risorse', 'Spazio e fiducia', 0.65, [4, 2, -3, 2], 'Cresci con regolarità.', [1, 0, -4, 0], 'Mezzi limitati.'),
        c6('Cambi squadra spesso per cercare occasioni', 'Instabilità', 0.4, [3, 1, -5, -3], 'Trovi un posto.', [-3, -3, -6, -7], 'Reputazione di volubile.')
      ]),
      card('k-stanchezza', 6, 'Sei stanco, hai dormito poco e gli ultimi due weekend sono andati male.', [
        c6('Aumenti gli allenamenti per recuperare', 'Più carico', 0.35, [3, 0, 0, -8], 'Funziona.', [-4, -2, 0, -16], 'Esaurito.'),
        c6('Parli con il preparatore e prendi una settimana più leggera', 'Recupero e ascolto', 0.8, [3, 1, 0, 8], 'Ricarichi.', [1, 0, 0, 5], 'Recuperi lentamente.'),
        c6('Ignori e continui', 'Ignorare', 0.4, [1, 0, 0, -3], 'Passa.', [-3, -2, 0, -9], 'Calo di prestazioni.')
      ]),
      card('k-media', 6, 'Un post sui social ha scatenato polemiche: i fan sono divisi.', [
        c6('Rispondi di getto con un tono duro', 'Reattività', 0.3, [0, -3, 0, -3], 'Calma.', [-2, -10, -2, -8], 'Peggiora.'),
        c6('Aspetti, ne parli con l’ufficio stampa e scrivi un messaggio misurato', 'Gestione della comunicazione', 0.8, [1, 4, 0, 3], 'Rientra.', [0, 2, 0, 1], 'Danno limitato.'),
        c6('Cancelli tutto e sparisci', 'Sparire', 0.5, [0, -2, 0, 2], 'Si calma.', [-1, -4, 0, 0], 'Ti dimenticano.')
      ]),
      card('k-simul', 7, 'Il team ti offre un posto da pilota di riserva in una categoria superiore, ma con molte ore di simulatore e poche gare.', [
        c6('Accetti: sei vicino al vertice', 'Opportunità', 0.55, [4, 5, 3, -3], 'Si apre una porta.', [1, 0, 2, -6], 'Resti fermo.'),
        c6('Accetti ma negozi due gare in una serie minore per restare in ritmo', 'Compromesso', 0.8, [5, 4, 2, 2], 'Ritmo e visibilità.', [3, 2, 1, 0], 'Risultato modesto.'),
        c6('Rifiuti per continuare a correre ogni weekend', 'Corsa continua', 0.55, [3, 1, -3, 2], 'Cresci.', [0, -1, -3, 0], 'Meno visibilità.')
      ]),
      card('k-infortunio', 8, 'Ti fai male a un polso a due settimane dall’evento decisivo. Il medico consiglia riposo ma puoi gareggiare con dolore.', [
        c6('Corri comunque con antidolorifici presi da te', 'Ignorare il medico', 0.3, [3, 2, 0, -10], 'Vai forte.', [-4, -5, -2, -18], 'Danno più grave.'),
        c6('Segui il protocollo medico e prepari una versione ridotta della gara', 'Ascoltare gli esperti', 0.8, [2, 1, 0, 5], 'Rientri sano.', [-1, -1, 0, 2], 'Salti l’evento ma rientri bene.'),
        c6('Salti tutto e smetti di allenarti', 'Fermo totale', 0.6, [-4, -2, 0, 3], 'Guarisci.', [-6, -3, 0, 0], 'Perdi forma.')
      ]),
      card('k-contratto', 9, 'Ricevi due offerte: un contratto lungo con stipendio basso o uno breve con stipendio più alto.', [
        c6('Il contratto breve: soldi subito', 'Flessibilità', 0.5, [1, 1, 8, 0], 'Soldi e libertà.', [-3, -2, 5, -3], 'Insicurezza per il futuro.'),
        c6('Il contratto lungo con clausole di uscita', 'Stabilità', 0.75, [4, 3, 3, 4], 'Sicurezza e crescita.', [2, 1, 2, 2], 'Mercato cambiato, ma sei coperto.'),
        c6('Nessuno dei due, aspetti altro', 'Attesa', 0.35, [1, 0, -2, -1], 'Arriva di meglio.', [-4, -3, -5, -5], 'Restano senza offerte.')
      ]),
      card('k-gara', 10, 'La gara decisiva per il salto di categoria: partenza dal fondo dopo una penalità non tua.', [
        c6('Tutto o niente alla prima curva', 'Rischio massimo', 0.35, [5, 5, -2, -3], 'Recuperi molto.', [-4, -8, -6, -6], 'Danno e abbandono.'),
        c6('Rimonta progressiva con gomme gestite e sorpassi puliti', 'Costanza', 0.8, [5, 5, 0, 3], 'Chiudi in zona punti.', [2, 2, 0, 1], 'Fuori dai punti ma con ottima gara.'),
        c6('Ti accontenti di arrivare in fondo', 'Passività', 0.6, [0, 0, 0, 0], 'Finisci.', [-2, -1, 0, -2], 'Occasione sprecata.')
      ]),
      card('k-mentale', 3, 'Dopo una serie di risultati negativi senti ansia pre-gara. Hai un supporto mentale disponibile.', [
        c6('Eviti di parlarne con chiunque', 'Isolamento', 0.35, [0, 0, 0, -3], 'Passa.', [-3, -2, 0, -10], 'Peggiora.'),
        c6('Lavori con uno psicologo dello sport su routine e respirazione', 'Supporto mentale', 0.85, [4, 1, -2, 7], 'Ritrovi fiducia.', [2, 0, -2, 4], 'Miglioramento graduale.'),
        c6('Riduci le gare', 'Pausa', 0.5, [-1, -1, 1, 2], 'Ti riposi.', [-4, -3, 1, 0], 'Nulla cambia.')
      ])
    ]
  });
})(window.ST = window.ST || {});
