// Toggle class active for navbar-nav
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#list-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close navbar-nav when clicking outside
const listMenu = document.querySelector("#list-menu");
document.addEventListener("click", function (e) {
  if (!listMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Seleksi elemen-elemen yang diperlukan
const searchIcon = document.querySelector("#search");
const searchForm = document.querySelector(".search-form");

// Tambahkan event listener untuk klik pada ikon pencarian
searchIcon.addEventListener("click", function () {
  // Toggle class active pada elemen pencarian
  searchForm.classList.toggle("active");

  // Fokuskan input pencarian saat elemen pencarian muncul
  if (searchForm.classList.contains("active")) {
    document.getElementById("search-input").focus();
  }
});

// Tambahan: Tutup elemen pencarian jika diklik di luar elemen tersebut
document.addEventListener("click", function (e) {
  if (!searchIcon.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
