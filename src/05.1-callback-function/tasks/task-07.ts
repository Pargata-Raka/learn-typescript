/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

import { table } from "node:console";

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];
type Student = {
    name: string;
    score: number;
    attendance: number;
};

type PASSING_STATUS = "Passed" | "Failed"
type FINAL_RECOMMENDATION = "Excellent" | "Good" | "Improve Attendance" | "Improve Academic Performance"
type STUDENT_PASSING_STATUS = Student & { status: PASSING_STATUS };
type STUDENT_RECOMMENDATION = Student & { status: FINAL_RECOMMENDATION}

function determinePassFail(selectedStudent: Student): STUDENT_PASSING_STATUS {
    let PFstatus: PASSING_STATUS = "Failed";

    // Direct check on the single student object
    if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        PFstatus = "Passed";
    } else {
        PFstatus = "Failed";
    }
    return {
        ...selectedStudent,
        status: PFstatus
    };
}
function determineRecommendation(selectedStudent: Student): STUDENT_RECOMMENDATION {
    let Recommendation: FINAL_RECOMMENDATION = "Improve Academic Performance";

    // Direct check on the single student object
    if (selectedStudent.score >= 90 && selectedStudent.attendance >= 90) {
        Recommendation = "Excellent";
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        Recommendation = "Good";
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance < 90) {
        Recommendation = "Improve Attendance";
    } else {

    }
    return {
        ...selectedStudent,
        status: Recommendation
    };
}

function studentProcess<T>(
    arr: Student[],
    callback: (student: Student) => T
): T[] {
    return arr.map(callback);
}

const PassingStatus = studentProcess(students, determinePassFail);
const StudentRecommendation = studentProcess(students, determineRecommendation)

console.log(`== Passing Status ==`);
console.table(PassingStatus);
console.log(`== Student Recommendation ==`);
console.table(StudentRecommendation)