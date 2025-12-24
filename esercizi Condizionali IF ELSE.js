// Esercizio 1

const num = -321;

if (num > 0) {
    console.log(`Num e positivo`);
} else if (num < 0) {
    console.log(`num e negativo`);
} else {
    console.log(`num e zero`);
}

// Esercizio 2

const num1 = 3;

if (num1 %2 === 0) {
    console.log(`Numero e' pari!`);
} else {
    console.log(`numero e' dispari!`);
}

// Esercizio 3

const eta = 17;

if (eta >= 18) {
    console.log(`Puo guidare!`)
} else {
    console.log(`Col kaiser!`)
}

// Esercizio 4

const punteggioStudente = 76;

if (punteggioStudente >= 90) {
    console.log(`Punteggio studente e' A`);
} else if (punteggioStudente >= 80) {
    console.log(`B`);
} else if (punteggioStudente >= 70) {
    console.log(`C`);
} else {
    console.log(`D`);
}

// Esercizio 5

const eta = 32;
const patentato = false;

if (eta >= 18 && patentato) {
    console.log(`si maggiorenne e patentato`);
} else if (eta >= 18 && !patentato) {
    console.log(`maggiorenne non patentato`);
} else {
    console.log(`minorenne non patentato`);
}

// Esercizio 6

const anno = 1900;

if ((anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0) {
    console.log(`si il ${anno} e' bisestile`);
} else {
    console.log(`no, il ${anno} non e bisestile`)
}

// Esercizio 7 ciclo for da studiare

const parola = "radar";
let isPalindromo = true;

for (let i = 0; i < parola.length / 2; i++) {
  if (parola[i] !== parola[parola.length - 1 - i]) {
    isPalindromo = false;
    break;
  }
}

if (isPalindromo) {
  console.log("La parola è un palindromo");
} else {
  console.log("La parola non è un palindromo");
}

// Esercizio 8

const numGiorno = 2;

if (numGiorno === 1) {
    console.log(`Lunedi`);
} else if (numGiorno === 2) {
    console.log(`Martedi`);
} else if (numGiorno === 3) {
    console.log(`Mercoledi`);
} else if (numGiorno === 4) {
    console.log(`Giovedi`);
} else if (numGiorno === 5) {
    console.log(`Venerdi`);
} else if (numGiorno === 6) {
    console.log(`Sabato`);
} else if (numGiorno === 7) {
    console.log(`Domenica`);
} else {
    console.log(`Numero errato`)
}
