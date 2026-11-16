package com.arcosdorados.archway.core

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.selected
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.style.TextAlign
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

/** List Item — fila 56, padding 16, gap 8. Con `onClick` la fila entera es tocable (Pressed Surface/subtle). */
@Composable
fun AwListItem(
    title: String,
    modifier: Modifier = Modifier,
    subtitle: String? = null,
    divider: Boolean = false,
    enabled: Boolean = true,
    onClick: (() -> Unit)? = null,
    leading: (@Composable () -> Unit)? = null,
    trailing: (@Composable () -> Unit)? = null,
) {
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    Column(modifier.fillMaxWidth()) {
        Row(
            Modifier.fillMaxWidth().heightIn(min = AwSpacing.s56)
                .background(if (pressed) AwColor.surfaceSubtle else AwColor.surfaceDefault)
                .then(if (onClick != null) Modifier.clickable(source, indication = null, enabled = enabled, role = Role.Button, onClick = onClick).awFocusRing(source, RoundedCornerShape(0.dp)) else Modifier)
                .padding(AwSpacing.s16),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        ) {
            leading?.invoke()
            Column(Modifier.weight(1f)) {
                AwText(title, AwTypography.labelMedium, color = if (enabled) AwColor.textPrimary else AwColor.textDisabled)
                subtitle?.let { AwText(it, AwTypography.labelMedium, color = if (enabled) AwColor.textSecondary else AwColor.textDisabled) }
            }
            trailing?.invoke()
        }
        if (divider) AwDivider()
    }
}

enum class AwCardStyle { Elevated, Filled, Outlined }

/**
 * Card (base Core) — padding 16, radio S, ancho mín. 328. Regla de Figma: con `onClick` (chevron) la card
 * entera es tocable y no lleva acciones adentro; con `onMore` / favorito no se toca entera.
 */
@Composable
fun AwCard(
    title: String,
    modifier: Modifier = Modifier,
    subtitle: String? = null,
    tag: String? = null,
    style: AwCardStyle = AwCardStyle.Elevated,
    selected: Boolean = false,
    onClick: (() -> Unit)? = null,
    onMore: (() -> Unit)? = null,
    favorite: Boolean? = null,
    onFavoriteChange: ((Boolean) -> Unit)? = null,
    leading: (@Composable () -> Unit)? = null,
    bottom: (@Composable () -> Unit)? = null,
) {
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    val shape = RoundedCornerShape(AwRadius.s)
    val bg = when (style) {
        AwCardStyle.Filled -> if (pressed) AwColor.surfaceMuted else AwColor.surfaceSubtle
        else -> if (pressed) AwColor.surfaceSubtle else AwColor.surfaceDefault
    }
    val border = when { selected -> AwColor.borderInputActive; style == AwCardStyle.Outlined -> AwColor.borderSoft; else -> Color.Transparent }
    Column(
        modifier.widthIn(min = 328.dp).fillMaxWidth()
            .then(if (style == AwCardStyle.Elevated) Modifier.awShadow(AwElevation.shallowLElev1, shape) else Modifier)
            .clip(shape).background(bg).border(if (selected) 2.dp else 1.dp, border, shape)
            .then(if (onClick != null) Modifier.clickable(source, indication = null, role = Role.Button, onClick = onClick).awFocusRing(source, shape) else Modifier)
            .semantics { if (selected) this.selected = true }
            .padding(AwSpacing.s16),
        verticalArrangement = Arrangement.spacedBy(AwSpacing.s16),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
            leading?.let { Box(Modifier.size(AwSpacing.s80).clip(shape)) { it() } }
            Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(AwSpacing.s4)) {
                tag?.let { AwTag(it, hierarchy = AwTagHierarchy.Secondary) }
                AwText(title, AwTypography.labelMediumBold)
                subtitle?.let { AwText(it, AwTypography.labelSmall, color = AwColor.textSecondary) }
            }
            if (favorite != null && onFavoriteChange != null) {
                AwIconButton(AwIcons.Favorite, if (favorite) "Quitar de favoritos" else "Agregar a favoritos", { onFavoriteChange(!favorite) }, variant = AwButtonVariant.Ghost, selected = favorite)
            }
            when {
                onClick != null -> AwIcon(AwIcons.ChevronUp, rotation = 90f)
                onMore != null -> AwIconButton(AwIcons.More, "Más opciones", onMore, variant = AwButtonVariant.Ghost)
            }
        }
        bottom?.invoke()
    }
}

enum class AwTileType { Tile, CategoryPrimary, CategorySecondary }

/** Tile / Category — Tile 116 × 112 · Category Primary 184 × 104 · Secondary 102 × 120. Radio L. */
@Composable
fun AwTile(label: String, onClick: () -> Unit, modifier: Modifier = Modifier, type: AwTileType = AwTileType.Tile, icon: ImageVector? = null, image: Painter? = null) {
    val source = remember { MutableInteractionSource() }
    val pressed by source.collectIsPressedAsState()
    val scale by animateFloatAsState(if (pressed && type != AwTileType.Tile) 0.97f else 1f, tween(AwMotion.FAST, easing = AwMotion.standard), label = "scale")
    val shape = RoundedCornerShape(AwRadius.l)
    val (w, h) = when (type) { AwTileType.Tile -> 116.dp to 112.dp; AwTileType.CategoryPrimary -> 184.dp to 104.dp; AwTileType.CategorySecondary -> 102.dp to 120.dp }
    Box(
        modifier.size(w, h).scale(scale).clip(shape)
            .background(if (pressed) AwColor.buttonSecondaryBgPressed else AwColor.surfaceDefault)
            .border(0.5.dp, AwColor.borderSubtle, shape)
            .clickable(source, indication = null, role = Role.Button, onClick = onClick)
            .awFocusRing(source, shape)
            .padding(AwSpacing.s8),
    ) {
        when (type) {
            AwTileType.Tile -> Column(Modifier.align(Alignment.Center), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
                Box(Modifier.size(AwSpacing.s48).background(AwColor.surfaceBrand, CircleShape), contentAlignment = Alignment.Center) { icon?.let { AwIcon(it) } }
                AwText(label, AwTypography.labelSmall, maxLines = 2, textAlign = TextAlign.Center)
            }
            AwTileType.CategoryPrimary -> {
                image?.let { Image(it, null, Modifier.size(AwSpacing.s72).align(Alignment.TopEnd), contentScale = ContentScale.Fit) }
                AwText(label, AwTypography.labelMedium, maxLines = 2, modifier = Modifier.align(Alignment.BottomStart).fillMaxWidth(0.6f))
            }
            AwTileType.CategorySecondary -> Column(Modifier.align(Alignment.TopCenter), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(AwSpacing.s4)) {
                image?.let { Image(it, null, Modifier.size(AwSpacing.s64), contentScale = ContentScale.Fit) }
                AwText(label, AwTypography.labelSmall, maxLines = 2, textAlign = TextAlign.Center)
            }
        }
    }
}

