/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const FRice: number = 3 * 18000
const MWater: number = 2 * 5000
const TotalAmount: number = FRice + MWater
const AfterDisc: number = TotalAmount - 10000

console.log("== Your Receipt ==")
console.log(`Fried Rice: ${FRice}`)
console.log(`Mineral Water: ${MWater}`)

console.log("== Payment ==")
console.log(`Grand Total: ${TotalAmount}`)
console.log(`Discounted Total: ${AfterDisc}`)