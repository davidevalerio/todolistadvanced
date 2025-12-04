// Classi - Esercizio 1

class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }

    saluta() {
        console.log(`Ciao ${this.nome} ${this.cognome}!`);
    }
}

const marione = new Persona ("Mario", "Rossi");
marione.saluta();

// Classi - Esercizio 2

class Automobile {
    constructor(proprieta, marca, anno) {
        this.proprieta = proprieta;
        this.marca = marca;
        this.anno = anno;
    }

    dettagli() {
        console.log(`Dettagli Macchina: la macchina e' di ${this.proprieta}, marchio: ${this.marca} e dell'anno ${this.anno}`)
    }
}

const macchina = new Automobile("Marcone", "Mercedes", 1994);
macchina.dettagli();

// Classi - Esercizio 3

class Cerchio {
    constructor(raggio) {
        this.raggio = raggio
    }

    calcoloArea() {
        return Math.PI * this.raggio * this.raggio;
    }
}

const newCerchio = new Cerchio(7);
const area = newCerchio.calcoloArea();
console.log(`Area = ${area}`);

// Classi - Esercizio 4

class Libro {
    constructor(titolo, autore) {
        this.titolo = titolo;
        this.autore = autore;
    }

    dettagli() {
        console.log(`Il titolo del libro e' ${this.titolo} del mitico ${this.autore}.`);
    }
}

const libro1 = new Libro ("1984", "George Orwell");
libro1.dettagli();

// Classi - Esercizio 5

class Studente {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.voti = [];
    }

    aggiungiVoto(voto) {
        this.voti.push(voto);
    }
}

const newStudente = new Studente("Farien", "De Martino");
newStudente.aggiungiVoto(5);
newStudente.aggiungiVoto(10);
console.log(`I voti dello studente ${newStudente.nome} ${newStudente.cognome}: ${newStudente.voti}`);

// Classi - Esercizio 6

class Prodotto {
    constructor(nome, prezzo) {
        this.nome = nome;
        this.prezzo = prezzo;
    }

    applicaSconto(sconto) {
        const prezzoScontato = (this.prezzo / 100) * sconto;
        this.prezzo -= prezzoScontato;
    }
}

const newProdotto = new Prodotto("Brogoli", 5);
console.log(`${newProdotto.nome}: ${newProdotto.prezzo}`);
newProdotto.applicaSconto(50);
console.log(`Scontato te lo diamo a: ${newProdotto.prezzo}`);

// Classi - Esercizio 7

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calcoloDistanza() {
        return Math.sqrt((this.x * this.x)+(this.y * this.y));
    }
}

const p1 = new Punto(4, 6);
console.log(`La distanza tra il punto e l'origine: ${p1.calcoloDistanza()}`);

// Classi - Esercizio 8

class Rettangolo {
    constructor(base, altezza) {
        this.base = base;
        this.altezza = altezza;
    }

    calcolaArea() {
        return this.base * this.altezza;
    }
}

const r1 = new Rettangolo (3, 2);
console.log(`L'area del rettangolo e': ${r1.calcolaArea()}`);

// Classi - Esercizio 9

class Utente {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }

    generaEmail() {
        const email = `${this.nome.toLowerCase().replace(/\s/g,"")}.${this.cognome.toLowerCase().replace(/\s/g,"")}@gmail.com`;
        return email;
    }
}

const u1 = new Utente("Fari e n", "De Martino");
const u2 = new Utente("Franco", "Della Morte");
console.log(u1.generaEmail());
console.log(u2.generaEmail());

// Classi - Esercizio 10

class Triangolo {
    constructor(base, altezza) {
        this.base = base;
        this.altezza = altezza;
    }

    calcolaArea() {
        return (this.base * this.altezza) / 2;
    }
}

const t1 = new Triangolo(5, 2);
const areaT1 = t1.calcolaArea();
console.log(`L'area del triangolo e' ${areaT1}`);