# ADK UI — componentes Vue

Implementación web de los componentes de kiosco de ADK (Advance Kiosk).

| | |
|---|---|
| Stack | Vue 3 · TypeScript strict · Tailwind CSS 3 alimentado por tokens (para Nuxt 4) |
| Fuente de la verdad | [[ADK] Design System (Figma)](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) |
| Documentación | [`../components/`](../components/README.md) · [`../foundations/`](../foundations/layout.md) |
| Vista previa | Storybook de ADK (`cd ADK/storybook && npm run dev` → http://localhost:6008) |

## Criterio

- **Visual = Figma.** Tamaños, paddings, radios, colores y estados salen de los nodos de Figma (relevados vía MCP el 2026-10-09).
- **Accesibilidad mínima agregada, sin cambiar el reposo:**
  - HTML semántico y ARIA (switch, radiogroup, combobox, alertdialog, aria-current, aria-live).
  - Navegación por teclado / switch (el modo accesible de kiosco lo exige, EN 301 549).
  - Anillo de foco `adk-focus` sólo con `:focus-visible` (propuesta [A-C01](../audit.md#componentes)).
  - Feedback de toque `adk-press` (escala 0.98 de ArchWay).
- **Sin valores duros de color ni espaciado.** Las clases apuntan a `--adk-*`:
  - Los semánticos son la propuesta de [`adk.tokens.json`](../tokens/adk.tokens.json), con su destino en ArchWay.
  - Donde Figma usa un color sin rol (badges, textos de ilustración) se usa el primitivo (`text-p-tertiary-green`), anotado con [A-S01](../audit.md#a-s01--sin-variables-propias-).
  - Los únicos px fijos son medidas propias de cada componente (208 × 312 de la card, 888 del input, 40 del botón Small), que no son spacers de ADK.
- **Los hallazgos del audit no se corrigen en código** hasta que se aprueben en Figma. Por ejemplo, la línea `#ADADAD` del Text Field (A-A02) y el thumb del scroll (A-A03) quedan como en Figma.
- **Hover de Figma = presionado.** En touch el estado "Hover" se dibuja con `:active` ([A-C03](../audit.md#componentes)).

## Tokens → Tailwind

[`tailwind.preset.ts`](./tailwind.preset.ts) lee `../tokens/adk.tokens.json` y **reemplaza** la escala de Tailwind (no existen `p-4`, `bg-gray-100`…):

| Token | Clase | CSS |
|---|---|---|
| `button.primary` | `bg-button-primary` | `var(--adk-button-primary)` |
| `text.secondary` | `text-text-secondary` | `var(--adk-text-secondary)` |
| `border.selected` | `border-border-selected` | `var(--adk-border-selected)` |
| `border-width.selected` (3) | `border-selected`, `border-l-selected` | `var(--adk-border-width-selected)` |
| `spacing.24` | `p-24`, `gap-24`, `h-24` | `var(--adk-spacing-24)` |
| `radius.s` | `rounded-s` | `var(--adk-radius-s)` |
| `shadow.bordered-up` | `shadow-bordered-up` | `var(--adk-shadow-bordered-up)` |
| `gradient.loyalty-ab` | `bg-loyalty-ab`, `.adk-text-loyalty` | `var(--adk-gradient-loyalty-ab)` |
| Primitivo `tertiary.green` | `text-p-tertiary-green` | `var(--adk-color-tertiary-green)` |
| Text style `ADK/Body/Large` | `adk-body-large` | clase generada en `tokens.css` |

## Componentes

| Familia | Componentes |
|---|---|
| Buttons | `AdkButton` (primary · secondary · selection; lg · md · sm · xxl), `AdkIllustrationButton` |
| Controles | `AdkChip`, `AdkToggle`, `AdkQuantity` |
| Header | `AdkHeader`, `AdkLogo` |
| Navegación | `AdkNavMenu`, `AdkNavButton`, `AdkUserPoints`, `AdkCategoryNavButton`, `AdkProgressSteps` |
| Footer | `AdkFooter`, `AdkUserFooter`, `AdkCartBar`, `AdkPointsHint` |
| Input | `AdkTextField`, `AdkDropdown`, `AdkKeyboard` |
| Feedback | `AdkSnackbar`, `AdkSnackbarHost` + `useSnackbar()`, `AdkAlert`, `AdkLoader` |
| Scroll | `AdkScrollArea` |
| Banners | `AdkBanner`, `AdkCategoryCard` |
| Product | `AdkProductCard`, `AdkBadge`, `AdkLoyaltyPill`, `AdkCartItem`, `AdkProductCustomRow`, `AdkSizeSelector` |
| Shell | `AdkKioskShell` (con modo `accessible`), `AdkAttractScreen` |

Quedan fuera por ahora:

- **Dimensionamiento** y **Código de promoción**: la página *Product* está en progreso (🟠).
- **Loaders ilustrados** (agregar al carrito, papas): son animaciones de marca.
- **Logos e ilustraciones**: la app los provee como imágenes. `AdkLogo` y los slots `illustration` / `image` los reciben.

## Uso en Nuxt 4

1. Generar `tokens.css` (variables `--adk-*` + clases de texto) con `ADK/storybook/scripts/build-tokens.mjs` y cargarlo global, junto con las `@font-face` de Speedee.
2. `tailwind.config.ts`:

   ```ts
   import adk from './ADK/ui/tailwind.preset'
   export default {
     presets: [adk],
     content: ['./ADK/ui/src/**/*.{vue,ts}', './app/**/*.{vue,ts}'],
     corePlugins: { preflight: false },
   }
   ```

3. Cargar `src/styles/ui.css` (reset acotado a `.adk-ui`, foco, press, utilidades) después de `tokens.css`.
4. Usar los componentes:

   ```vue
   <script setup lang="ts">
   import { AdkKeyboard, AdkTextField } from '~/ADK/ui/src'
   const doc = ref('')
   </script>

   <template>
     <AdkTextField v-model="doc" label="Número de documento" inputmode="none" />
     <AdkKeyboard v-model="doc" type="number" />
   </template>
   ```

## Pantallas de referencia

`stories/pantallas.stories.ts` arma, con los componentes, las pantallas del flujo a 1080 × 1920:

- Home con pedido y su versión en modo accesible.
- Detalle paso a paso.
- Resumen del pedido.
- Datos para la factura con teclado en pantalla.
- Attract.

`stories/KioskFrame.vue` sólo las escala para verlas en el Storybook.
