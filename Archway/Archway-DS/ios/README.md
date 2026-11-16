# ArchwayUI — iOS (SwiftUI)

Swift Package con los tokens y componentes de ArchWay para **SwiftUI (iOS 16+)**.

> ⚠️ **No se compiló en el entorno donde se generó** (no había toolchain de Swift). La sintaxis está verificada con un parser, pero hay que abrirlo en Xcode y correr los previews antes de usarlo.

## Instalación

Xcode › *File › Add Package Dependencies…* con la ruta local de `ios/` (o el repo, cuando se publique) y el producto `ArchwayUI`.

Registrar **Speedee** en el `Info.plist` de la app (`UIAppFonts`). Si no está, SwiftUI cae a la fuente del sistema con el mismo tamaño. Para usar otro nombre de familia, `AWFont.family = "…"`.

## Estructura

```
Sources/ArchwayUI/
├── Tokens/AWTokens.swift          ← generado (scripts/build-platform-tokens.mjs). No editar.
├── Resources/Icons.xcassets       ← 21 íconos de Iconography, template rendering
├── Foundation/AWFoundation.swift  ← .awText(), AWIcon, .awShadow(), .awHitArea(), .awShimmer()
├── Core/                          ← Button, Inputs, Selection, Display, Containers, Feedback, Navigation
└── Especificos/                   ← Header, Gamification Bar, Loyalty Card, Voucher, Setting, Product Card…
```

## Reglas

- Sólo `AWColor`, `AWSpacing`, `AWRadius`, `AWTypography`, `AWElevation`, `AWMotion`.
- Tipografía con tope de Dynamic Type por estilo (+30 % Display/Heading/Label, ×2 Body), según Foundations › Typography.
- Área táctil mínima **44 pt** (HIG) con `.awHitArea()`.
- **Nivel 0 — nativos (Liquid Glass):** Switch = `Toggle`, NavBar = `TabView` (`AWTabLabel`), Top Bar = barra de navegación (`.awTopBar`), Search = `.searchable` (`.awSearchable`). ArchWay sólo aporta tokens y textos.
- `accessibilityReduceMotion` apaga shimmer, spinner y contadores.

```swift
import ArchwayUI

AWTextField("Email", text: $email, hint: "Te mandamos la confirmación")
AWButton("Continuar") { submit() }
```
