import SwiftUI
import UIKit

/// Header 💠 (Selection Mode Header) — Surface/brand, radio XXL abajo, botón de modo + QR 48.
public struct AWHeader: View {
    let action: String
    let location: String?
    let storeStatus: String?
    let isStatusError: Bool
    let onSelect: () -> Void
    let onQR: () -> Void

    public init(action: String = "¿Cómo querés recibir tu pedido?", location: String? = nil, storeStatus: String? = nil,
                isStatusError: Bool = false, onSelect: @escaping () -> Void, onQR: @escaping () -> Void) {
        self.action = action; self.location = location; self.storeStatus = storeStatus; self.isStatusError = isStatusError
        self.onSelect = onSelect; self.onQR = onQR
    }

    public var body: some View {
        HStack(spacing: AWSpacing.s8) {
            Button(action: onSelect) {
                HStack(spacing: AWSpacing.s8) {
                    AWIcon(.home)
                    VStack(alignment: .leading, spacing: 0) {
                        Text(action).awText(AWTypography.labelMedium)
                        if let location { Text(location).awText(AWTypography.labelMediumBold).lineLimit(1) }
                        if let storeStatus {
                            Text(storeStatus).awText(AWTypography.labelSmall).foregroundStyle(isStatusError ? AWColor.feedbackErrorText : AWColor.textPrimary)
                        }
                    }
                    Spacer(minLength: 0)
                    AWIcon(.chevronUp, size: 16).rotationEffect(.degrees(180))
                }
                .foregroundStyle(AWColor.textPrimary)
                .frame(minHeight: AWSpacing.s48)
            }
            .buttonStyle(.plain)
            AWIconButton(.qr, label: "Mostrar mi código QR", variant: .secondary, action: onQR)
        }
        .padding(.horizontal, AWSpacing.s16)
        .padding(.top, AWSpacing.s8)
        .padding(.bottom, AWSpacing.s16)
        .background(AWColor.surfaceBrand)
        .clipShape(UnevenRoundedRectangleCompat(bottom: AWRadius.xxl))
    }
}

/// Esquinas sólo abajo (UnevenRoundedRectangle es iOS 17+).
struct UnevenRoundedRectangleCompat: Shape {
    let bottom: CGFloat
    func path(in rect: CGRect) -> Path {
        Path(UIBezierPath(roundedRect: rect, byRoundingCorners: [.bottomLeft, .bottomRight],
                          cornerRadii: CGSize(width: bottom, height: bottom)).cgPath)
    }
}

/// Gamification Bar 💠 — barra Feedback/info con hitos, card de mensaje Feedback/info-surface.
public struct AWGamificationBar: View {
    let progress: Double
    let milestones: [Double]
    let message: String?
    let isExpanded: Bool

    public init(progress: Double, milestones: [Double] = [0.33, 0.66, 1], message: String? = nil, isExpanded: Bool = true) {
        self.progress = progress; self.milestones = milestones; self.message = message; self.isExpanded = isExpanded
    }

    public var body: some View {
        VStack(spacing: AWSpacing.s16) {
            GeometryReader { geo in
                ZStack(alignment: .leading) {
                    Capsule().fill(AWColor.surfaceSubtle).frame(height: AWSpacing.s8)
                    Capsule().fill(AWColor.feedbackInfo).frame(width: geo.size.width * min(progress, 1), height: AWSpacing.s8)
                    ForEach(milestones, id: \.self) { m in
                        let done = progress >= m
                        AWIcon(done ? .checkmark : .deals, size: 16)
                            .foregroundStyle(done ? AWColor.iconOnColor : AWColor.iconDisabled)
                            .frame(width: AWSpacing.s24, height: AWSpacing.s24)
                            .background(done ? AWColor.feedbackInfo : AWColor.surfaceStrong, in: Circle())
                            .position(x: geo.size.width * m - AWSpacing.s24 / 2, y: geo.size.height / 2)
                    }
                }
            }
            .frame(height: AWSpacing.s24)
            .accessibilityElement()
            .accessibilityLabel("Avance hacia el envío gratis")
            .accessibilityValue(Text(progress, format: .percent.precision(.fractionLength(0))))

            if isExpanded, let message {
                Text(message).awText(AWTypography.labelSmallBold).foregroundStyle(AWColor.textPrimary)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(AWSpacing.s16)
                    .background(AWColor.feedbackInfoSurface)
                    .awCorner(AWRadius.m)
            }
        }
        .padding(AWSpacing.s16)
        .background(AWColor.surfaceDefault)
        .animation(.timingCurve(0.4, 0, 0.2, 1, duration: AWMotion.slow), value: progress)
    }
}

