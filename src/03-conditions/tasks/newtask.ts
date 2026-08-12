const plane = [
    {name: "Adam Richter", onlinecheck: true, class: "Economy", weight: 21},
    {name: "Jerry Abseen", onlinecheck: true, class: "Business", weight: 34},
    {name: "Enrique Gonzales", onlinecheck: true, class: "Economy", weight: 99},
    {name: "Jotaro Kujo", onlinecheck: true, class: "Business", weight: 11},
    {name: "Carrie Kursk",onlinecheck: false,class: "Economy", weight: 19},
    {name: "Habib Muhammad Abdullah Abqarry bin Sulaiman basir al-ahad", onlinecheck: false, class: "Business", weight: 33},
    {name: "Fullios Stackos",onlinecheck: true,class: "Economy", weight: 22}
]

for (let i = 0; i < plane.length; i++) {
    const passenger = plane[i];
    console.log(`-----------------------`);
    console.log(`${passenger.name}, Class: ${passenger.class}`);
    if (passenger.onlinecheck == false) {
        console.log(`Data Invalid.`);
    } 
    else if (passenger.weight > 20) {
        if (passenger.class === "Business") {
            console.log(`Extra Baggage Allowed.`);
        } else {
            console.log(`Baggage Fee Required!`);
        }
    } 
    else {
        console.log(`Tolerable Baggage Weight.`);
    }
}
