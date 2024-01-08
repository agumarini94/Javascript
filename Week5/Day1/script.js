// function inform() {
//     alert("You clicked me")
// }


document.getElementById('button').onclick = function () {
    alert('Click!');
};

function insertRow() {
    let newRow = document.createElement('tr');
    let newCellOne = document.createElement('td');
    let newCellTwo = document.createElement('td');
    newRow.appendChild(newCellOne);
    newRow.appendChild(newCellTwo);
    document.getElementById('sampleTable').appendChild(newRow)
}