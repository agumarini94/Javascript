let number = prompt("Choose a number");

if(number == 0){
    console.log("El numero " + number + " no es valido");
}
else if (number % 2 == 0) {
    console.log("El numero " + number + " elegido es par");
}
else {
    console.log("El numero " + number + " elegido es impar");
}