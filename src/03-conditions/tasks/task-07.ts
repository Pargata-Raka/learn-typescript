/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

const debtcond = 30/100;

type banking = {
    applicant : string,
    monthlyincome: number,
    creditscore: number,
    existingdebt: number,
    permemployee: boolean
}

const today:banking = {
    applicant: "Andi Wijaya",
    monthlyincome: 10000000,
    creditscore: 725,
    existingdebt: 2500000,
    permemployee: true
}

console.log("Applicant Name:", today.applicant);

if (today.monthlyincome >= 8000000 && today.creditscore >= 700) {
    if (today.existingdebt < today.monthlyincome * debtcond && today.permemployee == true) {
        console.log("Loan approved.");
    }
    else {
        console.log("Manual review required.");
    }
}
else {
    console.log("Loan rejected.");
}