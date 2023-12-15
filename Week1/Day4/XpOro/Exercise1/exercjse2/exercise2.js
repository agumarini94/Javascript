let notas = prompt("Calification");
if (isNaN(notas)) {// check if there's a number
    console.log("U need to put a number");
}
else {
// console.log(number);
    if (notas > 90) {
        console.log("A");
    }
    else if (notas <= 90 && notas > 80) {
        console.log("B");
    }
    else if (notas <= 80 && notas >= 70) {
        console.log("C");
    }
    else {
        console.log("D");
    }
}