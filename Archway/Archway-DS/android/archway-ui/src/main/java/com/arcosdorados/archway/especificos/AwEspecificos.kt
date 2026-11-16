package com.arcosdorados.archway.especificos

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.slideInHorizontally
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.ColorMatrix
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.semantics.ProgressBarRangeInfo
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.heading
import androidx.compose.ui.semantics.paneTitle
import androidx.compose.ui.semantics.progressBarRangeInfo
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.arcosdorados.archway.core.AwButton
import com.arcosdorados.archway.core.AwButtonSize
import com.arcosdorados.archway.core.AwButtonVariant
import com.arcosdorados.archway.core.AwIconButton
import com.arcosdorados.archway.core.AwSwitch
import com.arcosdorados.archway.core.AwTag
import com.arcosdorados.archway.core.AwTagHierarchy
import com.arcosdorados.archway.core.awReduceMotion
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

private val grayscale = ColorFilter.colorMatrix(ColorMatrix().apply { setToSaturation(0f) })

/** Header 💠 (Selection Mode Header) — Surface/brand, radio XXL sólo abajo, botón de modo + QR 48. */
@Composable
fun AwHeader(
    onSelect: () -> Unit,
    onQr: () -> Unit,
    modifier: Modifier = Modifier,
    action: String = "¿Cómo querés recibir tu pedido?",
    location: String? = null,
    storeStatus: String? = null,
    storeStatusError: Boolean = false,
) {
    Row(
        modifier.fillMaxWidth()
            .background(AwColor.surfaceBrand, RoundedCornerShape(bottomStart = AwRadius.xxl, bottomEnd = AwRadius.xxl))
            .padding(start = AwSpacing.s16, end = AwSpacing.s16, top = AwSpacing.s8, bottom = AwSpacing.s16),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
    ) {
        Row(
            Modifier.weight(1f).heightIn(min = AwSpacing.s48).clickable(role = Role.Button, onClick = onSelect),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        ) {
            AwIcon(AwIcons.Home)
            Column(Modifier.weight(1f)) {
                AwText(action, AwTypography.labelMedium)
                location?.let { AwText(it, AwTypography.labelMediumBold, maxLines = 1) }
                storeStatus?.let { AwText(it, AwTypography.labelSmall, color = if (storeStatusError) AwColor.feedbackErrorText else AwColor.textPrimary) }
            }
            AwIcon(AwIcons.ChevronUp, size = 16.dp, rotation = 180f)
        }
        AwIconButton(AwIcons.Qr, "Mostrar mi código QR", onQr, variant = AwButtonVariant.Secondary)
    }
}

/** Gamification Bar 💠 — barra Feedback/info con hitos; card de mensaje Feedback/info-surface. */
@Composable
fun AwGamificationBar(progress: Float, modifier: Modifier = Modifier, milestones: List<Float> = listOf(0.33f, 0.66f, 1f), message: String? = null, expanded: Boolean = true) {
    val p by animateFloatAsState(progress.coerceIn(0f, 1f), tween(AwMotion.SLOW, easing = AwMotion.standard), label = "gam")
    Column(
        modifier.fillMaxWidth().background(AwColor.surfaceDefault, RoundedCornerShape(topStart = AwRadius.l, topEnd = AwRadius.l)).padding(AwSpacing.s16),
        verticalArrangement = Arrangement.spacedBy(AwSpacing.s16),
    ) {
        BoxWithConstraints(
            Modifier.fillMaxWidth().height(AwSpacing.s24)
                .semantics { contentDescription = "Avance hacia el envío gratis"; progressBarRangeInfo = ProgressBarRangeInfo(progress, 0f..1f) },
        ) {
            Box(Modifier.fillMaxWidth().height(AwSpacing.s8).align(Alignment.CenterStart).background(AwColor.surfaceSubtle, CircleShape))
            Box(Modifier.fillMaxWidth(p).height(AwSpacing.s8).align(Alignment.CenterStart).background(AwColor.feedbackInfo, CircleShape))
            milestones.forEach { m ->
                val done = progress >= m
                Box(
                    Modifier.offset(x = maxWidth * m - AwSpacing.s24).size(AwSpacing.s24)
                        .background(if (done) AwColor.feedbackInfo else AwColor.surfaceStrong, CircleShape),
                    contentAlignment = Alignment.Center,
                ) { AwIcon(if (done) AwIcons.Checkmark else AwIcons.Deals, size = 16.dp, tint = if (done) AwColor.iconOnColor else AwColor.iconDisabled) }
            }
        }
        if (expanded && message != null) {
            AwText(message, AwTypography.labelSmallBold, modifier = Modifier.fillMaxWidth().background(AwColor.feedbackInfoSurface, RoundedCornerShape(AwRadius.m)).padding(AwSpacing.s16))
        }
    }
}

