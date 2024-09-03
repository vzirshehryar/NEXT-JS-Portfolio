/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#232732",
                primary1: "#232737",
                primary2: "#232742",
                secondary: "#F6F6F6",
                primaryHover: "#232632",
                secondaryHover: "#F6F5F6",
            },
            textColor: {
                primary: "#FFFFFF",
                secondary: "#000000",
            },
        },
    },
    plugins: [],
};
