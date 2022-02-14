function Book (name, year, version){
    this.name = name;
    this.year = year;
    this.version = version;
    
    
}
Book.prototype.pickBook = function(){
    books = books.filter(b => {
        return b.name == name;
    })
}

//create a new object
var book1 = new  Book ("Harry Potter", 1998, "Part 1" );
var book2 = new  Book ("Lord of the Rings", 2001, "Part 1" );
var book3 = new  Book ("Percy Jackson", 2005, "Part 1" );

console.log(book1);

let books = [book1, book2, book3];

console.log(book1.pickBook());

