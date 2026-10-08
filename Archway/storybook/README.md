# ArchWay Storybook

Visualización de las Foundations de ArchWay. **No define valores propios:** todo sale de [`../tokens/archway.tokens.json`](../tokens/archway.tokens.json), exportado desde Figma (SSOT).

## Uso

```bash
cd Archway/storybook
npm install
npm run dev       # http://localhost:6006
npm run build     # sitio estático en storybook-static/
npm run typecheck # vue-tsc, TypeScript strict
```

`npm run dev` y `npm run build` corren antes `npm run tokens`, que genera `src/generated/tokens.css` (CSS variables `--aw-*` + clases de texto `.aw-*`). Ese archivo no se versiona.

## Páginas

| Sección | Contenido |
|---|---|
| ArchWay › Introducción | Flujo Figma → audit → tokens → Storybook y reglas de consumo |
| Foundations › Color | Semánticos (con alias y uso), Primitivos por familia + gradientes, Contraste WCAG calculado en vivo |
| Foundations › Tipografía | Los 20 text styles renderizados con sus variables `Font/*` |
| Foundations › Espaciado | Escala `Valor/spacing/*` |
| Foundations › Grilla | Master Frame 412, grilla de 4 columnas y baseline de 8px, interactiva por ancho de viewport |
| Foundations › Radios | Escala `Valor/radius/*` |
| Foundations › Elevación | Sombras Shallow / Deep |
| Foundations › Motion | Duraciones y curvas animadas, patrones (Scale & Depth, Golden Path, Move) y simulación de "Reducir movimiento" |

## Stack

Storybook 8.6 · Vue 3 (`<script setup lang="ts">`) · Vite · TypeScript strict · addon-a11y.

## Notas

- **Speedee** es tipografía con licencia: se usa si está instalada localmente; si no, cae en Helvetica Neue / Arial.
- El addon de accesibilidad marca una violación de contraste en *Color › Contraste*: son las muestras de los pares que hoy fallan, a propósito.
- La tabla de contraste se recalcula desde los tokens: al aplicar en Figma lo aprobado del audit y regenerar el JSON, se actualiza sola.
