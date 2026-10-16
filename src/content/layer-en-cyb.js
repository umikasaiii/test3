(function (ST) {
  'use strict';
  const A = (id, o) => ST.layer.add('en', id, o);
  A("cyb-gestione-del-rischio", {
    title: { t: "Risk management", it: "Gestione del rischio" },
    sum: [
      { t: "Risk cannot be reduced to zero and resources are limited, so ⟦risk management⟧ decides where to invest first.", it: "Il rischio non si azzera e le risorse sono limitate, quindi la gestione del rischio decide dove investire per primo." },
      { t: "⟦Risk⟧ is estimated by combining ⟦likelihood⟧ and impact: risk = likelihood × impact.", it: "Il rischio si stima combinando probabilità e impatto: rischio = probabilità × impatto." },
      { t: "When precise data are missing, a qualitative ⟦risk matrix⟧ crosses likelihood and impact on a simple scale.", it: "Quando mancano dati precisi, una matrice qualitativa incrocia probabilità e impatto su una scala semplice." },
      { t: "For each risk you choose a treatment: ⟦reduce⟧, ⟦transfer⟧, ⟦avoid⟧ or ⟦accept⟧ it.", it: "Per ogni rischio si sceglie un trattamento: ridurlo, trasferirlo, evitarlo o accettarlo." },
      { t: "By function, ⟦controls⟧ are preventive, detective or corrective.", it: "Per funzione, i controlli sono preventivi, di rilevamento o correttivi." },
      { t: "By nature, controls are technical, organisational or physical.", it: "Per natura, i controlli sono tecnici, organizzativi o fisici." },
      { t: "⟦Inherent risk⟧ exists before controls, ⟦residual risk⟧ remains after them, and a ⟦risk register⟧ records the decisions.", it: "Il rischio inerente esiste prima dei controlli, quello residuo resta dopo; il registro dei rischi annota le decisioni." }
    ],
    gloss: [
      { w: "risk management", it: "gestione del rischio" },
      { w: "Risk", it: "rischio" },
      { w: "likelihood", it: "probabilità" },
      { w: "risk matrix", it: "matrice dei rischi" },
      { w: "reduce", it: "ridurre il rischio" },
      { w: "transfer", it: "trasferire (es. assicurazione)" },
      { w: "avoid", it: "evitare l’attività rischiosa" },
      { w: "accept", it: "accettare il rischio" },
      { w: "controls", it: "misure che trattano il rischio" },
      { w: "Inherent risk", it: "rischio prima dei controlli" },
      { w: "residual risk", it: "rischio rimasto dopo i controlli" },
      { w: "risk register", it: "registro dei rischi" }
    ]
  });
  A("cyb-autenticazione-e-password", {
    title: { t: "Authentication, passwords and MFA", it: "Autenticazione, password e MFA" },
    sum: [
      { t: "⟦Identification⟧ says who you claim to be, ⟦authentication⟧ proves it, and ⟦authorisation⟧ decides what you may do.", it: "L’identificazione dice chi dichiari di essere, l’autenticazione lo prova, l’autorizzazione decide cosa puoi fare." },
      { t: "⟦Entropy⟧ measures how unpredictable a password is, in bits, and length matters more than clever symbols.", it: "L’entropia misura quanto una password è imprevedibile, in bit, e la lunghezza conta più dei simboli astuti." },
      { t: "Attackers use common-password lists, dictionary words and personal data, so complexity rules alone are not enough.", it: "Gli attaccanti usano elenchi di password comuni, parole di dizionario e dati personali, quindi le sole regole di complessità non bastano." },
      { t: "A well-built system stores a ⟦hash⟧ of the password with a ⟦salt⟧, never the password itself.", it: "Un sistema ben fatto memorizza l’hash della password con un sale, mai la password stessa." },
      { t: "⟦MFA⟧ combines factors from different categories, but not all MFA is equally strong; ⟦passkeys⟧ resist phishing.", it: "La MFA unisce fattori di categorie diverse, ma non tutte hanno la stessa forza; le passkey resistono al phishing." },
      { t: "A ⟦password manager⟧ lets you use a long, unique password for every service.", it: "Un gestore di password permette di usare una password lunga e unica per ogni servizio." },
      { t: "⟦Credential stuffing⟧ reuses stolen passwords, ⟦password spraying⟧ tries few passwords on many accounts, and rate limits help defend.", it: "Il credential stuffing riusa password rubate, il password spraying prova poche password su molti account; i limiti ai tentativi aiutano." }
    ],
    gloss: [
      { w: "Identification", it: "identificazione" },
      { w: "authentication", it: "autenticazione" },
      { w: "authorisation", it: "autorizzazione" },
      { w: "Entropy", it: "entropia, imprevedibilità in bit" },
      { w: "hash", it: "impronta a senso unico" },
      { w: "salt", it: "sale, valore casuale aggiunto all’hash" },
      { w: "MFA", it: "autenticazione a più fattori" },
      { w: "passkeys", it: "chiavi d’accesso resistenti al phishing" },
      { w: "password manager", it: "gestore di password" },
      { w: "Credential stuffing", it: "prova automatica di credenziali rubate" },
      { w: "password spraying", it: "poche password su molti account" },
      { w: "rate limit", it: "limite ai tentativi" }
    ]
  });
  A("cyb-ingegneria-sociale-e-phishing", {
    title: { t: "Social engineering and phishing", it: "Ingegneria sociale e phishing" },
    sum: [
      { t: "⟦Social engineering⟧ manipulates people instead of systems, because persuading an employee is often cheaper than breaking a protected system.", it: "L’ingegneria sociale manipola le persone anziché i sistemi, perché convincere un dipendente costa spesso meno che forzare un sistema protetto." },
      { t: "⟦Phishing⟧ is a fraudulent message posing as a trusted sender; variants include ⟦spear phishing⟧, ⟦vishing⟧ and ⟦smishing⟧.", it: "Il phishing è un messaggio fraudolento che finge un mittente fidato; le varianti includono spear phishing, vishing e smishing." },
      { t: "⟦Pretexting⟧ builds a believable story, and attackers exploit psychological levers such as urgency and authority.", it: "Il pretexting costruisce una storia credibile e gli attaccanti sfruttano leve psicologiche come urgenza e autorità." },
      { t: "Check the sender, links and attachments carefully, without clicking.", it: "Controlla con attenzione mittente, link e allegati, senza cliccare." },
      { t: "If a message looks suspicious, do not act on it and report it through the proper channel.", it: "Se un messaggio sembra sospetto, non agire e segnalalo tramite il canale previsto." },
      { t: "Organisations add layers, such as ⟦BEC⟧ verification procedures and technical filters, because individual attention alone is fragile.", it: "Le organizzazioni aggiungono livelli, come procedure di verifica contro la BEC e filtri tecnici, perché l’attenzione dei singoli è fragile." },
      { t: "Phishing ⟦simulations⟧ train staff, but they must follow ethical rules or they cause harm.", it: "Le simulazioni di phishing addestrano il personale, ma servono regole etiche, altrimenti fanno danni." }
    ],
    gloss: [
      { w: "Social engineering", it: "ingegneria sociale" },
      { w: "Phishing", it: "messaggio fraudolento per rubare dati" },
      { w: "spear phishing", it: "phishing mirato" },
      { w: "vishing", it: "phishing via telefono" },
      { w: "smishing", it: "phishing via SMS" },
      { w: "Pretexting", it: "pretesto, storia inventata" },
      { w: "BEC", it: "frode via email aziendale (business email compromise)" },
      { w: "simulations", it: "simulazioni" },
      { w: "urgency", it: "urgenza" },
      { w: "sender", it: "mittente" },
      { w: "attachment", it: "allegato" },
      { w: "whaling", it: "phishing verso dirigenti" }
    ]
  });
  A("cyb-malware-concetti", {
    title: { t: "Malware: types, infection cycle and defences", it: "Malware: tipi, ciclo di infezione e difese" },
    sum: [
      { t: "⟦Malware⟧ is software designed to harm, spy or gain unauthorised access, classified by how it spreads and what it does.", it: "Il malware è software progettato per danneggiare, spiare o ottenere accessi non autorizzati, classificato per diffusione e azione." },
      { t: "A ⟦virus⟧, a ⟦worm⟧ and a ⟦trojan⟧ differ mainly in their spreading mechanism.", it: "Virus, worm e trojan si distinguono soprattutto per il meccanismo di diffusione." },
      { t: "⟦Ransomware⟧, ⟦spyware⟧ and ⟦rootkits⟧ are defined by what they do.", it: "Ransomware, spyware e rootkit sono definiti da ciò che fanno." },
      { t: "A ⟦botnet⟧ is a network of infected devices controlled remotely through ⟦command and control⟧ infrastructure.", it: "Una botnet è una rete di dispositivi infetti controllati a distanza tramite un’infrastruttura di comando e controllo." },
      { t: "An infection follows general phases, described here only at a conceptual and defensive level.", it: "Un’infezione segue fasi generali, descritte qui solo a livello concettuale e difensivo." },
      { t: "⟦Persistence⟧ keeps malware running after a restart, but it also leaves traces that defenders can look for.", it: "La persistenza mantiene il malware attivo dopo il riavvio, ma lascia tracce che i difensori possono cercare." },
      { t: "Defences work in layers: updates, least privilege, user awareness and the ⟦3-2-1 backup⟧ rule.", it: "Le difese lavorano a strati: aggiornamenti, privilegio minimo, consapevolezza degli utenti e regola di backup 3-2-1." }
    ],
    gloss: [
      { w: "Malware", it: "software malevolo" },
      { w: "virus", it: "si diffonde infettando file" },
      { w: "worm", it: "si diffonde da solo in rete" },
      { w: "trojan", it: "finto software utile" },
      { w: "Ransomware", it: "blocca i dati e chiede un riscatto" },
      { w: "spyware", it: "spia l’utente" },
      { w: "rootkits", it: "nasconde la presenza del malware" },
      { w: "botnet", it: "rete di dispositivi infetti" },
      { w: "command and control", it: "comando e controllo (C2)" },
      { w: "Persistence", it: "persistenza dopo il riavvio" },
      { w: "3-2-1 backup", it: "regola di backup 3-2-1" },
      { w: "infection", it: "infezione" }
    ]
  });
  A("cyb-etica-legge-e-autorizzazione", {
    title: { t: "Ethics, law and authorisation", it: "Etica, legge e autorizzazione" },
    sum: [
      { t: "What separates a security professional from a criminal is ⟦authorisation⟧, not technique, and the ⟦scope⟧ sets the limits.", it: "Ciò che separa un professionista da un criminale è l’autorizzazione, non la tecnica, e il perimetro ne fissa i limiti." },
      { t: "Almost every legal system punishes ⟦unauthorised access⟧, even when you only look and cause no damage.", it: "Quasi ogni ordinamento punisce l’accesso non autorizzato, anche se ti limiti a guardare senza causare danni." },
      { t: "With ⟦responsible disclosure⟧, a finder reports a ⟦vulnerability⟧ to the owner and allows time to fix it.", it: "Con la divulgazione responsabile, chi scopre una vulnerabilità la segnala al titolare e lascia il tempo per correggerla." },
      { t: "⟦Bug bounty⟧ programmes and disclosure policies invite researchers to look for flaws under published rules.", it: "I programmi bug bounty e le politiche di disclosure invitano i ricercatori a cercare falle con regole pubblicate." },
      { t: "Authorised tests follow a formal agreement with ⟦rules of engagement⟧ that define what is allowed.", it: "I test autorizzati seguono un accordo formale con regole d’ingaggio che definiscono ciò che è consentito." },
      { t: "Professional ⟦codes of ethics⟧ guide conduct, for example on honesty and protecting people.", it: "I codici etici professionali guidano la condotta, per esempio su onestà e tutela delle persone." },
      { t: "Practise only in your own lab or in environments built for learning, never on other people’s systems.", it: "Esercitati solo nel tuo laboratorio o in ambienti pensati per imparare, mai sui sistemi altrui." }
    ],
    gloss: [
      { w: "authorisation", it: "autorizzazione esplicita" },
      { w: "scope", it: "perimetro consentito" },
      { w: "unauthorised access", it: "accesso non autorizzato" },
      { w: "responsible disclosure", it: "divulgazione responsabile" },
      { w: "vulnerability", it: "vulnerabilità" },
      { w: "Bug bounty", it: "programma di ricompense per segnalazioni" },
      { w: "rules of engagement", it: "regole d’ingaggio" },
      { w: "codes of ethics", it: "codici etici" },
      { w: "coordinated disclosure", it: "divulgazione coordinata" },
      { w: "penetration test", it: "test di penetrazione autorizzato" },
      { w: "lab", it: "laboratorio" },
      { w: "permission", it: "permesso" }
    ]
  });
  A("cyb-modelli-osi-e-tcpip", {
    title: { t: "OSI and TCP/IP models: layers, PDUs, ports and services", it: "Modelli OSI e TCP/IP: livelli, PDU, porte e servizi" },
    sum: [
      { t: "⟦Layered models⟧ split a complex network into layers with a precise task each, which helps both design and defence.", it: "I modelli a strati dividono una rete complessa in livelli con un compito preciso, utile per progettare e difendere." },
      { t: "The ⟦OSI model⟧ has seven layers, from physical up to application.", it: "Il modello OSI ha sette livelli, dal fisico all’applicazione." },
      { t: "The ⟦TCP/IP model⟧ has four layers and maps onto the OSI layers.", it: "Il modello TCP/IP ha quattro livelli e corrisponde a quelli OSI." },
      { t: "With ⟦encapsulation⟧, each layer adds its own header to the data, producing a ⟦PDU⟧ with a different name at each level.", it: "Con l’incapsulamento ogni livello aggiunge la propria intestazione, producendo una PDU con nome diverso a ogni livello." },
      { t: "A communication uses three identifiers: the ⟦MAC address⟧, the ⟦IP address⟧ and the ⟦port⟧.", it: "Una comunicazione usa tre identificatori: indirizzo MAC, indirizzo IP e porta." },
      { t: "Knowing common ports and services helps you read a log, a firewall rule or a scan.", it: "Conoscere porte e servizi comuni aiuta a leggere un log, una regola di firewall o una scansione." },
      { t: "Each layer has typical threats and matching countermeasures.", it: "Ogni livello ha minacce tipiche e contromisure corrispondenti." }
    ],
    gloss: [
      { w: "Layered models", it: "modelli a strati" },
      { w: "OSI model", it: "modello OSI a sette livelli" },
      { w: "TCP/IP model", it: "modello TCP/IP a quattro livelli" },
      { w: "encapsulation", it: "incapsulamento" },
      { w: "header", it: "intestazione" },
      { w: "PDU", it: "unità di dati di protocollo" },
      { w: "MAC address", it: "indirizzo fisico della scheda di rete" },
      { w: "IP address", it: "indirizzo di rete logico" },
      { w: "port", it: "porta, identifica il servizio" },
      { w: "segment", it: "PDU del livello trasporto" },
      { w: "packet", it: "pacchetto, PDU del livello rete" },
      { w: "frame", it: "PDU del collegamento dati" }
    ]
  });
  A("cyb-indirizzamento-e-subnetting", {
    title: { t: "IP addressing, subnetting, NAT and IPv6", it: "Indirizzamento IP, subnetting, NAT e IPv6" },
    sum: [
      { t: "An ⟦IPv4⟧ address is a 32-bit number written as four decimal octets.", it: "Un indirizzo IPv4 è un numero a 32 bit scritto come quattro ottetti decimali." },
      { t: "With ⟦CIDR⟧, the ⟦prefix length⟧ after the slash says how many bits identify the network.", it: "Con il CIDR, la lunghezza del prefisso dopo la barra indica quanti bit identificano la rete." },
      { t: "The block method finds the ⟦network address⟧ and the ⟦broadcast address⟧ quickly from the block size.", it: "Il metodo del blocco trova rapidamente indirizzo di rete e di broadcast dalla dimensione del blocco." },
      { t: "Worked examples show how to find the range of usable ⟦hosts⟧ in a subnet.", it: "Gli esempi svolti mostrano come trovare l’intervallo di host utilizzabili in una sottorete." },
      { t: "⟦Private addresses⟧ (RFC 1918) are not routed on the Internet and can be reused by every organisation.", it: "Gli indirizzi privati (RFC 1918) non sono instradati su Internet e ogni organizzazione può riusarli." },
      { t: "⟦NAT⟧ lets many private devices share a few public addresses, and PAT also uses ports to tell them apart.", it: "Il NAT permette a molti dispositivi privati di condividere pochi indirizzi pubblici; il PAT usa anche le porte per distinguerli." },
      { t: "⟦IPv6⟧ uses 128-bit addresses written in hexadecimal groups, which removes address scarcity.", it: "IPv6 usa indirizzi a 128 bit scritti in gruppi esadecimali, eliminando la scarsità di indirizzi." }
    ],
    gloss: [
      { w: "IPv4", it: "protocollo IP versione 4" },
      { w: "IPv6", it: "protocollo IP versione 6" },
      { w: "CIDR", it: "notazione indirizzo/prefisso" },
      { w: "prefix length", it: "lunghezza del prefisso" },
      { w: "subnet mask", it: "maschera di sottorete" },
      { w: "network address", it: "indirizzo di rete" },
      { w: "broadcast address", it: "indirizzo di broadcast" },
      { w: "hosts", it: "dispositivo in rete" },
      { w: "Private addresses", it: "indirizzi privati" },
      { w: "NAT", it: "traduzione degli indirizzi di rete" },
      { w: "PAT", it: "NAT con traduzione delle porte" },
      { w: "octet", it: "ottetto, gruppo di 8 bit" }
    ]
  });
  A("cyb-dns-dhcp-arp", {
    title: { t: "DNS, DHCP and ARP: core services and their defences", it: "DNS, DHCP e ARP: servizi di base e loro difese" },
    sum: [
      { t: "⟦DNS⟧ translates readable names into IP addresses using a distributed, hierarchical database.", it: "Il DNS traduce nomi leggibili in indirizzi IP usando un database distribuito e gerarchico." },
      { t: "A domain holds different ⟦DNS records⟧, such as A, AAAA, CNAME and MX.", it: "Un dominio contiene diversi record DNS, come A, AAAA, CNAME e MX." },
      { t: "A forged DNS answer sends victims to the wrong site, so defences include ⟦DNSSEC⟧ and encrypted DNS (DoT, DoH).", it: "Una risposta DNS falsa porta le vittime sul sito sbagliato; tra le difese ci sono DNSSEC e DNS cifrato (DoT, DoH)." },
      { t: "⟦DHCP⟧ gives a new device its address, mask, gateway and DNS server through four messages.", it: "Il DHCP assegna a un nuovo dispositivo indirizzo, maschera, gateway e server DNS con quattro messaggi." },
      { t: "A ⟦rogue DHCP server⟧ answers without authorisation and can misdirect clients.", it: "Un server DHCP non autorizzato risponde senza permesso e può dirottare i client." },
      { t: "⟦ARP⟧ maps IP addresses to MAC addresses on a LAN, and it trusts whatever answers it receives.", it: "L’ARP associa indirizzi IP a indirizzi MAC su una LAN e si fida di qualsiasi risposta riceva." },
      { t: "Layer-2 defences on the switch, such as ⟦DHCP snooping⟧ and ⟦dynamic ARP inspection⟧, limit these abuses.", it: "Le difese di livello 2 sullo switch, come DHCP snooping e dynamic ARP inspection, limitano questi abusi." }
    ],
    gloss: [
      { w: "DNS", it: "sistema dei nomi di dominio" },
      { w: "DNS records", it: "record DNS" },
      { w: "DNSSEC", it: "firme per autenticare le risposte DNS" },
      { w: "DoT", it: "DNS su TLS" },
      { w: "DoH", it: "DNS su HTTPS" },
      { w: "DHCP", it: "assegnazione automatica della configurazione IP" },
      { w: "rogue DHCP server", it: "server DHCP non autorizzato" },
      { w: "ARP", it: "associa IP e MAC sulla LAN" },
      { w: "ARP spoofing", it: "falsificazione delle risposte ARP" },
      { w: "DHCP snooping", it: "controllo DHCP sullo switch" },
      { w: "dynamic ARP inspection", it: "verifica ARP sullo switch" },
      { w: "resolver", it: "risolutore DNS" }
    ]
  });
  A("cyb-tls-e-https", {
    title: { t: "TLS and HTTPS: handshake, certificates and HSTS", it: "TLS e HTTPS: handshake, certificati e HSTS" },
    sum: [
      { t: "⟦TLS⟧ protects a TCP connection, and ⟦HTTPS⟧ is HTTP over TLS, normally on port 443.", it: "TLS protegge una connessione TCP e HTTPS è HTTP sopra TLS, di norma sulla porta 443." },
      { t: "Before exchanging data, client and server agree on keys during the ⟦handshake⟧.", it: "Prima di scambiare dati, client e server concordano le chiavi durante l’handshake." },
      { t: "A ⟦certificate⟧ ties a domain to a public key and is signed by a ⟦certification authority⟧, forming a chain of trust.", it: "Un certificato lega un dominio a una chiave pubblica ed è firmato da una autorità di certificazione, formando una catena di fiducia." },
      { t: "The ⟦SNI⟧ extension tells the server which site the client wants, so the name is visible in the handshake.", it: "L’estensione SNI indica al server quale sito il client vuole, quindi il nome è visibile nell’handshake." },
      { t: "TLS 1.0 and 1.1 are deprecated, TLS 1.2 is acceptable if well configured, and ⟦TLS 1.3⟧ is recommended.", it: "TLS 1.0 e 1.1 sono deprecati, TLS 1.2 è accettabile se ben configurato e TLS 1.3 è consigliato." },
      { t: "⟦HSTS⟧ forces browsers to use HTTPS and helps against ⟦downgrade attacks⟧.", it: "L’HSTS obbliga i browser a usare HTTPS e aiuta contro gli attacchi di downgrade." },
      { t: "A certificate warning is a signal to read, not to click away.", it: "Un avviso di certificato è un segnale da leggere, non da ignorare." }
    ],
    gloss: [
      { w: "TLS", it: "protocollo di cifratura del trasporto" },
      { w: "HTTPS", it: "HTTP sopra TLS" },
      { w: "handshake", it: "negoziazione iniziale delle chiavi" },
      { w: "certificate", it: "certificato digitale" },
      { w: "certification authority", it: "autorità di certificazione (CA)" },
      { w: "SNI", it: "indica il nome del sito nell’handshake" },
      { w: "TLS 1.3", it: "versione consigliata di TLS" },
      { w: "HSTS", it: "obbliga all’uso di HTTPS" },
      { w: "downgrade attacks", it: "attacchi che forzano una versione più debole" },
      { w: "chain of trust", it: "catena di fiducia" },
      { w: "public key", it: "chiave pubblica" },
      { w: "expired certificate", it: "certificato scaduto" }
    ]
  });
  A("cyb-firewall-ids-segmentazione", {
    title: { t: "Firewalls, IDS/IPS, segmentation and VPN", it: "Firewall, IDS/IPS, segmentazione e VPN" },
    sum: [
      { t: "A ⟦firewall⟧ applies rules to traffic between networks of different trust, and can be ⟦stateless⟧ or ⟦stateful⟧.", it: "Un firewall applica regole al traffico tra reti con diversa fiducia e può essere stateless o stateful." },
      { t: "Rules are checked from top to bottom, the first match wins, and an ⟦implicit deny⟧ blocks everything else.", it: "Le regole sono valutate dall’alto verso il basso, vince la prima corrispondenza e un deny implicito blocca il resto." },
      { t: "A ⟦DMZ⟧ holds services reachable from the Internet, so a compromise does not land directly in the internal network.", it: "Una DMZ ospita i servizi raggiungibili da Internet, così una compromissione non arriva subito nella rete interna." },
      { t: "A ⟦VLAN⟧ creates separate logical networks on the same physical switch.", it: "Una VLAN crea reti logiche separate sullo stesso switch fisico." },
      { t: "An ⟦IDS⟧ observes and alerts, while an ⟦IPS⟧ sits in line and can block traffic.", it: "Un IDS osserva e segnala, mentre un IPS è in linea e può bloccare il traffico." },
      { t: "⟦NAC⟧ decides which users and devices may connect, and a ⟦VPN⟧ protects remote access.", it: "Il NAC decide quali utenti e dispositivi possono collegarsi e una VPN protegge l’accesso remoto." },
      { t: "The classic perimeter model fails when an attacker gets in once, which leads to ⟦zero trust⟧.", it: "Il modello perimetrale classico fallisce se un attaccante entra una volta, e porta allo zero trust." }
    ],
    gloss: [
      { w: "firewall", it: "filtra il traffico tra reti" },
      { w: "stateless", it: "senza memoria delle connessioni" },
      { w: "stateful", it: "tiene traccia delle connessioni" },
      { w: "implicit deny", it: "blocco implicito di ciò che non è ammesso" },
      { w: "ACL", it: "elenco di controllo accessi" },
      { w: "DMZ", it: "zona demilitarizzata" },
      { w: "VLAN", it: "rete locale virtuale" },
      { w: "IDS", it: "sistema di rilevamento intrusioni" },
      { w: "IPS", it: "sistema di prevenzione intrusioni" },
      { w: "NAC", it: "controllo dell’accesso alla rete" },
      { w: "VPN", it: "rete privata virtuale" },
      { w: "zero trust", it: "nessuna fiducia implicita" }
    ]
  });
  A("cyb-attacchi-di-rete-e-difese", {
    title: { t: "Network attacks and defences", it: "Attacchi di rete e difese" },
    sum: [
      { t: "Network attacks are easier to understand when linked to the ⟦CIA triad⟧: they hit confidentiality, integrity or availability.", it: "Gli attacchi di rete si capiscono meglio collegandoli alla triade CIA: colpiscono riservatezza, integrità o disponibilità." },
      { t: "In a ⟦man-in-the-middle⟧ attack, the attacker sits between two parties and can read or alter messages.", it: "In un attacco man-in-the-middle l’aggressore si pone tra due parti e può leggere o modificare i messaggi." },
      { t: "A ⟦DoS⟧ attack exhausts a resource, and a ⟦DDoS⟧ comes from many systems, often a botnet.", it: "Un attacco DoS esaurisce una risorsa e un DDoS arriva da molti sistemi, spesso una botnet." },
      { t: "⟦Spoofing⟧ forges an identity or origin, while ⟦sniffing⟧ captures traffic.", it: "Lo spoofing falsifica un’identità o un’origine, lo sniffing cattura il traffico." },
      { t: "A ⟦port scan⟧ shows which services listen; defenders use it to verify and can also detect it.", it: "Una scansione delle porte mostra quali servizi sono in ascolto; i difensori la usano per verificare e possono rilevarla." },
      { t: "On Wi-Fi, ⟦WPA3⟧ and ⟦WPA2⟧ encryption are essential because anyone in range receives the frames.", it: "Sul Wi-Fi la cifratura WPA3 e WPA2 è indispensabile perché chiunque sia in portata riceve i frame." },
      { t: "An ⟦evil twin⟧ imitates a legitimate network, while a ⟦rogue AP⟧ is an unauthorised access point.", it: "Un evil twin imita una rete legittima, mentre un rogue AP è un access point non autorizzato." }
    ],
    gloss: [
      { w: "CIA triad", it: "triade riservatezza, integrità, disponibilità" },
      { w: "man-in-the-middle", it: "attacco con intermediario" },
      { w: "DoS", it: "negazione del servizio" },
      { w: "DDoS", it: "DoS distribuito" },
      { w: "Spoofing", it: "falsificazione di identità o origine" },
      { w: "sniffing", it: "cattura del traffico" },
      { w: "port scan", it: "scansione delle porte" },
      { w: "WPA2", it: "standard di sicurezza Wi-Fi" },
      { w: "WPA3", it: "standard Wi-Fi più recente" },
      { w: "evil twin", it: "rete Wi-Fi gemella falsa" },
      { w: "rogue AP", it: "access point non autorizzato" },
      { w: "botnet", it: "rete di dispositivi infetti" }
    ]
  });
  A("cyb-linux-sicurezza", {
    title: { t: "Linux security: users, permissions, SSH and logs", it: "Sicurezza di Linux: utenti, permessi, SSH e log" },
    sum: [
      { t: "Every file and process belongs to a user and a group, and the kernel looks at numbers: ⟦UID⟧ and ⟦GID⟧.", it: "Ogni file e processo appartiene a un utente e a un gruppo, e il kernel guarda i numeri: UID e GID." },
      { t: "Each file has three sets of ⟦permissions⟧ for owner, group and others: read, write and execute.", it: "Ogni file ha tre terne di permessi per proprietario, gruppo e altri: lettura, scrittura ed esecuzione." },
      { t: "⟦chmod⟧ changes permissions in octal or symbolic form, and ⟦umask⟧ removes bits from the defaults of new files.", it: "chmod cambia i permessi in forma ottale o simbolica e umask toglie bit ai valori predefiniti dei nuovi file." },
      { t: "The special bits ⟦SUID⟧, SGID and sticky need care because they change who runs a program or deletes a file.", it: "I bit speciali SUID, SGID e sticky richiedono attenzione perché cambiano chi esegue un programma o cancella un file." },
      { t: "⟦sudo⟧ gives specific commands with another user’s privileges and records who did what, supporting least privilege.", it: "sudo concede comandi specifici con i privilegi di un altro utente e registra chi ha fatto cosa, a favore del privilegio minimo." },
      { t: "Harden ⟦SSH⟧ first, for example with key-based login, because it is the administrative entrance.", it: "Rinforza prima SSH, per esempio con l’accesso a chiavi, perché è l’ingresso amministrativo." },
      { t: "Traces of logins and changes are found in the system ⟦logs⟧.", it: "Le tracce di accessi e modifiche si trovano nei log di sistema." }
    ],
    gloss: [
      { w: "UID", it: "identificatore numerico dell’utente" },
      { w: "GID", it: "identificatore numerico del gruppo" },
      { w: "permissions", it: "permessi" },
      { w: "chmod", it: "comando per cambiare i permessi" },
      { w: "umask", it: "permessi tolti ai nuovi file" },
      { w: "SUID", it: "esegue con i privilegi del proprietario" },
      { w: "sudo", it: "esegue comandi con privilegi di un altro utente" },
      { w: "SSH", it: "accesso remoto cifrato" },
      { w: "logs", it: "registri di sistema" },
      { w: "least privilege", it: "privilegio minimo" },
      { w: "octal", it: "ottale" },
      { w: "root", it: "amministratore di sistema" }
    ]
  });
  A("cyb-windows-sicurezza", {
    title: { t: "Windows security: accounts, ACLs, events and encryption", it: "Sicurezza di Windows: account, ACL, eventi e cifratura" },
    sum: [
      { t: "Windows distinguishes local accounts from domain accounts, and ⟦UAC⟧ asks for confirmation before elevating privileges.", it: "Windows distingue account locali e di dominio, e l’UAC chiede conferma prima di elevare i privilegi." },
      { t: "On NTFS, each file has an ⟦ACL⟧ made of entries that allow or deny access.", it: "Su NTFS ogni file ha una ACL composta da voci che consentono o negano l’accesso." },
      { t: "The ⟦local security policy⟧ collects settings that define how a single computer behaves.", it: "Il criterio di sicurezza locale raccoglie le impostazioni che definiscono il comportamento di un singolo computer." },
      { t: "The ⟦Security log⟧ is the main source for detecting abuse, and some ⟦Event IDs⟧ are monitored more than others.", it: "Il registro Sicurezza è la fonte principale per rilevare abusi, e alcuni Event ID sono monitorati più di altri." },
      { t: "⟦BitLocker⟧ encrypts whole volumes, and ⟦Defender⟧ provides built-in protection against malware.", it: "BitLocker cifra interi volumi e Defender offre protezione integrata contro il malware." },
      { t: "⟦Group Policy⟧ applies security settings centrally, and ⟦LAPS⟧ gives each computer a unique local administrator password.", it: "Le Group Policy applicano le impostazioni di sicurezza in modo centrale e LAPS dà a ogni computer una password di amministratore locale unica." },
      { t: "A hardening checklist summarises the defences in order of priority.", it: "Una checklist di hardening riassume le difese in ordine di priorità." }
    ],
    gloss: [
      { w: "UAC", it: "controllo dell’account utente" },
      { w: "ACL", it: "elenco di controllo accessi" },
      { w: "local security policy", it: "criterio di sicurezza locale" },
      { w: "Security log", it: "registro Sicurezza" },
      { w: "Event IDs", it: "codici degli eventi di Windows" },
      { w: "BitLocker", it: "cifratura dei volumi" },
      { w: "Defender", it: "antimalware integrato" },
      { w: "Group Policy", it: "criteri di gruppo" },
      { w: "LAPS", it: "password locale di amministratore unica per PC" },
      { w: "NTFS", it: "file system di Windows" },
      { w: "domain account", it: "account di dominio" },
      { w: "TPM", it: "chip di sicurezza della scheda madre" }
    ]
  });
  A("cyb-active-directory-concetti", {
    title: { t: "Active Directory: concepts and defences", it: "Active Directory: concetti e difese" },
    sum: [
      { t: "⟦Active Directory⟧ is Microsoft’s directory service, a central store of users, computers and groups managed by ⟦domain controllers⟧.", it: "Active Directory è il servizio di directory di Microsoft, un archivio centrale di utenti, computer e gruppi gestito dai controller di dominio." },
      { t: "A good structure of users, groups and ⟦OUs⟧ makes security manageable.", it: "Una buona struttura di utenti, gruppi e OU rende la sicurezza gestibile." },
      { t: "⟦Kerberos⟧ is the default protocol in a domain and uses tickets, so the password is not sent over the network.", it: "Kerberos è il protocollo predefinito in un dominio e usa ticket, quindi la password non viaggia in rete." },
      { t: "⟦NTLM⟧ is an older challenge-response protocol that is being phased out.", it: "NTLM è un protocollo più vecchio a sfida-risposta che si sta dismettendo." },
      { t: "AD is a prime target because it concentrates trust and privileges, so compromising it opens almost every system.", it: "AD è un bersaglio primario perché concentra fiducia e privilegi: compromettere il dominio apre quasi ogni sistema." },
      { t: "A ⟦tiered administration model⟧ separates credentials so that one compromise does not climb to a higher level.", it: "Un modello di amministrazione a livelli separa le credenziali, così una compromissione non sale al livello superiore." },
      { t: "Defending AD means reducing privileges and ⟦monitoring⟧ what happens.", it: "Difendere AD significa ridurre i privilegi e monitorare ciò che accade." }
    ],
    gloss: [
      { w: "Active Directory", it: "servizio di directory Microsoft" },
      { w: "domain controllers", it: "server che gestiscono il dominio" },
      { w: "OUs", it: "unità organizzative" },
      { w: "Kerberos", it: "autenticazione basata su ticket" },
      { w: "NTLM", it: "protocollo a sfida-risposta, obsoleto" },
      { w: "tiered administration model", it: "amministrazione a livelli" },
      { w: "monitoring", it: "monitoraggio" },
      { w: "domain", it: "dominio" },
      { w: "ticket", it: "ticket di autenticazione" },
      { w: "privileged accounts", it: "account privilegiati" },
      { w: "group", it: "gruppo" },
      { w: "directory service", it: "servizio di directory" }
    ]
  });
  A("cyb-hardening-e-patch-management", {
    title: { t: "Hardening and patch management", it: "Hardening e patch management" },
    sum: [
      { t: "⟦Hardening⟧ reduces a system’s vulnerability by removing what is not needed and configuring the rest well.", it: "L’hardening riduce la vulnerabilità di un sistema togliendo ciò che non serve e configurando bene il resto." },
      { t: "A ⟦baseline⟧ is the reference secure configuration, and ⟦CIS Benchmarks⟧ are a well-known source.", it: "Una baseline è la configurazione sicura di riferimento e i CIS Benchmark ne sono una fonte nota." },
      { t: "Reducing the ⟦attack surface⟧ means closing ports, services and accounts you do not use.", it: "Ridurre la superficie di attacco significa chiudere porte, servizi e account che non usi." },
      { t: "A ⟦patch⟧ fixes a known vulnerability, and patching cadence and priority should follow risk.", it: "Una patch corregge una vulnerabilità nota, e cadenza e priorità delle patch devono seguire il rischio." },
      { t: "⟦Configuration drift⟧ is the gradual deviation from the intended setup, so an ⟦inventory⟧ is essential.", it: "Il configuration drift è lo scostamento progressivo dalla configurazione prevista, quindi l’inventario è essenziale." },
      { t: "A ⟦vulnerability scan⟧ and a ⟦penetration test⟧ are different and complementary activities.", it: "Una scansione delle vulnerabilità e un penetration test sono attività diverse e complementari." },
      { t: "⟦Change management⟧ brings order to modifications and closes the cycle.", it: "Il change management dà ordine alle modifiche e chiude il ciclo." }
    ],
    gloss: [
      { w: "Hardening", it: "rafforzamento della configurazione" },
      { w: "baseline", it: "configurazione di riferimento" },
      { w: "CIS Benchmarks", it: "guide di configurazione sicura" },
      { w: "attack surface", it: "superficie di attacco" },
      { w: "patch", it: "correzione software" },
      { w: "Configuration drift", it: "deriva della configurazione" },
      { w: "inventory", it: "inventario dei sistemi" },
      { w: "vulnerability scan", it: "scansione delle vulnerabilità" },
      { w: "penetration test", it: "test di penetrazione" },
      { w: "Change management", it: "gestione delle modifiche" },
      { w: "patch management", it: "gestione delle patch" },
      { w: "risk-based", it: "basato sul rischio" }
    ]
  });
  A("cyb-container-e-virtualizzazione", {
    title: { t: "Container and virtualisation security", it: "Sicurezza di container e virtualizzazione" },
    sum: [
      { t: "A ⟦virtual machine⟧ has its own kernel and is separated by a ⟦hypervisor⟧, while ⟦containers⟧ share the host kernel.", it: "Una macchina virtuale ha un proprio kernel ed è separata da un hypervisor, mentre i container condividono il kernel dell’host." },
      { t: "A container comes from an ⟦image⟧, so a compromised or outdated image affects every container built from it.", it: "Un container nasce da un’immagine, quindi un’immagine compromessa o obsoleta colpisce ogni container derivato." },
      { t: "Run containers with ⟦least privilege⟧: the process should be able to do as little as possible.", it: "Esegui i container con privilegio minimo: il processo deve poter fare il meno possibile." },
      { t: "⟦Rootless⟧ containers run the engine without root privileges, strengthening isolation.", it: "I container rootless eseguono il motore senza privilegi di root, rafforzando l’isolamento." },
      { t: "Handle ⟦secrets⟧ properly: never write them in a Dockerfile, in code or in an image.", it: "Gestisci bene i segreti: non scriverli mai in un Dockerfile, nel codice o in un’immagine." },
      { t: "Without network ⟦segmentation⟧, a compromised service can move sideways to others.", it: "Senza segmentazione di rete, un servizio compromesso può muoversi lateralmente verso altri." },
      { t: "Common ⟦misconfigurations⟧ can be detected with scanning and review.", it: "Le errate configurazioni comuni si possono rilevare con scansione e revisione." }
    ],
    gloss: [
      { w: "virtual machine", it: "macchina virtuale" },
      { w: "hypervisor", it: "software che separa le VM dall’hardware" },
      { w: "containers", it: "processi isolati che condividono il kernel" },
      { w: "image", it: "immagine, modello di un container" },
      { w: "least privilege", it: "privilegio minimo" },
      { w: "Rootless", it: "senza privilegi di root" },
      { w: "secrets", it: "password, token e chiavi" },
      { w: "segmentation", it: "segmentazione" },
      { w: "misconfigurations", it: "errate configurazioni" },
      { w: "supply chain", it: "catena di fornitura" },
      { w: "pod", it: "gruppo di container in Kubernetes" },
      { w: "Dockerfile", it: "file che descrive la build" }
    ]
  });
  A("cyb-backup-e-ripristino", {
    title: { t: "Backup and recovery: from the 3-2-1 rule to ransomware", it: "Backup e ripristino: dalla regola 3-2-1 al ransomware" },
    sum: [
      { t: "⟦Backup⟧ is a security measure because it protects the availability and integrity of data.", it: "Il backup è una misura di sicurezza perché protegge disponibilità e integrità dei dati." },
      { t: "The ⟦3-2-1 rule⟧ asks for several copies on different media, with one kept elsewhere; 3-2-1-1-0 adds more safeguards.", it: "La regola 3-2-1 chiede più copie su supporti diversi, una tenuta altrove; la 3-2-1-1-0 aggiunge altre garanzie." },
      { t: "⟦Full⟧, ⟦incremental⟧ and differential backups trade space against restore time.", it: "I backup completi, incrementali e differenziali bilanciano spazio e tempo di ripristino." },
      { t: "⟦RPO⟧ is the maximum acceptable data loss, and ⟦RTO⟧ is the maximum acceptable downtime.", it: "L’RPO è la massima perdita di dati accettabile e l’RTO è il massimo tempo di fermo accettabile." },
      { t: "Modern attacks try to destroy backups first, so keep them ⟦immutable⟧ or offline, and separate from production.", it: "Gli attacchi moderni cercano di distruggere prima i backup, quindi tienili immutabili o offline e separati dalla produzione." },
      { t: "Plan and document ⟦restore tests⟧, because an incident is the wrong moment to find a backup does not work.", it: "Pianifica e documenta i test di ripristino, perché un incidente è il momento sbagliato per scoprire che un backup non funziona." },
      { t: "⟦Disaster recovery⟧ restores IT systems, while ⟦business continuity⟧ keeps the whole organisation working.", it: "Il disaster recovery ripristina i sistemi IT, mentre la business continuity mantiene attiva l’intera organizzazione." }
    ],
    gloss: [
      { w: "Backup", it: "copia di sicurezza" },
      { w: "3-2-1 rule", it: "regola di backup 3-2-1" },
      { w: "Full", it: "backup completo" },
      { w: "incremental", it: "backup solo delle modifiche" },
      { w: "RPO", it: "perdita massima di dati accettata" },
      { w: "RTO", it: "tempo massimo di ripristino" },
      { w: "immutable", it: "non modificabile" },
      { w: "restore tests", it: "test di ripristino" },
      { w: "Disaster recovery", it: "ripristino dopo un disastro" },
      { w: "business continuity", it: "continuità operativa" },
      { w: "ransomware", it: "malware che chiede un riscatto" },
      { w: "offline", it: "scollegato dalla rete" }
    ]
  });
  A("cyb-cifrari-classici-e-principi", {
    title: { t: "Classical ciphers and principles: Kerckhoffs, Vigenère, one-time pad", it: "Cifrari classici e principi: Kerckhoffs, Vigenère, one-time pad" },
    sum: [
      { t: "⟦Cryptography⟧ protects information passing through channels or storage that we do not control.", it: "La crittografia protegge l’informazione che passa per canali o archivi che non controlliamo." },
      { t: "⟦Kerckhoffs’s principle⟧ says a system must stay secure even if the enemy knows everything except the key.", it: "Il principio di Kerckhoffs dice che un sistema deve restare sicuro anche se il nemico conosce tutto tranne la chiave." },
      { t: "The ⟦Caesar cipher⟧ shifts every letter by a fixed amount; the ⟦Vigenère cipher⟧ repeats a keyword to vary the shift.", it: "Il cifrario di Cesare sposta ogni lettera di un valore fisso; Vigenère ripete una parola chiave per variare lo spostamento." },
      { t: "⟦Frequency analysis⟧ exploits the fact that letters are not equally likely in a language.", it: "L’analisi delle frequenze sfrutta il fatto che le lettere non sono ugualmente probabili in una lingua." },
      { t: "⟦XOR⟧ gives 1 when bits differ, which is the basis of the ⟦one-time pad⟧.", it: "Lo XOR dà 1 se i bit sono diversi, ed è la base del one-time pad." },
      { t: "The one-time pad is unbreakable only if its key is truly random, as long as the message and never reused.", it: "Il one-time pad è inviolabile solo se la chiave è davvero casuale, lunga come il messaggio e mai riusata." },
      { t: "Classical ciphers are broken and must not protect real data.", it: "I cifrari classici sono rotti e non vanno usati per proteggere dati reali." }
    ],
    gloss: [
      { w: "Cryptography", it: "crittografia" },
      { w: "Kerckhoffs’s principle", it: "la sicurezza sta nella chiave, non nel segreto dell’algoritmo" },
      { w: "Caesar cipher", it: "cifrario a scorrimento fisso" },
      { w: "Vigenère cipher", it: "cifrario con parola chiave ripetuta" },
      { w: "Frequency analysis", it: "analisi delle frequenze" },
      { w: "XOR", it: "o esclusivo bit a bit" },
      { w: "one-time pad", it: "cifrario con chiave monouso" },
      { w: "key", it: "chiave" },
      { w: "plaintext", it: "testo in chiaro" },
      { w: "ciphertext", it: "testo cifrato" },
      { w: "substitution", it: "sostituzione" },
      { w: "keyword", it: "parola chiave" }
    ]
  });
  A("cyb-cifrari-simmetrici", {
    title: { t: "Symmetric ciphers: AES, modes of operation and AEAD", it: "Cifrari simmetrici: AES, modi di cifratura e AEAD" },
    sum: [
      { t: "In ⟦symmetric cryptography⟧, sender and receiver share the same secret key to encrypt and decrypt.", it: "Nella crittografia simmetrica mittente e destinatario condividono la stessa chiave segreta per cifrare e decifrare." },
      { t: "A ⟦block cipher⟧ works on fixed-size blocks, while a ⟦stream cipher⟧ produces a keystream.", it: "Un cifrario a blocchi lavora su blocchi di dimensione fissa, mentre uno a flusso produce un keystream." },
      { t: "⟦AES⟧ was chosen by NIST after a public competition and works on 128-bit blocks.", it: "AES è stato scelto dal NIST dopo un concorso pubblico e lavora su blocchi da 128 bit." },
      { t: "⟦ECB⟧ mode encrypts each block independently, so it leaks patterns and should be avoided.", it: "La modalità ECB cifra ogni blocco in modo indipendente, quindi rivela schemi e va evitata." },
      { t: "⟦CBC⟧ and ⟦CTR⟧ need an ⟦IV⟧ or ⟦nonce⟧ used correctly; reusing a nonce with the same key is dangerous.", it: "CBC e CTR richiedono IV o nonce usati correttamente; riusare un nonce con la stessa chiave è pericoloso." },
      { t: "Encryption alone does not stop tampering, so use ⟦authenticated encryption⟧ such as ⟦GCM⟧ (AEAD).", it: "La sola cifratura non impedisce le modifiche, quindi usa la cifratura autenticata come GCM (AEAD)." },
      { t: "A ⟦padding oracle⟧ leaks information through different errors or timings, and authenticated encryption defends against it.", it: "Un padding oracle rivela informazioni tramite errori o tempi diversi, e la cifratura autenticata lo previene." }
    ],
    gloss: [
      { w: "symmetric cryptography", it: "crittografia a chiave condivisa" },
      { w: "block cipher", it: "cifrario a blocchi" },
      { w: "stream cipher", it: "cifrario a flusso" },
      { w: "AES", it: "standard di cifratura simmetrica" },
      { w: "ECB", it: "modo che cifra i blocchi indipendentemente" },
      { w: "CBC", it: "modo a concatenamento di blocchi" },
      { w: "CTR", it: "modo a contatore" },
      { w: "IV", it: "vettore di inizializzazione" },
      { w: "nonce", it: "valore usato una sola volta" },
      { w: "authenticated encryption", it: "cifratura autenticata" },
      { w: "GCM", it: "modo di cifratura autenticata" },
      { w: "padding oracle", it: "debolezza legata al padding" }
    ]
  });
  A("cyb-hash-mac-e-password", {
    title: { t: "Hashes, MACs and passwords: from SHA-2 to Argon2", it: "Hash, MAC e password: dalla SHA-2 ad Argon2" },
    sum: [
      { t: "A ⟦cryptographic hash function⟧ turns data of any length into a fixed-length ⟦digest⟧; it is not encryption.", it: "Una funzione hash crittografica trasforma dati di qualsiasi lunghezza in un digest di lunghezza fissa; non è cifratura." },
      { t: "A good hash resists ⟦preimage⟧, second-preimage and ⟦collision⟧ attacks.", it: "Un buon hash resiste ad attacchi di preimmagine, seconda preimmagine e collisione." },
      { t: "The ⟦birthday paradox⟧ explains why collisions appear sooner than one might expect.", it: "Il paradosso del compleanno spiega perché le collisioni compaiono prima del previsto." },
      { t: "MD5 and SHA-1 are broken for collisions, while ⟦SHA-2⟧ and SHA-3 are in use.", it: "MD5 e SHA-1 sono rotti per le collisioni, mentre SHA-2 e SHA-3 sono in uso." },
      { t: "A plain hash does not authenticate, so a ⟦MAC⟧ such as ⟦HMAC⟧ is needed, which also avoids length extension.", it: "Un hash semplice non autentica, quindi serve un MAC come HMAC, che evita anche la length extension." },
      { t: "Passwords need a ⟦salt⟧ and a slow hash, because a fast hash like SHA-256 is easy to brute-force.", it: "Le password richiedono un sale e un hash lento, perché un hash veloce come SHA-256 si forza facilmente." },
      { t: "Use a slow ⟦KDF⟧ such as bcrypt, scrypt or ⟦Argon2⟧ with adjustable parameters.", it: "Usa un KDF lento come bcrypt, scrypt o Argon2 con parametri regolabili." }
    ],
    gloss: [
      { w: "cryptographic hash function", it: "funzione hash crittografica" },
      { w: "digest", it: "risultato dell’hash" },
      { w: "preimage", it: "preimmagine" },
      { w: "collision", it: "collisione" },
      { w: "birthday paradox", it: "paradosso del compleanno" },
      { w: "SHA-2", it: "famiglia di hash in uso" },
      { w: "MAC", it: "codice di autenticazione del messaggio" },
      { w: "HMAC", it: "MAC basato su hash e chiave" },
      { w: "salt", it: "sale, valore casuale" },
      { w: "KDF", it: "funzione di derivazione della chiave" },
      { w: "Argon2", it: "KDF moderno per password" },
      { w: "length extension", it: "estensione di lunghezza" }
    ]
  });
  A("cyb-chiave-pubblica", {
    title: { t: "Public-key cryptography: modular arithmetic, RSA, Diffie–Hellman", it: "Crittografia a chiave pubblica: aritmetica modulare, RSA, Diffie–Hellman" },
    sum: [
      { t: "Symmetric cryptography needs a shared secret, so the ⟦key exchange problem⟧ is how to agree on a key over an open channel.", it: "La crittografia simmetrica richiede un segreto condiviso, quindi il problema dello scambio delle chiavi è accordarsi su una chiave su un canale aperto." },
      { t: "In ⟦modular arithmetic⟧ numbers wrap around like a clock, and a mod n is a remainder.", it: "Nell’aritmetica modulare i numeri si riavvolgono come su un orologio e a mod n è un resto." },
      { t: "⟦RSA⟧ relies on the difficulty of factoring n = p · q, shown here with tiny didactic numbers.", it: "RSA si basa sulla difficoltà di fattorizzare n = p · q, mostrata qui con piccolissimi numeri didattici." },
      { t: "Encryption uses the public key and decryption the private key, using modular powers.", it: "La cifratura usa la chiave pubblica e la decifrazione la chiave privata, con potenze modulari." },
      { t: "Real RSA needs at least 2048 bits and ⟦OAEP⟧ padding; the small numbers are never to be used for real.", it: "L’RSA reale richiede almeno 2048 bit e il padding OAEP; i numeri piccoli non vanno mai usati davvero." },
      { t: "⟦Diffie–Hellman⟧ lets two parties build a shared secret while talking in the open.", it: "Diffie–Hellman permette a due parti di costruire un segreto condiviso parlando in chiaro." },
      { t: "⟦Elliptic curve⟧ cryptography gives comparable security with much smaller keys.", it: "La crittografia a curve ellittiche dà una sicurezza paragonabile con chiavi molto più piccole." }
    ],
    gloss: [
      { w: "key exchange problem", it: "problema dello scambio delle chiavi" },
      { w: "modular arithmetic", it: "aritmetica modulare" },
      { w: "RSA", it: "cifrario a chiave pubblica basato sulla fattorizzazione" },
      { w: "public key", it: "chiave pubblica" },
      { w: "private key", it: "chiave privata" },
      { w: "OAEP", it: "padding sicuro per RSA" },
      { w: "Diffie–Hellman", it: "scambio di chiavi su canale aperto" },
      { w: "Elliptic curve", it: "curva ellittica" },
      { w: "factoring", it: "fattorizzazione" },
      { w: "shared secret", it: "segreto condiviso" },
      { w: "prime", it: "numero primo" },
      { w: "key size", it: "dimensione della chiave" }
    ]
  });
  A("cyb-firme-certificati-pki", {
    title: { t: "Digital signatures, certificates and PKI", it: "Firme digitali, certificati e PKI" },
    sum: [
      { t: "A ⟦digital signature⟧ proves who produced data and that it was not modified, using a key pair.", it: "Una firma digitale prova chi ha prodotto un dato e che non è stato modificato, usando una coppia di chiavi." },
      { t: "To trust a public key, we need ⟦certificates⟧, otherwise an attacker could swap the key in transit.", it: "Per fidarsi di una chiave pubblica servono i certificati, altrimenti un attaccante potrebbe sostituirla in transito." },
      { t: "An ⟦X.509⟧ certificate has fields such as subject, issuer, validity dates and the public key.", it: "Un certificato X.509 ha campi come soggetto, emittente, date di validità e chiave pubblica." },
      { t: "Trust follows the ⟦certificate chain⟧ from the leaf through an intermediate CA to a root.", it: "La fiducia segue la catena di certificati dalla foglia, tramite una CA intermedia, fino a una radice." },
      { t: "A ⟦self-signed⟧ certificate is signed by its own key, so it is trusted only if you trust it explicitly.", it: "Un certificato autofirmato è firmato dalla propria chiave, quindi è fidato solo se lo si accetta esplicitamente." },
      { t: "⟦Revocation⟧ (CRL, OCSP) handles certificates that become untrustworthy before they expire.", it: "La revoca (CRL, OCSP) gestisce i certificati che diventano inaffidabili prima della scadenza." },
      { t: "⟦Certificate Transparency⟧, ⟦pinning⟧ and ⟦code signing⟧ detect misissued certificates and protect the software supply chain.", it: "Certificate Transparency, pinning e firma del codice rilevano certificati emessi male e proteggono la catena di fornitura del software." }
    ],
    gloss: [
      { w: "digital signature", it: "firma digitale" },
      { w: "certificates", it: "certificati digitali" },
      { w: "X.509", it: "formato standard dei certificati" },
      { w: "certificate chain", it: "catena di certificati" },
      { w: "self-signed", it: "autofirmato" },
      { w: "Revocation", it: "revoca" },
      { w: "Certificate Transparency", it: "registri pubblici dei certificati emessi" },
      { w: "pinning", it: "fissare il certificato atteso" },
      { w: "code signing", it: "firma del codice" },
      { w: "PKI", it: "infrastruttura a chiave pubblica" },
      { w: "root CA", it: "autorità di certificazione radice" },
      { w: "issuer", it: "emittente" }
    ]
  });
  A("cyb-errori-crittografici-comuni", {
    title: { t: "Common cryptographic mistakes and key management", it: "Errori crittografici comuni e gestione delle chiavi" },
    sum: [
      { t: "The most common cause of weak cryptography is ⟦rolling your own⟧: inventing algorithms or mixing modes by hand.", it: "La causa più comune di crittografia debole è inventarsela da sé: algoritmi originali o modi mescolati a mano." },
      { t: "Keys and secrets ⟦hardcoded⟧ in code, repositories or mobile apps are effectively public.", it: "Chiavi e segreti scritti nel codice, nei repository o nelle app mobili sono di fatto pubblici." },
      { t: "Keys, IVs and tokens need a ⟦CSPRNG⟧, because an ordinary ⟦PRNG⟧ is predictable.", it: "Chiavi, IV e token richiedono un CSPRNG, perché un PRNG ordinario è prevedibile." },
      { t: "⟦Nonce reuse⟧ with the same key is one of the most serious vulnerabilities.", it: "Il riuso del nonce con la stessa chiave è una delle vulnerabilità più gravi." },
      { t: "Other mistakes are using ECB, skipping authentication, unsafe comparisons and poor password storage.", it: "Altri errori sono usare ECB, omettere l’autenticazione, confronti non sicuri e cattiva conservazione delle password." },
      { t: "An outdated ⟦TLS⟧ configuration can cancel the protection that encryption should give.", it: "Una configurazione TLS obsoleta può annullare la protezione che la cifratura dovrebbe dare." },
      { t: "Good ⟦key management⟧ covers the whole life cycle, with ⟦key rotation⟧, ⟦KMS⟧ or ⟦HSM⟧, and a watch on ⟦post-quantum⟧ developments.", it: "Una buona gestione delle chiavi copre l’intero ciclo di vita, con rotazione, KMS o HSM e attenzione alla crittografia post-quantistica." }
    ],
    gloss: [
      { w: "rolling your own", it: "inventare la propria crittografia" },
      { w: "hardcoded", it: "scritto fisso nel codice" },
      { w: "CSPRNG", it: "generatore casuale crittograficamente sicuro" },
      { w: "PRNG", it: "generatore pseudocasuale" },
      { w: "Nonce reuse", it: "riuso del nonce" },
      { w: "TLS", it: "protocollo di cifratura del trasporto" },
      { w: "key management", it: "gestione delle chiavi" },
      { w: "key rotation", it: "rotazione delle chiavi" },
      { w: "KMS", it: "servizio di gestione delle chiavi" },
      { w: "HSM", it: "modulo hardware per le chiavi" },
      { w: "post-quantum", it: "post-quantistico" },
      { w: "secret", it: "segreto" }
    ]
  });
  A("cyb-http-sessioni-e-cookie", {
    title: { t: "HTTP, sessions and cookies", it: "HTTP, sessioni e cookie" },
    sum: [
      { t: "⟦HTTP⟧ is stateless: each request is independent, with a request and a response.", it: "HTTP è senza stato: ogni richiesta è indipendente, con una richiesta e una risposta." },
      { t: "⟦Status codes⟧ summarise the outcome in five families, and headers carry extra information.", it: "I codici di stato riassumono l’esito in cinque famiglie e le intestazioni portano informazioni aggiuntive." },
      { t: "A session ⟦cookie⟧ should be protected with the ⟦HttpOnly⟧, ⟦Secure⟧ and ⟦SameSite⟧ flags.", it: "Un cookie di sessione va protetto con i flag HttpOnly, Secure e SameSite." },
      { t: "Secure ⟦session management⟧ follows precise rules, for example a new identifier after login.", it: "Una gestione sicura delle sessioni segue regole precise, per esempio un nuovo identificatore dopo il login." },
      { t: "A ⟦JWT⟧ is signed, not encrypted, so it has pitfalls and must not carry secrets.", it: "Un JWT è firmato, non cifrato, quindi ha insidie e non deve contenere segreti." },
      { t: "The ⟦same-origin policy⟧ lets a page read only resources from the same origin: scheme, host and port.", it: "La same-origin policy permette a una pagina di leggere solo risorse della stessa origine: schema, host e porta." },
      { t: "⟦CORS⟧ relaxes that rule in a controlled way, but misconfigurations can expose data.", it: "Il CORS allenta quella regola in modo controllato, ma le errate configurazioni possono esporre dati." }
    ],
    gloss: [
      { w: "HTTP", it: "protocollo del web" },
      { w: "Status codes", it: "codici di stato" },
      { w: "cookie", it: "piccolo dato salvato dal browser" },
      { w: "HttpOnly", it: "cookie non leggibile da JavaScript" },
      { w: "Secure", it: "cookie inviato solo su HTTPS" },
      { w: "SameSite", it: "limita l’invio cross-site" },
      { w: "session management", it: "gestione delle sessioni" },
      { w: "JWT", it: "token firmato JSON" },
      { w: "same-origin policy", it: "regola di origine del browser" },
      { w: "CORS", it: "condivisione controllata tra origini" },
      { w: "origin", it: "origine (schema, host, porta)" },
      { w: "header", it: "intestazione" }
    ]
  });
  A("cyb-owasp-top10-panoramica", {
    title: { t: "OWASP Top 10: overview", it: "OWASP Top 10: panoramica" },
    sum: [
      { t: "⟦OWASP⟧ is a non-profit foundation, and the ⟦Top 10⟧ lists the main web application risk categories.", it: "OWASP è una fondazione no profit e la Top 10 elenca le principali categorie di rischio delle applicazioni web." },
      { t: "⟦Broken Access Control⟧ lets users act beyond their permissions, and cryptographic failures expose data.", it: "Il Broken Access Control permette agli utenti di agire oltre i propri permessi e gli errori crittografici espongono dati." },
      { t: "⟦Security Misconfiguration⟧ and vulnerable or outdated components come from unsafe defaults and neglected updates.", it: "La Security Misconfiguration e i componenti vulnerabili o obsoleti nascono da impostazioni predefinite pericolose e aggiornamenti trascurati." },
      { t: "⟦Authentication failures⟧ and integrity failures concern weak identity checks and untrusted updates or data.", it: "Gli errori di autenticazione e di integrità riguardano controlli d’identità deboli e aggiornamenti o dati non fidati." },
      { t: "⟦Logging and monitoring failures⟧ delay detection, and ⟦SSRF⟧ makes the server send forged requests.", it: "Gli errori di logging e monitoraggio ritardano il rilevamento e la SSRF fa inviare richieste forgiate dal server." },
      { t: "The Top 10 helps set priorities; it does not exhaust the work of securing an application.", it: "La Top 10 serve a dare priorità, non a esaurire il lavoro di messa in sicurezza di un’applicazione." },
      { t: "A quick map links each category to a typical ⟦defence⟧.", it: "Una mappa rapida collega ogni categoria a una difesa tipica." }
    ],
    gloss: [
      { w: "OWASP", it: "fondazione per la sicurezza applicativa" },
      { w: "Top 10", it: "elenco dei 10 rischi principali" },
      { w: "Broken Access Control", it: "controllo degli accessi violato" },
      { w: "Security Misconfiguration", it: "configurazione errata" },
      { w: "Authentication failures", it: "errori di autenticazione" },
      { w: "Logging and monitoring failures", it: "errori di log e monitoraggio" },
      { w: "SSRF", it: "richieste forgiate dal server" },
      { w: "defence", it: "difesa" },
      { w: "injection", it: "iniezione di comandi" },
      { w: "component", it: "componente software" },
      { w: "access control", it: "controllo degli accessi" },
      { w: "risk category", it: "categoria di rischio" }
    ]
  });
  A("cyb-injection-e-prevenzione", {
    title: { t: "Injection and prevention", it: "Injection e prevenzione" },
    sum: [
      { t: "⟦Injection⟧ happens when untrusted data is concatenated into a command and treated as code by an interpreter.", it: "L’injection avviene quando dati non fidati sono concatenati in un comando e trattati come codice da un interprete." },
      { t: "In a code review, look for queries built by ⟦string concatenation⟧ with user input.", it: "In una revisione del codice cerca query costruite per concatenazione di stringhe con input dell’utente." },
      { t: "⟦Parameterised queries⟧ (prepared statements) are the primary defence, since they keep data separate from code.", it: "Le query parametrizzate (prepared statement) sono la difesa primaria, perché tengono i dati separati dal codice." },
      { t: "The same principle applies to ⟦OS commands⟧, LDAP and NoSQL.", it: "Lo stesso principio vale per comandi di sistema, LDAP e NoSQL." },
      { t: "⟦Input validation⟧ is useful but secondary, and does not replace parameterisation.", it: "La validazione dell’input è utile ma secondaria e non sostituisce la parametrizzazione." },
      { t: "Apply ⟦least privilege⟧, for example a database account with minimal rights, to limit the damage.", it: "Applica il privilegio minimo, per esempio un account di database con diritti minimi, per limitare i danni." },
      { t: "A ⟦WAF⟧, testing and ⟦defence in depth⟧ add further layers.", it: "Un WAF, i test e la difesa in profondità aggiungono altri livelli." }
    ],
    gloss: [
      { w: "Injection", it: "iniezione di codice o comandi" },
      { w: "string concatenation", it: "concatenazione di stringhe" },
      { w: "Parameterised queries", it: "query parametrizzate" },
      { w: "OS commands", it: "comandi di sistema" },
      { w: "Input validation", it: "validazione dell’input" },
      { w: "least privilege", it: "privilegio minimo" },
      { w: "WAF", it: "firewall per applicazioni web" },
      { w: "defence in depth", it: "difesa in profondità" },
      { w: "interpreter", it: "interprete" },
      { w: "prepared statement", it: "query preparata" },
      { w: "ORM", it: "mappatura oggetti-database" },
      { w: "SQL", it: "linguaggio per database" }
    ]
  });
  A("cyb-xss-csrf-e-difese", {
    title: { t: "XSS, CSRF and defences", it: "XSS, CSRF e difese" },
    sum: [
      { t: "⟦XSS⟧ occurs when an application puts untrusted data into a web page without handling it correctly.", it: "L’XSS avviene quando un’applicazione inserisce dati non fidati in una pagina web senza trattarli correttamente." },
      { t: "It comes in three forms: ⟦reflected⟧, ⟦stored⟧ and ⟦DOM-based⟧.", it: "Esiste in tre forme: riflesso, memorizzato e DOM-based." },
      { t: "The main defence is ⟦output encoding⟧ suited to the context where the data appears.", it: "La difesa principale è la codifica dell’output adatta al contesto in cui il dato compare." },
      { t: "A ⟦CSP⟧ tells the browser where scripts and other resources may come from.", it: "Una CSP dice al browser da dove possono provenire script e altre risorse." },
      { t: "⟦CSRF⟧ abuses the fact that browsers attach cookies automatically to requests.", it: "Il CSRF sfrutta il fatto che i browser allegano automaticamente i cookie alle richieste." },
      { t: "Combine defences: ⟦SameSite⟧ cookies and ⟦anti-CSRF tokens⟧.", it: "Combina le difese: cookie SameSite e token anti-CSRF." },
      { t: "⟦Clickjacking⟧ hides a real site in a frame, and ⟦frame-ancestors⟧ controls who may embed it.", it: "Il clickjacking nasconde un sito vero in un frame e frame-ancestors controlla chi può incorporarlo." }
    ],
    gloss: [
      { w: "XSS", it: "esecuzione di script in pagine altrui" },
      { w: "reflected", it: "riflesso" },
      { w: "stored", it: "memorizzato" },
      { w: "DOM-based", it: "basato sul DOM" },
      { w: "output encoding", it: "codifica dell’output" },
      { w: "CSP", it: "politica di sicurezza dei contenuti" },
      { w: "CSRF", it: "richieste non volute dall’utente" },
      { w: "SameSite", it: "cookie limitato al proprio sito" },
      { w: "anti-CSRF tokens", it: "token contro il CSRF" },
      { w: "Clickjacking", it: "clic ingannevole su frame nascosto" },
      { w: "frame-ancestors", it: "chi può incorporare la pagina" },
      { w: "Trusted Types", it: "API contro XSS DOM" }
    ]
  });
  A("cyb-controllo-accessi-e-api", {
    title: { t: "Access control and API security", it: "Controllo degli accessi e sicurezza delle API" },
    sum: [
      { t: "⟦Authentication⟧ asks who you are, while ⟦authorisation⟧ asks what you may do; do not confuse them.", it: "L’autenticazione chiede chi sei, l’autorizzazione chiede cosa puoi fare; non vanno confuse." },
      { t: "⟦IDOR⟧ happens when the app trusts a client-supplied identifier without checking ownership.", it: "L’IDOR avviene quando l’app si fida di un identificatore fornito dal client senza verificare la proprietà." },
      { t: "⟦RBAC⟧ assigns permissions to roles, while ⟦ABAC⟧ decides using attributes; always enforce checks on the server.", it: "L’RBAC assegna permessi ai ruoli, l’ABAC decide in base ad attributi; i controlli vanno sempre fatti sul server." },
      { t: "⟦APIs⟧ expose functions and data directly, so access control errors show up quickly.", it: "Le API espongono funzioni e dati direttamente, quindi gli errori di controllo accessi emergono subito." },
      { t: "A coherent set of ⟦API defences⟧ includes authentication, authorisation on every request and rate limiting.", it: "Un insieme coerente di difese per le API include autenticazione, autorizzazione a ogni richiesta e limiti di frequenza." },
      { t: "⟦OAuth 2.0⟧ delegates authorisation with limited scopes, and ⟦OpenID Connect⟧ adds identity on top.", it: "OAuth 2.0 delega l’autorizzazione con ambiti limitati e OpenID Connect aggiunge l’identità." },
      { t: "Common OAuth/OIDC mistakes can be avoided by checking tokens and redirect settings carefully.", it: "Gli errori comuni in OAuth/OIDC si evitano controllando con cura token e impostazioni di reindirizzamento." }
    ],
    gloss: [
      { w: "Authentication", it: "verifica dell’identità" },
      { w: "authorisation", it: "verifica dei permessi" },
      { w: "IDOR", it: "riferimento diretto non protetto a un oggetto" },
      { w: "RBAC", it: "controllo accessi basato sui ruoli" },
      { w: "ABAC", it: "controllo accessi basato sugli attributi" },
      { w: "APIs", it: "interfacce di programmazione" },
      { w: "API defences", it: "difese delle API" },
      { w: "OAuth 2.0", it: "autorizzazione delegata" },
      { w: "OpenID Connect", it: "identità sopra OAuth" },
      { w: "scope", it: "ambito del token" },
      { w: "access token", it: "token di accesso" },
      { w: "server-side", it: "lato server" }
    ]
  });
  A("cyb-sdlc-sicuro-e-supply-chain", {
    title: { t: "Secure SDLC and supply chain", it: "SDLC sicuro e supply chain" },
    sum: [
      { t: "A ⟦secure SDLC⟧ puts security activities into every phase, following the ⟦shift-left⟧ idea.", it: "Un SDLC sicuro inserisce attività di sicurezza in ogni fase, secondo l’idea dello shift-left." },
      { t: "⟦Threat modelling⟧ asks what can go wrong before code is written.", it: "Il threat modelling si chiede cosa può andare storto prima di scrivere il codice." },
      { t: "A ⟦code review⟧ with a security checklist is an effective human control.", it: "Una revisione del codice con checklist di sicurezza è un controllo umano efficace." },
      { t: "⟦SAST⟧, ⟦DAST⟧, IAST and ⟦SCA⟧ are complementary automated tools.", it: "SAST, DAST, IAST e SCA sono strumenti automatici complementari." },
      { t: "⟦Secrets⟧ must never end up in source code or repository history, and dependencies need checking.", it: "I segreti non devono mai finire nel codice o nella cronologia del repository, e le dipendenze vanno controllate." },
      { t: "An ⟦SBOM⟧ lists software components, and signatures and a protected ⟦CI/CD⟧ pipeline secure the supply chain.", it: "Una SBOM elenca i componenti del software, e firme e una pipeline CI/CD protetta mettono in sicurezza la catena di fornitura." },
      { t: "Logs are essential for detection, but they must not leak sensitive information.", it: "I log sono essenziali per il rilevamento, ma non devono far trapelare informazioni sensibili." }
    ],
    gloss: [
      { w: "secure SDLC", it: "ciclo di sviluppo sicuro" },
      { w: "shift-left", it: "sicurezza fin dalle prime fasi" },
      { w: "Threat modelling", it: "modellazione delle minacce" },
      { w: "code review", it: "revisione del codice" },
      { w: "SAST", it: "analisi statica del codice" },
      { w: "DAST", it: "test dinamico dell’applicazione" },
      { w: "SCA", it: "analisi delle dipendenze" },
      { w: "Secrets", it: "segreti" },
      { w: "SBOM", it: "elenco dei componenti software" },
      { w: "CI/CD", it: "pipeline di integrazione e rilascio" },
      { w: "supply chain", it: "catena di fornitura" },
      { w: "IAST", it: "analisi interattiva" }
    ]
  });
  A("cyb-log-e-siem", {
    title: { t: "Logs, SIEM and event correlation", it: "Log, SIEM e correlazione degli eventi" },
    sum: [
      { t: "A ⟦log⟧ records who did what, on which system, when and with what result; without logs an incident cannot be reconstructed.", it: "Un log registra chi ha fatto cosa, su quale sistema, quando e con quale esito; senza log un incidente non si ricostruisce." },
      { t: "Different ⟦log sources⟧ each see a part of the story, so choose them and their essential fields carefully.", it: "Le diverse fonti di log vedono ciascuna una parte della storia, quindi scegli con cura fonti e campi essenziali." },
      { t: "⟦Normalisation⟧ unifies formats and names, and clocks must be synchronised, with times in ⟦UTC⟧.", it: "La normalizzazione unifica formati e nomi, e gli orologi vanno sincronizzati, con orari in UTC." },
      { t: "⟦Retention⟧ depends on investigation needs, legal duties and cost, and logs need integrity and privacy protection.", it: "La conservazione dipende da esigenze investigative, obblighi normativi e costi, e i log richiedono integrità e tutela della privacy." },
      { t: "A ⟦SIEM⟧ collects logs from many sources, normalises and stores them, and supports search and alerts.", it: "Un SIEM raccoglie log da molte fonti, li normalizza e conserva e permette ricerche e allarmi." },
      { t: "A ⟦correlation rule⟧ links several events into a meaningful condition, but too many alerts cause ⟦alert fatigue⟧.", it: "Una regola di correlazione collega più eventi in una condizione significativa, ma troppi allarmi causano alert fatigue." },
      { t: "Reading logs means spotting patterns: who, from where, how many times, how fast and with what outcome.", it: "Leggere i log significa individuare pattern: chi, da dove, quante volte, quanto in fretta e con quale esito." }
    ],
    gloss: [
      { w: "log", it: "registro di eventi" },
      { w: "log sources", it: "fonti di log" },
      { w: "Normalisation", it: "normalizzazione dei formati" },
      { w: "UTC", it: "ora universale coordinata" },
      { w: "Retention", it: "tempo di conservazione" },
      { w: "SIEM", it: "gestione centralizzata di log ed eventi" },
      { w: "correlation rule", it: "regola di correlazione" },
      { w: "alert fatigue", it: "affaticamento da troppi allarmi" },
      { w: "timestamp", it: "marca temporale" },
      { w: "syslog", it: "formato standard dei log" },
      { w: "authentication log", it: "log di autenticazione" },
      { w: "web server log", it: "log del web server" }
    ]
  });
  A("cyb-rilevamento-e-threat-hunting", {
    title: { t: "Detection, false positives and threat hunting", it: "Rilevamento, falsi positivi e threat hunting" },
    sum: [
      { t: "⟦Detection engineering⟧ treats each detection rule as a product, with a goal, input data and tests.", it: "Il detection engineering tratta ogni regola di rilevamento come un prodotto, con obiettivo, dati di ingresso e test." },
      { t: "Detection can be based on ⟦signatures⟧, ⟦behaviour⟧ or ⟦anomalies⟧, and the approaches complement one another.", it: "Il rilevamento può basarsi su firme, comportamento o anomalie, e gli approcci si completano." },
      { t: "A detector can err in two ways: ⟦false positives⟧ and ⟦false negatives⟧, measured with precision and recall.", it: "Un rilevatore può sbagliare in due modi, falsi positivi e falsi negativi, misurati con precision e recall." },
      { t: "When threats are rare, even a good detector gives mostly false alarms because of the ⟦base rate⟧.", it: "Quando le minacce sono rare, anche un buon rilevatore dà soprattutto falsi allarmi a causa della frequenza di base." },
      { t: "⟦Sigma⟧ is an open, product-independent format for describing log detection rules.", it: "Sigma è un formato aperto e indipendente dal prodotto per descrivere regole di rilevamento sui log." },
      { t: "⟦Threat hunting⟧ is proactive and starts from a hypothesis, using a ⟦baseline⟧ of normal behaviour to spot anomalies.", it: "Il threat hunting è proattivo e parte da un’ipotesi, usando una baseline del comportamento normale per notare anomalie." },
      { t: "⟦Honeypots⟧ and ⟦canary tokens⟧ work because no legitimate user has a reason to touch them.", it: "Honeypot e canary token funzionano perché nessun utente legittimo ha motivo di toccarli." }
    ],
    gloss: [
      { w: "Detection engineering", it: "ingegneria del rilevamento" },
      { w: "signatures", it: "firme, pattern noti" },
      { w: "behaviour", it: "comportamento" },
      { w: "anomalies", it: "anomalie" },
      { w: "false positives", it: "falsi positivi" },
      { w: "false negatives", it: "falsi negativi" },
      { w: "base rate", it: "frequenza di base" },
      { w: "Sigma", it: "formato aperto di regole sui log" },
      { w: "Threat hunting", it: "caccia proattiva alle minacce" },
      { w: "baseline", it: "comportamento normale di riferimento" },
      { w: "Honeypots", it: "esche difensive" },
      { w: "canary tokens", it: "token esca" }
    ]
  });
  A("cyb-incident-response", {
    title: { t: "Incident response: from detection to lessons learned", it: "Incident response: dal rilevamento alle lezioni apprese" },
    sum: [
      { t: "An ⟦event⟧ is any observable occurrence, while an ⟦incident⟧ compromises, or risks compromising, security; response follows a life cycle.", it: "Un evento è qualsiasi fatto osservabile, mentre un incidente compromette o rischia di compromettere la sicurezza; la risposta segue un ciclo di vita." },
      { t: "⟦Preparation⟧ comes before the incident: roles, plans and ⟦playbooks⟧.", it: "La preparazione precede l’incidente: ruoli, piani e playbook." },
      { t: "⟦Detection and analysis⟧ answer whether it is a real incident and how serious it is.", it: "Rilevamento e analisi stabiliscono se è un vero incidente e quanto è grave." },
      { t: "⟦Containment⟧, ⟦eradication⟧ and ⟦recovery⟧ are three distinct phases.", it: "Contenimento, eradicazione e recupero sono tre fasi distinte." },
      { t: "Response also means controlled communication and respecting legal reporting duties.", it: "La risposta è anche comunicazione controllata e rispetto degli obblighi normativi di notifica." },
      { t: "Preserve ⟦evidence⟧ while containing and restoring, and keep a record of its ⟦chain of custody⟧.", it: "Conserva le prove mentre contieni e ripristini, e tieni traccia della catena di custodia." },
      { t: "A ⟦tabletop⟧ exercise and a ⟦lessons-learned⟧ review turn an incident into improvements.", it: "Un’esercitazione tabletop e una revisione delle lezioni apprese trasformano un incidente in miglioramenti." }
    ],
    gloss: [
      { w: "event", it: "evento osservabile" },
      { w: "incident", it: "incidente di sicurezza" },
      { w: "Preparation", it: "preparazione" },
      { w: "playbooks", it: "procedura operativa per un tipo di incidente" },
      { w: "Detection and analysis", it: "rilevamento e analisi" },
      { w: "Containment", it: "contenimento" },
      { w: "eradication", it: "eliminazione della causa" },
      { w: "recovery", it: "ripristino" },
      { w: "evidence", it: "prove" },
      { w: "chain of custody", it: "catena di custodia" },
      { w: "tabletop", it: "esercitazione da tavolo" },
      { w: "lessons-learned", it: "lezioni apprese" }
    ]
  });
  A("cyb-forense-digitale", {
    title: { t: "Digital forensics: evidence, integrity and chain of custody", it: "Forense digitale: prove, integrità e catena di custodia" },
    sum: [
      { t: "⟦Digital forensics⟧ acquires, preserves, analyses and documents evidence so that results are repeatable and verifiable.", it: "La forense digitale acquisisce, conserva, analizza e documenta prove in modo che i risultati siano ripetibili e verificabili." },
      { t: "Collect evidence by the ⟦order of volatility⟧, from the most volatile to the least.", it: "Raccogli le prove secondo l’ordine di volatilità, dalla più volatile alla meno volatile." },
      { t: "A cryptographic ⟦hash⟧ and a ⟦write blocker⟧ show that a copy is identical to the original.", it: "Un hash crittografico e un write blocker mostrano che una copia è identica all’originale." },
      { t: "The ⟦chain of custody⟧ documents who held the evidence, when, where, why and in what state.", it: "La catena di custodia documenta chi ha avuto la prova, quando, dove, perché e in che stato." },
      { t: "Disk, memory and network each give different evidence, described here at a conceptual level.", it: "Disco, memoria e rete danno prove diverse, descritte qui a livello concettuale." },
      { t: "A ⟦timeline⟧ orders events from different sources and a transparent method makes evidence admissible.", it: "Una timeline ordina eventi da fonti diverse e un metodo trasparente rende la prova ammissibile." },
      { t: "⟦Cloud forensics⟧ has limits, because you depend on the provider for data and access.", it: "La forense in cloud ha dei limiti, perché si dipende dal provider per dati e accessi." }
    ],
    gloss: [
      { w: "Digital forensics", it: "forense digitale" },
      { w: "order of volatility", it: "ordine di volatilità" },
      { w: "hash", it: "impronta crittografica" },
      { w: "write blocker", it: "dispositivo che impedisce scritture" },
      { w: "chain of custody", it: "catena di custodia" },
      { w: "timeline", it: "linea temporale degli eventi" },
      { w: "Cloud forensics", it: "forense in cloud" },
      { w: "evidence", it: "prova" },
      { w: "disk image", it: "immagine del disco" },
      { w: "admissible", it: "ammissibile in giudizio" },
      { w: "memory dump", it: "copia della memoria" },
      { w: "metadata", it: "metadati" }
    ]
  });
  A("cyb-analisi-statica-malware-concetti", {
    title: { t: "Static malware analysis: concepts for defenders", it: "Analisi statica del malware: concetti per difensori" },
    sum: [
      { t: "Analysing a suspicious sample answers defensive questions: what it does, how to recognise it and how it got in.", it: "Analizzare un campione sospetto risponde a domande difensive: cosa fa, come si riconosce e come è entrato." },
      { t: "A ⟦safe analysis environment⟧ must contain the risk, so work in an isolated lab.", it: "Un ambiente di analisi sicuro deve contenere il rischio, quindi si lavora in un laboratorio isolato." },
      { t: "The first step is to compute the file’s ⟦hash⟧ and look up its ⟦reputation⟧.", it: "Il primo passo è calcolare l’hash del file e cercarne la reputazione." },
      { t: "⟦Strings⟧, headers and ⟦imports⟧ of a PE file give clues without running it.", it: "Stringhe, header e import di un file PE danno indizi senza eseguirlo." },
      { t: "A ⟦sandbox⟧ runs the sample in isolation and records what happens, so the analyst reads a report.", it: "Una sandbox esegue il campione in isolamento e registra cosa accade, così l’analista legge un rapporto." },
      { t: "Analysis yields ⟦indicators of compromise⟧ and observed ⟦behaviours⟧, which are different results.", it: "L’analisi produce indicatori di compromissione e comportamenti osservati, che sono risultati diversi." },
      { t: "⟦YARA⟧ rules describe families of files through patterns, to search archives or memory.", it: "Le regole YARA descrivono famiglie di file tramite pattern, per cercare in archivi o memoria." }
    ],
    gloss: [
      { w: "safe analysis environment", it: "ambiente di analisi sicuro" },
      { w: "hash", it: "impronta del file" },
      { w: "reputation", it: "reputazione" },
      { w: "Strings", it: "stringhe di testo nel file" },
      { w: "imports", it: "funzioni importate" },
      { w: "sandbox", it: "ambiente isolato di esecuzione" },
      { w: "indicators of compromise", it: "indicatori di compromissione (IOC)" },
      { w: "behaviours", it: "comportamenti" },
      { w: "YARA", it: "regole di pattern sui file" },
      { w: "sample", it: "campione" },
      { w: "triage", it: "valutazione preliminare" },
      { w: "PE", it: "formato degli eseguibili Windows" }
    ]
  });
  A("cyb-threat-intelligence-e-attck", {
    title: { t: "Threat intelligence, Kill Chain and MITRE ATT&CK", it: "Threat intelligence, Kill Chain e MITRE ATT&CK" },
    sum: [
      { t: "⟦Cyber Threat Intelligence⟧ is analysed, contextualised information about threats that helps decisions, not just a list of indicators.", it: "La Cyber Threat Intelligence è informazione sulle minacce analizzata e contestualizzata che aiuta a decidere, non un semplice elenco di indicatori." },
      { t: "CTI has four levels, distinguished by audience and time horizon.", it: "La CTI ha quattro livelli, distinti per destinatario e orizzonte temporale." },
      { t: "The ⟦Cyber Kill Chain⟧ describes an attack as seven phases, and defenders try to break the chain.", it: "La Cyber Kill Chain descrive un attacco in sette fasi e i difensori cercano di interrompere la catena." },
      { t: "⟦MITRE ATT&CK⟧ is a public knowledge base of ⟦tactics⟧ and ⟦techniques⟧ seen in the real world.", it: "MITRE ATT&CK è una base di conoscenza pubblica di tattiche e tecniche osservate nel mondo reale." },
      { t: "Mapping each detection rule to a technique reveals coverage and gaps.", it: "Associare ogni regola di rilevamento a una tecnica fa emergere copertura e lacune." },
      { t: "The ⟦Pyramid of Pain⟧ ranks ⟦IOCs⟧ by how much it costs the attacker to change them.", it: "La piramide del dolore ordina gli IOC secondo quanto costa all’attaccante cambiarli." },
      { t: "⟦STIX⟧ and ⟦TAXII⟧ exchange intelligence automatically, and sharing with the ⟦TLP⟧ labels raises the attacker’s cost.", it: "STIX e TAXII scambiano intelligence in modo automatico, e condividerla con le etichette TLP aumenta il costo per l’attaccante." }
    ],
    gloss: [
      { w: "Cyber Threat Intelligence", it: "informazioni sulle minacce analizzate" },
      { w: "Cyber Kill Chain", it: "catena in sette fasi di un attacco" },
      { w: "MITRE ATT&CK", it: "base di conoscenza di tattiche e tecniche" },
      { w: "tactics", it: "tattiche, obiettivi dell’attaccante" },
      { w: "techniques", it: "tecniche, modi per raggiungerli" },
      { w: "Pyramid of Pain", it: "piramide del dolore" },
      { w: "IOCs", it: "indicatori di compromissione" },
      { w: "STIX", it: "formato di scambio di intelligence" },
      { w: "TAXII", it: "protocollo di trasporto dell’intelligence" },
      { w: "TLP", it: "protocollo semaforo per la condivisione" },
      { w: "threat actor", it: "attore della minaccia" },
      { w: "detection coverage", it: "copertura dei rilevamenti" }
    ]
  });
  A("cyb-threat-modeling", {
    title: { t: "Threat modelling: STRIDE, attack trees and requirements", it: "Threat modeling: STRIDE, alberi di attacco e requisiti" },
    sum: [
      { t: "⟦Threat modelling⟧ is a structured analysis of a system that answers four classic questions.", it: "Il threat modeling è un’analisi strutturata di un sistema che risponde a quattro domande classiche." },
      { t: "A ⟦data-flow diagram⟧ with ⟦trust boundaries⟧ is the starting model.", it: "Un data-flow diagram con confini di fiducia è il modello di partenza." },
      { t: "⟦STRIDE⟧ is an acronym of six threat categories, each tied to a violated security property.", it: "STRIDE è l’acronimo di sei categorie di minacce, ciascuna legata a una proprietà di sicurezza violata." },
      { t: "A worked example applies STRIDE to a small portal with a user, a web server and a database.", it: "Un esempio svolto applica STRIDE a un piccolo portale con utente, server web e database." },
      { t: "An ⟦attack tree⟧ breaks an adversary’s goal into sub-goals joined by AND and OR.", it: "Un albero di attacco scompone l’obiettivo dell’avversario in sotto-obiettivi collegati da AND e OR." },
      { t: "Threats are ranked with scoring such as ⟦DREAD⟧ or alternatives.", it: "Le minacce si ordinano con punteggi come DREAD o alternative." },
      { t: "Each threat gets a response that becomes a verifiable ⟦requirement⟧ or countermeasure.", it: "Ogni minaccia riceve una risposta che diventa un requisito o una contromisura verificabile." }
    ],
    gloss: [
      { w: "Threat modelling", it: "modellazione delle minacce" },
      { w: "data-flow diagram", it: "diagramma dei flussi di dati" },
      { w: "trust boundaries", it: "confini di fiducia" },
      { w: "STRIDE", it: "sei categorie di minacce" },
      { w: "attack tree", it: "albero di attacco" },
      { w: "DREAD", it: "schema di punteggio delle minacce" },
      { w: "requirement", it: "requisito" },
      { w: "countermeasure", it: "contromisura" },
      { w: "spoofing", it: "falsificazione di identità" },
      { w: "tampering", it: "manomissione" },
      { w: "repudiation", it: "ripudio" },
      { w: "elevation of privilege", it: "innalzamento dei privilegi" }
    ]
  });
  A("cyb-cloud-security", {
    title: { t: "Cloud security: IAM, configuration and visibility", it: "Sicurezza nel cloud: IAM, configurazione e visibilità" },
    sum: [
      { t: "Under the ⟦shared responsibility model⟧, the provider secures the cloud itself and the customer secures what they put in it.", it: "Con il modello di responsabilità condivisa, il provider protegge il cloud stesso e il cliente protegge ciò che vi mette." },
      { t: "⟦IAM⟧ decides who can do what on which resources, guided by ⟦least privilege⟧.", it: "L’IAM decide chi può fare cosa su quali risorse, guidato dal privilegio minimo." },
      { t: "Three recurring ⟦misconfigurations⟧ cause real incidents, so check them regularly.", it: "Tre errate configurazioni ricorrenti causano incidenti reali, quindi controllale regolarmente." },
      { t: "⟦Security groups⟧ act as virtual firewalls, and ⟦KMS⟧ manages the encryption keys.", it: "I security group fungono da firewall virtuali e il KMS gestisce le chiavi di cifratura." },
      { t: "Without logs you cannot detect or investigate, and ⟦CSPM⟧ tools check configurations continuously.", it: "Senza log non si rileva né si indaga, e gli strumenti CSPM controllano continuamente le configurazioni." },
      { t: "With ⟦serverless⟧ and containers, the provider manages more layers but some duties stay with the customer.", it: "Con serverless e container il provider gestisce più livelli, ma alcuni compiti restano al cliente." },
      { t: "A ⟦multi-account⟧ strategy limits the blast radius of an error or compromise.", it: "Una strategia multi-account limita il raggio d’azione di un errore o di una compromissione." }
    ],
    gloss: [
      { w: "shared responsibility model", it: "modello di responsabilità condivisa" },
      { w: "IAM", it: "gestione di identità e accessi" },
      { w: "least privilege", it: "privilegio minimo" },
      { w: "misconfigurations", it: "errate configurazioni" },
      { w: "Security groups", it: "firewall virtuali delle risorse" },
      { w: "KMS", it: "servizio di gestione delle chiavi" },
      { w: "CSPM", it: "controllo continuo della configurazione cloud" },
      { w: "serverless", it: "funzioni gestite dal provider" },
      { w: "multi-account", it: "più account cloud separati" },
      { w: "blast radius", it: "raggio d’azione di un danno" },
      { w: "provider", it: "fornitore cloud" },
      { w: "audit log", it: "log di audit" }
    ]
  });
  A("cyb-zero-trust-e-identita", {
    title: { t: "Zero trust and identity as the new perimeter", it: "Zero trust e identità come nuovo perimetro" },
    sum: [
      { t: "The classic ⟦castle-and-moat⟧ model trusts everything inside the network, which fails with cloud and remote work.", it: "Il modello classico castello e fossato si fida di tutto ciò che è dentro la rete, e fallisce con cloud e lavoro remoto." },
      { t: "When the network is no longer a border, ⟦identity⟧ becomes the perimeter, supported by ⟦federation⟧ with SSO, SAML and OIDC.", it: "Quando la rete non è più un confine, l’identità diventa il perimetro, sostenuta dalla federazione con SSO, SAML e OIDC." },
      { t: "⟦Conditional access⟧ allows, denies or asks for more proof on each request, using signals such as ⟦device posture⟧.", it: "L’accesso condizionale consente, nega o chiede più prove a ogni richiesta, usando segnali come la postura del dispositivo." },
      { t: "⟦Microsegmentation⟧ splits flat networks into small zones, so one compromised host cannot reach all others.", it: "La microsegmentazione divide le reti piatte in piccole zone, così un host compromesso non raggiunge tutti gli altri." },
      { t: "⟦PAM⟧ and ⟦just-in-time⟧ access protect the most valuable privileged accounts.", it: "PAM e accesso just-in-time proteggono gli account privilegiati, i più preziosi." },
      { t: "⟦Service accounts⟧ and other non-human identities are numerous and need proper secrets management.", it: "Gli account di servizio e le altre identità non umane sono numerosi e richiedono una buona gestione dei segreti." },
      { t: "⟦ZTNA⟧ grants access to single applications, unlike a traditional ⟦VPN⟧ that opens the network.", it: "ZTNA concede l’accesso a singole applicazioni, a differenza di una VPN tradizionale che apre la rete." }
    ],
    gloss: [
      { w: "castle-and-moat", it: "modello castello e fossato" },
      { w: "identity", it: "identità" },
      { w: "federation", it: "federazione di identità" },
      { w: "Conditional access", it: "accesso condizionale" },
      { w: "device posture", it: "postura del dispositivo" },
      { w: "Microsegmentation", it: "microsegmentazione" },
      { w: "PAM", it: "gestione degli accessi privilegiati" },
      { w: "just-in-time", it: "accesso solo quando serve" },
      { w: "Service accounts", it: "account di servizio" },
      { w: "ZTNA", it: "accesso zero trust alla rete" },
      { w: "VPN", it: "rete privata virtuale" },
      { w: "SSO", it: "accesso unico" }
    ]
  });
  A("cyb-memoria-e-mitigazioni", {
    title: { t: "Memory errors and modern mitigations", it: "Errori di memoria e mitigazioni moderne" },
    sum: [
      { t: "Languages like C and C++ give direct control of memory but do not check bounds automatically.", it: "Linguaggi come C e C++ danno il controllo diretto della memoria ma non verificano automaticamente i limiti." },
      { t: "A ⟦buffer overflow⟧ writes more data than a buffer holds, overwriting adjacent memory on the stack or heap.", it: "Un buffer overflow scrive più dati di quanti il buffer ne contenga, sovrascrivendo la memoria adiacente su stack o heap." },
      { t: "In a ⟦use-after-free⟧, a program keeps using a pointer to a block that was already released.", it: "In un use-after-free un programma continua a usare un puntatore a un blocco già liberato." },
      { t: "Such errors can become code execution because data and instructions share memory and some data controls execution.", it: "Questi errori possono diventare esecuzione di codice perché dati e istruzioni convivono in memoria e alcuni dati controllano l’esecuzione." },
      { t: "⟦Stack canaries⟧, ⟦NX⟧ and ⟦ASLR⟧ are standard first mitigations.", it: "Canarini, NX e ASLR sono le prime mitigazioni standard." },
      { t: "⟦CFI⟧, ⟦sanitizers⟧ and ⟦fuzzing⟧ help defenders prevent and find these errors.", it: "CFI, sanitizer e fuzzing aiutano i difensori a prevenire e trovare questi errori." },
      { t: "The most radical step is ⟦memory-safe languages⟧, which avoid the whole class of errors.", it: "Il passo più radicale sono i linguaggi memory-safe, che evitano l’intera classe di errori." }
    ],
    gloss: [
      { w: "buffer overflow", it: "scrittura oltre i limiti di un buffer" },
      { w: "use-after-free", it: "uso di memoria già liberata" },
      { w: "Stack canaries", it: "valori sentinella sullo stack" },
      { w: "NX", it: "memoria non eseguibile" },
      { w: "ASLR", it: "indirizzi di memoria casuali" },
      { w: "CFI", it: "integrità del flusso di controllo" },
      { w: "sanitizers", it: "strumenti che rilevano errori di memoria" },
      { w: "fuzzing", it: "test con input casuali" },
      { w: "memory-safe languages", it: "linguaggi sicuri per la memoria" },
      { w: "stack", it: "pila" },
      { w: "heap", it: "area di memoria dinamica" },
      { w: "pointer", it: "puntatore" }
    ]
  });
  A("cyb-reverse-engineering-concetti", {
    title: { t: "Reverse engineering: concepts for defence", it: "Reverse engineering: concetti per la difesa" },
    sum: [
      { t: "⟦Reverse engineering⟧ analyses a program without its source code, and has defensive and legitimate uses.", it: "Il reverse engineering analizza un programma senza il codice sorgente e ha usi difensivi e legittimi." },
      { t: "A compiled program goes from ⟦source code⟧ to ⟦assembly⟧ to machine code.", it: "Un programma compilato passa da codice sorgente ad assembly e poi a codice macchina." },
      { t: "Reading ⟦x86-64⟧ needs only a few concepts, such as registers and the ⟦stack frame⟧.", it: "Leggere x86-64 richiede pochi concetti, come i registri e lo stack frame." },
      { t: "Conditional flow is made of a comparison followed by a jump, shown with a harmless example.", it: "Il flusso condizionale è fatto da un confronto seguito da un salto, mostrato con un esempio innocuo." },
      { t: "Static analysis tools help, and ⟦symbols⟧ may be missing when a binary is ⟦stripped⟧.", it: "Gli strumenti di analisi statica aiutano e i simboli possono mancare quando un binario è privato dei simboli." },
      { t: "⟦Obfuscation⟧ makes code harder to analyse without changing its function.", it: "L’offuscamento rende il codice più difficile da analizzare senza cambiarne la funzione." },
      { t: "Reverse engineering is lawful in many contexts but not everywhere, so check the legal and ethical limits.", it: "Il reverse engineering è lecito in molti contesti ma non ovunque, quindi verifica i limiti legali ed etici." }
    ],
    gloss: [
      { w: "Reverse engineering", it: "analisi di un programma senza sorgente" },
      { w: "source code", it: "codice sorgente" },
      { w: "assembly", it: "linguaggio assembly" },
      { w: "x86-64", it: "architettura dei processori a 64 bit" },
      { w: "stack frame", it: "blocco dello stack di una funzione" },
      { w: "symbols", it: "nomi di funzioni e variabili" },
      { w: "stripped", it: "privo di simboli" },
      { w: "Obfuscation", it: "offuscamento" },
      { w: "machine code", it: "codice macchina" },
      { w: "register", it: "registro del processore" },
      { w: "disassembler", it: "strumento che mostra l’assembly" },
      { w: "jump", it: "salto" }
    ]
  });
  A("cyb-mobile-iot-e-ot", {
    title: { t: "Security of mobile, IoT and industrial systems", it: "Sicurezza di mobile, IoT e sistemi industriali" },
    sum: [
      { t: "Android and iOS start from a stricter model than desktop systems, based on ⟦sandboxing⟧ and ⟦permissions⟧.", it: "Android e iOS partono da un modello più rigido dei sistemi desktop, basato su sandboxing e permessi." },
      { t: "Official ⟦app stores⟧ apply checks, while ⟦sideloading⟧ bypasses them and adds risk.", it: "Gli store ufficiali applicano controlli, mentre il sideloading li aggira e aumenta il rischio." },
      { t: "⟦MDM⟧ manages company devices and BYOD centrally.", it: "L’MDM gestisce centralmente i dispositivi aziendali e BYOD." },
      { t: "⟦IoT⟧ devices often have limited resources and typical weaknesses such as weak default credentials.", it: "I dispositivi IoT hanno spesso risorse limitate e debolezze tipiche come credenziali predefinite deboli." },
      { t: "Manufacturers should use secure by design and ⟦signed firmware⟧.", it: "I produttori dovrebbero usare la progettazione sicura e un firmware firmato." },
      { t: "⟦OT⟧ and ⟦ICS⟧ control physical processes, so availability comes first.", it: "OT e ICS comandano processi fisici, quindi la disponibilità viene prima." },
      { t: "The ⟦Purdue model⟧ organises industrial networks in levels and guides segmentation.", it: "Il modello Purdue organizza le reti industriali in livelli e guida la segmentazione." }
    ],
    gloss: [
      { w: "sandboxing", it: "isolamento delle app" },
      { w: "permissions", it: "permessi delle app" },
      { w: "app stores", it: "negozi di app" },
      { w: "sideloading", it: "installazione fuori dallo store" },
      { w: "MDM", it: "gestione dei dispositivi mobili" },
      { w: "IoT", it: "Internet delle cose" },
      { w: "signed firmware", it: "firmware firmato" },
      { w: "OT", it: "tecnologia operativa" },
      { w: "ICS", it: "sistemi di controllo industriale" },
      { w: "Purdue model", it: "modello a livelli per reti industriali" },
      { w: "BYOD", it: "dispositivo personale usato per lavoro" },
      { w: "PLC", it: "controllore logico programmabile" }
    ]
  });
  A("cyb-gestione-vulnerabilita-e-cvss", {
    title: { t: "Vulnerability management and CVSS", it: "Gestione delle vulnerabilità e CVSS" },
    sum: [
      { t: "A ⟦vulnerability⟧ is a weakness that can be exploited, and managing them is a continuous life cycle.", it: "Una vulnerabilità è una debolezza sfruttabile e gestirle è un ciclo continuo." },
      { t: "⟦CVE⟧ identifies a specific flaw, ⟦CWE⟧ classifies a type of weakness, and ⟦CVSS⟧ scores severity.", it: "La CVE identifica una falla specifica, la CWE classifica un tipo di debolezza e il CVSS ne valuta la gravità." },
      { t: "CVSS 3.1 describes a vulnerability by itself, without context, through eight ⟦base metrics⟧.", it: "Il CVSS 3.1 descrive una vulnerabilità in sé, senza contesto, tramite otto metriche di base." },
      { t: "A worked calculation shows how a ⟦vector⟧ turns into a ⟦base score⟧.", it: "Un calcolo svolto mostra come un vettore diventa un punteggio base." },
      { t: "The same method gives very different results for other examples, so learn to read the vector.", it: "Lo stesso metodo dà esiti molto diversi in altri esempi, quindi impara a leggere il vettore." },
      { t: "Prioritise beyond the score, using context, ⟦exploitability⟧ and ⟦asset criticality⟧.", it: "Dai priorità oltre il punteggio, usando contesto, sfruttabilità e criticità dell’asset." },
      { t: "Management sets ⟦SLAs⟧ for fixing, and exceptions require formal ⟦risk acceptance⟧.", it: "Il management fissa SLA per la correzione, e le eccezioni richiedono un’accettazione formale del rischio." }
    ],
    gloss: [
      { w: "vulnerability", it: "vulnerabilità" },
      { w: "CVE", it: "identificatore di una falla nota" },
      { w: "CWE", it: "classificazione dei tipi di debolezza" },
      { w: "CVSS", it: "sistema di punteggio della gravità" },
      { w: "base metrics", it: "metriche di base" },
      { w: "vector", it: "vettore CVSS" },
      { w: "base score", it: "punteggio base" },
      { w: "exploitability", it: "sfruttabilità" },
      { w: "asset criticality", it: "criticità dell’asset" },
      { w: "SLAs", it: "tempi massimi di rimedio concordati" },
      { w: "risk acceptance", it: "accettazione del rischio" },
      { w: "remediation", it: "rimedio" }
    ]
  });
  A("cyb-rischio-quantitativo", {
    title: { t: "Quantitative risk: SLE, ARO and ALE", it: "Rischio quantitativo: SLE, ARO e ALE" },
    sum: [
      { t: "Risk combines the likelihood of something harmful with its impact, starting from three elements.", it: "Il rischio combina la probabilità di un evento dannoso con il suo impatto, partendo da tre elementi." },
      { t: "First estimate the ⟦asset value⟧ and the ⟦exposure factor⟧, which give the ⟦SLE⟧.", it: "Prima si stimano il valore dell’asset e l’exposure factor, che danno la SLE." },
      { t: "The ⟦ARO⟧ is the expected number of events per year, and ALE = SLE × ARO.", it: "L’ARO è il numero atteso di eventi all’anno e ALE = SLE × ARO." },
      { t: "A control makes sense if it reduces ⟦ALE⟧ by more than it costs, so compare before and after.", it: "Un controllo ha senso se riduce l’ALE più di quanto costa, quindi si confronta prima e dopo." },
      { t: "After controls the ⟦residual risk⟧ remains, and you choose among treatment options.", it: "Dopo i controlli resta il rischio residuo e si sceglie tra le opzioni di trattamento." },
      { t: "The ⟦risk register⟧ is the living document that collects every risk and decision.", it: "Il registro dei rischi è il documento vivo che raccoglie ogni rischio e decisione." },
      { t: "⟦FAIR⟧ breaks risk into measurable factors, but numbers are estimates with limits.", it: "FAIR scompone il rischio in fattori misurabili, ma i numeri sono stime con dei limiti." }
    ],
    gloss: [
      { w: "asset value", it: "valore dell’asset" },
      { w: "exposure factor", it: "percentuale di valore persa" },
      { w: "SLE", it: "perdita per singolo evento" },
      { w: "ARO", it: "eventi attesi all’anno" },
      { w: "ALE", it: "perdita annua attesa" },
      { w: "residual risk", it: "rischio residuo" },
      { w: "risk register", it: "registro dei rischi" },
      { w: "FAIR", it: "modello di analisi quantitativa del rischio" },
      { w: "cost-benefit", it: "costo-beneficio" },
      { w: "inherent risk", it: "rischio inerente" },
      { w: "estimate", it: "stima" },
      { w: "control", it: "controllo" }
    ]
  });
  A("cyb-framework-e-conformita", {
    title: { t: "Frameworks, standards and compliance", it: "Framework, standard e conformità" },
    sum: [
      { t: "This is educational content, not legal advice, because rules change and depend on sector and size.", it: "Questo è un contenuto educativo e non consulenza legale, perché le norme cambiano e dipendono da settore e dimensione." },
      { t: "⟦ISO/IEC 27001⟧ sets requirements for an ⟦ISMS⟧, and 27002 describes controls.", it: "ISO/IEC 27001 definisce i requisiti di un ISMS e la 27002 descrive i controlli." },
      { t: "The ⟦NIST CSF⟧ is a voluntary framework with six functions, and ⟦CIS Controls⟧ give practical priorities.", it: "Il NIST CSF è un framework volontario con sei funzioni e i CIS Controls danno priorità pratiche." },
      { t: "⟦SOC 2⟧ is an attestation report by an independent auditor on a provider’s controls.", it: "SOC 2 è un rapporto di attestazione di un revisore indipendente sui controlli di un fornitore." },
      { t: "The ⟦GDPR⟧ protects personal data, and security staff must know its key points.", it: "Il GDPR tutela i dati personali e chi si occupa di sicurezza ne deve conoscere i punti chiave." },
      { t: "The ⟦NIS2⟧ directive aims at a high common level of cybersecurity in the EU.", it: "La direttiva NIS2 mira a un livello comune elevato di cibersicurezza nell’UE." },
      { t: "An ⟦audit⟧ and an ⟦assessment⟧ differ, and compliance does not by itself mean real security.", it: "Un audit e un assessment sono diversi, e la conformità non coincide da sola con la sicurezza reale." }
    ],
    gloss: [
      { w: "ISO/IEC 27001", it: "standard per i sistemi di gestione della sicurezza" },
      { w: "ISMS", it: "sistema di gestione della sicurezza delle informazioni" },
      { w: "NIST CSF", it: "framework di cibersicurezza del NIST" },
      { w: "CIS Controls", it: "controlli prioritari del CIS" },
      { w: "SOC 2", it: "attestazione sui controlli del fornitore" },
      { w: "GDPR", it: "regolamento UE sui dati personali" },
      { w: "NIS2", it: "direttiva UE sulla cibersicurezza" },
      { w: "audit", it: "verifica formale" },
      { w: "assessment", it: "valutazione" },
      { w: "compliance", it: "conformità" },
      { w: "framework", it: "quadro di riferimento" },
      { w: "standard", it: "standard" }
    ]
  });
  A("cyb-test-di-penetrazione-autorizzati", {
    title: { t: "Authorised penetration testing and ethical practice", it: "Test di penetrazione autorizzati e pratica etica" },
    sum: [
      { t: "A ⟦penetration test⟧ is an authorised, agreed and time-limited security check by professionals.", it: "Un test di penetrazione è una verifica di sicurezza autorizzata, concordata e limitata nel tempo, svolta da professionisti." },
      { t: "The ⟦red team⟧ simulates attackers, the ⟦blue team⟧ defends, and the ⟦purple team⟧ combines the two.", it: "Il red team simula gli attaccanti, il blue team difende e il purple team unisce i due." },
      { t: "Before any activity, define in writing the ⟦scope⟧, the ⟦rules of engagement⟧ and the ⟦authorisation letter⟧.", it: "Prima di ogni attività si definiscono per iscritto il perimetro, le regole d’ingaggio e la lettera di autorizzazione." },
      { t: "Public ⟦methodologies⟧ give structure and repeatability, described here only conceptually.", it: "Le metodologie pubbliche danno struttura e ripetibilità, descritte qui solo a livello concettuale." },
      { t: "A good ⟦report⟧ is understandable and useful, with levels for management and technical readers.", it: "Un buon report è comprensibile e utile, con livelli per la direzione e per i lettori tecnici." },
      { t: "⟦Bug bounty⟧ programmes and ⟦responsible disclosure⟧ offer legal ways to report flaws.", it: "I programmi bug bounty e la divulgazione responsabile offrono modi legali per segnalare falle." },
      { t: "Practise only in environments where you have the right to test.", it: "Esercitati solo in ambienti in cui hai il diritto di fare prove." }
    ],
    gloss: [
      { w: "penetration test", it: "test di penetrazione" },
      { w: "red team", it: "squadra che simula l’attacco" },
      { w: "blue team", it: "squadra di difesa" },
      { w: "purple team", it: "collaborazione red-blue" },
      { w: "scope", it: "perimetro" },
      { w: "rules of engagement", it: "regole d’ingaggio" },
      { w: "authorisation letter", it: "lettera di autorizzazione" },
      { w: "methodologies", it: "metodologie" },
      { w: "report", it: "relazione finale" },
      { w: "Bug bounty", it: "ricompense per segnalazioni" },
      { w: "responsible disclosure", it: "divulgazione responsabile" },
      { w: "finding", it: "risultato, problema trovato" }
    ]
  });
  A("cyb-architettura-sicura-e-difesa-in-profondita", {
    title: { t: "Secure architecture and defence in depth", it: "Architettura sicura e difesa in profondità" },
    sum: [
      { t: "⟦Defence in depth⟧ uses several independent layers of controls, so the failure of one is not enough.", it: "La difesa in profondità usa più livelli indipendenti di controlli, così il cedimento di uno non basta." },
      { t: "Classic ⟦design principles⟧ from systems security studies are still valid today.", it: "I classici principi di progettazione dagli studi sulla sicurezza dei sistemi sono ancora validi." },
      { t: "A ⟦reference architecture⟧ is a proven model to adapt, and ⟦segmentation⟧ limits movement inside the network.", it: "Un’architettura di riferimento è un modello collaudato da adattare e la segmentazione limita i movimenti nella rete." },
      { t: "⟦Secrets⟧ such as passwords, API keys and tokens are delicate assets that need proper key management.", it: "I segreti come password, chiavi API e token sono asset delicati che richiedono una buona gestione delle chiavi." },
      { t: "⟦Resilience⟧ means continuing to work, degrading gracefully and recovering after a failure or attack.", it: "La resilienza è la capacità di continuare a funzionare, degradare con grazia e riprendersi dopo un guasto o un attacco." },
      { t: "Security starts from ⟦requirements⟧ and involves ⟦trade-offs⟧, not from a list of products.", it: "La sicurezza parte dai requisiti e comporta compromessi, non da un elenco di prodotti." },
      { t: "A ⟦design review⟧ checklist checks an architecture before it is built, when fixing is cheaper.", it: "Una checklist di revisione del progetto controlla un’architettura prima della realizzazione, quando correggere costa meno." }
    ],
    gloss: [
      { w: "Defence in depth", it: "difesa in profondità" },
      { w: "design principles", it: "principi di progettazione" },
      { w: "reference architecture", it: "architettura di riferimento" },
      { w: "segmentation", it: "segmentazione" },
      { w: "Secrets", it: "segreti" },
      { w: "Resilience", it: "resilienza" },
      { w: "requirements", it: "requisiti" },
      { w: "trade-offs", it: "compromessi" },
      { w: "design review", it: "revisione del progetto" },
      { w: "key management", it: "gestione delle chiavi" },
      { w: "least privilege", it: "privilegio minimo" },
      { w: "fail safe", it: "guasto sicuro" }
    ]
  });
  A("cyb-continuita-operativa-e-crisi", {
    title: { t: "Business continuity, crisis and security culture", it: "Continuità operativa, crisi e cultura della sicurezza" },
    sum: [
      { t: "Serious incidents happen, so ⟦BCP⟧ keeps the business running and ⟦DR⟧ restores systems.", it: "Gli incidenti gravi capitano, quindi il BCP mantiene attiva l’attività e il DR ripristina i sistemi." },
      { t: "The ⟦BIA⟧ establishes which processes are critical and how much an interruption costs.", it: "La BIA stabilisce quali processi sono critici e quanto costa la loro interruzione." },
      { t: "The BIA also sets ⟦RTO⟧, ⟦RPO⟧ and ⟦MTD⟧, which can be worked out with numbers.", it: "La BIA fissa anche RTO, RPO e MTD, che si possono calcolare con i numeri." },
      { t: "Service agreements express ⟦availability⟧ as a percentage, and small differences matter a lot.", it: "Gli accordi di servizio esprimono la disponibilità in percentuale e piccole differenze contano molto." },
      { t: "In a ⟦crisis⟧ people decide fast with incomplete information, so prepare communication in advance.", it: "In una crisi si decide in fretta con informazioni incomplete, quindi la comunicazione va preparata in anticipo." },
      { t: "An untested plan is only a hypothesis, so run ⟦exercises⟧ and assess ⟦third-party risk⟧.", it: "Un piano mai provato è solo un’ipotesi, quindi fai esercitazioni e valuta il rischio dei fornitori." },
      { t: "Choose a few clear ⟦metrics⟧ for management, and build a ⟦security culture⟧.", it: "Scegli poche metriche chiare per il management e costruisci una cultura della sicurezza." }
    ],
    gloss: [
      { w: "BCP", it: "piano di continuità operativa" },
      { w: "DR", it: "ripristino dopo un disastro" },
      { w: "BIA", it: "analisi dell’impatto sull’attività" },
      { w: "RTO", it: "tempo massimo di ripristino" },
      { w: "RPO", it: "perdita massima di dati accettata" },
      { w: "MTD", it: "tempo massimo di interruzione tollerabile" },
      { w: "availability", it: "disponibilità" },
      { w: "crisis", it: "crisi" },
      { w: "exercises", it: "esercitazioni" },
      { w: "third-party risk", it: "rischio dei fornitori" },
      { w: "metrics", it: "metriche" },
      { w: "security culture", it: "cultura della sicurezza" }
    ]
  });
})(window.ST = window.ST || {});
