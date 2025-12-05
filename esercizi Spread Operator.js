// Spread Copia di un Array 1

const colori = [ "bianco", "rosso", "verde"];
const copiaColori = [ ...colori ];

console.log(copiaColori);
console.log(colori===copiaColori);

// Unire due array 2

const colori = [ "bianco", "rosso", "verdone" ];
const altriColori = [ "giallo", "arancio", "fuffia" ];

const unioneColori = [ ...colori, ...altriColori];

console.log(unioneColori);

// Copia di un oggetto 3

const cane = {
    nome: "Charlie",
    razza: "Bastardino",
    eta: 12,
};

const copiaCane = { ...cane };

console.log(copiaCane);
console.log(cane === copiaCane);

// Unire due oggetti 4

const computer = {
    nome: "XPS 15",
    marchio: "Dell",
    anno: 2019,
};

const computerOtherInfo = {
    colore: "Silver",
    screenSize: 15.6,
};

const computerAllInfo = { ...computer, ...computerOtherInfo };

console.log(computerAllInfo);

// Aggiungere elementi a un Array 5

const numeri = [ 1, 2, 3 ];
const altriNumeri = [ 0, ...numeri, 4 ];

console.log(altriNumeri);


// Aggiungere Proprieta a un oggetto 6

const persona = {
    nome: "Luca",
    cognome: "Franco",
    anni: 28,
};

const personaPlus = {
    ...persona, citta: "Roma",
};

console.log(personaPlus);

// Parametri di funzione 7

function somma(a, b, c) {
    return a + b + c;
}

const numeri = [ 1, 2, 3, 4];

console.log(somma(...numeri));

// Destructuring a Spread Operator 8

const colori = [ "giallo", "verde", "rosso", "verde", "marrone", "nero" ];

const [ primo, , terzo, ...altriColori ] = colori;

console.log(primo);
console.log(terzo);
console.log(altriColori);

// Altro Esempio 8

const numeri = [ 1, 2, 3, 4, 5 ];
const [ primo, secondo, ...altriNumeri ] = numeri;

console.log(primo);
console.log(altriNumeri);

// Creare un Array da una stringa 9
const stringa = "fabione fa cosi";
const arrayStringa = [...stringa];

console.log(arrayStringa);

// altro esempio

const nome = "Fabione";
const arrayNome = [...nome];

console.log(arrayNome);

// Combinare oggetti con proprieta sovrascritte 10

const obj1 = {
    a: 8,
    b: 3,
};

const obj2 = {
    b: 45,
    c: 23,
};

const objMixed = { ...obj1, ...obj2 };

console.log(objMixed);

// Esercizio Gemini

// L'operatore Spread è essenziale per l'immutabilità e per l'aggiornamento dello stato in React.
// Esercizio Chiave (Immutabilità):
// Hai un oggetto utente (es. { nome: "Luca", città: "Roma" }) e vuoi cambiare solo la città in "Milano".

// Devi creare un NUOVO oggetto senza modificare l'originale.

// Corretto: const utenteAggiornato = { ...utente, città: "Milano" };

// Esercitati a usare lo spread per clonare oggetti e array.

// Vantaggio React: Quando aggiornerai lo stato in React (es. setStato(nuovoStato)), dovrai quasi sempre usare l'operatore spread per creare un nuovo oggetto o array di stato, anziché mutare quello vecchio.

const utente = {
    nome: "Suca",
    citta: "Roma",
};

utenteAggiornato = { ...utente, citta: "Milano" };

console.log(utenteAggiornato);