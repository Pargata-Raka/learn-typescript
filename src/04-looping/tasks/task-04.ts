/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */
const sales = [
  125000,350000,78000,910000,150000,420000,275000,99000,640000,18000
]

let total = 0;
let excesstransaction = 0;

let highest = sales[0]
let lowest = sales[0]

for (const key of sales) {
  total += key;

  if (key > highest) {
    highest = key;
  }
  if (key < lowest) {
    lowest = key;
  }
  if (key >= 300000) {
    excesstransaction++;
  } 
}


const average = total / sales.length;

console.log("== Sales Summary ==");
console.log("Total Sales Revenue:", total);
console.log("Highest Sale:", highest);
console.log("Lowest Sale:", lowest);
console.log("300.000+ Transaction:", excesstransaction);
console.log("Average Transaction Value:", average);
