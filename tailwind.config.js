/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'olive-green': '#657a42',
        'hover-olive-green': '#7a8f58',
        'light-olive-green': '#cdd6bb',
        'hover-light-olive-green': '#e0ecc8',
        'gray-footer': '#373536',
        'darker-div-bg':'#f3f3f3'
      },
      textColor:{
        'olive-green': '#657a42',
        'light-olive-green': '#cdd6bb',
        'black-text':'#424242',

      }
    },
  },
  plugins: [],
}
