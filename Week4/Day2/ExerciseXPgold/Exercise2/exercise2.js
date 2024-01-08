function abbreviated() {
    let name = prompt('name');

    let primerLetter = name[0].toUpperCase(); //Hago mayuscula la primer letra 
    let theSpace = name.indexOf(" ") + 1; //obtengo la ubicacion de la primer letra despues del espacio 
    let secondLetter = name[theSpace].toUpperCase(); // hago mayuscula la primer letra despues del espacio
    let newName = primerLetter+  name.substring(1, theSpace) + secondLetter + ". "; 
    alert ("Welcome " + newName);
}
abbreviated();

// console.log(primerLetter + secondLetter);

// let positionSpace = name.indexOf(" ") + 2; // busco hasta donde tiene que ser el array y le agrego un punto para el nombre.