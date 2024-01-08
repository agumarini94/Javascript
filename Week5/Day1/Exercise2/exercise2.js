const div = document.getElementById('root');
const innerdiv = document.getElementById('root');
const innerbutton = document.getElementById('root');


div.addEventListener('click', divclick)
innerdiv.addEventListener('click', innerdivclick)
innerbutton.addEventListener('click', innerbuttonclick)

function divclick() {
    console.log('root');
}

function innerdivclick() {
    console.log('main');
}

function innerbuttonclick() {
    console.log('button');
}

