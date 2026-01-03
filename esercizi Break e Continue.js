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

// Esercizio Gemini 1

const transazioni = [10, 25, null, 150, 2500, 30, 8000, 12];

for (let valore of transazioni) {
    if (valore === null) {
        continue;
    }
    if (valore > 2000) {
        break;
    }
    console.log(valore);
}

// Esercizio Gemini 2

const gruppiInAttesa = [2, 4, 0, 3, 5, 2, 1];
let tavoliOccupati = 0;

for (let tavoli of gruppiInAttesa) {
    if (tavoli === 0) {
        console.log("Errore di sistema");
        continue;
    }
    tavoliOccupati++;
    console.log(`Prenotazione effettuata per tavolo da ${tavoli} posti.`);

    if (tavoliOccupati === 4) {
        console.log("Ristorante pieno. Chiudiamo le prenotazioni.");
        break;
    }
}

// Esercizio Gemini 3 3 scaffali, ogni scaffale ha 5 scatole

const scaffali = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];

for (let scaffale of scaffali) {
    if (scaffale === scaffali[1]) {
        console.log("--- Scaffale 2 riservato: SALTO ---");
        continue;
    }

    console.log("--- Controllo Scaffale ---");

    for (let scatola of scaffale) {
        if (scatola === 4) {
            console.log(`Scatola ${scatola} DANNEGGIATA! Passo allo scaffale successivo.`);
            break;
        }

        console.log(`Scatola ${scatola}: OK`);
    }
}