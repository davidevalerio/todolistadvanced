// Esercizio 1 Salvare un valore

sessionStorage.setItem("chiave", "valore");
console.log(sessionStorage.getItem("chiave"));

// Esercizio 2 Recuperare un valore

sessionStorage.setItem("chiave", "valore");
const valore = sessionStorage.getItem("chiave");
console.log(valore);

// Esercizio 3 Rimuovere un valore

sessionStorage.setItem("chiave", "valore");
sessionStorage.removeItem("chiave");
console.log(sessionStorage.getItem("chiave"));

// Esercizio 4 Salvare un oggetto come stringa JSON nel session storage

const utente = { nome: "Alice", eta: 25 };
sessionStorage.setItem("utente", JSON.stringify(utente));
console.log(sessionStorage.getItem("utente"));

// Esercizio 5 Recuperare un oggetto dal Session Storage e convertirlo da JSON a oggetto JavaScript.

const utente = { nome: "Alice", eta: 25 };
sessionStorage.setItem("utente", JSON.stringify(utente));
const utenteSalvato = JSON.parse(sessionStorage.getItem("utente"));
console.log(utenteSalvato);

// Esercizio 6 Verificare l'esistenza di una chiave

sessionStorage.setItem("chiave", "valore");
const esiste = sessionStorage.getItem("chiave") !== null;
console.log(esiste);

sessionStorage.removeItem("chiave");
const nonEsiste = sessionStorage.getItem("chiave") === null;
console.log(nonEsiste);

// Esercizio 7 Salvare piu valori e recuperarli

sessionStorage.setItem("nome", "Alice");
sessionStorage.setItem("eta", "25");
const nome = sessionStorage.getItem("nome");
const eta = sessionStorage.getItem("eta");
console.log(nome);
console.log(eta);

// Esercizio 8 Pulire session storage

sessionStorage.setItem("nome", "Alice");
sessionStorage.clear("nome");
const nome = sessionStorage.getItem("nome");
console.log(nome);
