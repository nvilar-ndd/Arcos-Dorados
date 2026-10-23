---
audit: "001"
archivo: "[ADK] Login · [ADK] Productos, Loyalty y Cupones · [ADK] Carrito, Checkout y Cross Selling"
paginas: "14 páginas de trabajo · 493 pantallas de 1080 × 1920"
fecha: 2026-10-23
metodo: "Script de lectura con use_figma sobre todas las pantallas (instancias y componente de origen, fills con o sin variable, textos con o sin estilo, tamaño y posición de cada control) + revisión visual de 30 pantallas representativas"
---

# Audit 001 — Flujos del kiosco (los 3 archivos)

> Cada hallazgo nace `Pendiente`. Sólo lo `Aprobado` se aplica en Figma.
> Prioridad: 🔴 P0 bloquea dev · 🟠 P1 antes de salir · 🟡 P2 próxima iteración · ⚪ P3 higiene.
> Los hallazgos de **componente** ya abiertos en el [audit del DS](../../Archway/ADK/audit.md) se citan (`A-*`) y no se repiten: acá se mide **dónde y cuánto** pegan en los flujos.

## Resumen

| | |
|---|---|
| Pantallas medidas | **493** (Login 54 · Home 8 · Productos 120 · FLEX 6 · Promociones 20 · Cupones 94 · Loyalty 15 · Filtros 3 · Carrito 34 · Checkout 69 · Errores 13 · Factura 23 · OTP 13 · Cross Selling 21) |
| Fills enlazados a variables | **4** en total (todos en *Loyalty*). El resto son hex sueltos |
| Texto fuera de componentes con text style | ≈ 0 % (Productos 0/380 · Cupones 1/410 · Checkout, Factura, Errores: 0) |
| Controles de 40 px de alto en el flujo principal | 9 tipos distintos, en Productos, Promociones, Carrito, Checkout, Loyalty y Home |
| Pantallas con variante de **modo accesible** | **0**. Todas las instancias de `Nav.menu-button` tienen `A11y=False` |

**Lo que está bien resuelto** y conviene tomar como patrón:

- **OTP:** email enmascarado (`ni•••••@gm•••.com`), contador "Reenviar en 00:30" y una salida digna al bloquear ("Seguir sin canjear"). Cumple K-SES-03, K-SES-04 y *Problemas y recuperación*.
- **Error de pago:** acción primaria clara (*Reintentar*) + salida (*Volver*), con causa y siguiente paso en el texto.
- **Decisiones de checkout:** tarjetas `Button illustration` de 344 × 440, número de tent con teclado de 704 × 520 y CTA *Continuar* de 80 px en el footer.
- **Carrito:** el total, el desglose y *Ir a pagar* quedan en el tercio inferior.

## Tablero

