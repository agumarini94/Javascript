let verb = prompt("Verb");
if (isNaN(verb)) {
    console.log(verb.length);
    
    if (verb.length < 3) { // si tiene menos de 3 caracteres.. 
            console.log(verb + " tiene menos de 3 caracteres");
        }
    else {   
        let posicion = verb.indexOf("ing"); // si encontro ING va a mostrar la posicion
        console.log(posicion);
        if (posicion>0) { // si lo encontro, esta en alguna posicion.
                    console.log(verb + "ly");
                }
            else { //si no encontro ING, el valor de posicion es -1 (indexOf cuando no encuentra algo muestra -1), le agrego ing..
                    console.log(verb + "ing");
                }
        }
    }
else { // si ingresa numero.. 
    console.log("Ustes ingreso numeros..");
}