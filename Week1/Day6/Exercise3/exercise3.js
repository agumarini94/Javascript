let numero = prompt("Put a number");
let x = isNaN (numero);
if (x === false) { //if is false, its number
    while (numero < 10) {
        alert("no valid ");
        let numero = prompt("Try again");
    }
    console.log(numero);
}
else {
    alert("Try again");
    console.log("Are Letters"); // letters
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