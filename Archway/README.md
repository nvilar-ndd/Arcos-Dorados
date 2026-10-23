# Archway

Carpeta padre de todos los sistemas de diseño de Arcos Dorados. **ArchWay es el destino**: Dashboard, ADK y Legacy viven acá adentro mientras convergen hacia sus foundations, así que cuando se ajusten ya están en el lugar correcto.

**Figma es la única fuente de la verdad.** Cada carpeta documenta lo que está publicado en su archivo de Figma; las propuestas viven en el `audit.md` de cada sistema y no se aplican sin aprobación.

| Carpeta | Qué es | Figma | Storybook |
|---|---|---|---|
| [`Archway-DS/`](./Archway-DS/README.md) | **ArchWay DS** — el sistema principal: foundations, tokens, audit y guías | [Archway Foundations Library](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) | `Archway-DS/storybook` · 6006 |
| [`Dashboard/`](./Dashboard/README.md) | **Dashboard DS** — CMS: foundations, componentes (docs + Vue) y estructura | [DashBoard Foundation](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) | `Dashboard/storybook` · 6007 |
| [`ADK/`](./ADK/README.md) | **ADK DS** — kioscos de autoservicio (1080 × 1920): foundations, componentes (docs + Vue) y layout | [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) | `ADK/storybook` · 6008 |
| [`Iconografia/`](./Iconografia/README.md) | **Íconos** de McDonald's Global (216 íconos, 2.699 variantes) ordenados por tipo, manual de creación y export a SVG. Compartidos por todos los sistemas | [Iconography](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=9-11) | — |
| [`Ilustraciones/`](./Ilustraciones/README.md) | **Ilustraciones**: Digital illustrations de Global, Specials de campaña e Ilustraciones Arcos, con guía de uso y manual de color | [Illustrations Guide](https://www.figma.com/design/E0n9VRsdG5TfPRqhf9sbFK/Illustrations-Guide?node-id=0-1) | — |
| [`Legacy/`](./Legacy/README.md) | **Legacy DS** — el sistema anterior, en depreciación | Pendiente | — |
| [`Convergencia/`](./Convergencia/README.md) | **Plan para unificar todo en ArchWay**: decisiones, fases, backlog y checklist | — | — |
| [`Base-de-conocimiento/`](./Base-de-conocimiento/README.md) | **Referencia transversal** para auditar y justificar decisiones: [Leyes de UX](./Base-de-conocimiento/leyes-de-ux.md) | — | — |
| [`figma-snapshots/`](./figma-snapshots/README.md) | Fotos de los archivos de Figma en cada revisión | — | — |

## Cómo se relacionan

```
                         ┌──────────────┐
                         │  ArchWay DS  │  foundations + tokens (destino)
                         └──────▲───────┘
                                │  Convergencia/ (plan maestro)
         ┌──────────────────────┼──────────────────────┐
   ┌─────┴─────┐          ┌─────┴─────┐          ┌─────┴─────┐
   │ Dashboard │          │    ADK    │          │  Legacy   │
   └───────────┘          └───────────┘          └───────────┘
   re-alias de             binding de             swap y
   semánticos              hex y textos           depreciación
```

## Storybooks

Cada sistema tiene el suyo. Desde la raíz del repo:

```bash
cd Archway/Archway-DS/storybook && npm install && npm run dev
cd Archway/Dashboard/storybook && npm install && npm run dev
cd Archway/ADK/storybook && npm install && npm run dev
```

| Storybook | URL |
|---|---|
| ArchWay DS | http://localhost:6006 |
| Dashboard | http://localhost:6007 |
| ADK | http://localhost:6008 |

La tipografía Speedee tiene licencia: cada Storybook la carga desde su carpeta `fonts/`, que está fuera de git (`npm run fonts`).

## Estructura

```
Archway/
├── README.md              ← este archivo
├── Archway-DS/            ← ArchWay: foundations, tokens, audit, guías, storybook
├── Dashboard/             ← foundations, components, structure, usage, ui (Vue), storybook
├── ADK/                   ← foundations, components, ui (Vue), storybook
├── Iconografia/           ← íconos compartidos: catálogo por tipo, manual, audit, svg/
├── Ilustraciones/         ← ilustraciones compartidas: catálogo, guía de uso y color
├── scripts/               ← export de íconos e ilustraciones desde Figma
├── Legacy/                ← por relevar
├── Convergencia/          ← plan maestro + análisis por sistema
├── Base-de-conocimiento/  ← referencia transversal: leyes de UX
└── figma-snapshots/       ← fotos de Figma por fecha
```
