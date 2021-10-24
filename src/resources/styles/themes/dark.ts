import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  title: 'dark',
  colors: {
    primary: '#0d1321',
    secondary: '#f0ebd8',
    success: '#34c38f',
    info: '#50a5f1',
    warning: '#f1b44c',
    danger: '#f46a6a',
    light: '#74788d',
    dark: '#343a40',
    white: '#ffffff',
  },
  background: {
    body: '#1d2d44',
    navbar: '#0d1321',
    topbar: '#1d2d44',
    dropdown: '#1d2d44',
    dropdownShadow: '#000',
  },
  fonts: {
    primary: '"Fira Sans", sans-serif',
    secondary: '"DM Sans", sans-serif',
    colorPrimary: '#f0ebd8',
    colorSecondary: '#83c5be',
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

export default dark
