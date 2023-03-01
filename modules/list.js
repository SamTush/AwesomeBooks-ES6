import { Book, books } from './books.js';

const booksSection = document.querySelector('.books');

function displayBooks() {
books.forEach((book) => {
const bookEl = new Book(book.id, book.title, book.author, book.isComplete).createEl();
booksSection.appendChild(bookEl);
});
}

function removeBook(bookId) {
const updatedBooks = Book.removeBook(bookId);
booksSection.innerHTML = '';
updatedBooks.forEach((book) => {
const bookEl = new Book(book.id, book.title, book.author, book.isComplete).createEl();
booksSection.appendChild(bookEl);
});
}

booksSection.addEventListener('click', (event) => {
if (event.target.classList.contains('remove-book')) {
const bookId = event