// Esempio Gemini

function caricaUtente(nome, callback) {
    console.log("Caricamento utente in corso...");
    //Simuliamo un ritardo
    setTimeout(() => {
        console.log(`Utente ${nome} caricato.`);
        callback(nome); // Questa è la chiamata alla funzione di callback
    }, 2000);
}

function saluta(nome) {
    console.log(`Ciao ${nome}!`);
}

// Passiamo 'saluta' come callback
caricaUtente("Mario", saluta)

// Esempio Gemini su Notion

// Questa funzione accetta una callback chiamata 'alTermine'
function cuociPasta(tipo, callbackAlTermine) {
  console.log("Inizio a cuocere: " + tipo + "...");
  
  // Usiamo setTimeout per simulare il tempo di cottura (3 secondi)
  setTimeout(() => {
    console.log("La cottura di " + tipo + " è terminata!");
    // Ora eseguiamo la callback passata come argomento
    callbackAlTermine(); 
  }, 3000);
}

// Definiamo cosa vogliamo fare al termine (la nostra callback)
function scolaECondisci() {
  console.log("Sto scolando la pasta e aggiungendo il sugo. Buon appetito!");
}

// Eseguiamo la funzione passante la callback
cuociPasta("Spaghetti", scolaECondisci);

console.log("Nel frattempo, apparecchio la tavola...");

// Esercizio 1

function eseguiCallBack(callback) {
    callback();
}

function mioCallBack() {
    console.log("Eseguo il callback");
}

eseguiCallBack(mioCallBack);

// Esercizio 2 Definire una funzione che accetta un valore e un callback, e richiama il callback passando il valore come argomento:

function utilizzaCallback(valore, callback) {
    callback(valore);
}

function mioCallBack(valore) {
    console.log(`Valore ricevuto: ${valore}`);
}

utilizzaCallback(42, mioCallBack);

// Esercizio 3 Simulare una chiamata asincrona utilizzando un setTimeout e un callback:

function chiamataAsincrona(callback) {
    setTimeout(function () {
        callback("Risposta alla chiamata asincrona");
    }, 2000);
}

function mioCallBack(risposta) {
    console.log(`Risposta ricevuta: ${risposta}`);
}

chiamataAsincrona(mioCallBack);

// Esercizio 4 Definire una funzione che accetta un array e un callback, e richiama il callback per ogni elemento dell'array:

function elaboraArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function mioCallBack(elemento) {
    console.log("Elemento:", elemento);
}

const array = [1, 2, 3, 4, 5];
elaboraArray(array, mioCallBack);

// Esercizio 5 Utilizzare un callback per ordinare un array di oggetti:

const persone = [
    { nome: "Alice", eta: 48},
    { nome: "Franco", eta: 54},
    { nome: "Spensa", eta: 12},
];

function confrontaEta(a, b) {
    return a.eta - b.eta;
}

persone.sort(confrontaEta);

console.log(persone);

// Esercizio 6 Utilizzare un callback per filtrare gli elementi di un array:

const numeri = [1, 2, 3, 4, 5];

function filtraPari(numero) {
    return numero % 2 === 0;
}

const numeriPari = numeri.filter(filtraPari);

console.log(numeriPari);

// Esercizio 7 Utilizzare un callback per calcolare la somma degli elementi di un array:

const numeri = [1, 2, 3, 4, 5];

function sommaElementi(total, numero) {
  return total + numero;
}

const somma = numeri.reduce(sommaElementi, 0);

console.log("Somma:", somma);

// Esercizio 8 Utilizzare un callback per mappare gli elementi di un array a nuovi valori:

const numeri = [1, 2, 3, 4, 5];

function raddoppia(numero) {
  return numero * 2;
}

const numeriRaddoppiati = numeri.map(raddoppia);

console.log(numeriRaddoppiati);

// Esercizio 9 Utilizzare un callback per eseguire un'azione su ogni carattere di una stringa:

const stringa = "Hello, world!";

function stampaCarattere(carattere) {
  console.log(carattere);
}

Array.from(stringa).forEach(stampaCarattere);

// Esercizio 10 Utilizzare un callback per simulare la gestione degli errori in una finta chiamata asincrona:

function eseguiChiamata(callbackSuccesso, callbackErrore) {
  // Simulazione di una chiamata asincrona
  const esito = Math.random() < 0.5;

  if (esito) {
    callbackSuccesso("Chiamata riuscita");
  } else {
    callbackErrore("Errore durante la chiamata");
  }
}

function callbackSuccesso(risposta) {
  console.log("Successo:", risposta);
}

function callbackErrore(errore) {
  console.error("Errore:", errore);
}

eseguiChiamata(callbackSuccesso, callbackErrore);

// Esercizio Gemini

function preparaMessaggio(testo, callback) {
    const messaggioPronto = `Messaggio: ${testo}`;

    // Qui il motore usa la callback che gli abbiamo dato.
    // Gli passa il messaggio pronto.
    callback(messaggioPronto);
}

function mostraLunghezza(stringaRicevuta) {
    console.log(`La lunghezza e': ${stringaRicevuta.length}`);
}

preparaMessaggio("Ciao Gemini", mostraLunghezza);

// Esercizio Gemini 2

function autenticazione(nomeUtente, password, callback) {
    // SCRIVI QUI LA LOGICA
    // 1. Controlla la password
    // 2. Chiama la callback passandogli il messaggio giusto
    if (password === "12345") {
        callback(`Accesso Consentito per l'utente: ${nomeUtente}`);
    } else {
        callback(`Accesso Negato!`)
    }
}

function stampaEsito(messaggio) {
    // SCRIVI QUI COME VUOI STAMPARE IL MESSAGGIO
    console.log(`Esito controllo --- ${messaggio}`)
}

// ESECUZIONE (Fai delle prove)
autenticazione("Luigi", "12345", stampaEsito); // Dovrebbe stampare accesso consentito
autenticazione("Marco", "passwordSbagliata", stampaEsito); // Dovrebbe stampare accesso negato

// Esercizio Gemini 3

function applicaSconto(prezzoTotale, percentualeSconto, callback) {
    // 1. Calcola il risparmio (prezzoTotale * percentualeSconto / 100)
    // 2. Calcola il prezzo finale
    // 3. Chiama la callback passandogli ENTRAMBI i valori
    const risparmio = prezzoTotale * percentualeSconto / 100;
    const prezzoFinale = prezzoTotale - risparmio;

    callback(prezzoFinale, risparmio);
}

function stampaScontrino(totale, scontoFinale) {
    // Stampa il messaggio finale
    console.log(`Hai pagato ${totale} $. Hai risparmiato ${scontoFinale}$!`);
}

// ESECUZIONE
applicaSconto(100, 20, stampaScontrino);
// Dovrebbe stampare: Hai pagato 80€. Hai risparmiato 20€!

// Questa funzione accetta una callback chiamata 'alTermine'
function cuociPasta(tipo, callbackAlTermine) {
  console.log("Inizio a cuocere: " + tipo + "...");
  
  // Usiamo setTimeout per simulare il tempo di cottura (3 secondi)
  setTimeout(() => {
    console.log("La cottura di " + tipo + " è terminata!");
    // Ora eseguiamo la callback passata come argomento
    callbackAlTermine(); 
  }, 3000);
}

// Definiamo cosa vogliamo fare al termine (la nostra callback)
function scolaECondisci() {
  console.log("Sto scolando la pasta e aggiungendo il sugo. Buon appetito!");
}

// Eseguiamo la funzione passante la callback
cuociPasta("Spaghetti", scolaECondisci);

console.log("Nel frattempo, apparecchio la tavola...");