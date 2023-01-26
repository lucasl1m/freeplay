module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: '#171B1F',
        white: '#FFFFFF',

        blue: {
          500: '#1991EB',
          700: '#21699F',
        },

        gray: {
          500: '#8D8D8D',
          800: '#252B33',
        },
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
