# Archway

Carpeta padre de todos los sistemas de diseño de Arcos Dorados. **ArchWay es el destino**: Dashboard, ADK y Legacy viven acá adentro mientras convergen hacia sus foundations, así que cuando se ajusten ya están en el lugar correcto.

**Figma es la única fuente de la verdad.** Cada carpeta documenta lo que está publicado en su archivo de Figma; las propuestas viven en el `audit.md` de cada sistema y no se aplican sin aprobación.

| Carpeta | Qué es | Figma | Storybook |
|---|---|---|---|
| [`Archway-DS/`](./Archway-DS/README.md) | **ArchWay DS** — el sistema principal: foundations, tokens, audit y guías | [Archway Foundations Library](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) | `Archway-DS/storybook` · 6006 |
| [`Dashboard/`](./Dashboard/README.md) | **Dashboard DS** — CMS: foundations, componentes (docs + Vue) y estructura | [DashBoard Foundation](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) | `Dashboard/storybook` · 6007 |
| [`ADK/`](./ADK/README.md) | **ADK DS** — kioscos de autoservicio (1080 × 1920): foundations, componentes (docs + Vue) y layout | [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) | `ADK/storybook` · 6008 |
| [`Legacy/`](./Legacy/README.md) | **Legacy DS** — el sistema anterior, en depreciación | Pendiente | — |
| [`Convergencia/`](./Convergencia/README.md) | **Plan para unificar todo en ArchWay**: decisiones, fases, backlog y checklist | — | — |
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
├── Legacy/                ← por relevar
├── Convergencia/          ← plan maestro + análisis por sistema
└── figma-snapshots/       ← fotos de Figma por fecha
```
