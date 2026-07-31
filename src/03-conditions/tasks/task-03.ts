/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

type customer = {
    Name: string
    MonthlyUsage: number
}

const Raka : customer = {
    Name: "Raka Saputra",
    MonthlyUsage: 124
}

if (Raka.MonthlyUsage < 50) {
    console.log("We recommend you Basic package")
}
else if (Raka.MonthlyUsage > 150) {
    console.log("We recommend you Premium package")
}
else { 
    console.log("We recommend you Standard package")
}