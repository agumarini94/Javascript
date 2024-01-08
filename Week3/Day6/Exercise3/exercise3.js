let numero = prompt("Put a number");
let x = isNaN (numero);
if (x === false) { //if is false, its number
    while (numero < 10) {
        alert("no valid ");
        numero = prompt("Try again");
// no se puede poner let number xq es como que estoy creando otra variable. Con poner numero = ... ya le estoy dando un nuevo valor.
    }
    console.log(numero);
}
else {
    alert("Try again, you put letters");
    numero = prompt('Trate de nuevo, ingreso letras'); // letters
}

//     if (number < 10) {
//         prompt(">10, ingrese again");
//     }
//     if (number > 10) {
//         console.log("Felicidades" + number);
//     }
//     // while (number < 10) {
//     //     let number = prompt("Put number bigger 10");
//     //     break;
//     // }
// }