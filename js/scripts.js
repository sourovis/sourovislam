const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-Close");
const navBar = document.querySelector(".nav-bar");

menuOpen.addEventListener("click", () => {
  navBar.classList.toggle("open");
});
menuClose.addEventListener("click", () => {
  navBar.classList.remove("open");
});