/** Loyalty Home Card 💠 — contador de puntos (~1 s ease-out), barra Interactive/active, candado al 100 %. */
@Composable
fun AwLoyaltyCard(points: Int, goal: Int, modifier: Modifier = Modifier, title: String = "Mis puntos", content: String? = null) {
    val reduce = awReduceMotion()
    val counter = remember { Animatable(0f) }
    LaunchedEffect(points) { if (reduce) counter.snapTo(points.toFloat()) else counter.animateTo(points.toFloat(), tween(1000, easing = AwMotion.entrance)) }
    val pct = (points.toFloat() / goal.coerceAtLeast(1)).coerceIn(0f, 1f)
    val bar by animateFloatAsState(pct, tween(AwMotion.EXPRESSIVE, easing = AwMotion.entrance), label = "loyalty")
    Column(
        modifier.fillMaxWidth().clip(RoundedCornerShape(AwRadius.l)).background(AwColor.surfaceBrand).padding(AwSpacing.s16),
        verticalArrangement = Arrangement.spacedBy(AwSpacing.s16),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            AwText(title, AwTypography.headingSmallBold, modifier = Modifier.weight(1f).semantics { heading() })
            AwIcon(AwIcons.Loyalty)
        }
        AwText("${counter.value.toInt()}", AwTypography.displayMediumBold, modifier = Modifier.clearAndSetSemantics { contentDescription = "$points puntos" })
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
            Box(Modifier.weight(1f).height(AwSpacing.s8).background(AwColor.surfaceDefault, CircleShape)) {
                Box(Modifier.fillMaxHeight().fillMaxWidth(bar).background(AwColor.interactiveActive, CircleShape))
            }
            Box(Modifier.size(AwSpacing.s32).background(if (pct >= 1f) AwColor.surfaceInverse else AwColor.surfaceDefault, CircleShape), contentAlignment = Alignment.Center) {
                AwIcon(if (pct >= 1f) AwIcons.Checkmark else AwIcons.Cancel, size = 16.dp, tint = if (pct >= 1f) AwColor.iconOnColor else AwColor.iconPrimary)
            }
        }
        AnimatedVisibility(pct >= 1f, enter = slideInHorizontally(tween(400, delayMillis = 200, easing = AwMotion.entrance)) { it } + fadeIn()) {
            AwText("¡Premio desbloqueado!", AwTypography.labelSmallBold)
        }
        if (pct < 1f) content?.let { AwText(it, AwTypography.textBodySmall) }
    }
}

/** Card / Setting 💠 — 380 × 68, Surface/default + Border/soft, radio S, con Switch. */
@Composable
fun AwSettingCard(headline: String, checked: Boolean, onCheckedChange: (Boolean) -> Unit, modifier: Modifier = Modifier, supporting: String? = null, enabled: Boolean = true) {
    val shape = RoundedCornerShape(AwRadius.s)
    Row(
        modifier.fillMaxWidth().heightIn(min = 68.dp).background(AwColor.surfaceDefault, shape).border(1.dp, AwColor.borderSoft, shape)
            .padding(horizontal = AwSpacing.s16, vertical = AwSpacing.s8),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s16),
    ) {
        Column(Modifier.weight(1f)) {
            AwText(headline, AwTypography.labelMediumBold, color = if (enabled) AwColor.textPrimary else AwColor.textDisabled)
            supporting?.let { AwText(it, AwTypography.textBodySmall, color = AwColor.textSecondary) }
        }
        AwSwitch(checked, onCheckedChange, label = headline, enabled = enabled)
    }
}

