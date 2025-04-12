const radio = 7.5;
const calcularArea = (r) => {
    const area = Math.PI * r * r;
    console.log(`El area del circulo con radio ${r} es: ${area.toFixed(2)}`);
};
calcularArea(radio);