//  This class creates the footer for all pages...
export class Footer {
   #aboutUsPageUrl;
   #contactUsPageUrl;
   #faqPageUrl;
   #termsPageUrl;
   #privacyPageUrl;

   constructor(aboutUsPageUrl, contactUsPageUrl, faqPageUrl, termsPageUrl, privacyPageUrl) {
      this.#aboutUsPageUrl = aboutUsPageUrl;
      this.#contactUsPageUrl = contactUsPageUrl;
      this.#faqPageUrl = faqPageUrl;
      this.#termsPageUrl = termsPageUrl;
      this.#privacyPageUrl = privacyPageUrl;
   }

   #create() {
      const footer = document.createElement('footer');
      footer.id = 'main-footer';
      footer.innerHTML = `
      <ul>
         <li><a href="${this.#aboutUsPageUrl}">About Us</a></li>
         <li><a href="${this.#contactUsPageUrl}">Contact Us</a></li>
         <li><a href="${this.#faqPageUrl}">FAQ</a></li>
         <li><a href="${this.#termsPageUrl}">Terms of Service</a></li>
         <li><a href="${this.#privacyPageUrl}">Privacy Policy</a></li>
      </ul>
      <p id="copyright"><span>&copy; 2023 BestMate.</span> All rights reserved.</p>
      `;
      return footer;
   }

   insert() {
      const main = document.querySelector('main');
      const footer = this.#create();
      main.insertAdjacentElement('afterend', footer);
   }
}