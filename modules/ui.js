const UI = (() => {
    const booksSection = document.querySelector('.books');
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const listBookClick = document.querySelector('.list-book-click');
    const listBook = document.querySelector('.list-book');
    const addBookFunClick = document.querySelector('.add-book-click');
    const addBookfun = document.querySelector('.add-book');
    const contactBookClick = document.querySelector('.contact-book-click');
    const contactBook = document.querySelector('.contact-book');
  
    const displayBooks = () => {
      if (LocalStorage.getBooks()) {
        LocalStorage.getBooks().forEach((book) => new Book(book.id, book.title, book.author, book.isComplete).createEl());
      }
    };
  
    const clearInputs = () => {
      titleInput.value = '';
      authorInput.value = '';
      titleInput.focus();
    };
  
    const showListBook = () => {
      listBook.classList.add('display-on');
      listBook.classList.add('active');
    }
}