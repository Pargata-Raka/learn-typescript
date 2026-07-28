/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

type product = {
    Code: string
    Name: string
    Price: number
    Stock: number
    DiscountPercent: number
    Flashsale: boolean
}

const RGBKeyboard: product = {
    Code: "KBR-001",
    Name: "Mechanical Keyboard RGB",
    Price: 850000,
    Stock: 18,
    DiscountPercent: 25,
    Flashsale: true
}

type Order = {
    Amount: number
    PremiumAcc: boolean
    ShippingCost: number
}

const Gamer: Order = {
    Amount: 2,
    PremiumAcc: true,
    ShippingCost: 0
}

console.log("== Product ==")
console.log(`Name: ${RGBKeyboard.Name}`)
console.log(`ID: ${RGBKeyboard.Code}`)
console.log(`Price: ${RGBKeyboard.Price}` + " IDR")
console.log(`Is it on Flash Sale? ${RGBKeyboard.Flashsale}`)
console.log(`Discount: ${RGBKeyboard.DiscountPercent}` + "%")
console.log(`Current stock available: ${RGBKeyboard.Stock}`)

console.log("== Order ==")
console.log(`Quantity: ${Gamer.Amount}`)
console.log(`Is a premium user? ${Gamer.PremiumAcc}`)
console.log(`Shipping Cost: ${Gamer.ShippingCost}` + " IDR")