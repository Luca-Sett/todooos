/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    colors: {
      transparent: "transparent",
      background: "#15161a",
      foreground: "#222327",
      "foreground-alt-1": "#111113",
      "foreground-alt-2": "#0b0b0d",
      accent: "#e3ae2a",
      text: "#efefef",
      error: "#f74f4f",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      patua: ["'Patua One'", "cursive"],
    },
    fontSize: {
      copy: "1rem",
      subheading: "1.5rem",
      heading: "2rem",
      logo: "40px",
    },
    extend: {
      height: {
        navbar: "var(--navbar-height)",
      },
      maxWidth: {
        container: "1200px",
        form: "680px",
      },
      padding: {
        container: "min(8%, 5rem)",
      },
    },
  },
};
