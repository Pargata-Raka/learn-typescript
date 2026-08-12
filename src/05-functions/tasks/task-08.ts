/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

const studentamount : number = submissions.length ;

console.log(`Total Students: ${studentamount}`);

function ThoseWhoSubmit(): number {
  let submitted = 0
  submissions.forEach((student) => {
    if (student.submitted) {
      submitted++
    }
  })
  return submitted
}
let Submit = ThoseWhoSubmit();

function ThoseWhoDoesnt(): number {
  let badkid = 0
  submissions.forEach((student) => {
    if (student.submitted) {
      badkid++
    }
  })
  return badkid
}
let NotSubmit = ThoseWhoDoesnt();

function PassedOnes(): number {
  let pass = 0
  submissions.forEach((student) => {
    if (student.score >= 75) {
      pass++
    }
  })
  return pass
}
let PassedStudents = PassedOnes();

function RevisedOnes(): number {
  let notpass = 0
  submissions.forEach((student) => {
    if (student.score < 75) {
      notpass++
    }
  })
  return notpass
}
let RevisingStudents = RevisedOnes();

function Average(list: typeof submissions): number {
  let sum = 0;
    for (const item of list) {
        sum += item.score; // Access .score from each object
    }
    return sum / list.length;
}
let avgscore = Average(submissions);

interface something {
    highest: number,
    lowest: number
}

function minmax(list: typeof submissions): something {
    let highscore = list[0].score;
    let lowscore = list[0].score;

    for (const item of list) {
        if (item.score > highscore) highscore = item.score;
        if (item.score < lowscore) lowscore = item.score;
    }

    // Map your internal variables to the interface key names
    return { 
        highest: highscore,
        lowest: lowscore
    };
}
const minmaxx: something = minmax(submissions);

function printresult(a: any[]) {
  console.log(`Submitted: ${Submit}`);
  console.log(`Missed: ${NotSubmit}`);
  console.log(`Passed: ${PassedStudents}`);
  console.log(`Revisions required: ${RevisingStudents}`);
  console.log(`Average Score: ${avgscore}`);
  console.log(`Highest Score: ${minmaxx.highest}`);
  console.log(`Lowest Score: ${minmaxx.lowest}`);
}

printresult(submissions)