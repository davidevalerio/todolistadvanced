// Esercizio Gemini 1

const pacchi = [
    { id: 1, peso: 5 },
    { id: 2, peso: 12 },
    { id: 3, peso: 8 }
];

// ESERCIZIO:
// 1. Il valore iniziale deve essere 0.
// 2. Ad ogni giro, somma il 'peso' del pacco corrente all'accumulatore.

const pesoTotale = pacchi.reduce((acc, pacco) => {
    return acc + pacco.peso;
}, 0);

console.log(pesoTotale); // Dovrebbe uscire 25

// Esercizio Gemini 2

const transazioni = [
    { id: 1, importo: 50 },
    { id: 2, importo: 150 },
    { id: 3, importo: 200 },
    { id: 4, importo: 20 }
];

// ESERCIZIO SENIOR:
// 1. Partiamo da un oggetto iniziale: { totale: 0, grandi: 0 }
// 2. Ad ogni giro, restituiamo un NUOVO oggetto usando lo spread sull'accumulatore.
// 3. Aggiorniamo 'totale' sommano l'importo.
// 4. Aggiorniamo 'grandi' usando un ternario: se importo > 100, aggiungi 1, altrimenti 0.

const report = transazioni.reduce((acc, curr) => {
    return {
        ...acc,
        totale: acc.totale + curr.importo,
        grandi: curr.importo > 100 ? acc.grandi + 1 : acc.grandi
    };
}, { totale: 0, grandi: 0});

console.log(report);

// Esercizio Gemini

const spese = [
    { id: 1, importo: 50, categoria: "Cibo" },
    { id: 2, importo: 30, categoria: "Trasporto" },
    { id: 3, importo: 25, categoria: "Cibo" },
    { id: 4, importo: 10, categoria: "Trasporto" }
];

// ESERCIZIO:
// 1. Valore iniziale dell'accumulatore: { spesaCibo: 0, spesaTrasporto: 0, numeroOperazioni: 0 }
// 2. Usa lo spread (...acc) per mantenere i dati.
// 3. Usa i ternari per decidere quale categoria aggiornare.
// 4. Ricorda di incrementare sempre 'numeroOperazioni' di 1 ad ogni giro.

const reportViaggio = spese.reduce((acc, curr) => {
    return {
        ...acc,
        spesaCibo: curr.categoria === "Cibo" ? acc.spesaCibo + curr.importo : acc.spesaCibo,
        spesaTrasporto: curr.categoria === "Trasporto" ? acc.spesaTrasporto + curr.importo : acc.spesaTrasporto,
        numeroOperazioni: acc.numeroOperazioni + 1
    }
}, { spesaCibo: 0, spesaTrasporto: 0, numeroOperazioni: 0 });

console.log(reportViaggio);
// Risultato atteso: { spesaCibo: 75, spesaTrasporto: 40, numeroOperazioni: 4 }

// Esercizio FILTER MAP REDUCE

const vendite = [
    { id: 1, categoria: "Software", importo: 500 },
    { id: 2, categoria: "Hardware", importo: 1000 },
    { id: 3, categoria: "Software", importo: 80 },
    { id: 4, categoria: "Software", importo: 200 }
];

// ESERCIZIO:
// Concatena .filter().map().reduce()
const totaleBonus = vendite
    .filter(item => item.categoria === "Software" && item.importo > 100)
    .map(/* estrai id e calcola provvigione: importo * 0.15 */ ({ importo, ...resto }) => {
    return {
        ...resto,
        provvigione: importo * 0.15,
    };
})
    .reduce(/* somma le provvigioni partendo da 0 */(acc, curr) => {
        return acc + curr.provvigione;
    }, 0);

console.log(totaleBonus);
// Risultato atteso: (500 * 0.15) + (200 * 0.15) = 75 + 30 = 105

// Esercizio Filter, Map e Reduce

const catalogo = [
    { titolo: "Documentario Natura", views: 2500, durata: 45, isOriginal: false },
    { titolo: "Serie Sci-Fi", views: 10000, durata: 60, isOriginal: true },
    { titolo: "Tutorial Cucina", views: 500, durata: 15, isOriginal: false },
    { titolo: "Recensione Tech", views: 1200, durata: 20, isOriginal: false },
    { titolo: "Cortometraggio Indie", views: 3000, durata: 10, isOriginal: false }
];

const totaleOttimizzato = catalogo.reduce((acc, x) =>{

    if(!x.isOriginal && x.views > 1000) {
        return acc + (x.durata * 0.05);
    }
    return acc;
}, 0);

console.log(totaleOttimizzato);

// SCRIVI QUI IL TUO CODICE:
const totaleGuadagniPubblicitari = catalogo
    .filter(item => !item.isOriginal && item.views > 1000)

    .map(({ durata }) => {
        const guadagno = durata * 0.05;
        return guadagno;
    })

    .reduce((acc, curr) => {
    return acc + curr;
    }, 0);

console.log(totaleGuadagniPubblicitari);

// Alternative con solo Reduce

