/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        great: ['Great Vibes'],
        montserrat: ['Montserrat', 'sans-serif'],
        updock: ['Updock', 'sans-serif']
      },
      screens: {
      },
    },
  },
  plugins: [],
}