// Esercizio 1 Rimuovere un elemento tramite il suo ID:

// const elementoDaRimuovere = document.querySelector('#paragrafo');
// if (elementoDaRimuovere) {
//     elementoDaRimuovere.remove();
// } else {
//     console.log("Elemento non trovato!")
// };

// Esercizio 2 Rimuovere un elemento figlio da un elemento padre:

// const elementoPadre = document.querySelector('#padre');
// const elementoFiglioDaRimuovere = elementoPadre.querySelector('.elementoFiglio');
// elementoPadre.removeChild(elementoFiglioDaRimuovere);

// Esercizio 3 Rimuovere tutti gli elementi figli di un elemento padre:

// const elementoPadre = document.querySelector('#padre2');
// elementoPadre.replaceChildren();

// Esercizio 4 Rimuovere un elemento al click su di esso:
// const elemento = document.querySelector('#mioElemento');
// elemento.addEventListener("click", function () {
//   elemento.remove();
// });

// Esercizio 4 MIGLIORATO CON THIS (FUNZIONE CLASSICA)

// const elemento = document.querySelector('#mioElemento');

// if (elemento) {
//     elemento.addEventListener("click", function() {
//         this.remove();
//     });
// }

// Esercizio 4 MIGLIORATO (FUNZIONE ARROW)

// const elemento = document.querySelector('#mioElemento');

// if (elemento) {
//     elemento.addEventListener('click', (event) => {
//         event.currentTarget.remove();
//     });
// } else {
//     console.log("Elemento non trovato");
// }

// Esercizio 5 Rimuovere un elemento al passaggio del mouse su di esso:

// const elemento = document.querySelector('#daElimindare');

// if (elemento) {
//     elemento.addEventListener('mouseover', function() {
//         this.remove();
//     });
// } else {
//     console.warn("Elemento non trovato");
// }

// Esercizio 6

// const elementiDaRimuovere = document.querySelectorAll(".spinnaker");

// if (elementiDaRimuovere) {
//     elementiDaRimuovere.forEach(function (elemento) {
//         elemento.remove();
//     })
// } else {
//     console.warn("Elemento non trovato");
// }

// Esercizio 7

// const elemento = document.querySelector("#daEliminareDopoTotTempo");
// if (elemento) {
//     setTimeout(() => {
//         elemento.remove();
//     }, 5000);
// } else {
//     console.warn("Elemento non trovato");
// }

// Esercizio 8

// window.addEventListener("scroll", () => {
//     const elemento = document.querySelector('#daEliminareConScorrimento');
//     if (elemento) elemento.remove();
// }, {once: true});

// Esercizio 9

// const bottone = document.querySelector('#daEliminareConEvento');

// if (bottone) {
//     bottone.addEventListener("click", () => {
//         const target = document.querySelector('#elementoDaRimuovere');
//         if (target) {
//             target.remove();
//             bottone.disabled = true;
//             bottone.textContent = "Testo eliminato"
//         }
//     });
// } else {
//     console.warn("Nessun elemento trovato");
// }

// Esercizio 10

// const button = document.querySelector('#daEliminareConEvento2');

// button.addEventListener("click", () => {
//     const elementiDaEliminare = document.querySelectorAll('.classic');
//     elementiDaEliminare.forEach(function (elemento) {
//         elemento.remove();
//     });
// });

// Esercizio 10 MIGLIORATO

const button = document.querySelector('#daEliminareConEvento2');

if (button) {
    button.addEventListener("click", () => {
        const elementiDaEliminare = document.querySelectorAll('.classic');
        elementiDaEliminare.forEach(elemento => elemento.remove());
        console.log("Elementi rimossi")
    });
}