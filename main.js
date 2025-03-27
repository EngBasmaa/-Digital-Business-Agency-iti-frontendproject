// dark/light mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("theme-toggle").classList.toggle("fa-moon");
  document.getElementById("theme-toggle").classList.toggle("fa-sun");
}

// navbar
window.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// swiper

let currentIndex = 0;
const homeSection = document.querySelector("#home");
const slides = homeSection.querySelectorAll(".slide");
const pagination = homeSection.querySelector(".pagination");

slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("pag-dot");
  dot.addEventListener("click", () => goToSlide(index));
  pagination.appendChild(dot);
});

const dots = document.querySelectorAll(".pag-dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);

// validation

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name.length < 3) {
      document.getElementById("nameError").textContent =
        "Name must be at least 3 characters.";
      isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Enter a valid email address.";
      isValid = false;
    }

    if (message.length < 10) {
      document.getElementById("messageError").textContent =
        "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset(); // Clear form fields after submission
    }
  });
