//function

// function a() { // nombre q yo quiera
// console.log("Hello student");
// }
// function b() {
//     for (let i = 0; i < 10; i++){
//         a()
//         console.log(""); //agrego este string vacio para hacer un salto de linea (? no entendi bien)
//     }
// }
// a()

function greeting(name) {
    console.log('hello ' + name + ' welcome');
}

// greeting('John')
// greeting('Ana')
// greeting('anna')

const students = ["John", "Marry", "Alla", "Dan"];
for (let i = 0; i < students; i++){
    greeting(students[i]);
}

// let => es una variable si esta dentro de { } es local dentro de los corchetes.

    // var = es una variable que es valida en todo el codigo..es global

// const => se le da el valor una vez y no podemos cambiarlo. Es recomendable asignar el nombre de la variable en Mayuscula, para reconocerla mas facil. 

