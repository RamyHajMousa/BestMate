import { Book } from './Book.js';
import { BookCard } from './BookCard.js';

export class BookLibrary {

     //  Fetch an api url for books list and display them in cards...
     // Search for books by title...
     async searchBooksByTitle(title) {
          const apiUrl = `http://openlibrary.org/search.json?q=${title}`;
          const { docs } = await this.#fetchData(apiUrl);
          const books = this.#createBooksArray(docs);
          this.#displayBooks(books);
     }

     async trendingBooksToday() {
          const apiUrl = `https://openlibrary.org/trending/daily.json`;
          const { works } = await this.#fetchData(apiUrl);
          const books = this.#createBooksArray(works);
          this.#displayBooks(books);
     }


     // ======================= Helper functions =======================

     //  Fetch an api url...
     async #fetchData(apiUrl) {
          try {
               const response = await fetch(apiUrl);
               if (!response.ok) {
                    throw new Error(`An error occurred: ${response.statusText}`);
               }
               return await response.json();
          }
          catch (error) {
               console.error('Error fetching books:', error);
               this.#errorMessage();
          }
     }

     //  Create an array of books from fetched data...
     #createBooksArray(data) {
          return data.map(book => {
               const key = book.key;
               const title = book.title ? book.title : 'Unknown';
               const author = book.author_name ? book.author_name.join(', ') : 'Un available';
               const genre = book.subject_facet ? `(${book.subject_facet[0]})` : '';
               const imageUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "../../assets/images/no-image.jpg";
               return new Book(key, title, author, genre, imageUrl);
          });
     }

     //  Create and display a list of book cards
     #displayBooks(books) {
          const booksContainer = document.querySelector('#books-container');
          books.forEach(book => {
               const bookCard = new BookCard(book);
               booksContainer.appendChild(bookCard.create());
          });
     }

     //  Disply an error message when an error occurs while fetching books...
     #errorMessage() {
          const booksContainer = document.querySelector('#books-container');
          const errorContainer = document.createElement('div');
          errorContainer.className = 'error-container';
          const errorTitle = document.createElement('h2');
          errorTitle.textContent = 'Error';
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `Sorry! There is a problem in fetching books now...`;

          booksContainer.appendChild(errorContainer);
          errorContainer.appendChild(errorTitle);
          errorContainer.appendChild(errorMessage);
     }

}

