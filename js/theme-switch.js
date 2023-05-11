//  This file is used to switch between light and dark mode...

const body = document.querySelector('body');
const themeSwitchBtn = document.createElement('button');
const sunIcon = createIcon('sun-icon', 'light_mode');
const moonIcon = createIcon('moon-icon', 'dark_mode');
const main = document.querySelector('main');

themeSwitchBtn.id = 'theme-switch-button';
main.insertAdjacentElement('beforeend', themeSwitchBtn);
themeSwitchBtn.append(sunIcon, moonIcon);

//===========================================
//  Helper Functions...
// This function is  used to create the icons...
function createIcon(id, iconName) {
   const icon = document.createElement('i');
   icon.id = id;
   icon.className = 'material-icons';
   icon.innerText = iconName;
   return icon;
}
// This function is used to ensure that the page is in the correct mode...
function initializeTheme() {
   if (localStorage.getItem("Mode") === "Light") {
      body.classList.add("light-mode");
      sunIcon.style.display = "none";
   } else {
      localStorage.setItem("Mode", "Dark");
      moonIcon.style.display = "none";
   }
}
// This function is used to switch between light and dark mode...
const toggleTheme = () => {
   themeSwitchBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');

      if (localStorage.getItem("Mode") === "Dark") {
         localStorage.setItem("Mode", "Light");
         sunIcon.style.display = "none";
         moonIcon.style.display = "block";
      } else {
         localStorage.setItem("Mode", "Dark");
         sunIcon.style.display = "block";
         moonIcon.style.display = "none";
      }
   });
}

function switchTheme() {
     initializeTheme();
     toggleTheme();
}
export default switchTheme;
