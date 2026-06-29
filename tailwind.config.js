/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        marker: ['Montserrat', 'sans-serif'],
        sourGummy: ['Montserrat', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards'
      },
      transitionProperty: {
        'theme': 'background-color, color, border-color',
      },
      transitionDuration: {
        'theme': '400ms',
      },
    },
  },
  plugins: [],
}

