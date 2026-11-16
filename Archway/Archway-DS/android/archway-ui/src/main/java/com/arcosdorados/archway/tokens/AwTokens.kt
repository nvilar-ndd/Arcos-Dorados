// Generado por scripts/build-platform-tokens.mjs desde tokens/archway.tokens.json (Figma SSOT). No editar a mano.
package com.arcosdorados.archway.tokens

import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/** Colores semánticos de ArchWay (colección Semantic, modo Light). Los primitivos no se exponen. */
object AwColor {
    /** Border/default */
    val borderDefault = Color(0xFF8F8F8F)
    /** Border/soft */
    val borderSoft = Color(0xFFDBDBDB)
    /** Border/strong */
    val borderStrong = Color(0xFF424242)
    /** Border/subtle */
    val borderSubtle = Color(0xFFC2C2C2)
    /** Border/input-active */
    val borderInputActive = Color(0xFF292929)
    /** Button/primary-bg */
    val buttonPrimaryBg = Color(0xFFFFBC0D)
    /** Button/primary-bg-pressed */
    val buttonPrimaryBgPressed = Color(0xFFFFCB42)
    /** Button/primary-bg-focused */
    val buttonPrimaryBgFocused = Color(0xFFDB9F00)
    /** Button/primary-bg-disabled */
    val buttonPrimaryBgDisabled = Color(0xFFFFF5DB)
    /** Button/text */
    val buttonText = Color(0xFF292929)
    /** Button/text-disabled */
    val buttonTextDisabled = Color(0xFF707070)
    /** Button/secondary-bg */
    val buttonSecondaryBg = Color(0xFFFFFFFF)
    /** Button/secondary-bg-pressed */
    val buttonSecondaryBgPressed = Color(0xFFF5F5F5)
    /** Button/secondary-bg-focused */
    val buttonSecondaryBgFocused = Color(0xFFF5F5F5)
    /** Button/secondary-bg-disabled */
    val buttonSecondaryBgDisabled = Color(0xFFF5F5F5)
    /** Button/secondary-stroke */
    val buttonSecondaryStroke = Color(0xFF8F8F8F)
    /** Button/secondary-stroke-pressed */
    val buttonSecondaryStrokePressed = Color(0xFF8F8F8F)
    /** Button/secondary-stroke-focused */
    val buttonSecondaryStrokeFocused = Color(0xFF424242)
    /** Button/secondary-stroke-disabled */
    val buttonSecondaryStrokeDisabled = Color(0xFF707070)
    /** Button/ghost-bg */
    val buttonGhostBg = Color(0x00FFFFFF)
    /** Button/ghost-bg-pressed */
    val buttonGhostBgPressed = Color(0xFFF5F5F5)
    /** Chip/icon */
    val chipIcon = Color(0xFF292929)
    /** Chip/icon-disabled */
    val chipIconDisabled = Color(0xFF707070)
    /** Chip/bg */
    val chipBg = Color(0xFFFFFFFF)
    /** Chip/stroke */
    val chipStroke = Color(0xFF8F8F8F)
    /** Chip/text */
    val chipText = Color(0xFF292929)
    /** Chip/bg-selected */
    val chipBgSelected = Color(0xFFFFBC0D)
    /** Chip/text-selected */
    val chipTextSelected = Color(0xFF292929)
    /** Chip/bg-pressed */
    val chipBgPressed = Color(0xFFF5F5F5)
    /** Chip/stroke-pressed */
    val chipStrokePressed = Color(0xFF8F8F8F)
    /** Chip/bg-focused */
    val chipBgFocused = Color(0xFFDBDBDB)
    /** Chip/stroke-focused */
    val chipStrokeFocused = Color(0xFF8F8F8F)
    /** Chip/bg-disabled */
    val chipBgDisabled = Color(0xFFF5F5F5)
    /** Chip/stroke-disabled */
    val chipStrokeDisabled = Color(0xFFC2C2C2)
    /** Chip/text-disabled */
    val chipTextDisabled = Color(0xFF707070)
    /** Feature/missions */
    val featureMissions = Color(0xFF5F027C)
    /** Feature/missions-surface */
    val featureMissionsSurface = Color(0xFFF9E6FF)
    /** Feature/accessibility */
    val featureAccessibility = Color(0xFF1652B1)
    /** Feedback/error */
    val feedbackError = Color(0xFFDB0007)
    /** Feedback/error-on-black */
    val feedbackErrorOnBlack = Color(0xFFFF4248)
    /** Feedback/error-surface */
    val feedbackErrorSurface = Color(0xFFFFDBDC)
    /** Feedback/error-text */
    val feedbackErrorText = Color(0xFFA80005)
    /** Feedback/success */
    val feedbackSuccess = Color(0xFF1F6538)
    /** Feedback/success-on-black */
    val feedbackSuccessOnBlack = Color(0xFF2B8C4D)
    /** Feedback/success-surface */
    val feedbackSuccessSurface = Color(0xFFC8EED6)
    /** Feedback/success-text */
    val feedbackSuccessText = Color(0xFF1F6538)
    /** Feedback/warning */
    val feedbackWarning = Color(0xFFFFBC0D)
    /** Feedback/warning-surface */
    val feedbackWarningSurface = Color(0xFFFFE7A8)
    /** Feedback/info */
    val feedbackInfo = Color(0xFF1B67DF)
    /** Feedback/info-on-black */
    val feedbackInfoOnBlack = Color(0xFF4584E8)
    /** Feedback/info-surface */
    val feedbackInfoSurface = Color(0xFFCDDEF9)
    /** Interactive/active */
    val interactiveActive = Color(0xFFFFBC0D)
    /** Interactive/active-text */
    val interactiveActiveText = Color(0xFF292929)
    /** Interactive/active-subtle */
    val interactiveActiveSubtle = Color(0xFFC2C2C2)
    /** Interactive/active-subtle-text */
    val interactiveActiveSubtleText = Color(0xFFA87A00)
    /** Highlight/new */
    val highlightNew = Color(0xFF8A3FFC)
    /** Icon/on-color */
    val iconOnColor = Color(0xFFFFFFFF)
    /** Icon/primary */
    val iconPrimary = Color(0xFF292929)
    /** Icon/gray */
    val iconGray = Color(0xFF5C5C5C)
    /** Icon/disabled */
    val iconDisabled = Color(0xFF707070)
    /** Icon/gold */
    val iconGold = Color(0xFFFFBC0D)
    /** Icon/red */
    val iconRed = Color(0xFFDB0007)
    /** Link/default */
    val linkDefault = Color(0xFF1652B1)
    /** Link/hover */
    val linkHover = Color(0xFF1B67DF)
    /** Link/focused */
    val linkFocused = Color(0xFF103C82)
    /** Link/pressed */
    val linkPressed = Color(0xFF292929)
    /** Link/visited */
    val linkVisited = Color(0xFF8703B0)
    /** Link/inverse */
    val linkInverse = Color(0xFFA0C0F3)
    /** Link/inverse-hover */
    val linkInverseHover = Color(0xFF72A2EE)
    /** Link/inverse-focused */
    val linkInverseFocused = Color(0xFF72A2EE)
    /** Link/inverse-pressed */
    val linkInversePressed = Color(0xFFFFFFFF)
    /** Link/inverse-visited */
    val linkInverseVisited = Color(0xFFECB4FE)
    /** Surface/default */
    val surfaceDefault = Color(0xFFFFFFFF)
    /** Surface/subtle */
    val surfaceSubtle = Color(0xFFF5F5F5)
    /** Surface/muted */
    val surfaceMuted = Color(0xFFDBDBDB)
    /** Surface/strong */
    val surfaceStrong = Color(0xFFC2C2C2)
    /** Surface/inverse */
    val surfaceInverse = Color(0xFF292929)
    /** Surface/brand */
    val surfaceBrand = Color(0xFFFFBC0D)
    /** Text/primary */
    val textPrimary = Color(0xFF292929)
    /** Text/secondary */
    val textSecondary = Color(0xFF5C5C5C)
    /** Text/disabled */
    val textDisabled = Color(0xFF707070)
    /** Text/on-color */
    val textOnColor = Color(0xFFFFFFFF)
    /** Text/error */
    val textError = Color(0xFFDB0007)
    /** Trust/default */
    val trustDefault = Color(0xFF1B67DF)
    /** Trust/subtle */
    val trustSubtle = Color(0xFFCDDEF9)
    /** Trust/text */
    val trustText = Color(0xFF103C82)
}

