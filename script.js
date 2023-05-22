const headerBtn = document.querySelector(".header__burger-btn"),
  menu = document.querySelector(".menu"),
  mobileHeader = document.querySelector(".mobile__header");

headerBtn.addEventListener("click", () => {
  mobileHeader.classList.toggle("open");
});
