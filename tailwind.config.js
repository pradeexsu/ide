/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        loading1: "andydots 1.2s infinite ease-in-out both",
        loading2: "andydots 1.2s infinite .2s ease-in-out both",
        loading3: "andydots 1.2s infinite .4s ease-in-out both",
        text: "text .5s 0 1s  linear",
        beat: "pingg 3s infinite cubic-bezier(0, 0, 0.2, 1)",
      },
      keyframes: {
        pingg: {
          "100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
        andydots: {
          "0%, 80%, 100%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      fontFamily: {
        display: ["Oswald"],
        robo: ["'Roboto', sans-serif;"],
      },
    },
  },
  plugins: [],
};
