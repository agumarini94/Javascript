// function hello(a = 1, b = "2") // por default, a = 1 y b = 2, si no le envio el valor del parametro, por default sera 1 y 2 .. 
// {
//     console.log('hello' + a + ' & Hello' + b);
// }
// // hello('john', 'ana'); 
// hello(3, 9); // el primer valor no puede estar vacio. 
// hello( , 3) // esto esta mal 


//LOCAL VARIABLES . . . 

let age = 15; 
function myAge() {
    let myAge = 16;
    console.log(age , myAge);
}
myAge() 
console.log(age, myAge) // myage es un valor descnonocido xq esta dentro de los {}

