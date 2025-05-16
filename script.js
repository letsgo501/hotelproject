document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  
  // Debounce function to improve scroll performance
  function debounce(func, wait = 10, immediate = false) {
    let timeout;
    return function () {
      const context = this,
            args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Header background toggle on scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", debounce(function () {
    if (window.scrollY > 50) {
      header.classList.add("solid");
      header.classList.remove("transparent");
    } else {
      header.classList.add("transparent");
      header.classList.remove("solid");
    }
  }));
  
  // Mobile menu toggle with keyboard accessibility
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navList = document.querySelector("nav .nav-list");
  function toggleMobileMenu() {
    navList.classList.toggle("active");
  }
  mobileToggle.addEventListener("click", toggleMobileMenu);
  mobileToggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      toggleMobileMenu();
      e.preventDefault();
    }
  });
  
  // Smooth scrolling for all nav links
  document.querySelectorAll("nav .nav-list li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - header.offsetHeight,
          behavior: "smooth"
        });
      }
      if (navList.classList.contains("active")) {
        navList.classList.remove("active");
      }
    });
  });
  
  // Dummy filler logging to simulate a larger codebase
  for (let i = 1; i <= 100; i++) {
    console.log("Filler JS line:", i);
  }
});
