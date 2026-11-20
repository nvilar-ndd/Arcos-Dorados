package com.arcosdorados.archway.core

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.semantics.LiveRegionMode
import androidx.compose.ui.semantics.liveRegion
import androidx.compose.foundation.layout.size
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Popup
import androidx.compose.ui.window.PopupProperties
import com.arcosdorados.archway.foundation.AwIcon
import com.arcosdorados.archway.foundation.AwText
import com.arcosdorados.archway.icons.AwIcons
import com.arcosdorados.archway.tokens.AwColor
import com.arcosdorados.archway.tokens.AwMotion
import com.arcosdorados.archway.tokens.AwRadius
import com.arcosdorados.archway.tokens.AwSpacing
import com.arcosdorados.archway.tokens.AwTypography
import kotlinx.coroutines.delay

enum class AwToastStatus { Info, Success, Warning, Error }

/**
 * Toast — Surface/inverse, radio S, acento izquierdo 5 dp (tokens *-on-black), ícono 16, texto on-color
 * máx. 2 líneas. 328–408 de ancho. Live region (Error = Assertive).
 */
@Composable
fun AwToast(message: String, modifier: Modifier = Modifier, status: AwToastStatus = AwToastStatus.Info, supportText: String? = null) {
    val (accent, icon) = when (status) {
        AwToastStatus.Info -> AwColor.feedbackInfoOnBlack to AwIcons.Info
        AwToastStatus.Success -> AwColor.feedbackSuccessOnBlack to AwIcons.Success
        AwToastStatus.Warning -> AwColor.feedbackWarning to AwIcons.Warning
        AwToastStatus.Error -> AwColor.feedbackErrorOnBlack to AwIcons.Error
    }
    Row(
        modifier.widthIn(min = 328.dp, max = 408.dp).height(IntrinsicSize.Min).clip(RoundedCornerShape(AwRadius.s)).background(AwColor.surfaceInverse)
            .semantics(mergeDescendants = true) { liveRegion = if (status == AwToastStatus.Error) LiveRegionMode.Assertive else LiveRegionMode.Polite },
    ) {
        Box(Modifier.width(5.dp).fillMaxHeight().background(accent))
        Row(
            Modifier.weight(1f).heightIn(min = AwSpacing.s64).padding(start = AwSpacing.s24 - 5.dp, end = AwSpacing.s16, top = AwSpacing.s8, bottom = AwSpacing.s8),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        ) {
            AwIcon(icon, size = 16.dp, tint = accent)
            AwText(message, AwTypography.labelMedium, color = AwColor.textOnColor, maxLines = 2, modifier = Modifier.weight(1f))
            supportText?.let { AwText(it, AwTypography.labelSmall, color = AwColor.textOnColor) }
        }
    }
}

/** Host: muestra el Toast abajo, `durationMs` (5 s) y avisa `onDismiss`. Motion Entrance / Exit. */
@Composable
fun AwToastHost(message: String?, onDismiss: () -> Unit, modifier: Modifier = Modifier, status: AwToastStatus = AwToastStatus.Info, durationMs: Long = 5000) {
    if (message != null) LaunchedEffect(message) { delay(durationMs); onDismiss() }
    Box(modifier.fillMaxWidth().padding(AwSpacing.s16), contentAlignment = Alignment.BottomCenter) {
        AnimatedVisibility(
            visible = message != null,
            enter = slideInVertically(tween(AwMotion.MODERATE, easing = AwMotion.entrance)) { it } + fadeIn(tween(AwMotion.MODERATE)),
            exit = slideOutVertically(tween(AwMotion.FAST, easing = AwMotion.exit)) { it } + fadeOut(tween(AwMotion.FAST)),
        ) { AwToast(message.orEmpty(), status = status) }
    }
}

/**
 * Tooltip (Plain / Rich) — Surface/inverse, texto on-color. Popup anclado sobre el disparador; se cierra
 * con tap fuera, back o la X. Plain: Label Small, 68–300; Rich: 248 con título.
 */
