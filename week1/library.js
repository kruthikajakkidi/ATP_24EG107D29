// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books
class Book{
title
author
pages
isAvailable

constructor(title,author,pages,isAvailable){
this.title=title
this.author=author
this.pages=pages
this.isAvailable=isAvailable
}

borrow(){
if(this.isAvailable==true){
this.isAvailable=false
console.log("available")
}
else{
console.log("not available")
}
}

returnBook(){
this.isAvailable=true
console.log(this.title+" returned successfully")
}

getInfo(){
console.log(`${this.title} by ${this.author} (${this.pages} pages)`)
}

isLongBook(){
if(this.pages>300){
console.log("it is long book")
}
else{
console.log("not a long book")
}
}
}

// let availableBooks=Book.filter(book=>book.isAvailable)

const book1=new Book("harry poter","j.k.rowling",400,true)
const book2=new Book("jungle book","thomos",200,true)
const book3=new Book("disney","john",300,false)
const book4=new Book("marvel","kim",450,true)
const book5=new Book("dc","donald",400,true)

book1.getInfo()
book2.getInfo()
book3.getInfo()
book4.getInfo()
book5.getInfo()

book1.borrow()
book3.borrow()

book3.returnBook()

book4.isLongBook()


