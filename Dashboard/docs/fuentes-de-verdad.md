# Fuentes de la verdad

> Armado el **2026-11-17** a partir de lo documentado en `Archway/Dashboard` (extracción vía Figma MCP del 2026-10-08, revisada el 2026-11-16).

## Archivos de producto (Figma)

| Archivo | File key | Módulos | Estado |
|---|---|---|---|
| *Pendiente* | — | — | ⬜ Falta identificar los archivos de producto del Dashboard (pantallas reales de Promociones, Restaurantes, Delivery, etc.) |

Mientras tanto, los únicos ejemplos de pantallas de producto están dentro del archivo del DS:

| Ejemplo | Dónde |
|---|---|
| Argentina › Promociones (formulario de Country) | [Medidas / UI Templates](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4428-15250) |
| Promotions › Crear (paso a paso: Descuento → Detalles generales → Disponibilidad → Segmentación → Contenido de apoyo → Revisión) | [Medidas / UI Templates](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4428-15250) |
| Árbol de navegación v-03/11/26 y Country → Configuration | [UI shell / Header + PanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=657-36880) · [SubPanelLeft](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4103-17) |

## Sistema de diseño y contexto (resto del repo)

| Qué | Dónde | Para qué se usa acá |
|---|---|---|
| Dashboard DS — README | [`Archway/Dashboard`](../../Archway/Dashboard/README.md) | Mapa del sistema |
| Foundations | [`color`](../../Archway/Dashboard/foundations/color.md) · [`typography`](../../Archway/Dashboard/foundations/typography.md) · [`spacing`](../../Archway/Dashboard/foundations/spacing.md) · [`radius`](../../Archway/Dashboard/foundations/radius.md) · [`grid`](../../Archway/Dashboard/foundations/grid.md) | Umbrales de [`principios-dashboard.md`](./principios-dashboard.md) |
| Componentes (27 familias) | [`Archway/Dashboard/components`](../../Archway/Dashboard/components/README.md) | Anatomía, variantes y estados al auditar pantallas |
| UI shell e IA | [`structure/`](../../Archway/Dashboard/structure/README.md) · [`information-architecture.md`](../../Archway/Dashboard/structure/information-architecture.md) | Módulos y navegación |
| Plantillas de pantalla | [`usage/`](../../Archway/Dashboard/usage/README.md) | Patrón según contexto y medidas |
| Tokens | [`dashboard.tokens.json`](../../Archway/Dashboard/tokens/dashboard.tokens.json) | Valores Light/Dark |
| Audit del DS | [`Archway/Dashboard/audit.md`](../../Archway/Dashboard/audit.md) | Los hallazgos `D-*` se citan, no se repiten |
| Convergencia | [`Convergencia/dashboard-archway.md`](../../Archway/Convergencia/dashboard-archway.md) | Decisión DS separado vs. ArchWay |
| Storybook | `Archway/Dashboard/storybook` · http://localhost:6007 | Comportamiento real de componentes y plantillas |
| Íconos e ilustraciones | [`Iconografia`](../../Archway/Iconografia/README.md) · [`Ilustraciones`](../../Archway/Ilustraciones/README.md) | — |
| Voz y tono v1.0 | [`Voz-y-Tono`](../../Voz-y-Tono/README.md) | Errores, confirmaciones, estados vacíos, CTA |
| Leyes de UX · WCAG | [`leyes-de-ux.md`](../../Base-de-conocimiento/leyes-de-ux.md) · [`accesibilidad-wcag.md`](../../Base-de-conocimiento/accesibilidad-wcag.md) | Justificación de hallazgos |

## Qué falta relevar

- [ ] Links y file keys de los archivos de producto del Dashboard.
- [ ] Ambiente del Dashboard en producción / staging para revisar flujos reales (con un usuario de prueba por rol).
- [ ] Matriz de roles y permisos actual.
- [ ] Métricas de uso por módulo (si existen) para priorizar auditorías.

> La documentación de Arcos-Dorados se actualiza seguido. Antes de cada auditoría se toma la versión vigente de `main`; si un umbral del DS cambió, se corrige [`principios-dashboard.md`](./principios-dashboard.md).
