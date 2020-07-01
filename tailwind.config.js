module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1328px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      display: ['freight-display-pro', 'serif'],
      body: ['proxima-nova', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '24px'],
      base: ['15px', '24px'],
      lg: ['16px', '24px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['40px', '48px'],
    },
    colors: {
      transparent: 'transparent',
      pumpkin: '#e87a00',
      greyishBrownTwo: '#535353',
      battleshipGrey: '#6f7274',
      literalDown: '#d8d8d8',
      silver: '#ebeded',
      paleGrey: '#f4f8fa',
      white: '#fff',
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      320: '320px',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
    spacing: {
      0: 0,
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '64px',
      '4xl': '128px',
      '1col': '56px',
      '2col': '112px',
      '3col': '168px',
      '4col': '224px',
    },
    extend: {
      width: {
        '1/24': '4.16%',
        '3/24': '12.5%',
        '7/24': '29.16%',
      },
    },
  },
  variants: {},
  plugins: [],
};
