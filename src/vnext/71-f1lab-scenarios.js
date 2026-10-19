/* vNext M7c — scenari del Formula 1 Strategy Lab (4, modello sintetico). */
(function (ST) {
  'use strict';
  const F = ST.sma.f1lab;
  F.add({ id: 'f1-piano-asciutto', kind: 'plan', level: 'L1', title: 'Piano di gara su asciutto', laps: 50, base: 90, fuel: 0.03, pit: 21, scPit: 1, sc: [],
    intro: 'Gara di 50 giri su asciutto, senza Safety Car. Devi usare almeno due mescole asciutte diverse. Scegli la gomma di partenza e le soste: una sosta è davvero meglio di due?',
    explain: 'Una sosta costa circa 21 s: se le gomme non crollano troppo presto, meno soste vincono. Ma una gomma morbida degrada in fretta: il piano migliore bilancia perdita in sosta e degrado. Cambiando le ipotesi (per esempio un degrado più alto) l’ottimo cambia: per questo il modello dichiara tutto.' });
  F.add({ id: 'f1-piano-degrado', kind: 'plan', level: 'L2', title: 'Pista abrasiva: degrado alto', laps: 56, base: 91, fuel: 0.03, pit: 22, scPit: 1, degMul: 1.6, sc: [],
    intro: 'Pista molto abrasiva: il degrado è 1,6 volte maggiore. Con le stesse mescole, la strategia ottimale cambia? Rifletti prima di simulare e poi confronta con l’ottimo del modello.',
    explain: 'Un degrado più alto anticipa il «crollo» delle gomme e rende più convenienti le soste aggiuntive: è un esempio di come l’ottimo dipenda dalle ipotesi, non da una regola fissa.' });
  F.add({ id: 'f1-safety-car', kind: 'sc', level: 'L2', title: 'Safety Car: mi fermo?', laps: 50, base: 90, fuel: 0.03, pit: 21, scPit: 0.55, sc: [{ lap: 23, len: 4 }], state: { lap: 22, tyre: 'M', age: 22, note: 'Hai già usato due mescole? No, solo la Media: devi ancora cambiarne una.' },
    intro: 'Al giro 22 entra la Safety Car (4 giri, il modello la dichiara). Sei in pista con una gomma Media di 22 giri.',
    explain: 'Con la Safety Car la sosta costa meno (qui circa il 55%) perché il resto del gruppo è lento. Fermarsi è quasi sempre conveniente se serve comunque un cambio gomme; nella realtà pesano anche posizione e rischio di restare imbottigliati: il modello non li considera.' });
  F.add({ id: 'f1-pioggia', kind: 'plan', level: 'L3', title: 'Previsione di pioggia', laps: 44, base: 92, fuel: 0.03, pit: 21, scPit: 1, rain: 20, allowed: ['S', 'M', 'H', 'I'], sc: [],
    intro: 'La previsione (dichiarata) è pioggia dal giro 20 fino alla fine. Puoi montare anche le intermedie. Quando conviene cambiare, e con quale gomma?',
    explain: 'Le gomme asciutte sul bagnato perdono moltissimo (nel modello +18 s al giro). Ritardare il cambio costa più di una sosta anticipata: con una previsione affidabile conviene muoversi in anticipo; con una previsione incerta il calcolo cambia e servono piani contingenti.' });
  F.add({ id: 'f1-undercut', kind: 'duel', level: 'L3', title: 'Undercut o overcut?', laps: 50, base: 90, fuel: 0.03, pit: 21, scPit: 1, sc: [], gap: 1.5, rivalPit: 20, duelStart: 'S', duelNext: 'H',
    intro: 'Sei 1,5 s dietro a un rivale. Entrambi partite con la Morbida e passerete alla Dura. Il rivale si ferma al giro 20: quando ti fermi tu per superarlo? La Morbida usurata perde molto a ogni giro.',
    explain: 'Fermarsi prima (undercut) funziona se i giri con gomme nuove sono molto più veloci di quelli con gomme usate; fermarsi dopo (overcut) funziona se il traffico in uscita dai box o il degrado della tua gomma sono ridotti. Nel modello vince la sosta che massimizza il margine sull’intera gara, non quella che sembra più aggressiva.' });
})(window.ST = window.ST || {});
