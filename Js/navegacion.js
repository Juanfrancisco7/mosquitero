// Obtener el icono del menú y los enlaces
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Añadir un evento de clic al icono del menú
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open'); // Alterna la clase "open" para mostrar u ocultar los enlaces
});
