module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#404366',
        secondary: '#F26A7E',
        grayish: '#C9CBE2',
        blackish: '#18191F',
        bgColor: '#dadced',
        background: '#f2f2f2',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
