export default class BookClass {
  constructor(id, title, author, isComplete = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isComplete = isComplete;
  }
}