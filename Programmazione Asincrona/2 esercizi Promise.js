// Esempio Gemini

const ordinePizza = new Promise((resolve, reject) => {
    let pizzaPronta = false;

    setTimeout(() => {
        if (pizzaPronta) {
            resolve("Ecco la pizza");
        } else {
            reject("Mi spiace. Si e' rotto il forno");
        }
    }, 2000);
});
ordinePizza
    .catch((errore) => {
        console.error(errore)
    });

// 1 Creare una promise che si risolve dopo 2 secondi:

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promessa rigettata");
    }, 2000);
});

promessa
    .then((risultato) => {
        console.log(risultato)
    })
    .catch((errore) => {
        console.error(errore);
    });

// 2 Creare una promise che viene rifiutata dopo 3 secondi:

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promessa risolta");
    }, 3000);
});

promessa
    .then((risultato) => {
        console.log(risultato);
    })
    .catch((errore) => {
        console.error(errore);
    });