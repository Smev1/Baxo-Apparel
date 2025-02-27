// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  
  // Toggle mobile menu
  menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    // Change menu icon
    const menuIcon = menuBtn.querySelector('svg');
    if (mobileMenu.classList.contains('active')) {
      menuIcon.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    } else {
      menuIcon.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    }
  });
  
  // Close mobile menu when clicking a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      
      // Reset menu icon
      const menuIcon = menuBtn.querySelector('svg');
      menuIcon.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
    });
  });
  
  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
      navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }
  
  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll('.product-overlay .btn');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const productName = this.closest('.product-overlay').querySelector('.product-title').textContent;
      alert(`${productName} has been added to your cart!`);
    });
  });
  
  // Animation on scroll
  const animateOnScroll = function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  };
  
  // Add initial visible class to hero section
  document.querySelector('#home').classList.add('visible');
  
  // Run animation check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once on load
  animateOnScroll();
});

// Shopping bag functionality
document.querySelector('.shopping-bag-btn').addEventListener('click', function() {
  alert('Shopping cart feature coming soon!');
});

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
  section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  #home {
    transition-delay: 0s;
  }
  
  #collection {
    transition-delay: 0.1s;
  }
  
  #about {
    transition-delay: 0.2s;
  }
  
  #lookbook {
    transition-delay: 0.3s;
  }
  
  #contact {
    transition-delay: 0.4s;
  }
`;
document.head.appendChild(style);