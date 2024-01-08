function insertRow() {
    let theRow = document.createElement('tr');
    let theTd1 = document.createElement('td');
    let theTd2 = document.createElement('td'); //createElement es una funcion de DOM
    theRow.appendChild(theTd1); //append child es como copiar y pegar, aca estaria copiando el primer td. 
    theRow.appendChild(theTd2);
    document.getElementById('sampleTable').appendChild(theRow);
    //por ultimo, llamo a la tabla, y agrego los elementos hijos, theRow, que a su vez contiene a los TD.
}

