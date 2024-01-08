let colors = ["blue", "yellow", "red"];

for (let i of colors) {
    console.log(i); // logs blue, yellow, red
}
// for of se usa para los ELEMENTOS de un array. 
//No sirve para los array que tienen objetos. (OBJETO TIENE INFORMACION)

//for of doesn't work for object
// let person = { fname: "John", lname: "Doe", age: 25 };
// for (let x of person) {
//     console.log(x)
// } // Error: object is not iterable
//no funciona por que no es para Objetos. 
