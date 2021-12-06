import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  title: 'light',
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
    shadow: '#d8d8d8',
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
    background: '#d9ead7',
    color: '#006d77',
    link: '#006d77',
  },
  navbar: {
    background: '#006d77',
    color: '#d9ead7',
    link: '#ffe066',
  },
  body: {
    background: '#fff', // '#d9ead7',
    color: '#006d77',
  },
  dropdown: {
    background: '#f1faee',
    color: '#d8d8d8',
    link: '#006d77',
  },
  grid: {
    theadBg: '#006d77',
    theadColor: '#d9ead7',
    tbodyBg: '#fff',
    tbodyColor: '#006d77',
    trNthChildEvenBg: '#c3e9ec',
    trNthChildEvenColor: '#006d77',
  },
  breakpoints: {
    mobile: '414px',
    tablet: '768px',
    desktop: '1024px',
    desktopL: '1440px',
  },
}

export default light
