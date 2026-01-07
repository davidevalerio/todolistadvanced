// Esercizio 1: Creare un Set

const mioSet = new Set();
mioSet.add(1);
mioSet.add(2);
mioSet.add(3);

console.log(mioSet);

// Esercizio 2: Controllare l’Esistenza di un Elemento

const mioSet = new Set([1, 2, 3]);

console.log(mioSet.has(4));

// Esercizio 3: Rimuovere un Elemento

const lista = new Set(["Luca", "Fabri", "Speins", "Spencer"]);

lista.delete("Luca");

console.log(lista);

// Esercizio 4: Iterare su un Set

const listaPersone = new Set (["Franco", "Spencer", "Bobby", "Michelazzo"]);

for (let nome of listaPersone) {
    console.log(nome);
}

// Esercizio 5: Convertire un Set in un Array

const animali = new Set(["Cane", "Gatto", "Topo", "Spein"]);

const animaliArray = [...animali];

console.log(animaliArray);

// Esercizio 6: Unione di Due Set

const fiori = new Set (["primula", "rosa", "tulipano"]);
const piante = new Set(["cactus", "limone", "melograno"]);

const fioriEpiante = new Set([...fiori, ...piante]);

console.log(fioriEpiante);

// Esercizio 7: Intersezione di Due Set

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const intersezione = new Set([...set1].filter((x) => set2.has(x)));

console.log(intersezione);

// Esercizio 8: Differenza di Due Set

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const differenza = new Set([...set1].filter((x) => !set2.has(x)));

console.log(differenza);

// Esercizio 8:  Differenza di Due Set / metodo moderno

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

// 1. Intersezione (quelli in comune)
const comune = set1.intersection(set2); 
// Set { 2, 3 }

// 2. Differenza (quelli che ha set1 ma NON set2)
const soloIn1 = set1.difference(set2); 
console.log(comune);

// Esercizio 9: Pulire un Set

const fiori = new Set("orchidea", "rosa", "spein");

fiori.clear();
console.log(fiori);

// Esercizio 10: Dimensione di un Set

const auto = new Set(["BMW", "Mercedes", "FIAT"]);

console.log(auto.size);