/// Loyalty Home Card 💠 — puntos con contador (~1 s ease-out), barra Interactive/active, candado al 100 %.
public struct AWLoyaltyCard: View {
    let points: Int
    let goal: Int
    let title: String
    let content: String?
    @State private var shown = 0
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    public init(points: Int, goal: Int, title: String = "Mis puntos", content: String? = nil) {
        self.points = points; self.goal = goal; self.title = title; self.content = content
    }

    public var body: some View {
        let pct = min(Double(points) / Double(max(goal, 1)), 1)
        VStack(alignment: .leading, spacing: AWSpacing.s16) {
            HStack { Text(title).awText(AWTypography.headingSmallBold); Spacer(); AWIcon(.loyalty) }
            Text("\(shown)").awText(AWTypography.displayMediumBold)
                .accessibilityLabel("\(points) puntos")
            HStack(spacing: AWSpacing.s8) {
                AWProgressBarTrack(value: pct)
                AWIcon(pct >= 1 ? .checkmark : .cancel, size: 16)
                    .foregroundStyle(pct >= 1 ? AWColor.iconOnColor : AWColor.iconPrimary)
                    .frame(width: AWSpacing.s32, height: AWSpacing.s32)
                    .background(pct >= 1 ? AWColor.surfaceInverse : AWColor.surfaceDefault, in: Circle())
            }
            if pct >= 1 { Text("¡Premio desbloqueado!").awText(AWTypography.labelSmallBold).transition(.move(edge: .trailing)) }
            else if let content { Text(content).awText(AWTypography.textBodySmall) }
        }
        .foregroundStyle(AWColor.textPrimary)
        .padding(AWSpacing.s16)
        .background(AWColor.surfaceBrand)
        .awCorner(AWRadius.l)
        .onAppear { animate(to: points) }
        .onChange(of: points) { animate(to: $0) }
    }

    private func animate(to value: Int) {
        guard !reduceMotion else { shown = value; return }
        let start = shown
        Task { @MainActor in
            for i in 1...30 {
                let k = Double(i) / 30
                shown = start + Int(Double(value - start) * (1 - pow(1 - k, 3)))
                try? await Task.sleep(nanoseconds: 33_000_000)
            }
        }
    }
}

struct AWProgressBarTrack: View {
    let value: Double
    var body: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                Capsule().fill(AWColor.surfaceDefault)
                Capsule().fill(AWColor.interactiveActive).frame(width: geo.size.width * value)
            }
        }
        .frame(height: AWSpacing.s8)
        .animation(.timingCurve(0, 0, 0.2, 1, duration: AWMotion.expressive), value: value)
    }
}

/// Card / Setting 💠 — 380 × 68, Surface/default + Border/soft, radio S, con Toggle nativo.
public struct AWSettingCard: View {
    let headline: String
    let supporting: String?
    @Binding var isOn: Bool
    public init(_ headline: String, supporting: String? = nil, isOn: Binding<Bool>) {
        self.headline = headline; self.supporting = supporting; self._isOn = isOn
    }
    public var body: some View {
        Toggle(isOn: $isOn) {
            VStack(alignment: .leading, spacing: 0) {
                Text(headline).awText(AWTypography.labelMediumBold).foregroundStyle(AWColor.textPrimary)
                if let supporting { Text(supporting).awText(AWTypography.textBodySmall).foregroundStyle(AWColor.textSecondary) }
            }
        }
        .tint(AWColor.interactiveActive)
        .padding(.horizontal, AWSpacing.s16)
        .padding(.vertical, AWSpacing.s8)
        .frame(minHeight: 68)
        .background(AWColor.surfaceDefault)
        .overlay(RoundedRectangle(cornerRadius: AWRadius.s, style: .continuous).strokeBorder(AWColor.borderSoft, lineWidth: 1))
        .awCorner(AWRadius.s)
    }
}

/// Card / Voucher 💠 — troquel + franja de acción Feature/missions-surface.
public struct AWVoucherCard: View {
    let headline: String
    let subhead: String?
    let support: [String]
    let tag: String?
    let image: Image?
    let actionLabel: String
    let action: () -> Void

    public init(_ headline: String, subhead: String? = nil, support: [String] = [], tag: String? = nil, image: Image? = nil,
                actionLabel: String = "Ver cupón", action: @escaping () -> Void) {
        self.headline = headline; self.subhead = subhead; self.support = support; self.tag = tag; self.image = image
        self.actionLabel = actionLabel; self.action = action
    }

