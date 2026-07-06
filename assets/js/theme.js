// ── Theme Toggle ──
(function() {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  const isDark = saved === 'dark';

  function applyTheme(dark) {
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.querySelectorAll('.checkbox[id^="themeCheckbox"]').forEach(cb => {
      cb.checked = dark;
    });
    // Update mobile theme icon and label
    var icon = document.getElementById('themeIcon');
    var label = document.getElementById('themeLabel');
    if (icon) { icon.dataset.icon = dark ? 'moon' : 'sun'; }
    if (label) { label.textContent = dark ? 'โหมดมืด' : 'โหมดสว่าง'; }
    if (typeof loadIcons === 'function') loadIcons();
  }

  // Apply saved theme
  applyTheme(isDark);

  // Listen on both checkboxes
  document.addEventListener('change', function(e) {
    if (e.target.id === 'themeCheckbox' || e.target.id === 'themeCheckboxMobile') {
      applyTheme(e.target.checked);
    }
  });
})();

// ── Init ──
document.addEventListener('DOMContentLoaded', function() {
  loadIcons();

  // Hamburger menu toggle
  var hamburger = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });
    // close on link click
    mobileMenu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
      });
    });
  }
});
