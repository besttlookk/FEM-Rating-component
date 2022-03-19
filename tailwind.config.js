module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Overpass", "sans-serif"],
      },

      fontSize: {
        "primary-size": "15px",
      },

      colors: {
        primary: "hsl(25, 97%, 53%)",
        hover: "hsl(217, 12%, 63%)",
        text: "hsl(216, 12%, 54%)",
        "card-bg": "hsl(213, 19%, 18%)",
        bg: "hsl(216, 12%, 8%)",
      },

      spacing: {
        "90w": "90vw",
        "95w": "95vw",
      },
    },
  },
  plugins: [],
};
