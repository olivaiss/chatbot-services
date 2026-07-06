// ── Icon Loader (data embedded in icons-data.js, no XHR) ──
// ICONS_DATA object is loaded from icons-data.js
// window.loadIcons() iterates [data-icon] and injects inline SVG

// ── Language Switcher ──
function switchLang(lang) {
  document.querySelectorAll('.lang-option').forEach(el => el.classList.remove('active'));
  document.querySelector('.lang-option[data-lang="' + lang + '"]')?.classList.add('active');
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  var mobileEl = document.getElementById('currentLangMobile');
  if (mobileEl) mobileEl.textContent = lang.toUpperCase();
  localStorage.setItem('lang', lang);
}
// restore saved lang — default: th
(function() {
  const saved = localStorage.getItem('lang') || 'th';
  document.querySelectorAll('.lang-option').forEach(el => el.classList.remove('active'));
  document.querySelector('.lang-option[data-lang="' + saved + '"]')?.classList.add('active');
  document.getElementById('currentLang').textContent = saved.toUpperCase();
})();
