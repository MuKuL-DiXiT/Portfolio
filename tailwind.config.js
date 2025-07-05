/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwright: ['Playwright', 'serif', 'sans'],
        marker: ['Permanent Marker', 'cursive'],
        sourGummy: ['"Sour Gummy"', 'cursive'],
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

