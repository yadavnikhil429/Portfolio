const toggleSwitch = document.getElementById("darkModeToggle");

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
 setTimeout(() => {
  form.reset();
  alert("Thanks for your message! I'll get back to you soon.");
}, 1000); // Simulate a delay of 1 second before resetting the form and showing the alert
});




//if i want to use fetch request for form submission, uncomment the following code and replace the form submission code above with this:
/*
const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // stop default form submission

  const data = new FormData(form);

  try {
    const response = await fetch("https://formsubmit.co/contactnikhil429@gmail.com", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      form.reset();
      alert("Thanks for your message! I'll get back to you soon.");
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
    console.error(error);
  }
});
*/ 

// Uncomment the following code if you want to use a hamburger menu for navigation
/*
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  
  navMenu.classList.toggle("active");
});
*/