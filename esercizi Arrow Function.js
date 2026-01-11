// Esercizio 1

const somma = (a, b) => a + b;
console.log(somma(5, 2))

// Esercizio 2

const quadrato = n => n * n;
console.log(quadrato(5));

// Esercizio 3

const positivo = n => n > 0;
console.log(positivo(0));

// Esercizio 4

const concatenazione = (str1, str2) => str1 + " " + str2;
console.log(concatenazione("Ciao", "Speinz"));

// Esercizio 5

const calcolaAreaTriangolo = (base, altezza) => (base * altezza) / 2;
console.log(calcolaAreaTriangolo(6, 4));

// Esercizio 6

const controlloPalindroma = str =>  {
    reversedStr = str.split("").reverse().join("");
    return str.toLowerCase() === reversedStr.toLowerCase();
};

console.log(controlloPalindroma("Frank"));

// Esercizio 7

const calcolaCubo = n => n ** 3;
console.log(calcolaCubo(3));

// Esercizio 8

const calcoloMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(calcoloMinMax(5, 9));

// Esercizio 9

const concatenaArray = (array) => array.join("");
console.log(["Ciao", "Massimino"]);

// Esercizio 10

const confrontoParola = (str1, lunghezza) => str1.length > lunghezza;
console.log(confrontoParola("Spein", 2));