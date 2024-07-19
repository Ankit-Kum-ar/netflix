/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      placeholderColor: {
        'black': '#000000',
      },
    },
  },
  plugins: [],
}