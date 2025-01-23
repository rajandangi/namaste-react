/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-gray': {
                    50: '#cccccc',
                    100: '#f0f0f0',
                    200: '#e0e0e0',
                    300: '#333333'
                },
            }
        },
    },
    plugins: [],
}

