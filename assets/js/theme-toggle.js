(function () {
  var STORAGE_KEY = 'preferred-theme';
  var DEFAULT = 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  var btn = document.getElementById('theme-toggle');
  if (btn) {
    applyTheme(localStorage.getItem(STORAGE_KEY) || DEFAULT);
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || DEFAULT;
      var next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
})();