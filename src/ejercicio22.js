const entrada = document.getElementById('entradaTexto');
const textoMostrado = document.getElementById('textoMostrado');

entrada.addEventListener('input', function () {
const texto = entrada.value;

textoMostrado.textContent = texto;

if (texto.length >= 20) {
    textoMostrado.style.backgroundColor = '#ffd5d5'; 
} else {
    textoMostrado.style.backgroundColor = '#ffffff'; 
}
});


