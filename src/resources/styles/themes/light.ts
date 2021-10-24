import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#006d77',
    secondary: '#d9ead7',
    success: '#34c38f',
    info: '#50a5f1',
    warning: '#f1b44c',
    danger: '#f46a6a',
    light: '#74788d',
    dark: '#343a40',
    white: '#ffffff',
  },
  background: {
    body: '#d9ead7',
    navbar: '#006d77',
    topbar: '#d9ead7',
    dropdown: '#d9ead7',
    dropdownShadow: '#b9b9b9',
  },
  fonts: {
    primary: '"Fira Sans", sans-serif',
    secondary: '"DM Sans", sans-serif',
    colorPrimary: '#34c38f',
    colorSecondary: '#f1b44c',
  },
  fontSizes: {
    base: '0,9rem',
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
