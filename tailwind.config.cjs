/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.1s ease-in-out forwards",
        "fade-out": "fadeOut 0.1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
