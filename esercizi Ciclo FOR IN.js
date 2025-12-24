// Esercizio 1

let computer = {
    nome: "XPS",
    model: 15,
    anno: 2018,
};

for (let proprieta in computer) {
    console.log(`${proprieta}: ${computer[proprieta]}`)
}

// Esercizio 2

let anniStudenti = {
    Luca: 24,
    Franco: 31,
    Speinna: 12,
    Luici: "marco"
};

let sommaAnni = 0;

for (let proprieta in anniStudenti) {
    if (typeof anniStudenti[proprieta] === "number") {
        sommaAnni += anniStudenti[proprieta];
    }
}

console.log(sommaAnni);

// Esercizio 3

let computerA = {
    nome: "XPS",
    model: 15,
    anno: 2018,
};

let computerB = {
    nome: "PC",
    model: 16,
    anno: 2018,
};

for ( let proprieta in computerA) {
    if (computerA[proprieta] === computerB[proprieta]) {
        console.log(`I due oggetti hanno lo stesso ${proprieta}: ${computerA[proprieta]}`)
    } else {
        console.log(`I due oggetti non hanno lo stesso ${proprieta}.`)
    }
}

// Esercizio 4

const str = "Marione";
let numeroCaratteri = 0;

for (let char in str) {
    numeroCaratteri++
}

console.log(numeroCaratteri);

// Esercizio 5

let computer = {
    nome: "PC",
    model: 16,
    anno: 2018,
};

for (let proprieta in computer) {
    console.log(proprieta);
}

// Esercizio 6

let computer = {
    nome: "PC",
    model: 16,
    anno: 2018,
};

for (let proprieta in computer) {
    if (typeof computer[proprieta] === "string") {
        console.log(proprieta);
    }
}

// Esercizio 7

let computerA = {
    nome: "XPS",
    model: 15,
    anno: 2018,
    colore: "rosso",
};

let computerB = {
    nome: "PC",
    model: 16,
    anno: 2018,
    provenienza: "China",
};

for (let proprieta in computerA) {
    if (computerA.hasOwnProperty(proprieta) && computerB.hasOwnProperty(proprieta)) {
        console.log(proprieta)
    }
}

// Esercizio 8

let computerA = {
    nome: "XPS",
    model: 3,
    anno: 4,
    colore: "rosso",
};

let prodotto = 1;

for (let proprieta in computerA) {
    if (typeof computerA[proprieta] === "number") {
        prodotto *= computerA[proprieta];
    }
}

console.log(prodotto);

// Esercizio gemini 1

let magazzino = {
    mele: 50,
    pere: 30,
    banane: 120
};

for (let proprieta in magazzino) {
    console.log(`Ci sono ${magazzino[proprieta]} unita di ${proprieta}`);
}

// Esercizio gemini 2

let carrello = {
    pasta: 1.50,
    vino: 8.00,
    cioccolato: 2.30,
    pane: 1.20
};
let totale = 0;

for (let proprieta in carrello) {
    totale += carrello[proprieta];
}

console.log(totale);

// Esercizio gemini 3

let dipendenti = {
    Marco: 1800,
    Sara: 2500,
    Luca: 2100,
    Anna: 1900
};

for (let chiave in dipendenti) {
    if (dipendenti[chiave] >= 2000) {
        console.log(chiave);
    }
}