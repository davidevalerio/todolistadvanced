// Esercizio 1: Uso di break in un ciclo for

const numeri = [1 ,2 ,3, 4, 5];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] === 3) {
        break;
    }
    console.log(numeri[i]);
}

// Esercizio 2: Uso di continue in un ciclo for

const numeri = [1, 2, 3, 4, 5];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] === 3) {
        continue;
    }
    console.log(numeri[i]);
}

// Esercizio 3 Uso di break in un ciclo while

let i = 0;
const numeri = [1, 2, 3, 4, 5];

while ( i < numeri.length) {
    if (numeri[i] === 5) {
        break;
    }
    console.log(numeri[i]);
    i++;
}

console.log("trovato il 5");

// Esercizio 4 Uso di continue in un ciclo while

let i = 0;
const numeri = [1, 2, 3, 4, 5];

while (i < numeri.length) {
    if (numeri[i] === 3) {
        i++;
        continue;
    }
    console.log(numeri[i]);
    i++;
}

// Esercizio 5 Uso di break in un ciclo for...of

const numeri = [1, 2, 3, 4, 5];

for (let numero of numeri) {
    if (numero === 4) {
        break;
    }
    console.log(numero);
}

// Esercizio 6 Uso di continue in un ciclo for...of

const numeri = [1, 2, 3, 4, 5];

for (let numero of numeri) {
    if (numero === 3) {
        continue;
    }
    console.log(numero);
}

// Esercizio 7 Uso di un break in un ciclo annidato

const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let riga of matrice) {
    for (let valore of riga) {
        if (valore === 5) {
            break;
        }
        console.log(valore);
    }
}

const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let riga of matrice) {
    for (let valore of riga) {
        if (valore === 5) {
            continue;
        }
        console.log(valore);
    }
}