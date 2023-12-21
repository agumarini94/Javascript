function changeEnough(itemPrice, amountOfChange) {
    // console.log(amountOfChange);
    let totalChange = 0; 
    for (let i of amountOfChange){
        // console.log(i);
        totalChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;
    }
    if (totalChange > itemPrice) {
        console.log('true ' + totalChange + ' is your money, u can buy, price is $' + itemPrice);
    }
    else {
        console.log('false' + totalChange + ' is your money u cant buy, price is $' + itemPrice);
    }

    // let totalChange = 0;
    // for (let i = 0; i < amountOfChange.length; i++){ 
    //     // console.log(amountOfChange[i]);
    //     totalChange = amountOfChange[0] * 25; 

    //     console.log(totalChange + ' es la plata');
            // totalChange = amountOfChange[i] * 25; 
            // totalChange = amountOfChange[i] * 

        // }
    // }

}
//primer i * 25 
//segundo i * 10 
//tercer i * 5 
//cuarto i * 1


changeEnough(priceArticulo = 5, [25, 20, 5, 0]);