# Principios de kiosco — reglas auditables

Este documento convierte las restricciones físicas del kiosco en **reglas con umbral medible**. Es el contrato contra el que se auditan los flujos: cada hallazgo de [`audits/`](../audits/README.md) cita el ID de la regla que incumple (`K-ALC-01`, `K-TOQ-02`…).

Los valores salen del [[ADK] Design System](../../Archway/ADK) (layout, área accesible, tamaños de toque, audit A-*) y de la [Base de conocimiento](../../Base-de-conocimiento). Si un umbral cambia allá, se actualiza acá.

> **Lienzo de referencia:** 1080 × 1920 px, vertical, densidad 1.0×, touch, usuario a 50–70 cm. Las coordenadas `y` se miden desde el borde superior del frame.

## 1. Alcance y ergonomía (`K-ALC`)

```
y:    0 ┌───────────────────────────┐
        │ HEADER (192)              │   Tercio superior
        │                           │   Sólo información: títulos, estado, progreso.
  640   ├───────────────────────────┤   ─────────────────────────────────────────
        │                           │   Tercio medio
        │  zona extendida (960) ──► │   Selección y exploración.
  1120  ├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤   ─── Safe Accessibility Area (1080 × 800) ──
        │                           │   Tercio inferior
  1656  ├───────────────────────────┤   Compromiso: pagar, confirmar, canjear.
        │ FOOTER (264)              │
  1920  └───────────────────────────┘
```

