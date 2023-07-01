function validarFormulario(event) {
    var nombreInput = document.getElementById("nombreapellido");
    var nombre = nombreInput.value;
    var maxLength = parseInt(nombreInput.getAttribute("maxlength"));

    if (nombre.length > maxLength) {
      event.preventDefault(); // Evitar el envío del formulario
      alert("El nombre debe tener como máximo " + maxLength + " caracteres.");
    }
  }