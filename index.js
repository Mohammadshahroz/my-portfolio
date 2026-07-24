const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ScrollReveal Animation
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  reset: false,
});

ScrollReveal().reveal(".home-content", { origin: "left" });
ScrollReveal().reveal(".home-img", { origin: "right" });
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });
ScrollReveal().reveal(".skills-container", { origin: "bottom" });
ScrollReveal().reveal(".services-container", { origin: "bottom" });
ScrollReveal().reveal(".education-container", { origin: "bottom" }); // ✅ Add this
ScrollReveal().reveal(".contact form", { origin: "bottom" });
ScrollReveal().reveal(".heading", { origin: "top" });
