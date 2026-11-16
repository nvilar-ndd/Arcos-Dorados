import SwiftUI

/// Checkbox — Figma: Design Resources CORE › Checkbox. Ícono 24 en área 44.
/// Seleccionado: Button/primary-bg + tilde Icon/primary (se reconoce por la forma).
public struct AWCheckbox: View {
    @Binding var isOn: Bool
    let label: String
    let showsLabel: Bool
    @Environment(\.isEnabled) private var isEnabled

    public init(_ label: String, isOn: Binding<Bool>, showsLabel: Bool = true) {
        self.label = label; self._isOn = isOn; self.showsLabel = showsLabel
    }

    public var body: some View {
        Button { isOn.toggle() } label: {
            HStack(spacing: AWSpacing.s8) {
                ZStack {
                    RoundedRectangle(cornerRadius: AWRadius.xs, style: .continuous)
                        .fill(isOn ? (isEnabled ? AWColor.buttonPrimaryBg : AWColor.buttonPrimaryBgDisabled) : Color.clear)
                    RoundedRectangle(cornerRadius: AWRadius.xs, style: .continuous)
                        .strokeBorder(isOn ? Color.clear : (isEnabled ? AWColor.iconPrimary : AWColor.borderSubtle), lineWidth: 2)
                    if isOn { AWIcon(.checkmark, size: 16).foregroundStyle(isEnabled ? AWColor.iconPrimary : AWColor.iconDisabled) }
                }
                .frame(width: 20, height: 20)
                .awHitArea()
                if showsLabel { Text(label).awText(AWTypography.labelMedium).foregroundStyle(isEnabled ? AWColor.textPrimary : AWColor.textDisabled) }
            }
        }
        .buttonStyle(.plain)
        .accessibilityLabel(label)
        .accessibilityAddTraits(isOn ? [.isSelected] : [])
        .accessibilityValue(isOn ? "Marcado" : "Sin marcar")
    }
}

/// Radio — Figma: Design Resources CORE › Radio. Igual que Checkbox, en círculo.
public struct AWRadio<Value: Hashable>: View {
    @Binding var selection: Value
    let value: Value
    let label: String
    @Environment(\.isEnabled) private var isEnabled

    public init(_ label: String, value: Value, selection: Binding<Value>) {
        self.label = label; self.value = value; self._selection = selection
    }

    public var body: some View {
        let on = selection == value
        Button { selection = value } label: {
            HStack(spacing: AWSpacing.s8) {
                ZStack {
                    Circle().fill(on ? (isEnabled ? AWColor.buttonPrimaryBg : AWColor.buttonPrimaryBgDisabled) : Color.clear)
                    Circle().strokeBorder(on ? Color.clear : (isEnabled ? AWColor.iconPrimary : AWColor.borderSubtle), lineWidth: 2)
                    if on { Circle().fill(isEnabled ? AWColor.iconPrimary : AWColor.iconDisabled).frame(width: 8, height: 8) }
                }
                .frame(width: 20, height: 20)
                .awHitArea()
                Text(label).awText(AWTypography.labelMedium).foregroundStyle(isEnabled ? AWColor.textPrimary : AWColor.textDisabled)
            }
        }
        .buttonStyle(.plain)
        .accessibilityAddTraits(on ? [.isSelected] : [])
    }
}

/// Switch — en iOS es el Toggle nativo (Nivel 0, Liquid Glass). Sólo se tiñe con el token.
public struct AWSwitch: View {
    @Binding var isOn: Bool
    let label: String
    let showsLabel: Bool
    public init(_ label: String, isOn: Binding<Bool>, showsLabel: Bool = true) {
        self.label = label; self._isOn = isOn; self.showsLabel = showsLabel
    }
    public var body: some View {
        Toggle(isOn: $isOn) {
            Text(label).awText(AWTypography.labelMedium).foregroundStyle(AWColor.textPrimary)
        }
        .awLabelsHidden(showsLabel == false)
        .tint(AWColor.interactiveActive)
    }
}

private extension View {
    @ViewBuilder func awLabelsHidden(_ hidden: Bool) -> some View {
        if hidden { labelsHidden() } else { self }
    }
}

/// Chip — Figma: Design Resources CORE › Chip. Medium 40 · Small 32, radio píldora.
public struct AWChip: View {
    @Binding var isSelected: Bool
    let label: String
    let icon: AWIconName?
    let isSmall: Bool
    @Environment(\.isEnabled) private var isEnabled

    public init(_ label: String, isSelected: Binding<Bool>, icon: AWIconName? = nil, isSmall: Bool = false) {
        self.label = label; self._isSelected = isSelected; self.icon = icon; self.isSmall = isSmall
    }

    public var body: some View {
        Button { isSelected.toggle() } label: {
            HStack(spacing: AWSpacing.s8) {
                if let icon { AWIcon(icon, size: 16).foregroundStyle(isEnabled ? AWColor.chipIcon : AWColor.chipIconDisabled) }
                Text(label).awText(isSelected ? AWTypography.labelMediumBold : AWTypography.labelMedium)
            }
        }
        .buttonStyle(ChipStyle(isSelected: isSelected, isEnabled: isEnabled, height: isSmall ? AWSpacing.s32 : AWSpacing.s40))
        .accessibilityAddTraits(isSelected ? [.isSelected] : [])
    }

    private struct ChipStyle: ButtonStyle {
        let isSelected: Bool, isEnabled: Bool, height: CGFloat
        func makeBody(configuration: Configuration) -> some View {
            let bg: Color = !isEnabled ? AWColor.chipBgDisabled : isSelected ? AWColor.chipBgSelected : configuration.isPressed ? AWColor.chipBgPressed : AWColor.chipBg
            let stroke: Color = !isEnabled ? AWColor.chipStrokeDisabled : configuration.isPressed ? AWColor.chipStrokePressed : AWColor.chipStroke
            let fg: Color = !isEnabled ? AWColor.chipTextDisabled : isSelected ? AWColor.chipTextSelected : AWColor.chipText
            return configuration.label
                .foregroundStyle(fg)
                .padding(.horizontal, AWSpacing.s16)
                .frame(height: height)
                .background(bg, in: Capsule())
                .overlay(Capsule().strokeBorder(isSelected ? Color.clear : stroke, lineWidth: 1))
                .awHitArea()
        }
    }
}
