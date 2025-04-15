document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.fade-in');

  const animarScroll = new IntersectionObserver((entradas, observador) => {
    entradas.forEach((entrada, index) => {
      if (entrada.isIntersecting) {
        entrada.target.style.transitionDelay = `${index * 0.2}s`;
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => animarScroll.observe(el));
});
