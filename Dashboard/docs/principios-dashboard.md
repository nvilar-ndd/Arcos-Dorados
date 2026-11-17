# Principios del Dashboard — reglas auditables

> **Estado:** v0 · **borrador para validar con el equipo** (2026-11-17). Es el equivalente de [`ADK/docs/principios-kiosco.md`](../../ADK/docs/principios-kiosco.md) para el back-office.
> Las reglas que salen de WCAG o del DS son firmes. Las marcadas *propuesta* son criterio de producto que todavía no está en Figma: se confirman o se ajustan antes de usarlas en una auditoría.

**Contexto de uso:** escritorio (breakpoints `lg` 1024 a `2xl` 1792), mouse y teclado, sesiones largas, tareas repetitivas, usuarios expertos de varios mercados. El error cuesta caro: lo que se publica acá llega a la App, el eCommerce, el ADK y la Web.

## BO-SEG · Seguridad operativa (safety nets)

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-SEG-01 | Las acciones destructivas (eliminar, desactivar, despublicar, cerrar local) piden confirmación | Modal que nombra el objeto y el impacto (canales, países, restaurantes afectados). Botón con el verbo concreto, no "Aceptar" | WCAG 3.3.4 · Nielsen #5 |
| BO-SEG-02 | Borrar es *soft-delete* | Archivado restaurable; plazo de restauración *propuesta: 30 días* | Nielsen #3 |
| BO-SEG-03 | Publicar a canales B2C muestra un resumen de alcance antes de confirmar | Canales · países · restaurantes · vigencia con zona horaria | WCAG 3.3.4 · Peak-End |
| BO-SEG-04 | Cambios sin guardar no se pierden en silencio | Aviso al salir de la pantalla o cambiar de país en sesión | Nielsen #5 |
| BO-SEG-05 | Las acciones masivas dicen cuántos ítems tocan y se pueden deshacer | Contador visible; *propuesta:* deshacer ≥ 10 s o confirmación reforzada sobre 50 ítems o más de 1 país | Nielsen #3 |
| BO-SEG-06 | Fecha y hora siempre con zona horaria explícita | La del país objetivo; nunca la del navegador sin decirlo | — |
| BO-SEG-07 | Toda entidad muestra quién y cuándo la modificó | *Última modificación* en el detalle; historial completo *propuesta* | Visibilidad del estado |

## BO-EST · Estados

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-EST-01 | Las entidades publicables tienen un ciclo de estado explícito y único | *Propuesta:* Borrador → Programada → Activa → Pausada → Finalizada → Archivada | Modelo mental |
| BO-EST-02 | El estado no se comunica sólo con color | Tag con texto (+ ícono si es alerta) | WCAG 1.4.1 |
| BO-EST-03 | Cada listado tiene diseñados vacío, carga, error y sin permisos | Carga > 400 ms → skeleton o loader con texto | Doherty · [Empty state](../../Archway/Dashboard/components/empty-state.md) |

## BO-NAV · Navegación y patrones

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-NAV-01 | El patrón de pantalla sigue el contexto de navegación | Country → formulario por secciones · Left panel → listado + paso a paso ([ui-templates](../../Archway/Dashboard/usage/ui-templates.md)) | Consistencia |
| BO-NAV-02 | Listado: tabla read-only si sólo se lee; Card List si cada fila se opera | Criterio de [ui-templates](../../Archway/Dashboard/usage/ui-templates.md#read-only-table-vs-card-list) | — |
| BO-NAV-03 | Filtros, orden, página y búsqueda persisten al volver de un detalle | En la URL o en sesión | Nielsen #6 |
| BO-NAV-04 | En un flujo paso a paso se puede volver a cualquier paso completo sin perder datos | Stepper clickeable hacia atrás + *volver* | Nielsen #3 |
| BO-NAV-05 | El panel principal se agrupa por dominio | *Propuesta:* ≤ 7 grupos de primer nivel (hoy 16, ver [IA](../../Archway/Dashboard/structure/information-architecture.md#observaciones)) | Hick · Miller |

## BO-DEN · Densidad y lectura

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-DEN-01 | Texto de lectura ≥ 14 px (`Body02`/`Body03`); 12 px (`Label01`) sólo para metadatos | Estilos de [typography](../../Archway/Dashboard/foundations/typography.md) | WCAG 1.4.4 |
| BO-DEN-02 | Contraste de texto ≥ 4.5:1 y de bordes de control y estados ≥ 3:1, **en Light y en Dark** | Ver D-A01…D-A07 | WCAG 1.4.3 · 1.4.11 |
| BO-DEN-03 | En tablas: identificador en la primera columna, números alineados a la derecha, header fijo al hacer scroll | — | Gestalt · escaneo |
| BO-DEN-04 | Los IDs, PLUs y códigos se pueden copiar con un clic | — | Eficiencia |

## BO-FOR · Formularios

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-FOR-01 | Validación al salir del campo; el error dice qué pasó y cómo resolverlo | Ícono + texto, junto al campo | WCAG 3.3.1 · 3.3.3 |
| BO-FOR-02 | Defaults inteligentes | Hereda la configuración del país o la última usada; se indica de dónde viene el valor | Tesler |
| BO-FOR-03 | Campos obligatorios marcados y agrupados por dominio | Secciones de [page-templates](../../Archway/Dashboard/usage/page-templates.md) | WCAG 3.3.2 |
| BO-FOR-04 | Carga masiva (CSV) con plantilla descargable y reporte de errores por fila antes de aplicar | — | Nielsen #9 |

## BO-PER · Permisos (RBAC)

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-PER-01 | Cada acción está mapeada a un rol y a un alcance | Global · País · Restaurante (*propuesta*) | — |
| BO-PER-02 | Lo que el rol no puede ver no aparece en la navegación; lo que no puede hacer se muestra deshabilitado con el motivo | Tooltip con el permiso que falta | Nielsen #1 |

## BO-PRE · Previsualización

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-PRE-01 | Todo contenido que ve el cliente final tiene live preview antes de publicar | Por canal (App, Web, ADK) y por tamaño; splash, banners, cards, pop-ups, íconos | Nielsen #1 |
| BO-PRE-02 | Los assets se validan al subirlos | Formato, peso y medidas del canal; error antes de guardar (ver manual de Splash Screen) | Prevención de errores |

## BO-SIS · Sistema y contenido

| ID | Regla | Umbral / criterio | Base |
|---|---|---|---|
| BO-SIS-01 | Instancias de `DashBoard Foundation`, sin detach | — | DS |
| BO-SIS-02 | Colores y textos enlazados a variables y estilos; se revisa en Light y Dark | — | D-C03 · D-C04 |
| BO-SIS-03 | Foco de teclado visible y distinto de hover | ≥ 2 px, contraste ≥ 3:1 | WCAG 2.4.7 · 2.4.11 · D-C06 |
| BO-SIS-04 | Áreas de clic ≥ 24 × 24 px | — | WCAG 2.5.8 |
| BO-SIS-05 | Un solo idioma de UI por sesión, con keys de i18n | Hoy el árbol mezcla español e inglés | [IA](../../Archway/Dashboard/structure/information-architecture.md#observaciones) |
| BO-SIS-06 | Íconos de *Iconography*; nunca emojis como íconos de sistema | — | [Iconografía](../../Archway/Iconografia/README.md) |
| BO-SIS-07 | Copy validado con [voz y tono](../../Voz-y-Tono/README.md) | — | — |
