import { Book, books } from './books.js';

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title !== '' && author !== '') {
    const book = Book.addBook(title, author);
    const bookEl = book.createEl();
    booksSection.appendChild(bookEl);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
  }
}

document.querySelector('#book-form').addEventListener('submit', (event) => {
  event.preventDefault();
  addBook();
});

export { addBook };
