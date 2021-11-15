const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    extend: { },
  },
  variants: {
    extend: {},
  },
  plugins: [
      //require('@tailwindcss/forms'),
  ],
}
