// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert('Too small');
//         break;
//     //nada porque 2 + 2 no es 3
//     case 4:
//         alert('Exactly!');
//         break;
//     //encuentra la coincidencia, muestra el mensaje y deja de buscar 
//     case 5:
//         alert('Too large');
//         break;
//     default:
//         alert("I don't know such values");
// }

let a = 2 + 2;

switch (a) {
    case 4:
        alert('Right!');
        break;
    
    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}