/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NavMenuFont: ['Montserrat', 'sans-serif'],
        subMenuFont:['Karla', 'sans-serif']
    },
    },
  },
  plugins: [],
}

