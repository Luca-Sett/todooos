/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      "light-background": "#141B27",
      "dark-background": "#0D121ACC",
      accent: "#FF7332",
      white: "#FFF",
      "pale-white": "#FFFFFF99",
      "off-white": "#FFFFFFE0",
      "white-gradient-from": "#FFFFFF0D",
      "white-gradient-to": "#FFFFFF21",
      "blue-gradient-from": "#69A8FF0D",
      "blue-gradient-to": "#73A3E521",
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
        navbar: "80px",
      },
      maxWidth: {
        container: "1200px",
        form: "720px",
      },
    },
  },
};
