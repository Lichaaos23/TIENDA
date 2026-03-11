/**
 * Lógica del Buscador
 * Filtra los productos de la página en tiempo real.
 */
function buscarProducto() {
    const input = document.getElementById("buscador").value.toLowerCase();
    const productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        const titulo = producto.querySelector("h2").innerText.toLowerCase();
        
        // Si el título contiene lo que el usuario escribe, lo mostramos, si no, lo ocultamos
        if (titulo.includes(input)) {
            producto.style.display = "block"; // O "" para resetear al valor por defecto
        } else {
            producto.style.display = "none";
        }
    });
}

/**
 * Lógica del Carrusel
 * Rota automáticamente las imágenes cada 3 segundos.
 */
let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide() {
    // Quitamos la clase 'active' de todos los slides
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // Incrementamos el índice
    index++;

    // Si llegamos al final, reiniciamos el índice a 0
    if (index >= slides.length) {
        index = 0;
    }

    // Añadimos la clase 'active' al slide correspondiente
    slides[index].classList.add("active");
}

// Iniciar el carrusel cuando el documento esté listo
document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        setInterval(mostrarSlide, 3000);
    }
});
