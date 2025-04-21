const textDiv = document.getElementById('textDiv');
const boton = document.getElementById('boton');
const newText = 'Creemos encontar los grandes tesoro por suerte pero es Dios que siempre nos bendice.';

boton.addEventListener('click', function() {
  textDiv.textContent = newText;
});
