//  This class creates the header for all pages... 
export class Header {
   #homePageUrl;
   #booksPageUrl;
   #aboutUsPageUrl;
   #contactUsPageUrl;
   #logInPageUrl;

   constructor(homePageUrl, booksPageUrl, aboutUsPageUrl, contactUsPageUrl, logInPageUrl) {
      this.#homePageUrl = homePageUrl;
      this.#booksPageUrl = booksPageUrl;
      this.#aboutUsPageUrl = aboutUsPageUrl;
      this.#contactUsPageUrl = contactUsPageUrl;
      this.#logInPageUrl = logInPageUrl;
   }

   #create() {
      // Go to the bottom to see the html scheme...
      const header = document.createElement('header');
      header.id = 'main-header';
      // header first child is the logo...
      const logoContainer = document.createElement('div');
      logoContainer.classList.add('logo-container');
      const logo = document.createElement('a');
      logo.href = this.#homePageUrl;
      logo.innerHTML = `<h1><span>B</span>est<span>M</span>ate</h1>`;
      logoContainer.appendChild(logo);
      header.appendChild(logoContainer);
      // header second child is the nav toggle (humburger btn)...
      const navToggle = document.createElement('button');
      navToggle.id = 'nav-toggle';
      navToggle.classList.add('hamburger');
      navToggle.classList.add('unclicked');
      navToggle.innerHTML = `
         <span></span>
         <span></span>
         <span></span>
         `;
      header.appendChild(navToggle);
      // header third child is the navigation bar...
      const nav = document.createElement('nav');
      nav.id = 'main-nav';
      nav.classList.add('nav-collapsed');
      const ul = document.createElement('ul');
      ul.innerHTML = `
         <li><a href="${this.#homePageUrl}">Home</a></li>
         <li><a href="${this.#booksPageUrl}">Books</a></li>
         <li><a href="${this.#aboutUsPageUrl}">About Us</a></li>
         <li><a href="${this.#contactUsPageUrl}">Contact Us</a></li>
         <li><a id="nav-login-btn" href="${this.#logInPageUrl}">Log In</a></li>
         `;
      nav.appendChild(ul);
      header.appendChild(nav);

      return header;
   }

   // This function inserts the header into the top of the body element...
   insert() {
      const body = document.querySelector('body');
      const header = this.#create();
      body.insertAdjacentElement('afterbegin', header);
   }

}

//? Header html scheme...
      // header.innerHTML = `
      //    <div class="logo-container">
      //       <a href="${this.#homePageUrl}">
      //          <h1><span>B</span>est<span>M</span>ate</h1>
      //       </a>
      //    </div>
      //    <button id="nav-toggle" class="hamburger unclicked">
      //       <span></span>
      //       <span></span>
      //       <span></span>
      //    </button>
      //    <nav id="main-nav" class="nav-collapsed" >
      //       <ul>
      //          <li><a href="${this.#homePageUrl}">Home</a></li>
      //          <li><a href="${this.#booksPageUrl}">Books</a></li>
      //          <li><a href="${this.#aboutUsPageUrl}">About Us</a></li>
      //          <li><a href="${this.#contactUsPageUrl}">Contact Us</a></li>
      //          <li><a id="nav-login-btn" href="${this.#logInPageUrl}">Log In</a></li>
      //       </ul>
      //    </nav>