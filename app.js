const menuBtn = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.navbar__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar__links, .button').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('is-active');
    navMenu.classList.remove('active');
  });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menuBtn.classList.remove('is-active');
    navMenu.classList.remove('active');
  }
});
