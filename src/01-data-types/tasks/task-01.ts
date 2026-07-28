import { log } from "node:console"

/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */
const name: string = `Nadia Putri`
const studentId: string = `ST2026045`

type StudentScore = {
    assignment: number
    midTerm: number
    final: number
    attendance: number
}

const nadiaScore: StudentScore = {
    assignment: 90,
    midTerm: 100,
    final: 90.5,
    attendance: 100
}

const extracurricularActivity: string = "Scout"

console.log(`Name: ${name}`)
console.log(`ID: ${studentId}`)
console.log("Extracurricular Activity" + extracurricularActivity)
console.log("Assignment Score: " + nadiaScore.assignment)
console.log(`Midterm Score: ${nadiaScore.midTerm}`)
console.log(`Final Score: ${nadiaScore.final}`)
console.log(`Attendance Score: ${nadiaScore.attendance}`)

