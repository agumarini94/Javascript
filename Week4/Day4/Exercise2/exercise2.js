let divv = document.getElementsByTagName('div');
console.log(divv);
for (let elem of divv) {
    elem.style.backgroundColor = 'lightblue';
    elem.style.padding = '30px';
    //Bonus part
    if (elem.style.backgroundColor === 'lightblue') {
        names = document.getElementsByTagName('li');
        alert('Welcome ' + names[0].innerText + ' and ' + names[1].innerText);
    }
}

//point 2 

let lista = document.getElementsByTagName('li');
console.log(lista)
lista[0].hidden = 'true'; //oculto el elemento 

//point 3
lista[1].style.border = '3px solid red';

//point 4
let cuerpo = document.getElementsByTagName('body');
console.log(cuerpo);
for( let myCuerpo of cuerpo){
myCuerpo.style.fontFamily = 'cursive';
}
document.getElementsByTagName('div').style.backgroundColor('blue');

