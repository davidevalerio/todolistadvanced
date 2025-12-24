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