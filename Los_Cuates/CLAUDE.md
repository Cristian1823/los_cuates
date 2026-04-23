# Rinconcito Los Cuates - Menú Digital y Sistema de Pedidos

## Descripción del Proyecto

Sitio web completo para **Rinconcito Los Cuates**, restaurante de comida mexicana. El proyecto incluye:

1. **Menú Digital** (`index.html`) — Carta interactiva editorial para clientes
2. **Sistema de Pedidos** (`pedidos.html`) — Toma de pedidos en punto de venta
3. **Panel de Cocina** (`cocina.html`) — Gestión de pedidos en cocina
4. **Para Pago** (`domicilio.html`) — Cobro de pedidos listos
5. **Cierre de Caja** (`cierre.html`) — Resumen de ventas + reporte mensual con gráficas y sueldos
6. **Clientes Frecuentes** (`clientes.html`) — Tarjeta de sellos (6 sellos = Taco de Birria Gratis)
7. **Inventario** (`inventario.html`) — Control de stock con deducción por consumo y reposición

## Tecnologías Utilizadas

- **HTML5 / CSS3 / JavaScript (Vanilla)**
- **Font Awesome 6.0.0** — Iconos
- **Google Fonts: Anton + Rozha One + JetBrains Mono + Inter** — Tipografía editorial
- **Google Sheets + Google Apps Script** — Base de datos / API via JSONP
- **Chart.js 4.4** — Gráficas en reporte mensual

## Estructura del Proyecto

```
Los_Cuates/
│
├── index.html              # Menú público (clientes) — estilo editorial scroll
├── style.css               # Estilos del menú público
├── script.js               # Chile icons + chips nav + scroll spy
│
├── pedidos.html            # Toma de pedidos (cajero)
├── cocina.html             # Panel de cocina (cocinero)
├── domicilio.html          # Para Pago (cobrar pedidos listos)
├── cierre.html             # Cierre de caja (administrador, PIN 1130)
├── clientes.html           # Clientes frecuentes (cajero)
├── tarjeta.html            # Tarjeta de sellos del cliente (abre desde QR)
├── inventario.html         # Control de inventario (administrador, PIN 1130)
├── sistema.js              # Lógica del sistema de pedidos (window.CUATES)
├── sistema.css             # Estilos del sistema de pedidos (compartido)
├── google-apps-script.js   # Código para copiar en Google Apps Script
│
└── images/
    ├── logo.jpeg           # Logo a color (header + watermark)
```

## URLs de Producción

| Página | URL |
|--------|-----|
| Menú público | `https://cristian1823.github.io/los_cuates/Los_Cuates/` |
| Pedidos | `https://cristian1823.github.io/los_cuates/Los_Cuates/pedidos.html` |
| Cocina | `https://cristian1823.github.io/los_cuates/Los_Cuates/cocina.html` |
| Para Pago | `https://cristian1823.github.io/los_cuates/Los_Cuates/domicilio.html` |
| Cierre | `https://cristian1823.github.io/los_cuates/Los_Cuates/cierre.html` |
| Clientes | `https://cristian1823.github.io/los_cuates/Los_Cuates/clientes.html` |
| Inventario | `https://cristian1823.github.io/los_cuates/Los_Cuates/inventario.html` |
| Tarjeta QR | `https://cristian1823.github.io/los_cuates/Los_Cuates/tarjeta.html` |

**GitHub Pages:** rama `main`, carpeta `/` (root). Deploy automático con cada `git push`.
**Repositorio:** `https://github.com/Cristian1823/los_cuates`

## API — Google Apps Script (YA CONFIGURADA)

- **URL:** `https://script.google.com/macros/s/AKfycbzZE0Tr6bVMtgxRHxeA5miq0h4CMiSnz_ZNr6f9PpXN64OEInlQf9W2v4OKpUb84KFRzQ/exec`
- **ID de implementación:** `AKfycbzZE0Tr6bVMtgxRHxeA5miq0h4CMiSnz_ZNr6f9PpXN64OEInlQf9W2v4OKpUb84KFRzQ`
- **Spreadsheet:** `https://docs.google.com/spreadsheets/d/1rcx54hxq3HXQmtLzjsRU2LGun41cUOcSl7ZKYztKdB4`
- URL ya pegada en: `sistema.js` línea 5, `clientes.html`, `tarjeta.html`

### Hojas de Google Sheets requeridas

