const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

const calcularMayor = (n1, n2) => {
  if (isNaN(n1) || isNaN(n2)) {
    alert("Ambos valores deben ser números válidos.");
    return;
  }

  if (n1 > n2) {
    alert(`${n1} es mayor que ${n2}`);
  } else if (n2 > n1) {
    alert(`${n2} es mayor que ${n1}`);
  } else {
    alert(`${n1} y ${n2} son iguales`);
  }
};

calcularMayor(numero1, numero2);
