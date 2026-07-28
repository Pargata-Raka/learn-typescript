/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {
    ID: string
    Name: string
    Grade: number
    RegistedSince: String
    Paid: boolean
}

type Course = {
    ID: string
    Title: string
    Grade: number
    Instructor: string
    TotalHours: number
}

const Batch11 : Student[] = [
    { ID: `53009`, Name: `Jonathan Joestar`, Grade: 11, RegistedSince: `02/08/2024`, Paid: true},
    { ID: `53034`, Name: `Allison Burgers`, Grade: 10, RegistedSince: `01/11/2025`, Paid: true},
    { ID: `53011`, Name: `Manny Pardo`, Grade: 12, RegistedSince: `12/02/2023`, Paid: true}
]

const Courselist2 : Course[] = [
    { ID: `004`, Title: `Artificial Intelligence`, Grade: 11, Instructor: `Artifika Quintell E. Gens`, TotalHours: 3},
    { ID: `005`, Title: `Taekwondo`, Grade: 10, Instructor: `Fujimoto Artika`, TotalHours: 4},
    { ID: `006`, Title: `English Club`, Grade: 10, Instructor: `John English`, TotalHours: 3}
]

Batch11.forEach(row => {
    console.log(`Student ID: ${row.ID} 
    | Name: ${row.Name}
    | Grade: ${row.Grade}
    | Registered: ${row.RegistedSince} 
    | Has Paid?: ${row.Paid}
    `);
});

Courselist2.forEach(row => {
    console.log(`Course ID: ${row.ID} 
    | Title: ${row.Title}
    | Grade: ${row.Grade}
    | Current Instructor: ${row.Instructor} 
    | Total course hours: ${row.TotalHours}
    `);
});