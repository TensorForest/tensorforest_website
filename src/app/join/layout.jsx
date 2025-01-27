import "../globals.css";
export const metadata = {
    title: "join us - TensorForest",
    description: "Join TensorForest and help us build a sustainable future",
};

export function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
