# Dashboard — Usage and design criteria

> **Fuente de la verdad:** [DashBoard Foundation › Usage and design criteria](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=4297-10215) · **Extraído vía Figma MCP:** 2026-10-08.

Criterios para decidir **qué patrón de pantalla** usar y **cómo se mide**.

| Documento | Contenido | Frame en Figma |
|---|---|---|
| [ui-templates.md](./ui-templates.md) | Patrón según el contexto de navegación (Country session → formulario; Left Panel → listado + paso a paso) y Read-only Table vs Card List | *UI Templates by navigation context* · *Read-only Table vs Card List* |
| [page-templates.md](./page-templates.md) | Medidas de las dos plantillas (Country y paso a paso): columnas, separaciones, footer | *Medidas / UI Templates* |

## Decisión rápida

```
¿Desde dónde entra el usuario?
├─ Sesión de un país (Countries → Configurar) ──→ Formulario por secciones
│                                                  (SubPanelLeft + Guardar configuración)
└─ Ítem del panel izquierdo ──→ Listado inicial
      ├─ ¿Cada fila se activa / cambia de estado / tiene acciones? ──→ Card List
      └─ ¿Sólo se lee, compara o audita? ─────────────────────────→ Data table read-only
      └─ Crear / editar ──→ Flujo paso a paso (stepper + Card_Info + Siguiente)
                            → Revisión final con Card_Descripcion
```

El contexto **Header** figura en Figma pero sin contenido ([D-D04](../audit.md#-p2--documentación)).
