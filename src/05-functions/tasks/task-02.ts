/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

type wwescores = {
    Name: string,
    Score: number
}

const John:wwescores = {
    Name:"John Cena",
    Score: 92
}

const Undertaker:wwescores = {
    Name:"John Cena",
    Score: 78
}

const Rey:wwescores = {
    Name:"Rey Mysterio",
    Score: 88
}

function showBonusStatus(s: wwescores) {
    const approval = s.Score >= 85 ? "Approved" : "Not Approved";
    const employee = s.Name;
    return `${employee} (${approval})`
}
console.log("approval pending:", showBonusStatus(John));
console.log("approval pending:", showBonusStatus(Undertaker));
console.log("approval pending:", showBonusStatus(Rey));


