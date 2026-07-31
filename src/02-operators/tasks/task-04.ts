/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

type Purchase = {
    Product: string
    Price: number
    Quantity: number
}

const Customer67 : Purchase[] = [
    {Product:"Mechanical Keyboard", Price: 85000, Quantity:1},
    {Product:"Wireless Mouse", Price: 275000, Quantity:2},
    {Product:"Mouse Pad", Price: 120000, Quantity:1}
]

const subtotal = Customer67.reduce((total, item) => total + (item.Price * item.Quantity), 0);
const totalQuantity = Customer67.reduce((sum, item) => sum + item.Quantity, 0);
const disccriteria = subtotal > 1000000 ? "Eligible" : "Not Eligible";

console.log("== Receipt ==");
console.log("Subtotal: ", subtotal);
console.log("Purchased items:", totalQuantity);
console.log("Discount Eligible?", disccriteria);
console.log("Final Price:", disccriteria == "Eligible" ? subtotal - (subtotal * (10/100)) : subtotal);



