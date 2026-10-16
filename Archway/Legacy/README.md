# Legacy DS

> **Estado:** carpeta creada el 2026-10-16. Todavía no está relevado.

El sistema de diseño anterior de Arcos Dorados, **en proceso de depreciación**. Acá va todo lo viejo: su documentación tal como está hoy, el inventario de dónde se sigue usando y el plan para reemplazarlo por ArchWay.

## Qué se sabe hoy

| Tema | Dónde |
|---|---|
| Tipografía: equivalencias de los 24 estilos Legacy con los 20 de ArchWay | [`../Archway-DS/guides/typography-legacy-migration.md`](../Archway-DS/guides/typography-legacy-migration.md) |
| Tracking −0.15 heredado por Dashboard y ADK | [Convergencia D7 / K10](../Convergencia/README.md#decisiones-compartidas) |
| Librerías remotas que usan componentes del Dashboard (`Theme`, `Elevation/*`, `Number`, `Headlines/*`): posiblemente Legacy | [Dashboard D-C05 y D-C15](../Dashboard/audit.md#d-c05--variables-de-otra-librería) |

## Para empezar a relevarlo

1. Link al archivo (o archivos) de Figma de Legacy.
2. Extracción vía Figma MCP: variables, estilos y componentes.
3. Documentación en esta carpeta con la misma estructura que Dashboard y ADK (`foundations/`, `components/`, `audit.md`, `tokens/`).
4. Análisis `Convergencia/legacy-archway.md` y sumarlo al [plan maestro](../Convergencia/README.md).

Como Legacy se va a deprecar, no lleva Storybook propio: alcanza con el inventario y el mapa hacia ArchWay.
