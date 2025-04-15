const calcularPromedio = (n1, n2, n3) => {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert("Todos los valores deben ser números válidos.");
      return;
    }
  
    const promedio = (n1 + n2 + n3) / 3;
    alert(`El promedio de los tres números es: ${promedio}`);
  }
  
  const num1 = parseInt(prompt("Ingrese el primer número entero:"));
  const num2 = parseInt(prompt("Ingrese el segundo número entero:"));
  const num3 = parseInt(prompt("Ingrese el tercer número entero:"));
  
  calcularPromedio(num1, num2, num3);
