// cambio.js

export const TASSO_CAMBIO = 1.08;
export const SIMBOLO = "$";

export function convertiInDollari (euro) {
    return euro * TASSO_CAMBIO;
};