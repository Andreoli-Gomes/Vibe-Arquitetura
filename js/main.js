window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const scrollProgress = Math.min(window.scrollY / 50, 1);
            const opacity = scrollProgress * 0.96;
            
            // Background color transition
            header.style.backgroundColor = `rgba(58, 34, 19, ${opacity})`;
            
            // Backdrop filter and border only appear after 50px scroll
            if (window.scrollY >= 50) {
                header.style.backdropFilter = 'blur(10px)';
                header.style.borderBottom = `1px solid rgba(201, 104, 72, 0.18)`;
            } else {
                header.style.backdropFilter = 'none';
                header.style.borderBottom = 'none';
            }
        });
// Burger Menu Toggle
const burgerMenu = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('header');
const navLinks = navMenu.querySelectorAll('a');

// Toggle menu on burger click
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    header.classList.toggle('menu-open');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        header.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickInsideBurger = burgerMenu.contains(event.target);
    
    if (!isClickInsideNav && !isClickInsideBurger && navMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        header.classList.remove('menu-open');
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target;
        // Find all cascade items anywhere inside this entire section
        const items = container.querySelectorAll('.cascade-item');
        
        items.forEach((item, index) => {
          item.style.setProperty('--i', index);
          item.classList.add('is-visible');
        });
        
        observer.unobserve(container); 
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px 50px 0px"
  });

  // Target all <section> elements, plus any global wrappers that sit outside sections
  const sections = document.querySelectorAll('section, .carousel-container');
  sections.forEach((section) => {
    observer.observe(section);
  });
});