const calcularConsumo = (km, litros) => {
    if (isNaN(km) || isNaN(litros)) {
      alert("Ambos valores deben ser números válidos.");
      return;
    }
  
    if (km <= 0) {
      alert("Los kilómetros deben ser mayores a cero.");
      return;
    }
  
    const consumo = litros / km;
    alert(`El consumo por kilómetro es: ${consumo.toFixed(2)} litros/km`);
  };
  
  const kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
  const litrosConsumidos = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));
  
  calcularConsumo(kilometros, litrosConsumidos);
