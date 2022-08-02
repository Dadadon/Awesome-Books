const template = document.createElement('template');
const form = document.forms['books-form'];
const oldBooks = JSON.parse(localStorage.getItem('booksArray')) || [];

function grab(e) {
  return document.getElementById(e);
}
function Book(title, author) {
  this.key = oldBooks.length;
  this.title = title;
  this.author = author;
}

function deleteBook(index) {
  window.location.reload();
  oldBooks.splice(index, 1);
  localStorage.setItem('booksArray', JSON.stringify(oldBooks));
  grab('books-container').innerHTML = '';
  let c = 0;
  oldBooks.forEach((bookItem) => {
    oldBooks[c].key = c;
    template.innerHTML = `
                <h5>${bookItem.title}</h5>
                <h5>${bookItem.author}</h5>
                <button onclick='deleteBook(${c})'>Remove</button>`;
    const far = template.content.firstElementChild;
    grab('books-container').appendChild(far);
    c += c + 1;
  });
}
function addBook() {
  window.location.reload();
  const title = form.booktitle;
  const author = form.bookauthor;
  const bookItem = new Book(title.value, author.value);
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
  document.forms['books-form'].reset();

}

function initialLoad() {
  let c = 0;
  oldBooks.forEach((bookItem) => {
    oldBooks[c].key = c;
    template.innerHTML = `<li>
                <h5>${bookItem.title}</h5>
                <h5>${bookItem.author}</h5>
                <button onclick='deleteBook(${c})'>Remove</button>
            </li>`;
    const far = template.content.firstElementChild;
    grab('books-container').appendChild(far);
    c += c + 1;
  });
}
initialLoad();
