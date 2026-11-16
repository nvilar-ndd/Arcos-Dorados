import SwiftUI

// MARK: - Tipografía

/// Familia de ArchWay. Registrar Speedee en el Info.plist de la app (UIAppFonts);
/// si no está, SwiftUI cae a la fuente del sistema con el mismo tamaño.
public enum AWFont {
    public static var family = "Speedee"
}

public extension AWTextStyle {
    /// Tope de Dynamic Type equivalente a `maxScale` (Foundations › Typography):
    /// +30 % ≈ `.xxxLarge`, ×2 (Body) ≈ `.accessibility3`.
    var dynamicTypeCap: DynamicTypeSize { maxScale >= 2 ? .accessibility3 : .xxxLarge }
}

private struct AWTextModifier: ViewModifier {
    let style: AWTextStyle
    func body(content: Content) -> some View {
        var font = Font.custom(AWFont.family, size: style.size, relativeTo: style.size >= 24 ? .title : style.size >= 16 ? .body : .footnote)
            .weight(style.weight)
        if style.italic { font = font.italic() }
        return content
            .font(font)
            .tracking(style.tracking)
            .lineSpacing(max(0, style.lineHeight - style.size))
            .dynamicTypeSize(...style.dynamicTypeCap)
    }
}

public extension View {
    /// Aplica un text style de ArchWay: `Text("Hola").awText(AWTypography.labelMedium)`.
    func awText(_ style: AWTextStyle) -> some View { modifier(AWTextModifier(style: style)) }

    /// Effect style de Foundations › Elevation.
    func awShadow(_ s: AWShadow) -> some View {
        shadow(color: Color.black.opacity(s.opacity), radius: s.radius, x: s.x, y: s.y)
    }

    /// Amplía el área táctil a 44 pt sin cambiar el visual (audit C-A04; Apple HIG = 44).
    func awHitArea(_ min: CGFloat = 44) -> some View {
        frame(minWidth: min, minHeight: min).contentShape(Rectangle())
    }

    /// Esquinas con corner smoothing (squircle 60 % de Figma ≈ `.continuous`).
    func awCorner(_ radius: CGFloat) -> some View {
        clipShape(RoundedRectangle(cornerRadius: radius, style: .continuous))
    }

    /// Indicador de foco (teclado externo / Full Keyboard Access): contorno Border/strong 2 pt.
    func awFocusRing(_ focused: Bool, radius: CGFloat) -> some View {
        overlay(
            RoundedRectangle(cornerRadius: radius + 2, style: .continuous)
                .stroke(focused ? AWColor.borderStrong : .clear, lineWidth: 2)
                .padding(-2)
        )
    }
}

// MARK: - Íconos (Icons.xcassets, `aw.<nombre>`, template)

public enum AWIconName: String, CaseIterable, Sendable {
    case chevronUp = "chevron-up", arrowLeft = "arrow-left", close, search, more, hide, checkmark
    case info, success, error, warning, question, home, deals, loyalty, account, favorite, qr, calendar, add, cancel
}

public struct AWIcon: View {
    let name: AWIconName
    let size: CGFloat
    let label: String?
    public init(_ name: AWIconName, size: CGFloat = 24, label: String? = nil) {
        self.name = name; self.size = size; self.label = label
    }
    public var body: some View {
        let image = Image("aw.\(name.rawValue)", bundle: .module)
            .renderingMode(.template)
            .resizable()
            .scaledToFit()
            .frame(width: size, height: size)
        if let label { image.accessibilityLabel(label) } else { image.accessibilityHidden(true) }
    }
}

// MARK: - Shimmer (Skeleton)

public struct AWShimmer: ViewModifier {
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var phase: CGFloat = -1
    public func body(content: Content) -> some View {
        content.overlay(
            GeometryReader { geo in
                if !reduceMotion {
                    LinearGradient(colors: [.clear, AWColor.surfaceDefault.opacity(0.6), .clear], startPoint: .leading, endPoint: .trailing)
                        .frame(width: geo.size.width)
                        .offset(x: phase * geo.size.width)
                        .onAppear { withAnimation(.linear(duration: 1.4).repeatForever(autoreverses: false)) { phase = 1 } }
                }
            }
            .clipped()
        )
        .accessibilityHidden(true)
    }
}

public extension View {
    func awShimmer() -> some View { modifier(AWShimmer()) }
}
