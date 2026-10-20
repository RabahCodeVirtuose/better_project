// Menu mobile : tout reste visible si JavaScript est désactivé.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 640px)');
function updateMenu() {
  menuButton.hidden = !mobile.matches;
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.toggle('mobile-closed', mobile.matches);
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('mobile-closed', !open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', updateMenu));
mobile.addEventListener('change', updateMenu);
updateMenu();

// Galerie manuelle, sans défilement automatique.
const slides = [
  {src: 'assets/voiture-volante.webp', alt: 'Voiture dans les airs'},
  {src: 'assets/sport-bleue.webp', alt: 'Voiture sportive bleue'},
  {src: 'assets/sport-noire.webp', alt: 'Voiture sportive noire'}
];
let current = 0;
function showSlide(offset) {
  current = (current + offset + slides.length) % slides.length;
  const image = document.querySelector('#carousel-image');
  image.src = slides[current].src;
  image.alt = slides[current].alt;
  document.querySelector('#carousel-caption').textContent = `${slides[current].alt} — ${current + 1} / ${slides.length}`;
}
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
previous.hidden = false;
next.hidden = false;
previous.addEventListener('click', () => showSlide(-1));
next.addEventListener('click', () => showSlide(1));
