// Objects - 1,2

let persona = {
    nome: "Lucazzo",
    eta: 14,
};

console.log(persona);
console.log(persona.nome);
console.log(persona.eta);

// Objects - 3

let persona = {
    nome: "Lucazzo",
    eta: 14,
};

console.log(persona.nome);

persona.nome = "Franco";
console.log(persona.nome);

// Objects - 4

let persona = {
    nome: "Luca",
    eta: 15,
};

persona.sesso = "M"
console.log(persona.sesso);

// Objects 5

let persona = {
    nome: "Marco",
    eta: 25,
};

delete persona.eta;
console.log(persona);

// Objects 6

let persona = {
    nome: "Gaia",
    eta: 24,
    coniugata: false,
};

for (let chiave in persona) {
    console.log(`${chiave}: ${persona[chiave]}`);
}

// Objects 7

let persona = {
    nome: "Franco",
    eta: 39,
    sesso: "M",
    coniugato: false,
};

if ("sesso" in persona) {
    console.log(`Ce sta, ce sta.`);
} else {
    console.log(`No non ce sta`);
}

// Alternativa

let persona = {
    nome: "Gaia",
    eta: 38,
    sesso:"F",
};

if (persona.hasOwnProperty("sesso")) {
    console.log(`Ce sta, ce sta`);
} else {
    console.log(`Nun ce sta.`)
}

// Objects 8

let persona = {
    nome: "Franco",
    eta: 39,
    sesso: "M",
};

const personaCopia = Object.assign({}, persona);

console.log(persona);
console.log(personaCopia);

// Objects 9

let persona = {
    nome: "Franca",
    cognome: "Rame",
};

console.log(`${Object.keys(persona).length}`);

// Objects 10

let libro = {
    titolo: "Grazie Roma",
    autore: "Andunell",
    editore: {
        nome: "RCA",
        anno: 1983,
    },
};

console.log(libro);
