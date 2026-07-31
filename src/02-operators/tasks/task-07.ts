/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const tax:number =  11/100
const VIPdisc:number =  12/100

type Hotel = {
    PPNight: number
    Nights: number
    ServCharge: number
    VIPStatus: boolean
}

const Jeffrey: Hotel = {
    PPNight: 650000,
    Nights: 4,
    ServCharge: 120000,
    VIPStatus: true
}

const subtotal:number = Jeffrey.PPNight * Jeffrey.Nights
const VIPcut:number = subtotal * VIPdisc
const Taxcut:number = subtotal * tax
const FinalPay:number = subtotal + Jeffrey.ServCharge - VIPdisc + Taxcut

console.log("Subtotal:", subtotal);
console.log("Discount:", VIPcut);
console.log("Tax Cut:", Taxcut);
console.log("Final Pay:", FinalPay);
console.log("Breakfast Eligible:", Jeffrey.Nights >= 3 || Jeffrey.VIPStatus ? "Eligible" : "Not Eligible");