| ID | Hallazgo | Regla | Prioridad | Estado |
|---|---|---|---|---|
| F-001-01 | No hay modo accesible diseñado: las decisiones obligatorias quedan en `y 496–1008`, fuera de la Safe Area | K-ALC-02 · K-ALC-04 | 🔴 P0 | Pendiente |
| F-001-02 | Pantallas sin tokens: 4 fills con variable en 493 pantallas y texto sin estilos; ArchWay no está agregada | K-SIS-02 | 🔴 P0 | Pendiente |
| F-001-03 | Controles de 40 px en acciones del flujo principal (personalizar, seleccionar, cantidad, factura, quitar descuento) | K-TOQ-01 | 🟠 P1 | Pendiente |
| F-001-04 | "Vaciar carrito" pegado a la acción principal en el footer de Home, Detalle y Tipo de pago | K-TOQ-04 | 🟠 P1 | Pendiente |
| F-001-05 | Idiomas nombrados en español ("Inglés", "Portugués") | K-DEC-02 · Jakob | 🟠 P1 | Pendiente |
| F-001-06 | Errores con una sola salida "Volver" y sin siguiente paso (identificación, cupones, FLEX, ticket no impreso) | K-DEC-03 · K-SIS-05 | 🟠 P1 | Pendiente |
| F-001-07 | Texto legal de EE. UU. ("2,000 calories a day…") en el footer de Loyalty y del checkout de Cross Selling | K-SIS-05 | 🟠 P1 | Pendiente |
| F-001-08 | Inactividad sin cuenta regresiva visible | K-SES-01 | 🟠 P1 | Pendiente |
| F-001-09 | Fallback de pinpad caído presentado como decisión de una sola opción, sin explicar por qué falta la tarjeta | K-DEC-02 · K-DEC-03 | 🟠 P1 | Pendiente |
| F-001-19 | Cross Selling: la acción para descartar cambia de altura según la cantidad de sugerencias, que llega a 6 | K-DEC-01 · K-DEC-04 | 🟠 P1 | Pendiente |
| F-001-10 | Factura electrónica: error sin ícono, placeholder como label y bordes de bajo contraste | K-LEG-04 · K-LEG-07 | 🟠 P1 | Pendiente |
| F-001-11 | Texto legal de 12 px en el footer de todas las pantallas | K-LEG-02 | 🟡 P2 | Pendiente |
| F-001-12 | Inconsistencias de componentes entre archivos (variantes de footer, dos `nav.menu-button`, Chips vs Tag Pill, componentes locales, Inter) | K-SIS-01 | 🟡 P2 | Pendiente |
| F-001-13 | "Añadir al carrito" es una pantalla completa sin CTA ni duración definida | K-SES-05 · Flow | 🟡 P2 | Pendiente |
| F-001-14 | Nombre y puntos del usuario visibles para la fila | K-SES-03 | 🟡 P2 | Pendiente |
| F-001-15 | Cupón: dos "Volver" en la misma pantalla y CTA de footer redundante | K-DEC-03 | 🟡 P2 | Pendiente |
| F-001-16 | Typos en copy final: "pedidoo", "diponible" | K-SIS-05 | 🟡 P2 | Pendiente |
| F-001-17 | Frames fuera de lienzo y pantallas sin componentes | K-SIS-01 | ⚪ P3 | Pendiente |
| F-001-18 | Datos de ejemplo inconsistentes en el carrito (el total no suma) | — | ⚪ P3 | Pendiente |

---

## Detalle

<a id="f-001-01"></a>

### F-001-01 · No hay modo accesible diseñado 🔴

| | |
|---|---|
| **Dónde** | Todos los archivos. Ejemplos: [Seleccionar idioma](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2232-5811), [¿Cómo prefieres tu pedido?](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2167-46247), [¿Dónde quieres recibir tu pedido?](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6008), [¿Cómo quieres pagar?](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-5992) |
| **Qué pasa** | Ninguna de las 493 pantallas tiene variante accesible. Las cuatro decisiones obligatorias del pedido quedan, total o parcialmente, arriba de la Safe Area (`y ≥ 1120`): idioma en `y 544`, consumo en `y ≈ 640–1095`, retiro en `y 568–1008` y pago en `y 496–936`. Sólo existe una sección de footers "V2 con accesibilidad" (`2162:42983`), sin pantallas que la usen |
| **Por qué importa** | Una persona en silla de ruedas o de baja estatura no llega al tercio superior de un panel vertical. Es el único bloqueo físico duro: sin modo accesible no puede completar un pedido |
| **Regla** | K-ALC-02 · K-ALC-04 · ADA 308 · EN 301 549 · Audit DS **A-L02** |
| **Propuesta** | Diseñar el modo accesible para las 6 pantallas de decisión (idioma, consumo, retiro, pago, tent, OTP) más Home y Carrito: contenido interactivo a partir de `y 1120`, título arriba, mismo footer. Definir activación y salida (Q-02) |

<a id="f-001-02"></a>

### F-001-02 · Pantallas sin tokens 🔴

