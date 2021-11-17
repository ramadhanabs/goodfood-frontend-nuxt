module.exports = {
  purge:
  [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      smooth: '0px 11px 39px 0px rgba(0, 0, 0, 0.07)',
      none: 'none',
    },
    extend: {
      colors: {
        green: {
          primary: '#8BAC3E',
          hover: '#7B9F26',
          light: '#F9FFF6',
        },
        gray: {
          light: '#757575',
        },
        pastel: {
          blue: '#EAEEFA',
          tosca: '#E6F3F5',
          pink: '#F9EEF3',
          yellow: '#F3F7D9',
          green: '#F0FEEB',
        },
      },
      borderRadius: ['hover', 'focus'],
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
