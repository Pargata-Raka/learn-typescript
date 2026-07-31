/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submitted = 0;
let didntsubmit = 0;
let passed = 0;
let revise= 0;
let totalscore= 0;
const naughtylist: string[] = [];
const remedy: string[] = [];

for (const key of submissions) {
    totalscore += key.score

    if (key.submitted == true) {
        submitted++
    } else {
        didntsubmit++
        naughtylist.push(key.student)
    }
    if (key.score >= 75) {
        passed++
    } else {
        revise++
        remedy.push(key.student)
    }
    const avgscore = totalscore / submissions.length;
}

console.log("Submitted:", submitted);
console.log("Did not Submit:", didntsubmit);
console.log("Passed:", passed);
console.log("Revision needed:", revise);
console.log("Students that didn't submit:", naughtylist.join(", "));
console.log("Students that must revise:", remedy.join(", "));
