/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */

type bootcamp = {
    ID: string
    Name: string
    Age: number
    HasPaid: Boolean
}

const BackendDev : bootcamp[] = [
    { ID: `ST001`, Name: `Ahmad Fauzi`, Age: 16, HasPaid: true},
    { ID: `ST002`, Name: `Siti Nurhaliza`, Age: 17, HasPaid: false},
    { ID: `ST003`, Name: `Budi Santoso`, Age: 16, HasPaid: true}
]

BackendDev.forEach(row => {
    console.log(`Student ID: ${row.ID} 
    | ID: ${row.ID}
    | Name: ${row.Name}
    | Age: ${row.Age} 
    | Has Paid?: ${row.HasPaid}
    `);
});