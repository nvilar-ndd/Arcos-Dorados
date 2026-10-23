# Leyes de UX — Referencia de trabajo

> Documento de referencia con los 30 principios listados en [Laws of UX](https://lawsofux.com/) (Jon Yablonski).
> Las descripciones son redacción propia basada en la literatura de psicología cognitiva y HCI de cada principio; el sitio original tiene licencia CC BY-NC-ND 4.0, así que para el texto canónico y las fuentes completas seguí el link de cada ley.

**Cómo usar este documento:** cada ley tiene la misma estructura — *Qué dice*, *Origen*, *Cómo aplicarla*, *Ejemplo* y *Señales de que se está violando* — para poder citarla en críticas de diseño, auditorías heurísticas o justificaciones ante stakeholders.

---

## Índice por categoría

| Categoría | Leyes |
|---|---|
| **Percepción (Gestalt)** | Región Común · Proximidad · Prägnanz · Similitud · Conexión Uniforme · Von Restorff |
| **Memoria y cognición** | Carga Cognitiva · Memoria de Trabajo · Ley de Miller · Chunking · Efecto de Posición Serial · Efecto Zeigarnik · Atención Selectiva · Sesgo Cognitivo · Modelo Mental |
| **Decisión** | Ley de Hick · Sobrecarga de Elección · Navaja de Occam · Principio de Pareto |
| **Interacción y motricidad** | Ley de Fitts · Umbral de Doherty · Ley de Postel · Ley de Tesler |
| **Comportamiento y motivación** | Ley de Jakob · Paradoja del Usuario Activo · Efecto Gradiente de Meta · Ley de Parkinson · Flow |
| **Percepción emocional / experiencia** | Efecto Estética-Usabilidad · Regla Peak-End |

---

## 1. Efecto Estética-Usabilidad (Aesthetic-Usability Effect)

**Qué dice:** Las personas tienden a percibir una interfaz visualmente atractiva como más fácil de usar, aunque no lo sea objetivamente.

**Origen:** Estudio de Masaaki Kurosu y Kaori Kashimura (Hitachi, 1995) sobre interfaces de cajeros automáticos.

**Cómo aplicarla:**
- Invertir en calidad visual porque genera tolerancia a fricciones menores.
- No confiar en que la estética tape problemas reales: puede ocultarlos en tests de usabilidad.
- En testing, separar lo que el usuario *dice* (satisfacción) de lo que *hace* (éxito de tarea).

**Ejemplo:** Un rediseño visual sube el CSAT aunque el flujo de checkout sea el mismo.

**Señales de violación:** Usuarios que culpan a la app por errores que son suyos; percepción de "app vieja" aun con buena funcionalidad.

🔗 https://lawsofux.com/aesthetic-usability-effect/

---

## 2. Sobrecarga de Elección (Choice Overload)

**Qué dice:** Cuantas más opciones se presentan, más difícil y menos satisfactoria se vuelve la decisión; a veces lleva a no decidir. También llamada paradoja de la elección.

**Origen:** Experimento de las mermeladas de Sheena Iyengar y Mark Lepper (2000); popularizado por Barry Schwartz (*The Paradox of Choice*, 2004).

**Cómo aplicarla:**
- Reducir opciones visibles; destacar una recomendada.
- Permitir comparar lado a lado cuando las opciones son inevitables.
- Usar filtros y búsqueda para catálogos grandes.

**Ejemplo:** Planes de suscripción con 3 tiers y uno marcado como "más popular".

**Señales de violación:** Alto abandono en pantallas de selección; tiempos largos sin acción.

🔗 https://lawsofux.com/choice-overload/

---

## 3. Chunking

**Qué dice:** Agrupar información en unidades significativas facilita procesarla y recordarla.

**Origen:** George A. Miller (1956), en el mismo trabajo que da origen a la Ley de Miller.

**Cómo aplicarla:**
- Formatear datos largos en grupos (teléfonos, tarjetas, códigos).
- Dividir contenido en secciones con jerarquía visual clara.
- Partir formularios largos en pasos.

**Ejemplo:** `4111 1111 1111 1111` en vez de `4111111111111111`.

**Señales de violación:** Muros de texto; usuarios que releen para encontrar datos.

🔗 https://lawsofux.com/chunking/

---

## 4. Sesgo Cognitivo (Cognitive Bias)

**Qué dice:** Errores sistemáticos de razonamiento que distorsionan cómo percibimos y decidimos; son atajos mentales (heurísticas) que a veces fallan.

**Origen:** Amos Tversky y Daniel Kahneman (1972 en adelante).

**Cómo aplicarla:**
- Reconocer los propios sesgos de diseño (confirmación, falso consenso) al interpretar research.
- Entender sesgos del usuario (anclaje, aversión a la pérdida, efecto default) para diseñar decisiones claras.
- Usar ese conocimiento de forma ética: no para dark patterns.

**Ejemplo:** El precio tachado ancla la percepción de valor del precio promocional.

**Señales de violación:** Decisiones de producto basadas solo en intuición del equipo; research que "confirma" lo que ya se quería hacer.

🔗 https://lawsofux.com/cognitive-bias/

---

## 5. Carga Cognitiva (Cognitive Load)

**Qué dice:** La cantidad de recursos mentales que requiere entender y usar una interfaz. Cuando supera la capacidad disponible, el rendimiento cae.

**Origen:** Teoría de la carga cognitiva de John Sweller (1988). Distingue carga *intrínseca* (propia de la tarea) y *extrínseca* (generada por el diseño).

**Cómo aplicarla:**
- Eliminar la carga extrínseca: ruido visual, decisiones innecesarias, texto redundante.
- Apoyarse en patrones conocidos.
- Descargar trabajo del usuario al sistema (autocompletar, defaults inteligentes).

**Ejemplo:** Precompletar la dirección a partir del código postal.

**Señales de violación:** Errores frecuentes, abandono, usuarios que piden ayuda para tareas simples.

🔗 https://lawsofux.com/cognitive-load/

---

## 6. Umbral de Doherty (Doherty Threshold)

**Qué dice:** La productividad se dispara cuando sistema y usuario interactúan a un ritmo menor a ~400 ms, de modo que ninguno espera al otro.

**Origen:** Walter J. Doherty y Ahrvind J. Thadani, IBM Systems Journal (1982).

**Cómo aplicarla:**
- Dar feedback visual en menos de 400 ms aunque el proceso tarde más.
- Usar skeletons, UI optimista y animaciones para cubrir latencia percibida.
- Mostrar barras de progreso en procesos largos.

**Ejemplo:** Un "like" que se marca al instante y sincroniza con el servidor en segundo plano.

**Señales de violación:** Taps repetidos sobre el mismo botón; usuarios que creen que la app se colgó.

🔗 https://lawsofux.com/doherty-threshold/

---

## 7. Ley de Fitts (Fitts's Law)

**Qué dice:** El tiempo para alcanzar un objetivo depende de la distancia hasta él y de su tamaño: más grande y más cerca = más rápido.

**Origen:** Paul Fitts (1954).

**Cómo aplicarla:**
- Áreas táctiles amplias (mínimo ~44×44 pt iOS / 48×48 dp Android).
- Acciones principales cerca de donde está la mano o el cursor (zona del pulgar en mobile).
- Separar suficientemente acciones destructivas de las frecuentes.

**Ejemplo:** CTA principal a ancho completo en la parte inferior de la pantalla mobile.

**Señales de violación:** Taps errados, "fat finger", botones chicos en esquinas superiores.

🔗 https://lawsofux.com/fittss-law/

---

## 8. Flow

**Qué dice:** Estado mental de inmersión total en una actividad, con foco energizado y disfrute. Ocurre cuando el desafío está equilibrado con la habilidad.

**Origen:** Mihaly Csikszentmihalyi (1975, *Flow*, 1990).

**Cómo aplicarla:**
- Equilibrar dificultad: muy fácil aburre, muy difícil frustra.
- Feedback inmediato y claro sobre el progreso.
- Eliminar interrupciones e impedimentos innecesarios en tareas core.

**Ejemplo:** Editores que ocultan la UI secundaria mientras se escribe.

**Señales de violación:** Pop-ups que cortan la tarea; fricciones que sacan al usuario del flujo.

🔗 https://lawsofux.com/flow/

---

## 9. Efecto Gradiente de Meta (Goal-Gradient Effect)

**Qué dice:** La motivación para alcanzar un objetivo aumenta a medida que la persona se acerca a él.

**Origen:** Clark Hull (1932), con ratas; replicado en consumidores por Ran Kivetz et al. (2006) con tarjetas de fidelidad.

**Cómo aplicarla:**
- Mostrar progreso claramente.
- Dar avance inicial artificial (ej. arrancar con 2 de 10 sellos ya cargados).
- Indicar cuánto falta, no solo cuánto se hizo.

**Ejemplo:** Barra de "completá tu perfil — 80%".

**Señales de violación:** Procesos largos sin indicador de avance; abandono a mitad de onboarding.

🔗 https://lawsofux.com/goal-gradient-effect/

---

## 10. Ley de Hick (Hick's Law)

**Qué dice:** El tiempo de decisión aumenta con la cantidad y complejidad de las opciones.

**Origen:** William Edmund Hick y Ray Hyman (1952).

**Cómo aplicarla:**
- Minimizar opciones cuando el tiempo de respuesta es crítico.
- Dividir tareas complejas en pasos más chicos.
- Destacar opciones recomendadas; usar onboarding progresivo.
- Cuidado con simplificar al punto de volverse abstracto.

**Ejemplo:** Menú de navegación con 5 ítems y el resto en "Más".

**Señales de violación:** Menús enormes, pantallas con muchos CTAs del mismo peso.

🔗 https://lawsofux.com/hicks-law/

---

## 11. Ley de Jakob (Jakob's Law)

**Qué dice:** Los usuarios pasan la mayor parte del tiempo en *otros* productos, así que esperan que el tuyo funcione igual que los que ya conocen.

**Origen:** Jakob Nielsen (2000).

**Cómo aplicarla:**
- Usar convenciones establecidas para patrones comunes (carrito, búsqueda, login).
- Innovar donde aporta valor diferencial, no en lo básico.
- En rediseños, dar transición gradual o permitir volver a la versión anterior temporalmente.

**Ejemplo:** Ícono de carrito arriba a la derecha en e-commerce.

**Señales de violación:** Usuarios que no encuentran funciones "obvias"; quejas tras un rediseño.

🔗 https://lawsofux.com/jakobs-law/

---

## 12. Ley de Región Común (Law of Common Region)

**Qué dice:** Los elementos dentro de un área con límite definido se perciben como grupo.

**Origen:** Psicología Gestalt; formalizado por Stephen Palmer (1992).

**Cómo aplicarla:**
- Usar cards, bordes o fondos para agrupar contenido relacionado.
- Separar secciones con contenedores en vez de solo espacios cuando hay ambigüedad.

**Ejemplo:** Cards de producto con imagen, nombre y precio dentro de un mismo contenedor.

**Señales de violación:** Usuarios que asocian un botón al bloque equivocado.

🔗 https://lawsofux.com/law-of-common-region/

---

## 13. Ley de Proximidad (Law of Proximity)

**Qué dice:** Los elementos cercanos entre sí se perciben como relacionados.

**Origen:** Psicología Gestalt (Max Wertheimer, 1923).

**Cómo aplicarla:**
- Usar el espaciado como herramienta de agrupación (más cerca = más relacionado).
- Labels pegados a su campo, no equidistantes entre dos campos.
- Definir una escala de spacing consistente en el design system.

**Ejemplo:** En un form, el label a 4 px de su input y 24 px del input anterior.

**Señales de violación:** Labels ambiguos; espaciado uniforme que aplana la jerarquía.

🔗 https://lawsofux.com/law-of-proximity/

---

## 14. Ley de Prägnanz (Law of Prägnanz)

**Qué dice:** Ante imágenes ambiguas o complejas, las personas las interpretan en su forma más simple posible porque requiere menos esfuerzo. También llamada ley de la buena forma o simplicidad.

**Origen:** Psicología Gestalt (Max Wertheimer, 1910–1923).

**Cómo aplicarla:**
- Preferir formas simples y reconocibles en iconografía y layout.
- Reducir la complejidad visual para que la lectura sea inmediata.

**Ejemplo:** El logo de los anillos olímpicos se lee como círculos superpuestos, no como formas curvas sueltas.

**Señales de violación:** Íconos que requieren explicación; layouts que no se "entienden" de un vistazo.

🔗 https://lawsofux.com/law-of-pr%C3%A4gnanz/

---

## 15. Ley de Similitud (Law of Similarity)

**Qué dice:** Los elementos visualmente similares se perciben como grupo o como parte de lo mismo, aunque estén separados.

**Origen:** Psicología Gestalt.

**Cómo aplicarla:**
- Elementos con la misma función deben verse iguales (links, botones, estados).
- Diferenciar visualmente lo que se comporta distinto.
- Base de la consistencia en un design system.

**Ejemplo:** Todos los links del sitio en el mismo color y estilo.

**Señales de violación:** Texto con estilo de link que no es clickeable; botones del mismo nivel con estilos distintos.

🔗 https://lawsofux.com/law-of-similarity/

---

## 16. Ley de Conexión Uniforme (Law of Uniform Connectedness)

**Qué dice:** Los elementos conectados visualmente (líneas, flechas, colores compartidos) se perciben más relacionados que los no conectados. Es más fuerte que proximidad o similitud.

**Origen:** Stephen Palmer e Irvin Rock (1994).

**Cómo aplicarla:**
- Usar conectores para relacionar pasos o elementos (steppers, timelines).
- Conectar labels con su contenido cuando la proximidad no alcanza.

**Ejemplo:** Stepper de checkout con línea que une los pasos.

**Señales de violación:** Relaciones entre elementos que el usuario no detecta.

🔗 https://lawsofux.com/law-of-uniform-connectedness/

---

## 17. Modelo Mental (Mental Model)

**Qué dice:** Representación interna, comprimida, de cómo creemos que funciona un sistema. La guía la experiencia previa.

**Origen:** Kenneth Craik (1943); aplicado a HCI por Don Norman (*The Design of Everyday Things*, 1988).

**Cómo aplicarla:**
- Investigar cómo los usuarios entienden el dominio antes de diseñar (card sorting, entrevistas).
- Alinear el modelo del sistema con el del usuario, no con la estructura interna de la empresa.
- Cuando hay que cambiar un modelo mental, enseñar explícitamente.

**Ejemplo:** "Carrito" como metáfora de compra online.

**Señales de violación:** Navegación que refleja el organigrama; usuarios que esperan un resultado distinto al que obtienen.

🔗 https://lawsofux.com/mental-model/

---

## 18. Ley de Miller (Miller's Law)

**Qué dice:** Una persona promedio puede mantener alrededor de 7 (±2) elementos en la memoria de trabajo.

**Origen:** George A. Miller, *The Magical Number Seven, Plus or Minus Two* (1956). Investigaciones posteriores (Cowan, 2001) sitúan la capacidad más cerca de 4 chunks.

**Cómo aplicarla:**
- No usar el "7" como regla rígida para limitar ítems de menú: el punto es organizar en chunks.
- Reducir lo que el usuario debe recordar entre pantallas.

**Ejemplo:** Mostrar el resumen del pedido en la pantalla de pago en vez de esperar que el usuario lo recuerde.

**Señales de violación:** Flujos que exigen recordar códigos o datos de una pantalla anterior.

🔗 https://lawsofux.com/millers-law/

---

## 19. Navaja de Occam (Occam's Razor)

**Qué dice:** Entre hipótesis que explican igual de bien, conviene elegir la que tiene menos supuestos. En diseño: la solución más simple que resuelve el problema suele ser la mejor.

**Origen:** Guillermo de Ockham (siglo XIV).

**Cómo aplicarla:**
- Revisar cada elemento y preguntar si se puede quitar sin perder función.
- Considerar "terminado" cuando no queda nada por sacar.

**Ejemplo:** Eliminar un campo de formulario que el negocio no usa.

**Señales de violación:** Features que nadie usa; pantallas que crecen por acumulación.

🔗 https://lawsofux.com/occams-razor/

---

## 20. Paradoja del Usuario Activo (Paradox of the Active User)

**Qué dice:** Los usuarios no leen manuales: empiezan a usar el producto directamente, aun si aprender primero les ahorraría tiempo.

**Origen:** John M. Carroll y Mary Beth Rosson (1987).

**Cómo aplicarla:**
- Integrar la ayuda en contexto (tooltips, empty states, hints) en lugar de tutoriales previos.
- Diseñar para aprendizaje por uso.
- Hacer descubribles las funciones avanzadas en el momento en que son útiles.

**Ejemplo:** Tooltip que aparece la primera vez que se usa una función.

**Señales de violación:** Onboardings de muchas pantallas que se saltean; documentación sin visitas.

🔗 https://lawsofux.com/paradox-of-the-active-user/

---

## 21. Principio de Pareto (Pareto Principle)

**Qué dice:** En muchos fenómenos, aproximadamente el 80% de los efectos provienen del 20% de las causas.

**Origen:** Vilfredo Pareto (1896); generalizado por Joseph Juran.

**Cómo aplicarla:**
- Priorizar las funciones y flujos que concentran la mayor parte del uso o el valor.
- Enfocar mejoras en los pocos problemas que generan la mayoría de los errores.

**Ejemplo:** Optimizar primero el flujo de pedido, que concentra la mayor parte de las sesiones.

**Señales de violación:** Esfuerzo distribuido por igual entre features de muy distinto impacto.

🔗 https://lawsofux.com/pareto-principle/

---

## 22. Ley de Parkinson (Parkinson's Law)

**Qué dice:** Una tarea se expande hasta ocupar todo el tiempo disponible para completarla.

**Origen:** Cyril Northcote Parkinson, *The Economist* (1955).

**Cómo aplicarla:**
- Hacer que las tareas del usuario tomen menos tiempo del esperado.
- Usar autocompletado y datos guardados para acortar flujos.
- A nivel equipo: timeboxing para entregables y workshops.

**Ejemplo:** Checkout con un toque usando datos de pago guardados.

**Señales de violación:** Flujos que se alargan sin necesidad; reuniones o sprints sin límites claros.

🔗 https://lawsofux.com/parkinsons-law/

---

## 23. Regla Peak-End (Peak-End Rule)

**Qué dice:** Las personas juzgan una experiencia principalmente por cómo se sintieron en su momento más intenso y al final, no por el promedio de toda la experiencia.

**Origen:** Daniel Kahneman, Barbara Fredrickson et al. (1993).

**Cómo aplicarla:**
- Identificar y cuidar los momentos de mayor intensidad del journey (positivos y negativos).
- Diseñar finales memorables (confirmaciones, celebraciones).
- Los momentos negativos pesan más: invertir en estados de error y recuperación.

**Ejemplo:** Pantalla de confirmación de pedido con animación y tiempo estimado.

**Señales de violación:** Flujos que terminan abruptamente; errores sin contención.

🔗 https://lawsofux.com/peak-end-rule/

---

## 24. Ley de Postel (Postel's Law)

**Qué dice:** Ser flexible en lo que se acepta y estricto en lo que se entrega. También llamada principio de robustez.

**Origen:** Jon Postel, especificación de TCP (1980).

**Cómo aplicarla:**
- Aceptar distintos formatos de entrada (fechas, teléfonos con o sin guiones) y normalizarlos.
- Anticipar variabilidad de dispositivos, accesos y capacidades.
- Devolver salidas claras y predecibles.

**Ejemplo:** Campo de teléfono que acepta espacios, guiones y paréntesis.

**Señales de violación:** Errores de validación por formato; mensajes del tipo "formato inválido" sin indicar el correcto.

🔗 https://lawsofux.com/postels-law/

---

## 25. Atención Selectiva (Selective Attention)

**Qué dice:** Las personas enfocan la atención solo en un subconjunto de estímulos, normalmente los relacionados con su objetivo, e ignoran el resto.

**Origen:** Colin Cherry, efecto cocktail party (1953); Donald Broadbent (1958). Se relaciona con la ceguera a los banners y la ceguera por falta de atención.

**Cómo aplicarla:**
- No poner información importante con apariencia de publicidad (banner blindness).
- Ubicar mensajes críticos dentro del foco de la tarea.
- Evitar cambios relevantes fuera del área de atención (change blindness).

**Ejemplo:** Un aviso de cambio de precio dentro del resumen del pedido, no en un banner superior.

**Señales de violación:** Usuarios que "no vieron" mensajes visibles; banners con CTR nulo.

🔗 https://lawsofux.com/selective-attention/

---

## 26. Efecto de Posición Serial (Serial Position Effect)

**Qué dice:** Las personas recuerdan mejor los primeros y los últimos elementos de una serie (efectos de primacía y recencia).

**Origen:** Hermann Ebbinghaus (1885).

**Cómo aplicarla:**
- Ubicar las acciones clave al principio y al final de listas o navegación.
- Dejar los ítems menos importantes en el medio.

**Ejemplo:** Tab bar con Inicio a la izquierda y Perfil/Carrito a la derecha.

**Señales de violación:** Funciones clave en el medio de menús largos que no se usan.

🔗 https://lawsofux.com/serial-position-effect/

---

## 27. Ley de Tesler (Tesler's Law)

**Qué dice:** Todo sistema tiene una cantidad de complejidad que no se puede eliminar; solo se puede mover. La pregunta es quién la absorbe: el sistema o el usuario. También llamada ley de conservación de la complejidad.

**Origen:** Larry Tesler, Xerox PARC (mediados de los 80).

**Cómo aplicarla:**
- Que el equipo de diseño y desarrollo absorba la complejidad en lugar del usuario.
- No simplificar al punto de volver la interfaz abstracta o ambigua.

**Ejemplo:** Calcular automáticamente impuestos y envío en vez de pedírselos al usuario.

**Señales de violación:** "Simplificaciones" que trasladan trabajo al usuario.

🔗 https://lawsofux.com/teslers-law/

---

## 28. Efecto Von Restorff (Von Restorff Effect)

**Qué dice:** Entre varios objetos similares, el que se diferencia del resto es el que más probablemente se recuerde. También llamado efecto de aislamiento.

**Origen:** Hedwig von Restorff (1933).

**Cómo aplicarla:**
- Destacar visualmente la acción o información más importante.
- Usar el contraste con moderación: si todo resalta, nada resalta.
- No depender solo del color (accesibilidad): sumar forma, tamaño o ícono.
- Considerar movimiento con cuidado (reduced motion).

**Ejemplo:** CTA primario relleno, secundarios en outline.

**Señales de violación:** Múltiples elementos compitiendo por atención; jerarquía plana.

🔗 https://lawsofux.com/von-restorff-effect/

---

## 29. Memoria de Trabajo (Working Memory)

**Qué dice:** Sistema cognitivo que retiene y manipula temporalmente la información necesaria para realizar una tarea. Tiene capacidad limitada y decae rápido.

**Origen:** Alan Baddeley y Graham Hitch (1974).

**Cómo aplicarla:**
- Favorecer el reconocimiento sobre el recuerdo (mostrar opciones, historial, sugerencias).
- Mantener visible la información que el usuario necesita para decidir.
- Marcar el contenido ya visitado.

**Ejemplo:** Comparador de productos que mantiene visibles las características elegidas.

**Señales de violación:** Usuarios que van y vuelven entre pantallas para comparar.

🔗 https://lawsofux.com/working-memory/

---

## 30. Efecto Zeigarnik (Zeigarnik Effect)

**Qué dice:** Las personas recuerdan mejor las tareas incompletas o interrumpidas que las terminadas.

**Origen:** Bluma Zeigarnik (1927), a partir de observaciones de Kurt Lewin.

**Cómo aplicarla:**
- Indicar claramente qué queda pendiente para motivar a completarlo.
- Guardar progreso para retomar tareas interrumpidas.
- Usar con criterio: la sensación de "pendiente" puede generar ansiedad.

**Ejemplo:** Carrito guardado con recordatorio "Te quedó un pedido sin terminar".

**Señales de violación:** Progreso que se pierde al salir; tareas pendientes sin señalización.

🔗 https://lawsofux.com/zeigarnik-effect/

---

## Tabla resumen rápida

| # | Ley | En una línea |
|---|---|---|
| 1 | Estética-Usabilidad | Lo lindo se percibe más usable |
| 2 | Sobrecarga de Elección | Muchas opciones paralizan |
| 3 | Chunking | Agrupar facilita procesar |
| 4 | Sesgo Cognitivo | Atajos mentales que distorsionan decisiones |
| 5 | Carga Cognitiva | Minimizar el esfuerzo mental extra |
| 6 | Umbral de Doherty | Responder en menos de 400 ms |
| 7 | Fitts | Grande y cerca = rápido |
| 8 | Flow | Desafío equilibrado con habilidad |
| 9 | Gradiente de Meta | Más cerca de la meta, más motivación |
| 10 | Hick | Más opciones, decisión más lenta |
| 11 | Jakob | Funcioná como lo que ya conocen |
| 12 | Región Común | Un contenedor agrupa |
| 13 | Proximidad | Cerca = relacionado |
| 14 | Prägnanz | Se lee la forma más simple |
| 15 | Similitud | Parecido = relacionado |
| 16 | Conexión Uniforme | Conectado = relacionado |
| 17 | Modelo Mental | Diseñar según cómo lo entiende el usuario |
| 18 | Miller | La memoria de trabajo es limitada (~7±2) |
| 19 | Occam | La solución más simple que funciona |
| 20 | Usuario Activo | Nadie lee el manual |
| 21 | Pareto | 80% del efecto, 20% de las causas |
| 22 | Parkinson | La tarea ocupa todo el tiempo disponible |
| 23 | Peak-End | Se recuerda el pico y el final |
| 24 | Postel | Flexible al recibir, estricto al entregar |
| 25 | Atención Selectiva | Solo se ve lo relacionado con el objetivo |
| 26 | Posición Serial | Se recuerda lo primero y lo último |
| 27 | Tesler | La complejidad no desaparece, se traslada |
| 28 | Von Restorff | Lo distinto se recuerda |
| 29 | Memoria de Trabajo | Reconocer es mejor que recordar |
| 30 | Zeigarnik | Lo incompleto se recuerda |

---

*Fuente del listado: [lawsofux.com](https://lawsofux.com/) — © Jon Yablonski, CC BY-NC-ND 4.0. Libro de referencia: Jon Yablonski, *Laws of UX* (O'Reilly, 2.ª ed. 2024). Este documento es una síntesis propia para uso interno.*