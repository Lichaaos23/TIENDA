// REEMPLAZA estos valores con los que están en tu panel de Supabase (Settings -> API)
const SUPABASE_URL = 'AQUÍ_VA_TU_URL';
const SUPABASE_KEY = 'AQUÍ_VA_TU_ANON_KEY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function cargarProductos() {
    const contenedor = document.getElementById('lista-iphones');
    
    // Consulta a la tabla que creamos en Supabase
    const { data, error } = await client.from('productos_iphone').select('*');
    
    if (error) {
        contenedor.innerHTML = 'Error al conectar con la base de datos.';
        console.error(error);
        return;
    }

    // Dibujamos las tarjetas
    contenedor.innerHTML = data.map(p => `
        <div class="producto-card">
            <h3>${p.modelo}</h3>
            <p>Estado: ${p.estado} | Batería: ${p.salud_bateria}%</p>
            <p><strong>Precio: $${p.precio_contado}</strong></p>
        </div>
    `).join('');
}

cargarProductos();
