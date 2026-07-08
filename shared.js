/* RENKAI — shared.js | Smooth interactions & Emergent-style behaviors */

document.addEventListener('DOMContentLoaded', function () {

  // Nav scroll effect
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('up', window.scrollY > 40);
    }, { passive: true });
  }

  // Hamburger menu (mobile)
  const burger = document.getElementById('burger');
  const mobMenu = document.createElement('div'); // You can expand this if needed
  if (burger) {
    burger.addEventListener('click', () => {
      alert("Mobile menu coming in full version. Use desktop for best experience.");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Simple scroll reveal
  const reveals = document.querySelectorAll('.rv');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => {
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });

  console.log('%cRENKAI website loaded successfully ✨', 'color:#E8600A; font-weight:bold');
});