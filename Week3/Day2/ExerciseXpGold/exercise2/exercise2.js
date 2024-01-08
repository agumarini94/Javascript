let str1 = "mix";
let str2 = "pod";
let cutStr1 = str1.slice(0, 2, 0, 1); //mi
let cutStr2 = str2.slice(0, 2, 0, 1); //po 
// let newString = str1.splice(0, 1, cutStr2);

// let concatenedString = str2 + str1;
str1.splice(0, 1, cutStr2);
str2.splice(0, 1, cutStr1);
concatenedString = str1 + str2;


console.log(concatenedString);