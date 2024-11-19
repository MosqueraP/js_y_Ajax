// Función que se ejecuta al cargar la página para rellenar el cuadro de texto con la URL actual
document.addEventListener("DOMContentLoaded", function () {
    const urlInput = document.getElementById('urlInput');
    urlInput.value = window.location.href; // Asignar la URL de la página actual
  });
  
  // Función para manejar la petición AJAX
  function fetchContent() {
    const url = document.getElementById('urlInput').value; // Obtener la URL ingresada
    const contentArea = document.getElementById('contentArea');
    const requestState = document.getElementById('requestState');
    const responseHeaders = document.getElementById('responseHeaders');
    const responseCode = document.getElementById('responseCode');
  
    // Crear una nueva instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();
  
    // Actualizar el estado de la petición
    xhr.onreadystatechange = function () {
      switch (xhr.readyState) {
        case 0:
          requestState.textContent = 'No iniciada';
          break;
        case 1:
          requestState.textContent = 'Cargando...';
          break;
        case 2:
          requestState.textContent = 'Cabeceras recibidas';
          break;
        case 3:
          requestState.textContent = 'Descargando contenido...';
          break;
        case 4:
          requestState.textContent = 'Completada';
          if (xhr.status >= 200 && xhr.status < 300) {
            // Mostrar el contenido de la respuesta
            contentArea.textContent = xhr.responseText;
  
            // Mostrar las cabeceras HTTP
            responseHeaders.textContent = xhr.getAllResponseHeaders();
  
            // Mostrar el código de estado
            responseCode.textContent = `Código: ${xhr.status} - ${xhr.statusText}`;
          } else {
            // Manejo de errores
            contentArea.textContent = 'Error al cargar la página.';
            responseHeaders.textContent = '(No hay cabeceras disponibles)';
            responseCode.textContent = `Código: ${xhr.status} - ${xhr.statusText}`;
          }
          break;
      }
    };
  
    // Abrir la petición
    xhr.open('GET', url, true);
  
    // Enviar la petición
    xhr.send();
  }
  