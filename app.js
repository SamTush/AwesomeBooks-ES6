import { Book } from './modules/Book.js';
import { Clock } from './clock.js';
import { UI } from './ui.js';

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const books = JSON.parse(localStorage.getItem('books')) || [];

const booksSection = document.querySelector('.books');

if (localStorage.getItem('books')) {
  books.forEach((book) => new Book(book.id, book.title, book.author, book.isComplete).createEl());
}

document.querySelector('#book-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  if (title !== '' && author !== '') {
    Book.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
  }
});

booksSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-book')) {
    const bookId = event.target.getAttribute('data-book-id');
    Book.removeBook(bookId);
  }
});

const clock = new Clock();
clock.start();

const ui = new UI();
ui.init();
