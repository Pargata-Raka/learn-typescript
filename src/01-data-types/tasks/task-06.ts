/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    Information: string
    Code: string
    Name: string
    Price: number
    Quantity: number
    WeightKG: number
    AVGRating: number
    Continued: boolean
}

const Batch11 : Product[] = [
    { Information: `A Table made out of pure basalt`, Code: `914`, Name: `Basalt Table`, Price: 2500, Quantity: 23, WeightKG: 25, AVGRating: 4.3, Continued: true},
    { Information: `A sledgehammer to hit people with`, Code: `244`, Name: `Sledgehammer`, Price: 500, Quantity: 56, WeightKG: 3, AVGRating: 4.5, Continued: true},
    { Information: `Mourn and laugh`, Code: `322`, Name: `Limited-Edition Spongebob Gravestone`, Price: 10000, Quantity: 0, WeightKG: 2, AVGRating: 2.1, Continued: false},
]

Batch11.forEach(row => {
    console.log(`Information: ${row.Information} 
    | Production Code: ${row.Code}
    | Name: ${row.Name}
    | Price: ${row.Price}$ 
    | Weight: ${row.WeightKG} KG
    | Average Rating: ${row.AVGRating}
    | Continued: ${row.Continued}
    `);
});