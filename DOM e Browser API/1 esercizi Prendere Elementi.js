// Esercizio 1

// const elemento = document.getElementById('mio-elemento');

// elemento.textContent=`Che bello gesu`;

// console.log(elemento.textContent);

// Esercizio 2

// const elementi = document.getElementsByClassName("mioElemento");

// for (let i = 0; i < elementi.length; i++) {
// elementi[i].style.color="red";
// }

// Esercizio 2 con querySelectorAll PIU MODERNA

// const elementi = document.querySelectorAll('.mioElemento');

// elementi.forEach(elemento => {
//     elemento.style.color = "red";
// });

// Esercizio 3

// const elementi = document.querySelectorAll('p');

// elementi.forEach(elemento => {
//     elemento.classList.add("mioStile");
// });

// Esercizio 4

// const elemento = document.querySelector("#mioElemento4");
// elemento.textContent = "Nuovo testo!";

// Esercizio 5

// const elementi = document.querySelectorAll(".mioElemento5");

// elementi.forEach(elemento => {
//     elemento.style.display = "none";
// })

// Esercizio 6

// const input = document.getElementById("mioElemento6");
// console.log(input.value);

// Esercizio 7

// const select = document.getElementById("mioSelect");
// const valoreSelezionato = select.value;
// console.log(valoreSelezionato);

// Esercizio 8

// const checkbox = document.getElementById("mioCheckbox");
// checkbox.addEventListener("change", () => {
//     const isChecked = checkbox.checked;
//     console.log("Il checkbox è selezionato?", isChecked);
// });

// Esercizio 9 TUTTAVIA GETELEMENTSBYNAME si usa raramente

// const radios = document.getElementsByName("mioRadio");

// let valoreSelezionato;
// radios.forEach((radio) => {
//     if (radio.checked) {
//         valoreSelezionato = radio.value;
//     }
// });
// console.log(valoreSelezionato);

// Esercizio 9 con queryselector

// const radius = document.querySelector('input[name="mioRadio"]:checked');

// const valoreSelezionato = radius?.value;

// console.log(valoreSelezionato || "Nessuna selezione");

// Esercizio 10

document.querySelectorAll("#elementoPadre > *")
  .forEach(figlio => figlio.classList.add("miaFamiglia"));