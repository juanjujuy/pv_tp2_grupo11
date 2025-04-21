let numero = prompt("ingresa un numero: ");
if (numero !== null) {
    numero = parseInt(numero);
    if (!isNaN(numero)){
        if (numero%2 ===0){
            console.log("el numero es par.");
        }
        else{
            console.log("el nuemero es impar.");
        }
    }
    else{
        console.log("esto no es un numero valido.");
    }
}
else {
    console.log("No ingresaste ningun numero.");

}
