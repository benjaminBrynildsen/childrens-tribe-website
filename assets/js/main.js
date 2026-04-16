(function () {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });
  }

  document.querySelectorAll('form.tour-form[action*="docs.google.com/forms"]').forEach((form) => {
    let submitted = false;
    form.addEventListener('submit', () => { submitted = true; });
    const iframe = document.querySelector(`iframe[name="${form.target}"]`);
    if (iframe) {
      iframe.addEventListener('load', () => {
        if (!submitted) return;
        const msg = form.querySelector('.form-msg');
        if (msg) msg.textContent = form.dataset.thankYou || 'Thanks — your message was sent.';
        form.reset();
        submitted = false;
      });
    }
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.program-card, .approach-card, .steps li, .pillar-list li, .tuition-card').forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
})();
