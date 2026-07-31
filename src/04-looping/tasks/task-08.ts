import { read } from "node:fs";

/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let ready = 0;
let unpaid = 0;
let restocking = 0;
const readyID: string[] = [];

for (const key of orders) {
  if (key.paid && key.stockAvailable) {
    ready++;
    readyID.push(key.id)
  } 
  if (!key.paid) {
    unpaid++;
  }
  if(!key.stockAvailable) {
    restocking++
  }
}

console.log("Ready to ship:", ready);
console.log("Unpaid orders:", unpaid);
console.log("Awaiting Restocks:", restocking);
console.log("Shipped items ID:", readyID.join(", "));


