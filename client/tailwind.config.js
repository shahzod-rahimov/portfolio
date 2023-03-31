/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px',
        '2xl': '1536px'
      }
    }
  },
  plugins: []
}
