/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loading1: "andydots 1.2s infinite ease-in-out both",
        loading2: "andydots 1.2s infinite .2s ease-in-out both",
        loading3: "andydots 1.2s infinite .4s ease-in-out both",
      },
      keyframes: {
        andydots: {
          "0%, 80%, 100%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
