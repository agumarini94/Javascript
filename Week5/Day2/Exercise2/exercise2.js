const form = document.forms[0];

console.log(form);

const inputFname = document.getElementById('fname');
const inputLname = document.getElementById('lname');
const ul = document.getElementsByClassName('usersAnswer')[0];
// console.log(inputFname);
// console.log(inputLname);

//add an event to the button submit del form
//i use this to prevent to prevent submit the data to the server? 
form.addEventListener('submit' , preventDefault)
function preventDefault(e) {
    e.preventDefault()
    if (inputFname.value === '' && inputLname.value === '') {
        console.log('empty')
    }
    else {
        let list = document.createElement('li');
        list.innerText = inputFname.value + ' ' + inputLname.value;
        ul.appendChild(list);
    }
}




// if (input1 === '') {
//     console.log('empty');
// }
