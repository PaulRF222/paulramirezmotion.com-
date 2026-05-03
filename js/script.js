/* Paul Ramírez Motion — minimal interactivity */

(function () {
  'use strict';

  // Mark JS as ready so CSS can enable reveal animations.
  // If this line never runs, elements stay visible by default.
  document.documentElement.classList.add('js-ready');

  // Scroll reveal — add .reveal class to any element and it'll fade in
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  // Auto-tag sections for reveal
  document.querySelectorAll(
    '.case, .section-header, .skills, .contact-inner, .hero-meta, .reel'
  ).forEach((el) => {
    el.classList.add('reveal');
    io.observe(el);
  });

  // Smooth scroll for nav links (native smooth-scroll handles this, but
  // we add a tiny offset for the fixed nav)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 0; // nav uses mix-blend-mode, no offset needed
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth',
      });
    });
  });

  // Simple keyboard shortcut: press "C" to contact
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c' && !e.target.matches('input, textarea')) {
      const contact = document.querySelector('#contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
    }
  });
})();
