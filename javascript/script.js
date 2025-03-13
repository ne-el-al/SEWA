const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logsing = document.querySelector(".logsing-menu");
const account = document.querySelector(".account");

// Toggle Hamburger Menu
hamburger.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent closing when clicking inside the menu
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Toggle Log In / Sign In Menu
account.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent closing when clicking inside the menu
  account.classList.toggle("active");
  logsing.classList.toggle("active");
});

// Close the menu when clicking anywhere outside
document.addEventListener("click", (event) => {
  // Check if Log In / Sign In menu is open and close it
  if (logsing.classList.contains("active")) {
    logsing.classList.remove("active");
    account.classList.remove("active");
  }

  // Check if the hamburger menu is open and close it
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
