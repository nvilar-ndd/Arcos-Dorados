import SwiftUI

/// List Item — Figma: Design Resources CORE › List Item. Fila 56, padding 16, gap 8.
public struct AWListItem<Leading: View, Trailing: View>: View {
    let title: String
    let subtitle: String?
    let showsDivider: Bool
    let action: (() -> Void)?
    let leading: Leading
    let trailing: Trailing
    @Environment(\.isEnabled) private var isEnabled

    public init(_ title: String, subtitle: String? = nil, showsDivider: Bool = false, action: (() -> Void)? = nil,
                @ViewBuilder leading: () -> Leading = { EmptyView() }, @ViewBuilder trailing: () -> Trailing = { EmptyView() }) {
        self.title = title; self.subtitle = subtitle; self.showsDivider = showsDivider; self.action = action
        self.leading = leading(); self.trailing = trailing()
    }

    public var body: some View {
        VStack(spacing: 0) {
            if let action {
                Button(action: action) { row }.buttonStyle(RowStyle())
            } else {
                row.background(AWColor.surfaceDefault)
            }
            if showsDivider { AWDivider() }
        }
    }

    private var row: some View {
        HStack(spacing: AWSpacing.s8) {
            leading.foregroundStyle(isEnabled ? AWColor.iconPrimary : AWColor.iconDisabled)
            VStack(alignment: .leading, spacing: 0) {
                Text(title).foregroundStyle(isEnabled ? AWColor.textPrimary : AWColor.textDisabled)
                if let subtitle { Text(subtitle).foregroundStyle(isEnabled ? AWColor.textSecondary : AWColor.textDisabled) }
            }
            .awText(AWTypography.labelMedium)
            Spacer(minLength: 0)
            trailing.foregroundStyle(isEnabled ? AWColor.iconPrimary : AWColor.iconDisabled)
        }
        .padding(AWSpacing.s16)
        .frame(minHeight: AWSpacing.s56)
        .contentShape(Rectangle())
    }

    private struct RowStyle: ButtonStyle {
        func makeBody(configuration: Configuration) -> some View {
            configuration.label.background(configuration.isPressed ? AWColor.surfaceSubtle : AWColor.surfaceDefault)
        }
    }
}

/// Card (base Core) — Figma: Design Resources CORE › Card. Elevated · Filled · Outlined; padding 16, radio S.
/// Regla: con chevron la card entera es tocable y no lleva acciones adentro; con ⋮ / ♡ no se toca entera.
public struct AWCard<Leading: View, Bottom: View>: View {
    public enum Style: Sendable { case elevated, filled, outlined }
    public enum Trailing { case chevron(action: () -> Void), more(action: () -> Void), none }

    let title: String
    let subtitle: String?
    let tag: String?
    let style: Style
    let trailing: Trailing
    let isSelected: Bool
    let favorite: Binding<Bool>?
    let leading: Leading
    let bottom: Bottom

    public init(_ title: String, subtitle: String? = nil, tag: String? = nil, style: Style = .elevated, trailing: Trailing = .none,
                isSelected: Bool = false, favorite: Binding<Bool>? = nil,
                @ViewBuilder leading: () -> Leading = { EmptyView() }, @ViewBuilder bottom: () -> Bottom = { EmptyView() }) {
        self.title = title; self.subtitle = subtitle; self.tag = tag; self.style = style; self.trailing = trailing
        self.isSelected = isSelected; self.favorite = favorite; self.leading = leading(); self.bottom = bottom()
    }

    public var body: some View {
        if case let .chevron(action) = trailing {
            Button(action: action) { content(pressed: false) }
                .buttonStyle(CardStyle(card: self))
                .accessibilityAddTraits(isSelected ? [.isSelected] : [])
        } else {
            content(pressed: false)
        }
    }

