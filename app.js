const template = document.createElement('template');
const form = document.forms['books-form'];
var oldBooks = JSON.parse(localStorage.getItem('booksArray')) || [];

function grab(e) {
  return document.getElementById(e);
}
function book(title, author) {
  this.key = oldBooks.length;
  this.title = title;
  this.author = author;
}

function deleteBook(index) {
  oldBooks.splice(index, 1);
  localStorage.setItem('booksArray', JSON.stringify(oldBooks));
  grab('books-container').innerHTML = '';
  let c = 0;
  oldBooks.forEach(function (bookItem) {
    oldBooks[c].key = c;
    template.innerHTML = `<li>
                <h5>${bookItem.title}</h5>
                <h5>${bookItem.author}</h5>
                <button onclick='deleteBook(${c})'>Remove</button>
            </li>`;
    console.log(oldBooks);
      const far = template.content.firstElementChild;
    grab('books-container').appendChild(far);
    c++;
  });
}
function addBook() {
  const title = form.booktitle;
  const author = form.bookauthor;
  var bookItem = new book(title.value, author.value);
  oldBooks.push(bookItem);

  localStorage.setItem('booksArray', JSON.stringify(oldBooks));

  template.innerHTML = `<li>
                <h5>${bookItem.title}</h5>
                <h5>${bookItem.author}</h5>
                <button onclick='deleteBook(${bookItem.key})'>Remove</button>
            </li>`;
  console.log(oldBooks);
  const far = template.content.firstElementChild;
  grab('books-container').appendChild(far);
}

function initialLoad() {
  let c = 0;
  oldBooks.forEach(function (bookItem) {
    oldBooks[c].key = c;
    template.innerHTML = `<li>
                <h5>${bookItem.title}</h5>
                <h5>${bookItem.author}</h5>
                <button onclick='deleteBook(${c})'>Remove</button>
            </li>`;
    console.log(oldBooks);
    const far = template.content.firstElementChild;
    grab('books-container').appendChild(far);
    c++;
  });
}
initialLoad();
