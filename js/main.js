// Half-Life 2 Inspired Interaction System
document.addEventListener('DOMContentLoaded', function() {
  initializeMenuInteractions();
  initializeScrollEffects();
  initializeParticleEffects();
});

// Initialize Menu Interactions (Bottom-left menu only)
function initializeMenuInteractions() {
  const menuLinks = document.querySelectorAll('.menu-link');
  
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Add click feedback
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = '';
      }, 10);
      
      console.log('Navigating to: ' + this.textContent);
    });
  });
  
  // Add hover sound effect (visual)
  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// Initialize Scroll Effects
function initializeScrollEffects() {
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const grid = document.querySelector('.background-grid');
    if (grid) {
      grid.style.backgroundPosition = scrolled * 0.5 + 'px ' + scrolled * 0.5 + 'px';
    }
  });
}

// Initialize Particle Effects
function initializeParticleEffects() {
  const elements = document.querySelectorAll('.element');
  
  elements.forEach((element, index) => {
    element.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 20px rgba(0, 255, 136, 1)';
      this.style.transform = 'scale(2)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.8)';
      this.style.transform = 'scale(1)';
    });
  });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    console.log('Game paused');
  }
});

// Create ambient sound effect (visual feedback)
function playAmbientSound() {
  // Visual feedback instead of actual sound
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.animation = 'breathe 0.5s ease-in-out';
  }
}
// Initialize on load
setTimeout(() => {
  console.log('%cArneb Lab initialized', 'color: #00ff88; font-size: 16px; text-shadow: 0 0 10px rgba(0, 255, 136, 0.8)');
}, 500);