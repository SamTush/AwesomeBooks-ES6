const books = JSON.parse(localStorage.getItem('books')) || [];

class Book {
  constructor(id, title, author, isComplete = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isComplete = isComplete;
  }

  createEl() {
    const bookEl = document.createElement('li');
    bookEl.setAttribute('id', this.id);

    const divEl = document.createElement('div');
    divEl.classList.add('d-flex', 'justify-content-between');

    const divInner = document.createElement('div');
    divInner.classList.add('d-flex');

    const titleEl = document.createElement('p');
    titleEl.textContent = this.title;
    divInner.appendChild(titleEl);

    const spaceEl = document.createElement('p');
    spaceEl.classList.add('span');
    spaceEl.innerHTML = '&nbsp;by&nbsp;';
    divInner.appendChild(spaceEl);

    const authorEl = document.createElement('p');
    authorEl.textContent = this.author;
    divInner.appendChild(authorEl);

    divEl.appendChild(divInner);

    const deleteButtonEl = document.createElement('button');
    deleteButtonEl.classList.add('remove-book', 'btn', 'btn-outline-light');
    deleteButtonEl.textContent = 'Remove';
    deleteButtonEl.setAttribute('data-book-id', this.id);
    divEl.appendChild(deleteButtonEl);

    bookEl.appendChild(divEl);
    const hrline = document.createElement('hr');
    bookEl.appendChild(hrline);

    return bookEl;
  }

  static addBook(title, author) {
    const book = new Book(new Date().getTime(), title, author);
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    return book;
  }

  static removeBook(bookId) {
    const updatedBooks = books.filter((book) => book.id !== parseInt(bookId, 10));
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    return updatedBooks;
  }
}

export { Book, books };
