# Manual para crear íconos — McDonald's Global

> **Fuente:** [Iconography › Information](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=562-787) (*Global Icon Updates*, septiembre 2021), ampliado por el equipo de UX de Arcos Dorados con el paso a paso de construcción en Figma.
> **Modelos:** [Order](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=910-4219) y [Receipt](https://www.figma.com/design/7Hb0VVgTTN1q1RMnVWFYvd/Iconography?node-id=1352-3287). Son los íconos que Global usa de ejemplo: dibujo, estructura y nombres se copian de ellos.

Los íconos de McDonald's se inspiran en los estándares iconográficos globales y en nuestra exclusiva ilustración de las famosas patatas fritas World Famous Fries™, creando una conexión perfecta entre nuestros elementos gráficos. Utilizamos íconos en todos los canales digitales de McDonald's para aportar claridad y guiar a los usuarios.

Este documento sirve como guía para una persona y como prompt para un agente que crea íconos vía Figma MCP.

## Qué hacer

1. Preguntá qué ícono hay que crear.
2. Abrí Order y Receipt. Son el modelo de dibujo, estructura y nombres.
3. Dibujá el ícono de línea en cada tamaño (ver [Cómo dibujar](#cómo-dibujar)).
4. Armá la versión de relleno (ver [Relleno](#relleno-outline--false)).
5. Dejá cada variante como un solo vector (ver [Vector](#vector)).
6. Aplicá el color con el estilo de Figma (ver [Color](#color)).
7. Poné los constraints del vector en Scale H y Scale V.
8. Convertí cada variante en componente y armá un component set con las 15 variantes.

## Si el ícono parte de otro ícono de Global

- Duplicá el component set del ícono base y usalo como punto de partida.
- No modifiques nada que no sea lo pedido: el resto del dibujo queda idéntico al ícono base, en las 15 variantes.
- La parte que cambia se redibuja con las medidas de la tabla (stroke, corner radius y fry tip del tamaño). No se recorta ni se borra un pedazo del dibujo original.
- Cambiá el nombre del component set y de los vectores por el del ícono nuevo.

## Especificaciones por tamaño

| Tamaño | Padding / área segura | Stroke (inside) | Corner radius | Fry tip |
|---|---|---|---|---|
| 56px | 7px | 2.5px | 3px | 1.75px |
| 48px | 6px | 2.25px | 2.5px | 1.5px |
| 32px | 4px | 1.75px | 2px | 1px |
| 24px | 3px | 1.25px | 1.5px | .75px |
| 16px | 2px | 1px | 1px | .5px |

El padding es siempre **1/8 del tamaño**: el área de dibujo queda en 42, 36, 24, 18 y 12 px.

## Contenedor del ícono

- El contorno negro representa el borde del contenedor.
- El área naranja representa el espacio interno o área segura.

```
┌──────────── 24px ────────────┐
│ 3px                          │
│   ┌────── 18px ──────┐       │
│   │                  │       │
│   │   área de dibujo │       │
│   │                  │       │
│   └──────────────────┘       │
│                          3px │
└──────────────────────────────┘
```

## Cómo dibujar

- Usá las medidas de la tabla para el tamaño que estás dibujando: stroke, corner radius y fry tip cambian en cada tamaño.
- En la versión de línea, todo el dibujo se ve como línea del grosor del stroke de la tabla, como en Order y Receipt.
- Las esquinas de las formas llevan el corner radius de la tabla.

## Punta de papa frita (fry tip)

- Las terminaciones en forma de punta de papa frita hacen únicos nuestros íconos y refuerzan la marca McDonald's.
- Se aplica cuando corresponde, para reforzar la identidad de marca en algunos íconos.
- **Cómo es** (ver Receipt): una línea recta con fry tip tiene una sola esquina redondeada en cada extremo, y las dos esquinas redondeadas quedan en diagonal (por ejemplo, abajo a la izquierda y arriba a la derecha). El radio de esas esquinas es la medida de fry tip de la tabla. Las otras dos esquinas quedan rectas.
- En Receipt, las líneas paralelas alternan la diagonal: la primera y la tercera tienen redondeadas abajo a la izquierda y arriba a la derecha; la del medio, arriba a la izquierda y abajo a la derecha.
- **Cómo construirla en Figma:** un rectángulo del alto del stroke, con esas dos esquinas en el radio de fry tip y las otras dos en 0.

## Relleno (Outline = False)

- Se rellena la forma principal del ícono: la caja de papas en Order, el papel en Receipt.
- Lo que está adentro de la forma principal se cala en blanco y mantiene su forma (las líneas de Receipt, con su fry tip).
- Lo que está afuera de la forma principal queda igual que en la versión de línea (las papas de Order).
- Las ruedas y los anillos no se rellenan: quedan como en la versión de línea.

## Versiones (igual que Order y Receipt)

Cada ícono es un component set con **15 variantes**: 3 versiones × 5 tamaños.

| Versión | Color | Outline |
|---|---|---|
| Línea negra | Black | True |
| Relleno negro | Black | False |
| Relleno dorado | Gold | False |

- Tamaños: 56px, 48px, 32px, 24px y 16px.
- No existe la versión Gold + Outline True.
- La versión dorada es igual a la de relleno negro, con el color Gold.

## Vector

- Adentro de cada variante hay **un solo vector**, como en Order y Receipt.
- Para lograrlo: **Outline stroke** de todas las líneas, **Union** de todas las formas y **Flatten**.

## Color

| Color | Estilo de Figma | Hex | Token ArchWay equivalente |
|---|---|---|---|
| Black | `Primary/McDonald's Black` | `#292929` | `Icon/primary` (`color/black/800`) |
| Gold | `Primary/McDonald's Gold` | `#FFBC0D` | `Icon/gold` (`color/gold/500`) |

- Aplicá siempre el estilo de Figma, no el hex a mano.

## Nombres (igual que Order y Receipt)

| Capa | Formato | Ejemplo |
|---|---|---|
| Component set | Nombre del ícono **en inglés** | `Bicycle` |
| Variante | `Color=…, Outline=…, Size=…` | `Color=Black, Outline=True, Size=56px` |
| Vector | `Nombre / tamaño / Outline` o `Filled` | `Bicycle / 56px / Filled` |

## Scale

- Los íconos deben tener constraints **Scale H** y **Scale V**.

## Checklist antes de publicar

- [ ] 15 variantes: Black/True, Black/False y Gold/False × 56, 48, 32, 24 y 16
- [ ] Stroke, corner radius, fry tip y padding según la tabla de cada tamaño
- [ ] Un solo vector por variante (Outline stroke → Union → Flatten), con constraints Scale/Scale
- [ ] Color aplicado con los estilos `Primary/McDonald's Black` y `Primary/McDonald's Gold`
- [ ] Nombres del set, las variantes y los vectores en el formato de Order y Receipt
- [ ] Ubicado en la página de Figma del tipo que corresponde (ver [catálogo](./README.md#catálogo))
- [ ] Revisado a 16px: si el detalle no se lee, documentar desde qué tamaño se usa (como `Phone QR`, desde 32px)
