/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aurora': ["Aurora", 'Arial', 'sans-serif'],
        'arial': ["Arial", 'sans-serif']
      },
      colors: {
        'gray': '#252525',
        'lgray': '#646464F2'
      }
    },
  },
  plugins: [],
}