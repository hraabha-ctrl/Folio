/* =========================================================
   FOLIO CORE MODULES — script.js
   ========================================================= */

/* ---------- 1. THEME SWAP MODULE ---------- */
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙'; 
});

/* ---------- 2. TO-TOP CONTROLLER ---------- */
const toTop = document.querySelector('#to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- 3. LAYOUT INTERSECTION OBSERVER ---------- */
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08
});

revealItems.forEach((item) => {
  observer.observe(item);
});
