import { BookLibrary } from './classes/BookLibrary.js';
import { header } from './header.js';
import { footer } from './footer.js';
import { initializeTheme, toggleTheme } from './theme-switch.js';
import bookDetails from './book-detailes.js';

//   Render header...
header.insert();

//  Fetch books list from json-server...
// const apiUrl = 'http://localhost:3000/books';

// Display trending books on page load...
const bookList = new BookLibrary();
bookList.trendingBooksToday();

//  Render footer...
footer.insert();

// Switch between themes...
initializeTheme();
toggleTheme();


//   Search books by title...
document.addEventListener("DOMContentLoaded", () => {
     const booksContainer = document.querySelector("#books-container");
     const searchInput = document.querySelector("#search-input");
     const libraryHeader = document.querySelector("#library-header");
     
     document.querySelector("#search-form").addEventListener("submit", async (event) => {
          event.preventDefault();
          const searchTerm = searchInput.value;

          if (searchTerm) {
               bookList.searchBooksByTitle(searchTerm);
               libraryHeader.innerHTML = '';
               booksContainer.innerHTML = '';
          } else {
               searchInput.placeholder = 'Please enter a search term...'
               setTimeout(() => {
                    searchInput.placeholder = 'Search for books...'
               }, 3000);
          }
     });
     searchInput.value = '';
});

// Display book details when a book card clicked...
bookDetails();
