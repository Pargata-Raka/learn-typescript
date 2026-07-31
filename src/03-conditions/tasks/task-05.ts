/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

type scholarshipcandidate = {
    name: string,
    GPA: number,
    Income: number,
    compcount: number,
    hasdiscrec: boolean,
    doccomplete: boolean
}

const Fajar : scholarshipcandidate = {
    name: "Fajar Hidayat",
    GPA: 3.86,
    Income:4200000,
    compcount: 4,
    hasdiscrec: false,
    doccomplete: true
}

if (Fajar.GPA > 3.75 && Fajar.Income < 5000000) {
    if (Fajar.compcount > 3 && Fajar.hasdiscrec == false && Fajar.doccomplete == true) {
        console.log("Scholarship approved!");
    }
    else {
        console.log(" assed First Screening, but Failed Second Screening");
    }
}
else {
    console.log("You are not eligible for the scholarship program.");
}