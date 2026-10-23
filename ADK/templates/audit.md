---
audit: NNN
archivo: <[ADK] …>
paginas: <páginas auditadas>
fecha: AAAA-MM-DD
metodo: Figma MCP (get_metadata · get_design_context · get_screenshot · get_variable_defs) + contraste WCAG
---

# Audit NNN — <alcance>

> Cada hallazgo nace `Pendiente`. Sólo lo `Aprobado` se aplica en Figma.
> Prioridad: 🔴 P0 bloquea dev · 🟠 P1 antes de salir · 🟡 P2 próxima iteración · ⚪ P3 higiene.

## Tablero

| ID | Flujo / pantalla | Hallazgo | Regla | Prioridad | Estado |
|---|---|---|---|---|---|
| F-NNN-01 | … | … | K-… | 🔴 P0 | Pendiente |

## Detalle

### F-NNN-01 · <título>

| | |
|---|---|
| **Dónde** | [Pantalla](https://www.figma.com/design/<key>/?node-id=…) |
| **Qué pasa** | Medición concreta: posición `y`, tamaño, contraste, cantidad de opciones |
| **Por qué importa** | Impacto en el usuario de pie / silla de ruedas / apurado |
| **Regla** | K-… · Ley de … · WCAG … |
| **Propuesta** | Cambio concreto y el componente o token del DS que lo resuelve |

---

## Checklist por pantalla

**Alcance**
- [ ] CTA de compromiso en `y ≥ 640` (K-ALC-01)
- [ ] En modo accesible, todos los controles en `y ≥ 1120` (K-ALC-02)
- [ ] Nada obligatorio en el tercio superior (K-ALC-03)

**Toque**
- [ ] Controles ≥ 56 px; compromiso ≥ 80 px (K-TOQ-01/02)
- [ ] Separación ≥ 16 px (K-TOQ-03)
- [ ] Destructivas lejos de la primaria o con confirmación (K-TOQ-04)

**Legibilidad**
- [ ] Texto ≥ 22 px lectura / ≥ 16 px secundario (K-LEG-01/02)
- [ ] Contraste texto ≥ 4.5:1 (precios y errores 7:1); estados ≥ 3:1 (K-LEG-03/04)
- [ ] Gold con segundo indicador; error con ícono + texto (K-LEG-05/07)

**Decisión**
- [ ] ≤ 4 opciones; 1 pregunta; 1 primaria (K-DEC-01/02/03)
- [ ] Interrupciones salteables con 1 toque (K-DEC-04)
- [ ] Progreso y total visibles (K-DEC-05/06)

**Sesión**
- [ ] Inactividad con aviso ≥ 20 s; reset limpio (K-SES-01/02)
- [ ] Datos personales enmascarados (K-SES-03)
- [ ] Loader con texto si tarda > 400 ms (K-SES-04)

**Sistema y contenido**
- [ ] Instancias de `[ADK] Design System`, sin detach (K-SIS-01)
- [ ] Colores y textos enlazados a variables / estilos (K-SIS-02)
- [ ] Íconos de Iconography, ilustraciones de una sola familia (K-SIS-03/04)
- [ ] Copy validado con voz y tono; keys documentadas (K-SIS-05/06)
