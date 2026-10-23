---
feature: Factura electrónica
estado: 🔍 En auditoría
figma: https://www.figma.com/design/FgvtqbTZN2gkuUJbegbhrA/?node-id=71-12049
ultima_extraccion: 2026-10-23
owner_ux:
---

# Factura electrónica

## 1. Contexto

Opcional dentro de *Selección de tipo de pago*. Formulario de 1 dropdown (tipo de documento) + 3 campos de texto con teclado en pantalla. Al volver al pago, la fila muestra "Datos de facturación" con el resumen.

## 2. Flujos relevados

[`mapa-de-flujos.md § Factura electrónica`](../../docs/mapa-de-flujos.md#-factura-electrónica--7112049): carga completa (10 pantallas) y 4 secciones de error por campo (el campo con error crece de 104 a 136 px por el helper).

## 3. Medidas relevadas

| Elemento | Posición / tamaño | Regla en juego |
|---|---|---|
| Dropdown + 3 Text Field | 888 × 104 c/u · `y 336–880` | K-ALC-03 (tercio superior) |
| Teclado (`Input`) | 704 × 390 · `y 960–1350` | ✅ tercio medio |
| Footer | `y 1656` | — |

## 4. Puntos a definir en la auditoría

| Tema | Pregunta | Regla |
|---|---|---|
| Alcance | Campos en el tercio superior con el teclado debajo: ¿en modo accesible se baja el formulario? | K-ALC-02 · K-ALC-03 |
| Errores | Borde y label en rojo sin ícono (Audit DS **A-A04**) | K-LEG-07 |
| Foco | Text Field *Focused* igual al reposo (Audit DS **A-C05**) | K-LEG-04 |
| Privacidad | Documento visible completo en el resumen | K-SES-03 |
| Bordes | `#ADADAD` 2.24:1 (Audit DS **A-A02**) | K-LEG-04 |

## 5. Hallazgos abiertos

| ID | Hallazgo | Prioridad | Estado |
|---|---|---|---|
| [F-001-03](../../audits/001-flujos-kiosco.md#f-001-03) | Controles de 40 px en acciones del flujo principal (personalizar, seleccionar, cantidad, factura, quitar descuento) | 🟠 P1 | Pendiente |
| [F-001-10](../../audits/001-flujos-kiosco.md#f-001-10) | Factura electrónica: error sin ícono, placeholder como label y bordes de bajo contraste | 🟠 P1 | Pendiente |
