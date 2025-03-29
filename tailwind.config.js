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
      },
    },
  },
  plugins: [],
}

