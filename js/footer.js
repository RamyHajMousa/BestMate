//  This file creates footer for all pages...
// ?Footer for index.html is created in index.js...

import { Footer } from './classes/Footer.js';

//Create footer for all pages but index.html...
let aboutUsPageUrl = '#';
let contactUsPageUrl = '#';
let faqPageUrl = '#';
let termsPageUrl = '#';
let privacyPageUrl = '#';

const footer = new Footer(
   aboutUsPageUrl,
   contactUsPageUrl,
   faqPageUrl,
   termsPageUrl,
   privacyPageUrl
);

// Create footer for index.html...
aboutUsPageUrl = '#';
contactUsPageUrl = '#';
faqPageUrl = '#';
termsPageUrl = '#';
privacyPageUrl = '#';

const indexFooter = new Footer(
   aboutUsPageUrl,
   contactUsPageUrl,
   faqPageUrl,
   termsPageUrl,
   privacyPageUrl
);

export {footer, indexFooter};