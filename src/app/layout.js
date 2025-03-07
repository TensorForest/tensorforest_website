export const metadata = {
    title: "TensorForest",
    description: "Advancing AI research and development",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {/* This ensures the body doesn't flash during hydration */}
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
          body { opacity: 0; transition: opacity 0.2s ease-in-out; }
        `,
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
