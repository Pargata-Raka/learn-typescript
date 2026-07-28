/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type StudentInfo = {
    ID: String
    Name: String
    Age: Number
    ActiveStudent: Boolean
}

const XIICP : StudentInfo[] = [
    {ID: "A10001", Name: "Jeffrey Epstein", Age: 16, ActiveStudent: true},
    {ID: "A10002", Name: "Ladis Wusrum", Age: 17, ActiveStudent: false},
    {ID: "A10003", Name: "Fullios Stackos", Age: 16, ActiveStudent: true}
]

console.log("== Student Info ==");
XIICP.forEach(row => {
  console.log(`ID: ${row.ID} | Name: ${row.Name}| Age: ${row.Age}| Is Active: ${row.ActiveStudent}`);
});