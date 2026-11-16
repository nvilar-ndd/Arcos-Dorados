# ArchWay Storybook

Visualización de las Foundations y los componentes de ArchWay. **No define valores propios:** todo sale de [`../tokens/archway.tokens.json`](../tokens/archway.tokens.json), exportado desde Figma (SSOT). Única excepción: la paleta de ilustración (`src/data/illustration-palette.ts`), que en Figma es una tabla de texto y no variables.

## Uso

```bash
cd Archway/Archway-DS/storybook
npm install
npm run fonts -- ~/ruta/a/Speedee_V1.301   # una sola vez, fuente con licencia
npm run dev       # http://localhost:6006
npm run build     # sitio estático en storybook-static/
npm run typecheck # vue-tsc, TypeScript strict
```

`npm run dev` y `npm run build` corren antes `npm run tokens`, que genera `src/generated/tokens.css` (CSS variables `--aw-*` + clases de texto `.aw-*`). Ese archivo no se versiona.

## Páginas

| Sección | Contenido |
|---|---|
| ArchWay › Introducción | Flujo Figma → audit → tokens → Storybook y reglas de consumo |
| ArchWay › Glosario | Se renderiza desde `../glossary.md` |
| Foundations › Color | Semánticos (con alias y uso), Primitivos por familia + gradientes, Contraste WCAG calculado en vivo, Paleta de ilustración (referencia, no tokens) |
| Foundations › Tipografía | Los 20 text styles renderizados con sus variables `Font/*` y el simulador del tamaño de letra del sistema (topes +30 % / el doble) |
| Foundations › Espaciado | Escala `Valor/spacing/*` |
| Foundations › Grilla | Master Frame 412, grilla de 4 columnas y baseline de 8px, interactiva por ancho de viewport |
| Foundations › Radios | Escala `Valor/radius/*` |
| Foundations › Elevación | Sombras Shallow / Deep |
| Componentes › Pirámide y estado | Se renderiza desde `../components/README.md`: niveles, reglas de forma y Liquid Glass, estado de cada componente |
| Componentes › Core / Específicos | Una página por ficha (`../components/**/*.md`) con el nodo de Figma embebido en vivo arriba (requiere sesión de Figma en el navegador). Los links internos apuntan a GitHub |
| Componentes › Audit | `../components/audit.md` |
| Guías › Migración tipográfica | Se renderiza desde `../guides/typography-legacy-migration.md` |
| Foundations › Motion | Duraciones y curvas animadas, patrones (Scale & Depth, Golden Path, Move) y simulación de "Reducir movimiento" |

## Stack

Storybook 8.6 · Vue 3 (`<script setup lang="ts">`) · Vite · TypeScript strict · addon-a11y.

## Notas

- **Speedee** es tipografía con licencia y **no se versiona**. Copiá los `.woff2` en `fonts/` (`npm run fonts -- <ruta a Speedee_V1.301>`; ver [fonts/README.md](./fonts/README.md)). Sin ellos, el Storybook usa Helvetica Neue / Arial.
- El addon de accesibilidad marca una violación de contraste en *Color › Contraste*: son las muestras de los pares que hoy fallan, a propósito.
- La tabla de contraste se recalcula desde los tokens: al aplicar en Figma lo aprobado del audit y regenerar el JSON, se actualiza sola.
