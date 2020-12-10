module.exports = {
  purge: ["./src/**/.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { custom: ["Encode Sans Expanded", "sans-serif"] },
      spacing: {
        800: "50rem",
      },
    },
    screens: {
      lg: { max: "960px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
