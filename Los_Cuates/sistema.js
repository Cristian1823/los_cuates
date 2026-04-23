// ========== LOS CUATES - Sistema de Pedidos ==========

// ========== CONFIGURACIÓN ==========
// IMPORTANTE: Reemplaza esta URL con la URL de tu Google Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbzZE0Tr6bVMtgxRHxeA5miq0h4CMiSnz_ZNr6f9PpXN64OEInlQf9W2v4OKpUb84KFRzQ/exec';

// ========== PRODUCTOS DEL MENÚ ==========
const MENU = {
    antojitos: [
        { id: 'an1', nombre: 'Canasticas de Guacamole', precio: 11000 },
        { id: 'an2', nombre: 'Canasticas de Chicharrón', precio: 15000 },
        { id: 'an3', nombre: 'Dorilocos Personal', precio: 15000 },
        { id: 'an4', nombre: 'Canasticas de Camarones', precio: 17000 },
        { id: 'an5', nombre: 'Dorilocos Grande', precio: 32000 }
    ],
    tacos: [
        { id: 't1', nombre: 'Taco Al Pastor', precio: 0 },
        { id: 't2', nombre: 'Taco de Chicharrón', precio: 0 },
        { id: 't3', nombre: 'Taco de Carnitas', precio: 0 },
        { id: 't4', nombre: 'Tostada Cochinita Pibil', precio: 0 },
        { id: 't5', nombre: 'Tostada de Pollo', precio: 0 },
        { id: 'b1', nombre: 'Burrito Pequeño', precio: 22500 },
        { id: 'b2', nombre: 'Burrito Mediano', precio: 27000 },
        { id: 'b3', nombre: 'Burrito Grande', precio: 33000 }
    ],
    tortas: [
        { id: 'to1', nombre: 'Torta Ropa Vieja', precio: 25000 },
        { id: 'to2', nombre: 'Torta Cochinita BBQ', precio: 25000 },
        { id: 'q1', nombre: 'Quesadilla de Queso', precio: 14000 },
        { id: 'q2', nombre: 'Quesadilla Queso y Jamón', precio: 15000 },
        { id: 'q3', nombre: 'Quesadilla Pollo y Cochinita', precio: 18000 },
        { id: 'q4', nombre: 'Quesadilla Pollo y Champiñón', precio: 19000 },
        { id: 'q5', nombre: 'Quesadilla de Chicharrón', precio: 19000 }
    ],
    especialidades: [
        { id: 'es1', nombre: 'Elotes Locos', precio: 14000 },
        { id: 'es2', nombre: 'Esquites Verdes', precio: 17000 },
        { id: 'es3', nombre: 'Patacón de Chicharrón', precio: 17000 },
        { id: 'es4', nombre: 'Cono de Chicharrón', precio: 17000 },
        { id: 'es5', nombre: 'Mexidog', precio: 18000 },
        { id: 'es6', nombre: 'Birriaburguer', precio: 18000 },
        { id: 'es7', nombre: 'Patacón Mexicano', precio: 18000 },
        { id: 'es8', nombre: 'Cono Mexicano', precio: 18000 },
        { id: 'es9', nombre: 'La Bandida', precio: 22000 },
        { id: 'es10', nombre: 'Pizza de Birria', precio: 58000 }
    ],
    compartir: [
        { id: 'co1', nombre: 'Birriamen', precio: 20000 },
        { id: 'co2', nombre: 'Nachos Locos', precio: 24000 },
        { id: 'co3', nombre: 'Enchiladas', precio: 35000 }
    ],
    bebidas: [
        { id: 'beb1', nombre: 'Agua Sin Gas', precio: 3000 },
        { id: 'beb2', nombre: 'Coca Cola 250ml', precio: 3000 },
        { id: 'beb3', nombre: 'Coca Cola 400ml', precio: 4000 },
        { id: 'beb4', nombre: 'Quatro 400ml', precio: 4000 },
        { id: 'beb5', nombre: 'Sprite 400ml', precio: 4000 },
        { id: 'beb6', nombre: 'Tea (Durazno/Limón)', precio: 4000 },
        { id: 'beb7', nombre: 'Agua Manzana', precio: 4000 },
        { id: 'beb8', nombre: 'Soda Schweppes', precio: 4000 },
        { id: 'beb9', nombre: 'Michelada Clásica', precio: 4500 },
        { id: 'beb10', nombre: 'Poker', precio: 4000 },
        { id: 'beb11', nombre: 'Águila', precio: 4000 },
        { id: 'beb12', nombre: 'Budweiser', precio: 4000 },
        { id: 'beb13', nombre: 'Coronita', precio: 5000 },
        { id: 'beb14', nombre: 'Club Colombia', precio: 5000 },
        { id: 'beb15', nombre: 'Heineken', precio: 5000 },
        { id: 'beb16', nombre: 'Mandarina (agua)', precio: 6000 },
        { id: 'beb17', nombre: 'Limonada Natural', precio: 6000 },
        { id: 'beb18', nombre: 'Corona', precio: 7000 },
        { id: 'beb19', nombre: 'Naranja (leche)', precio: 7000 },
        { id: 'beb20', nombre: 'Jugo Verde (leche)', precio: 8000 },
        { id: 'beb21', nombre: 'Jamaica / Tamarindo / Horchata', precio: 9000 },
        { id: 'beb22', nombre: 'Soda Frutos', precio: 9000 },
        { id: 'beb23', nombre: 'Guarapo del Rinconcito', precio: 9000 },
        { id: 'beb24', nombre: 'Michelada Tamarindo', precio: 6500 },
        { id: 'beb25', nombre: 'Limonada Maracumango', precio: 10000 },
        { id: 'beb26', nombre: 'Limonada Cerezada', precio: 9000 },
        { id: 'beb27', nombre: 'Limonada Coco', precio: 12000 },
        { id: 'beb28', nombre: 'Malteada', precio: 20000 }
    ],
    cocteles: [
        { id: 'ck1', nombre: 'Daiquiri', precio: 15000 },
        { id: 'ck2', nombre: 'Cuba Libre', precio: 15000 },
        { id: 'ck3', nombre: 'Alexander', precio: 15000 },
        { id: 'ck4', nombre: 'Margarita', precio: 20000 },
        { id: 'ck5', nombre: 'Mojito', precio: 20000 },
        { id: 'ck6', nombre: 'Bull', precio: 20000 },
        { id: 'ck7', nombre: 'Caipirinha', precio: 20000 },
        { id: 'ck8', nombre: 'Vodka (Blue Lagoon / Expreso / Ruso)', precio: 20000 },
        { id: 'ck9', nombre: 'Passion Guaro', precio: 22000 },
        { id: 'ck10', nombre: 'Gin Tonic', precio: 22000 },
        { id: 'ck11', nombre: 'Los Cuates (Tequila)', precio: 25000 },
        { id: 'ck12', nombre: 'Martini', precio: 25000 },
        { id: 'ck13', nombre: 'Tegroni', precio: 26000 },
        { id: 'ck14', nombre: 'Negroni', precio: 26000 },
        { id: 'ck15', nombre: 'Old Fashioned', precio: 26000 },
        { id: 'ck16', nombre: 'Padrino', precio: 26000 }
    ],
    adiciones: [
        { id: 'ad1', nombre: 'Guacamole', precio: 4500 },
        { id: 'ad2', nombre: 'Queso', precio: 4500 },
        { id: 'ad3', nombre: 'Proteína', precio: 5500 },
        { id: 'ad4', nombre: 'Porción de Papa', precio: 5500 }
    ]
};

