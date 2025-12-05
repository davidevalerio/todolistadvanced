// Esercizio 1

const num1 = -7;

// if (num1 > 0) {
//     console.log(`Il numero e' positivo.`);
// } else {
//     console.log(`Il numero e' negativo.`);
// }

const risultato = num1 >= 0 ? "positivo" : "negativo";

// Esercizio 2

const num1 = 66;

const risultato = num1 % 2 === 0 ? "pari" : "dispari";

console.log(risultato);

// Esercizio 3

const str1 = "Franco";

const risultato = str1.length === 0 ? "vuota" : "non vuota" 
console.log(risultato);

// Esercizio 4

const prezzoOriginale = 67;
const scontoApplicato = 50;

const prezzoFinale = scontoApplicato > 0 ? prezzoOriginale - (prezzoOriginale * scontoApplicato) / 100 : prezzoOriginale;
console.log(prezzoFinale);

// Esercizio 5

const num1 = 0;

const risultato = num1 > 0 ? "Maggiore di zero" : num1 < 0 ? "Minore di Zero" : "Uguale a zero";
console.log(risultato);

// Esercizio 6

const num1 = 7;
const num2 = 7;

const divisibile = num1 % num2 === 0 ? "Si divisibile" : "Non divisibile";
console.log(divisibile);

// Esercizio 7

let variabile;

const risultato = typeof variabile !== "undefined" ? "definita" : "non definita";
console.log(risultato);

// Esercizio 8

const num1 = 2;
const interMin = 4;
const interMax = 90;

const risultato = num1 >= interMin && num1 <= interMax ? "Compreso" : "Non compreso";
console.log(risultato);

// Esercizio 9

const variabile = 545;

const risultato = typeof variabile === "string" ? "Stringa" : typeof variabile === "number" ? "Numerone" : "Altro";

console.log(risultato);

// Esercizio 10

const variabile = true;

const risultato = variabile === true ? "vera" : "falsa";

console.log(risultato);