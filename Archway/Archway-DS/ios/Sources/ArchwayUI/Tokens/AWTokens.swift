// Generado por scripts/build-platform-tokens.mjs desde tokens/archway.tokens.json (Figma SSOT). No editar a mano.
import SwiftUI

/// Colores semánticos de ArchWay (colección Semantic, modo Light). Los primitivos no se exponen.
public enum AWColor {
    /// Border/default — Chip stroke, Secondary button stroke, Input enabled
    public static let borderDefault = Color(.sRGB, red: 0.5608, green: 0.5608, blue: 0.5608, opacity: 1.000)
    /// Border/soft — Borde suave para campos de texto en estado default. Menos prominente que Border/default para no competir con el contenido. Uso en Input Text Field enabled.
    public static let borderSoft = Color(.sRGB, red: 0.8588, green: 0.8588, blue: 0.8588, opacity: 1.000)
    /// Border/strong — Focused stroke — button, chip, input
    public static let borderStrong = Color(.sRGB, red: 0.2588, green: 0.2588, blue: 0.2588, opacity: 1.000)
    /// Border/subtle — Disabled stroke
    public static let borderSubtle = Color(.sRGB, red: 0.7608, green: 0.7608, blue: 0.7608, opacity: 1.000)
    /// Border/input-active — Input completed border
    public static let borderInputActive = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Button/primary-bg — Fondo del botón primario en estado enabled.
    public static let buttonPrimaryBg = Color(.sRGB, red: 1.0000, green: 0.7373, blue: 0.0510, opacity: 1.000)
    /// Button/primary-bg-pressed — Fondo del botón primario en estado pressed.
    public static let buttonPrimaryBgPressed = Color(.sRGB, red: 1.0000, green: 0.7961, blue: 0.2588, opacity: 1.000)
    /// Button/primary-bg-focused — Fondo del botón primario en estado focused. Solo accesibilidad.
    public static let buttonPrimaryBgFocused = Color(.sRGB, red: 0.8588, green: 0.6235, blue: 0.0000, opacity: 1.000)
    /// Button/primary-bg-disabled — Fondo del botón primario en estado disabled.
    public static let buttonPrimaryBgDisabled = Color(.sRGB, red: 1.0000, green: 0.9608, blue: 0.8588, opacity: 1.000)
    /// Button/text — Color de texto del botón en estado enabled.
    public static let buttonText = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Button/text-disabled — Color de texto del botón en estado disabled.
    public static let buttonTextDisabled = Color(.sRGB, red: 0.4392, green: 0.4392, blue: 0.4392, opacity: 1.000)
    /// Button/secondary-bg — Fondo del botón secondary en estado enabled.
    public static let buttonSecondaryBg = Color(.sRGB, red: 1.0000, green: 1.0000, blue: 1.0000, opacity: 1.000)
    /// Button/secondary-bg-pressed — Fondo del botón secondary en estado pressed.
    public static let buttonSecondaryBgPressed = Color(.sRGB, red: 0.9608, green: 0.9608, blue: 0.9608, opacity: 1.000)
    /// Button/secondary-bg-focused — Fondo del botón secondary en estado focused.
    public static let buttonSecondaryBgFocused = Color(.sRGB, red: 0.9608, green: 0.9608, blue: 0.9608, opacity: 1.000)
    /// Button/secondary-bg-disabled — Fondo del botón secondary en estado disabled.
    public static let buttonSecondaryBgDisabled = Color(.sRGB, red: 0.9608, green: 0.9608, blue: 0.9608, opacity: 1.000)
    /// Button/secondary-stroke — Borde del botón secondary en estado enabled.
    public static let buttonSecondaryStroke = Color(.sRGB, red: 0.5608, green: 0.5608, blue: 0.5608, opacity: 1.000)
    /// Button/secondary-stroke-pressed — Borde del botón secondary en estado pressed.
    public static let buttonSecondaryStrokePressed = Color(.sRGB, red: 0.5608, green: 0.5608, blue: 0.5608, opacity: 1.000)
    /// Button/secondary-stroke-focused — Borde del botón secondary en estado focused.
    public static let buttonSecondaryStrokeFocused = Color(.sRGB, red: 0.2588, green: 0.2588, blue: 0.2588, opacity: 1.000)
    /// Button/secondary-stroke-disabled — Borde del botón secondary en estado disabled.
    public static let buttonSecondaryStrokeDisabled = Color(.sRGB, red: 0.4392, green: 0.4392, blue: 0.4392, opacity: 1.000)
    /// Button/ghost-bg — Fondo transparente del botón ghost en estado enabled.
    public static let buttonGhostBg = Color(.sRGB, red: 1.0000, green: 1.0000, blue: 1.0000, opacity: 0.000)
    /// Button/ghost-bg-pressed — Fondo del botón ghost en estado pressed.
    public static let buttonGhostBgPressed = Color(.sRGB, red: 0.9608, green: 0.9608, blue: 0.9608, opacity: 1.000)
    /// Chip/icon — Color del ícono dentro del chip en estado enabled.
    public static let chipIcon = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Chip/icon-disabled — Color del ícono dentro del chip en estado disabled.
    public static let chipIconDisabled = Color(.sRGB, red: 0.4392, green: 0.4392, blue: 0.4392, opacity: 1.000)
    /// Chip/bg — Fondo del chip en estado enabled.
    public static let chipBg = Color(.sRGB, red: 1.0000, green: 1.0000, blue: 1.0000, opacity: 1.000)
    /// Chip/stroke — Borde del chip en estado enabled.
    public static let chipStroke = Color(.sRGB, red: 0.5608, green: 0.5608, blue: 0.5608, opacity: 1.000)
    /// Chip/text — Texto del chip en estado enabled.
    public static let chipText = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Chip/bg-selected — Fondo del chip en estado selected. Filtro activo.
    public static let chipBgSelected = Color(.sRGB, red: 1.0000, green: 0.7373, blue: 0.0510, opacity: 1.000)
    /// Chip/text-selected — Texto del chip en estado selected.
    public static let chipTextSelected = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Chip/bg-pressed — Fondo del chip en estado pressed.
    public static let chipBgPressed = Color(.sRGB, red: 0.9608, green: 0.9608, blue: 0.9608, opacity: 1.000)
    /// Chip/stroke-pressed — Borde del chip en estado pressed.
    public static let chipStrokePressed = Color(.sRGB, red: 0.5608, green: 0.5608, blue: 0.5608, opacity: 1.000)
    /// Chip/bg-focused — Fondo del chip en estado focused. Solo accesibilidad.
    public static let chipBgFocused = Color(.sRGB, red: 0.8588, green: 0.8588, blue: 0.8588, opacity: 1.000)
    /// Chip/stroke-focused — Borde del chip en estado focused. Solo accesibilidad.
    public static let chipStrokeFocused = Color(.sRGB, red: 0.5608, green: 0.5608, blue: 0.5608, opacity: 1.000)
    /// Chip/bg-disabled — Fondo del chip en estado disabled.
    public static let chipBgDisabled = Color(.sRGB, red: 0.9608, green: 0.9608, blue: 0.9608, opacity: 1.000)
    /// Chip/stroke-disabled — Borde del chip en estado disabled.
    public static let chipStrokeDisabled = Color(.sRGB, red: 0.7608, green: 0.7608, blue: 0.7608, opacity: 1.000)
    /// Chip/text-disabled — Texto del chip en estado disabled.
    public static let chipTextDisabled = Color(.sRGB, red: 0.4392, green: 0.4392, blue: 0.4392, opacity: 1.000)
    /// Feature/missions — Color sólido de identidad del programa Misiones — íconos, texto o fondos donde se necesita el purple pleno (no un tint). Usar Misiones-surface para fondos claros que necesiten contraste con este color.
    public static let featureMissions = Color(.sRGB, red: 0.3725, green: 0.0078, blue: 0.4863, opacity: 1.000)
    /// Feature/missions-surface — Color de fondo/superficie de la identidad del programa Misiones (cards, headers, íconos).
    public static let featureMissionsSurface = Color(.sRGB, red: 0.9765, green: 0.9020, blue: 1.0000, opacity: 1.000)
    /// Feature/accessibility — Color del ícono/indicador de accesibilidad — señala que un elemento tiene una función o ajuste de accesibilidad disponible.
    public static let featureAccessibility = Color(.sRGB, red: 0.0863, green: 0.3216, blue: 0.6941, opacity: 1.000)
    /// Feedback/error — Input error border, Tag urgencia primary bg
    public static let feedbackError = Color(.sRGB, red: 0.8588, green: 0.0000, blue: 0.0275, opacity: 1.000)
    /// Feedback/error-on-black — Variante de feedback/error, ajustada para pasar contraste sobre fondo negro (Layer/06). Usar solo en componentes con ese fondo — no es dark mode, no reemplaza al feedback original en el resto del sistema.
    public static let feedbackErrorOnBlack = Color(.sRGB, red: 1.0000, green: 0.2588, blue: 0.2824, opacity: 1.000)
    /// Feedback/error-surface — Tag urgencia secondary bg, Tag estado- secondary
    public static let feedbackErrorSurface = Color(.sRGB, red: 1.0000, green: 0.8588, blue: 0.8627, opacity: 1.000)
    /// Feedback/error-text — Texto sobre error-surface
    public static let feedbackErrorText = Color(.sRGB, red: 0.6588, green: 0.0000, blue: 0.0196, opacity: 1.000)
    /// Feedback/success — Input success, Tag estado+ primary bg
    public static let feedbackSuccess = Color(.sRGB, red: 0.1216, green: 0.3961, blue: 0.2196, opacity: 1.000)
    /// Feedback/success-on-black — Variante de feedback/success, ajustada para pasar contraste sobre fondo negro (Layer/06). Usar solo en componentes con ese fondo — no es dark mode, no reemplaza al feedback original en el resto del sistema
    public static let feedbackSuccessOnBlack = Color(.sRGB, red: 0.1686, green: 0.5490, blue: 0.3020, opacity: 1.000)
    /// Feedback/success-surface — Tag estado+ secondary bg
    public static let feedbackSuccessSurface = Color(.sRGB, red: 0.7843, green: 0.9333, blue: 0.8392, opacity: 1.000)
    /// Feedback/success-text — Texto sobre success-surface
    public static let feedbackSuccessText = Color(.sRGB, red: 0.1216, green: 0.3961, blue: 0.2196, opacity: 1.000)
    /// Feedback/warning — (alias de interactive/active en contextos de alerta)
    public static let feedbackWarning = Color(.sRGB, red: 1.0000, green: 0.7373, blue: 0.0510, opacity: 1.000)
    /// Feedback/warning-surface — (alias de interactive/active en contextos de alerta)
    public static let feedbackWarningSurface = Color(.sRGB, red: 1.0000, green: 0.9059, blue: 0.6588, opacity: 1.000)
    /// Feedback/info — Color principal de información.
    public static let feedbackInfo = Color(.sRGB, red: 0.1059, green: 0.4039, blue: 0.8745, opacity: 1.000)
    /// Feedback/info-on-black — Variante de feedback/info, para pasar contraste sobre fondo negro (Layer/06). Usar solo en componentes con ese fondo — no es dark mode, no reemplaza al feedback original en el resto del sistema
    public static let feedbackInfoOnBlack = Color(.sRGB, red: 0.2706, green: 0.5176, blue: 0.9098, opacity: 1.000)
    /// Feedback/info-surface — Superficie de información. Fondo de la barra de gamification en estado info.
    public static let feedbackInfoSurface = Color(.sRGB, red: 0.8039, green: 0.8706, blue: 0.9765, opacity: 1.000)
    /// Interactive/active — Chip selected, Switch ON, Toggle activo
    public static let interactiveActive = Color(.sRGB, red: 1.0000, green: 0.7373, blue: 0.0510, opacity: 1.000)
    /// Interactive/active-text — Texto sobre cualquier estado active
    public static let interactiveActiveText = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Interactive/active-subtle — Versión suave del color activo. Uso en tag secondary de destacar.
    public static let interactiveActiveSubtle = Color(.sRGB, red: 0.7608, green: 0.7608, blue: 0.7608, opacity: 1.000)
    /// Interactive/active-subtle-text — Texto sobre active-subtle
    public static let interactiveActiveSubtleText = Color(.sRGB, red: 0.6588, green: 0.4784, blue: 0.0000, opacity: 1.000)
    /// Highlight/new — Indica al usuario que algo es nuevo o que nunca fue visto antes — funcionalidades nuevas, onboarding, walkthroughs, badges de novedad.
    public static let highlightNew = Color(.sRGB, red: 0.5412, green: 0.2471, blue: 0.9882, opacity: 1.000)
    /// Icon/on-color — Ícono sobre fondos de color — botón primary, chip selected.
    public static let iconOnColor = Color(.sRGB, red: 1.0000, green: 1.0000, blue: 1.0000, opacity: 1.000)
    /// Icon/primary — Ícono principal sobre fondos claros.
    public static let iconPrimary = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Icon/gray — Ícono secundario o de bajo énfasis.
    public static let iconGray = Color(.sRGB, red: 0.3608, green: 0.3608, blue: 0.3608, opacity: 1.000)
    /// Icon/disabled — Ícono en estado disabled.
    public static let iconDisabled = Color(.sRGB, red: 0.4392, green: 0.4392, blue: 0.4392, opacity: 1.000)
    /// Icon/gold — Ícono en color de marca. Uso sobre fondos oscuros o negros.
    public static let iconGold = Color(.sRGB, red: 1.0000, green: 0.7373, blue: 0.0510, opacity: 1.000)
    /// Icon/red — Ícono de error o alerta destructiva.
    public static let iconRed = Color(.sRGB, red: 0.8588, green: 0.0000, blue: 0.0275, opacity: 1.000)
    /// Link/default — Link en estado default. Texto que navega a otra pantalla; si ejecuta una acción.
    public static let linkDefault = Color(.sRGB, red: 0.0863, green: 0.3216, blue: 0.6941, opacity: 1.000)
    /// Link/hover — Color del link en estado hover. Solo web.
    public static let linkHover = Color(.sRGB, red: 0.1059, green: 0.4039, blue: 0.8745, opacity: 1.000)
    /// Link/focused — Link en estado focused. Solo navegación por teclado o lector de pantalla.
    public static let linkFocused = Color(.sRGB, red: 0.0627, green: 0.2353, blue: 0.5098, opacity: 1.000)
    /// Link/pressed — Link en estado pressed.
    public static let linkPressed = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Link/visited — Color del link ya visitado.
    public static let linkVisited = Color(.sRGB, red: 0.5294, green: 0.0118, blue: 0.6902, opacity: 1.000)
    /// Link/inverse — Link sobre fondos oscuros — estado default.
    public static let linkInverse = Color(.sRGB, red: 0.6275, green: 0.7529, blue: 0.9529, opacity: 1.000)
    /// Link/inverse-hover — Link sobre fondos oscuros — estado hover.
    public static let linkInverseHover = Color(.sRGB, red: 0.4471, green: 0.6353, blue: 0.9333, opacity: 1.000)
    /// Link/inverse-focused — Link sobre fondos oscuros — estado focused.
    public static let linkInverseFocused = Color(.sRGB, red: 0.4471, green: 0.6353, blue: 0.9333, opacity: 1.000)
    /// Link/inverse-pressed — Link sobre fondos oscuros — mientras se toca.
    public static let linkInversePressed = Color(.sRGB, red: 1.0000, green: 1.0000, blue: 1.0000, opacity: 1.000)
    /// Link/inverse-visited — Sobre fondos oscuros — ya visitado.
    public static let linkInverseVisited = Color(.sRGB, red: 0.9255, green: 0.7059, blue: 0.9961, opacity: 1.000)
    /// Surface/default — Superficie principal. Input bg, Chip bg, Secondary button bg
    public static let surfaceDefault = Color(.sRGB, red: 1.0000, green: 1.0000, blue: 1.0000, opacity: 1.000)
    /// Surface/subtle — Superficie sutil. Chip pressed, Disabled bg, Input disabled bg.
    public static let surfaceSubtle = Color(.sRGB, red: 0.9608, green: 0.9608, blue: 0.9608, opacity: 1.000)
    /// Surface/muted — Superficie apagada. Chip focused bg.
    public static let surfaceMuted = Color(.sRGB, red: 0.8588, green: 0.8588, blue: 0.8588, opacity: 1.000)
    /// Surface/strong — Superficie de mayor énfasis. Uso en Gamification Bar (Icon Bar y progreso).
    public static let surfaceStrong = Color(.sRGB, red: 0.7608, green: 0.7608, blue: 0.7608, opacity: 1.000)
    /// Surface/inverse — Superficie invertida: fondo oscuro sobre contenido claro. Uso en Tooltip, Toast, NavBar item selected y Tag primary.
    public static let surfaceInverse = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Surface/brand — Superficie de marca McDonald's. Fondo amarillo del Header. Uso exclusivo en componentes que requieren identidad de marca como fondo principal.
    public static let surfaceBrand = Color(.sRGB, red: 1.0000, green: 0.7373, blue: 0.0510, opacity: 1.000)
    /// Text/primary — Texto principal en todos los componentes.
    public static let textPrimary = Color(.sRGB, red: 0.1608, green: 0.1608, blue: 0.1608, opacity: 1.000)
    /// Text/secondary — Texto secundario. Placeholder, hint text neutral.
    public static let textSecondary = Color(.sRGB, red: 0.3608, green: 0.3608, blue: 0.3608, opacity: 1.000)
    /// Text/disabled — Texto en estado disabled.
    public static let textDisabled = Color(.sRGB, red: 0.4392, green: 0.4392, blue: 0.4392, opacity: 1.000)
    /// Text/on-color — Texto sobre fondos de color — botón primary, chip selected, tooltip.
    public static let textOnColor = Color(.sRGB, red: 1.0000, green: 1.0000, blue: 1.0000, opacity: 1.000)
    /// Text/error — Texto de error. Hint text en estado error del input.
    public static let textError = Color(.sRGB, red: 0.8588, green: 0.0000, blue: 0.0275, opacity: 1.000)
    /// Trust/default — Color principal de confianza. Tag confianza primary bg.
    public static let trustDefault = Color(.sRGB, red: 0.1059, green: 0.4039, blue: 0.8745, opacity: 1.000)
    /// Trust/subtle — Superficie de confianza. Tag confianza secondary bg.
    public static let trustSubtle = Color(.sRGB, red: 0.8039, green: 0.8706, blue: 0.9765, opacity: 1.000)
    /// Trust/text — Texto sobre superficie de confianza.
    public static let trustText = Color(.sRGB, red: 0.0627, green: 0.2353, blue: 0.5098, opacity: 1.000)
}

