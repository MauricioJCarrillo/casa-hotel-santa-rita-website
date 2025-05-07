// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  mobileMenu.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    mobileMenu.textContent = "☰";
  });
});
