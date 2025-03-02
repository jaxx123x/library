const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    console.log(`This is ${title} by ${author} with ${pages} pages, and it's ${read}.`);
}

Book.prototype.modifyReadStatus = function () {
    
}

let btn = document.querySelector("#add-book");
let content = document.querySelector(".content");


function addBook () {
    const bookIndex = library.length - 1;
    const book = document.createElement("div");
    book.classList.add("book");
    book.id = `${bookIndex}`;
        const bookTitle = document.createElement("div");
        bookTitle.classList.add("title");
        book.appendChild(bookTitle);
        bookTitle.textContent = `Title: ${library[bookIndex].title}`;
        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("author");
        book.appendChild(bookAuthor);
        bookAuthor.textContent = `Author: ${library[bookIndex].author}`;
        const bookPages = document.createElement("div");
        bookPages.classList.add("pages");
        book.appendChild(bookPages);
        bookPages.textContent = `Pages: ${library[bookIndex].pages}`;
        const readStatusText = document.createElement("div");
        readStatusText.classList.add("read");
        book.appendChild(readStatusText);
        readStatusText.textContent = "Read:";
        const readStatus = document.createElement("input");
        readStatus.type = "checkbox";
        readStatus.id = "value";
        readStatus.name = "value";
        readStatusText.appendChild(readStatus);
        const deleteBook = document.createElement("div");
        deleteBook.classList.add("delete");
        deleteBook.id = `delete${bookIndex}`;
        book.appendChild(deleteBook);
        deleteBook.textContent = "Delete";
    content.appendChild(book);
};

btn.addEventListener("click", () => {
    event.preventDefault();
    let titleValue = document.getElementById("title").value;
    let authorValue = document.getElementById("author").value;
    let pagesValue = document.getElementById("pages").value;
    let readValue = document.getElementById("value").value;
    let title = titleValue;
    title = new Book(titleValue, authorValue, pagesValue, readValue);
    library.push(title);
    console.log(library);
    addBook();
    
})
    

const delBtns = document.querySelectorAll(".delete"); // Selectează toate butoanele

delBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Ai apăsat pe un buton!");
    });
});



content.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        event.target.parentNode.remove();

    };
})





