/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {student: "Alya", course: "TypeScript", completed: true, score: 91, duration: 38},
    {student: "Budi", course: "TypeScript", completed: false, score: 45, duration: 12},
    {student: "Citra", course: "Database", completed: true, score: 87, duration: 42},
    {student: "Dimas", course: "Backend", completed: true,  score: 96, duration: 40},
    {student: "Eka", course: "Database", completed: false, score: 60, duration: 18},
    {student: "Fajar", course: "Backend", completed: true, score: 82, duration: 35},
    {student: "Gita", course: "TypeScript", completed: true, score: 88, duration: 36},
    {student: "Hana", course: "Backend", completed: false, score: 70, duration: 20}
];
interface enrollments {
    student: string,
    course: string,
    completed: boolean,
    score: number,
    duration: number
}

function sum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function calculateAvg(numbers: number[]): number {
  return sum(numbers) / numbers.length;
}

function getTotalEnrollments(data: enrollments[]): number {
  return data.length;
}

function getCompletedEnrollments(data: enrollments[]): number {
  return data.filter(e => e.completed).length;
}

function getIncompleteEnrollments(data: enrollments[]): number {
  return getTotalEnrollments(data) - getCompletedEnrollments(data);
}

function getCompletionPercentage(data: enrollments[]): number {
  const total = getTotalEnrollments(data);
  return (getCompletedEnrollments(data) / total) * 100;
}

// ==========================================
function extractScores(data: enrollments[]): number[] {
  return data.map(e => e.score);
}

function getMaxScore(data: enrollments[]): number {
  return Math.max(...extractScores(data));
}

function getMinScore(data: enrollments[]): number {
  return Math.min(...extractScores(data));
}

function getAvgScore(data: enrollments[]): number {
  return calculateAvg(extractScores(data));
}

function getPassingStudentsCount(data: enrollments[], minScore: number = 75): number {
  return data.filter(e => e.score >= minScore).length;
}

function getUniqueCourses(data: enrollments[]): string[] {
  return Array.from(new Set(data.map(e => e.course)));
}

function filterByCourse(data: enrollments[], courseName: string): enrollments[] {
  return data.filter(e => e.course === courseName);
}

function getCourseStudentCount(data: enrollments[], courseName: string): number {
  return getTotalEnrollments(filterByCourse(data, courseName));
}

function getCourseAvgScore(data: enrollments[], courseName: string): number {
  return getAvgScore(filterByCourse(data, courseName));
}

function extractDurations(data: enrollments[]): number[] {
  return data.map(e => e.duration);
}

function getTotalLearningHours(data: enrollments[]): number {
  return sum(extractDurations(data));
}

function getAvgLearningHours(data: enrollments[]): number {
  return calculateAvg(extractDurations(data));
}

function printCourseBreakdown(data: enrollments[]): void {
  const courses = getUniqueCourses(data);
  courses.forEach(course => {
    const studentCount = getCourseStudentCount(data, course);
    const avgScore = getCourseAvgScore(data, course);
    console.log(`- ${course}: ${studentCount} students | Avg Score: ${avgScore}`);
  });
}


function printDashboard(data: enrollments[]): void {
  console.log("== Completion ==");
  console.log(`Total Enrollments : ${getTotalEnrollments(data)}`);
  console.log(`Completed Enrollments : ${getCompletedEnrollments(data)}`);
  console.log(`Incomplete Enrollments : ${getIncompleteEnrollments(data)}`);
  console.log(`Completion Rate : ${getCompletionPercentage(data)}%`);

  console.log("== Academic ==");
  console.log(`Highest Score : ${getMaxScore(data)}`);
  console.log(`Lowest Score : ${getMinScore(data)}`);
  console.log(`Average Score : ${getAvgScore(data)}`);
  console.log(`Passing Students (≥75): ${getPassingStudentsCount(data)}`);

  console.log("== Course ==");
  printCourseBreakdown(data);

  console.log("== Learning ==");
  console.log(`Total Learning Hours : ${getTotalLearningHours(data)} H`);
  console.log(`Average Duration : ${getAvgLearningHours(data)} H`);
}

printDashboard(enrollments);