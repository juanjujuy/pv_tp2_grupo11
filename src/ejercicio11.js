const calcularConsumo = (km, litros) => {
    const consumo = litros / km;
    alert(`El consumo de combustible es de ${consumo.toFixed(2)} litros por kilómetro.`);
}

const kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
const litrosConsumidos = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));

calcularConsumo(kilometros, litrosConsumidos);
