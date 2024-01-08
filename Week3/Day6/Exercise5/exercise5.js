let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}
// console.log("floors " + building.numberOfFloors); //exercise 2
// console.log("Floor number one there's " + building.numberOfAptByFloor.firstFloor + " aps " + " and in the floor 3 there's " + building.numberOfAptByFloor.thirdFloor + " apartments"); //exercise 3

// console.log(building.nameOfTenants[1]); //exercise 4

//exercise 5
// console.log(building.numberOfRoomsAndRent.sarah[1]);
let totalRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if (totalRent > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1]= 1200;
console.log(building.numberOfRoomsAndRent.dan[1] + " Precio nuevo de dan");
}  