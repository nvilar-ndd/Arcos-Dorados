package com.arcosdorados.archway.core

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.semantics.ProgressBarRangeInfo
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.progressBarRangeInfo
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import android.provider.Settings
import com.arcosdorados.archway.foundation.AwIcon
import com.arcosdorados.archway.foundation.AwText
import com.arcosdorados.archway.foundation.awDecorative
import com.arcosdorados.archway.tokens.AwColor
import com.arcosdorados.archway.tokens.AwMotion
import com.arcosdorados.archway.tokens.AwRadius
import com.arcosdorados.archway.tokens.AwSpacing
import com.arcosdorados.archway.tokens.AwTypography

enum class AwTagHierarchy { Primary, Secondary, Tertiary }

/** Tag — alto 24, radio XS, Label Small Bold. */
@Composable
fun AwTag(label: String, modifier: Modifier = Modifier, hierarchy: AwTagHierarchy = AwTagHierarchy.Primary, icon: ImageVector? = null) {
    val fg = if (hierarchy == AwTagHierarchy.Primary) AwColor.textOnColor else AwColor.textPrimary
    val bg = when (hierarchy) { AwTagHierarchy.Primary -> AwColor.surfaceInverse; AwTagHierarchy.Secondary -> AwColor.surfaceMuted; AwTagHierarchy.Tertiary -> Color.Transparent }
    Row(
        modifier.height(AwSpacing.s24).background(bg, RoundedCornerShape(AwRadius.xs)).padding(horizontal = AwSpacing.s8),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s4),
    ) {
        icon?.let { AwIcon(it, size = 16.dp, tint = fg) }
        AwText(label, AwTypography.labelSmallBold, color = fg, maxLines = 1)
    }
}

/** Badge — número (Large 16) o punto (8). Highlight/new. Decorativo. */
@Composable
fun AwBadge(modifier: Modifier = Modifier, count: Int? = null, max: Int = 99) {
    if (count == null) {
        Box(modifier.size(AwSpacing.s8).background(AwColor.highlightNew, CircleShape).awDecorative())
    } else {
        Box(
            modifier.sizeIn(minWidth = 16.dp, minHeight = 16.dp).background(AwColor.highlightNew, RoundedCornerShape(AwRadius.xxxl)).padding(horizontal = AwSpacing.s4).awDecorative(),
            contentAlignment = Alignment.Center,
        ) { AwText(if (count > max) "$max+" else "$count", AwTypography.labelSmallBold, color = AwColor.textOnColor) }
    }
}

/** Divider — 1 dp, Border/soft. */
@Composable
fun AwDivider(modifier: Modifier = Modifier) {
    Box(modifier.fillMaxWidth().height(1.dp).background(AwColor.borderSoft).awDecorative())
}

/** ¿El usuario desactivó las animaciones del sistema? (Ajustes › Accesibilidad › Quitar animaciones). */
@Composable
fun awReduceMotion(): Boolean {
    val ctx = LocalContext.current
    return Settings.Global.getFloat(ctx.contentResolver, Settings.Global.ANIMATOR_DURATION_SCALE, 1f) == 0f
}

/** Shimmer del Skeleton (en código, no en Figma). Se apaga con "Quitar animaciones". */
fun Modifier.awShimmer(): Modifier = composed {
    if (awReduceMotion()) return@composed this
    val t = rememberInfiniteTransition(label = "shimmer")
    val x by t.animateFloat(-1f, 1f, infiniteRepeatable(tween(1400, easing = AwMotion.standard), RepeatMode.Restart), label = "x")
    drawWithContent {
        drawContent()
        val w = size.width
        drawRect(Brush.horizontalGradient(listOf(Color.Transparent, AwColor.surfaceDefault.copy(alpha = 0.6f), Color.Transparent), startX = x * w, endX = x * w + w))
    }
}

enum class AwSkeletonType { Square, Rectangle, Circle }

/** Skeleton — Square 72 (S) · Rectangle 92 × 16 (XS) · Circle 72. Surface/muted. */
@Composable
fun AwSkeleton(modifier: Modifier = Modifier, type: AwSkeletonType = AwSkeletonType.Rectangle, width: Dp? = null, height: Dp? = null) {
    val shape = when (type) { AwSkeletonType.Square -> RoundedCornerShape(AwRadius.s); AwSkeletonType.Rectangle -> RoundedCornerShape(AwRadius.xs); AwSkeletonType.Circle -> CircleShape }
    Box(
        modifier
            .width(width ?: if (type == AwSkeletonType.Rectangle) 92.dp else AwSpacing.s72)
            .height(height ?: if (type == AwSkeletonType.Rectangle) AwSpacing.s16 else AwSpacing.s72)
            .clip(shape).background(AwColor.surfaceMuted).awShimmer().awDecorative(),
    )
}

