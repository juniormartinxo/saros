declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    version: string
    colors: {
      primary: string
      secondary: string
      success: string
      info: string
      warning: string
      danger: string
      light: string
      dark: string
      white: string
      shadow: string
    }
    topbar: {
      background: string
      color: string
      link: string
    }
    navbar: {
      background: string
      color: string
      link: string
    }
    body: {
      background: string
      color: string
    }
    dropdown: {
      background: string
      color: string
      link: string
    }
    grid: {
      theadBg: string
      theadColor: string
      tbodyBg: string
      tbodyColor: string
      trNthChildEvenBg: string
      trNthChildEvenColor: string
    }
    fonts: {
      primary: string
      secondary: string
    }
    fontSizes: {
      base: string
      small: string
      medium: string
      large: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
      desktopL: string
    }
  }
}

export {}
