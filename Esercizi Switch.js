const numGiorno = 4;
let giornoSettimana;

switch (numGiorno) {
    case 1:
        giornoSettimana = "Lunedi";
        break;
    case 2:
        giornoSettimana = "Martedi";
        break;
    case 3:
        giornoSettimana = "Mercoledi";
        break;
    case 4:
        giornoSettimana = "Giovedi";
        break;
    case 5:
        giornoSettimana = "Venerdi";
        break;
    case 6:
        giornoSettimana = "Sabato";
        break;
    case 7:
        giornoSettimana = "Domenica";
        break;
    default:
        giornoSettimana = "Numero giorno non valido";
}

console.log(giornoSettimana);

// Esercizio 2

const veicolo = "A";
let tipoVeicolo;

switch (veicolo) {
    case "A":
        tipoVeicolo = "Automobile";
        break;
    case "M":
        tipoVeicolo = "Motocicletta";
        break;
    case "B":
        tipoVeicolo = "Bicicletta";
        break;
    case "T":
        tipoVeicolo = "Triciclo";
        break;
    default:
        tipoVeicolo = "Veicolo non esistente";
}

console.log(tipoVeicolo);

// Esercizio 3

const mese = 12;
let stagione;

switch (mese) {
    case 1:
    case 2:
    case 3:
        stagione = "Inverno";
        break;
    case 4:
    case 5:
    case 6:
        stagione = "Primavera";
        break;
    case 7:
    case 8:
    case 9:
        stagione = "Estate";
        break;
    case 10:
    case 11:
    case 12:
        stagione = "Autunno";
        break;
    default:
        stagione = "Zi ma che cazzo fai"
}

console.log(stagione);

// Esercizio 4

const num = 2;
let giornoLavorativo;

switch (num) {
    case 1:
        giornoLavorativo = "Lunedio";
        break;
    case 2:
        giornoLavorativo = "Martedio";
        break;
    case 3:
        giornoLavorativo = "Mercoledio";
        break;
    case 4:
        giornoLavorativo = "Giovedio";
        break;
    case 5:
        giornoLavorativo = "Venerdio";
        break;
    default:
        giornoLavorativo = "Ma che azz";
}

console.log(giornoLavorativo);

// Esercizio 5

const num = 1;
let mese;

switch (num) {
    case 1:
        mese = "Gennaio";
        break;
    case 2:
        mese = "Febbraio";
        break;
    case 3:
        mese = "Marzo";
        break;
    case 4:
        mese = "Aprile";
        break;
    case 5:
        mese = "Maggio";
        break;
    case 6:
        mese = "Giugno";
        break;
    case 7:
        mese = "Luglio";
        break;
    case 8:
        mese = "Agosto";
        break;
    case 9:
        mese = "Settembre";
        break;
    case 10:
        mese = "Ottobre";
        break;
    case 11:
        mese = "Novembre";
        break;
    case 12:
        mese = "Dicembre";
        break;
    default:
        mese = "Errore";
        break
}

console.log (mese);

// Esercizio 6 DIFFICILE

const latoA = 15;
const latoB = 13;
const latoC = 13;

let tipoTriangolo;

switch (true) {
    case latoA === latoB && latoB === latoC:
        tipoTriangolo = "Equilatero";
        break;
    case latoA === latoB || latoB ===latoC || latoA === latoC:
        tipoTriangolo = "Isoscele";
        break;
    default:
        tipoTriangolo = "Scaleno";
}

console.log(tipoTriangolo);

// Esercizio 6 Evoluzione

const latoA = 15;
const latoB = 13;
const latoC = 0;

let tipoTriangolo;

switch (true) {
    case latoA <= 0 || latoB <= 0 || latoC <= 0:
        tipoTriangolo = "Non e' un triangolo. Un lato non puo essere Zero o negativo";
        break;
    case latoA + latoB <= latoC || latoB + latoC <= latoA || latoA + latoC <= latoB:
        tipoTriangolo = "Non e' un triangolo. La somma di due lati non puo essere uguale o superiore al terzo lato";
        break;
    case latoA === latoB && latoB === latoC:
        tipoTriangolo = "Equilatero";
        break;
    case latoA === latoB || latoB === latoC || latoA === latoC:
        tipoTriangolo = "Isoscele";
        break;
    default:
        tipoTriangolo = "Scaleno";
        break;
}

console.log(tipoTriangolo);

// Esercizio 7

const num = 5235;
let punteggio;

switch (true) {
    case num >= 90:
        punteggio = "A";
        break;
    case num >= 80:
        punteggio = "B";
        break;
    case num >= 70:
        punteggio = "C";
        break;
    case num >= 60:
        punteggio = "D";
        break;
    default:
        punteggio = "Sei stato steccato, brate."
}

console.log(punteggio);

// Esercizio 8

const language = "es";
let messaggio;

switch (language) {
    case "en":
        messaggio = `Welcome`;
        break;
    case "it":
        messaggio = `Benvenuto`;
        break;
    case "es":
        messaggio = `Bienvenido`
}

console.log(messaggio);

// Esercizio gemini: Calcolatore di tariffe Parcheggio

function calcolaTariffa(veicolo) {
    let tipo = veicolo.toLowerCase();

    switch (tipo) {
        case "moto":
            return "1.50 $";
        case "auto":
            return "2.50 $";
        case "furgone":
            return "4.00 $";
        default:
            return "Veicolo non autorizzato";
    }
}

console.log(calcolaTariffa("moto"));    // Deve dare 1.50
console.log(calcolaTariffa("AUTO"));    // Deve dare 2.50
console.log(calcolaTariffa("astronave")); // Deve dare "Veicolo non autorizzato"

// Esercizio gemini: Switch Range

function applicaSconto(ore) {
    const tariffa = 2.50;
    let totaleGrezzo = ore * tariffa;

    switch (true) {
        case (ore === 1):
            return `Totale: ${totaleGrezzo} $.`;
        case (ore >= 2 && ore <= 4):
            return `Sconto applicato del 10%. Totale: ${totaleGrezzo - totaleGrezzo * 10/100} $.`;
        case (ore > 4):
            return `Sconto applicato del 20%. Totale: ${totaleGrezzo - totaleGrezzo * 20/100} $.`;
        default:
            return `Nessun errore`
    }
}

console.log(applicaSconto(6));
console.log(applicaSconto(1));
console.log(applicaSconto(3));

// Esercizio gemini:

function valutaEsame(punteggio) {
    switch(true) {
        case (punteggio >= 90 && punteggio <=100):
            return `Giudizio: Eccellente, Colore: Verde.`;
        case (punteggio >= 70 && punteggio <= 89):
            return `Giudizio: Buono, Colore: Blu.`;
        case (punteggio >= 60 && punteggio <= 69):
            return `Giudizio: Sufficiente, Colore: Giallo.`;
        case (punteggio >= 0 && punteggio <= 59):
            return `Giudizio: Insufficiente, Colore: Rosso.`;
        default:
            return `Punteggio non valido.`
    }
}

console.log(valutaEsame(95)); // Eccellente - Verde
console.log(valutaEsame(75)); // Buono - Blu
console.log(valutaEsame(50)); // Insufficiente - Rosso
console.log(valutaEsame(110)); // Punteggio non valido