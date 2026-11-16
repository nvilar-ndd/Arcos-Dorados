package com.arcosdorados.archway.core

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.selection.selectable
import androidx.compose.foundation.selection.toggleable
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.dp
import com.arcosdorados.archway.foundation.AwIcon
import com.arcosdorados.archway.foundation.AwText
import com.arcosdorados.archway.foundation.awFocusRing
import com.arcosdorados.archway.foundation.awShadow
import com.arcosdorados.archway.icons.AwIcons
import com.arcosdorados.archway.tokens.AwColor
import com.arcosdorados.archway.tokens.AwElevation
import com.arcosdorados.archway.tokens.AwMotion
import com.arcosdorados.archway.tokens.AwRadius
import com.arcosdorados.archway.tokens.AwSpacing
import com.arcosdorados.archway.tokens.AwTypography

/** Checkbox — ícono 24 en área 48. Seleccionado: Button/primary-bg + tilde Icon/primary. */
@Composable
fun AwCheckbox(checked: Boolean, onCheckedChange: (Boolean) -> Unit, label: String, modifier: Modifier = Modifier, showLabel: Boolean = true, enabled: Boolean = true) {
    val source = remember { MutableInteractionSource() }
    val shape = RoundedCornerShape(AwRadius.xs)
    Row(
        modifier.toggleable(checked, source, indication = null, enabled = enabled, role = Role.Checkbox, onValueChange = onCheckedChange)
            .semantics { if (!showLabel) contentDescription = label },
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
    ) {
        Box(Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp), contentAlignment = Alignment.Center) {
            Box(
                Modifier.size(20.dp).clip(shape)
                    .background(if (checked) (if (enabled) AwColor.buttonPrimaryBg else AwColor.buttonPrimaryBgDisabled) else Color.Transparent)
                    .border(2.dp, if (checked) Color.Transparent else if (enabled) AwColor.iconPrimary else AwColor.borderSubtle, shape)
                    .awFocusRing(source, shape),
                contentAlignment = Alignment.Center,
            ) { if (checked) AwIcon(AwIcons.Checkmark, size = 16.dp, tint = if (enabled) AwColor.iconPrimary else AwColor.iconDisabled) }
        }
        if (showLabel) AwText(label, AwTypography.labelMedium, color = if (enabled) AwColor.textPrimary else AwColor.textDisabled)
    }
}

/** Radio — igual que Checkbox, en círculo. Agrupar con `Modifier.selectableGroup()` en el contenedor. */
@Composable
fun AwRadio(selected: Boolean, onClick: () -> Unit, label: String, modifier: Modifier = Modifier, enabled: Boolean = true) {
    val source = remember { MutableInteractionSource() }
    Row(
        modifier.selectable(selected, source, indication = null, enabled = enabled, role = Role.RadioButton, onClick = onClick),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
    ) {
        Box(Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp), contentAlignment = Alignment.Center) {
            Box(
                Modifier.size(20.dp).clip(CircleShape)
                    .background(if (selected) (if (enabled) AwColor.buttonPrimaryBg else AwColor.buttonPrimaryBgDisabled) else Color.Transparent)
                    .border(2.dp, if (selected) Color.Transparent else if (enabled) AwColor.iconPrimary else AwColor.borderSubtle, CircleShape)
                    .awFocusRing(source, CircleShape),
                contentAlignment = Alignment.Center,
            ) { if (selected) Box(Modifier.size(8.dp).background(if (enabled) AwColor.iconPrimary else AwColor.iconDisabled, CircleShape)) }
        }
        AwText(label, AwTypography.labelMedium, color = if (enabled) AwColor.textPrimary else AwColor.textDisabled)
    }
}

/**
 * Switch (Android custom) — track 52 × 32 píldora, padding 4; handle 24 que se estira a 30 en Pressed.
 * Colores sólidos por token (nunca opacidad). Movimiento: FAST + Standard. ⚠️ Tracks < 3:1 (C-A01).
 */
@Composable
fun AwSwitch(checked: Boolean, onCheckedChange: (Boolean) -> Unit, label: String, modifier: Modifier = Modifier, enabled: Boolean = true) {
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    val spec = tween<androidx.compose.ui.unit.Dp>(AwMotion.FAST, easing = AwMotion.standard)
    val handleWidth by animateDpAsState(if (pressed && enabled) 30.dp else 24.dp, spec, label = "handle")
    val offset by animateDpAsState(if (checked) 52.dp - 8.dp - handleWidth else 0.dp, spec, label = "offset")
    val track by animateColorAsState(
        when {
            checked && enabled -> AwColor.interactiveActive
            checked -> AwColor.buttonPrimaryBgDisabled
            else -> AwColor.surfaceMuted
        },
        tween(AwMotion.FAST, easing = AwMotion.standard), label = "track",
    )
    val shape = RoundedCornerShape(AwRadius.xxxl)
    Box(
        modifier.sizeIn(minWidth = 52.dp, minHeight = 48.dp)
            .toggleable(checked, source, indication = null, enabled = enabled, role = Role.Switch, onValueChange = onCheckedChange)
            .semantics { contentDescription = label },
        contentAlignment = Alignment.Center,
    ) {
        Box(Modifier.width(52.dp).height(32.dp).clip(shape).background(track).awFocusRing(source, shape).padding(4.dp)) {
            Box(
                Modifier.padding(start = offset).width(handleWidth).height(24.dp)
                    .awShadow(AwElevation.shallowLElev1, CircleShape)
                    .background(if (!enabled && !checked) AwColor.surfaceSubtle else AwColor.surfaceDefault, CircleShape),
            )
        }
    }
}

/** Chip — Medium 40 · Small 32 (área 48), píldora. Selected: Label Medium Bold. */
@Composable
fun AwChip(label: String, selected: Boolean, onSelectedChange: (Boolean) -> Unit, modifier: Modifier = Modifier, icon: ImageVector? = null, small: Boolean = false, enabled: Boolean = true) {
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    val shape = RoundedCornerShape(AwRadius.xxxl)
    val bg = when { !enabled -> AwColor.chipBgDisabled; selected -> AwColor.chipBgSelected; pressed -> AwColor.chipBgPressed; else -> AwColor.chipBg }
    val stroke = when { selected -> Color.Transparent; !enabled -> AwColor.chipStrokeDisabled; pressed -> AwColor.chipStrokePressed; else -> AwColor.chipStroke }
    val fg = when { !enabled -> AwColor.chipTextDisabled; selected -> AwColor.chipTextSelected; else -> AwColor.chipText }
    Box(
        modifier.sizeIn(minHeight = 48.dp).toggleable(selected, source, indication = null, enabled = enabled, role = Role.Checkbox, onValueChange = onSelectedChange),
        contentAlignment = Alignment.Center,
    ) {
        Row(
            Modifier.height(if (small) AwSpacing.s32 else AwSpacing.s40).clip(shape).background(bg).border(1.dp, stroke, shape)
                .awFocusRing(source, shape).padding(horizontal = AwSpacing.s16),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        ) {
            icon?.let { AwIcon(it, size = 16.dp, tint = if (enabled) AwColor.chipIcon else AwColor.chipIconDisabled) }
            AwText(label, if (selected) AwTypography.labelMediumBold else AwTypography.labelMedium, color = fg, maxLines = 1)
        }
    }
}
