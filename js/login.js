import {header} from './header.js';
import { footer } from './footer.js';
import toggleHamburgerBtn from './navbar-toggle-btn.js';
import switchTheme from './theme-switch.js';

// Render header...
header.insert();

// Render footer...
footer.insert();

// Toggle Hamburger button...
toggleHamburgerBtn();

// Switch between themes...
switchTheme();
