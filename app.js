const template = document.createElement("template");
const form = document.forms["books-form"];
const oldBooks = JSON.parse(localStorage.getItem("booksArray")) || [];

function grab(e) {
  return document.getElementById(e);
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  deleteBook(index) {
    oldBooks.splice(index, 1);
    localStorage.setItem("booksArray", JSON.stringify(oldBooks));
    grab("books-container").innerHTML = "";
    initialLoad();
  }
  addBook() {
    const title = form.booktitle;
    const author = form.bookauthor;
    const bookItem = new Book(title.value, author.value);
    oldBooks.push(bookItem);

    localStorage.setItem("booksArray", JSON.stringify(oldBooks));
    document.forms["books-form"].reset();
    grab("books-container").innerHTML = "";
    initialLoad();
  }
}
const bookf = new Book();

function initialLoad() {
  oldBooks.forEach((bookItem, index) => {
    template.innerHTML = `<li class="books">
                <h5>${bookItem.title}</h5>
                <h5>${bookItem.author}</h5>
                <button onclick='bookf.deleteBook(${index})'>Remove</button>
            </li>`;
    const far = template.content.firstElementChild;
    grab("books-container").appendChild(far);
  });
}
initialLoad();
