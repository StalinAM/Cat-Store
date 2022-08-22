const navBarEmail = document.querySelector(".navbar-email");
const navBarEmailMenu = document.querySelector(".desktop-menu");
const iconoMenu = document.querySelector(".menu");
const iconMenmMobileMenu= document.querySelector(".mobile-menu");

navBarEmail.addEventListener('click', toggleNavBarEmailMenu);
iconoMenu.addEventListener('click', toggleIconMenu);

function toggleNavBarEmailMenu() {
    navBarEmailMenu.classList.toggle('inactive');
}
function toggleIconMenu(){
    console.log("click");
    iconMenmMobileMenu.classList.toggle('inactive');
}