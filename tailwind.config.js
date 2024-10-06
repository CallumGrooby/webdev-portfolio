/** @type {import('tailwindcss').Config} */

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {},
    fontFamily: {
      IBMSans: ["IBM Plex Sans", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Exo: ["Exo", "sans-serif"],
    },
    colors: {
      red: "#FC414E",
      grey: "#4A4848",
      "text-grey": "#454545",
      white: "#F4F3EC",
      black: "#000000",
      "off-white": "#F4F3EC",
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      // default breakpoints but with 40px removed
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1920px",
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Define the first custom container class
        ".container-lg": {
          maxWidth: "1920px", // Larger container size
        },
        // Define the second custom container class
        ".container-sm": {
          maxWidth: "1440px", // Smaller container size
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
      });
    },
  ],
};
