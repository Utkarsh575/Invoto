const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('./src/styles/colors')

module.exports = {
  important: true,
  darkMode: true,
  mode: 'jit',

  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],

  theme: {
    fontFamily: {
      sans: ['Circular', ...defaultTheme.fontFamily.sans],
    },
    colors,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
