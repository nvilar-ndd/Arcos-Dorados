---
audit: 001
archivo: "[DashBoard] Promociones (eY15rEgfQpHeY2H50TkbKW)"
modulos: 03 Promociones — listado, alta por código, ciclo de vida (borrador, publicar, activar, desactivar, archivar, duplicar), errores y notificaciones
fecha: 2026-11-17
metodo: Figma MCP (use_figma de sólo lectura sobre textos, frames e instancias · get_screenshot) + contraste WCAG calculado sobre los fills
---

# Audit 001 — Promociones

> Cada hallazgo nace `Pendiente`. Sólo lo `Aprobado` se aplica en Figma.
> Prioridad: 🔴 P0 riesgo operativo o bloquea dev · 🟠 P1 antes de salir · 🟡 P2 próxima iteración · ⚪ P3 higiene.

**Alcance:** página [⮑ Promociones](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=2050-17859) (60 nodos de primer nivel). El alta se revisó en el tipo **por código · % producto**, que es el más completo (35 pantallas). Los demás tipos de alta y la página *Por método de pago* se revisaron por estructura y copy, no pantalla por pantalla.

## Resumen

El archivo está maduro: usa el DS de forma consistente (159 instancias y 1 fill suelto en la pantalla de listado), el contraste del listado pasa AA y ya tiene redes de seguridad que otros módulos no tienen (aviso de descuento elevado, notificación de proceso largo, toggle deshabilitado sin permisos, archivar en vez de eliminar). Los problemas están en **las acciones que cambian lo que ve el cliente**: activar no tiene flujo, publicar no muestra el alcance ni la zona horaria, archivar no se puede deshacer y volver o cancelar pierde datos.

| | 🔴 P0 | 🟠 P1 | 🟡 P2 | ⚪ P3 | Total |
|---|---|---|---|---|---|
| Hallazgos | 1 | 7 | 7 | 2 | **17** |

## Tablero

