/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function Activestudents(): number {
  let actives = 0
  students.forEach((student) => {
    if (student.active) {
      actives++
    }
  })
  return actives
}
let active = Activestudents(); 

function Inactivestudents(): number{
  let inactive = 0
  students.forEach((student) => {
    if (!student.active) {
      inactive++
    }
  })
  return inactive
}
let inactive = Inactivestudents();

function countStudentsByMajor(): number[]{
  let software = 0
  let network = 0
  let multimedia = 0
  students.forEach((student) => {
    if (student.major == "Software Engineering") {
      software++
    }
    else if (student.major == "Networking") {
      network++
    }
    else { 
      multimedia++
    }
  }) 
  return [software, network, multimedia];
}
let [software, network, multimedia] = countStudentsByMajor();

function printEnrollmentReport() {
  console.log(`Total Active Student: ${active}`);
  console.log(`Total Inactive Student: ${inactive}`);
  console.log(`Software Majors: ${software}`);
  console.log(`Network Majors: ${network}`);
  console.log(`Multimedia Majors: ${multimedia}`);
}

printEnrollmentReport()
