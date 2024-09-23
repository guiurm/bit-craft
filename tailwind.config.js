import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                text: {
                    50: "var(--text-50)",
                    100: "var(--text-100)",
                    200: "var(--text-200)",
                    300: "var(--text-300)",
                    400: "var(--text-400)",
                    500: "var(--text-500)",
                    600: "var(--text-600)",
                    700: "var(--text-700)",
                    800: "var(--text-800)",
                    900: "var(--text-900)",
                    950: "var(--text-950)",
                },
                background: {
                    50: "var(--background-50)",
                    100: "var(--background-100)",
                    200: "var(--background-200)",
                    300: "var(--background-300)",
                    400: "var(--background-400)",
                    500: "var(--background-500)",
                    600: "var(--background-600)",
                    700: "var(--background-700)",
                    800: "var(--background-800)",
                    900: "var(--background-900)",
                    950: "var(--background-950)",
                },
                primary: {
                    50: "var(--primary-50)",
                    100: "var(--primary-100)",
                    200: "var(--primary-200)",
                    300: "var(--primary-300)",
                    400: "var(--primary-400)",
                    500: "var(--primary-500)",
                    600: "var(--primary-600)",
                    700: "var(--primary-700)",
                    800: "var(--primary-800)",
                    900: "var(--primary-900)",
                    950: "var(--primary-950)",
                },
                secondary: {
                    50: "var(--secondary-50)",
                    100: "var(--secondary-100)",
                    200: "var(--secondary-200)",
                    300: "var(--secondary-300)",
                    400: "var(--secondary-400)",
                    500: "var(--secondary-500)",
                    600: "var(--secondary-600)",
                    700: "var(--secondary-700)",
                    800: "var(--secondary-800)",
                    900: "var(--secondary-900)",
                    950: "var(--secondary-950)",
                },
                accent: {
                    50: "var(--accent-50)",
                    100: "var(--accent-100)",
                    200: "var(--accent-200)",
                    300: "var(--accent-300)",
                    400: "var(--accent-400)",
                    500: "var(--accent-500)",
                    600: "var(--accent-600)",
                    700: "var(--accent-700)",
                    800: "var(--accent-800)",
                    900: "var(--accent-900)",
                    950: "var(--accent-950)",
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".btn": genBtn(),
                /*".btn-sm": {
                    //"@apply btn": {},
                    fontSize: theme("fontSize.sm"),
                },
                ".tab-btn": {
                    "@apply  py-1 px-2 cursor-pointer text-white bg-grey-400 border-l-0 border-0 border-r border-r-white":
                        {},
                    "&:last-child": {
                        //   border: theme("colors.primary.900"),
                        borderRight: "0px",
                    },
                    "&:hover": {
                        backgroundColor: theme("colors.grey.500"),
                    },
                },
                ".tab-btn--active": {
                    "@apply tab-btn bg-primary-500": {},
                    "&:hover": {
                        backgroundColor: theme("colors.primary.600"),
                    },
                },
                ".glass": {
                    "@apply backdrop-blur backdrop-saturate-[182%] bg-white/50 px-4 py-2 shadow-2xl rounded-md": {},
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                },*/
            });
        }),
    ],
};

//  focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800

/* eslint-disable no-unused-vars */
const btn = "font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none";
const btnRouded = "rounded-full";

const btnOutline = "focus:ring-4 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2";

const btnxs = "px-3 py-2 text-xs font-medium";
const btnsm = "px-3 py-2 text-sm font-medium";
const btnlg = "px-5 py-3 text-base font-medium";
const btnxl = "px-6 py-3.5 text-base font-medium";

function genBtn() {
    return {
        [`@apply ${btn}`]: {},
        "&-xs": {
            [`@apply ${btnxs}`]: {},
        },
        "&-sm": {
            [`@apply ${btnsm}`]: {},
        },
        "&-lg": {
            [`@apply ${btnlg}`]: {},
        },
        "&-xl": {
            [`@apply ${btnxl}`]: {},
        },
    };
}
