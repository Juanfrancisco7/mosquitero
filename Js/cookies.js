document.addEventListener('DOMContentLoaded', function() {
  // Verificar si ya se ha aceptado/rechazado las cookies
  const cookieConsent = localStorage.getItem('cookieConsent');

  if (!cookieConsent) {
      document.getElementById('cookieConsent').style.display = 'block'; // Mostrar el banner de cookies
  }

  // Botones de aceptación y rechazo
  document.getElementById('acceptCookies').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      document.getElementById('cookieConsent').style.display = 'none'; // Ocultar el banner
  });

  document.getElementById('rejectCookies').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'rejected');
      document.getElementById('cookieConsent').style.display = 'none'; // Ocultar el banner
  });

  // Abrir el panel de gestión de cookies
  document.getElementById('manageCookies').addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el comportamiento por defecto del enlace
      document.getElementById('cookieSettings').style.display = 'block'; // Mostrar el panel de configuración
  });

  // Cerrar el panel de gestión de cookies
  document.getElementById('closeSettings').addEventListener('click', function() {
      document.getElementById('cookieSettings').style.display = 'none'; // Ocultar el panel de configuración
  });

  // Guardar las preferencias de cookies
  document.getElementById('saveCookies').addEventListener('click', function() {
      const preferencesCookies = document.getElementById('preferencesCookies').checked;
      const analyticsCookies = document.getElementById('analyticsCookies').checked;

      // Aquí puedes manejar las cookies según la preferencia del usuario
      // Por ejemplo, activando cookies de análisis si están seleccionadas
      console.log("Preferencias guardadas: ", { preferencesCookies, analyticsCookies });

      // Guardar el estado de las cookies en el localStorage si lo deseas
      localStorage.setItem('cookiePreferences', JSON.stringify({
          preferencesCookies,
          analyticsCookies
      }));

      document.getElementById('cookieSettings').style.display = 'none'; // Cerrar el panel
  });
});
