import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  title: 'dark',
  version: '0.0.1',
  colors: {
    primary: '#006d77',
    secondary: '#d9ead7',
    success: '#34c38f',
    info: '#50a5f1',
    warning: '#f1b44c',
    danger: '#f25f5c',
    light: '#74788d',
    dark: '#343a40',
    white: '#ffffff',
    shadow: '#343a40',
  },
  topbar: {
    background: '#343a40',
    color: '#006d77',
    link: '#006d77',
  },
  navbar: {
    background: '#495057',
    color: '#d9ead7',
    link: '#ffe066',
  },
  body: {
    background: '#343a40',
    color: '#dee2e6',
  },
  dropdown: {
    background: '#252b31',
    color: '#d8d8d8',
    link: '#d8d8d8',
  },
  fonts: {
    primary: '"Fira Sans", sans-serif',
    secondary: '"DM Sans", sans-serif',
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
