/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(31, 156, 0, 1)), url("/img/background.jpg")',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        }
      },
      colors: {
        primary: '#33FF00',
        secondary: '#1F9C00',
        subscrib: '#828282',
        unpaid: '#EB5757',
        error: '#FF0000',
        radialGradient: '#FFFFFFCC',
      }
    },
  },
  plugins: [],
}
