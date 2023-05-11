//  This file creates header for all pages ...

import { Header } from './classes/Header.js';

// Create header for all pages but index.html...
let homePageUrl = '../index.html';
let booksPageUrl = './books.html';
let aboutUsPageUrl = './about-us.html';
let contactUsPageUrl = './contact-us.html';
let logInPageUrl = './login.html';

const header = new Header(
   homePageUrl,
   booksPageUrl,
   aboutUsPageUrl,
   contactUsPageUrl,
   logInPageUrl
);

// Create header for index.html...
homePageUrl = './index.html';
booksPageUrl = './html/books.html';
aboutUsPageUrl = './html/about-us.html';
contactUsPageUrl = './html/contact-us.html';
logInPageUrl = './html/login.html';

const indexHeader = new Header(
   homePageUrl,
   booksPageUrl,
   aboutUsPageUrl,
   contactUsPageUrl,
   logInPageUrl
);

export { header, indexHeader };
