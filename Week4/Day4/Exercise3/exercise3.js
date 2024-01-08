let diivv = document.getElementById('navBar');
// // console.log(diivv);
// diivv.setAttribute( 'div', 'socialNetworkNavigation');

//exercise 3.1
const newLi = document.createElement('li');
// console.log(newLi);

//point 3.2
const newText = document.createTextNode('Logout');
// console.log(newText);

//point 3.3
newLi.append(newText); //agrego NewText en NewLi
console.log(newLi);

//point 3.4
const listado = document.getElementsByTagName('ul');
//traigo los elementos que hay en la lista
console.log(listado); 
for (let listita of listado) //obtengo los elementos de la lista 
    {  
        console.log(listita);
        listita.appendChild(newLi);// agrego el elemento newLi a la lista UL. 

        //POINT 4 
        const el1 = listita.firstElementChild.textContent;
        //busco el primer elemento hijo y el contenido de su texto, dentro de los elementos de UL.
        console.log('elemento 1 ' + el1);

        //POINT 4.1
        const ultElem = listita.lastElementChild.textContent; //busco el ultimo elemento hijo delntro del objeto UL. 
        console.log('ultimo elemento ' + ultElem);
    }
