import "./globals.css";

export const metadata = {
    title: "TensorForest - AI-Drone Climate Insights",
    description: "AI-powered drones collecting actionable climate insights",
};

export function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
