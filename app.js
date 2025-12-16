const burger = document.getElementById("burger");
const mobileNav = document.querySelector(".mobile-nav");
const menuLinks = document.querySelectorAll(".mobile-nav a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    burger.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.classList.remove("menu-open");

    setTimeout(() => {
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  });
});

const animatedItems = document.querySelectorAll(
  ".animate, .animate-left, .animate-right, .animate-scale"
);

function animateOnScroll() {
  animatedItems.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 80;

    if (rect < triggerPoint) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
