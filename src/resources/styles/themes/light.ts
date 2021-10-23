import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#006d77',
    secondary: '#83c5be',
    success: '#34c38f',
    info: '#50a5f1',
    warning: '#f1b44c',
    danger: '#f46a6a',
    light: '#74788d',
    dark: '#343a40',
  },
  fonts: {
    primary: '"Fira Sans", sans-serif',
    secondary: '"DM Sans", sans-serif',
    colorPrimary: '#006d77',
    colorSecondary: '#83c5be',
  },
  fontSizes: {
    small: '1.2rem',
    medium: '1.6rem',
    large: '2.4rem',
  },
  breakpoints: {
    mobile: '414px',
    tablet: '768px',
    desktop: '1024px',
    desktopL: '1440px',
  },
}

export default light
