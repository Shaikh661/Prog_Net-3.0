// Navigation menu for smaller screens
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  });
});

// Reveal elements as they enter the viewport
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Subtle custom cursor on desktop
const cursor = document.querySelector(".cursor");
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (finePointer) {
  window.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  document.querySelectorAll("a, button, .lab-card").forEach((element) => {
    element.addEventListener("mouseenter", () => cursor.classList.add("active"));
    element.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });
} else {
  cursor.remove();
}

// Tiny interactive response in the playground
const lab = document.querySelector(".lab");
lab.addEventListener("pointermove", (event) => {
  const bounds = lab.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  document.querySelectorAll(".lab-card").forEach((card, index) => {
    const strength = (index + 1) * 5;
    card.style.translate = `${x * strength}px ${y * strength}px`;
  });
});
lab.addEventListener("pointerleave", () => {
  document.querySelectorAll(".lab-card").forEach((card) => {
    card.style.translate = "0 0";
  });
});

// Update the year automatically
const year = new Date().getFullYear();
document.querySelectorAll(".footer").forEach((footer) => {
  footer.innerHTML = footer.innerHTML.replace("© 2026", `© ${year}`);
});
