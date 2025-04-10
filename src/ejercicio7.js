/*Declarar un array denominado nombres con al menos 6 nombres.
Obtener el nombre más largo del array nombres. 
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) 
que indica su tamaño.*/
let nombres = ["Ana", "Guillermo", "Mayra", "Pedro", "María", "Florencia"];

let nombreMasLargo = nombres[0];

for (let i = 1; i < nombres.length; i++) {
  if (nombres[i].length > nombreMasLargo.length) {
    nombreMasLargo = nombres[i];
  }
}

console.log("Nombres:", nombres);
console.log("Nombre más largo:", nombreMasLargo);
