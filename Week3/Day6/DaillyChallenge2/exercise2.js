const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3];
// console.log(numbers);

for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers.length; j++){
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log(numbers);
