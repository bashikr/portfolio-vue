module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/components/**/**/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customBlue: {
                    DEFAULT: "#288FEB",
                },
            },
            fontSize: {
                1: ["1rem"],
                2: ["2rem"],
                3: ["3rem"],
                4: ["4rem"],
            },
            screens: {
                'min-200': '200px',
                "min-765": "765px",
                "min-1030": "1030px",
                "min-1250": "1250px",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
