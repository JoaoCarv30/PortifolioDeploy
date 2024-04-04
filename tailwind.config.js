/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'personal-color-dark-blue' : '#0C1016',
        'personal-color-rose' : '#E01C45',
        'personal-color-dark-black' : '#1d1d1d        '
        }
    },
  },
  plugins: [],
}