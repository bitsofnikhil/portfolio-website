/* ===========================
   NIKHIL KUMAWAT — PORTFOLIO
   script.js
   =========================== */

document.addEventListener("DOMContentLoaded", () => {

  // ── Smooth scroll for anchor links ───────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Scroll-triggered fade-in ──────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  const animTargets = [
    '.project-card',
    '.exp-item',
    '.cert-item',
    '.achievement-card',
    '.edu-card',
    '.skill-chip',
    '.contact-link',
  ];

  document.querySelectorAll(animTargets.join(',')).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${(i % 6) * 60}ms, transform 0.5s ease ${(i % 6) * 60}ms`;
    observer.observe(el);
  });

  // ── Nav shadow on scroll ──────────────────────────
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 30px rgba(0,0,0,0.4)'
      : 'none';
  });

});
