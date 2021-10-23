declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      success: string
      info: string
      warning: string
      danger: string
      light: string
      dark: string
    }
    fonts: {
      primary: string
      secondary: string
      colorPrimary: string
      colorSecondary: string
    }
    fontSizes: {
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
