import SwiftUI

/// Button — Figma: Design Resources CORE › Button.
/// Variantes Primary · Secondary · Ghost; tamaños Large 56 · Medium 48 · Small 32 · XS 24 (área 44).
/// Pressed / Focused / Disabled con tokens (sin opacidad). Loading: barra + "Procesando" para VoiceOver.
public struct AWButton: View {
    public enum Variant: Sendable { case primary, secondary, ghost }
    public enum Size: Sendable { case large, medium, small, xs }
    public enum Shape: Sendable { case square, round }

    let label: String
    let variant: Variant
    let size: Size
    let shape: Shape
    let iconLeading: AWIconName?
    let iconTrailing: AWIconName?
    let isLoading: Bool
    let action: () -> Void
    @Environment(\.isEnabled) private var isEnabled

    public init(_ label: String, variant: Variant = .primary, size: Size = .large, shape: Shape = .square,
                iconLeading: AWIconName? = nil, iconTrailing: AWIconName? = nil, isLoading: Bool = false,
                action: @escaping () -> Void) {
        self.label = label; self.variant = variant; self.size = size; self.shape = shape
        self.iconLeading = iconLeading; self.iconTrailing = iconTrailing; self.isLoading = isLoading; self.action = action
    }

    public var body: some View {
        Button(action: action) {
            HStack(spacing: AWSpacing.s8) {
                if let iconLeading { AWIcon(iconLeading, size: 16) }
                Text(label).awText(textStyle).lineLimit(1)
                if let iconTrailing { AWIcon(iconTrailing, size: 16) }
            }
        }
        .buttonStyle(AWButtonStyle(variant: variant, height: height, radius: radius, isEnabled: isEnabled, isLoading: isLoading))
        .disabled(isLoading)
        .accessibilityValue(isLoading ? Text("Procesando") : Text(""))
    }

    private var height: CGFloat { switch size { case .large: AWSpacing.s56; case .medium: AWSpacing.s48; case .small: AWSpacing.s32; case .xs: AWSpacing.s24 } }
    private var radius: CGFloat {
        if shape == .round { return AWRadius.xxl }
        return size == .large || size == .medium ? AWRadius.l : AWRadius.m
    }
    private var textStyle: AWTextStyle {
        switch size { case .large: AWTypography.labelLarge; case .medium: AWTypography.labelMedium; default: AWTypography.labelSmall }
    }
}

struct AWButtonStyle: ButtonStyle {
    let variant: AWButton.Variant
    let height: CGFloat
    let radius: CGFloat
    let isEnabled: Bool
    let isLoading: Bool

    func makeBody(configuration: Configuration) -> some View {
        let pressed = configuration.isPressed
        return configuration.label
            .foregroundStyle(isEnabled ? AWColor.buttonText : AWColor.buttonTextDisabled)
            .padding(.horizontal, AWSpacing.s16)
            .frame(height: height)
            .frame(minWidth: height)
            .background(background(pressed))
            .overlay(alignment: .bottomLeading) {
                if isLoading { LoadingBar() }
            }
            .awCorner(radius)
            .overlay(
                RoundedRectangle(cornerRadius: radius, style: .continuous)
                    .strokeBorder(variant == .secondary ? stroke(pressed) : .clear, lineWidth: 0.5)
            )
            .awHitArea()
            .animation(AWMotion.standard, value: pressed)
    }

    private func background(_ pressed: Bool) -> Color {
        guard isEnabled else {
            switch variant { case .primary: return AWColor.buttonPrimaryBgDisabled; case .secondary: return AWColor.buttonSecondaryBgDisabled; case .ghost: return AWColor.buttonGhostBg }
        }
        switch variant {
        case .primary: return pressed ? AWColor.buttonPrimaryBgPressed : AWColor.buttonPrimaryBg
        case .secondary: return pressed ? AWColor.buttonSecondaryBgPressed : AWColor.buttonSecondaryBg
        case .ghost: return pressed ? AWColor.buttonGhostBgPressed : AWColor.buttonGhostBg
        }
    }
    private func stroke(_ pressed: Bool) -> Color {
        isEnabled ? (pressed ? AWColor.buttonSecondaryStrokePressed : AWColor.buttonSecondaryStroke) : AWColor.buttonSecondaryStrokeDisabled
    }
}

private struct LoadingBar: View {
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var progress: CGFloat = 0
    var body: some View {
        GeometryReader { geo in
            Rectangle().fill(AWColor.buttonPrimaryBgPressed)
                .frame(width: geo.size.width * progress)
        }
        .onAppear { withAnimation(reduceMotion ? nil : .easeOut(duration: 2)) { progress = 0.9 } }
        .accessibilityHidden(true)
    }
}

/// Icon Only — Figma: Design Resources CORE › Icon Only. Medium 48 · Small 32 · XS 24 (área 44).
/// El `label` es obligatorio: es lo que lee VoiceOver.
public struct AWIconButton: View {
    let icon: AWIconName
    let label: String
    let variant: AWButton.Variant
    let size: AWButton.Size
    let isPressed: Bool?
    let action: () -> Void
    @Environment(\.isEnabled) private var isEnabled

    public init(_ icon: AWIconName, label: String, variant: AWButton.Variant = .primary, size: AWButton.Size = .medium,
                isPressed: Bool? = nil, action: @escaping () -> Void) {
        self.icon = icon; self.label = label; self.variant = variant; self.size = size; self.isPressed = isPressed; self.action = action
    }

    public var body: some View {
        let side: CGFloat = size == .medium || size == .large ? AWSpacing.s48 : size == .small ? AWSpacing.s32 : AWSpacing.s24
        Button(action: action) { AWIcon(icon, size: side >= 48 ? 24 : 16) }
            .buttonStyle(AWIconButtonStyle(variant: variant, side: side, isEnabled: isEnabled))
            .accessibilityLabel(label)
            .accessibilityAddTraits(isPressed == true ? .isSelected : [])
    }
}

struct AWIconButtonStyle: ButtonStyle {
    let variant: AWButton.Variant
    let side: CGFloat
    let isEnabled: Bool
    func makeBody(configuration: Configuration) -> some View {
        AWButtonStyle(variant: variant, height: side, radius: AWRadius.xxxl, isEnabled: isEnabled, isLoading: false)
            .makeBody(configuration: configuration)
            .frame(width: side)
    }
}

/// FAB — Figma: Design Resources CORE › FAB. Redondo, Shallow/M.Elev-2; Extended con label.
public struct AWFab: View {
    let icon: AWIconName
    let label: String
    let isExtended: Bool
    let action: () -> Void
    public init(_ icon: AWIconName, label: String, isExtended: Bool = false, action: @escaping () -> Void) {
        self.icon = icon; self.label = label; self.isExtended = isExtended; self.action = action
    }
    public var body: some View {
        Button(action: action) {
            HStack(spacing: AWSpacing.s8) {
                AWIcon(icon)
                if isExtended { Text(label).awText(AWTypography.labelLarge) }
            }
            .foregroundStyle(AWColor.buttonText)
            .padding(.horizontal, AWSpacing.s16)
            .frame(minWidth: AWSpacing.s56, minHeight: AWSpacing.s56)
            .background(AWColor.buttonPrimaryBg, in: RoundedRectangle(cornerRadius: AWRadius.xxl, style: .continuous))
            .awShadow(AWElevation.shallowMElev2)
        }
        .buttonStyle(.plain)
        .accessibilityLabel(label)
    }
}
