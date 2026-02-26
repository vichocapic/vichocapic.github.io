/* ═══════════════════════════════════════════════════════════════
   POST PAGE SCRIPTS
   Specific to blog posts (post-001.html, etc.)
   ═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   LANGUAGE TOGGLE
───────────────────────────────────────── */
function setLang(lang) {
  document.getElementById('artEs').classList.toggle('visible', lang === 'es');
  document.getElementById('artEn').classList.toggle('visible', lang === 'en');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
}
