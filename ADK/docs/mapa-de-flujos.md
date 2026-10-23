# Mapa de flujos

Inventario de los tres archivos de producto: páginas, secciones (un flujo por sección) y node IDs para abrirlos directo en Figma.

> Relevado vía Figma MCP (`get_metadata`) el **2026-10-23**. Las secciones `Keys …` agrupan pantallas con claves de traducción y no se listan como flujos.

## 1 · [ADK] Login — `cJxVzUn17o3SgYkfiuXSkm`

### Página *Nuevo Login (con Token)* — `1:297`

| Flujo (sección) | Node | Pantallas |
|---|---|---|
| Identificación · QR con Token | [`12:4820`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=12-4820) | Attract → Cómo iniciar sesión → Método de retiro → Loader → Bienvenida → Home logueado con Loyalty |
| Inactividad · validación con otro usuario (borra el carrito) | [`12:10845`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=12-10845) · [`2168:20226`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2168-20226) | Carrito → User inactivo → Cambiar de cuenta → Checkout |
| Inactividad · canje de puntos que requiere validación | [`12:12325`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=12-12325) | User inactivo → MiMcDonald's logueado → Home con Loyalty |
| Log out sin productos | [`2208:4823`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2208-4823) | Método de retiro → Attract |
| Log out con productos | [`2208:6386`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2208-6386) | Carrito → Cambiar de cuenta → Attract |
| Modales de error y caducidad | [`2597:13801`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2597-13801) | `identificationError` · `identificationUpgradingError` · `unauthorized` |
| Cancela identificación | [`12:17867`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=12-17867) | Attract estática → Seleccionar idioma → Cómo inicio sesión → Método de retiro |
| Home · logueado sin productos | [`2346:5501`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2346-5501) | Método de retiro → Home |
| Home · sin loguear ni productos | [`2346:9176`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2346-9176) | Método de retiro → Home sin loguear |
| Home · logueado con productos | [`2346:8022`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2346-8022) | Método de retiro → Home |
| Home · sin loguear con productos | [`2346:9662`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2346-9662) | Método de retiro → Home |
| Footer V2 con accesibilidad | [`2162:42983`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2162-42983) | 8 instancias de `Footers_shell` (496 y 264 de alto) |

### Página *Home* — `2456:27145`

| Flujo | Node |
|---|---|
| Home · sin loguear y sin Loyalty | [`2456:27633`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2456-27633) |
| Home · logueado | [`2536:13241`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2536-13241) |
| Home · sin loguear con Loyalty | [`2456:27890`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2456-27890) |
| Home · logueado con Loyalty | [`2456:28147`](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2456-28147) |

## 2 · [ADK] Productos, Loyalty y Cupones — `CkrLK7rb1I1DKjKCvZOpLN`

### ✅ *Flujos de productos* — `1:292`

| Flujo | Node | Pantallas |
|---|---|---|
| McCombo Grande Premium CBO | [`4951:85275`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4951-85275) | 13: categoría → filtro → detalle → personalización → añadir al carrito → upselling |
| McCombo Grande Premium (variante corta) | [`4951:87518`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4951-87518) | 3 |
| Producto "desde" | [`5266:61833`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5266-61833) | 1 |
| Café + acompañamiento · McCombo Desayuno Completo | [`4951:89766`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4951-89766) | 14 |
| Cajita Feliz McFiesta Jr | [`4291:101146`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4291-101146) | 9 |
| Personalización de Nuggets (10 pz + salsas) | [`4291:130962`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4291-130962) | 6 |
| Personalización de Papas (Cheddar Bacon) | [`4291:142862`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4291-142862) | 4 |
| Personalización de bebida (Coca-Cola) | [`4295:85216`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4295-85216) | 2 (incluye UpSelling) |

### ✅ *Error integración FLEX* — `3863:67047`

| Flujo | Node |
|---|---|
| FLEX · productos sin stock en el carrito | [`4088:109512`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4088-109512) |
| FLEX · no se pudo completar el pedido | [`4088:110325`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4088-110325) |

Nota en el canvas: *posibilidad de sumar productos que no integren en outage* (decisión abierta).

### ✅ *Flujos de Promociones* — `4778:143840`

