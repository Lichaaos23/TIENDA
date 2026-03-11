// Ejemplo simplificado para tu script.js
const productos = [
    { nombre: "iPhone 16", precio: "1.500.000" },
    // ... más productos
];

const contenedor = document.querySelector('.productos');

productos.forEach(p => {
    contenedor.innerHTML += `
        <div class="card">
            <h3>${p.nombre}</h3>
            <p>Desde $${p.precio}</p>
            <a href="https://wa.me/549XXXXXXXXXX?text=Hola%20quiero%20consultar%20por%20el%20${p.nombre}" 
               class="btn-whatsapp" target="_blank">Consultar por WhatsApp</a>
        </div>
    `;
});
