// ===== HAMBURGER MENU JS =====

window.addEventListener('scroll', () => {
  const header = document.querySelector('.topsection_header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile_menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
