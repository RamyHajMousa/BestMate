import {Book} from "./classes/Book.js";

const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");

// Add an event listener for clicking on a book card to show the popup
function displayBookDetailes() {
     const booksContainer = document.querySelector("#books-container");
     const bookFigure = document.querySelector(".book-cover");
     const bookInfo = document.querySelector(".book-info");
     const book =  new Book();
     booksContainer.addEventListener("click", (event) => {
          if (event.target.parentElement.classList.contains("book-card") ||
          event.target.classList.contains("book-card")) {
                    bookFigure .innerHTML = "";
                    bookInfo .innerHTML = "";
               const bookId = event.target.id || event.target.parentElement.id;
               popup.style.display = "block";
               popup.style.opacity = "1";
               book.bookDetails(bookId);
          }
     });
}

// Close the popup when clicking on the close button
function closePopup() {
     closeBtn.addEventListener("click", () => {
          popup.style.opacity = "0";
          setTimeout(() => {
               popup.style.display = "none";
          }, 300);
     });
}

function bookDetails() {
     displayBookDetailes();
     closePopup();
}

export default bookDetails ; 