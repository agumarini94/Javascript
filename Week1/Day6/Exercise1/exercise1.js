let people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
// console.log(people); // parte 1. 1)

people[2] = "Jason";
// console.log(people); // exercise 2

people.push("Agustin");
// console.log(people); //exercise 3


// console.log(people.indexOf("Mary")); //exercise 4

let gente = people.slice(1);
// console.log(gente); //exercise 5

let foo = people.indexOf("Foo"); 
// console.log(foo); //exercise 6
//doesnt find string foo, so the result its -1 

let last1 = gente.length - 1;
let last = gente[last1];
// console.log(last + " es el ultimo elemento"); // exercise 7
//.length start to count from 1 and its the long of the array. But the elements start since 0. 

//PART 2

// for (let i = 0; i < people.length; i++){ //exercise 1
    //need to be < because the elements start to 0.
    // console.log(i);
    // console.log("Elemento " + i + " " + people[i]); 
// }

for (let i = 0; i < people.length; i++) { 
    console.log(people[i]); //exercise 2 
    if (people[i] === "Devon") {
        break;
    }
}