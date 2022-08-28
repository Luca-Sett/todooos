/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      // dark_blue: "#222D41",
      // blue: "#2E384F",
      // light_blue: "#3B4866",
      // accent: "#F2B321",
      // off_white: "#FFFFFFE6",
      // white: "#FFFFFF",
      background: "#151619",
      foreground: "#212327",
      "foreground-alt": "#111113",
      accent: "#e3ae29",
      text: "#efefef",
      error: "#F74F4F",
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
