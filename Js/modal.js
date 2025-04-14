document.addEventListener('DOMContentLoaded', () => {
    const openModalLink = document.getElementById('openModal');
    const modal = document.getElementById('legalModal');
    const modalClose = document.getElementById('modalClose');
  
    // Abre el modal
    if (openModalLink && modal) {
      openModalLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
      });
    }
  
    // Cierra el modal al clicar en la "X"
    if (modalClose && modal) {
      modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  
    // Cierra el modal si se hace clic fuera del contenido
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  