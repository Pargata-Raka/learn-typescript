/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

import { after } from "node:test";

const rewardrate = 1 ;
const memberdisc = 10/100;
const VAT = 11/100;

type order = {
    Name: string
    Price: number
    Quantity: number
}
type customer = {
    Voucher: number
    Premiummember: boolean
}

const batch11 : order[] = [
    {Name: "Mechanical Keyboard", Price: 850000, Quantity: 1},
    {Name: "Wireless Mouse", Price: 275000, Quantity: 2},
    {Name: "Monitor Stand", Price: 420000, Quantity: 1}
]

const chris:customer = {
    Voucher: 100000,
    Premiummember: true
}

const subtotal = batch11.reduce((total, order) => total + (order.Price * order.Quantity), 0);
const aftermember = subtotal * memberdisc
const beforetax = aftermember - chris.Voucher
const VATcut = beforetax * VAT
const Final = subtotal - aftermember - chris.Voucher - VATcut

console.log("Total Price:", subtotal);
console.log("Discount:", aftermember);
console.log("Voucher deduction:", chris.Voucher);
console.log("Payment Before Tax:", beforetax);
console.log("VAT:", VATcut);
console.log("Final Payment:", Final);
console.log("Reward points:", Math.trunc(Final/50000));
console.log("Free Shipping:", chris.Premiummember == true || Final > 1500000 ? "Eligible" : "Not Eligible" );
