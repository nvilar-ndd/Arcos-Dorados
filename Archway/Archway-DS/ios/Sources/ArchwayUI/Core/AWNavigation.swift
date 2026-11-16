import SwiftUI

// iOS usa los componentes nativos del Nivel 0 (Liquid Glass): barra de navegación, TabView,
// toolbar y searchable. ArchWay sólo aporta tokens, textos y la regla de qué va en cada lugar.

public extension View {
    /// Top Bar en iOS = barra de navegación nativa. Título inline, leading Back/Close del sistema y
    /// trailing "Ayuda" como botón de texto del sistema.
    func awTopBar(title: String, helpLabel: String? = nil, onHelp: (() -> Void)? = nil) -> some View {
        navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                if let helpLabel, let onHelp {
                    ToolbarItem(placement: .topBarTrailing) { Button(helpLabel, action: onHelp) }
                }
            }
            .tint(AWColor.iconPrimary)
    }
}

/// Ítem del NavBar. En iOS se usa `TabView` nativo:
///
/// ```swift
/// TabView(selection: $tab) {
///     HomeView().tabItem { AWTabLabel(.home, "Inicio") }.tag(Tab.home)
///     DealsView().tabItem { AWTabLabel(.deals, "Cupones") }.tag(Tab.deals).badge(3)
/// }
/// .tint(AWColor.textPrimary)
/// ```
public struct AWTabLabel: View {
    let icon: AWIconName
    let title: String
    public init(_ icon: AWIconName, _ title: String) { self.icon = icon; self.title = title }
    public var body: some View {
        Label { Text(title) } icon: { Image("aw.\(icon.rawValue)", bundle: .module).renderingMode(.template) }
    }
}
