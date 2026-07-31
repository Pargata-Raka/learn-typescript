/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

let charge:number = 8000;
const fullhour:number = 60;
const discountamount:number = 15;
const discount:number = (100 - discountamount) / 100;

type Playtime = {
    Hours: number
    Minutes: number
}

const John : Playtime = {
    Hours: 7,
    Minutes: 35
}

console.log(discount);

console.log("Total Playtime:", John.Hours * fullhour + John.Minutes, "Minutes");
console.log("Remaining minutes:", John.Minutes, "Minutes");
console.log("Total Billed Hours:", John.Hours, "Hours");
console.log("Before discount:", charge * John.Hours);
console.log("Discount amount:", discountamount,"%");
console.log("Final Payment:", charge * John.Hours * discount);

