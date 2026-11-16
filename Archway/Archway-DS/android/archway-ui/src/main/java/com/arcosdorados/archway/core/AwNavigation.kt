package com.arcosdorados.archway.core

import androidx.compose.foundation.background
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.selection.selectable
import androidx.compose.foundation.selection.selectableGroup
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.heading
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.dp
import com.arcosdorados.archway.foundation.AwIcon
import com.arcosdorados.archway.foundation.AwText
import com.arcosdorados.archway.foundation.awFocusRing
import com.arcosdorados.archway.foundation.awShadow
import com.arcosdorados.archway.icons.AwIcons
import com.arcosdorados.archway.tokens.AwColor
import com.arcosdorados.archway.tokens.AwElevation
import com.arcosdorados.archway.tokens.AwRadius
import com.arcosdorados.archway.tokens.AwSpacing
import com.arcosdorados.archway.tokens.AwTypography

enum class AwTopBarLeading { Back, Close, None }

/** Top Bar (Android custom) — alto 64, padding 8 / 16, gap 8. Leading Icon Only Ghost, título Heading Small Bold, "Ayuda". */
@Composable
fun AwTopBar(
    modifier: Modifier = Modifier,
    title: String? = null,
    leading: AwTopBarLeading = AwTopBarLeading.Back,
    onLeading: () -> Unit = {},
    helpLabel: String? = null,
    onHelp: () -> Unit = {},
) {
    Row(
        modifier.fillMaxWidth().widthIn(min = 360.dp).height(AwSpacing.s64).background(AwColor.surfaceDefault).padding(horizontal = AwSpacing.s16, vertical = AwSpacing.s8),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
    ) {
        if (leading != AwTopBarLeading.None) {
            AwIconButton(
                if (leading == AwTopBarLeading.Back) AwIcons.ArrowLeft else AwIcons.Close,
                if (leading == AwTopBarLeading.Back) "Volver" else "Cerrar",
                onLeading, variant = AwButtonVariant.Ghost,
            )
        }
        Box(Modifier.weight(1f)) { title?.let { AwText(it, AwTypography.headingSmallBold, maxLines = 1, modifier = Modifier.semantics { heading() }) } }
        helpLabel?.let { AwButton(it, onHelp, variant = AwButtonVariant.Secondary, size = AwButtonSize.Small, shape = AwButtonShape.Round) }
    }
}

data class AwNavItem(val id: String, val label: String, val icon: ImageVector, val selectedIcon: ImageVector = icon, val badge: Int? = null, val dot: Boolean = false)

/**
 * NavBar (Android custom) — contenedor flotante Surface/default, radio XXL, Shallow/M.Elev-2, padding 4.
 * 4 ítems de 56; Selected Surface/inverse + texto on-color Bold. Flota: el contenido deja 16 abajo.
 */
@Composable
fun AwNavBar(items: List<AwNavItem>, selectedId: String, onSelect: (String) -> Unit, modifier: Modifier = Modifier) {
    val shape = RoundedCornerShape(AwRadius.xxl)
    Row(
        modifier.fillMaxWidth().padding(horizontal = AwSpacing.s16).padding(bottom = AwSpacing.s16)
            .awShadow(AwElevation.shallowMElev2, shape).clip(shape).background(AwColor.surfaceDefault).padding(AwSpacing.s4)
            .selectableGroup(),
    ) {
        items.forEach { item ->
            val selected = item.id == selectedId
            val source = remember(item.id) { MutableInteractionSource() }
            val pressed by source.collectIsPressedAsState()
            Column(
                Modifier.weight(1f).height(AwSpacing.s56).clip(shape)
                    .background(when { selected -> AwColor.surfaceInverse; pressed -> AwColor.surfaceSubtle; else -> AwColor.surfaceDefault })
                    .selectable(selected, source, indication = null, role = Role.Tab) { onSelect(item.id) }
                    .awFocusRing(source, shape),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(AwSpacing.s4, Alignment.CenterVertically),
            ) {
                Box {
                    AwIcon(if (selected) item.selectedIcon else item.icon, tint = if (selected) AwColor.iconOnColor else AwColor.textSecondary)
                    if (item.badge != null || item.dot) AwBadge(Modifier.align(Alignment.TopEnd).offset(x = 8.dp, y = (-4).dp), count = item.badge)
                }
                AwText(item.label, if (selected) AwTypography.labelSmallBold else AwTypography.labelSmall, color = if (selected) AwColor.textOnColor else AwColor.textSecondary, maxLines = 1)
            }
        }
    }
}
