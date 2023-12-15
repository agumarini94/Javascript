let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

let totalAdditionals = users.length - 2; //if there's more of 3 users..
if (users.length <= 3) { //if there's less of 3, so check how many users there're.. 
    switch (users.length) {
        case 0:
            console.log("No one its connected");
            break;
        case 1:
            console.log("Usuario " + users[0] + " is connected");
            break;

        case 2:
            console.log("the users " + users[0] + " and " + 
            users[1] + "are connected");
            break;
    }   
}
else {
    console.log(users);
    console.log(users[0] " and " users[1] " + " +       
    totalAdditionals + " users are connected");
}