| | |
|---|---|
| **Dónde** | Los 3 archivos |
| **Qué pasa** | Sólo **4 fills** enlazados a variables en 493 pantallas (en *Loyalty*). Fills hex fuera de componentes: Productos 1.191, Cupones 2.029. Prácticamente ningún texto fuera de componentes tiene text style (Productos 0/380, Cupones 1/410). La librería `[Archway] Foundations Library` no está agregada en ningún archivo de producto |
| **Por qué importa** | Dev no puede leer tokens desde Figma, y un cambio de marca, contraste o del modo tablet obliga a tocar pantalla por pantalla |
| **Regla** | K-SIS-02 · Audit DS **A-S01**, **A-T01** · [Convergencia fase 2](../../Archway/Convergencia/adk-archway.md) |
| **Propuesta** | (1) Agregar ArchWay Foundations a los 3 archivos. (2) Aplicar text styles y variables primero en las pantallas *Keys* (son las que lee dev), con el mismo script de mapeo propuesto en A-T01 |

<a id="f-001-03"></a>

### F-001-03 · Controles de 40 px en el flujo principal 🟠

| Control | Dónde | Tamaño |
|---|---|---|
| *Personalizar* / *Seleccionar* / *Agregar* (`ADK Buttons` Small, primario y secundario) | Detalle de producto, Promociones, Cupones | 144 × 40 |
| `Quantity ADK` (stepper +/−) | Detalle, Carrito, Promociones, Loyalty | 568 × 40 · 144 × 40 |
| *Agregar* factura electrónica | ¿Cómo quieres pagar? | 144 × 40 |
| *Más productos* (Mis recompensas) | Home logueado | 208 × 40 |
| *Ocultar / Abrir detalle*, *Personalizar* | Carrito | 144–272 × 40 |
| Ícono para quitar el descuento | Carrito (total) | < 24 |
| *Cerrar sesión* | Tarjeta de usuario en el footer | ≈ 40 |

**Regla:** K-TOQ-01 · Audit DS **A-C04** · Fitts. **Propuesta:** pasar a *Medium* (56) todos los botones dentro de filas de producto y al stepper de 56; la acción de quitar descuento pasa a ser un botón con texto.

<a id="f-001-04"></a>

### F-001-04 · "Vaciar carrito" pegado a la acción principal 🟠

En el footer de [Home logueado](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2456-28149), [Detalle de producto](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4951-85481) y [¿Cómo quieres pagar?](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-5992), *Vaciar carrito* va justo debajo de *Ver pedido*, *Agregar al carrito* o *Volver*. Lo mitiga el modal de confirmación ([`102:11097`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=102-11097)), pero el modal pone *Vaciar carrito* como primario Gold: un doble toque apurado borra el pedido.

**Regla:** K-TOQ-04 · Postel. **Propuesta:** sacar *Vaciar carrito* de los footers y dejarlo sólo en el Carrito; en el modal, *Cancelar* como primaria o *Vaciar* con estilo destructivo.

<a id="f-001-05"></a>

### F-001-05 · Idiomas nombrados en español 🟠

[Seleccionar idioma](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2232-5811) muestra "Español · Inglés · Portugués". Quien necesita cambiar el idioma justamente no lee español.

**Regla:** Jakob · i18n. **Propuesta:** endónimos: *Español · English · Português*.

<a id="f-001-06"></a>

### F-001-06 · Errores sin siguiente paso 🟠

| Pantalla | Acciones | Falta |
|---|---|---|
| `identificationError`, `identificationUpgradingError`, `unauthorized` | Sólo *Volver* (secundario) | Cómo seguir: "Continuar como invitado" o "Escanear de nuevo" |
| `aopCouponError`, `AlreadyUsed`, `Expired` | Sólo *Volver* | "Seguir sin cupón" |
| FLEX sin stock / no se pudo completar | Un secundario | Ir al carrito con el ítem marcado |
| [Ticket no impreso](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-11376) | Ninguna | Qué hacer con el número ("Indica este número en el mostrador") |

**Regla:** K-DEC-03 · [Problemas y recuperación](../../Voz-y-Tono/02_contextos-de-ux/01_problemas-recuperacion.md). **Propuesta:** todo error con causa, siguiente paso y una acción primaria.

> Corrige la señal **S-04** del mapa: los errores de **pago** sí tienen primaria (*Reintentar*). Los nombres de capa "Buttons/Secondary/…" son viejos; la variante real es `Style=Primary`.

<a id="f-001-07"></a>