/// Espaciado (Valor/spacing/*), en pt.
public enum AWSpacing {
    public static let s0: CGFloat = 0
    public static let s4: CGFloat = 4
    public static let s8: CGFloat = 8
    public static let s16: CGFloat = 16
    public static let s24: CGFloat = 24
    public static let s32: CGFloat = 32
    public static let s40: CGFloat = 40
    public static let s48: CGFloat = 48
    public static let s56: CGFloat = 56
    public static let s64: CGFloat = 64
    public static let s72: CGFloat = 72
    public static let s80: CGFloat = 80
    public static let s88: CGFloat = 88
}

/// Radios (Valor/radius/*), en pt. `xxxl` = píldora / círculo.
public enum AWRadius {
    public static let xs: CGFloat = 4
    public static let s: CGFloat = 8
    public static let m: CGFloat = 12
    public static let l: CGFloat = 16
    public static let xxl: CGFloat = 32
    public static let xxxl: CGFloat = 160
}

/// Estilo de texto de Figma. `maxScale` es el tope con el tamaño de letra del sistema:
/// Display / Heading / Label +30 %, Body el doble (acordado con iOS y Android el 16/10/2026).
public struct AWTextStyle: Sendable {
    public let size: CGFloat
    public let lineHeight: CGFloat
    public let tracking: CGFloat
    public let weight: Font.Weight
    public let italic: Bool
    public let maxScale: CGFloat
}

