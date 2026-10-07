# Elevación (Sombras)

> **Fuente de la verdad:** [Archway Foundations Library (Figma)](https://www.figma.com/design/Us1oNLc2wgmgG3aMuT5dJv/-Archway--Foundations--Library) — 6 estilos de efecto locales (`Shallow/*`, `Deep/*`).
> **Extraído vía Figma MCP:** 2026-10-07 · **Estado:** documentado tal cual está en Figma. Las propuestas de mejora viven en [`audit.md`](../audit.md) y no se aplican hasta su aprobación.

## Familias

ArchWay define dos familias de sombra, cada una con tres niveles (L / M / H):

- **Shallow** — sombras suaves para elementos sobre superficies claras (cards, botones, banners, inputs).
- **Deep** — sombras más densas para elementos flotantes y oscuros (snackbars, tooltips, menús contextuales).

Todas son `DROP_SHADOW` sin spread, color `#292929` (equivale a `color/black/800_`) con opacidad variable.

| Estilo Figma | X | Y | Blur | Spread | Color | Clave (propuesta) | Uso |
|---|---|---|---|---|---|---|---|
| `Shallow/L.Elev-1` | 0 | 2 | 4 | 0 | `#292929` @ 10% | `shallow-l-elev-1` | Cards en una lista que no son el foco principal. |
| `Shallow/M.Elev-2` | 0 | 4 | 12 | 0 | `#292929` @ 15% | `shallow-m-elev-2` | Cards de producto, botones, banners, inputs. |
| `Shallow/H.Elev-3` | 0 | 8 | 24 | 0 | `#292929` @ 20% | `shallow-h-elev-3` | Cards de producto, botones, banners, inputs. |
| `Deep/L.Elev-1` | 0 | 4 | 8 | 0 | `#292929` @ 20% | `deep-l-elev-1` | Snackbars, Tooltips, menús contextuales oscuros. |
| `Deep/M.Elev-2` | 0 | 8 | 16 | 0 | `#292929` @ 25% | `deep-m-elev-2` | Snackbars, Tooltips, menús contextuales oscuros. |
| `Deep/H.Elev-3` | 0 | 16 | 32 | 0 | `#292929` @ 35% | `deep-h-elev-3` | Snackbars, Tooltips, menús contextuales oscuros. |

## Reglas

- La elevación comunica jerarquía en el eje Z: a mayor nivel, más cerca del usuario.
- No combinar sombra con borde fuerte en el mismo elemento; elegir uno.
- Sobre `Layer/06` (fondo oscuro) las sombras pierden visibilidad: diferenciar por superficie (`Layer/05`) y no por sombra.

## Uso en código

```css
:root {
  --aw-shadow-shallow-l-elev-1: 0px 2px 4px 0px rgb(41 41 41 / 0.10);
  --aw-shadow-shallow-m-elev-2: 0px 4px 12px 0px rgb(41 41 41 / 0.15);
  --aw-shadow-shallow-h-elev-3: 0px 8px 24px 0px rgb(41 41 41 / 0.20);
  --aw-shadow-deep-l-elev-1: 0px 4px 8px 0px rgb(41 41 41 / 0.20);
  --aw-shadow-deep-m-elev-2: 0px 8px 16px 0px rgb(41 41 41 / 0.25);
  --aw-shadow-deep-h-elev-3: 0px 16px 32px 0px rgb(41 41 41 / 0.35);
}
```
