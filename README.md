# Arcos Dorados — Design & UI Engineering

Repositorio de documentación y código de los sistemas de diseño de Arcos Dorados (McDonald's Latinoamérica). Figma es la fuente de la verdad; este repo documenta lo publicado en Figma.

| Carpeta | Contenido |
|---|---|
| [`Archway/`](./Archway/README.md) | **Todos los sistemas de diseño**, con ArchWay como padre: [ArchWay DS](./Archway/Archway-DS/README.md), [Dashboard](./Archway/Dashboard/README.md), [ADK](./Archway/ADK/README.md), [Legacy](./Archway/Legacy/README.md), los [íconos](./Archway/Iconografia/README.md) y las [ilustraciones](./Archway/Ilustraciones/README.md) compartidos, el [plan de convergencia](./Archway/Convergencia/README.md) y las [fotos de Figma](./Archway/figma-snapshots/README.md) |
| [`ADK/`](./ADK/README.md) | **Producto kiosco (ADK)**: flujos, [principios de kiosco](./ADK/docs/principios-kiosco.md) con reglas auditables, [mapa de flujos](./ADK/docs/mapa-de-flujos.md) de los 3 archivos de Figma, `design.md` por feature y auditorías de flujo. El sistema de diseño del kiosco sigue en [`Archway/ADK`](./Archway/ADK/README.md) |
| [`Voz-y-Tono/`](./Voz-y-Tono/README.md) | **Manual de voz, tono y estilo** v1.0 (vigente desde el 15/10/2026): voz UX, tono, contextos, estilo de escritura, accesibilidad, localización y voz hablada |
| [`Base-de-conocimiento/`](./Base-de-conocimiento/README.md) | **Referencia transversal** para todo el trabajo de producto y diseño de Arcos: [Leyes de UX](./Base-de-conocimiento/leyes-de-ux.md) y [Accesibilidad — WCAG y estándares W3C](./Base-de-conocimiento/accesibilidad-wcag.md) |

## Storybooks

| Sistema | Carpeta | Puerto |
|---|---|---|
| ArchWay DS | `Archway/Archway-DS/storybook` | http://localhost:6006 |
| Dashboard | `Archway/Dashboard/storybook` | http://localhost:6007 |
| ADK | `Archway/ADK/storybook` | http://localhost:6008 |

```bash
cd Archway/Archway-DS/storybook && npm install && npm run dev
```
