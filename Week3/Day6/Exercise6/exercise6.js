
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// console.log(details);
for (let i in details) {
    // console.log(i);
    
    let phrase = i + " " + details[i];
    showThis = phrase.toString();
    // console.log(i);
    console.log(showThis);
}
// IM NOT SURE THAT ITS GOOD 