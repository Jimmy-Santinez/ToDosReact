/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b69f0',
        secondary: '#6677d6',
        body: "#b8d4fa",
        azulHsla: '#4b69f0', // Color inicial
        moradoHsla: '#220b34', // Color final
        cardBg: 'hsla(0,0%,100%,.8)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}