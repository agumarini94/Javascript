typeof (15);
// Prediction: number
// Actual: OK 

typeof (5.5);
// Prediction: number
// Actual:OK

typeof (NaN);
// Prediction: null
// Actual: Number (I DONT KNOW WHY)

typeof ("hello");
// Prediction: string
// Actual: OK

typeof (true);
// Prediction: string 
// Actual: boolean

typeof (1 != 2);
// Prediction: number
// Actual: Boolean (it's an expression)
//(como decir 1 es diferente a 2)
"hamburger" + "s";
// Prediction: hamburgers
// Actual: OK 

"hamburgers" - "s";
// Prediction: hamburger
// Actual: NAN
//i cant rest in a string 

"1" + "3";
// Prediction: 13
// Actual: OK 

"1" - "3";
// Prediction: 13
// Actual: -2 ( i dont know why)

"johnny" + 5;
// Prediction: johnny5
// Actual: OK

"johnny" - 5;
// Prediction: johnny 5
// Actual: NAN (I cant rest from an string)

99 * "hello";
// Prediction: 99 hello
// Actual: NAN 

1 != 1;
// Prediction: boolean
// Actual: False ( why ?)

1 == "1"
// Prediction: True
// Actual: OK 

1 === "1";
// Prediction: 1 
// Actual: false ( why ?)