# Registro di revisione affidabilità: cybersicurezza (campione)

Campione di 12 argomenti su 48 (25%), letti per intero (pagine, esercizi e test). Sorgenti: `src/content/cyb-l-*.js`. Verifica fatta a memoria e con ricalcolo di tutti i numeri (RSA, Diffie–Hellman, CVSS v3.1, subnetting, entropia, ALE) con Node.

Classificazioni: ERRORE CERTO / DUBBIO / DA VERIFICARE CON FONTE ESTERNA.

| id | punto | citazione breve | classificazione | motivo | azione |
|---|---|---|---|---|---|
| cyb-cifrari-simmetrici | pagina «AES: dimensioni di blocco, chiavi e giri» | «è stato scelto dal NIST nel 2001» | DUBBIO | Imprecisione di data lieve: la selezione di Rijndael fu annunciata nel 2000, lo standard FIPS 197 è del 2001. «Scelto» può essere letto come «adottato come standard». | Nessuna modifica (non certo come errore) |
| cyb-tls-e-https | pagine «Certificati e catena di fiducia» ed «Errori di certificato», esercizio «nome non corrispondente» | «il nome richiesto compaia nel certificato (CN/SAN)» | DUBBIO | Semplificazione: i browser moderni validano il nome sul solo campo SAN e ignorano il CN. Il testo non è falso ma può far credere che il CN basti. | Nessuna modifica |
| cyb-autenticazione-e-password | pagina «Perché non basta la complessità» | «almeno 12–15 caratteri» (attribuito alle indicazioni NIST) | DA VERIFICARE CON FONTE ESTERNA | Le soglie minime di SP 800-63B cambiano tra le revisioni (rev. 3 e rev. 4). Il testo dice «per esempio» e indica un intervallo di raccomandazione generica. Non verificabile senza il documento. | Nessuna modifica |
| cyb-gestione-vulnerabilita-e-cvss | intera lezione (CVSS v3.1) | «CVSS v3.1 con un calcolo completo» | DA VERIFICARE CON FONTE ESTERNA | La lezione tratta solo v3.1, correttamente dichiarato. Esiste anche CVSS v4.0 (2023), usato sempre più nelle banche dati. Non è un errore, è un limite di copertura. | Nessuna modifica; valutare una nota su v4.0 |
| cyb-incident-response | pagina «Evento, incidente e ciclo di vita» | «modello … del NIST (SP 800-61), articolato in sei passi … Il NIST raggruppa 3, 4 e 5 in un’unica fase» | DA VERIFICARE CON FONTE ESTERNA | Descrive correttamente la rev. 2 (4 fasi). Ricordo che SP 800-61 è stato riallineato al CSF 2.0 in una revisione successiva (rev. 3, 2025). Da confermare sul sito NIST prima di dire che il modello è superato. | Nessuna modifica |
| cyb-framework-e-conformita | pagine ISO 27002, CIS Controls, NIST CSF | «93 controlli», «18 controlli», «sei funzioni» | DA VERIFICARE CON FONTE ESTERNA | Coerenti con quanto ricordo (ISO/IEC 27002:2022, CIS v8, CSF 2.0). I nomi e i numeri delle edizioni cambiano nel tempo; da riverificare periodicamente. | Nessuna modifica |

## Verifiche positive significative (nessun problema trovato)

- Calcoli RSA (p = 61, q = 53, e = 17, d = 2753; 65 → 2790 → 65; esempio n = 33; esempio n = 55), Diffie–Hellman (p = 23 e p = 11), potenze modulari e inversi: tutti ricalcolati e corretti.
- CVSS v3.1: pesi, ISS, impatto, sfruttabilità, arrotondamento e punteggi 9,8 / 7,5 / 5,3 / 7,8 / 9,1 corretti; fasce di gravità corrette.
- Entropia: log₂ di 10, 26, 62, 94 e 7776 corretti; 52 / 75 / 78 bit coerenti con testo, esercizi e test; stima «oltre 5 anni» a 5 tentativi per 15 minuti corretta (≈ 5,7).
- Subnetting: blocchi, reti, broadcast e conteggio host corretti (/20, /22, /26, /27, /28, /29, /30); intervalli RFC 1918 e IPv6 corretti.
- ALE/SLE/ARO: tutti gli esempi (32 000, 12 800, 19 200, 7 200, −8 000) coerenti con esercizi e test.
- Date e standard: MD5 (2004, 2008), SHAttered (2017), DES (1998), RFC 8996 (2021), TLS 1.3 (RFC 8446), SHA-3 (2015), Argon2/PHC (2015), ML-KEM/ML-DSA/SLH-DSA (FIPS 203/204/205, 2024), RSA-250 (829 bit, 2020), bug Debian OpenSSL (2006–2008), GDPR 72 ore, NIS2 24 ore / 72 ore / un mese.
- Algoritmi deprecati (DES, 3DES, MD5, SHA-1, RC4, TLS 1.0/1.1, PKCS#1 v1.5) sempre presentati come tali.
- Nessun contenuto operativo offensivo: gli esempi di injection, padding oracle e differenze tra cifrari sono concettuali, con la correzione accanto.
- Esercizi e test: le risposte corrette risultano coerenti con il testo in tutti i 12 argomenti.

## id modificati

Nessuno. Non è stato trovato alcun ERRORE CERTO nel campione, quindi i file sorgente non sono stati toccati. `node tools/validate-content.js` esegue con «Contenuti validi» (le ATTENZIONE sui test di jpn-* sono preesistenti e non riguardano i contenuti cyb).

## id esaminati senza problemi certi

cyb-cifrari-simmetrici, cyb-hash-mac-e-password, cyb-chiave-pubblica, cyb-errori-crittografici-comuni, cyb-indirizzamento-e-subnetting, cyb-tls-e-https, cyb-gestione-vulnerabilita-e-cvss, cyb-rischio-quantitativo, cyb-framework-e-conformita, cyb-autenticazione-e-password, cyb-injection-e-prevenzione, cyb-incident-response. Gli unici rilievi sono i DUBBIO / DA VERIFICARE della tabella.

Distribuzione per stadio: L0 (1), L1 (2), L2 (4), L3 (1), L4 (1), L5 (3).

## Limiti

- Revisione fatta a memoria, senza consultare fonti esterne (NIST, ISO, RFC, FIRST, ecc.): i punti marcati DA VERIFICARE richiedono la fonte.
- Campione di 12 argomenti su 48: l’assenza di errori certi non estende la garanzia agli altri 36 (in particolare reti avanzate, Windows/Active Directory, cloud, mobile/IoT/OT, malware, ATT&CK e memoria, non letti).
- Sono stati ricalcolati i numeri, ma non è stata fatta un’analisi della resa grafica né una prova dell’app nel browser.
- Le banche `cyb-banks.js` e i file `layer-*.js` non sono stati esaminati.
