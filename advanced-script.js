// ============================================
// ADVANCED PORTFOLIO INTERACTIONS & EFFECTS
// ============================================

console.log('🚀 Advanced Portfolio v2.0 Loaded');

// ============================================
// MOUSE TRACKING & INTERACTIVE EFFECTS
// ============================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Update CSS variables for card lighting effects
  document.querySelectorAll('.project-card, .publication-card, .course-card, .game-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(Math.pow(mouseX - cardX, 2) + Math.pow(mouseY - cardY, 2));
    const maxDistance = 300;
    
    if (distance < maxDistance) {
      const angle = Math.atan2(mouseY - cardY, mouseX - cardX);
      const x = Math.cos(angle) * (maxDistance - distance);
      const y = Math.sin(angle) * (maxDistance - distance);
      
      card.style.setProperty('--mouse-x', `${50 + (x / maxDistance) * 50}%`);
      card.style.setProperty('--mouse-y', `${50 + (y / maxDistance) * 50}%`);
    }
  });
});

// ============================================
// PARTICLES & FLOATING ELEMENTS
// ============================================

function createParticles() {
  const particleContainer = document.getElementById('particle-container');
  
  if (!particleContainer) {
    const container = document.createElement('div');
    container.id = 'particle-container';
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    `;
    document.body.insertBefore(container, document.body.firstChild);
  }

  // Only create particles on desktop
  if (window.innerWidth > 768) {
    for (let i = 0; i < 5; i++) {
      createFloatingParticle();
    }
  }
}

function createFloatingParticle() {
  const container = document.getElementById('particle-container');
  const particle = document.createElement('div');
  
  const size = Math.random() * 4 + 2;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const duration = Math.random() * 20 + 15;
  const delay = Math.random() * 5;
  
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background: rgba(0, 217, 255, ${Math.random() * 0.5 + 0.3});
    border-radius: 50%;
    left: ${x}px;
    top: ${y}px;
    box-shadow: 0 0 ${size * 2}px rgba(0, 217, 255, 0.5);
    animation: floatParticle ${duration}s linear ${delay}s infinite;
    pointer-events: none;
  `;
  
  container.appendChild(particle);
}

// Add floating particle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes floatParticle {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: translate(${Math.random() * 200 - 100}px, -${window.innerHeight + 100}px) scale(0);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize particles on page load
document.addEventListener('DOMContentLoaded', createParticles);

// ============================================
// SMOOTH SCROLL & SCROLL REVEAL ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-reveal');
      entry.target.style.animation = `revealScroll 0.6s ease forwards`;
      entry.target.style.animationDelay = `${entries.indexOf(entry) * 0.1}s`;
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all content cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.featured-card, .stat-card, .project-card, .publication-card, .course-card, .game-card, .interest-card, .outcome-card, .research-area, .timeline-item, .milestone').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    scrollObserver.observe(element);
  });
});

// ============================================
// DYNAMIC GRADIENT BACKGROUND
// ============================================

let gradientAngle = 0;

function updateGradientBackground() {
  const bgAnimation = document.querySelector('.bg-animation');
  if (bgAnimation) {
    gradientAngle += 0.3;
    // Subtle dynamic effect without overwhelming performance
    if (gradientAngle % 360 === 0) {
      bgAnimation.style.filter = `hue-rotate(${Math.random() * 5}deg)`;
    }
  }
}

// Run gradient update periodically
setInterval(updateGradientBackground, 50);

// ============================================
// ENHANCED COUNTER ANIMATION FOR STATS
// ============================================

function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        const finalValue = entry.target.textContent.trim();
        
        if (finalValue === '∞') {
          entry.target.innerHTML = '∞';
          entry.target.dataset.counted = 'true';
          return;
        }
        
        const numericValue = parseInt(finalValue);
        if (!isNaN(numericValue)) {
          let currentValue = 0;
          const increment = Math.max(1, Math.floor(numericValue / 30));
          const duration = 30;
          
          const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
              entry.target.textContent = numericValue;
              entry.target.dataset.counted = 'true';
              clearInterval(counter);
            } else {
              entry.target.textContent = currentValue;
            }
          }, duration);
        }
        
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
  });
}

document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// ENHANCED FORM INTERACTIONS
// ============================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const inputs = contactForm.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    // Add focus indicator
    input.addEventListener('focus', function() {
      this.parentElement?.style.setProperty('--focus-color', 'var(--accent-cyan)');
      this.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.4), inset 0 0 20px rgba(0, 217, 255, 0.08)';
    });
    
    input.addEventListener('blur', function() {
      this.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.05)';
    });
  });
  
  contactForm.addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.style.animation = 'pulse 0.6s ease';
      setTimeout(() => {
        submitBtn.style.animation = '';
      }, 600);
    }
  });
}

// ============================================
// DYNAMIC TEXT EFFECTS
// ============================================

function addGlitchEffect(element) {
  if (!element.classList.contains('has-glitch')) {
    element.classList.add('has-glitch');
    
    const originalText = element.textContent;
    
    element.addEventListener('mouseenter', function() {
      let current = 0;
      const chars = 'ｦｩｪｫｬｭｮｯｰ ｱｲｳｴｵｶｷｸｹｺ ｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾘﾙﾚﾚﾜﾜﾞﾟ';
      
      const glitchInterval = setInterval(() => {
        element.textContent = originalText
          .split('')
          .map((char, index) => {
            if (index < current) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        
        current++;
        if (current > originalText.length) {
          clearInterval(glitchInterval);
          element.textContent = originalText;
        }
      }, 30);
    });
  }
}

// Apply glitch effect to hero title
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    addGlitchEffect(heroTitle);
  }
});