// Nombres de categorías para mostrar
const CATEGORIAS_NOMBRES = {
    antojitos: 'Antojitos',
    tacos: 'Tacos & Burritos',
    tortas: 'Tortas & Quesadillas',
    especialidades: 'Especialidades',
    compartir: "Pa' Compartir",
    bebidas: 'Bebidas',
    cocteles: 'Cocteles',
    adiciones: 'Adiciones'
};

// Iconos de categorías
const CATEGORIAS_ICONOS = {
    antojitos: 'fa-pepper-hot',
    tacos: 'fa-utensils',
    tortas: 'fa-bread-slice',
    especialidades: 'fa-fire',
    compartir: 'fa-bowl-food',
    bebidas: 'fa-glass-water',
    cocteles: 'fa-martini-glass',
    adiciones: 'fa-plus'
};

// ========== FUNCIONES DE API ==========

function apiConfigurada() {
    return API_URL && API_URL !== 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
}

function apiRequest(params) {
    return new Promise((resolve, reject) => {
        const callbackName = 'cuatesCallback_' + Date.now();

        window[callbackName] = function (data) {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };

        params.callback = callbackName;
        const queryString = new URLSearchParams(params).toString();
        const url = `${API_URL}?${queryString}`;

        const script = document.createElement('script');
        script.src = url;
        script.onerror = function () {
            delete window[callbackName];
            document.body.removeChild(script);
            reject(new Error('Error de conexión'));
        };

        setTimeout(() => {
            if (window[callbackName]) {
                delete window[callbackName];
                if (script.parentNode) document.body.removeChild(script);
                reject(new Error('Timeout'));
            }
        }, 10000);

        document.body.appendChild(script);
    });
}

async function apiGet(action, params = {}) {
    if (!apiConfigurada()) throw new Error('API no configurada');
    try {
        return await apiRequest({ action, ...params });
    } catch (error) {
        console.error('Error en API GET:', error);
        throw error;
    }
}

