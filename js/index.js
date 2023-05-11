import { indexHeader } from './header.js';
import { indexFooter } from './footer.js';
import { initializeTheme, toggleTheme } from './theme-switch.js';

//   Render header...
indexHeader.insert();

//  Render footer...
indexFooter.insert();

// Switch between themes...
initializeTheme();
toggleTheme();
