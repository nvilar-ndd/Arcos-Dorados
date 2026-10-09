# Banners y botones de categoría

> **Fuente:** [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) — páginas [Banners](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=137-9104) y [Banners Categorias](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=11-2495).
> **Origen:** ADK. ArchWay tiene Banner y Card de categoría (mobile), con otras medidas.

## Banner

**Propósito:** promoción o comunicación (por ejemplo *"¡Llegó MiMcDonald's!"* para loyalty) dentro de la columna de contenido.

| Pieza | Medida / token |
|---|---|
| Contenedor | 656 × 200 · `radius.s` 8 · `shadow.bordered-down` (0 8 16 #292929 / 16 %) |
| Margen de seguridad | 24 en todo el borde: texto e imagen clave no pueden salir de ahí |
| Título | 36 Bold (`headline.small-bold`) |
| Variante | `loyalty` (con gradiente Loyalty AB / BA) |

| Criterio | Detalle |
|---|---|
| Imagen | Si el banner es sólo imagen con texto horneado, el texto no escala ni se traduce. **Proponemos texto en vivo sobre imagen**, y si no se puede, `alt` con el texto completo |
| Contraste del texto | Calcular sobre la zona real de la foto. Usar scrim `#292929` al 40 % cuando haga falta |
| Interacción | Si es tocable, es un `<a>` o `<button>` con nombre accesible y área completa |

## Botón de categoría (`category_buttons`)

**Propósito:** acceso a una categoría desde el Home (módulo *Categorías*, 656 × 424 = 2 × 2).

```
┌───────────── 320 ─────────────┐
│          [ilustración          │   radius.m 12 · fondo blanco
│           190 × 190]           │   borde #979797 (fuera de paleta)
│     Nombre categoría (28)      │   200 de alto
└────────────────────────────────┘
```

| Criterio | Detalle |
|---|---|
| Tamaño | 320 × 200, holgado ✅ |
| Nombre | 28 (`headline.extra-small`), siempre visible: la ilustración sola no alcanza |
| Borde | `#979797` no está en la paleta. Usar `border.subtle` si es decorativo, o `border.default` si es el único límite del botón |
