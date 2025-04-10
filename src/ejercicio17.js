/*17. Escribir una función llamada contarLetraA que reciba un string y retorne el número de
veces que aparece la letra "a".
Lamas Juan Eduardo
*/

//funcion para contar la letra "a"
const contarLetraA = (cadena) => {
    let contador=0;
    for (let i=0;i<cadena.length;i++) {
        if(cadena[i]==='a')
            contador++;
    }
    return contador;
}

//Declaracion de Variables
let texto ="Programacion Visual";

//LLamada a la funcion
console.log("Cantidad de veces que aparece la letra 'a': "+contarLetraA(texto));