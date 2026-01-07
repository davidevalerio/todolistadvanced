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

// Esercizio Gemini Filter Senior

const catalogo = [
    { id: 1, nome: "MacBook Pro", categoria: "Laptop", prezzo: 1200, disponibile: true },
    { id: 2, nome: "iPhone 15", categoria: "Smartphone", prezzo: 900, disponibile: true },
    { id: 3, nome: "Pixel 8", categoria: "Smartphone", prezzo: 700, disponibile: false },
    { id: 4, nome: "Galaxy S23", categoria: "Smartphone", prezzo: 850, disponibile: true },
    { id: 5, nome: "Dell XPS", categoria: "Laptop", prezzo: 950, disponibile: true },
    { id: 6, nome: "iPad Air", categoria: "Tablet", prezzo: 600, disponibile: true }
];

// ESERCIZIO:
// Crea 'prodottiFiltrati' usando filter().
// Suggerimento Senior: Estrai le condizioni in variabili booleane dentro il filter 
// o usa il destructuring per pulire la logica.

const prodottiFiltrati = catalogo.filter(({ nome, categoria, prezzo, disponibile}) => {
    // 1. Crea le tue variabili booleane (es. const isPrezzoGiusto = ...)
    // 2. Ritorna true solo se TUTTE le condizioni sono vere
    const isPrezzoGiusto = prezzo >= 500 && prezzo <= 1000;
    const isDisponibile = disponibile === true;
    const isSmartPC = categoria === "Laptop" || categoria === "Smartphone";
    const isPIncluded = nome.toUpperCase().includes("P");

    return isPrezzoGiusto && isDisponibile && isSmartPC && isPIncluded;
});

console.log(prodottiFiltrati);