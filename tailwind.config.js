/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004D40',
        secondary: '#00796B',
        background: '#E0F7FA',
      },
    },
  },
  plugins: [],
}

