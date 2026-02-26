/* ═══════════════════════════════════════════════════════════════
   VICHO STUDIO - MAIN SCRIPTS
   Shared functionality across all pages
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────── */
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('vs-theme') || 'light';

// Set initial theme
setTheme(savedTheme);

// Toggle theme on button click
themeBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('vs-theme', theme);
  themeBtn.textContent = theme === 'light' ? '● Dark' : '○ Light';
}

/* ─────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────── */
const cursorDot = document.getElementById('cur-dot');
const cursorRing = document.getElementById('cur-ring');
let mouseX = -100;
let mouseY = -100;
let ringX = -100;
let ringY = -100;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

// Expand cursor ring on hover over interactive elements
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('big'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('big'));
});

// Smooth follow animation for cursor ring
(function animateCursor() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateCursor);
})();

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.07 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
