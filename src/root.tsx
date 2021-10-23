import { App } from 'App'
import GlobalStyle from 'resources/styles/global'

import 'normalize.css'
import { ThemeProvider } from 'styled-components'
import light from 'resources/styles/themes/light'

function Root() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
