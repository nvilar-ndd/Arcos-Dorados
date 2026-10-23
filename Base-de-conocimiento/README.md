# Base de conocimiento

Material de referencia para todo el trabajo de producto y diseño de Arcos Dorados: los sistemas de diseño (ArchWay, Dashboard, ADK, Legacy), los productos (app, web eCommerce, kioscos) y la investigación. No documenta componentes ni foundations: reúne los principios y criterios con los que se auditan, se proponen mejoras y se justifican decisiones.

| Documento | Qué es | Cuándo usarlo |
|---|---|---|
| [`leyes-de-ux.md`](./leyes-de-ux.md) | Las 30 leyes de [Laws of UX](https://lawsofux.com/), cada una con *Qué dice*, *Origen*, *Cómo aplicarla*, *Ejemplo* y *Señales de violación* | Auditorías heurísticas de componentes en Figma, críticas de diseño, sección de justificación en los `design.md` y defensa de decisiones ante stakeholders |
| [`accesibilidad-wcag.md`](./accesibilidad-wcag.md) | WCAG y estándares W3C: marco general, los 86 criterios de WCAG 2.2 con nivel e impacto en diseño, checklist AA, borrador de WCAG 3, estándares relacionados (ARIA, WCAG2ICT) y contexto normativo por mercado | Revisiones de accesibilidad en Figma, sección de accesibilidad de los `design.md`, handoff a desarrollo y respaldo ante legal o stakeholders sobre el nivel exigido |

## Cómo citarlo

Desde un `audit.md` o un `design.md`, enlazá la sección con su ancla (ajustá los `../` según la profundidad del archivo). Por ejemplo, desde `Archway/Archway-DS/audit.md`:

```md
Se amplía el área táctil a 48 dp ([Ley de Fitts](../../Base-de-conocimiento/leyes-de-ux.md#7-ley-de-fitts-fittss-law); [WCAG 2.5.8](../../Base-de-conocimiento/accesibilidad-wcag.md#pauta-25-modalidades-de-entrada-21)).
```

En accesibilidad, citá siempre el número de criterio (por ejemplo, *WCAG 2.5.8*) además del link: los criterios viven en tablas y el ancla lleva a su pauta.

## Criterios

- Cada documento es redacción propia; las fuentes originales se citan y enlazan, no se copian.
- Un documento nuevo entra con su fila en la tabla de arriba.
