package com.arcosdorados.archway.core

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsFocusedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.sizeIn
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.error
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import com.arcosdorados.archway.foundation.AwIcon
import com.arcosdorados.archway.foundation.AwText
import com.arcosdorados.archway.foundation.toTextStyle
import com.arcosdorados.archway.icons.AwIcons
import com.arcosdorados.archway.tokens.AwColor
import com.arcosdorados.archway.tokens.AwRadius
import com.arcosdorados.archway.tokens.AwSpacing
import com.arcosdorados.archway.tokens.AwTypography

enum class AwTextFieldKind { Text, Password, Multiline }

/**
 * Input — Text Field · Password · Text Area. Figma: Design Resources CORE › Imput_*.
 * Label (Label Small) + campo (32, padding 8/16, radio M, borde 1) + hint. Bordes: Border/soft ·
 * foco Border/strong · completo Border/input-active · error Feedback/error · disabled Border/subtle.
 */
@Composable
fun AwTextField(
    value: String,
    onValueChange: (String) -> Unit,
    label: String,
    modifier: Modifier = Modifier,
    placeholder: String = "",
    kind: AwTextFieldKind = AwTextFieldKind.Text,
    maxLength: Int? = null,
    hint: String? = null,
    error: String? = null,
    enabled: Boolean = true,
    keyboardType: KeyboardType = KeyboardType.Text,
) {
    val source = remember { MutableInteractionSource() }
    val focused by source.collectIsFocusedAsState()
    var revealed by remember { mutableStateOf(false) }
    val border = when {
        !enabled -> AwColor.borderSubtle
        error != null -> AwColor.feedbackError
        focused -> AwColor.borderStrong
        value.isNotEmpty() -> AwColor.borderInputActive
        else -> AwColor.borderSoft
    }
    val shape = RoundedCornerShape(AwRadius.m)
    val multiline = kind == AwTextFieldKind.Multiline

    Column(modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(AwSpacing.s4)) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            AwText(label, AwTypography.labelSmall, color = if (enabled) AwColor.textPrimary else AwColor.textDisabled)
            if (multiline && maxLength != null) AwText("${value.length}/$maxLength", AwTypography.labelSmall, color = AwColor.textSecondary)
        }
        Row(
            Modifier
                .fillMaxWidth()
                .heightIn(min = if (multiline) AwSpacing.s72 else AwSpacing.s32)
                .background(if (enabled) AwColor.surfaceDefault else AwColor.surfaceSubtle, shape)
                .border(1.dp, border, shape)
                .padding(horizontal = AwSpacing.s16, vertical = AwSpacing.s8),
            verticalAlignment = if (multiline) Alignment.Top else Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        ) {
            Box(Modifier.weight(1f)) {
                if (value.isEmpty()) AwText(placeholder, AwTypography.labelMedium, color = AwColor.textSecondary, modifier = Modifier.clearAndSetSemantics { })
                BasicTextField(
                    value = value,
                    onValueChange = { new -> onValueChange(if (maxLength != null) new.take(maxLength) else new) },
                    enabled = enabled,
                    singleLine = !multiline,
                    minLines = if (multiline) 3 else 1,
                    textStyle = AwTypography.labelMedium.toTextStyle(if (enabled) AwColor.textPrimary else AwColor.textDisabled),
                    cursorBrush = SolidColor(AwColor.textPrimary),
                    interactionSource = source,
                    visualTransformation = if (kind == AwTextFieldKind.Password && !revealed) PasswordVisualTransformation() else VisualTransformation.None,
                    keyboardOptions = KeyboardOptions(keyboardType = if (kind == AwTextFieldKind.Password) KeyboardType.Password else keyboardType),
                    modifier = Modifier.fillMaxWidth().semantics {
                        contentDescription = label
                        error?.let { this.error(it) }
                    },
                )
            }
            if (kind == AwTextFieldKind.Password) {
                Box(
                    Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp).padding(0.dp)
                        .clickable(role = Role.Button, onClickLabel = null) { revealed = !revealed }
                        .semantics { contentDescription = if (revealed) "Ocultar contraseña" else "Mostrar contraseña" },
                    contentAlignment = Alignment.Center,
                ) { AwIcon(AwIcons.Hide, size = 16.dp) }
            } else if (multiline && value.isNotEmpty() && enabled) {
                Box(
                    Modifier.clickable(role = Role.Button) { onValueChange("") }.semantics { contentDescription = "Borrar texto" },
                ) { AwIcon(AwIcons.Cancel, size = 16.dp) }
            }
        }
        val message = error ?: hint
        if (message != null) {
            Row(horizontalArrangement = Arrangement.spacedBy(AwSpacing.s4), verticalAlignment = Alignment.CenterVertically) {
                if (error != null) AwIcon(AwIcons.Error, size = 16.dp, tint = AwColor.textError)
                AwText(message, AwTypography.labelSmall, color = if (error != null) AwColor.textError else AwColor.textSecondary)
            }
        }
    }
}

data class AwSelectOption(val value: String, val label: String)