/** Card / Voucher 💠 — troquel + franja de acción Feature/missions-surface. */
@Composable
fun AwVoucherCard(headline: String, onClick: () -> Unit, modifier: Modifier = Modifier, subhead: String? = null, support: List<String> = emptyList(), tag: String? = null, image: Painter? = null, actionLabel: String = "Ver cupón") {
    val shape = RoundedCornerShape(AwRadius.s)
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    Column(
        modifier.widthIn(min = 328.dp).fillMaxWidth().awShadow(AwElevation.shallowLElev1, shape).clip(shape)
            .background(if (pressed) AwColor.surfaceSubtle else AwColor.surfaceDefault)
            .clickable(source, indication = null, role = Role.Button, onClick = onClick).awFocusRing(source, shape),
    ) {
        Row(Modifier.padding(AwSpacing.s16), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(AwSpacing.s16)) {
            if (image != null) Image(image, null, Modifier.size(AwSpacing.s80).clip(RoundedCornerShape(AwRadius.s)).background(AwColor.surfaceSubtle), contentScale = ContentScale.Fit)
            else Box(Modifier.size(AwSpacing.s56).background(AwColor.surfaceBrand, CircleShape), contentAlignment = Alignment.Center) { AwIcon(AwIcons.Deals) }
            Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(AwSpacing.s4)) {
                tag?.let { AwTag(it, hierarchy = AwTagHierarchy.Secondary) }
                subhead?.let { AwText(it, AwTypography.labelSmall, color = AwColor.textSecondary) }
                AwText(headline, AwTypography.labelMediumBold)
                support.take(2).forEach { AwText(it, AwTypography.textBodySmall, color = AwColor.textSecondary) }
            }
        }
        Canvas(Modifier.fillMaxWidth().height(1.dp).clearAndSetSemantics { }) {
            drawLine(AwColor.borderSoft, Offset(0f, 0f), Offset(size.width, 0f), strokeWidth = 1.dp.toPx(), pathEffect = PathEffect.dashPathEffect(floatArrayOf(8f, 8f)))
        }
        Row(Modifier.fillMaxWidth().background(AwColor.featureMissionsSurface).padding(horizontal = AwSpacing.s16, vertical = AwSpacing.s8), verticalAlignment = Alignment.CenterVertically) {
            AwText(actionLabel, AwTypography.labelMediumBold, modifier = Modifier.weight(1f))
            AwIcon(AwIcons.ChevronUp, size = 16.dp, rotation = 90f)
        }
    }
}

