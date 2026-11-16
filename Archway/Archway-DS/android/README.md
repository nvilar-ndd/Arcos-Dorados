# archway-ui — Android (Jetpack Compose)

Librería Android con los tokens y componentes de ArchWay para **Jetpack Compose** (minSdk 24, Compose BOM 2024.12).

> ⚠️ **No se compiló en el entorno donde se generó** (sin acceso a Google Maven / Maven Central). La sintaxis está verificada con un parser; hay que sincronizar en Android Studio y revisar los previews antes de usarlo.

## Instalación

Incluir el módulo `:archway-ui` (`settings.gradle.kts`) o publicarlo en el repositorio interno. Sólo depende de `compose-foundation`, `ui` y `animation`: **no usa Material**, el estilo es 100 % ArchWay.

La app provee Speedee:

```kotlin
CompositionLocalProvider(LocalAwFontFamily provides FontFamily(Font(R.font.speedee_regular), Font(R.font.speedee_bold, FontWeight.Bold))) {
    AppContent()
}
```

## Estructura

```
archway-ui/src/main/java/com/arcosdorados/archway/
├── tokens/AwTokens.kt          ← generado (scripts/build-platform-tokens.mjs). No editar.
├── icons/AwIcons.kt            ← 21 íconos como ImageVector, generados
├── foundation/AwFoundation.kt  ← AwText, AwIcon, Modifier.awShadow, awFocusRing, LocalAwFontFamily
├── core/                       ← Buttons, Inputs, Selection, Display, Containers, Feedback, Navigation
└── especificos/                ← Header, Gamification Bar, Loyalty Card, Voucher, Setting, Product Card…
```

## Reglas

- Sólo `AwColor`, `AwSpacing`, `AwRadius`, `AwTypography`, `AwElevation`, `AwMotion`.
- Tope de `fontScale` por estilo (1,3 Display/Heading/Label · 2,0 Body).
- Área táctil mínima **48 dp**; Pressed por token, sin ripple; Disabled por token, sin opacidad.
- Semántica para TalkBack: `Role`, `stateDescription`, `progressBarRangeInfo`, live regions en Toast.
- "Quitar animaciones" del sistema apaga shimmer y spinner (`awReduceMotion()`).

```kotlin
AwTextField(value = email, onValueChange = { email = it }, label = "Email")
AwButton("Continuar", onClick = ::submit, modifier = Modifier.fillMaxWidth())
```
