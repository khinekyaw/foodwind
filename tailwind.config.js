module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Mada"', "sans-serif"]
    },
    extend: {
      fontFamily: {
        mada: ["Mada", "sans-serif"],
        berkshireswash: ["Berkshire Swash", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "#E3332D",
          50: "#F9D0CF",
          100: "#F6BFBD",
          200: "#F19C99",
          300: "#ED7975",
          400: "#E85651",
          500: "#E3332D",
          600: "#BF1F19",
          700: "#8D1713",
          800: "#5C0F0C",
          900: "#2A0706"
        }
      }
    }
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
}
