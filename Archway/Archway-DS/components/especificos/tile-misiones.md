# Tile 💠 Misiones

> **Fuente de la verdad:** [Design Resources CORE › Tile 💠 Misiones](https://www.figma.com/design/jXe3O8ICmPdNyX6mYbQDVC/Design-Resources-CORE---Archway-?node-id=5265-4129) · component set `Tile 💠 Misiones` (3 variantes).
> **Origen:** ArchWay · Específico, armado sobre [Tile](../core/tile.md) · **Extraído vía Figma MCP:** 2026-11-16.

## Propósito

Contenedor de las recompensas que se otorgan en una misión. Aparece en el detalle de misión, en la zona superior. **Por el momento no tiene interacción.**

Misma estructura que Tile: 116 × 112, `Surface/default` + `Border/subtle`, radio `Valor/radius/L`, label `Label/Label Small`. Suma `Show Label` y el slot `container icon`. `State`: Enabled · Pressed · Skeleton.

> Si no tiene interacción, sobran Pressed y el rol de botón. Revisar la descripción ("Bloque tocable…", copiada de Tile).

## Accesibilidad

Sin interacción: se lee como imagen + texto ("Recompensa: 500 puntos"), sin rol de botón.

## Cambios 2026-11-17 (paridad con Figma)

- Slot de 72 con radio M sobre `Surface/default`, trazo 0,5 + `Shallow/L/Elev 1`; ícono 48 en `Feature/missions`.

Web ajustado y verificado contra la captura de Figma en Storybook (historia oculta *QA paridad Figma*). iOS y Android quedan pendientes de este ajuste.
