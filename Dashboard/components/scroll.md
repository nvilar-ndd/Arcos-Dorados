# Scroll

> **Fuente de la verdad:** [Components › Scroll](https://www.figma.com/design/XKulGF78txFYDLNMstLShZ/-DashBoard--Fuondation?node-id=5700-4423) · component set `scroll`.
> **Origen:** Dashboard DS · **Extraído vía Figma MCP:** 2026-10-08.

## Propósito

> "Elemento de interfaz o funcional que permite el desplazamiento (deslizado) de contenido que supera el tamaño de la pantalla, ya sea vertical u horizontalmente." — Figma

Barra de scroll custom para listas, modales con scroll y paneles.

## Anatomía y tokens

| Parte | Token |
|---|---|
| Track | 8 px de ancho · padding 4/2 · fondo `color/black/100` |
| Thumb | `color/black/300` |

`Orientación` = Vertical / Horizontal. Los dos colores son **primitivos** enlazados directo: no cambian en Dark ([D-C03](../audit.md#d-c03--primitivos-enlazados-directo)).

## Implementación

Estilizar la barra nativa (`scrollbar-width: thin; scrollbar-color: thumb track;` + `::-webkit-scrollbar`) en lugar de una barra simulada, para conservar teclado, rueda y lectores de pantalla.

## Accesibilidad

- El área scrolleable tiene que ser enfocable (`tabindex="0"`) y tener nombre (`aria-label`) si no contiene elementos enfocables.
- Thumb `black/300` sobre `black/100`: verificar 3:1 (WCAG 1.4.11) en los dos modos.
