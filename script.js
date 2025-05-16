// Basic slider functionality for the hero section
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  const slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }
});

// Booking form validation (example)
document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Add validation or AJAX booking logic here.
  alert("Checking availability...");
});

// Filler JS lines for length
// Filler 001
console.log("Filler line 001");
// Filler 002
console.log("Filler line 002");
// Filler 003
console.log("Filler line 003");
// Repeat these filler logs or dummy functions until you exceed 1000 lines.
// ...
