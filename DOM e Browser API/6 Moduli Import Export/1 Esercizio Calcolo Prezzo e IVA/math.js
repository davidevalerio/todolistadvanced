// math.js
export const IVA = 0.22; // 22%

export function calcolaTotale(prezzo, quantita) {
    const lordo = prezzo * quantita;
    return lordo + (lordo * IVA);
};