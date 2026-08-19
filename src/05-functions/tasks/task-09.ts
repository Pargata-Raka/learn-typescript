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
function PatientAmount(data: Patients[]): number {
  return data.length;
}

function CountPatients(data: Patients[], b: boolean): number {
  return data.filter(e => e.admitted == b).length;
}

function dischargedpatients(data:Patients[]): number {
    return CountPatients(data, false)
}

function admittedpatients(data:Patients[]): number {
     return PatientAmount(data) - dischargedpatients(data) 
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

    for(const key of a) {
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
const Departmentpatients: departments = patientsdepartments(patients);

interface minmaxxing {
    min: number
    max: number
}

function minmax(list: typeof patients): minmaxxing {
    let highscore = list[0].bill;
    let lowscore = list[0].bill;

    for (const item of list) {
        if (item.bill > highscore) highscore = item.bill;
        if (item.bill < lowscore) lowscore = item.bill;
    }
    return { 
        max: highscore,
        min: lowscore
    };
}
const minmaxx: minmaxxing = minmax(patients);

function Average(list: typeof patients): number {
  let sum = 0;
    for (const item of list) {
        sum += item.bill; // Access .score from each object
    }
    return sum;
}
let avgbill = Average(patients);

function admittedones(list: typeof patients): string[] {
    const theNames: string[] = [];
    for (const patient of list) {
        if (patient.admitted) {
            theNames.push(patient.name);
        }
    }
    return theNames;
}

let admitnames = admittedones(patients);

function printHospitalReport(a: any[]) {
    console.log(`== Hospital Report ==`);
    console.log(`Amount of patients: ${a.length}`);
    console.log(`Admitted patietns: ${(admittedpatients(a))}`);
    console.log(`Discharged patients: ${dischargedpatients(a)}`);
    console.log(`Cardiology patients: ${Departmentpatients.Cardi}`);
    console.log(`Pediatrics patients: ${Departmentpatients.Pedi}`);
    console.log(`Orthopedics patients: ${Departmentpatients.Ortho}`);
    console.log(`Highest Bill: ${minmaxx.max}`);
    console.log(`Lowest Bill: ${minmaxx.min}`);
    console.log(`Average Bill: ${avgbill}`);
    
    console.log(`Admitted Names: ${admitnames.join(", ")}`);
}

printHospitalReport(patients)