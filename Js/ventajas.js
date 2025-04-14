// Seleccionar la sección y los elementos de la lista
const ventajasSection = document.querySelector('#ventajas');
const ventajaItems = document.querySelectorAll('.ventaja-item');
const titulo = document.querySelector('#ventajas h2');

// Función para verificar si la sección está en vista
const checkIfInView = () => {
  const sectionTop = ventajasSection.getBoundingClientRect().top;
  const sectionBottom = ventajasSection.getBoundingClientRect().bottom;

  // Cuando la sección está parcialmente en vista
  if (sectionTop < window.innerHeight && sectionBottom > 0) {
    titulo.classList.add('appear'); // Aparece el título
    ventajaItems.forEach((item, index) => {
      item.classList.add('appear'); // Aparece cada ítem con un pequeño delay
    });
  }
};

// Detectar el scroll
window.addEventListener('scroll', checkIfInView);
checkIfInView(); // También se ejecuta al cargar la página
