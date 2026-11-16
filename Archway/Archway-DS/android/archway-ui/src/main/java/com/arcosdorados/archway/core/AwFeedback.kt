package com.arcosdorados.archway.core

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.background
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
