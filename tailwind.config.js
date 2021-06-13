module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        idk: "rgb(3,250,83)",
        idk2: "rgb(35, 35, 35)",
        idk3: "rgb(49,49,49)",
        idk4: "rgb(54,57,63)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