| Hoja | Columnas |
|------|----------|
| `Pedidos` | ID \| Fecha \| Hora \| Items (JSON) \| Total \| Estado \| Notas |
| `Productos` | ID \| Nombre \| Categoria \| PrecioVenta \| Costo \| GastoOperativo \| Activo |
| `Clientes` | ID \| Nombre \| Teléfono \| Sellos \| Canjes \| FechaRegistro \| UltimoSello |
| `Ingredientes` | ID \| Nombre \| Unidad \| StockActual \| StockMinimo |
| `Sueldos` | ID \| Fecha \| Nombre \| Valor \| Nota (auto-creada) |

### Acciones disponibles (GET)

- `getPendientes` — Pedidos pendiente/preparando
- `getHoy` — Pedidos de hoy
- `getPorFecha` — Pedidos de una fecha (`fecha`)
- `getResumen` — Resumen del día (`fecha`)
- `getResumenMes` — Resumen mensual (`mes` YYYY-MM)
- `getResumenMesCompleto` — Resumen + sueldos + empleados en 1 request
- `getProductos` — Catálogo activo de Productos
- `getCliente` — Cliente por ID
- `buscarClientes` — Búsqueda por nombre o ID (`query`)
- `getInventario` — Stock actual
- `inicializarInventario` — Crea hoja Ingredientes con los 20 ingredientes base
- `getSueldosFecha` — Sueldos de una fecha
- `getSueldosMes` — Sueldos de un mes
- `getEmpleados` — Lista única de nombres de empleados

### Acciones disponibles (POST via `payload`)

- `nuevoPedido` — Crea pedido
- `actualizarEstado` — Cambia estado del pedido
- `actualizarPedido` — Edita items, total y notas
- `registrarCliente` — Registra nuevo cliente
- `agregarSello` — Suma 1 sello
- `quitarSello` — Resta 1 sello
- `canjearPremio` — Reinicia sellos y suma 1 a canjes (requiere ≥6)
- `descontarConsumo` — Descuenta ingredientes según recetas y pedidos del día
- `reponerIngrediente` — Suma stock a un ingrediente
- `registrarSueldo` — Registra pago de empleado
- `eliminarSueldo` — Elimina registro de sueldo por ID

## Namespace JavaScript

Toda la lógica del sistema vive en `window.CUATES` (sistema.js). **Nunca usar `window.GOSA`**.

- Cache de productos: `cuates_productos_cache` (localStorage, 24h TTL)
- Cache de reportes mensuales: `cuates_reporte_mes_YYYY-MM` (localStorage)
- Pedidos pendientes offline: `cuates_pedidos_pendientes` (localStorage)
- Prefijo callback JSONP: `cuatesCallback_`
- Prefijo ID de cliente: `CUATES-XXXXXX`

## Diseño — Dos Sistemas Visuales

### Menú Público (`index.html` + `style.css`)
Estilo **editorial scroll** — inspirado en menús impresos mexicanos de alta gama.

**Tipografía:**
- `Anton` — títulos de sección y nombres de productos
- `Rozha One` — display serif decorativo
- `JetBrains Mono` — precios y etiquetas
- `Inter` — cuerpo de texto

**Paleta (`style.css` `:root`):**
```css
--color-gold:       #D4800A
--color-gold-light: #F5A623
--color-gold-dark:  #C47008
--color-gold-text:  #fff
--color-gold-muted: #FAEEDA
--bg:               var(--color-gold-muted)
--ink:              #1A0A00
```

**Fondo:** gradiente amarillo-dorado fijo (`background-attachment: fixed`)
```css
linear-gradient(168deg, #FFFDE7 0%, #FAEEDA 18%, #FFE878 40%, #FFD60A 60%, #FFD60A 100%)
```

**Marca de agua:** `body::before` — logo fijo inferior derecha, `z-index: 9999`, `opacity: 0.22`, `filter: grayscale(100%)`, `mix-blend-mode: soft-light`

**Estructura del menú (9 secciones con chips nav sticky):**
1. `#antojitos` — Canasticas, Birriamen
2. `#dorilocos` — Dorilocos (sección propia, no subsección)
3. `#tacos` — `.section-inverted` (fondo `#0B0B0B`, texto `#FFD60A`)
4. `#burritos`
5. `#tortas` — Tortas + Quesadillas
6. `#especialidades`
7. `#compartir` — Pa' Compartir
8. `#bebidas`
9. `#cocteles`

**Chile icons:** JS lee `data-heat="0|1|2|3"` e inyecta SVGs. `data-heat="0"` = sin íconos.

**Chips nav:** `position: sticky; top: 0` fuera del `<header>`. Scroll spy con `IntersectionObserver` (`rootMargin: '-15% 0px -75% 0px'`). Al activar chip, usa `nav.scrollTo()` (NO `scrollIntoView`) para evitar scroll vertical.