/// Los 20 text styles de ArchWay.
public enum AWTypography {
    public static let displayLargeBold = AWTextStyle(size: 36, lineHeight: 44, tracking: 0, weight: .bold, italic: false, maxScale: 1.3)
    public static let displayMediumBold = AWTextStyle(size: 30, lineHeight: 36, tracking: 0, weight: .bold, italic: false, maxScale: 1.3)
    public static let headingLargeBold = AWTextStyle(size: 24, lineHeight: 32, tracking: 0, weight: .bold, italic: false, maxScale: 1.3)
    public static let headingLarge = AWTextStyle(size: 24, lineHeight: 32, tracking: 0, weight: .regular, italic: false, maxScale: 1.3)
    public static let headingMediumBold = AWTextStyle(size: 20, lineHeight: 28, tracking: 0, weight: .bold, italic: false, maxScale: 1.3)
    public static let headingMedium = AWTextStyle(size: 20, lineHeight: 28, tracking: 0, weight: .regular, italic: false, maxScale: 1.3)
    public static let headingSmallBold = AWTextStyle(size: 18, lineHeight: 24, tracking: 0, weight: .bold, italic: false, maxScale: 1.3)
    public static let headingSmall = AWTextStyle(size: 18, lineHeight: 24, tracking: 0, weight: .regular, italic: false, maxScale: 1.3)
    public static let textBodyLargeBold = AWTextStyle(size: 16, lineHeight: 24, tracking: 0.25, weight: .bold, italic: false, maxScale: 2)
    public static let textBodyLarge = AWTextStyle(size: 16, lineHeight: 24, tracking: 0.25, weight: .regular, italic: false, maxScale: 2)
    public static let textBodyMediumBold = AWTextStyle(size: 14, lineHeight: 20, tracking: 0.25, weight: .bold, italic: false, maxScale: 2)
    public static let textBodyMedium = AWTextStyle(size: 14, lineHeight: 20, tracking: 0.25, weight: .regular, italic: false, maxScale: 2)
    public static let textBodySmall = AWTextStyle(size: 12, lineHeight: 16, tracking: 0.25, weight: .regular, italic: false, maxScale: 2)
    public static let labelLarge = AWTextStyle(size: 16, lineHeight: 20, tracking: 0.25, weight: .regular, italic: false, maxScale: 1.3)
    public static let labelMediumBold = AWTextStyle(size: 14, lineHeight: 16, tracking: 0.25, weight: .bold, italic: false, maxScale: 1.3)
    public static let labelMedium = AWTextStyle(size: 14, lineHeight: 16, tracking: 0.25, weight: .regular, italic: false, maxScale: 1.3)
    public static let labelMediumItalic = AWTextStyle(size: 14, lineHeight: 16, tracking: 0.25, weight: .regular, italic: true, maxScale: 1.3)
    public static let labelSmallBold = AWTextStyle(size: 12, lineHeight: 16, tracking: 0.25, weight: .bold, italic: false, maxScale: 1.3)
    public static let labelSmall = AWTextStyle(size: 12, lineHeight: 16, tracking: 0.25, weight: .regular, italic: false, maxScale: 1.3)
    public static let labelSmallItalic = AWTextStyle(size: 12, lineHeight: 16, tracking: 0.25, weight: .regular, italic: true, maxScale: 1.3)
}

