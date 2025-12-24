// Esercizio 1

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Esercizio 2

const num = parseInt(prompt("Scrivi un numero"));
let somma = 0;

for (let i = 0; i <= num; i++) {
    somma += i;
}

console.log(somma);

// Esercizio 3

for ( let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Esercizio 4

const num = parseInt(prompt("Scrivi un numero"));
let fattoriale = 1;

for (let i = 1; i <= num; i++) {
    fattoriale *= i;
}

console.log(fattoriale);

// Esercizio 5

const str = prompt("Scrivi una stringa");
const num = parseInt(prompt("Scrivi un numero"));
let risultato = "";

for (let i = 0; i <= num; i++) {
    risultato += str;
}

console.log(risultato);

// Esercizio 6

const num = parseInt(prompt("Scrivi un numero"));

for (let i = 1; i <= num; i++) {
    let riga = "";

    for (let y = 1; y <= i; y++) {
        riga += "*"
    }
    console.log(riga);
}

// Esercizio 7

const numeri = [ 1, 2, 4, 5];
let somma = 0;

for ( let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}

const media = somma / numeri.length;
console.log(media);

// Esercizio 8

const str = prompt("Scrivi una parola");

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// Esercizio gemini 1
 const str = "CIAO";

 for (let i = 1; i < str.length; i += 2) {
    console.log(str[i])
 }

 // esercizio gemini 2

 const str = "CIAO";

 for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
 }

 // esercizio gemini 3

const num = parseInt(prompt("Scrivi un numero"));

for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(`${i} e' un numero pari`);
    } else {
        console.log(`${i} e' un numero dispari`);
    }
}

// esercizio gemini 4

const str = "BANANA";
let conteggio = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
        conteggio++;
    }
}

console.log(`Nella parola ${str} ci sono ${conteggio} A`);

// Esercizio gemini 5

const str = "BANANA";
let risultato = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] !== "A") {
        risultato += str[i];
    }
}

console.log(risultato);

// Esercizio gemini 6

const str = "BANANA";
let risultato = "";

for (let i = 0; i < str.length; i++) {
    if (!"AEIOU".includes(str[i])) {
        risultato += str[i];
    }
}

console.log(risultato);