# Ilustraciones

> **Fuente de la verdad:** [Illustrations Guide (Figma)](https://www.figma.com/design/E0n9VRsdG5TfPRqhf9sbFK/Illustrations-Guide?node-id=0-1). La usan todos los sistemas (ArchWay, Dashboard, ADK y Legacy).
> **Relevado vía Figma MCP:** 2026-10-16.

En el archivo conviven tres familias con estilos y usos distintos. La regla general: **se elige la familia según el contexto y no se mezclan en una misma pantalla.**

| Familia (página de Figma) | Qué es | Cantidad | Catálogo |
|---|---|---|---|
| **Digital illustrations** | Librería global de McDonald's (v2.0): productos, delivery, dispositivos, pagos, restaurante. Estilo plano con contorno | 199 componentes en 12 grupos | [digital-illustrations.md](./catalogo/digital-illustrations.md) |
| **Specials ilustrations** | Piezas de campañas puntuales: FIFA, BT21, Méqui 1000, Gran Día, Black Friday, Mundial 2026 | 12 | [specials-ilustrations.md](./catalogo/specials-ilustrations.md) |
| **Ilustraciones Arcos** | Ilustraciones propias de Arcos Dorados con personajes, para la web y la App (General, Wallet, Misiones, Loyalty) | 1 componente, 29 variantes | [ilustraciones-arcos.md](./catalogo/ilustraciones-arcos.md) |
| **Deprecated** | Lo que ya no se usa (Méqui Friday) | 1 | [deprecated.md](./catalogo/deprecated.md) |

[`ilustraciones.json`](./ilustraciones.json) es el manifiesto con los IDs de Figma. Lo usa el [script de export](#export) para generar los SVG en `svg/`.

## Digital illustrations (Global)

| Grupo | Contenido | Tamaño |
|---|---|---|
| Menu Items | 59 productos y categorías del menú (Big Mac, McFlurry, Happy Meal, Family Box…) | 272 × 272 |
| Menu Items centred | 36 versiones centradas para categorías de la App, incluidas campañas locales (Gran Día, Méqui Friday, McMenu F1) | 272 × 272 |
| Silhouettes | 19 siluetas de productos | 272 × 272 |
| Loyalty | 7 (mano con teléfono, puntos, email, mantenimiento) | 272 × 272 |
| Payments | 16: efectivo e "inserte efectivo" en dólar, libra, euro y yen; tarjeta; pagar en caja | 328 × 328 |
| Delivery & Pickup | 27: auto, mostrador, drive thru, curbside, bolsa McDelivery, servicio a la mesa | 328 × 328 |
| At the Restaurant | 12: bandeja, mesa, cartel, carga, wifi | 328 × 328 |
| Devices | 14: mobile, kiosco y laptop en 4 colores | 328 × 328 / 328 × 264 |
| General | 5: sin wifi, login, éxito, email, table tent | 328 × 328 |
| Location Services · Drive Thru · Club VIP | 2 · 1 · 1 | 328 × 328 |

**Propiedades habituales:**
- `Shadow` (con o sin sombra al piso).
- `White Outline` (contorno blanco para fondos de color).
- `Status` (`On` a color, `Off` en gris para el estado deshabilitado).
- `Color` en Devices.

**Cuándo usar cada propiedad:**
- `White Outline` va **sobre fondos de color o fotos**.
- Sobre blanco, sin contorno.
- Las versiones *Greyscale* y `Status=Off` sirven para opciones no disponibles.

## Ilustraciones Arcos

Son ilustraciones propias, con personajes, para momentos de la App y la web: login, wallet, misiones, loyalty, espera y errores. Viven en **un solo componente `Ilustracion`** de 300 × 300, con las propiedades `Name` y `Section`.

### Guía de uso (de Figma)

**Origen de las ilustraciones**
- Se obtienen de **Freepik** y mantienen las características visuales que se vienen usando.
- **Personajes:** sólo del estilo **Pana**.
- **Escenarios, elementos y objetos:** pueden ser de los estilos Pana, Rafiqui, Cuate y Bro. También sirven recursos del estilo Amico, siempre que no sean tridimensionales.
- **Colores:** sólo los del [manual de color](#manual-de-color).
- **Compra:** las ilustraciones elegidas se envían a Nicolás Vilar para comprarlas.
- Si no existe una ilustración puntual, se pueden combinar varias, manteniendo la coherencia visual.

**Cómo agregar una ilustración nueva**
1. Agregar una variante al componente `Ilustracion`, con un `Name` descriptivo y la `Section` que corresponda. Si la sección no existe, se crea.
2. La variante mide **300 × 300**, como el resto.
3. Adentro va un grupo llamado `ilustracion` con todos los vectores. Puede ser más chico que 300 × 300 y no cuadrado, pero tiene que quedar alineado y ajustado al cuadrado.
4. Variante: sin auto layout, con la relación de aspecto bloqueada y constraints centro-centro.
5. Grupo `ilustracion`: constraints escala-escala (se posiciona libremente y después se fija en scale/scale).

**Cómo usarla**
- Siempre como instancia. Cualquier cambio se hace en la librería.
- Si una ilustración necesita varios ajustes, probablemente haya que crear una nueva.
- Se puede usar en el tamaño que haga falta, siempre con relación de aspecto cuadrada.

### Manual de color

| Parte | Color principal | Contorno |
|---|---|---|
| Piel (oscura) | `#B57C6F` | `Illustrations/Ham Dark` `#AF6150` |
| Piel (clara) | `Illustrations/Ham Light` `#E9B3A8` | `#ECA596` |
| Cabello | `Primary/McDonald's Black` `#292929` | `Secondary/Dark Grey` `#6F6F6F` |
| Ropa del usuario | Remera `Primary/McDonald's Gold` `#FFBC0D` o `Secondary/Light Grey` `#D6D6D6` · pantalón `Tertiary/Beige` `#B69A81` o `#D6D6D6` | `#6F6F6F` |
| Ropa de McDonald's (staff) | Remera `Primary/White` `#FFFFFF` · pantalón `#292929` · calzado `#B69A81` | `#6F6F6F` |
| Zapatos | `#FFBC0D`, `#B69A81` o `#D6D6D6` | `#6F6F6F` |

**Ajuste de cara:** se quita el círculo de la boca, se eliminan las cejas que están más pegadas al ojo y se bajan un poco las que quedan.

`#B57C6F` y `#ECA596` (marcados como *New*) todavía no tienen estilo en Figma.

## Specials

Son ilustraciones y logos de campaña. **No se usan de forma permanente en la App**: cuando termina la campaña, pasan a *Deprecated*.

| Campaña | Notas de Figma |
|---|---|
| FIFA (7 piezas) | Se movieron a Specials porque no son para usar en la App todo el tiempo (2024) |
| BT21 | Creado para una campaña, en negro y blanco (2024) |
| Méqui 1000 | Las variantes **horizontales** son para las categorías de las apps. **La versión cuadrada no se puede usar en apps** (2025) |
| Gran Día | Plano, con sombra, con contorno y con contorno + sombra (2024) |
| Black Friday / App Friday | Para Black Friday y Méqui Friday (2024) |
| McDonald's WorldCup 2026 | Logo para el Mundial 2026, relleno y trazo (2026) |

## Accesibilidad

| Caso | Regla |
|---|---|
| Decorativa (acompaña un título que ya dice lo mismo) | `alt=""` o `aria-hidden="true"` |
| Informativa (comunica un estado, como "sin conexión" o "pedido listo") | `alt` con el mensaje, no con la descripción del dibujo: "Sin conexión a internet", no "Papa frita triste con un router" |
| Estado deshabilitado | No depender sólo del gris: sumar texto |
| Kiosco | Las ilustraciones no son botones. Si una card con ilustración es tocable, el área táctil es la card completa |

## Export

```bash
cd ~/Arcos-Dorados
FIGMA_TOKEN=tu_token node Archway/scripts/export-figma-assets.mjs ilustraciones
FIGMA_TOKEN=tu_token node Archway/scripts/export-figma-assets.mjs ilustraciones --page="Ilustraciones Arcos"
```

Las ilustraciones se entregan **siempre en SVG**, igual que los íconos: Web las usa directo, iOS las importa al Asset Catalog como vector (*Preserve Vector Data*) y Android como Vector Drawable. El script escribe `Ilustraciones/svg/<pagina>/<grupo>/<ilustracion>/<variante>.svg`.

## Hallazgos (pendientes de aprobación)

| ID | Hallazgo | Propuesta |
|---|---|---|
| L-S01 | Propiedades con typos: `White Otline` (Al Plato), `White Oultine` (Sin Tacc), valores `fals` (McCafe, McCafe Espresso), `O` (Pick Up), `Greysacle` (Drive Thru) | Corregir. Las instancias no se rompen si se mantiene el número de variantes |
| L-S02 | Sets sin nombre útil: un set sin nombre en *Loyalty* (3585:1734) y uno llamado `Property` en *Delivery & Pickup* (3173:2976) | Nombrarlos |
| L-S03 | `Shadow` usado como nombre de la única variante (`success bag`, `Fifa bag`…) | Pasarlos a componentes sueltos o a una propiedad real |
| L-S04 | Mismo producto en tres versiones (Menu Items, Menu Items centred y Silhouettes) sin regla de cuándo usar cada una | Documentarla en Figma: centrada para categorías de la App, siluetas para estados vacíos o placeholders |
| L-C01 | Dos colores de piel sin estilo (`#B57C6F`, `#ECA596`), y restos de colores de Freepik en los ejemplos (`#263238`, `#455A64`, `#FFBE9D`, `#EB996E`) | Crear los estilos `Illustrations/Skin Dark` y `Illustrations/Skin Light Outline`, y limpiar los ejemplos |
| L-C02 | Las ilustraciones usan estilos de color de Global, no variables de ArchWay | Igual que en íconos (I-S01): enlazar cuando ArchWay publique la librería. Si no, mantener los estilos |
| L-H01 | Nombres mezclados en inglés y español y con mayúsculas dispares (`Pollo y nuggets`, `Al Plato`, `success bag`, `wifi`) | Convención: en inglés para Global, en español sólo en *Ilustraciones Arcos* |
