module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: { images: "repeat(auto-fit, minmax(100px, 1fr))" },
      gridAutoRows: {
        "100px": "100px",
      },
    },
  },
  plugins: [],
};
