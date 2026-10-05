const secciones = document.querySelectorAll("section");
const enlacesIndice = document.querySelectorAll("#indice a");


function mostrarSeccion(id) {

    secciones.forEach(seccion => {
        seccion.classList.remove("active");
    });

    const seccion = document.querySelector(id);

    if (seccion) {
        seccion.classList.add("active");
    }
}
function mostrarSeccion(id) {

    secciones.forEach(seccion => {
        seccion.classList.remove("active");
    });


    const seccion = document.querySelector(id);

    if (seccion) {
        seccion.classList.add("active");
    }

    enlacesIndice.forEach(enlace => {
        enlace.classList.remove("active");
    });

    const enlaceActivo = document.querySelector(`#indice a[href="${id}"]`);

    if (enlaceActivo) {
        enlaceActivo.classList.add("active");
    }
}


enlacesIndice.forEach(enlace => {

    enlace.addEventListener("click", (evento) => {

        evento.preventDefault();

        const id = enlace.getAttribute("href");

        mostrarSeccion(id);
    });

});

mostrarSeccion("#sobre-mi");