document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll progress bar
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';

    // Show/hide back-to-top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      if (scrollTop > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    }
  });

  // Hamburger menu toggle enhancement (already basic toggle in HTML)
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.navbar nav');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Back to top button functionality
  const backToTop = document.createElement('button');
  backToTop.id = 'back-to-top';
  backToTop.title = 'Voltar ao topo';
  backToTop.innerHTML = '↑';
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animate hero sections on page load
  const heroes = document.querySelectorAll('.hero');
  heroes.forEach(hero => {
    setTimeout(() => {
      hero.classList.add('visible');
    }, 100);
  });
});
