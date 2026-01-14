// Esercizio 1 Aggiungere un event listener al click su un pulsante:

// const btn = document.getElementById("mioPulsante");
// btn.addEventListener("click", function (){
//     console.log("Hai cliccato il pulsante");
// })

// Esercizio 1 Migliorato

// const btn = document.getElementById("mioPulsante");

// if (btn) {
//     btn.addEventListener("click", () => {
//         console.log("Hai cliccato il pulsante!");
//     });
// } else {
//     console.log("Non ho trovato il pulsante con ID `mioPulsante`");
// }

// Esercizio 2 Aggiungere un event listener al submit di un modulo:

// const modulo = document.getElementById("form");

// if (modulo) {
//     modulo.addEventListener("submit", function (event) {
//         event.preventDefault();
//         console.log("Hai inviato il form");
//     });
// } else {
//     console.log("Non ho trovato il form");
// }

// Esercizio 3 Aggiungere un event listener al cambio di un input di testo:

// const input = document.getElementById("mioInput");

// input.addEventListener("input", function() {
//     console.log(`Il valore del'input e' ${input.value}`);
// });

// Esercizio 4 Aggiungere un event listener al caricamento completo della pagina:

// window.addEventListener("load", function() {
//     console.log("La pagina e' stata completamente caricata")
// });

// Esercizio 5 Aggiungere un event listener al passaggio del mouse su un elemento:

// const elemento = document.getElementById("passaSopra");

// if (elemento) {
//     elemento.addEventListener("mouseover", () => {
//         console.log("Stai passando sopra");
//     });
// } else {
//     console.log("Elemento non trovato")
// };

// Esercizio 6 Aggiungere un event listener al focus su un campo di input:

// const input = document.getElementById("inputtone");

// if (input) {
//     input.addEventListener("focus", function() {
//         console.log("Focus all'input! Hai cliccato nell'input")
//     });
// } else {
//     console.log("Elemento non trovato")
// };

// Esercizio 7 Aggiungere un event listener al cambio di selezione di un elemento select:

// const select = document.getElementById("mioSelect");
// select.addEventListener("change", function () {
//   console.log("Hai selezionato una nuova opzione:", select.value);
// });

// Esercizio 8 Aggiungere un event listener alla pressione di un tasto sulla tastiera:

// const input = document.getElementById("inputKeyboard");

// input.addEventListener("keydown", function(event) {
//     console.log(`E' stato premuto il tasto> ${event.key}`);
// });

// Esercizio 9 Aggiungere un event listener allo scroll della pagina:

// window.addEventListener("scroll", function() {
//     console.log("La pagina e' stata scrollata");
// });

// Esercizio 10 Aggiungere un event listener al doppio click su un elemento:

// const element = document.getElementById("button");

// element.addEventListener("dblclick", () => {
//     console.log("Doppio click effettuato!");
// });

// Esercizio 11 Aggiungere un event listener al cambio di valore di un elemento input di tipo range:

// const range = document.querySelector('#mioRange');

// range.addEventListener("input", () => {
//     console.log(`Il valore del range e' ${range.value}`);
// });

// Esercizio 12 Aggiungere un event listener al passaggio del mouse fuori da un elemento:
// const elemento = document.querySelector("#divvone");
// elemento.addEventListener("mouseout", () => {
//     console.log("Francesco Ghino Russo");
// })

// Esercizio 13 Aggiungere un event listener al tasto destro del mouse su un elemento:

// const elemento = document.querySelector('#div-test');
// elemento.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
//     console.log("Hai cliccato il tasto destro del mouse");
// });

// Esercizio 14

window.addEventListener("resize", function () {
  console.log("La dimensione della finestra è cambiata!");
});