| Flujo | Node | Pantallas |
|---|---|---|
| 2 Sundae a elección | [`4778:145725`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4778-145725) | 9 |
| Combo + McFlurry a elección | [`4778:146021`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4778-146021) | 10 |

### ✅ *Cupones* — `5086:8102`

| Flujo | Node |
|---|---|
| Token con otro McID en sesión → cambia de cuenta | [`5086:8617`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-8617) |
| Token con otro McID en sesión → mantiene el primero | [`5086:10495`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-10495) |
| Token con el mismo McID → mantiene cuenta | [`5086:12368`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-12368) |
| Sesión con token + cupón del mismo McID → suma puntos | [`5086:29524`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-29524) |
| Sesión con token + cupón de otro McID → prioriza la sesión | [`5086:35353`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-35353) |
| Cupón con McID (soft login) → suma puntos | [`5086:43711`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-43711) |
| Soft login + cupón del mismo McID | [`5086:65110`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-65110) |
| Soft login + cupón de otro McID → prioriza la sesión del primero | [`5099:9030`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5099-9030) |
| Cupón con McID + producto Loyalty · mismo usuario | [`5101:27681`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5101-27681) |
| Cupón con McID + producto Loyalty · otro usuario → cambia | [`5101:36679`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5101-36679) |
| Error · cupón no reconocido | [`5269:50050`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5269-50050) |
| Error · cupón ya utilizado | [`5269:50023`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5269-50023) |
| Error · cupón vencido | [`5269:50041`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5269-50041) |

### ✅ *Loyalty* — `4972:95346`

| Flujo | Node |
|---|---|
| MiMcDonald's · usuario no identificado | [`4972:95535`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-95535) |
| MiMcDonald's · usuario identificado | [`4972:96533`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-96533) |
| Canje · sólo productos Loyalty | [`4972:143660`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-143660) |
| Canje · con otros productos en el carrito | [`4972:145265`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-145265) |
| Mostrar puntos · no logueado / logueado | [`4972:150367`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-150367) · [`4972:150378`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-150378) |

### 🚧 *Filtros y etiquetas* — `5183:47846` (en revisión UX)

Pantallas sueltas de categoría con chips de filtro y subcategorías (14 chips en 4 filas en [`5438:25598`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5438-25598)) + tabla de keys `CHF_PRODUCT_CATEGORY_*` (13 subcategorías).

## 3 · [ADK] Carrito, Checkout y Cross Selling — `FgvtqbTZN2gkuUJbegbhrA`

### ✅ *Carrito* — `1:293`

| Flujo | Node |
|---|---|
| Abrir detalle de McCombos (hasta 3 ítems) | [`1:2470`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=1-2470) |
| Visualización de productos (scroll) | [`1:2574`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=1-2574) |
| Productos simples (1 ítem directo al detalle) | [`1:2656`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=1-2656) |
| Elimina producto | [`1:3013`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=1-3013) |
| Vaciar carrito | [`102:10969`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=102-10969) |
| NBO · cross selling post carrito | [`44:12765`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=44-12765) |
| Canje · sólo productos Loyalty | [`171:9935`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=171-9935) |

### ✅ *Checkout* — `52:5396`

| Flujo | Node |
|---|---|
| Comer aquí · pago en mostrador · entrega en mostrador | [`52:5990`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-5990) · [`52:6048`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6048) |
| Comer aquí · pago en mostrador · entrega en la mesa | [`52:6104`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6104) · [`52:6190`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6190) |
| Comer aquí · pago en tótem · entrega en la mesa | [`52:6274`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6274) |
| Comer aquí · pago en ADK · entrega en mostrador | [`52:6364`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6364) |
| Para llevar · pago en mostrador | [`52:6429`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6429) · [`52:6526`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6526) |
| Para llevar · pago en tótem | [`52:6477`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6477) |
| Checkout con login | [`71:21272`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-21272) |
| Mostrar puntos sumados (estático / animado) | [`52:6572`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6572) · [`52:6618`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6618) |
| Thanks · Footer | [`70:8816`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=70-8816) · [`70:8815`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=70-8815) |

### ✅ *Errores de alerta* — `70:11157`

