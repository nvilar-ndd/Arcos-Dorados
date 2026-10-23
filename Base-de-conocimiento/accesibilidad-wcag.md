# Accesibilidad web — WCAG y estándares W3C

> Documento de referencia para diseño y desarrollo de productos digitales.
> Fuentes: [W3C WAI — Standards/Guidelines](https://www.w3.org/WAI/standards-guidelines/), [WCAG 2.1](https://www.w3.org/TR/WCAG21/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) y [WCAG 3.0 (Working Draft)](https://www.w3.org/TR/wcag-3.0/).
> Las descripciones de cada criterio son síntesis propias en español orientadas a la práctica. Para la redacción normativa exacta, seguir el link al criterio en la especificación.
> Estado relevado: octubre 2026.

**Cómo usar este documento**

- La sección 1 explica el marco general: principios, niveles, versiones y ecosistema de estándares.
- La sección 2 lista los 86 criterios de éxito de WCAG 2.2, organizados por principio y pauta, con su nivel, la versión que los introdujo y su impacto en diseño.
- La sección 3 es un checklist AA para revisiones de diseño.
- La sección 4 resume el borrador de WCAG 3.
- La sección 5 cubre los estándares relacionados y el contexto normativo.

---

## 1. Marco general

### 1.1 Qué es WCAG

Las **Web Content Accessibility Guidelines (WCAG)** son el estándar internacional del W3C para que el contenido digital pueda ser usado por personas con discapacidades:

- visuales (ceguera, baja visión, daltonismo)
- auditivas
- motoras
- cognitivas, de aprendizaje y neurológicas
- del habla
- fotosensibilidad

Mejoran la usabilidad para todos, en especial para personas mayores y para quienes usan dispositivos en condiciones adversas, como sol directo, una sola mano o mala conexión.

Aunque nacen para la web, WCAG también se aplica a **apps nativas, software y documentos** a través de la nota [WCAG2ICT](https://www.w3.org/WAI/standards-guidelines/wcag/non-web-ict/). Esto es relevante para apps mobile y kioscos.

### 1.2 Capas de WCAG 2

| Capa | Qué es | Cantidad (2.2) |
|---|---|---|
| **Principios** | Fundamento: POUR | 4 |
| **Pautas** | Objetivos generales, no testeables | 13 |
| **Criterios de éxito** | Requisitos testeables, con nivel A / AA / AAA | 86 |
| **Técnicas** | Formas suficientes o recomendadas de cumplir, y fallas comunes documentadas (informativas) | Cientos |

### 1.3 Los 4 principios (POUR)

| Principio | Pregunta clave | Ejemplos |
|---|---|---|
| **1. Perceptible** | ¿El usuario puede percibir la información con al menos uno de sus sentidos? | Texto alternativo, subtítulos, contraste, no depender solo del color |
| **2. Operable** | ¿Puede usar todos los controles y navegar? | Teclado completo, sin trampas de foco, tiempo suficiente, sin destellos, áreas táctiles adecuadas |
| **3. Comprensible** | ¿Entiende el contenido y cómo funciona la interfaz? | Lenguaje claro, comportamiento predecible, ayuda para evitar y corregir errores |
| **4. Robusto** | ¿Lo interpretan correctamente navegadores y tecnologías de asistencia? | Semántica correcta, nombre/rol/valor expuestos, mensajes de estado anunciados |

### 1.4 Niveles de conformidad

| Nivel | Significado | Uso típico |
|---|---|---|
| **A** | Mínimo indispensable. Sin él, hay barreras que impiden el uso. | Piso, nunca objetivo final |
| **AA** | Elimina las barreras más significativas con un esfuerzo razonable. | **Objetivo estándar** y el que exige la mayoría de las normativas |
| **AAA** | Máxima accesibilidad. | Aplicar selectivamente. El W3C no recomienda exigirlo como política para sitios completos, porque algunos contenidos no pueden cumplirlo. |

**Reglas de conformidad (WCAG 2):**

- **Acumulativa:** AA implica cumplir todos los criterios A y AA.
- **Páginas completas:** no se puede excluir una parte de la página. Incluye cada variante responsive.
- **Procesos completos:** si un paso de un flujo (por ejemplo, un checkout) no cumple, no cumple ninguna página del flujo.
- **Solo tecnologías con soporte de accesibilidad:** se cuentan únicamente las que funcionan con las tecnologías de asistencia reales.
- **No interferencia:** cuatro criterios aplican a toda la página aunque haya una versión alternativa conforme:
  - 1.4.2 Control del audio
  - 2.1.2 Sin trampas de teclado
  - 2.2.2 Pausar, detener, ocultar
  - 2.3.1 Tres destellos

### 1.5 Versiones

| Versión | Estado | Año | Qué aporta |
|---|---|---|---|
| WCAG 2.0 | Recomendación W3C (sigue vigente) | 2008 | Base: 4 principios, 12 pautas, 61 criterios. También es ISO/IEC 40500. |
| WCAG 2.1 | Recomendación W3C (revisada en mayo 2025) | 2018 | +17 criterios para mobile, baja visión y discapacidad cognitiva. Agrega la pauta 2.5 (Modalidades de entrada). |
| **WCAG 2.2** | **Recomendación W3C — versión vigente** | 2023 | +9 criterios para foco visible, arrastre, tamaño de objetivo, ayuda consistente y autenticación accesible. Marca **4.1.1 Parsing como obsoleto**. |
| WCAG 3.0 | **Working Draft** (último: 10 sep 2026) | En desarrollo | Modelo nuevo basado en resultados y necesidades funcionales. No reemplaza ni depreca WCAG 2. |

**Compatibilidad hacia atrás:** lo que cumple 2.2 cumple 2.1 y 2.0 (salvo 4.1.1, que en 2.2 se considera siempre satisfecho). El W3C recomienda apuntar a la **versión más reciente** aunque una norma cite una anterior.

---

## 2. WCAG 2.2 — Todos los criterios de éxito

**Leyenda:**
- **Nivel:** A / AA / AAA.
- **Desde:** versión que introdujo el criterio. Sin marca significa 2.0.
- **🎨** indica que la decisión recae principalmente en diseño (UI, contenido, interacción). El resto depende sobre todo de implementación, aunque el diseño debe especificarlo en el handoff.

### Principio 1 — PERCEPTIBLE

#### Pauta 1.1 Alternativas textuales
Todo contenido no textual necesita una alternativa en texto que pueda transformarse en braille, voz, símbolos o lenguaje más simple.

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 1.1.1 | Contenido no textual | A | | Imágenes, íconos, gráficos y controles tienen una alternativa textual equivalente. Lo decorativo se oculta a las tecnologías de asistencia. Los CAPTCHA ofrecen alternativas en otras modalidades. | 🎨 Especificar el alt de cada imagen informativa, el nombre de cada ícono-botón y qué es decorativo. |

#### Pauta 1.2 Medios tempodependientes
Alternativas para audio y video.

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 1.2.1 | Solo audio y solo video (grabado) | A | | Audio solo grabado → transcripción. Video sin sonido → transcripción o pista de audio equivalente. | Prever dónde se ubica la transcripción. |
| 1.2.2 | Subtítulos (grabado) | A | | Subtítulos sincronizados para todo el audio de los videos grabados, incluidos sonidos relevantes. | 🎨 Incluir subtítulos en piezas de video de campaña. |
| 1.2.3 | Audiodescripción o alternativa (grabado) | A | | Audiodescripción o alternativa textual completa de lo visual del video. | |
| 1.2.4 | Subtítulos (en directo) | AA | | Subtítulos en contenido en vivo. | |
| 1.2.5 | Audiodescripción (grabado) | AA | | Audiodescripción de la información visual relevante del video. | 🎨 Evitar que información clave aparezca solo en pantalla, sin narrarse. |
| 1.2.6 | Lengua de señas (grabado) | AAA | | Interpretación en lengua de señas del audio. | |
| 1.2.7 | Audiodescripción extendida (grabado) | AAA | | Pausar el video para describir cuando las pausas naturales no alcanzan. | |
| 1.2.8 | Alternativa para medios (grabado) | AAA | | Alternativa textual completa para todo el contenido multimedia. | |
| 1.2.9 | Solo audio (en directo) | AAA | | Alternativa equivalente para audio en vivo. | |

#### Pauta 1.3 Adaptable
El contenido se puede presentar de otras formas sin perder información ni estructura.

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 1.3.1 | Información y relaciones | A | | La estructura visual (títulos, listas, tablas, agrupaciones, labels) también existe en el código. | 🎨 Anotar la jerarquía de headings, landmarks y agrupaciones en el handoff. |
| 1.3.2 | Secuencia significativa | A | | El orden de lectura en el código preserva el sentido. | 🎨 Definir el orden de lectura cuando el layout no es lineal. |
| 1.3.3 | Características sensoriales | A | | Las instrucciones no dependen solo de forma, tamaño, ubicación, orientación o sonido. | 🎨 Evitar instrucciones como "tocá el botón verde de la derecha". |
| 1.3.4 | Orientación | AA | 2.1 | No bloquear la vista en vertical u horizontal salvo que sea esencial. | 🎨 Diseñar ambas orientaciones. |
| 1.3.5 | Identificar el propósito de la entrada | AA | 2.1 | Los campos con datos del usuario declaran su propósito (por ejemplo, `autocomplete`) para permitir el autocompletado. | Especificar el tipo de dato de cada campo. |
| 1.3.6 | Identificar el propósito | AAA | 2.1 | El propósito de componentes, íconos y regiones es determinable por software. | |

#### Pauta 1.4 Distinguible
Facilitar ver y oír el contenido, separando primer plano y fondo.

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 1.4.1 | Uso del color | A | | El color no es el único medio para transmitir información, indicar acciones o distinguir elementos. | 🎨 Acompañar el color con ícono, texto o subrayado (errores, links, estados, gráficos). |
| 1.4.2 | Control del audio | A | | El audio que se reproduce solo por más de 3 s se puede pausar o tiene control de volumen propio. | 🎨 |
| 1.4.3 | Contraste (mínimo) | AA | | Texto: **4.5:1**. Texto grande (≥18 pt, o ≥14 pt en negrita; aprox. 24 px / 18.66 px en negrita): **3:1**. Exentos: logos, texto decorativo y componentes inactivos. | 🎨 Validar los tokens de color del design system. |
| 1.4.4 | Cambio de tamaño del texto | AA | | El texto se puede ampliar al 200 % sin perder contenido ni funcionalidad. | 🎨 Contenedores flexibles, sin alturas fijas en texto. |
| 1.4.5 | Imágenes de texto | AA | | Usar texto real en lugar de imágenes de texto, salvo logos o casos esenciales. | 🎨 Clave en banners y piezas promocionales. |
| 1.4.6 | Contraste (mejorado) | AAA | | Texto 7:1 y texto grande 4.5:1. | 🎨 |
| 1.4.7 | Sonido de fondo bajo o ausente | AAA | | En audio con voz, el fondo se puede quitar o está al menos 20 dB por debajo. | |
| 1.4.8 | Presentación visual | AAA | | En bloques de texto, el usuario puede elegir colores. Además: ancho ≤80 caracteres, sin justificar, interlineado ≥1.5 y ampliación al 200 % sin scroll horizontal. | 🎨 |
| 1.4.9 | Imágenes de texto (sin excepción) | AAA | | Imágenes de texto solo si son decorativas o esenciales. | 🎨 |
| 1.4.10 | Reajuste del contenido (reflow) | AA | 2.1 | El contenido funciona a **320 px CSS de ancho** (equivale a 1280 px al 400 %) sin scroll en dos dimensiones. Exentos: mapas, tablas de datos, video y similares. | 🎨 Diseñar responsive real. |
| 1.4.11 | Contraste no textual | AA | 2.1 | Bordes de inputs, íconos, estados de componentes y partes de gráficos necesarias para entenderlos: **3:1** contra el color adyacente. | 🎨 Revisar bordes de inputs, checkboxes, íconos y gráficos. |
| 1.4.12 | Espaciado del texto | AA | 2.1 | No se pierde contenido si el usuario fuerza: interlineado 1.5, espacio entre párrafos 2×, letras 0.12× y palabras 0.16×. | 🎨 Evitar contenedores de texto con altura fija. |
| 1.4.13 | Contenido con hover o foco | AA | 2.1 | Tooltips y popovers se pueden **descartar** (Esc), permiten **mover el puntero encima** y son **persistentes** hasta que el usuario los cierra. | 🎨 Definir el comportamiento de tooltips en el DS. |

### Principio 2 — OPERABLE

#### Pauta 2.1 Accesible por teclado

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 2.1.1 | Teclado | A | | Toda la funcionalidad se puede usar con teclado, sin tiempos específicos entre teclas. | 🎨 Prever la interacción por teclado de componentes custom (carruseles, sliders, drag). |
| 2.1.2 | Sin trampas de teclado | A | | El foco siempre puede salir de un componente. Si requiere teclas especiales, se informa. | Modales, embeds y players. |
| 2.1.3 | Teclado (sin excepción) | AAA | | Todo operable por teclado, sin excepciones. | |
| 2.1.4 | Atajos de teclado con caracteres | A | 2.1 | Los atajos de una sola tecla se pueden desactivar, reasignar o solo se activan con el foco en el componente. | |

#### Pauta 2.2 Tiempo suficiente

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 2.2.1 | Tiempo ajustable | A | | Los límites de tiempo se pueden desactivar, ajustar o extender (aviso con al menos 20 s para extender). Exentos: tiempo real, esencial o más de 20 h. | 🎨 Sesiones, tiempo para completar un pedido, kioscos. |
| 2.2.2 | Pausar, detener, ocultar | A | | Lo que se mueve, parpadea o se actualiza solo por más de 5 s se puede pausar, detener u ocultar. | 🎨 Carruseles automáticos con botón de pausa. |
| 2.2.3 | Sin tiempo | AAA | | El tiempo no es parte esencial de la actividad. | |
| 2.2.4 | Interrupciones | AAA | | Las interrupciones se pueden posponer o suprimir, salvo emergencias. | 🎨 |
| 2.2.5 | Reautenticación | AAA | | Si expira la sesión, se continúa sin perder datos tras volver a loguearse. | 🎨 |
| 2.2.6 | Tiempos de espera | AAA | 2.1 | Se avisa cuánta inactividad causa pérdida de datos, salvo que se conserven más de 20 h. | 🎨 |

#### Pauta 2.3 Convulsiones y reacciones físicas

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 2.3.1 | Umbral de tres destellos o menos | A | | Nada destella más de 3 veces por segundo, o queda bajo los umbrales de destello general y de rojo. | 🎨 Animaciones de campaña y video. |
| 2.3.2 | Tres destellos | AAA | | Nada destella más de 3 veces por segundo, sin excepción. | 🎨 |
| 2.3.3 | Animación por interacciones | AAA | 2.1 | Las animaciones de movimiento disparadas por la interacción se pueden desactivar (respetar `prefers-reduced-motion`). | 🎨 Definir la versión con movimiento reducido. |

#### Pauta 2.4 Navegable

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 2.4.1 | Evitar bloques | A | | Mecanismo para saltar bloques repetidos ("saltar al contenido", landmarks). | |
| 2.4.2 | Página titulada | A | | Cada página o vista tiene un título descriptivo. | 🎨 |
| 2.4.3 | Orden del foco | A | | El orden de tabulación preserva el sentido y la operabilidad. | 🎨 Anotar el orden de foco en modales y layouts complejos. |
| 2.4.4 | Propósito de los enlaces (en contexto) | A | | El propósito del link se entiende por su texto o su contexto. | 🎨 Evitar "ver más" o "click acá" sin contexto. |
| 2.4.5 | Múltiples vías | AA | | Más de una forma de llegar a una página (menú, buscador, mapa del sitio), excepto pasos de un proceso. | 🎨 |
| 2.4.6 | Encabezados y etiquetas | AA | | Headings y labels describen el tema o el propósito. | 🎨 |
| 2.4.7 | Foco visible | AA | | El indicador de foco de teclado es visible. | 🎨 Nunca `outline: none` sin reemplazo. |
| 2.4.8 | Ubicación | AAA | | Información de dónde está el usuario dentro del sitio (breadcrumbs). | 🎨 |
| 2.4.9 | Propósito de los enlaces (solo enlace) | AAA | | El propósito se entiende solo con el texto del link. | 🎨 |
| 2.4.10 | Encabezados de sección | AAA | | El contenido se organiza con encabezados de sección. | 🎨 |
| 2.4.11 | Foco no oculto (mínimo) | AA | **2.2** | El elemento con foco no queda **totalmente** tapado por contenido del autor (headers sticky, banners de cookies, barras inferiores). | 🎨 Cuidado con headers fijos y bottom sheets. |
| 2.4.12 | Foco no oculto (mejorado) | AAA | **2.2** | Ninguna parte del elemento con foco queda tapada. | 🎨 |
| 2.4.13 | Apariencia del foco | AAA | **2.2** | El indicador de foco tiene un área equivalente a un perímetro de al menos 2 px y un contraste de 3:1 entre estado enfocado y no enfocado. | 🎨 Definir el token de foco en el DS. |

#### Pauta 2.5 Modalidades de entrada (2.1)

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 2.5.1 | Gestos del puntero | A | 2.1 | Lo que usa gestos multipunto o con trayectoria (pinch, swipe) también funciona con un solo toque simple. | 🎨 Botones alternativos a los gestos (por ejemplo, flechas en carruseles, +/− en mapas). |
| 2.5.2 | Cancelación del puntero | A | 2.1 | Las acciones se ejecutan al soltar (up-event) o se pueden abortar o deshacer. | 🎨 |
| 2.5.3 | Etiqueta en el nombre | A | 2.1 | El nombre accesible contiene el texto visible del control (clave para el control por voz). | 🎨 El label visible y el `aria-label` deben coincidir. |
| 2.5.4 | Activación por movimiento | A | 2.1 | Lo que se activa sacudiendo o inclinando el dispositivo también tiene un control en la UI y se puede desactivar. | 🎨 Por ejemplo, "sacudí para…" en promociones. |
| 2.5.5 | Tamaño del objetivo (mejorado) | AAA | 2.1 | Objetivos de al menos **44×44 px CSS**. | 🎨 |
| 2.5.6 | Mecanismos de entrada concurrentes | AAA | 2.1 | No restringir el uso de modalidades de entrada (por ejemplo, teclado en mobile). | |
| 2.5.7 | Movimientos de arrastre | AA | **2.2** | Todo lo que se hace arrastrando también se puede hacer con un toque simple, sin arrastrar. | 🎨 Alternativas en reordenar listas, sliders y drag & drop. |
| 2.5.8 | Tamaño del objetivo (mínimo) | AA | **2.2** | Objetivos de al menos **24×24 px CSS**, o espaciados de modo que un círculo de 24 px centrado en cada uno no toque a otro. Exentos: links inline, controles nativos sin modificar, casos esenciales y cuando hay un equivalente que cumple. | 🎨 Las guías de plataforma (44 pt iOS / 48 dp Android) siguen siendo mejor práctica. |

### Principio 3 — COMPRENSIBLE

#### Pauta 3.1 Legible

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 3.1.1 | Idioma de la página | A | | El idioma principal está declarado (`lang`). | Clave en productos multimercado (es-AR, pt-BR, es-ES). |
| 3.1.2 | Idioma de las partes | AA | | Se marcan los fragmentos en otro idioma. | |
| 3.1.3 | Palabras inusuales | AAA | | Mecanismo para definir jerga, modismos y términos técnicos. | 🎨 |
| 3.1.4 | Abreviaturas | AAA | | Mecanismo para expandir abreviaturas. | 🎨 |
| 3.1.5 | Nivel de lectura | AAA | | Si el texto exige más que el nivel de secundaria inferior, se ofrece una versión o un resumen más simple. | 🎨 |
| 3.1.6 | Pronunciación | AAA | | Mecanismo para indicar la pronunciación cuando es ambigua. | |

#### Pauta 3.2 Predecible

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 3.2.1 | Al recibir el foco | A | | Recibir foco no provoca cambios de contexto (navegar, abrir ventanas, enviar). | 🎨 |
| 3.2.2 | Al recibir entradas | A | | Cambiar un valor no provoca cambios de contexto sin aviso previo. | 🎨 Evitar selects que navegan solos. |
| 3.2.3 | Navegación consistente | AA | | La navegación repetida mantiene el mismo orden relativo en todas las páginas. | 🎨 |
| 3.2.4 | Identificación consistente | AA | | Los componentes con la misma función se identifican igual. | 🎨 Mismo ícono y label para la misma acción. |
| 3.2.5 | Cambio a petición | AAA | | Los cambios de contexto solo ocurren a pedido del usuario. | 🎨 |
| 3.2.6 | Ayuda consistente | A | **2.2** | Si hay mecanismos de ayuda (contacto, chat, FAQ), aparecen en el mismo orden relativo en todas las páginas. | 🎨 |

#### Pauta 3.3 Asistencia a la entrada de datos

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| 3.3.1 | Identificación de errores | A | | Los errores detectados se identifican y describen en texto. | 🎨 Mensaje de error textual, no solo un borde rojo. |
| 3.3.2 | Etiquetas o instrucciones | A | | Los campos tienen labels o instrucciones. | 🎨 El placeholder no reemplaza al label. |
| 3.3.3 | Sugerencias ante errores | AA | | Si se sabe cómo corregir el error, se sugiere la corrección. | 🎨 Por ejemplo: "La fecha debe tener formato DD/MM/AAAA". |
| 3.3.4 | Prevención de errores (legales, financieros, datos) | AA | | En transacciones, compromisos legales o borrado de datos: la acción es reversible, se verifica o se confirma antes de enviar. | 🎨 Pantalla de revisión antes de pagar. |
| 3.3.5 | Ayuda | AAA | | Ayuda contextual disponible. | 🎨 |
| 3.3.6 | Prevención de errores (todos) | AAA | | Lo mismo que 3.3.4, aplicado a cualquier envío de datos. | 🎨 |
| 3.3.7 | Entrada redundante | A | **2.2** | No se pide reingresar información ya dada en el mismo proceso: se autocompleta o se puede seleccionar. Exentos: casos esenciales, seguridad, dato desactualizado. | 🎨 Por ejemplo, "Usar la misma dirección de facturación". |
| 3.3.8 | Autenticación accesible (mínimo) | AA | **2.2** | El login no exige pruebas cognitivas (recordar, transcribir, resolver) sin alternativa. Se permite pegar contraseñas, usar gestores, passkeys o magic links. Los CAPTCHA de reconocimiento de objetos están permitidos en este nivel. | 🎨 No bloquear el pegado en campos de contraseña u OTP. |
| 3.3.9 | Autenticación accesible (mejorado) | AAA | **2.2** | Igual que 3.3.8, sin excepción para el reconocimiento de objetos ni para contenido propio del usuario. | 🎨 |

### Principio 4 — ROBUSTO

#### Pauta 4.1 Compatible

| # | Criterio | Nivel | Desde | Qué pide | En diseño |
|---|---|---|---|---|---|
| ~~4.1.1~~ | ~~Procesamiento (parsing)~~ | — | — | **Obsoleto en 2.2.** En 2.1 se considera siempre cumplido para HTML/XML. Los problemas que cubría se reportan bajo 1.3.1 o 4.1.2. | — |
| 4.1.2 | Nombre, función, valor | A | | Todo componente de UI expone su nombre, rol, estados y valores a las tecnologías de asistencia, y notifica sus cambios. | 🎨 Especificar los estados (expandido, seleccionado, deshabilitado) de los componentes custom. |
| 4.1.3 | Mensajes de estado | AA | 2.1 | Los mensajes de estado (éxito, error, progreso, "agregado al carrito") se anuncian sin mover el foco (`role="status"`, `aria-live`). | 🎨 Identificar toasts y mensajes que deben anunciarse. |

### Resumen de cantidades (WCAG 2.2)

| Nivel | Criterios | Acumulado para cumplir |
|---|---|---|
| A | 31 | 31 |
| AA | 24 | **55** |
| AAA | 31 | 86 |

---

## 3. Checklist AA rápido para revisiones de diseño

**Color y contraste**
- [ ] Texto normal ≥ 4.5:1; texto grande ≥ 3:1 (1.4.3)
- [ ] Bordes de inputs, íconos funcionales, estados y gráficos ≥ 3:1 (1.4.11)
- [ ] La información nunca depende solo del color (1.4.1)

**Tipografía y layout**
- [ ] Funciona a 200 % de zoom de texto y a 320 px de ancho (1.4.4, 1.4.10)
- [ ] Tolera mayor espaciado de texto sin cortar contenido (1.4.12)
- [ ] Texto real, no imágenes de texto, en banners y promociones (1.4.5)
- [ ] Funciona en vertical y horizontal (1.3.4)

**Interacción**
- [ ] Todo es operable por teclado y el orden de foco es lógico (2.1.1, 2.4.3)
- [ ] Indicador de foco visible y no tapado por elementos fijos (2.4.7, 2.4.11)
- [ ] Objetivos táctiles ≥ 24×24 px; ideal 44/48 (2.5.8)
- [ ] Alternativas de toque simple para gestos y arrastre (2.5.1, 2.5.7)
- [ ] El label visible coincide con el nombre accesible (2.5.3)
- [ ] Tooltips descartables, persistentes y "hoverables" (1.4.13)
- [ ] Carruseles y animaciones automáticas se pueden pausar (2.2.2)
- [ ] Nada destella más de 3 veces por segundo (2.3.1)
- [ ] Los límites de tiempo se pueden extender (2.2.1)

**Contenido y formularios**
- [ ] Alt definido para imágenes informativas y nombres para íconos-botón (1.1.1)
- [ ] Jerarquía de headings y labels descriptivos (1.3.1, 2.4.6)
- [ ] Links con texto que se entiende (2.4.4)
- [ ] Labels visibles en todos los campos (3.3.2)
- [ ] Errores en texto, junto al campo, con sugerencia de corrección (3.3.1, 3.3.3)
- [ ] Revisión o confirmación antes de pagos y acciones irreversibles (3.3.4)
- [ ] No pedir dos veces el mismo dato en un flujo (3.3.7)
- [ ] Login sin pruebas cognitivas; se permite pegar y usar gestores de contraseñas (3.3.8)
- [ ] La ayuda está en el mismo lugar en todas las pantallas (3.2.6)
- [ ] Navegación e identificación consistentes (3.2.3, 3.2.4)

**Multimedia**
- [ ] Subtítulos en videos (1.2.2)
- [ ] Audiodescripción o alternativa para información solo visual (1.2.3, 1.2.5)

**Handoff a desarrollo**
- [ ] Orden de lectura y de foco anotados
- [ ] Roles y estados de los componentes custom
- [ ] Mensajes de estado que deben anunciarse (4.1.3)
- [ ] Propósito de los campos para `autocomplete` (1.3.5)
- [ ] Idioma de cada mercado declarado (3.1.1)

---

## 4. WCAG 3.0 — Borrador en desarrollo

**Estado:** W3C Working Draft del 10 de septiembre de 2026. El propio documento indica que todavía le quedan **varios años de trabajo** y que no debe citarse como norma definitiva. Los requisitos van a cambiar: se agregarán, combinarán o eliminarán.

**Nombre:** pasa a llamarse *W3C Accessibility Guidelines* (mantiene la sigla WCAG) porque amplía su alcance más allá del contenido web.

### 4.1 Relación con WCAG 2

- **No reemplaza ni depreca WCAG 2.** El W3C anticipa que WCAG 2 seguirá exigido por las normativas durante mucho tiempo.
- Cumplir **WCAG 2.2 AA** debería dejar cerca del nivel mínimo de WCAG 3, aunque harán falta ajustes por las pruebas adicionales y el nuevo modelo de puntuación.
- Incorpora y extiende parte de **ATAG 2.0** (herramientas de autor) y **UAAG 2.0** (agentes de usuario).
- El W3C prometió materiales de transición y mapeo para quienes migren.

### 4.2 Diferencias principales

| Aspecto | WCAG 2.x | WCAG 3 (borrador) |
|---|---|---|
| Enfoque | Criterios técnicos testeables | **Necesidades funcionales** del usuario y guías escritas como resultados |
| Estructura | Principios → Pautas → Criterios → Técnicas | Guías → **Requisitos** (core / complementarios) y **Aserciones** → **Métodos** por tecnología |
| Alcance | Contenido web (y no web vía WCAG2ICT) | Web, apps, wearables, IoT, **XR/realidad virtual y aumentada**, voz, herramientas de autor, agentes de usuario |
| Conformidad | Niveles A / AA / AAA, todo o nada por página | Modelo nuevo con **niveles de reporte** (tiers) basados en requisitos core, complementarios y aserciones |
| Procesos | Solo lo verificable en el producto | Suma **aserciones**: declaraciones públicas de la organización sobre procesos (guías de estilo, testing con usuarios con discapacidad, revisiones) |
| Granularidad | ~86 criterios | Muchos más requisitos, más granulares, con formato "aplica cuando / excepto cuando" |
| Cognición y lenguaje | Cobertura limitada, sobre todo AAA | Mucho más desarrollada (lenguaje claro, tareas cognitivas, engaño) |
| Contraste | Fórmula de luminancia relativa (4.5:1, etc.) | **Algoritmo a definir**, probablemente con factores de tamaño y peso tipográfico |
| Actualización | Versiones puntuales (2.1, 2.2) | Pensado para actualizarse con más frecuencia |

### 4.3 Tipos de provisiones

- **Requisito core:** necesario para la conformidad base.
- **Requisito complementario (supplemental):** va más allá del mínimo y suma a niveles superiores de reporte.
- **Aserción:** declaración de la organización sobre un proceso (por ejemplo, "tenemos una guía de estilo de subtítulos" o "hicimos testing de usabilidad con usuarios sordos"). Incluye qué debe publicarse (quién la hace, fechas) y qué conviene documentar internamente.

**Estados de madurez de cada sección:** Placeholder → Exploratory → Developing → Refining → Mature. Este borrador publica solo lo que alcanzó *Developing*. Lo exploratorio está en el [Editor's Draft](https://w3c.github.io/wcag3/guidelines/).

### 4.4 Grupos de guías del borrador

| Grupo | Guías | Novedades destacadas respecto de WCAG 2 |
|---|---|---|
| **Imágenes y medios** | Alternativas de imagen · Leyendas de figuras · Alternativas no textuales · Transcripciones · Subtítulos · Audiodescripciones · Lengua de señas · Sentido único · Reproductor accesible | Subtítulos ajustables y centrados en entornos 360°; indicación de dirección del sonido en XR; no depender de la profundidad visual ni del audio espacial |
| **Texto y redacción** | Apariencia del texto · Texto a voz · Lenguaje claro | Valores mínimos y mejorados de legibilidad (márgenes, largo de línea, tipografía); resúmenes para textos largos (300+ palabras); explicar abreviaturas y lenguaje no literal; evitar cláusulas anidadas y palabras innecesarias; contexto en fechas, horas y temperaturas |
| **Componentes interactivos** | Apariencia del foco de teclado · Apariencia del foco del puntero · Navegación del contenido · Comportamiento esperado · Información del control | Usar patrones convencionales; ubicación consistente de controles; indicador de activación en touch y VR |
| **Entrada y operación** | Teclado · Esfuerzo físico o cognitivo con teclado · Puntero · Voz · Operación · Autenticación | No depender de voz, movimientos corporales, eye tracking, presión ni velocidad del puntero; no depender de biometría ni de identificación por voz |
| **Manejo de errores** | Corregir errores · Prevenir errores | Errores indicados de múltiples formas, persistentes, asociados y ubicados junto al campo; notificación del estado del envío |
| **Animación y movimiento** | Evitar daño físico | No hay movimiento visual por defecto; advertencias de contenido; estimulación háptica y cambios de audio ajustables |
| **Layout** | Layouts reconocibles · Orientación del usuario · Estructura · Sin obstrucciones | Listar todos los pasos e indicar el paso actual; volver al inicio de forma prominente; overlays descartables |
| **Consistencia entre vistas** | Consistencia | Orden estructural, de navegación y labels consistentes |
| **Proceso y tareas** | Evitar tareas cognitivas excluyentes · Tiempo adecuado · **Evitar engaño** · Retener información · Completar tareas · Pasos innecesarios | Preselecciones visibles y revisión de mensajes engañosos (dark patterns); guardar progreso; permitir volver atrás; informar requisitos al inicio |
| **Política y protección** | Riesgo · **Algoritmos** | Explicar consecuencias antes de aceptar; datasets inclusivos; algoritmos que no perjudiquen a personas con discapacidad |
| **Ayuda y feedback** | Ayuda disponible · Feedback | Ayuda contextual; explicar por qué un control está deshabilitado; mecanismo para dar feedback |
| **Control del usuario** | Control de tecnologías de asistencia · Texto de control · Viewport ajustable · Control de medios · Cambios de contenido | Respetar la configuración del usuario; notificaciones ajustables; capítulos en medios; notificar cambios de contenido y de foco |

**Implicancias prácticas hoy:**

- Seguir apuntando a **WCAG 2.2 AA** como objetivo y requisito contractual.
- Usar WCAG 3 como **dirección de diseño**: lenguaje claro, evitar dark patterns, consistencia, guardar progreso, controles explicados, XR y voz.
- Empezar a documentar procesos (guías de estilo, testing con usuarios con discapacidad), porque las aserciones los van a valorar.

---

## 5. Ecosistema de estándares W3C relacionados

| Estándar | Estado | Enfoque | Aplica a |
|---|---|---|---|
| **WCAG 2.2** | Recomendación | Accesibilidad del contenido web y TIC | Sitios, apps web, documentos; apps nativas vía WCAG2ICT |
| **WCAG2ICT** | Nota del grupo de trabajo | Cómo aplicar WCAG a TIC no web | Apps nativas, software, documentos, kioscos |
| **ATAG 2.0** | Recomendación | Herramientas de autor: que sean accesibles y que ayuden a producir contenido accesible | CMS, editores, LMS, herramientas no-code, redes sociales |
| **UAAG 2.0** | Nota del grupo de trabajo | Agentes de usuario | Navegadores, extensiones, reproductores multimedia |
| **WAI-ARIA 1.2** | Recomendación | Roles, estados y propiedades para exponer la semántica de interfaces dinámicas a las tecnologías de asistencia. Incluye mapeos de API y módulos (Graphics, DPUB). | Componentes custom y apps dinámicas |
| **ARIA Authoring Practices (APG)** | Guía | Patrones de interacción y teclado recomendados para widgets | Equipos de DS y front-end |
| **ACT Rules** | Recomendación (formato) | Reglas estandarizadas para testear la conformidad | Herramientas de testing automatizado y manual |
| **EARL** | Formato | Lenguaje legible por máquina para reportar resultados de pruebas | Herramientas de auditoría |
| **WCAG-EM** | Nota | Metodología para evaluar la conformidad de un sitio | Auditorías |
| **WAI-Adapt** | En desarrollo | Personalización del contenido según las necesidades del usuario | Accesibilidad cognitiva |
| **Pronunciation** | En desarrollo | Pronunciación correcta en lectores de pantalla y TTS | Contenido leído por voz |
| **WebVTT / TTML** | Recomendaciones | Formatos de subtítulos y descripciones sincronizadas | Video y audio |
| **WCAG 3.0** | Working Draft | Modelo nuevo y más amplio | Web, apps, XR, voz, herramientas |

**Regla práctica ARIA:** usar HTML nativo siempre que sea posible. ARIA no agrega comportamiento, solo semántica. Un ARIA mal usado empeora la accesibilidad.

---

## 6. Contexto normativo (referencia — verificar vigencia)

La mayoría de las leyes exigen **WCAG nivel AA** (2.0, 2.1 o 2.2 según la norma), directamente o a través de estándares que lo incorporan.

| Jurisdicción | Norma | Referencia técnica |
|---|---|---|
| **Unión Europea** | Acta Europea de Accesibilidad (EAA, Directiva 2019/882), aplicable desde junio 2025 a productos y servicios privados, incluidos e-commerce, banca y transporte; Directiva 2016/2102 para el sector público | Norma armonizada **EN 301 549**, que incorpora WCAG 2.1 AA para web y apps |
| **España** | Real Decreto 1112/2018 (sector público) y la ley de transposición de la EAA (sector privado) | UNE-EN 301 549 → WCAG 2.1 AA |
| **Argentina** | Ley 26.653 de accesibilidad de la información en páginas web y su reglamentación | WCAG 2.0 AA, según la resolución técnica de la ONTI |
| **Brasil** | Lei Brasileira de Inclusão (Lei 13.146/2015); eMAG para gobierno | WCAG como base técnica |
| **EE. UU.** | ADA (jurisprudencia), Section 508 y la regla DOJ Title II (2024) para gobiernos estatales y locales | WCAG 2.0 AA (508) / WCAG 2.1 AA (Title II) |

> El alcance, los plazos y las sanciones varían. Antes de comprometer un nivel en un contrato o pliego, validar con el área legal la versión exacta exigida en cada mercado. Ver también la [lista de políticas del W3C](https://www.w3.org/WAI/policies/).

---

## 7. Recursos oficiales

- [Resumen de estándares WAI](https://www.w3.org/WAI/standards-guidelines/)
- [WCAG 2.2 — especificación](https://www.w3.org/TR/WCAG22/)
- [Qué hay de nuevo en 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) · [Qué hay de nuevo en 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/)
- [How to Meet WCAG — Quick Reference (filtrable)](https://www.w3.org/WAI/WCAG22/quickref/)
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/): intención y ejemplos de cada criterio
- [Traducciones oficiales de WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/translations/)
- [WCAG 3 — Introducción](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) · [Working Draft](https://www.w3.org/TR/wcag-3.0/) · [Editor's Draft](https://w3c.github.io/wcag3/guidelines/)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) · [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WCAG2ICT — aplicar WCAG a apps nativas y software](https://www.w3.org/WAI/standards-guidelines/wcag/non-web-ict/)
- [WCAG-EM — metodología de evaluación](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)
- [Accesibilidad cognitiva en W3C](https://www.w3.org/WAI/cognitive/) · [Accesibilidad mobile en W3C](https://www.w3.org/WAI/standards-guidelines/mobile/)

---

*Síntesis propia basada en documentos del W3C Web Accessibility Initiative (© W3C). Para conformidad formal, siempre remitirse al texto normativo de la especificación.*