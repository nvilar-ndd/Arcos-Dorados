---
feature: Catálogo, detalle y personalización de productos
estado: 🧭 Relevado
figma: https://www.figma.com/design/CkrLK7rb1I1DKjKCvZOpLN/?node-id=1-292
ultima_extraccion: 2026-10-23
owner_ux:
---

# Catálogo, detalle y personalización de productos

## 1. Contexto

Navegación por categorías (nav lateral de 248 px + grilla de cards 208 × 312, 3 por fila), detalle, armado de McCombos (tamaño, acompañamiento, bebida), personalización de Nuggets, Papas y bebidas, y upselling. Incluye los errores de integración **FLEX** y la página de **Filtros y etiquetas** (🚧 en revisión UX).

## 2. Flujos relevados

[`mapa-de-flujos.md § 2`](../../docs/mapa-de-flujos.md#2--adk-productos-loyalty-y-cupones--ckrlk7rb1i1dkjkcvzopln): McCombo Grande Premium (13 pantallas), Desayuno Completo (14), Cajita Feliz (9), Nuggets (6), Papas (4), bebida (2), producto "desde", 2 errores FLEX y filtros.

## 3. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Largo de los flujos de combo | 13–14 pantallas: ¿hay progreso visible y salida en cada paso? | K-DEC-05 · Goal-Gradient |
| Upselling dentro del armado | ¿Se descarta con un toque y no se repite? | K-DEC-04 |
| Filtros / subcategorías | Hasta 14 chips en 4 filas: ¿supera la Ley de Hick? | K-DEC-01 · Hick · Chunking |
| Card de producto | Estados agotado / seleccionado (Audit DS **A-C06**) | K-LEG-05 |
| Error FLEX sin stock | Un solo botón secundario; ¿lleva al carrito con el ítem marcado? | K-DEC-03 · voz y tono *Problemas y recuperación* |
| Outage | Decisión abierta en el canvas: sumar productos que no integran | Producto |

## 4. Hallazgos abiertos

Ninguno todavía.
