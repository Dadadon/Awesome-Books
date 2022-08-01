const books = [];
const template = document.createElement("template");
const form = document.forms["books-form"];
function grab(e) {
  return document.getElementById(e);
}
function book(title, author) {
    this.title = title;
    this.author = author;
}

function addBook() {
  console.log(book(form.booktitle, form.bookauthor));
  //books.push(book(form.title, form.author));
  template.innerHTML = "";
  // books.forEach((el, index) => {
  //   template.innerHTML = `<li>
  //               <h5>${el.title}</h5>
  //               <h5>${el.author}</h5>
  //               <button onclick="deleteBook(${index})"></button>
  //           </li>`;
  // });
  // const far = template.content.firstElementChild;
  // grab("books-container").appendChild(far);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
});

