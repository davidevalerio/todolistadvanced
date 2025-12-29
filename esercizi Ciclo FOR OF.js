// Esercizio 1

const num = [ 1, 2, 3, 4, 5];

for (let i of num) {
    console.log(i);
}

// Esercizio 2

const str = "Ciao Francone";

for (let lettera of str) {
    console.log(lettera);
}

// Esercizio 3

const numeri = [ 1, 2, 3, 4, 5];
let somma = 0;

for (let n of numeri) {
    console.log(somma += n);
}

// Esercizio 4

const numeri = [1, 2, 3, 4, 5];

for (let n of numeri) {
    if (n % 2 === 0) {
    }
}

console.log(n);


// Esercizio 5

const str = [ "Ciao", "Marzullo", "Come", "stai?"];
let frase = "";

for (let word of str) {
    frase += word + " ";
}

console.log(frase);

// Esercizio 6

const num = [1, 2, 3, 4, 5];
let massimo = num[0];

for (let n of num) {
    if (n > massimo) {
        massimo = n;
    }
}

console.log(massimo);

// Esercizio 7

const str = "Ciao Spencer";
let invertStr = "";

for (let letter of str) {
    invertStr = letter + invertStr;
}

console.log(invertStr);