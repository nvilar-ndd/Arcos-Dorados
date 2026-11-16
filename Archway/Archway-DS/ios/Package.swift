// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "ArchwayUI",
    defaultLocalization: "es",
    platforms: [.iOS(.v16)],
    products: [.library(name: "ArchwayUI", targets: ["ArchwayUI"])],
    targets: [
        .target(
            name: "ArchwayUI",
            path: "Sources/ArchwayUI",
            resources: [.process("Resources")]
        ),
    ]
)
