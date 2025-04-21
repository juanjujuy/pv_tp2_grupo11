const paisSelect = document.getElementById("pais");
const capitalSelect = document.getElementById("capital");

const paisesCapitales = {
  argentina: "Buenos Aires",
  brasil: "Brasilia",
  mexico: "Ciudad de México",
  colombia: "Bogotá",
  chile: "Santiago",
  peru: "Lima"
};

paisSelect.addEventListener("change", () => {
  const paisSeleccionado = paisSelect.value;

  if (paisSeleccionado) {
    const capital = paisesCapitales[paisSeleccionado];
    
    // Limpiar select anterior
    capitalSelect.innerHTML = "";

    // Insertar la capital correspondiente
    const opcion = document.createElement("option");
    opcion.value = capital;
    opcion.textContent = capital;
    capitalSelect.appendChild(opcion);

    capitalSelect.disabled = false;

    console.log(`País: ${paisSeleccionado.charAt(0).toUpperCase() + paisSeleccionado.slice(1)}, Capital: ${capital}`);
  } else {
    capitalSelect.innerHTML = '<option value="">-- Seleccionar capital --</option>';
    capitalSelect.disabled = true;
  }
});
