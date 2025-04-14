document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.preventDefault();
      const link = this.getAttribute('href');
      window.open(link, '_blank');
    });
  });
  