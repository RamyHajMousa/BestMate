export class BookCard {
     #book;
     constructor(book) {
          this.#book = book;
     }

     create() {
          const bookCard = document.createElement('section');
          bookCard.className = 'book-card';
          bookCard.id = `${this.#book.id}`;

          const bookImage = document.createElement('img');
          bookImage.src = `${this.#book.imageUrl}`;
          bookImage.alt = `Cover for "${this.#book.title}"`;

          const bookTitle = document.createElement('h5');
          bookTitle.className = 'book-title';
          const titleTextNode = document.createTextNode(this.#book.title);
          bookTitle.appendChild(titleTextNode);

          const bookAuthor = document.createElement('p');
          bookAuthor.className = 'book-author';
          const authorTextNode = document.createTextNode(`by: ${this.#book.author}`);
          bookAuthor.appendChild(authorTextNode);

          const bookGenre = document.createElement('p');
          bookGenre.className = 'book-genre';
          const genreTextNode = document.createTextNode(`${this.#book.genre}`);
          bookGenre.appendChild(genreTextNode);

          bookCard.appendChild(bookImage);
          bookCard.appendChild(bookTitle);
          bookCard.appendChild(bookAuthor);
          bookCard.appendChild(bookGenre);

          return bookCard;
     }
}