    public var body: some View {
        Button(action: action) {
            VStack(spacing: 0) {
                HStack(spacing: AWSpacing.s16) {
                    if let image { image.resizable().scaledToFit().frame(width: AWSpacing.s80, height: AWSpacing.s80).background(AWColor.surfaceSubtle).awCorner(AWRadius.s) }
                    else { AWIcon(.deals).frame(width: AWSpacing.s56, height: AWSpacing.s56).background(AWColor.surfaceBrand, in: Circle()) }
                    VStack(alignment: .leading, spacing: AWSpacing.s4) {
                        if let tag { AWTag(tag, hierarchy: .secondary) }
                        if let subhead { Text(subhead).awText(AWTypography.labelSmall).foregroundStyle(AWColor.textSecondary) }
                        Text(headline).awText(AWTypography.labelMediumBold).foregroundStyle(AWColor.textPrimary)
                        ForEach(support.prefix(2), id: \.self) { Text($0).awText(AWTypography.textBodySmall).foregroundStyle(AWColor.textSecondary) }
                    }
                    Spacer(minLength: 0)
                }
                .padding(AWSpacing.s16)
                Line().stroke(AWColor.borderSoft, style: StrokeStyle(lineWidth: 1, dash: [4])).frame(height: 1).accessibilityHidden(true)
                HStack {
                    Text(actionLabel).awText(AWTypography.labelMediumBold)
                    Spacer()
                    AWIcon(.chevronUp, size: 16).rotationEffect(.degrees(90))
                }
                .foregroundStyle(AWColor.textPrimary)
                .padding(.horizontal, AWSpacing.s16).padding(.vertical, AWSpacing.s8)
                .background(AWColor.featureMissionsSurface)
            }
            .background(AWColor.surfaceDefault)
            .awCorner(AWRadius.s)
            .awShadow(AWElevation.shallowLElev1)
        }
        .buttonStyle(.plain)
    }

    private struct Line: Shape {
        func path(in rect: CGRect) -> Path { Path { p in p.move(to: .init(x: 0, y: rect.midY)); p.addLine(to: .init(x: rect.maxX, y: rect.midY)) } }
    }
}

/// Product Card 💠 — Small 144 / Big 224. Precio con descuento Feedback/error-text (C-T02).
public struct AWProductCard: View {
    let name: String
    let price: String
    let oldPrice: String?
    let points: String?
    let image: Image?
    let isBig: Bool
    let action: () -> Void
    @Environment(\.isEnabled) private var isEnabled

    public init(_ name: String, price: String, oldPrice: String? = nil, points: String? = nil, image: Image? = nil, isBig: Bool = false, action: @escaping () -> Void) {
        self.name = name; self.price = price; self.oldPrice = oldPrice; self.points = points; self.image = image; self.isBig = isBig; self.action = action
    }

    public var body: some View {
        Button(action: action) {
            VStack(alignment: .leading, spacing: AWSpacing.s16) {
                ZStack(alignment: .topLeading) {
                    AWColor.surfaceSubtle
                    image?.resizable().scaledToFit().grayscale(isEnabled ? 0 : 1)
                    if let points {
                        Label { Text(points) } icon: { AWIcon(.loyalty, size: 16).foregroundStyle(AWColor.iconGold) }
                            .awText(AWTypography.labelSmall).foregroundStyle(AWColor.textPrimary)
                            .padding(.horizontal, AWSpacing.s4).background(AWColor.surfaceBrand).awCorner(AWRadius.xs)
                            .padding(AWSpacing.s8)
                    }
                }
                .frame(height: 128)
                .awCorner(AWRadius.s)
                VStack(alignment: .leading, spacing: AWSpacing.s8) {
                    Text(name).awText(AWTypography.textBodyMedium).lineLimit(2)
                        .foregroundStyle(isEnabled ? AWColor.textPrimary : AWColor.textDisabled)
                    HStack(alignment: .firstTextBaseline, spacing: AWSpacing.s8) {
                        Text(price).awText(AWTypography.headingSmallBold)
                            .foregroundStyle(!isEnabled ? AWColor.textDisabled : oldPrice != nil ? AWColor.feedbackErrorText : AWColor.textPrimary)
                        if let oldPrice {
                            Text(oldPrice).strikethrough().awText(AWTypography.labelSmall).foregroundStyle(AWColor.textSecondary)
                                .accessibilityLabel("Antes \(oldPrice)")
                        }
                    }
                }
            }
            .frame(width: isBig ? 224 : 144)
        }
        .buttonStyle(.plain)
        .accessibilityElement(children: .combine)
    }
}

/// Banner 💠 — imagen 380 × 294, radio S. `alt` obligatorio.
public struct AWBanner: View {
    let image: Image
    let alt: String
    public init(_ image: Image, alt: String) { self.image = image; self.alt = alt }
    public var body: some View {
        image.resizable().scaledToFill()
            .frame(maxWidth: 380).aspectRatio(380 / 294, contentMode: .fit)
            .awCorner(AWRadius.s)
            .accessibilityLabel(alt)
    }
}