### F-001-07 · Texto legal de EE. UU. en el footer 🟠

Las pantallas de Loyalty ([`4972:95346`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4972-95346)) y el checkout de Cross Selling ([`71:37433`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-37433)) usan el componente `Footers` (no `Footers_shell`) con el texto *"2,000 calories a day is used for general nutrition advice…"*. Es copy legal de EE. UU., en inglés y sin validez en los mercados de Arcos.

**Propuesta:** reemplazar por `Footers_shell` con la variante de pantalla correcta.

<a id="f-001-08"></a>

### F-001-08 · Inactividad sin cuenta regresiva 🟠

[User inactivo](https://www.figma.com/design/cJxVzUn17o3SgYkfiuXSkm/?node-id=2155-37150) explica la situación, pero no muestra el tiempo restante antes de cerrar la sesión. Su acción primaria es *Cerrar sesión*.

**Regla:** K-SES-01 · WCAG 2.2.1. **Propuesta:** contador visible (≥ 20 s) y una acción primaria que extienda la sesión. Depende de Q-03.

<a id="f-001-09"></a>

### F-001-09 · Pantalla de pago con una sola opción 🟠

En 5 variantes de *¿Cómo quieres pagar?* ([`52:6049`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=52-6049), `52:6192`, `52:6528`, `154:12971`, `71:11337`) la única opción es *Pagar en el mostrador con efectivo*, en `y 553`, como botón secundario. **Es el fallback cuando el pinpad está caído** (Q-05, confirmado). La pantalla mantiene el título de decisión ("¿Cómo quieres pagar tu pedido?") sin explicar por qué falta la tarjeta, y la única salida es un secundario en el tercio superior.

**Propuesta:** tratarla como estado de *Problemas y recuperación*, no como decisión. Título informativo ("El pago con tarjeta no está disponible"), bajada con el siguiente paso, *Pagar en el mostrador* como **primario de 80 px en el tercio inferior** (K-ALC-01, K-DEC-03) y la factura electrónica debajo.

<a id="f-001-19"></a>

### F-001-19 · Cross Selling: descarte que se mueve 🟠

Las 6 variantes de [`71:37445`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-37445) son estados de 1 a 6 sugerencias (Q-06, confirmado). El botón de descarte (656 × 80) queda en `y 960` con 1–3 productos y salta a `y 1288` con 4–6. Si el usuario aprende a descartar sin leer, la segunda vez toca una card de producto en lugar del botón. Con 5 y 6 sugerencias, además, se supera el máximo de 4 opciones.

**Regla:** K-DEC-01 · K-DEC-04 · Hick · memoria espacial. **Propuesta:** anclar el descarte en el footer (posición fija, tercio inferior) para todas las cantidades y limitar las sugerencias a 4.

<a id="f-001-10"></a>

### F-001-10 · Factura electrónica 🟠

[`71:12837`](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-12837): el error se marca con label y helper en rojo, sin ícono (Audit DS **A-A04**). El campo *Email* usa el placeholder como label, que desaparece al escribir. Los campos llevan sólo una línea inferior gris (Audit DS **A-A02**).

**Regla:** K-LEG-04 · K-LEG-07 · WCAG 3.3.2. **Propuesta:** ícono de error + label persistente + borde `border.default` completo. Suma valor un atajo "@gmail.com / .com" en el teclado.

<a id="f-001-11"></a>

### F-001-11 · Legal de 12 px 🟡

"Imágenes de carácter ilustrativo." va a 12 px en el `Footers_shell` de casi todas las pantallas (119 de 120 en Productos). "0 pts" está a 10,8 px en `LoyaltyExpanded` (Attract). **Regla:** K-LEG-02 · Audit DS **A-T05**.

<a id="f-001-12"></a>

### F-001-12 · Inconsistencias de componentes 🟡

| Caso | Detalle |
|---|---|
| Variantes de `Footers_shell` | OTP, Factura y Tent usan `Pantallas=Dimensionamiento`; Método de retiro usa `Detalle del producto` (desplazado a `x = -1`); Tipo de pago usa `Home_Conproductos` |
| Dos componentes de menú | `Nav.menu-button` (con propiedad `A11y`) y `nav.menu-button` (sin ella), en Carrito › MiMcDonald's y Cross Selling |
| Filtro de MiMcDonald's | `ADK_Chips` en Login y `ADK Tag Pill` en Carrito |
| Componentes locales | `Tag Pill [LOCAL]` ×16 (Promociones y Productos); `Loyalty-expanded [LOCAL]` (Keys de Login) |
| Fuente | Inter en el input del OTP y del cupón (27 textos) |
| Componente sin nombre | 2 instancias con nombre en blanco en Loyalty |

<a id="f-001-13"></a>

### F-001-13 · "Añadir al carrito" como interstitial 🟡

[`4951:85701`](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=4951-85701): pantalla completa, sin componentes ni CTA, que aparece después de cada producto agregado. No está definido cuánto dura. **Propuesta:** snackbar en el footer junto al total (≥ 4 s, K-SES-05), o documentar duración y si se cierra al tocar.

<a id="f-001-14"></a>

### F-001-14 · Datos personales en pantalla 🟡

"¡Hola, Ronald! 7.000 pts" en la nav lateral y "Confirma que eres `<user.name>`" son visibles para la fila. **Propuesta:** mostrar sólo el nombre de pila (o iniciales) y ocultar el saldo de puntos hasta que se toque. Decisión de producto.

<a id="f-001-15"></a>

### F-001-15 · Cupón: acciones duplicadas 🟡

[Ingresa tu cupón](https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=5086-29525) tiene *Volver* en el contenido y *Volver* en el footer. Además, el footer muestra "¿Tienes un cupón? Escanéalo aquí" estando ya en la pantalla del cupón.

<a id="f-001-16"></a>

### F-001-16 · Typos 🟡

| Pantalla | Actual | Correcto |
|---|---|---|
| [Gracias](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=57-13722) | Recibe tu pedidoo | Recibe tu pedido |
| `aopCouponExpired` | Este cupón ya no está diponible | disponible |

<a id="f-001-17"></a>

### F-001-17 · Higiene de frames ⚪

- *Cross Selling* (todos) y `5086:30736` miden 1083 × 1925; `102:10971` mide 1081.
- `ADK_Añadir al carrito` (todas), `nº pedido` `52:6583` y `154:12958` no tienen ningún componente; `ADK_Checkout / animado` `52:6619` está vacío.

<a id="f-001-18"></a>

### F-001-18 · Datos de ejemplo ⚪

En el [carrito](https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=1-2614): subtotal $24.020 + impuestos $700 − puntos $6.000 − descuento $400 = $18.320, pero el total dice $24.720. Dev suele copiar estos ejemplos a los tests.

---

## Preguntas abiertas de esta auditoría

| # | Pregunta | Afecta |
|---|---|---|
| Q-05 | ¿Cuándo aparece la pantalla de pago con una sola opción? | ✅ Fallback con pinpad caído → F-001-09 |
| Q-06 | ¿Qué variante de Cross Selling / NBO se eligió? | ✅ Las 6 son estados de 1 a 6 sugerencias → F-001-19 |
| Q-07 | ¿El archivo [ADK] Login está listo para dev? | ✅ Todo Ready for Dev (sin páginas de estado en Figma) |
| Q-08 | ¿Cuánto dura "Añadir al carrito" y cuánto tiempo quedan Nº de pedido y Gracias antes de volver a Attract? | Cierre por tiempo, ya definido: faltan los segundos · F-001-13 · K-SES |

Siguen abiertas Q-01 a Q-04 de [`principios-kiosco.md`](../docs/principios-kiosco.md#preguntas-abiertas).

## Cómo se midió

Un script de lectura recorre cada frame de 1080 × 1920 (±4 px) de las 14 páginas. Para cada instancia toma el componente de origen, su variante, tamaño y posición `y` relativa a la pantalla. Para cada nodo fuera de instancias cuenta los fills con o sin variable y los textos con o sin text style. Las posiciones de la tabla salen de esa extracción; la revisión visual se hizo sobre 30 pantallas representativas.
