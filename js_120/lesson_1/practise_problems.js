let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook('Aunts aren\'t Gentlement', 'PG Wodehouse');

book1.getDescription();
book2.getDescription();
book3.getDescription();

function createBook(title, author, read = false) {
  return {
    title,
    author,
    getDescription() {
      return `${title} was written by ${author}. I ${this.read ? 'have' : 'haven\'t'} read it.`;
    },
    read,
    readBook() {
      this.read = true;
    }
  }
}
