let openMenu = document.querySelector(".nav-toggle");
let closeMenu = document.querySelector(".nav-close");
let menu = document.querySelector("ul");
//   Open Menu
openMenu.addEventListener("click", function () {
  menu.classList.add("showmenu");
});
//   closeMenu
closeMenu.addEventListener("click", function () {
  menu.classList.remove("showmenu");
});

// Add Class in scroll
let navBar = document.getElementById("home")
document.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    navBar.classList.add("scroll-header");
  } else {
    navBar.classList.remove("scroll-header");
  }
});
