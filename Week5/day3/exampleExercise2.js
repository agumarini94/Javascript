// let cont = 0;
// let totalWidth = document.getElementsByClassName('outer.style.width');
// console.log(totalWidth);
// setInterval( move() {
//     let position = document.getElementsByClassName('inner');
//     console.log(position);
//     if (cont < totalWidth) {
//         cont++;
//         position.style.left = cont;
//     }
// } , 1000);

// move();


function myMove() {
    const elem= document.querySelector('.inner');
    console.log(elem);
    let pos = 0;
    let id = setInterval(function () {
        if (pos >= 350) {
            clearInterval(id); 
            //i dont know what is this 
        }
        pos++;
        elem.style.left = pos + 'px'; 
        // elem.style.top = pos + 'px';
    },5);
}

myMove();