/// Dialog / Pop-up 💠 — 328 de ancho, radio L, título Heading Large Bold, CTA Primary + Secondary.
/// Presentar con `.sheet` / `.fullScreenCover` o un overlay modal; VoiceOver queda dentro del diálogo.
public struct AWDialog: View {
    let title: String?
    let image: Image?
    let isFullBleed: Bool
    let primaryLabel: String
    let secondaryLabel: String?
    let onPrimary: () -> Void
    let onSecondary: (() -> Void)?
    let onClose: (() -> Void)?

    public init(title: String? = nil, image: Image? = nil, isFullBleed: Bool = false, primaryLabel: String, secondaryLabel: String? = nil,
                onPrimary: @escaping () -> Void, onSecondary: (() -> Void)? = nil, onClose: (() -> Void)? = nil) {
        self.title = title; self.image = image; self.isFullBleed = isFullBleed; self.primaryLabel = primaryLabel; self.secondaryLabel = secondaryLabel
        self.onPrimary = onPrimary; self.onSecondary = onSecondary; self.onClose = onClose
    }

    public var body: some View {
        VStack(spacing: AWSpacing.s16) {
            image?.resizable().scaledToFill().frame(height: isFullBleed ? 240 : 296).clipped().awCorner(isFullBleed ? 0 : AWRadius.m)
            VStack(spacing: AWSpacing.s16) {
                if let title { Text(title).awText(AWTypography.headingLargeBold).foregroundStyle(AWColor.textPrimary).accessibilityAddTraits(.isHeader) }
                AWButton(primaryLabel, action: onPrimary).frame(maxWidth: .infinity)
                if let secondaryLabel, let onSecondary { AWButton(secondaryLabel, variant: .secondary, action: onSecondary) }
            }
            .padding(.horizontal, isFullBleed ? AWSpacing.s16 : 0)
        }
        .padding(isFullBleed ? .bottom : .all, AWSpacing.s16)
        .frame(width: 328)
        .background(AWColor.surfaceDefault)
        .overlay(alignment: .topTrailing) {
            if let onClose { AWIconButton(.close, label: "Cerrar", variant: .secondary, size: .small, action: onClose).padding(AWSpacing.s16) }
        }
        .awCorner(AWRadius.l)
        .awShadow(AWElevation.deepHElev3)
        .accessibilityAddTraits(.isModal)
    }
}

/// Tile Misiones 💠 — recompensa (sin interacción), 116 × 112.
public struct AWMissionTile: View {
    let label: String?
    let image: Image?
    public init(label: String? = nil, image: Image? = nil) { self.label = label; self.image = image }
    public var body: some View {
        VStack(spacing: AWSpacing.s8) {
            Group { if let image { image.resizable().scaledToFit() } else { AWIcon(.deals) } }
                .frame(width: AWSpacing.s48, height: AWSpacing.s48)
                .background(AWColor.featureMissionsSurface, in: Circle())
            if let label { Text(label).awText(AWTypography.labelSmall).lineLimit(2).multilineTextAlignment(.center).foregroundStyle(AWColor.textPrimary) }
        }
        .padding(AWSpacing.s8)
        .frame(width: 116, height: 112)
        .background(AWColor.surfaceDefault)
        .overlay(RoundedRectangle(cornerRadius: AWRadius.l, style: .continuous).strokeBorder(AWColor.borderSubtle, lineWidth: 0.5))
        .awCorner(AWRadius.l)
        .accessibilityElement(children: .combine)
    }
}

/// Pin 💠 (Misiones) — 56 × 60. Tokens propuestos para los hex sueltos (C-T02).
public struct AWPin: View {
    public enum Status: Sendable { case `default`, incomplete, expired }
    let name: String
    let image: Image?
    let status: Status
    public init(_ name: String, image: Image? = nil, status: Status = .default) { self.name = name; self.image = image; self.status = status }
    public var body: some View {
        ZStack(alignment: .bottom) {
            Group { if let image { image.resizable().scaledToFit() } else { Color.clear } }
                .grayscale(status == .default ? 0 : 1)
                .frame(width: AWSpacing.s56, height: AWSpacing.s56)
                .background(AWColor.surfaceSubtle, in: Circle())
                .overlay(Circle().strokeBorder(status == .default ? AWColor.surfaceDefault : AWColor.borderSubtle, lineWidth: 2))
                .frame(maxHeight: .infinity, alignment: .top)
            if status == .expired {
                Text("Vencido").awText(AWTypography.labelSmall).foregroundStyle(AWColor.textOnColor)
                    .padding(.horizontal, AWSpacing.s4).background(AWColor.surfaceInverse).awCorner(AWRadius.xs)
            }
        }
        .frame(width: AWSpacing.s56, height: 60)
        .accessibilityElement()
        .accessibilityLabel("Pin \(name), \(status == .default ? "obtenido" : status == .incomplete ? "sin completar" : "vencido")")
    }
}
