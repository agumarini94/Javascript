const book1 = {
    title: 'harry potter ', 
    author: 'Pep', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Harry_Potter.jpg', 
    alreadyRead: 'true', 
}
const book2 = {
    title: 'harry potter2 ',
    author: 'Pep2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Harry_Potter.jpg',
    alreadyRead: 'true',
}
const book3 = {
    title: 'harry potter3 ',
    author: 'Pep3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Harry_Potter.jpg',
    alreadyRead: 'true',
}
const myBook = [book1, book2, book3];
console.log(myBook);

//creating table 

let myDiv = document.querySelector('.listBooks');
for (let i = 0; i < myBook.length; i++) {
    let div = document.createElement('div');
    let title = document.createElement('h2');
    let author = document.createElement('p');
    let image = document.createElement('img');
    let read = document.createElement('p')
    title.innerText = myBook[i].title;
    author.innerText = myBook[i].author;
    image.setAttribute("src", myBook[i].image)
    read.innerText = myBook[i].alreadyRead;
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(image);
    div.appendChild(read);
    myDiv.appendChild(div);
    image.style.width = '100px';
    read.style.color = 'red';

    


}



//     i++;
// // }
// // for (let rows = 0; rows < 4; rows++) {
// //     rows++;
// // }

// //here should give the name of the <tr> ? 
// // document.Column.textContent('title');

// // const myColum1 = document.querySelectorAll('tr');
// const myColumn1 = document.getElementsByTagName('tr');
// console.log(myColumn1);
// console.log(myBookColum1);
// // myColumn1[1].innerHTML = 'title';

// let myColumn = Column;
// // console.log(myDiv);
// myDiv.append(table); //add table to myDiv 
// myDiv.append(Column); //add (tr) to myDiv 
// myDiv.append(Column1);
// myDiv.append(myRow); //add (td) to myDiv 
// myDiv.append(myRow1);
// myDiv.append(myRow2);
// myDiv.append(myRow3);



// // console.log(myDiv);
// // for (let myDivObjet in myDiv) {
// //     console.log(myDivObjet);
// // }
// // const myDiv = document.getElementsByClassName('.listBooks')
// // const myTable = document.createElement('table');



// // for (let i = 0; i < 2; i++){
// //     let
// // }