/** Espaciado (Valor/spacing/…). */
object AwSpacing {
    val s0: Dp = 0.dp
    val s4: Dp = 4.dp
    val s8: Dp = 8.dp
    val s16: Dp = 16.dp
    val s24: Dp = 24.dp
    val s32: Dp = 32.dp
    val s40: Dp = 40.dp
    val s48: Dp = 48.dp
    val s56: Dp = 56.dp
    val s64: Dp = 64.dp
    val s72: Dp = 72.dp
    val s80: Dp = 80.dp
    val s88: Dp = 88.dp
}

/** Radios (Valor/radius/…). `xxxl` = píldora / círculo. */
object AwRadius {
    val xs: Dp = 4.dp
    val s: Dp = 8.dp
    val m: Dp = 12.dp
    val l: Dp = 16.dp
    val xxl: Dp = 32.dp
    val xxxl: Dp = 160.dp
}

/**
 * Estilo de texto de Figma en sp. `maxScale` es el tope de fontScale:
 * Display / Heading / Label 1,3 · Body 2,0 (acordado con iOS y Android el 16/10/2026).
 */
@Immutable
data class AwTextStyle(
    val size: Float,
    val lineHeight: Float,
    val tracking: Float,
    val weight: FontWeight,
    val italic: Boolean,
    val maxScale: Float,
)

