let numeros = [];
let sum = 0;
for (let i = 0; i < 5; i++){
    numeros = [i];
    for (let j = 0; j < numeros.length; j++){
        console.log(numeros[j] + 'elemento');
        sum = numeros[j] + sum;
    }

    console.log(sum);
}
// let Valor6 = numeros[6]
// console.log(letValor6);

// let mostrar = numeros.toString;
