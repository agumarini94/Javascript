//POINT 1 
// let myTitle = document.querySelector('h1');
// console.log(myTitle);

//POINT 2 
// let myParraf = document.querySelector('article');
// console.log(myParraf);
// let ultimoHijo = myParraf.lastElementChild;
// myParraf.removeChild(ultimoHijo);
// // myParraf[0].removeChild('lastElementChild')
// // document.parentElement.removeChild('lastElementChild');
// console.log(myParraf)

// //POINT 3 
// document.getElementById('title').onclick = function () {
//     document.getElementById('title').style.backgroundColor = 'red';
// }

//POINT 4
// document.getElementById('subtitle').onclick = function () {
//     document.getElementById('subtitle').style.display = 'none';
// }

//POINT 5
document.getElementById('button').onclick = function () {
    const todosParrafos = document.querySelectorAll('p');
    for (const misParrafos of todosParrafos) { //para obtener todos las propiedades del objeto, USAR FOR ... OF <------
        console.log(misParrafos);
        misParrafos.style.fontWeight = ('bolder');
    }
}

//POINT 6 BONUS 
// let elBonus = document.getElementById('bonus');
// console.log(elBonus);
function bigLetters() {
    const bonus = document.getElementById('bonus');
    let randomSize = Math.floor(Math.random() * 100) + 1;
    bonus.style.fontSize = randomSize + 'px';
    //para que cambie el tamano le tengo que agregar el PX !! 
    console.log(randomSize);
}

//POINT 7 BONUS 2 
function dissapear() {
    const secondTitle = document.getElementById('title');
    console.log(secondTitle);
    secondTitle.style.display = ('none');
}














// let parrafoss = document.getElementsByTagName('p');
// console.log(parrafoss);
// botton.addEventListener('click', function () {
//     // let todosParrafos = document.getElementsByTagName('p');
//     console.log(todosParrafos);
// });

// {
//     let parrafos = document.getElementsByTagName('p');
//     console.log(parrafos);
// }