    func content(pressed: Bool) -> some View {
        VStack(alignment: .leading, spacing: AWSpacing.s16) {
            HStack(spacing: AWSpacing.s8) {
                leading.frame(maxWidth: AWSpacing.s80, maxHeight: AWSpacing.s80).awCorner(AWRadius.s)
                VStack(alignment: .leading, spacing: AWSpacing.s4) {
                    if let tag { AWTag(tag, hierarchy: .secondary) }
                    Text(title).awText(AWTypography.labelMediumBold).foregroundStyle(AWColor.textPrimary)
                    if let subtitle { Text(subtitle).awText(AWTypography.labelSmall).foregroundStyle(AWColor.textSecondary) }
                }
                Spacer(minLength: 0)
                if let favorite {
                    AWIconButton(.favorite, label: favorite.wrappedValue ? "Quitar de favoritos" : "Agregar a favoritos",
                                 variant: .ghost, isPressed: favorite.wrappedValue) { favorite.wrappedValue.toggle() }
                }
                switch trailing {
                case .chevron: AWIcon(.chevronUp).rotationEffect(.degrees(90)).foregroundStyle(AWColor.iconPrimary)
                case let .more(action): AWIconButton(.more, label: "Más opciones", variant: .ghost, action: action)
                case .none: EmptyView()
                }
            }
            bottom
        }
        .padding(AWSpacing.s16)
        .frame(minWidth: 328, maxWidth: .infinity, alignment: .leading)
        .background(background(pressed: pressed))
        .overlay(RoundedRectangle(cornerRadius: AWRadius.s, style: .continuous).strokeBorder(border, lineWidth: isSelected ? 2 : 1))
        .awCorner(AWRadius.s)
        .awShadow(style == .elevated ? AWElevation.shallowLElev1 : AWShadow(opacity: 0, radius: 0, x: 0, y: 0))
    }

    private func background(pressed: Bool) -> Color {
        switch style {
        case .filled: return pressed ? AWColor.surfaceMuted : AWColor.surfaceSubtle
        default: return pressed ? AWColor.surfaceSubtle : AWColor.surfaceDefault
        }
    }
    private var border: Color {
        if isSelected { return AWColor.borderInputActive }
        return style == .outlined ? AWColor.borderSoft : .clear
    }

    private struct CardStyle: ButtonStyle {
        let card: AWCard
        func makeBody(configuration: Configuration) -> some View { card.content(pressed: configuration.isPressed) }
    }
}

/// Tile / Category — Figma: Tile 116 × 112 · Category Primary 184 × 104 · Category Secondary 102 × 120. Radio L.
public struct AWTile: View {
    public enum Kind: Sendable { case tile, categoryPrimary, categorySecondary }
    let label: String
    let kind: Kind
    let icon: AWIconName?
    let image: Image?
    let action: () -> Void

    public init(_ label: String, kind: Kind = .tile, icon: AWIconName? = nil, image: Image? = nil, action: @escaping () -> Void) {
        self.label = label; self.kind = kind; self.icon = icon; self.image = image; self.action = action
    }

    public var body: some View {
        Button(action: action) {
            ZStack(alignment: kind == .categoryPrimary ? .bottomLeading : .center) {
                if kind == .categoryPrimary, let image {
                    image.resizable().scaledToFit().frame(width: AWSpacing.s72, height: AWSpacing.s72)
                        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
                }
                VStack(spacing: kind == .tile ? AWSpacing.s8 : AWSpacing.s4) {
                    if kind == .tile, let icon {
                        AWIcon(icon).foregroundStyle(AWColor.iconPrimary)
                            .frame(width: AWSpacing.s48, height: AWSpacing.s48)
                            .background(AWColor.surfaceBrand, in: Circle())
                    } else if kind == .categorySecondary, let image {
                        image.resizable().scaledToFit().frame(width: AWSpacing.s64, height: AWSpacing.s64)
                    }
                    Text(label)
                        .awText(kind == .categoryPrimary ? AWTypography.labelMedium : AWTypography.labelSmall)
                        .multilineTextAlignment(kind == .categoryPrimary ? .leading : .center)
                        .lineLimit(2)
                        .foregroundStyle(AWColor.textPrimary)
                }
            }
            .padding(AWSpacing.s8)
            .frame(width: size.width, height: size.height)
        }
        .buttonStyle(TileStyle(scales: kind != .tile))
    }

    private var size: CGSize {
        switch kind { case .tile: CGSize(width: 116, height: 112); case .categoryPrimary: CGSize(width: 184, height: 104); case .categorySecondary: CGSize(width: 102, height: 120) }
    }

    private struct TileStyle: ButtonStyle {
        let scales: Bool
        func makeBody(configuration: Configuration) -> some View {
            configuration.label
                .background(configuration.isPressed ? AWColor.buttonSecondaryBgPressed : AWColor.surfaceDefault)
                .overlay(RoundedRectangle(cornerRadius: AWRadius.l, style: .continuous).strokeBorder(AWColor.borderSubtle, lineWidth: 0.5))
                .awCorner(AWRadius.l)
                .scaleEffect(scales && configuration.isPressed ? 0.97 : 1)
                .animation(AWMotion.standard, value: configuration.isPressed)
        }
    }
}
