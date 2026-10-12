// Menu bar turns dark once you scroll down, like Google Sites.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function update() { header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
