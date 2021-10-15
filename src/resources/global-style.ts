import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Fira Sans', sans-serif;;
  }

  html{
    font-size: 16px;
  }
`

export default GlobalStyle