async function apiPost(data) {
    if (!apiConfigurada()) throw new Error('API no configurada');
    try {
        return await apiRequest({ payload: JSON.stringify(data) });
    } catch (error) {
        console.error('Error en API POST:', error);
        throw error;
    }
}

// ========== FUNCIONES DE PEDIDOS ==========

async function crearPedido(items, total, notas = '') {
    return await apiPost({ action: 'nuevoPedido', items, total, notas });
}

async function getPedidosPendientes() { return await apiGet('getPendientes'); }
async function getPedidosHoy()        { return await apiGet('getHoy'); }
async function getPedidosPorFecha(fecha) { return await apiGet('getPorFecha', { fecha }); }
async function getResumenDia(fecha)   { return await apiGet('getResumen', { fecha }); }
async function getResumenMes(mes)     { return await apiGet('getResumenMes', { mes }); }
async function getResumenMesCompleto(mes) { return await apiGet('getResumenMesCompleto', { mes }); }

// ========== SUELDOS ==========
async function registrarSueldo(fecha, nombre, valor, nota) {
    return await apiPost({ action: 'registrarSueldo', fecha, nombre, valor: Number(valor), nota: nota || '' });
}
async function eliminarSueldo(id) { return await apiPost({ action: 'eliminarSueldo', id }); }
async function getSueldosPorFecha(fecha) { return await apiGet('getSueldosFecha', { fecha }); }
async function getSueldosMes(mes)   { return await apiGet('getSueldosMes', { mes }); }
async function getEmpleados()       { return await apiGet('getEmpleados'); }

// ========== PRODUCTOS DESDE SHEETS ==========
async function getProductos() { return await apiGet('getProductos'); }

const CACHE_KEY_PRODUCTOS = 'cuates_productos_cache';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

function _aplicarProductosAlMenu(productos) {
    Object.keys(MENU).forEach(cat => { MENU[cat] = []; });
    const catMap = {};
    Object.keys(MENU).forEach(k => { catMap[k.toLowerCase()] = k; });
    productos.forEach(p => {
        const key = catMap[String(p.categoria).trim().toLowerCase()];
        if (key !== undefined) {
            MENU[key].push({ id: p.id, nombre: p.nombre, precio: p.precio });
        }
    });
}

async function cargarProductos(forzar = false) {
    try {
        let productos = null;
        if (!forzar) {
            const cached = localStorage.getItem(CACHE_KEY_PRODUCTOS);
            if (cached) {
                const { timestamp, data } = JSON.parse(cached);
                if ((Date.now() - timestamp) < CACHE_TTL_MS) {
                    productos = data;
                    console.log('✅ Precios desde cache local');
                }
            }
        }
        if (!productos) {
            const result = await getProductos();
            if (result.error || !result.productos || result.productos.length === 0) return false;
            productos = result.productos;
            localStorage.setItem(CACHE_KEY_PRODUCTOS, JSON.stringify({ timestamp: Date.now(), data: productos }));
            console.log('✅ Precios actualizados desde Google Sheets');
        }
        _aplicarProductosAlMenu(productos);
        return productos;
    } catch (e) {
        console.warn('⚠️ Usando precios locales:', e.message);
        return false;
    }
}

async function actualizarEstadoPedido(id, estado) {
    return await apiPost({ action: 'actualizarEstado', id, estado });
}

async function actualizarPedido(id, items, total, notas) {
    const data = { action: 'actualizarPedido', id, items, total };
    if (notas !== undefined) data.notas = notas;
    return await apiPost(data);
}

// ========== CLIENTES ==========
async function registrarCliente(nombre, telefono) {
    return await apiPost({ action: 'registrarCliente', nombre, telefono });
}
async function getCliente(id)          { return await apiGet('getCliente', { id }); }
async function buscarClientes(query)   { return await apiGet('buscarClientes', { query }); }
async function agregarSello(id)        { return await apiPost({ action: 'agregarSello', id }); }
async function quitarSello(id)         { return await apiPost({ action: 'quitarSello', id }); }
async function canjearPremio(id)       { return await apiPost({ action: 'canjearPremio', id }); }

// ========== INVENTARIO ==========
async function getInventario()         { return await apiGet('getInventario'); }
async function inicializarInventario() { return await apiPost({ action: 'inicializarInventario' }); }
async function descontarConsumo(fecha) { return await apiPost({ action: 'descontarConsumo', fecha }); }
async function reponerIngrediente(id, cantidad) {
    return await apiPost({ action: 'reponerIngrediente', id, cantidad: Number(cantidad) });
}

// ========== UTILIDADES ==========

function formatearPrecio(precio) {
    return '$' + precio.toLocaleString('es-CO');
}

