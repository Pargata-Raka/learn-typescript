/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {id: "PT001",name: "Alya",age: 17,department: "Pediatrics",admitted: true,bill: 850000},
    {id: "PT002",name: "Budi",age: 45,department: "Cardiology",admitted: false,bill: 1200000},
    {id: "PT003",name: "Citra",age: 68,department: "Cardiology",admitted: true,bill: 2500000},
    {id: "PT004",name: "Dimas",age: 33,department: "Orthopedics",admitted: true,bill: 640000},
    {id: "PT005",name: "Eka",age: 14,department: "Pediatrics",admitted: false,bill: 350000}
];
interface Patients {
    id: string,
    name: string,
    age: number,
    department: string,
    admitted: boolean,
    bill: number
}
function PatientAmount(a: Patients[]): number {
  return a.length;
}

function CountPatients(a: Patients[], b: boolean): number {
  return a.filter(e => e.admitted == b).length;
}

function dischargedpatients(a:Patients[]): number {
    return CountPatients(a, false)
}

function admittedpatients(a:Patients[]): number {
    return CountPatients(a, true)
}

interface departments {
    Pedi: number,
    Ortho: number,
    Cardi: number
}

function patientsdepartments(a:Patients[]): departments {
    let Pediatrics = 0;
    let Orthopedics = 0;
    let Cardiology = 0;

    for(const key of patients) {
        if (key.department == "Pediatrics") {
            Pediatrics++
        }
        else if (key.department == "Orthopedics") {
            Orthopedics++
        }
        else if (key.department == "Cardiology") {
            Cardiology++
        }
        else {
            null
        }
    }
    return {
        Pedi: Pediatrics,
        Ortho:Orthopedics,
        Cardi: Cardiology
    }
}