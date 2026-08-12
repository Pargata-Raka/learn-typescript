/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

type student = {
    assignment: number,
    midterm: number,
    final: number
}

const Alya: student = { assignment: 85, midterm: 80, final: 92 };
const Budi: student = { assignment: 78, midterm: 75, final: 81 };
const Citra: student = { assignment: 90, midterm: 89, final: 95 };

function calculateFinalGrade(s: student): number {
    const weightedScore = (s.assignment * 0.30) + (s.midterm * 0.30) + (s.final * 0.40);
    return Math.round(weightedScore); 
}

// Option 1: Pass individual grade properties
console.log("Alya Final Grade:", calculateFinalGrade(Alya));
console.log("Budi Final Grade:", calculateFinalGrade(Budi));
console.log("Citra Final Grade:", calculateFinalGrade(Citra));