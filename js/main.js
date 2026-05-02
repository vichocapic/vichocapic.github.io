// theme toggle
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.dataset.theme = savedTheme;
  updateThemeBtn(savedTheme);
}

themeBtn?.addEventListener('click', () => {
  const current = html.dataset.theme || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.dataset.theme = next;
  localStorage.setItem('theme', next);
  updateThemeBtn(next);
});

function updateThemeBtn(theme) {
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? '◐' : '◑';
  }
}

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});
