this // se refiere a la ventana de objetos ?? 

console.log(this);

let obj = {
    name: 'john',
    myAge: function () {
        this.console.log(' my age is 22');
    }
    // console.log(this);
}

//para llamar una funcion en un objeto, uso parentesis.
console.log(obj.myAge());
