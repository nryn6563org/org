/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ['Inter', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      ass: '0px 2px 10px rgba(0, 0, 0, 0.15)',
      social: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
    },
  },
  plugins: [],
}
