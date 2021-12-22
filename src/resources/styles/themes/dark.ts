import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  title: 'dark',
  version: '0.0.1',
  colors: {
    primary: '#d9ead7', // '#292c37',
    secondary: '#74788d',
    success: '#006d77',
    info: '#50a5f1',
    warning: '#f1b44c',
    danger: '#f25f5c',
    light: '#74788d',
    dark: '#343a40',
    white: '#ffffff',
    shadow: '#1c1d1f',
  },
  fonts: {
    primary: '"Fira Sans", sans-serif',
    secondary: '"DM Sans", sans-serif',
  },
  fontSizes: {
    base: '0.6rem',
    small: '0.8rem',
    normal: '1rem',
    medium: '1.6rem',
    large: '2.4rem',
  },
  button: {
    borderRadius: '0.2rem',
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
  grid: {
    theadBg: '#1c1d1f',
    theadColor: '#d9ead7',
    tbodyBg: '#343a40',
    tbodyColor: '#d9ead7',
    trNthChildEvenBg: '#495057',
    trNthChildEvenColor: '#d9ead7',
  },
  dropdown: {
    background: '#252b31',
    color: '#d8d8d8',
    link: '#d8d8d8',
  },
  breakpoints: {
    mobile: '414px',
    tablet: '768px',
    desktop: '1024px',
    desktopL: '1440px',
  },
}

export default dark
