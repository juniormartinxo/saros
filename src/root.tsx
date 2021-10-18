import { App } from 'App'
import GlobalStyle from 'resources/global-style'

import 'normalize.css'

function Root() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}

export { Root }
