export class Book {
     constructor(id, title, author, genre, imageUrl) {
          this.id = id;
          this.title = title;
          this.author = author;
          this.genre = genre;
          this.imageUrl = imageUrl;
     }


     async bookDetails(id) {
          const apiUrl = `https://openlibrary.org${id}.json`;
          const data = await this.#fetchData(apiUrl);

          let authorNames = [];
          for (const author of data.authors) {
               const name = await this.#authorName(author.author.key);
               authorNames.push(name);
          }
          
          const book = new Book(
               id,
               data.title,
               data.authors ? authorNames.join(', ') : 'Not available',
               data.subjects ? `(${data.subjects[0]})` : 'Not available',
               data.covers ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg` : "../../assets/images/no-image.jpg"
          );
          book.description = data.description ? (data.description.value || data.description) : 'Not available';

          this.#renderBook(book);
     }

     // Bring autor info...
     async #authorName(authorId) {
          const apiUrl = `https://openlibrary.org${authorId}.json`;
          const data = await this.#fetchData(apiUrl);
          const name = data.name;
          return name;
     }




     // Fetch data from API...
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
               // this.#errorMessage();
          }
     }

     // Render book details...
     #renderBook(book) { 
          const bookFigure  = document.querySelector('.book-cover');
          const bookInfo = document.querySelector('.book-info');
          const bookImage = document.createElement('img');
          const bookTitle = document.createElement('h2');
          const bookAuthor = document.createElement('p');
          const bookGenre = document.createElement('p');
          const bookDescription = document.createElement('p');
          bookImage.classList.add('book-image');
          bookTitle.classList.add('book-title');
          bookAuthor.classList.add('book-author');
          bookGenre.classList.add('book-genre');
          bookDescription.classList.add('book-description');
          bookImage.src = book.imageUrl;
          bookTitle.textContent = book.title;
          bookAuthor.textContent = `By: ${book.author}`;
          bookGenre.textContent = `Genre: ${book.genre}`;
          bookDescription.innerHTML = `Description:<br>${book.description}`;
          bookFigure.appendChild(bookImage);
          bookInfo.appendChild(bookTitle);
          bookInfo.appendChild(bookAuthor);
          bookInfo.appendChild(bookGenre);
          bookInfo.appendChild(bookDescription);
     
     }


}
