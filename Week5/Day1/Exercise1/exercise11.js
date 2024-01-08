function insertRow() {
    let myRow = document.createElement('tr');
    let myTd1 = document.createElement('td');
    let myTd2 = document.createElement('td');

    myRow.appendChild(myTd1);
    myRow.appendChild(myTd2);
    document.getElementById('sampleTable').appendChild(myRow);
}