// ============================================
// CARD TILT EFFECT (3D Perspective)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const tiltableCards = document.querySelectorAll('.project-card, .publication-card, .course-card, .featured-card');
  
  tiltableCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      this.style.boxShadow = `0 25px 60px rgba(0, 217, 255, ${0.3 + (Math.abs(rotateX) + Math.abs(rotateY)) / 200})`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      this.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.1)';
    });
  });
});

// ============================================
// DYNAMIC PAGE TRANSITIONS
// ============================================

function smoothPageTransition() {
  const links = document.querySelectorAll('a[href*=".html"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.href;
      const isSamePage = href === window.location.pathname || href === window.location.href;
      
      if (!isSamePage) {
        e.preventDefault();
        document.body.style.opacity = '0.7';
        document.body.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', smoothPageTransition);

// ============================================
// ADAPTIVE ANIMATION BASED ON DEVICE
// ============================================

function setupAdaptiveAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  
  if (prefersReducedMotion) {
    document.querySelectorAll('[class*="card"]').forEach(element => {
      element.style.animation = 'none';
    });
  }
  
  if (isMobile) {
    // Reduce animations on mobile for better performance
    document.querySelectorAll('[style*="animation"]').forEach(element => {
      const animationDuration = element.style.animationDuration || '0.6s';
      const newDuration = `${parseFloat(animationDuration) * 0.7}s`;
      element.style.animationDuration = newDuration;
    });
  }
}

document.addEventListener('DOMContentLoaded', setupAdaptiveAnimations);
window.addEventListener('resize', setupAdaptiveAnimations);

// ============================================
// ENHANCED NAVIGATION EFFECTS
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow on scroll
  if (currentScroll > 50) {
    navbar?.style.boxShadow = '0 10px 40px rgba(0, 217, 255, 0.15)';
  } else {
    navbar?.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.05)';
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ============================================
// CONTACT LINK HOVER EFFECTS
// ============================================

document.querySelectorAll('.contact-link').forEach(link => {
  link.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.link-icon');
    if (icon) {
      icon.style.animation = 'bounce 0.6s ease';
    }
  });
  
  link.addEventListener('mouseleave', function() {
    const icon = this.querySelector('.link-icon');
    if (icon) {
      icon.style.animation = '';
    }
  });
});

// Add bounce animation
const bounceStyle = document.createElement('style');
bounceStyle.textContent = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;
document.head.appendChild(bounceStyle);

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENTS
// ============================================

let currentFocusIndex = 0;
const focusableElements = [];

function setupKeyboardNav() {
  focusableElements.length = 0;
  document.querySelectorAll('a, button, input, textarea').forEach(element => {
    if (element.offsetParent !== null) { // Only visible elements
      focusableElements.push(element);
    }
  });
}

document.addEventListener('DOMContentLoaded', setupKeyboardNav);
window.addEventListener('resize', setupKeyboardNav);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    
    if (e.shiftKey) {
      currentFocusIndex--;
    } else {
      currentFocusIndex++;
    }
    
    currentFocusIndex = (currentFocusIndex + focusableElements.length) % focusableElements.length;
    focusableElements[currentFocusIndex].focus();
  }
});

// ============================================
// DYNAMIC TITLE ANIMATION
// ============================================

function animatePageTitle() {
  const pageTitle = document.querySelector('.page-header h1');
  
  if (pageTitle) {
    const originalText = pageTitle.textContent;
    
    pageTitle.addEventListener('mouseenter', function() {
      const letters = originalText.split('');
      this.textContent = '';
      
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animation = `titleLetterBounce 0.5s ease ${index * 0.05}s`;
        this.appendChild(span);
      });
    });
    
    pageTitle.addEventListener('mouseleave', function() {
      this.textContent = originalText;
    });
  }
}

// Add letter bounce animation
const letterStyle = document.createElement('style');
letterStyle.textContent = `
  @keyframes titleLetterBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); color: var(--accent-cyan); }
  }
`;
document.head.appendChild(letterStyle);

document.addEventListener('DOMContentLoaded', animatePageTitle);

// ============================================
// LAZY LOADING IMAGES (Future-proofing)
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance && window.performance.timing) {
  window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('⚡ Page load time:', pageLoadTime + 'ms');
  });
}

// ============================================
// AMBIENT LIGHT EFFECT (Optional)
// ============================================

function createAmbientLight() {
  const ambientLight = document.createElement('div');
  ambientLight.id = 'ambient-light';
  ambientLight.style.cssText = `
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
      rgba(0, 217, 255, 0.05) 0%, 
      transparent 50%);
    pointer-events: none;
    z-index: 0;
    transition: all 0.1s ease-out;
  `;
  
  document.body.appendChild(ambientLight);
  
  // Update ambient light position on mouse move
  document.addEventListener('mousemove', (e) => {
    ambientLight.style.setProperty('--mouse-x', e.clientX + 'px');
    ambientLight.style.setProperty('--mouse-y', e.clientY + 'px');
  });
}

// Uncomment to enable ambient light effect
// document.addEventListener('DOMContentLoaded', createAmbientLight);

// ============================================
// INITIALIZATION
// ============================================

console.log('✨ All advanced features initialized');
console.log('🎨 Portfolio ready for interaction!');

// Export for external use if needed
window.portfolioAdvanced = {
  createParticles,
  animateCounters,
  setupAdaptiveAnimations,
  setupKeyboardNav
};
