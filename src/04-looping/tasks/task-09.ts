/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let As = 0;
let Bs = 0;
let Cs = 0;
let Ds = 0;
let total= 0;
let highscore = students[0];
let lowscore = students[0];

for (const key of students) {
    total += key.score

    if (key.score >= 90) {
        As++
    }
    if (key.score >= 80 && key.score < 90) {
        Bs++
    }
    if (key.score >= 70 && key.score < 80) {
        Cs++
    }
    if (key.score < 70) {
        Ds++
    }
    if (key.score > highscore.score) {
        highscore = key;
    }
    if (key.score < lowscore.score) {
        lowscore = key;
    }

}    
const avgscore = total / students.length;

console.log("A Scorers:", As);
console.log("B Scorers:", Bs);
console.log("C Scorers:", Cs);
console.log("D Scorers:", Ds);
console.log("Highest Score:", highscore);
console.log("Lowest Scorers:", lowscore);
console.log("Average Scores:", avgscore);
