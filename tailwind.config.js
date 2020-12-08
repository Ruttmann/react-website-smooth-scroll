module.exports = {
  purge: ["./src/**/.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { custom: ["Encode Sans Expanded", "sans-serif"] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
