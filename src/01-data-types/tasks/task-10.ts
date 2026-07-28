/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

type Product = {
    Code: string
    Name: string
    Price: number
    Quantity: number
    HasFreeShipping: boolean
}

const BackendDev : Product[] = [
    { Code: `KB001`, Name: `Mechanical Keyboard`, Price: 850000, Quantity: 1, HasFreeShipping: true},
    { Code: `MS002`, Name: `Wireless Mouse`, Price: 275000, Quantity: 2, HasFreeShipping: true},
    { Code: `KB001`, Name: `External SSD 1TB`, Price: 1650000, Quantity: 1, HasFreeShipping: false},
    { Code: `KB001`, Name: `Gaming Headset`, Price: 720000, Quantity: 1, HasFreeShipping: true},
]

BackendDev.forEach(row => {
    console.log(`Product Code: ${row.Code} 
    | Name: ${row.Name}
    | Price: ${row.Price}
    | Available amount: ${row.Quantity} 
    | Free Shipping available? ${row.HasFreeShipping}
    `);
});