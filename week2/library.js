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

const book1=new Book("harry poter","j.k.rowling",400,true)
const book2=new Book("jungle book","thomos",200,true)
const book3=new Book("disney","john",300,false)
const book4=new Book("marvel","kim",450,true)
const book5=new Book("dc","donald",400,true)


//Display info of all books
book1.getInfo()
book2.getInfo()
book3.getInfo()
book4.getInfo()
book5.getInfo()

//Borrow 2 books and show their availability status
book1.borrow()
book3.borrow()

//Return 1 book and show updated status
book3.returnBook()
// Count how many books are "long books"
book4.isLongBook()

