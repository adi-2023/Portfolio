const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});



    document.addEventListener("DOMContentLoaded", function() {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.hero', { delay: 200, duration: 2500, origin: 'top', distance: '50px' });
        ScrollReveal().reveal('.about', { delay: 300, duration: 2500, origin: 'left', distance: '50px' });
        ScrollReveal().reveal('.projects', { delay: 400, duration: 2500, origin: 'bottom', distance: '50px' });
        ScrollReveal().reveal('.contact', { delay: 500, duration: 2500, origin: 'right', distance: '50px' });
    });

  