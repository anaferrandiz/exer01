'use strict'

const selectImg = document.querySelectorAll('.wrap__img');
const imagenes = document.querySelectorAll('.imgs');
let posicion = 0;

// Función para mostrar la imagen y animar el texto
function mostrarImagen() {
    imagenes.forEach((img, i) => {
        img.classList.remove('isVisible');
        selectImg[i].classList.remove('isActive');

        // quitar animación del texto
        const texto = img.querySelector('.texto__imgs');
        if (texto) texto.classList.remove('text-active');
    });

    // Activar imagen actual
    imagenes[posicion].classList.add('isVisible');
    selectImg[posicion].classList.add('isActive');

    // Activar animación del texto
    const texto = imagenes[posicion].querySelector('.texto__imgs');
    if (texto) {
        // Forzar reflow para que la transición se reinicie
        void texto.offsetWidth;
        texto.classList.add('text-active');
    }
}

// Eventos mouseenter
selectImg.forEach((img, i) => {
    img.addEventListener('mouseenter', () => {
        posicion = i;
        mostrarImagen();
    });

    img.addEventListener('mouseleave', () => {
        // Opcional: quitar la imagen y el texto al salir
        imagenes[i].classList.remove('isVisible');
        selectImg[i].classList.remove('isActive');
        const texto = imagenes[i].querySelector('.texto__imgs');
        if (texto) texto.classList.remove('text-active');
    });
});



