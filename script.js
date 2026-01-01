// script.js

console.log("Welcome to Nikhil Kumawat's portfolio!");

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
});
