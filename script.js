const productosData = [
    { nombre: "iPhone 16 Pro", precio: "1.500.000", img: "iphone16.jpg" },
    { nombre: "iPhone 16", precio: "1.200.000", img: "iphone16_base.jpg" }
];

const container = document.querySelector('.productos');

productosData.forEach(p => {
    container.innerHTML += `
        <div class="product-card">
            <img src="${p.img}" alt="${p.nombre}">
            <h4>${p.nombre}</h4>
            <p>Desde $${p.precio}</p>
            <a href="https://wa.me/549XXXXXXXXXX?text=Hola! Quiero consultar por el ${p.nombre}" 
               class="btn-wpp" target="_blank">Consultar por WhatsApp</a>
        </div>
    `;
});
