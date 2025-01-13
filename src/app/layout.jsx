import "./globals.css";
import { Layout } from "./components/layout";

export const metadata = {
    title: "TensorForest - AI-Drone Climate Insights",
    description: "AI-powered drones collecting actionable climate insights",
};

export function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}

export default RootLayout;
