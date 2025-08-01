/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary
                sage: "#87BCB7",
                rust: "#D97D54",
                drab: "#324755",

                // Secondary
                ice: "#F0F3F4",
                fossil: "#C8D1D3",
                sand: "#B9B0A2",

                // Typography
                onyx: "#1B1C20",
                slate: "#6E8CA0",
                snow: "#FFFFFF",
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
            fontSize: {
                heading1: ['30pt', { fontWeight: '700' }],
                heading2: ['24pt', { fontWeight: '700' }],
                section: ['18pt', { fontWeight: '700' }],
                subtitle: ['18pt', { fontWeight: '400' }],
                cardtitle: ['15pt', { fontWeight: '700' }],
                copy15: ['15pt', { fontWeight: '300' }],
                copy14: ['14pt', { fontWeight: '300' }],
                timestamp: ['12pt', { fontWeight: '300' }],
            },
        },
    },
    plugins: [],
}
