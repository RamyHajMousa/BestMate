const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Add an event listener for clicking on a book card to show the popup
function displayBookDetailes() {
     const booksContainer = document.querySelector("#books-container");
     booksContainer.addEventListener("click", (event) => {
          if (event.target.parentElement.classList.contains("book-card") ||
               event.target.classList.contains("book-card")) {
               popup.style.display = "block";
               popup.style.opacity = "1";
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