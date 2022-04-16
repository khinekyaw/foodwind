module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'cookie': ['Cookie', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}