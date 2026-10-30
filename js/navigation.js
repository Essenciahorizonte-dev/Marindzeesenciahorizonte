(function () {
  var btn = document.getElementById('menu-toggle');
  var nav = document.getElementById('primary-nav');
  if (!btn || !nav) return;
  var icon = btn.querySelector('use');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (icon) icon.setAttribute('href', open ? '#i-close' : '#i-menu');
  }

  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 980) setOpen(false); });
})();
