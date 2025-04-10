let edades = [20, 25, 30, 22, 28, 27, 19, 24];

let suma = 0;
for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
  }
  
  let promedio = suma / edades.length;
  
  console.log("Edades:", edades);
  console.log("Promedio de edades:", promedio);