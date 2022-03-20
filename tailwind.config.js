module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: "#288FEB",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
