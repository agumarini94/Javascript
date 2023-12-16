const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let nameToCompare = name.toString();
for (let i = 0; i < names.length; i++){
    for (let j = 0; j < 1; j++) {
        // aca deberia ver que elemento J es el mas chico 
        let nameGroup = (names[i][j]);
        let toShow = nameGroup.toString();
        for (let h of nameGroup) {
        let group = h.toString();
        console.log(group);
        }
        // console.log(toShow);
    }
}

// let toShow = nameGroup.toString();
// let nameGroup = 

//I DONT KNOW HOW TO ORDER ALPHABETIC.. 
