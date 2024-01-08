function calculateTip() {
    monto = prompt('How much is the total?');
    if (monto < 50) {
        tips = monto / 10 * 2;
        console.log(tips + ' de propina y usted gasto ' + monto);
    }
    else if (monto >= 50 && monto <= 200) {
        tips = monto / 10 * 1.5;
        console.log(tips + ' de propina y usted gasto ' + monto);
    }
    else {
        tips = monto / 10 
        console.log(tips + ' de propina y usted gasto ' + monto);
    }
}

calculateTip();

//perfecto ! 