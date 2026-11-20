# Template de presentación — ArchWay

> **Deck vivo:** [Template de presentación — Archway](https://claude.ai/artifact/8Nvc8aiY3EYo2XAmzgrSpx) (Claude Slides, 16:9, 1920 × 1080).
> **Snapshot:** 2026-11-20. Esta carpeta es la copia versionada del deck. Si el deck cambia, se vuelve a exportar acá.

Base para cualquier presentación de UX / Producto en Arcos Dorados. Usa los tokens de [ArchWay DS](../../Archway-DS/README.md), el logo y los íconos de [Iconografía](../../Iconografia/README.md) y las ilustraciones del [Illustrations Guide](../../Ilustraciones/README.md).

## Cómo usarlo

1. Duplicá el deck vivo en Claude (o pedile a Claude que arme uno nuevo a partir de esta carpeta).
2. Reemplazá todo lo que está entre corchetes: `[Título]`, `[__%]`, `[Responsable · fecha]`.
3. Borrá los layouts que no uses y duplicá los que se repiten (el separador de sección va una vez por bloque de la agenda).
4. Cada slide tiene una nota de orador con el uso del layout.

## Estructura

```
presentations/
├── README.md          ← este archivo
├── deck/
│   ├── deck.json      ← índice: orden de slides, secciones, título
│   ├── deck.css       ← tokens y estilos compartidos (todas las slides lo usan)
│   └── slides/        ← un <section> HTML por slide
└── assets/            ← logo, ícono e ilustraciones que usa el deck
```

## Layouts

| # | Slide (`id`) | Fondo | Para qué |
|---|---|---|---|
| 01 | `cover` | Split negro / claro | Portada: título, bajada, autor y fecha. Ilustración a la derecha y un dato opcional |
| 02 | `agenda` | Claro | De 3 a 5 puntos con etiquetas (01)…(04) |
| 03 | `section` | Negro | Separador de sección, uno por bloque de la agenda |
| 04 | `statement` | Claro | Una idea fuerte, imagen y dos números grandes |
| 05 | `twocol` | Blanco | Enfoque: imagen, card Gold y card negra arriba; título abajo |
| 06 | `cards` | Negro | Tres pilares (Gold, blanco y gris) |
| 07 | `kpis` | Blanco | Distribución en barras escalonadas. Las alturas se ajustan por `.col` |
| 08 | `table` | Split claro / negro | Lectura a la izquierda, tabla comparativa sobre el panel negro |
| 09 | `roadmap` | Claro | Recorrido ascendente de cuatro etapas (SVG + labels) |
| 10 | `image` | Imagen a sangre | Foto o captura con caption en card blanca |
| 11 | `quote` | Gradiente Loyalty | Cita de usuario o stakeholder. Una sola vez por deck |
| 12 | `closing` | Claro | "Gracias", contacto y próximos pasos (acción · responsable · fecha) |

## Reglas visuales

- **Encabezado:** "Arcos Dorados · [Proyecto]" a la izquierda y el número de página con divisor a la derecha (`.hdr`). La portada, la imagen a sangre y la cita no lo llevan.
- **Marca (`.mark`):** el logo de McDonald's en un círculo de 72 px más el ícono Arcos (Iconography › Brand › Arcos, `Color=Black`) en un círculo Gold 500 superpuesto.
  - Sobre fondo claro, el círculo del logo es Black 800 (`#292929`).
  - **Sobre fondo negro, el círculo del logo es Red 600 (`#DB0007`).** La regla está en `deck.css` y se aplica sola en `.cover-left`, `.dark` y `.panel-dark`.
- **Tipografía:** Speedee, con Helvetica Neue y Arial como reemplazo. Escala de 96 / 64 / 40 / 28 / 24 px. Los titulares van en peso Regular (400) con tracking negativo; el énfasis va en Bold. Nada por debajo de 24 px.
- **Etiquetas:** entre paréntesis, `(01)`, en Black 500.
- **Color:** sólo tokens de ArchWay.

  | Token | Hex | Uso en el deck |
  |---|---|---|
  | `gold-500` | `#FFBC0D` | Acento, cards Gold, barra principal, círculo del ícono Arcos |
  | `black-800` | `#292929` | Texto, fondos negros, cards negras |
  | `black-700` | `#424242` | Cards grises, divisores sobre negro |
  | `black-50` | `#F5F5F5` | Fondo claro |
  | `red-600` | `#DB0007` | Círculo del logo sobre negro |
  | `gradient-loyalty-ab` | `#910063 → #DB0007 → #E8720A` | Slide de cita |

- **Formas:** cards y placeholders Square Circle con radio L (16 px). Badges y marca en círculo (regla Round).
- **Motion:** entrada con `easing-entrance` (`cubic-bezier(0,0,.2,1)`). `rise` dura 0,4 s, `pop` 0,6 s y las barras crecen en 0,6 s, con escalonado de 0,1 s.
- **Íconos:** nada de emoji; sólo el set de Iconografía.

## Assets

Los `<img>` del deck apuntan a assets subidos al deck vivo (`/_blob/<id>`). Si armás el deck en otro lado, reemplazá cada URL por el archivo de `assets/`:

| Archivo | Fuente | `src` en el deck |
|---|---|---|
| `logo-mcdonalds-gold.svg` | [`Voz-y-Tono/assets/logo.svg`](../../../Voz-y-Tono/assets/logo.svg) | `/_blob/20122e6be7044318ad777ad01dec310c` |
| `arcos-black-56.svg` | Iconography › Brand › Arcos · `Color=Black, Size=56px` (`323:7450`) | `/_blob/649895e6bd4e8865969a4bfb1109ac21` |
| `ilustracion-big-mac-centred.png` | Illustrations Guide › Menu Items centred › Big Mac_centred (`6629:8798`), sin fondo | `/_blob/65ba4cee50fc6e55f12ee07919660077` |
| `ilustracion-fries-centred.png` | Illustrations Guide › Menu Items centred › Fries_centred (`6629:8702`), sin fondo | `/_blob/5d26222b45680f0eac94001003f6c66e` |
| `ilustracion-loyalty-hand-with-phone.png` | Illustrations Guide › Loyalty › Loyalty Hand with phone (`4057:2157`), sin fondo | `/_blob/d263d4e97fdc9ede679e1e8ed6037456` |

Las ilustraciones se exportaron a 3× (816 × 816) y se les quitó el fondo blanco. En Loyalty se mantuvo el blanco de la pantalla del teléfono. Para cambiar una ilustración, elegí otra del [catálogo](../../Ilustraciones/README.md) de la misma familia: no se mezclan familias en una misma pieza.

## Pendientes

- [ ] **Speedee embebida:** la licencia no permite versionarla (ver [`ADK/storybook/fonts/README.md`](../../ADK/storybook/fonts/README.md)). Hoy el deck la pide por nombre, así que se ve en las compus que la tienen instalada y en el resto cae a Helvetica Neue o Arial. Para embeberla hay que subir `Speedee_W_Rg.woff2` y `Speedee_W_Bd.woff2` al deck vivo.
