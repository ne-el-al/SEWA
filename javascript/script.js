const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logsing = document.querySelector(".logsing-menu");
const account = document.querySelector(".account");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

account.addEventListener("click", () => {
  account.classList.toggle("active");
  logsing.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
  
);
