function mostrarArreglo(arreglo){
    arreglo.forEach(num =>{ 
        console.log(num);
        
    });
}
let entrada = prompt("Ingresa numeros separados por comas: ");
let numeros = entrada.split(",").map(Number);
mostrarArreglo(numeros)