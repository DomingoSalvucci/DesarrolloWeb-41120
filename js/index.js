const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");
const navMenu = document.querySelector(".nav-ul");


navToggle.addEventListener('click', () => {
   navMenu.classList.toggle("nav-menu_visible");
});