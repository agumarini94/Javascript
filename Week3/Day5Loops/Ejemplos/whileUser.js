let username = prompt("enter your username");

while (username !== "admin") { //mientras username sea diferente que admin... 
    username = prompt("no valido");
}
console.log("welcome admin"); 
