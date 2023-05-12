import { indexHeader } from './header.js';
import { indexFooter } from './footer.js';
import switchTheme from './theme-switch.js';
import toggleHamburgerBtn from './navbar-toggle-btn.js';

import {Book} from './classes/Book.js';

//   Render header...
indexHeader.insert();

//  Render footer...
indexFooter.insert();

// Toggle Hamburger button...
toggleHamburgerBtn();

// Switch between themes...
switchTheme();