/**
 * Input: Select — Figma: Imput_Select. Campo de 32 con chevron; al tocarlo la pantalla abre la lista
 * (bottom sheet / menú) y devuelve la opción con `onOpen`.
 */
@Composable
fun AwSelect(
    label: String,
    selected: AwSelectOption?,
    onOpen: () -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String = "Elegí una opción",
    hint: String? = null,
) {
    val shape = RoundedCornerShape(AwRadius.m)
    Column(modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(AwSpacing.s4)) {
        AwText(label, AwTypography.labelSmall)
        Row(
            Modifier
                .fillMaxWidth()
                .heightIn(min = 48.dp)
                .clickable(role = Role.DropdownList, onClick = onOpen)
                .semantics { contentDescription = "$label, ${selected?.label ?: placeholder}" },
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Row(
                Modifier.fillMaxWidth().heightIn(min = AwSpacing.s32)
                    .border(1.dp, if (selected == null) AwColor.borderSoft else AwColor.borderInputActive, shape)
                    .padding(horizontal = AwSpacing.s16),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                AwText(selected?.label ?: placeholder, AwTypography.labelMedium, color = if (selected == null) AwColor.textSecondary else AwColor.textPrimary, modifier = Modifier.weight(1f))
                AwIcon(AwIcons.ChevronUp, size = 16.dp, rotation = 180f)
            }
        }
        hint?.let { AwText(it, AwTypography.labelSmall, color = AwColor.textSecondary) }
    }
}

/** Input: PinCode — 4 o 6 casillas 48 × 56 (Heading Large). Un único campo para TalkBack y autofill de SMS. */
@Composable
fun AwPinCode(code: String, onCodeChange: (String) -> Unit, modifier: Modifier = Modifier, digits: Int = 6, error: String? = null) {
    val source = remember { MutableInteractionSource() }
    val focused by source.collectIsFocusedAsState()
    val shape = RoundedCornerShape(AwRadius.m)
    Column(modifier, verticalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
        BasicTextField(
            value = code,
            onValueChange = { onCodeChange(it.filter(Char::isDigit).take(digits)) },
            interactionSource = source,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.NumberPassword),
            textStyle = AwTypography.headingLarge.toTextStyle(Color.Transparent),
            cursorBrush = SolidColor(Color.Transparent),
            modifier = Modifier.semantics { contentDescription = "Código de $digits dígitos"; error?.let { this.error(it) } },
            decorationBox = { inner ->
                Box {
                    Box(Modifier.alpha(0f)) { inner() }
                    Row(horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8)) {
                        repeat(digits) { i ->
                            val active = focused && i == minOf(code.length, digits - 1)
                            Box(
                                Modifier.width(AwSpacing.s48).heightIn(min = AwSpacing.s56)
                                    .background(AwColor.surfaceDefault, shape)
                                    .border(1.dp, if (error != null) AwColor.feedbackError else if (active) AwColor.borderStrong else AwColor.borderSoft, shape),
                                contentAlignment = Alignment.Center,
                            ) { AwText(code.getOrNull(i)?.toString() ?: "", AwTypography.headingLarge) }
                        }
                    }
                }
            },
        )
        error?.let { AwText(it, AwTypography.labelSmall, color = AwColor.textError) }
    }
}

/** Search / Android — píldora de 36 (área 48), lupa a la izquierda, borrar a la derecha. */
@Composable
fun AwSearch(query: String, onQueryChange: (String) -> Unit, modifier: Modifier = Modifier, placeholder: String = "Buscar", label: String = "Buscar productos") {
    val source = remember { MutableInteractionSource() }
    val focused by source.collectIsFocusedAsState()
    val shape = RoundedCornerShape(AwRadius.xxxl)
    Row(
        modifier.fillMaxWidth().heightIn(min = 48.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Row(
            Modifier.fillMaxWidth().heightIn(min = 36.dp)
                .background(AwColor.surfaceDefault, shape)
                .border(1.dp, if (focused) AwColor.borderStrong else if (query.isNotEmpty()) AwColor.borderInputActive else AwColor.borderSoft, shape)
                .padding(horizontal = AwSpacing.s16),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(AwSpacing.s8),
        ) {
            AwIcon(AwIcons.Search, size = 16.dp)
            Box(Modifier.weight(1f)) {
                if (query.isEmpty()) AwText(placeholder, AwTypography.labelMedium, color = AwColor.textSecondary, modifier = Modifier.clearAndSetSemantics { })
                BasicTextField(
                    value = query, onValueChange = onQueryChange, singleLine = true, interactionSource = source,
                    textStyle = AwTypography.labelMedium.toTextStyle(), cursorBrush = SolidColor(AwColor.textPrimary),
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Text, imeAction = androidx.compose.ui.text.input.ImeAction.Search),
                    modifier = Modifier.fillMaxWidth().semantics { contentDescription = label },
                )
            }
            if (query.isNotEmpty()) {
                Box(Modifier.size(24.dp).clickable(role = Role.Button) { onQueryChange("") }.semantics { contentDescription = "Borrar búsqueda" }, contentAlignment = Alignment.Center) {
                    AwIcon(AwIcons.Cancel, size = 16.dp)
                }
            }
        }
    }
}
