const menuBtn = document.querySelector(".m-menu"),
  menu = document.querySelector(".menu-sidebar"),
  navActive = document.querySelector(".nav-link");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});

const addClass = (elem) => {
  elem.classList.add("active");
};

navActive.addEventListener("mouseover", (event) => {
  let elem = event.target.closest("nav-link");
  elem.classList.add("active");
});