| Flujo | Node |
|---|---|
| Error de pago con tarjeta → intentar de nuevo | [`71:11303`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-11303) |
| Error de pago con tarjeta → pago en mostrador | [`71:11335`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-11335) |
| Error de impresión del ticket | [`71:11373`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-11373) |

Cada error de pago trae en el canvas la lista de **códigos del procesador** que lo disparan (p. ej. `05_DENEGADA`, `51_DENEGADA_FI`, `54_TARJETA_VENCIDA`, `X1_FONDOS_INSUFICIENTES` → reintentar; `96_ERROR_EN_SISTEMA`, `CE_ERROR_DE_COMUNICACION`, `OV_OTP_VENCIDO` → pagar en mostrador).

### ✅ *Factura electrónica* — `71:12049`

| Flujo | Node |
|---|---|
| Documento 1 · carga completa (10 pantallas) | [`71:12262`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-12262) |
| Errores de validación por campo | [`71:12802`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-12802) · [`222:17673`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=222-17673) · [`222:18027`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=222-18027) · [`222:18381`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=222-18381) |

### ✅ *OTP* — `272:16440`

| Flujo | Node |
|---|---|
| Validación OTP por mail (incluye intentos incorrectos y canje confirmado) | [`272:16441`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=272-16441) · [`356:18384`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=356-18384) |
| Validación OTP por teléfono (SMS / WhatsApp) | [`273:17813`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=273-17813) |

### *Cross Selling / NBO* — `71:29955` (sin estado declarado)

| Flujo | Node |
|---|---|
| Agrega productos de venta sugestiva | [`71:30894`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-30894) |
| No agrega productos | [`71:31932`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-31932) |
| NBO · cross selling post carrito | [`71:37344`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-37344) |
| NBO · ¿cómo mostramos los productos? (6 exploraciones) | [`71:37445`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-37445) |

---

## Señales tempranas (a validar en la primera auditoría)

Salen sólo de posiciones y tamaños en la metadata, sin abrir el diseño. Ya se validaron en la [auditoría 001](../audits/001-flujos-kiosco.md): S-04 resultó parcial (los errores de **pago** sí tienen acción primaria; el problema está en los de identificación, cupones y FLEX, ver F-001-06).

| # | Dónde | Señal | Regla |
|---|---|---|---|
| S-01 | Archivos de producto | ArchWay Foundations no está agregada; sí lo está *Componentes App (Design System)* | K-SIS-01 · K-SIS-02 |
| S-02 | Checkout › Selección de tipo de pago | La opción principal (Button illustration 344 × 440) ocupa `y 496–936`; el CTA de factura electrónica es un botón de **144 × 40** | K-ALC-02 · K-TOQ-01 |
| S-03 | Checkout › Método de retiro | Las dos opciones están en `y 568–1008`: tercio medio en modo estándar, fuera de la Safe Area en modo accesible | K-ALC-02 · K-ALC-04 |
| S-04 | Errores de pago y FLEX | Dos botones **secundarios** 376 × 80 en `y ≈ 984–1104`, sin acción primaria marcada | K-DEC-03 · K-ALC-02 |
| S-05 | Factura electrónica | Dropdown + 3 campos en `y 336–880` (tercio superior); teclado en `y 960–1350` | K-ALC-03 |
| S-06 | OTP | Teclado numérico en `y 608–1128`; acciones en `y 1224`. Bloqueo de 15 min tras intentos fallidos | K-SES · voz y tono (*Problemas y recuperación*) |
| S-07 | Cross Selling | Frames de **1083 × 1925**, fuera del lienzo 1080 × 1920 | K-SIS-01 |
| S-08 | [ADK] Login | No tiene páginas de estado READY / PENDIENTES como los otros dos archivos | Gobernanza |
| S-09 | Copy en los 3 archivos | Está en español neutral con tú ("¿Cómo quieres pagar…?"), que es la versión fuente correcta. Falta confirmar que las *Keys* cubren la adaptación con voseo para AR/UY y que no se mezclan tú y vos | K-SIS-05 · K-SIS-06 · [Voseo](../../Voz-y-Tono/05_localizacion-y-terminologia/02_voseo.md) |
