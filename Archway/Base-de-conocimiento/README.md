# Base de conocimiento

Material de referencia transversal a todos los sistemas de diseño (ArchWay, Dashboard, ADK, Legacy). No documenta componentes ni foundations: reúne los principios y criterios con los que se auditan, se proponen mejoras y se justifican decisiones de diseño.

| Documento | Qué es | Cuándo usarlo |
|---|---|---|
| [`leyes-de-ux.md`](./leyes-de-ux.md) | Las 30 leyes de [Laws of UX](https://lawsofux.com/), cada una con *Qué dice*, *Origen*, *Cómo aplicarla*, *Ejemplo* y *Señales de violación* | Auditorías heurísticas de componentes en Figma, críticas de diseño, sección de justificación en los `design.md` y defensa de decisiones ante stakeholders |

## Cómo citarlo

Desde un `audit.md` o un `design.md`, enlazá la ley con su ancla (ajustá los `../` según la profundidad del archivo). Por ejemplo, desde `Archway/Archway-DS/audit.md`:

```md
Se amplía el área táctil a 48 dp ([Ley de Fitts](../Base-de-conocimiento/leyes-de-ux.md#7-ley-de-fitts-fittss-law)).
```

## Criterios

- Cada documento es redacción propia; las fuentes originales se citan y enlazan, no se copian.
- Un documento nuevo entra con su fila en la tabla de arriba.
