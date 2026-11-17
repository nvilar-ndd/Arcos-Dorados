---
audit: NNN
archivo: <archivo de Figma o ambiente>
modulos: <módulos auditados>
fecha: AAAA-MM-DD
metodo: Figma MCP (get_metadata · get_design_context · get_screenshot · get_variable_defs) + recorrido en ambiente + contraste WCAG (Light y Dark)
---

# Audit NNN — <alcance>

> Cada hallazgo nace `Pendiente`. Sólo lo `Aprobado` se aplica en Figma.
> Prioridad: 🔴 P0 riesgo operativo o bloquea dev · 🟠 P1 antes de salir · 🟡 P2 próxima iteración · ⚪ P3 higiene.

## Tablero

| ID | Módulo / pantalla | Hallazgo | Regla | Prioridad | Estado |
|---|---|---|---|---|---|
| DF-NNN-01 | … | … | BO-… | 🔴 P0 | Pendiente |

## Detalle

### DF-NNN-01 · <título>

| | |
|---|---|
| **Dónde** | [Pantalla](https://www.figma.com/design/<key>/?node-id=…) |
| **Qué pasa** | Medición concreta: clics, pasos, campos, contraste, opciones |
| **Por qué importa** | Impacto en la operación (mercados, canales, pedidos) |
| **Regla** | BO-… · Ley de … · WCAG … |
| **Propuesta** | Cambio concreto y el componente o token del DS que lo resuelve |

---

## Checklist por flujo

**Seguridad operativa**
- [ ] Destructivas con confirmación que nombra objeto e impacto (BO-SEG-01)
- [ ] Soft-delete / archivado restaurable (BO-SEG-02)
- [ ] Resumen de alcance antes de publicar (BO-SEG-03)
- [ ] Aviso de cambios sin guardar (BO-SEG-04)
- [ ] Bulk actions con contador y deshacer (BO-SEG-05)
- [ ] Zona horaria explícita (BO-SEG-06)

**Estados**
- [ ] Ciclo de estado claro, tag con texto (BO-EST-01/02)
- [ ] Vacío, carga, error y sin permisos (BO-EST-03)

**Navegación**
- [ ] Patrón según contexto; tabla vs Card List (BO-NAV-01/02)
- [ ] Filtros persisten; volver sin perder datos (BO-NAV-03/04)

**Densidad y formularios**
- [ ] Texto ≥ 14 px; contraste en Light y Dark (BO-DEN-01/02)
- [ ] Validación inline con solución; defaults heredados (BO-FOR-01/02)

**Permisos y preview**
- [ ] Acciones mapeadas a rol y alcance (BO-PER-01/02)
- [ ] Live preview de contenido B2C (BO-PRE-01)

**Sistema y contenido**
- [ ] Instancias de `DashBoard Foundation`, sin detach; variables enlazadas (BO-SIS-01/02)
- [ ] Foco visible; targets ≥ 24 px (BO-SIS-03/04)
- [ ] Un idioma por pantalla; copy validado con voz y tono (BO-SIS-05/07)