/** Los 20 text styles de ArchWay. */
object AwTypography {
    val displayLargeBold = AwTextStyle(size = 36f, lineHeight = 44f, tracking = 0f, weight = FontWeight.Bold, italic = false, maxScale = 1.3f)
    val displayMediumBold = AwTextStyle(size = 30f, lineHeight = 36f, tracking = 0f, weight = FontWeight.Bold, italic = false, maxScale = 1.3f)
    val headingLargeBold = AwTextStyle(size = 24f, lineHeight = 32f, tracking = 0f, weight = FontWeight.Bold, italic = false, maxScale = 1.3f)
    val headingLarge = AwTextStyle(size = 24f, lineHeight = 32f, tracking = 0f, weight = FontWeight.Normal, italic = false, maxScale = 1.3f)
    val headingMediumBold = AwTextStyle(size = 20f, lineHeight = 28f, tracking = 0f, weight = FontWeight.Bold, italic = false, maxScale = 1.3f)
    val headingMedium = AwTextStyle(size = 20f, lineHeight = 28f, tracking = 0f, weight = FontWeight.Normal, italic = false, maxScale = 1.3f)
    val headingSmallBold = AwTextStyle(size = 18f, lineHeight = 24f, tracking = 0f, weight = FontWeight.Bold, italic = false, maxScale = 1.3f)
    val headingSmall = AwTextStyle(size = 18f, lineHeight = 24f, tracking = 0f, weight = FontWeight.Normal, italic = false, maxScale = 1.3f)
    val textBodyLargeBold = AwTextStyle(size = 16f, lineHeight = 24f, tracking = 0.25f, weight = FontWeight.Bold, italic = false, maxScale = 2f)
    val textBodyLarge = AwTextStyle(size = 16f, lineHeight = 24f, tracking = 0.25f, weight = FontWeight.Normal, italic = false, maxScale = 2f)
    val textBodyMediumBold = AwTextStyle(size = 14f, lineHeight = 20f, tracking = 0.25f, weight = FontWeight.Bold, italic = false, maxScale = 2f)
    val textBodyMedium = AwTextStyle(size = 14f, lineHeight = 20f, tracking = 0.25f, weight = FontWeight.Normal, italic = false, maxScale = 2f)
    val textBodySmall = AwTextStyle(size = 12f, lineHeight = 16f, tracking = 0.25f, weight = FontWeight.Normal, italic = false, maxScale = 2f)
    val labelLarge = AwTextStyle(size = 16f, lineHeight = 20f, tracking = 0.25f, weight = FontWeight.Normal, italic = false, maxScale = 1.3f)
    val labelMediumBold = AwTextStyle(size = 14f, lineHeight = 16f, tracking = 0.25f, weight = FontWeight.Bold, italic = false, maxScale = 1.3f)
    val labelMedium = AwTextStyle(size = 14f, lineHeight = 16f, tracking = 0.25f, weight = FontWeight.Normal, italic = false, maxScale = 1.3f)
    val labelMediumItalic = AwTextStyle(size = 14f, lineHeight = 16f, tracking = 0.25f, weight = FontWeight.Normal, italic = true, maxScale = 1.3f)
    val labelSmallBold = AwTextStyle(size = 12f, lineHeight = 16f, tracking = 0.25f, weight = FontWeight.Bold, italic = false, maxScale = 1.3f)
    val labelSmall = AwTextStyle(size = 12f, lineHeight = 16f, tracking = 0.25f, weight = FontWeight.Normal, italic = false, maxScale = 1.3f)
    val labelSmallItalic = AwTextStyle(size = 12f, lineHeight = 16f, tracking = 0.25f, weight = FontWeight.Normal, italic = true, maxScale = 1.3f)
}

@Immutable
data class AwShadow(val offsetY: Dp, val blur: Dp, val color: Color)

object AwElevation {
    val shallowLElev1 = AwShadow(offsetY = 2.dp, blur = 4.dp, color = Color(0x1A292929))
    val shallowMElev2 = AwShadow(offsetY = 4.dp, blur = 12.dp, color = Color(0x26292929))
    val shallowHElev3 = AwShadow(offsetY = 8.dp, blur = 24.dp, color = Color(0x33292929))
    val deepLElev1 = AwShadow(offsetY = 4.dp, blur = 8.dp, color = Color(0x33292929))
    val deepMElev2 = AwShadow(offsetY = 8.dp, blur = 16.dp, color = Color(0x40292929))
    val deepHElev3 = AwShadow(offsetY = 16.dp, blur = 32.dp, color = Color(0x59292929))
}

/** Motion de Foundations (página Motion). */
object AwMotion {
    const val FAST: Int = 100
    const val MODERATE: Int = 250
    const val SLOW: Int = 400
    const val EXPRESSIVE: Int = 600
    val standard = CubicBezierEasing(0.4f, 0f, 0.2f, 1f)
    val entrance = CubicBezierEasing(0f, 0f, 0.2f, 1f)
    val exit = CubicBezierEasing(0.4f, 0f, 1f, 1f)
}
