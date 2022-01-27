module.exports = {
  // mode: "jit",
  // purge: ["./src/Components/**/*.{html,js}"],
  // we can use here "class" if we want to control this datk mode manually
  darkMode: "media",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E79EA",
        secondary: "#FFEDD8",
        golden: "#FFCA28",
      },
    },
  },
  plugins: [],
};
