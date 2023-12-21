const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
} 
// console.log(stock.banana);

let shoppinglist = ['banana', 'orange', 'apple'];
// console.log(shoppinglist);
function myBill()
{
    for (i = 0; i < shoppinglist.length; i++)
    {
        // console.log(stock[shoppinglist[i]]);
        if (stock[shoppinglist[i]] > 0) {
            console.log(shoppinglist[i] + ' avaiable , price =  $' + prices[shoppinglist[i]]); //aca chequeo que tengo el producto y el precio
            
            //PART BONIFICATION
            // console.log(stock[shoppinglist[i]] - 1)
            // console.log(stock[shoppinglist[i]]);
            // console.log(shoppinglist[i]);
            stock.shoppinglist = stock[shoppinglist[i]] - 1;
            console.log('New stock is  ' + stock[shoppinglist[i]]);
        }
        else {
            // console.log(shoppinglist[i] + ' we dont have ');
        }
    }
}
myBill();

// stock[i] = stock[shoppinglist[i]] - 1;

//EXERCISE 5

function changeEnough(itemPrice, amountOfChange) {
    console.log(amountOfChange);

    // totalChange = 0;
    // for (let i = 0; i < changeEnough.amountOfChange.length; i++)
}



changeEnough(priceArticulo, myChange[25,20,5,0]);