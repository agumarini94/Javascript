function isDivisible(userNumber) {
    let numbers = []; // array vacio para guardar i 
    let sum = 0; // creo una variable vacio para empezar la sumatoria de todos los numeros. 
    for (let i = 0; i < 500; i++) {
        if (i % userNumber != 0) {
            continue; // si no tiene resto 0, lo ignoro.
        }
        else {
            numbers = [i]; // si tiene resto 0, lo guardo en el array numbers
            for (j = 0; j < numbers.length; j++){ //creo un loop para recorrer los elementos del array numbers 
                sum = numbers[j] + sum ; // sumo los elementos y los voy guardando en la variable sum 
            }
        }
        mostrar = numbers.toString();
        console.log(mostrar + ' es divisible por ' +
        userNumber);
    }
    console.log(sum + ' es la suma de todo ');
}
let usuarioNumero = prompt('Ingrese un numero');
isDivisible(usuarioNumero);
