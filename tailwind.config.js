/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {

    extend: {
      colors:{
        'primary': '#3C78E4',
        'accent': '#EA9388',
        'lightblue': '#E7ECF2',
        'fogblue': '#D3DAE0',
        'gray': '#6f6f6f',
      },

      fontFamily: {
        'helvetica-neue': ['"Helvetica Neue"'],
        'inter': ['"Inter"'],
        }

    },
  },
  plugins: [],
}
