// script.js

console.log("Welcome to Nikhil Kumawat's portfolio!");

document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click',e=>{
e.preventDefault();
document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
});
