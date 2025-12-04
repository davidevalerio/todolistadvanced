// Destru di un Array - 1

const numeri = [1, 2, 3, 4, 5];

const [primo, secondo, terzo] = numeri;

console.log(primo);
console.log(secondo);
console.log(terzo);

// Destru con salto degli elementi - 2

const numeri = [1, 2, 3, 4, 5];

const [primo, , , quarto, quinto] = numeri;

console.log(primo);
console.log(quarto);

// Destru di un Oggetto - 3

const auto = {
    nome: "500",
    marchio: "FIAT",
    anno: 1972,
};

const {nome, marchio, anno} = auto;

console.log(nome, marchio, anno);

// Destru con Alias - 4

const persona = {
    nome: "Goku",
    eta: 25,
    cognome: "Marhetto",
}

const { nome: nomePersona, cognome: cognomePersona} = persona;
console.log(nomePersona);
console.log(cognomePersona);

// Destru di Parametri di Funzione - 5

function stampaDettagli({nome, marchio, anno}) {
    console.log(nome, marchio, anno);
}

const macchina = {
    nome: "500",
    marchio: "FIAT",
    anno: 1972,
};

stampaDettagli(macchina);

// Destru con Valori Predefiniti - 6

const macchina = {
    nome: "500",
    marchio: "FIAT",
};

const { nome, anno = 1972, marchio } = macchina;

console.log(nome);
console.log(anno);
console.log(marchio);

// Destru Array annidati - 7

const colori = [ "giallo", [ "nero scuro", "nero chiaro"], "rosso" ];

const [ , [ secondo, terzo], quarto ] = colori;

console.log(secondo);
console.log(terzo);
console.log(quarto);
console.log(primo); // dara errore perche non fa parte della destrutturazione.

// Destru Oggetti Anni - 8

const macchina = {
    nome: "500",
    anno: 1972,
    proprietario : { nomeProprietario: "Davide", cognomeProprietario: "Valerio", DOB: 1987 },
    marchio: "FIAT",
    size: "Piccoletta"
};

const { nome, proprietario: { nomeProprietario, cognomeProprietario, DOB}, marchio } = macchina

console.log(marchio);
console.log(nome);
console.log(nomeProprietario);
console.log(size); // dara errore perche non fa parte della destrutturazione.

// Esercizio Chiave:

// Crea un oggetto complesso (es. datiTransazione con proprietà annidate come mittente: { nome, iban }).

// Scrivi una funzione che accetta questo oggetto e estrae solo mittente.nome e l'importo, usando la destrutturazione nel parametro della funzione.

// Esempio: function processaDati({ mittente: { nome }, importo }) { ... }

const datiTransazione = {
    data: "12/03/2025",
    mittente : { nome: "Davide", cognome: "Valerio" },
    importo: 400.00,
}

function processaDati({mittente: {nome}, importo}) {
    console.log(nome);
    console.log(importo);
}

processaDati(datiTransazione);
