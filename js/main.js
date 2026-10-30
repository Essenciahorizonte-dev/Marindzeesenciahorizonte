(function () {
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Animação luminosa do logótipo: uma única vez por visita ao site.
  var logo = document.getElementById('logo');
  if (!logo) return;
  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var jaVista = false;
  try { jaVista = sessionStorage.getItem('marindze-logo') === '1'; } catch (e) {}
  if (reduzir || jaVista) return;

  logo.classList.add('is-playing');
  var ultima = logo.querySelector('.s3');
  ultima.addEventListener('animationend', function () {
    logo.classList.add('is-done');
    try { sessionStorage.setItem('marindze-logo', '1'); } catch (e) {}
  }, { once: true });
})();