/** Product Card 💠 — Small 144 / Big 224. Descuento Feedback/error-text (C-T02). Disabled por tokens (C-A05). */
@Composable
fun AwProductCard(name: String, price: String, onClick: () -> Unit, modifier: Modifier = Modifier, oldPrice: String? = null, points: String? = null, image: Painter? = null, big: Boolean = false, enabled: Boolean = true) {
    val source = remember { MutableInteractionSource() }
    Column(
        modifier.width(if (big) 224.dp else 144.dp).clickable(source, indication = null, enabled = enabled, role = Role.Button, onClick = onClick)
            .awFocusRing(source, RoundedCornerShape(AwRadius.s)).semantics(mergeDescendants = true) { },
        verticalArrangement = Arrangement.spacedBy(AwSpacing.s16),
    ) {
        Box(Modifier.fillMaxWidth().height(128.dp).clip(RoundedCornerShape(AwRadius.s)).background(AwColor.surfaceSubtle)) {
            image?.let { Image(it, null, Modifier.fillMaxSize(), contentScale = ContentScale.Fit, colorFilter = if (enabled) null else grayscale) }
            points?.let {
                Row(
                    Modifier.padding(AwSpacing.s8).background(AwColor.surfaceBrand, RoundedCornerShape(AwRadius.xs)).padding(horizontal = AwSpacing.s4),
                    verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(AwSpacing.s4),
                ) { AwIcon(AwIcons.Loyalty, size = 16.dp, tint = AwColor.iconGold); AwText(it, AwTypography.labelSmall) }
            }
        }
        Column(verticalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
            AwText(name, AwTypography.textBodyMedium, maxLines = 2, color = if (enabled) AwColor.textPrimary else AwColor.textDisabled)
            Row(horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8), verticalAlignment = Alignment.Bottom) {
                AwText(price, AwTypography.headingSmallBold, color = when { !enabled -> AwColor.textDisabled; oldPrice != null -> AwColor.feedbackErrorText; else -> AwColor.textPrimary })
                oldPrice?.let { AwText(it, AwTypography.labelSmall, color = AwColor.textSecondary, strikethrough = true, modifier = Modifier.semantics { contentDescription = "Antes $it" }) }
            }
        }
    }
}

/** Banner 💠 — imagen 380 × 294, radio S. `alt` obligatorio. */
@Composable
fun AwBanner(image: Painter, alt: String, modifier: Modifier = Modifier) {
    Image(image, alt, modifier.widthIn(max = 380.dp).fillMaxWidth().aspectRatio(380f / 294f).clip(RoundedCornerShape(AwRadius.s)), contentScale = ContentScale.Crop)
}

/** Dialog / Pop-up 💠 — 328 de ancho, radio L, título Heading Large Bold, Primary + Secondary, cerrar. */
@Composable
fun AwDialog(
    onDismiss: () -> Unit,
    primaryLabel: String,
    onPrimary: () -> Unit,
    title: String? = null,
    image: Painter? = null,
    fullBleed: Boolean = false,
    secondaryLabel: String? = null,
    onSecondary: (() -> Unit)? = null,
    closable: Boolean = true,
) {
    Dialog(onDismissRequest = onDismiss, properties = DialogProperties(usePlatformDefaultWidth = false)) {
        Box(Modifier.width(328.dp).awShadow(AwElevation.deepHElev3, RoundedCornerShape(AwRadius.l)).clip(RoundedCornerShape(AwRadius.l)).background(AwColor.surfaceDefault).semantics { title?.let { paneTitle = it } }) {
            Column(Modifier.padding(if (fullBleed) 0.dp else AwSpacing.s16), verticalArrangement = Arrangement.spacedBy(AwSpacing.s16)) {
                image?.let { Image(it, null, Modifier.fillMaxWidth().aspectRatio(if (fullBleed) 328f / 240f else 1f).clip(RoundedCornerShape(if (fullBleed) 0.dp else AwRadius.m)), contentScale = ContentScale.Crop) }
                Column(Modifier.padding(start = if (fullBleed) AwSpacing.s16 else 0.dp, end = if (fullBleed) AwSpacing.s16 else 0.dp, bottom = if (fullBleed) AwSpacing.s16 else 0.dp), verticalArrangement = Arrangement.spacedBy(AwSpacing.s16)) {
                    title?.let { AwText(it, AwTypography.headingLargeBold, modifier = Modifier.semantics { heading() }) }
                    AwButton(primaryLabel, onPrimary, Modifier.fillMaxWidth())
                    if (secondaryLabel != null && onSecondary != null) AwButton(secondaryLabel, onSecondary, Modifier.fillMaxWidth(), variant = AwButtonVariant.Secondary)
                }
            }
            if (closable) AwIconButton(AwIcons.Close, "Cerrar", onDismiss, Modifier.align(Alignment.TopEnd).padding(AwSpacing.s8), variant = AwButtonVariant.Secondary, size = AwButtonSize.Small)
        }
    }
}

