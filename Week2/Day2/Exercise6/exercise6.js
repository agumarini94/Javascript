function hotelCost(){
    let nights = prompt('how many nights ?');
    noches = isNaN(nights);
    if (noches === false && nights != '') { // si 'no es numero' es falso..
        console.log(nights);
        let priceNights = nights * 140;
        console.log(priceNights);
    }
    else {
        nights = prompt('no valido');
    }
}
function planeRideCost() {
    let destination = prompt('Where ?')
    if (destination != '') {
        if (destination === 'Londres') {
            console.log('Londres = $183');
        }
        else if (destination === 'Paris') {
            console.log('Londres = $220');
        }
        else {
            console.log('Otro destino = $300');
        }
    }
}

function rentalCarCost() {
    let carNights = prompt('Car, how many days ?');
    carNoches = isNaN(carNights);
    if (carNoches === false && carNights != '') {
        if (carNights > 10) {
            let priceCar = carNights * 40;
            let priceCarDiscount = priceCar - priceCar / 10 * 0.5;
            console.log('Alquilo auto 10 dias el precio es ' + priceCarDiscount);
        }
        else {
            let priceCar = carNights * 40;
            console.log('el precio del auto es ' + priceCar);
        }
    }
    else {
        carNights = prompt('Reigrese nights car');
    }
}

function totalVacationCost() {
    hotelCost() ,  planeRideCost() , rentalCarCost()
}

// hotelCost();
// planeRideCost();
// rentalCarCost();
totalVacationCost();

