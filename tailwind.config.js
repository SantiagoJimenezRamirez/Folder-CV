/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          navyStart: '#03045e',
          navyEnd: '#023e8a',
        },
        backgroundImage: {
          'gradient-diagonal': 'linear-gradient(to bottom right, #03045e, #023e8a)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}