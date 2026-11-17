# ArchWay UI — Web

Componentes de ArchWay para **Nuxt 4 + Vue 3 + TypeScript (strict) + Tailwind CSS**, generados desde la documentación de [`components/`](../components) (Figma › *Design Resources CORE*, relevado el 16/11/2026).

## Reglas

- **Sólo tokens.** Los colores, espaciados, radios, sombras y motion salen de [`tailwind.preset.ts`](./tailwind.preset.ts), que lee [`tokens/archway.tokens.json`](../tokens/archway.tokens.json) y apunta a variables `--aw-*`. Ningún componente tiene valores de color sueltos. Las medidas propias de un componente (por ejemplo 116 × 112 del Tile) van como clase arbitraria con el valor de Figma.
- **Tipografía:** clases `.aw-*` generadas desde los text styles (`aw-label-medium`, `aw-heading-small-bold`…).
- **Visual = Figma.** Las propuestas de la [auditoría](../components/audit.md) **no** se aplicaron, salvo donde la accesibilidad lo exige sin cambiar el visual:
  - área táctil de 48 con `.aw-hit` (C-A04);
  - disabled por token, nunca opacidad (C-A05);
  - tokens equivalentes donde Figma usa hex sueltos o variables eliminadas (C-T01, C-T02 — Pin, Product Card, Progress específicos). Están marcados en el comentario de cada componente.
- **Hover:** no existe en Figma (C-S03) y no se agregó. **Focus:** el estado Focused de Figma se muestra con `:focus-visible`.
- `prefers-reduced-motion` apaga shimmer, loops y transiciones (`src/styles/ui.css`).
- Vue: siempre `<script setup lang="ts">`, `defineModel` para el `v-model`.

## Uso en Nuxt 4

```ts
// tailwind.config.ts
import archway from '@arcosdorados/archway-ui/tailwind.preset'
export default {
  presets: [archway],
  content: ['./app/**/*.{vue,ts}', './node_modules/@arcosdorados/archway-ui/src/**/*.vue'],
  corePlugins: { preflight: false },
}
```

```ts
// nuxt.config.ts — tokens.css (variables --aw-*) + estilos base de los componentes
export default defineNuxtConfig({
  css: ['@arcosdorados/archway-ui/tokens.css', '@arcosdorados/archway-ui/src/styles/ui.css'],
})
```

```vue
<script setup lang="ts">
import { AwButton, AwTextField } from '@arcosdorados/archway-ui'
const email = ref('')
</script>

<template>
  <AwTextField v-model="email" label="Email" type="email" />
  <AwButton label="Continuar" block />
</template>
```

> Hoy `tokens.css` se genera en `storybook/src/generated/` (`npm run tokens`). Al publicar el paquete se copia junto al preset.

## Componentes

| Core | Específicos 💠 |
|---|---|
| `AwButton`, `AwIconButton`, `AwFab` | `AwHeader` |
| `AwChip`, `AwTag`, `AwBadge`, `AwDivider` | `AwGamificationBar` |
| `AwTextField` (text, password, textarea), `AwSelect`, `AwPinCode`, `AwSearch` | `AwLoyaltyCard` |
| `AwCheckbox`, `AwRadio`, `AwSwitch` | `AwVoucherCard`, `AwSettingCard` |
| `AwListItem`, `AwCard`, `AwTile` (tile y category) | `AwProductCard`, `AwBanner` |
| `AwToast`, `AwInlineNotice`, `AwTooltip`, `AwSkeleton` | `AwDialog` |
| `AwProgressBar`, `AwProgressCircle`, `AwPagination`, `AwStepper` | `AwMissionTile`, `AwPin` |
| `AwTopBar`, `AwNavBar`, `AwIcon` | `AwBenefitsProgress` |

Cada uno tiene su story en el Storybook (**Componentes › Core / Específicos**, dentro de la ficha de cada componente): *Playground* con controles y *Web · iOS · Android* con la demo en vivo y el código de las tres plataformas.

## Íconos

`AwIcon` lee `icons/archway-icons.json`. Muchos íconos tienen dibujos distintos por tamaño (`sizes["16" | "32" | "48"]`), como en Iconography: por defecto se usa el dibujo del tamaño pedido y, si hace falta otro, se fuerza con `art` (p. ej. el chevron de la Top Bar usa `art="32"` a 24 px). `chevron-right`, `chevron-down` y `chevron-left` son alias rotados de `chevron-up`. Los paths con `knockout` se pintan con `Icon/on-color` y los `inner` con `Icon/primary`, para los íconos rellenos de dos tonos (`*-filled`, `cancel-red`).

## Paridad con Figma

Storybook tiene una historia oculta (*QA paridad Figma › Render*, `?t=<template>&w=<ancho>`) que renderiza un componente suelto para compararlo píxel a píxel con la captura de Figma (dpr 1, sin animaciones). Medidas que no salen del tamaño de la caja se resuelven así:

- **Bordes interiores:** los trazos de Figma son *inside*; en web van como `box-shadow: inset 0 0 0 Npx` para no sumar al tamaño.
- **Métricas de Speedee:** el TTF usa `useTypoMetrics` y Chrome lo dibujaba 2 px más arriba que Figma. Los `@font-face` llevan `ascent-override: 99.6%`, `descent-override: 26.8%` y `line-gap-override: 0%`. Usar los mismos valores al cargar la fuente en Nuxt.

## Pendiente

- iOS y Android no recibieron todavía los ajustes de medidas del 17/11 (ver la sección *Cambios 2026-11-17* de cada ficha).

- Íconos **Local** y **Moto** de Iconography (Header PickUp / Delivery) no están exportados todavía: el Header usa un slot `mode-icon`.
- La regla de *Liquid Glass* y las marcas "A definir" de Figma ([C-S06](../components/audit.md#c-s06--marcas-pendientes)).
