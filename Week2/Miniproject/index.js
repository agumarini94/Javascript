function confirm() {
    let startGame = prompt('U want to play ?');
    let answer1 = "yes";
    let answer2 = "no";
    if (startGame.toLowerCase() == answer1) {
        playTheGame(); //if want to play, call function
    }
    else if (startGame.toLowerCase() == answer2 || startGame == "" ){
        alert('no problem Good bye');
    }
    else{
        alert('Answer not valid'); //if dont write yes / no
    }
}
function playTheGame() {
    let userNumber = prompt('number between 0 and 10');
    if (isNaN(userNumber) || userNumber == null || userNumber == "") {
        alert('Is not a number, good bye');
    }
    else { // Check if the number is between 0 and 10
        if (userNumber >= 0 && userNumber <= 10) {
            //numero correcto 
            let computerNumber = 
            Math.floor(Math.random()*10); //pc number  
            console.log(computerNumber + ' pc number'); // show number of the pc

            //aca creo que tengo que validar 3 intentos.
            // var counterChances = 0; 
            // while (counterChances < 3) {
                // counterChances++; // plus 1 , and check the number (?)
                compareNumbers(userNumber, computerNumber);
            // }
            // alert('U did 3 chances, finishing game ');
        }
        else {
            alert('numero no correcto');
        }
    }
}

function compareNumbers(number1, number2) {
    // let i = 0;
    // while (i < 3) {
        if (number1 == number2) {
            alert('WINNERR');
        }
        else if (number1 > number2) {
            alert('your number is more bigger, try again');
            playTheGame();
        }
        else if (number1 < number2) {
            alert('your number is lower, try again');
            playTheGame();
        }
        // i++;
        // if (i === 3) {
        //     break;
        // }
    // }
    // alert ('3 times finishing game');
} 
confirm(); // only call this function becuase do start the game 
// playTheGame();
// compareNumbers(1,2);


// else {
//     alert(number2 + ' was, try again ');
// }