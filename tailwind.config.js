/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "custom-white": "#ffffff",
                "custom-gray": "#5b6072",
                "custom-brown": "#8d6959",
                "custom-orange-dark": "#bf7240",
                "custom-orange-bright": "#f17b27",
            },
        },
    },
    plugins: [],
};
