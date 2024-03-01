// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Menu diklik
document.querySelector("#list-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar
const list = document.querySelector("#list-menu");

document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
