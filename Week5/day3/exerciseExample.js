let count = 5;

function displayCount() {
    console.log(count);
    count--;
    if (count >= 0) {
        setTimeout(displayCount(), 1000);
    }
    
    if (count === 3) {
        clearTimeout(id);
    }
}
displayCount()
// const id = setTimeout(showMessage, 5 * 1000);


let indx = 0; 

function contar() {
    indx++;
    console.log('second ' + indx);
}

contar();