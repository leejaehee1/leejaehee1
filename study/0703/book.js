var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var book = new Book();
book.title = "책1";
book.author = "저자1";
var book2 = new Book();
book2.title = "책2";
book2.author = "저자2";
var book3 = new Book();
book3.title = "책3";
book3.author = "저자3";
var books = [book, book2, book3];
// let books2 = Array<Book>();
// books2.push(book);
// books2.push(book2);
// books2.push(book3);
for (var i = 0; i < books.length; i++) {
    console.log("책이름 : " + books[i].title + ", 저자 : " + books[i].author);
}
