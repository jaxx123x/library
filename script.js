const library = [];
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
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
        const readStatus = document.createElement("div");
        readStatus.classList.add("read-status");
        book.appendChild(readStatus);
        readStatus.textContent = "Unread";
        const deleteBook = document.createElement("div");
        deleteBook.classList.add("delete");
        deleteBook.id = `delete${bookIndex}`;
        book.appendChild(deleteBook);
        deleteBook.textContent = "Delete";
    content.appendChild(book);
};

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let titleValue = document.getElementById("title").value;
    let authorValue = document.getElementById("author").value;
    let pagesValue = document.getElementById("pages").value;
    if (titleValue === "" || authorValue === "" || pagesValue === "") {alert ("Please fill the fields")
        return;
    };
    let title = titleValue;
    title = new Book(titleValue, authorValue, pagesValue);
    library.push(title);
    console.log(library);
    addBook();
})
    


content.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        const bookElement = event.target.parentNode; 
        const bookTitle = bookElement.querySelector(".title").textContent.replace("Title: ", ""); 
        
        
        const bookIndex = library.findIndex(book => book.title === bookTitle);

        if (bookIndex !== -1) { 
            library.splice(bookIndex, 1); 
        }

        bookElement.remove(); 
    }
});

content.addEventListener("click", (event) => {
    if (event.target.classList.contains("read-status") && event.target.textContent != "Read :)") {
        event.target.parentNode.style.backgroundColor = "green";
        event.target.textContent = "Read :)";
        event.target.style.backgroundColor = "rgb(7, 232, 123)";
    }
    else if (event.target.textContent === "Read :)" && event.target.classList.contains("read-status")){
        event.target.parentNode.style.backgroundColor = "white";
        event.target.textContent = "Unread";
        event.target.style.backgroundColor = "red";
    }
})





