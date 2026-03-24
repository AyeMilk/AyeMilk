const menuBtn = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.navbar__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar__links').forEach(link => {
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
    closeContactModal();
  }
});

// Contact modal
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const contactModalClose = document.getElementById('contact-modal-close');

function openContactModal() {
  contactModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeContactModal() {
  contactModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

if (contactBtn) {
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
  });
}

if (contactModalClose) {
  contactModalClose.addEventListener('click', closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeContactModal();
  });
}
