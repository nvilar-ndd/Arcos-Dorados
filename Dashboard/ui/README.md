# Dashboard UI — componentes Vue

Implementación web de los componentes core y la estructura (UI shell) del Dashboard.

| | |
|---|---|
| Stack | Vue 3 · TypeScript strict · Tailwind CSS 3 alimentado por tokens (para Nuxt 4) |
| Fuente de la verdad | [DashBoard Foundation (Figma)](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation) |
| Documentación | [`../components/`](../components/README.md) · [`../structure/`](../structure/README.md) · [`../usage/`](../usage/README.md) |
| Vista previa | Storybook del Dashboard (`cd Dashboard/storybook && npm run dev` → http://localhost:6007) |

## Criterio

- **Visual = Figma.** Tamaños, paddings, radios, colores y estados salen de los nodos de Figma, con las variables semánticas que usa cada nodo.
- **Accesibilidad mínima agregada**, sin cambiar el diseño: HTML semántico, navegación por teclado, ARIA y el anillo de foco `db-focus` (`:focus-visible`), que es la propuesta [D-C06](../audit.md#d-c06--foco-visible).
- **Sin valores duros de color ni espaciado.** Las clases apuntan a `--db-*`. Donde Figma enlaza un primitivo directo, se usa la variable primitiva (`var(--db-color-…)`) y queda comentado con su hallazgo ([D-C03](../audit.md#d-c03--primitivos-enlazados-directo)). Los únicos px fijos son medidas propias de cada componente (p. ej. 288 del menú, 427 de la Selectable Card), que hoy no son tokens ([D-E01](../audit.md#d-e01--medidas-del-shell-sin-tokens)).
- **Los hallazgos del audit no se corrigen en código** hasta que se aprueben en Figma. Por eso el modo Dark muestra los problemas de contraste ya documentados (D-A01, D-A04, D-C13).

## Tokens → Tailwind

[`tailwind.preset.ts`](./tailwind.preset.ts) lee `../tokens/dashboard.tokens.json` y genera el theme. Las clases son el nombre de Figma:

| Figma | Clase | CSS |
|---|---|---|
| `layer/02` | `bg-layer-02` | `var(--db-layer-02)` |
| `text/primary` | `text-text-primary` | `var(--db-text-primary)` |
| `border/02` | `border-border-02` | `var(--db-border-02)` |
| `button/red-hover` | `bg-button-red-hover` | `var(--db-button-red-hover)` |
| `spacing/200` | `p-200`, `gap-200`, `h-200` | `var(--db-spacing-200)` |
| `radius/md` | `rounded-md` | `var(--db-radius-md)` |
| `size/modal/sm` | `max-w-modal-sm` | `var(--db-size-modal-sm)` |
| `breakpoint/md` | `md:` | 768px |
| Text style `Label02 - cms` | `db-label02` | clase generada en `tokens.css` |

La escala de Tailwind se **reemplaza**: no existen `p-4`, `bg-gray-100`, etc.; sólo los tokens. Light/Dark se resuelve con `[data-theme="dark"]`.

## Uso en Nuxt 4

1. Generar `tokens.css` (variables `--db-*` + estilos de texto) con `Dashboard/storybook/scripts/build-tokens.mjs` y cargarlo global.
2. `tailwind.config.ts`:

   ```ts
   import dashboard from './Dashboard/ui/tailwind.preset'
   export default {
     presets: [dashboard],
     content: ['./Dashboard/ui/src/**/*.{vue,ts}', './app/**/*.{vue,ts}'],
     corePlugins: { preflight: false },
   }
   ```

3. Cargar `src/styles/ui.css` (reset acotado a `.db-ui`, foco, utilidades) después de `tokens.css`.
4. Importar componentes:

   ```vue
   <script setup lang="ts">
   import { DbButton, DbTextField } from '~/Dashboard/ui/src'
   const name = ref('')
   </script>

   <template>
     <DbTextField v-model="name" label="Nombre" />
     <DbButton @click="save">Guardar</DbButton>
   </template>
   ```

Dependencias: `vue` 3.5 (usa `useId` y `defineModel`) y `lucide-vue-next` para los íconos, que reemplazan a la librería de íconos de Figma mientras no esté exportada como SVG.

## Componentes

| Familia (doc) | Componentes |
|---|---|
| [Button](../components/button.md) | `DbButton` |
| [FAB](../components/fab.md) | `DbIconButton`, `DbMenu` |
| [Text field](../components/text-field.md) | `DbTextField` (con `suggestions` = TextField_Dropdown), `DbTextArea` |
| [Dropdown](../components/dropdown.md) | `DbSelect` |
| [Toggle](../components/toggle.md) | `DbToggle` |
| [Checkbox](../components/checkbox.md) | `DbCheckbox` (+ `indeterminate`) |
| [Radio](../components/radio-button.md) | `DbRadio`, `DbRadioGroup` |
| [Date picker](../components/date-picker.md) | `DbDatePicker` (single / range · dropdown / modal), `DbCalendarMonth` |
| [Calendar](../components/calendar.md) | `DbBookingCalendar` |
| [File uploader](../components/file-uploader.md) | `DbFileUploader` |
| [Tabs](../components/tabs.md) | `DbTabs`, `DbSegmentedButton` |
| [Accordion](../components/accordion.md) | `DbAccordion` |
| [Pagination](../components/pagination.md) | `DbPagination` |
| [Link](../components/link.md) | `DbLink` |
| [Tag](../components/tag.md) | `DbTag` |
| [Tooltip](../components/tooltip.md) | `DbTooltip` |
| [Notification](../components/notification.md) | `DbNotification`, `DbToaster` + `useToasts()`, `DbStatusIcon` |
| [Modal](../components/modal.md) | `DbModal` |
| [Progress](../components/progress.md) | `DbProgressBar`, `DbProgressCircle`, `DbSpinner`, `DbStepper` |
| [Hr](../components/divider.md) · [Scroll](../components/scroll.md) · [Images](../components/image.md) · [Carousel](../components/carousel.md) | `DbDivider`, `DbScrollArea`, `DbImage`, `DbCarousel` |
| [Card](../components/card.md) | `DbCard`, `DbCardField`, `DbCardTable`, `DbCardOption`, `DbImageCard` |
| [Card List](../components/card-list.md) | `DbCardList` |
| [Selectable Card](../components/selectable-card.md) | `DbSelectableCard` |
| [Data table](../components/data-table.md) | `DbDataTable` |
| [UI shell](../structure/ui-shell.md) | `DbAppShell`, `DbHeader`, `DbSidebar`, `DbNavItem`, `DbSubPanel` |

Las plantillas de pantalla ([usage/page-templates.md](../usage/page-templates.md)) están armadas como stories en `stories/page-templates.stories.ts`.

## Estructura

```
ui/
├── tailwind.preset.ts      ← theme desde dashboard.tokens.json
├── src/
│   ├── index.ts            ← exports
│   ├── components/Db*.vue
│   ├── composables/        ← useDismiss, useToasts
│   ├── utils/date.ts
│   └── styles/ui.css
└── stories/*.stories.ts    ← vista previa (Storybook)
```

## Verificación

`npm run typecheck` (vue-tsc strict) y `npm run build` en `Dashboard/storybook`. Todas las stories se renderizan sin errores de consola en Light y Dark.
