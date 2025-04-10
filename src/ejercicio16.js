/*Escribir una función llamada sumarRango que reciba dos argumentos numéricos
enteros: número inicial y número final. La función debe retornar la suma de los números
en ese rango (incluyéndolos).
El número inicial debe ser menor o igual que el número final.*/

//funcion sumarRango
const sumarRango = (numero1,numero2) => {
    let resultado=0;
    for (let i=numero1; i<=numero2;i++) {
        resultado=resultado+i;
    }
    return resultado;
}

//Declaracion de variables
let numero1=9;
let numero2=12;

if(!Number.isInteger(numero1) || !Number.isInteger(numero2)) {
    console.log("Los valores deben ser numeros enteros");
} else {
    if (numero1>numero2) {
    console.log("El primer numero debe ser menor o igual al segundo");
        } else {
        console.log("La suma de los numeros del "+numero1+" hasta el "+numero2+" es "+sumarRango(numero1,numero2));
    }
}