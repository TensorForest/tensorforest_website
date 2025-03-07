/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: "#fff",
                        a: {
                            color: "#3b82f6",
                            "&:hover": {
                                color: "#60a5fa",
                            },
                        },
                        h1: {
                            color: "#fff",
                            fontWeight: "700",
                        },
                        h2: {
                            color: "#fff",
                            fontWeight: "700",
                        },
                        h3: {
                            color: "#fff",
                            fontWeight: "700",
                        },
                        strong: {
                            color: "#fff",
                        },
                        code: {
                            color: "#8bb4f7",
                            backgroundColor: "#1f2937",
                            borderRadius: "0.25rem",
                            padding: "0.125rem 0.25rem",
                        },
                        hr: {
                            borderColor: "#374151",
                        },
                    },
                },
            },
        },
    },
    plugins: [
        // Try to safely load the typography plugin
        (function () {
            try {
                return require("@tailwindcss/typography");
            } catch (e) {
                console.warn(
                    "Warning: @tailwindcss/typography plugin is not installed. Blog post styling may be affected."
                );
                return function () {};
            }
        })(),
    ],
};
