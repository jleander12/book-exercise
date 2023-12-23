const myLibrary = [];

function Book(title, author, pages, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

console.log(myLibrary);



function addBookToLibrary() {
  let bookNum = myLibrary.length;    //find the end of the library to determine the next book index
  myLibrary.push(new Book("Pandora's Star", "Peter F Hamilton", 988, true, bookNum));
  newBook = myLibrary[bookNum];

  const para = document.createElement("p");
  para.setAttribute(`id`,`book ${bookNum}`);

  for (const data in newBook) {
    if(`${data}` != `index`) {
    const list = document.createElement("li");
    const node = document.createTextNode(`${newBook[data]}`);
    list.appendChild(node);
    para.appendChild(list);
    }
  }
  
  const element = document.getElementById("div1");
  element.appendChild(para); 
}