/** Tile Misiones 💠 — recompensa sin interacción, 116 × 112. */
@Composable
fun AwMissionTile(modifier: Modifier = Modifier, label: String? = null, image: Painter? = null) {
    val shape = RoundedCornerShape(AwRadius.l)
    Column(
        modifier.size(116.dp, 112.dp).background(AwColor.surfaceDefault, shape).border(0.5.dp, AwColor.borderSubtle, shape).padding(AwSpacing.s8).semantics(mergeDescendants = true) { },
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(AwSpacing.s8, Alignment.CenterVertically),
    ) {
        Box(Modifier.size(AwSpacing.s48).clip(CircleShape).background(AwColor.featureMissionsSurface), contentAlignment = Alignment.Center) {
            if (image != null) Image(image, null, Modifier.fillMaxSize(), contentScale = ContentScale.Fit) else AwIcon(AwIcons.Deals)
        }
        label?.let { AwText(it, AwTypography.labelSmall, maxLines = 2, textAlign = TextAlign.Center) }
    }
}

enum class AwPinStatus { Default, Incomplete, Expired }

/** Pin 💠 (Misiones) — 56 × 60. Tokens propuestos para los hex sueltos de Figma (C-T02). */
@Composable
fun AwPin(name: String, modifier: Modifier = Modifier, image: Painter? = null, status: AwPinStatus = AwPinStatus.Default) {
    val state = when (status) { AwPinStatus.Default -> "obtenido"; AwPinStatus.Incomplete -> "sin completar"; AwPinStatus.Expired -> "vencido" }
    Box(modifier.size(56.dp, 60.dp).clearAndSetSemantics { contentDescription = "Pin $name, $state" }) {
        Box(
            Modifier.size(AwSpacing.s56).align(Alignment.TopCenter)
                .then(if (status == AwPinStatus.Default) Modifier.awShadow(AwElevation.shallowLElev1, CircleShape) else Modifier)
                .clip(CircleShape).background(AwColor.surfaceSubtle)
                .border(2.dp, if (status == AwPinStatus.Default) AwColor.surfaceDefault else AwColor.borderSubtle, CircleShape),
        ) { image?.let { Image(it, null, Modifier.fillMaxSize(), contentScale = ContentScale.Fit, colorFilter = if (status == AwPinStatus.Default) null else grayscale) } }
        if (status == AwPinStatus.Expired) {
            AwText("Vencido", AwTypography.labelSmall, color = AwColor.textOnColor, modifier = Modifier.align(Alignment.BottomCenter).background(AwColor.surfaceInverse, RoundedCornerShape(AwRadius.xs)).padding(horizontal = AwSpacing.s4))
        }
    }
}

enum class AwBenefitsProgressType { Beneficios, Misiones }

/** ProgressBar_beneficios (272 × 4) y Progress bar misiones (332 × 16) 💠 — tokens equivalentes (C-T01, C-T02). */
@Composable
fun AwBenefitsProgress(value: Float, label: String, modifier: Modifier = Modifier, type: AwBenefitsProgressType = AwBenefitsProgressType.Beneficios) {
    val v by animateFloatAsState(value.coerceIn(0f, 1f), tween(AwMotion.SLOW, easing = AwMotion.standard), label = "benefits")
    val beneficios = type == AwBenefitsProgressType.Beneficios
    Box(
        modifier.widthIn(max = if (beneficios) 272.dp else 332.dp).fillMaxWidth().height(if (beneficios) AwSpacing.s4 else AwSpacing.s16)
            .clip(CircleShape).background(if (beneficios) AwColor.surfaceMuted else AwColor.featureMissionsSurface)
            .semantics { contentDescription = label; progressBarRangeInfo = ProgressBarRangeInfo(value.coerceIn(0f, 1f), 0f..1f) },
    ) { Box(Modifier.fillMaxHeight().fillMaxWidth(v).background(if (beneficios) AwColor.interactiveActive else AwColor.featureMissions, CircleShape)) }
}
