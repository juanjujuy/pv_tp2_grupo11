const inputTexto = document.getElementById("textoUsuario");
const parrafoMostrado = document.getElementById("textoMostrado");

inputTexto.addEventListener("input", () => {
  parrafoMostrado.textContent = inputTexto.value || "Tu texto aparecerá aquí...";
});
