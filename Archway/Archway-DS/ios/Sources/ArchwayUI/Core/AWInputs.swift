import SwiftUI

/// Input — Text Field · Password · Text Area. Figma: Design Resources CORE › Imput_*.
/// Label (Label Small) + campo (32 de alto, padding 8/16, radio M, borde 1) + hint.
/// Bordes: Enabled Border/soft · editando Border/strong · completo Border/input-active · Error Feedback/error.
public struct AWTextField: View {
    public enum Kind: Sendable { case text, password, multiline(maxLength: Int?) }

    let label: String
    let placeholder: String
    @Binding var text: String
    let kind: Kind
    let hint: String?
    let error: String?
    @FocusState private var focused: Bool
    @State private var revealed = false
    @Environment(\.isEnabled) private var isEnabled

    public init(_ label: String, text: Binding<String>, placeholder: String = "", kind: Kind = .text, hint: String? = nil, error: String? = nil) {
        self.label = label; self._text = text; self.placeholder = placeholder; self.kind = kind; self.hint = hint; self.error = error
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: AWSpacing.s4) {
            HStack {
                Text(label).awText(AWTypography.labelSmall).foregroundStyle(isEnabled ? AWColor.textPrimary : AWColor.textDisabled)
                Spacer()
                if case let .multiline(max?) = kind {
                    Text("\(text.count)/\(max)").awText(AWTypography.labelSmall).foregroundStyle(AWColor.textSecondary)
                }
            }
            HStack(alignment: isMultiline ? .top : .center, spacing: AWSpacing.s8) {
                field
                    .awText(AWTypography.labelMedium)
                    .foregroundStyle(isEnabled ? AWColor.textPrimary : AWColor.textDisabled)
                    .focused($focused)
                if case .password = kind {
                    Button { revealed.toggle() } label: { AWIcon(.hide, size: 16) }
                        .foregroundStyle(AWColor.iconPrimary)
                        .awHitArea()
                        .accessibilityLabel(revealed ? "Ocultar contraseña" : "Mostrar contraseña")
                        .accessibilityAddTraits(revealed ? [.isSelected] : [])
                } else if isMultiline, !text.isEmpty, isEnabled {
                    Button { text = "" } label: { AWIcon(.cancel, size: 16) }
                        .foregroundStyle(AWColor.iconPrimary)
                        .accessibilityLabel("Borrar texto")
                }
            }
            .padding(.vertical, AWSpacing.s8)
            .padding(.horizontal, AWSpacing.s16)
            .frame(minHeight: isMultiline ? AWSpacing.s72 : AWSpacing.s32, alignment: .top)
            .background(isEnabled ? AWColor.surfaceDefault : AWColor.surfaceSubtle)
            .overlay(RoundedRectangle(cornerRadius: AWRadius.m, style: .continuous).strokeBorder(borderColor, lineWidth: 1))
            .awCorner(AWRadius.m)
            .contentShape(Rectangle())
            .onTapGesture { focused = true }
            .animation(AWMotion.standard, value: focused)

            if let message = error ?? hint {
                HStack(spacing: AWSpacing.s4) {
                    if error != nil { AWIcon(.error, size: 16) }
                    Text(message).awText(AWTypography.labelSmall)
                }
                .foregroundStyle(error != nil ? AWColor.textError : AWColor.textSecondary)
            }
        }
        .accessibilityElement(children: .contain)
    }

    private var isMultiline: Bool { if case .multiline = kind { return true }; return false }

    @ViewBuilder private var field: some View {
        switch kind {
        case .text:
            TextField(placeholder, text: $text).accessibilityLabel(label).accessibilityHint(error ?? hint ?? "")
        case .password:
            Group {
                if revealed { TextField(placeholder, text: $text) } else { SecureField(placeholder, text: $text) }
            }
            .textContentType(.password)
            .accessibilityLabel(label)
        case let .multiline(max):
            TextField(placeholder, text: $text, axis: .vertical)
                .lineLimit(3...6)
                .onChange(of: text) { new in if let max, new.count > max { text = String(new.prefix(max)) } }
                .accessibilityLabel(label)
        }
    }

    private var borderColor: Color {
        if !isEnabled { return AWColor.borderSubtle }
        if error != nil { return AWColor.feedbackError }
        if focused { return AWColor.borderStrong }
        return text.isEmpty ? AWColor.borderSoft : AWColor.borderInputActive
    }
}

