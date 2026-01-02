// Esercizio 1

let num = 1;

while (num <= 5) {
    console.log(num)
    num++
}

// Esercizio 2

let num = 1;
let somma = 0;

while (num <= 10) {
    somma += num;
    num++;
}

console.log(somma);

// Esercizio 3

let num = 2;

do {
    console.log(num)
    num += 2
} while (num <= 10)

// Esercizio 4

let numero = 500;
let conteggioCifre = 0;

while (numero !== 0) {
  numero = Math.floor(numero / 10);
  conteggioCifre++;
}

console.log("Numero di cifre:", conteggioCifre);

// Esercizio 5

let numero1 = 0;
let numero2 = 1;
let risultato = 0;

console.log(numero1);
console.log(numero2);

do {
  risultato = numero1 + numero2;
  console.log(risultato);
  numero1 = numero2;
  numero2 = risultato;
} while (risultato < 100);

// Esercizio 6

let numero = 12345;
let conteggioCifrePari = 0;

while (numero !== 0) {
  const cifra = numero % 10;
  if (cifra % 2 === 0) {
    conteggioCifrePari++;
  }
  numero = Math.floor(numero / 10);
}

console.log("Numero di cifre pari:", conteggioCifrePari);

// Esercizio 7

let num = 6;
let fattoriale = 1;
let i = 1;

do {
  fattoriale *= i;
  i++;
} while (i <= num );

console.log(fattoriale);

// Esercizio 8

let str = "Hello World!";
let lunghezza = str.length - 1;

while (lunghezza >= 0) {
  console.log(str[lunghezza]);
  lunghezza--;
}

// Esercizio 9

num = 1;
somma = 0;

while (num <= 10) {
  somma += num;
  num+=2;
}

console.log(somma);

// Esercizio 9 Metodo Scolastico

num = 1;
somma = 0;

while (num <= 10) {
  if (num %2 !== 0) {
    somma += num;
  }
  num++;
}

console.log(somma);

// Esercizio 10

let numero = 17;
let divisore = 2;
let primo = true;

do {
  if (numero % divisore === 0) {
    primo = false;
    break;
  }
  divisore++;
} while (divisore < numero);

if (primo) {
  console.log(numero, "è un numero primo.");
} else {
  console.log(numero, "non è un numero primo.");
}

// Esercizio Gemini 

// L'obiettivo
// Scrivi un programma in JavaScript che genera un numero casuale tra 1 e 10. L'utente deve continuare a inserire numeri finché non indovina quello corretto.

// Requisiti
// Genera un numero intero casuale tra 1 e 10 (usa Math.random()).

// Usa un ciclo do...while per chiedere l'input all'utente tramite prompt().

// Se l'utente sbaglia, mostra un messaggio di errore e richiedi il numero.

// Quando l'utente indovina, mostra un messaggio di congratulazioni.

// Una mano con la logica
// Prima di scrivere il codice, ecco come funziona il flusso logico del ciclo do...while rispetto al while standard:

const num = Math.floor((Math.random() * 10) +1);
console.log(num);
let numTentativo;

do {
  numTentativo = parseInt(prompt("Indovina il numero tra 1 e 10"));
  if (numTentativo !== num) {
    alert("Numero sbagliato. Riprova");
  }
} while (numTentativo !== num);

console.log("Numero giusto!")

// L'Esercizio: "Il Buttafuori Digitale"
// Parte 1: Il ciclo while (Controllo all'ingresso)
// Immagina di dover chiedere all'utente una parola chiave per entrare in un sito. Se l'utente la sbaglia subito, continui a chiedergliela. Se però la indovina al primo colpo, il ciclo finisce immediatamente.

// Consegna:

// Crea una variabile passwordCorretta = "pasticciotto".

// Usa un ciclo while per chiedere all'utente di inserire la password tramite un prompt().

// Il ciclo deve continuare finché l'input è diverso da passwordCorretta.

// Stampa in console "Accesso consentito!" solo quando la password è giusta.

// Parte 2: Il ciclo do...while (Prova prima, chiedi poi)
// Ora immagina un gioco dove l'utente deve lanciare un dado (un numero casuale da 1 a 6). Il gioco deve continuare finché non esce il numero 6. In questo caso, il dado deve essere lanciato almeno una volta per forza.

// Consegna:

// Crea una variabile punteggio.

// Usa un do...while per generare un numero casuale tra 1 e 6 e assegnarlo a punteggio.

// Stampa il risultato di ogni lancio in console.

// Il ciclo deve terminare quando punteggio è uguale a 6.

const passwordCorretta = "pasticciotto";
let password;

do {
  password = prompt("Inserisci password");

  if (passwordCorretta !== password) {
      alert("Password sbagliata");
  }

} while (passwordCorretta !== password);

console.log("Accesso consentito!");

//

let punteggio;

do {
  punteggio = Math.floor((Math.random() * 6) + 1);
  console.log(punteggio);
} while (punteggio !== 6);

// Una sfida veloce: il "Contatore di tentativi"
// Riusciresti a modificare il tuo codice della password (quello con il do...while) per tenere traccia di quanti tentativi ha fatto l'utente prima di indovinare?

// Indizio: Ti serve una variabile contatore fuori dal ciclo che aumenti di 1 a ogni iterazione.

const passwordCorretta = "pasticciotto";
let password;
let contatore = 0;

do {
  password = prompt("Inserisci password");
  contatore++;
  if (passwordCorretta !== password) {
      alert("Password sbagliata");
  }

} while (passwordCorretta !== password);

console.log("Accesso consentito!");
console.log(`Accesso dopo ${contatore} tentativi.`);

// 3 tentativi password

const passwordCorretta = "pasticciotto";
let password;
let contatore = 0;

do {
  password = prompt("Inserisci password");
  contatore++;
  if (passwordCorretta !== password && contatore < 3) {
      alert(`Password sbagliata. Hai ancora ${3 - contatore} tentativi.`);
  }
}while (passwordCorretta !== password && contatore < 3);

if (password === passwordCorretta) {
  console.log("Password corretta");
} else {
  console.log("Numero di tentativi esaurito. Riprovare piu tardi.");
}

// alternativa col break

const passwordCorretta = "pasticciotto";
let password;
let contatore = 0;

do {
  password = prompt("Inserisci password");
  contatore++;

  if (password === passwordCorretta) {
    console.log("Password corretta")
    break;
  }

  if (contatore === 3) {
    console.log("Numero massimo di tentativi raggiunto.");
    break;
  }
} while (true);