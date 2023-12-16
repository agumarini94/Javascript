let colors = ["red", "blue", "white", "black", "green"];

for (let i = 0; i < colors.length; i++) {
    // console.log("Mi eleccion numero " + i + " es " + colors[i]);
    let posicion = i;
    if (i === 1) {
        let posicion = "st";
        console.log("Mi eleccion " + i + posicion + " is " + colors[i]);
    }
    else if (i === 2) {
        let posicion = "nd";
        console.log("Mi eleccion " + i + posicion + " is " + colors[i]);
    }
    else if (i >= 3) {
        let posicion = "rd";
        console.log("Mi eleccion " + i + posicion + " is " + colors[i]);
    }
}

