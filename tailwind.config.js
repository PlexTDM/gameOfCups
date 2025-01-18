/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aurora': ['Aurora', 'Arial', 'sans-serif']
      },
      colors: {
        'gray': '#252525'
      }
    },
  },
  plugins: [],
}