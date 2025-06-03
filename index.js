const toggleSwitch = document.getElementById("darkModeToggle");

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.reset();
  alert("Thanks for your message! I'll get back to you soon.");
});

/*
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  
  navMenu.classList.toggle("active");
});
*/