**Zigzag productos:** `nth-of-type(even)` con `flex-direction: row-reverse` en `.menu-item`.

### Sistema Interno (`sistema.css` compartido + override por página)
Estilo **oscuro editorial** con amarillo como acento. Mismo stack tipográfico (Anton + JetBrains Mono + Inter).

**Paleta (`sistema.css` `:root`):**
```css
--gold:      #FFD60A   (acento amarillo brillante)
--gold-dim:  #D4800A
--black:     #1A0A00
--ink:       #1A0A00
--rojo:      #B91C1C
--verde:     #166534
```

**Fondo base (`sistema.css`):** gradiente amarillo-dorado suave (mismo que menú público)

**Override por página — `pedidos.html`:** fondo amarillo plano `#FFD60A` sin gradiente (más cómodo para mesero en turno). Aplicado via `<style>` inline en el `<head>`:
```css
body { background: #FFD60A !important; background-image: none !important; }
```

**Header sistema:** siempre negro `rgba(26,10,0,0.96)` con borde tricolor (rojo/dorado/verde) en `::after`.

**Panel de pedido (`.pedido-panel`):** fondo negro `rgba(26,10,0,0.92)`, texto crema, acento amarillo. Contrasta con el fondo amarillo de la página.

**Cards de productos:** fondo translúcido blanco `rgba(255,255,255,0.45)` con texto negro — legibles sobre amarillo.

## Protección con PIN

- **PIN:** `1130`
- **Páginas protegidas:** `cierre.html` e `inventario.html`

## Premio de Fidelización

- **Sellos requeridos:** 6
- **Premio:** Taco de Birria Gratis
- **Emoji de sello:** 🌮 (en `clientes.html` y `tarjeta.html`)

## Menú y Precios (COP)

### Antojitos
| Producto | Precio |
|----------|--------|
| Canastica Chica | $11,000 |
| Canastica Mediana | $15,000 |
| Canastica Grande | $17,000 |
| Birriamen | $20,000 |

### Dorilocos (sección propia)
| Producto | Precio |
|----------|--------|
| Dorilocos Chicos | $15,000 |
| Dorilocos Grandes | $32,000 |

### Tacos
Precio a consultar (varían por proteína/tipo). Se muestra "Consultar" en el menú público.

### Burritos
| Producto | Precio |
|----------|--------|
| Burrito Chico | $22,500 |
| Burrito Mediano | $27,000 |
| Burrito Grande | $33,000 |

### Tortas
| Producto | Precio |
|----------|--------|
| Torta de Birria | $25,000 |
| Torta de Pollo | $25,000 |

### Quesadillas
| Producto | Precio |
|----------|--------|
| Quesadilla Sencilla | $14,000 |
| Quesadilla con Proteína | $17,000 |
| Quesadilla Especial | $19,000 |

### Especialidades
| Producto | Precio |
|----------|--------|
| Patakón Sencillo | $17,000 |
| Patakón Especial | $18,000 |
| Cono Sencillo | $17,000 |
| Cono Especial | $18,000 |
| Elotes | $14,000 |
| Esquites | $17,000 |
| Mexidog | $18,000 |
| Birriaburguer | $18,000 |
| La Bandida | $22,000 |

### Pa' Compartir
| Producto | Precio |
|----------|--------|
| Nachos | $24,000 |
| Enchiladas | $35,000 |
| Pizza Birria | $58,000 |

### Adiciones
| Producto | Precio |
|----------|--------|
| Adición sencilla | $4,500 |
| Adición especial | $5,500 |

### Bebidas (no alcohólicas)
| Producto | Precio |
|----------|--------|
| Gaseosa personal | $3,000 |
| Gaseosa mediana | $4,000 |
| Jugo natural pequeño | $6,000 |
| Jugo natural grande | $8,000 |
| Limonada sencilla | $6,000 |
| Limonada especial | $12,000 |
| Agua del Chavo | $9,000 |
| Soda | $9,000 |
| Malteada | $20,000 |

### Cervezas y Micheladas
| Producto | Precio |
|----------|--------|
| Cerveza personal | $4,000 |
| Cerveza mediana | $7,000 |
| Michelada personal | $4,500 |
| Michelada mediana | $6,500 |
| Guarapo | $9,000 |

### Cocteles (por espíritu)
| Espíritu | Precio |
|----------|--------|
| Gin | $15,000 |
| Tequila | $18,000 |
| Vodka | $15,000 |
| Guaro | $15,000 |
| Ron | $15,000 |
| Whisky | $26,000 |