@Composable
fun AwTooltip(visible: Boolean, onDismiss: () -> Unit, text: String, title: String? = null, closable: Boolean = false) {
    if (!visible) return
    Popup(alignment = Alignment.TopCenter, offset = IntOffset(0, -8), onDismissRequest = onDismiss, properties = PopupProperties(focusable = true)) {
        Column(
            Modifier.widthIn(min = 68.dp, max = if (title != null) 248.dp else 300.dp).heightIn(min = 36.dp)
                .clip(RoundedCornerShape(if (title != null) AwRadius.m else AwRadius.s)).background(AwColor.surfaceInverse)
                .padding(horizontal = AwSpacing.s16, vertical = AwSpacing.s8)
                .semantics(mergeDescendants = true) { liveRegion = LiveRegionMode.Polite },
            verticalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Column(Modifier.weight(1f, fill = false)) {
                    title?.let { AwText(it, AwTypography.labelMediumBold, color = AwColor.textOnColor) }
                    AwText(text, if (title != null) AwTypography.labelMedium else AwTypography.labelSmall, color = AwColor.textOnColor)
                }
                if (closable) AwIconButton(AwIcons.Close, "Cerrar", onDismiss, variant = AwButtonVariant.Ghost, size = AwButtonSize.XS)
            }
        }
    }
}

enum class AwInlineNoticeTone { Info, Success, Warning, Critical }

/**
 * Inline notice — Figma: Design Resources CORE › Inline notice (5699:578). Aviso fijo dentro del flujo, sin cierre.
 * Ícono 16 en caja 20, gap 8, padding 10 × 12, radio 4, Body Medium (título y acción en Bold).
 * Nota: Figma usa fondos hex sin token (audit C-T06); hasta tener `Feedback/*-subtle` se usa `feedback*Surface`.
 * Warning / Critical anuncian como live region Polite (no interrumpen).
 */
@Composable
fun AwInlineNotice(
    description: String,
    modifier: Modifier = Modifier,
    tone: AwInlineNoticeTone = AwInlineNoticeTone.Info,
    title: String? = null,
    actionLabel: String? = null,
    onAction: (() -> Unit)? = null,
) {
    val (bg, accent, icon) = when (tone) {
        AwInlineNoticeTone.Info -> Triple(AwColor.feedbackInfoSurface, AwColor.iconPrimary, AwIcons.Info)
        AwInlineNoticeTone.Success -> Triple(AwColor.feedbackSuccessSurface, AwColor.iconPrimary, AwIcons.Success)
        AwInlineNoticeTone.Warning -> Triple(AwColor.feedbackWarningSurface, AwColor.iconPrimary, AwIcons.Warning)
        AwInlineNoticeTone.Critical -> Triple(AwColor.feedbackErrorSurface, AwColor.iconPrimary, AwIcons.Error)
    }
    Row(
        modifier.clip(RoundedCornerShape(AwRadius.xs)).background(bg).padding(horizontal = 12.dp, vertical = 10.dp)
            .semantics(mergeDescendants = onAction == null) {
                if (tone == AwInlineNoticeTone.Warning || tone == AwInlineNoticeTone.Critical) liveRegion = LiveRegionMode.Polite
            },
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Box(Modifier.size(20.dp), contentAlignment = Alignment.Center) { AwIcon(icon, size = 16.dp, tint = accent) }
        Column(Modifier.weight(1f)) {
            if (title != null) AwText(title, AwTypography.labelSmallBold, color = AwColor.textPrimary)
            AwText(description, AwTypography.labelSmall, color = AwColor.textPrimary)
            if (actionLabel != null && onAction != null) {
                AwText(actionLabel, AwTypography.labelSmallBold, color = AwColor.textPrimary,
                    modifier = Modifier.clickable(role = Role.Button, onClick = onAction))
            }
        }
    }
}
