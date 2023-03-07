/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
        fontFamily: {
            sans: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
              'system-ui',
            ],
          },
    },
  },
  plugins: [],
}