/// Input: Select — Figma: Imput_Select. En iOS usa `Menu` nativo con la piel de ArchWay.
public struct AWSelect<Value: Hashable>: View {
    let label: String
    let placeholder: String
    let options: [(value: Value, label: String)]
    @Binding var selection: Value?

    public init(_ label: String, selection: Binding<Value?>, options: [(value: Value, label: String)], placeholder: String = "Elegí una opción") {
        self.label = label; self._selection = selection; self.options = options; self.placeholder = placeholder
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: AWSpacing.s4) {
            Text(label).awText(AWTypography.labelSmall).foregroundStyle(AWColor.textPrimary)
            Menu {
                Picker(label, selection: $selection) {
                    ForEach(options, id: \.value) { Text($0.label).tag(Optional($0.value)) }
                }
            } label: {
                HStack {
                    Text(options.first { $0.value == selection }?.label ?? placeholder)
                        .awText(AWTypography.labelMedium)
                        .foregroundStyle(selection == nil ? AWColor.textSecondary : AWColor.textPrimary)
                    Spacer()
                    AWIcon(.chevronUp, size: 16).rotationEffect(.degrees(180)).foregroundStyle(AWColor.iconPrimary)
                }
                .padding(.horizontal, AWSpacing.s16)
                .frame(height: AWSpacing.s32)
                .overlay(RoundedRectangle(cornerRadius: AWRadius.m, style: .continuous)
                    .strokeBorder(selection == nil ? AWColor.borderSoft : AWColor.borderInputActive, lineWidth: 1))
                .awHitArea()
            }
            .accessibilityLabel(label)
        }
    }
}

/// Input: PinCode — Figma: Imput_PinCode. 4 o 6 casillas 48 × 56 (Heading Large).
/// Un único TextField invisible (oneTimeCode) para VoiceOver y el autocompletado de SMS.
public struct AWPinCode: View {
    @Binding var code: String
    let digits: Int
    let error: String?
    @FocusState private var focused: Bool

    public init(code: Binding<String>, digits: Int = 6, error: String? = nil) {
        self._code = code; self.digits = digits; self.error = error
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: AWSpacing.s8) {
            ZStack {
                TextField("", text: $code)
                    .keyboardType(.numberPad)
                    .textContentType(.oneTimeCode)
                    .focused($focused)
                    .opacity(0.01)
                    .onChange(of: code) { new in code = String(new.filter(\.isNumber).prefix(digits)) }
                    .accessibilityLabel("Código de \(digits) dígitos")
                HStack(spacing: AWSpacing.s8) {
                    ForEach(0..<digits, id: \.self) { i in
                        let chars = Array(code)
                        Text(i < chars.count ? String(chars[i]) : "")
                            .awText(AWTypography.headingLarge)
                            .foregroundStyle(AWColor.textPrimary)
                            .frame(width: AWSpacing.s48, height: AWSpacing.s56)
                            .background(AWColor.surfaceDefault)
                            .overlay(RoundedRectangle(cornerRadius: AWRadius.m, style: .continuous)
                                .strokeBorder(error != nil ? AWColor.feedbackError : (focused && i == min(code.count, digits - 1) ? AWColor.borderStrong : AWColor.borderSoft), lineWidth: 1))
                    }
                }
                .accessibilityHidden(true)
                .onTapGesture { focused = true }
            }
            if let error { Text(error).awText(AWTypography.labelSmall).foregroundStyle(AWColor.textError) }
        }
    }
}

/// Search — en iOS es el buscador nativo: usar `.searchable(text:prompt:)` en la pantalla.
/// Este modifier sólo fija el prompt y el tinte de ArchWay.
public extension View {
    func awSearchable(text: Binding<String>, prompt: String = "Buscar") -> some View {
        searchable(text: text, prompt: Text(prompt)).tint(AWColor.textPrimary)
    }
}