/** Progress bar — track Feedback/info-surface, indicador Feedback/info, alto 8, radio XS. `value` 0..1. */
@Composable
fun AwProgressBar(value: Float, modifier: Modifier = Modifier, label: String = "Progreso", showLabel: Boolean = false) {
    val v by animateFloatAsState(value.coerceIn(0f, 1f), tween(AwMotion.MODERATE, easing = AwMotion.standard), label = "progress")
    Column(modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
        if (showLabel) Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            AwText(label, AwTypography.labelMedium); AwText("${(value * 100).toInt()} %", AwTypography.labelMedium)
        }
        Box(
            Modifier.fillMaxWidth().height(AwSpacing.s8).clip(RoundedCornerShape(AwRadius.xs)).background(AwColor.feedbackInfoSurface)
                .semantics { contentDescription = label; progressBarRangeInfo = ProgressBarRangeInfo(value.coerceIn(0f, 1f), 0f..1f) },
        ) { Box(Modifier.fillMaxHeight().fillMaxWidth(v).clip(RoundedCornerShape(AwRadius.xs)).background(AwColor.feedbackInfo)) }
    }
}

/** Progress Circle — 16 · 24 · 32 · 48 · 56. `value == null` = indeterminado. */
@Composable
fun AwProgressCircle(modifier: Modifier = Modifier, value: Float? = null, size: Dp = 32.dp) {
    val stroke = when { size <= 24.dp -> 2.dp; size <= 32.dp -> 3.dp; else -> 4.dp }
    val reduce = awReduceMotion()
    val rotation = if (value == null && !reduce) {
        val t = rememberInfiniteTransition(label = "spin")
        t.animateFloat(0f, 360f, infiniteRepeatable(tween(1000, easing = LinearEasing)), label = "r").value
    } else 0f
    Canvas(
        modifier.size(size).semantics {
            contentDescription = "Cargando"
            progressBarRangeInfo = if (value == null) ProgressBarRangeInfo.Indeterminate else ProgressBarRangeInfo(value, 0f..1f)
        },
    ) {
        val s = stroke.toPx()
        drawArc(AwColor.feedbackInfoSurface, 0f, 360f, false, topLeft = Offset(s / 2, s / 2), size = androidx.compose.ui.geometry.Size(this.size.width - s, this.size.height - s), style = Stroke(s))
        drawArc(AwColor.feedbackInfo, -90f + rotation, 360f * (value ?: 0.25f), false, topLeft = Offset(s / 2, s / 2), size = androidx.compose.ui.geometry.Size(this.size.width - s, this.size.height - s), style = Stroke(s, cap = StrokeCap.Round))
    }
}

/** Pagination (bullets) — activo Interactive/active ⚠️ (C-A02), además más ancho (16 vs 8). */
@Composable
fun AwPagination(count: Int, current: Int, modifier: Modifier = Modifier) {
    Row(modifier.semantics(mergeDescendants = true) { contentDescription = "Página ${current + 1} de $count" }, horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
        repeat(count) { i ->
            val w by animateDpAsState(if (i == current) AwSpacing.s16 else AwSpacing.s8, tween(AwMotion.FAST, easing = AwMotion.standard), label = "dot")
            Box(Modifier.width(w).height(AwSpacing.s8).background(if (i == current) AwColor.interactiveActive else AwColor.surfaceMuted, CircleShape))
        }
    }
}

/** Progress_stepper — 3 o 4 pasos de 56 × 4. */
@Composable
fun AwStepper(step: Int, modifier: Modifier = Modifier, total: Int = 4) {
    Row(modifier.semantics(mergeDescendants = true) { contentDescription = "Paso $step de $total" }, horizontalArrangement = Arrangement.spacedBy(AwSpacing.s4)) {
        for (i in 1..total) Box(Modifier.width(AwSpacing.s56).height(AwSpacing.s4).background(if (i <= step) AwColor.interactiveActive else AwColor.surfaceMuted, CircleShape))
    }
}
