let menu = document.querySelector(".menu");
let header = document.querySelector(".header");
let menuBtn = document.querySelector(".mobile-nav-btn");
let closeMenu = document.querySelector(".menu-close");

const toggleNavbar = () => {
  header.classList.toggle("active");
  console.log("menu clicked");
};

menu.addEventListener("click", toggleNavbar);
