/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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