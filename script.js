// ============================================
// NAVIGATION & MENU INTERACTIONS
// ============================================

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when nav link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
        navMenu?.classList.remove('active');
      }
    });
  });
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', highlightActiveNavLink);

// ============================================
// DROPDOWN MENU INTERACTIONS
// ============================================

const dropdownItems = document.querySelectorAll('.nav-dropdown');

dropdownItems.forEach(item => {
  const link = item.querySelector('.nav-link');
  
  // Close dropdown when a submenu item is clicked
  const submenuLinks = item.querySelectorAll('.dropdown-menu a');
  submenuLinks.forEach(sublink => {
    sublink.addEventListener('click', () => {
      item.blur();
    });
  });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards for fade-in animation
document.querySelectorAll('.featured-card, .stat-card, .project-card, .publication-card, .course-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// ============================================
// FORM VALIDATION
// ============================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = this.querySelector('input[name="name"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields');
      return false;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert('Please enter a valid email address');
      return false;
    }
  });
}

// ============================================
// GALLERY AUTHENTICATION & FUNCTIONALITY
// ============================================

// This will be handled in gallery.html with inline scripts
// See gallery.html for password authentication logic

// ============================================
// PARALLAX SCROLLING EFFECT
// ============================================

function handleParallax() {
  const scrollY = window.scrollY;
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  parallaxElements.forEach(element => {
    const speed = element.dataset.parallax || 0.5;
    element.style.transform = `translateY(${scrollY * speed}px)`;
  });
}

window.addEventListener('scroll', handleParallax);

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const finalValue = stat.textContent;
    
    // Skip non-numeric values
    if (finalValue === '∞') return;
    
    const numericValue = parseInt(finalValue);
    if (!isNaN(numericValue)) {
      let currentValue = 0;
      const increment = numericValue / 30;
      
      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
          stat.textContent = numericValue;
          clearInterval(counter);
        } else {
          stat.textContent = Math.ceil(currentValue);
        }
      }, 20);
    }
  });
}

// Run counter animation when stat section is visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        animateCounters();
        entry.target.dataset.animated = 'true';
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statsObserver.observe(statsSection);
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
  // Close dropdown with Escape key
  if (e.key === 'Escape') {
    navMenu?.classList.remove('active');
  }
});

// ============================================
// PRELOAD IMAGES
// ============================================

function preloadImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const src = img.src;
    if (src) {
      const tempImg = new Image();
      tempImg.src = src;
    }
  });
}

window.addEventListener('load', preloadImages);

// ============================================
// DARK MODE TOGGLE (Optional Feature)
// ============================================

// Uncomment if you want to add dark mode toggle
/*
const darkModeToggle = document.querySelector('.dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });
  
  // Load saved theme preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
}
*/

// ============================================
// PRINT OPTIMIZATION
// ============================================

window.addEventListener('beforeprint', () => {
  document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
  document.body.classList.remove('print-mode');
});

// ============================================
// ANALYTICS & LOGGING (Optional)
// ============================================

// Add your analytics code here if needed
// Example: Google Analytics, Vercel Analytics, etc.

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Get current year for copyright
function updateYear() {
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

updateYear();

// ============================================
// ERROR HANDLING & LOGGING
// ============================================

window.addEventListener('error', (event) => {
  console.error('Error:', event.error);
  // Optionally send to error tracking service
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded successfully');
  
  // Initialize all interactive features
  highlightActiveNavLink();
  preloadImages();
  updateYear();
});

// ============================================
// HERO CARD QUOTE GENERATOR
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const lines = [
    "THE A IN ML IS<br>THE SAME AS<br>THE D IN AI",
    "THE S IN CODE<br>STANDS FOR<br>SPEED",
    "THE F IN IT<br>IS FOR<br>FINISHED",
    "THE P IN DATA<br>IS FOR<br>PRIVACY",
    "THE C IN BUG<br>STANDS FOR<br>CORRECT",
    "THE R IN DEVOPS<br>STANDS FOR<br>RELAX",
    "THE E IN CSS<br>IS FOR<br>EASY",
    "THE Q IN SQL<br>IS FOR<br>QUICK",
    "THE U IN BASH<br>STANDS FOR<br>UNDO",
    "THE T IN CLOUD<br>IS FOR<br>TANGIBLE"
  ];

  const card = document.getElementById('quoteCard');
  const quoteText = document.getElementById('quoteText');
  const diceOverlay = document.getElementById('diceOverlay');

  if (card && quoteText && diceOverlay) {
    card.addEventListener('click', () => {
      // Hide text, show spinning dice
      quoteText.style.opacity = '0';
      diceOverlay.style.display = 'block';

      setTimeout(() => {
        // Pick a random line that isn't the current one
        let randomLine;
        do {
          randomLine = lines[Math.floor(Math.random() * lines.length)];
        } while (randomLine === quoteText.innerHTML);

        // Swap text, hide dice, show text
        quoteText.innerHTML = randomLine;
        diceOverlay.style.display = 'none';
        quoteText.style.opacity = '1';
      }, 400); // 400 milliseconds of dice rolling
    });
  }
});

// ============================================
// EXPORT FOR REUSE
// ============================================

// Make functions available globally if needed
window.portfolioUtils = {
  debounce,
  updateYear,
  highlightActiveNavLink
};

// ============================================
// BACKGROUND BLUR SLIDER CONTROL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const bgLayer = document.getElementById('bgImageLayer');
  const slider = document.getElementById('blurSlider');
  const blurValue = document.getElementById('blurValue');
  const blurToggle = document.getElementById('blurToggle');
  const sliderContainer = document.getElementById('blurSliderContainer');

  if (slider && bgLayer) {
    slider.addEventListener('input', () => {
      const val = slider.value;
      bgLayer.style.filter = `blur(${val}px)`;
      blurValue.textContent = `${val}px`;
    });
  }

  if (blurToggle && sliderContainer) {
    blurToggle.addEventListener('click', () => {
      sliderContainer.classList.toggle('visible');
    });

    // Close slider when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.blur-control')) {
        sliderContainer.classList.remove('visible');
      }
    });
  }
});

// ============================================
// DP IMAGE CYCLER (Click to change profile pic)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const dpImage = document.getElementById('profileDp');
  if (!dpImage) return;

  const dpSources = ['images/dp1.png', 'images/dp2.png', 'images/dp3.png'];
  let currentDpIndex = 0;

  dpImage.addEventListener('click', () => {
    if (dpImage.classList.contains('switching')) return; // prevent spam

    dpImage.classList.add('switching');

    setTimeout(() => {
      currentDpIndex = (currentDpIndex + 1) % dpSources.length;
      dpImage.src = dpSources[currentDpIndex];
    }, 180); // swap at midpoint of animation

    setTimeout(() => {
      dpImage.classList.remove('switching');
    }, 450);
  });
});

// ============================================
// EQUATION CARDS FADE-IN ON SCROLL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const eqCards = document.querySelectorAll('.equation-card');
  eqCards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(25px)';
    card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
  });

  const eqObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  eqCards.forEach(card => eqObserver.observe(card));
});