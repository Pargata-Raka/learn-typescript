/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

type reservation = {
    customername: string
    haspremium: boolean
    roomavailable: boolean
}

const today : reservation = {
    customername: "Nadia Putri",
    haspremium: true,
    roomavailable: false
}

if (today.roomavailable == true) {
    if (today.haspremium == true) {
        console.log("== Allison's Hotel Room Reservation ==");
        console.log("You receive a free room upgrade");
    }
    else {
        console.log("== Allison's Hotel Room Reservation ==");
        console.log("Your room has been reserved");
    }
}
else {
    if (today.haspremium == true) {
        console.log("== Allison's Hotel Room Reservation ==");
        console.log("No rooms available, You are automatically put into the priority waiting list");
    }
    else {
        console.log("== Allison's Hotel Room Reservation ==");
        console.log("No rooms are available at the moment.");
    }
}