| ID | Regla | Umbral | Base |
|---|---|---|---|
| K-ALC-01 | Las acciones de **compromiso** (pagar, confirmar pedido, canjear puntos, cancelar pedido, confirmar identidad) viven en el tercio medio o inferior | `y ≥ 640` en modo estándar | Instrucciones del proyecto · [Fitts](../../Base-de-conocimiento/leyes-de-ux.md#7-ley-de-fitts-fittss-law) |
| K-ALC-02 | En **modo accesible**, todo control interactivo de la pantalla entra en la Safe Accessibility Area | `y ≥ 1120` (`y ≥ 960` en la variante extendida) | [layout.md § Área accesible](../../Archway/ADK/foundations/layout.md#área-accesible-safe-accessibility-area) · ADA 308 · EN 301 549 |
| K-ALC-03 | El tercio superior no contiene controles de los que dependa avanzar | Ningún CTA obligatorio en `y < 640` | Alcance en silla de ruedas y niños |
| K-ALC-04 | Cada pantalla de flujo define qué pasa en modo accesible (qué baja, qué se oculta) | Documentado en el `design.md` | Audit DS **A-L02** |

> ⚠️ **Dato de hardware pendiente:** para traducir px a centímetros desde el piso hacen falta el **tamaño del panel en pulgadas** y la **altura de montaje** del kiosco. Sin eso, K-ALC se mide en px del lienzo. Ver [Preguntas abiertas](#preguntas-abiertas).

## 2. Áreas de toque (`K-TOQ`)

| ID | Regla | Umbral | Base |
|---|---|---|---|
| K-TOQ-01 | Alto mínimo de cualquier control | **56 px** | [layout.md § Tamaños de toque](../../Archway/ADK/foundations/layout.md#tamaños-de-toque) · Audit DS **A-C04** |
| K-TOQ-02 | Alto de acciones de compromiso | **80 px** (Botón Large) | Fitts: el costo de errar es alto |
| K-TOQ-03 | Separación entre targets adyacentes | **≥ 16 px** | Gap de la sub-grilla de contenido · WCAG 2.5.8 |
| K-TOQ-04 | Acciones destructivas (vaciar carrito, cancelar, cerrar sesión) no quedan pegadas a la acción principal | Separadas por posición o requieren confirmación | [Fitts](../../Base-de-conocimiento/leyes-de-ux.md#7-ley-de-fitts-fittss-law) · [Postel](../../Base-de-conocimiento/leyes-de-ux.md#24-ley-de-postel-postels-law) |
| K-TOQ-05 | El target táctil cubre todo el elemento visible (card, chip, fila), no sólo el texto o el ícono | — | Fitts |

**Referencia física (sólo orientativa hasta confirmar hardware):** en un panel de 32″ vertical, 1 px ≈ 0,37 mm → 56 px ≈ 21 mm, 80 px ≈ 30 mm. En 27″, 1 px ≈ 0,31 mm → 56 px ≈ 17 mm.

## 3. Legibilidad y entorno (`K-LEG`)

El local tiene iluminación variable y reflejos sobre el vidrio. El contraste mínimo de WCAG AA es el piso, no el objetivo.

| ID | Regla | Umbral | Base |
|---|---|---|---|
| K-LEG-01 | Texto de lectura | ≥ **22 px** | Audit DS **A-T05** |
| K-LEG-02 | Texto secundario (helpers, legales, metadatos) | ≥ **16 px**. Prohibido `Utility/Small` 12 px | Audit DS **A-T05** |
| K-LEG-03 | Contraste de texto | ≥ **4.5:1**; objetivo **7:1** en precios, totales y textos de error | WCAG 1.4.3 / 1.4.6 adaptado a reflejos |
| K-LEG-04 | Contraste de componentes y estados | ≥ **3:1** (bordes de inputs, toggles, foco, scroll) | WCAG 1.4.11 · Audit DS **A-A02**, **A-A03** |
| K-LEG-05 | El Gold `#FFBC0D` nunca es el único indicador de estado | Segundo indicador obligatorio (Bold, check, barra `#292929`, label) | WCAG 1.4.1 · Audit DS **A-A01** |
| K-LEG-06 | Ningún mensaje depende del sonido | Todo audio tiene equivalente visual | Entorno ruidoso · [Voz y tono § Modalidad](../../Voz-y-Tono/04_accesibilidad-e-inclusion/04_modalidad.md) |
| K-LEG-07 | El error no se comunica sólo con color | Ícono + texto + color | WCAG 1.4.1 · Audit DS **A-A04** |

## 4. Carga cognitiva y decisión (`K-DEC`)

| ID | Regla | Umbral | Base |
|---|---|---|---|
| K-DEC-01 | Pantallas de decisión del checkout (retiro, pago, factura) | ≤ **4 opciones** primarias visibles | [Hick](../../Base-de-conocimiento/leyes-de-ux.md#10-ley-de-hick-hicks-law) |
| K-DEC-02 | Una pantalla, una pregunta. El título es la pregunta | 1 decisión por pantalla en checkout | [Carga cognitiva](../../Base-de-conocimiento/leyes-de-ux.md#5-carga-cognitiva-cognitive-load) |
| K-DEC-03 | Hay una acción primaria clara por pantalla | 1 botón primario; el resto secundario o terciario | [Von Restorff](../../Base-de-conocimiento/leyes-de-ux.md#28-efecto-von-restorff-von-restorff-effect) |
| K-DEC-04 | Las interrupciones (cross selling, upselling, NBO) son salteables con un toque y no se repiten en el mismo pedido | 1 toque para descartar | [Flow](../../Base-de-conocimiento/leyes-de-ux.md#8-flow) · [Peak-End](../../Base-de-conocimiento/leyes-de-ux.md#23-regla-peak-end-peak-end-rule) |
| K-DEC-05 | Personalización de producto con progreso visible | Pasos numerados o barra de progreso | [Goal-Gradient](../../Base-de-conocimiento/leyes-de-ux.md#9-efecto-gradiente-de-meta-goal-gradient-effect) |
| K-DEC-06 | El usuario siempre ve cuánto lleva gastado / sumado | Total visible en el footer desde el primer producto | [Zeigarnik](../../Base-de-conocimiento/leyes-de-ux.md#30-efecto-zeigarnik-zeigarnik-effect) |

## 5. Tiempo, sesión y privacidad (`K-SES`)

El kiosco es público y compartido: la próxima persona en la fila no tiene que ver los datos ni el carrito de la anterior.

| ID | Regla | Umbral | Base |
|---|---|---|---|
| K-SES-01 | Antes de cerrar por inactividad hay aviso con cuenta regresiva y opción de seguir | ≥ **20 s** para responder | WCAG 2.2.1 |
| K-SES-02 | Al expirar la sesión se borra carrito y datos identificatorios | Vuelve a Attract sin rastro del usuario anterior | Privacidad en dispositivo compartido |
| K-SES-03 | Datos personales enmascarados en pantalla (email, teléfono, documento) | Se muestran parciales | Privacidad · lectura por terceros |
| K-SES-04 | Respuesta visual a cada toque | < **400 ms**; si el proceso tarda más, loader con texto | [Doherty](../../Base-de-conocimiento/leyes-de-ux.md#6-umbral-de-doherty-doherty-threshold) · Audit DS **A-A01** (loader) |
| K-SES-05 | Snackbars y mensajes temporales | ≥ 4 s; ≥ 6 s si es error; no se cierran mientras se tocan | Audit DS **A-C07** |

## 6. Sistema y contenido (`K-SIS`)

| ID | Regla | Base |
|---|---|---|
| K-SIS-01 | Las pantallas usan instancias de la librería `[ADK] Design System`, no componentes desacoplados | [Archway/ADK](../../Archway/ADK) |
| K-SIS-02 | Colores y textos enlazados a ArchWay Semantic / text styles, no hex ni tamaños sueltos | Audit DS **A-S01**, **A-T01** |
| K-SIS-03 | Íconos de la librería *Iconography*; nunca emojis como íconos de sistema | [Iconografía](../../Archway/Iconografia) |
| K-SIS-04 | Ilustraciones de una sola familia por pantalla (Digital illustrations · Specials · Ilustraciones Arcos) | [Ilustraciones](../../Archway/Ilustraciones) |
| K-SIS-05 | Todo texto pasa el manual de voz y tono (CTA, errores, confirmaciones, esperas) | [Voz-y-Tono](../../Voz-y-Tono) |
| K-SIS-06 | Textos de UI con *key* de traducción documentada (los flujos son multi-idioma) | Secciones *Keys* de cada archivo |

## Preguntas abiertas

| # | Pregunta | Por qué importa | Dueño |
|---|---|---|---|
| Q-01 | ¿Tamaño del panel (pulgadas) y altura de montaje de cada modelo de kiosco? | Convertir K-ALC y K-TOQ a mm y validar contra ADA 308 (15–48″ desde el piso) | Tech / Operaciones |
| Q-02 | ¿Cómo se activa y se sale del modo accesible y qué persiste entre pantallas? | K-ALC-02 y K-ALC-04 | UX ADK |
| Q-03 | ¿Tiempo real de inactividad y de la cuenta regresiva en producción? | K-SES-01 | Producto |
| Q-04 | ¿Hay lector de pantalla, audio o teclado físico / switch en algún mercado? | Define el alcance del foco (Audit DS **A-C01**) | Tech |
