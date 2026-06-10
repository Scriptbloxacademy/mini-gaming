// ============================================
// WebForge AI Lite — Generated Website
// Site: Mini gaming
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // ── Smooth scroll ──────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Scroll-triggered animations ────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll(
    '.feature-card, .pricing-card, .testimonial-card, .gallery-card, ' +
    '.blog-card, .product-card, .team-card, .game-card, .stat-item, .faq-item'
  ).forEach(el => {
    el.classList.add('animate-in');
    observer.observe(el);
  });

  // ── Navbar scroll effect ───────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.background = window.scrollY > 50
        ? 'rgba(0,0,0,0.92)'
        : 'rgba(0,0,0,0.7)';
    });
  }

  // ── Active nav on scroll ───────────────────
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (link) {
        link.style.color = scrollY >= top && scrollY < bottom
          ? 'var(--primary)'
          : '';
      }
    });
  });

  // ── Stat counter animation ─────────────────
  const statNums = document.querySelectorAll('.stat-value, .stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const num = parseFloat(text.replace(/[^0-9.]/g, ''));
        if (!isNaN(num) && num > 0) {
          let start = 0;
          const duration = 1200;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = text.replace(num.toString(), Math.floor(eased * num).toLocaleString());
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = text;
          };
          requestAnimationFrame(step);
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => counterObserver.observe(el));

  console.log('✅ Mini gaming — Built with WebForge AI Lite');
});
