// Esercizio 1

function rettangolo(base, altezza) {
    return base * altezza
}

console.log(rettangolo(2, 4));

// Esercizio 2

function pari(n) {
    return n % 2 === 0;
};

console.log(pari(5));

// Esercizio 3

function concatena(str1, str2) {
    return str1 + " " + str2;
};

console.log(concatena("Ciao", "Franco"));

// Esercizio 4

function calcolaFattoriale(num) {
    let fattoriale =1;

    for (let i = 1; i <= num; i++) {
        fattoriale *= i;
    }

    return fattoriale;
};

console.log(calcolaFattoriale(4));

// Esercizio 5

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNum(4, 6));

// Esercizio 6

function palindrom(str) {
 const parolaInvertita = str.split("").toReversed().join("");
 return str.toLowerCase() === parolaInvertita.toLowerCase();
}

console.log(palindrom("Aia"));

// Esercizio 7

function sommaArray(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

console.log(sommaArray([6, 8]));

// Esercizio 8

function arrayMaXMin(array) {
    const massimo = Math.max(...array)
    const minimo = Math.min(...array);
    return {
        massimo,
        minimo,
    }
}
console.log(arrayMaXMin([1, 2, 3, 4, 5]));

// Esercizio 9

function calcoloVocali(str) {
    const vocali = ["a", "e", "i", "o", "u"];
    let sommaVocali = 0;

    for (lettera of str.toLowerCase()) {
        if (vocali.includes(lettera)) {
            sommaVocali++
        }
    }
    return sommaVocali;
}
console.log(calcoloVocali("FABIO"));

// Esercizio 10

function mediaArray(array) {

    const somma = array.reduce((acc, curr) => acc + curr, 0);

    return somma / array.length
}

console.log(mediaArray([5, 5, 5]))