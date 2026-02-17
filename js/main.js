 // Aumenta tamaño con el hover para dar feedback visual
  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
