/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outtastock = 0;
let lowstock = 0;
let safestock = 0;
let total = 0;

for (const key of stocks) {
    total += key;

    if (key == 0) {
        outtastock++
    }
    if (key < 10) {
        lowstock++
    }
    if (key >= 10) {
        safestock++
    }
}

const avgstock = total / stocks.length;

console.log("Out of Stock:", outtastock);
console.log("Low Stocks:", lowstock);
console.log("Safe Stocks:", safestock);
console.log("Total Inventory:", total);
console.log("Average Stock Quantity:", avgstock);

