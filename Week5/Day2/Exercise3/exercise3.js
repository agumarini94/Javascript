var allBoldItems = document.getElementsByTagName('strong');

function getBoldItems() {
    allBoldItems = document.getElementsByTagName('strong');
    return allBoldItems;
    // console.log(allBoldItems);
}
//HACER LA FUNCION , O CREAR LA VARIABLE ES LO MISMO... PUEDO LLAMAR A LA VARIABLE allBoldItems con la funcion, o con la variable.. 

function highlight() {
    for (let strongs of allBoldItems) {
        strongs.style.color = ('blue');
    }
}

function returnItemsToDefault() {
    for (let strongs of allBoldItems) {
        // console.log(strongs);
        strongs.style.color = ('black');
    }
}
// //POINT 5
for (let bolder of allBoldItems) {
    // console.log(bolder);
    bolder.addEventListener('mouseover', highlight);
    bolder.addEventListener('mouseout', returnItemsToDefault);
}

// getBoldItems();
// highlight();
// returnItemsToDefault();




// const bolderLetters = getBoldItems(); //i get the elements calling the function 