| ID | Flujo / pantalla | Hallazgo | Regla | Prioridad | Estado |
|---|---|---|---|---|---|
| [DF-001-01](#df-001-01--activar-desde-el-toggle-no-tiene-flujo) | Listado · toggle | Activar desde el toggle no tiene flujo: la sección *PROM_Activate* muestra una desactivación | BO-SEG-03 · BO-EST-01 | 🔴 P0 | Pendiente |
| [DF-001-02](#df-001-02--publicar-sin-alcance-ni-zona-horaria) | Revisión final · publicar | La confirmación de publicación no muestra alcance ni zona horaria y dice "activa de forma inmediata" aunque la vigencia empiece después | BO-SEG-03 · BO-SEG-06 | 🟠 P1 | Pendiente |
| [DF-001-03](#df-001-03--archivar-no-se-puede-deshacer) | Archivar · Archivada | Archivar no se puede deshacer, el toast dice "eliminada" y el modal no nombra la promoción | BO-SEG-01 · BO-SEG-02 | 🟠 P1 | Pendiente |
| [DF-001-04](#df-001-04--volver-y-cancelar-pierden-datos) | Alta · Volver / Cancelar / Borrador | *Volver* y *Cancelar* pierden lo cargado; el borrador sólo se guarda desde la revisión final | BO-NAV-04 · BO-SEG-04 | 🟠 P1 | Pendiente |
| [DF-001-05](#df-001-05--tres-indicadores-de-estado) | Listado · estados | Tres indicadores de estado superpuestos (tag + texto + toggle) para 9 estados; el filtro sólo cubre 3 | BO-EST-01 · BO-EST-02 | 🟠 P1 | Pendiente |
| [DF-001-06](#df-001-06--el-listado-no-dice-dónde-aplica) | Listado | El listado no dice en qué país, restaurantes o canales aplica cada promoción, no tiene acciones masivas y muestra 5 por página | BO-SEG-05 · BO-DEN-03 | 🟠 P1 | Pendiente |
| [DF-001-07](#df-001-07--desactivar-con-cta-ambiguo) | Desactivar | Desde la revisión, el botón que desactiva dice "Actualizar"; el modal no nombra la promoción ni los canales | BO-SEG-01 | 🟠 P1 | Pendiente |
| [DF-001-08](#df-001-08--error-sin-recuperación) | Error al activar o desactivar | El error no dice la causa ni ofrece reintentar | BO-FOR-01 · Voz y tono | 🟠 P1 | Pendiente |
| [DF-001-09](#df-001-09--steppers-distintos-según-el-tipo) | Alta · stepper | Cada tipo de promoción tiene otro stepper; "Revisión final" no figura en el de código y una etiqueta se trunca | BO-NAV-04 · Consistencia | 🟡 P2 | Pendiente |
| [DF-001-10](#df-001-10--dos-primarios-en-disponibilidad) | Alta · Disponibilidad | Dos botones primarios en la misma pantalla (*Agregar slot* y *Siguiente*) | Jerarquía · Von Restorff | 🟡 P2 | Pendiente |
| [DF-001-11](#df-001-11--duplicar-pide-confirmación) | Duplicar | Duplicar pide confirmación en un modal aunque no es destructivo | Nielsen #7 | 🟡 P2 | Pendiente |
| [DF-001-12](#df-001-12--revisión-final-con-placeholders) | Revisión final | Tarjetas con placeholders ("Monto mínimo 100 · Text", "Info destacada") e ícono de advertencia como ícono de sección | BO-SIS-07 · WCAG 1.3.1 | 🟡 P2 | Pendiente |
| [DF-001-13](#df-001-13--tres-registros-e-inglés) | Todo el archivo | Copy en tres registros (vos, tú, usted) mezclado con inglés | BO-SIS-05 · BO-SIS-07 | 🟡 P2 | Pendiente |
| [DF-001-14](#df-001-14--aprobación-sin-aprobador) | Permisos reducidos · Enviar a revisión | El flujo de aprobación no dice quién aprueba ni cómo se entera | BO-PER-01 · BO-PER-02 | 🟡 P2 | Pendiente |
| [DF-001-15](#df-001-15--umbral-del-aviso-de-descuento) | Aviso de porcentaje | El aviso de descuento elevado no tiene umbral definido ("XX%") | BO-SEG-08 | 🟡 P2 | Pendiente |
| [DF-001-16](#df-001-16--typos-en-copy-final) | Varios | Typos en copy de UI | BO-SIS-07 | ⚪ P3 | Pendiente |
| [DF-001-17](#df-001-17--secciones-duplicadas-y-menú-viejo) | Archivo | Secciones duplicadas con el mismo nombre y menú lateral con la IA anterior | Higiene | ⚪ P3 | Pendiente |

## Lo que está bien (no tocar)

| Qué | Dónde | Por qué suma |
|---|---|---|
| Uso del DS | [Listado](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7909-109078): 159 instancias de librería, 1 fill suelto | Handoff predecible (BO-SIS-01/02) |
| Contraste del listado | Texto secundario `#6F6F6F` 5.02:1 · *Activa* `#1F6437` 7.15:1 · *Próxima* `#0F62FE` 5.00:1 · *Pendiente de publicar* `#DB0007` 5.23:1 | Pasa WCAG 1.4.3 |
| Áreas de clic | Toggle 48 × 24 · menú ⋮ 24 × 24 | Cumplen el mínimo de WCAG 2.5.8 (justo en el límite el ⋮) |
| Aviso de descuento elevado | [Aviso de porcentaje](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=8277-101401) | Red de seguridad contra el error más caro (falta umbral, DF-001-15) |
| Notificación de proceso largo | [PROM_Notification](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7806-161061): aparece a los 8 s, no bloquea, avisa éxito o error aunque se cierre | Modelo para todo el Dashboard (Doherty) |
| Permisos en el listado | [Menú contextual sin permisos](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4712-53176): toggle deshabilitado, sólo *Ver* | BO-PER-02 |
| Formularios bloqueados | [cursor not-allowed](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=5107-59738) en campos no editables | Feedback claro |
| Archivar en vez de eliminar | [Change Log 18/08](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=8496-182257) | Dirección correcta (BO-SEG-02), falta cerrar el ciclo (DF-001-03) |

## Detalle

### DF-001-01 · Activar desde el toggle no tiene flujo

| | |
|---|---|
| **Dónde** | [PROM_Activate](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7806-134523) · toggle del [listado](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7909-109078) |
| **Qué pasa** | La sección *PROM_Activate* tiene 3 frames: toggle de una promoción *Próxima* → modal "¿Querés desactivar esta promoción" → toast "Promoción desactivada". Es el flujo de desactivar copiado. No hay ninguna pantalla para encender el toggle de una promoción *Inactiva*, ni definición de qué pasa con el toggle en *Borrador*, *Pendiente* o *Expirada* (se ve igual que en *Inactiva*). |
| **Por qué importa** | Activar es la acción que pone un descuento frente a clientes de uno o más mercados. Sin flujo, dev resuelve por su cuenta: lo más probable es que active sin confirmar. |
| **Regla** | BO-SEG-03 · BO-EST-01. P0 porque es la acción de más impacto hacia el cliente y no tiene diseño: bloquea dev |
| **Propuesta** | (1) Diseñar *Activar*: modal con el mismo resumen de alcance de DF-001-02 y CTA "Activar promoción". (2) Toggle **deshabilitado con tooltip** en *Borrador* ("Publicala desde la revisión final"), *Pendiente* ("Espera aprobación") y *Expirada* ("Cambiá la vigencia para reactivarla"). (3) Renombrar la sección actual a *PROM_Deactivate (desde toggle)*. |

### DF-001-02 · Publicar sin alcance ni zona horaria

| | |
|---|---|
| **Dónde** | [Revisión final](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4147-24848) · [Disponibilidad](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4472-36220) |
| **Qué pasa** | El aviso "Confirmación de publicación" es un banner fijo: "Al publicar, la promoción quedará activa de forma inmediata y será visible para los usuarios". En el mismo frame la vigencia es *10/12/2025 14:00 → 16/12/2025 02:00*: si se publica antes, no queda activa de inmediato sino *Próxima*. La revisión no muestra **país, restaurantes, canales** ni **zona horaria**; las fechas se cargan como `dd/mm/aaaa - 00:00hs`. |
| **Por qué importa** | Es el último punto para detectar que la promo va al país o a la franja horaria equivocada. En 20+ mercados, "14:00" sin zona horaria es ambiguo para quien la carga desde otro país. |
| **Regla** | BO-SEG-03 · BO-SEG-06 · WCAG 3.3.4 |
| **Propuesta** | Reemplazar el banner por un bloque **Alcance** arriba de la revisión: *País · N restaurantes (ver) · Canales (App, Web, ADK) · Vigencia: 10/12 14:00 → 16/12 02:00 (hora de Argentina, GMT-3)*. El texto del CTA y del aviso cambia según la fecha: "Se publicará y quedará *Próxima* hasta el 10/12 14:00" o "Quedará activa al publicar". Zona horaria visible en los campos *Desde / Hasta*. |

### DF-001-03 · Archivar no se puede deshacer

| | |
|---|---|
| **Dónde** | [PROM_Archivar](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4486-81393) · [PROM_Archivada](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=8433-84467) |
| **Qué pasa** | El modal dice "Vas a archivar la promoción" sin nombrarla, con botón rojo "Archivar". El toast posterior dice **"Promoción eliminada con exito"**: quedó del flujo anterior al cambio de eliminar por archivar (Change Log 18/08). Una promoción archivada se abre en sólo lectura (cursor not-allowed) y **no hay acción para restaurarla**. |
| **Por qué importa** | Archivar sin restaurar funciona igual que eliminar para el usuario. El toast confirma esa lectura. |
| **Regla** | BO-SEG-01 · BO-SEG-02 |
| **Propuesta** | Modal: "¿Archivar *PROMOBIRTHDAYPA*?" + "Deja de verse en App, Web y ADK. Podés restaurarla desde *Archivadas*." · CTA secundario (no rojo: la acción es reversible). Toast: "Promoción archivada" con **Deshacer**. En el detalle de una archivada: acción **Restaurar** (vuelve como *Inactiva*). |

### DF-001-04 · Volver y Cancelar pierden datos

| | |
|---|---|
| **Dónde** | [PROM_Return](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7806-148868) · [PROM_Cancel](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4486-107135) · [Guardar como borrador](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=5419-63068) |
| **Qué pasa** | "Al volver perderás lo hecho en esta pantalla" y "Al cancelar perderás lo hecho en esta pantalla". *Crear borrador* sólo aparece en la revisión final. El alta por código tiene **8 pasos** (tipo y subtipo → descuento → detalles generales → disponibilidad → límites → segmentación → contenido de apoyo → revisión). |
| **Por qué importa** | Ir al paso anterior para corregir algo no debería costar datos. Y quien tiene que cortar en el paso 5 pierde todo: no hay forma de guardar a mitad de camino. |
| **Regla** | BO-NAV-04 · BO-SEG-04 |
| **Propuesta** | *Volver* conserva lo cargado (sin modal). *Guardar borrador* disponible en el footer de **todos** los pasos (botón terciario). *Cancelar* ofrece "Guardar como borrador" además de "Descartar". Autoguardado del borrador al cambiar de paso (*propuesta*, depende de Q-04). |

### DF-001-05 · Tres indicadores de estado

| | |
|---|---|
| **Dónde** | [Listado](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7909-109078) · HandOff - Estados · [Más filtros](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4482-119554) |
| **Qué pasa** | Cada fila tiene un **tag** (Publicada, Pendiente, Cargando, Borrador), un **estado con bajada** (Activa, Próxima, Inactiva, Expirada, Pendiente de publicar, Publicando, Borrador) y un **toggle**. Combinaciones como *Publicada + Inactiva* o *Pendiente + Pendiente de publicar* repiten o se contradicen. *Pendiente de publicar* va en rojo, color que el resto del sistema usa para error. El filtro de estados sólo tiene Activas, Inactivas y Archivadas. |
| **Por qué importa** | Para saber qué ve el cliente hay que cruzar tres señales. El rojo genera alarma donde no hay error. |
| **Regla** | BO-EST-01 · BO-EST-02 · Carga cognitiva |
| **Propuesta** | Un solo estado por fila (tag con texto + color + bajada) con el ciclo: *Borrador → Pendiente de aprobación → Programada → Activa ⇄ Inactiva → Expirada → Archivada*; *Publicando* como estado transitorio. El toggle sólo donde aplica (DF-001-01). Rojo reservado para error; *Pendiente* en ámbar con ícono. Filtro con todos los estados. Documentar la máquina de estados en el [`design.md`](../flows/03_promociones/design.md). |

### DF-001-06 · El listado no dice dónde aplica

| | |
|---|---|
| **Dónde** | [Listado](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7909-109078) |
| **Qué pasa** | La fila muestra nombre, código, tipo, subtipo, vigencia, fechas de alta y modificación, y estado. **No** muestra país, cantidad de restaurantes ni canales. No hay selección múltiple. Paginación por defecto: 5 de 61. |
| **Por qué importa** | En un Dashboard que gobierna 20+ mercados, la pregunta más frecuente es "¿dónde está corriendo esto?". Apagar una campaña en 10 restaurantes hoy son 10 toggles con 10 modales. Con 5 por página, 61 promociones son 13 páginas. |
| **Regla** | BO-SEG-05 · BO-DEN-03 · Ley de Fitts (menos navegación) |
| **Propuesta** | Columna **Alcance** (bandera/código de país · "12 restaurantes" · íconos de canal). Checkbox por fila + barra de acciones masivas (Desactivar, Archivar, Exportar) con contador y confirmación reforzada sobre 50 ítems (BO-SEG-05). Paginación por defecto 20, con opción 50. |

### DF-001-07 · Desactivar con CTA ambiguo

| | |
|---|---|
| **Dónde** | [PROM_Deactivate desde la revisión](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7806-138925) · [desde el listado](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7806-131212) |
| **Qué pasa** | Al editar una promoción activa y apagar su toggle, el modal dice "Al actualizar, la promoción quedará desactivada" con CTA **"Actualizar"** (nota: "Actulizar: la desactiva"). Desde el listado, el modal es "¿Querés desactivar esta promoción" (sin cierre de pregunta), no nombra la promoción y dice "dejará de verse en la app" (¿y Web y ADK?). |
| **Por qué importa** | El verbo del botón tiene que decir lo que pasa. "Actualizar" en una acción que apaga una promoción en vivo es una trampa. |
| **Regla** | BO-SEG-01 · [Voz y tono](../../Voz-y-Tono/README.md) (CTA con verbo concreto) |
| **Propuesta** | CTA "Desactivar promoción" en los dos casos. Título "¿Desactivar *PROMOBIRTHDAYPA*?" + bajada con canales y alcance: "Deja de aplicarse en App, Web y ADK en 12 restaurantes de Argentina". |

### DF-001-08 · Error sin recuperación

| | |
|---|---|
| **Dónde** | [PROM_Error activating or deactivating](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=7806-135153) |
| **Qué pasa** | "Error al actualizar / Hubo un error al actualizar el estado de la promoción." Sin causa, sin acción, sin indicar en qué estado quedó la promoción. |
| **Por qué importa** | Ante un error en un cambio de estado, lo primero que necesita saber el usuario es si la promoción quedó activa o no. |
| **Regla** | BO-FOR-01 · WCAG 3.3.3 · Voz y tono (problemas y recuperación) |
| **Propuesta** | "No pudimos desactivar *PROMOBIRTHDAYPA*. Sigue **activa**." + acción **Reintentar**. El toggle vuelve a su posición real. |

### DF-001-09 · Steppers distintos según el tipo

| | |
|---|---|
| **Dónde** | [Crear por código](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4379-29685) · [Descuento de envío](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4393-26976) |
| **Qué pasa** | Código: *Descuento · Detalles generales · Disponibilidad · Límites · Segmentación · Contenido de apo…* (truncado, y sin "Revisión final"). Envío: *Detalles General · Configuración · De Apoyo · Revision final*. El paso equivalente cambia de nombre según el tipo. |
| **Por qué importa** | Quien carga promociones de varios tipos aprende un mapa distinto para cada uno. |
| **Regla** | BO-NAV-04 · Ley de Jakob (consistencia interna) |
| **Propuesta** | Un stepper base para todos los tipos: *Tipo · Descuento · Detalles · Disponibilidad · Límites · Segmentación · Contenido · Revisión*. Los pasos que no aplican se omiten, no se renombran. Etiquetas sin truncar (ancho del stepper o etiqueta corta "Contenido"). |

### DF-001-10 · Dos primarios en Disponibilidad

| | |
|---|---|
| **Dónde** | [Disponibilidad](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4472-36220) |
| **Qué pasa** | *Agregar slot* usa el estilo primario amarillo, igual que *Siguiente*. |
| **Regla** | Jerarquía visual · Von Restorff |
| **Propuesta** | *Agregar slot* como botón secundario o terciario con ícono `+`. |

### DF-001-11 · Duplicar pide confirmación

| | |
|---|---|
| **Dónde** | [PROM_Double](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4486-91463) |
| **Qué pasa** | Menú ⋮ → *Duplicar* → modal "Vas a duplicar la promoción / ¿Confirmas que deseas duplicar la promoción?" (No, me arrepentí · Duplicar) → primer paso editable. |
| **Por qué importa** | Duplicar no tiene riesgo: crea una copia sin publicar. El modal suma un clic sin evitar ningún error. |
| **Regla** | Nielsen #7 (eficiencia) · BO-FOR-02 (defaults) |
| **Propuesta** | Duplicar directo como **Borrador** "Copia de PROMOBIRTHDAYPA" y abrir el primer paso editable con un toast "Creaste una copia. Revisá la vigencia y el código". Mantener la regla de Figma: tipo y subtipo no se pueden cambiar. |

### DF-001-12 · Revisión final con placeholders

| | |
|---|---|
| **Dónde** | [Revisión final](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4147-24848) |
| **Qué pasa** | "Monto mínimo 100 · Text" se repite en las 5 tarjetas; "Info destacada" sin contenido. *Configuración de Disponibilidad* y *Límites* usan el ícono de advertencia (triángulo) como ícono de sección. |
| **Por qué importa** | Dev implementa lo que ve: placeholders en la pantalla de verificación son riesgo de que el resumen real quede incompleto. Un triángulo de advertencia sin advertencia confunde. |
| **Regla** | BO-SIS-07 · WCAG 1.3.1 (significado del ícono) |
| **Propuesta** | Definir qué campo resume cada tarjeta, con datos reales. Íconos de *Iconography* acordes (calendario, límite). |

### DF-001-13 · Tres registros e inglés

| | |
|---|---|
| **Dónde** | Todo el archivo |
| **Qué pasa** | Vos: "Gestioná", "Seleccioná", "¿Querés…?". Tú: "Selecciona", "Elige", "¿Confirmas que deseas…?", "Revisa". Usted: "Agregue", "Ingrese", "Configure". Inglés: "Type", "Service", "Cancel", "SubTipo", ítems del menú lateral. |
| **Regla** | BO-SIS-05 · BO-SIS-07 · [Voz y tono](../../Voz-y-Tono/README.md): fuente en español neutral con tú, adaptación AR/UY a vos |
| **Propuesta** | Pasada de copy completa del archivo con keys de i18n. Un registro por idioma de UI. |

### DF-001-14 · Aprobación sin aprobador

| | |
|---|---|
| **Dónde** | [Enviar a revisión](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4486-66919) · [nota de permisos](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=4712-53176) |
| **Qué pasa** | Con permisos reducidos, la promoción se envía a revisión ("Se publicará únicamente cuando la persona responsable la apruebe") y el toast dice "A espera de que la publiquen". No se ve quién aprueba, ni cómo se entera, ni qué ve quien aprueba. La nota de permisos dice que sólo se editan promociones propias en *Pendiente*. |
| **Regla** | BO-PER-01 · BO-PER-02 · [Q-02](../docs/preguntas-abiertas.md) |
| **Propuesta** | Definir con producto la matriz de roles (crea / aprueba / publica) y diseñar la vista del aprobador: filtro "Esperan mi aprobación", acciones *Aprobar y publicar* / *Devolver con comentario*. |

### DF-001-15 · Umbral del aviso de descuento

| | |
|---|---|
| **Dónde** | [Aviso de porcentaje](https://www.figma.com/design/eY15rEgfQpHeY2H50TkbKW/?node-id=8277-101401) |
| **Qué pasa** | "La promoción que estás por publicar aplica un XX% de descuento." No está definido a partir de qué porcentaje aparece, ni si aplica a montos fijos. |
| **Regla** | BO-SEG-08 |
| **Propuesta** | Definir umbral por tipo (*propuesta:* ≥ 50 % o precio final ≤ 0) y, si es configurable por país, llevarlo a Country › Promotions. |

### DF-001-16 · Typos en copy final

"Ver / Ediatr" (menú contextual) · "Siguente" (botón del paso Descuento) · "Actulizar" · "perderas" · "eliminada con exito" · "No, me arrepenti" · "1 ene 20202" · "Hamburgesa" · "Listado de producos seleccionados" · "El; lunes, jueves" · "????" en *PROM_Archivada* · "ELIMAR / NOTIFCACIONES" en la nota de flujo · "Detalles General" · "Revision final" · "Codigo" · "Limites".

### DF-001-17 · Secciones duplicadas y menú viejo

Hay pares de secciones con el mismo nombre: *Promotions / CTA* (`5427:62323`, `8483:84948`), *PROM_Create_Shipping_Discount* (`4393:26976`, `7610:104670`), *PROM_Archivar* (`4486:81393`, `7806:115565`), *PROM_Deactivate* (`7806:131212`, `7806:138925`) y una sección llamada `---`. El menú lateral de las pantallas sigue la IA anterior (*Fees*, *Costes de envío*, sin *Delivery*). Propuesta: sufijo de variante o de vigencia (`· v2`, `· desde revisión`) y actualizar la instancia del `Header+PanelLeft`.

---

## Flujo actual vs. propuesto (V2)

Conteos estimados sobre los frames de Figma (clics de navegación y confirmación, sin contar la carga de campos).

### Publicar una promoción por código

| Paso | Actual | V2 propuesto | Regla |
|---|---|---|---|
| Elegir tipo y subtipo | 2 pantallas | 1 pantalla (tipo + subtipo en la misma) | Hick |
| Pasos del alta | 6 pasos + revisión, cada uno con *Siguiente* | Igual, con stepper base común y **Guardar borrador** en todos | BO-NAV-04 · BO-SEG-04 |
| Corregir un paso anterior | *Volver* → modal → se pierde lo cargado | *Volver* o clic en el stepper, sin pérdida | BO-NAV-04 |
| Revisión | Banner fijo "activa de forma inmediata" | Bloque **Alcance** (país, restaurantes, canales, vigencia con zona horaria) | BO-SEG-03 · 06 |
| Publicar | *Publicar promoción* (+ aviso si el descuento es alto) | Igual; el CTA dice si queda *Activa* o *Programada* | BO-EST-01 |
| **Total** | ~11 clics, sin forma de guardar a mitad de camino | ~10 clics, guardado en cualquier paso, sin pérdida al volver | |

### Apagar una campaña en 10 promociones

| Paso | Actual | V2 propuesto |
|---|---|---|
| Encontrarlas | Filtrar; 5 por página, sin columna de país | Filtrar; 20 por página, columna Alcance |
| Apagarlas | 10 × (toggle + modal) = 20 clics | Seleccionar 10 + *Desactivar* + confirmar = 12 clics |
| Saber si funcionó | 10 toasts | 1 toast con contador ("10 promociones desactivadas · Deshacer") |

### Archivar por error

| | Actual | V2 propuesto |
|---|---|---|
| Archivar | Modal rojo sin nombre → "eliminada con éxito" | Modal con nombre y canales → "Promoción archivada · **Deshacer**" |
| Recuperarla | No es posible | *Deshacer* en el toast o **Restaurar** desde *Archivadas* |

## Próximos pasos

1. Revisión con el equipo: aprobar o rechazar cada hallazgo. Los P0/P1 bloquean el estado *Ready for Dev*.
2. DF-001-05 y DF-001-14 necesitan decisiones de producto (máquina de estados y roles). Se trabajan en el [`design.md`](../flows/03_promociones/design.md), secciones 2 y 7.
3. Auditar los otros tipos de alta (automática, empleados, envío, por método de pago) con el checklist de [`templates/audit.md`](../templates/audit.md), reutilizando estos hallazgos.
