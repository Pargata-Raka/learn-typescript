/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (const score of scores) {
    callback(score);
  }
}

function checkPassing(score: number): void {
  if (score >= 70) {
    console.log(`${score} -> PASS`);
  } else {
    console.log(`${score} -> FAIL`);
  }
}

function showGrade(score: number) {
    if (score >= 90) {
    console.log(`${score} -> A`);
  } else if (score >= 80) {
    console.log(`${score} -> B`);
  }
  else if (score >= 70) {
    console.log(`${score} -> C`);
  }
  else {
    console.log(`${score} -> D`);
  }
}

function Bonused(score:number) {
  let bonuspoint = score
  if (bonuspoint > 90) {
    console.log(`${score} -> ${bonuspoint} EXCELLENT!`);    
  }
  else {
    console.log(`${score} -> ${bonuspoint} Regular.`)
  }
}

processScores(scores, checkPassing);
console.log(`--------------------`);
processScores(scores, showGrade);
console.log(`--------------------`);
processScores(scores, Bonused);