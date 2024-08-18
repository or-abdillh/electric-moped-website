/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#E9EBEA",
                secondary: "#CECFD1",
                accent: "#141311",
                "gray-smoke": "#D0D1D3",
            },
        },
    },
    plugins: [],
};
