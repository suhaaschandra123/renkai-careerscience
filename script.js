/* ============================================================
   EMERGENT ENGINE FRAMEWORK MECHANICS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Active Multi-page Segment Observer Configuration
  const sections = document.querySelectorAll('section.stack-section, .hero');
  const navLinks = document.querySelectorAll('.nav-links a');

  const activeObserverOptions = {
    root: null,
    threshold: 0.4,
    rootMargin: "-80px 0px 0px 0px"
  };

  const activeStateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, activeObserverOptions);

  sections.forEach(section => activeStateObserver.observe(section));

  // Anchor Smooth Motion Execution
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});