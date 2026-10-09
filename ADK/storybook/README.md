# ADK Storybook

Visualización de las Foundations de ADK (Advance Kiosk), la plantilla de kiosco y los formatos futuros.

**No define valores propios:** todo sale de [`../tokens/adk.tokens.json`](../tokens/adk.tokens.json), relevado de Figma (SSOT). Los semánticos de ese archivo son una **propuesta**: ADK no tiene variables en Figma.

## Uso

```bash
cd ADK/storybook
npm install
npm run fonts -- ~/ruta/a/Speedee_V1.301   # una sola vez, fuente con licencia
npm run dev       # http://localhost:6008
```

Corre en el puerto **6008**, así se puede tener abierto junto con ArchWay (6006) y Dashboard (6007).

## Páginas

| Sección | Contenido |
|---|---|
| ADK › Introducción | Fuente de la verdad y estado de cada foundation |
| Foundations › Color | Primitivos con su equivalente ArchWay (ΔE), semánticos propuestos → ArchWay, contraste WCAG de pares reales |
| Foundations › Tipografía | Los 20 estilos a tamaño real y el **modo kiosk** propuesto sobre la escala de ArchWay (selector Mobile / Tablet / Kiosk) |
| Foundations › Espaciado y forma | Spacers, radios, bordes, sombras y gradientes |
| Foundations › Layout de kiosco | Lienzo 1080 × 1920 armado con los tokens de layout, con capas de zonas y del área accesible (800 / 960) |
| Foundations › Formatos futuros | El mismo shell en Kiosk, Kiosk S y Tablet con container queries (propuesta) |
| Componentes › * | Doc de cada familia (`../components/*.md`) |
| Audit | `../audit.md` |
| Convergencia | `Convergencia/adk-archway.md` |

## Scripts

| Script | Qué hace |
|---|---|
| `npm run tokens` | Genera `src/generated/tokens.css` (variables `--adk-*` y clases `.adk-*` de texto) |
| `npm run build` | Build estático en `storybook-static/` |
| `npm run typecheck` | `vue-tsc` en modo strict |
