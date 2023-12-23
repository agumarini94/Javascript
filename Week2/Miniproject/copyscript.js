function confirm() {
    let startGame = prompt('U want to play ?');
    if (startGame === 'No' || startGame === 'no') {
        alert('no problem Good bye');
        // break;
    }
}
function playTheGame() {
    confirm(); //empieza el juego
    console.log('welcome to the game');
    let userNumber = prompt('number between 0 and 10');
    if (isNaN(userNumber)) {
        alert('No ingreso un numero, good bye');
    }
    else { // Check if the number is between 0 and 10
        if (userNumber >= 0 && userNumber <= 10) {
            //numero correcto 
            let computerNumber =
                Math.floor(Math.random() * 10); //numero pc 
            console.log(computerNumber + 'numero pc');
            compareNumbers(userNumber, computerNumber);
        }
        else {
            alert('numero no correcto');
        }
    }
}

function compareNumbers(number1, number2) {
    if (number1 == number2) {
        alert('WINNER');
    }
    else if (number1 > number2) {
        alert('your number is more bigger, try again')

    }
    else if (number1 < number2) {
        alert('your number is lower, try again')

    }
    else {
        alert(number2 + ' was, try again ');
    }
}


playTheGame();
// compareNumbers(1,2);