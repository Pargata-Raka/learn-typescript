/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

type patient = {
    name: string
    criticalcond: boolean
    hasappointment: boolean
    age: number
    hasinsurance: boolean
}
const today : patient = {
    name: "Siti Rahma",
    criticalcond: false,
    hasappointment: true,
    age: 67,
    hasinsurance: true
}

console.log("Name:", today.name);

if (today.criticalcond == true) {
    console.log("You will be send into the emergency room immediately!");
}
else {
    if (today.hasappointment == true) {
        if (today.age > 60) {
            console.log("You will be registered into a priority queue.");
        }
        else {
            console.log("You will be registered into a regular queue.");
        }
    }
    else {
        if (today.hasinsurance == true) {
            console.log("You will be assigned to the Insurance Registration Counter");
        }
        else {
            console.log("You will be assigned to the General Registration Center");
        }
    }
}