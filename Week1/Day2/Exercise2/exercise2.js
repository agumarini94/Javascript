let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeriesLength = myWatchedSeries.length; // esto deberia mostrar 3
myWatchedSeriesSentence = myWatchedSeries.toString(); // esto deberia devolver una cadena 

console.log("I watched " + myWatchedSeriesLength + " series: " + myWatchedSeriesSentence); //parte 1 exercise 

//parte 2 

//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.

myWatchedSeries[2] = "Friends"; //cambie el nombre de la serie the big bang theory, por friends 
console.log("Ahora me gustan estas 3: " + myWatchedSeries);

//Add, at the end of the array, the name of another series you watched.

myWatchedSeries.push("Vikings");//Agregue que me gusta vikingos
console.log("Agregue una serie mas " + myWatchedSeries);

//Add, at the beginning of the array, the name of your favorite series.

myWatchedSeries.splice(0, 0, "Breaking bad"); //agregue en el primer elemento del array, y no seleccione ningun elemento para borrar. Y agregue Breaking bad.
console.log("Ahora mis favorite series son " + myWatchedSeries);

//Delete the series “black mirror”.
myWatchedSeries.splice(1, 1); //seleccione en la posicion 1 del array, y borre un elemento
console.log("elimine breaking bad " + myWatchedSeries);

//Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]); //accedo a la posicion 1, que es donde esta la serie mencionada, y elijo la 3 letra.

