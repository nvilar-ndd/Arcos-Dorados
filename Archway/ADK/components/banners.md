# Banners y botones de categoría

> **Fuente:** [[ADK] Design System](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System) — páginas [Banners](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=137-9104) y [Banners Categorias](https://www.figma.com/design/IAqK97JM1KkMLs1VWGGTkv/-ADK--Design-System?node-id=11-2495).
> **Origen:** ADK. ArchWay tiene Banner y Card de categoría (mobile), con otras medidas.

## Banner

**Propósito:** promoción o comunicación (por ejemplo *"¡Llegó MiMcDonald's!"* para loyalty) dentro de la columna de contenido.

| Pieza | Medida / token |
|---|---|
| Contenedor | 656 × 200 · fondo blanco · `radius.s` 8 · `shadow.bordered-down` (0 8 16 #292929 / 16 %) |
| Anatomía | Ilustración a la izquierda · título · bajada Bold · CTA secundario ("Quiero registrarme") |
| Margen de seguridad | 24 en todo el borde: texto e imagen clave no pueden salir de ahí |
| Título | 36 Bold (`headline.small-bold`); en loyalty la marca va con el gradiente Loyalty |
| Variante | `loyalty` (texto de marca con gradiente Loyalty AB) |

| Criterio | Detalle |
|---|---|
| Imagen | Si el banner es sólo imagen con texto horneado, el texto no escala ni se traduce. **Proponemos texto en vivo sobre imagen**, y si no se puede, `alt` con el texto completo |
| Contraste del texto | Calcular sobre la zona real de la foto. Usar scrim `#292929` al 40 % cuando haga falta |
| Interacción | Si es tocable, es un `<a>` o `<button>` con nombre accesible y área completa |

## Botón de categoría (`category_buttons`)

**Propósito:** acceso a una categoría desde el Home (módulo *Categorías*, 656 × 424 = 2 × 2).

```
┌──────────────── 320 ────────────────┐
│                         ┌─────────┐ │  radius.m 12 · fondo blanco · elevación
│  Nombre                 │ ilustr. │ │  nombre 28 Bold, padding 16
│  categoría (28 Bold)    │ 190 →144│ │  ilustración de 190 recortada a 144
│                         └─────────┘ │  200 de alto
└─────────────────────────────────────┘
```

| Criterio | Detalle |
|---|---|
| Tamaño | 320 × 200, holgado ✅ |
| Nombre | 28 (`headline.extra-small`), siempre visible: la ilustración sola no alcanza |
| Límite | Lo da la elevación sobre fondo Ivory. Hay un `#979797` suelto en la capa (fuera de paleta, A-S04) |
