/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
    let total = 0;
    for (const key of sales) {
        total += key 
    }
    return total
}

function findHighestTransaction(sales: number[]): number {
    let highest = sales[0];
    for (const key of sales) {
        if (key > highest) {
            highest = key;
        }
    }
    return highest
}

function findLowestTransaction(sales: number[]): number {
    let lowest = sales[0];
    for (const key of sales) {
        if (key < lowest) {
            lowest = key;
        }
    }
    return lowest
}

function calculateAverageSale(sales: number[]): number {
    let total = 0;
    for (const key of sales) {
        total += key; 
    }
    const average = total / sales.length;
    return average
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
    let largetransaction = 0;
    for (const key of sales) {
        if (key > minimumAmount) {
            largetransaction++
        }
    }
    return largetransaction
}

console.log("Total Sales:", calculateTotalSales(sales));
console.log("Highest Transaction:", findHighestTransaction(sales));
console.log("Lowest Transaction:", findLowestTransaction(sales));
console.log("Today's Average:", calculateAverageSale(sales));
console.log("Large Transactions:", countLargeTransactions(sales, 500000), "Out of", sales.length);
