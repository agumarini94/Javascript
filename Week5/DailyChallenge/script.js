let planet = ['marte', 'venus', 'saturno', 'jupiter', 'pluton'];
// console.log(planet);
for (let planetas of planet) {

    //create div for each element's array
    var divPlanetas = document.createElement('div');

    // console.log(divPlanetas);
    // console.log(planetas);

    divPlanetas.classList.add ('planet');


    //here should add the name of the class of every planet 
    divPlanetas.classList.add (planetas) ;


    console.log(divPlanetas);

    const section = document.querySelector('.listPlanets');
    //add the divs to the div section.
    section.appendChild(divPlanetas);
    console.log(section);
    // divPlanetas.className = 'planet';
}
// console.log(planet);