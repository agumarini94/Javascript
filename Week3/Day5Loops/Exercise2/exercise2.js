// let names = ["john", "sarah", 23, "Rudolf", 34]
// // for (i = 0; i < names.length(); i++){
// for (let i of names) {
//     if (typeof i === "string") {
//         //aca debo chequear que la primer letra sea mayuscula
//         console.log(i);
//     }
// }
    
// Solucion
let names = ["john", "sarah", 23, "Rudolf", 34];
for (let name of names) {
    if (typeof name === "string") {
        if (name[0].toUpperCase() == name[0].toUpperCase()) {
            name = name[0].toUpperCase() + name.slice(1);
        }
        console.log(name);
    }
}

//2 
for (let name of names) {
    if (typeof name !== "string") {
        continue;
    }
    console.log(name);
}