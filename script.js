// Fade-in bij laden
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

// Smooth overgang bij navigatie
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = target;
    }, 600); // 0.6 seconde delay
  });
});

// Scroll-animatie (fade-in elementen)
const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
elements.forEach(el => observer.observe(el));