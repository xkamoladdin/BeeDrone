/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl':'1600px'
    },
    fontFamily: {
      inter: 'inter',
    },
  },
  plugins: [],
}
