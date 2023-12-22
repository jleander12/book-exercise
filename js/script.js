const myLibrary = [];

function Book(title, author, pages, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;
}

function addBookToLibrary() {
  let bookNum = myLibrary.length;    //find the end of the library to determine the next book index
  myLibrary.push(new Book("Pandora's Star", "Peter F Hamilton", 988, true, bookNum));
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

console.log(myLibrary);