// Esercizio 1: Moltiplicare ogni elemento per 2

const numeri = [1, 2, 3, 4];
const raddoppiati = numeri.map((x) => x * 2);

console.log(raddoppiati); // [2, 4, 6, 8]

// Esercizio 2: Convertire un array di numeri in stringhe

const numeri = [1, 2, 3, 4];
const stringhe = numeri.map((x) => x.toString());

console.log(stringhe); // ["1", "2", "3", "4"]

// Esercizio 3: Estrarre i nomi da un array di oggetti

const persone = [
  { nome: "Alice", età: 25 },
  { nome: "Bob", età: 30 },
  { nome: "Carol", età: 35 },
];
const nomi = persone.map((persona) => persona.nome);

console.log(nomi); // ["Alice", "Bob", "Carol"]

const nomi = persone.map(x => x.nome);

console.log(nomi);

// Esercizio 4: Aggiungere un punto esclamativo a ogni stringa

const nomi = ["Marco", "Spencer", "Sbiadao"];

const nomiEsclamati = nomi.map((x) => x + "!");

console.log(nomiEsclamati);

// Esercizio 5: Calcolare il quadrato di ogni numero

const num = [1, 2, 3, 4, 5];

const numQuadrato = num.map((x) => x ** 2);

console.log(numQuadrato);

// Esercizio 6: Convertire le temperature da Celsius a Fahrenheit

const temperature = [15, 27, -3, 16, 23];

const temperatureFahr = temperature.map((x) => (x * 9) / 5 + 32);

console.log(temperatureFahr);

// Esercizio 7: Estrarre le prime lettere di ogni parola

const parole = ["rapa", "maiuscolo", "franco", "pollice"];

const primaLettera = parole.map((x) => x[0]);

console.log(primaLettera);

// Esercizio 8: Creare un array di lunghezze delle stringhe

const parole = ["rapa", "maiuscolo", "franco", "pollice"];

const paroleLunghezza = parole.map((x) => x.length);

console.log(paroleLunghezza);

// Esercizio 9: Aggiungere un prefisso a ogni stringa

const parole = ["rapa", "maiuscolo", "franco", "pollice"];

const parolePrefisso = parole.map((x) => "pre" + x);

console.log(parolePrefisso);

// Esercizio 10: Incrementare ogni elemento di un array di oggetti

const persone = [
    {nome: "Luca", eta: 89},
    {nome: "Sara", eta: 54},
    {nome: "Phil", eta: 41},
];

const incremento = persone.map(x => ({...x, eta: x.eta + 6}));
console.log(incremento);

// Gemini map e spread operator

const prodotti = [
    { id: 1, nome: "Smartphone", prezzo: 500 },
    { id: 2, nome: "Laptop", prezzo: 1000 },
    { id: 3, nome: "Cuffie", prezzo: 150 }
];

// ESERCIZIO:
// Crea un nuovo array chiamato 'prodottiScontati' usando map() e lo spread operator.
// 1. Mantieni tutte le proprietà originali.
// 2. Modifica 'prezzo' riducendolo del 20% (moltiplica per 0.8).
// 3. Aggiungi la proprietà 'inOfferta: true'.

const prodottiScontati = prodotti.map(x => {
if (x.prezzo > 200) {
    return { ...x, prezzo: x.prezzo * 0.80, inOfferta: true }
}
return x;
});

console.log(prodottiScontati);

// Gemini

const utenti = [
    { id: 101, nome: "Luca", online: true },
    { id: 102, nome: "Sara", online: true },
    { id: 103, nome: "Phil", online: false }
];

// ESERCIZIO:
// Crea l'array 'utentiAggiornati' usando map() e lo spread operator.
// 1. Usa lo spread per mantenere i dati esistenti.
// 2. Aggiungi a TUTTI la proprietà 'lastSeen: "10:00"'.
// 3. Usa un operatore ternario per far sì che SE il nome è "Phil",
//    il valore di 'online' diventi true, altrimenti resta quello che era.

const utentiAggiornati = utenti.map(x => ({
    ...x,
    lastSeen: "10:00",
    online: x.nome === "Phil" ? true : x.online
}));

console.log(utentiAggiornati);

// Esercizio Gemini

const task = [
    { id: 1, titolo: "Sviluppo Login", priorita: "alta" },
    { id: 2, titolo: "Scrittura testi", priorita: "bassa" },
    { id: 3, titolo: "Correzione bug", priorita: "alta" }
];

// ESERCIZIO:
// Crea 'taskAggiornati' usando map, spread e UN SOLO operatore ternario.
// Suggerimento: per il maiuscolo usa il metodo .toUpperCase() sulla stringa.

const taskAggiornati = task.map( x => ({ ...x, progetto: "Sito Web", titolo: x.priorita === "alta" ? x.titolo.toUpperCase() : x.titolo }));

console.log(taskAggiornati);

// Esercizio Gemini

const giocatori = [
    { id: 1, nome: "CyberLeo", score: 120 },
    { id: 2, nome: "GamerGirl", score: 85 },
    { id: 3, nome: "PixelMaster", score: 200 }
];

// ESERCIZIO:
// Crea 'classificaAggiornata' usando map, spread e il ternario.
// Nota: questa volta hai DUE proprietà che dipendono dalla stessa condizione (score > 100).

const classificaAggiornata = giocatori.map( x => {

    const isPro = x.score > 100;

    return {
        ...x,
        fazione: "Eroi",
        status: isPro ? "Pro" : "Principiante",
        score: isPro ? x.score + 50 : x.score
    };
});

console.log(classificaAggiornata);

// Esercizio Gemini Map, spread, ternary like a Pro

const libri = [
    { id: 1, titolo: "Il gene egoista", categoria: "Scienza", anno: 1976, prezzo: 20 },
    { id: 2, titolo: "Breve storia del tempo", categoria: "Scienza", anno: 1988, prezzo: 15 },
    { id: 3, titolo: "L'ordine del tempo", categoria: "Scienza", anno: 2017, prezzo: 18 },
    { id: 4, titolo: "Il codice da Vinci", categoria: "Narrativa", anno: 2003, prezzo: 12 }
];

// SCRIVI QUI SOTTO LA TUA SOLUZIONE
const catalogoAggiornato = libri.map(({ categoria, anno, prezzo, ...resto }) => {

    const isScienzaPre2000 = categoria === "Scienza" && anno < 2000;

    return {
        ...resto,
        categoria,
        anno,
        prezzo: isScienzaPre2000 ? prezzo * 0.5 : prezzo,
        tag: isScienzaPre2000 ? "Classico Scientifico" : "Recente",
        disponibile: true
    };
});

console.log(catalogoAggiornato);

// Esercizio Gemini Sistema di notifiche

const notifiche = [
    { id: 1, testo: "Aggiornamento sistema", priorita: "bassa", letta: false },
    { id: 2, testo: "INTRUSIONE RILEVATA", priorita: "alta", letta: false },
    { id: 3, testo: "Password in scadenza", priorita: "alta", letta: true }
];

const notificheGestite = notifiche.map(({ priorita, letta, ...resto }) => {

    const isAltaNoLetta = priorita === "alta" && letta === false;

    return {
        ...resto,
        priorita,
        letta: isAltaNoLetta ? true : letta,
        timestamp: "2026.01.04",
        avviso: isAltaNoLetta ? "GESTITO CON URGENZA" : "Normale"
    };
});

console.log(notificheGestite)