/// Sombra de un effect style (Shallow / Deep). `radius` = blur / 2 (convención de SwiftUI).
public struct AWShadow: Sendable {
    public let opacity: Double
    public let radius: CGFloat
    public let x: CGFloat
    public let y: CGFloat
}

public enum AWElevation {
    public static let shallowLElev1 = AWShadow(opacity: 0.10, radius: 2, x: 0, y: 2)
    public static let shallowMElev2 = AWShadow(opacity: 0.15, radius: 6, x: 0, y: 4)
    public static let shallowHElev3 = AWShadow(opacity: 0.20, radius: 12, x: 0, y: 8)
    public static let deepLElev1 = AWShadow(opacity: 0.20, radius: 4, x: 0, y: 4)
    public static let deepMElev2 = AWShadow(opacity: 0.25, radius: 8, x: 0, y: 8)
    public static let deepHElev3 = AWShadow(opacity: 0.35, radius: 16, x: 0, y: 16)
}

/// Motion de Foundations (página Motion).
public enum AWMotion {
    public static let fast: Double = 0.1
    public static let moderate: Double = 0.25
    public static let slow: Double = 0.4
    public static let expressive: Double = 0.6
    public static let standard = Animation.timingCurve(0.4, 0, 0.2, 1, duration: AWMotion.fast)
    public static let entrance = Animation.timingCurve(0, 0, 0.2, 1, duration: AWMotion.fast)
    public static let exit = Animation.timingCurve(0.4, 0, 1, 1, duration: AWMotion.fast)
}
