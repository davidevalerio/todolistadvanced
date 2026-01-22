// Esercizio 1 Creare un nuovo elemento `div` e aggiungerlo al body del documento:

// const nuovoDiv = document.createElement("div");
// document.body.appendChild(nuovoDiv);

// Esercizio 1 PIU MODERNO e COMPLETO

// const nuovoDiv = document.createElement("div");
// nuovoDiv.className = "box primario";
// nuovoDiv.textContent ="Porco il clero";

// document.body.append(nuovoDiv);

// Esercizio 1 METODO PIU VELOCE E LEGGIBILE SE CI SONO TANTI ELEMENTI DA GENERARE

// const template = `<div class="card">
//                     <h2>TItolo</h2>
//                     <p>Contenuto della card ecc ecc</p>
//                 </div>`;

// document.body.insertAdjacentHTML('beforeend', template)

// Esercizio 2 Creare un nuovo elemento `p`, aggiungere del testo al suo interno e aggiungerlo a un elemento padre specifico:

// const nuovoParagrafo = document.createElement("p");
// nuovoParagrafo.textContent = "Questo e' un nuovo paragrafo";

// const elementoPadre = document.querySelector("#elementoPadre");
// elementoPadre.appendChild(nuovoParagrafo);
// OPPURE elementoPadre?.append(nuovoParagrafo);

// Esercizio 3 Creare un nuovo elemento `img` e impostare l'attributo src e alt:

// const elementoImg = document.createElement("img");
// elementoImg.src = "immagine.jpg";
// elementoImg.alt = "foto enrico papi"
// document.body.append(elementoImg);

// Esercizio 4

// const elementiLista = ["Elemento 1", "Elemento 2", "Elemento 3"];
// const nuovaLista = document.createElement("ul");
// nuovaLista.textContent = "Listone:"

// elementiLista.forEach(testo => {
//   const li = document.createElement("li");
//   li.textContent = testo;
//   nuovaLista.append(li);
// });

// document.body.append(nuovaLista);

// Esercizio 5 Creare un nuovo elemento `a` con un link e impostare l'attributo href:

// const linkazzo = document.createElement("a");
// linkazzo.href = "https://www.youtube.com";
// linkazzo.textContent = "Visita YouTube";

// document.body.append(linkazzo);

// Esercizio 5 Versione Moderna con Object Assign

// const link = Object.assign(document.createElement("a"), {
//   href: "https://www.youtube.com",
//   textContent: "Visita YouTube",
//   target: "_blank",
//   className: "link-esterno"
// });

// document.body.append(link);


// Esercizio 6 Creare un nuovo elemento `input` di tipo testo e aggiungerlo a un modulo:

// const nuovoInput = document.createElement("input");
// nuovoInput.type = "text";
// const modulo = document.querySelector("#modulo-id");
// modulo.append(nuovoInput);

// Esercizio 6 Migliorato

// const nuovoInput = document.createElement("input");

// // Impostazione multipla di attributi
// nuovoInput.type = "text";
// nuovoInput.placeholder = "Scrivi il tuo nome...";
// nuovoInput.name = "nomeUtente";
// nuovoInput.id = "inputNome"; // Serve per collegarlo alla label

// const modulo = document.querySelector("#modulo-id");
// modulo.append(nuovoInput);

// Esercizio 7 Creare un nuovo elemento `button` e aggiungere un gestore di eventi per il click:

// const buttonNew = document.createElement("button");
// buttonNew.textContent = "PREMI QUA";

// buttonNew.addEventListener("click", (event) => {
//     event.target.textContent = "Ahia! Mi hai fatto male";
//     event.target.style.backgroundColor = "red";
//     event.target.style.color = "white";
// });

// document.body.append(buttonNew);

// Esercizio 8 Creare una nuova tabella `table` con righe `tr` e colonne `td`:

// const tabellaNew = document.createElement("table");

// for (let i = 0; i < 3; i++) {
//     const nuovaRiga = document.createElement("tr");

//     for (let j = 0; j < 3; j++) {
//         const nuovaColonna = document.createElement("td");
//         nuovaColonna.textContent = `Riga ${i + 1}, Colonna ${j + 1}`;
//         nuovaRiga.appendChild(nuovaColonna);
//     }

//     tabellaNew.appendChild(nuovaRiga);
// };

// document.body.append(tabellaNew);

// Esercizio 9 Creare un nuovo elemento `select` con opzioni `option`:

// const selectNew = document.createElement("select");
// const opzioniNew = ["Opzione A", "Opzione B", "Opzione C"];

// opzioniNew.forEach(function (testoOpzione) {
//     const nuovaOpzione = document.createElement("option");
//     nuovaOpzione.textContent = testoOpzione;
//     selectNew.append(nuovaOpzione);
// });

// document.body.append(selectNew);

// Esercizio 10 Creare un nuovo elemento `textarea` e impostarne il valore predefinito:

const textAreaNew = document.createElement("textarea");
textAreaNew.value = "Testo prederefinito";
document.body.append(textAreaNew);
