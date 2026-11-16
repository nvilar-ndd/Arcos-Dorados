package com.arcosdorados.archway.foundation

import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.text.BasicText
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.arcosdorados.archway.tokens.AwColor
import com.arcosdorados.archway.tokens.AwShadow
import com.arcosdorados.archway.tokens.AwTextStyle
import kotlin.math.min

/**
 * Familia tipográfica de ArchWay. La app la provee (Speedee en res/font):
 * `CompositionLocalProvider(LocalAwFontFamily provides FontFamily(Font(R.font.speedee_regular), …))`.
 */
val LocalAwFontFamily = staticCompositionLocalOf<FontFamily> { FontFamily.Default }

/** Convierte un text style de ArchWay a TextStyle de Compose, con el tope de fontScale (Foundations › Typography). */
@Composable
fun AwTextStyle.toTextStyle(color: Color = AwColor.textPrimary): TextStyle {
    val density = LocalDensity.current
    val factor = min(density.fontScale, maxScale) / density.fontScale
    return TextStyle(
        fontFamily = LocalAwFontFamily.current,
        fontSize = (size * factor).sp,
        lineHeight = (lineHeight * factor).sp,
        letterSpacing = tracking.sp,
        fontWeight = weight,
        fontStyle = if (italic) FontStyle.Italic else FontStyle.Normal,
        color = color,
    )
}

@Composable
fun AwText(
    text: String,
    style: AwTextStyle,
    modifier: Modifier = Modifier,
    color: Color = AwColor.textPrimary,
    maxLines: Int = Int.MAX_VALUE,
    textAlign: TextAlign? = null,
    strikethrough: Boolean = false,
) {
    BasicText(
        text = text,
        modifier = modifier,
        style = style.toTextStyle(color).copy(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDecoration = if (strikethrough) TextDecoration.LineThrough else null,
        ),
        maxLines = maxLines,
        overflow = TextOverflow.Ellipsis,
    )
}

/** Ícono de Iconography (AwIcons), monocromo. Sin `label` es decorativo. */
@Composable
fun AwIcon(
    icon: ImageVector,
    modifier: Modifier = Modifier,
    size: Dp = 24.dp,
    tint: Color = AwColor.iconPrimary,
    label: String? = null,
    rotation: Float = 0f,
) {
    Image(
        imageVector = icon,
        contentDescription = label,
        colorFilter = ColorFilter.tint(tint),
        modifier = modifier.size(size).rotate(rotation),
    )
}

/** Effect style de Foundations › Elevation. */
fun Modifier.awShadow(s: AwShadow, shape: Shape): Modifier =
    shadow(elevation = s.blur / 2, shape = shape, ambientColor = s.color, spotColor = s.color)

/** Área táctil mínima 48 dp sin cambiar el visual (audit C-A04, Material = 48). */
@Composable
fun AwHitArea(modifier: Modifier = Modifier, content: @Composable () -> Unit) {
    Box(modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp), contentAlignment = Alignment.Center) { content() }
}

/** Contorno de foco (teclado / accesibilidad): Border/strong 2 dp. */
@Composable
fun Modifier.awFocusRing(interactionSource: InteractionSource, shape: Shape): Modifier {
    val focused by interactionSource.collectIsFocusedAsState()
    return if (focused) border(2.dp, AwColor.borderStrong, shape) else this
}

/** Oculta un nodo decorativo de TalkBack. */
fun Modifier.awDecorative(): Modifier = clearAndSetSemantics { }

/** Une varios nodos en uno con descripción propia. */
fun Modifier.awDescribed(text: String): Modifier = semantics { contentDescription = text }

@Suppress("unused")
internal fun Modifier.awAlpha(visible: Boolean) = alpha(if (visible) 1f else 0f)
