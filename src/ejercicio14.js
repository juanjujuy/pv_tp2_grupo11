function duplicar(arreglo){
    return arreglo.map(num => num * 2);
}

let entrada = prompt ("ingresa numeros separados por comas: ");
let numeros = entrada.split(",").map(Number);
let resultados = duplicar(numeros);

console.log("Original:",numeros);
console.log("Duplicaodos:", resultados);