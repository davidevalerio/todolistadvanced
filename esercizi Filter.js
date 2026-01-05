// Gemini Filter 1

const prodotti = [
    { nome: "Smartphone", prezzo: 500 },
    { nome: "Cover", prezzo: 15 },
    { nome: "Laptop", prezzo: 1000 },
    { nome: "Pellicola", prezzo: 5 }
];

const prodottiCostosi = prodotti.filter( prodotto => prodotto.prezzo > 100);

console.log(prodottiCostosi);

// Gemini Filter 2

const task = [
    { id: 1, titolo: "Risolvere bug login" },
    { id: 2, titolo: "Aggiornare grafica" },
    { id: 3, titolo: "Fix bug caricamento" },
    { id: 4, titolo: "Riunione marketing" }
];

// ESERCIZIO:
// Crea 'taskTrovati' filtrando i task che includono la parola "bug" nel titolo.
const taskTrovati = task.filter( t => t.titolo.toLowerCase().includes("bug"));

console.log(taskTrovati);

// Gemini Map, Filter, Spread, Ternary

const magazzino = [
    { id: 1, nome: "Monitor", quantita: 5, prezzo: 200 },
    { id: 2, nome: "Mouse", quantita: 50, prezzo: 20 },
    { id: 3, nome: "Tastiera", quantita: 2, prezzo: 45 },
    { id: 4, nome: "Scheda Video", quantita: 8, prezzo: 500 }
];

// ESERCIZIO:
// Crea 'reportOrdini' concatenando .filter() e .map()
const reportOrdini = magazzino
    .filter( item => item.quantita < 10)
    .map(({ prezzo, ...resto }) => {

    return {
        ...resto
        stato: "ORDINE URGENTE",
        prezzo: prezzo > 100 ? prezzo + 10 : prezzo,
    };
});

console.log(reportOrdini);