function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr + 'T00:00:00');
    return fecha.toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function fechaHoy() {
    return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });
}

function mostrarMensaje(container, mensaje, tipo = 'info') {
    const div = document.createElement('div');
    div.className = `mensaje ${tipo}`;
    div.textContent = mensaje;
    container.insertBefore(div, container.firstChild);
    setTimeout(() => div.remove(), 5000);
}

function mostrarLoading(container) {
    container.innerHTML = '<div class="loading">Cargando...</div>';
}

function mostrarSinDatos(container, mensaje = 'No hay datos para mostrar') {
    container.innerHTML = `<div class="sin-datos"><i class="fas fa-inbox"></i>${mensaje}</div>`;
}

function mostrarConfigPendiente(container) {
    container.innerHTML = `
        <div class="config-warning">
            <h2><i class="fas fa-exclamation-triangle"></i> Configuración Pendiente</h2>
            <p>Para usar el sistema de pedidos, configura Google Sheets:</p>
            <ol>
                <li>Abre <strong>google-apps-script.js</strong> y sigue las instrucciones</li>
                <li>Copia el código a Google Apps Script</li>
                <li>Despliega como aplicación web y copia la URL</li>
                <li>Abre <strong>sistema.js</strong> y reemplaza <code>TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI</code></li>
                <li>Recarga esta página</li>
            </ol>
        </div>
    `;
}

function vibrar(duracion = 50) {
    if ('vibrate' in navigator) navigator.vibrate(duracion);
}

function reproducirSonido(tipo = 'success') {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const currentTime = audioContext.currentTime;
    const frecuencias = { success: [523, 659], nuevo: [440, 554] };
    const freqs = frecuencias[tipo] || frecuencias.success;
    const duracion = tipo === 'nuevo' ? 0.4 : 0.3;
    freqs.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.type = 'sine';
        oscillator.frequency.value = freq;
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(0.25, currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + duracion);
        const delay = index * 0.05;
        oscillator.start(currentTime + delay);
        oscillator.stop(currentTime + duracion + delay);
    });
}

// ========== LOCAL STORAGE BACKUP ==========

function guardarPedidoLocal(pedido) {
    const pedidosLocales = JSON.parse(localStorage.getItem('cuates_pedidos_pendientes') || '[]');
    pedidosLocales.push({ ...pedido, timestamp: Date.now(), sincronizado: false });
    localStorage.setItem('cuates_pedidos_pendientes', JSON.stringify(pedidosLocales));
}

function getPedidosLocalesNoSincronizados() {
    return JSON.parse(localStorage.getItem('cuates_pedidos_pendientes') || '[]').filter(p => !p.sincronizado);
}

function marcarPedidoLocalSincronizado(timestamp) {
    const pedidosLocales = JSON.parse(localStorage.getItem('cuates_pedidos_pendientes') || '[]');
    const index = pedidosLocales.findIndex(p => p.timestamp === timestamp);
    if (index !== -1) {
        pedidosLocales[index].sincronizado = true;
        localStorage.setItem('cuates_pedidos_pendientes', JSON.stringify(pedidosLocales));
    }
}

async function sincronizarPedidosLocales() {
    const pendientes = getPedidosLocalesNoSincronizados();
    for (const pedido of pendientes) {
        try {
            await crearPedido(pedido.items, pedido.total, pedido.notas);
            marcarPedidoLocalSincronizado(pedido.timestamp);
        } catch (error) {
            console.error('Error sincronizando pedido:', error);
        }
    }
}

// ========== EXPORTAR ==========
window.CUATES = {
    API_URL, MENU, CATEGORIAS_NOMBRES, CATEGORIAS_ICONOS, apiConfigurada,
    apiGet, apiPost,
    crearPedido, getPedidosPendientes, getPedidosHoy, getPedidosPorFecha,
    getResumenDia, getResumenMes, getResumenMesCompleto,
    getProductos, cargarProductos, actualizarEstadoPedido, actualizarPedido,
    registrarSueldo, eliminarSueldo, getSueldosPorFecha, getSueldosMes, getEmpleados,
    registrarCliente, getCliente, buscarClientes, agregarSello, quitarSello, canjearPremio,
    getInventario, inicializarInventario, descontarConsumo, reponerIngrediente,
    formatearPrecio, formatearFecha, fechaHoy,
    mostrarMensaje, mostrarLoading, mostrarSinDatos, mostrarConfigPendiente,
    vibrar, reproducirSonido,
    guardarPedidoLocal, getPedidosLocalesNoSincronizados, sincronizarPedidosLocales
};

console.log('%c🌮 Los Cuates - Sistema de Pedidos', 'color: #E67E22; font-size: 16px; font-weight: bold;');
