// app.js
import prodotti from './prodotti.js'; // Import default (senza graffe)
import { calcolaTotale } from './math.js'; // Import nominato (con graffe)

prodotti.forEach(p => {
    const totale = calcolaTotale(p.prezzo, 1);
    console.log(`${p.nome}: €${totale.toFixed(2)} (IVA inclusa)`);
});