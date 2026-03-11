// Tus credenciales de Supabase
const SUPABASE_URL = 'https://crlqxddhdkclbtnswxqm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_FeoryBbMJIM-vqnIo7CpCw_XWUkbPNp';

// Inicialización
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function cargarProductos() {
    const contenedor = document.getElementById('lista-iphones');
    
    // Traemos los datos de la tabla que creamos al principio
    const { data, error } = await client.from('productos_iphone').select('*');
    
    if (error) {
        contenedor.innerHTML = 'Error al conectar con la base de datos: ' + error.message;
        console.error(error);
        return;
    }

    // Dibujamos las tarjetas de productos
    contenedor.innerHTML = data.map(p => `
        <div class="producto-card">
            <h3>${p.modelo}</h3>
            <p>${p.capacidad} - ${p.estado}</p>
            <p><strong>Precio: $${p.precio_contado}</strong></p>
        </div>
    `).join('');
}

// Ejecutamos la función
cargarProductos();
