// main.js

// ========== 动态年份 ==========
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ========== 平滑滚动 ==========
const navLinks = document.querySelectorAll("nav a[href^='#']");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// ========== 滚动进入动画 (Intersection Observer) ==========
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach((sec) => observer.observe(sec));

// ========== 夜间模式切换（可选） ==========
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  document.body.classList.add("dark");
}
