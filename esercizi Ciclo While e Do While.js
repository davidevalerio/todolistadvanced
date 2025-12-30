// Esercizio 1

let num = 1;

while (num <= 5) {
    console.log(num)
    num++
}

// Esercizio 2

let num = 1;
let somma = 0;

while (num <= 10) {
    somma += num;
    num++;
}

console.log(somma);

// Esercizio 3

let num = 2;

do {
    console.log(num)
    num += 2
} while (num <= 10)

// Esercizio 4

let numero = 500;
let conteggioCifre = 0;

while (numero !== 0) {
  numero = Math.floor(numero / 10);
  conteggioCifre++;
}

console.log("Numero di cifre:", conteggioCifre);

// Esercizio 5

let numero1 = 0;
let numero2 = 1;
let risultato = 0;

console.log(numero1);
console.log(numero2);

do {
  risultato = numero1 + numero2;
  console.log(risultato);
  numero1 = numero2;
  numero2 = risultato;
} while (risultato < 100);

// Esercizio 6

let numero = 12345;
let conteggioCifrePari = 0;

while (numero !== 0) {
  const cifra = numero % 10;
  if (cifra % 2 === 0) {
    conteggioCifrePari++;
  }
  numero = Math.floor(numero / 10);
}

console.log("Numero di cifre pari:", conteggioCifrePari);

// Esercizio 7

let num = 6;
let fattoriale = 1;
let i = 1;

do {
  fattoriale *= i;
  i++;
} while (i <= num );

console.log(fattoriale);

// Esercizio 8

let str = "Hello World!";
let lunghezza = str.length - 1;

while (lunghezza >= 0) {
  console.log(str[lunghezza]);
  lunghezza--;
}

// Esercizio 9

num = 1;
somma = 0;

while (num <= 10) {
  somma += num;
  num+=2;
}

console.log(somma);

// Esercizio 9 Metodo Scolastico

num = 1;
somma = 0;

while (num <= 10) {
  if (num %2 !== 0) {
    somma += num;
  }
  num++;
}

console.log(somma);

// Esercizio 10

let numero = 17;
let divisore = 2;
let primo = true;

do {
  if (numero % divisore === 0) {
    primo = false;
    break;
  }
  divisore++;
} while (divisore < numero);

if (primo) {
  console.log(numero, "è un numero primo.");
} else {
  console.log(numero, "non è un numero primo.");
}