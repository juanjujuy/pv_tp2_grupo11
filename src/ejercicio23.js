let nuevoTexto = document.createElement("p");
let nuevoDiv = document.getElementsByName("final")[0];
nuevoDiv.appendChild(nuevoTexto);

const eleccion = document.getElementsByName("opcion");

    for(let a=0;a<eleccion.length;a++){
        eleccion[a].addEventListener("change", function(){
        
            let lenguajeSeleccionado = eleccion[a].value;
            nuevoTexto.textContent=lenguajeSeleccionado;
            console.log(lenguajeSeleccionado);
    })
}
