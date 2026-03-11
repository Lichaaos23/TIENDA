// Configuración de Supabase (Usa aquí tu URL y tu ANON PUBLIC KEY)
const SUPABASE_URL = 'https://crlqxddhdkclbtnswxqm.supabase.co';
const SUPABASE_ANON_KEY = 'TU_ANON_PUBLIC_KEY_AQUI'; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Función para traer los productos
async function obtenerProductos() {
    let { data: productos, error } = await supabase
        .from('productos')
        .select('*');

    if (error) {
        console.error('Error al cargar productos:', error);
        return [];
    }
    return productos;
}
