// for (let i = 0; i < 11; i++) {
//     if(i % 2 ===0){
//     console.log(i + "is an even number");;
// }
// else {
//     console.log(i + "is an odd number");
//     }
// }

// FOR IN 

let person = {
    fname: "John",
    lname: "Doe",
    age: 25,
    kidInfo: {
        fname: "John JR",
        lname: "Doe JR",
        age: 2,
    }
};

// for (let keys in person) { //key puede ser cualquier nombre, no necesariamente tiene que ser key.
//     console.log("el valor de la cllave " + keys + "is" + person[keys]);
// }

// console.log(person.lnmae);
// console.log(person["lname"]);

for (let keys in person.kidInfo) {
    console.log(person.kidInfo[keys]);
}

// FOR / OF LOOPING TROUGHT AN ARRAY

