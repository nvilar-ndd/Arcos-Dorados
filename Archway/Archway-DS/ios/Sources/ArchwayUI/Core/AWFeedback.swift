import SwiftUI
import UIKit

/// Toast — Figma: Design Resources CORE › Toast. Surface/inverse, radio S, acento izquierdo 5 pt
/// (tokens *-on-black). Ancho 328–408, máx. 2 líneas, 5 s. Se anuncia con VoiceOver al aparecer.
public struct AWToast: View {
    public enum Status: Sendable { case info, success, warning, error }
    let message: String
    let status: Status
    let supportText: String?

    public init(_ message: String, status: Status = .info, supportText: String? = nil) {
        self.message = message; self.status = status; self.supportText = supportText
    }

    public var body: some View {
        HStack(spacing: AWSpacing.s8) {
            AWIcon(icon, size: 16).foregroundStyle(accent)
            Text(message).awText(AWTypography.labelMedium).lineLimit(2).foregroundStyle(AWColor.textOnColor)
            Spacer(minLength: 0)
            if let supportText { Text(supportText).awText(AWTypography.labelSmall).foregroundStyle(AWColor.textOnColor) }
        }
        .padding(.vertical, AWSpacing.s8)
        .padding(.leading, AWSpacing.s24)
        .padding(.trailing, AWSpacing.s16)
        .frame(minWidth: 328, maxWidth: 408, minHeight: AWSpacing.s64)
        .background(AWColor.surfaceInverse)
        .overlay(alignment: .leading) { Rectangle().fill(accent).frame(width: 5) }
        .awCorner(AWRadius.s)
        .accessibilityElement(children: .combine)
        .onAppear { UIAccessibility.post(notification: .announcement, argument: message) }
    }

    private var icon: AWIconName { switch status { case .info: .info; case .success: .success; case .warning: .warning; case .error: .error } }
    private var accent: Color {
        switch status { case .info: AWColor.feedbackInfoOnBlack; case .success: AWColor.feedbackSuccessOnBlack; case .warning: AWColor.feedbackWarning; case .error: AWColor.feedbackErrorOnBlack }
    }
}

public extension View {
    /// Presenta un Toast abajo, 5 s por defecto (Motion › Entrance / Exit).
    func awToast(_ toast: Binding<AWToast?>, duration: Double = 5) -> some View {
        overlay(alignment: .bottom) {
            if let value = toast.wrappedValue {
                value
                    .padding(AWSpacing.s16)
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                    .task {
                        try? await Task.sleep(nanoseconds: UInt64(duration * 1_000_000_000))
                        withAnimation(AWMotion.exit) { toast.wrappedValue = nil }
                    }
            }
        }
        .animation(.timingCurve(0, 0, 0.2, 1, duration: AWMotion.moderate), value: toast.wrappedValue != nil)
    }
}

/// Tooltip (Plain / Rich) — Surface/inverse, texto on-color. Se muestra como popover anclado
/// (en iPhone, iOS 16.4+ lo presenta compacto). Se cierra con tap fuera o con el botón.
public struct AWTooltipContent: View {
    let text: String
    let title: String?
    public init(_ text: String, title: String? = nil) { self.text = text; self.title = title }
    public var body: some View {
        VStack(alignment: .leading, spacing: AWSpacing.s8) {
            if let title { Text(title).awText(AWTypography.labelMediumBold) }
            Text(text).awText(title == nil ? AWTypography.labelSmall : AWTypography.labelMedium)
        }
        .foregroundStyle(AWColor.textOnColor)
        .padding(.horizontal, AWSpacing.s16)
        .padding(.vertical, AWSpacing.s8)
        .frame(minWidth: 68, maxWidth: title == nil ? 300 : 248, minHeight: 36, alignment: .leading)
        .background(AWColor.surfaceInverse)
    }
}

public extension View {
    func awTooltip(isPresented: Binding<Bool>, text: String, title: String? = nil) -> some View {
        popover(isPresented: isPresented) {
            if #available(iOS 16.4, *) {
                AWTooltipContent(text, title: title).presentationCompactAdaptation(.popover).presentationBackground(AWColor.surfaceInverse)
            } else {
                AWTooltipContent(text, title: title)
            }
        }
    }
}
