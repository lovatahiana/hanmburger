"use strict";

/* ************************************** */
/* VARIABLES */
/* NAVBAR */
const menuBarsIcon = document.querySelector(".menu-bar");
const menuCloseIcon = document.querySelector(".menu-close");
const nav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav__item");
const menuContainer = document.querySelector(".nav__wrapper");

/* ************************************** */
/* FUNCTIONS */
/* NAVBAR */
/* toggle hamburger icon */
function toggleMenu() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    menuBarsIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
  } else {
    nav.style.display = "block";
    menuBarsIcon.style.display = "none";
    menuCloseIcon.style.display = "block";
  }
}

/* hide hamburger icon when resize back to desktop */
function hideMenuBars() {
  if (window.innerWidth > 1024) {
    menuBarsIcon.style.display = "none";
    menuCloseIcon.style.display = "none";
    nav.style.display = "block";
  } else {
    menuBarsIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
    nav.style.display = "none";
  }
}

/* set active menu item */
menuContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav__item");

  if (!clicked) return;

  menuItems.forEach((i) => i.classList.remove("active"));

  clicked.classList.add("active");
});

/* ************************************** */
/* EVENT LISTENNERS */
/* NAVBAR */
window.addEventListener("resize", hideMenuBars, false);
menuBarsIcon.addEventListener("click", toggleMenu);
menuCloseIcon.addEventListener("click", toggleMenu);
