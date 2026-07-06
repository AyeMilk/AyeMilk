// Mobile sheet-index toggle
const menuBtn = document.getElementById('mobile-menu');
const navMenu = document.getElementById('sheet-nav');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    menuBtn.classList.toggle('is-active', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      menuBtn.classList.remove('is-active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// RFI modal (contact)
const contactModal = document.getElementById('contact-modal');
const contactModalClose = document.getElementById('contact-modal-close');

function openContactModal() {
  contactModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  contactModalClose.focus();
}

function closeContactModal() {
  contactModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

document.querySelectorAll('#contact-btn, .rfi-open').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
  });
});

if (contactModalClose) {
  contactModalClose.addEventListener('click', closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeContactModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (navMenu) {
      navMenu.classList.remove('is-open');
      if (menuBtn) {
        menuBtn.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    }
    if (contactModal) closeContactModal();
  }
});