const catalogo = [
    { titolo: "Documentario Natura", views: 2500, durata: 45, isOriginal: false },
    { titolo: "Serie Sci-Fi", views: 10000, durata: 60, isOriginal: true },
    { titolo: "Tutorial Cucina", views: 500, durata: 15, isOriginal: false },
    { titolo: "Recensione Tech", views: 1200, durata: 20, isOriginal: false },
    { titolo: "Cortometraggio Indie", views: 3000, durata: 10, isOriginal: false }
];

const totaleOttimizzato = catalogo.reduce((acc, x) =>{

    if(!x.isOriginal && x.views > 1000) {
        return acc + (x.durata * 0.05);
    }
    return acc;
}, 0);

console.log(totaleOttimizzato);

// Esercizio Data Grouping

const catalogo = [
    { titolo: "Documentario Natura", views: 2500, durata: 45, isOriginal: false },
    { titolo: "Serie Sci-Fi", views: 10000, durata: 60, isOriginal: true },
    { titolo: "Tutorial Cucina", views: 500, durata: 15, isOriginal: false },
    { titolo: "Recensione Tech", views: 1200, durata: 20, isOriginal: false },
    { titolo: "Cortometraggio Indie", views: 3000, durata: 10, isOriginal: true }
];

const reportGuadagni = catalogo.reduce((acc, curr) => {
    // 1. Calcola il guadagno del video corrente
    // 2. Controlla se curr.isOriginal è true o false
    // 3. Aggiorna la proprietà corretta dell'accumulatore (acc.original o acc.nonOriginal)
    // 4. Ricorda di restituire l'accumulatore!
    const guadagno = curr.durata * 60 * 0.05;

    if (curr.isOriginal) {
        acc.original += guadagno;
    } else {
        acc.nonOriginal += guadagno;
    }
    return acc;
}, { original: 0, nonOriginal: 0 });

console.log(reportGuadagni);

// Esercizio Data Grouping 2

const catalogo = [
    { titolo: "Documentario Natura", tipo: "Educational", durata: 45 },
    { titolo: "Serie Sci-Fi", tipo: "Entertainment", durata: 60 },
    { titolo: "Tutorial Cucina", tipo: "Educational", durata: 15 },
    { titolo: "Recensione Tech", tipo: "Tech", durata: 20 },
    { titolo: "Cortometraggio Indie", tipo: "Entertainment", durata: 10 }
];

const reportGuadagni = catalogo.reduce((acc, curr) => {
    const guadagno = curr.durata * 60 * 0.05;

    if (!acc[curr.tipo]) {
        acc[curr.tipo] = 0;
    };

    acc[curr.tipo] += guadagno;

    return acc;
}, {});

console.log(reportGuadagni)

// Esercizio Acc come contenitore

const invitati = ["  mario ", "a", " LUCIA  ", "  pAolo", " ", "ELISA"];

// SCRIVI QUI IL TUO CODICE:
const listaPulita = invitati
    .filter(nome => nome.trim().length > 2)
    .map(nome => {
        const n = nome.trim();
        return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
    })
    //.reduce. e' inutile utilizzare reduce in questo caso. meglio andare col join nel console.log

console.log(listaPulita.join(", "));

// Esercizio 

const carrello = [
    { prodotto: "Smartphone", prezzo: 500, disponibile: true },
    { prodotto: "Cover", prezzo: 20, disponibile: true },
    { prodotto: "Cuffie BT", prezzo: 150, disponibile: false }, // Non disponibile!
    { prodotto: "Caricatore", prezzo: 30, disponibile: true },
    { prodotto: "Pellicola", prezzo: 10, disponibile: false }  // Non disponibile!
];

// SCRIVI QUI IL TUO CODICE:

const totaleScontato = carrello
    .reduce((acc, curr) => {
    const prezzoScontato = curr.prezzo * 0.9;

        if (curr.disponibile) {
            return acc += prezzoScontato
        }

        return acc;
    }, 0);

console.log(totaleScontato);

const totaleScontato = carrello
    .filter(item => item.disponibile)
    .map(item => item.prezzo * 0.9)
    .reduce((acc, curr) => {
        return acc + curr;
    }, 0);

console.log(totaleScontato);

// Esercizio

const festival = [
    { 
        film: "Matrix Resurrections", 
        genere: "Action", 
        cast: [
            { nome: "Keanu Reeves", cachet: 1000 },
            { nome: "Carrie-Anne Moss", cachet: 800 }
        ]
    },
    { 
        film: "Il Glossario di CSS", 
        genere: "Documentary", 
        cast: [
            { nome: "Uno Sviluppatore", cachet: 500 }
        ]
    },
    { 
        film: "John Wick 4", 
        genere: "Action", 
        cast: [
            { nome: "Keanu Reeves", cachet: 1200 },
            { nome: "Ian McShane", cachet: 700 }
        ]
    }
];

const movies = festival
    .filter( item => item.genere === "Action" )
    .flatMap( item => item.cast)
    .reduce((acc, curr) => acc += curr.cachet, 0)

console.log(movies);