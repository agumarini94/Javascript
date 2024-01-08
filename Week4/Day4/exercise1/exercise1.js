// let div1 = document.getElementById('container');
// console.log(div1);
// otra alternativa
// let div11 = document.querySelector('#container');
// console.log(div11); // el hashtag es para llamar al ID como en css

// // POINT 2
// document.querySelector('.list').children[1].innerHTML = 'Richard'; // voy al elemento children, ubicacion 1, y cambio el nombre. 


//POINT 3 
// document.querySelectorAll('ul')[1].children[1].remove();
//selecciono el elemento 1 del ul , el hijo 1, y lo elimino. 

//point 4
let elementos = document.getElementsByClassName('list');
// console.log(elementos);
for (let elem of elementos) { //uso for of para ver los elementos del objeto. 
    elem.firstElementChild.innerHTML = 'Agustin'; // voy al primer elemento hijo y le asigno el nombre. 
    // console.log(elem);
    // document.fi
//     console.log(elem);
}
