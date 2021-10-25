import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.body.background};
    font-size: ${(props) => props.theme.fontSizes.base};
    color: ${(props) => props.theme.body.color};
  }

  html{
    line-height: 1;
  }
`

export default GlobalStyle
