import {header} from './header.js';
import {footer} from './footer.js';
import { initializeTheme, toggleTheme } from './theme-switch.js';

// Render header...
header.insert();

// Render footer...
footer.insert();

// Switch between themes...
initializeTheme();
toggleTheme();
