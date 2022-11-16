/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svg}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'display': ['Archivo', 'ui-sans-serif'],
          'body': ['Ranade', 'ui-sans-serif']
        }
    },
  },
  plugins: [],
}