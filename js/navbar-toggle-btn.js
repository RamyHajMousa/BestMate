// Toggles the navigation menu between the collapsed and expanded states when clicking on hamburger btn...

function toggleHamburgerBtn() {
     const navToggle = document.querySelector('#nav-toggle');
     const mainNav = document.querySelector('#main-nav');
     const hamburgerBtn = document.querySelector('.hamburger');

     function navBarToggleBtn() {
          navToggle.classList.toggle('clicked');
          navToggle.classList.toggle('unclicked');
          mainNav.classList.toggle('nav-collapsed');
          mainNav.classList.toggle('nav-expanded');
     }

     // Event listener for the hamburger btn...
     hamburgerBtn.addEventListener('click', navBarToggleBtn);
}

export default toggleHamburgerBtn;




