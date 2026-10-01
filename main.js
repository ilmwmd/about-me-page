const botonIndice = document.getElementById("botonIndice");
const indice = document.getElementById("indice");

botonIndice.addEventListener("click", () => {
    indice.classList.toggle("abierto");
});