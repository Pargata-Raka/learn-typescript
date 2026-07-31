/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const OvtRate : number = 50000
const OvtBonus: number = 300000

type Employee = {
    Name: string,
    BaseSalary: number,
    OvtHours: number,
}


const Dimas:Employee = {
    Name: "Dimas",
    BaseSalary: 5000000,
    OvtHours: 12,
}

let OvtPay: number = OvtRate * Dimas.OvtHours

console.log("== Employee Data ==");
console.log(`Employee Name: `, Dimas.Name);
console.log(`Base Salary: `, Dimas.BaseSalary);
console.log("===  Overtime  ===");
console.log(`Hours: `, Dimas.OvtHours);
console.log(`Pay: `, OvtPay);
console.log(`Bonus (10 Hours): `, OvtBonus);
console.log(`Final Pay: `, OvtPay+OvtBonus)