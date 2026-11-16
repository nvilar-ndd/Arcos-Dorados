import SwiftUI

/// Tag — Figma: Design Resources CORE › Tag. Alto 24, radio XS, Label Small Bold.
public struct AWTag: View {
    public enum Hierarchy: Sendable { case primary, secondary, tertiary }
    let label: String
    let hierarchy: Hierarchy
    let icon: AWIconName?
    public init(_ label: String, hierarchy: Hierarchy = .primary, icon: AWIconName? = nil) {
        self.label = label; self.hierarchy = hierarchy; self.icon = icon
    }
    public var body: some View {
        HStack(spacing: AWSpacing.s4) {
            if let icon { AWIcon(icon, size: 16) }
            Text(label).awText(AWTypography.labelSmallBold).lineLimit(1)
        }
        .foregroundStyle(hierarchy == .primary ? AWColor.textOnColor : AWColor.textPrimary)
        .padding(.horizontal, AWSpacing.s8)
        .frame(height: AWSpacing.s24)
        .background(hierarchy == .primary ? AWColor.surfaceInverse : hierarchy == .secondary ? AWColor.surfaceMuted : Color.clear)
        .awCorner(AWRadius.xs)
    }
}

/// Badge — Figma: Design Resources CORE › Badge. Large (número, 16) o Small (punto 8). Highlight/new.
/// Decorativo: el conteo se anuncia en el elemento que lo contiene.
public struct AWBadge: View {
    let count: Int?
    let max: Int
    public init(count: Int? = nil, max: Int = 99) { self.count = count; self.max = max }
    public var body: some View {
        Group {
            if let count {
                Text(count > max ? "\(max)+" : "\(count)")
                    .awText(AWTypography.labelSmallBold)
                    .foregroundStyle(AWColor.textOnColor)
                    .padding(.horizontal, AWSpacing.s4)
                    .frame(minWidth: 16, minHeight: 16)
                    .background(AWColor.highlightNew, in: Capsule())
            } else {
                Circle().fill(AWColor.highlightNew).frame(width: AWSpacing.s8, height: AWSpacing.s8)
            }
        }
        .accessibilityHidden(true)
    }
}

/// Divider — Figma: Design Resources CORE › Divider. 1 pt, Border/soft. Decorativo.
public struct AWDivider: View {
    public init() {}
    public var body: some View {
        Rectangle().fill(AWColor.borderSoft).frame(height: 1).accessibilityHidden(true)
    }
}

/// Skeleton — Figma: Design Resources CORE › Skeleton. Square 72 (S) · Rectangle 92 × 16 (XS) · Circle 72.
public struct AWSkeleton: View {
    public enum Kind: Sendable { case square, rectangle, circle }
    let kind: Kind
    let width: CGFloat?
    let height: CGFloat?
    public init(_ kind: Kind = .rectangle, width: CGFloat? = nil, height: CGFloat? = nil) {
        self.kind = kind; self.width = width; self.height = height
    }
    public var body: some View {
        let w = width ?? (kind == .rectangle ? 92 : AWSpacing.s72)
        let h = height ?? (kind == .rectangle ? AWSpacing.s16 : AWSpacing.s72)
        Group {
            switch kind {
            case .circle: Circle().fill(AWColor.surfaceMuted)
            case .square: RoundedRectangle(cornerRadius: AWRadius.s, style: .continuous).fill(AWColor.surfaceMuted)
            case .rectangle: RoundedRectangle(cornerRadius: AWRadius.xs, style: .continuous).fill(AWColor.surfaceMuted)
            }
        }
        .frame(width: w, height: h)
        .awShimmer()
    }
}

/// Progress bar — Figma: Design Resources CORE › Progress bar. Track Feedback/info-surface,
/// indicador Feedback/info, alto 8, radio XS. Valor 0–1.
public struct AWProgressBar: View {
    let value: Double
    let label: String
    let showsLabel: Bool
    public init(value: Double, label: String = "Progreso", showsLabel: Bool = false) {
        self.value = value; self.label = label; self.showsLabel = showsLabel
    }
    public var body: some View {
        VStack(alignment: .leading, spacing: AWSpacing.s8) {
            if showsLabel {
                HStack { Text(label); Spacer(); Text(value, format: .percent.precision(.fractionLength(0))) }
                    .awText(AWTypography.labelMedium).foregroundStyle(AWColor.textPrimary)
            }
            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    Capsule().fill(AWColor.feedbackInfoSurface)
                    Capsule().fill(AWColor.feedbackInfo).frame(width: geo.size.width * min(max(value, 0), 1))
                }
            }
            .frame(height: AWSpacing.s8)
            .animation(.timingCurve(0.4, 0, 0.2, 1, duration: AWMotion.moderate), value: value)
            .accessibilityElement()
            .accessibilityLabel(label)
            .accessibilityValue(Text(value, format: .percent.precision(.fractionLength(0))))
        }
    }
}

/// Progress Circle — tamaños 16 · 24 · 32 · 48 · 56. `value == nil` = indeterminado.
public struct AWProgressCircle: View {
    let value: Double?
    let size: CGFloat
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var rotation = 0.0
    public init(value: Double? = nil, size: CGFloat = 32) { self.value = value; self.size = size }
    public var body: some View {
        let line: CGFloat = size <= 24 ? 2 : size <= 32 ? 3 : 4
        ZStack {
            Circle().stroke(AWColor.feedbackInfoSurface, lineWidth: line)
            Circle().trim(from: 0, to: value ?? 0.25)
                .stroke(AWColor.feedbackInfo, style: StrokeStyle(lineWidth: line, lineCap: .round))
                .rotationEffect(.degrees(-90 + rotation))
        }
        .frame(width: size, height: size)
        .onAppear {
            guard value == nil, !reduceMotion else { return }
            withAnimation(.linear(duration: 1).repeatForever(autoreverses: false)) { rotation = 360 }
        }
        .accessibilityElement()
        .accessibilityLabel("Cargando")
        .accessibilityValue(value.map { Text($0, format: .percent.precision(.fractionLength(0))) } ?? Text(""))
    }
}

/// Pagination (bullets) — activo Interactive/active ⚠️ (C-A02): además es más ancho (16 vs 8).
public struct AWPagination: View {
    let count: Int
    let current: Int
    public init(count: Int, current: Int) { self.count = count; self.current = current }
    public var body: some View {
        HStack(spacing: AWSpacing.s8) {
            ForEach(0..<count, id: \.self) { i in
                Capsule().fill(i == current ? AWColor.interactiveActive : AWColor.surfaceMuted)
                    .frame(width: i == current ? AWSpacing.s16 : AWSpacing.s8, height: AWSpacing.s8)
            }
        }
        .animation(AWMotion.standard, value: current)
        .accessibilityElement()
        .accessibilityLabel("Página \(current + 1) de \(count)")
    }
}

/// Progress_stepper — 3 o 4 pasos de 56 × 4.
public struct AWStepper: View {
    let step: Int
    let total: Int
    public init(step: Int, total: Int = 4) { self.step = step; self.total = total }
    public var body: some View {
        HStack(spacing: AWSpacing.s4) {
            ForEach(1...total, id: \.self) { i in
                Capsule().fill(i <= step ? AWColor.interactiveActive : AWColor.surfaceMuted).frame(width: AWSpacing.s56, height: AWSpacing.s4)
            }
        }
        .accessibilityElement()
        .accessibilityLabel("Paso \(step) de \(total)")
    }
}
