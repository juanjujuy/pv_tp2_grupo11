const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
      console.log(`${numero1} es mayor que ${numero2}`);
    } else if (numero2 > numero1) {
      console.log(`${numero2} es mayor que ${numero1}`);
    } else {
      console.log(`${numero1} y ${numero2} son iguales`);
    }
  }
  
  calcularMayor(15, 8);
  calcularMayor(3, 20);
  calcularMayor(7, 7);