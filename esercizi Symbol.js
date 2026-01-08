// Esercizio 1: Creare e Utilizzare un Symbol

const mySymbol = Symbol("mySymbol");

const obj = {
    [mySymbol]: "valore associato al simbolo",
};

console.log(obj[mySymbol]);

// Esercizio 2: Symbol Unici

const mySymbol = Symbol("mySymbol");

const obj = {
    [mySymbol]: "valore associato al simbolo",
    normale: "valore normale",
};

for (let key in obj) {
    console.log(key);
}

console.log(Object.getOwnPropertySymbols(obj));