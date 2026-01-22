// main.js

import { convertiInDollari as toUSD, SIMBOLO } from "./cambio.js";

const budgetEuro = 100;

console.log(`${budgetEuro} Euro sono ${toUSD(budgetEuro).toFixed(2)} ${SIMBOLO}.`);