let navLinks = document.getElementById("navLinks");
const homeSection = document.getElementById("header");
const aboutNav = document.getElementById("about-navbar");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// window.addEventListener("scroll", () => {
//   const homeRect = homeSection.getBoundingClientRect();

//   // When home section is scrolled out of view
//   if (homeRect.bottom <= 0) {
//     // homeNav.classList.add("hide");
//     aboutNav.classList.add("show");
//   } else {
//     // homeNav.classList.remove("hide");
//     aboutNav.classList.remove("show");
//   }
// });
