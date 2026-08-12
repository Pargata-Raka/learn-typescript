/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

function findHighestScore(scores: number[]): number {
    let highest = grade[0];
    for (const key of scores) {
        if (key > highest) {
            highest = key;
        }
    }
    return highest
}

function findLowestScore(scores: number[]): number {
    let lowest = grade[0];
    for (const key of scores) {
        if (key < lowest) {
            lowest = key;
        }
    }
    return lowest
}

function calculateAverage(scores: number[]): number {
    let total = 0;
    for (const key of scores) {
        total += key; 
    }
    const average = total / scores.length;
    return average
}

function countPassedStudents(scores: number[]): number {
    let passed = 0
    for (const key of scores) {
        if(key >= 75) {
            passed++
        } 
    }
    return passed
    
}

console.log("The highest score is", findHighestScore(grade));
console.log("The lowest score is", findLowestScore(grade));
console.log("The average score is", calculateAverage(grade));
console.log("The amount of passed students is", countPassedStudents(grade));
