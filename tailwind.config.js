/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-white": "#6E707A",
        "color-primary-light": "#1E213A",
        "color-primary-dark": "#100E1D",
      }
    },
  },
  plugins: [],
}

