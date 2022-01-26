module.exports = {
  // mode: "jit",
  // purge: ["./src/Components/**/*.{html,js}"],
  // we can use here "class" if we want to control this datk mode manually
  darkMode: "media",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
