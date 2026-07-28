/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    EmployeeID : String
    Name: String
    Date: String
    CheckIn: String
    CheckOut: String
    WorkingHours: Number
    Present: Boolean
}

const Date090112001 : Attendance[] = [
    { EmployeeID: `198`, Name: `Sean Combs`, Date: `11/09/2001`, CheckIn: `06:21`, CheckOut: `16:01`, WorkingHours: 9, Present: true},
    { EmployeeID: `234`, Name: `Robert Lox`, Date: `22/12/2011`, CheckIn: `none`, CheckOut: `none`, WorkingHours: 0, Present: false},
    { EmployeeID: `331`, Name: `Jimmy Bricks`, Date: `1/07/2016`, CheckIn: `05:58`, CheckOut: `15:59`, WorkingHours: 9, Present: true},
]

Date090112001.forEach(row => {
  console.log(`Employee ID: ${row.EmployeeID} | Name: ${row.Name}| Date: ${row.Date}| Check In Time: ${row.CheckIn} | Check Out Time: ${row.CheckOut}| Work Hours: ${row.WorkingHours} | Present Today: ${row.Present}`);
});