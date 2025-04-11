/*Crear un array denominado edades con al menos 8 edades distintas.
Recorrer el array y obtener el promedio de las edades del array.*/
let edades = [20, 25, 30, 22, 28, 27, 19, 24];

let Suma = 0;
for (let i = 0; i < edades.length; i++) {
    Suma += edades[i];
  }
  
  let promedio = Suma / edades.length;
  
  console.log("Edades:", edades);
  console.log("Promedio de edades:", promedio);