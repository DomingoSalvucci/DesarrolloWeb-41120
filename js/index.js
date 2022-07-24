// const navToggle = document.querySelector(".nav-toggle");
// // const navMenu = document.querySelector(".nav-menu");
// const navMenu = document.querySelector(".nav-ul");

// navToggle.addEventListener('click', () => {
//    navMenu.classList.toggle("nav-menu_visible");
// });

const navToggle_pp = document.querySelector(".nav-toggle_pp");
// const navMenu = document.querySelector(".nav-menu");
const navMenu_pp = document.querySelector(".nav-ul_pp");

navToggle_pp.addEventListener('click', () => {
   navMenu_pp.classList.toggle("nav-menu_visible");
});


if (screen.width < 1000) {
   alert('menos de 1000')
   }  else {
            if (screen.width < 1280) 
               {
               document.write ("Mediana");
               }
               else { 
                  document.write ("Grande");
                   }
         };
