import "../globals.css";
export const metadata = {
    title: "about us - TensorForest",
    description: "Learn more about TensorForest and our mission",
};

export function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