## Ingredientes del Inventario (ING01–ING20)

| ID | Nombre | Unidad | Stock Mínimo |
|----|--------|--------|--------------|
| ING01 | Canasta/cesta | unidad | 30 |
| ING02 | Carne de birria | porción | 50 |
| ING03 | Caldo de birria | litro | 20 |
| ING04 | Quesillo Oaxaca | porción | 60 |
| ING05 | Pan telera/bolillo | unidad | 30 |
| ING06 | Tortilla de maíz | unidad | 80 |
| ING07 | Salchicha | unidad | 20 |
| ING08 | Tocineta | unidad | 20 |
| ING09 | Pollo | porción | 30 |
| ING10 | Aguacate/guacamole | porción | 40 |
| ING11 | Crema/aderezo | porción | 40 |
| ING12 | Pan hamburguesa | unidad | 20 |
| ING13 | Patacón/tostón | unidad | 40 |
| ING14 | Totopos/doritos | porción | 40 |
| ING15 | Tortilla de harina | unidad | 50 |
| ING16 | Elote | unidad | 20 |
| ING17 | Verduras frescas | porción | 30 |
| ING18 | Cono | unidad | 30 |
| ING19 | Fideo ramen | porción | 20 |
| ING20 | Salsa enchiladas | porción | 20 |

## Sistema de Pedidos

### Toggle de tipo de pedido (4 botones, grid 2×2)
- Para Llevar → `[PARA LLEVAR]` en notas
- Para Comer Acá → `[PARA COMER ACA]` en notas
- Domicilio → `[DOMICILIO]` en notas
- Al Costo → `[AL COSTO]` en notas (usa precios de costo en lugar de venta)

### Panel de Cocina — Editar Pedidos
Disponible en pedidos `pendiente` o `preparando`. Modal bottom sheet con:
- Items actuales con controles +/- cantidad
- Grid de productos por categoría para agregar
- Checkbox domicilio y textarea de notas
- Total en tiempo real

### Para Pago (domicilio.html)
Muestra todos los pedidos con `estado === 'listo'` del día. Botón COBRADO → `entregado`. Auto-refresh cada 5s.

### Cache de Precios (24h)
`sistema.js` carga productos desde Sheets una vez al día. Botón 🔄 en nav de pedidos y cocina para forzar actualización.

### Cierre de Caja
- **PIN:** 1130
- Consulta por fecha o ver todos
- Resumen: Ventas, Costos, Ganancia, Pedidos, Ticket Promedio
- Sueldos del día con dropdown dinámico de empleados
- Reporte mensual con 7 cards + gráfica mixta Chart.js + tabla por día
- Cache localStorage: 30 min mes actual, 7 días meses anteriores

### Inventario
- **PIN:** 1130
- Tabla ordenada por urgencia (AGOTADO → CRÍTICO → BAJO → OK)
- Botón "Descontar Consumo" con selector de fecha
- Botones "+ Reponer" por ingrediente
- Botón "Crear hoja automáticamente" si no existe la hoja Ingredientes

## Tips de Desarrollo

### Agregar un producto al menú público
1. Editar `index.html` en la sección correspondiente
2. Usar estructura `.menu-item` con `data-heat="0|1|2|3"`
3. Actualizar precios en este CLAUDE.md
4. Agregar a hoja Productos en Sheets
5. Agregar receta en `RECETAS_DEFAULT` de `google-apps-script.js`

### Agregar una sección nueva al menú público
- Añadir chip en el `<nav id="chipsNav">` con `data-target="nuevo-id"`
- Añadir sección `<section data-section="nuevo-id">`
- El scroll spy la detecta automáticamente

### Cambiar el fondo de una página del sistema
Cada página puede sobreescribir el fondo base de `sistema.css` con un `<style>` en el `<head>`:
```html
<style>
  body { background: #FFD60A !important; background-image: none !important; }
</style>
```

### Cambiar el premio de fidelización
Buscar en `clientes.html` y `tarjeta.html` el texto "TACO DE BIRRIA GRATIS" y reemplazarlo.

### Actualizar precios de tacos
Los tacos tienen precio 0 en `sistema.js` (se muestra "Consultar"). Actualizar en `sistema.js` (objeto `MENU.tacos`) y en la hoja `Productos` de Sheets.

### Componente `.section-title-bar` (subsecciones en Bebidas)
```html
<div class="section-title-bar">
    <span>🍺 CERVEZAS</span>
</div>
```

---

**Versión:** 5.0.0
**Fecha:** Abril 2026
**Basado en:** GOSA Food Truck v4.2.0
