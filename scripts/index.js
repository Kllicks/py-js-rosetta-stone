// Configuration ===================================
const LEVEL_GOOD = `good`;
const LEVEL_FAIR = `fair`;
const LEVEL_BAD = `bad`;

const TIP_GOOD = 0.2;
const TIP_FAIR = 0.15;
const TIP_BAD = 0.1;

// Processing ======================================

// start with const until something breaks
// Note: JavaScript will concatenate strings and numbers into strings.
const totalBill = parseFloat(`292.34`);
// const totalBill = 292.34;
const levelOfService = `fair`;

// If you leave off const or let or var
// you end up with a var
let tip = 0.0;

if (levelOfService === LEVEL_GOOD) {
    tip = totalBill * TIP_GOOD;
} else if (levelOfService === LEVEL_FAIR) {
    tip = totalBill * TIP_FAIR;
} else if (levelOfService === LEVEL_BAD) {
    tip = totalBill * TIP_BAD;
} else {
    console.log(`Invalid Input. `);
}

// Result===========================================
console.log(`Tip amount: ${tip.toFixed(2)}`);
console.log(`Total amount: ${(totalBill + tip).toFixed(2)}`);