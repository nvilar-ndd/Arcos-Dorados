package com.arcosdorados.archway.core

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.animation.core.Animatable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.disabled
import androidx.compose.ui.semantics.selected
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.semantics.stateDescription
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.arcosdorados.archway.foundation.AwIcon
import com.arcosdorados.archway.foundation.AwText
import com.arcosdorados.archway.foundation.awFocusRing
import com.arcosdorados.archway.foundation.awShadow
import com.arcosdorados.archway.tokens.AwColor
import com.arcosdorados.archway.tokens.AwElevation
import com.arcosdorados.archway.tokens.AwMotion
import com.arcosdorados.archway.tokens.AwRadius
import com.arcosdorados.archway.tokens.AwSpacing
import com.arcosdorados.archway.tokens.AwTypography

enum class AwButtonVariant { Primary, Secondary, Ghost }
enum class AwButtonSize(val height: Dp) { Large(56.dp), Medium(48.dp), Small(32.dp), XS(24.dp) }
enum class AwButtonShape { Square, Round }

internal data class AwButtonColors(val bg: Color, val stroke: Color, val text: Color)

internal fun buttonColors(variant: AwButtonVariant, pressed: Boolean, enabled: Boolean): AwButtonColors = when {
    !enabled -> when (variant) {
        AwButtonVariant.Primary -> AwButtonColors(AwColor.buttonPrimaryBgDisabled, Color.Transparent, AwColor.buttonTextDisabled)
        AwButtonVariant.Secondary -> AwButtonColors(AwColor.buttonSecondaryBgDisabled, AwColor.buttonSecondaryStrokeDisabled, AwColor.buttonTextDisabled)
        AwButtonVariant.Ghost -> AwButtonColors(AwColor.buttonGhostBg, Color.Transparent, AwColor.buttonTextDisabled)
    }
    else -> when (variant) {
        AwButtonVariant.Primary -> AwButtonColors(if (pressed) AwColor.buttonPrimaryBgPressed else AwColor.buttonPrimaryBg, Color.Transparent, AwColor.buttonText)
        AwButtonVariant.Secondary -> AwButtonColors(
            if (pressed) AwColor.buttonSecondaryBgPressed else AwColor.buttonSecondaryBg,
            if (pressed) AwColor.buttonSecondaryStrokePressed else AwColor.buttonSecondaryStroke,
            AwColor.buttonText,
        )
        AwButtonVariant.Ghost -> AwButtonColors(if (pressed) AwColor.buttonGhostBgPressed else AwColor.buttonGhostBg, Color.Transparent, AwColor.buttonText)
    }
}

/**
 * Button — Figma: Design Resources CORE › Button. Primary · Secondary · Ghost; Large 56 · Medium 48 ·
 * Small 32 · XS 24 (área táctil 48). Pressed por token (sin ripple), Disabled por token (sin opacidad).
 * Loading: barra de avance + stateDescription "Procesando".
 */
@Composable
fun AwButton(
    label: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: AwButtonVariant = AwButtonVariant.Primary,
    size: AwButtonSize = AwButtonSize.Large,
    shape: AwButtonShape = AwButtonShape.Square,
    iconLeading: ImageVector? = null,
    iconTrailing: ImageVector? = null,
    enabled: Boolean = true,
    loading: Boolean = false,
) {
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    val c = buttonColors(variant, pressed, enabled)
    val bg by animateColorAsState(c.bg, tween(AwMotion.FAST, easing = AwMotion.standard), label = "bg")
    val radius = when {
        shape == AwButtonShape.Round -> AwRadius.xxl
        size == AwButtonSize.Large || size == AwButtonSize.Medium -> AwRadius.l
        else -> AwRadius.m
    }
    val rounded = RoundedCornerShape(radius)
    val text = when (size) {
        AwButtonSize.Large -> AwTypography.labelLarge
        AwButtonSize.Medium -> AwTypography.labelMedium
        else -> AwTypography.labelSmall
    }
    Box(
        modifier = modifier
            .sizeIn(minHeight = 48.dp, minWidth = 48.dp)
            .clickable(source, indication = null, enabled = enabled && !loading, role = Role.Button, onClick = onClick)
            .semantics { if (loading) stateDescription = "Procesando" },
        contentAlignment = Alignment.Center,
    ) {
        Box(
            Modifier
                .height(size.height)
                .clip(rounded)
                .background(bg)
                .border(0.5.dp, c.stroke, rounded)
                .awFocusRing(source, rounded),
            contentAlignment = Alignment.Center,
        ) {
            if (loading) LoadingBar(Modifier.matchParentSize())
            Row(
                Modifier.padding(horizontal = AwSpacing.s16),
                horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                iconLeading?.let { AwIcon(it, size = 16.dp, tint = c.text) }
                AwText(label, text, color = c.text, maxLines = 1)
                iconTrailing?.let { AwIcon(it, size = 16.dp, tint = c.text) }
            }
        }
    }
}

@Composable
private fun LoadingBar(modifier: Modifier) {
    val progress = remember { Animatable(0f) }
    LaunchedEffect(Unit) { progress.animateTo(0.9f, tween(2000, easing = AwMotion.entrance)) }
    Box(modifier) {
        Box(Modifier.fillMaxHeight().fillMaxWidth(progress.value).background(AwColor.buttonPrimaryBgPressed))
    }
}

/** Icon Only — Medium 48 · Small 32 · XS 24 (área 48). `label` obligatorio (TalkBack). */
@Composable
fun AwIconButton(
    icon: ImageVector,
    label: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: AwButtonVariant = AwButtonVariant.Primary,
    size: AwButtonSize = AwButtonSize.Medium,
    selected: Boolean? = null,
    enabled: Boolean = true,
) {
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    val c = buttonColors(variant, pressed, enabled)
    val side = if (size == AwButtonSize.Large) 48.dp else size.height
    Box(
        modifier = modifier
            .sizeIn(minWidth = 48.dp, minHeight = 48.dp)
            .clickable(source, indication = null, enabled = enabled, role = Role.Button, onClick = onClick)
            .semantics {
                contentDescription = label
                if (selected != null) this.selected = selected
                if (!enabled) disabled()
            },
        contentAlignment = Alignment.Center,
    ) {
        Box(
            Modifier.size(side).clip(CircleShape).background(c.bg).border(0.5.dp, c.stroke, CircleShape).awFocusRing(source, CircleShape),
            contentAlignment = Alignment.Center,
        ) { AwIcon(icon, size = if (side >= 48.dp) 24.dp else 16.dp, tint = c.text) }
    }
}

/** FAB — redondo (radio XXL), Shallow/M.Elev-2; Extended con label. */
@Composable
fun AwFab(icon: ImageVector, label: String, onClick: () -> Unit, modifier: Modifier = Modifier, extended: Boolean = false) {
    val shape = RoundedCornerShape(AwRadius.xxl)
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    Row(
        modifier
            .sizeIn(minWidth = AwSpacing.s56, minHeight = AwSpacing.s56)
            .awShadow(AwElevation.shallowMElev2, shape)
            .clip(shape)
            .background(if (pressed) AwColor.buttonPrimaryBgPressed else AwColor.buttonPrimaryBg)
            .clickable(source, indication = null, role = Role.Button, onClick = onClick)
            .semantics { if (!extended) contentDescription = label }
            .padding(horizontal = AwSpacing.s16),
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8, Alignment.CenterHorizontally),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        AwIcon(icon, tint = AwColor.buttonText)
        if (extended) AwText(label, AwTypography.labelLarge, color = AwColor.buttonText)
    }
}
